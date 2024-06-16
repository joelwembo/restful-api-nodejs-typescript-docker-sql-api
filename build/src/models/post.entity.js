"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const typeorm_1 = require("typeorm");
const model_entity_1 = __importDefault(require("./model.entity"));
/**
 * @Author : Joel Otepa Wembo
 * @Description : Tasks Model to define Tables and columns
 * @Date : 11/20/2022
 */
let Post = class Post extends model_entity_1.default {
};
__decorate([
    (0, typeorm_1.Column)({
        unique: true,
    }),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Post.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: 'in-progress',
    }),
    __metadata("design:type", String)
], Post.prototype, "task_status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: 'Personal',
        type: 'json'
    }),
    __metadata("design:type", String)
], Post.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: 'Primary Subtask',
        type: 'json'
    }),
    __metadata("design:type", String)
], Post.prototype, "subTasks", void 0);
Post = __decorate([
    (0, typeorm_1.Entity)('tasks')
], Post);
exports.Post = Post;
//# sourceMappingURL=post.entity.js.map