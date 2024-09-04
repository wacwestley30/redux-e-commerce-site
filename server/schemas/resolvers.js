const { User, Product } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
          if (context.user) {
            const userData = await User.findOne({ _id: context.user._id}).select('-__v -password');
            return userData;
          }
          throw AuthenticationError;
        },
        products: async () => {
          return await Product.find({});
        }
    },
};

module.exports = resolvers;