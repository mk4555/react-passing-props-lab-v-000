import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      filters: [],
      fruit: [],
      currentFilter: null
    }
  };

  handleFilterChange = e => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

  render() {
    return(
      <FruitBasket selectedFilter={this.state.selectedFilter} handleFilterChange={this.handleFilterChange}/>
    )
  }

}


// const App = () => <FruitBasket />;

export default App;
