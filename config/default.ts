export default {
  origin: 'http://localhost:5000',
  accessTokenExpiresIn: 15,
  refreshTokenExpiresIn: 60,
  redisCacheExpiresIn: 60
 
};

require('dotenv').config();

export const port = process.env.PORT || 5001;
