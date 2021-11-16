import React from 'react';
import CarouselInput from '../Component/CarouselInput';
import styled from 'styled-components';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Data from '../Component/Data';


const Container = styled.div`
    width: 90%;
    height: 30%;
    margin-left: 5%;
    margin-right: 5%;
`;

function Home() {
    return (
        <>
            <div className="row pb-2">
                <Navbar class="col-md-12"/>
            </div>
            <Container>
                <div className="row">
                    <div class="jumbotron text-center col-md-12">
                        <CarouselInput />
                    </div>
                </div>
                <div className="row col-md-12">
                    <h2>Rekomendasi Destinasi Pilihan</h2>
                    <Data/>
                </div>

                <div className="row py-2">
                    <h2>Pilihan Oleh Infuencer</h2>
                    <div class="col-md-12 py-2">
                        <div className="card">
                            <div className="row py-2">
                                <div class="col-md-6">
                                    <div class="bg-primary text-center text-white">
                                        .col-md-6
                                    </div>
                                        <br/>
                                </div>     
                                <div class="col-md-6">
                                    <div class="bg-primary text-center text-white">
                                        .col-md-6
                                    </div>
                                        <br/>
                                </div>                                                       
                            </div>
                        </div>
                    </div>   
                </div>  

                <div className="row pt-2">
                    <Footer class="col-md-12"/>
                </div>

            </Container>      
        </>
    )
}

export default Home

