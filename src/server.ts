import express from "express";
import cors from "cors";
import path from "path";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Put page routes here
const routes = ['/', '/about'];
for (const route of routes) {
    app.get(route, (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
}

app.get('/test', (req, res) => {
    return res.send("This is a test endpoint");
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
