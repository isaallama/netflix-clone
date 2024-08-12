import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/HeaderN';
import MovieModal from './components/MovieModal';

export default function App() {
    const [filmes, setFilmes] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        const loadAll = async () => {
            let list = await Tmdb.getHomeList();
            setFilmes(list);

            let originals = list.filter(i => i.slug === 'originals');
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await Tmdb.getMovieInfo(chosen);
            console.log(chosenInfo);
            setFeaturedData(chosenInfo);
        }

        loadAll();
    }, []);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, []);

    const handleMovieClick = async (item) => {
        console.log('Fetching movie info for ID:', item.id);
        let movieInfo = await Tmdb.getMovieInfo(item);
        console.log('Fetched movie info:', movieInfo); 
        setSelectedMovie(movieInfo);
        setModalOpen(true);
    };

    return (
        <div className="page">
            <Header black={blackHeader} 
                onSearchClick={handleMovieClick}
            />

            {featuredData && (
                <MovieRow
                    key={featuredData.id}
                    title="Em alta"
                    items={featuredData}
                    onMovieClick={handleMovieClick}
                />
            )}

            {featuredData && <FeaturedMovie item={featuredData} />}

            <section className="lists">
                {filmes.map((item, key) => (
                    <MovieRow
                        key={key}
                        title={item.title}
                        items={item.items}
                        onMovieClick={handleMovieClick}
                    />
                ))}
            </section>

            <footer>
                <br />Feito por Isadora Allama para o Mestre Edu<br />
            </footer>

            {filmes.length <= 0 && (
                <div className="loading">
                    <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
                </div>
            )}

            <MovieModal 
                isOpen={modalOpen} 
                onRequestClose={() => setModalOpen(false)} 
                movie={selectedMovie} 
            />
        </div>
    );
}



