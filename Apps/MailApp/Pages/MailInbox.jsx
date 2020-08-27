

import { mailService } from "../../../services/mail-service.js";
import { Storage } from '../../../services/storage-service.js';
import { MailList } from '../Cmps/MailList.jsx';


export class MailInbox extends React.Component {
    state = {
        mailToAdd: mailService.getEmptyMail(),
        mails: [],
        selectedMail: null
    }

    componentDidMount() {
        this.loadMails();
    }

    loadMails() {
        const mails = mailService.getMails()
        this.setState({ mails: mails })
    }

    changStateOfisRead = (mail) => {
        console.log(mail);
        var currMailIdx = mailService.findMailIndex(mail)
        this.setState({ mails: this.state.mails[currMailIdx].isRead = true })
        Storage.saveToStorage('mails', this.state.mails)
    }

    changeToImportantMail = (mail) => {
        console.log(mail);
        var currMailIdx = mailService.findMailIndex(mail)
        this.setState({ mails: this.state.mails[currMailIdx].isStarred = true })
        Storage.saveToStorage('mails', this.state.mails)
    }


    render() {
        const mails = this.state.mails;
        const selectedMail = this.state.selectedMail;
        return (
            <div className="main-mail-container">
                {!selectedMail && <MailList mails={mails}
                    changStateOfisRead={this.changStateOfisRead}
                    changeToImportantMail={this.changeToImportantMail} />}
            </div>
        )
    }
