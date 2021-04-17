
import { AuthProvider } from "./contexts/auth";
import Routes from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <AuthProvider>
      <Routes />
      <GlobalStyles />
    </AuthProvider>
      
    
  )
}

export default App;
