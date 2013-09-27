Ext.direct.Manager.addProvider(Ext.app.REMOTING_API);

var formPanel = Ext.create('Ext.form.FormPanel', {
	itemId : 'formPanel',
	frame : true,
	layout : 'anchor',
	defaultType : 'textfield',
	defaults : {
		anchor : '-10',
		labelWidth : 65
	},
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
			greetingService.sayHello(params, function(result) {
				Ext.Msg.alert('Got from server via Ext Direct', result);
			});
		}
	} ]
});

Ext.onReady(function() {
	Ext.create('Ext.window.Window', {
		title : 'Ext Direct sample',
		height : 200,
		width : 500,
		layout : 'fit',
		items : formPanel
	}).show();
});
