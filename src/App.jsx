import { Route, Routes } from 'react-router-dom';

// importar vistas
import Detalle from './views/Detalle.jsx';
import Home from './views/Home.jsx';
import Shopping from './views/Shopping.jsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="pizzas/">
          <Route path=":id" element={<Detalle />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/shopping" element={<Shopping />} />
      </Routes>
    </div>
  );
};
export default App;
