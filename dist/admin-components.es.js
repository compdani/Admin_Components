import { mergeModels as pe, useModel as re, createElementBlock as L, openBlock as p, Fragment as te, renderList as ie, createBlock as P, resolveDynamicComponent as pt, mergeProps as Ce, withModifiers as Ae, createSlots as Ke, withCtx as h, createCommentVNode as T, createTextVNode as U, toDisplayString as de, watch as xe, defineComponent as ue, toRefs as _e, ref as R, nextTick as ge, onMounted as ke, onBeforeUnmount as Se, onActivated as Lt, onDeactivated as Bt, h as be, resolveComponent as S, createVNode as m, unref as v, inject as J, computed as fe, createElementVNode as N, normalizeClass as ce, provide as le, renderSlot as X, Transition as ht, normalizeProps as gt, Teleport as bt, reactive as et, normalizeStyle as Ve, useSlots as _t, guardReactiveProps as Tt, render as tt, markRaw as zt, capitalize as $t, shallowRef as jt } from "vue";
import Dt from "ace-builds";
const Me = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, r] of t)
    n[l] = r;
  return n;
}, Ut = ["innerHTML"], Ft = ["innerHTML", "onContextmenu"], Nt = {
  __name: "JsonComponents",
  props: /* @__PURE__ */ pe({
    draggable_pro: {
      type: Boolean,
      default: !0
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ pe(["updateSections", "openEdit"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const n = re(e, "modelValue"), l = t;
    function r(i) {
      const d = {};
      return d[i] ? d[i] : i;
    }
    function o(i, d, c) {
      l("openEdit", { event: i, element: d, path: [c] });
    }
    function a(i, d, c, w) {
      let y = [];
      c !== null && y.push(c), d !== null && y.push(d), w === "children" ? (y.push("children"), i.path && (y = [...y, ...i.path])) : w === "slot" && (i.path ? (y.push("slots", d, "children"), y = [...y, ...i.path]) : y.push("slots", d)), l("openEdit", {
        event: i.event,
        element: i.element,
        path: y
      });
    }
    function u(i, d, c, w) {
      l("openEdit", { event: i, element: d.slots[w], path: [c, "slots", w] });
    }
    return (i, d) => (p(!0), L(te, null, ie(n.value, (c, w) => (p(), P(pt(r(c.component)), Ce({ ref_for: !0 }, c.props, {
      onContextmenu: Ae((y) => o(y, c, w), ["stop"])
    }), Ke({
      default: h(() => [
        c.children ? (p(), P(Ne, {
          key: 0,
          modelValue: c.children,
          "onUpdate:modelValue": (y) => c.children = y,
          draggable_pro: e.draggable_pro,
          onOpenEdit: (y) => a(y, null, w, "children")
        }, null, 8, ["modelValue", "onUpdate:modelValue", "draggable_pro", "onOpenEdit"])) : T("", !0),
        c.htmlContent ? (p(), L("div", {
          key: 1,
          innerHTML: c.htmlContent
        }, null, 8, Ut)) : T("", !0),
        c.textContent ? (p(), L(te, { key: 2 }, [
          U(de(c.textContent), 1)
        ], 64)) : T("", !0)
      ]),
      _: 2
    }, [
      ie(c.slots, (y, k) => ({
        name: y.name,
        fn: h(() => [
          y.children ? (p(), P(Ne, {
            key: 0,
            modelValue: y.children,
            "onUpdate:modelValue": (C) => y.children = C,
            draggable_pro: e.draggable_pro,
            onOpenEdit: (C) => a(C, k, w, "slot")
          }, null, 8, ["modelValue", "onUpdate:modelValue", "draggable_pro", "onOpenEdit"])) : T("", !0),
          y.htmlContent ? (p(), L("div", {
            key: 1,
            innerHTML: y.htmlContent,
            onContextmenu: Ae((C) => u(C, c, w, k), ["stop"])
          }, null, 40, Ft)) : T("", !0),
          y.textContent ? (p(), L(te, { key: 2 }, [
            U(de(y.textContent), 1)
          ], 64)) : T("", !0)
        ])
      }))
    ]), 1040, ["onContextmenu"]))), 256));
  }
}, Ne = /* @__PURE__ */ Me(Nt, [["__scopeId", "data-v-e879fa16"]]), qt = {
  content_css: [
    "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
  ],
  height: "60vh",
  plugins: "code preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help",
  toolbar: "formatselect | bold italic forecolor backcolor | code | link image media | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent",
  toolbar_drawer: "floating",
  valid_elements: "*[*]",
  image_advtab: !0,
  license_key: "74ca372jx03ojgry4czoi2g59d4pruuozmudnvfqwzs742yz"
}, Kt = {
  menubar: !1,
  inline: !0,
  plugins: [
    "link",
    "lists",
    "autolink"
  ],
  toolbar: [
    "undo redo | bold italic underline | fontfamily fontsize",
    "forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist outdent indent"
  ],
  valid_elements: "*[*]",
  license_key: "74ca372jx03ojgry4czoi2g59d4pruuozmudnvfqwzs742yz"
}, Gt = [
  "div",
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "v-divider",
  "v-list-item",
  "v-list-item-group",
  "v-list",
  "v-card",
  "v-card-title",
  "v-card-subtitle",
  "v-card-text",
  "v-card-actions",
  "v-btn",
  "iframe",
  "v-img",
  "v-col",
  "v-row",
  "v-container"
];
var Jt = [
  "onActivate",
  "onAddUndo",
  "onBeforeAddUndo",
  "onBeforeExecCommand",
  "onBeforeGetContent",
  "onBeforeRenderUI",
  "onBeforeSetContent",
  "onBeforePaste",
  "onBlur",
  "onChange",
  "onClearUndos",
  "onClick",
  "onContextMenu",
  "onCommentChange",
  "onCompositionEnd",
  "onCompositionStart",
  "onCompositionUpdate",
  "onCopy",
  "onCut",
  "onDblclick",
  "onDeactivate",
  "onDirty",
  "onDrag",
  "onDragDrop",
  "onDragEnd",
  "onDragGesture",
  "onDragOver",
  "onDrop",
  "onExecCommand",
  "onFocus",
  "onFocusIn",
  "onFocusOut",
  "onGetContent",
  "onHide",
  "onInit",
  "onInput",
  "onKeyDown",
  "onKeyPress",
  "onKeyUp",
  "onLoadContent",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  "onNodeChange",
  "onObjectResizeStart",
  "onObjectResized",
  "onObjectSelected",
  "onPaste",
  "onPostProcess",
  "onPostRender",
  "onPreProcess",
  "onProgressState",
  "onRedo",
  "onRemove",
  "onReset",
  "onSaveContent",
  "onSelectionChange",
  "onSetAttrib",
  "onSetContent",
  "onShow",
  "onSubmit",
  "onUndo",
  "onVisualAid"
], Yt = function(e) {
  return Jt.map(function(t) {
    return t.toLowerCase();
  }).indexOf(e.toLowerCase()) !== -1;
}, Xt = function(e, t, n) {
  Object.keys(t).filter(Yt).forEach(function(l) {
    var r = t[l];
    typeof r == "function" && (l === "onInit" ? r(e, n) : n.on(l.substring(2), function(o) {
      return r(o, n);
    }));
  });
}, Zt = function(e, t, n, l) {
  var r = e.modelEvents ? e.modelEvents : null, o = Array.isArray(r) ? r.join(" ") : r;
  xe(l, function(a, u) {
    n && typeof a == "string" && a !== u && a !== n.getContent({ format: e.outputFormat }) && n.setContent(a);
  }), n.on(o || "change input undo redo", function() {
    t.emit("update:modelValue", n.getContent({ format: e.outputFormat }));
  });
}, Qt = function(e, t, n, l, r, o) {
  l.setContent(o()), n.attrs["onUpdate:modelValue"] && Zt(t, n, l, r), Xt(e, n.attrs, l);
}, nt = 0, yt = function(e) {
  var t = Date.now(), n = Math.floor(Math.random() * 1e9);
  return nt++, e + "_" + n + nt + String(t);
}, en = function(e) {
  return e !== null && e.tagName.toLowerCase() === "textarea";
}, ot = function(e) {
  return typeof e > "u" || e === "" ? [] : Array.isArray(e) ? e : e.split(" ");
}, tn = function(e, t) {
  return ot(e).concat(ot(t));
}, nn = function(e) {
  return e == null;
}, lt = function() {
  return {
    listeners: [],
    scriptId: yt("tiny-script"),
    scriptLoaded: !1
  };
}, on = function() {
  var e = lt(), t = function(r, o, a, u) {
    var i = o.createElement("script");
    i.referrerPolicy = "origin", i.type = "application/javascript", i.id = r, i.src = a;
    var d = function() {
      i.removeEventListener("load", d), u();
    };
    i.addEventListener("load", d), o.head && o.head.appendChild(i);
  }, n = function(r, o, a) {
    e.scriptLoaded ? a() : (e.listeners.push(a), r.getElementById(e.scriptId) || t(e.scriptId, r, o, function() {
      e.listeners.forEach(function(u) {
        return u();
      }), e.scriptLoaded = !0;
    }));
  }, l = function() {
    e = lt();
  };
  return {
    load: n,
    reinitialize: l
  };
}, ln = on(), an = function() {
  return typeof window < "u" ? window : global;
}, he = function() {
  var e = an();
  return e && e.tinymce ? e.tinymce : null;
}, rn = {
  apiKey: String,
  licenseKey: String,
  cloudChannel: String,
  id: String,
  init: Object,
  initialValue: String,
  inline: Boolean,
  modelEvents: [String, Array],
  plugins: [String, Array],
  tagName: String,
  toolbar: [String, Array],
  modelValue: String,
  disabled: Boolean,
  tinymceScriptSrc: String,
  outputFormat: {
    type: String,
    validator: function(e) {
      return e === "html" || e === "text";
    }
  }
}, ae = function() {
  return ae = Object.assign || function(e) {
    for (var t, n = 1, l = arguments.length; n < l; n++) {
      t = arguments[n];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, ae.apply(this, arguments);
}, un = function(e, t, n, l) {
  return e(l || "div", {
    id: t,
    ref: n
  });
}, sn = function(e, t, n) {
  return e("textarea", {
    id: t,
    visibility: "hidden",
    ref: n
  });
}, Ue = { selector: void 0, target: void 0 }, Ct = ue({
  props: rn,
  setup: function(e, t) {
    var n = e.init ? ae(ae({}, e.init), Ue) : ae({}, Ue), l = _e(e), r = l.disabled, o = l.modelValue, a = l.tagName, u = R(null), i = null, d = e.id || yt("tiny-vue"), c = e.init && e.init.inline || e.inline, w = !!t.attrs["onUpdate:modelValue"], y = !0, k = e.initialValue ? e.initialValue : "", C = "", E = function(M) {
      return w ? function() {
        return o != null && o.value ? o.value : "";
      } : function() {
        return M ? k : C;
      };
    }, O = function() {
      var M = E(y), V = ae(ae({}, n), { readonly: e.disabled, target: u.value, plugins: tn(n.plugins, e.plugins), toolbar: e.toolbar || n.toolbar, inline: c, license_key: e.licenseKey, setup: function(A) {
        i = A, A.on("init", function(H) {
          return Qt(H, e, t, A, o, M);
        }), typeof n.setup == "function" && n.setup(A);
      } });
      en(u.value) && (u.value.style.visibility = ""), he().init(V), y = !1;
    };
    xe(r, function(M) {
      var V;
      i !== null && (typeof ((V = i.mode) === null || V === void 0 ? void 0 : V.set) == "function" ? i.mode.set(M ? "readonly" : "design") : i.setMode(M ? "readonly" : "design"));
    }), xe(a, function(M) {
      var V;
      w || (C = i.getContent()), (V = he()) === null || V === void 0 || V.remove(i), ge(function() {
        return O();
      });
    }), ke(function() {
      if (he() !== null)
        O();
      else if (u.value && u.value.ownerDocument) {
        var M = e.cloudChannel ? e.cloudChannel : "7", V = e.apiKey ? e.apiKey : "no-api-key", A = nn(e.tinymceScriptSrc) ? "https://cdn.tiny.cloud/1/".concat(V, "/tinymce/").concat(M, "/tinymce.min.js") : e.tinymceScriptSrc;
        ln.load(u.value.ownerDocument, A, O);
      }
    }), Se(function() {
      he() !== null && he().remove(i);
    }), c || (Lt(function() {
      y || O();
    }), Bt(function() {
      var M;
      w || (C = i.getContent()), (M = he()) === null || M === void 0 || M.remove(i);
    }));
    var g = function(M) {
      var V;
      C = i.getContent(), (V = he()) === null || V === void 0 || V.remove(i), n = ae(ae(ae({}, n), M), Ue), ge(function() {
        return O();
      });
    };
    return t.expose({
      rerender: g,
      getEditor: function() {
        return i;
      }
    }), function() {
      return c ? un(be, d, u, e.tagName) : sn(be, d, u);
    };
  }
});
const dn = "74ca372jx03ojgry4czoi2g59d4pruuozmudnvfqwzs742yz", cn = {
  __name: "GeneralComponentEditing",
  props: /* @__PURE__ */ pe({
    is_component: {
      type: Boolean,
      default: !0
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = re(e, "modelValue"), n = {
      class: "text-field",
      style: "text-field",
      id: "text-field",
      title: "text-field",
      href: "text-field",
      target: {
        type: "select",
        enum: [
          "_blank",
          "_self",
          "_parent",
          "_top"
        ]
      },
      color: {
        type: "select",
        enum: [
          "red",
          "green",
          "blue",
          "yellow",
          "purple",
          "pink",
          "orange",
          "brown",
          "grey",
          "black",
          "white"
        ]
      }
    };
    function l() {
      const r = prompt("Enter new prop name:");
      t.value.props === void 0 && (t.value.props = {}), r && (t.value.props[r] = "");
    }
    return (r, o) => {
      const a = S("v-text-field"), u = S("v-btn"), i = S("v-select"), d = S("v-icon"), c = S("v-textarea"), w = S("v-btn-group");
      return p(), L(te, null, [
        e.is_component ? (p(), P(a, {
          key: 0,
          modelValue: t.value.component,
          "onUpdate:modelValue": o[0] || (o[0] = (y) => t.value.component = y),
          label: "Component",
          type: "text"
        }, null, 8, ["modelValue"])) : (p(), P(a, {
          key: 1,
          modelValue: t.value.name,
          "onUpdate:modelValue": o[1] || (o[1] = (y) => t.value.name = y),
          label: "Name",
          type: "text"
        }, null, 8, ["modelValue"])),
        (p(!0), L(te, null, ie(t.value.props, (y, k) => {
          var C;
          return p(), L(te, { key: k }, [
            typeof n[k] == "string" && n[k] !== "htmlContent" ? (p(), P(pt("v-" + n[k]), {
              key: 0,
              modelValue: t.value.props[k],
              "onUpdate:modelValue": (E) => t.value.props[k] = E,
              label: k
            }, {
              append: h(() => [
                m(u, {
                  variant: "text",
                  color: "red",
                  onClick: () => {
                    delete t.value.props[k];
                  },
                  icon: "fa-solid fa-xmark"
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "label"])) : ((C = n[k]) == null ? void 0 : C.type) === "select" ? (p(), P(i, {
              key: 1,
              modelValue: t.value.props[k],
              "onUpdate:modelValue": (E) => t.value.props[k] = E,
              label: k,
              items: n[k].enum
            }, {
              append: h(() => [
                m(u, {
                  variant: "text",
                  color: "red",
                  onClick: () => {
                    delete t.value.props[k];
                  },
                  icon: "fa-solid fa-xmark"
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "label", "items"])) : (p(), P(a, {
              key: 2,
              modelValue: t.value.props[k],
              "onUpdate:modelValue": (E) => t.value.props[k] = E,
              label: k,
              type: "text"
            }, {
              append: h(() => [
                m(u, {
                  variant: "text",
                  color: "red",
                  onClick: () => {
                    delete t.value.props[k];
                  },
                  icon: "fa-solid fa-xmark"
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "label"]))
          ], 64);
        }), 128)),
        t.value.hasOwnProperty("htmlContent") ? (p(), P(v(Ct), {
          key: 2,
          modelValue: t.value.htmlContent,
          "onUpdate:modelValue": o[2] || (o[2] = (y) => t.value.htmlContent = y),
          init: v(qt),
          "api-key": dn
        }, null, 8, ["modelValue", "init"])) : T("", !0),
        t.value.hasOwnProperty("textContent") ? (p(), P(c, {
          key: 3,
          modelValue: t.value.textContent,
          "onUpdate:modelValue": o[3] || (o[3] = (y) => t.value.textContent = y),
          label: "Text Content",
          type: "text"
        }, {
          prepend: h(() => [
            m(d, null, {
              default: h(() => o[8] || (o[8] = [
                U("fa-solid fa-text-width")
              ])),
              _: 1,
              __: [8]
            })
          ]),
          _: 1
        }, 8, ["modelValue"])) : T("", !0),
        m(w, { variant: "text" }, {
          default: h(() => [
            t.value.hasOwnProperty("htmlContent") ? (p(), P(u, {
              key: 0,
              color: "red",
              onClick: o[4] || (o[4] = () => {
                delete t.value.htmlContent;
              })
            }, {
              default: h(() => o[9] || (o[9] = [
                U("Delete htmlContent")
              ])),
              _: 1,
              __: [9]
            })) : (p(), P(u, {
              key: 1,
              color: "green",
              onClick: o[5] || (o[5] = () => {
                t.value.htmlContent = "";
              })
            }, {
              default: h(() => o[10] || (o[10] = [
                U("Add htmlContent")
              ])),
              _: 1,
              __: [10]
            })),
            t.value.hasOwnProperty("textContent") ? (p(), P(u, {
              key: 2,
              color: "red",
              onClick: o[6] || (o[6] = () => {
                delete t.value.textContent;
              })
            }, {
              default: h(() => o[11] || (o[11] = [
                U("Delete textContent")
              ])),
              _: 1,
              __: [11]
            })) : (p(), P(u, {
              key: 3,
              color: "green",
              onClick: o[7] || (o[7] = () => {
                t.value.textContent = "";
              })
            }, {
              default: h(() => o[12] || (o[12] = [
                U("Add textContent")
              ])),
              _: 1,
              __: [12]
            })),
            m(u, {
              color: "green",
              onClick: l
            }, {
              default: h(() => o[13] || (o[13] = [
                U("Add New Prop")
              ])),
              _: 1,
              __: [13]
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
}, vn = /* @__PURE__ */ Me(cn, [["__scopeId", "data-v-aa3cbf01"]]), fn = {
  __name: "ComponentElementEdit",
  props: /* @__PURE__ */ pe({
    data: {
      type: Object,
      required: !0
    }
  }, {
    dialog: {},
    dialogModifiers: {}
  }),
  emits: /* @__PURE__ */ pe(["dataSaved"], ["update:dialog"]),
  setup(e, { emit: t }) {
    const n = e, l = R(n.data), r = re(e, "dialog"), o = R("");
    xe(r, (u) => {
      var i;
      u && n.data.hasOwnProperty("component") ? (o.value = (i = n.data) == null ? void 0 : i.component, l.value = JSON.parse(JSON.stringify(n.data))) : u && n.data.hasOwnProperty("name") && (o.value = "slot", l.value = JSON.parse(JSON.stringify(n.data)));
    });
    const a = () => {
      r.value = !1, o.value = "", l.value = {};
    };
    return (u, i) => {
      const d = S("v-card-text"), c = S("v-spacer"), w = S("v-btn"), y = S("v-card-actions"), k = S("v-icon"), C = S("v-card"), E = S("v-dialog");
      return p(), P(E, {
        modelValue: r.value,
        "onUpdate:modelValue": i[2] || (i[2] = (O) => r.value = O),
        "max-width": "800px",
        "retain-focus": !1
      }, {
        default: h(() => [
          m(C, {
            title: "Editing: " + o.value
          }, {
            append: h(() => [
              m(w, {
                class: "close-btn",
                variant: "text",
                onClick: a
              }, {
                default: h(() => [
                  m(k, null, {
                    default: h(() => i[5] || (i[5] = [
                      U("fa-solid fa-xmark")
                    ])),
                    _: 1,
                    __: [5]
                  })
                ]),
                _: 1
              })
            ]),
            default: h(() => [
              o.value != "" ? (p(), P(d, { key: 0 }, {
                default: h(() => [
                  m(vn, {
                    modelValue: l.value,
                    "onUpdate:modelValue": i[0] || (i[0] = (O) => l.value = O),
                    is_component: o.value != "slot"
                  }, null, 8, ["modelValue", "is_component"])
                ]),
                _: 1
              })) : T("", !0),
              m(y, null, {
                default: h(() => [
                  m(c),
                  m(w, {
                    color: "red",
                    onClick: a
                  }, {
                    default: h(() => i[3] || (i[3] = [
                      U("Cancel")
                    ])),
                    _: 1,
                    __: [3]
                  }),
                  m(w, {
                    color: "green",
                    onClick: i[1] || (i[1] = (O) => u.$emit("dataSaved", l.value))
                  }, {
                    default: h(() => i[4] || (i[4] = [
                      U("Save")
                    ])),
                    _: 1,
                    __: [4]
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["title"])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}, mn = /* @__PURE__ */ Me(fn, [["__scopeId", "data-v-18173f8b"]]), xt = [
  { title: "Card", component: "v-card", props: {} },
  { title: "Card Title", component: "v-card-title", props: {} },
  { title: "Card Text", component: "v-card-text", props: {} },
  { title: "Card Actions", component: "v-card-actions", props: {} },
  { title: "Div", component: "div", props: {} },
  { title: "Row", component: "v-row", props: {} },
  { title: "Col", component: "v-col", props: {} },
  { title: "H1", component: "h1", props: {} },
  { title: "H2", component: "h2", props: {} },
  { title: "H3", component: "h3", props: {} },
  { title: "H4", component: "h4", props: {} },
  { title: "H5", component: "h5", props: {} },
  { title: "Paragraph", component: "p", props: {} },
  { title: "Span", component: "span", props: {} },
  { title: "List", component: "v-list", props: {} },
  { title: "List Item", component: "v-list-item", props: {} },
  { title: "IFrame", component: "iframe", props: {} }
];
function wt(e) {
  const t = J("componentClipboard");
  return {
    removeElement: (o) => {
      const a = [...e.value], u = o.slice(0, -1).reduce((i, d) => i[d], a);
      if (u) {
        const i = o[o.length - 1];
        u.splice(i, 1);
      }
      e.value = a;
    },
    pasteElement: (o, a) => {
      if (!t.hasContent()) return;
      const u = [...e.value], i = JSON.parse(JSON.stringify(t.element));
      switch (a) {
        case "prepend":
          u.splice(o[o.length - 1], 0, i);
          break;
        case "append":
          u.splice(o[o.length - 1] + 1, 0, i);
          break;
        case "child":
          const d = o.reduce((c, w) => c[w], u);
          d.children || (d.children = []), d.children.push(i);
          break;
      }
      e.value = u, t.isCut && t.clear();
    },
    insertElement: (o, a) => {
      const u = [...e.value], i = o.reduce((d, c) => d[c], u);
      i.children || (i.children = []), i.children.push(a), e.value = u;
    }
  };
}
function kt(e, t) {
  return {
    label: "Insert",
    children: xt.map((n) => ({
      label: n.title,
      onClick: () => e(t, { ...n })
    }))
  };
}
const pn = { class: "tree-node" }, hn = {
  key: 1,
  class: "node-content"
}, gn = {
  key: 0,
  class: "children"
}, bn = { key: 0 }, _n = {
  key: 1,
  class: "slots"
}, yn = ["onContextmenu"], Cn = {
  __name: "TreeNode",
  props: {
    node: {
      type: [Object, Array],
      required: !0
    },
    label: {
      type: String,
      default: ""
    }
  },
  emits: ["openEdit"],
  setup(e, { expose: t, emit: n }) {
    const l = e, r = n, o = R(!0);
    function a() {
      o.value = !o.value;
    }
    t({
      isExpanded: o,
      treeNodes: R([])
    });
    function u(O, g) {
      O.preventDefault(), r("openEdit", { event: O, element: g, path: [] });
    }
    function i(O, g) {
      const M = ["children", g, ...O.path];
      r("openEdit", {
        event: O.event,
        element: O.element,
        path: M
      });
    }
    function d(O, g, M) {
      O.preventDefault(), r("openEdit", { event: O, element: g, path: ["slots", M] });
    }
    const c = fe(() => Object.prototype.toString.call(l.node) === "[object Object]"), w = fe(() => c.value && l.node.component ? l.node.component : l.label), y = fe(() => {
      if (c.value) {
        if (l.node.textContent) return l.node.textContent;
        if (l.node.htmlContent) return "[HTML content]";
      }
      return "";
    }), k = fe(
      () => c.value && Array.isArray(l.node.children) && l.node.children.length > 0
    ), C = fe(
      () => c.value && Array.isArray(l.node.slots) && l.node.slots.length > 0
    ), E = fe(() => k.value || C.value);
    return (O, g) => (p(), L("div", pn, [
      N("div", {
        class: "node-label",
        onContextmenu: g[0] || (g[0] = Ae((M) => u(M, l.node), ["stop"]))
      }, [
        E.value ? (p(), L("span", {
          key: 0,
          class: "expand-icon",
          onClick: a
        }, [
          N("i", {
            class: ce(o.value ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-right")
          }, null, 2)
        ])) : T("", !0),
        U(" " + de(w.value) + " ", 1),
        y.value ? (p(), L("span", hn, " - " + de(y.value), 1)) : T("", !0)
      ], 32),
      E.value && o.value ? (p(), L("div", gn, [
        k.value ? (p(), L("div", bn, [
          (p(!0), L(te, null, ie(l.node.children, (M, V) => (p(), P(St, {
            key: "child-" + V,
            node: M,
            label: M.component || "[" + V + "]",
            onOpenEdit: (A) => i(A, V),
            ref_for: !0,
            ref: "treeNodes"
          }, null, 8, ["node", "label", "onOpenEdit"]))), 128))
        ])) : T("", !0),
        C.value ? (p(), L("div", _n, [
          (p(!0), L(te, null, ie(l.node.slots, (M, V) => (p(), L("div", {
            key: "slot-" + V,
            class: "slot-label",
            onContextmenu: Ae((A) => d(A, M, V), ["stop"])
          }, " Slot: " + de(M.name), 41, yn))), 128))
        ])) : T("", !0)
      ])) : T("", !0)
    ]));
  }
}, St = /* @__PURE__ */ Me(Cn, [["__scopeId", "data-v-aaf0fd33"]]);
let me = null;
function xn() {
  return me !== null;
}
function wn(e) {
  me && Mt(), me = e;
}
function at(e) {
  e === me && (me = null);
}
function Mt() {
  me && (me.closeMenu(), me = null);
}
const ne = {
  defaultDirection: "br",
  defaultMinWidth: 100,
  defaultMaxWidth: 600,
  defaultZindex: 100,
  defaultZoom: 1,
  defaultAdjustPadding: {
    x: 0,
    y: 10
  }
};
function Pe(e, t) {
  let n = e.offsetTop;
  return e.offsetParent != null && e.offsetParent != t && (n -= e.offsetParent.scrollTop, n += Pe(e.offsetParent, t)), n;
}
function Re(e, t) {
  let n = e.offsetLeft;
  return e.offsetParent != null && e.offsetParent != t && (n -= e.offsetParent.scrollLeft, n += Re(e.offsetParent, t)), n;
}
function kn(e, t, n, l) {
  return {
    x: Re(e, l) + t,
    y: Pe(e, l) + n
  };
}
const Fe = "mx-menu-default-container", Sn = "mx-menu-container-";
let Mn = 0;
function Et(e) {
  const { getContainer: t, zIndex: n } = e;
  if (t) {
    const r = typeof t == "function" ? t() : t;
    if (r) {
      let o = r.getAttribute("id");
      return o || (o = Sn + Mn++, r.setAttribute("id", o)), {
        eleId: o,
        container: r,
        isNew: !1
      };
    }
  }
  let l = document.getElementById(Fe);
  return l || (l = document.createElement("div"), l.setAttribute("id", Fe), l.setAttribute("class", "mx-menu-ghost-host fullscreen"), document.body.appendChild(l)), l.style.zIndex = (n == null ? void 0 : n.toString()) || ne.defaultZindex.toString(), {
    eleId: Fe,
    container: l,
    isNew: !0
  };
}
function it(e) {
  return typeof e == "number" ? `${e}px` : e;
}
const oe = ue({
  props: {
    /**
     * Can be VNode or (data: unknown) => VNode
     */
    vnode: {
      type: null
    },
    /**
     * If vnode is a callback, this data will be passed to the callback first parameter.
     * @default null
     */
    data: {
      type: null,
      default: null
    }
  },
  setup(e) {
    const { vnode: t, data: n } = _e(e);
    return () => typeof t.value == "function" ? t.value(n.value) : t.value;
  }
});
function En(e, t) {
  const n = { ...e };
  return delete n[t], n;
}
var On = Object.defineProperty, Vn = (e, t, n) => t in e ? On(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, rt = (e, t, n) => Vn(e, typeof t != "symbol" ? t + "" : t, n);
class ut {
  constructor(t, n) {
    rt(this, "x", 0), rt(this, "y", 0), this.x = t || 0, this.y = n || 0;
  }
  set(t, n) {
    this.x = t, this.y = n;
  }
  substract(t) {
    this.x -= t.x, this.y -= t.y;
  }
}
function st(e) {
  const { onDown: t, onMove: n, onUp: l } = e, r = new ut(), o = new ut();
  let a;
  function u(d) {
    d.stopPropagation(), o.set(d.x, d.y), o.substract(r), n(r, o, d, a);
  }
  function i(d) {
    l(d, a), r.set(0, 0), document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", i);
  }
  return (d, c) => t(d, c) ? (a = c, r.set(d.x, d.y), document.addEventListener("mousemove", u), document.addEventListener("mouseup", i), d.stopPropagation(), !0) : !1;
}
function In(e, t) {
  let n = 0;
  return {
    start() {
      n > 0 && clearInterval(n), n = setInterval(() => {
        n = 0, t();
      }, e);
    },
    stop() {
      n > 0 && (clearInterval(n), n = 0);
    }
  };
}
const Ie = [], dt = In(100, () => {
  for (const e of Ie)
    e();
});
function Pn(e, t, n, l) {
  let r = 0, o = 0;
  function a() {
    e.value && (t && r !== e.value.offsetWidth && t(e.value.offsetWidth), n && o !== e.value.offsetHeight && n(e.value.offsetHeight), r = e.value.offsetWidth, o = e.value.offsetHeight);
  }
  return {
    startResizeChecker() {
      dt.start(), Ie.push(a);
    },
    stopResizeChecker() {
      const u = Ie.indexOf(a);
      u >= 0 && Ie.splice(u, 1), Ie.length === 0 && dt.stop();
    }
  };
}
const ct = 140, Rn = 70, Wn = /* @__PURE__ */ ue({
  __name: "ScrollRect",
  props: {
    /**
     * Scroll direction
     * 
     * * both : Scroll in both directions
     * * vertical : Scroll only in vertical direction
     * * horizontal : Scroll only in horizontal direction
     * * none : Disable scroll
     * 
     * @default both
     */
    scroll: {
      type: String,
      default: "both"
    },
    /**
     * Show scroll bar always, otherwise show scroll bar when mouse over
     * @default false
     */
    scrollBarAlwaysShow: {
      type: Boolean,
      default: !1
    },
    /**
     * Is able to click scroll bar background to set scroll position? (When `scrollBarAlwaysShow` is true)
     * @default true
     */
    scrollBarBackgroundClickable: {
      type: Boolean,
      default: !1
    },
    height: {
      type: Number,
      default: void 0
    },
    width: {
      type: Number,
      default: void 0
    },
    /**
     * 
     */
    maxHeight: {
      type: Number,
      default: void 0
    },
    maxWidth: {
      type: Number,
      default: void 0
    },
    /**
     * CSS class of inner container
     */
    containerClass: {
      type: String,
      default: ""
    },
    /**
     * Container style
     */
    containerStyle: {
      type: null
    }
  },
  emits: ["scroll", "resized"],
  setup(e, { expose: t, emit: n }) {
    const l = e, r = n, o = R(), a = R(), u = R(), i = R(), d = R(), c = R(), w = R(!1), y = fe(() => l.scroll === "horizontal" || l.scroll === "both"), k = fe(() => l.scroll === "vertical" || l.scroll === "both"), C = et({
      show: !1,
      size: 0,
      sizeRaw: 0,
      pos: 0
    }), E = et({
      show: !1,
      size: 0,
      sizeRaw: 0,
      pos: 0
    });
    let O = 0, g = 0, M = 0, V = 0, A = null;
    const H = { attributes: !0, childList: !0 };
    function s() {
      if (o.value) {
        if (C.show) {
          const _ = o.value.offsetWidth / o.value.scrollWidth;
          C.sizeRaw = _ * o.value.offsetWidth, C.size = _ * 100, C.pos = o.value.scrollLeft / (o.value.scrollWidth - o.value.offsetWidth) * (100 - C.size), _ >= 1 && (C.show = !1);
        }
        if (E.show) {
          const _ = o.value.offsetHeight / o.value.scrollHeight;
          E.sizeRaw = _ * o.value.offsetHeight, E.size = _ * 100, E.pos = o.value.scrollTop / (o.value.scrollHeight - o.value.offsetHeight) * (100 - E.size), _ >= 1 && (E.show = !1);
        }
        r("scroll", o.value.scrollLeft, o.value.scrollTop);
      }
    }
    function b(_ = !1) {
      if (!o.value)
        return;
      let D = y.value, q = k.value;
      const ze = D && (O !== o.value.scrollWidth || M !== o.value.offsetWidth), $e = k && (g !== o.value.scrollHeight || V !== o.value.offsetHeight);
      if (!_ && !ze && !$e)
        return;
      const ye = window.getComputedStyle(o.value);
      (ye.overflow === "hidden" || ye.overflowX === "hidden") && (D = !1), (ye.overflow === "hidden" || ye.overflowY === "hidden") && (q = !1), C.show = D, E.show = q, s(), M = o.value.offsetWidth, V = o.value.offsetHeight, O = o.value.scrollWidth, g = o.value.scrollHeight, r("resized", O, g);
    }
    function I(_) {
      var D;
      l.scroll == "horizontal" && (_.deltaMode == 0 && ((D = o.value) == null || D.scrollTo({
        left: o.value.scrollLeft + (_.deltaY > 0 ? ct : -140),
        behavior: "smooth"
      })), _.preventDefault(), _.stopPropagation());
    }
    function $(_) {
      var D;
      _.deltaMode == 0 && ((D = o.value) == null || D.scrollTo({
        left: o.value.scrollLeft + (_.deltaY > 0 ? ct : -140),
        behavior: "smooth"
      }), _.preventDefault(), _.stopPropagation());
    }
    function K(_) {
      var D;
      _.deltaMode == 0 && ((D = o.value) == null || D.scrollTo({
        top: o.value.scrollTop + (_.deltaY > 0 ? Rn : -70),
        behavior: "smooth"
      }), _.preventDefault(), _.stopPropagation());
    }
    let Z = 0, G = 0, B = 0, F = 0;
    const Y = st({
      onDown(_) {
        return !u.value || !d.value ? !1 : (Z = _.offsetX, G = _.x - _.offsetX - d.value.offsetLeft, _.preventDefault(), w.value = !0, !0);
      },
      onMove(_, D, q) {
        o.value && u.value && (x(q.x - Z - G), q.preventDefault(), q.stopPropagation());
      },
      onUp() {
        w.value = !1;
      }
    }), Q = st({
      onDown(_) {
        return !i.value || !c.value ? !1 : (B = _.offsetY, F = _.y - _.offsetY - c.value.offsetTop, _.preventDefault(), w.value = !0, !0);
      },
      onMove(_, D, q) {
        o.value && i.value && (W(q.y - B - F), q.preventDefault(), q.stopPropagation());
      },
      onUp() {
        w.value = !1;
      }
    });
    function z(_) {
      o.value && (o.value.scrollLeft = _ / 100 * (o.value.scrollWidth - o.value.offsetWidth));
    }
    function se(_) {
      o.value && (o.value.scrollLeft = _ / 100 * (o.value.scrollHeight - o.value.offsetHeight));
    }
    function x(_) {
      o.value && (o.value.scrollLeft = _ / (o.value.offsetWidth - C.sizeRaw) * (o.value.scrollWidth - o.value.offsetWidth));
    }
    function W(_) {
      o.value && (o.value.scrollTop = _ / (o.value.offsetHeight - E.sizeRaw) * (o.value.scrollHeight - o.value.offsetHeight));
    }
    function j(_) {
      l.scrollBarBackgroundClickable && x(_.offsetX - C.sizeRaw / 2);
    }
    function f(_) {
      l.scrollBarBackgroundClickable && W(_.offsetY - E.sizeRaw / 2);
    }
    const {
      startResizeChecker: ve,
      stopResizeChecker: ee
    } = Pn(
      o,
      () => b(),
      () => b()
    );
    return ke(() => {
      ge(() => {
        setTimeout(() => b(!0), 200), b(!0), ve(), A = new MutationObserver(() => b()), A.observe(o.value, H);
      });
    }), Se(() => {
      ee(), A && (A.disconnect(), A = null);
    }), t({
      refreshScrollState() {
        b(!0);
      },
      getScrollContainer() {
        return o.value;
      },
      scrollTo(_, D) {
        var q;
        (q = o.value) == null || q.scrollTo(_, D);
      },
      scrollToTop() {
        var _;
        (_ = o.value) == null || _.scrollTo(0, 0);
      },
      scrollToBottom() {
        var _;
        (_ = o.value) == null || _.scrollTo(o.value.scrollWidth, o.value.scrollHeight);
      }
    }), (_, D) => (p(), L("div", {
      ref_key: "scrollrect",
      ref: a,
      class: ce([
        "vue-scroll-rect",
        e.scrollBarAlwaysShow ? "always-show-scrollbar" : "",
        e.scrollBarBackgroundClickable ? "background-clickable" : "",
        w.value ? "dragging" : ""
      ]),
      style: Ve({
        width: e.width ? `${e.width}px` : void 0,
        height: e.height ? `${e.height}px` : void 0
      }),
      onWheel: I
    }, [
      N("div", {
        ref_key: "container",
        ref: o,
        class: ce(["scroll-content", e.scroll, e.containerClass]),
        style: Ve({
          maxWidth: e.maxWidth ? `${e.maxWidth}px` : void 0,
          maxHeight: e.maxHeight ? `${e.maxHeight}px` : void 0,
          ...e.containerStyle
        }),
        onScroll: s
      }, [
        X(_.$slots, "default")
      ], 38),
      C.show ? X(_.$slots, "scrollBarX", {
        key: 0,
        scrollBarValue: C,
        onScroll: z
      }, () => [
        N("div", {
          ref_key: "scrollBarRefX",
          ref: u,
          class: "scrollbar horizontal",
          onClick: j,
          onWheel: $
        }, [
          N("div", {
            class: "thumb",
            ref_key: "scrollBarThumbRefX",
            ref: d,
            style: Ve({ left: `${C.pos}%`, width: `${C.size}%` }),
            onMousedown: D[0] || (D[0] = //@ts-ignore
            (...q) => v(Y) && v(Y)(...q)),
            onWheel: $
          }, null, 36)
        ], 544)
      ]) : T("", !0),
      E.show ? X(_.$slots, "scrollBarY", {
        key: 1,
        scrollBarValue: E,
        onScroll: se
      }, () => [
        E.show ? (p(), L("div", {
          key: 0,
          ref_key: "scrollBarRefY",
          ref: i,
          class: "scrollbar vertical",
          onClick: f,
          onWheel: K
        }, [
          N("div", {
            class: "thumb",
            ref_key: "scrollBarThumbRefY",
            ref: c,
            style: Ve({ top: `${E.pos}%`, height: `${E.size}%` }),
            onMousedown: D[1] || (D[1] = //@ts-ignore
            (...q) => v(Q) && v(Q)(...q)),
            onWheel: K
          }, null, 36)
        ], 544)) : T("", !0)
      ]) : T("", !0)
    ], 38));
  }
}), Ge = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, r] of t)
    n[l] = r;
  return n;
}, An = {}, Hn = {
  class: "mx-checked-mark",
  "aria-hidden": "true",
  viewBox: "0 0 1024 1024"
}, Ln = /* @__PURE__ */ N("path", { d: "M129.3,428.6L52,512l345,372.5l575-620.8l-69.5-75L400.4,718.2L129.3,428.6z" }, null, -1), Bn = [
  Ln
];
function Tn(e, t) {
  return p(), L("svg", Hn, Bn);
}
const zn = /* @__PURE__ */ Ge(An, [["render", Tn]]), $n = {}, jn = {
  class: "mx-right-arrow",
  "aria-hidden": "true",
  viewBox: "0 0 1024 1024"
}, Dn = /* @__PURE__ */ N("path", { d: "M307.018 49.445c11.517 0 23.032 4.394 31.819 13.18L756.404 480.18c8.439 8.438 13.181 19.885 13.181 31.82s-4.741 23.38-13.181 31.82L338.838 961.376c-17.574 17.573-46.065 17.573-63.64-0.001-17.573-17.573-17.573-46.065 0.001-63.64L660.944 512 275.198 126.265c-17.574-17.573-17.574-46.066-0.001-63.64C283.985 53.839 295.501 49.445 307.018 49.445z" }, null, -1), Un = [
  Dn
];
function Fn(e, t) {
  return p(), L("svg", jn, Un);
}
const Nn = /* @__PURE__ */ Ge($n, [["render", Fn]]), qn = { class: "mx-item-row" }, Kn = ["xlink:href"], Gn = {
  key: 1,
  class: "label"
}, Jn = { class: "mx-item-row" }, Yn = { class: "mx-shortcut" }, Je = /* @__PURE__ */ ue({
  __name: "ContextMenuItem",
  props: {
    /**
     * Is this menu disabled? 
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Is this menu hidden? 
     */
    hidden: {
      type: Boolean,
      default: !1
    },
    customRender: {
      type: Function,
      default: null
    },
    /**
     * Custom css class for submenu
     */
    customClass: {
      type: String,
      default: ""
    },
    clickHandler: {
      type: Function,
      default: null
    },
    /**
     * Menu label
     */
    label: {
      type: [String, Object, Function],
      default: ""
    },
    /**
     * Menu icon (for icon class)
     */
    icon: {
      type: [String, Object, Function],
      default: ""
    },
    /**
     * Custom icon library font class name.
     * 
     * Only for css font icon, If you use the svg icon, you do not need to use this.
     */
    iconFontClass: {
      type: String,
      default: "iconfont"
    },
    /**
     * Is this menu item checked?
     * 
     * The check mark are displayed on the left side of the icon, so it is not recommended to display the icon at the same time.
     */
    checked: {
      type: Boolean,
      default: !1
    },
    /**
     * Shortcut key text display on the right.
     * 
     * The shortcut keys here are only for display. You need to handle the key events by yourself.
     */
    shortcut: {
      type: String,
      default: ""
    },
    /**
     * Display icons use svg symbol (`<use xlink:href="#icon-symbol-name">`) ， only valid when icon attribute is empty.
     */
    svgIcon: {
      type: String,
      default: ""
    },
    /**
     * The user-defined attribute of the svg tag, which is valid when using `svgIcon`.
     */
    svgProps: {
      type: Object,
      default: null
    },
    /**
     * Should a fixed-width icon area be reserved for menu items without icon. (this item)
     * 
     * Default is true .
     * 
     * The width of icon area can be override with css var `--mx-menu-placeholder-width`.
     */
    preserveIconWidth: {
      type: Boolean,
      default: !0
    },
    /**
     * Show right arrow on this menu?
     */
    showRightArrow: {
      type: Boolean,
      default: !1
    },
    hasChildren: {
      type: Boolean,
      default: !1
    },
    /**
     * Should close menu when Click this menu item ?
     */
    clickClose: {
      type: Boolean,
      default: !0
    },
    /**
     * When there are subitems in this item, is it allowed to trigger its own click event? Default is false
     */
    clickableWhenHasChildren: {
      type: Boolean,
      default: !1
    },
    rawMenuItem: {
      type: Object,
      default: void 0
    }
  },
  emits: [
    "click",
    "subMenuOpen",
    "subMenuClose"
  ],
  setup(e, { expose: t, emit: n }) {
    const l = e, r = n, {
      clickHandler: o,
      clickClose: a,
      clickableWhenHasChildren: u,
      disabled: i,
      hidden: d,
      label: c,
      icon: w,
      iconFontClass: y,
      showRightArrow: k,
      shortcut: C,
      hasChildren: E
    } = _e(l), O = R(!1), g = R(!1), M = R(), V = J("globalOptions"), A = J("globalHasSlot"), H = J("globalRenderSlot"), s = J("globalCloseMenu"), b = J("menuContext"), I = {
      getSubMenuInstance: () => {
      },
      showSubMenu: () => O.value ? (b.markActiveMenuItem(I, !0), !0) : E.value ? (K(), !0) : !1,
      hideSubMenu: () => {
        b.closeOtherSubMenu();
      },
      isDisabledOrHidden: () => i.value || d.value,
      getElement: () => M.value,
      focus: () => g.value = !0,
      blur: () => g.value = !1,
      click: $
    };
    le("menuItemInstance", I), ke(() => {
      b.isMenuItemDataCollectedFlag() ? ge(() => {
        let B = 0;
        const F = b.getElement();
        if (F) {
          let Y = 0;
          for (let Q = 0; Q < F.children.length; Q++) {
            const z = F.children[Q];
            if (z.getAttribute("data-type") === "ContextMenuItem") {
              if (z === M.value) {
                B = Y;
                break;
              }
              Y++;
            }
          }
        }
        b.addChildMenuItem(I, B);
      }) : b.addChildMenuItem(I);
    }), Se(() => {
      b.removeChildMenuItem(I);
    });
    function $(B) {
      if (!i.value) {
        if (B) {
          const F = B.target;
          if (F.classList.contains("mx-context-no-clickable") || V.value.ignoreClickClassName && F.classList.contains(V.value.ignoreClickClassName))
            return;
          if (V.value.clickCloseClassName && F.classList.contains(V.value.clickCloseClassName)) {
            B.stopPropagation(), s(l.rawMenuItem);
            return;
          }
        }
        E.value ? u.value ? (typeof o.value == "function" && o.value(B), r("click", B)) : O.value || K() : (typeof o.value == "function" && o.value(B), r("click", B), a.value && s(l.rawMenuItem));
      }
    }
    function K(B) {
      g.value = !1, b.checkCloseOtherSubMenuTimeOut() || b.closeOtherSubMenu(), i.value || (b.markActiveMenuItem(I), E.value && (B || b.markThisOpenedByKeyBoard(), b.addOpenedSubMenu(Z), O.value = !0, ge(() => r("subMenuOpen", I))));
    }
    function Z() {
      g.value = !1, O.value = !1, r("subMenuClose", I);
    }
    function G() {
      return {
        disabled: i.value,
        label: c.value,
        icon: w.value,
        iconFontClass: y.value,
        showRightArrow: k.value,
        clickClose: a.value,
        clickableWhenHasChildren: u.value,
        shortcut: C.value,
        theme: V.value.theme,
        isOpen: O,
        hasChildren: E,
        onClick: $,
        onMouseEnter: K,
        closeMenu: s
      };
    }
    return t(I), (B, F) => v(d) ? T("", !0) : (p(), L("div", {
      key: 0,
      class: "mx-context-menu-item-wrapper",
      ref_key: "menuItemRef",
      ref: M,
      "data-type": "ContextMenuItem"
    }, [
      v(A)("itemRender") ? (p(), P(v(oe), {
        key: 0,
        vnode: () => v(H)("itemRender", G())
      }, null, 8, ["vnode"])) : e.customRender ? (p(), P(v(oe), {
        key: 1,
        vnode: e.customRender,
        data: G()
      }, null, 8, ["vnode", "data"])) : (p(), L("div", {
        key: 2,
        class: ce([
          "mx-context-menu-item",
          v(i) ? "disabled" : "",
          g.value ? "keyboard-focus" : "",
          e.customClass ? " " + e.customClass : "",
          O.value ? "open" : ""
        ]),
        onClick: $,
        onMouseenter: K
      }, [
        X(B.$slots, "default", {}, () => [
          N("div", qn, [
            N("div", {
              class: ce([
                "mx-icon-placeholder",
                e.preserveIconWidth ? "preserve-width" : ""
              ])
            }, [
              X(B.$slots, "icon", {}, () => [
                v(A)("itemIconRender") ? (p(), P(v(oe), {
                  key: 0,
                  vnode: () => v(H)("itemIconRender", G())
                }, null, 8, ["vnode"])) : typeof e.svgIcon == "string" && e.svgIcon ? (p(), L("svg", Ce({
                  key: 1,
                  class: "icon svg"
                }, e.svgProps), [
                  N("use", { "xlink:href": e.svgIcon }, null, 8, Kn)
                ], 16)) : typeof v(w) != "string" ? (p(), P(v(oe), {
                  key: 2,
                  vnode: v(w),
                  data: v(w)
                }, null, 8, ["vnode", "data"])) : typeof v(w) == "string" && v(w) !== "" ? (p(), L("i", {
                  key: 3,
                  class: ce(v(w) + " icon " + v(y) + " " + v(V).iconFontClass)
                }, null, 2)) : T("", !0)
              ]),
              e.checked ? X(B.$slots, "check", { key: 0 }, () => [
                v(A)("itemCheckRender") ? (p(), P(v(oe), {
                  key: 0,
                  vnode: () => v(H)("itemCheckRender", G())
                }, null, 8, ["vnode"])) : T("", !0),
                m(zn)
              ]) : T("", !0)
            ], 2),
            X(B.$slots, "label", {}, () => [
              v(A)("itemLabelRender") ? (p(), P(v(oe), {
                key: 0,
                vnode: () => v(H)("itemLabelRender", G())
              }, null, 8, ["vnode"])) : typeof v(c) == "string" ? (p(), L("span", Gn, de(v(c)), 1)) : (p(), P(v(oe), {
                key: 2,
                vnode: v(c),
                data: v(c)
              }, null, 8, ["vnode", "data"]))
            ])
          ]),
          N("div", Jn, [
            v(C) || B.$slots.shortcut ? X(B.$slots, "shortcut", { key: 0 }, () => [
              v(A)("itemShortcutRender") ? (p(), P(v(oe), {
                key: 0,
                vnode: () => v(H)("itemShortcutRender", G())
              }, null, 8, ["vnode"])) : T("", !0),
              N("span", Yn, de(v(C)), 1)
            ]) : T("", !0),
            v(k) ? X(B.$slots, "rightArrow", { key: 1 }, () => [
              v(A)("itemRightArrowRender") ? (p(), P(v(oe), {
                key: 0,
                vnode: () => v(H)("itemRightArrowRender", G())
              }, null, 8, ["vnode"])) : T("", !0),
              m(Nn)
            ]) : T("", !0)
          ])
        ])
      ], 34)),
      v(V).menuTransitionProps ? (p(), P(ht, gt(Ce({ key: 3 }, v(V).menuTransitionProps)), {
        default: h(() => [
          O.value ? X(B.$slots, "submenu", {
            key: 0,
            context: I
          }) : T("", !0)
        ]),
        _: 3
      }, 16)) : O.value ? X(B.$slots, "submenu", {
        key: 4,
        context: I
      }) : T("", !0)
    ], 512));
  }
}), Xn = ue({
  name: "ContextMenuSperator",
  components: {
    VNodeRender: oe
  },
  setup() {
    const e = J("globalHasSlot"), t = J("globalRenderSlot");
    return {
      globalHasSlot: e,
      globalRenderSlot: t
    };
  }
}), Zn = {
  key: 1,
  class: "mx-context-menu-item-sperator mx-context-no-clickable"
};
function Qn(e, t, n, l, r, o) {
  const a = S("VNodeRender");
  return e.globalHasSlot("separatorRender") ? (p(), P(a, {
    key: 0,
    vnode: () => e.globalRenderSlot("separatorRender", {})
  }, null, 8, ["vnode"])) : (p(), L("div", Zn));
}
const We = /* @__PURE__ */ Ge(Xn, [["render", Qn]]), He = /* @__PURE__ */ ue({
  __name: "ContextSubMenu",
  props: {
    /**
     * Items from options
     */
    items: {
      type: Object,
      default: null
    },
    /**
     * Max height for this submenu
     */
    maxHeight: {
      type: Number,
      default: 0
    },
    /**
     * Max width for this submenu
     */
    maxWidth: {
      type: [String, Number],
      default: 0
    },
    /**
     * Min width for this submenu
     */
    minWidth: {
      type: [String, Number],
      default: 0
    },
    /**
     * Specifies should submenu adjust it position
     * when the menu exceeds the screen. The default is true
     */
    adjustPosition: {
      type: Boolean,
      default: !0
    },
    /**
     * Menu direction
     */
    direction: {
      type: String,
      default: "br"
    },
    parentMenuItemContext: {
      type: Object,
      default: null
    }
  },
  setup(e, { expose: t }) {
    const n = e, l = R(!1), r = J("globalGetMenuHostId", ""), o = J("menuContext"), a = J("globalOptions");
    J("globalHasSlot"), J("globalRenderSlot");
    const { zIndex: u, getParentWidth: i, getParentHeight: d, getZoom: c } = o, { adjustPosition: w } = _e(n), y = R(), k = R(), C = R(), E = [], O = J("globalSetCurrentSubMenu"), g = [];
    let M = null, V = 0;
    function A() {
      M && M.blur();
    }
    function H(x, W) {
      if (x) {
        for (let j = W !== void 0 ? W : 0; j < g.length; j++)
          if (!g[j].isDisabledOrHidden()) {
            s(j);
            break;
          }
      } else
        for (let j = W !== void 0 ? W : g.length - 1; j >= 0; j--)
          if (!g[j].isDisabledOrHidden()) {
            s(j);
            break;
          }
    }
    function s(x) {
      var W;
      if (M && A(), x !== void 0 && (M = g[Math.max(0, Math.min(x, g.length - 1))]), !M)
        return;
      M.focus();
      const j = M.getElement();
      j && ((W = y.value) == null || W.scrollTo(0, Math.min(Math.max(-F.value, -j.offsetTop - j.offsetHeight + Y.value), 0)));
    }
    function b() {
      O(I);
    }
    const I = {
      isTopLevel: () => o.getParentContext() === null,
      closeSelfAndActiveParent: () => {
        const x = Z.getParentContext();
        if (x) {
          x.closeOtherSubMenu();
          const W = x.getSubMenuInstanceContext();
          if (W)
            return W.focusCurrentItem(), !0;
        }
        return !1;
      },
      closeCurrentSubMenu: () => {
        var x;
        return (x = Z.getParentContext()) == null ? void 0 : x.closeOtherSubMenu();
      },
      moveCurrentItemFirst: () => H(!0),
      moveCurrentItemLast: () => H(!1),
      moveCurrentItemDown: () => H(!0, M ? g.indexOf(M) + 1 : 0),
      moveCurrentItemUp: () => H(!1, M ? g.indexOf(M) - 1 : 0),
      focusCurrentItem: () => s(),
      openCurrentItemSubMenu: () => M ? M == null ? void 0 : M.showSubMenu() : !1,
      triggerCurrentItemClick: (x) => M == null ? void 0 : M.click(x)
    };
    let $ = !1, K = !1;
    const Z = {
      zIndex: u + 1,
      container: o.container,
      adjustPadding: a.value.adjustPadding || ne.defaultAdjustPadding,
      getParentWidth: () => {
        var x;
        return ((x = C.value) == null ? void 0 : x.offsetWidth) || 0;
      },
      getParentHeight: () => {
        var x;
        return ((x = C.value) == null ? void 0 : x.offsetHeight) || 0;
      },
      getPositon: () => [z.value.x, z.value.y],
      getZoom: () => a.value.zoom || ne.defaultZoom,
      addOpenedSubMenu(x) {
        E.push(x);
      },
      closeOtherSubMenu() {
        E.forEach((x) => x()), E.splice(0, E.length), O(I);
      },
      checkCloseOtherSubMenuTimeOut() {
        return V ? (clearTimeout(V), V = 0, !0) : !1;
      },
      closeOtherSubMenuWithTimeOut() {
        V = setTimeout(() => {
          V = 0, this.closeOtherSubMenu();
        }, 200);
      },
      addChildMenuItem: (x, W) => {
        W === void 0 ? g.push(x) : g.splice(W, 0, x);
      },
      removeChildMenuItem: (x) => {
        g.splice(g.indexOf(x), 1), x.getSubMenuInstance = () => {
        };
      },
      markActiveMenuItem: (x, W = !1) => {
        A(), M = x, W && s();
      },
      markThisOpenedByKeyBoard: () => {
        $ = !0;
      },
      isOpenedByKeyBoardFlag: () => $ ? ($ = !1, !0) : !1,
      isMenuItemDataCollectedFlag: () => K,
      getElement: () => C.value || null,
      getParentContext: () => o,
      getSubMenuInstanceContext: () => I
    };
    le("menuContext", Z);
    const G = {
      getChildItem: (x) => g[x],
      getMenuDimensions: () => k.value ? {
        width: k.value.offsetWidth,
        height: k.value.offsetHeight
      } : { width: 0, height: 0 },
      getSubmenuRoot: () => k.value,
      getMenu: () => C.value,
      getScrollValue: () => {
        var x, W;
        return ((W = (x = y.value) == null ? void 0 : x.getScrollContainer()) == null ? void 0 : W.scrollTop) || 0;
      },
      setScrollValue: (x) => {
        var W;
        return (W = y.value) == null ? void 0 : W.scrollTo(0, x);
      },
      getScrollHeight: () => F.value,
      adjustPosition: () => {
        se();
      },
      getMaxHeight: () => Y.value,
      getPosition: () => z.value,
      setPosition: (x, W) => {
        z.value.x = x, z.value.y = W;
      }
    }, B = J("menuItemInstance", void 0);
    B && (B.getSubMenuInstance = () => G);
    const F = R(0), Y = R(0), Q = R(!1), z = R({ x: 0, y: 0 });
    function se() {
      ge(() => {
        const x = C.value, W = k.value;
        if (x && W && y.value) {
          const { container: j } = o, f = (i == null ? void 0 : i()) ?? 0, ve = (d == null ? void 0 : d()) ?? 0, ee = getComputedStyle(W), _ = parseFloat(ee.paddingLeft), D = parseFloat(ee.paddingTop), q = ve > 0 ? D : 0, ze = document.documentElement.scrollHeight / c(), $e = document.documentElement.scrollWidth / c(), ye = Math.min($e, j.offsetWidth), Ye = Math.min(ze, j.offsetHeight);
          let je = Re(x, j), De = Pe(x, j);
          n.direction.includes("l") ? z.value.x -= x.offsetWidth + _ : n.direction.includes("r") ? z.value.x += f + _ : (z.value.x += f / 2, z.value.x -= (x.offsetWidth + _) / 2), n.direction.includes("t") ? z.value.y -= (x.offsetHeight + D * 2) / c() : n.direction.includes("b") ? z.value.y -= D / c() : z.value.y -= (x.offsetHeight + D) / 2 / c(), ge(() => {
            var Xe, Ze;
            je = Re(x, j), De = Pe(x, j), F.value = Math.min(
              n.maxHeight || 1e5,
              ((Ze = (Xe = y.value) == null ? void 0 : Xe.getScrollContainer()) == null ? void 0 : Ze.scrollHeight) || 0
            );
            const Ht = je + x.offsetWidth - ye, Qe = De + F.value + q * 2 - Ye;
            if (Q.value = Qe > 0, w.value && Ht > 0) {
              const Ee = f + x.offsetWidth - _, Oe = je;
              Ee > Oe ? z.value.x -= Oe : z.value.x -= Ee;
            }
            if (Q.value) {
              if (w.value) {
                const Ee = Qe, Oe = De;
                Ee > Oe ? z.value.y -= Oe - q : z.value.y -= Ee - q;
              }
              Y.value = Ye - (z.value.y + D);
            } else
              Y.value = 0;
          });
        }
        x == null || x.focus({
          preventScroll: !0
        }), o.isOpenedByKeyBoardFlag() && H(!0), K = !0;
      });
    }
    return ke(() => {
      var x;
      l.value = !0;
      const W = (x = n.parentMenuItemContext) == null ? void 0 : x.getElement();
      if (W) {
        const j = Re(W, o.container), f = Pe(W, o.container);
        z.value.x = j, z.value.y = f;
      } else {
        const [j, f] = o.getPositon();
        z.value.x = j, z.value.y = f;
      }
      O(I), se();
    }), Se(() => {
      l.value = !1, B && (B.getSubMenuInstance = () => {
      });
    }), t(G), (x, W) => {
      const j = S("ContextSubMenu", !0);
      return l.value ? (p(), P(bt, {
        key: 0,
        to: `#${v(r)}`
      }, [
        N("div", Ce({
          ref_key: "submenuRoot",
          ref: k
        }, x.$attrs, {
          class: [
            "mx-context-menu",
            v(a).customClass ? v(a).customClass : "",
            v(a).theme ?? ""
          ],
          style: {
            maxWidth: e.maxWidth ? v(it)(e.maxWidth) : `${v(ne).defaultMaxWidth}px`,
            minWidth: e.minWidth ? v(it)(e.minWidth) : `${v(ne).defaultMinWidth}px`,
            zIndex: v(u),
            left: `${z.value.x}px`,
            top: `${z.value.y}px`
          },
          "data-type": "ContextSubMenu",
          onClick: b
        }), [
          m(v(Wn), {
            ref_key: "scrollRectRef",
            ref: y,
            scroll: "vertical",
            maxHeight: Y.value,
            containerClass: "mx-context-menu-scroll"
          }, {
            default: h(() => [
              N("div", {
                class: ce(["mx-context-menu-items"]),
                ref_key: "menu",
                ref: C
              }, [
                X(x.$slots, "default", {}, () => [
                  (p(!0), L(te, null, ie(e.items, (f, ve) => (p(), L(te, { key: ve }, [
                    f.hidden !== !0 && f.divided === "up" ? (p(), P(We, { key: 0 })) : T("", !0),
                    f.hidden !== !0 && f.divided === "self" ? (p(), P(We, { key: 1 })) : (p(), P(Je, {
                      key: 2,
                      clickHandler: f.onClick ? (ee) => f.onClick(ee) : void 0,
                      disabled: typeof f.disabled == "object" ? f.disabled.value : f.disabled,
                      hidden: typeof f.hidden == "object" ? f.hidden.value : f.hidden,
                      icon: f.icon,
                      iconFontClass: f.iconFontClass,
                      svgIcon: f.svgIcon,
                      svgProps: f.svgProps,
                      label: f.label,
                      customRender: f.customRender,
                      customClass: f.customClass,
                      checked: typeof f.checked == "object" ? f.checked.value : f.checked,
                      shortcut: f.shortcut,
                      clickClose: f.clickClose,
                      clickableWhenHasChildren: f.clickableWhenHasChildren,
                      preserveIconWidth: f.preserveIconWidth !== void 0 ? f.preserveIconWidth : v(a).preserveIconWidth,
                      showRightArrow: f.children && f.children.length > 0,
                      hasChildren: f.children && f.children.length > 0,
                      rawMenuItem: f,
                      onSubMenuOpen: (ee) => {
                        var _;
                        return (_ = f.onSubMenuOpen) == null ? void 0 : _.call(f, ee);
                      },
                      onSubMenuClose: (ee) => {
                        var _;
                        return (_ = f.onSubMenuClose) == null ? void 0 : _.call(f, ee);
                      }
                    }, Ke({ _: 2 }, [
                      f.children && f.children.length > 0 ? {
                        name: "submenu",
                        fn: h(({ context: ee }) => [
                          m(j, {
                            parentMenuItemContext: ee,
                            items: f.children,
                            maxWidth: f.maxWidth,
                            minWidth: f.minWidth,
                            maxHeight: f.maxHeight,
                            adjustPosition: f.adjustSubMenuPosition !== void 0 ? f.adjustSubMenuPosition : v(a).adjustPosition,
                            direction: f.direction !== void 0 ? f.direction : v(a).direction
                          }, null, 8, ["parentMenuItemContext", "items", "maxWidth", "minWidth", "maxHeight", "adjustPosition", "direction"])
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1032, ["clickHandler", "disabled", "hidden", "icon", "iconFontClass", "svgIcon", "svgProps", "label", "customRender", "customClass", "checked", "shortcut", "clickClose", "clickableWhenHasChildren", "preserveIconWidth", "showRightArrow", "hasChildren", "rawMenuItem", "onSubMenuOpen", "onSubMenuClose"])),
                    f.hidden !== !0 && (f.divided === "down" || f.divided === !0) ? (p(), P(We, { key: 3 })) : T("", !0)
                  ], 64))), 128))
                ])
              ], 512)
            ]),
            _: 3
          }, 8, ["maxHeight"])
        ], 16)
      ], 8, ["to"])) : T("", !0);
    };
  }
}), Ot = /* @__PURE__ */ ue({
  __name: "ContextSubMenuWrapper",
  props: {
    /**
     * Menu options
     */
    options: {
      type: Object,
      default: null
    },
    /**
     * Show menu?
     */
    show: {
      type: Boolean,
      default: null
    },
    /**
     * Current container, For calculation only
     */
    container: {
      type: Object,
      default: null
    },
    /**
     * Make sure is user set the custom container.
     */
    isFullScreenContainer: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["close", "closeAnimFinished"],
  setup(e, { expose: t, emit: n }) {
    const l = e, r = n, o = _t(), a = R(), {
      options: u,
      show: i,
      container: d
    } = _e(l);
    ke(() => {
      i.value && y();
    }), Se(() => {
      O();
    }), xe(i, (s) => {
      s ? y() : (at(c), O());
    });
    const c = {
      closeMenu: k,
      isClosed: C,
      getMenuRef: () => a.value,
      getMenuDimensions: () => {
        var s;
        return ((s = a.value) == null ? void 0 : s.getMenuDimensions()) ?? { width: 0, height: 0 };
      }
    };
    let w = !1;
    function y() {
      E(), wn(c);
    }
    function k(s) {
      w = !0, r("close", s), u.value.menuTransitionProps || r("closeAnimFinished"), at(c);
    }
    function C() {
      return w;
    }
    function E() {
      setTimeout(() => {
        document.addEventListener("click", A, !0), document.addEventListener("contextmenu", A, !0), document.addEventListener("scroll", V, !0), !l.isFullScreenContainer && d.value && d.value.addEventListener("scroll", V, !0), u.value.keyboardControl !== !1 && document.addEventListener("keydown", M, !0);
      }, 50);
    }
    function O() {
      document.removeEventListener("contextmenu", A, !0), document.removeEventListener("click", A, !0), document.removeEventListener("scroll", V, !0), !l.isFullScreenContainer && d.value && d.value.removeEventListener("scroll", V, !0), u.value.keyboardControl !== !1 && document.removeEventListener("keydown", M, !0);
    }
    const g = R();
    le("globalSetCurrentSubMenu", (s) => g.value = s), le("globalGetMenuHostId", d.value.id);
    function M(s) {
      var b, I, $, K, Z, G, B, F, Y, Q, z, se, x;
      let W = !0;
      switch (s.key) {
        case "Escape": {
          ((b = g.value) == null ? void 0 : b.isTopLevel()) === !1 ? (I = g.value) == null || I.closeCurrentSubMenu() : k();
          break;
        }
        case "ArrowDown":
          ($ = g.value) == null || $.moveCurrentItemDown();
          break;
        case "ArrowUp":
          (K = g.value) == null || K.moveCurrentItemUp();
          break;
        case "Home":
          (Z = g.value) == null || Z.moveCurrentItemFirst();
          break;
        case "End":
          (G = g.value) == null || G.moveCurrentItemLast();
          break;
        case "ArrowLeft": {
          (B = g.value) != null && B.closeSelfAndActiveParent() || (Y = (F = u.value).onKeyFocusMoveLeft) == null || Y.call(F);
          break;
        }
        case "ArrowRight":
          (Q = g.value) != null && Q.openCurrentItemSubMenu() || (se = (z = u.value).onKeyFocusMoveRight) == null || se.call(z);
          break;
        case "Enter":
          (x = g.value) == null || x.triggerCurrentItemClick(s);
          break;
        default:
          W = !1;
          break;
      }
      W && g.value && (s.stopPropagation(), s.preventDefault());
    }
    function V(s) {
      u.value.closeWhenScroll !== !1 && H(s.target, null);
    }
    function A(s) {
      H(s.target, s);
    }
    function H(s, b) {
      for (var I, $; s; ) {
        if (s.classList && s.classList.contains("mx-context-menu"))
          return;
        s = s.parentNode;
      }
      b ? u.value.clickCloseOnOutside !== !1 ? (O(), k()) : ($ = (I = u.value).onClickOnOutside) == null || $.call(I, b) : (O(), k());
    }
    return le("globalOptions", u), le("globalCloseMenu", k), le("globalIsFullScreenContainer", l.isFullScreenContainer), le("globalHasSlot", (s) => o[s] !== void 0), le("globalRenderSlot", (s, b) => X(o, s, { ...b }, () => [be("span", "Render slot failed")], !1)), le("menuContext", {
      zIndex: u.value.zIndex || ne.defaultZindex,
      container: d.value,
      adjustPadding: { x: 0, y: 0 },
      getZoom: () => u.value.zoom || ne.defaultZoom,
      getParentWidth: () => 0,
      getParentHeight: () => 0,
      getPositon: () => [u.value.x, u.value.y],
      closeOtherSubMenuWithTimeOut: () => {
      },
      checkCloseOtherSubMenuTimeOut: () => !1,
      addOpenedSubMenu: () => {
      },
      closeOtherSubMenu: () => {
      },
      getParentContext: () => null,
      getSubMenuInstanceContext: () => null,
      getElement: () => null,
      addChildMenuItem: () => {
      },
      removeChildMenuItem: () => {
      },
      markActiveMenuItem: () => {
      },
      markThisOpenedByKeyBoard: () => {
      },
      isOpenedByKeyBoardFlag: () => !1,
      isMenuItemDataCollectedFlag: () => !1
    }), t(c), (s, b) => v(u).menuTransitionProps ? (p(), P(ht, Ce({
      key: 0,
      appear: ""
    }, v(u).menuTransitionProps, {
      onAfterLeave: b[0] || (b[0] = (I) => r("closeAnimFinished"))
    }), {
      default: h(() => [
        v(i) ? (p(), P(He, {
          key: 0,
          ref_key: "submenuInstance",
          ref: a,
          items: v(u).items,
          adjustPosition: v(u).adjustPosition,
          maxWidth: v(u).maxWidth || v(ne).defaultMaxWidth,
          minWidth: v(u).minWidth || v(ne).defaultMinWidth,
          maxHeight: v(u).maxHeight,
          direction: v(u).direction || v(ne).defaultDirection
        }, {
          default: h(() => [
            X(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["items", "adjustPosition", "maxWidth", "minWidth", "maxHeight", "direction"])) : T("", !0)
      ]),
      _: 3
    }, 16)) : v(i) ? (p(), P(He, {
      key: 1,
      ref_key: "submenuInstance",
      ref: a,
      items: v(u).items,
      adjustPosition: v(u).adjustPosition,
      maxWidth: v(u).maxWidth || v(ne).defaultMaxWidth,
      minWidth: v(u).minWidth || v(ne).defaultMinWidth,
      maxHeight: v(u).maxHeight,
      direction: v(u).direction || v(ne).defaultDirection
    }, {
      default: h(() => [
        X(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["items", "adjustPosition", "maxWidth", "minWidth", "maxHeight", "direction"])) : T("", !0);
  }
}), eo = /* @__PURE__ */ ue({
  __name: "ContextMenu",
  props: {
    /**
     * Menu options
     */
    options: {
      type: Object,
      default: null
    },
    /**
     * Show menu?
     */
    show: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:show", "close"],
  setup(e, { expose: t, emit: n }) {
    const l = n, r = e, { options: o, show: a } = _e(r), { isNew: u, container: i, eleId: d } = Et(o.value), c = R(null), w = _t();
    function y(k) {
      var C, E;
      l("update:show", !1), l("close"), (E = (C = o.value).onClose) == null || E.call(C, k);
    }
    return t({
      closeMenu: () => l("update:show", !1),
      isClosed: () => !a.value,
      getMenuRef: () => {
        var k;
        return (k = c.value) == null ? void 0 : k.getMenuRef();
      },
      getMenuDimensions: () => {
        var k;
        return ((k = c.value) == null ? void 0 : k.getMenuDimensions()) ?? { width: 0, height: 0 };
      }
    }), (k, C) => (p(), P(bt, {
      to: `#${v(d)}`
    }, [
      m(Ot, {
        ref_key: "menuRef",
        ref: c,
        options: v(o),
        show: v(a),
        container: v(i),
        isFullScreenContainer: !v(u),
        onClose: y
      }, Ke({ _: 2 }, [
        ie(v(w), (E, O) => ({
          name: O,
          fn: h((g) => [
            X(k.$slots, O, gt(Tt(g)))
          ])
        }))
      ]), 1032, ["options", "show", "container", "isFullScreenContainer"])
    ], 8, ["to"]));
  }
}), to = ue({
  name: "ContextMenuGroup",
  props: {
    /**
    * Is this menu disabled? 
    */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
    * Is this menu hidden? 
    */
    hidden: {
      type: Boolean,
      default: !1
    },
    /**
     * Is this menu disabled? 
     */
    clickHandler: {
      type: Function,
      default: null
    },
    /**
     * Menu label
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * Menu icon (for icon class)
     */
    icon: {
      type: String,
      default: ""
    },
    /**
     * Custom icon library font class name.
     * 
     * Only for css font icon, If you use the svg icon, you do not need to use this.
     */
    iconFontClass: {
      type: String,
      default: "iconfont"
    },
    /**
     * Is this menu item checked?
     * 
     * The check mark are displayed on the left side of the icon, so it is not recommended to display the icon at the same time.
     */
    checked: {
      type: Boolean,
      default: !1
    },
    /**
     * Shortcut key text display on the right.
     * 
     * The shortcut keys here are only for display. You need to handle the key events by yourself.
     */
    shortcut: {
      type: String,
      default: ""
    },
    /**
     * Display icons use svg symbol (`<use xlink:href="#icon-symbol-name">`) ， only valid when icon attribute is empty.
     */
    svgIcon: {
      type: String,
      default: ""
    },
    /**
     * The user-defined attribute of the svg tag, which is valid when using `svgIcon`.
     */
    svgProps: {
      type: Object,
      default: null
    },
    /**
     * Should a fixed-width icon area be reserved for menu items without icon. (this item)
     * 
     * Default is true .
     * 
     * The width of icon area can be override with css var `--mx-menu-placeholder-width`.
     */
    preserveIconWidth: {
      type: Boolean,
      default: !0
    },
    /**
     * Show right arrow on this menu?
     */
    showRightArrow: {
      type: Boolean,
      default: !1
    },
    /**
     * Should close menu when Click this menu item ?
     */
    clickClose: {
      type: Boolean,
      default: !0
    },
    /**
     * By default, the submenu will automatically adjust its position to prevent it overflow the container.
     * 
     * If you allow menu overflow containers, you can set this to false.
     * 
     * Default is inherit from `MenuOptions.adjustPosition`  .
     */
    adjustSubMenuPosition: {
      type: Boolean,
      default: void 0
    },
    /**
     * Max height of submenu
     */
    maxHeight: {
      type: [String, Number],
      default: 0
    },
    /**
     * Max width of submenu
     */
    maxWidth: {
      type: [String, Number],
      default: 0
    },
    /**
     * Min width of submenu
     */
    minWidth: {
      type: [String, Number],
      default: 0
    }
  },
  setup(e, t) {
    const n = J("globalOptions"), { adjustSubMenuPosition: l, maxWidth: r, minWidth: o, maxHeight: a } = _e(e), u = typeof l.value < "u" ? l.value : n.value.adjustPosition, i = R(), d = R();
    return t.expose({
      getSubMenuRef: () => i.value,
      getMenuItemRef: () => d.value
    }), () => be(Je, {
      ...e,
      ref: d,
      showRightArrow: !0,
      maxWidth: void 0,
      minWidth: void 0,
      maxHeight: void 0,
      adjustSubMenuPosition: void 0,
      hasChildren: typeof t.slots.default !== void 0
    }, t.slots.default ? {
      //Create SubMenu
      submenu: (c) => be(He, {
        ref: i,
        maxWidth: r.value,
        minWidth: o.value,
        maxHeight: a.value,
        adjustPosition: u,
        parentMenuItemContext: c.context
      }, {
        default: t.slots.default
      }),
      //Add other slots
      ...En(t.slots, "default")
    } : t.slots);
  }
});
function no(e, t, n, l) {
  const r = R(!0), o = be(Ot, {
    options: e,
    show: r.value,
    container: t,
    isFullScreenContainer: !n,
    onCloseAnimFinished: () => {
      tt(null, t);
    },
    onClose: (a) => {
      var u;
      (u = e.onClose) == null || u.call(e, a), r.value = !1;
    }
  }, l);
  return tt(o, t), o.component;
}
function vt(e, t) {
  const n = Et(e);
  return no(e, n.container, n.isNew, t).exposed;
}
const Vt = {
  /**
   * For Vue install
   * @param app 
   */
  install(e) {
    e.config.globalProperties.$contextmenu = vt, e.component("ContextMenu", eo), e.component("ContextMenuItem", Je), e.component("ContextMenuGroup", to), e.component("ContextMenuSperator", We), e.component("ContextMenuSeparator", We), e.component("ContextSubMenu", He);
  },
  /**
   * Show a ContextMenu in page, same as `this.$contextmenu`
   * 
   * For example:
   * 
   * ```ts
   * onContextMenu(e : MouseEvent) {
   *   //prevent the browser's default menu
   *   e.preventDefault();
   *   //show your menu
   *   ContextMenu.showContextMenu({
   *     x: e.x,
   *     y: e.y,
   *     items: [
   *       { 
   *         label: "A menu item", 
   *         onClick: () => {
   *           alert("You click a menu item");
   *         }
   *       },
   *       { 
   *         label: "A submenu", 
   *         children: [
   *           { label: "Item1" },
   *           { label: "Item2" },
   *           { label: "Item3" },
   *         ]
   *       },
   *     ]
   *   }); 
   * }
   * ```
   * 
   * You can pass customSlots to custom rendering this menu.
   * 
   * For example, custom rendering #itemRender and #separatorRender:
   * ```ts
   *   ContextMenu.showContextMenu({
   *     ...
   *   } as MenuOptions, {
   *     //Use slot in function mode
   *     itemRender: ({ disabled, label, icon, showRightArrow, onClick, onMouseEnter }) => [  h('div', { 
   *       class: 'my-menu-item'+(disabled?' disabled':''),
   *       onMouseenter: onMouseEnter,
   *       onClick: onClick,
   *     }, [
   *       icon ? h('img', { src: icon }) : h('div', { class: 'icon-place-holder' }),
   *       h('span', label),
   *       showRightArrow ? h('span', { class: 'right-arraw' }, '>>') : h('div'),
   *     ]) ],
   *     separatorRender: () => [ h('div', { class: 'my-menu-sperator' }) ]
   *   })
   * ```
   * 
   * @param options The options of ContextMenu
   * @param customSlots You can provide some custom slots to customize the rendering style of the menu. These slots are the same as the slots of component ContextMenu.
   * @returns Menu instance 
   */
  showContextMenu(e, t) {
    return vt(e, t);
  },
  /**
   * Get if there is a menu open now.
   */
  isAnyContextMenuOpen() {
    return xn();
  },
  /**
   * Close the currently open menu
   */
  closeContextMenu: Mt,
  //Tools
  transformMenuPosition: kn
}, oo = { class: "header-buttons" }, lo = { class: "content" }, ao = {
  __name: "FloatingTreeViewer",
  props: {
    data: {},
    dataModifiers: {}
  },
  emits: /* @__PURE__ */ pe(["openEdit", "close", "update:docked"], ["update:data"]),
  setup(e, { emit: t }) {
    const n = re(e, "data"), { removeElement: l, pasteElement: r, insertElement: o } = wt(n), a = t, u = J("componentClipboard"), i = R([]);
    function d() {
      i.value.forEach((s) => {
        s && (s.isExpanded = !0, w(s));
      });
    }
    function c() {
      i.value.forEach((s) => {
        s && (s.isExpanded = !1, y(s));
      });
    }
    function w(s) {
      s.$refs.treeNodes && s.$refs.treeNodes.forEach((b) => {
        b && (b.isExpanded = !0, w(b));
      });
    }
    function y(s) {
      s.$refs.treeNodes && s.$refs.treeNodes.forEach((b) => {
        b && (b.isExpanded = !1, y(b));
      });
    }
    function k(s, b) {
      let I = s.path ? [b, ...s.path] : [b];
      const $ = [
        {
          label: "Edit",
          onClick: () => {
            a("openEdit", { element: s.element, path: I });
          }
        }
      ];
      $.push(
        {
          label: "Cut",
          onClick: () => {
            u.cut(s.element, I), u.isCut && l(I);
          }
        },
        {
          label: "Copy",
          onClick: () => {
            u.copy(s.element, I);
          }
        }
      ), u.hasContent() && $.push({
        label: "Paste",
        children: [
          {
            label: "Paste as Prepend",
            onClick: () => r(I, "prepend")
          },
          {
            label: "Paste as Append",
            onClick: () => r(I, "append")
          },
          {
            label: "Paste as Child",
            onClick: () => r(I, "child")
          }
        ]
      }), $.push(kt(o, I)), Vt.showContextMenu({
        x: s.event.x,
        y: s.event.y,
        zIndex: 1001,
        items: $
      });
    }
    const C = R({ top: 20, left: 20 }), E = R(!1);
    let O = !1, g = { x: 0, y: 0 };
    function M() {
      E.value = !E.value, a("update:docked", E.value), E.value ? C.value = { top: 0, right: 0, bottom: 0 } : C.value = { top: 20, left: 20 };
    }
    function V(s) {
      E.value || (O = !0, g.x = s.clientX - C.value.left, g.y = s.clientY - C.value.top, document.addEventListener("mousemove", A), document.addEventListener("mouseup", H));
    }
    function A(s) {
      O && (C.value.left = s.clientX - g.x, C.value.top = s.clientY - g.y);
    }
    function H() {
      O = !1, document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", H);
    }
    return Se(() => {
      document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", H);
    }), (s, b) => {
      const I = S("v-icon"), $ = S("v-btn");
      return p(), L("div", {
        class: ce(["floating-tree-viewer", { docked: E.value }]),
        style: Ve(E.value ? C.value : { top: C.value.top + "px", left: C.value.left + "px" })
      }, [
        N("div", {
          class: "header",
          onMousedown: V
        }, [
          b[4] || (b[4] = N("span", null, "JSON Tree Viewer", -1)),
          N("div", oo, [
            m($, {
              icon: "",
              density: "compact",
              onClick: d,
              title: "Expand All"
            }, {
              default: h(() => [
                m(I, null, {
                  default: h(() => b[1] || (b[1] = [
                    U("fa-solid fa-angle-double-down")
                  ])),
                  _: 1,
                  __: [1]
                })
              ]),
              _: 1
            }),
            m($, {
              icon: "",
              density: "compact",
              onClick: c,
              title: "Collapse All"
            }, {
              default: h(() => [
                m(I, null, {
                  default: h(() => b[2] || (b[2] = [
                    U("fa-solid fa-angle-double-up")
                  ])),
                  _: 1,
                  __: [2]
                })
              ]),
              _: 1
            }),
            m($, {
              icon: "",
              density: "compact",
              onClick: M
            }, {
              default: h(() => [
                m(I, null, {
                  default: h(() => [
                    U(de(E.value ? "fa-solid fa-arrow-left" : "fa-solid fa-arrow-right"), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            m($, {
              icon: "",
              density: "compact",
              onClick: b[0] || (b[0] = (K) => s.$emit("close"))
            }, {
              default: h(() => b[3] || (b[3] = [
                U("x")
              ])),
              _: 1,
              __: [3]
            })
          ])
        ], 32),
        N("div", lo, [
          (p(!0), L(te, null, ie(n.value, (K, Z) => (p(), P(St, {
            node: K,
            label: "root",
            onOpenEdit: (G) => k(G, Z),
            ref_for: !0,
            ref_key: "treeNodes",
            ref: i
          }, null, 8, ["node", "onOpenEdit"]))), 256))
        ])
      ], 6);
    };
  }
}, io = /* @__PURE__ */ Me(ao, [["__scopeId", "data-v-5898d76b"]]);
var It = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var l = -1;
    return t.some(function(r, o) {
      return r[0] === n ? (l = o, !0) : !1;
    }), l;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var l = e(this.__entries__, n), r = this.__entries__[l];
        return r && r[1];
      }, t.prototype.set = function(n, l) {
        var r = e(this.__entries__, n);
        ~r ? this.__entries__[r][1] = l : this.__entries__.push([n, l]);
      }, t.prototype.delete = function(n) {
        var l = this.__entries__, r = e(l, n);
        ~r && l.splice(r, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, l) {
        l === void 0 && (l = null);
        for (var r = 0, o = this.__entries__; r < o.length; r++) {
          var a = o[r];
          n.call(l, a[1], a[0]);
        }
      }, t;
    }()
  );
}(), qe = typeof window < "u" && typeof document < "u" && window.document === document, Le = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), ro = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Le) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), uo = 2;
function so(e, t) {
  var n = !1, l = !1, r = 0;
  function o() {
    n && (n = !1, e()), l && u();
  }
  function a() {
    ro(o);
  }
  function u() {
    var i = Date.now();
    if (n) {
      if (i - r < uo)
        return;
      l = !0;
    } else
      n = !0, l = !1, setTimeout(a, t);
    r = i;
  }
  return u;
}
var co = 20, vo = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], fo = typeof MutationObserver < "u", mo = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = so(this.refresh.bind(this), co);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, l = n.indexOf(t);
      ~l && n.splice(l, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !qe || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), fo ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !qe || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, l = n === void 0 ? "" : n, r = vo.some(function(o) {
        return !!~l.indexOf(o);
      });
      r && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Pt = function(e, t) {
  for (var n = 0, l = Object.keys(t); n < l.length; n++) {
    var r = l[n];
    Object.defineProperty(e, r, {
      value: t[r],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, we = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Le;
}, Rt = Te(0, 0, 0, 0);
function Be(e) {
  return parseFloat(e) || 0;
}
function ft(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(l, r) {
    var o = e["border-" + r + "-width"];
    return l + Be(o);
  }, 0);
}
function po(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, l = 0, r = t; l < r.length; l++) {
    var o = r[l], a = e["padding-" + o];
    n[o] = Be(a);
  }
  return n;
}
function ho(e) {
  var t = e.getBBox();
  return Te(0, 0, t.width, t.height);
}
function go(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return Rt;
  var l = we(e).getComputedStyle(e), r = po(l), o = r.left + r.right, a = r.top + r.bottom, u = Be(l.width), i = Be(l.height);
  if (l.boxSizing === "border-box" && (Math.round(u + o) !== t && (u -= ft(l, "left", "right") + o), Math.round(i + a) !== n && (i -= ft(l, "top", "bottom") + a)), !_o(e)) {
    var d = Math.round(u + o) - t, c = Math.round(i + a) - n;
    Math.abs(d) !== 1 && (u -= d), Math.abs(c) !== 1 && (i -= c);
  }
  return Te(r.left, r.top, u, i);
}
var bo = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof we(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof we(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function _o(e) {
  return e === we(e).document.documentElement;
}
function yo(e) {
  return qe ? bo(e) ? ho(e) : go(e) : Rt;
}
function Co(e) {
  var t = e.x, n = e.y, l = e.width, r = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(o.prototype);
  return Pt(a, {
    x: t,
    y: n,
    width: l,
    height: r,
    top: n,
    right: t + l,
    bottom: r + n,
    left: t
  }), a;
}
function Te(e, t, n, l) {
  return { x: e, y: t, width: n, height: l };
}
var xo = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Te(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = yo(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), wo = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      var l = Co(n);
      Pt(this, { target: t, contentRect: l });
    }
    return e;
  }()
), ko = (
  /** @class */
  function() {
    function e(t, n, l) {
      if (this.activeObservations_ = [], this.observations_ = new It(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = l;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof we(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new xo(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof we(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(l) {
          return new wo(l.target, l.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Wt = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new It(), At = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = mo.getInstance(), l = new ko(t, n, this);
      Wt.set(this, l);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  At.prototype[e] = function() {
    var t;
    return (t = Wt.get(this))[e].apply(t, arguments);
  };
});
var So = function() {
  return typeof Le.ResizeObserver < "u" ? Le.ResizeObserver : At;
}();
const mt = [
  "blur",
  "input",
  "change",
  "changeSelectionStyle",
  "changeSession",
  "copy",
  "focus",
  "paste"
], Mo = ue({
  name: "VAceEditor",
  props: {
    value: {
      type: String,
      required: !0
    },
    lang: {
      type: String,
      default: "text"
    },
    theme: {
      type: String,
      default: "chrome"
    },
    options: Object,
    placeholder: String,
    readonly: Boolean,
    wrap: Boolean,
    printMargin: {
      type: [Boolean, Number],
      default: !0
    },
    minLines: Number,
    maxLines: Number
  },
  emits: ["update:value", "init", ...mt],
  render() {
    return be("div");
  },
  mounted() {
    const e = this._editor = zt(Dt.edit(this.$el, {
      placeholder: this.placeholder,
      readOnly: this.readonly,
      value: this.value,
      mode: "ace/mode/" + this.lang,
      theme: "ace/theme/" + this.theme,
      wrap: this.wrap,
      printMargin: this.printMargin,
      useWorker: !1,
      minLines: this.minLines,
      maxLines: this.maxLines,
      ...this.options
    }));
    this._contentBackup = this.value, this._isSettingContent = !1, e.on("change", () => {
      if (this._isSettingContent)
        return;
      const t = e.getValue();
      this._contentBackup = t, this.$emit("update:value", t);
    }), mt.forEach((t) => {
      const n = "on" + $t(t);
      typeof this.$.vnode.props[n] == "function" && e.on(t, this.$emit.bind(this, t));
    }), this._ro = new So(() => e.resize()), this._ro.observe(this.$el), this.$emit("init", e);
  },
  beforeUnmount() {
    var e, t;
    (e = this._ro) === null || e === void 0 || e.disconnect(), (t = this._editor) === null || t === void 0 || t.destroy();
  },
  methods: {
    focus() {
      this._editor.focus();
    },
    blur() {
      this._editor.blur();
    },
    selectAll() {
      this._editor.selectAll();
    },
    getAceInstance() {
      return this._editor;
    }
  },
  watch: {
    value(e) {
      if (this._contentBackup !== e) {
        try {
          this._isSettingContent = !0, this._editor.setValue(e, 1);
        } finally {
          this._isSettingContent = !1;
        }
        this._contentBackup = e;
      }
    },
    theme(e) {
      this._editor.setTheme("ace/theme/" + e);
    },
    options(e) {
      this._editor.setOptions(e);
    },
    readonly(e) {
      this._editor.setReadOnly(e);
    },
    placeholder(e) {
      this._editor.setOption("placeholder", e);
    },
    wrap(e) {
      this._editor.setWrapBehavioursEnabled(e);
    },
    printMargin(e) {
      this._editor.setOption("printMargin", e);
    },
    lang(e) {
      this._editor.setOption("mode", "ace/mode/" + e);
    },
    minLines(e) {
      this._editor.setOption("minLines", e);
    },
    maxLines(e) {
      this._editor.setOption("maxLines", e);
    }
  }
}), Eo = { key: 0 }, Oo = {
  key: 1,
  class: "editor-loading"
}, Vo = {
  __name: "AceEditorWrap",
  props: {
    modelValue: {
      type: Object,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, l = t, r = R(""), o = jt(null), a = R(!1);
    ke(() => {
      try {
        const i = document.createElement("script");
        i.src = "https://cdnjs.cloudflare.com/ajax/libs/ace/1.23.0/ace.js", i.async = !0, i.onload = () => {
          window.ace.require("ace/mode/json"), window.ace.require("ace/theme/chrome"), window.ace.require("ace/worker/json"), r.value = JSON.stringify(n.modelValue, null, 2), a.value = !0;
        }, document.head.appendChild(i);
      } catch (i) {
        console.error("Failed to initialize Ace editor:", i);
      }
    }), xe(r, (i) => {
      try {
        l("update:modelValue", JSON.parse(i));
      } catch (d) {
        console.log(d);
      }
    });
    const u = {
      useWorker: !0,
      showPrintMargin: !1,
      fontSize: 14,
      tabSize: 2,
      showGutter: !0,
      highlightActiveLine: !0
    };
    return (i, d) => a.value ? (p(), L("div", Eo, [
      m(v(Mo), {
        value: r.value,
        "onUpdate:value": d[0] || (d[0] = (c) => r.value = c),
        lang: "json",
        theme: "chrome",
        style: { height: "600px" },
        options: u,
        onInit: d[1] || (d[1] = (c) => o.value = c)
      }, null, 8, ["value"])
    ])) : (p(), L("div", Oo, " Loading editor... "));
  }
}, Io = /* @__PURE__ */ Me(Vo, [["__scopeId", "data-v-de573f42"]]), Po = { id: "content-editor" }, Ro = { class: "preview-container fill-height" }, Wo = {
  __name: "ComponentEditor",
  props: {
    modelValue: { default: [] },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = J("componentClipboard"), n = R(!1), l = R({
      component: "",
      props: {}
    }), r = R(!1), o = R(!1), a = R(!1), u = R(!1), i = R(!1), d = R([]), c = R(""), w = re(e, "modelValue"), { removeElement: y, pasteElement: k, insertElement: C } = wt(w);
    function E(H) {
      t.copy(H, null);
    }
    function O(H) {
      const s = [...w.value], b = d.value.pop(), I = d.value.reduce(($, K) => $[K], s);
      I && (I[b] = H), w.value = s, r.value = !1, l.value = {}, d.value = [];
    }
    function g({ element: H, path: s }) {
      d.value = s, r.value = !0, l.value = H;
    }
    const M = (H) => {
      w.value = H;
    };
    function V() {
      if (c.value === "") {
        alert("Please select a component");
        return;
      }
      w.value.push({
        component: c.value,
        props: {}
      }), n.value = !1, c.value = "";
    }
    function A(H, s, b) {
      if (!H) return;
      H.preventDefault();
      const I = [
        {
          label: "Edit",
          onClick: () => {
            g({ element: s, path: b });
          }
        },
        {
          label: "Cut",
          onClick: () => {
            t.cut(s, b), t.isCut && y(b);
          }
        },
        {
          label: "Copy",
          onClick: () => {
            t.copy(s, b);
          }
        }
      ];
      t.hasContent() && I.push({
        label: "Paste",
        children: [
          {
            label: "Paste as Prepend",
            onClick: () => k(b, "prepend")
          },
          {
            label: "Paste as Append",
            onClick: () => k(b, "append")
          },
          {
            label: "Paste as Child",
            onClick: () => k(b, "child")
          }
        ]
      }), I.push(kt(C, b)), I.push({
        label: "Delete",
        onClick: () => {
          y(b);
        }
      }), Vt.showContextMenu({
        x: H.x,
        y: H.y,
        items: I
      });
    }
    return (H, s) => {
      const b = S("v-btn"), I = S("v-spacer"), $ = S("v-list-item-title"), K = S("v-list-item"), Z = S("v-list"), G = S("v-menu"), B = S("v-toolbar"), F = S("v-col"), Y = S("v-row"), Q = S("v-card-title"), z = S("v-combobox"), se = S("v-card-text"), x = S("v-card-actions"), W = S("v-card"), j = S("v-dialog");
      return p(), L("div", Po, [
        m(B, { class: "mb-2" }, {
          default: h(() => [
            m(b, {
              active: u.value,
              onClick: s[0] || (s[0] = (f) => u.value = !u.value),
              icon: "fa-solid fa-code"
            }, null, 8, ["active"]),
            m(b, {
              active: i.value,
              onClick: s[1] || (s[1] = (f) => i.value = !i.value)
            }, {
              default: h(() => s[14] || (s[14] = [
                U("Draggable")
              ])),
              _: 1,
              __: [14]
            }, 8, ["active"]),
            m(b, {
              onClick: s[2] || (s[2] = (f) => n.value = !0),
              icon: "fa-solid fa-plus"
            }),
            m(b, {
              onClick: s[3] || (s[3] = (f) => o.value = !o.value),
              icon: "fa-solid fa-tree"
            }),
            m(I),
            m(G, null, {
              activator: h(({ props: f }) => [
                m(b, Ce(f, { icon: "fa-solid fa-clipboard" }), null, 16)
              ]),
              default: h(() => [
                m(Z, null, {
                  default: h(() => [
                    (p(!0), L(te, null, ie(v(xt), (f) => (p(), P(K, {
                      key: f.title,
                      onClick: (ve) => E(f)
                    }, {
                      default: h(() => [
                        m($, null, {
                          default: h(() => [
                            U(de(f.title), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["onClick"]))), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        m(Y, null, {
          default: h(() => [
            u.value ? (p(), P(F, {
              key: 0,
              cols: 12
            }, {
              default: h(() => [
                m(Io, {
                  modelValue: w.value,
                  "onUpdate:modelValue": s[4] || (s[4] = (f) => w.value = f)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })) : (p(), P(F, {
              key: 1,
              cols: 12,
              class: "bordered fill-height"
            }, {
              default: h(() => [
                N("div", Ro, [
                  N("div", {
                    class: ce(["preview-content", { "has-docked-tree": o.value && a.value }])
                  }, [
                    m(Ne, {
                      modelValue: w.value,
                      "onUpdate:modelValue": s[5] || (s[5] = (f) => w.value = f),
                      onUpdateSections: M,
                      draggable_pro: i.value,
                      onOpenEdit: s[6] || (s[6] = ({ event: f, element: ve, path: ee }) => A(f, ve, ee))
                    }, null, 8, ["modelValue", "draggable_pro"])
                  ], 2),
                  o.value ? (p(), P(io, {
                    key: 0,
                    data: w.value,
                    "onUpdate:data": s[7] || (s[7] = (f) => w.value = f),
                    onClose: s[8] || (s[8] = (f) => o.value = !1),
                    onOpenEdit: g,
                    "onUpdate:docked": s[9] || (s[9] = (f) => a.value = f)
                  }, null, 8, ["data"])) : T("", !0)
                ])
              ]),
              _: 1
            }))
          ]),
          _: 1
        }),
        m(j, {
          modelValue: n.value,
          "onUpdate:modelValue": s[12] || (s[12] = (f) => n.value = f),
          "max-width": "500px"
        }, {
          default: h(() => [
            m(W, null, {
              default: h(() => [
                m(Q, null, {
                  default: h(() => s[15] || (s[15] = [
                    N("span", { class: "text-h5" }, "Add Component", -1)
                  ])),
                  _: 1,
                  __: [15]
                }),
                m(se, null, {
                  default: h(() => [
                    m(z, {
                      items: v(Gt),
                      modelValue: c.value,
                      "onUpdate:modelValue": s[10] || (s[10] = (f) => c.value = f),
                      label: "Component Name"
                    }, null, 8, ["items", "modelValue"])
                  ]),
                  _: 1
                }),
                m(x, null, {
                  default: h(() => [
                    m(b, {
                      color: "red",
                      onClick: s[11] || (s[11] = (f) => n.value = !1)
                    }, {
                      default: h(() => s[16] || (s[16] = [
                        U("Cancel")
                      ])),
                      _: 1,
                      __: [16]
                    }),
                    m(b, {
                      onClick: V,
                      color: "primary"
                    }, {
                      default: h(() => s[17] || (s[17] = [
                        U("Add")
                      ])),
                      _: 1,
                      __: [17]
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        m(mn, {
          data: l.value,
          dialog: r.value,
          "onUpdate:dialog": s[13] || (s[13] = (f) => r.value = f),
          onDataSaved: O
        }, null, 8, ["data", "dialog"])
      ]);
    };
  }
}, Ao = {
  __name: "HeroSectionEditor",
  props: {
    hero: {},
    heroModifiers: {}
  },
  emits: ["update:hero"],
  setup(e) {
    const t = re(e, "hero");
    return (n, l) => {
      const r = S("v-expansion-panel-title"), o = S("v-text-field"), a = S("v-col"), u = S("v-row"), i = S("v-expansion-panel-text"), d = S("v-expansion-panel");
      return p(), P(d, null, {
        default: h(() => [
          m(r, null, {
            default: h(() => l[2] || (l[2] = [
              U("Hero Section")
            ])),
            _: 1,
            __: [2]
          }),
          m(i, null, {
            default: h(() => [
              m(u, null, {
                default: h(() => [
                  m(a, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: h(() => [
                      m(o, {
                        label: "Event Picture",
                        modelValue: t.value.pic,
                        "onUpdate:modelValue": l[0] || (l[0] = (c) => t.value.pic = c)
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  m(a, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: h(() => [
                      m(o, {
                        label: "Hero Text",
                        modelValue: t.value.text,
                        "onUpdate:modelValue": l[1] || (l[1] = (c) => t.value.text = c)
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}, Ho = {
  __name: "VisibilityEditor",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = re(e, "modelValue"), l = J("event_form").visibility_fields;
    return console.log(l), (r, o) => {
      const a = S("v-checkbox"), u = S("v-row"), i = S("v-expansion-panel-text"), d = S("v-expansion-panel");
      return p(), P(d, { title: "Visibility" }, {
        default: h(() => [
          m(i, null, {
            default: h(() => [
              m(u, null, {
                default: h(() => [
                  (p(!0), L(te, null, ie(v(l), (c) => (p(), P(a, {
                    key: c.name,
                    color: c.color,
                    modelValue: t.value[c.id],
                    "onUpdate:modelValue": (w) => t.value[c.id] = w,
                    label: c.label
                  }, null, 8, ["color", "modelValue", "onUpdate:modelValue", "label"]))), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}, Lo = {
  __name: "ShortDescriptionEditor",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = re(e, "modelValue");
    return (n, l) => {
      const r = S("v-expansion-panel-text"), o = S("v-expansion-panel");
      return p(), P(o, {
        title: "Short Description",
        value: "description"
      }, {
        default: h(() => [
          m(r, null, {
            default: h(() => [
              m(v(Ct), {
                "api-key": "74ca372jx03ojgry4czoi2g59d4pruuozmudnvfqwzs742yz",
                id: "shortdescription",
                init: v(Kt),
                modelValue: t.value,
                "onUpdate:modelValue": l[0] || (l[0] = (a) => t.value = a)
              }, null, 8, ["init", "modelValue"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
var Bo = 0.75;
function To(e, {
  quality: t,
  width: n,
  height: l
} = {}) {
  return new Promise(function(r, o) {
    var a = document.createElement("canvas"), u = a.getContext("2d"), i = new Image();
    i.src = e, i.crossOrigin = "anonymous", i.onload = function(d) {
      a.width = n || i.width, a.height = l || i.height, URL.revokeObjectURL(d.target.src), u.drawImage(d.target, 0, 0, a.width, a.height), a.toBlob(function(c) {
        r(c);
      }, "image/webp", t || Bo);
    }, i.onerror = function(d) {
      return o(d);
    };
  });
}
function zo(e, {
  quality: t,
  width: n,
  height: l
} = {}) {
  return To(URL.createObjectURL(e), {
    quality: t,
    width: n,
    height: l
  });
}
const $o = {
  __name: "ImageUploadModal",
  props: /* @__PURE__ */ pe({
    uploadImages: {
      type: Function,
      required: !0
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = re(e, "modelValue"), n = R(null), l = e;
    async function r() {
      let o = new FormData(), a = n.value, u = new Blob([a], { type: "image/*" }), i = await zo(u), d = new File([i], a.name + ".webp", { type: "image/webp" });
      o.append("image", d), l.uploadImages(o);
    }
    return (o, a) => {
      const u = S("v-card-title"), i = S("v-file-input"), d = S("v-card-text"), c = S("v-btn"), w = S("v-card-actions"), y = S("v-card"), k = S("v-dialog");
      return p(), P(k, {
        modelValue: t.value,
        "onUpdate:modelValue": a[2] || (a[2] = (C) => t.value = C),
        "max-width": "800"
      }, {
        default: h(() => [
          m(y, null, {
            default: h(() => [
              m(u, null, {
                default: h(() => a[3] || (a[3] = [
                  U("Upload Image")
                ])),
                _: 1,
                __: [3]
              }),
              m(d, null, {
                default: h(() => [
                  m(i, {
                    modelValue: n.value,
                    "onUpdate:modelValue": a[0] || (a[0] = (C) => n.value = C),
                    label: "Select Image",
                    accept: "image/*"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              m(w, null, {
                default: h(() => [
                  m(c, { onClick: r }, {
                    default: h(() => a[4] || (a[4] = [
                      U("Upload")
                    ])),
                    _: 1,
                    __: [4]
                  }),
                  m(c, {
                    onClick: a[1] || (a[1] = (C) => t.value = !1)
                  }, {
                    default: h(() => a[5] || (a[5] = [
                      U("Cancel")
                    ])),
                    _: 1,
                    __: [5]
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}, Uo = {
  __name: "MainDetails",
  props: /* @__PURE__ */ pe({
    uploadImages: {
      type: Function,
      required: !0
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = J("event_form"), n = re(e, "modelValue"), l = R(!1), r = R(0);
    return (o, a) => {
      const u = S("v-text-field"), i = S("v-col"), d = S("v-row"), c = S("v-expansion-panels"), w = S("v-label"), y = S("v-img"), k = S("v-btn"), C = S("v-list-item"), E = S("v-list"), O = S("v-menu");
      return p(), L(te, null, [
        m(d, null, {
          default: h(() => [
            m(i, {
              cols: "12",
              sm: "6"
            }, {
              default: h(() => [
                m(u, {
                  label: "Event Url",
                  modelValue: n.value.url,
                  "onUpdate:modelValue": a[0] || (a[0] = (g) => n.value.url = g),
                  required: ""
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            m(i, {
              cols: "12",
              sm: "6"
            }, {
              default: h(() => [
                m(u, {
                  label: "Start Time",
                  modelValue: n.value.event_start,
                  "onUpdate:modelValue": a[1] || (a[1] = (g) => n.value.event_start = g),
                  type: "datetime-local",
                  required: ""
                }, null, 8, ["modelValue"]),
                m(u, {
                  label: "End Time",
                  modelValue: n.value.event_end,
                  "onUpdate:modelValue": a[2] || (a[2] = (g) => n.value.event_end = g),
                  type: "datetime-local"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        m(u, {
          label: "Title",
          modelValue: n.value.title,
          "onUpdate:modelValue": a[3] || (a[3] = (g) => n.value.title = g),
          required: ""
        }, null, 8, ["modelValue"]),
        m(u, {
          label: "Class",
          modelValue: n.value.class,
          "onUpdate:modelValue": a[4] || (a[4] = (g) => n.value.class = g)
        }, null, 8, ["modelValue"]),
        m(c, {
          modelValue: r.value,
          "onUpdate:modelValue": a[8] || (a[8] = (g) => r.value = g)
        }, {
          default: h(() => [
            m(Ao, {
              hero: n.value.hero,
              "onUpdate:hero": a[5] || (a[5] = (g) => n.value.hero = g)
            }, null, 8, ["hero"]),
            m(Ho, {
              modelValue: n.value,
              "onUpdate:modelValue": a[6] || (a[6] = (g) => n.value = g)
            }, null, 8, ["modelValue"]),
            m(Lo, {
              modelValue: n.value.shortdescription,
              "onUpdate:modelValue": a[7] || (a[7] = (g) => n.value.shortdescription = g)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        m(w, { class: "mt-2" }, {
          default: h(() => a[12] || (a[12] = [
            U("Promo Image(click to delete or change):")
          ])),
          _: 1,
          __: [12]
        }),
        m(y, {
          src: v(t).image_url + n.value.id + "/" + n.value.image + "?thumb=350x0",
          width: "350",
          id: "imagePreview"
        }, null, 8, ["src"]),
        n.value.image == null || n.value.image == "" ? (p(), P(k, {
          key: 0,
          onClick: a[9] || (a[9] = (g) => l.value = !0)
        }, {
          default: h(() => a[13] || (a[13] = [
            U("Upload Image")
          ])),
          _: 1,
          __: [13]
        })) : T("", !0),
        m(O, {
          location: "end",
          activator: "#imagePreview"
        }, {
          default: h(() => [
            m(E, null, {
              default: h(() => [
                m(C, {
                  title: "Change Picture",
                  onClick: a[10] || (a[10] = (g) => l.value = !0)
                }),
                m(C, {
                  title: "Delete Picture",
                  onClick: o.deleteimage
                }, null, 8, ["onClick"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        m($o, {
          modelValue: l.value,
          "onUpdate:modelValue": a[11] || (a[11] = (g) => l.value = g),
          uploadImages: e.uploadImages
        }, null, 8, ["modelValue", "uploadImages"])
      ], 64);
    };
  }
}, Fo = {
  install(e, t = {}) {
    e.component("ComponentEditor", Wo), t.componentClipboard && e.provide("componentClipboard", t.componentClipboard), t.event_form ? e.provide("event_form", t.event_form) : e.provide("event_form", {
      image_url: "https://api.dreia.org/api/files/events/",
      visibility_fields: [
        {
          id: "mainpage",
          color: "blue",
          label: "DREIA.com?"
        },
        {
          id: "public",
          color: "green",
          label: "Public"
        },
        {
          id: "formOn",
          color: "red",
          label: "Form"
        },
        {
          id: "url_is_redirect",
          color: "purple",
          label: "Is it a redirect?"
        },
        {
          id: "is_modal",
          color: "yellow",
          label: "Is it a modal?"
        }
      ]
    });
  }
};
export {
  Uo as EventMainDetails,
  Fo as default
};
