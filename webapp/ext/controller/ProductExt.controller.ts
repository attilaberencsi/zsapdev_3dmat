/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any */
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import ExtensionAPI from "sap/fe/templates/ObjectPage/ExtensionAPI";
import MessageToast from "sap/m/MessageToast";
import Context from "sap/ui/model/odata/v4/Context";
import UI5Element from "sap/ui/core/Element";
import Fragment from "sap/ui/core/Fragment";
import Dialog from "sap/m/Dialog";
import Event from "sap/ui/base/Event";

/**
 * @namespace com.sapdev.threed.zsapdev3dpproduct.ext.controller
 * @controller
 */
export default class ProductExt extends ControllerExtension<ExtensionAPI> {

  private _oVBox: UI5Element;
  private _oBarcodeDialog?: Dialog;
  private _partNumber?: string;

  private _barCodeDialogId: string;

  static overrides = {
    onInit(this: ProductExt) {
      // you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
      const model = this.base.getExtensionAPI().getModel();
      const extAPI = this.base.getExtensionAPI();
    },

    onAfterRendering(this: ProductExt) {

    }
  };

  public async GenerateTheBarCode(oContext: Context): Promise<void> {
    // get extension API and binding context
    const extAPI = this.base.getExtensionAPI();
    const bindingContext = extAPI.getBindingContext ? extAPI.getBindingContext() : oContext;
    if (!bindingContext || typeof (bindingContext as any).getProperty !== "function") {
      MessageToast.show("Binding context not available");
      return;
    }

    const partNumber = (bindingContext as any).getProperty("PartNumber") as string | undefined;
    if (!partNumber) {
      MessageToast.show("Maintain Part Number first");
      return;
    }

    // Store partNumber for use in afterOpen handler
    this._partNumber = partNumber;

    // load fragment once, using the view id as fragment id so Fragment.byId can locate controls
    
    if (!this._oBarcodeDialog) {
      const viewId = this.base.getView().getId();
      this._barCodeDialogId = viewId + "--BarcodeDialog";
      this._oBarcodeDialog = await extAPI.loadFragment({
        id: this._barCodeDialogId,
        name: "com.sapdev.threed.zsapdev3dpproduct.ext.fragment.BarcodeDialog",
        controller: this
      }) as Dialog;
      this.base.getView().addDependent(this._oBarcodeDialog);
      
      // Attach afterOpen event handler
      this._oBarcodeDialog.attachAfterOpen(this.onAfterOpenBarcodeDialog.bind(this));
    }

    // open the dialog
    this._oBarcodeDialog.open();
  }
  public onAfterOpenBarcodeDialog(event: Event): void {
    // Generate barcode after dialog is fully rendered
    try {
      const htmlControl = Fragment.byId(this._barCodeDialogId, "idsvg") as any;
      const dom = htmlControl?.getDomRef?.() as HTMLElement | null;
      if (!dom) {
        MessageToast.show("Barcode container not found");
        return;
      }
      if (typeof window.JsBarcode !== "function") {
        MessageToast.show("JsBarcode library not loaded");
        return;
      }
      // clear previous contents
      while (dom.firstChild) { 
        dom.removeChild(dom.firstChild); 
      }
      window.JsBarcode(dom, this._partNumber as string, {
        format: "CODE128",
        width: 2,
        height: 100,
        displayValue: true
      });
    } catch (err) {
      const m = err instanceof Error ? err.message : "Unknown error";
      MessageToast.show(`Error generating barcode: ${m}`);
    }
  }

  public onCloseBarcodeDialog(): void {
    this._oBarcodeDialog?.close();
  }

}