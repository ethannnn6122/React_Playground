import React ,{ Component } from 'react';
import axios from '../../axios';
import classes from './DiscoverContainer.module.css';

import ArtistResults from './ArtistResults/ArtistResults';
import {Container, Row, Col, Jumbotron, Tabs, Tab} from 'react-bootstrap'
import UserTopArtists from './UserTopArtists/UserTopArtists';
import UserRecommendations from './UserRecommendations/UserRecommendations';

const getQueryParams = ( params, url ) => {
    let href = url;
    //this expression is to get the query strings
    let reg = new RegExp( '[?#&]' + params + '=([^&#]*)', 'i' );
    let queryString = reg.exec(href);
    return queryString ? queryString[1] : null;
  };

class SearchContainer extends Component {
    state= {
        SearchItems: [],
        TopItems: [],
        RecommendationItems: [],
        userName: "",
        isError: false,
        tab: "search",
        ArtistsId: null
    }

    componentDidMount() {
        this.getUserData();
    }

    getUserData = () => {
        let accessToken = getQueryParams('access_token', window.location.href);
        axios.get('/me', {
            headers: {
                'Authorization': `Bearer ${accessToken}` 
            }
        })
        .then(res => {
            console.log(res.data);
            const userName = res.data.display_name;
            this.setState({ userName: userName });
        })
        .catch(err => {
            console.error(err);
            this.setState({isError: true});
        });
    }

    searchArtist = () => {
        this.setState({ tab: "search" });
        let accessToken = getQueryParams('access_token', window.location.href);
        if (this._Search_input.value !== "") {
            axios.get(`/search?q=${this._Search_input.value}&type=artist`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}` 
                }
            })
            .then(res => {
                    console.log(res.data.artists)
                    const artists = res.data.artists.items;
                    this.setState({ SearchItems: artists });
                })
            .catch(err => {
                console.error(err);
                this.setState({isError: true});
            });
        }
    }

    getTopArtists = async () => {
        
        let accessToken = getQueryParams('access_token', window.location.href);
        await axios.get('/me/top/artists', {
            headers: {
                'Authorization': `Bearer ${accessToken}` 
            }
        })
        .then( async (res1) => {
                console.log(res1.data.items);
                const topArtists = res1.data.items;
                this.setState({ TopItems: topArtists });
                let topItems = this.state.TopItems;
                let ids = topItems.map(el => el.id);
                console.log(ids);
                this.setState({ ArtistsId: ids[0]});
                
                if (this.state.ArtistsId !== null && this.state.tab === "recommendations") {
                    let id = this.state.ArtistsId;
                    await axios.get(`/artists/${id}/related-artists`, {
                        headers: {
                            'Authorization': `Bearer ${accessToken}` 
                        }
                    })
                    .then(res2 => {
                        this.setState({ TopItems: [] });
                        const recommendations = res2.data.artists;
                        this.setState({ RecommendationItems: recommendations });
                        console.log(this.state.RecommendationItems);
                    });
                }
        })
        .catch(err => {
            console.error(err);
            this.setState({isError: true});
        });
    }

    tabsHandler = (key) => {
        if (key === "search") {
            this.setState({ tab: "search" })
            this.setState({ SearchItems: [] });
            this.setState({ TopItems: [] });
            this.setState({ RecommendationItems: [] });
        } else if (key === "stats") {
            this.setState({ tab: "stats" })
            this.setState({ TopItems: [] });
            this.setState({ SearchItems: [] });
            this.setState({ RecommendationItems: [] });
            this.getTopArtists();
        } else if (key === "recommendations") {
            this.setState({ tab: "recommendations" })
            this.setState({ RecommendationItems: [] });
            this.setState({ SearchItems: [] });
            this.setState({ TopItems: [] });
            this.getTopArtists();
        }
    }

    render() {
        const search = <ArtistResults results={this.state.SearchItems}/>;        

        const stats = <UserTopArtists results={this.state.TopItems} />;

        const recommendations = <UserRecommendations results={this.state.RecommendationItems} />;

        let welcome = <Jumbotron fluid style={{textAlign: "center", backgroundColor: "#3F6F8C"}}>
            <Container fluid>
                <h1>Welcome, {this.state.userName}</h1>
                <Tabs className={classes.Tabs} onSelect={this.tabsHandler} defaultActiveKey="search" transition={false}>
                    <Tab eventKey="search" title="Search Artists">
                        <br />
                        <h3>Search Artists</h3> 
                        <input type='text' className={classes.Input} ref={(el) => this._Search_input = el} />
                        <button className={classes.Button} onClick={this.searchArtist}>Search</button>
                    </Tab>
                    <Tab eventKey="stats" title="My Stats" >
                        <br />
                        <h3>{this.state.userName}'s Top Artists</h3>
                    </Tab>
                    <Tab eventKey="recommendations" title="Recommendations" >
                        <br />
                        <p>recommendations</p>
                    </Tab>
                </Tabs>
            </Container>
        </Jumbotron>

        if(this.state.isError) {
            welcome = <h1 style={{textAlign: 'center'}}>Please connect your Spotify account with DiscoverTunes!</h1> 
        }

        let results = null;

        if (this.state.tab === "search") {
            results = search;
        } else if (this.state.tab === "stats") {
            results = stats;
        } else if (this.state.tab === "recommendations") {
            results = recommendations;
        }

        return (
            <div className={classes.View}>
                <Container fluid>
                    <Row>
                        <Col>
                            <br />
                            {welcome}
                        </Col>
                    </Row>
                    {results}
                </Container>
            </div>
        );
    }
}

export default SearchContainer; 