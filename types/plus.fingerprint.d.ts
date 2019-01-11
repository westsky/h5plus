/** Fingerprint模块管理指纹识别。
 * @author westsky
 * @description Html 5+ plus.fingerprint
 */

declare namespace plus.fingerprint {
  function isSupport(): boolean;
  function isKeyguardSecure(): boolean;

  /**
   * 当前设备是否已经录入指纹;
   */
  function isEnrolledFingerprints(): boolean;
  function authenticate(
    successCB: FingerprintSuccessCallback,
    errorCB: FingerprintErrorCallback,
    options: AuthenticateOptions
  ): void;
  function cancel(): void;
}

interface AuthenticateOptions {
  readonly message: string;
}

interface FingerprintError {
  readonly UNSUPPORT: number; // = 1;
  readonly KEYGUARD_INSECURE: number; // = 2;
  readonly FINGERPRINT_UNENROLLED: number; // = 3;
  readonly AUTHENTICATE_MISMATCH: number; //= 4;
  readonly AUTHENTICATE_OVERLIMIT: number; // = 5;
  readonly CANCEL: number; // = 6;
  readonly UNKNOWN_ERROR: number; // = 7;
  readonly code: number;
  readonly message: string;
}
interface FingerprintSuccessCallback {
  onSuccess(): void;
}

interface FingerprintErrorCallback {
  (error?: DOMException): void; //匿名方法委托
}
