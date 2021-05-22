import { useState } from 'react'
import Card from '../../components/card/Card'

const Login = () => {
    const [lang, setLang] = useState<'es' | 'en'>('es')

    const toggleLang = () => {
        setLang(lang === 'es' ? 'en' : 'es')
    }
    return (
        <div className="col-12 col-sm-6 offset-sm-3">
            <Card lang={lang} toggleLang={toggleLang} />
        </div>
    )
}

export default Login
