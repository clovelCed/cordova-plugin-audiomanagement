# cordova-plugin-audiomanagement
A plugin to manage audio mode and volume

## Installation
`cordova plugin add clovelced-plugin-audiomanagement`

## Supported Platforms

- Android

## Methods
- Define the audio mode
```javascript
AudioManagement.setAudioMode(audioMode, onSuccess, onError);

// Example
AudioManagement.setAudioMode(AudioManagement.AudioMode.NORMAL, function(){}, function(){});
```

- Get the current audio mode
```javascript
AudioManagement.getAudioMode(onSuccess, onError);

AudioManagement.getAudioMode(function(result){
  console.log('Mode' + result.audioMode);     // will show '2'
  console.log('Label' + result.label);        // will show 'Normal'
}, onError);
```

### The audio mode
- `SILENT` = 0
- `VIBRATE` =1
- `NORMAL` = 2

### The volume type
- `RING` = 0
- `MUSIC` =1
- `NOTIFICATION` = 2
- `SYSTEM` = 3
