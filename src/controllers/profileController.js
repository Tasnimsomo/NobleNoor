exports.getProfile = async (req, res) => {
        try {
                const user = await User.findById(req.user.id).select('-password');
                res.json(user);
        } catch (err) {
                console.error(err);
                res.status(500).json({ error: 'Failed to retrieve profile' });
        }
};

exports.updateProfile = async (req, res) => {
        try {
                const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true });
                res.json(user);
        } catch (err) {
                console.error(err);
                res.status(500).json({ error: 'Failef to update profile' });
        }
};
