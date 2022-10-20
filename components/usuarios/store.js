const UserModel = require('./model');

function addUser(user){
  console.log('[POST] User ' + new Date())
  const newUser = new UserModel(user);
  newUser.save();
  return 'Element added'
}

async function getUser(req,res){
  console.log('[GET] Usuarios ' + new Date());
  const data = await UserModel.find({})
  res.json(data)
}

async function findUser(req,res,userData){
  console.log('[POST] Buscando Usuario');
  const data = await UserModel.find({correo: userData.correo,contraseña: userData.contraseña}).exec()
  console.log(data)
  if(data){
    res.json(data).status(200);
  }else{
    res.json([error]).status(400).send()
  }
}

module.exports = {
  addUser,
  getUser,
  findUser
}
