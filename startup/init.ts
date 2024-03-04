import express from "express";
import dbConnect from "./dbConnect";
import setupRouters from "./setupRouters";
import setupMysqlRouters from "./setupMysqlRouters";

const init = (app: express.Application) => {
  dbConnect();
  setupRouters(app);
  setupMysqlRouters(app);
};

export default init;
