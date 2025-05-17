import { mergeModels as Pe, useModel as qe, createElementBlock as se, openBlock as Q, Fragment as Ae, renderList as Oe, createBlock as te, resolveDynamicComponent as Pt, mergeProps as ze, withModifiers as nt, createSlots as mt, withCtx as X, createCommentVNode as oe, createTextVNode as ye, toDisplayString as Re, watch as Ue, defineComponent as Ee, toRefs as Be, ref as ne, nextTick as Fe, onMounted as je, onBeforeUnmount as Ge, onActivated as cn, onDeactivated as un, h as He, resolveComponent as ae, createVNode as ee, unref as K, inject as we, computed as De, createElementVNode as ge, normalizeClass as Ie, provide as Le, renderSlot as be, Transition as zt, normalizeProps as Ut, Teleport as Vt, reactive as $t, normalizeStyle as Ye, useSlots as jt, guardReactiveProps as hn, render as St, markRaw as dn, capitalize as fn } from "vue";
const et = (E, N) => {
  const M = E.__vccOpts || E;
  for (const [S, R] of N)
    M[S] = R;
  return M;
}, pn = ["innerHTML"], gn = ["innerHTML", "onContextmenu"], vn = {
  __name: "JsonComponents",
  props: /* @__PURE__ */ Pe({
    draggable_pro: {
      type: Boolean,
      default: !0
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Pe(["updateSections", "openEdit"], ["update:modelValue"]),
  setup(E, { emit: N }) {
    const M = qe(E, "modelValue"), S = N;
    function R(s) {
      const l = {};
      return l[s] ? l[s] : s;
    }
    function f(s, l, e) {
      S("openEdit", { event: s, element: l, path: [e] });
    }
    function v(s, l, e, n) {
      let i = [];
      e !== null && i.push(e), l !== null && i.push(l), n === "children" ? (i.push("children"), s.path && (i = [...i, ...s.path])) : n === "slot" && (s.path ? (i.push("slots", l, "children"), i = [...i, ...s.path]) : i.push("slots", l)), S("openEdit", {
        event: s.event,
        element: s.element,
        path: i
      });
    }
    function p(s, l, e, n) {
      S("openEdit", { event: s, element: l.slots[n], path: [e, "slots", n] });
    }
    return (s, l) => (Q(!0), se(Ae, null, Oe(M.value, (e, n) => (Q(), te(Pt(R(e.component)), ze({ ref_for: !0 }, e.props, {
      onContextmenu: nt((i) => f(i, e, n), ["stop"])
    }), mt({
      default: X(() => [
        e.children ? (Q(), te(gt, {
          key: 0,
          modelValue: e.children,
          "onUpdate:modelValue": (i) => e.children = i,
          draggable_pro: E.draggable_pro,
          onOpenEdit: (i) => v(i, null, n, "children")
        }, null, 8, ["modelValue", "onUpdate:modelValue", "draggable_pro", "onOpenEdit"])) : oe("", !0),
        e.htmlContent ? (Q(), se("div", {
          key: 1,
          innerHTML: e.htmlContent
        }, null, 8, pn)) : oe("", !0),
        e.textContent ? (Q(), se(Ae, { key: 2 }, [
          ye(Re(e.textContent), 1)
        ], 64)) : oe("", !0)
      ]),
      _: 2
    }, [
      Oe(e.slots, (i, r) => ({
        name: i.name,
        fn: X(() => [
          i.children ? (Q(), te(gt, {
            key: 0,
            modelValue: i.children,
            "onUpdate:modelValue": (t) => i.children = t,
            draggable_pro: E.draggable_pro,
            onOpenEdit: (t) => v(t, r, n, "slot")
          }, null, 8, ["modelValue", "onUpdate:modelValue", "draggable_pro", "onOpenEdit"])) : oe("", !0),
          i.htmlContent ? (Q(), se("div", {
            key: 1,
            innerHTML: i.htmlContent,
            onContextmenu: nt((t) => p(t, e, n, r), ["stop"])
          }, null, 40, gn)) : oe("", !0),
          i.textContent ? (Q(), se(Ae, { key: 2 }, [
            ye(Re(i.textContent), 1)
          ], 64)) : oe("", !0)
        ])
      }))
    ]), 1040, ["onContextmenu"]))), 256));
  }
}, gt = /* @__PURE__ */ et(vn, [["__scopeId", "data-v-e879fa16"]]), mn = {
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
}, yn = [
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
var wn = [
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
], bn = function(E) {
  return wn.map(function(N) {
    return N.toLowerCase();
  }).indexOf(E.toLowerCase()) !== -1;
}, Cn = function(E, N, M) {
  Object.keys(N).filter(bn).forEach(function(S) {
    var R = N[S];
    typeof R == "function" && (S === "onInit" ? R(E, M) : M.on(S.substring(2), function(f) {
      return R(f, M);
    }));
  });
}, $n = function(E, N, M, S) {
  var R = E.modelEvents ? E.modelEvents : null, f = Array.isArray(R) ? R.join(" ") : R;
  Ue(S, function(v, p) {
    M && typeof v == "string" && v !== p && v !== M.getContent({ format: E.outputFormat }) && M.setContent(v);
  }), M.on(f || "change input undo redo", function() {
    N.emit("update:modelValue", M.getContent({ format: E.outputFormat }));
  });
}, Sn = function(E, N, M, S, R, f) {
  S.setContent(f()), M.attrs["onUpdate:modelValue"] && $n(N, M, S, R), Cn(E, M.attrs, S);
}, Mt = 0, Gt = function(E) {
  var N = Date.now(), M = Math.floor(Math.random() * 1e9);
  return Mt++, E + "_" + M + Mt + String(N);
}, Mn = function(E) {
  return E !== null && E.tagName.toLowerCase() === "textarea";
}, At = function(E) {
  return typeof E > "u" || E === "" ? [] : Array.isArray(E) ? E : E.split(" ");
}, An = function(E, N) {
  return At(E).concat(At(N));
}, xn = function(E) {
  return E == null;
}, xt = function() {
  return {
    listeners: [],
    scriptId: Gt("tiny-script"),
    scriptLoaded: !1
  };
}, kn = function() {
  var E = xt(), N = function(R, f, v, p) {
    var s = f.createElement("script");
    s.referrerPolicy = "origin", s.type = "application/javascript", s.id = R, s.src = v;
    var l = function() {
      s.removeEventListener("load", l), p();
    };
    s.addEventListener("load", l), f.head && f.head.appendChild(s);
  }, M = function(R, f, v) {
    E.scriptLoaded ? v() : (E.listeners.push(v), R.getElementById(E.scriptId) || N(E.scriptId, R, f, function() {
      E.listeners.forEach(function(p) {
        return p();
      }), E.scriptLoaded = !0;
    }));
  }, S = function() {
    E = xt();
  };
  return {
    load: M,
    reinitialize: S
  };
}, Ln = kn(), _n = function() {
  return typeof window < "u" ? window : global;
}, We = function() {
  var E = _n();
  return E && E.tinymce ? E.tinymce : null;
}, En = {
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
    validator: function(E) {
      return E === "html" || E === "text";
    }
  }
}, _e = function() {
  return _e = Object.assign || function(E) {
    for (var N, M = 1, S = arguments.length; M < S; M++) {
      N = arguments[M];
      for (var R in N) Object.prototype.hasOwnProperty.call(N, R) && (E[R] = N[R]);
    }
    return E;
  }, _e.apply(this, arguments);
}, Tn = function(E, N, M, S) {
  return E(S || "div", {
    id: N,
    ref: M
  });
}, Rn = function(E, N, M) {
  return E("textarea", {
    id: N,
    visibility: "hidden",
    ref: M
  });
}, ct = { selector: void 0, target: void 0 }, In = Ee({
  props: En,
  setup: function(E, N) {
    var M = E.init ? _e(_e({}, E.init), ct) : _e({}, ct), S = Be(E), R = S.disabled, f = S.modelValue, v = S.tagName, p = ne(null), s = null, l = E.id || Gt("tiny-vue"), e = E.init && E.init.inline || E.inline, n = !!N.attrs["onUpdate:modelValue"], i = !0, r = E.initialValue ? E.initialValue : "", t = "", o = function(u) {
      return n ? function() {
        return f != null && f.value ? f.value : "";
      } : function() {
        return u ? r : t;
      };
    }, a = function() {
      var u = o(i), w = _e(_e({}, M), { readonly: E.disabled, target: p.value, plugins: An(M.plugins, E.plugins), toolbar: E.toolbar || M.toolbar, inline: e, license_key: E.licenseKey, setup: function(y) {
        s = y, y.on("init", function(m) {
          return Sn(m, E, N, y, f, u);
        }), typeof M.setup == "function" && M.setup(y);
      } });
      Mn(p.value) && (p.value.style.visibility = ""), We().init(w), i = !1;
    };
    Ue(R, function(u) {
      var w;
      s !== null && (typeof ((w = s.mode) === null || w === void 0 ? void 0 : w.set) == "function" ? s.mode.set(u ? "readonly" : "design") : s.setMode(u ? "readonly" : "design"));
    }), Ue(v, function(u) {
      var w;
      n || (t = s.getContent()), (w = We()) === null || w === void 0 || w.remove(s), Fe(function() {
        return a();
      });
    }), je(function() {
      if (We() !== null)
        a();
      else if (p.value && p.value.ownerDocument) {
        var u = E.cloudChannel ? E.cloudChannel : "7", w = E.apiKey ? E.apiKey : "no-api-key", y = xn(E.tinymceScriptSrc) ? "https://cdn.tiny.cloud/1/".concat(w, "/tinymce/").concat(u, "/tinymce.min.js") : E.tinymceScriptSrc;
        Ln.load(p.value.ownerDocument, y, a);
      }
    }), Ge(function() {
      We() !== null && We().remove(s);
    }), e || (cn(function() {
      i || a();
    }), un(function() {
      var u;
      n || (t = s.getContent()), (u = We()) === null || u === void 0 || u.remove(s);
    }));
    var c = function(u) {
      var w;
      t = s.getContent(), (w = We()) === null || w === void 0 || w.remove(s), M = _e(_e(_e({}, M), u), ct), Fe(function() {
        return a();
      });
    };
    return N.expose({
      rerender: c,
      getEditor: function() {
        return s;
      }
    }), function() {
      return e ? Tn(He, l, p, E.tagName) : Rn(He, l, p);
    };
  }
});
const On = "74ca372jx03ojgry4czoi2g59d4pruuozmudnvfqwzs742yz", Dn = {
  __name: "GeneralComponentEditing",
  props: /* @__PURE__ */ Pe({
    is_component: {
      type: Boolean,
      default: !0
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(E) {
    const N = qe(E, "modelValue"), M = {
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
    function S() {
      const R = prompt("Enter new prop name:");
      N.value.props === void 0 && (N.value.props = {}), R && (N.value.props[R] = "");
    }
    return (R, f) => {
      const v = ae("v-text-field"), p = ae("v-btn"), s = ae("v-select"), l = ae("v-icon"), e = ae("v-textarea"), n = ae("v-btn-group");
      return Q(), se(Ae, null, [
        E.is_component ? (Q(), te(v, {
          key: 0,
          modelValue: N.value.component,
          "onUpdate:modelValue": f[0] || (f[0] = (i) => N.value.component = i),
          label: "Component",
          type: "text"
        }, null, 8, ["modelValue"])) : (Q(), te(v, {
          key: 1,
          modelValue: N.value.name,
          "onUpdate:modelValue": f[1] || (f[1] = (i) => N.value.name = i),
          label: "Name",
          type: "text"
        }, null, 8, ["modelValue"])),
        (Q(!0), se(Ae, null, Oe(N.value.props, (i, r) => {
          var t;
          return Q(), se(Ae, { key: r }, [
            typeof M[r] == "string" && M[r] !== "htmlContent" ? (Q(), te(Pt("v-" + M[r]), {
              key: 0,
              modelValue: N.value.props[r],
              "onUpdate:modelValue": (o) => N.value.props[r] = o,
              label: r
            }, {
              append: X(() => [
                ee(p, {
                  variant: "text",
                  color: "red",
                  onClick: () => {
                    delete N.value.props[r];
                  },
                  icon: "fa-solid fa-xmark"
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "label"])) : ((t = M[r]) == null ? void 0 : t.type) === "select" ? (Q(), te(s, {
              key: 1,
              modelValue: N.value.props[r],
              "onUpdate:modelValue": (o) => N.value.props[r] = o,
              label: r,
              items: M[r].enum
            }, {
              append: X(() => [
                ee(p, {
                  variant: "text",
                  color: "red",
                  onClick: () => {
                    delete N.value.props[r];
                  },
                  icon: "fa-solid fa-xmark"
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "label", "items"])) : (Q(), te(v, {
              key: 2,
              modelValue: N.value.props[r],
              "onUpdate:modelValue": (o) => N.value.props[r] = o,
              label: r,
              type: "text"
            }, {
              append: X(() => [
                ee(p, {
                  variant: "text",
                  color: "red",
                  onClick: () => {
                    delete N.value.props[r];
                  },
                  icon: "fa-solid fa-xmark"
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "label"]))
          ], 64);
        }), 128)),
        N.value.hasOwnProperty("htmlContent") ? (Q(), te(K(In), {
          key: 2,
          modelValue: N.value.htmlContent,
          "onUpdate:modelValue": f[2] || (f[2] = (i) => N.value.htmlContent = i),
          init: K(mn),
          "api-key": On
        }, null, 8, ["modelValue", "init"])) : oe("", !0),
        N.value.hasOwnProperty("textContent") ? (Q(), te(e, {
          key: 3,
          modelValue: N.value.textContent,
          "onUpdate:modelValue": f[3] || (f[3] = (i) => N.value.textContent = i),
          label: "Text Content",
          type: "text"
        }, {
          prepend: X(() => [
            ee(l, null, {
              default: X(() => f[8] || (f[8] = [
                ye("fa-solid fa-text-width")
              ])),
              _: 1,
              __: [8]
            })
          ]),
          _: 1
        }, 8, ["modelValue"])) : oe("", !0),
        ee(n, { variant: "text" }, {
          default: X(() => [
            N.value.hasOwnProperty("htmlContent") ? (Q(), te(p, {
              key: 0,
              color: "red",
              onClick: f[4] || (f[4] = () => {
                delete N.value.htmlContent;
              })
            }, {
              default: X(() => f[9] || (f[9] = [
                ye("Delete htmlContent")
              ])),
              _: 1,
              __: [9]
            })) : (Q(), te(p, {
              key: 1,
              color: "green",
              onClick: f[5] || (f[5] = () => {
                N.value.htmlContent = "";
              })
            }, {
              default: X(() => f[10] || (f[10] = [
                ye("Add htmlContent")
              ])),
              _: 1,
              __: [10]
            })),
            N.value.hasOwnProperty("textContent") ? (Q(), te(p, {
              key: 2,
              color: "red",
              onClick: f[6] || (f[6] = () => {
                delete N.value.textContent;
              })
            }, {
              default: X(() => f[11] || (f[11] = [
                ye("Delete textContent")
              ])),
              _: 1,
              __: [11]
            })) : (Q(), te(p, {
              key: 3,
              color: "green",
              onClick: f[7] || (f[7] = () => {
                N.value.textContent = "";
              })
            }, {
              default: X(() => f[12] || (f[12] = [
                ye("Add textContent")
              ])),
              _: 1,
              __: [12]
            })),
            ee(p, {
              color: "green",
              onClick: S
            }, {
              default: X(() => f[13] || (f[13] = [
                ye("Add New Prop")
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
}, Nn = /* @__PURE__ */ et(Dn, [["__scopeId", "data-v-aa3cbf01"]]), Wn = {
  __name: "ComponentElementEdit",
  props: /* @__PURE__ */ Pe({
    data: {
      type: Object,
      required: !0
    }
  }, {
    dialog: {},
    dialogModifiers: {}
  }),
  emits: /* @__PURE__ */ Pe(["dataSaved"], ["update:dialog"]),
  setup(E, { emit: N }) {
    const M = E, S = ne(M.data), R = qe(E, "dialog"), f = ne("");
    Ue(R, (p) => {
      var s;
      p && M.data.hasOwnProperty("component") ? (f.value = (s = M.data) == null ? void 0 : s.component, S.value = JSON.parse(JSON.stringify(M.data))) : p && M.data.hasOwnProperty("name") && (f.value = "slot", S.value = JSON.parse(JSON.stringify(M.data)));
    });
    const v = () => {
      R.value = !1, f.value = "", S.value = {};
    };
    return (p, s) => {
      const l = ae("v-card-text"), e = ae("v-spacer"), n = ae("v-btn"), i = ae("v-card-actions"), r = ae("v-icon"), t = ae("v-card"), o = ae("v-dialog");
      return Q(), te(o, {
        modelValue: R.value,
        "onUpdate:modelValue": s[2] || (s[2] = (a) => R.value = a),
        "max-width": "800px",
        "retain-focus": !1
      }, {
        default: X(() => [
          ee(t, {
            title: "Editing: " + f.value
          }, {
            append: X(() => [
              ee(n, {
                class: "close-btn",
                variant: "text",
                onClick: v
              }, {
                default: X(() => [
                  ee(r, null, {
                    default: X(() => s[5] || (s[5] = [
                      ye("fa-solid fa-xmark")
                    ])),
                    _: 1,
                    __: [5]
                  })
                ]),
                _: 1
              })
            ]),
            default: X(() => [
              f.value != "" ? (Q(), te(l, { key: 0 }, {
                default: X(() => [
                  ee(Nn, {
                    modelValue: S.value,
                    "onUpdate:modelValue": s[0] || (s[0] = (a) => S.value = a),
                    is_component: f.value != "slot"
                  }, null, 8, ["modelValue", "is_component"])
                ]),
                _: 1
              })) : oe("", !0),
              ee(i, null, {
                default: X(() => [
                  ee(e),
                  ee(n, {
                    color: "red",
                    onClick: v
                  }, {
                    default: X(() => s[3] || (s[3] = [
                      ye("Cancel")
                    ])),
                    _: 1,
                    __: [3]
                  }),
                  ee(n, {
                    color: "green",
                    onClick: s[1] || (s[1] = (a) => p.$emit("dataSaved", S.value))
                  }, {
                    default: X(() => s[4] || (s[4] = [
                      ye("Save")
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
}, Fn = /* @__PURE__ */ et(Wn, [["__scopeId", "data-v-18173f8b"]]), Kt = [
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
function Yt(E) {
  const N = we("componentClipboard");
  return {
    removeElement: (f) => {
      const v = [...E.value], p = f.slice(0, -1).reduce((s, l) => s[l], v);
      if (p) {
        const s = f[f.length - 1];
        p.splice(s, 1);
      }
      E.value = v;
    },
    pasteElement: (f, v) => {
      if (!N.hasContent()) return;
      const p = [...E.value], s = JSON.parse(JSON.stringify(N.element));
      switch (v) {
        case "prepend":
          p.splice(f[f.length - 1], 0, s);
          break;
        case "append":
          p.splice(f[f.length - 1] + 1, 0, s);
          break;
        case "child":
          const l = f.reduce((e, n) => e[n], p);
          l.children || (l.children = []), l.children.push(s);
          break;
      }
      E.value = p, N.isCut && N.clear();
    },
    insertElement: (f, v) => {
      const p = [...E.value], s = f.reduce((l, e) => l[e], p);
      s.children || (s.children = []), s.children.push(v), E.value = p;
    }
  };
}
function Qt(E, N) {
  return {
    label: "Insert",
    children: Kt.map((M) => ({
      label: M.title,
      onClick: () => E(N, { ...M })
    }))
  };
}
const Hn = { class: "tree-node" }, Bn = {
  key: 1,
  class: "node-content"
}, Pn = {
  key: 0,
  class: "children"
}, zn = { key: 0 }, Un = {
  key: 1,
  class: "slots"
}, Vn = ["onContextmenu"], jn = {
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
  setup(E, { expose: N, emit: M }) {
    const S = E, R = M, f = ne(!0);
    function v() {
      f.value = !f.value;
    }
    N({
      isExpanded: f,
      treeNodes: ne([])
    });
    function p(a, c) {
      a.preventDefault(), R("openEdit", { event: a, element: c, path: [] });
    }
    function s(a, c) {
      const u = ["children", c, ...a.path];
      R("openEdit", {
        event: a.event,
        element: a.element,
        path: u
      });
    }
    function l(a, c, u) {
      a.preventDefault(), R("openEdit", { event: a, element: c, path: ["slots", u] });
    }
    const e = De(() => Object.prototype.toString.call(S.node) === "[object Object]"), n = De(() => e.value && S.node.component ? S.node.component : S.label), i = De(() => {
      if (e.value) {
        if (S.node.textContent) return S.node.textContent;
        if (S.node.htmlContent) return "[HTML content]";
      }
      return "";
    }), r = De(
      () => e.value && Array.isArray(S.node.children) && S.node.children.length > 0
    ), t = De(
      () => e.value && Array.isArray(S.node.slots) && S.node.slots.length > 0
    ), o = De(() => r.value || t.value);
    return (a, c) => (Q(), se("div", Hn, [
      ge("div", {
        class: "node-label",
        onContextmenu: c[0] || (c[0] = nt((u) => p(u, S.node), ["stop"]))
      }, [
        o.value ? (Q(), se("span", {
          key: 0,
          class: "expand-icon",
          onClick: v
        }, [
          ge("i", {
            class: Ie(f.value ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-right")
          }, null, 2)
        ])) : oe("", !0),
        ye(" " + Re(n.value) + " ", 1),
        i.value ? (Q(), se("span", Bn, " - " + Re(i.value), 1)) : oe("", !0)
      ], 32),
      o.value && f.value ? (Q(), se("div", Pn, [
        r.value ? (Q(), se("div", zn, [
          (Q(!0), se(Ae, null, Oe(S.node.children, (u, w) => (Q(), te(Zt, {
            key: "child-" + w,
            node: u,
            label: u.component || "[" + w + "]",
            onOpenEdit: (y) => s(y, w),
            ref_for: !0,
            ref: "treeNodes"
          }, null, 8, ["node", "label", "onOpenEdit"]))), 128))
        ])) : oe("", !0),
        t.value ? (Q(), se("div", Un, [
          (Q(!0), se(Ae, null, Oe(S.node.slots, (u, w) => (Q(), se("div", {
            key: "slot-" + w,
            class: "slot-label",
            onContextmenu: nt((y) => l(y, u, w), ["stop"])
          }, " Slot: " + Re(u.name), 41, Vn))), 128))
        ])) : oe("", !0)
      ])) : oe("", !0)
    ]));
  }
}, Zt = /* @__PURE__ */ et(jn, [["__scopeId", "data-v-aaf0fd33"]]);
let Ne = null;
function Gn() {
  return Ne !== null;
}
function Kn(E) {
  Ne && Xt(), Ne = E;
}
function kt(E) {
  E === Ne && (Ne = null);
}
function Xt() {
  Ne && (Ne.closeMenu(), Ne = null);
}
const Me = {
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
function Ze(E, N) {
  let M = E.offsetTop;
  return E.offsetParent != null && E.offsetParent != N && (M -= E.offsetParent.scrollTop, M += Ze(E.offsetParent, N)), M;
}
function Xe(E, N) {
  let M = E.offsetLeft;
  return E.offsetParent != null && E.offsetParent != N && (M -= E.offsetParent.scrollLeft, M += Xe(E.offsetParent, N)), M;
}
function Yn(E, N, M, S) {
  return {
    x: Xe(E, S) + N,
    y: Ze(E, S) + M
  };
}
const ut = "mx-menu-default-container", Qn = "mx-menu-container-";
let Zn = 0;
function Jt(E) {
  const { getContainer: N, zIndex: M } = E;
  if (N) {
    const R = typeof N == "function" ? N() : N;
    if (R) {
      let f = R.getAttribute("id");
      return f || (f = Qn + Zn++, R.setAttribute("id", f)), {
        eleId: f,
        container: R,
        isNew: !1
      };
    }
  }
  let S = document.getElementById(ut);
  return S || (S = document.createElement("div"), S.setAttribute("id", ut), S.setAttribute("class", "mx-menu-ghost-host fullscreen"), document.body.appendChild(S)), S.style.zIndex = (M == null ? void 0 : M.toString()) || Me.defaultZindex.toString(), {
    eleId: ut,
    container: S,
    isNew: !0
  };
}
function Lt(E) {
  return typeof E == "number" ? `${E}px` : E;
}
const ke = Ee({
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
  setup(E) {
    const { vnode: N, data: M } = Be(E);
    return () => typeof N.value == "function" ? N.value(M.value) : N.value;
  }
});
function Xn(E, N) {
  const M = { ...E };
  return delete M[N], M;
}
var Jn = Object.defineProperty, qn = (E, N, M) => N in E ? Jn(E, N, { enumerable: !0, configurable: !0, writable: !0, value: M }) : E[N] = M, _t = (E, N, M) => qn(E, typeof N != "symbol" ? N + "" : N, M);
class Et {
  constructor(N, M) {
    _t(this, "x", 0), _t(this, "y", 0), this.x = N || 0, this.y = M || 0;
  }
  set(N, M) {
    this.x = N, this.y = M;
  }
  substract(N) {
    this.x -= N.x, this.y -= N.y;
  }
}
function Tt(E) {
  const { onDown: N, onMove: M, onUp: S } = E, R = new Et(), f = new Et();
  let v;
  function p(l) {
    l.stopPropagation(), f.set(l.x, l.y), f.substract(R), M(R, f, l, v);
  }
  function s(l) {
    S(l, v), R.set(0, 0), document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", s);
  }
  return (l, e) => N(l, e) ? (v = e, R.set(l.x, l.y), document.addEventListener("mousemove", p), document.addEventListener("mouseup", s), l.stopPropagation(), !0) : !1;
}
function ei(E, N) {
  let M = 0;
  return {
    start() {
      M > 0 && clearInterval(M), M = setInterval(() => {
        M = 0, N();
      }, E);
    },
    stop() {
      M > 0 && (clearInterval(M), M = 0);
    }
  };
}
const Qe = [], Rt = ei(100, () => {
  for (const E of Qe)
    E();
});
function ti(E, N, M, S) {
  let R = 0, f = 0;
  function v() {
    E.value && (N && R !== E.value.offsetWidth && N(E.value.offsetWidth), M && f !== E.value.offsetHeight && M(E.value.offsetHeight), R = E.value.offsetWidth, f = E.value.offsetHeight);
  }
  return {
    startResizeChecker() {
      Rt.start(), Qe.push(v);
    },
    stopResizeChecker() {
      const p = Qe.indexOf(v);
      p >= 0 && Qe.splice(p, 1), Qe.length === 0 && Rt.stop();
    }
  };
}
const It = 140, ni = 70, ii = /* @__PURE__ */ Ee({
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
  setup(E, { expose: N, emit: M }) {
    const S = E, R = M, f = ne(), v = ne(), p = ne(), s = ne(), l = ne(), e = ne(), n = ne(!1), i = De(() => S.scroll === "horizontal" || S.scroll === "both"), r = De(() => S.scroll === "vertical" || S.scroll === "both"), t = $t({
      show: !1,
      size: 0,
      sizeRaw: 0,
      pos: 0
    }), o = $t({
      show: !1,
      size: 0,
      sizeRaw: 0,
      pos: 0
    });
    let a = 0, c = 0, u = 0, w = 0, y = null;
    const m = { attributes: !0, childList: !0 };
    function h() {
      if (f.value) {
        if (t.show) {
          const F = f.value.offsetWidth / f.value.scrollWidth;
          t.sizeRaw = F * f.value.offsetWidth, t.size = F * 100, t.pos = f.value.scrollLeft / (f.value.scrollWidth - f.value.offsetWidth) * (100 - t.size), F >= 1 && (t.show = !1);
        }
        if (o.show) {
          const F = f.value.offsetHeight / f.value.scrollHeight;
          o.sizeRaw = F * f.value.offsetHeight, o.size = F * 100, o.pos = f.value.scrollTop / (f.value.scrollHeight - f.value.offsetHeight) * (100 - o.size), F >= 1 && (o.show = !1);
        }
        R("scroll", f.value.scrollLeft, f.value.scrollTop);
      }
    }
    function $(F = !1) {
      if (!f.value)
        return;
      let z = i.value, U = r.value;
      const j = z && (a !== f.value.scrollWidth || u !== f.value.offsetWidth), Y = r && (c !== f.value.scrollHeight || w !== f.value.offsetHeight);
      if (!F && !j && !Y)
        return;
      const G = window.getComputedStyle(f.value);
      (G.overflow === "hidden" || G.overflowX === "hidden") && (z = !1), (G.overflow === "hidden" || G.overflowY === "hidden") && (U = !1), t.show = z, o.show = U, h(), u = f.value.offsetWidth, w = f.value.offsetHeight, a = f.value.scrollWidth, c = f.value.scrollHeight, R("resized", a, c);
    }
    function _(F) {
      var z;
      S.scroll == "horizontal" && (F.deltaMode == 0 && ((z = f.value) == null || z.scrollTo({
        left: f.value.scrollLeft + (F.deltaY > 0 ? It : -140),
        behavior: "smooth"
      })), F.preventDefault(), F.stopPropagation());
    }
    function L(F) {
      var z;
      F.deltaMode == 0 && ((z = f.value) == null || z.scrollTo({
        left: f.value.scrollLeft + (F.deltaY > 0 ? It : -140),
        behavior: "smooth"
      }), F.preventDefault(), F.stopPropagation());
    }
    function x(F) {
      var z;
      F.deltaMode == 0 && ((z = f.value) == null || z.scrollTo({
        top: f.value.scrollTop + (F.deltaY > 0 ? ni : -70),
        behavior: "smooth"
      }), F.preventDefault(), F.stopPropagation());
    }
    let D = 0, A = 0, C = 0, g = 0;
    const d = Tt({
      onDown(F) {
        return !p.value || !l.value ? !1 : (D = F.offsetX, A = F.x - F.offsetX - l.value.offsetLeft, F.preventDefault(), n.value = !0, !0);
      },
      onMove(F, z, U) {
        f.value && p.value && (T(U.x - D - A), U.preventDefault(), U.stopPropagation());
      },
      onUp() {
        n.value = !1;
      }
    }), b = Tt({
      onDown(F) {
        return !s.value || !e.value ? !1 : (C = F.offsetY, g = F.y - F.offsetY - e.value.offsetTop, F.preventDefault(), n.value = !0, !0);
      },
      onMove(F, z, U) {
        f.value && s.value && (O(U.y - C - g), U.preventDefault(), U.stopPropagation());
      },
      onUp() {
        n.value = !1;
      }
    });
    function k(F) {
      f.value && (f.value.scrollLeft = F / 100 * (f.value.scrollWidth - f.value.offsetWidth));
    }
    function I(F) {
      f.value && (f.value.scrollLeft = F / 100 * (f.value.scrollHeight - f.value.offsetHeight));
    }
    function T(F) {
      f.value && (f.value.scrollLeft = F / (f.value.offsetWidth - t.sizeRaw) * (f.value.scrollWidth - f.value.offsetWidth));
    }
    function O(F) {
      f.value && (f.value.scrollTop = F / (f.value.offsetHeight - o.sizeRaw) * (f.value.scrollHeight - f.value.offsetHeight));
    }
    function W(F) {
      S.scrollBarBackgroundClickable && T(F.offsetX - t.sizeRaw / 2);
    }
    function H(F) {
      S.scrollBarBackgroundClickable && O(F.offsetY - o.sizeRaw / 2);
    }
    const {
      startResizeChecker: B,
      stopResizeChecker: P
    } = ti(
      f,
      () => $(),
      () => $()
    );
    return je(() => {
      Fe(() => {
        setTimeout(() => $(!0), 200), $(!0), B(), y = new MutationObserver(() => $()), y.observe(f.value, m);
      });
    }), Ge(() => {
      P(), y && (y.disconnect(), y = null);
    }), N({
      refreshScrollState() {
        $(!0);
      },
      getScrollContainer() {
        return f.value;
      },
      scrollTo(F, z) {
        var U;
        (U = f.value) == null || U.scrollTo(F, z);
      },
      scrollToTop() {
        var F;
        (F = f.value) == null || F.scrollTo(0, 0);
      },
      scrollToBottom() {
        var F;
        (F = f.value) == null || F.scrollTo(f.value.scrollWidth, f.value.scrollHeight);
      }
    }), (F, z) => (Q(), se("div", {
      ref_key: "scrollrect",
      ref: v,
      class: Ie([
        "vue-scroll-rect",
        E.scrollBarAlwaysShow ? "always-show-scrollbar" : "",
        E.scrollBarBackgroundClickable ? "background-clickable" : "",
        n.value ? "dragging" : ""
      ]),
      style: Ye({
        width: E.width ? `${E.width}px` : void 0,
        height: E.height ? `${E.height}px` : void 0
      }),
      onWheel: _
    }, [
      ge("div", {
        ref_key: "container",
        ref: f,
        class: Ie(["scroll-content", E.scroll, E.containerClass]),
        style: Ye({
          maxWidth: E.maxWidth ? `${E.maxWidth}px` : void 0,
          maxHeight: E.maxHeight ? `${E.maxHeight}px` : void 0,
          ...E.containerStyle
        }),
        onScroll: h
      }, [
        be(F.$slots, "default")
      ], 38),
      t.show ? be(F.$slots, "scrollBarX", {
        key: 0,
        scrollBarValue: t,
        onScroll: k
      }, () => [
        ge("div", {
          ref_key: "scrollBarRefX",
          ref: p,
          class: "scrollbar horizontal",
          onClick: W,
          onWheel: L
        }, [
          ge("div", {
            class: "thumb",
            ref_key: "scrollBarThumbRefX",
            ref: l,
            style: Ye({ left: `${t.pos}%`, width: `${t.size}%` }),
            onMousedown: z[0] || (z[0] = //@ts-ignore
            (...U) => K(d) && K(d)(...U)),
            onWheel: L
          }, null, 36)
        ], 544)
      ]) : oe("", !0),
      o.show ? be(F.$slots, "scrollBarY", {
        key: 1,
        scrollBarValue: o,
        onScroll: I
      }, () => [
        o.show ? (Q(), se("div", {
          key: 0,
          ref_key: "scrollBarRefY",
          ref: s,
          class: "scrollbar vertical",
          onClick: H,
          onWheel: x
        }, [
          ge("div", {
            class: "thumb",
            ref_key: "scrollBarThumbRefY",
            ref: e,
            style: Ye({ top: `${o.pos}%`, height: `${o.size}%` }),
            onMousedown: z[1] || (z[1] = //@ts-ignore
            (...U) => K(b) && K(b)(...U)),
            onWheel: x
          }, null, 36)
        ], 544)) : oe("", !0)
      ]) : oe("", !0)
    ], 38));
  }
}), yt = (E, N) => {
  const M = E.__vccOpts || E;
  for (const [S, R] of N)
    M[S] = R;
  return M;
}, ri = {}, oi = {
  class: "mx-checked-mark",
  "aria-hidden": "true",
  viewBox: "0 0 1024 1024"
}, si = /* @__PURE__ */ ge("path", { d: "M129.3,428.6L52,512l345,372.5l575-620.8l-69.5-75L400.4,718.2L129.3,428.6z" }, null, -1), ai = [
  si
];
function li(E, N) {
  return Q(), se("svg", oi, ai);
}
const ci = /* @__PURE__ */ yt(ri, [["render", li]]), ui = {}, hi = {
  class: "mx-right-arrow",
  "aria-hidden": "true",
  viewBox: "0 0 1024 1024"
}, di = /* @__PURE__ */ ge("path", { d: "M307.018 49.445c11.517 0 23.032 4.394 31.819 13.18L756.404 480.18c8.439 8.438 13.181 19.885 13.181 31.82s-4.741 23.38-13.181 31.82L338.838 961.376c-17.574 17.573-46.065 17.573-63.64-0.001-17.573-17.573-17.573-46.065 0.001-63.64L660.944 512 275.198 126.265c-17.574-17.573-17.574-46.066-0.001-63.64C283.985 53.839 295.501 49.445 307.018 49.445z" }, null, -1), fi = [
  di
];
function pi(E, N) {
  return Q(), se("svg", hi, fi);
}
const gi = /* @__PURE__ */ yt(ui, [["render", pi]]), vi = { class: "mx-item-row" }, mi = ["xlink:href"], yi = {
  key: 1,
  class: "label"
}, wi = { class: "mx-item-row" }, bi = { class: "mx-shortcut" }, wt = /* @__PURE__ */ Ee({
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
  setup(E, { expose: N, emit: M }) {
    const S = E, R = M, {
      clickHandler: f,
      clickClose: v,
      clickableWhenHasChildren: p,
      disabled: s,
      hidden: l,
      label: e,
      icon: n,
      iconFontClass: i,
      showRightArrow: r,
      shortcut: t,
      hasChildren: o
    } = Be(S), a = ne(!1), c = ne(!1), u = ne(), w = we("globalOptions"), y = we("globalHasSlot"), m = we("globalRenderSlot"), h = we("globalCloseMenu"), $ = we("menuContext"), _ = {
      getSubMenuInstance: () => {
      },
      showSubMenu: () => a.value ? ($.markActiveMenuItem(_, !0), !0) : o.value ? (x(), !0) : !1,
      hideSubMenu: () => {
        $.closeOtherSubMenu();
      },
      isDisabledOrHidden: () => s.value || l.value,
      getElement: () => u.value,
      focus: () => c.value = !0,
      blur: () => c.value = !1,
      click: L
    };
    Le("menuItemInstance", _), je(() => {
      $.isMenuItemDataCollectedFlag() ? Fe(() => {
        let C = 0;
        const g = $.getElement();
        if (g) {
          let d = 0;
          for (let b = 0; b < g.children.length; b++) {
            const k = g.children[b];
            if (k.getAttribute("data-type") === "ContextMenuItem") {
              if (k === u.value) {
                C = d;
                break;
              }
              d++;
            }
          }
        }
        $.addChildMenuItem(_, C);
      }) : $.addChildMenuItem(_);
    }), Ge(() => {
      $.removeChildMenuItem(_);
    });
    function L(C) {
      if (!s.value) {
        if (C) {
          const g = C.target;
          if (g.classList.contains("mx-context-no-clickable") || w.value.ignoreClickClassName && g.classList.contains(w.value.ignoreClickClassName))
            return;
          if (w.value.clickCloseClassName && g.classList.contains(w.value.clickCloseClassName)) {
            C.stopPropagation(), h(S.rawMenuItem);
            return;
          }
        }
        o.value ? p.value ? (typeof f.value == "function" && f.value(C), R("click", C)) : a.value || x() : (typeof f.value == "function" && f.value(C), R("click", C), v.value && h(S.rawMenuItem));
      }
    }
    function x(C) {
      c.value = !1, $.checkCloseOtherSubMenuTimeOut() || $.closeOtherSubMenu(), s.value || ($.markActiveMenuItem(_), o.value && (C || $.markThisOpenedByKeyBoard(), $.addOpenedSubMenu(D), a.value = !0, Fe(() => R("subMenuOpen", _))));
    }
    function D() {
      c.value = !1, a.value = !1, R("subMenuClose", _);
    }
    function A() {
      return {
        disabled: s.value,
        label: e.value,
        icon: n.value,
        iconFontClass: i.value,
        showRightArrow: r.value,
        clickClose: v.value,
        clickableWhenHasChildren: p.value,
        shortcut: t.value,
        theme: w.value.theme,
        isOpen: a,
        hasChildren: o,
        onClick: L,
        onMouseEnter: x,
        closeMenu: h
      };
    }
    return N(_), (C, g) => K(l) ? oe("", !0) : (Q(), se("div", {
      key: 0,
      class: "mx-context-menu-item-wrapper",
      ref_key: "menuItemRef",
      ref: u,
      "data-type": "ContextMenuItem"
    }, [
      K(y)("itemRender") ? (Q(), te(K(ke), {
        key: 0,
        vnode: () => K(m)("itemRender", A())
      }, null, 8, ["vnode"])) : E.customRender ? (Q(), te(K(ke), {
        key: 1,
        vnode: E.customRender,
        data: A()
      }, null, 8, ["vnode", "data"])) : (Q(), se("div", {
        key: 2,
        class: Ie([
          "mx-context-menu-item",
          K(s) ? "disabled" : "",
          c.value ? "keyboard-focus" : "",
          E.customClass ? " " + E.customClass : "",
          a.value ? "open" : ""
        ]),
        onClick: L,
        onMouseenter: x
      }, [
        be(C.$slots, "default", {}, () => [
          ge("div", vi, [
            ge("div", {
              class: Ie([
                "mx-icon-placeholder",
                E.preserveIconWidth ? "preserve-width" : ""
              ])
            }, [
              be(C.$slots, "icon", {}, () => [
                K(y)("itemIconRender") ? (Q(), te(K(ke), {
                  key: 0,
                  vnode: () => K(m)("itemIconRender", A())
                }, null, 8, ["vnode"])) : typeof E.svgIcon == "string" && E.svgIcon ? (Q(), se("svg", ze({
                  key: 1,
                  class: "icon svg"
                }, E.svgProps), [
                  ge("use", { "xlink:href": E.svgIcon }, null, 8, mi)
                ], 16)) : typeof K(n) != "string" ? (Q(), te(K(ke), {
                  key: 2,
                  vnode: K(n),
                  data: K(n)
                }, null, 8, ["vnode", "data"])) : typeof K(n) == "string" && K(n) !== "" ? (Q(), se("i", {
                  key: 3,
                  class: Ie(K(n) + " icon " + K(i) + " " + K(w).iconFontClass)
                }, null, 2)) : oe("", !0)
              ]),
              E.checked ? be(C.$slots, "check", { key: 0 }, () => [
                K(y)("itemCheckRender") ? (Q(), te(K(ke), {
                  key: 0,
                  vnode: () => K(m)("itemCheckRender", A())
                }, null, 8, ["vnode"])) : oe("", !0),
                ee(ci)
              ]) : oe("", !0)
            ], 2),
            be(C.$slots, "label", {}, () => [
              K(y)("itemLabelRender") ? (Q(), te(K(ke), {
                key: 0,
                vnode: () => K(m)("itemLabelRender", A())
              }, null, 8, ["vnode"])) : typeof K(e) == "string" ? (Q(), se("span", yi, Re(K(e)), 1)) : (Q(), te(K(ke), {
                key: 2,
                vnode: K(e),
                data: K(e)
              }, null, 8, ["vnode", "data"]))
            ])
          ]),
          ge("div", wi, [
            K(t) || C.$slots.shortcut ? be(C.$slots, "shortcut", { key: 0 }, () => [
              K(y)("itemShortcutRender") ? (Q(), te(K(ke), {
                key: 0,
                vnode: () => K(m)("itemShortcutRender", A())
              }, null, 8, ["vnode"])) : oe("", !0),
              ge("span", bi, Re(K(t)), 1)
            ]) : oe("", !0),
            K(r) ? be(C.$slots, "rightArrow", { key: 1 }, () => [
              K(y)("itemRightArrowRender") ? (Q(), te(K(ke), {
                key: 0,
                vnode: () => K(m)("itemRightArrowRender", A())
              }, null, 8, ["vnode"])) : oe("", !0),
              ee(gi)
            ]) : oe("", !0)
          ])
        ])
      ], 34)),
      K(w).menuTransitionProps ? (Q(), te(zt, Ut(ze({ key: 3 }, K(w).menuTransitionProps)), {
        default: X(() => [
          a.value ? be(C.$slots, "submenu", {
            key: 0,
            context: _
          }) : oe("", !0)
        ]),
        _: 3
      }, 16)) : a.value ? be(C.$slots, "submenu", {
        key: 4,
        context: _
      }) : oe("", !0)
    ], 512));
  }
}), Ci = Ee({
  name: "ContextMenuSperator",
  components: {
    VNodeRender: ke
  },
  setup() {
    const E = we("globalHasSlot"), N = we("globalRenderSlot");
    return {
      globalHasSlot: E,
      globalRenderSlot: N
    };
  }
}), $i = {
  key: 1,
  class: "mx-context-menu-item-sperator mx-context-no-clickable"
};
function Si(E, N, M, S, R, f) {
  const v = ae("VNodeRender");
  return E.globalHasSlot("separatorRender") ? (Q(), te(v, {
    key: 0,
    vnode: () => E.globalRenderSlot("separatorRender", {})
  }, null, 8, ["vnode"])) : (Q(), se("div", $i));
}
const Je = /* @__PURE__ */ yt(Ci, [["render", Si]]), it = /* @__PURE__ */ Ee({
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
  setup(E, { expose: N }) {
    const M = E, S = ne(!1), R = we("globalGetMenuHostId", ""), f = we("menuContext"), v = we("globalOptions");
    we("globalHasSlot"), we("globalRenderSlot");
    const { zIndex: p, getParentWidth: s, getParentHeight: l, getZoom: e } = f, { adjustPosition: n } = Be(M), i = ne(), r = ne(), t = ne(), o = [], a = we("globalSetCurrentSubMenu"), c = [];
    let u = null, w = 0;
    function y() {
      u && u.blur();
    }
    function m(T, O) {
      if (T) {
        for (let W = O !== void 0 ? O : 0; W < c.length; W++)
          if (!c[W].isDisabledOrHidden()) {
            h(W);
            break;
          }
      } else
        for (let W = O !== void 0 ? O : c.length - 1; W >= 0; W--)
          if (!c[W].isDisabledOrHidden()) {
            h(W);
            break;
          }
    }
    function h(T) {
      var O;
      if (u && y(), T !== void 0 && (u = c[Math.max(0, Math.min(T, c.length - 1))]), !u)
        return;
      u.focus();
      const W = u.getElement();
      W && ((O = i.value) == null || O.scrollTo(0, Math.min(Math.max(-g.value, -W.offsetTop - W.offsetHeight + d.value), 0)));
    }
    function $() {
      a(_);
    }
    const _ = {
      isTopLevel: () => f.getParentContext() === null,
      closeSelfAndActiveParent: () => {
        const T = D.getParentContext();
        if (T) {
          T.closeOtherSubMenu();
          const O = T.getSubMenuInstanceContext();
          if (O)
            return O.focusCurrentItem(), !0;
        }
        return !1;
      },
      closeCurrentSubMenu: () => {
        var T;
        return (T = D.getParentContext()) == null ? void 0 : T.closeOtherSubMenu();
      },
      moveCurrentItemFirst: () => m(!0),
      moveCurrentItemLast: () => m(!1),
      moveCurrentItemDown: () => m(!0, u ? c.indexOf(u) + 1 : 0),
      moveCurrentItemUp: () => m(!1, u ? c.indexOf(u) - 1 : 0),
      focusCurrentItem: () => h(),
      openCurrentItemSubMenu: () => u ? u == null ? void 0 : u.showSubMenu() : !1,
      triggerCurrentItemClick: (T) => u == null ? void 0 : u.click(T)
    };
    let L = !1, x = !1;
    const D = {
      zIndex: p + 1,
      container: f.container,
      adjustPadding: v.value.adjustPadding || Me.defaultAdjustPadding,
      getParentWidth: () => {
        var T;
        return ((T = t.value) == null ? void 0 : T.offsetWidth) || 0;
      },
      getParentHeight: () => {
        var T;
        return ((T = t.value) == null ? void 0 : T.offsetHeight) || 0;
      },
      getPositon: () => [k.value.x, k.value.y],
      getZoom: () => v.value.zoom || Me.defaultZoom,
      addOpenedSubMenu(T) {
        o.push(T);
      },
      closeOtherSubMenu() {
        o.forEach((T) => T()), o.splice(0, o.length), a(_);
      },
      checkCloseOtherSubMenuTimeOut() {
        return w ? (clearTimeout(w), w = 0, !0) : !1;
      },
      closeOtherSubMenuWithTimeOut() {
        w = setTimeout(() => {
          w = 0, this.closeOtherSubMenu();
        }, 200);
      },
      addChildMenuItem: (T, O) => {
        O === void 0 ? c.push(T) : c.splice(O, 0, T);
      },
      removeChildMenuItem: (T) => {
        c.splice(c.indexOf(T), 1), T.getSubMenuInstance = () => {
        };
      },
      markActiveMenuItem: (T, O = !1) => {
        y(), u = T, O && h();
      },
      markThisOpenedByKeyBoard: () => {
        L = !0;
      },
      isOpenedByKeyBoardFlag: () => L ? (L = !1, !0) : !1,
      isMenuItemDataCollectedFlag: () => x,
      getElement: () => t.value || null,
      getParentContext: () => f,
      getSubMenuInstanceContext: () => _
    };
    Le("menuContext", D);
    const A = {
      getChildItem: (T) => c[T],
      getMenuDimensions: () => r.value ? {
        width: r.value.offsetWidth,
        height: r.value.offsetHeight
      } : { width: 0, height: 0 },
      getSubmenuRoot: () => r.value,
      getMenu: () => t.value,
      getScrollValue: () => {
        var T, O;
        return ((O = (T = i.value) == null ? void 0 : T.getScrollContainer()) == null ? void 0 : O.scrollTop) || 0;
      },
      setScrollValue: (T) => {
        var O;
        return (O = i.value) == null ? void 0 : O.scrollTo(0, T);
      },
      getScrollHeight: () => g.value,
      adjustPosition: () => {
        I();
      },
      getMaxHeight: () => d.value,
      getPosition: () => k.value,
      setPosition: (T, O) => {
        k.value.x = T, k.value.y = O;
      }
    }, C = we("menuItemInstance", void 0);
    C && (C.getSubMenuInstance = () => A);
    const g = ne(0), d = ne(0), b = ne(!1), k = ne({ x: 0, y: 0 });
    function I() {
      Fe(() => {
        const T = t.value, O = r.value;
        if (T && O && i.value) {
          const { container: W } = f, H = (s == null ? void 0 : s()) ?? 0, B = (l == null ? void 0 : l()) ?? 0, P = getComputedStyle(O), F = parseFloat(P.paddingLeft), z = parseFloat(P.paddingTop), U = B > 0 ? z : 0, j = document.documentElement.scrollHeight / e(), Y = document.documentElement.scrollWidth / e(), G = Math.min(Y, W.offsetWidth), J = Math.min(j, W.offsetHeight);
          let ie = Xe(T, W), he = Ze(T, W);
          M.direction.includes("l") ? k.value.x -= T.offsetWidth + F : M.direction.includes("r") ? k.value.x += H + F : (k.value.x += H / 2, k.value.x -= (T.offsetWidth + F) / 2), M.direction.includes("t") ? k.value.y -= (T.offsetHeight + z * 2) / e() : M.direction.includes("b") ? k.value.y -= z / e() : k.value.y -= (T.offsetHeight + z) / 2 / e(), Fe(() => {
            var ve, ue;
            ie = Xe(T, W), he = Ze(T, W), g.value = Math.min(
              M.maxHeight || 1e5,
              ((ue = (ve = i.value) == null ? void 0 : ve.getScrollContainer()) == null ? void 0 : ue.scrollHeight) || 0
            );
            const Ce = ie + T.offsetWidth - G, xe = he + g.value + U * 2 - J;
            if (b.value = xe > 0, n.value && Ce > 0) {
              const Se = H + T.offsetWidth - F, Te = ie;
              Se > Te ? k.value.x -= Te : k.value.x -= Se;
            }
            if (b.value) {
              if (n.value) {
                const Se = xe, Te = he;
                Se > Te ? k.value.y -= Te - U : k.value.y -= Se - U;
              }
              d.value = J - (k.value.y + z);
            } else
              d.value = 0;
          });
        }
        T == null || T.focus({
          preventScroll: !0
        }), f.isOpenedByKeyBoardFlag() && m(!0), x = !0;
      });
    }
    return je(() => {
      var T;
      S.value = !0;
      const O = (T = M.parentMenuItemContext) == null ? void 0 : T.getElement();
      if (O) {
        const W = Xe(O, f.container), H = Ze(O, f.container);
        k.value.x = W, k.value.y = H;
      } else {
        const [W, H] = f.getPositon();
        k.value.x = W, k.value.y = H;
      }
      a(_), I();
    }), Ge(() => {
      S.value = !1, C && (C.getSubMenuInstance = () => {
      });
    }), N(A), (T, O) => {
      const W = ae("ContextSubMenu", !0);
      return S.value ? (Q(), te(Vt, {
        key: 0,
        to: `#${K(R)}`
      }, [
        ge("div", ze({
          ref_key: "submenuRoot",
          ref: r
        }, T.$attrs, {
          class: [
            "mx-context-menu",
            K(v).customClass ? K(v).customClass : "",
            K(v).theme ?? ""
          ],
          style: {
            maxWidth: E.maxWidth ? K(Lt)(E.maxWidth) : `${K(Me).defaultMaxWidth}px`,
            minWidth: E.minWidth ? K(Lt)(E.minWidth) : `${K(Me).defaultMinWidth}px`,
            zIndex: K(p),
            left: `${k.value.x}px`,
            top: `${k.value.y}px`
          },
          "data-type": "ContextSubMenu",
          onClick: $
        }), [
          ee(K(ii), {
            ref_key: "scrollRectRef",
            ref: i,
            scroll: "vertical",
            maxHeight: d.value,
            containerClass: "mx-context-menu-scroll"
          }, {
            default: X(() => [
              ge("div", {
                class: Ie(["mx-context-menu-items"]),
                ref_key: "menu",
                ref: t
              }, [
                be(T.$slots, "default", {}, () => [
                  (Q(!0), se(Ae, null, Oe(E.items, (H, B) => (Q(), se(Ae, { key: B }, [
                    H.hidden !== !0 && H.divided === "up" ? (Q(), te(Je, { key: 0 })) : oe("", !0),
                    H.hidden !== !0 && H.divided === "self" ? (Q(), te(Je, { key: 1 })) : (Q(), te(wt, {
                      key: 2,
                      clickHandler: H.onClick ? (P) => H.onClick(P) : void 0,
                      disabled: typeof H.disabled == "object" ? H.disabled.value : H.disabled,
                      hidden: typeof H.hidden == "object" ? H.hidden.value : H.hidden,
                      icon: H.icon,
                      iconFontClass: H.iconFontClass,
                      svgIcon: H.svgIcon,
                      svgProps: H.svgProps,
                      label: H.label,
                      customRender: H.customRender,
                      customClass: H.customClass,
                      checked: typeof H.checked == "object" ? H.checked.value : H.checked,
                      shortcut: H.shortcut,
                      clickClose: H.clickClose,
                      clickableWhenHasChildren: H.clickableWhenHasChildren,
                      preserveIconWidth: H.preserveIconWidth !== void 0 ? H.preserveIconWidth : K(v).preserveIconWidth,
                      showRightArrow: H.children && H.children.length > 0,
                      hasChildren: H.children && H.children.length > 0,
                      rawMenuItem: H,
                      onSubMenuOpen: (P) => {
                        var F;
                        return (F = H.onSubMenuOpen) == null ? void 0 : F.call(H, P);
                      },
                      onSubMenuClose: (P) => {
                        var F;
                        return (F = H.onSubMenuClose) == null ? void 0 : F.call(H, P);
                      }
                    }, mt({ _: 2 }, [
                      H.children && H.children.length > 0 ? {
                        name: "submenu",
                        fn: X(({ context: P }) => [
                          ee(W, {
                            parentMenuItemContext: P,
                            items: H.children,
                            maxWidth: H.maxWidth,
                            minWidth: H.minWidth,
                            maxHeight: H.maxHeight,
                            adjustPosition: H.adjustSubMenuPosition !== void 0 ? H.adjustSubMenuPosition : K(v).adjustPosition,
                            direction: H.direction !== void 0 ? H.direction : K(v).direction
                          }, null, 8, ["parentMenuItemContext", "items", "maxWidth", "minWidth", "maxHeight", "adjustPosition", "direction"])
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1032, ["clickHandler", "disabled", "hidden", "icon", "iconFontClass", "svgIcon", "svgProps", "label", "customRender", "customClass", "checked", "shortcut", "clickClose", "clickableWhenHasChildren", "preserveIconWidth", "showRightArrow", "hasChildren", "rawMenuItem", "onSubMenuOpen", "onSubMenuClose"])),
                    H.hidden !== !0 && (H.divided === "down" || H.divided === !0) ? (Q(), te(Je, { key: 3 })) : oe("", !0)
                  ], 64))), 128))
                ])
              ], 512)
            ]),
            _: 3
          }, 8, ["maxHeight"])
        ], 16)
      ], 8, ["to"])) : oe("", !0);
    };
  }
}), qt = /* @__PURE__ */ Ee({
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
  setup(E, { expose: N, emit: M }) {
    const S = E, R = M, f = jt(), v = ne(), {
      options: p,
      show: s,
      container: l
    } = Be(S);
    je(() => {
      s.value && i();
    }), Ge(() => {
      a();
    }), Ue(s, (h) => {
      h ? i() : (kt(e), a());
    });
    const e = {
      closeMenu: r,
      isClosed: t,
      getMenuRef: () => v.value,
      getMenuDimensions: () => {
        var h;
        return ((h = v.value) == null ? void 0 : h.getMenuDimensions()) ?? { width: 0, height: 0 };
      }
    };
    let n = !1;
    function i() {
      o(), Kn(e);
    }
    function r(h) {
      n = !0, R("close", h), p.value.menuTransitionProps || R("closeAnimFinished"), kt(e);
    }
    function t() {
      return n;
    }
    function o() {
      setTimeout(() => {
        document.addEventListener("click", y, !0), document.addEventListener("contextmenu", y, !0), document.addEventListener("scroll", w, !0), !S.isFullScreenContainer && l.value && l.value.addEventListener("scroll", w, !0), p.value.keyboardControl !== !1 && document.addEventListener("keydown", u, !0);
      }, 50);
    }
    function a() {
      document.removeEventListener("contextmenu", y, !0), document.removeEventListener("click", y, !0), document.removeEventListener("scroll", w, !0), !S.isFullScreenContainer && l.value && l.value.removeEventListener("scroll", w, !0), p.value.keyboardControl !== !1 && document.removeEventListener("keydown", u, !0);
    }
    const c = ne();
    Le("globalSetCurrentSubMenu", (h) => c.value = h), Le("globalGetMenuHostId", l.value.id);
    function u(h) {
      var $, _, L, x, D, A, C, g, d, b, k, I, T;
      let O = !0;
      switch (h.key) {
        case "Escape": {
          (($ = c.value) == null ? void 0 : $.isTopLevel()) === !1 ? (_ = c.value) == null || _.closeCurrentSubMenu() : r();
          break;
        }
        case "ArrowDown":
          (L = c.value) == null || L.moveCurrentItemDown();
          break;
        case "ArrowUp":
          (x = c.value) == null || x.moveCurrentItemUp();
          break;
        case "Home":
          (D = c.value) == null || D.moveCurrentItemFirst();
          break;
        case "End":
          (A = c.value) == null || A.moveCurrentItemLast();
          break;
        case "ArrowLeft": {
          (C = c.value) != null && C.closeSelfAndActiveParent() || (d = (g = p.value).onKeyFocusMoveLeft) == null || d.call(g);
          break;
        }
        case "ArrowRight":
          (b = c.value) != null && b.openCurrentItemSubMenu() || (I = (k = p.value).onKeyFocusMoveRight) == null || I.call(k);
          break;
        case "Enter":
          (T = c.value) == null || T.triggerCurrentItemClick(h);
          break;
        default:
          O = !1;
          break;
      }
      O && c.value && (h.stopPropagation(), h.preventDefault());
    }
    function w(h) {
      p.value.closeWhenScroll !== !1 && m(h.target, null);
    }
    function y(h) {
      m(h.target, h);
    }
    function m(h, $) {
      for (var _, L; h; ) {
        if (h.classList && h.classList.contains("mx-context-menu"))
          return;
        h = h.parentNode;
      }
      $ ? p.value.clickCloseOnOutside !== !1 ? (a(), r()) : (L = (_ = p.value).onClickOnOutside) == null || L.call(_, $) : (a(), r());
    }
    return Le("globalOptions", p), Le("globalCloseMenu", r), Le("globalIsFullScreenContainer", S.isFullScreenContainer), Le("globalHasSlot", (h) => f[h] !== void 0), Le("globalRenderSlot", (h, $) => be(f, h, { ...$ }, () => [He("span", "Render slot failed")], !1)), Le("menuContext", {
      zIndex: p.value.zIndex || Me.defaultZindex,
      container: l.value,
      adjustPadding: { x: 0, y: 0 },
      getZoom: () => p.value.zoom || Me.defaultZoom,
      getParentWidth: () => 0,
      getParentHeight: () => 0,
      getPositon: () => [p.value.x, p.value.y],
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
    }), N(e), (h, $) => K(p).menuTransitionProps ? (Q(), te(zt, ze({
      key: 0,
      appear: ""
    }, K(p).menuTransitionProps, {
      onAfterLeave: $[0] || ($[0] = (_) => R("closeAnimFinished"))
    }), {
      default: X(() => [
        K(s) ? (Q(), te(it, {
          key: 0,
          ref_key: "submenuInstance",
          ref: v,
          items: K(p).items,
          adjustPosition: K(p).adjustPosition,
          maxWidth: K(p).maxWidth || K(Me).defaultMaxWidth,
          minWidth: K(p).minWidth || K(Me).defaultMinWidth,
          maxHeight: K(p).maxHeight,
          direction: K(p).direction || K(Me).defaultDirection
        }, {
          default: X(() => [
            be(h.$slots, "default")
          ]),
          _: 3
        }, 8, ["items", "adjustPosition", "maxWidth", "minWidth", "maxHeight", "direction"])) : oe("", !0)
      ]),
      _: 3
    }, 16)) : K(s) ? (Q(), te(it, {
      key: 1,
      ref_key: "submenuInstance",
      ref: v,
      items: K(p).items,
      adjustPosition: K(p).adjustPosition,
      maxWidth: K(p).maxWidth || K(Me).defaultMaxWidth,
      minWidth: K(p).minWidth || K(Me).defaultMinWidth,
      maxHeight: K(p).maxHeight,
      direction: K(p).direction || K(Me).defaultDirection
    }, {
      default: X(() => [
        be(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["items", "adjustPosition", "maxWidth", "minWidth", "maxHeight", "direction"])) : oe("", !0);
  }
}), Mi = /* @__PURE__ */ Ee({
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
  setup(E, { expose: N, emit: M }) {
    const S = M, R = E, { options: f, show: v } = Be(R), { isNew: p, container: s, eleId: l } = Jt(f.value), e = ne(null), n = jt();
    function i(r) {
      var t, o;
      S("update:show", !1), S("close"), (o = (t = f.value).onClose) == null || o.call(t, r);
    }
    return N({
      closeMenu: () => S("update:show", !1),
      isClosed: () => !v.value,
      getMenuRef: () => {
        var r;
        return (r = e.value) == null ? void 0 : r.getMenuRef();
      },
      getMenuDimensions: () => {
        var r;
        return ((r = e.value) == null ? void 0 : r.getMenuDimensions()) ?? { width: 0, height: 0 };
      }
    }), (r, t) => (Q(), te(Vt, {
      to: `#${K(l)}`
    }, [
      ee(qt, {
        ref_key: "menuRef",
        ref: e,
        options: K(f),
        show: K(v),
        container: K(s),
        isFullScreenContainer: !K(p),
        onClose: i
      }, mt({ _: 2 }, [
        Oe(K(n), (o, a) => ({
          name: a,
          fn: X((c) => [
            be(r.$slots, a, Ut(hn(c)))
          ])
        }))
      ]), 1032, ["options", "show", "container", "isFullScreenContainer"])
    ], 8, ["to"]));
  }
}), Ai = Ee({
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
  setup(E, N) {
    const M = we("globalOptions"), { adjustSubMenuPosition: S, maxWidth: R, minWidth: f, maxHeight: v } = Be(E), p = typeof S.value < "u" ? S.value : M.value.adjustPosition, s = ne(), l = ne();
    return N.expose({
      getSubMenuRef: () => s.value,
      getMenuItemRef: () => l.value
    }), () => He(wt, {
      ...E,
      ref: l,
      showRightArrow: !0,
      maxWidth: void 0,
      minWidth: void 0,
      maxHeight: void 0,
      adjustSubMenuPosition: void 0,
      hasChildren: typeof N.slots.default !== void 0
    }, N.slots.default ? {
      //Create SubMenu
      submenu: (e) => He(it, {
        ref: s,
        maxWidth: R.value,
        minWidth: f.value,
        maxHeight: v.value,
        adjustPosition: p,
        parentMenuItemContext: e.context
      }, {
        default: N.slots.default
      }),
      //Add other slots
      ...Xn(N.slots, "default")
    } : N.slots);
  }
});
function xi(E, N, M, S) {
  const R = ne(!0), f = He(qt, {
    options: E,
    show: R.value,
    container: N,
    isFullScreenContainer: !M,
    onCloseAnimFinished: () => {
      St(null, N);
    },
    onClose: (v) => {
      var p;
      (p = E.onClose) == null || p.call(E, v), R.value = !1;
    }
  }, S);
  return St(f, N), f.component;
}
function Ot(E, N) {
  const M = Jt(E);
  return xi(E, M.container, M.isNew, N).exposed;
}
const en = {
  /**
   * For Vue install
   * @param app 
   */
  install(E) {
    E.config.globalProperties.$contextmenu = Ot, E.component("ContextMenu", Mi), E.component("ContextMenuItem", wt), E.component("ContextMenuGroup", Ai), E.component("ContextMenuSperator", Je), E.component("ContextMenuSeparator", Je), E.component("ContextSubMenu", it);
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
  showContextMenu(E, N) {
    return Ot(E, N);
  },
  /**
   * Get if there is a menu open now.
   */
  isAnyContextMenuOpen() {
    return Gn();
  },
  /**
   * Close the currently open menu
   */
  closeContextMenu: Xt,
  //Tools
  transformMenuPosition: Yn
}, ki = { class: "header-buttons" }, Li = { class: "content" }, _i = {
  __name: "FloatingTreeViewer",
  props: {
    data: {},
    dataModifiers: {}
  },
  emits: /* @__PURE__ */ Pe(["openEdit", "close", "update:docked"], ["update:data"]),
  setup(E, { emit: N }) {
    const M = qe(E, "data"), { removeElement: S, pasteElement: R, insertElement: f } = Yt(M), v = N, p = we("componentClipboard"), s = ne([]);
    function l() {
      s.value.forEach((h) => {
        h && (h.isExpanded = !0, n(h));
      });
    }
    function e() {
      s.value.forEach((h) => {
        h && (h.isExpanded = !1, i(h));
      });
    }
    function n(h) {
      h.$refs.treeNodes && h.$refs.treeNodes.forEach(($) => {
        $ && ($.isExpanded = !0, n($));
      });
    }
    function i(h) {
      h.$refs.treeNodes && h.$refs.treeNodes.forEach(($) => {
        $ && ($.isExpanded = !1, i($));
      });
    }
    function r(h, $) {
      let _ = h.path ? [$, ...h.path] : [$];
      const L = [
        {
          label: "Edit",
          onClick: () => {
            v("openEdit", { element: h.element, path: _ });
          }
        }
      ];
      L.push(
        {
          label: "Cut",
          onClick: () => {
            p.cut(h.element, _), p.isCut && S(_);
          }
        },
        {
          label: "Copy",
          onClick: () => {
            p.copy(h.element, _);
          }
        }
      ), p.hasContent() && L.push({
        label: "Paste",
        children: [
          {
            label: "Paste as Prepend",
            onClick: () => R(_, "prepend")
          },
          {
            label: "Paste as Append",
            onClick: () => R(_, "append")
          },
          {
            label: "Paste as Child",
            onClick: () => R(_, "child")
          }
        ]
      }), L.push(Qt(f, _)), en.showContextMenu({
        x: h.event.x,
        y: h.event.y,
        zIndex: 1001,
        items: L
      });
    }
    const t = ne({ top: 20, left: 20 }), o = ne(!1);
    let a = !1, c = { x: 0, y: 0 };
    function u() {
      o.value = !o.value, v("update:docked", o.value), o.value ? t.value = { top: 0, right: 0, bottom: 0 } : t.value = { top: 20, left: 20 };
    }
    function w(h) {
      o.value || (a = !0, c.x = h.clientX - t.value.left, c.y = h.clientY - t.value.top, document.addEventListener("mousemove", y), document.addEventListener("mouseup", m));
    }
    function y(h) {
      a && (t.value.left = h.clientX - c.x, t.value.top = h.clientY - c.y);
    }
    function m() {
      a = !1, document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", m);
    }
    return Ge(() => {
      document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", m);
    }), (h, $) => {
      const _ = ae("v-icon"), L = ae("v-btn");
      return Q(), se("div", {
        class: Ie(["floating-tree-viewer", { docked: o.value }]),
        style: Ye(o.value ? t.value : { top: t.value.top + "px", left: t.value.left + "px" })
      }, [
        ge("div", {
          class: "header",
          onMousedown: w
        }, [
          $[4] || ($[4] = ge("span", null, "JSON Tree Viewer", -1)),
          ge("div", ki, [
            ee(L, {
              icon: "",
              density: "compact",
              onClick: l,
              title: "Expand All"
            }, {
              default: X(() => [
                ee(_, null, {
                  default: X(() => $[1] || ($[1] = [
                    ye("fa-solid fa-angle-double-down")
                  ])),
                  _: 1,
                  __: [1]
                })
              ]),
              _: 1
            }),
            ee(L, {
              icon: "",
              density: "compact",
              onClick: e,
              title: "Collapse All"
            }, {
              default: X(() => [
                ee(_, null, {
                  default: X(() => $[2] || ($[2] = [
                    ye("fa-solid fa-angle-double-up")
                  ])),
                  _: 1,
                  __: [2]
                })
              ]),
              _: 1
            }),
            ee(L, {
              icon: "",
              density: "compact",
              onClick: u
            }, {
              default: X(() => [
                ee(_, null, {
                  default: X(() => [
                    ye(Re(o.value ? "fa-solid fa-arrow-left" : "fa-solid fa-arrow-right"), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            ee(L, {
              icon: "",
              density: "compact",
              onClick: $[0] || ($[0] = (x) => h.$emit("close"))
            }, {
              default: X(() => $[3] || ($[3] = [
                ye("x")
              ])),
              _: 1,
              __: [3]
            })
          ])
        ], 32),
        ge("div", Li, [
          (Q(!0), se(Ae, null, Oe(M.value, (x, D) => (Q(), te(Zt, {
            node: x,
            label: "root",
            onOpenEdit: (A) => r(A, D),
            ref_for: !0,
            ref_key: "treeNodes",
            ref: s
          }, null, 8, ["node", "onOpenEdit"]))), 256))
        ])
      ], 6);
    };
  }
}, Ei = /* @__PURE__ */ et(_i, [["__scopeId", "data-v-5898d76b"]]);
function Ti(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E;
}
var ht = { exports: {} }, Dt;
function Ri() {
  return Dt || (Dt = 1, function(E, N) {
    (function() {
      var M = "ace", S = /* @__PURE__ */ function() {
        return this;
      }();
      !S && typeof window < "u" && (S = window);
      var R = function(e, n, i) {
        if (typeof e != "string") {
          R.original ? R.original.apply(this, arguments) : (console.error("dropping module because define wasn't a string."), console.trace());
          return;
        }
        arguments.length == 2 && (i = n), R.modules[e] || (R.payloads[e] = i, R.modules[e] = null);
      };
      R.modules = {}, R.payloads = {};
      var f = function(e, n, i) {
        if (typeof n == "string") {
          var r = s(e, n);
          if (r != null)
            return i && i(), r;
        } else if (Object.prototype.toString.call(n) === "[object Array]") {
          for (var t = [], o = 0, a = n.length; o < a; ++o) {
            var c = s(e, n[o]);
            if (c == null && v.original)
              return;
            t.push(c);
          }
          return i && i.apply(null, t) || !0;
        }
      }, v = function(e, n) {
        var i = f("", e, n);
        return i == null && v.original ? v.original.apply(this, arguments) : i;
      }, p = function(e, n) {
        if (n.indexOf("!") !== -1) {
          var i = n.split("!");
          return p(e, i[0]) + "!" + p(e, i[1]);
        }
        if (n.charAt(0) == ".") {
          var r = e.split("/").slice(0, -1).join("/");
          for (n = r + "/" + n; n.indexOf(".") !== -1 && t != n; ) {
            var t = n;
            n = n.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "");
          }
        }
        return n;
      }, s = function(e, n) {
        n = p(e, n);
        var i = R.modules[n];
        if (!i) {
          if (i = R.payloads[n], typeof i == "function") {
            var r = {}, t = {
              id: n,
              uri: "",
              exports: r,
              packaged: !0
            }, o = function(c, u) {
              return f(n, c, u);
            }, a = i(o, r, t);
            r = a || t.exports, R.modules[n] = r, delete R.payloads[n];
          }
          i = R.modules[n] = r || i;
        }
        return i;
      };
      function l(e) {
        var n = S;
        S[e] || (S[e] = {}), n = S[e], (!n.define || !n.define.packaged) && (R.original = n.define, n.define = R, n.define.packaged = !0), (!n.require || !n.require.packaged) && (v.original = n.require, n.require = v, n.require.packaged = !0);
      }
      l(M);
    })(), ace.define("ace/lib/es6-shim", ["require", "exports", "module"], function(M, S, R) {
      function f(v, p, s) {
        Object.defineProperty(v, p, {
          value: s,
          enumerable: !1,
          writable: !0,
          configurable: !0
        });
      }
      String.prototype.startsWith || f(String.prototype, "startsWith", function(v, p) {
        return p = p || 0, this.lastIndexOf(v, p) === p;
      }), String.prototype.endsWith || f(String.prototype, "endsWith", function(v, p) {
        var s = this;
        (p === void 0 || p > s.length) && (p = s.length), p -= v.length;
        var l = s.indexOf(v, p);
        return l !== -1 && l === p;
      }), String.prototype.repeat || f(String.prototype, "repeat", function(v) {
        for (var p = "", s = this; v > 0; )
          v & 1 && (p += s), (v >>= 1) && (s += s);
        return p;
      }), String.prototype.includes || f(String.prototype, "includes", function(v, p) {
        return this.indexOf(v, p) != -1;
      }), Object.assign || (Object.assign = function(v) {
        if (v == null)
          throw new TypeError("Cannot convert undefined or null to object");
        for (var p = Object(v), s = 1; s < arguments.length; s++) {
          var l = arguments[s];
          l != null && Object.keys(l).forEach(function(e) {
            p[e] = l[e];
          });
        }
        return p;
      }), Object.values || (Object.values = function(v) {
        return Object.keys(v).map(function(p) {
          return v[p];
        });
      }), Array.prototype.find || f(Array.prototype, "find", function(v) {
        for (var p = this.length, s = arguments[1], l = 0; l < p; l++) {
          var e = this[l];
          if (v.call(s, e, l, this))
            return e;
        }
      }), Array.prototype.findIndex || f(Array.prototype, "findIndex", function(v) {
        for (var p = this.length, s = arguments[1], l = 0; l < p; l++) {
          var e = this[l];
          if (v.call(s, e, l, this))
            return l;
        }
      }), Array.prototype.includes || f(Array.prototype, "includes", function(v, p) {
        return this.indexOf(v, p) != -1;
      }), Array.prototype.fill || f(Array.prototype, "fill", function(v) {
        for (var p = this, s = p.length >>> 0, l = arguments[1], e = l >> 0, n = e < 0 ? Math.max(s + e, 0) : Math.min(e, s), i = arguments[2], r = i === void 0 ? s : i >> 0, t = r < 0 ? Math.max(s + r, 0) : Math.min(r, s); n < t; )
          p[n] = v, n++;
        return p;
      }), Array.of || f(Array, "of", function() {
        return Array.prototype.slice.call(arguments);
      });
    }), ace.define("ace/lib/fixoldbrowsers", ["require", "exports", "module", "ace/lib/es6-shim"], function(M, S, R) {
      M("./es6-shim");
    }), ace.define("ace/lib/deep_copy", ["require", "exports", "module"], function(M, S, R) {
      S.deepCopy = function f(v) {
        if (typeof v != "object" || !v)
          return v;
        var p;
        if (Array.isArray(v)) {
          p = [];
          for (var s = 0; s < v.length; s++)
            p[s] = f(v[s]);
          return p;
        }
        if (Object.prototype.toString.call(v) !== "[object Object]")
          return v;
        p = {};
        for (var s in v)
          p[s] = f(v[s]);
        return p;
      };
    }), ace.define("ace/lib/lang", ["require", "exports", "module", "ace/lib/deep_copy"], function(M, S, R) {
      S.last = function(p) {
        return p[p.length - 1];
      }, S.stringReverse = function(p) {
        return p.split("").reverse().join("");
      }, S.stringRepeat = function(p, s) {
        for (var l = ""; s > 0; )
          s & 1 && (l += p), (s >>= 1) && (p += p);
        return l;
      };
      var f = /^\s\s*/, v = /\s\s*$/;
      S.stringTrimLeft = function(p) {
        return p.replace(f, "");
      }, S.stringTrimRight = function(p) {
        return p.replace(v, "");
      }, S.copyObject = function(p) {
        var s = {};
        for (var l in p)
          s[l] = p[l];
        return s;
      }, S.copyArray = function(p) {
        for (var s = [], l = 0, e = p.length; l < e; l++)
          p[l] && typeof p[l] == "object" ? s[l] = this.copyObject(p[l]) : s[l] = p[l];
        return s;
      }, S.deepCopy = M("./deep_copy").deepCopy, S.arrayToMap = function(p) {
        for (var s = {}, l = 0; l < p.length; l++)
          s[p[l]] = 1;
        return s;
      }, S.createMap = function(p) {
        var s = /* @__PURE__ */ Object.create(null);
        for (var l in p)
          s[l] = p[l];
        return s;
      }, S.arrayRemove = function(p, s) {
        for (var l = 0; l <= p.length; l++)
          s === p[l] && p.splice(l, 1);
      }, S.escapeRegExp = function(p) {
        return p.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1");
      }, S.escapeHTML = function(p) {
        return ("" + p).replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;");
      }, S.getMatchOffsets = function(p, s) {
        var l = [];
        return p.replace(s, function(e) {
          l.push({
            offset: arguments[arguments.length - 2],
            length: e.length
          });
        }), l;
      }, S.deferredCall = function(p) {
        var s = null, l = function() {
          s = null, p();
        }, e = function(n) {
          return e.cancel(), s = setTimeout(l, n || 0), e;
        };
        return e.schedule = e, e.call = function() {
          return this.cancel(), p(), e;
        }, e.cancel = function() {
          return clearTimeout(s), s = null, e;
        }, e.isPending = function() {
          return s;
        }, e;
      }, S.delayedCall = function(p, s) {
        var l = null, e = function() {
          l = null, p();
        }, n = function(i) {
          l == null && (l = setTimeout(e, i || s));
        };
        return n.delay = function(i) {
          l && clearTimeout(l), l = setTimeout(e, i || s);
        }, n.schedule = n, n.call = function() {
          this.cancel(), p();
        }, n.cancel = function() {
          l && clearTimeout(l), l = null;
        }, n.isPending = function() {
          return l;
        }, n;
      }, S.supportsLookbehind = function() {
        try {
          new RegExp("(?<=.)");
        } catch {
          return !1;
        }
        return !0;
      }, S.skipEmptyMatch = function(p, s, l) {
        return l && p.codePointAt(s) > 65535 ? 2 : 1;
      };
    }), ace.define("ace/lib/useragent", ["require", "exports", "module"], function(M, S, R) {
      S.OS = {
        LINUX: "LINUX",
        MAC: "MAC",
        WINDOWS: "WINDOWS"
      }, S.getOS = function() {
        return S.isMac ? S.OS.MAC : S.isLinux ? S.OS.LINUX : S.OS.WINDOWS;
      };
      var f = typeof navigator == "object" ? navigator : {}, v = (/mac|win|linux/i.exec(f.platform) || ["other"])[0].toLowerCase(), p = f.userAgent || "", s = f.appName || "";
      S.isWin = v == "win", S.isMac = v == "mac", S.isLinux = v == "linux", S.isIE = s == "Microsoft Internet Explorer" || s.indexOf("MSAppHost") >= 0 ? parseFloat((p.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]) : parseFloat((p.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]), S.isOldIE = S.isIE && S.isIE < 9, S.isGecko = S.isMozilla = p.match(/ Gecko\/\d+/), S.isOpera = typeof opera == "object" && Object.prototype.toString.call(window.opera) == "[object Opera]", S.isWebKit = parseFloat(p.split("WebKit/")[1]) || void 0, S.isChrome = parseFloat(p.split(" Chrome/")[1]) || void 0, S.isSafari = parseFloat(p.split(" Safari/")[1]) && !S.isChrome || void 0, S.isEdge = parseFloat(p.split(" Edge/")[1]) || void 0, S.isAIR = p.indexOf("AdobeAIR") >= 0, S.isAndroid = p.indexOf("Android") >= 0, S.isChromeOS = p.indexOf(" CrOS ") >= 0, S.isIOS = /iPad|iPhone|iPod/.test(p) && !window.MSStream, S.isIOS && (S.isMac = !0), S.isMobile = S.isIOS || S.isAndroid;
    }), ace.define("ace/lib/dom", ["require", "exports", "module", "ace/lib/useragent"], function(M, S, R) {
      var f = M("./useragent"), v = "http://www.w3.org/1999/xhtml";
      S.buildDom = function i(r, t, o) {
        if (typeof r == "string" && r) {
          var a = document.createTextNode(r);
          return t && t.appendChild(a), a;
        }
        if (!Array.isArray(r))
          return r && r.appendChild && t && t.appendChild(r), r;
        if (typeof r[0] != "string" || !r[0]) {
          for (var c = [], u = 0; u < r.length; u++) {
            var w = i(r[u], t, o);
            w && c.push(w);
          }
          return c;
        }
        var y = document.createElement(r[0]), m = r[1], h = 1;
        m && typeof m == "object" && !Array.isArray(m) && (h = 2);
        for (var u = h; u < r.length; u++)
          i(r[u], y, o);
        return h == 2 && Object.keys(m).forEach(function($) {
          var _ = m[$];
          $ === "class" ? y.className = Array.isArray(_) ? _.join(" ") : _ : typeof _ == "function" || $ == "value" || $[0] == "$" ? y[$] = _ : $ === "ref" ? o && (o[_] = y) : $ === "style" ? typeof _ == "string" && (y.style.cssText = _) : _ != null && y.setAttribute($, _);
        }), t && t.appendChild(y), y;
      }, S.getDocumentHead = function(i) {
        return i || (i = document), i.head || i.getElementsByTagName("head")[0] || i.documentElement;
      }, S.createElement = function(i, r) {
        return document.createElementNS ? document.createElementNS(r || v, i) : document.createElement(i);
      }, S.removeChildren = function(i) {
        i.innerHTML = "";
      }, S.createTextNode = function(i, r) {
        var t = r ? r.ownerDocument : document;
        return t.createTextNode(i);
      }, S.createFragment = function(i) {
        var r = i ? i.ownerDocument : document;
        return r.createDocumentFragment();
      }, S.hasCssClass = function(i, r) {
        var t = (i.className + "").split(/\s+/g);
        return t.indexOf(r) !== -1;
      }, S.addCssClass = function(i, r) {
        S.hasCssClass(i, r) || (i.className += " " + r);
      }, S.removeCssClass = function(i, r) {
        for (var t = i.className.split(/\s+/g); ; ) {
          var o = t.indexOf(r);
          if (o == -1)
            break;
          t.splice(o, 1);
        }
        i.className = t.join(" ");
      }, S.toggleCssClass = function(i, r) {
        for (var t = i.className.split(/\s+/g), o = !0; ; ) {
          var a = t.indexOf(r);
          if (a == -1)
            break;
          o = !1, t.splice(a, 1);
        }
        return o && t.push(r), i.className = t.join(" "), o;
      }, S.setCssClass = function(i, r, t) {
        t ? S.addCssClass(i, r) : S.removeCssClass(i, r);
      }, S.hasCssString = function(i, r) {
        var t = 0, o;
        if (r = r || document, o = r.querySelectorAll("style")) {
          for (; t < o.length; )
            if (o[t++].id === i)
              return !0;
        }
      }, S.removeElementById = function(i, r) {
        r = r || document, r.getElementById(i) && r.getElementById(i).remove();
      };
      var p, s = [];
      S.useStrictCSP = function(i) {
        p = i, i == !1 ? l() : s || (s = []);
      };
      function l() {
        var i = s;
        s = null, i && i.forEach(function(r) {
          e(r[0], r[1]);
        });
      }
      function e(i, r, t) {
        if (!(typeof document > "u")) {
          if (s) {
            if (t)
              l();
            else if (t === !1)
              return s.push([i, r]);
          }
          if (!p) {
            var o = t;
            !t || !t.getRootNode ? o = document : (o = t.getRootNode(), (!o || o == t) && (o = document));
            var a = o.ownerDocument || o;
            if (r && S.hasCssString(r, o))
              return null;
            r && (i += `
/*# sourceURL=ace/css/` + r + " */");
            var c = S.createElement("style");
            c.appendChild(a.createTextNode(i)), r && (c.id = r), o == a && (o = S.getDocumentHead(a)), o.insertBefore(c, o.firstChild);
          }
        }
      }
      if (S.importCssString = e, S.importCssStylsheet = function(i, r) {
        S.buildDom(["link", { rel: "stylesheet", href: i }], S.getDocumentHead(r));
      }, S.scrollbarWidth = function(i) {
        var r = S.createElement("ace_inner");
        r.style.width = "100%", r.style.minWidth = "0px", r.style.height = "200px", r.style.display = "block";
        var t = S.createElement("ace_outer"), o = t.style;
        o.position = "absolute", o.left = "-10000px", o.overflow = "hidden", o.width = "200px", o.minWidth = "0px", o.height = "150px", o.display = "block", t.appendChild(r);
        var a = i && i.documentElement || document && document.documentElement;
        if (!a)
          return 0;
        a.appendChild(t);
        var c = r.offsetWidth;
        o.overflow = "scroll";
        var u = r.offsetWidth;
        return c === u && (u = t.clientWidth), a.removeChild(t), c - u;
      }, S.computedStyle = function(i, r) {
        return window.getComputedStyle(i, "") || {};
      }, S.setStyle = function(i, r, t) {
        i[r] !== t && (i[r] = t);
      }, S.HAS_CSS_ANIMATION = !1, S.HAS_CSS_TRANSFORMS = !1, S.HI_DPI = f.isWin ? typeof window < "u" && window.devicePixelRatio >= 1.5 : !0, f.isChromeOS && (S.HI_DPI = !1), typeof document < "u") {
        var n = document.createElement("div");
        S.HI_DPI && n.style.transform !== void 0 && (S.HAS_CSS_TRANSFORMS = !0), !f.isEdge && typeof n.style.animationName < "u" && (S.HAS_CSS_ANIMATION = !0), n = null;
      }
      S.HAS_CSS_TRANSFORMS ? S.translate = function(i, r, t) {
        i.style.transform = "translate(" + Math.round(r) + "px, " + Math.round(t) + "px)";
      } : S.translate = function(i, r, t) {
        i.style.top = Math.round(t) + "px", i.style.left = Math.round(r) + "px";
      };
    }), ace.define("ace/lib/net", ["require", "exports", "module", "ace/lib/dom"], function(M, S, R) {
      /*
      * based on code from:
      *
      * @license RequireJS text 0.25.0 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
      * Available via the MIT or new BSD license.
      * see: http://github.com/jrburke/requirejs for details
      */
      var f = M("./dom");
      S.get = function(v, p) {
        var s = new XMLHttpRequest();
        s.open("GET", v, !0), s.onreadystatechange = function() {
          s.readyState === 4 && p(s.responseText);
        }, s.send(null);
      }, S.loadScript = function(v, p) {
        var s = f.getDocumentHead(), l = document.createElement("script");
        l.src = v, s.appendChild(l), l.onload = l.onreadystatechange = function(e, n) {
          (n || !l.readyState || l.readyState == "loaded" || l.readyState == "complete") && (l = l.onload = l.onreadystatechange = null, n || p());
        };
      }, S.qualifyURL = function(v) {
        var p = document.createElement("a");
        return p.href = v, p.href;
      };
    }), ace.define("ace/lib/oop", ["require", "exports", "module"], function(M, S, R) {
      S.inherits = function(f, v) {
        f.super_ = v, f.prototype = Object.create(v.prototype, {
          constructor: {
            value: f,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
      }, S.mixin = function(f, v) {
        for (var p in v)
          f[p] = v[p];
        return f;
      }, S.implement = function(f, v) {
        S.mixin(f, v);
      };
    }), ace.define("ace/lib/event_emitter", ["require", "exports", "module"], function(M, S, R) {
      var f = {}, v = function() {
        this.propagationStopped = !0;
      }, p = function() {
        this.defaultPrevented = !0;
      };
      f._emit = f._dispatchEvent = function(s, l) {
        this._eventRegistry || (this._eventRegistry = {}), this._defaultHandlers || (this._defaultHandlers = {});
        var e = this._eventRegistry[s] || [], n = this._defaultHandlers[s];
        if (!(!e.length && !n)) {
          (typeof l != "object" || !l) && (l = {}), l.type || (l.type = s), l.stopPropagation || (l.stopPropagation = v), l.preventDefault || (l.preventDefault = p), e = e.slice();
          for (var i = 0; i < e.length && (e[i](l, this), !l.propagationStopped); i++)
            ;
          if (n && !l.defaultPrevented)
            return n(l, this);
        }
      }, f._signal = function(s, l) {
        var e = (this._eventRegistry || {})[s];
        if (e) {
          e = e.slice();
          for (var n = 0; n < e.length; n++)
            e[n](l, this);
        }
      }, f.once = function(s, l) {
        var e = this;
        if (this.on(s, function n() {
          e.off(s, n), l.apply(null, arguments);
        }), !l)
          return new Promise(function(n) {
            l = n;
          });
      }, f.setDefaultHandler = function(s, l) {
        var e = this._defaultHandlers;
        if (e || (e = this._defaultHandlers = { _disabled_: {} }), e[s]) {
          var n = e[s], i = e._disabled_[s];
          i || (e._disabled_[s] = i = []), i.push(n);
          var r = i.indexOf(l);
          r != -1 && i.splice(r, 1);
        }
        e[s] = l;
      }, f.removeDefaultHandler = function(s, l) {
        var e = this._defaultHandlers;
        if (e) {
          var n = e._disabled_[s];
          if (e[s] == l)
            n && this.setDefaultHandler(s, n.pop());
          else if (n) {
            var i = n.indexOf(l);
            i != -1 && n.splice(i, 1);
          }
        }
      }, f.on = f.addEventListener = function(s, l, e) {
        this._eventRegistry = this._eventRegistry || {};
        var n = this._eventRegistry[s];
        return n || (n = this._eventRegistry[s] = []), n.indexOf(l) == -1 && n[e ? "unshift" : "push"](l), l;
      }, f.off = f.removeListener = f.removeEventListener = function(s, l) {
        this._eventRegistry = this._eventRegistry || {};
        var e = this._eventRegistry[s];
        if (e) {
          var n = e.indexOf(l);
          n !== -1 && e.splice(n, 1);
        }
      }, f.removeAllListeners = function(s) {
        s || (this._eventRegistry = this._defaultHandlers = void 0), this._eventRegistry && (this._eventRegistry[s] = void 0), this._defaultHandlers && (this._defaultHandlers[s] = void 0);
      }, S.EventEmitter = f;
    }), ace.define("ace/lib/report_error", ["require", "exports", "module"], function(M, S, R) {
      S.reportError = function(v, p) {
        var s = new Error(v);
        s.data = p, typeof console == "object" && console.error && console.error(s), setTimeout(function() {
          throw s;
        });
      };
    }), ace.define("ace/lib/default_english_messages", ["require", "exports", "module"], function(M, S, R) {
      var f = {
        "autocomplete.popup.aria-roledescription": "Autocomplete suggestions",
        "autocomplete.popup.aria-label": "Autocomplete suggestions",
        "autocomplete.popup.item.aria-roledescription": "item",
        "autocomplete.loading": "Loading...",
        "editor.scroller.aria-roledescription": "editor",
        "editor.scroller.aria-label": "Editor content, press Enter to start editing, press Escape to exit",
        "editor.gutter.aria-roledescription": "editor gutter",
        "editor.gutter.aria-label": "Editor gutter, press Enter to interact with controls using arrow keys, press Escape to exit",
        "error-marker.good-state": "Looks good!",
        "prompt.recently-used": "Recently used",
        "prompt.other-commands": "Other commands",
        "prompt.no-matching-commands": "No matching commands",
        "search-box.find.placeholder": "Search for",
        "search-box.find-all.text": "All",
        "search-box.replace.placeholder": "Replace with",
        "search-box.replace-next.text": "Replace",
        "search-box.replace-all.text": "All",
        "search-box.toggle-replace.title": "Toggle Replace mode",
        "search-box.toggle-regexp.title": "RegExp Search",
        "search-box.toggle-case.title": "CaseSensitive Search",
        "search-box.toggle-whole-word.title": "Whole Word Search",
        "search-box.toggle-in-selection.title": "Search In Selection",
        "search-box.search-counter": "$0 of $1",
        "text-input.aria-roledescription": "editor",
        "text-input.aria-label": "Cursor at row $0",
        "gutter.code-folding.range.aria-label": "Toggle code folding, rows $0 through $1",
        "gutter.code-folding.closed.aria-label": "Toggle code folding, rows $0 through $1",
        "gutter.code-folding.open.aria-label": "Toggle code folding, row $0",
        "gutter.code-folding.closed.title": "Unfold code",
        "gutter.code-folding.open.title": "Fold code",
        "gutter.annotation.aria-label.error": "Error, read annotations row $0",
        "gutter.annotation.aria-label.warning": "Warning, read annotations row $0",
        "gutter.annotation.aria-label.info": "Info, read annotations row $0",
        "inline-fold.closed.title": "Unfold code",
        "gutter-tooltip.aria-label.error.singular": "error",
        "gutter-tooltip.aria-label.error.plural": "errors",
        "gutter-tooltip.aria-label.warning.singular": "warning",
        "gutter-tooltip.aria-label.warning.plural": "warnings",
        "gutter-tooltip.aria-label.info.singular": "information message",
        "gutter-tooltip.aria-label.info.plural": "information messages",
        "gutter.annotation.aria-label.security": "Security finding, read annotations row $0",
        "gutter.annotation.aria-label.hint": "Suggestion, read annotations row $0",
        "gutter-tooltip.aria-label.security.singular": "security finding",
        "gutter-tooltip.aria-label.security.plural": "security findings",
        "gutter-tooltip.aria-label.hint.singular": "suggestion",
        "gutter-tooltip.aria-label.hint.plural": "suggestions",
        "editor.tooltip.disable-editing": "Editing is disabled"
      };
      S.defaultEnglishMessages = f;
    }), ace.define("ace/lib/app_config", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter", "ace/lib/report_error", "ace/lib/default_english_messages"], function(M, S, R) {
      "no use strict";
      var f = M("./oop"), v = M("./event_emitter").EventEmitter, p = M("./report_error").reportError, s = M("./default_english_messages").defaultEnglishMessages, l = {
        setOptions: function(t) {
          Object.keys(t).forEach(function(o) {
            this.setOption(o, t[o]);
          }, this);
        },
        getOptions: function(t) {
          var o = {};
          if (t)
            Array.isArray(t) || (t = Object.keys(t));
          else {
            var a = this.$options;
            t = Object.keys(a).filter(function(c) {
              return !a[c].hidden;
            });
          }
          return t.forEach(function(c) {
            o[c] = this.getOption(c);
          }, this), o;
        },
        setOption: function(t, o) {
          if (this["$" + t] !== o) {
            var a = this.$options[t];
            if (!a)
              return e('misspelled option "' + t + '"');
            if (a.forwardTo)
              return this[a.forwardTo] && this[a.forwardTo].setOption(t, o);
            a.handlesSet || (this["$" + t] = o), a && a.set && a.set.call(this, o);
          }
        },
        getOption: function(t) {
          var o = this.$options[t];
          return o ? o.forwardTo ? this[o.forwardTo] && this[o.forwardTo].getOption(t) : o && o.get ? o.get.call(this) : this["$" + t] : e('misspelled option "' + t + '"');
        }
      };
      function e(t) {
        typeof console < "u" && console.warn && console.warn.apply(console, arguments);
      }
      var n, i, r = (
        /** @class */
        function() {
          function t() {
            this.$defaultOptions = {}, n = s, i = "dollarSigns";
          }
          return t.prototype.defineOptions = function(o, a, c) {
            return o.$options || (this.$defaultOptions[a] = o.$options = {}), Object.keys(c).forEach(function(u) {
              var w = c[u];
              typeof w == "string" && (w = { forwardTo: w }), w.name || (w.name = u), o.$options[w.name] = w, "initialValue" in w && (o["$" + w.name] = w.initialValue);
            }), f.implement(o, l), this;
          }, t.prototype.resetOptions = function(o) {
            Object.keys(o.$options).forEach(function(a) {
              var c = o.$options[a];
              "value" in c && o.setOption(a, c.value);
            });
          }, t.prototype.setDefaultValue = function(o, a, c) {
            if (!o) {
              for (o in this.$defaultOptions)
                if (this.$defaultOptions[o][a])
                  break;
              if (!this.$defaultOptions[o][a])
                return !1;
            }
            var u = this.$defaultOptions[o] || (this.$defaultOptions[o] = {});
            u[a] && (u.forwardTo ? this.setDefaultValue(u.forwardTo, a, c) : u[a].value = c);
          }, t.prototype.setDefaultValues = function(o, a) {
            Object.keys(a).forEach(function(c) {
              this.setDefaultValue(o, c, a[c]);
            }, this);
          }, t.prototype.setMessages = function(o, a) {
            n = o, a && a.placeholders && (i = a.placeholders);
          }, t.prototype.nls = function(o, a, c) {
            n[o] || (e("No message found for the key '" + o + "' in messages with id " + n.$id + ", trying to find a translation for the default string '" + a + "'."), n[a] || e("No message found for the default string '" + a + "' in the provided messages. Falling back to the default English message."));
            var u = n[o] || n[a] || a;
            return c && (i === "dollarSigns" && (u = u.replace(/\$(\$|[\d]+)/g, function(w, y) {
              return y == "$" ? "$" : c[y];
            })), i === "curlyBrackets" && (u = u.replace(/\{([^\}]+)\}/g, function(w, y) {
              return c[y];
            }))), u;
          }, t;
        }()
      );
      r.prototype.warn = e, r.prototype.reportError = p, f.implement(r.prototype, v), S.AppConfig = r;
    }), ace.define("ace/theme/textmate-css", ["require", "exports", "module"], function(M, S, R) {
      R.exports = `.ace-tm .ace_gutter {
  background: #f0f0f0;
  color: #333;
}

.ace-tm .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-tm .ace_fold {
    background-color: #6B72E6;
}

.ace-tm {
  background-color: #FFFFFF;
  color: black;
}

.ace-tm .ace_cursor {
  color: black;
}
        
.ace-tm .ace_invisible {
  color: rgb(191, 191, 191);
}

.ace-tm .ace_storage,
.ace-tm .ace_keyword {
  color: blue;
}

.ace-tm .ace_constant {
  color: rgb(197, 6, 11);
}

.ace-tm .ace_constant.ace_buildin {
  color: rgb(88, 72, 246);
}

.ace-tm .ace_constant.ace_language {
  color: rgb(88, 92, 246);
}

.ace-tm .ace_constant.ace_library {
  color: rgb(6, 150, 14);
}

.ace-tm .ace_invalid {
  background-color: rgba(255, 0, 0, 0.1);
  color: red;
}

.ace-tm .ace_support.ace_function {
  color: rgb(60, 76, 114);
}

.ace-tm .ace_support.ace_constant {
  color: rgb(6, 150, 14);
}

.ace-tm .ace_support.ace_type,
.ace-tm .ace_support.ace_class {
  color: rgb(109, 121, 222);
}

.ace-tm .ace_keyword.ace_operator {
  color: rgb(104, 118, 135);
}

.ace-tm .ace_string {
  color: rgb(3, 106, 7);
}

.ace-tm .ace_comment {
  color: rgb(76, 136, 107);
}

.ace-tm .ace_comment.ace_doc {
  color: rgb(0, 102, 255);
}

.ace-tm .ace_comment.ace_doc.ace_tag {
  color: rgb(128, 159, 191);
}

.ace-tm .ace_constant.ace_numeric {
  color: rgb(0, 0, 205);
}

.ace-tm .ace_variable {
  color: rgb(49, 132, 149);
}

.ace-tm .ace_xml-pe {
  color: rgb(104, 104, 91);
}

.ace-tm .ace_entity.ace_name.ace_function {
  color: #0000A2;
}


.ace-tm .ace_heading {
  color: rgb(12, 7, 255);
}

.ace-tm .ace_list {
  color:rgb(185, 6, 144);
}

.ace-tm .ace_meta.ace_tag {
  color:rgb(0, 22, 142);
}

.ace-tm .ace_string.ace_regex {
  color: rgb(255, 0, 0)
}

.ace-tm .ace_marker-layer .ace_selection {
  background: rgb(181, 213, 255);
}
.ace-tm.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px white;
}
.ace-tm .ace_marker-layer .ace_step {
  background: rgb(252, 255, 0);
}

.ace-tm .ace_marker-layer .ace_stack {
  background: rgb(164, 229, 101);
}

.ace-tm .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgb(192, 192, 192);
}

.ace-tm .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.07);
}

.ace-tm .ace_gutter-active-line {
    background-color : #dcdcdc;
}

.ace-tm .ace_marker-layer .ace_selected-word {
  background: rgb(250, 250, 255);
  border: 1px solid rgb(200, 200, 250);
}

.ace-tm .ace_indent-guide {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;
}

.ace-tm .ace_indent-guide-active {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;
}
`;
    }), ace.define("ace/theme/textmate", ["require", "exports", "module", "ace/theme/textmate-css", "ace/lib/dom"], function(M, S, R) {
      S.isDark = !1, S.cssClass = "ace-tm", S.cssText = M("./textmate-css"), S.$id = "ace/theme/textmate";
      var f = M("../lib/dom");
      f.importCssString(S.cssText, S.cssClass, !1);
    }), ace.define("ace/config", ["require", "exports", "module", "ace/lib/lang", "ace/lib/net", "ace/lib/dom", "ace/lib/app_config", "ace/theme/textmate"], function(M, S, R) {
      "no use strict";
      var f = M("./lib/lang"), v = M("./lib/net"), p = M("./lib/dom"), s = M("./lib/app_config").AppConfig;
      R.exports = S = new s();
      var l = {
        packaged: !1,
        workerPath: null,
        modePath: null,
        themePath: null,
        basePath: "",
        suffix: ".js",
        $moduleUrls: {},
        loadWorkerFromBlob: !0,
        sharedPopups: !1,
        useStrictCSP: null
      };
      S.get = function(r) {
        if (!l.hasOwnProperty(r))
          throw new Error("Unknown config key: " + r);
        return l[r];
      }, S.set = function(r, t) {
        if (l.hasOwnProperty(r))
          l[r] = t;
        else if (this.setDefaultValue("", r, t) == !1)
          throw new Error("Unknown config key: " + r);
        r == "useStrictCSP" && p.useStrictCSP(t);
      }, S.all = function() {
        return f.copyObject(l);
      }, S.$modes = {}, S.moduleUrl = function(r, t) {
        if (l.$moduleUrls[r])
          return l.$moduleUrls[r];
        var o = r.split("/");
        t = t || o[o.length - 2] || "";
        var a = t == "snippets" ? "/" : "-", c = o[o.length - 1];
        if (t == "worker" && a == "-") {
          var u = new RegExp("^" + t + "[\\-_]|[\\-_]" + t + "$", "g");
          c = c.replace(u, "");
        }
        (!c || c == t) && o.length > 1 && (c = o[o.length - 2]);
        var w = l[t + "Path"];
        return w == null ? w = l.basePath : a == "/" && (t = a = ""), w && w.slice(-1) != "/" && (w += "/"), w + t + a + c + this.get("suffix");
      }, S.setModuleUrl = function(r, t) {
        return l.$moduleUrls[r] = t;
      };
      var e = function(r, t) {
        if (r === "ace/theme/textmate" || r === "./theme/textmate")
          return t(null, M("./theme/textmate"));
        if (n)
          return n(r, t);
        console.error("loader is not configured");
      }, n;
      S.setLoader = function(r) {
        n = r;
      }, S.dynamicModules = /* @__PURE__ */ Object.create(null), S.$loading = {}, S.$loaded = {}, S.loadModule = function(r, t) {
        var o;
        if (Array.isArray(r))
          var a = r[0], c = r[1];
        else if (typeof r == "string")
          var c = r;
        var u = function(w) {
          if (w && !S.$loading[c])
            return t && t(w);
          if (S.$loading[c] || (S.$loading[c] = []), S.$loading[c].push(t), !(S.$loading[c].length > 1)) {
            var y = function() {
              e(c, function(m, h) {
                h && (S.$loaded[c] = h), S._emit("load.module", { name: c, module: h });
                var $ = S.$loading[c];
                S.$loading[c] = null, $.forEach(function(_) {
                  _ && _(h);
                });
              });
            };
            if (!S.get("packaged"))
              return y();
            v.loadScript(S.moduleUrl(c, a), y), i();
          }
        };
        if (S.dynamicModules[c])
          S.dynamicModules[c]().then(function(w) {
            w.default ? u(w.default) : u(w);
          });
        else {
          try {
            o = this.$require(c);
          } catch {
          }
          u(o || S.$loaded[c]);
        }
      }, S.$require = function(r) {
        if (typeof R.require == "function") {
          var t = "require";
          return R[t](r);
        }
      }, S.setModuleLoader = function(r, t) {
        S.dynamicModules[r] = t;
      };
      var i = function() {
        !l.basePath && !l.workerPath && !l.modePath && !l.themePath && !Object.keys(l.$moduleUrls).length && (console.error("Unable to infer path to ace from script src,", "use ace.config.set('basePath', 'path') to enable dynamic loading of modes and themes", "or with webpack use ace/webpack-resolver"), i = function() {
        });
      };
      S.version = "1.41.0";
    }), ace.define("ace/loader_build", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/config"], function(M, S, R) {
      M("./lib/fixoldbrowsers");
      var f = M("./config");
      f.setLoader(function(l, e) {
        M([l], function(n) {
          e(null, n);
        });
      });
      var v = /* @__PURE__ */ function() {
        return this || typeof window < "u" && window;
      }();
      R.exports = function(l) {
        f.init = p, f.$require = M, l.require = M;
      }, p(!0);
      function p(l) {
        if (!(!v || !v.document)) {
          f.set("packaged", l || M.packaged || R.packaged || v.define && (void 0).packaged);
          var e = {}, n = "", i = document.currentScript || document._currentScript, r = i && i.ownerDocument || document;
          i && i.src && (n = i.src.split(/[?#]/)[0].split("/").slice(0, -1).join("/") || "");
          for (var t = r.getElementsByTagName("script"), o = 0; o < t.length; o++) {
            var a = t[o], c = a.src || a.getAttribute("src");
            if (c) {
              for (var u = a.attributes, w = 0, y = u.length; w < y; w++) {
                var m = u[w];
                m.name.indexOf("data-ace-") === 0 && (e[s(m.name.replace(/^data-ace-/, ""))] = m.value);
              }
              var h = c.match(/^(.*)\/ace([\-.]\w+)?\.js(\?|$)/);
              h && (n = h[1]);
            }
          }
          n && (e.base = e.base || n, e.packaged = !0), e.basePath = e.base, e.workerPath = e.workerPath || e.base, e.modePath = e.modePath || e.base, e.themePath = e.themePath || e.base, delete e.base;
          for (var $ in e)
            typeof e[$] < "u" && f.set($, e[$]);
        }
      }
      function s(l) {
        return l.replace(/-(.)/g, function(e, n) {
          return n.toUpperCase();
        });
      }
    }), ace.define("ace/range", ["require", "exports", "module"], function(M, S, R) {
      var f = (
        /** @class */
        function() {
          function v(p, s, l, e) {
            this.start = {
              row: p,
              column: s
            }, this.end = {
              row: l,
              column: e
            };
          }
          return v.prototype.isEqual = function(p) {
            return this.start.row === p.start.row && this.end.row === p.end.row && this.start.column === p.start.column && this.end.column === p.end.column;
          }, v.prototype.toString = function() {
            return "Range: [" + this.start.row + "/" + this.start.column + "] -> [" + this.end.row + "/" + this.end.column + "]";
          }, v.prototype.contains = function(p, s) {
            return this.compare(p, s) == 0;
          }, v.prototype.compareRange = function(p) {
            var s, l = p.end, e = p.start;
            return s = this.compare(l.row, l.column), s == 1 ? (s = this.compare(e.row, e.column), s == 1 ? 2 : s == 0 ? 1 : 0) : s == -1 ? -2 : (s = this.compare(e.row, e.column), s == -1 ? -1 : s == 1 ? 42 : 0);
          }, v.prototype.comparePoint = function(p) {
            return this.compare(p.row, p.column);
          }, v.prototype.containsRange = function(p) {
            return this.comparePoint(p.start) == 0 && this.comparePoint(p.end) == 0;
          }, v.prototype.intersects = function(p) {
            var s = this.compareRange(p);
            return s == -1 || s == 0 || s == 1;
          }, v.prototype.isEnd = function(p, s) {
            return this.end.row == p && this.end.column == s;
          }, v.prototype.isStart = function(p, s) {
            return this.start.row == p && this.start.column == s;
          }, v.prototype.setStart = function(p, s) {
            typeof p == "object" ? (this.start.column = p.column, this.start.row = p.row) : (this.start.row = p, this.start.column = s);
          }, v.prototype.setEnd = function(p, s) {
            typeof p == "object" ? (this.end.column = p.column, this.end.row = p.row) : (this.end.row = p, this.end.column = s);
          }, v.prototype.inside = function(p, s) {
            return this.compare(p, s) == 0 ? !(this.isEnd(p, s) || this.isStart(p, s)) : !1;
          }, v.prototype.insideStart = function(p, s) {
            return this.compare(p, s) == 0 ? !this.isEnd(p, s) : !1;
          }, v.prototype.insideEnd = function(p, s) {
            return this.compare(p, s) == 0 ? !this.isStart(p, s) : !1;
          }, v.prototype.compare = function(p, s) {
            return !this.isMultiLine() && p === this.start.row ? s < this.start.column ? -1 : s > this.end.column ? 1 : 0 : p < this.start.row ? -1 : p > this.end.row ? 1 : this.start.row === p ? s >= this.start.column ? 0 : -1 : this.end.row === p ? s <= this.end.column ? 0 : 1 : 0;
          }, v.prototype.compareStart = function(p, s) {
            return this.start.row == p && this.start.column == s ? -1 : this.compare(p, s);
          }, v.prototype.compareEnd = function(p, s) {
            return this.end.row == p && this.end.column == s ? 1 : this.compare(p, s);
          }, v.prototype.compareInside = function(p, s) {
            return this.end.row == p && this.end.column == s ? 1 : this.start.row == p && this.start.column == s ? -1 : this.compare(p, s);
          }, v.prototype.clipRows = function(p, s) {
            if (this.end.row > s)
              var l = { row: s + 1, column: 0 };
            else if (this.end.row < p)
              var l = { row: p, column: 0 };
            if (this.start.row > s)
              var e = { row: s + 1, column: 0 };
            else if (this.start.row < p)
              var e = { row: p, column: 0 };
            return v.fromPoints(e || this.start, l || this.end);
          }, v.prototype.extend = function(p, s) {
            var l = this.compare(p, s);
            if (l == 0)
              return this;
            if (l == -1)
              var e = { row: p, column: s };
            else
              var n = { row: p, column: s };
            return v.fromPoints(e || this.start, n || this.end);
          }, v.prototype.isEmpty = function() {
            return this.start.row === this.end.row && this.start.column === this.end.column;
          }, v.prototype.isMultiLine = function() {
            return this.start.row !== this.end.row;
          }, v.prototype.clone = function() {
            return v.fromPoints(this.start, this.end);
          }, v.prototype.collapseRows = function() {
            return this.end.column == 0 ? new v(this.start.row, 0, Math.max(this.start.row, this.end.row - 1), 0) : new v(this.start.row, 0, this.end.row, 0);
          }, v.prototype.toScreenRange = function(p) {
            var s = p.documentToScreenPosition(this.start), l = p.documentToScreenPosition(this.end);
            return new v(s.row, s.column, l.row, l.column);
          }, v.prototype.moveBy = function(p, s) {
            this.start.row += p, this.start.column += s, this.end.row += p, this.end.column += s;
          }, v;
        }()
      );
      f.fromPoints = function(v, p) {
        return new f(v.row, v.column, p.row, p.column);
      }, f.comparePoints = function(v, p) {
        return v.row - p.row || v.column - p.column;
      }, S.Range = f;
    }), ace.define("ace/lib/keys", ["require", "exports", "module", "ace/lib/oop"], function(M, S, R) {
      for (var f = M("./oop"), v = {
        MODIFIER_KEYS: {
          16: "Shift",
          17: "Ctrl",
          18: "Alt",
          224: "Meta",
          91: "MetaLeft",
          92: "MetaRight",
          93: "ContextMenu"
        },
        KEY_MODS: {
          ctrl: 1,
          alt: 2,
          option: 2,
          shift: 4,
          super: 8,
          meta: 8,
          command: 8,
          cmd: 8,
          control: 1
        },
        FUNCTION_KEYS: {
          8: "Backspace",
          9: "Tab",
          13: "Return",
          19: "Pause",
          27: "Esc",
          32: "Space",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "Left",
          38: "Up",
          39: "Right",
          40: "Down",
          44: "Print",
          45: "Insert",
          46: "Delete",
          "-13": "NumpadEnter",
          144: "Numlock",
          145: "Scrolllock"
        },
        PRINTABLE_KEYS: {
          32: " ",
          59: ";",
          61: "=",
          107: "+",
          109: "-",
          110: ".",
          186: ";",
          187: "=",
          188: ",",
          189: "-",
          190: ".",
          191: "/",
          192: "`",
          219: "[",
          220: "\\",
          221: "]",
          222: "'",
          111: "/",
          106: "*"
        }
      }, p = {
        Command: 224,
        Backspace: 8,
        Tab: 9,
        Return: 13,
        Enter: 13,
        Pause: 19,
        Escape: 27,
        PageUp: 33,
        PageDown: 34,
        End: 35,
        Home: 36,
        Insert: 45,
        Delete: 46,
        ArrowLeft: 37,
        ArrowUp: 38,
        ArrowRight: 39,
        ArrowDown: 40,
        Backquote: 192,
        Minus: 189,
        Equal: 187,
        BracketLeft: 219,
        Backslash: 220,
        BracketRight: 221,
        Semicolon: 186,
        Quote: 222,
        Comma: 188,
        Period: 190,
        Slash: 191,
        Space: 32,
        NumpadAdd: 107,
        NumpadDecimal: 110,
        NumpadSubtract: 109,
        NumpadDivide: 111,
        NumpadMultiply: 106
      }, s = 0; s < 10; s++)
        p["Digit" + s] = 48 + s, p["Numpad" + s] = 96 + s, v.PRINTABLE_KEYS[48 + s] = "" + s, v.FUNCTION_KEYS[96 + s] = "Numpad" + s;
      for (var s = 65; s < 91; s++) {
        var l = String.fromCharCode(s + 32);
        p["Key" + l.toUpperCase()] = s, v.PRINTABLE_KEYS[s] = l;
      }
      for (var s = 1; s < 13; s++)
        p["F" + s] = 111 + s, v.FUNCTION_KEYS[111 + s] = "F" + s;
      var e = {
        Shift: 16,
        Control: 17,
        Alt: 18,
        Meta: 224
      };
      for (var n in e)
        p[n] = p[n + "Left"] = p[n + "Right"] = e[n];
      S.$codeToKeyCode = p, v.PRINTABLE_KEYS[173] = "-";
      for (var i in v.FUNCTION_KEYS) {
        var r = v.FUNCTION_KEYS[i].toLowerCase();
        v[r] = parseInt(i, 10);
      }
      for (var i in v.PRINTABLE_KEYS) {
        var r = v.PRINTABLE_KEYS[i].toLowerCase();
        v[r] = parseInt(i, 10);
      }
      f.mixin(v, v.MODIFIER_KEYS), f.mixin(v, v.PRINTABLE_KEYS), f.mixin(v, v.FUNCTION_KEYS), v.enter = v.return, v.escape = v.esc, v.del = v.delete, function() {
        for (var t = ["cmd", "ctrl", "alt", "shift"], o = Math.pow(2, t.length); o--; )
          v.KEY_MODS[o] = t.filter(function(a) {
            return o & v.KEY_MODS[a];
          }).join("-") + "-";
      }(), v.KEY_MODS[0] = "", v.KEY_MODS[-1] = "input-", f.mixin(S, v), S.default = S, S.keyCodeToString = function(t) {
        var o = v[t];
        return typeof o != "string" && (o = String.fromCharCode(t)), o.toLowerCase();
      };
    }), ace.define("ace/lib/event", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function(M, S, R) {
      var f = M("./keys"), v = M("./useragent"), p = null, s = 0, l;
      function e() {
        l = !1;
        try {
          document.createComment("").addEventListener("test", function() {
          }, {
            get passive() {
              return l = { passive: !1 }, !0;
            }
          });
        } catch {
        }
      }
      function n() {
        return l == null && e(), l;
      }
      function i(w, y, m) {
        this.elem = w, this.type = y, this.callback = m;
      }
      i.prototype.destroy = function() {
        t(this.elem, this.type, this.callback), this.elem = this.type = this.callback = void 0;
      };
      var r = S.addListener = function(w, y, m, h) {
        w.addEventListener(y, m, n()), h && h.$toDestroy.push(new i(w, y, m));
      }, t = S.removeListener = function(w, y, m) {
        w.removeEventListener(y, m, n());
      };
      S.stopEvent = function(w) {
        return S.stopPropagation(w), S.preventDefault(w), !1;
      }, S.stopPropagation = function(w) {
        w.stopPropagation && w.stopPropagation();
      }, S.preventDefault = function(w) {
        w.preventDefault && w.preventDefault();
      }, S.getButton = function(w) {
        return w.type == "dblclick" ? 0 : w.type == "contextmenu" || v.isMac && w.ctrlKey && !w.altKey && !w.shiftKey ? 2 : w.button;
      }, S.capture = function(w, y, m) {
        var h = w && w.ownerDocument || document;
        function $(_) {
          y && y(_), m && m(_), t(h, "mousemove", y), t(h, "mouseup", $), t(h, "dragstart", $);
        }
        return r(h, "mousemove", y), r(h, "mouseup", $), r(h, "dragstart", $), $;
      }, S.addMouseWheelListener = function(w, y, m) {
        r(w, "wheel", function(h) {
          var $ = 0.15, _ = h.deltaX || 0, L = h.deltaY || 0;
          switch (h.deltaMode) {
            case h.DOM_DELTA_PIXEL:
              h.wheelX = _ * $, h.wheelY = L * $;
              break;
            case h.DOM_DELTA_LINE:
              var x = 15;
              h.wheelX = _ * x, h.wheelY = L * x;
              break;
            case h.DOM_DELTA_PAGE:
              var D = 150;
              h.wheelX = _ * D, h.wheelY = L * D;
              break;
          }
          y(h);
        }, m);
      }, S.addMultiMouseDownListener = function(w, y, m, h, $) {
        var _ = 0, L, x, D, A = {
          2: "dblclick",
          3: "tripleclick",
          4: "quadclick"
        };
        function C(g) {
          if (S.getButton(g) !== 0 ? _ = 0 : g.detail > 1 ? (_++, _ > 4 && (_ = 1)) : _ = 1, v.isIE) {
            var d = Math.abs(g.clientX - L) > 5 || Math.abs(g.clientY - x) > 5;
            (!D || d) && (_ = 1), D && clearTimeout(D), D = setTimeout(function() {
              D = null;
            }, y[_ - 1] || 600), _ == 1 && (L = g.clientX, x = g.clientY);
          }
          if (g._clicks = _, m[h]("mousedown", g), _ > 4)
            _ = 0;
          else if (_ > 1)
            return m[h](A[_], g);
        }
        Array.isArray(w) || (w = [w]), w.forEach(function(g) {
          r(g, "mousedown", C, $);
        });
      };
      function o(w) {
        return 0 | (w.ctrlKey ? 1 : 0) | (w.altKey ? 2 : 0) | (w.shiftKey ? 4 : 0) | (w.metaKey ? 8 : 0);
      }
      S.getModifierString = function(w) {
        return f.KEY_MODS[o(w)];
      };
      function a(w, y, m) {
        var h = o(y);
        if (!m && y.code && (m = f.$codeToKeyCode[y.code] || m), !v.isMac && p) {
          if (y.getModifierState && (y.getModifierState("OS") || y.getModifierState("Win")) && (h |= 8), p.altGr)
            if ((3 & h) != 3)
              p.altGr = 0;
            else
              return;
          if (m === 18 || m === 17) {
            var $ = y.location;
            if (m === 17 && $ === 1)
              p[m] == 1 && (s = y.timeStamp);
            else if (m === 18 && h === 3 && $ === 2) {
              var _ = y.timeStamp - s;
              _ < 50 && (p.altGr = !0);
            }
          }
        }
        if (m in f.MODIFIER_KEYS && (m = -1), !(!h && m === 13 && y.location === 3 && (w(y, h, -m), y.defaultPrevented))) {
          if (v.isChromeOS && h & 8) {
            if (w(y, h, m), y.defaultPrevented)
              return;
            h &= -9;
          }
          return !h && !(m in f.FUNCTION_KEYS) && !(m in f.PRINTABLE_KEYS) ? !1 : w(y, h, m);
        }
      }
      S.addCommandKeyListener = function(w, y, m) {
        var h = null;
        r(w, "keydown", function($) {
          p[$.keyCode] = (p[$.keyCode] || 0) + 1;
          var _ = a(y, $, $.keyCode);
          return h = $.defaultPrevented, _;
        }, m), r(w, "keypress", function($) {
          h && ($.ctrlKey || $.altKey || $.shiftKey || $.metaKey) && (S.stopEvent($), h = null);
        }, m), r(w, "keyup", function($) {
          p[$.keyCode] = null;
        }, m), p || (c(), r(window, "focus", c));
      };
      function c() {
        p = /* @__PURE__ */ Object.create(null);
      }
      if (typeof window == "object" && window.postMessage && !v.isOldIE) {
        var u = 1;
        S.nextTick = function(w, y) {
          y = y || window;
          var m = "zero-timeout-message-" + u++, h = function($) {
            $.data == m && (S.stopPropagation($), t(y, "message", h), w());
          };
          r(y, "message", h), y.postMessage(m, "*");
        };
      }
      S.$idleBlocked = !1, S.onIdle = function(w, y) {
        return setTimeout(function m() {
          S.$idleBlocked ? setTimeout(m, 100) : w();
        }, y);
      }, S.$idleBlockId = null, S.blockIdle = function(w) {
        S.$idleBlockId && clearTimeout(S.$idleBlockId), S.$idleBlocked = !0, S.$idleBlockId = setTimeout(function() {
          S.$idleBlocked = !1;
        }, w || 100);
      }, S.nextFrame = typeof window == "object" && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame), S.nextFrame ? S.nextFrame = S.nextFrame.bind(window) : S.nextFrame = function(w) {
        setTimeout(w, 17);
      };
    }), ace.define("ace/clipboard", ["require", "exports", "module"], function(M, S, R) {
      var f;
      R.exports = {
        lineMode: !1,
        pasteCancelled: function() {
          return f && f > Date.now() - 50 ? !0 : f = !1;
        },
        cancel: function() {
          f = Date.now();
        }
      };
    }), ace.define("ace/keyboard/textinput", ["require", "exports", "module", "ace/lib/event", "ace/config", "ace/lib/useragent", "ace/lib/dom", "ace/lib/lang", "ace/clipboard", "ace/lib/keys"], function(M, S, R) {
      var f = M("../lib/event"), v = M("../config").nls, p = M("../lib/useragent"), s = M("../lib/dom"), l = M("../lib/lang"), e = M("../clipboard"), n = p.isChrome < 18, i = p.isIE, r = p.isChrome > 63, t = 400, o = M("../lib/keys"), a = o.KEY_MODS, c = p.isIOS, u = c ? /\s/ : /\n/, w = p.isMobile, y;
      y = function(m, h) {
        var $ = s.createElement("textarea");
        $.className = "ace_text-input", $.setAttribute("wrap", "off"), $.setAttribute("autocorrect", "off"), $.setAttribute("autocapitalize", "off"), $.setAttribute("spellcheck", "false"), $.style.opacity = "0", m.insertBefore($, m.firstChild), this.setHost = function(V) {
          h = V;
        };
        var _ = !1, L = !1, x = !1, D = !1, A = "";
        w || ($.style.fontSize = "1px");
        var C = !1, g = !1, d = "", b = 0, k = 0, I = 0, T = Number.MAX_SAFE_INTEGER, O = Number.MIN_SAFE_INTEGER, W = 0;
        try {
          var H = document.activeElement === $;
        } catch {
        }
        this.setNumberOfExtraLines = function(V) {
          if (T = Number.MAX_SAFE_INTEGER, O = Number.MIN_SAFE_INTEGER, V < 0) {
            W = 0;
            return;
          }
          W = V;
        }, this.setAriaLabel = function() {
          var V = "";
          if (h.$textInputAriaLabel && (V += "".concat(h.$textInputAriaLabel, ", ")), h.session) {
            var Z = h.session.selection.cursor.row;
            V += v("text-input.aria-label", "Cursor at row $0", [Z + 1]);
          }
          $.setAttribute("aria-label", V);
        }, this.setAriaOptions = function(V) {
          V.activeDescendant ? ($.setAttribute("aria-haspopup", "true"), $.setAttribute("aria-autocomplete", V.inline ? "both" : "list"), $.setAttribute("aria-activedescendant", V.activeDescendant)) : ($.setAttribute("aria-haspopup", "false"), $.setAttribute("aria-autocomplete", "both"), $.removeAttribute("aria-activedescendant")), V.role && $.setAttribute("role", V.role), V.setLabel && ($.setAttribute("aria-roledescription", v("text-input.aria-roledescription", "editor")), this.setAriaLabel());
        }, this.setAriaOptions({ role: "textbox" }), f.addListener($, "blur", function(V) {
          g || (h.onBlur(V), H = !1);
        }, h), f.addListener($, "focus", function(V) {
          if (!g) {
            if (H = !0, p.isEdge)
              try {
                if (!document.hasFocus())
                  return;
              } catch {
              }
            h.onFocus(V), p.isEdge ? setTimeout(P) : P();
          }
        }, h), this.$focusScroll = !1, this.focus = function() {
          if (this.setAriaOptions({
            setLabel: h.renderer.enableKeyboardAccessibility
          }), A || r || this.$focusScroll == "browser")
            return $.focus({ preventScroll: !0 });
          var V = $.style.top;
          $.style.position = "fixed", $.style.top = "0px";
          try {
            var Z = $.getBoundingClientRect().top != 0;
          } catch {
            return;
          }
          var q = [];
          if (Z)
            for (var re = $.parentElement; re && re.nodeType == 1; )
              q.push(re), re.setAttribute("ace_nocontext", "true"), !re.parentElement && re.getRootNode ? re = re.getRootNode().host : re = re.parentElement;
          $.focus({ preventScroll: !0 }), Z && q.forEach(function(le) {
            le.removeAttribute("ace_nocontext");
          }), setTimeout(function() {
            $.style.position = "", $.style.top == "0px" && ($.style.top = V);
          }, 0);
        }, this.blur = function() {
          $.blur();
        }, this.isFocused = function() {
          return H;
        }, h.on("beforeEndOperation", function() {
          var V = h.curOp, Z = V && V.command && V.command.name;
          if (Z != "insertstring") {
            var q = Z && (V.docChanged || V.selectionChanged);
            x && q && (d = $.value = "", Se()), P();
          }
        }), h.on("changeSelection", this.setAriaLabel);
        var B = function(V, Z) {
          for (var q = Z, re = 1; re <= V - T && re < 2 * W + 1; re++)
            q += h.session.getLine(V - re).length + 1;
          return q;
        }, P = c ? function(V) {
          if (!(!H || _ && !V || D)) {
            V || (V = "");
            var Z = `
 ab` + V + `cde fg
`;
            Z != $.value && ($.value = d = Z);
            var q = 4, re = 4 + (V.length || (h.selection.isEmpty() ? 0 : 1));
            (b != q || k != re) && $.setSelectionRange(q, re), b = q, k = re;
          }
        } : function() {
          if (!(x || D) && !(!H && !j)) {
            x = !0;
            var V = 0, Z = 0, q = "";
            if (h.session) {
              var re = h.selection, le = re.getRange(), fe = re.cursor.row;
              fe === O + 1 ? (T = O + 1, O = T + 2 * W) : fe === T - 1 ? (O = T - 1, T = O - 2 * W) : (fe < T - 1 || fe > O + 1) && (T = fe > W ? fe - W : 0, O = fe > W ? fe + W : 2 * W);
              for (var me = [], pe = T; pe <= O; pe++)
                me.push(h.session.getLine(pe));
              if (q = me.join(`
`), V = B(le.start.row, le.start.column), Z = B(le.end.row, le.end.column), le.start.row < T) {
                var de = h.session.getLine(T - 1);
                V = le.start.row < T - 1 ? 0 : V, Z += de.length + 1, q = de + `
` + q;
              } else if (le.end.row > O) {
                var ce = h.session.getLine(O + 1);
                Z = le.end.row > O + 1 ? ce.length : le.end.column, Z += q.length + 1, q = q + `
` + ce;
              } else w && fe > 0 && (q = `
` + q, Z += 1, V += 1);
              q.length > t && (V < t && Z < t ? q = q.slice(0, t) : (q = `
`, V == Z ? V = Z = 0 : (V = 0, Z = 1)));
              var $e = q + `

`;
              $e != d && ($.value = d = $e, b = k = $e.length);
            }
            if (j && (b = $.selectionStart, k = $.selectionEnd), k != Z || b != V || $.selectionEnd != k)
              try {
                $.setSelectionRange(V, Z), b = V, k = Z;
              } catch {
              }
            x = !1;
          }
        };
        this.resetSelection = P, H && h.onFocus();
        var F = function(V) {
          return V.selectionStart === 0 && V.selectionEnd >= d.length && V.value === d && d && V.selectionEnd !== k;
        }, z = function(V) {
          x || (_ ? _ = !1 : F($) ? (h.selectAll(), P()) : w && $.selectionStart != b && P());
        }, U = null;
        this.setInputHandler = function(V) {
          U = V;
        }, this.getInputHandler = function() {
          return U;
        };
        var j = !1, Y = function(V, Z) {
          if (j && (j = !1), L)
            return P(), V && h.onPaste(V), L = !1, "";
          for (var q = $.selectionStart, re = $.selectionEnd, le = b, fe = d.length - k, me = V, pe = V.length - q, de = V.length - re, ce = 0; le > 0 && d[ce] == V[ce]; )
            ce++, le--;
          for (me = me.slice(ce), ce = 1; fe > 0 && d.length - ce > b - 1 && d[d.length - ce] == V[V.length - ce]; )
            ce++, fe--;
          pe -= ce - 1, de -= ce - 1;
          var $e = me.length - ce + 1;
          if ($e < 0 && (le = -$e, $e = 0), me = me.slice(0, $e), !Z && !me && !pe && !le && !fe && !de)
            return "";
          D = !0;
          var Ke = !1;
          return p.isAndroid && me == ". " && (me = "  ", Ke = !0), me && !le && !fe && !pe && !de || C ? h.onTextInput(me) : h.onTextInput(me, {
            extendLeft: le,
            extendRight: fe,
            restoreStart: pe,
            restoreEnd: de
          }), D = !1, d = V, b = q, k = re, I = de, Ke ? `
` : me;
        }, G = function(V) {
          if (x)
            return xe();
          if (V && V.inputType) {
            if (V.inputType == "historyUndo")
              return h.execCommand("undo");
            if (V.inputType == "historyRedo")
              return h.execCommand("redo");
          }
          var Z = $.value, q = Y(Z, !0);
          (Z.length > t + 100 || u.test(q) || w && b < 1 && b == k) && P();
        }, J = function(V, Z, q) {
          var re = V.clipboardData || window.clipboardData;
          if (!(!re || n)) {
            var le = i || q ? "Text" : "text/plain";
            try {
              return Z ? re.setData(le, Z) !== !1 : re.getData(le);
            } catch (fe) {
              if (!q)
                return J(fe, Z, !0);
            }
          }
        }, ie = function(V, Z) {
          var q = h.getCopyText();
          if (!q)
            return f.preventDefault(V);
          J(V, q) ? (c && (P(q), _ = q, setTimeout(function() {
            _ = !1;
          }, 10)), Z ? h.onCut() : h.onCopy(), f.preventDefault(V)) : (_ = !0, $.value = q, $.select(), setTimeout(function() {
            _ = !1, P(), Z ? h.onCut() : h.onCopy();
          }));
        }, he = function(V) {
          ie(V, !0);
        }, ve = function(V) {
          ie(V, !1);
        }, ue = function(V) {
          var Z = J(V);
          e.pasteCancelled() || (typeof Z == "string" ? (Z && h.onPaste(Z, V), p.isIE && setTimeout(P), f.preventDefault(V)) : ($.value = "", L = !0));
        };
        f.addCommandKeyListener($, function(V, Z, q) {
          if (!x)
            return h.onCommandKey(V, Z, q);
        }, h), f.addListener($, "select", z, h), f.addListener($, "input", G, h), f.addListener($, "cut", he, h), f.addListener($, "copy", ve, h), f.addListener($, "paste", ue, h), (!("oncut" in $) || !("oncopy" in $) || !("onpaste" in $)) && f.addListener(m, "keydown", function(V) {
          if (!(p.isMac && !V.metaKey || !V.ctrlKey))
            switch (V.keyCode) {
              case 67:
                ve(V);
                break;
              case 86:
                ue(V);
                break;
              case 88:
                he(V);
                break;
            }
        }, h);
        var Ce = function(V) {
          if (!(x || !h.onCompositionStart || h.$readOnly) && (x = {}, !C)) {
            V.data && (x.useTextareaForIME = !1), setTimeout(xe, 0), h._signal("compositionStart"), h.on("mousedown", Te);
            var Z = h.getSelectionRange();
            Z.end.row = Z.start.row, Z.end.column = Z.start.column, x.markerRange = Z, x.selectionStart = b, h.onCompositionStart(x), x.useTextareaForIME ? (d = $.value = "", b = 0, k = 0) : ($.msGetInputContext && (x.context = $.msGetInputContext()), $.getInputContext && (x.context = $.getInputContext()));
          }
        }, xe = function() {
          if (!(!x || !h.onCompositionUpdate || h.$readOnly)) {
            if (C)
              return Te();
            if (x.useTextareaForIME)
              h.onCompositionUpdate($.value);
            else {
              var V = $.value;
              Y(V), x.markerRange && (x.context && (x.markerRange.start.column = x.selectionStart = x.context.compositionStartOffset), x.markerRange.end.column = x.markerRange.start.column + k - x.selectionStart + I);
            }
          }
        }, Se = function(V) {
          !h.onCompositionEnd || h.$readOnly || (x = !1, h.onCompositionEnd(), h.off("mousedown", Te), V && G());
        };
        function Te() {
          g = !0, $.blur(), $.focus(), g = !1;
        }
        var bt = l.delayedCall(xe, 50).schedule.bind(null, null);
        function an(V) {
          V.keyCode == 27 && $.value.length < $.selectionStart && (x || (d = $.value), b = k = -1, P()), bt();
        }
        f.addListener($, "compositionstart", Ce, h), f.addListener($, "compositionupdate", xe, h), f.addListener($, "keyup", an, h), f.addListener($, "keydown", bt, h), f.addListener($, "compositionend", Se, h), this.getElement = function() {
          return $;
        }, this.setCommandMode = function(V) {
          C = V, $.readOnly = !1;
        }, this.setReadOnly = function(V) {
          C || ($.readOnly = V);
        }, this.setCopyWithEmptySelection = function(V) {
        }, this.onContextMenu = function(V) {
          j = !0, P(), h._emit("nativecontextmenu", { target: h, domEvent: V }), this.moveToMouse(V, !0);
        }, this.moveToMouse = function(V, Z) {
          A || (A = $.style.cssText), $.style.cssText = (Z ? "z-index:100000;" : "") + (p.isIE ? "opacity:0.1;" : "") + "text-indent: -" + (b + k) * h.renderer.characterWidth * 0.5 + "px;";
          var q = h.container.getBoundingClientRect(), re = s.computedStyle(h.container), le = q.top + (parseInt(re.borderTopWidth) || 0), fe = q.left + (parseInt(re.borderLeftWidth) || 0), me = q.bottom - le - $.clientHeight - 2, pe = function(de) {
            s.translate($, de.clientX - fe - 2, Math.min(de.clientY - le - 2, me));
          };
          pe(V), V.type == "mousedown" && (h.renderer.$isMousePressed = !0, clearTimeout(at), p.isWin && f.capture(h.container, pe, tt));
        }, this.onContextMenuClose = tt;
        var at;
        function tt() {
          clearTimeout(at), at = setTimeout(function() {
            A && ($.style.cssText = A, A = ""), h.renderer.$isMousePressed = !1, h.renderer.$keepTextAreaAtCursor && h.renderer.$moveTextAreaToCursor();
          }, 0);
        }
        var lt = function(V) {
          h.textInput.onContextMenu(V), tt();
        };
        f.addListener($, "mouseup", lt, h), f.addListener($, "mousedown", function(V) {
          V.preventDefault(), tt();
        }, h), f.addListener(h.renderer.scroller, "contextmenu", lt, h), f.addListener($, "contextmenu", lt, h), c && ln(m, h, $);
        function ln(V, Z, q) {
          var re = null, le = !1;
          q.addEventListener("keydown", function(me) {
            re && clearTimeout(re), le = !0;
          }, !0), q.addEventListener("keyup", function(me) {
            re = setTimeout(function() {
              le = !1;
            }, 100);
          }, !0);
          var fe = function(me) {
            if (document.activeElement === q && !(le || x || Z.$mouseHandler.isMousePressed) && !_) {
              var pe = q.selectionStart, de = q.selectionEnd, ce = null, $e = 0;
              if (pe == 0 ? ce = o.up : pe == 1 ? ce = o.home : de > k && d[de] == `
` ? ce = o.end : pe < b && d[pe - 1] == " " ? (ce = o.left, $e = a.option) : pe < b || pe == b && k != b && pe == de ? ce = o.left : de > k && d.slice(0, de).split(`
`).length > 2 ? ce = o.down : de > k && d[de - 1] == " " ? (ce = o.right, $e = a.option) : (de > k || de == k && k != b && pe == de) && (ce = o.right), pe !== de && ($e |= a.shift), ce) {
                var Ke = Z.onCommandKey({}, $e, ce);
                if (!Ke && Z.commands) {
                  ce = o.keyCodeToString(ce);
                  var Ct = Z.commands.findKeyCommand($e, ce);
                  Ct && Z.execCommand(Ct);
                }
                b = pe, k = de, P("");
              }
            }
          };
          document.addEventListener("selectionchange", fe), Z.on("destroy", function() {
            document.removeEventListener("selectionchange", fe);
          });
        }
        this.destroy = function() {
          $.parentElement && $.parentElement.removeChild($);
        };
      }, S.TextInput = y, S.$setUserAgentForTests = function(m, h) {
        w = m, c = h;
      };
    }), ace.define("ace/mouse/default_handlers", ["require", "exports", "module", "ace/lib/useragent"], function(M, S, R) {
      var f = M("../lib/useragent"), v = 0, p = 550, s = (
        /** @class */
        function() {
          function n(i) {
            i.$clickSelection = null;
            var r = i.editor;
            r.setDefaultHandler("mousedown", this.onMouseDown.bind(i)), r.setDefaultHandler("dblclick", this.onDoubleClick.bind(i)), r.setDefaultHandler("tripleclick", this.onTripleClick.bind(i)), r.setDefaultHandler("quadclick", this.onQuadClick.bind(i)), r.setDefaultHandler("mousewheel", this.onMouseWheel.bind(i));
            var t = [
              "select",
              "startSelect",
              "selectEnd",
              "selectAllEnd",
              "selectByWordsEnd",
              "selectByLinesEnd",
              "dragWait",
              "dragWaitEnd",
              "focusWait"
            ];
            t.forEach(function(o) {
              i[o] = this[o];
            }, this), i.selectByLines = this.extendSelectionBy.bind(i, "getLineRange"), i.selectByWords = this.extendSelectionBy.bind(i, "getWordRange");
          }
          return n.prototype.onMouseDown = function(i) {
            var r = i.inSelection(), t = i.getDocumentPosition();
            this.mousedownEvent = i;
            var o = this.editor, a = i.getButton();
            if (a !== 0) {
              var c = o.getSelectionRange(), u = c.isEmpty();
              (u || a == 1) && o.selection.moveToPosition(t), a == 2 && (o.textInput.onContextMenu(i.domEvent), f.isMozilla || i.preventDefault());
              return;
            }
            if (this.mousedownEvent.time = Date.now(), r && !o.isFocused() && (o.focus(), this.$focusTimeout && !this.$clickSelection && !o.inMultiSelectMode)) {
              this.setState("focusWait"), this.captureMouse(i);
              return;
            }
            return this.captureMouse(i), this.startSelect(t, i.domEvent._clicks > 1), i.preventDefault();
          }, n.prototype.startSelect = function(i, r) {
            i = i || this.editor.renderer.screenToTextCoordinates(this.x, this.y);
            var t = this.editor;
            this.mousedownEvent && (this.mousedownEvent.getShiftKey() ? t.selection.selectToPosition(i) : r || t.selection.moveToPosition(i), r || this.select(), t.setStyle("ace_selecting"), this.setState("select"));
          }, n.prototype.select = function() {
            var i, r = this.editor, t = r.renderer.screenToTextCoordinates(this.x, this.y);
            if (this.$clickSelection) {
              var o = this.$clickSelection.comparePoint(t);
              if (o == -1)
                i = this.$clickSelection.end;
              else if (o == 1)
                i = this.$clickSelection.start;
              else {
                var a = e(this.$clickSelection, t);
                t = a.cursor, i = a.anchor;
              }
              r.selection.setSelectionAnchor(i.row, i.column);
            }
            r.selection.selectToPosition(t), r.renderer.scrollCursorIntoView();
          }, n.prototype.extendSelectionBy = function(i) {
            var r, t = this.editor, o = t.renderer.screenToTextCoordinates(this.x, this.y), a = t.selection[i](o.row, o.column);
            if (this.$clickSelection) {
              var c = this.$clickSelection.comparePoint(a.start), u = this.$clickSelection.comparePoint(a.end);
              if (c == -1 && u <= 0)
                r = this.$clickSelection.end, (a.end.row != o.row || a.end.column != o.column) && (o = a.start);
              else if (u == 1 && c >= 0)
                r = this.$clickSelection.start, (a.start.row != o.row || a.start.column != o.column) && (o = a.end);
              else if (c == -1 && u == 1)
                o = a.end, r = a.start;
              else {
                var w = e(this.$clickSelection, o);
                o = w.cursor, r = w.anchor;
              }
              t.selection.setSelectionAnchor(r.row, r.column);
            }
            t.selection.selectToPosition(o), t.renderer.scrollCursorIntoView();
          }, n.prototype.selectByLinesEnd = function() {
            this.$clickSelection = null, this.editor.unsetStyle("ace_selecting");
          }, n.prototype.focusWait = function() {
            var i = l(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y), r = Date.now();
            (i > v || r - this.mousedownEvent.time > this.$focusTimeout) && this.startSelect(this.mousedownEvent.getDocumentPosition());
          }, n.prototype.onDoubleClick = function(i) {
            var r = i.getDocumentPosition(), t = this.editor, o = t.session, a = o.getBracketRange(r);
            a ? (a.isEmpty() && (a.start.column--, a.end.column++), this.setState("select")) : (a = t.selection.getWordRange(r.row, r.column), this.setState("selectByWords")), this.$clickSelection = a, this.select();
          }, n.prototype.onTripleClick = function(i) {
            var r = i.getDocumentPosition(), t = this.editor;
            this.setState("selectByLines");
            var o = t.getSelectionRange();
            o.isMultiLine() && o.contains(r.row, r.column) ? (this.$clickSelection = t.selection.getLineRange(o.start.row), this.$clickSelection.end = t.selection.getLineRange(o.end.row).end) : this.$clickSelection = t.selection.getLineRange(r.row), this.select();
          }, n.prototype.onQuadClick = function(i) {
            var r = this.editor;
            r.selectAll(), this.$clickSelection = r.getSelectionRange(), this.setState("selectAll");
          }, n.prototype.onMouseWheel = function(i) {
            if (!i.getAccelKey()) {
              i.getShiftKey() && i.wheelY && !i.wheelX && (i.wheelX = i.wheelY, i.wheelY = 0);
              var r = this.editor;
              this.$lastScroll || (this.$lastScroll = { t: 0, vx: 0, vy: 0, allowed: 0 });
              var t = this.$lastScroll, o = i.domEvent.timeStamp, a = o - t.t, c = a ? i.wheelX / a : t.vx, u = a ? i.wheelY / a : t.vy;
              a < p && (c = (c + t.vx) / 2, u = (u + t.vy) / 2);
              var w = Math.abs(c / u), y = !1;
              if (w >= 1 && r.renderer.isScrollableBy(i.wheelX * i.speed, 0) && (y = !0), w <= 1 && r.renderer.isScrollableBy(0, i.wheelY * i.speed) && (y = !0), y)
                t.allowed = o;
              else if (o - t.allowed < p) {
                var m = Math.abs(c) <= 1.5 * Math.abs(t.vx) && Math.abs(u) <= 1.5 * Math.abs(t.vy);
                m ? (y = !0, t.allowed = o) : t.allowed = 0;
              }
              if (t.t = o, t.vx = c, t.vy = u, y)
                return r.renderer.scrollBy(i.wheelX * i.speed, i.wheelY * i.speed), i.stop();
            }
          }, n;
        }()
      );
      s.prototype.selectEnd = s.prototype.selectByLinesEnd, s.prototype.selectAllEnd = s.prototype.selectByLinesEnd, s.prototype.selectByWordsEnd = s.prototype.selectByLinesEnd, S.DefaultHandlers = s;
      function l(n, i, r, t) {
        return Math.sqrt(Math.pow(r - n, 2) + Math.pow(t - i, 2));
      }
      function e(n, i) {
        if (n.start.row == n.end.row)
          var r = 2 * i.column - n.start.column - n.end.column;
        else if (n.start.row == n.end.row - 1 && !n.start.column && !n.end.column)
          var r = i.column - 4;
        else
          var r = 2 * i.row - n.start.row - n.end.row;
        return r < 0 ? { cursor: n.start, anchor: n.end } : { cursor: n.end, anchor: n.start };
      }
    }), ace.define("ace/lib/scroll", ["require", "exports", "module"], function(M, S, R) {
      S.preventParentScroll = function(v) {
        v.stopPropagation();
        var p = v.currentTarget, s = p.scrollHeight > p.clientHeight;
        s || v.preventDefault();
      };
    }), ace.define("ace/tooltip", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/range", "ace/lib/scroll"], function(M, S, R) {
      var f = this && this.__extends || /* @__PURE__ */ function() {
        var o = function(a, c) {
          return o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, w) {
            u.__proto__ = w;
          } || function(u, w) {
            for (var y in w) Object.prototype.hasOwnProperty.call(w, y) && (u[y] = w[y]);
          }, o(a, c);
        };
        return function(a, c) {
          if (typeof c != "function" && c !== null)
            throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
          o(a, c);
          function u() {
            this.constructor = a;
          }
          a.prototype = c === null ? Object.create(c) : (u.prototype = c.prototype, new u());
        };
      }(), v = this && this.__values || function(o) {
        var a = typeof Symbol == "function" && Symbol.iterator, c = a && o[a], u = 0;
        if (c) return c.call(o);
        if (o && typeof o.length == "number") return {
          next: function() {
            return o && u >= o.length && (o = void 0), { value: o && o[u++], done: !o };
          }
        };
        throw new TypeError(a ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }, p = M("./lib/dom");
      M("./lib/event");
      var s = M("./range").Range, l = M("./lib/scroll").preventParentScroll, e = "ace_tooltip", n = (
        /** @class */
        function() {
          function o(a) {
            this.isOpen = !1, this.$element = null, this.$parentNode = a;
          }
          return o.prototype.$init = function() {
            return this.$element = p.createElement("div"), this.$element.className = e, this.$element.style.display = "none", this.$parentNode.appendChild(this.$element), this.$element;
          }, o.prototype.getElement = function() {
            return this.$element || this.$init();
          }, o.prototype.setText = function(a) {
            this.getElement().textContent = a;
          }, o.prototype.setHtml = function(a) {
            this.getElement().innerHTML = a;
          }, o.prototype.setPosition = function(a, c) {
            this.getElement().style.left = a + "px", this.getElement().style.top = c + "px";
          }, o.prototype.setClassName = function(a) {
            p.addCssClass(this.getElement(), a);
          }, o.prototype.setTheme = function(a) {
            this.$element.className = e + " " + (a.isDark ? "ace_dark " : "") + (a.cssClass || "");
          }, o.prototype.show = function(a, c, u) {
            a != null && this.setText(a), c != null && u != null && this.setPosition(c, u), this.isOpen || (this.getElement().style.display = "block", this.isOpen = !0);
          }, o.prototype.hide = function(a) {
            this.isOpen && (this.getElement().style.display = "none", this.getElement().className = e, this.isOpen = !1);
          }, o.prototype.getHeight = function() {
            return this.getElement().offsetHeight;
          }, o.prototype.getWidth = function() {
            return this.getElement().offsetWidth;
          }, o.prototype.destroy = function() {
            this.isOpen = !1, this.$element && this.$element.parentNode && this.$element.parentNode.removeChild(this.$element);
          }, o;
        }()
      ), i = (
        /** @class */
        function() {
          function o() {
            this.popups = [];
          }
          return o.prototype.addPopup = function(a) {
            this.popups.push(a), this.updatePopups();
          }, o.prototype.removePopup = function(a) {
            var c = this.popups.indexOf(a);
            c !== -1 && (this.popups.splice(c, 1), this.updatePopups());
          }, o.prototype.updatePopups = function() {
            var a, c, u, w;
            this.popups.sort(function(A, C) {
              return C.priority - A.priority;
            });
            var y = [];
            try {
              for (var m = v(this.popups), h = m.next(); !h.done; h = m.next()) {
                var $ = h.value, _ = !0;
                try {
                  for (var L = (u = void 0, v(y)), x = L.next(); !x.done; x = L.next()) {
                    var D = x.value;
                    if (this.doPopupsOverlap(D, $)) {
                      _ = !1;
                      break;
                    }
                  }
                } catch (A) {
                  u = { error: A };
                } finally {
                  try {
                    x && !x.done && (w = L.return) && w.call(L);
                  } finally {
                    if (u) throw u.error;
                  }
                }
                _ ? y.push($) : $.hide();
              }
            } catch (A) {
              a = { error: A };
            } finally {
              try {
                h && !h.done && (c = m.return) && c.call(m);
              } finally {
                if (a) throw a.error;
              }
            }
          }, o.prototype.doPopupsOverlap = function(a, c) {
            var u = a.getElement().getBoundingClientRect(), w = c.getElement().getBoundingClientRect();
            return u.left < w.right && u.right > w.left && u.top < w.bottom && u.bottom > w.top;
          }, o;
        }()
      ), r = new i();
      S.popupManager = r, S.Tooltip = n;
      var t = (
        /** @class */
        function(o) {
          f(a, o);
          function a(c) {
            c === void 0 && (c = document.body);
            var u = o.call(this, c) || this;
            u.timeout = void 0, u.lastT = 0, u.idleTime = 350, u.lastEvent = void 0, u.onMouseOut = u.onMouseOut.bind(u), u.onMouseMove = u.onMouseMove.bind(u), u.waitForHover = u.waitForHover.bind(u), u.hide = u.hide.bind(u);
            var w = u.getElement();
            return w.style.whiteSpace = "pre-wrap", w.style.pointerEvents = "auto", w.addEventListener("mouseout", u.onMouseOut), w.tabIndex = -1, w.addEventListener("blur", (function() {
              w.contains(document.activeElement) || this.hide();
            }).bind(u)), w.addEventListener("wheel", l), u;
          }
          return a.prototype.addToEditor = function(c) {
            c.on("mousemove", this.onMouseMove), c.on("mousedown", this.hide), c.renderer.getMouseEventTarget().addEventListener("mouseout", this.onMouseOut, !0);
          }, a.prototype.removeFromEditor = function(c) {
            c.off("mousemove", this.onMouseMove), c.off("mousedown", this.hide), c.renderer.getMouseEventTarget().removeEventListener("mouseout", this.onMouseOut, !0), this.timeout && (clearTimeout(this.timeout), this.timeout = null);
          }, a.prototype.onMouseMove = function(c, u) {
            this.lastEvent = c, this.lastT = Date.now();
            var w = u.$mouseHandler.isMousePressed;
            if (this.isOpen) {
              var y = this.lastEvent && this.lastEvent.getDocumentPosition();
              (!this.range || !this.range.contains(y.row, y.column) || w || this.isOutsideOfText(this.lastEvent)) && this.hide();
            }
            this.timeout || w || (this.lastEvent = c, this.timeout = setTimeout(this.waitForHover, this.idleTime));
          }, a.prototype.waitForHover = function() {
            this.timeout && clearTimeout(this.timeout);
            var c = Date.now() - this.lastT;
            if (this.idleTime - c > 10) {
              this.timeout = setTimeout(this.waitForHover, this.idleTime - c);
              return;
            }
            this.timeout = null, this.lastEvent && !this.isOutsideOfText(this.lastEvent) && this.$gatherData(this.lastEvent, this.lastEvent.editor);
          }, a.prototype.isOutsideOfText = function(c) {
            var u = c.editor, w = c.getDocumentPosition(), y = u.session.getLine(w.row);
            if (w.column == y.length) {
              var m = u.renderer.pixelToScreenCoordinates(c.clientX, c.clientY), h = u.session.documentToScreenPosition(w.row, w.column);
              if (h.column != m.column || h.row != m.row)
                return !0;
            }
            return !1;
          }, a.prototype.setDataProvider = function(c) {
            this.$gatherData = c;
          }, a.prototype.showForRange = function(c, u, w, y) {
            var m = 10;
            if (!(y && y != this.lastEvent) && !(this.isOpen && document.activeElement == this.getElement())) {
              var h = c.renderer;
              this.isOpen || (r.addPopup(this), this.$registerCloseEvents(), this.setTheme(h.theme)), this.isOpen = !0, this.addMarker(u, c.session), this.range = s.fromPoints(u.start, u.end);
              var $ = h.textToScreenCoordinates(u.start.row, u.start.column), _ = h.scroller.getBoundingClientRect();
              $.pageX < _.left && ($.pageX = _.left);
              var L = this.getElement();
              L.innerHTML = "", L.appendChild(w), L.style.maxHeight = "", L.style.display = "block";
              var x = L.clientHeight, D = L.clientWidth, A = window.innerHeight - $.pageY - h.lineHeight, C = !0;
              $.pageY - x < 0 && $.pageY < A && (C = !1), L.style.maxHeight = (C ? $.pageY : A) - m + "px", L.style.top = C ? "" : $.pageY + h.lineHeight + "px", L.style.bottom = C ? window.innerHeight - $.pageY + "px" : "", L.style.left = Math.min($.pageX, window.innerWidth - D - m) + "px";
            }
          }, a.prototype.addMarker = function(c, u) {
            this.marker && this.$markerSession.removeMarker(this.marker), this.$markerSession = u, this.marker = u && u.addMarker(c, "ace_highlight-marker", "text");
          }, a.prototype.hide = function(c) {
            !c && document.activeElement == this.getElement() || c && c.target && (c.type != "keydown" || c.ctrlKey || c.metaKey) && this.$element.contains(c.target) || (this.lastEvent = null, this.timeout && clearTimeout(this.timeout), this.timeout = null, this.addMarker(null), this.isOpen && (this.$removeCloseEvents(), this.getElement().style.display = "none", this.isOpen = !1, r.removePopup(this)));
          }, a.prototype.$registerCloseEvents = function() {
            window.addEventListener("keydown", this.hide, !0), window.addEventListener("wheel", this.hide, !0), window.addEventListener("mousedown", this.hide, !0);
          }, a.prototype.$removeCloseEvents = function() {
            window.removeEventListener("keydown", this.hide, !0), window.removeEventListener("wheel", this.hide, !0), window.removeEventListener("mousedown", this.hide, !0);
          }, a.prototype.onMouseOut = function(c) {
            this.timeout && (clearTimeout(this.timeout), this.timeout = null), this.lastEvent = null, this.isOpen && (!c.relatedTarget || this.getElement().contains(c.relatedTarget) || c && c.currentTarget.contains(c.relatedTarget) || c.relatedTarget.classList.contains("ace_content") || this.hide());
          }, a;
        }(n)
      );
      S.HoverTooltip = t;
    }), ace.define("ace/mouse/default_gutter_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/tooltip", "ace/config"], function(M, S, R) {
      var f = this && this.__extends || /* @__PURE__ */ function() {
        var o = function(a, c) {
          return o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, w) {
            u.__proto__ = w;
          } || function(u, w) {
            for (var y in w) Object.prototype.hasOwnProperty.call(w, y) && (u[y] = w[y]);
          }, o(a, c);
        };
        return function(a, c) {
          if (typeof c != "function" && c !== null)
            throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
          o(a, c);
          function u() {
            this.constructor = a;
          }
          a.prototype = c === null ? Object.create(c) : (u.prototype = c.prototype, new u());
        };
      }(), v = this && this.__values || function(o) {
        var a = typeof Symbol == "function" && Symbol.iterator, c = a && o[a], u = 0;
        if (c) return c.call(o);
        if (o && typeof o.length == "number") return {
          next: function() {
            return o && u >= o.length && (o = void 0), { value: o && o[u++], done: !o };
          }
        };
        throw new TypeError(a ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }, p = M("../lib/dom"), s = M("../lib/event"), l = M("../tooltip").Tooltip, e = M("../config").nls, n = 5, i = 3;
      S.GUTTER_TOOLTIP_LEFT_OFFSET = n, S.GUTTER_TOOLTIP_TOP_OFFSET = i;
      function r(o) {
        var a = o.editor, c = a.renderer.$gutterLayer, u = new t(a, !0);
        o.editor.setDefaultHandler("guttermousedown", function(_) {
          if (!(!a.isFocused() || _.getButton() != 0)) {
            var L = c.getRegion(_);
            if (L != "foldWidgets") {
              var x = _.getDocumentPosition().row, D = a.session.selection;
              if (_.getShiftKey())
                D.selectTo(x, 0);
              else {
                if (_.domEvent.detail == 2)
                  return a.selectAll(), _.preventDefault();
                o.$clickSelection = a.selection.getLineRange(x);
              }
              return o.setState("selectByLines"), o.captureMouse(_), _.preventDefault();
            }
          }
        });
        var w, y;
        function m() {
          var _ = y.getDocumentPosition().row, L = a.session.getLength();
          if (_ == L) {
            var x = a.renderer.pixelToScreenCoordinates(0, y.y).row, D = y.$pos;
            if (x > a.session.documentToScreenRow(D.row, D.column))
              return h();
          }
          if (u.showTooltip(_), !!u.isOpen)
            if (a.on("mousewheel", h), a.on("changeSession", h), window.addEventListener("keydown", h, !0), o.$tooltipFollowsMouse)
              $(y);
            else {
              var A = y.getGutterRow(), C = c.$lines.get(A);
              if (C) {
                var g = C.element.querySelector(".ace_gutter_annotation"), d = g.getBoundingClientRect(), b = u.getElement().style;
                b.left = d.right - n + "px", b.top = d.bottom - i + "px";
              } else
                $(y);
            }
        }
        function h(_) {
          _ && _.type === "keydown" && (_.ctrlKey || _.metaKey) || _ && _.type === "mouseout" && (!_.relatedTarget || u.getElement().contains(_.relatedTarget)) || (w && (w = clearTimeout(w)), u.isOpen && (u.hideTooltip(), a.off("mousewheel", h), a.off("changeSession", h), window.removeEventListener("keydown", h, !0)));
        }
        function $(_) {
          u.setPosition(_.x, _.y);
        }
        o.editor.setDefaultHandler("guttermousemove", function(_) {
          var L = _.domEvent.target || _.domEvent.srcElement;
          if (p.hasCssClass(L, "ace_fold-widget") || p.hasCssClass(L, "ace_custom-widget"))
            return h();
          u.isOpen && o.$tooltipFollowsMouse && $(_), y = _, !w && (w = setTimeout(function() {
            w = null, y && !o.isMousePressed && m();
          }, 50));
        }), s.addListener(a.renderer.$gutter, "mouseout", function(_) {
          y = null, u.isOpen && (w = setTimeout(function() {
            w = null, h(_);
          }, 50));
        }, a);
      }
      S.GutterHandler = r;
      var t = (
        /** @class */
        function(o) {
          f(a, o);
          function a(c, u) {
            u === void 0 && (u = !1);
            var w = o.call(this, c.container) || this;
            w.editor = c, w.visibleTooltipRow;
            var y = w.getElement();
            return y.setAttribute("role", "tooltip"), y.style.pointerEvents = "auto", u && (w.onMouseOut = w.onMouseOut.bind(w), y.addEventListener("mouseout", w.onMouseOut)), w;
          }
          return a.prototype.onMouseOut = function(c) {
            this.isOpen && (!c.relatedTarget || this.getElement().contains(c.relatedTarget) || c && c.currentTarget.contains(c.relatedTarget) || this.hideTooltip());
          }, a.prototype.setPosition = function(c, u) {
            var w = window.innerWidth || document.documentElement.clientWidth, y = window.innerHeight || document.documentElement.clientHeight, m = this.getWidth(), h = this.getHeight();
            c += 15, u += 15, c + m > w && (c -= c + m - w), u + h > y && (u -= 20 + h), l.prototype.setPosition.call(this, c, u);
          }, Object.defineProperty(a, "annotationLabels", {
            get: function() {
              return {
                error: {
                  singular: e("gutter-tooltip.aria-label.error.singular", "error"),
                  plural: e("gutter-tooltip.aria-label.error.plural", "errors")
                },
                security: {
                  singular: e("gutter-tooltip.aria-label.security.singular", "security finding"),
                  plural: e("gutter-tooltip.aria-label.security.plural", "security findings")
                },
                warning: {
                  singular: e("gutter-tooltip.aria-label.warning.singular", "warning"),
                  plural: e("gutter-tooltip.aria-label.warning.plural", "warnings")
                },
                info: {
                  singular: e("gutter-tooltip.aria-label.info.singular", "information message"),
                  plural: e("gutter-tooltip.aria-label.info.plural", "information messages")
                },
                hint: {
                  singular: e("gutter-tooltip.aria-label.hint.singular", "suggestion"),
                  plural: e("gutter-tooltip.aria-label.hint.plural", "suggestions")
                }
              };
            },
            enumerable: !1,
            configurable: !0
          }), a.prototype.showTooltip = function(c) {
            var u, w = this.editor.renderer.$gutterLayer, y = w.$annotations[c], m;
            y ? m = {
              displayText: Array.from(y.displayText),
              type: Array.from(y.type)
            } : m = { displayText: [], type: [] };
            var h = w.session.getFoldLine(c);
            if (h && w.$showFoldedAnnotations) {
              for (var $ = { error: [], security: [], warning: [], info: [], hint: [] }, _ = { error: 1, security: 2, warning: 3, info: 4, hint: 5 }, L, x = c + 1; x <= h.end.row; x++)
                if (w.$annotations[x])
                  for (var D = 0; D < w.$annotations[x].text.length; D++) {
                    var A = w.$annotations[x].type[D];
                    $[A].push(w.$annotations[x].text[D]), (!L || _[A] < _[L]) && (L = A);
                  }
              if (["error", "security", "warning"].includes(L)) {
                var C = "".concat(a.annotationsToSummaryString($), " in folded code.");
                m.displayText.push(C), m.type.push(L + "_fold");
              }
            }
            if (m.displayText.length === 0)
              return this.hideTooltip();
            for (var g = { error: [], security: [], warning: [], info: [], hint: [] }, d = w.$useSvgGutterIcons ? "ace_icon_svg" : "ace_icon", x = 0; x < m.displayText.length; x++) {
              var b = p.createElement("span"), k = p.createElement("span");
              (u = k.classList).add.apply(u, ["ace_".concat(m.type[x]), d]), k.setAttribute("aria-label", "".concat(a.annotationLabels[m.type[x].replace("_fold", "")].singular)), k.setAttribute("role", "img"), k.appendChild(p.createTextNode(" ")), b.appendChild(k), b.appendChild(p.createTextNode(m.displayText[x])), b.appendChild(p.createElement("br")), g[m.type[x].replace("_fold", "")].push(b);
            }
            var I = this.getElement();
            p.removeChildren(I), g.error.forEach(function(T) {
              return I.appendChild(T);
            }), g.security.forEach(function(T) {
              return I.appendChild(T);
            }), g.warning.forEach(function(T) {
              return I.appendChild(T);
            }), g.info.forEach(function(T) {
              return I.appendChild(T);
            }), g.hint.forEach(function(T) {
              return I.appendChild(T);
            }), I.setAttribute("aria-live", "polite"), this.isOpen || (this.setTheme(this.editor.renderer.theme), this.setClassName("ace_gutter-tooltip")), this.show(), this.visibleTooltipRow = c, this.editor._signal("showGutterTooltip", this);
          }, a.prototype.hideTooltip = function() {
            this.isOpen && (this.$element.removeAttribute("aria-live"), this.hide(), this.visibleTooltipRow = void 0, this.editor._signal("hideGutterTooltip", this));
          }, a.annotationsToSummaryString = function(c) {
            var u, w, y = [], m = ["error", "security", "warning", "info", "hint"];
            try {
              for (var h = v(m), $ = h.next(); !$.done; $ = h.next()) {
                var _ = $.value;
                if (c[_].length) {
                  var L = c[_].length === 1 ? a.annotationLabels[_].singular : a.annotationLabels[_].plural;
                  y.push("".concat(c[_].length, " ").concat(L));
                }
              }
            } catch (x) {
              u = { error: x };
            } finally {
              try {
                $ && !$.done && (w = h.return) && w.call(h);
              } finally {
                if (u) throw u.error;
              }
            }
            return y.join(", ");
          }, a;
        }(l)
      );
      S.GutterTooltip = t;
    }), ace.define("ace/mouse/mouse_event", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function(M, S, R) {
      var f = M("../lib/event"), v = M("../lib/useragent"), p = (
        /** @class */
        function() {
          function s(l, e) {
            this.speed, this.wheelX, this.wheelY, this.domEvent = l, this.editor = e, this.x = this.clientX = l.clientX, this.y = this.clientY = l.clientY, this.$pos = null, this.$inSelection = null, this.propagationStopped = !1, this.defaultPrevented = !1;
          }
          return s.prototype.stopPropagation = function() {
            f.stopPropagation(this.domEvent), this.propagationStopped = !0;
          }, s.prototype.preventDefault = function() {
            f.preventDefault(this.domEvent), this.defaultPrevented = !0;
          }, s.prototype.stop = function() {
            this.stopPropagation(), this.preventDefault();
          }, s.prototype.getDocumentPosition = function() {
            return this.$pos ? this.$pos : (this.$pos = this.editor.renderer.screenToTextCoordinates(this.clientX, this.clientY), this.$pos);
          }, s.prototype.getGutterRow = function() {
            var l = this.getDocumentPosition().row, e = this.editor.session.documentToScreenRow(l, 0), n = this.editor.session.documentToScreenRow(this.editor.renderer.$gutterLayer.$lines.get(0).row, 0);
            return e - n;
          }, s.prototype.inSelection = function() {
            if (this.$inSelection !== null)
              return this.$inSelection;
            var l = this.editor, e = l.getSelectionRange();
            if (e.isEmpty())
              this.$inSelection = !1;
            else {
              var n = this.getDocumentPosition();
              this.$inSelection = e.contains(n.row, n.column);
            }
            return this.$inSelection;
          }, s.prototype.getButton = function() {
            return f.getButton(this.domEvent);
          }, s.prototype.getShiftKey = function() {
            return this.domEvent.shiftKey;
          }, s.prototype.getAccelKey = function() {
            return v.isMac ? this.domEvent.metaKey : this.domEvent.ctrlKey;
          }, s;
        }()
      );
      S.MouseEvent = p;
    }), ace.define("ace/mouse/dragdrop_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/lib/useragent"], function(M, S, R) {
      var f = M("../lib/dom"), v = M("../lib/event"), p = M("../lib/useragent"), s = 200, l = 200, e = 5;
      function n(r) {
        var t = r.editor, o = f.createElement("div");
        o.style.cssText = "top:-100px;position:absolute;z-index:2147483647;opacity:0.5", o.textContent = " ";
        var a = ["dragWait", "dragWaitEnd", "startDrag", "dragReadyEnd", "onMouseDrag"];
        a.forEach(function(B) {
          r[B] = this[B];
        }, this), t.on("mousedown", this.onMouseDown.bind(r));
        var c = t.container, u, w, y, m, h, $, _ = 0, L, x, D, A, C;
        this.onDragStart = function(B) {
          if (this.cancelDrag || !c.draggable) {
            var P = this;
            return setTimeout(function() {
              P.startSelect(), P.captureMouse(B);
            }, 0), B.preventDefault();
          }
          h = t.getSelectionRange();
          var F = B.dataTransfer;
          F.effectAllowed = t.getReadOnly() ? "copy" : "copyMove", t.container.appendChild(o), F.setDragImage && F.setDragImage(o, 0, 0), setTimeout(function() {
            t.container.removeChild(o);
          }), F.clearData(), F.setData("Text", t.session.getTextRange()), x = !0, this.setState("drag");
        }, this.onDragEnd = function(B) {
          if (c.draggable = !1, x = !1, this.setState(null), !t.getReadOnly()) {
            var P = B.dataTransfer.dropEffect;
            !L && P == "move" && t.session.remove(t.getSelectionRange()), t.$resetCursorStyle();
          }
          this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle("");
        }, this.onDragEnter = function(B) {
          if (!(t.getReadOnly() || !W(B.dataTransfer)))
            return w = B.clientX, y = B.clientY, u || k(), _++, B.dataTransfer.dropEffect = L = H(B), v.preventDefault(B);
        }, this.onDragOver = function(B) {
          if (!(t.getReadOnly() || !W(B.dataTransfer)))
            return w = B.clientX, y = B.clientY, u || (k(), _++), T !== null && (T = null), B.dataTransfer.dropEffect = L = H(B), v.preventDefault(B);
        }, this.onDragLeave = function(B) {
          if (_--, _ <= 0 && u)
            return I(), L = null, v.preventDefault(B);
        }, this.onDrop = function(B) {
          if ($) {
            var P = B.dataTransfer;
            if (x)
              switch (L) {
                case "move":
                  h.contains($.row, $.column) ? h = {
                    start: $,
                    end: $
                  } : h = t.moveText(h, $);
                  break;
                case "copy":
                  h = t.moveText(h, $, !0);
                  break;
              }
            else {
              var F = P.getData("Text");
              h = {
                start: $,
                end: t.session.insert($, F)
              }, t.focus(), L = null;
            }
            return I(), v.preventDefault(B);
          }
        }, v.addListener(c, "dragstart", this.onDragStart.bind(r), t), v.addListener(c, "dragend", this.onDragEnd.bind(r), t), v.addListener(c, "dragenter", this.onDragEnter.bind(r), t), v.addListener(c, "dragover", this.onDragOver.bind(r), t), v.addListener(c, "dragleave", this.onDragLeave.bind(r), t), v.addListener(c, "drop", this.onDrop.bind(r), t);
        function g(B, P) {
          var F = Date.now(), z = !P || B.row != P.row, U = !P || B.column != P.column;
          if (!A || z || U)
            t.moveCursorToPosition(B), A = F, C = { x: w, y };
          else {
            var j = i(C.x, C.y, w, y);
            j > e ? A = null : F - A >= l && (t.renderer.scrollCursorIntoView(), A = null);
          }
        }
        function d(B, P) {
          var F = Date.now(), z = t.renderer.layerConfig.lineHeight, U = t.renderer.layerConfig.characterWidth, j = t.renderer.scroller.getBoundingClientRect(), Y = {
            x: {
              left: w - j.left,
              right: j.right - w
            },
            y: {
              top: y - j.top,
              bottom: j.bottom - y
            }
          }, G = Math.min(Y.x.left, Y.x.right), J = Math.min(Y.y.top, Y.y.bottom), ie = { row: B.row, column: B.column };
          G / U <= 2 && (ie.column += Y.x.left < Y.x.right ? -3 : 2), J / z <= 1 && (ie.row += Y.y.top < Y.y.bottom ? -1 : 1);
          var he = B.row != ie.row, ve = B.column != ie.column, ue = !P || B.row != P.row;
          he || ve && !ue ? D ? F - D >= s && t.renderer.scrollCursorIntoView(ie) : D = F : D = null;
        }
        function b() {
          var B = $;
          $ = t.renderer.screenToTextCoordinates(w, y), g($, B), d($, B);
        }
        function k() {
          h = t.selection.toOrientedRange(), u = t.session.addMarker(h, "ace_selection", t.getSelectionStyle()), t.clearSelection(), t.isFocused() && t.renderer.$cursorLayer.setBlinking(!1), clearInterval(m), b(), m = setInterval(b, 20), _ = 0, v.addListener(document, "mousemove", O);
        }
        function I() {
          clearInterval(m), t.session.removeMarker(u), u = null, t.selection.fromOrientedRange(h), t.isFocused() && !x && t.$resetCursorStyle(), h = null, $ = null, _ = 0, D = null, A = null, v.removeListener(document, "mousemove", O);
        }
        var T = null;
        function O() {
          T == null && (T = setTimeout(function() {
            T != null && u && I();
          }, 20));
        }
        function W(B) {
          var P = B.types;
          return !P || Array.prototype.some.call(P, function(F) {
            return F == "text/plain" || F == "Text";
          });
        }
        function H(B) {
          var P = ["copy", "copymove", "all", "uninitialized"], F = ["move", "copymove", "linkmove", "all", "uninitialized"], z = p.isMac ? B.altKey : B.ctrlKey, U = "uninitialized";
          try {
            U = B.dataTransfer.effectAllowed.toLowerCase();
          } catch {
          }
          var j = "none";
          return z && P.indexOf(U) >= 0 ? j = "copy" : F.indexOf(U) >= 0 ? j = "move" : P.indexOf(U) >= 0 && (j = "copy"), j;
        }
      }
      (function() {
        this.dragWait = function() {
          var r = Date.now() - this.mousedownEvent.time;
          r > this.editor.getDragDelay() && this.startDrag();
        }, this.dragWaitEnd = function() {
          var r = this.editor.container;
          r.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()), this.selectEnd();
        }, this.dragReadyEnd = function(r) {
          this.editor.$resetCursorStyle(), this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle(""), this.dragWaitEnd();
        }, this.startDrag = function() {
          this.cancelDrag = !1;
          var r = this.editor, t = r.container;
          t.draggable = !0, r.renderer.$cursorLayer.setBlinking(!1), r.setStyle("ace_dragging");
          var o = p.isWin ? "default" : "move";
          r.renderer.setCursorStyle(o), this.setState("dragReady");
        }, this.onMouseDrag = function(r) {
          var t = this.editor.container;
          if (p.isIE && this.state == "dragReady") {
            var o = i(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
            o > 3 && t.dragDrop();
          }
          if (this.state === "dragWait") {
            var o = i(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
            o > 0 && (t.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()));
          }
        }, this.onMouseDown = function(r) {
          if (this.$dragEnabled) {
            this.mousedownEvent = r;
            var t = this.editor, o = r.inSelection(), a = r.getButton(), c = r.domEvent.detail || 1;
            if (c === 1 && a === 0 && o) {
              if (r.editor.inMultiSelectMode && (r.getAccelKey() || r.getShiftKey()))
                return;
              this.mousedownEvent.time = Date.now();
              var u = r.domEvent.target || r.domEvent.srcElement;
              if ("unselectable" in u && (u.unselectable = "on"), t.getDragDelay()) {
                if (p.isWebKit) {
                  this.cancelDrag = !0;
                  var w = t.container;
                  w.draggable = !0;
                }
                this.setState("dragWait");
              } else
                this.startDrag();
              this.captureMouse(r, this.onMouseDrag.bind(this)), r.defaultPrevented = !0;
            }
          }
        };
      }).call(n.prototype);
      function i(r, t, o, a) {
        return Math.sqrt(Math.pow(o - r, 2) + Math.pow(a - t, 2));
      }
      S.DragdropHandler = n;
    }), ace.define("ace/mouse/touch_handler", ["require", "exports", "module", "ace/mouse/mouse_event", "ace/lib/event", "ace/lib/dom"], function(M, S, R) {
      var f = M("./mouse_event").MouseEvent, v = M("../lib/event"), p = M("../lib/dom");
      S.addTouchListeners = function(s, l) {
        var e = "scroll", n, i, r, t, o, a, c = 0, u, w = 0, y = 0, m = 0, h, $;
        function _() {
          var g = window.navigator && window.navigator.clipboard, d = !1, b = function() {
            var T = l.getCopyText(), O = l.session.getUndoManager().hasUndo();
            $.replaceChild(p.buildDom(d ? [
              "span",
              !T && k("selectall") && ["span", { class: "ace_mobile-button", action: "selectall" }, "Select All"],
              T && k("copy") && ["span", { class: "ace_mobile-button", action: "copy" }, "Copy"],
              T && k("cut") && ["span", { class: "ace_mobile-button", action: "cut" }, "Cut"],
              g && k("paste") && ["span", { class: "ace_mobile-button", action: "paste" }, "Paste"],
              O && k("undo") && ["span", { class: "ace_mobile-button", action: "undo" }, "Undo"],
              k("find") && ["span", { class: "ace_mobile-button", action: "find" }, "Find"],
              k("openCommandPalette") && ["span", { class: "ace_mobile-button", action: "openCommandPalette" }, "Palette"]
            ] : ["span"]), $.firstChild);
          }, k = function(T) {
            return l.commands.canExecute(T, l);
          }, I = function(T) {
            var O = T.target.getAttribute("action");
            if (O == "more" || !d)
              return d = !d, b();
            O == "paste" ? g.readText().then(function(W) {
              l.execCommand(O, W);
            }) : O && ((O == "cut" || O == "copy") && (g ? g.writeText(l.getCopyText()) : document.execCommand("copy")), l.execCommand(O)), $.firstChild.style.display = "none", d = !1, O != "openCommandPalette" && l.focus();
          };
          $ = p.buildDom([
            "div",
            {
              class: "ace_mobile-menu",
              ontouchstart: function(T) {
                e = "menu", T.stopPropagation(), T.preventDefault(), l.textInput.focus();
              },
              ontouchend: function(T) {
                T.stopPropagation(), T.preventDefault(), I(T);
              },
              onclick: I
            },
            ["span"],
            ["span", { class: "ace_mobile-button", action: "more" }, "..."]
          ], l.container);
        }
        function L() {
          if (!l.getOption("enableMobileMenu")) {
            $ && x();
            return;
          }
          $ || _();
          var g = l.selection.cursor, d = l.renderer.textToScreenCoordinates(g.row, g.column), b = l.renderer.textToScreenCoordinates(0, 0).pageX, k = l.renderer.scrollLeft, I = l.container.getBoundingClientRect();
          $.style.top = d.pageY - I.top - 3 + "px", d.pageX - I.left < I.width - 70 ? ($.style.left = "", $.style.right = "10px") : ($.style.right = "", $.style.left = b + k - I.left + "px"), $.style.display = "", $.firstChild.style.display = "none", l.on("input", x);
        }
        function x(g) {
          $ && ($.style.display = "none"), l.off("input", x);
        }
        function D() {
          o = null, clearTimeout(o);
          var g = l.selection.getRange(), d = g.contains(u.row, u.column);
          (g.isEmpty() || !d) && (l.selection.moveToPosition(u), l.selection.selectWord()), e = "wait", L();
        }
        function A() {
          o = null, clearTimeout(o), l.selection.moveToPosition(u);
          var g = w >= 2 ? l.selection.getLineRange(u.row) : l.session.getBracketRange(u);
          g && !g.isEmpty() ? l.selection.setRange(g) : l.selection.selectWord(), e = "wait";
        }
        v.addListener(s, "contextmenu", function(g) {
          if (h) {
            var d = l.textInput.getElement();
            d.focus();
          }
        }, l), v.addListener(s, "touchstart", function(g) {
          var d = g.touches;
          if (o || d.length > 1) {
            clearTimeout(o), o = null, r = -1, e = "zoom";
            return;
          }
          h = l.$mouseHandler.isMousePressed = !0;
          var b = l.renderer.layerConfig.lineHeight, k = l.renderer.layerConfig.lineHeight, I = g.timeStamp;
          t = I;
          var T = d[0], O = T.clientX, W = T.clientY;
          Math.abs(n - O) + Math.abs(i - W) > b && (r = -1), n = g.clientX = O, i = g.clientY = W, y = m = 0;
          var H = new f(g, l);
          if (u = H.getDocumentPosition(), I - r < 500 && d.length == 1 && !c)
            w++, g.preventDefault(), g.button = 0, A();
          else {
            w = 0;
            var B = l.selection.cursor, P = l.selection.isEmpty() ? B : l.selection.anchor, F = l.renderer.$cursorLayer.getPixelPosition(B, !0), z = l.renderer.$cursorLayer.getPixelPosition(P, !0), U = l.renderer.scroller.getBoundingClientRect(), j = l.renderer.layerConfig.offset, Y = l.renderer.scrollLeft, G = function(he, ve) {
              return he = he / k, ve = ve / b - 0.75, he * he + ve * ve;
            };
            if (g.clientX < U.left) {
              e = "zoom";
              return;
            }
            var J = G(g.clientX - U.left - F.left + Y, g.clientY - U.top - F.top + j), ie = G(g.clientX - U.left - z.left + Y, g.clientY - U.top - z.top + j);
            J < 3.5 && ie < 3.5 && (e = J > ie ? "cursor" : "anchor"), ie < 3.5 ? e = "anchor" : J < 3.5 ? e = "cursor" : e = "scroll", o = setTimeout(D, 450);
          }
          r = I;
        }, l), v.addListener(s, "touchend", function(g) {
          h = l.$mouseHandler.isMousePressed = !1, a && clearInterval(a), e == "zoom" ? (e = "", c = 0) : o ? (l.selection.moveToPosition(u), c = 0, L()) : e == "scroll" ? (C(), x()) : L(), clearTimeout(o), o = null;
        }, l), v.addListener(s, "touchmove", function(g) {
          o && (clearTimeout(o), o = null);
          var d = g.touches;
          if (!(d.length > 1 || e == "zoom")) {
            var b = d[0], k = n - b.clientX, I = i - b.clientY;
            if (e == "wait")
              if (k * k + I * I > 4)
                e = "cursor";
              else
                return g.preventDefault();
            n = b.clientX, i = b.clientY, g.clientX = b.clientX, g.clientY = b.clientY;
            var T = g.timeStamp, O = T - t;
            if (t = T, e == "scroll") {
              var W = new f(g, l);
              W.speed = 1, W.wheelX = k, W.wheelY = I, 10 * Math.abs(k) < Math.abs(I) && (k = 0), 10 * Math.abs(I) < Math.abs(k) && (I = 0), O != 0 && (y = k / O, m = I / O), l._emit("mousewheel", W), W.propagationStopped || (y = m = 0);
            } else {
              var H = new f(g, l), B = H.getDocumentPosition();
              e == "cursor" ? l.selection.moveCursorToPosition(B) : e == "anchor" && l.selection.setSelectionAnchor(B.row, B.column), l.renderer.scrollCursorIntoView(B), g.preventDefault();
            }
          }
        }, l);
        function C() {
          c += 60, a = setInterval(function() {
            c-- <= 0 && (clearInterval(a), a = null), Math.abs(y) < 0.01 && (y = 0), Math.abs(m) < 0.01 && (m = 0), c < 20 && (y = 0.9 * y), c < 20 && (m = 0.9 * m);
            var g = l.session.getScrollTop();
            l.renderer.scrollBy(10 * y, 10 * m), g == l.session.getScrollTop() && (c = 0);
          }, 10);
        }
      };
    }), ace.define("ace/mouse/mouse_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/mouse/default_handlers", "ace/mouse/default_gutter_handler", "ace/mouse/mouse_event", "ace/mouse/dragdrop_handler", "ace/mouse/touch_handler", "ace/config"], function(M, S, R) {
      var f = M("../lib/event"), v = M("../lib/useragent"), p = M("./default_handlers").DefaultHandlers, s = M("./default_gutter_handler").GutterHandler, l = M("./mouse_event").MouseEvent, e = M("./dragdrop_handler").DragdropHandler, n = M("./touch_handler").addTouchListeners, i = M("../config"), r = (
        /** @class */
        function() {
          function t(o) {
            this.$dragDelay, this.$dragEnabled, this.$mouseMoved, this.mouseEvent, this.$focusTimeout;
            var a = this;
            this.editor = o, new p(this), new s(this), new e(this);
            var c = function(y) {
              var m = !document.hasFocus || !document.hasFocus() || !o.isFocused() && document.activeElement == (o.textInput && o.textInput.getElement());
              m && window.focus(), o.focus(), setTimeout(function() {
                o.isFocused() || o.focus();
              });
            }, u = o.renderer.getMouseEventTarget();
            f.addListener(u, "click", this.onMouseEvent.bind(this, "click"), o), f.addListener(u, "mousemove", this.onMouseMove.bind(this, "mousemove"), o), f.addMultiMouseDownListener([
              u,
              o.renderer.scrollBarV && o.renderer.scrollBarV.inner,
              o.renderer.scrollBarH && o.renderer.scrollBarH.inner,
              o.textInput && o.textInput.getElement()
            ].filter(Boolean), [400, 300, 250], this, "onMouseEvent", o), f.addMouseWheelListener(o.container, this.onMouseWheel.bind(this, "mousewheel"), o), n(o.container, o);
            var w = o.renderer.$gutter;
            f.addListener(w, "mousedown", this.onMouseEvent.bind(this, "guttermousedown"), o), f.addListener(w, "click", this.onMouseEvent.bind(this, "gutterclick"), o), f.addListener(w, "dblclick", this.onMouseEvent.bind(this, "gutterdblclick"), o), f.addListener(w, "mousemove", this.onMouseEvent.bind(this, "guttermousemove"), o), f.addListener(u, "mousedown", c, o), f.addListener(w, "mousedown", c, o), v.isIE && o.renderer.scrollBarV && (f.addListener(o.renderer.scrollBarV.element, "mousedown", c, o), f.addListener(o.renderer.scrollBarH.element, "mousedown", c, o)), o.on(
              "mousemove",
              function(y) {
                if (!(a.state || a.$dragDelay || !a.$dragEnabled)) {
                  var m = o.renderer.screenToTextCoordinates(y.x, y.y), h = o.session.selection.getRange(), $ = o.renderer;
                  !h.isEmpty() && h.insideStart(m.row, m.column) ? $.setCursorStyle("default") : $.setCursorStyle("");
                }
              },
              //@ts-expect-error TODO: seems mistyping - should be boolean
              o
            );
          }
          return t.prototype.onMouseEvent = function(o, a) {
            this.editor.session && this.editor._emit(o, new l(a, this.editor));
          }, t.prototype.onMouseMove = function(o, a) {
            var c = this.editor._eventRegistry && this.editor._eventRegistry.mousemove;
            !c || !c.length || this.editor._emit(o, new l(a, this.editor));
          }, t.prototype.onMouseWheel = function(o, a) {
            var c = new l(a, this.editor);
            c.speed = this.$scrollSpeed * 2, c.wheelX = a.wheelX, c.wheelY = a.wheelY, this.editor._emit(o, c);
          }, t.prototype.setState = function(o) {
            this.state = o;
          }, t.prototype.captureMouse = function(o, a) {
            this.x = o.x, this.y = o.y, this.isMousePressed = !0;
            var c = this.editor, u = this.editor.renderer;
            u.$isMousePressed = !0;
            var w = this, y = function(L) {
              if (L) {
                if (v.isWebKit && !L.which && w.releaseMouse)
                  return w.releaseMouse();
                w.x = L.clientX, w.y = L.clientY, a && a(L), w.mouseEvent = new l(L, w.editor), w.$mouseMoved = !0;
              }
            }, m = function(L) {
              c.off("beforeEndOperation", $), clearInterval(_), c.session && h(), w[w.state + "End"] && w[w.state + "End"](L), w.state = "", w.isMousePressed = u.$isMousePressed = !1, u.$keepTextAreaAtCursor && u.$moveTextAreaToCursor(), w.$onCaptureMouseMove = w.releaseMouse = null, L && w.onMouseEvent("mouseup", L), c.endOperation();
            }, h = function() {
              w[w.state] && w[w.state](), w.$mouseMoved = !1;
            };
            if (v.isOldIE && o.domEvent.type == "dblclick")
              return setTimeout(function() {
                m(o);
              });
            var $ = function(L) {
              w.releaseMouse && c.curOp.command.name && c.curOp.selectionChanged && (w[w.state + "End"] && w[w.state + "End"](), w.state = "", w.releaseMouse());
            };
            c.on("beforeEndOperation", $), c.startOperation({ command: { name: "mouse" } }), w.$onCaptureMouseMove = y, w.releaseMouse = f.capture(this.editor.container, y, m);
            var _ = setInterval(h, 20);
          }, t.prototype.cancelContextMenu = function() {
            var o = (function(a) {
              a && a.domEvent && a.domEvent.type != "contextmenu" || (this.editor.off("nativecontextmenu", o), a && a.domEvent && f.stopEvent(a.domEvent));
            }).bind(this);
            setTimeout(o, 10), this.editor.on("nativecontextmenu", o);
          }, t.prototype.destroy = function() {
            this.releaseMouse && this.releaseMouse();
          }, t;
        }()
      );
      r.prototype.releaseMouse = null, i.defineOptions(r.prototype, "mouseHandler", {
        scrollSpeed: { initialValue: 2 },
        dragDelay: { initialValue: v.isMac ? 150 : 0 },
        dragEnabled: { initialValue: !0 },
        focusTimeout: { initialValue: 0 },
        tooltipFollowsMouse: { initialValue: !0 }
      }), S.MouseHandler = r;
    }), ace.define("ace/mouse/fold_handler", ["require", "exports", "module", "ace/lib/dom"], function(M, S, R) {
      var f = M("../lib/dom"), v = (
        /** @class */
        /* @__PURE__ */ function() {
          function p(s) {
            s.on("click", function(l) {
              var e = l.getDocumentPosition(), n = s.session, i = n.getFoldAt(e.row, e.column, 1);
              i && (l.getAccelKey() ? n.removeFold(i) : n.expandFold(i), l.stop());
              var r = l.domEvent && l.domEvent.target;
              r && f.hasCssClass(r, "ace_inline_button") && f.hasCssClass(r, "ace_toggle_wrap") && (n.setOption("wrap", !n.getUseWrapMode()), s.renderer.scrollCursorIntoView());
            }), s.on("gutterclick", function(l) {
              var e = s.renderer.$gutterLayer.getRegion(l);
              if (e == "foldWidgets") {
                var n = l.getDocumentPosition().row, i = s.session;
                i.foldWidgets && i.foldWidgets[n] && s.session.onFoldWidgetClick(n, l), s.isFocused() || s.focus(), l.stop();
              }
            }), s.on("gutterdblclick", function(l) {
              var e = s.renderer.$gutterLayer.getRegion(l);
              if (e == "foldWidgets") {
                var n = l.getDocumentPosition().row, i = s.session, r = i.getParentFoldRangeData(n, !0), t = r.range || r.firstRange;
                if (t) {
                  n = t.start.row;
                  var o = i.getFoldAt(n, i.getLine(n).length, 1);
                  o ? i.removeFold(o) : (i.addFold("...", t), s.renderer.scrollCursorIntoView({ row: t.start.row, column: 0 }));
                }
                l.stop();
              }
            });
          }
          return p;
        }()
      );
      S.FoldHandler = v;
    }), ace.define("ace/keyboard/keybinding", ["require", "exports", "module", "ace/lib/keys", "ace/lib/event"], function(M, S, R) {
      var f = M("../lib/keys"), v = M("../lib/event"), p = (
        /** @class */
        function() {
          function s(l) {
            this.$editor = l, this.$data = { editor: l }, this.$handlers = [], this.setDefaultHandler(l.commands);
          }
          return s.prototype.setDefaultHandler = function(l) {
            this.removeKeyboardHandler(this.$defaultHandler), this.$defaultHandler = l, this.addKeyboardHandler(l, 0);
          }, s.prototype.setKeyboardHandler = function(l) {
            var e = this.$handlers;
            if (e[e.length - 1] != l) {
              for (; e[e.length - 1] && e[e.length - 1] != this.$defaultHandler; )
                this.removeKeyboardHandler(e[e.length - 1]);
              this.addKeyboardHandler(l, 1);
            }
          }, s.prototype.addKeyboardHandler = function(l, e) {
            if (l) {
              typeof l == "function" && !l.handleKeyboard && (l.handleKeyboard = l);
              var n = this.$handlers.indexOf(l);
              n != -1 && this.$handlers.splice(n, 1), e == null ? this.$handlers.push(l) : this.$handlers.splice(e, 0, l), n == -1 && l.attach && l.attach(this.$editor);
            }
          }, s.prototype.removeKeyboardHandler = function(l) {
            var e = this.$handlers.indexOf(l);
            return e == -1 ? !1 : (this.$handlers.splice(e, 1), l.detach && l.detach(this.$editor), !0);
          }, s.prototype.getKeyboardHandler = function() {
            return this.$handlers[this.$handlers.length - 1];
          }, s.prototype.getStatusText = function() {
            var l = this.$data, e = l.editor;
            return this.$handlers.map(function(n) {
              return n.getStatusText && n.getStatusText(e, l) || "";
            }).filter(Boolean).join(" ");
          }, s.prototype.$callKeyboardHandlers = function(l, e, n, i) {
            for (var r, t = !1, o = this.$editor.commands, a = this.$handlers.length; a-- && (r = this.$handlers[a].handleKeyboard(
              this.$data,
              l,
              e,
              n,
              i
            ), !(!(!r || !r.command) && (r.command == "null" ? t = !0 : t = o.exec(r.command, this.$editor, r.args, i), t && i && l != -1 && r.passEvent != !0 && r.command.passEvent != !0 && v.stopEvent(i), t))); )
              ;
            return !t && l == -1 && (r = { command: "insertstring" }, t = o.exec("insertstring", this.$editor, e)), t && this.$editor._signal && this.$editor._signal("keyboardActivity", r), t;
          }, s.prototype.onCommandKey = function(l, e, n) {
            var i = f.keyCodeToString(n);
            return this.$callKeyboardHandlers(e, i, n, l);
          }, s.prototype.onTextInput = function(l) {
            return this.$callKeyboardHandlers(-1, l);
          }, s;
        }()
      );
      S.KeyBinding = p;
    }), ace.define("ace/lib/bidiutil", ["require", "exports", "module"], function(M, S, R) {
      var f = 0, v = 0, p = !1, s = !1, l = !1, e = [
        [0, 3, 0, 1, 0, 0, 0],
        [0, 3, 0, 1, 2, 2, 0],
        [0, 3, 0, 17, 2, 0, 1],
        [0, 3, 5, 5, 4, 1, 0],
        [0, 3, 21, 21, 4, 0, 1],
        [0, 3, 5, 5, 4, 2, 0]
      ], n = [
        [2, 0, 1, 1, 0, 1, 0],
        [2, 0, 1, 1, 0, 2, 0],
        [2, 0, 2, 1, 3, 2, 0],
        [2, 0, 2, 33, 3, 1, 1]
      ], i = 0, r = 1, t = 0, o = 1, a = 2, c = 3, u = 4, w = 5, y = 6, m = 7, h = 8, $ = 9, _ = 10, L = 11, x = 12, D = 13, A = 14, C = 15, g = 16, d = 17, b = 18, k = [
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        y,
        w,
        y,
        h,
        w,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        w,
        w,
        w,
        y,
        h,
        u,
        u,
        L,
        L,
        L,
        u,
        u,
        u,
        u,
        u,
        _,
        $,
        _,
        $,
        $,
        a,
        a,
        a,
        a,
        a,
        a,
        a,
        a,
        a,
        a,
        $,
        u,
        u,
        u,
        u,
        u,
        u,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        u,
        u,
        u,
        u,
        u,
        u,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        t,
        u,
        u,
        u,
        u,
        b,
        b,
        b,
        b,
        b,
        b,
        w,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        b,
        $,
        u,
        L,
        L,
        L,
        L,
        u,
        u,
        u,
        u,
        t,
        u,
        u,
        b,
        u,
        u,
        L,
        L,
        a,
        a,
        u,
        t,
        u,
        u,
        u,
        a,
        t,
        u,
        u,
        u,
        u,
        u
      ], I = [
        h,
        h,
        h,
        h,
        h,
        h,
        h,
        h,
        h,
        h,
        h,
        b,
        b,
        b,
        t,
        o,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        h,
        w,
        D,
        A,
        C,
        g,
        d,
        $,
        L,
        L,
        L,
        L,
        L,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        $,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        u,
        h
      ];
      function T(B, P, F, z) {
        var U = f ? n : e, j = null, Y = null, G = null, J = 0, ie = null, he = null, ve = -1, ue = null, Ce = null, xe = [];
        if (!z)
          for (ue = 0, z = []; ue < F; ue++)
            z[ue] = H(B[ue]);
        for (v = f, p = !1, s = !1, l = !1, Ce = 0; Ce < F; Ce++) {
          if (j = J, xe[Ce] = Y = W(B, z, xe, Ce), J = U[j][Y], ie = J & 240, J &= 15, P[Ce] = G = U[J][5], ie > 0)
            if (ie == 16) {
              for (ue = ve; ue < Ce; ue++)
                P[ue] = 1;
              ve = -1;
            } else
              ve = -1;
          if (he = U[J][6], he)
            ve == -1 && (ve = Ce);
          else if (ve > -1) {
            for (ue = ve; ue < Ce; ue++)
              P[ue] = G;
            ve = -1;
          }
          z[Ce] == w && (P[Ce] = 0), v |= G;
        }
        if (l) {
          for (ue = 0; ue < F; ue++)
            if (z[ue] == y) {
              P[ue] = f;
              for (var Se = ue - 1; Se >= 0 && z[Se] == h; Se--)
                P[Se] = f;
            }
        }
      }
      function O(B, P, F) {
        if (!(v < B)) {
          if (B == 1 && f == r && !s) {
            F.reverse();
            return;
          }
          for (var z = F.length, U = 0, j, Y, G, J; U < z; ) {
            if (P[U] >= B) {
              for (j = U + 1; j < z && P[j] >= B; )
                j++;
              for (Y = U, G = j - 1; Y < G; Y++, G--)
                J = F[Y], F[Y] = F[G], F[G] = J;
              U = j;
            }
            U++;
          }
        }
      }
      function W(B, P, F, z) {
        var U = P[z], j, Y, G, J;
        switch (U) {
          case t:
          case o:
            p = !1;
          case u:
          case c:
            return U;
          case a:
            return p ? c : a;
          case m:
            return p = !0, o;
          case h:
            return u;
          case $:
            return z < 1 || z + 1 >= P.length || (j = F[z - 1]) != a && j != c || (Y = P[z + 1]) != a && Y != c ? u : (p && (Y = c), Y == j ? Y : u);
          case _:
            return j = z > 0 ? F[z - 1] : w, j == a && z + 1 < P.length && P[z + 1] == a ? a : u;
          case L:
            if (z > 0 && F[z - 1] == a)
              return a;
            if (p)
              return u;
            for (J = z + 1, G = P.length; J < G && P[J] == L; )
              J++;
            return J < G && P[J] == a ? a : u;
          case x:
            for (G = P.length, J = z + 1; J < G && P[J] == x; )
              J++;
            if (J < G) {
              var ie = B[z], he = ie >= 1425 && ie <= 2303 || ie == 64286;
              if (j = P[J], he && (j == o || j == m))
                return o;
            }
            return z < 1 || (j = P[z - 1]) == w ? u : F[z - 1];
          case w:
            return p = !1, s = !0, f;
          case y:
            return l = !0, u;
          case D:
          case A:
          case g:
          case d:
          case C:
            p = !1;
          case b:
            return u;
        }
      }
      function H(B) {
        var P = B.charCodeAt(0), F = P >> 8;
        return F == 0 ? P > 191 ? t : k[P] : F == 5 ? /[\u0591-\u05f4]/.test(B) ? o : t : F == 6 ? /[\u0610-\u061a\u064b-\u065f\u06d6-\u06e4\u06e7-\u06ed]/.test(B) ? x : /[\u0660-\u0669\u066b-\u066c]/.test(B) ? c : P == 1642 ? L : /[\u06f0-\u06f9]/.test(B) ? a : m : F == 32 && P <= 8287 ? I[P & 255] : F == 254 && P >= 65136 ? m : u;
      }
      S.L = t, S.R = o, S.EN = a, S.ON_R = 3, S.AN = 4, S.R_H = 5, S.B = 6, S.RLE = 7, S.DOT = "·", S.doBidiReorder = function(B, P, F) {
        if (B.length < 2)
          return {};
        var z = B.split(""), U = new Array(z.length), j = new Array(z.length), Y = [];
        f = F ? r : i, T(z, Y, z.length, P);
        for (var G = 0; G < U.length; U[G] = G, G++)
          ;
        O(2, Y, U), O(1, Y, U);
        for (var G = 0; G < U.length - 1; G++)
          P[G] === c ? Y[G] = S.AN : Y[G] === o && (P[G] > m && P[G] < D || P[G] === u || P[G] === b) ? Y[G] = S.ON_R : G > 0 && z[G - 1] === "ل" && /\u0622|\u0623|\u0625|\u0627/.test(z[G]) && (Y[G - 1] = Y[G] = S.R_H, G++);
        z[z.length - 1] === S.DOT && (Y[z.length - 1] = S.B), z[0] === "‫" && (Y[0] = S.RLE);
        for (var G = 0; G < U.length; G++)
          j[G] = Y[U[G]];
        return { logicalFromVisual: U, bidiLevels: j };
      }, S.hasBidiCharacters = function(B, P) {
        for (var F = !1, z = 0; z < B.length; z++)
          P[z] = H(B.charAt(z)), !F && (P[z] == o || P[z] == m || P[z] == c) && (F = !0);
        return F;
      }, S.getVisualFromLogicalIdx = function(B, P) {
        for (var F = 0; F < P.logicalFromVisual.length; F++)
          if (P.logicalFromVisual[F] == B)
            return F;
        return 0;
      };
    }), ace.define("ace/bidihandler", ["require", "exports", "module", "ace/lib/bidiutil", "ace/lib/lang"], function(M, S, R) {
      var f = M("./lib/bidiutil"), v = M("./lib/lang"), p = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\u202B]/, s = (
        /** @class */
        function() {
          function l(e) {
            this.session = e, this.bidiMap = {}, this.currentRow = null, this.bidiUtil = f, this.charWidths = [], this.EOL = "¬", this.showInvisibles = !0, this.isRtlDir = !1, this.$isRtl = !1, this.line = "", this.wrapIndent = 0, this.EOF = "¶", this.RLE = "‫", this.contentWidth = 0, this.fontMetrics = null, this.rtlLineOffset = 0, this.wrapOffset = 0, this.isMoveLeftOperation = !1, this.seenBidi = p.test(e.getValue());
          }
          return l.prototype.isBidiRow = function(e, n, i) {
            return this.seenBidi ? (e !== this.currentRow && (this.currentRow = e, this.updateRowLine(n, i), this.updateBidiMap()), this.bidiMap.bidiLevels) : !1;
          }, l.prototype.onChange = function(e) {
            this.seenBidi ? this.currentRow = null : e.action == "insert" && p.test(e.lines.join(`
`)) && (this.seenBidi = !0, this.currentRow = null);
          }, l.prototype.getDocumentRow = function() {
            var e = 0, n = this.session.$screenRowCache;
            if (n.length) {
              var i = this.session.$getRowCacheIndex(n, this.currentRow);
              i >= 0 && (e = this.session.$docRowCache[i]);
            }
            return e;
          }, l.prototype.getSplitIndex = function() {
            var e = 0, n = this.session.$screenRowCache;
            if (n.length)
              for (var i, r = this.session.$getRowCacheIndex(n, this.currentRow); this.currentRow - e > 0 && (i = this.session.$getRowCacheIndex(n, this.currentRow - e - 1), i === r); )
                r = i, e++;
            else
              e = this.currentRow;
            return e;
          }, l.prototype.updateRowLine = function(e, n) {
            e === void 0 && (e = this.getDocumentRow());
            var i = e === this.session.getLength() - 1, r = i ? this.EOF : this.EOL;
            if (this.wrapIndent = 0, this.line = this.session.getLine(e), this.isRtlDir = this.$isRtl || this.line.charAt(0) === this.RLE, this.session.$useWrapMode) {
              var t = this.session.$wrapData[e];
              t && (n === void 0 && (n = this.getSplitIndex()), n > 0 && t.length ? (this.wrapIndent = t.indent, this.wrapOffset = this.wrapIndent * this.charWidths[f.L], this.line = n < t.length ? this.line.substring(t[n - 1], t[n]) : this.line.substring(t[t.length - 1])) : this.line = this.line.substring(0, t[n]), n == t.length && (this.line += this.showInvisibles ? r : f.DOT));
            } else
              this.line += this.showInvisibles ? r : f.DOT;
            var o = this.session, a = 0, c;
            this.line = this.line.replace(/\t|[\u1100-\u2029, \u202F-\uFFE6]/g, function(u, w) {
              return u === "	" || o.isFullWidth(u.charCodeAt(0)) ? (c = u === "	" ? o.getScreenTabSize(w + a) : 2, a += c - 1, v.stringRepeat(f.DOT, c)) : u;
            }), this.isRtlDir && (this.fontMetrics.$main.textContent = this.line.charAt(this.line.length - 1) == f.DOT ? this.line.substr(0, this.line.length - 1) : this.line, this.rtlLineOffset = this.contentWidth - this.fontMetrics.$main.getBoundingClientRect().width);
          }, l.prototype.updateBidiMap = function() {
            var e = [];
            f.hasBidiCharacters(this.line, e) || this.isRtlDir ? this.bidiMap = f.doBidiReorder(this.line, e, this.isRtlDir) : this.bidiMap = {};
          }, l.prototype.markAsDirty = function() {
            this.currentRow = null;
          }, l.prototype.updateCharacterWidths = function(e) {
            if (this.characterWidth !== e.$characterSize.width) {
              this.fontMetrics = e;
              var n = this.characterWidth = e.$characterSize.width, i = e.$measureCharWidth("ה");
              this.charWidths[f.L] = this.charWidths[f.EN] = this.charWidths[f.ON_R] = n, this.charWidths[f.R] = this.charWidths[f.AN] = i, this.charWidths[f.R_H] = i * 0.45, this.charWidths[f.B] = this.charWidths[f.RLE] = 0, this.currentRow = null;
            }
          }, l.prototype.setShowInvisibles = function(e) {
            this.showInvisibles = e, this.currentRow = null;
          }, l.prototype.setEolChar = function(e) {
            this.EOL = e;
          }, l.prototype.setContentWidth = function(e) {
            this.contentWidth = e;
          }, l.prototype.isRtlLine = function(e) {
            return this.$isRtl ? !0 : e != null ? this.session.getLine(e).charAt(0) == this.RLE : this.isRtlDir;
          }, l.prototype.setRtlDirection = function(e, n) {
            for (var i = e.getCursorPosition(), r = e.selection.getSelectionAnchor().row; r <= i.row; r++)
              !n && e.session.getLine(r).charAt(0) === e.session.$bidiHandler.RLE ? e.session.doc.removeInLine(r, 0, 1) : n && e.session.getLine(r).charAt(0) !== e.session.$bidiHandler.RLE && e.session.doc.insert({ column: 0, row: r }, e.session.$bidiHandler.RLE);
          }, l.prototype.getPosLeft = function(e) {
            e -= this.wrapIndent;
            var n = this.line.charAt(0) === this.RLE ? 1 : 0, i = e > n ? this.session.getOverwrite() ? e : e - 1 : n, r = f.getVisualFromLogicalIdx(i, this.bidiMap), t = this.bidiMap.bidiLevels, o = 0;
            !this.session.getOverwrite() && e <= n && t[r] % 2 !== 0 && r++;
            for (var a = 0; a < r; a++)
              o += this.charWidths[t[a]];
            return !this.session.getOverwrite() && e > n && t[r] % 2 === 0 && (o += this.charWidths[t[r]]), this.wrapIndent && (o += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset), this.isRtlDir && (o += this.rtlLineOffset), o;
          }, l.prototype.getSelections = function(e, n) {
            var i = this.bidiMap, r = i.bidiLevels, t, o = [], a = 0, c = Math.min(e, n) - this.wrapIndent, u = Math.max(e, n) - this.wrapIndent, w = !1, y = !1, m = 0;
            this.wrapIndent && (a += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset);
            for (var h, $ = 0; $ < r.length; $++)
              h = i.logicalFromVisual[$], t = r[$], w = h >= c && h < u, w && !y ? m = a : !w && y && o.push({ left: m, width: a - m }), a += this.charWidths[t], y = w;
            if (w && $ === r.length && o.push({ left: m, width: a - m }), this.isRtlDir)
              for (var _ = 0; _ < o.length; _++)
                o[_].left += this.rtlLineOffset;
            return o;
          }, l.prototype.offsetToCol = function(i) {
            this.isRtlDir && (i -= this.rtlLineOffset);
            var n = 0, i = Math.max(i, 0), r = 0, t = 0, o = this.bidiMap.bidiLevels, a = this.charWidths[o[t]];
            for (this.wrapIndent && (i -= this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset); i > r + a / 2; ) {
              if (r += a, t === o.length - 1) {
                a = 0;
                break;
              }
              a = this.charWidths[o[++t]];
            }
            return t > 0 && o[t - 1] % 2 !== 0 && o[t] % 2 === 0 ? (i < r && t--, n = this.bidiMap.logicalFromVisual[t]) : t > 0 && o[t - 1] % 2 === 0 && o[t] % 2 !== 0 ? n = 1 + (i > r ? this.bidiMap.logicalFromVisual[t] : this.bidiMap.logicalFromVisual[t - 1]) : this.isRtlDir && t === o.length - 1 && a === 0 && o[t - 1] % 2 === 0 || !this.isRtlDir && t === 0 && o[t] % 2 !== 0 ? n = 1 + this.bidiMap.logicalFromVisual[t] : (t > 0 && o[t - 1] % 2 !== 0 && a !== 0 && t--, n = this.bidiMap.logicalFromVisual[t]), n === 0 && this.isRtlDir && n++, n + this.wrapIndent;
          }, l;
        }()
      );
      S.BidiHandler = s;
    }), ace.define("ace/selection", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/range"], function(M, S, R) {
      var f = M("./lib/oop"), v = M("./lib/lang"), p = M("./lib/event_emitter").EventEmitter, s = M("./range").Range, l = (
        /** @class */
        function() {
          function e(n) {
            this.session = n, this.doc = n.getDocument(), this.clearSelection(), this.cursor = this.lead = this.doc.createAnchor(0, 0), this.anchor = this.doc.createAnchor(0, 0), this.$silent = !1;
            var i = this;
            this.cursor.on("change", function(r) {
              i.$cursorChanged = !0, i.$silent || i._emit("changeCursor"), !i.$isEmpty && !i.$silent && i._emit("changeSelection"), !i.$keepDesiredColumnOnChange && r.old.column != r.value.column && (i.$desiredColumn = null);
            }), this.anchor.on("change", function() {
              i.$anchorChanged = !0, !i.$isEmpty && !i.$silent && i._emit("changeSelection");
            });
          }
          return e.prototype.isEmpty = function() {
            return this.$isEmpty || this.anchor.row == this.lead.row && this.anchor.column == this.lead.column;
          }, e.prototype.isMultiLine = function() {
            return !this.$isEmpty && this.anchor.row != this.cursor.row;
          }, e.prototype.getCursor = function() {
            return this.lead.getPosition();
          }, e.prototype.setAnchor = function(n, i) {
            this.$isEmpty = !1, this.anchor.setPosition(n, i);
          }, e.prototype.getAnchor = function() {
            return this.$isEmpty ? this.getSelectionLead() : this.anchor.getPosition();
          }, e.prototype.getSelectionLead = function() {
            return this.lead.getPosition();
          }, e.prototype.isBackwards = function() {
            var n = this.anchor, i = this.lead;
            return n.row > i.row || n.row == i.row && n.column > i.column;
          }, e.prototype.getRange = function() {
            var n = this.anchor, i = this.lead;
            return this.$isEmpty ? s.fromPoints(i, i) : this.isBackwards() ? s.fromPoints(i, n) : s.fromPoints(n, i);
          }, e.prototype.clearSelection = function() {
            this.$isEmpty || (this.$isEmpty = !0, this._emit("changeSelection"));
          }, e.prototype.selectAll = function() {
            this.$setSelection(0, 0, Number.MAX_VALUE, Number.MAX_VALUE);
          }, e.prototype.setRange = function(n, i) {
            var r = i ? n.end : n.start, t = i ? n.start : n.end;
            this.$setSelection(r.row, r.column, t.row, t.column);
          }, e.prototype.$setSelection = function(n, i, r, t) {
            if (!this.$silent) {
              var o = this.$isEmpty, a = this.inMultiSelectMode;
              this.$silent = !0, this.$cursorChanged = this.$anchorChanged = !1, this.anchor.setPosition(n, i), this.cursor.setPosition(r, t), this.$isEmpty = !s.comparePoints(this.anchor, this.cursor), this.$silent = !1, this.$cursorChanged && this._emit("changeCursor"), (this.$cursorChanged || this.$anchorChanged || o != this.$isEmpty || a) && this._emit("changeSelection");
            }
          }, e.prototype.$moveSelection = function(n) {
            var i = this.lead;
            this.$isEmpty && this.setSelectionAnchor(i.row, i.column), n.call(this);
          }, e.prototype.selectTo = function(n, i) {
            this.$moveSelection(function() {
              this.moveCursorTo(n, i);
            });
          }, e.prototype.selectToPosition = function(n) {
            this.$moveSelection(function() {
              this.moveCursorToPosition(n);
            });
          }, e.prototype.moveTo = function(n, i) {
            this.clearSelection(), this.moveCursorTo(n, i);
          }, e.prototype.moveToPosition = function(n) {
            this.clearSelection(), this.moveCursorToPosition(n);
          }, e.prototype.selectUp = function() {
            this.$moveSelection(this.moveCursorUp);
          }, e.prototype.selectDown = function() {
            this.$moveSelection(this.moveCursorDown);
          }, e.prototype.selectRight = function() {
            this.$moveSelection(this.moveCursorRight);
          }, e.prototype.selectLeft = function() {
            this.$moveSelection(this.moveCursorLeft);
          }, e.prototype.selectLineStart = function() {
            this.$moveSelection(this.moveCursorLineStart);
          }, e.prototype.selectLineEnd = function() {
            this.$moveSelection(this.moveCursorLineEnd);
          }, e.prototype.selectFileEnd = function() {
            this.$moveSelection(this.moveCursorFileEnd);
          }, e.prototype.selectFileStart = function() {
            this.$moveSelection(this.moveCursorFileStart);
          }, e.prototype.selectWordRight = function() {
            this.$moveSelection(this.moveCursorWordRight);
          }, e.prototype.selectWordLeft = function() {
            this.$moveSelection(this.moveCursorWordLeft);
          }, e.prototype.getWordRange = function(n, i) {
            if (typeof i > "u") {
              var r = n || this.lead;
              n = r.row, i = r.column;
            }
            return this.session.getWordRange(n, i);
          }, e.prototype.selectWord = function() {
            this.setSelectionRange(this.getWordRange());
          }, e.prototype.selectAWord = function() {
            var n = this.getCursor(), i = this.session.getAWordRange(n.row, n.column);
            this.setSelectionRange(i);
          }, e.prototype.getLineRange = function(n, i) {
            var r = typeof n == "number" ? n : this.lead.row, t, o = this.session.getFoldLine(r);
            return o ? (r = o.start.row, t = o.end.row) : t = r, i === !0 ? new s(r, 0, t, this.session.getLine(t).length) : new s(r, 0, t + 1, 0);
          }, e.prototype.selectLine = function() {
            this.setSelectionRange(this.getLineRange());
          }, e.prototype.moveCursorUp = function() {
            this.moveCursorBy(-1, 0);
          }, e.prototype.moveCursorDown = function() {
            this.moveCursorBy(1, 0);
          }, e.prototype.wouldMoveIntoSoftTab = function(n, i, r) {
            var t = n.column, o = n.column + i;
            return r < 0 && (t = n.column - i, o = n.column), this.session.isTabStop(n) && this.doc.getLine(n.row).slice(t, o).split(" ").length - 1 == i;
          }, e.prototype.moveCursorLeft = function() {
            var n = this.lead.getPosition(), i;
            if (i = this.session.getFoldAt(n.row, n.column, -1))
              this.moveCursorTo(i.start.row, i.start.column);
            else if (n.column === 0)
              n.row > 0 && this.moveCursorTo(n.row - 1, this.doc.getLine(n.row - 1).length);
            else {
              var r = this.session.getTabSize();
              this.wouldMoveIntoSoftTab(n, r, -1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, -r) : this.moveCursorBy(0, -1);
            }
          }, e.prototype.moveCursorRight = function() {
            var n = this.lead.getPosition(), i;
            if (i = this.session.getFoldAt(n.row, n.column, 1))
              this.moveCursorTo(i.end.row, i.end.column);
            else if (this.lead.column == this.doc.getLine(this.lead.row).length)
              this.lead.row < this.doc.getLength() - 1 && this.moveCursorTo(this.lead.row + 1, 0);
            else {
              var r = this.session.getTabSize(), n = this.lead;
              this.wouldMoveIntoSoftTab(n, r, 1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, r) : this.moveCursorBy(0, 1);
            }
          }, e.prototype.moveCursorLineStart = function() {
            var n = this.lead.row, i = this.lead.column, r = this.session.documentToScreenRow(n, i), t = this.session.screenToDocumentPosition(r, 0), o = this.session.getDisplayLine(n, null, t.row, t.column), a = o.match(/^\s*/);
            a[0].length != i && !this.session.$useEmacsStyleLineStart && (t.column += a[0].length), this.moveCursorToPosition(t);
          }, e.prototype.moveCursorLineEnd = function() {
            var n = this.lead, i = this.session.getDocumentLastRowColumnPosition(n.row, n.column);
            if (this.lead.column == i.column) {
              var r = this.session.getLine(i.row);
              if (i.column == r.length) {
                var t = r.search(/\s+$/);
                t > 0 && (i.column = t);
              }
            }
            this.moveCursorTo(i.row, i.column);
          }, e.prototype.moveCursorFileEnd = function() {
            var n = this.doc.getLength() - 1, i = this.doc.getLine(n).length;
            this.moveCursorTo(n, i);
          }, e.prototype.moveCursorFileStart = function() {
            this.moveCursorTo(0, 0);
          }, e.prototype.moveCursorLongWordRight = function() {
            var n = this.lead.row, i = this.lead.column, r = this.doc.getLine(n), t = r.substring(i);
            this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0;
            var o = this.session.getFoldAt(n, i, 1);
            if (o) {
              this.moveCursorTo(o.end.row, o.end.column);
              return;
            }
            if (this.session.nonTokenRe.exec(t) && (i += this.session.nonTokenRe.lastIndex, this.session.nonTokenRe.lastIndex = 0, t = r.substring(i)), i >= r.length) {
              this.moveCursorTo(n, r.length), this.moveCursorRight(), n < this.doc.getLength() - 1 && this.moveCursorWordRight();
              return;
            }
            this.session.tokenRe.exec(t) && (i += this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(n, i);
          }, e.prototype.moveCursorLongWordLeft = function() {
            var n = this.lead.row, i = this.lead.column, r;
            if (r = this.session.getFoldAt(n, i, -1)) {
              this.moveCursorTo(r.start.row, r.start.column);
              return;
            }
            var t = this.session.getFoldStringAt(n, i, -1);
            t == null && (t = this.doc.getLine(n).substring(0, i));
            var o = v.stringReverse(t);
            if (this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0, this.session.nonTokenRe.exec(o) && (i -= this.session.nonTokenRe.lastIndex, o = o.slice(this.session.nonTokenRe.lastIndex), this.session.nonTokenRe.lastIndex = 0), i <= 0) {
              this.moveCursorTo(n, 0), this.moveCursorLeft(), n > 0 && this.moveCursorWordLeft();
              return;
            }
            this.session.tokenRe.exec(o) && (i -= this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(n, i);
          }, e.prototype.$shortWordEndIndex = function(n) {
            var i = 0, r, t = /\s/, o = this.session.tokenRe;
            if (o.lastIndex = 0, this.session.tokenRe.exec(n))
              i = this.session.tokenRe.lastIndex;
            else {
              for (; (r = n[i]) && t.test(r); )
                i++;
              if (i < 1) {
                for (o.lastIndex = 0; (r = n[i]) && !o.test(r); )
                  if (o.lastIndex = 0, i++, t.test(r))
                    if (i > 2) {
                      i--;
                      break;
                    } else {
                      for (; (r = n[i]) && t.test(r); )
                        i++;
                      if (i > 2)
                        break;
                    }
              }
            }
            return o.lastIndex = 0, i;
          }, e.prototype.moveCursorShortWordRight = function() {
            var n = this.lead.row, i = this.lead.column, r = this.doc.getLine(n), t = r.substring(i), o = this.session.getFoldAt(n, i, 1);
            if (o)
              return this.moveCursorTo(o.end.row, o.end.column);
            if (i == r.length) {
              var a = this.doc.getLength();
              do
                n++, t = this.doc.getLine(n);
              while (n < a && /^\s*$/.test(t));
              /^\s+/.test(t) || (t = ""), i = 0;
            }
            var c = this.$shortWordEndIndex(t);
            this.moveCursorTo(n, i + c);
          }, e.prototype.moveCursorShortWordLeft = function() {
            var n = this.lead.row, i = this.lead.column, r;
            if (r = this.session.getFoldAt(n, i, -1))
              return this.moveCursorTo(r.start.row, r.start.column);
            var t = this.session.getLine(n).substring(0, i);
            if (i === 0) {
              do
                n--, t = this.doc.getLine(n);
              while (n > 0 && /^\s*$/.test(t));
              i = t.length, /\s+$/.test(t) || (t = "");
            }
            var o = v.stringReverse(t), a = this.$shortWordEndIndex(o);
            return this.moveCursorTo(n, i - a);
          }, e.prototype.moveCursorWordRight = function() {
            this.session.$selectLongWords ? this.moveCursorLongWordRight() : this.moveCursorShortWordRight();
          }, e.prototype.moveCursorWordLeft = function() {
            this.session.$selectLongWords ? this.moveCursorLongWordLeft() : this.moveCursorShortWordLeft();
          }, e.prototype.moveCursorBy = function(n, i) {
            var r = this.session.documentToScreenPosition(this.lead.row, this.lead.column), t;
            if (i === 0 && (n !== 0 && (this.session.$bidiHandler.isBidiRow(r.row, this.lead.row) ? (t = this.session.$bidiHandler.getPosLeft(r.column), r.column = Math.round(t / this.session.$bidiHandler.charWidths[0])) : t = r.column * this.session.$bidiHandler.charWidths[0]), this.$desiredColumn ? r.column = this.$desiredColumn : this.$desiredColumn = r.column), n != 0 && this.session.lineWidgets && this.session.lineWidgets[this.lead.row]) {
              var o = this.session.lineWidgets[this.lead.row];
              n < 0 ? n -= o.rowsAbove || 0 : n > 0 && (n += o.rowCount - (o.rowsAbove || 0));
            }
            var a = this.session.screenToDocumentPosition(r.row + n, r.column, t);
            n !== 0 && i === 0 && a.row === this.lead.row && (a.column, this.lead.column), this.moveCursorTo(a.row, a.column + i, i === 0);
          }, e.prototype.moveCursorToPosition = function(n) {
            this.moveCursorTo(n.row, n.column);
          }, e.prototype.moveCursorTo = function(n, i, r) {
            var t = this.session.getFoldAt(n, i, 1);
            t && (n = t.start.row, i = t.start.column), this.$keepDesiredColumnOnChange = !0;
            var o = this.session.getLine(n);
            /[\uDC00-\uDFFF]/.test(o.charAt(i)) && o.charAt(i - 1) && (this.lead.row == n && this.lead.column == i + 1 ? i = i - 1 : i = i + 1), this.lead.setPosition(n, i), this.$keepDesiredColumnOnChange = !1, r || (this.$desiredColumn = null);
          }, e.prototype.moveCursorToScreen = function(n, i, r) {
            var t = this.session.screenToDocumentPosition(n, i);
            this.moveCursorTo(t.row, t.column, r);
          }, e.prototype.detach = function() {
            this.lead.detach(), this.anchor.detach();
          }, e.prototype.fromOrientedRange = function(n) {
            this.setSelectionRange(n, n.cursor == n.start), this.$desiredColumn = n.desiredColumn || this.$desiredColumn;
          }, e.prototype.toOrientedRange = function(n) {
            var i = this.getRange();
            return n ? (n.start.column = i.start.column, n.start.row = i.start.row, n.end.column = i.end.column, n.end.row = i.end.row) : n = i, n.cursor = this.isBackwards() ? n.start : n.end, n.desiredColumn = this.$desiredColumn, n;
          }, e.prototype.getRangeOfMovements = function(n) {
            var i = this.getCursor();
            try {
              n(this);
              var r = this.getCursor();
              return s.fromPoints(i, r);
            } catch {
              return s.fromPoints(i, i);
            } finally {
              this.moveCursorToPosition(i);
            }
          }, e.prototype.toJSON = function() {
            if (this.rangeCount)
              var n = this.ranges.map(function(i) {
                var r = i.clone();
                return r.isBackwards = i.cursor == i.start, r;
              });
            else {
              var n = this.getRange();
              n.isBackwards = this.isBackwards();
            }
            return n;
          }, e.prototype.fromJSON = function(n) {
            if (n.start == null)
              if (this.rangeList && n.length > 1) {
                this.toSingleRange(n[0]);
                for (var i = n.length; i--; ) {
                  var r = s.fromPoints(n[i].start, n[i].end);
                  n[i].isBackwards && (r.cursor = r.start), this.addRange(r, !0);
                }
                return;
              } else
                n = n[0];
            this.rangeList && this.toSingleRange(n), this.setSelectionRange(n, n.isBackwards);
          }, e.prototype.isEqual = function(n) {
            if ((n.length || this.rangeCount) && n.length != this.rangeCount)
              return !1;
            if (!n.length || !this.ranges)
              return this.getRange().isEqual(n);
            for (var i = this.ranges.length; i--; )
              if (!this.ranges[i].isEqual(n[i]))
                return !1;
            return !0;
          }, e;
        }()
      );
      l.prototype.setSelectionAnchor = l.prototype.setAnchor, l.prototype.getSelectionAnchor = l.prototype.getAnchor, l.prototype.setSelectionRange = l.prototype.setRange, f.implement(l.prototype, p), S.Selection = l;
    }), ace.define("ace/tokenizer", ["require", "exports", "module", "ace/lib/report_error"], function(M, S, R) {
      var f = M("./lib/report_error").reportError, v = 2e3, p = (
        /** @class */
        function() {
          function s(l) {
            this.splitRegex, this.states = l, this.regExps = {}, this.matchMappings = {};
            for (var e in this.states) {
              for (var n = this.states[e], i = [], r = 0, t = this.matchMappings[e] = { defaultToken: "text" }, o = "g", a = [], c = 0; c < n.length; c++) {
                var u = n[c];
                if (u.defaultToken && (t.defaultToken = u.defaultToken), u.caseInsensitive && o.indexOf("i") === -1 && (o += "i"), u.unicode && o.indexOf("u") === -1 && (o += "u"), u.regex != null) {
                  u.regex instanceof RegExp && (u.regex = u.regex.toString().slice(1, -1));
                  var w = u.regex, y = new RegExp("(?:(" + w + ")|(.))").exec("a").length - 2;
                  Array.isArray(u.token) ? u.token.length == 1 || y == 1 ? u.token = u.token[0] : y - 1 != u.token.length ? (this.reportError("number of classes and regexp groups doesn't match", {
                    rule: u,
                    groupCount: y - 1
                  }), u.token = u.token[0]) : (u.tokenArray = u.token, u.token = null, u.onMatch = this.$arrayTokens) : typeof u.token == "function" && !u.onMatch && (y > 1 ? u.onMatch = this.$applyToken : u.onMatch = u.token), y > 1 && (/\\\d/.test(u.regex) ? w = u.regex.replace(/\\([0-9]+)/g, function(m, h) {
                    return "\\" + (parseInt(h, 10) + r + 1);
                  }) : (y = 1, w = this.removeCapturingGroups(u.regex)), !u.splitRegex && typeof u.token != "string" && a.push(u)), t[r] = c, r += y, i.push(w), u.onMatch || (u.onMatch = null);
                }
              }
              i.length || (t[0] = 0, i.push("$")), a.forEach(function(m) {
                m.splitRegex = this.createSplitterRegexp(m.regex, o);
              }, this), this.regExps[e] = new RegExp("(" + i.join(")|(") + ")|($)", o);
            }
          }
          return s.prototype.$setMaxTokenCount = function(l) {
            v = l | 0;
          }, s.prototype.$applyToken = function(l) {
            var e = this.splitRegex.exec(l).slice(1), n = this.token.apply(this, e);
            if (typeof n == "string")
              return [{ type: n, value: l }];
            for (var i = [], r = 0, t = n.length; r < t; r++)
              e[r] && (i[i.length] = {
                type: n[r],
                value: e[r]
              });
            return i;
          }, s.prototype.$arrayTokens = function(l) {
            if (!l)
              return [];
            var e = this.splitRegex.exec(l);
            if (!e)
              return "text";
            for (var n = [], i = this.tokenArray, r = 0, t = i.length; r < t; r++)
              e[r + 1] && (n[n.length] = {
                type: i[r],
                value: e[r + 1]
              });
            return n;
          }, s.prototype.removeCapturingGroups = function(l) {
            var e = l.replace(/\\.|\[(?:\\.|[^\\\]])*|\(\?[:=!<]|(\()/g, function(n, i) {
              return i ? "(?:" : n;
            });
            return e;
          }, s.prototype.createSplitterRegexp = function(l, e) {
            if (l.indexOf("(?=") != -1) {
              var n = 0, i = !1, r = {};
              l.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, function(t, o, a, c, u, w) {
                return i ? i = u != "]" : u ? i = !0 : c ? (n == r.stack && (r.end = w + 1, r.stack = -1), n--) : a && (n++, a.length != 1 && (r.stack = n, r.start = w)), t;
              }), r.end != null && /^\)*$/.test(l.substr(r.end)) && (l = l.substring(0, r.start) + l.substr(r.end));
            }
            return l.charAt(0) != "^" && (l = "^" + l), l.charAt(l.length - 1) != "$" && (l += "$"), new RegExp(l, (e || "").replace("g", ""));
          }, s.prototype.getLineTokens = function(l, e) {
            if (e && typeof e != "string") {
              var n = e.slice(0);
              e = n[0], e === "#tmp" && (n.shift(), e = n.shift());
            } else
              var n = [];
            var i = (
              /**@type{string}*/
              e || "start"
            ), r = this.states[i];
            r || (i = "start", r = this.states[i]);
            var t = this.matchMappings[i], o = this.regExps[i];
            o.lastIndex = 0;
            for (var a, c = [], u = 0, w = 0, y = { type: null, value: "" }; a = o.exec(l); ) {
              var m = t.defaultToken, h = null, $ = a[0], _ = o.lastIndex;
              if (_ - $.length > u) {
                var L = l.substring(u, _ - $.length);
                y.type == m ? y.value += L : (y.type && c.push(y), y = { type: m, value: L });
              }
              for (var x = 0; x < a.length - 2; x++)
                if (a[x + 1] !== void 0) {
                  h = r[t[x]], h.onMatch ? m = h.onMatch($, i, n, l) : m = h.token, h.next && (typeof h.next == "string" ? i = h.next : i = h.next(i, n), r = this.states[i], r || (this.reportError("state doesn't exist", i), i = "start", r = this.states[i]), t = this.matchMappings[i], u = _, o = this.regExps[i], o.lastIndex = _), h.consumeLineEnd && (u = _);
                  break;
                }
              if ($) {
                if (typeof m == "string")
                  (!h || h.merge !== !1) && y.type === m ? y.value += $ : (y.type && c.push(y), y = { type: m, value: $ });
                else if (m) {
                  y.type && c.push(y), y = { type: null, value: "" };
                  for (var x = 0; x < m.length; x++)
                    c.push(m[x]);
                }
              }
              if (u == l.length)
                break;
              if (u = _, w++ > v) {
                for (w > 2 * l.length && this.reportError("infinite loop with in ace tokenizer", {
                  startState: e,
                  line: l
                }); u < l.length; )
                  y.type && c.push(y), y = {
                    value: l.substring(u, u += 500),
                    type: "overflow"
                  };
                i = "start", n = [];
                break;
              }
            }
            return y.type && c.push(y), n.length > 1 && n[0] !== i && n.unshift("#tmp", i), {
              tokens: c,
              state: n.length ? n : i
            };
          }, s;
        }()
      );
      p.prototype.reportError = f, S.Tokenizer = p;
    }), ace.define("ace/mode/text_highlight_rules", ["require", "exports", "module", "ace/lib/deep_copy"], function(M, S, R) {
      var f = M("../lib/deep_copy").deepCopy, v;
      v = function() {
        this.$rules = {
          start: [{
            token: "empty_line",
            regex: "^$"
          }, {
            defaultToken: "text"
          }]
        };
      }, (function() {
        this.addRules = function(l, e) {
          if (!e) {
            for (var n in l)
              this.$rules[n] = l[n];
            return;
          }
          for (var n in l) {
            for (var i = l[n], r = 0; r < i.length; r++) {
              var t = i[r];
              (t.next || t.onMatch) && (typeof t.next == "string" && t.next.indexOf(e) !== 0 && (t.next = e + t.next), t.nextState && t.nextState.indexOf(e) !== 0 && (t.nextState = e + t.nextState));
            }
            this.$rules[e + n] = i;
          }
        }, this.getRules = function() {
          return this.$rules;
        }, this.embedRules = function(l, e, n, i, r) {
          var t = typeof l == "function" ? new l().getRules() : l;
          if (i)
            for (var o = 0; o < i.length; o++)
              i[o] = e + i[o];
          else {
            i = [];
            for (var a in t)
              i.push(e + a);
          }
          if (this.addRules(t, e), n)
            for (var c = Array.prototype[r ? "push" : "unshift"], o = 0; o < i.length; o++)
              c.apply(this.$rules[i[o]], f(n));
          this.$embeds || (this.$embeds = []), this.$embeds.push(e);
        }, this.getEmbeds = function() {
          return this.$embeds;
        };
        var p = function(l, e) {
          return (l != "start" || e.length) && e.unshift(this.nextState, l), this.nextState;
        }, s = function(l, e) {
          return e.shift(), e.shift() || "start";
        };
        this.normalizeRules = function() {
          var l = 0, e = this.$rules;
          function n(i) {
            var r = e[i];
            r.processed = !0;
            for (var t = 0; t < r.length; t++) {
              var o = r[t], a = null;
              Array.isArray(o) && (a = o, o = {}), !o.regex && o.start && (o.regex = o.start, o.next || (o.next = []), o.next.push({
                defaultToken: o.token
              }, {
                token: o.token + ".end",
                regex: o.end || o.start,
                next: "pop"
              }), o.token = o.token + ".start", o.push = !0);
              var c = o.next || o.push;
              if (c && Array.isArray(c)) {
                var u = o.stateName;
                u || (u = o.token, typeof u != "string" && (u = u[0] || ""), e[u] && (u += l++)), e[u] = c, o.next = u, n(u);
              } else c == "pop" && (o.next = s);
              if (o.push && (o.nextState = o.next || o.push, o.next = p, delete o.push), o.rules)
                for (var w in o.rules)
                  e[w] ? e[w].push && e[w].push.apply(e[w], o.rules[w]) : e[w] = o.rules[w];
              var y = typeof o == "string" ? o : o.include;
              if (y && (y === "$self" && (y = "start"), Array.isArray(y) ? a = y.map(function(h) {
                return e[h];
              }) : a = e[y]), a) {
                var m = [t, 1].concat(a);
                o.noEscape && (m = m.filter(function(h) {
                  return !h.next;
                })), r.splice.apply(r, m), t--;
              }
              o.keywordMap && (o.token = this.createKeywordMapper(o.keywordMap, o.defaultToken || "text", o.caseInsensitive), delete o.defaultToken);
            }
          }
          Object.keys(e).forEach(n, this);
        }, this.createKeywordMapper = function(l, e, n, i) {
          var r = /* @__PURE__ */ Object.create(null);
          return this.$keywordList = [], Object.keys(l).forEach(function(t) {
            for (var o = l[t], a = o.split(i || "|"), c = a.length; c--; ) {
              var u = a[c];
              this.$keywordList.push(u), n && (u = u.toLowerCase()), r[u] = t;
            }
          }, this), l = null, n ? function(t) {
            return r[t.toLowerCase()] || e;
          } : function(t) {
            return r[t] || e;
          };
        }, this.getKeywords = function() {
          return this.$keywords;
        };
      }).call(v.prototype), S.TextHighlightRules = v;
    }), ace.define("ace/mode/behaviour", ["require", "exports", "module"], function(M, S, R) {
      var f;
      f = function() {
        this.$behaviours = {};
      }, (function() {
        this.add = function(v, p, s) {
          switch (void 0) {
            case this.$behaviours:
              this.$behaviours = {};
            case this.$behaviours[v]:
              this.$behaviours[v] = {};
          }
          this.$behaviours[v][p] = s;
        }, this.addBehaviours = function(v) {
          for (var p in v)
            for (var s in v[p])
              this.add(p, s, v[p][s]);
        }, this.remove = function(v) {
          this.$behaviours && this.$behaviours[v] && delete this.$behaviours[v];
        }, this.inherit = function(v, p) {
          if (typeof v == "function")
            var s = new v().getBehaviours(p);
          else
            var s = v.getBehaviours(p);
          this.addBehaviours(s);
        }, this.getBehaviours = function(v) {
          if (v) {
            for (var p = {}, s = 0; s < v.length; s++)
              this.$behaviours[v[s]] && (p[v[s]] = this.$behaviours[v[s]]);
            return p;
          } else
            return this.$behaviours;
        };
      }).call(f.prototype), S.Behaviour = f;
    }), ace.define("ace/token_iterator", ["require", "exports", "module", "ace/range"], function(M, S, R) {
      var f = M("./range").Range, v = (
        /** @class */
        function() {
          function p(s, l, e) {
            this.$session = s, this.$row = l, this.$rowTokens = s.getTokens(l);
            var n = s.getTokenAt(l, e);
            this.$tokenIndex = n ? n.index : -1;
          }
          return p.prototype.stepBackward = function() {
            for (this.$tokenIndex -= 1; this.$tokenIndex < 0; ) {
              if (this.$row -= 1, this.$row < 0)
                return this.$row = 0, null;
              this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = this.$rowTokens.length - 1;
            }
            return this.$rowTokens[this.$tokenIndex];
          }, p.prototype.stepForward = function() {
            this.$tokenIndex += 1;
            for (var s; this.$tokenIndex >= this.$rowTokens.length; ) {
              if (this.$row += 1, s || (s = this.$session.getLength()), this.$row >= s)
                return this.$row = s - 1, null;
              this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = 0;
            }
            return this.$rowTokens[this.$tokenIndex];
          }, p.prototype.getCurrentToken = function() {
            return this.$rowTokens[this.$tokenIndex];
          }, p.prototype.getCurrentTokenRow = function() {
            return this.$row;
          }, p.prototype.getCurrentTokenColumn = function() {
            var s = this.$rowTokens, l = this.$tokenIndex, e = s[l].start;
            if (e !== void 0)
              return e;
            for (e = 0; l > 0; )
              l -= 1, e += s[l].value.length;
            return e;
          }, p.prototype.getCurrentTokenPosition = function() {
            return { row: this.$row, column: this.getCurrentTokenColumn() };
          }, p.prototype.getCurrentTokenRange = function() {
            var s = this.$rowTokens[this.$tokenIndex], l = this.getCurrentTokenColumn();
            return new f(this.$row, l, this.$row, l + s.value.length);
          }, p;
        }()
      );
      S.TokenIterator = v;
    }), ace.define("ace/mode/behaviour/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/token_iterator", "ace/lib/lang"], function(M, S, R) {
      var f = M("../../lib/oop"), v = M("../behaviour").Behaviour, p = M("../../token_iterator").TokenIterator, s = M("../../lib/lang"), l = ["text", "paren.rparen", "rparen", "paren", "punctuation.operator"], e = ["text", "paren.rparen", "rparen", "paren", "punctuation.operator", "comment"], n, i = {}, r = { '"': '"', "'": "'" }, t = function(c) {
        var u = -1;
        if (c.multiSelect && (u = c.selection.index, i.rangeCount != c.multiSelect.rangeCount && (i = { rangeCount: c.multiSelect.rangeCount })), i[u])
          return n = i[u];
        n = i[u] = {
          autoInsertedBrackets: 0,
          autoInsertedRow: -1,
          autoInsertedLineEnd: "",
          maybeInsertedBrackets: 0,
          maybeInsertedRow: -1,
          maybeInsertedLineStart: "",
          maybeInsertedLineEnd: ""
        };
      }, o = function(c, u, w, y) {
        var m = c.end.row - c.start.row;
        return {
          text: w + u + y,
          selection: [
            0,
            c.start.column + 1,
            m,
            c.end.column + (m ? 0 : 1)
          ]
        };
      }, a;
      a = function(c) {
        c = c || {}, this.add("braces", "insertion", function(u, w, y, m, h) {
          var $ = y.getCursorPosition(), _ = m.doc.getLine($.row);
          if (h == "{") {
            t(y);
            var L = y.getSelectionRange(), x = m.doc.getTextRange(L), D = m.getTokenAt($.row, $.column);
            if (x !== "" && x !== "{" && y.getWrapBehavioursEnabled())
              return o(L, x, "{", "}");
            if (D && /(?:string)\.quasi|\.xml/.test(D.type)) {
              var A = [
                /tag\-(?:open|name)/,
                /attribute\-name/
              ];
              return A.some(function(T) {
                return T.test(D.type);
              }) || /(string)\.quasi/.test(D.type) && D.value[$.column - D.start - 1] !== "$" ? void 0 : (a.recordAutoInsert(y, m, "}"), {
                text: "{}",
                selection: [1, 1]
              });
            } else if (a.isSaneInsertion(y, m))
              return /[\]\}\)]/.test(_[$.column]) || y.inMultiSelectMode || c.braces ? (a.recordAutoInsert(y, m, "}"), {
                text: "{}",
                selection: [1, 1]
              }) : (a.recordMaybeInsert(y, m, "{"), {
                text: "{",
                selection: [1, 1]
              });
          } else if (h == "}") {
            t(y);
            var C = _.substring($.column, $.column + 1);
            if (C == "}") {
              var g = m.$findOpeningBracket("}", { column: $.column + 1, row: $.row });
              if (g !== null && a.isAutoInsertedClosing($, _, h))
                return a.popAutoInsertedClosing(), {
                  text: "",
                  selection: [1, 1]
                };
            }
          } else if (h == `
` || h == `\r
`) {
            t(y);
            var d = "";
            a.isMaybeInsertedClosing($, _) && (d = s.stringRepeat("}", n.maybeInsertedBrackets), a.clearMaybeInsertedClosing());
            var C = _.substring($.column, $.column + 1);
            if (C === "}") {
              var b = m.findMatchingBracket({ row: $.row, column: $.column + 1 }, "}");
              if (!b)
                return null;
              var k = this.$getIndent(m.getLine(b.row));
            } else if (d)
              var k = this.$getIndent(_);
            else {
              a.clearMaybeInsertedClosing();
              return;
            }
            var I = k + m.getTabString();
            return {
              text: `
` + I + `
` + k + d,
              selection: [1, I.length, 1, I.length]
            };
          } else
            a.clearMaybeInsertedClosing();
        }), this.add("braces", "deletion", function(u, w, y, m, h) {
          var $ = m.doc.getTextRange(h);
          if (!h.isMultiLine() && $ == "{") {
            t(y);
            var _ = m.doc.getLine(h.start.row), L = _.substring(h.end.column, h.end.column + 1);
            if (L == "}")
              return h.end.column++, h;
            n.maybeInsertedBrackets--;
          }
        }), this.add("parens", "insertion", function(u, w, y, m, h) {
          if (h == "(") {
            t(y);
            var $ = y.getSelectionRange(), _ = m.doc.getTextRange($);
            if (_ !== "" && y.getWrapBehavioursEnabled())
              return o($, _, "(", ")");
            if (a.isSaneInsertion(y, m))
              return a.recordAutoInsert(y, m, ")"), {
                text: "()",
                selection: [1, 1]
              };
          } else if (h == ")") {
            t(y);
            var L = y.getCursorPosition(), x = m.doc.getLine(L.row), D = x.substring(L.column, L.column + 1);
            if (D == ")") {
              var A = m.$findOpeningBracket(")", { column: L.column + 1, row: L.row });
              if (A !== null && a.isAutoInsertedClosing(L, x, h))
                return a.popAutoInsertedClosing(), {
                  text: "",
                  selection: [1, 1]
                };
            }
          }
        }), this.add("parens", "deletion", function(u, w, y, m, h) {
          var $ = m.doc.getTextRange(h);
          if (!h.isMultiLine() && $ == "(") {
            t(y);
            var _ = m.doc.getLine(h.start.row), L = _.substring(h.start.column + 1, h.start.column + 2);
            if (L == ")")
              return h.end.column++, h;
          }
        }), this.add("brackets", "insertion", function(u, w, y, m, h) {
          if (h == "[") {
            t(y);
            var $ = y.getSelectionRange(), _ = m.doc.getTextRange($);
            if (_ !== "" && y.getWrapBehavioursEnabled())
              return o($, _, "[", "]");
            if (a.isSaneInsertion(y, m))
              return a.recordAutoInsert(y, m, "]"), {
                text: "[]",
                selection: [1, 1]
              };
          } else if (h == "]") {
            t(y);
            var L = y.getCursorPosition(), x = m.doc.getLine(L.row), D = x.substring(L.column, L.column + 1);
            if (D == "]") {
              var A = m.$findOpeningBracket("]", { column: L.column + 1, row: L.row });
              if (A !== null && a.isAutoInsertedClosing(L, x, h))
                return a.popAutoInsertedClosing(), {
                  text: "",
                  selection: [1, 1]
                };
            }
          }
        }), this.add("brackets", "deletion", function(u, w, y, m, h) {
          var $ = m.doc.getTextRange(h);
          if (!h.isMultiLine() && $ == "[") {
            t(y);
            var _ = m.doc.getLine(h.start.row), L = _.substring(h.start.column + 1, h.start.column + 2);
            if (L == "]")
              return h.end.column++, h;
          }
        }), this.add("string_dquotes", "insertion", function(u, w, y, m, h) {
          var $ = m.$mode.$quotes || r;
          if (h.length == 1 && $[h]) {
            if (this.lineCommentStart && this.lineCommentStart.indexOf(h) != -1)
              return;
            t(y);
            var _ = h, L = y.getSelectionRange(), x = m.doc.getTextRange(L);
            if (x !== "" && (x.length != 1 || !$[x]) && y.getWrapBehavioursEnabled())
              return o(L, x, _, _);
            if (!x) {
              var D = y.getCursorPosition(), A = m.doc.getLine(D.row), C = A.substring(D.column - 1, D.column), g = A.substring(D.column, D.column + 1), d = m.getTokenAt(D.row, D.column), b = m.getTokenAt(D.row, D.column + 1);
              if (C == "\\" && d && /escape/.test(d.type))
                return null;
              var k = d && /string|escape/.test(d.type), I = !b || /string|escape/.test(b.type), T;
              if (g == _)
                T = k !== I, T && /string\.end/.test(b.type) && (T = !1);
              else {
                if (k && !I || k && I)
                  return null;
                var O = m.$mode.tokenRe;
                O.lastIndex = 0;
                var W = O.test(C);
                O.lastIndex = 0;
                var H = O.test(g), B = m.$mode.$pairQuotesAfter, P = B && B[_] && B[_].test(C);
                if (!P && W || H || g && !/[\s;,.})\]\\]/.test(g))
                  return null;
                var F = A[D.column - 2];
                if (C == _ && (F == _ || O.test(F)))
                  return null;
                T = !0;
              }
              return {
                text: T ? _ + _ : "",
                selection: [1, 1]
              };
            }
          }
        }), this.add("string_dquotes", "deletion", function(u, w, y, m, h) {
          var $ = m.$mode.$quotes || r, _ = m.doc.getTextRange(h);
          if (!h.isMultiLine() && $.hasOwnProperty(_)) {
            t(y);
            var L = m.doc.getLine(h.start.row), x = L.substring(h.start.column + 1, h.start.column + 2);
            if (x == _)
              return h.end.column++, h;
          }
        }), c.closeDocComment !== !1 && this.add("doc comment end", "insertion", function(u, w, y, m, h) {
          if (u === "doc-start" && (h === `
` || h === `\r
`) && y.selection.isEmpty()) {
            var $ = y.getCursorPosition();
            if ($.column === 0)
              return;
            for (var _ = m.doc.getLine($.row), L = m.doc.getLine($.row + 1), x = m.getTokens($.row), D = 0, A = 0; A < x.length; A++) {
              D += x[A].value.length;
              var C = x[A];
              if (D >= $.column) {
                if (D === $.column) {
                  if (!/\.doc/.test(C.type))
                    return;
                  if (/\*\//.test(C.value)) {
                    var g = x[A + 1];
                    if (!g || !/\.doc/.test(g.type))
                      return;
                  }
                }
                var d = $.column - (D - C.value.length), b = C.value.indexOf("*/"), k = C.value.indexOf("/**", b > -1 ? b + 2 : 0);
                if (k !== -1 && d > k && d < k + 3 || b !== -1 && k !== -1 && d >= b && d <= k || !/\.doc/.test(C.type))
                  return;
                break;
              }
            }
            var I = this.$getIndent(_);
            if (/\s*\*/.test(L))
              return /^\s*\*/.test(_) ? {
                text: h + I + "* ",
                selection: [1, 2 + I.length, 1, 2 + I.length]
              } : {
                text: h + I + " * ",
                selection: [1, 3 + I.length, 1, 3 + I.length]
              };
            if (/\/\*\*/.test(_.substring(0, $.column)))
              return {
                text: h + I + " * " + h + " " + I + "*/",
                selection: [1, 4 + I.length, 1, 4 + I.length]
              };
          }
        });
      }, a.isSaneInsertion = function(c, u) {
        var w = c.getCursorPosition(), y = new p(u, w.row, w.column);
        if (!this.$matchTokenType(y.getCurrentToken() || "text", l)) {
          if (/[)}\]]/.test(c.session.getLine(w.row)[w.column]))
            return !0;
          var m = new p(u, w.row, w.column + 1);
          if (!this.$matchTokenType(m.getCurrentToken() || "text", l))
            return !1;
        }
        return y.stepForward(), y.getCurrentTokenRow() !== w.row || this.$matchTokenType(y.getCurrentToken() || "text", e);
      }, a.$matchTokenType = function(c, u) {
        return u.indexOf(c.type || c) > -1;
      }, a.recordAutoInsert = function(c, u, w) {
        var y = c.getCursorPosition(), m = u.doc.getLine(y.row);
        this.isAutoInsertedClosing(y, m, n.autoInsertedLineEnd[0]) || (n.autoInsertedBrackets = 0), n.autoInsertedRow = y.row, n.autoInsertedLineEnd = w + m.substr(y.column), n.autoInsertedBrackets++;
      }, a.recordMaybeInsert = function(c, u, w) {
        var y = c.getCursorPosition(), m = u.doc.getLine(y.row);
        this.isMaybeInsertedClosing(y, m) || (n.maybeInsertedBrackets = 0), n.maybeInsertedRow = y.row, n.maybeInsertedLineStart = m.substr(0, y.column) + w, n.maybeInsertedLineEnd = m.substr(y.column), n.maybeInsertedBrackets++;
      }, a.isAutoInsertedClosing = function(c, u, w) {
        return n.autoInsertedBrackets > 0 && c.row === n.autoInsertedRow && w === n.autoInsertedLineEnd[0] && u.substr(c.column) === n.autoInsertedLineEnd;
      }, a.isMaybeInsertedClosing = function(c, u) {
        return n.maybeInsertedBrackets > 0 && c.row === n.maybeInsertedRow && u.substr(c.column) === n.maybeInsertedLineEnd && u.substr(0, c.column) == n.maybeInsertedLineStart;
      }, a.popAutoInsertedClosing = function() {
        n.autoInsertedLineEnd = n.autoInsertedLineEnd.substr(1), n.autoInsertedBrackets--;
      }, a.clearMaybeInsertedClosing = function() {
        n && (n.maybeInsertedBrackets = 0, n.maybeInsertedRow = -1);
      }, f.inherits(a, v), S.CstyleBehaviour = a;
    }), ace.define("ace/unicode", ["require", "exports", "module"], function(M, S, R) {
      for (var f = [48, 9, 8, 25, 5, 0, 2, 25, 48, 0, 11, 0, 5, 0, 6, 22, 2, 30, 2, 457, 5, 11, 15, 4, 8, 0, 2, 0, 18, 116, 2, 1, 3, 3, 9, 0, 2, 2, 2, 0, 2, 19, 2, 82, 2, 138, 2, 4, 3, 155, 12, 37, 3, 0, 8, 38, 10, 44, 2, 0, 2, 1, 2, 1, 2, 0, 9, 26, 6, 2, 30, 10, 7, 61, 2, 9, 5, 101, 2, 7, 3, 9, 2, 18, 3, 0, 17, 58, 3, 100, 15, 53, 5, 0, 6, 45, 211, 57, 3, 18, 2, 5, 3, 11, 3, 9, 2, 1, 7, 6, 2, 2, 2, 7, 3, 1, 3, 21, 2, 6, 2, 0, 4, 3, 3, 8, 3, 1, 3, 3, 9, 0, 5, 1, 2, 4, 3, 11, 16, 2, 2, 5, 5, 1, 3, 21, 2, 6, 2, 1, 2, 1, 2, 1, 3, 0, 2, 4, 5, 1, 3, 2, 4, 0, 8, 3, 2, 0, 8, 15, 12, 2, 2, 8, 2, 2, 2, 21, 2, 6, 2, 1, 2, 4, 3, 9, 2, 2, 2, 2, 3, 0, 16, 3, 3, 9, 18, 2, 2, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 3, 8, 3, 1, 3, 2, 9, 1, 5, 1, 2, 4, 3, 9, 2, 0, 17, 1, 2, 5, 4, 2, 2, 3, 4, 1, 2, 0, 2, 1, 4, 1, 4, 2, 4, 11, 5, 4, 4, 2, 2, 3, 3, 0, 7, 0, 15, 9, 18, 2, 2, 7, 2, 2, 2, 22, 2, 9, 2, 4, 4, 7, 2, 2, 2, 3, 8, 1, 2, 1, 7, 3, 3, 9, 19, 1, 2, 7, 2, 2, 2, 22, 2, 9, 2, 4, 3, 8, 2, 2, 2, 3, 8, 1, 8, 0, 2, 3, 3, 9, 19, 1, 2, 7, 2, 2, 2, 22, 2, 15, 4, 7, 2, 2, 2, 3, 10, 0, 9, 3, 3, 9, 11, 5, 3, 1, 2, 17, 4, 23, 2, 8, 2, 0, 3, 6, 4, 0, 5, 5, 2, 0, 2, 7, 19, 1, 14, 57, 6, 14, 2, 9, 40, 1, 2, 0, 3, 1, 2, 0, 3, 0, 7, 3, 2, 6, 2, 2, 2, 0, 2, 0, 3, 1, 2, 12, 2, 2, 3, 4, 2, 0, 2, 5, 3, 9, 3, 1, 35, 0, 24, 1, 7, 9, 12, 0, 2, 0, 2, 0, 5, 9, 2, 35, 5, 19, 2, 5, 5, 7, 2, 35, 10, 0, 58, 73, 7, 77, 3, 37, 11, 42, 2, 0, 4, 328, 2, 3, 3, 6, 2, 0, 2, 3, 3, 40, 2, 3, 3, 32, 2, 3, 3, 6, 2, 0, 2, 3, 3, 14, 2, 56, 2, 3, 3, 66, 5, 0, 33, 15, 17, 84, 13, 619, 3, 16, 2, 25, 6, 74, 22, 12, 2, 6, 12, 20, 12, 19, 13, 12, 2, 2, 2, 1, 13, 51, 3, 29, 4, 0, 5, 1, 3, 9, 34, 2, 3, 9, 7, 87, 9, 42, 6, 69, 11, 28, 4, 11, 5, 11, 11, 39, 3, 4, 12, 43, 5, 25, 7, 10, 38, 27, 5, 62, 2, 28, 3, 10, 7, 9, 14, 0, 89, 75, 5, 9, 18, 8, 13, 42, 4, 11, 71, 55, 9, 9, 4, 48, 83, 2, 2, 30, 14, 230, 23, 280, 3, 5, 3, 37, 3, 5, 3, 7, 2, 0, 2, 0, 2, 0, 2, 30, 3, 52, 2, 6, 2, 0, 4, 2, 2, 6, 4, 3, 3, 5, 5, 12, 6, 2, 2, 6, 67, 1, 20, 0, 29, 0, 14, 0, 17, 4, 60, 12, 5, 0, 4, 11, 18, 0, 5, 0, 3, 9, 2, 0, 4, 4, 7, 0, 2, 0, 2, 0, 2, 3, 2, 10, 3, 3, 6, 4, 5, 0, 53, 1, 2684, 46, 2, 46, 2, 132, 7, 6, 15, 37, 11, 53, 10, 0, 17, 22, 10, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 31, 48, 0, 470, 1, 36, 5, 2, 4, 6, 1, 5, 85, 3, 1, 3, 2, 2, 89, 2, 3, 6, 40, 4, 93, 18, 23, 57, 15, 513, 6581, 75, 20939, 53, 1164, 68, 45, 3, 268, 4, 27, 21, 31, 3, 13, 13, 1, 2, 24, 9, 69, 11, 1, 38, 8, 3, 102, 3, 1, 111, 44, 25, 51, 13, 68, 12, 9, 7, 23, 4, 0, 5, 45, 3, 35, 13, 28, 4, 64, 15, 10, 39, 54, 10, 13, 3, 9, 7, 22, 4, 1, 5, 66, 25, 2, 227, 42, 2, 1, 3, 9, 7, 11171, 13, 22, 5, 48, 8453, 301, 3, 61, 3, 105, 39, 6, 13, 4, 6, 11, 2, 12, 2, 4, 2, 0, 2, 1, 2, 1, 2, 107, 34, 362, 19, 63, 3, 53, 41, 11, 5, 15, 17, 6, 13, 1, 25, 2, 33, 4, 2, 134, 20, 9, 8, 25, 5, 0, 2, 25, 12, 88, 4, 5, 3, 5, 3, 5, 3, 2], v = 0, p = [], s = 0; s < f.length; s += 2)
        p.push(v += f[s]), f[s + 1] && p.push(45, v += f[s + 1]);
      S.wordChars = String.fromCharCode.apply(null, p);
    }), ace.define("ace/mode/text", ["require", "exports", "module", "ace/config", "ace/tokenizer", "ace/mode/text_highlight_rules", "ace/mode/behaviour/cstyle", "ace/unicode", "ace/lib/lang", "ace/token_iterator", "ace/range"], function(M, S, R) {
      var f = M("../config"), v = M("../tokenizer").Tokenizer, p = M("./text_highlight_rules").TextHighlightRules, s = M("./behaviour/cstyle").CstyleBehaviour, l = M("../unicode"), e = M("../lib/lang"), n = M("../token_iterator").TokenIterator, i = M("../range").Range, r;
      r = function() {
        this.HighlightRules = p;
      }, (function() {
        this.$defaultBehaviour = new s(), this.tokenRe = new RegExp("^[" + l.wordChars + "\\$_]+", "g"), this.nonTokenRe = new RegExp("^(?:[^" + l.wordChars + "\\$_]|\\s])+", "g"), this.getTokenizer = function() {
          return this.$tokenizer || (this.$highlightRules = this.$highlightRules || new this.HighlightRules(this.$highlightRuleConfig), this.$tokenizer = new v(this.$highlightRules.getRules())), this.$tokenizer;
        }, this.lineCommentStart = "", this.blockComment = "", this.toggleCommentLines = function(t, o, a, c) {
          var u = o.doc, w = !0, y = !0, m = 1 / 0, h = o.getTabSize(), $ = !1;
          if (this.lineCommentStart) {
            if (Array.isArray(this.lineCommentStart))
              var x = this.lineCommentStart.map(e.escapeRegExp).join("|"), _ = this.lineCommentStart[0];
            else
              var x = e.escapeRegExp(this.lineCommentStart), _ = this.lineCommentStart;
            x = new RegExp("^(\\s*)(?:" + x + ") ?"), $ = o.getUseSoftTabs();
            var C = function(H, B) {
              var P = H.match(x);
              if (P) {
                var F = P[1].length, z = P[0].length;
                !b(H, F, z) && P[0][z - 1] == " " && z--, u.removeInLine(B, F, z);
              }
            }, d = _ + " ", A = function(H, B) {
              (!w || /\S/.test(H)) && (b(H, m, m) ? u.insertInLine({ row: B, column: m }, d) : u.insertInLine({ row: B, column: m }, _));
            }, g = function(H, B) {
              return x.test(H);
            }, b = function(H, B, P) {
              for (var F = 0; B-- && H.charAt(B) == " "; )
                F++;
              if (F % h != 0)
                return !1;
              for (var F = 0; H.charAt(P++) == " "; )
                F++;
              return h > 2 ? F % h != h - 1 : F % h == 0;
            };
          } else {
            if (!this.blockComment)
              return !1;
            var _ = this.blockComment.start, L = this.blockComment.end, x = new RegExp("^(\\s*)(?:" + e.escapeRegExp(_) + ")"), D = new RegExp("(?:" + e.escapeRegExp(L) + ")\\s*$"), A = function(T, O) {
              g(T, O) || (!w || /\S/.test(T)) && (u.insertInLine({ row: O, column: T.length }, L), u.insertInLine({ row: O, column: m }, _));
            }, C = function(T, O) {
              var W;
              (W = T.match(D)) && u.removeInLine(O, T.length - W[0].length, T.length), (W = T.match(x)) && u.removeInLine(O, W[1].length, W[0].length);
            }, g = function(T, O) {
              if (x.test(T))
                return !0;
              for (var W = o.getTokens(O), H = 0; H < W.length; H++)
                if (W[H].type === "comment")
                  return !0;
            };
          }
          function k(T) {
            for (var O = a; O <= c; O++)
              T(u.getLine(O), O);
          }
          var I = 1 / 0;
          k(function(T, O) {
            var W = T.search(/\S/);
            W !== -1 ? (W < m && (m = W), y && !g(T, O) && (y = !1)) : I > T.length && (I = T.length);
          }), m == 1 / 0 && (m = I, w = !1, y = !1), $ && m % h != 0 && (m = Math.floor(m / h) * h), k(y ? C : A);
        }, this.toggleBlockComment = function(t, o, a, c) {
          var u = this.blockComment;
          if (u) {
            !u.start && u[0] && (u = u[0]);
            var w = new n(o, c.row, c.column), y = w.getCurrentToken();
            o.selection;
            var m = o.selection.toOrientedRange(), h, $;
            if (y && /comment/.test(y.type)) {
              for (var _, L; y && /comment/.test(y.type); ) {
                var x = y.value.indexOf(u.start);
                if (x != -1) {
                  var D = w.getCurrentTokenRow(), A = w.getCurrentTokenColumn() + x;
                  _ = new i(D, A, D, A + u.start.length);
                  break;
                }
                y = w.stepBackward();
              }
              for (var w = new n(o, c.row, c.column), y = w.getCurrentToken(); y && /comment/.test(y.type); ) {
                var x = y.value.indexOf(u.end);
                if (x != -1) {
                  var D = w.getCurrentTokenRow(), A = w.getCurrentTokenColumn() + x;
                  L = new i(D, A, D, A + u.end.length);
                  break;
                }
                y = w.stepForward();
              }
              L && o.remove(L), _ && (o.remove(_), h = _.start.row, $ = -u.start.length);
            } else
              $ = u.start.length, h = a.start.row, o.insert(a.end, u.end), o.insert(a.start, u.start);
            m.start.row == h && (m.start.column += $), m.end.row == h && (m.end.column += $), o.selection.fromOrientedRange(m);
          }
        }, this.getNextLineIndent = function(t, o, a) {
          return this.$getIndent(o);
        }, this.checkOutdent = function(t, o, a) {
          return !1;
        }, this.autoOutdent = function(t, o, a) {
        }, this.$getIndent = function(t) {
          return t.match(/^\s*/)[0];
        }, this.createWorker = function(t) {
          return null;
        }, this.createModeDelegates = function(t) {
          this.$embeds = [], this.$modes = {};
          for (var o in t)
            if (t[o]) {
              var a = t[o], c = a.prototype.$id, u = f.$modes[c];
              u || (f.$modes[c] = u = new a()), f.$modes[o] || (f.$modes[o] = u), this.$embeds.push(o), this.$modes[o] = u;
            }
          for (var w = [
            "toggleBlockComment",
            "toggleCommentLines",
            "getNextLineIndent",
            "checkOutdent",
            "autoOutdent",
            "transformAction",
            "getCompletions"
          ], y = function(h) {
            (function($) {
              var _ = w[h], L = $[_];
              $[w[h]] = function() {
                return this.$delegator(_, arguments, L);
              };
            })(m);
          }, m = this, o = 0; o < w.length; o++)
            y(o);
        }, this.$delegator = function(t, o, a) {
          var c = o[0] || "start";
          if (typeof c != "string") {
            if (Array.isArray(c[2])) {
              var u = c[2][c[2].length - 1], w = this.$modes[u];
              if (w)
                return w[t].apply(w, [c[1]].concat([].slice.call(o, 1)));
            }
            c = c[0] || "start";
          }
          for (var y = 0; y < this.$embeds.length; y++)
            if (this.$modes[this.$embeds[y]]) {
              var m = c.split(this.$embeds[y]);
              if (!m[0] && m[1]) {
                o[0] = m[1];
                var w = this.$modes[this.$embeds[y]];
                return w[t].apply(w, o);
              }
            }
          var h = a.apply(this, o);
          return a ? h : void 0;
        }, this.transformAction = function(t, o, a, c, u) {
          if (this.$behaviour) {
            var w = this.$behaviour.getBehaviours();
            for (var y in w)
              if (w[y][o]) {
                var m = w[y][o].apply(this, arguments);
                if (m)
                  return m;
              }
          }
        }, this.getKeywords = function(t) {
          if (!this.completionKeywords) {
            var o = this.$tokenizer.rules, a = [];
            for (var c in o)
              for (var u = o[c], w = 0, y = u.length; w < y; w++)
                if (typeof u[w].token == "string")
                  /keyword|support|storage/.test(u[w].token) && a.push(u[w].regex);
                else if (typeof u[w].token == "object") {
                  for (var m = 0, h = u[w].token.length; m < h; m++)
                    if (/keyword|support|storage/.test(u[w].token[m])) {
                      var c = u[w].regex.match(/\(.+?\)/g)[m];
                      a.push(c.substr(1, c.length - 2));
                    }
                }
            this.completionKeywords = a;
          }
          return t ? a.concat(this.$keywordList || []) : this.$keywordList;
        }, this.$createKeywordList = function() {
          return this.$highlightRules || this.getTokenizer(), this.$keywordList = this.$highlightRules.$keywordList || [];
        }, this.getCompletions = function(t, o, a, c) {
          var u = this.$keywordList || this.$createKeywordList();
          return u.map(function(w) {
            return {
              name: w,
              value: w,
              score: 0,
              meta: "keyword"
            };
          });
        }, this.$id = "ace/mode/text";
      }).call(r.prototype), S.Mode = r;
    }), ace.define("ace/line_widgets", ["require", "exports", "module", "ace/lib/dom"], function(M, S, R) {
      var f = M("./lib/dom"), v = (
        /** @class */
        function() {
          function p(s) {
            this.session = s, this.session.widgetManager = this, this.session.getRowLength = this.getRowLength, this.session.$getWidgetScreenLength = this.$getWidgetScreenLength, this.updateOnChange = this.updateOnChange.bind(this), this.renderWidgets = this.renderWidgets.bind(this), this.measureWidgets = this.measureWidgets.bind(this), this.session._changedWidgets = [], this.$onChangeEditor = this.$onChangeEditor.bind(this), this.session.on("change", this.updateOnChange), this.session.on("changeFold", this.updateOnFold), this.session.on("changeEditor", this.$onChangeEditor);
          }
          return p.prototype.getRowLength = function(s) {
            var l;
            return this.lineWidgets ? l = this.lineWidgets[s] && this.lineWidgets[s].rowCount || 0 : l = 0, !this.$useWrapMode || !this.$wrapData[s] ? 1 + l : this.$wrapData[s].length + 1 + l;
          }, p.prototype.$getWidgetScreenLength = function() {
            var s = 0;
            return this.lineWidgets.forEach(function(l) {
              l && l.rowCount && !l.hidden && (s += l.rowCount);
            }), s;
          }, p.prototype.$onChangeEditor = function(s) {
            this.attach(s.editor);
          }, p.prototype.attach = function(s) {
            s && s.widgetManager && s.widgetManager != this && s.widgetManager.detach(), this.editor != s && (this.detach(), this.editor = s, s && (s.widgetManager = this, s.renderer.on("beforeRender", this.measureWidgets), s.renderer.on("afterRender", this.renderWidgets)));
          }, p.prototype.detach = function(s) {
            var l = this.editor;
            if (l) {
              this.editor = null, l.widgetManager = null, l.renderer.off("beforeRender", this.measureWidgets), l.renderer.off("afterRender", this.renderWidgets);
              var e = this.session.lineWidgets;
              e && e.forEach(function(n) {
                n && n.el && n.el.parentNode && (n._inDocument = !1, n.el.parentNode.removeChild(n.el));
              });
            }
          }, p.prototype.updateOnFold = function(s, l) {
            var e = l.lineWidgets;
            if (!(!e || !s.action)) {
              for (var n = s.data, i = n.start.row, r = n.end.row, t = s.action == "add", o = i + 1; o < r; o++)
                e[o] && (e[o].hidden = t);
              e[r] && (t ? e[i] ? e[r].hidden = t : e[i] = e[r] : (e[i] == e[r] && (e[i] = void 0), e[r].hidden = t));
            }
          }, p.prototype.updateOnChange = function(s) {
            var l = this.session.lineWidgets;
            if (l) {
              var e = s.start.row, n = s.end.row - e;
              if (n !== 0) if (s.action == "remove") {
                var i = l.splice(e + 1, n);
                !l[e] && i[i.length - 1] && (l[e] = i.pop()), i.forEach(function(t) {
                  t && this.removeLineWidget(t);
                }, this), this.$updateRows();
              } else {
                var r = new Array(n);
                l[e] && l[e].column != null && s.start.column > l[e].column && e++, r.unshift(e, 0), l.splice.apply(l, r), this.$updateRows();
              }
            }
          }, p.prototype.$updateRows = function() {
            var s = this.session.lineWidgets;
            if (s) {
              var l = !0;
              s.forEach(function(e, n) {
                if (e)
                  for (l = !1, e.row = n; e.$oldWidget; )
                    e.$oldWidget.row = n, e = e.$oldWidget;
              }), l && (this.session.lineWidgets = null);
            }
          }, p.prototype.$registerLineWidget = function(s) {
            this.session.lineWidgets || (this.session.lineWidgets = new Array(this.session.getLength()));
            var l = this.session.lineWidgets[s.row];
            return l && (s.$oldWidget = l, l.el && l.el.parentNode && (l.el.parentNode.removeChild(l.el), l._inDocument = !1)), this.session.lineWidgets[s.row] = s, s;
          }, p.prototype.addLineWidget = function(s) {
            if (this.$registerLineWidget(s), s.session = this.session, !this.editor)
              return s;
            var l = this.editor.renderer;
            s.html && !s.el && (s.el = f.createElement("div"), s.el.innerHTML = s.html), s.text && !s.el && (s.el = f.createElement("div"), s.el.textContent = s.text), s.el && (f.addCssClass(s.el, "ace_lineWidgetContainer"), s.className && f.addCssClass(s.el, s.className), s.el.style.position = "absolute", s.el.style.zIndex = "5", l.container.appendChild(s.el), s._inDocument = !0, s.coverGutter || (s.el.style.zIndex = "3"), s.pixelHeight == null && (s.pixelHeight = s.el.offsetHeight)), s.rowCount == null && (s.rowCount = s.pixelHeight / l.layerConfig.lineHeight);
            var e = this.session.getFoldAt(s.row, 0);
            if (s.$fold = e, e) {
              var n = this.session.lineWidgets;
              s.row == e.end.row && !n[e.start.row] ? n[e.start.row] = s : s.hidden = !0;
            }
            return this.session._emit("changeFold", { data: { start: { row: s.row } } }), this.$updateRows(), this.renderWidgets(null, l), this.onWidgetChanged(s), s;
          }, p.prototype.removeLineWidget = function(s) {
            if (s._inDocument = !1, s.session = null, s.el && s.el.parentNode && s.el.parentNode.removeChild(s.el), s.editor && s.editor.destroy)
              try {
                s.editor.destroy();
              } catch {
              }
            if (this.session.lineWidgets) {
              var l = this.session.lineWidgets[s.row];
              if (l == s)
                this.session.lineWidgets[s.row] = s.$oldWidget, s.$oldWidget && this.onWidgetChanged(s.$oldWidget);
              else
                for (; l; ) {
                  if (l.$oldWidget == s) {
                    l.$oldWidget = s.$oldWidget;
                    break;
                  }
                  l = l.$oldWidget;
                }
            }
            this.session._emit("changeFold", { data: { start: { row: s.row } } }), this.$updateRows();
          }, p.prototype.getWidgetsAtRow = function(s) {
            for (var l = this.session.lineWidgets, e = l && l[s], n = []; e; )
              n.push(e), e = e.$oldWidget;
            return n;
          }, p.prototype.onWidgetChanged = function(s) {
            this.session._changedWidgets.push(s), this.editor && this.editor.renderer.updateFull();
          }, p.prototype.measureWidgets = function(s, l) {
            var e = this.session._changedWidgets, n = l.layerConfig;
            if (!(!e || !e.length)) {
              for (var i = 1 / 0, r = 0; r < e.length; r++) {
                var t = e[r];
                if (!(!t || !t.el) && t.session == this.session) {
                  if (!t._inDocument) {
                    if (this.session.lineWidgets[t.row] != t)
                      continue;
                    t._inDocument = !0, l.container.appendChild(t.el);
                  }
                  t.h = t.el.offsetHeight, t.fixedWidth || (t.w = t.el.offsetWidth, t.screenWidth = Math.ceil(t.w / n.characterWidth));
                  var o = t.h / n.lineHeight;
                  t.coverLine && (o -= this.session.getRowLineCount(t.row), o < 0 && (o = 0)), t.rowCount != o && (t.rowCount = o, t.row < i && (i = t.row));
                }
              }
              i != 1 / 0 && (this.session._emit("changeFold", { data: { start: { row: i } } }), this.session.lineWidgetWidth = null), this.session._changedWidgets = [];
            }
          }, p.prototype.renderWidgets = function(s, l) {
            var e = l.layerConfig, n = this.session.lineWidgets;
            if (n) {
              for (var i = Math.min(this.firstRow, e.firstRow), r = Math.max(this.lastRow, e.lastRow, n.length); i > 0 && !n[i]; )
                i--;
              this.firstRow = e.firstRow, this.lastRow = e.lastRow, l.$cursorLayer.config = e;
              for (var t = i; t <= r; t++) {
                var o = n[t];
                if (!(!o || !o.el)) {
                  if (o.hidden) {
                    o.el.style.top = -100 - (o.pixelHeight || 0) + "px";
                    continue;
                  }
                  o._inDocument || (o._inDocument = !0, l.container.appendChild(o.el));
                  var a = l.$cursorLayer.getPixelPosition({ row: t, column: 0 }, !0).top;
                  o.coverLine || (a += e.lineHeight * this.session.getRowLineCount(o.row)), o.el.style.top = a - e.offset + "px";
                  var c = o.coverGutter ? 0 : l.gutterWidth;
                  o.fixedWidth || (c -= l.scrollLeft), o.el.style.left = c + "px", o.fullWidth && o.screenWidth && (o.el.style.minWidth = e.width + 2 * e.padding + "px"), o.fixedWidth ? o.el.style.right = l.scrollBar.getWidth() + "px" : o.el.style.right = "";
                }
              }
            }
          }, p;
        }()
      );
      S.LineWidgets = v;
    }), ace.define("ace/apply_delta", ["require", "exports", "module"], function(M, S, R) {
      S.applyDelta = function(f, v, p) {
        var s = v.start.row, l = v.start.column, e = f[s] || "";
        switch (v.action) {
          case "insert":
            var n = v.lines;
            if (n.length === 1)
              f[s] = e.substring(0, l) + v.lines[0] + e.substring(l);
            else {
              var i = [s, 1].concat(v.lines);
              f.splice.apply(f, i), f[s] = e.substring(0, l) + f[s], f[s + v.lines.length - 1] += e.substring(l);
            }
            break;
          case "remove":
            var r = v.end.column, t = v.end.row;
            s === t ? f[s] = e.substring(0, l) + e.substring(r) : f.splice(s, t - s + 1, e.substring(0, l) + f[t].substring(r));
            break;
        }
      };
    }), ace.define("ace/anchor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(M, S, R) {
      var f = M("./lib/oop"), v = M("./lib/event_emitter").EventEmitter, p = (
        /** @class */
        function() {
          function e(n, i, r) {
            this.$onChange = this.onChange.bind(this), this.attach(n), typeof i != "number" ? this.setPosition(i.row, i.column) : this.setPosition(i, r);
          }
          return e.prototype.getPosition = function() {
            return this.$clipPositionToDocument(this.row, this.column);
          }, e.prototype.getDocument = function() {
            return this.document;
          }, e.prototype.onChange = function(n) {
            if (!(n.start.row == n.end.row && n.start.row != this.row) && !(n.start.row > this.row)) {
              var i = l(n, { row: this.row, column: this.column }, this.$insertRight);
              this.setPosition(i.row, i.column, !0);
            }
          }, e.prototype.setPosition = function(n, i, r) {
            var t;
            if (r ? t = {
              row: n,
              column: i
            } : t = this.$clipPositionToDocument(n, i), !(this.row == t.row && this.column == t.column)) {
              var o = {
                row: this.row,
                column: this.column
              };
              this.row = t.row, this.column = t.column, this._signal("change", {
                old: o,
                value: t
              });
            }
          }, e.prototype.detach = function() {
            this.document.off("change", this.$onChange);
          }, e.prototype.attach = function(n) {
            this.document = n || this.document, this.document.on("change", this.$onChange);
          }, e.prototype.$clipPositionToDocument = function(n, i) {
            var r = {};
            return n >= this.document.getLength() ? (r.row = Math.max(0, this.document.getLength() - 1), r.column = this.document.getLine(r.row).length) : n < 0 ? (r.row = 0, r.column = 0) : (r.row = n, r.column = Math.min(this.document.getLine(r.row).length, Math.max(0, i))), i < 0 && (r.column = 0), r;
          }, e;
        }()
      );
      p.prototype.$insertRight = !1, f.implement(p.prototype, v);
      function s(e, n, i) {
        var r = i ? e.column <= n.column : e.column < n.column;
        return e.row < n.row || e.row == n.row && r;
      }
      function l(e, n, i) {
        var r = e.action == "insert", t = (r ? 1 : -1) * (e.end.row - e.start.row), o = (r ? 1 : -1) * (e.end.column - e.start.column), a = e.start, c = r ? a : e.end;
        return s(n, a, i) ? {
          row: n.row,
          column: n.column
        } : s(c, n, !i) ? {
          row: n.row + t,
          column: n.column + (n.row == c.row ? o : 0)
        } : {
          row: a.row,
          column: a.column
        };
      }
      S.Anchor = p;
    }), ace.define("ace/document", ["require", "exports", "module", "ace/lib/oop", "ace/apply_delta", "ace/lib/event_emitter", "ace/range", "ace/anchor"], function(M, S, R) {
      var f = M("./lib/oop"), v = M("./apply_delta").applyDelta, p = M("./lib/event_emitter").EventEmitter, s = M("./range").Range, l = M("./anchor").Anchor, e = (
        /** @class */
        function() {
          function n(i) {
            this.$lines = [""], i.length === 0 ? this.$lines = [""] : Array.isArray(i) ? this.insertMergedLines({ row: 0, column: 0 }, i) : this.insert({ row: 0, column: 0 }, i);
          }
          return n.prototype.setValue = function(i) {
            var r = this.getLength() - 1;
            this.remove(new s(0, 0, r, this.getLine(r).length)), this.insert({ row: 0, column: 0 }, i || "");
          }, n.prototype.getValue = function() {
            return this.getAllLines().join(this.getNewLineCharacter());
          }, n.prototype.createAnchor = function(i, r) {
            return new l(this, i, r);
          }, n.prototype.$detectNewLine = function(i) {
            var r = i.match(/^.*?(\r\n|\r|\n)/m);
            this.$autoNewLine = r ? r[1] : `
`, this._signal("changeNewLineMode");
          }, n.prototype.getNewLineCharacter = function() {
            switch (this.$newLineMode) {
              case "windows":
                return `\r
`;
              case "unix":
                return `
`;
              default:
                return this.$autoNewLine || `
`;
            }
          }, n.prototype.setNewLineMode = function(i) {
            this.$newLineMode !== i && (this.$newLineMode = i, this._signal("changeNewLineMode"));
          }, n.prototype.getNewLineMode = function() {
            return this.$newLineMode;
          }, n.prototype.isNewLine = function(i) {
            return i == `\r
` || i == "\r" || i == `
`;
          }, n.prototype.getLine = function(i) {
            return this.$lines[i] || "";
          }, n.prototype.getLines = function(i, r) {
            return this.$lines.slice(i, r + 1);
          }, n.prototype.getAllLines = function() {
            return this.getLines(0, this.getLength());
          }, n.prototype.getLength = function() {
            return this.$lines.length;
          }, n.prototype.getTextRange = function(i) {
            return this.getLinesForRange(i).join(this.getNewLineCharacter());
          }, n.prototype.getLinesForRange = function(i) {
            var r;
            if (i.start.row === i.end.row)
              r = [this.getLine(i.start.row).substring(i.start.column, i.end.column)];
            else {
              r = this.getLines(i.start.row, i.end.row), r[0] = (r[0] || "").substring(i.start.column);
              var t = r.length - 1;
              i.end.row - i.start.row == t && (r[t] = r[t].substring(0, i.end.column));
            }
            return r;
          }, n.prototype.insertLines = function(i, r) {
            return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."), this.insertFullLines(i, r);
          }, n.prototype.removeLines = function(i, r) {
            return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."), this.removeFullLines(i, r);
          }, n.prototype.insertNewLine = function(i) {
            return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."), this.insertMergedLines(i, ["", ""]);
          }, n.prototype.insert = function(i, r) {
            return this.getLength() <= 1 && this.$detectNewLine(r), this.insertMergedLines(i, this.$split(r));
          }, n.prototype.insertInLine = function(i, r) {
            var t = this.clippedPos(i.row, i.column), o = this.pos(i.row, i.column + r.length);
            return this.applyDelta({
              start: t,
              end: o,
              action: "insert",
              lines: [r]
            }, !0), this.clonePos(o);
          }, n.prototype.clippedPos = function(i, r) {
            var t = this.getLength();
            i === void 0 ? i = t : i < 0 ? i = 0 : i >= t && (i = t - 1, r = void 0);
            var o = this.getLine(i);
            return r == null && (r = o.length), r = Math.min(Math.max(r, 0), o.length), { row: i, column: r };
          }, n.prototype.clonePos = function(i) {
            return { row: i.row, column: i.column };
          }, n.prototype.pos = function(i, r) {
            return { row: i, column: r };
          }, n.prototype.$clipPosition = function(i) {
            var r = this.getLength();
            return i.row >= r ? (i.row = Math.max(0, r - 1), i.column = this.getLine(r - 1).length) : (i.row = Math.max(0, i.row), i.column = Math.min(Math.max(i.column, 0), this.getLine(i.row).length)), i;
          }, n.prototype.insertFullLines = function(i, r) {
            i = Math.min(Math.max(i, 0), this.getLength());
            var t = 0;
            i < this.getLength() ? (r = r.concat([""]), t = 0) : (r = [""].concat(r), i--, t = this.$lines[i].length), this.insertMergedLines({ row: i, column: t }, r);
          }, n.prototype.insertMergedLines = function(i, r) {
            var t = this.clippedPos(i.row, i.column), o = {
              row: t.row + r.length - 1,
              column: (r.length == 1 ? t.column : 0) + r[r.length - 1].length
            };
            return this.applyDelta({
              start: t,
              end: o,
              action: "insert",
              lines: r
            }), this.clonePos(o);
          }, n.prototype.remove = function(i) {
            var r = this.clippedPos(i.start.row, i.start.column), t = this.clippedPos(i.end.row, i.end.column);
            return this.applyDelta({
              start: r,
              end: t,
              action: "remove",
              lines: this.getLinesForRange({ start: r, end: t })
            }), this.clonePos(r);
          }, n.prototype.removeInLine = function(i, r, t) {
            var o = this.clippedPos(i, r), a = this.clippedPos(i, t);
            return this.applyDelta({
              start: o,
              end: a,
              action: "remove",
              lines: this.getLinesForRange({ start: o, end: a })
            }, !0), this.clonePos(o);
          }, n.prototype.removeFullLines = function(i, r) {
            i = Math.min(Math.max(0, i), this.getLength() - 1), r = Math.min(Math.max(0, r), this.getLength() - 1);
            var t = r == this.getLength() - 1 && i > 0, o = r < this.getLength() - 1, a = t ? i - 1 : i, c = t ? this.getLine(a).length : 0, u = o ? r + 1 : r, w = o ? 0 : this.getLine(u).length, y = new s(a, c, u, w), m = this.$lines.slice(i, r + 1);
            return this.applyDelta({
              start: y.start,
              end: y.end,
              action: "remove",
              lines: this.getLinesForRange(y)
            }), m;
          }, n.prototype.removeNewLine = function(i) {
            i < this.getLength() - 1 && i >= 0 && this.applyDelta({
              start: this.pos(i, this.getLine(i).length),
              end: this.pos(i + 1, 0),
              action: "remove",
              lines: ["", ""]
            });
          }, n.prototype.replace = function(i, r) {
            if (i instanceof s || (i = s.fromPoints(i.start, i.end)), r.length === 0 && i.isEmpty())
              return i.start;
            if (r == this.getTextRange(i))
              return i.end;
            this.remove(i);
            var t;
            return r ? t = this.insert(i.start, r) : t = i.start, t;
          }, n.prototype.applyDeltas = function(i) {
            for (var r = 0; r < i.length; r++)
              this.applyDelta(i[r]);
          }, n.prototype.revertDeltas = function(i) {
            for (var r = i.length - 1; r >= 0; r--)
              this.revertDelta(i[r]);
          }, n.prototype.applyDelta = function(i, r) {
            var t = i.action == "insert";
            (t ? i.lines.length <= 1 && !i.lines[0] : !s.comparePoints(i.start, i.end)) || (t && i.lines.length > 2e4 ? this.$splitAndapplyLargeDelta(i, 2e4) : (v(this.$lines, i, r), this._signal("change", i)));
          }, n.prototype.$safeApplyDelta = function(i) {
            var r = this.$lines.length;
            (i.action == "remove" && i.start.row < r && i.end.row < r || i.action == "insert" && i.start.row <= r) && this.applyDelta(i);
          }, n.prototype.$splitAndapplyLargeDelta = function(i, r) {
            for (var t = i.lines, o = t.length - r + 1, a = i.start.row, c = i.start.column, u = 0, w = 0; u < o; u = w) {
              w += r - 1;
              var y = t.slice(u, w);
              y.push(""), this.applyDelta({
                start: this.pos(a + u, c),
                end: this.pos(a + w, c = 0),
                action: i.action,
                lines: y
              }, !0);
            }
            i.lines = t.slice(u), i.start.row = a + u, i.start.column = c, this.applyDelta(i, !0);
          }, n.prototype.revertDelta = function(i) {
            this.$safeApplyDelta({
              start: this.clonePos(i.start),
              end: this.clonePos(i.end),
              action: i.action == "insert" ? "remove" : "insert",
              lines: i.lines.slice()
            });
          }, n.prototype.indexToPosition = function(i, r) {
            for (var t = this.$lines || this.getAllLines(), o = this.getNewLineCharacter().length, a = r || 0, c = t.length; a < c; a++)
              if (i -= t[a].length + o, i < 0)
                return { row: a, column: i + t[a].length + o };
            return { row: c - 1, column: i + t[c - 1].length + o };
          }, n.prototype.positionToIndex = function(i, r) {
            for (var t = this.$lines || this.getAllLines(), o = this.getNewLineCharacter().length, a = 0, c = Math.min(i.row, t.length), u = r || 0; u < c; ++u)
              a += t[u].length + o;
            return a + i.column;
          }, n.prototype.$split = function(i) {
            return i.split(/\r\n|\r|\n/);
          }, n;
        }()
      );
      e.prototype.$autoNewLine = "", e.prototype.$newLineMode = "auto", f.implement(e.prototype, p), S.Document = e;
    }), ace.define("ace/background_tokenizer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(M, S, R) {
      var f = M("./lib/oop"), v = M("./lib/event_emitter").EventEmitter, p = (
        /** @class */
        function() {
          function s(l, e) {
            this.running = !1, this.lines = [], this.states = [], this.currentLine = 0, this.tokenizer = l;
            var n = this;
            this.$worker = function() {
              if (n.running) {
                for (var i = /* @__PURE__ */ new Date(), r = n.currentLine, t = -1, o = n.doc, a = r; n.lines[r]; )
                  r++;
                var c = o.getLength(), u = 0;
                for (n.running = !1; r < c; ) {
                  n.$tokenizeRow(r), t = r;
                  do
                    r++;
                  while (n.lines[r]);
                  if (u++, u % 5 === 0 && /* @__PURE__ */ new Date() - i > 20) {
                    n.running = setTimeout(n.$worker, 20);
                    break;
                  }
                }
                n.currentLine = r, t == -1 && (t = r), a <= t && n.fireUpdateEvent(a, t);
              }
            };
          }
          return s.prototype.setTokenizer = function(l) {
            this.tokenizer = l, this.lines = [], this.states = [], this.start(0);
          }, s.prototype.setDocument = function(l) {
            this.doc = l, this.lines = [], this.states = [], this.stop();
          }, s.prototype.fireUpdateEvent = function(l, e) {
            var n = {
              first: l,
              last: e
            };
            this._signal("update", { data: n });
          }, s.prototype.start = function(l) {
            this.currentLine = Math.min(l || 0, this.currentLine, this.doc.getLength()), this.lines.splice(this.currentLine, this.lines.length), this.states.splice(this.currentLine, this.states.length), this.stop(), this.running = setTimeout(this.$worker, 700);
          }, s.prototype.scheduleStart = function() {
            this.running || (this.running = setTimeout(this.$worker, 700));
          }, s.prototype.$updateOnChange = function(l) {
            var e = l.start.row, n = l.end.row - e;
            if (n === 0)
              this.lines[e] = null;
            else if (l.action == "remove")
              this.lines.splice(e, n + 1, null), this.states.splice(e, n + 1, null);
            else {
              var i = Array(n + 1);
              i.unshift(e, 1), this.lines.splice.apply(this.lines, i), this.states.splice.apply(this.states, i);
            }
            this.currentLine = Math.min(e, this.currentLine, this.doc.getLength()), this.stop();
          }, s.prototype.stop = function() {
            this.running && clearTimeout(this.running), this.running = !1;
          }, s.prototype.getTokens = function(l) {
            return this.lines[l] || this.$tokenizeRow(l);
          }, s.prototype.getState = function(l) {
            return this.currentLine == l && this.$tokenizeRow(l), this.states[l] || "start";
          }, s.prototype.$tokenizeRow = function(l) {
            var e = this.doc.getLine(l), n = this.states[l - 1], i = this.tokenizer.getLineTokens(e, n, l);
            return this.states[l] + "" != i.state + "" ? (this.states[l] = i.state, this.lines[l + 1] = null, this.currentLine > l + 1 && (this.currentLine = l + 1)) : this.currentLine == l && (this.currentLine = l + 1), this.lines[l] = i.tokens;
          }, s.prototype.cleanup = function() {
            this.running = !1, this.lines = [], this.states = [], this.currentLine = 0, this.removeAllListeners();
          }, s;
        }()
      );
      f.implement(p.prototype, v), S.BackgroundTokenizer = p;
    }), ace.define("ace/search_highlight", ["require", "exports", "module", "ace/lib/lang", "ace/range"], function(M, S, R) {
      var f = M("./lib/lang"), v = M("./range").Range, p = (
        /** @class */
        function() {
          function s(l, e, n) {
            n === void 0 && (n = "text"), this.setRegexp(l), this.clazz = e, this.type = n, this.docLen = 0;
          }
          return s.prototype.setRegexp = function(l) {
            this.regExp + "" != l + "" && (this.regExp = l, this.cache = []);
          }, s.prototype.update = function(l, e, n, i) {
            if (this.regExp) {
              for (var r = i.firstRow, t = i.lastRow, o = {}, a = n.$editor && n.$editor.$search, c = a && a.$isMultilineSearch(n.$editor.getLastSearchOptions()), u = r; u <= t; u++) {
                var w = this.cache[u];
                if (w == null || n.getValue().length != this.docLen) {
                  if (c) {
                    w = [];
                    var y = a.$multiLineForward(n, this.regExp, u, t);
                    if (y) {
                      var m = y.endRow <= t ? y.endRow - 1 : t;
                      m > u && (u = m), w.push(new v(y.startRow, y.startCol, y.endRow, y.endCol));
                    }
                    w.length > this.MAX_RANGES && (w = w.slice(0, this.MAX_RANGES));
                  } else
                    w = f.getMatchOffsets(n.getLine(u), this.regExp), w.length > this.MAX_RANGES && (w = w.slice(0, this.MAX_RANGES)), w = w.map(function(L) {
                      return new v(u, L.offset, u, L.offset + L.length);
                    });
                  this.cache[u] = w.length ? w : "";
                }
                if (w.length !== 0)
                  for (var h = w.length; h--; ) {
                    var $ = w[h].toScreenRange(n), _ = $.toString();
                    o[_] || (o[_] = !0, e.drawSingleLineMarker(l, $, this.clazz, i));
                  }
              }
              this.docLen = n.getValue().length;
            }
          }, s;
        }()
      );
      p.prototype.MAX_RANGES = 500, S.SearchHighlight = p;
    }), ace.define("ace/undomanager", ["require", "exports", "module", "ace/range"], function(M, S, R) {
      var f = (
        /** @class */
        function() {
          function m() {
            this.$keepRedoStack, this.$maxRev = 0, this.$fromUndo = !1, this.$undoDepth = 1 / 0, this.reset();
          }
          return m.prototype.addSession = function(h) {
            this.$session = h;
          }, m.prototype.add = function(h, $, _) {
            if (!this.$fromUndo && h != this.$lastDelta) {
              if (this.$keepRedoStack || (this.$redoStack.length = 0), $ === !1 || !this.lastDeltas) {
                this.lastDeltas = [];
                var L = this.$undoStack.length;
                L > this.$undoDepth - 1 && this.$undoStack.splice(0, L - this.$undoDepth + 1), this.$undoStack.push(this.lastDeltas), h.id = this.$rev = ++this.$maxRev;
              }
              (h.action == "remove" || h.action == "insert") && (this.$lastDelta = h), this.lastDeltas.push(h);
            }
          }, m.prototype.addSelection = function(h, $) {
            this.selections.push({
              value: h,
              rev: $ || this.$rev
            });
          }, m.prototype.startNewGroup = function() {
            return this.lastDeltas = null, this.$rev;
          }, m.prototype.markIgnored = function(h, $) {
            $ == null && ($ = this.$rev + 1);
            for (var _ = this.$undoStack, L = _.length; L--; ) {
              var x = _[L][0];
              if (x.id <= h)
                break;
              x.id < $ && (x.ignore = !0);
            }
            this.lastDeltas = null;
          }, m.prototype.getSelection = function(h, $) {
            for (var _ = this.selections, L = _.length; L--; ) {
              var x = _[L];
              if (x.rev < h)
                return $ && (x = _[L + 1]), x;
            }
          }, m.prototype.getRevision = function() {
            return this.$rev;
          }, m.prototype.getDeltas = function(h, $) {
            $ == null && ($ = this.$rev + 1);
            for (var _ = this.$undoStack, L = null, x = 0, D = _.length; D--; ) {
              var A = _[D][0];
              if (A.id < $ && !L && (L = D + 1), A.id <= h) {
                x = D + 1;
                break;
              }
            }
            return _.slice(x, L);
          }, m.prototype.getChangedRanges = function(h, $) {
            $ == null && ($ = this.$rev + 1);
          }, m.prototype.getChangedLines = function(h, $) {
            $ == null && ($ = this.$rev + 1);
          }, m.prototype.undo = function(h, $) {
            this.lastDeltas = null;
            var _ = this.$undoStack;
            if (v(_, _.length)) {
              h || (h = this.$session), this.$redoStackBaseRev !== this.$rev && this.$redoStack.length && (this.$redoStack = []), this.$fromUndo = !0;
              var L = _.pop(), x = null;
              return L && (x = h.undoChanges(L, $), this.$redoStack.push(L), this.$syncRev()), this.$fromUndo = !1, x;
            }
          }, m.prototype.redo = function(h, $) {
            if (this.lastDeltas = null, h || (h = this.$session), this.$fromUndo = !0, this.$redoStackBaseRev != this.$rev) {
              var _ = this.getDeltas(this.$redoStackBaseRev, this.$rev + 1);
              y(this.$redoStack, _), this.$redoStackBaseRev = this.$rev, this.$redoStack.forEach(function(D) {
                D[0].id = ++this.$maxRev;
              }, this);
            }
            var L = this.$redoStack.pop(), x = null;
            return L && (x = h.redoChanges(L, $), this.$undoStack.push(L), this.$syncRev()), this.$fromUndo = !1, x;
          }, m.prototype.$syncRev = function() {
            var h = this.$undoStack, $ = h[h.length - 1], _ = $ && $[0].id || 0;
            this.$redoStackBaseRev = _, this.$rev = _;
          }, m.prototype.reset = function() {
            this.lastDeltas = null, this.$lastDelta = null, this.$undoStack = [], this.$redoStack = [], this.$rev = 0, this.mark = 0, this.$redoStackBaseRev = this.$rev, this.selections = [];
          }, m.prototype.canUndo = function() {
            return this.$undoStack.length > 0;
          }, m.prototype.canRedo = function() {
            return this.$redoStack.length > 0;
          }, m.prototype.bookmark = function(h) {
            h == null && (h = this.$rev), this.mark = h;
          }, m.prototype.isAtBookmark = function() {
            return this.$rev === this.mark;
          }, m.prototype.toJSON = function() {
            return {
              $redoStack: this.$redoStack,
              $undoStack: this.$undoStack
            };
          }, m.prototype.fromJSON = function(h) {
            this.reset(), this.$undoStack = h.$undoStack, this.$redoStack = h.$redoStack;
          }, m.prototype.$prettyPrint = function(h) {
            return h ? n(h) : n(this.$undoStack) + `
---
` + n(this.$redoStack);
          }, m;
        }()
      );
      f.prototype.hasUndo = f.prototype.canUndo, f.prototype.hasRedo = f.prototype.canRedo, f.prototype.isClean = f.prototype.isAtBookmark, f.prototype.markClean = f.prototype.bookmark;
      function v(m, h) {
        for (var $ = h; $--; ) {
          var _ = m[$];
          if (_ && !_[0].ignore) {
            for (; $ < h - 1; ) {
              var L = t(m[$], m[$ + 1]);
              m[$] = L[0], m[$ + 1] = L[1], $++;
            }
            return !0;
          }
        }
      }
      var p = M("./range").Range, s = p.comparePoints;
      p.comparePoints;
      function l(m) {
        return { row: m.row, column: m.column };
      }
      function e(m) {
        return {
          start: l(m.start),
          end: l(m.end),
          action: m.action,
          lines: m.lines.slice()
        };
      }
      function n(m) {
        if (m = m || this, Array.isArray(m))
          return m.map(n).join(`
`);
        var h = "";
        return m.action ? (h = m.action == "insert" ? "+" : "-", h += "[" + m.lines + "]") : m.value && (Array.isArray(m.value) ? h = m.value.map(i).join(`
`) : h = i(m.value)), m.start && (h += i(m)), (m.id || m.rev) && (h += "	(" + (m.id || m.rev) + ")"), h;
      }
      function i(m) {
        return m.start.row + ":" + m.start.column + "=>" + m.end.row + ":" + m.end.column;
      }
      function r(m, h) {
        var $ = m.action == "insert", _ = h.action == "insert";
        if ($ && _)
          if (s(h.start, m.end) >= 0)
            a(h, m, -1);
          else if (s(h.start, m.start) <= 0)
            a(m, h, 1);
          else
            return null;
        else if ($ && !_)
          if (s(h.start, m.end) >= 0)
            a(h, m, -1);
          else if (s(h.end, m.start) <= 0)
            a(m, h, -1);
          else
            return null;
        else if (!$ && _)
          if (s(h.start, m.start) >= 0)
            a(h, m, 1);
          else if (s(h.start, m.start) <= 0)
            a(m, h, 1);
          else
            return null;
        else if (!$ && !_)
          if (s(h.start, m.start) >= 0)
            a(h, m, 1);
          else if (s(h.end, m.start) <= 0)
            a(m, h, -1);
          else
            return null;
        return [h, m];
      }
      function t(m, h) {
        for (var $ = m.length; $--; )
          for (var _ = 0; _ < h.length; _++)
            if (!r(m[$], h[_])) {
              for (; $ < m.length; ) {
                for (; _--; )
                  r(h[_], m[$]);
                _ = h.length, $++;
              }
              return [m, h];
            }
        return m.selectionBefore = h.selectionBefore = m.selectionAfter = h.selectionAfter = null, [h, m];
      }
      function o(m, h) {
        var $ = m.action == "insert", _ = h.action == "insert";
        if ($ && _)
          s(m.start, h.start) < 0 ? a(h, m, 1) : a(m, h, 1);
        else if ($ && !_)
          s(m.start, h.end) >= 0 ? a(m, h, -1) : (s(m.start, h.start) <= 0 || a(m, p.fromPoints(h.start, m.start), -1), a(h, m, 1));
        else if (!$ && _)
          s(h.start, m.end) >= 0 ? a(h, m, -1) : (s(h.start, m.start) <= 0 || a(h, p.fromPoints(m.start, h.start), -1), a(m, h, 1));
        else if (!$ && !_)
          if (s(h.start, m.end) >= 0)
            a(h, m, -1);
          else if (s(h.end, m.start) <= 0)
            a(m, h, -1);
          else {
            var L, x;
            return s(m.start, h.start) < 0 && (L = m, m = u(m, h.start)), s(m.end, h.end) > 0 && (x = u(m, h.end)), c(h.end, m.start, m.end, -1), x && !L && (m.lines = x.lines, m.start = x.start, m.end = x.end, x = m), [h, L, x].filter(Boolean);
          }
        return [h, m];
      }
      function a(m, h, $) {
        c(m.start, h.start, h.end, $), c(m.end, h.start, h.end, $);
      }
      function c(m, h, $, _) {
        m.row == (_ == 1 ? h : $).row && (m.column += _ * ($.column - h.column)), m.row += _ * ($.row - h.row);
      }
      function u(m, h) {
        var $ = m.lines, _ = m.end;
        m.end = l(h);
        var L = m.end.row - m.start.row, x = $.splice(L, $.length), D = L ? h.column : h.column - m.start.column;
        $.push(x[0].substring(0, D)), x[0] = x[0].substr(D);
        var A = {
          start: l(h),
          end: _,
          lines: x,
          action: m.action
        };
        return A;
      }
      function w(m, h) {
        h = e(h);
        for (var $ = m.length; $--; ) {
          for (var _ = m[$], L = 0; L < _.length; L++) {
            var x = _[L], D = o(x, h);
            h = D[0], D.length != 2 && (D[2] ? (_.splice(L + 1, 1, D[1], D[2]), L++) : D[1] || (_.splice(L, 1), L--));
          }
          _.length || m.splice($, 1);
        }
        return m;
      }
      function y(m, h) {
        for (var $ = 0; $ < h.length; $++)
          for (var _ = h[$], L = 0; L < _.length; L++)
            w(m, _[L]);
      }
      S.UndoManager = f;
    }), ace.define("ace/edit_session/fold_line", ["require", "exports", "module", "ace/range"], function(M, S, R) {
      var f = M("../range").Range, v = (
        /** @class */
        function() {
          function p(s, l) {
            this.foldData = s, Array.isArray(l) ? this.folds = l : l = this.folds = [l];
            var e = l[l.length - 1];
            this.range = new f(l[0].start.row, l[0].start.column, e.end.row, e.end.column), this.start = this.range.start, this.end = this.range.end, this.folds.forEach(function(n) {
              n.setFoldLine(this);
            }, this);
          }
          return p.prototype.shiftRow = function(s) {
            this.start.row += s, this.end.row += s, this.folds.forEach(function(l) {
              l.start.row += s, l.end.row += s;
            });
          }, p.prototype.addFold = function(s) {
            if (s.sameRow) {
              if (s.start.row < this.startRow || s.endRow > this.endRow)
                throw new Error("Can't add a fold to this FoldLine as it has no connection");
              this.folds.push(s), this.folds.sort(function(l, e) {
                return -l.range.compareEnd(e.start.row, e.start.column);
              }), this.range.compareEnd(s.start.row, s.start.column) > 0 ? (this.end.row = s.end.row, this.end.column = s.end.column) : this.range.compareStart(s.end.row, s.end.column) < 0 && (this.start.row = s.start.row, this.start.column = s.start.column);
            } else if (s.start.row == this.end.row)
              this.folds.push(s), this.end.row = s.end.row, this.end.column = s.end.column;
            else if (s.end.row == this.start.row)
              this.folds.unshift(s), this.start.row = s.start.row, this.start.column = s.start.column;
            else
              throw new Error("Trying to add fold to FoldRow that doesn't have a matching row");
            s.foldLine = this;
          }, p.prototype.containsRow = function(s) {
            return s >= this.start.row && s <= this.end.row;
          }, p.prototype.walk = function(s, l, e) {
            var n = 0, i = this.folds, r, t, o, a = !0;
            l == null && (l = this.end.row, e = this.end.column);
            for (var c = 0; c < i.length; c++) {
              if (r = i[c], t = r.range.compareStart(l, e), t == -1) {
                s(null, l, e, n, a);
                return;
              }
              if (o = s(null, r.start.row, r.start.column, n, a), o = !o && s(r.placeholder, r.start.row, r.start.column, n), o || t === 0)
                return;
              a = !r.sameRow, n = r.end.column;
            }
            s(null, l, e, n, a);
          }, p.prototype.getNextFoldTo = function(s, l) {
            for (var e, n, i = 0; i < this.folds.length; i++) {
              if (e = this.folds[i], n = e.range.compareEnd(s, l), n == -1)
                return {
                  fold: e,
                  kind: "after"
                };
              if (n === 0)
                return {
                  fold: e,
                  kind: "inside"
                };
            }
            return null;
          }, p.prototype.addRemoveChars = function(s, l, e) {
            var n = this.getNextFoldTo(s, l), i, r;
            if (n) {
              if (i = n.fold, n.kind == "inside" && i.start.column != l && i.start.row != s)
                window.console && window.console.log(s, l, i);
              else if (i.start.row == s) {
                r = this.folds;
                var t = r.indexOf(i);
                for (t === 0 && (this.start.column += e), t; t < r.length; t++) {
                  if (i = r[t], i.start.column += e, !i.sameRow)
                    return;
                  i.end.column += e;
                }
                this.end.column += e;
              }
            }
          }, p.prototype.split = function(s, l) {
            var e = this.getNextFoldTo(s, l);
            if (!e || e.kind == "inside")
              return null;
            var n = e.fold, i = this.folds, r = this.foldData, t = i.indexOf(n), o = i[t - 1];
            this.end.row = o.end.row, this.end.column = o.end.column, i = i.splice(t, i.length - t);
            var a = new p(r, i);
            return r.splice(r.indexOf(this) + 1, 0, a), a;
          }, p.prototype.merge = function(s) {
            for (var l = s.folds, e = 0; e < l.length; e++)
              this.addFold(l[e]);
            var n = this.foldData;
            n.splice(n.indexOf(s), 1);
          }, p.prototype.toString = function() {
            var s = [this.range.toString() + ": ["];
            return this.folds.forEach(function(l) {
              s.push("  " + l.toString());
            }), s.push("]"), s.join(`
`);
          }, p.prototype.idxToPosition = function(s) {
            for (var l = 0, e = 0; e < this.folds.length; e++) {
              var n = this.folds[e];
              if (s -= n.start.column - l, s < 0)
                return {
                  row: n.start.row,
                  column: n.start.column + s
                };
              if (s -= n.placeholder.length, s < 0)
                return n.start;
              l = n.end.column;
            }
            return {
              row: this.end.row,
              column: this.end.column + s
            };
          }, p;
        }()
      );
      S.FoldLine = v;
    }), ace.define("ace/range_list", ["require", "exports", "module", "ace/range"], function(M, S, R) {
      var f = M("./range").Range, v = f.comparePoints, p = (
        /** @class */
        function() {
          function s() {
            this.ranges = [], this.$bias = 1;
          }
          return s.prototype.pointIndex = function(l, e, n) {
            for (var i = this.ranges, r = n || 0; r < i.length; r++) {
              var t = i[r], o = v(l, t.end);
              if (!(o > 0)) {
                var a = v(l, t.start);
                return o === 0 ? e && a !== 0 ? -r - 2 : r : a > 0 || a === 0 && !e ? r : -r - 1;
              }
            }
            return -r - 1;
          }, s.prototype.add = function(l) {
            var e = !l.isEmpty(), n = this.pointIndex(l.start, e);
            n < 0 && (n = -n - 1);
            var i = this.pointIndex(l.end, e, n);
            return i < 0 ? i = -i - 1 : i++, this.ranges.splice(n, i - n, l);
          }, s.prototype.addList = function(l) {
            for (var e = [], n = l.length; n--; )
              e.push.apply(e, this.add(l[n]));
            return e;
          }, s.prototype.substractPoint = function(l) {
            var e = this.pointIndex(l);
            if (e >= 0)
              return this.ranges.splice(e, 1);
          }, s.prototype.merge = function() {
            var l = [], e = this.ranges;
            e = e.sort(function(o, a) {
              return v(o.start, a.start);
            });
            for (var n = e[0], i, r = 1; r < e.length; r++) {
              i = n, n = e[r];
              var t = v(i.end, n.start);
              t < 0 || t == 0 && !i.isEmpty() && !n.isEmpty() || (v(i.end, n.end) < 0 && (i.end.row = n.end.row, i.end.column = n.end.column), e.splice(r, 1), l.push(n), n = i, r--);
            }
            return this.ranges = e, l;
          }, s.prototype.contains = function(l, e) {
            return this.pointIndex({ row: l, column: e }) >= 0;
          }, s.prototype.containsPoint = function(l) {
            return this.pointIndex(l) >= 0;
          }, s.prototype.rangeAtPoint = function(l) {
            var e = this.pointIndex(l);
            if (e >= 0)
              return this.ranges[e];
          }, s.prototype.clipRows = function(l, e) {
            var n = this.ranges;
            if (n[0].start.row > e || n[n.length - 1].start.row < l)
              return [];
            var i = this.pointIndex({ row: l, column: 0 });
            i < 0 && (i = -i - 1);
            var r = this.pointIndex({ row: e, column: 0 }, i);
            r < 0 && (r = -r - 1);
            for (var t = [], o = i; o < r; o++)
              t.push(n[o]);
            return t;
          }, s.prototype.removeAll = function() {
            return this.ranges.splice(0, this.ranges.length);
          }, s.prototype.attach = function(l) {
            this.session && this.detach(), this.session = l, this.onChange = this.$onChange.bind(this), this.session.on("change", this.onChange);
          }, s.prototype.detach = function() {
            this.session && (this.session.removeListener("change", this.onChange), this.session = null);
          }, s.prototype.$onChange = function(l) {
            for (var e = l.start, n = l.end, i = e.row, r = n.row, t = this.ranges, o = 0, a = t.length; o < a; o++) {
              var c = t[o];
              if (c.end.row >= i)
                break;
            }
            if (l.action == "insert")
              for (var u = r - i, w = -e.column + n.column; o < a; o++) {
                var c = t[o];
                if (c.start.row > i)
                  break;
                if (c.start.row == i && c.start.column >= e.column && (c.start.column == e.column && this.$bias <= 0 || (c.start.column += w, c.start.row += u)), c.end.row == i && c.end.column >= e.column) {
                  if (c.end.column == e.column && this.$bias < 0)
                    continue;
                  c.end.column == e.column && w > 0 && o < a - 1 && c.end.column > c.start.column && c.end.column == t[o + 1].start.column && (c.end.column -= w), c.end.column += w, c.end.row += u;
                }
              }
            else
              for (var u = i - r, w = e.column - n.column; o < a; o++) {
                var c = t[o];
                if (c.start.row > r)
                  break;
                c.end.row < r && (i < c.end.row || i == c.end.row && e.column < c.end.column) ? (c.end.row = i, c.end.column = e.column) : c.end.row == r ? c.end.column <= n.column ? (u || c.end.column > e.column) && (c.end.column = e.column, c.end.row = e.row) : (c.end.column += w, c.end.row += u) : c.end.row > r && (c.end.row += u), c.start.row < r && (i < c.start.row || i == c.start.row && e.column < c.start.column) ? (c.start.row = i, c.start.column = e.column) : c.start.row == r ? c.start.column <= n.column ? (u || c.start.column > e.column) && (c.start.column = e.column, c.start.row = e.row) : (c.start.column += w, c.start.row += u) : c.start.row > r && (c.start.row += u);
              }
            if (u != 0 && o < a)
              for (; o < a; o++) {
                var c = t[o];
                c.start.row += u, c.end.row += u;
              }
          }, s;
        }()
      );
      p.prototype.comparePoints = v, S.RangeList = p;
    }), ace.define("ace/edit_session/fold", ["require", "exports", "module", "ace/range_list"], function(M, S, R) {
      var f = this && this.__extends || /* @__PURE__ */ function() {
        var i = function(r, t) {
          return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, a) {
            o.__proto__ = a;
          } || function(o, a) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (o[c] = a[c]);
          }, i(r, t);
        };
        return function(r, t) {
          if (typeof t != "function" && t !== null)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
          i(r, t);
          function o() {
            this.constructor = r;
          }
          r.prototype = t === null ? Object.create(t) : (o.prototype = t.prototype, new o());
        };
      }(), v = M("../range_list").RangeList, p = (
        /** @class */
        function(i) {
          f(r, i);
          function r(t, o) {
            var a = i.call(this) || this;
            return a.foldLine = null, a.placeholder = o, a.range = t, a.start = t.start, a.end = t.end, a.sameRow = t.start.row == t.end.row, a.subFolds = a.ranges = [], a;
          }
          return r.prototype.toString = function() {
            return '"' + this.placeholder + '" ' + this.range.toString();
          }, r.prototype.setFoldLine = function(t) {
            this.foldLine = t, this.subFolds.forEach(function(o) {
              o.setFoldLine(t);
            });
          }, r.prototype.clone = function() {
            var t = this.range.clone(), o = new r(t, this.placeholder);
            return this.subFolds.forEach(function(a) {
              o.subFolds.push(a.clone());
            }), o.collapseChildren = this.collapseChildren, o;
          }, r.prototype.addSubFold = function(t) {
            if (!this.range.isEqual(t)) {
              l(t, this.start);
              for (var w = t.start.row, y = t.start.column, o = 0, a = -1; o < this.subFolds.length && (a = this.subFolds[o].range.compare(w, y), a == 1); o++)
                ;
              var c = this.subFolds[o], u = 0;
              if (a == 0) {
                if (c.range.containsRange(t))
                  return c.addSubFold(t);
                u = 1;
              }
              for (var w = t.range.end.row, y = t.range.end.column, m = o, a = -1; m < this.subFolds.length && (a = this.subFolds[m].range.compare(w, y), a == 1); m++)
                ;
              a == 0 && m++;
              for (var h = this.subFolds.splice(o, m - o, t), $ = a == 0 ? h.length - 1 : h.length, _ = u; _ < $; _++)
                t.addSubFold(h[_]);
              return t.setFoldLine(this.foldLine), t;
            }
          }, r.prototype.restoreRange = function(t) {
            return n(t, this.start);
          }, r;
        }(v)
      );
      function s(i, r) {
        i.row -= r.row, i.row == 0 && (i.column -= r.column);
      }
      function l(i, r) {
        s(i.start, r), s(i.end, r);
      }
      function e(i, r) {
        i.row == 0 && (i.column += r.column), i.row += r.row;
      }
      function n(i, r) {
        e(i.start, r), e(i.end, r);
      }
      S.Fold = p;
    }), ace.define("ace/edit_session/folding", ["require", "exports", "module", "ace/range", "ace/edit_session/fold_line", "ace/edit_session/fold", "ace/token_iterator", "ace/mouse/mouse_event"], function(M, S, R) {
      var f = M("../range").Range, v = M("./fold_line").FoldLine, p = M("./fold").Fold, s = M("../token_iterator").TokenIterator, l = M("../mouse/mouse_event").MouseEvent;
      function e() {
        this.getFoldAt = function(n, i, r) {
          var t = this.getFoldLine(n);
          if (!t)
            return null;
          for (var o = t.folds, a = 0; a < o.length; a++) {
            var c = o[a].range;
            if (c.contains(n, i)) {
              if (r == 1 && c.isEnd(n, i) && !c.isEmpty())
                continue;
              if (r == -1 && c.isStart(n, i) && !c.isEmpty())
                continue;
              return o[a];
            }
          }
        }, this.getFoldsInRange = function(n) {
          var i = n.start, r = n.end, t = this.$foldData, o = [];
          i.column += 1, r.column -= 1;
          for (var a = 0; a < t.length; a++) {
            var c = t[a].range.compareRange(n);
            if (c != 2) {
              if (c == -2)
                break;
              for (var u = t[a].folds, w = 0; w < u.length; w++) {
                var y = u[w];
                if (c = y.range.compareRange(n), c == -2)
                  break;
                if (c == 2)
                  continue;
                if (c == 42)
                  break;
                o.push(y);
              }
            }
          }
          return i.column -= 1, r.column += 1, o;
        }, this.getFoldsInRangeList = function(n) {
          if (Array.isArray(n)) {
            var i = [];
            n.forEach(function(r) {
              i = i.concat(this.getFoldsInRange(r));
            }, this);
          } else
            var i = this.getFoldsInRange(n);
          return i;
        }, this.getAllFolds = function() {
          for (var n = [], i = this.$foldData, r = 0; r < i.length; r++)
            for (var t = 0; t < i[r].folds.length; t++)
              n.push(i[r].folds[t]);
          return n;
        }, this.getFoldStringAt = function(n, i, r, t) {
          if (t = t || this.getFoldLine(n), !t)
            return null;
          for (var o = {
            end: { column: 0 }
          }, a, c, u = 0; u < t.folds.length; u++) {
            c = t.folds[u];
            var w = c.range.compareEnd(n, i);
            if (w == -1) {
              a = this.getLine(c.start.row).substring(o.end.column, c.start.column);
              break;
            } else if (w === 0)
              return null;
            o = c;
          }
          return a || (a = this.getLine(c.start.row).substring(o.end.column)), r == -1 ? a.substring(0, i - o.end.column) : r == 1 ? a.substring(i - o.end.column) : a;
        }, this.getFoldLine = function(n, i) {
          var r = this.$foldData, t = 0;
          for (i && (t = r.indexOf(i)), t == -1 && (t = 0), t; t < r.length; t++) {
            var o = r[t];
            if (o.start.row <= n && o.end.row >= n)
              return o;
            if (o.end.row > n)
              return null;
          }
          return null;
        }, this.getNextFoldLine = function(n, i) {
          var r = this.$foldData, t = 0;
          for (i && (t = r.indexOf(i)), t == -1 && (t = 0), t; t < r.length; t++) {
            var o = r[t];
            if (o.end.row >= n)
              return o;
          }
          return null;
        }, this.getFoldedRowCount = function(n, i) {
          for (var r = this.$foldData, t = i - n + 1, o = 0; o < r.length; o++) {
            var a = r[o], c = a.end.row, u = a.start.row;
            if (c >= i) {
              u < i && (u >= n ? t -= i - u : t = 0);
              break;
            } else c >= n && (u >= n ? t -= c - u : t -= c - n + 1);
          }
          return t;
        }, this.$addFoldLine = function(n) {
          return this.$foldData.push(n), this.$foldData.sort(function(i, r) {
            return i.start.row - r.start.row;
          }), n;
        }, this.addFold = function(n, i) {
          var r = this.$foldData, t = !1, o;
          n instanceof p ? o = n : (o = new p(i, n), o.collapseChildren = i.collapseChildren), this.$clipRangeToDocument(o.range);
          var a = o.start.row, c = o.start.column, u = o.end.row, w = o.end.column, y = this.getFoldAt(a, c, 1), m = this.getFoldAt(u, w, -1);
          if (y && m == y)
            return y.addSubFold(o);
          y && !y.range.isStart(a, c) && this.removeFold(y), m && !m.range.isEnd(u, w) && this.removeFold(m);
          var h = this.getFoldsInRange(o.range);
          h.length > 0 && (this.removeFolds(h), o.collapseChildren || h.forEach(function(x) {
            o.addSubFold(x);
          }));
          for (var $ = 0; $ < r.length; $++) {
            var _ = r[$];
            if (u == _.start.row) {
              _.addFold(o), t = !0;
              break;
            } else if (a == _.end.row) {
              if (_.addFold(o), t = !0, !o.sameRow) {
                var L = r[$ + 1];
                if (L && L.start.row == u) {
                  _.merge(L);
                  break;
                }
              }
              break;
            } else if (u <= _.start.row)
              break;
          }
          return t || (_ = this.$addFoldLine(new v(this.$foldData, o))), this.$useWrapMode ? this.$updateWrapData(_.start.row, _.start.row) : this.$updateRowLengthCache(_.start.row, _.start.row), this.$modified = !0, this._signal("changeFold", { data: o, action: "add" }), o;
        }, this.addFolds = function(n) {
          n.forEach(function(i) {
            this.addFold(i);
          }, this);
        }, this.removeFold = function(n) {
          var i = n.foldLine, r = i.start.row, t = i.end.row, o = this.$foldData, a = i.folds;
          if (a.length == 1)
            o.splice(o.indexOf(i), 1);
          else if (i.range.isEnd(n.end.row, n.end.column))
            a.pop(), i.end.row = a[a.length - 1].end.row, i.end.column = a[a.length - 1].end.column;
          else if (i.range.isStart(n.start.row, n.start.column))
            a.shift(), i.start.row = a[0].start.row, i.start.column = a[0].start.column;
          else if (n.sameRow)
            a.splice(a.indexOf(n), 1);
          else {
            var c = i.split(n.start.row, n.start.column);
            a = c.folds, a.shift(), c.start.row = a[0].start.row, c.start.column = a[0].start.column;
          }
          this.$updating || (this.$useWrapMode ? this.$updateWrapData(r, t) : this.$updateRowLengthCache(r, t)), this.$modified = !0, this._signal("changeFold", { data: n, action: "remove" });
        }, this.removeFolds = function(n) {
          for (var i = [], r = 0; r < n.length; r++)
            i.push(n[r]);
          i.forEach(function(t) {
            this.removeFold(t);
          }, this), this.$modified = !0;
        }, this.expandFold = function(n) {
          this.removeFold(n), n.subFolds.forEach(function(i) {
            n.restoreRange(i), this.addFold(i);
          }, this), n.collapseChildren > 0 && this.foldAll(n.start.row + 1, n.end.row, n.collapseChildren - 1), n.subFolds = [];
        }, this.expandFolds = function(n) {
          n.forEach(function(i) {
            this.expandFold(i);
          }, this);
        }, this.unfold = function(n, i) {
          var r, t;
          if (n == null)
            r = new f(0, 0, this.getLength(), 0), i == null && (i = !0);
          else if (typeof n == "number")
            r = new f(n, 0, n, this.getLine(n).length);
          else if ("row" in n)
            r = f.fromPoints(n, n);
          else {
            if (Array.isArray(n))
              return t = [], n.forEach(function(a) {
                t = t.concat(this.unfold(a));
              }, this), t;
            r = n;
          }
          t = this.getFoldsInRangeList(r);
          for (var o = t; t.length == 1 && f.comparePoints(t[0].start, r.start) < 0 && f.comparePoints(t[0].end, r.end) > 0; )
            this.expandFolds(t), t = this.getFoldsInRangeList(r);
          if (i != !1 ? this.removeFolds(t) : this.expandFolds(t), o.length)
            return o;
        }, this.isRowFolded = function(n, i) {
          return !!this.getFoldLine(n, i);
        }, this.getRowFoldEnd = function(n, i) {
          var r = this.getFoldLine(n, i);
          return r ? r.end.row : n;
        }, this.getRowFoldStart = function(n, i) {
          var r = this.getFoldLine(n, i);
          return r ? r.start.row : n;
        }, this.getFoldDisplayLine = function(n, i, r, t, o) {
          t == null && (t = n.start.row), o == null && (o = 0), i == null && (i = n.end.row), r == null && (r = this.getLine(i).length);
          var a = this.doc, c = "";
          return n.walk(function(u, w, y, m) {
            if (!(w < t)) {
              if (w == t) {
                if (y < o)
                  return;
                m = Math.max(o, m);
              }
              u != null ? c += u : c += a.getLine(w).substring(m, y);
            }
          }, i, r), c;
        }, this.getDisplayLine = function(n, i, r, t) {
          var o = this.getFoldLine(n);
          if (o)
            return this.getFoldDisplayLine(o, n, i, r, t);
          var a;
          return a = this.doc.getLine(n), a.substring(t || 0, i || a.length);
        }, this.$cloneFoldData = function() {
          var n = [];
          return n = this.$foldData.map(function(i) {
            var r = i.folds.map(function(t) {
              return t.clone();
            });
            return new v(n, r);
          }), n;
        }, this.toggleFold = function(n) {
          var i = this.selection, r = i.getRange(), t, o;
          if (r.isEmpty()) {
            var a = r.start;
            if (t = this.getFoldAt(a.row, a.column), t) {
              this.expandFold(t);
              return;
            } else if (n) {
              var c = this.getFoldLine(a.row);
              c && this.expandFolds(c.folds);
              return;
            } else (o = this.findMatchingBracket(a)) ? r.comparePoint(o) == 1 ? r.end = o : (r.start = o, r.start.column++, r.end.column--) : (o = this.findMatchingBracket({ row: a.row, column: a.column + 1 })) ? (r.comparePoint(o) == 1 ? r.end = o : r.start = o, r.start.column++) : r = this.getCommentFoldRange(a.row, a.column) || r;
          } else {
            var u = this.getFoldsInRange(r);
            if (n && u.length) {
              this.expandFolds(u);
              return;
            } else u.length == 1 && (t = u[0]);
          }
          if (t || (t = this.getFoldAt(r.start.row, r.start.column)), t && t.range.toString() == r.toString()) {
            this.expandFold(t);
            return;
          }
          var w = "...";
          if (!r.isMultiLine()) {
            if (w = this.getTextRange(r), w.length < 4)
              return;
            w = w.trim().substring(0, 2) + "..";
          }
          this.addFold(w, r);
        }, this.getCommentFoldRange = function(n, i, r) {
          var t = new s(this, n, i), o = t.getCurrentToken(), a = o && o.type;
          if (o && /^comment|string/.test(a)) {
            a = a.match(/comment|string/)[0], a == "comment" && (a += "|doc-start|\\.doc");
            var c = new RegExp(a), u = new f();
            if (r != 1) {
              do
                o = t.stepBackward();
              while (o && c.test(o.type));
              o = t.stepForward();
            }
            u.start.row = t.getCurrentTokenRow(), u.start.column = t.getCurrentTokenColumn() + o.value.length, t = new s(this, n, i);
            var w = this.getState(t.$row);
            if (r != -1) {
              var y = -1;
              do
                if (o = t.stepForward(), y == -1) {
                  var m = this.getState(t.$row);
                  w.toString() !== m.toString() && (y = t.$row);
                } else if (t.$row > y)
                  break;
              while (o && c.test(o.type));
              o = t.stepBackward();
            } else
              o = t.getCurrentToken();
            return u.end.row = t.getCurrentTokenRow(), u.end.column = t.getCurrentTokenColumn(), u.start.row == u.end.row && u.start.column > u.end.column ? void 0 : u;
          }
        }, this.foldAll = function(n, i, r, t) {
          r == null && (r = 1e5);
          var o = this.foldWidgets;
          if (o) {
            i = i || this.getLength(), n = n || 0;
            for (var a = n; a < i; a++)
              if (o[a] == null && (o[a] = this.getFoldWidget(a)), o[a] == "start" && !(t && !t(a))) {
                var c = this.getFoldWidgetRange(a);
                c && c.isMultiLine() && c.end.row <= i && c.start.row >= n && (a = c.end.row, c.collapseChildren = r, this.addFold("...", c));
              }
          }
        }, this.foldToLevel = function(n) {
          for (this.foldAll(); n-- > 0; )
            this.unfold(null, !1);
        }, this.foldAllComments = function() {
          var n = this;
          this.foldAll(null, null, null, function(i) {
            for (var r = n.getTokens(i), t = 0; t < r.length; t++) {
              var o = r[t];
              if (!(o.type == "text" && /^\s+$/.test(o.value)))
                return !!/comment/.test(o.type);
            }
          });
        }, this.$foldStyles = {
          manual: 1,
          markbegin: 1,
          markbeginend: 1
        }, this.$foldStyle = "markbegin", this.setFoldStyle = function(n) {
          if (!this.$foldStyles[n])
            throw new Error("invalid fold style: " + n + "[" + Object.keys(this.$foldStyles).join(", ") + "]");
          if (this.$foldStyle != n) {
            this.$foldStyle = n, n == "manual" && this.unfold();
            var i = this.$foldMode;
            this.$setFolding(null), this.$setFolding(i);
          }
        }, this.$setFolding = function(n) {
          if (this.$foldMode != n) {
            if (this.$foldMode = n, this.off("change", this.$updateFoldWidgets), this.off("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets), this._signal("changeAnnotation"), !n || this.$foldStyle == "manual") {
              this.foldWidgets = null;
              return;
            }
            this.foldWidgets = [], this.getFoldWidget = n.getFoldWidget.bind(n, this, this.$foldStyle), this.getFoldWidgetRange = n.getFoldWidgetRange.bind(n, this, this.$foldStyle), this.$updateFoldWidgets = this.updateFoldWidgets.bind(this), this.$tokenizerUpdateFoldWidgets = this.tokenizerUpdateFoldWidgets.bind(this), this.on("change", this.$updateFoldWidgets), this.on("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets);
          }
        }, this.getParentFoldRangeData = function(n, i) {
          var r = this.foldWidgets;
          if (!r || i && r[n])
            return {};
          for (var t = n - 1, o; t >= 0; ) {
            var a = r[t];
            if (a == null && (a = r[t] = this.getFoldWidget(t)), a == "start") {
              var c = this.getFoldWidgetRange(t);
              if (o || (o = c), c && c.end.row >= n)
                break;
            }
            t--;
          }
          return {
            range: t !== -1 && c,
            firstRange: o
          };
        }, this.onFoldWidgetClick = function(n, i) {
          i instanceof l && (i = i.domEvent);
          var r = {
            children: i.shiftKey,
            all: i.ctrlKey || i.metaKey,
            siblings: i.altKey
          }, t = this.$toggleFoldWidget(n, r);
          if (!t) {
            var o = i.target || i.srcElement;
            o && /ace_fold-widget/.test(o.className) && (o.className += " ace_invalid");
          }
        }, this.$toggleFoldWidget = function(n, i) {
          if (this.getFoldWidget) {
            var r = this.getFoldWidget(n), t = this.getLine(n), o = r === "end" ? -1 : 1, a = this.getFoldAt(n, o === -1 ? 0 : t.length, o);
            if (a)
              return i.children || i.all ? this.removeFold(a) : this.expandFold(a), a;
            var c = this.getFoldWidgetRange(n, !0);
            if (c && !c.isMultiLine() && (a = this.getFoldAt(c.start.row, c.start.column, 1), a && c.isEqual(a.range)))
              return this.removeFold(a), a;
            if (i.siblings) {
              var u = this.getParentFoldRangeData(n);
              if (u.range)
                var w = u.range.start.row + 1, y = u.range.end.row;
              this.foldAll(w, y, i.all ? 1e4 : 0);
            } else i.children ? (y = c ? c.end.row : this.getLength(), this.foldAll(n + 1, y, i.all ? 1e4 : 0)) : c && (i.all && (c.collapseChildren = 1e4), this.addFold("...", c));
            return c;
          }
        }, this.toggleFoldWidget = function(n) {
          var i = this.selection.getCursor().row;
          i = this.getRowFoldStart(i);
          var r = this.$toggleFoldWidget(i, {});
          if (!r) {
            var t = this.getParentFoldRangeData(i, !0);
            if (r = t.range || t.firstRange, r) {
              i = r.start.row;
              var o = this.getFoldAt(i, this.getLine(i).length, 1);
              o ? this.removeFold(o) : this.addFold("...", r);
            }
          }
        }, this.updateFoldWidgets = function(n) {
          var i = n.start.row, r = n.end.row - i;
          if (r === 0)
            this.foldWidgets[i] = null;
          else if (n.action == "remove")
            this.foldWidgets.splice(i, r + 1, null);
          else {
            var t = Array(r + 1);
            t.unshift(i, 1), this.foldWidgets.splice.apply(this.foldWidgets, t);
          }
        }, this.tokenizerUpdateFoldWidgets = function(n) {
          var i = n.data;
          i.first != i.last && this.foldWidgets.length > i.first && this.foldWidgets.splice(i.first, this.foldWidgets.length);
        };
      }
      S.Folding = e;
    }), ace.define("ace/edit_session/bracket_match", ["require", "exports", "module", "ace/token_iterator", "ace/range"], function(M, S, R) {
      var f = M("../token_iterator").TokenIterator, v = M("../range").Range;
      function p() {
        this.findMatchingBracket = function(s, l) {
          if (s.column == 0)
            return null;
          var e = l || this.getLine(s.row).charAt(s.column - 1);
          if (e == "")
            return null;
          var n = e.match(/([\(\[\{])|([\)\]\}])/);
          return n ? n[1] ? this.$findClosingBracket(n[1], s) : this.$findOpeningBracket(n[2], s) : null;
        }, this.getBracketRange = function(s) {
          var l = this.getLine(s.row), e = !0, n, i = l.charAt(s.column - 1), r = i && i.match(/([\(\[\{])|([\)\]\}])/);
          if (r || (i = l.charAt(s.column), s = { row: s.row, column: s.column + 1 }, r = i && i.match(/([\(\[\{])|([\)\]\}])/), e = !1), !r)
            return null;
          if (r[1]) {
            var t = this.$findClosingBracket(r[1], s);
            if (!t)
              return null;
            n = v.fromPoints(s, t), e || (n.end.column++, n.start.column--), n.cursor = n.end;
          } else {
            var t = this.$findOpeningBracket(r[2], s);
            if (!t)
              return null;
            n = v.fromPoints(t, s), e || (n.start.column++, n.end.column--), n.cursor = n.start;
          }
          return n;
        }, this.getMatchingBracketRanges = function(s, l) {
          var e = this.getLine(s.row), n = /([\(\[\{])|([\)\]\}])/, i = !l && e.charAt(s.column - 1), r = i && i.match(n);
          if (r || (i = (l === void 0 || l) && e.charAt(s.column), s = {
            row: s.row,
            column: s.column + 1
          }, r = i && i.match(n)), !r)
            return null;
          var t = new v(s.row, s.column - 1, s.row, s.column), o = r[1] ? this.$findClosingBracket(r[1], s) : this.$findOpeningBracket(r[2], s);
          if (!o)
            return [t];
          var a = new v(o.row, o.column, o.row, o.column + 1);
          return [t, a];
        }, this.$brackets = {
          ")": "(",
          "(": ")",
          "]": "[",
          "[": "]",
          "{": "}",
          "}": "{",
          "<": ">",
          ">": "<"
        }, this.$findOpeningBracket = function(s, l, e) {
          var n = this.$brackets[s], i = 1, r = new f(this, l.row, l.column), t = r.getCurrentToken();
          if (t || (t = r.stepForward()), !!t) {
            e || (e = new RegExp("(\\.?" + t.type.replace(".", "\\.").replace("rparen", ".paren").replace(/\b(?:end)\b/, "(?:start|begin|end)").replace(/-close\b/, "-(close|open)") + ")+"));
            for (var o = l.column - r.getCurrentTokenColumn() - 2, a = t.value; ; ) {
              for (; o >= 0; ) {
                var c = a.charAt(o);
                if (c == n) {
                  if (i -= 1, i == 0)
                    return {
                      row: r.getCurrentTokenRow(),
                      column: o + r.getCurrentTokenColumn()
                    };
                } else c == s && (i += 1);
                o -= 1;
              }
              do
                t = r.stepBackward();
              while (t && !e.test(t.type));
              if (t == null)
                break;
              a = t.value, o = a.length - 1;
            }
            return null;
          }
        }, this.$findClosingBracket = function(s, l, e) {
          var n = this.$brackets[s], i = 1, r = new f(this, l.row, l.column), t = r.getCurrentToken();
          if (t || (t = r.stepForward()), !!t) {
            e || (e = new RegExp("(\\.?" + t.type.replace(".", "\\.").replace("lparen", ".paren").replace(/\b(?:start|begin)\b/, "(?:start|begin|end)").replace(/-open\b/, "-(close|open)") + ")+"));
            for (var o = l.column - r.getCurrentTokenColumn(); ; ) {
              for (var a = t.value, c = a.length; o < c; ) {
                var u = a.charAt(o);
                if (u == n) {
                  if (i -= 1, i == 0)
                    return {
                      row: r.getCurrentTokenRow(),
                      column: o + r.getCurrentTokenColumn()
                    };
                } else u == s && (i += 1);
                o += 1;
              }
              do
                t = r.stepForward();
              while (t && !e.test(t.type));
              if (t == null)
                break;
              o = 0;
            }
            return null;
          }
        }, this.getMatchingTags = function(s) {
          var l = new f(this, s.row, s.column), e = this.$findTagName(l);
          if (e) {
            var n = l.stepBackward();
            return n.value === "<" ? this.$findClosingTag(l, e) : this.$findOpeningTag(l, e);
          }
        }, this.$findTagName = function(s) {
          var l = s.getCurrentToken(), e = !1, n = !1;
          if (l && l.type.indexOf("tag-name") === -1)
            do
              n ? l = s.stepBackward() : l = s.stepForward(), l && (l.value === "/>" ? n = !0 : l.type.indexOf("tag-name") !== -1 && (e = !0));
            while (l && !e);
          return l;
        }, this.$findClosingTag = function(s, l) {
          var e, n = l.value, i = l.value, r = 0, t = new v(s.getCurrentTokenRow(), s.getCurrentTokenColumn(), s.getCurrentTokenRow(), s.getCurrentTokenColumn() + 1);
          l = s.stepForward();
          var o = new v(s.getCurrentTokenRow(), s.getCurrentTokenColumn(), s.getCurrentTokenRow(), s.getCurrentTokenColumn() + l.value.length), a = !1;
          do {
            if (e = l, e.type.indexOf("tag-close") !== -1 && !a) {
              var c = new v(s.getCurrentTokenRow(), s.getCurrentTokenColumn(), s.getCurrentTokenRow(), s.getCurrentTokenColumn() + 1);
              a = !0;
            }
            if (l = s.stepForward(), l) {
              if (l.value === ">" && !a) {
                var c = new v(s.getCurrentTokenRow(), s.getCurrentTokenColumn(), s.getCurrentTokenRow(), s.getCurrentTokenColumn() + 1);
                a = !0;
              }
              if (l.type.indexOf("tag-name") !== -1) {
                if (n = l.value, i === n) {
                  if (e.value === "<")
                    r++;
                  else if (e.value === "</" && (r--, r < 0)) {
                    s.stepBackward();
                    var u = new v(s.getCurrentTokenRow(), s.getCurrentTokenColumn(), s.getCurrentTokenRow(), s.getCurrentTokenColumn() + 2);
                    l = s.stepForward();
                    var w = new v(s.getCurrentTokenRow(), s.getCurrentTokenColumn(), s.getCurrentTokenRow(), s.getCurrentTokenColumn() + l.value.length);
                    if (l.type.indexOf("tag-close") === -1 && (l = s.stepForward()), l && l.value === ">")
                      var y = new v(s.getCurrentTokenRow(), s.getCurrentTokenColumn(), s.getCurrentTokenRow(), s.getCurrentTokenColumn() + 1);
                    else
                      return;
                  }
                }
              } else if (i === n && l.value === "/>" && (r--, r < 0))
                var u = new v(s.getCurrentTokenRow(), s.getCurrentTokenColumn(), s.getCurrentTokenRow(), s.getCurrentTokenColumn() + 2), w = u, y = w, c = new v(o.end.row, o.end.column, o.end.row, o.end.column + 1);
            }
          } while (l && r >= 0);
          if (t && c && u && y && o && w)
            return {
              openTag: new v(t.start.row, t.start.column, c.end.row, c.end.column),
              closeTag: new v(u.start.row, u.start.column, y.end.row, y.end.column),
              openTagName: o,
              closeTagName: w
            };
        }, this.$findOpeningTag = function(s, l) {
          var e = s.getCurrentToken(), n = l.value, i = 0, r = s.getCurrentTokenRow(), t = s.getCurrentTokenColumn(), o = t + 2, a = new v(r, t, r, o);
          s.stepForward();
          var c = new v(s.getCurrentTokenRow(), s.getCurrentTokenColumn(), s.getCurrentTokenRow(), s.getCurrentTokenColumn() + l.value.length);
          if (l.type.indexOf("tag-close") === -1 && (l = s.stepForward()), !(!l || l.value !== ">")) {
            var u = new v(s.getCurrentTokenRow(), s.getCurrentTokenColumn(), s.getCurrentTokenRow(), s.getCurrentTokenColumn() + 1);
            s.stepBackward(), s.stepBackward();
            do
              if (l = e, r = s.getCurrentTokenRow(), t = s.getCurrentTokenColumn(), o = t + l.value.length, e = s.stepBackward(), l) {
                if (l.type.indexOf("tag-name") !== -1) {
                  if (n === l.value)
                    if (e.value === "<") {
                      if (i++, i > 0) {
                        var w = new v(r, t, r, o), y = new v(s.getCurrentTokenRow(), s.getCurrentTokenColumn(), s.getCurrentTokenRow(), s.getCurrentTokenColumn() + 1);
                        do
                          l = s.stepForward();
                        while (l && l.value !== ">");
                        var m = new v(s.getCurrentTokenRow(), s.getCurrentTokenColumn(), s.getCurrentTokenRow(), s.getCurrentTokenColumn() + 1);
                      }
                    } else e.value === "</" && i--;
                } else if (l.value === "/>") {
                  for (var h = 0, $ = e; $; ) {
                    if ($.type.indexOf("tag-name") !== -1 && $.value === n) {
                      i--;
                      break;
                    } else if ($.value === "<")
                      break;
                    $ = s.stepBackward(), h++;
                  }
                  for (var _ = 0; _ < h; _++)
                    s.stepForward();
                }
              }
            while (e && i <= 0);
            if (y && m && a && u && w && c)
              return {
                openTag: new v(y.start.row, y.start.column, m.end.row, m.end.column),
                closeTag: new v(a.start.row, a.start.column, u.end.row, u.end.column),
                openTagName: w,
                closeTagName: c
              };
          }
        };
      }
      S.BracketMatch = p;
    }), ace.define("ace/edit_session", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/bidihandler", "ace/config", "ace/lib/event_emitter", "ace/selection", "ace/mode/text", "ace/range", "ace/line_widgets", "ace/document", "ace/background_tokenizer", "ace/search_highlight", "ace/undomanager", "ace/edit_session/folding", "ace/edit_session/bracket_match"], function(M, S, R) {
      var f = M("./lib/oop"), v = M("./lib/lang"), p = M("./bidihandler").BidiHandler, s = M("./config"), l = M("./lib/event_emitter").EventEmitter, e = M("./selection").Selection, n = M("./mode/text").Mode, i = M("./range").Range, r = M("./line_widgets").LineWidgets, t = M("./document").Document, o = M("./background_tokenizer").BackgroundTokenizer, a = M("./search_highlight").SearchHighlight, c = M("./undomanager").UndoManager, u = (
        /** @class */
        function() {
          function A(C, g) {
            this.doc, this.$breakpoints = [], this.$decorations = [], this.$frontMarkers = {}, this.$backMarkers = {}, this.$markerId = 1, this.$undoSelect = !0, this.$editor = null, this.prevOp = {}, this.$foldData = [], this.id = "session" + ++A.$uid, this.$foldData.toString = function() {
              return this.join(`
`);
            }, this.$gutterCustomWidgets = {}, this.bgTokenizer = new o(new n().getTokenizer(), this);
            var d = this;
            this.bgTokenizer.on("update", function(b) {
              d._signal("tokenizerUpdate", b);
            }), this.on("changeFold", this.onChangeFold.bind(this)), this.$onChange = this.onChange.bind(this), (typeof C != "object" || !C.getLine) && (C = new t(
              /**@type{string}*/
              C
            )), this.setDocument(C), this.selection = new e(this), this.$onSelectionChange = this.onSelectionChange.bind(this), this.selection.on("changeSelection", this.$onSelectionChange), this.selection.on("changeCursor", this.$onSelectionChange), this.$bidiHandler = new p(this), s.resetOptions(this), this.setMode(g), s._signal("session", this), this.destroyed = !1, this.$initOperationListeners();
          }
          return A.prototype.$initOperationListeners = function() {
            var C = this;
            this.curOp = null, this.on("change", function() {
              C.curOp || (C.startOperation(), C.curOp.selectionBefore = C.$lastSel), C.curOp.docChanged = !0;
            }, !0), this.on("changeSelection", function() {
              C.curOp || (C.startOperation(), C.curOp.selectionBefore = C.$lastSel), C.curOp.selectionChanged = !0;
            }, !0), this.$operationResetTimer = v.delayedCall(this.endOperation.bind(this, !0));
          }, A.prototype.startOperation = function(C) {
            if (this.curOp) {
              if (!C || this.curOp.command)
                return;
              this.prevOp = this.curOp;
            }
            C || (C = {}), this.$operationResetTimer.schedule(), this.curOp = {
              command: C.command || {},
              args: C.args
            }, this.curOp.selectionBefore = this.selection.toJSON(), this._signal("startOperation", C);
          }, A.prototype.endOperation = function(C) {
            if (this.curOp) {
              if (C && C.returnValue === !1) {
                this.curOp = null, this._signal("endOperation", C);
                return;
              }
              if (C == !0 && this.curOp.command && this.curOp.command.name == "mouse")
                return;
              var g = this.selection.toJSON();
              this.curOp.selectionAfter = g, this.$lastSel = this.selection.toJSON(), this.getUndoManager().addSelection(g), this._signal("beforeEndOperation"), this.prevOp = this.curOp, this.curOp = null, this._signal("endOperation", C);
            }
          }, A.prototype.setDocument = function(C) {
            this.doc && this.doc.off("change", this.$onChange), this.doc = C, C.on("change", this.$onChange, !0), this.bgTokenizer.setDocument(this.getDocument()), this.resetCaches();
          }, A.prototype.getDocument = function() {
            return this.doc;
          }, Object.defineProperty(A.prototype, "widgetManager", {
            get: function() {
              var C = new r(this);
              return this.widgetManager = C, this.$editor && C.attach(this.$editor), C;
            },
            set: function(C) {
              Object.defineProperty(this, "widgetManager", {
                writable: !0,
                enumerable: !0,
                configurable: !0,
                value: C
              });
            },
            enumerable: !1,
            configurable: !0
          }), A.prototype.$resetRowCache = function(C) {
            if (!C) {
              this.$docRowCache = [], this.$screenRowCache = [];
              return;
            }
            var g = this.$docRowCache.length, d = this.$getRowCacheIndex(this.$docRowCache, C) + 1;
            g > d && (this.$docRowCache.splice(d, g), this.$screenRowCache.splice(d, g));
          }, A.prototype.$getRowCacheIndex = function(C, g) {
            for (var d = 0, b = C.length - 1; d <= b; ) {
              var k = d + b >> 1, I = C[k];
              if (g > I)
                d = k + 1;
              else if (g < I)
                b = k - 1;
              else
                return k;
            }
            return d - 1;
          }, A.prototype.resetCaches = function() {
            this.$modified = !0, this.$wrapData = [], this.$rowLengthCache = [], this.$resetRowCache(0), this.destroyed || this.bgTokenizer.start(0);
          }, A.prototype.onChangeFold = function(C) {
            var g = C.data;
            this.$resetRowCache(g.start.row);
          }, A.prototype.onChange = function(C) {
            this.$modified = !0, this.$bidiHandler.onChange(C), this.$resetRowCache(C.start.row);
            var g = this.$updateInternalDataOnChange(C);
            !this.$fromUndo && this.$undoManager && (g && g.length && (this.$undoManager.add({
              action: "removeFolds",
              folds: g
            }, this.mergeUndoDeltas), this.mergeUndoDeltas = !0), this.$undoManager.add(C, this.mergeUndoDeltas), this.mergeUndoDeltas = !0, this.$informUndoManager.schedule()), this.bgTokenizer.$updateOnChange(C), this._signal("change", C);
          }, A.prototype.onSelectionChange = function() {
            this._signal("changeSelection");
          }, A.prototype.setValue = function(C) {
            this.doc.setValue(C), this.selection.moveTo(0, 0), this.$resetRowCache(0), this.setUndoManager(this.$undoManager), this.getUndoManager().reset();
          }, A.fromJSON = function(C) {
            typeof C == "string" && (C = JSON.parse(C));
            var g = new c();
            g.$undoStack = C.history.undo, g.$redoStack = C.history.redo, g.mark = C.history.mark, g.$rev = C.history.rev;
            var d = new A(C.value);
            return C.folds.forEach(function(b) {
              d.addFold("...", i.fromPoints(b.start, b.end));
            }), d.setAnnotations(C.annotations), d.setBreakpoints(C.breakpoints), d.setMode(C.mode), d.setScrollLeft(C.scrollLeft), d.setScrollTop(C.scrollTop), d.setUndoManager(g), d.selection.fromJSON(C.selection), d;
          }, A.prototype.toJSON = function() {
            return {
              annotations: this.$annotations,
              breakpoints: this.$breakpoints,
              folds: this.getAllFolds().map(function(C) {
                return C.range;
              }),
              history: this.getUndoManager(),
              mode: this.$mode.$id,
              scrollLeft: this.$scrollLeft,
              scrollTop: this.$scrollTop,
              selection: this.selection.toJSON(),
              value: this.doc.getValue()
            };
          }, A.prototype.toString = function() {
            return this.doc.getValue();
          }, A.prototype.getSelection = function() {
            return this.selection;
          }, A.prototype.getState = function(C) {
            return this.bgTokenizer.getState(C);
          }, A.prototype.getTokens = function(C) {
            return this.bgTokenizer.getTokens(C);
          }, A.prototype.getTokenAt = function(C, g) {
            var d = this.bgTokenizer.getTokens(C), b, k = 0;
            if (g == null) {
              var I = d.length - 1;
              k = this.getLine(C).length;
            } else
              for (var I = 0; I < d.length && (k += d[I].value.length, !(k >= g)); I++)
                ;
            return b = d[I], b ? (b.index = I, b.start = k - b.value.length, b) : null;
          }, A.prototype.setUndoManager = function(C) {
            if (this.$undoManager = C, this.$informUndoManager && this.$informUndoManager.cancel(), C) {
              var g = this;
              C.addSession(this), this.$syncInformUndoManager = function() {
                g.$informUndoManager.cancel(), g.mergeUndoDeltas = !1;
              }, this.$informUndoManager = v.delayedCall(this.$syncInformUndoManager);
            } else
              this.$syncInformUndoManager = function() {
              };
          }, A.prototype.markUndoGroup = function() {
            this.$syncInformUndoManager && this.$syncInformUndoManager();
          }, A.prototype.getUndoManager = function() {
            return this.$undoManager || this.$defaultUndoManager;
          }, A.prototype.getTabString = function() {
            return this.getUseSoftTabs() ? v.stringRepeat(" ", this.getTabSize()) : "	";
          }, A.prototype.setUseSoftTabs = function(C) {
            this.setOption("useSoftTabs", C);
          }, A.prototype.getUseSoftTabs = function() {
            return this.$useSoftTabs && !this.$mode.$indentWithTabs;
          }, A.prototype.setTabSize = function(C) {
            this.setOption("tabSize", C);
          }, A.prototype.getTabSize = function() {
            return this.$tabSize;
          }, A.prototype.isTabStop = function(C) {
            return this.$useSoftTabs && C.column % this.$tabSize === 0;
          }, A.prototype.setNavigateWithinSoftTabs = function(C) {
            this.setOption("navigateWithinSoftTabs", C);
          }, A.prototype.getNavigateWithinSoftTabs = function() {
            return this.$navigateWithinSoftTabs;
          }, A.prototype.setOverwrite = function(C) {
            this.setOption("overwrite", C);
          }, A.prototype.getOverwrite = function() {
            return this.$overwrite;
          }, A.prototype.toggleOverwrite = function() {
            this.setOverwrite(!this.$overwrite);
          }, A.prototype.addGutterDecoration = function(C, g) {
            this.$decorations[C] || (this.$decorations[C] = ""), this.$decorations[C] += " " + g, this._signal("changeBreakpoint", {});
          }, A.prototype.removeGutterCustomWidget = function(C) {
            this.$editor && this.$editor.renderer.$gutterLayer.$removeCustomWidget(C);
          }, A.prototype.addGutterCustomWidget = function(C, g) {
            this.$editor && this.$editor.renderer.$gutterLayer.$addCustomWidget(C, g);
          }, A.prototype.removeGutterDecoration = function(C, g) {
            this.$decorations[C] = (this.$decorations[C] || "").replace(" " + g, ""), this._signal("changeBreakpoint", {});
          }, A.prototype.getBreakpoints = function() {
            return this.$breakpoints;
          }, A.prototype.setBreakpoints = function(C) {
            this.$breakpoints = [];
            for (var g = 0; g < C.length; g++)
              this.$breakpoints[C[g]] = "ace_breakpoint";
            this._signal("changeBreakpoint", {});
          }, A.prototype.clearBreakpoints = function() {
            this.$breakpoints = [], this._signal("changeBreakpoint", {});
          }, A.prototype.setBreakpoint = function(C, g) {
            g === void 0 && (g = "ace_breakpoint"), g ? this.$breakpoints[C] = g : delete this.$breakpoints[C], this._signal("changeBreakpoint", {});
          }, A.prototype.clearBreakpoint = function(C) {
            delete this.$breakpoints[C], this._signal("changeBreakpoint", {});
          }, A.prototype.addMarker = function(C, g, d, b) {
            var k = this.$markerId++, I = {
              range: C,
              type: d || "line",
              renderer: typeof d == "function" ? d : null,
              clazz: g,
              inFront: !!b,
              id: k
            };
            return b ? (this.$frontMarkers[k] = I, this._signal("changeFrontMarker")) : (this.$backMarkers[k] = I, this._signal("changeBackMarker")), k;
          }, A.prototype.addDynamicMarker = function(C, g) {
            if (C.update) {
              var d = this.$markerId++;
              return C.id = d, C.inFront = !!g, g ? (this.$frontMarkers[d] = C, this._signal("changeFrontMarker")) : (this.$backMarkers[d] = C, this._signal("changeBackMarker")), C;
            }
          }, A.prototype.removeMarker = function(C) {
            var g = this.$frontMarkers[C] || this.$backMarkers[C];
            if (g) {
              var d = g.inFront ? this.$frontMarkers : this.$backMarkers;
              delete d[C], this._signal(g.inFront ? "changeFrontMarker" : "changeBackMarker");
            }
          }, A.prototype.getMarkers = function(C) {
            return C ? this.$frontMarkers : this.$backMarkers;
          }, A.prototype.highlight = function(C) {
            if (!this.$searchHighlight) {
              var g = new a(null, "ace_selected-word", "text");
              this.$searchHighlight = this.addDynamicMarker(g);
            }
            this.$searchHighlight.setRegexp(C);
          }, A.prototype.highlightLines = function(C, g, d, b) {
            typeof g != "number" && (d = g, g = C), d || (d = "ace_step");
            var k = new i(C, 0, g, 1 / 0);
            return k.id = this.addMarker(k, d, "fullLine", b), k;
          }, A.prototype.setAnnotations = function(C) {
            this.$annotations = C, this._signal("changeAnnotation", {});
          }, A.prototype.getAnnotations = function() {
            return this.$annotations || [];
          }, A.prototype.clearAnnotations = function() {
            this.setAnnotations([]);
          }, A.prototype.$detectNewLine = function(C) {
            var g = C.match(/^.*?(\r?\n)/m);
            g ? this.$autoNewLine = g[1] : this.$autoNewLine = `
`;
          }, A.prototype.getWordRange = function(C, g) {
            var d = this.getLine(C), b = !1;
            if (g > 0 && (b = !!d.charAt(g - 1).match(this.tokenRe)), b || (b = !!d.charAt(g).match(this.tokenRe)), b)
              var k = this.tokenRe;
            else if (/^\s+$/.test(d.slice(g - 1, g + 1)))
              var k = /\s/;
            else
              var k = this.nonTokenRe;
            var I = g;
            if (I > 0) {
              do
                I--;
              while (I >= 0 && d.charAt(I).match(k));
              I++;
            }
            for (var T = g; T < d.length && d.charAt(T).match(k); )
              T++;
            return new i(C, I, C, T);
          }, A.prototype.getAWordRange = function(C, g) {
            for (var d = this.getWordRange(C, g), b = this.getLine(d.end.row); b.charAt(d.end.column).match(/[ \t]/); )
              d.end.column += 1;
            return d;
          }, A.prototype.setNewLineMode = function(C) {
            this.doc.setNewLineMode(C);
          }, A.prototype.getNewLineMode = function() {
            return this.doc.getNewLineMode();
          }, A.prototype.setUseWorker = function(C) {
            this.setOption("useWorker", C);
          }, A.prototype.getUseWorker = function() {
            return this.$useWorker;
          }, A.prototype.onReloadTokenizer = function(C) {
            var g = C.data;
            this.bgTokenizer.start(g.first), this._signal("tokenizerUpdate", C);
          }, A.prototype.setMode = function(C, g) {
            if (C && typeof C == "object") {
              if (C.getTokenizer)
                return this.$onChangeMode(C);
              var d = C, b = d.path;
            } else
              b = /**@type{string}*/
              C || "ace/mode/text";
            if (this.$modes["ace/mode/text"] || (this.$modes["ace/mode/text"] = new n()), this.$modes[b] && !d) {
              this.$onChangeMode(this.$modes[b]), g && g();
              return;
            }
            this.$modeId = b, s.loadModule(["mode", b], (function(k) {
              if (!this.destroyed) {
                if (this.$modeId !== b)
                  return g && g();
                this.$modes[b] && !d ? this.$onChangeMode(this.$modes[b]) : k && k.Mode && (k = new k.Mode(d), d || (this.$modes[b] = k, k.$id = b), this.$onChangeMode(k)), g && g();
              }
            }).bind(this)), this.$mode || this.$onChangeMode(this.$modes["ace/mode/text"], !0);
          }, A.prototype.$onChangeMode = function(C, g) {
            if (g || (this.$modeId = C.$id), this.$mode !== C) {
              var d = this.$mode;
              this.$mode = C, this.$stopWorker(), this.$useWorker && this.$startWorker();
              var b = C.getTokenizer();
              if (b.on !== void 0) {
                var k = this.onReloadTokenizer.bind(this);
                b.on("update", k);
              }
              this.bgTokenizer.setTokenizer(b), this.bgTokenizer.setDocument(this.getDocument()), this.tokenRe = C.tokenRe, this.nonTokenRe = C.nonTokenRe, g || (C.attachToSession && C.attachToSession(this), this.$options.wrapMethod.set.call(this, this.$wrapMethod), this.$setFolding(C.foldingRules), this.bgTokenizer.start(0), this._emit("changeMode", { oldMode: d, mode: C }));
            }
          }, A.prototype.$stopWorker = function() {
            this.$worker && (this.$worker.terminate(), this.$worker = null);
          }, A.prototype.$startWorker = function() {
            try {
              this.$worker = this.$mode.createWorker(this);
            } catch (C) {
              s.warn("Could not load worker", C), this.$worker = null;
            }
          }, A.prototype.getMode = function() {
            return this.$mode;
          }, A.prototype.setScrollTop = function(C) {
            this.$scrollTop === C || isNaN(C) || (this.$scrollTop = C, this._signal("changeScrollTop", C));
          }, A.prototype.getScrollTop = function() {
            return this.$scrollTop;
          }, A.prototype.setScrollLeft = function(C) {
            this.$scrollLeft === C || isNaN(C) || (this.$scrollLeft = C, this._signal("changeScrollLeft", C));
          }, A.prototype.getScrollLeft = function() {
            return this.$scrollLeft;
          }, A.prototype.getScreenWidth = function() {
            return this.$computeWidth(), this.lineWidgets ? Math.max(this.getLineWidgetMaxWidth(), this.screenWidth) : this.screenWidth;
          }, A.prototype.getLineWidgetMaxWidth = function() {
            if (this.lineWidgetsWidth != null)
              return this.lineWidgetsWidth;
            var C = 0;
            return this.lineWidgets.forEach(function(g) {
              g && g.screenWidth > C && (C = g.screenWidth);
            }), this.lineWidgetWidth = C;
          }, A.prototype.$computeWidth = function(C) {
            if (this.$modified || C) {
              if (this.$modified = !1, this.$useWrapMode)
                return this.screenWidth = this.$wrapLimit;
              for (var g = this.doc.getAllLines(), d = this.$rowLengthCache, b = 0, k = 0, I = this.$foldData[k], T = I ? I.start.row : 1 / 0, O = g.length, W = 0; W < O; W++) {
                if (W > T) {
                  if (W = I.end.row + 1, W >= O)
                    break;
                  I = this.$foldData[k++], T = I ? I.start.row : 1 / 0;
                }
                d[W] == null && (d[W] = this.$getStringScreenWidth(g[W])[0]), d[W] > b && (b = d[W]);
              }
              this.screenWidth = b;
            }
          }, A.prototype.getLine = function(C) {
            return this.doc.getLine(C);
          }, A.prototype.getLines = function(C, g) {
            return this.doc.getLines(C, g);
          }, A.prototype.getLength = function() {
            return this.doc.getLength();
          }, A.prototype.getTextRange = function(C) {
            return this.doc.getTextRange(C || this.selection.getRange());
          }, A.prototype.insert = function(C, g) {
            return this.doc.insert(C, g);
          }, A.prototype.remove = function(C) {
            return this.doc.remove(C);
          }, A.prototype.removeFullLines = function(C, g) {
            return this.doc.removeFullLines(C, g);
          }, A.prototype.undoChanges = function(C, g) {
            if (C.length) {
              this.$fromUndo = !0;
              for (var d = C.length - 1; d != -1; d--) {
                var b = C[d];
                b.action == "insert" || b.action == "remove" ? this.doc.revertDelta(b) : b.folds && this.addFolds(b.folds);
              }
              !g && this.$undoSelect && (C.selectionBefore ? this.selection.fromJSON(C.selectionBefore) : this.selection.setRange(this.$getUndoSelection(C, !0))), this.$fromUndo = !1;
            }
          }, A.prototype.redoChanges = function(C, g) {
            if (C.length) {
              this.$fromUndo = !0;
              for (var d = 0; d < C.length; d++) {
                var b = C[d];
                (b.action == "insert" || b.action == "remove") && this.doc.$safeApplyDelta(b);
              }
              !g && this.$undoSelect && (C.selectionAfter ? this.selection.fromJSON(C.selectionAfter) : this.selection.setRange(this.$getUndoSelection(C, !1))), this.$fromUndo = !1;
            }
          }, A.prototype.setUndoSelect = function(C) {
            this.$undoSelect = C;
          }, A.prototype.$getUndoSelection = function(C, g) {
            function d(O) {
              return g ? O.action !== "insert" : O.action === "insert";
            }
            for (var b, k, I = 0; I < C.length; I++) {
              var T = C[I];
              if (T.start) {
                if (!b) {
                  d(T) ? b = i.fromPoints(T.start, T.end) : b = i.fromPoints(T.start, T.start);
                  continue;
                }
                d(T) ? (k = T.start, b.compare(k.row, k.column) == -1 && b.setStart(k), k = T.end, b.compare(k.row, k.column) == 1 && b.setEnd(k)) : (k = T.start, b.compare(k.row, k.column) == -1 && (b = i.fromPoints(T.start, T.start)));
              }
            }
            return b;
          }, A.prototype.replace = function(C, g) {
            return this.doc.replace(C, g);
          }, A.prototype.moveText = function(C, g, d) {
            var b = this.getTextRange(C), k = this.getFoldsInRange(C), I = i.fromPoints(g, g);
            if (!d) {
              this.remove(C);
              var T = C.start.row - C.end.row, O = T ? -C.end.column : C.start.column - C.end.column;
              O && (I.start.row == C.end.row && I.start.column > C.end.column && (I.start.column += O), I.end.row == C.end.row && I.end.column > C.end.column && (I.end.column += O)), T && I.start.row >= C.end.row && (I.start.row += T, I.end.row += T);
            }
            if (I.end = this.insert(I.start, b), k.length) {
              var W = C.start, H = I.start, T = H.row - W.row, O = H.column - W.column;
              this.addFolds(k.map(function(F) {
                return F = F.clone(), F.start.row == W.row && (F.start.column += O), F.end.row == W.row && (F.end.column += O), F.start.row += T, F.end.row += T, F;
              }));
            }
            return I;
          }, A.prototype.indentRows = function(C, g, d) {
            d = d.replace(/\t/g, this.getTabString());
            for (var b = C; b <= g; b++)
              this.doc.insertInLine({ row: b, column: 0 }, d);
          }, A.prototype.outdentRows = function(C) {
            for (var g = C.collapseRows(), d = new i(0, 0, 0, 0), b = this.getTabSize(), k = g.start.row; k <= g.end.row; ++k) {
              var I = this.getLine(k);
              d.start.row = k, d.end.row = k;
              for (var T = 0; T < b && I.charAt(T) == " "; ++T)
                ;
              T < b && I.charAt(T) == "	" ? (d.start.column = T, d.end.column = T + 1) : (d.start.column = 0, d.end.column = T), this.remove(d);
            }
          }, A.prototype.$moveLines = function(C, g, d) {
            if (C = this.getRowFoldStart(C), g = this.getRowFoldEnd(g), d < 0) {
              var b = this.getRowFoldStart(C + d);
              if (b < 0)
                return 0;
              var k = b - C;
            } else if (d > 0) {
              var b = this.getRowFoldEnd(g + d);
              if (b > this.doc.getLength() - 1)
                return 0;
              var k = b - g;
            } else {
              C = this.$clipRowToDocument(C), g = this.$clipRowToDocument(g);
              var k = g - C + 1;
            }
            var I = new i(C, 0, g, Number.MAX_VALUE), T = this.getFoldsInRange(I).map(function(W) {
              return W = W.clone(), W.start.row += k, W.end.row += k, W;
            }), O = d == 0 ? this.doc.getLines(C, g) : this.doc.removeFullLines(C, g);
            return this.doc.insertFullLines(C + k, O), T.length && this.addFolds(T), k;
          }, A.prototype.moveLinesUp = function(C, g) {
            return this.$moveLines(C, g, -1);
          }, A.prototype.moveLinesDown = function(C, g) {
            return this.$moveLines(C, g, 1);
          }, A.prototype.duplicateLines = function(C, g) {
            return this.$moveLines(C, g, 0);
          }, A.prototype.$clipRowToDocument = function(C) {
            return Math.max(0, Math.min(C, this.doc.getLength() - 1));
          }, A.prototype.$clipColumnToRow = function(C, g) {
            return g < 0 ? 0 : Math.min(this.doc.getLine(C).length, g);
          }, A.prototype.$clipPositionToDocument = function(C, g) {
            if (g = Math.max(0, g), C < 0)
              C = 0, g = 0;
            else {
              var d = this.doc.getLength();
              C >= d ? (C = d - 1, g = this.doc.getLine(d - 1).length) : g = Math.min(this.doc.getLine(C).length, g);
            }
            return {
              row: C,
              column: g
            };
          }, A.prototype.$clipRangeToDocument = function(C) {
            C.start.row < 0 ? (C.start.row = 0, C.start.column = 0) : C.start.column = this.$clipColumnToRow(C.start.row, C.start.column);
            var g = this.doc.getLength() - 1;
            return C.end.row > g ? (C.end.row = g, C.end.column = this.doc.getLine(g).length) : C.end.column = this.$clipColumnToRow(C.end.row, C.end.column), C;
          }, A.prototype.setUseWrapMode = function(C) {
            if (C != this.$useWrapMode) {
              if (this.$useWrapMode = C, this.$modified = !0, this.$resetRowCache(0), C) {
                var g = this.getLength();
                this.$wrapData = Array(g), this.$updateWrapData(0, g - 1);
              }
              this._signal("changeWrapMode");
            }
          }, A.prototype.getUseWrapMode = function() {
            return this.$useWrapMode;
          }, A.prototype.setWrapLimitRange = function(C, g) {
            (this.$wrapLimitRange.min !== C || this.$wrapLimitRange.max !== g) && (this.$wrapLimitRange = { min: C, max: g }, this.$modified = !0, this.$bidiHandler.markAsDirty(), this.$useWrapMode && this._signal("changeWrapMode"));
          }, A.prototype.adjustWrapLimit = function(C, g) {
            var d = this.$wrapLimitRange;
            d.max < 0 && (d = { min: g, max: g });
            var b = this.$constrainWrapLimit(C, d.min, d.max);
            return b != this.$wrapLimit && b > 1 ? (this.$wrapLimit = b, this.$modified = !0, this.$useWrapMode && (this.$updateWrapData(0, this.getLength() - 1), this.$resetRowCache(0), this._signal("changeWrapLimit")), !0) : !1;
          }, A.prototype.$constrainWrapLimit = function(C, g, d) {
            return g && (C = Math.max(g, C)), d && (C = Math.min(d, C)), C;
          }, A.prototype.getWrapLimit = function() {
            return this.$wrapLimit;
          }, A.prototype.setWrapLimit = function(C) {
            this.setWrapLimitRange(C, C);
          }, A.prototype.getWrapLimitRange = function() {
            return {
              min: this.$wrapLimitRange.min,
              max: this.$wrapLimitRange.max
            };
          }, A.prototype.$updateInternalDataOnChange = function(C) {
            var g = this.$useWrapMode, d = C.action, b = C.start, k = C.end, I = b.row, T = k.row, O = T - I, W = null;
            if (this.$updating = !0, O != 0)
              if (d === "remove") {
                this[g ? "$wrapData" : "$rowLengthCache"].splice(I, O);
                var H = this.$foldData;
                W = this.getFoldsInRange(C), this.removeFolds(W);
                var B = this.getFoldLine(k.row), P = 0;
                if (B) {
                  B.addRemoveChars(k.row, k.column, b.column - k.column), B.shiftRow(-O);
                  var F = this.getFoldLine(I);
                  F && F !== B && (F.merge(B), B = F), P = H.indexOf(B) + 1;
                }
                for (P; P < H.length; P++) {
                  var B = H[P];
                  B.start.row >= k.row && B.shiftRow(-O);
                }
                T = I;
              } else {
                var z = Array(O);
                z.unshift(I, 0);
                var U = g ? this.$wrapData : this.$rowLengthCache;
                U.splice.apply(U, z);
                var H = this.$foldData, B = this.getFoldLine(I), P = 0;
                if (B) {
                  var j = B.range.compareInside(b.row, b.column);
                  j == 0 ? (B = B.split(b.row, b.column), B && (B.shiftRow(O), B.addRemoveChars(T, 0, k.column - b.column))) : j == -1 && (B.addRemoveChars(I, 0, k.column - b.column), B.shiftRow(O)), P = H.indexOf(B) + 1;
                }
                for (P; P < H.length; P++) {
                  var B = H[P];
                  B.start.row >= I && B.shiftRow(O);
                }
              }
            else {
              O = Math.abs(C.start.column - C.end.column), d === "remove" && (W = this.getFoldsInRange(C), this.removeFolds(W), O = -O);
              var B = this.getFoldLine(I);
              B && B.addRemoveChars(I, b.column, O);
            }
            return g && this.$wrapData.length != this.doc.getLength() && console.error("doc.getLength() and $wrapData.length have to be the same!"), this.$updating = !1, g ? this.$updateWrapData(I, T) : this.$updateRowLengthCache(I, T), W;
          }, A.prototype.$updateRowLengthCache = function(C, g) {
            this.$rowLengthCache[C] = null, this.$rowLengthCache[g] = null;
          }, A.prototype.$updateWrapData = function(C, g) {
            var d = this.doc.getAllLines(), b = this.getTabSize(), k = this.$wrapData, I = this.$wrapLimit, T, O, W = C;
            for (g = Math.min(g, d.length - 1); W <= g; )
              O = this.getFoldLine(W, O), O ? (T = [], O.walk((function(H, B, P, F) {
                var z;
                if (H != null) {
                  z = this.$getDisplayTokens(H, T.length), z[0] = m;
                  for (var U = 1; U < z.length; U++)
                    z[U] = h;
                } else
                  z = this.$getDisplayTokens(d[B].substring(F, P), T.length);
                T = T.concat(z);
              }).bind(this), O.end.row, d[O.end.row].length + 1), k[O.start.row] = this.$computeWrapSplits(T, I, b), W = O.end.row + 1) : (T = this.$getDisplayTokens(d[W]), k[W] = this.$computeWrapSplits(T, I, b), W++);
          }, A.prototype.$computeWrapSplits = function(C, g, d) {
            if (C.length == 0)
              return [];
            var b = [], k = C.length, I = 0, T = 0, O = this.$wrapAsCode, W = this.$indentedSoftWrap, H = g <= Math.max(2 * d, 8) || W === !1 ? 0 : Math.floor(g / 2);
            function B() {
              var j = 0;
              if (H === 0)
                return j;
              if (W)
                for (var Y = 0; Y < C.length; Y++) {
                  var G = C[Y];
                  if (G == _)
                    j += 1;
                  else if (G == L)
                    j += d;
                  else {
                    if (G == x)
                      continue;
                    break;
                  }
                }
              return O && W !== !1 && (j += d), Math.min(j, H);
            }
            function P(j) {
              for (var Y = j - I, G = I; G < j; G++) {
                var J = C[G];
                (J === 12 || J === 2) && (Y -= 1);
              }
              b.length || (F = B(), b.indent = F), T += Y, b.push(T), I = j;
            }
            for (var F = 0; k - I > g - F; ) {
              var z = I + g - F;
              if (C[z - 1] >= _ && C[z] >= _) {
                P(z);
                continue;
              }
              if (C[z] == m || C[z] == h) {
                for (z; z != I - 1 && C[z] != m; z--)
                  ;
                if (z > I) {
                  P(z);
                  continue;
                }
                for (z = I + g, z; z < C.length && C[z] == h; z++)
                  ;
                if (z == C.length)
                  break;
                P(z);
                continue;
              }
              for (var U = Math.max(z - (g - (g >> 2)), I - 1); z > U && C[z] < m; )
                z--;
              if (O) {
                for (; z > U && C[z] < m; )
                  z--;
                for (; z > U && C[z] == $; )
                  z--;
              } else
                for (; z > U && C[z] < _; )
                  z--;
              if (z > U) {
                P(++z);
                continue;
              }
              z = I + g, C[z] == y && z--, P(z - F);
            }
            return b;
          }, A.prototype.$getDisplayTokens = function(C, g) {
            var d = [], b;
            g = g || 0;
            for (var k = 0; k < C.length; k++) {
              var I = C.charCodeAt(k);
              if (I == 9) {
                b = this.getScreenTabSize(d.length + g), d.push(L);
                for (var T = 1; T < b; T++)
                  d.push(x);
              } else I == 32 ? d.push(_) : I > 39 && I < 48 || I > 57 && I < 64 ? d.push($) : I >= 4352 && D(I) ? d.push(w, y) : d.push(w);
            }
            return d;
          }, A.prototype.$getStringScreenWidth = function(C, g, d) {
            if (g == 0)
              return [0, 0];
            g == null && (g = 1 / 0), d = d || 0;
            var b, k;
            for (k = 0; k < C.length && (b = C.charCodeAt(k), b == 9 ? d += this.getScreenTabSize(d) : b >= 4352 && D(b) ? d += 2 : d += 1, !(d > g)); k++)
              ;
            return [d, k];
          }, A.prototype.getRowLength = function(C) {
            var g = 1;
            return this.lineWidgets && (g += this.lineWidgets[C] && this.lineWidgets[C].rowCount || 0), !this.$useWrapMode || !this.$wrapData[C] ? g : this.$wrapData[C].length + g;
          }, A.prototype.getRowLineCount = function(C) {
            return !this.$useWrapMode || !this.$wrapData[C] ? 1 : this.$wrapData[C].length + 1;
          }, A.prototype.getRowWrapIndent = function(C) {
            if (this.$useWrapMode) {
              var g = this.screenToDocumentPosition(C, Number.MAX_VALUE), d = this.$wrapData[g.row];
              return d.length && d[0] < g.column ? d.indent : 0;
            } else
              return 0;
          }, A.prototype.getScreenLastRowColumn = function(C) {
            var g = this.screenToDocumentPosition(C, Number.MAX_VALUE);
            return this.documentToScreenColumn(g.row, g.column);
          }, A.prototype.getDocumentLastRowColumn = function(C, g) {
            var d = this.documentToScreenRow(C, g);
            return this.getScreenLastRowColumn(d);
          }, A.prototype.getDocumentLastRowColumnPosition = function(C, g) {
            var d = this.documentToScreenRow(C, g);
            return this.screenToDocumentPosition(d, Number.MAX_VALUE / 10);
          }, A.prototype.getRowSplitData = function(C) {
            if (this.$useWrapMode)
              return this.$wrapData[C];
          }, A.prototype.getScreenTabSize = function(C) {
            return this.$tabSize - (C % this.$tabSize | 0);
          }, A.prototype.screenToDocumentRow = function(C, g) {
            return this.screenToDocumentPosition(C, g).row;
          }, A.prototype.screenToDocumentColumn = function(C, g) {
            return this.screenToDocumentPosition(C, g).column;
          }, A.prototype.screenToDocumentPosition = function(C, g, d) {
            if (C < 0)
              return { row: 0, column: 0 };
            var b, k = 0, I = 0, T, O = 0, W = 0, H = this.$screenRowCache, B = this.$getRowCacheIndex(H, C), P = H.length;
            if (P && B >= 0)
              var O = H[B], k = this.$docRowCache[B], F = C > H[P - 1];
            else
              var F = !P;
            for (var z = this.getLength() - 1, U = this.getNextFoldLine(k), j = U ? U.start.row : 1 / 0; O <= C && (W = this.getRowLength(k), !(O + W > C || k >= z)); )
              O += W, k++, k > j && (k = U.end.row + 1, U = this.getNextFoldLine(k, U), j = U ? U.start.row : 1 / 0), F && (this.$docRowCache.push(k), this.$screenRowCache.push(O));
            if (U && U.start.row <= k)
              b = this.getFoldDisplayLine(U), k = U.start.row;
            else {
              if (O + W <= C || k > z)
                return {
                  row: z,
                  column: this.getLine(z).length
                };
              b = this.getLine(k), U = null;
            }
            var Y = 0, G = Math.floor(C - O);
            if (this.$useWrapMode) {
              var J = this.$wrapData[k];
              J && (T = J[G], G > 0 && J.length && (Y = J.indent, I = J[G - 1] || J[J.length - 1], b = b.substring(I)));
            }
            return d !== void 0 && this.$bidiHandler.isBidiRow(O + G, k, G) && (g = this.$bidiHandler.offsetToCol(d)), I += this.$getStringScreenWidth(b, g - Y)[1], this.$useWrapMode && I >= T && (I = T - 1), U ? U.idxToPosition(I) : { row: k, column: I };
          }, A.prototype.documentToScreenPosition = function(C, g) {
            if (typeof g > "u")
              var d = this.$clipPositionToDocument(
                /**@type{Point}*/
                C.row,
                /**@type{Point}*/
                C.column
              );
            else
              d = this.$clipPositionToDocument(
                /**@type{number}*/
                C,
                g
              );
            C = d.row, g = d.column;
            var b = 0, k = null, I = null;
            I = this.getFoldAt(C, g, 1), I && (C = I.start.row, g = I.start.column);
            var T, O = 0, W = this.$docRowCache, H = this.$getRowCacheIndex(W, C), B = W.length;
            if (B && H >= 0)
              var O = W[H], b = this.$screenRowCache[H], P = C > W[B - 1];
            else
              var P = !B;
            for (var F = this.getNextFoldLine(O), z = F ? F.start.row : 1 / 0; O < C; ) {
              if (O >= z) {
                if (T = F.end.row + 1, T > C)
                  break;
                F = this.getNextFoldLine(T, F), z = F ? F.start.row : 1 / 0;
              } else
                T = O + 1;
              b += this.getRowLength(O), O = T, P && (this.$docRowCache.push(O), this.$screenRowCache.push(b));
            }
            var U = "";
            F && O >= z ? (U = this.getFoldDisplayLine(F, C, g), k = F.start.row) : (U = this.getLine(C).substring(0, g), k = C);
            var j = 0;
            if (this.$useWrapMode) {
              var Y = this.$wrapData[k];
              if (Y) {
                for (var G = 0; U.length >= Y[G]; )
                  b++, G++;
                U = U.substring(Y[G - 1] || 0, U.length), j = G > 0 ? Y.indent : 0;
              }
            }
            return this.lineWidgets && this.lineWidgets[O] && this.lineWidgets[O].rowsAbove && (b += this.lineWidgets[O].rowsAbove), {
              row: b,
              column: j + this.$getStringScreenWidth(U)[0]
            };
          }, A.prototype.documentToScreenColumn = function(C, g) {
            return this.documentToScreenPosition(C, g).column;
          }, A.prototype.documentToScreenRow = function(C, g) {
            return this.documentToScreenPosition(C, g).row;
          }, A.prototype.getScreenLength = function() {
            var C = 0, g = null;
            if (this.$useWrapMode)
              for (var k = this.$wrapData.length, I = 0, b = 0, g = this.$foldData[b++], T = g ? g.start.row : 1 / 0; I < k; ) {
                var O = this.$wrapData[I];
                C += O ? O.length + 1 : 1, I++, I > T && (I = g.end.row + 1, g = this.$foldData[b++], T = g ? g.start.row : 1 / 0);
              }
            else {
              C = this.getLength();
              for (var d = this.$foldData, b = 0; b < d.length; b++)
                g = d[b], C -= g.end.row - g.start.row;
            }
            return this.lineWidgets && (C += this.$getWidgetScreenLength()), C;
          }, A.prototype.$setFontMetrics = function(C) {
            this.$enableVarChar && (this.$getStringScreenWidth = function(g, d, b) {
              if (d === 0)
                return [0, 0];
              d || (d = 1 / 0), b = b || 0;
              var k, I;
              for (I = 0; I < g.length && (k = g.charAt(I), k === "	" ? b += this.getScreenTabSize(b) : b += C.getCharacterWidth(k), !(b > d)); I++)
                ;
              return [b, I];
            });
          }, A.prototype.getPrecedingCharacter = function() {
            var C = this.selection.getCursor();
            if (C.column === 0)
              return C.row === 0 ? "" : this.doc.getNewLineCharacter();
            var g = this.getLine(C.row);
            return g[C.column - 1];
          }, A.prototype.destroy = function() {
            this.destroyed || (this.bgTokenizer.setDocument(null), this.bgTokenizer.cleanup(), this.destroyed = !0), this.endOperation(), this.$stopWorker(), this.removeAllListeners(), this.doc && this.doc.off("change", this.$onChange), this.selection && (this.selection.off("changeCursor", this.$onSelectionChange), this.selection.off("changeSelection", this.$onSelectionChange)), this.selection.detach();
          }, A;
        }()
      );
      u.$uid = 0, u.prototype.$modes = s.$modes, u.prototype.getValue = u.prototype.toString, u.prototype.$defaultUndoManager = {
        undo: function() {
        },
        redo: function() {
        },
        hasUndo: function() {
        },
        hasRedo: function() {
        },
        reset: function() {
        },
        add: function() {
        },
        addSelection: function() {
        },
        startNewGroup: function() {
        },
        addSession: function() {
        }
      }, u.prototype.$overwrite = !1, u.prototype.$mode = null, u.prototype.$modeId = null, u.prototype.$scrollTop = 0, u.prototype.$scrollLeft = 0, u.prototype.$wrapLimit = 80, u.prototype.$useWrapMode = !1, u.prototype.$wrapLimitRange = {
        min: null,
        max: null
      }, u.prototype.lineWidgets = null, u.prototype.isFullWidth = D, f.implement(u.prototype, l);
      var w = 1, y = 2, m = 3, h = 4, $ = 9, _ = 10, L = 11, x = 12;
      function D(A) {
        return A < 4352 ? !1 : A >= 4352 && A <= 4447 || A >= 4515 && A <= 4519 || A >= 4602 && A <= 4607 || A >= 9001 && A <= 9002 || A >= 11904 && A <= 11929 || A >= 11931 && A <= 12019 || A >= 12032 && A <= 12245 || A >= 12272 && A <= 12283 || A >= 12288 && A <= 12350 || A >= 12353 && A <= 12438 || A >= 12441 && A <= 12543 || A >= 12549 && A <= 12589 || A >= 12593 && A <= 12686 || A >= 12688 && A <= 12730 || A >= 12736 && A <= 12771 || A >= 12784 && A <= 12830 || A >= 12832 && A <= 12871 || A >= 12880 && A <= 13054 || A >= 13056 && A <= 19903 || A >= 19968 && A <= 42124 || A >= 42128 && A <= 42182 || A >= 43360 && A <= 43388 || A >= 44032 && A <= 55203 || A >= 55216 && A <= 55238 || A >= 55243 && A <= 55291 || A >= 63744 && A <= 64255 || A >= 65040 && A <= 65049 || A >= 65072 && A <= 65106 || A >= 65108 && A <= 65126 || A >= 65128 && A <= 65131 || A >= 65281 && A <= 65376 || A >= 65504 && A <= 65510;
      }
      M("./edit_session/folding").Folding.call(u.prototype), M("./edit_session/bracket_match").BracketMatch.call(u.prototype), s.defineOptions(u.prototype, "session", {
        wrap: {
          set: function(A) {
            if (!A || A == "off" ? A = !1 : A == "free" ? A = !0 : A == "printMargin" ? A = -1 : typeof A == "string" && (A = parseInt(A, 10) || !1), this.$wrap != A)
              if (this.$wrap = A, !A)
                this.setUseWrapMode(!1);
              else {
                var C = typeof A == "number" ? A : null;
                this.setWrapLimitRange(C, C), this.setUseWrapMode(!0);
              }
          },
          get: function() {
            return this.getUseWrapMode() ? this.$wrap == -1 ? "printMargin" : this.getWrapLimitRange().min ? this.$wrap : "free" : "off";
          },
          handlesSet: !0
        },
        wrapMethod: {
          set: function(A) {
            A = A == "auto" ? this.$mode.type != "text" : A != "text", A != this.$wrapAsCode && (this.$wrapAsCode = A, this.$useWrapMode && (this.$useWrapMode = !1, this.setUseWrapMode(!0)));
          },
          initialValue: "auto"
        },
        indentedSoftWrap: {
          set: function() {
            this.$useWrapMode && (this.$useWrapMode = !1, this.setUseWrapMode(!0));
          },
          initialValue: !0
        },
        firstLineNumber: {
          set: function() {
            this._signal("changeBreakpoint");
          },
          initialValue: 1
        },
        useWorker: {
          set: function(A) {
            this.$useWorker = A, this.$stopWorker(), A && this.$startWorker();
          },
          initialValue: !0
        },
        useSoftTabs: { initialValue: !0 },
        tabSize: {
          set: function(A) {
            A = parseInt(A), A > 0 && this.$tabSize !== A && (this.$modified = !0, this.$rowLengthCache = [], this.$tabSize = A, this._signal("changeTabSize"));
          },
          initialValue: 4,
          handlesSet: !0
        },
        navigateWithinSoftTabs: { initialValue: !1 },
        foldStyle: {
          set: function(A) {
            this.setFoldStyle(A);
          },
          handlesSet: !0
        },
        overwrite: {
          set: function(A) {
            this._signal("changeOverwrite");
          },
          initialValue: !1
        },
        newLineMode: {
          set: function(A) {
            this.doc.setNewLineMode(A);
          },
          get: function() {
            return this.doc.getNewLineMode();
          },
          handlesSet: !0
        },
        mode: {
          set: function(A) {
            this.setMode(A);
          },
          get: function() {
            return this.$modeId;
          },
          handlesSet: !0
        }
      }), S.EditSession = u;
    }), ace.define("ace/search", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function(M, S, R) {
      var f = M("./lib/lang"), v = M("./lib/oop"), p = M("./range").Range, s = (
        /** @class */
        function() {
          function i() {
            this.$options = {};
          }
          return i.prototype.set = function(r) {
            return v.mixin(this.$options, r), this;
          }, i.prototype.getOptions = function() {
            return f.copyObject(this.$options);
          }, i.prototype.setOptions = function(r) {
            this.$options = r;
          }, i.prototype.find = function(r) {
            var t = this.$options, o = this.$matchIterator(r, t);
            if (!o)
              return !1;
            var a = null;
            return o.forEach(function(c, u, w, y) {
              return a = new p(c, u, w, y), u == y && t.start && /**@type{Range}*/
              t.start.start && t.skipCurrent != !1 && a.isEqual(
                /**@type{Range}*/
                t.start
              ) ? (a = null, !1) : !0;
            }), a;
          }, i.prototype.findAll = function(r) {
            var t = this.$options;
            if (!t.needle)
              return [];
            this.$assembleRegExp(t);
            var o = t.range, a = o ? r.getLines(o.start.row, o.end.row) : r.doc.getAllLines(), c = [], u = t.re;
            if (t.$isMultiLine) {
              var w = u.length, y = a.length - w, m;
              e: for (var h = u.offset || 0; h <= y; h++) {
                for (var $ = 0; $ < w; $++)
                  if (a[h + $].search(u[$]) == -1)
                    continue e;
                var _ = a[h], L = a[h + w - 1], x = _.length - _.match(u[0])[0].length, D = L.match(u[w - 1])[0].length;
                m && m.end.row === h && m.end.column > x || (c.push(m = new p(h, x, h + w - 1, D)), w > 2 && (h = h + w - 2));
              }
            } else
              for (var A, C = 0; C < a.length; C++)
                if (this.$isMultilineSearch(t)) {
                  var g = a.length - 1;
                  if (A = this.$multiLineForward(r, u, C, g), A) {
                    var d = A.endRow <= g ? A.endRow - 1 : g;
                    d > C && (C = d), c.push(new p(A.startRow, A.startCol, A.endRow, A.endCol));
                  }
                } else {
                  A = f.getMatchOffsets(a[C], u);
                  for (var $ = 0; $ < A.length; $++) {
                    var b = A[$];
                    c.push(new p(C, b.offset, C, b.offset + b.length));
                  }
                }
            if (o) {
              for (var k = o.start.column, I = o.end.column, C = 0, $ = c.length - 1; C < $ && c[C].start.column < k && c[C].start.row == 0; )
                C++;
              for (var T = o.end.row - o.start.row; C < $ && c[$].end.column > I && c[$].end.row == T; )
                $--;
              for (c = c.slice(C, $ + 1), C = 0, $ = c.length; C < $; C++)
                c[C].start.row += o.start.row, c[C].end.row += o.start.row;
            }
            return c;
          }, i.prototype.parseReplaceString = function(r) {
            for (var t = {
              DollarSign: 36,
              Ampersand: 38,
              Digit0: 48,
              Digit1: 49,
              Digit9: 57,
              Backslash: 92,
              n: 110,
              t: 116
            }, o = "", a = 0, c = r.length; a < c; a++) {
              var u = r.charCodeAt(a);
              if (u === t.Backslash) {
                if (a++, a >= c) {
                  o += "\\";
                  break;
                }
                var w = r.charCodeAt(a);
                switch (w) {
                  case t.Backslash:
                    o += "\\";
                    break;
                  case t.n:
                    o += `
`;
                    break;
                  case t.t:
                    o += "	";
                    break;
                }
                continue;
              }
              if (u === t.DollarSign) {
                if (a++, a >= c) {
                  o += "$";
                  break;
                }
                var y = r.charCodeAt(a);
                if (y === t.DollarSign) {
                  o += "$$";
                  continue;
                }
                if (y === t.Digit0 || y === t.Ampersand) {
                  o += "$&";
                  continue;
                }
                if (t.Digit1 <= y && y <= t.Digit9) {
                  o += "$" + r[a];
                  continue;
                }
              }
              o += r[a];
            }
            return o || r;
          }, i.prototype.replace = function(r, t) {
            var o = this.$options, a = this.$assembleRegExp(o);
            if (o.$isMultiLine)
              return t;
            if (a) {
              var c = this.$isMultilineSearch(o);
              c && (r = r.replace(/\r\n|\r|\n/g, `
`));
              var u = a.exec(r);
              if (!u || !c && u[0].length != r.length)
                return null;
              if (t = o.regExp ? this.parseReplaceString(t) : t.replace(/\$/g, "$$$$"), t = r.replace(a, t), o.preserveCase) {
                t = t.split("");
                for (var w = Math.min(r.length, r.length); w--; ) {
                  var y = r[w];
                  y && y.toLowerCase() != y ? t[w] = t[w].toUpperCase() : t[w] = t[w].toLowerCase();
                }
                t = t.join("");
              }
              return t;
            }
          }, i.prototype.$assembleRegExp = function(r, t) {
            if (r.needle instanceof RegExp)
              return r.re = r.needle;
            var o = r.needle;
            if (!r.needle)
              return r.re = !1;
            r.regExp || (o = f.escapeRegExp(o));
            var a = r.caseSensitive ? "gm" : "gmi";
            try {
              new RegExp(o, "u"), r.$supportsUnicodeFlag = !0, a += "u";
            } catch {
              r.$supportsUnicodeFlag = !1;
            }
            if (r.wholeWord && (o = l(o, r)), r.$isMultiLine = !t && /[\n\r]/.test(o), r.$isMultiLine)
              return r.re = this.$assembleMultilineRegExp(o, a);
            try {
              var c = new RegExp(o, a);
            } catch {
              c = !1;
            }
            return r.re = c;
          }, i.prototype.$assembleMultilineRegExp = function(r, t) {
            for (var o = r.replace(/\r\n|\r|\n/g, `$
^`).split(`
`), a = [], c = 0; c < o.length; c++)
              try {
                a.push(new RegExp(o[c], t));
              } catch {
                return !1;
              }
            return a;
          }, i.prototype.$isMultilineSearch = function(r) {
            return r.re && /\\r\\n|\\r|\\n/.test(r.re.source) && r.regExp && !r.$isMultiLine;
          }, i.prototype.$multiLineForward = function(r, t, o, a) {
            for (var c, u = n(r, o), w = o; w <= a; ) {
              for (var y = 0; y < u && !(w > a); y++) {
                var m = r.getLine(w++);
                c = c == null ? m : c + `
` + m;
              }
              var h = t.exec(c);
              if (t.lastIndex = 0, h) {
                var $ = c.slice(0, h.index).split(`
`), _ = h[0].split(`
`), L = o + $.length - 1, x = $[$.length - 1].length, D = L + _.length - 1, A = _.length == 1 ? x + _[0].length : _[_.length - 1].length;
                return {
                  startRow: L,
                  startCol: x,
                  endRow: D,
                  endCol: A
                };
              }
            }
            return null;
          }, i.prototype.$multiLineBackward = function(r, t, o, a, c) {
            for (var u, w = n(r, a), y = r.getLine(a).length - o, m = a; m >= c; ) {
              for (var h = 0; h < w && m >= c; h++) {
                var $ = r.getLine(m--);
                u = u == null ? $ : $ + `
` + u;
              }
              var _ = e(u, t, y);
              if (_) {
                var L = u.slice(0, _.index).split(`
`), x = _[0].split(`
`), D = m + L.length, A = L[L.length - 1].length, C = D + x.length - 1, g = x.length == 1 ? A + x[0].length : x[x.length - 1].length;
                return {
                  startRow: D,
                  startCol: A,
                  endRow: C,
                  endCol: g
                };
              }
            }
            return null;
          }, i.prototype.$matchIterator = function(r, t) {
            var o = this.$assembleRegExp(t);
            if (!o)
              return !1;
            var a = this.$isMultilineSearch(t), c = this.$multiLineForward, u = this.$multiLineBackward, w = t.backwards == !0, y = t.skipCurrent != !1, m = o.unicode, h = t.range, $ = t.start;
            $ || ($ = h ? h[w ? "end" : "start"] : r.selection.getRange()), $.start && ($ = $[y != w ? "end" : "start"]);
            var _ = h ? h.start.row : 0, L = h ? h.end.row : r.getLength() - 1;
            if (w)
              var x = function(C) {
                var g = $.row;
                if (!A(g, $.column, C)) {
                  for (g--; g >= _; g--)
                    if (A(g, Number.MAX_VALUE, C))
                      return;
                  if (t.wrap != !1) {
                    for (g = L, _ = $.row; g >= _; g--)
                      if (A(g, Number.MAX_VALUE, C))
                        return;
                  }
                }
              };
            else
              var x = function(g) {
                var d = $.row;
                if (!A(d, $.column, g)) {
                  for (d = d + 1; d <= L; d++)
                    if (A(d, 0, g))
                      return;
                  if (t.wrap != !1) {
                    for (d = _, L = $.row; d <= L; d++)
                      if (A(d, 0, g))
                        return;
                  }
                }
              };
            if (t.$isMultiLine)
              var D = o.length, A = function(C, g, d) {
                var b = w ? C - D + 1 : C;
                if (!(b < 0 || b + D > r.getLength())) {
                  var k = r.getLine(b), I = k.search(o[0]);
                  if (!(!w && I < g || I === -1)) {
                    for (var T = 1; T < D; T++)
                      if (k = r.getLine(b + T), k.search(o[T]) == -1)
                        return;
                    var O = k.match(o[D - 1])[0].length;
                    if (!(w && O > g) && d(b, I, b + D - 1, O))
                      return !0;
                  }
                }
              };
            else if (w)
              var A = function(g, d, b) {
                if (a) {
                  var k = u(r, o, d, g, _);
                  if (!k)
                    return !1;
                  if (b(k.startRow, k.startCol, k.endRow, k.endCol))
                    return !0;
                } else {
                  var I = r.getLine(g), T = [], O, W = 0;
                  for (o.lastIndex = 0; O = o.exec(I); ) {
                    var H = O[0].length;
                    if (W = O.index, !H) {
                      if (W >= I.length)
                        break;
                      o.lastIndex = W += f.skipEmptyMatch(I, W, m);
                    }
                    if (O.index + H > d)
                      break;
                    T.push(O.index, H);
                  }
                  for (var B = T.length - 1; B >= 0; B -= 2) {
                    var P = T[B - 1], H = T[B];
                    if (b(g, P, g, P + H))
                      return !0;
                  }
                }
              };
            else
              var A = function(g, d, b) {
                if (o.lastIndex = d, a) {
                  var k = c(r, o, g, L);
                  if (k) {
                    var I = k.endRow <= L ? k.endRow - 1 : L;
                    I > g && (g = I);
                  }
                  if (!k)
                    return !1;
                  if (b(k.startRow, k.startCol, k.endRow, k.endCol))
                    return !0;
                } else
                  for (var T = r.getLine(g), O, W; W = o.exec(T); ) {
                    var H = W[0].length;
                    if (O = W.index, b(g, O, g, O + H))
                      return !0;
                    if (!H && (o.lastIndex = O += f.skipEmptyMatch(T, O, m), O >= T.length))
                      return !1;
                  }
              };
            return { forEach: x };
          }, i;
        }()
      );
      function l(i, r) {
        var t = f.supportsLookbehind();
        function o(w, y) {
          y === void 0 && (y = !0);
          var m = t && r.$supportsUnicodeFlag ? new RegExp("[\\p{L}\\p{N}_]", "u") : new RegExp("\\w");
          return m.test(w) || r.regExp ? t && r.$supportsUnicodeFlag ? y ? "(?<=^|[^\\p{L}\\p{N}_])" : "(?=[^\\p{L}\\p{N}_]|$)" : "\\b" : "";
        }
        var a = Array.from(i), c = a[0], u = a[a.length - 1];
        return o(c) + i + o(u, !1);
      }
      function e(i, r, t) {
        for (var o = null, a = 0; a <= i.length; ) {
          r.lastIndex = a;
          var c = r.exec(i);
          if (!c)
            break;
          var u = c.index + c[0].length;
          if (u > i.length - t)
            break;
          (!o || u > o.index + o[0].length) && (o = c), a = c.index + 1;
        }
        return o;
      }
      function n(i, r) {
        var t = 5e3, o = { row: r, column: 0 }, a = i.doc.positionToIndex(o), c = a + t, u = i.doc.indexToPosition(c), w = u.row;
        return w + 1;
      }
      S.Search = s;
    }), ace.define("ace/keyboard/hash_handler", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function(M, S, R) {
      var f = this && this.__extends || /* @__PURE__ */ function() {
        var i = function(r, t) {
          return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, a) {
            o.__proto__ = a;
          } || function(o, a) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (o[c] = a[c]);
          }, i(r, t);
        };
        return function(r, t) {
          if (typeof t != "function" && t !== null)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
          i(r, t);
          function o() {
            this.constructor = r;
          }
          r.prototype = t === null ? Object.create(t) : (o.prototype = t.prototype, new o());
        };
      }(), v = M("../lib/keys"), p = M("../lib/useragent"), s = v.KEY_MODS, l = (
        /** @class */
        function() {
          function i(r, t) {
            this.$init(r, t, !1);
          }
          return i.prototype.$init = function(r, t, o) {
            this.platform = t || (p.isMac ? "mac" : "win"), this.commands = {}, this.commandKeyBinding = {}, this.addCommands(r), this.$singleCommand = o;
          }, i.prototype.addCommand = function(r) {
            this.commands[r.name] && this.removeCommand(r), this.commands[r.name] = r, r.bindKey && this._buildKeyHash(r);
          }, i.prototype.removeCommand = function(r, t) {
            var o = r && (typeof r == "string" ? r : r.name);
            r = this.commands[o], t || delete this.commands[o];
            var a = this.commandKeyBinding;
            for (var c in a) {
              var u = a[c];
              if (u == r)
                delete a[c];
              else if (Array.isArray(u)) {
                var w = u.indexOf(r);
                w != -1 && (u.splice(w, 1), u.length == 1 && (a[c] = u[0]));
              }
            }
          }, i.prototype.bindKey = function(r, t, o) {
            if (typeof r == "object" && r && (o == null && (o = r.position), r = r[this.platform]), !!r) {
              if (typeof t == "function")
                return this.addCommand({ exec: t, bindKey: r, name: t.name || /**@type{string}*/
                r });
              r.split("|").forEach(function(a) {
                var c = "";
                if (a.indexOf(" ") != -1) {
                  var u = a.split(/\s+/);
                  a = u.pop(), u.forEach(function(m) {
                    var h = this.parseKeys(m), $ = s[h.hashId] + h.key;
                    c += (c ? " " : "") + $, this._addCommandToBinding(c, "chainKeys");
                  }, this), c += " ";
                }
                var w = this.parseKeys(a), y = s[w.hashId] + w.key;
                this._addCommandToBinding(c + y, t, o);
              }, this);
            }
          }, i.prototype._addCommandToBinding = function(r, t, o) {
            var a = this.commandKeyBinding, c;
            if (!t)
              delete a[r];
            else if (!a[r] || this.$singleCommand)
              a[r] = t;
            else {
              Array.isArray(a[r]) ? (c = a[r].indexOf(t)) != -1 && a[r].splice(c, 1) : a[r] = [a[r]], typeof o != "number" && (o = e(t));
              var u = a[r];
              for (c = 0; c < u.length; c++) {
                var w = u[c], y = e(w);
                if (y > o)
                  break;
              }
              u.splice(c, 0, t);
            }
          }, i.prototype.addCommands = function(r) {
            r && Object.keys(r).forEach(function(t) {
              var o = r[t];
              if (o) {
                if (typeof o == "string")
                  return this.bindKey(o, t);
                typeof o == "function" && (o = { exec: o }), typeof o == "object" && (o.name || (o.name = t), this.addCommand(o));
              }
            }, this);
          }, i.prototype.removeCommands = function(r) {
            Object.keys(r).forEach(function(t) {
              this.removeCommand(r[t]);
            }, this);
          }, i.prototype.bindKeys = function(r) {
            Object.keys(r).forEach(function(t) {
              this.bindKey(t, r[t]);
            }, this);
          }, i.prototype._buildKeyHash = function(r) {
            this.bindKey(r.bindKey, r);
          }, i.prototype.parseKeys = function(r) {
            var t = r.toLowerCase().split(/[\-\+]([\-\+])?/).filter(function(y) {
              return y;
            }), o = t.pop(), a = v[o];
            if (v.FUNCTION_KEYS[a])
              o = v.FUNCTION_KEYS[a].toLowerCase();
            else if (t.length) {
              if (t.length == 1 && t[0] == "shift")
                return { key: o.toUpperCase(), hashId: -1 };
            } else return { key: o, hashId: -1 };
            for (var c = 0, u = t.length; u--; ) {
              var w = v.KEY_MODS[t[u]];
              if (w == null)
                return typeof console < "u" && console.error("invalid modifier " + t[u] + " in " + r), !1;
              c |= w;
            }
            return { key: o, hashId: c };
          }, i.prototype.findKeyCommand = function(r, t) {
            var o = s[r] + t;
            return this.commandKeyBinding[o];
          }, i.prototype.handleKeyboard = function(r, t, o, a) {
            if (!(a < 0)) {
              var c = s[t] + o, u = this.commandKeyBinding[c];
              return r.$keyChain && (r.$keyChain += " " + c, u = this.commandKeyBinding[r.$keyChain] || u), u && (u == "chainKeys" || u[u.length - 1] == "chainKeys") ? (r.$keyChain = r.$keyChain || c, { command: "null" }) : (r.$keyChain && ((!t || t == 4) && o.length == 1 ? r.$keyChain = r.$keyChain.slice(0, -c.length - 1) : (t == -1 || a > 0) && (r.$keyChain = "")), { command: u });
            }
          }, i.prototype.getStatusText = function(r, t) {
            return t.$keyChain || "";
          }, i;
        }()
      );
      function e(i) {
        return typeof i == "object" && i.bindKey && i.bindKey.position || (i.isDefault ? -100 : 0);
      }
      var n = (
        /** @class */
        function(i) {
          f(r, i);
          function r(t, o) {
            var a = i.call(this, t, o) || this;
            return a.$singleCommand = !0, a;
          }
          return r;
        }(l)
      );
      n.call = function(i, r, t) {
        l.prototype.$init.call(i, r, t, !0);
      }, l.call = function(i, r, t) {
        l.prototype.$init.call(i, r, t, !1);
      }, S.HashHandler = n, S.MultiHashHandler = l;
    }), ace.define("ace/commands/command_manager", ["require", "exports", "module", "ace/lib/oop", "ace/keyboard/hash_handler", "ace/lib/event_emitter"], function(M, S, R) {
      var f = this && this.__extends || /* @__PURE__ */ function() {
        var e = function(n, i) {
          return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, t) {
            r.__proto__ = t;
          } || function(r, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
          }, e(n, i);
        };
        return function(n, i) {
          if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
          e(n, i);
          function r() {
            this.constructor = n;
          }
          n.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r());
        };
      }(), v = M("../lib/oop"), p = M("../keyboard/hash_handler").MultiHashHandler, s = M("../lib/event_emitter").EventEmitter, l = (
        /** @class */
        function(e) {
          f(n, e);
          function n(i, r) {
            var t = e.call(this, r, i) || this;
            return t.byName = t.commands, t.setDefaultHandler("exec", function(o) {
              return o.args ? o.command.exec(o.editor, o.args, o.event, !1) : o.command.exec(o.editor, {}, o.event, !0);
            }), t;
          }
          return n.prototype.exec = function(i, r, t) {
            if (Array.isArray(i)) {
              for (var o = i.length; o--; )
                if (this.exec(i[o], r, t))
                  return !0;
              return !1;
            }
            typeof i == "string" && (i = this.commands[i]);
            var a = { editor: r, command: i, args: t };
            return this.canExecute(i, r) ? (a.returnValue = this._emit("exec", a), this._signal("afterExec", a), a.returnValue !== !1) : (this._signal("commandUnavailable", a), !1);
          }, n.prototype.canExecute = function(i, r) {
            return typeof i == "string" && (i = this.commands[i]), !(!i || r && r.$readOnly && !i.readOnly || this.$checkCommandState != !1 && i.isAvailable && !i.isAvailable(r));
          }, n.prototype.toggleRecording = function(i) {
            if (!this.$inReplay)
              return i && i._emit("changeStatus"), this.recording ? (this.macro.pop(), this.off("exec", this.$addCommandToMacro), this.macro.length || (this.macro = this.oldMacro), this.recording = !1) : (this.$addCommandToMacro || (this.$addCommandToMacro = (function(r) {
                this.macro.push([r.command, r.args]);
              }).bind(this)), this.oldMacro = this.macro, this.macro = [], this.on("exec", this.$addCommandToMacro), this.recording = !0);
          }, n.prototype.replay = function(i) {
            if (!(this.$inReplay || !this.macro)) {
              if (this.recording)
                return this.toggleRecording(i);
              try {
                this.$inReplay = !0, this.macro.forEach(function(r) {
                  typeof r == "string" ? this.exec(r, i) : this.exec(r[0], i, r[1]);
                }, this);
              } finally {
                this.$inReplay = !1;
              }
            }
          }, n.prototype.trimMacro = function(i) {
            return i.map(function(r) {
              return typeof r[0] != "string" && (r[0] = r[0].name), r[1] || (r = r[0]), r;
            });
          }, n;
        }(p)
      );
      v.implement(l.prototype, s), S.CommandManager = l;
    }), ace.define("ace/commands/default_commands", ["require", "exports", "module", "ace/lib/lang", "ace/config", "ace/range"], function(M, S, R) {
      var f = M("../lib/lang"), v = M("../config"), p = M("../range").Range;
      function s(e, n) {
        return { win: e, mac: n };
      }
      S.commands = [
        {
          name: "showSettingsMenu",
          description: "Show settings menu",
          bindKey: s("Ctrl-,", "Command-,"),
          exec: function(e) {
            v.loadModule("ace/ext/settings_menu", function(n) {
              n.init(e), e.showSettingsMenu();
            });
          },
          readOnly: !0
        },
        {
          name: "goToNextError",
          description: "Go to next error",
          bindKey: s("Alt-E", "F4"),
          exec: function(e) {
            v.loadModule("ace/ext/error_marker", function(n) {
              n.showErrorMarker(e, 1);
            });
          },
          scrollIntoView: "animate",
          readOnly: !0
        },
        {
          name: "goToPreviousError",
          description: "Go to previous error",
          bindKey: s("Alt-Shift-E", "Shift-F4"),
          exec: function(e) {
            v.loadModule("ace/ext/error_marker", function(n) {
              n.showErrorMarker(e, -1);
            });
          },
          scrollIntoView: "animate",
          readOnly: !0
        },
        {
          name: "selectall",
          description: "Select all",
          bindKey: s("Ctrl-A", "Command-A"),
          exec: function(e) {
            e.selectAll();
          },
          readOnly: !0
        },
        {
          name: "centerselection",
          description: "Center selection",
          bindKey: s(null, "Ctrl-L"),
          exec: function(e) {
            e.centerSelection();
          },
          readOnly: !0
        },
        {
          name: "gotoline",
          description: "Go to line...",
          bindKey: s("Ctrl-L", "Command-L"),
          exec: function(e, n) {
            typeof n == "number" && !isNaN(n) && e.gotoLine(n), e.prompt({ $type: "gotoLine" });
          },
          readOnly: !0
        },
        {
          name: "fold",
          bindKey: s("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"),
          exec: function(e) {
            e.session.toggleFold(!1);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "unfold",
          bindKey: s("Alt-Shift-L|Ctrl-Shift-F1", "Command-Alt-Shift-L|Command-Shift-F1"),
          exec: function(e) {
            e.session.toggleFold(!0);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "toggleFoldWidget",
          description: "Toggle fold widget",
          bindKey: s("F2", "F2"),
          exec: function(e) {
            e.session.toggleFoldWidget();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "toggleParentFoldWidget",
          description: "Toggle parent fold widget",
          bindKey: s("Alt-F2", "Alt-F2"),
          exec: function(e) {
            e.session.toggleFoldWidget(!0);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "foldall",
          description: "Fold all",
          bindKey: s(null, "Ctrl-Command-Option-0"),
          exec: function(e) {
            e.session.foldAll();
          },
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "foldAllComments",
          description: "Fold all comments",
          bindKey: s(null, "Ctrl-Command-Option-0"),
          exec: function(e) {
            e.session.foldAllComments();
          },
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "foldOther",
          description: "Fold other",
          bindKey: s("Alt-0", "Command-Option-0"),
          exec: function(e) {
            e.session.foldAll(), e.session.unfold(e.selection.getAllRanges());
          },
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "unfoldall",
          description: "Unfold all",
          bindKey: s("Alt-Shift-0", "Command-Option-Shift-0"),
          exec: function(e) {
            e.session.unfold();
          },
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "findnext",
          description: "Find next",
          bindKey: s("Ctrl-K", "Command-G"),
          exec: function(e) {
            e.findNext();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "findprevious",
          description: "Find previous",
          bindKey: s("Ctrl-Shift-K", "Command-Shift-G"),
          exec: function(e) {
            e.findPrevious();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "selectOrFindNext",
          description: "Select or find next",
          bindKey: s("Alt-K", "Ctrl-G"),
          exec: function(e) {
            e.selection.isEmpty() ? e.selection.selectWord() : e.findNext();
          },
          readOnly: !0
        },
        {
          name: "selectOrFindPrevious",
          description: "Select or find previous",
          bindKey: s("Alt-Shift-K", "Ctrl-Shift-G"),
          exec: function(e) {
            e.selection.isEmpty() ? e.selection.selectWord() : e.findPrevious();
          },
          readOnly: !0
        },
        {
          name: "find",
          description: "Find",
          bindKey: s("Ctrl-F", "Command-F"),
          exec: function(e) {
            v.loadModule("ace/ext/searchbox", function(n) {
              n.Search(e);
            });
          },
          readOnly: !0
        },
        {
          name: "overwrite",
          description: "Overwrite",
          bindKey: "Insert",
          exec: function(e) {
            e.toggleOverwrite();
          },
          readOnly: !0
        },
        {
          name: "selecttostart",
          description: "Select to start",
          bindKey: s("Ctrl-Shift-Home", "Command-Shift-Home|Command-Shift-Up"),
          exec: function(e) {
            e.getSelection().selectFileStart();
          },
          multiSelectAction: "forEach",
          readOnly: !0,
          scrollIntoView: "animate",
          aceCommandGroup: "fileJump"
        },
        {
          name: "gotostart",
          description: "Go to start",
          bindKey: s("Ctrl-Home", "Command-Home|Command-Up"),
          exec: function(e) {
            e.navigateFileStart();
          },
          multiSelectAction: "forEach",
          readOnly: !0,
          scrollIntoView: "animate",
          aceCommandGroup: "fileJump"
        },
        {
          name: "selectup",
          description: "Select up",
          bindKey: s("Shift-Up", "Shift-Up|Ctrl-Shift-P"),
          exec: function(e) {
            e.getSelection().selectUp();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "golineup",
          description: "Go line up",
          bindKey: s("Up", "Up|Ctrl-P"),
          exec: function(e, n) {
            e.navigateUp(n.times);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selecttoend",
          description: "Select to end",
          bindKey: s("Ctrl-Shift-End", "Command-Shift-End|Command-Shift-Down"),
          exec: function(e) {
            e.getSelection().selectFileEnd();
          },
          multiSelectAction: "forEach",
          readOnly: !0,
          scrollIntoView: "animate",
          aceCommandGroup: "fileJump"
        },
        {
          name: "gotoend",
          description: "Go to end",
          bindKey: s("Ctrl-End", "Command-End|Command-Down"),
          exec: function(e) {
            e.navigateFileEnd();
          },
          multiSelectAction: "forEach",
          readOnly: !0,
          scrollIntoView: "animate",
          aceCommandGroup: "fileJump"
        },
        {
          name: "selectdown",
          description: "Select down",
          bindKey: s("Shift-Down", "Shift-Down|Ctrl-Shift-N"),
          exec: function(e) {
            e.getSelection().selectDown();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "golinedown",
          description: "Go line down",
          bindKey: s("Down", "Down|Ctrl-N"),
          exec: function(e, n) {
            e.navigateDown(n.times);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selectwordleft",
          description: "Select word left",
          bindKey: s("Ctrl-Shift-Left", "Option-Shift-Left"),
          exec: function(e) {
            e.getSelection().selectWordLeft();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "gotowordleft",
          description: "Go to word left",
          bindKey: s("Ctrl-Left", "Option-Left"),
          exec: function(e) {
            e.navigateWordLeft();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selecttolinestart",
          description: "Select to line start",
          bindKey: s("Alt-Shift-Left", "Command-Shift-Left|Ctrl-Shift-A"),
          exec: function(e) {
            e.getSelection().selectLineStart();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "gotolinestart",
          description: "Go to line start",
          bindKey: s("Alt-Left|Home", "Command-Left|Home|Ctrl-A"),
          exec: function(e) {
            e.navigateLineStart();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selectleft",
          description: "Select left",
          bindKey: s("Shift-Left", "Shift-Left|Ctrl-Shift-B"),
          exec: function(e) {
            e.getSelection().selectLeft();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "gotoleft",
          description: "Go to left",
          bindKey: s("Left", "Left|Ctrl-B"),
          exec: function(e, n) {
            e.navigateLeft(n.times);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selectwordright",
          description: "Select word right",
          bindKey: s("Ctrl-Shift-Right", "Option-Shift-Right"),
          exec: function(e) {
            e.getSelection().selectWordRight();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "gotowordright",
          description: "Go to word right",
          bindKey: s("Ctrl-Right", "Option-Right"),
          exec: function(e) {
            e.navigateWordRight();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selecttolineend",
          description: "Select to line end",
          bindKey: s("Alt-Shift-Right", "Command-Shift-Right|Shift-End|Ctrl-Shift-E"),
          exec: function(e) {
            e.getSelection().selectLineEnd();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "gotolineend",
          description: "Go to line end",
          bindKey: s("Alt-Right|End", "Command-Right|End|Ctrl-E"),
          exec: function(e) {
            e.navigateLineEnd();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selectright",
          description: "Select right",
          bindKey: s("Shift-Right", "Shift-Right"),
          exec: function(e) {
            e.getSelection().selectRight();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "gotoright",
          description: "Go to right",
          bindKey: s("Right", "Right|Ctrl-F"),
          exec: function(e, n) {
            e.navigateRight(n.times);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selectpagedown",
          description: "Select page down",
          bindKey: "Shift-PageDown",
          exec: function(e) {
            e.selectPageDown();
          },
          readOnly: !0
        },
        {
          name: "pagedown",
          description: "Page down",
          bindKey: s(null, "Option-PageDown"),
          exec: function(e) {
            e.scrollPageDown();
          },
          readOnly: !0
        },
        {
          name: "gotopagedown",
          description: "Go to page down",
          bindKey: s("PageDown", "PageDown|Ctrl-V"),
          exec: function(e) {
            e.gotoPageDown();
          },
          readOnly: !0
        },
        {
          name: "selectpageup",
          description: "Select page up",
          bindKey: "Shift-PageUp",
          exec: function(e) {
            e.selectPageUp();
          },
          readOnly: !0
        },
        {
          name: "pageup",
          description: "Page up",
          bindKey: s(null, "Option-PageUp"),
          exec: function(e) {
            e.scrollPageUp();
          },
          readOnly: !0
        },
        {
          name: "gotopageup",
          description: "Go to page up",
          bindKey: "PageUp",
          exec: function(e) {
            e.gotoPageUp();
          },
          readOnly: !0
        },
        {
          name: "scrollup",
          description: "Scroll up",
          bindKey: s("Ctrl-Up", null),
          exec: function(e) {
            e.renderer.scrollBy(0, -2 * e.renderer.layerConfig.lineHeight);
          },
          readOnly: !0
        },
        {
          name: "scrolldown",
          description: "Scroll down",
          bindKey: s("Ctrl-Down", null),
          exec: function(e) {
            e.renderer.scrollBy(0, 2 * e.renderer.layerConfig.lineHeight);
          },
          readOnly: !0
        },
        {
          name: "selectlinestart",
          description: "Select line start",
          bindKey: "Shift-Home",
          exec: function(e) {
            e.getSelection().selectLineStart();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selectlineend",
          description: "Select line end",
          bindKey: "Shift-End",
          exec: function(e) {
            e.getSelection().selectLineEnd();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "togglerecording",
          description: "Toggle recording",
          bindKey: s("Ctrl-Alt-E", "Command-Option-E"),
          exec: function(e) {
            e.commands.toggleRecording(e);
          },
          readOnly: !0
        },
        {
          name: "replaymacro",
          description: "Replay macro",
          bindKey: s("Ctrl-Shift-E", "Command-Shift-E"),
          exec: function(e) {
            e.commands.replay(e);
          },
          readOnly: !0
        },
        {
          name: "jumptomatching",
          description: "Jump to matching",
          bindKey: s("Ctrl-\\|Ctrl-P", "Command-\\"),
          exec: function(e) {
            e.jumpToMatching();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "animate",
          readOnly: !0
        },
        {
          name: "selecttomatching",
          description: "Select to matching",
          bindKey: s("Ctrl-Shift-\\|Ctrl-Shift-P", "Command-Shift-\\"),
          exec: function(e) {
            e.jumpToMatching(!0);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "animate",
          readOnly: !0
        },
        {
          name: "expandToMatching",
          description: "Expand to matching",
          bindKey: s("Ctrl-Shift-M", "Ctrl-Shift-M"),
          exec: function(e) {
            e.jumpToMatching(!0, !0);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "animate",
          readOnly: !0
        },
        {
          name: "passKeysToBrowser",
          description: "Pass keys to browser",
          bindKey: s(null, null),
          exec: function() {
          },
          passEvent: !0,
          readOnly: !0
        },
        {
          name: "copy",
          description: "Copy",
          exec: function(e) {
          },
          readOnly: !0
        },
        {
          name: "cut",
          description: "Cut",
          exec: function(e) {
            var n = e.$copyWithEmptySelection && e.selection.isEmpty(), i = n ? e.selection.getLineRange() : e.selection.getRange();
            e._emit("cut", i), i.isEmpty() || e.session.remove(i), e.clearSelection();
          },
          scrollIntoView: "cursor",
          multiSelectAction: "forEach"
        },
        {
          name: "paste",
          description: "Paste",
          exec: function(e, n) {
            e.$handlePaste(n);
          },
          scrollIntoView: "cursor"
        },
        {
          name: "removeline",
          description: "Remove line",
          bindKey: s("Ctrl-D", "Command-D"),
          exec: function(e) {
            e.removeLines();
          },
          scrollIntoView: "cursor",
          multiSelectAction: "forEachLine"
        },
        {
          name: "duplicateSelection",
          description: "Duplicate selection",
          bindKey: s("Ctrl-Shift-D", "Command-Shift-D"),
          exec: function(e) {
            e.duplicateSelection();
          },
          scrollIntoView: "cursor",
          multiSelectAction: "forEach"
        },
        {
          name: "sortlines",
          description: "Sort lines",
          bindKey: s("Ctrl-Alt-S", "Command-Alt-S"),
          exec: function(e) {
            e.sortLines();
          },
          scrollIntoView: "selection",
          multiSelectAction: "forEachLine"
        },
        {
          name: "togglecomment",
          description: "Toggle comment",
          bindKey: s("Ctrl-/", "Command-/"),
          exec: function(e) {
            e.toggleCommentLines();
          },
          multiSelectAction: "forEachLine",
          scrollIntoView: "selectionPart"
        },
        {
          name: "toggleBlockComment",
          description: "Toggle block comment",
          bindKey: s("Ctrl-Shift-/", "Command-Shift-/"),
          exec: function(e) {
            e.toggleBlockComment();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "selectionPart"
        },
        {
          name: "modifyNumberUp",
          description: "Modify number up",
          bindKey: s("Ctrl-Shift-Up", "Alt-Shift-Up"),
          exec: function(e) {
            e.modifyNumber(1);
          },
          scrollIntoView: "cursor",
          multiSelectAction: "forEach"
        },
        {
          name: "modifyNumberDown",
          description: "Modify number down",
          bindKey: s("Ctrl-Shift-Down", "Alt-Shift-Down"),
          exec: function(e) {
            e.modifyNumber(-1);
          },
          scrollIntoView: "cursor",
          multiSelectAction: "forEach"
        },
        {
          name: "replace",
          description: "Replace",
          bindKey: s("Ctrl-H", "Command-Option-F"),
          exec: function(e) {
            v.loadModule("ace/ext/searchbox", function(n) {
              n.Search(e, !0);
            });
          }
        },
        {
          name: "undo",
          description: "Undo",
          bindKey: s("Ctrl-Z", "Command-Z"),
          exec: function(e) {
            e.undo();
          }
        },
        {
          name: "redo",
          description: "Redo",
          bindKey: s("Ctrl-Shift-Z|Ctrl-Y", "Command-Shift-Z|Command-Y"),
          exec: function(e) {
            e.redo();
          }
        },
        {
          name: "copylinesup",
          description: "Copy lines up",
          bindKey: s("Alt-Shift-Up", "Command-Option-Up"),
          exec: function(e) {
            e.copyLinesUp();
          },
          scrollIntoView: "cursor"
        },
        {
          name: "movelinesup",
          description: "Move lines up",
          bindKey: s("Alt-Up", "Option-Up"),
          exec: function(e) {
            e.moveLinesUp();
          },
          scrollIntoView: "cursor"
        },
        {
          name: "copylinesdown",
          description: "Copy lines down",
          bindKey: s("Alt-Shift-Down", "Command-Option-Down"),
          exec: function(e) {
            e.copyLinesDown();
          },
          scrollIntoView: "cursor"
        },
        {
          name: "movelinesdown",
          description: "Move lines down",
          bindKey: s("Alt-Down", "Option-Down"),
          exec: function(e) {
            e.moveLinesDown();
          },
          scrollIntoView: "cursor"
        },
        {
          name: "del",
          description: "Delete",
          bindKey: s("Delete", "Delete|Ctrl-D|Shift-Delete"),
          exec: function(e) {
            e.remove("right");
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "backspace",
          description: "Backspace",
          bindKey: s("Shift-Backspace|Backspace", "Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"),
          exec: function(e) {
            e.remove("left");
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "cut_or_delete",
          description: "Cut or delete",
          bindKey: s("Shift-Delete", null),
          exec: function(e) {
            if (e.selection.isEmpty())
              e.remove("left");
            else
              return !1;
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "removetolinestart",
          description: "Remove to line start",
          bindKey: s("Alt-Backspace", "Command-Backspace"),
          exec: function(e) {
            e.removeToLineStart();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "removetolineend",
          description: "Remove to line end",
          bindKey: s("Alt-Delete", "Ctrl-K|Command-Delete"),
          exec: function(e) {
            e.removeToLineEnd();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "removetolinestarthard",
          description: "Remove to line start hard",
          bindKey: s("Ctrl-Shift-Backspace", null),
          exec: function(e) {
            var n = e.selection.getRange();
            n.start.column = 0, e.session.remove(n);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "removetolineendhard",
          description: "Remove to line end hard",
          bindKey: s("Ctrl-Shift-Delete", null),
          exec: function(e) {
            var n = e.selection.getRange();
            n.end.column = Number.MAX_VALUE, e.session.remove(n);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "removewordleft",
          description: "Remove word left",
          bindKey: s("Ctrl-Backspace", "Alt-Backspace|Ctrl-Alt-Backspace"),
          exec: function(e) {
            e.removeWordLeft();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "removewordright",
          description: "Remove word right",
          bindKey: s("Ctrl-Delete", "Alt-Delete"),
          exec: function(e) {
            e.removeWordRight();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "outdent",
          description: "Outdent",
          bindKey: s("Shift-Tab", "Shift-Tab"),
          exec: function(e) {
            e.blockOutdent();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "selectionPart"
        },
        {
          name: "indent",
          description: "Indent",
          bindKey: s("Tab", "Tab"),
          exec: function(e) {
            e.indent();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "selectionPart"
        },
        {
          name: "blockoutdent",
          description: "Block outdent",
          bindKey: s("Ctrl-[", "Ctrl-["),
          exec: function(e) {
            e.blockOutdent();
          },
          multiSelectAction: "forEachLine",
          scrollIntoView: "selectionPart"
        },
        {
          name: "blockindent",
          description: "Block indent",
          bindKey: s("Ctrl-]", "Ctrl-]"),
          exec: function(e) {
            e.blockIndent();
          },
          multiSelectAction: "forEachLine",
          scrollIntoView: "selectionPart"
        },
        {
          name: "insertstring",
          description: "Insert string",
          exec: function(e, n) {
            e.insert(n);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "inserttext",
          description: "Insert text",
          exec: function(e, n) {
            e.insert(f.stringRepeat(n.text || "", n.times || 1));
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "splitline",
          description: "Split line",
          bindKey: s(null, "Ctrl-O"),
          exec: function(e) {
            e.splitLine();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "transposeletters",
          description: "Transpose letters",
          bindKey: s("Alt-Shift-X", "Ctrl-T"),
          exec: function(e) {
            e.transposeLetters();
          },
          multiSelectAction: function(e) {
            e.transposeSelections(1);
          },
          scrollIntoView: "cursor"
        },
        {
          name: "touppercase",
          description: "To uppercase",
          bindKey: s("Ctrl-U", "Ctrl-U"),
          exec: function(e) {
            e.toUpperCase();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "tolowercase",
          description: "To lowercase",
          bindKey: s("Ctrl-Shift-U", "Ctrl-Shift-U"),
          exec: function(e) {
            e.toLowerCase();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "autoindent",
          description: "Auto Indent",
          bindKey: s(null, null),
          exec: function(e) {
            e.autoIndent();
          },
          scrollIntoView: "animate"
        },
        {
          name: "expandtoline",
          description: "Expand to line",
          bindKey: s("Ctrl-Shift-L", "Command-Shift-L"),
          exec: function(e) {
            var n = e.selection.getRange();
            n.start.column = n.end.column = 0, n.end.row++, e.selection.setRange(n, !1);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "openlink",
          bindKey: s("Ctrl+F3", "F3"),
          exec: function(e) {
            e.openLink();
          }
        },
        {
          name: "joinlines",
          description: "Join lines",
          bindKey: s(null, null),
          exec: function(e) {
            for (var n = e.selection.isBackwards(), i = n ? e.selection.getSelectionLead() : e.selection.getSelectionAnchor(), r = n ? e.selection.getSelectionAnchor() : e.selection.getSelectionLead(), t = e.session.doc.getLine(i.row).length, o = e.session.doc.getTextRange(e.selection.getRange()), a = o.replace(/\n\s*/, " ").length, c = e.session.doc.getLine(i.row), u = i.row + 1; u <= r.row + 1; u++) {
              var w = f.stringTrimLeft(f.stringTrimRight(e.session.doc.getLine(u)));
              w.length !== 0 && (w = " " + w), c += w;
            }
            r.row + 1 < e.session.doc.getLength() - 1 && (c += e.session.doc.getNewLineCharacter()), e.clearSelection(), e.session.doc.replace(new p(i.row, 0, r.row + 2, 0), c), a > 0 ? (e.selection.moveCursorTo(i.row, i.column), e.selection.selectTo(i.row, i.column + a)) : (t = e.session.doc.getLine(i.row).length > t ? t + 1 : t, e.selection.moveCursorTo(i.row, t));
          },
          multiSelectAction: "forEach",
          readOnly: !0
        },
        {
          name: "invertSelection",
          description: "Invert selection",
          bindKey: s(null, null),
          exec: function(e) {
            var n = e.session.doc.getLength() - 1, i = e.session.doc.getLine(n).length, r = e.selection.rangeList.ranges, t = [];
            r.length < 1 && (r = [e.selection.getRange()]);
            for (var o = 0; o < r.length; o++)
              o == r.length - 1 && (r[o].end.row === n && r[o].end.column === i || t.push(new p(r[o].end.row, r[o].end.column, n, i))), o === 0 ? r[o].start.row === 0 && r[o].start.column === 0 || t.push(new p(0, 0, r[o].start.row, r[o].start.column)) : t.push(new p(r[o - 1].end.row, r[o - 1].end.column, r[o].start.row, r[o].start.column));
            e.exitMultiSelectMode(), e.clearSelection();
            for (var o = 0; o < t.length; o++)
              e.selection.addRange(t[o], !1);
          },
          readOnly: !0,
          scrollIntoView: "none"
        },
        {
          name: "addLineAfter",
          description: "Add new line after the current line",
          exec: function(e) {
            e.selection.clearSelection(), e.navigateLineEnd(), e.insert(`
`);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "addLineBefore",
          description: "Add new line before the current line",
          exec: function(e) {
            e.selection.clearSelection();
            var n = e.getCursorPosition();
            e.selection.moveTo(n.row - 1, Number.MAX_VALUE), e.insert(`
`), n.row === 0 && e.navigateUp();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "openCommandPallete",
          exec: function(e) {
            console.warn("This is an obsolete command. Please use `openCommandPalette` instead."), e.prompt({ $type: "commands" });
          },
          readOnly: !0
        },
        {
          name: "openCommandPalette",
          description: "Open command palette",
          bindKey: s("F1", "F1"),
          exec: function(e) {
            e.prompt({ $type: "commands" });
          },
          readOnly: !0
        },
        {
          name: "modeSelect",
          description: "Change language mode...",
          bindKey: s(null, null),
          exec: function(e) {
            e.prompt({ $type: "modes" });
          },
          readOnly: !0
        }
      ];
      for (var l = 1; l < 9; l++)
        S.commands.push({
          name: "foldToLevel" + l,
          description: "Fold To Level " + l,
          level: l,
          exec: function(e) {
            e.session.foldToLevel(this.level);
          },
          scrollIntoView: "center",
          readOnly: !0
        });
    }), ace.define("ace/keyboard/gutter_handler", ["require", "exports", "module", "ace/lib/keys", "ace/mouse/default_gutter_handler"], function(M, S, R) {
      var f = M("../lib/keys"), v = M("../mouse/default_gutter_handler").GutterTooltip, p = (
        /** @class */
        function() {
          function l(e) {
            this.editor = e, this.gutterLayer = e.renderer.$gutterLayer, this.element = e.renderer.$gutter, this.lines = e.renderer.$gutterLayer.$lines, this.activeRowIndex = null, this.activeLane = null, this.annotationTooltip = new v(this.editor);
          }
          return l.prototype.addListener = function() {
            this.element.addEventListener("keydown", this.$onGutterKeyDown.bind(this)), this.element.addEventListener("focusout", this.$blurGutter.bind(this)), this.editor.on("mousewheel", this.$blurGutter.bind(this));
          }, l.prototype.removeListener = function() {
            this.element.removeEventListener("keydown", this.$onGutterKeyDown.bind(this)), this.element.removeEventListener("focusout", this.$blurGutter.bind(this)), this.editor.off("mousewheel", this.$blurGutter.bind(this));
          }, l.prototype.$onGutterKeyDown = function(e) {
            if (this.annotationTooltip.isOpen) {
              e.preventDefault(), e.keyCode === f.escape && this.annotationTooltip.hideTooltip();
              return;
            }
            if (e.target === this.element) {
              if (e.keyCode != f.enter)
                return;
              e.preventDefault();
              var n = this.editor.getCursorPosition().row;
              this.editor.isRowVisible(n) || this.editor.scrollToLine(n, !0, !0), setTimeout(
                (function() {
                  var i = this.$rowToRowIndex(this.gutterLayer.$cursorCell.row), r = this.$findNearestFoldLaneWidget(i), t = this.$findNearestAnnotation(i);
                  if (!(r === null && t === null)) {
                    var o = this.$findClosestNumber(r, t, i);
                    if (o === r)
                      if (this.activeLane = "fold", this.activeRowIndex = r, this.$isCustomWidgetVisible(r)) {
                        this.$focusCustomWidget(this.activeRowIndex);
                        return;
                      } else {
                        this.$focusFoldWidget(this.activeRowIndex);
                        return;
                      }
                    else {
                      this.activeRowIndex = t, this.activeLane = "annotation", this.$focusAnnotation(this.activeRowIndex);
                      return;
                    }
                  }
                }).bind(this),
                10
              );
              return;
            }
            this.$handleGutterKeyboardInteraction(e), setTimeout((function() {
              this.editor._signal("gutterkeydown", new s(e, this));
            }).bind(this), 10);
          }, l.prototype.$handleGutterKeyboardInteraction = function(e) {
            if (e.keyCode === f.tab) {
              e.preventDefault();
              return;
            }
            if (e.keyCode === f.escape) {
              e.preventDefault(), this.$blurGutter(), this.element.focus(), this.lane = null;
              return;
            }
            if (e.keyCode === f.up) {
              switch (e.preventDefault(), this.activeLane) {
                case "fold":
                  this.$moveFoldWidgetUp();
                  break;
                case "annotation":
                  this.$moveAnnotationUp();
                  break;
              }
              return;
            }
            if (e.keyCode === f.down) {
              switch (e.preventDefault(), this.activeLane) {
                case "fold":
                  this.$moveFoldWidgetDown();
                  break;
                case "annotation":
                  this.$moveAnnotationDown();
                  break;
              }
              return;
            }
            if (e.keyCode === f.left) {
              e.preventDefault(), this.$switchLane("annotation");
              return;
            }
            if (e.keyCode === f.right) {
              e.preventDefault(), this.$switchLane("fold");
              return;
            }
            if (e.keyCode === f.enter || e.keyCode === f.space) {
              switch (e.preventDefault(), this.activeLane) {
                case "fold":
                  var n = this.$rowIndexToRow(this.activeRowIndex), i = this.editor.session.$gutterCustomWidgets[n];
                  if (i)
                    i.callbacks && i.callbacks.onClick && i.callbacks.onClick(e, n);
                  else if (this.gutterLayer.session.foldWidgets[n] === "start") {
                    this.editor.session.onFoldWidgetClick(this.$rowIndexToRow(this.activeRowIndex), e), setTimeout(
                      (function() {
                        this.$rowIndexToRow(this.activeRowIndex) !== n && (this.$blurFoldWidget(this.activeRowIndex), this.activeRowIndex = this.$rowToRowIndex(n), this.$focusFoldWidget(this.activeRowIndex));
                      }).bind(this),
                      10
                    );
                    break;
                  } else if (this.gutterLayer.session.foldWidgets[this.$rowIndexToRow(this.activeRowIndex)] === "end")
                    break;
                  return;
                case "annotation":
                  var r = this.lines.cells[this.activeRowIndex].element.childNodes[2], t = r.getBoundingClientRect(), o = this.annotationTooltip.getElement().style;
                  o.left = t.right + "px", o.top = t.bottom + "px", this.annotationTooltip.showTooltip(this.$rowIndexToRow(this.activeRowIndex));
                  break;
              }
              return;
            }
          }, l.prototype.$blurGutter = function() {
            if (this.activeRowIndex !== null)
              switch (this.activeLane) {
                case "fold":
                  this.$blurFoldWidget(this.activeRowIndex), this.$blurCustomWidget(this.activeRowIndex);
                  break;
                case "annotation":
                  this.$blurAnnotation(this.activeRowIndex);
                  break;
              }
            this.annotationTooltip.isOpen && this.annotationTooltip.hideTooltip();
          }, l.prototype.$isFoldWidgetVisible = function(e) {
            var n = this.editor.isRowFullyVisible(this.$rowIndexToRow(e)), i = this.$getFoldWidget(e).style.display !== "none";
            return n && i;
          }, l.prototype.$isCustomWidgetVisible = function(e) {
            var n = this.editor.isRowFullyVisible(this.$rowIndexToRow(e)), i = !!this.$getCustomWidget(e);
            return n && i;
          }, l.prototype.$isAnnotationVisible = function(e) {
            var n = this.editor.isRowFullyVisible(this.$rowIndexToRow(e)), i = this.$getAnnotation(e).style.display !== "none";
            return n && i;
          }, l.prototype.$getFoldWidget = function(e) {
            var n = this.lines.get(e), i = n.element;
            return i.childNodes[1];
          }, l.prototype.$getCustomWidget = function(e) {
            var n = this.lines.get(e), i = n.element;
            return i.childNodes[3];
          }, l.prototype.$getAnnotation = function(e) {
            var n = this.lines.get(e), i = n.element;
            return i.childNodes[2];
          }, l.prototype.$findNearestFoldLaneWidget = function(e) {
            if (this.$isCustomWidgetVisible(e) || this.$isFoldWidgetVisible(e))
              return e;
            for (var n = 0; e - n > 0 || e + n < this.lines.getLength() - 1; ) {
              if (n++, e - n >= 0 && this.$isCustomWidgetVisible(e - n))
                return e - n;
              if (e + n <= this.lines.getLength() - 1 && this.$isCustomWidgetVisible(e + n))
                return e + n;
              if (e - n >= 0 && this.$isFoldWidgetVisible(e - n))
                return e - n;
              if (e + n <= this.lines.getLength() - 1 && this.$isFoldWidgetVisible(e + n))
                return e + n;
            }
            return null;
          }, l.prototype.$findNearestAnnotation = function(e) {
            if (this.$isAnnotationVisible(e))
              return e;
            for (var n = 0; e - n > 0 || e + n < this.lines.getLength() - 1; ) {
              if (n++, e - n >= 0 && this.$isAnnotationVisible(e - n))
                return e - n;
              if (e + n <= this.lines.getLength() - 1 && this.$isAnnotationVisible(e + n))
                return e + n;
            }
            return null;
          }, l.prototype.$focusFoldWidget = function(e) {
            if (e != null) {
              var n = this.$getFoldWidget(e);
              n.classList.add(this.editor.renderer.keyboardFocusClassName), n.focus();
            }
          }, l.prototype.$focusCustomWidget = function(e) {
            if (e != null) {
              var n = this.$getCustomWidget(e);
              n && (n.classList.add(this.editor.renderer.keyboardFocusClassName), n.focus());
            }
          }, l.prototype.$focusAnnotation = function(e) {
            if (e != null) {
              var n = this.$getAnnotation(e);
              n.classList.add(this.editor.renderer.keyboardFocusClassName), n.focus();
            }
          }, l.prototype.$blurFoldWidget = function(e) {
            var n = this.$getFoldWidget(e);
            n.classList.remove(this.editor.renderer.keyboardFocusClassName), n.blur();
          }, l.prototype.$blurCustomWidget = function(e) {
            var n = this.$getCustomWidget(e);
            n && (n.classList.remove(this.editor.renderer.keyboardFocusClassName), n.blur());
          }, l.prototype.$blurAnnotation = function(e) {
            var n = this.$getAnnotation(e);
            n.classList.remove(this.editor.renderer.keyboardFocusClassName), n.blur();
          }, l.prototype.$moveFoldWidgetUp = function() {
            for (var e = this.activeRowIndex; e > 0; )
              if (e--, this.$isFoldWidgetVisible(e) || this.$isCustomWidgetVisible(e)) {
                this.$blurFoldWidget(this.activeRowIndex), this.$blurCustomWidget(this.activeRowIndex), this.activeRowIndex = e, this.$isFoldWidgetVisible(e) ? this.$focusFoldWidget(this.activeRowIndex) : this.$focusCustomWidget(this.activeRowIndex);
                return;
              }
          }, l.prototype.$moveFoldWidgetDown = function() {
            for (var e = this.activeRowIndex; e < this.lines.getLength() - 1; )
              if (e++, this.$isFoldWidgetVisible(e) || this.$isCustomWidgetVisible(e)) {
                this.$blurFoldWidget(this.activeRowIndex), this.$blurCustomWidget(this.activeRowIndex), this.activeRowIndex = e, this.$isFoldWidgetVisible(e) ? this.$focusFoldWidget(this.activeRowIndex) : this.$focusCustomWidget(this.activeRowIndex);
                return;
              }
          }, l.prototype.$moveAnnotationUp = function() {
            for (var e = this.activeRowIndex; e > 0; )
              if (e--, this.$isAnnotationVisible(e)) {
                this.$blurAnnotation(this.activeRowIndex), this.activeRowIndex = e, this.$focusAnnotation(this.activeRowIndex);
                return;
              }
          }, l.prototype.$moveAnnotationDown = function() {
            for (var e = this.activeRowIndex; e < this.lines.getLength() - 1; )
              if (e++, this.$isAnnotationVisible(e)) {
                this.$blurAnnotation(this.activeRowIndex), this.activeRowIndex = e, this.$focusAnnotation(this.activeRowIndex);
                return;
              }
          }, l.prototype.$findClosestNumber = function(e, n, i) {
            return e === null ? n : n === null || Math.abs(i - e) <= Math.abs(i - n) ? e : n;
          }, l.prototype.$switchLane = function(e) {
            switch (e) {
              case "annotation":
                if (this.activeLane === "annotation")
                  break;
                var n = this.$findNearestAnnotation(this.activeRowIndex);
                if (n == null)
                  break;
                this.activeLane = "annotation", this.$blurFoldWidget(this.activeRowIndex), this.$blurCustomWidget(this.activeRowIndex), this.activeRowIndex = n, this.$focusAnnotation(this.activeRowIndex);
                break;
              case "fold":
                if (this.activeLane === "fold")
                  break;
                var i = this.$findNearestFoldLaneWidget(this.activeRowIndex);
                if (i === null)
                  break;
                this.activeLane = "fold", this.$blurAnnotation(this.activeRowIndex), this.activeRowIndex = i, this.$isCustomWidgetVisible(i) ? this.$focusCustomWidget(this.activeRowIndex) : this.$focusFoldWidget(this.activeRowIndex);
                break;
            }
          }, l.prototype.$rowIndexToRow = function(e) {
            var n = this.lines.get(e);
            return n ? n.row : null;
          }, l.prototype.$rowToRowIndex = function(e) {
            for (var n = 0; n < this.lines.getLength(); n++) {
              var i = this.lines.get(n);
              if (i.row == e)
                return n;
            }
            return null;
          }, l;
        }()
      );
      S.GutterKeyboardHandler = p;
      var s = (
        /** @class */
        function() {
          function l(e, n) {
            this.gutterKeyboardHandler = n, this.domEvent = e;
          }
          return l.prototype.getKey = function() {
            return f.keyCodeToString(this.domEvent.keyCode);
          }, l.prototype.getRow = function() {
            return this.gutterKeyboardHandler.$rowIndexToRow(this.gutterKeyboardHandler.activeRowIndex);
          }, l.prototype.isInAnnotationLane = function() {
            return this.gutterKeyboardHandler.activeLane === "annotation";
          }, l.prototype.isInFoldLane = function() {
            return this.gutterKeyboardHandler.activeLane === "fold";
          }, l;
        }()
      );
      S.GutterKeyboardEvent = s;
    }), ace.define("ace/editor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/keyboard/textinput", "ace/mouse/mouse_handler", "ace/mouse/fold_handler", "ace/keyboard/keybinding", "ace/edit_session", "ace/search", "ace/range", "ace/lib/event_emitter", "ace/commands/command_manager", "ace/commands/default_commands", "ace/config", "ace/token_iterator", "ace/keyboard/gutter_handler", "ace/config", "ace/clipboard", "ace/lib/keys", "ace/lib/event", "ace/tooltip"], function(M, S, R) {
      var f = this && this.__values || function(g) {
        var d = typeof Symbol == "function" && Symbol.iterator, b = d && g[d], k = 0;
        if (b) return b.call(g);
        if (g && typeof g.length == "number") return {
          next: function() {
            return g && k >= g.length && (g = void 0), { value: g && g[k++], done: !g };
          }
        };
        throw new TypeError(d ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }, v = M("./lib/oop"), p = M("./lib/dom"), s = M("./lib/lang"), l = M("./lib/useragent"), e = M("./keyboard/textinput").TextInput, n = M("./mouse/mouse_handler").MouseHandler, i = M("./mouse/fold_handler").FoldHandler, r = M("./keyboard/keybinding").KeyBinding, t = M("./edit_session").EditSession, o = M("./search").Search, a = M("./range").Range, c = M("./lib/event_emitter").EventEmitter, u = M("./commands/command_manager").CommandManager, w = M("./commands/default_commands").commands, y = M("./config"), m = M("./token_iterator").TokenIterator, h = M("./keyboard/gutter_handler").GutterKeyboardHandler, $ = M("./config").nls, _ = M("./clipboard"), L = M("./lib/keys"), x = M("./lib/event"), D = M("./tooltip").HoverTooltip, A = (
        /** @class */
        function() {
          function g(d, b, k) {
            this.id = "editor" + ++g.$uid, this.session, this.$toDestroy = [];
            var I = d.getContainerElement();
            this.container = I, this.renderer = d, this.commands = new u(l.isMac ? "mac" : "win", w), typeof document == "object" && (this.textInput = new e(d.getTextAreaContainer(), this), this.renderer.textarea = this.textInput.getElement(), this.$mouseHandler = new n(this), new i(this)), this.keyBinding = new r(this), this.$search = new o().set({
              wrap: !0
            }), this.$historyTracker = this.$historyTracker.bind(this), this.commands.on("exec", this.$historyTracker), this.$initOperationListeners(), this._$emitInputEvent = s.delayedCall((function() {
              this._signal("input", {}), this.session && !this.session.destroyed && this.session.bgTokenizer.scheduleStart();
            }).bind(this)), this.on("change", function(T, O) {
              O._$emitInputEvent.schedule(31);
            }), this.setSession(b || k && k.session || new t("")), y.resetOptions(this), k && this.setOptions(k), y._signal("editor", this);
          }
          return g.prototype.$initOperationListeners = function() {
            this.commands.on("exec", this.startOperation.bind(this), !0), this.commands.on("afterExec", this.endOperation.bind(this), !0);
          }, g.prototype.startOperation = function(d) {
            this.session.startOperation(d);
          }, g.prototype.endOperation = function(d) {
            this.session.endOperation(d);
          }, g.prototype.onStartOperation = function(d) {
            this.curOp = this.session.curOp, this.curOp.scrollTop = this.renderer.scrollTop, this.prevOp = this.session.prevOp, d || (this.previousCommand = null);
          }, g.prototype.onEndOperation = function(d) {
            if (this.curOp && this.session) {
              if (d && d.returnValue === !1) {
                this.curOp = null;
                return;
              }
              if (this._signal("beforeEndOperation"), !this.curOp)
                return;
              var b = this.curOp.command, k = b && b.scrollIntoView;
              if (k) {
                switch (k) {
                  case "center-animate":
                    k = "animate";
                  case "center":
                    this.renderer.scrollCursorIntoView(null, 0.5);
                    break;
                  case "animate":
                  case "cursor":
                    this.renderer.scrollCursorIntoView();
                    break;
                  case "selectionPart":
                    var I = this.selection.getRange(), T = this.renderer.layerConfig;
                    (I.start.row >= T.lastRow || I.end.row <= T.firstRow) && this.renderer.scrollSelectionIntoView(this.selection.anchor, this.selection.lead);
                    break;
                }
                k == "animate" && this.renderer.animateScrolling(this.curOp.scrollTop);
              }
              this.$lastSel = this.session.selection.toJSON(), this.prevOp = this.curOp, this.curOp = null;
            }
          }, g.prototype.$historyTracker = function(d) {
            if (this.$mergeUndoDeltas) {
              var b = this.prevOp, k = this.$mergeableCommands, I = b.command && d.command.name == b.command.name;
              if (d.command.name == "insertstring") {
                var T = d.args;
                this.mergeNextCommand === void 0 && (this.mergeNextCommand = !0), I = I && this.mergeNextCommand && (!/\s/.test(T) || /\s/.test(b.args)), this.mergeNextCommand = !0;
              } else
                I = I && k.indexOf(d.command.name) !== -1;
              this.$mergeUndoDeltas != "always" && Date.now() - this.sequenceStartTime > 2e3 && (I = !1), I ? this.session.mergeUndoDeltas = !0 : k.indexOf(d.command.name) !== -1 && (this.sequenceStartTime = Date.now());
            }
          }, g.prototype.setKeyboardHandler = function(d, b) {
            if (d && typeof d == "string" && d != "ace") {
              this.$keybindingId = d;
              var k = this;
              y.loadModule(["keybinding", d], function(I) {
                k.$keybindingId == d && k.keyBinding.setKeyboardHandler(I && I.handler), b && b();
              });
            } else
              this.$keybindingId = null, this.keyBinding.setKeyboardHandler(d), b && b();
          }, g.prototype.getKeyboardHandler = function() {
            return this.keyBinding.getKeyboardHandler();
          }, g.prototype.setSession = function(d) {
            if (this.session != d) {
              this.curOp && this.endOperation(), this.curOp = {};
              var b = this.session;
              if (b) {
                this.session.off("change", this.$onDocumentChange), this.session.off("changeMode", this.$onChangeMode), this.session.off("tokenizerUpdate", this.$onTokenizerUpdate), this.session.off("changeTabSize", this.$onChangeTabSize), this.session.off("changeWrapLimit", this.$onChangeWrapLimit), this.session.off("changeWrapMode", this.$onChangeWrapMode), this.session.off("changeFold", this.$onChangeFold), this.session.off("changeFrontMarker", this.$onChangeFrontMarker), this.session.off("changeBackMarker", this.$onChangeBackMarker), this.session.off("changeBreakpoint", this.$onChangeBreakpoint), this.session.off("changeAnnotation", this.$onChangeAnnotation), this.session.off("changeOverwrite", this.$onCursorChange), this.session.off("changeScrollTop", this.$onScrollTopChange), this.session.off("changeScrollLeft", this.$onScrollLeftChange), this.session.off("startOperation", this.$onStartOperation), this.session.off("endOperation", this.$onEndOperation);
                var k = this.session.getSelection();
                k.off("changeCursor", this.$onCursorChange), k.off("changeSelection", this.$onSelectionChange);
              }
              this.session = d, d ? (this.$onDocumentChange = this.onDocumentChange.bind(this), d.on("change", this.$onDocumentChange), this.renderer.setSession(d), this.$onChangeMode = this.onChangeMode.bind(this), d.on("changeMode", this.$onChangeMode), this.$onTokenizerUpdate = this.onTokenizerUpdate.bind(this), d.on("tokenizerUpdate", this.$onTokenizerUpdate), this.$onChangeTabSize = this.renderer.onChangeTabSize.bind(this.renderer), d.on("changeTabSize", this.$onChangeTabSize), this.$onChangeWrapLimit = this.onChangeWrapLimit.bind(this), d.on("changeWrapLimit", this.$onChangeWrapLimit), this.$onChangeWrapMode = this.onChangeWrapMode.bind(this), d.on("changeWrapMode", this.$onChangeWrapMode), this.$onChangeFold = this.onChangeFold.bind(this), d.on("changeFold", this.$onChangeFold), this.$onChangeFrontMarker = this.onChangeFrontMarker.bind(this), this.session.on("changeFrontMarker", this.$onChangeFrontMarker), this.$onChangeBackMarker = this.onChangeBackMarker.bind(this), this.session.on("changeBackMarker", this.$onChangeBackMarker), this.$onChangeBreakpoint = this.onChangeBreakpoint.bind(this), this.session.on("changeBreakpoint", this.$onChangeBreakpoint), this.$onChangeAnnotation = this.onChangeAnnotation.bind(this), this.session.on("changeAnnotation", this.$onChangeAnnotation), this.$onCursorChange = this.onCursorChange.bind(this), this.session.on("changeOverwrite", this.$onCursorChange), this.$onScrollTopChange = this.onScrollTopChange.bind(this), this.session.on("changeScrollTop", this.$onScrollTopChange), this.$onScrollLeftChange = this.onScrollLeftChange.bind(this), this.session.on("changeScrollLeft", this.$onScrollLeftChange), this.selection = d.getSelection(), this.selection.on("changeCursor", this.$onCursorChange), this.$onSelectionChange = this.onSelectionChange.bind(this), this.selection.on("changeSelection", this.$onSelectionChange), this.$onStartOperation = this.onStartOperation.bind(this), this.session.on("startOperation", this.$onStartOperation), this.$onEndOperation = this.onEndOperation.bind(this), this.session.on("endOperation", this.$onEndOperation), this.onChangeMode(), this.onCursorChange(), this.onScrollTopChange(), this.onScrollLeftChange(), this.onSelectionChange(), this.onChangeFrontMarker(), this.onChangeBackMarker(), this.onChangeBreakpoint(), this.onChangeAnnotation(), this.session.getUseWrapMode() && this.renderer.adjustWrapLimit(), this.renderer.updateFull()) : (this.selection = null, this.renderer.setSession(d)), this._signal("changeSession", {
                session: d,
                oldSession: b
              }), this.curOp = null, b && b._signal("changeEditor", { oldEditor: this }), b && (b.$editor = null), d && d._signal("changeEditor", { editor: this }), d && (d.$editor = this), d && !d.destroyed && d.bgTokenizer.scheduleStart();
            }
          }, g.prototype.getSession = function() {
            return this.session;
          }, g.prototype.setValue = function(d, b) {
            return this.session.doc.setValue(d), b ? b == 1 ? this.navigateFileEnd() : b == -1 && this.navigateFileStart() : this.selectAll(), d;
          }, g.prototype.getValue = function() {
            return this.session.getValue();
          }, g.prototype.getSelection = function() {
            return this.selection;
          }, g.prototype.resize = function(d) {
            this.renderer.onResize(d);
          }, g.prototype.setTheme = function(d, b) {
            this.renderer.setTheme(d, b);
          }, g.prototype.getTheme = function() {
            return this.renderer.getTheme();
          }, g.prototype.setStyle = function(d, b) {
            this.renderer.setStyle(d, b);
          }, g.prototype.unsetStyle = function(d) {
            this.renderer.unsetStyle(d);
          }, g.prototype.getFontSize = function() {
            return this.getOption("fontSize") || p.computedStyle(this.container).fontSize;
          }, g.prototype.setFontSize = function(d) {
            this.setOption("fontSize", d);
          }, g.prototype.$highlightBrackets = function() {
            if (!this.$highlightPending) {
              var d = this;
              this.$highlightPending = !0, setTimeout(function() {
                d.$highlightPending = !1;
                var b = d.session;
                if (!(!b || b.destroyed)) {
                  b.$bracketHighlight && (b.$bracketHighlight.markerIds.forEach(function(F) {
                    b.removeMarker(F);
                  }), b.$bracketHighlight = null);
                  var k = d.getCursorPosition(), I = d.getKeyboardHandler(), T = I && I.$getDirectionForHighlight && I.$getDirectionForHighlight(d), O = b.getMatchingBracketRanges(k, T);
                  if (!O) {
                    var W = new m(b, k.row, k.column), H = W.getCurrentToken();
                    if (H && /\b(?:tag-open|tag-name)/.test(H.type)) {
                      var B = b.getMatchingTags(k);
                      B && (O = [
                        B.openTagName.isEmpty() ? B.openTag : B.openTagName,
                        B.closeTagName.isEmpty() ? B.closeTag : B.closeTagName
                      ]);
                    }
                  }
                  if (!O && b.$mode.getMatching && (O = b.$mode.getMatching(d.session)), !O) {
                    d.getHighlightIndentGuides() && d.renderer.$textLayer.$highlightIndentGuide();
                    return;
                  }
                  var P = "ace_bracket";
                  Array.isArray(O) ? O.length == 1 && (P = "ace_error_bracket") : O = [O], O.length == 2 && (a.comparePoints(O[0].end, O[1].start) == 0 ? O = [a.fromPoints(O[0].start, O[1].end)] : a.comparePoints(O[0].start, O[1].end) == 0 && (O = [a.fromPoints(O[1].start, O[0].end)])), b.$bracketHighlight = {
                    ranges: O,
                    markerIds: O.map(function(F) {
                      return b.addMarker(F, P, "text");
                    })
                  }, d.getHighlightIndentGuides() && d.renderer.$textLayer.$highlightIndentGuide();
                }
              }, 50);
            }
          }, g.prototype.focus = function() {
            this.textInput.focus();
          }, g.prototype.isFocused = function() {
            return this.textInput.isFocused();
          }, g.prototype.blur = function() {
            this.textInput.blur();
          }, g.prototype.onFocus = function(d) {
            this.$isFocused || (this.$isFocused = !0, this.renderer.showCursor(), this.renderer.visualizeFocus(), this._emit("focus", d));
          }, g.prototype.onBlur = function(d) {
            this.$isFocused && (this.$isFocused = !1, this.renderer.hideCursor(), this.renderer.visualizeBlur(), this._emit("blur", d));
          }, g.prototype.$cursorChange = function() {
            this.renderer.updateCursor(), this.$highlightBrackets(), this.$updateHighlightActiveLine();
          }, g.prototype.onDocumentChange = function(d) {
            var b = this.session.$useWrapMode, k = d.start.row == d.end.row ? d.end.row : 1 / 0;
            this.renderer.updateLines(d.start.row, k, b), this._signal("change", d), this.$cursorChange();
          }, g.prototype.onTokenizerUpdate = function(d) {
            var b = d.data;
            this.renderer.updateLines(b.first, b.last);
          }, g.prototype.onScrollTopChange = function() {
            this.renderer.scrollToY(this.session.getScrollTop());
          }, g.prototype.onScrollLeftChange = function() {
            this.renderer.scrollToX(this.session.getScrollLeft());
          }, g.prototype.onCursorChange = function() {
            this.$cursorChange(), this._signal("changeSelection");
          }, g.prototype.$updateHighlightActiveLine = function() {
            var d = this.getSession(), b;
            if (this.$highlightActiveLine && ((this.$selectionStyle != "line" || !this.selection.isMultiLine()) && (b = this.getCursorPosition()), this.renderer.theme && this.renderer.theme.$selectionColorConflict && !this.selection.isEmpty() && (b = !1), this.renderer.$maxLines && this.session.getLength() === 1 && !(this.renderer.$minLines > 1) && (b = !1)), d.$highlightLineMarker && !b)
              d.removeMarker(d.$highlightLineMarker.id), d.$highlightLineMarker = null;
            else if (!d.$highlightLineMarker && b) {
              var k = new a(b.row, b.column, b.row, 1 / 0);
              k.id = d.addMarker(k, "ace_active-line", "screenLine"), d.$highlightLineMarker = k;
            } else b && (d.$highlightLineMarker.start.row = b.row, d.$highlightLineMarker.end.row = b.row, d.$highlightLineMarker.start.column = b.column, d._signal("changeBackMarker"));
          }, g.prototype.onSelectionChange = function(d) {
            var b = this.session;
            if (b.$selectionMarker && b.removeMarker(b.$selectionMarker), b.$selectionMarker = null, this.selection.isEmpty())
              this.$updateHighlightActiveLine();
            else {
              var k = this.selection.getRange(), I = this.getSelectionStyle();
              b.$selectionMarker = b.addMarker(k, "ace_selection", I);
            }
            var T = this.$highlightSelectedWord && this.$getSelectionHighLightRegexp();
            this.session.highlight(T), this._signal("changeSelection");
          }, g.prototype.$getSelectionHighLightRegexp = function() {
            var d = this.session, b = this.getSelectionRange();
            if (!(b.isEmpty() || b.isMultiLine())) {
              var k = b.start.column, I = b.end.column, T = d.getLine(b.start.row), O = T.substring(k, I);
              if (!(O.length > 5e3 || !/[\w\d]/.test(O))) {
                var W = this.$search.$assembleRegExp({
                  wholeWord: !0,
                  caseSensitive: !0,
                  needle: O
                }), H = T.substring(k - 1, I + 1);
                if (W.test(H))
                  return W;
              }
            }
          }, g.prototype.onChangeFrontMarker = function() {
            this.renderer.updateFrontMarkers();
          }, g.prototype.onChangeBackMarker = function() {
            this.renderer.updateBackMarkers();
          }, g.prototype.onChangeBreakpoint = function() {
            this.renderer.updateBreakpoints();
          }, g.prototype.onChangeAnnotation = function() {
            this.renderer.setAnnotations(this.session.getAnnotations());
          }, g.prototype.onChangeMode = function(d) {
            this.renderer.updateText(), this._emit("changeMode", d);
          }, g.prototype.onChangeWrapLimit = function() {
            this.renderer.updateFull();
          }, g.prototype.onChangeWrapMode = function() {
            this.renderer.onResize(!0);
          }, g.prototype.onChangeFold = function() {
            this.$updateHighlightActiveLine(), this.renderer.updateFull();
          }, g.prototype.getSelectedText = function() {
            return this.session.getTextRange(this.getSelectionRange());
          }, g.prototype.getCopyText = function() {
            var d = this.getSelectedText(), b = this.session.doc.getNewLineCharacter(), k = !1;
            if (!d && this.$copyWithEmptySelection) {
              k = !0;
              for (var I = this.selection.getAllRanges(), T = 0; T < I.length; T++) {
                var O = I[T];
                T && I[T - 1].start.row == O.start.row || (d += this.session.getLine(O.start.row) + b);
              }
            }
            var W = { text: d };
            return this._signal("copy", W), _.lineMode = k ? W.text : !1, W.text;
          }, g.prototype.onCopy = function() {
            this.commands.exec("copy", this);
          }, g.prototype.onCut = function() {
            this.commands.exec("cut", this);
          }, g.prototype.onPaste = function(d, b) {
            var k = { text: d, event: b };
            this.commands.exec("paste", this, k);
          }, g.prototype.$handlePaste = function(d) {
            typeof d == "string" && (d = { text: d }), this._signal("paste", d);
            var b = d.text, k = b === _.lineMode, I = this.session;
            if (!this.inMultiSelectMode || this.inVirtualSelectionMode)
              k ? I.insert({ row: this.selection.lead.row, column: 0 }, b) : this.insert(b);
            else if (k)
              this.selection.rangeList.ranges.forEach(function(P) {
                I.insert({ row: P.start.row, column: 0 }, b);
              });
            else {
              var T = b.split(/\r\n|\r|\n/), O = this.selection.rangeList.ranges, W = T.length == 2 && (!T[0] || !T[1]);
              if (T.length != O.length || W)
                return this.commands.exec("insertstring", this, b);
              for (var H = O.length; H--; ) {
                var B = O[H];
                B.isEmpty() || I.remove(B), I.insert(B.start, T[H]);
              }
            }
          }, g.prototype.execCommand = function(d, b) {
            return this.commands.exec(d, this, b);
          }, g.prototype.insert = function(d, b) {
            var k = this.session, I = k.getMode(), T = this.getCursorPosition();
            if (this.getBehavioursEnabled() && !b) {
              var O = I.transformAction(k.getState(T.row), "insertion", this, k, d);
              O && (d !== O.text && (this.inVirtualSelectionMode || (this.session.mergeUndoDeltas = !1, this.mergeNextCommand = !1)), d = O.text);
            }
            if (d == "	" && (d = this.session.getTabString()), this.selection.isEmpty()) {
              if (this.session.getOverwrite() && d.indexOf(`
`) == -1) {
                var W = a.fromPoints(T, T);
                W.end.column += d.length, this.session.remove(W);
              }
            } else {
              var W = this.getSelectionRange();
              T = this.session.remove(W), this.clearSelection();
            }
            if (d == `
` || d == `\r
`) {
              var F = k.getLine(T.row);
              if (T.column > F.search(/\S|$/)) {
                var H = F.substr(T.column).search(/\S|$/);
                k.doc.removeInLine(T.row, T.column, T.column + H);
              }
            }
            this.clearSelection();
            var B = T.column, P = k.getState(T.row), F = k.getLine(T.row), z = I.checkOutdent(P, F, d);
            if (k.insert(T, d), O && O.selection && (O.selection.length == 2 ? this.selection.setSelectionRange(new a(T.row, B + O.selection[0], T.row, B + O.selection[1])) : this.selection.setSelectionRange(new a(T.row + O.selection[0], O.selection[1], T.row + O.selection[2], O.selection[3]))), this.$enableAutoIndent) {
              if (k.getDocument().isNewLine(d)) {
                var U = I.getNextLineIndent(P, F.slice(0, T.column), k.getTabString());
                k.insert({ row: T.row + 1, column: 0 }, U);
              }
              z && I.autoOutdent(P, k, T.row);
            }
          }, g.prototype.autoIndent = function() {
            for (var d = this.session, b = d.getMode(), k = this.selection.isEmpty() ? [new a(0, 0, d.doc.getLength() - 1, 0)] : this.selection.getAllRanges(), I = "", T = "", O = "", W = d.getTabString(), H = 0; H < k.length; H++)
              for (var B = k[H].start.row, P = k[H].end.row, F = B; F <= P; F++) {
                F > 0 && (I = d.getState(F - 1), T = d.getLine(F - 1), O = b.getNextLineIndent(I, T, W));
                var z = d.getLine(F), U = b.$getIndent(z);
                if (O !== U) {
                  if (U.length > 0) {
                    var j = new a(F, 0, F, U.length);
                    d.remove(j);
                  }
                  O.length > 0 && d.insert({ row: F, column: 0 }, O);
                }
                b.autoOutdent(I, d, F);
              }
          }, g.prototype.onTextInput = function(d, b) {
            if (!b)
              return this.keyBinding.onTextInput(d);
            this.startOperation({ command: { name: "insertstring" } });
            var k = this.applyComposition.bind(this, d, b);
            this.selection.rangeCount ? this.forEachSelection(k) : k(), this.endOperation();
          }, g.prototype.applyComposition = function(d, b) {
            if (b.extendLeft || b.extendRight) {
              var k = this.selection.getRange();
              k.start.column -= b.extendLeft, k.end.column += b.extendRight, k.start.column < 0 && (k.start.row--, k.start.column += this.session.getLine(k.start.row).length + 1), this.selection.setRange(k), !d && !k.isEmpty() && this.remove();
            }
            if ((d || !this.selection.isEmpty()) && this.insert(d, !0), b.restoreStart || b.restoreEnd) {
              var k = this.selection.getRange();
              k.start.column -= b.restoreStart, k.end.column -= b.restoreEnd, this.selection.setRange(k);
            }
          }, g.prototype.onCommandKey = function(d, b, k) {
            return this.keyBinding.onCommandKey(d, b, k);
          }, g.prototype.setOverwrite = function(d) {
            this.session.setOverwrite(d);
          }, g.prototype.getOverwrite = function() {
            return this.session.getOverwrite();
          }, g.prototype.toggleOverwrite = function() {
            this.session.toggleOverwrite();
          }, g.prototype.setScrollSpeed = function(d) {
            this.setOption("scrollSpeed", d);
          }, g.prototype.getScrollSpeed = function() {
            return this.getOption("scrollSpeed");
          }, g.prototype.setDragDelay = function(d) {
            this.setOption("dragDelay", d);
          }, g.prototype.getDragDelay = function() {
            return this.getOption("dragDelay");
          }, g.prototype.setSelectionStyle = function(d) {
            this.setOption("selectionStyle", d);
          }, g.prototype.getSelectionStyle = function() {
            return this.getOption("selectionStyle");
          }, g.prototype.setHighlightActiveLine = function(d) {
            this.setOption("highlightActiveLine", d);
          }, g.prototype.getHighlightActiveLine = function() {
            return this.getOption("highlightActiveLine");
          }, g.prototype.setHighlightGutterLine = function(d) {
            this.setOption("highlightGutterLine", d);
          }, g.prototype.getHighlightGutterLine = function() {
            return this.getOption("highlightGutterLine");
          }, g.prototype.setHighlightSelectedWord = function(d) {
            this.setOption("highlightSelectedWord", d);
          }, g.prototype.getHighlightSelectedWord = function() {
            return this.$highlightSelectedWord;
          }, g.prototype.setAnimatedScroll = function(d) {
            this.renderer.setAnimatedScroll(d);
          }, g.prototype.getAnimatedScroll = function() {
            return this.renderer.getAnimatedScroll();
          }, g.prototype.setShowInvisibles = function(d) {
            this.renderer.setShowInvisibles(d);
          }, g.prototype.getShowInvisibles = function() {
            return this.renderer.getShowInvisibles();
          }, g.prototype.setDisplayIndentGuides = function(d) {
            this.renderer.setDisplayIndentGuides(d);
          }, g.prototype.getDisplayIndentGuides = function() {
            return this.renderer.getDisplayIndentGuides();
          }, g.prototype.setHighlightIndentGuides = function(d) {
            this.renderer.setHighlightIndentGuides(d);
          }, g.prototype.getHighlightIndentGuides = function() {
            return this.renderer.getHighlightIndentGuides();
          }, g.prototype.setShowPrintMargin = function(d) {
            this.renderer.setShowPrintMargin(d);
          }, g.prototype.getShowPrintMargin = function() {
            return this.renderer.getShowPrintMargin();
          }, g.prototype.setPrintMarginColumn = function(d) {
            this.renderer.setPrintMarginColumn(d);
          }, g.prototype.getPrintMarginColumn = function() {
            return this.renderer.getPrintMarginColumn();
          }, g.prototype.setReadOnly = function(d) {
            this.setOption("readOnly", d);
          }, g.prototype.getReadOnly = function() {
            return this.getOption("readOnly");
          }, g.prototype.setBehavioursEnabled = function(d) {
            this.setOption("behavioursEnabled", d);
          }, g.prototype.getBehavioursEnabled = function() {
            return this.getOption("behavioursEnabled");
          }, g.prototype.setWrapBehavioursEnabled = function(d) {
            this.setOption("wrapBehavioursEnabled", d);
          }, g.prototype.getWrapBehavioursEnabled = function() {
            return this.getOption("wrapBehavioursEnabled");
          }, g.prototype.setShowFoldWidgets = function(d) {
            this.setOption("showFoldWidgets", d);
          }, g.prototype.getShowFoldWidgets = function() {
            return this.getOption("showFoldWidgets");
          }, g.prototype.setFadeFoldWidgets = function(d) {
            this.setOption("fadeFoldWidgets", d);
          }, g.prototype.getFadeFoldWidgets = function() {
            return this.getOption("fadeFoldWidgets");
          }, g.prototype.remove = function(d) {
            this.selection.isEmpty() && (d == "left" ? this.selection.selectLeft() : this.selection.selectRight());
            var b = this.getSelectionRange();
            if (this.getBehavioursEnabled()) {
              var k = this.session, I = k.getState(b.start.row), T = k.getMode().transformAction(I, "deletion", this, k, b);
              if (b.end.column === 0) {
                var O = k.getTextRange(b);
                if (O[O.length - 1] == `
`) {
                  var W = k.getLine(b.end.row);
                  /^\s+$/.test(W) && (b.end.column = W.length);
                }
              }
              T && (b = T);
            }
            this.session.remove(b), this.clearSelection();
          }, g.prototype.removeWordRight = function() {
            this.selection.isEmpty() && this.selection.selectWordRight(), this.session.remove(this.getSelectionRange()), this.clearSelection();
          }, g.prototype.removeWordLeft = function() {
            this.selection.isEmpty() && this.selection.selectWordLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection();
          }, g.prototype.removeToLineStart = function() {
            this.selection.isEmpty() && this.selection.selectLineStart(), this.selection.isEmpty() && this.selection.selectLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection();
          }, g.prototype.removeToLineEnd = function() {
            this.selection.isEmpty() && this.selection.selectLineEnd();
            var d = this.getSelectionRange();
            d.start.column == d.end.column && d.start.row == d.end.row && (d.end.column = 0, d.end.row++), this.session.remove(d), this.clearSelection();
          }, g.prototype.splitLine = function() {
            this.selection.isEmpty() || (this.session.remove(this.getSelectionRange()), this.clearSelection());
            var d = this.getCursorPosition();
            this.insert(`
`), this.moveCursorToPosition(d);
          }, g.prototype.setGhostText = function(d, b) {
            this.renderer.setGhostText(d, b);
          }, g.prototype.removeGhostText = function() {
            this.renderer.removeGhostText();
          }, g.prototype.transposeLetters = function() {
            if (this.selection.isEmpty()) {
              var d = this.getCursorPosition(), b = d.column;
              if (b !== 0) {
                var k = this.session.getLine(d.row), I, T;
                b < k.length ? (I = k.charAt(b) + k.charAt(b - 1), T = new a(d.row, b - 1, d.row, b + 1)) : (I = k.charAt(b - 1) + k.charAt(b - 2), T = new a(d.row, b - 2, d.row, b)), this.session.replace(T, I), this.session.selection.moveToPosition(T.end);
              }
            }
          }, g.prototype.toLowerCase = function() {
            var d = this.getSelectionRange();
            this.selection.isEmpty() && this.selection.selectWord();
            var b = this.getSelectionRange(), k = this.session.getTextRange(b);
            this.session.replace(b, k.toLowerCase()), this.selection.setSelectionRange(d);
          }, g.prototype.toUpperCase = function() {
            var d = this.getSelectionRange();
            this.selection.isEmpty() && this.selection.selectWord();
            var b = this.getSelectionRange(), k = this.session.getTextRange(b);
            this.session.replace(b, k.toUpperCase()), this.selection.setSelectionRange(d);
          }, g.prototype.indent = function() {
            var d = this.session, b = this.getSelectionRange();
            if (b.start.row < b.end.row) {
              var k = this.$getSelectedRows();
              d.indentRows(k.first, k.last, "	");
              return;
            } else if (b.start.column < b.end.column) {
              var I = d.getTextRange(b);
              if (!/^\s+$/.test(I)) {
                var k = this.$getSelectedRows();
                d.indentRows(k.first, k.last, "	");
                return;
              }
            }
            var T = d.getLine(b.start.row), O = b.start, W = d.getTabSize(), H = d.documentToScreenColumn(O.row, O.column);
            if (this.session.getUseSoftTabs())
              var B = W - H % W, P = s.stringRepeat(" ", B);
            else {
              for (var B = H % W; T[b.start.column - 1] == " " && B; )
                b.start.column--, B--;
              this.selection.setSelectionRange(b), P = "	";
            }
            return this.insert(P);
          }, g.prototype.blockIndent = function() {
            var d = this.$getSelectedRows();
            this.session.indentRows(d.first, d.last, "	");
          }, g.prototype.blockOutdent = function() {
            var d = this.session.getSelection();
            this.session.outdentRows(d.getRange());
          }, g.prototype.sortLines = function() {
            for (var d = this.$getSelectedRows(), b = this.session, k = [], I = d.first; I <= d.last; I++)
              k.push(b.getLine(I));
            k.sort(function(W, H) {
              return W.toLowerCase() < H.toLowerCase() ? -1 : W.toLowerCase() > H.toLowerCase() ? 1 : 0;
            });
            for (var T = new a(0, 0, 0, 0), I = d.first; I <= d.last; I++) {
              var O = b.getLine(I);
              T.start.row = I, T.end.row = I, T.end.column = O.length, b.replace(T, k[I - d.first]);
            }
          }, g.prototype.toggleCommentLines = function() {
            var d = this.session.getState(this.getCursorPosition().row), b = this.$getSelectedRows();
            this.session.getMode().toggleCommentLines(d, this.session, b.first, b.last);
          }, g.prototype.toggleBlockComment = function() {
            var d = this.getCursorPosition(), b = this.session.getState(d.row), k = this.getSelectionRange();
            this.session.getMode().toggleBlockComment(b, this.session, k, d);
          }, g.prototype.getNumberAt = function(d, b) {
            var k = /[\-]?[0-9]+(?:\.[0-9]+)?/g;
            k.lastIndex = 0;
            for (var I = this.session.getLine(d); k.lastIndex < b; ) {
              var T = k.exec(I);
              if (T.index <= b && T.index + T[0].length >= b) {
                var O = {
                  value: T[0],
                  start: T.index,
                  end: T.index + T[0].length
                };
                return O;
              }
            }
            return null;
          }, g.prototype.modifyNumber = function(d) {
            var b = this.selection.getCursor().row, k = this.selection.getCursor().column, I = new a(b, k - 1, b, k), T = this.session.getTextRange(I);
            if (!isNaN(parseFloat(T)) && isFinite(T)) {
              var O = this.getNumberAt(b, k);
              if (O) {
                var W = O.value.indexOf(".") >= 0 ? O.start + O.value.indexOf(".") + 1 : O.end, H = O.start + O.value.length - W, B = parseFloat(O.value);
                B *= Math.pow(10, H), W !== O.end && k < W ? d *= Math.pow(10, O.end - k - 1) : d *= Math.pow(10, O.end - k), B += d, B /= Math.pow(10, H);
                var P = B.toFixed(H), F = new a(b, O.start, b, O.end);
                this.session.replace(F, P), this.moveCursorTo(b, Math.max(O.start + 1, k + P.length - O.value.length));
              }
            } else
              this.toggleWord();
          }, g.prototype.toggleWord = function() {
            var d = this.selection.getCursor().row, b = this.selection.getCursor().column;
            this.selection.selectWord();
            var k = this.getSelectedText(), I = this.selection.getWordRange().start.column, T = k.replace(/([a-z]+|[A-Z]+)(?=[A-Z_]|$)/g, "$1 ").split(/\s/), O = b - I - 1;
            O < 0 && (O = 0);
            var W = 0, H = 0, B = this;
            k.match(/[A-Za-z0-9_]+/) && T.forEach(function(ie, he) {
              H = W + ie.length, O >= W && O <= H && (k = ie, B.selection.clearSelection(), B.moveCursorTo(d, W + I), B.selection.selectTo(d, H + I)), W = H;
            });
            for (var P = this.$toggleWordPairs, F, z = 0; z < P.length; z++)
              for (var U = P[z], j = 0; j <= 1; j++) {
                var Y = +!j, G = k.match(new RegExp("^\\s?_?(" + s.escapeRegExp(U[j]) + ")\\s?$", "i"));
                if (G) {
                  var J = k.match(new RegExp("([_]|^|\\s)(" + s.escapeRegExp(G[1]) + ")($|\\s)", "g"));
                  J && (F = k.replace(new RegExp(s.escapeRegExp(U[j]), "i"), function(ie) {
                    var he = U[Y];
                    return ie.toUpperCase() == ie ? he = he.toUpperCase() : ie.charAt(0).toUpperCase() == ie.charAt(0) && (he = he.substr(0, 0) + U[Y].charAt(0).toUpperCase() + he.substr(1)), he;
                  }), this.insert(F), F = "");
                }
              }
          }, g.prototype.findLinkAt = function(d, b) {
            var k, I, T = this.session.getLine(d), O = T.split(/((?:https?|ftp):\/\/[\S]+)/), W = b;
            W < 0 && (W = 0);
            var H = 0, B = 0, P;
            try {
              for (var F = f(O), z = F.next(); !z.done; z = F.next()) {
                var U = z.value;
                if (B = H + U.length, W >= H && W <= B && U.match(/((?:https?|ftp):\/\/[\S]+)/)) {
                  P = U.replace(/[\s:.,'";}\]]+$/, "");
                  break;
                }
                H = B;
              }
            } catch (j) {
              k = { error: j };
            } finally {
              try {
                z && !z.done && (I = F.return) && I.call(F);
              } finally {
                if (k) throw k.error;
              }
            }
            return P;
          }, g.prototype.openLink = function() {
            var d = this.selection.getCursor(), b = this.findLinkAt(d.row, d.column);
            return b && window.open(b, "_blank"), b != null;
          }, g.prototype.removeLines = function() {
            var d = this.$getSelectedRows();
            this.session.removeFullLines(d.first, d.last), this.clearSelection();
          }, g.prototype.duplicateSelection = function() {
            var d = this.selection, b = this.session, k = d.getRange(), I = d.isBackwards();
            if (k.isEmpty()) {
              var T = k.start.row;
              b.duplicateLines(T, T);
            } else {
              var O = I ? k.start : k.end, W = b.insert(O, b.getTextRange(k));
              k.start = O, k.end = W, d.setSelectionRange(k, I);
            }
          }, g.prototype.moveLinesDown = function() {
            this.$moveLines(1, !1);
          }, g.prototype.moveLinesUp = function() {
            this.$moveLines(-1, !1);
          }, g.prototype.moveText = function(d, b, k) {
            return this.session.moveText(d, b, k);
          }, g.prototype.copyLinesUp = function() {
            this.$moveLines(-1, !0);
          }, g.prototype.copyLinesDown = function() {
            this.$moveLines(1, !0);
          }, g.prototype.$moveLines = function(d, b) {
            var k, I, T = this.selection;
            if (!T.inMultiSelectMode || this.inVirtualSelectionMode) {
              var O = T.toOrientedRange();
              k = this.$getSelectedRows(O), I = this.session.$moveLines(k.first, k.last, b ? 0 : d), b && d == -1 && (I = 0), O.moveBy(I, 0), T.fromOrientedRange(O);
            } else {
              var W = T.rangeList.ranges;
              T.rangeList.detach(this.session), this.inVirtualSelectionMode = !0;
              for (var H = 0, B = 0, P = W.length, F = 0; F < P; F++) {
                var z = F;
                W[F].moveBy(H, 0), k = this.$getSelectedRows(W[F]);
                for (var U = k.first, j = k.last; ++F < P; ) {
                  B && W[F].moveBy(B, 0);
                  var Y = this.$getSelectedRows(W[F]);
                  if (b && Y.first != j)
                    break;
                  if (!b && Y.first > j + 1)
                    break;
                  j = Y.last;
                }
                for (F--, H = this.session.$moveLines(U, j, b ? 0 : d), b && d == -1 && (z = F + 1); z <= F; )
                  W[z].moveBy(H, 0), z++;
                b || (H = 0), B += H;
              }
              T.fromOrientedRange(T.ranges[0]), T.rangeList.attach(this.session), this.inVirtualSelectionMode = !1;
            }
          }, g.prototype.$getSelectedRows = function(d) {
            return d = (d || this.getSelectionRange()).collapseRows(), {
              first: this.session.getRowFoldStart(d.start.row),
              last: this.session.getRowFoldEnd(d.end.row)
            };
          }, g.prototype.onCompositionStart = function(d) {
            this.renderer.showComposition(d);
          }, g.prototype.onCompositionUpdate = function(d) {
            this.renderer.setCompositionText(d);
          }, g.prototype.onCompositionEnd = function() {
            this.renderer.hideComposition();
          }, g.prototype.getFirstVisibleRow = function() {
            return this.renderer.getFirstVisibleRow();
          }, g.prototype.getLastVisibleRow = function() {
            return this.renderer.getLastVisibleRow();
          }, g.prototype.isRowVisible = function(d) {
            return d >= this.getFirstVisibleRow() && d <= this.getLastVisibleRow();
          }, g.prototype.isRowFullyVisible = function(d) {
            return d >= this.renderer.getFirstFullyVisibleRow() && d <= this.renderer.getLastFullyVisibleRow();
          }, g.prototype.$getVisibleRowCount = function() {
            return this.renderer.getScrollBottomRow() - this.renderer.getScrollTopRow() + 1;
          }, g.prototype.$moveByPage = function(d, b) {
            var k = this.renderer, I = this.renderer.layerConfig, T = d * Math.floor(I.height / I.lineHeight);
            b === !0 ? this.selection.$moveSelection(function() {
              this.moveCursorBy(T, 0);
            }) : b === !1 && (this.selection.moveCursorBy(T, 0), this.selection.clearSelection());
            var O = k.scrollTop;
            k.scrollBy(0, T * I.lineHeight), b != null && k.scrollCursorIntoView(null, 0.5), k.animateScrolling(O);
          }, g.prototype.selectPageDown = function() {
            this.$moveByPage(1, !0);
          }, g.prototype.selectPageUp = function() {
            this.$moveByPage(-1, !0);
          }, g.prototype.gotoPageDown = function() {
            this.$moveByPage(1, !1);
          }, g.prototype.gotoPageUp = function() {
            this.$moveByPage(-1, !1);
          }, g.prototype.scrollPageDown = function() {
            this.$moveByPage(1);
          }, g.prototype.scrollPageUp = function() {
            this.$moveByPage(-1);
          }, g.prototype.scrollToRow = function(d) {
            this.renderer.scrollToRow(d);
          }, g.prototype.scrollToLine = function(d, b, k, I) {
            this.renderer.scrollToLine(d, b, k, I);
          }, g.prototype.centerSelection = function() {
            var d = this.getSelectionRange(), b = {
              row: Math.floor(d.start.row + (d.end.row - d.start.row) / 2),
              column: Math.floor(d.start.column + (d.end.column - d.start.column) / 2)
            };
            this.renderer.alignCursor(b, 0.5);
          }, g.prototype.getCursorPosition = function() {
            return this.selection.getCursor();
          }, g.prototype.getCursorPositionScreen = function() {
            return this.session.documentToScreenPosition(this.getCursorPosition());
          }, g.prototype.getSelectionRange = function() {
            return this.selection.getRange();
          }, g.prototype.selectAll = function() {
            this.selection.selectAll();
          }, g.prototype.clearSelection = function() {
            this.selection.clearSelection();
          }, g.prototype.moveCursorTo = function(d, b) {
            this.selection.moveCursorTo(d, b);
          }, g.prototype.moveCursorToPosition = function(d) {
            this.selection.moveCursorToPosition(d);
          }, g.prototype.jumpToMatching = function(d, b) {
            var k = this.getCursorPosition(), I = new m(this.session, k.row, k.column), T = I.getCurrentToken(), O = 0;
            T && T.type.indexOf("tag-name") !== -1 && (T = I.stepBackward());
            var W = T || I.stepForward();
            if (W) {
              var H, B = !1, P = {}, F = k.column - W.start, z, U = {
                ")": "(",
                "(": "(",
                "]": "[",
                "[": "[",
                "{": "{",
                "}": "{"
              };
              do {
                if (W.value.match(/[{}()\[\]]/g)) {
                  for (; F < W.value.length && !B; F++)
                    if (U[W.value[F]])
                      switch (z = U[W.value[F]] + "." + W.type.replace("rparen", "lparen"), isNaN(P[z]) && (P[z] = 0), W.value[F]) {
                        case "(":
                        case "[":
                        case "{":
                          P[z]++;
                          break;
                        case ")":
                        case "]":
                        case "}":
                          P[z]--, P[z] === -1 && (H = "bracket", B = !0);
                          break;
                      }
                } else W.type.indexOf("tag-name") !== -1 && (isNaN(P[W.value]) && (P[W.value] = 0), T.value === "<" && O > 1 ? P[W.value]++ : T.value === "</" && P[W.value]--, P[W.value] === -1 && (H = "tag", B = !0));
                B || (T = W, O++, W = I.stepForward(), F = 0);
              } while (W && !B);
              if (H) {
                var j, Y;
                if (H === "bracket")
                  j = this.session.getBracketRange(k), j || (j = new a(I.getCurrentTokenRow(), I.getCurrentTokenColumn() + F - 1, I.getCurrentTokenRow(), I.getCurrentTokenColumn() + F - 1), Y = j.start, (b || Y.row === k.row && Math.abs(Y.column - k.column) < 2) && (j = this.session.getBracketRange(Y)));
                else if (H === "tag") {
                  if (!W || W.type.indexOf("tag-name") === -1)
                    return;
                  if (j = new a(I.getCurrentTokenRow(), I.getCurrentTokenColumn() - 2, I.getCurrentTokenRow(), I.getCurrentTokenColumn() - 2), j.compare(k.row, k.column) === 0) {
                    var G = this.session.getMatchingTags(k);
                    G && (G.openTag.contains(k.row, k.column) ? (j = G.closeTag, Y = j.start) : (j = G.openTag, G.closeTag.start.row === k.row && G.closeTag.start.column === k.column ? Y = j.end : Y = j.start));
                  }
                  Y = Y || j.start;
                }
                Y = j && j.cursor || Y, Y && (d ? j && b ? this.selection.setRange(j) : j && j.isEqual(this.getSelectionRange()) ? this.clearSelection() : this.selection.selectTo(Y.row, Y.column) : this.selection.moveTo(Y.row, Y.column));
              }
            }
          }, g.prototype.gotoLine = function(d, b, k) {
            this.selection.clearSelection(), this.session.unfold({ row: d - 1, column: b || 0 }), this.exitMultiSelectMode && this.exitMultiSelectMode(), this.moveCursorTo(d - 1, b || 0), this.isRowFullyVisible(d - 1) || this.scrollToLine(d - 1, !0, k);
          }, g.prototype.navigateTo = function(d, b) {
            this.selection.moveTo(d, b);
          }, g.prototype.navigateUp = function(d) {
            if (this.selection.isMultiLine() && !this.selection.isBackwards()) {
              var b = this.selection.anchor.getPosition();
              return this.moveCursorToPosition(b);
            }
            this.selection.clearSelection(), this.selection.moveCursorBy(-d || -1, 0);
          }, g.prototype.navigateDown = function(d) {
            if (this.selection.isMultiLine() && this.selection.isBackwards()) {
              var b = this.selection.anchor.getPosition();
              return this.moveCursorToPosition(b);
            }
            this.selection.clearSelection(), this.selection.moveCursorBy(d || 1, 0);
          }, g.prototype.navigateLeft = function(d) {
            if (this.selection.isEmpty())
              for (d = d || 1; d--; )
                this.selection.moveCursorLeft();
            else {
              var b = this.getSelectionRange().start;
              this.moveCursorToPosition(b);
            }
            this.clearSelection();
          }, g.prototype.navigateRight = function(d) {
            if (this.selection.isEmpty())
              for (d = d || 1; d--; )
                this.selection.moveCursorRight();
            else {
              var b = this.getSelectionRange().end;
              this.moveCursorToPosition(b);
            }
            this.clearSelection();
          }, g.prototype.navigateLineStart = function() {
            this.selection.moveCursorLineStart(), this.clearSelection();
          }, g.prototype.navigateLineEnd = function() {
            this.selection.moveCursorLineEnd(), this.clearSelection();
          }, g.prototype.navigateFileEnd = function() {
            this.selection.moveCursorFileEnd(), this.clearSelection();
          }, g.prototype.navigateFileStart = function() {
            this.selection.moveCursorFileStart(), this.clearSelection();
          }, g.prototype.navigateWordRight = function() {
            this.selection.moveCursorWordRight(), this.clearSelection();
          }, g.prototype.navigateWordLeft = function() {
            this.selection.moveCursorWordLeft(), this.clearSelection();
          }, g.prototype.replace = function(d, b) {
            b && this.$search.set(b);
            var k = this.$search.find(this.session), I = 0;
            return k && (this.$tryReplace(k, d) && (I = 1), this.selection.setSelectionRange(k), this.renderer.scrollSelectionIntoView(k.start, k.end)), I;
          }, g.prototype.replaceAll = function(d, b) {
            b && this.$search.set(b);
            var k = this.$search.findAll(this.session), I = 0;
            if (!k.length)
              return I;
            var T = this.getSelectionRange();
            this.selection.moveTo(0, 0);
            for (var O = k.length - 1; O >= 0; --O)
              this.$tryReplace(k[O], d) && I++;
            return this.selection.setSelectionRange(T), I;
          }, g.prototype.$tryReplace = function(d, b) {
            var k = this.session.getTextRange(d);
            return b = this.$search.replace(k, b), b !== null ? (d.end = this.session.replace(d, b), d) : null;
          }, g.prototype.getLastSearchOptions = function() {
            return this.$search.getOptions();
          }, g.prototype.find = function(d, b, k) {
            b || (b = {}), typeof d == "string" || d instanceof RegExp ? b.needle = d : typeof d == "object" && v.mixin(b, d);
            var I = this.selection.getRange();
            b.needle == null && (d = this.session.getTextRange(I) || this.$search.$options.needle, d || (I = this.session.getWordRange(I.start.row, I.start.column), d = this.session.getTextRange(I)), this.$search.set({ needle: d })), this.$search.set(b), b.start || this.$search.set({ start: I });
            var T = this.$search.find(this.session);
            if (b.preventScroll)
              return T;
            if (T)
              return this.revealRange(T, k), T;
            b.backwards ? I.start = I.end : I.end = I.start, this.selection.setRange(I);
          }, g.prototype.findNext = function(d, b) {
            this.find({ skipCurrent: !0, backwards: !1 }, d, b);
          }, g.prototype.findPrevious = function(d, b) {
            this.find(d, { skipCurrent: !0, backwards: !0 }, b);
          }, g.prototype.revealRange = function(d, b) {
            this.session.unfold(d), this.selection.setSelectionRange(d);
            var k = this.renderer.scrollTop;
            this.renderer.scrollSelectionIntoView(d.start, d.end, 0.5), b !== !1 && this.renderer.animateScrolling(k);
          }, g.prototype.undo = function() {
            this.session.getUndoManager().undo(this.session), this.renderer.scrollCursorIntoView(null, 0.5);
          }, g.prototype.redo = function() {
            this.session.getUndoManager().redo(this.session), this.renderer.scrollCursorIntoView(null, 0.5);
          }, g.prototype.destroy = function() {
            this.$toDestroy && (this.$toDestroy.forEach(function(d) {
              d.destroy();
            }), this.$toDestroy = null), this.$mouseHandler && this.$mouseHandler.destroy(), this.renderer.destroy(), this._signal("destroy", this), this.session && this.session.destroy(), this._$emitInputEvent && this._$emitInputEvent.cancel(), this.removeAllListeners();
          }, g.prototype.setAutoScrollEditorIntoView = function(d) {
            if (d) {
              var b, k = this, I = !1;
              this.$scrollAnchor || (this.$scrollAnchor = document.createElement("div"));
              var T = this.$scrollAnchor;
              T.style.cssText = "position:absolute", this.container.insertBefore(T, this.container.firstChild);
              var O = this.on("changeSelection", function() {
                I = !0;
              }), W = this.renderer.on("beforeRender", function() {
                I && (b = k.renderer.container.getBoundingClientRect());
              }), H = this.renderer.on("afterRender", function() {
                if (I && b && (k.isFocused() || k.searchBox && k.searchBox.isFocused())) {
                  var B = k.renderer, P = B.$cursorLayer.$pixelPos, F = B.layerConfig, z = P.top - F.offset;
                  P.top >= 0 && z + b.top < 0 ? I = !0 : P.top < F.height && P.top + b.top + F.lineHeight > window.innerHeight ? I = !1 : I = null, I != null && (T.style.top = z + "px", T.style.left = P.left + "px", T.style.height = F.lineHeight + "px", T.scrollIntoView(I)), I = b = null;
                }
              });
              this.setAutoScrollEditorIntoView = function(B) {
                B || (delete this.setAutoScrollEditorIntoView, this.off("changeSelection", O), this.renderer.off("afterRender", H), this.renderer.off("beforeRender", W));
              };
            }
          }, g.prototype.$resetCursorStyle = function() {
            var d = this.$cursorStyle || "ace", b = this.renderer.$cursorLayer;
            b && (b.setSmoothBlinking(/smooth/.test(d)), b.isBlinking = !this.$readOnly && d != "wide", p.setCssClass(b.element, "ace_slim-cursors", /slim/.test(d)));
          }, g.prototype.prompt = function(d, b, k) {
            var I = this;
            y.loadModule("ace/ext/prompt", function(T) {
              T.prompt(I, d, b, k);
            });
          }, g;
        }()
      );
      A.$uid = 0, A.prototype.curOp = null, A.prototype.prevOp = {}, A.prototype.$mergeableCommands = ["backspace", "del", "insertstring"], A.prototype.$toggleWordPairs = [
        ["first", "last"],
        ["true", "false"],
        ["yes", "no"],
        ["width", "height"],
        ["top", "bottom"],
        ["right", "left"],
        ["on", "off"],
        ["x", "y"],
        ["get", "set"],
        ["max", "min"],
        ["horizontal", "vertical"],
        ["show", "hide"],
        ["add", "remove"],
        ["up", "down"],
        ["before", "after"],
        ["even", "odd"],
        ["in", "out"],
        ["inside", "outside"],
        ["next", "previous"],
        ["increase", "decrease"],
        ["attach", "detach"],
        ["&&", "||"],
        ["==", "!="]
      ], v.implement(A.prototype, c), y.defineOptions(A.prototype, "editor", {
        selectionStyle: {
          set: function(g) {
            this.onSelectionChange(), this._signal("changeSelectionStyle", { data: g });
          },
          initialValue: "line"
        },
        highlightActiveLine: {
          set: function() {
            this.$updateHighlightActiveLine();
          },
          initialValue: !0
        },
        highlightSelectedWord: {
          set: function(g) {
            this.$onSelectionChange();
          },
          initialValue: !0
        },
        readOnly: {
          set: function(g) {
            var d = this;
            this.textInput.setReadOnly(g), this.$resetCursorStyle(), this.$readOnlyCallback || (this.$readOnlyCallback = function(k) {
              var I = !1;
              if (k && k.type == "keydown") {
                if (I = k && k.key && k.key.length == 1 && !k.ctrlKey && !k.metaKey, !I)
                  return;
              } else k && k.type !== "exec" && (I = !0);
              if (I) {
                d.hoverTooltip || (d.hoverTooltip = new D());
                var T = p.createElement("div");
                T.textContent = $("editor.tooltip.disable-editing", "Editing is disabled"), d.hoverTooltip.isOpen || d.hoverTooltip.showForRange(d, d.getSelectionRange(), T);
              } else d.hoverTooltip && d.hoverTooltip.isOpen && d.hoverTooltip.hide();
            });
            var b = this.textInput.getElement();
            g ? (x.addListener(b, "keydown", this.$readOnlyCallback, this), this.commands.on("exec", this.$readOnlyCallback), this.commands.on("commandUnavailable", this.$readOnlyCallback)) : (x.removeListener(b, "keydown", this.$readOnlyCallback), this.commands.off("exec", this.$readOnlyCallback), this.commands.off("commandUnavailable", this.$readOnlyCallback), this.hoverTooltip && (this.hoverTooltip.destroy(), this.hoverTooltip = null));
          },
          initialValue: !1
        },
        copyWithEmptySelection: {
          set: function(g) {
            this.textInput.setCopyWithEmptySelection(g);
          },
          initialValue: !1
        },
        cursorStyle: {
          set: function(g) {
            this.$resetCursorStyle();
          },
          values: ["ace", "slim", "smooth", "wide"],
          initialValue: "ace"
        },
        mergeUndoDeltas: {
          values: [!1, !0, "always"],
          initialValue: !0
        },
        behavioursEnabled: { initialValue: !0 },
        wrapBehavioursEnabled: { initialValue: !0 },
        enableAutoIndent: { initialValue: !0 },
        autoScrollEditorIntoView: {
          set: function(g) {
            this.setAutoScrollEditorIntoView(g);
          }
        },
        keyboardHandler: {
          set: function(g) {
            this.setKeyboardHandler(g);
          },
          get: function() {
            return this.$keybindingId;
          },
          handlesSet: !0
        },
        value: {
          set: function(g) {
            this.session.setValue(g);
          },
          get: function() {
            return this.getValue();
          },
          handlesSet: !0,
          hidden: !0
        },
        session: {
          set: function(g) {
            this.setSession(g);
          },
          get: function() {
            return this.session;
          },
          handlesSet: !0,
          hidden: !0
        },
        showLineNumbers: {
          set: function(g) {
            this.renderer.$gutterLayer.setShowLineNumbers(g), this.renderer.$loop.schedule(this.renderer.CHANGE_GUTTER), g && this.$relativeLineNumbers ? C.attach(this) : C.detach(this);
          },
          initialValue: !0
        },
        relativeLineNumbers: {
          set: function(g) {
            this.$showLineNumbers && g ? C.attach(this) : C.detach(this);
          }
        },
        placeholder: {
          set: function(g) {
            this.$updatePlaceholder || (this.$updatePlaceholder = (function() {
              var d = this.session && (this.renderer.$composition || this.session.getLength() > 1 || this.session.getLine(0).length > 0);
              if (d && this.renderer.placeholderNode)
                this.renderer.off("afterRender", this.$updatePlaceholder), p.removeCssClass(this.container, "ace_hasPlaceholder"), this.renderer.placeholderNode.remove(), this.renderer.placeholderNode = null;
              else if (!d && !this.renderer.placeholderNode) {
                this.renderer.on("afterRender", this.$updatePlaceholder), p.addCssClass(this.container, "ace_hasPlaceholder");
                var b = p.createElement("div");
                b.className = "ace_placeholder", b.textContent = this.$placeholder || "", this.renderer.placeholderNode = b, this.renderer.content.appendChild(this.renderer.placeholderNode);
              } else !d && this.renderer.placeholderNode && (this.renderer.placeholderNode.textContent = this.$placeholder || "");
            }).bind(this), this.on("input", this.$updatePlaceholder)), this.$updatePlaceholder();
          }
        },
        enableKeyboardAccessibility: {
          set: function(g) {
            var d = {
              name: "blurTextInput",
              description: "Set focus to the editor content div to allow tabbing through the page",
              bindKey: "Esc",
              exec: function(I) {
                I.blur(), I.renderer.scroller.focus();
              },
              readOnly: !0
            }, b = function(I) {
              if (I.target == this.renderer.scroller && I.keyCode === L.enter) {
                I.preventDefault();
                var T = this.getCursorPosition().row;
                this.isRowVisible(T) || this.scrollToLine(T, !0, !0), this.focus();
              }
            }, k;
            g ? (this.renderer.enableKeyboardAccessibility = !0, this.renderer.keyboardFocusClassName = "ace_keyboard-focus", this.textInput.getElement().setAttribute("tabindex", -1), this.textInput.setNumberOfExtraLines(l.isWin ? 3 : 0), this.renderer.scroller.setAttribute("tabindex", 0), this.renderer.scroller.setAttribute("role", "group"), this.renderer.scroller.setAttribute("aria-roledescription", $("editor.scroller.aria-roledescription", "editor")), this.renderer.scroller.classList.add(this.renderer.keyboardFocusClassName), this.renderer.scroller.setAttribute("aria-label", $("editor.scroller.aria-label", "Editor content, press Enter to start editing, press Escape to exit")), this.renderer.scroller.addEventListener("keyup", b.bind(this)), this.commands.addCommand(d), this.renderer.$gutter.setAttribute("tabindex", 0), this.renderer.$gutter.setAttribute("aria-hidden", !1), this.renderer.$gutter.setAttribute("role", "group"), this.renderer.$gutter.setAttribute("aria-roledescription", $("editor.gutter.aria-roledescription", "editor gutter")), this.renderer.$gutter.setAttribute("aria-label", $("editor.gutter.aria-label", "Editor gutter, press Enter to interact with controls using arrow keys, press Escape to exit")), this.renderer.$gutter.classList.add(this.renderer.keyboardFocusClassName), this.renderer.content.setAttribute("aria-hidden", !0), k || (k = new h(this)), k.addListener(), this.textInput.setAriaOptions({
              setLabel: !0
            })) : (this.renderer.enableKeyboardAccessibility = !1, this.textInput.getElement().setAttribute("tabindex", 0), this.textInput.setNumberOfExtraLines(0), this.renderer.scroller.setAttribute("tabindex", -1), this.renderer.scroller.removeAttribute("role"), this.renderer.scroller.removeAttribute("aria-roledescription"), this.renderer.scroller.classList.remove(this.renderer.keyboardFocusClassName), this.renderer.scroller.removeAttribute("aria-label"), this.renderer.scroller.removeEventListener("keyup", b.bind(this)), this.commands.removeCommand(d), this.renderer.content.removeAttribute("aria-hidden"), this.renderer.$gutter.setAttribute("tabindex", -1), this.renderer.$gutter.setAttribute("aria-hidden", !0), this.renderer.$gutter.removeAttribute("role"), this.renderer.$gutter.removeAttribute("aria-roledescription"), this.renderer.$gutter.removeAttribute("aria-label"), this.renderer.$gutter.classList.remove(this.renderer.keyboardFocusClassName), k && k.removeListener());
          },
          initialValue: !1
        },
        textInputAriaLabel: {
          set: function(g) {
            this.$textInputAriaLabel = g;
          },
          initialValue: ""
        },
        enableMobileMenu: {
          set: function(g) {
            this.$enableMobileMenu = g;
          },
          initialValue: !0
        },
        customScrollbar: "renderer",
        hScrollBarAlwaysVisible: "renderer",
        vScrollBarAlwaysVisible: "renderer",
        highlightGutterLine: "renderer",
        animatedScroll: "renderer",
        showInvisibles: "renderer",
        showPrintMargin: "renderer",
        printMarginColumn: "renderer",
        printMargin: "renderer",
        fadeFoldWidgets: "renderer",
        showFoldWidgets: "renderer",
        displayIndentGuides: "renderer",
        highlightIndentGuides: "renderer",
        showGutter: "renderer",
        fontSize: "renderer",
        fontFamily: "renderer",
        maxLines: "renderer",
        minLines: "renderer",
        scrollPastEnd: "renderer",
        fixedWidthGutter: "renderer",
        theme: "renderer",
        hasCssTransforms: "renderer",
        maxPixelHeight: "renderer",
        useTextareaForIME: "renderer",
        useResizeObserver: "renderer",
        useSvgGutterIcons: "renderer",
        showFoldedAnnotations: "renderer",
        scrollSpeed: "$mouseHandler",
        dragDelay: "$mouseHandler",
        dragEnabled: "$mouseHandler",
        focusTimeout: "$mouseHandler",
        tooltipFollowsMouse: "$mouseHandler",
        firstLineNumber: "session",
        overwrite: "session",
        newLineMode: "session",
        useWorker: "session",
        useSoftTabs: "session",
        navigateWithinSoftTabs: "session",
        tabSize: "session",
        wrap: "session",
        indentedSoftWrap: "session",
        foldStyle: "session",
        mode: "session"
      });
      var C = {
        getText: function(g, d) {
          return (Math.abs(g.selection.lead.row - d) || d + 1 + (d < 9 ? "·" : "")) + "";
        },
        getWidth: function(g, d, b) {
          return Math.max(d.toString().length, (b.lastRow + 1).toString().length, 2) * b.characterWidth;
        },
        update: function(g, d) {
          d.renderer.$loop.schedule(d.renderer.CHANGE_GUTTER);
        },
        attach: function(g) {
          g.renderer.$gutterLayer.$renderer = this, g.on("changeSelection", this.update), this.update(null, g);
        },
        detach: function(g) {
          g.renderer.$gutterLayer.$renderer == this && (g.renderer.$gutterLayer.$renderer = null), g.off("changeSelection", this.update), this.update(null, g);
        }
      };
      S.Editor = A;
    }), ace.define("ace/layer/lines", ["require", "exports", "module", "ace/lib/dom"], function(M, S, R) {
      var f = M("../lib/dom"), v = (
        /** @class */
        function() {
          function p(s, l) {
            this.element = s, this.canvasHeight = l || 5e5, this.element.style.height = this.canvasHeight * 2 + "px", this.cells = [], this.cellCache = [], this.$offsetCoefficient = 0;
          }
          return p.prototype.moveContainer = function(s) {
            f.translate(this.element, 0, -(s.firstRowScreen * s.lineHeight % this.canvasHeight) - s.offset * this.$offsetCoefficient);
          }, p.prototype.pageChanged = function(s, l) {
            return Math.floor(s.firstRowScreen * s.lineHeight / this.canvasHeight) !== Math.floor(l.firstRowScreen * l.lineHeight / this.canvasHeight);
          }, p.prototype.computeLineTop = function(s, l, e) {
            var n = l.firstRowScreen * l.lineHeight, i = Math.floor(n / this.canvasHeight), r = e.documentToScreenRow(s, 0) * l.lineHeight;
            return r - i * this.canvasHeight;
          }, p.prototype.computeLineHeight = function(s, l, e) {
            return l.lineHeight * e.getRowLineCount(s);
          }, p.prototype.getLength = function() {
            return this.cells.length;
          }, p.prototype.get = function(s) {
            return this.cells[s];
          }, p.prototype.shift = function() {
            this.$cacheCell(this.cells.shift());
          }, p.prototype.pop = function() {
            this.$cacheCell(this.cells.pop());
          }, p.prototype.push = function(s) {
            if (Array.isArray(s)) {
              this.cells.push.apply(this.cells, s);
              for (var l = f.createFragment(this.element), e = 0; e < s.length; e++)
                l.appendChild(s[e].element);
              this.element.appendChild(l);
            } else
              this.cells.push(s), this.element.appendChild(s.element);
          }, p.prototype.unshift = function(s) {
            if (Array.isArray(s)) {
              this.cells.unshift.apply(this.cells, s);
              for (var l = f.createFragment(this.element), e = 0; e < s.length; e++)
                l.appendChild(s[e].element);
              this.element.firstChild ? this.element.insertBefore(l, this.element.firstChild) : this.element.appendChild(l);
            } else
              this.cells.unshift(s), this.element.insertAdjacentElement("afterbegin", s.element);
          }, p.prototype.last = function() {
            return this.cells.length ? this.cells[this.cells.length - 1] : null;
          }, p.prototype.$cacheCell = function(s) {
            s && (s.element.remove(), this.cellCache.push(s));
          }, p.prototype.createCell = function(s, l, e, n) {
            var i = this.cellCache.pop();
            if (!i) {
              var r = f.createElement("div");
              n && n(r), this.element.appendChild(r), i = {
                element: r,
                text: "",
                row: s
              };
            }
            return i.row = s, i;
          }, p;
        }()
      );
      S.Lines = v;
    }), ace.define("ace/layer/gutter", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/layer/lines", "ace/config"], function(M, S, R) {
      var f = M("../lib/dom"), v = M("../lib/oop"), p = M("../lib/lang"), s = M("../lib/event_emitter").EventEmitter, l = M("./lines").Lines, e = M("../config").nls, n = (
        /** @class */
        function() {
          function r(t) {
            this.element = f.createElement("div"), this.element.className = "ace_layer ace_gutter-layer", t.appendChild(this.element), this.setShowFoldWidgets(this.$showFoldWidgets), this.gutterWidth = 0, this.$annotations = [], this.$updateAnnotations = this.$updateAnnotations.bind(this), this.$lines = new l(this.element), this.$lines.$offsetCoefficient = 1;
          }
          return r.prototype.setSession = function(t) {
            this.session && this.session.off("change", this.$updateAnnotations), this.session = t, t && t.on("change", this.$updateAnnotations);
          }, r.prototype.addGutterDecoration = function(t, o) {
            window.console && console.warn && console.warn("deprecated use session.addGutterDecoration"), this.session.addGutterDecoration(t, o);
          }, r.prototype.removeGutterDecoration = function(t, o) {
            window.console && console.warn && console.warn("deprecated use session.removeGutterDecoration"), this.session.removeGutterDecoration(t, o);
          }, r.prototype.setAnnotations = function(t) {
            this.$annotations = [];
            for (var o = 0; o < t.length; o++) {
              var a = t[o], c = a.row, u = this.$annotations[c];
              u || (u = this.$annotations[c] = { text: [], type: [], displayText: [] });
              var w = a.text, y = a.text, m = a.type;
              w = w ? p.escapeHTML(w) : a.html || "", y = y || a.html || "", u.text.indexOf(w) === -1 && (u.text.push(w), u.type.push(m), u.displayText.push(y));
              var h = a.className;
              h ? u.className = h : m === "error" ? u.className = " ace_error" : m === "security" && !/\bace_error\b/.test(u.className) ? u.className = " ace_security" : m === "warning" && !/\bace_(error|security)\b/.test(u.className) ? u.className = " ace_warning" : m === "info" && !u.className ? u.className = " ace_info" : m === "hint" && !u.className && (u.className = " ace_hint");
            }
          }, r.prototype.$updateAnnotations = function(t) {
            if (this.$annotations.length) {
              var o = t.start.row, a = t.end.row - o;
              if (a !== 0) if (t.action == "remove")
                this.$annotations.splice(o, a + 1, null);
              else {
                var c = new Array(a + 1);
                c.unshift(o, 1), this.$annotations.splice.apply(this.$annotations, c);
              }
            }
          }, r.prototype.update = function(t) {
            this.config = t;
            var o = this.session, a = t.firstRow, c = Math.min(
              t.lastRow + t.gutterOffset,
              // needed to compensate for hor scollbar
              o.getLength() - 1
            );
            this.oldLastRow = c, this.config = t, this.$lines.moveContainer(t), this.$updateCursorRow();
            for (var u = o.getNextFoldLine(a), w = u ? u.start.row : 1 / 0, y = null, m = -1, h = a; ; ) {
              if (h > w && (h = u.end.row + 1, u = o.getNextFoldLine(h, u), w = u ? u.start.row : 1 / 0), h > c) {
                for (; this.$lines.getLength() > m + 1; )
                  this.$lines.pop();
                break;
              }
              y = this.$lines.get(++m), y ? y.row = h : (y = this.$lines.createCell(h, t, this.session, i), this.$lines.push(y)), this.$renderCell(y, t, u, h), h++;
            }
            this._signal("afterRender"), this.$updateGutterWidth(t);
          }, r.prototype.$updateGutterWidth = function(t) {
            var o = this.session, a = o.gutterRenderer || this.$renderer, c = o.$firstLineNumber, u = this.$lines.last() ? this.$lines.last().text : "";
            (this.$fixedWidth || o.$useWrapMode) && (u = o.getLength() + c - 1);
            var w = a ? a.getWidth(o, u, t) : u.toString().length * t.characterWidth, y = this.$padding || this.$computePadding();
            w += y.left + y.right, w !== this.gutterWidth && !isNaN(w) && (this.gutterWidth = w, this.element.parentNode.style.width = this.element.style.width = Math.ceil(this.gutterWidth) + "px", this._signal("changeGutterWidth", w));
          }, r.prototype.$updateCursorRow = function() {
            if (this.$highlightGutterLine) {
              var t = this.session.selection.getCursor();
              this.$cursorRow !== t.row && (this.$cursorRow = t.row);
            }
          }, r.prototype.updateLineHighlight = function() {
            if (this.$highlightGutterLine) {
              var t = this.session.selection.cursor.row;
              if (this.$cursorRow = t, !(this.$cursorCell && this.$cursorCell.row == t)) {
                this.$cursorCell && (this.$cursorCell.element.className = this.$cursorCell.element.className.replace("ace_gutter-active-line ", ""));
                var o = this.$lines.cells;
                this.$cursorCell = null;
                for (var a = 0; a < o.length; a++) {
                  var c = o[a];
                  if (c.row >= this.$cursorRow) {
                    if (c.row > this.$cursorRow) {
                      var u = this.session.getFoldLine(this.$cursorRow);
                      if (a > 0 && u && u.start.row == o[a - 1].row)
                        c = o[a - 1];
                      else
                        break;
                    }
                    c.element.className = "ace_gutter-active-line " + c.element.className, this.$cursorCell = c;
                    break;
                  }
                }
              }
            }
          }, r.prototype.scrollLines = function(t) {
            var o = this.config;
            if (this.config = t, this.$updateCursorRow(), this.$lines.pageChanged(o, t))
              return this.update(t);
            this.$lines.moveContainer(t);
            var a = Math.min(
              t.lastRow + t.gutterOffset,
              // needed to compensate for hor scollbar
              this.session.getLength() - 1
            ), c = this.oldLastRow;
            if (this.oldLastRow = a, !o || c < t.firstRow)
              return this.update(t);
            if (a < o.firstRow)
              return this.update(t);
            if (o.firstRow < t.firstRow)
              for (var u = this.session.getFoldedRowCount(o.firstRow, t.firstRow - 1); u > 0; u--)
                this.$lines.shift();
            if (c > a)
              for (var u = this.session.getFoldedRowCount(a + 1, c); u > 0; u--)
                this.$lines.pop();
            t.firstRow < o.firstRow && this.$lines.unshift(this.$renderLines(t, t.firstRow, o.firstRow - 1)), a > c && this.$lines.push(this.$renderLines(t, c + 1, a)), this.updateLineHighlight(), this._signal("afterRender"), this.$updateGutterWidth(t);
          }, r.prototype.$renderLines = function(t, o, a) {
            for (var c = [], u = o, w = this.session.getNextFoldLine(u), y = w ? w.start.row : 1 / 0; u > y && (u = w.end.row + 1, w = this.session.getNextFoldLine(u, w), y = w ? w.start.row : 1 / 0), !(u > a); ) {
              var m = this.$lines.createCell(u, t, this.session, i);
              this.$renderCell(m, t, w, u), c.push(m), u++;
            }
            return c;
          }, r.prototype.$renderCell = function(t, o, a, c) {
            var u = t.element, w = this.session, y = u.childNodes[0], m = u.childNodes[1], h = u.childNodes[2], $ = u.childNodes[3], _ = h.firstChild, L = w.$firstLineNumber, x = w.$breakpoints, D = w.$decorations, A = w.gutterRenderer || this.$renderer, C = this.$showFoldWidgets && w.foldWidgets, g = a ? a.start.row : Number.MAX_VALUE, d = o.lineHeight + "px", b = this.$useSvgGutterIcons ? "ace_gutter-cell_svg-icons " : "ace_gutter-cell ", k = this.$useSvgGutterIcons ? "ace_icon_svg" : "ace_icon", I = (A ? A.getText(w, c) : c + L).toString();
            if (this.$highlightGutterLine && (c == this.$cursorRow || a && c < this.$cursorRow && c >= g && this.$cursorRow <= a.end.row) && (b += "ace_gutter-active-line ", this.$cursorCell != t && (this.$cursorCell && (this.$cursorCell.element.className = this.$cursorCell.element.className.replace("ace_gutter-active-line ", "")), this.$cursorCell = t)), x[c] && (b += x[c]), D[c] && (b += D[c]), this.$annotations[c] && c !== g && (b += this.$annotations[c].className), C) {
              var T = C[c];
              T == null && (T = C[c] = w.getFoldWidget(c));
            }
            if (T) {
              var O = "ace_fold-widget ace_" + T, W = T == "start" && c == g && c < a.end.row;
              if (W) {
                O += " ace_closed";
                for (var H = "", B = !1, P = c + 1; P <= a.end.row; P++)
                  if (this.$annotations[P]) {
                    if (this.$annotations[P].className === " ace_error") {
                      B = !0, H = " ace_error_fold";
                      break;
                    }
                    this.$annotations[P].className === " ace_security" ? (B = !0, H = " ace_security_fold") : this.$annotations[P].className === " ace_warning" && H !== " ace_security_fold" && (B = !0, H = " ace_warning_fold");
                  }
                b += H;
              } else
                O += " ace_open";
              m.className != O && (m.className = O), f.setStyle(m.style, "height", d), f.setStyle(m.style, "display", "inline-block"), m.setAttribute("role", "button"), m.setAttribute("tabindex", "-1");
              var F = w.getFoldWidgetRange(c);
              F ? m.setAttribute("aria-label", e("gutter.code-folding.range.aria-label", "Toggle code folding, rows $0 through $1", [
                F.start.row + 1,
                F.end.row + 1
              ])) : a ? m.setAttribute("aria-label", e("gutter.code-folding.closed.aria-label", "Toggle code folding, rows $0 through $1", [
                a.start.row + 1,
                a.end.row + 1
              ])) : m.setAttribute("aria-label", e("gutter.code-folding.open.aria-label", "Toggle code folding, row $0", [c + 1])), W ? (m.setAttribute("aria-expanded", "false"), m.setAttribute("title", e("gutter.code-folding.closed.title", "Unfold code"))) : (m.setAttribute("aria-expanded", "true"), m.setAttribute("title", e("gutter.code-folding.open.title", "Fold code")));
            } else
              m && (f.setStyle(m.style, "display", "none"), m.setAttribute("tabindex", "0"), m.removeAttribute("role"), m.removeAttribute("aria-label"));
            var z = this.session.$gutterCustomWidgets[c];
            if (z ? this.$addCustomWidget(c, z, t) : $ && this.$removeCustomWidget(c, t), B && this.$showFoldedAnnotations) {
              h.className = "ace_gutter_annotation", _.className = k, _.className += H, f.setStyle(_.style, "height", d), f.setStyle(h.style, "display", "block"), f.setStyle(h.style, "height", d);
              var U;
              switch (H) {
                case " ace_error_fold":
                  U = e("gutter.annotation.aria-label.error", "Error, read annotations row $0", [I]);
                  break;
                case " ace_security_fold":
                  U = e("gutter.annotation.aria-label.security", "Security finding, read annotations row $0", [I]);
                  break;
                case " ace_warning_fold":
                  U = e("gutter.annotation.aria-label.warning", "Warning, read annotations row $0", [I]);
                  break;
              }
              h.setAttribute("aria-label", U), h.setAttribute("tabindex", "-1"), h.setAttribute("role", "button");
            } else if (this.$annotations[c]) {
              h.className = "ace_gutter_annotation", _.className = k, this.$useSvgGutterIcons ? _.className += this.$annotations[c].className : u.classList.add(this.$annotations[c].className.replace(" ", "")), f.setStyle(_.style, "height", d), f.setStyle(h.style, "display", "block"), f.setStyle(h.style, "height", d);
              var U;
              switch (this.$annotations[c].className) {
                case " ace_error":
                  U = e("gutter.annotation.aria-label.error", "Error, read annotations row $0", [I]);
                  break;
                case " ace_security":
                  U = e("gutter.annotation.aria-label.security", "Security finding, read annotations row $0", [I]);
                  break;
                case " ace_warning":
                  U = e("gutter.annotation.aria-label.warning", "Warning, read annotations row $0", [I]);
                  break;
                case " ace_info":
                  U = e("gutter.annotation.aria-label.info", "Info, read annotations row $0", [I]);
                  break;
                case " ace_hint":
                  U = e("gutter.annotation.aria-label.hint", "Suggestion, read annotations row $0", [I]);
                  break;
              }
              h.setAttribute("aria-label", U), h.setAttribute("tabindex", "-1"), h.setAttribute("role", "button");
            } else
              f.setStyle(h.style, "display", "none"), h.removeAttribute("aria-label"), h.removeAttribute("role"), h.setAttribute("tabindex", "0");
            return I !== y.data && (y.data = I), u.className != b && (u.className = b), f.setStyle(t.element.style, "height", this.$lines.computeLineHeight(c, o, w) + "px"), f.setStyle(t.element.style, "top", this.$lines.computeLineTop(c, o, w) + "px"), t.text = I, h.style.display === "none" && m.style.display === "none" && !z ? t.element.setAttribute("aria-hidden", !0) : t.element.setAttribute("aria-hidden", !1), t;
          }, r.prototype.setHighlightGutterLine = function(t) {
            this.$highlightGutterLine = t;
          }, r.prototype.setShowLineNumbers = function(t) {
            this.$renderer = !t && {
              getWidth: function() {
                return 0;
              },
              getText: function() {
                return "";
              }
            };
          }, r.prototype.getShowLineNumbers = function() {
            return this.$showLineNumbers;
          }, r.prototype.setShowFoldWidgets = function(t) {
            t ? f.addCssClass(this.element, "ace_folding-enabled") : f.removeCssClass(this.element, "ace_folding-enabled"), this.$showFoldWidgets = t, this.$padding = null;
          }, r.prototype.getShowFoldWidgets = function() {
            return this.$showFoldWidgets;
          }, r.prototype.$hideFoldWidget = function(t, o) {
            var a = o || this.$getGutterCell(t);
            if (a && a.element) {
              var c = a.element.childNodes[1];
              c && f.setStyle(c.style, "display", "none");
            }
          }, r.prototype.$showFoldWidget = function(t, o) {
            var a = o || this.$getGutterCell(t);
            if (a && a.element) {
              var c = a.element.childNodes[1];
              c && this.session.foldWidgets && this.session.foldWidgets[a.row] && f.setStyle(c.style, "display", "inline-block");
            }
          }, r.prototype.$getGutterCell = function(t) {
            var o = this.$lines.cells, a = this.session.documentToScreenRow(t, 0);
            return o[t - this.config.firstRowScreen - (t - a)];
          }, r.prototype.$addCustomWidget = function(t, o, a) {
            var c = o.className, u = o.label, w = o.title, y = o.callbacks;
            this.session.$gutterCustomWidgets[t] = { className: c, label: u, title: w, callbacks: y }, this.$hideFoldWidget(t, a);
            var m = a || this.$getGutterCell(t);
            if (m && m.element) {
              var h = m.element.querySelector(".ace_custom-widget");
              h && h.remove(), h = f.createElement("span"), h.className = "ace_custom-widget ".concat(c), h.setAttribute("tabindex", "-1"), h.setAttribute("role", "button"), h.setAttribute("aria-label", u), h.setAttribute("title", w), f.setStyle(h.style, "display", "inline-block"), f.setStyle(h.style, "height", "inherit"), y && y.onClick && h.addEventListener("click", function($) {
                y.onClick($, t), $.stopPropagation();
              }), m.element.appendChild(h);
            }
          }, r.prototype.$removeCustomWidget = function(t, o) {
            delete this.session.$gutterCustomWidgets[t], this.$showFoldWidget(t, o);
            var a = o || this.$getGutterCell(t);
            if (a && a.element) {
              var c = a.element.querySelector(".ace_custom-widget");
              c && a.element.removeChild(c);
            }
          }, r.prototype.$computePadding = function() {
            if (!this.element.firstChild)
              return { left: 0, right: 0 };
            var t = f.computedStyle(
              /**@type{Element}*/
              this.element.firstChild
            );
            return this.$padding = {}, this.$padding.left = (parseInt(t.borderLeftWidth) || 0) + (parseInt(t.paddingLeft) || 0) + 1, this.$padding.right = (parseInt(t.borderRightWidth) || 0) + (parseInt(t.paddingRight) || 0), this.$padding;
          }, r.prototype.getRegion = function(t) {
            var o = this.$padding || this.$computePadding(), a = this.element.getBoundingClientRect();
            if (t.x < o.left + a.left)
              return "markers";
            if (this.$showFoldWidgets && t.x > a.right - o.right)
              return "foldWidgets";
          }, r;
        }()
      );
      n.prototype.$fixedWidth = !1, n.prototype.$highlightGutterLine = !0, n.prototype.$renderer = "", n.prototype.$showLineNumbers = !0, n.prototype.$showFoldWidgets = !0, v.implement(n.prototype, s);
      function i(r) {
        var t = document.createTextNode("");
        r.appendChild(t);
        var o = f.createElement("span");
        r.appendChild(o);
        var a = f.createElement("span");
        r.appendChild(a);
        var c = f.createElement("span");
        return a.appendChild(c), r;
      }
      S.Gutter = n;
    }), ace.define("ace/layer/marker", ["require", "exports", "module", "ace/range", "ace/lib/dom"], function(M, S, R) {
      var f = M("../range").Range, v = M("../lib/dom"), p = (
        /** @class */
        function() {
          function l(e) {
            this.element = v.createElement("div"), this.element.className = "ace_layer ace_marker-layer", e.appendChild(this.element);
          }
          return l.prototype.setPadding = function(e) {
            this.$padding = e;
          }, l.prototype.setSession = function(e) {
            this.session = e;
          }, l.prototype.setMarkers = function(e) {
            this.markers = e;
          }, l.prototype.elt = function(e, n) {
            var i = this.i != -1 && this.element.childNodes[this.i];
            i ? this.i++ : (i = document.createElement("div"), this.element.appendChild(i), this.i = -1), i.style.cssText = n, i.className = e;
          }, l.prototype.update = function(e) {
            if (e) {
              this.config = e, this.i = 0;
              var n;
              for (var i in this.markers) {
                var r = this.markers[i];
                if (!r.range) {
                  r.update(n, this, this.session, e);
                  continue;
                }
                var t = r.range.clipRows(e.firstRow, e.lastRow);
                if (!t.isEmpty())
                  if (t = t.toScreenRange(this.session), r.renderer) {
                    var o = this.$getTop(t.start.row, e), a = this.$padding + t.start.column * e.characterWidth;
                    r.renderer(n, t, a, o, e);
                  } else r.type == "fullLine" ? this.drawFullLineMarker(n, t, r.clazz, e) : r.type == "screenLine" ? this.drawScreenLineMarker(n, t, r.clazz, e) : t.isMultiLine() ? r.type == "text" ? this.drawTextMarker(n, t, r.clazz, e) : this.drawMultiLineMarker(n, t, r.clazz, e) : this.drawSingleLineMarker(n, t, r.clazz + " ace_start ace_br15", e);
              }
              if (this.i != -1)
                for (; this.i < this.element.childElementCount; )
                  this.element.removeChild(this.element.lastChild);
            }
          }, l.prototype.$getTop = function(e, n) {
            return (e - n.firstRowScreen) * n.lineHeight;
          }, l.prototype.drawTextMarker = function(e, n, i, r, t) {
            for (var o = this.session, a = n.start.row, c = n.end.row, u = a, w = 0, y = 0, m = o.getScreenLastRowColumn(u), h = new f(u, n.start.column, u, y); u <= c; u++)
              h.start.row = h.end.row = u, h.start.column = u == a ? n.start.column : o.getRowWrapIndent(u), h.end.column = m, w = y, y = m, m = u + 1 < c ? o.getScreenLastRowColumn(u + 1) : u == c ? 0 : n.end.column, this.drawSingleLineMarker(e, h, i + (u == a ? " ace_start" : "") + " ace_br" + s(u == a || u == a + 1 && n.start.column, w < y, y > m, u == c), r, u == c ? 0 : 1, t);
          }, l.prototype.drawMultiLineMarker = function(e, n, i, r, t) {
            var o = this.$padding, a = r.lineHeight, c = this.$getTop(n.start.row, r), u = o + n.start.column * r.characterWidth;
            if (t = t || "", this.session.$bidiHandler.isBidiRow(n.start.row)) {
              var w = n.clone();
              w.end.row = w.start.row, w.end.column = this.session.getLine(w.start.row).length, this.drawBidiSingleLineMarker(e, w, i + " ace_br1 ace_start", r, null, t);
            } else
              this.elt(i + " ace_br1 ace_start", "height:" + a + "px;right:" + o + "px;top:" + c + "px;left:" + u + "px;" + (t || ""));
            if (this.session.$bidiHandler.isBidiRow(n.end.row)) {
              var w = n.clone();
              w.start.row = w.end.row, w.start.column = 0, this.drawBidiSingleLineMarker(e, w, i + " ace_br12", r, null, t);
            } else {
              c = this.$getTop(n.end.row, r);
              var y = n.end.column * r.characterWidth;
              this.elt(i + " ace_br12", "height:" + a + "px;width:" + y + "px;top:" + c + "px;left:" + o + "px;" + (t || ""));
            }
            if (a = (n.end.row - n.start.row - 1) * r.lineHeight, !(a <= 0)) {
              c = this.$getTop(n.start.row + 1, r);
              var m = (n.start.column ? 1 : 0) | (n.end.column ? 0 : 8);
              this.elt(i + (m ? " ace_br" + m : ""), "height:" + a + "px;right:" + o + "px;top:" + c + "px;left:" + o + "px;" + (t || ""));
            }
          }, l.prototype.drawSingleLineMarker = function(e, n, i, r, t, o) {
            if (this.session.$bidiHandler.isBidiRow(n.start.row))
              return this.drawBidiSingleLineMarker(e, n, i, r, t, o);
            var a = r.lineHeight, c = (n.end.column + (t || 0) - n.start.column) * r.characterWidth, u = this.$getTop(n.start.row, r), w = this.$padding + n.start.column * r.characterWidth;
            this.elt(i, "height:" + a + "px;width:" + c + "px;top:" + u + "px;left:" + w + "px;" + (o || ""));
          }, l.prototype.drawBidiSingleLineMarker = function(e, n, i, r, t, o) {
            var a = r.lineHeight, c = this.$getTop(n.start.row, r), u = this.$padding, w = this.session.$bidiHandler.getSelections(n.start.column, n.end.column);
            w.forEach(function(y) {
              this.elt(i, "height:" + a + "px;width:" + (y.width + (t || 0)) + "px;top:" + c + "px;left:" + (u + y.left) + "px;" + (o || ""));
            }, this);
          }, l.prototype.drawFullLineMarker = function(e, n, i, r, t) {
            var o = this.$getTop(n.start.row, r), a = r.lineHeight;
            n.start.row != n.end.row && (a += this.$getTop(n.end.row, r) - o), this.elt(i, "height:" + a + "px;top:" + o + "px;left:0;right:0;" + (t || ""));
          }, l.prototype.drawScreenLineMarker = function(e, n, i, r, t) {
            var o = this.$getTop(n.start.row, r), a = r.lineHeight;
            this.elt(i, "height:" + a + "px;top:" + o + "px;left:0;right:0;" + (t || ""));
          }, l;
        }()
      );
      p.prototype.$padding = 0;
      function s(l, e, n, i) {
        return (l ? 1 : 0) | (e ? 2 : 0) | (n ? 4 : 0) | (i ? 8 : 0);
      }
      S.Marker = p;
    }), ace.define("ace/layer/text_util", ["require", "exports", "module"], function(M, S, R) {
      var f = /* @__PURE__ */ new Set(["text", "rparen", "lparen"]);
      S.isTextToken = function(v) {
        return f.has(v);
      };
    }), ace.define("ace/layer/text", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/layer/lines", "ace/lib/event_emitter", "ace/config", "ace/layer/text_util"], function(M, S, R) {
      var f = M("../lib/oop"), v = M("../lib/dom"), p = M("../lib/lang"), s = M("./lines").Lines, l = M("../lib/event_emitter").EventEmitter, e = M("../config").nls, n = M("./text_util").isTextToken, i = (
        /** @class */
        function() {
          function r(t) {
            this.dom = v, this.element = this.dom.createElement("div"), this.element.className = "ace_layer ace_text-layer", t.appendChild(this.element), this.$updateEolChar = this.$updateEolChar.bind(this), this.$lines = new s(this.element);
          }
          return r.prototype.$updateEolChar = function() {
            var t = this.session.doc, o = t.getNewLineCharacter() == `
` && t.getNewLineMode() != "windows", a = o ? this.EOL_CHAR_LF : this.EOL_CHAR_CRLF;
            if (this.EOL_CHAR != a)
              return this.EOL_CHAR = a, !0;
          }, r.prototype.setPadding = function(t) {
            this.$padding = t, this.element.style.margin = "0 " + t + "px";
          }, r.prototype.getLineHeight = function() {
            return this.$fontMetrics.$characterSize.height || 0;
          }, r.prototype.getCharacterWidth = function() {
            return this.$fontMetrics.$characterSize.width || 0;
          }, r.prototype.$setFontMetrics = function(t) {
            this.$fontMetrics = t, this.$fontMetrics.on(
              "changeCharacterSize",
              (function(o) {
                this._signal("changeCharacterSize", o);
              }).bind(this)
            ), this.$pollSizeChanges();
          }, r.prototype.checkForSizeChanges = function() {
            this.$fontMetrics.checkForSizeChanges();
          }, r.prototype.$pollSizeChanges = function() {
            return this.$pollSizeChangesTimer = this.$fontMetrics.$pollSizeChanges();
          }, r.prototype.setSession = function(t) {
            this.session = t, t && this.$computeTabString();
          }, r.prototype.setShowInvisibles = function(t) {
            return this.showInvisibles == t ? !1 : (this.showInvisibles = t, typeof t == "string" ? (this.showSpaces = /tab/i.test(t), this.showTabs = /space/i.test(t), this.showEOL = /eol/i.test(t)) : this.showSpaces = this.showTabs = this.showEOL = t, this.$computeTabString(), !0);
          }, r.prototype.setDisplayIndentGuides = function(t) {
            return this.displayIndentGuides == t ? !1 : (this.displayIndentGuides = t, this.$computeTabString(), !0);
          }, r.prototype.setHighlightIndentGuides = function(t) {
            return this.$highlightIndentGuides === t ? !1 : (this.$highlightIndentGuides = t, t);
          }, r.prototype.$computeTabString = function() {
            var t = this.session.getTabSize();
            this.tabSize = t;
            for (var o = this.$tabStrings = [0], a = 1; a < t + 1; a++)
              if (this.showTabs) {
                var c = this.dom.createElement("span");
                c.className = "ace_invisible ace_invisible_tab", c.textContent = p.stringRepeat(this.TAB_CHAR, a), o.push(c);
              } else
                o.push(this.dom.createTextNode(p.stringRepeat(" ", a), this.element));
            if (this.displayIndentGuides) {
              this.$indentGuideRe = /\s\S| \t|\t |\s$/;
              var u = "ace_indent-guide", w = this.showSpaces ? " ace_invisible ace_invisible_space" : "", y = this.showSpaces ? p.stringRepeat(this.SPACE_CHAR, this.tabSize) : p.stringRepeat(" ", this.tabSize), m = this.showTabs ? " ace_invisible ace_invisible_tab" : "", h = this.showTabs ? p.stringRepeat(this.TAB_CHAR, this.tabSize) : y, c = this.dom.createElement("span");
              c.className = u + w, c.textContent = y, this.$tabStrings[" "] = c;
              var c = this.dom.createElement("span");
              c.className = u + m, c.textContent = h, this.$tabStrings["	"] = c;
            }
          }, r.prototype.updateLines = function(t, o, a) {
            if (this.config.lastRow != t.lastRow || this.config.firstRow != t.firstRow)
              return this.update(t);
            this.config = t;
            for (var c = Math.max(o, t.firstRow), u = Math.min(a, t.lastRow), w = this.element.childNodes, y = 0, h = t.firstRow; h < c; h++) {
              var $ = this.session.getFoldLine(h);
              if ($)
                if ($.containsRow(c)) {
                  c = $.start.row;
                  break;
                } else
                  h = $.end.row;
              y++;
            }
            for (var m = !1, h = c, $ = this.session.getNextFoldLine(h), _ = $ ? $.start.row : 1 / 0; h > _ && (h = $.end.row + 1, $ = this.session.getNextFoldLine(h, $), _ = $ ? $.start.row : 1 / 0), !(h > u); ) {
              var L = w[y++];
              if (L) {
                this.dom.removeChildren(L), this.$renderLine(L, h, h == _ ? $ : !1), m && (L.style.top = this.$lines.computeLineTop(h, t, this.session) + "px");
                var x = t.lineHeight * this.session.getRowLength(h) + "px";
                L.style.height != x && (m = !0, L.style.height = x);
              }
              h++;
            }
            if (m)
              for (; y < this.$lines.cells.length; ) {
                var D = this.$lines.cells[y++];
                D.element.style.top = this.$lines.computeLineTop(D.row, t, this.session) + "px";
              }
          }, r.prototype.scrollLines = function(t) {
            var o = this.config;
            if (this.config = t, this.$lines.pageChanged(o, t))
              return this.update(t);
            this.$lines.moveContainer(t);
            var a = t.lastRow, c = o ? o.lastRow : -1;
            if (!o || c < t.firstRow)
              return this.update(t);
            if (a < o.firstRow)
              return this.update(t);
            if (!o || o.lastRow < t.firstRow)
              return this.update(t);
            if (t.lastRow < o.firstRow)
              return this.update(t);
            if (o.firstRow < t.firstRow)
              for (var u = this.session.getFoldedRowCount(o.firstRow, t.firstRow - 1); u > 0; u--)
                this.$lines.shift();
            if (o.lastRow > t.lastRow)
              for (var u = this.session.getFoldedRowCount(t.lastRow + 1, o.lastRow); u > 0; u--)
                this.$lines.pop();
            t.firstRow < o.firstRow && this.$lines.unshift(this.$renderLinesFragment(t, t.firstRow, o.firstRow - 1)), t.lastRow > o.lastRow && this.$lines.push(this.$renderLinesFragment(t, o.lastRow + 1, t.lastRow)), this.$highlightIndentGuide();
          }, r.prototype.$renderLinesFragment = function(t, o, a) {
            for (var c = [], u = o, w = this.session.getNextFoldLine(u), y = w ? w.start.row : 1 / 0; u > y && (u = w.end.row + 1, w = this.session.getNextFoldLine(u, w), y = w ? w.start.row : 1 / 0), !(u > a); ) {
              var m = this.$lines.createCell(u, t, this.session), h = m.element;
              this.dom.removeChildren(h), v.setStyle(h.style, "height", this.$lines.computeLineHeight(u, t, this.session) + "px"), v.setStyle(h.style, "top", this.$lines.computeLineTop(u, t, this.session) + "px"), this.$renderLine(h, u, u == y ? w : !1), this.$useLineGroups() ? h.className = "ace_line_group" : h.className = "ace_line", c.push(m), u++;
            }
            return c;
          }, r.prototype.update = function(t) {
            this.$lines.moveContainer(t), this.config = t;
            for (var o = t.firstRow, a = t.lastRow, c = this.$lines; c.getLength(); )
              c.pop();
            c.push(this.$renderLinesFragment(t, o, a));
          }, r.prototype.$renderToken = function(t, o, a, c) {
            for (var u = this, w = /(\t)|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\uFEFF\uFFF9-\uFFFC\u2066\u2067\u2068\u202A\u202B\u202D\u202E\u202C\u2069\u2060\u2061\u2062\u2063\u2064\u206A\u206B\u206B\u206C\u206D\u206E\u206F]+)|(\u3000)|([\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g, y = this.dom.createFragment(this.element), m, h = 0; m = w.exec(c); ) {
              var $ = m[1], _ = m[2], L = m[3], x = m[4], D = m[5];
              if (!(!u.showSpaces && _)) {
                var A = h != m.index ? c.slice(h, m.index) : "";
                if (h = m.index + m[0].length, A && y.appendChild(this.dom.createTextNode(A, this.element)), $) {
                  var C = u.session.getScreenTabSize(o + m.index);
                  y.appendChild(u.$tabStrings[C].cloneNode(!0)), o += C - 1;
                } else if (_)
                  if (u.showSpaces) {
                    var g = this.dom.createElement("span");
                    g.className = "ace_invisible ace_invisible_space", g.textContent = p.stringRepeat(u.SPACE_CHAR, _.length), y.appendChild(g);
                  } else
                    y.appendChild(this.dom.createTextNode(_, this.element));
                else if (L) {
                  var g = this.dom.createElement("span");
                  g.className = "ace_invisible ace_invisible_space ace_invalid", g.textContent = p.stringRepeat(u.SPACE_CHAR, L.length), y.appendChild(g);
                } else if (x) {
                  o += 1;
                  var g = this.dom.createElement("span");
                  g.style.width = u.config.characterWidth * 2 + "px", g.className = u.showSpaces ? "ace_cjk ace_invisible ace_invisible_space" : "ace_cjk", g.textContent = u.showSpaces ? u.SPACE_CHAR : x, y.appendChild(g);
                } else if (D) {
                  o += 1;
                  var g = this.dom.createElement("span");
                  g.style.width = u.config.characterWidth * 2 + "px", g.className = "ace_cjk", g.textContent = D, y.appendChild(g);
                }
              }
            }
            if (y.appendChild(this.dom.createTextNode(h ? c.slice(h) : c, this.element)), n(a.type))
              t.appendChild(y);
            else {
              var d = "ace_" + a.type.replace(/\./g, " ace_"), g = this.dom.createElement("span");
              a.type == "fold" && (g.style.width = a.value.length * this.config.characterWidth + "px", g.setAttribute("title", e("inline-fold.closed.title", "Unfold code"))), g.className = d, g.appendChild(y), t.appendChild(g);
            }
            return o + c.length;
          }, r.prototype.renderIndentGuide = function(t, o, a) {
            var c = o.search(this.$indentGuideRe);
            if (c <= 0 || c >= a)
              return o;
            if (o[0] == " ") {
              c -= c % this.tabSize;
              for (var u = c / this.tabSize, w = 0; w < u; w++)
                t.appendChild(this.$tabStrings[" "].cloneNode(!0));
              return this.$highlightIndentGuide(), o.substr(c);
            } else if (o[0] == "	") {
              for (var w = 0; w < c; w++)
                t.appendChild(this.$tabStrings["	"].cloneNode(!0));
              return this.$highlightIndentGuide(), o.substr(c);
            }
            return this.$highlightIndentGuide(), o;
          }, r.prototype.$highlightIndentGuide = function() {
            if (!(!this.$highlightIndentGuides || !this.displayIndentGuides)) {
              this.$highlightIndentGuideMarker = {
                indentLevel: void 0,
                start: void 0,
                end: void 0,
                dir: void 0
              };
              var t = this.session.doc.$lines;
              if (t) {
                var o = this.session.selection.getCursor(), a = /^\s*/.exec(this.session.doc.getLine(o.row))[0].length, c = Math.floor(a / this.tabSize);
                this.$highlightIndentGuideMarker = {
                  indentLevel: c,
                  start: o.row
                };
                var u = this.session.$bracketHighlight;
                if (u) {
                  for (var w = this.session.$bracketHighlight.ranges, y = 0; y < w.length; y++)
                    if (o.row !== w[y].start.row) {
                      this.$highlightIndentGuideMarker.end = w[y].start.row + 1, o.row > w[y].start.row ? this.$highlightIndentGuideMarker.dir = -1 : this.$highlightIndentGuideMarker.dir = 1;
                      break;
                    }
                }
                if (!this.$highlightIndentGuideMarker.end && t[o.row] !== "" && o.column === t[o.row].length) {
                  this.$highlightIndentGuideMarker.dir = 1;
                  for (var y = o.row + 1; y < t.length; y++) {
                    var m = t[y], h = /^\s*/.exec(m)[0].length;
                    if (m !== "" && (this.$highlightIndentGuideMarker.end = y, h <= a))
                      break;
                  }
                }
                this.$renderHighlightIndentGuide();
              }
            }
          }, r.prototype.$clearActiveIndentGuide = function() {
            for (var t = this.element.querySelectorAll(".ace_indent-guide-active"), o = 0; o < t.length; o++)
              t[o].classList.remove("ace_indent-guide-active");
          }, r.prototype.$setIndentGuideActive = function(t, o) {
            var a = this.session.doc.getLine(t.row);
            if (a !== "") {
              var c = t.element;
              if (t.element.classList && t.element.classList.contains("ace_line_group"))
                if (t.element.childNodes.length > 0)
                  c = t.element.childNodes[0];
                else
                  return;
              var u = c.childNodes;
              if (u) {
                var w = u[o - 1];
                w && w.classList && w.classList.contains("ace_indent-guide") && w.classList.add("ace_indent-guide-active");
              }
            }
          }, r.prototype.$renderHighlightIndentGuide = function() {
            if (this.$lines) {
              var t = this.$lines.cells;
              this.$clearActiveIndentGuide();
              var o = this.$highlightIndentGuideMarker.indentLevel;
              if (o !== 0)
                if (this.$highlightIndentGuideMarker.dir === 1)
                  for (var a = 0; a < t.length; a++) {
                    var c = t[a];
                    if (this.$highlightIndentGuideMarker.end && c.row >= this.$highlightIndentGuideMarker.start + 1) {
                      if (c.row >= this.$highlightIndentGuideMarker.end)
                        break;
                      this.$setIndentGuideActive(c, o);
                    }
                  }
                else
                  for (var a = t.length - 1; a >= 0; a--) {
                    var c = t[a];
                    if (this.$highlightIndentGuideMarker.end && c.row < this.$highlightIndentGuideMarker.start) {
                      if (c.row < this.$highlightIndentGuideMarker.end)
                        break;
                      this.$setIndentGuideActive(c, o);
                    }
                  }
            }
          }, r.prototype.$createLineElement = function(t) {
            var o = this.dom.createElement("div");
            return o.className = "ace_line", o.style.height = this.config.lineHeight + "px", o;
          }, r.prototype.$renderWrappedLine = function(t, o, a) {
            var c = 0, u = 0, w = a[0], y = 0, m = this.$createLineElement();
            t.appendChild(m);
            for (var h = 0; h < o.length; h++) {
              var $ = o[h], _ = $.value;
              if (h == 0 && this.displayIndentGuides) {
                if (c = _.length, _ = this.renderIndentGuide(m, _, w), !_)
                  continue;
                c -= _.length;
              }
              if (c + _.length < w)
                y = this.$renderToken(m, y, $, _), c += _.length;
              else {
                for (; c + _.length >= w; )
                  y = this.$renderToken(m, y, $, _.substring(0, w - c)), _ = _.substring(w - c), c = w, m = this.$createLineElement(), t.appendChild(m), m.appendChild(this.dom.createTextNode(p.stringRepeat(" ", a.indent), this.element)), u++, y = 0, w = a[u] || Number.MAX_VALUE;
                _.length != 0 && (c += _.length, y = this.$renderToken(m, y, $, _));
              }
            }
            a[a.length - 1] > this.MAX_LINE_LENGTH && this.$renderOverflowMessage(m, y, null, "", !0);
          }, r.prototype.$renderSimpleLine = function(t, o) {
            for (var a = 0, c = 0; c < o.length; c++) {
              var u = o[c], w = u.value;
              if (!(c == 0 && this.displayIndentGuides && (w = this.renderIndentGuide(t, w), !w))) {
                if (a + w.length > this.MAX_LINE_LENGTH)
                  return this.$renderOverflowMessage(t, a, u, w);
                a = this.$renderToken(t, a, u, w);
              }
            }
          }, r.prototype.$renderOverflowMessage = function(t, o, a, c, u) {
            a && this.$renderToken(t, o, a, c.slice(0, this.MAX_LINE_LENGTH - o));
            var w = this.dom.createElement("span");
            w.className = "ace_inline_button ace_keyword ace_toggle_wrap", w.textContent = u ? "<hide>" : "<click to see more...>", t.appendChild(w);
          }, r.prototype.$renderLine = function(t, o, a) {
            if (!a && a != !1 && (a = this.session.getFoldLine(o)), a)
              var c = this.$getFoldLineTokens(o, a);
            else
              var c = this.session.getTokens(o);
            var u = t;
            if (c.length) {
              var w = this.session.getRowSplitData(o);
              if (w && w.length) {
                this.$renderWrappedLine(t, c, w);
                var u = t.lastChild;
              } else {
                var u = t;
                this.$useLineGroups() && (u = this.$createLineElement(), t.appendChild(u)), this.$renderSimpleLine(u, c);
              }
            } else this.$useLineGroups() && (u = this.$createLineElement(), t.appendChild(u));
            if (this.showEOL && u) {
              a && (o = a.end.row);
              var y = this.dom.createElement("span");
              y.className = "ace_invisible ace_invisible_eol", y.textContent = o == this.session.getLength() - 1 ? this.EOF_CHAR : this.EOL_CHAR, u.appendChild(y);
            }
          }, r.prototype.$getFoldLineTokens = function(t, o) {
            var a = this.session, c = [];
            function u(y, m, h) {
              for (var $ = 0, _ = 0; _ + y[$].value.length < m; )
                if (_ += y[$].value.length, $++, $ == y.length)
                  return;
              if (_ != m) {
                var L = y[$].value.substring(m - _);
                L.length > h - m && (L = L.substring(0, h - m)), c.push({
                  type: y[$].type,
                  value: L
                }), _ = m + L.length, $ += 1;
              }
              for (; _ < h && $ < y.length; ) {
                var L = y[$].value;
                L.length + _ > h ? c.push({
                  type: y[$].type,
                  value: L.substring(0, h - _)
                }) : c.push(y[$]), _ += L.length, $ += 1;
              }
            }
            var w = a.getTokens(t);
            return o.walk(function(y, m, h, $, _) {
              y != null ? c.push({
                type: "fold",
                value: y
              }) : (_ && (w = a.getTokens(m)), w.length && u(w, $, h));
            }, o.end.row, this.session.getLine(o.end.row).length), c;
          }, r.prototype.$useLineGroups = function() {
            return this.session.getUseWrapMode();
          }, r;
        }()
      );
      i.prototype.EOF_CHAR = "¶", i.prototype.EOL_CHAR_LF = "¬", i.prototype.EOL_CHAR_CRLF = "¤", i.prototype.EOL_CHAR = i.prototype.EOL_CHAR_LF, i.prototype.TAB_CHAR = "—", i.prototype.SPACE_CHAR = "·", i.prototype.$padding = 0, i.prototype.MAX_LINE_LENGTH = 1e4, i.prototype.showInvisibles = !1, i.prototype.showSpaces = !1, i.prototype.showTabs = !1, i.prototype.showEOL = !1, i.prototype.displayIndentGuides = !0, i.prototype.$highlightIndentGuides = !0, i.prototype.$tabStrings = [], i.prototype.destroy = {}, i.prototype.onChangeTabSize = i.prototype.$computeTabString, f.implement(i.prototype, l), S.Text = i;
    }), ace.define("ace/layer/cursor", ["require", "exports", "module", "ace/lib/dom"], function(M, S, R) {
      var f = M("../lib/dom"), v = (
        /** @class */
        function() {
          function p(s) {
            this.element = f.createElement("div"), this.element.className = "ace_layer ace_cursor-layer", s.appendChild(this.element), this.isVisible = !1, this.isBlinking = !0, this.blinkInterval = 1e3, this.smoothBlinking = !1, this.cursors = [], this.cursor = this.addCursor(), f.addCssClass(this.element, "ace_hidden-cursors"), this.$updateCursors = this.$updateOpacity.bind(this);
          }
          return p.prototype.$updateOpacity = function(s) {
            for (var l = this.cursors, e = l.length; e--; )
              f.setStyle(l[e].style, "opacity", s ? "" : "0");
          }, p.prototype.$startCssAnimation = function() {
            for (var s = this.cursors, l = s.length; l--; )
              s[l].style.animationDuration = this.blinkInterval + "ms";
            this.$isAnimating = !0, setTimeout((function() {
              this.$isAnimating && f.addCssClass(this.element, "ace_animate-blinking");
            }).bind(this));
          }, p.prototype.$stopCssAnimation = function() {
            this.$isAnimating = !1, f.removeCssClass(this.element, "ace_animate-blinking");
          }, p.prototype.setPadding = function(s) {
            this.$padding = s;
          }, p.prototype.setSession = function(s) {
            this.session = s;
          }, p.prototype.setBlinking = function(s) {
            s != this.isBlinking && (this.isBlinking = s, this.restartTimer());
          }, p.prototype.setBlinkInterval = function(s) {
            s != this.blinkInterval && (this.blinkInterval = s, this.restartTimer());
          }, p.prototype.setSmoothBlinking = function(s) {
            s != this.smoothBlinking && (this.smoothBlinking = s, f.setCssClass(this.element, "ace_smooth-blinking", s), this.$updateCursors(!0), this.restartTimer());
          }, p.prototype.addCursor = function() {
            var s = f.createElement("div");
            return s.className = "ace_cursor", this.element.appendChild(s), this.cursors.push(s), s;
          }, p.prototype.removeCursor = function() {
            if (this.cursors.length > 1) {
              var s = this.cursors.pop();
              return s.parentNode.removeChild(s), s;
            }
          }, p.prototype.hideCursor = function() {
            this.isVisible = !1, f.addCssClass(this.element, "ace_hidden-cursors"), this.restartTimer();
          }, p.prototype.showCursor = function() {
            this.isVisible = !0, f.removeCssClass(this.element, "ace_hidden-cursors"), this.restartTimer();
          }, p.prototype.restartTimer = function() {
            var s = this.$updateCursors;
            if (clearInterval(this.intervalId), clearTimeout(this.timeoutId), this.$stopCssAnimation(), this.smoothBlinking && (this.$isSmoothBlinking = !1, f.removeCssClass(this.element, "ace_smooth-blinking")), s(!0), !this.isBlinking || !this.blinkInterval || !this.isVisible) {
              this.$stopCssAnimation();
              return;
            }
            if (this.smoothBlinking && (this.$isSmoothBlinking = !0, setTimeout((function() {
              this.$isSmoothBlinking && f.addCssClass(this.element, "ace_smooth-blinking");
            }).bind(this))), f.HAS_CSS_ANIMATION)
              this.$startCssAnimation();
            else {
              var l = (
                /**@this{Cursor}*/
                (function() {
                  this.timeoutId = setTimeout(function() {
                    s(!1);
                  }, 0.6 * this.blinkInterval);
                }).bind(this)
              );
              this.intervalId = setInterval(function() {
                s(!0), l();
              }, this.blinkInterval), l();
            }
          }, p.prototype.getPixelPosition = function(s, l) {
            if (!this.config || !this.session)
              return { left: 0, top: 0 };
            s || (s = this.session.selection.getCursor());
            var e = this.session.documentToScreenPosition(s), n = this.$padding + (this.session.$bidiHandler.isBidiRow(e.row, s.row) ? this.session.$bidiHandler.getPosLeft(e.column) : e.column * this.config.characterWidth), i = (e.row - (l ? this.config.firstRowScreen : 0)) * this.config.lineHeight;
            return { left: n, top: i };
          }, p.prototype.isCursorInView = function(s, l) {
            return s.top >= 0 && s.top < l.maxHeight;
          }, p.prototype.update = function(s) {
            this.config = s;
            var l = this.session.$selectionMarkers, e = 0, n = 0;
            (l === void 0 || l.length === 0) && (l = [{ cursor: null }]);
            for (var e = 0, i = l.length; e < i; e++) {
              var r = this.getPixelPosition(l[e].cursor, !0);
              if (!((r.top > s.height + s.offset || r.top < 0) && e > 1)) {
                var t = this.cursors[n++] || this.addCursor(), o = t.style;
                this.drawCursor ? this.drawCursor(t, r, s, l[e], this.session) : this.isCursorInView(r, s) ? (f.setStyle(o, "display", "block"), f.translate(t, r.left, r.top), f.setStyle(o, "width", Math.round(s.characterWidth) + "px"), f.setStyle(o, "height", s.lineHeight + "px")) : f.setStyle(o, "display", "none");
              }
            }
            for (; this.cursors.length > n; )
              this.removeCursor();
            var a = this.session.getOverwrite();
            this.$setOverwrite(a), this.$pixelPos = r, this.restartTimer();
          }, p.prototype.$setOverwrite = function(s) {
            s != this.overwrite && (this.overwrite = s, s ? f.addCssClass(this.element, "ace_overwrite-cursors") : f.removeCssClass(this.element, "ace_overwrite-cursors"));
          }, p.prototype.destroy = function() {
            clearInterval(this.intervalId), clearTimeout(this.timeoutId);
          }, p;
        }()
      );
      v.prototype.$padding = 0, v.prototype.drawCursor = null, S.Cursor = v;
    }), ace.define("ace/scrollbar", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/event", "ace/lib/event_emitter"], function(M, S, R) {
      var f = this && this.__extends || /* @__PURE__ */ function() {
        var t = function(o, a) {
          return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, u) {
            c.__proto__ = u;
          } || function(c, u) {
            for (var w in u) Object.prototype.hasOwnProperty.call(u, w) && (c[w] = u[w]);
          }, t(o, a);
        };
        return function(o, a) {
          if (typeof a != "function" && a !== null)
            throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
          t(o, a);
          function c() {
            this.constructor = o;
          }
          o.prototype = a === null ? Object.create(a) : (c.prototype = a.prototype, new c());
        };
      }(), v = M("./lib/oop"), p = M("./lib/dom"), s = M("./lib/event"), l = M("./lib/event_emitter").EventEmitter, e = 32768, n = (
        /** @class */
        function() {
          function t(o, a) {
            this.element = p.createElement("div"), this.element.className = "ace_scrollbar ace_scrollbar" + a, this.inner = p.createElement("div"), this.inner.className = "ace_scrollbar-inner", this.inner.textContent = " ", this.element.appendChild(this.inner), o.appendChild(this.element), this.setVisible(!1), this.skipEvent = !1, s.addListener(this.element, "scroll", this.onScroll.bind(this)), s.addListener(this.element, "mousedown", s.preventDefault);
          }
          return t.prototype.setVisible = function(o) {
            this.element.style.display = o ? "" : "none", this.isVisible = o, this.coeff = 1;
          }, t;
        }()
      );
      v.implement(n.prototype, l);
      var i = (
        /** @class */
        function(t) {
          f(o, t);
          function o(a, c) {
            var u = t.call(this, a, "-v") || this;
            return u.scrollTop = 0, u.scrollHeight = 0, c.$scrollbarWidth = u.width = p.scrollbarWidth(a.ownerDocument), u.inner.style.width = u.element.style.width = (u.width || 15) + 5 + "px", u.$minWidth = 0, u;
          }
          return o.prototype.onScroll = function() {
            if (!this.skipEvent) {
              if (this.scrollTop = this.element.scrollTop, this.coeff != 1) {
                var a = this.element.clientHeight / this.scrollHeight;
                this.scrollTop = this.scrollTop * (1 - a) / (this.coeff - a);
              }
              this._emit("scroll", { data: this.scrollTop });
            }
            this.skipEvent = !1;
          }, o.prototype.getWidth = function() {
            return Math.max(this.isVisible ? this.width : 0, this.$minWidth || 0);
          }, o.prototype.setHeight = function(a) {
            this.element.style.height = a + "px";
          }, o.prototype.setScrollHeight = function(a) {
            this.scrollHeight = a, a > e ? (this.coeff = e / a, a = e) : this.coeff != 1 && (this.coeff = 1), this.inner.style.height = a + "px";
          }, o.prototype.setScrollTop = function(a) {
            this.scrollTop != a && (this.skipEvent = !0, this.scrollTop = a, this.element.scrollTop = a * this.coeff);
          }, o;
        }(n)
      );
      i.prototype.setInnerHeight = i.prototype.setScrollHeight;
      var r = (
        /** @class */
        function(t) {
          f(o, t);
          function o(a, c) {
            var u = t.call(this, a, "-h") || this;
            return u.scrollLeft = 0, u.height = c.$scrollbarWidth, u.inner.style.height = u.element.style.height = (u.height || 15) + 5 + "px", u;
          }
          return o.prototype.onScroll = function() {
            this.skipEvent || (this.scrollLeft = this.element.scrollLeft, this._emit("scroll", { data: this.scrollLeft })), this.skipEvent = !1;
          }, o.prototype.getHeight = function() {
            return this.isVisible ? this.height : 0;
          }, o.prototype.setWidth = function(a) {
            this.element.style.width = a + "px";
          }, o.prototype.setInnerWidth = function(a) {
            this.inner.style.width = a + "px";
          }, o.prototype.setScrollWidth = function(a) {
            this.inner.style.width = a + "px";
          }, o.prototype.setScrollLeft = function(a) {
            this.scrollLeft != a && (this.skipEvent = !0, this.scrollLeft = this.element.scrollLeft = a);
          }, o;
        }(n)
      );
      S.ScrollBar = i, S.ScrollBarV = i, S.ScrollBarH = r, S.VScrollBar = i, S.HScrollBar = r;
    }), ace.define("ace/scrollbar_custom", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/event", "ace/lib/event_emitter"], function(M, S, R) {
      var f = this && this.__extends || /* @__PURE__ */ function() {
        var r = function(t, o) {
          return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, c) {
            a.__proto__ = c;
          } || function(a, c) {
            for (var u in c) Object.prototype.hasOwnProperty.call(c, u) && (a[u] = c[u]);
          }, r(t, o);
        };
        return function(t, o) {
          if (typeof o != "function" && o !== null)
            throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
          r(t, o);
          function a() {
            this.constructor = t;
          }
          t.prototype = o === null ? Object.create(o) : (a.prototype = o.prototype, new a());
        };
      }(), v = M("./lib/oop"), p = M("./lib/dom"), s = M("./lib/event"), l = M("./lib/event_emitter").EventEmitter;
      p.importCssString(`.ace_editor>.ace_sb-v div, .ace_editor>.ace_sb-h div{
  position: absolute;
  background: rgba(128, 128, 128, 0.6);
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #bbb;
  border-radius: 2px;
  z-index: 8;
}
.ace_editor>.ace_sb-v, .ace_editor>.ace_sb-h {
  position: absolute;
  z-index: 6;
  background: none;
  overflow: hidden!important;
}
.ace_editor>.ace_sb-v {
  z-index: 6;
  right: 0;
  top: 0;
  width: 12px;
}
.ace_editor>.ace_sb-v div {
  z-index: 8;
  right: 0;
  width: 100%;
}
.ace_editor>.ace_sb-h {
  bottom: 0;
  left: 0;
  height: 12px;
}
.ace_editor>.ace_sb-h div {
  bottom: 0;
  height: 100%;
}
.ace_editor>.ace_sb_grabbed {
  z-index: 8;
  background: #000;
}`, "ace_scrollbar.css", !1);
      var e = (
        /** @class */
        function() {
          function r(t, o) {
            this.element = p.createElement("div"), this.element.className = "ace_sb" + o, this.inner = p.createElement("div"), this.inner.className = "", this.element.appendChild(this.inner), this.VScrollWidth = 12, this.HScrollHeight = 12, t.appendChild(this.element), this.setVisible(!1), this.skipEvent = !1, s.addMultiMouseDownListener(this.element, [500, 300, 300], this, "onMouseDown");
          }
          return r.prototype.setVisible = function(t) {
            this.element.style.display = t ? "" : "none", this.isVisible = t, this.coeff = 1;
          }, r;
        }()
      );
      v.implement(e.prototype, l);
      var n = (
        /** @class */
        function(r) {
          f(t, r);
          function t(o, a) {
            var c = r.call(this, o, "-v") || this;
            return c.scrollTop = 0, c.scrollHeight = 0, c.parent = o, c.width = c.VScrollWidth, c.renderer = a, c.inner.style.width = c.element.style.width = (c.width || 15) + "px", c.$minWidth = 0, c;
          }
          return t.prototype.onMouseDown = function(o, a) {
            if (o === "mousedown" && !(s.getButton(a) !== 0 || a.detail === 2)) {
              if (a.target === this.inner) {
                var c = this, u = a.clientY, w = function(x) {
                  u = x.clientY;
                }, y = function() {
                  clearInterval(_);
                }, m = a.clientY, h = this.thumbTop, $ = function() {
                  if (u !== void 0) {
                    var x = c.scrollTopFromThumbTop(h + u - m);
                    x !== c.scrollTop && c._emit("scroll", { data: x });
                  }
                };
                s.capture(this.inner, w, y);
                var _ = setInterval($, 20);
                return s.preventDefault(a);
              }
              var L = a.clientY - this.element.getBoundingClientRect().top - this.thumbHeight / 2;
              return this._emit("scroll", { data: this.scrollTopFromThumbTop(L) }), s.preventDefault(a);
            }
          }, t.prototype.getHeight = function() {
            return this.height;
          }, t.prototype.scrollTopFromThumbTop = function(o) {
            var a = o * (this.pageHeight - this.viewHeight) / (this.slideHeight - this.thumbHeight);
            return a = a >> 0, a < 0 ? a = 0 : a > this.pageHeight - this.viewHeight && (a = this.pageHeight - this.viewHeight), a;
          }, t.prototype.getWidth = function() {
            return Math.max(this.isVisible ? this.width : 0, this.$minWidth || 0);
          }, t.prototype.setHeight = function(o) {
            this.height = Math.max(0, o), this.slideHeight = this.height, this.viewHeight = this.height, this.setScrollHeight(this.pageHeight, !0);
          }, t.prototype.setScrollHeight = function(o, a) {
            this.pageHeight === o && !a || (this.pageHeight = o, this.thumbHeight = this.slideHeight * this.viewHeight / this.pageHeight, this.thumbHeight > this.slideHeight && (this.thumbHeight = this.slideHeight), this.thumbHeight < 15 && (this.thumbHeight = 15), this.inner.style.height = this.thumbHeight + "px", this.scrollTop > this.pageHeight - this.viewHeight && (this.scrollTop = this.pageHeight - this.viewHeight, this.scrollTop < 0 && (this.scrollTop = 0), this._emit("scroll", { data: this.scrollTop })));
          }, t.prototype.setScrollTop = function(o) {
            this.scrollTop = o, o < 0 && (o = 0), this.thumbTop = o * (this.slideHeight - this.thumbHeight) / (this.pageHeight - this.viewHeight), this.inner.style.top = this.thumbTop + "px";
          }, t;
        }(e)
      );
      n.prototype.setInnerHeight = n.prototype.setScrollHeight;
      var i = (
        /** @class */
        function(r) {
          f(t, r);
          function t(o, a) {
            var c = r.call(this, o, "-h") || this;
            return c.scrollLeft = 0, c.scrollWidth = 0, c.height = c.HScrollHeight, c.inner.style.height = c.element.style.height = (c.height || 12) + "px", c.renderer = a, c;
          }
          return t.prototype.onMouseDown = function(o, a) {
            if (o === "mousedown" && !(s.getButton(a) !== 0 || a.detail === 2)) {
              if (a.target === this.inner) {
                var c = this, u = a.clientX, w = function(x) {
                  u = x.clientX;
                }, y = function() {
                  clearInterval(_);
                }, m = a.clientX, h = this.thumbLeft, $ = function() {
                  if (u !== void 0) {
                    var x = c.scrollLeftFromThumbLeft(h + u - m);
                    x !== c.scrollLeft && c._emit("scroll", { data: x });
                  }
                };
                s.capture(this.inner, w, y);
                var _ = setInterval($, 20);
                return s.preventDefault(a);
              }
              var L = a.clientX - this.element.getBoundingClientRect().left - this.thumbWidth / 2;
              return this._emit("scroll", { data: this.scrollLeftFromThumbLeft(L) }), s.preventDefault(a);
            }
          }, t.prototype.getHeight = function() {
            return this.isVisible ? this.height : 0;
          }, t.prototype.scrollLeftFromThumbLeft = function(o) {
            var a = o * (this.pageWidth - this.viewWidth) / (this.slideWidth - this.thumbWidth);
            return a = a >> 0, a < 0 ? a = 0 : a > this.pageWidth - this.viewWidth && (a = this.pageWidth - this.viewWidth), a;
          }, t.prototype.setWidth = function(o) {
            this.width = Math.max(0, o), this.element.style.width = this.width + "px", this.slideWidth = this.width, this.viewWidth = this.width, this.setScrollWidth(this.pageWidth, !0);
          }, t.prototype.setScrollWidth = function(o, a) {
            this.pageWidth === o && !a || (this.pageWidth = o, this.thumbWidth = this.slideWidth * this.viewWidth / this.pageWidth, this.thumbWidth > this.slideWidth && (this.thumbWidth = this.slideWidth), this.thumbWidth < 15 && (this.thumbWidth = 15), this.inner.style.width = this.thumbWidth + "px", this.scrollLeft > this.pageWidth - this.viewWidth && (this.scrollLeft = this.pageWidth - this.viewWidth, this.scrollLeft < 0 && (this.scrollLeft = 0), this._emit("scroll", { data: this.scrollLeft })));
          }, t.prototype.setScrollLeft = function(o) {
            this.scrollLeft = o, o < 0 && (o = 0), this.thumbLeft = o * (this.slideWidth - this.thumbWidth) / (this.pageWidth - this.viewWidth), this.inner.style.left = this.thumbLeft + "px";
          }, t;
        }(e)
      );
      i.prototype.setInnerWidth = i.prototype.setScrollWidth, S.ScrollBar = n, S.ScrollBarV = n, S.ScrollBarH = i, S.VScrollBar = n, S.HScrollBar = i;
    }), ace.define("ace/renderloop", ["require", "exports", "module", "ace/lib/event"], function(M, S, R) {
      var f = M("./lib/event"), v = (
        /** @class */
        function() {
          function p(s, l) {
            this.onRender = s, this.pending = !1, this.changes = 0, this.$recursionLimit = 2, this.window = l || window;
            var e = this;
            this._flush = function(n) {
              e.pending = !1;
              var i = e.changes;
              if (i && (f.blockIdle(100), e.changes = 0, e.onRender(i)), e.changes) {
                if (e.$recursionLimit-- < 0)
                  return;
                e.schedule();
              } else
                e.$recursionLimit = 2;
            };
          }
          return p.prototype.schedule = function(s) {
            this.changes = this.changes | s, this.changes && !this.pending && (f.nextFrame(this._flush), this.pending = !0);
          }, p.prototype.clear = function(s) {
            var l = this.changes;
            return this.changes = 0, l;
          }, p;
        }()
      );
      S.RenderLoop = v;
    }), ace.define("ace/layer/font_metrics", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/event", "ace/lib/useragent", "ace/lib/event_emitter"], function(M, S, R) {
      var f = M("../lib/oop"), v = M("../lib/dom"), p = M("../lib/lang"), s = M("../lib/event"), l = M("../lib/useragent"), e = M("../lib/event_emitter").EventEmitter, n = 512, i = typeof ResizeObserver == "function", r = 200, t = (
        /** @class */
        function() {
          function o(a) {
            this.el = v.createElement("div"), this.$setMeasureNodeStyles(this.el.style, !0), this.$main = v.createElement("div"), this.$setMeasureNodeStyles(this.$main.style), this.$measureNode = v.createElement("div"), this.$setMeasureNodeStyles(this.$measureNode.style), this.el.appendChild(this.$main), this.el.appendChild(this.$measureNode), a.appendChild(this.el), this.$measureNode.textContent = p.stringRepeat("X", n), this.$characterSize = { width: 0, height: 0 }, i ? this.$addObserver() : this.checkForSizeChanges();
          }
          return o.prototype.$setMeasureNodeStyles = function(a, c) {
            a.width = a.height = "auto", a.left = a.top = "0px", a.visibility = "hidden", a.position = "absolute", a.whiteSpace = "pre", l.isIE < 8 ? a["font-family"] = "inherit" : a.font = "inherit", a.overflow = c ? "hidden" : "visible";
          }, o.prototype.checkForSizeChanges = function(a) {
            if (a === void 0 && (a = this.$measureSizes()), a && (this.$characterSize.width !== a.width || this.$characterSize.height !== a.height)) {
              this.$measureNode.style.fontWeight = "bold";
              var c = this.$measureSizes();
              this.$measureNode.style.fontWeight = "", this.$characterSize = a, this.charSizes = /* @__PURE__ */ Object.create(null), this.allowBoldFonts = c && c.width === a.width && c.height === a.height, this._emit("changeCharacterSize", { data: a });
            }
          }, o.prototype.$addObserver = function() {
            var a = this;
            this.$observer = new window.ResizeObserver(function(c) {
              a.checkForSizeChanges();
            }), this.$observer.observe(this.$measureNode);
          }, o.prototype.$pollSizeChanges = function() {
            if (this.$pollSizeChangesTimer || this.$observer)
              return this.$pollSizeChangesTimer;
            var a = this;
            return this.$pollSizeChangesTimer = s.onIdle(function c() {
              a.checkForSizeChanges(), s.onIdle(c, 500);
            }, 500);
          }, o.prototype.setPolling = function(a) {
            a ? this.$pollSizeChanges() : this.$pollSizeChangesTimer && (clearInterval(this.$pollSizeChangesTimer), this.$pollSizeChangesTimer = 0);
          }, o.prototype.$measureSizes = function(a) {
            var c = {
              height: (a || this.$measureNode).clientHeight,
              width: (a || this.$measureNode).clientWidth / n
            };
            return c.width === 0 || c.height === 0 ? null : c;
          }, o.prototype.$measureCharWidth = function(a) {
            this.$main.textContent = p.stringRepeat(a, n);
            var c = this.$main.getBoundingClientRect();
            return c.width / n;
          }, o.prototype.getCharacterWidth = function(a) {
            var c = this.charSizes[a];
            return c === void 0 && (c = this.charSizes[a] = this.$measureCharWidth(a) / this.$characterSize.width), c;
          }, o.prototype.destroy = function() {
            clearInterval(this.$pollSizeChangesTimer), this.$observer && this.$observer.disconnect(), this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el);
          }, o.prototype.$getZoom = function(a) {
            return !a || !a.parentElement ? 1 : (Number(window.getComputedStyle(a).zoom) || 1) * this.$getZoom(a.parentElement);
          }, o.prototype.$initTransformMeasureNodes = function() {
            var a = function(c, u) {
              return ["div", {
                style: "position: absolute;top:" + c + "px;left:" + u + "px;"
              }];
            };
            this.els = v.buildDom([a(0, 0), a(r, 0), a(0, r), a(r, r)], this.el);
          }, o.prototype.transformCoordinates = function(a, c) {
            if (a) {
              var u = this.$getZoom(this.el);
              a = h(1 / u, a);
            }
            function w(O, W, H) {
              var B = O[1] * W[0] - O[0] * W[1];
              return [
                (-W[1] * H[0] + W[0] * H[1]) / B,
                (+O[1] * H[0] - O[0] * H[1]) / B
              ];
            }
            function y(O, W) {
              return [O[0] - W[0], O[1] - W[1]];
            }
            function m(O, W) {
              return [O[0] + W[0], O[1] + W[1]];
            }
            function h(O, W) {
              return [O * W[0], O * W[1]];
            }
            this.els || this.$initTransformMeasureNodes();
            function $(O) {
              var W = O.getBoundingClientRect();
              return [W.left, W.top];
            }
            var _ = $(this.els[0]), L = $(this.els[1]), x = $(this.els[2]), D = $(this.els[3]), A = w(y(D, L), y(D, x), y(m(L, x), m(D, _))), C = h(1 + A[0], y(L, _)), g = h(1 + A[1], y(x, _));
            if (c) {
              var d = c, b = A[0] * d[0] / r + A[1] * d[1] / r + 1, k = m(h(d[0], C), h(d[1], g));
              return m(h(1 / b / r, k), _);
            }
            var I = y(a, _), T = w(y(C, h(A[0], I)), y(g, h(A[1], I)), I);
            return h(r, T);
          }, o;
        }()
      );
      t.prototype.$characterSize = { width: 0, height: 0 }, f.implement(t.prototype, e), S.FontMetrics = t;
    }), ace.define("ace/css/editor-css", ["require", "exports", "module"], function(M, S, R) {
      R.exports = `
.ace_br1 {border-top-left-radius    : 3px;}
.ace_br2 {border-top-right-radius   : 3px;}
.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}
.ace_br4 {border-bottom-right-radius: 3px;}
.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}
.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}
.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}
.ace_br8 {border-bottom-left-radius : 3px;}
.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}
.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}
.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}
.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}
.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}
.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}
.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}


.ace_editor {
    position: relative;
    overflow: hidden;
    padding: 0;
    font: 12px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'Source Code Pro', 'source-code-pro', monospace;
    direction: ltr;
    text-align: left;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    forced-color-adjust: none;
}

.ace_scroller {
    position: absolute;
    overflow: hidden;
    top: 0;
    bottom: 0;
    background-color: inherit;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    cursor: text;
}

.ace_content {
    position: absolute;
    box-sizing: border-box;
    min-width: 100%;
    contain: style size layout;
    font-variant-ligatures: no-common-ligatures;
}
.ace_invisible {
    font-variant-ligatures: none;
}

.ace_keyboard-focus:focus {
    box-shadow: inset 0 0 0 2px #5E9ED6;
    outline: none;
}

.ace_dragging .ace_scroller:before{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background: rgba(250, 250, 250, 0.01);
    z-index: 1000;
}
.ace_dragging.ace_dark .ace_scroller:before{
    background: rgba(0, 0, 0, 0.01);
}

.ace_gutter {
    position: absolute;
    overflow : hidden;
    width: auto;
    top: 0;
    bottom: 0;
    left: 0;
    cursor: default;
    z-index: 4;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    contain: style size layout;
}

.ace_gutter-active-line {
    position: absolute;
    left: 0;
    right: 0;
}

.ace_scroller.ace_scroll-left:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;
    pointer-events: none;
}

.ace_gutter-cell, .ace_gutter-cell_svg-icons {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 19px;
    padding-right: 6px;
    background-repeat: no-repeat;
}

.ace_gutter-cell_svg-icons .ace_gutter_annotation {
    margin-left: -14px;
    float: left;
}

.ace_gutter-cell .ace_gutter_annotation {
    margin-left: -19px;
    float: left;
}

.ace_gutter-cell.ace_error, .ace_icon.ace_error, .ace_icon.ace_error_fold, .ace_gutter-cell.ace_security, .ace_icon.ace_security, .ace_icon.ace_security_fold {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");
    background-repeat: no-repeat;
    background-position: 2px center;
}

.ace_gutter-cell.ace_warning, .ace_icon.ace_warning, .ace_icon.ace_warning_fold {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");
    background-repeat: no-repeat;
    background-position: 2px center;
}

.ace_gutter-cell.ace_info, .ace_icon.ace_info, .ace_gutter-cell.ace_hint, .ace_icon.ace_hint {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");
    background-repeat: no-repeat;
    background-position: 2px center;
}

.ace_dark .ace_gutter-cell.ace_info, .ace_dark .ace_icon.ace_info, .ace_dark .ace_gutter-cell.ace_hint, .ace_dark .ace_icon.ace_hint {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");
}

.ace_icon_svg.ace_error {
    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAxNiI+CjxnIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJyZWQiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KPGNpcmNsZSBmaWxsPSJub25lIiBjeD0iOCIgY3k9IjgiIHI9IjciIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGxpbmUgeDE9IjExIiB5MT0iNSIgeDI9IjUiIHkyPSIxMSIvPgo8bGluZSB4MT0iMTEiIHkxPSIxMSIgeDI9IjUiIHkyPSI1Ii8+CjwvZz4KPC9zdmc+");
    background-color: crimson;
}
.ace_icon_svg.ace_security {
    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iZGFya29yYW5nZSIgZmlsbD0ibm9uZSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgogICAgICAgIDxwYXRoIGNsYXNzPSJzdHJva2UtbGluZWpvaW4tcm91bmQiIGQ9Ik04IDE0LjgzMDdDOCAxNC44MzA3IDIgMTIuOTA0NyAyIDguMDg5OTJWMy4yNjU0OEM1LjMxIDMuMjY1NDggNy45ODk5OSAxLjM0OTE4IDcuOTg5OTkgMS4zNDkxOEM3Ljk4OTk5IDEuMzQ5MTggMTAuNjkgMy4yNjU0OCAxNCAzLjI2NTQ4VjguMDg5OTJDMTQgMTIuOTA0NyA4IDE0LjgzMDcgOCAxNC44MzA3WiIvPgogICAgICAgIDxwYXRoIGQ9Ik0yIDguMDg5OTJWMy4yNjU0OEM1LjMxIDMuMjY1NDggNy45ODk5OSAxLjM0OTE4IDcuOTg5OTkgMS4zNDkxOCIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMy45OSA4LjA4OTkyVjMuMjY1NDhDMTAuNjggMy4yNjU0OCA4IDEuMzQ5MTggOCAxLjM0OTE4Ii8+CiAgICAgICAgPHBhdGggY2xhc3M9InN0cm9rZS1saW5lam9pbi1yb3VuZCIgZD0iTTggNFY5Ii8+CiAgICAgICAgPHBhdGggY2xhc3M9InN0cm9rZS1saW5lam9pbi1yb3VuZCIgZD0iTTggMTBWMTIiLz4KICAgIDwvZz4KPC9zdmc+");
    background-color: crimson;
}
.ace_icon_svg.ace_warning {
    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAxNiI+CjxnIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJkYXJrb3JhbmdlIiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+Cjxwb2x5Z29uIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGZpbGw9Im5vbmUiIHBvaW50cz0iOCAxIDE1IDE1IDEgMTUgOCAxIi8+CjxyZWN0IHg9IjgiIHk9IjEyIiB3aWR0aD0iMC4wMSIgaGVpZ2h0PSIwLjAxIi8+CjxsaW5lIHgxPSI4IiB5MT0iNiIgeDI9IjgiIHkyPSIxMCIvPgo8L2c+Cjwvc3ZnPg==");
    background-color: darkorange;
}
.ace_icon_svg.ace_info {
    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAxNiI+CjxnIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJibHVlIiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+CjxjaXJjbGUgZmlsbD0ibm9uZSIgY3g9IjgiIGN5PSI4IiByPSI3IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjxwb2x5bGluZSBwb2ludHM9IjggMTEgOCA4Ii8+Cjxwb2x5bGluZSBwb2ludHM9IjkgOCA2IDgiLz4KPGxpbmUgeDE9IjEwIiB5MT0iMTEiIHgyPSI2IiB5Mj0iMTEiLz4KPHJlY3QgeD0iOCIgeT0iNSIgd2lkdGg9IjAuMDEiIGhlaWdodD0iMC4wMSIvPgo8L2c+Cjwvc3ZnPg==");
    background-color: royalblue;
}
.ace_icon_svg.ace_hint {
    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0ic2lsdmVyIiBmaWxsPSJub25lIiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+CiAgICAgICAgPHBhdGggY2xhc3M9InN0cm9rZS1saW5lam9pbi1yb3VuZCIgZD0iTTYgMTRIMTAiLz4KICAgICAgICA8cGF0aCBkPSJNOCAxMUg5QzkgOS40NzAwMiAxMiA4LjU0MDAyIDEyIDUuNzYwMDJDMTIuMDIgNC40MDAwMiAxMS4zOSAzLjM2MDAyIDEwLjQzIDIuNjcwMDJDOSAxLjY0MDAyIDcuMDAwMDEgMS42NDAwMiA1LjU3MDAxIDIuNjcwMDJDNC42MTAwMSAzLjM2MDAyIDMuOTggNC40MDAwMiA0IDUuNzYwMDJDNCA4LjU0MDAyIDcuMDAwMDEgOS40NzAwMiA3LjAwMDAxIDExSDhaIi8+CiAgICA8L2c+Cjwvc3ZnPg==");
    background-color: silver;
}

.ace_icon_svg.ace_error_fold {
    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAxNiIgZmlsbD0ibm9uZSI+CiAgPHBhdGggZD0ibSAxOC45Mjk4NTEsNy44Mjk4MDc2IGMgMC4xNDYzNTMsNi4zMzc0NjA0IC02LjMyMzE0Nyw3Ljc3Nzg0NDQgLTcuNDc3OTEyLDcuNzc3ODQ0NCAtMi4xMDcyNzI2LC0wLjEyODc1IDUuMTE3Njc4LDAuMzU2MjQ5IDUuMDUxNjk4LC03Ljg3MDA2MTggLTAuNjA0NjcyLC04LjAwMzk3MzQ5IC03LjA3NzI3MDYsLTcuNTYzMTE4OSAtNC44NTczLC03LjQzMDM5NTU2IDEuNjA2LC0wLjExNTE0MjI1IDYuODk3NDg1LDEuMjYyNTQ1OTYgNy4yODM1MTQsNy41MjI2MTI5NiB6IiBmaWxsPSJjcmltc29uIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0ibSA4LjExNDc1NjIsMi4wNTI5ODI4IGMgMy4zNDkxNjk4LDAgNi4wNjQxMzI4LDIuNjc2ODYyNyA2LjA2NDEzMjgsNS45Nzg5NTMgMCwzLjMwMjExMjIgLTIuNzE0OTYzLDUuOTc4OTIwMiAtNi4wNjQxMzI4LDUuOTc4OTIwMiAtMy4zNDkxNDczLDAgLTYuMDY0MTc3MiwtMi42NzY4MDggLTYuMDY0MTc3MiwtNS45Nzg5MjAyIDAuMDA1MzksLTMuMjk5ODg2MSAyLjcxNzI2NTYsLTUuOTczNjQwOCA2LjA2NDE3NzIsLTUuOTc4OTUzIHogbSAwLC0xLjczNTgyNzE5IGMgLTQuMzIxNDgzNiwwIC03LjgyNDc0MDM4LDMuNDU0MDE4NDkgLTcuODI0NzQwMzgsNy43MTQ3ODAxOSAwLDQuMjYwNzI4MiAzLjUwMzI1Njc4LDcuNzE0NzQ1MiA3LjgyNDc0MDM4LDcuNzE0NzQ1MiA0LjMyMTQ0OTgsMCA3LjgyNDY5OTgsLTMuNDU0MDE3IDcuODI0Njk5OCwtNy43MTQ3NDUyIDAsLTIuMDQ2MDkxNCAtMC44MjQzOTIsLTQuMDA4MzY3MiAtMi4yOTE3NTYsLTUuNDU1MTc0NiBDIDEyLjE4MDIyNSwxLjEyOTk2NDggMTAuMTkwMDEzLDAuMzE3MTU1NjEgOC4xMTQ3NTYyLDAuMzE3MTU1NjEgWiBNIDYuOTM3NDU2Myw4LjI0MDU5ODUgNC42NzE4Njg1LDEwLjQ4NTg1MiA2LjAwODY4MTQsMTEuODc2NzI4IDguMzE3MDAzNSw5LjYwMDc5MTEgMTAuNjI1MzM3LDExLjg3NjcyOCAxMS45NjIxMzgsMTAuNDg1ODUyIDkuNjk2NTUwOCw4LjI0MDU5ODUgMTEuOTYyMTM4LDYuMDA2ODA2NiAxMC41NzMyNDYsNC42Mzc0MzM1IDguMzE3MDAzNSw2Ljg3MzQyOTcgNi4wNjA3NjA3LDQuNjM3NDMzNSA0LjY3MTg2ODUsNi4wMDY4MDY2IFoiIGZpbGw9ImNyaW1zb24iIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4=");
    background-color: crimson;
}
.ace_icon_svg.ace_security_fold {
    -webkit-mask-image: url("data:image/svg+xml;base64,CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTcgMTQiIGZpbGw9Im5vbmUiPgogICAgPHBhdGggZD0iTTEwLjAwMDEgMTMuNjk5MkMxMC4wMDAxIDEzLjY5OTIgMTEuOTI0MSAxMy40NzYzIDEzIDEyLjY5OTJDMTQuNDEzOSAxMS42NzgxIDE2IDEwLjUgMTYuMTI1MSA2LjgxMTI2VjIuNTg5ODdDMTYuMTI1MSAyLjU0NzY4IDE2LjEyMjEgMi41MDYxOSAxNi4xMTY0IDIuNDY1NTlWMS43MTQ4NUgxNS4yNDE0TDE1LjIzMDcgMS43MTQ4NEwxNC42MjUxIDEuNjk5MjJWNi44MTEyM0MxNC42MjUxIDguNTEwNjEgMTQuNjI1MSA5LjQ2NDYxIDEyLjc4MjQgMTEuNzIxQzEyLjE1ODYgMTIuNDg0OCAxMC4wMDAxIDEzLjY5OTIgMTAuMDAwMSAxMy42OTkyWiIgZmlsbD0iY3JpbXNvbiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMzM2MDkgMC4zNjc0NzVDNy4wMzIxNCAwLjE1MjY1MiA2LjYyNTQ4IDAuMTUzNjE0IDYuMzIyNTMgMC4zNjk5OTdMNi4zMDg2OSAwLjM3OTU1NEM2LjI5NTUzIDAuMzg4NTg4IDYuMjczODggMC40MDMyNjYgNi4yNDQxNyAwLjQyMjc4OUM2LjE4NDcxIDAuNDYxODYgNi4wOTMyMSAwLjUyMDE3MSA1Ljk3MzEzIDAuNTkxMzczQzUuNzMyNTEgMC43MzQwNTkgNS4zNzk5IDAuOTI2ODY0IDQuOTQyNzkgMS4xMjAwOUM0LjA2MTQ0IDEuNTA5NyAyLjg3NTQxIDEuODgzNzcgMS41ODk4NCAxLjg4Mzc3SDAuNzE0ODQ0VjIuNzU4NzdWNi45ODAxNUMwLjcxNDg0NCA5LjQ5Mzc0IDIuMjg4NjYgMTEuMTk3MyAzLjcwMjU0IDEyLjIxODVDNC40MTg0NSAxMi43MzU1IDUuMTI4NzQgMTMuMTA1MyA1LjY1NzMzIDEzLjM0NTdDNS45MjI4NCAxMy40NjY0IDYuMTQ1NjYgMTMuNTU1OSA2LjMwNDY1IDEzLjYxNjFDNi4zODQyMyAxMy42NDYyIDYuNDQ4MDUgMTMuNjY5IDYuNDkzNDkgMTMuNjg0OEM2LjUxNjIyIDEzLjY5MjcgNi41MzQzOCAxMy42OTg5IDYuNTQ3NjQgMTMuNzAzM0w2LjU2MzgyIDEzLjcwODdMNi41NjkwOCAxMy43MTA0TDYuNTcwOTkgMTMuNzExTDYuODM5ODQgMTMuNzUzM0w2LjU3MjQyIDEzLjcxMTVDNi43NDYzMyAxMy43NjczIDYuOTMzMzUgMTMuNzY3MyA3LjEwNzI3IDEzLjcxMTVMNy4xMDg3IDEzLjcxMUw3LjExMDYxIDEzLjcxMDRMNy4xMTU4NyAxMy43MDg3TDcuMTMyMDUgMTMuNzAzM0M3LjE0NTMxIDEzLjY5ODkgNy4xNjM0NiAxMy42OTI3IDcuMTg2MTkgMTMuNjg0OEM3LjIzMTY0IDEzLjY2OSA3LjI5NTQ2IDEzLjY0NjIgNy4zNzUwMyAxMy42MTYxQzcuNTM0MDMgMTMuNTU1OSA3Ljc1Njg1IDEzLjQ2NjQgOC4wMjIzNiAxMy4zNDU3QzguNTUwOTUgMTMuMTA1MyA5LjI2MTIzIDEyLjczNTUgOS45NzcxNSAxMi4yMTg1QzExLjM5MSAxMS4xOTczIDEyLjk2NDggOS40OTM3NyAxMi45NjQ4IDYuOTgwMThWMi43NTg4QzEyLjk2NDggMi43MTY2IDEyLjk2MTkgMi42NzUxMSAxMi45NTYxIDIuNjM0NTFWMS44ODM3N0gxMi4wODExQzEyLjA3NzUgMS44ODM3NyAxMi4wNzQgMS44ODM3NyAxMi4wNzA0IDEuODgzNzdDMTAuNzk3OSAxLjg4MDA0IDkuNjE5NjIgMS41MTEwMiA4LjczODk0IDEuMTI0ODZDOC43MzUzNCAxLjEyMzI3IDguNzMxNzQgMS4xMjE2OCA4LjcyODE0IDEuMTIwMDlDOC4yOTEwMyAwLjkyNjg2NCA3LjkzODQyIDAuNzM0MDU5IDcuNjk3NzkgMC41OTEzNzNDNy41Nzc3MiAwLjUyMDE3MSA3LjQ4NjIyIDAuNDYxODYgNy40MjY3NiAwLjQyMjc4OUM3LjM5NzA1IDAuNDAzMjY2IDcuMzc1MzkgMC4zODg1ODggNy4zNjIyNCAwLjM3OTU1NEw3LjM0ODk2IDAuMzcwMzVDNy4zNDg5NiAwLjM3MDM1IDcuMzQ4NDcgMC4zNzAwMiA3LjM0NTYzIDAuMzc0MDU0TDcuMzM3NzkgMC4zNjg2NTlMNy4zMzYwOSAwLjM2NzQ3NVpNOC4wMzQ3MSAyLjcyNjkxQzguODYwNCAzLjA5MDYzIDkuOTYwNjYgMy40NjMwOSAxMS4yMDYxIDMuNTg5MDdWNi45ODAxNUgxMS4yMTQ4QzExLjIxNDggOC42Nzk1MyAxMC4xNjM3IDkuOTI1MDcgOC45NTI1NCAxMC43OTk4QzguMzU1OTUgMTEuMjMwNiA3Ljc1Mzc0IDExLjU0NTQgNy4yOTc5NiAxMS43NTI3QzcuMTE2NzEgMTEuODM1MSA2Ljk2MDYyIDExLjg5OTYgNi44Mzk4NCAxMS45NDY5QzYuNzE5MDYgMTEuODk5NiA2LjU2Mjk3IDExLjgzNTEgNi4zODE3MyAxMS43NTI3QzUuOTI1OTUgMTEuNTQ1NCA1LjMyMzczIDExLjIzMDYgNC43MjcxNSAxMC43OTk4QzMuNTE2MDMgOS45MjUwNyAyLjQ2NDg0IDguNjc5NTUgMi40NjQ4NCA2Ljk4MDE4VjMuNTg5MDlDMy43MTczOCAzLjQ2MjM5IDQuODIzMDggMy4wODYzOSA1LjY1MDMzIDIuNzIwNzFDNi4xNDIyOCAyLjUwMzI0IDYuNTQ0ODUgMi4yODUzNyA2LjgzMjU0IDIuMTE2MjRDNy4xMjE4MSAyLjI4NTM1IDcuNTI3IDIuNTAzNTIgOC4wMjE5NiAyLjcyMTMxQzguMDI2MiAyLjcyMzE3IDguMDMwNDUgMi43MjUwNCA4LjAzNDcxIDIuNzI2OTFaTTUuOTY0ODQgMy40MDE0N1Y3Ljc3NjQ3SDcuNzE0ODRWMy40MDE0N0g1Ljk2NDg0Wk01Ljk2NDg0IDEwLjQwMTVWOC42NTE0N0g3LjcxNDg0VjEwLjQwMTVINS45NjQ4NFoiIGZpbGw9ImNyaW1zb24iIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4=");
    background-color: crimson;
}
.ace_icon_svg.ace_warning_fold {
    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyMCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC43NzY5IDE0LjczMzdMOC42NTE5MiAyLjQ4MzY5QzguMzI5NDYgMS44Mzg3NyA3LjQwOTEzIDEuODM4NzcgNy4wODY2NyAyLjQ4MzY5TDAuOTYxNjY5IDE0LjczMzdDMC42NzA3NzUgMTUuMzE1NSAxLjA5MzgzIDE2IDEuNzQ0MjkgMTZIMTMuOTk0M0MxNC42NDQ4IDE2IDE1LjA2NzggMTUuMzE1NSAxNC43NzY5IDE0LjczMzdaTTMuMTYwMDcgMTQuMjVMNy44NjkyOSA0LjgzMTU2TDEyLjU3ODUgMTQuMjVIMy4xNjAwN1pNOC43NDQyOSAxMS42MjVWMTMuMzc1SDYuOTk0MjlWMTEuNjI1SDguNzQ0MjlaTTYuOTk0MjkgMTAuNzVWNy4yNUg4Ljc0NDI5VjEwLjc1SDYuOTk0MjlaIiBmaWxsPSIjRUM3MjExIi8+CjxwYXRoIGQ9Ik0xMS4xOTkxIDIuOTUyMzhDMTAuODgwOSAyLjMxNDY3IDEwLjM1MzcgMS44MDUyNiA5LjcwNTUgMS41MDlMMTEuMDQxIDEuMDY5NzhDMTEuNjg4MyAwLjk0OTgxNCAxMi4zMzcgMS4yNzI2MyAxMi42MzE3IDEuODYxNDFMMTcuNjEzNiAxMS44MTYxQzE4LjM1MjcgMTMuMjkyOSAxNy41OTM4IDE1LjA4MDQgMTYuMDE4IDE1LjU3NDVDMTYuNDA0NCAxNC40NTA3IDE2LjMyMzEgMTMuMjE4OCAxNS43OTI0IDEyLjE1NTVMMTEuMTk5MSAyLjk1MjM4WiIgZmlsbD0iI0VDNzIxMSIvPgo8L3N2Zz4=");
    background-color: darkorange;
}

.ace_scrollbar {
    contain: strict;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 6;
}

.ace_scrollbar-inner {
    position: absolute;
    cursor: text;
    left: 0;
    top: 0;
}

.ace_scrollbar-v{
    overflow-x: hidden;
    overflow-y: scroll;
    top: 0;
}

.ace_scrollbar-h {
    overflow-x: scroll;
    overflow-y: hidden;
    left: 0;
}

.ace_print-margin {
    position: absolute;
    height: 100%;
}

.ace_text-input {
    position: absolute;
    z-index: 0;
    width: 0.5em;
    height: 1em;
    opacity: 0;
    background: transparent;
    -moz-appearance: none;
    appearance: none;
    border: none;
    resize: none;
    outline: none;
    overflow: hidden;
    font: inherit;
    padding: 0 1px;
    margin: 0 -1px;
    contain: strict;
    -ms-user-select: text;
    -moz-user-select: text;
    -webkit-user-select: text;
    user-select: text;
    /*with \`pre-line\` chrome inserts &nbsp; instead of space*/
    white-space: pre!important;
}
.ace_text-input.ace_composition {
    background: transparent;
    color: inherit;
    z-index: 1000;
    opacity: 1;
}
.ace_composition_placeholder { color: transparent }
.ace_composition_marker { 
    border-bottom: 1px solid;
    position: absolute;
    border-radius: 0;
    margin-top: 1px;
}

[ace_nocontext=true] {
    transform: none!important;
    filter: none!important;
    clip-path: none!important;
    mask : none!important;
    contain: none!important;
    perspective: none!important;
    mix-blend-mode: initial!important;
    z-index: auto;
}

.ace_layer {
    z-index: 1;
    position: absolute;
    overflow: hidden;
    /* workaround for chrome bug https://github.com/ajaxorg/ace/issues/2312*/
    word-wrap: normal;
    white-space: pre;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    /* setting pointer-events: auto; on node under the mouse, which changes
        during scroll, will break mouse wheel scrolling in Safari */
    pointer-events: none;
}

.ace_gutter-layer {
    position: relative;
    width: auto;
    text-align: right;
    pointer-events: auto;
    height: 1000000px;
    contain: style size layout;
}

.ace_text-layer {
    font: inherit !important;
    position: absolute;
    height: 1000000px;
    width: 1000000px;
    contain: style size layout;
}

.ace_text-layer > .ace_line, .ace_text-layer > .ace_line_group {
    contain: style size layout;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}

.ace_hidpi .ace_text-layer,
.ace_hidpi .ace_gutter-layer,
.ace_hidpi .ace_content,
.ace_hidpi .ace_gutter {
    contain: strict;
}
.ace_hidpi .ace_text-layer > .ace_line, 
.ace_hidpi .ace_text-layer > .ace_line_group {
    contain: strict;
}

.ace_cjk {
    display: inline-block;
    text-align: center;
}

.ace_cursor-layer {
    z-index: 4;
}

.ace_cursor {
    z-index: 4;
    position: absolute;
    box-sizing: border-box;
    border-left: 2px solid;
    /* workaround for smooth cursor repaintng whole screen in chrome */
    transform: translatez(0);
}

.ace_multiselect .ace_cursor {
    border-left-width: 1px;
}

.ace_slim-cursors .ace_cursor {
    border-left-width: 1px;
}

.ace_overwrite-cursors .ace_cursor {
    border-left-width: 0;
    border-bottom: 1px solid;
}

.ace_hidden-cursors .ace_cursor {
    opacity: 0.2;
}

.ace_hasPlaceholder .ace_hidden-cursors .ace_cursor {
    opacity: 0;
}

.ace_smooth-blinking .ace_cursor {
    transition: opacity 0.18s;
}

.ace_animate-blinking .ace_cursor {
    animation-duration: 1000ms;
    animation-timing-function: step-end;
    animation-name: blink-ace-animate;
    animation-iteration-count: infinite;
}

.ace_animate-blinking.ace_smooth-blinking .ace_cursor {
    animation-duration: 1000ms;
    animation-timing-function: ease-in-out;
    animation-name: blink-ace-animate-smooth;
}
    
@keyframes blink-ace-animate {
    from, to { opacity: 1; }
    60% { opacity: 0; }
}

@keyframes blink-ace-animate-smooth {
    from, to { opacity: 1; }
    45% { opacity: 1; }
    60% { opacity: 0; }
    85% { opacity: 0; }
}

.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {
    position: absolute;
    z-index: 3;
}

.ace_marker-layer .ace_selection {
    position: absolute;
    z-index: 5;
}

.ace_marker-layer .ace_bracket {
    position: absolute;
    z-index: 6;
}

.ace_marker-layer .ace_error_bracket {
    position: absolute;
    border-bottom: 1px solid #DE5555;
    border-radius: 0;
}

.ace_marker-layer .ace_active-line {
    position: absolute;
    z-index: 2;
}

.ace_marker-layer .ace_selected-word {
    position: absolute;
    z-index: 4;
    box-sizing: border-box;
}

.ace_line .ace_fold {
    box-sizing: border-box;

    display: inline-block;
    height: 11px;
    margin-top: -2px;
    vertical-align: middle;

    background-image:
        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),
        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");
    background-repeat: no-repeat, repeat-x;
    background-position: center center, top left;
    color: transparent;

    border: 1px solid black;
    border-radius: 2px;

    cursor: pointer;
    pointer-events: auto;
}

.ace_dark .ace_fold {
}

.ace_fold:hover{
    background-image:
        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),
        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");
}

.ace_tooltip {
    background-color: #f5f5f5;
    border: 1px solid gray;
    border-radius: 1px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    color: black;
    padding: 3px 4px;
    position: fixed;
    z-index: 999999;
    box-sizing: border-box;
    cursor: default;
    white-space: pre-wrap;
    word-wrap: break-word;
    line-height: normal;
    font-style: normal;
    font-weight: normal;
    letter-spacing: normal;
    pointer-events: none;
    overflow: auto;
    max-width: min(33em, 66vw);
    overscroll-behavior: contain;
}
.ace_tooltip pre {
    white-space: pre-wrap;
}

.ace_tooltip.ace_dark {
    background-color: #636363;
    color: #fff;
}

.ace_tooltip:focus {
    outline: 1px solid #5E9ED6;
}

.ace_icon {
    display: inline-block;
    width: 18px;
    vertical-align: top;
}

.ace_icon_svg {
    display: inline-block;
    width: 12px;
    vertical-align: top;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 12px;
    -webkit-mask-position: center;
}

.ace_folding-enabled > .ace_gutter-cell, .ace_folding-enabled > .ace_gutter-cell_svg-icons {
    padding-right: 13px;
}

.ace_fold-widget, .ace_custom-widget {
    box-sizing: border-box;

    margin: 0 -12px 0 1px;
    display: none;
    width: 11px;
    vertical-align: top;

    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");
    background-repeat: no-repeat;
    background-position: center;

    border-radius: 3px;
    
    border: 1px solid transparent;
    cursor: pointer;
}

.ace_custom-widget {
    background: none;
}

.ace_folding-enabled .ace_fold-widget {
    display: inline-block;   
}

.ace_fold-widget.ace_end {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");
}

.ace_fold-widget.ace_closed {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");
}

.ace_fold-widget:hover {
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);
}

.ace_fold-widget:active {
    border: 1px solid rgba(0, 0, 0, 0.4);
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
}
/**
 * Dark version for fold widgets
 */
.ace_dark .ace_fold-widget {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");
}
.ace_dark .ace_fold-widget.ace_end {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");
}
.ace_dark .ace_fold-widget.ace_closed {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");
}
.ace_dark .ace_fold-widget:hover {
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.1);
}
.ace_dark .ace_fold-widget:active {
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
}

.ace_inline_button {
    border: 1px solid lightgray;
    display: inline-block;
    margin: -1px 8px;
    padding: 0 5px;
    pointer-events: auto;
    cursor: pointer;
}
.ace_inline_button:hover {
    border-color: gray;
    background: rgba(200,200,200,0.2);
    display: inline-block;
    pointer-events: auto;
}

.ace_fold-widget.ace_invalid {
    background-color: #FFB4B4;
    border-color: #DE5555;
}

.ace_fade-fold-widgets .ace_fold-widget {
    transition: opacity 0.4s ease 0.05s;
    opacity: 0;
}

.ace_fade-fold-widgets:hover .ace_fold-widget {
    transition: opacity 0.05s ease 0.05s;
    opacity:1;
}

.ace_underline {
    text-decoration: underline;
}

.ace_bold {
    font-weight: bold;
}

.ace_nobold .ace_bold {
    font-weight: normal;
}

.ace_italic {
    font-style: italic;
}


.ace_error-marker {
    background-color: rgba(255, 0, 0,0.2);
    position: absolute;
    z-index: 9;
}

.ace_highlight-marker {
    background-color: rgba(255, 255, 0,0.2);
    position: absolute;
    z-index: 8;
}

.ace_mobile-menu {
    position: absolute;
    line-height: 1.5;
    border-radius: 4px;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    background: white;
    box-shadow: 1px 3px 2px grey;
    border: 1px solid #dcdcdc;
    color: black;
}
.ace_dark > .ace_mobile-menu {
    background: #333;
    color: #ccc;
    box-shadow: 1px 3px 2px grey;
    border: 1px solid #444;

}
.ace_mobile-button {
    padding: 2px;
    cursor: pointer;
    overflow: hidden;
}
.ace_mobile-button:hover {
    background-color: #eee;
    opacity:1;
}
.ace_mobile-button:active {
    background-color: #ddd;
}

.ace_placeholder {
    position: relative;
    font-family: arial;
    transform: scale(0.9);
    transform-origin: left;
    white-space: pre;
    opacity: 0.7;
    margin: 0 10px;
    z-index: 1;
}

.ace_ghost_text {
    opacity: 0.5;
    font-style: italic;
}

.ace_ghost_text_container > div {
    white-space: pre;
}

.ghost_text_line_wrapped::after {
    content: "↩";
    position: absolute;
}

.ace_lineWidgetContainer.ace_ghost_text {
    margin: 0px 4px
}

.ace_screenreader-only {
    position:absolute;
    left:-10000px;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
}

.ace_hidden_token {
    display: none;
}`;
    }), ace.define("ace/layer/decorators", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/event_emitter"], function(M, S, R) {
      var f = M("../lib/dom"), v = M("../lib/oop"), p = M("../lib/event_emitter").EventEmitter, s = (
        /** @class */
        function() {
          function l(e, n) {
            this.parentEl = e, this.canvas = f.createElement("canvas"), this.renderer = n, this.pixelRatio = 1, this.maxHeight = n.layerConfig.maxHeight, this.lineHeight = n.layerConfig.lineHeight, this.minDecorationHeight = 2 * this.pixelRatio | 0, this.halfMinDecorationHeight = this.minDecorationHeight / 2 | 0, this.canvas.style.top = "0px", this.canvas.style.right = "0px", this.canvas.style.zIndex = "7px", this.canvas.style.position = "absolute", this.colors = {}, this.colors.dark = {
              error: "rgba(255, 18, 18, 1)",
              warning: "rgba(18, 136, 18, 1)",
              info: "rgba(18, 18, 136, 1)"
            }, this.colors.light = {
              error: "rgb(255,51,51)",
              warning: "rgb(32,133,72)",
              info: "rgb(35,68,138)"
            }, this.setDimensions(), e.element.appendChild(this.canvas);
          }
          return l.prototype.$updateDecorators = function(e) {
            var n = this.renderer.theme.isDark === !0 ? this.colors.dark : this.colors.light;
            this.setDimensions(e);
            var i = this.canvas.getContext("2d");
            function r(L, x) {
              return L.priority < x.priority ? -1 : L.priority > x.priority ? 1 : 0;
            }
            var t = this.renderer.session.$annotations;
            if (i.clearRect(0, 0, this.canvas.width, this.canvas.height), t) {
              var o = {
                info: 1,
                warning: 2,
                error: 3
              };
              t.forEach(function(L) {
                L.priority = o[L.type] || null;
              }), t = t.sort(r);
              for (var a = 0; a < t.length; a++) {
                var c = t[a].row, u = this.compensateFoldRows(c), w = Math.round((c - u) * this.lineHeight * this.heightRatio), y = Math.round((c - u) * this.lineHeight * this.heightRatio), m = Math.round(((c - u) * this.lineHeight + this.lineHeight) * this.heightRatio), h = m - y;
                if (h < this.minDecorationHeight) {
                  var $ = (y + m) / 2 | 0;
                  $ < this.halfMinDecorationHeight ? $ = this.halfMinDecorationHeight : $ + this.halfMinDecorationHeight > this.canvasHeight && ($ = this.canvasHeight - this.halfMinDecorationHeight), y = Math.round($ - this.halfMinDecorationHeight), m = Math.round($ + this.halfMinDecorationHeight);
                }
                i.fillStyle = n[t[a].type] || null, i.fillRect(0, w, this.canvasWidth, m - y);
              }
            }
            var _ = this.renderer.session.selection.getCursor();
            if (_) {
              var u = this.compensateFoldRows(_.row), w = Math.round((_.row - u) * this.lineHeight * this.heightRatio);
              i.fillStyle = "rgba(0, 0, 0, 0.5)", i.fillRect(0, w, this.canvasWidth, 2);
            }
          }, l.prototype.compensateFoldRows = function(e) {
            var n = this.renderer.session.$foldData, i = 0;
            if (n && n.length > 0)
              for (var r = 0; r < n.length; r++)
                e > n[r].start.row && e < n[r].end.row ? i += e - n[r].start.row : e >= n[r].end.row && (i += n[r].end.row - n[r].start.row);
            return i;
          }, l.prototype.compensateLineWidgets = function(e) {
            var n = this.renderer.session.widgetManager;
            if (n) {
              var i = 0;
              return n.lineWidgets.forEach(function(r, t) {
                e > t && (i += r.rowCount || 0);
              }), i - 1;
            }
            return 0;
          }, l.prototype.setDimensions = function(e) {
            e ? (this.maxHeight = e.maxHeight, this.lineHeight = e.lineHeight, this.canvasHeight = e.height, this.maxHeight < this.canvasHeight ? this.heightRatio = 1 : this.heightRatio = this.canvasHeight / this.maxHeight) : (this.canvasHeight = this.parentEl.parent.scrollHeight || this.canvasHeight, this.canvasWidth = this.parentEl.width || this.canvasWidth, this.heightRatio = this.canvasHeight / this.maxHeight, this.canvas.width = this.canvasWidth, this.canvas.height = this.canvasHeight);
          }, l;
        }()
      );
      v.implement(s.prototype, p), S.Decorator = s;
    }), ace.define("ace/virtual_renderer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/config", "ace/layer/gutter", "ace/layer/marker", "ace/layer/text", "ace/layer/cursor", "ace/scrollbar", "ace/scrollbar", "ace/scrollbar_custom", "ace/scrollbar_custom", "ace/renderloop", "ace/layer/font_metrics", "ace/lib/event_emitter", "ace/css/editor-css", "ace/layer/decorators", "ace/lib/useragent", "ace/layer/text_util"], function(M, S, R) {
      var f = M("./lib/oop"), v = M("./lib/dom"), p = M("./lib/lang"), s = M("./config"), l = M("./layer/gutter").Gutter, e = M("./layer/marker").Marker, n = M("./layer/text").Text, i = M("./layer/cursor").Cursor, r = M("./scrollbar").HScrollBar, t = M("./scrollbar").VScrollBar, o = M("./scrollbar_custom").HScrollBar, a = M("./scrollbar_custom").VScrollBar, c = M("./renderloop").RenderLoop, u = M("./layer/font_metrics").FontMetrics, w = M("./lib/event_emitter").EventEmitter, y = M("./css/editor-css"), m = M("./layer/decorators").Decorator, h = M("./lib/useragent"), $ = M("./layer/text_util").isTextToken;
      v.importCssString(y, "ace_editor.css", !1);
      var _ = (
        /** @class */
        function() {
          function L(x, D) {
            var A = this;
            this.container = x || v.createElement("div"), v.addCssClass(this.container, "ace_editor"), v.HI_DPI && v.addCssClass(this.container, "ace_hidpi"), this.setTheme(D), s.get("useStrictCSP") == null && s.set("useStrictCSP", !1), this.$gutter = v.createElement("div"), this.$gutter.className = "ace_gutter", this.container.appendChild(this.$gutter), this.$gutter.setAttribute("aria-hidden", "true"), this.scroller = v.createElement("div"), this.scroller.className = "ace_scroller", this.container.appendChild(this.scroller), this.content = v.createElement("div"), this.content.className = "ace_content", this.scroller.appendChild(this.content), this.$gutterLayer = new l(this.$gutter), this.$gutterLayer.on("changeGutterWidth", this.onGutterResize.bind(this)), this.$markerBack = new e(this.content);
            var C = this.$textLayer = new n(this.content);
            this.canvas = C.element, this.$markerFront = new e(this.content), this.$cursorLayer = new i(this.content), this.$horizScroll = !1, this.$vScroll = !1, this.scrollBar = this.scrollBarV = new t(this.container, this), this.scrollBarH = new r(this.container, this), this.scrollBarV.on("scroll", function(g) {
              A.$scrollAnimation || A.session.setScrollTop(g.data - A.scrollMargin.top);
            }), this.scrollBarH.on("scroll", function(g) {
              A.$scrollAnimation || A.session.setScrollLeft(g.data - A.scrollMargin.left);
            }), this.scrollTop = 0, this.scrollLeft = 0, this.cursorPos = {
              row: 0,
              column: 0
            }, this.$fontMetrics = new u(this.container), this.$textLayer.$setFontMetrics(this.$fontMetrics), this.$textLayer.on("changeCharacterSize", function(g) {
              A.updateCharacterSize(), A.onResize(!0, A.gutterWidth, A.$size.width, A.$size.height), A._signal("changeCharacterSize", g);
            }), this.$size = {
              width: 0,
              height: 0,
              scrollerHeight: 0,
              scrollerWidth: 0,
              $dirty: !0
            }, this.layerConfig = {
              width: 1,
              padding: 0,
              firstRow: 0,
              firstRowScreen: 0,
              lastRow: 0,
              lineHeight: 0,
              characterWidth: 0,
              minHeight: 1,
              maxHeight: 1,
              offset: 0,
              height: 1,
              gutterOffset: 1
            }, this.scrollMargin = {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              v: 0,
              h: 0
            }, this.margin = {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              v: 0,
              h: 0
            }, this.$keepTextAreaAtCursor = !h.isIOS, this.$loop = new c(this.$renderChanges.bind(this), this.container.ownerDocument.defaultView), this.$loop.schedule(this.CHANGE_FULL), this.updateCharacterSize(), this.setPadding(4), this.$addResizeObserver(), s.resetOptions(this), s._signal("renderer", this);
          }
          return L.prototype.updateCharacterSize = function() {
            this.$textLayer.allowBoldFonts != this.$allowBoldFonts && (this.$allowBoldFonts = this.$textLayer.allowBoldFonts, this.setStyle("ace_nobold", !this.$allowBoldFonts)), this.layerConfig.characterWidth = this.characterWidth = this.$textLayer.getCharacterWidth(), this.layerConfig.lineHeight = this.lineHeight = this.$textLayer.getLineHeight(), this.$updatePrintMargin(), v.setStyle(this.scroller.style, "line-height", this.lineHeight + "px");
          }, L.prototype.setSession = function(x) {
            this.session && this.session.doc.off("changeNewLineMode", this.onChangeNewLineMode), this.session = x, x && this.scrollMargin.top && x.getScrollTop() <= 0 && x.setScrollTop(-this.scrollMargin.top), this.$cursorLayer.setSession(x), this.$markerBack.setSession(x), this.$markerFront.setSession(x), this.$gutterLayer.setSession(x), this.$textLayer.setSession(x), x && (this.$loop.schedule(this.CHANGE_FULL), this.session.$setFontMetrics(this.$fontMetrics), this.scrollBarH.scrollLeft = this.scrollBarV.scrollTop = null, this.onChangeNewLineMode = this.onChangeNewLineMode.bind(this), this.onChangeNewLineMode(), this.session.doc.on("changeNewLineMode", this.onChangeNewLineMode));
          }, L.prototype.updateLines = function(x, D, A) {
            if (D === void 0 && (D = 1 / 0), this.$changedLines ? (this.$changedLines.firstRow > x && (this.$changedLines.firstRow = x), this.$changedLines.lastRow < D && (this.$changedLines.lastRow = D)) : this.$changedLines = {
              firstRow: x,
              lastRow: D
            }, this.$changedLines.lastRow < this.layerConfig.firstRow)
              if (A)
                this.$changedLines.lastRow = this.layerConfig.lastRow;
              else
                return;
            this.$changedLines.firstRow > this.layerConfig.lastRow || this.$loop.schedule(this.CHANGE_LINES);
          }, L.prototype.onChangeNewLineMode = function() {
            this.$loop.schedule(this.CHANGE_TEXT), this.$textLayer.$updateEolChar(), this.session.$bidiHandler.setEolChar(this.$textLayer.EOL_CHAR);
          }, L.prototype.onChangeTabSize = function() {
            this.$loop.schedule(this.CHANGE_TEXT | this.CHANGE_MARKER), this.$textLayer.onChangeTabSize();
          }, L.prototype.updateText = function() {
            this.$loop.schedule(this.CHANGE_TEXT);
          }, L.prototype.updateFull = function(x) {
            x ? this.$renderChanges(this.CHANGE_FULL, !0) : this.$loop.schedule(this.CHANGE_FULL);
          }, L.prototype.updateFontSize = function() {
            this.$textLayer.checkForSizeChanges();
          }, L.prototype.$updateSizeAsync = function() {
            this.$loop.pending ? this.$size.$dirty = !0 : this.onResize();
          }, L.prototype.onResize = function(x, D, A, C) {
            if (!(this.resizing > 2)) {
              this.resizing > 0 ? this.resizing++ : this.resizing = x ? 1 : 0;
              var g = this.container;
              C || (C = g.clientHeight || g.scrollHeight), !C && this.$maxLines && this.lineHeight > 1 && (!g.style.height || g.style.height == "0px") && (g.style.height = "1px", C = g.clientHeight || g.scrollHeight), A || (A = g.clientWidth || g.scrollWidth);
              var d = this.$updateCachedSize(x, D, A, C);
              if (this.$resizeTimer && this.$resizeTimer.cancel(), !this.$size.scrollerHeight || !A && !C)
                return this.resizing = 0;
              x && (this.$gutterLayer.$padding = null), x ? this.$renderChanges(d | this.$changes, !0) : this.$loop.schedule(d | this.$changes), this.resizing && (this.resizing = 0), this.scrollBarH.scrollLeft = this.scrollBarV.scrollTop = null, this.$customScrollbar && this.$updateCustomScrollbar(!0);
            }
          }, L.prototype.$updateCachedSize = function(x, D, A, C) {
            C -= this.$extraHeight || 0;
            var g = 0, d = this.$size, b = {
              width: d.width,
              height: d.height,
              scrollerHeight: d.scrollerHeight,
              scrollerWidth: d.scrollerWidth
            };
            if (C && (x || d.height != C) && (d.height = C, g |= this.CHANGE_SIZE, d.scrollerHeight = d.height, this.$horizScroll && (d.scrollerHeight -= this.scrollBarH.getHeight()), this.scrollBarV.setHeight(d.scrollerHeight), this.scrollBarV.element.style.bottom = this.scrollBarH.getHeight() + "px", g = g | this.CHANGE_SCROLL), A && (x || d.width != A)) {
              g |= this.CHANGE_SIZE, d.width = A, D == null && (D = this.$showGutter ? this.$gutter.offsetWidth : 0), this.gutterWidth = D, v.setStyle(this.scrollBarH.element.style, "left", D + "px"), v.setStyle(this.scroller.style, "left", D + this.margin.left + "px"), d.scrollerWidth = Math.max(0, A - D - this.scrollBarV.getWidth() - this.margin.h), v.setStyle(this.$gutter.style, "left", this.margin.left + "px");
              var k = this.scrollBarV.getWidth() + "px";
              v.setStyle(this.scrollBarH.element.style, "right", k), v.setStyle(this.scroller.style, "right", k), v.setStyle(this.scroller.style, "bottom", this.scrollBarH.getHeight()), this.scrollBarH.setWidth(d.scrollerWidth), (this.session && this.session.getUseWrapMode() && this.adjustWrapLimit() || x) && (g |= this.CHANGE_FULL);
            }
            return d.$dirty = !A || !C, g && this._signal("resize", b), g;
          }, L.prototype.onGutterResize = function(x) {
            var D = this.$showGutter ? x : 0;
            D != this.gutterWidth && (this.$changes |= this.$updateCachedSize(!0, D, this.$size.width, this.$size.height)), this.session.getUseWrapMode() && this.adjustWrapLimit() ? this.$loop.schedule(this.CHANGE_FULL) : this.$size.$dirty ? this.$loop.schedule(this.CHANGE_FULL) : this.$computeLayerConfig();
          }, L.prototype.adjustWrapLimit = function() {
            var x = this.$size.scrollerWidth - this.$padding * 2, D = Math.floor(x / this.characterWidth);
            return this.session.adjustWrapLimit(D, this.$showPrintMargin && this.$printMarginColumn);
          }, L.prototype.setAnimatedScroll = function(x) {
            this.setOption("animatedScroll", x);
          }, L.prototype.getAnimatedScroll = function() {
            return this.$animatedScroll;
          }, L.prototype.setShowInvisibles = function(x) {
            this.setOption("showInvisibles", x), this.session.$bidiHandler.setShowInvisibles(x);
          }, L.prototype.getShowInvisibles = function() {
            return this.getOption("showInvisibles");
          }, L.prototype.getDisplayIndentGuides = function() {
            return this.getOption("displayIndentGuides");
          }, L.prototype.setDisplayIndentGuides = function(x) {
            this.setOption("displayIndentGuides", x);
          }, L.prototype.getHighlightIndentGuides = function() {
            return this.getOption("highlightIndentGuides");
          }, L.prototype.setHighlightIndentGuides = function(x) {
            this.setOption("highlightIndentGuides", x);
          }, L.prototype.setShowPrintMargin = function(x) {
            this.setOption("showPrintMargin", x);
          }, L.prototype.getShowPrintMargin = function() {
            return this.getOption("showPrintMargin");
          }, L.prototype.setPrintMarginColumn = function(x) {
            this.setOption("printMarginColumn", x);
          }, L.prototype.getPrintMarginColumn = function() {
            return this.getOption("printMarginColumn");
          }, L.prototype.getShowGutter = function() {
            return this.getOption("showGutter");
          }, L.prototype.setShowGutter = function(x) {
            return this.setOption("showGutter", x);
          }, L.prototype.getFadeFoldWidgets = function() {
            return this.getOption("fadeFoldWidgets");
          }, L.prototype.setFadeFoldWidgets = function(x) {
            this.setOption("fadeFoldWidgets", x);
          }, L.prototype.setHighlightGutterLine = function(x) {
            this.setOption("highlightGutterLine", x);
          }, L.prototype.getHighlightGutterLine = function() {
            return this.getOption("highlightGutterLine");
          }, L.prototype.$updatePrintMargin = function() {
            if (!(!this.$showPrintMargin && !this.$printMarginEl)) {
              if (!this.$printMarginEl) {
                var x = v.createElement("div");
                x.className = "ace_layer ace_print-margin-layer", this.$printMarginEl = v.createElement("div"), this.$printMarginEl.className = "ace_print-margin", x.appendChild(this.$printMarginEl), this.content.insertBefore(x, this.content.firstChild);
              }
              var D = this.$printMarginEl.style;
              D.left = Math.round(this.characterWidth * this.$printMarginColumn + this.$padding) + "px", D.visibility = this.$showPrintMargin ? "visible" : "hidden", this.session && this.session.$wrap == -1 && this.adjustWrapLimit();
            }
          }, L.prototype.getContainerElement = function() {
            return this.container;
          }, L.prototype.getMouseEventTarget = function() {
            return this.scroller;
          }, L.prototype.getTextAreaContainer = function() {
            return this.container;
          }, L.prototype.$moveTextAreaToCursor = function() {
            if (!this.$isMousePressed) {
              var x = this.textarea.style, D = this.$composition;
              if (!this.$keepTextAreaAtCursor && !D) {
                v.translate(this.textarea, -100, 0);
                return;
              }
              var A = this.$cursorLayer.$pixelPos;
              if (A) {
                D && D.markerRange && (A = this.$cursorLayer.getPixelPosition(D.markerRange.start, !0));
                var C = this.layerConfig, g = A.top, d = A.left;
                g -= C.offset;
                var b = D && D.useTextareaForIME || h.isMobile ? this.lineHeight : 1;
                if (g < 0 || g > C.height - b) {
                  v.translate(this.textarea, 0, 0);
                  return;
                }
                var k = 1, I = this.$size.height - b;
                if (!D)
                  g += this.lineHeight;
                else if (D.useTextareaForIME) {
                  var T = this.textarea.value;
                  k = this.characterWidth * this.session.$getStringScreenWidth(T)[0];
                } else
                  g += this.lineHeight + 2;
                d -= this.scrollLeft, d > this.$size.scrollerWidth - k && (d = this.$size.scrollerWidth - k), d += this.gutterWidth + this.margin.left, v.setStyle(x, "height", b + "px"), v.setStyle(x, "width", k + "px"), v.translate(this.textarea, Math.min(d, this.$size.scrollerWidth - k), Math.min(g, I));
              }
            }
          }, L.prototype.getFirstVisibleRow = function() {
            return this.layerConfig.firstRow;
          }, L.prototype.getFirstFullyVisibleRow = function() {
            return this.layerConfig.firstRow + (this.layerConfig.offset === 0 ? 0 : 1);
          }, L.prototype.getLastFullyVisibleRow = function() {
            var x = this.layerConfig, D = x.lastRow, A = this.session.documentToScreenRow(D, 0) * x.lineHeight;
            return A - this.session.getScrollTop() > x.height - x.lineHeight ? D - 1 : D;
          }, L.prototype.getLastVisibleRow = function() {
            return this.layerConfig.lastRow;
          }, L.prototype.setPadding = function(x) {
            this.$padding = x, this.$textLayer.setPadding(x), this.$cursorLayer.setPadding(x), this.$markerFront.setPadding(x), this.$markerBack.setPadding(x), this.$loop.schedule(this.CHANGE_FULL), this.$updatePrintMargin();
          }, L.prototype.setScrollMargin = function(x, D, A, C) {
            var g = this.scrollMargin;
            g.top = x | 0, g.bottom = D | 0, g.right = C | 0, g.left = A | 0, g.v = g.top + g.bottom, g.h = g.left + g.right, g.top && this.scrollTop <= 0 && this.session && this.session.setScrollTop(-g.top), this.updateFull();
          }, L.prototype.setMargin = function(x, D, A, C) {
            var g = this.margin;
            g.top = x | 0, g.bottom = D | 0, g.right = C | 0, g.left = A | 0, g.v = g.top + g.bottom, g.h = g.left + g.right, this.$updateCachedSize(!0, this.gutterWidth, this.$size.width, this.$size.height), this.updateFull();
          }, L.prototype.getHScrollBarAlwaysVisible = function() {
            return this.$hScrollBarAlwaysVisible;
          }, L.prototype.setHScrollBarAlwaysVisible = function(x) {
            this.setOption("hScrollBarAlwaysVisible", x);
          }, L.prototype.getVScrollBarAlwaysVisible = function() {
            return this.$vScrollBarAlwaysVisible;
          }, L.prototype.setVScrollBarAlwaysVisible = function(x) {
            this.setOption("vScrollBarAlwaysVisible", x);
          }, L.prototype.$updateScrollBarV = function() {
            var x = this.layerConfig.maxHeight, D = this.$size.scrollerHeight;
            !this.$maxLines && this.$scrollPastEnd && (x -= (D - this.lineHeight) * this.$scrollPastEnd, this.scrollTop > x - D && (x = this.scrollTop + D, this.scrollBarV.scrollTop = null)), this.scrollBarV.setScrollHeight(x + this.scrollMargin.v), this.scrollBarV.setScrollTop(this.scrollTop + this.scrollMargin.top);
          }, L.prototype.$updateScrollBarH = function() {
            this.scrollBarH.setScrollWidth(this.layerConfig.width + 2 * this.$padding + this.scrollMargin.h), this.scrollBarH.setScrollLeft(this.scrollLeft + this.scrollMargin.left);
          }, L.prototype.freeze = function() {
            this.$frozen = !0;
          }, L.prototype.unfreeze = function() {
            this.$frozen = !1;
          }, L.prototype.$renderChanges = function(x, D) {
            if (this.$changes && (x |= this.$changes, this.$changes = 0), !this.session || !this.container.offsetWidth || this.$frozen || !x && !D) {
              this.$changes |= x;
              return;
            }
            if (this.$size.$dirty)
              return this.$changes |= x, this.onResize(!0);
            this.lineHeight || this.$textLayer.checkForSizeChanges(), this._signal("beforeRender", x), this.session && this.session.$bidiHandler && this.session.$bidiHandler.updateCharacterWidths(this.$fontMetrics);
            var A = this.layerConfig;
            if (x & this.CHANGE_FULL || x & this.CHANGE_SIZE || x & this.CHANGE_TEXT || x & this.CHANGE_LINES || x & this.CHANGE_SCROLL || x & this.CHANGE_H_SCROLL) {
              if (x |= this.$computeLayerConfig() | this.$loop.clear(), A.firstRow != this.layerConfig.firstRow && A.firstRowScreen == this.layerConfig.firstRowScreen) {
                var C = this.scrollTop + (A.firstRow - Math.max(this.layerConfig.firstRow, 0)) * this.lineHeight;
                C > 0 && (this.scrollTop = C, x = x | this.CHANGE_SCROLL, x |= this.$computeLayerConfig() | this.$loop.clear());
              }
              A = this.layerConfig, this.$updateScrollBarV(), x & this.CHANGE_H_SCROLL && this.$updateScrollBarH(), v.translate(this.content, -this.scrollLeft, -A.offset);
              var g = A.width + 2 * this.$padding + "px", d = A.minHeight + "px";
              v.setStyle(this.content.style, "width", g), v.setStyle(this.content.style, "height", d);
            }
            if (x & this.CHANGE_H_SCROLL && (v.translate(this.content, -this.scrollLeft, -A.offset), this.scroller.className = this.scrollLeft <= 0 ? "ace_scroller " : "ace_scroller ace_scroll-left ", this.enableKeyboardAccessibility && (this.scroller.className += this.keyboardFocusClassName)), x & this.CHANGE_FULL) {
              this.$changedLines = null, this.$textLayer.update(A), this.$showGutter && this.$gutterLayer.update(A), this.$customScrollbar && this.$scrollDecorator.$updateDecorators(A), this.$markerBack.update(A), this.$markerFront.update(A), this.$cursorLayer.update(A), this.$moveTextAreaToCursor(), this._signal("afterRender", x);
              return;
            }
            if (x & this.CHANGE_SCROLL) {
              this.$changedLines = null, x & this.CHANGE_TEXT || x & this.CHANGE_LINES ? this.$textLayer.update(A) : this.$textLayer.scrollLines(A), this.$showGutter && (x & this.CHANGE_GUTTER || x & this.CHANGE_LINES ? this.$gutterLayer.update(A) : this.$gutterLayer.scrollLines(A)), this.$customScrollbar && this.$scrollDecorator.$updateDecorators(A), this.$markerBack.update(A), this.$markerFront.update(A), this.$cursorLayer.update(A), this.$moveTextAreaToCursor(), this._signal("afterRender", x);
              return;
            }
            x & this.CHANGE_TEXT ? (this.$changedLines = null, this.$textLayer.update(A), this.$showGutter && this.$gutterLayer.update(A), this.$customScrollbar && this.$scrollDecorator.$updateDecorators(A)) : x & this.CHANGE_LINES ? ((this.$updateLines() || x & this.CHANGE_GUTTER && this.$showGutter) && this.$gutterLayer.update(A), this.$customScrollbar && this.$scrollDecorator.$updateDecorators(A)) : x & this.CHANGE_TEXT || x & this.CHANGE_GUTTER ? (this.$showGutter && this.$gutterLayer.update(A), this.$customScrollbar && this.$scrollDecorator.$updateDecorators(A)) : x & this.CHANGE_CURSOR && (this.$highlightGutterLine && this.$gutterLayer.updateLineHighlight(A), this.$customScrollbar && this.$scrollDecorator.$updateDecorators(A)), x & this.CHANGE_CURSOR && (this.$cursorLayer.update(A), this.$moveTextAreaToCursor()), x & (this.CHANGE_MARKER | this.CHANGE_MARKER_FRONT) && this.$markerFront.update(A), x & (this.CHANGE_MARKER | this.CHANGE_MARKER_BACK) && this.$markerBack.update(A), this._signal("afterRender", x);
          }, L.prototype.$autosize = function() {
            var x = this.session.getScreenLength() * this.lineHeight, D = this.$maxLines * this.lineHeight, A = Math.min(D, Math.max((this.$minLines || 1) * this.lineHeight, x)) + this.scrollMargin.v + (this.$extraHeight || 0);
            this.$horizScroll && (A += this.scrollBarH.getHeight()), this.$maxPixelHeight && A > this.$maxPixelHeight && (A = this.$maxPixelHeight);
            var C = A <= 2 * this.lineHeight, g = !C && x > D;
            if (A != this.desiredHeight || this.$size.height != this.desiredHeight || g != this.$vScroll) {
              g != this.$vScroll && (this.$vScroll = g, this.scrollBarV.setVisible(g));
              var d = this.container.clientWidth;
              this.container.style.height = A + "px", this.$updateCachedSize(!0, this.$gutterWidth, d, A), this.desiredHeight = A, this._signal("autosize");
            }
          }, L.prototype.$computeLayerConfig = function() {
            var x = this.session, D = this.$size, A = D.height <= 2 * this.lineHeight, C = this.session.getScreenLength(), g = C * this.lineHeight, d = this.$getLongestLine(), b = !A && (this.$hScrollBarAlwaysVisible || D.scrollerWidth - d - 2 * this.$padding < 0), k = this.$horizScroll !== b;
            k && (this.$horizScroll = b, this.scrollBarH.setVisible(b));
            var I = this.$vScroll;
            this.$maxLines && this.lineHeight > 1 && (this.$autosize(), A = D.height <= 2 * this.lineHeight);
            var T = D.scrollerHeight + this.lineHeight, O = !this.$maxLines && this.$scrollPastEnd ? (D.scrollerHeight - this.lineHeight) * this.$scrollPastEnd : 0;
            g += O;
            var W = this.scrollMargin;
            this.session.setScrollTop(Math.max(-W.top, Math.min(this.scrollTop, g - D.scrollerHeight + W.bottom))), this.session.setScrollLeft(Math.max(-W.left, Math.min(this.scrollLeft, d + 2 * this.$padding - D.scrollerWidth + W.right)));
            var H = !A && (this.$vScrollBarAlwaysVisible || D.scrollerHeight - g + O < 0 || this.scrollTop > W.top), B = I !== H;
            B && (this.$vScroll = H, this.scrollBarV.setVisible(H));
            var P = this.scrollTop % this.lineHeight, F = Math.ceil(T / this.lineHeight) - 1, z = Math.max(0, Math.round((this.scrollTop - P) / this.lineHeight)), U = z + F, j, Y, G = this.lineHeight;
            z = x.screenToDocumentRow(z, 0);
            var J = x.getFoldLine(z);
            J && (z = J.start.row), j = x.documentToScreenRow(z, 0), Y = x.getRowLength(z) * G, U = Math.min(x.screenToDocumentRow(U, 0), x.getLength() - 1), T = D.scrollerHeight + x.getRowLength(U) * G + Y, P = this.scrollTop - j * G;
            var ie = 0;
            return (this.layerConfig.width != d || k) && (ie = this.CHANGE_H_SCROLL), (k || B) && (ie |= this.$updateCachedSize(!0, this.gutterWidth, D.width, D.height), this._signal("scrollbarVisibilityChanged"), B && (d = this.$getLongestLine())), this.layerConfig = {
              width: d,
              padding: this.$padding,
              firstRow: z,
              firstRowScreen: j,
              lastRow: U,
              lineHeight: G,
              characterWidth: this.characterWidth,
              minHeight: T,
              maxHeight: g,
              offset: P,
              gutterOffset: G ? Math.max(0, Math.ceil((P + D.height - D.scrollerHeight) / G)) : 0,
              height: this.$size.scrollerHeight
            }, this.session.$bidiHandler && this.session.$bidiHandler.setContentWidth(d - this.$padding), ie;
          }, L.prototype.$updateLines = function() {
            if (this.$changedLines) {
              var x = this.$changedLines.firstRow, D = this.$changedLines.lastRow;
              this.$changedLines = null;
              var A = this.layerConfig;
              if (!(x > A.lastRow + 1) && !(D < A.firstRow)) {
                if (D === 1 / 0) {
                  this.$showGutter && this.$gutterLayer.update(A), this.$textLayer.update(A);
                  return;
                }
                return this.$textLayer.updateLines(A, x, D), !0;
              }
            }
          }, L.prototype.$getLongestLine = function() {
            var x = this.session.getScreenWidth();
            return this.showInvisibles && !this.session.$useWrapMode && (x += 1), this.$textLayer && x > this.$textLayer.MAX_LINE_LENGTH && (x = this.$textLayer.MAX_LINE_LENGTH + 30), Math.max(this.$size.scrollerWidth - 2 * this.$padding, Math.round(x * this.characterWidth));
          }, L.prototype.updateFrontMarkers = function() {
            this.$markerFront.setMarkers(this.session.getMarkers(!0)), this.$loop.schedule(this.CHANGE_MARKER_FRONT);
          }, L.prototype.updateBackMarkers = function() {
            this.$markerBack.setMarkers(this.session.getMarkers()), this.$loop.schedule(this.CHANGE_MARKER_BACK);
          }, L.prototype.addGutterDecoration = function(x, D) {
            this.$gutterLayer.addGutterDecoration(x, D);
          }, L.prototype.removeGutterDecoration = function(x, D) {
            this.$gutterLayer.removeGutterDecoration(x, D);
          }, L.prototype.updateBreakpoints = function(x) {
            this._rows = x, this.$loop.schedule(this.CHANGE_GUTTER);
          }, L.prototype.setAnnotations = function(x) {
            this.$gutterLayer.setAnnotations(x), this.$loop.schedule(this.CHANGE_GUTTER);
          }, L.prototype.updateCursor = function() {
            this.$loop.schedule(this.CHANGE_CURSOR);
          }, L.prototype.hideCursor = function() {
            this.$cursorLayer.hideCursor();
          }, L.prototype.showCursor = function() {
            this.$cursorLayer.showCursor();
          }, L.prototype.scrollSelectionIntoView = function(x, D, A) {
            this.scrollCursorIntoView(x, A), this.scrollCursorIntoView(D, A);
          }, L.prototype.scrollCursorIntoView = function(x, D, A) {
            if (this.$size.scrollerHeight !== 0) {
              var C = this.$cursorLayer.getPixelPosition(x), g = C.left, d = C.top, b = A && A.top || 0, k = A && A.bottom || 0;
              this.$scrollAnimation && (this.$stopAnimation = !0);
              var I = this.$scrollAnimation ? this.session.getScrollTop() : this.scrollTop;
              I + b > d ? (D && I + b > d + this.lineHeight && (d -= D * this.$size.scrollerHeight), d === 0 && (d = -this.scrollMargin.top), this.session.setScrollTop(d)) : I + this.$size.scrollerHeight - k < d + this.lineHeight && (D && I + this.$size.scrollerHeight - k < d - this.lineHeight && (d += D * this.$size.scrollerHeight), this.session.setScrollTop(d + this.lineHeight + k - this.$size.scrollerHeight));
              var T = this.scrollLeft, O = 2 * this.layerConfig.characterWidth;
              g - O < T ? (g -= O, g < this.$padding + O && (g = -this.scrollMargin.left), this.session.setScrollLeft(g)) : (g += O, T + this.$size.scrollerWidth < g + this.characterWidth ? this.session.setScrollLeft(Math.round(g + this.characterWidth - this.$size.scrollerWidth)) : T <= this.$padding && g - T < this.characterWidth && this.session.setScrollLeft(0));
            }
          }, L.prototype.getScrollTop = function() {
            return this.session.getScrollTop();
          }, L.prototype.getScrollLeft = function() {
            return this.session.getScrollLeft();
          }, L.prototype.getScrollTopRow = function() {
            return this.scrollTop / this.lineHeight;
          }, L.prototype.getScrollBottomRow = function() {
            return Math.max(0, Math.floor((this.scrollTop + this.$size.scrollerHeight) / this.lineHeight) - 1);
          }, L.prototype.scrollToRow = function(x) {
            this.session.setScrollTop(x * this.lineHeight);
          }, L.prototype.alignCursor = function(x, D) {
            typeof x == "number" && (x = { row: x, column: 0 });
            var A = this.$cursorLayer.getPixelPosition(x), C = this.$size.scrollerHeight - this.lineHeight, g = A.top - C * (D || 0);
            return this.session.setScrollTop(g), g;
          }, L.prototype.$calcSteps = function(x, D) {
            var A = 0, C = this.STEPS, g = [], d = function(b, k, I) {
              return I * (Math.pow(b - 1, 3) + 1) + k;
            };
            for (A = 0; A < C; ++A)
              g.push(d(A / this.STEPS, x, D - x));
            return g;
          }, L.prototype.scrollToLine = function(x, D, A, C) {
            var g = this.$cursorLayer.getPixelPosition({ row: x, column: 0 }), d = g.top;
            D && (d -= this.$size.scrollerHeight / 2);
            var b = this.scrollTop;
            this.session.setScrollTop(d), A !== !1 && this.animateScrolling(b, C);
          }, L.prototype.animateScrolling = function(x, D) {
            var A = this.scrollTop;
            if (!this.$animatedScroll)
              return;
            var C = this;
            if (x == A)
              return;
            if (this.$scrollAnimation) {
              var g = this.$scrollAnimation.steps;
              if (g.length && (x = g[0], x == A))
                return;
            }
            var d = C.$calcSteps(x, A);
            this.$scrollAnimation = { from: x, to: A, steps: d }, clearInterval(this.$timer), C.session.setScrollTop(d.shift()), C.session.$scrollTop = A;
            function b() {
              C.$timer = clearInterval(C.$timer), C.$scrollAnimation = null, C.$stopAnimation = !1, D && D();
            }
            this.$timer = setInterval(function() {
              if (C.$stopAnimation) {
                b();
                return;
              }
              if (!C.session)
                return clearInterval(C.$timer);
              d.length ? (C.session.setScrollTop(d.shift()), C.session.$scrollTop = A) : A != null ? (C.session.$scrollTop = -1, C.session.setScrollTop(A), A = null) : b();
            }, 10);
          }, L.prototype.scrollToY = function(x) {
            this.scrollTop !== x && (this.$loop.schedule(this.CHANGE_SCROLL), this.scrollTop = x);
          }, L.prototype.scrollToX = function(x) {
            this.scrollLeft !== x && (this.scrollLeft = x), this.$loop.schedule(this.CHANGE_H_SCROLL);
          }, L.prototype.scrollTo = function(x, D) {
            this.session.setScrollTop(D), this.session.setScrollLeft(x);
          }, L.prototype.scrollBy = function(x, D) {
            D && this.session.setScrollTop(this.session.getScrollTop() + D), x && this.session.setScrollLeft(this.session.getScrollLeft() + x);
          }, L.prototype.isScrollableBy = function(x, D) {
            if (D < 0 && this.session.getScrollTop() >= 1 - this.scrollMargin.top || D > 0 && this.session.getScrollTop() + this.$size.scrollerHeight - this.layerConfig.maxHeight < -1 + this.scrollMargin.bottom || x < 0 && this.session.getScrollLeft() >= 1 - this.scrollMargin.left || x > 0 && this.session.getScrollLeft() + this.$size.scrollerWidth - this.layerConfig.width < -1 + this.scrollMargin.right)
              return !0;
          }, L.prototype.pixelToScreenCoordinates = function(x, D) {
            var A;
            if (this.$hasCssTransforms) {
              A = { top: 0, left: 0 };
              var C = this.$fontMetrics.transformCoordinates([x, D]);
              x = C[1] - this.gutterWidth - this.margin.left, D = C[0];
            } else
              A = this.scroller.getBoundingClientRect();
            var g = x + this.scrollLeft - A.left - this.$padding, d = g / this.characterWidth, b = Math.floor((D + this.scrollTop - A.top) / this.lineHeight), k = this.$blockCursor ? Math.floor(d) : Math.round(d);
            return { row: b, column: k, side: d - k > 0 ? 1 : -1, offsetX: g };
          }, L.prototype.screenToTextCoordinates = function(x, D) {
            var A;
            if (this.$hasCssTransforms) {
              A = { top: 0, left: 0 };
              var C = this.$fontMetrics.transformCoordinates([x, D]);
              x = C[1] - this.gutterWidth - this.margin.left, D = C[0];
            } else
              A = this.scroller.getBoundingClientRect();
            var g = x + this.scrollLeft - A.left - this.$padding, d = g / this.characterWidth, b = this.$blockCursor ? Math.floor(d) : Math.round(d), k = Math.floor((D + this.scrollTop - A.top) / this.lineHeight);
            return this.session.screenToDocumentPosition(k, Math.max(b, 0), g);
          }, L.prototype.textToScreenCoordinates = function(x, D) {
            var A = this.scroller.getBoundingClientRect(), C = this.session.documentToScreenPosition(x, D), g = this.$padding + (this.session.$bidiHandler.isBidiRow(C.row, x) ? this.session.$bidiHandler.getPosLeft(C.column) : Math.round(C.column * this.characterWidth)), d = C.row * this.lineHeight;
            return {
              pageX: A.left + g - this.scrollLeft,
              pageY: A.top + d - this.scrollTop
            };
          }, L.prototype.visualizeFocus = function() {
            v.addCssClass(this.container, "ace_focus");
          }, L.prototype.visualizeBlur = function() {
            v.removeCssClass(this.container, "ace_focus");
          }, L.prototype.showComposition = function(x) {
            this.$composition = x, x.cssText || (x.cssText = this.textarea.style.cssText), x.useTextareaForIME == null && (x.useTextareaForIME = this.$useTextareaForIME), this.$useTextareaForIME ? (v.addCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = "", this.$moveTextAreaToCursor(), this.$cursorLayer.element.style.display = "none") : x.markerId = this.session.addMarker(x.markerRange, "ace_composition_marker", "text");
          }, L.prototype.setCompositionText = function(x) {
            var D = this.session.selection.cursor;
            this.addToken(x, "composition_placeholder", D.row, D.column), this.$moveTextAreaToCursor();
          }, L.prototype.hideComposition = function() {
            if (this.$composition) {
              this.$composition.markerId && this.session.removeMarker(this.$composition.markerId), v.removeCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = this.$composition.cssText;
              var x = this.session.selection.cursor;
              this.removeExtraToken(x.row, x.column), this.$composition = null, this.$cursorLayer.element.style.display = "";
            }
          }, L.prototype.setGhostText = function(x, D) {
            var A = this.session.selection.cursor, C = D || { row: A.row, column: A.column };
            this.removeGhostText();
            var g = this.$calculateWrappedTextChunks(x, C);
            this.addToken(g[0].text, "ghost_text", C.row, C.column), this.$ghostText = {
              text: x,
              position: {
                row: C.row,
                column: C.column
              }
            };
            var d = v.createElement("div");
            if (g.length > 1) {
              var b = this.hideTokensAfterPosition(C.row, C.column), k;
              g.slice(1).forEach(function(B) {
                var P = v.createElement("div"), F = v.createElement("span");
                F.className = "ace_ghost_text", B.wrapped && (P.className = "ghost_text_line_wrapped"), B.text.length === 0 && (B.text = " "), F.appendChild(v.createTextNode(B.text)), P.appendChild(F), d.appendChild(P), k = P;
              }), b.forEach(function(B) {
                var P = v.createElement("span");
                $(B.type) || (P.className = "ace_" + B.type.replace(/\./g, " ace_")), P.appendChild(v.createTextNode(B.value)), k.appendChild(P);
              }), this.$ghostTextWidget = {
                el: d,
                row: C.row,
                column: C.column,
                className: "ace_ghost_text_container"
              }, this.session.widgetManager.addLineWidget(this.$ghostTextWidget);
              var I = this.$cursorLayer.getPixelPosition(C, !0), T = this.container, O = T.getBoundingClientRect().height, W = g.length * this.lineHeight, H = W < O - I.top;
              if (H)
                return;
              W < O ? this.scrollBy(0, (g.length - 1) * this.lineHeight) : this.scrollToRow(C.row);
            }
          }, L.prototype.$calculateWrappedTextChunks = function(x, D) {
            var A = this.$size.scrollerWidth - this.$padding * 2, C = Math.floor(A / this.characterWidth) - 2;
            C = C <= 0 ? 60 : C;
            for (var g = x.split(/\r?\n/), d = [], b = 0; b < g.length; b++) {
              var k = this.session.$getDisplayTokens(g[b], D.column), I = this.session.$computeWrapSplits(k, C, this.session.$tabSize);
              if (I.length > 0) {
                var T = 0;
                I.push(g[b].length);
                for (var O = 0; O < I.length; O++) {
                  var W = g[b].slice(T, I[O]);
                  d.push({ text: W, wrapped: !0 }), T = I[O];
                }
              } else
                d.push({ text: g[b], wrapped: !1 });
            }
            return d;
          }, L.prototype.removeGhostText = function() {
            if (this.$ghostText) {
              var x = this.$ghostText.position;
              this.removeExtraToken(x.row, x.column), this.$ghostTextWidget && (this.session.widgetManager.removeLineWidget(this.$ghostTextWidget), this.$ghostTextWidget = null), this.$ghostText = null;
            }
          }, L.prototype.addToken = function(x, D, A, C) {
            var g = this.session;
            g.bgTokenizer.lines[A] = null;
            var d = { type: D, value: x }, b = g.getTokens(A);
            if (C == null || !b.length)
              b.push(d);
            else
              for (var k = 0, I = 0; I < b.length; I++) {
                var T = b[I];
                if (k += T.value.length, C <= k) {
                  var O = T.value.length - (k - C), W = T.value.slice(0, O), H = T.value.slice(O);
                  b.splice(I, 1, { type: T.type, value: W }, d, { type: T.type, value: H });
                  break;
                }
              }
            this.updateLines(A, A);
          }, L.prototype.hideTokensAfterPosition = function(x, D) {
            for (var A = this.session.getTokens(x), C = 0, g = !1, d = [], b = 0; b < A.length; b++) {
              var k = A[b];
              if (C += k.value.length, k.type !== "ghost_text") {
                if (g) {
                  d.push({ type: k.type, value: k.value }), k.type = "hidden_token";
                  continue;
                }
                C === D && (g = !0);
              }
            }
            return this.updateLines(x, x), d;
          }, L.prototype.removeExtraToken = function(x, D) {
            this.session.bgTokenizer.lines[x] = null, this.updateLines(x, x);
          }, L.prototype.setTheme = function(x, D) {
            var A = this;
            if (this.$themeId = x, A._dispatchEvent("themeChange", { theme: x }), !x || typeof x == "string") {
              var C = x || this.$options.theme.initialValue;
              s.loadModule(["theme", C], g);
            } else
              g(x);
            function g(d) {
              if (A.$themeId != x)
                return D && D();
              if (!d || !d.cssClass)
                throw new Error("couldn't load module " + x + " or it didn't call define");
              d.$id && (A.$themeId = d.$id), v.importCssString(d.cssText, d.cssClass, A.container), A.theme && v.removeCssClass(A.container, A.theme.cssClass);
              var b = "padding" in d ? d.padding : "padding" in (A.theme || {}) ? 4 : A.$padding;
              A.$padding && b != A.$padding && A.setPadding(b), A.$theme = d.cssClass, A.theme = d, v.addCssClass(A.container, d.cssClass), v.setCssClass(A.container, "ace_dark", d.isDark), A.$size && (A.$size.width = 0, A.$updateSizeAsync()), A._dispatchEvent("themeLoaded", { theme: d }), D && D(), h.isSafari && A.scroller && (A.scroller.style.background = "red", A.scroller.style.background = "");
            }
          }, L.prototype.getTheme = function() {
            return this.$themeId;
          }, L.prototype.setStyle = function(x, D) {
            v.setCssClass(this.container, x, D !== !1);
          }, L.prototype.unsetStyle = function(x) {
            v.removeCssClass(this.container, x);
          }, L.prototype.setCursorStyle = function(x) {
            v.setStyle(this.scroller.style, "cursor", x);
          }, L.prototype.setMouseCursor = function(x) {
            v.setStyle(this.scroller.style, "cursor", x);
          }, L.prototype.attachToShadowRoot = function() {
            v.importCssString(y, "ace_editor.css", this.container);
          }, L.prototype.destroy = function() {
            this.freeze(), this.$fontMetrics.destroy(), this.$cursorLayer.destroy(), this.removeAllListeners(), this.container.textContent = "", this.setOption("useResizeObserver", !1);
          }, L.prototype.$updateCustomScrollbar = function(x) {
            var D = this;
            this.$horizScroll = this.$vScroll = null, this.scrollBarV.element.remove(), this.scrollBarH.element.remove(), this.$scrollDecorator && delete this.$scrollDecorator, x === !0 ? (this.scrollBarV = new a(this.container, this), this.scrollBarH = new o(this.container, this), this.scrollBarV.setHeight(this.$size.scrollerHeight), this.scrollBarH.setWidth(this.$size.scrollerWidth), this.scrollBarV.addEventListener("scroll", function(A) {
              D.$scrollAnimation || D.session.setScrollTop(A.data - D.scrollMargin.top);
            }), this.scrollBarH.addEventListener("scroll", function(A) {
              D.$scrollAnimation || D.session.setScrollLeft(A.data - D.scrollMargin.left);
            }), this.$scrollDecorator = new m(this.scrollBarV, this), this.$scrollDecorator.$updateDecorators()) : (this.scrollBarV = new t(this.container, this), this.scrollBarH = new r(this.container, this), this.scrollBarV.addEventListener("scroll", function(A) {
              D.$scrollAnimation || D.session.setScrollTop(A.data - D.scrollMargin.top);
            }), this.scrollBarH.addEventListener("scroll", function(A) {
              D.$scrollAnimation || D.session.setScrollLeft(A.data - D.scrollMargin.left);
            }));
          }, L.prototype.$addResizeObserver = function() {
            if (!(!window.ResizeObserver || this.$resizeObserver)) {
              var x = this;
              this.$resizeTimer = p.delayedCall(function() {
                x.destroyed || x.onResize();
              }, 50), this.$resizeObserver = new window.ResizeObserver(function(D) {
                var A = D[0].contentRect.width, C = D[0].contentRect.height;
                Math.abs(x.$size.width - A) > 1 || Math.abs(x.$size.height - C) > 1 ? x.$resizeTimer.delay() : x.$resizeTimer.cancel();
              }), this.$resizeObserver.observe(this.container);
            }
          }, L;
        }()
      );
      _.prototype.CHANGE_CURSOR = 1, _.prototype.CHANGE_MARKER = 2, _.prototype.CHANGE_GUTTER = 4, _.prototype.CHANGE_SCROLL = 8, _.prototype.CHANGE_LINES = 16, _.prototype.CHANGE_TEXT = 32, _.prototype.CHANGE_SIZE = 64, _.prototype.CHANGE_MARKER_BACK = 128, _.prototype.CHANGE_MARKER_FRONT = 256, _.prototype.CHANGE_FULL = 512, _.prototype.CHANGE_H_SCROLL = 1024, _.prototype.$changes = 0, _.prototype.$padding = null, _.prototype.$frozen = !1, _.prototype.STEPS = 8, f.implement(_.prototype, w), s.defineOptions(_.prototype, "renderer", {
        useResizeObserver: {
          set: function(L) {
            !L && this.$resizeObserver ? (this.$resizeObserver.disconnect(), this.$resizeTimer.cancel(), this.$resizeTimer = this.$resizeObserver = null) : L && !this.$resizeObserver && this.$addResizeObserver();
          }
        },
        animatedScroll: { initialValue: !1 },
        showInvisibles: {
          set: function(L) {
            this.$textLayer.setShowInvisibles(L) && this.$loop.schedule(this.CHANGE_TEXT);
          },
          initialValue: !1
        },
        showPrintMargin: {
          set: function() {
            this.$updatePrintMargin();
          },
          initialValue: !0
        },
        printMarginColumn: {
          set: function() {
            this.$updatePrintMargin();
          },
          initialValue: 80
        },
        printMargin: {
          set: function(L) {
            typeof L == "number" && (this.$printMarginColumn = L), this.$showPrintMargin = !!L, this.$updatePrintMargin();
          },
          get: function() {
            return this.$showPrintMargin && this.$printMarginColumn;
          }
        },
        showGutter: {
          set: function(L) {
            this.$gutter.style.display = L ? "block" : "none", this.$loop.schedule(this.CHANGE_FULL), this.onGutterResize();
          },
          initialValue: !0
        },
        useSvgGutterIcons: {
          set: function(L) {
            this.$gutterLayer.$useSvgGutterIcons = L;
          },
          initialValue: !1
        },
        showFoldedAnnotations: {
          set: function(L) {
            this.$gutterLayer.$showFoldedAnnotations = L;
          },
          initialValue: !1
        },
        fadeFoldWidgets: {
          set: function(L) {
            v.setCssClass(this.$gutter, "ace_fade-fold-widgets", L);
          },
          initialValue: !1
        },
        showFoldWidgets: {
          set: function(L) {
            this.$gutterLayer.setShowFoldWidgets(L), this.$loop.schedule(this.CHANGE_GUTTER);
          },
          initialValue: !0
        },
        displayIndentGuides: {
          set: function(L) {
            this.$textLayer.setDisplayIndentGuides(L) && this.$loop.schedule(this.CHANGE_TEXT);
          },
          initialValue: !0
        },
        highlightIndentGuides: {
          set: function(L) {
            this.$textLayer.setHighlightIndentGuides(L) == !0 ? this.$textLayer.$highlightIndentGuide() : this.$textLayer.$clearActiveIndentGuide(this.$textLayer.$lines.cells);
          },
          initialValue: !0
        },
        highlightGutterLine: {
          set: function(L) {
            this.$gutterLayer.setHighlightGutterLine(L), this.$loop.schedule(this.CHANGE_GUTTER);
          },
          initialValue: !0
        },
        hScrollBarAlwaysVisible: {
          set: function(L) {
            (!this.$hScrollBarAlwaysVisible || !this.$horizScroll) && this.$loop.schedule(this.CHANGE_SCROLL);
          },
          initialValue: !1
        },
        vScrollBarAlwaysVisible: {
          set: function(L) {
            (!this.$vScrollBarAlwaysVisible || !this.$vScroll) && this.$loop.schedule(this.CHANGE_SCROLL);
          },
          initialValue: !1
        },
        fontSize: {
          set: function(L) {
            typeof L == "number" && (L = L + "px"), this.container.style.fontSize = L, this.updateFontSize();
          },
          initialValue: 12
        },
        fontFamily: {
          set: function(L) {
            this.container.style.fontFamily = L, this.updateFontSize();
          }
        },
        maxLines: {
          set: function(L) {
            this.updateFull();
          }
        },
        minLines: {
          set: function(L) {
            this.$minLines < 562949953421311 || (this.$minLines = 0), this.updateFull();
          }
        },
        maxPixelHeight: {
          set: function(L) {
            this.updateFull();
          },
          initialValue: 0
        },
        scrollPastEnd: {
          set: function(L) {
            L = +L || 0, this.$scrollPastEnd != L && (this.$scrollPastEnd = L, this.$loop.schedule(this.CHANGE_SCROLL));
          },
          initialValue: 0,
          handlesSet: !0
        },
        fixedWidthGutter: {
          set: function(L) {
            this.$gutterLayer.$fixedWidth = !!L, this.$loop.schedule(this.CHANGE_GUTTER);
          }
        },
        customScrollbar: {
          set: function(L) {
            this.$updateCustomScrollbar(L);
          },
          initialValue: !1
        },
        theme: {
          set: function(L) {
            this.setTheme(L);
          },
          get: function() {
            return this.$themeId || this.theme;
          },
          initialValue: "./theme/textmate",
          handlesSet: !0
        },
        hasCssTransforms: {},
        useTextareaForIME: {
          initialValue: !h.isMobile && !h.isIE
        }
      }), S.VirtualRenderer = _;
    }), ace.define("ace/worker/worker_client", ["require", "exports", "module", "ace/lib/oop", "ace/lib/net", "ace/lib/event_emitter", "ace/config"], function(M, S, R) {
      var f = M("../lib/oop"), v = M("../lib/net"), p = M("../lib/event_emitter").EventEmitter, s = M("../config");
      function l(r) {
        var t = "importScripts('" + v.qualifyURL(r) + "');";
        try {
          return new Blob([t], { type: "application/javascript" });
        } catch {
          var o = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder, a = new o();
          return a.append(t), a.getBlob("application/javascript");
        }
      }
      function e(r) {
        if (typeof Worker > "u")
          return { postMessage: function() {
          }, terminate: function() {
          } };
        if (s.get("loadWorkerFromBlob")) {
          var t = l(r), o = window.URL || window.webkitURL, a = o.createObjectURL(t);
          return new Worker(a);
        }
        return new Worker(r);
      }
      var n = function(r) {
        r.postMessage || (r = this.$createWorkerFromOldConfig.apply(this, arguments)), this.$worker = r, this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this), this.changeListener = this.changeListener.bind(this), this.onMessage = this.onMessage.bind(this), this.callbackId = 1, this.callbacks = {}, this.$worker.onmessage = this.onMessage;
      };
      (function() {
        f.implement(this, p), this.$createWorkerFromOldConfig = function(r, t, o, a, c) {
          if (M.nameToUrl && !M.toUrl && (M.toUrl = M.nameToUrl), s.get("packaged") || !M.toUrl)
            a = a || s.moduleUrl(t, "worker");
          else {
            var u = this.$normalizePath;
            a = a || u(M.toUrl("ace/worker/worker.js", null, "_"));
            var w = {};
            r.forEach(function(y) {
              w[y] = u(M.toUrl(y, null, "_").replace(/(\.js)?(\?.*)?$/, ""));
            });
          }
          return this.$worker = e(a), c && this.send("importScripts", c), this.$worker.postMessage({
            init: !0,
            tlns: w,
            module: t,
            classname: o
          }), this.$worker;
        }, this.onMessage = function(r) {
          var t = r.data;
          switch (t.type) {
            case "event":
              this._signal(t.name, { data: t.data });
              break;
            case "call":
              var o = this.callbacks[t.id];
              o && (o(t.data), delete this.callbacks[t.id]);
              break;
            case "error":
              this.reportError(t.data);
              break;
            case "log":
              window.console && console.log && console.log.apply(console, t.data);
              break;
          }
        }, this.reportError = function(r) {
          window.console && console.error && console.error(r);
        }, this.$normalizePath = function(r) {
          return v.qualifyURL(r);
        }, this.terminate = function() {
          this._signal("terminate", {}), this.deltaQueue = null, this.$worker.terminate(), this.$worker.onerror = function(r) {
            r.preventDefault();
          }, this.$worker = null, this.$doc && this.$doc.off("change", this.changeListener), this.$doc = null;
        }, this.send = function(r, t) {
          this.$worker.postMessage({ command: r, args: t });
        }, this.call = function(r, t, o) {
          if (o) {
            var a = this.callbackId++;
            this.callbacks[a] = o, t.push(a);
          }
          this.send(r, t);
        }, this.emit = function(r, t) {
          try {
            t.data && t.data.err && (t.data.err = { message: t.data.err.message, stack: t.data.err.stack, code: t.data.err.code }), this.$worker && this.$worker.postMessage({ event: r, data: { data: t.data } });
          } catch (o) {
            console.error(o.stack);
          }
        }, this.attachToDocument = function(r) {
          this.$doc && this.terminate(), this.$doc = r, this.call("setValue", [r.getValue()]), r.on("change", this.changeListener, !0);
        }, this.changeListener = function(r) {
          this.deltaQueue || (this.deltaQueue = [], setTimeout(this.$sendDeltaQueue, 0)), r.action == "insert" ? this.deltaQueue.push(r.start, r.lines) : this.deltaQueue.push(r.start, r.end);
        }, this.$sendDeltaQueue = function() {
          var r = this.deltaQueue;
          r && (this.deltaQueue = null, r.length > 50 && r.length > this.$doc.getLength() >> 1 ? this.call("setValue", [this.$doc.getValue()]) : this.emit("change", { data: r }));
        };
      }).call(n.prototype);
      var i = function(r, t, o) {
        var a = null, c = !1, u = Object.create(p), w = [], y = new n({
          messageBuffer: w,
          terminate: function() {
          },
          postMessage: function(h) {
            w.push(h), a && (c ? setTimeout(m) : m());
          }
        });
        y.setEmitSync = function(h) {
          c = h;
        };
        var m = function() {
          var h = w.shift();
          h.command ? a[h.command].apply(a, h.args) : h.event && u._signal(h.event, h.data);
        };
        return u.postMessage = function(h) {
          y.onMessage({ data: h });
        }, u.callback = function(h, $) {
          this.postMessage({ type: "call", id: $, data: h });
        }, u.emit = function(h, $) {
          this.postMessage({ type: "event", name: h, data: $ });
        }, s.loadModule(["worker", t], function(h) {
          for (a = new h[o](u); w.length; )
            m();
        }), y;
      };
      S.UIWorkerClient = i, S.WorkerClient = n, S.createWorker = e;
    }), ace.define("ace/placeholder", ["require", "exports", "module", "ace/range", "ace/lib/event_emitter", "ace/lib/oop"], function(M, S, R) {
      var f = M("./range").Range, v = M("./lib/event_emitter").EventEmitter, p = M("./lib/oop"), s = (
        /** @class */
        function() {
          function l(e, n, i, r, t, o) {
            var a = this;
            this.length = n, this.session = e, this.doc = e.getDocument(), this.mainClass = t, this.othersClass = o, this.$onUpdate = this.onUpdate.bind(this), this.doc.on("change", this.$onUpdate, !0), this.$others = r, this.$onCursorChange = function() {
              setTimeout(function() {
                a.onCursorChange();
              });
            }, this.$pos = i;
            var c = e.getUndoManager().$undoStack || e.getUndoManager().$undostack || { length: -1 };
            this.$undoStackDepth = c.length, this.setup(), e.selection.on("changeCursor", this.$onCursorChange);
          }
          return l.prototype.setup = function() {
            var e = this, n = this.doc, i = this.session;
            this.selectionBefore = i.selection.toJSON(), i.selection.inMultiSelectMode && i.selection.toSingleRange(), this.pos = n.createAnchor(this.$pos.row, this.$pos.column);
            var r = this.pos;
            r.$insertRight = !0, r.detach(), r.markerId = i.addMarker(new f(r.row, r.column, r.row, r.column + this.length), this.mainClass, null, !1), this.others = [], this.$others.forEach(function(t) {
              var o = n.createAnchor(t.row, t.column);
              o.$insertRight = !0, o.detach(), e.others.push(o);
            }), i.setUndoSelect(!1);
          }, l.prototype.showOtherMarkers = function() {
            if (!this.othersActive) {
              var e = this.session, n = this;
              this.othersActive = !0, this.others.forEach(function(i) {
                i.markerId = e.addMarker(new f(i.row, i.column, i.row, i.column + n.length), n.othersClass, null, !1);
              });
            }
          }, l.prototype.hideOtherMarkers = function() {
            if (this.othersActive) {
              this.othersActive = !1;
              for (var e = 0; e < this.others.length; e++)
                this.session.removeMarker(this.others[e].markerId);
            }
          }, l.prototype.onUpdate = function(e) {
            if (this.$updating)
              return this.updateAnchors(e);
            var n = e;
            if (n.start.row === n.end.row && n.start.row === this.pos.row) {
              this.$updating = !0;
              var i = e.action === "insert" ? n.end.column - n.start.column : n.start.column - n.end.column, r = n.start.column >= this.pos.column && n.start.column <= this.pos.column + this.length + 1, t = n.start.column - this.pos.column;
              if (this.updateAnchors(e), r && (this.length += i), r && !this.session.$fromUndo) {
                if (e.action === "insert")
                  for (var o = this.others.length - 1; o >= 0; o--) {
                    var a = this.others[o], c = { row: a.row, column: a.column + t };
                    this.doc.insertMergedLines(c, e.lines);
                  }
                else if (e.action === "remove")
                  for (var o = this.others.length - 1; o >= 0; o--) {
                    var a = this.others[o], c = { row: a.row, column: a.column + t };
                    this.doc.remove(new f(c.row, c.column, c.row, c.column - i));
                  }
              }
              this.$updating = !1, this.updateMarkers();
            }
          }, l.prototype.updateAnchors = function(e) {
            this.pos.onChange(e);
            for (var n = this.others.length; n--; )
              this.others[n].onChange(e);
            this.updateMarkers();
          }, l.prototype.updateMarkers = function() {
            if (!this.$updating) {
              var e = this, n = this.session, i = function(t, o) {
                n.removeMarker(t.markerId), t.markerId = n.addMarker(new f(t.row, t.column, t.row, t.column + e.length), o, null, !1);
              };
              i(this.pos, this.mainClass);
              for (var r = this.others.length; r--; )
                i(this.others[r], this.othersClass);
            }
          }, l.prototype.onCursorChange = function(e) {
            if (!(this.$updating || !this.session)) {
              var n = this.session.selection.getCursor();
              n.row === this.pos.row && n.column >= this.pos.column && n.column <= this.pos.column + this.length ? (this.showOtherMarkers(), this._emit("cursorEnter", e)) : (this.hideOtherMarkers(), this._emit("cursorLeave", e));
            }
          }, l.prototype.detach = function() {
            this.session.removeMarker(this.pos && this.pos.markerId), this.hideOtherMarkers(), this.doc.off("change", this.$onUpdate), this.session.selection.off("changeCursor", this.$onCursorChange), this.session.setUndoSelect(!0), this.session = null;
          }, l.prototype.cancel = function() {
            if (this.$undoStackDepth !== -1) {
              for (var e = this.session.getUndoManager(), n = (e.$undoStack || e.$undostack).length - this.$undoStackDepth, i = 0; i < n; i++)
                e.undo(this.session, !0);
              this.selectionBefore && this.session.selection.fromJSON(this.selectionBefore);
            }
          }, l;
        }()
      );
      p.implement(s.prototype, v), S.PlaceHolder = s;
    }), ace.define("ace/mouse/multi_select_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function(M, S, R) {
      var f = M("../lib/event"), v = M("../lib/useragent");
      function p(l, e) {
        return l.row == e.row && l.column == e.column;
      }
      function s(l) {
        var e = l.domEvent, n = e.altKey, i = e.shiftKey, r = e.ctrlKey, t = l.getAccelKey(), o = l.getButton();
        if (r && v.isMac && (o = e.button), l.editor.inMultiSelectMode && o == 2) {
          l.editor.textInput.onContextMenu(l.domEvent);
          return;
        }
        if (!r && !n && !t) {
          o === 0 && l.editor.inMultiSelectMode && l.editor.exitMultiSelectMode();
          return;
        }
        if (o === 0) {
          var a = l.editor, c = a.selection, u = a.inMultiSelectMode, w = l.getDocumentPosition(), y = c.getCursor(), m = l.inSelection() || c.isEmpty() && p(w, y), h = l.x, $ = l.y, _ = function(W) {
            h = W.clientX, $ = W.clientY;
          }, L = a.session, x = a.renderer.pixelToScreenCoordinates(h, $), D = x, A;
          if (a.$mouseHandler.$enableJumpToDef)
            r && n || t && n ? A = i ? "block" : "add" : n && a.$blockSelectEnabled && (A = "block");
          else if (t && !n) {
            if (A = "add", !u && i)
              return;
          } else n && a.$blockSelectEnabled && (A = "block");
          if (A && v.isMac && e.ctrlKey && a.$mouseHandler.cancelContextMenu(), A == "add") {
            if (!u && m)
              return;
            if (!u) {
              var C = c.toOrientedRange();
              a.addSelectionMarker(C);
            }
            var g = c.rangeList.rangeAtPoint(w);
            a.inVirtualSelectionMode = !0, i && (g = null, C = c.ranges[0] || C, a.removeSelectionMarker(C)), a.once("mouseup", function() {
              var W = c.toOrientedRange();
              g && W.isEmpty() && p(g.cursor, W.cursor) ? c.substractPoint(W.cursor) : (i ? c.substractPoint(C.cursor) : C && (a.removeSelectionMarker(C), c.addRange(C)), c.addRange(W)), a.inVirtualSelectionMode = !1;
            });
          } else if (A == "block") {
            l.stop(), a.inVirtualSelectionMode = !0;
            var d, b = [], k = function() {
              var W = a.renderer.pixelToScreenCoordinates(h, $), H = L.screenToDocumentPosition(W.row, W.column, W.offsetX);
              p(D, W) && p(H, c.lead) || (D = W, a.selection.moveToPosition(H), a.renderer.scrollCursorIntoView(), a.removeSelectionMarkers(b), b = c.rectangularRangeBlock(D, x), a.$mouseHandler.$clickSelection && b.length == 1 && b[0].isEmpty() && (b[0] = a.$mouseHandler.$clickSelection.clone()), b.forEach(a.addSelectionMarker, a), a.updateSelectionMarkers());
            };
            u && !t ? c.toSingleRange() : !u && t && (d = c.toOrientedRange(), a.addSelectionMarker(d)), i ? x = L.documentToScreenPosition(c.lead) : c.moveToPosition(w), D = { row: -1, column: -1 };
            var I = function(W) {
              k(), clearInterval(O), a.removeSelectionMarkers(b), b.length || (b = [c.toOrientedRange()]), d && (a.removeSelectionMarker(d), c.toSingleRange(d));
              for (var H = 0; H < b.length; H++)
                c.addRange(b[H]);
              a.inVirtualSelectionMode = !1, a.$mouseHandler.$clickSelection = null;
            }, T = k;
            f.capture(a.container, _, I);
            var O = setInterval(function() {
              T();
            }, 20);
            return l.preventDefault();
          }
        }
      }
      S.onMouseDown = s;
    }), ace.define("ace/commands/multi_select_commands", ["require", "exports", "module", "ace/keyboard/hash_handler"], function(M, S, R) {
      S.defaultCommands = [{
        name: "addCursorAbove",
        description: "Add cursor above",
        exec: function(v) {
          v.selectMoreLines(-1);
        },
        bindKey: { win: "Ctrl-Alt-Up", mac: "Ctrl-Alt-Up" },
        scrollIntoView: "cursor",
        readOnly: !0
      }, {
        name: "addCursorBelow",
        description: "Add cursor below",
        exec: function(v) {
          v.selectMoreLines(1);
        },
        bindKey: { win: "Ctrl-Alt-Down", mac: "Ctrl-Alt-Down" },
        scrollIntoView: "cursor",
        readOnly: !0
      }, {
        name: "addCursorAboveSkipCurrent",
        description: "Add cursor above (skip current)",
        exec: function(v) {
          v.selectMoreLines(-1, !0);
        },
        bindKey: { win: "Ctrl-Alt-Shift-Up", mac: "Ctrl-Alt-Shift-Up" },
        scrollIntoView: "cursor",
        readOnly: !0
      }, {
        name: "addCursorBelowSkipCurrent",
        description: "Add cursor below (skip current)",
        exec: function(v) {
          v.selectMoreLines(1, !0);
        },
        bindKey: { win: "Ctrl-Alt-Shift-Down", mac: "Ctrl-Alt-Shift-Down" },
        scrollIntoView: "cursor",
        readOnly: !0
      }, {
        name: "selectMoreBefore",
        description: "Select more before",
        exec: function(v) {
          v.selectMore(-1);
        },
        bindKey: { win: "Ctrl-Alt-Left", mac: "Ctrl-Alt-Left" },
        scrollIntoView: "cursor",
        readOnly: !0
      }, {
        name: "selectMoreAfter",
        description: "Select more after",
        exec: function(v) {
          v.selectMore(1);
        },
        bindKey: { win: "Ctrl-Alt-Right", mac: "Ctrl-Alt-Right" },
        scrollIntoView: "cursor",
        readOnly: !0
      }, {
        name: "selectNextBefore",
        description: "Select next before",
        exec: function(v) {
          v.selectMore(-1, !0);
        },
        bindKey: { win: "Ctrl-Alt-Shift-Left", mac: "Ctrl-Alt-Shift-Left" },
        scrollIntoView: "cursor",
        readOnly: !0
      }, {
        name: "selectNextAfter",
        description: "Select next after",
        exec: function(v) {
          v.selectMore(1, !0);
        },
        bindKey: { win: "Ctrl-Alt-Shift-Right", mac: "Ctrl-Alt-Shift-Right" },
        scrollIntoView: "cursor",
        readOnly: !0
      }, {
        name: "toggleSplitSelectionIntoLines",
        description: "Split selection into lines",
        exec: function(v) {
          v.multiSelect.rangeCount > 1 ? v.multiSelect.joinSelections() : v.multiSelect.splitIntoLines();
        },
        bindKey: { win: "Ctrl-Alt-L", mac: "Ctrl-Alt-L" },
        readOnly: !0
      }, {
        name: "splitSelectionIntoLines",
        description: "Split into lines",
        exec: function(v) {
          v.multiSelect.splitIntoLines();
        },
        readOnly: !0
      }, {
        name: "alignCursors",
        description: "Align cursors",
        exec: function(v) {
          v.alignCursors();
        },
        bindKey: { win: "Ctrl-Alt-A", mac: "Ctrl-Alt-A" },
        scrollIntoView: "cursor"
      }, {
        name: "findAll",
        description: "Find all",
        exec: function(v) {
          v.findAll();
        },
        bindKey: { win: "Ctrl-Alt-K", mac: "Ctrl-Alt-G" },
        scrollIntoView: "cursor",
        readOnly: !0
      }], S.multiSelectCommands = [{
        name: "singleSelection",
        description: "Single selection",
        bindKey: "esc",
        exec: function(v) {
          v.exitMultiSelectMode();
        },
        scrollIntoView: "cursor",
        readOnly: !0,
        isAvailable: function(v) {
          return v && v.inMultiSelectMode;
        }
      }];
      var f = M("../keyboard/hash_handler").HashHandler;
      S.keyboardHandler = new f(S.multiSelectCommands);
    }), ace.define("ace/multi_select", ["require", "exports", "module", "ace/range_list", "ace/range", "ace/selection", "ace/mouse/multi_select_handler", "ace/lib/event", "ace/lib/lang", "ace/commands/multi_select_commands", "ace/search", "ace/edit_session", "ace/editor", "ace/config"], function(M, S, R) {
      var f = M("./range_list").RangeList, v = M("./range").Range, p = M("./selection").Selection, s = M("./mouse/multi_select_handler").onMouseDown, l = M("./lib/event"), e = M("./lib/lang"), n = M("./commands/multi_select_commands");
      S.commands = n.defaultCommands.concat(n.multiSelectCommands);
      var i = M("./search").Search, r = new i();
      function t(y, m, h) {
        return r.$options.wrap = !0, r.$options.needle = m, r.$options.backwards = h == -1, r.find(y);
      }
      var o = M("./edit_session").EditSession;
      (function() {
        this.getSelectionMarkers = function() {
          return this.$selectionMarkers;
        };
      }).call(o.prototype), (function() {
        this.ranges = null, this.rangeList = null, this.addRange = function(y, m) {
          if (y) {
            if (!this.inMultiSelectMode && this.rangeCount === 0) {
              var h = this.toOrientedRange();
              if (this.rangeList.add(h), this.rangeList.add(y), this.rangeList.ranges.length != 2)
                return this.rangeList.removeAll(), m || this.fromOrientedRange(y);
              this.rangeList.removeAll(), this.rangeList.add(h), this.$onAddRange(h);
            }
            y.cursor || (y.cursor = y.end);
            var $ = this.rangeList.add(y);
            return this.$onAddRange(y), $.length && this.$onRemoveRange($), this.rangeCount > 1 && !this.inMultiSelectMode && (this._signal("multiSelect"), this.inMultiSelectMode = !0, this.session.$undoSelect = !1, this.rangeList.attach(this.session)), m || this.fromOrientedRange(y);
          }
        }, this.toSingleRange = function(y) {
          y = y || this.ranges[0];
          var m = this.rangeList.removeAll();
          m.length && this.$onRemoveRange(m), y && this.fromOrientedRange(y);
        }, this.substractPoint = function(y) {
          var m = this.rangeList.substractPoint(y);
          if (m)
            return this.$onRemoveRange(m), m[0];
        }, this.mergeOverlappingRanges = function() {
          var y = this.rangeList.merge();
          y.length && this.$onRemoveRange(y);
        }, this.$onAddRange = function(y) {
          this.rangeCount = this.rangeList.ranges.length, this.ranges.unshift(y), this._signal("addRange", { range: y });
        }, this.$onRemoveRange = function(y) {
          if (this.rangeCount = this.rangeList.ranges.length, this.rangeCount == 1 && this.inMultiSelectMode) {
            var m = this.rangeList.ranges.pop();
            y.push(m), this.rangeCount = 0;
          }
          for (var h = y.length; h--; ) {
            var $ = this.ranges.indexOf(y[h]);
            this.ranges.splice($, 1);
          }
          this._signal("removeRange", { ranges: y }), this.rangeCount === 0 && this.inMultiSelectMode && (this.inMultiSelectMode = !1, this._signal("singleSelect"), this.session.$undoSelect = !0, this.rangeList.detach(this.session)), m = m || this.ranges[0], m && !m.isEqual(this.getRange()) && this.fromOrientedRange(m);
        }, this.$initRangeList = function() {
          this.rangeList || (this.rangeList = new f(), this.ranges = [], this.rangeCount = 0);
        }, this.getAllRanges = function() {
          return this.rangeCount ? this.rangeList.ranges.concat() : [this.getRange()];
        }, this.splitIntoLines = function() {
          for (var y = this.ranges.length ? this.ranges : [this.getRange()], m = [], h = 0; h < y.length; h++) {
            var $ = y[h], _ = $.start.row, L = $.end.row;
            if (_ === L)
              m.push($.clone());
            else {
              for (m.push(new v(_, $.start.column, _, this.session.getLine(_).length)); ++_ < L; )
                m.push(this.getLineRange(_, !0));
              m.push(new v(L, 0, L, $.end.column));
            }
            h == 0 && !this.isBackwards() && (m = m.reverse());
          }
          this.toSingleRange();
          for (var h = m.length; h--; )
            this.addRange(m[h]);
        }, this.joinSelections = function() {
          var y = this.rangeList.ranges, m = y[y.length - 1], h = v.fromPoints(y[0].start, m.end);
          this.toSingleRange(), this.setSelectionRange(h, m.cursor == m.start);
        }, this.toggleBlockSelection = function() {
          if (this.rangeCount > 1) {
            var y = this.rangeList.ranges, m = y[y.length - 1], h = v.fromPoints(y[0].start, m.end);
            this.toSingleRange(), this.setSelectionRange(h, m.cursor == m.start);
          } else {
            var $ = this.session.documentToScreenPosition(this.cursor), _ = this.session.documentToScreenPosition(this.anchor), L = this.rectangularRangeBlock($, _);
            L.forEach(this.addRange, this);
          }
        }, this.rectangularRangeBlock = function(y, m, h) {
          var $ = [], _ = y.column < m.column;
          if (_)
            var L = y.column, x = m.column, D = y.offsetX, A = m.offsetX;
          else
            var L = m.column, x = y.column, D = m.offsetX, A = y.offsetX;
          var C = y.row < m.row;
          if (C)
            var g = y.row, d = m.row;
          else
            var g = m.row, d = y.row;
          L < 0 && (L = 0), g < 0 && (g = 0), g == d && (h = !0);
          for (var b, k = g; k <= d; k++) {
            var I = v.fromPoints(this.session.screenToDocumentPosition(k, L, D), this.session.screenToDocumentPosition(k, x, A));
            if (I.isEmpty()) {
              if (b && c(I.end, b))
                break;
              b = I.end;
            }
            I.cursor = _ ? I.start : I.end, $.push(I);
          }
          if (C && $.reverse(), !h) {
            for (var T = $.length - 1; $[T].isEmpty() && T > 0; )
              T--;
            if (T > 0)
              for (var O = 0; $[O].isEmpty(); )
                O++;
            for (var W = T; W >= O; W--)
              $[W].isEmpty() && $.splice(W, 1);
          }
          return $;
        };
      }).call(p.prototype);
      var a = M("./editor").Editor;
      (function() {
        this.updateSelectionMarkers = function() {
          this.renderer.updateCursor(), this.renderer.updateBackMarkers();
        }, this.addSelectionMarker = function(y) {
          y.cursor || (y.cursor = y.end);
          var m = this.getSelectionStyle();
          return y.marker = this.session.addMarker(y, "ace_selection", m), this.session.$selectionMarkers.push(y), this.session.selectionMarkerCount = this.session.$selectionMarkers.length, y;
        }, this.removeSelectionMarker = function(y) {
          if (y.marker) {
            this.session.removeMarker(y.marker);
            var m = this.session.$selectionMarkers.indexOf(y);
            m != -1 && this.session.$selectionMarkers.splice(m, 1), this.session.selectionMarkerCount = this.session.$selectionMarkers.length;
          }
        }, this.removeSelectionMarkers = function(y) {
          for (var m = this.session.$selectionMarkers, h = y.length; h--; ) {
            var $ = y[h];
            if ($.marker) {
              this.session.removeMarker($.marker);
              var _ = m.indexOf($);
              _ != -1 && m.splice(_, 1);
            }
          }
          this.session.selectionMarkerCount = m.length;
        }, this.$onAddRange = function(y) {
          this.addSelectionMarker(y.range), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
        }, this.$onRemoveRange = function(y) {
          this.removeSelectionMarkers(y.ranges), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
        }, this.$onMultiSelect = function(y) {
          this.inMultiSelectMode || (this.inMultiSelectMode = !0, this.setStyle("ace_multiselect"), this.keyBinding.addKeyboardHandler(n.keyboardHandler), this.commands.setDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers());
        }, this.$onSingleSelect = function(y) {
          this.session.multiSelect.inVirtualMode || (this.inMultiSelectMode = !1, this.unsetStyle("ace_multiselect"), this.keyBinding.removeKeyboardHandler(n.keyboardHandler), this.commands.removeDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers(), this._emit("changeSelection"));
        }, this.$onMultiSelectExec = function(y) {
          var m = y.command, h = y.editor;
          if (h.multiSelect) {
            if (m.multiSelectAction)
              m.multiSelectAction == "forEach" ? $ = h.forEachSelection(m, y.args) : m.multiSelectAction == "forEachLine" ? $ = h.forEachSelection(m, y.args, !0) : m.multiSelectAction == "single" ? (h.exitMultiSelectMode(), $ = m.exec(h, y.args || {})) : $ = m.multiSelectAction(h, y.args || {});
            else {
              var $ = m.exec(h, y.args || {});
              h.multiSelect.addRange(h.multiSelect.toOrientedRange()), h.multiSelect.mergeOverlappingRanges();
            }
            return $;
          }
        }, this.forEachSelection = function(y, m, h) {
          if (!this.inVirtualSelectionMode) {
            var $ = h && h.keepOrder, _ = h == !0 || h && h.$byLines, L = this.session, x = this.selection, D = x.rangeList, A = ($ ? x : D).ranges, C;
            if (!A.length)
              return y.exec ? y.exec(this, m || {}) : y(this, m || {});
            var g = x._eventRegistry;
            x._eventRegistry = {};
            var d = new p(L);
            this.inVirtualSelectionMode = !0;
            for (var b = A.length; b--; ) {
              if (_)
                for (; b > 0 && A[b].start.row == A[b - 1].end.row; )
                  b--;
              d.fromOrientedRange(A[b]), d.index = b, this.selection = L.selection = d;
              var k = y.exec ? y.exec(this, m || {}) : y(this, m || {});
              !C && k !== void 0 && (C = k), d.toOrientedRange(A[b]);
            }
            d.detach(), this.selection = L.selection = x, this.inVirtualSelectionMode = !1, x._eventRegistry = g, x.mergeOverlappingRanges(), x.ranges[0] && x.fromOrientedRange(x.ranges[0]);
            var I = this.renderer.$scrollAnimation;
            return this.onCursorChange(), this.onSelectionChange(), I && I.from == I.to && this.renderer.animateScrolling(I.from), C;
          }
        }, this.exitMultiSelectMode = function() {
          !this.inMultiSelectMode || this.inVirtualSelectionMode || this.multiSelect.toSingleRange();
        }, this.getSelectedText = function() {
          var y = "";
          if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
            for (var m = this.multiSelect.rangeList.ranges, h = [], $ = 0; $ < m.length; $++)
              h.push(this.session.getTextRange(m[$]));
            var _ = this.session.getDocument().getNewLineCharacter();
            y = h.join(_), y.length == (h.length - 1) * _.length && (y = "");
          } else this.selection.isEmpty() || (y = this.session.getTextRange(this.getSelectionRange()));
          return y;
        }, this.$checkMultiselectChange = function(y, m) {
          if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
            var h = this.multiSelect.ranges[0];
            if (this.multiSelect.isEmpty() && m == this.multiSelect.anchor)
              return;
            var $ = m == this.multiSelect.anchor ? h.cursor == h.start ? h.end : h.start : h.cursor;
            $.row != m.row || this.session.$clipPositionToDocument($.row, $.column).column != m.column ? this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange()) : this.multiSelect.mergeOverlappingRanges();
          }
        }, this.findAll = function(y, m, h) {
          if (m = m || {}, m.needle = y || m.needle, m.needle == null) {
            var $ = this.selection.isEmpty() ? this.selection.getWordRange() : this.selection.getRange();
            m.needle = this.session.getTextRange($);
          }
          this.$search.set(m);
          var _ = this.$search.findAll(this.session);
          if (!_.length)
            return 0;
          var L = this.multiSelect;
          h || L.toSingleRange(_[0]);
          for (var x = _.length; x--; )
            L.addRange(_[x], !0);
          return $ && L.rangeList.rangeAtPoint($.start) && L.addRange($, !0), _.length;
        }, this.selectMoreLines = function(y, m) {
          var h = this.selection.toOrientedRange(), $ = h.cursor == h.end, _ = this.session.documentToScreenPosition(h.cursor);
          this.selection.$desiredColumn && (_.column = this.selection.$desiredColumn);
          var L = this.session.screenToDocumentPosition(_.row + y, _.column);
          if (h.isEmpty())
            var D = L;
          else
            var x = this.session.documentToScreenPosition($ ? h.end : h.start), D = this.session.screenToDocumentPosition(x.row + y, x.column);
          if ($) {
            var A = v.fromPoints(L, D);
            A.cursor = A.start;
          } else {
            var A = v.fromPoints(D, L);
            A.cursor = A.end;
          }
          if (A.desiredColumn = _.column, !this.selection.inMultiSelectMode)
            this.selection.addRange(h);
          else if (m)
            var C = h.cursor;
          this.selection.addRange(A), C && this.selection.substractPoint(C);
        }, this.transposeSelections = function(y) {
          for (var m = this.session, h = m.multiSelect, $ = h.ranges, _ = $.length; _--; ) {
            var L = $[_];
            if (L.isEmpty()) {
              var x = m.getWordRange(L.start.row, L.start.column);
              L.start.row = x.start.row, L.start.column = x.start.column, L.end.row = x.end.row, L.end.column = x.end.column;
            }
          }
          h.mergeOverlappingRanges();
          for (var D = [], _ = $.length; _--; ) {
            var L = $[_];
            D.unshift(m.getTextRange(L));
          }
          y < 0 ? D.unshift(D.pop()) : D.push(D.shift());
          for (var _ = $.length; _--; ) {
            var L = $[_], A = L.clone();
            m.replace(L, D[_]), L.start.row = A.start.row, L.start.column = A.start.column;
          }
          h.fromOrientedRange(h.ranges[0]);
        }, this.selectMore = function(y, m, h) {
          var $ = this.session, _ = $.multiSelect, L = _.toOrientedRange();
          if (!(L.isEmpty() && (L = $.getWordRange(L.start.row, L.start.column), L.cursor = y == -1 ? L.start : L.end, this.multiSelect.addRange(L), h))) {
            var x = $.getTextRange(L), D = t($, x, y);
            D && (D.cursor = y == -1 ? D.start : D.end, this.session.unfold(D), this.multiSelect.addRange(D), this.renderer.scrollCursorIntoView(null, 0.5)), m && this.multiSelect.substractPoint(L.cursor);
          }
        }, this.alignCursors = function() {
          var y = this.session, m = y.multiSelect, h = m.ranges, $ = -1, _ = h.filter(function(T) {
            if (T.cursor.row == $)
              return !0;
            $ = T.cursor.row;
          });
          if (!h.length || _.length == h.length - 1) {
            var L = this.selection.getRange(), x = L.start.row, D = L.end.row, A = x == D;
            if (A) {
              var C = this.session.getLength(), g;
              do
                g = this.session.getLine(D);
              while (/[=:]/.test(g) && ++D < C);
              do
                g = this.session.getLine(x);
              while (/[=:]/.test(g) && --x > 0);
              x < 0 && (x = 0), D >= C && (D = C - 1);
            }
            var d = this.session.removeFullLines(x, D);
            d = this.$reAlignText(d, A), this.session.insert({ row: x, column: 0 }, d.join(`
`) + `
`), A || (L.start.column = 0, L.end.column = d[d.length - 1].length), this.selection.setRange(L);
          } else {
            _.forEach(function(T) {
              m.substractPoint(T.cursor);
            });
            var b = 0, k = 1 / 0, I = h.map(function(T) {
              var O = T.cursor, W = y.getLine(O.row), H = W.substr(O.column).search(/\S/g);
              return H == -1 && (H = 0), O.column > b && (b = O.column), H < k && (k = H), H;
            });
            h.forEach(function(T, O) {
              var W = T.cursor, H = b - W.column, B = I[O] - k;
              H > B ? y.insert(W, e.stringRepeat(" ", H - B)) : y.remove(new v(W.row, W.column, W.row, W.column - H + B)), T.start.column = T.end.column = b, T.start.row = T.end.row = W.row, T.cursor = T.end;
            }), m.fromOrientedRange(h[0]), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
          }
        }, this.$reAlignText = function(y, m) {
          var h = !0, $ = !0, _, L, x;
          return y.map(function(d) {
            var b = d.match(/(\s*)(.*?)(\s*)([=:].*)/);
            return b ? _ == null ? (_ = b[1].length, L = b[2].length, x = b[3].length, b) : (_ + L + x != b[1].length + b[2].length + b[3].length && ($ = !1), _ != b[1].length && (h = !1), _ > b[1].length && (_ = b[1].length), L < b[2].length && (L = b[2].length), x > b[3].length && (x = b[3].length), b) : [d];
          }).map(m ? A : h ? $ ? C : A : g);
          function D(d) {
            return e.stringRepeat(" ", d);
          }
          function A(d) {
            return d[2] ? D(_) + d[2] + D(L - d[2].length + x) + d[4].replace(/^([=:])\s+/, "$1 ") : d[0];
          }
          function C(d) {
            return d[2] ? D(_ + L - d[2].length) + d[2] + D(x) + d[4].replace(/^([=:])\s+/, "$1 ") : d[0];
          }
          function g(d) {
            return d[2] ? D(_) + d[2] + D(x) + d[4].replace(/^([=:])\s+/, "$1 ") : d[0];
          }
        };
      }).call(a.prototype);
      function c(y, m) {
        return y.row == m.row && y.column == m.column;
      }
      S.onSessionChange = function(y) {
        var m = y.session;
        m && !m.multiSelect && (m.$selectionMarkers = [], m.selection.$initRangeList(), m.multiSelect = m.selection), this.multiSelect = m && m.multiSelect;
        var h = y.oldSession;
        h && (h.multiSelect.off("addRange", this.$onAddRange), h.multiSelect.off("removeRange", this.$onRemoveRange), h.multiSelect.off("multiSelect", this.$onMultiSelect), h.multiSelect.off("singleSelect", this.$onSingleSelect), h.multiSelect.lead.off("change", this.$checkMultiselectChange), h.multiSelect.anchor.off("change", this.$checkMultiselectChange)), m && (m.multiSelect.on("addRange", this.$onAddRange), m.multiSelect.on("removeRange", this.$onRemoveRange), m.multiSelect.on("multiSelect", this.$onMultiSelect), m.multiSelect.on("singleSelect", this.$onSingleSelect), m.multiSelect.lead.on("change", this.$checkMultiselectChange), m.multiSelect.anchor.on("change", this.$checkMultiselectChange)), m && this.inMultiSelectMode != m.selection.inMultiSelectMode && (m.selection.inMultiSelectMode ? this.$onMultiSelect() : this.$onSingleSelect());
      };
      function u(y) {
        y.$multiselectOnSessionChange || (y.$onAddRange = y.$onAddRange.bind(y), y.$onRemoveRange = y.$onRemoveRange.bind(y), y.$onMultiSelect = y.$onMultiSelect.bind(y), y.$onSingleSelect = y.$onSingleSelect.bind(y), y.$multiselectOnSessionChange = S.onSessionChange.bind(y), y.$checkMultiselectChange = y.$checkMultiselectChange.bind(y), y.$multiselectOnSessionChange(y), y.on("changeSession", y.$multiselectOnSessionChange), y.on("mousedown", s), y.commands.addCommands(n.defaultCommands), w(y));
      }
      function w(y) {
        if (!y.textInput)
          return;
        var m = y.textInput.getElement(), h = !1;
        l.addListener(m, "keydown", function(_) {
          var L = _.keyCode == 18 && !(_.ctrlKey || _.shiftKey || _.metaKey);
          y.$blockSelectEnabled && L ? h || (y.renderer.setMouseCursor("crosshair"), h = !0) : h && $();
        }, y), l.addListener(m, "keyup", $, y), l.addListener(m, "blur", $, y);
        function $(_) {
          h && (y.renderer.setMouseCursor(""), h = !1);
        }
      }
      S.MultiSelect = u, M("./config").defineOptions(a.prototype, "editor", {
        enableMultiselect: {
          set: function(y) {
            u(this), y ? this.on("mousedown", s) : this.off("mousedown", s);
          },
          value: !0
        },
        enableBlockSelect: {
          set: function(y) {
            this.$blockSelectEnabled = y;
          },
          value: !0
        }
      });
    }), ace.define("ace/mode/folding/fold_mode", ["require", "exports", "module", "ace/range"], function(M, S, R) {
      var f = M("../../range").Range, v = S.FoldMode = function() {
      };
      (function() {
        this.foldingStartMarker = null, this.foldingStopMarker = null, this.getFoldWidget = function(p, s, l) {
          var e = p.getLine(l);
          return this.foldingStartMarker.test(e) ? "start" : s == "markbeginend" && this.foldingStopMarker && this.foldingStopMarker.test(e) ? "end" : "";
        }, this.getFoldWidgetRange = function(p, s, l) {
          return null;
        }, this.indentationBlock = function(p, s, l) {
          var e = /\S/, n = p.getLine(s), i = n.search(e);
          if (i != -1) {
            for (var r = l || n.length, t = p.getLength(), o = s, a = s; ++s < t; ) {
              var c = p.getLine(s).search(e);
              if (c != -1) {
                if (c <= i) {
                  var u = p.getTokenAt(s, 0);
                  if (!u || u.type !== "string")
                    break;
                }
                a = s;
              }
            }
            if (a > o) {
              var w = p.getLine(a).length;
              return new f(o, r, a, w);
            }
          }
        }, this.openingBracketBlock = function(p, s, l, e, n) {
          var i = { row: l, column: e + 1 }, r = p.$findClosingBracket(s, i, n);
          if (r) {
            var t = p.foldWidgets[r.row];
            return t == null && (t = p.getFoldWidget(r.row)), t == "start" && r.row > i.row && (r.row--, r.column = p.getLine(r.row).length), f.fromPoints(i, r);
          }
        }, this.closingBracketBlock = function(p, s, l, e, n) {
          var i = { row: l, column: e }, r = p.$findOpeningBracket(s, i);
          if (r)
            return r.column++, i.column--, f.fromPoints(r, i);
        };
      }).call(v.prototype);
    }), ace.define("ace/ext/error_marker", ["require", "exports", "module", "ace/lib/dom", "ace/range", "ace/config"], function(M, S, R) {
      var f = M("../lib/dom"), v = M("../range").Range, p = M("../config").nls;
      function s(e, n, i) {
        for (var r = 0, t = e.length - 1; r <= t; ) {
          var o = r + t >> 1, a = i(n, e[o]);
          if (a > 0)
            r = o + 1;
          else if (a < 0)
            t = o - 1;
          else
            return o;
        }
        return -(r + 1);
      }
      function l(e, n, i) {
        var r = e.getAnnotations().sort(v.comparePoints);
        if (r.length) {
          var t = s(r, { row: n, column: -1 }, v.comparePoints);
          t < 0 && (t = -t - 1), t >= r.length ? t = i > 0 ? 0 : r.length - 1 : t === 0 && i < 0 && (t = r.length - 1);
          var o = r[t];
          if (!(!o || !i)) {
            if (o.row === n) {
              do
                o = r[t += i];
              while (o && o.row === n);
              if (!o)
                return r.slice();
            }
            var a = [];
            n = o.row;
            do
              a[i < 0 ? "unshift" : "push"](o), o = r[t += i];
            while (o && o.row == n);
            return a.length && a;
          }
        }
      }
      S.showErrorMarker = function(e, n) {
        var i = e.session, r = e.getCursorPosition(), t = r.row, o = i.widgetManager.getWidgetsAtRow(t).filter(function(_) {
          return _.type == "errorMarker";
        })[0];
        o ? o.destroy() : t -= n;
        var a = l(i, t, n), c;
        if (a) {
          var u = a[0];
          r.column = (u.pos && typeof u.column != "number" ? u.pos.sc : u.column) || 0, r.row = u.row, c = e.renderer.$gutterLayer.$annotations[r.row];
        } else {
          if (o)
            return;
          c = {
            displayText: [p("error-marker.good-state", "Looks good!")],
            className: "ace_ok"
          };
        }
        e.session.unfold(r.row), e.selection.moveToPosition(r);
        var w = {
          row: r.row,
          fixedWidth: !0,
          coverGutter: !0,
          el: f.createElement("div"),
          type: "errorMarker"
        }, y = w.el.appendChild(f.createElement("div")), m = w.el.appendChild(f.createElement("div"));
        m.className = "error_widget_arrow " + c.className;
        var h = e.renderer.$cursorLayer.getPixelPosition(r).left;
        m.style.left = h + e.renderer.gutterWidth - 5 + "px", w.el.className = "error_widget_wrapper", y.className = "error_widget " + c.className, c.displayText.forEach(function(_, L) {
          y.appendChild(f.createTextNode(_)), L < c.displayText.length - 1 && y.appendChild(f.createElement("br"));
        }), y.appendChild(f.createElement("div"));
        var $ = function(_, L, x) {
          if (L === 0 && (x === "esc" || x === "return"))
            return w.destroy(), { command: "null" };
        };
        w.destroy = function() {
          e.$mouseHandler.isMousePressed || (e.keyBinding.removeKeyboardHandler($), i.widgetManager.removeLineWidget(w), e.off("changeSelection", w.destroy), e.off("changeSession", w.destroy), e.off("mouseup", w.destroy), e.off("change", w.destroy));
        }, e.keyBinding.addKeyboardHandler($), e.on("changeSelection", w.destroy), e.on("changeSession", w.destroy), e.on("mouseup", w.destroy), e.on("change", w.destroy), e.session.widgetManager.addLineWidget(w), w.el.onmousedown = e.focus.bind(e), e.renderer.scrollCursorIntoView(null, 0.5, { bottom: w.el.offsetHeight });
      }, f.importCssString(`
    .error_widget_wrapper {
        background: inherit;
        color: inherit;
        border:none
    }
    .error_widget {
        border-top: solid 2px;
        border-bottom: solid 2px;
        margin: 5px 0;
        padding: 10px 40px;
        white-space: pre-wrap;
    }
    .error_widget.ace_error, .error_widget_arrow.ace_error{
        border-color: #ff5a5a
    }
    .error_widget.ace_warning, .error_widget_arrow.ace_warning{
        border-color: #F1D817
    }
    .error_widget.ace_info, .error_widget_arrow.ace_info{
        border-color: #5a5a5a
    }
    .error_widget.ace_ok, .error_widget_arrow.ace_ok{
        border-color: #5aaa5a
    }
    .error_widget_arrow {
        position: absolute;
        border: solid 5px;
        border-top-color: transparent!important;
        border-right-color: transparent!important;
        border-left-color: transparent!important;
        top: -5px;
    }
`, "error_marker.css", !1);
    }), ace.define("ace/ace", ["require", "exports", "module", "ace/lib/dom", "ace/range", "ace/editor", "ace/edit_session", "ace/undomanager", "ace/virtual_renderer", "ace/worker/worker_client", "ace/keyboard/hash_handler", "ace/placeholder", "ace/multi_select", "ace/mode/folding/fold_mode", "ace/theme/textmate", "ace/ext/error_marker", "ace/config", "ace/loader_build"], function(M, S, R) {
      M("./loader_build")(S);
      var f = M("./lib/dom"), v = M("./range").Range, p = M("./editor").Editor, s = M("./edit_session").EditSession, l = M("./undomanager").UndoManager, e = M("./virtual_renderer").VirtualRenderer;
      M("./worker/worker_client"), M("./keyboard/hash_handler"), M("./placeholder"), M("./multi_select"), M("./mode/folding/fold_mode"), M("./theme/textmate"), M("./ext/error_marker"), S.config = M("./config"), S.edit = function(i, r) {
        if (typeof i == "string") {
          var t = i;
          if (i = document.getElementById(t), !i)
            throw new Error("ace.edit can't find div #" + t);
        }
        if (i && i.env && i.env.editor instanceof p)
          return i.env.editor;
        var o = "";
        if (i && /input|textarea/i.test(i.tagName)) {
          var a = i;
          o = a.value, i = f.createElement("pre"), a.parentNode.replaceChild(i, a);
        } else i && (o = i.textContent, i.innerHTML = "");
        var c = S.createEditSession(o), u = new p(new e(i), c, r), w = {
          document: c,
          editor: u,
          onResize: u.resize.bind(u, null)
        };
        return a && (w.textarea = a), u.on("destroy", function() {
          w.editor.container.env = null;
        }), u.container.env = u.env = w, u;
      }, S.createEditSession = function(i, r) {
        var t = new s(i, r);
        return t.setUndoManager(new l()), t;
      }, S.Range = v, S.Editor = p, S.EditSession = s, S.UndoManager = l, S.VirtualRenderer = e;
      var n = S.config.version;
      S.version = n;
    }), function() {
      ace.require(["ace/ace"], function(M) {
        M && (M.config.init(!0), M.define = ace.define);
        var S = /* @__PURE__ */ function() {
          return this;
        }();
        !S && typeof window < "u" && (S = window), !S && typeof self < "u" && (S = self), S.ace || (S.ace = M);
        for (var R in M) M.hasOwnProperty(R) && (S.ace[R] = M[R]);
        S.ace.default = S.ace, E && (E.exports = S.ace);
      });
    }();
  }(ht)), ht.exports;
}
var Ii = Ri();
const Oi = /* @__PURE__ */ Ti(Ii);
var tn = function() {
  if (typeof Map < "u")
    return Map;
  function E(N, M) {
    var S = -1;
    return N.some(function(R, f) {
      return R[0] === M ? (S = f, !0) : !1;
    }), S;
  }
  return (
    /** @class */
    function() {
      function N() {
        this.__entries__ = [];
      }
      return Object.defineProperty(N.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), N.prototype.get = function(M) {
        var S = E(this.__entries__, M), R = this.__entries__[S];
        return R && R[1];
      }, N.prototype.set = function(M, S) {
        var R = E(this.__entries__, M);
        ~R ? this.__entries__[R][1] = S : this.__entries__.push([M, S]);
      }, N.prototype.delete = function(M) {
        var S = this.__entries__, R = E(S, M);
        ~R && S.splice(R, 1);
      }, N.prototype.has = function(M) {
        return !!~E(this.__entries__, M);
      }, N.prototype.clear = function() {
        this.__entries__.splice(0);
      }, N.prototype.forEach = function(M, S) {
        S === void 0 && (S = null);
        for (var R = 0, f = this.__entries__; R < f.length; R++) {
          var v = f[R];
          M.call(S, v[1], v[0]);
        }
      }, N;
    }()
  );
}(), vt = typeof window < "u" && typeof document < "u" && window.document === document, rt = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Di = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(rt) : function(E) {
    return setTimeout(function() {
      return E(Date.now());
    }, 1e3 / 60);
  };
}(), Ni = 2;
function Wi(E, N) {
  var M = !1, S = !1, R = 0;
  function f() {
    M && (M = !1, E()), S && p();
  }
  function v() {
    Di(f);
  }
  function p() {
    var s = Date.now();
    if (M) {
      if (s - R < Ni)
        return;
      S = !0;
    } else
      M = !0, S = !1, setTimeout(v, N);
    R = s;
  }
  return p;
}
var Fi = 20, Hi = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Bi = typeof MutationObserver < "u", Pi = (
  /** @class */
  function() {
    function E() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Wi(this.refresh.bind(this), Fi);
    }
    return E.prototype.addObserver = function(N) {
      ~this.observers_.indexOf(N) || this.observers_.push(N), this.connected_ || this.connect_();
    }, E.prototype.removeObserver = function(N) {
      var M = this.observers_, S = M.indexOf(N);
      ~S && M.splice(S, 1), !M.length && this.connected_ && this.disconnect_();
    }, E.prototype.refresh = function() {
      var N = this.updateObservers_();
      N && this.refresh();
    }, E.prototype.updateObservers_ = function() {
      var N = this.observers_.filter(function(M) {
        return M.gatherActive(), M.hasActive();
      });
      return N.forEach(function(M) {
        return M.broadcastActive();
      }), N.length > 0;
    }, E.prototype.connect_ = function() {
      !vt || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Bi ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, E.prototype.disconnect_ = function() {
      !vt || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, E.prototype.onTransitionEnd_ = function(N) {
      var M = N.propertyName, S = M === void 0 ? "" : M, R = Hi.some(function(f) {
        return !!~S.indexOf(f);
      });
      R && this.refresh();
    }, E.getInstance = function() {
      return this.instance_ || (this.instance_ = new E()), this.instance_;
    }, E.instance_ = null, E;
  }()
), nn = function(E, N) {
  for (var M = 0, S = Object.keys(N); M < S.length; M++) {
    var R = S[M];
    Object.defineProperty(E, R, {
      value: N[R],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return E;
}, Ve = function(E) {
  var N = E && E.ownerDocument && E.ownerDocument.defaultView;
  return N || rt;
}, rn = st(0, 0, 0, 0);
function ot(E) {
  return parseFloat(E) || 0;
}
function Nt(E) {
  for (var N = [], M = 1; M < arguments.length; M++)
    N[M - 1] = arguments[M];
  return N.reduce(function(S, R) {
    var f = E["border-" + R + "-width"];
    return S + ot(f);
  }, 0);
}
function zi(E) {
  for (var N = ["top", "right", "bottom", "left"], M = {}, S = 0, R = N; S < R.length; S++) {
    var f = R[S], v = E["padding-" + f];
    M[f] = ot(v);
  }
  return M;
}
function Ui(E) {
  var N = E.getBBox();
  return st(0, 0, N.width, N.height);
}
function Vi(E) {
  var N = E.clientWidth, M = E.clientHeight;
  if (!N && !M)
    return rn;
  var S = Ve(E).getComputedStyle(E), R = zi(S), f = R.left + R.right, v = R.top + R.bottom, p = ot(S.width), s = ot(S.height);
  if (S.boxSizing === "border-box" && (Math.round(p + f) !== N && (p -= Nt(S, "left", "right") + f), Math.round(s + v) !== M && (s -= Nt(S, "top", "bottom") + v)), !Gi(E)) {
    var l = Math.round(p + f) - N, e = Math.round(s + v) - M;
    Math.abs(l) !== 1 && (p -= l), Math.abs(e) !== 1 && (s -= e);
  }
  return st(R.left, R.top, p, s);
}
var ji = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(E) {
    return E instanceof Ve(E).SVGGraphicsElement;
  } : function(E) {
    return E instanceof Ve(E).SVGElement && typeof E.getBBox == "function";
  };
}();
function Gi(E) {
  return E === Ve(E).document.documentElement;
}
function Ki(E) {
  return vt ? ji(E) ? Ui(E) : Vi(E) : rn;
}
function Yi(E) {
  var N = E.x, M = E.y, S = E.width, R = E.height, f = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, v = Object.create(f.prototype);
  return nn(v, {
    x: N,
    y: M,
    width: S,
    height: R,
    top: M,
    right: N + S,
    bottom: R + M,
    left: N
  }), v;
}
function st(E, N, M, S) {
  return { x: E, y: N, width: M, height: S };
}
var Qi = (
  /** @class */
  function() {
    function E(N) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = st(0, 0, 0, 0), this.target = N;
    }
    return E.prototype.isActive = function() {
      var N = Ki(this.target);
      return this.contentRect_ = N, N.width !== this.broadcastWidth || N.height !== this.broadcastHeight;
    }, E.prototype.broadcastRect = function() {
      var N = this.contentRect_;
      return this.broadcastWidth = N.width, this.broadcastHeight = N.height, N;
    }, E;
  }()
), Zi = (
  /** @class */
  /* @__PURE__ */ function() {
    function E(N, M) {
      var S = Yi(M);
      nn(this, { target: N, contentRect: S });
    }
    return E;
  }()
), Xi = (
  /** @class */
  function() {
    function E(N, M, S) {
      if (this.activeObservations_ = [], this.observations_ = new tn(), typeof N != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = N, this.controller_ = M, this.callbackCtx_ = S;
    }
    return E.prototype.observe = function(N) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(N instanceof Ve(N).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var M = this.observations_;
        M.has(N) || (M.set(N, new Qi(N)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, E.prototype.unobserve = function(N) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(N instanceof Ve(N).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var M = this.observations_;
        M.has(N) && (M.delete(N), M.size || this.controller_.removeObserver(this));
      }
    }, E.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, E.prototype.gatherActive = function() {
      var N = this;
      this.clearActive(), this.observations_.forEach(function(M) {
        M.isActive() && N.activeObservations_.push(M);
      });
    }, E.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var N = this.callbackCtx_, M = this.activeObservations_.map(function(S) {
          return new Zi(S.target, S.broadcastRect());
        });
        this.callback_.call(N, M, N), this.clearActive();
      }
    }, E.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, E.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, E;
  }()
), on = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new tn(), sn = (
  /** @class */
  /* @__PURE__ */ function() {
    function E(N) {
      if (!(this instanceof E))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var M = Pi.getInstance(), S = new Xi(N, M, this);
      on.set(this, S);
    }
    return E;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(E) {
  sn.prototype[E] = function() {
    var N;
    return (N = on.get(this))[E].apply(N, arguments);
  };
});
var Ji = function() {
  return typeof rt.ResizeObserver < "u" ? rt.ResizeObserver : sn;
}();
const Wt = [
  "blur",
  "input",
  "change",
  "changeSelectionStyle",
  "changeSession",
  "copy",
  "focus",
  "paste"
], qi = Ee({
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
  emits: ["update:value", "init", ...Wt],
  render() {
    return He("div");
  },
  mounted() {
    const E = this._editor = dn(Oi.edit(this.$el, {
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
    this._contentBackup = this.value, this._isSettingContent = !1, E.on("change", () => {
      if (this._isSettingContent)
        return;
      const N = E.getValue();
      this._contentBackup = N, this.$emit("update:value", N);
    }), Wt.forEach((N) => {
      const M = "on" + fn(N);
      typeof this.$.vnode.props[M] == "function" && E.on(N, this.$emit.bind(this, N));
    }), this._ro = new Ji(() => E.resize()), this._ro.observe(this.$el), this.$emit("init", E);
  },
  beforeUnmount() {
    var E, N;
    (E = this._ro) === null || E === void 0 || E.disconnect(), (N = this._editor) === null || N === void 0 || N.destroy();
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
    value(E) {
      if (this._contentBackup !== E) {
        try {
          this._isSettingContent = !0, this._editor.setValue(E, 1);
        } finally {
          this._isSettingContent = !1;
        }
        this._contentBackup = E;
      }
    },
    theme(E) {
      this._editor.setTheme("ace/theme/" + E);
    },
    options(E) {
      this._editor.setOptions(E);
    },
    readonly(E) {
      this._editor.setReadOnly(E);
    },
    placeholder(E) {
      this._editor.setOption("placeholder", E);
    },
    wrap(E) {
      this._editor.setWrapBehavioursEnabled(E);
    },
    printMargin(E) {
      this._editor.setOption("printMargin", E);
    },
    lang(E) {
      this._editor.setOption("mode", "ace/mode/" + E);
    },
    minLines(E) {
      this._editor.setOption("minLines", E);
    },
    maxLines(E) {
      this._editor.setOption("maxLines", E);
    }
  }
});
var dt = { exports: {} }, Ft;
function er() {
  return Ft || (Ft = 1, function(E, N) {
    ace.define("ace/mode/json_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(M, S, R) {
      var f = M("../lib/oop"), v = M("./text_highlight_rules").TextHighlightRules, p = function() {
        this.$rules = {
          start: [
            {
              token: "variable",
              // single line
              regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'
            },
            {
              token: "string",
              // single line
              regex: '"',
              next: "string"
            },
            {
              token: "constant.numeric",
              // hex
              regex: "0[xX][0-9a-fA-F]+\\b"
            },
            {
              token: "constant.numeric",
              // float
              regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
            },
            {
              token: "constant.language.boolean",
              regex: "(?:true|false)\\b"
            },
            {
              token: "text",
              // single quoted strings are not allowed
              regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
            },
            {
              token: "comment",
              // comments are not allowed, but who cares?
              regex: "\\/\\/.*$"
            },
            {
              token: "comment.start",
              // comments are not allowed, but who cares?
              regex: "\\/\\*",
              next: "comment"
            },
            {
              token: "paren.lparen",
              regex: "[[({]"
            },
            {
              token: "paren.rparen",
              regex: "[\\])}]"
            },
            {
              token: "punctuation.operator",
              regex: /[,]/
            },
            {
              token: "text",
              regex: "\\s+"
            }
          ],
          string: [
            {
              token: "constant.language.escape",
              regex: /\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/
            },
            {
              token: "string",
              regex: '"|$',
              next: "start"
            },
            {
              defaultToken: "string"
            }
          ],
          comment: [
            {
              token: "comment.end",
              // comments are not allowed, but who cares?
              regex: "\\*\\/",
              next: "start"
            },
            {
              defaultToken: "comment"
            }
          ]
        };
      };
      f.inherits(p, v), S.JsonHighlightRules = p;
    }), ace.define("ace/mode/matching_brace_outdent", ["require", "exports", "module", "ace/range"], function(M, S, R) {
      var f = M("../range").Range, v = function() {
      };
      (function() {
        this.checkOutdent = function(p, s) {
          return /^\s+$/.test(p) ? /^\s*\}/.test(s) : !1;
        }, this.autoOutdent = function(p, s) {
          var l = p.getLine(s), e = l.match(/^(\s*\})/);
          if (!e)
            return 0;
          var n = e[1].length, i = p.findMatchingBracket({ row: s, column: n });
          if (!i || i.row == s)
            return 0;
          var r = this.$getIndent(p.getLine(i.row));
          p.replace(new f(s, 0, s, n - 1), r);
        }, this.$getIndent = function(p) {
          return p.match(/^\s*/)[0];
        };
      }).call(v.prototype), S.MatchingBraceOutdent = v;
    }), ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function(M, S, R) {
      var f = M("../../lib/oop"), v = M("../../range").Range, p = M("./fold_mode").FoldMode, s = S.FoldMode = function(l) {
        l && (this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + l.start)), this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + l.end)));
      };
      f.inherits(s, p), (function() {
        this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/, this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/, this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/, this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/, this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/, this._getFoldWidgetBase = this.getFoldWidget, this.getFoldWidget = function(l, e, n) {
          var i = l.getLine(n);
          if (this.singleLineBlockCommentRe.test(i) && !this.startRegionRe.test(i) && !this.tripleStarBlockCommentRe.test(i))
            return "";
          var r = this._getFoldWidgetBase(l, e, n);
          return !r && this.startRegionRe.test(i) ? "start" : r;
        }, this.getFoldWidgetRange = function(l, e, n, i) {
          var r = l.getLine(n);
          if (this.startRegionRe.test(r))
            return this.getCommentRegionBlock(l, r, n);
          var a = r.match(this.foldingStartMarker);
          if (a) {
            var t = a.index;
            if (a[1])
              return this.openingBracketBlock(l, a[1], n, t);
            var o = l.getCommentFoldRange(n, t + a[0].length, 1);
            return o && !o.isMultiLine() && (i ? o = this.getSectionRange(l, n) : e != "all" && (o = null)), o;
          }
          if (e !== "markbegin") {
            var a = r.match(this.foldingStopMarker);
            if (a) {
              var t = a.index + a[0].length;
              return a[1] ? this.closingBracketBlock(l, a[1], n, t) : l.getCommentFoldRange(n, t, -1);
            }
          }
        }, this.getSectionRange = function(l, e) {
          var n = l.getLine(e), i = n.search(/\S/), r = e, t = n.length;
          e = e + 1;
          for (var o = e, a = l.getLength(); ++e < a; ) {
            n = l.getLine(e);
            var c = n.search(/\S/);
            if (c !== -1) {
              if (i > c)
                break;
              var u = this.getFoldWidgetRange(l, "all", e);
              if (u) {
                if (u.start.row <= r)
                  break;
                if (u.isMultiLine())
                  e = u.end.row;
                else if (i == c)
                  break;
              }
              o = e;
            }
          }
          return new v(r, t, o, l.getLine(o).length);
        }, this.getCommentRegionBlock = function(l, e, n) {
          for (var i = e.search(/\s*$/), r = l.getLength(), t = n, o = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/, a = 1; ++n < r; ) {
            e = l.getLine(n);
            var c = o.exec(e);
            if (c && (c[1] ? a-- : a++, !a))
              break;
          }
          var u = n;
          if (u > t)
            return new v(t, i, u, e.length);
        };
      }).call(s.prototype);
    }), ace.define("ace/mode/json", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/json_highlight_rules", "ace/mode/matching_brace_outdent", "ace/mode/folding/cstyle", "ace/worker/worker_client"], function(M, S, R) {
      var f = M("../lib/oop"), v = M("./text").Mode, p = M("./json_highlight_rules").JsonHighlightRules, s = M("./matching_brace_outdent").MatchingBraceOutdent, l = M("./folding/cstyle").FoldMode, e = M("../worker/worker_client").WorkerClient, n = function() {
        this.HighlightRules = p, this.$outdent = new s(), this.$behaviour = this.$defaultBehaviour, this.foldingRules = new l();
      };
      f.inherits(n, v), (function() {
        this.lineCommentStart = "//", this.blockComment = { start: "/*", end: "*/" }, this.getNextLineIndent = function(i, r, t) {
          var o = this.$getIndent(r);
          if (i == "start") {
            var a = r.match(/^.*[\{\(\[]\s*$/);
            a && (o += t);
          }
          return o;
        }, this.checkOutdent = function(i, r, t) {
          return this.$outdent.checkOutdent(r, t);
        }, this.autoOutdent = function(i, r, t) {
          this.$outdent.autoOutdent(r, t);
        }, this.createWorker = function(i) {
          var r = new e(["ace"], "ace/mode/json_worker", "JsonWorker");
          return r.attachToDocument(i.getDocument()), r.on("annotate", function(t) {
            i.setAnnotations(t.data);
          }), r.on("terminate", function() {
            i.clearAnnotations();
          }), r;
        }, this.$id = "ace/mode/json";
      }).call(n.prototype), S.Mode = n;
    }), function() {
      ace.require(["ace/mode/json"], function(M) {
        E && (E.exports = M);
      });
    }();
  }(dt)), dt.exports;
}
er();
var ft = { exports: {} }, Ht;
function tr() {
  return Ht || (Ht = 1, function(E, N) {
    ace.define("ace/theme/chrome-css", ["require", "exports", "module"], function(M, S, R) {
      R.exports = `.ace-chrome .ace_gutter {
  background: #ebebeb;
  color: #333;
  overflow : hidden;
}

.ace-chrome .ace_print-margin {
  width: 1px;
  background: #e8e8e8;
}

.ace-chrome {
  background-color: #FFFFFF;
  color: black;
}

.ace-chrome .ace_cursor {
  color: black;
}

.ace-chrome .ace_invisible {
  color: rgb(191, 191, 191);
}

.ace-chrome .ace_constant.ace_buildin {
  color: rgb(88, 72, 246);
}

.ace-chrome .ace_constant.ace_language {
  color: rgb(88, 92, 246);
}

.ace-chrome .ace_constant.ace_library {
  color: rgb(6, 150, 14);
}

.ace-chrome .ace_invalid {
  background-color: rgb(153, 0, 0);
  color: white;
}

.ace-chrome .ace_fold {
}

.ace-chrome .ace_support.ace_function {
  color: rgb(60, 76, 114);
}

.ace-chrome .ace_support.ace_constant {
  color: rgb(6, 150, 14);
}

.ace-chrome .ace_support.ace_type,
.ace-chrome .ace_support.ace_class
.ace-chrome .ace_support.ace_other {
  color: rgb(109, 121, 222);
}

.ace-chrome .ace_variable.ace_parameter {
  font-style:italic;
  color:#FD971F;
}
.ace-chrome .ace_keyword.ace_operator {
  color: rgb(104, 118, 135);
}

.ace-chrome .ace_comment {
  color: #236e24;
}

.ace-chrome .ace_comment.ace_doc {
  color: #236e24;
}

.ace-chrome .ace_comment.ace_doc.ace_tag {
  color: #236e24;
}

.ace-chrome .ace_constant.ace_numeric {
  color: rgb(0, 0, 205);
}

.ace-chrome .ace_variable {
  color: rgb(49, 132, 149);
}

.ace-chrome .ace_xml-pe {
  color: rgb(104, 104, 91);
}

.ace-chrome .ace_entity.ace_name.ace_function {
  color: #0000A2;
}


.ace-chrome .ace_heading {
  color: rgb(12, 7, 255);
}

.ace-chrome .ace_list {
  color:rgb(185, 6, 144);
}

.ace-chrome .ace_marker-layer .ace_selection {
  background: rgb(181, 213, 255);
}

.ace-chrome .ace_marker-layer .ace_step {
  background: rgb(252, 255, 0);
}

.ace-chrome .ace_marker-layer .ace_stack {
  background: rgb(164, 229, 101);
}

.ace-chrome .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgb(192, 192, 192);
}

.ace-chrome .ace_marker-layer .ace_active-line {
  background: rgba(0, 0, 0, 0.07);
}

.ace-chrome .ace_gutter-active-line {
    background-color : #dcdcdc;
}

.ace-chrome .ace_marker-layer .ace_selected-word {
  background: rgb(250, 250, 255);
  border: 1px solid rgb(200, 200, 250);
}

.ace-chrome .ace_storage,
.ace-chrome .ace_keyword,
.ace-chrome .ace_meta.ace_tag {
  color: rgb(147, 15, 128);
}

.ace-chrome .ace_string.ace_regex {
  color: rgb(255, 0, 0)
}

.ace-chrome .ace_string {
  color: #1A1AA6;
}

.ace-chrome .ace_entity.ace_other.ace_attribute-name {
  color: #994409;
}

.ace-chrome .ace_indent-guide {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;
}
  
.ace-chrome .ace_indent-guide-active {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;
}
`;
    }), ace.define("ace/theme/chrome", ["require", "exports", "module", "ace/theme/chrome-css", "ace/lib/dom"], function(M, S, R) {
      S.isDark = !1, S.cssClass = "ace-chrome", S.cssText = M("./chrome-css");
      var f = M("../lib/dom");
      f.importCssString(S.cssText, S.cssClass, !1);
    }), function() {
      ace.require(["ace/theme/chrome"], function(M) {
        E && (E.exports = M);
      });
    }();
  }(ft)), ft.exports;
}
tr();
var pt = {}, Bt;
function nr() {
  return Bt || (Bt = 1, function(E) {
    if (typeof E.window < "u" && E.document || E.require && E.define)
      return;
    E.console || (E.console = function() {
      var R = Array.prototype.slice.call(arguments, 0);
      postMessage({ type: "log", data: R });
    }, E.console.error = E.console.warn = E.console.log = E.console.trace = E.console), E.window = E, E.ace = E, E.onerror = function(R, f, v, p, s) {
      postMessage({ type: "error", data: {
        message: R,
        data: s && s.data,
        file: f,
        line: v,
        col: p,
        stack: s && s.stack
      } });
    }, E.normalizeModule = function(R, f) {
      if (f.indexOf("!") !== -1) {
        var v = f.split("!");
        return E.normalizeModule(R, v[0]) + "!" + E.normalizeModule(R, v[1]);
      }
      if (f.charAt(0) == ".") {
        var p = R.split("/").slice(0, -1).join("/");
        for (f = (p ? p + "/" : "") + f; f.indexOf(".") !== -1 && s != f; ) {
          var s = f;
          f = f.replace(/^\.\//, "").replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "");
        }
      }
      return f;
    }, E.require = function(f, v) {
      if (v || (v = f, f = null), !v.charAt)
        throw new Error("worker.js require() accepts only (parentId, id) as arguments");
      v = E.normalizeModule(f, v);
      var p = E.require.modules[v];
      if (p)
        return p.initialized || (p.initialized = !0, p.exports = p.factory().exports), p.exports;
      if (!E.require.tlns)
        return console.log("unable to load " + v);
      var s = N(v, E.require.tlns);
      return s.slice(-3) != ".js" && (s += ".js"), E.require.id = v, E.require.modules[v] = {}, importScripts(s), E.require(f, v);
    };
    function N(R, f) {
      for (var v = R, p = ""; v; ) {
        var s = f[v];
        if (typeof s == "string")
          return s + p;
        if (s)
          return s.location.replace(/\/*$/, "/") + (p || s.main || s.name);
        if (s === !1)
          return "";
        var l = v.lastIndexOf("/");
        if (l === -1) break;
        p = v.substr(l) + p, v = v.slice(0, l);
      }
      return R;
    }
    E.require.modules = {}, E.require.tlns = {}, E.define = function(R, f, v) {
      if (arguments.length == 2 ? (v = f, typeof R != "string" && (f = R, R = E.require.id)) : arguments.length == 1 && (v = R, f = [], R = E.require.id), typeof v != "function") {
        E.require.modules[R] = {
          exports: v,
          initialized: !0
        };
        return;
      }
      f.length || (f = ["require", "exports", "module"]);
      var p = function(s) {
        return E.require(R, s);
      };
      E.require.modules[R] = {
        exports: {},
        factory: function() {
          var s = this, l = v.apply(this, f.slice(0, v.length).map(function(e) {
            switch (e) {
              // Because "require", "exports" and "module" aren't actual
              // dependencies, we must handle them seperately.
              case "require":
                return p;
              case "exports":
                return s.exports;
              case "module":
                return s;
              // But for all other dependencies, we can just go ahead and
              // require them.
              default:
                return p(e);
            }
          }));
          return l && (s.exports = l), s;
        }
      };
    }, E.define.amd = {}, E.require.tlns = {}, E.initBaseUrls = function(f) {
      for (var v in f)
        this.require.tlns[v] = f[v];
    }, E.initSender = function() {
      var f = E.require("ace/lib/event_emitter").EventEmitter, v = E.require("ace/lib/oop"), p = function() {
      };
      return (function() {
        v.implement(this, f), this.callback = function(s, l) {
          postMessage({
            type: "call",
            id: l,
            data: s
          });
        }, this.emit = function(s, l) {
          postMessage({
            type: "event",
            name: s,
            data: l
          });
        };
      }).call(p.prototype), new p();
    };
    var M = E.main = null, S = E.sender = null;
    E.onmessage = function(R) {
      var f = R.data;
      if (f.event && S)
        S._signal(f.event, f.data);
      else if (f.command)
        if (M[f.command])
          M[f.command].apply(M, f.args);
        else if (E[f.command])
          E[f.command].apply(E, f.args);
        else
          throw new Error("Unknown command:" + f.command);
      else if (f.init) {
        E.initBaseUrls(f.tlns), S = E.sender = E.initSender();
        var v = this.require(f.module)[f.classname];
        M = E.main = new v(S);
      }
    };
  }(pt), ace.define("ace/lib/oop", [], function(E, N, M) {
    N.inherits = function(S, R) {
      S.super_ = R, S.prototype = Object.create(R.prototype, {
        constructor: {
          value: S,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      });
    }, N.mixin = function(S, R) {
      for (var f in R)
        S[f] = R[f];
      return S;
    }, N.implement = function(S, R) {
      N.mixin(S, R);
    };
  }), ace.define("ace/apply_delta", [], function(E, N, M) {
    N.applyDelta = function(S, R, f) {
      var v = R.start.row, p = R.start.column, s = S[v] || "";
      switch (R.action) {
        case "insert":
          var l = R.lines;
          if (l.length === 1)
            S[v] = s.substring(0, p) + R.lines[0] + s.substring(p);
          else {
            var e = [v, 1].concat(R.lines);
            S.splice.apply(S, e), S[v] = s.substring(0, p) + S[v], S[v + R.lines.length - 1] += s.substring(p);
          }
          break;
        case "remove":
          var n = R.end.column, i = R.end.row;
          v === i ? S[v] = s.substring(0, p) + s.substring(n) : S.splice(v, i - v + 1, s.substring(0, p) + S[i].substring(n));
          break;
      }
    };
  }), ace.define("ace/lib/event_emitter", [], function(E, N, M) {
    var S = {}, R = function() {
      this.propagationStopped = !0;
    }, f = function() {
      this.defaultPrevented = !0;
    };
    S._emit = S._dispatchEvent = function(v, p) {
      this._eventRegistry || (this._eventRegistry = {}), this._defaultHandlers || (this._defaultHandlers = {});
      var s = this._eventRegistry[v] || [], l = this._defaultHandlers[v];
      if (!(!s.length && !l)) {
        (typeof p != "object" || !p) && (p = {}), p.type || (p.type = v), p.stopPropagation || (p.stopPropagation = R), p.preventDefault || (p.preventDefault = f), s = s.slice();
        for (var e = 0; e < s.length && (s[e](p, this), !p.propagationStopped); e++)
          ;
        if (l && !p.defaultPrevented)
          return l(p, this);
      }
    }, S._signal = function(v, p) {
      var s = (this._eventRegistry || {})[v];
      if (s) {
        s = s.slice();
        for (var l = 0; l < s.length; l++)
          s[l](p, this);
      }
    }, S.once = function(v, p) {
      var s = this;
      if (this.on(v, function l() {
        s.off(v, l), p.apply(null, arguments);
      }), !p)
        return new Promise(function(l) {
          p = l;
        });
    }, S.setDefaultHandler = function(v, p) {
      var s = this._defaultHandlers;
      if (s || (s = this._defaultHandlers = { _disabled_: {} }), s[v]) {
        var l = s[v], e = s._disabled_[v];
        e || (s._disabled_[v] = e = []), e.push(l);
        var n = e.indexOf(p);
        n != -1 && e.splice(n, 1);
      }
      s[v] = p;
    }, S.removeDefaultHandler = function(v, p) {
      var s = this._defaultHandlers;
      if (s) {
        var l = s._disabled_[v];
        if (s[v] == p)
          l && this.setDefaultHandler(v, l.pop());
        else if (l) {
          var e = l.indexOf(p);
          e != -1 && l.splice(e, 1);
        }
      }
    }, S.on = S.addEventListener = function(v, p, s) {
      this._eventRegistry = this._eventRegistry || {};
      var l = this._eventRegistry[v];
      return l || (l = this._eventRegistry[v] = []), l.indexOf(p) == -1 && l[s ? "unshift" : "push"](p), p;
    }, S.off = S.removeListener = S.removeEventListener = function(v, p) {
      this._eventRegistry = this._eventRegistry || {};
      var s = this._eventRegistry[v];
      if (s) {
        var l = s.indexOf(p);
        l !== -1 && s.splice(l, 1);
      }
    }, S.removeAllListeners = function(v) {
      v || (this._eventRegistry = this._defaultHandlers = void 0), this._eventRegistry && (this._eventRegistry[v] = void 0), this._defaultHandlers && (this._defaultHandlers[v] = void 0);
    }, N.EventEmitter = S;
  }), ace.define("ace/range", [], function(E, N, M) {
    var S = (
      /** @class */
      function() {
        function R(f, v, p, s) {
          this.start = {
            row: f,
            column: v
          }, this.end = {
            row: p,
            column: s
          };
        }
        return R.prototype.isEqual = function(f) {
          return this.start.row === f.start.row && this.end.row === f.end.row && this.start.column === f.start.column && this.end.column === f.end.column;
        }, R.prototype.toString = function() {
          return "Range: [" + this.start.row + "/" + this.start.column + "] -> [" + this.end.row + "/" + this.end.column + "]";
        }, R.prototype.contains = function(f, v) {
          return this.compare(f, v) == 0;
        }, R.prototype.compareRange = function(f) {
          var v, p = f.end, s = f.start;
          return v = this.compare(p.row, p.column), v == 1 ? (v = this.compare(s.row, s.column), v == 1 ? 2 : v == 0 ? 1 : 0) : v == -1 ? -2 : (v = this.compare(s.row, s.column), v == -1 ? -1 : v == 1 ? 42 : 0);
        }, R.prototype.comparePoint = function(f) {
          return this.compare(f.row, f.column);
        }, R.prototype.containsRange = function(f) {
          return this.comparePoint(f.start) == 0 && this.comparePoint(f.end) == 0;
        }, R.prototype.intersects = function(f) {
          var v = this.compareRange(f);
          return v == -1 || v == 0 || v == 1;
        }, R.prototype.isEnd = function(f, v) {
          return this.end.row == f && this.end.column == v;
        }, R.prototype.isStart = function(f, v) {
          return this.start.row == f && this.start.column == v;
        }, R.prototype.setStart = function(f, v) {
          typeof f == "object" ? (this.start.column = f.column, this.start.row = f.row) : (this.start.row = f, this.start.column = v);
        }, R.prototype.setEnd = function(f, v) {
          typeof f == "object" ? (this.end.column = f.column, this.end.row = f.row) : (this.end.row = f, this.end.column = v);
        }, R.prototype.inside = function(f, v) {
          return this.compare(f, v) == 0 ? !(this.isEnd(f, v) || this.isStart(f, v)) : !1;
        }, R.prototype.insideStart = function(f, v) {
          return this.compare(f, v) == 0 ? !this.isEnd(f, v) : !1;
        }, R.prototype.insideEnd = function(f, v) {
          return this.compare(f, v) == 0 ? !this.isStart(f, v) : !1;
        }, R.prototype.compare = function(f, v) {
          return !this.isMultiLine() && f === this.start.row ? v < this.start.column ? -1 : v > this.end.column ? 1 : 0 : f < this.start.row ? -1 : f > this.end.row ? 1 : this.start.row === f ? v >= this.start.column ? 0 : -1 : this.end.row === f ? v <= this.end.column ? 0 : 1 : 0;
        }, R.prototype.compareStart = function(f, v) {
          return this.start.row == f && this.start.column == v ? -1 : this.compare(f, v);
        }, R.prototype.compareEnd = function(f, v) {
          return this.end.row == f && this.end.column == v ? 1 : this.compare(f, v);
        }, R.prototype.compareInside = function(f, v) {
          return this.end.row == f && this.end.column == v ? 1 : this.start.row == f && this.start.column == v ? -1 : this.compare(f, v);
        }, R.prototype.clipRows = function(f, v) {
          if (this.end.row > v)
            var p = { row: v + 1, column: 0 };
          else if (this.end.row < f)
            var p = { row: f, column: 0 };
          if (this.start.row > v)
            var s = { row: v + 1, column: 0 };
          else if (this.start.row < f)
            var s = { row: f, column: 0 };
          return R.fromPoints(s || this.start, p || this.end);
        }, R.prototype.extend = function(f, v) {
          var p = this.compare(f, v);
          if (p == 0)
            return this;
          if (p == -1)
            var s = { row: f, column: v };
          else
            var l = { row: f, column: v };
          return R.fromPoints(s || this.start, l || this.end);
        }, R.prototype.isEmpty = function() {
          return this.start.row === this.end.row && this.start.column === this.end.column;
        }, R.prototype.isMultiLine = function() {
          return this.start.row !== this.end.row;
        }, R.prototype.clone = function() {
          return R.fromPoints(this.start, this.end);
        }, R.prototype.collapseRows = function() {
          return this.end.column == 0 ? new R(this.start.row, 0, Math.max(this.start.row, this.end.row - 1), 0) : new R(this.start.row, 0, this.end.row, 0);
        }, R.prototype.toScreenRange = function(f) {
          var v = f.documentToScreenPosition(this.start), p = f.documentToScreenPosition(this.end);
          return new R(v.row, v.column, p.row, p.column);
        }, R.prototype.moveBy = function(f, v) {
          this.start.row += f, this.start.column += v, this.end.row += f, this.end.column += v;
        }, R;
      }()
    );
    S.fromPoints = function(R, f) {
      return new S(R.row, R.column, f.row, f.column);
    }, S.comparePoints = function(R, f) {
      return R.row - f.row || R.column - f.column;
    }, N.Range = S;
  }), ace.define("ace/anchor", [], function(E, N, M) {
    var S = E("./lib/oop"), R = E("./lib/event_emitter").EventEmitter, f = (
      /** @class */
      function() {
        function s(l, e, n) {
          this.$onChange = this.onChange.bind(this), this.attach(l), typeof e != "number" ? this.setPosition(e.row, e.column) : this.setPosition(e, n);
        }
        return s.prototype.getPosition = function() {
          return this.$clipPositionToDocument(this.row, this.column);
        }, s.prototype.getDocument = function() {
          return this.document;
        }, s.prototype.onChange = function(l) {
          if (!(l.start.row == l.end.row && l.start.row != this.row) && !(l.start.row > this.row)) {
            var e = p(l, { row: this.row, column: this.column }, this.$insertRight);
            this.setPosition(e.row, e.column, !0);
          }
        }, s.prototype.setPosition = function(l, e, n) {
          var i;
          if (n ? i = {
            row: l,
            column: e
          } : i = this.$clipPositionToDocument(l, e), !(this.row == i.row && this.column == i.column)) {
            var r = {
              row: this.row,
              column: this.column
            };
            this.row = i.row, this.column = i.column, this._signal("change", {
              old: r,
              value: i
            });
          }
        }, s.prototype.detach = function() {
          this.document.off("change", this.$onChange);
        }, s.prototype.attach = function(l) {
          this.document = l || this.document, this.document.on("change", this.$onChange);
        }, s.prototype.$clipPositionToDocument = function(l, e) {
          var n = {};
          return l >= this.document.getLength() ? (n.row = Math.max(0, this.document.getLength() - 1), n.column = this.document.getLine(n.row).length) : l < 0 ? (n.row = 0, n.column = 0) : (n.row = l, n.column = Math.min(this.document.getLine(n.row).length, Math.max(0, e))), e < 0 && (n.column = 0), n;
        }, s;
      }()
    );
    f.prototype.$insertRight = !1, S.implement(f.prototype, R);
    function v(s, l, e) {
      var n = e ? s.column <= l.column : s.column < l.column;
      return s.row < l.row || s.row == l.row && n;
    }
    function p(s, l, e) {
      var n = s.action == "insert", i = (n ? 1 : -1) * (s.end.row - s.start.row), r = (n ? 1 : -1) * (s.end.column - s.start.column), t = s.start, o = n ? t : s.end;
      return v(l, t, e) ? {
        row: l.row,
        column: l.column
      } : v(o, l, !e) ? {
        row: l.row + i,
        column: l.column + (l.row == o.row ? r : 0)
      } : {
        row: t.row,
        column: t.column
      };
    }
    N.Anchor = f;
  }), ace.define("ace/document", [], function(E, N, M) {
    var S = E("./lib/oop"), R = E("./apply_delta").applyDelta, f = E("./lib/event_emitter").EventEmitter, v = E("./range").Range, p = E("./anchor").Anchor, s = (
      /** @class */
      function() {
        function l(e) {
          this.$lines = [""], e.length === 0 ? this.$lines = [""] : Array.isArray(e) ? this.insertMergedLines({ row: 0, column: 0 }, e) : this.insert({ row: 0, column: 0 }, e);
        }
        return l.prototype.setValue = function(e) {
          var n = this.getLength() - 1;
          this.remove(new v(0, 0, n, this.getLine(n).length)), this.insert({ row: 0, column: 0 }, e || "");
        }, l.prototype.getValue = function() {
          return this.getAllLines().join(this.getNewLineCharacter());
        }, l.prototype.createAnchor = function(e, n) {
          return new p(this, e, n);
        }, l.prototype.$detectNewLine = function(e) {
          var n = e.match(/^.*?(\r\n|\r|\n)/m);
          this.$autoNewLine = n ? n[1] : `
`, this._signal("changeNewLineMode");
        }, l.prototype.getNewLineCharacter = function() {
          switch (this.$newLineMode) {
            case "windows":
              return `\r
`;
            case "unix":
              return `
`;
            default:
              return this.$autoNewLine || `
`;
          }
        }, l.prototype.setNewLineMode = function(e) {
          this.$newLineMode !== e && (this.$newLineMode = e, this._signal("changeNewLineMode"));
        }, l.prototype.getNewLineMode = function() {
          return this.$newLineMode;
        }, l.prototype.isNewLine = function(e) {
          return e == `\r
` || e == "\r" || e == `
`;
        }, l.prototype.getLine = function(e) {
          return this.$lines[e] || "";
        }, l.prototype.getLines = function(e, n) {
          return this.$lines.slice(e, n + 1);
        }, l.prototype.getAllLines = function() {
          return this.getLines(0, this.getLength());
        }, l.prototype.getLength = function() {
          return this.$lines.length;
        }, l.prototype.getTextRange = function(e) {
          return this.getLinesForRange(e).join(this.getNewLineCharacter());
        }, l.prototype.getLinesForRange = function(e) {
          var n;
          if (e.start.row === e.end.row)
            n = [this.getLine(e.start.row).substring(e.start.column, e.end.column)];
          else {
            n = this.getLines(e.start.row, e.end.row), n[0] = (n[0] || "").substring(e.start.column);
            var i = n.length - 1;
            e.end.row - e.start.row == i && (n[i] = n[i].substring(0, e.end.column));
          }
          return n;
        }, l.prototype.insertLines = function(e, n) {
          return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."), this.insertFullLines(e, n);
        }, l.prototype.removeLines = function(e, n) {
          return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."), this.removeFullLines(e, n);
        }, l.prototype.insertNewLine = function(e) {
          return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."), this.insertMergedLines(e, ["", ""]);
        }, l.prototype.insert = function(e, n) {
          return this.getLength() <= 1 && this.$detectNewLine(n), this.insertMergedLines(e, this.$split(n));
        }, l.prototype.insertInLine = function(e, n) {
          var i = this.clippedPos(e.row, e.column), r = this.pos(e.row, e.column + n.length);
          return this.applyDelta({
            start: i,
            end: r,
            action: "insert",
            lines: [n]
          }, !0), this.clonePos(r);
        }, l.prototype.clippedPos = function(e, n) {
          var i = this.getLength();
          e === void 0 ? e = i : e < 0 ? e = 0 : e >= i && (e = i - 1, n = void 0);
          var r = this.getLine(e);
          return n == null && (n = r.length), n = Math.min(Math.max(n, 0), r.length), { row: e, column: n };
        }, l.prototype.clonePos = function(e) {
          return { row: e.row, column: e.column };
        }, l.prototype.pos = function(e, n) {
          return { row: e, column: n };
        }, l.prototype.$clipPosition = function(e) {
          var n = this.getLength();
          return e.row >= n ? (e.row = Math.max(0, n - 1), e.column = this.getLine(n - 1).length) : (e.row = Math.max(0, e.row), e.column = Math.min(Math.max(e.column, 0), this.getLine(e.row).length)), e;
        }, l.prototype.insertFullLines = function(e, n) {
          e = Math.min(Math.max(e, 0), this.getLength());
          var i = 0;
          e < this.getLength() ? (n = n.concat([""]), i = 0) : (n = [""].concat(n), e--, i = this.$lines[e].length), this.insertMergedLines({ row: e, column: i }, n);
        }, l.prototype.insertMergedLines = function(e, n) {
          var i = this.clippedPos(e.row, e.column), r = {
            row: i.row + n.length - 1,
            column: (n.length == 1 ? i.column : 0) + n[n.length - 1].length
          };
          return this.applyDelta({
            start: i,
            end: r,
            action: "insert",
            lines: n
          }), this.clonePos(r);
        }, l.prototype.remove = function(e) {
          var n = this.clippedPos(e.start.row, e.start.column), i = this.clippedPos(e.end.row, e.end.column);
          return this.applyDelta({
            start: n,
            end: i,
            action: "remove",
            lines: this.getLinesForRange({ start: n, end: i })
          }), this.clonePos(n);
        }, l.prototype.removeInLine = function(e, n, i) {
          var r = this.clippedPos(e, n), t = this.clippedPos(e, i);
          return this.applyDelta({
            start: r,
            end: t,
            action: "remove",
            lines: this.getLinesForRange({ start: r, end: t })
          }, !0), this.clonePos(r);
        }, l.prototype.removeFullLines = function(e, n) {
          e = Math.min(Math.max(0, e), this.getLength() - 1), n = Math.min(Math.max(0, n), this.getLength() - 1);
          var i = n == this.getLength() - 1 && e > 0, r = n < this.getLength() - 1, t = i ? e - 1 : e, o = i ? this.getLine(t).length : 0, a = r ? n + 1 : n, c = r ? 0 : this.getLine(a).length, u = new v(t, o, a, c), w = this.$lines.slice(e, n + 1);
          return this.applyDelta({
            start: u.start,
            end: u.end,
            action: "remove",
            lines: this.getLinesForRange(u)
          }), w;
        }, l.prototype.removeNewLine = function(e) {
          e < this.getLength() - 1 && e >= 0 && this.applyDelta({
            start: this.pos(e, this.getLine(e).length),
            end: this.pos(e + 1, 0),
            action: "remove",
            lines: ["", ""]
          });
        }, l.prototype.replace = function(e, n) {
          if (e instanceof v || (e = v.fromPoints(e.start, e.end)), n.length === 0 && e.isEmpty())
            return e.start;
          if (n == this.getTextRange(e))
            return e.end;
          this.remove(e);
          var i;
          return n ? i = this.insert(e.start, n) : i = e.start, i;
        }, l.prototype.applyDeltas = function(e) {
          for (var n = 0; n < e.length; n++)
            this.applyDelta(e[n]);
        }, l.prototype.revertDeltas = function(e) {
          for (var n = e.length - 1; n >= 0; n--)
            this.revertDelta(e[n]);
        }, l.prototype.applyDelta = function(e, n) {
          var i = e.action == "insert";
          (i ? e.lines.length <= 1 && !e.lines[0] : !v.comparePoints(e.start, e.end)) || (i && e.lines.length > 2e4 ? this.$splitAndapplyLargeDelta(e, 2e4) : (R(this.$lines, e, n), this._signal("change", e)));
        }, l.prototype.$safeApplyDelta = function(e) {
          var n = this.$lines.length;
          (e.action == "remove" && e.start.row < n && e.end.row < n || e.action == "insert" && e.start.row <= n) && this.applyDelta(e);
        }, l.prototype.$splitAndapplyLargeDelta = function(e, n) {
          for (var i = e.lines, r = i.length - n + 1, t = e.start.row, o = e.start.column, a = 0, c = 0; a < r; a = c) {
            c += n - 1;
            var u = i.slice(a, c);
            u.push(""), this.applyDelta({
              start: this.pos(t + a, o),
              end: this.pos(t + c, o = 0),
              action: e.action,
              lines: u
            }, !0);
          }
          e.lines = i.slice(a), e.start.row = t + a, e.start.column = o, this.applyDelta(e, !0);
        }, l.prototype.revertDelta = function(e) {
          this.$safeApplyDelta({
            start: this.clonePos(e.start),
            end: this.clonePos(e.end),
            action: e.action == "insert" ? "remove" : "insert",
            lines: e.lines.slice()
          });
        }, l.prototype.indexToPosition = function(e, n) {
          for (var i = this.$lines || this.getAllLines(), r = this.getNewLineCharacter().length, t = n || 0, o = i.length; t < o; t++)
            if (e -= i[t].length + r, e < 0)
              return { row: t, column: e + i[t].length + r };
          return { row: o - 1, column: e + i[o - 1].length + r };
        }, l.prototype.positionToIndex = function(e, n) {
          for (var i = this.$lines || this.getAllLines(), r = this.getNewLineCharacter().length, t = 0, o = Math.min(e.row, i.length), a = n || 0; a < o; ++a)
            t += i[a].length + r;
          return t + e.column;
        }, l.prototype.$split = function(e) {
          return e.split(/\r\n|\r|\n/);
        }, l;
      }()
    );
    s.prototype.$autoNewLine = "", s.prototype.$newLineMode = "auto", S.implement(s.prototype, f), N.Document = s;
  }), ace.define("ace/lib/deep_copy", [], function(E, N, M) {
    N.deepCopy = function S(R) {
      if (typeof R != "object" || !R)
        return R;
      var f;
      if (Array.isArray(R)) {
        f = [];
        for (var v = 0; v < R.length; v++)
          f[v] = S(R[v]);
        return f;
      }
      if (Object.prototype.toString.call(R) !== "[object Object]")
        return R;
      f = {};
      for (var v in R)
        f[v] = S(R[v]);
      return f;
    };
  }), ace.define("ace/lib/lang", [], function(E, N, M) {
    N.last = function(f) {
      return f[f.length - 1];
    }, N.stringReverse = function(f) {
      return f.split("").reverse().join("");
    }, N.stringRepeat = function(f, v) {
      for (var p = ""; v > 0; )
        v & 1 && (p += f), (v >>= 1) && (f += f);
      return p;
    };
    var S = /^\s\s*/, R = /\s\s*$/;
    N.stringTrimLeft = function(f) {
      return f.replace(S, "");
    }, N.stringTrimRight = function(f) {
      return f.replace(R, "");
    }, N.copyObject = function(f) {
      var v = {};
      for (var p in f)
        v[p] = f[p];
      return v;
    }, N.copyArray = function(f) {
      for (var v = [], p = 0, s = f.length; p < s; p++)
        f[p] && typeof f[p] == "object" ? v[p] = this.copyObject(f[p]) : v[p] = f[p];
      return v;
    }, N.deepCopy = E("./deep_copy").deepCopy, N.arrayToMap = function(f) {
      for (var v = {}, p = 0; p < f.length; p++)
        v[f[p]] = 1;
      return v;
    }, N.createMap = function(f) {
      var v = /* @__PURE__ */ Object.create(null);
      for (var p in f)
        v[p] = f[p];
      return v;
    }, N.arrayRemove = function(f, v) {
      for (var p = 0; p <= f.length; p++)
        v === f[p] && f.splice(p, 1);
    }, N.escapeRegExp = function(f) {
      return f.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1");
    }, N.escapeHTML = function(f) {
      return ("" + f).replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;");
    }, N.getMatchOffsets = function(f, v) {
      var p = [];
      return f.replace(v, function(s) {
        p.push({
          offset: arguments[arguments.length - 2],
          length: s.length
        });
      }), p;
    }, N.deferredCall = function(f) {
      var v = null, p = function() {
        v = null, f();
      }, s = function(l) {
        return s.cancel(), v = setTimeout(p, l || 0), s;
      };
      return s.schedule = s, s.call = function() {
        return this.cancel(), f(), s;
      }, s.cancel = function() {
        return clearTimeout(v), v = null, s;
      }, s.isPending = function() {
        return v;
      }, s;
    }, N.delayedCall = function(f, v) {
      var p = null, s = function() {
        p = null, f();
      }, l = function(e) {
        p == null && (p = setTimeout(s, e || v));
      };
      return l.delay = function(e) {
        p && clearTimeout(p), p = setTimeout(s, e || v);
      }, l.schedule = l, l.call = function() {
        this.cancel(), f();
      }, l.cancel = function() {
        p && clearTimeout(p), p = null;
      }, l.isPending = function() {
        return p;
      }, l;
    }, N.supportsLookbehind = function() {
      try {
        new RegExp("(?<=.)");
      } catch {
        return !1;
      }
      return !0;
    }, N.skipEmptyMatch = function(f, v, p) {
      return p && f.codePointAt(v) > 65535 ? 2 : 1;
    };
  }), ace.define("ace/worker/mirror", [], function(E, N, M) {
    var S = E("../document").Document, R = E("../lib/lang"), f = N.Mirror = function(v) {
      this.sender = v;
      var p = this.doc = new S(""), s = this.deferredUpdate = R.delayedCall(this.onUpdate.bind(this)), l = this;
      v.on("change", function(e) {
        var n = e.data;
        if (n[0].start)
          p.applyDeltas(n);
        else
          for (var i = 0; i < n.length; i += 2) {
            var r, t;
            if (Array.isArray(n[i + 1]) ? r = { action: "insert", start: n[i], lines: n[i + 1] } : r = { action: "remove", start: n[i], end: n[i + 1] }, (r.action == "insert" ? r.start : r.end).row >= p.$lines.length)
              throw t = new Error("Invalid delta"), t.data = {
                path: l.$path,
                linesLength: p.$lines.length,
                start: r.start,
                end: r.end
              }, t;
            p.applyDelta(r, !0);
          }
        if (l.$timeout)
          return s.schedule(l.$timeout);
        l.onUpdate();
      });
    };
    (function() {
      this.$timeout = 500, this.setTimeout = function(v) {
        this.$timeout = v;
      }, this.setValue = function(v) {
        this.doc.setValue(v), this.deferredUpdate.schedule(this.$timeout);
      }, this.getValue = function(v) {
        this.sender.callback(this.doc.getValue(), v);
      }, this.onUpdate = function() {
      }, this.isPending = function() {
        return this.deferredUpdate.isPending();
      };
    }).call(f.prototype);
  }), ace.define("ace/mode/json/json_parse", [], function(E, N, M) {
    var S, R, f = {
      '"': '"',
      "\\": "\\",
      "/": "/",
      b: "\b",
      f: "\f",
      n: `
`,
      r: "\r",
      t: "	"
    }, v, p = function(a) {
      throw {
        name: "SyntaxError",
        message: a,
        at: S,
        text: v
      };
    }, s = function(a) {
      return a && a !== R && p("Expected '" + a + "' instead of '" + R + "'"), R = v.charAt(S), S += 1, R;
    }, l = function() {
      var a, c = "";
      for (R === "-" && (c = "-", s("-")); R >= "0" && R <= "9"; )
        c += R, s();
      if (R === ".")
        for (c += "."; s() && R >= "0" && R <= "9"; )
          c += R;
      if (R === "e" || R === "E")
        for (c += R, s(), (R === "-" || R === "+") && (c += R, s()); R >= "0" && R <= "9"; )
          c += R, s();
      if (a = +c, isNaN(a))
        p("Bad number");
      else
        return a;
    }, e = function() {
      var a, c, u = "", w;
      if (R === '"')
        for (; s(); ) {
          if (R === '"')
            return s(), u;
          if (R === "\\")
            if (s(), R === "u") {
              for (w = 0, c = 0; c < 4 && (a = parseInt(s(), 16), !!isFinite(a)); c += 1)
                w = w * 16 + a;
              u += String.fromCharCode(w);
            } else if (typeof f[R] == "string")
              u += f[R];
            else
              break;
          else {
            if (R == `
` || R == "\r")
              break;
            u += R;
          }
        }
      p("Bad string");
    }, n = function() {
      for (; R && R <= " "; )
        s();
    }, i = function() {
      switch (R) {
        case "t":
          return s("t"), s("r"), s("u"), s("e"), !0;
        case "f":
          return s("f"), s("a"), s("l"), s("s"), s("e"), !1;
        case "n":
          return s("n"), s("u"), s("l"), s("l"), null;
      }
      p("Unexpected '" + R + "'");
    }, r, t = function() {
      var a = [];
      if (R === "[") {
        if (s("["), n(), R === "]")
          return s("]"), a;
        for (; R; ) {
          if (a.push(r()), n(), R === "]")
            return s("]"), a;
          s(","), n();
        }
      }
      p("Bad array");
    }, o = function() {
      var a, c = {};
      if (R === "{") {
        if (s("{"), n(), R === "}")
          return s("}"), c;
        for (; R; ) {
          if (a = e(), n(), s(":"), Object.hasOwnProperty.call(c, a) && p('Duplicate key "' + a + '"'), c[a] = r(), n(), R === "}")
            return s("}"), c;
          s(","), n();
        }
      }
      p("Bad object");
    };
    return r = function() {
      switch (n(), R) {
        case "{":
          return o();
        case "[":
          return t();
        case '"':
          return e();
        case "-":
          return l();
        default:
          return R >= "0" && R <= "9" ? l() : i();
      }
    }, function(a, c) {
      var u;
      return v = a, S = 0, R = " ", u = r(), n(), R && p("Syntax error"), typeof c == "function" ? function w(y, m) {
        var h, $, _ = y[m];
        if (_ && typeof _ == "object")
          for (h in _)
            Object.hasOwnProperty.call(_, h) && ($ = w(_, h), $ !== void 0 ? _[h] = $ : delete _[h]);
        return c.call(y, m, _);
      }({ "": u }, "") : u;
    };
  }), ace.define("ace/mode/json_worker", [], function(E, N, M) {
    var S = E("../lib/oop"), R = E("../worker/mirror").Mirror, f = E("./json/json_parse"), v = N.JsonWorker = function(p) {
      R.call(this, p), this.setTimeout(200);
    };
    S.inherits(v, R), (function() {
      this.onUpdate = function() {
        var p = this.doc.getValue(), s = [];
        try {
          p && f(p);
        } catch (e) {
          var l = this.doc.indexToPosition(e.at - 1);
          s.push({
            row: l.row,
            column: l.column,
            text: e.message,
            type: "error"
          });
        }
        this.sender.emit("annotate", s);
      };
    }).call(v.prototype);
  })), pt;
}
nr();
const ir = {
  __name: "AceEditorWrap",
  props: {
    modelValue: {
      type: Object,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(E, { emit: N }) {
    const M = E, S = N, R = ne("");
    return Ue(R, (f) => {
      try {
        S("update:modelValue", JSON.parse(f));
      } catch (v) {
        console.log(v);
      }
    }), je(() => {
      R.value = JSON.stringify(M.modelValue, null, 2);
    }), (f, v) => (Q(), te(K(qi), {
      value: R.value,
      "onUpdate:value": v[0] || (v[0] = (p) => R.value = p),
      lang: "json",
      theme: "chrome",
      style: { height: "600px" },
      options: {
        useWorker: !0,
        showPrintMargin: !1,
        fontSize: 14
      }
    }, null, 8, ["value"]));
  }
}, rr = { id: "content-editor" }, or = { class: "preview-container fill-height" }, sr = {
  __name: "ComponentEditor",
  props: {
    modelValue: { default: [] },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(E) {
    const N = we("componentClipboard"), M = ne(!1), S = ne({
      component: "",
      props: {}
    }), R = ne(!1), f = ne(!1), v = ne(!1), p = ne(!1), s = ne(!1), l = ne([]), e = ne(""), n = qe(E, "modelValue"), { removeElement: i, pasteElement: r, insertElement: t } = Yt(n);
    function o(m) {
      N.copy(m, null);
    }
    function a(m) {
      const h = [...n.value], $ = l.value.pop(), _ = l.value.reduce((L, x) => L[x], h);
      _ && (_[$] = m), n.value = h, R.value = !1, S.value = {}, l.value = [];
    }
    function c({ element: m, path: h }) {
      l.value = h, R.value = !0, S.value = m;
    }
    const u = (m) => {
      n.value = m;
    };
    function w() {
      if (e.value === "") {
        alert("Please select a component");
        return;
      }
      n.value.push({
        component: e.value,
        props: {}
      }), M.value = !1, e.value = "";
    }
    function y(m, h, $) {
      if (!m) return;
      m.preventDefault();
      const _ = [
        {
          label: "Edit",
          onClick: () => {
            c({ element: h, path: $ });
          }
        },
        {
          label: "Cut",
          onClick: () => {
            N.cut(h, $), N.isCut && i($);
          }
        },
        {
          label: "Copy",
          onClick: () => {
            N.copy(h, $);
          }
        }
      ];
      N.hasContent() && _.push({
        label: "Paste",
        children: [
          {
            label: "Paste as Prepend",
            onClick: () => r($, "prepend")
          },
          {
            label: "Paste as Append",
            onClick: () => r($, "append")
          },
          {
            label: "Paste as Child",
            onClick: () => r($, "child")
          }
        ]
      }), _.push(Qt(t, $)), _.push({
        label: "Delete",
        onClick: () => {
          i($);
        }
      }), en.showContextMenu({
        x: m.x,
        y: m.y,
        items: _
      });
    }
    return (m, h) => {
      const $ = ae("v-btn"), _ = ae("v-spacer"), L = ae("v-list-item-title"), x = ae("v-list-item"), D = ae("v-list"), A = ae("v-menu"), C = ae("v-toolbar"), g = ae("v-col"), d = ae("v-row"), b = ae("v-card-title"), k = ae("v-combobox"), I = ae("v-card-text"), T = ae("v-card-actions"), O = ae("v-card"), W = ae("v-dialog");
      return Q(), se("div", rr, [
        ee(C, { class: "mb-2" }, {
          default: X(() => [
            ee($, {
              active: p.value,
              onClick: h[0] || (h[0] = (H) => p.value = !p.value),
              icon: "fa-solid fa-code"
            }, null, 8, ["active"]),
            ee($, {
              active: s.value,
              onClick: h[1] || (h[1] = (H) => s.value = !s.value)
            }, {
              default: X(() => h[14] || (h[14] = [
                ye("Draggable")
              ])),
              _: 1,
              __: [14]
            }, 8, ["active"]),
            ee($, {
              onClick: h[2] || (h[2] = (H) => M.value = !0),
              icon: "fa-solid fa-plus"
            }),
            ee($, {
              onClick: h[3] || (h[3] = (H) => f.value = !f.value),
              icon: "fa-solid fa-tree"
            }),
            ee(_),
            ee(A, null, {
              activator: X(({ props: H }) => [
                ee($, ze(H, { icon: "fa-solid fa-clipboard" }), null, 16)
              ]),
              default: X(() => [
                ee(D, null, {
                  default: X(() => [
                    (Q(!0), se(Ae, null, Oe(K(Kt), (H) => (Q(), te(x, {
                      key: H.title,
                      onClick: (B) => o(H)
                    }, {
                      default: X(() => [
                        ee(L, null, {
                          default: X(() => [
                            ye(Re(H.title), 1)
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
        ee(d, null, {
          default: X(() => [
            p.value ? (Q(), te(g, {
              key: 0,
              cols: 12
            }, {
              default: X(() => [
                ee(ir, {
                  modelValue: n.value,
                  "onUpdate:modelValue": h[4] || (h[4] = (H) => n.value = H)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })) : (Q(), te(g, {
              key: 1,
              cols: 12,
              class: "bordered fill-height"
            }, {
              default: X(() => [
                ge("div", or, [
                  ge("div", {
                    class: Ie(["preview-content", { "has-docked-tree": f.value && v.value }])
                  }, [
                    ee(gt, {
                      modelValue: n.value,
                      "onUpdate:modelValue": h[5] || (h[5] = (H) => n.value = H),
                      onUpdateSections: u,
                      draggable_pro: s.value,
                      onOpenEdit: h[6] || (h[6] = ({ event: H, element: B, path: P }) => y(H, B, P))
                    }, null, 8, ["modelValue", "draggable_pro"])
                  ], 2),
                  f.value ? (Q(), te(Ei, {
                    key: 0,
                    data: n.value,
                    "onUpdate:data": h[7] || (h[7] = (H) => n.value = H),
                    onClose: h[8] || (h[8] = (H) => f.value = !1),
                    onOpenEdit: c,
                    "onUpdate:docked": h[9] || (h[9] = (H) => v.value = H)
                  }, null, 8, ["data"])) : oe("", !0)
                ])
              ]),
              _: 1
            }))
          ]),
          _: 1
        }),
        ee(W, {
          modelValue: M.value,
          "onUpdate:modelValue": h[12] || (h[12] = (H) => M.value = H),
          "max-width": "500px"
        }, {
          default: X(() => [
            ee(O, null, {
              default: X(() => [
                ee(b, null, {
                  default: X(() => h[15] || (h[15] = [
                    ge("span", { class: "text-h5" }, "Add Component", -1)
                  ])),
                  _: 1,
                  __: [15]
                }),
                ee(I, null, {
                  default: X(() => [
                    ee(k, {
                      items: K(yn),
                      modelValue: e.value,
                      "onUpdate:modelValue": h[10] || (h[10] = (H) => e.value = H),
                      label: "Component Name"
                    }, null, 8, ["items", "modelValue"])
                  ]),
                  _: 1
                }),
                ee(T, null, {
                  default: X(() => [
                    ee($, {
                      color: "red",
                      onClick: h[11] || (h[11] = (H) => M.value = !1)
                    }, {
                      default: X(() => h[16] || (h[16] = [
                        ye("Cancel")
                      ])),
                      _: 1,
                      __: [16]
                    }),
                    ee($, {
                      onClick: w,
                      color: "primary"
                    }, {
                      default: X(() => h[17] || (h[17] = [
                        ye("Add")
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
        ee(Fn, {
          data: S.value,
          dialog: R.value,
          "onUpdate:dialog": h[13] || (h[13] = (H) => R.value = H),
          onDataSaved: a
        }, null, 8, ["data", "dialog"])
      ]);
    };
  }
}, lr = {
  install(E, N = {}) {
    E.component("ComponentEditor", sr), N.componentClipboard && E.provide("componentClipboard", N.componentClipboard);
  }
};
export {
  lr as default
};
