"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTagSchema = exports.updateTagSchema = exports.getTagSchema = exports.createTagSchema = void 0;
const zod_1 = require("zod");
exports.createTagSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        tag: (0, zod_1.string)({
            required_error: 'tag is required',
        })
    }),
});
const params = {
    params: (0, zod_1.object)({
        postId: (0, zod_1.string)(),
    }),
};
exports.getTagSchema = (0, zod_1.object)(Object.assign({}, params));
exports.updateTagSchema = (0, zod_1.object)(Object.assign(Object.assign({}, params), { body: (0, zod_1.object)({
        tag: (0, zod_1.string)(),
    }).partial() }));
exports.deleteTagSchema = (0, zod_1.object)(Object.assign({}, params));
//# sourceMappingURL=tags.schema.js.map