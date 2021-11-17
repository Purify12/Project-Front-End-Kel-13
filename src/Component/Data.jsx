import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import styled from "styled-components";

const IMG = styled.img`
  width: 100%
`

export default function Data() {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    setisLoading(true);
    // URL Ganti dengan alamat github atau API kamu atau URL API MU
    // Method @{get, post, put, patch, delete}
    axios
      .get("https://my-json-server.typicode.com/Purify12/Fake-API/posts")
      .then((response) => {
        setdata(response.data);
        setisLoading(false);
      })
      .catch((err) => {
        // Jika Gagal
        setisError(true);
        setisLoading(false);
      });
  }, []);

  if (isLoading) return <h1>Loading data</h1>;
  else if (data && !isError)
    return (
      <Fragment>
        <div className="col-md sm-1 align-items-center text-center">
          {data &&
            data.map((item) => (
              <div className="px-6 mx-6 py-2">               
                  <div className="card">
                    <div className="card-body">
                      <div className="row py-2">
                        <div class="col-md-6">
                          <hr />
                          <h1 style={{color:"darkblue"}}>{item.title}</h1>
                          {/* <i>{item.email}</i>
                          <h2>{item.body}</h2> */}
                          <hr />
                          <a href={item.img}><IMG src={item.img}/></a>
                        </div> 
                        <div class="col-md-6">
                          <div className="content p-lg-4">
                            <h1 style={{color:"blue"}}>Informasi Menarik</h1>
                            <p>{item.detail}</p>
                            <i>reference : {item.src}</i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>                              
              </div>
            ))}
        </div>
      </Fragment>
    );
  else {
    return <h1>Something Went Wrong</h1>;
  }
}