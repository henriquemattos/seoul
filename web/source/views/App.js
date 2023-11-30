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
import View from "sap/ui/core/mvc/View";
import App from "sap/m/App";
import IllustratedMessage from "sap/m/IllustratedMessage";
import Button from "sap/m/Button";
import Page from "sap/m/Page";
import Shell from "sap/m/Shell";
/**
 * @namespace seoul.web.views
 */
var AppPage = /** @class */ (function (_super) {
    __extends(AppPage, _super);
    // protected app: App;
    function AppPage() {
        var _this = _super.call(this) || this;
        _this.async = true;
        return _this;
    }
    AppPage.prototype.getControllerName = function () {
        return "seoul/web/controllers/AppController";
    };
    AppPage.prototype.getController = function () {
        return _super.prototype.getController.call(this);
    };
    AppPage.prototype.createContent = function () {
        var loadingPage = new Page("seoul-web-page-loading", {
            content: [
                new IllustratedMessage({
                    description: "{i18n>APP_LOADING}",
                    enableDefaultTitleAndDescription: true,
                    title: "{APP_TITLE}",
                    additionalContent: [
                        new Button({
                            text: "{i18n>APP_DESCRIPTION}"
                        })
                    ]
                })
            ]
        });
        var app = new App("seoul-web-app", {
            autoFocus: false,
            backgroundOpacity: 0.5,
            isTopLevel: true,
            pages: [
                loadingPage
            ],
            initialPage: "seoul-web-page-loading"
        });
        return new Shell({
            appWidthLimited: false,
            app: app
        });
    };
    return AppPage;
}(View));
export default AppPage;
