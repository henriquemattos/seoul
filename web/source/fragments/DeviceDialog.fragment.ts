import Fragment from "sap/ui/core/Fragment";
import Dialog from "sap/m/Dialog";
import Button from "sap/m/Button";
import {ButtonType, DialogType} from "sap/m/library";
import Label from "sap/m/Label";

class DeviceDialog extends Fragment {
    public static createContent(): Dialog {
        return new Dialog({
            type: DialogType.Standard,
            title: "Hello Fragment",
            stretch: true,
            contentHeight: "40%",
            contentWidth: "60%",
            draggable: true,
            content: [
                new Label({
                    text: "I'm the content in a title!"
                })
            ],
            buttons: [
                new Button({
                    type: ButtonType.Accept,
                    text: "Accept"
                }),
                new Button({
                    type: ButtonType.Reject,
                    text: "Reject"
                })
            ]
        })
    }
}

export const createContent = DeviceDialog.createContent;

