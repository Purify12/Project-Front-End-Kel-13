import React from "react";
import "../App.css";

function Footer() {
    return (
        <div className="main-footer">
            <div className="row">
            {/* Column1 */}
            <div className="col">
                <h4>OnVocation</h4>
                <p className="list-unstyled">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            {/* Column2 */}
            <div className="col">
                <h4>Fitur Kami</h4>
                <ui className="list-unstyled">
                <li>Pencarian Lokasi wisata</li>
                <li>Rekomendasi Wisata</li>
                <li>Pemesanan Souvenir</li>
                <li>Pemesanan Tiket</li>
                </ui>
            </div>
            {/* Column3 */}
            <div className="col">
                <h4>CALL US</h4>
                <ui className="list-unstyled">
                <li>tigabelasnews@gmail.com</li>
                <li>0819-0667-1812</li>
                </ui>
            </div>
            </div>
            <hr />
            <div className="row">
            <p className="col-sm">
                &copy;{new Date().getFullYear()} OnVocation by Kelompok13 - All rights reserved 
            </p>
            </div>
        </div>
    );
}

export default Footer
