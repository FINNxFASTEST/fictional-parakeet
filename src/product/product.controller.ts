import { Controller, Get, Post } from '@nestjs/common';

@Controller('product')
export class ProductController {
    @Get()
    async getAllCategories() {
        return "<h3> HELLOW WORLD </h3> "
    }
}
