import React ,{ Component } from 'react';
import axios from '../../axios';

import ArtistResults from '../../components/ArtistResults/ArtistResults';

class SearchContainer extends Component {
    state ={
        items: []
    }

    searchArtist = () => {
        axios.get(`search?q=${this._input.value}&type=artist`)
            .then(res => {
                console.log(res.data.artists.items)
                const artists = res.data.artists.items;
                this.setState({ artists });
            });
    }    

    render() {
        return (
            <div>
                <h1>Search Artists!!</h1>
                <input type='text' ref={(el) => this._input = el } />
                <button onClick={this.searchArtist}>Search</button>
                <ul>
                    <ArtistResults results={this.state.items}/>
                </ul>
            </div>
        );
    }
}

export default SearchContainer; 