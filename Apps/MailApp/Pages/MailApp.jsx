const { Link, Switch, Route } = ReactRouterDOM

import { MailList } from './MailList.jsx'
import { MailDetails } from './Mail-details.jsx'
import { MailAdd } from './MailAdd.jsx'

export class MailApp extends React.Component {

    state = {
        isInboxActive: true,
        currPageId: '',
        filterBy: '',
        time: ''
    }

    componentDidMount() {
        this.getId;
        this.getTime()
    }

    getId = (id) => {
        this.setState({ currPageId: id })
    }

    getTime = () => {
        var time = new Date();
        var hours = time.getHours();
        var min = time.getMinutes();
        if (hours.length === 1) hours = '0' + hours;
        if (min.length === 1) min = '0' + min;
        time = `⏰ ${hours}:${min}`;
        this.setState({ time });
    }

    render() {
        const isInboxActive = this.state.isInboxActive;
        return (
            <div className = "big-container">
                <div className="main-mail-page flex">
                    <div className="left-nav-bar flex">
                        <Link to={`/mail/add`} className="compose">+Compose</Link>
                        <Link to={`/mail/list/inbox`} >📩Inbox</Link>
                        <Link to={`/mail/list/starred`}>⭐ Starred</Link>
                        <Link to={`/mail/list/draft`}>📄 Drafts</Link>
                    </div>
                    <div className="main-body">
                        <div className="upper-mail-navbar">
                            <span>Choose/sortBy</span>
                            <span className="refresh" onClick={() => window.location.reload()}><i className="fas fa-redo-alt"></i></span>
                            <div>{this.state.time}</div>
                        </div>
                        <Switch>
                            <Route component={MailList} from path="/mail/list/:filterBy" />
                            <Route component={MailAdd} path="/mail/add" />
                            <Route component={MailDetails} path="/mail/:mailId" id={this.state.currPageId} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
