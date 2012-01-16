/**
 * Defines a toolbar with two initial buttons to perform quick target search based
 * on either name or sequence
 */
Ext.require(["LSP.view.ProteinLookup"])
Ext.define ("LSP.view.TDToolbar", {
	extend: "Ext.toolbar.Toolbar",
	alias: "widget.td-toolbar",

	dock: "top",
	height: 40,

	items: [{
		xtype: "combo-protein-lookup",
		listeners: {
			'afterrender': function (comp, opts) {
				Ext.tip.QuickTipManager.register({
					target: comp.getEl(),
					text: 'Start typing free text or a gene name, i.e., BRCA1'
				});
			} // EO listeners
		}
	}, {
		xtype: "button",
		text: "Search",
		id: "btnSearch",
		itemId: "btnSearch",
		name: "btnSearch"
	},
	'-', {
		xtype: "button",
		text: "Sequence search...",
		id: "btnSeqSearch",
		itemId: "btnSeqSearch",
		name: "btnSeqSearch"
	}]
	
})
