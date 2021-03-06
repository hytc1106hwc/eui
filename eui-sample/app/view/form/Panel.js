Ext.define('Eui.sample.view.form.Panel', {
    extend: 'Ext.panel.Panel',
    xtype: 'sample-form',
    title: 'EUI 사용하기',

    requires: [
        'eui.form.field.Month',
        'eui.form.field.Checkbox',
        'eui.form.field.TextArea',
        'eui.form.field.HtmlEditor',
        'eui.form.field.Display',
        'eui.form.field.Number',
        'eui.form.field.File',
        'Eui.sample.view.form.CompanyCombo',
        'Eui.sample.view.form.Controller',
        'eui.form.field.ComboBox',
        'eui.form.field.Date',
        'eui.form.CheckboxGroup',
        'eui.form.RadioGroup',
        'eui.form.field.Text',
        'eui.form.field.PopUpPicker'
    ],

    controller: 'sample-form',
    viewModel: {

    },
    defaults: {
        margin: 5,
        allowBlank: true
    },

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    items: [
        {
            flex: 1,
            reference: 'regform',
            xtype: 'euiform',
            title: 'EUI 폼',
            tableColumns: 2,
            defaults: {
                allowBlank: true
            },
            items: [
                {
                    fieldLabel: '체크박스',
                    xtype: 'euicheckbox',
                    listeners: {
                        change: function (c, newValue, oldValue) {
                            console.log(newValue, oldValue)
                        }
                    },
                    bind: '{RECORD.CHECKBOX1}'
                },
                {
                    xtype: 'euicheckboxgroup',
                    fieldLabel: '체크박스그룹',
                    columns: 4,
                    reference: 'euicheckboxgroup01',
                    bind:'{RECORD.CHECKBOXGROUP}',
                    defaults: {
                        name: 'CHECKBOXGROUP'
                    },
                    items: [
                        { boxLabel: '한국', inputValue: 'KOREA' },
                        { boxLabel: '일본', inputValue: 'JAPAN'},
                        { boxLabel: '미국', inputValue: 'USA' },
                        { boxLabel: '러시아', inputValue: 'RUSIA' }
                    ]
                },
                {
                    xtype: 'euiradiogroup',
                    reference: 'euiradiogroup',
//                    allowBlank: false,
                    fieldLabel: '라디오그룹',
                    items: [
                        {
                            boxLabel: 'INPUTVALUE: A',
                            inputValue: 'A'
                        },
                        {
                            boxLabel: 'INPUTVALUE: B',
                            inputValue: 'B'
                        }
                    ],
                    bind: '{RECORD.RADIOGROUP}'
                },
                {
                    fieldLabel: '월달력',
                    xtype: 'monthfield',
                    bind: '{RECORD.MONTHFIELD}'
                },
                {
                    fieldLabel: '달력',
                    xtype: 'euidate',
                    bind: '{RECORD.DATEFIELD}'
                },
                {
                    fieldLabel: '텍스트',
                    xtype: 'euitext',
                    bind: '{RECORD.TEXTFIELD}'
                }

                /*,
                {
                    allowBlank: true,
                    fieldLabel: '아이디',
                    bind: '{RECORD.userId}',
                    xtype: 'euitext'
                },
                {
                    fieldLabel: '비밀번호',
                    xtype: 'euitext'
                },
                {
                    fieldLabel: '비밀번호 확인',
                    xtype: 'euitext'
                },
                {
                    fieldLabel: '성명',
                    bind: '{RECORD.userName}',
                    xtype: 'euitext'
                },
                {
                    fieldLabel: '이메일',
//                    allowBlank: false,
                    xtype: 'euitext',
                    vtype: 'email'
                },
                {
                    fieldLabel: '연락처',
//                    allowBlank: false,
                    name: 'phone',
                    xtype: 'euitext'
                },
                {
                    xtype: 'euiradiogroup',
                    fieldLabel: '성별',
                    bind: {
                        value: '{RECORD.gender}'
                    },
                    defaults: {
                        name: 'gender'
                    },
                    items: [
                        {
                            boxLabel: '남성',
                            inputValue: 'M'
                        },
                        {
                            boxLabel: '여성',
                            inputValue: 'F'
                        }
                    ]
                },

                {
                    fieldLabel: '생년월일',
                    xtype: 'euidate'
                },
                {
                    fieldLabel: '회사',
                    xtype: 'companycombo'
                },
                {
                    fieldLabel:'파일',
                    allowBlank: true,
                    xtype:'euifile'
                },
                {
                    fieldLabel:'연봉',
                    bind: '{RECORD.payment1}',
                    xtype:'euinumber'
                },
                {
                    xtype:'euidisplay',
                    fieldLabel:'DESC',
                    value:'ddd'
                },
                {
                    fieldLabel: '성명',
                    xtype: 'euitext'
                },
                {
                    height: 150,
                    fieldLabel:'자기소개',
                    xtype:'euihtmleditor'
                },
                {
                    height: 150,
                    fieldLabel:'경력기술',
                    xtype:'euitextarea'
                }*/
            ],
            buttons: [
                {
                    reference : 'radioValue',
                    width: 150,
                    xtype: 'euicombo',
                    displayField: 'name',
                    valueField: 'code',
                    value: 'A',
                    listeners: {
                        select: 'setRadioGroup'
                    },
                    store: {
                        data: [
                            {
                                name: 'INPUTVALUE A',
                                code: 'A'
                            },
                            {
                                name: 'INPUTVALUE B',
                                code: 'B'
                            }
                        ]
                    }
                },
                {
                    text: '체크박스그룹 전체 체크',
                    handler:'checkBoxgroupAllCheck'
                },
                {
                    text: '체크박스그룹 전체 체크',
                    handler: 'checkBoxgroupAllUnCheck'
                },
                {
                    text: '확인',
                    formBind: true,
                    handler: 'onSaveMember'
                },
                {
                    text: '취소'
                }
            ]
        }
    ]
})