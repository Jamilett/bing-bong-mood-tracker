import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { quoteResolvers, quoteTypeDefs } from "./schemas/quoteSchema";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { typeDefs, resolvers } from "./schemas/index.js";
import db from "./config/connection.js";
import path from 'node:path';
import type { Request, Response } from 'express';
import { fileURLToPath } from 'node:url';


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
const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();
  // make sure DB is started before starting the server
  await db;
  app.use("/graphql", express.json(), expressMiddleware(server));

  //const __filename = fileURLToPath(import.meta.url);
  //const __dirname = path.dirname(__filename);

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