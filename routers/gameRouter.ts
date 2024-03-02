import express from "express";
import Game, { IGame } from "../models/game";

const router = express.Router();

interface Response {
  count: number;
  results: IGame[];
}

interface GameQuery {
  genres: {
    _id: string;
  };
}

// Create
router.post("/", async (req, res) => {
  const game = new Game(req.body);
  try {
    await game.save();
    res.status(201).send(game);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const genreId = req.query["genres"];
    const platformId = req.query["parent_platforms"];
    let query: {
      "genres._id"?: string;
      "parent_platforms.platform._id"?: string;
    } = {};

    if (genreId) {
      query["genres._id"] = genreId as string;
    }

    if (platformId) {
      query["parent_platforms.platform._id"] = platformId as string;
    }

    const games = await Game.find(query);

    const response: Response = {
      count: games.length,
      results: [...games],
    };

    res.send(response);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      return res.status(404).send();
    }
    res.send(game);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update
router.patch("/:id", async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!game) {
      return res.status(404).send();
    }
    res.send(game);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);
    if (!game) {
      return res.status(404).send();
    }
    res.send(game);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Delete all
router.delete("/", async (req, res) => {
  try {
    const games = await Game.deleteMany({});
    res.send(games);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
