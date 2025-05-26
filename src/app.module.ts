import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'admin',
      username: 'postgres',
      entities: [User],
      database: 'pgWithNest',
      synchronize: true,//Indicates if database schema should be auto created on every application launch.
      logging: true,  //it shows query in console
    }),
    UserModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
