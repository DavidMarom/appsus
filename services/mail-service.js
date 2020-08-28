import { MainService } from './main-service.js'
import { Storage } from './storage-service.js'

export const mailService = {
    // saveMail,
    getMails,
    getEmptyMail,
    query,
    getMailById,
    addMail,
    togglePages,
    makeRandomColor,
    findMailIndex,
    deleteMail,
    markMailAsStar,
    changeToRead,
    getMailsForDisplay,
    getMailFromUrl,
    addReply
}

var mails = [
    { id: MainService.makeId(), name: 'inbox', sentFromUser: 'Yoav', userBgc: '#' + makeRandomColor(), subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: getTime(), isStarred: false, replies :[] },
    { id: MainService.makeId(), name: 'inbox', sentFromUser: 'Ziv', userBgc: '#' + makeRandomColor(), subject: 'Read', body: 'You should read this', isRead: false, sentAt: getTime(), isStarred: false,replies :[] },
    { id: MainService.makeId(), name: 'inbox', sentFromUser: 'Liel', userBgc: '#' + makeRandomColor(), subject: 'Wassap?', body: 'shalom :)', isRead: false, sentAt: getTime(), isStarred: false,replies :[] },
    { id: MainService.makeId(), name: 'inbox', sentFromUser: 'Maya', userBgc: '#' + makeRandomColor(), subject: 'user account', body: 'this mail was sent to previous account in order to continue send a massage back', isRead: false, sentAt: getTime(), isStarred: false,replies :[] },
    { id: MainService.makeId(), name: 'inbox', sentFromUser: 'Shay', userBgc: '#' + makeRandomColor(), subject: 'Bituach Leumi', body: 'hi Chen, you have unread massages. please enter your private zone in order to read', isRead: false, sentAt: getTime(), isStarred: false,replies :[] },
    { id: MainService.makeId(), name: 'inbox', sentFromUser: 'Yuval', userBgc: '#' + makeRandomColor(), subject: 'Hacnest', body: 'election soon? ', isRead: false, sentAt: getTime(), isStarred: false,replies :[] },
    { id: MainService.makeId(), name: 'inbox', sentFromUser: 'Lior', userBgc: '#' + makeRandomColor(), subject: 'Wassap?', body: 'Pick up2!', isRead: false, sentAt: getTime(), isStarred: false,replies :[] },
    { id: MainService.makeId(), name: 'inbox', sentFromUser: 'IMBGIN', userBgc: '#' + makeRandomColor(), subject: 'Hello!!!', body: 'Hello, thank you for becoming part of the IMGBIN community.IMGBIN contains over 12 million free to download transparent PNG resources. With your current account you can download 2 resources per day. If you need to download more than 2 images per day we recommend upgrading to a PREMIUM account', isRead: false, sentAt: getTime(), isStarred: false,replies :[] },
    { id: MainService.makeId(), name: 'inbox', sentFromUser: 'Rotem', userBgc: '#' + makeRandomColor(), subject: 'Wassap?', body: 'Pick up4!', isRead: false, sentAt: getTime(), isStarred: false ,replies :[]},
]

function getMails() {
    const mailsFromStorage = Storage.loadFromStorage('mails');
    if (!mailsFromStorage || mailsFromStorage.length === 0) {
        query()
            .then(mails => {
                Storage.saveToStorage('mails', mails)
                return mails;
            })
    } else return mailsFromStorage
}

function getEmptyMail() {
    return { id: MainService.makeId(), name:'inbox', sentFromUser: '', userBgc: '#' + makeRandomColor(), subject: '', body: '', isRead: false, sentAt: getTime(), isStarred: false }
}

function query() {// returne relelvant mails
    return Promise.resolve(mails)
}

function getTime() {
    var date = new Date();
    var timeInHours = date.getHours()
    return timeInHours;
}

function getMailById(mailId) {
    const mails = getMails()
    const mail = mails.find(mail => mail.id === mailId)
    return Promise.resolve(mail)
}

function addMail(mail) {
    let mails = getMails()
    const mailToAdd = { ...mail }
    mails = [mailToAdd, ...mails]
    Storage.saveToStorage('mails', mails)
    window.theMails = mails
}

function addReply(mail, mailToAdd){
    let mails = getMails();
    mail.replies.push(mailToAdd);
    const currIdx = findMailIndex(mail);
    mails.splice(currIdx, 1, mail);
    Storage.saveToStorage('mails', mails);
    window.theMails = mails
}


function togglePages(bool) {
    return !bool
}

function makeRandomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

function findMailIndex(mail) {
    const mails = getMails();
    return mails.findIndex(currMail => currMail.id === mail.id)
}

function deleteMail(id) {
    let mails = getMails();
    mails = mails.filter(mail => mail.id !== id)
    Storage.saveToStorage('mails', mails)
    return Promise.resolve(mails)
}

function changeToRead(mail) {
    mail.isRead = !mail.isRead;
    let mails = getMails();
    let currIdx = findMailIndex(mail);
    mails.splice(currIdx, 1, mail);
    Storage.saveToStorage('mails', mails)
    return mails;

}


function markMailAsStar(mail) {
    mail.isStarred = !mail.isStarred;
    mail.name += ' , starred';
    const mails = getMails();
    const currIdx = findMailIndex(mail);
    mails.splice(currIdx, 1, mail);
    Storage.saveToStorage('mails', mails)
    return Promise.resolve(mails);
}

function getMailsForDisplay(filterBy, filterSpecificMails) {
    console.log('fB-', filterBy);
    console.log('specificmails-', filterSpecificMails);
    let mails = getMails();
    mails = mails.filter(mail => mail.name.toLowerCase().includes(filterBy.toLowerCase()))
    if (filterSpecificMails) {
        mails = mails.filter(mail => {
            return (mail.body.includes(filterSpecificMails) || mail.subject.includes(filterSpecificMails) ||
                mail.sentFromUser.includes(filterSpecificMails))
        });
    }
    return Promise.resolve(mails);
}

function getMailFromUrl(str){
    const id = str.substring(6,11);
    const mail = getMailById(id)
    return Promise.resolve(mail);
}

