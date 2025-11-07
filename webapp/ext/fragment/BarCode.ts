import ExtensionAPI from 'sap/fe/core/ExtensionAPI';
import UI5Event from 'sap/ui/base/Event';
import MessageToast from 'sap/m/MessageToast';
import JsBarcode from "../../types/JsBarcode";

/**
 * Generated event handler.
 *
 * @param this reference to the 'this' that the event handler is bound to.
 * @param event the event object provided by the event provider.
 */
export function generateBarcode(this: ExtensionAPI, event: UI5Event) {
    MessageToast.show("Custom handler invoked from BarCode.ts");
    let oBarCodeControl = this.byId("barcode");
    let barcodeHTMLElement = oBarCodeControl?.getDomRef() as HTMLElement;

    //   JsBarcode(barcodeHTMLElement, {
    //     text: "123456789012",
    //     format: "CODE128",
    //     width: 2,
    //     height: 100,
    //     displayValue: true
    //   });
}