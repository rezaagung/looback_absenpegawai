import { Entity } from '@loopback/repository';
export declare class Absen extends Entity {
    nip: string;
    nama?: string;
    tanggal?: string;
    absen_masuk?: string;
    absen_pulang?: string;
    keterangan?: string;
    status?: string;
    complited: boolean;
    constructor(data?: Partial<Absen>);
}
export interface AbsenRelations {
}
export declare type AbsenWithRelations = Absen & AbsenRelations;
