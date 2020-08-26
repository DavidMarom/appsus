const { Link } = ReactRouterDOM

export function MailPreview({ mail }) {

    function   UpdateReadMails(){
        return isRead = true;
    }

    var {id,subject, body, isRead, sentAt } = mail;

    return (
        <div>
            <Link to ={`/mail/${id}`} onClick= {()=>UpdateReadMails()}>
            <section className="single-mail-component">
                <div className={(isRead)? "open":"close"}>{subject}</div>
                <div className="body">{body}</div>
                <div className="sentAt">{sentAt}</div>
            </section>
            </Link>
            <hr />
        </div>
    )
}