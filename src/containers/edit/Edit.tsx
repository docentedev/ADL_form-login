import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import FormularioEdicion from "../../components/formulario-edicion/FormularioEdicion"
import ProductContext from "../../contexts/ProductContext"

const Edit = () => {
    const { id }: { id: string } = useParams()
    const [product, setProduct]: any = useState({})
    const context = useContext(ProductContext)

    useEffect(() => {
        const p: any = context.getProduct(Number.parseInt(id))
        setProduct(p)
    }, [context, id])

    return product.id ? (
        <div className="row">
            <div className="col-12 col-sm-6 offset-sm-3">
                <FormularioEdicion onSubmit={context.updateProduct} product={product} />
            </div>
        </div>
    ) : (<span />)
}

export default Edit
