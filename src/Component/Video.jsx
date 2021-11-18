import React from 'react';
import { Player } from 'video-react';
import Poster from "../images/Poster.jpeg";


function Video() {
    return (
        <Player
            playsInline
            poster={Poster}
            src="https://r5---sn-a5meknsd.googlevideo.com/videoplayback?expire=1637097122&ei=QsqTYb69H4_64-EP4uigwAU&ip=180.241.46.103&id=o-AH81V_d2NK4W6mAllZpEbmpj-L1ivenhgE_MqkO4UJCr&itag=22&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=KsMyHUy57BKzFjkm0b-AT88G&ratebypass=yes&dur=658.146&lmt=1631077012584701&fexp=24001373,24007246,24132044&c=WEB&txp=5311224&n=OpV6wdFCGqdfeavQjSSE&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAIpSPpHfaJipD3bA1Z7qH5Dvv3yJhy0tPf2dGgDThtozAiEAwsA-5GVNI35Ae6GYCj51WRR6kquiIo3yd5kPlLwRT7k%3D&cm2rm=sn-2uuxa3vh-3ovz7s&req_id=52f84ea25b21a3ee&ipbypass=yes&redirect_counter=2&rm=sn-nposr76&cms_redirect=yes&mh=v1&mm=39&mn=sn-a5meknsd&ms=ltr&mt=1637074825&mv=m&mvi=5&pl=22&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAKUIyDLktzPlfMmqUcy0ulJLsN7uF9I3fqmN19Q3WpJ9AiEAlQg5aLU3vryutaH1xtxTjlgB4mH5mhV5CwUwwOWxFAo%3D"
        />
    )
}

export default Video
