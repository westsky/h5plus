/**
 * Typescript 声明文件
 * @author westsky Video模块管理多媒体视频相关能力，可用创建视频播放控件，直播推流控件等。
 * @description Html 5+ plus.ibeacon
 */

declare namespace plus.zip {
  function compress(
    src: string,
    zipfile: string,
    successCB: ZipSuccessCallback,
    errorCB?: ZipErrorCallback
  );
  function decompress(
    zipfile: string,
    target: string,
    successCB: ZipSuccessCallback,
    errorCB?: ZipErrorCallback
  );

  function compressImage(
    options: CompressImageOptions,
    successCB: CompressImageSuccessCallback,
    errorCB?: ZipErrorCallback
  );
}
interface CompressImageOptions {
  clip: ClipImageOptions;
}
interface ClipImageOptions {}
interface CompressImageSuccessCallback {}

interface ZipSuccessCallback {}
interface ZipErrorCallback {
  (error?: DOMException): void;
}
