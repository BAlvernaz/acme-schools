const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '../../public')))
app.use(express.json());
app.use(express.urlencoded());

app.use('/api/students', require('./routes/students'));
app.use('/api/schools', require('./routes/schools'));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../../public', 'index.html'));
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

module.exports = app;
