
/**
 * This is a panel holding the application tools.
 * This will be docked at left, and containing a widget which is the tools list
 */
Ext.require(["LSP.view.Multilist"])
Ext.define ("LSP.view.ToolsPanel", {
	extend: "Ext.panel.Panel",
	alias: "widget.toolspanel",
//	require: "Ext.ux.form.MultiSelect",

	id: 'toolspanel',
	dock: 'left',
	width: 180,
	border: true,
	frame: false,
	title: "Tools",

/*
	layout: {
		type: "vbox",
		align: "strech"
	},
*/
	initComponent: function () {
		var me = this
		me.items = [{
//			xtype: "multiselect",
			xtype: "multilist",
			store: [[1,'Description'],[2, 'Citations'], [3, 'Pathways'], [4, 'Interactions']],
			value: [1],
			id: "list-tools",
			width: 180
		}, {
			xtype: "panel",
			title: "History",
			border: false,
			html: "<b>No history yet</b>"
		}]

		var myConfig = {
			layout: {
				type: "vbox",
				align: "strech"
			},
			
			style: {
				borderWidth: "0px",
				borderStyle: "none"
			},

			cls: "borderZero"
		}

		Ext.apply(myConfig)
		me.callParent(arguments)
	}


})