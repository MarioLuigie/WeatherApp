// import pic1 from "../../assets/pics/1.jpg";
// import pic2 from "../../assets/pics/2.jpg";
import cloudsVideo from "../../assets/video/clouds.mp4";
import cloudsSunVideo from "../../assets/video/clouds-sun.mp4";
import sunVideo from "../../assets/video/sun.mp4";
import { useEffect, useState } from "react";
import textContent from "../../data/textContent.json";
import "./Header.scss";
import "../../index.scss";

export default function Header ({
    cityClouds,
}) {

    const { header } = textContent;
    const [videoSource, setVideoSource] = useState(cloudsSunVideo);
    const [videoKey, setVideoKey] = useState(0);
  
    useEffect(() => {
        cityClouds >= 0 && cityClouds <= 25 
            ? setVideoSource(sunVideo)
            : cityClouds < 70 
            ? setVideoSource(cloudsSunVideo)
            : setVideoSource(cloudsVideo)
        setVideoKey(videoKey + 1);
    }, [cityClouds]);

    return (
        <header className="header">
            <video key={videoKey} autoPlay loop muted className="header__video">
                <source src={videoSource} type="video/mp4"/>
            </video>
            <div className="header__titleSection">
                <h2 className="header__title">{header.title_1}</h2>
                <h2 className="header__title">{header.title_2}</h2>
                <h2 className="header__title">{header.title_3}</h2>
            </div>
            <p className="header__subtitle">{header.subtitle}</p>
        </header>
    )
}
















// {cityClouds >= 0 && cityClouds <= 30 
//     ? faSun 
//     : cityClouds < 75 
//     ? faCloudSun 
//     : faCloud
// }

// {cityClouds === 100
//     ? (
//         <video autoPlay loop muted className="header__video">
//             <source src={headerVideo1} type="video/mp4"/>
//         </video>
//     )
//     : (
//         <video autoPlay loop muted className="header__video">
//             <source src={headerVideo} type="video/mp4"/>
//         </video>
//     )
// } 





// import headerVideo from "../../assets/video/clouds.mp4";
// import headerVideo1 from "../../assets/video/clouds-sun.mp4";
// import pic1 from "../../assets/pics/test1.jpg";
// import pic2 from "../../assets/pics/test2.jpg";

// import "./Header.scss";
// import "../../index.scss";
// import textContent from "../../data/textContent.json";

// export default function Header ({
//     cityClouds,
// }) {
//     const { header } = textContent;
//     let pic = null;

//     if (cityClouds === 0 || cityClouds === "") {
//         // pic = <img src={pic1} alt="" style={{width: "200px"}}/>
//         pic = <video autoPlay loop muted className="header__video">
//                 <source src={headerVideo} type="video/mp4"/>
//             </video>
//     } else {
//         // pic = <img src={pic2} alt="" style={{width: "200px"}}/>
//         pic = <video autoPlay loop muted className="header__video">
//                 <source src={headerVideo1} type="video/mp4"/>
//             </video>
//     }

//     return (
//         <header className="header">
//             {/* <video autoPlay loop muted className="header__video">
//                 <source src={headerVideo} type="video/mp4"/>
//             </video> */}
//             {pic}
//             <div className="header__titleSection">
//                 <h2 className="header__title">{header.title_1}</h2>
//                 <h2 className="header__title">{header.title_2}</h2>
//                 <h2 className="header__title">{header.title_3}</h2>
//             </div>
//             <p className="header__subtitle">{header.subtitle}</p>
//         </header>
//     )
// }

