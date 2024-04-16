import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  director: string;

  @Column()
  year: number;

  @Column()
  genre: string;

  @Column('simple-array')
  cast: string[];

  @Column()
  synopsis: string;
}
