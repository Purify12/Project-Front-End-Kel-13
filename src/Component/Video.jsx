import React from 'react';
import { Player } from 'video-react';
import Poster from "../images/Poster.jpeg";


function Video() {
    return (
        <Player
            playsInline
            poster={Poster}
            src="https://r3---sn-2uuxa3vh-3ovz.googlevideo.com/videoplayback?expire=1637348027&ei=W56XYbbPLNnI4-EPtrCd6Ak&ip=180.241.46.93&id=o-AFO52nPxQI3YHa94plsNtXLZAGHf6evXIIpWIF62MUnP&itag=22&source=youtube&requiressl=yes&mh=v1&mm=31%2C29&mn=sn-2uuxa3vh-3ovz%2Csn-npoe7nek&ms=au%2Crdu&mv=m&mvi=3&pl=22&initcwndbps=436250&vprv=1&mime=video%2Fmp4&ns=PjB9y3qHMez_1xzQfY3nBtsG&ratebypass=yes&dur=658.146&lmt=1631077012584701&mt=1637326137&fvip=5&fexp=24001373%2C24007246&c=WEB&txp=5311224&n=9Yuz8Nv3qNEvSIH0&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAIyGgKQnWrc3Ed3zLQ91BUMUu5kYEGTMA8TgFMwFyW4DAiEArB8S9POHfBVYiSlx61IxRsRQaRXHE4leuxPBoznNqfw%3D&sig=AOq0QJ8wRQIgUiBzxlfuolQYyUX4HFc4xM8Xf4teYR1479kBr-fBwd0CIQDE6Gio6qVLxBrXCmhC-Q3oQYkaeIIuQlSA57s4fhb2qQ%3D%3D"
        />
    )
}

export default Video
