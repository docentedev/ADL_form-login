import { useContext } from "react"
import ProductContext from "../../contexts/ProductContext"

const Listado = () => {
    const context = useContext(ProductContext)
    const setDelete = (product: any) => {
        context.delProduct(product.id)
    }
    return (
        <div className="card mt-4">
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
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => setDelete(product)}>
                                        Remover
                                </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Listado
