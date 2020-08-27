

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
        const mailsFromStorage = Storage.loadFromStorage('mails');
        (!mailsFromStorage) ? (
            mailService.query()
                .then(mails => {
                    this.setState({ mails })
                    Storage.saveToStorage('mails', mails)
                })
        ) : this.setState({ mails: mailsFromStorage })
    }

    changStateOfisRead=(mail)=>{
        console.log(mail);
        var currMailIdx = this.state.mails.findIndex(mailArr=> mailArr.id === mail.id)  
        this.setState({ mails: this.state.mails[currMailIdx].isRead= true })
        Storage.saveToStorage('mails', this.state.mails)
    }


    render() {
        const mails = this.state.mails;
        const selectedMail = this.state.selectedMail;
        return (
            <div className="main-mail-container">
                {!selectedMail && <MailList mails={mails} changStateOfisRead={this.changStateOfisRead}/>}
            </div>
        )
    }
}
