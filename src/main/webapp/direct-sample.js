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
	items : {
		fieldLabel : 'Name',
		name : 'name'
	},
	buttons : [ {
		text : 'Submit',
		handler : function() {
			var formPanel = this.up('#formPanel');
			var name = formPanel.getValues()['name'];
			console.log('Name: ' + name);
			greetingService.sayHello(name, function(result) {
				Ext.Msg.alert('Got from server via Ext Direct', result);
			});
		}
	} ]
});

Ext.onReady(function() {
	Ext.create('Ext.window.Window', {
		title : 'Ext Direct sample',
		height : 400,
		width : 500,
		layout : 'fit',
		items : formPanel
	}).show();
});
