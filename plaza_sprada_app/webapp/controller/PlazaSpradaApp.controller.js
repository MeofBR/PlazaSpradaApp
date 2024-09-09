sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("sap.com.plazaspradaapp.controller.PlazaSpradaApp", {
            onInit: function () {

            },

            onCreateAgendamento: function () {               
                if (!this._createAgendamentoDialog) {
                    this._createAgendamentoDialog = this.byId("createAgendamentoDialog");
                }
                this._createAgendamentoDialog.open();
            },    
          
            onReservar: function () {
                let oDatePicker = this.byId("reservaDatePicker");
                let oSelect = this.byId("selectAreaComum");
    
                let sData = oDatePicker.getDateValue();
                let sAreaComum = oSelect.getSelectedItem().getText();
    
                if (!sData || !sAreaComum) {
                    MessageBox.warning("Por favor, selecione uma data e uma área comum.");
                    return;
                }    
                
                MessageBox.success("Agendamento criado com Sucesso!");    
                
                this._createAgendamentoDialog.close();
            },
    
           
            onCancelarDialog: function () {               
                if (this._createAgendamentoDialog) {
                    this._createAgendamentoDialog.close();
                }
            }
        });
    });
