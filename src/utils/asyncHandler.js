const asynchandler = (requestHandler) => {
    return (res, req, next) => {
        Promise
        .resolve(requestHandler(res, req, next))
        .catch((err) => next(err))
    }
}

export { asynchandler }

// const asynchandler = (fn) => async(req,res,next) => {
//     try {
//         fn(req,res,next)
//     } catch (error) {
//        res.status(err.code || 500).json({
//         succes:true,
//         message:err.message
//        })

//     }

// }