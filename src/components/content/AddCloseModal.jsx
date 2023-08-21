import Button from "./Button";
import "./AddCloseModal.scss";

export default function AddCloseModal ({
    region,
    changeRegionInput,
    addCityToList,
    closeAddCloseModal

}) {

    return (
        <div className="addCloseModalSection">
            <div className="addCloseModalSection__wrapper">
                <label 
                    htmlFor="regionInput" 
                    className="addCloseModalSection__label"
                >
                    Insert region
                </label>
                <input 
                    type="text" 
                    value={region} 
                    id="regionInput" 
                    className="addCloseModalSection__input" 
                    onChange={changeRegionInput}
                />
            </div>
            <div className="addCloseModalSection__buttons">
                <Button 
                    label="add" 
                    onhandle={addCityToList}
                />
                <Button 
                    label="close" 
                    onhandle={closeAddCloseModal}
                />
            </div>
        </div>
    )
}