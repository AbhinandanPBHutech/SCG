import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import QuizApp from "./Components/quiz/quiz";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <QuizApp />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
