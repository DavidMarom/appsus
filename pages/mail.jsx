const { NavLink, withRouter } = ReactRouterDOM

// import { Review } from "../cmps/Review.jsx";
import { MainService } from "../services/main-service.js";
import { mailService } from "../services/mail-service.js";
import { Storage } from '../services/storage-service.js'


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

        return (
            <div>
            <div className="upper-mail-navbar">
                <button>Choose/sortBy</button>
                <button>Refresh-page</button>
                <div>time</div>
            </div>
            <div className="main-mail-page">
                <div className="main-mail-container">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum doloribus, necessitatibus, optio laudantium voluptatum voluptas quo quisquam ab dolore dicta accusantium officiis totam esse, delectus iusto repellendus molestias nam minus!
                {/* {!selectedBook && <MailList books={books} />} */}
                </div>
                <div className="left-nav-bar">
                    <div className="compose">+Compose</div>
                    <div>Inbox</div>
                    <div>Starred</div>
                    <div>Drafts</div>
                    <div>opened</div>
                </div>
            </div>
            </div>
        </div>
        )
    }
}
