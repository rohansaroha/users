import "./styles.css";
import UserPosts from "./Components/UserPosts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostDataProvider from "./context/PostDataProvider";

const queryClient = new QueryClient();

export default function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <PostDataProvider>
          <UserPosts />
        </PostDataProvider>
      </QueryClientProvider>
    </div>
  );
}
