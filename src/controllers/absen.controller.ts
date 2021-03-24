import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody,
  response
} from '@loopback/rest';
import {Absen} from '../models';
import {AbsenRepository} from '../repositories';

export class AbsenController {
  constructor(
    @repository(AbsenRepository)
    public absenRepository: AbsenRepository,
  ) { }

  @post('/absens')
  @response(200, {
    description: 'Absen model instance',
    content: {'application/json': {schema: getModelSchemaRef(Absen)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Absen, {
            title: 'NewAbsen',
            exclude: [],
          }),
        },
      },
    })
    absen: Omit<Absen, ''>,
  ): Promise<Absen> {
    return this.absenRepository.create(absen);
  }

  @get('/absens/count')
  @response(200, {
    description: 'Absen model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Absen) where?: Where<Absen>,
  ): Promise<Count> {
    return this.absenRepository.count(where);
  }

  @get('/absens')
  @response(200, {
    description: 'Array of Absen model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Absen, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Absen) filter?: Filter<Absen>,
  ): Promise<Absen[]> {
    return this.absenRepository.find(filter);
  }

  @patch('/absens')
  @response(200, {
    description: 'Absen PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Absen, {partial: true}),
        },
      },
    })
    absen: Absen,
    @param.where(Absen) where?: Where<Absen>,
  ): Promise<Count> {
    return this.absenRepository.updateAll(absen, where);
  }

  @get('/absens/{id}')
  @response(200, {
    description: 'Absen model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Absen, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Absen, {exclude: 'where'}) filter?: FilterExcludingWhere<Absen>
  ): Promise<Absen> {
    return this.absenRepository.findById(id, filter);
  }

  @patch('/absens/{id}')
  @response(204, {
    description: 'Absen PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Absen, {partial: true}),
        },
      },
    })
    absen: Absen,
  ): Promise<void> {
    await this.absenRepository.updateById(id, absen);
  }

  @put('/absens/{id}')
  @response(204, {
    description: 'Absen PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() absen: Absen,
  ): Promise<void> {
    await this.absenRepository.replaceById(id, absen);
  }

  @del('/absens/{id}')
  @response(204, {
    description: 'Absen DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.absenRepository.deleteById(id);
  }

}
