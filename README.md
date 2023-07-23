# <span id="top">🎵🎶 Bass Tune </span>
![image](https://github.com/yongdeok97/bass_tune/blob/main/ios/bass_tune/Images.xcassets/Image.imageset/splashnote.png)


## <span id="app">서비스 소개</span>
### 어디서나 베이스 조율을 할 수 있는 프로그램
* 🎶 어디서든 새로운 사람들과 함께 베이스 튜닝을 즐겨보세요! 🎸<br>
* 함께라면, 더욱 깊이 있는 음악 여정이 펼쳐집니다. 지금 바로 시작해보세요, 당신의 멋진 연주를 기다리고 있습니다. 🎶✨
<br/>

## <span id="tree">프로젝트 구조</span>
```
Actions
├── actionTypes.jsx
└── actions.jsx
assets
├── baseguitar.png
├── circle.png
└── note.png
components
├── GaugeTune.jsx
├── ModalTune.jsx
├── NoteButton.jsx
├── Sound.jsx
└── style
    └── styles.jsx
Reducer
└── reducer.jsx
App.jsx
```

## <span id="issues">핵심 코드</span>
### API PitchFinder, MicStream
#### PitchFiner
* pitchfinder는 JavaScript 라이브러리로, 오디오 데이터를 분석하여 음의 기본 주파수(피치)를 감지하는 기능을 제공합니다.
* 이 라이브러리는 음악 관련 애플리케이션에서 음표나 오디오 신호의 피치를 식별하는 데에 자주 사용됩니다.

기능:

다양한 피치 감지 알고리즘 제공
다양한 샘플 레이트 및 설정 지원
오디오 스트림과 쉽게 통합 가능

#### MicStream

* MicStream은 JavaScript 라이브러리로, 웹 브라우저에서 마이크로폰 스트림을 쉽게 캡처하고 음성 데이터를 처리할 수 있는 기능을 제공합니다.
* 이 라이브러리를 사용하면 웹 애플리케이션에서 사용자의 마이크로폰으로부터 오디오 스트림을 캡처하고 이를 분석, 처리할 수 있습니다.

기능:

웹 브라우저의 마이크로폰 스트림 캡처
오디오 스트림의 데이터를 버퍼에 저장
오디오 데이터에 대한 이벤트 리스너 제공
마이크로폰 스트림의 시작과 중지 제어

```
useEffect(() => {
  let listener = null;

  // 마이크 스트림을 시작하는 함수
  const startListening = () => {
    MicStream.init({
      bufferSize: 4096,
      sampleRate: 44100,
      bitsPerChannel: 16,
      channelsPerFrame: 1,
    });
    MicStream.start();

    // 마이크 스트림의 데이터를 리스닝하고 음높이를 감지하는 리스너 등록
    listener = MicStream.addListener(data => {
      const detectPitch = new pitchfinder.YIN({
        sampleRate: 44100,
      });
      const floatArray = Float32Array.from(data);
      const detectedPitch = detectPitch(floatArray);
      if (detectedPitch) {
        // 음높이 정보 계산 및 Redux를 사용하여 상태 업데이트
        const freq = detectedPitch;
        const note = getNote(freq);
        const cents = getCents(freq, note);
        const noteName = noteStrings[note % 12];
        const octave = parseInt(note / 12) - 1;
        dispatch(changeCurrentNote({freq, cents, noteName, octave}));
      }
    });
  };

  // 마이크 스트림을 정지하는 함수
  const stopListening = () => {
    if (listener) {
      listener.remove();
      listener = null;
      MicStream.stop();
    }
  };

  // 컴포넌트가 마운트될 때 스트림 시작
  startListening();

  // 컴포넌트가 언마운트될 때 스트림 정지
  return () => {
    stopListening();
  };
}, [dispatch]);
```
## <span id="usage">사용 방법</span>

```
git clone https://github.com/yongdeok97/bass_tune.git
npm i
cd ios
pod install
npx react-native run-ios
```
