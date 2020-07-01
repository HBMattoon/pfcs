import React from 'react';
import PropTypes from 'prop-types';

class Flavor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'default flavor value',
      lock: false,
    };
  }

  componentDidMount() {
    const { propsPackage } = this.props;
    this.setState({
      value: (propsPackage.value || ''),
      lock: (propsPackage.lock || false),
    });
  }

  componentDidUpdate(prevProps) {
    const { propsPackage } = this.props;
    this.checkPropsDiff(prevProps.propsPackage, propsPackage);
  }

  getButtons() {
    const { propsPackage } = this.props;
    const result = [];
    if (propsPackage.moveUp !== undefined) {
      result.push(
        <button key="up" type="button" onClick={() => propsPackage.moveUp()}>move up</button>,
      );
    }
    if (propsPackage.moveDown !== undefined) {
      result.push(
        <button key="down" type="button" onClick={() => propsPackage.moveDown()}>move down</button>,
      );
    }
    return result;
  }

  updateStateWithValue() {
    const { propsPackage } = this.props;
    const { value } = this.state;

    if (propsPackage.value !== value) {
      propsPackage.updater(value);
    }
  }

  updateValue(e) {
    this.setState({
      value: e.target.value,
    });
  }

  flavorEditorCheck() {
    const { lock, value } = this.state;
    if (lock) {
      return (
        <div className="flavor-value-lock">{value}</div>
      );
    }
    return (
      <div className="flavor-value-unlock">
        <input
          type="text"
          value={value}
          onChange={(e) => this.updateValue(e)}
          onBlur={() => this.updateStateWithValue()}
        />
      </div>
    );
  }

  checkPropsDiff(prevProps, newProps) {
    if (prevProps.value !== newProps.value || prevProps.lock !== newProps.lock) {
      this.setState({
        value: (newProps.value || ''),
        lock: (newProps.lock || false),
      });
    }
  }

  // FOR TESTING PURPOSES
  // printState(){
  //   console.log('state is: ')
  //   console.log(this.state)
  //   console.log('\n props is: ')
  //   console.log(this.props.propsPackage)
  // }

  render() {
    const { propsPackage } = this.props;
    return (
      <div className="flavor-item">
        <div className="flavor-input">
          {this.flavorEditorCheck()}
        </div>
        <div className="flavor-devider" />
        <div className="flavor-title">
          {propsPackage.title}
        </div>
        <div className="flavor-buttons">
          {this.getButtons()}
          {/* <button type="button" onClick={() => this.printState()}>test</button> */}
        </div>
      </div>
    );
  }
}

Flavor.propTypes = {
  propsPackage: PropTypes.shape({
    value: PropTypes.string,
    lock: PropTypes.bool,
    title: PropTypes.string,
    updater: PropTypes.func,
    moveUp: PropTypes.func,
    moveDown: PropTypes.func,
  }),
};

Flavor.defaultProps = {
  propsPackage: {
    value: 'value not provide',
    lock: false,
    title: 'title not provided',
    updater: undefined,
    moveUp: undefined,
    moveDown: undefined,
  },
};

export default Flavor;
