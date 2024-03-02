import express from "express";
import { Repository } from "typeorm";
import { Genre } from "../models-sql/genre-sql";
import connectToDb from "../startup/dbConnect-mysql";

interface Response {
  count: number;
  results: Genre[];
}

const genreRouter = express.Router();
let genreRepository: Repository<Genre>;

connectToDb()
  .then((connection) => {
    genreRepository = connection.getRepository(Genre);
  })
  .catch((error) => console.log("Error connecting to the database:", error));

// Create
genreRouter.post("/", async (req, res) => {
  const genre = genreRepository.create(req.body);
  await genreRepository.save(genre);
  res.status(201).send(genre);
});

// Read
genreRouter.get("/", async (req, res) => {
  const genres = await genreRepository.find();
  const response: Response = {
    count: 1,
    results: [...genres],
  };

  res.send(response);
});

genreRouter.get("/:id", async (req, res) => {
  const genre = await genreRepository.findOne({
    where: { id: Number(req.params.id) },
  });
  if (!genre) {
    return res.status(404).send();
  }
  res.send(genre);
});

// Update
genreRouter.put("/:id", async (req, res) => {
  const genre = await genreRepository.preload({
    id: Number(req.params.id),
    ...req.body,
  });
  if (!genre) {
    return res.status(404).send();
  }
  await genreRepository.save(genre);
  res.send(genre);
});

// Delete
genreRouter.delete("/:id", async (req, res) => {
  const genre = await genreRepository.findOne({
    where: { id: Number(req.params.id) },
  });
  if (!genre) {
    return res.status(404).send();
  }
  await genreRepository.remove(genre);
  res.send(genre);
});

export default genreRouter;
