import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { PostModule } from './post/post.module';
import { Post } from './post/entities/post.entity';
import { ProfileModule } from './profile/profile.module';
import { Profile } from './profile/entities/profile.entity';
import { GroupModule } from './group/group.module';

import { Group } from './group/entities/group.entity';
import { UserGroupModule } from './user-group/user-group.module';
import { user_group } from './user-group/entities/user-group.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'admin',
      username: 'postgres',
      entities: [User,Post,Profile,Group],
      database: 'pgWithNest',
      synchronize: true,//Indicates if database schema should be auto created on every application launch.
      logging: false,  //it shows query in console
    }),
    UserModule,
    PostModule,
    ProfileModule,
    GroupModule,
    UserGroupModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
