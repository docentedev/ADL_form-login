import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Home from './containers/home/Home'
import ContextProduct from './contexts/ContextProduct';
import { useState } from 'react';
import Create from './containers/create/Create';
import Detail from './containers/detail/Detail';
import Menu from './components/menu/Menu';
import Remove from './containers/remove/Remove';
import NotFound from './containers/not-found/NotFound';
import Edit from './containers/edit/Edit';

function App() {
  const [products, setProducts] = useState<any>([{
    id: 1,
    name: 'Platano',
    price: 500,
  }])

  const addProduct = (product: any) => {
    // generamos un id a partir de la fecha para luego poder buscar
    // ademas de esta manera no se repetira
    const id = new Date().getTime()
    console.log(id)
    const newData = [...products, { id, ...product }]
    setProducts(newData)
  }

  const delProduct = (id: any) => {
    console.log(`delete ${id}`);
    const newData = products.filter((e: any) => e.id !== id)
    setProducts(newData)
  }

  const getProduct = (id: any) => {
    return products.find((e: any) => e.id === id)
  }

  const updateProduct = (product: any) => {
    // return products.find((e: any) => e.id === id)
    console.log(product);
    const newData = products.map((p: any) => {
      if (p.id === product.id) {
        return ({ ...product })
      }
      return p
    })
    setProducts(newData)
  }

  return (
    <ContextProduct.Provider value={{
      products,
      addProduct,
      delProduct,
      getProduct,
      updateProduct,
    }}>
      <Router>
        <Menu />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route path="/detail/:id">
              <Detail />
            </Route>
            <Route path="/edit/:id">
              <Edit />
            </Route>
            <Route path="/remove/:id">
              <Remove />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </ContextProduct.Provider >
  );
}

export default App
