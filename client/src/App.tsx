import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
//import CreateAccount from "./pages/createaccount";
import Dashboard from "./pages/dashboard";
import Landing from "./pages/landing";
import Signup from "./pages/createaccount";
import Quote from "./pages/quote";
import Moodlog from "./pages/moodlog";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="*" element={<Landing />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/moodlog" element={<Moodlog />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
