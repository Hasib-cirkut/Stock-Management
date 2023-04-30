import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [ProductsModule, OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
