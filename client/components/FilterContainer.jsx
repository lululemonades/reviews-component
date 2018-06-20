import React from 'react';
import FilterAttributes from './FilterAttributes';
import FilterSummary from './FilterSummary';

class FilterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: false,
    };
  }

  render() {
    return (
      <div>
        <FilterAttributes />
        {this.state.filtered && <FilterSummary />}
      </div>
    );
  }
}

export default FilterContainer;
