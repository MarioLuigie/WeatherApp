import WeatherInfo from "./WeatherInfo";
import AddCloseButtons from "./AddCloseButtons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import "./Result.scss";

export default function Result ({
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
    clearResult,
    addCityToList
}) {
    // console.log("RESULT");
    return (
        <div className="resultSection">
            <AddCloseButtons 
                clearResult={clearResult}
                addCityToList={addCityToList}
            />
            <div className="resultSection__header">
                <FontAwesomeIcon
                    icon={cityClouds >= 0 && cityClouds <= 30 
                        ? faSun 
                        : cityClouds < 75 
                        ? faCloudSun 
                        : faCloud
                    }
                    className="resultSection__icon"
                />
                <div className="resultSection__title">{nameCity}</div>
            </div>
            <div className="waterInfoSection">
                <WeatherInfo
                    title="Description"
                    data={{
                        item1 : ["Description: ", cityGeneral, ""],
                        item2 : ["Clouds: ", cityClouds, "%"],
                        item3 : ["Visibility: ", cityVisibility, "m"],
                    }}
                />
                <WeatherInfo
                    title="Temperature"
                    data={{
                        item1 : ["Temp: ", cityTemp, "°C"],
                        item2 : ["Temp feels: ", cityTempFeelsLike, "°C"],
                        item3 : ["Temp max: ", cityTempMax, "°C"],
                        item4 : ["Temp min: ", cityTempMin, "°C"],
                    }}
                />
                <WeatherInfo
                    title="Wind"
                    data={{
                        item1 : ["Speed: ", cityWindSpeed, "m/s"],
                        item2 : ["Degrees: ", cityWindDeg, "°"],
                    }}
                />
                <WeatherInfo
                    title="Parameters"
                    data={{
                        item1 : ["Pressure: ", cityPressure, "hPa"],
                        item2 : ["Humidity: ", cityHumidity, "%"],
                    }}
                />
            </div>
        </div>
    )
}