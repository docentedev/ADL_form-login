import Form from "../form/Form"

interface CardProps {
    lang: 'es' | 'en';
    toggleLang: () => void;
}

const Card = (props: CardProps) => {
    return (
        <div className="card mt-4">
            <div className="card-body">
                <Form lang={props.lang} toggleLang={props.toggleLang} />
            </div>
        </div>
    )
}

export default Card
