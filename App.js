import React, {useState, useEffect} from 'react';
import {PERMISSIONS, request} from 'react-native-permissions';
import ModalTune from './assets/modalTune';
import {Container, ImageView, GuitarImage, AbsoluteView} from './assets/styles';

import {Provider, useSelector, useDispatch} from 'react-redux';
import {createStore} from 'redux';

// 액션 불러와야함
export const changeCurrentNote = note => ({
  type: "CHANGE_CURRENT_NOTE",
  currentNote: note
});

const initialState = {
  currentNote: { noteName: "", cents: "", freq: "", octave: "" }
};

const NoteListener = (state = initialState, action) => {
  switch (action.type) {
    case "ChangeNote":
      return {
        ...state,
        currentNote: action.currentNote
      };
    default:
      return state;
  }
};

export const Store = createStore(NoteListener);

export default function App() {
  const [recording, setRecording] = useState(false);

  
  // console.log("hello" + note)

  useEffect(() => {
    const requestPermission = () => {
      request(PERMISSIONS.IOS.MICROPHONE).then(response => {
        console.log(response);
      });
    };
    requestPermission();
  }, []);
  useEffect(() => {}, [recording]);

  return (
    <Provider store = {Store}>
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
    </Provider>
  );
}
