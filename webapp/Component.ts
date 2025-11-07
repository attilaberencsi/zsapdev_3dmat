import BaseComponent from "sap/fe/core/AppComponent";

/**
 * @namespace com.sapdev.threed.zsapdev3dpproduct
 */
export default class Component extends BaseComponent {

    public static metadata = {
        manifest: "json"
    };

    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * @public
     * @override
     */
    public init(): void {
        super.init();

        // Component.ts or app bootstrap code

        sap.ui.loader.config({
            paths: {
                "JsBarcode": "lib/JsBarcode.all.min"
            },
            shim: {
                "JsBarcode": {
                    exports: "JsBarcode",
                    deps: [],
                    amd: false
                }
            }
        });


    }
}