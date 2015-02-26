jQuery.sap.declare("model.Config");

model.Config = {};

(function () {
	var responderOn = jQuery.sap.getUriParameters().get("responderOn");
	model.Config.isMock = ("true" === responderOn);
}
)();

model.Config.getServiceUrl = function () {

   // return "https://cors-anywhere.herokuapp.com/services.odata.org/Northwind/Northwind.svc/";
	return "proxy/http/services.odata.org/Northwind/Northwind.svc/";
//json format http://services.odata.org/Northwind/Northwind.svc/Employees(1)/Orders?$format=json
};

model.Config.getUser = function () {
	
	return "ESPM_TEST";

};

model.Config.getPwd = function () {
	
	return "Espm1234";

};

model.Config.getHost = function () {
	
	return "/uilib-sample/proxy/http/ec2-54-225-119-138.compute-1.amazonaws.com:50000";

};