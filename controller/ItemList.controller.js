sap.ui.define([
    "sap/ui/core/mvc/Controller",
 ], function (Controller) {
    "use strict";
    return Controller.extend("sap.ui.testapp.controller.ItemList", {

      onPress: function (oEvent) {
         var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("item", {
            goodPath: oItem.getBindingContext("good").getPath().substr(7)
         });         
		}
       
    });
 });