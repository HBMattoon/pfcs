import React from 'react';
import Flavor from './Flavor';

class CharFlavMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flavObj: undefined,
    };
  }

  componentWillMount() {
    this.setState({
      flavObj: this.props.flavobj,
    });
  }

  flavorPackage(key) {
    const title = key.charAt(0).toUpperCase() + key.slice(1);
    const result = {
      title,
      lock: this.state.flavObj.lock,
      value: this.state.flavObj[key],
    };
    return result;
  }

  packageUpdater() {

  }

  render() {
    return (
      <div className="flavor-more">
        <div className="flav-row">
          <Flavor className="" propsPackage={this.flavorPackage('name')} />

        </div>
        <div className="flav-row" />
        <div className="flav-row" />
      </div>
    );
  }
}

export default CharFlavMore;
