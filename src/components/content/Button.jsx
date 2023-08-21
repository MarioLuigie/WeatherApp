import "./Button.scss";

export default function Button ({
    label,
    onhandle
}) {

    return (
        <div className="buttonSection">
            <button 
                className="buttonSection__button"
                onClick={onhandle}
            >
                {label}
            </button>
        </div>
    )
}