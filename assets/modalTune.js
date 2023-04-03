import React from 'react';
import {Modal} from 'react-native';
import GaugeTune from './gaugeTune';
import {SoundAnalyze} from './Sound';
import { useSelector } from 'react-redux';

import {
  ChordContainer,
  ModalContainer,
  ModalSubContainer,
  ChordButton,
  ChordButtonLabel
} from './styles'

export default function ModalTune(props) {
  const [showModal, setShowModal] = React.useState(false);
  const [soundInfo, setSoundInfo] = React.useState([]);
  let number = useSelector((state) => state.currentNote)
  console.log("hello" + number)
  React.useEffect(() => {}, [showModal]);

  return (
    <ChordContainer>
      <ChordButton
        onPress={() => {
          SoundAnalyze(1);
          setShowModal(true);
        }}>
        <ChordButtonLabel> {props.value} </ChordButtonLabel>
      </ChordButton>
      <Modal visible={showModal} animationType="slide" transparent={true}>
        <ModalContainer>
          <ModalSubContainer>
              <GaugeTune value={showModal}></GaugeTune>
          </ModalSubContainer>
        </ModalContainer>
        <ChordButton
          onPress={() => {
            SoundAnalyze(0);
            setShowModal(!showModal);
          }}>
          <ChordButtonLabel> 던 </ChordButtonLabel>
        </ChordButton>
      </Modal>
    </ChordContainer>
  );
}
