import express from "express";
import todoRouter from "../routers/todoRouter";
import genreRouter from "../routers/genreRouter";
import gameRouter from "../routers/gameRouter";
import platformRouter from "../routers/platformRouter";

const setupRouters = (app: express.Application) => {
  app.use("/todos", todoRouter);
  app.use("/genres", genreRouter);
  app.use("/games", gameRouter);
  app.use("/platforms/lists/parents", platformRouter);
};

export default setupRouters;
