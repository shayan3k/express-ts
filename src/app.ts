import express from "express";
import bodyParser from "body-parser";

const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  })
  .on("error", function (err: string) {
    console.log(err);
  });
