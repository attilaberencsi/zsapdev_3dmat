import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import ExtensionAPI from "sap/fe/templates/ObjectPage/ExtensionAPI";
import MessageToast from "sap/m/MessageToast";
import Context from "sap/ui/model/odata/v4/Context";
import UI5Element from "sap/ui/core/Element";

/**
 * @namespace com.sapdev.threed.zsapdev3dpproduct.ext.controller
 * @controller
 */
export default class ProductExt extends ControllerExtension<ExtensionAPI> {

  private _oVBox: UI5Element;

  static overrides = {
    onInit(this: ProductExt) {
      // you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
      const model = this.base.getExtensionAPI().getModel();
      const extAPI = this.base.getExtensionAPI();
      this._oVBox = this.base.byId("_IDGenVBox");
      //this.base.getView().byId("yourControlId");
    },

    onAfterRendering(this: ProductExt) {

      //const barcodeElement = this.base.byId("barcode").getDomRef() as HTMLElement;
      // JsBarcode(barcodeElement, {
      //   text: "123456789012",
      //   format: "CODE128",
      //   width: 2,
      //   height: 100,
      //   displayValue: true
      // });

      //MessageToast.show("Hi");
    }
  }

  public GenerateTheBarCode(oContext: Context): void {
    const oData = oContext.getObject();
    MessageToast.show("Controller Extension Invoked");

    const model = this.base.getExtensionAPI().getModel();
    const extAPI = this.base.getExtensionAPI();
  }

}