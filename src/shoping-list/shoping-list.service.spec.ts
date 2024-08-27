import { Test, TestingModule } from '@nestjs/testing';
import { ShopingListService } from './shoping-list.service';

describe('ShopingListService', () => {
  let service: ShopingListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopingListService],
    }).compile();

    service = module.get<ShopingListService>(ShopingListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
