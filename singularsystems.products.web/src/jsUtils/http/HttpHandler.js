import axios from "axios";
import { Logger } from "../logging/logger";
export class httpHandler {
  constructor(
    retries,
    responseType = "json",
    timeout = 35000,
    contentType = "application/json"
  ) {
    this.retries = retries;
    this.contentType = contentType;
    this.responseType = responseType;
    this.timeout = timeout;
    this.service = axios.create();
    this.logger = new Logger();
  }



  _createConfig(
    method = "get",
    endpoint = "/api",
    data = {},
    params = {},
    responseType,
    timeout,
    contentType,
    headers
  ) {
    let hdr = {
      "Content-Type": contentType != undefined ? contentType : this.contentType,
    };
    if (this.headers != undefined) hdr = { ...hdr, ...this.headers };
    if (headers != undefined) hdr = { ...hdr, ...headers };

    const config = {
      method: method,
      baseURL: this.restEndpoint,
      url: endpoint,
      timeout: timeout != undefined ? timeout : this.timeout,
      responseType:
        responseType != undefined ? responseType : this.responseType,
      params: params,
    };

    if (method.toLowerCase() !== "get") {
      config.data = data;
    }

    this._config = config; // save for unit test interrogation
    return config;
  }
  async get(
    endpoint,
    params,
    responseType,
    accessToken,
    timeout,
    withCredentials,
    contentType,
    headers
  ) {
    const config = this._createConfig(
      "get",
      endpoint,
      {},
      params,
      responseType,
      accessToken,
      timeout,
      withCredentials,
      contentType,
      headers
    );
    return this._execute(config);
  }
  async _execute(config) {
    this.logger.debug(
      "httpHandler:_execute",
      "trying to call endpoint",
      config
    );
    try {
      return await this._retryCalls(config);
    } catch (err) {
      // provide an property that returns a custom message, or the default error message
      err.errorMessage = err.error.message;
      if (err.error.response && err.error.response.data)
        err.errorMessage = err.error.response.data.message;

      return err;
    }
  }

  async _retryCalls(config) {
    const me = this;

    return new Promise(async (resolve, reject) => {
      for (let i = 0; i < this.retries; i++) {
        try {
          const response = await me.service.request(config);
          this.logger.debug(
            "httpHandler:_retryCalls",
            "success calling endpoint",
            {
              url: config.url,
            }
          );
          return resolve(response);
        } catch (error) {
          this.logger.error(
            "httpHandler:_retryCalls",
            "error calling endpoint",
            error
          );
          if (i >= this.retries - 1) {
            return reject({ error });
          }
        }
      }
    });
  }
}
