import { PartialType } from '@nestjs/mapped-types';
import { CreateShopingListDto } from './create-shoping-list.dto';

export class UpdateShopingListDto extends PartialType(CreateShopingListDto) {}
