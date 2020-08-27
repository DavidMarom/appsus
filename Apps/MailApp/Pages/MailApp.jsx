const { Link, Switch, Route } = ReactRouterDOM

import { MailInbox } from './MailInbox.jsx'
import { MailDetails } from './Mail-details.jsx'
import { OpenMail } from '../Cmps/OpenMail.jsx';
import { MailAdd } from './MailAdd.jsx'
import {MailDraft} from './MailDraft.jsx'
import {MailStarred} from './MailStarred.jsx'

export class MailApp extends React.Component {

    state = {
        isInboxActive: true,
        currPageId: ''
    }

    componentDidMount() {
        this.getId;
    }

    getId = (id) => {
        this.setState({ currPageId: id })
    }


    render() {
        const isInboxActive = this.state.isInboxActive;
        console.log(isInboxActive);
        return (
            <div>
                <div className="upper-mail-navbar">
                    <button>Choose/sortBy</button>
                    <button onClick={() => window.location.reload()}>Refresh-page</button>
                    <div>time</div>
                </div>
                <div className="main-mail-page">
                    <div className="left-nav-bar">
                        <Link to={`/mail/add`} className="compose">+Compose</Link>
                        <Link to={'/mail/inbox'}>Inbox</Link>
                        <Link to={'/mail/starred'}>Starred</Link>
                        <Link to={'/mail/draft'}>Drafts</Link>
                        <OpenMail />
                    </div>
                    <Switch>
                        <Route component = {MailStarred} path="/mail/starred"/>
                        <Route component = {MailDraft}  path= "/mail/draft" />
                        <Route component={MailAdd} path="/mail/add" />
                        <Route component={MailInbox} path="/mail/inbox" getId={this.getId} />
                        <Route component={MailDetails} path="/mail/:mailId" id={this.state.currPageId} />
                    </Switch>
                </div>
            </div>
        )
    }
}
