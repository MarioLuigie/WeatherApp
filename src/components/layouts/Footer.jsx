import Downloads from "../content/Downloads";
import FooterContent from "../content/FooterContent";
import FooterSignature from "../content/FooterSignature";
import textContent from "../../data/textContent.json";
import "./Footer.scss";

export default function Footer () {

    const { footer } = textContent;
    const { info } = footer;
    const { terms } = footer;
    const { company } = footer;
    const { signature } = footer;

    return (
        <footer className="footer">
            <div className="footerContentGroup">
                <div className="footerContentSections">
                    <FooterContent 
                        title={info.title}
                        rowTexts={info.rows}
                        isAnAnchor={true}
                        id="footer-info"
                    />
                    <FooterContent 
                        title={terms.title}
                        rowTexts={terms.rows}
                        isAnAnchor={true}
                        id="footer-terms"
                    />
                </div>
                <FooterContent 
                    title={company.title}
                    rowTexts={company.rows}
                    isAnAnchor={false}
                    modifyClass="footerContentSection__text--justify"
                />
            </div>
            <Downloads />
            <FooterSignature 
                company={signature.company}
                friend={signature.friend}
                friendLink={signature.friendLink}
            />
        </footer>
    )
}