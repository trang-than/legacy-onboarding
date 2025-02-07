/// <reference types='codeceptjs' />
type steps_file = typeof import("./steps_file.js");
type guestBookPage = typeof import("./pages/GuestBookPage.js");
type ChaiWrapper = import("codeceptjs-chai");

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;
    guestBookPage: guestBookPage;
    current: any;
  }
  interface Methods extends WebDriver, ChaiWrapper {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
