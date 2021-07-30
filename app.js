const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

let userNames = ['Tomas', 'Andrius', 'Egle'];
let users = userNames;

app.get('/', (req, res) => {
  res.send(users);
});

app.post('/newUser', (req, res) => {
  const newUser = Object.values(req.body);
  users = userNames.concat(newUser);
  res.json('Data was sent');
  userNames = users;
});

app.listen(5000, () => console.log('http://localhost:5000'));
