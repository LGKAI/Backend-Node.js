require("dotenv").config();
const express = require("express"); //commonjs
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express(); //app express
const port = process.env.PORT || 8888; //post => hardcode
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config template engine
configViewEngine(app);

//khai báo route
app.use("/", webRoutes);

//test connection

//simple query
// connection.query(" select * from Users u", function (err, results, fields) {
//   console.log(">>> results = ", results);
// });

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
