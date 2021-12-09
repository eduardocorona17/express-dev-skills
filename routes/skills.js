var express = require('express');// I am bringing express into this file
var router = express.Router();// router "routes" 
//require the controller that exports 
//the todo crud functions:
const skillsCtrl = require('../controllers/skills');

// router.get('/', skillsCtrl.index);

//All actual paths start with todos
//GET "/todos" - Index Route
router.get('/', skillsCtrl.index);
    // the routers job is to get to "fetch" data
    router.get('/new', skillsCtrl.new);

    //GET  "/todos/:id" - Show Route
    router.get('/:id', skillsCtrl.show);

    router.post('/', skillsCtrl.create);
    
    router.delete('/:id', skillsCtrl.delete);

module.exports = router;