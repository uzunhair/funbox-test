import React, {Component} from 'react';

export default class Aside extends Component {

  render() {

    return (
      <div className="layout__aside">
        <form action="">
          <div className="input-group mb-3">
            <input ref={this.input} type="text" className="form-control" placeholder="Введите адрес" />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button" id="button-addon2">Найти</button>
            </div>
          </div>
        </form>

        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Cras justo odio </span>
            <button type="button" className="btn btn-outline-secondary btn-sm">×</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Dapibus ac facilisis in </span>
            <button type="button" className="btn btn-outline-secondary btn-sm">×</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Morbi leo risus </span>
            <button type="button" className="btn btn-outline-secondary btn-sm">×</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Porta ac consectetur ac </span>
            <button type="button" className="btn btn-outline-secondary btn-sm">×</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Vestibulum at eros </span>
            <button type="button" className="btn btn-outline-secondary btn-sm">×</button>
          </li>
        </ul>
      </div>
    )

  }

}