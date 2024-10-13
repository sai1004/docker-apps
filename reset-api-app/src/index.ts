const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const logger = require("morgan");
dotenv.config();

const todoLsit = require("../mock/todos.json");

console.log("todolist", todoLsit);
const port = process.env.PORT;

const initServer = async () => {
  try {
    /* ''''''' middlewares ''''''''' */
    app.use(express.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(logger("common"));
    app.use(cors());

    /* ''''''' App Routes ''''''''' */
    app.get("/api", (req: any, res: any) => {
      res.json({ message: " Hello App Works!! " });
    });

    app.get("/api/todolist", (req: any, res: any) => {
      res.send({ todoLsit });
    });

    app.post("/api/savetodo", (req: any, res: any) => {
      const body = req?.body;
      res.json({ body });
    });

    /* ''''''' Start server ''''''''' */
    app.listen(port, (err: any) => {
      if (err) throw err;
      console.log(`
            ++++++++++++++++++++++++++++++++++++++++++++++++
            server is listening on http://127.0.0.1:${port}/api
            ++++++++++++++++++++++++++++++++++++++++++++++++
            `);
    });
  } catch (error) {
    console.log(`Error While Running Server : `, error);
  }
};

initServer();
