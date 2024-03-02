import express from "express";
import genreMysqlRouter from "../routers-mysql/genreMysqlRouter";

const setupMysqlRouters = (app: express.Application) => {
  app.use("/genres-mysql", genreMysqlRouter);
};

export default setupMysqlRouters;
