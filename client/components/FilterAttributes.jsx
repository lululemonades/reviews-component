import React from 'react';
import styled from 'styled-components';
import FilterFieldContainer from './FilterFieldContainer';

const Wrapper = styled.div`
  display: flex;
`;

class FilterAttributes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <FilterFieldContainer
          title="Rating"
          options={
            ['1 Star', '2 Star', '3 Star', '4 Star', '5 Star']
          }
        />
        <FilterFieldContainer
          title="Fit"
          options={
            ['Second Skin', 'Tight', 'Snug', 'Just Right', 'Roomy', 'Oversized', 'Flowy']
          }
        />
        <FilterFieldContainer
          title="Athletic Type"
          options={
            ['Yogi', 'Runner', 'Dancer', 'Cyclist', 'Sweaty Generalist']
          }
        />
        <FilterFieldContainer
          title="Age"
          options={
            ['Under 18', '18-24', '25-34', '35-44', '45-54', '55-65', 'Over 65', 'I keep my age on the D.L.LeftSideContainer.jsx']
          }
        />
        <FilterFieldContainer
          title="Body Type"
          options={
            ['Athletic', 'Curvy', 'Lean', 'Muscular', 'Petite', 'Slim', 'Solid']
          }
        />
      </Wrapper>
    );
  }
}

export default FilterAttributes;
