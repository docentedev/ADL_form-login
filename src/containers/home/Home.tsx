import { useState } from 'react'
import FormularioCreación from '../../components/formulario-creación/FormularioCreación'
import Listado from '../../components/lista/Listado'
import ProductContext from '../../contexts/ProductContext'

const Home = () => {
    const [products, setProduct] = useState<any>([{
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
        setProduct(newData)
    }

    const delProduct = (id: any) => {
        console.log(`delete ${id}`);
        const newData = products.filter((e: any) => e.id !== id)
        setProduct(newData)
    }

    const getProduct = () => {

    }

    return (
        <ProductContext.Provider value={{
            products,
            addProduct,
            delProduct,
            getProduct,
        }}>
            <div className="col-12 col-sm-6 offset-sm-3">
                <FormularioCreación onSubmit={addProduct} />
                <Listado />
            </div>
        </ProductContext.Provider>
    )
}

export default Home
