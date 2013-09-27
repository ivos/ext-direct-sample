Ext.direct.Manager.addProvider(Ext.app.REMOTING_API);

var formPanel = Ext.create('Ext.form.FormPanel', {
	itemId : 'formPanel',
	frame : true,
	defaultType : 'textfield',
	items : [ {
		fieldLabel : 'First name',
		name : 'firstName'
	}, {
		fieldLabel : 'Last name',
		name : 'lastName'
	} ],
	buttons : [ {
		text : 'Submit',
		handler : function() {
			var formPanel = this.up('#formPanel');
			var user = formPanel.getValues();
			var params = {
				user : user
			};
			greetingService.sayHello(params, function(greeting) {
				Ext.Msg.alert('Got from server via Ext Direct', greeting.text);
			});
		}
	} ]
});

Ext.onReady(function() {
	Ext.create('Ext.window.Window', {
		title : 'Ext Direct sample',
		height : 150,
		width : 300,
		layout : 'fit',
		items : formPanel
	}).show();
});
