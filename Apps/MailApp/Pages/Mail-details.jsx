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
        const { id, sentFromUser, sentAt, subject, body, replies } = this.state.mail
        return (
            (this.state.mail !== null) ? (
                <div>
                    <section className="main-details flex">
                        <div className="small-icons flex padding-left">
                            <div className="sent-at flex">{sentAt}</div>
                            <span className="trash black" onClick={(event) => this.deleteMail(event, id)}>🗑</span>
                        </div>
                        <div className="sent-from-details flex">
                            <div className="bold subject-details">{subject}</div>
                            <div className="flex">
                                <div className="sent-from-user"> {sentFromUser.charAt(0)}</div>
                                <div className="user-full-name bold">{sentFromUser}</div>
                            </div>
                        </div>
                        <div className="flex space-between">
                            <div className="body-details">{body}</div>
                            <Link to={`/mail/${id}/reply`} className="edit"><i className="fas fa-pencil-alt"></i></Link>
                        </div>
                        {replies.map((mail) => {
                            return (<div className="replies" key={mail.id}>
                                <div className="sent-from-details flex">
                                    <div className="sent-at flex">{sentAt}</div>
                                    <div className="flex">
                                        <div className="sent-from-user"> {sentFromUser.charAt(0)}</div>
                                        <div className="user-full-name bold">{sentFromUser}</div>
                                    </div>
                                </div>
                                <div className="flex space-between">
                                    <div className="body-details">{body}</div>
                                </div>
                                <Link to={`/mail/${id}/reply`} className="edit"><i className="fas fa-pencil-alt"></i></Link>
                            </div>
                            )
                        })}
                        <Switch>
                            <Route component={MailReply} path={`/mail/${id}/reply`} id={this.state.currPageId} />
                        </Switch>
                    </section>
                </div>) : ''
        )
    }
}

