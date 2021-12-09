const skills = [
    {id: 12345, skill: 'Write Functions', can: true},
    {id: 123456, skill: 'Spell', can: false},
    {id: 1234567, skill: 'Milk Cow', can: true}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
  };
  
  function getAll() {
    // id = parseInt(id)
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id == id);
  }

  function create(skill) {
    skill.id = Math.floor(Math.random() * 1000000);
    skill.can = false;
    skills.push(skill);
  }
  
  function deleteOne(id) {
    const idx = skills.findIndex((skill) => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }