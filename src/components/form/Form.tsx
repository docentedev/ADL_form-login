import { useContext } from "react"
import LangContext from "../../contexts/LangContext"
import useInput from "../../hooks/useInput"

const Form = () => {
    const { lang, toggleLang } = useContext(LangContext)
    const [email, setEmail] = useInput('')
    const [password, setPassword] = useInput('')

    const handlerSubmit = (event: any) => {
        event.preventDefault()
        alert(`${email}, ${password}`)
    }

    const disabled = () => {
        return email === '' || password === ''
    }
    return (
        <div>
            <button className="btn btn-sm btn-light" onClick={toggleLang}>{lang === 'es' ? `Cambiar idioma a Ingles` : `Change language to Spanish`}</button>
            <form onSubmit={handlerSubmit}>
                <label>{lang === 'es' ? `Correo Electronico` : `Email`}</label>
                <input type="email" className="form-control" value={email} onChange={setEmail} />
                <label>{lang === 'es' ? `Contraseña` : `Password`}</label>
                <input type="password" className="form-control" value={password} onChange={setPassword} />
                <button className="btn btn-primary mt-2" disabled={disabled()}>{lang === 'es' ? `Entrar` : `Login`}</button>
            </form>
        </div>
    )
}

export default Form
