const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

function isNumber(str) {
  return /^\d+$/.test(str);
}
app.post('/bfhl', (req, res) => {
 
  const { data } = req.body;
  const numbers = data.filter(item => isNumber(item));
  const alphabets = data.filter(item => typeof item === 'string' && !isNumber(item));
  const response = {
    is_success: true,
    user_id: 'john_doe_17091999',
    email: 'john@xyz.com',
    roll_number: 'ABCD123',
    numbers,
    alphabets,
  };
  res.json(response);
});
app.get('/bfhl', (req, res) => {

  const response = {
    operation_code: 1,
  };
  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
