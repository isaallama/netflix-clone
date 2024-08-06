import React from 'react';
import Modal from 'react-modal';
import './MovieModal.css';

Modal.setAppElement('#root'); 

export default function MovieModal({ isOpen, onRequestClose, movie }) {
    if (!movie) return null;

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Movie Details">

            <h1>{movie.title}</h1>
            <p><strong>Sinopse:</strong> {movie.overview ? movie.overview : "não disponível."}</p>
            <p><strong>Nota:</strong> {movie.vote_average  ? `${movie.vote_average}` : "não disponível."}</p>
            <p><strong>Data de Lançamento:</strong> {movie.release_date ? `${movie.release_date}` : "não disponível."}</p>
            <p><strong>Elenco:</strong> {movie.cast ? `${movie.cast}`: "não disponível."}</p>

            <button onClick={onRequestClose}>Close</button>
        </Modal>
    );
}
