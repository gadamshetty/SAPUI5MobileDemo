jQuery.sap.require("sap.m.InstanceManager");

sap.ui.controller("view.Home", {

	onInit : function () {
		//console.log("init in controller is ");
		//console.log(this);
		this._router = sap.ui.core.UIComponent.getRouterFor(this);
		// trigger first search to set visibilities right
		
		//debugger;
		//this.router = this;
		//console.log("control obj is : ");
		//console.log(this);
		///console.log("router is :");
		//console.log(this._router);
		
	},

    categorySelected: function (evt,view) {
        //debugger;
        var caller = this;
        console.log(caller);
        //alert("category selected");
        var thiscontext = evt.getSource().getBindingContext('contextmodel');
        //var viewModel = this.oParent.oParent.getModel();
        
        var thisemployee = thiscontext.getObject();
        
        //console.log("employee id selected is : " + thisemployee.EmployeeID.toString());
        //var router = this.getRouter();
        //var router = this.getController()._router; 
		
        this._router.navTo("orders",{empid : thisemployee.EmployeeID })
       // console.log(this);
        
    }
});