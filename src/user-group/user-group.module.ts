import { Module } from '@nestjs/common';
import { UserGroupService } from './user-group.service';
import { UserGroupController } from './user-group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Post } from 'src/post/entities/post.entity';
import { Group } from 'src/group/entities/group.entity';

@Module({
   imports: [TypeOrmModule.forFeature([User,Post,Group])],
  controllers: [UserGroupController],
  providers: [UserGroupService],
})
export class UserGroupModule {}
