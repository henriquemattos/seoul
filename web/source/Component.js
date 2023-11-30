"use strict";
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
import UIComponent from "sap/ui/core/UIComponent";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
// import MainModel from "vw/venue/models/MainModel";
import View from "sap/ui/core/mvc/View";
import support from "sap/ui/Device";
import IconPool from "sap/ui/core/IconPool";
/**
 * @namespace seoul.web
 */
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.contentDensityClass = "";
        return _this;
    }
    /**
     * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
     * design mode class should be set, which influences the size appearance of some controls.
     *
     * @public
     * @return {string} css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
     */
    Component.prototype.getContentDensityClass = function () {
        if (this.contentDensityClass === "") {
            // check whether FLP has already set the content density class; do nothing in this case
            if (document.body.classList.contains("sapUiSizeCozy") || document.body.classList.contains("sapUiSizeCompact")) {
                this.contentDensityClass = "";
            }
            else { // @ts-ignore
                if (!support.touch) { // apply "compact" mode if touch is not supported
                    this.contentDensityClass = "sapUiSizeCompact";
                }
                else {
                    // "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
                    this.contentDensityClass = "sapUiSizeCozy";
                }
            }
        }
        return this.contentDensityClass;
    };
    Component.prototype.init = function () {
        var _this = this;
        // call the base component's init function
        _super.prototype.init.call(this);
        this.getContentDensityClass();
        IconPool.registerFont({
            fontFamily: "SAP-icons-TNT",
            fontURI: sap.ui.require.toUrl("sap/tnt/themes/base/fonts/")
        });
        // MainModel.createDeviceModel();
        // For more Text Classification, please
        // see https://sapui5.hana.ondemand.com/sdk/#/topic/582ce93d326540f59d149031a44d5fb0.html
        var resourceBundle = ResourceBundle.create({
            bundleName: "seoul.web.i18n.i18n",
            async: true,
            supportedLocales: ["de", "en"],
            fallbackLocale: "en"
        });
        if (resourceBundle instanceof Promise) {
            resourceBundle.then(function (bundle) {
                // this.setModel(MainModel.createLocaleModel(bundle), "i18n");
            }).then(function () {
                _this.initApp();
            });
        }
        //
        // const navModel = MainModel.createNavModel();
        // this.setModel(navModel, "nav");
    };
    Component.prototype.initApp = function () {
        var _this = this;
        var view = function () { return View.create({
            viewData: {},
            viewName: "module:seoul/web/views/App"
        }).then(function (view) {
            view.setBusy(false);
            view.setModel(_this.getModel("i18n"), "i18n");
            view.setModel(_this.getModel("nav"), "nav");
            view.placeAt("seoul-web");
            view.setBusy(false);
        }).catch(function (err) {
            throw new Error("$$$ - Component: ".concat(err));
        }); };
        this.runAsOwner(view);
    };
    Component.metadata = {
        "async": true,
        "autoPrefixId": false,
        "interfaces": [
            "sap.ui.core.IAsyncContentCreation"
        ],
        "manifest": "json"
    };
    return Component;
}(UIComponent));
export default Component;
