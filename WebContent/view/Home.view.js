sap.ui.jsview("view.Home", {

	getControllerName: function () {
		return "view.Home";
	},

	createContent : function (oController) {

		// to avoid scrollbars on desktop the root view must be set to block display
		this.setDisplayBlock(true);

	    //return new sap.m.Button({ text: "test" });

		var oList = new sap.m.List('customerlist', {
		    headerText : "Customers",
		    noDataText: "No Customers Found"
		    
		});

		
		var oTemp = new sap.m.StandardListItem({
		    title: "{FirstName}",
		    description: "{Title}",
		    type: sap.m.ListType.Active,
            press: function(evt){  oController.categorySelected(evt);}
		});

		//oTemp.attachPress(oController.categorySelected, this)
		 
		oList.bindItems("/Employees", oTemp);
		//new sap.m.StandardListItem(sId?, mSettings?)

		//return oList;

		var homePage = new sap.m.Page("homepage", {
			title:"Customers",
			//showNavButton: true,
			content:[oList]
		});
		
		return homePage;

	}

});