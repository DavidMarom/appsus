const { Link, Switch, Route } = ReactRouterDOM

import { MailInbox } from './MailInbox.jsx'
import { MailDetails } from './Mail-details.jsx'
import { OpenMail } from '../Cmps/OpenMail.jsx';

export class MailApp extends React.Component {

    state = {
        isInboxActive: true,
        currPageId: ''
    }

    componentDidMount() {
        this.getId;
    }

    getId = (id)=>{
        this.setState({currPageId:id})
    }


    render() {
        const isInboxActive = this.state.isInboxActive;
        console.log(isInboxActive);
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
                        <OpenMail/>
                    </div>
                    <Switch>
                        <Route component={MailInbox} path="/mail/inbox" getId={this.getId}/>
                        <Route component={MailDetails} path="/mail/:mailId" id={this.state.currPageId}/>
                    </Switch>
                </div>
            </div>
        )
    }
}
