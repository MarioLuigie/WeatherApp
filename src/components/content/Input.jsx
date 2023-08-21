import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import "./Input.scss";

export default function Input ({
    placeholder,
    cityChange,
    clearInput,
    city
}) {

    return (
        <div className="inputSection">
            <div className='inputWrapper'>
                <input 
                    type="text" 
                    className="input"
                    id="inputCity"
                    placeholder={placeholder}
                    value={city}
                    onChange={cityChange}
                />
                {city && <FontAwesomeIcon 
                    icon={faCircleXmark} 
                    className='input__clearButton'
                    onClick={clearInput}
                />}
                <button className='input__submitButton'>
                    ok
                </button>
            </div>
        </div>
    )
}