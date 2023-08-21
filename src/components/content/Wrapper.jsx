import Header from "../layouts/Header";
import Main from "../layouts/Main";
import Footer from "../layouts/Footer";
import "./Wrapper.scss";

export default function Wrapper ({
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
        <div className="wrapper">
            <Header cityClouds={cityClouds} />
            <Main 
                cityChange={cityChange}
                enterPress={enterPress}
                clearInput={clearInput}
                city={city}
                result={result}
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
                isDataCorrectly={isDataCorrectly}
                clearResult={clearResult}
                addCityToList={addCityToList}
            />
            <Footer />
        </div>
    )
}