

(function() {
	Ext.Loader.setConfig({
		enabled : true,
		disableCaching: false,
		paths	 : {
			"LSP": 'app',
			"Ext.ux": "extjs4.0.2/ux"
		}
	});

//		Ext.require(['*']);

	Ext.require([
		'Ext.form.Panel',
		'Ext.tip.*',
		'LSP.view.Viewport',
		'LSP.view.ToolsPanel',
		'LSP.view.TDToolbar'
	]);

	Ext.Ajax.disableCaching = false;

	Ext.application({
		name: "LSP",
		appFolder: "app",

		controllers: [
		],

		autoCreateViewport: true,

		launch: function() {
			console.info("launchinnggggggggggg")

			Ext.create ("Ext.tip.ToolTip", {
				html: "<b>UniProt</b> id like '<i>P12345</i>'",
				target: "txtIdSearch"
//				width: 200
			})

			Ext.QuickTips.init();

			// get a reference to the HTML element with id "hideit" and add a click listener to it
			Ext.get("hideit").on('click', function() {
				// get a reference to the Panel that was created with id = 'west-panel'
				var w = Ext.getCmp('west-panel');
				// expand or collapse that Panel based on its collapsed property state
				w.collapsed ? w.expand() : w.collapse();
			});
		} // EO launch!!
	}) // EO Ext.application
/*
	var panelBody = Ext.ComponentQuery.query ("viewport > panel")
	console.info ("panel.body: "+panelBody.body)
*/
})();