/**
 * Typescript 声明文件
 * @author westsky Video模块管理多媒体视频相关能力，可用创建视频播放控件，直播推流控件等。
 * @description Html 5+ plus.ibeacon
 */

declare namespace plus.video {
  function createVideoPlayer(id: string, styles): VideoPlayer;
  interface VideoPlayer {
    // Methods
    addEventListener(event, listener, capture);
    setStyles(styles);
    play();
    pause();
    seek(position);
    requestFullScreen();
    exitFullScreen();
    stop();
    hide();
    show();
    close();
    sendDanmu(danmu);
    playbackRate(rate);
  }

  interface VideoPlayerStyles {}
}
