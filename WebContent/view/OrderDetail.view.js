sap.ui.jsview("view.OrderDetail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.OrderDetail
	*/ 
	getControllerName : function() {
		return "view.OrderDetail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its eent handlers can be attached right away. 
	* @memberOf view.OrderDetail
	*/ 
	createContent : function(oController) {
		//alert("rendi view");
		var objH = new sap.m.ObjectHeader("orderdetalheader", {
			number:"{ordermodel>/OrderID}"
		});
		
		 
		var btn = new sap.m.Button("tst", {"text":"naresh"});
		
 		return new sap.m.Page({
			title: "Order Detail",
			content: [
			          	objH, btn
			          	]
		});
	}

});