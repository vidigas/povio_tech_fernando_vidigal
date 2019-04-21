import jwt from 'jsonwebtoken';
import { SECRET } from '../../env.config';




let checkToken = (req, res, next) => {

  switch(req.url.split('/')[1]){
    case '':
    case 'build':
    case 'signup':
    case 'login':
    case 'most-liked': 
      return next();
       
    case 'user' : 
      if(req.url.split('/').length < 4)  return next();
    default : break;
  }

  let token = req.headers['x-access-token'] || req.headers['authorization']; 
  if ( token && token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, SECRET, (err, decoded) => {
      if(!err){
        req.token = decoded;

        return next();
        

      } 
        return res.status(200).send({
          success: false,
          message: 'Token is not valid'
        });
    });
  } else {
    return res.status(200).send({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
};

export default checkToken;