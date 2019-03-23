import React from 'react';

export default class TimeBox extends React.Component {

  render() {
    let time = this.props.data;
    let style = {
      height: `${time.timePercent()}%`,
      bottom: `${time.bottomPercent()}%`
    }

    return (
      <div className={`${time.division} ${time.id}`}
        style={style}
      >
        <p className="name">{time.name}</p>
      </div>
    )
  }
}