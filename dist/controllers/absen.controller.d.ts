import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Absen } from '../models';
import { AbsenRepository } from '../repositories';
export declare class AbsenController {
    absenRepository: AbsenRepository;
    constructor(absenRepository: AbsenRepository);
    create(absen: Omit<Absen, ''>): Promise<Absen>;
    count(where?: Where<Absen>): Promise<Count>;
    find(filter?: Filter<Absen>): Promise<Absen[]>;
    updateAll(absen: Absen, where?: Where<Absen>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Absen>): Promise<Absen>;
    updateById(id: string, absen: Absen): Promise<void>;
    replaceById(id: string, absen: Absen): Promise<void>;
    deleteById(id: string): Promise<void>;
}
