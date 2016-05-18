/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 3.5.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.Loader.setPath('eui.form.field.Text','packages/eui-core/src/../build/eui-core-debug.js');
Ext.Loader.setPath('eui.form.RadioGroup','packages/eui-core/src/../build/eui-core-debug.js');

Ext.application({
    views: [
        'main.Main',
        'main.LeftMenu',
        'form.Panel'
    ],
    name: 'euisa',

    init: function() {
        eui.Config.initLocaleMessage();
    },

    launch: function() {
        Ext.create('euisa.view.main.Main');
    }

});
