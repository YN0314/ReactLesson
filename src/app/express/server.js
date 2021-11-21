const express = require('express');
const cors = require('cors');

const app = express();

let corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requrets of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require('./models');
db.sequelize.sync({ force: true} ).then(() => {
    console.log('Drop and re-sync db.');
});

// route
app.get('/', (req, res) => {
    res.json({ message: 'welcome to application.' });
});

const PORT = process.env.PROT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

