Ext.data.JsonP.eui_view_Merge({"tagname":"class","name":"eui.view.Merge","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Merge.js","href":"Merge2.html#eui-view-Merge"}],"aliases":{"widget":["mergetableview"]},"alternateClassNames":[],"extends":"Ext.view.Table","mixins":[],"requires":[],"uses":[],"members":[{"name":"bodySelector","tagname":"property","owner":"eui.view.Merge","id":"property-bodySelector","meta":{"private":true}},{"name":"cellSelector","tagname":"property","owner":"eui.view.Merge","id":"property-cellSelector","meta":{"private":true}},{"name":"cellTpl","tagname":"property","owner":"eui.view.Merge","id":"property-cellTpl","meta":{"private":true}},{"name":"innerSelector","tagname":"property","owner":"eui.view.Merge","id":"property-innerSelector","meta":{"private":true}},{"name":"itemSelector","tagname":"property","owner":"eui.view.Merge","id":"property-itemSelector","meta":{"private":true}},{"name":"nodeContainerSelector","tagname":"property","owner":"eui.view.Merge","id":"property-nodeContainerSelector","meta":{"private":true}},{"name":"outerRowTpl","tagname":"property","owner":"eui.view.Merge","id":"property-outerRowTpl","meta":{"private":true}},{"name":"rowSelector","tagname":"property","owner":"eui.view.Merge","id":"property-rowSelector","meta":{"private":true}},{"name":"rowTpl","tagname":"property","owner":"eui.view.Merge","id":"property-rowTpl","meta":{"private":true}},{"name":"sizerSelector","tagname":"property","owner":"eui.view.Merge","id":"property-sizerSelector","meta":{"private":true}},{"name":"tpl","tagname":"property","owner":"eui.view.Merge","id":"property-tpl","meta":{"private":true}},{"name":"getRowByRecord","tagname":"method","owner":"eui.view.Merge","id":"method-getRowByRecord","meta":{"private":true}},{"name":"renderCell","tagname":"method","owner":"eui.view.Merge","id":"method-renderCell","meta":{"private":true}},{"name":"renderRow","tagname":"method","owner":"eui.view.Merge","id":"method-renderRow","meta":{"private":true}},{"name":"renderRows","tagname":"method","owner":"eui.view.Merge","id":"method-renderRows","meta":{"private":true}}],"code_type":"ext_define","id":"class-eui.view.Merge","short_doc":"eui.grid.Merge에서 사용할 테이블 클래스\ncolspan, rowspan정보가 있다면 실행한다. ...","component":false,"superclasses":["Ext.view.Table"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.view.Table<div class='subclass '><strong>eui.view.Merge</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Merge2.html#eui-view-Merge' target='_blank'>Merge.js</a></div></pre><div class='doc-contents'><p><a href=\"#!/api/eui.grid.Merge\" rel=\"eui.grid.Merge\" class=\"docClass\">eui.grid.Merge</a>에서 사용할 테이블 클래스\ncolspan, rowspan정보가 있다면 실행한다.\n이 정보는 <a href=\"#!/api/eui.grid.Merge\" rel=\"eui.grid.Merge\" class=\"docClass\">eui.grid.Merge</a>클래스에서 모델정보로 전달한다.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-bodySelector' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.view.Merge'>eui.view.Merge</span><br/><a href='source/Merge2.html#eui-view-Merge-property-bodySelector' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.view.Merge-property-bodySelector' class='name expandable'>bodySelector</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Outer table ...</div><div class='long'><p>Outer table</p>\n<p>Defaults to: <code>&#39;div.&#39; + Ext.baseCSSPrefix + &#39;grid-item-container table&#39;</code></p></div></div></div><div id='property-cellSelector' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.view.Merge'>eui.view.Merge</span><br/><a href='source/Merge2.html#eui-view-Merge-property-cellSelector' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.view.Merge-property-cellSelector' class='name expandable'>cellSelector</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>cell ...</div><div class='long'><p>cell</p>\n<p>Defaults to: <code>&#39;td.&#39; + Ext.baseCSSPrefix + &#39;grid-cell&#39;</code></p></div></div></div><div id='property-cellTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.view.Merge'>eui.view.Merge</span><br/><a href='source/Merge2.html#eui-view-Merge-property-cellTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.view.Merge-property-cellTpl' class='name expandable'>cellTpl</a> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[&#39;&lt;td &lt;tpl if=&quot;colspan&quot;&gt;colspan={colspan}&lt;/tpl&gt; &lt;tpl if=&quot;rowspan&quot;&gt;rowspan={rowspan}&lt;/tpl&gt; class=&quot;{tdCls}&quot; role=&quot;{cellRole}&quot; {tdAttr} {cellAttr:attributes}&#39;, &#39; style=&quot;width:{column.cellWidth}px;&lt;tpl if=&quot;tdStyle&quot;&gt;{tdStyle}&lt;/tpl&gt;&quot;&#39;, &#39; tabindex=&quot;-1&quot; data-columnid=&quot;{[values.column.getItemId()]}&quot;&gt;&#39;, &#39;&lt;div {unselectableAttr} class=&quot;&#39; + Ext.baseCSSPrefix + &#39;grid-cell-inner {innerCls}&quot; &#39;, &#39;style=&quot;text-align:{align};&lt;tpl if=&quot;style&quot;&gt;{style}&lt;/tpl&gt;&quot; &#39;, &#39;{cellInnerAttr:attributes}&gt;{value}&lt;/div&gt;&#39;, &#39;&lt;/td&gt;&#39;, {priority: 0}]</code></p></div></div></div><div id='property-innerSelector' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.view.Merge'>eui.view.Merge</span><br/><a href='source/Merge2.html#eui-view-Merge-property-innerSelector' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.view.Merge-property-innerSelector' class='name expandable'>innerSelector</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;div.&#39; + Ext.baseCSSPrefix + &#39;grid-cell-inner&#39;</code></p></div></div></div><div id='property-itemSelector' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.view.Merge'>eui.view.Merge</span><br/><a href='source/Merge2.html#eui-view-Merge-property-itemSelector' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.view.Merge-property-itemSelector' class='name expandable'>itemSelector</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>view item. ...</div><div class='long'><p>view item. This wraps a data row</p>\n<p>Defaults to: <code>&#39;tr.&#39; + Ext.baseCSSPrefix + &#39;grid-row&#39;</code></p></div></div></div><div id='property-nodeContainerSelector' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.view.Merge'>eui.view.Merge</span><br/><a href='source/Merge2.html#eui-view-Merge-property-nodeContainerSelector' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.view.Merge-property-nodeContainerSelector' class='name expandable'>nodeContainerSelector</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Element which contains rows ...</div><div class='long'><p>Element which contains rows</p>\n<p>Defaults to: <code>&#39;div.&#39; + Ext.baseCSSPrefix + &#39;grid-item-container tbody&#39;</code></p></div></div></div><div id='property-outerRowTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.view.Merge'>eui.view.Merge</span><br/><a href='source/Merge2.html#eui-view-Merge-property-outerRowTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.view.Merge-property-outerRowTpl' class='name expandable'>outerRowTpl</a> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[&#39;{%&#39;, &#39;this.nextTpl.applyOut(values, out, parent)&#39;, &#39;%}&#39;]</code></p></div></div></div><div id='property-rowSelector' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.view.Merge'>eui.view.Merge</span><br/><a href='source/Merge2.html#eui-view-Merge-property-rowSelector' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.view.Merge-property-rowSelector' class='name expandable'>rowSelector</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Grid row which contains cells as opposed to wrapping item. ...</div><div class='long'><p>Grid row which contains cells as opposed to wrapping item.</p>\n<p>Defaults to: <code>&#39;tr.&#39; + Ext.baseCSSPrefix + &#39;grid-row&#39;</code></p></div></div></div><div id='property-rowTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.view.Merge'>eui.view.Merge</span><br/><a href='source/Merge2.html#eui-view-Merge-property-rowTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.view.Merge-property-rowTpl' class='name expandable'>rowTpl</a> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[&#39;{%&#39;, &#39;var dataRowCls = values.recordIndex === -1 ? &quot;&quot; : &quot; &#39; + Ext.baseCSSPrefix + &#39;grid-row&quot;;&#39;, &#39;%}&#39;, &#39;&lt;tr id=&quot;{rowId}&quot; class=&quot;{[values.itemClasses.join(&quot; &quot;)]} {[values.rowClasses.join(&quot; &quot;)]} {[dataRowCls]}&quot;&#39;, &#39; data-boundView=&quot;{view.id}&quot;&#39;, &#39; data-recordId=&quot;{record.internalId}&quot;&#39;, &#39; data-recordIndex=&quot;{recordIndex}&quot;&#39;, &#39; role=&quot;{rowRole}&quot; {rowAttr:attributes}&gt;&#39;, &#39;&lt;tpl for=&quot;columns&quot;&gt;&#39; + &#39;{%&#39;, &#39;parent.view.renderCell(values, parent.record, parent.recordIndex, parent.rowIndex, xindex - 1, out, parent)&#39;, &#39;%}&#39;, &#39;&lt;/tpl&gt;&#39;, &#39;&lt;/tr&gt;&#39;, {priority: 0}]</code></p></div></div></div><div id='property-sizerSelector' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.view.Merge'>eui.view.Merge</span><br/><a href='source/Merge2.html#eui-view-Merge-property-sizerSelector' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.view.Merge-property-sizerSelector' class='name expandable'>sizerSelector</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Select column sizers and cells. ...</div><div class='long'><p>Select column sizers and cells.\nThis may target <code>&lt;COL&gt;</code> elements as well as <code>&lt;TD&gt;</code> elements\n<code>&lt;COLGROUP&gt;</code> element is inserted if the first row does not have the regular cell patten (eg is a colspanning group header row)</p>\n<p>Defaults to: <code>&#39;.&#39; + Ext.baseCSSPrefix + &#39;grid-cell&#39;</code></p></div></div></div><div id='property-tpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.view.Merge'>eui.view.Merge</span><br/><a href='source/Merge2.html#eui-view-Merge-property-tpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.view.Merge-property-tpl' class='name expandable'>tpl</a> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[&#39;{%&#39;, &#39;view = values.view;&#39;, &#39;if (!(columns = values.columns)) {&#39;, &#39;columns = values.columns = view.ownerCt.getVisibleColumnManager().getColumns();&#39;, &#39;}&#39;, &#39;values.fullWidth = 0;&#39;, &#39;for (i = 0, len = columns.length; i &lt; len; i++) {&#39;, &#39;column = columns[i];&#39;, &#39;values.fullWidth += (column.cellWidth = column.lastBox ? column.lastBox.width : column.width || column.minWidth);&#39;, &#39;}&#39;, &#39;tableCls=values.tableCls=[];&#39;, &#39;%}&#39;, &#39;&lt;div class=&quot;&#39; + Ext.baseCSSPrefix + &#39;grid-item-container&quot; role=&quot;presentation&quot; style=&quot;width:{fullWidth}px&quot;&gt;&#39;, &#39;{[view.renderTHead(values, out, parent)]}&#39;, &#39;&lt;table id=&quot;{view.id}-table&quot; class=&quot;{[tableCls]}&quot; border=&quot;0&quot; cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; style=&quot;{tableStyle}&quot; {ariaTableAttr}&gt;&#39;, &#39;&lt;tbody id=&quot;{view.id}-body&quot; {ariaTbodyAttr}&gt;&#39;, &#39;{%&#39;, &#39;view.renderRows(values.rows, values.columns, values.viewStartIndex, out);&#39;, &#39;%}&#39;, &#39;&lt;/tbody&gt;&#39;, &#39;&lt;/table&gt;&#39;, &#39;&lt;/div&gt;&#39;, &#39;{% &#39;, &#39;view = columns = column = null;&#39;, &#39;%}&#39;, {definitions: &#39;var view, tableCls, columns, i, len, column;&#39;, strict: true, priority: 0}]</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getRowByRecord' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.view.Merge'>eui.view.Merge</span><br/><a href='source/Merge2.html#eui-view-Merge-method-getRowByRecord' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.view.Merge-method-getRowByRecord' class='name expandable'>getRowByRecord</a>( <span class='pre'>record</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-renderCell' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.view.Merge'>eui.view.Merge</span><br/><a href='source/Merge2.html#eui-view-Merge-method-renderCell' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.view.Merge-method-renderCell' class='name expandable'>renderCell</a>( <span class='pre'>column, record, recordIndex, rowIndex, columnIndex, out</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>column</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>record</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>recordIndex</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>rowIndex</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>columnIndex</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>out</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-renderRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.view.Merge'>eui.view.Merge</span><br/><a href='source/Merge2.html#eui-view-Merge-method-renderRow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.view.Merge-method-renderRow' class='name expandable'>renderRow</a>( <span class='pre'>record, rowIdx, out</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>rowIdx</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>out</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-renderRows' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='eui.view.Merge'>eui.view.Merge</span><br/><a href='source/Merge2.html#eui-view-Merge-method-renderRows' target='_blank' class='view-source'>view source</a></div><a href='#!/api/eui.view.Merge-method-renderRows' class='name expandable'>renderRows</a>( <span class='pre'>rows, columns, viewStartIndex, out</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rows</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>columns</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>viewStartIndex</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>out</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});