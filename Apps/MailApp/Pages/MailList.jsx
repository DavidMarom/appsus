

import { mailService } from "../../../services/mail-service.js";
import { MailPreview } from "../Cmps/MailPreview.jsx";


export class MailList extends React.Component {
    state = {
        filterBy: '',
        filterSpecificMails: '',
        mailToAdd: mailService.getEmptyMail(),
        mails: []
    }

    componentDidMount() {
        const filterBy = this.props.match.params.filterBy;
        const filterSpecificMails = this.props.match.params.filterSpecificMails;
        this.setState({ filterBy, filterSpecificMails });
        this.getMailsForDisplay(filterBy, this.state.filterSpecificMails);
    }

    componentDidUpdate(prevProps) {
        const prev = prevProps.match.params.filterBy;
        const now = this.props.match.params.filterBy;
        if (now !== prev) {
            this.setState({ filterBy: now });
            this.getMailsForDisplay(now, this.state.filterSpecificMails);
        }
    }


    getMailsForDisplay = (filterBy = 'inbox') => {
        mailService.getMailsForDisplay(filterBy)
            .then(mails => {
                this.setState({ mails })
            })
    }

    changStateOfisRead = (mail) => {
        const newMailsArr = mailService.changeToRead(mail)
        this.setState({ mails: newMailsArr })
    }

    changeToImportantMail = (ev, mail) => {
        ev.preventDefault();
        ev.stopPropagation();
        mailService.markMailAsStar(mail)
            .then(mails => {
                this.setState({ mails })
            })
    }

    deleteMail = (ev, id) => {
        ev.preventDefault();
        ev.stopPropagation();
        mailService.deleteMail(id)
            .then(mails => {
                this.setState({ mails });
            })
    }


    render() {
        const { mails } = this.state;
        if (!mails || !mails.length) return <div>Your mail box is empty</div>
        return (
            <div className="main-mail-container">
                <ul className="mail-card" >
                    {this.state.mails.map((mail) => {
                        return (<MailPreview key={mail.id} mail={mail}
                            changStateOfisRead={this.changStateOfisRead}
                            changeToImportantMail={this.changeToImportantMail}
                            deleteMail={this.deleteMail} />)
                    })}
                </ul>
            </div>
        )
    }
}