// SoundAnalyze.js
import React from 'react';
import {useDispatch} from 'react-redux';
import MicStream from 'react-native-microphone-stream';
import pitchfinder from 'pitchfinder';
import {changeCurrentNote} from '../Actions/actions';

const A = 440;
const SEMITONE = 69;
const noteStrings = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B',
];

const getNote = freq => {
  const note = Math.round(12 * (Math.log2(freq / A) + 1));
  return (note + SEMITONE) % 12;
};

const getStandardFrequency = note => {
  return A * Math.pow(2, (note - SEMITONE) / 12);
};

const getCents = (frequency, note) => {
  return Math.floor(
    (1200 * Math.log(frequency / getStandardFrequency(note))) / Math.log(2),
  );
};

export function SoundAnalyze() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    let listener;

    const startListening = () => {
      MicStream.init({
        bufferSize: 4096,
        sampleRate: 44100,
        bitsPerChannel: 16,
        channelsPerFrame: 1,
      });
      MicStream.start();

      listener = MicStream.addListener(data => {
        const detectPitch = new pitchfinder.YIN({
          sampleRate: 44100,
        });
        const floatArray = Float32Array.from(data);
        const detectedPitch = detectPitch(floatArray);
        if (detectedPitch) {
          const freq = detectedPitch;
          const note = getNote(freq);
          const cents = getCents(freq, note);
          const noteName = noteStrings[note % 12];
          const octave = parseInt(note / 12) - 1;
          dispatch(changeCurrentNote({freq, cents, noteName, octave}));
          // console.log(freq, note, cents, noteName, octave);
        }
      });
    };

    const stopListening = () => {
      if (listener) {
        listener.remove();
        MicStream.stop();
      }
    };

    startListening();

    return () => {
      stopListening();
    };
  }, [dispatch]);

  return null;
}
