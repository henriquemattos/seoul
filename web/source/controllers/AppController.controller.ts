import Controller from "sap/ui/core/mvc/Controller";
import Event from "sap/ui/base/Event";
import View from "sap/ui/core/mvc/View";
import Shell from "sap/m/Shell";
import App from "sap/m/App";
import JSONModel from "sap/ui/model/json/JSONModel";
import Input from "sap/m/Input";
import Element from "sap/ui/core/Element";
import Dialog from "sap/m/Dialog";
// import MenuItem from "sap/m/MenuItem";
// import AppPage from "vw/venue/views/App.view";
// import ShellBar from "sap/f/ShellBar";
// import View from "sap/ui/core/mvc/View";
// import Page from "sap/m/Page";
// import App from "sap/m/App";
// import Shell from "sap/m/Shell";
// import BaseController from "vw/venue/controllers/BaseController.controller";
// import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace seoul.web.controllers
 */
export default class AppController extends Controller {
    // appHeader: ShellBar;
    deviceDialog: Promise<Dialog> | undefined;

    constructor() {
        super("AppController");
    }

    public onInit(): void {
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
    }

    public onBeforeRendering(): void {
        // silence is gold - second executed
    }

    public onAfterRendering(): void {
        // silence is gold - third executed
    }

    public onExit(): void {
        // silence is gold - executed when leaving the view
    }

    public onPressAddNewDevice(event: Event): void {
    }

    public onPressAddNewSpace(event: Event): void {
        if (!this.deviceDialog) {
            this.deviceDialog = this.loadFragment({
                name: "seoul/web/fragments/DeviceDialog",
                type: "JS",
                addToDependents: false
            }) as Promise<Dialog>;
        }

        this.deviceDialog.then((dialog: Dialog) => {
            dialog.open();
            const buttons = dialog.getButtons();
            const fnCloseDialog = () => dialog.close();

            buttons[0].attachPress(fnCloseDialog);
            buttons[1].attachPress(fnCloseDialog);
        });
    }

    public navTo(event: Event): void {
        // const menuItem = event.getSource() as MenuItem;
        // const destinationId = menuItem.data("destinationId");

        const destinationId = "seoul-web-page-loading";
        const view = this.getView() as View;
        const shell = view.getContent()[0] as Shell;
        shell.setBusy(true);
        const app = shell.getApp() as App;

        const userFirstName: Input = Element.getElementById("seoul-user-firstName") as Input;
        const userLastName: Input = Element.getElementById("seoul-user-lastName") as Input;
        const userEmail: Input = Element.getElementById("seoul-user-email") as Input;
        const userModel = new JSONModel({
            firstName: userFirstName.getValue(),
            lastName: userLastName.getValue(),
            userEmail: userEmail.getValue()
        });

        view.setModel(userModel, "userData");

        // if (app.getPage(destinationId)) {
        app.to(destinationId);
        shell.setBusy(false);
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
    }
}
