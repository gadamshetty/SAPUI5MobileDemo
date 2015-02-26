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
		//this._router.getRoute("orderdetail").attachPatternMatched(this._loadOrderDetail, this);
	},

	_loadOrderDetail : function(oEvent) {
		//alert("checking for router matched to load orders");
		//debugger;
		//console.log(oEvent);
		if (oEvent.getParameter("name") === "orderdetail") {
			var oOrdersList = this.getView().byId("orderlist");
			this.empid = oEvent.getParameter("arguments").empid;
				this.orderid = oEvent.getParameter("arguments").orderid;
				var model = sap.ui.getCore().byId('app').getModel('contextmodel');
				var orderscontext = model.getContext('/Employees('+this.empid+')/Orders('+this.orderid+')/');
			    var thisview = this.getView();
			    //console.log("view model");
			    //console.log(thisview.getModel());
			    //thisview.setBindingContext(orderscontext,'singleRowModel');
				//console.log('writing odata');
				//console.log(oData);
			    
			    ////if above does not work....
			    // create OData model from URL  
			    /*
																					        var oModel = new sap.ui.model.odata.ODataModel(uri, true);   
																					        oTable.setModel(oModel);  
																					          
																					     // create an additional JSON model for the result of the read request    
																					        var singleRowModel = new sap.ui.model.json.JSONModel();    
																					        //sap.ui.getCore().setModel(beveragesModel, "beverages");  
																					        oTable.setModel(singleRowModel, "singleRowModel");    
																					         
																					          oModel.read("/Category_Sales_for_1997('Beverages')", null, null, false,   
																					                  function(oData, oResponse) {  
																					                          var beverageResult = {results:[oData]};  
																					                             singleRowModel.setData(beverageResult);  
																					          },  function(oError){  
																					              alert("Read failed");}  
																					          );  
																					          
																					        oTable.bindRows("singleRowModel>/results"); 
																					        */
			    
			    var singleRowModel = new sap.ui.model.json.JSONModel();    
			    model.read('/Employees('+this.empid+')/Orders('+this.orderid+')', null, null, false,   
		                  function(oData, oResponse) {  
		                             singleRowModel.setData(oData);  
		                             thisview.setModel(singleRowModel, "singleRowModel"); 
		                             console.log("single view model is :");
		                             console.log(singleRowModel);
		          },  function(oError){  
		              alert("Read failed");}  
		          ); 
			    
			    
/*		          
		        var singleRowModel = new sap.ui.model.json.JSONModel();
		        singleRowModel.setData({
		        	"OrderID":"11122",
		        	"firstName":"naresh shipping comp"
        		});
		        thisview.setModel(singleRowModel, "singleRowModel");    
	*/	         
	        
		        
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