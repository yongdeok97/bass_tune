import styled from 'styled-components'

// app.js
export const Container = styled.View`
  flex: 1;
  margin-top: 10%;
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
  background-color: grey;
  margin-top: 15px;
  margin-right: 15px;
  border-radius: 30px;
  border-width: 10px;
  border-color: gray;
`;
export const ChordButtonLabel = styled.Text`
  font-size: 40px;
`;
// modalTune.js-----------