import "./AddCloseButtons.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";


export default function AddCloseButtons ({
    clearResult,
    openAddCloseModal
}) {

    return (
        <div className="addCloseButtonsSection">
            <FontAwesomeIcon 
                icon={faCirclePlus}
                className="addCloseButtonsSection__button addCloseButtonsSection__button--add"
                onClick={openAddCloseModal}
            />
            <FontAwesomeIcon 
                icon={faCircleXmark} 
                className="addCloseButtonsSection__button addCloseButtonsSection__button--close"
                onClick={clearResult}
            />
        </div>
    )
}