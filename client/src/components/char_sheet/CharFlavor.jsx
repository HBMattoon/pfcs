import React from 'react';
import CharFlavMore from './charflavor/CharFlavMore';

// for testing purposes
const testobj = {
  lock: false,
  name: 'myCoolTestName',
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

class CharFlavor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showmore: true,
    };
  }

  flavorLevel() {
    if (this.state.showmore) {
      return (
        <CharFlavMore flavobj={testobj} />
      );
    }
    return (
      <div> flavor messup</div>
    );
  }

  render() {
    return (
      <div className="flavor-body">
        {this.flavorLevel()}
      </div>
    );
  }
}

export default CharFlavor;
