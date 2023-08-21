import "./Button.scss";

export default function Button ({
    label
}) {

    return (
        <div className="buttonSection">
            <button className="buttonSection__button">
                {label}
            </button>
        </div>
    )
}