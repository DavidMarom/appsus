const { Link, Switch, Route } = ReactRouterDOM

import { MailInbox } from './MailInbox.jsx'
import { MailDetails } from './Mail-details.jsx'

export class MailApp extends React.Component {

    state = {
        isInboxActive: true,
        currPageId: ''
    }

    componentDidMount() {
        this.getId;
    }

    // ChangePage = (ev, id) => {
    //     console.log('id-', id);
    //     this.setState({ isInboxActive: !this.state.isInboxActive, currPageId: id })
    // }

    getId = (id)=>{
        this.setState({currPageId:id})
    }


    render() {
        const isInboxActive = this.state.isInboxActive;
        console.log(isInboxActive);
        return (//switch --> route
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
                    <Switch>
                        <Route component={MailInbox} path="/mail/inbox" getId={this.getId}/>
                        <Route component={MailDetails} path="/mail/:mailId" id={this.state.currPageId}/>
                    </Switch>
                    {/* {(isInboxActive) ? <MailInbox ChangePage={this.ChangePage} /> : <MailDetails ChangePage={this.ChangePage}
                        id={this.state.currPageId} />} */}
                </div>
            </div>
        )
    }
}
