class Logger {
    constructor() {}
  
    /**
   * @description log info 
   * @param {*} fileName 
   * @param {*} scope 
   * @param {*} message 
   * @param {*} exceptionOrData 
   * @memberof Logger
   */
    info(fileName, scope, message, exceptionOrData = undefined) {
      if (!fileName && !scope && !message) {
        console.error(
          `Logger:info, file name : ${fileName} , scope :${scope} and message :${message} cannot be empty/undefined`
        );
      }
      console.info(`${fileName}:${scope} , ${message} ,`, exceptionOrData);
    };
  
    /**
   * @description log error 
   * @param {*} fileName 
   * @param {*} scope 
   * @param {*} message 
   * @param {*} exceptionOrData 
   * @memberof Logger
   */
    error(fileName, scope, message, exceptionOrData = undefined) {
      if (!fileName || fileName === undefined && !scope && !message) {
        console.error(
          `Logger:info, file name : ${fileName} , scope :${scope} and message :${message} cannot be empty/undefined`
        );
      }
      console.error(`${fileName}:${scope} , ${message} ,`, exceptionOrData);
  };
  
  /**
   * @description log warning 
   * @param {*} fileName 
   * @param {*} scope 
   * @param {*} message 
   * @param {*} exceptionOrData 
   * @memberof Logger
   */
  warning(fileName, scope, message, exceptionOrData = undefined) {
      if (!fileName || fileName === undefined && !scope && !message) {
        console.error(
          `Logger:info, file name : ${fileName} , scope :${scope} and message :${message} cannot be empty/undefined`
        );
      }
      console.warn(`${fileName}:${scope} , ${message} ,`, exceptionOrData);
    };
  }
  
  export {Logger}