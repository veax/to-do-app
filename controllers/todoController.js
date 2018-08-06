var bodyParser = require("body-parser");
var data = [
  { item: "get milk" },
  { item: "walk dog" },
  { item: "something..." }
];

module.exports = app => {
  app.use(bodyParser.json());

  app.get("/todo", (req, res) => {
    res.render("index", { todos: data });
  });

  app.post("/todo", (req, res) => {
    data.push(req.body);
    res.json(req.body);
  });

  app.delete("/todo/:item", (req, res) => {
    data = data.filter(todo => {
      return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.send('success');
  });
};
