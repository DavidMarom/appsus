const { NavLink, withRouter } = ReactRouterDOM

// import { Review } from "../cmps/Review.jsx";
import { MainService } from "../services/main-service.js";
import { mailService } from "../services/mail-service.js";
import { Storage } from '../services/storage-service.js';
import { MailList } from '../cmps/mail/MailList.jsx'


export class MailApp extends React.Component {
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
        (!mailsFromStorage) ? (mailService.query()
            .then(mails => {
                this.setState({ mails })
                Storage.saveToStorage('mails', mails)
            })
        ) : this.setState({ mails: mailsFromStorage })
    }

  

    render() {
        const mails = this.state.mails;
        const selectedMail = this.state.selectedMail;
        return (
            <div>
                <div className="upper-mail-navbar">
                    <button>Choose/sortBy</button>
                    <button>Refresh-page</button>
                    <div>time</div>
                </div>
                <div className="main-mail-page">
                    <div className="left-nav-bar">
                        <div className="compose">+Compose</div>
                        <div>Inbox</div>
                        <div>Starred</div>
                        <div>Drafts</div>
                        <div>opened</div>
                    </div>
                    <div className="main-mail-container">
                        {!selectedMail && <MailList mails={mails} />}
                    </div>
                </div>
            </div>
        )
    }
}
