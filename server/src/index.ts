import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import dotenv from "dotenv";
import type { Request, Response } from 'express';
import express from "express";
import path from 'node:path';
import { authenticateToken } from './utils/index.js';import db from "./config/connection.js";
import { mergedResolvers, mergedTypeDefs } from "./schemas/index.js";


// Cargar variables de entorno
dotenv.config();

const app = express();
app.use(cors());


// Conectar a MongoDB
// mongoose
//   .connect(process.env.MONGO_URI as string)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((error) => console.error("MongoDB Connection Error:", error));

// Crear servidor Apollo
const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers
});

async function startServer() {
  await server.start();
  // make sure DB is started before starting the server
  await db;
  app.use("/graphql", express.json(), expressMiddleware(server, {
    context: authenticateToken as any
  }));

  // if we're in production, serve client/build as static assets
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../client/dist')));

    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
    });
  }

  // Init serrver
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}/graphql`);
  });
}

// Start the server
startServer();