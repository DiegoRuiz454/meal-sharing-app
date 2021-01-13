const app = require("./app");

const port = parseInt(process.env.PORT, 10) || process.env.CLIENT_PORT;

app.listen(port, () => {
  console.log("Backend api available at /api");
});
