/* eslint-disable linebreak-style */
import ExtensionAPI from "sap/fe/templates/ObjectPage/ExtensionAPI";
import MessageToast from "sap/m/MessageToast";

// Define the JsBarcode interface
interface JsBarcodeFunction {
    (element: HTMLElement, text: string, options?: {
        format?: string;
        width?: number;
        height?: number;
        displayValue?: boolean;
    }): void;
}

declare global {
    interface Window {
        JsBarcode: JsBarcodeFunction;
    }
}

/**
 * Generated event handler.
 * 
 * @param {ExtensionAPI} this - Reference to the extension API.
 * @returns {void}
 */
export function generateBarcode(this: ExtensionAPI): void {
    const oBarCodeControl = this.byId("idsvg");
    const barcodeHTMLElement = oBarCodeControl?.getDomRef() as HTMLElement;

    if (!barcodeHTMLElement) {
        MessageToast.show("Barcode element not found");
        return;
    }

    // Clear any existing content by removing all child nodes
    while (barcodeHTMLElement.firstChild) {
        barcodeHTMLElement.removeChild(barcodeHTMLElement.firstChild);
    }

    try {
        // Using globally available JsBarcode
        if (typeof window.JsBarcode !== "function") {
            throw new Error("JsBarcode library not loaded");
        }

        // Get the current object context
        const context = this.getBindingContext();


        // Get the PartNumber from the context
        const partNumber = context?.getProperty("PartNumber") as string;
        if (!partNumber) {
            MessageToast.show("Maintain Part Number first");
            return;
        }

        window.JsBarcode(barcodeHTMLElement, partNumber, {
            format: "CODE128",
            width: 2,
            height: 100,
            displayValue: true
        });
        MessageToast.show("Barcode generated successfully");
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        MessageToast.show(`Error generating barcode: ${errorMessage}`);
    }
}
