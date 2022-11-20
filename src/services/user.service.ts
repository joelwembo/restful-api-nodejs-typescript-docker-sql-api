import config from 'config';
import { DeepPartial } from 'typeorm';
import { User } from '../models/user.entity';
import redisClient from '../utils/connectRedis';
import { AppDataSource } from '../utils/data-source';
import { signJwt } from '../utils/jwt';

/**
 * @Author : Joel Otepa Wembo
 * @Description : Service to laverage typeorm repository functions and libs built-in types
 * @Date : 11/20/2022
 */

const userRepository = AppDataSource.getRepository(User);

export const createUser = async (input: DeepPartial<User>) => {
  return userRepository.save(userRepository.create(input));
};

export const findUserByEmail = async ({ email }: { email: string }) => {
  return await userRepository.findOneBy({ email });
};

export const findUserById = async (userId: string) => {
  return await userRepository.findOneBy({ id: userId });
};

export const findUser = async (query: Object) => {
  return await userRepository.findOneBy(query);
};
export const signTokens = async (user: User) => {
  // 1. Create Session
  // in product  redisClient.set(user.id, JSON.stringify(user)
  redisClient.set('788800', JSON.stringify(user), {
    EX: config.get<number>('redisCacheExpiresIn') * 60,
  });

  // 2. Create Access and Refresh tokens
  const access_token = signJwt({ sub: user.id }, 'accessTokenPrivateKey', {
    expiresIn: `${config.get<number>('accessTokenExpiresIn')}m`,
  });

  const refresh_token = signJwt({ sub: user.id }, 'refreshTokenPrivateKey', {
    expiresIn: `${config.get<number>('refreshTokenExpiresIn')}m`,
  });

  return { access_token, refresh_token };
};
