export function MailPreview({ mail }) {
    const { subject, body, isRead, sentAt } = mail;
    return (
        <section>
            <div className="subject">{subject}</div>
            <div className="body">{body}</div>
            <div className="sentAt">{sentAt}</div>
        </section>
    )
}