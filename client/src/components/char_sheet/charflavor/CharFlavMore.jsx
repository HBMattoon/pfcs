import React from 'react';
import PropTypes from 'prop-types';
import Flavor from './Flavor';

class CharFlavMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flavorPositions: [
        { title: 'name', show: true },
        { title: 'alignment', show: true },
        { title: 'player', show: true },
        { title: 'level', show: true },
        { title: 'deity', show: true },
        { title: 'homeland', show: true },
        { title: 'race', show: true },
        { title: 'size', show: true },
        { title: 'gender', show: true },
        { title: 'height', show: true },
        { title: 'weight', show: true },
        { title: 'hair', show: true },
        { title: 'eyes', show: true },
        { title: 'misc', show: true },
      ],
    };
    this.movePosition = this.movePosition.bind(this);
  }

  componentDidMount() {
    console.log(this.state.flavorPositions);
  }

  // componentWillUpdate() {
  //   console.log('updating!')
  // }

  movePosition(position, direction) {
    const flavPos = this.state.flavorPositions;
    const dirVal = (direction === 'up') ? 1 : -1;
    const bounds = (direction === 'up') ? 0 : flavPos.length - 1;

    if (position !== bounds) {
      const newPositions = this.state.flavorPositions.slice();
      const temp = newPositions[position];
      newPositions[position] = newPositions[position - dirVal];
      newPositions[position - dirVal] = temp;

      const func = () => {
        console.log('moving ', direction, dirVal);
        console.log(newPositions);
        this.setState({
          flavorPositions: newPositions,
        });
      };

      return func;
    }
    return undefined;
  }

  toggleShow(position) {
    const newPositions = this.state.flavorPositions.slice();
    newPositions.show = !newPositions.show;
    this.setState({ flavorPositions: newPositions });
  }

  flavorPackage(key, position) {
    // console.log(key)
    const title = key.charAt(0).toUpperCase() + key.slice(1);
    const result = {
      title,
      lock: this.props.flavobj.lock,
      value: this.props.flavobj[key],
      updater: this.props.updater(key),
      moveUp: this.movePosition(position, 'up'),
      moveDown: this.movePosition(position, 'down'),
    };
    // console.log(result.title)
    return result;
  }

  getFlavors() {
    let counter = 0;
    const flavPos = this.state.flavorPositions;
    return flavPos.map((item) => {
      // console.log(item.title)
      const result = (<Flavor className="" key={counter} propsPackage={this.flavorPackage(item.title, counter)} />);
      // console.log(counter)
      counter++;
      return result;
    });
  }

  render() {
    return (
      <div className="flavor-more">
        <div className="flav-row">
          { this.getFlavors() }
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
