const express = require('express');
const cors = require('cors');

const app = express();
const port = 3333;

const data = [
    {
        image: "/notes-icon/note-1.png",
        title: "My Note #1",
        webpage: "unsplash.com",
        tags: ["Water", "Aquatic life", "Marine fish"],
        highlights: "Water is an inorganic compound with the chemical formula H2O. It is a transparent, tasteless, odorless,[c] and nearly colorless chemical substance.",
        notes: "My first note for research on a topic associated with water for my project",
    },
    {
        image: "/notes-icon/note-2.png",
        title: "My Note #2",
        webpage: "pexels.com",
        tags: ["Forest", "Trees", "Nature"],
        highlights: "Forests are complex ecosystems that house diverse plant and animal species. They play a crucial role in maintaining ecological balance and supporting life.",
        notes: "Collected information on the importance of forests and their role in the environment.",
    },
    {
        image: "/notes-icon/note-3.png",
        title: "My Note #3",
        webpage: "pixabay.com",
        tags: ["Space", "Planets", "Astronomy"],
        highlights: "Space is a vast expanse that exists beyond Earth's atmosphere. It includes all of the universe's matter and energy, including planets, stars, and galaxies.",
        notes: "Notes on the vastness of space and key astronomical concepts for my science project.",
    },
    {
        image: "/notes-icon/note-4.png",
        title: "My Note #4",
        webpage: "wikipedia.org",
        tags: ["History", "Ancient civilizations", "Archaeology"],
        highlights: "Ancient civilizations, such as Mesopotamia and Egypt, are known for their early developments in writing, law, and architecture.",
        notes: "Researching ancient civilizations and their contributions to modern society.",
    },
];

// Enable CORS for all origins
app.use(cors());

app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on http://192.168.108.214:${port}`);
});
