"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_controller_1 = require("../controllers/post.controller");
const validate_1 = require("../middleware/validate");
const post_schema_1 = require("../schemas/post.schema");
const router = express_1.default.Router();
router
    .route('/')
    .post((0, validate_1.validate)(post_schema_1.createPostSchema), post_controller_1.createPostHandler)
    .get(post_controller_1.getPostsHandler);
router
    .route('/:postId')
    .get((0, validate_1.validate)(post_schema_1.getPostSchema), post_controller_1.getPostHandler)
    .patch((0, validate_1.validate)(post_schema_1.updatePostSchema), post_controller_1.updatePostHandler)
    .delete((0, validate_1.validate)(post_schema_1.deletePostSchema), post_controller_1.deletePostHandler);
exports.default = router;
//# sourceMappingURL=post.routes.js.map