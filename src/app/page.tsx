import Categorias from "./componentes/Categorias";
import Paginação from "./componentes/Paginação";
import Grids from "./componentes/Grids";
import Footer from "./componentes/Footer";

export default function Home(){
  return (
    <div className=""> 
      <Categorias />
      <Paginação />
      <Grids />  
      <Paginação />
      <Footer />
    </div>
    
  );
}
