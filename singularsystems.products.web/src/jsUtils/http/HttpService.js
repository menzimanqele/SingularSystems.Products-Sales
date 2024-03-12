import { httpHandler } from "./HttpHandler";

export class HttpService{
    constructor(baseUrl){
        const classType = Object.getPrototypeOf(this).constructor;

        if (!classType._instance) {
			classType._instance = this;

			this.httpHandler = new httpHandler(
				baseUrl,
				timeoutMilliseconds,
			);

		}
		return classType._instance;
    }

    async get (url)  {
        const result = await this.httpHandler.get(`/${url}`);

        if (result.error) {
            logger.error(`${this.name}:${endPoint}`, `Failed to call REST endpoint`, result.error);
        }

        return result;
    };

    async getById(id) {
        const path = `/${url}/${id}`;
        const result = await this.httpHandler.get(path);

        if (result.error) {
            logger.error(`${this.name}:${endPoint}`, `Failed to call REST endpoint`, result.error);
        }
        return result;
    };


}