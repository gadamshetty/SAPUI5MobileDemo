sap.ui.controller("view.Orders", {

	navPressed: function(){
		//alert("nav press");
		window.history.go(-1);
	},
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Orders
*/
	onInit: function() {
		this._router = sap.ui.core.UIComponent.getRouterFor(this);
		this._router.attachRoutePatternMatched(this._loadOrders, this);
	},

	_loadOrders : function(oEvent) {
		//alert("checking for router matched to load orders");
		//debugger;
		console.log(oEvent);
		if (oEvent.getParameter("name") === "orders") {
			var oOrdersList = this.getView().byId("orderlist");
			
				this.empID = oEvent.getParameter("arguments").empid;
				var model = sap.ui.getCore().byId('app').getModel();
				var orderscontext = model.getContext('/Employees('+this.empID+')');
			    var thisview = this.getView();
			    thisview.setBindingContext(orderscontext);
		}
	},
	orderSelected: function(evt){
		
		var selectedOrder = evt.getSource().getBindingContext().getObject();
		var orderid1 = selectedOrder.OrderID;
		console.log(this.empID);
		console.log(orderid1);
		this._router.navTo("orderdetail",{empid:this.empID, orderid:orderid1});
	},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Orders
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Orders
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Orders
*/
//	onExit: function() {
//
//	}

});