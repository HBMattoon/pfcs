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
        {value}
        {' '}
        edit
      </div>
    );
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

Flavor.defaultProps = {
  propsPackage: {
    value: 'value not provide',
    lock: false,
    title: 'title not provided',
  },
};

export default Flavor;
