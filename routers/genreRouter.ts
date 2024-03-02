import express from "express";
import Genre, { IGenre } from "../models/genre";

const router = express.Router();

interface Response {
  count: number;
  results: IGenre[];
}

// Create
router.post("/", async (req, res) => {
  const genre = new Genre(req.body);
  try {
    await genre.save();
    res.status(201).send(genre);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Read
router.get("/", async (req, res) => {
  try {
    const genres = await Genre.find({});

    const response: Response = {
      count: 1,
      results: [...genres],
    };

    res.send(response);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const genre = await Genre.findById(req.params.id);
    if (!genre) {
      return res.status(404).send();
    }
    res.send(genre);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update
router.patch("/:id", async (req, res) => {
  try {
    const genre = await Genre.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!genre) {
      return res.status(404).send();
    }
    res.send(genre);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const genre = await Genre.findByIdAndDelete(req.params.id);
    if (!genre) {
      return res.status(404).send();
    }
    res.send(genre);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
