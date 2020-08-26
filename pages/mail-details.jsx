const {withRouter} = ReactRouterDOM
const { Link } = ReactRouterDOM

import {MailPreview} from '../cmps/mail/MailPreview.jsx'
import {mailService} from   '../services/main-service.js'
import {Storage} from '../services/storage-service.js'


export class MailDetails extends React.Component{
    
    state = {
        mail: null,
        subject:'',
        body:'',
        sentAt:'',
        isRead: true
    }


    componentDidMount() {
        console.log(this.props.match)
        const mailId = this.props.match.params.mailId;
        MainService.getById(mailId)
        .then(mail =>{ 
            this.setState({ mail })
        })
    }


    render() {
        return (
            <div>
            <section className="single-mail-component">
                <div className={(this.state.isRead)? "open":"close"}>{this.state.subject}</div>
                <div className="body">{this.state.body}</div>
                <div className="sentAt">{this.state.sentAt}</div>
            </section>
            <hr />
        </div>
        )
    }
}

