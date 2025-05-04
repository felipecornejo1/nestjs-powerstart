import { DataSource } from 'typeorm';
import { Coffee } from './entities/coffees.entity';

export const photoProviders = [
  {
    provide: 'COFFEE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Coffee),
    inject: ['DATA_SOURCE'],
  },
];
