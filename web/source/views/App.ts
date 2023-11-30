import View from "sap/ui/core/mvc/View";
import App from "sap/m/App";
import IllustratedMessage from "sap/m/IllustratedMessage";
import Button from "sap/m/Button";
import Page from "sap/m/Page";
import Shell from "sap/m/Shell";
import AppController from "seoul/web/controllers/AppController.controller";
import ShellBar from "sap/f/ShellBar";
import Menu from "sap/m/Menu";
import MenuItem from "sap/m/MenuItem";
import Avatar from "sap/m/Avatar";
import AvatarShape from "sap/m/AvatarShape";
import AvatarSize from "sap/m/AvatarSize";
import MessageToast from "sap/m/MessageToast";
import IllustratedMessageType from "sap/m/IllustratedMessageType";
import Panel from "sap/m/Panel";
import FlexBox from "sap/m/FlexBox";
import {
    ButtonType,
    FlexAlignContent,
    FlexAlignItems,
    FlexJustifyContent,
    ToolbarDesign,
    ToolbarStyle
} from "sap/m/library";
import Toolbar from "sap/m/Toolbar";
import Input from "sap/m/Input";
import IllustratedMessageSize from "sap/m/IllustratedMessageSize";
import VBox from "sap/m/VBox";
import Form from "sap/ui/layout/form/Form";
import FormContainer from "sap/ui/layout/form/FormContainer";
import Title from "sap/ui/core/Title";
import FormElement from "sap/ui/layout/form/FormElement";
import Label from "sap/m/Label";
import ColumnLayout from "sap/ui/layout/form/ColumnLayout";

/**
 * @namespace seoul.web.views
 */
export default class AppPage extends View {
    public async = true;

    // protected app: App;

    constructor() {
        super();
    }

    public getControllerName(): string {
        return "seoul/web/controllers/AppController";
    }

    public getController(): AppController {
        return super.getController() as AppController;
    }

    public createContent(): Shell {
        const loginPage = new Page("seoul-web-page-login", {
            content: [
                new Form({
                    editable: true,
                    formContainers: [
                        new FormContainer({
                            expandable: false,
                            expanded: true,
                            formElements: [
                                new FormElement({
                                    label: new Label({
                                        required: true,
                                        text: "First Name"
                                    }),
                                    fields: [
                                        new Input("seoul-user-firstName", {
                                            required: true,
                                            type: "Text"
                                        })
                                    ]
                                }),
                                new FormElement({
                                    label: new Label({
                                        required: true,
                                        text: "Last Name"
                                    }),
                                    fields: [
                                        new Input("seoul-user-lastName", {
                                            required: true,
                                            type: "Text"
                                        })
                                    ]
                                }),
                                new FormElement({
                                    label: new Label({
                                        required: true,
                                        text: "E-mail"
                                    }),
                                    fields: [
                                        new Input("seoul-user-email", {
                                            required: true,
                                            type: "Email"
                                        })
                                    ]
                                }),
                                new FormElement({
                                    label: new Label({
                                        required: true,
                                        text: "Password"
                                    }),
                                    fields: [
                                        new Input({
                                            required: true,
                                            type: "Password"
                                        })
                                    ]
                                }),
                                new FormElement({
                                    label: "",
                                    fields: [
                                        new Button({
                                            text: "Enter",
                                            type: ButtonType.Emphasized,
                                            press: this.getController().navTo.bind(this.getController())
                                        })
                                    ]
                                })
                            ]
                        })
                    ],
                    layout: new ColumnLayout({
                        columnsXL: 1,
                        columnsL: 1,
                        columnsM: 1,
                        labelCellsLarge: 4,
                        emptyCellsLarge: 4
                    }),
                    title: new Title({
                        text: "Welcome to Home of Tomorrow - HoT keeps it cool 😎"
                    })
                })
            ]
        });
        const loadingPage = new Page("seoul-web-page-loading", {
            floatingFooter: true,
            enableScrolling: true,
            showHeader: true,
            customHeader: new ShellBar({
                homeIcon: "/images/logo-cheil-worldwide.svg",
                notificationsNumber: "20",
                secondTitle: "{i18n>APP_TITLE}",
                showCopilot: true,
                showMenuButton: false,
                showNavButton: false,
                showNotifications: true,
                showProductSwitcher: true,
                showSearch: true,
                title: "{i18n>APP_NAME}",
                menu: new Menu({
                    items: [
                        new MenuItem({
                            icon: "sap-icon://BusinessSuiteInAppSymbols/icon-split-screen",
                            key: "spaces",
                            text: "My Spaces"
                        }),
                        new MenuItem({
                            icon: "sap-icon://fridge",
                            key: "devices",
                            text: "My Devices"
                        }),
                        new MenuItem({
                            icon: "sap-icon://manager-insight",
                            key: "reports",
                            text: "Generate Reports"
                        })
                    ]
                }),
                profile: new Avatar({
                    active: true,
                    src: "",
                    displayShape: AvatarShape.Circle,
                    displaySize: AvatarSize.M
                }),
                avatarPressed: () => MessageToast.show("We know who you are!"),
                copilotPressed: () => MessageToast.show("Your digital assistant is coming..."),
                homeIconPressed: () => MessageToast.show("Please don't step on the grass, and don't click on the logo"),
                menuButtonPressed: () => MessageToast.show("We have no menu yet"),
                notificationsPressed: () => MessageToast.show("Did you really believe on the notification number?"),
                productSwitcherPressed: () => MessageToast.show("Product switch... which product?"),
                searchButtonPressed: () => MessageToast.show("Alright, we are getting there... sit back and relax!")
            }),
            content: [
                new VBox({
                    items: [
                        new Panel({
                            expandable: false,
                            expanded: true,
                            headerText: "Welcome {userData>/firstName} {userData>/lastName}",
                            stickyHeader: false,
                            width: "100%",
                            infoToolbar: new Toolbar({
                                active: true,
                                design: ToolbarDesign.Solid,
                                style: ToolbarStyle.Standard,
                                content: [
                                    new Input({
                                        showClearIcon: true,
                                        showSuggestion: true,
                                        showValueHelp: true,
                                        startSuggestion: 3,
                                    }),
                                    new Button({
                                        text: "Search",
                                        type: ButtonType.Emphasized
                                    }),
                                    new Button({
                                        text: "Create new space",
                                        type: ButtonType.Default
                                    }),
                                    new Button({
                                        text: "Add new device",
                                        type: ButtonType.Default
                                    })
                                ]
                            }),
                            content: [
                                new FlexBox({
                                    alignContent: FlexAlignContent.SpaceAround,
                                    justifyContent:FlexJustifyContent.SpaceAround,
                                    fitContainer: true,
                                    width: "100%",
                                    items: [
                                        new IllustratedMessage({
                                            description: "{i18n>APP_LOADING}",
                                            enableDefaultTitleAndDescription: false,
                                            illustrationType: IllustratedMessageType.SearchEarth,
                                            illustrationSize: IllustratedMessageSize.Scene,
                                            title: "{i18n>APP_PAGE_MSG_NO_SPACES}",
                                            additionalContent: [
                                                new Button({
                                                    text: "{i18n>APP_PAGE_BTN_ADD_NEW_SPACE}",
                                                    press: this.getController().onPressAddNewSpace.bind(this.getController())
                                                })
                                            ]
                                        }),
                                        new IllustratedMessage({
                                            description: "{i18n>APP_LOADING}",
                                            enableDefaultTitleAndDescription: false,
                                            illustrationType: IllustratedMessageType.EmptyList,
                                            illustrationSize: IllustratedMessageSize.Scene,
                                            title: "{i18n>APP_PAGE_MSG_NO_DEVICE}",
                                            additionalContent: [
                                                new Button({
                                                    text: "{i18n>APP_PAGE_BTN_ADD_NEW_DEVICE}",
                                                    press: this.getController().onPressAddNewDevice.bind(this.getController())
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        new Panel({
                            expandable: false,
                            expanded: true,
                            headerText: "Analytics & Intelligence",
                            stickyHeader: false,
                            width: "100%",
                            content: [
                                new IllustratedMessage({
                                    description: "{i18n>APP_LOADING}",
                                    enableDefaultTitleAndDescription: false,
                                    illustrationType: IllustratedMessageType.UnableToLoad,
                                    illustrationSize: IllustratedMessageSize.Scene,
                                    title: "{i18n>APP_PAGE_MSG_NO_DATA}"
                                })
                            ]
                        })
                    ]
                })
            ]
        });

        const app = new App("seoul-web-app", {
            autoFocus: false,
            backgroundOpacity: 0.5,
            isTopLevel: true,
            pages: [
                loginPage,
                loadingPage
            ],
            initialPage: "seoul-web-page-login"
        });

        return new Shell({
            app: app,
            appWidthLimited: false
        });
    }
}
