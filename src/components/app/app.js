import React, {Component} from 'react';


import { YMaps, Map } from 'react-yandex-maps';

import './app.css';
import './system.css';

export default class App extends Component {

  render() {

    return (
      <div className="app">

        <div>
          Header
        </div>


        <div className="layout__container">

          <div>
            Aside
          </div>


          <div className="layout__body">

            <YMaps>
              <div>
                <Map
                  defaultState={{center: [55.75, 37.57], zoom: 9}}
                  height="calc(100vh - 72px)"
                  width="100%"
                />
              </div>
            </YMaps>

          </div>
        </div>
      </div>
    );

  }
}