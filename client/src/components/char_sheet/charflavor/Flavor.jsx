import React from 'react';

class Flavor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'',
      lock: false,
      title:'default'
    }
  }

  componentDidMount() {
    this.setState({
      value: (this.props.value ? this.props.value : 'please provide value'),
      lock: (this.props.lock ? this.props.lock : false),
      title: (this.props.title ? this.props.title : 'no title provided')
    })
  }

  flavorEditor () {
    if(this.state.lock) {
      return (
        <div className="flavor-value-lock">{this.state.value}</div>
      )
    } else {
      return (
        <div className="flavor-value-unlock">{this.state.value}!</div>
      )
    }
  }

  render() {
    return (
      <div className="flavor-item">
        <div className="flavor-input">
          {this.flavorEditor()}
        </div>
        <div className="flavor-devider"></div>
        <div className="flavor-title">
          {this.state.title}
        </div>
      </div>
    )
  }
}

export default Flavor;
