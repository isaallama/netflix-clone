import React from 'react';
import Modal from 'react-modal';
import './MovieModal.css';

Modal.setAppElement('#root'); 

function convertDate(date) {
    return date.split("-").reverse().join("/");
}

export default function MovieModal({ isOpen, onRequestClose, movie }) {
    if (!movie) return null;
    
    let genres = [];
    for (let i in movie.genres) {
        genres.push(movie.genres[i].name);
    }

    let info = {
        title: movie.name ? movie.name : movie.title,
        overview: movie.overview,
        release: movie.release_date ? movie.release_date : movie.first_air_date,
        vote: movie.vote_average,
        genres: genres.join(', ')
    }

    

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Movie Details">

            <h1>{info.title ? info.title : "não disponível em português."}</h1>
            <p><strong>Sinopse:</strong> {info.overview ? info.overview : "não disponível em português."}</p>
            <p><strong>Nota:</strong> {info.vote  ? `${info.vote}` : "Sem avaliação."}</p>
            <p><strong>Data de Lançamento:</strong> {info.release ? `${convertDate(info.release)}` : "não disponível."}</p>
            <p><strong>Gêneros:</strong> {info.genres ? `${info.genres}`: "não disponível."}</p>

            <button onClick={onRequestClose}>Close</button>
        </Modal>
    );
}
