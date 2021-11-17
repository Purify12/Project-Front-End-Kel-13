import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Rekomendasi destinasi pilihan</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Deretan pantai yang menawan di Pulau Dewata"
              label="Bali"
              path="/services"
            />
            <CardItem
              src="images/bandung.jpg"
              text="Kekayaan alam Bandung tak pernah mengecewakan"
              label="Bandung"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Gerbang Menuju Surga Dunia di Labuan Bajo"
              label="Labuan Bajo"
              path="/services"
            />
            <CardItem
              src="images/lombok.jpg"
              text="Pulau Lombok yang Menakjubkan"
              label="Lombok"
              path="/products"
            />
            <CardItem
              src="images/yogya.jpg"
              text="Jogja The Neverending Asia yang istimewa"
              label="Yogyakarta"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
