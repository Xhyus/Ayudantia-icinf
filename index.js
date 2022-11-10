const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const statusRoutes = require('./routes/statusRoutes');
const mailerRoutes = require('./routes/mailerRoutes')
const fileRoutes = require('./routes/fileRoutes')

app.use(cors());
app.use(express.json());
app.options('*', cors());
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);
app.use('/api', userRoutes);
app.use('/api', cartRoutes);
app.use('/api', statusRoutes);
app.use('/api', mailerRoutes);
app.use('/api', fileRoutes)

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.DB, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Connected to database");
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})
