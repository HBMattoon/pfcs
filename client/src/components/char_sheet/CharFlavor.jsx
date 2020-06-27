import React from 'react';

//for testing purposes
import Flavor from './charflavor/Flavor';

class CharFlavor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showmore: true
    }
  }

  flavorLevel () {
    if(this.state.showmore){
      return (
        <Flavor title='testvalue' />
      );
    } else {
      return (
        <div> flavor messup</div>
      );
    }
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
