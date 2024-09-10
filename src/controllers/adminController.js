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
