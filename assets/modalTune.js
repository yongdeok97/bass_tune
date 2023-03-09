import React from 'react';
import {Modal} from 'react-native';
import styled from 'styled-components';
import GaugeTune from './gaugeTune'

// import {SoundAnalyze} from './Sound';
// import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';

const Container = styled.SafeAreaView``;
const GuageContainer = styled.View`
  align-items: center;
`;

const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  flex-direction: row;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;
const ModalSubContainer = styled.View`
  background-color: gray;
  width: 100%;
  flex: 1;
`;
const DumButton = styled.TouchableOpacity`
  background-color: grey;
  margin-top: 15px;
  margin-right: 15px;
  border-radius: 30px;
  border-width: 10px;
  border-color: gray;
`;
const DomButtonLabel = styled.Text`
  font-size: 40px;
`;

const DumText = styled.Text`
  font-size: 20px;
`;

export default function ModalTune(props) {
  const [showModal, setShowModal] = React.useState(false);
  const [soundInfo, setSoundInfo] = React.useState([]);

  // const dispatch = useDispatch();

  // function getSound(state)
  // {
  //   // console.log({freq}, {note}, {cents}, {noteName}, {octave});
  //   return(state.freq)
  // }
  // setSoundInfo(getSound);

  React.useEffect(() => {}, [showModal]);

  return (
    <Container>
      <DumButton
        onPress={() => {
          //   SoundAnalyze(1);
          setShowModal(true);
        }}>
        <DomButtonLabel> {props.value} </DomButtonLabel>
      </DumButton>
      <Modal visible={showModal} animationType="slide" transparent={true}>
        <ModalContainer>
          <ModalSubContainer>
            <GuageContainer>
              <GaugeTune value={showModal}></GaugeTune>
            </GuageContainer>
          </ModalSubContainer>
        </ModalContainer>
        <DumButton
          onPress={() => {
            // SoundAnalyze(0);
            setShowModal(!showModal);
          }}>
          <DomButtonLabel> 던 </DomButtonLabel>
        </DumButton>
      </Modal>
    </Container>
  );
}
