const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const events = [{ id: 1, name: 'Ev1', capacity: 50 }, { id: 2, name: 'Ev2', capacity: 50 }, { id: 3, name: 'Ev3', capacity: 50 }];

app.use(express.urlencoded());

app.post('/event', (req, res) => {
    const {name, capacity} = req.body;
    const event = {
        id: events.length + 1,
        name,
        capacity
    };
    events.push(event);
    res.send(event);
});

app.get('/event/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const event = events.filter((ev) => ev.id === parseInt(id));
    console.log(event);
    res.send(event);
})


app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}...`));