import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './role.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Role, { orphanedRowAction: null })
  @JoinColumn({ name: 'role_id' })
  roles: Role[];
  @Column({ type: 'text', default: null })
  avatar?: string;
  @Column({ unique: true })
  email: string;
  @Column({ unique: true })
  password: string;
  @Column({ type: 'datetime', default: Date.now() })
  @CreateDateColumn()
  createdAt: Date;
  @Column({ type: 'datetime', default: null })
  deletedAt: Date;
}
