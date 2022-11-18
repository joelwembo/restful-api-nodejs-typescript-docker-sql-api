import { number, object, string, TypeOf, z } from 'zod';
import { RoleEnumType } from '../models/user.entity';

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: 'Required field',
    }),
    email: string({
      required_error: 'Required field',
    }).email('Required field'),
    username: string(),
    mobile: number(),
    description: string(),
    password: string({
      required_error: 'Password is required',
    })
      .min(8, 'Password must be more than 8 characters')
      .max(32, 'Password must be less than 32 characters'),
    role: z.optional(z.nativeEnum(RoleEnumType)),
  }),
});

export const loginUserSchema = object({
  body: object({
    email: string({
      required_error: 'Required field',
    }).email('Required field'),
    password: string({
      required_error: 'Password is required',
    }).min(8, 'Invalid email or password'),
  }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>['body'],
  'passwordConfirm'
>;

export const verifyEmailSchema = object({
  params: object({
    verificationCode: string(),
  }),
});

export type LoginUserInput = TypeOf<typeof loginUserSchema>['body'];
export type VerifyEmailInput = TypeOf<typeof verifyEmailSchema>['params'];

