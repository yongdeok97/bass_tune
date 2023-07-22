import styled from 'styled-components';
import {ImageBackground} from 'react-native';
// app.js
export const Container = styled.View`
  flex: 1;
  margin-top: 10%;
  background-color: #804ba9;
`;
export const ImageView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
export const GuitarImage = styled.Image`
  height: 100%;
  width: 100%;
`;

export const AbsoluteView = styled.View`
  position: absolute;
  flex-direction: column;
  right: 10px;
`;
// app.js-----------

// modalTune.js
export const ChordContainer = styled.SafeAreaView``;
export const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  flex-direction: row;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const ModalSubContainer = styled.View`
  background-color: gray;
  width: 100%;
  flex: 1;
`;
export const ChordButton = styled.TouchableOpacity`
  background-color: white;
  margin-top: 15px;
  /* margin-right: 13px; */
  border-radius: 15px;
  border-width: 4px;
  border-color: #642cbf;
  justify-content: center;
  align-items: center; // 수평, 수직 중앙 정렬
`;
export const ChordButtonLabel = styled.Text`
  font-size: 40px;
`;

export const NoteContainer = styled.View`
  position: relative;
  width: 100%;
  height: 30%;
  background-color: white;
  justify-content: center; // 배경 이미지를 수직 중앙에 위치시킴
  align-items: center; // 배경 이미지를 수평 중앙에 위치시킴
`;

export const Note = styled(ImageBackground)`
  width: 100%;
  height: 100%;
`;

export const CircleContainer = styled.View`
  position: absolute;
  width: 65px;
  height: 55px;
  top: 40%;
  right: ${props => props.rightValue || 0};
`;

export const Circle = styled(ImageBackground)`
  width: 100%;
  height: 100%;
`;

export const CircleText = styled.View`
  position: absolute;
  left: 25px;
  top: 16px;
`;

// modalTune.js-----------
