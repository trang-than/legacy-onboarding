/// <reference types='codeceptjs' />
type steps_file = typeof import("./steps_file.js");
type obituaryPage = typeof import("./pages/ObituaryPage.js");
type ChaiWrapper = import("codeceptjs-chai");

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;
    obituaryPage: obituaryPage;
    current: any;
  }
  interface Methods extends WebDriver, ChaiWrapper {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
