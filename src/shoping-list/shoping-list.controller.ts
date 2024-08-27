import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShopingListService } from './shoping-list.service';
import { CreateShopingListDto } from './dto/create-shoping-list.dto';
import { UpdateShopingListDto } from './dto/update-shoping-list.dto';

@Controller('shoping-list')
export class ShopingListController {
  constructor(private readonly shopingListService: ShopingListService) {}

  @Post()
  create(@Body() createShopingListDto: CreateShopingListDto) {
    return this.shopingListService.create(createShopingListDto);
  }

  @Get()
  findAll() {
    return this.shopingListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shopingListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShopingListDto: UpdateShopingListDto) {
    return this.shopingListService.update(+id, updateShopingListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shopingListService.remove(+id);
  }
}
