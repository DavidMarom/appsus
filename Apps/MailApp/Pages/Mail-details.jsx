const { withRouter } = ReactRouterDOM
const { Link } = ReactRouterDOM

import { MailPreview } from '../Cmps/MailPreview.jsx'
import { mailService } from '../../../services/mail-service.js'
import { Storage } from '../../../services/storage-service.js'


export class MailDetails extends React.Component {

    state = {
        mail: null,
        bgc:'#',
        subject: '',
        body: '',
        sentAt: '',
        isRead: true
    }

    componentDidMount() {
        console.log(this.props.match.params.mailId);
        const mailId = this.props.match.params.mailId;
        mailService.getMailById(mailId)
            .then(mail => {
                console.log(mail);
                this.setState({ mail })
                // this.getSub({ mail })
                // this.getBody({ mail })
                // this.getTime({ mail })
            })
    }

    // getSub = (mail) => {
        //     this.setState({ subject: mail.subject })
    // }
    
    // getBody = (mail) => {
    //     this.setState({ body: mail.body })
    // }


    // getTime = (mail) => {
        //     this.setState({ time: mail.sentAt })
        // }
        
        
        render() {
        // const { subject, body, sentAt } = this.state
        return (
            (this.state.mail !== null) ? (
                <div>
                    <section className="main-details">
                        <div className="sent-at">{this.state.mail.sentAt}</div>
                        <div className="sent-from" style={{backgroundColor : "yellow"}}>{this.state.mail.sentFromUser.charAt(0)}</div>
                        <div className="close subject">{this.state.mail.subject}</div>
                        <div className="body">{this.state.mail.body}</div>
                    </section>
                </div>) : ''
        )
    }
}

