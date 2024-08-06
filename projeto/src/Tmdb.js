const API_KEY = "6c424f783d6bd4db06274a9d062faddd";
const BASE_URL = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
    const req = await fetch(`${BASE_URL}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Originais do Netflix",  
                items: await basicFetch(`/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`),
            },
            {
                slug: "trending",
                title: "Recomendados para Você",
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: "toprated",
                title: "Em alta",
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: "action",
                title: "Ação",  
                items: await basicFetch(`/discover/movie?api_key=${API_KEY}&with_genres=28`),
            },
            {
                slug: "comedy",
                title: "Comédia",   
                items: await basicFetch(`/discover/movie?api_key=${API_KEY}&with_genres=35`),
            },
            {
                slug: "horror",
                title: "Terror",
                items: await basicFetch(`/discover/movie?api_key=${API_KEY}&with_genres=27`),
            },
            {
                slug: "romance",
                title: "Romance",
                items: await basicFetch(`/discover/movie?api_key=${API_KEY}&with_genres=10749`),
            },
            {
                slug: "documentary",
                title: "Documentários",
                items: await basicFetch(`/discover/movie?api_key=${API_KEY}&with_genres=99`),
            },
           
        ];
    },

    getMovieInfo: async (movieId, type) => {
        let info = {};
        if(movieId){

            switch (type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?api_key=${API_KEY}&language=pt-BR`);
                break;
                default:
                    info = null;    
                break;
            }
        }

        return info;
    }
   
}