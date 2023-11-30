"use strict";
import UIComponent from "sap/ui/core/UIComponent";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
// import MainModel from "vw/venue/models/MainModel";
import View from "sap/ui/core/mvc/View";
import support from "sap/ui/Device";
import IconPool from "sap/ui/core/IconPool";

/**
 * @namespace seoul.web
 */
export default class Component extends UIComponent {

    static metadata = {
        "async": true,
        "autoPrefixId": false,
        "interfaces": [
            "sap.ui.core.IAsyncContentCreation"
        ],
        "manifest": "json"
    };

    private contentDensityClass: string = "";

    /**
     * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
     * design mode class should be set, which influences the size appearance of some controls.
     *
     * @public
     * @return {string} css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
     */
    public getContentDensityClass(): string {
        if (this.contentDensityClass === "") {
            // check whether FLP has already set the content density class; do nothing in this case
            if (document.body.classList.contains("sapUiSizeCozy") || document.body.classList.contains("sapUiSizeCompact")) {
                this.contentDensityClass = "";
            } else { // @ts-ignore
                if (!support.touch) { // apply "compact" mode if touch is not supported
                    this.contentDensityClass = "sapUiSizeCompact";
                } else {
                    // "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
                    this.contentDensityClass = "sapUiSizeCozy";
                }
            }
        }
        return this.contentDensityClass;
    }

    public init(): void {
        // call the base component's init function
        super.init();

        this.getContentDensityClass();

        IconPool.registerFont({
            fontFamily: "SAP-icons-TNT",
            fontURI: sap.ui.require.toUrl("sap/tnt/themes/base/fonts/")
        });

        IconPool.registerFont({
            fontFamily: "BusinessSuiteInAppSymbols",
            fontURI: sap.ui.require.toUrl("sap/ushell/themes/base/fonts/")
        });

        // MainModel.createDeviceModel();

        // For more Text Classification, please
        // see https://sapui5.hana.ondemand.com/sdk/#/topic/582ce93d326540f59d149031a44d5fb0.html
        const resourceBundle = ResourceBundle.create({
            bundleName: "seoul.web.i18n.i18n",
            async: true,
            supportedLocales: ["de", "en"],
            fallbackLocale: "en"
        });

        if (resourceBundle instanceof Promise) {
            resourceBundle.then((bundle) => {
                // this.setModel(MainModel.createLocaleModel(bundle), "i18n");
            }).then(() => {
                this.initApp();
            })
        }
        //
        // const navModel = MainModel.createNavModel();
        // this.setModel(navModel, "nav");
    }

    private initApp(): void {
        const view = () => View.create({
            viewData: {},
            viewName: "module:seoul/web/views/App"
        }).then((view: View) => {
            view.setBusy(false);
            view.setModel(this.getModel("i18n"), "i18n");
            view.setModel(this.getModel("nav"), "nav");
            view.placeAt("seoul-web");
            view.setBusy(false);
        }).catch((err: Error) => {
            throw new Error(`$$$ - Component: ${err}`);
        });
        this.runAsOwner(view);
    }
}