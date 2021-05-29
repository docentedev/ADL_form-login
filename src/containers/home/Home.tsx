import { useState } from 'react'
import FormularioCreacion from '../../components/formulario-creacion/FormularioCreacion'
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

    const getProduct = (id: any) => {
        return products.find((e: any) => e.id === id)
    }

    return (
        <ProductContext.Provider value={{
            products,
            addProduct,
            delProduct,
            getProduct,
        }}>
            <div className="row">
                <div className="col-12 col-sm-6 offset-sm-3">
                    <FormularioCreacion onSubmit={addProduct} />
                    <Listado />
                </div>
            </div>
        </ProductContext.Provider>
    )
}

export default Home
