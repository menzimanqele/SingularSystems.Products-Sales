import { Logger } from "../logging/logger";
import { httpHandler } from "./HttpHandler";

export class HttpService {
  constructor(baseUrl) {
    this.logger = new Logger();
    this.baseUrl = baseUrl;
  }

  get name() {
    return this.constructor.name;
  }

  async get(url) {
    await fetch(`${this.baseUrl}/${url}`, {
      method: "GET",
    mode: "same-origin", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(((response)=>{
        console.log(response);
    }))
    
    
    .then((data)=>{

        console.log('rest resuls');
        console.log(data);
         
    }).catch((error)=>{

    });

     
    
    

  }

  // fetch(`${process.env.REACT_APP_API}/employee/all-employees`)
  // .then((response) => {
  //   if (!response.ok) {
  //     throw new Error('Failed to fetch employee data');
  //   }
  //   return response.json();
  // })
  // .then((data) => {
  //   console.log('Received data from backend:', data);
  //   const employees = data.map((employeeData: any) => (
  //     new EmployeeModel(
  //       employeeData.employeeId,
  //       employeeData.personId,
  //       employeeData.employeeNum,
  //       new Date(employeeData.employeeDate),
  //       employeeData.terminatedDate ? new Date(employeeData.terminatedDate) : null
  //     )
  //   ));
  //   this.setState({ employees, loading: false }); // Set the employees state here
  // })
  // .catch((error) => {
  //   this.setState({ error: error.message, loading: false });
  // });

  // async getById(id) {
  //     const path = `/${url}/${id}`;
  //     const result = await this.httpHandler.get(path);

  //     if (result.error) {
  //         this.logger.error(`${this.name}:${url}`, `Failed to call REST endpoint`, result.error);
  //     }
  //     return result;
  // };
}
