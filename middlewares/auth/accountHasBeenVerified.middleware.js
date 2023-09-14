export const accountHasBeenVerified = async (req,res,next) => {
    if(req.user.is_verified){
        return next()
    }
    res.status(400).json({
        success: true,
        message: 'the user did not verify his account'
    })
 }