

export const errorHandler = (error, req, res, next) => {

    const errorStatus = error.status || 500;
    const errorMessage = error.message || "Unknown error! Please try something new!";
    
    res.status(errorStatus).json({
        status : errorStatus,
        message : errorMessage,
        stack : error.stack
    });

}

