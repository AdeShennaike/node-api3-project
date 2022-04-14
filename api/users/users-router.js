const express = require('express');

const Users = require("./users-model")
const Posts = require("../posts/posts-model")
// You will need `users-model.js` and `posts-model.js` both
// The middleware functions also need to be required

const router = express.Router();

const {logger, validateUserId, validateUser, validatePost} = require("../middleware/middleware")

router.get('/', logger, async (req, res, next) => {
  // RETURN AN ARRAY WITH ALL THE USERS
  const users = await Users.get()
  try{
    res.json(users)
  }catch(err){
    next()
  }
});

router.get('/:id', logger, validateUserId, (req, res, next) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id
  Users.getById(req.params.id)
    .then( user => {
      res.status(200).json(user)
    })
    .catch(err => {
      next(err)
    })
});

router.post('/', logger, (req, res, next) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
});

router.put('/:id', logger, (req, res, next) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.delete('/:id', logger, (req, res, next) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
});

router.get('/:id/posts', logger, (req, res, next) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
});

router.post('/:id/posts', logger, (req, res, next) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.use((err, req, res, next) => {// eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message || "whoops! something went wrong",
    stack: err.stack
  })
});
// do not forget to export the router
module.exports = router;