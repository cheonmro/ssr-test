// Environment variable config see README.env for example
require("dotenv").config();
// server setup
const port = process.env.PORT || "3000";
// express/next setup
const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
// server routes
// const api = require('./server/routes/api');

app
  .prepare()
  .then(() => {
    const server = express();
    console.log("express server starting...");

    // pages

    server.get("/", (req, res) => {
      console.log("home page load..");
      // res.send("welcome home!");
      return app.render(req, res, "/", req.query);
    });

    server.get("*", (req, res) => {
      console.log("all..");
      return handle(req, res);
    });

    server.listen(3000, err => {
      console.log("in server now...");
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
