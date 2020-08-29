const { Link } = ReactRouterDOM

import { MainService } from '../../../services/main-service.js'
import { mailService } from '../../../services/mail-service.js'


export class MailAdd extends React.Component {

    state = {
        mailToAdd: mailService.getEmptyMail(),
    }

    addMail = (ev) => {
        ev.preventDefault();
        console.log('Adding Mail');
        mailService.addMail(this.state.mailToAdd)
        this.setState({ mailToAdd: mailService.getEmptyMail() })
        this.props.history.goBack();
    }

    moveToDraft = (ev) => {
        ev.preventDefault();
        this.state.mailToAdd.name = 'draft';
        this.state.mailToAdd.sentFromUser = this.state.userName;
        mailService.addMail(this.state.mailToAdd)
        this.setState({ mailToAdd: mailService.getEmptyMail() })
        this.props.history.goBack();
    }


    onInputChange = (ev) => {
        this.setState(
            {
                mailToAdd: { ...this.state.mailToAdd, [ev.target.name]: ev.target.value }
            }
        )
    }


    render() {
        return (
            <form className="add-mail-container flex d-collumn space-between" onSubmit={this.addMail}>
                <div className=" email-add flex ">
                    <input className="w3-input " name="email" value={this.state.mailToAdd.email}
                        placeholder="EmailAdrress" type="text"
                        onChange={this.onInputChange}
                    />
                    <div className="add-icons">
                        <span onClick={this.addMail}><i className="far fa-paper-plane"></i></span>
                        <span onClick={this.moveToDraft}><i className="fas fa-times"></i></span>
                    </div>
                </div>
                <input className="w3-input" name="subject" value={this.state.mailToAdd.subjct}
                    placeholder="Subject" type="text"
                    onChange={this.onInputChange}
                />
                <textarea className="w3-input" name="body" value={this.state.mailToAdd.body}
                    type="text" placeholder="wright your comment here..." onChange={this.onInputChange}></textarea>
            </form >
        )
    }
}