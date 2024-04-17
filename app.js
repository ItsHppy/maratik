const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

// app.use(cors());
app.use((req, _, next) => console.log(`[${req.method}]: ${req.url}`) || next());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let numbers = [1,2,3,4,5];

// GET - получение всех чисел
app.get("/fighter", (req, res) => {


  console.log(req.query)



  res.json(numbers);
});

// POST - добавление числа в массив
app.post("/numbers", (req, res) => {
  const number = req.body.number;
  numbers.push(number);
  res.json({ message: "Число успешно добавлено" });
});

// PUT - изменение числа в массиве по индексу
app.put("/numbers/:index", (req, res) => {
  const index = req.params.index;
  const number = req.body.number;

  if (index >= 0 && index < numbers.length) {
    numbers[index] = number;
    res.json({ message: "Число успешно изменено" });
  } else {
    res.status(404).json({ error: "Индекс не найден" });
  }
});

// DELETE - удаление числа из массива по индексу
app.delete("/numbers/:index", (req, res) => {
  const index = req.params.index;

  if (index >= 0 && index < numbers.length) {
    const [number] = numbers.splice(index, 1);
    res.json({
      message: `Число ${number} под индексом ${index} успешно удалено`,
    });
  } else {
    res.status(404).json({ error: "Индекс не найден" });
  }
});

app.listen(3000, () => {
  console.log("Сервер запущен на порту 3000");
});
