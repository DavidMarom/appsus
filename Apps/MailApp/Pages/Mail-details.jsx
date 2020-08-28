const { Link, Switch, Route, withRouter } = ReactRouterDOM

import { mailService } from '../../../services/mail-service.js'
import { MailReply } from './MailReply.jsx';


export class MailDetails extends React.Component {

    state = {
        mail: null,
    }

    componentDidMount() {
        const mailId = this.props.match.params.mailId;
        mailService.getMailById(mailId)
            .then(mail => {
                this.setState({ mail })
            })
    }

    deleteMail = (ev, id) => {
        ev.preventDefault();
        ev.stopPropagation();
        mailService.deleteMail(id)
            .then(mails => {
                this.setState({ mails });
                this.props.history.goBack();
            })
    }


    render() {
        if (this.state.mail === null) return <div>on load..</div>
        const { id, sentFromUser, sentAt, subject, body } = this.state.mail
        return (
            (this.state.mail !== null) ? (
                <div>
                    <section className="main-details">
                        <div>
                            <div className="sent-from" style={{ backgroundColor: "yellow" }}>{sentFromUser.charAt(0)}</div>
                            <div className="sent-at">{sentAt}</div>
                            <img src="../../assets/img/trash.png" onClick={(event) => this.deleteMail(event, id)} />
                        </div>
                        <div className="close subject">{subject}</div>
                        <div>
                            <div className="body">{body}</div>
                            <Link to={`/mail/${id}/reply`} className="edit">Reply</Link>
                        </div>
                        <Switch>
                            <Route component={MailReply} path={`/mail/${id}/reply`} id={this.state.currPageId} />
                        </Switch>
                    </section>
                </div>) : ''
        )
    }
}

