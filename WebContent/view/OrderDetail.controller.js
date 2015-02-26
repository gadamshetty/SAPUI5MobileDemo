sap.ui.controller("view.OrderDetail", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.OrderDetail
*/
	onInit: function() {
		// check in http://jsonformatter.curiousconcept.com/
		// need to run this url:	http://services.odata.org/Northwind/Northwind.svc/Employees(1)/Orders(10258)?$format=json
		this._router = sap.ui.core.UIComponent.getRouterFor(this);
		this._router.attachRoutePatternMatched(this._loadOrderDetail, this);
	},

	_loadOrderDetail : function(oEvent) {
		//alert("checking for router matched to load orders");
		//debugger;
		//console.log(oEvent);
		if (oEvent.getParameter("name") === "orderdetail") {
			var oOrdersList = this.getView().byId("orderlist");
			this.empid = oEvent.getParameter("arguments").empid;
				this.orderid = oEvent.getParameter("arguments").orderid;
				var model = sap.ui.getCore().byId('app').getModel();
				var orderscontext = model.getContext('/Employees('+this.empid+')/Orders('+this.orderid+')/');
				console.log("order context is :");
				console.log(orderscontext);
				thismodel = new sap.ui.model.odata.ODataModel("proxy/http/services.odata.org/Northwind/Northwind.svc/Employees(1)/Orders(10258)/");
			    var thisview = this.getView();
			    //thisview.setBindingContext(orderscontext);
			    thisview.setModel(thismodel,'ordermodel');
		}
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.OrderDetail
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.OrderDetail
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.OrderDetail
*/
//	onExit: function() {
//
//	}

});