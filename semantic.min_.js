/*
 * # Semantic UI - 2.1.4
 * https://github.com/Semantic-Org/Semantic-UI
 * http://www.semantic-ui.com/
 *
 * Copyright 2014 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function (e, t, n, i) {
    e.site = e.fn.site = function (o) {
        var a, r, s = (new Date).getTime(), c = [], l = arguments[0], u = "string" == typeof l,
            d = [].slice.call(arguments, 1),
            f = e.isPlainObject(o) ? e.extend(!0, {}, e.site.settings, o) : e.extend({}, e.site.settings),
            m = f.namespace, g = f.error, p = "module-" + m, h = e(n), v = h, b = this, y = v.data(p);
        return a = {
            initialize: function () {
                a.instantiate()
            }, instantiate: function () {
                a.verbose("Storing instance of site", a), y = a, v.data(p, a)
            }, normalize: function () {
                a.fix.console(), a.fix.requestAnimationFrame()
            }, fix: {
                console: function () {
                    a.debug("Normalizing window.console"), (console === i || console.log === i) && (a.verbose("Console not available, normalizing events"), a.disable.console()), ("undefined" == typeof console.group || "undefined" == typeof console.groupEnd || "undefined" == typeof console.groupCollapsed) && (a.verbose("Console group not available, normalizing events"), t.console.group = function () {
                    }, t.console.groupEnd = function () {
                    }, t.console.groupCollapsed = function () {
                    }), "undefined" == typeof console.markTimeline && (a.verbose("Mark timeline not available, normalizing events"), t.console.markTimeline = function () {
                    })
                }, consoleClear: function () {
                    a.debug("Disabling programmatic console clearing"), t.console.clear = function () {
                    }
                }, requestAnimationFrame: function () {
                    a.debug("Normalizing requestAnimationFrame"), t.requestAnimationFrame === i && (a.debug("RequestAnimationFrame not available, normalizing event"), t.requestAnimationFrame = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                        setTimeout(e, 0)
                    })
                }
            }, moduleExists: function (t) {
                return e.fn[t] !== i && e.fn[t].settings !== i
            }, enabled: {
                modules: function (t) {
                    var n = [];
                    return t = t || f.modules, e.each(t, function (e, t) {
                        a.moduleExists(t) && n.push(t)
                    }), n
                }
            }, disabled: {
                modules: function (t) {
                    var n = [];
                    return t = t || f.modules, e.each(t, function (e, t) {
                        a.moduleExists(t) || n.push(t)
                    }), n
                }
            }, change: {
                setting: function (t, n, o, r) {
                    o = "string" == typeof o ? "all" === o ? f.modules : [o] : o || f.modules, r = r !== i ? r : !0, e.each(o, function (i, o) {
                        var s, c = a.moduleExists(o) ? e.fn[o].settings.namespace || !1 : !0;
                        a.moduleExists(o) && (a.verbose("Changing default setting", t, n, o), e.fn[o].settings[t] = n, r && c && (s = e(":data(module-" + c + ")"), s.length > 0 && (a.verbose("Modifying existing settings", s), s[o]("setting", t, n))))
                    })
                }, settings: function (t, n, o) {
                    n = "string" == typeof n ? [n] : n || f.modules, o = o !== i ? o : !0, e.each(n, function (n, i) {
                        var r;
                        a.moduleExists(i) && (a.verbose("Changing default setting", t, i), e.extend(!0, e.fn[i].settings, t), o && m && (r = e(":data(module-" + m + ")"), r.length > 0 && (a.verbose("Modifying existing settings", r), r[i]("setting", t))))
                    })
                }
            }, enable: {
                console: function () {
                    a.console(!0)
                }, debug: function (e, t) {
                    e = e || f.modules, a.debug("Enabling debug for modules", e), a.change.setting("debug", !0, e, t)
                }, verbose: function (e, t) {
                    e = e || f.modules, a.debug("Enabling verbose debug for modules", e), a.change.setting("verbose", !0, e, t)
                }
            }, disable: {
                console: function () {
                    a.console(!1)
                }, debug: function (e, t) {
                    e = e || f.modules, a.debug("Disabling debug for modules", e), a.change.setting("debug", !1, e, t)
                }, verbose: function (e, t) {
                    e = e || f.modules, a.debug("Disabling verbose debug for modules", e), a.change.setting("verbose", !1, e, t)
                }
            }, console: function (e) {
                if (e) {
                    if (y.cache.console === i) return void a.error(g.console);
                    a.debug("Restoring console function"), t.console = y.cache.console
                } else a.debug("Disabling console function"), y.cache.console = t.console, t.console = {
                    clear: function () {
                    }, error: function () {
                    }, group: function () {
                    }, groupCollapsed: function () {
                    }, groupEnd: function () {
                    }, info: function () {
                    }, log: function () {
                    }, markTimeline: function () {
                    }, warn: function () {
                    }
                }
            }, destroy: function () {
                a.verbose("Destroying previous site for", v), v.removeData(p)
            }, cache: {}, setting: function (t, n) {
                if (e.isPlainObject(t)) e.extend(!0, f, t); else {
                    if (n === i) return f[t];
                    f[t] = n
                }
            }, internal: function (t, n) {
                if (e.isPlainObject(t)) e.extend(!0, a, t); else {
                    if (n === i) return a[t];
                    a[t] = n
                }
            }, debug: function () {
                f.debug && (f.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), a.debug.apply(console, arguments)))
            }, verbose: function () {
                f.verbose && f.debug && (f.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), a.verbose.apply(console, arguments)))
            }, error: function () {
                a.error = Function.prototype.bind.call(console.error, console, f.name + ":"), a.error.apply(console, arguments)
            }, performance: {
                log: function (e) {
                    var t, n, i;
                    f.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                        Element: b,
                        Name: e[0],
                        Arguments: [].slice.call(e, 1) || "",
                        "Execution Time": n
                    })), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 500)
                }, display: function () {
                    var t = f.name + ":", n = 0;
                    s = !1, clearTimeout(a.performance.timer), e.each(c, function (e, t) {
                        n += t["Execution Time"]
                    }), t += " " + n + "ms", (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                        console.log(t.Name + ": " + t["Execution Time"] + "ms")
                    }), console.groupEnd()), c = []
                }
            }, invoke: function (t, n, o) {
                var s, c, l, u = y;
                return n = n || d, o = b || o, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function (n, o) {
                    var r = n != s ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                    if (e.isPlainObject(u[r]) && n != s) u = u[r]; else {
                        if (u[r] !== i) return c = u[r], !1;
                        if (!e.isPlainObject(u[o]) || n == s) return u[o] !== i ? (c = u[o], !1) : (a.error(g.method, t), !1);
                        u = u[o]
                    }
                })), e.isFunction(c) ? l = c.apply(o, n) : c !== i && (l = c), e.isArray(r) ? r.push(l) : r !== i ? r = [r, l] : l !== i && (r = l), c
            }
        }, u ? (y === i && a.initialize(), a.invoke(l)) : (y !== i && a.destroy(), a.initialize()), r !== i ? r : this
    }, e.site.settings = {
        name: "Site",
        namespace: "site",
        error: {
            console: "Console cannot be restored, most likely it was overwritten outside of module",
            method: "The method you called is not defined."
        },
        debug: !1,
        verbose: !1,
        performance: !0,
        modules: ["accordion", "api", "calendar", "checkbox", "dimmer", "dropdown", "embed", "form", "modal", "nag", "popup", "rating", "shape", "sidebar", "state", "sticky", "tab", "transition", "visit", "visibility"],
        siteNamespace: "site",
        namespaceStub: {cache: {}, config: {}, sections: {}, section: {}, utilities: {}}
    }, e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
            return function (n) {
                return !!e.data(n, t)
            }
        }) : function (t, n, i) {
            return !!e.data(t, i[3])
        }
    })
}(jQuery, window, document), function (e, t, n, i) {
    "use strict";
    e.fn.form = function (t) {
        var o, a = e(this), r = a.selector || "", s = (new Date).getTime(), c = [], l = arguments[0], u = arguments[1],
            d = "string" == typeof l, f = [].slice.call(arguments, 1);
        return a.each(function () {
            var m, g, p, h, v, b, y, x, C, w, k, T, S, A, D, R, E, P, F = e(this), O = this, q = [], j = !1;
            P = {
                initialize: function () {
                    P.get.settings(), d ? (E === i && P.instantiate(), P.invoke(l)) : (P.verbose("Initializing form validation", F, x), P.bindEvents(), P.set.defaults(), P.instantiate())
                }, instantiate: function () {
                    P.verbose("Storing instance of module", P), E = P, F.data(D, P)
                }, destroy: function () {
                    P.verbose("Destroying previous module", E), P.removeEvents(), F.removeData(D)
                }, refresh: function () {
                    P.verbose("Refreshing selector cache"), m = F.find(k.field), g = F.find(k.group), p = F.find(k.message), h = F.find(k.prompt), v = F.find(k.submit), b = F.find(k.clear), y = F.find(k.reset)
                }, submit: function () {
                    P.verbose("Submitting form", F), F.submit()
                }, attachEvents: function (t, n) {
                    n = n || "submit", e(t).on("click" + R, function (e) {
                        P[n](), e.preventDefault()
                    })
                }, bindEvents: function () {
                    P.verbose("Attaching form events"), F.on("submit" + R, P.validate.form).on("blur" + R, k.field, P.event.field.blur).on("click" + R, k.submit, P.submit).on("click" + R, k.reset, P.reset).on("click" + R, k.clear, P.clear), x.keyboardShortcuts && F.on("keydown" + R, k.field, P.event.field.keydown), m.each(function () {
                        var t = e(this), n = t.prop("type"), i = P.get.changeEvent(n, t);
                        e(this).on(i + R, P.event.field.change)
                    })
                }, clear: function () {
                    m.each(function () {
                        var t = e(this), n = t.parent(), i = t.closest(g), o = i.find(k.prompt),
                            a = t.data(w.defaultValue) || "", r = n.is(k.uiCheckbox), s = n.is(k.uiDropdown),
                            c = i.hasClass(T.error);
                        c && (P.verbose("Resetting error on field", i), i.removeClass(T.error), o.remove()), s ? (P.verbose("Resetting dropdown value", n, a), n.dropdown("clear")) : r ? t.prop("checked", !1) : (P.verbose("Resetting field value", t, a), t.val(""))
                    })
                }, reset: function () {
                    m.each(function () {
                        var t = e(this), n = t.parent(), o = t.closest(g), a = o.find(k.prompt),
                            r = t.data(w.defaultValue), s = n.is(k.uiCheckbox), c = n.is(k.uiDropdown),
                            l = o.hasClass(T.error);
                        r !== i && (l && (P.verbose("Resetting error on field", o), o.removeClass(T.error), a.remove()), c ? (P.verbose("Resetting dropdown value", n, r), n.dropdown("restore defaults")) : s ? (P.verbose("Resetting checkbox value", n, r), t.prop("checked", r)) : (P.verbose("Resetting field value", t, r), t.val(r)))
                    })
                }, is: {
                    bracketedRule: function (e) {
                        return e.type && e.type.match(x.regExp.bracket)
                    }, valid: function () {
                        var t = !0;
                        return P.verbose("Checking if form is valid"), e.each(C, function (e, n) {
                            P.validate.field(n, e) || (t = !1)
                        }), t
                    }
                }, removeEvents: function () {
                    F.off(R), m.off(R), v.off(R), m.off(R)
                }, event: {
                    field: {
                        keydown: function (t) {
                            var n = e(this), i = t.which, o = {enter: 13, escape: 27};
                            i == o.escape && (P.verbose("Escape key pressed blurring field"), n.blur()), !t.ctrlKey && i == o.enter && n.is(k.input) && n.not(k.checkbox).length > 0 && (j || (n.one("keyup" + R, P.event.field.keyup), P.submit(), P.debug("Enter pressed on input submitting form")), j = !0)
                        }, keyup: function () {
                            j = !1
                        }, blur: function (t) {
                            var n = e(this), i = n.closest(g), o = P.get.validation(n);
                            i.hasClass(T.error) ? (P.debug("Revalidating field", n, o), P.validate.form.call(P, t, !0)) : ("blur" == x.on || "change" == x.on) && P.validate.field(o)
                        }, change: function (t) {
                            var n = e(this), i = n.closest(g);
                            ("change" == x.on || i.hasClass(T.error) && x.revalidate) && (clearTimeout(P.timer), P.timer = setTimeout(function () {
                                P.debug("Revalidating field", n, P.get.validation(n)), P.validate.form.call(P, t, !0)
                            }, x.delay))
                        }
                    }
                }, get: {
                    ancillaryValue: function (e) {
                        return e.type && P.is.bracketedRule(e) ? e.type.match(x.regExp.bracket)[1] + "" : !1
                    }, ruleName: function (e) {
                        return P.is.bracketedRule(e) ? e.type.replace(e.type.match(x.regExp.bracket)[0], "") : e.type
                    }, changeEvent: function (e, t) {
                        return "checkbox" == e || "radio" == e || "hidden" == e || t.is("select") ? "change" : P.get.inputEvent()
                    }, inputEvent: function () {
                        return n.createElement("input").oninput !== i ? "input" : n.createElement("input").onpropertychange !== i ? "propertychange" : "keyup"
                    }, prompt: function (e, t) {
                        var n, i, o, a = P.get.ruleName(e), r = P.get.ancillaryValue(e),
                            s = e.prompt || x.prompt[a] || x.text.unspecifiedRule, c = -1 !== s.search("{value}"),
                            l = -1 !== s.search("{name}");
                        return (l || c) && (i = P.get.field(t.identifier)), c && (s = s.replace("{value}", i.val())), l && (n = i.closest(k.group).find("label").eq(0), o = 1 == n.size() ? n.text() : i.prop("placeholder") || x.text.unspecifiedField, s = s.replace("{name}", o)), s = s.replace("{identifier}", t.identifier), s = s.replace("{ruleValue}", r), e.prompt || P.verbose("Using default validation prompt for type", s, a), s
                    }, settings: function () {
                        if (e.isPlainObject(t)) {
                            var n, o = Object.keys(t),
                                a = o.length > 0 ? t[o[0]].identifier !== i && t[o[0]].rules !== i : !1;
                            a ? (x = e.extend(!0, {}, e.fn.form.settings, u), C = e.extend({}, e.fn.form.settings.defaults, t), P.error(x.error.oldSyntax, O), P.verbose("Extending settings from legacy parameters", C, x)) : (t.fields && (n = Object.keys(t.fields), ("string" == typeof t.fields[n[0]] || e.isArray(t.fields[n[0]])) && e.each(t.fields, function (n, i) {
                                "string" == typeof i && (i = [i]), t.fields[n] = {rules: []}, e.each(i, function (e, i) {
                                    t.fields[n].rules.push({type: i})
                                })
                            })), x = e.extend(!0, {}, e.fn.form.settings, t), C = e.extend({}, e.fn.form.settings.defaults, x.fields), P.verbose("Extending settings", C, x))
                        } else x = e.fn.form.settings, C = e.fn.form.settings.defaults, P.verbose("Using default form validation", C, x);
                        A = x.namespace, w = x.metadata, k = x.selector, T = x.className, S = x.error, D = "module-" + A, R = "." + A, E = F.data(D), P.refresh()
                    }, field: function (t) {
                        return P.verbose("Finding field with identifier", t), m.filter("#" + t).length > 0 ? m.filter("#" + t) : m.filter('[name="' + t + '"]').length > 0 ? m.filter('[name="' + t + '"]') : m.filter('[name="' + t + '[]"]').length > 0 ? m.filter('[name="' + t + '[]"]') : m.filter("[data-" + w.validate + '="' + t + '"]').length > 0 ? m.filter("[data-" + w.validate + '="' + t + '"]') : e("<input/>")
                    }, fields: function (t) {
                        var n = e();
                        return e.each(t, function (e, t) {
                            n = n.add(P.get.field(t))
                        }), n
                    }, validation: function (t) {
                        var n, i;
                        return C ? (e.each(C, function (e, o) {
                            i = o.identifier || e, P.get.field(i)[0] == t[0] && (o.identifier = i, n = o)
                        }), n || !1) : !1
                    }, value: function (e) {
                        var t, n = [];
                        return n.push(e), t = P.get.values.call(O, n), t[e]
                    }, values: function (t) {
                        var n = e.isArray(t) ? P.get.fields(t) : m, i = {};
                        return n.each(function (t, n) {
                            var o = e(n), a = (o.prop("type"), o.prop("name")), r = o.val(), s = o.is(k.checkbox),
                                c = o.is(k.radio), l = -1 !== a.indexOf("[]"), u = s ? o.is(":checked") : !1;
                            a && (l ? (a = a.replace("[]", ""), i[a] || (i[a] = []), s ? u ? i[a].push(r || !0) : i[a].push(!1) : i[a].push(r)) : c ? u && (i[a] = r) : s ? u ? i[a] = r || !0 : i[a] = !1 : i[a] = r)
                        }), i
                    }
                }, has: {
                    field: function (e) {
                        return P.verbose("Checking for existence of a field with identifier", e), "string" != typeof e && P.error(S.identifier, e), m.filter("#" + e).length > 0 ? !0 : m.filter('[name="' + e + '"]').length > 0 ? !0 : m.filter("[data-" + w.validate + '="' + e + '"]').length > 0 ? !0 : !1
                    }
                }, add: {
                    prompt: function (t, n) {
                        var o = P.get.field(t), a = o.closest(g), r = a.children(k.prompt), s = 0 !== r.length;
                        n = "string" == typeof n ? [n] : n, P.verbose("Adding field error state", t), a.addClass(T.error), x.inline && (s || (r = x.templates.prompt(n), r.appendTo(a)), r.html(n[0]), s ? P.verbose("Inline errors are disabled, no inline error added", t) : x.transition && e.fn.transition !== i && F.transition("is supported") ? (P.verbose("Displaying error with css transition", x.transition), r.transition(x.transition + " in", x.duration)) : (P.verbose("Displaying error with fallback javascript animation"), r.fadeIn(x.duration)))
                    }, errors: function (e) {
                        P.debug("Adding form error messages", e), P.set.error(), p.html(x.templates.error(e))
                    }
                }, remove: {
                    prompt: function (t) {
                        var n = P.get.field(t), o = n.closest(g), a = o.children(k.prompt);
                        o.removeClass(T.error), x.inline && a.is(":visible") && (P.verbose("Removing prompt for field", t), x.transition && e.fn.transition !== i && F.transition("is supported") ? a.transition(x.transition + " out", x.duration, function () {
                            a.remove()
                        }) : a.fadeOut(x.duration, function () {
                            a.remove()
                        }))
                    }
                }, set: {
                    success: function () {
                        F.removeClass(T.error).addClass(T.success)
                    }, defaults: function () {
                        m.each(function () {
                            var t = e(this), n = t.filter(k.checkbox).length > 0, i = n ? t.is(":checked") : t.val();
                            t.data(w.defaultValue, i)
                        })
                    }, error: function () {
                        F.removeClass(T.success).addClass(T.error)
                    }, value: function (e, t) {
                        var n = {};
                        return n[e] = t, P.set.values.call(O, n)
                    }, values: function (t) {
                        e.isEmptyObject(t) || e.each(t, function (t, n) {
                            var i, o = P.get.field(t), a = o.parent(), r = e.isArray(n), s = a.is(k.uiCheckbox),
                                c = a.is(k.uiDropdown), l = o.is(k.radio) && s, u = o.length > 0;
                            u && (r && s ? (P.verbose("Selecting multiple", n, o), a.checkbox("uncheck"), e.each(n, function (e, t) {
                                i = o.filter('[value="' + t + '"]'), a = i.parent(), i.length > 0 && a.checkbox("check")
                            })) : l ? (P.verbose("Selecting radio value", n, o), o.filter('[value="' + n + '"]').parent(k.uiCheckbox).checkbox("check")) : s ? (P.verbose("Setting checkbox value", n, a), n === !0 ? a.checkbox("check") : a.checkbox("uncheck")) : c ? (P.verbose("Setting dropdown value", n, a), a.dropdown("set selected", n)) : (P.verbose("Setting field value", n, o), o.val(n)))
                        })
                    }
                }, validate: {
                    form: function (e, t) {
                        var n = P.get.values();
                        if (j) return !1;
                        if (q = [], P.is.valid()) {
                            if (P.debug("Form has no validation errors, submitting"), P.set.success(), t !== !0) return x.onSuccess.call(O, e, n)
                        } else if (P.debug("Form has errors"), P.set.error(), x.inline || P.add.errors(q), F.data("moduleApi") !== i && e.stopImmediatePropagation(), t !== !0) return x.onFailure.call(O, q, n)
                    }, field: function (t, n) {
                        var o = t.identifier || n, a = P.get.field(o), r = !0, s = [];
                        return t.identifier || (P.debug("Using field name as identifier", o), t.identifier = o), a.prop("disabled") ? (P.debug("Field is disabled. Skipping", o), r = !0) : t.optional && "" === e.trim(a.val()) ? (P.debug("Field is optional and empty. Skipping", o), r = !0) : t.rules !== i && e.each(t.rules, function (e, n) {
                            P.has.field(o) && !P.validate.rule(t, n) && (P.debug("Field is invalid", o, n.type), s.push(P.get.prompt(n, t)), r = !1)
                        }), r ? (P.remove.prompt(o, s), x.onValid.call(a), !0) : (q = q.concat(s), P.add.prompt(o, s), x.onInvalid.call(a, s), !1)
                    }, rule: function (t, n) {
                        var o = P.get.field(t.identifier), a = (n.type, o.val()), r = P.get.ancillaryValue(n),
                            s = P.get.ruleName(n), c = x.rules[s];
                        return e.isFunction(c) ? (a = a === i || "" === a || null === a ? "" : e.trim(a + ""), c.call(o, a, r)) : void P.error(S.noRule, s)
                    }
                }, setting: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, x, t); else {
                        if (n === i) return x[t];
                        x[t] = n
                    }
                }, internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, P, t); else {
                        if (n === i) return P[t];
                        P[t] = n
                    }
                }, debug: function () {
                    x.debug && (x.performance ? P.performance.log(arguments) : (P.debug = Function.prototype.bind.call(console.info, console, x.name + ":"), P.debug.apply(console, arguments)))
                }, verbose: function () {
                    x.verbose && x.debug && (x.performance ? P.performance.log(arguments) : (P.verbose = Function.prototype.bind.call(console.info, console, x.name + ":"), P.verbose.apply(console, arguments)))
                }, error: function () {
                    P.error = Function.prototype.bind.call(console.error, console, x.name + ":"), P.error.apply(console, arguments)
                }, performance: {
                    log: function (e) {
                        var t, n, i;
                        x.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: O,
                            "Execution Time": n
                        })), clearTimeout(P.performance.timer), P.performance.timer = setTimeout(P.performance.display, 500)
                    }, display: function () {
                        var t = x.name + ":", n = 0;
                        s = !1, clearTimeout(P.performance.timer), e.each(c, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", r && (t += " '" + r + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), c = []
                    }
                }, invoke: function (t, n, a) {
                    var r, s, c, l = E;
                    return n = n || f, a = O || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                        var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[a]) && n != r) l = l[a]; else {
                            if (l[a] !== i) return s = l[a], !1;
                            if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                            l = l[o]
                        }
                    })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                }
            }, P.initialize()
        }), o !== i ? o : this
    }, e.fn.form.settings = {
        name: "Form",
        namespace: "form",
        debug: !1,
        verbose: !1,
        performance: !0,
        fields: !1,
        keyboardShortcuts: !0,
        on: "submit",
        inline: !1,
        delay: 200,
        revalidate: !0,
        transition: "scale",
        duration: 200,
        onValid: function () {
        },
        onInvalid: function () {
        },
        onSuccess: function () {
            return !0
        },
        onFailure: function () {
            return !1
        },
        metadata: {defaultValue: "default", validate: "validate"},
        regExp: {
            bracket: /\[(.*)\]/i,
            decimal: /^\-?\d*(\.\d+)?$/,
            email: "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
            escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
            flags: /^\/(.*)\/(.*)?/,
            integer: /^\-?\d+$/,
            number: /^\-?\d*(\.\d+)?$/,
            url: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i
        },
        text: {unspecifiedRule: "Please enter a valid value", unspecifiedField: "This field"},
        prompt: {
            empty: "{name} must have a value",
            checked: "{name} must be checked",
            email: "{name} must be a valid e-mail",
            url: "{name} must be a valid url",
            regExp: "{name} is not formatted correctly",
            integer: "{name} must be an integer",
            decimal: "{name} must be a decimal number",
            number: "{name} must be set to a number",
            is: '{name} must be "{ruleValue}"',
            isExactly: '{name} must be exactly "{ruleValue}"',
            not: '{name} cannot be set to "{ruleValue}"',
            notExactly: '{name} cannot be set to exactly "{ruleValue}"',
            contain: '{name} cannot contain "{ruleValue}"',
            containExactly: '{name} cannot contain exactly "{ruleValue}"',
            doesntContain: '{name} must contain  "{ruleValue}"',
            doesntContainExactly: '{name} must contain exactly "{ruleValue}"',
            minLength: "{name} must be at least {ruleValue} characters",
            length: "{name} must be at least {ruleValue} characters",
            exactLength: "{name} must be exactly {ruleValue} characters",
            maxLength: "{name} cannot be longer than {ruleValue} characters",
            match: "{name} must match {ruleValue} field",
            different: "{name} must have a different value than {ruleValue} field",
            creditCard: "{name} must be a valid credit card number",
            minCount: "{name} must have at least {ruleValue} choices",
            exactCount: "{name} must have exactly {ruleValue} choices",
            maxCount: "{name} must have {ruleValue} or less choices"
        },
        selector: {
            checkbox: 'input[type="checkbox"], input[type="radio"]',
            clear: ".clear",
            field: "input, textarea, select",
            group: ".field",
            input: "input",
            message: ".error.message",
            prompt: ".prompt.label",
            radio: 'input[type="radio"]',
            reset: '.reset:not([type="reset"])',
            submit: '.submit:not([type="submit"])',
            uiCheckbox: ".ui.checkbox",
            uiDropdown: ".ui.dropdown"
        },
        className: {error: "error", label: "ui prompt label", pressed: "down", success: "success"},
        error: {
            identifier: "You must specify a string identifier for each field",
            method: "The method you called is not defined.",
            noRule: "There is no rule matching the one you specified",
            oldSyntax: "Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically."
        },
        templates: {
            error: function (t) {
                var n = '<ul class="list">';
                return e.each(t, function (e, t) {
                    n += "<li>" + t + "</li>"
                }), n += "</ul>", e(n)
            }, prompt: function (t) {
                return e("<div/>").addClass("ui basic red pointing prompt label").html(t[0])
            }
        },
        rules: {
            empty: function (t) {
                return !(t === i || "" === t || e.isArray(t) && 0 === t.length)
            }, checked: function () {
                return e(this).filter(":checked").length > 0
            }, email: function (t) {
                var n = new RegExp(e.fn.form.settings.regExp.email, "i");
                return n.test(t)
            }, url: function (t) {
                return e.fn.form.settings.regExp.url.test(t)
            }, regExp: function (t, n) {
                var i, o = n.match(e.fn.form.settings.regExp.flags);
                return o && (n = o.length >= 2 ? o[1] : n, i = o.length >= 3 ? o[2] : ""), t.match(new RegExp(n, i))
            }, integer: function (t, n) {
                var o, a, r, s = e.fn.form.settings.regExp.integer;
                return n === i || "" === n || ".." === n || (-1 == n.indexOf("..") ? s.test(n) && (o = a = n - 0) : (r = n.split("..", 2), s.test(r[0]) && (o = r[0] - 0), s.test(r[1]) && (a = r[1] - 0))), s.test(t) && (o === i || t >= o) && (a === i || a >= t)
            }, decimal: function (t) {
                return e.fn.form.settings.regExp.decimal.test(t)
            }, number: function (t) {
                return e.fn.form.settings.regExp.number.test(t)
            }, is: function (e, t) {
                return t = "string" == typeof t ? t.toLowerCase() : t, e = "string" == typeof e ? e.toLowerCase() : e, e == t
            }, isExactly: function (e, t) {
                return e == t
            }, not: function (e, t) {
                return e = "string" == typeof e ? e.toLowerCase() : e, t = "string" == typeof t ? t.toLowerCase() : t, e != t
            }, notExactly: function (e, t) {
                return e != t
            }, contains: function (t, n) {
                return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 !== t.search(new RegExp(n, "i"))
            }, containsExactly: function (t, n) {
                return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 !== t.search(new RegExp(n))
            }, doesntContain: function (t, n) {
                return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 === t.search(new RegExp(n, "i"))
            }, doesntContainExactly: function (t, n) {
                return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 === t.search(new RegExp(n))
            }, minLength: function (e, t) {
                return e !== i ? e.length >= t : !1
            }, length: function (e, t) {
                return e !== i ? e.length >= t : !1
            }, exactLength: function (e, t) {
                return e !== i ? e.length == t : !1
            }, maxLength: function (e, t) {
                return e !== i ? e.length <= t : !1
            }, match: function (t, n) {
                var o;
                e(this);
                return e('[data-validate="' + n + '"]').length > 0 ? o = e('[data-validate="' + n + '"]').val() : e("#" + n).length > 0 ? o = e("#" + n).val() : e('[name="' + n + '"]').length > 0 ? o = e('[name="' + n + '"]').val() : e('[name="' + n + '[]"]').length > 0 && (o = e('[name="' + n + '[]"]')), o !== i ? t.toString() == o.toString() : !1
            }, different: function (t, n) {
                var o;
                e(this);
                return e('[data-validate="' + n + '"]').length > 0 ? o = e('[data-validate="' + n + '"]').val() : e("#" + n).length > 0 ? o = e("#" + n).val() : e('[name="' + n + '"]').length > 0 ? o = e('[name="' + n + '"]').val() : e('[name="' + n + '[]"]').length > 0 && (o = e('[name="' + n + '[]"]')), o !== i ? t.toString() !== o.toString() : !1
            }, creditCard: function (t, n) {
                var i, o, a = {
                    visa: {pattern: /^4/, length: [16]},
                    amex: {pattern: /^3[47]/, length: [15]},
                    mastercard: {pattern: /^5[1-5]/, length: [16]},
                    discover: {
                        pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
                        length: [16]
                    },
                    unionPay: {pattern: /^(62|88)/, length: [16, 17, 18, 19]},
                    jcb: {pattern: /^35(2[89]|[3-8][0-9])/, length: [16]},
                    maestro: {
                        pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
                        length: [12, 13, 14, 15, 16, 17, 18, 19]
                    },
                    dinersClub: {pattern: /^(30[0-5]|^36)/, length: [14]},
                    laser: {pattern: /^(6304|670[69]|6771)/, length: [16, 17, 18, 19]},
                    visaElectron: {pattern: /^(4026|417500|4508|4844|491(3|7))/, length: [16]}
                }, r = {}, s = !1, c = "string" == typeof n ? n.split(",") : !1;
                if ("string" == typeof t && 0 !== t.length) {
                    if (c && (e.each(c, function (n, i) {
                        o = a[i], o && (r = {
                            length: -1 !== e.inArray(t.length, o.length),
                            pattern: -1 !== t.search(o.pattern)
                        }, r.length && r.pattern && (s = !0))
                    }), !s)) return !1;
                    if (i = {
                        number: -1 !== e.inArray(t.length, a.unionPay.length),
                        pattern: -1 !== t.search(a.unionPay.pattern)
                    }, i.number && i.pattern) return !0;
                    for (var l = t.length, u = 0, d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]], f = 0; l--;) f += d[u][parseInt(t.charAt(l), 10)], u ^= 1;
                    return f % 10 === 0 && f > 0
                }
            }, minCount: function (e, t) {
                return 0 == t ? !0 : 1 == t ? "" !== e : e.split(",").length >= t
            }, exactCount: function (e, t) {
                return 0 == t ? "" === e : 1 == t ? "" !== e && -1 === e.search(",") : e.split(",").length == t
            }, maxCount: function (e, t) {
                return 0 == t ? !1 : 1 == t ? -1 === e.search(",") : e.split(",").length <= t
            }
        }
    }
}(jQuery, window, document), function (e, t, n, i) {
    "use strict";
    e.fn.accordion = function (n) {
        var o, a = e(this), r = (new Date).getTime(), s = [], c = arguments[0], l = "string" == typeof c,
            u = [].slice.call(arguments, 1);
        t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
            setTimeout(e, 0)
        };
        return a.each(function () {
            var d, f,
                m = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.accordion.settings, n) : e.extend({}, e.fn.accordion.settings),
                g = m.className, p = m.namespace, h = m.selector, v = m.error, b = "." + p, y = "module-" + p,
                x = a.selector || "", C = e(this), w = C.find(h.title), k = C.find(h.content), T = this, S = C.data(y);
            f = {
                initialize: function () {
                    f.debug("Initializing", C), f.bind.events(), m.observeChanges && f.observeChanges(), f.instantiate()
                }, instantiate: function () {
                    S = f, C.data(y, f)
                }, destroy: function () {
                    f.debug("Destroying previous instance", C), C.off(b).removeData(y)
                }, refresh: function () {
                    w = C.find(h.title), k = C.find(h.content)
                }, observeChanges: function () {
                    "MutationObserver" in t && (d = new MutationObserver(function (e) {
                        f.debug("DOM tree modified, updating selector cache"), f.refresh()
                    }), d.observe(T, {childList: !0, subtree: !0}), f.debug("Setting up mutation observer", d))
                }, bind: {
                    events: function () {
                        f.debug("Binding delegated events"), C.on(m.on + b, h.trigger, f.event.click)
                    }
                }, event: {
                    click: function () {
                        f.toggle.call(this)
                    }
                }, toggle: function (t) {
                    var n = t !== i ? "number" == typeof t ? w.eq(t) : e(t).closest(h.title) : e(this).closest(h.title),
                        o = n.next(k), a = o.hasClass(g.animating), r = o.hasClass(g.active), s = r && !a, c = !r && a;
                    f.debug("Toggling visibility of content", n), s || c ? m.collapsible ? f.close.call(n) : f.debug("Cannot close accordion content collapsing is disabled") : f.open.call(n)
                }, open: function (t) {
                    var n = t !== i ? "number" == typeof t ? w.eq(t) : e(t).closest(h.title) : e(this).closest(h.title),
                        o = n.next(k), a = o.hasClass(g.animating), r = o.hasClass(g.active), s = r || a;
                    return s ? void f.debug("Accordion already open, skipping", o) : (f.debug("Opening accordion content", n), m.onOpening.call(o), m.exclusive && f.closeOthers.call(n), n.addClass(g.active), o.stop(!0, !0).addClass(g.animating), m.animateChildren && (e.fn.transition !== i && C.transition("is supported") ? o.children().transition({
                        animation: "fade in",
                        queue: !1,
                        useFailSafe: !0,
                        debug: m.debug,
                        verbose: m.verbose,
                        duration: m.duration
                    }) : o.children().stop(!0, !0).animate({opacity: 1}, m.duration, f.resetOpacity)), void o.slideDown(m.duration, m.easing, function () {
                        o.removeClass(g.animating).addClass(g.active), f.reset.display.call(this), m.onOpen.call(this), m.onChange.call(this)
                    }))
                }, close: function (t) {
                    var n = t !== i ? "number" == typeof t ? w.eq(t) : e(t).closest(h.title) : e(this).closest(h.title),
                        o = n.next(k), a = o.hasClass(g.animating), r = o.hasClass(g.active), s = !r && a, c = r && a;
                    !r && !s || c || (f.debug("Closing accordion content", o), m.onClosing.call(o), n.removeClass(g.active), o.stop(!0, !0).addClass(g.animating), m.animateChildren && (e.fn.transition !== i && C.transition("is supported") ? o.children().transition({
                        animation: "fade out",
                        queue: !1,
                        useFailSafe: !0,
                        debug: m.debug,
                        verbose: m.verbose,
                        duration: m.duration
                    }) : o.children().stop(!0, !0).animate({opacity: 0}, m.duration, f.resetOpacity)), o.slideUp(m.duration, m.easing, function () {
                        o.removeClass(g.animating).removeClass(g.active), f.reset.display.call(this), m.onClose.call(this), m.onChange.call(this)
                    }))
                }, closeOthers: function (t) {
                    var n, o, a, r = t !== i ? w.eq(t) : e(this).closest(h.title),
                        s = r.parents(h.content).prev(h.title), c = r.closest(h.accordion),
                        l = h.title + "." + g.active + ":visible", u = h.content + "." + g.active + ":visible";
                    m.closeNested ? (n = c.find(l).not(s), a = n.next(k)) : (n = c.find(l).not(s), o = c.find(u).find(l).not(s), n = n.not(o), a = n.next(k)), n.length > 0 && (f.debug("Exclusive enabled, closing other content", n), n.removeClass(g.active), a.removeClass(g.animating).stop(!0, !0), m.animateChildren && (e.fn.transition !== i && C.transition("is supported") ? a.children().transition({
                        animation: "fade out",
                        useFailSafe: !0,
                        debug: m.debug,
                        verbose: m.verbose,
                        duration: m.duration
                    }) : a.children().stop(!0, !0).animate({opacity: 0}, m.duration, f.resetOpacity)), a.slideUp(m.duration, m.easing, function () {
                        e(this).removeClass(g.active), f.reset.display.call(this)
                    }))
                }, reset: {
                    display: function () {
                        f.verbose("Removing inline display from element", this), e(this).css("display", ""), "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style")
                    }, opacity: function () {
                        f.verbose("Removing inline opacity from element", this), e(this).css("opacity", ""), "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style")
                    }
                }, setting: function (t, n) {
                    if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t); else {
                        if (n === i) return m[t];
                        m[t] = n
                    }
                }, internal: function (t, n) {
                    return f.debug("Changing internal", t, n), n === i ? f[t] : void (e.isPlainObject(t) ? e.extend(!0, f, t) : f[t] = n)
                }, debug: function () {
                    m.debug && (m.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), f.debug.apply(console, arguments)))
                }, verbose: function () {
                    m.verbose && m.debug && (m.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), f.verbose.apply(console, arguments)))
                }, error: function () {
                    f.error = Function.prototype.bind.call(console.error, console, m.name + ":"), f.error.apply(console, arguments)
                }, performance: {
                    log: function (e) {
                        var t, n, i;
                        m.performance && (t = (new Date).getTime(), i = r || t, n = t - i, r = t, s.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: T,
                            "Execution Time": n
                        })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500)
                    }, display: function () {
                        var t = m.name + ":", n = 0;
                        r = !1, clearTimeout(f.performance.timer), e.each(s, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", x && (t += " '" + x + "'"), (console.group !== i || console.table !== i) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), s = []
                    }
                }, invoke: function (t, n, a) {
                    var r, s, c, l = S;
                    return n = n || u, a = T || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                        var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[a]) && n != r) l = l[a]; else {
                            if (l[a] !== i) return s = l[a], !1;
                            if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (f.error(v.method, t), !1);
                            l = l[o]
                        }
                    })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                }
            }, l ? (S === i && f.initialize(), f.invoke(c)) : (S !== i && S.invoke("destroy"), f.initialize())
        }), o !== i ? o : this
    }, e.fn.accordion.settings = {
        name: "Accordion",
        namespace: "accordion",
        debug: !1,
        verbose: !1,
        performance: !0,
        on: "click",
        observeChanges: !0,
        exclusive: !0,
        collapsible: !0,
        closeNested: !1,
        animateChildren: !0,
        duration: 350,
        easing: "easeOutQuad",
        onOpening: function () {
        },
        onOpen: function () {
        },
        onClosing: function () {
        },
        onClose: function () {
        },
        onChange: function () {
        },
        error: {method: "The method you called is not defined"},
        className: {active: "active", animating: "animating"},
        selector: {accordion: ".accordion", title: ".title", trigger: ".title", content: ".content"}
    }, e.extend(e.easing, {
        easeOutQuad: function (e, t, n, i, o) {
            return -i * (t /= o) * (t - 2) + n
        }
    })
}(jQuery, window, document), function (e, t, n, i) {
    e.fn.calendar = function (t) {
        var o, a = e(this), r = a.selector || "", s = (new Date).getTime(), c = [], l = arguments[0],
            u = "string" == typeof l, d = [].slice.call(arguments, 1);
        return a.each(function () {
            var a, f,
                m = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.calendar.settings, t) : e.extend({}, e.fn.calendar.settings),
                g = m.className, p = m.namespace, h = m.selector, v = m.formatter, b = m.parser, y = m.metadata,
                x = m.error, C = "." + p, w = "module-" + p, k = e(this), T = k.find(h.input), S = k.find(h.popup),
                A = k.find(h.activator), D = this, R = k.data(w), E = !1, P = !1;
            f = {
                initialize: function () {
                    f.debug("Initializing calendar for", D), a = f.get.isTouch(), f.setup.popup(), f.setup.inline(), f.setup.input(), f.setup.date(), f.create.calendar(), f.bind.events(), f.instantiate()
                }, instantiate: function () {
                    f.verbose("Storing instance of calendar"), R = f, k.data(w, R)
                }, destroy: function () {
                    f.verbose("Destroying previous calendar for", D), k.removeData(w), f.unbind.events()
                }, setup: {
                    popup: function () {
                        if (!m.inline && (A.length || (A = k.children().first(), A.length))) {
                            if (e.fn.popup === i) return void f.error(x.popup);
                            S.length || (S = e("<div/>").addClass(g.popup).prependTo(A.parent())), S.addClass(g.calendar);
                            var t = m.onVisible, n = m.onHidden;
                            T.length || (S.attr("tabindex", "0"), t = function () {
                                return f.focus(), m.onVisible.apply(S, arguments)
                            }, n = function () {
                                return f.blur(), m.onHidden.apply(S, arguments)
                            });
                            var o = function () {
                                return f.set.focusDate(f.get.date()), f.set.mode(m.startMode), m.onShow.apply(S, arguments)
                            }, a = m.on || (T.length ? "focus" : "click"), r = e.extend({}, m.popupOptions, {
                                popup: S,
                                on: a,
                                hoverable: "hover" === a,
                                onShow: o,
                                onVisible: t,
                                onHide: m.onHide,
                                onHidden: n
                            });
                            f.popup(r)
                        }
                    }, inline: function () {
                        (!A.length || m.inline) && (S = e("<div/>").addClass(g.calendar).appendTo(k), T.length || S.attr("tabindex", "0"))
                    }, input: function () {
                        m.touchReadonly && T.length && a && T.prop("readonly", !0)
                    }, date: function () {
                        if (T.length) {
                            var e = T.val(), t = b.date(e, m);
                            f.set.date(t, m.formatInput, !1)
                        }
                    }
                }, create: {
                    calendar: function () {
                        var t, n, i, o, a, r = f.get.mode(), s = new Date, c = f.get.date(), l = f.get.focusDate(),
                            u = l || c || m.initialDate || s;
                        u = f.helper.dateInRange(u), l || (l = u, f.set.focusDate(l, !1, !1));
                        var d = u.getMinutes(), p = u.getHours(), h = u.getDate(), b = u.getMonth(),
                            x = u.getFullYear(), C = "year" === r, w = "month" === r, k = "day" === r, T = "hour" === r,
                            A = "minute" === r, D = "time" === m.type, R = k ? 7 : T ? 4 : 3,
                            E = 7 === R ? "seven" : 4 === R ? "four" : "three", P = k || T ? 6 : 4,
                            F = (new Date(x, b, 1).getDay() - m.firstDayOfWeek % 7 + 7) % 7;
                        if (!m.constantHeight && k) {
                            var O = new Date(x, b + 1, 0).getDate() + F;
                            P = Math.ceil(O / 7)
                        }
                        var q = C ? 10 : w ? 1 : 0, j = k ? 1 : 0, I = T || A ? 1 : 0, z = T || A ? h : 1,
                            N = new Date(x - q, b - j, z - I, p), M = new Date(x + q, b + j, z + I, p),
                            L = C ? new Date(10 * Math.ceil(x / 10) - 9, 0, 0) : w ? new Date(x, 0, 0) : k ? new Date(x, b, 0) : new Date(x, b, h, -1),
                            V = C ? new Date(10 * Math.ceil(x / 10) + 1, 0, 1) : w ? new Date(x + 1, 0, 1) : k ? new Date(x, b + 1, 1) : new Date(x, b, h + 1),
                            H = e("<table/>").addClass(g.table).addClass(E + " column").addClass(r);
                        if (!D) {
                            var U = e("<thead/>").appendTo(H);
                            o = e("<tr/>").appendTo(U), a = e("<th/>").attr("colspan", "" + R).appendTo(o);
                            var W = e("<span/>").addClass(g.link).appendTo(a);
                            W.text(v.header(u, r, m));
                            var B = w ? m.disableYear ? "day" : "year" : k ? m.disableMonth ? "year" : "month" : "day";
                            W.data(y.mode, B);
                            var Y = e("<span/>").addClass(g.prev).appendTo(a);
                            Y.data(y.focusDate, N), Y.toggleClass(g.disabledCell, !f.helper.isDateInRange(L, r)), e("<i/>").addClass(g.prevIcon).appendTo(Y);
                            var Q = e("<span/>").addClass(g.next).appendTo(a);
                            if (Q.data(y.focusDate, M), Q.toggleClass(g.disabledCell, !f.helper.isDateInRange(V, r)), e("<i/>").addClass(g.nextIcon).appendTo(Q), k) for (o = e("<tr/>").appendTo(U), t = 0; R > t; t++) a = e("<th/>").appendTo(o), a.text(v.dayColumnHeader((t + m.firstDayOfWeek) % 7, m))
                        }
                        var X = e("<tbody/>").appendTo(H);
                        for (t = C ? 10 * Math.ceil(x / 10) - 9 : k ? 1 - F : 0, n = 0; P > n; n++) for (o = e("<tr/>").appendTo(X), i = 0; R > i; i++, t++) {
                            var $ = C ? new Date(t, b, 1, p, d) : w ? new Date(x, t, 1, p, d) : k ? new Date(x, b, t, p, d) : T ? new Date(x, b, h, t) : new Date(x, b, h, p, 5 * t),
                                K = C ? t : w ? m.text.monthsShort[t] : k ? $.getDate() : v.time($, m, !0);
                            a = e("<td/>").addClass(g.cell).appendTo(o), a.text(K), a.data(y.date, $);
                            var Z = k && $.getMonth() !== b || !f.helper.isDateInRange($, r),
                                J = f.helper.dateEqual($, c, r);
                            a.toggleClass(g.disabledCell, Z), a.toggleClass(g.activeCell, J), T || A || a.toggleClass(g.todayCell, f.helper.dateEqual($, s, r)), f.helper.dateEqual($, l, r) && f.set.focusDate($, !1, !1)
                        }
                        if (m.today) {
                            var G = e("<tr/>").appendTo(X),
                                _ = e("<td/>").attr("colspan", "" + R).addClass(g.today).appendTo(G);
                            _.text(v.today(m)), _.data(y.date, s)
                        }
                        f.update.focus(!1, H), S.empty(), H.appendTo(S)
                    }
                }, update: {
                    focus: function (t, n) {
                        n = n || S;
                        var i = f.get.mode(), o = f.get.date(), r = f.get.focusDate(), s = f.get.startDate(),
                            c = f.get.endDate(), l = (t ? r : null) || o || (a ? null : r);
                        n.find("td").each(function () {
                            var t = e(this), n = t.data(y.date);
                            if (n) {
                                var o = t.hasClass(g.disabledCell), u = t.hasClass(g.activeCell),
                                    d = f.helper.dateEqual(n, r, i),
                                    m = l ? !!s && f.helper.isDateInRange(n, i, s, l) || !!c && f.helper.isDateInRange(n, i, l, c) : !1;
                                t.toggleClass(g.focusCell, d && (!a || E)), t.toggleClass(g.rangeCell, m && !u && !o)
                            }
                        })
                    }
                }, refresh: function () {
                    f.create.calendar()
                }, bind: {
                    events: function () {
                        S.on("mousedown" + C, f.event.mousedown), S.on("touchstart" + C, f.event.mousedown), S.on("mouseup" + C, f.event.mouseup), S.on("touchend" + C, f.event.mouseup), S.on("mouseover" + C, f.event.mouseover), T.length ? (T.on("input" + C, f.event.inputChange), T.on("focus" + C, f.event.inputFocus), T.on("blur" + C, f.event.inputBlur), T.on("click" + C, f.event.inputClick), T.on("keydown" + C, f.event.keydown)) : S.on("keydown" + C, f.event.keydown)
                    }
                }, unbind: {
                    events: function () {
                        S.off(C), T.length && T.off(C)
                    }
                }, event: {
                    mouseover: function (t) {
                        var n = e(t.target), i = n.data(y.date), o = 1 === t.buttons;
                        i && f.set.focusDate(i, !1, !0, o)
                    }, mousedown: function (t) {
                        T.length && t.preventDefault(), E = t.type.indexOf("touch") >= 0;
                        var n = e(t.target), i = n.data(y.date);
                        i && f.set.focusDate(i, !1, !0, !0)
                    }, mouseup: function (t) {
                        f.focus(), t.preventDefault(), t.stopPropagation(), E = !1;
                        var n = e(t.target), i = n.parent();
                        (i.data(y.date) || i.data(y.focusDate) || i.data(y.mode)) && (n = i);
                        var o = n.data(y.date), a = n.data(y.focusDate), r = n.data(y.mode);
                        if (o) {
                            var s = n.hasClass(g.today);
                            f.selectDate(o, s)
                        } else a ? f.set.focusDate(a) : r && f.set.mode(r)
                    }, keydown: function (e) {
                        if ((27 === e.keyCode || 9 === e.keyCode) && f.popup("hide"), f.popup("is visible")) if (37 === e.keyCode || 38 === e.keyCode || 39 === e.keyCode || 40 === e.keyCode) {
                            var t = f.get.mode(), n = "day" === t ? 7 : "hour" === t ? 4 : 3,
                                i = 37 === e.keyCode ? -1 : 38 === e.keyCode ? -n : 39 == e.keyCode ? 1 : n;
                            i *= "minute" === t ? 5 : 1;
                            var o = f.get.focusDate() || f.get.date() || new Date,
                                a = o.getFullYear() + ("year" === t ? i : 0),
                                r = o.getMonth() + ("month" === t ? i : 0), s = o.getDate() + ("day" === t ? i : 0),
                                c = o.getHours() + ("hour" === t ? i : 0),
                                l = o.getMinutes() + ("minute" === t ? i : 0), u = new Date(a, r, s, c, l);
                            "time" === m.type && (u = f.helper.mergeDateTime(o, u)), f.helper.isDateInRange(u, t) && f.set.focusDate(u)
                        } else if (13 === e.keyCode) {
                            var d = f.get.focusDate();
                            d && f.selectDate(d)
                        }
                        (38 === e.keyCode || 40 === e.keyCode) && (e.preventDefault(), f.popup("show"))
                    }, inputChange: function () {
                        var e = T.val(), t = b.date(e, m);
                        f.set.date(t, !1)
                    }, inputFocus: function () {
                        S.addClass(g.active)
                    }, inputBlur: function () {
                        if (S.removeClass(g.active), m.formatInput) {
                            var e = f.get.date(), t = v.datetime(e, m);
                            T.val(t)
                        }
                    }, inputClick: function () {
                        f.popup("show")
                    }
                }, get: {
                    date: function () {
                        return k.data(y.date)
                    }, focusDate: function () {
                        return k.data(y.focusDate)
                    }, startDate: function () {
                        var e = f.get.calendarModule(m.startCalendar);
                        return e ? e.get.date() : k.data(y.startDate)
                    }, endDate: function () {
                        var e = f.get.calendarModule(m.endCalendar);
                        return e ? e.get.date() : k.data(y.endDate)
                    }, mode: function () {
                        var t = k.data(y.mode) || m.startMode, n = f.get.validModes();
                        return e.inArray(t, n) >= 0 ? t : "time" === m.type ? "hour" : "month" === m.type ? "month" : "year" === m.type ? "year" : "day"
                    }, validModes: function () {
                        var e = [];
                        return "time" !== m.type && (m.disableYear && "year" !== m.type || e.push("year"), (!m.disableMonth && "year" !== m.type || "month" === m.type) && e.push("month"), m.type.indexOf("date") >= 0 && e.push("day")), m.type.indexOf("time") >= 0 && (e.push("hour"), m.disableMinute || e.push("minute")), e
                    }, isTouch: function () {
                        try {
                            return n.createEvent("TouchEvent"), !0
                        } catch (e) {
                            return !1
                        }
                    }, calendarModule: function (t) {
                        return t ? (t instanceof e || (t = k.parent().children(t).first()), t.data(w)) : null
                    }
                }, set: {
                    date: function (e, t, n) {
                        t = t !== !1, n = n !== !1, e = f.helper.sanitiseDate(e), e = f.helper.dateInRange(e);
                        var o = v.datetime(e, m);
                        if (n && m.onChange.call(D, e, o) === !1) return !1;
                        var a = f.get.endDate();
                        a && e && e > a && f.set.endDate(i), f.set.dataKeyValue(y.date, e), f.set.focusDate(e), t && T.length && T.val(o)
                    }, startDate: function (e, t) {
                        e = f.helper.sanitiseDate(e);
                        var n = f.get.calendarModule(m.startCalendar);
                        n && n.set.date(e), f.set.dataKeyValue(y.startDate, e, t)
                    }, endDate: function (e, t) {
                        e = f.helper.sanitiseDate(e);
                        var n = f.get.calendarModule(m.endCalendar);
                        n && n.set.date(e), f.set.dataKeyValue(y.endDate, e, t)
                    }, focusDate: function (e, t, n, i) {
                        e = f.helper.sanitiseDate(e), e = f.helper.dateInRange(e);
                        var o = f.set.dataKeyValue(y.focusDate, e, t);
                        n = n !== !1 && o && t === !1 || P != i, P = i, n && f.update.focus(i)
                    }, mode: function (e, t) {
                        f.set.dataKeyValue(y.mode, e, t)
                    }, dataKeyValue: function (e, t, n) {
                        var i = k.data(e), o = i === t || t >= i && i >= t;
                        return t ? k.data(e, t) : k.removeData(e), n = n !== !1 && !o, n && f.create.calendar(), !o
                    }
                }, selectDate: function (e, t) {
                    var n = f.get.mode(),
                        i = t || "minute" === n || m.disableMinute && "hour" === n || "date" === m.type && "day" === n || "month" === m.type && "month" === n || "year" === m.type && "year" === n;
                    if (i) {
                        var o = f.set.date(e) === !1;
                        if (!o && m.closable) {
                            f.popup("hide");
                            var a = f.get.calendarModule(m.endCalendar);
                            a && (a.popup("show"), a.focus())
                        }
                    } else {
                        var r = "year" === n ? m.disableMonth ? "day" : "month" : "month" === n ? "day" : "day" === n ? "hour" : "minute";
                        f.set.mode(r), "hour" === n || "day" === n && f.get.date() ? f.set.date(e) : f.set.focusDate(e)
                    }
                }, changeDate: function (e) {
                    f.set.date(e)
                }, clear: function () {
                    f.set.date(i)
                }, popup: function () {
                    return A.popup.apply(A, arguments)
                }, focus: function () {
                    T.length ? T.focus() : S.focus()
                }, blur: function () {
                    T.length ? T.blur() : S.blur()
                }, helper: {
                    sanitiseDate: function (e) {
                        return e ? (e instanceof Date || (e = b.date("" + e)), isNaN(e.getTime()) ? i : e) : i
                    }, dateDiff: function (e, t, n) {
                        n = n || "day";
                        var i = "time" === m.type, o = "year" === n, a = o || "month" === n, r = "minute" === n,
                            s = r || "hour" === n;
                        return e = new Date(i ? 2e3 : e.getFullYear(), i ? 0 : o ? 0 : e.getMonth(), i ? 1 : a ? 1 : e.getDate(), s ? e.getHours() : 0, r ? Math.floor(e.getMinutes() / 5) : 0), t = new Date(i ? 2e3 : t.getFullYear(), i ? 0 : o ? 0 : t.getMonth(), i ? 1 : a ? 1 : t.getDate(), s ? t.getHours() : 0, r ? Math.floor(t.getMinutes() / 5) : 0), t.getTime() - e.getTime()
                    }, dateEqual: function (e, t, n) {
                        return !!e && !!t && 0 === f.helper.dateDiff(e, t, n)
                    }, isDateInRange: function (e, t, n, i) {
                        if (!n && !i) {
                            var o = f.get.startDate();
                            n = o && m.minDate ? Math.max(o, m.minDate) : o || m.minDate, i = m.maxDate
                        }
                        return !(!e || n && f.helper.dateDiff(e, n, t) > 0 || i && f.helper.dateDiff(i, e, t) > 0)
                    }, dateInRange: function (e, t, n) {
                        if (!t && !n) {
                            var i = f.get.startDate();
                            t = i && m.minDate ? Math.max(i, m.minDate) : i || m.minDate, n = m.maxDate
                        }
                        var o = "time" === m.type;
                        return e ? t && f.helper.dateDiff(e, t, "minute") > 0 ? o ? f.helper.mergeDateTime(e, t) : t : n && f.helper.dateDiff(n, e, "minute") > 0 ? o ? f.helper.mergeDateTime(e, n) : n : e : e
                    }, mergeDateTime: function (e, t) {
                        return e && t ? new Date(e.getFullYear(), e.getMonth(), e.getDate(), t.getHours(), t.getMinutes()) : t
                    }
                }, setting: function (t, n) {
                    if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t); else {
                        if (n === i) return m[t];
                        m[t] = n
                    }
                }, internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, f, t); else {
                        if (n === i) return f[t];
                        f[t] = n
                    }
                }, debug: function () {
                    m.debug && (m.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), f.debug.apply(console, arguments)))
                }, verbose: function () {
                    m.verbose && m.debug && (m.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), f.verbose.apply(console, arguments)))
                }, error: function () {
                    f.error = Function.prototype.bind.call(console.error, console, m.name + ":"), f.error.apply(console, arguments)
                }, performance: {
                    log: function (e) {
                        var t, n, i;
                        m.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: D,
                            "Execution Time": n
                        })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500)
                    }, display: function () {
                        var t = m.name + ":", n = 0;
                        s = !1, clearTimeout(f.performance.timer), e.each(c, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), c = []
                    }
                }, invoke: function (t, n, a) {
                    var r, s, c, l = R;
                    return n = n || d, a = D || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                        var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[a]) && n != r) l = l[a]; else {
                            if (l[a] !== i) return s = l[a], !1;
                            if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (f.error(x.method, t), !1);
                            l = l[o]
                        }
                    })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                }
            }, u ? (R === i && f.initialize(), f.invoke(l)) : (R !== i && R.invoke("destroy"), f.initialize())
        }), o !== i ? o : a
    }, e.fn.calendar.settings = {
        name: "Calendar",
        namespace: "calendar",
        debug: !1,
        verbose: !1,
        performance: !1,
        type: "datetime",
        firstDayOfWeek: 0,
        constantHeight: !0,
        today: !1,
        closable: !0,
        monthFirst: !0,
        touchReadonly: !0,
        inline: !1,
        on: null,
        initialDate: null,
        startMode: !1,
        minDate: null,
        maxDate: null,
        ampm: !0,
        disableYear: !1,
        disableMonth: !1,
        disableMinute: !1,
        formatInput: !0,
        startCalendar: null,
        endCalendar: null,
        popupOptions: {position: "bottom left", lastResort: "bottom left", prefer: "opposite", hideOnScroll: !1},
        // text: {
        //     days: ["S", "M", "T", "W", "T", "F", "S"],
        //     months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        //     monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        //     today: "Today",
        //     now: "Now",
        //     am: "AM",
        //     pm: "PM"
        // },
        text: {
            days: ["Вск", "Пн", "Вт", "Ср", "Чт", "Пт", "Суб"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            now: "Now",
            am: "AM",
            pm: "PM"
        },
        formatter: {
            header: function (e, t, n) {
                return "year" === t ? n.formatter.yearHeader(e, n) : "month" === t ? n.formatter.monthHeader(e, n) : "day" === t ? n.formatter.dayHeader(e, n) : "hour" === t ? n.formatter.hourHeader(e, n) : n.formatter.minuteHeader(e, n)
            }, yearHeader: function (e, t) {
                var n = 10 * Math.ceil(e.getFullYear() / 10);
                return n - 9 + " - " + (n + 2)
            }, monthHeader: function (e, t) {
                return e.getFullYear()
            }, dayHeader: function (e, t) {
                var n = t.text.months[e.getMonth()], i = e.getFullYear();
                return n + " " + i
            }, hourHeader: function (e, t) {
                return t.formatter.date(e, t)
            }, minuteHeader: function (e, t) {
                return t.formatter.date(e, t)
            }, dayColumnHeader: function (e, t) {
                return t.text.days[e]
            }, datetime: function (e, t) {
                if (!e) return "";
                var n = "time" === t.type ? "" : t.formatter.date(e, t),
                    i = t.type.indexOf("time") < 0 ? "" : t.formatter.time(e, t, !1),
                    o = "datetime" === t.type ? " " : "";
                return n + o + i
            }, date: function (e, t) {
                if (!e) return "";
                var n = e.getDate(), i = t.text.months[e.getMonth()], o = e.getFullYear();
                return "year" === t.type ? o : "month" === t.type ? i + " " + o : (t.monthFirst ? i + " " + n : n + " " + i) + ", " + o
            }, time: function (e, t, n) {
                if (!e) return "";
                var i = e.getHours(), o = e.getMinutes(), a = "";
                return t.ampm && (a = " " + (12 > i ? t.text.am : t.text.pm), i = 0 === i ? 12 : i > 12 ? i - 12 : i), i + ":" + (10 > o ? "0" : "") + o + a
            }, today: function (e) {
                return "date" === e.type ? e.text.today : e.text.now
            }
        },
        parser: {
            date: function (t, n) {
                if (!t) return null;
                if (t = ("" + t).trim().toLowerCase(), 0 === t.length) return null;
                var o, a, r, s = -1, c = -1, l = -1, u = -1, d = -1, f = i, m = "time" === n.type,
                    g = n.type.indexOf("time") < 0, p = t.split(n.regExp.dateWords), h = t.split(n.regExp.dateNumbers);
                if (!g) for (f = e.inArray(n.text.am.toLowerCase(), p) >= 0 ? !0 : e.inArray(n.text.pm.toLowerCase(), p) >= 0 ? !1 : i, o = 0; o < h.length; o++) {
                    var v = h[o];
                    if (v.indexOf(":") >= 0) {
                        if (0 > c || 0 > s) {
                            var b = v.split(":");
                            for (r = 0; r < Math.min(2, b.length); r++) a = parseInt(b[r]), isNaN(a) && (a = 0), 0 === r ? c = a % 24 : s = a % 60
                        }
                        h.splice(o, 1)
                    }
                }
                if (!m) {
                    for (o = 0; o < p.length; o++) {
                        var y = p[o];
                        if (!(y.length <= 0)) {
                            for (y = y.substring(0, Math.min(y.length, 3)), a = 0; a < n.text.months.length; a++) {
                                var x = n.text.months[a];
                                if (x = x.substring(0, Math.min(y.length, Math.min(x.length, 3))).toLowerCase(), x === y) {
                                    u = a + 1;
                                    break
                                }
                            }
                            if (u >= 0) break
                        }
                    }
                    for (o = 0; o < h.length; o++) if (a = parseInt(h[o]), !isNaN(a) && a > 59) {
                        d = a, h.splice(o, 1);
                        break
                    }
                    if (0 > u) for (o = 0; o < h.length; o++) if (r = o > 1 || n.monthFirst ? o : 1 === o ? 0 : 1, a = parseInt(h[r]), !isNaN(a) && a >= 1 && 12 >= a) {
                        u = a, h.splice(r, 1);
                        break
                    }
                    for (o = 0; o < h.length; o++) if (a = parseInt(h[o]), !isNaN(a) && a >= 1 && 31 >= a) {
                        l = a, h.splice(o, 1);
                        break
                    }
                    if (0 > d) for (o = h.length - 1; o >= 0; o--) if (a = parseInt(h[o]), !isNaN(a)) {
                        99 > a && (a += 2e3), d = a, h.splice(o, 1);
                        break
                    }
                }
                if (!g) {
                    if (0 > c) for (o = 0; o < h.length; o++) if (a = parseInt(h[o]), !isNaN(a) && a >= 0 && 23 >= a) {
                        c = a, h.splice(o, 1);
                        break
                    }
                    if (0 > s) for (o = 0; o < h.length; o++) if (a = parseInt(h[o]), !isNaN(a) && a >= 0 && 59 >= a) {
                        s = a, h.splice(o, 1);
                        break
                    }
                }
                if (0 > s && 0 > c && 0 > l && 0 > u && 0 > d) return null;
                0 > s && (s = 0), 0 > c && (c = 0), 0 > l && (l = 1), 0 > u && (u = 1), 0 > d && (d = (new Date).getFullYear()), f !== i && (f ? 12 === c && (c = 0) : 12 > c && (c += 12));
                var C = new Date(d, u - 1, l, c, s);
                return (C.getMonth() !== u - 1 || C.getFullYear() !== d) && (C = new Date(d, u, 0, c, s)), isNaN(C.getTime()) ? null : C
            }
        },
        onChange: function (e, t) {
            return !0
        },
        onShow: function () {
        },
        onVisible: function () {
        },
        onHide: function () {
        },
        onHidden: function () {
        },
        selector: {popup: ".ui.popup", input: "input", activator: "input"},
        regExp: {dateWords: /[^A-Za-z\u00C0-\u024F]+/g, dateNumbers: /[^\d:]+/g},
        error: {
            popup: "UI Popup, a required component is not included in this page",
            method: "The method you called is not defined."
        },
        className: {
            calendar: "calendar",
            active: "active",
            popup: "ui popup",
            table: "ui celled center aligned unstackable table",
            prev: "prev link",
            next: "next link",
            prevIcon: "chevron left icon",
            nextIcon: "chevron right icon",
            link: "link",
            cell: "link",
            disabledCell: "disabled",
            activeCell: "active",
            rangeCell: "range",
            focusCell: "focus",
            todayCell: "today",
            today: "today link"
        },
        metadata: {date: "date", focusDate: "focusDate", startDate: "startDate", endDate: "endDate", mode: "mode"}
    }
}(jQuery, window, document), function (e, t, n, i) {
    "use strict";
    e.fn.checkbox = function (n) {
        var o, a = e(this), r = a.selector || "", s = (new Date).getTime(), c = [], l = arguments[0],
            u = "string" == typeof l, d = [].slice.call(arguments, 1);
        return a.each(function () {
            var a, f, m = e.extend(!0, {}, e.fn.checkbox.settings, n), g = m.className, p = m.namespace, h = m.selector,
                v = m.error, b = "." + p, y = "module-" + p, x = e(this), C = e(this).children(h.label),
                w = e(this).children(h.input), k = w[0], T = !1, S = !1, A = x.data(y), D = this;
            f = {
                initialize: function () {
                    f.verbose("Initializing checkbox", m), f.create.label(), f.bind.events(), f.set.tabbable(), f.hide.input(), f.observeChanges(), f.instantiate(), f.setup()
                }, instantiate: function () {
                    f.verbose("Storing instance of module", f), A = f, x.data(y, f)
                }, destroy: function () {
                    f.verbose("Destroying module"), f.unbind.events(), f.show.input(), x.removeData(y)
                }, fix: {
                    reference: function () {
                        x.is(h.input) && (f.debug("Behavior called on <input> adjusting invoked element"), x = x.closest(h.checkbox), f.refresh())
                    }
                }, setup: function () {
                    f.set.initialLoad(), f.is.indeterminate() ? (f.debug("Initial value is indeterminate"), f.indeterminate()) : f.is.checked() ? (f.debug("Initial value is checked"), f.check()) : (f.debug("Initial value is unchecked"), f.uncheck()), f.remove.initialLoad()
                }, refresh: function () {
                    C = x.children(h.label), w = x.children(h.input), k = w[0]
                }, hide: {
                    input: function () {
                        f.verbose("Modfying <input> z-index to be unselectable"), w.addClass(g.hidden)
                    }
                }, show: {
                    input: function () {
                        f.verbose("Modfying <input> z-index to be selectable"), w.removeClass(g.hidden)
                    }
                }, observeChanges: function () {
                    "MutationObserver" in t && (a = new MutationObserver(function (e) {
                        f.debug("DOM tree modified, updating selector cache"), f.refresh()
                    }), a.observe(D, {childList: !0, subtree: !0}), f.debug("Setting up mutation observer", a))
                }, attachEvents: function (t, n) {
                    var i = e(t);
                    n = e.isFunction(f[n]) ? f[n] : f.toggle, i.length > 0 ? (f.debug("Attaching checkbox events to element", t, n), i.on("click" + b, n)) : f.error(v.notFound)
                }, event: {
                    click: function (t) {
                        var n = e(t.target);
                        return n.is(h.input) ? void f.verbose("Using default check action on initialized checkbox") : n.is(h.link) ? void f.debug("Clicking link inside checkbox, skipping toggle") : (f.toggle(), w.focus(), void t.preventDefault())
                    }, keydown: function (e) {
                        var t = e.which, n = {enter: 13, space: 32, escape: 27};
                        t == n.escape ? (f.verbose("Escape key pressed blurring field"), w.blur(), S = !0) : e.ctrlKey || t != n.space && t != n.enter ? S = !1 : (f.verbose("Enter/space key pressed, toggling checkbox"), f.toggle(), S = !0)
                    }, keyup: function (e) {
                        S && e.preventDefault()
                    }
                }, check: function () {
                    f.should.allowCheck() && (f.debug("Checking checkbox", w), f.set.checked(), f.should.ignoreCallbacks() || (m.onChecked.call(k), m.onChange.call(k)))
                }, uncheck: function () {
                    f.should.allowUncheck() && (f.debug("Unchecking checkbox"), f.set.unchecked(), f.should.ignoreCallbacks() || (m.onUnchecked.call(k), m.onChange.call(k)))
                }, indeterminate: function () {
                    return f.should.allowIndeterminate() ? void f.debug("Checkbox is already indeterminate") : (f.debug("Making checkbox indeterminate"), f.set.indeterminate(), void (f.should.ignoreCallbacks() || (m.onIndeterminate.call(k), m.onChange.call(k))))
                }, determinate: function () {
                    return f.should.allowDeterminate() ? void f.debug("Checkbox is already determinate") : (f.debug("Making checkbox determinate"), f.set.determinate(), void (f.should.ignoreCallbacks() || (m.onDeterminate.call(k), m.onChange.call(k))))
                }, enable: function () {
                    return f.is.enabled() ? void f.debug("Checkbox is already enabled") : (f.debug("Enabling checkbox"), f.set.enabled(), void m.onEnable.call(k))
                }, disable: function () {
                    return f.is.disabled() ? void f.debug("Checkbox is already disabled") : (f.debug("Disabling checkbox"), f.set.disabled(), void m.onDisable.call(k))
                }, get: {
                    radios: function () {
                        var t = f.get.name();
                        return e('input[name="' + t + '"]').closest(h.checkbox)
                    }, otherRadios: function () {
                        return f.get.radios().not(x)
                    }, name: function () {
                        return w.attr("name")
                    }
                }, is: {
                    initialLoad: function () {
                        return T
                    }, radio: function () {
                        return w.hasClass(g.radio) || "radio" == w.attr("type")
                    }, indeterminate: function () {
                        return w.prop("indeterminate") !== i && w.prop("indeterminate")
                    }, checked: function () {
                        return w.prop("checked") !== i && w.prop("checked")
                    }, disabled: function () {
                        return w.prop("disabled") !== i && w.prop("disabled")
                    }, enabled: function () {
                        return !f.is.disabled()
                    }, determinate: function () {
                        return !f.is.indeterminate()
                    }, unchecked: function () {
                        return !f.is.checked()
                    }
                }, should: {
                    allowCheck: function () {
                        return f.is.determinate() && f.is.checked() && !f.should.forceCallbacks() ? (f.debug("Should not allow check, checkbox is already checked"), !1) : m.beforeChecked.apply(k) === !1 ? (f.debug("Should not allow check, beforeChecked cancelled"), !1) : !0
                    }, allowUncheck: function () {
                        return f.is.determinate() && f.is.unchecked() && !f.should.forceCallbacks() ? (f.debug("Should not allow uncheck, checkbox is already unchecked"), !1) : m.beforeUnchecked.apply(k) === !1 ? (f.debug("Should not allow uncheck, beforeUnchecked cancelled"), !1) : !0
                    }, allowIndeterminate: function () {
                        return f.is.indeterminate() && !f.should.forceCallbacks() ? (f.debug("Should not allow indeterminate, checkbox is already indeterminate"), !1) : m.beforeIndeterminate.apply(k) === !1 ? (f.debug("Should not allow indeterminate, beforeIndeterminate cancelled"), !1) : !0
                    }, allowDeterminate: function () {
                        return f.is.determinate() && !f.should.forceCallbacks() ? (f.debug("Should not allow determinate, checkbox is already determinate"), !1) : m.beforeDeterminate.apply(k) === !1 ? (f.debug("Should not allow determinate, beforeDeterminate cancelled"), !1) : !0
                    }, forceCallbacks: function () {
                        return f.is.initialLoad() && m.fireOnInit
                    }, ignoreCallbacks: function () {
                        return T && !m.fireOnInit
                    }
                }, can: {
                    change: function () {
                        return !(x.hasClass(g.disabled) || x.hasClass(g.readOnly) || w.prop("disabled") || w.prop("readonly"))
                    }, uncheck: function () {
                        return "boolean" == typeof m.uncheckable ? m.uncheckable : !f.is.radio()
                    }
                }, set: {
                    initialLoad: function () {
                        T = !0
                    }, checked: function () {
                        return f.verbose("Setting class to checked"), x.removeClass(g.indeterminate).addClass(g.checked), f.is.radio() && f.uncheckOthers(), !f.is.indeterminate() && f.is.checked() ? void f.debug("Input is already checked, skipping input property change") : (f.verbose("Setting state to checked", k), w.prop("indeterminate", !1).prop("checked", !0), void f.trigger.change())
                    }, unchecked: function () {
                        return f.verbose("Removing checked class"), x.removeClass(g.indeterminate).removeClass(g.checked), !f.is.indeterminate() && f.is.unchecked() ? void f.debug("Input is already unchecked") : (f.debug("Setting state to unchecked"), w.prop("indeterminate", !1).prop("checked", !1), void f.trigger.change())
                    }, indeterminate: function () {
                        return f.verbose("Setting class to indeterminate"), x.addClass(g.indeterminate), f.is.indeterminate() ? void f.debug("Input is already indeterminate, skipping input property change") : (f.debug("Setting state to indeterminate"), w.prop("indeterminate", !0), void f.trigger.change())
                    }, determinate: function () {
                        return f.verbose("Removing indeterminate class"), x.removeClass(g.indeterminate), f.is.determinate() ? void f.debug("Input is already determinate, skipping input property change") : (f.debug("Setting state to determinate"), void w.prop("indeterminate", !1))
                    }, disabled: function () {
                        return f.verbose("Setting class to disabled"), x.addClass(g.disabled), f.is.disabled() ? void f.debug("Input is already disabled, skipping input property change") : (f.debug("Setting state to disabled"), w.prop("disabled", "disabled"), void f.trigger.change())
                    }, enabled: function () {
                        return f.verbose("Removing disabled class"), x.removeClass(g.disabled), f.is.enabled() ? void f.debug("Input is already enabled, skipping input property change") : (f.debug("Setting state to enabled"), w.prop("disabled", !1), void f.trigger.change())
                    }, tabbable: function () {
                        f.verbose("Adding tabindex to checkbox"), w.attr("tabindex") === i && w.attr("tabindex", 0)
                    }
                }, remove: {
                    initialLoad: function () {
                        T = !1
                    }
                }, trigger: {
                    change: function () {
                        f.verbose("Triggering change event from programmatic change"), w.trigger("change")
                    }
                }, create: {
                    label: function () {
                        w.prevAll(h.label).length > 0 ? (w.prev(h.label).detach().insertAfter(w), f.debug("Moving existing label", C)) : f.has.label() || (C = e("<label>").insertAfter(w), f.debug("Creating label", C))
                    }
                }, has: {
                    label: function () {
                        return C.length > 0
                    }
                }, bind: {
                    events: function () {
                        f.verbose("Attaching checkbox events"), x.on("click" + b, f.event.click).on("keydown" + b, h.input, f.event.keydown).on("keyup" + b, h.input, f.event.keyup)
                    }
                }, unbind: {
                    events: function () {
                        f.debug("Removing events"), x.off(b)
                    }
                }, uncheckOthers: function () {
                    var e = f.get.otherRadios();
                    f.debug("Unchecking other radios", e), e.removeClass(g.checked)
                }, toggle: function () {
                    return f.can.change() ? void (f.is.indeterminate() || f.is.unchecked() ? (f.debug("Currently unchecked"), f.check()) : f.is.checked() && f.can.uncheck() && (f.debug("Currently checked"), f.uncheck())) : void (f.is.radio() || f.debug("Checkbox is read-only or disabled, ignoring toggle"))
                }, setting: function (t, n) {
                    if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t); else {
                        if (n === i) return m[t];
                        m[t] = n
                    }
                }, internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, f, t); else {
                        if (n === i) return f[t];
                        f[t] = n
                    }
                }, debug: function () {
                    m.debug && (m.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), f.debug.apply(console, arguments)))
                }, verbose: function () {
                    m.verbose && m.debug && (m.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), f.verbose.apply(console, arguments)))
                }, error: function () {
                    f.error = Function.prototype.bind.call(console.error, console, m.name + ":"), f.error.apply(console, arguments)
                }, performance: {
                    log: function (e) {
                        var t, n, i;
                        m.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: D,
                            "Execution Time": n
                        })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500)
                    }, display: function () {
                        var t = m.name + ":", n = 0;
                        s = !1, clearTimeout(f.performance.timer), e.each(c, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), c = []
                    }
                }, invoke: function (t, n, a) {
                    var r, s, c, l = A;
                    return n = n || d, a = D || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                        var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[a]) && n != r) l = l[a]; else {
                            if (l[a] !== i) return s = l[a], !1;
                            if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (f.error(v.method, t), !1);
                            l = l[o]
                        }
                    })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                }
            }, u ? (A === i && f.initialize(), f.invoke(l)) : (A !== i && A.invoke("destroy"), f.initialize())
        }), o !== i ? o : this
    }, e.fn.checkbox.settings = {
        name: "Checkbox",
        namespace: "checkbox",
        debug: !1,
        verbose: !0,
        performance: !0,
        uncheckable: "auto",
        fireOnInit: !1,
        onChange: function () {
        },
        beforeChecked: function () {
        },
        beforeUnchecked: function () {
        },
        beforeDeterminate: function () {
        },
        beforeIndeterminate: function () {
        },
        onChecked: function () {
        },
        onUnchecked: function () {
        },
        onDeterminate: function () {
        },
        onIndeterminate: function () {
        },
        onEnabled: function () {
        },
        onDisabled: function () {
        },
        className: {
            checked: "checked",
            indeterminate: "indeterminate",
            disabled: "disabled",
            hidden: "hidden",
            radio: "radio",
            readOnly: "read-only"
        },
        error: {method: "The method you called is not defined"},
        selector: {
            checkbox: ".ui.checkbox",
            label: "label, .box",
            input: 'input[type="checkbox"], input[type="radio"]',
            link: "a[href]"
        }
    }
}(jQuery, window, document), function (e, t, n, i) {
    "use strict";
    e.fn.dimmer = function (t) {
        var o, a = e(this), r = (new Date).getTime(), s = [], c = arguments[0], l = "string" == typeof c,
            u = [].slice.call(arguments, 1);
        return a.each(function () {
            var d, f, m,
                g = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.dimmer.settings, t) : e.extend({}, e.fn.dimmer.settings),
                p = g.selector, h = g.namespace, v = g.className, b = g.error, y = "." + h, x = "module-" + h,
                C = a.selector || "", w = "ontouchstart" in n.documentElement ? "touchstart" : "click", k = e(this),
                T = this, S = k.data(x);
            m = {
                preinitialize: function () {
                    m.is.dimmer() ? (f = k.parent(), d = k) : (f = k, d = m.has.dimmer() ? g.dimmerName ? f.find(p.dimmer).filter("." + g.dimmerName) : f.find(p.dimmer) : m.create())
                }, initialize: function () {
                    m.debug("Initializing dimmer", g), m.bind.events(), m.set.dimmable(), m.instantiate()
                }, instantiate: function () {
                    m.verbose("Storing instance of module", m), S = m, k.data(x, S)
                }, destroy: function () {
                    m.verbose("Destroying previous module", d), m.unbind.events(), m.remove.variation(), f.off(y)
                }, bind: {
                    events: function () {
                        "hover" == g.on ? f.on("mouseenter" + y, m.show).on("mouseleave" + y, m.hide) : "click" == g.on && f.on(w + y, m.toggle), m.is.page() && (m.debug("Setting as a page dimmer", f), m.set.pageDimmer()), m.is.closable() && (m.verbose("Adding dimmer close event", d), f.on(w + y, p.dimmer, m.event.click))
                    }
                }, unbind: {
                    events: function () {
                        k.removeData(x)
                    }
                }, event: {
                    click: function (t) {
                        m.verbose("Determining if event occured on dimmer", t), (0 === d.find(t.target).length || e(t.target).is(p.content)) && (m.hide(), t.stopImmediatePropagation())
                    }
                }, addContent: function (t) {
                    var n = e(t);
                    m.debug("Add content to dimmer", n), n.parent()[0] !== d[0] && n.detach().appendTo(d)
                }, create: function () {
                    var t = e(g.template.dimmer());
                    return g.variation && (m.debug("Creating dimmer with variation", g.variation), t.addClass(g.variation)), g.dimmerName && (m.debug("Creating named dimmer", g.dimmerName), t.addClass(g.dimmerName)), t.appendTo(f), t
                }, show: function (t) {
                    t = e.isFunction(t) ? t : function () {
                    }, m.debug("Showing dimmer", d, g), m.is.dimmed() && !m.is.animating() || !m.is.enabled() ? m.debug("Dimmer is already shown or disabled") : (m.animate.show(t), g.onShow.call(T), g.onChange.call(T))
                }, hide: function (t) {
                    t = e.isFunction(t) ? t : function () {
                    }, m.is.dimmed() || m.is.animating() ? (m.debug("Hiding dimmer", d), m.animate.hide(t), g.onHide.call(T), g.onChange.call(T)) : m.debug("Dimmer is not visible")
                }, toggle: function () {
                    m.verbose("Toggling dimmer visibility", d), m.is.dimmed() ? m.hide() : m.show()
                }, animate: {
                    show: function (t) {
                        t = e.isFunction(t) ? t : function () {
                        }, g.useCSS && e.fn.transition !== i && d.transition("is supported") ? ("auto" !== g.opacity && m.set.opacity(), d.transition({
                            animation: g.transition + " in",
                            queue: !1,
                            duration: m.get.duration(),
                            useFailSafe: !0,
                            onStart: function () {
                                m.set.dimmed()
                            },
                            onComplete: function () {
                                m.set.active(), t()
                            }
                        })) : (m.verbose("Showing dimmer animation with javascript"), m.set.dimmed(), "auto" == g.opacity && (g.opacity = .8), d.stop().css({
                            opacity: 0,
                            width: "100%",
                            height: "100%"
                        }).fadeTo(m.get.duration(), g.opacity, function () {
                            d.removeAttr("style"), m.set.active(), t()
                        }))
                    }, hide: function (t) {
                        t = e.isFunction(t) ? t : function () {
                        }, g.useCSS && e.fn.transition !== i && d.transition("is supported") ? (m.verbose("Hiding dimmer with css"), d.transition({
                            animation: g.transition + " out",
                            queue: !1,
                            duration: m.get.duration(),
                            useFailSafe: !0,
                            onStart: function () {
                                m.remove.dimmed()
                            },
                            onComplete: function () {
                                m.remove.active(), t()
                            }
                        })) : (m.verbose("Hiding dimmer with javascript"), m.remove.dimmed(), d.stop().fadeOut(m.get.duration(), function () {
                            m.remove.active(), d.removeAttr("style"), t()
                        }))
                    }
                }, get: {
                    dimmer: function () {
                        return d
                    }, duration: function () {
                        return "object" == typeof g.duration ? m.is.active() ? g.duration.hide : g.duration.show : g.duration
                    }
                }, has: {
                    dimmer: function () {
                        return g.dimmerName ? k.find(p.dimmer).filter("." + g.dimmerName).length > 0 : k.find(p.dimmer).length > 0
                    }
                }, is: {
                    active: function () {
                        return d.hasClass(v.active)
                    }, animating: function () {
                        return d.is(":animated") || d.hasClass(v.animating)
                    }, closable: function () {
                        return "auto" == g.closable ? "hover" == g.on ? !1 : !0 : g.closable
                    }, dimmer: function () {
                        return k.hasClass(v.dimmer)
                    }, dimmable: function () {
                        return k.hasClass(v.dimmable)
                    }, dimmed: function () {
                        return f.hasClass(v.dimmed);
                    }, disabled: function () {
                        return f.hasClass(v.disabled)
                    }, enabled: function () {
                        return !m.is.disabled()
                    }, page: function () {
                        return f.is("body")
                    }, pageDimmer: function () {
                        return d.hasClass(v.pageDimmer)
                    }
                }, can: {
                    show: function () {
                        return !d.hasClass(v.disabled)
                    }
                }, set: {
                    opacity: function (e) {
                        var t = d.css("background-color"), n = t.split(","), i = n && 4 == n.length;
                        e = 0 === g.opacity ? 0 : g.opacity || e, i ? (n[3] = e + ")", t = n.join(",")) : t = "rgba(0, 0, 0, " + e + ")", m.debug("Setting opacity to", e), d.css("background-color", t)
                    }, active: function () {
                        d.addClass(v.active)
                    }, dimmable: function () {
                        f.addClass(v.dimmable)
                    }, dimmed: function () {
                        f.addClass(v.dimmed)
                    }, pageDimmer: function () {
                        d.addClass(v.pageDimmer)
                    }, disabled: function () {
                        d.addClass(v.disabled)
                    }, variation: function (e) {
                        e = e || g.variation, e && d.addClass(e)
                    }
                }, remove: {
                    active: function () {
                        d.removeClass(v.active)
                    }, dimmed: function () {
                        f.removeClass(v.dimmed)
                    }, disabled: function () {
                        d.removeClass(v.disabled)
                    }, variation: function (e) {
                        e = e || g.variation, e && d.removeClass(e)
                    }
                }, setting: function (t, n) {
                    if (m.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, g, t); else {
                        if (n === i) return g[t];
                        g[t] = n
                    }
                }, internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, m, t); else {
                        if (n === i) return m[t];
                        m[t] = n
                    }
                }, debug: function () {
                    g.debug && (g.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), m.debug.apply(console, arguments)))
                }, verbose: function () {
                    g.verbose && g.debug && (g.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), m.verbose.apply(console, arguments)))
                }, error: function () {
                    m.error = Function.prototype.bind.call(console.error, console, g.name + ":"), m.error.apply(console, arguments)
                }, performance: {
                    log: function (e) {
                        var t, n, i;
                        g.performance && (t = (new Date).getTime(), i = r || t, n = t - i, r = t, s.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: T,
                            "Execution Time": n
                        })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 500)
                    }, display: function () {
                        var t = g.name + ":", n = 0;
                        r = !1, clearTimeout(m.performance.timer), e.each(s, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", C && (t += " '" + C + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), s = []
                    }
                }, invoke: function (t, n, a) {
                    var r, s, c, l = S;
                    return n = n || u, a = T || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                        var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[a]) && n != r) l = l[a]; else {
                            if (l[a] !== i) return s = l[a], !1;
                            if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (m.error(b.method, t), !1);
                            l = l[o]
                        }
                    })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                }
            }, m.preinitialize(), l ? (S === i && m.initialize(), m.invoke(c)) : (S !== i && S.invoke("destroy"), m.initialize())
        }), o !== i ? o : this
    }, e.fn.dimmer.settings = {
        name: "Dimmer",
        namespace: "dimmer",
        debug: !1,
        verbose: !1,
        performance: !0,
        dimmerName: !1,
        variation: !1,
        closable: "auto",
        useCSS: !0,
        transition: "fade",
        on: !1,
        opacity: "auto",
        duration: {show: 500, hide: 500},
        onChange: function () {
        },
        onShow: function () {
        },
        onHide: function () {
        },
        error: {method: "The method you called is not defined."},
        className: {
            active: "active",
            animating: "animating",
            dimmable: "dimmable",
            dimmed: "dimmed",
            dimmer: "dimmer",
            disabled: "disabled",
            hide: "hide",
            pageDimmer: "page",
            show: "show"
        },
        selector: {dimmer: "> .ui.dimmer", content: ".ui.dimmer > .content, .ui.dimmer > .content > .center"},
        template: {
            dimmer: function () {
                return e("<div />").attr("class", "ui dimmer")
            }
        }
    }
}(jQuery, window, document), function (e, t, n, i) {
    "use strict";
    e.fn.dropdown = function (o) {
        var a, r = e(this), s = e(n), c = r.selector || "", l = "ontouchstart" in n.documentElement,
            u = (new Date).getTime(), d = [], f = arguments[0], m = "string" == typeof f,
            g = [].slice.call(arguments, 1);
        return r.each(function (p) {
            var h, v, b, y, x, C, w,
                k = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.dropdown.settings, o) : e.extend({}, e.fn.dropdown.settings),
                T = k.className, S = k.message, A = k.fields, D = k.metadata, R = k.namespace, E = k.regExp,
                P = k.selector, F = k.error, O = k.templates, q = "." + R, j = "module-" + R, I = e(this),
                z = e(k.context), N = I.find(P.text), M = I.find(P.search), L = I.find(P.input), V = I.find(P.icon),
                H = I.prev().find(P.text).length > 0 ? I.prev().find(P.text) : I.prev(), U = I.children(P.menu),
                W = U.find(P.item), B = !1, Y = !1, Q = !1, X = this, $ = I.data(j);
            w = {
                initialize: function () {
                    w.debug("Initializing dropdown", k), w.is.alreadySetup() ? w.setup.reference() : (w.setup.layout(), w.refreshData(), w.save.defaults(), w.restore.selected(), w.create.id(), w.bind.events(), w.observeChanges(), w.instantiate())
                }, instantiate: function () {
                    w.verbose("Storing instance of dropdown", w), $ = w, I.data(j, w)
                }, destroy: function () {
                    w.verbose("Destroying previous dropdown", I), w.remove.tabbable(), I.off(q).removeData(j), U.off(q), s.off(b), x && x.disconnect(), C && C.disconnect()
                }, observeChanges: function () {
                    "MutationObserver" in t && (x = new MutationObserver(function (e) {
                        w.debug("<select> modified, recreating menu"), w.setup.select()
                    }), C = new MutationObserver(function (e) {
                        w.debug("Menu modified, updating selector cache"), w.refresh()
                    }), w.has.input() && x.observe(L[0], {
                        childList: !0,
                        subtree: !0
                    }), w.has.menu() && C.observe(U[0], {
                        childList: !0,
                        subtree: !0
                    }), w.debug("Setting up mutation observer", x, C))
                }, create: {
                    id: function () {
                        y = (Math.random().toString(16) + "000000000").substr(2, 8), b = "." + y, w.verbose("Creating unique id for element", y)
                    }, userChoice: function (t) {
                        var n, o, a;
                        return (t = t || w.get.userValues()) ? (t = e.isArray(t) ? t : [t], e.each(t, function (t, r) {
                            w.get.item(r) === !1 && (a = k.templates.addition(w.add.variables(S.addResult, r)), o = e("<div />").html(a).attr("data-" + D.value, r).attr("data-" + D.text, r).addClass(T.addition).addClass(T.item), n = n === i ? o : n.add(o), w.verbose("Creating user choices for value", r, o))
                        }), n) : !1
                    }, userLabels: function (t) {
                        var n = w.get.userValues();
                        n && (w.debug("Adding user labels", n), e.each(n, function (e, t) {
                            w.verbose("Adding custom user value"), w.add.label(t, t)
                        }))
                    }, menu: function () {
                        U = e("<div />").addClass(T.menu).appendTo(I)
                    }
                }, search: function (e) {
                    e = e !== i ? e : w.get.query(), w.verbose("Searching for query", e), w.filter(e)
                }, select: {
                    firstUnfiltered: function () {
                        w.verbose("Selecting first non-filtered element"), w.remove.selectedItem(), W.not(P.unselectable).eq(0).addClass(T.selected)
                    }, nextAvailable: function (e) {
                        e = e.eq(0);
                        var t = e.nextAll(P.item).not(P.unselectable).eq(0),
                            n = e.prevAll(P.item).not(P.unselectable).eq(0), i = t.length > 0;
                        i ? (w.verbose("Moving selection to", t), t.addClass(T.selected)) : (w.verbose("Moving selection to", n), n.addClass(T.selected))
                    }
                }, setup: {
                    api: function () {
                        var e = {debug: k.debug, on: !1};
                        w.verbose("First request, initializing API"), I.api(e)
                    }, layout: function () {
                        I.is("select") && (w.setup.select(), w.setup.returnedObject()), w.has.menu() || w.create.menu(), w.is.search() && !w.has.search() && (w.verbose("Adding search input"), M = e("<input />").addClass(T.search).insertBefore(N)), k.allowTab && w.set.tabbable()
                    }, select: function () {
                        var t = w.get.selectValues();
                        w.debug("Dropdown initialized on a select", t), I.is("select") && (L = I), L.parent(P.dropdown).length > 0 ? (w.debug("UI dropdown already exists. Creating dropdown menu only"), I = L.closest(P.dropdown), w.has.menu() || w.create.menu(), U = I.children(P.menu), w.setup.menu(t)) : (w.debug("Creating entire dropdown from select"), I = e("<div />").attr("class", L.attr("class")).addClass(T.selection).addClass(T.dropdown).html(O.dropdown(t)).insertBefore(L), L.hasClass(T.multiple) && L.prop("multiple") === !1 && (w.error(F.missingMultiple), L.prop("multiple", !0)), L.is("[multiple]") && w.set.multiple(), L.prop("disabled") && (w.debug("Disabling dropdown"), I.addClass(T.disabled)), L.removeAttr("class").detach().prependTo(I)), w.refresh()
                    }, menu: function (e) {
                        U.html(O.menu(e, A)), W = U.find(P.item)
                    }, reference: function () {
                        w.debug("Dropdown behavior was called on select, replacing with closest dropdown"), I = I.parent(P.dropdown), w.refresh(), w.setup.returnedObject(), m && ($ = w, w.invoke(f))
                    }, returnedObject: function () {
                        var e = r.slice(0, p), t = r.slice(p + 1);
                        r = e.add(I).add(t)
                    }
                }, refresh: function () {
                    w.refreshSelectors(), w.refreshData()
                }, refreshSelectors: function () {
                    w.verbose("Refreshing selector cache"), N = I.find(P.text), M = I.find(P.search), L = I.find(P.input), V = I.find(P.icon), H = I.prev().find(P.text).length > 0 ? I.prev().find(P.text) : I.prev(), U = I.children(P.menu), W = U.find(P.item)
                }, refreshData: function () {
                    w.verbose("Refreshing cached metadata"), W.removeData(D.text).removeData(D.value), I.removeData(D.defaultText).removeData(D.defaultValue).removeData(D.placeholderText)
                }, toggle: function () {
                    w.verbose("Toggling menu visibility"), w.is.active() ? w.hide() : w.show()
                }, show: function (t) {
                    if (t = e.isFunction(t) ? t : function () {
                    }, w.can.show() && !w.is.active()) {
                        if (w.debug("Showing dropdown"), w.is.multiple() && !w.has.search() && w.is.allFiltered()) return !0;
                        w.has.message() && !w.has.maxSelections() && w.remove.message(), k.onShow.call(X) !== !1 && w.animate.show(function () {
                            w.can.click() && w.bind.intent(), w.set.visible(), t.call(X)
                        })
                    }
                }, hide: function (t) {
                    t = e.isFunction(t) ? t : function () {
                    }, w.is.active() && (w.debug("Hiding dropdown"), k.onHide.call(X) !== !1 && w.animate.hide(function () {
                        w.remove.visible(), t.call(X)
                    }))
                }, hideOthers: function () {
                    w.verbose("Finding other dropdowns to hide"), r.not(I).has(P.menu + "." + T.visible).dropdown("hide")
                }, hideMenu: function () {
                    w.verbose("Hiding menu  instantaneously"), w.remove.active(), w.remove.visible(), U.transition("hide")
                }, hideSubMenus: function () {
                    var e = U.children(P.item).find(P.menu);
                    w.verbose("Hiding sub menus", e), e.transition("hide")
                }, bind: {
                    events: function () {
                        l && w.bind.touchEvents(), w.bind.keyboardEvents(), w.bind.inputEvents(), w.bind.mouseEvents()
                    }, touchEvents: function () {
                        w.debug("Touch device detected binding additional touch events"), w.is.searchSelection() || w.is.single() && I.on("touchstart" + q, w.event.test.toggle), U.on("touchstart" + q, P.item, w.event.item.mouseenter)
                    }, keyboardEvents: function () {
                        w.verbose("Binding keyboard events"), I.on("keydown" + q, w.event.keydown), w.has.search() && I.on(w.get.inputEvent() + q, P.search, w.event.input), w.is.multiple() && s.on("keydown" + b, w.event.document.keydown)
                    }, inputEvents: function () {
                        w.verbose("Binding input change events"), I.on("change" + q, P.input, w.event.change)
                    }, mouseEvents: function () {
                        w.verbose("Binding mouse events"), w.is.multiple() && I.on("click" + q, P.label, w.event.label.click).on("click" + q, P.remove, w.event.remove.click), w.is.searchSelection() ? (I.on("mousedown" + q, P.menu, w.event.menu.mousedown).on("mouseup" + q, P.menu, w.event.menu.mouseup).on("click" + q, P.icon, w.event.icon.click).on("click" + q, P.search, w.show).on("focus" + q, P.search, w.event.search.focus).on("blur" + q, P.search, w.event.search.blur).on("click" + q, P.text, w.event.text.focus), w.is.multiple() && I.on("click" + q, w.event.click)) : ("click" == k.on ? I.on("click" + q, P.icon, w.event.icon.click).on("click" + q, w.event.test.toggle) : "hover" == k.on ? I.on("mouseenter" + q, w.delay.show).on("mouseleave" + q, w.delay.hide) : I.on(k.on + q, w.toggle), I.on("mousedown" + q, w.event.mousedown).on("mouseup" + q, w.event.mouseup).on("focus" + q, w.event.focus).on("blur" + q, w.event.blur)), U.on("mouseenter" + q, P.item, w.event.item.mouseenter).on("mouseleave" + q, P.item, w.event.item.mouseleave).on("click" + q, P.item, w.event.item.click)
                    }, intent: function () {
                        w.verbose("Binding hide intent event to document"), l && s.on("touchstart" + b, w.event.test.touch).on("touchmove" + b, w.event.test.touch), s.on("click" + b, w.event.test.hide)
                    }
                }, unbind: {
                    intent: function () {
                        w.verbose("Removing hide intent event from document"), l && s.off("touchstart" + b).off("touchmove" + b), s.off("click" + b)
                    }
                }, filter: function (e) {
                    var t = e !== i ? e : w.get.query(), n = function () {
                        w.is.multiple() && w.filterActive(), w.select.firstUnfiltered(), w.has.allResultsFiltered() ? k.onNoResults.call(X, t) ? k.allowAdditions || (w.verbose("All items filtered, showing message", t), w.add.message(S.noResults)) : (w.verbose("All items filtered, hiding dropdown", t), w.hideMenu()) : w.remove.message(), k.allowAdditions && w.add.userSuggestion(e), w.is.searchSelection() && w.can.show() && w.is.focusedOnSearch() && w.show()
                    };
                    k.useLabels && w.has.maxSelections() || (k.apiSettings ? w.can.useAPI() ? w.queryRemote(t, function () {
                        n()
                    }) : w.error(F.noAPI) : (w.filterItems(t), n()))
                }, queryRemote: function (t, n) {
                    var i = {
                        errorDuration: !1, throttle: k.throttle, urlData: {query: t}, onError: function () {
                            w.add.message(S.serverError), n()
                        }, onFailure: function () {
                            w.add.message(S.serverError), n()
                        }, onSuccess: function (e) {
                            w.remove.message(), w.setup.menu({values: e.results}), n()
                        }
                    };
                    I.api("get request") || w.setup.api(), i = e.extend(!0, {}, i, k.apiSettings), I.api("setting", i).api("query")
                }, filterItems: function (t) {
                    var n = t !== i ? t : w.get.query(), o = null, a = w.escape.regExp(n),
                        r = new RegExp("^" + a, "igm");
                    w.has.query() && (o = [], w.verbose("Searching for matching values", n), W.each(function () {
                        var t, i, a = e(this);
                        if ("both" == k.match || "text" == k.match) {
                            if (t = String(w.get.choiceText(a, !1)), -1 !== t.search(r)) return o.push(this), !0;
                            if (k.fullTextSearch && w.fuzzySearch(n, t)) return o.push(this), !0
                        }
                        if ("both" == k.match || "value" == k.match) {
                            if (i = String(w.get.choiceValue(a, t)), -1 !== i.search(r)) return o.push(this), !0;
                            if (k.fullTextSearch && w.fuzzySearch(n, i)) return o.push(this), !0
                        }
                    })), w.debug("Showing only matched items", n), w.remove.filteredItem(), o && W.not(o).addClass(T.filtered)
                }, fuzzySearch: function (e, t) {
                    var n = t.length, i = e.length;
                    if (e = e.toLowerCase(), t = t.toLowerCase(), i > n) return !1;
                    if (i === n) return e === t;
                    e:for (var o = 0, a = 0; i > o; o++) {
                        for (var r = e.charCodeAt(o); n > a;) if (t.charCodeAt(a++) === r) continue e;
                        return !1
                    }
                    return !0
                }, filterActive: function () {
                    k.useLabels && W.filter("." + T.active).addClass(T.filtered)
                }, focusSearch: function () {
                    w.is.search() && !w.is.focusedOnSearch() && M[0].focus()
                }, forceSelection: function () {
                    var e = W.not(T.filtered).filter("." + T.selected).eq(0),
                        t = W.not(T.filtered).filter("." + T.active).eq(0), n = e.length > 0 ? e : t, i = n.size() > 0;
                    i && w.has.query() ? (w.debug("Forcing partial selection to selected item", n), w.event.item.click.call(n)) : w.hide()
                }, event: {
                    change: function () {
                        Q || (w.debug("Input changed, updating selection"), w.set.selected())
                    }, focus: function () {
                        k.showOnFocus && !B && w.is.hidden() && !v && w.show()
                    }, click: function (t) {
                        var n = e(t.target);
                        n.is(I) && !w.is.focusedOnSearch() && w.focusSearch()
                    }, blur: function (e) {
                        v = n.activeElement === this, B || v || (w.remove.activeLabel(), w.hide())
                    }, mousedown: function () {
                        B = !0
                    }, mouseup: function () {
                        B = !1
                    }, search: {
                        focus: function () {
                            B = !0, w.is.multiple() && w.remove.activeLabel(), k.showOnFocus && w.show()
                        }, blur: function (e) {
                            v = n.activeElement === this, Y || v ? v && k.forceSelection && w.forceSelection() : w.is.multiple() ? (w.remove.activeLabel(), w.hide()) : k.forceSelection ? w.forceSelection() : w.hide()
                        }
                    }, icon: {
                        click: function (e) {
                            w.toggle(), e.stopPropagation()
                        }
                    }, text: {
                        focus: function (e) {
                            B = !0, w.focusSearch()
                        }
                    }, input: function (e) {
                        (w.is.multiple() || w.is.searchSelection()) && w.set.filtered(), clearTimeout(w.timer), w.timer = setTimeout(w.search, k.delay.search)
                    }, label: {
                        click: function (t) {
                            var n = e(this), i = I.find(P.label), o = i.filter("." + T.active),
                                a = n.nextAll("." + T.active), r = n.prevAll("." + T.active),
                                s = a.length > 0 ? n.nextUntil(a).add(o).add(n) : n.prevUntil(r).add(o).add(n);
                            t.shiftKey ? (o.removeClass(T.active), s.addClass(T.active)) : t.ctrlKey ? n.toggleClass(T.active) : (o.removeClass(T.active), n.addClass(T.active)), k.onLabelSelect.apply(this, i.filter("." + T.active))
                        }
                    }, remove: {
                        click: function () {
                            var t = e(this).parent();
                            t.hasClass(T.active) ? w.remove.activeLabels() : w.remove.activeLabels(t)
                        }
                    }, test: {
                        toggle: function (e) {
                            var t = w.is.multiple() ? w.show : w.toggle;
                            w.determine.eventOnElement(e, t) && e.preventDefault()
                        }, touch: function (e) {
                            w.determine.eventOnElement(e, function () {
                                "touchstart" == e.type ? w.timer = setTimeout(function () {
                                    w.hide()
                                }, k.delay.touch) : "touchmove" == e.type && clearTimeout(w.timer)
                            }), e.stopPropagation()
                        }, hide: function (e) {
                            w.determine.eventInModule(e, w.hide)
                        }
                    }, menu: {
                        mousedown: function () {
                            Y = !0
                        }, mouseup: function () {
                            Y = !1
                        }
                    }, item: {
                        mouseenter: function (t) {
                            var n = e(this).children(P.menu), i = e(this).siblings(P.item).children(P.menu);
                            n.length > 0 && (clearTimeout(w.itemTimer), w.itemTimer = setTimeout(function () {
                                w.verbose("Showing sub-menu", n), e.each(i, function () {
                                    w.animate.hide(!1, e(this))
                                }), w.animate.show(!1, n)
                            }, k.delay.show), t.preventDefault())
                        }, mouseleave: function (t) {
                            var n = e(this).children(P.menu);
                            n.length > 0 && (clearTimeout(w.itemTimer), w.itemTimer = setTimeout(function () {
                                w.verbose("Hiding sub-menu", n), w.animate.hide(!1, n)
                            }, k.delay.hide))
                        }, touchend: function () {
                        }, click: function (t) {
                            var n = e(this), i = e(t ? t.target : ""), o = n.find(P.menu), a = w.get.choiceText(n),
                                r = w.get.choiceValue(n, a), s = o.length > 0, c = o.find(i).length > 0;
                            c || s && !k.allowCategorySelection || (k.useLabels || (w.remove.filteredItem(), w.remove.searchTerm(), w.set.scrollPosition(n)), w.determine.selectAction.call(this, a, r))
                        }
                    }, document: {
                        keydown: function (e) {
                            var t = e.which, n = w.get.shortcutKeys(), i = w.is.inObject(t, n);
                            if (i) {
                                var o = I.find(P.label), a = o.filter("." + T.active),
                                    r = (a.data(D.value), o.index(a)), s = o.length, c = a.length > 0, l = a.length > 1,
                                    u = 0 === r, d = r + 1 == s, f = w.is.searchSelection(), m = w.is.focusedOnSearch(),
                                    g = w.is.focused(), p = m && 0 === w.get.caretPosition();
                                if (f && !c && !m) return;
                                t == n.leftArrow ? !g && !p || c ? c && (e.shiftKey ? w.verbose("Adding previous label to selection") : (w.verbose("Selecting previous label"), o.removeClass(T.active)), u && !l ? a.addClass(T.active) : a.prev(P.siblingLabel).addClass(T.active).end(), e.preventDefault()) : (w.verbose("Selecting previous label"), o.last().addClass(T.active)) : t == n.rightArrow ? (g && !c && o.first().addClass(T.active), c && (e.shiftKey ? w.verbose("Adding next label to selection") : (w.verbose("Selecting next label"), o.removeClass(T.active)), d ? f ? m ? o.removeClass(T.active) : w.focusSearch() : l ? a.next(P.siblingLabel).addClass(T.active) : a.addClass(T.active) : a.next(P.siblingLabel).addClass(T.active), e.preventDefault())) : t == n.deleteKey || t == n.backspace ? c ? (w.verbose("Removing active labels"), d && f && !m && w.focusSearch(), a.last().next(P.siblingLabel).addClass(T.active), w.remove.activeLabels(a), e.preventDefault()) : p && !c && t == n.backspace && (w.verbose("Removing last label on input backspace"), a = o.last().addClass(T.active), w.remove.activeLabels(a)) : a.removeClass(T.active)
                            }
                        }
                    }, keydown: function (e) {
                        var t = e.which, n = w.get.shortcutKeys(), i = w.is.inObject(t, n);
                        if (i) {
                            var o, a, r = W.not(P.unselectable).filter("." + T.selected).eq(0),
                                s = U.children("." + T.active).eq(0), c = r.length > 0 ? r : s,
                                l = c.length > 0 ? c.siblings(":not(." + T.filtered + ")").andSelf() : U.children(":not(." + T.filtered + ")"),
                                u = c.children(P.menu), d = c.closest(P.menu),
                                f = d.hasClass(T.visible) || d.hasClass(T.animating) || d.parent(P.menu).length > 0,
                                m = u.length > 0, g = c.length > 0, p = c.not(P.unselectable).length > 0,
                                h = t == n.delimiter && k.allowAdditions && w.is.multiple();
                            if (w.is.visible()) {
                                if ((t == n.enter || h) && (t == n.enter && g && m && !k.allowCategorySelection ? (w.verbose("Pressed enter on unselectable category, opening sub menu"), t = n.rightArrow) : p && (w.verbose("Selecting item from keyboard shortcut", c), w.event.item.click.call(c, e), w.is.searchSelection() && w.remove.searchTerm()), e.preventDefault()), t == n.leftArrow && (a = d[0] !== U[0], a && (w.verbose("Left key pressed, closing sub-menu"), w.animate.hide(!1, d), c.removeClass(T.selected), d.closest(P.item).addClass(T.selected), e.preventDefault())), t == n.rightArrow && m && (w.verbose("Right key pressed, opening sub-menu"), w.animate.show(!1, u), c.removeClass(T.selected), u.find(P.item).eq(0).addClass(T.selected), e.preventDefault()), t == n.upArrow) {
                                    if (o = g && f ? c.prevAll(P.item + ":not(" + P.unselectable + ")").eq(0) : W.eq(0), l.index(o) < 0) return w.verbose("Up key pressed but reached top of current menu"), void e.preventDefault();
                                    w.verbose("Up key pressed, changing active item"), c.removeClass(T.selected), o.addClass(T.selected), w.set.scrollPosition(o), e.preventDefault()
                                }
                                if (t == n.downArrow) {
                                    if (o = g && f ? o = c.nextAll(P.item + ":not(" + P.unselectable + ")").eq(0) : W.eq(0), 0 === o.length) return w.verbose("Down key pressed but reached bottom of current menu"), void e.preventDefault();
                                    w.verbose("Down key pressed, changing active item"), W.removeClass(T.selected), o.addClass(T.selected), w.set.scrollPosition(o), e.preventDefault()
                                }
                                t == n.pageUp && (w.scrollPage("up"), e.preventDefault()), t == n.pageDown && (w.scrollPage("down"), e.preventDefault()), t == n.escape && (w.verbose("Escape key pressed, closing dropdown"), w.hide())
                            } else h && e.preventDefault(), t == n.downArrow && (w.verbose("Down key pressed, showing dropdown"), w.show(), e.preventDefault())
                        } else w.is.selection() && !w.is.search() && w.set.selectedLetter(String.fromCharCode(t))
                    }
                }, determine: {
                    selectAction: function (t, n) {
                        w.verbose("Determining action", k.action), e.isFunction(w.action[k.action]) ? (w.verbose("Triggering preset action", k.action, t, n), w.action[k.action].call(this, t, n)) : e.isFunction(k.action) ? (w.verbose("Triggering user action", k.action, t, n), k.action.call(this, t, n)) : w.error(F.action, k.action)
                    }, eventInModule: function (t, i) {
                        var o = e(t.target), a = o.closest(n.documentElement).length > 0, r = o.closest(I).length > 0;
                        return i = e.isFunction(i) ? i : function () {
                        }, a && !r ? (w.verbose("Triggering event", i), i(), !0) : (w.verbose("Event occurred in dropdown, canceling callback"), !1)
                    }, eventOnElement: function (t, n) {
                        var i = e(t.target), o = i.closest(P.siblingLabel), a = 0 === I.find(o).length,
                            r = 0 === i.closest(U).length;
                        return n = e.isFunction(n) ? n : function () {
                        }, a && r ? (w.verbose("Triggering event", n), n(), !0) : (w.verbose("Event occurred in dropdown menu, canceling callback"), !1)
                    }
                }, action: {
                    nothing: function () {
                    }, activate: function (t, n) {
                        if (n = n !== i ? n : t, w.can.activate(e(this))) {
                            if (w.set.selected(n, e(this)), w.is.multiple() && !w.is.allFiltered()) return;
                            w.hideAndClear()
                        }
                    }, select: function (e, t) {
                        w.action.activate.call(this)
                    }, combo: function (t, n) {
                        n = n !== i ? n : t, w.set.selected(n, e(this)), w.hideAndClear()
                    }, hide: function (e, t) {
                        w.set.value(t), w.hideAndClear()
                    }
                }, get: {
                    id: function () {
                        return y
                    }, defaultText: function () {
                        return I.data(D.defaultText)
                    }, defaultValue: function () {
                        return I.data(D.defaultValue)
                    }, placeholderText: function () {
                        return I.data(D.placeholderText) || ""
                    }, text: function () {
                        return N.text()
                    }, query: function () {
                        return e.trim(M.val())
                    }, searchWidth: function (e) {
                        return e * k.glyphWidth + "em"
                    }, selectionCount: function () {
                        var t, n = w.get.values();
                        return t = w.is.multiple() ? e.isArray(n) ? n.length : 0 : "" !== w.get.value() ? 1 : 0
                    }, transition: function (e) {
                        return "auto" == k.transition ? w.is.upward(e) ? "slide up" : "slide down" : k.transition
                    }, userValues: function () {
                        var t = w.get.values();
                        return t ? (t = e.isArray(t) ? t : [t], e.grep(t, function (e) {
                            return w.get.item(e) === !1
                        })) : !1
                    }, uniqueArray: function (t) {
                        return e.grep(t, function (n, i) {
                            return e.inArray(n, t) === i
                        })
                    }, caretPosition: function () {
                        var e, t, i = M.get(0);
                        return "selectionStart" in i ? i.selectionStart : n.selection ? (i.focus(), e = n.selection.createRange(), t = e.text.length, e.moveStart("character", -i.value.length), e.text.length - t) : void 0
                    }, shortcutKeys: function () {
                        return {
                            backspace: 8,
                            delimiter: 188,
                            deleteKey: 46,
                            enter: 13,
                            escape: 27,
                            pageUp: 33,
                            pageDown: 34,
                            leftArrow: 37,
                            upArrow: 38,
                            rightArrow: 39,
                            downArrow: 40
                        }
                    }, value: function () {
                        var t = L.length > 0 ? L.val() : I.data(D.value);
                        return e.isArray(t) && 1 === t.length && "" === t[0] ? "" : t
                    }, values: function () {
                        var e = w.get.value();
                        return "" === e ? "" : !w.has.selectInput() && w.is.multiple() ? "string" == typeof e ? e.split(k.delimiter) : "" : e
                    }, remoteValues: function () {
                        var t = w.get.values(), n = !1;
                        return t && ("string" == typeof t && (t = [t]), n = {}, e.each(t, function (e, t) {
                            var i = w.read.remoteData(t);
                            w.verbose("Restoring value from session data", i, t), n[t] = i ? i : t
                        })), n
                    }, choiceText: function (t, n) {
                        return n = n !== i ? n : k.preserveHTML, t ? (t.find(P.menu).length > 0 && (w.verbose("Retreiving text of element with sub-menu"), t = t.clone(), t.find(P.menu).remove(), t.find(P.menuIcon).remove()), t.data(D.text) !== i ? t.data(D.text) : n ? e.trim(t.html()) : e.trim(t.text())) : void 0
                    }, choiceValue: function (t, n) {
                        return n = n || w.get.choiceText(t), t ? t.data(D.value) !== i ? String(t.data(D.value)) : "string" == typeof n ? e.trim(n.toLowerCase()) : String(n) : !1
                    }, inputEvent: function () {
                        var e = M[0];
                        return e ? e.oninput !== i ? "input" : e.onpropertychange !== i ? "propertychange" : "keyup" : !1
                    }, selectValues: function () {
                        var t = {};
                        return t.values = [], I.find("option").each(function () {
                            var n = e(this), o = n.html(), a = n.attr("disabled"),
                                r = n.attr("value") !== i ? n.attr("value") : o;
                            "auto" === k.placeholder && "" === r ? t.placeholder = o : t.values.push({
                                name: o,
                                value: r,
                                disabled: a
                            })
                        }), k.placeholder && "auto" !== k.placeholder && (w.debug("Setting placeholder value to", k.placeholder), t.placeholder = k.placeholder), k.sortSelect ? (t.values.sort(function (e, t) {
                            return e.name > t.name ? 1 : -1
                        }), w.debug("Retrieved and sorted values from select", t)) : w.debug("Retreived values from select", t), t
                    }, activeItem: function () {
                        return W.filter("." + T.active)
                    }, selectedItem: function () {
                        var e = W.not(P.unselectable).filter("." + T.selected);
                        return e.length > 0 ? e : W.eq(0)
                    }, itemWithAdditions: function (e) {
                        var t = w.get.item(e), n = w.create.userChoice(e), i = n && n.length > 0;
                        return i && (t = t.length > 0 ? t.add(n) : n), t
                    }, item: function (t, n) {
                        var o, a, r = !1;
                        return t = t !== i ? t : w.get.values() !== i ? w.get.values() : w.get.text(), o = a ? t.length > 0 : t !== i && null !== t, a = w.is.multiple() && e.isArray(t), n = "" === t || 0 === t ? !0 : n || !1, o && W.each(function () {
                            var o = e(this), s = w.get.choiceText(o), c = w.get.choiceValue(o, s);
                            if (null !== c && c !== i) if (a) (-1 !== e.inArray(String(c), t) || -1 !== e.inArray(s, t)) && (r = r ? r.add(o) : o); else if (n) {
                                if (w.verbose("Ambiguous dropdown value using strict type check", o, t), c === t || s === t) return r = o, !0
                            } else if (String(c) == String(t) || s == t) return w.verbose("Found select item by value", c, t), r = o, !0
                        }), r
                    }
                }, check: {
                    maxSelections: function (e) {
                        return k.maxSelections ? (e = e !== i ? e : w.get.selectionCount(), e >= k.maxSelections ? (w.debug("Maximum selection count reached"), k.useLabels && (W.addClass(T.filtered), w.add.message(S.maxSelections)), !0) : (w.verbose("No longer at maximum selection count"), w.remove.message(), w.remove.filteredItem(), w.is.searchSelection() && w.filterItems(), !1)) : !0
                    }
                }, restore: {
                    defaults: function () {
                        w.clear(), w.restore.defaultText(), w.restore.defaultValue()
                    }, defaultText: function () {
                        var e = w.get.defaultText(), t = w.get.placeholderText;
                        e === t ? (w.debug("Restoring default placeholder text", e), w.set.placeholderText(e)) : (w.debug("Restoring default text", e), w.set.text(e))
                    }, defaultValue: function () {
                        var e = w.get.defaultValue();
                        e !== i && (w.debug("Restoring default value", e), "" !== e ? (w.set.value(e), w.set.selected()) : (w.remove.activeItem(), w.remove.selectedItem()))
                    }, labels: function () {
                        k.allowAdditions && (k.useLabels || (w.error(F.labels), k.useLabels = !0), w.debug("Restoring selected values"), w.create.userLabels()), w.check.maxSelections()
                    }, selected: function () {
                        w.restore.values(), w.is.multiple() ? (w.debug("Restoring previously selected values and labels"), w.restore.labels()) : w.debug("Restoring previously selected values")
                    }, values: function () {
                        w.set.initialLoad(), k.apiSettings ? k.saveRemoteData ? w.restore.remoteValues() : w.clearValue() : w.set.selected(), w.remove.initialLoad()
                    }, remoteValues: function () {
                        var t = w.get.remoteValues();
                        w.debug("Recreating selected from session data", t), t && (w.is.single() ? e.each(t, function (e, t) {
                            w.set.text(t)
                        }) : e.each(t, function (e, t) {
                            w.add.label(e, t)
                        }))
                    }
                }, read: {
                    remoteData: function (e) {
                        var n;
                        return t.Storage === i ? void w.error(F.noStorage) : (n = sessionStorage.getItem(e), n !== i ? n : !1)
                    }
                }, save: {
                    defaults: function () {
                        w.save.defaultText(), w.save.placeholderText(), w.save.defaultValue()
                    }, defaultValue: function () {
                        var e = w.get.value();
                        w.verbose("Saving default value as", e), I.data(D.defaultValue, e)
                    }, defaultText: function () {
                        var e = w.get.text();
                        w.verbose("Saving default text as", e), I.data(D.defaultText, e)
                    }, placeholderText: function () {
                        var e;
                        k.placeholder !== !1 && N.hasClass(T.placeholder) && (e = w.get.text(), w.verbose("Saving placeholder text as", e), I.data(D.placeholderText, e))
                    }, remoteData: function (e, n) {
                        return t.Storage === i ? void w.error(F.noStorage) : (w.verbose("Saving remote data to session storage", n, e), void sessionStorage.setItem(n, e))
                    }
                }, clear: function () {
                    w.is.multiple() ? w.remove.labels() : (w.remove.activeItem(), w.remove.selectedItem()), w.set.placeholderText(), w.clearValue()
                }, clearValue: function () {
                    w.set.value("")
                }, scrollPage: function (e, t) {
                    var n, i, o, a = t || w.get.selectedItem(), r = a.closest(P.menu), s = r.outerHeight(),
                        c = r.scrollTop(), l = W.eq(0).outerHeight(), u = Math.floor(s / l),
                        d = (r.prop("scrollHeight"), "up" == e ? c - l * u : c + l * u), f = W.not(P.unselectable);
                    o = "up" == e ? f.index(a) - u : f.index(a) + u, n = "up" == e ? o >= 0 : o < f.length, i = n ? f.eq(o) : "up" == e ? f.first() : f.last(), i.length > 0 && (w.debug("Scrolling page", e, i), a.removeClass(T.selected), i.addClass(T.selected), r.scrollTop(d))
                }, set: {
                    filtered: function () {
                        var e = w.is.multiple(), t = w.is.searchSelection(), n = e && t, i = t ? w.get.query() : "",
                            o = "string" == typeof i && i.length > 0, a = w.get.searchWidth(i.length), r = "" !== i;
                        e && o && (w.verbose("Adjusting input width", a, k.glyphWidth), M.css("width", a)), o || n && r ? (w.verbose("Hiding placeholder text"), N.addClass(T.filtered)) : (!e || n && !r) && (w.verbose("Showing placeholder text"), N.removeClass(T.filtered))
                    }, loading: function () {
                        I.addClass(T.loading)
                    }, placeholderText: function (e) {
                        e = e || w.get.placeholderText(), w.debug("Setting placeholder text", e), w.set.text(e), N.addClass(T.placeholder)
                    }, tabbable: function () {
                        w.has.search() ? (w.debug("Added tabindex to searchable dropdown"), M.val("").attr("tabindex", 0), U.attr("tabindex", -1)) : (w.debug("Added tabindex to dropdown"), I.attr("tabindex") || (I.attr("tabindex", 0), U.attr("tabindex", -1)))
                    }, initialLoad: function () {
                        w.verbose("Setting initial load"), h = !0
                    }, activeItem: function (e) {
                        k.allowAdditions && e.filter(P.addition).length > 0 ? e.addClass(T.filtered) : e.addClass(T.active)
                    }, scrollPosition: function (e, t) {
                        var n, o, a, r, s, c, l, u, d, f = 5;
                        e = e || w.get.selectedItem(), n = e.closest(P.menu), o = e && e.length > 0, t = t !== i ? t : !1, e && n.length > 0 && o && (r = e.position().top, n.addClass(T.loading), c = n.scrollTop(), s = n.offset().top, r = e.offset().top, a = c - s + r, t || (l = n.height(), d = a + f > c + l, u = c > a - f), w.debug("Scrolling to active item", a), (t || u || d) && n.scrollTop(a), n.removeClass(T.loading))
                    }, text: function (e) {
                        "select" !== k.action && ("combo" == k.action ? (w.debug("Changing combo button text", e, H), k.preserveHTML ? H.html(e) : H.text(e)) : (e !== w.get.placeholderText() && N.removeClass(T.placeholder), w.debug("Changing text", e, N), N.removeClass(T.filtered), k.preserveHTML ? N.html(e) : N.text(e)))
                    }, selectedLetter: function (t) {
                        var n, i = W.filter("." + T.selected), o = i.length > 0 && w.has.firstLetter(i, t), a = !1;
                        o && (n = i.nextAll(W).eq(0), w.has.firstLetter(n, t) && (a = n)), a || W.each(function () {
                            return w.has.firstLetter(e(this), t) ? (a = e(this), !1) : void 0
                        }), a && (w.verbose("Scrolling to next value with letter", t), w.set.scrollPosition(a), i.removeClass(T.selected), a.addClass(T.selected))
                    }, direction: function (e) {
                        "auto" == k.direction ? w.is.onScreen(e) ? w.remove.upward(e) : w.set.upward(e) : "upward" == k.direction && w.set.upward(e)
                    }, upward: function (e) {
                        var t = e || I;
                        t.addClass(T.upward)
                    }, value: function (e, t, n) {
                        var o = L.length > 0, a = (!w.has.value(e), w.get.values()), r = e !== i ? String(e) : e;
                        if (o) {
                            if (r == a && (w.verbose("Skipping value update already same value", e, a), !w.is.initialLoad())) return;
                            w.is.single() && w.has.selectInput() && w.can.extendSelect() && (w.debug("Adding user option", e), w.add.optionValue(e)), w.debug("Updating input value", e, a), Q = !0, L.val(e), k.fireOnInit === !1 && w.is.initialLoad() ? w.debug("Input native change event ignored on initial load") : L.trigger("change"), Q = !1
                        } else w.verbose("Storing value in metadata", e, L), e !== a && I.data(D.value, r);
                        k.fireOnInit === !1 && w.is.initialLoad() ? w.verbose("No callback on initial load", k.onChange) : k.onChange.call(X, e, t, n)
                    }, active: function () {
                        I.addClass(T.active)
                    }, multiple: function () {
                        I.addClass(T.multiple)
                    }, visible: function () {
                        I.addClass(T.visible)
                    }, exactly: function (e, t) {
                        w.debug("Setting selected to exact values"), w.clear(), w.set.selected(e, t)
                    }, selected: function (t, n) {
                        var i = w.is.multiple();
                        n = k.allowAdditions ? n || w.get.itemWithAdditions(t) : n || w.get.item(t), n && (w.debug("Setting selected menu item to", n), w.is.single() ? (w.remove.activeItem(), w.remove.selectedItem()) : k.useLabels && w.remove.selectedItem(), n.each(function () {
                            var t = e(this), o = w.get.choiceText(t), a = w.get.choiceValue(t, o),
                                r = t.hasClass(T.filtered), s = t.hasClass(T.active), c = t.hasClass(T.addition),
                                l = i && 1 == n.length;
                            i ? !s || c ? (k.apiSettings && k.saveRemoteData && w.save.remoteData(o, a), k.useLabels ? (w.add.value(a, o, t), w.add.label(a, o, l), w.set.activeItem(t), w.filterActive(), w.select.nextAvailable(n)) : (w.add.value(a, o, t), w.set.text(w.add.variables(S.count)), w.set.activeItem(t))) : r || (w.debug("Selected active value, removing label"), w.remove.selected(a)) : (k.apiSettings && k.saveRemoteData && w.save.remoteData(o, a), w.set.text(o), w.set.value(a, o, t), t.addClass(T.active).addClass(T.selected))
                        }))
                    }
                }, add: {
                    label: function (t, n, i) {
                        var o, a = w.is.searchSelection() ? M : N;
                        return o = e("<a />").addClass(T.label).attr("data-value", t).html(O.label(t, n)), o = k.onLabelCreate.call(o, t, n), w.has.label(t) ? void w.debug("Label already exists, skipping", t) : (k.label.variation && o.addClass(k.label.variation),
                            void (i === !0 ? (w.debug("Animating in label", o), o.addClass(T.hidden).insertBefore(a).transition(k.label.transition, k.label.duration)) : (w.debug("Adding selection label", o), o.insertBefore(a))))
                    }, message: function (t) {
                        var n = U.children(P.message), i = k.templates.message(w.add.variables(t));
                        n.length > 0 ? n.html(i) : n = e("<div/>").html(i).addClass(T.message).appendTo(U)
                    }, optionValue: function (t) {
                        var n = L.find('option[value="' + t + '"]'), i = n.length > 0;
                        i || (x && (x.disconnect(), w.verbose("Temporarily disconnecting mutation observer", t)), w.is.single() && (w.verbose("Removing previous user addition"), L.find("option." + T.addition).remove()), e("<option/>").prop("value", t).addClass(T.addition).html(t).appendTo(L), w.verbose("Adding user addition as an <option>", t), x && x.observe(L[0], {
                            childList: !0,
                            subtree: !0
                        }))
                    }, userSuggestion: function (e) {
                        var t, n = U.children(P.addition), i = w.get.item(e), o = i && i.not(P.addition).length,
                            a = n.length > 0;
                        if (!k.useLabels || !w.has.maxSelections()) {
                            if ("" === e || o) return void n.remove();
                            W.removeClass(T.selected), a ? (t = k.templates.addition(w.add.variables(S.addResult, e)), n.html(t).attr("data-" + D.value, e).attr("data-" + D.text, e).removeClass(T.filtered).addClass(T.selected), w.verbose("Replacing user suggestion with new value", n)) : (n = w.create.userChoice(e), n.prependTo(U).addClass(T.selected), w.verbose("Adding item choice to menu corresponding with user choice addition", n))
                        }
                    }, variables: function (e, t) {
                        var n, i, o = -1 !== e.search("{count}"), a = -1 !== e.search("{maxCount}"),
                            r = -1 !== e.search("{term}");
                        return w.verbose("Adding templated variables to message", e), o && (n = w.get.selectionCount(), e = e.replace("{count}", n)), a && (n = w.get.selectionCount(), e = e.replace("{maxCount}", k.maxSelections)), r && (i = t || w.get.query(), e = e.replace("{term}", i)), e
                    }, value: function (t, n, i) {
                        var o, a = w.get.values();
                        return "" === t ? void w.debug("Cannot select blank values from multiselect") : (e.isArray(a) ? (o = a.concat([t]), o = w.get.uniqueArray(o)) : o = [t], w.has.selectInput() ? w.can.extendSelect() && (w.debug("Adding value to select", t, o, L), w.add.optionValue(t)) : (o = o.join(k.delimiter), w.debug("Setting hidden input to delimited value", o, L)), k.fireOnInit === !1 && w.is.initialLoad() ? w.verbose("Skipping onadd callback on initial load", k.onAdd) : k.onAdd.call(X, t, n, i), w.set.value(o, t, n, i), void w.check.maxSelections())
                    }
                }, remove: {
                    active: function () {
                        I.removeClass(T.active)
                    }, activeLabel: function () {
                        I.find(P.label).removeClass(T.active)
                    }, loading: function () {
                        I.removeClass(T.loading)
                    }, initialLoad: function () {
                        h = !1
                    }, upward: function (e) {
                        var t = e || I;
                        t.removeClass(T.upward)
                    }, visible: function () {
                        I.removeClass(T.visible)
                    }, activeItem: function () {
                        W.removeClass(T.active)
                    }, filteredItem: function () {
                        k.useLabels && w.has.maxSelections() || (k.useLabels && w.is.multiple() ? W.not("." + T.active).removeClass(T.filtered) : W.removeClass(T.filtered))
                    }, optionValue: function (e) {
                        var t = L.find('option[value="' + e + '"]'), n = t.length > 0;
                        n && t.hasClass(T.addition) && (x && (x.disconnect(), w.verbose("Temporarily disconnecting mutation observer", e)), t.remove(), w.verbose("Removing user addition as an <option>", e), x && x.observe(L[0], {
                            childList: !0,
                            subtree: !0
                        }))
                    }, message: function () {
                        U.children(P.message).remove()
                    }, searchTerm: function () {
                        w.verbose("Cleared search term"), M.val(""), w.set.filtered()
                    }, selected: function (t, n) {
                        return (n = k.allowAdditions ? n || w.get.itemWithAdditions(t) : n || w.get.item(t)) ? void n.each(function () {
                            var t = e(this), n = w.get.choiceText(t), i = w.get.choiceValue(t, n);
                            w.is.multiple() ? k.useLabels ? (w.remove.value(i, n, t), w.remove.label(i)) : (w.remove.value(i, n, t), 0 === w.get.selectionCount() ? w.set.placeholderText() : w.set.text(w.add.variables(S.count))) : w.remove.value(i, n, t), t.removeClass(T.filtered).removeClass(T.active), k.useLabels && t.removeClass(T.selected)
                        }) : !1
                    }, selectedItem: function () {
                        W.removeClass(T.selected)
                    }, value: function (e, t, n) {
                        var i, o = w.get.values();
                        w.has.selectInput() ? (w.verbose("Input is <select> removing selected option", e), i = w.remove.arrayValue(e, o), w.remove.optionValue(e)) : (w.verbose("Removing from delimited values", e), i = w.remove.arrayValue(e, o), i = i.join(k.delimiter)), k.fireOnInit === !1 && w.is.initialLoad() ? w.verbose("No callback on initial load", k.onRemove) : k.onRemove.call(X, e, t, n), w.set.value(i, t, n), w.check.maxSelections()
                    }, arrayValue: function (t, n) {
                        return e.isArray(n) || (n = [n]), n = e.grep(n, function (e) {
                            return t != e
                        }), w.verbose("Removed value from delimited string", t, n), n
                    }, label: function (e, t) {
                        var n = I.find(P.label), i = n.filter('[data-value="' + e + '"]');
                        w.verbose("Removing label", i), i.remove()
                    }, activeLabels: function (e) {
                        e = e || I.find(P.label).filter("." + T.active), w.verbose("Removing active label selections", e), w.remove.labels(e)
                    }, labels: function (t) {
                        t = t || I.find(P.label), w.verbose("Removing labels", t), t.each(function () {
                            var t = e(this).data(D.value), n = t !== i ? String(t) : t, o = w.is.userValue(n);
                            o ? (w.remove.value(n), w.remove.label(n)) : w.remove.selected(n)
                        })
                    }, tabbable: function () {
                        w.has.search() ? (w.debug("Searchable dropdown initialized"), M.attr("tabindex", "-1"), U.attr("tabindex", "-1")) : (w.debug("Simple selection dropdown initialized"), I.attr("tabindex", "-1"), U.attr("tabindex", "-1"))
                    }
                }, has: {
                    search: function () {
                        return M.length > 0
                    }, selectInput: function () {
                        return L.is("select")
                    }, firstLetter: function (e, t) {
                        var n, i;
                        return e && 0 !== e.length && "string" == typeof t ? (n = w.get.choiceText(e, !1), t = t.toLowerCase(), i = String(n).charAt(0).toLowerCase(), t == i) : !1
                    }, input: function () {
                        return L.length > 0
                    }, items: function () {
                        return W.length > 0
                    }, menu: function () {
                        return U.length > 0
                    }, message: function () {
                        return 0 !== U.children(P.message).length
                    }, label: function (e) {
                        var t = I.find(P.label);
                        return t.filter('[data-value="' + e + '"]').length > 0
                    }, maxSelections: function () {
                        return k.maxSelections && w.get.selectionCount() >= k.maxSelections
                    }, allResultsFiltered: function () {
                        return W.filter(P.unselectable).length === W.length
                    }, query: function () {
                        return "" !== w.get.query()
                    }, value: function (t) {
                        var n = w.get.values(), i = e.isArray(n) ? n && -1 !== e.inArray(t, n) : n == t;
                        return i ? !0 : !1
                    }
                }, is: {
                    active: function () {
                        return I.hasClass(T.active)
                    }, alreadySetup: function () {
                        return I.is("select") && I.parent(P.dropdown).length > 0 && 0 === I.prev().length
                    }, animating: function (e) {
                        return e ? e.transition && e.transition("is animating") : U.transition && U.transition("is animating")
                    }, disabled: function () {
                        return I.hasClass(T.disabled)
                    }, focused: function () {
                        return n.activeElement === I[0]
                    }, focusedOnSearch: function () {
                        return n.activeElement === M[0]
                    }, allFiltered: function () {
                        return (w.is.multiple() || w.has.search()) && !w.has.message() && w.has.allResultsFiltered()
                    }, hidden: function (e) {
                        return !w.is.visible(e)
                    }, initialLoad: function () {
                        return h
                    }, onScreen: function (e) {
                        var t, n = e || U, i = !0, o = {};
                        return n.addClass(T.loading), t = {
                            context: {scrollTop: z.scrollTop(), height: z.outerHeight()},
                            menu: {offset: n.offset(), height: n.outerHeight()}
                        }, o = {
                            above: t.context.scrollTop <= t.menu.offset.top - t.menu.height,
                            below: t.context.scrollTop + t.context.height >= t.menu.offset.top + t.menu.height
                        }, o.below ? (w.verbose("Dropdown can fit in context downward", o), i = !0) : o.below || o.above ? (w.verbose("Dropdown cannot fit below, opening upward", o), i = !1) : (w.verbose("Dropdown cannot fit in either direction, favoring downward", o), i = !0), n.removeClass(T.loading), i
                    }, inObject: function (t, n) {
                        var i = !1;
                        return e.each(n, function (e, n) {
                            return n == t ? (i = !0, !0) : void 0
                        }), i
                    }, multiple: function () {
                        return I.hasClass(T.multiple)
                    }, single: function () {
                        return !w.is.multiple()
                    }, selectMutation: function (t) {
                        var n = !1;
                        return e.each(t, function (t, i) {
                            return i.target && e(i.target).is("select") ? (n = !0, !0) : void 0
                        }), n
                    }, search: function () {
                        return I.hasClass(T.search)
                    }, searchSelection: function () {
                        return w.has.search() && 1 === M.parent(P.dropdown).length
                    }, selection: function () {
                        return I.hasClass(T.selection)
                    }, userValue: function (t) {
                        return -1 !== e.inArray(t, w.get.userValues())
                    }, upward: function (e) {
                        var t = e || I;
                        return t.hasClass(T.upward)
                    }, visible: function (e) {
                        return e ? e.hasClass(T.visible) : U.hasClass(T.visible)
                    }
                }, can: {
                    activate: function (e) {
                        return k.useLabels ? !0 : w.has.maxSelections() ? w.has.maxSelections() && e.hasClass(T.active) ? !0 : !1 : !0
                    }, click: function () {
                        return l || "click" == k.on
                    }, extendSelect: function () {
                        return k.allowAdditions || k.apiSettings
                    }, show: function () {
                        return !w.is.disabled() && (w.has.items() || w.has.message())
                    }, useAPI: function () {
                        return e.fn.api !== i
                    }
                }, animate: {
                    show: function (t, n) {
                        var o, a = n || U, r = n ? function () {
                        } : function () {
                            w.hideSubMenus(), w.hideOthers(), w.set.active()
                        };
                        t = e.isFunction(t) ? t : function () {
                        }, w.verbose("Doing menu show animation", a), w.set.direction(n), o = w.get.transition(n), w.is.selection() && w.set.scrollPosition(w.get.selectedItem(), !0), (w.is.hidden(a) || w.is.animating(a)) && ("none" == o ? (r(), a.transition("show"), t.call(X)) : e.fn.transition !== i && I.transition("is supported") ? a.transition({
                            animation: o + " in",
                            debug: k.debug,
                            verbose: k.verbose,
                            duration: k.duration,
                            queue: !0,
                            onStart: r,
                            onComplete: function () {
                                t.call(X)
                            }
                        }) : w.error(F.noTransition, o))
                    }, hide: function (t, n) {
                        var o = n || U, a = (n ? .9 * k.duration : k.duration, n ? function () {
                        } : function () {
                            w.can.click() && w.unbind.intent(), w.remove.active()
                        }), r = w.get.transition(n);
                        t = e.isFunction(t) ? t : function () {
                        }, (w.is.visible(o) || w.is.animating(o)) && (w.verbose("Doing menu hide animation", o), "none" == r ? (a(), o.transition("hide"), t.call(X)) : e.fn.transition !== i && I.transition("is supported") ? o.transition({
                            animation: r + " out",
                            duration: k.duration,
                            debug: k.debug,
                            verbose: k.verbose,
                            queue: !0,
                            onStart: a,
                            onComplete: function () {
                                "auto" == k.direction && w.remove.upward(n), t.call(X)
                            }
                        }) : w.error(F.transition))
                    }
                }, hideAndClear: function () {
                    w.remove.searchTerm(), w.has.maxSelections() || (w.has.search() ? w.hide(function () {
                        w.remove.filteredItem()
                    }) : w.hide())
                }, delay: {
                    show: function () {
                        w.verbose("Delaying show event to ensure user intent"), clearTimeout(w.timer), w.timer = setTimeout(w.show, k.delay.show)
                    }, hide: function () {
                        w.verbose("Delaying hide event to ensure user intent"), clearTimeout(w.timer), w.timer = setTimeout(w.hide, k.delay.hide)
                    }
                }, escape: {
                    regExp: function (e) {
                        return e = String(e), e.replace(E.escape, "\\$&")
                    }
                }, setting: function (t, n) {
                    if (w.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, k, t); else {
                        if (n === i) return k[t];
                        k[t] = n
                    }
                }, internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, w, t); else {
                        if (n === i) return w[t];
                        w[t] = n
                    }
                }, debug: function () {
                    k.debug && (k.performance ? w.performance.log(arguments) : (w.debug = Function.prototype.bind.call(console.info, console, k.name + ":"), w.debug.apply(console, arguments)))
                }, verbose: function () {
                    k.verbose && k.debug && (k.performance ? w.performance.log(arguments) : (w.verbose = Function.prototype.bind.call(console.info, console, k.name + ":"), w.verbose.apply(console, arguments)))
                }, error: function () {
                    w.error = Function.prototype.bind.call(console.error, console, k.name + ":"), w.error.apply(console, arguments)
                }, performance: {
                    log: function (e) {
                        var t, n, i;
                        k.performance && (t = (new Date).getTime(), i = u || t, n = t - i, u = t, d.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: X,
                            "Execution Time": n
                        })), clearTimeout(w.performance.timer), w.performance.timer = setTimeout(w.performance.display, 500)
                    }, display: function () {
                        var t = k.name + ":", n = 0;
                        u = !1, clearTimeout(w.performance.timer), e.each(d, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", c && (t += " '" + c + "'"), (console.group !== i || console.table !== i) && d.length > 0 && (console.groupCollapsed(t), console.table ? console.table(d) : e.each(d, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), d = []
                    }
                }, invoke: function (t, n, o) {
                    var r, s, c, l = $;
                    return n = n || g, o = X || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                        var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[a]) && n != r) l = l[a]; else {
                            if (l[a] !== i) return s = l[a], !1;
                            if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (w.error(F.method, t), !1);
                            l = l[o]
                        }
                    })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                }
            }, m ? ($ === i && w.initialize(), w.invoke(f)) : ($ !== i && $.invoke("destroy"), w.initialize())
        }), a !== i ? a : r
    }, e.fn.dropdown.settings = {
        debug: !1,
        verbose: !1,
        performance: !0,
        on: "click",
        action: "activate",
        apiSettings: !1,
        saveRemoteData: !0,
        throttle: 200,
        context: t,
        direction: "auto",
        keepOnScreen: !0,
        match: "both",
        fullTextSearch: !1,
        placeholder: "auto",
        preserveHTML: !0,
        sortSelect: !1,
        forceSelection: !0,
        allowAdditions: !1,
        maxSelections: !1,
        useLabels: !0,
        delimiter: ",",
        showOnFocus: !0,
        allowTab: !0,
        allowCategorySelection: !1,
        fireOnInit: !1,
        transition: "auto",
        duration: 200,
        glyphWidth: 1.0714,
        label: {transition: "scale", duration: 200, variation: !1},
        delay: {hide: 300, show: 200, search: 20, touch: 50},
        onChange: function (e, t, n) {
        },
        onAdd: function (e, t, n) {
        },
        onRemove: function (e, t, n) {
        },
        onLabelSelect: function (e) {
        },
        onLabelCreate: function (t, n) {
            return e(this)
        },
        onNoResults: function (e) {
            return !0
        },
        onShow: function () {
        },
        onHide: function () {
        },
        name: "Dropdown",
        namespace: "dropdown",
        message: {
            addResult: "Add <b>{term}</b>",
            count: "{count} selected",
            maxSelections: "Max {maxCount} selections",
            noResults: "No results found.",
            serverError: "There was an error contacting the server"
        },
        error: {
            action: "You called a dropdown action that was not defined",
            alreadySetup: "Once a select has been initialized behaviors must be called on the created ui dropdown",
            labels: "Allowing user additions currently requires the use of labels.",
            missingMultiple: "<select> requires multiple property to be set to correctly preserve multiple values",
            method: "The method you called is not defined.",
            noAPI: "The API module is required to load resources remotely",
            noStorage: "Saving remote data requires session storage",
            noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>"
        },
        regExp: {escape: /[-[\]{}()*+?.,\\^$|#\s]/g},
        metadata: {
            defaultText: "defaultText",
            defaultValue: "defaultValue",
            placeholderText: "placeholder",
            text: "text",
            value: "value"
        },
        fields: {values: "values", name: "name", value: "value"},
        selector: {
            addition: ".addition",
            dropdown: ".ui.dropdown",
            icon: "> .dropdown.icon",
            input: '> input[type="hidden"], > select',
            item: ".item",
            label: "> .label",
            remove: "> .label > .delete.icon",
            siblingLabel: ".label",
            menu: ".menu",
            message: ".message",
            menuIcon: ".dropdown.icon",
            search: "input.search, .menu > .search > input",
            text: "> .text:not(.icon)",
            unselectable: ".disabled, .filtered"
        },
        className: {
            active: "active",
            addition: "addition",
            animating: "animating",
            disabled: "disabled",
            dropdown: "ui dropdown",
            filtered: "filtered",
            hidden: "hidden transition",
            item: "item",
            label: "ui label",
            loading: "loading",
            menu: "menu",
            message: "message",
            multiple: "multiple",
            placeholder: "default",
            search: "search",
            selected: "selected",
            selection: "selection",
            upward: "upward",
            visible: "visible"
        }
    }, e.fn.dropdown.settings.templates = {
        dropdown: function (t) {
            var n = t.placeholder || !1, i = (t.values || {}, "");
            return i += '<i class="dropdown icon"></i>', i += t.placeholder ? '<div class="default text">' + n + "</div>" : '<div class="text"></div>', i += '<div class="menu">', e.each(t.values, function (e, t) {
                i += t.disabled ? '<div class="disabled item" data-value="' + t.value + '">' + t.name + "</div>" : '<div class="item" data-value="' + t.value + '">' + t.name + "</div>"
            }), i += "</div>"
        }, menu: function (t, n) {
            var i = (t.values || {}, "");
            return e.each(t[n.values], function (e, t) {
                i += '<div class="item" data-value="' + t[n.value] + '">' + t[n.name] + "</div>"
            }), i
        }, label: function (e, t) {
            return t + '<i class="delete icon"></i>'
        }, message: function (e) {
            return e
        }, addition: function (e) {
            return e
        }
    }
}(jQuery, window, document), function (e, t, n, i) {
    "use strict";
    e.fn.embed = function (n) {
        var o, a = e(this), r = a.selector || "", s = (new Date).getTime(), c = [], l = arguments[0],
            u = "string" == typeof l, d = [].slice.call(arguments, 1);
        return a.each(function () {
            var f,
                m = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.embed.settings, n) : e.extend({}, e.fn.embed.settings),
                g = m.selector, p = m.className, h = m.sources, v = m.error, b = m.metadata, y = m.namespace,
                x = m.templates, C = "." + y, w = "module-" + y, k = (e(t), e(this)), T = k.find(g.placeholder),
                S = k.find(g.icon), A = k.find(g.embed), D = this, R = k.data(w);
            f = {
                initialize: function () {
                    f.debug("Initializing embed"), f.determine.autoplay(), f.create(), f.bind.events(), f.instantiate()
                }, instantiate: function () {
                    f.verbose("Storing instance of module", f), R = f, k.data(w, f)
                }, destroy: function () {
                    f.verbose("Destroying previous instance of embed"), f.reset(), k.removeData(w).off(C)
                }, refresh: function () {
                    f.verbose("Refreshing selector cache"), T = k.find(g.placeholder), S = k.find(g.icon), A = k.find(g.embed)
                }, bind: {
                    events: function () {
                        f.has.placeholder() && (f.debug("Adding placeholder events"), k.on("click" + C, g.placeholder, f.createAndShow).on("click" + C, g.icon, f.createAndShow))
                    }
                }, create: function () {
                    var e = f.get.placeholder();
                    e ? f.createPlaceholder() : f.createAndShow()
                }, createPlaceholder: function (e) {
                    var t = f.get.icon(), n = f.get.url();
                    f.generate.embed(n);
                    e = e || f.get.placeholder(), k.html(x.placeholder(e, t)), f.debug("Creating placeholder for embed", e, t)
                }, createEmbed: function (t) {
                    f.refresh(), t = t || f.get.url(), A = e("<div/>").addClass(p.embed).html(f.generate.embed(t)).appendTo(k), m.onCreate.call(D, t), f.debug("Creating embed object", A)
                }, createAndShow: function () {
                    f.createEmbed(), f.show()
                }, change: function (e, t, n) {
                    f.debug("Changing video to ", e, t, n), k.data(b.source, e).data(b.id, t).data(b.url, n), f.create()
                }, reset: function () {
                    f.debug("Clearing embed and showing placeholder"), f.remove.active(), f.remove.embed(), f.showPlaceholder(), m.onReset.call(D)
                }, show: function () {
                    f.debug("Showing embed"), f.set.active(), m.onDisplay.call(D)
                }, hide: function () {
                    f.debug("Hiding embed"), f.showPlaceholder()
                }, showPlaceholder: function () {
                    f.debug("Showing placeholder image"), f.remove.active(), m.onPlaceholderDisplay.call(D)
                }, get: {
                    id: function () {
                        return m.id || k.data(b.id)
                    }, placeholder: function () {
                        return m.placeholder || k.data(b.placeholder)
                    }, icon: function () {
                        return m.icon ? m.icon : k.data(b.icon) !== i ? k.data(b.icon) : f.determine.icon()
                    }, source: function (e) {
                        return m.source ? m.source : k.data(b.source) !== i ? k.data(b.source) : f.determine.source()
                    }, type: function () {
                        var e = f.get.source();
                        return h[e] !== i ? h[e].type : !1
                    }, url: function () {
                        return m.url ? m.url : k.data(b.url) !== i ? k.data(b.url) : f.determine.url()
                    }
                }, determine: {
                    autoplay: function () {
                        f.should.autoplay() && (m.autoplay = !0)
                    }, source: function (t) {
                        var n = !1;
                        return t = t || f.get.url(), t && e.each(h, function (e, i) {
                            return -1 !== t.search(i.domain) ? (n = e, !1) : void 0
                        }), n
                    }, icon: function () {
                        var e = f.get.source();
                        return h[e] !== i ? h[e].icon : !1
                    }, url: function () {
                        var e, t = m.id || k.data(b.id), n = m.source || k.data(b.source);
                        return e = h[n] !== i ? h[n].url.replace("{id}", t) : !1, e && k.data(b.url, e), e
                    }
                }, set: {
                    active: function () {
                        k.addClass(p.active)
                    }
                }, remove: {
                    active: function () {
                        k.removeClass(p.active)
                    }, embed: function () {
                        A.empty()
                    }
                }, encode: {
                    parameters: function (e) {
                        var t, n = [];
                        for (t in e) n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
                        return n.join("&amp;")
                    }
                }, generate: {
                    embed: function (e) {
                        f.debug("Generating embed html");
                        var t, n, i = f.get.source();
                        return e = f.get.url(e), e ? (n = f.generate.parameters(i), t = x.iframe(e, n)) : f.error(v.noURL, k), t
                    }, parameters: function (t, n) {
                        var o = h[t] && h[t].parameters !== i ? h[t].parameters(m) : {};
                        return n = n || m.parameters, n && (o = e.extend({}, o, n)), o = m.onEmbed(o), f.encode.parameters(o)
                    }
                }, has: {
                    placeholder: function () {
                        return m.placeholder || k.data(b.placeholder)
                    }
                }, should: {
                    autoplay: function () {
                        return "auto" === m.autoplay ? m.placeholder || k.data(b.placeholder) !== i : m.autoplay
                    }
                }, is: {
                    video: function () {
                        return "video" == f.get.type()
                    }
                }, setting: function (t, n) {
                    if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t); else {
                        if (n === i) return m[t];
                        m[t] = n
                    }
                }, internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, f, t); else {
                        if (n === i) return f[t];
                        f[t] = n
                    }
                }, debug: function () {
                    m.debug && (m.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), f.debug.apply(console, arguments)))
                }, verbose: function () {
                    m.verbose && m.debug && (m.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), f.verbose.apply(console, arguments)))
                }, error: function () {
                    f.error = Function.prototype.bind.call(console.error, console, m.name + ":"), f.error.apply(console, arguments)
                }, performance: {
                    log: function (e) {
                        var t, n, i;
                        m.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: D,
                            "Execution Time": n
                        })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500)
                    }, display: function () {
                        var t = m.name + ":", n = 0;
                        s = !1, clearTimeout(f.performance.timer), e.each(c, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", r && (t += " '" + r + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), c = []
                    }
                }, invoke: function (t, n, a) {
                    var r, s, c, l = R;
                    return n = n || d, a = D || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                        var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[a]) && n != r) l = l[a]; else {
                            if (l[a] !== i) return s = l[a], !1;
                            if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (f.error(v.method, t), !1);
                            l = l[o]
                        }
                    })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                }
            }, u ? (R === i && f.initialize(), f.invoke(l)) : (R !== i && R.invoke("destroy"), f.initialize())
        }), o !== i ? o : this
    }, e.fn.embed.settings = {
        name: "Embed",
        namespace: "embed",
        debug: !1,
        verbose: !1,
        performance: !0,
        icon: !1,
        source: !1,
        url: !1,
        id: !1,
        autoplay: "auto",
        color: "#444444",
        hd: !0,
        brandedUI: !1,
        parameters: !1,
        onDisplay: function () {
        },
        onPlaceholderDisplay: function () {
        },
        onReset: function () {
        },
        onCreate: function (e) {
        },
        onEmbed: function (e) {
            return e
        },
        metadata: {id: "id", icon: "icon", placeholder: "placeholder", source: "source", url: "url"},
        error: {noURL: "No URL specified", method: "The method you called is not defined"},
        className: {active: "active", embed: "embed"},
        selector: {embed: ".embed", placeholder: ".placeholder", icon: ".icon"},
        sources: {
            youtube: {
                name: "youtube",
                type: "video",
                icon: "video play",
                domain: "youtube.com",
                url: "//www.youtube.com/embed/{id}",
                parameters: function (e) {
                    return {
                        autohide: !e.brandedUI,
                        autoplay: e.autoplay,
                        color: e.colors || i,
                        hq: e.hd,
                        jsapi: e.api,
                        modestbranding: !e.brandedUI
                    }
                }
            },
            vimeo: {
                name: "vimeo",
                type: "video",
                icon: "video play",
                domain: "vimeo.com",
                url: "//player.vimeo.com/video/{id}",
                parameters: function (e) {
                    return {
                        api: e.api,
                        autoplay: e.autoplay,
                        byline: e.brandedUI,
                        color: e.colors || i,
                        portrait: e.brandedUI,
                        title: e.brandedUI
                    }
                }
            }
        },
        templates: {
            iframe: function (e, t) {
                return '<iframe src="' + e + "?" + t + '" width="100%" height="100%" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
            }, placeholder: function (e, t) {
                var n = "";
                return t && (n += '<i class="' + t + ' icon"></i>'), e && (n += '<img class="placeholder" src="' + e + '">'), n
            }
        },
        api: !0,
        onPause: function () {
        },
        onPlay: function () {
        },
        onStop: function () {
        }
    }
}(jQuery, window, document), function (e, t, n, i) {
    "use strict";
    e.fn.modal = function (o) {
        var a, r = e(this), s = e(t), c = e(n), l = e("body"), u = r.selector || "", d = (new Date).getTime(), f = [],
            m = arguments[0], g = "string" == typeof m, p = [].slice.call(arguments, 1),
            h = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                setTimeout(e, 0)
            };
        return r.each(function () {
            var r, v, b, y, x, C, w, k, T,
                S = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.modal.settings, o) : e.extend({}, e.fn.modal.settings),
                A = S.selector, D = S.className, R = S.namespace, E = S.error, P = "." + R, F = "module-" + R,
                O = e(this), q = e(S.context), j = O.find(A.close), I = this, z = O.data(F);
            T = {
                initialize: function () {
                    T.verbose("Initializing dimmer", q), T.create.id(), T.create.dimmer(), T.refreshModals(), T.bind.events(), S.observeChanges && T.observeChanges(), T.instantiate()
                }, instantiate: function () {
                    T.verbose("Storing instance of modal"), z = T, O.data(F, z)
                }, create: {
                    dimmer: function () {
                        var t = {debug: S.debug, dimmerName: "modals", duration: {show: S.duration, hide: S.duration}},
                            n = e.extend(!0, t, S.dimmerSettings);
                        return S.inverted && (n.variation = n.variation !== i ? n.variation + " inverted" : "inverted"), e.fn.dimmer === i ? void T.error(E.dimmer) : (T.debug("Creating dimmer with settings", n), y = q.dimmer(n), S.detachable ? (T.verbose("Modal is detachable, moving content into dimmer"), y.dimmer("add content", O)) : T.set.undetached(), S.blurring && y.addClass(D.blurring), void (x = y.dimmer("get dimmer")))
                    }, id: function () {
                        w = (Math.random().toString(16) + "000000000").substr(2, 8), C = "." + w, T.verbose("Creating unique id for element", w)
                    }
                }, destroy: function () {
                    T.verbose("Destroying previous modal"), O.removeData(F).off(P), s.off(C), j.off(P), q.dimmer("destroy")
                }, observeChanges: function () {
                    "MutationObserver" in t && (k = new MutationObserver(function (e) {
                        T.debug("DOM tree modified, refreshing"), T.refresh()
                    }), k.observe(I, {childList: !0, subtree: !0}), T.debug("Setting up mutation observer", k))
                }, refresh: function () {
                    T.remove.scrolling(), T.cacheSizes(), T.set.screenHeight(), T.set.type(), T.set.position()
                }, refreshModals: function () {
                    v = O.siblings(A.modal), r = v.add(O)
                }, attachEvents: function (t, n) {
                    var i = e(t);
                    n = e.isFunction(T[n]) ? T[n] : T.toggle, i.length > 0 ? (T.debug("Attaching modal events to element", t, n), i.off(P).on("click" + P, n)) : T.error(E.notFound, t)
                }, bind: {
                    events: function () {
                        T.verbose("Attaching events"), O.on("click" + P, A.close, T.event.close).on("click" + P, A.approve, T.event.approve).on("click" + P, A.deny, T.event.deny), s.on("resize" + C, T.event.resize)
                    }
                }, get: {
                    id: function () {
                        return (Math.random().toString(16) + "000000000").substr(2, 8)
                    }
                }, event: {
                    approve: function () {
                        return S.onApprove.call(I, e(this)) === !1 ? void T.verbose("Approve callback returned false cancelling hide") : void T.hide()
                    }, deny: function () {
                        return S.onDeny.call(I, e(this)) === !1 ? void T.verbose("Deny callback returned false cancelling hide") : void T.hide()
                    }, close: function () {
                        T.hide()
                    }, click: function (t) {
                        var i = e(t.target), o = i.closest(A.modal).length > 0,
                            a = e.contains(n.documentElement, t.target);
                        !o && a && (T.debug("Dimmer clicked, hiding all modals"), T.is.active() && (T.remove.clickaway(), S.allowMultiple ? T.hide() : T.hideAll()))
                    }, debounce: function (e, t) {
                        clearTimeout(T.timer), T.timer = setTimeout(e, t)
                    }, keyboard: function (e) {
                        var t = e.which, n = 27;
                        t == n && (S.closable ? (T.debug("Escape key pressed hiding modal"), T.hide()) : T.debug("Escape key pressed, but closable is set to false"), e.preventDefault())
                    }, resize: function () {
                        y.dimmer("is active") && h(T.refresh)
                    }
                }, toggle: function () {
                    T.is.active() || T.is.animating() ? T.hide() : T.show()
                }, show: function (t) {
                    t = e.isFunction(t) ? t : function () {
                    }, T.refreshModals(), T.showModal(t)
                }, hide: function (t) {
                    t = e.isFunction(t) ? t : function () {
                    }, T.refreshModals(), T.hideModal(t)
                }, showModal: function (t) {
                    t = e.isFunction(t) ? t : function () {
                    }, T.is.animating() || !T.is.active() ? (T.showDimmer(), T.cacheSizes(), T.set.position(), T.set.screenHeight(), T.set.type(), T.set.clickaway(), !S.allowMultiple && T.others.active() ? T.hideOthers(T.showModal) : (S.onShow.call(I), S.transition && e.fn.transition !== i && O.transition("is supported") ? (T.debug("Showing modal with css animations"), O.transition({
                        debug: S.debug,
                        animation: S.transition + " in",
                        queue: S.queue,
                        duration: S.duration,
                        useFailSafe: !0,
                        onComplete: function () {
                            S.onVisible.apply(I), T.add.keyboardShortcuts(), T.save.focus(), T.set.active(), S.autofocus && T.set.autofocus(), t()
                        }
                    })) : T.error(E.noTransition))) : T.debug("Modal is already visible")
                }, hideModal: function (t, n) {
                    return t = e.isFunction(t) ? t : function () {
                    }, T.debug("Hiding modal"), S.onHide.call(I, e(this)) === !1 ? void T.verbose("Hide callback returned false cancelling hide") : void ((T.is.animating() || T.is.active()) && (S.transition && e.fn.transition !== i && O.transition("is supported") ? (T.remove.active(), O.transition({
                        debug: S.debug,
                        animation: S.transition + " out",
                        queue: S.queue,
                        duration: S.duration,
                        useFailSafe: !0,
                        onStart: function () {
                            T.others.active() || n || T.hideDimmer(), T.remove.keyboardShortcuts()
                        },
                        onComplete: function () {
                            S.onHidden.call(I), T.restore.focus(), t()
                        }
                    })) : T.error(E.noTransition)))
                }, showDimmer: function () {
                    y.dimmer("is animating") || !y.dimmer("is active") ? (T.debug("Showing dimmer"), y.dimmer("show")) : T.debug("Dimmer already visible")
                }, hideDimmer: function () {
                    return y.dimmer("is animating") || y.dimmer("is active") ? void y.dimmer("hide", function () {
                        T.remove.clickaway(), T.remove.screenHeight()
                    }) : void T.debug("Dimmer is not visible cannot hide")
                }, hideAll: function (t) {
                    var n = r.filter("." + D.active + ", ." + D.animating);
                    t = e.isFunction(t) ? t : function () {
                    }, n.length > 0 && (T.debug("Hiding all visible modals"), T.hideDimmer(), n.modal("hide modal", t))
                }, hideOthers: function (t) {
                    var n = v.filter("." + D.active + ", ." + D.animating);
                    t = e.isFunction(t) ? t : function () {
                    }, n.length > 0 && (T.debug("Hiding other modals", v), n.modal("hide modal", t, !0))
                }, others: {
                    active: function () {
                        return v.filter("." + D.active).length > 0
                    }, animating: function () {
                        return v.filter("." + D.animating).length > 0
                    }
                }, add: {
                    keyboardShortcuts: function () {
                        T.verbose("Adding keyboard shortcuts"), c.on("keyup" + P, T.event.keyboard)
                    }
                }, save: {
                    focus: function () {
                        b = e(n.activeElement).blur()
                    }
                }, restore: {
                    focus: function () {
                        b && b.length > 0 && b.focus()
                    }
                }, remove: {
                    active: function () {
                        O.removeClass(D.active)
                    }, clickaway: function () {
                        S.closable && x.off("click" + C)
                    }, bodyStyle: function () {
                        "" === l.attr("style") && (T.verbose("Removing style attribute"), l.removeAttr("style"))
                    }, screenHeight: function () {
                        T.debug("Removing page height"), l.css("height", "")
                    }, keyboardShortcuts: function () {
                        T.verbose("Removing keyboard shortcuts"), c.off("keyup" + P)
                    }, scrolling: function () {
                        y.removeClass(D.scrolling), O.removeClass(D.scrolling)
                    }
                }, cacheSizes: function () {
                    var o = O.outerHeight();
                    (T.cache === i || 0 !== o) && (T.cache = {
                        pageHeight: e(n).outerHeight(),
                        height: o + S.offset,
                        contextHeight: "body" == S.context ? e(t).height() : y.height()
                    }), T.debug("Caching modal and container sizes", T.cache)
                }, can: {
                    fit: function () {
                        return T.cache.height + 2 * S.padding < T.cache.contextHeight
                    }
                }, is: {
                    active: function () {
                        return O.hasClass(D.active)
                    }, animating: function () {
                        return O.transition("is supported") ? O.transition("is animating") : O.is(":visible")
                    }, scrolling: function () {
                        return y.hasClass(D.scrolling)
                    }, modernBrowser: function () {
                        return !(t.ActiveXObject || "ActiveXObject" in t)
                    }
                }, set: {
                    autofocus: function () {
                        var e = O.find(":input").filter(":visible"), t = e.filter("[autofocus]"),
                            n = t.length > 0 ? t.first() : e.first();
                        n.length > 0 && n.focus()
                    }, clickaway: function () {
                        S.closable && x.on("click" + C, T.event.click)
                    }, screenHeight: function () {
                        T.can.fit() ? l.css("height", "") : (T.debug("Modal is taller than page content, resizing page height"), l.css("height", T.cache.height + 2 * S.padding))
                    }, active: function () {
                        O.addClass(D.active)
                    }, scrolling: function () {
                        y.addClass(D.scrolling), O.addClass(D.scrolling)
                    }, type: function () {
                        T.can.fit() ? (T.verbose("Modal fits on screen"), T.others.active() || T.others.animating() || T.remove.scrolling()) : (T.verbose("Modal cannot fit on screen setting to scrolling"), T.set.scrolling())
                    }, position: function () {
                        T.verbose("Centering modal on page", T.cache), T.can.fit() ? O.css({
                            top: "",
                            marginTop: -(T.cache.height / 2)
                        }) : O.css({marginTop: "", top: c.scrollTop()})
                    }, undetached: function () {
                        y.addClass(D.undetached)
                    }
                }, setting: function (t, n) {
                    if (T.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, S, t); else {
                        if (n === i) return S[t];
                        S[t] = n
                    }
                }, internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, T, t); else {
                        if (n === i) return T[t];
                        T[t] = n
                    }
                }, debug: function () {
                    S.debug && (S.performance ? T.performance.log(arguments) : (T.debug = Function.prototype.bind.call(console.info, console, S.name + ":"), T.debug.apply(console, arguments)))
                }, verbose: function () {
                    S.verbose && S.debug && (S.performance ? T.performance.log(arguments) : (T.verbose = Function.prototype.bind.call(console.info, console, S.name + ":"), T.verbose.apply(console, arguments)))
                }, error: function () {
                    T.error = Function.prototype.bind.call(console.error, console, S.name + ":"), T.error.apply(console, arguments)
                }, performance: {
                    log: function (e) {
                        var t, n, i;
                        S.performance && (t = (new Date).getTime(), i = d || t, n = t - i, d = t, f.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: I,
                            "Execution Time": n
                        })), clearTimeout(T.performance.timer), T.performance.timer = setTimeout(T.performance.display, 500)
                    }, display: function () {
                        var t = S.name + ":", n = 0;
                        d = !1, clearTimeout(T.performance.timer), e.each(f, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", u && (t += " '" + u + "'"), (console.group !== i || console.table !== i) && f.length > 0 && (console.groupCollapsed(t), console.table ? console.table(f) : e.each(f, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), f = []
                    }
                }, invoke: function (t, n, o) {
                    var r, s, c, l = z;
                    return n = n || p, o = I || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                        var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[a]) && n != r) l = l[a]; else {
                            if (l[a] !== i) return s = l[a], !1;
                            if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                            l = l[o]
                        }
                    })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                }
            }, g ? (z === i && T.initialize(), T.invoke(m)) : (z !== i && z.invoke("destroy"),
                T.initialize())
        }), a !== i ? a : this
    }, e.fn.modal.settings = {
        name: "Modal",
        namespace: "modal",
        debug: !1,
        verbose: !1,
        performance: !0,
        observeChanges: !1,
        allowMultiple: !1,
        detachable: !0,
        closable: !0,
        autofocus: !0,
        inverted: !1,
        blurring: !1,
        dimmerSettings: {closable: !1, useCSS: !0},
        context: "body",
        queue: !1,
        duration: 500,
        offset: 0,
        transition: "scale",
        padding: 50,
        onShow: function () {
        },
        onVisible: function () {
        },
        onHide: function () {
            return !0
        },
        onHidden: function () {
        },
        onApprove: function () {
            return !0
        },
        onDeny: function () {
            return !0
        },
        selector: {
            close: "> .close",
            approve: ".actions .positive, .actions .approve, .actions .ok",
            deny: ".actions .negative, .actions .deny, .actions .cancel",
            modal: ".ui.modal"
        },
        error: {
            dimmer: "UI Dimmer, a required component is not included in this page",
            method: "The method you called is not defined.",
            notFound: "The element you specified could not be found"
        },
        className: {
            active: "active",
            animating: "animating",
            blurring: "blurring",
            scrolling: "scrolling",
            undetached: "undetached"
        }
    }
}(jQuery, window, document), function (e, t, n, i) {
    "use strict";
    e.fn.nag = function (n) {
        var o, a = e(this), r = a.selector || "", s = (new Date).getTime(), c = [], l = arguments[0],
            u = "string" == typeof l, d = [].slice.call(arguments, 1);
        return a.each(function () {
            var a, f = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.nag.settings, n) : e.extend({}, e.fn.nag.settings),
                m = (f.className, f.selector), g = f.error, p = f.namespace, h = "." + p, v = p + "-module",
                b = e(this), y = (b.find(m.close), e(f.context ? f.context : "body")), x = this, C = b.data(v);
            t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                setTimeout(e, 0)
            };
            a = {
                initialize: function () {
                    a.verbose("Initializing element"), b.on("click" + h, m.close, a.dismiss).data(v, a), f.detachable && b.parent()[0] !== y[0] && b.detach().prependTo(y), f.displayTime > 0 && setTimeout(a.hide, f.displayTime), a.show()
                }, destroy: function () {
                    a.verbose("Destroying instance"), b.removeData(v).off(h)
                }, show: function () {
                    a.should.show() && !b.is(":visible") && (a.debug("Showing nag", f.animation.show), "fade" == f.animation.show ? b.fadeIn(f.duration, f.easing) : b.slideDown(f.duration, f.easing))
                }, hide: function () {
                    a.debug("Showing nag", f.animation.hide), "fade" == f.animation.show ? b.fadeIn(f.duration, f.easing) : b.slideUp(f.duration, f.easing)
                }, onHide: function () {
                    a.debug("Removing nag", f.animation.hide), b.remove(), f.onHide && f.onHide()
                }, dismiss: function (e) {
                    f.storageMethod && a.storage.set(f.key, f.value), a.hide(), e.stopImmediatePropagation(), e.preventDefault()
                }, should: {
                    show: function () {
                        return f.persist ? (a.debug("Persistent nag is set, can show nag"), !0) : a.storage.get(f.key) != f.value.toString() ? (a.debug("Stored value is not set, can show nag", a.storage.get(f.key)), !0) : (a.debug("Stored value is set, cannot show nag", a.storage.get(f.key)), !1)
                    }
                }, get: {
                    storageOptions: function () {
                        var e = {};
                        return f.expires && (e.expires = f.expires), f.domain && (e.domain = f.domain), f.path && (e.path = f.path), e
                    }
                }, clear: function () {
                    a.storage.remove(f.key)
                }, storage: {
                    set: function (n, o) {
                        var r = a.get.storageOptions();
                        if ("localstorage" == f.storageMethod && t.localStorage !== i) t.localStorage.setItem(n, o), a.debug("Value stored using local storage", n, o); else if ("sessionstorage" == f.storageMethod && t.sessionStorage !== i) t.sessionStorage.setItem(n, o), a.debug("Value stored using session storage", n, o); else {
                            if (e.cookie === i) return void a.error(g.noCookieStorage);
                            e.cookie(n, o, r), a.debug("Value stored using cookie", n, o, r)
                        }
                    }, get: function (n, o) {
                        var r;
                        return "localstorage" == f.storageMethod && t.localStorage !== i ? r = t.localStorage.getItem(n) : "sessionstorage" == f.storageMethod && t.sessionStorage !== i ? r = t.sessionStorage.getItem(n) : e.cookie !== i ? r = e.cookie(n) : a.error(g.noCookieStorage), ("undefined" == r || "null" == r || r === i || null === r) && (r = i), r
                    }, remove: function (n) {
                        var o = a.get.storageOptions();
                        "localstorage" == f.storageMethod && t.localStorage !== i ? t.localStorage.removeItem(n) : "sessionstorage" == f.storageMethod && t.sessionStorage !== i ? t.sessionStorage.removeItem(n) : e.cookie !== i ? e.removeCookie(n, o) : a.error(g.noStorage)
                    }
                }, setting: function (t, n) {
                    if (a.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t); else {
                        if (n === i) return f[t];
                        f[t] = n
                    }
                }, internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, a, t); else {
                        if (n === i) return a[t];
                        a[t] = n
                    }
                }, debug: function () {
                    f.debug && (f.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), a.debug.apply(console, arguments)))
                }, verbose: function () {
                    f.verbose && f.debug && (f.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), a.verbose.apply(console, arguments)))
                }, error: function () {
                    a.error = Function.prototype.bind.call(console.error, console, f.name + ":"), a.error.apply(console, arguments)
                }, performance: {
                    log: function (e) {
                        var t, n, i;
                        f.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: x,
                            "Execution Time": n
                        })), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 500)
                    }, display: function () {
                        var t = f.name + ":", n = 0;
                        s = !1, clearTimeout(a.performance.timer), e.each(c, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), c = []
                    }
                }, invoke: function (t, n, r) {
                    var s, c, l, u = C;
                    return n = n || d, r = x || r, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function (n, o) {
                        var r = n != s ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(u[r]) && n != s) u = u[r]; else {
                            if (u[r] !== i) return c = u[r], !1;
                            if (!e.isPlainObject(u[o]) || n == s) return u[o] !== i ? (c = u[o], !1) : (a.error(g.method, t), !1);
                            u = u[o]
                        }
                    })), e.isFunction(c) ? l = c.apply(r, n) : c !== i && (l = c), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), c
                }
            }, u ? (C === i && a.initialize(), a.invoke(l)) : (C !== i && C.invoke("destroy"), a.initialize())
        }), o !== i ? o : this
    }, e.fn.nag.settings = {
        name: "Nag",
        debug: !1,
        verbose: !1,
        performance: !0,
        namespace: "Nag",
        persist: !1,
        displayTime: 0,
        animation: {show: "slide", hide: "slide"},
        context: !1,
        detachable: !1,
        expires: 30,
        domain: !1,
        path: "/",
        storageMethod: "cookie",
        key: "nag",
        value: "dismiss",
        error: {
            noCookieStorage: "$.cookie is not included. A storage solution is required.",
            noStorage: "Neither $.cookie or store is defined. A storage solution is required for storing state",
            method: "The method you called is not defined."
        },
        className: {bottom: "bottom", fixed: "fixed"},
        selector: {close: ".close.icon"},
        speed: 500,
        easing: "easeOutQuad",
        onHide: function () {
        }
    }
}(jQuery, window, document), function (e, t, n, i) {
    "use strict";
    e.fn.popup = function (o) {
        var a, r = e(this), s = e(n), c = e(t), l = e("body"), u = r.selector || "", d = !0, f = (new Date).getTime(),
            m = [], g = arguments[0], p = "string" == typeof g, h = [].slice.call(arguments, 1);
        return r.each(function () {
            var n, r, v, b, y,
                x = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.popup.settings, o) : e.extend({}, e.fn.popup.settings),
                C = x.selector, w = x.className, k = x.error, T = x.metadata, S = x.namespace, A = "." + x.namespace,
                D = "module-" + S, R = e(this), E = e(x.context), P = x.target ? e(x.target) : R, F = 0, O = !1, q = !1,
                j = this, I = R.data(D);
            y = {
                initialize: function () {
                    y.debug("Initializing", R), y.createID(), y.bind.events(), !y.exists() && x.preserve && y.create(), y.instantiate()
                }, instantiate: function () {
                    y.verbose("Storing instance", y), I = y, R.data(D, I)
                }, refresh: function () {
                    x.popup ? n = e(x.popup).eq(0) : x.inline && (n = P.nextAll(C.popup).eq(0), x.popup = n), x.popup ? (n.addClass(w.loading), r = y.get.offsetParent(), n.removeClass(w.loading), x.movePopup && y.has.popup() && y.get.offsetParent(n)[0] !== r[0] && (y.debug("Moving popup to the same offset parent as activating element"), n.detach().appendTo(r))) : r = x.inline ? y.get.offsetParent(P) : y.has.popup() ? y.get.offsetParent(n) : l, r.is("html") && r[0] !== l[0] && (y.debug("Setting page as offset parent"), r = l), y.get.variation() && y.set.variation()
                }, reposition: function () {
                    y.refresh(), y.set.position()
                }, destroy: function () {
                    y.debug("Destroying previous module"), n && !x.preserve && y.removePopup(), clearTimeout(y.hideTimer), clearTimeout(y.showTimer), c.off(v), R.off(A).removeData(D)
                }, event: {
                    start: function (t) {
                        var n = e.isPlainObject(x.delay) ? x.delay.show : x.delay;
                        clearTimeout(y.hideTimer), q || (y.showTimer = setTimeout(y.show, n))
                    }, end: function () {
                        var t = e.isPlainObject(x.delay) ? x.delay.hide : x.delay;
                        clearTimeout(y.showTimer), y.hideTimer = setTimeout(y.hide, t)
                    }, touchstart: function (e) {
                        q = !0, y.show()
                    }, resize: function () {
                        y.is.visible() && y.set.position()
                    }, hideGracefully: function (t) {
                        t && 0 === e(t.target).closest(C.popup).length ? (y.debug("Click occurred outside popup hiding popup"), y.hide()) : y.debug("Click was inside popup, keeping popup open")
                    }
                }, create: function () {
                    var t = y.get.html(), i = y.get.title(), o = y.get.content();
                    t || o || i ? (y.debug("Creating pop-up html"), t || (t = x.templates.popup({
                        title: i,
                        content: o
                    })), n = e("<div/>").addClass(w.popup).data(T.activator, R).html(t), x.inline ? (y.verbose("Inserting popup element inline", n), n.insertAfter(R)) : (y.verbose("Appending popup element to body", n), n.appendTo(E)), y.refresh(), y.set.variation(), x.hoverable && y.bind.popup(), x.onCreate.call(n, j)) : 0 !== P.next(C.popup).length ? (y.verbose("Pre-existing popup found"), x.inline = !0, x.popups = P.next(C.popup).data(T.activator, R), y.refresh(), x.hoverable && y.bind.popup()) : x.popup ? (e(x.popup).data(T.activator, R), y.verbose("Used popup specified in settings"), y.refresh(), x.hoverable && y.bind.popup()) : y.debug("No content specified skipping display", j)
                }, createID: function () {
                    b = (Math.random().toString(16) + "000000000").substr(2, 8), v = "." + b, y.verbose("Creating unique id for element", b)
                }, toggle: function () {
                    y.debug("Toggling pop-up"), y.is.hidden() ? (y.debug("Popup is hidden, showing pop-up"), y.unbind.close(), y.show()) : (y.debug("Popup is visible, hiding pop-up"), y.hide())
                }, show: function (e) {
                    if (e = e || function () {
                    }, y.debug("Showing pop-up", x.transition), y.is.hidden() && (!y.is.active() || !y.is.dropdown())) {
                        if (y.exists() || y.create(), x.onShow.call(n, j) === !1) return void y.debug("onShow callback returned false, cancelling popup animation");
                        x.preserve || x.popup || y.refresh(), n && y.set.position() && (y.save.conditions(), x.exclusive && y.hideAll(), y.animate.show(e))
                    }
                }, hide: function (e) {
                    if (e = e || function () {
                    }, y.is.visible() || y.is.animating()) {
                        if (x.onHide.call(n, j) === !1) return void y.debug("onHide callback returned false, cancelling popup animation");
                        y.remove.visible(), y.unbind.close(), y.restore.conditions(), y.animate.hide(e)
                    }
                }, hideAll: function () {
                    e(C.popup).filter("." + w.visible).each(function () {
                        e(this).data(T.activator).popup("hide")
                    })
                }, exists: function () {
                    return n ? x.inline || x.popup ? y.has.popup() : n.closest(E).length >= 1 ? !0 : !1 : !1
                }, removePopup: function () {
                    y.has.popup() && !x.popup && (y.debug("Removing popup", n), n.remove(), n = i, x.onRemove.call(n, j))
                }, save: {
                    conditions: function () {
                        y.cache = {title: R.attr("title")}, y.cache.title && R.removeAttr("title"), y.verbose("Saving original attributes", y.cache.title)
                    }
                }, restore: {
                    conditions: function () {
                        return y.cache && y.cache.title && (R.attr("title", y.cache.title), y.verbose("Restoring original attributes", y.cache.title)), !0
                    }
                }, animate: {
                    show: function (t) {
                        t = e.isFunction(t) ? t : function () {
                        }, x.transition && e.fn.transition !== i && R.transition("is supported") ? (y.set.visible(), n.transition({
                            animation: x.transition + " in",
                            queue: !1,
                            debug: x.debug,
                            verbose: x.verbose,
                            duration: x.duration,
                            onComplete: function () {
                                y.bind.close(), t.call(n, j), x.onVisible.call(n, j)
                            }
                        })) : y.error(k.noTransition)
                    }, hide: function (t) {
                        return t = e.isFunction(t) ? t : function () {
                        }, y.debug("Hiding pop-up"), x.onHide.call(n, j) === !1 ? void y.debug("onHide callback returned false, cancelling popup animation") : void (x.transition && e.fn.transition !== i && R.transition("is supported") ? n.transition({
                            animation: x.transition + " out",
                            queue: !1,
                            duration: x.duration,
                            debug: x.debug,
                            verbose: x.verbose,
                            onComplete: function () {
                                y.reset(), t.call(n, j), x.onHidden.call(n, j)
                            }
                        }) : y.error(k.noTransition))
                    }
                }, get: {
                    html: function () {
                        return R.removeData(T.html), R.data(T.html) || x.html
                    }, title: function () {
                        return R.removeData(T.title), R.data(T.title) || x.title
                    }, content: function () {
                        return R.removeData(T.content), R.data(T.content) || R.attr("title") || x.content
                    }, variation: function () {
                        return R.removeData(T.variation), R.data(T.variation) || x.variation
                    }, popupOffset: function () {
                        return n.offset()
                    }, calculations: function () {
                        var e, i = P[0], o = x.inline || x.popup ? P.position() : P.offset(), a = {};
                        return a = {
                            target: {
                                element: P[0],
                                width: P.outerWidth(),
                                height: P.outerHeight(),
                                top: o.top,
                                left: o.left,
                                margin: {}
                            },
                            popup: {width: n.outerWidth(), height: n.outerHeight()},
                            parent: {width: r.outerWidth(), height: r.outerHeight()},
                            screen: {
                                scroll: {top: c.scrollTop(), left: c.scrollLeft()},
                                width: c.width(),
                                height: c.height()
                            }
                        }, x.setFluidWidth && y.is.fluid() && (a.container = {width: n.parent().outerWidth()}, a.popup.width = a.container.width), a.target.margin.top = x.inline ? parseInt(t.getComputedStyle(i).getPropertyValue("margin-top"), 10) : 0, a.target.margin.left = x.inline ? y.is.rtl() ? parseInt(t.getComputedStyle(i).getPropertyValue("margin-right"), 10) : parseInt(t.getComputedStyle(i).getPropertyValue("margin-left"), 10) : 0, e = a.screen, a.boundary = {
                            top: e.scroll.top,
                            bottom: e.scroll.top + e.height,
                            left: e.scroll.left,
                            right: e.scroll.left + e.width
                        }, a
                    }, id: function () {
                        return b
                    }, startEvent: function () {
                        return "hover" == x.on ? "mouseenter" : "focus" == x.on ? "focus" : !1
                    }, scrollEvent: function () {
                        return "scroll"
                    }, endEvent: function () {
                        return "hover" == x.on ? "mouseleave" : "focus" == x.on ? "blur" : !1
                    }, distanceFromBoundary: function (e, t) {
                        var n, i, o = {};
                        return e = e || y.get.offset(), t = t || y.get.calculations(), n = t.popup, i = t.boundary, e && (o = {
                            top: e.top - i.top,
                            left: e.left - i.left,
                            right: i.right - (e.left + n.width),
                            bottom: i.bottom - (e.top + n.height)
                        }, y.verbose("Distance from boundaries determined", e, o)), o
                    }, offsetParent: function (t) {
                        var n = t !== i ? t[0] : R[0], o = n.parentNode, a = e(o);
                        if (o) for (var r = "none" === a.css("transform"), s = "static" === a.css("position"), c = a.is("html"); o && !c && s && r;) o = o.parentNode, a = e(o), r = "none" === a.css("transform"), s = "static" === a.css("position"), c = a.is("html");
                        return a && a.length > 0 ? a : e()
                    }, positions: function () {
                        return {
                            "top left": !1,
                            "top center": !1,
                            "top right": !1,
                            "bottom left": !1,
                            "bottom center": !1,
                            "bottom right": !1,
                            "left center": !1,
                            "right center": !1
                        }
                    }, nextPosition: function (e) {
                        var t = e.split(" "), n = t[0], i = t[1],
                            o = {top: "bottom", bottom: "top", left: "right", right: "left"},
                            a = {left: "center", center: "right", right: "left"}, r = {
                                "top left": "top center",
                                "top center": "top right",
                                "top right": "right center",
                                "right center": "bottom right",
                                "bottom right": "bottom center",
                                "bottom center": "bottom left",
                                "bottom left": "left center",
                                "left center": "top left"
                            }, s = "top" == n || "bottom" == n, c = !1, l = !1, u = !1;
                        return O || (y.verbose("All available positions available"), O = y.get.positions()), y.debug("Recording last position tried", e), O[e] = !0, "opposite" === x.prefer && (u = [o[n], i], u = u.join(" "), c = O[u] === !0, y.debug("Trying opposite strategy", u)), "adjacent" === x.prefer && s && (u = [n, a[i]], u = u.join(" "), l = O[u] === !0, y.debug("Trying adjacent strategy", u)), (l || c) && (y.debug("Using backup position", u), u = r[e]), u
                    }
                }, set: {
                    position: function (e, t) {
                        if (0 === P.length || 0 === n.length) return void y.error(k.notFound);
                        var o, a, r, s, c, l, u, d;
                        if (t = t || y.get.calculations(), e = e || R.data(T.position) || x.position, o = R.data(T.offset) || x.offset, a = x.distanceAway, r = t.target, s = t.popup, c = t.parent, 0 === r.width && 0 === r.height) return y.debug("Popup target is hidden, no action taken"), !1;
                        switch (x.inline && (y.debug("Adding margin to calculation", r.margin), "left center" == e || "right center" == e ? (o += r.margin.top, a += -r.margin.left) : "top left" == e || "top center" == e || "top right" == e ? (o += r.margin.left, a -= r.margin.top) : (o += r.margin.left, a += r.margin.top)), y.debug("Determining popup position from calculations", e, t), y.is.rtl() && (e = e.replace(/left|right/g, function (e) {
                            return "left" == e ? "right" : "left"
                        }), y.debug("RTL: Popup position updated", e)), F == x.maxSearchDepth && "string" == typeof x.lastResort && (e = x.lastResort), e) {
                            case"top left":
                                l = {top: "auto", bottom: c.height - r.top + a, left: r.left + o, right: "auto"};
                                break;
                            case"top center":
                                l = {
                                    bottom: c.height - r.top + a,
                                    left: r.left + r.width / 2 - s.width / 2 + o,
                                    top: "auto",
                                    right: "auto"
                                };
                                break;
                            case"top right":
                                l = {
                                    bottom: c.height - r.top + a,
                                    right: c.width - r.left - r.width - o,
                                    top: "auto",
                                    left: "auto"
                                };
                                break;
                            case"left center":
                                l = {
                                    top: r.top + r.height / 2 - s.height / 2 + o,
                                    right: c.width - r.left + a,
                                    left: "auto",
                                    bottom: "auto"
                                };
                                break;
                            case"right center":
                                l = {
                                    top: r.top + r.height / 2 - s.height / 2 + o,
                                    left: r.left + r.width + a,
                                    bottom: "auto",
                                    right: "auto"
                                };
                                break;
                            case"bottom left":
                                l = {top: r.top + r.height + a, left: r.left + o, bottom: "auto", right: "auto"};
                                break;
                            case"bottom center":
                                l = {
                                    top: r.top + r.height + a,
                                    left: r.left + r.width / 2 - s.width / 2 + o,
                                    bottom: "auto",
                                    right: "auto"
                                };
                                break;
                            case"bottom right":
                                l = {
                                    top: r.top + r.height + a,
                                    right: c.width - r.left - r.width - o,
                                    left: "auto",
                                    bottom: "auto"
                                }
                        }
                        if (l === i && y.error(k.invalidPosition, e), y.debug("Calculated popup positioning values", l), n.css(l).removeClass(w.position).addClass(e).addClass(w.loading), u = y.get.popupOffset(), d = y.get.distanceFromBoundary(u, t), y.is.offstage(d, e)) {
                            if (y.debug("Position is outside viewport", e), F < x.maxSearchDepth) return F++, e = y.get.nextPosition(e), y.debug("Trying new position", e), n ? y.set.position(e, t) : !1;
                            if (!x.lastResort) return y.debug("Popup could not find a position to display", n), y.error(k.cannotPlace, j), y.remove.attempts(), y.remove.loading(), y.reset(), !1;
                            y.debug("No position found, showing with last position")
                        }
                        return y.debug("Position is on stage", e), y.remove.attempts(), y.remove.loading(), x.setFluidWidth && y.is.fluid() && y.set.fluidWidth(t), !0
                    }, fluidWidth: function (e) {
                        e = e || y.get.calculations(), y.debug("Automatically setting element width to parent width", e.parent.width), n.css("width", e.container.width)
                    }, variation: function (e) {
                        e = e || y.get.variation(), e && y.has.popup() && (y.verbose("Adding variation to popup", e), n.addClass(e))
                    }, visible: function () {
                        R.addClass(w.visible)
                    }
                }, remove: {
                    loading: function () {
                        n.removeClass(w.loading)
                    }, variation: function (e) {
                        e = e || y.get.variation(), e && (y.verbose("Removing variation", e), n.removeClass(e))
                    }, visible: function () {
                        R.removeClass(w.visible)
                    }, attempts: function () {
                        y.verbose("Resetting all searched positions"), F = 0, O = !1
                    }
                }, bind: {
                    events: function () {
                        y.debug("Binding popup events to module"), "click" == x.on && R.on("click" + A, y.toggle), "hover" == x.on && d && R.on("touchstart" + A, y.event.touchstart), y.get.startEvent() && R.on(y.get.startEvent() + A, y.event.start).on(y.get.endEvent() + A, y.event.end), x.target && y.debug("Target set to element", P), c.on("resize" + v, y.event.resize)
                    }, popup: function () {
                        y.verbose("Allowing hover events on popup to prevent closing"), n && y.has.popup() && n.on("mouseenter" + A, y.event.start).on("mouseleave" + A, y.event.end)
                    }, close: function () {
                        (x.hideOnScroll === !0 || "auto" == x.hideOnScroll && "click" != x.on) && (s.one(y.get.scrollEvent() + v, y.event.hideGracefully), E.one(y.get.scrollEvent() + v, y.event.hideGracefully)), "hover" == x.on && q && (y.verbose("Binding popup close event to document"), s.on("touchstart" + v, function (e) {
                            y.verbose("Touched away from popup"), y.event.hideGracefully.call(j, e)
                        })), "click" == x.on && x.closable && (y.verbose("Binding popup close event to document"), s.on("click" + v, function (e) {
                            y.verbose("Clicked away from popup"), y.event.hideGracefully.call(j, e)
                        }))
                    }
                }, unbind: {
                    close: function () {
                        (x.hideOnScroll === !0 || "auto" == x.hideOnScroll && "click" != x.on) && (s.off("scroll" + v, y.hide), E.off("scroll" + v, y.hide)), "hover" == x.on && q && (s.off("touchstart" + v), q = !1), "click" == x.on && x.closable && (y.verbose("Removing close event from document"), s.off("click" + v))
                    }
                }, has: {
                    popup: function () {
                        return n && n.length > 0
                    }
                }, is: {
                    offstage: function (t, n) {
                        var i = [];
                        return e.each(t, function (e, t) {
                            t < -x.jitter && (y.debug("Position exceeds allowable distance from edge", e, t, n), i.push(e))
                        }), i.length > 0 ? !0 : !1
                    }, active: function () {
                        return R.hasClass(w.active)
                    }, animating: function () {
                        return n && n.hasClass(w.animating)
                    }, fluid: function () {
                        return n && n.hasClass(w.fluid)
                    }, visible: function () {
                        return n && n.hasClass(w.visible)
                    }, dropdown: function () {
                        return R.hasClass(w.dropdown)
                    }, hidden: function () {
                        return !y.is.visible()
                    }, rtl: function () {
                        return "rtl" == R.css("direction")
                    }
                }, reset: function () {
                    y.remove.visible(), x.preserve ? e.fn.transition !== i && n.transition("remove transition") : y.removePopup()
                }, setting: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, x, t); else {
                        if (n === i) return x[t];
                        x[t] = n
                    }
                }, internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, y, t); else {
                        if (n === i) return y[t];
                        y[t] = n
                    }
                }, debug: function () {
                    x.debug && (x.performance ? y.performance.log(arguments) : (y.debug = Function.prototype.bind.call(console.info, console, x.name + ":"), y.debug.apply(console, arguments)))
                }, verbose: function () {
                    x.verbose && x.debug && (x.performance ? y.performance.log(arguments) : (y.verbose = Function.prototype.bind.call(console.info, console, x.name + ":"), y.verbose.apply(console, arguments)))
                }, error: function () {
                    y.error = Function.prototype.bind.call(console.error, console, x.name + ":"), y.error.apply(console, arguments)
                }, performance: {
                    log: function (e) {
                        var t, n, i;
                        x.performance && (t = (new Date).getTime(), i = f || t, n = t - i, f = t, m.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: j,
                            "Execution Time": n
                        })), clearTimeout(y.performance.timer), y.performance.timer = setTimeout(y.performance.display, 500)
                    }, display: function () {
                        var t = x.name + ":", n = 0;
                        f = !1, clearTimeout(y.performance.timer), e.each(m, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", u && (t += " '" + u + "'"), (console.group !== i || console.table !== i) && m.length > 0 && (console.groupCollapsed(t), console.table ? console.table(m) : e.each(m, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), m = []
                    }
                }, invoke: function (t, n, o) {
                    var r, s, c, l = I;
                    return n = n || h, o = j || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                        var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[a]) && n != r) l = l[a]; else {
                            if (l[a] !== i) return s = l[a], !1;
                            if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                            l = l[o]
                        }
                    })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                }
            }, p ? (I === i && y.initialize(), y.invoke(g)) : (I !== i && I.invoke("destroy"), y.initialize())
        }), a !== i ? a : this
    }, e.fn.popup.settings = {
        name: "Popup",
        debug: !1,
        verbose: !1,
        performance: !0,
        namespace: "popup",
        onCreate: function () {
        },
        onRemove: function () {
        },
        onShow: function () {
        },
        onVisible: function () {
        },
        onHide: function () {
        },
        onHidden: function () {
        },
        on: "hover",
        addTouchEvents: !0,
        position: "top left",
        variation: "",
        movePopup: !0,
        target: !1,
        popup: !1,
        inline: !1,
        preserve: !1,
        hoverable: !1,
        content: !1,
        html: !1,
        title: !1,
        closable: !0,
        hideOnScroll: "auto",
        exclusive: !1,
        context: "body",
        prefer: "opposite",
        lastResort: !1,
        delay: {show: 50, hide: 70},
        setFluidWidth: !0,
        duration: 200,
        transition: "scale",
        distanceAway: 0,
        jitter: 2,
        offset: 0,
        maxSearchDepth: 15,
        error: {
            invalidPosition: "The position you specified is not a valid position",
            cannotPlace: "Popup does not fit within the boundaries of the viewport",
            method: "The method you called is not defined.",
            noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",
            notFound: "The target or popup you specified does not exist on the page"
        },
        metadata: {
            activator: "activator",
            content: "content",
            html: "html",
            offset: "offset",
            position: "position",
            title: "title",
            variation: "variation"
        },
        className: {
            active: "active",
            animating: "animating",
            dropdown: "dropdown",
            fluid: "fluid",
            loading: "loading",
            popup: "ui popup",
            position: "top left center bottom right",
            visible: "visible"
        },
        selector: {popup: ".ui.popup"},
        templates: {
            escape: function (e) {
                var t = /[&<>"'`]/g, n = /[&<>"'`]/,
                    i = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"},
                    o = function (e) {
                        return i[e]
                    };
                return n.test(e) ? e.replace(t, o) : e
            }, popup: function (t) {
                var n = "", o = e.fn.popup.settings.templates.escape;
                return typeof t !== i && (typeof t.title !== i && t.title && (t.title = o(t.title), n += '<div class="header">' + t.title + "</div>"), typeof t.content !== i && t.content && (t.content = o(t.content), n += '<div class="content">' + t.content + "</div>")), n
            }
        }
    }
}(jQuery, window, document), function (e, t, n, i) {
    "use strict";
    e.fn.progress = function (t) {
        var o, a = e(this), r = a.selector || "", s = (new Date).getTime(), c = [], l = arguments[0],
            u = "string" == typeof l, d = [].slice.call(arguments, 1);
        return a.each(function () {
            var a, f,
                m = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.progress.settings, t) : e.extend({}, e.fn.progress.settings),
                g = m.className, p = m.metadata, h = m.namespace, v = m.selector, b = m.error, y = "." + h,
                x = "module-" + h, C = e(this), w = e(this).find(v.bar), k = e(this).find(v.progress),
                T = e(this).find(v.label), S = this, A = C.data(x), D = !1;
            f = {
                initialize: function () {
                    f.debug("Initializing progress bar", m), f.set.duration(), f.set.transitionEvent(), f.read.metadata(), f.read.settings(), f.instantiate()
                }, instantiate: function () {
                    f.verbose("Storing instance of progress", f), A = f, C.data(x, f)
                }, destroy: function () {
                    f.verbose("Destroying previous progress for", C), clearInterval(A.interval), f.remove.state(), C.removeData(x), A = i
                }, reset: function () {
                    f.set.percent(0)
                }, complete: function () {
                    (f.percent === i || f.percent < 100) && f.set.percent(100)
                }, read: {
                    metadata: function () {
                        var e = {percent: C.data(p.percent), total: C.data(p.total), value: C.data(p.value)};
                        e.percent && (f.debug("Current percent value set from metadata", e.percent), f.set.percent(e.percent)), e.total && (f.debug("Total value set from metadata", e.total), f.set.total(e.total)), e.value && (f.debug("Current value set from metadata", e.value), f.set.value(e.value), f.set.progress(e.value))
                    }, settings: function () {
                        m.total !== !1 && (f.debug("Current total set in settings", m.total), f.set.total(m.total)), m.value !== !1 && (f.debug("Current value set in settings", m.value), f.set.value(m.value), f.set.progress(f.value)), m.percent !== !1 && (f.debug("Current percent set in settings", m.percent), f.set.percent(m.percent))
                    }
                }, increment: function (e) {
                    var t, n, i;
                    f.has.total() ? (n = f.get.value(), e = e || 1, i = n + e, t = f.get.total(), f.debug("Incrementing value", n, i, t), i > t && (f.debug("Value cannot increment above total", t), i = t)) : (n = f.get.percent(), e = e || f.get.randomValue(), i = n + e, t = 100, f.debug("Incrementing percentage by", n, i), i > t && (f.debug("Value cannot increment above 100 percent"), i = t)), f.set.progress(i)
                }, decrement: function (e) {
                    var t, n, i = f.get.total();
                    i ? (t = f.get.value(), e = e || 1, n = t - e, f.debug("Decrementing value by", e, t)) : (t = f.get.percent(), e = e || f.get.randomValue(), n = t - e, f.debug("Decrementing percentage by", e, t)), 0 > n && (f.debug("Value cannot decrement below 0"), n = 0), f.set.progress(n)
                }, has: {
                    total: function () {
                        return f.get.total() !== !1
                    }
                }, get: {
                    text: function (e) {
                        var t = f.value || 0, n = f.total || 0, i = D ? f.get.displayPercent() : f.percent || 0,
                            o = f.total > 0 ? n - t : 100 - i;
                        return e = e || "", e = e.replace("{value}", t).replace("{total}", n).replace("{left}", o).replace("{percent}", i), f.debug("Adding variables to progress bar text", e), e
                    }, randomValue: function () {
                        return f.debug("Generating random increment percentage"), Math.floor(Math.random() * m.random.max + m.random.min)
                    }, numericValue: function (e) {
                        return "string" == typeof e ? "" !== e.replace(/[^\d.]/g, "") ? +e.replace(/[^\d.]/g, "") : !1 : e
                    }, transitionEnd: function () {
                        var e, t = n.createElement("element"), o = {
                            transition: "transitionend",
                            OTransition: "oTransitionEnd",
                            MozTransition: "transitionend",
                            WebkitTransition: "webkitTransitionEnd"
                        };
                        for (e in o) if (t.style[e] !== i) return o[e]
                    }, displayPercent: function () {
                        var e = w.width(), t = C.width(), n = parseInt(w.css("min-width"), 10),
                            i = e > n ? e / t * 100 : f.percent;
                        return m.precision > 0 ? Math.round(i * (10 * m.precision)) / (10 * m.precision) : Math.round(i)
                    }, percent: function () {
                        return f.percent || 0
                    }, value: function () {
                        return f.value || 0
                    }, total: function () {
                        return f.total || !1
                    }
                }, is: {
                    success: function () {
                        return C.hasClass(g.success)
                    }, warning: function () {
                        return C.hasClass(g.warning)
                    }, error: function () {
                        return C.hasClass(g.error)
                    }, active: function () {
                        return C.hasClass(g.active)
                    }, visible: function () {
                        return C.is(":visible")
                    }
                }, remove: {
                    state: function () {
                        f.verbose("Removing stored state"), delete f.total, delete f.percent, delete f.value
                    }, active: function () {
                        f.verbose("Removing active state"), C.removeClass(g.active)
                    }, success: function () {
                        f.verbose("Removing success state"), C.removeClass(g.success)
                    }, warning: function () {
                        f.verbose("Removing warning state"), C.removeClass(g.warning)
                    }, error: function () {
                        f.verbose("Removing error state"), C.removeClass(g.error)
                    }
                }, set: {
                    barWidth: function (e) {
                        e > 100 ? f.error(b.tooHigh, e) : 0 > e ? f.error(b.tooLow, e) : (w.css("width", e + "%"), C.attr("data-percent", parseInt(e, 10)))
                    }, duration: function (e) {
                        e = e || m.duration, e = "number" == typeof e ? e + "ms" : e, f.verbose("Setting progress bar transition duration", e), w.css({"transition-duration": e})
                    }, percent: function (e) {
                        e = "string" == typeof e ? +e.replace("%", "") : e, e = m.precision > 0 ? Math.round(e * (10 * m.precision)) / (10 * m.precision) : Math.round(e), f.percent = e, f.has.total() || (f.value = m.precision > 0 ? Math.round(e / 100 * f.total * (10 * m.precision)) / (10 * m.precision) : Math.round(e / 100 * f.total * 10) / 10, m.limitValues && (f.value = f.value > 100 ? 100 : f.value < 0 ? 0 : f.value)), f.set.barWidth(e), f.set.labelInterval(), f.set.labels(), m.onChange.call(S, e, f.value, f.total)
                    }, labelInterval: function () {
                        var e = function () {
                            f.verbose("Bar finished animating, removing continuous label updates"), clearInterval(f.interval), D = !1, f.set.labels()
                        };
                        clearInterval(f.interval), w.one(a + y, e), f.timer = setTimeout(e, m.duration + 100), D = !0, f.interval = setInterval(f.set.labels, m.framerate)
                    }, labels: function () {
                        f.verbose("Setting both bar progress and outer label text"), f.set.barLabel(), f.set.state()
                    }, label: function (e) {
                        e = e || "", e && (e = f.get.text(e), f.debug("Setting label to text", e), T.text(e))
                    }, state: function (e) {
                        e = e !== i ? e : f.percent, 100 === e ? !m.autoSuccess || f.is.warning() || f.is.error() ? (f.verbose("Reached 100% removing active state"), f.remove.active()) : (f.set.success(), f.debug("Automatically triggering success at 100%")) : e > 0 ? (f.verbose("Adjusting active progress bar label", e), f.set.active()) : (f.remove.active(), f.set.label(m.text.active))
                    }, barLabel: function (e) {
                        e !== i ? k.text(f.get.text(e)) : "ratio" == m.label && f.total ? (f.debug("Adding ratio to bar label"), k.text(f.get.text(m.text.ratio))) : "percent" == m.label && (f.debug("Adding percentage to bar label"), k.text(f.get.text(m.text.percent)))
                    }, active: function (e) {
                        e = e || m.text.active, f.debug("Setting active state"), m.showActivity && !f.is.active() && C.addClass(g.active), f.remove.warning(), f.remove.error(), f.remove.success(), e && f.set.label(e), m.onActive.call(S, f.value, f.total)
                    }, success: function (e) {
                        e = e || m.text.success, f.debug("Setting success state"), C.addClass(g.success), f.remove.active(), f.remove.warning(), f.remove.error(), f.complete(), e && f.set.label(e), m.onSuccess.call(S, f.total)
                    }, warning: function (e) {
                        e = e || m.text.warning, f.debug("Setting warning state"), C.addClass(g.warning), f.remove.active(), f.remove.success(), f.remove.error(), f.complete(), e && f.set.label(e), m.onWarning.call(S, f.value, f.total)
                    }, error: function (e) {
                        e = e || m.text.error, f.debug("Setting error state"), C.addClass(g.error), f.remove.active(), f.remove.success(), f.remove.warning(), f.complete(), e && f.set.label(e), m.onError.call(S, f.value, f.total)
                    }, transitionEvent: function () {
                        a = f.get.transitionEnd()
                    }, total: function (e) {
                        f.total = e
                    }, value: function (e) {
                        f.value = e
                    }, progress: function (e) {
                        var t, n = f.get.numericValue(e);
                        n === !1 && f.error(b.nonNumeric, e), f.has.total() ? (f.set.value(n), t = n / f.total * 100, f.debug("Calculating percent complete from total", t), f.set.percent(t)) : (t = n, f.debug("Setting value to exact percentage value", t), f.set.percent(t))
                    }
                }, setting: function (t, n) {
                    if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t); else {
                        if (n === i) return m[t];
                        m[t] = n
                    }
                }, internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, f, t); else {
                        if (n === i) return f[t];
                        f[t] = n
                    }
                }, debug: function () {
                    m.debug && (m.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), f.debug.apply(console, arguments)))
                }, verbose: function () {
                    m.verbose && m.debug && (m.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), f.verbose.apply(console, arguments)))
                }, error: function () {
                    f.error = Function.prototype.bind.call(console.error, console, m.name + ":"), f.error.apply(console, arguments)
                }, performance: {
                    log: function (e) {
                        var t, n, i;
                        m.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: S,
                            "Execution Time": n
                        })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500)
                    }, display: function () {
                        var t = m.name + ":", n = 0;
                        s = !1, clearTimeout(f.performance.timer), e.each(c, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), c = []
                    }
                }, invoke: function (t, n, a) {
                    var r, s, c, l = A;
                    return n = n || d, a = S || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/),
                        r = t.length - 1, e.each(t, function (n, o) {
                        var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[a]) && n != r) l = l[a]; else {
                            if (l[a] !== i) return s = l[a], !1;
                            if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (f.error(b.method, t), !1);
                            l = l[o]
                        }
                    })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                }
            }, u ? (A === i && f.initialize(), f.invoke(l)) : (A !== i && A.invoke("destroy"), f.initialize())
        }), o !== i ? o : this
    }, e.fn.progress.settings = {
        name: "Progress",
        namespace: "progress",
        debug: !1,
        verbose: !1,
        performance: !0,
        random: {min: 2, max: 5},
        duration: 300,
        autoSuccess: !0,
        showActivity: !0,
        limitValues: !0,
        label: "percent",
        precision: 0,
        framerate: 1e3 / 30,
        percent: !1,
        total: !1,
        value: !1,
        onChange: function (e, t, n) {
        },
        onSuccess: function (e) {
        },
        onActive: function (e, t) {
        },
        onError: function (e, t) {
        },
        onWarning: function (e, t) {
        },
        error: {
            method: "The method you called is not defined.",
            nonNumeric: "Progress value is non numeric",
            tooHigh: "Value specified is above 100%",
            tooLow: "Value specified is below 0%"
        },
        regExp: {variable: /\{\$*[A-z0-9]+\}/g},
        metadata: {percent: "percent", total: "total", value: "value"},
        selector: {bar: "> .bar", label: "> .label", progress: ".bar > .progress"},
        text: {active: !1, error: !1, success: !1, warning: !1, percent: "{percent}%", ratio: "{value} of {total}"},
        className: {active: "active", error: "error", success: "success", warning: "warning"}
    }
}(jQuery, window, document), function (e, t, n, i) {
    "use strict";
    e.fn.rating = function (t) {
        var n, o = e(this), a = o.selector || "", r = (new Date).getTime(), s = [], c = arguments[0],
            l = "string" == typeof c, u = [].slice.call(arguments, 1);
        return o.each(function () {
            var d,
                f = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.rating.settings, t) : e.extend({}, e.fn.rating.settings),
                m = f.namespace, g = f.className, p = f.metadata, h = f.selector, v = (f.error, "." + m),
                b = "module-" + m, y = this, x = e(this).data(b), C = e(this), w = C.find(h.icon);
            d = {
                initialize: function () {
                    d.verbose("Initializing rating module", f), 0 === w.length && d.setup.layout(), f.interactive ? d.enable() : d.disable(), d.set.rating(d.get.initialRating()), d.instantiate()
                }, instantiate: function () {
                    d.verbose("Instantiating module", f), x = d, C.data(b, d)
                }, destroy: function () {
                    d.verbose("Destroying previous instance", x), d.remove.events(), C.removeData(b)
                }, refresh: function () {
                    w = C.find(h.icon)
                }, setup: {
                    layout: function () {
                        var t = d.get.maxRating(), n = e.fn.rating.settings.templates.icon(t);
                        d.debug("Generating icon html dynamically"), C.html(n), d.refresh()
                    }
                }, event: {
                    mouseenter: function () {
                        var t = e(this);
                        t.nextAll().removeClass(g.selected), C.addClass(g.selected), t.addClass(g.selected).prevAll().addClass(g.selected)
                    }, mouseleave: function () {
                        C.removeClass(g.selected), w.removeClass(g.selected)
                    }, click: function () {
                        var t = e(this), n = d.get.rating(), i = w.index(t) + 1,
                            o = "auto" == f.clearable ? 1 === w.length : f.clearable;
                        o && n == i ? d.clearRating() : d.set.rating(i)
                    }
                }, clearRating: function () {
                    d.debug("Clearing current rating"), d.set.rating(0)
                }, bind: {
                    events: function () {
                        d.verbose("Binding events"), C.on("mouseenter" + v, h.icon, d.event.mouseenter).on("mouseleave" + v, h.icon, d.event.mouseleave).on("click" + v, h.icon, d.event.click)
                    }
                }, remove: {
                    events: function () {
                        d.verbose("Removing events"), C.off(v)
                    }
                }, enable: function () {
                    d.debug("Setting rating to interactive mode"), d.bind.events(), C.removeClass(g.disabled)
                }, disable: function () {
                    d.debug("Setting rating to read-only mode"), d.remove.events(), C.addClass(g.disabled)
                }, get: {
                    initialRating: function () {
                        return C.data(p.rating) !== i ? (C.removeData(p.rating), C.data(p.rating)) : f.initialRating
                    }, maxRating: function () {
                        return C.data(p.maxRating) !== i ? (C.removeData(p.maxRating), C.data(p.maxRating)) : f.maxRating
                    }, rating: function () {
                        var e = w.filter("." + g.active).length;
                        return d.verbose("Current rating retrieved", e), e
                    }
                }, set: {
                    rating: function (e) {
                        var t = e - 1 >= 0 ? e - 1 : 0, n = w.eq(t);
                        C.removeClass(g.selected), w.removeClass(g.selected).removeClass(g.active), e > 0 && (d.verbose("Setting current rating to", e), n.prevAll().andSelf().addClass(g.active)), f.onRate.call(y, e)
                    }
                }, setting: function (t, n) {
                    if (d.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t); else {
                        if (n === i) return f[t];
                        f[t] = n
                    }
                }, internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, d, t); else {
                        if (n === i) return d[t];
                        d[t] = n
                    }
                }, debug: function () {
                    f.debug && (f.performance ? d.performance.log(arguments) : (d.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), d.debug.apply(console, arguments)))
                }, verbose: function () {
                    f.verbose && f.debug && (f.performance ? d.performance.log(arguments) : (d.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), d.verbose.apply(console, arguments)))
                }, error: function () {
                    d.error = Function.prototype.bind.call(console.error, console, f.name + ":"), d.error.apply(console, arguments)
                }, performance: {
                    log: function (e) {
                        var t, n, i;
                        f.performance && (t = (new Date).getTime(), i = r || t, n = t - i, r = t, s.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: y,
                            "Execution Time": n
                        })), clearTimeout(d.performance.timer), d.performance.timer = setTimeout(d.performance.display, 500)
                    }, display: function () {
                        var t = f.name + ":", n = 0;
                        r = !1, clearTimeout(d.performance.timer), e.each(s, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", a && (t += " '" + a + "'"), o.length > 1 && (t += " (" + o.length + ")"), (console.group !== i || console.table !== i) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), s = []
                    }
                }, invoke: function (t, o, a) {
                    var r, s, c, l = x;
                    return o = o || u, a = y || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                        var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[a]) && n != r) l = l[a]; else {
                            if (l[a] !== i) return s = l[a], !1;
                            if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                            l = l[o]
                        }
                    })), e.isFunction(s) ? c = s.apply(a, o) : s !== i && (c = s), e.isArray(n) ? n.push(c) : n !== i ? n = [n, c] : c !== i && (n = c), s
                }
            }, l ? (x === i && d.initialize(), d.invoke(c)) : (x !== i && x.invoke("destroy"), d.initialize())
        }), n !== i ? n : this
    }, e.fn.rating.settings = {
        name: "Rating",
        namespace: "rating",
        debug: !1,
        verbose: !1,
        performance: !0,
        initialRating: 0,
        interactive: !0,
        maxRating: 4,
        clearable: "auto",
        onRate: function (e) {
        },
        error: {
            method: "The method you called is not defined",
            noMaximum: "No maximum rating specified. Cannot generate HTML automatically"
        },
        metadata: {rating: "rating", maxRating: "maxRating"},
        className: {active: "active", disabled: "disabled", selected: "selected", loading: "loading"},
        selector: {icon: ".icon"},
        templates: {
            icon: function (e) {
                for (var t = 1, n = ""; e >= t;) n += '<i class="icon"></i>', t++;
                return n
            }
        }
    }
}(jQuery, window, document), function (e, t, n, i) {
    "use strict";
    e.fn.search = function (o) {
        var a, r = e(this), s = r.selector || "", c = (new Date).getTime(), l = [], u = arguments[0],
            d = "string" == typeof u, f = [].slice.call(arguments, 1);
        return e(this).each(function () {
            var m,
                g = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.search.settings, o) : e.extend({}, e.fn.search.settings),
                p = g.className, h = g.metadata, v = g.regExp, b = g.fields, y = g.selector, x = g.error,
                C = g.namespace, w = "." + C, k = C + "-module", T = e(this), S = T.find(y.prompt),
                A = T.find(y.searchButton), D = T.find(y.results), R = (T.find(y.result), T.find(y.category), this),
                E = T.data(k);
            m = {
                initialize: function () {
                    m.verbose("Initializing module"), m.determine.searchFields(), m.bind.events(), m.set.type(), m.create.results(), m.instantiate()
                }, instantiate: function () {
                    m.verbose("Storing instance of module", m), E = m, T.data(k, m)
                }, destroy: function () {
                    m.verbose("Destroying instance"), T.off(w).removeData(k)
                }, bind: {
                    events: function () {
                        m.verbose("Binding events to search"), g.automatic && (T.on(m.get.inputEvent() + w, y.prompt, m.event.input), S.attr("autocomplete", "off")), T.on("focus" + w, y.prompt, m.event.focus).on("blur" + w, y.prompt, m.event.blur).on("keydown" + w, y.prompt, m.handleKeyboard).on("click" + w, y.searchButton, m.query).on("mousedown" + w, y.results, m.event.result.mousedown).on("mouseup" + w, y.results, m.event.result.mouseup).on("click" + w, y.result, m.event.result.click)
                    }
                }, determine: {
                    searchFields: function () {
                        o && o.searchFields !== i && (g.searchFields = o.searchFields)
                    }
                }, event: {
                    input: function () {
                        clearTimeout(m.timer), m.timer = setTimeout(m.query, g.searchDelay)
                    }, focus: function () {
                        m.set.focus(), m.has.minimumCharacters() && (m.query(), m.can.show() && m.showResults())
                    }, blur: function (e) {
                        var t = n.activeElement === this;
                        t || m.resultsClicked || (m.cancel.query(), m.remove.focus(), m.timer = setTimeout(m.hideResults, g.hideDelay))
                    }, result: {
                        mousedown: function () {
                            m.resultsClicked = !0
                        }, mouseup: function () {
                            m.resultsClicked = !1
                        }, click: function (n) {
                            m.debug("Search result selected");
                            var i = e(this), o = i.find(y.title).eq(0), a = i.find("a[href]").eq(0),
                                r = a.attr("href") || !1, s = a.attr("target") || !1,
                                c = (o.html(), o.length > 0 ? o.text() : !1), l = m.get.results(),
                                u = i.data(h.result) || m.get.result(c, l);
                            return e.isFunction(g.onSelect) && g.onSelect.call(R, u, l) === !1 ? void m.debug("Custom onSelect callback cancelled default select action") : (m.hideResults(), c && m.set.value(c), void (r && (m.verbose("Opening search link found in result", a), "_blank" == s || n.ctrlKey ? t.open(r) : t.location.href = r)))
                        }
                    }
                }, handleKeyboard: function (e) {
                    var t, n = T.find(y.result), i = T.find(y.category), o = n.index(n.filter("." + p.active)),
                        a = n.length, r = e.which,
                        s = {backspace: 8, enter: 13, escape: 27, upArrow: 38, downArrow: 40};
                    if (r == s.escape && (m.verbose("Escape key pressed, blurring search field"), S.trigger("blur")), m.is.visible()) if (r == s.enter) {
                        if (m.verbose("Enter key pressed, selecting active result"), n.filter("." + p.active).length > 0) return m.event.result.click.call(n.filter("." + p.active), e), e.preventDefault(), !1
                    } else r == s.upArrow ? (m.verbose("Up key pressed, changing active result"), t = 0 > o - 1 ? o : o - 1, i.removeClass(p.active), n.removeClass(p.active).eq(t).addClass(p.active).closest(i).addClass(p.active), e.preventDefault()) : r == s.downArrow && (m.verbose("Down key pressed, changing active result"), t = o + 1 >= a ? o : o + 1, i.removeClass(p.active), n.removeClass(p.active).eq(t).addClass(p.active).closest(i).addClass(p.active), e.preventDefault()); else r == s.enter && (m.verbose("Enter key pressed, executing query"), m.query(), m.set.buttonPressed(), S.one("keyup", m.remove.buttonFocus))
                }, setup: {
                    api: function () {
                        var e = {debug: g.debug, on: !1, cache: "local", action: "search", onError: m.error};
                        m.verbose("First request, initializing API"), T.api(e)
                    }
                }, can: {
                    useAPI: function () {
                        return e.fn.api !== i
                    }, show: function () {
                        return m.is.focused() && !m.is.visible() && !m.is.empty()
                    }, transition: function () {
                        return g.transition && e.fn.transition !== i && T.transition("is supported")
                    }
                }, is: {
                    empty: function () {
                        return "" === D.html()
                    }, visible: function () {
                        return D.filter(":visible").length > 0
                    }, focused: function () {
                        return S.filter(":focus").length > 0
                    }
                }, get: {
                    inputEvent: function () {
                        var e = S[0],
                            t = e !== i && e.oninput !== i ? "input" : e !== i && e.onpropertychange !== i ? "propertychange" : "keyup";
                        return t
                    }, value: function () {
                        return S.val()
                    }, results: function () {
                        var e = T.data(h.results);
                        return e
                    }, result: function (t, n) {
                        var o = ["title", "id"], a = !1;
                        return t = t !== i ? t : m.get.value(), n = n !== i ? n : m.get.results(), "category" === g.type ? (m.debug("Finding result that matches", t), e.each(n, function (n, i) {
                            return e.isArray(i.results) && (a = m.search.object(t, i.results, o)[0]) ? !1 : void 0
                        })) : (m.debug("Finding result in results object", t), a = m.search.object(t, n, o)[0]), a || !1
                    }
                }, set: {
                    focus: function () {
                        T.addClass(p.focus)
                    }, loading: function () {
                        T.addClass(p.loading)
                    }, value: function (e) {
                        m.verbose("Setting search input value", e), S.val(e)
                    }, type: function (e) {
                        e = e || g.type, "category" == g.type && T.addClass(g.type)
                    }, buttonPressed: function () {
                        A.addClass(p.pressed)
                    }
                }, remove: {
                    loading: function () {
                        T.removeClass(p.loading)
                    }, focus: function () {
                        T.removeClass(p.focus)
                    }, buttonPressed: function () {
                        A.removeClass(p.pressed)
                    }
                }, query: function () {
                    var t = m.get.value(), n = m.read.cache(t);
                    m.has.minimumCharacters() ? n ? (m.debug("Reading result from cache", t), m.save.results(n.results), m.addResults(n.html), m.inject.id(n.results)) : (m.debug("Querying for", t), e.isPlainObject(g.source) || e.isArray(g.source) ? m.search.local(t) : m.can.useAPI() ? m.search.remote(t) : m.error(x.source), g.onSearchQuery.call(R, t)) : m.hideResults()
                }, search: {
                    local: function (e) {
                        var t, n = m.search.object(e, g.content);
                        m.set.loading(), m.save.results(n), m.debug("Returned local search results", n), t = m.generateResults({results: n}), m.remove.loading(), m.addResults(t), m.inject.id(n), m.write.cache(e, {
                            html: t,
                            results: n
                        })
                    }, remote: function (t) {
                        var n = {
                            onSuccess: function (e) {
                                m.parse.response.call(R, e, t)
                            }, onFailure: function () {
                                m.displayMessage(x.serverError)
                            }, urlData: {query: t}
                        };
                        T.api("get request") || m.setup.api(), e.extend(!0, n, g.apiSettings), m.debug("Executing search", n), m.cancel.query(), T.api("setting", n).api("query")
                    }, object: function (t, n, o) {
                        var a = [], r = [], s = t.toString().replace(v.escape, "\\$&"),
                            c = new RegExp(v.beginsWith + s, "i"), l = function (t, n) {
                                var i = -1 == e.inArray(n, a), o = -1 == e.inArray(n, r);
                                i && o && t.push(n)
                            };
                        return n = n || g.source, o = o !== i ? o : g.searchFields, e.isArray(o) || (o = [o]), n === i || n === !1 ? (m.error(x.source), []) : (e.each(o, function (i, o) {
                            e.each(n, function (e, n) {
                                var i = "string" == typeof n[o];
                                i && (-1 !== n[o].search(c) ? l(a, n) : g.searchFullText && m.fuzzySearch(t, n[o]) && l(r, n))
                            })
                        }), e.merge(a, r))
                    }
                }, fuzzySearch: function (e, t) {
                    var n = t.length, i = e.length;
                    if ("string" != typeof e) return !1;
                    if (e = e.toLowerCase(), t = t.toLowerCase(), i > n) return !1;
                    if (i === n) return e === t;
                    e:for (var o = 0, a = 0; i > o; o++) {
                        for (var r = e.charCodeAt(o); n > a;) if (t.charCodeAt(a++) === r) continue e;
                        return !1
                    }
                    return !0
                }, parse: {
                    response: function (e, t) {
                        var n = m.generateResults(e);
                        m.verbose("Parsing server response", e), e !== i && t !== i && e[b.results] !== i && (m.addResults(n), m.inject.id(e[b.results]), m.write.cache(t, {
                            html: n,
                            results: e[b.results]
                        }), m.save.results(e[b.results]))
                    }
                }, cancel: {
                    query: function () {
                        m.can.useAPI() && T.api("abort")
                    }
                }, has: {
                    minimumCharacters: function () {
                        var e = m.get.value(), t = e.length;
                        return t >= g.minCharacters
                    }
                }, clear: {
                    cache: function (e) {
                        var t = T.data(h.cache);
                        e ? e && t && t[e] && (m.debug("Removing value from cache", e), delete t[e], T.data(h.cache, t)) : (m.debug("Clearing cache", e), T.removeData(h.cache))
                    }
                }, read: {
                    cache: function (e) {
                        var t = T.data(h.cache);
                        return g.cache ? (m.verbose("Checking cache for generated html for query", e), "object" == typeof t && t[e] !== i ? t[e] : !1) : !1
                    }
                }, create: {
                    id: function (e, t) {
                        var n, o, a = e + 1;
                        return t !== i ? (n = String.fromCharCode(97 + t), o = n + a, m.verbose("Creating category result id", o)) : (o = a, m.verbose("Creating result id", o)), o
                    }, results: function () {
                        0 === D.length && (D = e("<div />").addClass(p.results).appendTo(T))
                    }
                }, inject: {
                    result: function (e, t, n) {
                        m.verbose("Injecting result into results");
                        var o = n !== i ? D.children().eq(n).children(y.result).eq(t) : D.children(y.result).eq(t);
                        m.verbose("Injecting results metadata", o), o.data(h.result, e)
                    }, id: function (t) {
                        m.debug("Injecting unique ids into results");
                        var n = 0, o = 0;
                        return "category" === g.type ? e.each(t, function (t, a) {
                            o = 0, e.each(a.results, function (e, t) {
                                var r = a.results[e];
                                r.id === i && (r.id = m.create.id(o, n)), m.inject.result(r, o, n), o++
                            }), n++
                        }) : e.each(t, function (e, n) {
                            var a = t[e];
                            a.id === i && (a.id = m.create.id(o)), m.inject.result(a, o), o++
                        }), t
                    }
                }, save: {
                    results: function (e) {
                        m.verbose("Saving current search results to metadata", e), T.data(h.results, e)
                    }
                }, write: {
                    cache: function (e, t) {
                        var n = T.data(h.cache) !== i ? T.data(h.cache) : {};
                        g.cache && (m.verbose("Writing generated html to cache", e, t), n[e] = t, T.data(h.cache, n))
                    }
                }, addResults: function (t) {
                    return e.isFunction(g.onResultsAdd) && g.onResultsAdd.call(D, t) === !1 ? (m.debug("onResultsAdd callback cancelled default action"), !1) : (D.html(t), void (m.can.show() && m.showResults()))
                }, showResults: function () {
                    m.is.visible() || (m.can.transition() ? (m.debug("Showing results with css animations"), D.transition({
                        animation: g.transition + " in",
                        debug: g.debug,
                        verbose: g.verbose,
                        duration: g.duration,
                        queue: !0
                    })) : (m.debug("Showing results with javascript"), D.stop().fadeIn(g.duration, g.easing)), g.onResultsOpen.call(D))
                }, hideResults: function () {
                    m.is.visible() && (m.can.transition() ? (m.debug("Hiding results with css animations"), D.transition({
                        animation: g.transition + " out",
                        debug: g.debug,
                        verbose: g.verbose,
                        duration: g.duration,
                        queue: !0
                    })) : (m.debug("Hiding results with javascript"), D.stop().fadeOut(g.duration, g.easing)), g.onResultsClose.call(D))
                }, generateResults: function (t) {
                    m.debug("Generating html from response", t);
                    var n = g.templates[g.type], i = e.isPlainObject(t[b.results]) && !e.isEmptyObject(t[b.results]),
                        o = e.isArray(t[b.results]) && t[b.results].length > 0, a = "";
                    return i || o ? (g.maxResults > 0 && (i ? "standard" == g.type && m.error(x.maxResults) : t[b.results] = t[b.results].slice(0, g.maxResults)), e.isFunction(n) ? a = n(t, b) : m.error(x.noTemplate, !1)) : a = m.displayMessage(x.noResults, "empty"), g.onResults.call(R, t), a
                }, displayMessage: function (e, t) {
                    return t = t || "standard", m.debug("Displaying message", e, t), m.addResults(g.templates.message(e, t)), g.templates.message(e, t)
                }, setting: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, g, t); else {
                        if (n === i) return g[t];
                        g[t] = n
                    }
                }, internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, m, t); else {
                        if (n === i) return m[t];
                        m[t] = n
                    }
                }, debug: function () {
                    g.debug && (g.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), m.debug.apply(console, arguments)))
                }, verbose: function () {
                    g.verbose && g.debug && (g.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), m.verbose.apply(console, arguments)))
                }, error: function () {
                    m.error = Function.prototype.bind.call(console.error, console, g.name + ":"), m.error.apply(console, arguments)
                }, performance: {
                    log: function (e) {
                        var t, n, i;
                        g.performance && (t = (new Date).getTime(), i = c || t, n = t - i, c = t, l.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: R,
                            "Execution Time": n
                        })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 500)
                    }, display: function () {
                        var t = g.name + ":", n = 0;
                        c = !1, clearTimeout(m.performance.timer), e.each(l, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", s && (t += " '" + s + "'"), r.length > 1 && (t += " (" + r.length + ")"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), l = []
                    }
                }, invoke: function (t, n, o) {
                    var r, s, c, l = E;
                    return n = n || f, o = R || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                        var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[a]) && n != r) l = l[a]; else {
                            if (l[a] !== i) return s = l[a], !1;
                            if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                            l = l[o]
                        }
                    })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                }
            }, d ? (E === i && m.initialize(), m.invoke(u)) : (E !== i && E.invoke("destroy"), m.initialize())
        }), a !== i ? a : this
    }, e.fn.search.settings = {
        name: "Search",
        namespace: "search",
        debug: !1,
        verbose: !1,
        performance: !0,
        type: "standard",
        minCharacters: 1,
        apiSettings: !1,
        source: !1,
        searchFields: ["title", "description"],
        displayField: "",
        searchFullText: !0,
        automatic: !0,
        hideDelay: 0,
        searchDelay: 200,
        maxResults: 7,
        cache: !0,
        transition: "scale",
        duration: 200,
        easing: "easeOutExpo",
        onSelect: !1,
        onResultsAdd: !1,
        onSearchQuery: function (e) {
        },
        onResults: function (e) {
        },
        onResultsOpen: function () {
        },
        onResultsClose: function () {
        },
        className: {
            active: "active",
            empty: "empty",
            focus: "focus",
            loading: "loading",
            results: "results",
            pressed: "down"
        },
        error: {
            source: "Cannot search. No source used, and Semantic API module was not included",
            noResults: "Your search returned no results",
            logging: "Error in debug logging, exiting.",
            noEndpoint: "No search endpoint was specified",
            noTemplate: "A valid template name was not specified.",
            serverError: "There was an issue querying the server.",
            maxResults: "Results must be an array to use maxResults setting",
            method: "The method you called is not defined."
        },
        metadata: {cache: "cache", results: "results", result: "result"},
        regExp: {escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, beginsWith: "(?:s|^)"},
        fields: {
            categories: "results",
            categoryName: "name",
            categoryResults: "results",
            description: "description",
            image: "image",
            price: "price",
            results: "results",
            title: "title",
            url: "url",
            action: "action",
            actionText: "text",
            actionURL: "url"
        },
        selector: {
            prompt: ".prompt",
            searchButton: ".search.button",
            results: ".results",
            category: ".category",
            result: ".result",
            title: ".title, .name"
        },
        templates: {
            escape: function (e) {
                var t = /[&<>"'`]/g, n = /[&<>"'`]/,
                    i = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"},
                    o = function (e) {
                        return i[e]
                    };
                return n.test(e) ? e.replace(t, o) : e
            }, message: function (e, t) {
                var n = "";
                return e !== i && t !== i && (n += '<div class="message ' + t + '">', n += "empty" == t ? '<div class="header">No Results</div class="header"><div class="description">' + e + '</div class="description">' : ' <div class="description">' + e + "</div>", n += "</div>"), n
            }, category: function (t, n) {
                var o = "";
                e.fn.search.settings.templates.escape;
                return t[n.categoryResults] !== i ? (e.each(t[n.categoryResults], function (t, a) {
                    a[n.results] !== i && a.results.length > 0 && (o += '<div class="category">', a[n.categoryName] !== i && (o += '<div class="name">' + a[n.categoryName] + "</div>"), e.each(a.results, function (e, t) {
                        o += t[n.url] ? '<a class="result" href="' + t[n.url] + '">' : '<a class="result">', t[n.image] !== i && (o += '<div class="image"> <img src="' + t[n.image] + '"></div>'), o += '<div class="content">', t[n.price] !== i && (o += '<div class="price">' + t[n.price] + "</div>"), t[n.title] !== i && (o += '<div class="title">' + t[n.title] + "</div>"), t[n.description] !== i && (o += '<div class="description">' + t[n.description] + "</div>"), o += "</div>", o += "</a>"
                    }), o += "</div>")
                }), t[n.action] && (o += '<a href="' + t[n.action][n.actionURL] + '" class="action">' + t[n.action][n.actionText] + "</a>"), o) : !1
            }, standard: function (t, n) {
                var o = "";
                return t[n.results] !== i ? (e.each(t[n.results], function (e, t) {
                    o += t[n.url] ? '<a class="result" href="' + t[n.url] + '">' : '<a class="result">', t[n.image] !== i && (o += '<div class="image"> <img src="' + t[n.image] + '"></div>'), o += '<div class="content">', t[n.price] !== i && (o += '<div class="price">' + t[n.price] + "</div>"), t[n.title] !== i && (o += '<div class="title">' + t[n.title] + "</div>"), t[n.description] !== i && (o += '<div class="description">' + t[n.description] + "</div>"), o += "</div>", o += "</a>"
                }), t[n.action] && (o += '<a href="' + t[n.action][n.actionURL] + '" class="action">' + t[n.action][n.actionText] + "</a>"), o) : !1
            }
        }
    }
}(jQuery, window, document), function (e, t, n, i) {
    "use strict";
    e.fn.shape = function (o) {
        var a, r = e(this), s = (e("body"), (new Date).getTime()), c = [], l = arguments[0], u = "string" == typeof l,
            d = [].slice.call(arguments, 1),
            f = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                setTimeout(e, 0)
            };
        return r.each(function () {
            var t, m, g, p = r.selector || "",
                h = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.shape.settings, o) : e.extend({}, e.fn.shape.settings),
                v = h.namespace, b = h.selector, y = h.error, x = h.className, C = "." + v, w = "module-" + v,
                k = e(this), T = k.find(b.sides), S = k.find(b.side), A = !1, D = this, R = k.data(w);
            g = {
                initialize: function () {
                    g.verbose("Initializing module for", D), g.set.defaultSide(), g.instantiate()
                }, instantiate: function () {
                    g.verbose("Storing instance of module", g), R = g, k.data(w, R)
                }, destroy: function () {
                    g.verbose("Destroying previous module for", D), k.removeData(w).off(C)
                }, refresh: function () {
                    g.verbose("Refreshing selector cache for", D), k = e(D), T = e(this).find(b.shape), S = e(this).find(b.side)
                }, repaint: function () {
                    g.verbose("Forcing repaint event");
                    var e = T[0] || n.createElement("div");
                    e.offsetWidth
                }, animate: function (e, n) {
                    g.verbose("Animating box with properties", e), n = n || function (e) {
                        g.verbose("Executing animation callback"), e !== i && e.stopPropagation(), g.reset(), g.set.active()
                    }, h.beforeChange.call(m[0]), g.get.transitionEvent() ? (g.verbose("Starting CSS animation"), k.addClass(x.animating), T.css(e).one(g.get.transitionEvent(), n), g.set.duration(h.duration), f(function () {
                        k.addClass(x.animating), t.addClass(x.hidden)
                    })) : n()
                }, queue: function (e) {
                    g.debug("Queueing animation of", e), T.one(g.get.transitionEvent(), function () {
                        g.debug("Executing queued animation"), setTimeout(function () {
                            k.shape(e)
                        }, 0)
                    })
                }, reset: function () {
                    g.verbose("Animating states reset"), k.removeClass(x.animating).attr("style", "").removeAttr("style"), T.attr("style", "").removeAttr("style"), S.attr("style", "").removeAttr("style").removeClass(x.hidden), m.removeClass(x.animating).attr("style", "").removeAttr("style")
                }, is: {
                    complete: function () {
                        return S.filter("." + x.active)[0] == m[0]
                    }, animating: function () {
                        return k.hasClass(x.animating)
                    }
                }, set: {
                    defaultSide: function () {
                        t = k.find("." + h.className.active), m = t.next(b.side).length > 0 ? t.next(b.side) : k.find(b.side).first(), A = !1, g.verbose("Active side set to", t), g.verbose("Next side set to", m)
                    }, duration: function (e) {
                        e = e || h.duration, e = "number" == typeof e ? e + "ms" : e, g.verbose("Setting animation duration", e), (h.duration || 0 === h.duration) && T.add(S).css({
                            "-webkit-transition-duration": e,
                            "-moz-transition-duration": e,
                            "-ms-transition-duration": e,
                            "-o-transition-duration": e,
                            "transition-duration": e
                        })
                    }, currentStageSize: function () {
                        var e = k.find("." + h.className.active), t = e.outerWidth(!0), n = e.outerHeight(!0);
                        k.css({width: t, height: n})
                    }, stageSize: function () {
                        var e = k.clone().addClass(x.loading), t = e.find("." + h.className.active),
                            n = A ? e.find(b.side).eq(A) : t.next(b.side).length > 0 ? t.next(b.side) : e.find(b.side).first(),
                            i = {};
                        g.set.currentStageSize(), t.removeClass(x.active), n.addClass(x.active), e.insertAfter(k), i = {
                            width: n.outerWidth(!0),
                            height: n.outerHeight(!0)
                        }, e.remove(), k.css(i), g.verbose("Resizing stage to fit new content", i)
                    }, nextSide: function (e) {
                        A = e, m = S.filter(e), A = S.index(m), 0 === m.length && (g.set.defaultSide(), g.error(y.side)), g.verbose("Next side manually set to", m)
                    }, active: function () {
                        g.verbose("Setting new side to active", m), S.removeClass(x.active), m.addClass(x.active), h.onChange.call(m[0]), g.set.defaultSide()
                    }
                }, flip: {
                    up: function () {
                        return !g.is.complete() || g.is.animating() || h.allowRepeats ? void (g.is.animating() ? g.queue("flip up") : (g.debug("Flipping up", m), g.set.stageSize(), g.stage.above(), g.animate(g.get.transform.up()))) : void g.debug("Side already visible", m)
                    }, down: function () {
                        return !g.is.complete() || g.is.animating() || h.allowRepeats ? void (g.is.animating() ? g.queue("flip down") : (g.debug("Flipping down", m), g.set.stageSize(), g.stage.below(), g.animate(g.get.transform.down()))) : void g.debug("Side already visible", m)
                    }, left: function () {
                        return !g.is.complete() || g.is.animating() || h.allowRepeats ? void (g.is.animating() ? g.queue("flip left") : (g.debug("Flipping left", m), g.set.stageSize(), g.stage.left(), g.animate(g.get.transform.left()))) : void g.debug("Side already visible", m)
                    }, right: function () {
                        return !g.is.complete() || g.is.animating() || h.allowRepeats ? void (g.is.animating() ? g.queue("flip right") : (g.debug("Flipping right", m), g.set.stageSize(), g.stage.right(), g.animate(g.get.transform.right()))) : void g.debug("Side already visible", m)
                    }, over: function () {
                        return !g.is.complete() || g.is.animating() || h.allowRepeats ? void (g.is.animating() ? g.queue("flip over") : (g.debug("Flipping over", m), g.set.stageSize(), g.stage.behind(), g.animate(g.get.transform.over()))) : void g.debug("Side already visible", m)
                    }, back: function () {
                        return !g.is.complete() || g.is.animating() || h.allowRepeats ? void (g.is.animating() ? g.queue("flip back") : (g.debug("Flipping back", m), g.set.stageSize(), g.stage.behind(), g.animate(g.get.transform.back()))) : void g.debug("Side already visible", m)
                    }
                }, get: {
                    transform: {
                        up: function () {
                            var e = {y: -((t.outerHeight(!0) - m.outerHeight(!0)) / 2), z: -(t.outerHeight(!0) / 2)};
                            return {transform: "translateY(" + e.y + "px) translateZ(" + e.z + "px) rotateX(-90deg)"}
                        }, down: function () {
                            var e = {y: -((t.outerHeight(!0) - m.outerHeight(!0)) / 2), z: -(t.outerHeight(!0) / 2)};
                            return {transform: "translateY(" + e.y + "px) translateZ(" + e.z + "px) rotateX(90deg)"}
                        }, left: function () {
                            var e = {x: -((t.outerWidth(!0) - m.outerWidth(!0)) / 2), z: -(t.outerWidth(!0) / 2)};
                            return {transform: "translateX(" + e.x + "px) translateZ(" + e.z + "px) rotateY(90deg)"}
                        }, right: function () {
                            var e = {x: -((t.outerWidth(!0) - m.outerWidth(!0)) / 2), z: -(t.outerWidth(!0) / 2)};
                            return {transform: "translateX(" + e.x + "px) translateZ(" + e.z + "px) rotateY(-90deg)"}
                        }, over: function () {
                            var e = {x: -((t.outerWidth(!0) - m.outerWidth(!0)) / 2)};
                            return {transform: "translateX(" + e.x + "px) rotateY(180deg)"}
                        }, back: function () {
                            var e = {x: -((t.outerWidth(!0) - m.outerWidth(!0)) / 2)};
                            return {transform: "translateX(" + e.x + "px) rotateY(-180deg)"}
                        }
                    }, transitionEvent: function () {
                        var e, t = n.createElement("element"), o = {
                            transition: "transitionend",
                            OTransition: "oTransitionEnd",
                            MozTransition: "transitionend",
                            WebkitTransition: "webkitTransitionEnd"
                        };
                        for (e in o) if (t.style[e] !== i) return o[e]
                    }, nextSide: function () {
                        return t.next(b.side).length > 0 ? t.next(b.side) : k.find(b.side).first()
                    }
                }, stage: {
                    above: function () {
                        var e = {
                            origin: (t.outerHeight(!0) - m.outerHeight(!0)) / 2,
                            depth: {active: m.outerHeight(!0) / 2, next: t.outerHeight(!0) / 2}
                        };
                        g.verbose("Setting the initial animation position as above", m, e), T.css({transform: "translateZ(-" + e.depth.active + "px)"}), t.css({transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"}), m.addClass(x.animating).css({
                            top: e.origin + "px",
                            transform: "rotateX(90deg) translateZ(" + e.depth.next + "px)"
                        })
                    }, below: function () {
                        var e = {
                            origin: (t.outerHeight(!0) - m.outerHeight(!0)) / 2,
                            depth: {active: m.outerHeight(!0) / 2, next: t.outerHeight(!0) / 2}
                        };
                        g.verbose("Setting the initial animation position as below", m, e), T.css({transform: "translateZ(-" + e.depth.active + "px)"}), t.css({transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"}), m.addClass(x.animating).css({
                            top: e.origin + "px",
                            transform: "rotateX(-90deg) translateZ(" + e.depth.next + "px)"
                        })
                    }, left: function () {
                        var e = {active: t.outerWidth(!0), next: m.outerWidth(!0)},
                            n = {origin: (e.active - e.next) / 2, depth: {active: e.next / 2, next: e.active / 2}};
                        g.verbose("Setting the initial animation position as left", m, n), T.css({transform: "translateZ(-" + n.depth.active + "px)"}), t.css({transform: "rotateY(0deg) translateZ(" + n.depth.active + "px)"}), m.addClass(x.animating).css({
                            left: n.origin + "px",
                            transform: "rotateY(-90deg) translateZ(" + n.depth.next + "px)"
                        })
                    }, right: function () {
                        var e = {active: t.outerWidth(!0), next: m.outerWidth(!0)},
                            n = {origin: (e.active - e.next) / 2, depth: {active: e.next / 2, next: e.active / 2}};
                        g.verbose("Setting the initial animation position as left", m, n), T.css({transform: "translateZ(-" + n.depth.active + "px)"}), t.css({transform: "rotateY(0deg) translateZ(" + n.depth.active + "px)"}), m.addClass(x.animating).css({
                            left: n.origin + "px",
                            transform: "rotateY(90deg) translateZ(" + n.depth.next + "px)"
                        })
                    }, behind: function () {
                        var e = {active: t.outerWidth(!0), next: m.outerWidth(!0)},
                            n = {origin: (e.active - e.next) / 2, depth: {active: e.next / 2, next: e.active / 2}};
                        g.verbose("Setting the initial animation position as behind", m, n), t.css({transform: "rotateY(0deg)"}), m.addClass(x.animating).css({
                            left: n.origin + "px",
                            transform: "rotateY(-180deg)"
                        })
                    }
                }, setting: function (t, n) {
                    if (g.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, h, t); else {
                        if (n === i) return h[t];
                        h[t] = n
                    }
                }, internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, g, t); else {
                        if (n === i) return g[t];
                        g[t] = n
                    }
                }, debug: function () {
                    h.debug && (h.performance ? g.performance.log(arguments) : (g.debug = Function.prototype.bind.call(console.info, console, h.name + ":"), g.debug.apply(console, arguments)))
                }, verbose: function () {
                    h.verbose && h.debug && (h.performance ? g.performance.log(arguments) : (g.verbose = Function.prototype.bind.call(console.info, console, h.name + ":"), g.verbose.apply(console, arguments)))
                }, error: function () {
                    g.error = Function.prototype.bind.call(console.error, console, h.name + ":"), g.error.apply(console, arguments)
                }, performance: {
                    log: function (e) {
                        var t, n, i;
                        h.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: D,
                            "Execution Time": n
                        })), clearTimeout(g.performance.timer), g.performance.timer = setTimeout(g.performance.display, 500)
                    }, display: function () {
                        var t = h.name + ":", n = 0;
                        s = !1, clearTimeout(g.performance.timer), e.each(c, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", p && (t += " '" + p + "'"), r.length > 1 && (t += " (" + r.length + ")"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), c = []
                    }
                }, invoke: function (t, n, o) {
                    var r, s, c, l = R;
                    return n = n || d, o = D || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                        var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[a]) && n != r) l = l[a]; else {
                            if (l[a] !== i) return s = l[a], !1;
                            if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                            l = l[o]
                        }
                    })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                }
            }, u ? (R === i && g.initialize(), g.invoke(l)) : (R !== i && R.invoke("destroy"), g.initialize())
        }), a !== i ? a : this
    }, e.fn.shape.settings = {
        name: "Shape",
        debug: !1,
        verbose: !1,
        performance: !0,
        namespace: "shape",
        beforeChange: function () {
        },
        onChange: function () {
        },
        allowRepeats: !1,
        duration: !1,
        error: {
            side: "You tried to switch to a side that does not exist.",
            method: "The method you called is not defined"
        },
        className: {animating: "animating", hidden: "hidden", loading: "loading", active: "active"},
        selector: {sides: ".sides", side: ".side"}
    }
}(jQuery, window, document), function (e, t, n, i) {
    "use strict";
    e.fn.sidebar = function (o) {
        var a, r = e(this), s = e(t), c = e(n), l = e("html"), u = e("head"), d = r.selector || "",
            f = (new Date).getTime(), m = [], g = arguments[0], p = "string" == typeof g,
            h = [].slice.call(arguments, 1),
            v = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                setTimeout(e, 0)
            };
        return r.each(function () {
            var r, b, y, x, C, w,
                k = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.sidebar.settings, o) : e.extend({}, e.fn.sidebar.settings),
                T = k.selector, S = k.className, A = k.namespace, D = k.regExp, R = k.error, E = "." + A,
                P = "module-" + A, F = e(this), O = e(k.context), q = F.children(T.sidebar), j = O.children(T.fixed),
                I = O.children(T.pusher), z = this, N = F.data(P);
            w = {
                initialize: function () {
                    w.debug("Initializing sidebar", o), w.create.id(), C = w.get.transitionEvent(), w.is.ios() && w.set.ios(), k.delaySetup ? v(w.setup.layout) : w.setup.layout(), v(function () {
                        w.setup.cache()
                    }), w.instantiate()
                }, instantiate: function () {
                    w.verbose("Storing instance of module", w), N = w, F.data(P, w)
                }, create: {
                    id: function () {
                        y = (Math.random().toString(16) + "000000000").substr(2, 8), b = "." + y, w.verbose("Creating unique id for element", y)
                    }
                }, destroy: function () {
                    w.verbose("Destroying previous module for", F), F.off(E).removeData(P), w.is.ios() && w.remove.ios(), O.off(b), s.off(b), c.off(b)
                }, event: {
                    clickaway: function (e) {
                        var t = I.find(e.target).length > 0 || I.is(e.target), n = O.is(e.target);
                        t && (w.verbose("User clicked on dimmed page"), w.hide()), n && (w.verbose("User clicked on dimmable context (scaled out page)"), w.hide())
                    }, touch: function (e) {
                    }, containScroll: function (e) {
                        z.scrollTop <= 0 && (z.scrollTop = 1), z.scrollTop + z.offsetHeight >= z.scrollHeight && (z.scrollTop = z.scrollHeight - z.offsetHeight - 1)
                    }, scroll: function (t) {
                        0 === e(t.target).closest(T.sidebar).length && t.preventDefault()
                    }
                }, bind: {
                    clickaway: function () {
                        w.verbose("Adding clickaway events to context", O), k.closable && O.on("click" + b, w.event.clickaway).on("touchend" + b, w.event.clickaway)
                    }, scrollLock: function () {
                        k.scrollLock && (w.debug("Disabling page scroll"), s.on("DOMMouseScroll" + b, w.event.scroll)), w.verbose("Adding events to contain sidebar scroll"), c.on("touchmove" + b, w.event.touch), F.on("scroll" + E, w.event.containScroll)
                    }
                }, unbind: {
                    clickaway: function () {
                        w.verbose("Removing clickaway events from context", O), O.off(b)
                    }, scrollLock: function () {
                        w.verbose("Removing scroll lock from page"), c.off(b), s.off(b), F.off("scroll" + E)
                    }
                }, add: {
                    inlineCSS: function () {
                        var t, n = w.cache.width || F.outerWidth(), i = w.cache.height || F.outerHeight(),
                            o = w.is.rtl(), a = w.get.direction(), s = {left: n, right: -n, top: i, bottom: -i};
                        o && (w.verbose("RTL detected, flipping widths"), s.left = -n, s.right = n), t = "<style>", "left" === a || "right" === a ? (w.debug("Adding CSS rules for animation distance", n), t += " .ui.visible." + a + ".sidebar ~ .fixed, .ui.visible." + a + ".sidebar ~ .pusher {   -webkit-transform: translate3d(" + s[a] + "px, 0, 0);           transform: translate3d(" + s[a] + "px, 0, 0); }") : ("top" === a || "bottom" == a) && (t += " .ui.visible." + a + ".sidebar ~ .fixed, .ui.visible." + a + ".sidebar ~ .pusher {   -webkit-transform: translate3d(0, " + s[a] + "px, 0);           transform: translate3d(0, " + s[a] + "px, 0); }"), w.is.ie() && ("left" === a || "right" === a ? (w.debug("Adding CSS rules for animation distance", n), t += " body.pushable > .ui.visible." + a + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(" + s[a] + "px, 0, 0);           transform: translate3d(" + s[a] + "px, 0, 0); }") : ("top" === a || "bottom" == a) && (t += " body.pushable > .ui.visible." + a + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, " + s[a] + "px, 0);           transform: translate3d(0, " + s[a] + "px, 0); }"), t += " body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0px, 0, 0);           transform: translate3d(0px, 0, 0); }"), t += "</style>", r = e(t).appendTo(u), w.debug("Adding sizing css to head", r)
                    }
                }, refresh: function () {
                    w.verbose("Refreshing selector cache"), O = e(k.context), q = O.children(T.sidebar), I = O.children(T.pusher), j = O.children(T.fixed), w.clear.cache()
                }, refreshSidebars: function () {
                    w.verbose("Refreshing other sidebars"), q = O.children(T.sidebar)
                }, repaint: function () {
                    w.verbose("Forcing repaint event"), z.style.display = "none";
                    z.offsetHeight;
                    z.scrollTop = z.scrollTop, z.style.display = ""
                }, setup: {
                    cache: function () {
                        w.cache = {width: F.outerWidth(), height: F.outerHeight(), rtl: "rtl" == F.css("direction")}
                    }, layout: function () {
                        0 === O.children(T.pusher).length && (w.debug("Adding wrapper element for sidebar"), w.error(R.pusher), I = e('<div class="pusher" />'), O.children().not(T.omitted).not(q).wrapAll(I), w.refresh()), (0 === F.nextAll(T.pusher).length || F.nextAll(T.pusher)[0] !== I[0]) && (w.debug("Moved sidebar to correct parent element"), w.error(R.movedSidebar, z), F.detach().prependTo(O), w.refresh()), w.clear.cache(), w.set.pushable(), w.set.direction()
                    }
                }, attachEvents: function (t, n) {
                    var i = e(t);
                    n = e.isFunction(w[n]) ? w[n] : w.toggle, i.length > 0 ? (w.debug("Attaching sidebar events to element", t, n), i.on("click" + E, n)) : w.error(R.notFound, t)
                }, show: function (t) {
                    if (t = e.isFunction(t) ? t : function () {
                    }, w.is.hidden()) {
                        if (w.refreshSidebars(), k.overlay && (w.error(R.overlay), k.transition = "overlay"), w.refresh(), w.othersActive()) if (w.debug("Other sidebars currently visible"), k.exclusive) {
                            if ("overlay" != k.transition) return void w.hideOthers(w.show);
                            w.hideOthers()
                        } else k.transition = "overlay";
                        w.pushPage(function () {
                            t.call(z), k.onShow.call(z)
                        }), k.onChange.call(z), k.onVisible.call(z)
                    } else w.debug("Sidebar is already visible")
                }, hide: function (t) {
                    t = e.isFunction(t) ? t : function () {
                    }, (w.is.visible() || w.is.animating()) && (w.debug("Hiding sidebar", t), w.refreshSidebars(), w.pullPage(function () {
                        t.call(z), k.onHidden.call(z)
                    }), k.onChange.call(z), k.onHide.call(z))
                }, othersAnimating: function () {
                    return q.not(F).filter("." + S.animating).length > 0
                }, othersVisible: function () {
                    return q.not(F).filter("." + S.visible).length > 0
                }, othersActive: function () {
                    return w.othersVisible() || w.othersAnimating()
                }, hideOthers: function (e) {
                    var t = q.not(F).filter("." + S.visible), n = t.length, i = 0;
                    e = e || function () {
                    }, t.sidebar("hide", function () {
                        i++, i == n && e()
                    })
                }, toggle: function () {
                    w.verbose("Determining toggled direction"), w.is.hidden() ? w.show() : w.hide()
                }, pushPage: function (t) {
                    var n, i, o, a = w.get.transition(), r = "overlay" === a || w.othersActive() ? F : I;
                    t = e.isFunction(t) ? t : function () {
                    }, "scale down" == k.transition && w.scrollToTop(), w.set.transition(a), w.repaint(), n = function () {
                        w.bind.clickaway(), w.add.inlineCSS(), w.set.animating(), w.set.visible()
                    }, i = function () {
                        w.set.dimmed()
                    }, o = function (e) {
                        e.target == r[0] && (r.off(C + b, o), w.remove.animating(), w.bind.scrollLock(), t.call(z))
                    }, r.off(C + b), r.on(C + b, o), v(n), k.dimPage && !w.othersVisible() && v(i)
                }, pullPage: function (t) {
                    var n, i, o = w.get.transition(), a = "overlay" == o || w.othersActive() ? F : I;
                    t = e.isFunction(t) ? t : function () {
                    }, w.verbose("Removing context push state", w.get.direction()), w.unbind.clickaway(), w.unbind.scrollLock(), n = function () {
                        w.set.transition(o), w.set.animating(), w.remove.visible(), k.dimPage && !w.othersVisible() && I.removeClass(S.dimmed)
                    }, i = function (e) {
                        e.target == a[0] && (a.off(C + b, i), w.remove.animating(), w.remove.transition(), w.remove.inlineCSS(), ("scale down" == o || k.returnScroll && w.is.mobile()) && w.scrollBack(), t.call(z))
                    }, a.off(C + b), a.on(C + b, i), v(n)
                }, scrollToTop: function () {
                    w.verbose("Scrolling to top of page to avoid animation issues"), x = e(t).scrollTop(), F.scrollTop(0), t.scrollTo(0, 0)
                }, scrollBack: function () {
                    w.verbose("Scrolling back to original page position"), t.scrollTo(0, x)
                }, clear: {
                    cache: function () {
                        w.verbose("Clearing cached dimensions"), w.cache = {}
                    }
                }, set: {
                    ios: function () {
                        l.addClass(S.ios)
                    }, pushed: function () {
                        O.addClass(S.pushed)
                    }, pushable: function () {
                        O.addClass(S.pushable)
                    }, dimmed: function () {
                        I.addClass(S.dimmed)
                    }, active: function () {
                        F.addClass(S.active)
                    }, animating: function () {
                        F.addClass(S.animating)
                    }, transition: function (e) {
                        e = e || w.get.transition(), F.addClass(e)
                    }, direction: function (e) {
                        e = e || w.get.direction(), F.addClass(S[e])
                    }, visible: function () {
                        F.addClass(S.visible)
                    }, overlay: function () {
                        F.addClass(S.overlay)
                    }
                }, remove: {
                    inlineCSS: function () {
                        w.debug("Removing inline css styles", r), r && r.length > 0 && r.remove()
                    }, ios: function () {
                        l.removeClass(S.ios)
                    }, pushed: function () {
                        O.removeClass(S.pushed)
                    }, pushable: function () {
                        O.removeClass(S.pushable)
                    }, active: function () {
                        F.removeClass(S.active)
                    }, animating: function () {
                        F.removeClass(S.animating)
                    }, transition: function (e) {
                        e = e || w.get.transition(), F.removeClass(e)
                    }, direction: function (e) {
                        e = e || w.get.direction(), F.removeClass(S[e])
                    }, visible: function () {
                        F.removeClass(S.visible)
                    }, overlay: function () {
                        F.removeClass(S.overlay)
                    }
                }, get: {
                    direction: function () {
                        return F.hasClass(S.top) ? S.top : F.hasClass(S.right) ? S.right : F.hasClass(S.bottom) ? S.bottom : S.left
                    }, transition: function () {
                        var e, t = w.get.direction();
                        return e = w.is.mobile() ? "auto" == k.mobileTransition ? k.defaultTransition.mobile[t] : k.mobileTransition : "auto" == k.transition ? k.defaultTransition.computer[t] : k.transition, w.verbose("Determined transition", e), e
                    }, transitionEvent: function () {
                        var e, t = n.createElement("element"), o = {
                            transition: "transitionend",
                            OTransition: "oTransitionEnd",
                            MozTransition: "transitionend",
                            WebkitTransition: "webkitTransitionEnd"
                        };
                        for (e in o) if (t.style[e] !== i) return o[e]
                    }
                }, is: {
                    ie: function () {
                        var e = !t.ActiveXObject && "ActiveXObject" in t, n = "ActiveXObject" in t;
                        return e || n
                    }, ios: function () {
                        var e = navigator.userAgent, t = e.match(D.ios), n = e.match(D.mobileChrome);
                        return t && !n ? (w.verbose("Browser was found to be iOS", e), !0) : !1
                    }, mobile: function () {
                        var e = navigator.userAgent, t = e.match(D.mobile);
                        return t ? (w.verbose("Browser was found to be mobile", e), !0) : (w.verbose("Browser is not mobile, using regular transition", e), !1)
                    }, hidden: function () {
                        return !w.is.visible()
                    }, visible: function () {
                        return F.hasClass(S.visible)
                    }, open: function () {
                        return w.is.visible()
                    }, closed: function () {
                        return w.is.hidden()
                    }, vertical: function () {
                        return F.hasClass(S.top)
                    }, animating: function () {
                        return O.hasClass(S.animating)
                    }, rtl: function () {
                        return w.cache.rtl === i && (w.cache.rtl = "rtl" == F.css("direction")), w.cache.rtl
                    }
                }, setting: function (t, n) {
                    if (w.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, k, t); else {
                        if (n === i) return k[t];
                        k[t] = n
                    }
                }, internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, w, t); else {
                        if (n === i) return w[t];
                        w[t] = n
                    }
                }, debug: function () {
                    k.debug && (k.performance ? w.performance.log(arguments) : (w.debug = Function.prototype.bind.call(console.info, console, k.name + ":"), w.debug.apply(console, arguments)))
                }, verbose: function () {
                    k.verbose && k.debug && (k.performance ? w.performance.log(arguments) : (w.verbose = Function.prototype.bind.call(console.info, console, k.name + ":"), w.verbose.apply(console, arguments)))
                }, error: function () {
                    w.error = Function.prototype.bind.call(console.error, console, k.name + ":"), w.error.apply(console, arguments)
                }, performance: {
                    log: function (e) {
                        var t, n, i;
                        k.performance && (t = (new Date).getTime(), i = f || t, n = t - i, f = t, m.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: z,
                            "Execution Time": n
                        })), clearTimeout(w.performance.timer), w.performance.timer = setTimeout(w.performance.display, 500)
                    }, display: function () {
                        var t = k.name + ":", n = 0;
                        f = !1, clearTimeout(w.performance.timer), e.each(m, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", d && (t += " '" + d + "'"), (console.group !== i || console.table !== i) && m.length > 0 && (console.groupCollapsed(t), console.table ? console.table(m) : e.each(m, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), m = []
                    }
                }, invoke: function (t, n, o) {
                    var r, s, c, l = N;
                    return n = n || h, o = z || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                        var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[a]) && n != r) l = l[a]; else {
                            if (l[a] !== i) return s = l[a], !1;
                            if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (w.error(R.method, t), !1);
                            l = l[o]
                        }
                    })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                }
            }, p ? (N === i && w.initialize(), w.invoke(g)) : (N !== i && w.invoke("destroy"), w.initialize())
        }), a !== i ? a : this
    }, e.fn.sidebar.settings = {
        name: "Sidebar",
        namespace: "sidebar",
        debug: !1,
        verbose: !1,
        performance: !0,
        transition: "auto",
        mobileTransition: "auto",
        defaultTransition: {
            computer: {left: "uncover", right: "uncover", top: "overlay", bottom: "overlay"},
            mobile: {left: "uncover", right: "uncover", top: "overlay", bottom: "overlay"}
        },
        context: "body",
        exclusive: !1,
        closable: !0,
        dimPage: !0,
        scrollLock: !1,
        returnScroll: !1,
        delaySetup: !1,
        duration: 500,
        onChange: function () {
        },
        onShow: function () {
        },
        onHide: function () {
        },
        onHidden: function () {
        },
        onVisible: function () {
        },
        className: {
            active: "active",
            animating: "animating",
            dimmed: "dimmed",
            ios: "ios",
            pushable: "pushable",
            pushed: "pushed",
            right: "right",
            top: "top",
            left: "left",
            bottom: "bottom",
            visible: "visible"
        },
        selector: {
            fixed: ".fixed",
            omitted: "script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed",
            pusher: ".pusher",
            sidebar: ".ui.sidebar"
        },
        regExp: {
            ios: /(iPad|iPhone|iPod)/g,
            mobileChrome: /(CriOS)/g,
            mobile: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g
        },
        error: {
            method: "The method you called is not defined.",
            pusher: "Had to add pusher element. For optimal performance make sure body content is inside a pusher element",
            movedSidebar: "Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag",
            overlay: "The overlay setting is no longer supported, use animation: overlay",
            notFound: "There were no elements that matched the specified selector"
        }
    }
}(jQuery, window, document), function (e, t, n, i) {
    "use strict";
    e.fn.sticky = function (n) {
        var o, a = e(this), r = a.selector || "", s = (new Date).getTime(), c = [], l = arguments[0],
            u = "string" == typeof l, d = [].slice.call(arguments, 1);
        return a.each(function () {
            var a, f, m, g,
                p = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.sticky.settings, n) : e.extend({}, e.fn.sticky.settings),
                h = p.className, v = p.namespace, b = p.error, y = "." + v, x = "module-" + v, C = e(this), w = e(t),
                k = e(p.scrollContext), T = (C.selector || "", C.data(x)),
                S = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                    setTimeout(e, 0)
                }, A = this;
            g = {
                initialize: function () {
                    g.determineContainer(), g.determineContext(), g.verbose("Initializing sticky", p, a), g.save.positions(), g.checkErrors(), g.bind.events(), p.observeChanges && g.observeChanges(), g.instantiate()
                }, instantiate: function () {
                    g.verbose("Storing instance of module", g), T = g, C.data(x, g)
                }, destroy: function () {
                    g.verbose("Destroying previous instance"), g.reset(), m && m.disconnect(), w.off("load" + y, g.event.load).off("resize" + y, g.event.resize), k.off("scrollchange" + y, g.event.scrollchange), C.removeData(x)
                }, observeChanges: function () {
                    var e = f[0];
                    "MutationObserver" in t && (m = new MutationObserver(function (e) {
                        clearTimeout(g.timer), g.timer = setTimeout(function () {
                            g.verbose("DOM tree modified, updating sticky menu", e), g.refresh()
                        }, 100)
                    }), m.observe(A, {childList: !0, subtree: !0}), m.observe(e, {
                        childList: !0,
                        subtree: !0
                    }), g.debug("Setting up mutation observer", m))
                }, determineContainer: function () {
                    a = C.offsetParent()
                }, determineContext: function () {
                    return f = p.context ? e(p.context) : a, 0 === f.length ? void g.error(b.invalidContext, p.context, C) : void 0
                }, checkErrors: function () {
                    return g.is.hidden() && g.error(b.visible, C), g.cache.element.height > g.cache.context.height ? (g.reset(), void g.error(b.elementSize, C)) : void 0
                }, bind: {
                    events: function () {
                        w.on("load" + y, g.event.load).on("resize" + y, g.event.resize), k.off("scroll" + y).on("scroll" + y, g.event.scroll).on("scrollchange" + y, g.event.scrollchange)
                    }
                }, event: {
                    load: function () {
                        g.verbose("Page contents finished loading"), S(g.refresh)
                    }, resize: function () {
                        g.verbose("Window resized"), S(g.refresh)
                    }, scroll: function () {
                        S(function () {
                            k.triggerHandler("scrollchange" + y, k.scrollTop())
                        })
                    }, scrollchange: function (e, t) {
                        g.stick(t), p.onScroll.call(A)
                    }
                }, refresh: function (e) {
                    g.reset(), p.context || g.determineContext(), e && g.determineContainer(), g.save.positions(), g.stick(), p.onReposition.call(A)
                }, supports: {
                    sticky: function () {
                        var t = e("<div/>");
                        t[0];
                        return t.addClass(h.supported), t.css("position").match("sticky")
                    }
                }, save: {
                    lastScroll: function (e) {
                        g.lastScroll = e
                    }, elementScroll: function (e) {
                        g.elementScroll = e
                    }, positions: function () {
                        var e = {height: w.height()}, t = {
                            margin: {
                                top: parseInt(C.css("margin-top"), 10),
                                bottom: parseInt(C.css("margin-bottom"), 10)
                            }, offset: C.offset(), width: C.outerWidth(), height: C.outerHeight()
                        }, n = {offset: f.offset(), height: f.outerHeight()};
                        ({height: a.outerHeight()});
                        g.cache = {
                            fits: t.height < e.height,
                            window: {height: e.height},
                            element: {
                                margin: t.margin,
                                top: t.offset.top - t.margin.top,
                                left: t.offset.left,
                                width: t.width,
                                height: t.height,
                                bottom: t.offset.top + t.height
                            },
                            context: {top: n.offset.top, height: n.height, bottom: n.offset.top + n.height}
                        }, g.set.containerSize(), g.set.size(), g.stick(), g.debug("Caching element positions", g.cache)
                    }
                }, get: {
                    direction: function (e) {
                        var t = "down";
                        return e = e || k.scrollTop(), g.lastScroll !== i && (g.lastScroll < e ? t = "down" : g.lastScroll > e && (t = "up")), t
                    }, scrollChange: function (e) {
                        return e = e || k.scrollTop(), g.lastScroll ? e - g.lastScroll : 0
                    }, currentElementScroll: function () {
                        return g.elementScroll ? g.elementScroll : g.is.top() ? Math.abs(parseInt(C.css("top"), 10)) || 0 : Math.abs(parseInt(C.css("bottom"), 10)) || 0
                    }, elementScroll: function (e) {
                        e = e || k.scrollTop();
                        var t = g.cache.element, n = g.cache.window, i = g.get.scrollChange(e),
                            o = t.height - n.height + p.offset, a = g.get.currentElementScroll(), r = a + i;
                        return a = g.cache.fits || 0 > r ? 0 : r > o ? o : r
                    }
                }, remove: {
                    lastScroll: function () {
                        delete g.lastScroll
                    }, elementScroll: function (e) {
                        delete g.elementScroll
                    }, offset: function () {
                        C.css("margin-top", "")
                    }
                }, set: {
                    offset: function () {
                        g.verbose("Setting offset on element", p.offset), C.css("margin-top", p.offset)
                    }, containerSize: function () {
                        var e = a.get(0).tagName;
                        "HTML" === e || "body" == e ? g.determineContainer() : Math.abs(a.outerHeight() - g.cache.context.height) > p.jitter && (g.debug("Context has padding, specifying exact height for container", g.cache.context.height), a.css({height: g.cache.context.height}))
                    }, minimumSize: function () {
                        var e = g.cache.element;
                        a.css("min-height", e.height)
                    }, scroll: function (e) {
                        g.debug("Setting scroll on element", e), g.elementScroll != e && (g.is.top() && C.css("bottom", "").css("top", -e), g.is.bottom() && C.css("top", "").css("bottom", e))
                    }, size: function () {
                        0 !== g.cache.element.height && 0 !== g.cache.element.width && (A.style.setProperty("width", g.cache.element.width + "px", "important"), A.style.setProperty("height", g.cache.element.height + "px", "important"))
                    }
                }, is: {
                    top: function () {
                        return C.hasClass(h.top)
                    }, bottom: function () {
                        return C.hasClass(h.bottom)
                    }, initialPosition: function () {
                        return !g.is.fixed() && !g.is.bound()
                    }, hidden: function () {
                        return !C.is(":visible")
                    }, bound: function () {
                        return C.hasClass(h.bound)
                    }, fixed: function () {
                        return C.hasClass(h.fixed)
                    }
                }, stick: function (e) {
                    var t = e || k.scrollTop(), n = g.cache, i = n.fits, o = n.element, a = n.window, r = n.context,
                        s = g.is.bottom() && p.pushing ? p.bottomOffset : p.offset,
                        e = {top: t + s, bottom: t + s + a.height},
                        c = (g.get.direction(e.top), i ? 0 : g.get.elementScroll(e.top)), l = !i, u = 0 !== o.height;
                    u && (g.is.initialPosition() ? e.top >= r.bottom ? (g.debug("Initial element position is bottom of container"), g.bindBottom()) : e.top > o.top && (o.height + e.top - c >= r.bottom ? (g.debug("Initial element position is bottom of container"), g.bindBottom()) : (g.debug("Initial element position is fixed"), g.fixTop())) : g.is.fixed() ? g.is.top() ? e.top <= o.top ? (g.debug("Fixed element reached top of container"), g.setInitialPosition()) : o.height + e.top - c >= r.bottom ? (g.debug("Fixed element reached bottom of container"), g.bindBottom()) : l && (g.set.scroll(c), g.save.lastScroll(e.top), g.save.elementScroll(c)) : g.is.bottom() && (e.bottom - o.height <= o.top ? (g.debug("Bottom fixed rail has reached top of container"), g.setInitialPosition()) : e.bottom >= r.bottom ? (g.debug("Bottom fixed rail has reached bottom of container"), g.bindBottom()) : l && (g.set.scroll(c), g.save.lastScroll(e.top), g.save.elementScroll(c))) : g.is.bottom() && (p.pushing ? g.is.bound() && e.bottom <= r.bottom && (g.debug("Fixing bottom attached element to bottom of browser."), g.fixBottom()) : g.is.bound() && e.top <= r.bottom - o.height && (g.debug("Fixing bottom attached element to top of browser."), g.fixTop())))
                }, bindTop: function () {
                    g.debug("Binding element to top of parent container"), g.remove.offset(), C.css({
                        left: "",
                        top: "",
                        marginBottom: ""
                    }).removeClass(h.fixed).removeClass(h.bottom).addClass(h.bound).addClass(h.top), p.onTop.call(A), p.onUnstick.call(A)
                }, bindBottom: function () {
                    g.debug("Binding element to bottom of parent container"), g.remove.offset(), C.css({
                        left: "",
                        top: ""
                    }).removeClass(h.fixed).removeClass(h.top).addClass(h.bound).addClass(h.bottom), p.onBottom.call(A), p.onUnstick.call(A)
                }, setInitialPosition: function () {
                    g.debug("Returning to initial position"), g.unfix(), g.unbind()
                }, fixTop: function () {
                    g.debug("Fixing element to top of page"), g.set.minimumSize(), g.set.offset(), C.css({
                        left: g.cache.element.left,
                        bottom: "",
                        marginBottom: ""
                    }).removeClass(h.bound).removeClass(h.bottom).addClass(h.fixed).addClass(h.top), p.onStick.call(A)
                }, fixBottom: function () {
                    g.debug("Sticking element to bottom of page"), g.set.minimumSize(), g.set.offset(), C.css({
                        left: g.cache.element.left,
                        bottom: "",
                        marginBottom: ""
                    }).removeClass(h.bound).removeClass(h.top).addClass(h.fixed).addClass(h.bottom), p.onStick.call(A)
                }, unbind: function () {
                    g.is.bound() && (g.debug("Removing container bound position on element"), g.remove.offset(), C.removeClass(h.bound).removeClass(h.top).removeClass(h.bottom))
                }, unfix: function () {
                    g.is.fixed() && (g.debug("Removing fixed position on element"), g.remove.offset(), C.removeClass(h.fixed).removeClass(h.top).removeClass(h.bottom), p.onUnstick.call(A))
                }, reset: function () {
                    g.debug("Reseting elements position"), g.unbind(), g.unfix(), g.resetCSS(), g.remove.offset(), g.remove.lastScroll()
                }, resetCSS: function () {
                    C.css({width: "", height: ""}), a.css({height: ""})
                }, setting: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, p, t); else {
                        if (n === i) return p[t];
                        p[t] = n
                    }
                }, internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, g, t); else {
                        if (n === i) return g[t];
                        g[t] = n
                    }
                }, debug: function () {
                    p.debug && (p.performance ? g.performance.log(arguments) : (g.debug = Function.prototype.bind.call(console.info, console, p.name + ":"), g.debug.apply(console, arguments)))
                }, verbose: function () {
                    p.verbose && p.debug && (p.performance ? g.performance.log(arguments) : (g.verbose = Function.prototype.bind.call(console.info, console, p.name + ":"), g.verbose.apply(console, arguments)))
                }, error: function () {
                    g.error = Function.prototype.bind.call(console.error, console, p.name + ":"), g.error.apply(console, arguments)
                }, performance: {
                    log: function (e) {
                        var t, n, i;
                        p.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: A,
                            "Execution Time": n
                        })), clearTimeout(g.performance.timer), g.performance.timer = setTimeout(g.performance.display, 0)
                    }, display: function () {
                        var t = p.name + ":", n = 0;
                        s = !1, clearTimeout(g.performance.timer), e.each(c, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), c = []
                    }
                }, invoke: function (t, n, a) {
                    var r, s, c, l = T;
                    return n = n || d, a = A || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                        var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[a]) && n != r) l = l[a]; else {
                            if (l[a] !== i) return s = l[a], !1;
                            if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                            l = l[o]
                        }
                    })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                }
            }, u ? (T === i && g.initialize(), g.invoke(l)) : (T !== i && T.invoke("destroy"), g.initialize())
        }), o !== i ? o : this
    }, e.fn.sticky.settings = {
        name: "Sticky",
        namespace: "sticky",
        debug: !1,
        verbose: !0,
        performance: !0,
        pushing: !1,
        context: !1,
        scrollContext: t,
        offset: 0,
        bottomOffset: 0,
        jitter: 5,
        observeChanges: !1,
        onReposition: function () {
        },
        onScroll: function () {
        },
        onStick: function () {
        },
        onUnstick: function () {
        },
        onTop: function () {
        },
        onBottom: function () {
        },
        error: {
            container: "Sticky element must be inside a relative container",
            visible: "Element is hidden, you must call refresh after element becomes visible",
            method: "The method you called is not defined.",
            invalidContext: "Context specified does not exist",
            elementSize: "Sticky element is larger than its container, cannot create sticky."
        },
        className: {bound: "bound", fixed: "fixed", supported: "native", top: "top", bottom: "bottom"}
    }
}(jQuery, window, document), function (e, t, n, i) {
    "use strict";
    e.fn.tab = function (o) {
        var a, r = e(e.isFunction(this) ? t : this), s = r.selector || "", c = (new Date).getTime(), l = [],
            u = arguments[0], d = "string" == typeof u, f = [].slice.call(arguments, 1), m = !1;
        return r.each(function () {
            var g, p, h, v, b, y,
                x = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.tab.settings, o) : e.extend({}, e.fn.tab.settings),
                C = x.className, w = x.metadata, k = x.selector, T = x.error, S = "." + x.namespace,
                A = "module-" + x.namespace, D = e(this), R = {}, E = !0, P = 0, F = this, O = D.data(A);
            b = {
                initialize: function () {
                    b.debug("Initializing tab menu item", D), b.fix.callbacks(), b.determineTabs(), b.debug("Determining tabs", x.context, p), x.auto && b.set.auto(), b.bind.events(), x.history && !m && (b.initializeHistory(), m = !0), b.instantiate()
                }, instantiate: function () {
                    b.verbose("Storing instance of module", b), O = b, D.data(A, b)
                }, destroy: function () {
                    b.debug("Destroying tabs", D), D.removeData(A).off(S)
                }, bind: {
                    events: function () {
                        e.isWindow(F) || (b.debug("Attaching tab activation events to element", D), D.on("click" + S, b.event.click))
                    }
                }, determineTabs: function () {
                    var t;
                    "parent" === x.context ? (D.closest(k.ui).length > 0 ? (t = D.closest(k.ui), b.verbose("Using closest UI element as parent", t)) : t = D, g = t.parent(), b.verbose("Determined parent element for creating context", g)) : x.context ? (g = e(x.context), b.verbose("Using selector for tab context", x.context, g)) : g = e("body"), x.childrenOnly ? (p = g.children(k.tabs), b.debug("Searching tab context children for tabs", g, p)) : (p = g.find(k.tabs), b.debug("Searching tab context for tabs", g, p))
                }, fix: {
                    callbacks: function () {
                        e.isPlainObject(o) && (o.onTabLoad || o.onTabInit) && (o.onTabLoad && (o.onLoad = o.onTabLoad, delete o.onTabLoad, b.error(T.legacyLoad, o.onLoad)), o.onTabInit && (o.onFirstLoad = o.onTabInit, delete o.onTabInit, b.error(T.legacyInit, o.onFirstLoad)), x = e.extend(!0, {}, e.fn.tab.settings, o))
                    }
                }, initializeHistory: function () {
                    if (b.debug("Initializing page state"), e.address === i) return b.error(T.state), !1;
                    if ("state" == x.historyType) {
                        if (b.debug("Using HTML5 to manage state"), x.path === !1) return b.error(T.path), !1;
                        e.address.history(!0).state(x.path)
                    }
                    e.address.bind("change", b.event.history.change)
                }, event: {
                    click: function (t) {
                        var n = e(this).data(w.tab);
                        n !== i ? (x.history ? (b.verbose("Updating page state", t), e.address.value(n)) : (b.verbose("Changing tab", t), b.changeTab(n)), t.preventDefault()) : b.debug("No tab specified")
                    }, history: {
                        change: function (t) {
                            var n = t.pathNames.join("/") || b.get.initialPath(),
                                o = x.templates.determineTitle(n) || !1;
                            b.performance.display(), b.debug("History change event", n, t), y = t, n !== i && b.changeTab(n), o && e.address.title(o)
                        }
                    }
                }, refresh: function () {
                    h && (b.debug("Refreshing tab", h), b.changeTab(h))
                }, cache: {
                    read: function (e) {
                        return e !== i ? R[e] : !1
                    }, add: function (e, t) {
                        e = e || h, b.debug("Adding cached content for", e), R[e] = t
                    }, remove: function (e) {
                        e = e || h, b.debug("Removing cached content for", e), delete R[e]
                    }
                }, set: {
                    auto: function () {
                        var t = "string" == typeof x.path ? x.path.replace(/\/$/, "") + "/{$tab}" : "/{$tab}";
                        b.verbose("Setting up automatic tab retrieval from server", t), e.isPlainObject(x.apiSettings) ? x.apiSettings.url = t : x.apiSettings = {url: t}
                    }, loading: function (e) {
                        var t = b.get.tabElement(e), n = t.hasClass(C.loading);
                        n || (b.verbose("Setting loading state for", t), t.addClass(C.loading).siblings(p).removeClass(C.active + " " + C.loading), t.length > 0 && x.onRequest.call(t[0], e))
                    }, state: function (t) {
                        e.address.value(t)
                    }
                }, changeTab: function (n) {
                    var i = t.history && t.history.pushState, o = i && x.ignoreFirstLoad && E,
                        a = x.auto || e.isPlainObject(x.apiSettings),
                        r = a && !o ? b.utilities.pathToArray(n) : b.get.defaultPathArray(n);
                    n = b.utilities.arrayToPath(r), e.each(r, function (t, i) {
                        var s, c, l, u, d = r.slice(0, t + 1), f = b.utilities.arrayToPath(d), m = b.is.tab(f),
                            p = t + 1 == r.length, k = b.get.tabElement(f);
                        if (b.verbose("Looking for tab", i), m) {
                            if (b.verbose("Tab was found", i), h = f, v = b.utilities.filterArray(r, d), p ? u = !0 : (c = r.slice(0, t + 2), l = b.utilities.arrayToPath(c), u = !b.is.tab(l), u && b.verbose("Tab parameters found", c)), u && a) return o ? (b.debug("Ignoring remote content on first tab load", f), E = !1, b.cache.add(n, k.html()), b.activate.all(f), x.onFirstLoad.call(k[0], f, v, y), x.onLoad.call(k[0], f, v, y)) : (b.activate.navigation(f), b.fetch.content(f, n)), !1;
                            b.debug("Opened local tab", f), b.activate.all(f), b.cache.read(f) || (b.cache.add(f, !0), b.debug("First time tab loaded calling tab init"), x.onFirstLoad.call(k[0], f, v, y)), x.onLoad.call(k[0], f, v, y)
                        } else {
                            if (-1 != n.search("/") || "" === n) return b.error(T.missingTab, D, g, f), !1;
                            if (s = e("#" + n + ', a[name="' + n + '"]'), f = s.closest("[data-tab]").data(w.tab), k = b.get.tabElement(f), s && s.length > 0 && f) return b.debug("Anchor link used, opening parent tab", k, s), k.hasClass(C.active) || setTimeout(function () {
                                b.scrollTo(s)
                            }, 0), b.activate.all(f), b.cache.read(f) || (b.cache.add(f, !0), b.debug("First time tab loaded calling tab init"), x.onFirstLoad.call(k[0], f, v, y)), x.onLoad.call(k[0], f, v, y), !1
                        }
                    })
                }, scrollTo: function (t) {
                    var i = t && t.length > 0 ? t.offset().top : !1;
                    i !== !1 && (b.debug("Forcing scroll to an in-page link in a hidden tab", i, t), e(n).scrollTop(i))
                }, update: {
                    content: function (e, t, n) {
                        var o = b.get.tabElement(e), a = o[0];
                        n = n !== i ? n : x.evaluateScripts, n ? (b.debug("Updating HTML and evaluating inline scripts", e, t), o.html(t)) : (b.debug("Updating HTML", e, t), a.innerHTML = t)
                    }
                }, fetch: {
                    content: function (t, n) {
                        var o, a, r = b.get.tabElement(t), s = {
                            dataType: "html",
                            encodeParameters: !1,
                            on: "now",
                            cache: x.alwaysRefresh,
                            headers: {"X-Remote": !0},
                            onSuccess: function (e) {
                                b.cache.add(n, e), b.update.content(t, e), t == h ? (b.debug("Content loaded", t), b.activate.tab(t)) : b.debug("Content loaded in background", t), x.onFirstLoad.call(r[0], t, v, y), x.onLoad.call(r[0], t, v, y)
                            },
                            urlData: {tab: n}
                        }, c = r.api("get request") || !1, l = c && "pending" === c.state();
                        n = n || t, a = b.cache.read(n), x.cache && a ? (b.activate.tab(t), b.debug("Adding cached content", n), "once" == x.evaluateScripts ? b.update.content(t, a, !1) : b.update.content(t, a), x.onLoad.call(r[0], t, v, y)) : l ? (b.set.loading(t), b.debug("Content is already loading", n)) : e.api !== i ? (o = e.extend(!0, {}, x.apiSettings, s), b.debug("Retrieving remote content", n, o), b.set.loading(t), r.api(o)) : b.error(T.api)
                    }
                }, activate: {
                    all: function (e) {
                        b.activate.tab(e), b.activate.navigation(e)
                    }, tab: function (e) {
                        var t = b.get.tabElement(e), n = t.hasClass(C.active);
                        b.verbose("Showing tab content for", t), n || (t.addClass(C.active).siblings(p).removeClass(C.active + " " + C.loading), t.length > 0 && x.onVisible.call(t[0], e))
                    }, navigation: function (e) {
                        var t = b.get.navElement(e), n = t.hasClass(C.active);
                        b.verbose("Activating tab navigation for", t, e), n || t.addClass(C.active).siblings(r).removeClass(C.active + " " + C.loading)
                    }
                }, deactivate: {
                    all: function () {
                        b.deactivate.navigation(), b.deactivate.tabs()
                    }, navigation: function () {
                        r.removeClass(C.active)
                    }, tabs: function () {
                        p.removeClass(C.active + " " + C.loading)
                    }
                }, is: {
                    tab: function (e) {
                        return e !== i ? b.get.tabElement(e).length > 0 : !1
                    }
                }, get: {
                    initialPath: function () {
                        return r.eq(0).data(w.tab) || p.eq(0).data(w.tab)
                    }, path: function () {
                        return e.address.value()
                    }, defaultPathArray: function (e) {
                        return b.utilities.pathToArray(b.get.defaultPath(e))
                    }, defaultPath: function (e) {
                        var t = r.filter("[data-" + w.tab + '^="' + e + '/"]').eq(0), n = t.data(w.tab) || !1;
                        if (n) {
                            if (b.debug("Found default tab", n), P < x.maxDepth) return P++, b.get.defaultPath(n);
                            b.error(T.recursion)
                        } else b.debug("No default tabs found for", e, p);
                        return P = 0, e
                    }, navElement: function (e) {
                        return e = e || h, r.filter("[data-" + w.tab + '="' + e + '"]')
                    }, tabElement: function (e) {
                        var t, n, i, o;
                        return e = e || h, i = b.utilities.pathToArray(e), o = b.utilities.last(i), t = p.filter("[data-" + w.tab + '="' + e + '"]'), n = p.filter("[data-" + w.tab + '="' + o + '"]'), t.length > 0 ? t : n
                    }, tab: function () {
                        return h
                    }
                }, utilities: {
                    filterArray: function (t, n) {
                        return e.grep(t, function (t) {
                            return -1 == e.inArray(t, n)
                        })
                    }, last: function (t) {
                        return e.isArray(t) ? t[t.length - 1] : !1
                    }, pathToArray: function (e) {
                        return e === i && (e = h), "string" == typeof e ? e.split("/") : [e]
                    }, arrayToPath: function (t) {
                        return e.isArray(t) ? t.join("/") : !1
                    }
                }, setting: function (t, n) {
                    if (b.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, x, t); else {
                        if (n === i) return x[t];
                        x[t] = n
                    }
                }, internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, b, t); else {
                        if (n === i) return b[t];
                        b[t] = n
                    }
                }, debug: function () {
                    x.debug && (x.performance ? b.performance.log(arguments) : (b.debug = Function.prototype.bind.call(console.info, console, x.name + ":"), b.debug.apply(console, arguments)))
                }, verbose: function () {
                    x.verbose && x.debug && (x.performance ? b.performance.log(arguments) : (b.verbose = Function.prototype.bind.call(console.info, console, x.name + ":"), b.verbose.apply(console, arguments)))
                }, error: function () {
                    b.error = Function.prototype.bind.call(console.error, console, x.name + ":"), b.error.apply(console, arguments)
                }, performance: {
                    log: function (e) {
                        var t, n, i;
                        x.performance && (t = (new Date).getTime(), i = c || t, n = t - i, c = t, l.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: F,
                            "Execution Time": n
                        })), clearTimeout(b.performance.timer), b.performance.timer = setTimeout(b.performance.display, 500)
                    }, display: function () {
                        var t = x.name + ":", n = 0;
                        c = !1, clearTimeout(b.performance.timer), e.each(l, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", s && (t += " '" + s + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), l = []
                    }
                }, invoke: function (t, n, o) {
                    var r, s, c, l = O;
                    return n = n || f, o = F || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                        var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[a]) && n != r) l = l[a]; else {
                            if (l[a] !== i) return s = l[a], !1;
                            if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (b.error(T.method, t), !1);
                            l = l[o]
                        }
                    })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                }
            }, d ? (O === i && b.initialize(), b.invoke(u)) : (O !== i && O.invoke("destroy"), b.initialize())
        }), a !== i ? a : this
    }, e.tab = function () {
        e(t).tab.apply(this, arguments)
    }, e.fn.tab.settings = {
        name: "Tab",
        namespace: "tab",
        debug: !1,
        verbose: !1,
        performance: !0,
        auto: !1,
        history: !1,
        historyType: "hash",
        path: !1,
        context: !1,
        childrenOnly: !1,
        maxDepth: 25,
        alwaysRefresh: !1,
        cache: !0,
        ignoreFirstLoad: !1,
        apiSettings: !1,
        evaluateScripts: "once",
        onFirstLoad: function (e, t, n) {
        },
        onLoad: function (e, t, n) {
        },
        onVisible: function (e, t, n) {
        },
        onRequest: function (e, t, n) {
        },
        templates: {
            determineTitle: function (e) {
            }
        },
        error: {
            api: "You attempted to load content without API module",
            method: "The method you called is not defined",
            missingTab: "Activated tab cannot be found. Tabs are case-sensitive.",
            noContent: "The tab you specified is missing a content url.",
            path: "History enabled, but no path was specified",
            recursion: "Max recursive depth reached",
            legacyInit: "onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.",
            legacyLoad: "onTabLoad has been renamed to onLoad in 2.0. Please adjust your code",
            state: "History requires Asual's Address library <https://github.com/asual/jquery-address>"
        },
        metadata: {tab: "tab", loaded: "loaded", promise: "promise"},
        className: {loading: "loading", active: "active"},
        selector: {tabs: ".ui.tab", ui: ".ui"}
    }
}(jQuery, window, document), function (e, t, n, i) {
    "use strict";
    e.fn.transition = function () {
        var o, a = e(this), r = a.selector || "", s = (new Date).getTime(), c = [], l = arguments, u = l[0],
            d = [].slice.call(arguments, 1), f = "string" == typeof u;
        t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
            setTimeout(e, 0)
        };
        return a.each(function (t) {
            var m, g, p, h, v, b, y, x, C, w = e(this), k = this;
            C = {
                initialize: function () {
                    m = C.get.settings.apply(k, l), h = m.className, p = m.error, v = m.metadata, x = "." + m.namespace, y = "module-" + m.namespace, g = w.data(y) || C, b = C.get.animationEndEvent(), f && (f = C.invoke(u)), f === !1 && (C.verbose("Converted arguments into settings object", m), m.interval ? C.delay(m.animate) : C.animate(), C.instantiate())
                }, instantiate: function () {
                    C.verbose("Storing instance of module", C), g = C, w.data(y, g)
                }, destroy: function () {
                    C.verbose("Destroying previous module for", k), w.removeData(y)
                }, refresh: function () {
                    C.verbose("Refreshing display type on next animation"), delete C.displayType
                }, forceRepaint: function () {
                    C.verbose("Forcing element repaint");
                    var e = w.parent(), t = w.next();
                    0 === t.length ? w.detach().appendTo(e) : w.detach().insertBefore(t)
                }, repaint: function () {
                    C.verbose("Repainting element");
                    k.offsetWidth
                }, delay: function (e) {
                    var n, o, r = C.get.animationDirection();
                    r || (r = C.can.transition() ? C.get.direction() : "static"), e = e !== i ? e : m.interval, n = "auto" == m.reverse && r == h.outward, o = n || 1 == m.reverse ? (a.length - t) * m.interval : t * m.interval, C.debug("Delaying animation by", o), setTimeout(C.animate, o)
                }, animate: function (e) {
                    if (m = e || m, !C.is.supported()) return C.error(p.support), !1;
                    if (C.debug("Preparing animation", m.animation), C.is.animating()) {
                        if (m.queue) return !m.allowRepeats && C.has.direction() && C.is.occurring() && C.queuing !== !0 ? C.debug("Animation is currently occurring, preventing queueing same animation", m.animation) : C.queue(m.animation), !1;
                        if (!m.allowRepeats && C.is.occurring()) return C.debug("Animation is already occurring, will not execute repeated animation", m.animation), !1;
                        C.debug("New animation started, completing previous early", m.animation), g.complete()
                    }
                    C.can.animate() ? C.set.animating(m.animation) : C.error(p.noAnimation, m.animation, k)
                }, reset: function () {
                    C.debug("Resetting animation to beginning conditions"), C.remove.animationCallbacks(), C.restore.conditions(), C.remove.animating()
                }, queue: function (e) {
                    C.debug("Queueing animation of", e), C.queuing = !0, w.one(b + ".queue" + x, function () {
                        C.queuing = !1, C.repaint(), C.animate.apply(this, m)
                    })
                }, complete: function (e) {
                    C.debug("Animation complete", m.animation), C.remove.completeCallback(), C.remove.failSafe(), C.is.looping() || (C.is.outward() ? (C.verbose("Animation is outward, hiding element"), C.restore.conditions(), C.hide()) : C.is.inward() ? (C.verbose("Animation is outward, showing element"), C.restore.conditions(), C.show()) : C.restore.conditions())
                }, force: {
                    visible: function () {
                        var e = w.attr("style"), t = C.get.userStyle(), n = C.get.displayType(),
                            o = t + "display: " + n + " !important;", a = w.css("display"), r = e === i || "" === e;
                        a !== n ? (C.verbose("Overriding default display to show element", n), w.attr("style", o)) : r && w.removeAttr("style")
                    }, hidden: function () {
                        var e = w.attr("style"), t = w.css("display"), n = e === i || "" === e;
                        "none" === t || C.is.hidden() ? n && w.removeAttr("style") : (C.verbose("Overriding default display to hide element"), w.css("display", "none"))
                    }
                }, has: {
                    direction: function (t) {
                        var n = !1;
                        return t = t || m.animation, "string" == typeof t && (t = t.split(" "), e.each(t, function (e, t) {
                            (t === h.inward || t === h.outward) && (n = !0)
                        })), n
                    }, inlineDisplay: function () {
                        var t = w.attr("style") || "";
                        return e.isArray(t.match(/display.*?;/, ""))
                    }
                }, set: {
                    animating: function (e) {
                        var t;
                        C.remove.completeCallback(), e = e || m.animation, t = C.get.animationClass(e), C.save.animation(t), C.force.visible(), C.remove.hidden(), C.remove.direction(), C.start.animation(t)
                    }, duration: function (e, t) {
                        t = t || m.duration, t = "number" == typeof t ? t + "ms" : t, (t || 0 === t) && (C.verbose("Setting animation duration", t), w.css({"animation-duration": t}))
                    }, direction: function (e) {
                        e = e || C.get.direction(), e == h.inward ? C.set.inward() : C.set.outward()
                    }, looping: function () {
                        C.debug("Transition set to loop"), w.addClass(h.looping)
                    }, hidden: function () {
                        w.addClass(h.transition).addClass(h.hidden)
                    }, inward: function () {
                        C.debug("Setting direction to inward"), w.removeClass(h.outward).addClass(h.inward)
                    }, outward: function () {
                        C.debug("Setting direction to outward"), w.removeClass(h.inward).addClass(h.outward)
                    }, visible: function () {
                        w.addClass(h.transition).addClass(h.visible)
                    }
                }, start: {
                    animation: function (e) {
                        e = e || C.get.animationClass(), C.debug("Starting tween", e), w.addClass(e).one(b + ".complete" + x, C.complete), m.useFailSafe && C.add.failSafe(), C.set.duration(m.duration), m.onStart.call(k)
                    }
                }, save: {
                    animation: function (e) {
                        C.cache || (C.cache = {}), C.cache.animation = e
                    }, displayType: function (e) {
                        "none" !== e && w.data(v.displayType, e)
                    }, transitionExists: function (t, n) {
                        e.fn.transition.exists[t] = n, C.verbose("Saving existence of transition", t, n)
                    }
                }, restore: {
                    conditions: function () {
                        var e = C.get.currentAnimation();
                        e && (w.removeClass(e), C.verbose("Removing animation class", C.cache)), C.remove.duration()
                    }
                }, add: {
                    failSafe: function () {
                        var e = C.get.duration();
                        C.timer = setTimeout(function () {
                            w.triggerHandler(b)
                        }, e + m.failSafeDelay), C.verbose("Adding fail safe timer", C.timer)
                    }
                }, remove: {
                    animating: function () {
                        w.removeClass(h.animating)
                    }, animationCallbacks: function () {
                        C.remove.queueCallback(), C.remove.completeCallback()
                    }, queueCallback: function () {
                        w.off(".queue" + x)
                    }, completeCallback: function () {
                        w.off(".complete" + x)
                    }, display: function () {
                        w.css("display", "")
                    }, direction: function () {
                        w.removeClass(h.inward).removeClass(h.outward)
                    }, duration: function () {
                        w.css("animation-duration", "")
                    }, failSafe: function () {
                        C.verbose("Removing fail safe timer", C.timer), C.timer && clearTimeout(C.timer)
                    }, hidden: function () {
                        w.removeClass(h.hidden)
                    }, visible: function () {
                        w.removeClass(h.visible)
                    }, looping: function () {
                        C.debug("Transitions are no longer looping"), C.is.looping() && (C.reset(), w.removeClass(h.looping))
                    }, transition: function () {
                        w.removeClass(h.visible).removeClass(h.hidden)
                    }
                }, get: {
                    settings: function (t, n, i) {
                        return "object" == typeof t ? e.extend(!0, {}, e.fn.transition.settings, t) : "function" == typeof i ? e.extend({}, e.fn.transition.settings, {
                            animation: t,
                            onComplete: i,
                            duration: n
                        }) : "string" == typeof n || "number" == typeof n ? e.extend({}, e.fn.transition.settings, {
                            animation: t,
                            duration: n
                        }) : "object" == typeof n ? e.extend({}, e.fn.transition.settings, n, {animation: t}) : "function" == typeof n ? e.extend({}, e.fn.transition.settings, {
                            animation: t,
                            onComplete: n
                        }) : e.extend({}, e.fn.transition.settings, {animation: t})
                    }, animationClass: function (e) {
                        var t = e || m.animation,
                            n = C.can.transition() && !C.has.direction() ? C.get.direction() + " " : "";
                        return h.animating + " " + h.transition + " " + n + t
                    }, currentAnimation: function () {
                        return C.cache && C.cache.animation !== i ? C.cache.animation : !1
                    }, currentDirection: function () {
                        return C.is.inward() ? h.inward : h.outward
                    }, direction: function () {
                        return C.is.hidden() || !C.is.visible() ? h.inward : h.outward
                    }, animationDirection: function (t) {
                        var n;
                        return t = t || m.animation, "string" == typeof t && (t = t.split(" "), e.each(t, function (e, t) {
                            t === h.inward ? n = h.inward : t === h.outward && (n = h.outward)
                        })), n ? n : !1
                    }, duration: function (e) {
                        return e = e || m.duration, e === !1 && (e = w.css("animation-duration") || 0), "string" == typeof e ? e.indexOf("ms") > -1 ? parseFloat(e) : 1e3 * parseFloat(e) : e
                    }, displayType: function () {
                        return m.displayType ? m.displayType : (w.data(v.displayType) === i && C.can.transition(!0), w.data(v.displayType))
                    }, userStyle: function (e) {
                        return e = e || w.attr("style") || "", e.replace(/display.*?;/, "")
                    }, transitionExists: function (t) {
                        return e.fn.transition.exists[t]
                    }, animationStartEvent: function () {
                        var e, t = n.createElement("div"), o = {
                            animation: "animationstart",
                            OAnimation: "oAnimationStart",
                            MozAnimation: "mozAnimationStart",
                            WebkitAnimation: "webkitAnimationStart"
                        };
                        for (e in o) if (t.style[e] !== i) return o[e];
                        return !1
                    }, animationEndEvent: function () {
                        var e, t = n.createElement("div"), o = {
                            animation: "animationend",
                            OAnimation: "oAnimationEnd",
                            MozAnimation: "mozAnimationEnd",
                            WebkitAnimation: "webkitAnimationEnd"
                        };
                        for (e in o) if (t.style[e] !== i) return o[e];
                        return !1
                    }
                }, can: {
                    transition: function (t) {
                        var n, o, a, r, s, c, l, u = m.animation, d = C.get.transitionExists(u);
                        if (d === i || t) {
                            if (C.verbose("Determining whether animation exists"), n = w.attr("class"), o = w.prop("tagName"), a = e("<" + o + " />").addClass(n).insertAfter(w), r = a.addClass(u).removeClass(h.inward).removeClass(h.outward).addClass(h.animating).addClass(h.transition).css("animationName"), s = a.addClass(h.inward).css("animationName"), l = a.attr("class", n).removeAttr("style").removeClass(h.hidden).removeClass(h.visible).show().css("display"), C.verbose("Determining final display state", l), C.save.displayType(l), a.remove(), r != s) C.debug("Direction exists for animation", u), c = !0; else {
                                if ("none" == r || !r) return void C.debug("No animation defined in css", u);
                                C.debug("Static animation found", u, l), c = !1
                            }
                            C.save.transitionExists(u, c)
                        }
                        return d !== i ? d : c
                    }, animate: function () {
                        return C.can.transition() !== i
                    }
                }, is: {
                    animating: function () {
                        return w.hasClass(h.animating)
                    }, inward: function () {
                        return w.hasClass(h.inward)
                    }, outward: function () {
                        return w.hasClass(h.outward)
                    }, looping: function () {
                        return w.hasClass(h.looping)
                    }, occurring: function (e) {
                        return e = e || m.animation, e = "." + e.replace(" ", "."), w.filter(e).length > 0
                    }, visible: function () {
                        return w.is(":visible")
                    }, hidden: function () {
                        return "hidden" === w.css("visibility")
                    }, supported: function () {
                        return b !== !1
                    }
                }, hide: function () {
                    C.verbose("Hiding element"), C.is.animating() && C.reset(), k.blur(), C.remove.display(), C.remove.visible(), C.set.hidden(), C.force.hidden(), m.onHide.call(k), m.onComplete.call(k)
                }, show: function (e) {
                    C.verbose("Showing element", e), C.remove.hidden(), C.set.visible(), C.force.visible(), m.onShow.call(k), m.onComplete.call(k)
                }, toggle: function () {
                    C.is.visible() ? C.hide() : C.show()
                }, stop: function () {
                    C.debug("Stopping current animation"), w.triggerHandler(b)
                }, stopAll: function () {
                    C.debug("Stopping all animation"), C.remove.queueCallback(), w.triggerHandler(b)
                }, clear: {
                    queue: function () {
                        C.debug("Clearing animation queue"), C.remove.queueCallback()
                    }
                }, enable: function () {
                    C.verbose("Starting animation"), w.removeClass(h.disabled)
                }, disable: function () {
                    C.debug("Stopping animation"), w.addClass(h.disabled)
                }, setting: function (t, n) {
                    if (C.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t); else {
                        if (n === i) return m[t];
                        m[t] = n
                    }
                }, internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, C, t); else {
                        if (n === i) return C[t];
                        C[t] = n
                    }
                }, debug: function () {
                    m.debug && (m.performance ? C.performance.log(arguments) : (C.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), C.debug.apply(console, arguments)))
                }, verbose: function () {
                    m.verbose && m.debug && (m.performance ? C.performance.log(arguments) : (C.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), C.verbose.apply(console, arguments)))
                }, error: function () {
                    C.error = Function.prototype.bind.call(console.error, console, m.name + ":"), C.error.apply(console, arguments)
                }, performance: {
                    log: function (e) {
                        var t, n, i;
                        m.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: k,
                            "Execution Time": n
                        })), clearTimeout(C.performance.timer), C.performance.timer = setTimeout(C.performance.display, 500)
                    }, display: function () {
                        var t = m.name + ":", n = 0;
                        s = !1, clearTimeout(C.performance.timer), e.each(c, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", r && (t += " '" + r + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), c = []
                    }
                }, invoke: function (t, n, a) {
                    var r, s, c, l = g;
                    return n = n || d, a = k || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                        var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[a]) && n != r) l = l[a]; else {
                            if (l[a] !== i) return s = l[a], !1;
                            if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                            l = l[o]
                        }
                    })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s !== i ? s : !1
                }
            }, C.initialize()
        }), o !== i ? o : this
    }, e.fn.transition.exists = {}, e.fn.transition.settings = {
        name: "Transition",
        debug: !1,
        verbose: !1,
        performance: !0,
        namespace: "transition",
        interval: 0,
        reverse: "auto",
        onStart: function () {
        },
        onComplete: function () {
        },
        onShow: function () {
        },
        onHide: function () {
        },
        useFailSafe: !0,
        failSafeDelay: 100,
        allowRepeats: !1,
        displayType: !1,
        animation: "fade",
        duration: !1,
        queue: !0,
        metadata: {displayType: "display"},
        className: {
            animating: "animating",
            disabled: "disabled",
            hidden: "hidden",
            inward: "in",
            loading: "loading",
            looping: "looping",
            outward: "out",
            transition: "transition",
            visible: "visible"
        },
        error: {
            noAnimation: "There is no css animation matching the one you specified. Please make sure your css is vendor prefixed, and you have included transition css.",
            repeated: "That animation is already occurring, cancelling repeated animation",
            method: "The method you called is not defined",
            support: "This browser does not support CSS animations"
        }
    }
}(jQuery, window, document), function (e, t, n, i) {
    "use strict";
    e.api = e.fn.api = function (n) {
        var o, a = e(e.isFunction(this) ? t : this), r = a.selector || "", s = (new Date).getTime(), c = [],
            l = arguments[0], u = "string" == typeof l, d = [].slice.call(arguments, 1);
        return a.each(function () {
            var a, f, m, g, p, h,
                v = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.api.settings, n) : e.extend({}, e.fn.api.settings),
                b = v.namespace, y = v.metadata, x = v.selector, C = v.error, w = v.className, k = "." + b,
                T = "module-" + b, S = e(this), A = S.closest(x.form), D = v.stateContext ? e(v.stateContext) : S,
                R = this, E = D[0], P = S.data(T);
            h = {
                initialize: function () {
                    u || h.bind.events(), h.instantiate()
                }, instantiate: function () {
                    h.verbose("Storing instance of module", h), P = h, S.data(T, P)
                }, destroy: function () {
                    h.verbose("Destroying previous module for", R), S.removeData(T).off(k)
                }, bind: {
                    events: function () {
                        var e = h.get.event();
                        e ? (h.verbose("Attaching API events to element", e), S.on(e + k, h.event.trigger)) : "now" == v.on && (h.debug("Querying API endpoint immediately"), h.query())
                    }
                }, decode: {
                    json: function (e) {
                        if (e !== i && "string" == typeof e) try {
                            e = JSON.parse(e)
                        } catch (t) {
                        }
                        return e
                    }
                }, read: {
                    cachedResponse: function (e) {
                        var n;
                        return t.Storage === i ? void h.error(C.noStorage) : (n = sessionStorage.getItem(e), h.debug("Using cached response", e, n), n = h.decode.json(n), !1)
                    }
                }, write: {
                    cachedResponse: function (n, o) {
                        return o && "" === o ? void h.debug("Response empty, not caching", o) : t.Storage === i ? void h.error(C.noStorage) : (e.isPlainObject(o) && (o = JSON.stringify(o)), sessionStorage.setItem(n, o), void h.verbose("Storing cached response for url", n, o))
                    }
                }, query: function () {
                    if (h.is.disabled()) return void h.debug("Element is disabled API request aborted");
                    if (h.is.loading()) {
                        if (!v.interruptRequests) return void h.debug("Cancelling request, previous request is still pending");
                        h.debug("Interrupting previous request"), h.abort()
                    }
                    return v.defaultData && e.extend(!0, v.urlData, h.get.defaultData()), v.serializeForm && (v.data = h.add.formData(v.data)), f = h.get.settings(), f === !1 ? (h.cancelled = !0, void h.error(C.beforeSend)) : (h.cancelled = !1, m = h.get.templatedURL(), m || h.is.mocked() ? (m = h.add.urlData(m), m || h.is.mocked() ? (a = e.extend(!0, {}, v, {
                        type: v.method || v.type,
                        data: g,
                        url: v.base + m,
                        beforeSend: v.beforeXHR,
                        success: function () {
                        },
                        failure: function () {
                        },
                        complete: function () {
                        }
                    }), h.debug("Querying URL", a.url), h.verbose("Using AJAX settings", a), "local" === v.cache && h.read.cachedResponse(m) ? (h.debug("Response returned from local cache"), h.request = h.create.request(), void h.request.resolveWith(E, [h.read.cachedResponse(m)])) : void (v.throttle ? v.throttleFirstRequest || h.timer ? (h.debug("Throttling request", v.throttle), clearTimeout(h.timer), h.timer = setTimeout(function () {
                        h.timer && delete h.timer, h.debug("Sending throttled request", g, a.method), h.send.request()
                    }, v.throttle)) : (h.debug("Sending request", g, a.method), h.send.request(), h.timer = setTimeout(function () {
                    }, v.throttle)) : (h.debug("Sending request", g, a.method), h.send.request()))) : void 0) : void h.error(C.missingURL))
                }, should: {
                    removeError: function () {
                        return v.hideError === !0 || "auto" === v.hideError && !h.is.form()
                    }
                }, is: {
                    disabled: function () {
                        return S.filter(x.disabled).length > 0
                    }, form: function () {
                        return S.is("form") || D.is("form")
                    }, mocked: function () {
                        return v.mockResponse || v.mockResponseAsync
                    }, input: function () {
                        return S.is("input")
                    }, loading: function () {
                        return h.request && "pending" == h.request.state()
                    }, abortedRequest: function (e) {
                        return e && e.readyState !== i && 0 === e.readyState ? (h.verbose("XHR request determined to be aborted"), !0) : (h.verbose("XHR request was not aborted"), !1)
                    }, validResponse: function (t) {
                        return "json" !== v.dataType && "jsonp" !== v.dataType || !e.isFunction(v.successTest) ? (h.verbose("Response is not JSON, skipping validation", v.successTest, t), !0) : (h.debug("Checking JSON returned success", v.successTest, t), v.successTest(t) ? (h.debug("Response passed success test", t), !0) : (h.debug("Response failed success test", t), !1))
                    }
                }, was: {
                    cancelled: function () {
                        return h.cancelled || !1
                    }, succesful: function () {
                        return h.request && "resolved" == h.request.state()
                    }, failure: function () {
                        return h.request && "rejected" == h.request.state()
                    }, complete: function () {
                        return h.request && ("resolved" == h.request.state() || "rejected" == h.request.state())
                    }
                }, add: {
                    urlData: function (t, n) {
                        var o, a;
                        return t && (o = t.match(v.regExp.required), a = t.match(v.regExp.optional), n = n || v.urlData, o && (h.debug("Looking for required URL variables", o), e.each(o, function (o, a) {
                            var r = -1 !== a.indexOf("$") ? a.substr(2, a.length - 3) : a.substr(1, a.length - 2),
                                s = e.isPlainObject(n) && n[r] !== i ? n[r] : S.data(r) !== i ? S.data(r) : D.data(r) !== i ? D.data(r) : n[r];
                            return s === i ? (h.error(C.requiredParameter, r, t), t = !1, !1) : (h.verbose("Found required variable", r, s), s = v.encodeParameters ? h.get.urlEncodedValue(s) : s, t = t.replace(a, s), void 0)
                        })), a && (h.debug("Looking for optional URL variables", o), e.each(a, function (o, a) {
                            var r = -1 !== a.indexOf("$") ? a.substr(3, a.length - 4) : a.substr(2, a.length - 3),
                                s = e.isPlainObject(n) && n[r] !== i ? n[r] : S.data(r) !== i ? S.data(r) : D.data(r) !== i ? D.data(r) : n[r];
                            s !== i ? (h.verbose("Optional variable Found", r, s), t = t.replace(a, s)) : (h.verbose("Optional variable not found", r), t = -1 !== t.indexOf("/" + a) ? t.replace("/" + a, "") : t.replace(a, ""))
                        }))), t
                    }, formData: function (t) {
                        var n, o = e.fn.serializeObject !== i, a = o ? A.serializeObject() : A.serialize();
                        return t = t || v.data, n = e.isPlainObject(t), n ? o ? (h.debug("Extending existing data with form data", t, a), t = e.extend(!0, {}, t, a)) : (h.error(C.missingSerialize), h.debug("Cant extend data. Replacing data with form data", t, a), t = a) : (h.debug("Adding form data", a), t = a), t
                    }
                }, send: {
                    request: function () {
                        h.set.loading(), h.request = h.create.request(), h.is.mocked() ? h.mockedXHR = h.create.mockedXHR() : h.xhr = h.create.xhr(), v.onRequest.call(E, h.request, h.xhr)
                    }
                }, event: {
                    trigger: function (e) {
                        h.query(), ("submit" == e.type || "click" == e.type) && e.preventDefault()
                    }, xhr: {
                        always: function () {
                        }, done: function (t, n, i) {
                            var o = this, a = (new Date).getTime() - p, r = v.loadingDuration - a,
                                s = e.isFunction(v.onResponse) ? v.onResponse.call(o, e.extend(!0, {}, t)) : !1;
                            r = r > 0 ? r : 0, s && (h.debug("Modified API response in onResponse callback", v.onResponse, s, t), t = s), r > 0 && h.debug("Response completed early delaying state change by", r), setTimeout(function () {
                                h.is.validResponse(t) ? h.request.resolveWith(o, [t, i]) : h.request.rejectWith(o, [i, "invalid"])
                            }, r)
                        }, fail: function (e, t, n) {
                            var i = this, o = (new Date).getTime() - p, a = v.loadingDuration - o;
                            a = a > 0 ? a : 0, a > 0 && h.debug("Response completed early delaying state change by", a), setTimeout(function () {
                                h.is.abortedRequest(e) ? h.request.rejectWith(i, [e, "aborted", n]) : h.request.rejectWith(i, [e, "error", t, n])
                            }, a)
                        }
                    }, request: {
                        done: function (e, t) {
                            h.debug("Successful API Response", e), "local" === v.cache && m && (h.write.cachedResponse(m, e), h.debug("Saving server response locally", h.cache)), v.onSuccess.call(E, e, S, t)
                        }, complete: function (e, t) {
                            var n, i;
                            h.was.succesful() ? (i = e, n = t) : (n = e, i = h.get.responseFromXHR(n)), h.remove.loading(), v.onComplete.call(E, i, S, n)
                        }, fail: function (e, t, n) {
                            var o = h.get.responseFromXHR(e), r = h.get.errorFromRequest(o, t, n);
                            "aborted" == t ? (h.debug("XHR Aborted (Most likely caused by page navigation or CORS Policy)", t, n), v.onAbort.call(E, t, S, e)) : "invalid" == t ? h.debug("JSON did not pass success test. A server-side error has most likely occurred", o) : "error" == t && e !== i && (h.debug("XHR produced a server error", t, n), 200 != e.status && n !== i && "" !== n && h.error(C.statusMessage + n, a.url), v.onError.call(E, r, S, e)), v.errorDuration && "aborted" !== t && (h.debug("Adding error state"), h.set.error(), h.should.removeError() && setTimeout(h.remove.error, v.errorDuration)), h.debug("API Request failed", r, e), v.onFailure.call(E, o, S, e)
                        }
                    }
                }, create: {
                    request: function () {
                        return e.Deferred().always(h.event.request.complete).done(h.event.request.done).fail(h.event.request.fail)
                    }, mockedXHR: function () {
                        var t, n, i, o = !1, a = !1, r = !1;
                        return i = e.Deferred().always(h.event.xhr.complete).done(h.event.xhr.done).fail(h.event.xhr.fail), v.mockResponse ? (e.isFunction(v.mockResponse) ? (h.debug("Using mocked callback returning response", v.mockResponse), n = v.mockResponse.call(E, v)) : (h.debug("Using specified response", v.mockResponse), n = v.mockResponse), i.resolveWith(E, [n, o, {responseText: n}])) : e.isFunction(v.mockResponseAsync) && (t = function (e) {
                            h.debug("Async callback returned response", e), e ? i.resolveWith(E, [e, o, {responseText: e}]) : i.rejectWith(E, [{responseText: e}, a, r])
                        }, h.debug("Using async mocked response", v.mockResponseAsync), v.mockResponseAsync.call(E, v, t)), i
                    }, xhr: function () {
                        var t;
                        return t = e.ajax(a).always(h.event.xhr.always).done(h.event.xhr.done).fail(h.event.xhr.fail), h.verbose("Created server request", t), t
                    }
                }, set: {
                    error: function () {
                        h.verbose("Adding error state to element", D), D.addClass(w.error)
                    }, loading: function () {
                        h.verbose("Adding loading state to element", D), D.addClass(w.loading), p = (new Date).getTime()
                    }
                }, remove: {
                    error: function () {
                        h.verbose("Removing error state from element", D), D.removeClass(w.error)
                    }, loading: function () {
                        h.verbose("Removing loading state from element", D), D.removeClass(w.loading)
                    }
                }, get: {
                    responseFromXHR: function (t) {
                        return e.isPlainObject(t) ? "json" == v.dataType || "jsonp" == v.dataType ? h.decode.json(t.responseText) : t.responseText : !1
                    }, errorFromRequest: function (t, n, o) {
                        return e.isPlainObject(t) && t.error !== i ? t.error : v.error[n] !== i ? v.error[n] : o
                    }, request: function () {
                        return h.request || !1
                    }, xhr: function () {
                        return h.xhr || !1
                    }, settings: function () {
                        var e;
                        return e = v.beforeSend.call(E, v), e && (e.success !== i && (h.debug("Legacy success callback detected", e), h.error(C.legacyParameters, e.success), e.onSuccess = e.success), e.failure !== i && (h.debug("Legacy failure callback detected", e), h.error(C.legacyParameters, e.failure), e.onFailure = e.failure), e.complete !== i && (h.debug("Legacy complete callback detected", e), h.error(C.legacyParameters, e.complete), e.onComplete = e.complete)), e === i && h.error(C.noReturnedValue), e !== i ? e : v
                    }, urlEncodedValue: function (e) {
                        var n = t.decodeURIComponent(e), i = t.encodeURIComponent(e), o = n !== e;
                        return o ? (h.debug("URL value is already encoded, avoiding double encoding", e), e) : (h.verbose("Encoding value using encodeURIComponent", e, i), i)
                    }, defaultData: function () {
                        var t = {};
                        return e.isWindow(R) || (h.is.input() ? t.value = S.val() : h.is.form() && (t.text = S.text())), t
                    }, event: function () {
                        return e.isWindow(R) || "now" == v.on ? (h.debug("API called without element, no events attached"), !1) : "auto" == v.on ? S.is("input") ? R.oninput !== i ? "input" : R.onpropertychange !== i ? "propertychange" : "keyup" : S.is("form") ? "submit" : "click" : v.on
                    }, templatedURL: function (e) {
                        if (e = e || S.data(y.action) || v.action || !1, m = S.data(y.url) || v.url || !1) return h.debug("Using specified url", m), m;
                        if (e) {
                            if (h.debug("Looking up url for action", e, v.api), v.api[e] === i && !h.is.mocked()) return void h.error(C.missingAction, v.action, v.api);
                            m = v.api[e]
                        } else h.is.form() && (m = S.attr("action") || D.attr("action") || !1, h.debug("No url or action specified, defaulting to form action", m));
                        return m
                    }
                }, abort: function () {
                    var e = h.get.xhr();
                    e && "resolved" !== e.state() && (h.debug("Cancelling API request"), e.abort())
                }, reset: function () {
                    h.remove.error(), h.remove.loading()
                }, setting: function (t, n) {
                    if (h.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, v, t); else {
                        if (n === i) return v[t];
                        v[t] = n
                    }
                }, internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, h, t); else {
                        if (n === i) return h[t];
                        h[t] = n
                    }
                }, debug: function () {
                    v.debug && (v.performance ? h.performance.log(arguments) : (h.debug = Function.prototype.bind.call(console.info, console, v.name + ":"), h.debug.apply(console, arguments)))
                }, verbose: function () {
                    v.verbose && v.debug && (v.performance ? h.performance.log(arguments) : (h.verbose = Function.prototype.bind.call(console.info, console, v.name + ":"), h.verbose.apply(console, arguments)))
                }, error: function () {
                    h.error = Function.prototype.bind.call(console.error, console, v.name + ":"), h.error.apply(console, arguments)
                }, performance: {
                    log: function (e) {
                        var t, n, i;
                        v.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            "Execution Time": n
                        })), clearTimeout(h.performance.timer), h.performance.timer = setTimeout(h.performance.display, 500)
                    }, display: function () {
                        var t = v.name + ":", n = 0;
                        s = !1, clearTimeout(h.performance.timer), e.each(c, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), c = []
                    }
                }, invoke: function (t, n, a) {
                    var r, s, c, l = P;
                    return n = n || d, a = R || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                        var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[a]) && n != r) l = l[a]; else {
                            if (l[a] !== i) return s = l[a], !1;
                            if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (h.error(C.method, t), !1);
                            l = l[o]
                        }
                    })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                }
            }, u ? (P === i && h.initialize(), h.invoke(l)) : (P !== i && P.invoke("destroy"), h.initialize())
        }), o !== i ? o : this
    }, e.api.settings = {
        name: "API",
        namespace: "api",
        debug: !1,
        verbose: !1,
        performance: !0,
        api: {},
        cache: !0,
        interruptRequests: !0,
        on: "auto",
        stateContext: !1,
        loadingDuration: 0,
        hideError: "auto",
        errorDuration: 2e3,
        encodeParameters: !0,
        action: !1,
        url: !1,
        base: "",
        urlData: {},
        defaultData: !0,
        serializeForm: !1,
        throttle: 0,
        throttleFirstRequest: !0,
        method: "get",
        data: {},
        dataType: "json",
        mockResponse: !1,
        mockResponseAsync: !1,
        beforeSend: function (e) {
            return e
        },
        beforeXHR: function (e) {
        },
        onRequest: function (e, t) {
        },
        onResponse: !1,
        onSuccess: function (e, t) {
        },
        onComplete: function (e, t) {
        },
        onFailure: function (e, t) {
        },
        onError: function (e, t) {
        },
        onAbort: function (e, t) {
        },
        successTest: !1,
        error: {
            beforeSend: "The before send function has aborted the request",
            error: "There was an error with your request",
            exitConditions: "API Request Aborted. Exit conditions met",
            JSONParse: "JSON could not be parsed during error handling",
            legacyParameters: "You are using legacy API success callback names",
            method: "The method you called is not defined",
            missingAction: "API action used but no url was defined",
            missingSerialize: "jquery-serialize-object is required to add form data to an existing data object",
            missingURL: "No URL specified for api event",
            noReturnedValue: "The beforeSend callback must return a settings object, beforeSend ignored.",
            noStorage: "Caching responses locally requires session storage",
            parseError: "There was an error parsing your request",
            requiredParameter: "Missing a required URL parameter: ",
            statusMessage: "Server gave an error: ",
            timeout: "Your request timed out"
        },
        regExp: {required: /\{\$*[A-z0-9]+\}/g, optional: /\{\/\$*[A-z0-9]+\}/g},
        className: {loading: "loading", error: "error"},
        selector: {disabled: ".disabled", form: "form"},
        metadata: {action: "action", url: "url"}
    }
}(jQuery, window, document), function (e, t, n, i) {
    "use strict";
    e.fn.state = function (t) {
        var o, a = e(this), r = a.selector || "", s = ("ontouchstart" in n.documentElement, (new Date).getTime()),
            c = [], l = arguments[0], u = "string" == typeof l, d = [].slice.call(arguments, 1);
        return a.each(function () {
            var n,
                f = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.state.settings, t) : e.extend({}, e.fn.state.settings),
                m = f.error, g = f.metadata, p = f.className, h = f.namespace, v = f.states, b = f.text, y = "." + h,
                x = h + "-module", C = e(this), w = this, k = C.data(x);
            n = {
                initialize: function () {
                    n.verbose("Initializing module"), f.automatic && n.add.defaults(), f.context && "" !== r ? e(f.context).on(r, "mouseenter" + y, n.change.text).on(r, "mouseleave" + y, n.reset.text).on(r, "click" + y, n.toggle.state) : C.on("mouseenter" + y, n.change.text).on("mouseleave" + y, n.reset.text).on("click" + y, n.toggle.state), n.instantiate()
                }, instantiate: function () {
                    n.verbose("Storing instance of module", n), k = n, C.data(x, n)
                }, destroy: function () {
                    n.verbose("Destroying previous module", k), C.off(y).removeData(x)
                }, refresh: function () {
                    n.verbose("Refreshing selector cache"), C = e(w)
                }, add: {
                    defaults: function () {
                        var o = t && e.isPlainObject(t.states) ? t.states : {};
                        e.each(f.defaults, function (t, a) {
                            n.is[t] !== i && n.is[t]() && (n.verbose("Adding default states", t, w), e.extend(f.states, a, o))
                        })
                    }
                }, is: {
                    active: function () {
                        return C.hasClass(p.active)
                    }, loading: function () {
                        return C.hasClass(p.loading)
                    }, inactive: function () {
                        return !C.hasClass(p.active)
                    }, state: function (e) {
                        return p[e] === i ? !1 : C.hasClass(p[e])
                    }, enabled: function () {
                        return !C.is(f.filter.active)
                    }, disabled: function () {
                        return C.is(f.filter.active)
                    }, textEnabled: function () {
                        return !C.is(f.filter.text)
                    }, button: function () {
                        return C.is(".button:not(a, .submit)")
                    }, input: function () {
                        return C.is("input")
                    }, progress: function () {
                        return C.is(".ui.progress")
                    }
                }, allow: function (e) {
                    n.debug("Now allowing state", e), v[e] = !0
                }, disallow: function (e) {
                    n.debug("No longer allowing", e), v[e] = !1
                }, allows: function (e) {
                    return v[e] || !1
                }, enable: function () {
                    C.removeClass(p.disabled)
                }, disable: function () {
                    C.addClass(p.disabled)
                }, setState: function (e) {
                    n.allows(e) && C.addClass(p[e])
                }, removeState: function (e) {
                    n.allows(e) && C.removeClass(p[e])
                }, toggle: {
                    state: function () {
                        var t, o;
                        if (n.allows("active") && n.is.enabled()) {
                            if (n.refresh(), e.fn.api !== i) if (t = C.api("get request"), o = C.api("was cancelled")) n.debug("API Request cancelled by beforesend"), f.activateTest = function () {
                                return !1
                            }, f.deactivateTest = function () {
                                return !1
                            }; else if (t) return void n.listenTo(t);
                            n.change.state()
                        }
                    }
                }, listenTo: function (t) {
                    n.debug("API request detected, waiting for state signal", t), t && (b.loading && n.update.text(b.loading), e.when(t).then(function () {
                        "resolved" == t.state() ? (n.debug("API request succeeded"), f.activateTest = function () {
                            return !0
                        }, f.deactivateTest = function () {
                            return !0
                        }) : (n.debug("API request failed"), f.activateTest = function () {
                            return !1
                        }, f.deactivateTest = function () {
                            return !1
                        }), n.change.state()
                    }))
                }, change: {
                    state: function () {
                        n.debug("Determining state change direction"), n.is.inactive() ? n.activate() : n.deactivate(), f.sync && n.sync(), f.onChange.call(w)
                    }, text: function () {
                        n.is.textEnabled() && (n.is.disabled() ? (n.verbose("Changing text to disabled text", b.hover), n.update.text(b.disabled)) : n.is.active() ? b.hover ? (n.verbose("Changing text to hover text", b.hover), n.update.text(b.hover)) : b.deactivate && (n.verbose("Changing text to deactivating text", b.deactivate), n.update.text(b.deactivate)) : b.hover ? (n.verbose("Changing text to hover text", b.hover), n.update.text(b.hover)) : b.activate && (n.verbose("Changing text to activating text", b.activate), n.update.text(b.activate)))
                    }
                }, activate: function () {
                    f.activateTest.call(w) && (n.debug("Setting state to active"), C.addClass(p.active), n.update.text(b.active), f.onActivate.call(w))
                }, deactivate: function () {
                    f.deactivateTest.call(w) && (n.debug("Setting state to inactive"), C.removeClass(p.active), n.update.text(b.inactive), f.onDeactivate.call(w))
                }, sync: function () {
                    n.verbose("Syncing other buttons to current state"), n.is.active() ? a.not(C).state("activate") : a.not(C).state("deactivate")
                }, get: {
                    text: function () {
                        return f.selector.text ? C.find(f.selector.text).text() : C.html()
                    }, textFor: function (e) {
                        return b[e] || !1
                    }
                }, flash: {
                    text: function (e, t, i) {
                        var o = n.get.text();
                        n.debug("Flashing text message", e, t), e = e || f.text.flash, t = t || f.flashDuration, i = i || function () {
                        }, n.update.text(e), setTimeout(function () {
                            n.update.text(o), i.call(w)
                        }, t)
                    }
                }, reset: {
                    text: function () {
                        var e = b.active || C.data(g.storedText), t = b.inactive || C.data(g.storedText);
                        n.is.textEnabled() && (n.is.active() && e ? (n.verbose("Resetting active text", e), n.update.text(e)) : t && (n.verbose("Resetting inactive text", e), n.update.text(t)))
                    }
                }, update: {
                    text: function (e) {
                        var t = n.get.text();
                        e && e !== t ? (n.debug("Updating text", e), f.selector.text ? C.data(g.storedText, e).find(f.selector.text).text(e) : C.data(g.storedText, e).html(e)) : n.debug("Text is already set, ignoring update", e)
                    }
                }, setting: function (t, o) {
                    if (n.debug("Changing setting", t, o), e.isPlainObject(t)) e.extend(!0, f, t); else {
                        if (o === i) return f[t];
                        f[t] = o
                    }
                }, internal: function (t, o) {
                    if (e.isPlainObject(t)) e.extend(!0, n, t); else {
                        if (o === i) return n[t];
                        n[t] = o
                    }
                }, debug: function () {
                    f.debug && (f.performance ? n.performance.log(arguments) : (n.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), n.debug.apply(console, arguments)))
                }, verbose: function () {
                    f.verbose && f.debug && (f.performance ? n.performance.log(arguments) : (n.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), n.verbose.apply(console, arguments)))
                }, error: function () {
                    n.error = Function.prototype.bind.call(console.error, console, f.name + ":"), n.error.apply(console, arguments)
                }, performance: {
                    log: function (e) {
                        var t, i, o;
                        f.performance && (t = (new Date).getTime(), o = s || t, i = t - o, s = t, c.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: w,
                            "Execution Time": i
                        })), clearTimeout(n.performance.timer), n.performance.timer = setTimeout(n.performance.display, 500)
                    }, display: function () {
                        var t = f.name + ":", o = 0;
                        s = !1, clearTimeout(n.performance.timer), e.each(c, function (e, t) {
                            o += t["Execution Time"]
                        }), t += " " + o + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), c = []
                    }
                }, invoke: function (t, a, r) {
                    var s, c, l, u = k;
                    return a = a || d, r = w || r, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function (o, a) {
                        var r = o != s ? a + t[o + 1].charAt(0).toUpperCase() + t[o + 1].slice(1) : t;
                        if (e.isPlainObject(u[r]) && o != s) u = u[r]; else {
                            if (u[r] !== i) return c = u[r], !1;
                            if (!e.isPlainObject(u[a]) || o == s) return u[a] !== i ? (c = u[a], !1) : (n.error(m.method, t), !1);
                            u = u[a]
                        }
                    })), e.isFunction(c) ? l = c.apply(r, a) : c !== i && (l = c), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), c
                }
            }, u ? (k === i && n.initialize(), n.invoke(l)) : (k !== i && k.invoke("destroy"), n.initialize())
        }), o !== i ? o : this
    }, e.fn.state.settings = {
        name: "State",
        debug: !1,
        verbose: !1,
        namespace: "state",
        performance: !0,
        onActivate: function () {
        },
        onDeactivate: function () {
        },
        onChange: function () {
        },
        activateTest: function () {
            return !0
        },
        deactivateTest: function () {
            return !0
        },
        automatic: !0,
        sync: !1,
        flashDuration: 1e3,
        filter: {text: ".loading, .disabled", active: ".disabled"},
        context: !1,
        error: {
            beforeSend: "The before send function has cancelled state change",
            method: "The method you called is not defined."
        },
        metadata: {promise: "promise", storedText: "stored-text"},
        className: {
            active: "active",
            disabled: "disabled",
            error: "error",
            loading: "loading",
            success: "success",
            warning: "warning"
        },
        selector: {text: !1},
        defaults: {
            input: {disabled: !0, loading: !0, active: !0},
            button: {disabled: !0, loading: !0, active: !0},
            progress: {active: !0, success: !0, warning: !0, error: !0}
        },
        states: {active: !0, disabled: !0, error: !0, loading: !0, success: !0, warning: !0},
        text: {disabled: !1, flash: !1, hover: !1, active: !1, inactive: !1, activate: !1, deactivate: !1}
    }
}(jQuery, window, document), function (e, t, n, i) {
    "use strict";
    e.fn.visibility = function (o) {
        var a, r = e(this), s = r.selector || "", c = (new Date).getTime(), l = [], u = arguments[0],
            d = "string" == typeof u, f = [].slice.call(arguments, 1);
        return r.each(function () {
            var r, m, g,
                p = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.visibility.settings, o) : e.extend({}, e.fn.visibility.settings),
                h = p.className, v = p.namespace, b = p.error, y = p.metadata, x = "." + v, C = "module-" + v, w = e(t),
                k = e(this), T = e(p.context), S = (k.selector || "", k.data(C)),
                A = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                    setTimeout(e, 0)
                }, D = this, R = !1;
            g = {
                initialize: function () {
                    g.debug("Initializing", p), g.setup.cache(), g.should.trackChanges() && ("image" == p.type && g.setup.image(), "fixed" == p.type && g.setup.fixed(), p.observeChanges && g.observeChanges(), g.bind.events()), g.save.position(), g.is.visible() || g.error(b.visible, k), p.initialCheck && g.checkVisibility(), g.instantiate()
                }, instantiate: function () {
                    g.debug("Storing instance", g), k.data(C, g), S = g
                }, destroy: function () {
                    g.verbose("Destroying previous module"), m && m.disconnect(), w.off("load" + x, g.event.load).off("resize" + x, g.event.resize), T.off("scrollchange" + x, g.event.scrollchange), k.off(x).removeData(C)
                }, observeChanges: function () {
                    "MutationObserver" in t && (m = new MutationObserver(function (e) {
                        g.verbose("DOM tree modified, updating visibility calculations"), g.timer = setTimeout(function () {
                            g.verbose("DOM tree modified, updating sticky menu"), g.refresh()
                        }, 100)
                    }), m.observe(D, {childList: !0, subtree: !0}), g.debug("Setting up mutation observer", m))
                }, bind: {
                    events: function () {
                        g.verbose("Binding visibility events to scroll and resize"), p.refreshOnLoad && w.on("load" + x, g.event.load), w.on("resize" + x, g.event.resize), T.off("scroll" + x).on("scroll" + x, g.event.scroll).on("scrollchange" + x, g.event.scrollchange)
                    }
                }, event: {
                    resize: function () {
                        g.debug("Window resized"), p.refreshOnResize && A(g.refresh)
                    }, load: function () {
                        g.debug("Page finished loading"), A(g.refresh)
                    }, scroll: function () {
                        p.throttle ? (clearTimeout(g.timer), g.timer = setTimeout(function () {
                            T.triggerHandler("scrollchange" + x, [T.scrollTop()])
                        }, p.throttle)) : A(function () {
                            T.triggerHandler("scrollchange" + x, [T.scrollTop()])
                        })
                    }, scrollchange: function (e, t) {
                        g.checkVisibility(t)
                    }
                }, precache: function (t, i) {
                    t instanceof Array || (t = [t]);
                    for (var o = t.length, a = 0, r = [], s = n.createElement("img"), c = function () {
                        a++, a >= t.length && e.isFunction(i) && i()
                    }; o--;) s = n.createElement("img"), s.onload = c, s.onerror = c, s.src = t[o], r.push(s)
                }, enableCallbacks: function () {
                    g.debug("Allowing callbacks to occur"), R = !1
                }, disableCallbacks: function () {
                    g.debug("Disabling all callbacks temporarily"), R = !0
                }, should: {
                    trackChanges: function () {
                        return d ? (g.debug("One time query, no need to bind events"), !1) : (g.debug("Callbacks being attached"), !0)
                    }
                }, setup: {
                    cache: function () {
                        g.cache = {occurred: {}, screen: {}, element: {}}
                    }, image: function () {
                        var e = k.data(y.src);
                        e && (g.verbose("Lazy loading image", e), p.once = !0, p.observeChanges = !1, p.onOnScreen = function () {
                            g.debug("Image on screen", D), g.precache(e, function () {
                                g.set.image(e)
                            })
                        })
                    }, fixed: function () {
                        g.debug("Setting up fixed"), p.once = !1, p.observeChanges = !1, p.initialCheck = !0, p.refreshOnLoad = !0, o.transition || (p.transition = !1), g.create.placeholder(), g.debug("Added placeholder", r), p.onTopPassed = function () {
                            g.debug("Element passed, adding fixed position", k), g.show.placeholder(), g.set.fixed(), p.transition && e.fn.transition !== i && k.transition(p.transition, p.duration)
                        }, p.onTopPassedReverse = function () {
                            g.debug("Element returned to position, removing fixed", k), g.hide.placeholder(), g.remove.fixed()
                        }
                    }
                }, create: {
                    placeholder: function () {
                        g.verbose("Creating fixed position placeholder"), r = k.clone(!1).css("display", "none").addClass(h.placeholder).insertAfter(k)
                    }
                }, show: {
                    placeholder: function () {
                        g.verbose("Showing placeholder"), r.css("display", "block").css("visibility", "hidden")
                    }
                }, hide: {
                    placeholder: function () {
                        g.verbose("Hiding placeholder"), r.css("display", "none").css("visibility", "")
                    }
                }, set: {
                    fixed: function () {
                        g.verbose("Setting element to fixed position"), k.addClass(h.fixed).css({
                            position: "fixed",
                            top: p.offset + "px",
                            left: "auto",
                            zIndex: "1"
                        })
                    }, image: function (t) {
                        k.attr("src", t), p.transition ? e.fn.transition !== i ? k.transition(p.transition, p.duration) : k.fadeIn(p.duration) : k.show()
                    }
                }, is: {
                    onScreen: function () {
                        var e = g.get.elementCalculations();
                        return e.onScreen
                    }, offScreen: function () {
                        var e = g.get.elementCalculations();
                        return e.offScreen
                    }, visible: function () {
                        return g.cache && g.cache.element ? !(0 === g.cache.element.width && 0 === g.cache.element.offset.top) : !1
                    }
                }, refresh: function () {
                    g.debug("Refreshing constants (width/height)"), "fixed" == p.type && (g.remove.fixed(), g.remove.occurred()), g.reset(), g.save.position(), p.checkOnRefresh && g.checkVisibility(), p.onRefresh.call(D)
                }, reset: function () {
                    g.verbose("Reseting all cached values"), e.isPlainObject(g.cache) && (g.cache.screen = {}, g.cache.element = {})
                }, checkVisibility: function (e) {
                    g.verbose("Checking visibility of element", g.cache.element), !R && g.is.visible() && (g.save.scroll(e), g.save.calculations(), g.passed(), g.passingReverse(), g.topVisibleReverse(), g.bottomVisibleReverse(), g.topPassedReverse(), g.bottomPassedReverse(), g.onScreen(), g.offScreen(), g.passing(), g.topVisible(), g.bottomVisible(), g.topPassed(), g.bottomPassed(), p.onUpdate && p.onUpdate.call(D, g.get.elementCalculations()))
                }, passed: function (t, n) {
                    var o = g.get.elementCalculations();
                    if (t && n) p.onPassed[t] = n; else {
                        if (t !== i) return g.get.pixelsPassed(t) > o.pixelsPassed;
                        o.passing && e.each(p.onPassed, function (e, t) {
                            o.bottomVisible || o.pixelsPassed > g.get.pixelsPassed(e) ? g.execute(t, e) : p.once || g.remove.occurred(t)
                        })
                    }
                }, onScreen: function (e) {
                    var t = g.get.elementCalculations(), n = e || p.onOnScreen, o = "onScreen";
                    return e && (g.debug("Adding callback for onScreen", e), p.onOnScreen = e), t.onScreen ? g.execute(n, o) : p.once || g.remove.occurred(o), e !== i ? t.onOnScreen : void 0
                }, offScreen: function (e) {
                    var t = g.get.elementCalculations(), n = e || p.onOffScreen, o = "offScreen";
                    return e && (g.debug("Adding callback for offScreen", e), p.onOffScreen = e), t.offScreen ? g.execute(n, o) : p.once || g.remove.occurred(o), e !== i ? t.onOffScreen : void 0
                }, passing: function (e) {
                    var t = g.get.elementCalculations(), n = e || p.onPassing, o = "passing";
                    return e && (g.debug("Adding callback for passing", e), p.onPassing = e), t.passing ? g.execute(n, o) : p.once || g.remove.occurred(o), e !== i ? t.passing : void 0
                }, topVisible: function (e) {
                    var t = g.get.elementCalculations(), n = e || p.onTopVisible, o = "topVisible";
                    return e && (g.debug("Adding callback for top visible", e), p.onTopVisible = e), t.topVisible ? g.execute(n, o) : p.once || g.remove.occurred(o), e === i ? t.topVisible : void 0
                }, bottomVisible: function (e) {
                    var t = g.get.elementCalculations(), n = e || p.onBottomVisible, o = "bottomVisible";
                    return e && (g.debug("Adding callback for bottom visible", e), p.onBottomVisible = e), t.bottomVisible ? g.execute(n, o) : p.once || g.remove.occurred(o), e === i ? t.bottomVisible : void 0
                }, topPassed: function (e) {
                    var t = g.get.elementCalculations(), n = e || p.onTopPassed, o = "topPassed";
                    return e && (g.debug("Adding callback for top passed", e), p.onTopPassed = e), t.topPassed ? g.execute(n, o) : p.once || g.remove.occurred(o), e === i ? t.topPassed : void 0
                }, bottomPassed: function (e) {
                    var t = g.get.elementCalculations(), n = e || p.onBottomPassed, o = "bottomPassed";
                    return e && (g.debug("Adding callback for bottom passed", e), p.onBottomPassed = e), t.bottomPassed ? g.execute(n, o) : p.once || g.remove.occurred(o), e === i ? t.bottomPassed : void 0
                }, passingReverse: function (e) {
                    var t = g.get.elementCalculations(), n = e || p.onPassingReverse, o = "passingReverse";
                    return e && (g.debug("Adding callback for passing reverse", e), p.onPassingReverse = e), t.passing ? p.once || g.remove.occurred(o) : g.get.occurred("passing") && g.execute(n, o), e !== i ? !t.passing : void 0
                }, topVisibleReverse: function (e) {
                    var t = g.get.elementCalculations(), n = e || p.onTopVisibleReverse, o = "topVisibleReverse";
                    return e && (g.debug("Adding callback for top visible reverse", e), p.onTopVisibleReverse = e), t.topVisible ? p.once || g.remove.occurred(o) : g.get.occurred("topVisible") && g.execute(n, o), e === i ? !t.topVisible : void 0
                }, bottomVisibleReverse: function (e) {
                    var t = g.get.elementCalculations(), n = e || p.onBottomVisibleReverse, o = "bottomVisibleReverse";
                    return e && (g.debug("Adding callback for bottom visible reverse", e), p.onBottomVisibleReverse = e), t.bottomVisible ? p.once || g.remove.occurred(o) : g.get.occurred("bottomVisible") && g.execute(n, o), e === i ? !t.bottomVisible : void 0
                }, topPassedReverse: function (e) {
                    var t = g.get.elementCalculations(), n = e || p.onTopPassedReverse, o = "topPassedReverse";
                    return e && (g.debug("Adding callback for top passed reverse", e), p.onTopPassedReverse = e), t.topPassed ? p.once || g.remove.occurred(o) : g.get.occurred("topPassed") && g.execute(n, o), e === i ? !t.onTopPassed : void 0
                }, bottomPassedReverse: function (e) {
                    var t = g.get.elementCalculations(), n = e || p.onBottomPassedReverse, o = "bottomPassedReverse";
                    return e && (g.debug("Adding callback for bottom passed reverse", e), p.onBottomPassedReverse = e), t.bottomPassed ? p.once || g.remove.occurred(o) : g.get.occurred("bottomPassed") && g.execute(n, o), e === i ? !t.bottomPassed : void 0
                }, execute: function (e, t) {
                    var n = g.get.elementCalculations(), i = g.get.screenCalculations();
                    e = e || !1, e && (p.continuous ? (g.debug("Callback being called continuously", t, n), e.call(D, n, i)) : g.get.occurred(t) || (g.debug("Conditions met", t, n), e.call(D, n, i))), g.save.occurred(t)
                }, remove: {
                    fixed: function () {
                        g.debug("Removing fixed position"), k.removeClass(h.fixed).css({
                            position: "",
                            top: "",
                            left: "",
                            zIndex: ""
                        })
                    }, occurred: function (e) {
                        if (e) {
                            var t = g.cache.occurred;
                            t[e] !== i && t[e] === !0 && (g.debug("Callback can now be called again", e), g.cache.occurred[e] = !1)
                        } else g.cache.occurred = {}
                    }
                }, save: {
                    calculations: function () {
                        g.verbose("Saving all calculations necessary to determine positioning"), g.save.direction(), g.save.screenCalculations(), g.save.elementCalculations()
                    }, occurred: function (e) {
                        e && (g.cache.occurred[e] === i || g.cache.occurred[e] !== !0) && (g.verbose("Saving callback occurred", e), g.cache.occurred[e] = !0)
                    }, scroll: function (e) {
                        e = e + p.offset || T.scrollTop() + p.offset, g.cache.scroll = e
                    }, direction: function () {
                        var e, t = g.get.scroll(), n = g.get.lastScroll();
                        return e = t > n && n ? "down" : n > t && n ? "up" : "static", g.cache.direction = e, g.cache.direction
                    }, elementPosition: function () {
                        var e = g.cache.element, t = g.get.screenSize();
                        return g.verbose("Saving element position"), e.fits = e.height < t.height, e.offset = k.offset(), e.width = k.outerWidth(), e.height = k.outerHeight(), g.cache.element = e, e
                    }, elementCalculations: function () {
                        var e = g.get.screenCalculations(), t = g.get.elementPosition();
                        return p.includeMargin ? (t.margin = {}, t.margin.top = parseInt(k.css("margin-top"), 10), t.margin.bottom = parseInt(k.css("margin-bottom"), 10), t.top = t.offset.top - t.margin.top, t.bottom = t.offset.top + t.height + t.margin.bottom) : (t.top = t.offset.top, t.bottom = t.offset.top + t.height), t.topVisible = e.bottom >= t.top, t.topPassed = e.top >= t.top, t.bottomVisible = e.bottom >= t.bottom, t.bottomPassed = e.top >= t.bottom, t.pixelsPassed = 0, t.percentagePassed = 0, t.onScreen = t.topVisible && !t.bottomPassed, t.passing = t.topPassed && !t.bottomPassed, t.offScreen = !t.onScreen, t.passing && (t.pixelsPassed = e.top - t.top, t.percentagePassed = (e.top - t.top) / t.height), g.cache.element = t, g.verbose("Updated element calculations", t), t
                    }, screenCalculations: function () {
                        var e = g.get.scroll();
                        return g.save.direction(), g.cache.screen.top = e, g.cache.screen.bottom = e + g.cache.screen.height, g.cache.screen
                    }, screenSize: function () {
                        g.verbose("Saving window position"), g.cache.screen = {height: T.height()}
                    }, position: function () {
                        g.save.screenSize(), g.save.elementPosition()
                    }
                }, get: {
                    pixelsPassed: function (e) {
                        var t = g.get.elementCalculations();
                        return e.search("%") > -1 ? t.height * (parseInt(e, 10) / 100) : parseInt(e, 10)
                    }, occurred: function (e) {
                        return g.cache.occurred !== i ? g.cache.occurred[e] || !1 : !1
                    }, direction: function () {
                        return g.cache.direction === i && g.save.direction(), g.cache.direction
                    }, elementPosition: function () {
                        return g.cache.element === i && g.save.elementPosition(), g.cache.element
                    }, elementCalculations: function () {
                        return g.cache.element === i && g.save.elementCalculations(), g.cache.element
                    }, screenCalculations: function () {
                        return g.cache.screen === i && g.save.screenCalculations(), g.cache.screen
                    }, screenSize: function () {
                        return g.cache.screen === i && g.save.screenSize(), g.cache.screen
                    }, scroll: function () {
                        return g.cache.scroll === i && g.save.scroll(), g.cache.scroll
                    }, lastScroll: function () {
                        return g.cache.screen === i ? (g.debug("First scroll event, no last scroll could be found"), !1) : g.cache.screen.top
                    }
                }, setting: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, p, t); else {
                        if (n === i) return p[t];
                        p[t] = n
                    }
                }, internal: function (t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, g, t); else {
                        if (n === i) return g[t];
                        g[t] = n
                    }
                }, debug: function () {
                    p.debug && (p.performance ? g.performance.log(arguments) : (g.debug = Function.prototype.bind.call(console.info, console, p.name + ":"), g.debug.apply(console, arguments)))
                }, verbose: function () {
                    p.verbose && p.debug && (p.performance ? g.performance.log(arguments) : (g.verbose = Function.prototype.bind.call(console.info, console, p.name + ":"), g.verbose.apply(console, arguments)))
                }, error: function () {
                    g.error = Function.prototype.bind.call(console.error, console, p.name + ":"), g.error.apply(console, arguments)
                }, performance: {
                    log: function (e) {
                        var t, n, i;
                        p.performance && (t = (new Date).getTime(), i = c || t, n = t - i, c = t, l.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: D,
                            "Execution Time": n
                        })), clearTimeout(g.performance.timer), g.performance.timer = setTimeout(g.performance.display, 500)
                    }, display: function () {
                        var t = p.name + ":", n = 0;
                        c = !1, clearTimeout(g.performance.timer), e.each(l, function (e, t) {
                            n += t["Execution Time"]
                        }), t += " " + n + "ms", s && (t += " '" + s + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), l = []
                    }
                }, invoke: function (t, n, o) {
                    var r, s, c, l = S;
                    return n = n || f, o = D || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                        var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[a]) && n != r) l = l[a]; else {
                            if (l[a] !== i) return s = l[a], !1;
                            if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (g.error(b.method, t), !1);
                            l = l[o]
                        }
                    })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                }
            }, d ? (S === i && g.initialize(), S.save.scroll(), S.save.calculations(), g.invoke(u)) : (S !== i && S.invoke("destroy"), g.initialize())
        }), a !== i ? a : this
    }, e.fn.visibility.settings = {
        name: "Visibility",
        namespace: "visibility",
        debug: !1,
        verbose: !1,
        performance: !0,
        observeChanges: !0,
        initialCheck: !0,
        refreshOnLoad: !0,
        refreshOnResize: !0,
        checkOnRefresh: !0,
        once: !0,
        continuous: !1,
        offset: 0,
        includeMargin: !1,
        context: t,
        throttle: !1,
        type: !1,
        transition: "fade in",
        duration: 1e3,
        onPassed: {},
        onOnScreen: !1,
        onOffScreen: !1,
        onPassing: !1,
        onTopVisible: !1,
        onBottomVisible: !1,
        onTopPassed: !1,
        onBottomPassed: !1,
        onPassingReverse: !1,
        onTopVisibleReverse: !1,
        onBottomVisibleReverse: !1,
        onTopPassedReverse: !1,
        onBottomPassedReverse: !1,
        onUpdate: !1,
        onRefresh: function () {
        },
        metadata: {src: "src"},
        className: {fixed: "fixed", placeholder: "placeholder"},
        error: {
            method: "The method you called is not defined.",
            visible: "Element is hidden, you must call refresh after element becomes visible"
        }
    }
}(jQuery, window, document);