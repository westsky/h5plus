/**
 * accelerometer：功能测试
 */

//测试：getCurrentAcceleration
plus.accelerometer.getCurrentAcceleration(a => {
  console.log(a.xAxis);
  console.log(a.yAxis);
  console.log(a.zAxis);
});

//watchAcceleration
let watchId = plus.accelerometer.watchAcceleration(
  a => {
    console.log(a.xAxis);
    console.log(a.yAxis);
    console.log(a.zAxis);
  },
  err => {
    console.log(err.code + ":" + err.message);
  },
  {
    frequency: 1000
  }
);

//clearWatch
plus.accelerometer.clearWatch(watchId);
