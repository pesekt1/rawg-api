import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Platform } from "./platform-sql";
import { Genre } from "./genre-sql";

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ nullable: true })
  background_image!: string;

  @ManyToMany(() => Platform, (platform) => platform.games)
  @JoinTable()
  parent_platforms!: Platform[];

  @Column({ nullable: true })
  metacritic!: number;

  @ManyToMany(() => Genre, (genre) => genre.games)
  @JoinTable()
  genres!: Genre[];
}
