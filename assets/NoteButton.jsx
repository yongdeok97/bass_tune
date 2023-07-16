import React from 'react';
import {Container, ImageView, GuitarImage, AbsoluteView} from './styles';
import ModalTune from './ModalTune';

export default function NoteButton() {
  return (
    <Container>
      <ImageView>
        <GuitarImage source={require('./baseguitar.png')} />
        <AbsoluteView>
          <ModalTune value={'E'} />
          <ModalTune value={'A'} />
          <ModalTune value={'D'} />
          <ModalTune value={'G'} />
        </AbsoluteView>
      </ImageView>
    </Container>
  );
}
