import React, { Component } from 'react';

//components
import NonSeriesTimeFields from './timeFields/nonSeriesTimeFields';
import SeriesTimeFields from './timeFields/seriesTimeFields';


class Time extends Component {
  constructor(props) {
    super(props);

    this.state = { series: false }
  }

  renderFields() {
    return this.state.series ? <SeriesTimeFields /> : <NonSeriesTimeFields />
  }

  toggleSeries() {
    this.setState({ series: !this.state.series });
  }

  render() {
    return (
      <section>
        <h3>Time</h3>
        <div className="time-fields-overview">
          <p>Is this tournament a weekly series?</p>
          <label className="switch">
            <input type="checkbox" onChange={this.toggleSeries.bind(this)}/>
            <span className="slider round"></span>
          </label>
        </div>
        {this.renderFields()}
      </section>
    )
  }
}

export default Time;
