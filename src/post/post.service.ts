import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class PostService {

  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  async create(createPostDto: CreatePostDto) {

    const { title, description } = createPostDto;

    const user = await this.userRepository.findOneBy({ id: createPostDto.userid })

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    const post: Post = new Post();

    post.title = title
    post.description = description
    post.user = user

    return this.postRepository.save(post)

  }

  findAll() {
    return this.postRepository.find();
  }
  // findByUserID(userid:number){
  //   return this.postRepository.find({where:{userid:userid}})
  // }

  deletePostByPostid(id: number) {
    return this.postRepository.delete({ id: id })
  }

  updatePost(id: number, updatePostDto: UpdatePostDto) {
    updatePostDto.updatedat = (Date.now()).toString()
    const value = this.postRepository.update({ id }, { ...updatePostDto })
    return { message: "post updated successfully" }
  }


  findByUserid(id: number) {
    return this.postRepository.find({
      where: {
       user_id : id,

      },
    })
  }

  async findbyquery(page=1,limit=10){
    const offset=(page-1)*limit;
    return this.postRepository.find({
      skip:offset,
      take:limit,
    })

  }
  findByPostID(id:number){
    return this.postRepository.find({where:{id:id}})
  }



  // findById(id:number){
  //   return this.postRepository.findOne()
  // }

  // findAll() {
  //   return `This action returns all post`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} post`;
  // }

  // update(id: number, updatePostDto: UpdatePostDto) {
  //   return `This action updates a #${id} post`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} post`;
  // }

}
