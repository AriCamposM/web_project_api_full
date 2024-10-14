const jwt = require('jsonwebtoken');
const JWT_SECRET = '3f6ae4482493d42415168086ea93ad191f7ff88a0204b18846ac0dac1e70e466';

const handleAuthError = (res) => {
  res
  .status(401)
  .send({ message:'Authentication Error'});
};

const extractBearerToken = (header) => {
  return header.replace('Bearer ','');
};

module.exports = ( req, res, next ) => {
  const { authorization } = req.headers;

  if( !authorization || !authorization.startsWith('Bearer ')){
    return handleAuthError(res);
  };

  const token = extractBearerToken(authorization);

  let payload;

  try{
    console.log(token);
    payload = jwt.verify(token, JWT_SECRET);
    console.log(payload);
  } catch (err){
    return handleAuthError(res);
  }
  req.user = req.user || {};
  req.user._id = payload;

  next();
}