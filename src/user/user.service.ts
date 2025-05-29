// import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

// @Injectable()
// export class UserService {
//   create(createUserDto: CreateUserDto) {
//     return 'This action adds a new user';
//   }

//   findAll() {
//     return `This action returns all user`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} user`;
//   }

//   update(id: number, updateUserDto: UpdateUserDto) {
//     return `This action updates a #${id} user`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} user`;
//   }
// }
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Group } from 'src/group/entities/group.entity';

@Injectable()
export class UserService {
  /**
   * Here, we have used data mapper approch for this tutorial that is why we
   * injecting repository here. Another approch can be Active records.
   */
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
     @InjectRepository(Group) private groupRepository: Repository<Group>,
  ) {}

  /**
   * this is function is used to create User in User Entity.
   * @param createUserDto this will type of createUserDto in which
   * we have defined what are the keys we are expecting from body
   * @returns promise of user
   */
  createUser(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.name = createUserDto.name;
    user.age = createUserDto.age;
    user.email = createUserDto.email;
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    user.gender = createUserDto.gender;
    return this.userRepository.save(user);
  }

  /**
   * this function is used to get all the user's list
   * @returns promise of array of users
   */
  findAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }

  /**
   * this function used to get data of use whose id is passed in parameter
   * @param id is type of number, which represent the id of user.
   * @returns promise of user
   */
  viewUser(id: number){
    return this.userRepository.findOneBy({ id });
  }

  /**
   * this function is used to updated specific user whose id is passed in
   * parameter along with passed updated data
   * @param id is type of number, which represent the id of user.
   * @param updateUserDto this is partial type of createUserDto.
   * @returns promise of udpate user
   */
   async updateUser(id: number, updateUserDto: UpdateUserDto){
    // const user: User = new User();
    // console.log(user);
  //   console.log(updateUserDto,"this is from service");
  //  const data=await this.userRepository.findOne({
  //   where:{id:id}
  //  })
   const value=this.userRepository.update({id}, {...updateUserDto})
   return {message:"user updated successfully"}
  //  return this.userRepository.save({value});

  //  console.log(data);

    
    // return {message:"updated successfully"}
    // user.name = updateUserDto.name;
    // user.age = updateUserDto.age;
    // user.email = updateUserDto.email;
    // user.username = updateUserDto.username;
    // user.password = updateUserDto.password;
    // user.id = id;
    // return this.userRepository.save(user);
  }

  /**
   * this function is used to remove or delete user from database.
   * @param id is the type of number, which represent id of user
   * @returns nuber of rows deleted or affected
   */
  removeUser(id: number) {
    return this.userRepository.delete(id);
  }
async addUserToGroup(userId: number, groupId: number): Promise<void> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['groups'],
    });
    if (!user) throw new Error('User not found');

    // Push group with only id (to avoid loading full entity)
    user.groups.push({ id: groupId } as any);
    await this.userRepository.save(user);
  }

async getUserWithGroups(userId: number) {
  return this.userRepository.findOne({
    where: { id: userId },
    relations: ['groups'],
  });
}

}
