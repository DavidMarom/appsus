const { Link } = ReactRouterDOM

import {LongText} from "./LongText.jsx"

export function MailPreview({ mail , changStateOfisRead}) {

    var {id,sentFromUser, userBgc,subject, body, isRead, sentAt } = mail;
    const divStyle ={
        backgroundColor: userBgc
    }

    return (
        <div>
            <Link to ={`/mail/${id}`} onClick= {()=>changStateOfisRead(mail)} >
            <section className="single-mail-component">
                <div className="sentFromUser" style={divStyle}>{sentFromUser.charAt(0)}</div>
                <div className={(isRead)? "open":"close"}>{subject}</div>
                <div className="body-inbox"><LongText text ={body}/></div>
                <div className="sentAt-inbox">{sentAt}</div>
            </section>
            </Link>
            <hr />
        </div>
    )
}