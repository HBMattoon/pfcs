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
      value: (propsPackage.value || 'please provide value'),
      lock: (propsPackage.lock || false),
      title: (propsPackage.title || 'no title provided'),
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

  updateValue(e) {
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
    console.log('ping')
    console.log(propsPackage.moveUp)
    if(propsPackage.moveUp !== undefined) {
      result.push(
        <button>move up</button>
      )
    }
    if(propsPackage.moveDown !== undefined) {
      result.push(
        <button>move down</button>
      )
    }
    return result;
  }

  render() {
    const { title } = this.state;
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
