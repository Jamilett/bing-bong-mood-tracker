import axios from "axios";

const API_URL = "https://zenquotes.io/api/quotes";

export const quoteTypeDefs = `
  type Quote {
    text: String!
    author: String!
  }

  type Query {
    getQuote: Quote
  }
`;

export const quoteResolvers = {
  // Quotes documentation: https://zenquotes.io/api/quotes
  Query: {
    getQuote: async () => {
      try {
        const { data } = await axios.get(API_URL);

        if (!data || !Array.isArray(data) || data.length === 0) {
          throw new Error("No quotes found");
        }

        return {
          text: data[0].q, // Quote is in `q` key
          author: data[0].a, // Quotte author is in `a` key
        };
      } catch (error) {
        console.error("Error fetching quote:", error);
        throw new Error("Failed to fetch quote");
      }
    },
  },
};