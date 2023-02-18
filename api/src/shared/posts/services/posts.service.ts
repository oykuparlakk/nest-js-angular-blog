import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  /**
   * This action adds a new post
   * @param {CreatePostDto} createPostDto - CreatePostDto
   * @returns A string
   */
  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number) { 
    return `This action returns a #${id} post`;
  }

  update(
    id: number,
    updatePostDto: /* A type guard. */
    /**
     * This action updates a # post
     * @param {number} id - The id of the post to update.
     * @param {UpdatePostDto} updatePostDto - UpdatePostDto
     * @returns This action updates a # post
     */
    UpdatePostDto,
  ) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
