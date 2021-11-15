import React from 'react';
import CarouselInput from '../Component/CarouselInput';
import styled from 'styled-components';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';



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
                    <div class="col-md-4">
                    <div class="bg-primary text-center text-white">.col-md-4</div>
                    <br/>
                    </div>
        
        
                    <div class="col-md-4">
                        <div class="bg-primary text-center text-white">.col-md-4</div>
                        <br/>
                    </div>
        
        
                    <div class="col-md-4">
                        <div class="bg-primary text-center text-white">.col-md-4</div>
                        <br/>
                    </div>
                </div>

                <div className="row col-md-12 py-4">
                    <h2>Pilihan Oleh Infuencer</h2>
               
                </div>  

                <div className="row pt-2">
                    <Footer class="col-md-12"/>
                </div>

            </Container>      
        </>
    )
}

export default Home

