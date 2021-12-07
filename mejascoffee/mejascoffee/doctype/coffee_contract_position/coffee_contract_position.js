// Copyright (c) 2021, Shahzad Naser and contributors
// For license information, please see license.txt

frappe.ui.form.on('Coffee Contract Position', {
	// refresh: function(frm) {

	// }
	amount_of_bags: function(frm){
		frm.trigger("calculate_amount");
	},
	kg_per_bag: function(frm){
		frm.trigger("calculate_amount");
	},
	price_per_kg: function(frm){
		frm.trigger("calculate_amount");
	},
	calculate_amount:function(frm){
		frm.set_value("amount_of_kg", 0);
		frm.set_value("total_value", 0);
		if (frm.doc.amount_of_bags && frm.doc.kg_per_bag && frm.doc.price_per_kg){
			frm.set_value("amount_of_kg", frm.doc.amount_of_bags * frm.doc.kg_per_bag);
			frm.set_value("total_value", frm.doc.amount_of_bags * frm.doc.kg_per_bag * frm.doc.price_per_kg);
		}

		frm.refresh_field("amount_of_kg");
		frm.refresh_field("total_value");
	}
});
