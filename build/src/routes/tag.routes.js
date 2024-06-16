"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tag_controller_1 = require("../controllers/tag.controller");
// import {
//     GetPostInput,
// } from '../schemas/tags.schema';
const router = express_1.default.Router();
router
    .route('/')
    .get(tag_controller_1.getTasksHandler);
exports.default = router;
//# sourceMappingURL=tag.routes.js.map