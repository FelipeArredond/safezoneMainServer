const db = require('./store');

function register(user){
  return db.addUser(user);
}

function getUsers(req,res){
  return db.getUser(req,res);
}

function Log(req,res,userData){
  return db.findUser(req,res,userData);
}

function reports(req,res,userData){
  return db.getReportsByUser(req,res,userData);
}

module.exports = {
  register,
  getUsers,
  Log,
  reports
}
