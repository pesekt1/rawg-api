import express from "express";
import dbConnect from "./dbConnect";
import dbConnectMySql from "./dbConnect-mysql";
import setupRouters from "./setupRouters";
import setupMysqlRouters from "./setupMysqlRouters";

const init = (app: express.Application) => {
  dbConnect();
  //dbConnectMySql();
  setupRouters(app);
  setupMysqlRouters(app);
};

export default init;
