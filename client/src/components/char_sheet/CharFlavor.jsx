import React from 'react';
import CharFlavMore from './charflavor/CharFlavMore';

// for testing purposes
// const testobj = {
//   lock: false,
//   name: 'myCoolTestName',
//   alignment: '',
//   player: '',
//   level: '',
//   deity: '',
//   homeland: '',
//   race: '',
//   size: '',
//   gender: '',
//   height: '',
//   weight: '',
//   hair: '',
//   eyes: '',
//   misc: '',
// };

class CharFlavor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showmore: true,
      lock: false,
      name: 'coolname',
      alignment: '',
      player: '',
      level: '',
      deity: '',
      homeland: '',
      race: '',
      size: '',
      gender: '',
      height: '',
      weight: '',
      hair: '',
      eyes: '',
      misc: '',
    };

    this.valueUpdater = this.valueUpdater.bind(this);
  }

  flavorLevel() {
    if (this.state.showmore) {
      return (
        <CharFlavMore flavobj={this.state} updater={this.valueUpdater} />
      );
    }
    return (
      <div> flavor messup</div>
    );
  }

  valueUpdater(key) {
    const func = (val) => {
      const newState = {};
      newState[key] = val;
      this.setState(newState);
    };
    return func;
  }

  render() {
    return (
      <div>
        <div>{this.state.name}</div>
        <div className="flavor-body">
          {this.flavorLevel()}
        </div>

      </div>
    );
  }
}

export default CharFlavor;
