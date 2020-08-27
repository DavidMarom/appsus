
import { MailPreview } from "./MailPreview.jsx";


export class MailList extends React.Component {
    render() {
        console.log(this.props.mails);
        return (
            <ul className="mail-card" >
                {this.props.mails.map((mail) => {
                    return (<MailPreview key={mail.id} mail={mail} 
                        getId={this.props.getId} />)
                })}
            </ul>
        )
    }
}