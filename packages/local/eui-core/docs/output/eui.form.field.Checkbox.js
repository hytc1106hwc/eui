Ext.data.JsonP.eui_form_field_Checkbox({"tagname":"class","name":"eui.form.field.Checkbox","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Checkbox.js","href":"Checkbox.html#eui-form-field-Checkbox"}],"aliases":{"widget":["euicheckbox"]},"alternateClassNames":[],"extends":"Ext.form.field.Checkbox","mixins":[],"requires":[],"uses":[],"members":[{"name":"cellCls","tagname":"property","owner":"eui.form.field.Checkbox","id":"property-cellCls","meta":{"private":true}},{"name":"inputValue","tagname":"property","owner":"eui.form.field.Checkbox","id":"property-inputValue","meta":{"private":true}},{"name":"uncheckedValue","tagname":"property","owner":"eui.form.field.Checkbox","id":"property-uncheckedValue","meta":{"private":true}},{"name":"width","tagname":"property","owner":"eui.form.field.Checkbox","id":"property-width","meta":{"private":true}},{"name":"getValue","tagname":"method","owner":"eui.form.field.Checkbox","id":"method-getValue","meta":{}},{"name":"initComponent","tagname":"method","owner":"eui.form.field.Checkbox","id":"method-initComponent","meta":{"private":true}}],"code_type":"ext_define","id":"class-eui.form.field.Checkbox","short_doc":"Summary\n\ncheckbox의 값은 기본으로 'Y', 'N'으로 한다. ...","component":false,"superclasses":["Ext.form.field.Checkbox"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.form.field.Checkbox<div class='subclass '><strong>eui.form.field.Checkbox</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Checkbox.html#eui-form-field-Checkbox' target='_blank'>Checkbox.js</a></div></pre><div class='doc-contents'><h2>Summary</h2>\n\n<p>checkbox의 값은 기본으로 'Y', 'N'으로 한다.\ngetValue()에서 return시 true, false 대신 Y, N을 반환.\n이 클래스는 뷰모델의 바인딩이 필수 입니다.</p>\n\n<h2>사용예</h2>\n\n<pre><code> fieldLabel: '체크박스',\n xtype: 'euicheckbox',\n // case1 체크 해제.\n bind: {\n     value : 'N'     // 체크해제\n },\n // case 2 체크\n bind: {\n     value : 'Y'\n },\n // case 3 뷰모델 설정.\n bind: '{FORMRECORD.fiedl1}'\n 또는\n bind : {\n     value: '{FORMRECORD.fiedl1}'\n }\n</code></pre>\n\n<h1>Values</h1>\n\n<p>Ext.form.field.Checkbox를 확장했다. 기존 클래스가 true, false, 1, on을 사용한다면\n이 클래스는 Y와 N 두가지를 사용한다.</p>\n\n<pre class='inline-example '><code>Ext.define('Checkbox', {\n     extend: '<a href=\"#!/api/eui.form.Panel\" rel=\"eui.form.Panel\" class=\"docClass\">eui.form.Panel</a>',\n     defaultListenerScope: true,\n     viewModel: {\n\n     },\n     tableColumns: 1,\n     title: '체크박스',\n     items: [\n        {\n          fieldLabel: '체크박스',\n          itemId: 'checkbox1',\n          xtype: 'euicheckbox',\n          bind: '{RECORD.CHECKBOX1}'\n        },\n        {\n          fieldLabel: '체크박스',\n          xtype: 'euicheckbox',\n          bind: {\n             value : 'Y'\n          }\n        },\n        {\n          fieldLabel: '체크박스',\n          xtype: 'euicheckbox',\n          bind: {\n             value : 'N'\n          }\n        }\n     ],\n     bbar: [\n         {\n             text: '체크',\n             xtype : 'euibutton',\n             handler: 'checkboxHandler'\n         },\n         {\n             text: '체크해제',\n             xtype : 'euibutton',\n             handler: 'unCheckboxHandler'\n         },\n         {\n             text: '서버로전송',\n             xtype: 'euibutton',\n             handler: 'onSaveMember'\n         }\n    ],\n\n    listeners : {\n         render: 'setRecord'\n    },\n\n    setRecord: function () {\n         this.getViewModel().set('RECORD', Ext.create('Ext.data.Model', {\n             CHECKBOX1 : 'N'\n          }));\n    },\n\n    onSaveMember: function () {\n         var data = this.getViewModel().get('RECORD').getData();\n         <a href=\"#!/api/eui.Util-method-CommonAjax\" rel=\"eui.Util-method-CommonAjax\" class=\"docClass\">Util.CommonAjax</a>({\n             method: 'POST',\n             url: 'resources/data/success.json',\n             params: {\n                 param: data\n             },\n             pCallback: function (v, params, result) {\n                 if (result.success) {\n                     Ext.Msg.alert('저장성공', '정상적으로 저장되었습니다.');\n                 } else {\n                     Ext.Msg.alert('저장실패', '저장에 실패했습니다...');\n                 }\n             }\n        });\n     },\n\n     checkboxHandler: function(button){\n         this.down('#checkbox1').setValue('Y');\n         //this.down('#checkbox1').setValue(true);\n     },\n\n     unCheckboxHandler: function(button){\n         this.down('#checkbox1').setValue('N');\n         this.down('#checkbox1').setValue(false);\n     }\n });\n\n Ext.create('Checkbox',{\n     width: 300,\n     renderTo: Ext.getBody()\n });\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-cellCls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.Checkbox'>eui.form.field.Checkbox</span><br/><a href='source/Checkbox.html#eui-form-field-Checkbox-property-cellCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.Checkbox-property-cellCls' class='name expandable'>cellCls</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;fo-table-row-td&#39;</code></p></div></div></div><div id='property-inputValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.Checkbox'>eui.form.field.Checkbox</span><br/><a href='source/Checkbox.html#eui-form-field-Checkbox-property-inputValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.Checkbox-property-inputValue' class='name expandable'>inputValue</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;Y&#39;</code></p></div></div></div><div id='property-uncheckedValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.Checkbox'>eui.form.field.Checkbox</span><br/><a href='source/Checkbox.html#eui-form-field-Checkbox-property-uncheckedValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.Checkbox-property-uncheckedValue' class='name expandable'>uncheckedValue</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;N&#39;</code></p></div></div></div><div id='property-width' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.Checkbox'>eui.form.field.Checkbox</span><br/><a href='source/Checkbox.html#eui-form-field-Checkbox-property-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.Checkbox-property-width' class='name expandable'>width</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;100%&#39;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getValue' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.Checkbox'>eui.form.field.Checkbox</span><br/><a href='source/Checkbox.html#eui-form-field-Checkbox-method-getValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.Checkbox-method-getValue' class='name expandable'>getValue</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">string</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Y &amp; N 을 반환한다. ...</div><div class='long'><p>Y &amp; N 을 반환한다.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">string</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.form.field.Checkbox'>eui.form.field.Checkbox</span><br/><a href='source/Checkbox.html#eui-form-field-Checkbox-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.form.field.Checkbox-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});