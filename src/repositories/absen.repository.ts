import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDsDataSource} from '../datasources';
import {Absen, AbsenRelations} from '../models';

export class AbsenRepository extends DefaultCrudRepository<
  Absen,
  typeof Absen.prototype.nip,
  AbsenRelations
> {
  constructor(
    @inject('datasources.mongoDS') dataSource: MongoDsDataSource,
  ) {
    super(Absen, dataSource);
  }
}
