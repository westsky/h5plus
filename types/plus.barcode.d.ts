// 作者：westsky/libuyu
// 更新日志：
// 1)接口已经校验，测试通过
//----------------------------------------------------------------------------

/**
 * barcode模块
 * @description 管理条码扫描，支持常见的条码（一维码及二维码）的扫描识别功能。
 *  可调用设备的摄像头对条码图片扫描进行数据输入，
 *  解码后返回码数据及码类型。通过plus.barcode可获取条码码管理对象。
 */

declare namespace plus.barcode {
  //QR: 条码类型常量，QR二维码，数值为0
  const QR = 0;
  //EAN13: 条码类型常量，EAN一维条形码码标准
  const EAN13 = 1;
  //EAN8: 条码类型常量，ENA一维条形码简版，数值为2
  const EAN8 = 2;
  // AZTEC: 条码类型常量，Aztec二维码，数值为3
  const AZTEC = 3;
  // DATAMATRIX: 条码类型常量，Data Matrix二维码，数值为4
  const DATAMATRIX = 4;
  //UPCA: 条码类型常量，UPC码标准版，数值为5
  const UPCA = 5;
  // UPCE: 条码类型常量，UPC码缩短版，数值为6
  const UPCE = 6;
  //CODABAR: 条码类型常量，Codabar码，数值为7
  const CODABAR = 7;
  // CODE39: 条码类型常量，Code39一维条形码，数值为8
  const CODE39 = 8;
  //CODE93: 条码类型常量，Code93码，数值为9
  const CODE93 = 9;
  //CODE128: 条码类型常量，Code128码，数值为10
  const CODE128 = 10;
  // ITF: 条码类型常量，ITF码，数值为11
  const ITF = 11;
  // MAXICODE: 条码类型常量，MaxiCode二维码，数值为12
  const MAXICODE = 12;
  //PDF417: 条码类型常量，PDF 417码，数值为13
  const PDF417 = 13;
  //RSS14: 条码类型常量，RSS 14组合码，数值为14
  const RSS14 = 14;
  //RSSEXPANDED: 条码类型常量，扩展式RSS组合码，数值为15
  const RSSEXPANDED = 15;

  /**
   * 通过图片扫码识别
   * @description
   *      直接输入图片扫码识别
   *      成功扫描到条码数据后通过successCallback回调返回，
   *      失败则通过errorCallback回调返回。
   * @param path 扫码的图片路径，
   *             图片路径必须是本地文件地址，如URLType类型（如以"_www"、"_doc"、"_documents"、"_downloads"开头的相对URL路径）或者系统绝对路径。
   * @param successCB
   * @param errorCB
   * @param filters 识别的条码类型过滤器，为条码类型常量数组
   *        条码识别引擎可支持多种二维码及一维码类型，默认情况支持QR、EAN13、EAN8三种类型。<br>
   *        可通过此参数设置需要支持的更多条码类型（注意：设置支持的条码类型越多，扫描识别效率将会降低）。
   */
  function scan(
    path: string,
    successCB?: BarcodeSuccessCallback,
    errorCB?: BarcodeErrorCallback,
    filters?: Array<number>
  ): void;

  /**
   *
   * @description 调用此方法创建后并不会显示，
   *             需要调用Webview窗口的append方法将其添加到Webview窗口后才能显示。
   *            注意：此时需要通过styles参数的top/left/width/height属性设置控件的位置及大小。
   */
  class Barcode {
    constructor(id: string, filters?: Array<number>, styles?: BarcodeStyles);

    /**
     * 开始条码识别
     * @param options
     */
    start(options?: BarcodeOptions): void;
    /**
     * 结束条码识别
     */
    cancel(): void;
    /**
     * 关闭条码识别控件
     */
    close(): void;
    /**
     * 是否开启闪光灯
     * @param open
     */
    setFlash(open?: boolean): void;

    // Events
    onmarked: BarcodeSuccessCallback;
    onerror: BarcodeErrorCallback;
  }

  interface BarcodeOptions {
    /**
     * 是否保存成功扫描到的条码数据时的截图
     * @description 如果设置为true则在成功扫描到条码数据时将图片保存，并通过onmarked回调函数的file参数返回保存文件的路径。默认值为false，不保存图片。
     */
    conserve?: boolean;
    /**
     * 保存成功扫描到的条码数据时的图片路径
     * @description 可通过此参数设置保存截图的路径或名称，如果设置图片文件名称则必须指定文件的后缀名（必须是.png），否则认为是指定目录，文件名称则自动生成
     */
    filename?: string;
    /**
     * 成功扫描到条码数据时是否需要震动提醒
     * @description 如果设置为true则在成功扫描到条码数据时震动设备，false则不震动。默认值为true。
     */
    vibrate?: string;
    /**
     * 成功扫描到条码数据时播放的提示音类型
     * @description 可取值： "none" - 不播放提示音； "default" - 播放默认提示音（5+引擎内置）。 默认值为"default"。
     */
    sound?: string;
  }
}

interface BarcodeStyles {
  //frameColor: (string 类型 )扫描框颜色
  frameColor?: string;
  //scanbarColor: (string 类型 )扫描条颜色
  scanbarColor?: string;
  //background: (string 类型 )条码识别控件背景颜色
  background?: string;
}

//------------------------------------------------------------
type BarcodeSuccessCallback = (
  type: number,
  code: string,
  file?: string
) => void;

type BarcodeErrorCallback = (error?: DOMException) => void;
