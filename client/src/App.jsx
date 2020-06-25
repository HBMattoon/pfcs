import React from 'react';
import NavBar from './components/NavBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.chooseActiveTab = this.chooseActiveTab.bind(this);
  }

  componentDidMount() {}

  render() {
    return (
      <div id="appBody">
        <NavBar />
      </div>
    );
  }
}

export default App;
