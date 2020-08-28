const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { MailApp } from './Apps/MailApp/Pages/MailApp.jsx';
import { NoteApp } from './Apps/NoteApp/Pages/NoteApp.jsx';

import { BookApp } from './Apps/BookApp/Pages/BookApp.jsx';
import { BookAdd } from './Apps/BookApp/Pages/BookAdd.jsx';
import { BookDetails } from "./Apps/BookApp/Pages/BookDetails.jsx";

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
                    <main>
                        <Switch>       
                            <Route component={MailApp} path="/mail" />

                            <Route component={BookAdd} path="/book/add" />
                            <Route component={BookDetails} path="/book/:bookId" />
                            <Route component={BookApp} path="/book" />

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

