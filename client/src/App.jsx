import React from 'react';
import NavBar from './components/NavBar';
import MainBody from './components/char_sheet/MainBody';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div id="appBody">
        <NavBar />
        <MainBody />
      </div>
    );
  }
}

export default App;
