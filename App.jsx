import React, {useState, useEffect} from 'react';
import {PERMISSIONS, request} from 'react-native-permissions';
import NoteButton from './assets/NoteButton';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './Reducer/reducer';

export default function App() {
  const store = createStore(rootReducer);
  const [recording, setRecording] = useState(false);

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
    <Provider store={store}>
      <NoteButton />
    </Provider>
  );
}
