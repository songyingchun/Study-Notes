function getQueryStringArgs() {
	//取得查询字符串并去掉开头的问号
	var qs = (location.search.length > 0 ? location.search.substring(1) : ""),
		//保存数据的对象
		args = {},
		//取得每一项
		items = qs.length ? qs.split("&") : [],
		item = null,
		name = null,
		value = null,
		//在 for 循环中使用
		i = 0,
		len = items.length;
	//逐个将每一项添加到 args 对象中
	for (i = 0; i < len; i++) {
		item = items[i].split("=");
		name = decodeURIComponent(item[0]);
		value = decodeURIComponent(item[1]);
		if (name.length) {
			args[name] = value;
		}
	}
	return args;
}

//检测插件（在 IE 中无效）
function hasPlugin(name) {
	name = name.toLowerCase();
	for (var i = 0; i < navigator.plugins.length; i++) {
		if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
			return true;
		}
	}
	return false;
}

var client = function () {
	//呈现引擎
	var engine = {
		ie: 0,
		gecko: 0,
		webkit: 0,
		khtml: 0,
		opera: 0,
		//完整的版本号
		ver: null
	};
	//浏览器
	var browser = {
		//主要浏览器
		ie: 0,
		firefox: 0,
		safari: 0,
		konq: 0,
		opera: 0,
		chrome: 0,
		//具体的版本号
		ver: null
	};
	//平台、设备和操作系统
	var system = {
		win: false,
		mac: false,
		x11: false,
		//移动设备
		iphone: false,
		ipod: false,
		ipad: false,
		ios: false,
		android: false,
		nokiaN: false,
		winMobile: false,
		//游戏系统
		wii: false,
		ps: false
	};
	//检测呈现引擎和浏览器
	var ua = navigator.userAgent;
	if (window.opera) {
		engine.ver = browser.ver = window.opera.version();
		engine.opera = browser.opera = parseFloat(engine.ver);
	} else if (/AppleWebKit\/(\S+)/.test(ua)) {
		engine.ver = RegExp["$1"];
		engine.webkit = parseFloat(engine.ver);
		//确定是 Chrome 还是 Safari
		if (/Chrome\/(\S+)/.test(ua)) {
			browser.ver = RegExp["$1"];
			browser.chrome = parseFloat(browser.ver);
		} else if (/Version\/(\S+)/.test(ua)) {
			browser.ver = RegExp["$1"];
			browser.safari = parseFloat(browser.ver);
		} else {
			//近似地确定版本号
			var safariVersion = 1;
			if (engine.webkit < 100) {
				safariVersion = 1;
			} else if (engine.webkit < 312) {
				safariVersion = 1.2;
			} else if (engine.webkit < 412) {
				safariVersion = 1.3;
			} else {
				safariVersion = 2;
			}
			browser.safari = browser.ver = safariVersion;
		}
	} else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) {
		engine.ver = browser.ver = RegExp["$1"];
		engine.khtml = browser.konq = parseFloat(engine.ver);
	} else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)) {
		engine.ver = RegExp["$1"];
		engine.gecko = parseFloat(engine.ver);
		//确定是不是 Firefox
		if (/Firefox\/(\S+)/.test(ua)) {
			browser.ver = RegExp["$1"];
			browser.firefox = parseFloat(browser.ver);
		}
	} else if (/MSIE ([^;]+)/.test(ua)) {
		engine.ver = browser.ver = RegExp["$1"];
		engine.ie = browser.ie = parseFloat(engine.ver);
	}
	//检测浏览器
	browser.ie = engine.ie;
	browser.opera = engine.opera;
	//检测平台
	var p = navigator.platform;
	system.win = p.indexOf("Win") == 0;
	system.mac = p.indexOf("Mac") == 0;
	system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
	//检测 Windows 操作系统
	if (system.win) {
		if (/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(ua)) {
			if (RegExp["$1"] == "NT") {
				switch (RegExp["$2"]) {
					case "5.0":
						system.win = "2000";
						break;
					case "5.1":
						system.win = "XP";
						break;
					case "6.0":
						system.win = "Vista";
						break;
					case "6.1":
						system.win = "7";
						break;
					default:
						system.win = "NT";
						break;
				}
			} else if (RegExp["$1"] == "9x") {
				system.win = "ME";
			} else {
				system.win = RegExp["$1"];
			}
		}
	}
	//移动设备
	system.iphone = ua.indexOf("iPhone") > -1;
	system.ipod = ua.indexOf("iPod") > -1;
	system.ipad = ua.indexOf("iPad") > -1;
	system.nokiaN = ua.indexOf("NokiaN") > -1;
	//windows mobile
	if (system.win == "CE") {
		system.winMobile = system.win;
	} else if (system.win == "Ph") {
		if (/Windows Phone OS (\d+.\d+)/.test(ua)) {
			;
			system.win = "Phone";
			system.winMobile = parseFloat(RegExp["$1"]);
		}
	}
	//检测 iOS 版本
	if (system.mac && ua.indexOf("Mobile") > -1) {
		if (/CPU (?:iPhone )?OS (\d+_\d+)/.test(ua)) {
			system.ios = parseFloat(RegExp.$1.replace("_", "."));
		} else {
			system.ios = 2; //不能真正检测出来，所以只能猜测
		}
	}
	//检测 Android 版本
	if (/Android (\d+\.\d+)/.test(ua)) {
		system.android = parseFloat(RegExp.$1);
	}
	//游戏系统
	system.wii = ua.indexOf("Wii") > -1;
	system.ps = /playstation/i.test(ua);
	//返回这些对象
	return {
		engine: engine,
		browser: browser,
		system: system
	};
}();

var leftPos = (typeof window.screenLeft == "number") ?
	window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == "number") ?
	window.screenTop : window.screenY;

var pageWidth = window.innerWidth,
	pageHeight = window.innerHeight;
if (typeof pageWidth != "number") {
	if (document.compatMode == "CSS1Compat") {
		pageWidth = document.documentElement.clientWidth;
		pageHeight = document.documentElement.clientHeight;
	} else {
		pageWidth = document.body.clientWidth;
		pageHeight = document.body.clientHeight;
	}
}

// 转成数组
function convertToArray(nodes) {
	var array = null;
	try {
		array = Array.prototype.slice.call(nodes, 0); //针对非 IE 浏览器
	} catch (ex) {
		array = new Array();
		for (var i = 0, len = nodes.length; i < len; i++) {
			array.push(nodes[i]);
		}
	}
	return array;
}

function loadScriptString(code) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	try {
		script.appendChild(document.createTextNode(code));
	} catch (ex) {
		script.text = code;
	}
	document.body.appendChild(script);
}

function loadStyleString(css) {
	var style = document.createElement("style");
	style.type = "text/css";
	try {
		style.appendChild(document.createTextNode(css));
	} catch (ex) {
		style.styleSheet.cssText = css;
	}
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(style);
}

function contains(refNode, otherNode) {
	if (typeof refNode.contains == "function" &&
		(!client.engine.webkit || client.engine.webkit >= 522)) {
		return refNode.contains(otherNode);
	} else if (typeof refNode.compareDocumentPosition == "function") {
		return !!(refNode.compareDocumentPosition(otherNode) & 16);
	} else {
		var node = otherNode.parentNode;
		do {
			if (node === refNode) {
				return true;
			} else {
				node = node.parentNode;
			}
		} while (node !== null);
		return false;
	}
}

function getInnerText(element) {
	return (typeof element.textContent == "string") ?
		element.textContent : element.innerText;
}
function setInnerText(element, text) {
	if (typeof element.textContent == "string") {
		element.textContent = text;
	} else {
		element.innerText = text;
	}
}

function insertRule(sheet, selectorText, cssText, position) {
	if (sheet.insertRule) {
		sheet.insertRule(selectorText + "{" + cssText + "}", position);
	} else if (sheet.addRule) {
		sheet.addRule(selectorText, cssText, position);
	}
}

function deleteRule(sheet, index) {
	if (sheet.deleteRule) {
		sheet.deleteRule(index);
	} else if (sheet.removeRule) {
		sheet.removeRule(index);
	}
}

// 元素偏移量
function getElementLeft(element) {
	var actualLeft = element.offsetLeft;
	var current = element.offsetParent;
	while (current !== null) {
		actualLeft += current.offsetLeft;
		current = current.offsetParent;
	}
	return actualLeft;
}

function getElementTop(element) {
	var actualTop = element.offsetTop;
	var current = element.offsetParent;
	while (current !== null) {
		actualTop += current.offsetTop;
		current = current.offsetParent;
	}
	return actualTop;
}

// 客户区大小
function getViewport() {
	if (document.compatMode == "BackCompat") {
		return {
			width: document.body.clientWidth,
			height: document.body.clientHeight
		};
	} else {
		return {
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight
		};
	} 0
}

var docHeight = Math.max(document.documentElement.scrollHeight,
	document.documentElement.clientHeight);
var docWidth = Math.max(document.documentElement.scrollWidth,
	document.documentElement.clientWidth);

function scrollToTop(element) {
	if (element.scrollTop != 0) {
		element.scrollTop = 0;
	}
}

function getBoundingClientRect(element) {
	var scrollTop = document.documentElement.scrollTop;
	var scrollLeft = document.documentElement.scrollLeft;
	if (element.getBoundingClientRect) {
		if (typeof arguments.callee.offset != "number") {
			var temp = document.createElement("div");
			temp.style.cssText = "position:absolute;left:0;top:0;";
			document.body.appendChild(temp);
			arguments.callee.offset = -temp.getBoundingClientRect().top - scrollTop;
			document.body.removeChild(temp);
			temp = null;
		}
		var rect = element.getBoundingClientRect();
		var offset = arguments.callee.offset;
		return {
			left: rect.left + offset,
			right: rect.right + offset,
			top: rect.top + offset,
			bottom: rect.bottom + offset
		};
	} else {
		var actualLeft = getElementLeft(element);
		var actualTop = getElementTop(element);
		return {
			left: actualLeft - scrollLeft,
			right: actualLeft + element.offsetWidth - scrollLeft,
			top: actualTop - scrollTop,
			bottom: actualTop + element.offsetHeight - scrollTop
		}
	}
}

var EventUtil = {
	addHandler: function (element, type, handler) {
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent) {
			element.attachEvent("on" + type, handler);
		} else {
			element["on" + type] = handler;
		}
	},

	getEvent: function (event) {
		return event ? event : window.event;
	},
	getTarget: function (event) {
		return event.target || event.srcElement;
	},
	preventDefault: function (event) {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},
	removeHandler: function (element, type, handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if (element.detachEvent) {
			element.detachEvent("on" + type, handler);
		} else {
			element["on" + type] = null;
		}
	},
	stopPropagation: function (event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	},
	// 鼠标在页面的横坐标
	getPageX: function (event) {
		var pageX = event.pageX;
		if (pageX === undefined) {
			pageX = event.clientX + (document.body.scrollLeft ||
				document.documentElement.scrollLeft);
		}
		return pageX;
	},
	// 鼠标在页面的纵坐标
	getPageY: function (event) {
		var pageY = event.pageY;
		if (pageY === undefined) {
			pageY = event.clientY + (document.body.scrollTop ||
				document.documentElement.scrollTop);
		}
		return pageY;
	},
	// 相关元素
	getRelatedTarget: function (event) {
		if (event.relatedTarget) {
			return event.relatedTarget;
		} else if (event.toElement) {
			return event.toElement;
		} else if (event.fromElement) {
			return event.fromElement;
		} else {
			return null;
		}
	},
	// 鼠标按钮
	getButton: function (event) {
		if (document.implementation.hasFeature("MouseEvents", "2.0")) {
			return event.button;
		} else {
			switch (event.button) {
				case 0:
				case 1:
				case 3:
				case 5:
				case 7:
					return 0;
				case 2:
				case 6:
					return 2;
				case 4:
					return 1;
			}
		}
	},
	getWheelDelta: function (event) {
		if (event.wheelDelta) {
			return (client.engine.opera && client.engine.opera < 9.5 ?
				-event.wheelDelta : event.wheelDelta);
		} else {
			return -event.detail * 40;
		}
	},

	getCharCode: function (event) {
		if (typeof event.charCode == "number") {
			return event.charCode;
		} else {
			return event.keyCode;
		}
	},

	handleTouchEvent(event) {
		//只跟踪一次触摸
		if (event.touches.length == 1) {
			var output = document.getElementById("output");
			switch (event.type) {
				case "touchstart":
					output.innerHTML = "Touch started (" + event.touches[0].clientX +
						"," + event.touches[0].clientY + ")";
					break;
				case "touchend":
					output.innerHTML += "<br>Touch ended (" +
						event.changedTouches[0].clientX + "," +
						event.changedTouches[0].clientY + ")";
					break;
				case "touchmove":
					event.preventDefault(); //阻止滚动
					output.innerHTML += "<br>Touch moved (" +
						event.changedTouches[0].clientX + "," +
						event.changedTouches[0].clientY + ")";
					break;
			}
		}
	},
	handleGestureEvent(event) {
		var output = document.getElementById("output");
		switch (event.type) {
			case "gesturestart":
				output.innerHTML = "Gesture started (rotation=" + event.rotation +
					",scale=" + event.scale + ")";
				break;
			case "gestureend":
				output.innerHTML += "<br>Gesture ended (rotation=" + event.rotation +
					",scale=" + event.scale + ")";
				break;
			case "gesturechange":
				output.innerHTML += "<br>Gesture changed (rotation=" + event.rotation +
					",scale=" + event.scale + ")";
				break;
		}
	},
	getSelectedText(textbox) {
		if (typeof textbox.selectionStart == "number") {
			return textbox.value.substring(textbox.selectionStart,
				textbox.selectionEnd);
		} else if (document.selection) {
			return document.selection.createRange().text;
		}
	},

	selectText(textbox, startIndex, stopIndex) {
		if (textbox.setSelectionRange) {
			textbox.setSelectionRange(startIndex, stopIndex);
		} else if (textbox.createTextRange) {
			var range = textbox.createTextRange();
			range.collapse(true);
			range.moveStart("character", startIndex);
			range.moveEnd("character", stopIndex - startIndex);
			range.select();
		}
		textbox.focus();
	},

	getClipboardText: function (event) {
		var clipboardData = (event.clipboardData || window.clipboardData);
		return clipboardData.getData("text");
	},

	setClipboardText: function (event, value) {
		if (event.clipboardData) {
			return event.clipboardData.setData("text/plain", value);
		} else if (window.clipboardData) {
			return window.clipboardData.setData("text", value);
		}
	},

	getSelectedOptions(selectbox) {
		var result = new Array();
		var option = null;
		for (var i = 0, len = selectbox.options.length; i < len; i++) {
			option = selectbox.options[i];
			if (option.selected) {
				result.push(option);
			}
		}
		return result;
	},
	// 表单序列化
	serialize(form) {
		var parts = [],
			field = null,
			i,
			len,
			j,
			optLen,
			option,
			optValue;
		for (i = 0, len = form.elements.length; i < len; i++) {
			field = form.elements[i];
			switch (field.type) {
				case "select-one":
				case "select-multiple":
					if (field.name.length) {
						for (j = 0, optLen = field.options.length; j < optLen; j++) {
							option = field.options[j];
							if (option.selected) {
								optValue = "";
								if (option.hasAttribute) {
									optValue = (option.hasAttribute("value") ?
										option.value : option.text);
								} else {
									optValue = (option.attributes["value"].specified ?
										option.value : option.text);
								}
								parts.push(encodeURIComponent(field.name) + "=" +
									encodeURIComponent(optValue));
							}
						}
					}
					break;
				case undefined: //字段集
				case "file": //文件输入
				case "submit": //提交按钮
				case "reset": //重置按钮
				case "button": //自定义按钮
					break;
				case "radio": //单选按钮
				case "checkbox": //复选框
					if (!field.checked) {
						break;
					}
				/* 执行默认操作 */
				default:
					//不包含没有名字的表单字段
					if (field.name.length) {
						parts.push(encodeURIComponent(field.name) + "=" +
							encodeURIComponent(field.value));
					}
			}
		}
		return parts.join("&");
	}
};
