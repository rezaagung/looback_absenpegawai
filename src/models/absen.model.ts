import {Entity, model, property} from '@loopback/repository';

@model()
export class Absen extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  nip: string;

  @property({
    type: 'string',
  })
  nama?: string;

  @property({
    type: 'date',
  })
  tanggal?: string;

  @property({
    type: 'date',
  })
  absen_masuk?: string;

  @property({
    type: 'date',
  })
  absen_pulang?: string;

  @property({
    type: 'string',
  })
  keterangan?: string;

  @property({
    type: 'string',
  })
  status?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  complited: boolean;


  constructor(data?: Partial<Absen>) {
    super(data);
  }
}

export interface AbsenRelations {
  // describe navigational properties here
}

export type AbsenWithRelations = Absen & AbsenRelations;
