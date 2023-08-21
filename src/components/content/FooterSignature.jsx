import "./FooterSignature.scss";

export default function FooterSignature ({
    company,
    friend,
    friendLink
}) {

    return (
        <p className="footer__signature">
        {company} 
        <a 
            href={friendLink} target="blank"
            className="footer__signature--apiLink"
        >
            {" "}{friend}
        </a>
    </p>
    )
}
