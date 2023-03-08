import React, {useState, useEffect} from 'react';
import {PERMISSIONS, request} from 'react-native-permissions';
import styled from 'styled-components';
import ModalTune from './assets/modalTune';
// import {Provider, useSelector, useDispatch} from 'react-redux'

// state를 어떻게 바꿀것인가. 2개의 파라미터를 받음 ,현재 상태와, 어떻게 바꿀것인지에 대한 액션.


// const initialState = {
//   currentNote: { noteName: "", cents: "", freq: "", octave: "" }
// };


/**
 * STYLING
 */
const Container = styled.View`
  flex: 1;
  margin-top: 10%;
`;
const Dum = styled.View``;
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

const ImageView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
const GuitarImage = styled.Image`
  height: 100%;
  width: 100%;
  /* background-color: gray; */
`;

const AbsoluteView = styled.View`
  position: absolute;
  flex-direction: column;
`;

export default function App() {
  // const [recording, setRecording] = useState(false);

  // function toggleRecord() {
  //   if (recording) {
  //     console.log('starting mic');
  //     MicStream.start();
  //   } else {
  //     console.log('stopping mic');
  //     MicStream.stop();
  //   }
  // }

  useEffect(() => {
    const requestPermission = () => {
      request(PERMISSIONS.IOS.MICROPHONE).then(response => {
        console.log(response);
      });
    };
    requestPermission();
  }, []);
  // useEffect(() => {}, [recording]);

  return (
    // <Provider>
      <Container>
        <ImageView>
          <GuitarImage source={require('./assets/baseguitar.png')} />
          <AbsoluteView>
            <ModalTune value={'E'}></ModalTune>
            <ModalTune value={'A'}></ModalTune>
            <ModalTune value={'D'}></ModalTune>
            <ModalTune value={'G'}></ModalTune>
          </AbsoluteView>
        </ImageView>
      </Container>
    // </Provider>
  );
}
