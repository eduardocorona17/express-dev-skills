

const Skill = require('../models/skill')


module.exports = {
    index,
    show,
    new: newSkill,
	create,
	delete: deleteSkill,
};

function newSkill(req, res) {
	res.render('skills/new');
}

function index(req, res) {
   let skills = Skill.getAll();// this has to match exactly as const above because that is what we are calling/'getting All' of
   res.render('skills/index', {
     skills //this render is spitting out another variable 
    });
      
};

function show(req, res) {
    let skill = Skill.getOne(req.params.id);
    res.render('skills/show', { skill });
}

function create(req, res) {
	console.log(req.body);
	Skill.create(req.body);
	res.redirect('/skills');
}

function deleteSkill(req, res) {
	Skill.deleteOne(req.params.id);
	res.redirect('/skills');
}
//     res.render('skills/show', {
//       skills: Skill.getOne(req.params.id),
//     });
//   }