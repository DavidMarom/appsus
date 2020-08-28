const { Link } = ReactRouterDOM
import { LongText } from "./LongText.jsx"

export function MailPreview({ mail, changStateOfisRead, changeToImportantMail, deleteMail }) {

    var { id, sentFromUser, userBgc, subject, body, isRead, sentAt, isStarred } = mail;
    const divStyle = {
        backgroundColor: userBgc
    }
    const starClass = (isStarred) ? 'star-on' : 'star-off';
    return (
        <div>
            <Link to={`/mail/${id}`} onClick={() => changStateOfisRead(mail)} >
                <section className="single-mail-component">
                    <div className={starClass} onClick={(event) => changeToImportantMail(event,mail)}>
                        {/* <img src="../../assets/img/star.png" /> */} {`\u2606`}
                    </div>
                    <div className="sentFromUser" style={divStyle}>{sentFromUser.charAt(0)}</div>
                    <div className={(isRead) ? "open flex align-center" : "close flex align-center"}>{subject}</div>
                    <div className="body-inbox"><LongText text={body} /></div>
                    <div className="sentAt-inbox">{sentAt}</div>
                    <div className="trash" onClick={(event) => deleteMail(event,id)}>🗑</div>
                </section>
            </Link>
            <hr />
        </div>
    )
}