import './App.css';
import {Tour} from './components/Tour.jsx'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Tour />
    </QueryClientProvider>
    
  );
}

export default App;
