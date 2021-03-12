function AudioManagement(){
  this.AudioMode = {
      SILENT : 0,
      VIBRATE : 1,
      NORMAL : 2
  };

  this.VolumeType = {
    RING : 0,
    MUSIC : 1,
    NOTIFICATION : 2,
    SYSTEM : 3
  }
}

AudioManagement.prototype.setAudioMode = function(mode, onSuccess, onError){
  cordova.exec(onSuccess, onError, 'AudioManagement', 'setAudioMode', [mode]);
};

AudioManagement.prototype.getAudioMode = function(onSuccess, onError){
  cordova.exec(onSuccess, onError, 'AudioManagement', 'getAudioMode', []);
};

AudioManagement.prototype.setVolume = function(type, volume, onSuccess, onError){
  cordova.exec(onSuccess, onError, 'AudioManagement', 'setVolume', [type, volume]);
};

AudioManagement.prototype.getVolume = function(type, onSuccess, onError){
  cordova.exec(onSuccess, onError, 'AudioManagement', 'getVolume', [type]);
};

AudioManagement.prototype.getMaxVolume = function(type, onSuccess, onError){
  cordova.exec(onSuccess, onError, 'AudioManagement', 'getMaxVolume', [type]);
};

var audioManagement = new AudioManagement();
module.exports = audioManagement;
