frappe.query_reports["Sales Order Staging Report"] = {
    "filters": [
        
        {
            label: __("Sales Orders"),
            fieldname: "sales_order",
            fieldtype: "MultiSelectList",
            get_data: function(txt) {
                return frappe.db.get_link_options('Sales Order', txt);
            }
        },  
        
    ]
};