import { createConnection, getConnection } from "typeorm";
import { Game } from "../models-sql/game-sql";
import { Genre } from "../models-sql/genre-sql";
import { Platform } from "../models-sql/platform-sql";

async function seed() {
  const connection = await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "rawgdb",
    entities: [__dirname + "/../models-sql/*.ts"],
    synchronize: true,
  });

  const genre = new Genre();
  genre.name = "Action";
  await connection.manager.save(genre);

  const platform = new Platform();
  platform.name = "PC";
  platform.slug = "pc";
  await connection.manager.save(platform);

  const game = new Game();
  game.name = "Test Game";
  game.background_image = "http://example.com/testgame.jpg";
  game.parent_platforms = [platform];
  game.genres = [genre];
  await connection.manager.save(game);

  console.log("Data has been seeded.");
}

seed().catch((error) => console.log("Error seeding data:", error));
