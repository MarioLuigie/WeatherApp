import "./Widget.scss";
import React, { useEffect } from 'react';

function WeatherWidget() {
    useEffect(() => {
        // Skrypt do dodania do head lub importu w zależności od Twoich preferencji
        const firstScript = document.createElement('script');
        firstScript.src = '//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js';
        firstScript.async = true;
        document.head.appendChild(firstScript);

        // Skrypt inicjalizujący i włączający widget
        const secondScript = document.createElement('script');
        secondScript.innerHTML = `
            window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
            window.myWidgetParam.push({
                id: 21,
                cityid: '3094802',
                appid: '8d6ffedbf1743dc639962794fbc4921b',
                units: 'metric',
                containerid: 'openweathermap-widget-21',
            });
            (function() {
                var script = document.createElement('script');
                script.async = true;
                script.charset = "utf-8";
                script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(script, s);
            })();
        `;
        document.body.appendChild(secondScript);

        // Czyszczenie skryptów przy odmontowaniu komponentu
        return () => {
            document.head.removeChild(firstScript);
            document.body.removeChild(secondScript);
        };
    }, []);

    return (
        <div>
            {/* Umieść element div widgetu */}
            <div id="openweathermap-widget-21" className='widgetSection'></div>
        </div>
    );
}

export default WeatherWidget;



{/* <div id="openweathermap-widget-21"></div>

<script src='//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js'></script>

<script>
    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  
    window.myWidgetParam.push({
        id: 21,
        cityid: '3094802',
        appid: '8d6ffedbf1743dc639962794fbc4921b',
        units: 'metric',
        containerid: 'openweathermap-widget-21',  
    });  
    (function() {
        var script = document.createElement('script');
        script.async = true;
        script.charset = "utf-8";
        script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);  
    })();
</script> */}
