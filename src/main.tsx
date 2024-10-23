import { FC, StrictMode } from 'react'
import ReactDOM from 'react-dom/client' 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'
import "./index.css"

const queryClient = new QueryClient()

const Root: FC = () => (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
)

const rootElement = document.getElementById('app')
const root = ReactDOM.createRoot(rootElement as HTMLElement)
root.render(<Root />)