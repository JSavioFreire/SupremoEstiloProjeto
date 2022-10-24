import Header1 from "./header1/header1";
import Header2 from "./header2/header2";
import Banner from "./banner/banner";
import TituloProdutos from "./tituloProdutos/tituloProdutos";
import LinhaProdutos from "./linhaProdutos/linhaProdutos";

//bootStrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header1/>
      <Header2/>
      <Banner/>
      <TituloProdutos/>
      <LinhaProdutos/>
    </div>
  );
}

export default App;
