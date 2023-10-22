import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import 'react-day-picker/dist/style.css';
import './index.css'
import AuthContext from './Context/AuthContext.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AuthContext>
  </React.StrictMode>,
)
