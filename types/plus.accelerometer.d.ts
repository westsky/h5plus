// 作者：westsky/libuyu
// 更新日志：
// 1)接口已经校验，测试通过
//----------------------------------------------------------------------------

/**
 * Accelerometer模块
 * @description
 *    管理设备加速度传感器，用于获取设备加速度信息，
 *    <p>包括x（屏幕水平方向）、y（垂直屏幕水平方向）、z（垂直屏幕平面方向）三个方向的加速度信息。
 *    通过plus.accelerometer获取设备加速度传感器管理对象。
 * @permissions
 *    "Accelerometer": { "description": "加速度传感器" }
 */
declare namespace plus.accelerometer {
  /**
   * 获取当前设备的加速度信息
   * @param successCB :(acceleration: Acceleration) => void
   * @param errorCB :(error?: DOMException) => void;

   */
  function getCurrentAcceleration(
    successCB: AccelerometerSuccessCallback,
    errorCB?: AccelerometerErrorCallback
  ): void;
  /**
   * 监听设备加速度变化信息
   * @param successCB :(acceleration: Acceleration) => void
   * @param errorCB :(error?: DOMException) => void;
   * @param option  加速度信息参数,监听设备加速度信息的参数，如更新数据的频率等。
   */
  function watchAcceleration(
    successCB: AccelerometerSuccessCallback,
    errorCB?: AccelerometerErrorCallback,
    option?: AccelerometerOption
  ): number;

  /**
   * 关闭监听设备加速度信息;
   * @description 关闭监听设备加速度信息，应用关闭调用watchAcceleration方法的开启的监听操作。
   * @param watchId 需要取消的加速度监听器标识，调用watchAcceleration方法的返回值。
   */
  function clearWatch(watchId: number): void;
}

/**
 * 获取设备加速度信息成功的回调函数
 */
type AccelerometerSuccessCallback = (acceleration: Acceleration) => void;

/**
 * 获取设备加速度信息失败的回调函数
 */
type AccelerometerErrorCallback = (error?: DOMException) => void;

/**
 * 设备加速度信息对象
 * @description JSON对象，保存获取设备的加速度信息，包括x、y、z三个方向的加速度信息。
 */
interface Acceleration {
  /**
   * x轴方向的加速度
   * @description 获取当前设备x轴方向的加速度，浮点型数据，与物理学中的加速度值一致。
   */
  readonly xAxis: number;
  /**
   * y轴方向的加速度
   * @description 获取当前设备y轴方向的加速度，浮点型数据，与物理学中的加速度值一致。
   */
  readonly yAxis: number;
  /**
   * z轴方向的加速度
   * @description 获取当前设备z轴方向的加速度，浮点型数据，与物理学中的加速度值一致。
   */
  readonly zAxis: number;
}

/**
 * 监听设备加速度感应器参数
 */
interface AccelerometerOption {
  /**
   * 更新加速度信息间隔时间
   * @description 监听器获取加速度信息的时间间隔，单位为ms，默认值为500ms
   * @example frequency:1000
   */
  frequency: number;
}
