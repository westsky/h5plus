/**
 * Key管理设备按键事件
 * @author westsky
 * @description Html 5+ plus.key
 * @access
    {
    // ...
    "permissions":{
        // ...
        "Webview": {
            "description": "窗口管理"
        }
    }
    }
 */

declare namespace plus.key {
  function addEventListener(keyevent, listener, capture);
  function hideSoftKeybord();
  function setAssistantType(type);
  function showSoftKeybord();
  function removeEventListener(event, listener);

  interface KeyType {
    backbutton: string; //: (string 类型 ) 设备“返回”按钮按键事件
    keydown: string;
    keyup: string;
    longpressed: string;
    menubutton: string;
    searchbutton: string;
    volumeupbutton: string;
    volumedownbutton: string;
  }

  interface KeyEvent {
    keyCode: number;
    keyType: KeyType;
  }

  interface KeyEventCallback {
    onKeyEvent(event: KeyEvent);
  }
}
