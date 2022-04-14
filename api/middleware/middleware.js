const Users = require('../users/users-model')
function logger(req, res, next) {
  // DO YOUR MAGIC
  const requestUrl = req.originalUrl
  const method = req.method
  const timestamp = new Date().toLocaleString()
  console.log(`[${timestamp}] ${method} at ${requestUrl}`)
  next()
}

async function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  const checkId = await Users.getById(req.params.id)
  if(!checkId){
    next({status: 404, message: "user not found"})
  }else{
    next()
  }
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  const {name} = req.body
  if(!name){
    next({status: 400, message: "missing required name field"})
  }else{
    next()
  }
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  const {text} = req.body
  if(!text){
    next({status: 400, message: "missing required text field"})
  }else{
    next()
  }
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost}