import React from 'react';
import PropTypes from 'prop-types';

class Flavor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'default flavor value',
      lock: false,
      title: 'default flavor name',
    };
  }

  componentDidMount() {
    const { propsPackage } = this.props;
    this.setState({
      value: (propsPackage.value || ''),
      lock: (propsPackage.lock || false),
      title: (propsPackage.title || 'no title provided'),
    });

    //console.log('updating flavor')
  }

  componentDidUpdate(prevProps){
    const {propsPackage} = this.props
    if(this.checkPropsDiff(prevProps.propsPackage, propsPackage)){
      this.setState({
        value: (propsPackage.value || ''),
        lock: (propsPackage.lock || false),
        title: (propsPackage.title || 'no title provided'),
      });
    }

  }

  checkPropsDiff(prevProps, newProps) {
    if(prevProps.title !== newProps.title || prevProps.value !== newProps.value || prevProps.lock !== newProps.lock){
      return true;
    } else {
      return false;
    }
  }

  flavorEditorCheck() {
    const { lock, value } = this.state;
    //const { lock, value } = this.props.propsPackage
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

  updateValue(e) {
    //console.log(e.target.value)
    this.setState({
      value: e.target.value,
    });
  }

  updateStateWithValue() {
    const { propsPackage } = this.props;
    const { value } = this.state;

    if (propsPackage.value !== value) {
      propsPackage.updater(value);
    }
  }

  getButtons() {
    const { propsPackage } = this.props;
    let result = [];
    if(propsPackage.moveUp !== undefined) {
      result.push(
        <button key='up' onClick={() => propsPackage.moveUp()}>move up</button>
      )
    }
    if(propsPackage.moveDown !== undefined) {
      result.push(
        <button key='down' onClick={() => propsPackage.moveDown()}>move down</button>
      )
    }
    return result;
  }

  //FOR TESTING PURPOSES
  // printState(){
  //   console.log('state is: ')
  //   console.log(this.state)
  //   console.log('\n props is: ')
  //   console.log(this.props.propsPackage)
  // }

  render() {
    const { title } = this.props.propsPackage;
    return (
      <div className="flavor-item">
        <div className="flavor-input">
          {this.flavorEditorCheck()}
        </div>
        <div className="flavor-devider" />
        <div className="flavor-title">
          {title}
        </div>
        <div className="flavor-buttons">
          {this.getButtons()}
          <button onClick={() => this.printState()}>test</button>
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
  }),
};

Flavor.defaultProps = {
  propsPackage: {
    value: 'value not provide',
    lock: false,
    title: 'title not provided',
    updater: undefined,
  },
};

export default Flavor;
