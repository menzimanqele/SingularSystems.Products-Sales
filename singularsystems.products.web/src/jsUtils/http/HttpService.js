import { Logger } from "../logging/logger";
import axios from "axios";

export class HttpService {
  constructor(baseUrl) {
    this.logger = new Logger();
    this.baseUrl = baseUrl;
    this.apiService=  axios.create({
        baseURL: baseUrl,
      });
  }

  async get(url) {

    try {

        this.logger.info(this.constructor.name,'get','making a http get request', `${this.baseUrl}/${url}`);

        const response = await this.apiService.get(`${url}`);

        return {data : response.data, status : response.status};
        
      } catch (error) {
        this.logger.error(this.constructor.name,'get',`an error occurred making a http get request : ${this.baseUrl}/${url}`, error);
        
        return {error : error.message};
      }
  } 
}
