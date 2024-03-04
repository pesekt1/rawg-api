import express from "express";
import genreRouter from "../routers/genreRouter";
import gameRouter from "../routers/gameRouter";
import platformRouter from "../routers/platformRouter";

const setupRouters = (app: express.Application) => {
  app.use("/genres", genreRouter);
  app.use("/games", gameRouter);
  app.use("/platforms/lists/parents", platformRouter);
};

export default setupRouters;
