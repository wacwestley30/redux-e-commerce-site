const typeDefs = `
    type User {
        _id: ID!
        username: String!
        email: String!
    }

    type Auth {
        token: String!
        user: User
    }

    type Query {
        me: User
    }
`;

module.exports = typeDefs;