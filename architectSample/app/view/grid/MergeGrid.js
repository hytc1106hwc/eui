/*
 * File: app/view/grid/MergeGrid.js
 *
 * This file was generated by Sencha Architect version 3.5.1.
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

Ext.define('euisa.view.grid.MergeGrid', {
    extend: 'eui.grid.Merge',
    alias: 'widget.samplemergegrid',

    requires: [
        'euisa.view.grid.MergeGridViewModel',
        'Ext.grid.column.Number'
    ],

    viewModel: {
        type: 'grid.mergegrid'
    },
    height: 250,
    width: 400,
    title: 'Rowspan, Colspan Grid',
    groupFields: [
        {
            field: 'col1',
            mergeConfig: [
                {
                    field: 'col2',
                    cond: 'colspan',
                    value: 2
                },
                {
                    field: 'col3',
                    cond: 'hidden',
                    value: true
                }
            ]
        },
        {
            field: 'col2',
            mergeConfig: [
                
            ]
        }
    ],
    lastMergeColumn: [
        'col3'
    ],
    sumFields: [
        'col4',
        'col5'
    ],

    bind: {
        store: '{megerStore}'
    },
    columns: [
        {
            xtype: 'gridcolumn',
            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                if(value === '합'){
                    return '총계';
                }
                return value;
            },
            width: 150,
            dataIndex: 'col1',
            text: '수입/지출'
        },
        {
            xtype: 'gridcolumn',
            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                var v = value.split('@')[1];
                if(v === '합'){
                    return '합계';
                }
                return v;
            },
            width: 150,
            dataIndex: 'col2',
            text: '대분류'
        },
        {
            xtype: 'gridcolumn',
            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                var v = value.split('@')[2];
                if(v === '합'){
                    return '소계';
                }
                return v;
            },
            width: 150,
            dataIndex: 'col3',
            text: '소분류'
        },
        {
            xtype: 'numbercolumn',
            dataIndex: 'col4',
            text: '1월'
        },
        {
            xtype: 'numbercolumn',
            dataIndex: 'col5',
            text: '2월'
        }
    ]

});