({
	cancelBtn : function(component, event, helper) {
		component.set("v.displayModal", true);
	},
	saveBtn : function(component, event, helper) {
		//create server calls
	},
	closeBtn : function(component, event, helper) {
        component.set("v.displayModal", false);
	},
	yesBtn : function(componet, event, helper) {
   	var urlEvent = $A.get("force:navigateToURL");
		urlEvent.setParams({
			"url": "https://www.google.com"
		});
		urlEvent.fire();
    component.set("v.displayModal", false);
	},
	noBtn : function(component, event, helper) {
        component.set("v.displayModal", false);
	}

})