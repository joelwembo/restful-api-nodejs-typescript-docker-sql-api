"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyEmailSchema = exports.loginUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
const user_entity_1 = require("../models/user.entity");
exports.createUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({
            required_error: 'Required field',
        }),
        email: (0, zod_1.string)({
            required_error: 'Required field',
        }).email('Required field'),
        username: (0, zod_1.string)(),
        description: (0, zod_1.string)(),
        password: (0, zod_1.string)({
            required_error: 'Password is required',
        })
            .min(8, 'Password must be more than 8 characters')
            .max(32, 'Password must be less than 32 characters'),
        role: zod_1.z.optional(zod_1.z.nativeEnum(user_entity_1.RoleEnumType)),
    }),
});
exports.loginUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({
            required_error: 'Required field',
        }).email('Required field'),
        password: (0, zod_1.string)({
            required_error: 'Password is required',
        }).min(8, 'Invalid email or password'),
    }),
});
exports.verifyEmailSchema = (0, zod_1.object)({
    params: (0, zod_1.object)({
        verificationCode: (0, zod_1.string)(),
    }),
});
//# sourceMappingURL=user.schema.js.map