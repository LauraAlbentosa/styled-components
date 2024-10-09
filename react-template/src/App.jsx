import Button from "./components/button/Button";
import { StyledButton } from "./components/button/button.styles";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () =>  {
  return <div>
    <GlobalStyles/>
    <Button color='blue'/>
    <Button color='orange'/>
  </div>;
}

export default App;