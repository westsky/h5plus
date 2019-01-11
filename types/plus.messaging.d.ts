/**
 * Typescript 声明文件
 * @author westsky
 * @description Html 5+ plus.messaging
 */

/**
 * Messaging模块管理设备通讯功能，可用于短信、彩信、邮件发送等。
 * @description
 * 通过plus.messaging可获取设备通讯管理对象。另外也可以直接通过html中的href直接快速发送短信、拨打电话、发送邮件等。
 */
declare namespace plus.messaging {
  const TYPE_SMS: number;
  const TYPE_MMS: number;
  const TYPE_EMAIL: number;

  /**
   * 创建消息对象
   * @param type消息类型
        要创建的消息类型常量，可取
        plus.messaging.TYPE_SMS、
        plus.messaging.TYPE_MMS、
        plus.messaging.TYPE_EMAIL。
   */
  function createMessage(type: number): Message;

  /**
   * 发送消息，发送成功回调successCB函数，发送失败回调errorCB函数。
   * @param msg
   * @param successCB
   * @param errorCB
   */
  function sendMessage(
    msg: Message,
    successCB: MessageSendSuccessCallback,
    errorCB?: MessageErrorCallback
  ): void;

  interface Message {
    /**
     * 收件人信息;
     */
    to: Array<string>;

    /**
     * 抄送人信息;
     */
    cc: Array<string>;
    /**
     * 暗送人信息;
     */
    bcc: Array<string>;
    /**
     * 发件人信息;
     */
    from: Array<string>;
    /**
     * 发送消息主题;
     */
    subject: string;
    /**
     * 发送消息内容;
     */
    body: string;

    /**
     * 消息体内容类型
     */
    bodyType: string;

    /**
     * 是否采用静默方式发送消息;
     */
    silent: boolean;

    /**
     * 添加附件
     * @param url
     */
    addAttachment(url: string);
  }

  interface MessageSendSuccessCallback {
    onSuccess(): void;
  }
  interface MessageErrorCallback {
    (error?: DOMException): void;
  }
}
