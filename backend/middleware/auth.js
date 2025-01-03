const jwt = require('jsonwebtoken');
const JWT_SECRET = '3f6ae4482493d42415168086ea93ad191f7ff88a0204b18846ac0dac1e70e466';

const handleAuthError = (res, message = 'Authentication Error') => {
  res.status(401).send({ message });
};

const extractBearerToken = (header) => {
  return header.replace('Bearer ', '');
};

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return handleAuthError(res, 'Authorization token missing or malformed');
  }

  const token = extractBearerToken(authorization);

  let payload;
  try {
    // Verificar y decodificar el token
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    console.log(err)
    // Token inválido o expirado
    return handleAuthError(res, 'Invalid or expired token');
  }

  req.user = req.user || {};
  req.user._id = payload._id;

  next();
};
