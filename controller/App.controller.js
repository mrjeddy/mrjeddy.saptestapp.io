sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
 ], function (Controller, JSONModel) {
    "use strict";
    return Controller.extend("sap.ui.testapp.controller.App", {
      onInit : function () {
         // set data model on view
         var myData = {
            recipient : {
               name : "World"
            }
         };
         var myModel = new JSONModel(myData);
         this.getView().setModel(myModel);
      }
    });
 });