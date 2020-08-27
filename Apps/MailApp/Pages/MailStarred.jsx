import { MailPreview } from '../Cmps/MailPreview.jsx'
import { mailService } from '../../../services/mail-service.js'


export class MailStarred extends React.Component {

    state ={
        mailsWithStars: [],
        mails: mailService.getMails()
    }

    componentDidMount(){
        this.getMailsWithStar()
    }

    getMailsWithStar(){
        let starredMails = [];
        this.state.mails.forEach(mail => {
            if(mail.isStarred === true) starredMails.push(mail)
        })
       this.setState({mailsWithStars:starredMails})
    }

    render(){
            return (
                <ul className="mail-card" >
                    {this.state.mailsWithStars.map((mail) => {
                        return (<MailPreview key={mail.id} mail={mail} 
                            changStateOfisRead={this.props.changStateOfisRead} 
                            changeToImportantMail={this.props.changeToImportantMail}/>)
                    })}
                </ul>
        )
    }
}