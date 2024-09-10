const { User }= require('../models/users');

// update user roles
exports.changeUserRoleToAdmin = async (req, res) => {
        const { email } = req.body;

        try {
                const user = await User.findOne({ email });
                if (!user) {
                        return res.status(404).send('User not found');
                }

                user.role = 'admin';
                await user.save();

                res.status(200).send('User role updated to admin');
        } catch(err) {
                console.error(err);
                res.status(500).send('Internal Server error');
        }
};

exports.getAllOrders = async (req, res) => {
        try {
                const orders = await Order.find().populate('user', 'email');
                res.json(orders);
        } catch (err) {
                console.error(err);
                res.status(500).json({ error: 'Failed to retrieve orders'});
        }
};

exports.updateOrderStatus = async (req, res) => {
        try {
                const { orderId } = req.params;
                const { status } = req.body;

                const order = await Order.findById(orderId);
                if (!order) {
                        return res.status(404).json({ error: 'Order not found' });
                }
                order.status = status;
                await order.save();

                res.json({ message: 'Order status updated successfully', order });
        } catch (err) {
                console.error(err);
                res.status(500).json({ error: 'Failed to update order status' });
        }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

exports.deleteUser = async (req, res) => {
    const userEmail = req.params.userEmail;

    // Check if userId is a valid ObjectId
    try {
        const user = await User.findOne({ email: userEmail });

        if (!user) {
            return res.status(404).send('User not found');
        }

        await User.findOneAndDelete({ email: userEmail });
        return res.status(200).send('User deleted successfully');
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
