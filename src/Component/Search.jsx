import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const IMG = styled.img`
    width: auto;
    height: 200px;
`
const CARD = styled.div`
    margin: 1em;
    box-shadow: 0 0 6px #000;
    object-fit: cover;
`
const CONTENT = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2em;
    width: 80%;
    flex-wrap: wrap;
`

function Search() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
  
    useEffect(() => {
      const loadPosts = async () => {
        setLoading(true);
        const response = await axios.get(
          "https://my-json-server.typicode.com/Purify12/Fake-API/posts"
        );
        setPosts(response.data);
        setLoading(false);
      };
  
      loadPosts();
    }, []);
  
    return (
      <div className="App">
        <h3>Pencarian</h3>
        <input
          style={{ width: "30%", height: "25px", alignItems: "center", position: "center"}}
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        <p><b>Hasil Pencarian : </b></p>
<CONTENT>
        {loading ? (
          <h4>Loading ...</h4>
        ) : (
          posts
            .filter((value) => {
              if (searchTitle === "") {
                return value;
              } else if (
                value.title.toLowerCase().includes(searchTitle.toLowerCase())
              ) {
                return value;
              }
            })
            .map((item) =>  (
              
              <CARD className="card col-md-4 p-2">
                <IMG src={item.img} alt="item" />
                <h5 key={item.id}>{item.title}</h5>
              </CARD>              
            ))
            
        )}
        </CONTENT>  
      </div>
    );
  }

export default Search
