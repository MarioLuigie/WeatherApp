import Select from "./Select";
import CheckBox from "./CheckBox";
import { useState } from "react";
import "./Panel.scss";
import AddCloseModal from "./AddCloseModal";

export default function Panel ({
    selectCitiesList,
    enterPress,
    isModalActive,
    setIsModalActive,
    region,
    changeRegionInput,
    addCityToList,
    closeAddCloseModal
}) {

    const [polandSelected, setPolandSelected] = useState(true);
    const [europeSelected, setEuropeSelected] = useState(false);
    const [worldSelected, setWorldSelected] = useState(false);
    const [allSelected, setAllSelected] = useState(false);
    const [cityId, setCityId] = useState("poland");

    //Change citiesList and active region check radio
    const handleChangeCitiesList = evt => {
        console.log("radio:", evt.target.id);
        const value = evt.target.value;
        const selectionMap = {
            'poland': [true, false, false, false],
            'europe': [false, true, false, false],
            'world': [false, false, true, false],
            'all':[false, false, false, true]
        };
    
        const [polandSelected, europeSelected, worldSelected, allSelected] = selectionMap[value];
        
        setPolandSelected(polandSelected);
        setEuropeSelected(europeSelected);
        setWorldSelected(worldSelected);
        setAllSelected(allSelected);
        setCityId(value);
    };

    return (
        <div className="panelSection">
            {isModalActive && <AddCloseModal 
                setIsModalActive={setIsModalActive} 
                region={region}
                changeRegionInput={changeRegionInput}
                addCityToList={addCityToList}
                closeAddCloseModal={closeAddCloseModal}
            />}
            <Select 
                selectCitiesList={selectCitiesList}
                enterPress={enterPress} 
                cityId={cityId}
                disabledLabel="-select city-"
            />
            <div className="checkboxSection">
                <CheckBox 
                    label="Poland"
                    value="poland"
                    id="poland"
                    checked={polandSelected}
                    onhandle={handleChangeCitiesList}
                />
                <CheckBox 
                    label="Europe"
                    value="europe"
                    id="europe"
                    checked={europeSelected}
                    onhandle={handleChangeCitiesList}
                />
                <CheckBox 
                    label="World"
                    value="world"
                    id="world"
                    checked={worldSelected}
                    onhandle={handleChangeCitiesList}
                />
                <CheckBox 
                    label="All"
                    value="all"
                    id="all"
                    checked={allSelected}
                    onhandle={handleChangeCitiesList}
                />
            </div>
        </div>
    )
}




    // const handleChangeList = evt => {
    //     console.log("radio:", evt.target.id);
    //     if (evt.target.value === "europe") {
    //         setEuropeSelected(true);
    //         setPolandSelected(false);
    //         setWorldSelected(false);
    //     }
    //     if (evt.target.value === "world") {
    //         setEuropeSelected(false);
    //         setPolandSelected(false);
    //         setWorldSelected(true);
    //     }
    //     if (evt.target.value === "poland") {
    //         setEuropeSelected(false);
    //         setPolandSelected(true);
    //         setWorldSelected(false);
    //     }
    // }