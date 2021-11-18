import React from 'react';
import Video from '../Component/Video';
import styled from 'styled-components';
import Influencer from "../images/influencer.jpg";


const Image = styled.img`
    width:200%
`

function OlehInfluencer() {
    return (
        <div>
            <h2>Pilihan Oleh Infuencer</h2>
                    <div class="col-md-12 py-2">
                        <div className="card">
                            <div className="row p-2">
                                <div class="col-md-6">
                                    <div class="bg-primary text-center text-white">
                                        <Video />
                                    </div>
                                        <br/>
                                </div>     
                                <div class="col-md-6">
                                    <div class="bg-secondary text-white p-2" >
                                        <h4 style={{textAlign:'left'}}>Berlayar di Labuan Bajo</h4>
                                        <p style={{fontSize:12}}>Di video kali ini aku share pengalaman aku ketika private trip di labuan bajo selama 4 hari 3 malam 🖤 (video ini dibuat Desember 2019 yaaa).</p>
                                        <p style={{textAlign:'left', fontSize:12}}>Dibawah ini detail itinerary Kita ya:
                                            <ul>
                                                <ol>Day 1. Chasing Sunset</ol>
                                                <ol>Day 2. Kanawa Island, Diving, Pink Beach dan Padar Island</ol>
                                                <ol>Day 3. Komodo National Park, Rinca Island, Kelor Island, Snorkeling dan Kalong Island</ol>
                                                <ol>Day 4. Snorkeling dan Pulang 😢</ol>
                                                <ol>disini juga aku share total biaya yang harus di keluarkan lohh!</ol>
                                            </ul>
                                            
                                            <a href="https://www.youtube.com/watch?v=BtJ-g-SmoEI"><u className="text-white">source : youtube</u></a>  
                                        </p>
                                        <div className="row p-2">
                                            <div className="col-3">
                                                <img src={Influencer} alt="Logo" class="img rounded-circle" />
                                            </div>
                                            <div className="col-3">
                                                <h5>KarlinaPWN</h5>
                                            </div>
                                        </div>
                                    </div>
                                        <br/>
                                </div>                                                       
                            </div>
                        </div>
                    </div>   
        </div>
    )
}

export default OlehInfluencer
