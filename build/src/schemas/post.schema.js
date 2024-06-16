"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePostSchema = exports.updatePostSchema = exports.getPostSchema = exports.createPostSchema = void 0;
const zod_1 = require("zod");
exports.createPostSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        title: (0, zod_1.string)({
            required_error: 'title here',
        }),
        description: (0, zod_1.string)({
            required_error: 'description is required',
        }),
        task_status: (0, zod_1.string)({
            required_error: 'task_status is required',
        }),
        tags: (0, zod_1.any)(),
        subTasks: (0, zod_1.any)()
    }),
});
const params = {
    params: (0, zod_1.object)({
        postId: (0, zod_1.string)(),
    }),
};
exports.getPostSchema = (0, zod_1.object)(Object.assign({}, params));
exports.updatePostSchema = (0, zod_1.object)(Object.assign(Object.assign({}, params), { body: (0, zod_1.object)({
        title: (0, zod_1.string)(),
        description: (0, zod_1.string)(),
        task_status: (0, zod_1.string)(),
        tags: (0, zod_1.any)(),
        subTasks: (0, zod_1.any)()
    }).partial() }));
exports.deletePostSchema = (0, zod_1.object)(Object.assign({}, params));
//# sourceMappingURL=post.schema.js.map