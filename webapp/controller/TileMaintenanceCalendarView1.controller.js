sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("TileMaintenanceCalendar.TileMaintenanceCalendar.controller.TileMaintenanceCalendarView1", {
		onInit: function () {
			window.location.replace("https://flpnwc-m9a44f3468.dispatcher.hana.ondemand.com/sites/espediasimplemaintenance#Shell-home ");
			window.open("https://equipmentcalendar-m9a44f3468.dispatcher.hana.ondemand.com", '_blank');
		}
	});
});