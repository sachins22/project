class ApiError extends Error {
    constructor(statusCode,
        message="Something went wrong",
        Error=[],
        stack=""
        )
        {
            super(message)
        this.statusCode=statusCode,
        this.message=message,
        this.Error=Error

        if(stack){
            this.stack=stack
        }else{
         Error.captureStackTrace(this,this.construstor)
        }
        }
}

export {
    ApiError
}