import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) { }

  // @Post()
  // create(@Body() createPostDto: CreatePostDto) {
  //   return this.postService.create(createPostDto);
  // }

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    console.log(createPostDto, "this is comming from payload");
    return this.postService.create(createPostDto)
  }

  @Get()
  findAll() {
    return this.postService.findAll()
  }

  @Get(':id')
  findByUserId(@Param('id') id: number) {
    return this.postService.findByUserid(+id);
  }

  @Get(':id')
  findByPostId(@Param('id') id: string) {
    return this.postService.findByPostID(+id);
  }

  @Put(':id')
  updatePost(@Param('id') id: number, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.updatePost(id, updatePostDto)

  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.postService.deletePostByPostid(+id)
  }
  @Get()
  getPosts(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return this.postService.findbyquery(page, limit);
  }


  // @Get()
  // findAll() {
  //   return this.postService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.postService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
  //   return this.postService.update(+id, updatePostDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.postService.remove(+id);
  // }
}
