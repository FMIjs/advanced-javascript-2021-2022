const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const events = [
    { id: 1, name: 'Ev1', capacity: 3, guests: [] },
    { id: 2, name: 'Ev2', capacity: 50, guests: [] },
    { id: 3, name: 'Ev3', capacity: 50, guests: [] }
];
const spots = {};

app.use(express.urlencoded());

app.post('/event', (req, res) => {
    const { name, capacity } = req.body;
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
});

app.post('/event/:id/book-spot', (req, res) => {
    const eventId = req.params.id;
    if (spots[eventId] == undefined) {
        spots[eventId] = bookSpot(eventId);
    }
    const spot = spots[eventId].next();

    if (spot.done) {
        res.status(400).end('Event overbooked');
    } else {
        const { firstName, lastName } = req.body;
        (events.find(ev => ev.id == eventId)).guests.push({ firstName, lastName });
        res.status(201).end('Success');
    }
});

function* bookSpot(eventId) {
    let occupied = 0;
    const max = events.find(ev => ev.id == eventId).capacity;

    while (occupied < max) {
        yield ++occupied;
    }
}

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}...`));