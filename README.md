# cordova-plugin-audiomanagement
A plugin to manage audio mode and volume

## Installation
`cordova plugin add clovelced-plugin-audiomanagement`

## Supported Platforms

- Android

## AUDIO MODE
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
- `AudioManagement.AudioMode.SILENT` = 0
- `AudioManagement.AudioMode.VIBRATE` = 1
- `AudioManagement.AudioMode.NORMAL` = 2

## VOLUME
- Set the volume
```javascript
AudioManagement.setVolume(type, volume, onSuccess, onError);

// Example
AudioManagement.setVolume(AudioManagement.VolumeType.RING, 10, function(){}, function(){});
```

- Get the volume of a stream
```javascript
AudioManagement.getVolume(type, onSuccess, onError);

AudioManagement.getVolume(AudioManagement.VolumeType.RING, function(result){  
  console.log('Volume' + result.volume);        // will show '12'
}, onError);
```

- Get the max volume of a stream
```javascript
AudioManagement.getMaxVolume(type, onSuccess, onError);

AudioManagement.getMaxVolume(AudioManagement.VolumeType.RING, function(result){  
  console.log('Max volume' + result.maxVolume);        // will show '15'
}, onError);
```

### The volume type
- `AudioManagement.VolumeType.RING` = 0
- `AudioManagement.VolumeType.MUSIC` = 1
- `AudioManagement.VolumeType.NOTIFICATION` = 2
- `AudioManagement.VolumeType.SYSTEM` = 3
