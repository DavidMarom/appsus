import { MainService } from './main-service.js'

export const mailService = {
    // getMails,
    // saveMail,
    getEmptyMail,
    query,
    getMailById,
    togglePages,
    makeRandomColor
}

var mails = [
    { id: MainService.makeId(), sentFromUser:'Yoav', userBgc: '#'+ makeRandomColor(), subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: getTime() },
    { id: MainService.makeId(), sentFromUser:'Ziv', userBgc: makeRandomColor(), subject: 'Read', body: 'You should read this', isRead: false, sentAt: getTime() },
    { id: MainService.makeId(), sentFromUser:'Liel', userBgc: makeRandomColor(), subject: 'Wassap?', body: 'shalom :)', isRead: false, sentAt: getTime() },
    { id: MainService.makeId(), sentFromUser:'Maya', userBgc: makeRandomColor(), subject: 'user account', body: 'this mail was sent to previous account in order to continue send a massage back', isRead: false, sentAt: getTime() },
    { id: MainService.makeId(), sentFromUser:'Shay', userBgc: makeRandomColor(),subject: 'Bituach Leumi', body: 'hi Chen, you have unread massages. please enter your private zone in order to read', isRead: false, sentAt: getTime() },
    { id: MainService.makeId(), sentFromUser:'Yuval', userBgc: makeRandomColor(), subject: 'Hacnest', body: 'election soon? ', isRead: false, sentAt: getTime() },
    { id: MainService.makeId(), sentFromUser:'Lior', userBgc: makeRandomColor(), subject: 'Wassap?', body: 'Pick up2!', isRead: false, sentAt: getTime() },
    { id: MainService.makeId(), sentFromUser:'Ilia', userBgc: makeRandomColor(), subject: 'Wassap?', body: 'Pick up3!', isRead: false, sentAt: getTime() },
    { id: MainService.makeId(), sentFromUser:'Rotem', userBgc: makeRandomColor(), subject: 'Wassap?', body: 'Pick up4!', isRead: false, sentAt: getTime() },
]

function getEmptyMail() {
    return { subject: '', body: '', isRead: false, sentAt: 0 }
}

function query() {
    return Promise.resolve(mails)
}

function getTime() {
    var date = new Date();
    var timeInHours = date.getHours()
    return timeInHours;
}

function getMailById(mailId) {
    console.log('mailId-', mailId);
    console.log(mails);
    const mail = mails.find(mail => mail.id === mailId)
    return Promise.resolve(mail)
}

function togglePages(bool){
    return !bool
}

function makeRandomColor(){
    return  Math.floor(Math.random()*16777215).toString(16);
}