import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import BookDetails from "../components/BookDetails";
import Books from "../components/Books";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Root from "../components/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "books",
        element: <Books />,
        loader: async () => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "book/:id",
        element: <BookDetails />,
        loader: async ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
    ],
  },
]);
