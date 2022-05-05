const router = require('express').Router();
const {getAllThought, getThoughtById, createThought, updateThought, deleteThought, createReaction, deleteReaction} = require('../../controllers/thought-controller');

// get and post thoughts
router
  .route('/')
  .get(getAllThought)
  .post(createThought);
// get one, put, and delete thoughts
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);
// post reactions
router
  .route('/:thoughtId/reactions')
  .post(createReaction);

router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;