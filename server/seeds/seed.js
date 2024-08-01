const db = require('../config/connection');
const Product = require('../models/Product');
const { productData } = require('./data');

db.once('open', async () => {
    try {
        console.log('Connected to MongoDB');

        // Clear existing products
        await Product.deleteMany({});
        console.log('Existing products removed');

        // Insert new products
        await Product.insertMany(productData);
        console.log('Database seeded with product data');

        // Close the connection
        db.close();
        console.log('Database connection closed');
    } catch (error) {
        console.error('Error seeding the database:', error);
        db.close();
    }
});