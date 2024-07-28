const express = require("express");
const app = express();

const { body, validationResult } = require("express-validator");

app.use(express.json());

app.post("/sanitizedInput", [
  [
    body("name").notEmpty().trim(),
    body("email").isEmail().trim(),
  ],
  async (req, res) => {
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    res.status(200).json({ success: "Successful Signup" });
  },
]);

app.listen(3000, () => {
  console.log("App is listening at port 3000");
});