import { Test, TestingModule } from '@nestjs/testing';
import { ShopingListController } from './shoping-list.controller';
import { ShopingListService } from './shoping-list.service';

describe('ShopingListController', () => {
  let controller: ShopingListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopingListController],
      providers: [ShopingListService],
    }).compile();

    controller = module.get<ShopingListController>(ShopingListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
