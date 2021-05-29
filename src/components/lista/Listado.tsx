import { useContext, useState } from "react"
import ProductContext from "../../contexts/ProductContext"
import Detalle from "../detalle/Detalle"

const Listado = () => {
    const [product, setProduct] = useState(null)
    const context = useContext(ProductContext)
    const setDelete = (product: any) => {
        context.delProduct(product.id)
    }


    const setShowProduct = (product: any) => {
        const p: any = context.getProduct(product.id)
        setProduct(p)
    }

    const handlerCloseDetail = () => {
        setProduct(null)
    }

    return (
        <div>
            {!product && <div className="card mt-4">
                <div className="card-body">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th className="text-end">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {context.products.map((product: any) => (
                                <tr key={`${product.id}`}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td className="text-end">
                                        <div className="btn-group">
                                            <button
                                                className="btn btn-info btn-sm"
                                                onClick={() => setShowProduct(product)}>
                                                View</button>
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() => setDelete(product)}>
                                                Remove</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>}
            {product && <Detalle product={product} onClose={handlerCloseDetail} />}
        </div>
    )
}

export default Listado
