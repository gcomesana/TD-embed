/**
 * Created by JetBrains WebStorm.
 * User: bioinfo
 * Date: 05/01/12
 * Time: 18:07
 * To change this template use File | Settings | File Templates.
 */



var uniComboStore = Ext.create ("LSP.store.ProteinLookup")


// Ext.create("Ext.form.field.ComboBox", {
Ext.define ("LSP.view.ProteinLookup", {
	extend: "Ext.form.field.ComboBox",
	alias: "widget.combo-protein-lookup",

	queryMode: "remote",
	store: uniComboStore,
	displayField: "names",
	valueField: "entry", // like P92347
	typeAhead:true,
	minChars: 3,
	queryParam: "target_uuid",
	fieldLabel: "Term",
	labelWidth: 40,
	width: 300,
	triggerAction: "query",
	emptyText: "Start typing free text or, i.e., BRCA1",

	listConfig: {
		getInnerTpl: function() {
			return '<div data-qtip="genes: {genes}">{entry}<br>' +
				'<small><i><tpl for="names"><b>{.}</b><br/></tpl></i></small></div>';
		},
		emptyText: "Start typing..."
	}
})