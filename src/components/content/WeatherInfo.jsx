import "./WeatherInfo.scss";

export default function WeatherInfo ({
    title,
    data
}) {

    const dataInfo = Object.entries(data).map(([key, [label, value, unit]]) => {
        return (
            <div 
                key={key} 
                className="weatherInfo__data"
            >
                <div>{label}</div>
                <div className="weatherInfo__data--modify">{value}{unit}</div>
            </div>
        )
    })

    return (
        <div className="weatherInfo">
            <h4 className="weatherInfo__title">{title}</h4>
            <div className="weatherInfo__dataWrapper">{dataInfo}</div>
        </div>
    )
}