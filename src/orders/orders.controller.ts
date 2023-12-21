import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Logger,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orders } from './orders.entity';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  private logger = new Logger('OrdersController');

  constructor(
    @InjectRepository(Orders)
    private readonly orderRepository: Repository<Orders>,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all orders' })
  @ApiResponse({ status: 200, description: 'Return all orders.' })
  async getAllOrders(): Promise<Orders[]> {
    const v = await this.orderRepository.find();
    return v;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an order by ID' })
  @ApiResponse({ status: 200, description: 'Return the order.' })
  async getOrderById(@Param('id') id: number): Promise<Orders> {
    return await this.orderRepository.findOneBy({ orderId: id });
  }

  @Post()
  @ApiOperation({ summary: 'Create a new order' })
  @ApiResponse({
    status: 201,
    description: 'The order has been successfully created.',
  })
  async createOrder(@Body() orderData: Orders): Promise<Orders> {
    const order = this.orderRepository.create(orderData);
    return await this.orderRepository.save(order);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an order by ID' })
  @ApiResponse({
    status: 200,
    description: 'The order has been successfully updated.',
  })
  async updateOrder(
    @Param('id') id: number,
    @Body() orderData: Orders,
  ): Promise<Orders> {
    const order = await this.orderRepository.findOneBy({ orderId: id });
    if (!order) {
      // 处理订单不存在的情况
    }
    Object.assign(order, orderData);
    return await this.orderRepository.save(order);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an order by ID' })
  @ApiResponse({
    status: 200,
    description: 'The order has been successfully deleted.',
  })
  async deleteOrder(@Param('id') id: number): Promise<void> {
    await this.orderRepository.delete(id);
  }
}
