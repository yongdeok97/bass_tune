import React, {useState} from 'react';
import {Container, ImageView, GuitarImage, AbsoluteView} from './styles';
import ModalTune from './ModalTune';

export default function NoteButton() {
  const [curNote, setCurNote] = useState('');

  const handleModalTunePress = buttonValue => {
    setCurNote(buttonValue);
  };

  return (
    <Container>
      <ImageView>
        <GuitarImage source={require('./baseguitar.png')} />
        <AbsoluteView>
          <ModalTune
            value={'E'}
            curNote={curNote}
            onPress={() => handleModalTunePress('E')}
          />
          <ModalTune
            value={'A'}
            curNote={curNote}
            onPress={() => handleModalTunePress('A')}
          />
          <ModalTune
            value={'D'}
            curNote={curNote}
            onPress={() => handleModalTunePress('D')}
          />
          <ModalTune
            value={'G'}
            curNote={curNote}
            onPress={() => handleModalTunePress('G')}
          />
        </AbsoluteView>
      </ImageView>
    </Container>
  );
}
