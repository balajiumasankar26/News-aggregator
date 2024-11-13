import React, { useState } from 'react';
import axios from 'axios';

const UpdateNews = () => {
    const [newsData, setNewsData] = useState({
        title: '',
        description: '',
        url: '',
        imageUrl: '',
        publishedAt: '',
        source: '',
        category: ''
    });

    // Handles input change for each field
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewsData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handles form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put('http://localhost:2000/api/news/update', newsData);
            console.log('Response:', response.data);
            alert('News updated successfully!');
        } catch (error) {
            console.error('Error updating news:', error);
            alert('Failed to update news.');
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Update News Article</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={newsData.title}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={newsData.description}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    URL:
                    <input
                        type="url"
                        name="url"
                        value={newsData.url}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Image URL:
                    <input
                        type="url"
                        name="imageUrl"
                        value={newsData.imageUrl}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Published At:
                    <input
                        type="datetime-local"
                        name="publishedAt"
                        value={newsData.publishedAt}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Source:
                    <input
                        type="text"
                        name="source"
                        value={newsData.source}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Category:
                    <input
                        type="text"
                        name="category"
                        value={newsData.category}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <button type="submit">Update News</button>
            </form>
        </div>
    );
};

export default UpdateNews;
