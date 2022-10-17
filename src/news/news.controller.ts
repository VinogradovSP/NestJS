import { Controller, Get } from '@nestjs/common';
import { News } from './news.interface';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  async getNews(): Promise<News[]> {
    return this.newsService.findAll();
  }
}
