const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

let rappers = {
  "21 savage": {
    age: 28,
    birthName: "Blah Blah Blah",
    birthLocation: "London, England",
  },
  "chance the rapper": {
    age: 30,
    birthName: "Dingo Ding",
    birthLocation: "Melbourne, Australia",
  },
  dylan: {
    age: 29,
    birthName: "dylan",
    birthLocation: "dylan",
  },
};

app.use(cors());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/api/rappers/:rapperName", (req, res) => {
  const rapName = req.params.rapperName.toLowerCase();
  console.log(rapName);
  if (rappers[rapName]) {
    res.json(rappers[rapName]);
  } else {
    res.json(rappers["dylan"]);
  }
  res.json(rappers[rapName]);
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
