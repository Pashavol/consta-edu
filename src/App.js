import './App.css';
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import {Layout} from "./components";

function App() {
  return (
      <Theme preset={presetGpnDefault}>
          <Layout isBlue={true}/>
      </Theme>
  );
}

export default App;
