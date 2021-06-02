import { useState, useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import ContextProduct from "../../ContextProduct"

const Remove = () => {
    const { id }: { id: string } = useParams()
    const [product, setProduct]: any = useState({})
    const context = useContext(ContextProduct)

    useEffect(() => {
        const p: any = context.getProduct(Number.parseInt(id))
        setProduct(p)
    }, [context, id])

    const handlerRemove = () => {
        context.delProduct(Number.parseInt(id))
    }

    return (
        <div className="row">
            <div className="col-12 col-sm-6 offset-sm-3">
                {product ? (
                    <div className="card mt-4">
                        <div className="card-header">Confirm delete {product.name} ({product.id})?</div>
                        <div className="card-body">
                            price: {product.price}
                        </div>
                        <div className="card-footer">
                            <div className="btn-group">
                                <button className="btn btn-danger btn-sm" onClick={handlerRemove}>Yes</button>
                                <a href="/" className="btn btn-primary btn-sm">No</a>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="alert alert-danger mt-4">
                        <div>Not Found</div>
                        <a href="/" className="btn btn-danger btn-sm">Go to home</a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Remove
