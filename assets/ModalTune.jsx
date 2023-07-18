import React, {useEffect, useState} from 'react';
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

import {Text} from 'react-native';

export default function ModalTune({value, curNote, onPress}) {
  const [showModal, setShowModal] = useState(false);
  const [noteNum, setNoteNum] = useState(150);
  const currentNote = useSelector(state => state.currentNote);

  useEffect(() => {
    const compareFre = {
      E: 41.2,
      A: 55,
      D: 73.4,
      G: 98,
    };
    console.log(curNote);

    setNoteNum(
      currentNote ? Math.floor(currentNote.freq - compareFre[curNote]) : 150,
    );
  }, [currentNote, curNote]);

  useEffect(() => {
    console.log('note', noteNum);
  }, [noteNum]);

  const handleClick = () => {
    setShowModal(true);
    onPress(value);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <ChordContainer>
      <ChordButton onPress={handleClick}>
        <ChordButtonLabel> {value} </ChordButtonLabel>
      </ChordButton>
      <Modal visible={showModal} animationType="slide" transparent={true}>
        <ModalContainer>
          <ModalSubContainer>
            {showModal && <SoundAnalyze />}
            <NoteContainer>
              <Note source={require('./note.png')} resizeMode="contain" />
              <CircleContainer
                rightValue={isNaN(noteNum) ? '0px' : `${150 - noteNum * 2}px`}>
                <Circle source={require('./circle.png')} resizeMode="contain" />
                <CircleText>
                  <Text>{Math.floor(noteNum / 5)}</Text>
                </CircleText>
              </CircleContainer>
            </NoteContainer>
          </ModalSubContainer>
        </ModalContainer>
        <ChordButton onPress={closeModal}>
          <ChordButtonLabel> 완료 </ChordButtonLabel>
        </ChordButton>
      </Modal>
    </ChordContainer>
  );
}
