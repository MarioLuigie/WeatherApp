import "./FooterContent.scss";

export default function FooterContent ({
    title,
    rowTexts,
    isAnAnchor,
    modifyClass
}) {
    const texts = rowTexts.map((text, i) => {
        const item = 
            <p 
                key={`p_${i}`} 
                className={`footerContentSection__text ${modifyClass}`}
            >
                {text}
            </p>
        
        if (isAnAnchor) {
            return (
                <a href="_blank" key={`a_${i}`}>{item}</a>
            )
        } else {
            return item;
        }
    })

    return (
        <div className="footerContentSection">
            <h5 className="footerContentSection__title">{title}</h5>
            {texts}
        </div>
    )
}