import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {

   constructor(
      @InjectRepository(Post) private readonly postRepository: Repository<Post>,
    ) {}
  // create(createPostDto: CreatePostDto) {
  //   return 'This action adds a new post';
  // }
  create(createPostDto:CreatePostDto){
    console.log(createPostDto,"this is from service"); 
    const post:Post=new Post();
    post.title=createPostDto.title
    post.description=createPostDto.description
    post.createdat=(Date.now()).toString()
    post.updatedat=""
    post.deletedat=""
    // post.user=createPostDto.id
    post.Postid=createPostDto.Postid
    return this.postRepository.save(post)

  }

  findAll(){
    return this.postRepository.find();
  }
  findByPostID(postid:number){
    return this.postRepository.find({where:{Postid:postid}})
  }
  deletePostByPostid(postid:number){
    return this.postRepository.delete({Postid:postid})
  }

  updatePost(id:number,updatePostDto:UpdatePostDto){
    const value=this.postRepository.update({id},{...updatePostDto})
    return {message:"post updated successfully"}
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
