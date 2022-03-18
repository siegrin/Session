/*

GK KASI CREDIT YT SIEGRIN, GK USAH RE UPLOAD
SUSAH" NGE FIX, LU CUMA NUMPANG NAMA DOANG
YANG BELUM PAHAM CAR RUN DI HEROKU TONTON AJA VIDEO SEBELUMNYA
JASA RUN HEROKU BISA PC wa.me/6289530298948 BIAR BOT NYA GAK TERLALU DELAY
		
*/   
const {
WAConnection: _WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ChatModification,
WAMessageProto,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
relayWAMessage,
mentionedJid,
processTime,
Browsers } = require("@adiwajshing/baileys")
const simple = require('./lib/bot/simple.js')
const { spawn, exec, execSync } = require("child_process")
const translate = require('@vitalets/google-translate-api')
const WAConnection = simple.WAConnection(_WAConnection)
const toHur = require('@develoka/angka-terbilang-js')
const twitterGetUrl = require("twitter-url-direct")
const imageToBase64 = require('image-to-base64')
const ID3Writer = require('browser-id3-writer');	
const brainly = require('brainly-scraper')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const { EmojiAPI } = require("emoji-api")
const Fb = require('fb-video-downloader');
const speed = require('performance-now')
const imgbb = require('imgbb-uploader')	
const ffmpeg = require('fluent-ffmpeg')
const FormData = require('form-data')
const googleImage = require('g-i-s')
const fetch = require('node-fetch');
const ig = require('insta-fetcher')
const vapor = require('vapor-text')
const cheerio = require('cheerio')
const request = require('request');
const qrcodes = require('qrcode');
const yts = require( 'yt-search')
const CFonts  = require('cfonts')
const Math_js = require('mathjs')
const ggs = require('google-it')
const fsx = require("fs-extra")
const axios = require("axios")
const ms = require('parse-ms')
const gis = require('g-i-s')
const emoji = new EmojiAPI()
const got = require("got");
const toMs = require('ms')
const fs = require("fs")

//===============================================================================//
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/bot/functions')
//===============================================================================//


const scommand = []
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const { color, bgcolor } = require('./lib/bot/color')

//===============================================================================//	
multi = true

//===============================================================================//

owner = setting.owner
owner2 = setting.owner2
owner3 = setting.owner3
botNumber = setting.owner3
developer = setting.developer
dev = `6289530298948@s.whatsapp.net` // jangan diganti
ow = `${owner}@s.whatsapp.net`// jangan diganti
ownername = setting.ownername
ownername2 = setting.ownername2
ownername3 = setting.ownername3
numbernye = "0"

//===============================================================================//

github = setting.github 
mygmail = setting.mygmail 
myyoutube = setting.myyoutube
mytiktok = setting.mytiktok
mytwitter = setting.mytwitter
mybio = setting.mybio

//===============================================================================//

fakereply = setting.fakereply
supportme = setting.supportme
prefix = setting.prefix 
namo = setting.namo
ator = setting.ator
NamaBot = setting.NamaBot
pref = '#' 

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}

const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}
//=================================================//
module.exports = client = async (client, mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3)
global.blocked
//m = simple.smsg(client, mek)
//let { mentionedd } = m
const content = JSON.stringify(mek.message)
const m = simple.smsg(client, mek)
const antibot = m.isBaileys
const from = mek.key.remoteJid
const { quotedMek, isQuotedMek, mentioned} = mek
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, buttonsMessage } = MessageType
const type = Object.keys(mek.message)[0]
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
// var prefix = ''
var prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+,;]/gi) : '!'  	
} else {
prefix = pref
}
const body = (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const arg = chats.slice(command.length + 2, chats.length)
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const isbuttonCmd = body.selectedButtonId
const islistCmd = body.selectedRowIdId
const isStMsg = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
const q = args.join(' ')
const botNumber = client.user.jid
const botNumberss = client.user.jid + '@c.us'
const isGroup = from.endsWith('@g.us')
const sender = mek.key.fromMe ? client.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
const WMthumb = fs.readFileSync(`src/siegrin.jpeg`)

//=================================================//

const time = moment.tz('Asia/Jakarta').format('YY/MM/DD')
const wib = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
if(wib < "23:59:00"){
var hahh = '🌃 Selamat Malam'
}
if(wib < "19:00:00"){
var hahh = '🌇 Selamat Petang'
}
if(wib < "18:00:00"){
var hahh = '🌁️ Selamat Sore'
}
if(wib < "15:00:00"){
var hahh = '🌅 Selamat Siang'
}
if(wib < "11:00:00"){
var hahh = '🌄 Selamat Pagi'
}
if(wib < "05:00:00"){
var hahh = '🌃 Selamat Malam'
}
switch (command) { 	
case 'testiw':
client.sendMessage(from, "hai", text, {quoted:mek, contextInfo:{sendEphemeral: true, "externalAdReply":{"title": `${hahh}`,"body": `Runtime ${kyun(process.uptime())}`,"previewType": "PHOTO","thumbnailUrl": ` `,"thumbnail": WMthumb,"sourceUrl": ` `}}})
break
				
default:

if (budy.startsWith('x')){
try {
return client.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('>')){
try {
return client.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
		
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'aqua'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
             if (!e.includes("Cannot read property 'key' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('|ERR|', 'red'), color(e, 'cyan'))
}}}}}}}
}
