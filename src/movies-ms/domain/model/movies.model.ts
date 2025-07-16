import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'movies', schema: 'cinema' })
export class Movies {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  time: string;
  @Column()
  image: string;
  @Column()
  status: boolean;
}
