import "./styles.css";
import UserPosts from "./UserPosts";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
const queryClient = new QueryClient();

export default function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <UserPosts />
      </QueryClientProvider>
    </div>
  );
}
