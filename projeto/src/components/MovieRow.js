import React from "react";
import "./MovieRow.css";
import { useState } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const MovieRow = ({ title, items, onMovieClick }) => {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if (window.innerWidth - listW > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    if (!items || !items.results) {
        return null;
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>

            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{ marginLeft: scrollX, width: items.results.length * 150 }}>
                    {items.results.map((item, key) => (
                        <div
                            key={key}
                            className="movieRow--item"
                            onClick={() => onMovieClick(item)} 
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                                alt={item.original_title}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieRow;
