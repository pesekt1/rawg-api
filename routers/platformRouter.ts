import express from "express";
import Platform, { IPlatform } from "../models/platform";

const platformRouter = express.Router();

interface Response {
  count: number;
  results: IPlatform[];
}

// Create
platformRouter.post("/", async (req, res) => {
  const platform = new Platform(req.body);
  try {
    await platform.save();
    res.status(201).send(platform);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Read
platformRouter.get("/", async (req, res) => {
  try {
    const platforms = await Platform.find({});

    const response: Response = {
      count: 1,
      results: [...platforms],
    };

    res.send(response);
  } catch (err) {
    res.status(500).send(err);
  }
});

platformRouter.get("/:id", async (req, res) => {
  try {
    const platform = await Platform.findById(req.params.id);
    if (!platform) {
      return res.status(404).send();
    }
    res.send(platform);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update
platformRouter.patch("/:id", async (req, res) => {
  try {
    const platform = await Platform.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!platform) {
      return res.status(404).send();
    }
    res.send(platform);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete
platformRouter.delete("/:id", async (req, res) => {
  try {
    const platform = await Platform.findByIdAndDelete(req.params.id);
    if (!platform) {
      return res.status(404).send();
    }
    res.send(platform);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default platformRouter;
