const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const cors = require('cors');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const imageRoutes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// CORS options
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

// Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();

  app.use(cors(corsOptions));
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use('/api', imageRoutes);

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.once('open', () => {
    console.log('Database connection established successfully!');
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer();