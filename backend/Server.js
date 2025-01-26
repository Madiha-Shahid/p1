const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/Products');  // Import the Product model
const Products = require('./models/Products');

const app = express();
app.use(express.json());  // Middleware to parse JSON
app.use(cors());  // Enable CORS

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/ecommerce', {  // Make sure to replace with your MongoDB URI
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

// Call the connectDB function to connect to MongoDB before starting the server
connectDB();

// Define the API routes

// GET all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();  // Fetch all products from the database
    res.status(200).json(products);  // Send products as JSON response
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

// POST a new product
// POST a new product
app.post('/api/products', async (req, res) => {
  const { name, price, image, description, category, stock } = req.body;
  
  if (!name || !price || !image) {
    return res.status(400).json({ message: 'Name, Price, and Image are required fields' });
  }

  try {
    const newProduct = new Product({
      name,
      price,
      image,
      description,
      category,
      stock
    });

    await newProduct.save();
    res.status(201).json(newProduct);  // Return newly created product
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

// Update a product
router.put('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a product
router.delete('/products/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose.connection.once('open', () => {
  console.log('MongoDB connection established');
});

mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});


// Listen on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
