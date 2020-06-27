import React from 'react';
import CharFlavor from './CharFlavor';

class MainBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main_body">
        <CharFlavor />
      </div>
    );
  }
}

// what is needed
// flavor (char name, asl, etc)
// movement
// health
// skills (and languages)
// defense (ac, touch, etc)
// initiative
// abilities (str, dex, con, etc.)
// saving throws
// attack (bsb, cmb, cmd)
// spell res
// weapons
// armor (ac items)
// spells
// gear
// feat
// special abilities
// experience points
// addition notes/ misc


export default MainBody;
