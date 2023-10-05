// import user model
const { User, Book } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args) => {
            return await User.findOne({
                $or: [{ _id: user ? user._id : args.id }, { username: args.username }]
            });
        },
        Mutation: {

        }
    }
};

module.exports = resolvers;
