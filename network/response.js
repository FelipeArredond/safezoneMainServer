exports.succes = function (req,res, message,status) {
  res.status(status || 200).json({'error': '', 'body': message});
}

exports.error = function (req,res, message,status, error, details) {
  console.error(details)
  res.status(status || 200).json({'error': error, 'body': ''});
}
