(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
	["pages/shop-address-detail/shop-address-detail"], {
		1934: function (e, t, a) {
			"use strict";
			a.r(t);
			var n = a("ec65"),
				r = a.n(n);
			for (var s in n) "default" !== s && function (e) {
				a.d(t, e, (function () {
					return n[e]
				}))
			}(s);
			t["default"] = r.a
		},
		"5a75": function (e, t, a) {
			"use strict";
			(function (e) {
				a("71e1");
				n(a("66fd"));
				var t = n(a("8cb9"));

				function n(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				wx.__webpack_require_UNI_MP_PLUGIN__ = a, e(t.default)
			}).call(this, a("543d")["createPage"])
		},
		"8cb9": function (e, t, a) {
			"use strict";
			a.r(t);
			var n = a("9504"),
				r = a("1934");
			for (var s in r) "default" !== s && function (e) {
				a.d(t, e, (function () {
					return r[e]
				}))
			}(s);
			a("e18c");
			var u, d = a("f0c5"),
				i = Object(d["a"])(r["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], u);
			t["default"] = i.exports
		},
		9504: function (e, t, a) {
			"use strict";
			var n;
			a.d(t, "b", (function () {
				return r
			})), a.d(t, "c", (function () {
				return s
			})), a.d(t, "a", (function () {
				return n
			}));
			var r = function () {
					var e = this,
						t = e.$createElement;
					e._self._c
				},
				s = []
		},
		d012: function (e, t, a) {},
		e18c: function (e, t, a) {
			"use strict";
			var n = a("d012"),
				r = a.n(n);
			r.a
		},
		ec65: function (e, t, a) {
			"use strict";
			(function (e) {
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = void 0;
				var n = r(a("a34a"));

				function r(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}

				function s(e, t, a, n, r, s, u) {
					try {
						var d = e[s](u),
							i = d.value
					} catch (c) {
						return void a(c)
					}
					d.done ? t(i) : Promise.resolve(i).then(n, r)
				}

				function u(e) {
					return function () {
						var t = this,
							a = arguments;
						return new Promise((function (n, r) {
							var u = e.apply(t, a);

							function d(e) {
								s(u, n, r, d, i, "next", e)
							}

							function i(e) {
								s(u, n, r, d, i, "throw", e)
							}
							d(void 0)
						}))
					}
				}
				var d = {
					data: function () {
						return {
							addressData: {
								name: "",
								phone: "",
								addressName: "",
								address: "",
								default: !1
							},
							id: ""
						}
					},
					onLoad: function (t) {
						var a = this;
						return u(n.default.mark((function r() {
							var s, u;
							return n.default.wrap((function (n) {
								while (1) switch (n.prev = n.next) {
									case 0:
										if (s = "新增收货地址", !t.id) {
											n.next = 10;
											break
										}
										return s = "编辑收货地址", a.id = t.id, n.next = 6, a.$api.info("address", a.id);
									case 6:
										u = n.sent, a.addressData = u.data, a.addressData.addressName = u.data.address, "是" == a.addressData.isdefault && (a.addressData.default = !0);
									case 10:
										e.setNavigationBarTitle({
											title: s
										});
									case 11:
									case "end":
										return n.stop()
								}
							}), r)
						})))()
					},
					methods: {
						switchChange: function (e) {
							this.addressData.default = e.detail
						},
						chooseLocation: function () {
							var t = this;
							e.chooseLocation({
								success: function (e) {
									// t.addressData.addressName = e.name, t.addressData.address = e.name
								}
							})
						},
						confirm: function () {
							var e = this;
							return u(n.default.mark((function t() {
								var a;
								return n.default.wrap((function (t) {
									while (1) switch (t.prev = t.next) {
										case 0:
											if (a = e.addressData, a.name) {
												t.next = 4;
												break
											}
											return e.$utils.msg("请填写收货人姓名"), t.abrupt("return");
										case 4:
											if (e.$validate.isMobile(a.phone)) {
												t.next = 7;
												break
											}
											return e.$utils.msg("请输入正确的手机号码"), t.abrupt("return");
										case 7:
											if (a.address) {
												t.next = 10;
												break
											}
											return e.$utils.msg("请在地图选择所在位置"), t.abrupt("return");
										case 10:
											if (a.default ? a.isdefault = "是" : a.isdefault = "否", !e.id) {
												t.next = 16;
												break
											}
											return t.next = 14, e.$api.update("address", a);
										case 14:
											t.next = 18;
											break;
										case 16:
											return t.next = 18, e.$api.add("address", a);
										case 18:
											e.$utils.msgBack("操作成功");
										case 19:
										case "end":
											return t.stop()
									}
								}), t)
							})))()
						}
					}
				};
				t.default = d
			}).call(this, a("543d")["default"])
		}
	},
	[
		["5a75", "common/runtime", "common/vendor"]
	]
]);