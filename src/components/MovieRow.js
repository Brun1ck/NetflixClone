/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import './MovieRow.css';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

export default ({title, items}) => {

    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 0.5);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 0.5);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);

    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--setaEsquerda" onClick={handleLeftArrow}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <span class="material-symbols-outlined">arrow_back_ios</span>
            </div>
            <div className="movieRow--setaDireita" onClick={handleRightArrow}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <span class="material-symbols-outlined">arrow_forward_ios</span>

            </div>
            <div className="movieRow--listaarea">
                <div className="movieRow--list" style={{marginLeft: scrollX, width: items.results.length * 150}}>
                    {items.results.length > 0  && items.results.map((item, key) =>(
                        <div key={key} className="movieRow--item">
                            <img className="movieRow--filme" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}