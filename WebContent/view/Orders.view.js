sap.ui.jsview("view.Orders", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Orders
	*/ 
	getControllerName : function() {
		return "view.Orders";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Orders
	*/ 
	createContent : function(oController) {
		
		var oList = new sap.m.List("orderlist1", {
			headerText: "Orders",
			noDataText: "No Orders Found"
		});
		
		var oTemp = new sap.m.StandardListItem({
		    title: "{contextmodel>ShipName}",
		    description: "{contextmodel>OrderID}",
		    type: sap.m.ListType.Active,
            press: function(evt){  oController.orderSelected(evt);}
		});
		
		oList.bindItems("contextmodel>/Orders", oTemp);
		
		var ordersPage = new sap.m.Page(this.createId("orderpage"), {
			title:"Customer Orders",
			showNavButton: true,
			navButtonPress: oController.navPressed,
			content: [
			          		oList
					]
		});
		
		return ordersPage;
		

	}

});