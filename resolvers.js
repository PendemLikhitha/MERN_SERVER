const User = require('./model/userSchema');

const resolvers = {
    Query: {
        getUsers: async (_, { id }) => {
            return await User.findById(id);
        },
        getAllUsers: async ()=>{
            return await User.find();
        },
        getUser: async (_, { email }) => {
            return await User.find({ email: email });
        }
    },
    Mutation: {
        createUser: async (_, { input }) => {
            try {
                const { name, email, password } = input;
                if (!name || !email || !password) {
                    throw new Error("Enter all the fields");
                }
                const newUser = new User({ name, email, password });
                return await newUser.save();
            } catch (err) {
                throw new Error(err);
            }
        },

        loginUser: async (_, { email, password }) => {
            try {
                const user = await User.findOne({ email });
                if (!user) {
                    throw new Error("Invalid email or password");
                }
                // For demonstration, checking password directly (not recommended in production)
                if (password !== user.password) {
                    throw new Error("Invalid email or password");
                }
                return user;
            } catch (err) {
                throw new Error(err);
            }
        },

        changePass: async (_, { id, password }) => {
            try {
                const userNew = await User.findByIdAndUpdate(id, { password: password }, { new: true });
                if (!userNew) {
                    throw new Error("User not found");
                }
                return userNew;
            } catch (err) {
                throw new Error(err);
            }
        }
    },
    User: {
        email: (parent) => parent.email || ' ',
        name: (parent) => parent.name || ' ',
        password: (parent) => parent.password || ' ',
    },
};

module.exports = resolvers;