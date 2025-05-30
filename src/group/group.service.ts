import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class GroupService {

  constructor(@InjectRepository(Group) private readonly groupRepository: Repository<Group>,
@InjectRepository(User) private readonly userRepository: Repository<User>) { }
  // @InjectRepository(User)){}

  // create(createGroupDto: CreateGroupDto) {
  //   return 'This action adds a new group';
  // }
  create(createGroupDto: CreateGroupDto) {
    const group: Group = new Group();
    group.groupname = createGroupDto.name
    group.description = createGroupDto.description
    group.admin = createGroupDto.admin
    return this.groupRepository.save(group)
  }



  findAll() {
    return this.groupRepository.find();
  }

  findOne(id: number) {
    return this.groupRepository.findOne({where:{id:id}});
  }

  // update(id: number, updateGroupDto: UpdateGroupDto) {
  //   return this.groupRepository.update({id},{...updateGroupDto});
  // }

  async remove(id: number) {
    // const data=await this.userRepository.find({where:{id:id},relations:['groups']})
    // const value=data.groups.find()
    // return data;
    return this.groupRepository.delete(id);
  }
   async getGroupWithUsers(id: number): Promise<Group | null> {
    return this.groupRepository.findOne({
      where: { id },
      relations: ['users'],
    });
  }
}
