sap.ui.define([
    "sap/ui/core/mvc/Controller"
 ], function (Controller, ) {
    "use strict";
    return Controller.extend("sap.ui.testapp.controller.SumInfo", {
      metadata : {
         manifest: "json"
      },
      onInit : function (){
         fetch("./Goods.json").then((res) => { 
            return res.json(); 
         }).then((data) => {
            let allPrice = 0;
            for (let index = 0; index < data.Goods.length; index++) {
               allPrice += data.Goods[index].Price;               
            }
            this.byId("item_lenght").setText(data.Goods.length+" шт.");
            this.byId("sum_price").setHtmlText("Сумма: "+ allPrice.toFixed(2));
            this.byId("ave_price").setHtmlText("Среднее: "+ (allPrice/data.Goods.length).toFixed(2));
         });
      }
    });
 });