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
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPosts = exports.getPost = exports.createPost = void 0;
const post_entity_1 = require("../models/post.entity");
const data_source_1 = require("../utils/data-source");
const postRepository = data_source_1.AppDataSource.getRepository(post_entity_1.Post);
/**
 * @Author : Joel Otepa Wembo
 * @Description : Service to laverage typeorm repository functions and libs built-in types
 * @Date : 11/20/2022
 */
const createPost = (input) => __awaiter(void 0, void 0, void 0, function* () {
    return yield postRepository.save(postRepository.create(Object.assign({}, input)));
});
exports.createPost = createPost;
const getPost = (postId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield postRepository.findOneBy({ id: postId });
});
exports.getPost = getPost;
const findPosts = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const builder = postRepository.createQueryBuilder('tasks');
    // search by title or description
    if (req.query.search) {
        builder.where('tasks.title LIKE :search OR tasks.description LIKE :search', {
            search: `%${req.query.search}%`,
        });
    }
    if (req.query.sort) {
        const sortQuery = req.query.sort === '-id' ? 'DESC' : 'ASC';
        builder.orderBy('tasks.title', sortQuery);
    }
    return yield builder.getMany();
});
exports.findPosts = findPosts;
//# sourceMappingURL=post.service.js.map