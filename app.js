const WebTorrent = require('webtorrent')

const client = new WebTorrent()

//const magnetURI = "magnet:?xt=urn:btih:544ea0bd1cdb80794ccf862a1270469ab5323f71&dn=Automate the Boring Stuff with Python - Practical Programming for Total Beginners - 1st Edition (2015) (Pdf, Epub & Mobi) Gooner" 
const magnetURI = process.env.MAGNET_URI

client.add(magnetURI, { path: '/downloads' }, function (torrent) {
    console.log("torrent download started " + torrent.infoHash)

    torrent.on('done', function () {
        console.log('torrent download finished')
        //process.exit()
    })
})
