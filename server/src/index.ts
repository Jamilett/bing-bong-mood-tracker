import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { typeDefs, resolvers } from "./schemas/index.js";
import db from "./config/connection.js";


// Cargar variables de entorno
dotenv.config();

const app = express();


// Conectar a MongoDB
// mongoose
//   .connect(process.env.MONGO_URI as string)
//   .then(() => console.log("✅ Connected to MongoDB"))
//   .catch((error) => console.error("❌ MongoDB Connection Error:", error));

// Definir esquema GraphQL (Ejemplo simple)


// Crear servidor Apollo
const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();
  // make sure DB is started before starting the server
  await db;
  app.use("/graphql", express.json(), expressMiddleware(server));

  // Iniciar servidor
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}/graphql`);
  });
}

// Arrancar servidor
startServer();