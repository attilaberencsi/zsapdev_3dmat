/* eslint-disable linebreak-style */
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

        // JsBarcode will be loaded via manifest.json resources
        // and will be available globally as 'JsBarcode'


    }
}