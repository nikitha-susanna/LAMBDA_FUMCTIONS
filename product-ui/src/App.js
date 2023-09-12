import "./App.css";
import Header from "./components/Header";
import ProductTable from "./components/ProductTable";
import { ThemeProvider } from "@mui/material";
import theme from "./components/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <ProductTable />
      </ThemeProvider>
    </div>
  );
}

export default App;
