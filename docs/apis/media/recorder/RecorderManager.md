---
title: RecorderManager
sidebar_label: RecorderManager
---

全局唯一的录音管理器

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.html)

## 方法

### onError

监听录音错误事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onError.html)

```tsx
(callback: OnErrorCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `OnErrorCallback` | 录音错误事件的回调函数 |

### onFrameRecorded

监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onFrameRecorded.html)

```tsx
(callback: OnFrameRecordedCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `OnFrameRecordedCallback` | 已录制完指定帧大小的文件事件的回调函数 |

### onInterruptionBegin

监听录音因为受到系统占用而被中断开始事件。以下场景会触发此事件：微信语音聊天、微信视频聊天。此事件触发后，录音会被暂停。pause 事件在此事件后触发

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onInterruptionBegin.html)

```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(res: TaroGeneral.CallbackResult) => void` | 录音因为受到系统占用而被中断开始事件的回调函数 |

### onInterruptionEnd

监听录音中断结束事件。在收到 interruptionBegin 事件之后，小程序内所有录音会暂停，收到此事件之后才可再次录音成功。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onInterruptionEnd.html)

```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(res: TaroGeneral.CallbackResult) => void` | 录音中断结束事件的回调函数 |

### onPause

监听录音暂停事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onPause.html)

```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(res: TaroGeneral.CallbackResult) => void` | 录音暂停事件的回调函数 |

### onResume

监听录音继续事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onResume.html)

```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(res: TaroGeneral.CallbackResult) => void` | 录音继续事件的回调函数 |

### onStart

监听录音开始事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onStart.html)

```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(res: TaroGeneral.CallbackResult) => void` | 录音开始事件的回调函数 |

### onStop

监听录音结束事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onStop.html)

```tsx
(callback: OnStopCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `OnStopCallback` | 录音结束事件的回调函数 |

### pause

暂停录音

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.pause.html)

```tsx
() => void
```

### resume

继续录音

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.resume.html)

```tsx
() => void
```

### start

开始录音

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.start.html)

```tsx
(option: StartOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `StartOption` |

### stop

停止录音

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.stop.html)

```tsx
() => void
```

## 参数

### OnErrorCallback

录音错误事件的回调函数

```tsx
(result: OnErrorCallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `OnErrorCallbackResult` |

### OnErrorCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` | 错误信息 |

### OnFrameRecordedCallback

已录制完指定帧大小的文件事件的回调函数

```tsx
(result: OnFrameRecordedCallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `OnFrameRecordedCallbackResult` |

### OnFrameRecordedCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| frameBuffer | `ArrayBuffer` | 录音分片数据 |
| isLastFrame | `boolean` | 当前帧是否正常录音结束前的最后一帧 |

### OnStopCallback

录音结束事件的回调函数

```tsx
(result: OnStopCallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `OnStopCallbackResult` |

### OnStopCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| duration | `number` | 录音总时长，单位：ms |
| fileSize | `number` | 录音文件大小，单位：Byte |
| tempFilePath | `string` | 录音文件的临时路径 |

### StartOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| audioSource | `keyof AudioSource` | 否 | 指定录音的音频输入源，可通过 [Taro.getAvailableAudioSources()](/docs/apis/media/audio/getAvailableAudioSources) 获取当前可用的音频源 |
| duration | `number` | 否 | 录音的时长，单位 ms，最大值 600000（10 分钟） |
| encodeBitRate | `number` | 否 | 编码码率，有效值见下表格 |
| format | `keyof Format` | 否 | 音频格式 |
| frameSize | `number` | 否 | 指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3 格式。 |
| numberOfChannels | `keyof NumberOfChannels` | 否 | 录音通道数 |
| sampleRate | `keyof SampleRate` | 否 | 采样率 |

### AudioSource

指定录音的音频输入源

| 参数 | 说明 |
| --- | --- |
| auto | 自动设置，默认使用手机麦克风，插上耳麦后自动切换使用耳机麦克风，所有平台适用 |
| buildInMic | 手机麦克风，仅限 iOS |
| headsetMic | 耳机麦克风，仅限 iOS |
| mic | 麦克风（没插耳麦时是手机麦克风，插耳麦时是耳机麦克风），仅限 Android |
| camcorder | 同 mic，适用于录制音视频内容，仅限 Android |
| voice_communication | 同 mic，适用于实时沟通，仅限 Android |
| voice_recognition | 同 mic，适用于语音识别，仅限 Android |

### Format

音频格式

| 参数 | 说明 |
| --- | --- |
| mp3 | mp3 格式 |
| aac | aac 格式 |
| wav | wav 格式 |
| PCM | pcm 格式 |

### NumberOfChannels

录音通道数

| 参数 | 说明 |
| --- | --- |
| 1 | 1 个通道 |
| 2 | 2 个通道 |

### SampleRate

采样率

| 参数 | 说明 | 编码码率 |
| --- | --- | --- |
| 8000 | 8000 采样率 | `16000 ~ 48000` |
| 11025 | 11025 采样率 | `16000 ~ 48000` |
| 12000 | 12000 采样率 | `24000 ~ 64000` |
| 16000 | 16000 采样率 | `24000 ~ 96000` |
| 22050 | 22050 采样率 | `32000 ~ 128000` |
| 24000 | 24000 采样率 | `32000 ~ 128000` |
| 32000 | 32000 采样率 | `48000 ~ 192000` |
| 44100 | 44100 采样率 | `64000 ~ 320000` |
| 48000 | 48000 采样率 | `64000 ~ 320000` |

## API 支持度

| API | 微信小程序 | H5 | React Native |
| :---: | :---: | :---: | :---: |
| RecorderManager.onError | ✔️ |  | ✔️ |
| RecorderManager.onFrameRecorded | ✔️ |  |  |
| RecorderManager.onInterruptionBegin | ✔️ |  |  |
| RecorderManager.onInterruptionEnd | ✔️ |  |  |
| RecorderManager.onPause | ✔️ |  | ✔️ |
| RecorderManager.onResume | ✔️ |  | ✔️ |
| RecorderManager.onStart | ✔️ |  | ✔️ |
| RecorderManager.onStop | ✔️ |  | ✔️ |
| RecorderManager.pause | ✔️ |  | ✔️ |
| RecorderManager.resume | ✔️ |  | ✔️ |
| RecorderManager.start | ✔️ |  | ✔️ |
| RecorderManager.stop | ✔️ |  | ✔️ |
