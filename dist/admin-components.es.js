import { mergeModels as ye, useModel as Ae, createElementBlock as L, openBlock as p, Fragment as ne, renderList as de, createBlock as R, resolveDynamicComponent as mt, mergeProps as Ce, withModifiers as He, createSlots as Ge, withCtx as S, createCommentVNode as T, createTextVNode as J, toDisplayString as se, watch as _e, defineComponent as ie, toRefs as ge, ref as P, nextTick as me, onMounted as ke, onBeforeUnmount as we, onActivated as Vt, onDeactivated as Lt, h as he, resolveComponent as z, createVNode as O, unref as u, inject as q, computed as ve, createElementVNode as F, normalizeClass as ue, provide as le, renderSlot as Y, Transition as ht, normalizeProps as gt, Teleport as bt, reactive as et, normalizeStyle as Oe, useSlots as yt, guardReactiveProps as Bt, render as tt, markRaw as Tt, capitalize as zt, shallowRef as $t } from "vue";
import jt from "ace-builds";
const Se = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, r] of t)
    n[l] = r;
  return n;
}, Dt = ["innerHTML"], Nt = ["innerHTML", "onContextmenu"], Ft = {
  __name: "JsonComponents",
  props: /* @__PURE__ */ ye({
    draggable_pro: {
      type: Boolean,
      default: !0
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ ye(["updateSections", "openEdit"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const n = Ae(e, "modelValue"), l = t;
    function r(i) {
      const v = {};
      return v[i] ? v[i] : i;
    }
    function o(i, v, f) {
      l("openEdit", { event: i, element: v, path: [f] });
    }
    function d(i, v, f, C) {
      let b = [];
      f !== null && b.push(f), v !== null && b.push(v), C === "children" ? (b.push("children"), i.path && (b = [...b, ...i.path])) : C === "slot" && (i.path ? (b.push("slots", v, "children"), b = [...b, ...i.path]) : b.push("slots", v)), l("openEdit", {
        event: i.event,
        element: i.element,
        path: b
      });
    }
    function s(i, v, f, C) {
      l("openEdit", { event: i, element: v.slots[C], path: [f, "slots", C] });
    }
    return (i, v) => (p(!0), L(ne, null, de(n.value, (f, C) => (p(), R(mt(r(f.component)), Ce({ ref_for: !0 }, f.props, {
      onContextmenu: He((b) => o(b, f, C), ["stop"])
    }), Ge({
      default: S(() => [
        f.children ? (p(), R(Ue, {
          key: 0,
          modelValue: f.children,
          "onUpdate:modelValue": (b) => f.children = b,
          draggable_pro: e.draggable_pro,
          onOpenEdit: (b) => d(b, null, C, "children")
        }, null, 8, ["modelValue", "onUpdate:modelValue", "draggable_pro", "onOpenEdit"])) : T("", !0),
        f.htmlContent ? (p(), L("div", {
          key: 1,
          innerHTML: f.htmlContent
        }, null, 8, Dt)) : T("", !0),
        f.textContent ? (p(), L(ne, { key: 2 }, [
          J(se(f.textContent), 1)
        ], 64)) : T("", !0)
      ]),
      _: 2
    }, [
      de(f.slots, (b, y) => ({
        name: b.name,
        fn: S(() => [
          b.children ? (p(), R(Ue, {
            key: 0,
            modelValue: b.children,
            "onUpdate:modelValue": (_) => b.children = _,
            draggable_pro: e.draggable_pro,
            onOpenEdit: (_) => d(_, y, C, "slot")
          }, null, 8, ["modelValue", "onUpdate:modelValue", "draggable_pro", "onOpenEdit"])) : T("", !0),
          b.htmlContent ? (p(), L("div", {
            key: 1,
            innerHTML: b.htmlContent,
            onContextmenu: He((_) => s(_, f, C, y), ["stop"])
          }, null, 40, Nt)) : T("", !0),
          b.textContent ? (p(), L(ne, { key: 2 }, [
            J(se(b.textContent), 1)
          ], 64)) : T("", !0)
        ])
      }))
    ]), 1040, ["onContextmenu"]))), 256));
  }
}, Ue = /* @__PURE__ */ Se(Ft, [["__scopeId", "data-v-e879fa16"]]), Ut = {
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
}, Kt = [
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
var Gt = [
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
], Jt = function(e) {
  return Gt.map(function(t) {
    return t.toLowerCase();
  }).indexOf(e.toLowerCase()) !== -1;
}, qt = function(e, t, n) {
  Object.keys(t).filter(Jt).forEach(function(l) {
    var r = t[l];
    typeof r == "function" && (l === "onInit" ? r(e, n) : n.on(l.substring(2), function(o) {
      return r(o, n);
    }));
  });
}, Xt = function(e, t, n, l) {
  var r = e.modelEvents ? e.modelEvents : null, o = Array.isArray(r) ? r.join(" ") : r;
  _e(l, function(d, s) {
    n && typeof d == "string" && d !== s && d !== n.getContent({ format: e.outputFormat }) && n.setContent(d);
  }), n.on(o || "change input undo redo", function() {
    t.emit("update:modelValue", n.getContent({ format: e.outputFormat }));
  });
}, Yt = function(e, t, n, l, r, o) {
  l.setContent(o()), n.attrs["onUpdate:modelValue"] && Xt(t, n, l, r), qt(e, n.attrs, l);
}, nt = 0, Ct = function(e) {
  var t = Date.now(), n = Math.floor(Math.random() * 1e9);
  return nt++, e + "_" + n + nt + String(t);
}, Zt = function(e) {
  return e !== null && e.tagName.toLowerCase() === "textarea";
}, ot = function(e) {
  return typeof e > "u" || e === "" ? [] : Array.isArray(e) ? e : e.split(" ");
}, Qt = function(e, t) {
  return ot(e).concat(ot(t));
}, en = function(e) {
  return e == null;
}, lt = function() {
  return {
    listeners: [],
    scriptId: Ct("tiny-script"),
    scriptLoaded: !1
  };
}, tn = function() {
  var e = lt(), t = function(r, o, d, s) {
    var i = o.createElement("script");
    i.referrerPolicy = "origin", i.type = "application/javascript", i.id = r, i.src = d;
    var v = function() {
      i.removeEventListener("load", v), s();
    };
    i.addEventListener("load", v), o.head && o.head.appendChild(i);
  }, n = function(r, o, d) {
    e.scriptLoaded ? d() : (e.listeners.push(d), r.getElementById(e.scriptId) || t(e.scriptId, r, o, function() {
      e.listeners.forEach(function(s) {
        return s();
      }), e.scriptLoaded = !0;
    }));
  }, l = function() {
    e = lt();
  };
  return {
    load: n,
    reinitialize: l
  };
}, nn = tn(), on = function() {
  return typeof window < "u" ? window : global;
}, pe = function() {
  var e = on();
  return e && e.tinymce ? e.tinymce : null;
}, ln = {
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
}, re = function() {
  return re = Object.assign || function(e) {
    for (var t, n = 1, l = arguments.length; n < l; n++) {
      t = arguments[n];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, re.apply(this, arguments);
}, rn = function(e, t, n, l) {
  return e(l || "div", {
    id: t,
    ref: n
  });
}, an = function(e, t, n) {
  return e("textarea", {
    id: t,
    visibility: "hidden",
    ref: n
  });
}, Ne = { selector: void 0, target: void 0 }, sn = ie({
  props: ln,
  setup: function(e, t) {
    var n = e.init ? re(re({}, e.init), Ne) : re({}, Ne), l = ge(e), r = l.disabled, o = l.modelValue, d = l.tagName, s = P(null), i = null, v = e.id || Ct("tiny-vue"), f = e.init && e.init.inline || e.inline, C = !!t.attrs["onUpdate:modelValue"], b = !0, y = e.initialValue ? e.initialValue : "", _ = "", w = function(x) {
      return C ? function() {
        return o != null && o.value ? o.value : "";
      } : function() {
        return x ? y : _;
      };
    }, M = function() {
      var x = w(b), E = re(re({}, n), { readonly: e.disabled, target: s.value, plugins: Qt(n.plugins, e.plugins), toolbar: e.toolbar || n.toolbar, inline: f, license_key: e.licenseKey, setup: function(A) {
        i = A, A.on("init", function(H) {
          return Yt(H, e, t, A, o, x);
        }), typeof n.setup == "function" && n.setup(A);
      } });
      Zt(s.value) && (s.value.style.visibility = ""), pe().init(E), b = !1;
    };
    _e(r, function(x) {
      var E;
      i !== null && (typeof ((E = i.mode) === null || E === void 0 ? void 0 : E.set) == "function" ? i.mode.set(x ? "readonly" : "design") : i.setMode(x ? "readonly" : "design"));
    }), _e(d, function(x) {
      var E;
      C || (_ = i.getContent()), (E = pe()) === null || E === void 0 || E.remove(i), me(function() {
        return M();
      });
    }), ke(function() {
      if (pe() !== null)
        M();
      else if (s.value && s.value.ownerDocument) {
        var x = e.cloudChannel ? e.cloudChannel : "7", E = e.apiKey ? e.apiKey : "no-api-key", A = en(e.tinymceScriptSrc) ? "https://cdn.tiny.cloud/1/".concat(E, "/tinymce/").concat(x, "/tinymce.min.js") : e.tinymceScriptSrc;
        nn.load(s.value.ownerDocument, A, M);
      }
    }), we(function() {
      pe() !== null && pe().remove(i);
    }), f || (Vt(function() {
      b || M();
    }), Lt(function() {
      var x;
      C || (_ = i.getContent()), (x = pe()) === null || x === void 0 || x.remove(i);
    }));
    var k = function(x) {
      var E;
      _ = i.getContent(), (E = pe()) === null || E === void 0 || E.remove(i), n = re(re(re({}, n), x), Ne), me(function() {
        return M();
      });
    };
    return t.expose({
      rerender: k,
      getEditor: function() {
        return i;
      }
    }), function() {
      return f ? rn(he, v, s, e.tagName) : an(he, v, s);
    };
  }
});
const un = "74ca372jx03ojgry4czoi2g59d4pruuozmudnvfqwzs742yz", dn = {
  __name: "GeneralComponentEditing",
  props: /* @__PURE__ */ ye({
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
    const t = Ae(e, "modelValue"), n = {
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
      const d = z("v-text-field"), s = z("v-btn"), i = z("v-select"), v = z("v-icon"), f = z("v-textarea"), C = z("v-btn-group");
      return p(), L(ne, null, [
        e.is_component ? (p(), R(d, {
          key: 0,
          modelValue: t.value.component,
          "onUpdate:modelValue": o[0] || (o[0] = (b) => t.value.component = b),
          label: "Component",
          type: "text"
        }, null, 8, ["modelValue"])) : (p(), R(d, {
          key: 1,
          modelValue: t.value.name,
          "onUpdate:modelValue": o[1] || (o[1] = (b) => t.value.name = b),
          label: "Name",
          type: "text"
        }, null, 8, ["modelValue"])),
        (p(!0), L(ne, null, de(t.value.props, (b, y) => {
          var _;
          return p(), L(ne, { key: y }, [
            typeof n[y] == "string" && n[y] !== "htmlContent" ? (p(), R(mt("v-" + n[y]), {
              key: 0,
              modelValue: t.value.props[y],
              "onUpdate:modelValue": (w) => t.value.props[y] = w,
              label: y
            }, {
              append: S(() => [
                O(s, {
                  variant: "text",
                  color: "red",
                  onClick: () => {
                    delete t.value.props[y];
                  },
                  icon: "fa-solid fa-xmark"
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "label"])) : ((_ = n[y]) == null ? void 0 : _.type) === "select" ? (p(), R(i, {
              key: 1,
              modelValue: t.value.props[y],
              "onUpdate:modelValue": (w) => t.value.props[y] = w,
              label: y,
              items: n[y].enum
            }, {
              append: S(() => [
                O(s, {
                  variant: "text",
                  color: "red",
                  onClick: () => {
                    delete t.value.props[y];
                  },
                  icon: "fa-solid fa-xmark"
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "label", "items"])) : (p(), R(d, {
              key: 2,
              modelValue: t.value.props[y],
              "onUpdate:modelValue": (w) => t.value.props[y] = w,
              label: y,
              type: "text"
            }, {
              append: S(() => [
                O(s, {
                  variant: "text",
                  color: "red",
                  onClick: () => {
                    delete t.value.props[y];
                  },
                  icon: "fa-solid fa-xmark"
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "label"]))
          ], 64);
        }), 128)),
        t.value.hasOwnProperty("htmlContent") ? (p(), R(u(sn), {
          key: 2,
          modelValue: t.value.htmlContent,
          "onUpdate:modelValue": o[2] || (o[2] = (b) => t.value.htmlContent = b),
          init: u(Ut),
          "api-key": un
        }, null, 8, ["modelValue", "init"])) : T("", !0),
        t.value.hasOwnProperty("textContent") ? (p(), R(f, {
          key: 3,
          modelValue: t.value.textContent,
          "onUpdate:modelValue": o[3] || (o[3] = (b) => t.value.textContent = b),
          label: "Text Content",
          type: "text"
        }, {
          prepend: S(() => [
            O(v, null, {
              default: S(() => o[8] || (o[8] = [
                J("fa-solid fa-text-width")
              ])),
              _: 1,
              __: [8]
            })
          ]),
          _: 1
        }, 8, ["modelValue"])) : T("", !0),
        O(C, { variant: "text" }, {
          default: S(() => [
            t.value.hasOwnProperty("htmlContent") ? (p(), R(s, {
              key: 0,
              color: "red",
              onClick: o[4] || (o[4] = () => {
                delete t.value.htmlContent;
              })
            }, {
              default: S(() => o[9] || (o[9] = [
                J("Delete htmlContent")
              ])),
              _: 1,
              __: [9]
            })) : (p(), R(s, {
              key: 1,
              color: "green",
              onClick: o[5] || (o[5] = () => {
                t.value.htmlContent = "";
              })
            }, {
              default: S(() => o[10] || (o[10] = [
                J("Add htmlContent")
              ])),
              _: 1,
              __: [10]
            })),
            t.value.hasOwnProperty("textContent") ? (p(), R(s, {
              key: 2,
              color: "red",
              onClick: o[6] || (o[6] = () => {
                delete t.value.textContent;
              })
            }, {
              default: S(() => o[11] || (o[11] = [
                J("Delete textContent")
              ])),
              _: 1,
              __: [11]
            })) : (p(), R(s, {
              key: 3,
              color: "green",
              onClick: o[7] || (o[7] = () => {
                t.value.textContent = "";
              })
            }, {
              default: S(() => o[12] || (o[12] = [
                J("Add textContent")
              ])),
              _: 1,
              __: [12]
            })),
            O(s, {
              color: "green",
              onClick: l
            }, {
              default: S(() => o[13] || (o[13] = [
                J("Add New Prop")
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
}, cn = /* @__PURE__ */ Se(dn, [["__scopeId", "data-v-aa3cbf01"]]), vn = {
  __name: "ComponentElementEdit",
  props: /* @__PURE__ */ ye({
    data: {
      type: Object,
      required: !0
    }
  }, {
    dialog: {},
    dialogModifiers: {}
  }),
  emits: /* @__PURE__ */ ye(["dataSaved"], ["update:dialog"]),
  setup(e, { emit: t }) {
    const n = e, l = P(n.data), r = Ae(e, "dialog"), o = P("");
    _e(r, (s) => {
      var i;
      s && n.data.hasOwnProperty("component") ? (o.value = (i = n.data) == null ? void 0 : i.component, l.value = JSON.parse(JSON.stringify(n.data))) : s && n.data.hasOwnProperty("name") && (o.value = "slot", l.value = JSON.parse(JSON.stringify(n.data)));
    });
    const d = () => {
      r.value = !1, o.value = "", l.value = {};
    };
    return (s, i) => {
      const v = z("v-card-text"), f = z("v-spacer"), C = z("v-btn"), b = z("v-card-actions"), y = z("v-icon"), _ = z("v-card"), w = z("v-dialog");
      return p(), R(w, {
        modelValue: r.value,
        "onUpdate:modelValue": i[2] || (i[2] = (M) => r.value = M),
        "max-width": "800px",
        "retain-focus": !1
      }, {
        default: S(() => [
          O(_, {
            title: "Editing: " + o.value
          }, {
            append: S(() => [
              O(C, {
                class: "close-btn",
                variant: "text",
                onClick: d
              }, {
                default: S(() => [
                  O(y, null, {
                    default: S(() => i[5] || (i[5] = [
                      J("fa-solid fa-xmark")
                    ])),
                    _: 1,
                    __: [5]
                  })
                ]),
                _: 1
              })
            ]),
            default: S(() => [
              o.value != "" ? (p(), R(v, { key: 0 }, {
                default: S(() => [
                  O(cn, {
                    modelValue: l.value,
                    "onUpdate:modelValue": i[0] || (i[0] = (M) => l.value = M),
                    is_component: o.value != "slot"
                  }, null, 8, ["modelValue", "is_component"])
                ]),
                _: 1
              })) : T("", !0),
              O(b, null, {
                default: S(() => [
                  O(f),
                  O(C, {
                    color: "red",
                    onClick: d
                  }, {
                    default: S(() => i[3] || (i[3] = [
                      J("Cancel")
                    ])),
                    _: 1,
                    __: [3]
                  }),
                  O(C, {
                    color: "green",
                    onClick: i[1] || (i[1] = (M) => s.$emit("dataSaved", l.value))
                  }, {
                    default: S(() => i[4] || (i[4] = [
                      J("Save")
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
}, fn = /* @__PURE__ */ Se(vn, [["__scopeId", "data-v-18173f8b"]]), _t = [
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
function xt(e) {
  const t = q("componentClipboard");
  return {
    removeElement: (o) => {
      const d = [...e.value], s = o.slice(0, -1).reduce((i, v) => i[v], d);
      if (s) {
        const i = o[o.length - 1];
        s.splice(i, 1);
      }
      e.value = d;
    },
    pasteElement: (o, d) => {
      if (!t.hasContent()) return;
      const s = [...e.value], i = JSON.parse(JSON.stringify(t.element));
      switch (d) {
        case "prepend":
          s.splice(o[o.length - 1], 0, i);
          break;
        case "append":
          s.splice(o[o.length - 1] + 1, 0, i);
          break;
        case "child":
          const v = o.reduce((f, C) => f[C], s);
          v.children || (v.children = []), v.children.push(i);
          break;
      }
      e.value = s, t.isCut && t.clear();
    },
    insertElement: (o, d) => {
      const s = [...e.value], i = o.reduce((v, f) => v[f], s);
      i.children || (i.children = []), i.children.push(d), e.value = s;
    }
  };
}
function kt(e, t) {
  return {
    label: "Insert",
    children: _t.map((n) => ({
      label: n.title,
      onClick: () => e(t, { ...n })
    }))
  };
}
const pn = { class: "tree-node" }, mn = {
  key: 1,
  class: "node-content"
}, hn = {
  key: 0,
  class: "children"
}, gn = { key: 0 }, bn = {
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
    const l = e, r = n, o = P(!0);
    function d() {
      o.value = !o.value;
    }
    t({
      isExpanded: o,
      treeNodes: P([])
    });
    function s(M, k) {
      M.preventDefault(), r("openEdit", { event: M, element: k, path: [] });
    }
    function i(M, k) {
      const x = ["children", k, ...M.path];
      r("openEdit", {
        event: M.event,
        element: M.element,
        path: x
      });
    }
    function v(M, k, x) {
      M.preventDefault(), r("openEdit", { event: M, element: k, path: ["slots", x] });
    }
    const f = ve(() => Object.prototype.toString.call(l.node) === "[object Object]"), C = ve(() => f.value && l.node.component ? l.node.component : l.label), b = ve(() => {
      if (f.value) {
        if (l.node.textContent) return l.node.textContent;
        if (l.node.htmlContent) return "[HTML content]";
      }
      return "";
    }), y = ve(
      () => f.value && Array.isArray(l.node.children) && l.node.children.length > 0
    ), _ = ve(
      () => f.value && Array.isArray(l.node.slots) && l.node.slots.length > 0
    ), w = ve(() => y.value || _.value);
    return (M, k) => (p(), L("div", pn, [
      F("div", {
        class: "node-label",
        onContextmenu: k[0] || (k[0] = He((x) => s(x, l.node), ["stop"]))
      }, [
        w.value ? (p(), L("span", {
          key: 0,
          class: "expand-icon",
          onClick: d
        }, [
          F("i", {
            class: ue(o.value ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-right")
          }, null, 2)
        ])) : T("", !0),
        J(" " + se(C.value) + " ", 1),
        b.value ? (p(), L("span", mn, " - " + se(b.value), 1)) : T("", !0)
      ], 32),
      w.value && o.value ? (p(), L("div", hn, [
        y.value ? (p(), L("div", gn, [
          (p(!0), L(ne, null, de(l.node.children, (x, E) => (p(), R(wt, {
            key: "child-" + E,
            node: x,
            label: x.component || "[" + E + "]",
            onOpenEdit: (A) => i(A, E),
            ref_for: !0,
            ref: "treeNodes"
          }, null, 8, ["node", "label", "onOpenEdit"]))), 128))
        ])) : T("", !0),
        _.value ? (p(), L("div", bn, [
          (p(!0), L(ne, null, de(l.node.slots, (x, E) => (p(), L("div", {
            key: "slot-" + E,
            class: "slot-label",
            onContextmenu: He((A) => v(A, x, E), ["stop"])
          }, " Slot: " + se(x.name), 41, yn))), 128))
        ])) : T("", !0)
      ])) : T("", !0)
    ]));
  }
}, wt = /* @__PURE__ */ Se(Cn, [["__scopeId", "data-v-aaf0fd33"]]);
let fe = null;
function _n() {
  return fe !== null;
}
function xn(e) {
  fe && St(), fe = e;
}
function rt(e) {
  e === fe && (fe = null);
}
function St() {
  fe && (fe.closeMenu(), fe = null);
}
const te = {
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
const Fe = "mx-menu-default-container", wn = "mx-menu-container-";
let Sn = 0;
function Mt(e) {
  const { getContainer: t, zIndex: n } = e;
  if (t) {
    const r = typeof t == "function" ? t() : t;
    if (r) {
      let o = r.getAttribute("id");
      return o || (o = wn + Sn++, r.setAttribute("id", o)), {
        eleId: o,
        container: r,
        isNew: !1
      };
    }
  }
  let l = document.getElementById(Fe);
  return l || (l = document.createElement("div"), l.setAttribute("id", Fe), l.setAttribute("class", "mx-menu-ghost-host fullscreen"), document.body.appendChild(l)), l.style.zIndex = (n == null ? void 0 : n.toString()) || te.defaultZindex.toString(), {
    eleId: Fe,
    container: l,
    isNew: !0
  };
}
function it(e) {
  return typeof e == "number" ? `${e}px` : e;
}
const oe = ie({
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
    const { vnode: t, data: n } = ge(e);
    return () => typeof t.value == "function" ? t.value(n.value) : t.value;
  }
});
function Mn(e, t) {
  const n = { ...e };
  return delete n[t], n;
}
var En = Object.defineProperty, On = (e, t, n) => t in e ? En(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, at = (e, t, n) => On(e, typeof t != "symbol" ? t + "" : t, n);
class st {
  constructor(t, n) {
    at(this, "x", 0), at(this, "y", 0), this.x = t || 0, this.y = n || 0;
  }
  set(t, n) {
    this.x = t, this.y = n;
  }
  substract(t) {
    this.x -= t.x, this.y -= t.y;
  }
}
function ut(e) {
  const { onDown: t, onMove: n, onUp: l } = e, r = new st(), o = new st();
  let d;
  function s(v) {
    v.stopPropagation(), o.set(v.x, v.y), o.substract(r), n(r, o, v, d);
  }
  function i(v) {
    l(v, d), r.set(0, 0), document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", i);
  }
  return (v, f) => t(v, f) ? (d = f, r.set(v.x, v.y), document.addEventListener("mousemove", s), document.addEventListener("mouseup", i), v.stopPropagation(), !0) : !1;
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
  function d() {
    e.value && (t && r !== e.value.offsetWidth && t(e.value.offsetWidth), n && o !== e.value.offsetHeight && n(e.value.offsetHeight), r = e.value.offsetWidth, o = e.value.offsetHeight);
  }
  return {
    startResizeChecker() {
      dt.start(), Ie.push(d);
    },
    stopResizeChecker() {
      const s = Ie.indexOf(d);
      s >= 0 && Ie.splice(s, 1), Ie.length === 0 && dt.stop();
    }
  };
}
const ct = 140, Rn = 70, Wn = /* @__PURE__ */ ie({
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
    const l = e, r = n, o = P(), d = P(), s = P(), i = P(), v = P(), f = P(), C = P(!1), b = ve(() => l.scroll === "horizontal" || l.scroll === "both"), y = ve(() => l.scroll === "vertical" || l.scroll === "both"), _ = et({
      show: !1,
      size: 0,
      sizeRaw: 0,
      pos: 0
    }), w = et({
      show: !1,
      size: 0,
      sizeRaw: 0,
      pos: 0
    });
    let M = 0, k = 0, x = 0, E = 0, A = null;
    const H = { attributes: !0, childList: !0 };
    function a() {
      if (o.value) {
        if (_.show) {
          const h = o.value.offsetWidth / o.value.scrollWidth;
          _.sizeRaw = h * o.value.offsetWidth, _.size = h * 100, _.pos = o.value.scrollLeft / (o.value.scrollWidth - o.value.offsetWidth) * (100 - _.size), h >= 1 && (_.show = !1);
        }
        if (w.show) {
          const h = o.value.offsetHeight / o.value.scrollHeight;
          w.sizeRaw = h * o.value.offsetHeight, w.size = h * 100, w.pos = o.value.scrollTop / (o.value.scrollHeight - o.value.offsetHeight) * (100 - w.size), h >= 1 && (w.show = !1);
        }
        r("scroll", o.value.scrollLeft, o.value.scrollTop);
      }
    }
    function m(h = !1) {
      if (!o.value)
        return;
      let D = b.value, U = y.value;
      const ze = D && (M !== o.value.scrollWidth || x !== o.value.offsetWidth), $e = y && (k !== o.value.scrollHeight || E !== o.value.offsetHeight);
      if (!h && !ze && !$e)
        return;
      const be = window.getComputedStyle(o.value);
      (be.overflow === "hidden" || be.overflowX === "hidden") && (D = !1), (be.overflow === "hidden" || be.overflowY === "hidden") && (U = !1), _.show = D, w.show = U, a(), x = o.value.offsetWidth, E = o.value.offsetHeight, M = o.value.scrollWidth, k = o.value.scrollHeight, r("resized", M, k);
    }
    function I(h) {
      var D;
      l.scroll == "horizontal" && (h.deltaMode == 0 && ((D = o.value) == null || D.scrollTo({
        left: o.value.scrollLeft + (h.deltaY > 0 ? ct : -140),
        behavior: "smooth"
      })), h.preventDefault(), h.stopPropagation());
    }
    function $(h) {
      var D;
      h.deltaMode == 0 && ((D = o.value) == null || D.scrollTo({
        left: o.value.scrollLeft + (h.deltaY > 0 ? ct : -140),
        behavior: "smooth"
      }), h.preventDefault(), h.stopPropagation());
    }
    function K(h) {
      var D;
      h.deltaMode == 0 && ((D = o.value) == null || D.scrollTo({
        top: o.value.scrollTop + (h.deltaY > 0 ? Rn : -70),
        behavior: "smooth"
      }), h.preventDefault(), h.stopPropagation());
    }
    let Z = 0, G = 0, V = 0, N = 0;
    const X = ut({
      onDown(h) {
        return !s.value || !v.value ? !1 : (Z = h.offsetX, G = h.x - h.offsetX - v.value.offsetLeft, h.preventDefault(), C.value = !0, !0);
      },
      onMove(h, D, U) {
        o.value && s.value && (g(U.x - Z - G), U.preventDefault(), U.stopPropagation());
      },
      onUp() {
        C.value = !1;
      }
    }), Q = ut({
      onDown(h) {
        return !i.value || !f.value ? !1 : (V = h.offsetY, N = h.y - h.offsetY - f.value.offsetTop, h.preventDefault(), C.value = !0, !0);
      },
      onMove(h, D, U) {
        o.value && i.value && (W(U.y - V - N), U.preventDefault(), U.stopPropagation());
      },
      onUp() {
        C.value = !1;
      }
    });
    function B(h) {
      o.value && (o.value.scrollLeft = h / 100 * (o.value.scrollWidth - o.value.offsetWidth));
    }
    function ae(h) {
      o.value && (o.value.scrollLeft = h / 100 * (o.value.scrollHeight - o.value.offsetHeight));
    }
    function g(h) {
      o.value && (o.value.scrollLeft = h / (o.value.offsetWidth - _.sizeRaw) * (o.value.scrollWidth - o.value.offsetWidth));
    }
    function W(h) {
      o.value && (o.value.scrollTop = h / (o.value.offsetHeight - w.sizeRaw) * (o.value.scrollHeight - o.value.offsetHeight));
    }
    function j(h) {
      l.scrollBarBackgroundClickable && g(h.offsetX - _.sizeRaw / 2);
    }
    function c(h) {
      l.scrollBarBackgroundClickable && W(h.offsetY - w.sizeRaw / 2);
    }
    const {
      startResizeChecker: ce,
      stopResizeChecker: ee
    } = Pn(
      o,
      () => m(),
      () => m()
    );
    return ke(() => {
      me(() => {
        setTimeout(() => m(!0), 200), m(!0), ce(), A = new MutationObserver(() => m()), A.observe(o.value, H);
      });
    }), we(() => {
      ee(), A && (A.disconnect(), A = null);
    }), t({
      refreshScrollState() {
        m(!0);
      },
      getScrollContainer() {
        return o.value;
      },
      scrollTo(h, D) {
        var U;
        (U = o.value) == null || U.scrollTo(h, D);
      },
      scrollToTop() {
        var h;
        (h = o.value) == null || h.scrollTo(0, 0);
      },
      scrollToBottom() {
        var h;
        (h = o.value) == null || h.scrollTo(o.value.scrollWidth, o.value.scrollHeight);
      }
    }), (h, D) => (p(), L("div", {
      ref_key: "scrollrect",
      ref: d,
      class: ue([
        "vue-scroll-rect",
        e.scrollBarAlwaysShow ? "always-show-scrollbar" : "",
        e.scrollBarBackgroundClickable ? "background-clickable" : "",
        C.value ? "dragging" : ""
      ]),
      style: Oe({
        width: e.width ? `${e.width}px` : void 0,
        height: e.height ? `${e.height}px` : void 0
      }),
      onWheel: I
    }, [
      F("div", {
        ref_key: "container",
        ref: o,
        class: ue(["scroll-content", e.scroll, e.containerClass]),
        style: Oe({
          maxWidth: e.maxWidth ? `${e.maxWidth}px` : void 0,
          maxHeight: e.maxHeight ? `${e.maxHeight}px` : void 0,
          ...e.containerStyle
        }),
        onScroll: a
      }, [
        Y(h.$slots, "default")
      ], 38),
      _.show ? Y(h.$slots, "scrollBarX", {
        key: 0,
        scrollBarValue: _,
        onScroll: B
      }, () => [
        F("div", {
          ref_key: "scrollBarRefX",
          ref: s,
          class: "scrollbar horizontal",
          onClick: j,
          onWheel: $
        }, [
          F("div", {
            class: "thumb",
            ref_key: "scrollBarThumbRefX",
            ref: v,
            style: Oe({ left: `${_.pos}%`, width: `${_.size}%` }),
            onMousedown: D[0] || (D[0] = //@ts-ignore
            (...U) => u(X) && u(X)(...U)),
            onWheel: $
          }, null, 36)
        ], 544)
      ]) : T("", !0),
      w.show ? Y(h.$slots, "scrollBarY", {
        key: 1,
        scrollBarValue: w,
        onScroll: ae
      }, () => [
        w.show ? (p(), L("div", {
          key: 0,
          ref_key: "scrollBarRefY",
          ref: i,
          class: "scrollbar vertical",
          onClick: c,
          onWheel: K
        }, [
          F("div", {
            class: "thumb",
            ref_key: "scrollBarThumbRefY",
            ref: f,
            style: Oe({ top: `${w.pos}%`, height: `${w.size}%` }),
            onMousedown: D[1] || (D[1] = //@ts-ignore
            (...U) => u(Q) && u(Q)(...U)),
            onWheel: K
          }, null, 36)
        ], 544)) : T("", !0)
      ]) : T("", !0)
    ], 38));
  }
}), Je = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, r] of t)
    n[l] = r;
  return n;
}, An = {}, Hn = {
  class: "mx-checked-mark",
  "aria-hidden": "true",
  viewBox: "0 0 1024 1024"
}, Vn = /* @__PURE__ */ F("path", { d: "M129.3,428.6L52,512l345,372.5l575-620.8l-69.5-75L400.4,718.2L129.3,428.6z" }, null, -1), Ln = [
  Vn
];
function Bn(e, t) {
  return p(), L("svg", Hn, Ln);
}
const Tn = /* @__PURE__ */ Je(An, [["render", Bn]]), zn = {}, $n = {
  class: "mx-right-arrow",
  "aria-hidden": "true",
  viewBox: "0 0 1024 1024"
}, jn = /* @__PURE__ */ F("path", { d: "M307.018 49.445c11.517 0 23.032 4.394 31.819 13.18L756.404 480.18c8.439 8.438 13.181 19.885 13.181 31.82s-4.741 23.38-13.181 31.82L338.838 961.376c-17.574 17.573-46.065 17.573-63.64-0.001-17.573-17.573-17.573-46.065 0.001-63.64L660.944 512 275.198 126.265c-17.574-17.573-17.574-46.066-0.001-63.64C283.985 53.839 295.501 49.445 307.018 49.445z" }, null, -1), Dn = [
  jn
];
function Nn(e, t) {
  return p(), L("svg", $n, Dn);
}
const Fn = /* @__PURE__ */ Je(zn, [["render", Nn]]), Un = { class: "mx-item-row" }, Kn = ["xlink:href"], Gn = {
  key: 1,
  class: "label"
}, Jn = { class: "mx-item-row" }, qn = { class: "mx-shortcut" }, qe = /* @__PURE__ */ ie({
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
      clickClose: d,
      clickableWhenHasChildren: s,
      disabled: i,
      hidden: v,
      label: f,
      icon: C,
      iconFontClass: b,
      showRightArrow: y,
      shortcut: _,
      hasChildren: w
    } = ge(l), M = P(!1), k = P(!1), x = P(), E = q("globalOptions"), A = q("globalHasSlot"), H = q("globalRenderSlot"), a = q("globalCloseMenu"), m = q("menuContext"), I = {
      getSubMenuInstance: () => {
      },
      showSubMenu: () => M.value ? (m.markActiveMenuItem(I, !0), !0) : w.value ? (K(), !0) : !1,
      hideSubMenu: () => {
        m.closeOtherSubMenu();
      },
      isDisabledOrHidden: () => i.value || v.value,
      getElement: () => x.value,
      focus: () => k.value = !0,
      blur: () => k.value = !1,
      click: $
    };
    le("menuItemInstance", I), ke(() => {
      m.isMenuItemDataCollectedFlag() ? me(() => {
        let V = 0;
        const N = m.getElement();
        if (N) {
          let X = 0;
          for (let Q = 0; Q < N.children.length; Q++) {
            const B = N.children[Q];
            if (B.getAttribute("data-type") === "ContextMenuItem") {
              if (B === x.value) {
                V = X;
                break;
              }
              X++;
            }
          }
        }
        m.addChildMenuItem(I, V);
      }) : m.addChildMenuItem(I);
    }), we(() => {
      m.removeChildMenuItem(I);
    });
    function $(V) {
      if (!i.value) {
        if (V) {
          const N = V.target;
          if (N.classList.contains("mx-context-no-clickable") || E.value.ignoreClickClassName && N.classList.contains(E.value.ignoreClickClassName))
            return;
          if (E.value.clickCloseClassName && N.classList.contains(E.value.clickCloseClassName)) {
            V.stopPropagation(), a(l.rawMenuItem);
            return;
          }
        }
        w.value ? s.value ? (typeof o.value == "function" && o.value(V), r("click", V)) : M.value || K() : (typeof o.value == "function" && o.value(V), r("click", V), d.value && a(l.rawMenuItem));
      }
    }
    function K(V) {
      k.value = !1, m.checkCloseOtherSubMenuTimeOut() || m.closeOtherSubMenu(), i.value || (m.markActiveMenuItem(I), w.value && (V || m.markThisOpenedByKeyBoard(), m.addOpenedSubMenu(Z), M.value = !0, me(() => r("subMenuOpen", I))));
    }
    function Z() {
      k.value = !1, M.value = !1, r("subMenuClose", I);
    }
    function G() {
      return {
        disabled: i.value,
        label: f.value,
        icon: C.value,
        iconFontClass: b.value,
        showRightArrow: y.value,
        clickClose: d.value,
        clickableWhenHasChildren: s.value,
        shortcut: _.value,
        theme: E.value.theme,
        isOpen: M,
        hasChildren: w,
        onClick: $,
        onMouseEnter: K,
        closeMenu: a
      };
    }
    return t(I), (V, N) => u(v) ? T("", !0) : (p(), L("div", {
      key: 0,
      class: "mx-context-menu-item-wrapper",
      ref_key: "menuItemRef",
      ref: x,
      "data-type": "ContextMenuItem"
    }, [
      u(A)("itemRender") ? (p(), R(u(oe), {
        key: 0,
        vnode: () => u(H)("itemRender", G())
      }, null, 8, ["vnode"])) : e.customRender ? (p(), R(u(oe), {
        key: 1,
        vnode: e.customRender,
        data: G()
      }, null, 8, ["vnode", "data"])) : (p(), L("div", {
        key: 2,
        class: ue([
          "mx-context-menu-item",
          u(i) ? "disabled" : "",
          k.value ? "keyboard-focus" : "",
          e.customClass ? " " + e.customClass : "",
          M.value ? "open" : ""
        ]),
        onClick: $,
        onMouseenter: K
      }, [
        Y(V.$slots, "default", {}, () => [
          F("div", Un, [
            F("div", {
              class: ue([
                "mx-icon-placeholder",
                e.preserveIconWidth ? "preserve-width" : ""
              ])
            }, [
              Y(V.$slots, "icon", {}, () => [
                u(A)("itemIconRender") ? (p(), R(u(oe), {
                  key: 0,
                  vnode: () => u(H)("itemIconRender", G())
                }, null, 8, ["vnode"])) : typeof e.svgIcon == "string" && e.svgIcon ? (p(), L("svg", Ce({
                  key: 1,
                  class: "icon svg"
                }, e.svgProps), [
                  F("use", { "xlink:href": e.svgIcon }, null, 8, Kn)
                ], 16)) : typeof u(C) != "string" ? (p(), R(u(oe), {
                  key: 2,
                  vnode: u(C),
                  data: u(C)
                }, null, 8, ["vnode", "data"])) : typeof u(C) == "string" && u(C) !== "" ? (p(), L("i", {
                  key: 3,
                  class: ue(u(C) + " icon " + u(b) + " " + u(E).iconFontClass)
                }, null, 2)) : T("", !0)
              ]),
              e.checked ? Y(V.$slots, "check", { key: 0 }, () => [
                u(A)("itemCheckRender") ? (p(), R(u(oe), {
                  key: 0,
                  vnode: () => u(H)("itemCheckRender", G())
                }, null, 8, ["vnode"])) : T("", !0),
                O(Tn)
              ]) : T("", !0)
            ], 2),
            Y(V.$slots, "label", {}, () => [
              u(A)("itemLabelRender") ? (p(), R(u(oe), {
                key: 0,
                vnode: () => u(H)("itemLabelRender", G())
              }, null, 8, ["vnode"])) : typeof u(f) == "string" ? (p(), L("span", Gn, se(u(f)), 1)) : (p(), R(u(oe), {
                key: 2,
                vnode: u(f),
                data: u(f)
              }, null, 8, ["vnode", "data"]))
            ])
          ]),
          F("div", Jn, [
            u(_) || V.$slots.shortcut ? Y(V.$slots, "shortcut", { key: 0 }, () => [
              u(A)("itemShortcutRender") ? (p(), R(u(oe), {
                key: 0,
                vnode: () => u(H)("itemShortcutRender", G())
              }, null, 8, ["vnode"])) : T("", !0),
              F("span", qn, se(u(_)), 1)
            ]) : T("", !0),
            u(y) ? Y(V.$slots, "rightArrow", { key: 1 }, () => [
              u(A)("itemRightArrowRender") ? (p(), R(u(oe), {
                key: 0,
                vnode: () => u(H)("itemRightArrowRender", G())
              }, null, 8, ["vnode"])) : T("", !0),
              O(Fn)
            ]) : T("", !0)
          ])
        ])
      ], 34)),
      u(E).menuTransitionProps ? (p(), R(ht, gt(Ce({ key: 3 }, u(E).menuTransitionProps)), {
        default: S(() => [
          M.value ? Y(V.$slots, "submenu", {
            key: 0,
            context: I
          }) : T("", !0)
        ]),
        _: 3
      }, 16)) : M.value ? Y(V.$slots, "submenu", {
        key: 4,
        context: I
      }) : T("", !0)
    ], 512));
  }
}), Xn = ie({
  name: "ContextMenuSperator",
  components: {
    VNodeRender: oe
  },
  setup() {
    const e = q("globalHasSlot"), t = q("globalRenderSlot");
    return {
      globalHasSlot: e,
      globalRenderSlot: t
    };
  }
}), Yn = {
  key: 1,
  class: "mx-context-menu-item-sperator mx-context-no-clickable"
};
function Zn(e, t, n, l, r, o) {
  const d = z("VNodeRender");
  return e.globalHasSlot("separatorRender") ? (p(), R(d, {
    key: 0,
    vnode: () => e.globalRenderSlot("separatorRender", {})
  }, null, 8, ["vnode"])) : (p(), L("div", Yn));
}
const We = /* @__PURE__ */ Je(Xn, [["render", Zn]]), Ve = /* @__PURE__ */ ie({
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
    const n = e, l = P(!1), r = q("globalGetMenuHostId", ""), o = q("menuContext"), d = q("globalOptions");
    q("globalHasSlot"), q("globalRenderSlot");
    const { zIndex: s, getParentWidth: i, getParentHeight: v, getZoom: f } = o, { adjustPosition: C } = ge(n), b = P(), y = P(), _ = P(), w = [], M = q("globalSetCurrentSubMenu"), k = [];
    let x = null, E = 0;
    function A() {
      x && x.blur();
    }
    function H(g, W) {
      if (g) {
        for (let j = W !== void 0 ? W : 0; j < k.length; j++)
          if (!k[j].isDisabledOrHidden()) {
            a(j);
            break;
          }
      } else
        for (let j = W !== void 0 ? W : k.length - 1; j >= 0; j--)
          if (!k[j].isDisabledOrHidden()) {
            a(j);
            break;
          }
    }
    function a(g) {
      var W;
      if (x && A(), g !== void 0 && (x = k[Math.max(0, Math.min(g, k.length - 1))]), !x)
        return;
      x.focus();
      const j = x.getElement();
      j && ((W = b.value) == null || W.scrollTo(0, Math.min(Math.max(-N.value, -j.offsetTop - j.offsetHeight + X.value), 0)));
    }
    function m() {
      M(I);
    }
    const I = {
      isTopLevel: () => o.getParentContext() === null,
      closeSelfAndActiveParent: () => {
        const g = Z.getParentContext();
        if (g) {
          g.closeOtherSubMenu();
          const W = g.getSubMenuInstanceContext();
          if (W)
            return W.focusCurrentItem(), !0;
        }
        return !1;
      },
      closeCurrentSubMenu: () => {
        var g;
        return (g = Z.getParentContext()) == null ? void 0 : g.closeOtherSubMenu();
      },
      moveCurrentItemFirst: () => H(!0),
      moveCurrentItemLast: () => H(!1),
      moveCurrentItemDown: () => H(!0, x ? k.indexOf(x) + 1 : 0),
      moveCurrentItemUp: () => H(!1, x ? k.indexOf(x) - 1 : 0),
      focusCurrentItem: () => a(),
      openCurrentItemSubMenu: () => x ? x == null ? void 0 : x.showSubMenu() : !1,
      triggerCurrentItemClick: (g) => x == null ? void 0 : x.click(g)
    };
    let $ = !1, K = !1;
    const Z = {
      zIndex: s + 1,
      container: o.container,
      adjustPadding: d.value.adjustPadding || te.defaultAdjustPadding,
      getParentWidth: () => {
        var g;
        return ((g = _.value) == null ? void 0 : g.offsetWidth) || 0;
      },
      getParentHeight: () => {
        var g;
        return ((g = _.value) == null ? void 0 : g.offsetHeight) || 0;
      },
      getPositon: () => [B.value.x, B.value.y],
      getZoom: () => d.value.zoom || te.defaultZoom,
      addOpenedSubMenu(g) {
        w.push(g);
      },
      closeOtherSubMenu() {
        w.forEach((g) => g()), w.splice(0, w.length), M(I);
      },
      checkCloseOtherSubMenuTimeOut() {
        return E ? (clearTimeout(E), E = 0, !0) : !1;
      },
      closeOtherSubMenuWithTimeOut() {
        E = setTimeout(() => {
          E = 0, this.closeOtherSubMenu();
        }, 200);
      },
      addChildMenuItem: (g, W) => {
        W === void 0 ? k.push(g) : k.splice(W, 0, g);
      },
      removeChildMenuItem: (g) => {
        k.splice(k.indexOf(g), 1), g.getSubMenuInstance = () => {
        };
      },
      markActiveMenuItem: (g, W = !1) => {
        A(), x = g, W && a();
      },
      markThisOpenedByKeyBoard: () => {
        $ = !0;
      },
      isOpenedByKeyBoardFlag: () => $ ? ($ = !1, !0) : !1,
      isMenuItemDataCollectedFlag: () => K,
      getElement: () => _.value || null,
      getParentContext: () => o,
      getSubMenuInstanceContext: () => I
    };
    le("menuContext", Z);
    const G = {
      getChildItem: (g) => k[g],
      getMenuDimensions: () => y.value ? {
        width: y.value.offsetWidth,
        height: y.value.offsetHeight
      } : { width: 0, height: 0 },
      getSubmenuRoot: () => y.value,
      getMenu: () => _.value,
      getScrollValue: () => {
        var g, W;
        return ((W = (g = b.value) == null ? void 0 : g.getScrollContainer()) == null ? void 0 : W.scrollTop) || 0;
      },
      setScrollValue: (g) => {
        var W;
        return (W = b.value) == null ? void 0 : W.scrollTo(0, g);
      },
      getScrollHeight: () => N.value,
      adjustPosition: () => {
        ae();
      },
      getMaxHeight: () => X.value,
      getPosition: () => B.value,
      setPosition: (g, W) => {
        B.value.x = g, B.value.y = W;
      }
    }, V = q("menuItemInstance", void 0);
    V && (V.getSubMenuInstance = () => G);
    const N = P(0), X = P(0), Q = P(!1), B = P({ x: 0, y: 0 });
    function ae() {
      me(() => {
        const g = _.value, W = y.value;
        if (g && W && b.value) {
          const { container: j } = o, c = (i == null ? void 0 : i()) ?? 0, ce = (v == null ? void 0 : v()) ?? 0, ee = getComputedStyle(W), h = parseFloat(ee.paddingLeft), D = parseFloat(ee.paddingTop), U = ce > 0 ? D : 0, ze = document.documentElement.scrollHeight / f(), $e = document.documentElement.scrollWidth / f(), be = Math.min($e, j.offsetWidth), Xe = Math.min(ze, j.offsetHeight);
          let je = Re(g, j), De = Pe(g, j);
          n.direction.includes("l") ? B.value.x -= g.offsetWidth + h : n.direction.includes("r") ? B.value.x += c + h : (B.value.x += c / 2, B.value.x -= (g.offsetWidth + h) / 2), n.direction.includes("t") ? B.value.y -= (g.offsetHeight + D * 2) / f() : n.direction.includes("b") ? B.value.y -= D / f() : B.value.y -= (g.offsetHeight + D) / 2 / f(), me(() => {
            var Ye, Ze;
            je = Re(g, j), De = Pe(g, j), N.value = Math.min(
              n.maxHeight || 1e5,
              ((Ze = (Ye = b.value) == null ? void 0 : Ye.getScrollContainer()) == null ? void 0 : Ze.scrollHeight) || 0
            );
            const Ht = je + g.offsetWidth - be, Qe = De + N.value + U * 2 - Xe;
            if (Q.value = Qe > 0, C.value && Ht > 0) {
              const Me = c + g.offsetWidth - h, Ee = je;
              Me > Ee ? B.value.x -= Ee : B.value.x -= Me;
            }
            if (Q.value) {
              if (C.value) {
                const Me = Qe, Ee = De;
                Me > Ee ? B.value.y -= Ee - U : B.value.y -= Me - U;
              }
              X.value = Xe - (B.value.y + D);
            } else
              X.value = 0;
          });
        }
        g == null || g.focus({
          preventScroll: !0
        }), o.isOpenedByKeyBoardFlag() && H(!0), K = !0;
      });
    }
    return ke(() => {
      var g;
      l.value = !0;
      const W = (g = n.parentMenuItemContext) == null ? void 0 : g.getElement();
      if (W) {
        const j = Re(W, o.container), c = Pe(W, o.container);
        B.value.x = j, B.value.y = c;
      } else {
        const [j, c] = o.getPositon();
        B.value.x = j, B.value.y = c;
      }
      M(I), ae();
    }), we(() => {
      l.value = !1, V && (V.getSubMenuInstance = () => {
      });
    }), t(G), (g, W) => {
      const j = z("ContextSubMenu", !0);
      return l.value ? (p(), R(bt, {
        key: 0,
        to: `#${u(r)}`
      }, [
        F("div", Ce({
          ref_key: "submenuRoot",
          ref: y
        }, g.$attrs, {
          class: [
            "mx-context-menu",
            u(d).customClass ? u(d).customClass : "",
            u(d).theme ?? ""
          ],
          style: {
            maxWidth: e.maxWidth ? u(it)(e.maxWidth) : `${u(te).defaultMaxWidth}px`,
            minWidth: e.minWidth ? u(it)(e.minWidth) : `${u(te).defaultMinWidth}px`,
            zIndex: u(s),
            left: `${B.value.x}px`,
            top: `${B.value.y}px`
          },
          "data-type": "ContextSubMenu",
          onClick: m
        }), [
          O(u(Wn), {
            ref_key: "scrollRectRef",
            ref: b,
            scroll: "vertical",
            maxHeight: X.value,
            containerClass: "mx-context-menu-scroll"
          }, {
            default: S(() => [
              F("div", {
                class: ue(["mx-context-menu-items"]),
                ref_key: "menu",
                ref: _
              }, [
                Y(g.$slots, "default", {}, () => [
                  (p(!0), L(ne, null, de(e.items, (c, ce) => (p(), L(ne, { key: ce }, [
                    c.hidden !== !0 && c.divided === "up" ? (p(), R(We, { key: 0 })) : T("", !0),
                    c.hidden !== !0 && c.divided === "self" ? (p(), R(We, { key: 1 })) : (p(), R(qe, {
                      key: 2,
                      clickHandler: c.onClick ? (ee) => c.onClick(ee) : void 0,
                      disabled: typeof c.disabled == "object" ? c.disabled.value : c.disabled,
                      hidden: typeof c.hidden == "object" ? c.hidden.value : c.hidden,
                      icon: c.icon,
                      iconFontClass: c.iconFontClass,
                      svgIcon: c.svgIcon,
                      svgProps: c.svgProps,
                      label: c.label,
                      customRender: c.customRender,
                      customClass: c.customClass,
                      checked: typeof c.checked == "object" ? c.checked.value : c.checked,
                      shortcut: c.shortcut,
                      clickClose: c.clickClose,
                      clickableWhenHasChildren: c.clickableWhenHasChildren,
                      preserveIconWidth: c.preserveIconWidth !== void 0 ? c.preserveIconWidth : u(d).preserveIconWidth,
                      showRightArrow: c.children && c.children.length > 0,
                      hasChildren: c.children && c.children.length > 0,
                      rawMenuItem: c,
                      onSubMenuOpen: (ee) => {
                        var h;
                        return (h = c.onSubMenuOpen) == null ? void 0 : h.call(c, ee);
                      },
                      onSubMenuClose: (ee) => {
                        var h;
                        return (h = c.onSubMenuClose) == null ? void 0 : h.call(c, ee);
                      }
                    }, Ge({ _: 2 }, [
                      c.children && c.children.length > 0 ? {
                        name: "submenu",
                        fn: S(({ context: ee }) => [
                          O(j, {
                            parentMenuItemContext: ee,
                            items: c.children,
                            maxWidth: c.maxWidth,
                            minWidth: c.minWidth,
                            maxHeight: c.maxHeight,
                            adjustPosition: c.adjustSubMenuPosition !== void 0 ? c.adjustSubMenuPosition : u(d).adjustPosition,
                            direction: c.direction !== void 0 ? c.direction : u(d).direction
                          }, null, 8, ["parentMenuItemContext", "items", "maxWidth", "minWidth", "maxHeight", "adjustPosition", "direction"])
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1032, ["clickHandler", "disabled", "hidden", "icon", "iconFontClass", "svgIcon", "svgProps", "label", "customRender", "customClass", "checked", "shortcut", "clickClose", "clickableWhenHasChildren", "preserveIconWidth", "showRightArrow", "hasChildren", "rawMenuItem", "onSubMenuOpen", "onSubMenuClose"])),
                    c.hidden !== !0 && (c.divided === "down" || c.divided === !0) ? (p(), R(We, { key: 3 })) : T("", !0)
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
}), Et = /* @__PURE__ */ ie({
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
    const l = e, r = n, o = yt(), d = P(), {
      options: s,
      show: i,
      container: v
    } = ge(l);
    ke(() => {
      i.value && b();
    }), we(() => {
      M();
    }), _e(i, (a) => {
      a ? b() : (rt(f), M());
    });
    const f = {
      closeMenu: y,
      isClosed: _,
      getMenuRef: () => d.value,
      getMenuDimensions: () => {
        var a;
        return ((a = d.value) == null ? void 0 : a.getMenuDimensions()) ?? { width: 0, height: 0 };
      }
    };
    let C = !1;
    function b() {
      w(), xn(f);
    }
    function y(a) {
      C = !0, r("close", a), s.value.menuTransitionProps || r("closeAnimFinished"), rt(f);
    }
    function _() {
      return C;
    }
    function w() {
      setTimeout(() => {
        document.addEventListener("click", A, !0), document.addEventListener("contextmenu", A, !0), document.addEventListener("scroll", E, !0), !l.isFullScreenContainer && v.value && v.value.addEventListener("scroll", E, !0), s.value.keyboardControl !== !1 && document.addEventListener("keydown", x, !0);
      }, 50);
    }
    function M() {
      document.removeEventListener("contextmenu", A, !0), document.removeEventListener("click", A, !0), document.removeEventListener("scroll", E, !0), !l.isFullScreenContainer && v.value && v.value.removeEventListener("scroll", E, !0), s.value.keyboardControl !== !1 && document.removeEventListener("keydown", x, !0);
    }
    const k = P();
    le("globalSetCurrentSubMenu", (a) => k.value = a), le("globalGetMenuHostId", v.value.id);
    function x(a) {
      var m, I, $, K, Z, G, V, N, X, Q, B, ae, g;
      let W = !0;
      switch (a.key) {
        case "Escape": {
          ((m = k.value) == null ? void 0 : m.isTopLevel()) === !1 ? (I = k.value) == null || I.closeCurrentSubMenu() : y();
          break;
        }
        case "ArrowDown":
          ($ = k.value) == null || $.moveCurrentItemDown();
          break;
        case "ArrowUp":
          (K = k.value) == null || K.moveCurrentItemUp();
          break;
        case "Home":
          (Z = k.value) == null || Z.moveCurrentItemFirst();
          break;
        case "End":
          (G = k.value) == null || G.moveCurrentItemLast();
          break;
        case "ArrowLeft": {
          (V = k.value) != null && V.closeSelfAndActiveParent() || (X = (N = s.value).onKeyFocusMoveLeft) == null || X.call(N);
          break;
        }
        case "ArrowRight":
          (Q = k.value) != null && Q.openCurrentItemSubMenu() || (ae = (B = s.value).onKeyFocusMoveRight) == null || ae.call(B);
          break;
        case "Enter":
          (g = k.value) == null || g.triggerCurrentItemClick(a);
          break;
        default:
          W = !1;
          break;
      }
      W && k.value && (a.stopPropagation(), a.preventDefault());
    }
    function E(a) {
      s.value.closeWhenScroll !== !1 && H(a.target, null);
    }
    function A(a) {
      H(a.target, a);
    }
    function H(a, m) {
      for (var I, $; a; ) {
        if (a.classList && a.classList.contains("mx-context-menu"))
          return;
        a = a.parentNode;
      }
      m ? s.value.clickCloseOnOutside !== !1 ? (M(), y()) : ($ = (I = s.value).onClickOnOutside) == null || $.call(I, m) : (M(), y());
    }
    return le("globalOptions", s), le("globalCloseMenu", y), le("globalIsFullScreenContainer", l.isFullScreenContainer), le("globalHasSlot", (a) => o[a] !== void 0), le("globalRenderSlot", (a, m) => Y(o, a, { ...m }, () => [he("span", "Render slot failed")], !1)), le("menuContext", {
      zIndex: s.value.zIndex || te.defaultZindex,
      container: v.value,
      adjustPadding: { x: 0, y: 0 },
      getZoom: () => s.value.zoom || te.defaultZoom,
      getParentWidth: () => 0,
      getParentHeight: () => 0,
      getPositon: () => [s.value.x, s.value.y],
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
    }), t(f), (a, m) => u(s).menuTransitionProps ? (p(), R(ht, Ce({
      key: 0,
      appear: ""
    }, u(s).menuTransitionProps, {
      onAfterLeave: m[0] || (m[0] = (I) => r("closeAnimFinished"))
    }), {
      default: S(() => [
        u(i) ? (p(), R(Ve, {
          key: 0,
          ref_key: "submenuInstance",
          ref: d,
          items: u(s).items,
          adjustPosition: u(s).adjustPosition,
          maxWidth: u(s).maxWidth || u(te).defaultMaxWidth,
          minWidth: u(s).minWidth || u(te).defaultMinWidth,
          maxHeight: u(s).maxHeight,
          direction: u(s).direction || u(te).defaultDirection
        }, {
          default: S(() => [
            Y(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["items", "adjustPosition", "maxWidth", "minWidth", "maxHeight", "direction"])) : T("", !0)
      ]),
      _: 3
    }, 16)) : u(i) ? (p(), R(Ve, {
      key: 1,
      ref_key: "submenuInstance",
      ref: d,
      items: u(s).items,
      adjustPosition: u(s).adjustPosition,
      maxWidth: u(s).maxWidth || u(te).defaultMaxWidth,
      minWidth: u(s).minWidth || u(te).defaultMinWidth,
      maxHeight: u(s).maxHeight,
      direction: u(s).direction || u(te).defaultDirection
    }, {
      default: S(() => [
        Y(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["items", "adjustPosition", "maxWidth", "minWidth", "maxHeight", "direction"])) : T("", !0);
  }
}), Qn = /* @__PURE__ */ ie({
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
    const l = n, r = e, { options: o, show: d } = ge(r), { isNew: s, container: i, eleId: v } = Mt(o.value), f = P(null), C = yt();
    function b(y) {
      var _, w;
      l("update:show", !1), l("close"), (w = (_ = o.value).onClose) == null || w.call(_, y);
    }
    return t({
      closeMenu: () => l("update:show", !1),
      isClosed: () => !d.value,
      getMenuRef: () => {
        var y;
        return (y = f.value) == null ? void 0 : y.getMenuRef();
      },
      getMenuDimensions: () => {
        var y;
        return ((y = f.value) == null ? void 0 : y.getMenuDimensions()) ?? { width: 0, height: 0 };
      }
    }), (y, _) => (p(), R(bt, {
      to: `#${u(v)}`
    }, [
      O(Et, {
        ref_key: "menuRef",
        ref: f,
        options: u(o),
        show: u(d),
        container: u(i),
        isFullScreenContainer: !u(s),
        onClose: b
      }, Ge({ _: 2 }, [
        de(u(C), (w, M) => ({
          name: M,
          fn: S((k) => [
            Y(y.$slots, M, gt(Bt(k)))
          ])
        }))
      ]), 1032, ["options", "show", "container", "isFullScreenContainer"])
    ], 8, ["to"]));
  }
}), eo = ie({
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
    const n = q("globalOptions"), { adjustSubMenuPosition: l, maxWidth: r, minWidth: o, maxHeight: d } = ge(e), s = typeof l.value < "u" ? l.value : n.value.adjustPosition, i = P(), v = P();
    return t.expose({
      getSubMenuRef: () => i.value,
      getMenuItemRef: () => v.value
    }), () => he(qe, {
      ...e,
      ref: v,
      showRightArrow: !0,
      maxWidth: void 0,
      minWidth: void 0,
      maxHeight: void 0,
      adjustSubMenuPosition: void 0,
      hasChildren: typeof t.slots.default !== void 0
    }, t.slots.default ? {
      //Create SubMenu
      submenu: (f) => he(Ve, {
        ref: i,
        maxWidth: r.value,
        minWidth: o.value,
        maxHeight: d.value,
        adjustPosition: s,
        parentMenuItemContext: f.context
      }, {
        default: t.slots.default
      }),
      //Add other slots
      ...Mn(t.slots, "default")
    } : t.slots);
  }
});
function to(e, t, n, l) {
  const r = P(!0), o = he(Et, {
    options: e,
    show: r.value,
    container: t,
    isFullScreenContainer: !n,
    onCloseAnimFinished: () => {
      tt(null, t);
    },
    onClose: (d) => {
      var s;
      (s = e.onClose) == null || s.call(e, d), r.value = !1;
    }
  }, l);
  return tt(o, t), o.component;
}
function vt(e, t) {
  const n = Mt(e);
  return to(e, n.container, n.isNew, t).exposed;
}
const Ot = {
  /**
   * For Vue install
   * @param app 
   */
  install(e) {
    e.config.globalProperties.$contextmenu = vt, e.component("ContextMenu", Qn), e.component("ContextMenuItem", qe), e.component("ContextMenuGroup", eo), e.component("ContextMenuSperator", We), e.component("ContextMenuSeparator", We), e.component("ContextSubMenu", Ve);
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
    return _n();
  },
  /**
   * Close the currently open menu
   */
  closeContextMenu: St,
  //Tools
  transformMenuPosition: kn
}, no = { class: "header-buttons" }, oo = { class: "content" }, lo = {
  __name: "FloatingTreeViewer",
  props: {
    data: {},
    dataModifiers: {}
  },
  emits: /* @__PURE__ */ ye(["openEdit", "close", "update:docked"], ["update:data"]),
  setup(e, { emit: t }) {
    const n = Ae(e, "data"), { removeElement: l, pasteElement: r, insertElement: o } = xt(n), d = t, s = q("componentClipboard"), i = P([]);
    function v() {
      i.value.forEach((a) => {
        a && (a.isExpanded = !0, C(a));
      });
    }
    function f() {
      i.value.forEach((a) => {
        a && (a.isExpanded = !1, b(a));
      });
    }
    function C(a) {
      a.$refs.treeNodes && a.$refs.treeNodes.forEach((m) => {
        m && (m.isExpanded = !0, C(m));
      });
    }
    function b(a) {
      a.$refs.treeNodes && a.$refs.treeNodes.forEach((m) => {
        m && (m.isExpanded = !1, b(m));
      });
    }
    function y(a, m) {
      let I = a.path ? [m, ...a.path] : [m];
      const $ = [
        {
          label: "Edit",
          onClick: () => {
            d("openEdit", { element: a.element, path: I });
          }
        }
      ];
      $.push(
        {
          label: "Cut",
          onClick: () => {
            s.cut(a.element, I), s.isCut && l(I);
          }
        },
        {
          label: "Copy",
          onClick: () => {
            s.copy(a.element, I);
          }
        }
      ), s.hasContent() && $.push({
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
      }), $.push(kt(o, I)), Ot.showContextMenu({
        x: a.event.x,
        y: a.event.y,
        zIndex: 1001,
        items: $
      });
    }
    const _ = P({ top: 20, left: 20 }), w = P(!1);
    let M = !1, k = { x: 0, y: 0 };
    function x() {
      w.value = !w.value, d("update:docked", w.value), w.value ? _.value = { top: 0, right: 0, bottom: 0 } : _.value = { top: 20, left: 20 };
    }
    function E(a) {
      w.value || (M = !0, k.x = a.clientX - _.value.left, k.y = a.clientY - _.value.top, document.addEventListener("mousemove", A), document.addEventListener("mouseup", H));
    }
    function A(a) {
      M && (_.value.left = a.clientX - k.x, _.value.top = a.clientY - k.y);
    }
    function H() {
      M = !1, document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", H);
    }
    return we(() => {
      document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", H);
    }), (a, m) => {
      const I = z("v-icon"), $ = z("v-btn");
      return p(), L("div", {
        class: ue(["floating-tree-viewer", { docked: w.value }]),
        style: Oe(w.value ? _.value : { top: _.value.top + "px", left: _.value.left + "px" })
      }, [
        F("div", {
          class: "header",
          onMousedown: E
        }, [
          m[4] || (m[4] = F("span", null, "JSON Tree Viewer", -1)),
          F("div", no, [
            O($, {
              icon: "",
              density: "compact",
              onClick: v,
              title: "Expand All"
            }, {
              default: S(() => [
                O(I, null, {
                  default: S(() => m[1] || (m[1] = [
                    J("fa-solid fa-angle-double-down")
                  ])),
                  _: 1,
                  __: [1]
                })
              ]),
              _: 1
            }),
            O($, {
              icon: "",
              density: "compact",
              onClick: f,
              title: "Collapse All"
            }, {
              default: S(() => [
                O(I, null, {
                  default: S(() => m[2] || (m[2] = [
                    J("fa-solid fa-angle-double-up")
                  ])),
                  _: 1,
                  __: [2]
                })
              ]),
              _: 1
            }),
            O($, {
              icon: "",
              density: "compact",
              onClick: x
            }, {
              default: S(() => [
                O(I, null, {
                  default: S(() => [
                    J(se(w.value ? "fa-solid fa-arrow-left" : "fa-solid fa-arrow-right"), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            O($, {
              icon: "",
              density: "compact",
              onClick: m[0] || (m[0] = (K) => a.$emit("close"))
            }, {
              default: S(() => m[3] || (m[3] = [
                J("x")
              ])),
              _: 1,
              __: [3]
            })
          ])
        ], 32),
        F("div", oo, [
          (p(!0), L(ne, null, de(n.value, (K, Z) => (p(), R(wt, {
            node: K,
            label: "root",
            onOpenEdit: (G) => y(G, Z),
            ref_for: !0,
            ref_key: "treeNodes",
            ref: i
          }, null, 8, ["node", "onOpenEdit"]))), 256))
        ])
      ], 6);
    };
  }
}, ro = /* @__PURE__ */ Se(lo, [["__scopeId", "data-v-5898d76b"]]);
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
          var d = o[r];
          n.call(l, d[1], d[0]);
        }
      }, t;
    }()
  );
}(), Ke = typeof window < "u" && typeof document < "u" && window.document === document, Le = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), io = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Le) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), ao = 2;
function so(e, t) {
  var n = !1, l = !1, r = 0;
  function o() {
    n && (n = !1, e()), l && s();
  }
  function d() {
    io(o);
  }
  function s() {
    var i = Date.now();
    if (n) {
      if (i - r < ao)
        return;
      l = !0;
    } else
      n = !0, l = !1, setTimeout(d, t);
    r = i;
  }
  return s;
}
var uo = 20, co = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], vo = typeof MutationObserver < "u", fo = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = so(this.refresh.bind(this), uo);
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
      !Ke || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), vo ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Ke || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, l = n === void 0 ? "" : n, r = co.some(function(o) {
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
}, xe = function(e) {
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
    var o = r[l], d = e["padding-" + o];
    n[o] = Be(d);
  }
  return n;
}
function mo(e) {
  var t = e.getBBox();
  return Te(0, 0, t.width, t.height);
}
function ho(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return Rt;
  var l = xe(e).getComputedStyle(e), r = po(l), o = r.left + r.right, d = r.top + r.bottom, s = Be(l.width), i = Be(l.height);
  if (l.boxSizing === "border-box" && (Math.round(s + o) !== t && (s -= ft(l, "left", "right") + o), Math.round(i + d) !== n && (i -= ft(l, "top", "bottom") + d)), !bo(e)) {
    var v = Math.round(s + o) - t, f = Math.round(i + d) - n;
    Math.abs(v) !== 1 && (s -= v), Math.abs(f) !== 1 && (i -= f);
  }
  return Te(r.left, r.top, s, i);
}
var go = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof xe(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof xe(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function bo(e) {
  return e === xe(e).document.documentElement;
}
function yo(e) {
  return Ke ? go(e) ? mo(e) : ho(e) : Rt;
}
function Co(e) {
  var t = e.x, n = e.y, l = e.width, r = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, d = Object.create(o.prototype);
  return Pt(d, {
    x: t,
    y: n,
    width: l,
    height: r,
    top: n,
    right: t + l,
    bottom: r + n,
    left: t
  }), d;
}
function Te(e, t, n, l) {
  return { x: e, y: t, width: n, height: l };
}
var _o = (
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
), xo = (
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
        if (!(t instanceof xe(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new _o(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof xe(t).Element))
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
          return new xo(l.target, l.broadcastRect());
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
      var n = fo.getInstance(), l = new ko(t, n, this);
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
var wo = function() {
  return typeof Le.ResizeObserver < "u" ? Le.ResizeObserver : At;
}();
const pt = [
  "blur",
  "input",
  "change",
  "changeSelectionStyle",
  "changeSession",
  "copy",
  "focus",
  "paste"
], So = ie({
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
  emits: ["update:value", "init", ...pt],
  render() {
    return he("div");
  },
  mounted() {
    const e = this._editor = Tt(jt.edit(this.$el, {
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
    }), pt.forEach((t) => {
      const n = "on" + zt(t);
      typeof this.$.vnode.props[n] == "function" && e.on(t, this.$emit.bind(this, t));
    }), this._ro = new wo(() => e.resize()), this._ro.observe(this.$el), this.$emit("init", e);
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
}), Mo = { key: 0 }, Eo = {
  key: 1,
  class: "editor-loading"
}, Oo = {
  __name: "AceEditorWrap",
  props: {
    modelValue: {
      type: Object,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, l = t, r = P(""), o = $t(null), d = P(!1);
    ke(() => {
      try {
        const i = document.createElement("script");
        i.src = "https://cdnjs.cloudflare.com/ajax/libs/ace/1.23.0/ace.js", i.async = !0, i.onload = () => {
          window.ace.require("ace/mode/json"), window.ace.require("ace/theme/chrome"), window.ace.require("ace/worker/json"), r.value = JSON.stringify(n.modelValue, null, 2), d.value = !0;
        }, document.head.appendChild(i);
      } catch (i) {
        console.error("Failed to initialize Ace editor:", i);
      }
    }), _e(r, (i) => {
      try {
        l("update:modelValue", JSON.parse(i));
      } catch (v) {
        console.log(v);
      }
    });
    const s = {
      useWorker: !0,
      showPrintMargin: !1,
      fontSize: 14,
      tabSize: 2,
      showGutter: !0,
      highlightActiveLine: !0
    };
    return (i, v) => d.value ? (p(), L("div", Mo, [
      O(u(So), {
        value: r.value,
        "onUpdate:value": v[0] || (v[0] = (f) => r.value = f),
        lang: "json",
        theme: "chrome",
        style: { height: "600px" },
        options: s,
        onInit: v[1] || (v[1] = (f) => o.value = f)
      }, null, 8, ["value"])
    ])) : (p(), L("div", Eo, " Loading editor... "));
  }
}, Io = /* @__PURE__ */ Se(Oo, [["__scopeId", "data-v-de573f42"]]), Po = { id: "content-editor" }, Ro = { class: "preview-container fill-height" }, Wo = {
  __name: "ComponentEditor",
  props: {
    modelValue: { default: [] },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = q("componentClipboard"), n = P(!1), l = P({
      component: "",
      props: {}
    }), r = P(!1), o = P(!1), d = P(!1), s = P(!1), i = P(!1), v = P([]), f = P(""), C = Ae(e, "modelValue"), { removeElement: b, pasteElement: y, insertElement: _ } = xt(C);
    function w(H) {
      t.copy(H, null);
    }
    function M(H) {
      const a = [...C.value], m = v.value.pop(), I = v.value.reduce(($, K) => $[K], a);
      I && (I[m] = H), C.value = a, r.value = !1, l.value = {}, v.value = [];
    }
    function k({ element: H, path: a }) {
      v.value = a, r.value = !0, l.value = H;
    }
    const x = (H) => {
      C.value = H;
    };
    function E() {
      if (f.value === "") {
        alert("Please select a component");
        return;
      }
      C.value.push({
        component: f.value,
        props: {}
      }), n.value = !1, f.value = "";
    }
    function A(H, a, m) {
      if (!H) return;
      H.preventDefault();
      const I = [
        {
          label: "Edit",
          onClick: () => {
            k({ element: a, path: m });
          }
        },
        {
          label: "Cut",
          onClick: () => {
            t.cut(a, m), t.isCut && b(m);
          }
        },
        {
          label: "Copy",
          onClick: () => {
            t.copy(a, m);
          }
        }
      ];
      t.hasContent() && I.push({
        label: "Paste",
        children: [
          {
            label: "Paste as Prepend",
            onClick: () => y(m, "prepend")
          },
          {
            label: "Paste as Append",
            onClick: () => y(m, "append")
          },
          {
            label: "Paste as Child",
            onClick: () => y(m, "child")
          }
        ]
      }), I.push(kt(_, m)), I.push({
        label: "Delete",
        onClick: () => {
          b(m);
        }
      }), Ot.showContextMenu({
        x: H.x,
        y: H.y,
        items: I
      });
    }
    return (H, a) => {
      const m = z("v-btn"), I = z("v-spacer"), $ = z("v-list-item-title"), K = z("v-list-item"), Z = z("v-list"), G = z("v-menu"), V = z("v-toolbar"), N = z("v-col"), X = z("v-row"), Q = z("v-card-title"), B = z("v-combobox"), ae = z("v-card-text"), g = z("v-card-actions"), W = z("v-card"), j = z("v-dialog");
      return p(), L("div", Po, [
        O(V, { class: "mb-2" }, {
          default: S(() => [
            O(m, {
              active: s.value,
              onClick: a[0] || (a[0] = (c) => s.value = !s.value),
              icon: "fa-solid fa-code"
            }, null, 8, ["active"]),
            O(m, {
              active: i.value,
              onClick: a[1] || (a[1] = (c) => i.value = !i.value)
            }, {
              default: S(() => a[14] || (a[14] = [
                J("Draggable")
              ])),
              _: 1,
              __: [14]
            }, 8, ["active"]),
            O(m, {
              onClick: a[2] || (a[2] = (c) => n.value = !0),
              icon: "fa-solid fa-plus"
            }),
            O(m, {
              onClick: a[3] || (a[3] = (c) => o.value = !o.value),
              icon: "fa-solid fa-tree"
            }),
            O(I),
            O(G, null, {
              activator: S(({ props: c }) => [
                O(m, Ce(c, { icon: "fa-solid fa-clipboard" }), null, 16)
              ]),
              default: S(() => [
                O(Z, null, {
                  default: S(() => [
                    (p(!0), L(ne, null, de(u(_t), (c) => (p(), R(K, {
                      key: c.title,
                      onClick: (ce) => w(c)
                    }, {
                      default: S(() => [
                        O($, null, {
                          default: S(() => [
                            J(se(c.title), 1)
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
        O(X, null, {
          default: S(() => [
            s.value ? (p(), R(N, {
              key: 0,
              cols: 12
            }, {
              default: S(() => [
                O(Io, {
                  modelValue: C.value,
                  "onUpdate:modelValue": a[4] || (a[4] = (c) => C.value = c)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })) : (p(), R(N, {
              key: 1,
              cols: 12,
              class: "bordered fill-height"
            }, {
              default: S(() => [
                F("div", Ro, [
                  F("div", {
                    class: ue(["preview-content", { "has-docked-tree": o.value && d.value }])
                  }, [
                    O(Ue, {
                      modelValue: C.value,
                      "onUpdate:modelValue": a[5] || (a[5] = (c) => C.value = c),
                      onUpdateSections: x,
                      draggable_pro: i.value,
                      onOpenEdit: a[6] || (a[6] = ({ event: c, element: ce, path: ee }) => A(c, ce, ee))
                    }, null, 8, ["modelValue", "draggable_pro"])
                  ], 2),
                  o.value ? (p(), R(ro, {
                    key: 0,
                    data: C.value,
                    "onUpdate:data": a[7] || (a[7] = (c) => C.value = c),
                    onClose: a[8] || (a[8] = (c) => o.value = !1),
                    onOpenEdit: k,
                    "onUpdate:docked": a[9] || (a[9] = (c) => d.value = c)
                  }, null, 8, ["data"])) : T("", !0)
                ])
              ]),
              _: 1
            }))
          ]),
          _: 1
        }),
        O(j, {
          modelValue: n.value,
          "onUpdate:modelValue": a[12] || (a[12] = (c) => n.value = c),
          "max-width": "500px"
        }, {
          default: S(() => [
            O(W, null, {
              default: S(() => [
                O(Q, null, {
                  default: S(() => a[15] || (a[15] = [
                    F("span", { class: "text-h5" }, "Add Component", -1)
                  ])),
                  _: 1,
                  __: [15]
                }),
                O(ae, null, {
                  default: S(() => [
                    O(B, {
                      items: u(Kt),
                      modelValue: f.value,
                      "onUpdate:modelValue": a[10] || (a[10] = (c) => f.value = c),
                      label: "Component Name"
                    }, null, 8, ["items", "modelValue"])
                  ]),
                  _: 1
                }),
                O(g, null, {
                  default: S(() => [
                    O(m, {
                      color: "red",
                      onClick: a[11] || (a[11] = (c) => n.value = !1)
                    }, {
                      default: S(() => a[16] || (a[16] = [
                        J("Cancel")
                      ])),
                      _: 1,
                      __: [16]
                    }),
                    O(m, {
                      onClick: E,
                      color: "primary"
                    }, {
                      default: S(() => a[17] || (a[17] = [
                        J("Add")
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
        O(fn, {
          data: l.value,
          dialog: r.value,
          "onUpdate:dialog": a[13] || (a[13] = (c) => r.value = c),
          onDataSaved: M
        }, null, 8, ["data", "dialog"])
      ]);
    };
  }
}, Vo = {
  install(e, t = {}) {
    e.component("ComponentEditor", Wo), t.componentClipboard && e.provide("componentClipboard", t.componentClipboard);
  }
};
export {
  Vo as default
};
