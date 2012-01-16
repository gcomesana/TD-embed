


Ext.require (["LSP.view.ToolsPanel", "LSP.view.TDToolbar"])
Ext.define("LSP.view.Viewport", {
	extend: "Ext.container.Viewport",
	alias: "widget.tdviewport",
//	require: ["LSP.view.ToolsPanel", "LSP.view.TDToolbar"],

	layout: "fit",

	initComponent: function () {
		var me = this

		me.items = [{
			xtype: "panel",
			border: false,

			dockedItems: [{
				xtype: "toolspanel",
				dock: "left"
			}, {
				xtype: "td-toolbar",
				dock: "top"
			}],

			items: [{
				xtype: "panel",
				html: "Tabpanel for tools",
				frame: false,
				frameHeader: false,
				html: "<h1>Main panel!!!</h1>"
			}]

		}] // me.items

// if not included, the component is not initialized and then the page is blank!!
		this.callParent(arguments)
	}
})