import React, {useEffect} from 'react';
import {Modal} from 'react-native';
import {useSelector} from 'react-redux';
import {SoundAnalyze} from './Sound';
import {
  ChordContainer,
  ModalContainer,
  ModalSubContainer,
  ChordButton,
  ChordButtonLabel,
  Note,
  NoteContainer,
  CircleContainer,
  Circle,
  CircleText,
} from './styles';

import {Text, Image} from 'react-native';

export default function ModalTune(props) {
  const [showModal, setShowModal] = React.useState(false);
  const [curNote, setCurNote] = React.useState('');
  const [noteNum, setNoteNum] = React.useState(150);
  const currentNote = useSelector(state => state.currentNote);

  useEffect(() => {
    const compareFre = {
      E: 41.2,
      A: 55,
      D: 73.4,
      G: 98,
    };
    setNoteNum(
      currentNote ? Math.floor(currentNote.freq) - compareFre[curNote] : 0,
    );
  }, [currentNote]);

  useEffect(() => {
    console.log('note', noteNum);
  }, [noteNum]);

  const handleClick = () => {
    setShowModal(true);
    setCurNote(props.value);
  };

  return (
    <ChordContainer>
      <ChordButton onPress={handleClick}>
        <ChordButtonLabel> {props.value} </ChordButtonLabel>
      </ChordButton>
      <Modal visible={showModal} animationType="slide" transparent={true}>
        <ModalContainer>
          <ModalSubContainer>
            {showModal && <SoundAnalyze />}
            <NoteContainer>
              <Note source={require('./note.png')} resizeMode="contain" />
              <CircleContainer rightValue={`${150 - noteNum * 2}px`}>
                <Circle source={require('./circle.png')} resizeMode="contain" />
                <CircleText>
                  <Text>{Math.floor(noteNum / 5)}</Text>
                </CircleText>
              </CircleContainer>
            </NoteContainer>
          </ModalSubContainer>
        </ModalContainer>
        <ChordButton onPress={() => setShowModal(false)}>
          <ChordButtonLabel> 완료 </ChordButtonLabel>
        </ChordButton>
      </Modal>
    </ChordContainer>
  );
}

// 300 ~ 0
// 어떻게 해야 좋을까?
