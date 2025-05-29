import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAllUser();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.viewUser(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    // console.log(updateUserDto,"this is updateuserdto from controller");
    return this.userService.updateUser(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.removeUser(+id);
  }
  @Get(':userId/groups')
  @Get(':id/groups')
  async getUserGroups(@Param('id') id: number) {
    const user = await this.userService.getUserWithGroups(id);
    if (!user) return { message: 'User not found' };
    return user.groups;
  }
  
  @Post(':userId/groups/:groupId')
  async addUserToGroup(@Param('userId') userId: number, @Param('groupId') groupId: number) {
    await this.userService.addUserToGroup(userId, groupId);
    return { message: 'User added to group successfully' };
  }
}
