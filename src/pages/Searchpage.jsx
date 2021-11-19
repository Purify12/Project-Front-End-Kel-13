import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Search from '../Component/Search';
import styled from 'styled-components';

const Container = styled.div`
    width: 90%;
    height: 30%;
    margin-left: 5%;
    margin-right: 5%;
`;

function Searchpage() {
    return (
        <>
            <div className="row pb-2">
                <Navbar class="col-md-12"/>
            </div>
            <Container>
                <div className="row col-md-12 p-1">
                    <Search />
                </div>
                <div className="row pt-2">
                    <Footer class="col-md-12"/>
                </div>
            </Container>
            
        </>
    )
}

export default Searchpage
