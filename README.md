# TorrentWithSpeedify [VPN does not work yet]

A simple docker container to download your favorite torrents via Speedify VPN without having to install VPN and BitTorrent client directly to your computer.

## Usage

Download a single torrent with magnet uri.

```bash
mkdir downloads #Here the downloaded files will appear.

docker run -it -v $PWD/downloads:/downloads -e MAGNET_URI="magnet:?xt=urn:btih:544ea0bd1cdb80794ccf862a1270469ab5323f71&dn=Automate the Boring Stuff with Python - Practical Programming for Total Beginners - 1st Edition (2015) (Pdf, Epub & Mobi) Gooner" torrentwithspeedify
```

## Development

Clone this repository and go into it. Make your edits and build the image. 

```bash
git clone THISREPO
cd TorrentWithSpeedify
docker build . -t torrentwithspeedify
```

Create downloads folder and run the image.

```bash
mkdir downloads #Here the downloaded files will appear.

docker run -it -v $PWD/downloads:/downloads -e MAGNET_URI="magnet:?xt=urn:btih:544ea0bd1cdb80794ccf862a1270469ab5323f71&dn=Automate the Boring Stuff with Python - Practical Programming for Total Beginners - 1st Edition (2015) (Pdf, Epub & Mobi) Gooner" torrentwithspeedify
```

## TODO

- [ ] Multiple download modes
  - [x] Download single torrent
  - [ ] Download multiple torrents
  - [ ] Watch directory for torrent files
- [ ] REST API
- [ ] Create web interface using REST API
