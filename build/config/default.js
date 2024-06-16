"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = void 0;
exports.default = {
    origin: 'http://localhost:3000',
    accessTokenExpiresIn: 15,
    refreshTokenExpiresIn: 60,
    redisCacheExpiresIn: 60
};
require('dotenv').config();
exports.port = process.env.PORT || 5001;
//# sourceMappingURL=default.js.map