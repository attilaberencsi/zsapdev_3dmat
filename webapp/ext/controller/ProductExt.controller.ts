import ControllerExtension from 'sap/ui/core/mvc/ControllerExtension';
import ExtensionAPI from 'sap/fe/templates/ObjectPage/ExtensionAPI';
import MessageToast from 'sap/m/MessageToast';
import Context from 'sap/ui/model/odata/v4/Context';
import Dialog from 'sap/m/Dialog';
import FileUploader, { FileUploader$ChangeEvent } from 'sap/ui/unified/FileUploader';
import ResourceModel from 'sap/ui/model/resource/ResourceModel';
import ResourceBundle from 'sap/base/i18n/ResourceBundle';
import Messaging from 'sap/ui/core/Messaging';
import Message from 'sap/ui/core/message/Message';
import MessageType from 'sap/ui/core/message/MessageType';
import ODataContextBinding from 'sap/ui/model/odata/v4/ODataContextBinding';
import Fragment from 'sap/ui/core/Fragment';

/**
 * @namespace com.sapdev.threed.zsapdev3dpproduct.ext.controller
 * @controller
 */
export default class ProductExt extends ControllerExtension<ExtensionAPI> {

  static overrides = {
    onInit(this: ProductExt) {
      // you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
      const model = this.base.getExtensionAPI().getModel();
      const extAPI = this.base.getExtensionAPI();

      //this.base.getView().byId("yourControlId");
    },

    onAfterRendering() {
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