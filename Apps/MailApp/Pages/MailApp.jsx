const { Link, Switch, Route } = ReactRouterDOM

import { MailList } from './MailList.jsx'
import { MailDetails } from './Mail-details.jsx'
import { OpenMail } from '../Cmps/OpenMail.jsx';
import { MailAdd } from './MailAdd.jsx'
import { MailFilter } from '../Cmps/MailFilter.jsx'

export class MailApp extends React.Component {

    state = {
        isInboxActive: true,
        currPageId: '',
        filterBy: ''
    }

    componentDidMount() {
        this.getId;
    }

    getId = (id) => {
        this.setState({ currPageId: id })
    }

    setFilter = (filterSpecificMails) => {
        console.log(filterSpecificMails);
        this.props.history.push(`/mail/list/inbox?=${filterSpecificMails}`)
        this.setState({ filterSpecificMails })
        // mailService.getMailsForDisplay(this.state.filterBy, filterSpecificMails)
        // .then(mails=> this.setState({mails}))
    }


    render() {
        const isInboxActive = this.state.isInboxActive;
        console.log(isInboxActive);
        return (
            <div>
                <div className="upper-mail-navbar">
                    <button>Choose/sortBy</button>
                    <button onClick={() => window.location.reload()}>Refresh-page</button>
                    <MailFilter location={this.props.location} onFilter={this.setFilter} />
                    <div>time</div>
                </div>
                <div className="main-mail-page flex">
                    <div className="left-nav-bar flex">
                        <Link to={`/mail/add`} className="compose">+Compose</Link>
                        <Link to={`/mail/list/inbox`} >📩Inbox</Link>
                        <Link to={`/mail/list/starred`}>⭐ Starred</Link>
                        <Link to={`/mail/list/draft`}>📄 Drafts</Link>
                        <OpenMail />
                    </div>
                    <Switch>
                        <Route component={MailList} from path="/mail/list/:filterBy" />
                        <Route component={MailAdd} path="/mail/add" />
                        <Route component={MailDetails} path="/mail/:mailId" id={this.state.currPageId} />
                    </Switch>
                </div>
            </div>
        )
    }
}
