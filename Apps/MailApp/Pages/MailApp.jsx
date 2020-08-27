const { Link, Switch, Route } = ReactRouterDOM

import { MailList } from './MailList.jsx'
import { MailDetails } from './Mail-details.jsx'
import { OpenMail } from '../Cmps/OpenMail.jsx';
import { MailAdd } from './MailAdd.jsx'
import  {MailDraft } from './MailDraft.jsx'
import { MailStarred } from './MailStarred.jsx'
import { MailFilter } from '../Cmps/MailFilter.jsx'
import { mailService } from '../../../services/mail-service.js';

export class MailApp extends React.Component {

    state = {
        isInboxActive: true,
        currPageId: '',
        filterBy:''
    }

    componentDidMount() {
        this.getId;
    }

    getId = (id) => {
        this.setState({ currPageId: id })
    }

    // setFilter = (filterBy) => {
    //     this.props.history.push(`/mail/list?=${filterBy}`)
    //     this.setState({ filterBy })
    // }

    getmailsForDisplay =(filterBy) =>{
        mailService.getmailsForDisplay(filterBy)
        .then(mails=> {
            setState({mails})
        })
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
                {/* <MailFilter location={ this.props.location } onFilter={ this.setFilter } /> */}
                <div className="main-mail-page">
                    <div className="left-nav-bar">
                        <Link to={`/mail/add`} className="compose">+Compose</Link>
                        <Link to={`/mail/list/inbox`} >Inbox</Link>
                        <Link to={`/mail/list/starred`}>Starred</Link>
                        <Link to={`/mail/list/draft`}>Drafts</Link>
                        <OpenMail />
                    </div>
                    <Switch>
                        <Route component = {MailList} from path="/mail/list/:filterBy" getmailsForDisplay={this.getmailsForDisplay}/>
                        <Route component = {MailStarred} path="/mail/starred" getmailsForDisplay={this.getmailsForDisplay}/>
                        <Route component = {MailDraft}  path= "/mail/draft" getmailsForDisplay={this.getmailsForDisplay}/>
                        <Route component = {MailAdd} path="/mail/add"/>
                        <Route component = {MailDetails} path="/mail/:mailId" id={this.state.currPageId}/>
                    </Switch>
                </div>
            </div>
        )
    }
}
