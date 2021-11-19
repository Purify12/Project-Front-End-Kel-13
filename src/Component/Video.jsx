import React from 'react';
import { Player } from 'video-react';
import Poster from "../images/Poster.jpeg";


function Video() {
    return (
        <Player
            playsInline
            poster={Poster}
            src="https://r3---sn-2uuxa3vh-3ovz.googlevideo.com/videoplayback?expire=1637325195&ei=K0WXYfGXDPaX4t4P97iB8Ak&ip=180.241.46.93&id=o-AJq5DQ2PyHRuIdfh72vUZiTICKs4w8ZEd7jkfw8Vr_0D&itag=22&source=youtube&requiressl=yes&mh=v1&mm=31%2C29&mn=sn-2uuxa3vh-3ovz%2Csn-npoeenlk&ms=au%2Crdu&mv=m&mvi=3&pl=22&initcwndbps=506250&vprv=1&mime=video%2Fmp4&ns=-i7LpEazmz_pSrTRpsH-W0MG&ratebypass=yes&dur=658.146&lmt=1631077012584701&mt=1637303109&fvip=5&fexp=24001373%2C24007246&c=WEB&txp=5311224&n=pjmD6uMPKuHjAkD6&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAM4au-TWJQk9kLiBQ30c5uT0CxfFtmcbQilwPWDAfPVoAiEAwo9twMwhnHRXxUtfcnrosOCsDfUHmTQEsNgn6UMjeoM%3D&sig=AOq0QJ8wRQIhAOrNsGPZbeahKm6Am0oja9NsCKiQZYY4pUvyzdzgw2JOAiBTbLIWVTbClbLe2pYKkH_iWPws99Qo7KlWnMr5govz1g%3D%3D"
        />
    )
}

export default Video
