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
exports.findTags = void 0;
const tag_entity_1 = require("../models/tag.entity");
const data_source_1 = require("../utils/data-source");
const postRepository = data_source_1.AppDataSource.getRepository(tag_entity_1.Tag);
/**
 * @Author : Joel Otepa Wembo
 * @Description : Service to laverage typeorm repository functions and libs built-in types
 * @Date : 11/20/2022
 */
const findTags = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const builder = postRepository.createQueryBuilder('tag');
    if (req.query.search) {
        builder.where('tag.tag LIKE :search OR tag.id LIKE :search', {
            search: `%${req.query.search}%`,
        });
    }
    if (req.query.sort) {
        const sortQuery = req.query.sort === '-price' ? 'DESC' : 'ASC';
        builder.orderBy('post.title', sortQuery);
    }
    return yield builder.getMany();
});
exports.findTags = findTags;
//# sourceMappingURL=tag.service.js.map