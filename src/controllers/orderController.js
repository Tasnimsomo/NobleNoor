const Order = require('../models/order');
const { sendOrderConfirmationEmail } = require('../services/orderConfirmation');

exports.completeOrder = async (req, res) => {
    try {
        const { billingDetails, items, total, mpesaCode } = req.body;

        // Create a new order
        const order = new Order({
            customer: {
                name: billingDetails.name,
                email: billingDetails.email
            },
            items,
            total,
            mpesaCode,
            status: 'completed'  // Assuming MPESA code is valid
        });

        // Save the order
        await order.save();

        // Send confirmation email
        const emailResult = await sendOrderConfirmationEmail(billingDetails.email, mpesaCode);

        if (emailResult.success) {
            res.json({ success: true, message: 'Order completed and email sent', orderId: order._id });
        } else {
            // If email fails, still return success but with a warning
            res.json({ success: true, message: 'Order completed but email failed to send', orderId: order._id, emailError: emailResult.error });
        }
    } catch (error) {
        console.error('Error completing order:', error);
        res.status(500).json({ success: false, error: 'Error processing order' });
    }
};