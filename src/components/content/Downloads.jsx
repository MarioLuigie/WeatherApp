import "./Downloads.scss";
import appStoreLogo from "../../assets/pics/app-store-badge.svg";
import googlePlayLogo from "../../assets/pics/google-play-badge.png";

export default function Downloads () {

    return (
        <div className="downloadsSection">
            <a href="blank">
                <img src={appStoreLogo} alt="app store logo"/>
            </a>
            <a href="blank">
                <img src={googlePlayLogo} alt="google play logo" className="downloadsSection__googlePlayLogo"/>
            </a>
        </div>
    )
}