const express = require("express");
const { sum } = require("./functions")
const app = express();

const server_port = 8080;

app.get("/:a/:b", (req, res) => {
    const a = parseInt(req.params["a"],10);
    const b = parseInt(req.params["b"],10);
    res.send(`${a} + ${b} = ${sum(a,b)} (version 3)`)
});

app.listen(server_port, () => console.log(`app listening on port ${server_port}`));
