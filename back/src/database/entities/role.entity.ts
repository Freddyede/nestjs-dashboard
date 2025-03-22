import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ type: 'text', nullable: true, default: null })
  access_token: string;
  @Column({ type: 'datetime', default: Date.now() })
  @CreateDateColumn()
  createdAt: Date;
  @Column({ type: 'datetime', nullable: true, default: null })
  updatedAt: Date;
  @Column({ type: 'datetime', nullable: true, default: null })
  deletedAt: Date;
}
