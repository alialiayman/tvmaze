import axios from 'axios';


const tvService = () => {
    return {
        searchShows: async (keyword) => {
            const result = await axios.get(`${process.env.REACT_APP_TV_SERVICE}/search/shows?q=${encodeURIComponent(keyword)}`);
            if (result && result.data && result.data.length > 0) {
                return result.data;
            }
        },
    }
}

export default tvService;
