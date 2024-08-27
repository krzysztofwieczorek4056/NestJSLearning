import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopingListModule } from './shoping-list/shoping-list.module';

@Module({
  imports: [ShopingListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
