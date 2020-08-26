import { MainService } from './main-service.js'

export const mailService = {
    // getMails,
    // saveMail,
    getEmptyMail,
    query
}

var mails = [
    { id: MainService.makeId(), subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: getTime() },
    { id: MainService.makeId(), subject: 'Read', body: 'You should read this', isRead: false, sentAt: getTime() },
    { id: MainService.makeId(), subject: 'Wassap?', body: 'shalom :)', isRead: false, sentAt: getTime() },
    { id: MainService.makeId(), subject: 'user account', body: 'this mail was sent to previous account in order to continue send a massage back', isRead: false, sentAt: getTime() },
    { id: MainService.makeId(), subject: 'Bituach Leumi', body: 'hi Chen, you have unread massages. please enter your private zone in order to read', isRead: false, sentAt: getTime() },
    { id: MainService.makeId(), subject: 'Hacnest', body: 'election soon? ', isRead: false, sentAt: getTime() },
    { id: MainService.makeId(), subject: 'Wassap?', body: 'Pick up2!', isRead: false, sentAt: getTime() },
    { id: MainService.makeId(), subject: 'Wassap?', body: 'Pick up3!', isRead: false, sentAt: getTime() },
    { id: MainService.makeId(), subject: 'Wassap?', body: 'Pick up4!', isRead: false, sentAt: getTime() },
]

function getEmptyMail() {
    return { subject: '', body: '', isRead: false, sentAt: 0 }
}

function query() {
    return Promise.resolve(mails)
}

function getTime(){
    var date = new Date();
    var timeInHours = date.getHours()
    return timeInHours;
}