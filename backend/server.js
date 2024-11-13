const express = require('express');
const mongoose = require('mongoose');
const News = require('./models/News');
const cors=require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/newsDB')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Failed to connect to MongoDB', err));

// POST request to create a news article
app.post('/api/news/create', async (req, res) => {
    const { title, description, category,url, imageUrl, publishedAt, source } = req.body;

    try {
        const existingNews = await News.findOne({ url });

        if (existingNews) {
            return res.status(400).json({ message: 'News article with the same URL already exists', status: false });
        }

        const newsArticle = new News({
            title,
            description,
            category,
            url,
            imageUrl,
            publishedAt: new Date(publishedAt),
            source,
        });

        await newsArticle.save();
        res.status(201).send({ message: 'News article added successfully', status: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error', status: false });
    }
});

// GET request to fetch all news articles
app.get('/api/news', async (req, res) => {
    try {
        const allNews = await News.find(); // Retrieve all news articles from the database
        res.status(200).json(allNews); // Return the news articles as JSON
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error', status: false });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
