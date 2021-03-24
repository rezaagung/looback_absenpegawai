import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDsDataSource } from '../datasources';
import { Absen, AbsenRelations } from '../models';
export declare class AbsenRepository extends DefaultCrudRepository<Absen, typeof Absen.prototype.nip, AbsenRelations> {
    constructor(dataSource: MongoDsDataSource);
}
