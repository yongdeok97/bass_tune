import React from 'react';
import MicStream from 'react-native-microphone-stream';
import pitchfinder from 'pitchfinder';
const A = 440;
const SEMITONE = 69;
const noteStrings = [
  'C',
  'C♯',
  'D',
  'D♯',
  'E',
  'F',
  'F♯',
  'G',
  'G♯',
  'A',
  'A♯',
  'B',
];

const getNote = freq => {
  const note = 12 * (Math.log(freq / A) / Math.log(2));
  return Math.round(note) + SEMITONE;
};
const getStandardFrequency = note => {
  return A * Math.pow(2, (note - SEMITONE) / 12);
};
const getCents = (frequency, note) => {
  return Math.floor(
    (1200 * Math.log(frequency / getStandardFrequency(note))) / Math.log(2),
  );
};

export function SoundAnalyze(props) {
  //   const [pitch, setPitch] = React.useState();
  // const dispatch = useDispatch();
  console.log(props);
  if (props === 1) {
    console.log('hello');
    MicStream.init({
      bufferSize: 4096,
      sampleRate: 44100,
      bitsPerChannel: 16,
      channelsPerFrame: 1,
    });
    MicStream.start();
  } else {
    MicStream.stop();
    return () => {
      listener.remove();
    };
  }
  // const dispatch = useDispatch();
  const listener = MicStream.addListener(data => {
    const detectPitch = new pitchfinder.YIN({
      sampleRate: 44100,
    });
    const floatArray = Float32Array.from(data);
    const detectedPitch = detectPitch(floatArray);
    console.log(`Detected pitch: ${detectedPitch}`);
    if (detectedPitch) {
      const freq = detectedPitch * 1.09;
      const note = getNote(freq);
      const cents = getCents(freq, note);
      const noteName = noteStrings[note % 12];
      const octave = parseInt(note / 12) - 1;
      // dispatch({type:'login', changeCurrentNote: { freq, cents, noteName, octave }})
      // Store.dispatch(changeCurrentNote({ freq, cents, noteName, octave }));
      console.log({freq}, {note}, {cents}, {noteName}, {octave});
    }
  });
}
