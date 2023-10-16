sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
], function (Controller, History, UIComponent) {
	"use strict";

	return Controller.extend("sap.ui.testapp.controller.ItemInfo", {

		onInit: function () {
            var oRouter = UIComponent.getRouterFor(this);
			oRouter.getRoute("item").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
            var itemNumber = oEvent.getParameter("arguments").goodPath;
            var name = this.getView().getModel("good").getData().Goods[itemNumber].Name;
            var prod = this.getView().getModel("good").getData().Goods[itemNumber].Producer;
            var price = this.getView().getModel("good").getData().Goods[itemNumber].Price;
            var cal = this.getView().getModel("good").getData().Goods[itemNumber].Calorie;
            var desc = this.getView().getModel("good").getData().Goods[itemNumber].Description;
            
            this.byId("item_name").setHtmlText("<h1>"+name+"</h1>");
            this.byId("item_prod").setHtmlText(prod);
            this.byId("item_price").setHtmlText("Цена: "+price);
            this.byId("item_cal").setHtmlText("Калорийность: "+cal);
            this.byId("item_desc").setHtmlText(desc);
            
		},

		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("tableview", {}, true);
			}
		}

	});
});