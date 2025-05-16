const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const blogRoutes = require('./routes/blogs');
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/auth');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/blogs/publish', authMiddleware);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(5000, () => console.log('Server running on port 5000'));
}).catch(err => console.error(err));