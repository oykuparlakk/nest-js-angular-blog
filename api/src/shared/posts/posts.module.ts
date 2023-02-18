import { Module } from '@nestjs/common';
import { PostsService } from './services/posts.service';
import { PostsController } from './controller/posts.controller';

@Module({
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
