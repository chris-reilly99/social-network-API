const router = require('express').Router();
const {getAllUser, getUserById, createUser, updateUser, deleteUser, addFriend, deleteFriend} = require('../../controllers/user-controller');

// get and post users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// get one, put, and delete users
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);
router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;