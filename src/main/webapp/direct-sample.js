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
			var form = this.up('#formPanel').getForm();
			console.log(form.getValues());
			var user = Ext.ModelManager.create(form.getValues(),
					'com.github.ivos.extdirect.model.User');
			var errors = user.validate();
			if (!errors.isValid()) {
				form.markInvalid(errors);
			} else {
				var params = {
					user : user.data
				};
				greetingService.sayHello(params, function(greeting) {
					Ext.Msg.alert('Got from server via Ext Direct',
							greeting.text);
				});
			}
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
