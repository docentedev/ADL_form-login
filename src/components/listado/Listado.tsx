import { useContext } from 'react'
import ContextProduct from '../../ContextProduct'

const Listado = () => {
    const context = useContext(ContextProduct)

    return (
        <div>
            {<div className="card mt-4">
                <div className="card-body">
                    {context.products.length > 0 ? (
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
                                                <a
                                                    className="btn btn-primary btn-sm"
                                                    href={`/detail/${product.id}`}>
                                                    View</a>
                                                <a
                                                    className="btn btn-info btn-sm"
                                                    href={`/edit/${product.id}`}>
                                                    Edit</a>
                                                <a
                                                    className="btn btn-sm btn-warning"
                                                    href={`/remove/${product.id}`}>
                                                    Remove</a>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>) : (
                        <div>
                            Not Items
                        </div>
                    )}
                </div>
            </div>}
        </div>
    )
}

export default Listado
