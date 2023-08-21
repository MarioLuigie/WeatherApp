import Form from "../content/Form";
import Result from "../content/Result";
import "./Main.scss";

export default function Main ({
    cityChange,
    enterPress,
    clearInput,
    city, 
    result,
    nameCity,
    cityTemp,
    cityTempFeelsLike,
    cityTempMax,
    cityTempMin,
    cityWindSpeed,
    cityWindDeg,
    cityPressure,
    cityHumidity,
    cityClouds,
    cityVisibility,
    cityGeneral,
    isDataCorrectly,
    clearResult,
    addCityToList
}) {

    return (
        <main className="main">
            <Form 
                cityChange={cityChange}
                enterPress={enterPress}
                clearInput={clearInput}
                city={city}
            />
            {isDataCorrectly && <Result 
                nameCity={nameCity} 
                cityTemp={cityTemp}
                cityTempFeelsLike={cityTempFeelsLike}
                cityTempMax={cityTempMax}
                cityTempMin={cityTempMin}
                cityWindSpeed={cityWindSpeed}
                cityWindDeg={cityWindDeg}
                cityPressure={cityPressure}
                cityHumidity={cityHumidity}
                cityClouds={cityClouds}
                cityVisibility={cityVisibility}
                cityGeneral={cityGeneral}
                clearResult={clearResult}
                addCityToList={addCityToList}
            />}
        </main>
    )
}