import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Game } from "./game-sql";

@Entity()
export class Platform {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  slug!: string;

  @ManyToMany(() => Game, (game) => game.parent_platforms)
  games!: Game[];
}
