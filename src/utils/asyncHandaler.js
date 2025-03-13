
const asyncHandaler = (requestHandler) =>{
  (req, res, next) => {
    Promise.resolve(requestHandler(req,res,next))
    .catch((err)=> next(err))
  }
}

export {asyncHandaler}
















// --------------- Another mathed using try and catch ----------

// const asyncHandaler = (fun) => async (req,res,next) => {
//   try {
//     await (req,res,next)
    
//   } catch (error) {
//     res.status(error.code || 404).json({
//       success: false,
//       massage: error.massage
//     })
    
//   }
// }

// export {asyncHandaler}