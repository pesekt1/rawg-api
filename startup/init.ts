import express from "express";
import dbConnect from "./dbConnect";
import setupRouters from "./setupRouters";

const init = (app: express.Application) => {
  dbConnect();
  setupRouters(app);
};

export default init;
