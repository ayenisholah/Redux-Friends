import React from 'react';



class App extends React.Component {
  
  render() {
    return (
      <div className='App'>
        {
          this.props.errorMessage
          && <h2 style={{color: 'red'}}>{ this.props.errorMessage }</h2>
        }
        {
          this.props.requestPending
          && <h2>Loading....</h2>
        }
      </div>
    );
  }
}


export default App;
