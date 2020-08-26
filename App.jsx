const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { MailApp } from './pages/mail.jsx';
import { NoteApp } from './pages/note.jsx';
import { MailDetails} from './pages/mail-details.jsx'

import { Home } from './pages/Home.jsx';
import { Notification } from './cmps/Notifications.jsx'

import { NavBar } from './cmps/AppHeader.jsx';


export class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <header>
                        <NavBar />
                    </header>
                    <main className="page">
                        <Switch>
                            <Route component ={MailDetails} path="/mail/:mailId"/>
                            {/* <Route component={BookDetails} path="/book/:bookId" /> */}
                            <Route component={MailApp} path="/mail" />
                            <Route component={NoteApp} path="/note" />
                            <Route component={Home} path="/" />
                        </Switch>
                    </main>
                    <Notification />
                </div>
            </Router>
        )
    }
}

