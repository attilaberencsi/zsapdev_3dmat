declare namespace JsBarcode {
  interface JsBarcodeStatic {
    (element: string | HTMLElement, options?: any): JsBarcodeStatic;
    init(element: string | HTMLElement, options?: any): JsBarcodeStatic;
  }
}

declare var JsBarcode: JsBarcode.JsBarcodeStatic;
export default JsBarcode;