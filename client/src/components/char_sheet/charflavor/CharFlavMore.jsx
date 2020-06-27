import React from 'react';
import PropTypes from 'prop-types';
import Flavor from './Flavor';

class CharFlavMore extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      flavObj: this.props.flavobj,
    });
  }

  flavorPackage(key) {
    const title = key.charAt(0).toUpperCase() + key.slice(1);
    const result = {
      title,
      lock: this.props.flavobj.lock,
      value: this.props.flavobj[key],
      updater: this.props.updater(key),
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

CharFlavMore.propTypes = {
  flavobj: PropTypes.shape({
    showmore: PropTypes.bool,
    lock: PropTypes.bool,
    name: PropTypes.string,
    alignment: PropTypes.string,
    player: PropTypes.string,
    level: PropTypes.string,
    deity: PropTypes.string,
    homeland: PropTypes.string,
    race: PropTypes.string,
    size: PropTypes.string,
    gender: PropTypes.string,
    height: PropTypes.string,
    weight: PropTypes.string,
    hair: PropTypes.string,
    eyes: PropTypes.string,
    misc: PropTypes.string,

  }),
};

CharFlavMore.defaultProps = {
  propsPackage: {
    showmore: true,
    lock: false,
    name: 'BADNAME',
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
  },
};

export default CharFlavMore;
