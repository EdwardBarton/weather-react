import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/Chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const humidities = cityData.list.map(w => w.main.humidity);
    const temps = cityData.list.map(w => w.main.temp);
    const pressures = cityData.list.map(w => w.main.pressure);

    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td><Chart color="orange" units="F" data={temps} /></td>
        <td><Chart color="green" units="hPa" data={pressures}  /></td>
        <td><Chart color="black" units="%" data={humidities} /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);