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

  return connection;
};
