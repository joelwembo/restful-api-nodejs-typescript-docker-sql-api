import { createClient } from 'redis';

const redisClient = createClient({
  url: 'redis://localhost:6379'
});

const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log('Local Redis client connect successfully ! ');
    redisClient.set('try', 'Hello Welcome to Express with TypeORM');
  } catch (error) {
    console.log(error);
    setTimeout(connectRedis, 10000);
  }
};

connectRedis();

export default redisClient;
