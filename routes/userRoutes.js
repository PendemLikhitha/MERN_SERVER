const express = require('express');
const router = express.Router();
const { ApolloServer, gql } = require('apollo-server-express');
const User = require('../model/userSchema'); // Adjust the path as needed

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
    }

    input CreateUserInput {
        name: String!
        email: String!
        password: String!
    }

    type Mutation {
        createUser(input: CreateUserInput!): User
        loginUser(email: String!, password: String!): User
    }

    type Query {
        getUsers(id: ID!): User
        getUser(email: String!): User
        
    }
`;

const resolvers = {
    Query: {
        getUsers: async (_, { id }) => {
            return await User.findById(id);
        },
        getUser: async(_,{email})=>{return await
            User.find({email:email});},
    },
    Mutation: {
        createUser: async (_, { input }) => {
            const { name, email, password } = input;
            const newUser = new User({ name, email, password });
            return await newUser.save();
        },
        loginUser: async (_, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new Error("Invalid email or password");
            }

            // Check if password matches
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                throw new Error("Invalid email or password");
            }

            return user;
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const { data, errors } = await server.executeOperation({
            query: gql`
                mutation {
                    createUser(input: { name: "${name}", email: "${email}", password: "${password}" }) {
                        id
                        name
                        email
                        password
                    }
                }
            `,
        });

        if (errors) {
            return res.status(500).send({ message: errors });
        }
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const { data, errors } = await server.executeOperation({
            query: gql`
                mutation loginUser($email: String!, $password: String!) {
                    loginUser(email: $email, password: $password) {
                        id
                        name
                        email
                    }
                }
            `,
            variables: { email, password }
        });

        if (errors) {
            return res.status(500).send(errors);
        }

        const user = data.loginUser;
        if (!user) {
            return res.status(401).send({ message: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successful', user });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});
module.exports = router;