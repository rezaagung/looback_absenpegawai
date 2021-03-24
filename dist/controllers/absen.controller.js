"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsenController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AbsenController = class AbsenController {
    constructor(absenRepository) {
        this.absenRepository = absenRepository;
    }
    async create(absen) {
        return this.absenRepository.create(absen);
    }
    async count(where) {
        return this.absenRepository.count(where);
    }
    async find(filter) {
        return this.absenRepository.find(filter);
    }
    async updateAll(absen, where) {
        return this.absenRepository.updateAll(absen, where);
    }
    async findById(id, filter) {
        return this.absenRepository.findById(id, filter);
    }
    async updateById(id, absen) {
        await this.absenRepository.updateById(id, absen);
    }
    async replaceById(id, absen) {
        await this.absenRepository.replaceById(id, absen);
    }
    async deleteById(id) {
        await this.absenRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/absens'),
    rest_1.response(200, {
        description: 'Absen model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Absen) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Absen, {
                    title: 'NewAbsen',
                    exclude: [],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AbsenController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/absens/count'),
    rest_1.response(200, {
        description: 'Absen model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Absen)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AbsenController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/absens'),
    rest_1.response(200, {
        description: 'Array of Absen model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Absen, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Absen)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AbsenController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/absens'),
    rest_1.response(200, {
        description: 'Absen PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Absen, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Absen)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Absen, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AbsenController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/absens/{id}'),
    rest_1.response(200, {
        description: 'Absen model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Absen, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Absen, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AbsenController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/absens/{id}'),
    rest_1.response(204, {
        description: 'Absen PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Absen, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Absen]),
    tslib_1.__metadata("design:returntype", Promise)
], AbsenController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/absens/{id}'),
    rest_1.response(204, {
        description: 'Absen PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Absen]),
    tslib_1.__metadata("design:returntype", Promise)
], AbsenController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/absens/{id}'),
    rest_1.response(204, {
        description: 'Absen DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AbsenController.prototype, "deleteById", null);
AbsenController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.AbsenRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AbsenRepository])
], AbsenController);
exports.AbsenController = AbsenController;
//# sourceMappingURL=absen.controller.js.map