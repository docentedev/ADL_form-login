import { createContext } from 'react'

const LangContext = createContext({
    lang: 'es',
    toggleLang: () => {},
})

export default LangContext
