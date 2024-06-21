const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    console.log("++++++reate new comment +++++++++++++",req.body,req.session.user_id, req.session)
  try {
    const newComments = await Comments.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    console.log(newComments)
    res.status(200).json(newComments);
  } catch (err) {
    console.log("Comment add",err)
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comments.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;