const router = require('express').Router();
const { User, Post } = require("../../models");
const withAuth = require('../../utils/auth');

// shows all users but not password
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
      })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
  });

// finds a single user based on user ID and includes the user's posts with their comments  
router.get('/:id', (req, res) => {
    User.findOne({
      attributes: { exclude: ['password'] },  
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Post,
          attributes: ['id', 'title', 'contents', 'created_at']
        },
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'created_at'],
          include: {
            model: Post,
            attributes: ['title']
          }
        },
        {
          model: Post,
          attributes: ['title']
        }
      ]
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// creates a new user  
router.post('/', (req, res) => {
    User.create({
      username: req.body.username,
      password: req.body.password
    })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
    
        res.json(dbUserData);
      });
    })
  });

// retrieves user information to compare to input for user login  
router.post('/login', (req, res) => {
    User.findOne({
      where: {
       username: req.body.username
      }
    }).then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }
  
      const validPassword = dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
  
        res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
    });
  });

// updates user information  
router.put('/:id', (req, res) => {
    User.update(req.body, {
      individualHooks: true,
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData[0]) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// removes a user if a user is logged in  
router.delete('/:id', withAuth, (req, res) => {
    User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// logs user out of session  
router.post('/logout', (req, res) => {
  console.log(req.session.loggedIn);
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
  });

module.exports = router;