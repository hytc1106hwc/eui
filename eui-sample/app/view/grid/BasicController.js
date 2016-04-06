/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Eui.sample.view.grid.BasicController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.sample-basic-grid',
    requires: ['Eui.sample.model.Base'],
    init: function () {

    },

    onRowAdd: function (grid) {
        var me = this,
            session = me.getSession(),
            selectedPage = me.getViewModel().get('currentPage'),
            tree = me.lookupReference('tree');

//        var record = session.createRecord('Eui.sample.model.Base', {
//            MSG_ID: '1111122',
//            MSG_LABEL: '11022TEST'
//        });
//
//        grid.onRowAdd(grid, record, 0, function () {    // callback이 필요할 경우 구현한다.
//            console.log('그리드 내부에서 콜백철...', arguments, session)
//        });


        grid.onRowAdd(grid, {
            randomInt: Ext.Number.randomInt(1, 1000000000000)
        }, 0, function () {    // callback이 필요할 경우 구현한다.
            console.log('그리드 내부에서 콜백철...', arguments)
        });
    },

    onRowReg: function () {
        this.getViewModel().set('messageRecord', Ext.create('Eui.sample.model.Base', {
            MSG_ID: Ext.Number.randomInt(1, 1000000000000)
        }));

        Util.commonPopup(this.getView(), '메시지 등록', 'Eui.sample.view.grid.RecordForm', 530, 200, null, {
            modal: true
        }, true).show();
    },

    onRowDelete: function (grid) {
        grid.onRowDelete(grid, function (store, records) {
            store.remove(records);
            store.sync({
                success: function () {
                    Ext.Msg.alert('확인', '삭제되었습니다.');
                }
            });
        }, grid);
    },

    onRowSave: function (grid) {
        Ext.Msg.show({
            title: '확인',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            message: '그리드 정보를 저장하시겠습니까?',
            fn: function (btn) {
                if (btn === 'yes') {
                    grid.store.sync({
                        success: function () {
                            Ext.Msg.alert('확인', '저장되었습니다.');
                        }
                    })
                }
            }
        });
    },

    onGridSelect: function (grid, record) {
        this.getViewModel().set("messageRecord", record);
    },

    onSaveForm: function () {
        this.getViewModel().get("messageRecord").save();
    }
});