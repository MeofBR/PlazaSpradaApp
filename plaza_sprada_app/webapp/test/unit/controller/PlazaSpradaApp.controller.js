/*global QUnit*/

sap.ui.define([
	"sapcom/plaza_sprada_app/controller/PlazaSpradaApp.controller"
], function (Controller) {
	"use strict";

	QUnit.module("PlazaSpradaApp Controller");

	QUnit.test("I should test the PlazaSpradaApp controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
