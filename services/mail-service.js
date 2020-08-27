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
    makeRandomColor
}

var mails = [
    { id: MainService.makeId(), sentFromUser: 'Yoav', userBgc: '#' + makeRandomColor(), subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: getTime() },
    { id: MainService.makeId(), sentFromUser: 'Ziv', userBgc: '#' + makeRandomColor(), subject: 'Read', body: 'You should read this', isRead: false, sentAt: getTime() },
    { id: MainService.makeId(), sentFromUser: 'Liel', userBgc: '#' + makeRandomColor(), subject: 'Wassap?', body: 'shalom :)', isRead: false, sentAt: getTime() },
    { id: MainService.makeId(), sentFromUser: 'Maya', userBgc: '#' + makeRandomColor(), subject: 'user account', body: 'this mail was sent to previous account in order to continue send a massage back', isRead: false, sentAt: getTime() },
    { id: MainService.makeId(), sentFromUser: 'Shay', userBgc: '#' + makeRandomColor(), subject: 'Bituach Leumi', body: 'hi Chen, you have unread massages. please enter your private zone in order to read', isRead: false, sentAt: getTime() },
    { id: MainService.makeId(), sentFromUser: 'Yuval', userBgc: '#' + makeRandomColor(), subject: 'Hacnest', body: 'election soon? ', isRead: false, sentAt: getTime() },
    { id: MainService.makeId(), sentFromUser: 'Lior', userBgc: '#' + makeRandomColor(), subject: 'Wassap?', body: 'Pick up2!', isRead: false, sentAt: getTime() },
    { id: MainService.makeId(), sentFromUser: 'IMBGIN', userBgc: '#' + makeRandomColor(), subject: 'Hello!!!', body: 'Hello, thank you for becoming part of the IMGBIN community.IMGBIN contains over 12 million free to download transparent PNG resources. With your current account you can download 2 resources per day. If you need to download more than 2 images per day we recommend upgrading to a PREMIUM account', isRead: false, sentAt: getTime() },
    { id: MainService.makeId(), sentFromUser: 'Rotem', userBgc: '#' + makeRandomColor(), subject: 'Wassap?', body: 'Pick up4!', isRead: false, sentAt: getTime() },
]

function getMails() {
    const mailsFromStorage = Storage.loadFromStorage('mails');
    if (!mailsFromStorage) {
        query()
            .then(mails => {
                Storage.saveToStorage('mails', mails)
                return mails;
            })
    } else return mailsFromStorage
}

function getEmptyMail() {
    return {id: MainService.makeId(),sentFromUser: '',userBgc: '#' + makeRandomColor(), subject: '', body: '', isRead: false, sentAt: getTime() }
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
    const mails = getMails()
    const mail = mails.find(mail => mail.id === mailId)
    return Promise.resolve(mail)
}

function addMail(mail){
    const mailToAdd = {...mail}
    mails = [mailToAdd, ...mails]
    Storage.saveToStorage('mails', mails)
    window.theMails = mails
}


function togglePages(bool) {
    return !bool
}

function makeRandomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}