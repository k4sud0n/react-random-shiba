import React from 'react';
import ViewerTemplate from './components/ViewerTemplate';
import SpaceNavigator from './components/SpaceNavigator';
import Viewer from './components/Viewer';

import * as api from './lib/api';

class App extends React.Component {

  state = {
    loading: false,
    data: null
  }

  getPic = async () => {

    if (this.state.loading) return;

    this.setState({
      loading: true
    });

    const response = await api.getAPI();
    const data = response.data[0]

    this.setState({
      data
    })

    this.setState({
      loading: false
    });
    
  }

  handlePrev = () => {
    this.state.data;
  }

  handleNext = () => {
    this.getPic();
  }

  componentDidMount() {
    this.getPic();
  }

  render() {
    const { data, loading } = this.state;
    const { handlePrev, handleNext } = this;

    return (
      <div>
        <ViewerTemplate
          spaceNavigator={<SpaceNavigator onPrev={handlePrev} onNext={handleNext} />}
          viewer={(
            <Viewer 
              url={data}
              loading={loading}
            />
          )}
        />
      </div>
    )
  }
}

export default App;
