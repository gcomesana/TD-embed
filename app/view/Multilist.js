/**
 * A specialization of MultiSelect without border and with single selection by
 * default
 */
Ext.require(["Ext.ux.form.MultiSelect"])
Ext.define ("LSP.view.Multilist", {
	extend: "Ext.ux.form.MultiSelect",
	alias: "widget.multilist",

	name: "multilist",
	frame: false,
	allowBlank: false,
	maxSelections: 1,

	ddReorder: true,

	initComponent: function (arguments) {
		var me = this
		var myConfig = {
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