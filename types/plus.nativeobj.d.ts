/**
 * nativeObj管理系统原生对象。
 * Typescript 声明文件
 * @author westsky
 * @description Html 5+ plus.messaging
 */

declare namespace plus.nativeObj {
  interface AnimationOptions {
    type: string;
    duration: number;
  }

  interface AnimationViewStyles {
    bitmap: Bitmap;
    text: string;
  }
  class Bitmap {
    constructor(id: string, path: string);
    readonly id: string;

    static getItems(): Array<Bitmap>;
    static getBitmapById(id): Bitmap;

    clear();
    load(path, succesCallback, errorCallback);
    loadBase64Data(data, successCallback, errorCallback);
    save(path, options, successCallback, errorCallback);
    toBase64Data(): string;
  }

  interface BitmapSaveOptions {
    overwrite: boolean;
    format: string;
    quality: number;
    clip: Rect;
  }

  class View {
    readonly id: string;

    static startAnimation(options, view, otherview, callback): void;
    static clearAnimation(type): void;
    static getViewById(id): View;

    constructor(id, styles, tags);

    addEventListener(event, listener, capture);
    animate(options, callback);
    close();
    clearRect(position, id);
    draw(tags);
    drawBitmap(src, sprite, position, id);
    drawRect(color, position, id);
    drawText(text, position, styles, id);
    drawRichText(text, position, styles, id);
    drawInput(position, styles, id);
    getInputFocusById(id): boolean;
    getInputValueById(id): string;
    reset();
    restore();
    show();
    setInputFocusById(id, focusable);
    setStyle(styles);
    setTouchEventRect(rect);
    hide();
    interceptTouchEvent(intercept);
    isVisible(): boolean;
  }

  interface ViewAnimationOptions {
    type: string;
    duration: number;
    frames: number;
    region: Rect;
  }

  interface ViewDrawTagStyles {
    id: string;
    tag: string;
    color: string;
    inputStyles: InputStyles;
    position: Position;
    rectStyles: RectStyles;
    src: string;
    sprite: Position;
    text: string;
    textStyles: TextStyles;
    richTextStyles: RichTextStyles;
  }

  interface ViewStyles {
    backgroundColor: string;
    left: string;
    top: string;
    bottom: string;
    height: string;
    width: string;
    dock: string;
    opacity: number;
    position: string;
    //statusbar: ViewStatusbarStyles | any; //这里文档有错的
  }
  interface InputStyles {
    type: string;
    placeholder: string;
    fontSize: string;
    borderWidth: string;
    borderColor: string;
    borderRadius: string;
    onComplete();
    onFocus();
    onBlur();
  }

  interface TextStyles {
    align: string;
    color: string;
    family: string;
    size: string;
    style: string;
    weight: string;
    fontSrc: string;
    overflow: string;
  }
  interface ViewEvents {
    doubleclick: string;
    click: string;
    touchstart: string;
    touchmove: string;
    touchend: string;
  }

  interface ImageSlider extends View {
    addImages(images);
    currentImageIndex(): number;
    setImages(images);
  }

  interface Rect {
    top: string;
    left: string;
    width: string;
    height: string;
  }
  interface RectStyles {
    color: string;
    radius: string;
    borderColor: string;
    borderWidth: string;
  }
  interface RichTextStyles {
    align: string;
    family: string;
    fontSrc: string;
    onClick: RichTextClickedCallback;
  }

  interface RichTextClickedCallback {
    /**
     * // Event handled code.
      var tagName = event.tagName;
      var href = event.href;
      var src = event.src;
    }
     */
    onEvent(event: RichTextEvent);
  }

  interface RichTextEvent {
    readonly tagName?: string;
    readonly href?: string;
    readonly src?: string;
  }

  interface TouchEventCallback {
    onEvent(event: TouchEvent): void;
  }

  interface TouchEvent {
    readonly clientX: number;
    readonly clientY: number;
    readonly pageX: number;
    readonly pageY: number;
    readonly screenX: number;
    readonly screenY: number;
    readonly target: any;
    readonly currentImageIndex: number;
  }

  interface NativeObjSuccessCallback {
    (): void;
  }

  interface NativeObjErrorCallback {
    (error?: DOMException): void;
  }
}
