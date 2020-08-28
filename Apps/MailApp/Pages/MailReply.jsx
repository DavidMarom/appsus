import { mailService } from '../../../services/mail-service.js'
export class MailReply extends React.Component {

        state = {
                mail: null,
                mailToAdd: mailService.getEmptyMail(),
                subject: '',
                body: '',
        }

        componentDidMount() {
                console.log(this.props.match.url);
                mailService.getMailFromUrl(this.props.match.url)
                        .then(mail => {
                                this.setState({ mail })
                        })
        }

        addReplyMail = (ev) => {
                ev.preventDefault();
                console.log('Adding Mail');
                mailService.addReply(this.state.mail, this.state.mailToAdd)
                this.setState({ mailToAdd: mailService.getEmptyMail(), mail: mailService.getEmptyMail() })
                this.props.history.goBack();
        }

        moveToDraft = (ev) => {
                console.log(ev);
                ev.preventDefault();
                console.log(this.state.mailToAdd);
                this.state.mailToAdd.name = 'draft';
                mailService.addMail(this.state.mailToAdd)
                this.setState({ mailToAdd: mailService.getEmptyMail() })
                this.props.history.goBack();
        }

        onInputChange = (ev) => {
                ev.preventDefault();
                this.setState(
                        {
                                mailToAdd: { ...this.state.mailToAdd, [ev.target.name]: ev.target.value }
                        }
                )
        }

        render() {
                if (this.state.mail === null) return <div>on load..</div>
                const { id, sentFromUser, sentAt, subject, body } = this.state.mail
                return (
                        (this.state.mail !== null) ? (
                                <div>
                                        <section className="main-Replay">
                                                <div className="flex padding-left">
                                                        <div className="sent-from-user"> {sentFromUser.charAt(0)}</div>
                                                        <div className="user-full-name bold">{sentFromUser}</div>
                                                </div>
                                                <form onSubmit={this.addReplyMail}>
                                                        <div className = "flex flex-end">
                                                        <span onClick={this.addReplyMail}><i className="far fa-paper-plane" /></span>
                                                        <span onClick={this.moveToDraft}><i className="fas fa-times" /></span>
                                                        </div>
                                                        <textarea className="text-area" name="body"
                                                        placeholder="wright your comment here..." value={this.state.mailToAdd.body}
                                                                type="text" onChange={this.onInputChange}></textarea>
                                                </form>
                                        </section>
                                </div>) : ''
                )
        }
}

