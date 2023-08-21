import "./Select.scss";

export default function Select ({
    selectCitiesList,//zaktualizowana lista miast uzytkownika
    enterPress,
    cityId,
    disabledLabel,
    region
}) {
    // console.log(selectCitiesList);

    let filteredCities = selectCitiesList;
    if (cityId !== "all") {
        filteredCities = selectCitiesList
        .filter(city => city.region === cityId);
    }

    const optionList = filteredCities
    .map(({ name }, i) => {
        return (
            <option 
                key={i} 
                value={name}
                className="selectCity__option"
            >
                {name}
            </option>
        )
    })
    .sort((a, b) => {
        const nameA = a.props.value;
        const nameB = b.props.value;
        return nameA.localeCompare(nameB);
    })

    return (
        <div className="selectSection">
            <select 
                name="cityList" 
                id="list" 
                onChange={enterPress}
                className="selectSection__selectCity"
                value=""
            >
                <option value="" disabled>{disabledLabel}</option>
                {optionList}
            </select>
        </div>
    )
}