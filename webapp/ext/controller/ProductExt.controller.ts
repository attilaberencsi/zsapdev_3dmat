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

export default class ProductExt extends ControllerExtension<ExtensionAPI> {
  static overrides = {
    onInit: function (this: ProductExt) {
      // you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
      const model = this.base.getExtensionAPI().getModel();
      //this.base.getView().byId("yourControlId");
    },

    onAfterRendering: function () {
      //MessageToast.show("Hi");
    },

    /**
    * Generated event handler.
    *
    * @param this reference to the 'this' that the event handler is bound to.
    * @param context the context of the page on which the event was fired. `undefined` for list report page.
    * @param selectedContexts the selected contexts of the table rows.
    */
    GenerateTheBarCode: function (this: ExtensionAPI, context: Context | undefined, selectedContexts: Context[]) {
      MessageToast.show("Controller Extension Invoked");
    }

  };
}