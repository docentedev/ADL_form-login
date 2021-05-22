import { useState } from 'react'
import Card from '../../components/card/Card'
import LangContext from '../../contexts/LangContext'

const Login = () => {
    const [lang, setLang] = useState<'es' | 'en'>('es')

    const toggleLang = () => {
        setLang(lang === 'es' ? 'en' : 'es')
    }
    return (
        <LangContext.Provider value={{
            lang,
            toggleLang,
        }}>
            <div className="col-12 col-sm-6 offset-sm-3">
                <Card />
            </div>
        </LangContext.Provider>
    )
}

export default Login
