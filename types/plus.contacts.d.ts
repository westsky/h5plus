/**
 * Typescript 声明文件
 * @author westsky
 * @description Html 5+ plus.contacts
 * Contacts模块管理系统通讯录，用于可对系统通讯录进行增、删、改、查等操作。通过plus.contacts获取系统通讯录管理对象。
 *
 */

/**
 * 联系人
 */
declare namespace plus.contacts {
  /**
   * 通讯录类型常量，数值类型，固定值为0，用于获取系统的联系人信息。
   */
  const ADDRESSBOOK_PHONE = 0;
  /**
   * 通讯录类型常量，数值类型，固定值为1，用于获取SIM卡上的联系人信息。
   */
  const ADDRESSBOOK_SIM = 1;
  /**
   * 获取通讯录对象
   * @description 根据指定通讯录类型获取通讯录对象，获取通讯录对象后可对其进行增、删、改操作。
   * @param type  要获取的通讯录类型, 可取通讯录类型常量，可获取手机通讯录或SIM卡通讯录。
   * @param succesCB
   * @param errorCB
   */
  function getAddressBook(
    type: number,
    succesCB: AddressBookSuccessCallback,
    errorCB?: ContactsErrorCallback
  ): void;
}
interface AddressBook {
  create(): Contact;
  find(
    contactFields: string[],
    successCB: FindSuccessCallback,
    errorCB?: ContactsErrorCallback,
    findOptions?: ContactFindOption
  ): void;
}
interface Contact {
  readonly id: string;
  displayName: string;
  name: ContactName;
  nickname: string;
  phoneNumbers: ContactField[];
  emails: ContactField[];
  addresses: ContactAddress[];
  ims: ContactField[];
  organizations: ContactOrganization[];
  birthday: Date;
  note: string;
  photos: ContactField[];
  categories: ContactField[];
  urls: ContactField[];
  clone(): Contact;
  remove(successCB, errorCB): void;
  save(successCB, errorCB): void;
}
interface ContactName {
  formatted: string;
  familyName: string;
  givenName: string;
  middleName: string;
  honorificPrefix: string;
  honorificSuffix: string;
}

interface ContactField {
  type: string;
  value: string;
  preferred: boolean;
}
interface ContactName {
  formatted: string;
  familyName: string;
  givenName: string;
  middleName: string;
  honorificPrefix: string;
  honorificSuffix: string;
}

interface ContactAddress {
  type: string;
  formatted: string;
  streetAddress: string;
  locality: string;
  region: string;
  country: string;
  postalCode: string;
  preferred: boolean;
}
interface ContactOrganization {
  type: string;
  name: string;
  department: string;
  title: string;
  preferred: boolean;
}

interface ContactFindOption {
  filter: ContactFindFilter[];
  multiple: boolean;
}

interface ContactFindFilter {
  logic: string;
  field: string;
  value: string;
}

interface FindSuccessCallback {
  onSuccess(contacts: Contact): void;
}
interface AddressBookSuccessCallback {
  onSuccess(addressbook: AddressBook): void;
}

interface ContactsErrorCallback {
  (error?: DOMException): void;
}
