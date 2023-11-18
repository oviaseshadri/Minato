import React from "react";
import { ThemeProvider } from "./context/WalletContext";
import RouterComponent from "./components/RouterComponent";

function App() {
  return (
    <ThemeProvider>
      <div className="App" >
        {/* Your other components */}
        
        
        <RouterComponent />
        {/* Rest of your app */}
      </div>
    </ThemeProvider>
  );
}

export default App;
