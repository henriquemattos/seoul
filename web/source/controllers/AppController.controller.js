var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Controller from "sap/ui/core/mvc/Controller";
/**
 * @namespace seoul.web.controllers
 */
var AppControllerController = /** @class */ (function (_super) {
    __extends(AppController, _super);
    // appHeader: ShellBar;
    function AppController() {
        return _super.call(this, "AppController") || this;
    }
    AppController.prototype.onInit = function () {
        // silence is gold - first executed
        // const headerFragment = BaseController.getShellBar(this);
        // const view = this.getView() as View;
        // const shell = view.getContent()[0] as Shell;
        // const app = shell.getApp() as App;
        // const page = app.getPage("vw-venue-page-loading") as Page;
        // headerFragment.then((fragment) => {
        //     this.appHeader = fragment;
        //     page.setCustomHeader(this.appHeader);
        // });
    };
    AppController.prototype.onBeforeRendering = function () {
        // silence is gold - second executed
    };
    AppController.prototype.onAfterRendering = function () {
        // silence is gold - third executed
    };
    AppController.prototype.onExit = function () {
        // silence is gold - executed when leaving the view
    };
    AppController.prototype.navTo = function (event) {
        // const menuItem = event.getSource() as MenuItem;
        // const destinationId = menuItem.data("destinationId");
        //
        // const view = this.getView() as View;
        // const shell = view.getContent()[0] as Shell;
        // shell.setBusy(true);
        // const app = shell.getApp() as App;
        //
        // if (app.getPage(destinationId)) {
        //     app.to(destinationId);
        //     shell.setBusy(false);
        // } else {
        //     const navModel = view.getModel("nav") as JSONModel;
        //     const destination = navModel.getData().find((resources: INav) => resources.destinationId === destinationId);
        //     if (destination) {
        //         View.create({
        //             viewData: {},
        //             viewName: `module:${destination.route}.view`
        //         }).catch(function (err: Error) {
        //             throw new Error(`$$$ HRQ - App - Failed loading Launchpad: ${err.message}`)
        //         }).then((view) => {
        //             const page = view.getContent()[0] as Page;
        //             page.setCustomHeader(this.appHeader.clone());
        //             app.addPage(view);
        //             app.to(view);
        //             shell.setBusy(false);
        //         });
        //     }
        // }
    };
    return AppController;
}(Controller));
export default AppController;
