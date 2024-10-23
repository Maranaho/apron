import { FC, StrictMode } from "react"
import ReactDOM from "react-dom/client" 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"

const queryClient = new QueryClient()

const Root: FC = () => (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
<Router>
      <App />
</Router>
    </QueryClientProvider>
  </StrictMode>
)

const rootElement = document.getElementById('app')
const root = ReactDOM.createRoot(rootElement as HTMLElement)
root.render(<Root />)