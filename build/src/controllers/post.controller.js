"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePostHandler = exports.updatePostHandler = exports.getPostsHandler = exports.getPostHandler = exports.createPostHandler = void 0;
const post_service_1 = require("../services/post.service");
const appError_1 = __importDefault(require("../utils/appError"));
const createPostHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const user = await findUserById(res.locals.user.id as string);
        const task = yield (0, post_service_1.createPost)(req.body);
        res.status(201).json({
            task,
            status: 'success',
        });
    }
    catch (err) {
        if (err.code === '23505') {
            return res.status(409).json({
                status: 'fail',
                message: 'Post with that title already exist',
            });
        }
        next(err);
    }
});
exports.createPostHandler = createPostHandler;
const getPostHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield (0, post_service_1.getPost)(req.params.postId);
        if (!tasks) {
            return next(new appError_1.default(404, 'Task with that ID not found'));
        }
        res.status(200).json({
            status: 'success',
            tasks,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getPostHandler = getPostHandler;
// displaying all the tasks
const getPostsHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield (0, post_service_1.findPosts)(req);
        // res.status(200).json({
        //   status: 'success',
        //   results: tasks.length,
        //   tasks,
        // });
        res.send(tasks);
    }
    catch (err) {
        next(err);
    }
});
exports.getPostsHandler = getPostsHandler;
const updatePostHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield (0, post_service_1.getPost)(req.params.postId);
        if (!post) {
            return next(new appError_1.default(404, 'Taks with that ID not found'));
        }
        Object.assign(post, req.body);
        const updatedPost = yield post.save();
        res.status(200).json({
            status: 'success',
            data: {
                post: updatedPost,
            },
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updatePostHandler = updatePostHandler;
const deletePostHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield (0, post_service_1.getPost)(req.params.postId);
        if (!post) {
            return next(new appError_1.default(404, 'Post with that ID not found'));
        }
        yield post.remove();
        res.status(204).json({
            status: 'success',
            data: null,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deletePostHandler = deletePostHandler;
//# sourceMappingURL=post.controller.js.map