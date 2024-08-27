import { Injectable } from '@nestjs/common';
import { CreateShopingListDto } from './dto/create-shoping-list.dto';
import { UpdateShopingListDto } from './dto/update-shoping-list.dto';

@Injectable()
export class ShopingListService {
  create(createShopingListDto: CreateShopingListDto) {
    return 'This action adds a new shopingList';
  }

  findAll() {
    return `This action returns all shopingList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shopingList`;
  }

  update(id: number, updateShopingListDto: UpdateShopingListDto) {
    return `This action updates a #${id} shopingList`;
  }

  remove(id: number) {
    return `This action removes a #${id} shopingList`;
  }
}
