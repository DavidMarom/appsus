const { Link } = ReactRouterDOM

export function MailPreview({ mail , getId}) {

    function   UpdateReadMails(){
        return isRead = true;
    }

    var {id,sentFromUser, userBgc,subject, body, isRead, sentAt } = mail;

    return (
        <div>
            <Link to ={`/mail/${id}`} onClick= {()=>getId(id) , ()=>UpdateReadMails()} >
            <section className="single-mail-component">
                <div className="sentFromUser" >{sentFromUser.charAt(0)}</div>
                <div className={(isRead)? "open":"close"}>{subject}</div>
                <div className="body-inbox">{body}</div>
                <div className="sentAt-inbox">{sentAt}</div>
            </section>
            </Link>
            <hr />
        </div>
    )
}