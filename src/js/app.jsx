import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <ul className="eons">
        <li className="phanerozoic">
          <h1>Phanerozoic</h1>
          <div>
            <p>jasdjajdas</p>
            <p>jasdjajdas</p>
            <p>jasdjajdas</p>
            <p>jasdjajdas</p>
            <p>jasdjajdas</p>
          </div>
          <ul className="eras">
            <li className="cenozoic">
              <h2>Cenozoic</h2>
            </li>
            <li className="mesozoic">
              <h2>Mesozoic</h2>
            </li>
            <li className="paleozoic">
              <h2>Paleozoic</h2>
            </li>
          </ul>
        </li>
        <li className="proterozoic">
          <h1>Proterozoic</h1>
          <ul className="eras">
            <li className="neoproterozoic">
              <h2>Neoproterozoic</h2>
            </li>
            <li className="mesoproterozoic">
              <h2>Mesoproterozoic</h2>
            </li>
            <li className="paleoproterozoic">
              <h2>Paleoproterozoic</h2>
            </li>
          </ul>
        </li>
        <li className="archean">
          <h1>Archean</h1>
          <ul className="eras">
            <li className="neoarchean">
              <h2>Neoarchean</h2>
            </li>
            <li className="mesoarchean">
              <h2>Mesoarchean</h2>
            </li>
            <li className="paleoarchean">
              <h2>Paleoarchean</h2>
            </li>
            <li className="eoarchean">
              <h2>Eoarchean</h2>
            </li>
          </ul>
        </li>
        <li className="hadean">
          <h1>Hadean</h1>
        </li>
      </ul>
    )
  }
}