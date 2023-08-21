import Input from "./Input";
import textContent from "../../data/textContent.json";
import "./Form.scss";

export default function Form ({
    cityChange,
    enterPress,
    clearInput,
    city
}) {

    const { main } = textContent;
    const { input } = main;
    const { title, placeholder } = input;

    return (
        <form className="form" onSubmit={enterPress}>
            <p className="form__title">{title}</p>
            <Input 
                placeholder={placeholder}
                cityChange={cityChange}
                clearInput={clearInput}
                city={city}
            />
        </form>
    )
}