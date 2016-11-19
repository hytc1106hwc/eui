/***
 *
 * ## Summary
 *
 * 날자 표시용 그리드 컬럼 클래스 .
 */
Ext.define('eui.grid.column.Date', {
    extend: 'Ext.grid.column.Date',
    alias: 'widget.euidatecolumn',
    format: 'Y/m/d',
	align : 'center',
	width : 100,
    mixins: [
        'eui.mvvm.GridRenderer'
    ],
    initComponent: function() {
        var me = this;
        if(!me.renderer){
            me.renderer = me.dateRenderer
        }
        me.callParent(arguments);
    }
});