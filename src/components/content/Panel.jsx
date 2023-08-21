import Select from "./Select";
import CheckBox from "./CheckBox";
import { useState } from "react";
import "./Panel.scss";

export default function Panel ({
    defaultCities,
    selectCitiesList,
    enterPress
}) {

    const [polandSelected, setPolandSelected] = useState(true);
    const [europeSelected, setEuropeSelected] = useState(false);
    const [worldSelected, setWorldSelected] = useState(false);
    const [allSelected, setAllSelected] = useState(false);
    const [cityId, setCityId] = useState("poland");

    const handleChangeCitiesList = evt => {
        console.log("radio:", evt.target.id);
        const value = evt.target.value;
        const selectionMap = {
            'europe': [true, false, false, false],
            'world': [false, false, true, false],
            'poland': [false, true, false, false],
            'all':[false, false, false, true]
        };
    
        const [europeSelected, polandSelected, worldSelected, allSelected] = selectionMap[value];
        setEuropeSelected(europeSelected);
        setPolandSelected(polandSelected);
        setWorldSelected(worldSelected);
        setAllSelected(allSelected);
        setCityId(value);
    };

    return (
        <div className="panelSection">
            <Select 
                defaultCities={defaultCities}
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