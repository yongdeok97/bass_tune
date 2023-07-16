import React from 'react';
import styled from 'styled-components';
import {SegmentedArc} from '@shipt/segmented-arc-for-react-native';

const Container = styled.View``;

export default function GaugeTune(props) {
  const ranges = ['1', '2', '3', '4', '5'];
  const [showArcRanges, setShowArcRanges] = React.useState(true);

  console.log('asd', props.value);

  const segments = [
    {
      scale: 0.25,
      filledColor: 'red',
      emptyColor: 'red',
      data: {label: 'Red'},
    },
    {
      scale: 0.25,
      filledColor: '#F2F3F5',
      emptyColor: '#F2F3F5',
      data: {label: 'Yellow'},
    },
    {
      scale: 0.25,
      filledColor: '#F2F3F5',
      emptyColor: '#F2F3F5',
      data: {label: 'Green'},
    },
    {
      scale: 0.25,
      filledColor: 'green',
      emptyColor: 'green',
      data: {label: 'Blue'},
    },
  ];
  return (
    <Container>
      <SegmentedArc
        segments={segments}
        fillValue={props.value}
        isAnimated={false}
        showArcRanges={showArcRanges}
        ranges={ranges}
      />
    </Container>
  );
}
