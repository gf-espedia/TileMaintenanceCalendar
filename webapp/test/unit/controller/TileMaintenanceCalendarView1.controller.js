/*global QUnit*/

sap.ui.define([
	"TileMaintenanceCalendar/TileMaintenanceCalendar/controller/TileMaintenanceCalendarView1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TileMaintenanceCalendarView1 Controller");

	QUnit.test("I should test the TileMaintenanceCalendarView1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});