Ext.define('Eui.sample.view.grid.Basic', {
    extend: 'eui.grid.Panel',
    xtype: 'sample-basic-grid',
    title: '기본 그리드',

    /***
     * 페이징 툴바 사용 설정.
     */
    usePagingToolbar: true,

    showRowAddBtn: true,
    showRowDelBtn: true,
    showRowRegBtn: true,
    showRowModBtn: true,
    showRowSaveBtn: true,

//    listeners: {
//        SPGridRowReg: function () {
//            console.log('SPGridRowReg called..');
//        },
//        SPGridRowMod: function () {
//            console.log('SPGridRowMod called..');
//        },
//        SPGridRowAdd: function () {
//
//        },
//        SPGridRowSave: 'onGridRowSave'
//    },

//    onRowAdd: function () {
//        // this.callParent를 꼭 호출하고 arguments를 전달한다.
//        this.callParent([this, {
//            randomInt : Ext.Number.randomInt(1, 1000000000000),
//            CUSTOMER_NAME_ENG: 'SDS',
//            CUSTOMER_NAME_KO: 'SDS'
//        }, 0, function () {    // callback이 필요할 경우 구현한다.
//            console.log('그리드 내부에서 콜백철...')
//        }]);
//    },


    columns: [
        {
            xtype: 'rownumberer'
        },
        {
            text: 'ULD No#{행추가2}',
            width: 100,
            dataIndex: 'CUSTOMER_NAME_ENG',
            editor: {
                xtype: 'hcombobox',
                groupCode: '111',
                setProxyParams: function () {
                    return {
                        aaa: '111'
                    }
                },
                valueColumnDataIndex: 'CUSTOMER_NAME_KO',
                nextBindFields: ['NEXT11'],
                bind: '{NEXT10}'
            }
        },
//        {
//            text: 'CUSTOMER_NAME_KO',
//            editor: {
//                xtype: 'textfield',
//                bind: '{MYTEXT}'
//            },
//            dataIndex: 'CUSTOMER_NAME_KO'
//        },
        {
            text: 'ULD No',
            width: 100,
            dataIndex: 'CUSTOMER_NAME_ENG2',
            editor: {
                xtype: 'hcombobox',
                groupCode: '222',
                setProxyParams: function () {
                    return {
                        bb: '222'
                    }
                },
                valueColumnDataIndex: 'CUSTOMER_NAME_KO2',
                nextBindFields: ['NEXT12'],
                bind: '{NEXT11}'
            }
        },
//        {
//            text: 'CUSTOMER_NAME_KO2',
//            dataIndex: 'CUSTOMER_NAME_KO2'
//        },
        {
            text: 'ULD No',
            width: 100,
            dataIndex: 'CUSTOMER_NAME_ENG3',
            editor: {
                xtype: 'hcombobox',
                groupCode: '333',
                setProxyParams: function () {
                    return {
                        ccc: '333'
                    }
                },
                valueColumnDataIndex: 'CUSTOMER_NAME_KO3',
                nextBindFields: ['NEXT1'],
                bind: '{NEXT12}'
            }
        }
//        {
//            text: 'CUSTOMER_NAME_KO3',
//            dataIndex: 'CUSTOMER_NAME_KO3'
//        }
    ]
});