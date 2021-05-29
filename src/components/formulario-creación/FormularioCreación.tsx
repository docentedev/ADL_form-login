import useInput from "../../hooks/useInput"

interface FormProps {
    onSubmit: (product: any) => void;
}

const Form = ({ onSubmit }: FormProps) => {
    const [name, setName, setNameValue] = useInput('')
    const [price, setPrice, setPriceValue] = useInput('0')
    const disabled = () => name === '' || price === ''

    const validNumber = (p: string) => {
        if (p === '') return '';
        const n = Number.parseInt(p) * 1
        return n
    }

    const handlerSubmit = (event: any) => {
        event.preventDefault()
        onSubmit({
            name,
            price,
        })
        setNameValue('')
        setPriceValue('0')
    }
    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <div className="card mt-4">
                    <div className="card-body">
                        <label>Name</label>
                        <input className="form-control" value={name} onChange={setName} />
                        <label>Price</label>
                        <input className="form-control" min={0} type="number" value={validNumber(price)} onChange={setPrice} />
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary" disabled={disabled()}>
                            Save
                    </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form
