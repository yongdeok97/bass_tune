import React from 'react';
import styled from 'styled-components';
import {SegmentedArc} from '@shipt/segmented-arc-for-react-native';

const Container = styled.View``;

export default function GuageTune(props) {
  const ranges = ['10', '20', '30', '40', '50'];
  const [showArcRanges, setShowArcRanges] = React.useState(false);

  const segments = [
    {
      scale: 0.25,
      filledColor: '#FF746E',
      emptyColor: '#F2F3F5',
      data: {label: 'Red'},
    },
    {
      scale: 0.25,
      filledColor: '#F5E478',
      emptyColor: '#F2F3F5',
      data: {label: 'Yellow'},
    },
    {
      scale: 0.25,
      filledColor: '#78F5CA',
      emptyColor: '#F2F3F5',
      data: {label: 'Green'},
    },
    {
      scale: 0.25,
      filledColor: '#6E73FF',
      emptyColor: '#F2F3F5',
      data: {label: 'Blue'},
    },
  ];
  const _handlePress = () => {
    setShowArcRanges(!showArcRanges);
  };
  return (
    <Container>
      <SegmentedArc
        segments={segments}
        fillValue={40}
        isAnimated={true}
        animationDelay={1000}
        showArcRanges={showArcRanges}
        ranges={ranges}></SegmentedArc>
    </Container>
  );
}
