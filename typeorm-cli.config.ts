import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres', // type of our database
  host: 'localhost', // database host
  port: 5432, // database host
  username: 'postgres', // username
  password: 'pass123', // user password
  database: 'postgres', // name of our database,
  entities: [],
  migrations: [],
});
