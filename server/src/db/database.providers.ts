import { Sequelize } from 'sequelize-typescript';
import { Cat } from '../cats/cat.entity';


export const databaseProviders = [
    {
      provide: 'SEQUELIZE',
      useFactory: async () => {
        const sequelize = new Sequelize({
          dialect: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: 'somePassword',
          database: 'postgres',
          sync: {
            force: true
          }
        });
        sequelize.addModels([Cat]);
        await sequelize.sync();
        return sequelize;
      },
    },
  ];