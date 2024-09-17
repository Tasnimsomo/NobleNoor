const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');
const { sendOrderConfirmationEmail } = require('./services/orderConfirmation');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

connectDB();


app.use(routes);

// New route for completing orders
app.post('/orders/complete-order', async (req, res) => {
    const { billingDetails, mpesaCode } = req.body;


    // Send confirmation email
    const emailResult = await sendOrderConfirmationEmail(billingDetails.email, mpesaCode);

    if (emailResult.success) {
        res.json({ success: true, message: 'Order completed and email sent' });
    } else {
        res.status(500).json({ success: false, error: emailResult.error });
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});