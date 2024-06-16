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
exports.addedUserEntity1668727756747 = void 0;
class addedUserEntity1668727756747 {
    constructor() {
        this.name = 'addedUserEntity1668727756747';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "id"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")`);
            yield queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT now()`);
            yield queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT now()`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "name"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "name" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "email" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "role"`);
            yield queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('user', 'admin')`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "role" "public"."users_role_enum" NOT NULL DEFAULT 'user'`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "photo"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "photo" character varying NOT NULL DEFAULT 'default.png'`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "username" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username")`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "mobile"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "mobile" integer NOT NULL DEFAULT '0'`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "description"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "description" character varying NOT NULL DEFAULT 'I love working with Django and React JS'`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "verified"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "verified" boolean NOT NULL DEFAULT true`);
            yield queryRunner.query(`CREATE INDEX "email_index" ON "users" ("email") `);
            yield queryRunner.query(`CREATE INDEX "username_index" ON "users" ("username") `);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP INDEX "public"."username_index"`);
            yield queryRunner.query(`DROP INDEX "public"."email_index"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "verified"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "verified" character varying(100)`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "description"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "description" character varying(100)`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "mobile"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "mobile" character varying(100)`);
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "username" character varying(100) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "photo"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "photo" character varying(100)`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "role"`);
            yield queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "role" character varying(100)`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(100) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "email" character varying(100) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "name"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "name" character varying(100) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT (CURRENT_TIMESTAMP AT TIME ZONE 'UTC')`);
            yield queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT (CURRENT_TIMESTAMP AT TIME ZONE 'UTC')`);
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "id"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "id" SERIAL NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")`);
        });
    }
}
exports.addedUserEntity1668727756747 = addedUserEntity1668727756747;
//# sourceMappingURL=1668727756747-added-user-entity.js.map