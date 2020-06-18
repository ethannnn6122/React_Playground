import React, { Component } from 'react';
import apiKey from '../../../apiKeys';
import DayCard from '../DayCard';
import axios from 'axios';

class WeekContainer extends Component {
    state = {
        fullData: [],
        dailyData: []
    }

    componentDidMount() {
        this.getWeatherData();
    }

    getWeatherData = () => {
        const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?q=Peoria&appid=${apiKey}`;
        axios.get(weatherURL)
        .then( res => {
            const dailyData = res.data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
            this.setState({
                fullData: res.data.list,
                dailyData: dailyData
            }, () => console.log(this.state))  
        })
        .catch( err => {
            console.error(err);
        })
    }

    formatDayCards = () => {
        return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
    }

    render() {
        return (
            <div>
                {this.formatDayCards()}
            </div>
        )
    }
}

export default WeekContainer;