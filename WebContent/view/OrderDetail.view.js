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
		
		
		//first cell
		var shipname = new sap.ui.commons.TextView("customertextview", {
		    // bind text property of textview to firstName property in the model
		    text: "{singleRowModel>/ShipName}",
		    tooltip: "Ship Name"
		});
		
		var customercellitem = new sap.suite.ui.commons.HeaderCellItem("customercellitem",{
			content : shipname
		});
		
		var customercell = new sap.suite.ui.commons.HeaderCell("customercell", {
			north:customercellitem
		});
		
		//second cell
		var orderdate = new sap.ui.commons.TextView("orderdt", {
		    // bind text property of textview to firstName property in the model
		    text: "{singleRowModel>/OrderDate}",
		    tooltip: "Order Date"
		});
		
		var orderdtcellitem = new sap.suite.ui.commons.HeaderCellItem("orderdtcellitem",{
			content : orderdate
		});
		
		var Freightcellitem = new sap.suite.ui.commons.HeaderCellItem("Freightcellitem",{
			content : [new sap.suite.ui.commons.NumericContent("freight", {
			    // bind text property of textview to firstName property in the model
			    value: "{singleRowModel>/Freight}",
			    tooltip: "Freight Quantity",
			    scale:"Kg"
			})]
		});
		
		var orderdtcell = new sap.suite.ui.commons.HeaderCell("orderdtcell", {
			north:orderdtcellitem,
			south:Freightcellitem
		});
		
		//third cell, shipping info
		var shipaddr = new sap.suite.ui.commons.HeaderCellItem("shipaddr",{
			content : [new sap.ui.commons.TextView("txtshipaddr", {
			    // bind text property of textview to firstName property in the model
			    text: "{singleRowModel>/ShipAddress}",
			    tooltip: "Ship Address"
			})]
		});
		
		var shipcity = new sap.suite.ui.commons.HeaderCellItem("shipcity",{
			content : [new sap.ui.commons.TextView("txtshipcity", {
			    // bind text property of textview to firstName property in the model
			    text: "{singleRowModel>/ShipCity}",
			    tooltip: "Ship City"
			})]
		});
		

		var shipzip = new sap.suite.ui.commons.HeaderCellItem("shipzip",{
			content : [new sap.ui.commons.TextView("txtshipzip", {
			    // bind text property of textview to firstName property in the model
			    text: "{singleRowModel>/ShipPostalCode}",
			    tooltip: "Ship Postal Code"
			})]
		});
		

		var shipcountry = new sap.suite.ui.commons.HeaderCellItem("shipcountry",{
			content : [new sap.ui.commons.TextView("txtshipcountry", {
			    // bind text property of textview to firstName property in the model
			    text: "{singleRowModel>/ShipCountry}",
			    tooltip: "Ship Country"
			})]
		});
		
		var shipcell = new sap.suite.ui.commons.HeaderCell("shipcell", {
			north:shipaddr,
			south:shipcountry,
			east:shipzip,
			west:shipcity
		});
		
		//header container
		var hc = new sap.suite.ui.commons.HeaderContainer("detailhc",{
			showDividers:true,
			items:[customercell, orderdtcell, shipcell]
		});
		
	
		//Order Product Details.............................
		

		
		var oList = new sap.m.List('productlist', {
		    headerText : "Products",
		    noDataText: "No Products Found",
		    columns:[
		             	new sap.m.Column("qt",{
		             		header : new sap.ui.commons.TextView("tftxtprodQuantity", {"text":"Quantity" })}),
	             		new sap.m.Column("up",{
			             		header : new sap.ui.commons.TextView("tftxtprodunitpr", {"text":"Unit Price" })})
		             	 
	             	]
		});

		
		var oTemp = new sap.m.ColumnListItem({
		    cells:[
						new sap.ui.commons.TextView("txtprodQuantity", {
						    text: "{singleRowModel>Quantity}",
						    tooltip: "Quantity"
						}),
						new sap.ui.commons.TextView("txtprodUnitPrice", {
						    text: "{singleRowModel>UnitPrice}",
						    tooltip: "UnitPrice"
						})
		           ]
		});

	 
		//oList.bindItems("contextmodel>/Order_Details/", oTemp);
 		 
		oList.bindAggregation("items",{
			path:"singleRowModel>/Order_Details/results",
			template:oTemp
		})
	 	
		
		var oContainer = new sap.m.Panel("panelid", {
			headerText:"Panel Header",
			content:[oList]
		});
		
 
		
		//create and return the page.
 		return new sap.m.Page({
			title: "Order Detail",
			content: [
	          	hc,oContainer
          	]
		});
	}

});