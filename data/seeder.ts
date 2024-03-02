import mongoose from "mongoose";
import Game from "../models/game";
import Genre from "../models/genre";
import Platform from "../models/platform";
import data from "./game";

mongoose
  .connect("mongodb://localhost:27017/rawgDB")
  .then(async () => {
    console.log("Connected to the database");

    await mongoose.connection.db.dropDatabase();
    console.log("Deleted all data");

    for (let genre of data) {
      const newGenre = await new Genre({ name: genre.name }).save();

      const games = await Promise.all(
        genre.games.map(async (game) => {
          game.parent_platforms = await Promise.all(
            game.parent_platforms.map(async (platform) => {
              const newPlatform = new Platform({
                name: platform.platform.name,
                slug: platform.platform.slug,
              });
              await newPlatform.save();
              return { platform: newPlatform };
            })
          );
          return {
            ...game,
            genres: newGenre,
          };
        })
      );
      await Game.insertMany(games);
    }

    console.log("Data seeded");
  })
  .catch((err) => {
    console.error("Error connecting to the database", err);
    process.exit(1);
  });
