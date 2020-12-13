(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{212:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mongodb-type-操作符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-type-操作符","aria-hidden":"true"}},[t._v("#")]),t._v(" MongoDB $type 操作符")]),t._v(" "),a("h2",{attrs:{id:"描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述","aria-hidden":"true"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),a("p",[t._v("在本章节中，我们将继续讨论MongoDB中条件操作符 $type。")]),t._v(" "),a("p",[t._v("$type操作符是基于BSON类型来检索集合中匹配的数据类型，并返回结果。")]),t._v(" "),a("p",[t._v("MongoDB 中可以使用的类型如下表所示：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("类型")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("数字")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("备注")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Double")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Binary data")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Undefined")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("已废弃。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Object id")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("7")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Date")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("9")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Null")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Regular Expression")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("11")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("JavaScript")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("13")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Symbol")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("14")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("JavaScript (with scope)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("15")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("32-bit integer")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("16")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Timestamp")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("17")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("64-bit integer")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("18")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Min key")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("255")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Query with "),a("code",[t._v("-1")]),t._v(".")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Max key")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("127")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),a("p",[a("strong",[t._v('我们使用的数据库名称为"iszmxw" 我们的集合名称为"col"，以下为我们插入的数据。')])]),t._v(" "),a("p",[t._v('简单的集合"col"：')]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" db.col.insert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PHP 教程'")]),t._v(", \n    description: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PHP 是一种创建动态交互性站点的强有力的服务器端脚本语言。'")]),t._v(",\n    by: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'追梦小窝'")]),t._v(",\n    url: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://notes.iszmxw.com'")]),t._v(",\n    tags: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'php'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n    likes: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" db.col.insert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("title: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Java 教程'")]),t._v(", \n    description: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Java 是由Sun Microsystems公司于1995年5月推出的高级程序设计语言。'")]),t._v(",\n    by: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'追梦小窝'")]),t._v(",\n    url: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://notes.iszmxw.com'")]),t._v(",\n    tags: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'java'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n    likes: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" db.col.insert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("title: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MongoDB 学习'")]),t._v(", \n    description: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MongoDB 是一个 Nosql 数据库'")]),t._v(",\n    by: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'追梦小窝'")]),t._v(",\n    url: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://notes.iszmxw.com'")]),t._v(",\n    tags: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mongodb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n    likes: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("使用find()命令查看数据：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" db.col."),a("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_id"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" ObjectId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"56066542ade2f21f36b0313a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PHP 教程"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PHP 是一种创建动态交互性站点的强有力的服务器端脚本语言。"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"by"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"追梦小窝"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://notes.iszmxw.com"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tags"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"php"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"likes"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_id"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" ObjectId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"56066549ade2f21f36b0313b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Java 教程"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Java 是由Sun Microsystems公司于1995年5月推出的高级程序设计语言。"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"by"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"追梦小窝"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://notes.iszmxw.com"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tags"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"java"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"likes"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_id"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" ObjectId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5606654fade2f21f36b0313c"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MongoDB 学习"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MongoDB 是一个 Nosql 数据库"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"by"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"追梦小窝"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://notes.iszmxw.com"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tags"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mongodb"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"likes"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"mongodb-操作符-type-实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-操作符-type-实例","aria-hidden":"true"}},[t._v("#")]),t._v(" MongoDB 操作符 - $type 实例")]),t._v(" "),a("p",[t._v('如果想获取 "col" 集合中 title 为 String 的数据，你可以使用以下命令：')]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("db.col.find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n或\ndb.col.find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("输出结果为：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_id"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" ObjectId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"56066542ade2f21f36b0313a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PHP 教程"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PHP 是一种创建动态交互性站点的强有力的服务器端脚本语言。"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"by"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"追梦小窝"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://notes.iszmxw.com"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tags"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"php"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"likes"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_id"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" ObjectId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"56066549ade2f21f36b0313b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Java 教程"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Java 是由Sun Microsystems公司于1995年5月推出的高级程序设计语言。"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"by"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"追梦小窝"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://notes.iszmxw.com"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tags"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"java"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"likes"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_id"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" ObjectId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5606654fade2f21f36b0313c"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MongoDB 学习"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MongoDB 是一个 Nosql 数据库"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"by"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"追梦小窝"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://notes.iszmxw.com"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tags"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mongodb"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"likes"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);