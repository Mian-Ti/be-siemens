import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'orders' }) // 指定实体名为 "orders"
export class Orders {
  @PrimaryGeneratedColumn({ name: 'order_id' })
  orderId: number;

  @Column({ length: 255, name: 'order_name' })
  orderName: string;

  @Column({ length: 255, name: 'order_description' })
  orderDescription: string;

  @Column('numeric', { precision: 10, scale: 2, name: 'amount' })
  amount: number;
}
