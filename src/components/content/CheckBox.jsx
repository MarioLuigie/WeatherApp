import "./CheckBox.scss";

export default function CheckBox ({
    label,
    value,
    id,
    checked,
    onhandle
}) {

    return (
        <div className="radioWrapper">
            <div className="radioWrapper__radio">
                <label 
                    htmlFor={id}
                    className="radioWrapper__label"
                >{label}</label>
                <input 
                    type="radio" 
                    id={id} 
                    name="cities" 
                    value={value} 
                    checked={checked}
                    className="radioWrapper__input"
                    onChange={onhandle}
                />
            </div>
        </div>
    )
}