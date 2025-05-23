import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecadosModule } from '../recados/recados.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        RecadosModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '123456',
            database: 'postgres',
            autoLoadEntities: true, // Automatically load entities
            synchronize: true, //dont use in production... Automatically synchronize the database schema
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
