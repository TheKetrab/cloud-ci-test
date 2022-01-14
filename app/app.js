const express = require("express");
const app = express();

const server_port = 8080;

function sum(a,b) {
  return a+b;
}

app.get("/:a/:b", (req, res) => {
    const a = parseInt(req.params["a"],10);
    const b = parseInt(req.params["b"],10);
    res.send(`${a} + ${b} = ${sum(a,b)}`)
});

app.listen(server_port, () => console.log(`app listening on port ${server_port}`));
