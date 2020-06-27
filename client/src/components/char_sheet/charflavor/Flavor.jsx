import React from 'react';
import PropTypes from 'prop-types';

class Flavor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      lock: false,
      title: 'default',
    };
  }

  componentDidMount() {
    const { value, lock, title } = this.props.propsPackage;
    this.setState({
      value: (value || 'please provide value'),
      lock: (lock || false),
      title: (title || 'no title provided'),
    });
  }

  flavorEditorCheck() {
    if (this.state.lock) {
      return (
        <div className="flavor-value-lock">{this.state.value}</div>
      );
    }
    return (
      <div className="flavor-value-unlock">
        {this.state.value}
        {' '}
        edit
      </div>
    );
  }

  render() {
    return (
      <div className="flavor-item">
        <div className="flavor-input">
          {this.flavorEditorCheck()}
        </div>
        <div className="flavor-devider" />
        <div className="flavor-title">
          {this.state.title}
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
  }),
};

export default Flavor;
