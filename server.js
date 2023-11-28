import express from 'express';
import "dotenv/config";

const port = 3000;
const app = express();

app.use(express.static('public'));

// ? ===== APP.GET FUNCTIONS ===== ? \\

app.get('/searchForm', (req, res) => {
    let searchTerm = req.query.searchBar;
    console.log(searchTerm);
});

app.listen(port, () => {
    console.log(`Wamazon on ${port}`);
});