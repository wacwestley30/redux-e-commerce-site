const typeDefs = `
    type User {
        _id: ID!
        username: String!
        email: String!
    }

    type Product {
        _id: ID!
        name: String!
        price: Float!
        image: String!
        description: String!
    }

    type Auth {
        token: String!
        user: User
    }

    type Query {
        me: User
        products: [Product]
        product(productId: ID!): Product
    }
`;

module.exports = typeDefs;