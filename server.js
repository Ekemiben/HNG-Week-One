const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        email: "Ekemiben.4@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/yourusername/your-repo"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
