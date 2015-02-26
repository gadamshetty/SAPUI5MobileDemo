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
		var oTextView = new sap.ui.commons.TextView("textView", {
		    // bind text property of textview to firstName property in the model
		    text: "{singleRowModel>/ShipName}",
		    tooltip: "First Name"
		});
		var oTxt = new sap.ui.commons.TextField("txtField", {
		    // bind text property of textfield to firstName property in the model
		    value: "{singleRowModel>/firstName}"
		});
		
		var obtn = new sap.m.Label("bt43431",{text:"{singleRowModel>firstName}"});
		
		var obtn1 = new sap.m.Label("bt43sdad431",{text:"test button"});
		
 		return new sap.m.Page({
			title: "Order Detail",
			content: [
oTextView, oTxt, obtn1
			          	]
		});
	}

});