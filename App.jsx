const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { MailApp } from './Apps/MailApp/Pages/MailApp.jsx';
import { NoteApp } from './Apps/NoteApp/Pages/NoteApp.jsx';
import { MailDetails} from './Apps/MailApp/Pages/Mail-details.jsx'

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

