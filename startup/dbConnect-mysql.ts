import { Connection, createConnection } from "typeorm";

export default async (): Promise<Connection> => {
  const connection = await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "rawgDB",
    entities: [__dirname + "/../models-sql/*.ts"],
    synchronize: false,
  });
  // .then((connection) => {
  //   console.log("Successfully connected to the database.");
  // })
  // .catch((error) =>
  //   console.log("Error connecting to the MySQL database:", error)
  // );

  return connection;
};
