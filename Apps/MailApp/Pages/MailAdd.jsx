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
        this.setState({mailToAdd: mailService.getEmptyMail()})
        this.props.history.goBack();
    }

    moveToDraft=(ev) =>{
        console.log(ev);
        ev.preventDefault();
        console.log(this.state.mailToAdd);
        this.state.mailToAdd.name = 'draft';
        mailService.addMail(this.state.mailToAdd)
        this.setState({mailToAdd: mailService.getEmptyMail()})
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
            <section className="add-mail-container">
                <form onSubmit={this.addMail}>
                    <input name="email" value={this.state.mailToAdd.email}
                        placeholder="EmailAdrress" type="text"
                        onChange={this.onInputChange}
                    />
                    <input name="subject" value={this.state.mailToAdd.subjct}
                        placeholder="Subject" type="text"
                        onChange={this.onInputChange}
                    />
                    <textarea name="body" value={this.state.mailToAdd.body}
                        type="text" onChange={this.onInputChange}></textarea>
                    <span onClick={this.addMail}><i class="far fa-paper-plane"></i></span>
                    <span onClick={this.moveToDraft}><i class="fas fa-times"></i></span>
                </form>
            </section>
        )
    }
}