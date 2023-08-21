import Wrapper from "./Wrapper";
import Panel from "./Panel";
import { useState } from "react";
import textContent from "../../data/textContent.json";
const APIkey="915c5bc13106f51b8569501f22e35d03";

export default function App() {

  const { panel } = textContent;
  const defaultCities = panel.defaultCities;

  //FLAGS
  const [isDataCorrectly, setIsDataCorrectly] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);

  //BASE
  const [selectCitiesList, setselectCitiesList] = useState(defaultCities);
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");
  const [nameCity, setNameCity] = useState("");
  const [cityCoord, setCityCoord] = useState({});
  const [region, setRegion] = useState("");

  //TEMP
  const [cityTemp, setCityTemp] = useState("");
  const [cityTempFeelsLike, setCityTempFeelsLike] = useState("");
  const [cityTempMax, setCityTempMax] = useState("");
  const [cityTempMin, setCityTempMin] = useState("");

  //WIND
  const [cityWindSpeed, setCityWindSpeed] = useState("");
  const [cityWindDeg, setCityWindDeg] = useState("");

  //PARAMETERS
  const [cityPressure, setCityPressure] = useState("");
  const [cityHumidity, setCityHumidity] = useState("");
  const [cityClouds, setCityClouds] = useState(""); 
  const [cityVisibility, setCityVisibility] = useState(""); 
  const [cityGeneral, setCityGeneral] = useState("");

  function getDataFromAPI (city) {
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`;
    
    fetch(API)
    .then(res => {
      console.log(res);
      if (res.ok) {
        setIsDataCorrectly(true);
        return res;
      } else {
        alert("Problem with server or invalid city name")
        setIsDataCorrectly(false);
        throw Error(res.status);
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.name);
      // console.log(data.main.temp);
      // console.log(data);
      console.log(data.coord.lon, data.coord.lat);
      setNameCity(data.name);
      setCityCoord({lon : data.coord.lon, lat : data.coord.lat});

      setCityTemp((data.main.temp).toFixed(1));
      setCityTempFeelsLike((data.main.feels_like).toFixed(1));
      setCityTempMax((data.main.temp_max).toFixed(1));
      setCityTempMin((data.main.temp_min).toFixed(1));

      setCityWindSpeed((data.wind.speed).toFixed(1));
      setCityWindDeg((data.wind.deg).toFixed(1));

      setCityPressure((data.main.pressure).toFixed(1));
      setCityHumidity((data.main.humidity).toFixed(1));
      
      setCityGeneral(data.weather[0].description);
      setCityClouds(data.clouds.all);
      setCityVisibility(data.visibility);
    })
    .catch(err => console.log(`${err} something went wrong`));
  }

  const handleChangeRegionInput = evt => {
    setRegion(evt.target.value);
  }

  const handleClearInput = () => {
    setCity("");
  }

  const handleChangeInput = evt => {
    setCity(evt.target.value);
  }

  const handleClearResult = () => {
    setIsDataCorrectly(false);
  }

  const handleAddCityToList = () => {
    console.log("city added to list");
    const newCity = {name : result, region : region};
    defaultCities.push(newCity);
    setselectCitiesList(defaultCities);
    setIsModalActive(false);
    setRegion("");
  }

  const handleOpenModal = () => {
    setIsModalActive(true);
  }

  const handleCloseModal = () => {
    setIsModalActive(false);
    setRegion("");
  }

  const handleEnterPressInput = evt => {
    evt.preventDefault();
    setResult(city)
    // setTimeout(() => setResult(city), 400)
    if (city !== "") {
      getDataFromAPI(city);
    } else {
      return null;
    }
    handleClearInput();
  }

  const handleEnterPressSelect = evt => {
    const city = evt.target.value;
    setResult(city)
    // setTimeout(() => setResult(city), 400);
    // setCity(city);
    // handleClearInput();
    if (city !== "") {
      getDataFromAPI(city);
    } else {
      return null;
    }
  }
  
  // console.log("state-city:", city);

  return (
    <>
      <Panel 
        selectCitiesList={selectCitiesList} 
        enterPress={handleEnterPressSelect}
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
        region={region}
        changeRegionInput={handleChangeRegionInput}
        addCityToList={handleAddCityToList}
        closeAddCloseModal={handleCloseModal}
      />
      <Wrapper 
        cityChange={handleChangeInput}
        enterPress={handleEnterPressInput}
        clearInput={handleClearInput}
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
        clearResult={handleClearResult}
        openAddCloseModal={handleOpenModal}
      />
      {isDataCorrectly && <div>lon: {cityCoord.lon} lat: {cityCoord.lat}</div>}
    </>
  );
}

