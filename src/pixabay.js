import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/?key=24769974-87e6e402804bf8652178f78ec';

export default class ImageApi {
    constructor() {
        this.page = 1;
        this.searchQuery = '';
        this.imageOnPage = 40;
    }
    fetchPicture() {
        const picture = `${BASE_URL}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.imageOnPage}&page=${this.page}`;
        this.page += 1;
        return axios.get(picture);
    }

    get query() {
        return this.searchQuery;
    }
    set query(obj) {
        this.searchQuery = obj;
    }

    resetPage() {
        this.page = 1;
    }
}


