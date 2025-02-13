/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type obituaryPage = typeof import('./pages/ObituaryPage.js');
type ChaiWrapper = import('codeceptjs-chai');
type MSSQLHelper = import('./custom_helper/MSSQLHelper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, obituaryPage: obituaryPage }
  interface Methods extends WebDriver, ChaiWrapper, MSSQLHelper, REST {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
