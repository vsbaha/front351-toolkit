import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CounterPage from "./pages/CounterPage";
import TodoListPage from "./pages/TodoListPage";
import UserPage from "./pages/UserPage";
import PostEditPage from "./pages/PostEditPage";
import PostsListPage from "./pages/PostsListPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<span className="text-2xl">Home Page</span>} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="todos" element={<TodoListPage />} />
          <Route path="posts" element={<PostsListPage />} />
          <Route path="posts/:id/edit" element={<PostEditPage />} />
          <Route
            path="*"
            element={<span className="text-2xl">Not found</span>}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
