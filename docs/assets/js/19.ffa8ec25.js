(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{213:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mongodb-查询文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-查询文档","aria-hidden":"true"}},[s._v("#")]),s._v(" MongoDB 查询文档")]),s._v(" "),a("p",[s._v("MongoDB 查询文档使用 find() 方法。")]),s._v(" "),a("p",[s._v("find() 方法以非结构化的方式来显示所有文档。")]),s._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("p",[s._v("MongoDB 查询数据的语法格式如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("db.collection.find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("query, projection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("query")]),s._v(" ：可选，使用查询操作符指定查询条件")]),s._v(" "),a("li",[a("strong",[s._v("projection")]),s._v(" ：可选，使用投影操作符指定返回的键。查询时返回文档中所有键值， 只需省略该参数即可（默认省略）。")])]),s._v(" "),a("p",[s._v("如果你需要以易读的方式来读取数据，可以使用 pretty() 方法，语法格式如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.col.find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".pretty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("pretty() 方法以格式化的方式来显示所有文档。")]),s._v(" "),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例","aria-hidden":"true"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("p",[s._v("以下实例我们查询了集合 col 中的数据：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.col.find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("."),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("pretty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"56063f17ade2f21f36b03133"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"title"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MongoDB 学习"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"description"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MongoDB 是一个 Nosql 数据库"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"by"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"追梦小窝"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://notes.iszmxw.com"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tags"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mongodb"')]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"database"')]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NoSQL"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"likes"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("除了 find() 方法之外，还有一个 findOne() 方法，它只返回一个文档。")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"mongodb-与-rdbms-where-语句比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-与-rdbms-where-语句比较","aria-hidden":"true"}},[s._v("#")]),s._v(" MongoDB 与 RDBMS Where 语句比较")]),s._v(" "),a("p",[s._v("如果你熟悉常规的 SQL 数据，通过下表可以更好的理解 MongoDB 的条件语句查询：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("操作")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("格式")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("范例")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("RDBMS中的类似语句")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("等于")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("{<key>:<value>")]),s._v("}")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v('db.col.find({"by":"追梦小窝"}).pretty()')])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("where by = '追梦小窝'")])])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("小于")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("{<key>:{$lt:<value>}}")])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v('db.col.find({"likes":{$lt:50}}).pretty()')])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("where likes < 50")])])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("小于或等于")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("{<key>:{$lte:<value>}}")])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v('db.col.find({"likes":{$lte:50}}).pretty()')])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("where likes <= 50")])])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("大于")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("{<key>:{$gt:<value>}}")])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v('db.col.find({"likes":{$gt:50}}).pretty()')])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("where likes > 50")])])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("大于或等于")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("{<key>:{$gte:<value>}}")])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v('db.col.find({"likes":{$gte:50}}).pretty()')])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("where likes >= 50")])])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("不等于")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("{<key>:{$ne:<value>}}")])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v('db.col.find({"likes":{$ne:50}}).pretty()')])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("where likes != 50")])])])])]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"mongodb-and-条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-and-条件","aria-hidden":"true"}},[s._v("#")]),s._v(" MongoDB AND 条件")]),s._v(" "),a("p",[s._v("MongoDB 的 find() 方法可以传入多个键(key)，每个键(key)以逗号隔开，即常规 SQL 的 AND 条件。")]),s._v(" "),a("p",[s._v("语法格式如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.col.find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("key1:value1, key2:value2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".pretty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"实例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例-2","aria-hidden":"true"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("p",[s._v("以下实例通过 "),a("strong",[s._v("by")]),s._v(" 和 "),a("strong",[s._v("title")]),s._v(" 键来查询 "),a("strong",[s._v("追梦小窝")]),s._v(" 中 "),a("strong",[s._v("MongoDB 学习")]),s._v(" 的数据")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.col.find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"by"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"追梦小窝"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"title"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MongoDB 学习"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("."),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("pretty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"56063f17ade2f21f36b03133"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"title"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MongoDB 学习"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"description"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MongoDB 是一个 Nosql 数据库"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"by"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"追梦小窝"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://notes.iszmxw.com"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tags"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mongodb"')]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"database"')]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NoSQL"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"likes"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("以上实例中类似于 WHERE 语句："),a("strong",[s._v("WHERE by='追梦小窝' AND title='MongoDB 学习'")])]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"mongodb-or-条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-or-条件","aria-hidden":"true"}},[s._v("#")]),s._v(" MongoDB OR 条件")]),s._v(" "),a("p",[s._v("MongoDB OR 条件语句使用了关键字 "),a("strong",[s._v("$or")]),s._v(",语法格式如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("db.col.find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$or")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("key1: value1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("key2:value2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".pretty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"实例-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例-3","aria-hidden":"true"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("p",[s._v("以下实例中，我们演示了查询键 "),a("strong",[s._v("by")]),s._v(" 值为 追梦小窝 或键 "),a("strong",[s._v("title")]),s._v(" 值为 "),a("strong",[s._v("MongoDB 学习")]),s._v(" 的文档。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("db.col.find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$or")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"by"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"追梦小窝"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"title"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MongoDB 学习"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("."),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("pretty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"56063f17ade2f21f36b03133"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"title"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MongoDB 学习"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"description"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MongoDB 是一个 Nosql 数据库"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"by"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"追梦小窝"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://notes.iszmxw.com"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tags"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mongodb"')]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"database"')]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NoSQL"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"likes"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("hr"),s._v(" "),a("h2",{attrs:{id:"and-和-or-联合使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#and-和-or-联合使用","aria-hidden":"true"}},[s._v("#")]),s._v(" AND 和 OR 联合使用")]),s._v(" "),a("p",[s._v("以下实例演示了 AND 和 OR 联合使用，类似常规 SQL 语句为： "),a("strong",[s._v("'where likes>50 AND (by = '追梦小窝' OR title = 'MongoDB 学习')'")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("db.col.find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"likes"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$gt")]),s._v(":50"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$or")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"by"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"追梦小窝"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"title"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MongoDB 学习"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("."),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("pretty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ObjectId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"56063f17ade2f21f36b03133"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"title"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MongoDB 学习"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"description"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MongoDB 是一个 Nosql 数据库"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"by"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"追梦小窝"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://notes.iszmxw.com"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tags"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mongodb"')]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"database"')]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NoSQL"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"likes"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);