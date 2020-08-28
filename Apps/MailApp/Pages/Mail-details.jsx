const { withRouter } = ReactRouterDOM
const { Link } = ReactRouterDOM

import { mailService } from '../../../services/mail-service.js'


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
            })
    }

    // deleteMail = (ev, id) => {
    //     ev.preventDefault();
    //     ev.stopPropagation();
    //     mailService.deleteMail(id)
    //         .then(mails => {
    //             this.setState({ mails });
    //         })
    // }

        
        render() {
        return (
            (this.state.mail !== null) ? (
                <div>
                    <section className="main-details">
                        <div className="sent-at">{this.state.mail.sentAt}</div>
                        <div className="sent-from" style={{backgroundColor : "yellow"}}>{this.state.mail.sentFromUser.charAt(0)}</div>
                        <div className="close subject">{this.state.mail.subject}</div>
                        <div className="body">{this.state.mail.body}
                        {/* <img src="../../assets/img/trash.png" onClick={(event) => deleteMail(event,this.state.mail.id)} /> */}
                        </div>
                    </section>
                </div>) : ''
        )
    }
}

