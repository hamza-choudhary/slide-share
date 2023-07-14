

/**
 * this will handel any type of error in the controllers
 */
class ErrorHandler extends Error{
    constructor(statusCode , message){
        super(message)
        this.statusCode = statusCode
        Error.captureStackTrace(this,this.constructor)
    }
}

export default ErrorHandler