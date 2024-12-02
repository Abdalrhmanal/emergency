"use client";
import React, { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="container" >
            <div className="row">
                <div className="col-12" style={{backgroundColor:'#007a3d',width:'100%',height:'33px'}}></div>
                <div className="col-12" style={{backgroundColor:'#ffffff',width:'100%',height:'33px',textAlign:'center'}}>
                    <span style={{color:'red',fontSize:'20px',marginTop:'10px'}}>اللهم انصرنا ولا تنصر علينا, اللهم نصرك الذي وعدت</span>
                </div>
                <div className="col-12" style={{backgroundColor:'#000000',width:'100%',height:'33px'}}></div>
            </div>
        </div>
    );
}

export default Navbar;
