import { Injectable } from '@nestjs/common';
import { CreateUserGroupDto } from './dto/create-user-group.dto';
import { UpdateUserGroupDto } from './dto/update-user-group.dto';
import { UserService } from 'src/user/user.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from 'src/post/entities/post.entity';
import { User } from 'src/user/entities/user.entity';
import { Group } from 'src/group/entities/group.entity';

@Injectable()
export class UserGroupService {
    constructor(
      @InjectRepository(Post) private readonly postRepository: Repository<Post>,
      @InjectRepository(User) private readonly userRepository: Repository<User>,
      @InjectRepository(Group) private readonly groupRepository: Repository<Group>,
    ) { }

  create(createUserGroupDto: CreateUserGroupDto) {
    return 'This action adds a new userGroup';
  }

  findAll() {
    return `This action returns all userGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userGroup`;
  }

  update(id: number, updateUserGroupDto: UpdateUserGroupDto) {
    return `This action updates a #${id} userGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} userGroup`;
  }
  
  getbygroupid(id:number){
    const data=this.groupRepository.find({where:{id:id},relations:["users"]})
    return data;
  }

}
