

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
        // const mailsFromStorage = Storage.loadFromStorage('mails');
        // (!mailsFromStorage) ? (mailService.query()
        const mails = mailService.query()
            .then(mails => {
                this.setState({ mails })
                Storage.saveToStorage('mails', mails)
            })
        // ) : this.setState({ mails: mailsFromStorage })
    }


    render() {
        const mails = this.state.mails;
        const selectedMail = this.state.selectedMail;
        return (
            <div className="main-mail-container">
                {!selectedMail && <MailList mails={mails} ChangePage={this.props.ChangePage}/>}
            </div>
        )
    }
}
