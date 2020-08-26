const { withRouter } = ReactRouterDOM
const { Link } = ReactRouterDOM

import { MailPreview } from '../Cmps/MailPreview.jsx'
import { mailService } from '../../../services/mail-service.js'
import { Storage } from '../../../services/storage-service.js'


export class MailDetails extends React.Component {

    state = {
        mail: null,
        subject: '',
        body: '',
        sentAt: '',
        isRead: true
    }

    componentDidMount() {
        const mailId = this.props.id;
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
            (this.state.mail !== null)?(
            <div>
                <section className="main-details">
                    <div className={(this.state.isRead) ? "open" : "close"}>XXXXXX</div>
                    <div className="body">{this.state.mail.body}</div>
                    <div className="sentAt">{this.state.mail.sentAt}</div>
                </section>
                <hr />
            </div>):''
        )
    }
}

