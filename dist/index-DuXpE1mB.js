import { mergeModels as ze, useModel as qe, createElementBlock as se, openBlock as Q, Fragment as Ae, renderList as Oe, createBlock as te, resolveDynamicComponent as Dt, mergeProps as Pe, withModifiers as nt, createSlots as pt, withCtx as X, createCommentVNode as oe, createTextVNode as ye, toDisplayString as Re, watch as Ve, defineComponent as Te, toRefs as Be, ref as ne, nextTick as Fe, onMounted as je, onBeforeUnmount as Ge, onActivated as on, onDeactivated as sn, h as He, resolveComponent as ae, createVNode as ee, unref as K, inject as we, computed as De, createElementVNode as ge, normalizeClass as Ie, provide as Le, renderSlot as be, Transition as Nt, normalizeProps as Wt, Teleport as Ft, reactive as wt, normalizeStyle as Ye, useSlots as Ht, guardReactiveProps as an, render as bt, markRaw as ln, capitalize as cn, shallowRef as un } from "vue";
function hn(R, N) {
  for (var S = 0; S < N.length; S++) {
    const M = N[S];
    if (typeof M != "string" && !Array.isArray(M)) {
      for (const H in M)
        if (H !== "default" && !(H in R)) {
          const C = Object.getOwnPropertyDescriptor(M, H);
          C && Object.defineProperty(R, H, C.get ? C : {
            enumerable: !0,
            get: () => M[H]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(R, Symbol.toStringTag, { value: "Module" }));
}
const et = (R, N) => {
  const S = R.__vccOpts || R;
  for (const [M, H] of N)
    S[M] = H;
  return S;
}, dn = ["innerHTML"], fn = ["innerHTML", "onContextmenu"], pn = {
  __name: "JsonComponents",
  props: /* @__PURE__ */ ze({
    draggable_pro: {
      type: Boolean,
      default: !0
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ ze(["updateSections", "openEdit"], ["update:modelValue"]),
  setup(R, { emit: N }) {
    const S = qe(R, "modelValue"), M = N;
    function H(a) {
      const u = {};
      return u[a] ? u[a] : a;
    }
    function C(a, u, i) {
      M("openEdit", { event: a, element: u, path: [i] });
    }
    function A(a, u, i, o) {
      let n = [];
      i !== null && n.push(i), u !== null && n.push(u), o === "children" ? (n.push("children"), a.path && (n = [...n, ...a.path])) : o === "slot" && (a.path ? (n.push("slots", u, "children"), n = [...n, ...a.path]) : n.push("slots", u)), M("openEdit", {
        event: a.event,
        element: a.element,
        path: n
      });
    }
    function w(a, u, i, o) {
      M("openEdit", { event: a, element: u.slots[o], path: [i, "slots", o] });
    }
    return (a, u) => (Q(!0), se(Ae, null, Oe(S.value, (i, o) => (Q(), te(Dt(H(i.component)), Pe({ ref_for: !0 }, i.props, {
      onContextmenu: nt((n) => C(n, i, o), ["stop"])
    }), pt({
      default: X(() => [
        i.children ? (Q(), te(dt, {
          key: 0,
          modelValue: i.children,
          "onUpdate:modelValue": (n) => i.children = n,
          draggable_pro: R.draggable_pro,
          onOpenEdit: (n) => A(n, null, o, "children")
        }, null, 8, ["modelValue", "onUpdate:modelValue", "draggable_pro", "onOpenEdit"])) : oe("", !0),
        i.htmlContent ? (Q(), se("div", {
          key: 1,
          innerHTML: i.htmlContent
        }, null, 8, dn)) : oe("", !0),
        i.textContent ? (Q(), se(Ae, { key: 2 }, [
          ye(Re(i.textContent), 1)
        ], 64)) : oe("", !0)
      ]),
      _: 2
    }, [
      Oe(i.slots, (n, t) => ({
        name: n.name,
        fn: X(() => [
          n.children ? (Q(), te(dt, {
            key: 0,
            modelValue: n.children,
            "onUpdate:modelValue": (e) => n.children = e,
            draggable_pro: R.draggable_pro,
            onOpenEdit: (e) => A(e, t, o, "slot")
          }, null, 8, ["modelValue", "onUpdate:modelValue", "draggable_pro", "onOpenEdit"])) : oe("", !0),
          n.htmlContent ? (Q(), se("div", {
            key: 1,
            innerHTML: n.htmlContent,
            onContextmenu: nt((e) => w(e, i, o, t), ["stop"])
          }, null, 40, fn)) : oe("", !0),
          n.textContent ? (Q(), se(Ae, { key: 2 }, [
            ye(Re(n.textContent), 1)
          ], 64)) : oe("", !0)
        ])
      }))
    ]), 1040, ["onContextmenu"]))), 256));
  }
}, dt = /* @__PURE__ */ et(pn, [["__scopeId", "data-v-e879fa16"]]), gn = {
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
}, vn = [
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
var mn = [
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
], yn = function(R) {
  return mn.map(function(N) {
    return N.toLowerCase();
  }).indexOf(R.toLowerCase()) !== -1;
}, wn = function(R, N, S) {
  Object.keys(N).filter(yn).forEach(function(M) {
    var H = N[M];
    typeof H == "function" && (M === "onInit" ? H(R, S) : S.on(M.substring(2), function(C) {
      return H(C, S);
    }));
  });
}, bn = function(R, N, S, M) {
  var H = R.modelEvents ? R.modelEvents : null, C = Array.isArray(H) ? H.join(" ") : H;
  Ve(M, function(A, w) {
    S && typeof A == "string" && A !== w && A !== S.getContent({ format: R.outputFormat }) && S.setContent(A);
  }), S.on(C || "change input undo redo", function() {
    N.emit("update:modelValue", S.getContent({ format: R.outputFormat }));
  });
}, Cn = function(R, N, S, M, H, C) {
  M.setContent(C()), S.attrs["onUpdate:modelValue"] && bn(N, S, M, H), wn(R, S.attrs, M);
}, Ct = 0, Bt = function(R) {
  var N = Date.now(), S = Math.floor(Math.random() * 1e9);
  return Ct++, R + "_" + S + Ct + String(N);
}, $n = function(R) {
  return R !== null && R.tagName.toLowerCase() === "textarea";
}, $t = function(R) {
  return typeof R > "u" || R === "" ? [] : Array.isArray(R) ? R : R.split(" ");
}, Sn = function(R, N) {
  return $t(R).concat($t(N));
}, Mn = function(R) {
  return R == null;
}, St = function() {
  return {
    listeners: [],
    scriptId: Bt("tiny-script"),
    scriptLoaded: !1
  };
}, An = function() {
  var R = St(), N = function(H, C, A, w) {
    var a = C.createElement("script");
    a.referrerPolicy = "origin", a.type = "application/javascript", a.id = H, a.src = A;
    var u = function() {
      a.removeEventListener("load", u), w();
    };
    a.addEventListener("load", u), C.head && C.head.appendChild(a);
  }, S = function(H, C, A) {
    R.scriptLoaded ? A() : (R.listeners.push(A), H.getElementById(R.scriptId) || N(R.scriptId, H, C, function() {
      R.listeners.forEach(function(w) {
        return w();
      }), R.scriptLoaded = !0;
    }));
  }, M = function() {
    R = St();
  };
  return {
    load: S,
    reinitialize: M
  };
}, xn = An(), kn = function() {
  return typeof window < "u" ? window : global;
}, We = function() {
  var R = kn();
  return R && R.tinymce ? R.tinymce : null;
}, Ln = {
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
    validator: function(R) {
      return R === "html" || R === "text";
    }
  }
}, Ee = function() {
  return Ee = Object.assign || function(R) {
    for (var N, S = 1, M = arguments.length; S < M; S++) {
      N = arguments[S];
      for (var H in N) Object.prototype.hasOwnProperty.call(N, H) && (R[H] = N[H]);
    }
    return R;
  }, Ee.apply(this, arguments);
}, En = function(R, N, S, M) {
  return R(M || "div", {
    id: N,
    ref: S
  });
}, Tn = function(R, N, S) {
  return R("textarea", {
    id: N,
    visibility: "hidden",
    ref: S
  });
}, ct = { selector: void 0, target: void 0 }, _n = Te({
  props: Ln,
  setup: function(R, N) {
    var S = R.init ? Ee(Ee({}, R.init), ct) : Ee({}, ct), M = Be(R), H = M.disabled, C = M.modelValue, A = M.tagName, w = ne(null), a = null, u = R.id || Bt("tiny-vue"), i = R.init && R.init.inline || R.inline, o = !!N.attrs["onUpdate:modelValue"], n = !0, t = R.initialValue ? R.initialValue : "", e = "", r = function(c) {
      return o ? function() {
        return C != null && C.value ? C.value : "";
      } : function() {
        return c ? t : e;
      };
    }, s = function() {
      var c = r(n), v = Ee(Ee({}, S), { readonly: R.disabled, target: w.value, plugins: Sn(S.plugins, R.plugins), toolbar: R.toolbar || S.toolbar, inline: i, license_key: R.licenseKey, setup: function(g) {
        a = g, g.on("init", function(p) {
          return Cn(p, R, N, g, C, c);
        }), typeof S.setup == "function" && S.setup(g);
      } });
      $n(w.value) && (w.value.style.visibility = ""), We().init(v), n = !1;
    };
    Ve(H, function(c) {
      var v;
      a !== null && (typeof ((v = a.mode) === null || v === void 0 ? void 0 : v.set) == "function" ? a.mode.set(c ? "readonly" : "design") : a.setMode(c ? "readonly" : "design"));
    }), Ve(A, function(c) {
      var v;
      o || (e = a.getContent()), (v = We()) === null || v === void 0 || v.remove(a), Fe(function() {
        return s();
      });
    }), je(function() {
      if (We() !== null)
        s();
      else if (w.value && w.value.ownerDocument) {
        var c = R.cloudChannel ? R.cloudChannel : "7", v = R.apiKey ? R.apiKey : "no-api-key", g = Mn(R.tinymceScriptSrc) ? "https://cdn.tiny.cloud/1/".concat(v, "/tinymce/").concat(c, "/tinymce.min.js") : R.tinymceScriptSrc;
        xn.load(w.value.ownerDocument, g, s);
      }
    }), Ge(function() {
      We() !== null && We().remove(a);
    }), i || (on(function() {
      n || s();
    }), sn(function() {
      var c;
      o || (e = a.getContent()), (c = We()) === null || c === void 0 || c.remove(a);
    }));
    var l = function(c) {
      var v;
      e = a.getContent(), (v = We()) === null || v === void 0 || v.remove(a), S = Ee(Ee(Ee({}, S), c), ct), Fe(function() {
        return s();
      });
    };
    return N.expose({
      rerender: l,
      getEditor: function() {
        return a;
      }
    }), function() {
      return i ? En(He, u, w, R.tagName) : Tn(He, u, w);
    };
  }
});
const Rn = "74ca372jx03ojgry4czoi2g59d4pruuozmudnvfqwzs742yz", In = {
  __name: "GeneralComponentEditing",
  props: /* @__PURE__ */ ze({
    is_component: {
      type: Boolean,
      default: !0
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(R) {
    const N = qe(R, "modelValue"), S = {
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
    function M() {
      const H = prompt("Enter new prop name:");
      N.value.props === void 0 && (N.value.props = {}), H && (N.value.props[H] = "");
    }
    return (H, C) => {
      const A = ae("v-text-field"), w = ae("v-btn"), a = ae("v-select"), u = ae("v-icon"), i = ae("v-textarea"), o = ae("v-btn-group");
      return Q(), se(Ae, null, [
        R.is_component ? (Q(), te(A, {
          key: 0,
          modelValue: N.value.component,
          "onUpdate:modelValue": C[0] || (C[0] = (n) => N.value.component = n),
          label: "Component",
          type: "text"
        }, null, 8, ["modelValue"])) : (Q(), te(A, {
          key: 1,
          modelValue: N.value.name,
          "onUpdate:modelValue": C[1] || (C[1] = (n) => N.value.name = n),
          label: "Name",
          type: "text"
        }, null, 8, ["modelValue"])),
        (Q(!0), se(Ae, null, Oe(N.value.props, (n, t) => {
          var e;
          return Q(), se(Ae, { key: t }, [
            typeof S[t] == "string" && S[t] !== "htmlContent" ? (Q(), te(Dt("v-" + S[t]), {
              key: 0,
              modelValue: N.value.props[t],
              "onUpdate:modelValue": (r) => N.value.props[t] = r,
              label: t
            }, {
              append: X(() => [
                ee(w, {
                  variant: "text",
                  color: "red",
                  onClick: () => {
                    delete N.value.props[t];
                  },
                  icon: "fa-solid fa-xmark"
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "label"])) : ((e = S[t]) == null ? void 0 : e.type) === "select" ? (Q(), te(a, {
              key: 1,
              modelValue: N.value.props[t],
              "onUpdate:modelValue": (r) => N.value.props[t] = r,
              label: t,
              items: S[t].enum
            }, {
              append: X(() => [
                ee(w, {
                  variant: "text",
                  color: "red",
                  onClick: () => {
                    delete N.value.props[t];
                  },
                  icon: "fa-solid fa-xmark"
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "label", "items"])) : (Q(), te(A, {
              key: 2,
              modelValue: N.value.props[t],
              "onUpdate:modelValue": (r) => N.value.props[t] = r,
              label: t,
              type: "text"
            }, {
              append: X(() => [
                ee(w, {
                  variant: "text",
                  color: "red",
                  onClick: () => {
                    delete N.value.props[t];
                  },
                  icon: "fa-solid fa-xmark"
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "label"]))
          ], 64);
        }), 128)),
        N.value.hasOwnProperty("htmlContent") ? (Q(), te(K(_n), {
          key: 2,
          modelValue: N.value.htmlContent,
          "onUpdate:modelValue": C[2] || (C[2] = (n) => N.value.htmlContent = n),
          init: K(gn),
          "api-key": Rn
        }, null, 8, ["modelValue", "init"])) : oe("", !0),
        N.value.hasOwnProperty("textContent") ? (Q(), te(i, {
          key: 3,
          modelValue: N.value.textContent,
          "onUpdate:modelValue": C[3] || (C[3] = (n) => N.value.textContent = n),
          label: "Text Content",
          type: "text"
        }, {
          prepend: X(() => [
            ee(u, null, {
              default: X(() => C[8] || (C[8] = [
                ye("fa-solid fa-text-width")
              ])),
              _: 1,
              __: [8]
            })
          ]),
          _: 1
        }, 8, ["modelValue"])) : oe("", !0),
        ee(o, { variant: "text" }, {
          default: X(() => [
            N.value.hasOwnProperty("htmlContent") ? (Q(), te(w, {
              key: 0,
              color: "red",
              onClick: C[4] || (C[4] = () => {
                delete N.value.htmlContent;
              })
            }, {
              default: X(() => C[9] || (C[9] = [
                ye("Delete htmlContent")
              ])),
              _: 1,
              __: [9]
            })) : (Q(), te(w, {
              key: 1,
              color: "green",
              onClick: C[5] || (C[5] = () => {
                N.value.htmlContent = "";
              })
            }, {
              default: X(() => C[10] || (C[10] = [
                ye("Add htmlContent")
              ])),
              _: 1,
              __: [10]
            })),
            N.value.hasOwnProperty("textContent") ? (Q(), te(w, {
              key: 2,
              color: "red",
              onClick: C[6] || (C[6] = () => {
                delete N.value.textContent;
              })
            }, {
              default: X(() => C[11] || (C[11] = [
                ye("Delete textContent")
              ])),
              _: 1,
              __: [11]
            })) : (Q(), te(w, {
              key: 3,
              color: "green",
              onClick: C[7] || (C[7] = () => {
                N.value.textContent = "";
              })
            }, {
              default: X(() => C[12] || (C[12] = [
                ye("Add textContent")
              ])),
              _: 1,
              __: [12]
            })),
            ee(w, {
              color: "green",
              onClick: M
            }, {
              default: X(() => C[13] || (C[13] = [
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
}, On = /* @__PURE__ */ et(In, [["__scopeId", "data-v-aa3cbf01"]]), Dn = {
  __name: "ComponentElementEdit",
  props: /* @__PURE__ */ ze({
    data: {
      type: Object,
      required: !0
    }
  }, {
    dialog: {},
    dialogModifiers: {}
  }),
  emits: /* @__PURE__ */ ze(["dataSaved"], ["update:dialog"]),
  setup(R, { emit: N }) {
    const S = R, M = ne(S.data), H = qe(R, "dialog"), C = ne("");
    Ve(H, (w) => {
      var a;
      w && S.data.hasOwnProperty("component") ? (C.value = (a = S.data) == null ? void 0 : a.component, M.value = JSON.parse(JSON.stringify(S.data))) : w && S.data.hasOwnProperty("name") && (C.value = "slot", M.value = JSON.parse(JSON.stringify(S.data)));
    });
    const A = () => {
      H.value = !1, C.value = "", M.value = {};
    };
    return (w, a) => {
      const u = ae("v-card-text"), i = ae("v-spacer"), o = ae("v-btn"), n = ae("v-card-actions"), t = ae("v-icon"), e = ae("v-card"), r = ae("v-dialog");
      return Q(), te(r, {
        modelValue: H.value,
        "onUpdate:modelValue": a[2] || (a[2] = (s) => H.value = s),
        "max-width": "800px",
        "retain-focus": !1
      }, {
        default: X(() => [
          ee(e, {
            title: "Editing: " + C.value
          }, {
            append: X(() => [
              ee(o, {
                class: "close-btn",
                variant: "text",
                onClick: A
              }, {
                default: X(() => [
                  ee(t, null, {
                    default: X(() => a[5] || (a[5] = [
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
              C.value != "" ? (Q(), te(u, { key: 0 }, {
                default: X(() => [
                  ee(On, {
                    modelValue: M.value,
                    "onUpdate:modelValue": a[0] || (a[0] = (s) => M.value = s),
                    is_component: C.value != "slot"
                  }, null, 8, ["modelValue", "is_component"])
                ]),
                _: 1
              })) : oe("", !0),
              ee(n, null, {
                default: X(() => [
                  ee(i),
                  ee(o, {
                    color: "red",
                    onClick: A
                  }, {
                    default: X(() => a[3] || (a[3] = [
                      ye("Cancel")
                    ])),
                    _: 1,
                    __: [3]
                  }),
                  ee(o, {
                    color: "green",
                    onClick: a[1] || (a[1] = (s) => w.$emit("dataSaved", M.value))
                  }, {
                    default: X(() => a[4] || (a[4] = [
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
}, Nn = /* @__PURE__ */ et(Dn, [["__scopeId", "data-v-18173f8b"]]), zt = [
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
function Pt(R) {
  const N = we("componentClipboard");
  return {
    removeElement: (C) => {
      const A = [...R.value], w = C.slice(0, -1).reduce((a, u) => a[u], A);
      if (w) {
        const a = C[C.length - 1];
        w.splice(a, 1);
      }
      R.value = A;
    },
    pasteElement: (C, A) => {
      if (!N.hasContent()) return;
      const w = [...R.value], a = JSON.parse(JSON.stringify(N.element));
      switch (A) {
        case "prepend":
          w.splice(C[C.length - 1], 0, a);
          break;
        case "append":
          w.splice(C[C.length - 1] + 1, 0, a);
          break;
        case "child":
          const u = C.reduce((i, o) => i[o], w);
          u.children || (u.children = []), u.children.push(a);
          break;
      }
      R.value = w, N.isCut && N.clear();
    },
    insertElement: (C, A) => {
      const w = [...R.value], a = C.reduce((u, i) => u[i], w);
      a.children || (a.children = []), a.children.push(A), R.value = w;
    }
  };
}
function Vt(R, N) {
  return {
    label: "Insert",
    children: zt.map((S) => ({
      label: S.title,
      onClick: () => R(N, { ...S })
    }))
  };
}
const Wn = { class: "tree-node" }, Fn = {
  key: 1,
  class: "node-content"
}, Hn = {
  key: 0,
  class: "children"
}, Bn = { key: 0 }, zn = {
  key: 1,
  class: "slots"
}, Pn = ["onContextmenu"], Vn = {
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
  setup(R, { expose: N, emit: S }) {
    const M = R, H = S, C = ne(!0);
    function A() {
      C.value = !C.value;
    }
    N({
      isExpanded: C,
      treeNodes: ne([])
    });
    function w(s, l) {
      s.preventDefault(), H("openEdit", { event: s, element: l, path: [] });
    }
    function a(s, l) {
      const c = ["children", l, ...s.path];
      H("openEdit", {
        event: s.event,
        element: s.element,
        path: c
      });
    }
    function u(s, l, c) {
      s.preventDefault(), H("openEdit", { event: s, element: l, path: ["slots", c] });
    }
    const i = De(() => Object.prototype.toString.call(M.node) === "[object Object]"), o = De(() => i.value && M.node.component ? M.node.component : M.label), n = De(() => {
      if (i.value) {
        if (M.node.textContent) return M.node.textContent;
        if (M.node.htmlContent) return "[HTML content]";
      }
      return "";
    }), t = De(
      () => i.value && Array.isArray(M.node.children) && M.node.children.length > 0
    ), e = De(
      () => i.value && Array.isArray(M.node.slots) && M.node.slots.length > 0
    ), r = De(() => t.value || e.value);
    return (s, l) => (Q(), se("div", Wn, [
      ge("div", {
        class: "node-label",
        onContextmenu: l[0] || (l[0] = nt((c) => w(c, M.node), ["stop"]))
      }, [
        r.value ? (Q(), se("span", {
          key: 0,
          class: "expand-icon",
          onClick: A
        }, [
          ge("i", {
            class: Ie(C.value ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-right")
          }, null, 2)
        ])) : oe("", !0),
        ye(" " + Re(o.value) + " ", 1),
        n.value ? (Q(), se("span", Fn, " - " + Re(n.value), 1)) : oe("", !0)
      ], 32),
      r.value && C.value ? (Q(), se("div", Hn, [
        t.value ? (Q(), se("div", Bn, [
          (Q(!0), se(Ae, null, Oe(M.node.children, (c, v) => (Q(), te(Ut, {
            key: "child-" + v,
            node: c,
            label: c.component || "[" + v + "]",
            onOpenEdit: (g) => a(g, v),
            ref_for: !0,
            ref: "treeNodes"
          }, null, 8, ["node", "label", "onOpenEdit"]))), 128))
        ])) : oe("", !0),
        e.value ? (Q(), se("div", zn, [
          (Q(!0), se(Ae, null, Oe(M.node.slots, (c, v) => (Q(), se("div", {
            key: "slot-" + v,
            class: "slot-label",
            onContextmenu: nt((g) => u(g, c, v), ["stop"])
          }, " Slot: " + Re(c.name), 41, Pn))), 128))
        ])) : oe("", !0)
      ])) : oe("", !0)
    ]));
  }
}, Ut = /* @__PURE__ */ et(Vn, [["__scopeId", "data-v-aaf0fd33"]]);
let Ne = null;
function Un() {
  return Ne !== null;
}
function jn(R) {
  Ne && jt(), Ne = R;
}
function Mt(R) {
  R === Ne && (Ne = null);
}
function jt() {
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
function Ze(R, N) {
  let S = R.offsetTop;
  return R.offsetParent != null && R.offsetParent != N && (S -= R.offsetParent.scrollTop, S += Ze(R.offsetParent, N)), S;
}
function Xe(R, N) {
  let S = R.offsetLeft;
  return R.offsetParent != null && R.offsetParent != N && (S -= R.offsetParent.scrollLeft, S += Xe(R.offsetParent, N)), S;
}
function Gn(R, N, S, M) {
  return {
    x: Xe(R, M) + N,
    y: Ze(R, M) + S
  };
}
const ut = "mx-menu-default-container", Kn = "mx-menu-container-";
let Yn = 0;
function Gt(R) {
  const { getContainer: N, zIndex: S } = R;
  if (N) {
    const H = typeof N == "function" ? N() : N;
    if (H) {
      let C = H.getAttribute("id");
      return C || (C = Kn + Yn++, H.setAttribute("id", C)), {
        eleId: C,
        container: H,
        isNew: !1
      };
    }
  }
  let M = document.getElementById(ut);
  return M || (M = document.createElement("div"), M.setAttribute("id", ut), M.setAttribute("class", "mx-menu-ghost-host fullscreen"), document.body.appendChild(M)), M.style.zIndex = (S == null ? void 0 : S.toString()) || Me.defaultZindex.toString(), {
    eleId: ut,
    container: M,
    isNew: !0
  };
}
function At(R) {
  return typeof R == "number" ? `${R}px` : R;
}
const ke = Te({
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
  setup(R) {
    const { vnode: N, data: S } = Be(R);
    return () => typeof N.value == "function" ? N.value(S.value) : N.value;
  }
});
function Qn(R, N) {
  const S = { ...R };
  return delete S[N], S;
}
var Zn = Object.defineProperty, Xn = (R, N, S) => N in R ? Zn(R, N, { enumerable: !0, configurable: !0, writable: !0, value: S }) : R[N] = S, xt = (R, N, S) => Xn(R, typeof N != "symbol" ? N + "" : N, S);
class kt {
  constructor(N, S) {
    xt(this, "x", 0), xt(this, "y", 0), this.x = N || 0, this.y = S || 0;
  }
  set(N, S) {
    this.x = N, this.y = S;
  }
  substract(N) {
    this.x -= N.x, this.y -= N.y;
  }
}
function Lt(R) {
  const { onDown: N, onMove: S, onUp: M } = R, H = new kt(), C = new kt();
  let A;
  function w(u) {
    u.stopPropagation(), C.set(u.x, u.y), C.substract(H), S(H, C, u, A);
  }
  function a(u) {
    M(u, A), H.set(0, 0), document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", a);
  }
  return (u, i) => N(u, i) ? (A = i, H.set(u.x, u.y), document.addEventListener("mousemove", w), document.addEventListener("mouseup", a), u.stopPropagation(), !0) : !1;
}
function Jn(R, N) {
  let S = 0;
  return {
    start() {
      S > 0 && clearInterval(S), S = setInterval(() => {
        S = 0, N();
      }, R);
    },
    stop() {
      S > 0 && (clearInterval(S), S = 0);
    }
  };
}
const Qe = [], Et = Jn(100, () => {
  for (const R of Qe)
    R();
});
function qn(R, N, S, M) {
  let H = 0, C = 0;
  function A() {
    R.value && (N && H !== R.value.offsetWidth && N(R.value.offsetWidth), S && C !== R.value.offsetHeight && S(R.value.offsetHeight), H = R.value.offsetWidth, C = R.value.offsetHeight);
  }
  return {
    startResizeChecker() {
      Et.start(), Qe.push(A);
    },
    stopResizeChecker() {
      const w = Qe.indexOf(A);
      w >= 0 && Qe.splice(w, 1), Qe.length === 0 && Et.stop();
    }
  };
}
const Tt = 140, ei = 70, ti = /* @__PURE__ */ Te({
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
  setup(R, { expose: N, emit: S }) {
    const M = R, H = S, C = ne(), A = ne(), w = ne(), a = ne(), u = ne(), i = ne(), o = ne(!1), n = De(() => M.scroll === "horizontal" || M.scroll === "both"), t = De(() => M.scroll === "vertical" || M.scroll === "both"), e = wt({
      show: !1,
      size: 0,
      sizeRaw: 0,
      pos: 0
    }), r = wt({
      show: !1,
      size: 0,
      sizeRaw: 0,
      pos: 0
    });
    let s = 0, l = 0, c = 0, v = 0, g = null;
    const p = { attributes: !0, childList: !0 };
    function h() {
      if (C.value) {
        if (e.show) {
          const W = C.value.offsetWidth / C.value.scrollWidth;
          e.sizeRaw = W * C.value.offsetWidth, e.size = W * 100, e.pos = C.value.scrollLeft / (C.value.scrollWidth - C.value.offsetWidth) * (100 - e.size), W >= 1 && (e.show = !1);
        }
        if (r.show) {
          const W = C.value.offsetHeight / C.value.scrollHeight;
          r.sizeRaw = W * C.value.offsetHeight, r.size = W * 100, r.pos = C.value.scrollTop / (C.value.scrollHeight - C.value.offsetHeight) * (100 - r.size), W >= 1 && (r.show = !1);
        }
        H("scroll", C.value.scrollLeft, C.value.scrollTop);
      }
    }
    function b(W = !1) {
      if (!C.value)
        return;
      let P = n.value, V = t.value;
      const j = P && (s !== C.value.scrollWidth || c !== C.value.offsetWidth), Y = t && (l !== C.value.scrollHeight || v !== C.value.offsetHeight);
      if (!W && !j && !Y)
        return;
      const G = window.getComputedStyle(C.value);
      (G.overflow === "hidden" || G.overflowX === "hidden") && (P = !1), (G.overflow === "hidden" || G.overflowY === "hidden") && (V = !1), e.show = P, r.show = V, h(), c = C.value.offsetWidth, v = C.value.offsetHeight, s = C.value.scrollWidth, l = C.value.scrollHeight, H("resized", s, l);
    }
    function E(W) {
      var P;
      M.scroll == "horizontal" && (W.deltaMode == 0 && ((P = C.value) == null || P.scrollTo({
        left: C.value.scrollLeft + (W.deltaY > 0 ? Tt : -140),
        behavior: "smooth"
      })), W.preventDefault(), W.stopPropagation());
    }
    function L(W) {
      var P;
      W.deltaMode == 0 && ((P = C.value) == null || P.scrollTo({
        left: C.value.scrollLeft + (W.deltaY > 0 ? Tt : -140),
        behavior: "smooth"
      }), W.preventDefault(), W.stopPropagation());
    }
    function x(W) {
      var P;
      W.deltaMode == 0 && ((P = C.value) == null || P.scrollTo({
        top: C.value.scrollTop + (W.deltaY > 0 ? ei : -70),
        behavior: "smooth"
      }), W.preventDefault(), W.stopPropagation());
    }
    let O = 0, $ = 0, y = 0, f = 0;
    const d = Lt({
      onDown(W) {
        return !w.value || !u.value ? !1 : (O = W.offsetX, $ = W.x - W.offsetX - u.value.offsetLeft, W.preventDefault(), o.value = !0, !0);
      },
      onMove(W, P, V) {
        C.value && w.value && (T(V.x - O - $), V.preventDefault(), V.stopPropagation());
      },
      onUp() {
        o.value = !1;
      }
    }), m = Lt({
      onDown(W) {
        return !a.value || !i.value ? !1 : (y = W.offsetY, f = W.y - W.offsetY - i.value.offsetTop, W.preventDefault(), o.value = !0, !0);
      },
      onMove(W, P, V) {
        C.value && a.value && (I(V.y - y - f), V.preventDefault(), V.stopPropagation());
      },
      onUp() {
        o.value = !1;
      }
    });
    function k(W) {
      C.value && (C.value.scrollLeft = W / 100 * (C.value.scrollWidth - C.value.offsetWidth));
    }
    function _(W) {
      C.value && (C.value.scrollLeft = W / 100 * (C.value.scrollHeight - C.value.offsetHeight));
    }
    function T(W) {
      C.value && (C.value.scrollLeft = W / (C.value.offsetWidth - e.sizeRaw) * (C.value.scrollWidth - C.value.offsetWidth));
    }
    function I(W) {
      C.value && (C.value.scrollTop = W / (C.value.offsetHeight - r.sizeRaw) * (C.value.scrollHeight - C.value.offsetHeight));
    }
    function D(W) {
      M.scrollBarBackgroundClickable && T(W.offsetX - e.sizeRaw / 2);
    }
    function F(W) {
      M.scrollBarBackgroundClickable && I(W.offsetY - r.sizeRaw / 2);
    }
    const {
      startResizeChecker: B,
      stopResizeChecker: z
    } = qn(
      C,
      () => b(),
      () => b()
    );
    return je(() => {
      Fe(() => {
        setTimeout(() => b(!0), 200), b(!0), B(), g = new MutationObserver(() => b()), g.observe(C.value, p);
      });
    }), Ge(() => {
      z(), g && (g.disconnect(), g = null);
    }), N({
      refreshScrollState() {
        b(!0);
      },
      getScrollContainer() {
        return C.value;
      },
      scrollTo(W, P) {
        var V;
        (V = C.value) == null || V.scrollTo(W, P);
      },
      scrollToTop() {
        var W;
        (W = C.value) == null || W.scrollTo(0, 0);
      },
      scrollToBottom() {
        var W;
        (W = C.value) == null || W.scrollTo(C.value.scrollWidth, C.value.scrollHeight);
      }
    }), (W, P) => (Q(), se("div", {
      ref_key: "scrollrect",
      ref: A,
      class: Ie([
        "vue-scroll-rect",
        R.scrollBarAlwaysShow ? "always-show-scrollbar" : "",
        R.scrollBarBackgroundClickable ? "background-clickable" : "",
        o.value ? "dragging" : ""
      ]),
      style: Ye({
        width: R.width ? `${R.width}px` : void 0,
        height: R.height ? `${R.height}px` : void 0
      }),
      onWheel: E
    }, [
      ge("div", {
        ref_key: "container",
        ref: C,
        class: Ie(["scroll-content", R.scroll, R.containerClass]),
        style: Ye({
          maxWidth: R.maxWidth ? `${R.maxWidth}px` : void 0,
          maxHeight: R.maxHeight ? `${R.maxHeight}px` : void 0,
          ...R.containerStyle
        }),
        onScroll: h
      }, [
        be(W.$slots, "default")
      ], 38),
      e.show ? be(W.$slots, "scrollBarX", {
        key: 0,
        scrollBarValue: e,
        onScroll: k
      }, () => [
        ge("div", {
          ref_key: "scrollBarRefX",
          ref: w,
          class: "scrollbar horizontal",
          onClick: D,
          onWheel: L
        }, [
          ge("div", {
            class: "thumb",
            ref_key: "scrollBarThumbRefX",
            ref: u,
            style: Ye({ left: `${e.pos}%`, width: `${e.size}%` }),
            onMousedown: P[0] || (P[0] = //@ts-ignore
            (...V) => K(d) && K(d)(...V)),
            onWheel: L
          }, null, 36)
        ], 544)
      ]) : oe("", !0),
      r.show ? be(W.$slots, "scrollBarY", {
        key: 1,
        scrollBarValue: r,
        onScroll: _
      }, () => [
        r.show ? (Q(), se("div", {
          key: 0,
          ref_key: "scrollBarRefY",
          ref: a,
          class: "scrollbar vertical",
          onClick: F,
          onWheel: x
        }, [
          ge("div", {
            class: "thumb",
            ref_key: "scrollBarThumbRefY",
            ref: i,
            style: Ye({ top: `${r.pos}%`, height: `${r.size}%` }),
            onMousedown: P[1] || (P[1] = //@ts-ignore
            (...V) => K(m) && K(m)(...V)),
            onWheel: x
          }, null, 36)
        ], 544)) : oe("", !0)
      ]) : oe("", !0)
    ], 38));
  }
}), gt = (R, N) => {
  const S = R.__vccOpts || R;
  for (const [M, H] of N)
    S[M] = H;
  return S;
}, ni = {}, ii = {
  class: "mx-checked-mark",
  "aria-hidden": "true",
  viewBox: "0 0 1024 1024"
}, ri = /* @__PURE__ */ ge("path", { d: "M129.3,428.6L52,512l345,372.5l575-620.8l-69.5-75L400.4,718.2L129.3,428.6z" }, null, -1), oi = [
  ri
];
function si(R, N) {
  return Q(), se("svg", ii, oi);
}
const ai = /* @__PURE__ */ gt(ni, [["render", si]]), li = {}, ci = {
  class: "mx-right-arrow",
  "aria-hidden": "true",
  viewBox: "0 0 1024 1024"
}, ui = /* @__PURE__ */ ge("path", { d: "M307.018 49.445c11.517 0 23.032 4.394 31.819 13.18L756.404 480.18c8.439 8.438 13.181 19.885 13.181 31.82s-4.741 23.38-13.181 31.82L338.838 961.376c-17.574 17.573-46.065 17.573-63.64-0.001-17.573-17.573-17.573-46.065 0.001-63.64L660.944 512 275.198 126.265c-17.574-17.573-17.574-46.066-0.001-63.64C283.985 53.839 295.501 49.445 307.018 49.445z" }, null, -1), hi = [
  ui
];
function di(R, N) {
  return Q(), se("svg", ci, hi);
}
const fi = /* @__PURE__ */ gt(li, [["render", di]]), pi = { class: "mx-item-row" }, gi = ["xlink:href"], vi = {
  key: 1,
  class: "label"
}, mi = { class: "mx-item-row" }, yi = { class: "mx-shortcut" }, vt = /* @__PURE__ */ Te({
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
  setup(R, { expose: N, emit: S }) {
    const M = R, H = S, {
      clickHandler: C,
      clickClose: A,
      clickableWhenHasChildren: w,
      disabled: a,
      hidden: u,
      label: i,
      icon: o,
      iconFontClass: n,
      showRightArrow: t,
      shortcut: e,
      hasChildren: r
    } = Be(M), s = ne(!1), l = ne(!1), c = ne(), v = we("globalOptions"), g = we("globalHasSlot"), p = we("globalRenderSlot"), h = we("globalCloseMenu"), b = we("menuContext"), E = {
      getSubMenuInstance: () => {
      },
      showSubMenu: () => s.value ? (b.markActiveMenuItem(E, !0), !0) : r.value ? (x(), !0) : !1,
      hideSubMenu: () => {
        b.closeOtherSubMenu();
      },
      isDisabledOrHidden: () => a.value || u.value,
      getElement: () => c.value,
      focus: () => l.value = !0,
      blur: () => l.value = !1,
      click: L
    };
    Le("menuItemInstance", E), je(() => {
      b.isMenuItemDataCollectedFlag() ? Fe(() => {
        let y = 0;
        const f = b.getElement();
        if (f) {
          let d = 0;
          for (let m = 0; m < f.children.length; m++) {
            const k = f.children[m];
            if (k.getAttribute("data-type") === "ContextMenuItem") {
              if (k === c.value) {
                y = d;
                break;
              }
              d++;
            }
          }
        }
        b.addChildMenuItem(E, y);
      }) : b.addChildMenuItem(E);
    }), Ge(() => {
      b.removeChildMenuItem(E);
    });
    function L(y) {
      if (!a.value) {
        if (y) {
          const f = y.target;
          if (f.classList.contains("mx-context-no-clickable") || v.value.ignoreClickClassName && f.classList.contains(v.value.ignoreClickClassName))
            return;
          if (v.value.clickCloseClassName && f.classList.contains(v.value.clickCloseClassName)) {
            y.stopPropagation(), h(M.rawMenuItem);
            return;
          }
        }
        r.value ? w.value ? (typeof C.value == "function" && C.value(y), H("click", y)) : s.value || x() : (typeof C.value == "function" && C.value(y), H("click", y), A.value && h(M.rawMenuItem));
      }
    }
    function x(y) {
      l.value = !1, b.checkCloseOtherSubMenuTimeOut() || b.closeOtherSubMenu(), a.value || (b.markActiveMenuItem(E), r.value && (y || b.markThisOpenedByKeyBoard(), b.addOpenedSubMenu(O), s.value = !0, Fe(() => H("subMenuOpen", E))));
    }
    function O() {
      l.value = !1, s.value = !1, H("subMenuClose", E);
    }
    function $() {
      return {
        disabled: a.value,
        label: i.value,
        icon: o.value,
        iconFontClass: n.value,
        showRightArrow: t.value,
        clickClose: A.value,
        clickableWhenHasChildren: w.value,
        shortcut: e.value,
        theme: v.value.theme,
        isOpen: s,
        hasChildren: r,
        onClick: L,
        onMouseEnter: x,
        closeMenu: h
      };
    }
    return N(E), (y, f) => K(u) ? oe("", !0) : (Q(), se("div", {
      key: 0,
      class: "mx-context-menu-item-wrapper",
      ref_key: "menuItemRef",
      ref: c,
      "data-type": "ContextMenuItem"
    }, [
      K(g)("itemRender") ? (Q(), te(K(ke), {
        key: 0,
        vnode: () => K(p)("itemRender", $())
      }, null, 8, ["vnode"])) : R.customRender ? (Q(), te(K(ke), {
        key: 1,
        vnode: R.customRender,
        data: $()
      }, null, 8, ["vnode", "data"])) : (Q(), se("div", {
        key: 2,
        class: Ie([
          "mx-context-menu-item",
          K(a) ? "disabled" : "",
          l.value ? "keyboard-focus" : "",
          R.customClass ? " " + R.customClass : "",
          s.value ? "open" : ""
        ]),
        onClick: L,
        onMouseenter: x
      }, [
        be(y.$slots, "default", {}, () => [
          ge("div", pi, [
            ge("div", {
              class: Ie([
                "mx-icon-placeholder",
                R.preserveIconWidth ? "preserve-width" : ""
              ])
            }, [
              be(y.$slots, "icon", {}, () => [
                K(g)("itemIconRender") ? (Q(), te(K(ke), {
                  key: 0,
                  vnode: () => K(p)("itemIconRender", $())
                }, null, 8, ["vnode"])) : typeof R.svgIcon == "string" && R.svgIcon ? (Q(), se("svg", Pe({
                  key: 1,
                  class: "icon svg"
                }, R.svgProps), [
                  ge("use", { "xlink:href": R.svgIcon }, null, 8, gi)
                ], 16)) : typeof K(o) != "string" ? (Q(), te(K(ke), {
                  key: 2,
                  vnode: K(o),
                  data: K(o)
                }, null, 8, ["vnode", "data"])) : typeof K(o) == "string" && K(o) !== "" ? (Q(), se("i", {
                  key: 3,
                  class: Ie(K(o) + " icon " + K(n) + " " + K(v).iconFontClass)
                }, null, 2)) : oe("", !0)
              ]),
              R.checked ? be(y.$slots, "check", { key: 0 }, () => [
                K(g)("itemCheckRender") ? (Q(), te(K(ke), {
                  key: 0,
                  vnode: () => K(p)("itemCheckRender", $())
                }, null, 8, ["vnode"])) : oe("", !0),
                ee(ai)
              ]) : oe("", !0)
            ], 2),
            be(y.$slots, "label", {}, () => [
              K(g)("itemLabelRender") ? (Q(), te(K(ke), {
                key: 0,
                vnode: () => K(p)("itemLabelRender", $())
              }, null, 8, ["vnode"])) : typeof K(i) == "string" ? (Q(), se("span", vi, Re(K(i)), 1)) : (Q(), te(K(ke), {
                key: 2,
                vnode: K(i),
                data: K(i)
              }, null, 8, ["vnode", "data"]))
            ])
          ]),
          ge("div", mi, [
            K(e) || y.$slots.shortcut ? be(y.$slots, "shortcut", { key: 0 }, () => [
              K(g)("itemShortcutRender") ? (Q(), te(K(ke), {
                key: 0,
                vnode: () => K(p)("itemShortcutRender", $())
              }, null, 8, ["vnode"])) : oe("", !0),
              ge("span", yi, Re(K(e)), 1)
            ]) : oe("", !0),
            K(t) ? be(y.$slots, "rightArrow", { key: 1 }, () => [
              K(g)("itemRightArrowRender") ? (Q(), te(K(ke), {
                key: 0,
                vnode: () => K(p)("itemRightArrowRender", $())
              }, null, 8, ["vnode"])) : oe("", !0),
              ee(fi)
            ]) : oe("", !0)
          ])
        ])
      ], 34)),
      K(v).menuTransitionProps ? (Q(), te(Nt, Wt(Pe({ key: 3 }, K(v).menuTransitionProps)), {
        default: X(() => [
          s.value ? be(y.$slots, "submenu", {
            key: 0,
            context: E
          }) : oe("", !0)
        ]),
        _: 3
      }, 16)) : s.value ? be(y.$slots, "submenu", {
        key: 4,
        context: E
      }) : oe("", !0)
    ], 512));
  }
}), wi = Te({
  name: "ContextMenuSperator",
  components: {
    VNodeRender: ke
  },
  setup() {
    const R = we("globalHasSlot"), N = we("globalRenderSlot");
    return {
      globalHasSlot: R,
      globalRenderSlot: N
    };
  }
}), bi = {
  key: 1,
  class: "mx-context-menu-item-sperator mx-context-no-clickable"
};
function Ci(R, N, S, M, H, C) {
  const A = ae("VNodeRender");
  return R.globalHasSlot("separatorRender") ? (Q(), te(A, {
    key: 0,
    vnode: () => R.globalRenderSlot("separatorRender", {})
  }, null, 8, ["vnode"])) : (Q(), se("div", bi));
}
const Je = /* @__PURE__ */ gt(wi, [["render", Ci]]), it = /* @__PURE__ */ Te({
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
  setup(R, { expose: N }) {
    const S = R, M = ne(!1), H = we("globalGetMenuHostId", ""), C = we("menuContext"), A = we("globalOptions");
    we("globalHasSlot"), we("globalRenderSlot");
    const { zIndex: w, getParentWidth: a, getParentHeight: u, getZoom: i } = C, { adjustPosition: o } = Be(S), n = ne(), t = ne(), e = ne(), r = [], s = we("globalSetCurrentSubMenu"), l = [];
    let c = null, v = 0;
    function g() {
      c && c.blur();
    }
    function p(T, I) {
      if (T) {
        for (let D = I !== void 0 ? I : 0; D < l.length; D++)
          if (!l[D].isDisabledOrHidden()) {
            h(D);
            break;
          }
      } else
        for (let D = I !== void 0 ? I : l.length - 1; D >= 0; D--)
          if (!l[D].isDisabledOrHidden()) {
            h(D);
            break;
          }
    }
    function h(T) {
      var I;
      if (c && g(), T !== void 0 && (c = l[Math.max(0, Math.min(T, l.length - 1))]), !c)
        return;
      c.focus();
      const D = c.getElement();
      D && ((I = n.value) == null || I.scrollTo(0, Math.min(Math.max(-f.value, -D.offsetTop - D.offsetHeight + d.value), 0)));
    }
    function b() {
      s(E);
    }
    const E = {
      isTopLevel: () => C.getParentContext() === null,
      closeSelfAndActiveParent: () => {
        const T = O.getParentContext();
        if (T) {
          T.closeOtherSubMenu();
          const I = T.getSubMenuInstanceContext();
          if (I)
            return I.focusCurrentItem(), !0;
        }
        return !1;
      },
      closeCurrentSubMenu: () => {
        var T;
        return (T = O.getParentContext()) == null ? void 0 : T.closeOtherSubMenu();
      },
      moveCurrentItemFirst: () => p(!0),
      moveCurrentItemLast: () => p(!1),
      moveCurrentItemDown: () => p(!0, c ? l.indexOf(c) + 1 : 0),
      moveCurrentItemUp: () => p(!1, c ? l.indexOf(c) - 1 : 0),
      focusCurrentItem: () => h(),
      openCurrentItemSubMenu: () => c ? c == null ? void 0 : c.showSubMenu() : !1,
      triggerCurrentItemClick: (T) => c == null ? void 0 : c.click(T)
    };
    let L = !1, x = !1;
    const O = {
      zIndex: w + 1,
      container: C.container,
      adjustPadding: A.value.adjustPadding || Me.defaultAdjustPadding,
      getParentWidth: () => {
        var T;
        return ((T = e.value) == null ? void 0 : T.offsetWidth) || 0;
      },
      getParentHeight: () => {
        var T;
        return ((T = e.value) == null ? void 0 : T.offsetHeight) || 0;
      },
      getPositon: () => [k.value.x, k.value.y],
      getZoom: () => A.value.zoom || Me.defaultZoom,
      addOpenedSubMenu(T) {
        r.push(T);
      },
      closeOtherSubMenu() {
        r.forEach((T) => T()), r.splice(0, r.length), s(E);
      },
      checkCloseOtherSubMenuTimeOut() {
        return v ? (clearTimeout(v), v = 0, !0) : !1;
      },
      closeOtherSubMenuWithTimeOut() {
        v = setTimeout(() => {
          v = 0, this.closeOtherSubMenu();
        }, 200);
      },
      addChildMenuItem: (T, I) => {
        I === void 0 ? l.push(T) : l.splice(I, 0, T);
      },
      removeChildMenuItem: (T) => {
        l.splice(l.indexOf(T), 1), T.getSubMenuInstance = () => {
        };
      },
      markActiveMenuItem: (T, I = !1) => {
        g(), c = T, I && h();
      },
      markThisOpenedByKeyBoard: () => {
        L = !0;
      },
      isOpenedByKeyBoardFlag: () => L ? (L = !1, !0) : !1,
      isMenuItemDataCollectedFlag: () => x,
      getElement: () => e.value || null,
      getParentContext: () => C,
      getSubMenuInstanceContext: () => E
    };
    Le("menuContext", O);
    const $ = {
      getChildItem: (T) => l[T],
      getMenuDimensions: () => t.value ? {
        width: t.value.offsetWidth,
        height: t.value.offsetHeight
      } : { width: 0, height: 0 },
      getSubmenuRoot: () => t.value,
      getMenu: () => e.value,
      getScrollValue: () => {
        var T, I;
        return ((I = (T = n.value) == null ? void 0 : T.getScrollContainer()) == null ? void 0 : I.scrollTop) || 0;
      },
      setScrollValue: (T) => {
        var I;
        return (I = n.value) == null ? void 0 : I.scrollTo(0, T);
      },
      getScrollHeight: () => f.value,
      adjustPosition: () => {
        _();
      },
      getMaxHeight: () => d.value,
      getPosition: () => k.value,
      setPosition: (T, I) => {
        k.value.x = T, k.value.y = I;
      }
    }, y = we("menuItemInstance", void 0);
    y && (y.getSubMenuInstance = () => $);
    const f = ne(0), d = ne(0), m = ne(!1), k = ne({ x: 0, y: 0 });
    function _() {
      Fe(() => {
        const T = e.value, I = t.value;
        if (T && I && n.value) {
          const { container: D } = C, F = (a == null ? void 0 : a()) ?? 0, B = (u == null ? void 0 : u()) ?? 0, z = getComputedStyle(I), W = parseFloat(z.paddingLeft), P = parseFloat(z.paddingTop), V = B > 0 ? P : 0, j = document.documentElement.scrollHeight / i(), Y = document.documentElement.scrollWidth / i(), G = Math.min(Y, D.offsetWidth), J = Math.min(j, D.offsetHeight);
          let ie = Xe(T, D), he = Ze(T, D);
          S.direction.includes("l") ? k.value.x -= T.offsetWidth + W : S.direction.includes("r") ? k.value.x += F + W : (k.value.x += F / 2, k.value.x -= (T.offsetWidth + W) / 2), S.direction.includes("t") ? k.value.y -= (T.offsetHeight + P * 2) / i() : S.direction.includes("b") ? k.value.y -= P / i() : k.value.y -= (T.offsetHeight + P) / 2 / i(), Fe(() => {
            var ve, ue;
            ie = Xe(T, D), he = Ze(T, D), f.value = Math.min(
              S.maxHeight || 1e5,
              ((ue = (ve = n.value) == null ? void 0 : ve.getScrollContainer()) == null ? void 0 : ue.scrollHeight) || 0
            );
            const Ce = ie + T.offsetWidth - G, xe = he + f.value + V * 2 - J;
            if (m.value = xe > 0, o.value && Ce > 0) {
              const Se = F + T.offsetWidth - W, _e = ie;
              Se > _e ? k.value.x -= _e : k.value.x -= Se;
            }
            if (m.value) {
              if (o.value) {
                const Se = xe, _e = he;
                Se > _e ? k.value.y -= _e - V : k.value.y -= Se - V;
              }
              d.value = J - (k.value.y + P);
            } else
              d.value = 0;
          });
        }
        T == null || T.focus({
          preventScroll: !0
        }), C.isOpenedByKeyBoardFlag() && p(!0), x = !0;
      });
    }
    return je(() => {
      var T;
      M.value = !0;
      const I = (T = S.parentMenuItemContext) == null ? void 0 : T.getElement();
      if (I) {
        const D = Xe(I, C.container), F = Ze(I, C.container);
        k.value.x = D, k.value.y = F;
      } else {
        const [D, F] = C.getPositon();
        k.value.x = D, k.value.y = F;
      }
      s(E), _();
    }), Ge(() => {
      M.value = !1, y && (y.getSubMenuInstance = () => {
      });
    }), N($), (T, I) => {
      const D = ae("ContextSubMenu", !0);
      return M.value ? (Q(), te(Ft, {
        key: 0,
        to: `#${K(H)}`
      }, [
        ge("div", Pe({
          ref_key: "submenuRoot",
          ref: t
        }, T.$attrs, {
          class: [
            "mx-context-menu",
            K(A).customClass ? K(A).customClass : "",
            K(A).theme ?? ""
          ],
          style: {
            maxWidth: R.maxWidth ? K(At)(R.maxWidth) : `${K(Me).defaultMaxWidth}px`,
            minWidth: R.minWidth ? K(At)(R.minWidth) : `${K(Me).defaultMinWidth}px`,
            zIndex: K(w),
            left: `${k.value.x}px`,
            top: `${k.value.y}px`
          },
          "data-type": "ContextSubMenu",
          onClick: b
        }), [
          ee(K(ti), {
            ref_key: "scrollRectRef",
            ref: n,
            scroll: "vertical",
            maxHeight: d.value,
            containerClass: "mx-context-menu-scroll"
          }, {
            default: X(() => [
              ge("div", {
                class: Ie(["mx-context-menu-items"]),
                ref_key: "menu",
                ref: e
              }, [
                be(T.$slots, "default", {}, () => [
                  (Q(!0), se(Ae, null, Oe(R.items, (F, B) => (Q(), se(Ae, { key: B }, [
                    F.hidden !== !0 && F.divided === "up" ? (Q(), te(Je, { key: 0 })) : oe("", !0),
                    F.hidden !== !0 && F.divided === "self" ? (Q(), te(Je, { key: 1 })) : (Q(), te(vt, {
                      key: 2,
                      clickHandler: F.onClick ? (z) => F.onClick(z) : void 0,
                      disabled: typeof F.disabled == "object" ? F.disabled.value : F.disabled,
                      hidden: typeof F.hidden == "object" ? F.hidden.value : F.hidden,
                      icon: F.icon,
                      iconFontClass: F.iconFontClass,
                      svgIcon: F.svgIcon,
                      svgProps: F.svgProps,
                      label: F.label,
                      customRender: F.customRender,
                      customClass: F.customClass,
                      checked: typeof F.checked == "object" ? F.checked.value : F.checked,
                      shortcut: F.shortcut,
                      clickClose: F.clickClose,
                      clickableWhenHasChildren: F.clickableWhenHasChildren,
                      preserveIconWidth: F.preserveIconWidth !== void 0 ? F.preserveIconWidth : K(A).preserveIconWidth,
                      showRightArrow: F.children && F.children.length > 0,
                      hasChildren: F.children && F.children.length > 0,
                      rawMenuItem: F,
                      onSubMenuOpen: (z) => {
                        var W;
                        return (W = F.onSubMenuOpen) == null ? void 0 : W.call(F, z);
                      },
                      onSubMenuClose: (z) => {
                        var W;
                        return (W = F.onSubMenuClose) == null ? void 0 : W.call(F, z);
                      }
                    }, pt({ _: 2 }, [
                      F.children && F.children.length > 0 ? {
                        name: "submenu",
                        fn: X(({ context: z }) => [
                          ee(D, {
                            parentMenuItemContext: z,
                            items: F.children,
                            maxWidth: F.maxWidth,
                            minWidth: F.minWidth,
                            maxHeight: F.maxHeight,
                            adjustPosition: F.adjustSubMenuPosition !== void 0 ? F.adjustSubMenuPosition : K(A).adjustPosition,
                            direction: F.direction !== void 0 ? F.direction : K(A).direction
                          }, null, 8, ["parentMenuItemContext", "items", "maxWidth", "minWidth", "maxHeight", "adjustPosition", "direction"])
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1032, ["clickHandler", "disabled", "hidden", "icon", "iconFontClass", "svgIcon", "svgProps", "label", "customRender", "customClass", "checked", "shortcut", "clickClose", "clickableWhenHasChildren", "preserveIconWidth", "showRightArrow", "hasChildren", "rawMenuItem", "onSubMenuOpen", "onSubMenuClose"])),
                    F.hidden !== !0 && (F.divided === "down" || F.divided === !0) ? (Q(), te(Je, { key: 3 })) : oe("", !0)
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
}), Kt = /* @__PURE__ */ Te({
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
  setup(R, { expose: N, emit: S }) {
    const M = R, H = S, C = Ht(), A = ne(), {
      options: w,
      show: a,
      container: u
    } = Be(M);
    je(() => {
      a.value && n();
    }), Ge(() => {
      s();
    }), Ve(a, (h) => {
      h ? n() : (Mt(i), s());
    });
    const i = {
      closeMenu: t,
      isClosed: e,
      getMenuRef: () => A.value,
      getMenuDimensions: () => {
        var h;
        return ((h = A.value) == null ? void 0 : h.getMenuDimensions()) ?? { width: 0, height: 0 };
      }
    };
    let o = !1;
    function n() {
      r(), jn(i);
    }
    function t(h) {
      o = !0, H("close", h), w.value.menuTransitionProps || H("closeAnimFinished"), Mt(i);
    }
    function e() {
      return o;
    }
    function r() {
      setTimeout(() => {
        document.addEventListener("click", g, !0), document.addEventListener("contextmenu", g, !0), document.addEventListener("scroll", v, !0), !M.isFullScreenContainer && u.value && u.value.addEventListener("scroll", v, !0), w.value.keyboardControl !== !1 && document.addEventListener("keydown", c, !0);
      }, 50);
    }
    function s() {
      document.removeEventListener("contextmenu", g, !0), document.removeEventListener("click", g, !0), document.removeEventListener("scroll", v, !0), !M.isFullScreenContainer && u.value && u.value.removeEventListener("scroll", v, !0), w.value.keyboardControl !== !1 && document.removeEventListener("keydown", c, !0);
    }
    const l = ne();
    Le("globalSetCurrentSubMenu", (h) => l.value = h), Le("globalGetMenuHostId", u.value.id);
    function c(h) {
      var b, E, L, x, O, $, y, f, d, m, k, _, T;
      let I = !0;
      switch (h.key) {
        case "Escape": {
          ((b = l.value) == null ? void 0 : b.isTopLevel()) === !1 ? (E = l.value) == null || E.closeCurrentSubMenu() : t();
          break;
        }
        case "ArrowDown":
          (L = l.value) == null || L.moveCurrentItemDown();
          break;
        case "ArrowUp":
          (x = l.value) == null || x.moveCurrentItemUp();
          break;
        case "Home":
          (O = l.value) == null || O.moveCurrentItemFirst();
          break;
        case "End":
          ($ = l.value) == null || $.moveCurrentItemLast();
          break;
        case "ArrowLeft": {
          (y = l.value) != null && y.closeSelfAndActiveParent() || (d = (f = w.value).onKeyFocusMoveLeft) == null || d.call(f);
          break;
        }
        case "ArrowRight":
          (m = l.value) != null && m.openCurrentItemSubMenu() || (_ = (k = w.value).onKeyFocusMoveRight) == null || _.call(k);
          break;
        case "Enter":
          (T = l.value) == null || T.triggerCurrentItemClick(h);
          break;
        default:
          I = !1;
          break;
      }
      I && l.value && (h.stopPropagation(), h.preventDefault());
    }
    function v(h) {
      w.value.closeWhenScroll !== !1 && p(h.target, null);
    }
    function g(h) {
      p(h.target, h);
    }
    function p(h, b) {
      for (var E, L; h; ) {
        if (h.classList && h.classList.contains("mx-context-menu"))
          return;
        h = h.parentNode;
      }
      b ? w.value.clickCloseOnOutside !== !1 ? (s(), t()) : (L = (E = w.value).onClickOnOutside) == null || L.call(E, b) : (s(), t());
    }
    return Le("globalOptions", w), Le("globalCloseMenu", t), Le("globalIsFullScreenContainer", M.isFullScreenContainer), Le("globalHasSlot", (h) => C[h] !== void 0), Le("globalRenderSlot", (h, b) => be(C, h, { ...b }, () => [He("span", "Render slot failed")], !1)), Le("menuContext", {
      zIndex: w.value.zIndex || Me.defaultZindex,
      container: u.value,
      adjustPadding: { x: 0, y: 0 },
      getZoom: () => w.value.zoom || Me.defaultZoom,
      getParentWidth: () => 0,
      getParentHeight: () => 0,
      getPositon: () => [w.value.x, w.value.y],
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
    }), N(i), (h, b) => K(w).menuTransitionProps ? (Q(), te(Nt, Pe({
      key: 0,
      appear: ""
    }, K(w).menuTransitionProps, {
      onAfterLeave: b[0] || (b[0] = (E) => H("closeAnimFinished"))
    }), {
      default: X(() => [
        K(a) ? (Q(), te(it, {
          key: 0,
          ref_key: "submenuInstance",
          ref: A,
          items: K(w).items,
          adjustPosition: K(w).adjustPosition,
          maxWidth: K(w).maxWidth || K(Me).defaultMaxWidth,
          minWidth: K(w).minWidth || K(Me).defaultMinWidth,
          maxHeight: K(w).maxHeight,
          direction: K(w).direction || K(Me).defaultDirection
        }, {
          default: X(() => [
            be(h.$slots, "default")
          ]),
          _: 3
        }, 8, ["items", "adjustPosition", "maxWidth", "minWidth", "maxHeight", "direction"])) : oe("", !0)
      ]),
      _: 3
    }, 16)) : K(a) ? (Q(), te(it, {
      key: 1,
      ref_key: "submenuInstance",
      ref: A,
      items: K(w).items,
      adjustPosition: K(w).adjustPosition,
      maxWidth: K(w).maxWidth || K(Me).defaultMaxWidth,
      minWidth: K(w).minWidth || K(Me).defaultMinWidth,
      maxHeight: K(w).maxHeight,
      direction: K(w).direction || K(Me).defaultDirection
    }, {
      default: X(() => [
        be(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["items", "adjustPosition", "maxWidth", "minWidth", "maxHeight", "direction"])) : oe("", !0);
  }
}), $i = /* @__PURE__ */ Te({
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
  setup(R, { expose: N, emit: S }) {
    const M = S, H = R, { options: C, show: A } = Be(H), { isNew: w, container: a, eleId: u } = Gt(C.value), i = ne(null), o = Ht();
    function n(t) {
      var e, r;
      M("update:show", !1), M("close"), (r = (e = C.value).onClose) == null || r.call(e, t);
    }
    return N({
      closeMenu: () => M("update:show", !1),
      isClosed: () => !A.value,
      getMenuRef: () => {
        var t;
        return (t = i.value) == null ? void 0 : t.getMenuRef();
      },
      getMenuDimensions: () => {
        var t;
        return ((t = i.value) == null ? void 0 : t.getMenuDimensions()) ?? { width: 0, height: 0 };
      }
    }), (t, e) => (Q(), te(Ft, {
      to: `#${K(u)}`
    }, [
      ee(Kt, {
        ref_key: "menuRef",
        ref: i,
        options: K(C),
        show: K(A),
        container: K(a),
        isFullScreenContainer: !K(w),
        onClose: n
      }, pt({ _: 2 }, [
        Oe(K(o), (r, s) => ({
          name: s,
          fn: X((l) => [
            be(t.$slots, s, Wt(an(l)))
          ])
        }))
      ]), 1032, ["options", "show", "container", "isFullScreenContainer"])
    ], 8, ["to"]));
  }
}), Si = Te({
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
  setup(R, N) {
    const S = we("globalOptions"), { adjustSubMenuPosition: M, maxWidth: H, minWidth: C, maxHeight: A } = Be(R), w = typeof M.value < "u" ? M.value : S.value.adjustPosition, a = ne(), u = ne();
    return N.expose({
      getSubMenuRef: () => a.value,
      getMenuItemRef: () => u.value
    }), () => He(vt, {
      ...R,
      ref: u,
      showRightArrow: !0,
      maxWidth: void 0,
      minWidth: void 0,
      maxHeight: void 0,
      adjustSubMenuPosition: void 0,
      hasChildren: typeof N.slots.default !== void 0
    }, N.slots.default ? {
      //Create SubMenu
      submenu: (i) => He(it, {
        ref: a,
        maxWidth: H.value,
        minWidth: C.value,
        maxHeight: A.value,
        adjustPosition: w,
        parentMenuItemContext: i.context
      }, {
        default: N.slots.default
      }),
      //Add other slots
      ...Qn(N.slots, "default")
    } : N.slots);
  }
});
function Mi(R, N, S, M) {
  const H = ne(!0), C = He(Kt, {
    options: R,
    show: H.value,
    container: N,
    isFullScreenContainer: !S,
    onCloseAnimFinished: () => {
      bt(null, N);
    },
    onClose: (A) => {
      var w;
      (w = R.onClose) == null || w.call(R, A), H.value = !1;
    }
  }, M);
  return bt(C, N), C.component;
}
function _t(R, N) {
  const S = Gt(R);
  return Mi(R, S.container, S.isNew, N).exposed;
}
const Yt = {
  /**
   * For Vue install
   * @param app 
   */
  install(R) {
    R.config.globalProperties.$contextmenu = _t, R.component("ContextMenu", $i), R.component("ContextMenuItem", vt), R.component("ContextMenuGroup", Si), R.component("ContextMenuSperator", Je), R.component("ContextMenuSeparator", Je), R.component("ContextSubMenu", it);
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
  showContextMenu(R, N) {
    return _t(R, N);
  },
  /**
   * Get if there is a menu open now.
   */
  isAnyContextMenuOpen() {
    return Un();
  },
  /**
   * Close the currently open menu
   */
  closeContextMenu: jt,
  //Tools
  transformMenuPosition: Gn
}, Ai = { class: "header-buttons" }, xi = { class: "content" }, ki = {
  __name: "FloatingTreeViewer",
  props: {
    data: {},
    dataModifiers: {}
  },
  emits: /* @__PURE__ */ ze(["openEdit", "close", "update:docked"], ["update:data"]),
  setup(R, { emit: N }) {
    const S = qe(R, "data"), { removeElement: M, pasteElement: H, insertElement: C } = Pt(S), A = N, w = we("componentClipboard"), a = ne([]);
    function u() {
      a.value.forEach((h) => {
        h && (h.isExpanded = !0, o(h));
      });
    }
    function i() {
      a.value.forEach((h) => {
        h && (h.isExpanded = !1, n(h));
      });
    }
    function o(h) {
      h.$refs.treeNodes && h.$refs.treeNodes.forEach((b) => {
        b && (b.isExpanded = !0, o(b));
      });
    }
    function n(h) {
      h.$refs.treeNodes && h.$refs.treeNodes.forEach((b) => {
        b && (b.isExpanded = !1, n(b));
      });
    }
    function t(h, b) {
      let E = h.path ? [b, ...h.path] : [b];
      const L = [
        {
          label: "Edit",
          onClick: () => {
            A("openEdit", { element: h.element, path: E });
          }
        }
      ];
      L.push(
        {
          label: "Cut",
          onClick: () => {
            w.cut(h.element, E), w.isCut && M(E);
          }
        },
        {
          label: "Copy",
          onClick: () => {
            w.copy(h.element, E);
          }
        }
      ), w.hasContent() && L.push({
        label: "Paste",
        children: [
          {
            label: "Paste as Prepend",
            onClick: () => H(E, "prepend")
          },
          {
            label: "Paste as Append",
            onClick: () => H(E, "append")
          },
          {
            label: "Paste as Child",
            onClick: () => H(E, "child")
          }
        ]
      }), L.push(Vt(C, E)), Yt.showContextMenu({
        x: h.event.x,
        y: h.event.y,
        zIndex: 1001,
        items: L
      });
    }
    const e = ne({ top: 20, left: 20 }), r = ne(!1);
    let s = !1, l = { x: 0, y: 0 };
    function c() {
      r.value = !r.value, A("update:docked", r.value), r.value ? e.value = { top: 0, right: 0, bottom: 0 } : e.value = { top: 20, left: 20 };
    }
    function v(h) {
      r.value || (s = !0, l.x = h.clientX - e.value.left, l.y = h.clientY - e.value.top, document.addEventListener("mousemove", g), document.addEventListener("mouseup", p));
    }
    function g(h) {
      s && (e.value.left = h.clientX - l.x, e.value.top = h.clientY - l.y);
    }
    function p() {
      s = !1, document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", p);
    }
    return Ge(() => {
      document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", p);
    }), (h, b) => {
      const E = ae("v-icon"), L = ae("v-btn");
      return Q(), se("div", {
        class: Ie(["floating-tree-viewer", { docked: r.value }]),
        style: Ye(r.value ? e.value : { top: e.value.top + "px", left: e.value.left + "px" })
      }, [
        ge("div", {
          class: "header",
          onMousedown: v
        }, [
          b[4] || (b[4] = ge("span", null, "JSON Tree Viewer", -1)),
          ge("div", Ai, [
            ee(L, {
              icon: "",
              density: "compact",
              onClick: u,
              title: "Expand All"
            }, {
              default: X(() => [
                ee(E, null, {
                  default: X(() => b[1] || (b[1] = [
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
              onClick: i,
              title: "Collapse All"
            }, {
              default: X(() => [
                ee(E, null, {
                  default: X(() => b[2] || (b[2] = [
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
              onClick: c
            }, {
              default: X(() => [
                ee(E, null, {
                  default: X(() => [
                    ye(Re(r.value ? "fa-solid fa-arrow-left" : "fa-solid fa-arrow-right"), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            ee(L, {
              icon: "",
              density: "compact",
              onClick: b[0] || (b[0] = (x) => h.$emit("close"))
            }, {
              default: X(() => b[3] || (b[3] = [
                ye("x")
              ])),
              _: 1,
              __: [3]
            })
          ])
        ], 32),
        ge("div", xi, [
          (Q(!0), se(Ae, null, Oe(S.value, (x, O) => (Q(), te(Ut, {
            node: x,
            label: "root",
            onOpenEdit: ($) => t($, O),
            ref_for: !0,
            ref_key: "treeNodes",
            ref: a
          }, null, 8, ["node", "onOpenEdit"]))), 256))
        ])
      ], 6);
    };
  }
}, Li = /* @__PURE__ */ et(ki, [["__scopeId", "data-v-5898d76b"]]);
function Ei(R) {
  return R && R.__esModule && Object.prototype.hasOwnProperty.call(R, "default") ? R.default : R;
}
var ht = { exports: {} }, Rt;
function Ti() {
  return Rt || (Rt = 1, function(R, N) {
    (function() {
      var S = "ace", M = /* @__PURE__ */ function() {
        return this;
      }();
      !M && typeof window < "u" && (M = window);
      var H = function(i, o, n) {
        if (typeof i != "string") {
          H.original ? H.original.apply(this, arguments) : (console.error("dropping module because define wasn't a string."), console.trace());
          return;
        }
        arguments.length == 2 && (n = o), H.modules[i] || (H.payloads[i] = n, H.modules[i] = null);
      };
      H.modules = {}, H.payloads = {};
      var C = function(i, o, n) {
        if (typeof o == "string") {
          var t = a(i, o);
          if (t != null)
            return n && n(), t;
        } else if (Object.prototype.toString.call(o) === "[object Array]") {
          for (var e = [], r = 0, s = o.length; r < s; ++r) {
            var l = a(i, o[r]);
            if (l == null && A.original)
              return;
            e.push(l);
          }
          return n && n.apply(null, e) || !0;
        }
      }, A = function(i, o) {
        var n = C("", i, o);
        return n == null && A.original ? A.original.apply(this, arguments) : n;
      }, w = function(i, o) {
        if (o.indexOf("!") !== -1) {
          var n = o.split("!");
          return w(i, n[0]) + "!" + w(i, n[1]);
        }
        if (o.charAt(0) == ".") {
          var t = i.split("/").slice(0, -1).join("/");
          for (o = t + "/" + o; o.indexOf(".") !== -1 && e != o; ) {
            var e = o;
            o = o.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "");
          }
        }
        return o;
      }, a = function(i, o) {
        o = w(i, o);
        var n = H.modules[o];
        if (!n) {
          if (n = H.payloads[o], typeof n == "function") {
            var t = {}, e = {
              id: o,
              uri: "",
              exports: t,
              packaged: !0
            }, r = function(l, c) {
              return C(o, l, c);
            }, s = n(r, t, e);
            t = s || e.exports, H.modules[o] = t, delete H.payloads[o];
          }
          n = H.modules[o] = t || n;
        }
        return n;
      };
      function u(i) {
        var o = M;
        M[i] || (M[i] = {}), o = M[i], (!o.define || !o.define.packaged) && (H.original = o.define, o.define = H, o.define.packaged = !0), (!o.require || !o.require.packaged) && (A.original = o.require, o.require = A, o.require.packaged = !0);
      }
      u(S);
    })(), ace.define("ace/lib/es6-shim", ["require", "exports", "module"], function(S, M, H) {
      function C(A, w, a) {
        Object.defineProperty(A, w, {
          value: a,
          enumerable: !1,
          writable: !0,
          configurable: !0
        });
      }
      String.prototype.startsWith || C(String.prototype, "startsWith", function(A, w) {
        return w = w || 0, this.lastIndexOf(A, w) === w;
      }), String.prototype.endsWith || C(String.prototype, "endsWith", function(A, w) {
        var a = this;
        (w === void 0 || w > a.length) && (w = a.length), w -= A.length;
        var u = a.indexOf(A, w);
        return u !== -1 && u === w;
      }), String.prototype.repeat || C(String.prototype, "repeat", function(A) {
        for (var w = "", a = this; A > 0; )
          A & 1 && (w += a), (A >>= 1) && (a += a);
        return w;
      }), String.prototype.includes || C(String.prototype, "includes", function(A, w) {
        return this.indexOf(A, w) != -1;
      }), Object.assign || (Object.assign = function(A) {
        if (A == null)
          throw new TypeError("Cannot convert undefined or null to object");
        for (var w = Object(A), a = 1; a < arguments.length; a++) {
          var u = arguments[a];
          u != null && Object.keys(u).forEach(function(i) {
            w[i] = u[i];
          });
        }
        return w;
      }), Object.values || (Object.values = function(A) {
        return Object.keys(A).map(function(w) {
          return A[w];
        });
      }), Array.prototype.find || C(Array.prototype, "find", function(A) {
        for (var w = this.length, a = arguments[1], u = 0; u < w; u++) {
          var i = this[u];
          if (A.call(a, i, u, this))
            return i;
        }
      }), Array.prototype.findIndex || C(Array.prototype, "findIndex", function(A) {
        for (var w = this.length, a = arguments[1], u = 0; u < w; u++) {
          var i = this[u];
          if (A.call(a, i, u, this))
            return u;
        }
      }), Array.prototype.includes || C(Array.prototype, "includes", function(A, w) {
        return this.indexOf(A, w) != -1;
      }), Array.prototype.fill || C(Array.prototype, "fill", function(A) {
        for (var w = this, a = w.length >>> 0, u = arguments[1], i = u >> 0, o = i < 0 ? Math.max(a + i, 0) : Math.min(i, a), n = arguments[2], t = n === void 0 ? a : n >> 0, e = t < 0 ? Math.max(a + t, 0) : Math.min(t, a); o < e; )
          w[o] = A, o++;
        return w;
      }), Array.of || C(Array, "of", function() {
        return Array.prototype.slice.call(arguments);
      });
    }), ace.define("ace/lib/fixoldbrowsers", ["require", "exports", "module", "ace/lib/es6-shim"], function(S, M, H) {
      S("./es6-shim");
    }), ace.define("ace/lib/deep_copy", ["require", "exports", "module"], function(S, M, H) {
      M.deepCopy = function C(A) {
        if (typeof A != "object" || !A)
          return A;
        var w;
        if (Array.isArray(A)) {
          w = [];
          for (var a = 0; a < A.length; a++)
            w[a] = C(A[a]);
          return w;
        }
        if (Object.prototype.toString.call(A) !== "[object Object]")
          return A;
        w = {};
        for (var a in A)
          w[a] = C(A[a]);
        return w;
      };
    }), ace.define("ace/lib/lang", ["require", "exports", "module", "ace/lib/deep_copy"], function(S, M, H) {
      M.last = function(w) {
        return w[w.length - 1];
      }, M.stringReverse = function(w) {
        return w.split("").reverse().join("");
      }, M.stringRepeat = function(w, a) {
        for (var u = ""; a > 0; )
          a & 1 && (u += w), (a >>= 1) && (w += w);
        return u;
      };
      var C = /^\s\s*/, A = /\s\s*$/;
      M.stringTrimLeft = function(w) {
        return w.replace(C, "");
      }, M.stringTrimRight = function(w) {
        return w.replace(A, "");
      }, M.copyObject = function(w) {
        var a = {};
        for (var u in w)
          a[u] = w[u];
        return a;
      }, M.copyArray = function(w) {
        for (var a = [], u = 0, i = w.length; u < i; u++)
          w[u] && typeof w[u] == "object" ? a[u] = this.copyObject(w[u]) : a[u] = w[u];
        return a;
      }, M.deepCopy = S("./deep_copy").deepCopy, M.arrayToMap = function(w) {
        for (var a = {}, u = 0; u < w.length; u++)
          a[w[u]] = 1;
        return a;
      }, M.createMap = function(w) {
        var a = /* @__PURE__ */ Object.create(null);
        for (var u in w)
          a[u] = w[u];
        return a;
      }, M.arrayRemove = function(w, a) {
        for (var u = 0; u <= w.length; u++)
          a === w[u] && w.splice(u, 1);
      }, M.escapeRegExp = function(w) {
        return w.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1");
      }, M.escapeHTML = function(w) {
        return ("" + w).replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;");
      }, M.getMatchOffsets = function(w, a) {
        var u = [];
        return w.replace(a, function(i) {
          u.push({
            offset: arguments[arguments.length - 2],
            length: i.length
          });
        }), u;
      }, M.deferredCall = function(w) {
        var a = null, u = function() {
          a = null, w();
        }, i = function(o) {
          return i.cancel(), a = setTimeout(u, o || 0), i;
        };
        return i.schedule = i, i.call = function() {
          return this.cancel(), w(), i;
        }, i.cancel = function() {
          return clearTimeout(a), a = null, i;
        }, i.isPending = function() {
          return a;
        }, i;
      }, M.delayedCall = function(w, a) {
        var u = null, i = function() {
          u = null, w();
        }, o = function(n) {
          u == null && (u = setTimeout(i, n || a));
        };
        return o.delay = function(n) {
          u && clearTimeout(u), u = setTimeout(i, n || a);
        }, o.schedule = o, o.call = function() {
          this.cancel(), w();
        }, o.cancel = function() {
          u && clearTimeout(u), u = null;
        }, o.isPending = function() {
          return u;
        }, o;
      }, M.supportsLookbehind = function() {
        try {
          new RegExp("(?<=.)");
        } catch {
          return !1;
        }
        return !0;
      }, M.skipEmptyMatch = function(w, a, u) {
        return u && w.codePointAt(a) > 65535 ? 2 : 1;
      };
    }), ace.define("ace/lib/useragent", ["require", "exports", "module"], function(S, M, H) {
      M.OS = {
        LINUX: "LINUX",
        MAC: "MAC",
        WINDOWS: "WINDOWS"
      }, M.getOS = function() {
        return M.isMac ? M.OS.MAC : M.isLinux ? M.OS.LINUX : M.OS.WINDOWS;
      };
      var C = typeof navigator == "object" ? navigator : {}, A = (/mac|win|linux/i.exec(C.platform) || ["other"])[0].toLowerCase(), w = C.userAgent || "", a = C.appName || "";
      M.isWin = A == "win", M.isMac = A == "mac", M.isLinux = A == "linux", M.isIE = a == "Microsoft Internet Explorer" || a.indexOf("MSAppHost") >= 0 ? parseFloat((w.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]) : parseFloat((w.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]), M.isOldIE = M.isIE && M.isIE < 9, M.isGecko = M.isMozilla = w.match(/ Gecko\/\d+/), M.isOpera = typeof opera == "object" && Object.prototype.toString.call(window.opera) == "[object Opera]", M.isWebKit = parseFloat(w.split("WebKit/")[1]) || void 0, M.isChrome = parseFloat(w.split(" Chrome/")[1]) || void 0, M.isSafari = parseFloat(w.split(" Safari/")[1]) && !M.isChrome || void 0, M.isEdge = parseFloat(w.split(" Edge/")[1]) || void 0, M.isAIR = w.indexOf("AdobeAIR") >= 0, M.isAndroid = w.indexOf("Android") >= 0, M.isChromeOS = w.indexOf(" CrOS ") >= 0, M.isIOS = /iPad|iPhone|iPod/.test(w) && !window.MSStream, M.isIOS && (M.isMac = !0), M.isMobile = M.isIOS || M.isAndroid;
    }), ace.define("ace/lib/dom", ["require", "exports", "module", "ace/lib/useragent"], function(S, M, H) {
      var C = S("./useragent"), A = "http://www.w3.org/1999/xhtml";
      M.buildDom = function n(t, e, r) {
        if (typeof t == "string" && t) {
          var s = document.createTextNode(t);
          return e && e.appendChild(s), s;
        }
        if (!Array.isArray(t))
          return t && t.appendChild && e && e.appendChild(t), t;
        if (typeof t[0] != "string" || !t[0]) {
          for (var l = [], c = 0; c < t.length; c++) {
            var v = n(t[c], e, r);
            v && l.push(v);
          }
          return l;
        }
        var g = document.createElement(t[0]), p = t[1], h = 1;
        p && typeof p == "object" && !Array.isArray(p) && (h = 2);
        for (var c = h; c < t.length; c++)
          n(t[c], g, r);
        return h == 2 && Object.keys(p).forEach(function(b) {
          var E = p[b];
          b === "class" ? g.className = Array.isArray(E) ? E.join(" ") : E : typeof E == "function" || b == "value" || b[0] == "$" ? g[b] = E : b === "ref" ? r && (r[E] = g) : b === "style" ? typeof E == "string" && (g.style.cssText = E) : E != null && g.setAttribute(b, E);
        }), e && e.appendChild(g), g;
      }, M.getDocumentHead = function(n) {
        return n || (n = document), n.head || n.getElementsByTagName("head")[0] || n.documentElement;
      }, M.createElement = function(n, t) {
        return document.createElementNS ? document.createElementNS(t || A, n) : document.createElement(n);
      }, M.removeChildren = function(n) {
        n.innerHTML = "";
      }, M.createTextNode = function(n, t) {
        var e = t ? t.ownerDocument : document;
        return e.createTextNode(n);
      }, M.createFragment = function(n) {
        var t = n ? n.ownerDocument : document;
        return t.createDocumentFragment();
      }, M.hasCssClass = function(n, t) {
        var e = (n.className + "").split(/\s+/g);
        return e.indexOf(t) !== -1;
      }, M.addCssClass = function(n, t) {
        M.hasCssClass(n, t) || (n.className += " " + t);
      }, M.removeCssClass = function(n, t) {
        for (var e = n.className.split(/\s+/g); ; ) {
          var r = e.indexOf(t);
          if (r == -1)
            break;
          e.splice(r, 1);
        }
        n.className = e.join(" ");
      }, M.toggleCssClass = function(n, t) {
        for (var e = n.className.split(/\s+/g), r = !0; ; ) {
          var s = e.indexOf(t);
          if (s == -1)
            break;
          r = !1, e.splice(s, 1);
        }
        return r && e.push(t), n.className = e.join(" "), r;
      }, M.setCssClass = function(n, t, e) {
        e ? M.addCssClass(n, t) : M.removeCssClass(n, t);
      }, M.hasCssString = function(n, t) {
        var e = 0, r;
        if (t = t || document, r = t.querySelectorAll("style")) {
          for (; e < r.length; )
            if (r[e++].id === n)
              return !0;
        }
      }, M.removeElementById = function(n, t) {
        t = t || document, t.getElementById(n) && t.getElementById(n).remove();
      };
      var w, a = [];
      M.useStrictCSP = function(n) {
        w = n, n == !1 ? u() : a || (a = []);
      };
      function u() {
        var n = a;
        a = null, n && n.forEach(function(t) {
          i(t[0], t[1]);
        });
      }
      function i(n, t, e) {
        if (!(typeof document > "u")) {
          if (a) {
            if (e)
              u();
            else if (e === !1)
              return a.push([n, t]);
          }
          if (!w) {
            var r = e;
            !e || !e.getRootNode ? r = document : (r = e.getRootNode(), (!r || r == e) && (r = document));
            var s = r.ownerDocument || r;
            if (t && M.hasCssString(t, r))
              return null;
            t && (n += `
/*# sourceURL=ace/css/` + t + " */");
            var l = M.createElement("style");
            l.appendChild(s.createTextNode(n)), t && (l.id = t), r == s && (r = M.getDocumentHead(s)), r.insertBefore(l, r.firstChild);
          }
        }
      }
      if (M.importCssString = i, M.importCssStylsheet = function(n, t) {
        M.buildDom(["link", { rel: "stylesheet", href: n }], M.getDocumentHead(t));
      }, M.scrollbarWidth = function(n) {
        var t = M.createElement("ace_inner");
        t.style.width = "100%", t.style.minWidth = "0px", t.style.height = "200px", t.style.display = "block";
        var e = M.createElement("ace_outer"), r = e.style;
        r.position = "absolute", r.left = "-10000px", r.overflow = "hidden", r.width = "200px", r.minWidth = "0px", r.height = "150px", r.display = "block", e.appendChild(t);
        var s = n && n.documentElement || document && document.documentElement;
        if (!s)
          return 0;
        s.appendChild(e);
        var l = t.offsetWidth;
        r.overflow = "scroll";
        var c = t.offsetWidth;
        return l === c && (c = e.clientWidth), s.removeChild(e), l - c;
      }, M.computedStyle = function(n, t) {
        return window.getComputedStyle(n, "") || {};
      }, M.setStyle = function(n, t, e) {
        n[t] !== e && (n[t] = e);
      }, M.HAS_CSS_ANIMATION = !1, M.HAS_CSS_TRANSFORMS = !1, M.HI_DPI = C.isWin ? typeof window < "u" && window.devicePixelRatio >= 1.5 : !0, C.isChromeOS && (M.HI_DPI = !1), typeof document < "u") {
        var o = document.createElement("div");
        M.HI_DPI && o.style.transform !== void 0 && (M.HAS_CSS_TRANSFORMS = !0), !C.isEdge && typeof o.style.animationName < "u" && (M.HAS_CSS_ANIMATION = !0), o = null;
      }
      M.HAS_CSS_TRANSFORMS ? M.translate = function(n, t, e) {
        n.style.transform = "translate(" + Math.round(t) + "px, " + Math.round(e) + "px)";
      } : M.translate = function(n, t, e) {
        n.style.top = Math.round(e) + "px", n.style.left = Math.round(t) + "px";
      };
    }), ace.define("ace/lib/net", ["require", "exports", "module", "ace/lib/dom"], function(S, M, H) {
      /*
      * based on code from:
      *
      * @license RequireJS text 0.25.0 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
      * Available via the MIT or new BSD license.
      * see: http://github.com/jrburke/requirejs for details
      */
      var C = S("./dom");
      M.get = function(A, w) {
        var a = new XMLHttpRequest();
        a.open("GET", A, !0), a.onreadystatechange = function() {
          a.readyState === 4 && w(a.responseText);
        }, a.send(null);
      }, M.loadScript = function(A, w) {
        var a = C.getDocumentHead(), u = document.createElement("script");
        u.src = A, a.appendChild(u), u.onload = u.onreadystatechange = function(i, o) {
          (o || !u.readyState || u.readyState == "loaded" || u.readyState == "complete") && (u = u.onload = u.onreadystatechange = null, o || w());
        };
      }, M.qualifyURL = function(A) {
        var w = document.createElement("a");
        return w.href = A, w.href;
      };
    }), ace.define("ace/lib/oop", ["require", "exports", "module"], function(S, M, H) {
      M.inherits = function(C, A) {
        C.super_ = A, C.prototype = Object.create(A.prototype, {
          constructor: {
            value: C,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
      }, M.mixin = function(C, A) {
        for (var w in A)
          C[w] = A[w];
        return C;
      }, M.implement = function(C, A) {
        M.mixin(C, A);
      };
    }), ace.define("ace/lib/event_emitter", ["require", "exports", "module"], function(S, M, H) {
      var C = {}, A = function() {
        this.propagationStopped = !0;
      }, w = function() {
        this.defaultPrevented = !0;
      };
      C._emit = C._dispatchEvent = function(a, u) {
        this._eventRegistry || (this._eventRegistry = {}), this._defaultHandlers || (this._defaultHandlers = {});
        var i = this._eventRegistry[a] || [], o = this._defaultHandlers[a];
        if (!(!i.length && !o)) {
          (typeof u != "object" || !u) && (u = {}), u.type || (u.type = a), u.stopPropagation || (u.stopPropagation = A), u.preventDefault || (u.preventDefault = w), i = i.slice();
          for (var n = 0; n < i.length && (i[n](u, this), !u.propagationStopped); n++)
            ;
          if (o && !u.defaultPrevented)
            return o(u, this);
        }
      }, C._signal = function(a, u) {
        var i = (this._eventRegistry || {})[a];
        if (i) {
          i = i.slice();
          for (var o = 0; o < i.length; o++)
            i[o](u, this);
        }
      }, C.once = function(a, u) {
        var i = this;
        if (this.on(a, function o() {
          i.off(a, o), u.apply(null, arguments);
        }), !u)
          return new Promise(function(o) {
            u = o;
          });
      }, C.setDefaultHandler = function(a, u) {
        var i = this._defaultHandlers;
        if (i || (i = this._defaultHandlers = { _disabled_: {} }), i[a]) {
          var o = i[a], n = i._disabled_[a];
          n || (i._disabled_[a] = n = []), n.push(o);
          var t = n.indexOf(u);
          t != -1 && n.splice(t, 1);
        }
        i[a] = u;
      }, C.removeDefaultHandler = function(a, u) {
        var i = this._defaultHandlers;
        if (i) {
          var o = i._disabled_[a];
          if (i[a] == u)
            o && this.setDefaultHandler(a, o.pop());
          else if (o) {
            var n = o.indexOf(u);
            n != -1 && o.splice(n, 1);
          }
        }
      }, C.on = C.addEventListener = function(a, u, i) {
        this._eventRegistry = this._eventRegistry || {};
        var o = this._eventRegistry[a];
        return o || (o = this._eventRegistry[a] = []), o.indexOf(u) == -1 && o[i ? "unshift" : "push"](u), u;
      }, C.off = C.removeListener = C.removeEventListener = function(a, u) {
        this._eventRegistry = this._eventRegistry || {};
        var i = this._eventRegistry[a];
        if (i) {
          var o = i.indexOf(u);
          o !== -1 && i.splice(o, 1);
        }
      }, C.removeAllListeners = function(a) {
        a || (this._eventRegistry = this._defaultHandlers = void 0), this._eventRegistry && (this._eventRegistry[a] = void 0), this._defaultHandlers && (this._defaultHandlers[a] = void 0);
      }, M.EventEmitter = C;
    }), ace.define("ace/lib/report_error", ["require", "exports", "module"], function(S, M, H) {
      M.reportError = function(A, w) {
        var a = new Error(A);
        a.data = w, typeof console == "object" && console.error && console.error(a), setTimeout(function() {
          throw a;
        });
      };
    }), ace.define("ace/lib/default_english_messages", ["require", "exports", "module"], function(S, M, H) {
      var C = {
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
      M.defaultEnglishMessages = C;
    }), ace.define("ace/lib/app_config", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter", "ace/lib/report_error", "ace/lib/default_english_messages"], function(S, M, H) {
      "no use strict";
      var C = S("./oop"), A = S("./event_emitter").EventEmitter, w = S("./report_error").reportError, a = S("./default_english_messages").defaultEnglishMessages, u = {
        setOptions: function(e) {
          Object.keys(e).forEach(function(r) {
            this.setOption(r, e[r]);
          }, this);
        },
        getOptions: function(e) {
          var r = {};
          if (e)
            Array.isArray(e) || (e = Object.keys(e));
          else {
            var s = this.$options;
            e = Object.keys(s).filter(function(l) {
              return !s[l].hidden;
            });
          }
          return e.forEach(function(l) {
            r[l] = this.getOption(l);
          }, this), r;
        },
        setOption: function(e, r) {
          if (this["$" + e] !== r) {
            var s = this.$options[e];
            if (!s)
              return i('misspelled option "' + e + '"');
            if (s.forwardTo)
              return this[s.forwardTo] && this[s.forwardTo].setOption(e, r);
            s.handlesSet || (this["$" + e] = r), s && s.set && s.set.call(this, r);
          }
        },
        getOption: function(e) {
          var r = this.$options[e];
          return r ? r.forwardTo ? this[r.forwardTo] && this[r.forwardTo].getOption(e) : r && r.get ? r.get.call(this) : this["$" + e] : i('misspelled option "' + e + '"');
        }
      };
      function i(e) {
        typeof console < "u" && console.warn && console.warn.apply(console, arguments);
      }
      var o, n, t = (
        /** @class */
        function() {
          function e() {
            this.$defaultOptions = {}, o = a, n = "dollarSigns";
          }
          return e.prototype.defineOptions = function(r, s, l) {
            return r.$options || (this.$defaultOptions[s] = r.$options = {}), Object.keys(l).forEach(function(c) {
              var v = l[c];
              typeof v == "string" && (v = { forwardTo: v }), v.name || (v.name = c), r.$options[v.name] = v, "initialValue" in v && (r["$" + v.name] = v.initialValue);
            }), C.implement(r, u), this;
          }, e.prototype.resetOptions = function(r) {
            Object.keys(r.$options).forEach(function(s) {
              var l = r.$options[s];
              "value" in l && r.setOption(s, l.value);
            });
          }, e.prototype.setDefaultValue = function(r, s, l) {
            if (!r) {
              for (r in this.$defaultOptions)
                if (this.$defaultOptions[r][s])
                  break;
              if (!this.$defaultOptions[r][s])
                return !1;
            }
            var c = this.$defaultOptions[r] || (this.$defaultOptions[r] = {});
            c[s] && (c.forwardTo ? this.setDefaultValue(c.forwardTo, s, l) : c[s].value = l);
          }, e.prototype.setDefaultValues = function(r, s) {
            Object.keys(s).forEach(function(l) {
              this.setDefaultValue(r, l, s[l]);
            }, this);
          }, e.prototype.setMessages = function(r, s) {
            o = r, s && s.placeholders && (n = s.placeholders);
          }, e.prototype.nls = function(r, s, l) {
            o[r] || (i("No message found for the key '" + r + "' in messages with id " + o.$id + ", trying to find a translation for the default string '" + s + "'."), o[s] || i("No message found for the default string '" + s + "' in the provided messages. Falling back to the default English message."));
            var c = o[r] || o[s] || s;
            return l && (n === "dollarSigns" && (c = c.replace(/\$(\$|[\d]+)/g, function(v, g) {
              return g == "$" ? "$" : l[g];
            })), n === "curlyBrackets" && (c = c.replace(/\{([^\}]+)\}/g, function(v, g) {
              return l[g];
            }))), c;
          }, e;
        }()
      );
      t.prototype.warn = i, t.prototype.reportError = w, C.implement(t.prototype, A), M.AppConfig = t;
    }), ace.define("ace/theme/textmate-css", ["require", "exports", "module"], function(S, M, H) {
      H.exports = `.ace-tm .ace_gutter {
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
    }), ace.define("ace/theme/textmate", ["require", "exports", "module", "ace/theme/textmate-css", "ace/lib/dom"], function(S, M, H) {
      M.isDark = !1, M.cssClass = "ace-tm", M.cssText = S("./textmate-css"), M.$id = "ace/theme/textmate";
      var C = S("../lib/dom");
      C.importCssString(M.cssText, M.cssClass, !1);
    }), ace.define("ace/config", ["require", "exports", "module", "ace/lib/lang", "ace/lib/net", "ace/lib/dom", "ace/lib/app_config", "ace/theme/textmate"], function(S, M, H) {
      "no use strict";
      var C = S("./lib/lang"), A = S("./lib/net"), w = S("./lib/dom"), a = S("./lib/app_config").AppConfig;
      H.exports = M = new a();
      var u = {
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
      M.get = function(t) {
        if (!u.hasOwnProperty(t))
          throw new Error("Unknown config key: " + t);
        return u[t];
      }, M.set = function(t, e) {
        if (u.hasOwnProperty(t))
          u[t] = e;
        else if (this.setDefaultValue("", t, e) == !1)
          throw new Error("Unknown config key: " + t);
        t == "useStrictCSP" && w.useStrictCSP(e);
      }, M.all = function() {
        return C.copyObject(u);
      }, M.$modes = {}, M.moduleUrl = function(t, e) {
        if (u.$moduleUrls[t])
          return u.$moduleUrls[t];
        var r = t.split("/");
        e = e || r[r.length - 2] || "";
        var s = e == "snippets" ? "/" : "-", l = r[r.length - 1];
        if (e == "worker" && s == "-") {
          var c = new RegExp("^" + e + "[\\-_]|[\\-_]" + e + "$", "g");
          l = l.replace(c, "");
        }
        (!l || l == e) && r.length > 1 && (l = r[r.length - 2]);
        var v = u[e + "Path"];
        return v == null ? v = u.basePath : s == "/" && (e = s = ""), v && v.slice(-1) != "/" && (v += "/"), v + e + s + l + this.get("suffix");
      }, M.setModuleUrl = function(t, e) {
        return u.$moduleUrls[t] = e;
      };
      var i = function(t, e) {
        if (t === "ace/theme/textmate" || t === "./theme/textmate")
          return e(null, S("./theme/textmate"));
        if (o)
          return o(t, e);
        console.error("loader is not configured");
      }, o;
      M.setLoader = function(t) {
        o = t;
      }, M.dynamicModules = /* @__PURE__ */ Object.create(null), M.$loading = {}, M.$loaded = {}, M.loadModule = function(t, e) {
        var r;
        if (Array.isArray(t))
          var s = t[0], l = t[1];
        else if (typeof t == "string")
          var l = t;
        var c = function(v) {
          if (v && !M.$loading[l])
            return e && e(v);
          if (M.$loading[l] || (M.$loading[l] = []), M.$loading[l].push(e), !(M.$loading[l].length > 1)) {
            var g = function() {
              i(l, function(p, h) {
                h && (M.$loaded[l] = h), M._emit("load.module", { name: l, module: h });
                var b = M.$loading[l];
                M.$loading[l] = null, b.forEach(function(E) {
                  E && E(h);
                });
              });
            };
            if (!M.get("packaged"))
              return g();
            A.loadScript(M.moduleUrl(l, s), g), n();
          }
        };
        if (M.dynamicModules[l])
          M.dynamicModules[l]().then(function(v) {
            v.default ? c(v.default) : c(v);
          });
        else {
          try {
            r = this.$require(l);
          } catch {
          }
          c(r || M.$loaded[l]);
        }
      }, M.$require = function(t) {
        if (typeof H.require == "function") {
          var e = "require";
          return H[e](t);
        }
      }, M.setModuleLoader = function(t, e) {
        M.dynamicModules[t] = e;
      };
      var n = function() {
        !u.basePath && !u.workerPath && !u.modePath && !u.themePath && !Object.keys(u.$moduleUrls).length && (console.error("Unable to infer path to ace from script src,", "use ace.config.set('basePath', 'path') to enable dynamic loading of modes and themes", "or with webpack use ace/webpack-resolver"), n = function() {
        });
      };
      M.version = "1.41.0";
    }), ace.define("ace/loader_build", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/config"], function(S, M, H) {
      S("./lib/fixoldbrowsers");
      var C = S("./config");
      C.setLoader(function(u, i) {
        S([u], function(o) {
          i(null, o);
        });
      });
      var A = /* @__PURE__ */ function() {
        return this || typeof window < "u" && window;
      }();
      H.exports = function(u) {
        C.init = w, C.$require = S, u.require = S;
      }, w(!0);
      function w(u) {
        if (!(!A || !A.document)) {
          C.set("packaged", u || S.packaged || H.packaged || A.define && (void 0).packaged);
          var i = {}, o = "", n = document.currentScript || document._currentScript, t = n && n.ownerDocument || document;
          n && n.src && (o = n.src.split(/[?#]/)[0].split("/").slice(0, -1).join("/") || "");
          for (var e = t.getElementsByTagName("script"), r = 0; r < e.length; r++) {
            var s = e[r], l = s.src || s.getAttribute("src");
            if (l) {
              for (var c = s.attributes, v = 0, g = c.length; v < g; v++) {
                var p = c[v];
                p.name.indexOf("data-ace-") === 0 && (i[a(p.name.replace(/^data-ace-/, ""))] = p.value);
              }
              var h = l.match(/^(.*)\/ace([\-.]\w+)?\.js(\?|$)/);
              h && (o = h[1]);
            }
          }
          o && (i.base = i.base || o, i.packaged = !0), i.basePath = i.base, i.workerPath = i.workerPath || i.base, i.modePath = i.modePath || i.base, i.themePath = i.themePath || i.base, delete i.base;
          for (var b in i)
            typeof i[b] < "u" && C.set(b, i[b]);
        }
      }
      function a(u) {
        return u.replace(/-(.)/g, function(i, o) {
          return o.toUpperCase();
        });
      }
    }), ace.define("ace/range", ["require", "exports", "module"], function(S, M, H) {
      var C = (
        /** @class */
        function() {
          function A(w, a, u, i) {
            this.start = {
              row: w,
              column: a
            }, this.end = {
              row: u,
              column: i
            };
          }
          return A.prototype.isEqual = function(w) {
            return this.start.row === w.start.row && this.end.row === w.end.row && this.start.column === w.start.column && this.end.column === w.end.column;
          }, A.prototype.toString = function() {
            return "Range: [" + this.start.row + "/" + this.start.column + "] -> [" + this.end.row + "/" + this.end.column + "]";
          }, A.prototype.contains = function(w, a) {
            return this.compare(w, a) == 0;
          }, A.prototype.compareRange = function(w) {
            var a, u = w.end, i = w.start;
            return a = this.compare(u.row, u.column), a == 1 ? (a = this.compare(i.row, i.column), a == 1 ? 2 : a == 0 ? 1 : 0) : a == -1 ? -2 : (a = this.compare(i.row, i.column), a == -1 ? -1 : a == 1 ? 42 : 0);
          }, A.prototype.comparePoint = function(w) {
            return this.compare(w.row, w.column);
          }, A.prototype.containsRange = function(w) {
            return this.comparePoint(w.start) == 0 && this.comparePoint(w.end) == 0;
          }, A.prototype.intersects = function(w) {
            var a = this.compareRange(w);
            return a == -1 || a == 0 || a == 1;
          }, A.prototype.isEnd = function(w, a) {
            return this.end.row == w && this.end.column == a;
          }, A.prototype.isStart = function(w, a) {
            return this.start.row == w && this.start.column == a;
          }, A.prototype.setStart = function(w, a) {
            typeof w == "object" ? (this.start.column = w.column, this.start.row = w.row) : (this.start.row = w, this.start.column = a);
          }, A.prototype.setEnd = function(w, a) {
            typeof w == "object" ? (this.end.column = w.column, this.end.row = w.row) : (this.end.row = w, this.end.column = a);
          }, A.prototype.inside = function(w, a) {
            return this.compare(w, a) == 0 ? !(this.isEnd(w, a) || this.isStart(w, a)) : !1;
          }, A.prototype.insideStart = function(w, a) {
            return this.compare(w, a) == 0 ? !this.isEnd(w, a) : !1;
          }, A.prototype.insideEnd = function(w, a) {
            return this.compare(w, a) == 0 ? !this.isStart(w, a) : !1;
          }, A.prototype.compare = function(w, a) {
            return !this.isMultiLine() && w === this.start.row ? a < this.start.column ? -1 : a > this.end.column ? 1 : 0 : w < this.start.row ? -1 : w > this.end.row ? 1 : this.start.row === w ? a >= this.start.column ? 0 : -1 : this.end.row === w ? a <= this.end.column ? 0 : 1 : 0;
          }, A.prototype.compareStart = function(w, a) {
            return this.start.row == w && this.start.column == a ? -1 : this.compare(w, a);
          }, A.prototype.compareEnd = function(w, a) {
            return this.end.row == w && this.end.column == a ? 1 : this.compare(w, a);
          }, A.prototype.compareInside = function(w, a) {
            return this.end.row == w && this.end.column == a ? 1 : this.start.row == w && this.start.column == a ? -1 : this.compare(w, a);
          }, A.prototype.clipRows = function(w, a) {
            if (this.end.row > a)
              var u = { row: a + 1, column: 0 };
            else if (this.end.row < w)
              var u = { row: w, column: 0 };
            if (this.start.row > a)
              var i = { row: a + 1, column: 0 };
            else if (this.start.row < w)
              var i = { row: w, column: 0 };
            return A.fromPoints(i || this.start, u || this.end);
          }, A.prototype.extend = function(w, a) {
            var u = this.compare(w, a);
            if (u == 0)
              return this;
            if (u == -1)
              var i = { row: w, column: a };
            else
              var o = { row: w, column: a };
            return A.fromPoints(i || this.start, o || this.end);
          }, A.prototype.isEmpty = function() {
            return this.start.row === this.end.row && this.start.column === this.end.column;
          }, A.prototype.isMultiLine = function() {
            return this.start.row !== this.end.row;
          }, A.prototype.clone = function() {
            return A.fromPoints(this.start, this.end);
          }, A.prototype.collapseRows = function() {
            return this.end.column == 0 ? new A(this.start.row, 0, Math.max(this.start.row, this.end.row - 1), 0) : new A(this.start.row, 0, this.end.row, 0);
          }, A.prototype.toScreenRange = function(w) {
            var a = w.documentToScreenPosition(this.start), u = w.documentToScreenPosition(this.end);
            return new A(a.row, a.column, u.row, u.column);
          }, A.prototype.moveBy = function(w, a) {
            this.start.row += w, this.start.column += a, this.end.row += w, this.end.column += a;
          }, A;
        }()
      );
      C.fromPoints = function(A, w) {
        return new C(A.row, A.column, w.row, w.column);
      }, C.comparePoints = function(A, w) {
        return A.row - w.row || A.column - w.column;
      }, M.Range = C;
    }), ace.define("ace/lib/keys", ["require", "exports", "module", "ace/lib/oop"], function(S, M, H) {
      for (var C = S("./oop"), A = {
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
      }, w = {
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
      }, a = 0; a < 10; a++)
        w["Digit" + a] = 48 + a, w["Numpad" + a] = 96 + a, A.PRINTABLE_KEYS[48 + a] = "" + a, A.FUNCTION_KEYS[96 + a] = "Numpad" + a;
      for (var a = 65; a < 91; a++) {
        var u = String.fromCharCode(a + 32);
        w["Key" + u.toUpperCase()] = a, A.PRINTABLE_KEYS[a] = u;
      }
      for (var a = 1; a < 13; a++)
        w["F" + a] = 111 + a, A.FUNCTION_KEYS[111 + a] = "F" + a;
      var i = {
        Shift: 16,
        Control: 17,
        Alt: 18,
        Meta: 224
      };
      for (var o in i)
        w[o] = w[o + "Left"] = w[o + "Right"] = i[o];
      M.$codeToKeyCode = w, A.PRINTABLE_KEYS[173] = "-";
      for (var n in A.FUNCTION_KEYS) {
        var t = A.FUNCTION_KEYS[n].toLowerCase();
        A[t] = parseInt(n, 10);
      }
      for (var n in A.PRINTABLE_KEYS) {
        var t = A.PRINTABLE_KEYS[n].toLowerCase();
        A[t] = parseInt(n, 10);
      }
      C.mixin(A, A.MODIFIER_KEYS), C.mixin(A, A.PRINTABLE_KEYS), C.mixin(A, A.FUNCTION_KEYS), A.enter = A.return, A.escape = A.esc, A.del = A.delete, function() {
        for (var e = ["cmd", "ctrl", "alt", "shift"], r = Math.pow(2, e.length); r--; )
          A.KEY_MODS[r] = e.filter(function(s) {
            return r & A.KEY_MODS[s];
          }).join("-") + "-";
      }(), A.KEY_MODS[0] = "", A.KEY_MODS[-1] = "input-", C.mixin(M, A), M.default = M, M.keyCodeToString = function(e) {
        var r = A[e];
        return typeof r != "string" && (r = String.fromCharCode(e)), r.toLowerCase();
      };
    }), ace.define("ace/lib/event", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function(S, M, H) {
      var C = S("./keys"), A = S("./useragent"), w = null, a = 0, u;
      function i() {
        u = !1;
        try {
          document.createComment("").addEventListener("test", function() {
          }, {
            get passive() {
              return u = { passive: !1 }, !0;
            }
          });
        } catch {
        }
      }
      function o() {
        return u == null && i(), u;
      }
      function n(v, g, p) {
        this.elem = v, this.type = g, this.callback = p;
      }
      n.prototype.destroy = function() {
        e(this.elem, this.type, this.callback), this.elem = this.type = this.callback = void 0;
      };
      var t = M.addListener = function(v, g, p, h) {
        v.addEventListener(g, p, o()), h && h.$toDestroy.push(new n(v, g, p));
      }, e = M.removeListener = function(v, g, p) {
        v.removeEventListener(g, p, o());
      };
      M.stopEvent = function(v) {
        return M.stopPropagation(v), M.preventDefault(v), !1;
      }, M.stopPropagation = function(v) {
        v.stopPropagation && v.stopPropagation();
      }, M.preventDefault = function(v) {
        v.preventDefault && v.preventDefault();
      }, M.getButton = function(v) {
        return v.type == "dblclick" ? 0 : v.type == "contextmenu" || A.isMac && v.ctrlKey && !v.altKey && !v.shiftKey ? 2 : v.button;
      }, M.capture = function(v, g, p) {
        var h = v && v.ownerDocument || document;
        function b(E) {
          g && g(E), p && p(E), e(h, "mousemove", g), e(h, "mouseup", b), e(h, "dragstart", b);
        }
        return t(h, "mousemove", g), t(h, "mouseup", b), t(h, "dragstart", b), b;
      }, M.addMouseWheelListener = function(v, g, p) {
        t(v, "wheel", function(h) {
          var b = 0.15, E = h.deltaX || 0, L = h.deltaY || 0;
          switch (h.deltaMode) {
            case h.DOM_DELTA_PIXEL:
              h.wheelX = E * b, h.wheelY = L * b;
              break;
            case h.DOM_DELTA_LINE:
              var x = 15;
              h.wheelX = E * x, h.wheelY = L * x;
              break;
            case h.DOM_DELTA_PAGE:
              var O = 150;
              h.wheelX = E * O, h.wheelY = L * O;
              break;
          }
          g(h);
        }, p);
      }, M.addMultiMouseDownListener = function(v, g, p, h, b) {
        var E = 0, L, x, O, $ = {
          2: "dblclick",
          3: "tripleclick",
          4: "quadclick"
        };
        function y(f) {
          if (M.getButton(f) !== 0 ? E = 0 : f.detail > 1 ? (E++, E > 4 && (E = 1)) : E = 1, A.isIE) {
            var d = Math.abs(f.clientX - L) > 5 || Math.abs(f.clientY - x) > 5;
            (!O || d) && (E = 1), O && clearTimeout(O), O = setTimeout(function() {
              O = null;
            }, g[E - 1] || 600), E == 1 && (L = f.clientX, x = f.clientY);
          }
          if (f._clicks = E, p[h]("mousedown", f), E > 4)
            E = 0;
          else if (E > 1)
            return p[h]($[E], f);
        }
        Array.isArray(v) || (v = [v]), v.forEach(function(f) {
          t(f, "mousedown", y, b);
        });
      };
      function r(v) {
        return 0 | (v.ctrlKey ? 1 : 0) | (v.altKey ? 2 : 0) | (v.shiftKey ? 4 : 0) | (v.metaKey ? 8 : 0);
      }
      M.getModifierString = function(v) {
        return C.KEY_MODS[r(v)];
      };
      function s(v, g, p) {
        var h = r(g);
        if (!p && g.code && (p = C.$codeToKeyCode[g.code] || p), !A.isMac && w) {
          if (g.getModifierState && (g.getModifierState("OS") || g.getModifierState("Win")) && (h |= 8), w.altGr)
            if ((3 & h) != 3)
              w.altGr = 0;
            else
              return;
          if (p === 18 || p === 17) {
            var b = g.location;
            if (p === 17 && b === 1)
              w[p] == 1 && (a = g.timeStamp);
            else if (p === 18 && h === 3 && b === 2) {
              var E = g.timeStamp - a;
              E < 50 && (w.altGr = !0);
            }
          }
        }
        if (p in C.MODIFIER_KEYS && (p = -1), !(!h && p === 13 && g.location === 3 && (v(g, h, -p), g.defaultPrevented))) {
          if (A.isChromeOS && h & 8) {
            if (v(g, h, p), g.defaultPrevented)
              return;
            h &= -9;
          }
          return !h && !(p in C.FUNCTION_KEYS) && !(p in C.PRINTABLE_KEYS) ? !1 : v(g, h, p);
        }
      }
      M.addCommandKeyListener = function(v, g, p) {
        var h = null;
        t(v, "keydown", function(b) {
          w[b.keyCode] = (w[b.keyCode] || 0) + 1;
          var E = s(g, b, b.keyCode);
          return h = b.defaultPrevented, E;
        }, p), t(v, "keypress", function(b) {
          h && (b.ctrlKey || b.altKey || b.shiftKey || b.metaKey) && (M.stopEvent(b), h = null);
        }, p), t(v, "keyup", function(b) {
          w[b.keyCode] = null;
        }, p), w || (l(), t(window, "focus", l));
      };
      function l() {
        w = /* @__PURE__ */ Object.create(null);
      }
      if (typeof window == "object" && window.postMessage && !A.isOldIE) {
        var c = 1;
        M.nextTick = function(v, g) {
          g = g || window;
          var p = "zero-timeout-message-" + c++, h = function(b) {
            b.data == p && (M.stopPropagation(b), e(g, "message", h), v());
          };
          t(g, "message", h), g.postMessage(p, "*");
        };
      }
      M.$idleBlocked = !1, M.onIdle = function(v, g) {
        return setTimeout(function p() {
          M.$idleBlocked ? setTimeout(p, 100) : v();
        }, g);
      }, M.$idleBlockId = null, M.blockIdle = function(v) {
        M.$idleBlockId && clearTimeout(M.$idleBlockId), M.$idleBlocked = !0, M.$idleBlockId = setTimeout(function() {
          M.$idleBlocked = !1;
        }, v || 100);
      }, M.nextFrame = typeof window == "object" && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame), M.nextFrame ? M.nextFrame = M.nextFrame.bind(window) : M.nextFrame = function(v) {
        setTimeout(v, 17);
      };
    }), ace.define("ace/clipboard", ["require", "exports", "module"], function(S, M, H) {
      var C;
      H.exports = {
        lineMode: !1,
        pasteCancelled: function() {
          return C && C > Date.now() - 50 ? !0 : C = !1;
        },
        cancel: function() {
          C = Date.now();
        }
      };
    }), ace.define("ace/keyboard/textinput", ["require", "exports", "module", "ace/lib/event", "ace/config", "ace/lib/useragent", "ace/lib/dom", "ace/lib/lang", "ace/clipboard", "ace/lib/keys"], function(S, M, H) {
      var C = S("../lib/event"), A = S("../config").nls, w = S("../lib/useragent"), a = S("../lib/dom"), u = S("../lib/lang"), i = S("../clipboard"), o = w.isChrome < 18, n = w.isIE, t = w.isChrome > 63, e = 400, r = S("../lib/keys"), s = r.KEY_MODS, l = w.isIOS, c = l ? /\s/ : /\n/, v = w.isMobile, g;
      g = function(p, h) {
        var b = a.createElement("textarea");
        b.className = "ace_text-input", b.setAttribute("wrap", "off"), b.setAttribute("autocorrect", "off"), b.setAttribute("autocapitalize", "off"), b.setAttribute("spellcheck", "false"), b.style.opacity = "0", p.insertBefore(b, p.firstChild), this.setHost = function(U) {
          h = U;
        };
        var E = !1, L = !1, x = !1, O = !1, $ = "";
        v || (b.style.fontSize = "1px");
        var y = !1, f = !1, d = "", m = 0, k = 0, _ = 0, T = Number.MAX_SAFE_INTEGER, I = Number.MIN_SAFE_INTEGER, D = 0;
        try {
          var F = document.activeElement === b;
        } catch {
        }
        this.setNumberOfExtraLines = function(U) {
          if (T = Number.MAX_SAFE_INTEGER, I = Number.MIN_SAFE_INTEGER, U < 0) {
            D = 0;
            return;
          }
          D = U;
        }, this.setAriaLabel = function() {
          var U = "";
          if (h.$textInputAriaLabel && (U += "".concat(h.$textInputAriaLabel, ", ")), h.session) {
            var Z = h.session.selection.cursor.row;
            U += A("text-input.aria-label", "Cursor at row $0", [Z + 1]);
          }
          b.setAttribute("aria-label", U);
        }, this.setAriaOptions = function(U) {
          U.activeDescendant ? (b.setAttribute("aria-haspopup", "true"), b.setAttribute("aria-autocomplete", U.inline ? "both" : "list"), b.setAttribute("aria-activedescendant", U.activeDescendant)) : (b.setAttribute("aria-haspopup", "false"), b.setAttribute("aria-autocomplete", "both"), b.removeAttribute("aria-activedescendant")), U.role && b.setAttribute("role", U.role), U.setLabel && (b.setAttribute("aria-roledescription", A("text-input.aria-roledescription", "editor")), this.setAriaLabel());
        }, this.setAriaOptions({ role: "textbox" }), C.addListener(b, "blur", function(U) {
          f || (h.onBlur(U), F = !1);
        }, h), C.addListener(b, "focus", function(U) {
          if (!f) {
            if (F = !0, w.isEdge)
              try {
                if (!document.hasFocus())
                  return;
              } catch {
              }
            h.onFocus(U), w.isEdge ? setTimeout(z) : z();
          }
        }, h), this.$focusScroll = !1, this.focus = function() {
          if (this.setAriaOptions({
            setLabel: h.renderer.enableKeyboardAccessibility
          }), $ || t || this.$focusScroll == "browser")
            return b.focus({ preventScroll: !0 });
          var U = b.style.top;
          b.style.position = "fixed", b.style.top = "0px";
          try {
            var Z = b.getBoundingClientRect().top != 0;
          } catch {
            return;
          }
          var q = [];
          if (Z)
            for (var re = b.parentElement; re && re.nodeType == 1; )
              q.push(re), re.setAttribute("ace_nocontext", "true"), !re.parentElement && re.getRootNode ? re = re.getRootNode().host : re = re.parentElement;
          b.focus({ preventScroll: !0 }), Z && q.forEach(function(le) {
            le.removeAttribute("ace_nocontext");
          }), setTimeout(function() {
            b.style.position = "", b.style.top == "0px" && (b.style.top = U);
          }, 0);
        }, this.blur = function() {
          b.blur();
        }, this.isFocused = function() {
          return F;
        }, h.on("beforeEndOperation", function() {
          var U = h.curOp, Z = U && U.command && U.command.name;
          if (Z != "insertstring") {
            var q = Z && (U.docChanged || U.selectionChanged);
            x && q && (d = b.value = "", Se()), z();
          }
        }), h.on("changeSelection", this.setAriaLabel);
        var B = function(U, Z) {
          for (var q = Z, re = 1; re <= U - T && re < 2 * D + 1; re++)
            q += h.session.getLine(U - re).length + 1;
          return q;
        }, z = l ? function(U) {
          if (!(!F || E && !U || O)) {
            U || (U = "");
            var Z = `
 ab` + U + `cde fg
`;
            Z != b.value && (b.value = d = Z);
            var q = 4, re = 4 + (U.length || (h.selection.isEmpty() ? 0 : 1));
            (m != q || k != re) && b.setSelectionRange(q, re), m = q, k = re;
          }
        } : function() {
          if (!(x || O) && !(!F && !j)) {
            x = !0;
            var U = 0, Z = 0, q = "";
            if (h.session) {
              var re = h.selection, le = re.getRange(), fe = re.cursor.row;
              fe === I + 1 ? (T = I + 1, I = T + 2 * D) : fe === T - 1 ? (I = T - 1, T = I - 2 * D) : (fe < T - 1 || fe > I + 1) && (T = fe > D ? fe - D : 0, I = fe > D ? fe + D : 2 * D);
              for (var me = [], pe = T; pe <= I; pe++)
                me.push(h.session.getLine(pe));
              if (q = me.join(`
`), U = B(le.start.row, le.start.column), Z = B(le.end.row, le.end.column), le.start.row < T) {
                var de = h.session.getLine(T - 1);
                U = le.start.row < T - 1 ? 0 : U, Z += de.length + 1, q = de + `
` + q;
              } else if (le.end.row > I) {
                var ce = h.session.getLine(I + 1);
                Z = le.end.row > I + 1 ? ce.length : le.end.column, Z += q.length + 1, q = q + `
` + ce;
              } else v && fe > 0 && (q = `
` + q, Z += 1, U += 1);
              q.length > e && (U < e && Z < e ? q = q.slice(0, e) : (q = `
`, U == Z ? U = Z = 0 : (U = 0, Z = 1)));
              var $e = q + `

`;
              $e != d && (b.value = d = $e, m = k = $e.length);
            }
            if (j && (m = b.selectionStart, k = b.selectionEnd), k != Z || m != U || b.selectionEnd != k)
              try {
                b.setSelectionRange(U, Z), m = U, k = Z;
              } catch {
              }
            x = !1;
          }
        };
        this.resetSelection = z, F && h.onFocus();
        var W = function(U) {
          return U.selectionStart === 0 && U.selectionEnd >= d.length && U.value === d && d && U.selectionEnd !== k;
        }, P = function(U) {
          x || (E ? E = !1 : W(b) ? (h.selectAll(), z()) : v && b.selectionStart != m && z());
        }, V = null;
        this.setInputHandler = function(U) {
          V = U;
        }, this.getInputHandler = function() {
          return V;
        };
        var j = !1, Y = function(U, Z) {
          if (j && (j = !1), L)
            return z(), U && h.onPaste(U), L = !1, "";
          for (var q = b.selectionStart, re = b.selectionEnd, le = m, fe = d.length - k, me = U, pe = U.length - q, de = U.length - re, ce = 0; le > 0 && d[ce] == U[ce]; )
            ce++, le--;
          for (me = me.slice(ce), ce = 1; fe > 0 && d.length - ce > m - 1 && d[d.length - ce] == U[U.length - ce]; )
            ce++, fe--;
          pe -= ce - 1, de -= ce - 1;
          var $e = me.length - ce + 1;
          if ($e < 0 && (le = -$e, $e = 0), me = me.slice(0, $e), !Z && !me && !pe && !le && !fe && !de)
            return "";
          O = !0;
          var Ke = !1;
          return w.isAndroid && me == ". " && (me = "  ", Ke = !0), me && !le && !fe && !pe && !de || y ? h.onTextInput(me) : h.onTextInput(me, {
            extendLeft: le,
            extendRight: fe,
            restoreStart: pe,
            restoreEnd: de
          }), O = !1, d = U, m = q, k = re, _ = de, Ke ? `
` : me;
        }, G = function(U) {
          if (x)
            return xe();
          if (U && U.inputType) {
            if (U.inputType == "historyUndo")
              return h.execCommand("undo");
            if (U.inputType == "historyRedo")
              return h.execCommand("redo");
          }
          var Z = b.value, q = Y(Z, !0);
          (Z.length > e + 100 || c.test(q) || v && m < 1 && m == k) && z();
        }, J = function(U, Z, q) {
          var re = U.clipboardData || window.clipboardData;
          if (!(!re || o)) {
            var le = n || q ? "Text" : "text/plain";
            try {
              return Z ? re.setData(le, Z) !== !1 : re.getData(le);
            } catch (fe) {
              if (!q)
                return J(fe, Z, !0);
            }
          }
        }, ie = function(U, Z) {
          var q = h.getCopyText();
          if (!q)
            return C.preventDefault(U);
          J(U, q) ? (l && (z(q), E = q, setTimeout(function() {
            E = !1;
          }, 10)), Z ? h.onCut() : h.onCopy(), C.preventDefault(U)) : (E = !0, b.value = q, b.select(), setTimeout(function() {
            E = !1, z(), Z ? h.onCut() : h.onCopy();
          }));
        }, he = function(U) {
          ie(U, !0);
        }, ve = function(U) {
          ie(U, !1);
        }, ue = function(U) {
          var Z = J(U);
          i.pasteCancelled() || (typeof Z == "string" ? (Z && h.onPaste(Z, U), w.isIE && setTimeout(z), C.preventDefault(U)) : (b.value = "", L = !0));
        };
        C.addCommandKeyListener(b, function(U, Z, q) {
          if (!x)
            return h.onCommandKey(U, Z, q);
        }, h), C.addListener(b, "select", P, h), C.addListener(b, "input", G, h), C.addListener(b, "cut", he, h), C.addListener(b, "copy", ve, h), C.addListener(b, "paste", ue, h), (!("oncut" in b) || !("oncopy" in b) || !("onpaste" in b)) && C.addListener(p, "keydown", function(U) {
          if (!(w.isMac && !U.metaKey || !U.ctrlKey))
            switch (U.keyCode) {
              case 67:
                ve(U);
                break;
              case 86:
                ue(U);
                break;
              case 88:
                he(U);
                break;
            }
        }, h);
        var Ce = function(U) {
          if (!(x || !h.onCompositionStart || h.$readOnly) && (x = {}, !y)) {
            U.data && (x.useTextareaForIME = !1), setTimeout(xe, 0), h._signal("compositionStart"), h.on("mousedown", _e);
            var Z = h.getSelectionRange();
            Z.end.row = Z.start.row, Z.end.column = Z.start.column, x.markerRange = Z, x.selectionStart = m, h.onCompositionStart(x), x.useTextareaForIME ? (d = b.value = "", m = 0, k = 0) : (b.msGetInputContext && (x.context = b.msGetInputContext()), b.getInputContext && (x.context = b.getInputContext()));
          }
        }, xe = function() {
          if (!(!x || !h.onCompositionUpdate || h.$readOnly)) {
            if (y)
              return _e();
            if (x.useTextareaForIME)
              h.onCompositionUpdate(b.value);
            else {
              var U = b.value;
              Y(U), x.markerRange && (x.context && (x.markerRange.start.column = x.selectionStart = x.context.compositionStartOffset), x.markerRange.end.column = x.markerRange.start.column + k - x.selectionStart + _);
            }
          }
        }, Se = function(U) {
          !h.onCompositionEnd || h.$readOnly || (x = !1, h.onCompositionEnd(), h.off("mousedown", _e), U && G());
        };
        function _e() {
          f = !0, b.blur(), b.focus(), f = !1;
        }
        var mt = u.delayedCall(xe, 50).schedule.bind(null, null);
        function nn(U) {
          U.keyCode == 27 && b.value.length < b.selectionStart && (x || (d = b.value), m = k = -1, z()), mt();
        }
        C.addListener(b, "compositionstart", Ce, h), C.addListener(b, "compositionupdate", xe, h), C.addListener(b, "keyup", nn, h), C.addListener(b, "keydown", mt, h), C.addListener(b, "compositionend", Se, h), this.getElement = function() {
          return b;
        }, this.setCommandMode = function(U) {
          y = U, b.readOnly = !1;
        }, this.setReadOnly = function(U) {
          y || (b.readOnly = U);
        }, this.setCopyWithEmptySelection = function(U) {
        }, this.onContextMenu = function(U) {
          j = !0, z(), h._emit("nativecontextmenu", { target: h, domEvent: U }), this.moveToMouse(U, !0);
        }, this.moveToMouse = function(U, Z) {
          $ || ($ = b.style.cssText), b.style.cssText = (Z ? "z-index:100000;" : "") + (w.isIE ? "opacity:0.1;" : "") + "text-indent: -" + (m + k) * h.renderer.characterWidth * 0.5 + "px;";
          var q = h.container.getBoundingClientRect(), re = a.computedStyle(h.container), le = q.top + (parseInt(re.borderTopWidth) || 0), fe = q.left + (parseInt(re.borderLeftWidth) || 0), me = q.bottom - le - b.clientHeight - 2, pe = function(de) {
            a.translate(b, de.clientX - fe - 2, Math.min(de.clientY - le - 2, me));
          };
          pe(U), U.type == "mousedown" && (h.renderer.$isMousePressed = !0, clearTimeout(at), w.isWin && C.capture(h.container, pe, tt));
        }, this.onContextMenuClose = tt;
        var at;
        function tt() {
          clearTimeout(at), at = setTimeout(function() {
            $ && (b.style.cssText = $, $ = ""), h.renderer.$isMousePressed = !1, h.renderer.$keepTextAreaAtCursor && h.renderer.$moveTextAreaToCursor();
          }, 0);
        }
        var lt = function(U) {
          h.textInput.onContextMenu(U), tt();
        };
        C.addListener(b, "mouseup", lt, h), C.addListener(b, "mousedown", function(U) {
          U.preventDefault(), tt();
        }, h), C.addListener(h.renderer.scroller, "contextmenu", lt, h), C.addListener(b, "contextmenu", lt, h), l && rn(p, h, b);
        function rn(U, Z, q) {
          var re = null, le = !1;
          q.addEventListener("keydown", function(me) {
            re && clearTimeout(re), le = !0;
          }, !0), q.addEventListener("keyup", function(me) {
            re = setTimeout(function() {
              le = !1;
            }, 100);
          }, !0);
          var fe = function(me) {
            if (document.activeElement === q && !(le || x || Z.$mouseHandler.isMousePressed) && !E) {
              var pe = q.selectionStart, de = q.selectionEnd, ce = null, $e = 0;
              if (pe == 0 ? ce = r.up : pe == 1 ? ce = r.home : de > k && d[de] == `
` ? ce = r.end : pe < m && d[pe - 1] == " " ? (ce = r.left, $e = s.option) : pe < m || pe == m && k != m && pe == de ? ce = r.left : de > k && d.slice(0, de).split(`
`).length > 2 ? ce = r.down : de > k && d[de - 1] == " " ? (ce = r.right, $e = s.option) : (de > k || de == k && k != m && pe == de) && (ce = r.right), pe !== de && ($e |= s.shift), ce) {
                var Ke = Z.onCommandKey({}, $e, ce);
                if (!Ke && Z.commands) {
                  ce = r.keyCodeToString(ce);
                  var yt = Z.commands.findKeyCommand($e, ce);
                  yt && Z.execCommand(yt);
                }
                m = pe, k = de, z("");
              }
            }
          };
          document.addEventListener("selectionchange", fe), Z.on("destroy", function() {
            document.removeEventListener("selectionchange", fe);
          });
        }
        this.destroy = function() {
          b.parentElement && b.parentElement.removeChild(b);
        };
      }, M.TextInput = g, M.$setUserAgentForTests = function(p, h) {
        v = p, l = h;
      };
    }), ace.define("ace/mouse/default_handlers", ["require", "exports", "module", "ace/lib/useragent"], function(S, M, H) {
      var C = S("../lib/useragent"), A = 0, w = 550, a = (
        /** @class */
        function() {
          function o(n) {
            n.$clickSelection = null;
            var t = n.editor;
            t.setDefaultHandler("mousedown", this.onMouseDown.bind(n)), t.setDefaultHandler("dblclick", this.onDoubleClick.bind(n)), t.setDefaultHandler("tripleclick", this.onTripleClick.bind(n)), t.setDefaultHandler("quadclick", this.onQuadClick.bind(n)), t.setDefaultHandler("mousewheel", this.onMouseWheel.bind(n));
            var e = [
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
            e.forEach(function(r) {
              n[r] = this[r];
            }, this), n.selectByLines = this.extendSelectionBy.bind(n, "getLineRange"), n.selectByWords = this.extendSelectionBy.bind(n, "getWordRange");
          }
          return o.prototype.onMouseDown = function(n) {
            var t = n.inSelection(), e = n.getDocumentPosition();
            this.mousedownEvent = n;
            var r = this.editor, s = n.getButton();
            if (s !== 0) {
              var l = r.getSelectionRange(), c = l.isEmpty();
              (c || s == 1) && r.selection.moveToPosition(e), s == 2 && (r.textInput.onContextMenu(n.domEvent), C.isMozilla || n.preventDefault());
              return;
            }
            if (this.mousedownEvent.time = Date.now(), t && !r.isFocused() && (r.focus(), this.$focusTimeout && !this.$clickSelection && !r.inMultiSelectMode)) {
              this.setState("focusWait"), this.captureMouse(n);
              return;
            }
            return this.captureMouse(n), this.startSelect(e, n.domEvent._clicks > 1), n.preventDefault();
          }, o.prototype.startSelect = function(n, t) {
            n = n || this.editor.renderer.screenToTextCoordinates(this.x, this.y);
            var e = this.editor;
            this.mousedownEvent && (this.mousedownEvent.getShiftKey() ? e.selection.selectToPosition(n) : t || e.selection.moveToPosition(n), t || this.select(), e.setStyle("ace_selecting"), this.setState("select"));
          }, o.prototype.select = function() {
            var n, t = this.editor, e = t.renderer.screenToTextCoordinates(this.x, this.y);
            if (this.$clickSelection) {
              var r = this.$clickSelection.comparePoint(e);
              if (r == -1)
                n = this.$clickSelection.end;
              else if (r == 1)
                n = this.$clickSelection.start;
              else {
                var s = i(this.$clickSelection, e);
                e = s.cursor, n = s.anchor;
              }
              t.selection.setSelectionAnchor(n.row, n.column);
            }
            t.selection.selectToPosition(e), t.renderer.scrollCursorIntoView();
          }, o.prototype.extendSelectionBy = function(n) {
            var t, e = this.editor, r = e.renderer.screenToTextCoordinates(this.x, this.y), s = e.selection[n](r.row, r.column);
            if (this.$clickSelection) {
              var l = this.$clickSelection.comparePoint(s.start), c = this.$clickSelection.comparePoint(s.end);
              if (l == -1 && c <= 0)
                t = this.$clickSelection.end, (s.end.row != r.row || s.end.column != r.column) && (r = s.start);
              else if (c == 1 && l >= 0)
                t = this.$clickSelection.start, (s.start.row != r.row || s.start.column != r.column) && (r = s.end);
              else if (l == -1 && c == 1)
                r = s.end, t = s.start;
              else {
                var v = i(this.$clickSelection, r);
                r = v.cursor, t = v.anchor;
              }
              e.selection.setSelectionAnchor(t.row, t.column);
            }
            e.selection.selectToPosition(r), e.renderer.scrollCursorIntoView();
          }, o.prototype.selectByLinesEnd = function() {
            this.$clickSelection = null, this.editor.unsetStyle("ace_selecting");
          }, o.prototype.focusWait = function() {
            var n = u(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y), t = Date.now();
            (n > A || t - this.mousedownEvent.time > this.$focusTimeout) && this.startSelect(this.mousedownEvent.getDocumentPosition());
          }, o.prototype.onDoubleClick = function(n) {
            var t = n.getDocumentPosition(), e = this.editor, r = e.session, s = r.getBracketRange(t);
            s ? (s.isEmpty() && (s.start.column--, s.end.column++), this.setState("select")) : (s = e.selection.getWordRange(t.row, t.column), this.setState("selectByWords")), this.$clickSelection = s, this.select();
          }, o.prototype.onTripleClick = function(n) {
            var t = n.getDocumentPosition(), e = this.editor;
            this.setState("selectByLines");
            var r = e.getSelectionRange();
            r.isMultiLine() && r.contains(t.row, t.column) ? (this.$clickSelection = e.selection.getLineRange(r.start.row), this.$clickSelection.end = e.selection.getLineRange(r.end.row).end) : this.$clickSelection = e.selection.getLineRange(t.row), this.select();
          }, o.prototype.onQuadClick = function(n) {
            var t = this.editor;
            t.selectAll(), this.$clickSelection = t.getSelectionRange(), this.setState("selectAll");
          }, o.prototype.onMouseWheel = function(n) {
            if (!n.getAccelKey()) {
              n.getShiftKey() && n.wheelY && !n.wheelX && (n.wheelX = n.wheelY, n.wheelY = 0);
              var t = this.editor;
              this.$lastScroll || (this.$lastScroll = { t: 0, vx: 0, vy: 0, allowed: 0 });
              var e = this.$lastScroll, r = n.domEvent.timeStamp, s = r - e.t, l = s ? n.wheelX / s : e.vx, c = s ? n.wheelY / s : e.vy;
              s < w && (l = (l + e.vx) / 2, c = (c + e.vy) / 2);
              var v = Math.abs(l / c), g = !1;
              if (v >= 1 && t.renderer.isScrollableBy(n.wheelX * n.speed, 0) && (g = !0), v <= 1 && t.renderer.isScrollableBy(0, n.wheelY * n.speed) && (g = !0), g)
                e.allowed = r;
              else if (r - e.allowed < w) {
                var p = Math.abs(l) <= 1.5 * Math.abs(e.vx) && Math.abs(c) <= 1.5 * Math.abs(e.vy);
                p ? (g = !0, e.allowed = r) : e.allowed = 0;
              }
              if (e.t = r, e.vx = l, e.vy = c, g)
                return t.renderer.scrollBy(n.wheelX * n.speed, n.wheelY * n.speed), n.stop();
            }
          }, o;
        }()
      );
      a.prototype.selectEnd = a.prototype.selectByLinesEnd, a.prototype.selectAllEnd = a.prototype.selectByLinesEnd, a.prototype.selectByWordsEnd = a.prototype.selectByLinesEnd, M.DefaultHandlers = a;
      function u(o, n, t, e) {
        return Math.sqrt(Math.pow(t - o, 2) + Math.pow(e - n, 2));
      }
      function i(o, n) {
        if (o.start.row == o.end.row)
          var t = 2 * n.column - o.start.column - o.end.column;
        else if (o.start.row == o.end.row - 1 && !o.start.column && !o.end.column)
          var t = n.column - 4;
        else
          var t = 2 * n.row - o.start.row - o.end.row;
        return t < 0 ? { cursor: o.start, anchor: o.end } : { cursor: o.end, anchor: o.start };
      }
    }), ace.define("ace/lib/scroll", ["require", "exports", "module"], function(S, M, H) {
      M.preventParentScroll = function(A) {
        A.stopPropagation();
        var w = A.currentTarget, a = w.scrollHeight > w.clientHeight;
        a || A.preventDefault();
      };
    }), ace.define("ace/tooltip", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/range", "ace/lib/scroll"], function(S, M, H) {
      var C = this && this.__extends || /* @__PURE__ */ function() {
        var r = function(s, l) {
          return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, v) {
            c.__proto__ = v;
          } || function(c, v) {
            for (var g in v) Object.prototype.hasOwnProperty.call(v, g) && (c[g] = v[g]);
          }, r(s, l);
        };
        return function(s, l) {
          if (typeof l != "function" && l !== null)
            throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
          r(s, l);
          function c() {
            this.constructor = s;
          }
          s.prototype = l === null ? Object.create(l) : (c.prototype = l.prototype, new c());
        };
      }(), A = this && this.__values || function(r) {
        var s = typeof Symbol == "function" && Symbol.iterator, l = s && r[s], c = 0;
        if (l) return l.call(r);
        if (r && typeof r.length == "number") return {
          next: function() {
            return r && c >= r.length && (r = void 0), { value: r && r[c++], done: !r };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }, w = S("./lib/dom");
      S("./lib/event");
      var a = S("./range").Range, u = S("./lib/scroll").preventParentScroll, i = "ace_tooltip", o = (
        /** @class */
        function() {
          function r(s) {
            this.isOpen = !1, this.$element = null, this.$parentNode = s;
          }
          return r.prototype.$init = function() {
            return this.$element = w.createElement("div"), this.$element.className = i, this.$element.style.display = "none", this.$parentNode.appendChild(this.$element), this.$element;
          }, r.prototype.getElement = function() {
            return this.$element || this.$init();
          }, r.prototype.setText = function(s) {
            this.getElement().textContent = s;
          }, r.prototype.setHtml = function(s) {
            this.getElement().innerHTML = s;
          }, r.prototype.setPosition = function(s, l) {
            this.getElement().style.left = s + "px", this.getElement().style.top = l + "px";
          }, r.prototype.setClassName = function(s) {
            w.addCssClass(this.getElement(), s);
          }, r.prototype.setTheme = function(s) {
            this.$element.className = i + " " + (s.isDark ? "ace_dark " : "") + (s.cssClass || "");
          }, r.prototype.show = function(s, l, c) {
            s != null && this.setText(s), l != null && c != null && this.setPosition(l, c), this.isOpen || (this.getElement().style.display = "block", this.isOpen = !0);
          }, r.prototype.hide = function(s) {
            this.isOpen && (this.getElement().style.display = "none", this.getElement().className = i, this.isOpen = !1);
          }, r.prototype.getHeight = function() {
            return this.getElement().offsetHeight;
          }, r.prototype.getWidth = function() {
            return this.getElement().offsetWidth;
          }, r.prototype.destroy = function() {
            this.isOpen = !1, this.$element && this.$element.parentNode && this.$element.parentNode.removeChild(this.$element);
          }, r;
        }()
      ), n = (
        /** @class */
        function() {
          function r() {
            this.popups = [];
          }
          return r.prototype.addPopup = function(s) {
            this.popups.push(s), this.updatePopups();
          }, r.prototype.removePopup = function(s) {
            var l = this.popups.indexOf(s);
            l !== -1 && (this.popups.splice(l, 1), this.updatePopups());
          }, r.prototype.updatePopups = function() {
            var s, l, c, v;
            this.popups.sort(function($, y) {
              return y.priority - $.priority;
            });
            var g = [];
            try {
              for (var p = A(this.popups), h = p.next(); !h.done; h = p.next()) {
                var b = h.value, E = !0;
                try {
                  for (var L = (c = void 0, A(g)), x = L.next(); !x.done; x = L.next()) {
                    var O = x.value;
                    if (this.doPopupsOverlap(O, b)) {
                      E = !1;
                      break;
                    }
                  }
                } catch ($) {
                  c = { error: $ };
                } finally {
                  try {
                    x && !x.done && (v = L.return) && v.call(L);
                  } finally {
                    if (c) throw c.error;
                  }
                }
                E ? g.push(b) : b.hide();
              }
            } catch ($) {
              s = { error: $ };
            } finally {
              try {
                h && !h.done && (l = p.return) && l.call(p);
              } finally {
                if (s) throw s.error;
              }
            }
          }, r.prototype.doPopupsOverlap = function(s, l) {
            var c = s.getElement().getBoundingClientRect(), v = l.getElement().getBoundingClientRect();
            return c.left < v.right && c.right > v.left && c.top < v.bottom && c.bottom > v.top;
          }, r;
        }()
      ), t = new n();
      M.popupManager = t, M.Tooltip = o;
      var e = (
        /** @class */
        function(r) {
          C(s, r);
          function s(l) {
            l === void 0 && (l = document.body);
            var c = r.call(this, l) || this;
            c.timeout = void 0, c.lastT = 0, c.idleTime = 350, c.lastEvent = void 0, c.onMouseOut = c.onMouseOut.bind(c), c.onMouseMove = c.onMouseMove.bind(c), c.waitForHover = c.waitForHover.bind(c), c.hide = c.hide.bind(c);
            var v = c.getElement();
            return v.style.whiteSpace = "pre-wrap", v.style.pointerEvents = "auto", v.addEventListener("mouseout", c.onMouseOut), v.tabIndex = -1, v.addEventListener("blur", (function() {
              v.contains(document.activeElement) || this.hide();
            }).bind(c)), v.addEventListener("wheel", u), c;
          }
          return s.prototype.addToEditor = function(l) {
            l.on("mousemove", this.onMouseMove), l.on("mousedown", this.hide), l.renderer.getMouseEventTarget().addEventListener("mouseout", this.onMouseOut, !0);
          }, s.prototype.removeFromEditor = function(l) {
            l.off("mousemove", this.onMouseMove), l.off("mousedown", this.hide), l.renderer.getMouseEventTarget().removeEventListener("mouseout", this.onMouseOut, !0), this.timeout && (clearTimeout(this.timeout), this.timeout = null);
          }, s.prototype.onMouseMove = function(l, c) {
            this.lastEvent = l, this.lastT = Date.now();
            var v = c.$mouseHandler.isMousePressed;
            if (this.isOpen) {
              var g = this.lastEvent && this.lastEvent.getDocumentPosition();
              (!this.range || !this.range.contains(g.row, g.column) || v || this.isOutsideOfText(this.lastEvent)) && this.hide();
            }
            this.timeout || v || (this.lastEvent = l, this.timeout = setTimeout(this.waitForHover, this.idleTime));
          }, s.prototype.waitForHover = function() {
            this.timeout && clearTimeout(this.timeout);
            var l = Date.now() - this.lastT;
            if (this.idleTime - l > 10) {
              this.timeout = setTimeout(this.waitForHover, this.idleTime - l);
              return;
            }
            this.timeout = null, this.lastEvent && !this.isOutsideOfText(this.lastEvent) && this.$gatherData(this.lastEvent, this.lastEvent.editor);
          }, s.prototype.isOutsideOfText = function(l) {
            var c = l.editor, v = l.getDocumentPosition(), g = c.session.getLine(v.row);
            if (v.column == g.length) {
              var p = c.renderer.pixelToScreenCoordinates(l.clientX, l.clientY), h = c.session.documentToScreenPosition(v.row, v.column);
              if (h.column != p.column || h.row != p.row)
                return !0;
            }
            return !1;
          }, s.prototype.setDataProvider = function(l) {
            this.$gatherData = l;
          }, s.prototype.showForRange = function(l, c, v, g) {
            var p = 10;
            if (!(g && g != this.lastEvent) && !(this.isOpen && document.activeElement == this.getElement())) {
              var h = l.renderer;
              this.isOpen || (t.addPopup(this), this.$registerCloseEvents(), this.setTheme(h.theme)), this.isOpen = !0, this.addMarker(c, l.session), this.range = a.fromPoints(c.start, c.end);
              var b = h.textToScreenCoordinates(c.start.row, c.start.column), E = h.scroller.getBoundingClientRect();
              b.pageX < E.left && (b.pageX = E.left);
              var L = this.getElement();
              L.innerHTML = "", L.appendChild(v), L.style.maxHeight = "", L.style.display = "block";
              var x = L.clientHeight, O = L.clientWidth, $ = window.innerHeight - b.pageY - h.lineHeight, y = !0;
              b.pageY - x < 0 && b.pageY < $ && (y = !1), L.style.maxHeight = (y ? b.pageY : $) - p + "px", L.style.top = y ? "" : b.pageY + h.lineHeight + "px", L.style.bottom = y ? window.innerHeight - b.pageY + "px" : "", L.style.left = Math.min(b.pageX, window.innerWidth - O - p) + "px";
            }
          }, s.prototype.addMarker = function(l, c) {
            this.marker && this.$markerSession.removeMarker(this.marker), this.$markerSession = c, this.marker = c && c.addMarker(l, "ace_highlight-marker", "text");
          }, s.prototype.hide = function(l) {
            !l && document.activeElement == this.getElement() || l && l.target && (l.type != "keydown" || l.ctrlKey || l.metaKey) && this.$element.contains(l.target) || (this.lastEvent = null, this.timeout && clearTimeout(this.timeout), this.timeout = null, this.addMarker(null), this.isOpen && (this.$removeCloseEvents(), this.getElement().style.display = "none", this.isOpen = !1, t.removePopup(this)));
          }, s.prototype.$registerCloseEvents = function() {
            window.addEventListener("keydown", this.hide, !0), window.addEventListener("wheel", this.hide, !0), window.addEventListener("mousedown", this.hide, !0);
          }, s.prototype.$removeCloseEvents = function() {
            window.removeEventListener("keydown", this.hide, !0), window.removeEventListener("wheel", this.hide, !0), window.removeEventListener("mousedown", this.hide, !0);
          }, s.prototype.onMouseOut = function(l) {
            this.timeout && (clearTimeout(this.timeout), this.timeout = null), this.lastEvent = null, this.isOpen && (!l.relatedTarget || this.getElement().contains(l.relatedTarget) || l && l.currentTarget.contains(l.relatedTarget) || l.relatedTarget.classList.contains("ace_content") || this.hide());
          }, s;
        }(o)
      );
      M.HoverTooltip = e;
    }), ace.define("ace/mouse/default_gutter_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/tooltip", "ace/config"], function(S, M, H) {
      var C = this && this.__extends || /* @__PURE__ */ function() {
        var r = function(s, l) {
          return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, v) {
            c.__proto__ = v;
          } || function(c, v) {
            for (var g in v) Object.prototype.hasOwnProperty.call(v, g) && (c[g] = v[g]);
          }, r(s, l);
        };
        return function(s, l) {
          if (typeof l != "function" && l !== null)
            throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
          r(s, l);
          function c() {
            this.constructor = s;
          }
          s.prototype = l === null ? Object.create(l) : (c.prototype = l.prototype, new c());
        };
      }(), A = this && this.__values || function(r) {
        var s = typeof Symbol == "function" && Symbol.iterator, l = s && r[s], c = 0;
        if (l) return l.call(r);
        if (r && typeof r.length == "number") return {
          next: function() {
            return r && c >= r.length && (r = void 0), { value: r && r[c++], done: !r };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }, w = S("../lib/dom"), a = S("../lib/event"), u = S("../tooltip").Tooltip, i = S("../config").nls, o = 5, n = 3;
      M.GUTTER_TOOLTIP_LEFT_OFFSET = o, M.GUTTER_TOOLTIP_TOP_OFFSET = n;
      function t(r) {
        var s = r.editor, l = s.renderer.$gutterLayer, c = new e(s, !0);
        r.editor.setDefaultHandler("guttermousedown", function(E) {
          if (!(!s.isFocused() || E.getButton() != 0)) {
            var L = l.getRegion(E);
            if (L != "foldWidgets") {
              var x = E.getDocumentPosition().row, O = s.session.selection;
              if (E.getShiftKey())
                O.selectTo(x, 0);
              else {
                if (E.domEvent.detail == 2)
                  return s.selectAll(), E.preventDefault();
                r.$clickSelection = s.selection.getLineRange(x);
              }
              return r.setState("selectByLines"), r.captureMouse(E), E.preventDefault();
            }
          }
        });
        var v, g;
        function p() {
          var E = g.getDocumentPosition().row, L = s.session.getLength();
          if (E == L) {
            var x = s.renderer.pixelToScreenCoordinates(0, g.y).row, O = g.$pos;
            if (x > s.session.documentToScreenRow(O.row, O.column))
              return h();
          }
          if (c.showTooltip(E), !!c.isOpen)
            if (s.on("mousewheel", h), s.on("changeSession", h), window.addEventListener("keydown", h, !0), r.$tooltipFollowsMouse)
              b(g);
            else {
              var $ = g.getGutterRow(), y = l.$lines.get($);
              if (y) {
                var f = y.element.querySelector(".ace_gutter_annotation"), d = f.getBoundingClientRect(), m = c.getElement().style;
                m.left = d.right - o + "px", m.top = d.bottom - n + "px";
              } else
                b(g);
            }
        }
        function h(E) {
          E && E.type === "keydown" && (E.ctrlKey || E.metaKey) || E && E.type === "mouseout" && (!E.relatedTarget || c.getElement().contains(E.relatedTarget)) || (v && (v = clearTimeout(v)), c.isOpen && (c.hideTooltip(), s.off("mousewheel", h), s.off("changeSession", h), window.removeEventListener("keydown", h, !0)));
        }
        function b(E) {
          c.setPosition(E.x, E.y);
        }
        r.editor.setDefaultHandler("guttermousemove", function(E) {
          var L = E.domEvent.target || E.domEvent.srcElement;
          if (w.hasCssClass(L, "ace_fold-widget") || w.hasCssClass(L, "ace_custom-widget"))
            return h();
          c.isOpen && r.$tooltipFollowsMouse && b(E), g = E, !v && (v = setTimeout(function() {
            v = null, g && !r.isMousePressed && p();
          }, 50));
        }), a.addListener(s.renderer.$gutter, "mouseout", function(E) {
          g = null, c.isOpen && (v = setTimeout(function() {
            v = null, h(E);
          }, 50));
        }, s);
      }
      M.GutterHandler = t;
      var e = (
        /** @class */
        function(r) {
          C(s, r);
          function s(l, c) {
            c === void 0 && (c = !1);
            var v = r.call(this, l.container) || this;
            v.editor = l, v.visibleTooltipRow;
            var g = v.getElement();
            return g.setAttribute("role", "tooltip"), g.style.pointerEvents = "auto", c && (v.onMouseOut = v.onMouseOut.bind(v), g.addEventListener("mouseout", v.onMouseOut)), v;
          }
          return s.prototype.onMouseOut = function(l) {
            this.isOpen && (!l.relatedTarget || this.getElement().contains(l.relatedTarget) || l && l.currentTarget.contains(l.relatedTarget) || this.hideTooltip());
          }, s.prototype.setPosition = function(l, c) {
            var v = window.innerWidth || document.documentElement.clientWidth, g = window.innerHeight || document.documentElement.clientHeight, p = this.getWidth(), h = this.getHeight();
            l += 15, c += 15, l + p > v && (l -= l + p - v), c + h > g && (c -= 20 + h), u.prototype.setPosition.call(this, l, c);
          }, Object.defineProperty(s, "annotationLabels", {
            get: function() {
              return {
                error: {
                  singular: i("gutter-tooltip.aria-label.error.singular", "error"),
                  plural: i("gutter-tooltip.aria-label.error.plural", "errors")
                },
                security: {
                  singular: i("gutter-tooltip.aria-label.security.singular", "security finding"),
                  plural: i("gutter-tooltip.aria-label.security.plural", "security findings")
                },
                warning: {
                  singular: i("gutter-tooltip.aria-label.warning.singular", "warning"),
                  plural: i("gutter-tooltip.aria-label.warning.plural", "warnings")
                },
                info: {
                  singular: i("gutter-tooltip.aria-label.info.singular", "information message"),
                  plural: i("gutter-tooltip.aria-label.info.plural", "information messages")
                },
                hint: {
                  singular: i("gutter-tooltip.aria-label.hint.singular", "suggestion"),
                  plural: i("gutter-tooltip.aria-label.hint.plural", "suggestions")
                }
              };
            },
            enumerable: !1,
            configurable: !0
          }), s.prototype.showTooltip = function(l) {
            var c, v = this.editor.renderer.$gutterLayer, g = v.$annotations[l], p;
            g ? p = {
              displayText: Array.from(g.displayText),
              type: Array.from(g.type)
            } : p = { displayText: [], type: [] };
            var h = v.session.getFoldLine(l);
            if (h && v.$showFoldedAnnotations) {
              for (var b = { error: [], security: [], warning: [], info: [], hint: [] }, E = { error: 1, security: 2, warning: 3, info: 4, hint: 5 }, L, x = l + 1; x <= h.end.row; x++)
                if (v.$annotations[x])
                  for (var O = 0; O < v.$annotations[x].text.length; O++) {
                    var $ = v.$annotations[x].type[O];
                    b[$].push(v.$annotations[x].text[O]), (!L || E[$] < E[L]) && (L = $);
                  }
              if (["error", "security", "warning"].includes(L)) {
                var y = "".concat(s.annotationsToSummaryString(b), " in folded code.");
                p.displayText.push(y), p.type.push(L + "_fold");
              }
            }
            if (p.displayText.length === 0)
              return this.hideTooltip();
            for (var f = { error: [], security: [], warning: [], info: [], hint: [] }, d = v.$useSvgGutterIcons ? "ace_icon_svg" : "ace_icon", x = 0; x < p.displayText.length; x++) {
              var m = w.createElement("span"), k = w.createElement("span");
              (c = k.classList).add.apply(c, ["ace_".concat(p.type[x]), d]), k.setAttribute("aria-label", "".concat(s.annotationLabels[p.type[x].replace("_fold", "")].singular)), k.setAttribute("role", "img"), k.appendChild(w.createTextNode(" ")), m.appendChild(k), m.appendChild(w.createTextNode(p.displayText[x])), m.appendChild(w.createElement("br")), f[p.type[x].replace("_fold", "")].push(m);
            }
            var _ = this.getElement();
            w.removeChildren(_), f.error.forEach(function(T) {
              return _.appendChild(T);
            }), f.security.forEach(function(T) {
              return _.appendChild(T);
            }), f.warning.forEach(function(T) {
              return _.appendChild(T);
            }), f.info.forEach(function(T) {
              return _.appendChild(T);
            }), f.hint.forEach(function(T) {
              return _.appendChild(T);
            }), _.setAttribute("aria-live", "polite"), this.isOpen || (this.setTheme(this.editor.renderer.theme), this.setClassName("ace_gutter-tooltip")), this.show(), this.visibleTooltipRow = l, this.editor._signal("showGutterTooltip", this);
          }, s.prototype.hideTooltip = function() {
            this.isOpen && (this.$element.removeAttribute("aria-live"), this.hide(), this.visibleTooltipRow = void 0, this.editor._signal("hideGutterTooltip", this));
          }, s.annotationsToSummaryString = function(l) {
            var c, v, g = [], p = ["error", "security", "warning", "info", "hint"];
            try {
              for (var h = A(p), b = h.next(); !b.done; b = h.next()) {
                var E = b.value;
                if (l[E].length) {
                  var L = l[E].length === 1 ? s.annotationLabels[E].singular : s.annotationLabels[E].plural;
                  g.push("".concat(l[E].length, " ").concat(L));
                }
              }
            } catch (x) {
              c = { error: x };
            } finally {
              try {
                b && !b.done && (v = h.return) && v.call(h);
              } finally {
                if (c) throw c.error;
              }
            }
            return g.join(", ");
          }, s;
        }(u)
      );
      M.GutterTooltip = e;
    }), ace.define("ace/mouse/mouse_event", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function(S, M, H) {
      var C = S("../lib/event"), A = S("../lib/useragent"), w = (
        /** @class */
        function() {
          function a(u, i) {
            this.speed, this.wheelX, this.wheelY, this.domEvent = u, this.editor = i, this.x = this.clientX = u.clientX, this.y = this.clientY = u.clientY, this.$pos = null, this.$inSelection = null, this.propagationStopped = !1, this.defaultPrevented = !1;
          }
          return a.prototype.stopPropagation = function() {
            C.stopPropagation(this.domEvent), this.propagationStopped = !0;
          }, a.prototype.preventDefault = function() {
            C.preventDefault(this.domEvent), this.defaultPrevented = !0;
          }, a.prototype.stop = function() {
            this.stopPropagation(), this.preventDefault();
          }, a.prototype.getDocumentPosition = function() {
            return this.$pos ? this.$pos : (this.$pos = this.editor.renderer.screenToTextCoordinates(this.clientX, this.clientY), this.$pos);
          }, a.prototype.getGutterRow = function() {
            var u = this.getDocumentPosition().row, i = this.editor.session.documentToScreenRow(u, 0), o = this.editor.session.documentToScreenRow(this.editor.renderer.$gutterLayer.$lines.get(0).row, 0);
            return i - o;
          }, a.prototype.inSelection = function() {
            if (this.$inSelection !== null)
              return this.$inSelection;
            var u = this.editor, i = u.getSelectionRange();
            if (i.isEmpty())
              this.$inSelection = !1;
            else {
              var o = this.getDocumentPosition();
              this.$inSelection = i.contains(o.row, o.column);
            }
            return this.$inSelection;
          }, a.prototype.getButton = function() {
            return C.getButton(this.domEvent);
          }, a.prototype.getShiftKey = function() {
            return this.domEvent.shiftKey;
          }, a.prototype.getAccelKey = function() {
            return A.isMac ? this.domEvent.metaKey : this.domEvent.ctrlKey;
          }, a;
        }()
      );
      M.MouseEvent = w;
    }), ace.define("ace/mouse/dragdrop_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/lib/useragent"], function(S, M, H) {
      var C = S("../lib/dom"), A = S("../lib/event"), w = S("../lib/useragent"), a = 200, u = 200, i = 5;
      function o(t) {
        var e = t.editor, r = C.createElement("div");
        r.style.cssText = "top:-100px;position:absolute;z-index:2147483647;opacity:0.5", r.textContent = " ";
        var s = ["dragWait", "dragWaitEnd", "startDrag", "dragReadyEnd", "onMouseDrag"];
        s.forEach(function(B) {
          t[B] = this[B];
        }, this), e.on("mousedown", this.onMouseDown.bind(t));
        var l = e.container, c, v, g, p, h, b, E = 0, L, x, O, $, y;
        this.onDragStart = function(B) {
          if (this.cancelDrag || !l.draggable) {
            var z = this;
            return setTimeout(function() {
              z.startSelect(), z.captureMouse(B);
            }, 0), B.preventDefault();
          }
          h = e.getSelectionRange();
          var W = B.dataTransfer;
          W.effectAllowed = e.getReadOnly() ? "copy" : "copyMove", e.container.appendChild(r), W.setDragImage && W.setDragImage(r, 0, 0), setTimeout(function() {
            e.container.removeChild(r);
          }), W.clearData(), W.setData("Text", e.session.getTextRange()), x = !0, this.setState("drag");
        }, this.onDragEnd = function(B) {
          if (l.draggable = !1, x = !1, this.setState(null), !e.getReadOnly()) {
            var z = B.dataTransfer.dropEffect;
            !L && z == "move" && e.session.remove(e.getSelectionRange()), e.$resetCursorStyle();
          }
          this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle("");
        }, this.onDragEnter = function(B) {
          if (!(e.getReadOnly() || !D(B.dataTransfer)))
            return v = B.clientX, g = B.clientY, c || k(), E++, B.dataTransfer.dropEffect = L = F(B), A.preventDefault(B);
        }, this.onDragOver = function(B) {
          if (!(e.getReadOnly() || !D(B.dataTransfer)))
            return v = B.clientX, g = B.clientY, c || (k(), E++), T !== null && (T = null), B.dataTransfer.dropEffect = L = F(B), A.preventDefault(B);
        }, this.onDragLeave = function(B) {
          if (E--, E <= 0 && c)
            return _(), L = null, A.preventDefault(B);
        }, this.onDrop = function(B) {
          if (b) {
            var z = B.dataTransfer;
            if (x)
              switch (L) {
                case "move":
                  h.contains(b.row, b.column) ? h = {
                    start: b,
                    end: b
                  } : h = e.moveText(h, b);
                  break;
                case "copy":
                  h = e.moveText(h, b, !0);
                  break;
              }
            else {
              var W = z.getData("Text");
              h = {
                start: b,
                end: e.session.insert(b, W)
              }, e.focus(), L = null;
            }
            return _(), A.preventDefault(B);
          }
        }, A.addListener(l, "dragstart", this.onDragStart.bind(t), e), A.addListener(l, "dragend", this.onDragEnd.bind(t), e), A.addListener(l, "dragenter", this.onDragEnter.bind(t), e), A.addListener(l, "dragover", this.onDragOver.bind(t), e), A.addListener(l, "dragleave", this.onDragLeave.bind(t), e), A.addListener(l, "drop", this.onDrop.bind(t), e);
        function f(B, z) {
          var W = Date.now(), P = !z || B.row != z.row, V = !z || B.column != z.column;
          if (!$ || P || V)
            e.moveCursorToPosition(B), $ = W, y = { x: v, y: g };
          else {
            var j = n(y.x, y.y, v, g);
            j > i ? $ = null : W - $ >= u && (e.renderer.scrollCursorIntoView(), $ = null);
          }
        }
        function d(B, z) {
          var W = Date.now(), P = e.renderer.layerConfig.lineHeight, V = e.renderer.layerConfig.characterWidth, j = e.renderer.scroller.getBoundingClientRect(), Y = {
            x: {
              left: v - j.left,
              right: j.right - v
            },
            y: {
              top: g - j.top,
              bottom: j.bottom - g
            }
          }, G = Math.min(Y.x.left, Y.x.right), J = Math.min(Y.y.top, Y.y.bottom), ie = { row: B.row, column: B.column };
          G / V <= 2 && (ie.column += Y.x.left < Y.x.right ? -3 : 2), J / P <= 1 && (ie.row += Y.y.top < Y.y.bottom ? -1 : 1);
          var he = B.row != ie.row, ve = B.column != ie.column, ue = !z || B.row != z.row;
          he || ve && !ue ? O ? W - O >= a && e.renderer.scrollCursorIntoView(ie) : O = W : O = null;
        }
        function m() {
          var B = b;
          b = e.renderer.screenToTextCoordinates(v, g), f(b, B), d(b, B);
        }
        function k() {
          h = e.selection.toOrientedRange(), c = e.session.addMarker(h, "ace_selection", e.getSelectionStyle()), e.clearSelection(), e.isFocused() && e.renderer.$cursorLayer.setBlinking(!1), clearInterval(p), m(), p = setInterval(m, 20), E = 0, A.addListener(document, "mousemove", I);
        }
        function _() {
          clearInterval(p), e.session.removeMarker(c), c = null, e.selection.fromOrientedRange(h), e.isFocused() && !x && e.$resetCursorStyle(), h = null, b = null, E = 0, O = null, $ = null, A.removeListener(document, "mousemove", I);
        }
        var T = null;
        function I() {
          T == null && (T = setTimeout(function() {
            T != null && c && _();
          }, 20));
        }
        function D(B) {
          var z = B.types;
          return !z || Array.prototype.some.call(z, function(W) {
            return W == "text/plain" || W == "Text";
          });
        }
        function F(B) {
          var z = ["copy", "copymove", "all", "uninitialized"], W = ["move", "copymove", "linkmove", "all", "uninitialized"], P = w.isMac ? B.altKey : B.ctrlKey, V = "uninitialized";
          try {
            V = B.dataTransfer.effectAllowed.toLowerCase();
          } catch {
          }
          var j = "none";
          return P && z.indexOf(V) >= 0 ? j = "copy" : W.indexOf(V) >= 0 ? j = "move" : z.indexOf(V) >= 0 && (j = "copy"), j;
        }
      }
      (function() {
        this.dragWait = function() {
          var t = Date.now() - this.mousedownEvent.time;
          t > this.editor.getDragDelay() && this.startDrag();
        }, this.dragWaitEnd = function() {
          var t = this.editor.container;
          t.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()), this.selectEnd();
        }, this.dragReadyEnd = function(t) {
          this.editor.$resetCursorStyle(), this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle(""), this.dragWaitEnd();
        }, this.startDrag = function() {
          this.cancelDrag = !1;
          var t = this.editor, e = t.container;
          e.draggable = !0, t.renderer.$cursorLayer.setBlinking(!1), t.setStyle("ace_dragging");
          var r = w.isWin ? "default" : "move";
          t.renderer.setCursorStyle(r), this.setState("dragReady");
        }, this.onMouseDrag = function(t) {
          var e = this.editor.container;
          if (w.isIE && this.state == "dragReady") {
            var r = n(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
            r > 3 && e.dragDrop();
          }
          if (this.state === "dragWait") {
            var r = n(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
            r > 0 && (e.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()));
          }
        }, this.onMouseDown = function(t) {
          if (this.$dragEnabled) {
            this.mousedownEvent = t;
            var e = this.editor, r = t.inSelection(), s = t.getButton(), l = t.domEvent.detail || 1;
            if (l === 1 && s === 0 && r) {
              if (t.editor.inMultiSelectMode && (t.getAccelKey() || t.getShiftKey()))
                return;
              this.mousedownEvent.time = Date.now();
              var c = t.domEvent.target || t.domEvent.srcElement;
              if ("unselectable" in c && (c.unselectable = "on"), e.getDragDelay()) {
                if (w.isWebKit) {
                  this.cancelDrag = !0;
                  var v = e.container;
                  v.draggable = !0;
                }
                this.setState("dragWait");
              } else
                this.startDrag();
              this.captureMouse(t, this.onMouseDrag.bind(this)), t.defaultPrevented = !0;
            }
          }
        };
      }).call(o.prototype);
      function n(t, e, r, s) {
        return Math.sqrt(Math.pow(r - t, 2) + Math.pow(s - e, 2));
      }
      M.DragdropHandler = o;
    }), ace.define("ace/mouse/touch_handler", ["require", "exports", "module", "ace/mouse/mouse_event", "ace/lib/event", "ace/lib/dom"], function(S, M, H) {
      var C = S("./mouse_event").MouseEvent, A = S("../lib/event"), w = S("../lib/dom");
      M.addTouchListeners = function(a, u) {
        var i = "scroll", o, n, t, e, r, s, l = 0, c, v = 0, g = 0, p = 0, h, b;
        function E() {
          var f = window.navigator && window.navigator.clipboard, d = !1, m = function() {
            var T = u.getCopyText(), I = u.session.getUndoManager().hasUndo();
            b.replaceChild(w.buildDom(d ? [
              "span",
              !T && k("selectall") && ["span", { class: "ace_mobile-button", action: "selectall" }, "Select All"],
              T && k("copy") && ["span", { class: "ace_mobile-button", action: "copy" }, "Copy"],
              T && k("cut") && ["span", { class: "ace_mobile-button", action: "cut" }, "Cut"],
              f && k("paste") && ["span", { class: "ace_mobile-button", action: "paste" }, "Paste"],
              I && k("undo") && ["span", { class: "ace_mobile-button", action: "undo" }, "Undo"],
              k("find") && ["span", { class: "ace_mobile-button", action: "find" }, "Find"],
              k("openCommandPalette") && ["span", { class: "ace_mobile-button", action: "openCommandPalette" }, "Palette"]
            ] : ["span"]), b.firstChild);
          }, k = function(T) {
            return u.commands.canExecute(T, u);
          }, _ = function(T) {
            var I = T.target.getAttribute("action");
            if (I == "more" || !d)
              return d = !d, m();
            I == "paste" ? f.readText().then(function(D) {
              u.execCommand(I, D);
            }) : I && ((I == "cut" || I == "copy") && (f ? f.writeText(u.getCopyText()) : document.execCommand("copy")), u.execCommand(I)), b.firstChild.style.display = "none", d = !1, I != "openCommandPalette" && u.focus();
          };
          b = w.buildDom([
            "div",
            {
              class: "ace_mobile-menu",
              ontouchstart: function(T) {
                i = "menu", T.stopPropagation(), T.preventDefault(), u.textInput.focus();
              },
              ontouchend: function(T) {
                T.stopPropagation(), T.preventDefault(), _(T);
              },
              onclick: _
            },
            ["span"],
            ["span", { class: "ace_mobile-button", action: "more" }, "..."]
          ], u.container);
        }
        function L() {
          if (!u.getOption("enableMobileMenu")) {
            b && x();
            return;
          }
          b || E();
          var f = u.selection.cursor, d = u.renderer.textToScreenCoordinates(f.row, f.column), m = u.renderer.textToScreenCoordinates(0, 0).pageX, k = u.renderer.scrollLeft, _ = u.container.getBoundingClientRect();
          b.style.top = d.pageY - _.top - 3 + "px", d.pageX - _.left < _.width - 70 ? (b.style.left = "", b.style.right = "10px") : (b.style.right = "", b.style.left = m + k - _.left + "px"), b.style.display = "", b.firstChild.style.display = "none", u.on("input", x);
        }
        function x(f) {
          b && (b.style.display = "none"), u.off("input", x);
        }
        function O() {
          r = null, clearTimeout(r);
          var f = u.selection.getRange(), d = f.contains(c.row, c.column);
          (f.isEmpty() || !d) && (u.selection.moveToPosition(c), u.selection.selectWord()), i = "wait", L();
        }
        function $() {
          r = null, clearTimeout(r), u.selection.moveToPosition(c);
          var f = v >= 2 ? u.selection.getLineRange(c.row) : u.session.getBracketRange(c);
          f && !f.isEmpty() ? u.selection.setRange(f) : u.selection.selectWord(), i = "wait";
        }
        A.addListener(a, "contextmenu", function(f) {
          if (h) {
            var d = u.textInput.getElement();
            d.focus();
          }
        }, u), A.addListener(a, "touchstart", function(f) {
          var d = f.touches;
          if (r || d.length > 1) {
            clearTimeout(r), r = null, t = -1, i = "zoom";
            return;
          }
          h = u.$mouseHandler.isMousePressed = !0;
          var m = u.renderer.layerConfig.lineHeight, k = u.renderer.layerConfig.lineHeight, _ = f.timeStamp;
          e = _;
          var T = d[0], I = T.clientX, D = T.clientY;
          Math.abs(o - I) + Math.abs(n - D) > m && (t = -1), o = f.clientX = I, n = f.clientY = D, g = p = 0;
          var F = new C(f, u);
          if (c = F.getDocumentPosition(), _ - t < 500 && d.length == 1 && !l)
            v++, f.preventDefault(), f.button = 0, $();
          else {
            v = 0;
            var B = u.selection.cursor, z = u.selection.isEmpty() ? B : u.selection.anchor, W = u.renderer.$cursorLayer.getPixelPosition(B, !0), P = u.renderer.$cursorLayer.getPixelPosition(z, !0), V = u.renderer.scroller.getBoundingClientRect(), j = u.renderer.layerConfig.offset, Y = u.renderer.scrollLeft, G = function(he, ve) {
              return he = he / k, ve = ve / m - 0.75, he * he + ve * ve;
            };
            if (f.clientX < V.left) {
              i = "zoom";
              return;
            }
            var J = G(f.clientX - V.left - W.left + Y, f.clientY - V.top - W.top + j), ie = G(f.clientX - V.left - P.left + Y, f.clientY - V.top - P.top + j);
            J < 3.5 && ie < 3.5 && (i = J > ie ? "cursor" : "anchor"), ie < 3.5 ? i = "anchor" : J < 3.5 ? i = "cursor" : i = "scroll", r = setTimeout(O, 450);
          }
          t = _;
        }, u), A.addListener(a, "touchend", function(f) {
          h = u.$mouseHandler.isMousePressed = !1, s && clearInterval(s), i == "zoom" ? (i = "", l = 0) : r ? (u.selection.moveToPosition(c), l = 0, L()) : i == "scroll" ? (y(), x()) : L(), clearTimeout(r), r = null;
        }, u), A.addListener(a, "touchmove", function(f) {
          r && (clearTimeout(r), r = null);
          var d = f.touches;
          if (!(d.length > 1 || i == "zoom")) {
            var m = d[0], k = o - m.clientX, _ = n - m.clientY;
            if (i == "wait")
              if (k * k + _ * _ > 4)
                i = "cursor";
              else
                return f.preventDefault();
            o = m.clientX, n = m.clientY, f.clientX = m.clientX, f.clientY = m.clientY;
            var T = f.timeStamp, I = T - e;
            if (e = T, i == "scroll") {
              var D = new C(f, u);
              D.speed = 1, D.wheelX = k, D.wheelY = _, 10 * Math.abs(k) < Math.abs(_) && (k = 0), 10 * Math.abs(_) < Math.abs(k) && (_ = 0), I != 0 && (g = k / I, p = _ / I), u._emit("mousewheel", D), D.propagationStopped || (g = p = 0);
            } else {
              var F = new C(f, u), B = F.getDocumentPosition();
              i == "cursor" ? u.selection.moveCursorToPosition(B) : i == "anchor" && u.selection.setSelectionAnchor(B.row, B.column), u.renderer.scrollCursorIntoView(B), f.preventDefault();
            }
          }
        }, u);
        function y() {
          l += 60, s = setInterval(function() {
            l-- <= 0 && (clearInterval(s), s = null), Math.abs(g) < 0.01 && (g = 0), Math.abs(p) < 0.01 && (p = 0), l < 20 && (g = 0.9 * g), l < 20 && (p = 0.9 * p);
            var f = u.session.getScrollTop();
            u.renderer.scrollBy(10 * g, 10 * p), f == u.session.getScrollTop() && (l = 0);
          }, 10);
        }
      };
    }), ace.define("ace/mouse/mouse_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/mouse/default_handlers", "ace/mouse/default_gutter_handler", "ace/mouse/mouse_event", "ace/mouse/dragdrop_handler", "ace/mouse/touch_handler", "ace/config"], function(S, M, H) {
      var C = S("../lib/event"), A = S("../lib/useragent"), w = S("./default_handlers").DefaultHandlers, a = S("./default_gutter_handler").GutterHandler, u = S("./mouse_event").MouseEvent, i = S("./dragdrop_handler").DragdropHandler, o = S("./touch_handler").addTouchListeners, n = S("../config"), t = (
        /** @class */
        function() {
          function e(r) {
            this.$dragDelay, this.$dragEnabled, this.$mouseMoved, this.mouseEvent, this.$focusTimeout;
            var s = this;
            this.editor = r, new w(this), new a(this), new i(this);
            var l = function(g) {
              var p = !document.hasFocus || !document.hasFocus() || !r.isFocused() && document.activeElement == (r.textInput && r.textInput.getElement());
              p && window.focus(), r.focus(), setTimeout(function() {
                r.isFocused() || r.focus();
              });
            }, c = r.renderer.getMouseEventTarget();
            C.addListener(c, "click", this.onMouseEvent.bind(this, "click"), r), C.addListener(c, "mousemove", this.onMouseMove.bind(this, "mousemove"), r), C.addMultiMouseDownListener([
              c,
              r.renderer.scrollBarV && r.renderer.scrollBarV.inner,
              r.renderer.scrollBarH && r.renderer.scrollBarH.inner,
              r.textInput && r.textInput.getElement()
            ].filter(Boolean), [400, 300, 250], this, "onMouseEvent", r), C.addMouseWheelListener(r.container, this.onMouseWheel.bind(this, "mousewheel"), r), o(r.container, r);
            var v = r.renderer.$gutter;
            C.addListener(v, "mousedown", this.onMouseEvent.bind(this, "guttermousedown"), r), C.addListener(v, "click", this.onMouseEvent.bind(this, "gutterclick"), r), C.addListener(v, "dblclick", this.onMouseEvent.bind(this, "gutterdblclick"), r), C.addListener(v, "mousemove", this.onMouseEvent.bind(this, "guttermousemove"), r), C.addListener(c, "mousedown", l, r), C.addListener(v, "mousedown", l, r), A.isIE && r.renderer.scrollBarV && (C.addListener(r.renderer.scrollBarV.element, "mousedown", l, r), C.addListener(r.renderer.scrollBarH.element, "mousedown", l, r)), r.on(
              "mousemove",
              function(g) {
                if (!(s.state || s.$dragDelay || !s.$dragEnabled)) {
                  var p = r.renderer.screenToTextCoordinates(g.x, g.y), h = r.session.selection.getRange(), b = r.renderer;
                  !h.isEmpty() && h.insideStart(p.row, p.column) ? b.setCursorStyle("default") : b.setCursorStyle("");
                }
              },
              //@ts-expect-error TODO: seems mistyping - should be boolean
              r
            );
          }
          return e.prototype.onMouseEvent = function(r, s) {
            this.editor.session && this.editor._emit(r, new u(s, this.editor));
          }, e.prototype.onMouseMove = function(r, s) {
            var l = this.editor._eventRegistry && this.editor._eventRegistry.mousemove;
            !l || !l.length || this.editor._emit(r, new u(s, this.editor));
          }, e.prototype.onMouseWheel = function(r, s) {
            var l = new u(s, this.editor);
            l.speed = this.$scrollSpeed * 2, l.wheelX = s.wheelX, l.wheelY = s.wheelY, this.editor._emit(r, l);
          }, e.prototype.setState = function(r) {
            this.state = r;
          }, e.prototype.captureMouse = function(r, s) {
            this.x = r.x, this.y = r.y, this.isMousePressed = !0;
            var l = this.editor, c = this.editor.renderer;
            c.$isMousePressed = !0;
            var v = this, g = function(L) {
              if (L) {
                if (A.isWebKit && !L.which && v.releaseMouse)
                  return v.releaseMouse();
                v.x = L.clientX, v.y = L.clientY, s && s(L), v.mouseEvent = new u(L, v.editor), v.$mouseMoved = !0;
              }
            }, p = function(L) {
              l.off("beforeEndOperation", b), clearInterval(E), l.session && h(), v[v.state + "End"] && v[v.state + "End"](L), v.state = "", v.isMousePressed = c.$isMousePressed = !1, c.$keepTextAreaAtCursor && c.$moveTextAreaToCursor(), v.$onCaptureMouseMove = v.releaseMouse = null, L && v.onMouseEvent("mouseup", L), l.endOperation();
            }, h = function() {
              v[v.state] && v[v.state](), v.$mouseMoved = !1;
            };
            if (A.isOldIE && r.domEvent.type == "dblclick")
              return setTimeout(function() {
                p(r);
              });
            var b = function(L) {
              v.releaseMouse && l.curOp.command.name && l.curOp.selectionChanged && (v[v.state + "End"] && v[v.state + "End"](), v.state = "", v.releaseMouse());
            };
            l.on("beforeEndOperation", b), l.startOperation({ command: { name: "mouse" } }), v.$onCaptureMouseMove = g, v.releaseMouse = C.capture(this.editor.container, g, p);
            var E = setInterval(h, 20);
          }, e.prototype.cancelContextMenu = function() {
            var r = (function(s) {
              s && s.domEvent && s.domEvent.type != "contextmenu" || (this.editor.off("nativecontextmenu", r), s && s.domEvent && C.stopEvent(s.domEvent));
            }).bind(this);
            setTimeout(r, 10), this.editor.on("nativecontextmenu", r);
          }, e.prototype.destroy = function() {
            this.releaseMouse && this.releaseMouse();
          }, e;
        }()
      );
      t.prototype.releaseMouse = null, n.defineOptions(t.prototype, "mouseHandler", {
        scrollSpeed: { initialValue: 2 },
        dragDelay: { initialValue: A.isMac ? 150 : 0 },
        dragEnabled: { initialValue: !0 },
        focusTimeout: { initialValue: 0 },
        tooltipFollowsMouse: { initialValue: !0 }
      }), M.MouseHandler = t;
    }), ace.define("ace/mouse/fold_handler", ["require", "exports", "module", "ace/lib/dom"], function(S, M, H) {
      var C = S("../lib/dom"), A = (
        /** @class */
        /* @__PURE__ */ function() {
          function w(a) {
            a.on("click", function(u) {
              var i = u.getDocumentPosition(), o = a.session, n = o.getFoldAt(i.row, i.column, 1);
              n && (u.getAccelKey() ? o.removeFold(n) : o.expandFold(n), u.stop());
              var t = u.domEvent && u.domEvent.target;
              t && C.hasCssClass(t, "ace_inline_button") && C.hasCssClass(t, "ace_toggle_wrap") && (o.setOption("wrap", !o.getUseWrapMode()), a.renderer.scrollCursorIntoView());
            }), a.on("gutterclick", function(u) {
              var i = a.renderer.$gutterLayer.getRegion(u);
              if (i == "foldWidgets") {
                var o = u.getDocumentPosition().row, n = a.session;
                n.foldWidgets && n.foldWidgets[o] && a.session.onFoldWidgetClick(o, u), a.isFocused() || a.focus(), u.stop();
              }
            }), a.on("gutterdblclick", function(u) {
              var i = a.renderer.$gutterLayer.getRegion(u);
              if (i == "foldWidgets") {
                var o = u.getDocumentPosition().row, n = a.session, t = n.getParentFoldRangeData(o, !0), e = t.range || t.firstRange;
                if (e) {
                  o = e.start.row;
                  var r = n.getFoldAt(o, n.getLine(o).length, 1);
                  r ? n.removeFold(r) : (n.addFold("...", e), a.renderer.scrollCursorIntoView({ row: e.start.row, column: 0 }));
                }
                u.stop();
              }
            });
          }
          return w;
        }()
      );
      M.FoldHandler = A;
    }), ace.define("ace/keyboard/keybinding", ["require", "exports", "module", "ace/lib/keys", "ace/lib/event"], function(S, M, H) {
      var C = S("../lib/keys"), A = S("../lib/event"), w = (
        /** @class */
        function() {
          function a(u) {
            this.$editor = u, this.$data = { editor: u }, this.$handlers = [], this.setDefaultHandler(u.commands);
          }
          return a.prototype.setDefaultHandler = function(u) {
            this.removeKeyboardHandler(this.$defaultHandler), this.$defaultHandler = u, this.addKeyboardHandler(u, 0);
          }, a.prototype.setKeyboardHandler = function(u) {
            var i = this.$handlers;
            if (i[i.length - 1] != u) {
              for (; i[i.length - 1] && i[i.length - 1] != this.$defaultHandler; )
                this.removeKeyboardHandler(i[i.length - 1]);
              this.addKeyboardHandler(u, 1);
            }
          }, a.prototype.addKeyboardHandler = function(u, i) {
            if (u) {
              typeof u == "function" && !u.handleKeyboard && (u.handleKeyboard = u);
              var o = this.$handlers.indexOf(u);
              o != -1 && this.$handlers.splice(o, 1), i == null ? this.$handlers.push(u) : this.$handlers.splice(i, 0, u), o == -1 && u.attach && u.attach(this.$editor);
            }
          }, a.prototype.removeKeyboardHandler = function(u) {
            var i = this.$handlers.indexOf(u);
            return i == -1 ? !1 : (this.$handlers.splice(i, 1), u.detach && u.detach(this.$editor), !0);
          }, a.prototype.getKeyboardHandler = function() {
            return this.$handlers[this.$handlers.length - 1];
          }, a.prototype.getStatusText = function() {
            var u = this.$data, i = u.editor;
            return this.$handlers.map(function(o) {
              return o.getStatusText && o.getStatusText(i, u) || "";
            }).filter(Boolean).join(" ");
          }, a.prototype.$callKeyboardHandlers = function(u, i, o, n) {
            for (var t, e = !1, r = this.$editor.commands, s = this.$handlers.length; s-- && (t = this.$handlers[s].handleKeyboard(
              this.$data,
              u,
              i,
              o,
              n
            ), !(!(!t || !t.command) && (t.command == "null" ? e = !0 : e = r.exec(t.command, this.$editor, t.args, n), e && n && u != -1 && t.passEvent != !0 && t.command.passEvent != !0 && A.stopEvent(n), e))); )
              ;
            return !e && u == -1 && (t = { command: "insertstring" }, e = r.exec("insertstring", this.$editor, i)), e && this.$editor._signal && this.$editor._signal("keyboardActivity", t), e;
          }, a.prototype.onCommandKey = function(u, i, o) {
            var n = C.keyCodeToString(o);
            return this.$callKeyboardHandlers(i, n, o, u);
          }, a.prototype.onTextInput = function(u) {
            return this.$callKeyboardHandlers(-1, u);
          }, a;
        }()
      );
      M.KeyBinding = w;
    }), ace.define("ace/lib/bidiutil", ["require", "exports", "module"], function(S, M, H) {
      var C = 0, A = 0, w = !1, a = !1, u = !1, i = [
        [0, 3, 0, 1, 0, 0, 0],
        [0, 3, 0, 1, 2, 2, 0],
        [0, 3, 0, 17, 2, 0, 1],
        [0, 3, 5, 5, 4, 1, 0],
        [0, 3, 21, 21, 4, 0, 1],
        [0, 3, 5, 5, 4, 2, 0]
      ], o = [
        [2, 0, 1, 1, 0, 1, 0],
        [2, 0, 1, 1, 0, 2, 0],
        [2, 0, 2, 1, 3, 2, 0],
        [2, 0, 2, 33, 3, 1, 1]
      ], n = 0, t = 1, e = 0, r = 1, s = 2, l = 3, c = 4, v = 5, g = 6, p = 7, h = 8, b = 9, E = 10, L = 11, x = 12, O = 13, $ = 14, y = 15, f = 16, d = 17, m = 18, k = [
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        g,
        v,
        g,
        h,
        v,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        v,
        v,
        v,
        g,
        h,
        c,
        c,
        L,
        L,
        L,
        c,
        c,
        c,
        c,
        c,
        E,
        b,
        E,
        b,
        b,
        s,
        s,
        s,
        s,
        s,
        s,
        s,
        s,
        s,
        s,
        b,
        c,
        c,
        c,
        c,
        c,
        c,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        c,
        c,
        c,
        c,
        c,
        c,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        e,
        c,
        c,
        c,
        c,
        m,
        m,
        m,
        m,
        m,
        m,
        v,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        b,
        c,
        L,
        L,
        L,
        L,
        c,
        c,
        c,
        c,
        e,
        c,
        c,
        m,
        c,
        c,
        L,
        L,
        s,
        s,
        c,
        e,
        c,
        c,
        c,
        s,
        e,
        c,
        c,
        c,
        c,
        c
      ], _ = [
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
        m,
        m,
        m,
        e,
        r,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        h,
        v,
        O,
        $,
        y,
        f,
        d,
        b,
        L,
        L,
        L,
        L,
        L,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        b,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        c,
        h
      ];
      function T(B, z, W, P) {
        var V = C ? o : i, j = null, Y = null, G = null, J = 0, ie = null, he = null, ve = -1, ue = null, Ce = null, xe = [];
        if (!P)
          for (ue = 0, P = []; ue < W; ue++)
            P[ue] = F(B[ue]);
        for (A = C, w = !1, a = !1, u = !1, Ce = 0; Ce < W; Ce++) {
          if (j = J, xe[Ce] = Y = D(B, P, xe, Ce), J = V[j][Y], ie = J & 240, J &= 15, z[Ce] = G = V[J][5], ie > 0)
            if (ie == 16) {
              for (ue = ve; ue < Ce; ue++)
                z[ue] = 1;
              ve = -1;
            } else
              ve = -1;
          if (he = V[J][6], he)
            ve == -1 && (ve = Ce);
          else if (ve > -1) {
            for (ue = ve; ue < Ce; ue++)
              z[ue] = G;
            ve = -1;
          }
          P[Ce] == v && (z[Ce] = 0), A |= G;
        }
        if (u) {
          for (ue = 0; ue < W; ue++)
            if (P[ue] == g) {
              z[ue] = C;
              for (var Se = ue - 1; Se >= 0 && P[Se] == h; Se--)
                z[Se] = C;
            }
        }
      }
      function I(B, z, W) {
        if (!(A < B)) {
          if (B == 1 && C == t && !a) {
            W.reverse();
            return;
          }
          for (var P = W.length, V = 0, j, Y, G, J; V < P; ) {
            if (z[V] >= B) {
              for (j = V + 1; j < P && z[j] >= B; )
                j++;
              for (Y = V, G = j - 1; Y < G; Y++, G--)
                J = W[Y], W[Y] = W[G], W[G] = J;
              V = j;
            }
            V++;
          }
        }
      }
      function D(B, z, W, P) {
        var V = z[P], j, Y, G, J;
        switch (V) {
          case e:
          case r:
            w = !1;
          case c:
          case l:
            return V;
          case s:
            return w ? l : s;
          case p:
            return w = !0, r;
          case h:
            return c;
          case b:
            return P < 1 || P + 1 >= z.length || (j = W[P - 1]) != s && j != l || (Y = z[P + 1]) != s && Y != l ? c : (w && (Y = l), Y == j ? Y : c);
          case E:
            return j = P > 0 ? W[P - 1] : v, j == s && P + 1 < z.length && z[P + 1] == s ? s : c;
          case L:
            if (P > 0 && W[P - 1] == s)
              return s;
            if (w)
              return c;
            for (J = P + 1, G = z.length; J < G && z[J] == L; )
              J++;
            return J < G && z[J] == s ? s : c;
          case x:
            for (G = z.length, J = P + 1; J < G && z[J] == x; )
              J++;
            if (J < G) {
              var ie = B[P], he = ie >= 1425 && ie <= 2303 || ie == 64286;
              if (j = z[J], he && (j == r || j == p))
                return r;
            }
            return P < 1 || (j = z[P - 1]) == v ? c : W[P - 1];
          case v:
            return w = !1, a = !0, C;
          case g:
            return u = !0, c;
          case O:
          case $:
          case f:
          case d:
          case y:
            w = !1;
          case m:
            return c;
        }
      }
      function F(B) {
        var z = B.charCodeAt(0), W = z >> 8;
        return W == 0 ? z > 191 ? e : k[z] : W == 5 ? /[\u0591-\u05f4]/.test(B) ? r : e : W == 6 ? /[\u0610-\u061a\u064b-\u065f\u06d6-\u06e4\u06e7-\u06ed]/.test(B) ? x : /[\u0660-\u0669\u066b-\u066c]/.test(B) ? l : z == 1642 ? L : /[\u06f0-\u06f9]/.test(B) ? s : p : W == 32 && z <= 8287 ? _[z & 255] : W == 254 && z >= 65136 ? p : c;
      }
      M.L = e, M.R = r, M.EN = s, M.ON_R = 3, M.AN = 4, M.R_H = 5, M.B = 6, M.RLE = 7, M.DOT = "·", M.doBidiReorder = function(B, z, W) {
        if (B.length < 2)
          return {};
        var P = B.split(""), V = new Array(P.length), j = new Array(P.length), Y = [];
        C = W ? t : n, T(P, Y, P.length, z);
        for (var G = 0; G < V.length; V[G] = G, G++)
          ;
        I(2, Y, V), I(1, Y, V);
        for (var G = 0; G < V.length - 1; G++)
          z[G] === l ? Y[G] = M.AN : Y[G] === r && (z[G] > p && z[G] < O || z[G] === c || z[G] === m) ? Y[G] = M.ON_R : G > 0 && P[G - 1] === "ل" && /\u0622|\u0623|\u0625|\u0627/.test(P[G]) && (Y[G - 1] = Y[G] = M.R_H, G++);
        P[P.length - 1] === M.DOT && (Y[P.length - 1] = M.B), P[0] === "‫" && (Y[0] = M.RLE);
        for (var G = 0; G < V.length; G++)
          j[G] = Y[V[G]];
        return { logicalFromVisual: V, bidiLevels: j };
      }, M.hasBidiCharacters = function(B, z) {
        for (var W = !1, P = 0; P < B.length; P++)
          z[P] = F(B.charAt(P)), !W && (z[P] == r || z[P] == p || z[P] == l) && (W = !0);
        return W;
      }, M.getVisualFromLogicalIdx = function(B, z) {
        for (var W = 0; W < z.logicalFromVisual.length; W++)
          if (z.logicalFromVisual[W] == B)
            return W;
        return 0;
      };
    }), ace.define("ace/bidihandler", ["require", "exports", "module", "ace/lib/bidiutil", "ace/lib/lang"], function(S, M, H) {
      var C = S("./lib/bidiutil"), A = S("./lib/lang"), w = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\u202B]/, a = (
        /** @class */
        function() {
          function u(i) {
            this.session = i, this.bidiMap = {}, this.currentRow = null, this.bidiUtil = C, this.charWidths = [], this.EOL = "¬", this.showInvisibles = !0, this.isRtlDir = !1, this.$isRtl = !1, this.line = "", this.wrapIndent = 0, this.EOF = "¶", this.RLE = "‫", this.contentWidth = 0, this.fontMetrics = null, this.rtlLineOffset = 0, this.wrapOffset = 0, this.isMoveLeftOperation = !1, this.seenBidi = w.test(i.getValue());
          }
          return u.prototype.isBidiRow = function(i, o, n) {
            return this.seenBidi ? (i !== this.currentRow && (this.currentRow = i, this.updateRowLine(o, n), this.updateBidiMap()), this.bidiMap.bidiLevels) : !1;
          }, u.prototype.onChange = function(i) {
            this.seenBidi ? this.currentRow = null : i.action == "insert" && w.test(i.lines.join(`
`)) && (this.seenBidi = !0, this.currentRow = null);
          }, u.prototype.getDocumentRow = function() {
            var i = 0, o = this.session.$screenRowCache;
            if (o.length) {
              var n = this.session.$getRowCacheIndex(o, this.currentRow);
              n >= 0 && (i = this.session.$docRowCache[n]);
            }
            return i;
          }, u.prototype.getSplitIndex = function() {
            var i = 0, o = this.session.$screenRowCache;
            if (o.length)
              for (var n, t = this.session.$getRowCacheIndex(o, this.currentRow); this.currentRow - i > 0 && (n = this.session.$getRowCacheIndex(o, this.currentRow - i - 1), n === t); )
                t = n, i++;
            else
              i = this.currentRow;
            return i;
          }, u.prototype.updateRowLine = function(i, o) {
            i === void 0 && (i = this.getDocumentRow());
            var n = i === this.session.getLength() - 1, t = n ? this.EOF : this.EOL;
            if (this.wrapIndent = 0, this.line = this.session.getLine(i), this.isRtlDir = this.$isRtl || this.line.charAt(0) === this.RLE, this.session.$useWrapMode) {
              var e = this.session.$wrapData[i];
              e && (o === void 0 && (o = this.getSplitIndex()), o > 0 && e.length ? (this.wrapIndent = e.indent, this.wrapOffset = this.wrapIndent * this.charWidths[C.L], this.line = o < e.length ? this.line.substring(e[o - 1], e[o]) : this.line.substring(e[e.length - 1])) : this.line = this.line.substring(0, e[o]), o == e.length && (this.line += this.showInvisibles ? t : C.DOT));
            } else
              this.line += this.showInvisibles ? t : C.DOT;
            var r = this.session, s = 0, l;
            this.line = this.line.replace(/\t|[\u1100-\u2029, \u202F-\uFFE6]/g, function(c, v) {
              return c === "	" || r.isFullWidth(c.charCodeAt(0)) ? (l = c === "	" ? r.getScreenTabSize(v + s) : 2, s += l - 1, A.stringRepeat(C.DOT, l)) : c;
            }), this.isRtlDir && (this.fontMetrics.$main.textContent = this.line.charAt(this.line.length - 1) == C.DOT ? this.line.substr(0, this.line.length - 1) : this.line, this.rtlLineOffset = this.contentWidth - this.fontMetrics.$main.getBoundingClientRect().width);
          }, u.prototype.updateBidiMap = function() {
            var i = [];
            C.hasBidiCharacters(this.line, i) || this.isRtlDir ? this.bidiMap = C.doBidiReorder(this.line, i, this.isRtlDir) : this.bidiMap = {};
          }, u.prototype.markAsDirty = function() {
            this.currentRow = null;
          }, u.prototype.updateCharacterWidths = function(i) {
            if (this.characterWidth !== i.$characterSize.width) {
              this.fontMetrics = i;
              var o = this.characterWidth = i.$characterSize.width, n = i.$measureCharWidth("ה");
              this.charWidths[C.L] = this.charWidths[C.EN] = this.charWidths[C.ON_R] = o, this.charWidths[C.R] = this.charWidths[C.AN] = n, this.charWidths[C.R_H] = n * 0.45, this.charWidths[C.B] = this.charWidths[C.RLE] = 0, this.currentRow = null;
            }
          }, u.prototype.setShowInvisibles = function(i) {
            this.showInvisibles = i, this.currentRow = null;
          }, u.prototype.setEolChar = function(i) {
            this.EOL = i;
          }, u.prototype.setContentWidth = function(i) {
            this.contentWidth = i;
          }, u.prototype.isRtlLine = function(i) {
            return this.$isRtl ? !0 : i != null ? this.session.getLine(i).charAt(0) == this.RLE : this.isRtlDir;
          }, u.prototype.setRtlDirection = function(i, o) {
            for (var n = i.getCursorPosition(), t = i.selection.getSelectionAnchor().row; t <= n.row; t++)
              !o && i.session.getLine(t).charAt(0) === i.session.$bidiHandler.RLE ? i.session.doc.removeInLine(t, 0, 1) : o && i.session.getLine(t).charAt(0) !== i.session.$bidiHandler.RLE && i.session.doc.insert({ column: 0, row: t }, i.session.$bidiHandler.RLE);
          }, u.prototype.getPosLeft = function(i) {
            i -= this.wrapIndent;
            var o = this.line.charAt(0) === this.RLE ? 1 : 0, n = i > o ? this.session.getOverwrite() ? i : i - 1 : o, t = C.getVisualFromLogicalIdx(n, this.bidiMap), e = this.bidiMap.bidiLevels, r = 0;
            !this.session.getOverwrite() && i <= o && e[t] % 2 !== 0 && t++;
            for (var s = 0; s < t; s++)
              r += this.charWidths[e[s]];
            return !this.session.getOverwrite() && i > o && e[t] % 2 === 0 && (r += this.charWidths[e[t]]), this.wrapIndent && (r += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset), this.isRtlDir && (r += this.rtlLineOffset), r;
          }, u.prototype.getSelections = function(i, o) {
            var n = this.bidiMap, t = n.bidiLevels, e, r = [], s = 0, l = Math.min(i, o) - this.wrapIndent, c = Math.max(i, o) - this.wrapIndent, v = !1, g = !1, p = 0;
            this.wrapIndent && (s += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset);
            for (var h, b = 0; b < t.length; b++)
              h = n.logicalFromVisual[b], e = t[b], v = h >= l && h < c, v && !g ? p = s : !v && g && r.push({ left: p, width: s - p }), s += this.charWidths[e], g = v;
            if (v && b === t.length && r.push({ left: p, width: s - p }), this.isRtlDir)
              for (var E = 0; E < r.length; E++)
                r[E].left += this.rtlLineOffset;
            return r;
          }, u.prototype.offsetToCol = function(n) {
            this.isRtlDir && (n -= this.rtlLineOffset);
            var o = 0, n = Math.max(n, 0), t = 0, e = 0, r = this.bidiMap.bidiLevels, s = this.charWidths[r[e]];
            for (this.wrapIndent && (n -= this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset); n > t + s / 2; ) {
              if (t += s, e === r.length - 1) {
                s = 0;
                break;
              }
              s = this.charWidths[r[++e]];
            }
            return e > 0 && r[e - 1] % 2 !== 0 && r[e] % 2 === 0 ? (n < t && e--, o = this.bidiMap.logicalFromVisual[e]) : e > 0 && r[e - 1] % 2 === 0 && r[e] % 2 !== 0 ? o = 1 + (n > t ? this.bidiMap.logicalFromVisual[e] : this.bidiMap.logicalFromVisual[e - 1]) : this.isRtlDir && e === r.length - 1 && s === 0 && r[e - 1] % 2 === 0 || !this.isRtlDir && e === 0 && r[e] % 2 !== 0 ? o = 1 + this.bidiMap.logicalFromVisual[e] : (e > 0 && r[e - 1] % 2 !== 0 && s !== 0 && e--, o = this.bidiMap.logicalFromVisual[e]), o === 0 && this.isRtlDir && o++, o + this.wrapIndent;
          }, u;
        }()
      );
      M.BidiHandler = a;
    }), ace.define("ace/selection", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/range"], function(S, M, H) {
      var C = S("./lib/oop"), A = S("./lib/lang"), w = S("./lib/event_emitter").EventEmitter, a = S("./range").Range, u = (
        /** @class */
        function() {
          function i(o) {
            this.session = o, this.doc = o.getDocument(), this.clearSelection(), this.cursor = this.lead = this.doc.createAnchor(0, 0), this.anchor = this.doc.createAnchor(0, 0), this.$silent = !1;
            var n = this;
            this.cursor.on("change", function(t) {
              n.$cursorChanged = !0, n.$silent || n._emit("changeCursor"), !n.$isEmpty && !n.$silent && n._emit("changeSelection"), !n.$keepDesiredColumnOnChange && t.old.column != t.value.column && (n.$desiredColumn = null);
            }), this.anchor.on("change", function() {
              n.$anchorChanged = !0, !n.$isEmpty && !n.$silent && n._emit("changeSelection");
            });
          }
          return i.prototype.isEmpty = function() {
            return this.$isEmpty || this.anchor.row == this.lead.row && this.anchor.column == this.lead.column;
          }, i.prototype.isMultiLine = function() {
            return !this.$isEmpty && this.anchor.row != this.cursor.row;
          }, i.prototype.getCursor = function() {
            return this.lead.getPosition();
          }, i.prototype.setAnchor = function(o, n) {
            this.$isEmpty = !1, this.anchor.setPosition(o, n);
          }, i.prototype.getAnchor = function() {
            return this.$isEmpty ? this.getSelectionLead() : this.anchor.getPosition();
          }, i.prototype.getSelectionLead = function() {
            return this.lead.getPosition();
          }, i.prototype.isBackwards = function() {
            var o = this.anchor, n = this.lead;
            return o.row > n.row || o.row == n.row && o.column > n.column;
          }, i.prototype.getRange = function() {
            var o = this.anchor, n = this.lead;
            return this.$isEmpty ? a.fromPoints(n, n) : this.isBackwards() ? a.fromPoints(n, o) : a.fromPoints(o, n);
          }, i.prototype.clearSelection = function() {
            this.$isEmpty || (this.$isEmpty = !0, this._emit("changeSelection"));
          }, i.prototype.selectAll = function() {
            this.$setSelection(0, 0, Number.MAX_VALUE, Number.MAX_VALUE);
          }, i.prototype.setRange = function(o, n) {
            var t = n ? o.end : o.start, e = n ? o.start : o.end;
            this.$setSelection(t.row, t.column, e.row, e.column);
          }, i.prototype.$setSelection = function(o, n, t, e) {
            if (!this.$silent) {
              var r = this.$isEmpty, s = this.inMultiSelectMode;
              this.$silent = !0, this.$cursorChanged = this.$anchorChanged = !1, this.anchor.setPosition(o, n), this.cursor.setPosition(t, e), this.$isEmpty = !a.comparePoints(this.anchor, this.cursor), this.$silent = !1, this.$cursorChanged && this._emit("changeCursor"), (this.$cursorChanged || this.$anchorChanged || r != this.$isEmpty || s) && this._emit("changeSelection");
            }
          }, i.prototype.$moveSelection = function(o) {
            var n = this.lead;
            this.$isEmpty && this.setSelectionAnchor(n.row, n.column), o.call(this);
          }, i.prototype.selectTo = function(o, n) {
            this.$moveSelection(function() {
              this.moveCursorTo(o, n);
            });
          }, i.prototype.selectToPosition = function(o) {
            this.$moveSelection(function() {
              this.moveCursorToPosition(o);
            });
          }, i.prototype.moveTo = function(o, n) {
            this.clearSelection(), this.moveCursorTo(o, n);
          }, i.prototype.moveToPosition = function(o) {
            this.clearSelection(), this.moveCursorToPosition(o);
          }, i.prototype.selectUp = function() {
            this.$moveSelection(this.moveCursorUp);
          }, i.prototype.selectDown = function() {
            this.$moveSelection(this.moveCursorDown);
          }, i.prototype.selectRight = function() {
            this.$moveSelection(this.moveCursorRight);
          }, i.prototype.selectLeft = function() {
            this.$moveSelection(this.moveCursorLeft);
          }, i.prototype.selectLineStart = function() {
            this.$moveSelection(this.moveCursorLineStart);
          }, i.prototype.selectLineEnd = function() {
            this.$moveSelection(this.moveCursorLineEnd);
          }, i.prototype.selectFileEnd = function() {
            this.$moveSelection(this.moveCursorFileEnd);
          }, i.prototype.selectFileStart = function() {
            this.$moveSelection(this.moveCursorFileStart);
          }, i.prototype.selectWordRight = function() {
            this.$moveSelection(this.moveCursorWordRight);
          }, i.prototype.selectWordLeft = function() {
            this.$moveSelection(this.moveCursorWordLeft);
          }, i.prototype.getWordRange = function(o, n) {
            if (typeof n > "u") {
              var t = o || this.lead;
              o = t.row, n = t.column;
            }
            return this.session.getWordRange(o, n);
          }, i.prototype.selectWord = function() {
            this.setSelectionRange(this.getWordRange());
          }, i.prototype.selectAWord = function() {
            var o = this.getCursor(), n = this.session.getAWordRange(o.row, o.column);
            this.setSelectionRange(n);
          }, i.prototype.getLineRange = function(o, n) {
            var t = typeof o == "number" ? o : this.lead.row, e, r = this.session.getFoldLine(t);
            return r ? (t = r.start.row, e = r.end.row) : e = t, n === !0 ? new a(t, 0, e, this.session.getLine(e).length) : new a(t, 0, e + 1, 0);
          }, i.prototype.selectLine = function() {
            this.setSelectionRange(this.getLineRange());
          }, i.prototype.moveCursorUp = function() {
            this.moveCursorBy(-1, 0);
          }, i.prototype.moveCursorDown = function() {
            this.moveCursorBy(1, 0);
          }, i.prototype.wouldMoveIntoSoftTab = function(o, n, t) {
            var e = o.column, r = o.column + n;
            return t < 0 && (e = o.column - n, r = o.column), this.session.isTabStop(o) && this.doc.getLine(o.row).slice(e, r).split(" ").length - 1 == n;
          }, i.prototype.moveCursorLeft = function() {
            var o = this.lead.getPosition(), n;
            if (n = this.session.getFoldAt(o.row, o.column, -1))
              this.moveCursorTo(n.start.row, n.start.column);
            else if (o.column === 0)
              o.row > 0 && this.moveCursorTo(o.row - 1, this.doc.getLine(o.row - 1).length);
            else {
              var t = this.session.getTabSize();
              this.wouldMoveIntoSoftTab(o, t, -1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, -t) : this.moveCursorBy(0, -1);
            }
          }, i.prototype.moveCursorRight = function() {
            var o = this.lead.getPosition(), n;
            if (n = this.session.getFoldAt(o.row, o.column, 1))
              this.moveCursorTo(n.end.row, n.end.column);
            else if (this.lead.column == this.doc.getLine(this.lead.row).length)
              this.lead.row < this.doc.getLength() - 1 && this.moveCursorTo(this.lead.row + 1, 0);
            else {
              var t = this.session.getTabSize(), o = this.lead;
              this.wouldMoveIntoSoftTab(o, t, 1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, t) : this.moveCursorBy(0, 1);
            }
          }, i.prototype.moveCursorLineStart = function() {
            var o = this.lead.row, n = this.lead.column, t = this.session.documentToScreenRow(o, n), e = this.session.screenToDocumentPosition(t, 0), r = this.session.getDisplayLine(o, null, e.row, e.column), s = r.match(/^\s*/);
            s[0].length != n && !this.session.$useEmacsStyleLineStart && (e.column += s[0].length), this.moveCursorToPosition(e);
          }, i.prototype.moveCursorLineEnd = function() {
            var o = this.lead, n = this.session.getDocumentLastRowColumnPosition(o.row, o.column);
            if (this.lead.column == n.column) {
              var t = this.session.getLine(n.row);
              if (n.column == t.length) {
                var e = t.search(/\s+$/);
                e > 0 && (n.column = e);
              }
            }
            this.moveCursorTo(n.row, n.column);
          }, i.prototype.moveCursorFileEnd = function() {
            var o = this.doc.getLength() - 1, n = this.doc.getLine(o).length;
            this.moveCursorTo(o, n);
          }, i.prototype.moveCursorFileStart = function() {
            this.moveCursorTo(0, 0);
          }, i.prototype.moveCursorLongWordRight = function() {
            var o = this.lead.row, n = this.lead.column, t = this.doc.getLine(o), e = t.substring(n);
            this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0;
            var r = this.session.getFoldAt(o, n, 1);
            if (r) {
              this.moveCursorTo(r.end.row, r.end.column);
              return;
            }
            if (this.session.nonTokenRe.exec(e) && (n += this.session.nonTokenRe.lastIndex, this.session.nonTokenRe.lastIndex = 0, e = t.substring(n)), n >= t.length) {
              this.moveCursorTo(o, t.length), this.moveCursorRight(), o < this.doc.getLength() - 1 && this.moveCursorWordRight();
              return;
            }
            this.session.tokenRe.exec(e) && (n += this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(o, n);
          }, i.prototype.moveCursorLongWordLeft = function() {
            var o = this.lead.row, n = this.lead.column, t;
            if (t = this.session.getFoldAt(o, n, -1)) {
              this.moveCursorTo(t.start.row, t.start.column);
              return;
            }
            var e = this.session.getFoldStringAt(o, n, -1);
            e == null && (e = this.doc.getLine(o).substring(0, n));
            var r = A.stringReverse(e);
            if (this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0, this.session.nonTokenRe.exec(r) && (n -= this.session.nonTokenRe.lastIndex, r = r.slice(this.session.nonTokenRe.lastIndex), this.session.nonTokenRe.lastIndex = 0), n <= 0) {
              this.moveCursorTo(o, 0), this.moveCursorLeft(), o > 0 && this.moveCursorWordLeft();
              return;
            }
            this.session.tokenRe.exec(r) && (n -= this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(o, n);
          }, i.prototype.$shortWordEndIndex = function(o) {
            var n = 0, t, e = /\s/, r = this.session.tokenRe;
            if (r.lastIndex = 0, this.session.tokenRe.exec(o))
              n = this.session.tokenRe.lastIndex;
            else {
              for (; (t = o[n]) && e.test(t); )
                n++;
              if (n < 1) {
                for (r.lastIndex = 0; (t = o[n]) && !r.test(t); )
                  if (r.lastIndex = 0, n++, e.test(t))
                    if (n > 2) {
                      n--;
                      break;
                    } else {
                      for (; (t = o[n]) && e.test(t); )
                        n++;
                      if (n > 2)
                        break;
                    }
              }
            }
            return r.lastIndex = 0, n;
          }, i.prototype.moveCursorShortWordRight = function() {
            var o = this.lead.row, n = this.lead.column, t = this.doc.getLine(o), e = t.substring(n), r = this.session.getFoldAt(o, n, 1);
            if (r)
              return this.moveCursorTo(r.end.row, r.end.column);
            if (n == t.length) {
              var s = this.doc.getLength();
              do
                o++, e = this.doc.getLine(o);
              while (o < s && /^\s*$/.test(e));
              /^\s+/.test(e) || (e = ""), n = 0;
            }
            var l = this.$shortWordEndIndex(e);
            this.moveCursorTo(o, n + l);
          }, i.prototype.moveCursorShortWordLeft = function() {
            var o = this.lead.row, n = this.lead.column, t;
            if (t = this.session.getFoldAt(o, n, -1))
              return this.moveCursorTo(t.start.row, t.start.column);
            var e = this.session.getLine(o).substring(0, n);
            if (n === 0) {
              do
                o--, e = this.doc.getLine(o);
              while (o > 0 && /^\s*$/.test(e));
              n = e.length, /\s+$/.test(e) || (e = "");
            }
            var r = A.stringReverse(e), s = this.$shortWordEndIndex(r);
            return this.moveCursorTo(o, n - s);
          }, i.prototype.moveCursorWordRight = function() {
            this.session.$selectLongWords ? this.moveCursorLongWordRight() : this.moveCursorShortWordRight();
          }, i.prototype.moveCursorWordLeft = function() {
            this.session.$selectLongWords ? this.moveCursorLongWordLeft() : this.moveCursorShortWordLeft();
          }, i.prototype.moveCursorBy = function(o, n) {
            var t = this.session.documentToScreenPosition(this.lead.row, this.lead.column), e;
            if (n === 0 && (o !== 0 && (this.session.$bidiHandler.isBidiRow(t.row, this.lead.row) ? (e = this.session.$bidiHandler.getPosLeft(t.column), t.column = Math.round(e / this.session.$bidiHandler.charWidths[0])) : e = t.column * this.session.$bidiHandler.charWidths[0]), this.$desiredColumn ? t.column = this.$desiredColumn : this.$desiredColumn = t.column), o != 0 && this.session.lineWidgets && this.session.lineWidgets[this.lead.row]) {
              var r = this.session.lineWidgets[this.lead.row];
              o < 0 ? o -= r.rowsAbove || 0 : o > 0 && (o += r.rowCount - (r.rowsAbove || 0));
            }
            var s = this.session.screenToDocumentPosition(t.row + o, t.column, e);
            o !== 0 && n === 0 && s.row === this.lead.row && (s.column, this.lead.column), this.moveCursorTo(s.row, s.column + n, n === 0);
          }, i.prototype.moveCursorToPosition = function(o) {
            this.moveCursorTo(o.row, o.column);
          }, i.prototype.moveCursorTo = function(o, n, t) {
            var e = this.session.getFoldAt(o, n, 1);
            e && (o = e.start.row, n = e.start.column), this.$keepDesiredColumnOnChange = !0;
            var r = this.session.getLine(o);
            /[\uDC00-\uDFFF]/.test(r.charAt(n)) && r.charAt(n - 1) && (this.lead.row == o && this.lead.column == n + 1 ? n = n - 1 : n = n + 1), this.lead.setPosition(o, n), this.$keepDesiredColumnOnChange = !1, t || (this.$desiredColumn = null);
          }, i.prototype.moveCursorToScreen = function(o, n, t) {
            var e = this.session.screenToDocumentPosition(o, n);
            this.moveCursorTo(e.row, e.column, t);
          }, i.prototype.detach = function() {
            this.lead.detach(), this.anchor.detach();
          }, i.prototype.fromOrientedRange = function(o) {
            this.setSelectionRange(o, o.cursor == o.start), this.$desiredColumn = o.desiredColumn || this.$desiredColumn;
          }, i.prototype.toOrientedRange = function(o) {
            var n = this.getRange();
            return o ? (o.start.column = n.start.column, o.start.row = n.start.row, o.end.column = n.end.column, o.end.row = n.end.row) : o = n, o.cursor = this.isBackwards() ? o.start : o.end, o.desiredColumn = this.$desiredColumn, o;
          }, i.prototype.getRangeOfMovements = function(o) {
            var n = this.getCursor();
            try {
              o(this);
              var t = this.getCursor();
              return a.fromPoints(n, t);
            } catch {
              return a.fromPoints(n, n);
            } finally {
              this.moveCursorToPosition(n);
            }
          }, i.prototype.toJSON = function() {
            if (this.rangeCount)
              var o = this.ranges.map(function(n) {
                var t = n.clone();
                return t.isBackwards = n.cursor == n.start, t;
              });
            else {
              var o = this.getRange();
              o.isBackwards = this.isBackwards();
            }
            return o;
          }, i.prototype.fromJSON = function(o) {
            if (o.start == null)
              if (this.rangeList && o.length > 1) {
                this.toSingleRange(o[0]);
                for (var n = o.length; n--; ) {
                  var t = a.fromPoints(o[n].start, o[n].end);
                  o[n].isBackwards && (t.cursor = t.start), this.addRange(t, !0);
                }
                return;
              } else
                o = o[0];
            this.rangeList && this.toSingleRange(o), this.setSelectionRange(o, o.isBackwards);
          }, i.prototype.isEqual = function(o) {
            if ((o.length || this.rangeCount) && o.length != this.rangeCount)
              return !1;
            if (!o.length || !this.ranges)
              return this.getRange().isEqual(o);
            for (var n = this.ranges.length; n--; )
              if (!this.ranges[n].isEqual(o[n]))
                return !1;
            return !0;
          }, i;
        }()
      );
      u.prototype.setSelectionAnchor = u.prototype.setAnchor, u.prototype.getSelectionAnchor = u.prototype.getAnchor, u.prototype.setSelectionRange = u.prototype.setRange, C.implement(u.prototype, w), M.Selection = u;
    }), ace.define("ace/tokenizer", ["require", "exports", "module", "ace/lib/report_error"], function(S, M, H) {
      var C = S("./lib/report_error").reportError, A = 2e3, w = (
        /** @class */
        function() {
          function a(u) {
            this.splitRegex, this.states = u, this.regExps = {}, this.matchMappings = {};
            for (var i in this.states) {
              for (var o = this.states[i], n = [], t = 0, e = this.matchMappings[i] = { defaultToken: "text" }, r = "g", s = [], l = 0; l < o.length; l++) {
                var c = o[l];
                if (c.defaultToken && (e.defaultToken = c.defaultToken), c.caseInsensitive && r.indexOf("i") === -1 && (r += "i"), c.unicode && r.indexOf("u") === -1 && (r += "u"), c.regex != null) {
                  c.regex instanceof RegExp && (c.regex = c.regex.toString().slice(1, -1));
                  var v = c.regex, g = new RegExp("(?:(" + v + ")|(.))").exec("a").length - 2;
                  Array.isArray(c.token) ? c.token.length == 1 || g == 1 ? c.token = c.token[0] : g - 1 != c.token.length ? (this.reportError("number of classes and regexp groups doesn't match", {
                    rule: c,
                    groupCount: g - 1
                  }), c.token = c.token[0]) : (c.tokenArray = c.token, c.token = null, c.onMatch = this.$arrayTokens) : typeof c.token == "function" && !c.onMatch && (g > 1 ? c.onMatch = this.$applyToken : c.onMatch = c.token), g > 1 && (/\\\d/.test(c.regex) ? v = c.regex.replace(/\\([0-9]+)/g, function(p, h) {
                    return "\\" + (parseInt(h, 10) + t + 1);
                  }) : (g = 1, v = this.removeCapturingGroups(c.regex)), !c.splitRegex && typeof c.token != "string" && s.push(c)), e[t] = l, t += g, n.push(v), c.onMatch || (c.onMatch = null);
                }
              }
              n.length || (e[0] = 0, n.push("$")), s.forEach(function(p) {
                p.splitRegex = this.createSplitterRegexp(p.regex, r);
              }, this), this.regExps[i] = new RegExp("(" + n.join(")|(") + ")|($)", r);
            }
          }
          return a.prototype.$setMaxTokenCount = function(u) {
            A = u | 0;
          }, a.prototype.$applyToken = function(u) {
            var i = this.splitRegex.exec(u).slice(1), o = this.token.apply(this, i);
            if (typeof o == "string")
              return [{ type: o, value: u }];
            for (var n = [], t = 0, e = o.length; t < e; t++)
              i[t] && (n[n.length] = {
                type: o[t],
                value: i[t]
              });
            return n;
          }, a.prototype.$arrayTokens = function(u) {
            if (!u)
              return [];
            var i = this.splitRegex.exec(u);
            if (!i)
              return "text";
            for (var o = [], n = this.tokenArray, t = 0, e = n.length; t < e; t++)
              i[t + 1] && (o[o.length] = {
                type: n[t],
                value: i[t + 1]
              });
            return o;
          }, a.prototype.removeCapturingGroups = function(u) {
            var i = u.replace(/\\.|\[(?:\\.|[^\\\]])*|\(\?[:=!<]|(\()/g, function(o, n) {
              return n ? "(?:" : o;
            });
            return i;
          }, a.prototype.createSplitterRegexp = function(u, i) {
            if (u.indexOf("(?=") != -1) {
              var o = 0, n = !1, t = {};
              u.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, function(e, r, s, l, c, v) {
                return n ? n = c != "]" : c ? n = !0 : l ? (o == t.stack && (t.end = v + 1, t.stack = -1), o--) : s && (o++, s.length != 1 && (t.stack = o, t.start = v)), e;
              }), t.end != null && /^\)*$/.test(u.substr(t.end)) && (u = u.substring(0, t.start) + u.substr(t.end));
            }
            return u.charAt(0) != "^" && (u = "^" + u), u.charAt(u.length - 1) != "$" && (u += "$"), new RegExp(u, (i || "").replace("g", ""));
          }, a.prototype.getLineTokens = function(u, i) {
            if (i && typeof i != "string") {
              var o = i.slice(0);
              i = o[0], i === "#tmp" && (o.shift(), i = o.shift());
            } else
              var o = [];
            var n = (
              /**@type{string}*/
              i || "start"
            ), t = this.states[n];
            t || (n = "start", t = this.states[n]);
            var e = this.matchMappings[n], r = this.regExps[n];
            r.lastIndex = 0;
            for (var s, l = [], c = 0, v = 0, g = { type: null, value: "" }; s = r.exec(u); ) {
              var p = e.defaultToken, h = null, b = s[0], E = r.lastIndex;
              if (E - b.length > c) {
                var L = u.substring(c, E - b.length);
                g.type == p ? g.value += L : (g.type && l.push(g), g = { type: p, value: L });
              }
              for (var x = 0; x < s.length - 2; x++)
                if (s[x + 1] !== void 0) {
                  h = t[e[x]], h.onMatch ? p = h.onMatch(b, n, o, u) : p = h.token, h.next && (typeof h.next == "string" ? n = h.next : n = h.next(n, o), t = this.states[n], t || (this.reportError("state doesn't exist", n), n = "start", t = this.states[n]), e = this.matchMappings[n], c = E, r = this.regExps[n], r.lastIndex = E), h.consumeLineEnd && (c = E);
                  break;
                }
              if (b) {
                if (typeof p == "string")
                  (!h || h.merge !== !1) && g.type === p ? g.value += b : (g.type && l.push(g), g = { type: p, value: b });
                else if (p) {
                  g.type && l.push(g), g = { type: null, value: "" };
                  for (var x = 0; x < p.length; x++)
                    l.push(p[x]);
                }
              }
              if (c == u.length)
                break;
              if (c = E, v++ > A) {
                for (v > 2 * u.length && this.reportError("infinite loop with in ace tokenizer", {
                  startState: i,
                  line: u
                }); c < u.length; )
                  g.type && l.push(g), g = {
                    value: u.substring(c, c += 500),
                    type: "overflow"
                  };
                n = "start", o = [];
                break;
              }
            }
            return g.type && l.push(g), o.length > 1 && o[0] !== n && o.unshift("#tmp", n), {
              tokens: l,
              state: o.length ? o : n
            };
          }, a;
        }()
      );
      w.prototype.reportError = C, M.Tokenizer = w;
    }), ace.define("ace/mode/text_highlight_rules", ["require", "exports", "module", "ace/lib/deep_copy"], function(S, M, H) {
      var C = S("../lib/deep_copy").deepCopy, A;
      A = function() {
        this.$rules = {
          start: [{
            token: "empty_line",
            regex: "^$"
          }, {
            defaultToken: "text"
          }]
        };
      }, (function() {
        this.addRules = function(u, i) {
          if (!i) {
            for (var o in u)
              this.$rules[o] = u[o];
            return;
          }
          for (var o in u) {
            for (var n = u[o], t = 0; t < n.length; t++) {
              var e = n[t];
              (e.next || e.onMatch) && (typeof e.next == "string" && e.next.indexOf(i) !== 0 && (e.next = i + e.next), e.nextState && e.nextState.indexOf(i) !== 0 && (e.nextState = i + e.nextState));
            }
            this.$rules[i + o] = n;
          }
        }, this.getRules = function() {
          return this.$rules;
        }, this.embedRules = function(u, i, o, n, t) {
          var e = typeof u == "function" ? new u().getRules() : u;
          if (n)
            for (var r = 0; r < n.length; r++)
              n[r] = i + n[r];
          else {
            n = [];
            for (var s in e)
              n.push(i + s);
          }
          if (this.addRules(e, i), o)
            for (var l = Array.prototype[t ? "push" : "unshift"], r = 0; r < n.length; r++)
              l.apply(this.$rules[n[r]], C(o));
          this.$embeds || (this.$embeds = []), this.$embeds.push(i);
        }, this.getEmbeds = function() {
          return this.$embeds;
        };
        var w = function(u, i) {
          return (u != "start" || i.length) && i.unshift(this.nextState, u), this.nextState;
        }, a = function(u, i) {
          return i.shift(), i.shift() || "start";
        };
        this.normalizeRules = function() {
          var u = 0, i = this.$rules;
          function o(n) {
            var t = i[n];
            t.processed = !0;
            for (var e = 0; e < t.length; e++) {
              var r = t[e], s = null;
              Array.isArray(r) && (s = r, r = {}), !r.regex && r.start && (r.regex = r.start, r.next || (r.next = []), r.next.push({
                defaultToken: r.token
              }, {
                token: r.token + ".end",
                regex: r.end || r.start,
                next: "pop"
              }), r.token = r.token + ".start", r.push = !0);
              var l = r.next || r.push;
              if (l && Array.isArray(l)) {
                var c = r.stateName;
                c || (c = r.token, typeof c != "string" && (c = c[0] || ""), i[c] && (c += u++)), i[c] = l, r.next = c, o(c);
              } else l == "pop" && (r.next = a);
              if (r.push && (r.nextState = r.next || r.push, r.next = w, delete r.push), r.rules)
                for (var v in r.rules)
                  i[v] ? i[v].push && i[v].push.apply(i[v], r.rules[v]) : i[v] = r.rules[v];
              var g = typeof r == "string" ? r : r.include;
              if (g && (g === "$self" && (g = "start"), Array.isArray(g) ? s = g.map(function(h) {
                return i[h];
              }) : s = i[g]), s) {
                var p = [e, 1].concat(s);
                r.noEscape && (p = p.filter(function(h) {
                  return !h.next;
                })), t.splice.apply(t, p), e--;
              }
              r.keywordMap && (r.token = this.createKeywordMapper(r.keywordMap, r.defaultToken || "text", r.caseInsensitive), delete r.defaultToken);
            }
          }
          Object.keys(i).forEach(o, this);
        }, this.createKeywordMapper = function(u, i, o, n) {
          var t = /* @__PURE__ */ Object.create(null);
          return this.$keywordList = [], Object.keys(u).forEach(function(e) {
            for (var r = u[e], s = r.split(n || "|"), l = s.length; l--; ) {
              var c = s[l];
              this.$keywordList.push(c), o && (c = c.toLowerCase()), t[c] = e;
            }
          }, this), u = null, o ? function(e) {
            return t[e.toLowerCase()] || i;
          } : function(e) {
            return t[e] || i;
          };
        }, this.getKeywords = function() {
          return this.$keywords;
        };
      }).call(A.prototype), M.TextHighlightRules = A;
    }), ace.define("ace/mode/behaviour", ["require", "exports", "module"], function(S, M, H) {
      var C;
      C = function() {
        this.$behaviours = {};
      }, (function() {
        this.add = function(A, w, a) {
          switch (void 0) {
            case this.$behaviours:
              this.$behaviours = {};
            case this.$behaviours[A]:
              this.$behaviours[A] = {};
          }
          this.$behaviours[A][w] = a;
        }, this.addBehaviours = function(A) {
          for (var w in A)
            for (var a in A[w])
              this.add(w, a, A[w][a]);
        }, this.remove = function(A) {
          this.$behaviours && this.$behaviours[A] && delete this.$behaviours[A];
        }, this.inherit = function(A, w) {
          if (typeof A == "function")
            var a = new A().getBehaviours(w);
          else
            var a = A.getBehaviours(w);
          this.addBehaviours(a);
        }, this.getBehaviours = function(A) {
          if (A) {
            for (var w = {}, a = 0; a < A.length; a++)
              this.$behaviours[A[a]] && (w[A[a]] = this.$behaviours[A[a]]);
            return w;
          } else
            return this.$behaviours;
        };
      }).call(C.prototype), M.Behaviour = C;
    }), ace.define("ace/token_iterator", ["require", "exports", "module", "ace/range"], function(S, M, H) {
      var C = S("./range").Range, A = (
        /** @class */
        function() {
          function w(a, u, i) {
            this.$session = a, this.$row = u, this.$rowTokens = a.getTokens(u);
            var o = a.getTokenAt(u, i);
            this.$tokenIndex = o ? o.index : -1;
          }
          return w.prototype.stepBackward = function() {
            for (this.$tokenIndex -= 1; this.$tokenIndex < 0; ) {
              if (this.$row -= 1, this.$row < 0)
                return this.$row = 0, null;
              this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = this.$rowTokens.length - 1;
            }
            return this.$rowTokens[this.$tokenIndex];
          }, w.prototype.stepForward = function() {
            this.$tokenIndex += 1;
            for (var a; this.$tokenIndex >= this.$rowTokens.length; ) {
              if (this.$row += 1, a || (a = this.$session.getLength()), this.$row >= a)
                return this.$row = a - 1, null;
              this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = 0;
            }
            return this.$rowTokens[this.$tokenIndex];
          }, w.prototype.getCurrentToken = function() {
            return this.$rowTokens[this.$tokenIndex];
          }, w.prototype.getCurrentTokenRow = function() {
            return this.$row;
          }, w.prototype.getCurrentTokenColumn = function() {
            var a = this.$rowTokens, u = this.$tokenIndex, i = a[u].start;
            if (i !== void 0)
              return i;
            for (i = 0; u > 0; )
              u -= 1, i += a[u].value.length;
            return i;
          }, w.prototype.getCurrentTokenPosition = function() {
            return { row: this.$row, column: this.getCurrentTokenColumn() };
          }, w.prototype.getCurrentTokenRange = function() {
            var a = this.$rowTokens[this.$tokenIndex], u = this.getCurrentTokenColumn();
            return new C(this.$row, u, this.$row, u + a.value.length);
          }, w;
        }()
      );
      M.TokenIterator = A;
    }), ace.define("ace/mode/behaviour/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/token_iterator", "ace/lib/lang"], function(S, M, H) {
      var C = S("../../lib/oop"), A = S("../behaviour").Behaviour, w = S("../../token_iterator").TokenIterator, a = S("../../lib/lang"), u = ["text", "paren.rparen", "rparen", "paren", "punctuation.operator"], i = ["text", "paren.rparen", "rparen", "paren", "punctuation.operator", "comment"], o, n = {}, t = { '"': '"', "'": "'" }, e = function(l) {
        var c = -1;
        if (l.multiSelect && (c = l.selection.index, n.rangeCount != l.multiSelect.rangeCount && (n = { rangeCount: l.multiSelect.rangeCount })), n[c])
          return o = n[c];
        o = n[c] = {
          autoInsertedBrackets: 0,
          autoInsertedRow: -1,
          autoInsertedLineEnd: "",
          maybeInsertedBrackets: 0,
          maybeInsertedRow: -1,
          maybeInsertedLineStart: "",
          maybeInsertedLineEnd: ""
        };
      }, r = function(l, c, v, g) {
        var p = l.end.row - l.start.row;
        return {
          text: v + c + g,
          selection: [
            0,
            l.start.column + 1,
            p,
            l.end.column + (p ? 0 : 1)
          ]
        };
      }, s;
      s = function(l) {
        l = l || {}, this.add("braces", "insertion", function(c, v, g, p, h) {
          var b = g.getCursorPosition(), E = p.doc.getLine(b.row);
          if (h == "{") {
            e(g);
            var L = g.getSelectionRange(), x = p.doc.getTextRange(L), O = p.getTokenAt(b.row, b.column);
            if (x !== "" && x !== "{" && g.getWrapBehavioursEnabled())
              return r(L, x, "{", "}");
            if (O && /(?:string)\.quasi|\.xml/.test(O.type)) {
              var $ = [
                /tag\-(?:open|name)/,
                /attribute\-name/
              ];
              return $.some(function(T) {
                return T.test(O.type);
              }) || /(string)\.quasi/.test(O.type) && O.value[b.column - O.start - 1] !== "$" ? void 0 : (s.recordAutoInsert(g, p, "}"), {
                text: "{}",
                selection: [1, 1]
              });
            } else if (s.isSaneInsertion(g, p))
              return /[\]\}\)]/.test(E[b.column]) || g.inMultiSelectMode || l.braces ? (s.recordAutoInsert(g, p, "}"), {
                text: "{}",
                selection: [1, 1]
              }) : (s.recordMaybeInsert(g, p, "{"), {
                text: "{",
                selection: [1, 1]
              });
          } else if (h == "}") {
            e(g);
            var y = E.substring(b.column, b.column + 1);
            if (y == "}") {
              var f = p.$findOpeningBracket("}", { column: b.column + 1, row: b.row });
              if (f !== null && s.isAutoInsertedClosing(b, E, h))
                return s.popAutoInsertedClosing(), {
                  text: "",
                  selection: [1, 1]
                };
            }
          } else if (h == `
` || h == `\r
`) {
            e(g);
            var d = "";
            s.isMaybeInsertedClosing(b, E) && (d = a.stringRepeat("}", o.maybeInsertedBrackets), s.clearMaybeInsertedClosing());
            var y = E.substring(b.column, b.column + 1);
            if (y === "}") {
              var m = p.findMatchingBracket({ row: b.row, column: b.column + 1 }, "}");
              if (!m)
                return null;
              var k = this.$getIndent(p.getLine(m.row));
            } else if (d)
              var k = this.$getIndent(E);
            else {
              s.clearMaybeInsertedClosing();
              return;
            }
            var _ = k + p.getTabString();
            return {
              text: `
` + _ + `
` + k + d,
              selection: [1, _.length, 1, _.length]
            };
          } else
            s.clearMaybeInsertedClosing();
        }), this.add("braces", "deletion", function(c, v, g, p, h) {
          var b = p.doc.getTextRange(h);
          if (!h.isMultiLine() && b == "{") {
            e(g);
            var E = p.doc.getLine(h.start.row), L = E.substring(h.end.column, h.end.column + 1);
            if (L == "}")
              return h.end.column++, h;
            o.maybeInsertedBrackets--;
          }
        }), this.add("parens", "insertion", function(c, v, g, p, h) {
          if (h == "(") {
            e(g);
            var b = g.getSelectionRange(), E = p.doc.getTextRange(b);
            if (E !== "" && g.getWrapBehavioursEnabled())
              return r(b, E, "(", ")");
            if (s.isSaneInsertion(g, p))
              return s.recordAutoInsert(g, p, ")"), {
                text: "()",
                selection: [1, 1]
              };
          } else if (h == ")") {
            e(g);
            var L = g.getCursorPosition(), x = p.doc.getLine(L.row), O = x.substring(L.column, L.column + 1);
            if (O == ")") {
              var $ = p.$findOpeningBracket(")", { column: L.column + 1, row: L.row });
              if ($ !== null && s.isAutoInsertedClosing(L, x, h))
                return s.popAutoInsertedClosing(), {
                  text: "",
                  selection: [1, 1]
                };
            }
          }
        }), this.add("parens", "deletion", function(c, v, g, p, h) {
          var b = p.doc.getTextRange(h);
          if (!h.isMultiLine() && b == "(") {
            e(g);
            var E = p.doc.getLine(h.start.row), L = E.substring(h.start.column + 1, h.start.column + 2);
            if (L == ")")
              return h.end.column++, h;
          }
        }), this.add("brackets", "insertion", function(c, v, g, p, h) {
          if (h == "[") {
            e(g);
            var b = g.getSelectionRange(), E = p.doc.getTextRange(b);
            if (E !== "" && g.getWrapBehavioursEnabled())
              return r(b, E, "[", "]");
            if (s.isSaneInsertion(g, p))
              return s.recordAutoInsert(g, p, "]"), {
                text: "[]",
                selection: [1, 1]
              };
          } else if (h == "]") {
            e(g);
            var L = g.getCursorPosition(), x = p.doc.getLine(L.row), O = x.substring(L.column, L.column + 1);
            if (O == "]") {
              var $ = p.$findOpeningBracket("]", { column: L.column + 1, row: L.row });
              if ($ !== null && s.isAutoInsertedClosing(L, x, h))
                return s.popAutoInsertedClosing(), {
                  text: "",
                  selection: [1, 1]
                };
            }
          }
        }), this.add("brackets", "deletion", function(c, v, g, p, h) {
          var b = p.doc.getTextRange(h);
          if (!h.isMultiLine() && b == "[") {
            e(g);
            var E = p.doc.getLine(h.start.row), L = E.substring(h.start.column + 1, h.start.column + 2);
            if (L == "]")
              return h.end.column++, h;
          }
        }), this.add("string_dquotes", "insertion", function(c, v, g, p, h) {
          var b = p.$mode.$quotes || t;
          if (h.length == 1 && b[h]) {
            if (this.lineCommentStart && this.lineCommentStart.indexOf(h) != -1)
              return;
            e(g);
            var E = h, L = g.getSelectionRange(), x = p.doc.getTextRange(L);
            if (x !== "" && (x.length != 1 || !b[x]) && g.getWrapBehavioursEnabled())
              return r(L, x, E, E);
            if (!x) {
              var O = g.getCursorPosition(), $ = p.doc.getLine(O.row), y = $.substring(O.column - 1, O.column), f = $.substring(O.column, O.column + 1), d = p.getTokenAt(O.row, O.column), m = p.getTokenAt(O.row, O.column + 1);
              if (y == "\\" && d && /escape/.test(d.type))
                return null;
              var k = d && /string|escape/.test(d.type), _ = !m || /string|escape/.test(m.type), T;
              if (f == E)
                T = k !== _, T && /string\.end/.test(m.type) && (T = !1);
              else {
                if (k && !_ || k && _)
                  return null;
                var I = p.$mode.tokenRe;
                I.lastIndex = 0;
                var D = I.test(y);
                I.lastIndex = 0;
                var F = I.test(f), B = p.$mode.$pairQuotesAfter, z = B && B[E] && B[E].test(y);
                if (!z && D || F || f && !/[\s;,.})\]\\]/.test(f))
                  return null;
                var W = $[O.column - 2];
                if (y == E && (W == E || I.test(W)))
                  return null;
                T = !0;
              }
              return {
                text: T ? E + E : "",
                selection: [1, 1]
              };
            }
          }
        }), this.add("string_dquotes", "deletion", function(c, v, g, p, h) {
          var b = p.$mode.$quotes || t, E = p.doc.getTextRange(h);
          if (!h.isMultiLine() && b.hasOwnProperty(E)) {
            e(g);
            var L = p.doc.getLine(h.start.row), x = L.substring(h.start.column + 1, h.start.column + 2);
            if (x == E)
              return h.end.column++, h;
          }
        }), l.closeDocComment !== !1 && this.add("doc comment end", "insertion", function(c, v, g, p, h) {
          if (c === "doc-start" && (h === `
` || h === `\r
`) && g.selection.isEmpty()) {
            var b = g.getCursorPosition();
            if (b.column === 0)
              return;
            for (var E = p.doc.getLine(b.row), L = p.doc.getLine(b.row + 1), x = p.getTokens(b.row), O = 0, $ = 0; $ < x.length; $++) {
              O += x[$].value.length;
              var y = x[$];
              if (O >= b.column) {
                if (O === b.column) {
                  if (!/\.doc/.test(y.type))
                    return;
                  if (/\*\//.test(y.value)) {
                    var f = x[$ + 1];
                    if (!f || !/\.doc/.test(f.type))
                      return;
                  }
                }
                var d = b.column - (O - y.value.length), m = y.value.indexOf("*/"), k = y.value.indexOf("/**", m > -1 ? m + 2 : 0);
                if (k !== -1 && d > k && d < k + 3 || m !== -1 && k !== -1 && d >= m && d <= k || !/\.doc/.test(y.type))
                  return;
                break;
              }
            }
            var _ = this.$getIndent(E);
            if (/\s*\*/.test(L))
              return /^\s*\*/.test(E) ? {
                text: h + _ + "* ",
                selection: [1, 2 + _.length, 1, 2 + _.length]
              } : {
                text: h + _ + " * ",
                selection: [1, 3 + _.length, 1, 3 + _.length]
              };
            if (/\/\*\*/.test(E.substring(0, b.column)))
              return {
                text: h + _ + " * " + h + " " + _ + "*/",
                selection: [1, 4 + _.length, 1, 4 + _.length]
              };
          }
        });
      }, s.isSaneInsertion = function(l, c) {
        var v = l.getCursorPosition(), g = new w(c, v.row, v.column);
        if (!this.$matchTokenType(g.getCurrentToken() || "text", u)) {
          if (/[)}\]]/.test(l.session.getLine(v.row)[v.column]))
            return !0;
          var p = new w(c, v.row, v.column + 1);
          if (!this.$matchTokenType(p.getCurrentToken() || "text", u))
            return !1;
        }
        return g.stepForward(), g.getCurrentTokenRow() !== v.row || this.$matchTokenType(g.getCurrentToken() || "text", i);
      }, s.$matchTokenType = function(l, c) {
        return c.indexOf(l.type || l) > -1;
      }, s.recordAutoInsert = function(l, c, v) {
        var g = l.getCursorPosition(), p = c.doc.getLine(g.row);
        this.isAutoInsertedClosing(g, p, o.autoInsertedLineEnd[0]) || (o.autoInsertedBrackets = 0), o.autoInsertedRow = g.row, o.autoInsertedLineEnd = v + p.substr(g.column), o.autoInsertedBrackets++;
      }, s.recordMaybeInsert = function(l, c, v) {
        var g = l.getCursorPosition(), p = c.doc.getLine(g.row);
        this.isMaybeInsertedClosing(g, p) || (o.maybeInsertedBrackets = 0), o.maybeInsertedRow = g.row, o.maybeInsertedLineStart = p.substr(0, g.column) + v, o.maybeInsertedLineEnd = p.substr(g.column), o.maybeInsertedBrackets++;
      }, s.isAutoInsertedClosing = function(l, c, v) {
        return o.autoInsertedBrackets > 0 && l.row === o.autoInsertedRow && v === o.autoInsertedLineEnd[0] && c.substr(l.column) === o.autoInsertedLineEnd;
      }, s.isMaybeInsertedClosing = function(l, c) {
        return o.maybeInsertedBrackets > 0 && l.row === o.maybeInsertedRow && c.substr(l.column) === o.maybeInsertedLineEnd && c.substr(0, l.column) == o.maybeInsertedLineStart;
      }, s.popAutoInsertedClosing = function() {
        o.autoInsertedLineEnd = o.autoInsertedLineEnd.substr(1), o.autoInsertedBrackets--;
      }, s.clearMaybeInsertedClosing = function() {
        o && (o.maybeInsertedBrackets = 0, o.maybeInsertedRow = -1);
      }, C.inherits(s, A), M.CstyleBehaviour = s;
    }), ace.define("ace/unicode", ["require", "exports", "module"], function(S, M, H) {
      for (var C = [48, 9, 8, 25, 5, 0, 2, 25, 48, 0, 11, 0, 5, 0, 6, 22, 2, 30, 2, 457, 5, 11, 15, 4, 8, 0, 2, 0, 18, 116, 2, 1, 3, 3, 9, 0, 2, 2, 2, 0, 2, 19, 2, 82, 2, 138, 2, 4, 3, 155, 12, 37, 3, 0, 8, 38, 10, 44, 2, 0, 2, 1, 2, 1, 2, 0, 9, 26, 6, 2, 30, 10, 7, 61, 2, 9, 5, 101, 2, 7, 3, 9, 2, 18, 3, 0, 17, 58, 3, 100, 15, 53, 5, 0, 6, 45, 211, 57, 3, 18, 2, 5, 3, 11, 3, 9, 2, 1, 7, 6, 2, 2, 2, 7, 3, 1, 3, 21, 2, 6, 2, 0, 4, 3, 3, 8, 3, 1, 3, 3, 9, 0, 5, 1, 2, 4, 3, 11, 16, 2, 2, 5, 5, 1, 3, 21, 2, 6, 2, 1, 2, 1, 2, 1, 3, 0, 2, 4, 5, 1, 3, 2, 4, 0, 8, 3, 2, 0, 8, 15, 12, 2, 2, 8, 2, 2, 2, 21, 2, 6, 2, 1, 2, 4, 3, 9, 2, 2, 2, 2, 3, 0, 16, 3, 3, 9, 18, 2, 2, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 3, 8, 3, 1, 3, 2, 9, 1, 5, 1, 2, 4, 3, 9, 2, 0, 17, 1, 2, 5, 4, 2, 2, 3, 4, 1, 2, 0, 2, 1, 4, 1, 4, 2, 4, 11, 5, 4, 4, 2, 2, 3, 3, 0, 7, 0, 15, 9, 18, 2, 2, 7, 2, 2, 2, 22, 2, 9, 2, 4, 4, 7, 2, 2, 2, 3, 8, 1, 2, 1, 7, 3, 3, 9, 19, 1, 2, 7, 2, 2, 2, 22, 2, 9, 2, 4, 3, 8, 2, 2, 2, 3, 8, 1, 8, 0, 2, 3, 3, 9, 19, 1, 2, 7, 2, 2, 2, 22, 2, 15, 4, 7, 2, 2, 2, 3, 10, 0, 9, 3, 3, 9, 11, 5, 3, 1, 2, 17, 4, 23, 2, 8, 2, 0, 3, 6, 4, 0, 5, 5, 2, 0, 2, 7, 19, 1, 14, 57, 6, 14, 2, 9, 40, 1, 2, 0, 3, 1, 2, 0, 3, 0, 7, 3, 2, 6, 2, 2, 2, 0, 2, 0, 3, 1, 2, 12, 2, 2, 3, 4, 2, 0, 2, 5, 3, 9, 3, 1, 35, 0, 24, 1, 7, 9, 12, 0, 2, 0, 2, 0, 5, 9, 2, 35, 5, 19, 2, 5, 5, 7, 2, 35, 10, 0, 58, 73, 7, 77, 3, 37, 11, 42, 2, 0, 4, 328, 2, 3, 3, 6, 2, 0, 2, 3, 3, 40, 2, 3, 3, 32, 2, 3, 3, 6, 2, 0, 2, 3, 3, 14, 2, 56, 2, 3, 3, 66, 5, 0, 33, 15, 17, 84, 13, 619, 3, 16, 2, 25, 6, 74, 22, 12, 2, 6, 12, 20, 12, 19, 13, 12, 2, 2, 2, 1, 13, 51, 3, 29, 4, 0, 5, 1, 3, 9, 34, 2, 3, 9, 7, 87, 9, 42, 6, 69, 11, 28, 4, 11, 5, 11, 11, 39, 3, 4, 12, 43, 5, 25, 7, 10, 38, 27, 5, 62, 2, 28, 3, 10, 7, 9, 14, 0, 89, 75, 5, 9, 18, 8, 13, 42, 4, 11, 71, 55, 9, 9, 4, 48, 83, 2, 2, 30, 14, 230, 23, 280, 3, 5, 3, 37, 3, 5, 3, 7, 2, 0, 2, 0, 2, 0, 2, 30, 3, 52, 2, 6, 2, 0, 4, 2, 2, 6, 4, 3, 3, 5, 5, 12, 6, 2, 2, 6, 67, 1, 20, 0, 29, 0, 14, 0, 17, 4, 60, 12, 5, 0, 4, 11, 18, 0, 5, 0, 3, 9, 2, 0, 4, 4, 7, 0, 2, 0, 2, 0, 2, 3, 2, 10, 3, 3, 6, 4, 5, 0, 53, 1, 2684, 46, 2, 46, 2, 132, 7, 6, 15, 37, 11, 53, 10, 0, 17, 22, 10, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 31, 48, 0, 470, 1, 36, 5, 2, 4, 6, 1, 5, 85, 3, 1, 3, 2, 2, 89, 2, 3, 6, 40, 4, 93, 18, 23, 57, 15, 513, 6581, 75, 20939, 53, 1164, 68, 45, 3, 268, 4, 27, 21, 31, 3, 13, 13, 1, 2, 24, 9, 69, 11, 1, 38, 8, 3, 102, 3, 1, 111, 44, 25, 51, 13, 68, 12, 9, 7, 23, 4, 0, 5, 45, 3, 35, 13, 28, 4, 64, 15, 10, 39, 54, 10, 13, 3, 9, 7, 22, 4, 1, 5, 66, 25, 2, 227, 42, 2, 1, 3, 9, 7, 11171, 13, 22, 5, 48, 8453, 301, 3, 61, 3, 105, 39, 6, 13, 4, 6, 11, 2, 12, 2, 4, 2, 0, 2, 1, 2, 1, 2, 107, 34, 362, 19, 63, 3, 53, 41, 11, 5, 15, 17, 6, 13, 1, 25, 2, 33, 4, 2, 134, 20, 9, 8, 25, 5, 0, 2, 25, 12, 88, 4, 5, 3, 5, 3, 5, 3, 2], A = 0, w = [], a = 0; a < C.length; a += 2)
        w.push(A += C[a]), C[a + 1] && w.push(45, A += C[a + 1]);
      M.wordChars = String.fromCharCode.apply(null, w);
    }), ace.define("ace/mode/text", ["require", "exports", "module", "ace/config", "ace/tokenizer", "ace/mode/text_highlight_rules", "ace/mode/behaviour/cstyle", "ace/unicode", "ace/lib/lang", "ace/token_iterator", "ace/range"], function(S, M, H) {
      var C = S("../config"), A = S("../tokenizer").Tokenizer, w = S("./text_highlight_rules").TextHighlightRules, a = S("./behaviour/cstyle").CstyleBehaviour, u = S("../unicode"), i = S("../lib/lang"), o = S("../token_iterator").TokenIterator, n = S("../range").Range, t;
      t = function() {
        this.HighlightRules = w;
      }, (function() {
        this.$defaultBehaviour = new a(), this.tokenRe = new RegExp("^[" + u.wordChars + "\\$_]+", "g"), this.nonTokenRe = new RegExp("^(?:[^" + u.wordChars + "\\$_]|\\s])+", "g"), this.getTokenizer = function() {
          return this.$tokenizer || (this.$highlightRules = this.$highlightRules || new this.HighlightRules(this.$highlightRuleConfig), this.$tokenizer = new A(this.$highlightRules.getRules())), this.$tokenizer;
        }, this.lineCommentStart = "", this.blockComment = "", this.toggleCommentLines = function(e, r, s, l) {
          var c = r.doc, v = !0, g = !0, p = 1 / 0, h = r.getTabSize(), b = !1;
          if (this.lineCommentStart) {
            if (Array.isArray(this.lineCommentStart))
              var x = this.lineCommentStart.map(i.escapeRegExp).join("|"), E = this.lineCommentStart[0];
            else
              var x = i.escapeRegExp(this.lineCommentStart), E = this.lineCommentStart;
            x = new RegExp("^(\\s*)(?:" + x + ") ?"), b = r.getUseSoftTabs();
            var y = function(F, B) {
              var z = F.match(x);
              if (z) {
                var W = z[1].length, P = z[0].length;
                !m(F, W, P) && z[0][P - 1] == " " && P--, c.removeInLine(B, W, P);
              }
            }, d = E + " ", $ = function(F, B) {
              (!v || /\S/.test(F)) && (m(F, p, p) ? c.insertInLine({ row: B, column: p }, d) : c.insertInLine({ row: B, column: p }, E));
            }, f = function(F, B) {
              return x.test(F);
            }, m = function(F, B, z) {
              for (var W = 0; B-- && F.charAt(B) == " "; )
                W++;
              if (W % h != 0)
                return !1;
              for (var W = 0; F.charAt(z++) == " "; )
                W++;
              return h > 2 ? W % h != h - 1 : W % h == 0;
            };
          } else {
            if (!this.blockComment)
              return !1;
            var E = this.blockComment.start, L = this.blockComment.end, x = new RegExp("^(\\s*)(?:" + i.escapeRegExp(E) + ")"), O = new RegExp("(?:" + i.escapeRegExp(L) + ")\\s*$"), $ = function(T, I) {
              f(T, I) || (!v || /\S/.test(T)) && (c.insertInLine({ row: I, column: T.length }, L), c.insertInLine({ row: I, column: p }, E));
            }, y = function(T, I) {
              var D;
              (D = T.match(O)) && c.removeInLine(I, T.length - D[0].length, T.length), (D = T.match(x)) && c.removeInLine(I, D[1].length, D[0].length);
            }, f = function(T, I) {
              if (x.test(T))
                return !0;
              for (var D = r.getTokens(I), F = 0; F < D.length; F++)
                if (D[F].type === "comment")
                  return !0;
            };
          }
          function k(T) {
            for (var I = s; I <= l; I++)
              T(c.getLine(I), I);
          }
          var _ = 1 / 0;
          k(function(T, I) {
            var D = T.search(/\S/);
            D !== -1 ? (D < p && (p = D), g && !f(T, I) && (g = !1)) : _ > T.length && (_ = T.length);
          }), p == 1 / 0 && (p = _, v = !1, g = !1), b && p % h != 0 && (p = Math.floor(p / h) * h), k(g ? y : $);
        }, this.toggleBlockComment = function(e, r, s, l) {
          var c = this.blockComment;
          if (c) {
            !c.start && c[0] && (c = c[0]);
            var v = new o(r, l.row, l.column), g = v.getCurrentToken();
            r.selection;
            var p = r.selection.toOrientedRange(), h, b;
            if (g && /comment/.test(g.type)) {
              for (var E, L; g && /comment/.test(g.type); ) {
                var x = g.value.indexOf(c.start);
                if (x != -1) {
                  var O = v.getCurrentTokenRow(), $ = v.getCurrentTokenColumn() + x;
                  E = new n(O, $, O, $ + c.start.length);
                  break;
                }
                g = v.stepBackward();
              }
              for (var v = new o(r, l.row, l.column), g = v.getCurrentToken(); g && /comment/.test(g.type); ) {
                var x = g.value.indexOf(c.end);
                if (x != -1) {
                  var O = v.getCurrentTokenRow(), $ = v.getCurrentTokenColumn() + x;
                  L = new n(O, $, O, $ + c.end.length);
                  break;
                }
                g = v.stepForward();
              }
              L && r.remove(L), E && (r.remove(E), h = E.start.row, b = -c.start.length);
            } else
              b = c.start.length, h = s.start.row, r.insert(s.end, c.end), r.insert(s.start, c.start);
            p.start.row == h && (p.start.column += b), p.end.row == h && (p.end.column += b), r.selection.fromOrientedRange(p);
          }
        }, this.getNextLineIndent = function(e, r, s) {
          return this.$getIndent(r);
        }, this.checkOutdent = function(e, r, s) {
          return !1;
        }, this.autoOutdent = function(e, r, s) {
        }, this.$getIndent = function(e) {
          return e.match(/^\s*/)[0];
        }, this.createWorker = function(e) {
          return null;
        }, this.createModeDelegates = function(e) {
          this.$embeds = [], this.$modes = {};
          for (var r in e)
            if (e[r]) {
              var s = e[r], l = s.prototype.$id, c = C.$modes[l];
              c || (C.$modes[l] = c = new s()), C.$modes[r] || (C.$modes[r] = c), this.$embeds.push(r), this.$modes[r] = c;
            }
          for (var v = [
            "toggleBlockComment",
            "toggleCommentLines",
            "getNextLineIndent",
            "checkOutdent",
            "autoOutdent",
            "transformAction",
            "getCompletions"
          ], g = function(h) {
            (function(b) {
              var E = v[h], L = b[E];
              b[v[h]] = function() {
                return this.$delegator(E, arguments, L);
              };
            })(p);
          }, p = this, r = 0; r < v.length; r++)
            g(r);
        }, this.$delegator = function(e, r, s) {
          var l = r[0] || "start";
          if (typeof l != "string") {
            if (Array.isArray(l[2])) {
              var c = l[2][l[2].length - 1], v = this.$modes[c];
              if (v)
                return v[e].apply(v, [l[1]].concat([].slice.call(r, 1)));
            }
            l = l[0] || "start";
          }
          for (var g = 0; g < this.$embeds.length; g++)
            if (this.$modes[this.$embeds[g]]) {
              var p = l.split(this.$embeds[g]);
              if (!p[0] && p[1]) {
                r[0] = p[1];
                var v = this.$modes[this.$embeds[g]];
                return v[e].apply(v, r);
              }
            }
          var h = s.apply(this, r);
          return s ? h : void 0;
        }, this.transformAction = function(e, r, s, l, c) {
          if (this.$behaviour) {
            var v = this.$behaviour.getBehaviours();
            for (var g in v)
              if (v[g][r]) {
                var p = v[g][r].apply(this, arguments);
                if (p)
                  return p;
              }
          }
        }, this.getKeywords = function(e) {
          if (!this.completionKeywords) {
            var r = this.$tokenizer.rules, s = [];
            for (var l in r)
              for (var c = r[l], v = 0, g = c.length; v < g; v++)
                if (typeof c[v].token == "string")
                  /keyword|support|storage/.test(c[v].token) && s.push(c[v].regex);
                else if (typeof c[v].token == "object") {
                  for (var p = 0, h = c[v].token.length; p < h; p++)
                    if (/keyword|support|storage/.test(c[v].token[p])) {
                      var l = c[v].regex.match(/\(.+?\)/g)[p];
                      s.push(l.substr(1, l.length - 2));
                    }
                }
            this.completionKeywords = s;
          }
          return e ? s.concat(this.$keywordList || []) : this.$keywordList;
        }, this.$createKeywordList = function() {
          return this.$highlightRules || this.getTokenizer(), this.$keywordList = this.$highlightRules.$keywordList || [];
        }, this.getCompletions = function(e, r, s, l) {
          var c = this.$keywordList || this.$createKeywordList();
          return c.map(function(v) {
            return {
              name: v,
              value: v,
              score: 0,
              meta: "keyword"
            };
          });
        }, this.$id = "ace/mode/text";
      }).call(t.prototype), M.Mode = t;
    }), ace.define("ace/line_widgets", ["require", "exports", "module", "ace/lib/dom"], function(S, M, H) {
      var C = S("./lib/dom"), A = (
        /** @class */
        function() {
          function w(a) {
            this.session = a, this.session.widgetManager = this, this.session.getRowLength = this.getRowLength, this.session.$getWidgetScreenLength = this.$getWidgetScreenLength, this.updateOnChange = this.updateOnChange.bind(this), this.renderWidgets = this.renderWidgets.bind(this), this.measureWidgets = this.measureWidgets.bind(this), this.session._changedWidgets = [], this.$onChangeEditor = this.$onChangeEditor.bind(this), this.session.on("change", this.updateOnChange), this.session.on("changeFold", this.updateOnFold), this.session.on("changeEditor", this.$onChangeEditor);
          }
          return w.prototype.getRowLength = function(a) {
            var u;
            return this.lineWidgets ? u = this.lineWidgets[a] && this.lineWidgets[a].rowCount || 0 : u = 0, !this.$useWrapMode || !this.$wrapData[a] ? 1 + u : this.$wrapData[a].length + 1 + u;
          }, w.prototype.$getWidgetScreenLength = function() {
            var a = 0;
            return this.lineWidgets.forEach(function(u) {
              u && u.rowCount && !u.hidden && (a += u.rowCount);
            }), a;
          }, w.prototype.$onChangeEditor = function(a) {
            this.attach(a.editor);
          }, w.prototype.attach = function(a) {
            a && a.widgetManager && a.widgetManager != this && a.widgetManager.detach(), this.editor != a && (this.detach(), this.editor = a, a && (a.widgetManager = this, a.renderer.on("beforeRender", this.measureWidgets), a.renderer.on("afterRender", this.renderWidgets)));
          }, w.prototype.detach = function(a) {
            var u = this.editor;
            if (u) {
              this.editor = null, u.widgetManager = null, u.renderer.off("beforeRender", this.measureWidgets), u.renderer.off("afterRender", this.renderWidgets);
              var i = this.session.lineWidgets;
              i && i.forEach(function(o) {
                o && o.el && o.el.parentNode && (o._inDocument = !1, o.el.parentNode.removeChild(o.el));
              });
            }
          }, w.prototype.updateOnFold = function(a, u) {
            var i = u.lineWidgets;
            if (!(!i || !a.action)) {
              for (var o = a.data, n = o.start.row, t = o.end.row, e = a.action == "add", r = n + 1; r < t; r++)
                i[r] && (i[r].hidden = e);
              i[t] && (e ? i[n] ? i[t].hidden = e : i[n] = i[t] : (i[n] == i[t] && (i[n] = void 0), i[t].hidden = e));
            }
          }, w.prototype.updateOnChange = function(a) {
            var u = this.session.lineWidgets;
            if (u) {
              var i = a.start.row, o = a.end.row - i;
              if (o !== 0) if (a.action == "remove") {
                var n = u.splice(i + 1, o);
                !u[i] && n[n.length - 1] && (u[i] = n.pop()), n.forEach(function(e) {
                  e && this.removeLineWidget(e);
                }, this), this.$updateRows();
              } else {
                var t = new Array(o);
                u[i] && u[i].column != null && a.start.column > u[i].column && i++, t.unshift(i, 0), u.splice.apply(u, t), this.$updateRows();
              }
            }
          }, w.prototype.$updateRows = function() {
            var a = this.session.lineWidgets;
            if (a) {
              var u = !0;
              a.forEach(function(i, o) {
                if (i)
                  for (u = !1, i.row = o; i.$oldWidget; )
                    i.$oldWidget.row = o, i = i.$oldWidget;
              }), u && (this.session.lineWidgets = null);
            }
          }, w.prototype.$registerLineWidget = function(a) {
            this.session.lineWidgets || (this.session.lineWidgets = new Array(this.session.getLength()));
            var u = this.session.lineWidgets[a.row];
            return u && (a.$oldWidget = u, u.el && u.el.parentNode && (u.el.parentNode.removeChild(u.el), u._inDocument = !1)), this.session.lineWidgets[a.row] = a, a;
          }, w.prototype.addLineWidget = function(a) {
            if (this.$registerLineWidget(a), a.session = this.session, !this.editor)
              return a;
            var u = this.editor.renderer;
            a.html && !a.el && (a.el = C.createElement("div"), a.el.innerHTML = a.html), a.text && !a.el && (a.el = C.createElement("div"), a.el.textContent = a.text), a.el && (C.addCssClass(a.el, "ace_lineWidgetContainer"), a.className && C.addCssClass(a.el, a.className), a.el.style.position = "absolute", a.el.style.zIndex = "5", u.container.appendChild(a.el), a._inDocument = !0, a.coverGutter || (a.el.style.zIndex = "3"), a.pixelHeight == null && (a.pixelHeight = a.el.offsetHeight)), a.rowCount == null && (a.rowCount = a.pixelHeight / u.layerConfig.lineHeight);
            var i = this.session.getFoldAt(a.row, 0);
            if (a.$fold = i, i) {
              var o = this.session.lineWidgets;
              a.row == i.end.row && !o[i.start.row] ? o[i.start.row] = a : a.hidden = !0;
            }
            return this.session._emit("changeFold", { data: { start: { row: a.row } } }), this.$updateRows(), this.renderWidgets(null, u), this.onWidgetChanged(a), a;
          }, w.prototype.removeLineWidget = function(a) {
            if (a._inDocument = !1, a.session = null, a.el && a.el.parentNode && a.el.parentNode.removeChild(a.el), a.editor && a.editor.destroy)
              try {
                a.editor.destroy();
              } catch {
              }
            if (this.session.lineWidgets) {
              var u = this.session.lineWidgets[a.row];
              if (u == a)
                this.session.lineWidgets[a.row] = a.$oldWidget, a.$oldWidget && this.onWidgetChanged(a.$oldWidget);
              else
                for (; u; ) {
                  if (u.$oldWidget == a) {
                    u.$oldWidget = a.$oldWidget;
                    break;
                  }
                  u = u.$oldWidget;
                }
            }
            this.session._emit("changeFold", { data: { start: { row: a.row } } }), this.$updateRows();
          }, w.prototype.getWidgetsAtRow = function(a) {
            for (var u = this.session.lineWidgets, i = u && u[a], o = []; i; )
              o.push(i), i = i.$oldWidget;
            return o;
          }, w.prototype.onWidgetChanged = function(a) {
            this.session._changedWidgets.push(a), this.editor && this.editor.renderer.updateFull();
          }, w.prototype.measureWidgets = function(a, u) {
            var i = this.session._changedWidgets, o = u.layerConfig;
            if (!(!i || !i.length)) {
              for (var n = 1 / 0, t = 0; t < i.length; t++) {
                var e = i[t];
                if (!(!e || !e.el) && e.session == this.session) {
                  if (!e._inDocument) {
                    if (this.session.lineWidgets[e.row] != e)
                      continue;
                    e._inDocument = !0, u.container.appendChild(e.el);
                  }
                  e.h = e.el.offsetHeight, e.fixedWidth || (e.w = e.el.offsetWidth, e.screenWidth = Math.ceil(e.w / o.characterWidth));
                  var r = e.h / o.lineHeight;
                  e.coverLine && (r -= this.session.getRowLineCount(e.row), r < 0 && (r = 0)), e.rowCount != r && (e.rowCount = r, e.row < n && (n = e.row));
                }
              }
              n != 1 / 0 && (this.session._emit("changeFold", { data: { start: { row: n } } }), this.session.lineWidgetWidth = null), this.session._changedWidgets = [];
            }
          }, w.prototype.renderWidgets = function(a, u) {
            var i = u.layerConfig, o = this.session.lineWidgets;
            if (o) {
              for (var n = Math.min(this.firstRow, i.firstRow), t = Math.max(this.lastRow, i.lastRow, o.length); n > 0 && !o[n]; )
                n--;
              this.firstRow = i.firstRow, this.lastRow = i.lastRow, u.$cursorLayer.config = i;
              for (var e = n; e <= t; e++) {
                var r = o[e];
                if (!(!r || !r.el)) {
                  if (r.hidden) {
                    r.el.style.top = -100 - (r.pixelHeight || 0) + "px";
                    continue;
                  }
                  r._inDocument || (r._inDocument = !0, u.container.appendChild(r.el));
                  var s = u.$cursorLayer.getPixelPosition({ row: e, column: 0 }, !0).top;
                  r.coverLine || (s += i.lineHeight * this.session.getRowLineCount(r.row)), r.el.style.top = s - i.offset + "px";
                  var l = r.coverGutter ? 0 : u.gutterWidth;
                  r.fixedWidth || (l -= u.scrollLeft), r.el.style.left = l + "px", r.fullWidth && r.screenWidth && (r.el.style.minWidth = i.width + 2 * i.padding + "px"), r.fixedWidth ? r.el.style.right = u.scrollBar.getWidth() + "px" : r.el.style.right = "";
                }
              }
            }
          }, w;
        }()
      );
      M.LineWidgets = A;
    }), ace.define("ace/apply_delta", ["require", "exports", "module"], function(S, M, H) {
      M.applyDelta = function(C, A, w) {
        var a = A.start.row, u = A.start.column, i = C[a] || "";
        switch (A.action) {
          case "insert":
            var o = A.lines;
            if (o.length === 1)
              C[a] = i.substring(0, u) + A.lines[0] + i.substring(u);
            else {
              var n = [a, 1].concat(A.lines);
              C.splice.apply(C, n), C[a] = i.substring(0, u) + C[a], C[a + A.lines.length - 1] += i.substring(u);
            }
            break;
          case "remove":
            var t = A.end.column, e = A.end.row;
            a === e ? C[a] = i.substring(0, u) + i.substring(t) : C.splice(a, e - a + 1, i.substring(0, u) + C[e].substring(t));
            break;
        }
      };
    }), ace.define("ace/anchor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(S, M, H) {
      var C = S("./lib/oop"), A = S("./lib/event_emitter").EventEmitter, w = (
        /** @class */
        function() {
          function i(o, n, t) {
            this.$onChange = this.onChange.bind(this), this.attach(o), typeof n != "number" ? this.setPosition(n.row, n.column) : this.setPosition(n, t);
          }
          return i.prototype.getPosition = function() {
            return this.$clipPositionToDocument(this.row, this.column);
          }, i.prototype.getDocument = function() {
            return this.document;
          }, i.prototype.onChange = function(o) {
            if (!(o.start.row == o.end.row && o.start.row != this.row) && !(o.start.row > this.row)) {
              var n = u(o, { row: this.row, column: this.column }, this.$insertRight);
              this.setPosition(n.row, n.column, !0);
            }
          }, i.prototype.setPosition = function(o, n, t) {
            var e;
            if (t ? e = {
              row: o,
              column: n
            } : e = this.$clipPositionToDocument(o, n), !(this.row == e.row && this.column == e.column)) {
              var r = {
                row: this.row,
                column: this.column
              };
              this.row = e.row, this.column = e.column, this._signal("change", {
                old: r,
                value: e
              });
            }
          }, i.prototype.detach = function() {
            this.document.off("change", this.$onChange);
          }, i.prototype.attach = function(o) {
            this.document = o || this.document, this.document.on("change", this.$onChange);
          }, i.prototype.$clipPositionToDocument = function(o, n) {
            var t = {};
            return o >= this.document.getLength() ? (t.row = Math.max(0, this.document.getLength() - 1), t.column = this.document.getLine(t.row).length) : o < 0 ? (t.row = 0, t.column = 0) : (t.row = o, t.column = Math.min(this.document.getLine(t.row).length, Math.max(0, n))), n < 0 && (t.column = 0), t;
          }, i;
        }()
      );
      w.prototype.$insertRight = !1, C.implement(w.prototype, A);
      function a(i, o, n) {
        var t = n ? i.column <= o.column : i.column < o.column;
        return i.row < o.row || i.row == o.row && t;
      }
      function u(i, o, n) {
        var t = i.action == "insert", e = (t ? 1 : -1) * (i.end.row - i.start.row), r = (t ? 1 : -1) * (i.end.column - i.start.column), s = i.start, l = t ? s : i.end;
        return a(o, s, n) ? {
          row: o.row,
          column: o.column
        } : a(l, o, !n) ? {
          row: o.row + e,
          column: o.column + (o.row == l.row ? r : 0)
        } : {
          row: s.row,
          column: s.column
        };
      }
      M.Anchor = w;
    }), ace.define("ace/document", ["require", "exports", "module", "ace/lib/oop", "ace/apply_delta", "ace/lib/event_emitter", "ace/range", "ace/anchor"], function(S, M, H) {
      var C = S("./lib/oop"), A = S("./apply_delta").applyDelta, w = S("./lib/event_emitter").EventEmitter, a = S("./range").Range, u = S("./anchor").Anchor, i = (
        /** @class */
        function() {
          function o(n) {
            this.$lines = [""], n.length === 0 ? this.$lines = [""] : Array.isArray(n) ? this.insertMergedLines({ row: 0, column: 0 }, n) : this.insert({ row: 0, column: 0 }, n);
          }
          return o.prototype.setValue = function(n) {
            var t = this.getLength() - 1;
            this.remove(new a(0, 0, t, this.getLine(t).length)), this.insert({ row: 0, column: 0 }, n || "");
          }, o.prototype.getValue = function() {
            return this.getAllLines().join(this.getNewLineCharacter());
          }, o.prototype.createAnchor = function(n, t) {
            return new u(this, n, t);
          }, o.prototype.$detectNewLine = function(n) {
            var t = n.match(/^.*?(\r\n|\r|\n)/m);
            this.$autoNewLine = t ? t[1] : `
`, this._signal("changeNewLineMode");
          }, o.prototype.getNewLineCharacter = function() {
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
          }, o.prototype.setNewLineMode = function(n) {
            this.$newLineMode !== n && (this.$newLineMode = n, this._signal("changeNewLineMode"));
          }, o.prototype.getNewLineMode = function() {
            return this.$newLineMode;
          }, o.prototype.isNewLine = function(n) {
            return n == `\r
` || n == "\r" || n == `
`;
          }, o.prototype.getLine = function(n) {
            return this.$lines[n] || "";
          }, o.prototype.getLines = function(n, t) {
            return this.$lines.slice(n, t + 1);
          }, o.prototype.getAllLines = function() {
            return this.getLines(0, this.getLength());
          }, o.prototype.getLength = function() {
            return this.$lines.length;
          }, o.prototype.getTextRange = function(n) {
            return this.getLinesForRange(n).join(this.getNewLineCharacter());
          }, o.prototype.getLinesForRange = function(n) {
            var t;
            if (n.start.row === n.end.row)
              t = [this.getLine(n.start.row).substring(n.start.column, n.end.column)];
            else {
              t = this.getLines(n.start.row, n.end.row), t[0] = (t[0] || "").substring(n.start.column);
              var e = t.length - 1;
              n.end.row - n.start.row == e && (t[e] = t[e].substring(0, n.end.column));
            }
            return t;
          }, o.prototype.insertLines = function(n, t) {
            return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."), this.insertFullLines(n, t);
          }, o.prototype.removeLines = function(n, t) {
            return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."), this.removeFullLines(n, t);
          }, o.prototype.insertNewLine = function(n) {
            return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."), this.insertMergedLines(n, ["", ""]);
          }, o.prototype.insert = function(n, t) {
            return this.getLength() <= 1 && this.$detectNewLine(t), this.insertMergedLines(n, this.$split(t));
          }, o.prototype.insertInLine = function(n, t) {
            var e = this.clippedPos(n.row, n.column), r = this.pos(n.row, n.column + t.length);
            return this.applyDelta({
              start: e,
              end: r,
              action: "insert",
              lines: [t]
            }, !0), this.clonePos(r);
          }, o.prototype.clippedPos = function(n, t) {
            var e = this.getLength();
            n === void 0 ? n = e : n < 0 ? n = 0 : n >= e && (n = e - 1, t = void 0);
            var r = this.getLine(n);
            return t == null && (t = r.length), t = Math.min(Math.max(t, 0), r.length), { row: n, column: t };
          }, o.prototype.clonePos = function(n) {
            return { row: n.row, column: n.column };
          }, o.prototype.pos = function(n, t) {
            return { row: n, column: t };
          }, o.prototype.$clipPosition = function(n) {
            var t = this.getLength();
            return n.row >= t ? (n.row = Math.max(0, t - 1), n.column = this.getLine(t - 1).length) : (n.row = Math.max(0, n.row), n.column = Math.min(Math.max(n.column, 0), this.getLine(n.row).length)), n;
          }, o.prototype.insertFullLines = function(n, t) {
            n = Math.min(Math.max(n, 0), this.getLength());
            var e = 0;
            n < this.getLength() ? (t = t.concat([""]), e = 0) : (t = [""].concat(t), n--, e = this.$lines[n].length), this.insertMergedLines({ row: n, column: e }, t);
          }, o.prototype.insertMergedLines = function(n, t) {
            var e = this.clippedPos(n.row, n.column), r = {
              row: e.row + t.length - 1,
              column: (t.length == 1 ? e.column : 0) + t[t.length - 1].length
            };
            return this.applyDelta({
              start: e,
              end: r,
              action: "insert",
              lines: t
            }), this.clonePos(r);
          }, o.prototype.remove = function(n) {
            var t = this.clippedPos(n.start.row, n.start.column), e = this.clippedPos(n.end.row, n.end.column);
            return this.applyDelta({
              start: t,
              end: e,
              action: "remove",
              lines: this.getLinesForRange({ start: t, end: e })
            }), this.clonePos(t);
          }, o.prototype.removeInLine = function(n, t, e) {
            var r = this.clippedPos(n, t), s = this.clippedPos(n, e);
            return this.applyDelta({
              start: r,
              end: s,
              action: "remove",
              lines: this.getLinesForRange({ start: r, end: s })
            }, !0), this.clonePos(r);
          }, o.prototype.removeFullLines = function(n, t) {
            n = Math.min(Math.max(0, n), this.getLength() - 1), t = Math.min(Math.max(0, t), this.getLength() - 1);
            var e = t == this.getLength() - 1 && n > 0, r = t < this.getLength() - 1, s = e ? n - 1 : n, l = e ? this.getLine(s).length : 0, c = r ? t + 1 : t, v = r ? 0 : this.getLine(c).length, g = new a(s, l, c, v), p = this.$lines.slice(n, t + 1);
            return this.applyDelta({
              start: g.start,
              end: g.end,
              action: "remove",
              lines: this.getLinesForRange(g)
            }), p;
          }, o.prototype.removeNewLine = function(n) {
            n < this.getLength() - 1 && n >= 0 && this.applyDelta({
              start: this.pos(n, this.getLine(n).length),
              end: this.pos(n + 1, 0),
              action: "remove",
              lines: ["", ""]
            });
          }, o.prototype.replace = function(n, t) {
            if (n instanceof a || (n = a.fromPoints(n.start, n.end)), t.length === 0 && n.isEmpty())
              return n.start;
            if (t == this.getTextRange(n))
              return n.end;
            this.remove(n);
            var e;
            return t ? e = this.insert(n.start, t) : e = n.start, e;
          }, o.prototype.applyDeltas = function(n) {
            for (var t = 0; t < n.length; t++)
              this.applyDelta(n[t]);
          }, o.prototype.revertDeltas = function(n) {
            for (var t = n.length - 1; t >= 0; t--)
              this.revertDelta(n[t]);
          }, o.prototype.applyDelta = function(n, t) {
            var e = n.action == "insert";
            (e ? n.lines.length <= 1 && !n.lines[0] : !a.comparePoints(n.start, n.end)) || (e && n.lines.length > 2e4 ? this.$splitAndapplyLargeDelta(n, 2e4) : (A(this.$lines, n, t), this._signal("change", n)));
          }, o.prototype.$safeApplyDelta = function(n) {
            var t = this.$lines.length;
            (n.action == "remove" && n.start.row < t && n.end.row < t || n.action == "insert" && n.start.row <= t) && this.applyDelta(n);
          }, o.prototype.$splitAndapplyLargeDelta = function(n, t) {
            for (var e = n.lines, r = e.length - t + 1, s = n.start.row, l = n.start.column, c = 0, v = 0; c < r; c = v) {
              v += t - 1;
              var g = e.slice(c, v);
              g.push(""), this.applyDelta({
                start: this.pos(s + c, l),
                end: this.pos(s + v, l = 0),
                action: n.action,
                lines: g
              }, !0);
            }
            n.lines = e.slice(c), n.start.row = s + c, n.start.column = l, this.applyDelta(n, !0);
          }, o.prototype.revertDelta = function(n) {
            this.$safeApplyDelta({
              start: this.clonePos(n.start),
              end: this.clonePos(n.end),
              action: n.action == "insert" ? "remove" : "insert",
              lines: n.lines.slice()
            });
          }, o.prototype.indexToPosition = function(n, t) {
            for (var e = this.$lines || this.getAllLines(), r = this.getNewLineCharacter().length, s = t || 0, l = e.length; s < l; s++)
              if (n -= e[s].length + r, n < 0)
                return { row: s, column: n + e[s].length + r };
            return { row: l - 1, column: n + e[l - 1].length + r };
          }, o.prototype.positionToIndex = function(n, t) {
            for (var e = this.$lines || this.getAllLines(), r = this.getNewLineCharacter().length, s = 0, l = Math.min(n.row, e.length), c = t || 0; c < l; ++c)
              s += e[c].length + r;
            return s + n.column;
          }, o.prototype.$split = function(n) {
            return n.split(/\r\n|\r|\n/);
          }, o;
        }()
      );
      i.prototype.$autoNewLine = "", i.prototype.$newLineMode = "auto", C.implement(i.prototype, w), M.Document = i;
    }), ace.define("ace/background_tokenizer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(S, M, H) {
      var C = S("./lib/oop"), A = S("./lib/event_emitter").EventEmitter, w = (
        /** @class */
        function() {
          function a(u, i) {
            this.running = !1, this.lines = [], this.states = [], this.currentLine = 0, this.tokenizer = u;
            var o = this;
            this.$worker = function() {
              if (o.running) {
                for (var n = /* @__PURE__ */ new Date(), t = o.currentLine, e = -1, r = o.doc, s = t; o.lines[t]; )
                  t++;
                var l = r.getLength(), c = 0;
                for (o.running = !1; t < l; ) {
                  o.$tokenizeRow(t), e = t;
                  do
                    t++;
                  while (o.lines[t]);
                  if (c++, c % 5 === 0 && /* @__PURE__ */ new Date() - n > 20) {
                    o.running = setTimeout(o.$worker, 20);
                    break;
                  }
                }
                o.currentLine = t, e == -1 && (e = t), s <= e && o.fireUpdateEvent(s, e);
              }
            };
          }
          return a.prototype.setTokenizer = function(u) {
            this.tokenizer = u, this.lines = [], this.states = [], this.start(0);
          }, a.prototype.setDocument = function(u) {
            this.doc = u, this.lines = [], this.states = [], this.stop();
          }, a.prototype.fireUpdateEvent = function(u, i) {
            var o = {
              first: u,
              last: i
            };
            this._signal("update", { data: o });
          }, a.prototype.start = function(u) {
            this.currentLine = Math.min(u || 0, this.currentLine, this.doc.getLength()), this.lines.splice(this.currentLine, this.lines.length), this.states.splice(this.currentLine, this.states.length), this.stop(), this.running = setTimeout(this.$worker, 700);
          }, a.prototype.scheduleStart = function() {
            this.running || (this.running = setTimeout(this.$worker, 700));
          }, a.prototype.$updateOnChange = function(u) {
            var i = u.start.row, o = u.end.row - i;
            if (o === 0)
              this.lines[i] = null;
            else if (u.action == "remove")
              this.lines.splice(i, o + 1, null), this.states.splice(i, o + 1, null);
            else {
              var n = Array(o + 1);
              n.unshift(i, 1), this.lines.splice.apply(this.lines, n), this.states.splice.apply(this.states, n);
            }
            this.currentLine = Math.min(i, this.currentLine, this.doc.getLength()), this.stop();
          }, a.prototype.stop = function() {
            this.running && clearTimeout(this.running), this.running = !1;
          }, a.prototype.getTokens = function(u) {
            return this.lines[u] || this.$tokenizeRow(u);
          }, a.prototype.getState = function(u) {
            return this.currentLine == u && this.$tokenizeRow(u), this.states[u] || "start";
          }, a.prototype.$tokenizeRow = function(u) {
            var i = this.doc.getLine(u), o = this.states[u - 1], n = this.tokenizer.getLineTokens(i, o, u);
            return this.states[u] + "" != n.state + "" ? (this.states[u] = n.state, this.lines[u + 1] = null, this.currentLine > u + 1 && (this.currentLine = u + 1)) : this.currentLine == u && (this.currentLine = u + 1), this.lines[u] = n.tokens;
          }, a.prototype.cleanup = function() {
            this.running = !1, this.lines = [], this.states = [], this.currentLine = 0, this.removeAllListeners();
          }, a;
        }()
      );
      C.implement(w.prototype, A), M.BackgroundTokenizer = w;
    }), ace.define("ace/search_highlight", ["require", "exports", "module", "ace/lib/lang", "ace/range"], function(S, M, H) {
      var C = S("./lib/lang"), A = S("./range").Range, w = (
        /** @class */
        function() {
          function a(u, i, o) {
            o === void 0 && (o = "text"), this.setRegexp(u), this.clazz = i, this.type = o, this.docLen = 0;
          }
          return a.prototype.setRegexp = function(u) {
            this.regExp + "" != u + "" && (this.regExp = u, this.cache = []);
          }, a.prototype.update = function(u, i, o, n) {
            if (this.regExp) {
              for (var t = n.firstRow, e = n.lastRow, r = {}, s = o.$editor && o.$editor.$search, l = s && s.$isMultilineSearch(o.$editor.getLastSearchOptions()), c = t; c <= e; c++) {
                var v = this.cache[c];
                if (v == null || o.getValue().length != this.docLen) {
                  if (l) {
                    v = [];
                    var g = s.$multiLineForward(o, this.regExp, c, e);
                    if (g) {
                      var p = g.endRow <= e ? g.endRow - 1 : e;
                      p > c && (c = p), v.push(new A(g.startRow, g.startCol, g.endRow, g.endCol));
                    }
                    v.length > this.MAX_RANGES && (v = v.slice(0, this.MAX_RANGES));
                  } else
                    v = C.getMatchOffsets(o.getLine(c), this.regExp), v.length > this.MAX_RANGES && (v = v.slice(0, this.MAX_RANGES)), v = v.map(function(L) {
                      return new A(c, L.offset, c, L.offset + L.length);
                    });
                  this.cache[c] = v.length ? v : "";
                }
                if (v.length !== 0)
                  for (var h = v.length; h--; ) {
                    var b = v[h].toScreenRange(o), E = b.toString();
                    r[E] || (r[E] = !0, i.drawSingleLineMarker(u, b, this.clazz, n));
                  }
              }
              this.docLen = o.getValue().length;
            }
          }, a;
        }()
      );
      w.prototype.MAX_RANGES = 500, M.SearchHighlight = w;
    }), ace.define("ace/undomanager", ["require", "exports", "module", "ace/range"], function(S, M, H) {
      var C = (
        /** @class */
        function() {
          function p() {
            this.$keepRedoStack, this.$maxRev = 0, this.$fromUndo = !1, this.$undoDepth = 1 / 0, this.reset();
          }
          return p.prototype.addSession = function(h) {
            this.$session = h;
          }, p.prototype.add = function(h, b, E) {
            if (!this.$fromUndo && h != this.$lastDelta) {
              if (this.$keepRedoStack || (this.$redoStack.length = 0), b === !1 || !this.lastDeltas) {
                this.lastDeltas = [];
                var L = this.$undoStack.length;
                L > this.$undoDepth - 1 && this.$undoStack.splice(0, L - this.$undoDepth + 1), this.$undoStack.push(this.lastDeltas), h.id = this.$rev = ++this.$maxRev;
              }
              (h.action == "remove" || h.action == "insert") && (this.$lastDelta = h), this.lastDeltas.push(h);
            }
          }, p.prototype.addSelection = function(h, b) {
            this.selections.push({
              value: h,
              rev: b || this.$rev
            });
          }, p.prototype.startNewGroup = function() {
            return this.lastDeltas = null, this.$rev;
          }, p.prototype.markIgnored = function(h, b) {
            b == null && (b = this.$rev + 1);
            for (var E = this.$undoStack, L = E.length; L--; ) {
              var x = E[L][0];
              if (x.id <= h)
                break;
              x.id < b && (x.ignore = !0);
            }
            this.lastDeltas = null;
          }, p.prototype.getSelection = function(h, b) {
            for (var E = this.selections, L = E.length; L--; ) {
              var x = E[L];
              if (x.rev < h)
                return b && (x = E[L + 1]), x;
            }
          }, p.prototype.getRevision = function() {
            return this.$rev;
          }, p.prototype.getDeltas = function(h, b) {
            b == null && (b = this.$rev + 1);
            for (var E = this.$undoStack, L = null, x = 0, O = E.length; O--; ) {
              var $ = E[O][0];
              if ($.id < b && !L && (L = O + 1), $.id <= h) {
                x = O + 1;
                break;
              }
            }
            return E.slice(x, L);
          }, p.prototype.getChangedRanges = function(h, b) {
            b == null && (b = this.$rev + 1);
          }, p.prototype.getChangedLines = function(h, b) {
            b == null && (b = this.$rev + 1);
          }, p.prototype.undo = function(h, b) {
            this.lastDeltas = null;
            var E = this.$undoStack;
            if (A(E, E.length)) {
              h || (h = this.$session), this.$redoStackBaseRev !== this.$rev && this.$redoStack.length && (this.$redoStack = []), this.$fromUndo = !0;
              var L = E.pop(), x = null;
              return L && (x = h.undoChanges(L, b), this.$redoStack.push(L), this.$syncRev()), this.$fromUndo = !1, x;
            }
          }, p.prototype.redo = function(h, b) {
            if (this.lastDeltas = null, h || (h = this.$session), this.$fromUndo = !0, this.$redoStackBaseRev != this.$rev) {
              var E = this.getDeltas(this.$redoStackBaseRev, this.$rev + 1);
              g(this.$redoStack, E), this.$redoStackBaseRev = this.$rev, this.$redoStack.forEach(function(O) {
                O[0].id = ++this.$maxRev;
              }, this);
            }
            var L = this.$redoStack.pop(), x = null;
            return L && (x = h.redoChanges(L, b), this.$undoStack.push(L), this.$syncRev()), this.$fromUndo = !1, x;
          }, p.prototype.$syncRev = function() {
            var h = this.$undoStack, b = h[h.length - 1], E = b && b[0].id || 0;
            this.$redoStackBaseRev = E, this.$rev = E;
          }, p.prototype.reset = function() {
            this.lastDeltas = null, this.$lastDelta = null, this.$undoStack = [], this.$redoStack = [], this.$rev = 0, this.mark = 0, this.$redoStackBaseRev = this.$rev, this.selections = [];
          }, p.prototype.canUndo = function() {
            return this.$undoStack.length > 0;
          }, p.prototype.canRedo = function() {
            return this.$redoStack.length > 0;
          }, p.prototype.bookmark = function(h) {
            h == null && (h = this.$rev), this.mark = h;
          }, p.prototype.isAtBookmark = function() {
            return this.$rev === this.mark;
          }, p.prototype.toJSON = function() {
            return {
              $redoStack: this.$redoStack,
              $undoStack: this.$undoStack
            };
          }, p.prototype.fromJSON = function(h) {
            this.reset(), this.$undoStack = h.$undoStack, this.$redoStack = h.$redoStack;
          }, p.prototype.$prettyPrint = function(h) {
            return h ? o(h) : o(this.$undoStack) + `
---
` + o(this.$redoStack);
          }, p;
        }()
      );
      C.prototype.hasUndo = C.prototype.canUndo, C.prototype.hasRedo = C.prototype.canRedo, C.prototype.isClean = C.prototype.isAtBookmark, C.prototype.markClean = C.prototype.bookmark;
      function A(p, h) {
        for (var b = h; b--; ) {
          var E = p[b];
          if (E && !E[0].ignore) {
            for (; b < h - 1; ) {
              var L = e(p[b], p[b + 1]);
              p[b] = L[0], p[b + 1] = L[1], b++;
            }
            return !0;
          }
        }
      }
      var w = S("./range").Range, a = w.comparePoints;
      w.comparePoints;
      function u(p) {
        return { row: p.row, column: p.column };
      }
      function i(p) {
        return {
          start: u(p.start),
          end: u(p.end),
          action: p.action,
          lines: p.lines.slice()
        };
      }
      function o(p) {
        if (p = p || this, Array.isArray(p))
          return p.map(o).join(`
`);
        var h = "";
        return p.action ? (h = p.action == "insert" ? "+" : "-", h += "[" + p.lines + "]") : p.value && (Array.isArray(p.value) ? h = p.value.map(n).join(`
`) : h = n(p.value)), p.start && (h += n(p)), (p.id || p.rev) && (h += "	(" + (p.id || p.rev) + ")"), h;
      }
      function n(p) {
        return p.start.row + ":" + p.start.column + "=>" + p.end.row + ":" + p.end.column;
      }
      function t(p, h) {
        var b = p.action == "insert", E = h.action == "insert";
        if (b && E)
          if (a(h.start, p.end) >= 0)
            s(h, p, -1);
          else if (a(h.start, p.start) <= 0)
            s(p, h, 1);
          else
            return null;
        else if (b && !E)
          if (a(h.start, p.end) >= 0)
            s(h, p, -1);
          else if (a(h.end, p.start) <= 0)
            s(p, h, -1);
          else
            return null;
        else if (!b && E)
          if (a(h.start, p.start) >= 0)
            s(h, p, 1);
          else if (a(h.start, p.start) <= 0)
            s(p, h, 1);
          else
            return null;
        else if (!b && !E)
          if (a(h.start, p.start) >= 0)
            s(h, p, 1);
          else if (a(h.end, p.start) <= 0)
            s(p, h, -1);
          else
            return null;
        return [h, p];
      }
      function e(p, h) {
        for (var b = p.length; b--; )
          for (var E = 0; E < h.length; E++)
            if (!t(p[b], h[E])) {
              for (; b < p.length; ) {
                for (; E--; )
                  t(h[E], p[b]);
                E = h.length, b++;
              }
              return [p, h];
            }
        return p.selectionBefore = h.selectionBefore = p.selectionAfter = h.selectionAfter = null, [h, p];
      }
      function r(p, h) {
        var b = p.action == "insert", E = h.action == "insert";
        if (b && E)
          a(p.start, h.start) < 0 ? s(h, p, 1) : s(p, h, 1);
        else if (b && !E)
          a(p.start, h.end) >= 0 ? s(p, h, -1) : (a(p.start, h.start) <= 0 || s(p, w.fromPoints(h.start, p.start), -1), s(h, p, 1));
        else if (!b && E)
          a(h.start, p.end) >= 0 ? s(h, p, -1) : (a(h.start, p.start) <= 0 || s(h, w.fromPoints(p.start, h.start), -1), s(p, h, 1));
        else if (!b && !E)
          if (a(h.start, p.end) >= 0)
            s(h, p, -1);
          else if (a(h.end, p.start) <= 0)
            s(p, h, -1);
          else {
            var L, x;
            return a(p.start, h.start) < 0 && (L = p, p = c(p, h.start)), a(p.end, h.end) > 0 && (x = c(p, h.end)), l(h.end, p.start, p.end, -1), x && !L && (p.lines = x.lines, p.start = x.start, p.end = x.end, x = p), [h, L, x].filter(Boolean);
          }
        return [h, p];
      }
      function s(p, h, b) {
        l(p.start, h.start, h.end, b), l(p.end, h.start, h.end, b);
      }
      function l(p, h, b, E) {
        p.row == (E == 1 ? h : b).row && (p.column += E * (b.column - h.column)), p.row += E * (b.row - h.row);
      }
      function c(p, h) {
        var b = p.lines, E = p.end;
        p.end = u(h);
        var L = p.end.row - p.start.row, x = b.splice(L, b.length), O = L ? h.column : h.column - p.start.column;
        b.push(x[0].substring(0, O)), x[0] = x[0].substr(O);
        var $ = {
          start: u(h),
          end: E,
          lines: x,
          action: p.action
        };
        return $;
      }
      function v(p, h) {
        h = i(h);
        for (var b = p.length; b--; ) {
          for (var E = p[b], L = 0; L < E.length; L++) {
            var x = E[L], O = r(x, h);
            h = O[0], O.length != 2 && (O[2] ? (E.splice(L + 1, 1, O[1], O[2]), L++) : O[1] || (E.splice(L, 1), L--));
          }
          E.length || p.splice(b, 1);
        }
        return p;
      }
      function g(p, h) {
        for (var b = 0; b < h.length; b++)
          for (var E = h[b], L = 0; L < E.length; L++)
            v(p, E[L]);
      }
      M.UndoManager = C;
    }), ace.define("ace/edit_session/fold_line", ["require", "exports", "module", "ace/range"], function(S, M, H) {
      var C = S("../range").Range, A = (
        /** @class */
        function() {
          function w(a, u) {
            this.foldData = a, Array.isArray(u) ? this.folds = u : u = this.folds = [u];
            var i = u[u.length - 1];
            this.range = new C(u[0].start.row, u[0].start.column, i.end.row, i.end.column), this.start = this.range.start, this.end = this.range.end, this.folds.forEach(function(o) {
              o.setFoldLine(this);
            }, this);
          }
          return w.prototype.shiftRow = function(a) {
            this.start.row += a, this.end.row += a, this.folds.forEach(function(u) {
              u.start.row += a, u.end.row += a;
            });
          }, w.prototype.addFold = function(a) {
            if (a.sameRow) {
              if (a.start.row < this.startRow || a.endRow > this.endRow)
                throw new Error("Can't add a fold to this FoldLine as it has no connection");
              this.folds.push(a), this.folds.sort(function(u, i) {
                return -u.range.compareEnd(i.start.row, i.start.column);
              }), this.range.compareEnd(a.start.row, a.start.column) > 0 ? (this.end.row = a.end.row, this.end.column = a.end.column) : this.range.compareStart(a.end.row, a.end.column) < 0 && (this.start.row = a.start.row, this.start.column = a.start.column);
            } else if (a.start.row == this.end.row)
              this.folds.push(a), this.end.row = a.end.row, this.end.column = a.end.column;
            else if (a.end.row == this.start.row)
              this.folds.unshift(a), this.start.row = a.start.row, this.start.column = a.start.column;
            else
              throw new Error("Trying to add fold to FoldRow that doesn't have a matching row");
            a.foldLine = this;
          }, w.prototype.containsRow = function(a) {
            return a >= this.start.row && a <= this.end.row;
          }, w.prototype.walk = function(a, u, i) {
            var o = 0, n = this.folds, t, e, r, s = !0;
            u == null && (u = this.end.row, i = this.end.column);
            for (var l = 0; l < n.length; l++) {
              if (t = n[l], e = t.range.compareStart(u, i), e == -1) {
                a(null, u, i, o, s);
                return;
              }
              if (r = a(null, t.start.row, t.start.column, o, s), r = !r && a(t.placeholder, t.start.row, t.start.column, o), r || e === 0)
                return;
              s = !t.sameRow, o = t.end.column;
            }
            a(null, u, i, o, s);
          }, w.prototype.getNextFoldTo = function(a, u) {
            for (var i, o, n = 0; n < this.folds.length; n++) {
              if (i = this.folds[n], o = i.range.compareEnd(a, u), o == -1)
                return {
                  fold: i,
                  kind: "after"
                };
              if (o === 0)
                return {
                  fold: i,
                  kind: "inside"
                };
            }
            return null;
          }, w.prototype.addRemoveChars = function(a, u, i) {
            var o = this.getNextFoldTo(a, u), n, t;
            if (o) {
              if (n = o.fold, o.kind == "inside" && n.start.column != u && n.start.row != a)
                window.console && window.console.log(a, u, n);
              else if (n.start.row == a) {
                t = this.folds;
                var e = t.indexOf(n);
                for (e === 0 && (this.start.column += i), e; e < t.length; e++) {
                  if (n = t[e], n.start.column += i, !n.sameRow)
                    return;
                  n.end.column += i;
                }
                this.end.column += i;
              }
            }
          }, w.prototype.split = function(a, u) {
            var i = this.getNextFoldTo(a, u);
            if (!i || i.kind == "inside")
              return null;
            var o = i.fold, n = this.folds, t = this.foldData, e = n.indexOf(o), r = n[e - 1];
            this.end.row = r.end.row, this.end.column = r.end.column, n = n.splice(e, n.length - e);
            var s = new w(t, n);
            return t.splice(t.indexOf(this) + 1, 0, s), s;
          }, w.prototype.merge = function(a) {
            for (var u = a.folds, i = 0; i < u.length; i++)
              this.addFold(u[i]);
            var o = this.foldData;
            o.splice(o.indexOf(a), 1);
          }, w.prototype.toString = function() {
            var a = [this.range.toString() + ": ["];
            return this.folds.forEach(function(u) {
              a.push("  " + u.toString());
            }), a.push("]"), a.join(`
`);
          }, w.prototype.idxToPosition = function(a) {
            for (var u = 0, i = 0; i < this.folds.length; i++) {
              var o = this.folds[i];
              if (a -= o.start.column - u, a < 0)
                return {
                  row: o.start.row,
                  column: o.start.column + a
                };
              if (a -= o.placeholder.length, a < 0)
                return o.start;
              u = o.end.column;
            }
            return {
              row: this.end.row,
              column: this.end.column + a
            };
          }, w;
        }()
      );
      M.FoldLine = A;
    }), ace.define("ace/range_list", ["require", "exports", "module", "ace/range"], function(S, M, H) {
      var C = S("./range").Range, A = C.comparePoints, w = (
        /** @class */
        function() {
          function a() {
            this.ranges = [], this.$bias = 1;
          }
          return a.prototype.pointIndex = function(u, i, o) {
            for (var n = this.ranges, t = o || 0; t < n.length; t++) {
              var e = n[t], r = A(u, e.end);
              if (!(r > 0)) {
                var s = A(u, e.start);
                return r === 0 ? i && s !== 0 ? -t - 2 : t : s > 0 || s === 0 && !i ? t : -t - 1;
              }
            }
            return -t - 1;
          }, a.prototype.add = function(u) {
            var i = !u.isEmpty(), o = this.pointIndex(u.start, i);
            o < 0 && (o = -o - 1);
            var n = this.pointIndex(u.end, i, o);
            return n < 0 ? n = -n - 1 : n++, this.ranges.splice(o, n - o, u);
          }, a.prototype.addList = function(u) {
            for (var i = [], o = u.length; o--; )
              i.push.apply(i, this.add(u[o]));
            return i;
          }, a.prototype.substractPoint = function(u) {
            var i = this.pointIndex(u);
            if (i >= 0)
              return this.ranges.splice(i, 1);
          }, a.prototype.merge = function() {
            var u = [], i = this.ranges;
            i = i.sort(function(r, s) {
              return A(r.start, s.start);
            });
            for (var o = i[0], n, t = 1; t < i.length; t++) {
              n = o, o = i[t];
              var e = A(n.end, o.start);
              e < 0 || e == 0 && !n.isEmpty() && !o.isEmpty() || (A(n.end, o.end) < 0 && (n.end.row = o.end.row, n.end.column = o.end.column), i.splice(t, 1), u.push(o), o = n, t--);
            }
            return this.ranges = i, u;
          }, a.prototype.contains = function(u, i) {
            return this.pointIndex({ row: u, column: i }) >= 0;
          }, a.prototype.containsPoint = function(u) {
            return this.pointIndex(u) >= 0;
          }, a.prototype.rangeAtPoint = function(u) {
            var i = this.pointIndex(u);
            if (i >= 0)
              return this.ranges[i];
          }, a.prototype.clipRows = function(u, i) {
            var o = this.ranges;
            if (o[0].start.row > i || o[o.length - 1].start.row < u)
              return [];
            var n = this.pointIndex({ row: u, column: 0 });
            n < 0 && (n = -n - 1);
            var t = this.pointIndex({ row: i, column: 0 }, n);
            t < 0 && (t = -t - 1);
            for (var e = [], r = n; r < t; r++)
              e.push(o[r]);
            return e;
          }, a.prototype.removeAll = function() {
            return this.ranges.splice(0, this.ranges.length);
          }, a.prototype.attach = function(u) {
            this.session && this.detach(), this.session = u, this.onChange = this.$onChange.bind(this), this.session.on("change", this.onChange);
          }, a.prototype.detach = function() {
            this.session && (this.session.removeListener("change", this.onChange), this.session = null);
          }, a.prototype.$onChange = function(u) {
            for (var i = u.start, o = u.end, n = i.row, t = o.row, e = this.ranges, r = 0, s = e.length; r < s; r++) {
              var l = e[r];
              if (l.end.row >= n)
                break;
            }
            if (u.action == "insert")
              for (var c = t - n, v = -i.column + o.column; r < s; r++) {
                var l = e[r];
                if (l.start.row > n)
                  break;
                if (l.start.row == n && l.start.column >= i.column && (l.start.column == i.column && this.$bias <= 0 || (l.start.column += v, l.start.row += c)), l.end.row == n && l.end.column >= i.column) {
                  if (l.end.column == i.column && this.$bias < 0)
                    continue;
                  l.end.column == i.column && v > 0 && r < s - 1 && l.end.column > l.start.column && l.end.column == e[r + 1].start.column && (l.end.column -= v), l.end.column += v, l.end.row += c;
                }
              }
            else
              for (var c = n - t, v = i.column - o.column; r < s; r++) {
                var l = e[r];
                if (l.start.row > t)
                  break;
                l.end.row < t && (n < l.end.row || n == l.end.row && i.column < l.end.column) ? (l.end.row = n, l.end.column = i.column) : l.end.row == t ? l.end.column <= o.column ? (c || l.end.column > i.column) && (l.end.column = i.column, l.end.row = i.row) : (l.end.column += v, l.end.row += c) : l.end.row > t && (l.end.row += c), l.start.row < t && (n < l.start.row || n == l.start.row && i.column < l.start.column) ? (l.start.row = n, l.start.column = i.column) : l.start.row == t ? l.start.column <= o.column ? (c || l.start.column > i.column) && (l.start.column = i.column, l.start.row = i.row) : (l.start.column += v, l.start.row += c) : l.start.row > t && (l.start.row += c);
              }
            if (c != 0 && r < s)
              for (; r < s; r++) {
                var l = e[r];
                l.start.row += c, l.end.row += c;
              }
          }, a;
        }()
      );
      w.prototype.comparePoints = A, M.RangeList = w;
    }), ace.define("ace/edit_session/fold", ["require", "exports", "module", "ace/range_list"], function(S, M, H) {
      var C = this && this.__extends || /* @__PURE__ */ function() {
        var n = function(t, e) {
          return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, s) {
            r.__proto__ = s;
          } || function(r, s) {
            for (var l in s) Object.prototype.hasOwnProperty.call(s, l) && (r[l] = s[l]);
          }, n(t, e);
        };
        return function(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
          n(t, e);
          function r() {
            this.constructor = t;
          }
          t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
        };
      }(), A = S("../range_list").RangeList, w = (
        /** @class */
        function(n) {
          C(t, n);
          function t(e, r) {
            var s = n.call(this) || this;
            return s.foldLine = null, s.placeholder = r, s.range = e, s.start = e.start, s.end = e.end, s.sameRow = e.start.row == e.end.row, s.subFolds = s.ranges = [], s;
          }
          return t.prototype.toString = function() {
            return '"' + this.placeholder + '" ' + this.range.toString();
          }, t.prototype.setFoldLine = function(e) {
            this.foldLine = e, this.subFolds.forEach(function(r) {
              r.setFoldLine(e);
            });
          }, t.prototype.clone = function() {
            var e = this.range.clone(), r = new t(e, this.placeholder);
            return this.subFolds.forEach(function(s) {
              r.subFolds.push(s.clone());
            }), r.collapseChildren = this.collapseChildren, r;
          }, t.prototype.addSubFold = function(e) {
            if (!this.range.isEqual(e)) {
              u(e, this.start);
              for (var v = e.start.row, g = e.start.column, r = 0, s = -1; r < this.subFolds.length && (s = this.subFolds[r].range.compare(v, g), s == 1); r++)
                ;
              var l = this.subFolds[r], c = 0;
              if (s == 0) {
                if (l.range.containsRange(e))
                  return l.addSubFold(e);
                c = 1;
              }
              for (var v = e.range.end.row, g = e.range.end.column, p = r, s = -1; p < this.subFolds.length && (s = this.subFolds[p].range.compare(v, g), s == 1); p++)
                ;
              s == 0 && p++;
              for (var h = this.subFolds.splice(r, p - r, e), b = s == 0 ? h.length - 1 : h.length, E = c; E < b; E++)
                e.addSubFold(h[E]);
              return e.setFoldLine(this.foldLine), e;
            }
          }, t.prototype.restoreRange = function(e) {
            return o(e, this.start);
          }, t;
        }(A)
      );
      function a(n, t) {
        n.row -= t.row, n.row == 0 && (n.column -= t.column);
      }
      function u(n, t) {
        a(n.start, t), a(n.end, t);
      }
      function i(n, t) {
        n.row == 0 && (n.column += t.column), n.row += t.row;
      }
      function o(n, t) {
        i(n.start, t), i(n.end, t);
      }
      M.Fold = w;
    }), ace.define("ace/edit_session/folding", ["require", "exports", "module", "ace/range", "ace/edit_session/fold_line", "ace/edit_session/fold", "ace/token_iterator", "ace/mouse/mouse_event"], function(S, M, H) {
      var C = S("../range").Range, A = S("./fold_line").FoldLine, w = S("./fold").Fold, a = S("../token_iterator").TokenIterator, u = S("../mouse/mouse_event").MouseEvent;
      function i() {
        this.getFoldAt = function(o, n, t) {
          var e = this.getFoldLine(o);
          if (!e)
            return null;
          for (var r = e.folds, s = 0; s < r.length; s++) {
            var l = r[s].range;
            if (l.contains(o, n)) {
              if (t == 1 && l.isEnd(o, n) && !l.isEmpty())
                continue;
              if (t == -1 && l.isStart(o, n) && !l.isEmpty())
                continue;
              return r[s];
            }
          }
        }, this.getFoldsInRange = function(o) {
          var n = o.start, t = o.end, e = this.$foldData, r = [];
          n.column += 1, t.column -= 1;
          for (var s = 0; s < e.length; s++) {
            var l = e[s].range.compareRange(o);
            if (l != 2) {
              if (l == -2)
                break;
              for (var c = e[s].folds, v = 0; v < c.length; v++) {
                var g = c[v];
                if (l = g.range.compareRange(o), l == -2)
                  break;
                if (l == 2)
                  continue;
                if (l == 42)
                  break;
                r.push(g);
              }
            }
          }
          return n.column -= 1, t.column += 1, r;
        }, this.getFoldsInRangeList = function(o) {
          if (Array.isArray(o)) {
            var n = [];
            o.forEach(function(t) {
              n = n.concat(this.getFoldsInRange(t));
            }, this);
          } else
            var n = this.getFoldsInRange(o);
          return n;
        }, this.getAllFolds = function() {
          for (var o = [], n = this.$foldData, t = 0; t < n.length; t++)
            for (var e = 0; e < n[t].folds.length; e++)
              o.push(n[t].folds[e]);
          return o;
        }, this.getFoldStringAt = function(o, n, t, e) {
          if (e = e || this.getFoldLine(o), !e)
            return null;
          for (var r = {
            end: { column: 0 }
          }, s, l, c = 0; c < e.folds.length; c++) {
            l = e.folds[c];
            var v = l.range.compareEnd(o, n);
            if (v == -1) {
              s = this.getLine(l.start.row).substring(r.end.column, l.start.column);
              break;
            } else if (v === 0)
              return null;
            r = l;
          }
          return s || (s = this.getLine(l.start.row).substring(r.end.column)), t == -1 ? s.substring(0, n - r.end.column) : t == 1 ? s.substring(n - r.end.column) : s;
        }, this.getFoldLine = function(o, n) {
          var t = this.$foldData, e = 0;
          for (n && (e = t.indexOf(n)), e == -1 && (e = 0), e; e < t.length; e++) {
            var r = t[e];
            if (r.start.row <= o && r.end.row >= o)
              return r;
            if (r.end.row > o)
              return null;
          }
          return null;
        }, this.getNextFoldLine = function(o, n) {
          var t = this.$foldData, e = 0;
          for (n && (e = t.indexOf(n)), e == -1 && (e = 0), e; e < t.length; e++) {
            var r = t[e];
            if (r.end.row >= o)
              return r;
          }
          return null;
        }, this.getFoldedRowCount = function(o, n) {
          for (var t = this.$foldData, e = n - o + 1, r = 0; r < t.length; r++) {
            var s = t[r], l = s.end.row, c = s.start.row;
            if (l >= n) {
              c < n && (c >= o ? e -= n - c : e = 0);
              break;
            } else l >= o && (c >= o ? e -= l - c : e -= l - o + 1);
          }
          return e;
        }, this.$addFoldLine = function(o) {
          return this.$foldData.push(o), this.$foldData.sort(function(n, t) {
            return n.start.row - t.start.row;
          }), o;
        }, this.addFold = function(o, n) {
          var t = this.$foldData, e = !1, r;
          o instanceof w ? r = o : (r = new w(n, o), r.collapseChildren = n.collapseChildren), this.$clipRangeToDocument(r.range);
          var s = r.start.row, l = r.start.column, c = r.end.row, v = r.end.column, g = this.getFoldAt(s, l, 1), p = this.getFoldAt(c, v, -1);
          if (g && p == g)
            return g.addSubFold(r);
          g && !g.range.isStart(s, l) && this.removeFold(g), p && !p.range.isEnd(c, v) && this.removeFold(p);
          var h = this.getFoldsInRange(r.range);
          h.length > 0 && (this.removeFolds(h), r.collapseChildren || h.forEach(function(x) {
            r.addSubFold(x);
          }));
          for (var b = 0; b < t.length; b++) {
            var E = t[b];
            if (c == E.start.row) {
              E.addFold(r), e = !0;
              break;
            } else if (s == E.end.row) {
              if (E.addFold(r), e = !0, !r.sameRow) {
                var L = t[b + 1];
                if (L && L.start.row == c) {
                  E.merge(L);
                  break;
                }
              }
              break;
            } else if (c <= E.start.row)
              break;
          }
          return e || (E = this.$addFoldLine(new A(this.$foldData, r))), this.$useWrapMode ? this.$updateWrapData(E.start.row, E.start.row) : this.$updateRowLengthCache(E.start.row, E.start.row), this.$modified = !0, this._signal("changeFold", { data: r, action: "add" }), r;
        }, this.addFolds = function(o) {
          o.forEach(function(n) {
            this.addFold(n);
          }, this);
        }, this.removeFold = function(o) {
          var n = o.foldLine, t = n.start.row, e = n.end.row, r = this.$foldData, s = n.folds;
          if (s.length == 1)
            r.splice(r.indexOf(n), 1);
          else if (n.range.isEnd(o.end.row, o.end.column))
            s.pop(), n.end.row = s[s.length - 1].end.row, n.end.column = s[s.length - 1].end.column;
          else if (n.range.isStart(o.start.row, o.start.column))
            s.shift(), n.start.row = s[0].start.row, n.start.column = s[0].start.column;
          else if (o.sameRow)
            s.splice(s.indexOf(o), 1);
          else {
            var l = n.split(o.start.row, o.start.column);
            s = l.folds, s.shift(), l.start.row = s[0].start.row, l.start.column = s[0].start.column;
          }
          this.$updating || (this.$useWrapMode ? this.$updateWrapData(t, e) : this.$updateRowLengthCache(t, e)), this.$modified = !0, this._signal("changeFold", { data: o, action: "remove" });
        }, this.removeFolds = function(o) {
          for (var n = [], t = 0; t < o.length; t++)
            n.push(o[t]);
          n.forEach(function(e) {
            this.removeFold(e);
          }, this), this.$modified = !0;
        }, this.expandFold = function(o) {
          this.removeFold(o), o.subFolds.forEach(function(n) {
            o.restoreRange(n), this.addFold(n);
          }, this), o.collapseChildren > 0 && this.foldAll(o.start.row + 1, o.end.row, o.collapseChildren - 1), o.subFolds = [];
        }, this.expandFolds = function(o) {
          o.forEach(function(n) {
            this.expandFold(n);
          }, this);
        }, this.unfold = function(o, n) {
          var t, e;
          if (o == null)
            t = new C(0, 0, this.getLength(), 0), n == null && (n = !0);
          else if (typeof o == "number")
            t = new C(o, 0, o, this.getLine(o).length);
          else if ("row" in o)
            t = C.fromPoints(o, o);
          else {
            if (Array.isArray(o))
              return e = [], o.forEach(function(s) {
                e = e.concat(this.unfold(s));
              }, this), e;
            t = o;
          }
          e = this.getFoldsInRangeList(t);
          for (var r = e; e.length == 1 && C.comparePoints(e[0].start, t.start) < 0 && C.comparePoints(e[0].end, t.end) > 0; )
            this.expandFolds(e), e = this.getFoldsInRangeList(t);
          if (n != !1 ? this.removeFolds(e) : this.expandFolds(e), r.length)
            return r;
        }, this.isRowFolded = function(o, n) {
          return !!this.getFoldLine(o, n);
        }, this.getRowFoldEnd = function(o, n) {
          var t = this.getFoldLine(o, n);
          return t ? t.end.row : o;
        }, this.getRowFoldStart = function(o, n) {
          var t = this.getFoldLine(o, n);
          return t ? t.start.row : o;
        }, this.getFoldDisplayLine = function(o, n, t, e, r) {
          e == null && (e = o.start.row), r == null && (r = 0), n == null && (n = o.end.row), t == null && (t = this.getLine(n).length);
          var s = this.doc, l = "";
          return o.walk(function(c, v, g, p) {
            if (!(v < e)) {
              if (v == e) {
                if (g < r)
                  return;
                p = Math.max(r, p);
              }
              c != null ? l += c : l += s.getLine(v).substring(p, g);
            }
          }, n, t), l;
        }, this.getDisplayLine = function(o, n, t, e) {
          var r = this.getFoldLine(o);
          if (r)
            return this.getFoldDisplayLine(r, o, n, t, e);
          var s;
          return s = this.doc.getLine(o), s.substring(e || 0, n || s.length);
        }, this.$cloneFoldData = function() {
          var o = [];
          return o = this.$foldData.map(function(n) {
            var t = n.folds.map(function(e) {
              return e.clone();
            });
            return new A(o, t);
          }), o;
        }, this.toggleFold = function(o) {
          var n = this.selection, t = n.getRange(), e, r;
          if (t.isEmpty()) {
            var s = t.start;
            if (e = this.getFoldAt(s.row, s.column), e) {
              this.expandFold(e);
              return;
            } else if (o) {
              var l = this.getFoldLine(s.row);
              l && this.expandFolds(l.folds);
              return;
            } else (r = this.findMatchingBracket(s)) ? t.comparePoint(r) == 1 ? t.end = r : (t.start = r, t.start.column++, t.end.column--) : (r = this.findMatchingBracket({ row: s.row, column: s.column + 1 })) ? (t.comparePoint(r) == 1 ? t.end = r : t.start = r, t.start.column++) : t = this.getCommentFoldRange(s.row, s.column) || t;
          } else {
            var c = this.getFoldsInRange(t);
            if (o && c.length) {
              this.expandFolds(c);
              return;
            } else c.length == 1 && (e = c[0]);
          }
          if (e || (e = this.getFoldAt(t.start.row, t.start.column)), e && e.range.toString() == t.toString()) {
            this.expandFold(e);
            return;
          }
          var v = "...";
          if (!t.isMultiLine()) {
            if (v = this.getTextRange(t), v.length < 4)
              return;
            v = v.trim().substring(0, 2) + "..";
          }
          this.addFold(v, t);
        }, this.getCommentFoldRange = function(o, n, t) {
          var e = new a(this, o, n), r = e.getCurrentToken(), s = r && r.type;
          if (r && /^comment|string/.test(s)) {
            s = s.match(/comment|string/)[0], s == "comment" && (s += "|doc-start|\\.doc");
            var l = new RegExp(s), c = new C();
            if (t != 1) {
              do
                r = e.stepBackward();
              while (r && l.test(r.type));
              r = e.stepForward();
            }
            c.start.row = e.getCurrentTokenRow(), c.start.column = e.getCurrentTokenColumn() + r.value.length, e = new a(this, o, n);
            var v = this.getState(e.$row);
            if (t != -1) {
              var g = -1;
              do
                if (r = e.stepForward(), g == -1) {
                  var p = this.getState(e.$row);
                  v.toString() !== p.toString() && (g = e.$row);
                } else if (e.$row > g)
                  break;
              while (r && l.test(r.type));
              r = e.stepBackward();
            } else
              r = e.getCurrentToken();
            return c.end.row = e.getCurrentTokenRow(), c.end.column = e.getCurrentTokenColumn(), c.start.row == c.end.row && c.start.column > c.end.column ? void 0 : c;
          }
        }, this.foldAll = function(o, n, t, e) {
          t == null && (t = 1e5);
          var r = this.foldWidgets;
          if (r) {
            n = n || this.getLength(), o = o || 0;
            for (var s = o; s < n; s++)
              if (r[s] == null && (r[s] = this.getFoldWidget(s)), r[s] == "start" && !(e && !e(s))) {
                var l = this.getFoldWidgetRange(s);
                l && l.isMultiLine() && l.end.row <= n && l.start.row >= o && (s = l.end.row, l.collapseChildren = t, this.addFold("...", l));
              }
          }
        }, this.foldToLevel = function(o) {
          for (this.foldAll(); o-- > 0; )
            this.unfold(null, !1);
        }, this.foldAllComments = function() {
          var o = this;
          this.foldAll(null, null, null, function(n) {
            for (var t = o.getTokens(n), e = 0; e < t.length; e++) {
              var r = t[e];
              if (!(r.type == "text" && /^\s+$/.test(r.value)))
                return !!/comment/.test(r.type);
            }
          });
        }, this.$foldStyles = {
          manual: 1,
          markbegin: 1,
          markbeginend: 1
        }, this.$foldStyle = "markbegin", this.setFoldStyle = function(o) {
          if (!this.$foldStyles[o])
            throw new Error("invalid fold style: " + o + "[" + Object.keys(this.$foldStyles).join(", ") + "]");
          if (this.$foldStyle != o) {
            this.$foldStyle = o, o == "manual" && this.unfold();
            var n = this.$foldMode;
            this.$setFolding(null), this.$setFolding(n);
          }
        }, this.$setFolding = function(o) {
          if (this.$foldMode != o) {
            if (this.$foldMode = o, this.off("change", this.$updateFoldWidgets), this.off("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets), this._signal("changeAnnotation"), !o || this.$foldStyle == "manual") {
              this.foldWidgets = null;
              return;
            }
            this.foldWidgets = [], this.getFoldWidget = o.getFoldWidget.bind(o, this, this.$foldStyle), this.getFoldWidgetRange = o.getFoldWidgetRange.bind(o, this, this.$foldStyle), this.$updateFoldWidgets = this.updateFoldWidgets.bind(this), this.$tokenizerUpdateFoldWidgets = this.tokenizerUpdateFoldWidgets.bind(this), this.on("change", this.$updateFoldWidgets), this.on("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets);
          }
        }, this.getParentFoldRangeData = function(o, n) {
          var t = this.foldWidgets;
          if (!t || n && t[o])
            return {};
          for (var e = o - 1, r; e >= 0; ) {
            var s = t[e];
            if (s == null && (s = t[e] = this.getFoldWidget(e)), s == "start") {
              var l = this.getFoldWidgetRange(e);
              if (r || (r = l), l && l.end.row >= o)
                break;
            }
            e--;
          }
          return {
            range: e !== -1 && l,
            firstRange: r
          };
        }, this.onFoldWidgetClick = function(o, n) {
          n instanceof u && (n = n.domEvent);
          var t = {
            children: n.shiftKey,
            all: n.ctrlKey || n.metaKey,
            siblings: n.altKey
          }, e = this.$toggleFoldWidget(o, t);
          if (!e) {
            var r = n.target || n.srcElement;
            r && /ace_fold-widget/.test(r.className) && (r.className += " ace_invalid");
          }
        }, this.$toggleFoldWidget = function(o, n) {
          if (this.getFoldWidget) {
            var t = this.getFoldWidget(o), e = this.getLine(o), r = t === "end" ? -1 : 1, s = this.getFoldAt(o, r === -1 ? 0 : e.length, r);
            if (s)
              return n.children || n.all ? this.removeFold(s) : this.expandFold(s), s;
            var l = this.getFoldWidgetRange(o, !0);
            if (l && !l.isMultiLine() && (s = this.getFoldAt(l.start.row, l.start.column, 1), s && l.isEqual(s.range)))
              return this.removeFold(s), s;
            if (n.siblings) {
              var c = this.getParentFoldRangeData(o);
              if (c.range)
                var v = c.range.start.row + 1, g = c.range.end.row;
              this.foldAll(v, g, n.all ? 1e4 : 0);
            } else n.children ? (g = l ? l.end.row : this.getLength(), this.foldAll(o + 1, g, n.all ? 1e4 : 0)) : l && (n.all && (l.collapseChildren = 1e4), this.addFold("...", l));
            return l;
          }
        }, this.toggleFoldWidget = function(o) {
          var n = this.selection.getCursor().row;
          n = this.getRowFoldStart(n);
          var t = this.$toggleFoldWidget(n, {});
          if (!t) {
            var e = this.getParentFoldRangeData(n, !0);
            if (t = e.range || e.firstRange, t) {
              n = t.start.row;
              var r = this.getFoldAt(n, this.getLine(n).length, 1);
              r ? this.removeFold(r) : this.addFold("...", t);
            }
          }
        }, this.updateFoldWidgets = function(o) {
          var n = o.start.row, t = o.end.row - n;
          if (t === 0)
            this.foldWidgets[n] = null;
          else if (o.action == "remove")
            this.foldWidgets.splice(n, t + 1, null);
          else {
            var e = Array(t + 1);
            e.unshift(n, 1), this.foldWidgets.splice.apply(this.foldWidgets, e);
          }
        }, this.tokenizerUpdateFoldWidgets = function(o) {
          var n = o.data;
          n.first != n.last && this.foldWidgets.length > n.first && this.foldWidgets.splice(n.first, this.foldWidgets.length);
        };
      }
      M.Folding = i;
    }), ace.define("ace/edit_session/bracket_match", ["require", "exports", "module", "ace/token_iterator", "ace/range"], function(S, M, H) {
      var C = S("../token_iterator").TokenIterator, A = S("../range").Range;
      function w() {
        this.findMatchingBracket = function(a, u) {
          if (a.column == 0)
            return null;
          var i = u || this.getLine(a.row).charAt(a.column - 1);
          if (i == "")
            return null;
          var o = i.match(/([\(\[\{])|([\)\]\}])/);
          return o ? o[1] ? this.$findClosingBracket(o[1], a) : this.$findOpeningBracket(o[2], a) : null;
        }, this.getBracketRange = function(a) {
          var u = this.getLine(a.row), i = !0, o, n = u.charAt(a.column - 1), t = n && n.match(/([\(\[\{])|([\)\]\}])/);
          if (t || (n = u.charAt(a.column), a = { row: a.row, column: a.column + 1 }, t = n && n.match(/([\(\[\{])|([\)\]\}])/), i = !1), !t)
            return null;
          if (t[1]) {
            var e = this.$findClosingBracket(t[1], a);
            if (!e)
              return null;
            o = A.fromPoints(a, e), i || (o.end.column++, o.start.column--), o.cursor = o.end;
          } else {
            var e = this.$findOpeningBracket(t[2], a);
            if (!e)
              return null;
            o = A.fromPoints(e, a), i || (o.start.column++, o.end.column--), o.cursor = o.start;
          }
          return o;
        }, this.getMatchingBracketRanges = function(a, u) {
          var i = this.getLine(a.row), o = /([\(\[\{])|([\)\]\}])/, n = !u && i.charAt(a.column - 1), t = n && n.match(o);
          if (t || (n = (u === void 0 || u) && i.charAt(a.column), a = {
            row: a.row,
            column: a.column + 1
          }, t = n && n.match(o)), !t)
            return null;
          var e = new A(a.row, a.column - 1, a.row, a.column), r = t[1] ? this.$findClosingBracket(t[1], a) : this.$findOpeningBracket(t[2], a);
          if (!r)
            return [e];
          var s = new A(r.row, r.column, r.row, r.column + 1);
          return [e, s];
        }, this.$brackets = {
          ")": "(",
          "(": ")",
          "]": "[",
          "[": "]",
          "{": "}",
          "}": "{",
          "<": ">",
          ">": "<"
        }, this.$findOpeningBracket = function(a, u, i) {
          var o = this.$brackets[a], n = 1, t = new C(this, u.row, u.column), e = t.getCurrentToken();
          if (e || (e = t.stepForward()), !!e) {
            i || (i = new RegExp("(\\.?" + e.type.replace(".", "\\.").replace("rparen", ".paren").replace(/\b(?:end)\b/, "(?:start|begin|end)").replace(/-close\b/, "-(close|open)") + ")+"));
            for (var r = u.column - t.getCurrentTokenColumn() - 2, s = e.value; ; ) {
              for (; r >= 0; ) {
                var l = s.charAt(r);
                if (l == o) {
                  if (n -= 1, n == 0)
                    return {
                      row: t.getCurrentTokenRow(),
                      column: r + t.getCurrentTokenColumn()
                    };
                } else l == a && (n += 1);
                r -= 1;
              }
              do
                e = t.stepBackward();
              while (e && !i.test(e.type));
              if (e == null)
                break;
              s = e.value, r = s.length - 1;
            }
            return null;
          }
        }, this.$findClosingBracket = function(a, u, i) {
          var o = this.$brackets[a], n = 1, t = new C(this, u.row, u.column), e = t.getCurrentToken();
          if (e || (e = t.stepForward()), !!e) {
            i || (i = new RegExp("(\\.?" + e.type.replace(".", "\\.").replace("lparen", ".paren").replace(/\b(?:start|begin)\b/, "(?:start|begin|end)").replace(/-open\b/, "-(close|open)") + ")+"));
            for (var r = u.column - t.getCurrentTokenColumn(); ; ) {
              for (var s = e.value, l = s.length; r < l; ) {
                var c = s.charAt(r);
                if (c == o) {
                  if (n -= 1, n == 0)
                    return {
                      row: t.getCurrentTokenRow(),
                      column: r + t.getCurrentTokenColumn()
                    };
                } else c == a && (n += 1);
                r += 1;
              }
              do
                e = t.stepForward();
              while (e && !i.test(e.type));
              if (e == null)
                break;
              r = 0;
            }
            return null;
          }
        }, this.getMatchingTags = function(a) {
          var u = new C(this, a.row, a.column), i = this.$findTagName(u);
          if (i) {
            var o = u.stepBackward();
            return o.value === "<" ? this.$findClosingTag(u, i) : this.$findOpeningTag(u, i);
          }
        }, this.$findTagName = function(a) {
          var u = a.getCurrentToken(), i = !1, o = !1;
          if (u && u.type.indexOf("tag-name") === -1)
            do
              o ? u = a.stepBackward() : u = a.stepForward(), u && (u.value === "/>" ? o = !0 : u.type.indexOf("tag-name") !== -1 && (i = !0));
            while (u && !i);
          return u;
        }, this.$findClosingTag = function(a, u) {
          var i, o = u.value, n = u.value, t = 0, e = new A(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 1);
          u = a.stepForward();
          var r = new A(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + u.value.length), s = !1;
          do {
            if (i = u, i.type.indexOf("tag-close") !== -1 && !s) {
              var l = new A(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 1);
              s = !0;
            }
            if (u = a.stepForward(), u) {
              if (u.value === ">" && !s) {
                var l = new A(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 1);
                s = !0;
              }
              if (u.type.indexOf("tag-name") !== -1) {
                if (o = u.value, n === o) {
                  if (i.value === "<")
                    t++;
                  else if (i.value === "</" && (t--, t < 0)) {
                    a.stepBackward();
                    var c = new A(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 2);
                    u = a.stepForward();
                    var v = new A(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + u.value.length);
                    if (u.type.indexOf("tag-close") === -1 && (u = a.stepForward()), u && u.value === ">")
                      var g = new A(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 1);
                    else
                      return;
                  }
                }
              } else if (n === o && u.value === "/>" && (t--, t < 0))
                var c = new A(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 2), v = c, g = v, l = new A(r.end.row, r.end.column, r.end.row, r.end.column + 1);
            }
          } while (u && t >= 0);
          if (e && l && c && g && r && v)
            return {
              openTag: new A(e.start.row, e.start.column, l.end.row, l.end.column),
              closeTag: new A(c.start.row, c.start.column, g.end.row, g.end.column),
              openTagName: r,
              closeTagName: v
            };
        }, this.$findOpeningTag = function(a, u) {
          var i = a.getCurrentToken(), o = u.value, n = 0, t = a.getCurrentTokenRow(), e = a.getCurrentTokenColumn(), r = e + 2, s = new A(t, e, t, r);
          a.stepForward();
          var l = new A(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + u.value.length);
          if (u.type.indexOf("tag-close") === -1 && (u = a.stepForward()), !(!u || u.value !== ">")) {
            var c = new A(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 1);
            a.stepBackward(), a.stepBackward();
            do
              if (u = i, t = a.getCurrentTokenRow(), e = a.getCurrentTokenColumn(), r = e + u.value.length, i = a.stepBackward(), u) {
                if (u.type.indexOf("tag-name") !== -1) {
                  if (o === u.value)
                    if (i.value === "<") {
                      if (n++, n > 0) {
                        var v = new A(t, e, t, r), g = new A(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 1);
                        do
                          u = a.stepForward();
                        while (u && u.value !== ">");
                        var p = new A(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 1);
                      }
                    } else i.value === "</" && n--;
                } else if (u.value === "/>") {
                  for (var h = 0, b = i; b; ) {
                    if (b.type.indexOf("tag-name") !== -1 && b.value === o) {
                      n--;
                      break;
                    } else if (b.value === "<")
                      break;
                    b = a.stepBackward(), h++;
                  }
                  for (var E = 0; E < h; E++)
                    a.stepForward();
                }
              }
            while (i && n <= 0);
            if (g && p && s && c && v && l)
              return {
                openTag: new A(g.start.row, g.start.column, p.end.row, p.end.column),
                closeTag: new A(s.start.row, s.start.column, c.end.row, c.end.column),
                openTagName: v,
                closeTagName: l
              };
          }
        };
      }
      M.BracketMatch = w;
    }), ace.define("ace/edit_session", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/bidihandler", "ace/config", "ace/lib/event_emitter", "ace/selection", "ace/mode/text", "ace/range", "ace/line_widgets", "ace/document", "ace/background_tokenizer", "ace/search_highlight", "ace/undomanager", "ace/edit_session/folding", "ace/edit_session/bracket_match"], function(S, M, H) {
      var C = S("./lib/oop"), A = S("./lib/lang"), w = S("./bidihandler").BidiHandler, a = S("./config"), u = S("./lib/event_emitter").EventEmitter, i = S("./selection").Selection, o = S("./mode/text").Mode, n = S("./range").Range, t = S("./line_widgets").LineWidgets, e = S("./document").Document, r = S("./background_tokenizer").BackgroundTokenizer, s = S("./search_highlight").SearchHighlight, l = S("./undomanager").UndoManager, c = (
        /** @class */
        function() {
          function $(y, f) {
            this.doc, this.$breakpoints = [], this.$decorations = [], this.$frontMarkers = {}, this.$backMarkers = {}, this.$markerId = 1, this.$undoSelect = !0, this.$editor = null, this.prevOp = {}, this.$foldData = [], this.id = "session" + ++$.$uid, this.$foldData.toString = function() {
              return this.join(`
`);
            }, this.$gutterCustomWidgets = {}, this.bgTokenizer = new r(new o().getTokenizer(), this);
            var d = this;
            this.bgTokenizer.on("update", function(m) {
              d._signal("tokenizerUpdate", m);
            }), this.on("changeFold", this.onChangeFold.bind(this)), this.$onChange = this.onChange.bind(this), (typeof y != "object" || !y.getLine) && (y = new e(
              /**@type{string}*/
              y
            )), this.setDocument(y), this.selection = new i(this), this.$onSelectionChange = this.onSelectionChange.bind(this), this.selection.on("changeSelection", this.$onSelectionChange), this.selection.on("changeCursor", this.$onSelectionChange), this.$bidiHandler = new w(this), a.resetOptions(this), this.setMode(f), a._signal("session", this), this.destroyed = !1, this.$initOperationListeners();
          }
          return $.prototype.$initOperationListeners = function() {
            var y = this;
            this.curOp = null, this.on("change", function() {
              y.curOp || (y.startOperation(), y.curOp.selectionBefore = y.$lastSel), y.curOp.docChanged = !0;
            }, !0), this.on("changeSelection", function() {
              y.curOp || (y.startOperation(), y.curOp.selectionBefore = y.$lastSel), y.curOp.selectionChanged = !0;
            }, !0), this.$operationResetTimer = A.delayedCall(this.endOperation.bind(this, !0));
          }, $.prototype.startOperation = function(y) {
            if (this.curOp) {
              if (!y || this.curOp.command)
                return;
              this.prevOp = this.curOp;
            }
            y || (y = {}), this.$operationResetTimer.schedule(), this.curOp = {
              command: y.command || {},
              args: y.args
            }, this.curOp.selectionBefore = this.selection.toJSON(), this._signal("startOperation", y);
          }, $.prototype.endOperation = function(y) {
            if (this.curOp) {
              if (y && y.returnValue === !1) {
                this.curOp = null, this._signal("endOperation", y);
                return;
              }
              if (y == !0 && this.curOp.command && this.curOp.command.name == "mouse")
                return;
              var f = this.selection.toJSON();
              this.curOp.selectionAfter = f, this.$lastSel = this.selection.toJSON(), this.getUndoManager().addSelection(f), this._signal("beforeEndOperation"), this.prevOp = this.curOp, this.curOp = null, this._signal("endOperation", y);
            }
          }, $.prototype.setDocument = function(y) {
            this.doc && this.doc.off("change", this.$onChange), this.doc = y, y.on("change", this.$onChange, !0), this.bgTokenizer.setDocument(this.getDocument()), this.resetCaches();
          }, $.prototype.getDocument = function() {
            return this.doc;
          }, Object.defineProperty($.prototype, "widgetManager", {
            get: function() {
              var y = new t(this);
              return this.widgetManager = y, this.$editor && y.attach(this.$editor), y;
            },
            set: function(y) {
              Object.defineProperty(this, "widgetManager", {
                writable: !0,
                enumerable: !0,
                configurable: !0,
                value: y
              });
            },
            enumerable: !1,
            configurable: !0
          }), $.prototype.$resetRowCache = function(y) {
            if (!y) {
              this.$docRowCache = [], this.$screenRowCache = [];
              return;
            }
            var f = this.$docRowCache.length, d = this.$getRowCacheIndex(this.$docRowCache, y) + 1;
            f > d && (this.$docRowCache.splice(d, f), this.$screenRowCache.splice(d, f));
          }, $.prototype.$getRowCacheIndex = function(y, f) {
            for (var d = 0, m = y.length - 1; d <= m; ) {
              var k = d + m >> 1, _ = y[k];
              if (f > _)
                d = k + 1;
              else if (f < _)
                m = k - 1;
              else
                return k;
            }
            return d - 1;
          }, $.prototype.resetCaches = function() {
            this.$modified = !0, this.$wrapData = [], this.$rowLengthCache = [], this.$resetRowCache(0), this.destroyed || this.bgTokenizer.start(0);
          }, $.prototype.onChangeFold = function(y) {
            var f = y.data;
            this.$resetRowCache(f.start.row);
          }, $.prototype.onChange = function(y) {
            this.$modified = !0, this.$bidiHandler.onChange(y), this.$resetRowCache(y.start.row);
            var f = this.$updateInternalDataOnChange(y);
            !this.$fromUndo && this.$undoManager && (f && f.length && (this.$undoManager.add({
              action: "removeFolds",
              folds: f
            }, this.mergeUndoDeltas), this.mergeUndoDeltas = !0), this.$undoManager.add(y, this.mergeUndoDeltas), this.mergeUndoDeltas = !0, this.$informUndoManager.schedule()), this.bgTokenizer.$updateOnChange(y), this._signal("change", y);
          }, $.prototype.onSelectionChange = function() {
            this._signal("changeSelection");
          }, $.prototype.setValue = function(y) {
            this.doc.setValue(y), this.selection.moveTo(0, 0), this.$resetRowCache(0), this.setUndoManager(this.$undoManager), this.getUndoManager().reset();
          }, $.fromJSON = function(y) {
            typeof y == "string" && (y = JSON.parse(y));
            var f = new l();
            f.$undoStack = y.history.undo, f.$redoStack = y.history.redo, f.mark = y.history.mark, f.$rev = y.history.rev;
            var d = new $(y.value);
            return y.folds.forEach(function(m) {
              d.addFold("...", n.fromPoints(m.start, m.end));
            }), d.setAnnotations(y.annotations), d.setBreakpoints(y.breakpoints), d.setMode(y.mode), d.setScrollLeft(y.scrollLeft), d.setScrollTop(y.scrollTop), d.setUndoManager(f), d.selection.fromJSON(y.selection), d;
          }, $.prototype.toJSON = function() {
            return {
              annotations: this.$annotations,
              breakpoints: this.$breakpoints,
              folds: this.getAllFolds().map(function(y) {
                return y.range;
              }),
              history: this.getUndoManager(),
              mode: this.$mode.$id,
              scrollLeft: this.$scrollLeft,
              scrollTop: this.$scrollTop,
              selection: this.selection.toJSON(),
              value: this.doc.getValue()
            };
          }, $.prototype.toString = function() {
            return this.doc.getValue();
          }, $.prototype.getSelection = function() {
            return this.selection;
          }, $.prototype.getState = function(y) {
            return this.bgTokenizer.getState(y);
          }, $.prototype.getTokens = function(y) {
            return this.bgTokenizer.getTokens(y);
          }, $.prototype.getTokenAt = function(y, f) {
            var d = this.bgTokenizer.getTokens(y), m, k = 0;
            if (f == null) {
              var _ = d.length - 1;
              k = this.getLine(y).length;
            } else
              for (var _ = 0; _ < d.length && (k += d[_].value.length, !(k >= f)); _++)
                ;
            return m = d[_], m ? (m.index = _, m.start = k - m.value.length, m) : null;
          }, $.prototype.setUndoManager = function(y) {
            if (this.$undoManager = y, this.$informUndoManager && this.$informUndoManager.cancel(), y) {
              var f = this;
              y.addSession(this), this.$syncInformUndoManager = function() {
                f.$informUndoManager.cancel(), f.mergeUndoDeltas = !1;
              }, this.$informUndoManager = A.delayedCall(this.$syncInformUndoManager);
            } else
              this.$syncInformUndoManager = function() {
              };
          }, $.prototype.markUndoGroup = function() {
            this.$syncInformUndoManager && this.$syncInformUndoManager();
          }, $.prototype.getUndoManager = function() {
            return this.$undoManager || this.$defaultUndoManager;
          }, $.prototype.getTabString = function() {
            return this.getUseSoftTabs() ? A.stringRepeat(" ", this.getTabSize()) : "	";
          }, $.prototype.setUseSoftTabs = function(y) {
            this.setOption("useSoftTabs", y);
          }, $.prototype.getUseSoftTabs = function() {
            return this.$useSoftTabs && !this.$mode.$indentWithTabs;
          }, $.prototype.setTabSize = function(y) {
            this.setOption("tabSize", y);
          }, $.prototype.getTabSize = function() {
            return this.$tabSize;
          }, $.prototype.isTabStop = function(y) {
            return this.$useSoftTabs && y.column % this.$tabSize === 0;
          }, $.prototype.setNavigateWithinSoftTabs = function(y) {
            this.setOption("navigateWithinSoftTabs", y);
          }, $.prototype.getNavigateWithinSoftTabs = function() {
            return this.$navigateWithinSoftTabs;
          }, $.prototype.setOverwrite = function(y) {
            this.setOption("overwrite", y);
          }, $.prototype.getOverwrite = function() {
            return this.$overwrite;
          }, $.prototype.toggleOverwrite = function() {
            this.setOverwrite(!this.$overwrite);
          }, $.prototype.addGutterDecoration = function(y, f) {
            this.$decorations[y] || (this.$decorations[y] = ""), this.$decorations[y] += " " + f, this._signal("changeBreakpoint", {});
          }, $.prototype.removeGutterCustomWidget = function(y) {
            this.$editor && this.$editor.renderer.$gutterLayer.$removeCustomWidget(y);
          }, $.prototype.addGutterCustomWidget = function(y, f) {
            this.$editor && this.$editor.renderer.$gutterLayer.$addCustomWidget(y, f);
          }, $.prototype.removeGutterDecoration = function(y, f) {
            this.$decorations[y] = (this.$decorations[y] || "").replace(" " + f, ""), this._signal("changeBreakpoint", {});
          }, $.prototype.getBreakpoints = function() {
            return this.$breakpoints;
          }, $.prototype.setBreakpoints = function(y) {
            this.$breakpoints = [];
            for (var f = 0; f < y.length; f++)
              this.$breakpoints[y[f]] = "ace_breakpoint";
            this._signal("changeBreakpoint", {});
          }, $.prototype.clearBreakpoints = function() {
            this.$breakpoints = [], this._signal("changeBreakpoint", {});
          }, $.prototype.setBreakpoint = function(y, f) {
            f === void 0 && (f = "ace_breakpoint"), f ? this.$breakpoints[y] = f : delete this.$breakpoints[y], this._signal("changeBreakpoint", {});
          }, $.prototype.clearBreakpoint = function(y) {
            delete this.$breakpoints[y], this._signal("changeBreakpoint", {});
          }, $.prototype.addMarker = function(y, f, d, m) {
            var k = this.$markerId++, _ = {
              range: y,
              type: d || "line",
              renderer: typeof d == "function" ? d : null,
              clazz: f,
              inFront: !!m,
              id: k
            };
            return m ? (this.$frontMarkers[k] = _, this._signal("changeFrontMarker")) : (this.$backMarkers[k] = _, this._signal("changeBackMarker")), k;
          }, $.prototype.addDynamicMarker = function(y, f) {
            if (y.update) {
              var d = this.$markerId++;
              return y.id = d, y.inFront = !!f, f ? (this.$frontMarkers[d] = y, this._signal("changeFrontMarker")) : (this.$backMarkers[d] = y, this._signal("changeBackMarker")), y;
            }
          }, $.prototype.removeMarker = function(y) {
            var f = this.$frontMarkers[y] || this.$backMarkers[y];
            if (f) {
              var d = f.inFront ? this.$frontMarkers : this.$backMarkers;
              delete d[y], this._signal(f.inFront ? "changeFrontMarker" : "changeBackMarker");
            }
          }, $.prototype.getMarkers = function(y) {
            return y ? this.$frontMarkers : this.$backMarkers;
          }, $.prototype.highlight = function(y) {
            if (!this.$searchHighlight) {
              var f = new s(null, "ace_selected-word", "text");
              this.$searchHighlight = this.addDynamicMarker(f);
            }
            this.$searchHighlight.setRegexp(y);
          }, $.prototype.highlightLines = function(y, f, d, m) {
            typeof f != "number" && (d = f, f = y), d || (d = "ace_step");
            var k = new n(y, 0, f, 1 / 0);
            return k.id = this.addMarker(k, d, "fullLine", m), k;
          }, $.prototype.setAnnotations = function(y) {
            this.$annotations = y, this._signal("changeAnnotation", {});
          }, $.prototype.getAnnotations = function() {
            return this.$annotations || [];
          }, $.prototype.clearAnnotations = function() {
            this.setAnnotations([]);
          }, $.prototype.$detectNewLine = function(y) {
            var f = y.match(/^.*?(\r?\n)/m);
            f ? this.$autoNewLine = f[1] : this.$autoNewLine = `
`;
          }, $.prototype.getWordRange = function(y, f) {
            var d = this.getLine(y), m = !1;
            if (f > 0 && (m = !!d.charAt(f - 1).match(this.tokenRe)), m || (m = !!d.charAt(f).match(this.tokenRe)), m)
              var k = this.tokenRe;
            else if (/^\s+$/.test(d.slice(f - 1, f + 1)))
              var k = /\s/;
            else
              var k = this.nonTokenRe;
            var _ = f;
            if (_ > 0) {
              do
                _--;
              while (_ >= 0 && d.charAt(_).match(k));
              _++;
            }
            for (var T = f; T < d.length && d.charAt(T).match(k); )
              T++;
            return new n(y, _, y, T);
          }, $.prototype.getAWordRange = function(y, f) {
            for (var d = this.getWordRange(y, f), m = this.getLine(d.end.row); m.charAt(d.end.column).match(/[ \t]/); )
              d.end.column += 1;
            return d;
          }, $.prototype.setNewLineMode = function(y) {
            this.doc.setNewLineMode(y);
          }, $.prototype.getNewLineMode = function() {
            return this.doc.getNewLineMode();
          }, $.prototype.setUseWorker = function(y) {
            this.setOption("useWorker", y);
          }, $.prototype.getUseWorker = function() {
            return this.$useWorker;
          }, $.prototype.onReloadTokenizer = function(y) {
            var f = y.data;
            this.bgTokenizer.start(f.first), this._signal("tokenizerUpdate", y);
          }, $.prototype.setMode = function(y, f) {
            if (y && typeof y == "object") {
              if (y.getTokenizer)
                return this.$onChangeMode(y);
              var d = y, m = d.path;
            } else
              m = /**@type{string}*/
              y || "ace/mode/text";
            if (this.$modes["ace/mode/text"] || (this.$modes["ace/mode/text"] = new o()), this.$modes[m] && !d) {
              this.$onChangeMode(this.$modes[m]), f && f();
              return;
            }
            this.$modeId = m, a.loadModule(["mode", m], (function(k) {
              if (!this.destroyed) {
                if (this.$modeId !== m)
                  return f && f();
                this.$modes[m] && !d ? this.$onChangeMode(this.$modes[m]) : k && k.Mode && (k = new k.Mode(d), d || (this.$modes[m] = k, k.$id = m), this.$onChangeMode(k)), f && f();
              }
            }).bind(this)), this.$mode || this.$onChangeMode(this.$modes["ace/mode/text"], !0);
          }, $.prototype.$onChangeMode = function(y, f) {
            if (f || (this.$modeId = y.$id), this.$mode !== y) {
              var d = this.$mode;
              this.$mode = y, this.$stopWorker(), this.$useWorker && this.$startWorker();
              var m = y.getTokenizer();
              if (m.on !== void 0) {
                var k = this.onReloadTokenizer.bind(this);
                m.on("update", k);
              }
              this.bgTokenizer.setTokenizer(m), this.bgTokenizer.setDocument(this.getDocument()), this.tokenRe = y.tokenRe, this.nonTokenRe = y.nonTokenRe, f || (y.attachToSession && y.attachToSession(this), this.$options.wrapMethod.set.call(this, this.$wrapMethod), this.$setFolding(y.foldingRules), this.bgTokenizer.start(0), this._emit("changeMode", { oldMode: d, mode: y }));
            }
          }, $.prototype.$stopWorker = function() {
            this.$worker && (this.$worker.terminate(), this.$worker = null);
          }, $.prototype.$startWorker = function() {
            try {
              this.$worker = this.$mode.createWorker(this);
            } catch (y) {
              a.warn("Could not load worker", y), this.$worker = null;
            }
          }, $.prototype.getMode = function() {
            return this.$mode;
          }, $.prototype.setScrollTop = function(y) {
            this.$scrollTop === y || isNaN(y) || (this.$scrollTop = y, this._signal("changeScrollTop", y));
          }, $.prototype.getScrollTop = function() {
            return this.$scrollTop;
          }, $.prototype.setScrollLeft = function(y) {
            this.$scrollLeft === y || isNaN(y) || (this.$scrollLeft = y, this._signal("changeScrollLeft", y));
          }, $.prototype.getScrollLeft = function() {
            return this.$scrollLeft;
          }, $.prototype.getScreenWidth = function() {
            return this.$computeWidth(), this.lineWidgets ? Math.max(this.getLineWidgetMaxWidth(), this.screenWidth) : this.screenWidth;
          }, $.prototype.getLineWidgetMaxWidth = function() {
            if (this.lineWidgetsWidth != null)
              return this.lineWidgetsWidth;
            var y = 0;
            return this.lineWidgets.forEach(function(f) {
              f && f.screenWidth > y && (y = f.screenWidth);
            }), this.lineWidgetWidth = y;
          }, $.prototype.$computeWidth = function(y) {
            if (this.$modified || y) {
              if (this.$modified = !1, this.$useWrapMode)
                return this.screenWidth = this.$wrapLimit;
              for (var f = this.doc.getAllLines(), d = this.$rowLengthCache, m = 0, k = 0, _ = this.$foldData[k], T = _ ? _.start.row : 1 / 0, I = f.length, D = 0; D < I; D++) {
                if (D > T) {
                  if (D = _.end.row + 1, D >= I)
                    break;
                  _ = this.$foldData[k++], T = _ ? _.start.row : 1 / 0;
                }
                d[D] == null && (d[D] = this.$getStringScreenWidth(f[D])[0]), d[D] > m && (m = d[D]);
              }
              this.screenWidth = m;
            }
          }, $.prototype.getLine = function(y) {
            return this.doc.getLine(y);
          }, $.prototype.getLines = function(y, f) {
            return this.doc.getLines(y, f);
          }, $.prototype.getLength = function() {
            return this.doc.getLength();
          }, $.prototype.getTextRange = function(y) {
            return this.doc.getTextRange(y || this.selection.getRange());
          }, $.prototype.insert = function(y, f) {
            return this.doc.insert(y, f);
          }, $.prototype.remove = function(y) {
            return this.doc.remove(y);
          }, $.prototype.removeFullLines = function(y, f) {
            return this.doc.removeFullLines(y, f);
          }, $.prototype.undoChanges = function(y, f) {
            if (y.length) {
              this.$fromUndo = !0;
              for (var d = y.length - 1; d != -1; d--) {
                var m = y[d];
                m.action == "insert" || m.action == "remove" ? this.doc.revertDelta(m) : m.folds && this.addFolds(m.folds);
              }
              !f && this.$undoSelect && (y.selectionBefore ? this.selection.fromJSON(y.selectionBefore) : this.selection.setRange(this.$getUndoSelection(y, !0))), this.$fromUndo = !1;
            }
          }, $.prototype.redoChanges = function(y, f) {
            if (y.length) {
              this.$fromUndo = !0;
              for (var d = 0; d < y.length; d++) {
                var m = y[d];
                (m.action == "insert" || m.action == "remove") && this.doc.$safeApplyDelta(m);
              }
              !f && this.$undoSelect && (y.selectionAfter ? this.selection.fromJSON(y.selectionAfter) : this.selection.setRange(this.$getUndoSelection(y, !1))), this.$fromUndo = !1;
            }
          }, $.prototype.setUndoSelect = function(y) {
            this.$undoSelect = y;
          }, $.prototype.$getUndoSelection = function(y, f) {
            function d(I) {
              return f ? I.action !== "insert" : I.action === "insert";
            }
            for (var m, k, _ = 0; _ < y.length; _++) {
              var T = y[_];
              if (T.start) {
                if (!m) {
                  d(T) ? m = n.fromPoints(T.start, T.end) : m = n.fromPoints(T.start, T.start);
                  continue;
                }
                d(T) ? (k = T.start, m.compare(k.row, k.column) == -1 && m.setStart(k), k = T.end, m.compare(k.row, k.column) == 1 && m.setEnd(k)) : (k = T.start, m.compare(k.row, k.column) == -1 && (m = n.fromPoints(T.start, T.start)));
              }
            }
            return m;
          }, $.prototype.replace = function(y, f) {
            return this.doc.replace(y, f);
          }, $.prototype.moveText = function(y, f, d) {
            var m = this.getTextRange(y), k = this.getFoldsInRange(y), _ = n.fromPoints(f, f);
            if (!d) {
              this.remove(y);
              var T = y.start.row - y.end.row, I = T ? -y.end.column : y.start.column - y.end.column;
              I && (_.start.row == y.end.row && _.start.column > y.end.column && (_.start.column += I), _.end.row == y.end.row && _.end.column > y.end.column && (_.end.column += I)), T && _.start.row >= y.end.row && (_.start.row += T, _.end.row += T);
            }
            if (_.end = this.insert(_.start, m), k.length) {
              var D = y.start, F = _.start, T = F.row - D.row, I = F.column - D.column;
              this.addFolds(k.map(function(W) {
                return W = W.clone(), W.start.row == D.row && (W.start.column += I), W.end.row == D.row && (W.end.column += I), W.start.row += T, W.end.row += T, W;
              }));
            }
            return _;
          }, $.prototype.indentRows = function(y, f, d) {
            d = d.replace(/\t/g, this.getTabString());
            for (var m = y; m <= f; m++)
              this.doc.insertInLine({ row: m, column: 0 }, d);
          }, $.prototype.outdentRows = function(y) {
            for (var f = y.collapseRows(), d = new n(0, 0, 0, 0), m = this.getTabSize(), k = f.start.row; k <= f.end.row; ++k) {
              var _ = this.getLine(k);
              d.start.row = k, d.end.row = k;
              for (var T = 0; T < m && _.charAt(T) == " "; ++T)
                ;
              T < m && _.charAt(T) == "	" ? (d.start.column = T, d.end.column = T + 1) : (d.start.column = 0, d.end.column = T), this.remove(d);
            }
          }, $.prototype.$moveLines = function(y, f, d) {
            if (y = this.getRowFoldStart(y), f = this.getRowFoldEnd(f), d < 0) {
              var m = this.getRowFoldStart(y + d);
              if (m < 0)
                return 0;
              var k = m - y;
            } else if (d > 0) {
              var m = this.getRowFoldEnd(f + d);
              if (m > this.doc.getLength() - 1)
                return 0;
              var k = m - f;
            } else {
              y = this.$clipRowToDocument(y), f = this.$clipRowToDocument(f);
              var k = f - y + 1;
            }
            var _ = new n(y, 0, f, Number.MAX_VALUE), T = this.getFoldsInRange(_).map(function(D) {
              return D = D.clone(), D.start.row += k, D.end.row += k, D;
            }), I = d == 0 ? this.doc.getLines(y, f) : this.doc.removeFullLines(y, f);
            return this.doc.insertFullLines(y + k, I), T.length && this.addFolds(T), k;
          }, $.prototype.moveLinesUp = function(y, f) {
            return this.$moveLines(y, f, -1);
          }, $.prototype.moveLinesDown = function(y, f) {
            return this.$moveLines(y, f, 1);
          }, $.prototype.duplicateLines = function(y, f) {
            return this.$moveLines(y, f, 0);
          }, $.prototype.$clipRowToDocument = function(y) {
            return Math.max(0, Math.min(y, this.doc.getLength() - 1));
          }, $.prototype.$clipColumnToRow = function(y, f) {
            return f < 0 ? 0 : Math.min(this.doc.getLine(y).length, f);
          }, $.prototype.$clipPositionToDocument = function(y, f) {
            if (f = Math.max(0, f), y < 0)
              y = 0, f = 0;
            else {
              var d = this.doc.getLength();
              y >= d ? (y = d - 1, f = this.doc.getLine(d - 1).length) : f = Math.min(this.doc.getLine(y).length, f);
            }
            return {
              row: y,
              column: f
            };
          }, $.prototype.$clipRangeToDocument = function(y) {
            y.start.row < 0 ? (y.start.row = 0, y.start.column = 0) : y.start.column = this.$clipColumnToRow(y.start.row, y.start.column);
            var f = this.doc.getLength() - 1;
            return y.end.row > f ? (y.end.row = f, y.end.column = this.doc.getLine(f).length) : y.end.column = this.$clipColumnToRow(y.end.row, y.end.column), y;
          }, $.prototype.setUseWrapMode = function(y) {
            if (y != this.$useWrapMode) {
              if (this.$useWrapMode = y, this.$modified = !0, this.$resetRowCache(0), y) {
                var f = this.getLength();
                this.$wrapData = Array(f), this.$updateWrapData(0, f - 1);
              }
              this._signal("changeWrapMode");
            }
          }, $.prototype.getUseWrapMode = function() {
            return this.$useWrapMode;
          }, $.prototype.setWrapLimitRange = function(y, f) {
            (this.$wrapLimitRange.min !== y || this.$wrapLimitRange.max !== f) && (this.$wrapLimitRange = { min: y, max: f }, this.$modified = !0, this.$bidiHandler.markAsDirty(), this.$useWrapMode && this._signal("changeWrapMode"));
          }, $.prototype.adjustWrapLimit = function(y, f) {
            var d = this.$wrapLimitRange;
            d.max < 0 && (d = { min: f, max: f });
            var m = this.$constrainWrapLimit(y, d.min, d.max);
            return m != this.$wrapLimit && m > 1 ? (this.$wrapLimit = m, this.$modified = !0, this.$useWrapMode && (this.$updateWrapData(0, this.getLength() - 1), this.$resetRowCache(0), this._signal("changeWrapLimit")), !0) : !1;
          }, $.prototype.$constrainWrapLimit = function(y, f, d) {
            return f && (y = Math.max(f, y)), d && (y = Math.min(d, y)), y;
          }, $.prototype.getWrapLimit = function() {
            return this.$wrapLimit;
          }, $.prototype.setWrapLimit = function(y) {
            this.setWrapLimitRange(y, y);
          }, $.prototype.getWrapLimitRange = function() {
            return {
              min: this.$wrapLimitRange.min,
              max: this.$wrapLimitRange.max
            };
          }, $.prototype.$updateInternalDataOnChange = function(y) {
            var f = this.$useWrapMode, d = y.action, m = y.start, k = y.end, _ = m.row, T = k.row, I = T - _, D = null;
            if (this.$updating = !0, I != 0)
              if (d === "remove") {
                this[f ? "$wrapData" : "$rowLengthCache"].splice(_, I);
                var F = this.$foldData;
                D = this.getFoldsInRange(y), this.removeFolds(D);
                var B = this.getFoldLine(k.row), z = 0;
                if (B) {
                  B.addRemoveChars(k.row, k.column, m.column - k.column), B.shiftRow(-I);
                  var W = this.getFoldLine(_);
                  W && W !== B && (W.merge(B), B = W), z = F.indexOf(B) + 1;
                }
                for (z; z < F.length; z++) {
                  var B = F[z];
                  B.start.row >= k.row && B.shiftRow(-I);
                }
                T = _;
              } else {
                var P = Array(I);
                P.unshift(_, 0);
                var V = f ? this.$wrapData : this.$rowLengthCache;
                V.splice.apply(V, P);
                var F = this.$foldData, B = this.getFoldLine(_), z = 0;
                if (B) {
                  var j = B.range.compareInside(m.row, m.column);
                  j == 0 ? (B = B.split(m.row, m.column), B && (B.shiftRow(I), B.addRemoveChars(T, 0, k.column - m.column))) : j == -1 && (B.addRemoveChars(_, 0, k.column - m.column), B.shiftRow(I)), z = F.indexOf(B) + 1;
                }
                for (z; z < F.length; z++) {
                  var B = F[z];
                  B.start.row >= _ && B.shiftRow(I);
                }
              }
            else {
              I = Math.abs(y.start.column - y.end.column), d === "remove" && (D = this.getFoldsInRange(y), this.removeFolds(D), I = -I);
              var B = this.getFoldLine(_);
              B && B.addRemoveChars(_, m.column, I);
            }
            return f && this.$wrapData.length != this.doc.getLength() && console.error("doc.getLength() and $wrapData.length have to be the same!"), this.$updating = !1, f ? this.$updateWrapData(_, T) : this.$updateRowLengthCache(_, T), D;
          }, $.prototype.$updateRowLengthCache = function(y, f) {
            this.$rowLengthCache[y] = null, this.$rowLengthCache[f] = null;
          }, $.prototype.$updateWrapData = function(y, f) {
            var d = this.doc.getAllLines(), m = this.getTabSize(), k = this.$wrapData, _ = this.$wrapLimit, T, I, D = y;
            for (f = Math.min(f, d.length - 1); D <= f; )
              I = this.getFoldLine(D, I), I ? (T = [], I.walk((function(F, B, z, W) {
                var P;
                if (F != null) {
                  P = this.$getDisplayTokens(F, T.length), P[0] = p;
                  for (var V = 1; V < P.length; V++)
                    P[V] = h;
                } else
                  P = this.$getDisplayTokens(d[B].substring(W, z), T.length);
                T = T.concat(P);
              }).bind(this), I.end.row, d[I.end.row].length + 1), k[I.start.row] = this.$computeWrapSplits(T, _, m), D = I.end.row + 1) : (T = this.$getDisplayTokens(d[D]), k[D] = this.$computeWrapSplits(T, _, m), D++);
          }, $.prototype.$computeWrapSplits = function(y, f, d) {
            if (y.length == 0)
              return [];
            var m = [], k = y.length, _ = 0, T = 0, I = this.$wrapAsCode, D = this.$indentedSoftWrap, F = f <= Math.max(2 * d, 8) || D === !1 ? 0 : Math.floor(f / 2);
            function B() {
              var j = 0;
              if (F === 0)
                return j;
              if (D)
                for (var Y = 0; Y < y.length; Y++) {
                  var G = y[Y];
                  if (G == E)
                    j += 1;
                  else if (G == L)
                    j += d;
                  else {
                    if (G == x)
                      continue;
                    break;
                  }
                }
              return I && D !== !1 && (j += d), Math.min(j, F);
            }
            function z(j) {
              for (var Y = j - _, G = _; G < j; G++) {
                var J = y[G];
                (J === 12 || J === 2) && (Y -= 1);
              }
              m.length || (W = B(), m.indent = W), T += Y, m.push(T), _ = j;
            }
            for (var W = 0; k - _ > f - W; ) {
              var P = _ + f - W;
              if (y[P - 1] >= E && y[P] >= E) {
                z(P);
                continue;
              }
              if (y[P] == p || y[P] == h) {
                for (P; P != _ - 1 && y[P] != p; P--)
                  ;
                if (P > _) {
                  z(P);
                  continue;
                }
                for (P = _ + f, P; P < y.length && y[P] == h; P++)
                  ;
                if (P == y.length)
                  break;
                z(P);
                continue;
              }
              for (var V = Math.max(P - (f - (f >> 2)), _ - 1); P > V && y[P] < p; )
                P--;
              if (I) {
                for (; P > V && y[P] < p; )
                  P--;
                for (; P > V && y[P] == b; )
                  P--;
              } else
                for (; P > V && y[P] < E; )
                  P--;
              if (P > V) {
                z(++P);
                continue;
              }
              P = _ + f, y[P] == g && P--, z(P - W);
            }
            return m;
          }, $.prototype.$getDisplayTokens = function(y, f) {
            var d = [], m;
            f = f || 0;
            for (var k = 0; k < y.length; k++) {
              var _ = y.charCodeAt(k);
              if (_ == 9) {
                m = this.getScreenTabSize(d.length + f), d.push(L);
                for (var T = 1; T < m; T++)
                  d.push(x);
              } else _ == 32 ? d.push(E) : _ > 39 && _ < 48 || _ > 57 && _ < 64 ? d.push(b) : _ >= 4352 && O(_) ? d.push(v, g) : d.push(v);
            }
            return d;
          }, $.prototype.$getStringScreenWidth = function(y, f, d) {
            if (f == 0)
              return [0, 0];
            f == null && (f = 1 / 0), d = d || 0;
            var m, k;
            for (k = 0; k < y.length && (m = y.charCodeAt(k), m == 9 ? d += this.getScreenTabSize(d) : m >= 4352 && O(m) ? d += 2 : d += 1, !(d > f)); k++)
              ;
            return [d, k];
          }, $.prototype.getRowLength = function(y) {
            var f = 1;
            return this.lineWidgets && (f += this.lineWidgets[y] && this.lineWidgets[y].rowCount || 0), !this.$useWrapMode || !this.$wrapData[y] ? f : this.$wrapData[y].length + f;
          }, $.prototype.getRowLineCount = function(y) {
            return !this.$useWrapMode || !this.$wrapData[y] ? 1 : this.$wrapData[y].length + 1;
          }, $.prototype.getRowWrapIndent = function(y) {
            if (this.$useWrapMode) {
              var f = this.screenToDocumentPosition(y, Number.MAX_VALUE), d = this.$wrapData[f.row];
              return d.length && d[0] < f.column ? d.indent : 0;
            } else
              return 0;
          }, $.prototype.getScreenLastRowColumn = function(y) {
            var f = this.screenToDocumentPosition(y, Number.MAX_VALUE);
            return this.documentToScreenColumn(f.row, f.column);
          }, $.prototype.getDocumentLastRowColumn = function(y, f) {
            var d = this.documentToScreenRow(y, f);
            return this.getScreenLastRowColumn(d);
          }, $.prototype.getDocumentLastRowColumnPosition = function(y, f) {
            var d = this.documentToScreenRow(y, f);
            return this.screenToDocumentPosition(d, Number.MAX_VALUE / 10);
          }, $.prototype.getRowSplitData = function(y) {
            if (this.$useWrapMode)
              return this.$wrapData[y];
          }, $.prototype.getScreenTabSize = function(y) {
            return this.$tabSize - (y % this.$tabSize | 0);
          }, $.prototype.screenToDocumentRow = function(y, f) {
            return this.screenToDocumentPosition(y, f).row;
          }, $.prototype.screenToDocumentColumn = function(y, f) {
            return this.screenToDocumentPosition(y, f).column;
          }, $.prototype.screenToDocumentPosition = function(y, f, d) {
            if (y < 0)
              return { row: 0, column: 0 };
            var m, k = 0, _ = 0, T, I = 0, D = 0, F = this.$screenRowCache, B = this.$getRowCacheIndex(F, y), z = F.length;
            if (z && B >= 0)
              var I = F[B], k = this.$docRowCache[B], W = y > F[z - 1];
            else
              var W = !z;
            for (var P = this.getLength() - 1, V = this.getNextFoldLine(k), j = V ? V.start.row : 1 / 0; I <= y && (D = this.getRowLength(k), !(I + D > y || k >= P)); )
              I += D, k++, k > j && (k = V.end.row + 1, V = this.getNextFoldLine(k, V), j = V ? V.start.row : 1 / 0), W && (this.$docRowCache.push(k), this.$screenRowCache.push(I));
            if (V && V.start.row <= k)
              m = this.getFoldDisplayLine(V), k = V.start.row;
            else {
              if (I + D <= y || k > P)
                return {
                  row: P,
                  column: this.getLine(P).length
                };
              m = this.getLine(k), V = null;
            }
            var Y = 0, G = Math.floor(y - I);
            if (this.$useWrapMode) {
              var J = this.$wrapData[k];
              J && (T = J[G], G > 0 && J.length && (Y = J.indent, _ = J[G - 1] || J[J.length - 1], m = m.substring(_)));
            }
            return d !== void 0 && this.$bidiHandler.isBidiRow(I + G, k, G) && (f = this.$bidiHandler.offsetToCol(d)), _ += this.$getStringScreenWidth(m, f - Y)[1], this.$useWrapMode && _ >= T && (_ = T - 1), V ? V.idxToPosition(_) : { row: k, column: _ };
          }, $.prototype.documentToScreenPosition = function(y, f) {
            if (typeof f > "u")
              var d = this.$clipPositionToDocument(
                /**@type{Point}*/
                y.row,
                /**@type{Point}*/
                y.column
              );
            else
              d = this.$clipPositionToDocument(
                /**@type{number}*/
                y,
                f
              );
            y = d.row, f = d.column;
            var m = 0, k = null, _ = null;
            _ = this.getFoldAt(y, f, 1), _ && (y = _.start.row, f = _.start.column);
            var T, I = 0, D = this.$docRowCache, F = this.$getRowCacheIndex(D, y), B = D.length;
            if (B && F >= 0)
              var I = D[F], m = this.$screenRowCache[F], z = y > D[B - 1];
            else
              var z = !B;
            for (var W = this.getNextFoldLine(I), P = W ? W.start.row : 1 / 0; I < y; ) {
              if (I >= P) {
                if (T = W.end.row + 1, T > y)
                  break;
                W = this.getNextFoldLine(T, W), P = W ? W.start.row : 1 / 0;
              } else
                T = I + 1;
              m += this.getRowLength(I), I = T, z && (this.$docRowCache.push(I), this.$screenRowCache.push(m));
            }
            var V = "";
            W && I >= P ? (V = this.getFoldDisplayLine(W, y, f), k = W.start.row) : (V = this.getLine(y).substring(0, f), k = y);
            var j = 0;
            if (this.$useWrapMode) {
              var Y = this.$wrapData[k];
              if (Y) {
                for (var G = 0; V.length >= Y[G]; )
                  m++, G++;
                V = V.substring(Y[G - 1] || 0, V.length), j = G > 0 ? Y.indent : 0;
              }
            }
            return this.lineWidgets && this.lineWidgets[I] && this.lineWidgets[I].rowsAbove && (m += this.lineWidgets[I].rowsAbove), {
              row: m,
              column: j + this.$getStringScreenWidth(V)[0]
            };
          }, $.prototype.documentToScreenColumn = function(y, f) {
            return this.documentToScreenPosition(y, f).column;
          }, $.prototype.documentToScreenRow = function(y, f) {
            return this.documentToScreenPosition(y, f).row;
          }, $.prototype.getScreenLength = function() {
            var y = 0, f = null;
            if (this.$useWrapMode)
              for (var k = this.$wrapData.length, _ = 0, m = 0, f = this.$foldData[m++], T = f ? f.start.row : 1 / 0; _ < k; ) {
                var I = this.$wrapData[_];
                y += I ? I.length + 1 : 1, _++, _ > T && (_ = f.end.row + 1, f = this.$foldData[m++], T = f ? f.start.row : 1 / 0);
              }
            else {
              y = this.getLength();
              for (var d = this.$foldData, m = 0; m < d.length; m++)
                f = d[m], y -= f.end.row - f.start.row;
            }
            return this.lineWidgets && (y += this.$getWidgetScreenLength()), y;
          }, $.prototype.$setFontMetrics = function(y) {
            this.$enableVarChar && (this.$getStringScreenWidth = function(f, d, m) {
              if (d === 0)
                return [0, 0];
              d || (d = 1 / 0), m = m || 0;
              var k, _;
              for (_ = 0; _ < f.length && (k = f.charAt(_), k === "	" ? m += this.getScreenTabSize(m) : m += y.getCharacterWidth(k), !(m > d)); _++)
                ;
              return [m, _];
            });
          }, $.prototype.getPrecedingCharacter = function() {
            var y = this.selection.getCursor();
            if (y.column === 0)
              return y.row === 0 ? "" : this.doc.getNewLineCharacter();
            var f = this.getLine(y.row);
            return f[y.column - 1];
          }, $.prototype.destroy = function() {
            this.destroyed || (this.bgTokenizer.setDocument(null), this.bgTokenizer.cleanup(), this.destroyed = !0), this.endOperation(), this.$stopWorker(), this.removeAllListeners(), this.doc && this.doc.off("change", this.$onChange), this.selection && (this.selection.off("changeCursor", this.$onSelectionChange), this.selection.off("changeSelection", this.$onSelectionChange)), this.selection.detach();
          }, $;
        }()
      );
      c.$uid = 0, c.prototype.$modes = a.$modes, c.prototype.getValue = c.prototype.toString, c.prototype.$defaultUndoManager = {
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
      }, c.prototype.$overwrite = !1, c.prototype.$mode = null, c.prototype.$modeId = null, c.prototype.$scrollTop = 0, c.prototype.$scrollLeft = 0, c.prototype.$wrapLimit = 80, c.prototype.$useWrapMode = !1, c.prototype.$wrapLimitRange = {
        min: null,
        max: null
      }, c.prototype.lineWidgets = null, c.prototype.isFullWidth = O, C.implement(c.prototype, u);
      var v = 1, g = 2, p = 3, h = 4, b = 9, E = 10, L = 11, x = 12;
      function O($) {
        return $ < 4352 ? !1 : $ >= 4352 && $ <= 4447 || $ >= 4515 && $ <= 4519 || $ >= 4602 && $ <= 4607 || $ >= 9001 && $ <= 9002 || $ >= 11904 && $ <= 11929 || $ >= 11931 && $ <= 12019 || $ >= 12032 && $ <= 12245 || $ >= 12272 && $ <= 12283 || $ >= 12288 && $ <= 12350 || $ >= 12353 && $ <= 12438 || $ >= 12441 && $ <= 12543 || $ >= 12549 && $ <= 12589 || $ >= 12593 && $ <= 12686 || $ >= 12688 && $ <= 12730 || $ >= 12736 && $ <= 12771 || $ >= 12784 && $ <= 12830 || $ >= 12832 && $ <= 12871 || $ >= 12880 && $ <= 13054 || $ >= 13056 && $ <= 19903 || $ >= 19968 && $ <= 42124 || $ >= 42128 && $ <= 42182 || $ >= 43360 && $ <= 43388 || $ >= 44032 && $ <= 55203 || $ >= 55216 && $ <= 55238 || $ >= 55243 && $ <= 55291 || $ >= 63744 && $ <= 64255 || $ >= 65040 && $ <= 65049 || $ >= 65072 && $ <= 65106 || $ >= 65108 && $ <= 65126 || $ >= 65128 && $ <= 65131 || $ >= 65281 && $ <= 65376 || $ >= 65504 && $ <= 65510;
      }
      S("./edit_session/folding").Folding.call(c.prototype), S("./edit_session/bracket_match").BracketMatch.call(c.prototype), a.defineOptions(c.prototype, "session", {
        wrap: {
          set: function($) {
            if (!$ || $ == "off" ? $ = !1 : $ == "free" ? $ = !0 : $ == "printMargin" ? $ = -1 : typeof $ == "string" && ($ = parseInt($, 10) || !1), this.$wrap != $)
              if (this.$wrap = $, !$)
                this.setUseWrapMode(!1);
              else {
                var y = typeof $ == "number" ? $ : null;
                this.setWrapLimitRange(y, y), this.setUseWrapMode(!0);
              }
          },
          get: function() {
            return this.getUseWrapMode() ? this.$wrap == -1 ? "printMargin" : this.getWrapLimitRange().min ? this.$wrap : "free" : "off";
          },
          handlesSet: !0
        },
        wrapMethod: {
          set: function($) {
            $ = $ == "auto" ? this.$mode.type != "text" : $ != "text", $ != this.$wrapAsCode && (this.$wrapAsCode = $, this.$useWrapMode && (this.$useWrapMode = !1, this.setUseWrapMode(!0)));
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
          set: function($) {
            this.$useWorker = $, this.$stopWorker(), $ && this.$startWorker();
          },
          initialValue: !0
        },
        useSoftTabs: { initialValue: !0 },
        tabSize: {
          set: function($) {
            $ = parseInt($), $ > 0 && this.$tabSize !== $ && (this.$modified = !0, this.$rowLengthCache = [], this.$tabSize = $, this._signal("changeTabSize"));
          },
          initialValue: 4,
          handlesSet: !0
        },
        navigateWithinSoftTabs: { initialValue: !1 },
        foldStyle: {
          set: function($) {
            this.setFoldStyle($);
          },
          handlesSet: !0
        },
        overwrite: {
          set: function($) {
            this._signal("changeOverwrite");
          },
          initialValue: !1
        },
        newLineMode: {
          set: function($) {
            this.doc.setNewLineMode($);
          },
          get: function() {
            return this.doc.getNewLineMode();
          },
          handlesSet: !0
        },
        mode: {
          set: function($) {
            this.setMode($);
          },
          get: function() {
            return this.$modeId;
          },
          handlesSet: !0
        }
      }), M.EditSession = c;
    }), ace.define("ace/search", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function(S, M, H) {
      var C = S("./lib/lang"), A = S("./lib/oop"), w = S("./range").Range, a = (
        /** @class */
        function() {
          function n() {
            this.$options = {};
          }
          return n.prototype.set = function(t) {
            return A.mixin(this.$options, t), this;
          }, n.prototype.getOptions = function() {
            return C.copyObject(this.$options);
          }, n.prototype.setOptions = function(t) {
            this.$options = t;
          }, n.prototype.find = function(t) {
            var e = this.$options, r = this.$matchIterator(t, e);
            if (!r)
              return !1;
            var s = null;
            return r.forEach(function(l, c, v, g) {
              return s = new w(l, c, v, g), c == g && e.start && /**@type{Range}*/
              e.start.start && e.skipCurrent != !1 && s.isEqual(
                /**@type{Range}*/
                e.start
              ) ? (s = null, !1) : !0;
            }), s;
          }, n.prototype.findAll = function(t) {
            var e = this.$options;
            if (!e.needle)
              return [];
            this.$assembleRegExp(e);
            var r = e.range, s = r ? t.getLines(r.start.row, r.end.row) : t.doc.getAllLines(), l = [], c = e.re;
            if (e.$isMultiLine) {
              var v = c.length, g = s.length - v, p;
              e: for (var h = c.offset || 0; h <= g; h++) {
                for (var b = 0; b < v; b++)
                  if (s[h + b].search(c[b]) == -1)
                    continue e;
                var E = s[h], L = s[h + v - 1], x = E.length - E.match(c[0])[0].length, O = L.match(c[v - 1])[0].length;
                p && p.end.row === h && p.end.column > x || (l.push(p = new w(h, x, h + v - 1, O)), v > 2 && (h = h + v - 2));
              }
            } else
              for (var $, y = 0; y < s.length; y++)
                if (this.$isMultilineSearch(e)) {
                  var f = s.length - 1;
                  if ($ = this.$multiLineForward(t, c, y, f), $) {
                    var d = $.endRow <= f ? $.endRow - 1 : f;
                    d > y && (y = d), l.push(new w($.startRow, $.startCol, $.endRow, $.endCol));
                  }
                } else {
                  $ = C.getMatchOffsets(s[y], c);
                  for (var b = 0; b < $.length; b++) {
                    var m = $[b];
                    l.push(new w(y, m.offset, y, m.offset + m.length));
                  }
                }
            if (r) {
              for (var k = r.start.column, _ = r.end.column, y = 0, b = l.length - 1; y < b && l[y].start.column < k && l[y].start.row == 0; )
                y++;
              for (var T = r.end.row - r.start.row; y < b && l[b].end.column > _ && l[b].end.row == T; )
                b--;
              for (l = l.slice(y, b + 1), y = 0, b = l.length; y < b; y++)
                l[y].start.row += r.start.row, l[y].end.row += r.start.row;
            }
            return l;
          }, n.prototype.parseReplaceString = function(t) {
            for (var e = {
              DollarSign: 36,
              Ampersand: 38,
              Digit0: 48,
              Digit1: 49,
              Digit9: 57,
              Backslash: 92,
              n: 110,
              t: 116
            }, r = "", s = 0, l = t.length; s < l; s++) {
              var c = t.charCodeAt(s);
              if (c === e.Backslash) {
                if (s++, s >= l) {
                  r += "\\";
                  break;
                }
                var v = t.charCodeAt(s);
                switch (v) {
                  case e.Backslash:
                    r += "\\";
                    break;
                  case e.n:
                    r += `
`;
                    break;
                  case e.t:
                    r += "	";
                    break;
                }
                continue;
              }
              if (c === e.DollarSign) {
                if (s++, s >= l) {
                  r += "$";
                  break;
                }
                var g = t.charCodeAt(s);
                if (g === e.DollarSign) {
                  r += "$$";
                  continue;
                }
                if (g === e.Digit0 || g === e.Ampersand) {
                  r += "$&";
                  continue;
                }
                if (e.Digit1 <= g && g <= e.Digit9) {
                  r += "$" + t[s];
                  continue;
                }
              }
              r += t[s];
            }
            return r || t;
          }, n.prototype.replace = function(t, e) {
            var r = this.$options, s = this.$assembleRegExp(r);
            if (r.$isMultiLine)
              return e;
            if (s) {
              var l = this.$isMultilineSearch(r);
              l && (t = t.replace(/\r\n|\r|\n/g, `
`));
              var c = s.exec(t);
              if (!c || !l && c[0].length != t.length)
                return null;
              if (e = r.regExp ? this.parseReplaceString(e) : e.replace(/\$/g, "$$$$"), e = t.replace(s, e), r.preserveCase) {
                e = e.split("");
                for (var v = Math.min(t.length, t.length); v--; ) {
                  var g = t[v];
                  g && g.toLowerCase() != g ? e[v] = e[v].toUpperCase() : e[v] = e[v].toLowerCase();
                }
                e = e.join("");
              }
              return e;
            }
          }, n.prototype.$assembleRegExp = function(t, e) {
            if (t.needle instanceof RegExp)
              return t.re = t.needle;
            var r = t.needle;
            if (!t.needle)
              return t.re = !1;
            t.regExp || (r = C.escapeRegExp(r));
            var s = t.caseSensitive ? "gm" : "gmi";
            try {
              new RegExp(r, "u"), t.$supportsUnicodeFlag = !0, s += "u";
            } catch {
              t.$supportsUnicodeFlag = !1;
            }
            if (t.wholeWord && (r = u(r, t)), t.$isMultiLine = !e && /[\n\r]/.test(r), t.$isMultiLine)
              return t.re = this.$assembleMultilineRegExp(r, s);
            try {
              var l = new RegExp(r, s);
            } catch {
              l = !1;
            }
            return t.re = l;
          }, n.prototype.$assembleMultilineRegExp = function(t, e) {
            for (var r = t.replace(/\r\n|\r|\n/g, `$
^`).split(`
`), s = [], l = 0; l < r.length; l++)
              try {
                s.push(new RegExp(r[l], e));
              } catch {
                return !1;
              }
            return s;
          }, n.prototype.$isMultilineSearch = function(t) {
            return t.re && /\\r\\n|\\r|\\n/.test(t.re.source) && t.regExp && !t.$isMultiLine;
          }, n.prototype.$multiLineForward = function(t, e, r, s) {
            for (var l, c = o(t, r), v = r; v <= s; ) {
              for (var g = 0; g < c && !(v > s); g++) {
                var p = t.getLine(v++);
                l = l == null ? p : l + `
` + p;
              }
              var h = e.exec(l);
              if (e.lastIndex = 0, h) {
                var b = l.slice(0, h.index).split(`
`), E = h[0].split(`
`), L = r + b.length - 1, x = b[b.length - 1].length, O = L + E.length - 1, $ = E.length == 1 ? x + E[0].length : E[E.length - 1].length;
                return {
                  startRow: L,
                  startCol: x,
                  endRow: O,
                  endCol: $
                };
              }
            }
            return null;
          }, n.prototype.$multiLineBackward = function(t, e, r, s, l) {
            for (var c, v = o(t, s), g = t.getLine(s).length - r, p = s; p >= l; ) {
              for (var h = 0; h < v && p >= l; h++) {
                var b = t.getLine(p--);
                c = c == null ? b : b + `
` + c;
              }
              var E = i(c, e, g);
              if (E) {
                var L = c.slice(0, E.index).split(`
`), x = E[0].split(`
`), O = p + L.length, $ = L[L.length - 1].length, y = O + x.length - 1, f = x.length == 1 ? $ + x[0].length : x[x.length - 1].length;
                return {
                  startRow: O,
                  startCol: $,
                  endRow: y,
                  endCol: f
                };
              }
            }
            return null;
          }, n.prototype.$matchIterator = function(t, e) {
            var r = this.$assembleRegExp(e);
            if (!r)
              return !1;
            var s = this.$isMultilineSearch(e), l = this.$multiLineForward, c = this.$multiLineBackward, v = e.backwards == !0, g = e.skipCurrent != !1, p = r.unicode, h = e.range, b = e.start;
            b || (b = h ? h[v ? "end" : "start"] : t.selection.getRange()), b.start && (b = b[g != v ? "end" : "start"]);
            var E = h ? h.start.row : 0, L = h ? h.end.row : t.getLength() - 1;
            if (v)
              var x = function(y) {
                var f = b.row;
                if (!$(f, b.column, y)) {
                  for (f--; f >= E; f--)
                    if ($(f, Number.MAX_VALUE, y))
                      return;
                  if (e.wrap != !1) {
                    for (f = L, E = b.row; f >= E; f--)
                      if ($(f, Number.MAX_VALUE, y))
                        return;
                  }
                }
              };
            else
              var x = function(f) {
                var d = b.row;
                if (!$(d, b.column, f)) {
                  for (d = d + 1; d <= L; d++)
                    if ($(d, 0, f))
                      return;
                  if (e.wrap != !1) {
                    for (d = E, L = b.row; d <= L; d++)
                      if ($(d, 0, f))
                        return;
                  }
                }
              };
            if (e.$isMultiLine)
              var O = r.length, $ = function(y, f, d) {
                var m = v ? y - O + 1 : y;
                if (!(m < 0 || m + O > t.getLength())) {
                  var k = t.getLine(m), _ = k.search(r[0]);
                  if (!(!v && _ < f || _ === -1)) {
                    for (var T = 1; T < O; T++)
                      if (k = t.getLine(m + T), k.search(r[T]) == -1)
                        return;
                    var I = k.match(r[O - 1])[0].length;
                    if (!(v && I > f) && d(m, _, m + O - 1, I))
                      return !0;
                  }
                }
              };
            else if (v)
              var $ = function(f, d, m) {
                if (s) {
                  var k = c(t, r, d, f, E);
                  if (!k)
                    return !1;
                  if (m(k.startRow, k.startCol, k.endRow, k.endCol))
                    return !0;
                } else {
                  var _ = t.getLine(f), T = [], I, D = 0;
                  for (r.lastIndex = 0; I = r.exec(_); ) {
                    var F = I[0].length;
                    if (D = I.index, !F) {
                      if (D >= _.length)
                        break;
                      r.lastIndex = D += C.skipEmptyMatch(_, D, p);
                    }
                    if (I.index + F > d)
                      break;
                    T.push(I.index, F);
                  }
                  for (var B = T.length - 1; B >= 0; B -= 2) {
                    var z = T[B - 1], F = T[B];
                    if (m(f, z, f, z + F))
                      return !0;
                  }
                }
              };
            else
              var $ = function(f, d, m) {
                if (r.lastIndex = d, s) {
                  var k = l(t, r, f, L);
                  if (k) {
                    var _ = k.endRow <= L ? k.endRow - 1 : L;
                    _ > f && (f = _);
                  }
                  if (!k)
                    return !1;
                  if (m(k.startRow, k.startCol, k.endRow, k.endCol))
                    return !0;
                } else
                  for (var T = t.getLine(f), I, D; D = r.exec(T); ) {
                    var F = D[0].length;
                    if (I = D.index, m(f, I, f, I + F))
                      return !0;
                    if (!F && (r.lastIndex = I += C.skipEmptyMatch(T, I, p), I >= T.length))
                      return !1;
                  }
              };
            return { forEach: x };
          }, n;
        }()
      );
      function u(n, t) {
        var e = C.supportsLookbehind();
        function r(v, g) {
          g === void 0 && (g = !0);
          var p = e && t.$supportsUnicodeFlag ? new RegExp("[\\p{L}\\p{N}_]", "u") : new RegExp("\\w");
          return p.test(v) || t.regExp ? e && t.$supportsUnicodeFlag ? g ? "(?<=^|[^\\p{L}\\p{N}_])" : "(?=[^\\p{L}\\p{N}_]|$)" : "\\b" : "";
        }
        var s = Array.from(n), l = s[0], c = s[s.length - 1];
        return r(l) + n + r(c, !1);
      }
      function i(n, t, e) {
        for (var r = null, s = 0; s <= n.length; ) {
          t.lastIndex = s;
          var l = t.exec(n);
          if (!l)
            break;
          var c = l.index + l[0].length;
          if (c > n.length - e)
            break;
          (!r || c > r.index + r[0].length) && (r = l), s = l.index + 1;
        }
        return r;
      }
      function o(n, t) {
        var e = 5e3, r = { row: t, column: 0 }, s = n.doc.positionToIndex(r), l = s + e, c = n.doc.indexToPosition(l), v = c.row;
        return v + 1;
      }
      M.Search = a;
    }), ace.define("ace/keyboard/hash_handler", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function(S, M, H) {
      var C = this && this.__extends || /* @__PURE__ */ function() {
        var n = function(t, e) {
          return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, s) {
            r.__proto__ = s;
          } || function(r, s) {
            for (var l in s) Object.prototype.hasOwnProperty.call(s, l) && (r[l] = s[l]);
          }, n(t, e);
        };
        return function(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
          n(t, e);
          function r() {
            this.constructor = t;
          }
          t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
        };
      }(), A = S("../lib/keys"), w = S("../lib/useragent"), a = A.KEY_MODS, u = (
        /** @class */
        function() {
          function n(t, e) {
            this.$init(t, e, !1);
          }
          return n.prototype.$init = function(t, e, r) {
            this.platform = e || (w.isMac ? "mac" : "win"), this.commands = {}, this.commandKeyBinding = {}, this.addCommands(t), this.$singleCommand = r;
          }, n.prototype.addCommand = function(t) {
            this.commands[t.name] && this.removeCommand(t), this.commands[t.name] = t, t.bindKey && this._buildKeyHash(t);
          }, n.prototype.removeCommand = function(t, e) {
            var r = t && (typeof t == "string" ? t : t.name);
            t = this.commands[r], e || delete this.commands[r];
            var s = this.commandKeyBinding;
            for (var l in s) {
              var c = s[l];
              if (c == t)
                delete s[l];
              else if (Array.isArray(c)) {
                var v = c.indexOf(t);
                v != -1 && (c.splice(v, 1), c.length == 1 && (s[l] = c[0]));
              }
            }
          }, n.prototype.bindKey = function(t, e, r) {
            if (typeof t == "object" && t && (r == null && (r = t.position), t = t[this.platform]), !!t) {
              if (typeof e == "function")
                return this.addCommand({ exec: e, bindKey: t, name: e.name || /**@type{string}*/
                t });
              t.split("|").forEach(function(s) {
                var l = "";
                if (s.indexOf(" ") != -1) {
                  var c = s.split(/\s+/);
                  s = c.pop(), c.forEach(function(p) {
                    var h = this.parseKeys(p), b = a[h.hashId] + h.key;
                    l += (l ? " " : "") + b, this._addCommandToBinding(l, "chainKeys");
                  }, this), l += " ";
                }
                var v = this.parseKeys(s), g = a[v.hashId] + v.key;
                this._addCommandToBinding(l + g, e, r);
              }, this);
            }
          }, n.prototype._addCommandToBinding = function(t, e, r) {
            var s = this.commandKeyBinding, l;
            if (!e)
              delete s[t];
            else if (!s[t] || this.$singleCommand)
              s[t] = e;
            else {
              Array.isArray(s[t]) ? (l = s[t].indexOf(e)) != -1 && s[t].splice(l, 1) : s[t] = [s[t]], typeof r != "number" && (r = i(e));
              var c = s[t];
              for (l = 0; l < c.length; l++) {
                var v = c[l], g = i(v);
                if (g > r)
                  break;
              }
              c.splice(l, 0, e);
            }
          }, n.prototype.addCommands = function(t) {
            t && Object.keys(t).forEach(function(e) {
              var r = t[e];
              if (r) {
                if (typeof r == "string")
                  return this.bindKey(r, e);
                typeof r == "function" && (r = { exec: r }), typeof r == "object" && (r.name || (r.name = e), this.addCommand(r));
              }
            }, this);
          }, n.prototype.removeCommands = function(t) {
            Object.keys(t).forEach(function(e) {
              this.removeCommand(t[e]);
            }, this);
          }, n.prototype.bindKeys = function(t) {
            Object.keys(t).forEach(function(e) {
              this.bindKey(e, t[e]);
            }, this);
          }, n.prototype._buildKeyHash = function(t) {
            this.bindKey(t.bindKey, t);
          }, n.prototype.parseKeys = function(t) {
            var e = t.toLowerCase().split(/[\-\+]([\-\+])?/).filter(function(g) {
              return g;
            }), r = e.pop(), s = A[r];
            if (A.FUNCTION_KEYS[s])
              r = A.FUNCTION_KEYS[s].toLowerCase();
            else if (e.length) {
              if (e.length == 1 && e[0] == "shift")
                return { key: r.toUpperCase(), hashId: -1 };
            } else return { key: r, hashId: -1 };
            for (var l = 0, c = e.length; c--; ) {
              var v = A.KEY_MODS[e[c]];
              if (v == null)
                return typeof console < "u" && console.error("invalid modifier " + e[c] + " in " + t), !1;
              l |= v;
            }
            return { key: r, hashId: l };
          }, n.prototype.findKeyCommand = function(t, e) {
            var r = a[t] + e;
            return this.commandKeyBinding[r];
          }, n.prototype.handleKeyboard = function(t, e, r, s) {
            if (!(s < 0)) {
              var l = a[e] + r, c = this.commandKeyBinding[l];
              return t.$keyChain && (t.$keyChain += " " + l, c = this.commandKeyBinding[t.$keyChain] || c), c && (c == "chainKeys" || c[c.length - 1] == "chainKeys") ? (t.$keyChain = t.$keyChain || l, { command: "null" }) : (t.$keyChain && ((!e || e == 4) && r.length == 1 ? t.$keyChain = t.$keyChain.slice(0, -l.length - 1) : (e == -1 || s > 0) && (t.$keyChain = "")), { command: c });
            }
          }, n.prototype.getStatusText = function(t, e) {
            return e.$keyChain || "";
          }, n;
        }()
      );
      function i(n) {
        return typeof n == "object" && n.bindKey && n.bindKey.position || (n.isDefault ? -100 : 0);
      }
      var o = (
        /** @class */
        function(n) {
          C(t, n);
          function t(e, r) {
            var s = n.call(this, e, r) || this;
            return s.$singleCommand = !0, s;
          }
          return t;
        }(u)
      );
      o.call = function(n, t, e) {
        u.prototype.$init.call(n, t, e, !0);
      }, u.call = function(n, t, e) {
        u.prototype.$init.call(n, t, e, !1);
      }, M.HashHandler = o, M.MultiHashHandler = u;
    }), ace.define("ace/commands/command_manager", ["require", "exports", "module", "ace/lib/oop", "ace/keyboard/hash_handler", "ace/lib/event_emitter"], function(S, M, H) {
      var C = this && this.__extends || /* @__PURE__ */ function() {
        var i = function(o, n) {
          return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, e) {
            t.__proto__ = e;
          } || function(t, e) {
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          }, i(o, n);
        };
        return function(o, n) {
          if (typeof n != "function" && n !== null)
            throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
          i(o, n);
          function t() {
            this.constructor = o;
          }
          o.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
        };
      }(), A = S("../lib/oop"), w = S("../keyboard/hash_handler").MultiHashHandler, a = S("../lib/event_emitter").EventEmitter, u = (
        /** @class */
        function(i) {
          C(o, i);
          function o(n, t) {
            var e = i.call(this, t, n) || this;
            return e.byName = e.commands, e.setDefaultHandler("exec", function(r) {
              return r.args ? r.command.exec(r.editor, r.args, r.event, !1) : r.command.exec(r.editor, {}, r.event, !0);
            }), e;
          }
          return o.prototype.exec = function(n, t, e) {
            if (Array.isArray(n)) {
              for (var r = n.length; r--; )
                if (this.exec(n[r], t, e))
                  return !0;
              return !1;
            }
            typeof n == "string" && (n = this.commands[n]);
            var s = { editor: t, command: n, args: e };
            return this.canExecute(n, t) ? (s.returnValue = this._emit("exec", s), this._signal("afterExec", s), s.returnValue !== !1) : (this._signal("commandUnavailable", s), !1);
          }, o.prototype.canExecute = function(n, t) {
            return typeof n == "string" && (n = this.commands[n]), !(!n || t && t.$readOnly && !n.readOnly || this.$checkCommandState != !1 && n.isAvailable && !n.isAvailable(t));
          }, o.prototype.toggleRecording = function(n) {
            if (!this.$inReplay)
              return n && n._emit("changeStatus"), this.recording ? (this.macro.pop(), this.off("exec", this.$addCommandToMacro), this.macro.length || (this.macro = this.oldMacro), this.recording = !1) : (this.$addCommandToMacro || (this.$addCommandToMacro = (function(t) {
                this.macro.push([t.command, t.args]);
              }).bind(this)), this.oldMacro = this.macro, this.macro = [], this.on("exec", this.$addCommandToMacro), this.recording = !0);
          }, o.prototype.replay = function(n) {
            if (!(this.$inReplay || !this.macro)) {
              if (this.recording)
                return this.toggleRecording(n);
              try {
                this.$inReplay = !0, this.macro.forEach(function(t) {
                  typeof t == "string" ? this.exec(t, n) : this.exec(t[0], n, t[1]);
                }, this);
              } finally {
                this.$inReplay = !1;
              }
            }
          }, o.prototype.trimMacro = function(n) {
            return n.map(function(t) {
              return typeof t[0] != "string" && (t[0] = t[0].name), t[1] || (t = t[0]), t;
            });
          }, o;
        }(w)
      );
      A.implement(u.prototype, a), M.CommandManager = u;
    }), ace.define("ace/commands/default_commands", ["require", "exports", "module", "ace/lib/lang", "ace/config", "ace/range"], function(S, M, H) {
      var C = S("../lib/lang"), A = S("../config"), w = S("../range").Range;
      function a(i, o) {
        return { win: i, mac: o };
      }
      M.commands = [
        {
          name: "showSettingsMenu",
          description: "Show settings menu",
          bindKey: a("Ctrl-,", "Command-,"),
          exec: function(i) {
            A.loadModule("ace/ext/settings_menu", function(o) {
              o.init(i), i.showSettingsMenu();
            });
          },
          readOnly: !0
        },
        {
          name: "goToNextError",
          description: "Go to next error",
          bindKey: a("Alt-E", "F4"),
          exec: function(i) {
            A.loadModule("ace/ext/error_marker", function(o) {
              o.showErrorMarker(i, 1);
            });
          },
          scrollIntoView: "animate",
          readOnly: !0
        },
        {
          name: "goToPreviousError",
          description: "Go to previous error",
          bindKey: a("Alt-Shift-E", "Shift-F4"),
          exec: function(i) {
            A.loadModule("ace/ext/error_marker", function(o) {
              o.showErrorMarker(i, -1);
            });
          },
          scrollIntoView: "animate",
          readOnly: !0
        },
        {
          name: "selectall",
          description: "Select all",
          bindKey: a("Ctrl-A", "Command-A"),
          exec: function(i) {
            i.selectAll();
          },
          readOnly: !0
        },
        {
          name: "centerselection",
          description: "Center selection",
          bindKey: a(null, "Ctrl-L"),
          exec: function(i) {
            i.centerSelection();
          },
          readOnly: !0
        },
        {
          name: "gotoline",
          description: "Go to line...",
          bindKey: a("Ctrl-L", "Command-L"),
          exec: function(i, o) {
            typeof o == "number" && !isNaN(o) && i.gotoLine(o), i.prompt({ $type: "gotoLine" });
          },
          readOnly: !0
        },
        {
          name: "fold",
          bindKey: a("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"),
          exec: function(i) {
            i.session.toggleFold(!1);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "unfold",
          bindKey: a("Alt-Shift-L|Ctrl-Shift-F1", "Command-Alt-Shift-L|Command-Shift-F1"),
          exec: function(i) {
            i.session.toggleFold(!0);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "toggleFoldWidget",
          description: "Toggle fold widget",
          bindKey: a("F2", "F2"),
          exec: function(i) {
            i.session.toggleFoldWidget();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "toggleParentFoldWidget",
          description: "Toggle parent fold widget",
          bindKey: a("Alt-F2", "Alt-F2"),
          exec: function(i) {
            i.session.toggleFoldWidget(!0);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "foldall",
          description: "Fold all",
          bindKey: a(null, "Ctrl-Command-Option-0"),
          exec: function(i) {
            i.session.foldAll();
          },
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "foldAllComments",
          description: "Fold all comments",
          bindKey: a(null, "Ctrl-Command-Option-0"),
          exec: function(i) {
            i.session.foldAllComments();
          },
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "foldOther",
          description: "Fold other",
          bindKey: a("Alt-0", "Command-Option-0"),
          exec: function(i) {
            i.session.foldAll(), i.session.unfold(i.selection.getAllRanges());
          },
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "unfoldall",
          description: "Unfold all",
          bindKey: a("Alt-Shift-0", "Command-Option-Shift-0"),
          exec: function(i) {
            i.session.unfold();
          },
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "findnext",
          description: "Find next",
          bindKey: a("Ctrl-K", "Command-G"),
          exec: function(i) {
            i.findNext();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "findprevious",
          description: "Find previous",
          bindKey: a("Ctrl-Shift-K", "Command-Shift-G"),
          exec: function(i) {
            i.findPrevious();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "selectOrFindNext",
          description: "Select or find next",
          bindKey: a("Alt-K", "Ctrl-G"),
          exec: function(i) {
            i.selection.isEmpty() ? i.selection.selectWord() : i.findNext();
          },
          readOnly: !0
        },
        {
          name: "selectOrFindPrevious",
          description: "Select or find previous",
          bindKey: a("Alt-Shift-K", "Ctrl-Shift-G"),
          exec: function(i) {
            i.selection.isEmpty() ? i.selection.selectWord() : i.findPrevious();
          },
          readOnly: !0
        },
        {
          name: "find",
          description: "Find",
          bindKey: a("Ctrl-F", "Command-F"),
          exec: function(i) {
            A.loadModule("ace/ext/searchbox", function(o) {
              o.Search(i);
            });
          },
          readOnly: !0
        },
        {
          name: "overwrite",
          description: "Overwrite",
          bindKey: "Insert",
          exec: function(i) {
            i.toggleOverwrite();
          },
          readOnly: !0
        },
        {
          name: "selecttostart",
          description: "Select to start",
          bindKey: a("Ctrl-Shift-Home", "Command-Shift-Home|Command-Shift-Up"),
          exec: function(i) {
            i.getSelection().selectFileStart();
          },
          multiSelectAction: "forEach",
          readOnly: !0,
          scrollIntoView: "animate",
          aceCommandGroup: "fileJump"
        },
        {
          name: "gotostart",
          description: "Go to start",
          bindKey: a("Ctrl-Home", "Command-Home|Command-Up"),
          exec: function(i) {
            i.navigateFileStart();
          },
          multiSelectAction: "forEach",
          readOnly: !0,
          scrollIntoView: "animate",
          aceCommandGroup: "fileJump"
        },
        {
          name: "selectup",
          description: "Select up",
          bindKey: a("Shift-Up", "Shift-Up|Ctrl-Shift-P"),
          exec: function(i) {
            i.getSelection().selectUp();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "golineup",
          description: "Go line up",
          bindKey: a("Up", "Up|Ctrl-P"),
          exec: function(i, o) {
            i.navigateUp(o.times);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selecttoend",
          description: "Select to end",
          bindKey: a("Ctrl-Shift-End", "Command-Shift-End|Command-Shift-Down"),
          exec: function(i) {
            i.getSelection().selectFileEnd();
          },
          multiSelectAction: "forEach",
          readOnly: !0,
          scrollIntoView: "animate",
          aceCommandGroup: "fileJump"
        },
        {
          name: "gotoend",
          description: "Go to end",
          bindKey: a("Ctrl-End", "Command-End|Command-Down"),
          exec: function(i) {
            i.navigateFileEnd();
          },
          multiSelectAction: "forEach",
          readOnly: !0,
          scrollIntoView: "animate",
          aceCommandGroup: "fileJump"
        },
        {
          name: "selectdown",
          description: "Select down",
          bindKey: a("Shift-Down", "Shift-Down|Ctrl-Shift-N"),
          exec: function(i) {
            i.getSelection().selectDown();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "golinedown",
          description: "Go line down",
          bindKey: a("Down", "Down|Ctrl-N"),
          exec: function(i, o) {
            i.navigateDown(o.times);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selectwordleft",
          description: "Select word left",
          bindKey: a("Ctrl-Shift-Left", "Option-Shift-Left"),
          exec: function(i) {
            i.getSelection().selectWordLeft();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "gotowordleft",
          description: "Go to word left",
          bindKey: a("Ctrl-Left", "Option-Left"),
          exec: function(i) {
            i.navigateWordLeft();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selecttolinestart",
          description: "Select to line start",
          bindKey: a("Alt-Shift-Left", "Command-Shift-Left|Ctrl-Shift-A"),
          exec: function(i) {
            i.getSelection().selectLineStart();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "gotolinestart",
          description: "Go to line start",
          bindKey: a("Alt-Left|Home", "Command-Left|Home|Ctrl-A"),
          exec: function(i) {
            i.navigateLineStart();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selectleft",
          description: "Select left",
          bindKey: a("Shift-Left", "Shift-Left|Ctrl-Shift-B"),
          exec: function(i) {
            i.getSelection().selectLeft();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "gotoleft",
          description: "Go to left",
          bindKey: a("Left", "Left|Ctrl-B"),
          exec: function(i, o) {
            i.navigateLeft(o.times);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selectwordright",
          description: "Select word right",
          bindKey: a("Ctrl-Shift-Right", "Option-Shift-Right"),
          exec: function(i) {
            i.getSelection().selectWordRight();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "gotowordright",
          description: "Go to word right",
          bindKey: a("Ctrl-Right", "Option-Right"),
          exec: function(i) {
            i.navigateWordRight();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selecttolineend",
          description: "Select to line end",
          bindKey: a("Alt-Shift-Right", "Command-Shift-Right|Shift-End|Ctrl-Shift-E"),
          exec: function(i) {
            i.getSelection().selectLineEnd();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "gotolineend",
          description: "Go to line end",
          bindKey: a("Alt-Right|End", "Command-Right|End|Ctrl-E"),
          exec: function(i) {
            i.navigateLineEnd();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selectright",
          description: "Select right",
          bindKey: a("Shift-Right", "Shift-Right"),
          exec: function(i) {
            i.getSelection().selectRight();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "gotoright",
          description: "Go to right",
          bindKey: a("Right", "Right|Ctrl-F"),
          exec: function(i, o) {
            i.navigateRight(o.times);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selectpagedown",
          description: "Select page down",
          bindKey: "Shift-PageDown",
          exec: function(i) {
            i.selectPageDown();
          },
          readOnly: !0
        },
        {
          name: "pagedown",
          description: "Page down",
          bindKey: a(null, "Option-PageDown"),
          exec: function(i) {
            i.scrollPageDown();
          },
          readOnly: !0
        },
        {
          name: "gotopagedown",
          description: "Go to page down",
          bindKey: a("PageDown", "PageDown|Ctrl-V"),
          exec: function(i) {
            i.gotoPageDown();
          },
          readOnly: !0
        },
        {
          name: "selectpageup",
          description: "Select page up",
          bindKey: "Shift-PageUp",
          exec: function(i) {
            i.selectPageUp();
          },
          readOnly: !0
        },
        {
          name: "pageup",
          description: "Page up",
          bindKey: a(null, "Option-PageUp"),
          exec: function(i) {
            i.scrollPageUp();
          },
          readOnly: !0
        },
        {
          name: "gotopageup",
          description: "Go to page up",
          bindKey: "PageUp",
          exec: function(i) {
            i.gotoPageUp();
          },
          readOnly: !0
        },
        {
          name: "scrollup",
          description: "Scroll up",
          bindKey: a("Ctrl-Up", null),
          exec: function(i) {
            i.renderer.scrollBy(0, -2 * i.renderer.layerConfig.lineHeight);
          },
          readOnly: !0
        },
        {
          name: "scrolldown",
          description: "Scroll down",
          bindKey: a("Ctrl-Down", null),
          exec: function(i) {
            i.renderer.scrollBy(0, 2 * i.renderer.layerConfig.lineHeight);
          },
          readOnly: !0
        },
        {
          name: "selectlinestart",
          description: "Select line start",
          bindKey: "Shift-Home",
          exec: function(i) {
            i.getSelection().selectLineStart();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selectlineend",
          description: "Select line end",
          bindKey: "Shift-End",
          exec: function(i) {
            i.getSelection().selectLineEnd();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "togglerecording",
          description: "Toggle recording",
          bindKey: a("Ctrl-Alt-E", "Command-Option-E"),
          exec: function(i) {
            i.commands.toggleRecording(i);
          },
          readOnly: !0
        },
        {
          name: "replaymacro",
          description: "Replay macro",
          bindKey: a("Ctrl-Shift-E", "Command-Shift-E"),
          exec: function(i) {
            i.commands.replay(i);
          },
          readOnly: !0
        },
        {
          name: "jumptomatching",
          description: "Jump to matching",
          bindKey: a("Ctrl-\\|Ctrl-P", "Command-\\"),
          exec: function(i) {
            i.jumpToMatching();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "animate",
          readOnly: !0
        },
        {
          name: "selecttomatching",
          description: "Select to matching",
          bindKey: a("Ctrl-Shift-\\|Ctrl-Shift-P", "Command-Shift-\\"),
          exec: function(i) {
            i.jumpToMatching(!0);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "animate",
          readOnly: !0
        },
        {
          name: "expandToMatching",
          description: "Expand to matching",
          bindKey: a("Ctrl-Shift-M", "Ctrl-Shift-M"),
          exec: function(i) {
            i.jumpToMatching(!0, !0);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "animate",
          readOnly: !0
        },
        {
          name: "passKeysToBrowser",
          description: "Pass keys to browser",
          bindKey: a(null, null),
          exec: function() {
          },
          passEvent: !0,
          readOnly: !0
        },
        {
          name: "copy",
          description: "Copy",
          exec: function(i) {
          },
          readOnly: !0
        },
        {
          name: "cut",
          description: "Cut",
          exec: function(i) {
            var o = i.$copyWithEmptySelection && i.selection.isEmpty(), n = o ? i.selection.getLineRange() : i.selection.getRange();
            i._emit("cut", n), n.isEmpty() || i.session.remove(n), i.clearSelection();
          },
          scrollIntoView: "cursor",
          multiSelectAction: "forEach"
        },
        {
          name: "paste",
          description: "Paste",
          exec: function(i, o) {
            i.$handlePaste(o);
          },
          scrollIntoView: "cursor"
        },
        {
          name: "removeline",
          description: "Remove line",
          bindKey: a("Ctrl-D", "Command-D"),
          exec: function(i) {
            i.removeLines();
          },
          scrollIntoView: "cursor",
          multiSelectAction: "forEachLine"
        },
        {
          name: "duplicateSelection",
          description: "Duplicate selection",
          bindKey: a("Ctrl-Shift-D", "Command-Shift-D"),
          exec: function(i) {
            i.duplicateSelection();
          },
          scrollIntoView: "cursor",
          multiSelectAction: "forEach"
        },
        {
          name: "sortlines",
          description: "Sort lines",
          bindKey: a("Ctrl-Alt-S", "Command-Alt-S"),
          exec: function(i) {
            i.sortLines();
          },
          scrollIntoView: "selection",
          multiSelectAction: "forEachLine"
        },
        {
          name: "togglecomment",
          description: "Toggle comment",
          bindKey: a("Ctrl-/", "Command-/"),
          exec: function(i) {
            i.toggleCommentLines();
          },
          multiSelectAction: "forEachLine",
          scrollIntoView: "selectionPart"
        },
        {
          name: "toggleBlockComment",
          description: "Toggle block comment",
          bindKey: a("Ctrl-Shift-/", "Command-Shift-/"),
          exec: function(i) {
            i.toggleBlockComment();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "selectionPart"
        },
        {
          name: "modifyNumberUp",
          description: "Modify number up",
          bindKey: a("Ctrl-Shift-Up", "Alt-Shift-Up"),
          exec: function(i) {
            i.modifyNumber(1);
          },
          scrollIntoView: "cursor",
          multiSelectAction: "forEach"
        },
        {
          name: "modifyNumberDown",
          description: "Modify number down",
          bindKey: a("Ctrl-Shift-Down", "Alt-Shift-Down"),
          exec: function(i) {
            i.modifyNumber(-1);
          },
          scrollIntoView: "cursor",
          multiSelectAction: "forEach"
        },
        {
          name: "replace",
          description: "Replace",
          bindKey: a("Ctrl-H", "Command-Option-F"),
          exec: function(i) {
            A.loadModule("ace/ext/searchbox", function(o) {
              o.Search(i, !0);
            });
          }
        },
        {
          name: "undo",
          description: "Undo",
          bindKey: a("Ctrl-Z", "Command-Z"),
          exec: function(i) {
            i.undo();
          }
        },
        {
          name: "redo",
          description: "Redo",
          bindKey: a("Ctrl-Shift-Z|Ctrl-Y", "Command-Shift-Z|Command-Y"),
          exec: function(i) {
            i.redo();
          }
        },
        {
          name: "copylinesup",
          description: "Copy lines up",
          bindKey: a("Alt-Shift-Up", "Command-Option-Up"),
          exec: function(i) {
            i.copyLinesUp();
          },
          scrollIntoView: "cursor"
        },
        {
          name: "movelinesup",
          description: "Move lines up",
          bindKey: a("Alt-Up", "Option-Up"),
          exec: function(i) {
            i.moveLinesUp();
          },
          scrollIntoView: "cursor"
        },
        {
          name: "copylinesdown",
          description: "Copy lines down",
          bindKey: a("Alt-Shift-Down", "Command-Option-Down"),
          exec: function(i) {
            i.copyLinesDown();
          },
          scrollIntoView: "cursor"
        },
        {
          name: "movelinesdown",
          description: "Move lines down",
          bindKey: a("Alt-Down", "Option-Down"),
          exec: function(i) {
            i.moveLinesDown();
          },
          scrollIntoView: "cursor"
        },
        {
          name: "del",
          description: "Delete",
          bindKey: a("Delete", "Delete|Ctrl-D|Shift-Delete"),
          exec: function(i) {
            i.remove("right");
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "backspace",
          description: "Backspace",
          bindKey: a("Shift-Backspace|Backspace", "Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"),
          exec: function(i) {
            i.remove("left");
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "cut_or_delete",
          description: "Cut or delete",
          bindKey: a("Shift-Delete", null),
          exec: function(i) {
            if (i.selection.isEmpty())
              i.remove("left");
            else
              return !1;
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "removetolinestart",
          description: "Remove to line start",
          bindKey: a("Alt-Backspace", "Command-Backspace"),
          exec: function(i) {
            i.removeToLineStart();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "removetolineend",
          description: "Remove to line end",
          bindKey: a("Alt-Delete", "Ctrl-K|Command-Delete"),
          exec: function(i) {
            i.removeToLineEnd();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "removetolinestarthard",
          description: "Remove to line start hard",
          bindKey: a("Ctrl-Shift-Backspace", null),
          exec: function(i) {
            var o = i.selection.getRange();
            o.start.column = 0, i.session.remove(o);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "removetolineendhard",
          description: "Remove to line end hard",
          bindKey: a("Ctrl-Shift-Delete", null),
          exec: function(i) {
            var o = i.selection.getRange();
            o.end.column = Number.MAX_VALUE, i.session.remove(o);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "removewordleft",
          description: "Remove word left",
          bindKey: a("Ctrl-Backspace", "Alt-Backspace|Ctrl-Alt-Backspace"),
          exec: function(i) {
            i.removeWordLeft();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "removewordright",
          description: "Remove word right",
          bindKey: a("Ctrl-Delete", "Alt-Delete"),
          exec: function(i) {
            i.removeWordRight();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "outdent",
          description: "Outdent",
          bindKey: a("Shift-Tab", "Shift-Tab"),
          exec: function(i) {
            i.blockOutdent();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "selectionPart"
        },
        {
          name: "indent",
          description: "Indent",
          bindKey: a("Tab", "Tab"),
          exec: function(i) {
            i.indent();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "selectionPart"
        },
        {
          name: "blockoutdent",
          description: "Block outdent",
          bindKey: a("Ctrl-[", "Ctrl-["),
          exec: function(i) {
            i.blockOutdent();
          },
          multiSelectAction: "forEachLine",
          scrollIntoView: "selectionPart"
        },
        {
          name: "blockindent",
          description: "Block indent",
          bindKey: a("Ctrl-]", "Ctrl-]"),
          exec: function(i) {
            i.blockIndent();
          },
          multiSelectAction: "forEachLine",
          scrollIntoView: "selectionPart"
        },
        {
          name: "insertstring",
          description: "Insert string",
          exec: function(i, o) {
            i.insert(o);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "inserttext",
          description: "Insert text",
          exec: function(i, o) {
            i.insert(C.stringRepeat(o.text || "", o.times || 1));
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "splitline",
          description: "Split line",
          bindKey: a(null, "Ctrl-O"),
          exec: function(i) {
            i.splitLine();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "transposeletters",
          description: "Transpose letters",
          bindKey: a("Alt-Shift-X", "Ctrl-T"),
          exec: function(i) {
            i.transposeLetters();
          },
          multiSelectAction: function(i) {
            i.transposeSelections(1);
          },
          scrollIntoView: "cursor"
        },
        {
          name: "touppercase",
          description: "To uppercase",
          bindKey: a("Ctrl-U", "Ctrl-U"),
          exec: function(i) {
            i.toUpperCase();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "tolowercase",
          description: "To lowercase",
          bindKey: a("Ctrl-Shift-U", "Ctrl-Shift-U"),
          exec: function(i) {
            i.toLowerCase();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "autoindent",
          description: "Auto Indent",
          bindKey: a(null, null),
          exec: function(i) {
            i.autoIndent();
          },
          scrollIntoView: "animate"
        },
        {
          name: "expandtoline",
          description: "Expand to line",
          bindKey: a("Ctrl-Shift-L", "Command-Shift-L"),
          exec: function(i) {
            var o = i.selection.getRange();
            o.start.column = o.end.column = 0, o.end.row++, i.selection.setRange(o, !1);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "openlink",
          bindKey: a("Ctrl+F3", "F3"),
          exec: function(i) {
            i.openLink();
          }
        },
        {
          name: "joinlines",
          description: "Join lines",
          bindKey: a(null, null),
          exec: function(i) {
            for (var o = i.selection.isBackwards(), n = o ? i.selection.getSelectionLead() : i.selection.getSelectionAnchor(), t = o ? i.selection.getSelectionAnchor() : i.selection.getSelectionLead(), e = i.session.doc.getLine(n.row).length, r = i.session.doc.getTextRange(i.selection.getRange()), s = r.replace(/\n\s*/, " ").length, l = i.session.doc.getLine(n.row), c = n.row + 1; c <= t.row + 1; c++) {
              var v = C.stringTrimLeft(C.stringTrimRight(i.session.doc.getLine(c)));
              v.length !== 0 && (v = " " + v), l += v;
            }
            t.row + 1 < i.session.doc.getLength() - 1 && (l += i.session.doc.getNewLineCharacter()), i.clearSelection(), i.session.doc.replace(new w(n.row, 0, t.row + 2, 0), l), s > 0 ? (i.selection.moveCursorTo(n.row, n.column), i.selection.selectTo(n.row, n.column + s)) : (e = i.session.doc.getLine(n.row).length > e ? e + 1 : e, i.selection.moveCursorTo(n.row, e));
          },
          multiSelectAction: "forEach",
          readOnly: !0
        },
        {
          name: "invertSelection",
          description: "Invert selection",
          bindKey: a(null, null),
          exec: function(i) {
            var o = i.session.doc.getLength() - 1, n = i.session.doc.getLine(o).length, t = i.selection.rangeList.ranges, e = [];
            t.length < 1 && (t = [i.selection.getRange()]);
            for (var r = 0; r < t.length; r++)
              r == t.length - 1 && (t[r].end.row === o && t[r].end.column === n || e.push(new w(t[r].end.row, t[r].end.column, o, n))), r === 0 ? t[r].start.row === 0 && t[r].start.column === 0 || e.push(new w(0, 0, t[r].start.row, t[r].start.column)) : e.push(new w(t[r - 1].end.row, t[r - 1].end.column, t[r].start.row, t[r].start.column));
            i.exitMultiSelectMode(), i.clearSelection();
            for (var r = 0; r < e.length; r++)
              i.selection.addRange(e[r], !1);
          },
          readOnly: !0,
          scrollIntoView: "none"
        },
        {
          name: "addLineAfter",
          description: "Add new line after the current line",
          exec: function(i) {
            i.selection.clearSelection(), i.navigateLineEnd(), i.insert(`
`);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "addLineBefore",
          description: "Add new line before the current line",
          exec: function(i) {
            i.selection.clearSelection();
            var o = i.getCursorPosition();
            i.selection.moveTo(o.row - 1, Number.MAX_VALUE), i.insert(`
`), o.row === 0 && i.navigateUp();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "openCommandPallete",
          exec: function(i) {
            console.warn("This is an obsolete command. Please use `openCommandPalette` instead."), i.prompt({ $type: "commands" });
          },
          readOnly: !0
        },
        {
          name: "openCommandPalette",
          description: "Open command palette",
          bindKey: a("F1", "F1"),
          exec: function(i) {
            i.prompt({ $type: "commands" });
          },
          readOnly: !0
        },
        {
          name: "modeSelect",
          description: "Change language mode...",
          bindKey: a(null, null),
          exec: function(i) {
            i.prompt({ $type: "modes" });
          },
          readOnly: !0
        }
      ];
      for (var u = 1; u < 9; u++)
        M.commands.push({
          name: "foldToLevel" + u,
          description: "Fold To Level " + u,
          level: u,
          exec: function(i) {
            i.session.foldToLevel(this.level);
          },
          scrollIntoView: "center",
          readOnly: !0
        });
    }), ace.define("ace/keyboard/gutter_handler", ["require", "exports", "module", "ace/lib/keys", "ace/mouse/default_gutter_handler"], function(S, M, H) {
      var C = S("../lib/keys"), A = S("../mouse/default_gutter_handler").GutterTooltip, w = (
        /** @class */
        function() {
          function u(i) {
            this.editor = i, this.gutterLayer = i.renderer.$gutterLayer, this.element = i.renderer.$gutter, this.lines = i.renderer.$gutterLayer.$lines, this.activeRowIndex = null, this.activeLane = null, this.annotationTooltip = new A(this.editor);
          }
          return u.prototype.addListener = function() {
            this.element.addEventListener("keydown", this.$onGutterKeyDown.bind(this)), this.element.addEventListener("focusout", this.$blurGutter.bind(this)), this.editor.on("mousewheel", this.$blurGutter.bind(this));
          }, u.prototype.removeListener = function() {
            this.element.removeEventListener("keydown", this.$onGutterKeyDown.bind(this)), this.element.removeEventListener("focusout", this.$blurGutter.bind(this)), this.editor.off("mousewheel", this.$blurGutter.bind(this));
          }, u.prototype.$onGutterKeyDown = function(i) {
            if (this.annotationTooltip.isOpen) {
              i.preventDefault(), i.keyCode === C.escape && this.annotationTooltip.hideTooltip();
              return;
            }
            if (i.target === this.element) {
              if (i.keyCode != C.enter)
                return;
              i.preventDefault();
              var o = this.editor.getCursorPosition().row;
              this.editor.isRowVisible(o) || this.editor.scrollToLine(o, !0, !0), setTimeout(
                (function() {
                  var n = this.$rowToRowIndex(this.gutterLayer.$cursorCell.row), t = this.$findNearestFoldLaneWidget(n), e = this.$findNearestAnnotation(n);
                  if (!(t === null && e === null)) {
                    var r = this.$findClosestNumber(t, e, n);
                    if (r === t)
                      if (this.activeLane = "fold", this.activeRowIndex = t, this.$isCustomWidgetVisible(t)) {
                        this.$focusCustomWidget(this.activeRowIndex);
                        return;
                      } else {
                        this.$focusFoldWidget(this.activeRowIndex);
                        return;
                      }
                    else {
                      this.activeRowIndex = e, this.activeLane = "annotation", this.$focusAnnotation(this.activeRowIndex);
                      return;
                    }
                  }
                }).bind(this),
                10
              );
              return;
            }
            this.$handleGutterKeyboardInteraction(i), setTimeout((function() {
              this.editor._signal("gutterkeydown", new a(i, this));
            }).bind(this), 10);
          }, u.prototype.$handleGutterKeyboardInteraction = function(i) {
            if (i.keyCode === C.tab) {
              i.preventDefault();
              return;
            }
            if (i.keyCode === C.escape) {
              i.preventDefault(), this.$blurGutter(), this.element.focus(), this.lane = null;
              return;
            }
            if (i.keyCode === C.up) {
              switch (i.preventDefault(), this.activeLane) {
                case "fold":
                  this.$moveFoldWidgetUp();
                  break;
                case "annotation":
                  this.$moveAnnotationUp();
                  break;
              }
              return;
            }
            if (i.keyCode === C.down) {
              switch (i.preventDefault(), this.activeLane) {
                case "fold":
                  this.$moveFoldWidgetDown();
                  break;
                case "annotation":
                  this.$moveAnnotationDown();
                  break;
              }
              return;
            }
            if (i.keyCode === C.left) {
              i.preventDefault(), this.$switchLane("annotation");
              return;
            }
            if (i.keyCode === C.right) {
              i.preventDefault(), this.$switchLane("fold");
              return;
            }
            if (i.keyCode === C.enter || i.keyCode === C.space) {
              switch (i.preventDefault(), this.activeLane) {
                case "fold":
                  var o = this.$rowIndexToRow(this.activeRowIndex), n = this.editor.session.$gutterCustomWidgets[o];
                  if (n)
                    n.callbacks && n.callbacks.onClick && n.callbacks.onClick(i, o);
                  else if (this.gutterLayer.session.foldWidgets[o] === "start") {
                    this.editor.session.onFoldWidgetClick(this.$rowIndexToRow(this.activeRowIndex), i), setTimeout(
                      (function() {
                        this.$rowIndexToRow(this.activeRowIndex) !== o && (this.$blurFoldWidget(this.activeRowIndex), this.activeRowIndex = this.$rowToRowIndex(o), this.$focusFoldWidget(this.activeRowIndex));
                      }).bind(this),
                      10
                    );
                    break;
                  } else if (this.gutterLayer.session.foldWidgets[this.$rowIndexToRow(this.activeRowIndex)] === "end")
                    break;
                  return;
                case "annotation":
                  var t = this.lines.cells[this.activeRowIndex].element.childNodes[2], e = t.getBoundingClientRect(), r = this.annotationTooltip.getElement().style;
                  r.left = e.right + "px", r.top = e.bottom + "px", this.annotationTooltip.showTooltip(this.$rowIndexToRow(this.activeRowIndex));
                  break;
              }
              return;
            }
          }, u.prototype.$blurGutter = function() {
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
          }, u.prototype.$isFoldWidgetVisible = function(i) {
            var o = this.editor.isRowFullyVisible(this.$rowIndexToRow(i)), n = this.$getFoldWidget(i).style.display !== "none";
            return o && n;
          }, u.prototype.$isCustomWidgetVisible = function(i) {
            var o = this.editor.isRowFullyVisible(this.$rowIndexToRow(i)), n = !!this.$getCustomWidget(i);
            return o && n;
          }, u.prototype.$isAnnotationVisible = function(i) {
            var o = this.editor.isRowFullyVisible(this.$rowIndexToRow(i)), n = this.$getAnnotation(i).style.display !== "none";
            return o && n;
          }, u.prototype.$getFoldWidget = function(i) {
            var o = this.lines.get(i), n = o.element;
            return n.childNodes[1];
          }, u.prototype.$getCustomWidget = function(i) {
            var o = this.lines.get(i), n = o.element;
            return n.childNodes[3];
          }, u.prototype.$getAnnotation = function(i) {
            var o = this.lines.get(i), n = o.element;
            return n.childNodes[2];
          }, u.prototype.$findNearestFoldLaneWidget = function(i) {
            if (this.$isCustomWidgetVisible(i) || this.$isFoldWidgetVisible(i))
              return i;
            for (var o = 0; i - o > 0 || i + o < this.lines.getLength() - 1; ) {
              if (o++, i - o >= 0 && this.$isCustomWidgetVisible(i - o))
                return i - o;
              if (i + o <= this.lines.getLength() - 1 && this.$isCustomWidgetVisible(i + o))
                return i + o;
              if (i - o >= 0 && this.$isFoldWidgetVisible(i - o))
                return i - o;
              if (i + o <= this.lines.getLength() - 1 && this.$isFoldWidgetVisible(i + o))
                return i + o;
            }
            return null;
          }, u.prototype.$findNearestAnnotation = function(i) {
            if (this.$isAnnotationVisible(i))
              return i;
            for (var o = 0; i - o > 0 || i + o < this.lines.getLength() - 1; ) {
              if (o++, i - o >= 0 && this.$isAnnotationVisible(i - o))
                return i - o;
              if (i + o <= this.lines.getLength() - 1 && this.$isAnnotationVisible(i + o))
                return i + o;
            }
            return null;
          }, u.prototype.$focusFoldWidget = function(i) {
            if (i != null) {
              var o = this.$getFoldWidget(i);
              o.classList.add(this.editor.renderer.keyboardFocusClassName), o.focus();
            }
          }, u.prototype.$focusCustomWidget = function(i) {
            if (i != null) {
              var o = this.$getCustomWidget(i);
              o && (o.classList.add(this.editor.renderer.keyboardFocusClassName), o.focus());
            }
          }, u.prototype.$focusAnnotation = function(i) {
            if (i != null) {
              var o = this.$getAnnotation(i);
              o.classList.add(this.editor.renderer.keyboardFocusClassName), o.focus();
            }
          }, u.prototype.$blurFoldWidget = function(i) {
            var o = this.$getFoldWidget(i);
            o.classList.remove(this.editor.renderer.keyboardFocusClassName), o.blur();
          }, u.prototype.$blurCustomWidget = function(i) {
            var o = this.$getCustomWidget(i);
            o && (o.classList.remove(this.editor.renderer.keyboardFocusClassName), o.blur());
          }, u.prototype.$blurAnnotation = function(i) {
            var o = this.$getAnnotation(i);
            o.classList.remove(this.editor.renderer.keyboardFocusClassName), o.blur();
          }, u.prototype.$moveFoldWidgetUp = function() {
            for (var i = this.activeRowIndex; i > 0; )
              if (i--, this.$isFoldWidgetVisible(i) || this.$isCustomWidgetVisible(i)) {
                this.$blurFoldWidget(this.activeRowIndex), this.$blurCustomWidget(this.activeRowIndex), this.activeRowIndex = i, this.$isFoldWidgetVisible(i) ? this.$focusFoldWidget(this.activeRowIndex) : this.$focusCustomWidget(this.activeRowIndex);
                return;
              }
          }, u.prototype.$moveFoldWidgetDown = function() {
            for (var i = this.activeRowIndex; i < this.lines.getLength() - 1; )
              if (i++, this.$isFoldWidgetVisible(i) || this.$isCustomWidgetVisible(i)) {
                this.$blurFoldWidget(this.activeRowIndex), this.$blurCustomWidget(this.activeRowIndex), this.activeRowIndex = i, this.$isFoldWidgetVisible(i) ? this.$focusFoldWidget(this.activeRowIndex) : this.$focusCustomWidget(this.activeRowIndex);
                return;
              }
          }, u.prototype.$moveAnnotationUp = function() {
            for (var i = this.activeRowIndex; i > 0; )
              if (i--, this.$isAnnotationVisible(i)) {
                this.$blurAnnotation(this.activeRowIndex), this.activeRowIndex = i, this.$focusAnnotation(this.activeRowIndex);
                return;
              }
          }, u.prototype.$moveAnnotationDown = function() {
            for (var i = this.activeRowIndex; i < this.lines.getLength() - 1; )
              if (i++, this.$isAnnotationVisible(i)) {
                this.$blurAnnotation(this.activeRowIndex), this.activeRowIndex = i, this.$focusAnnotation(this.activeRowIndex);
                return;
              }
          }, u.prototype.$findClosestNumber = function(i, o, n) {
            return i === null ? o : o === null || Math.abs(n - i) <= Math.abs(n - o) ? i : o;
          }, u.prototype.$switchLane = function(i) {
            switch (i) {
              case "annotation":
                if (this.activeLane === "annotation")
                  break;
                var o = this.$findNearestAnnotation(this.activeRowIndex);
                if (o == null)
                  break;
                this.activeLane = "annotation", this.$blurFoldWidget(this.activeRowIndex), this.$blurCustomWidget(this.activeRowIndex), this.activeRowIndex = o, this.$focusAnnotation(this.activeRowIndex);
                break;
              case "fold":
                if (this.activeLane === "fold")
                  break;
                var n = this.$findNearestFoldLaneWidget(this.activeRowIndex);
                if (n === null)
                  break;
                this.activeLane = "fold", this.$blurAnnotation(this.activeRowIndex), this.activeRowIndex = n, this.$isCustomWidgetVisible(n) ? this.$focusCustomWidget(this.activeRowIndex) : this.$focusFoldWidget(this.activeRowIndex);
                break;
            }
          }, u.prototype.$rowIndexToRow = function(i) {
            var o = this.lines.get(i);
            return o ? o.row : null;
          }, u.prototype.$rowToRowIndex = function(i) {
            for (var o = 0; o < this.lines.getLength(); o++) {
              var n = this.lines.get(o);
              if (n.row == i)
                return o;
            }
            return null;
          }, u;
        }()
      );
      M.GutterKeyboardHandler = w;
      var a = (
        /** @class */
        function() {
          function u(i, o) {
            this.gutterKeyboardHandler = o, this.domEvent = i;
          }
          return u.prototype.getKey = function() {
            return C.keyCodeToString(this.domEvent.keyCode);
          }, u.prototype.getRow = function() {
            return this.gutterKeyboardHandler.$rowIndexToRow(this.gutterKeyboardHandler.activeRowIndex);
          }, u.prototype.isInAnnotationLane = function() {
            return this.gutterKeyboardHandler.activeLane === "annotation";
          }, u.prototype.isInFoldLane = function() {
            return this.gutterKeyboardHandler.activeLane === "fold";
          }, u;
        }()
      );
      M.GutterKeyboardEvent = a;
    }), ace.define("ace/editor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/keyboard/textinput", "ace/mouse/mouse_handler", "ace/mouse/fold_handler", "ace/keyboard/keybinding", "ace/edit_session", "ace/search", "ace/range", "ace/lib/event_emitter", "ace/commands/command_manager", "ace/commands/default_commands", "ace/config", "ace/token_iterator", "ace/keyboard/gutter_handler", "ace/config", "ace/clipboard", "ace/lib/keys", "ace/lib/event", "ace/tooltip"], function(S, M, H) {
      var C = this && this.__values || function(f) {
        var d = typeof Symbol == "function" && Symbol.iterator, m = d && f[d], k = 0;
        if (m) return m.call(f);
        if (f && typeof f.length == "number") return {
          next: function() {
            return f && k >= f.length && (f = void 0), { value: f && f[k++], done: !f };
          }
        };
        throw new TypeError(d ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }, A = S("./lib/oop"), w = S("./lib/dom"), a = S("./lib/lang"), u = S("./lib/useragent"), i = S("./keyboard/textinput").TextInput, o = S("./mouse/mouse_handler").MouseHandler, n = S("./mouse/fold_handler").FoldHandler, t = S("./keyboard/keybinding").KeyBinding, e = S("./edit_session").EditSession, r = S("./search").Search, s = S("./range").Range, l = S("./lib/event_emitter").EventEmitter, c = S("./commands/command_manager").CommandManager, v = S("./commands/default_commands").commands, g = S("./config"), p = S("./token_iterator").TokenIterator, h = S("./keyboard/gutter_handler").GutterKeyboardHandler, b = S("./config").nls, E = S("./clipboard"), L = S("./lib/keys"), x = S("./lib/event"), O = S("./tooltip").HoverTooltip, $ = (
        /** @class */
        function() {
          function f(d, m, k) {
            this.id = "editor" + ++f.$uid, this.session, this.$toDestroy = [];
            var _ = d.getContainerElement();
            this.container = _, this.renderer = d, this.commands = new c(u.isMac ? "mac" : "win", v), typeof document == "object" && (this.textInput = new i(d.getTextAreaContainer(), this), this.renderer.textarea = this.textInput.getElement(), this.$mouseHandler = new o(this), new n(this)), this.keyBinding = new t(this), this.$search = new r().set({
              wrap: !0
            }), this.$historyTracker = this.$historyTracker.bind(this), this.commands.on("exec", this.$historyTracker), this.$initOperationListeners(), this._$emitInputEvent = a.delayedCall((function() {
              this._signal("input", {}), this.session && !this.session.destroyed && this.session.bgTokenizer.scheduleStart();
            }).bind(this)), this.on("change", function(T, I) {
              I._$emitInputEvent.schedule(31);
            }), this.setSession(m || k && k.session || new e("")), g.resetOptions(this), k && this.setOptions(k), g._signal("editor", this);
          }
          return f.prototype.$initOperationListeners = function() {
            this.commands.on("exec", this.startOperation.bind(this), !0), this.commands.on("afterExec", this.endOperation.bind(this), !0);
          }, f.prototype.startOperation = function(d) {
            this.session.startOperation(d);
          }, f.prototype.endOperation = function(d) {
            this.session.endOperation(d);
          }, f.prototype.onStartOperation = function(d) {
            this.curOp = this.session.curOp, this.curOp.scrollTop = this.renderer.scrollTop, this.prevOp = this.session.prevOp, d || (this.previousCommand = null);
          }, f.prototype.onEndOperation = function(d) {
            if (this.curOp && this.session) {
              if (d && d.returnValue === !1) {
                this.curOp = null;
                return;
              }
              if (this._signal("beforeEndOperation"), !this.curOp)
                return;
              var m = this.curOp.command, k = m && m.scrollIntoView;
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
                    var _ = this.selection.getRange(), T = this.renderer.layerConfig;
                    (_.start.row >= T.lastRow || _.end.row <= T.firstRow) && this.renderer.scrollSelectionIntoView(this.selection.anchor, this.selection.lead);
                    break;
                }
                k == "animate" && this.renderer.animateScrolling(this.curOp.scrollTop);
              }
              this.$lastSel = this.session.selection.toJSON(), this.prevOp = this.curOp, this.curOp = null;
            }
          }, f.prototype.$historyTracker = function(d) {
            if (this.$mergeUndoDeltas) {
              var m = this.prevOp, k = this.$mergeableCommands, _ = m.command && d.command.name == m.command.name;
              if (d.command.name == "insertstring") {
                var T = d.args;
                this.mergeNextCommand === void 0 && (this.mergeNextCommand = !0), _ = _ && this.mergeNextCommand && (!/\s/.test(T) || /\s/.test(m.args)), this.mergeNextCommand = !0;
              } else
                _ = _ && k.indexOf(d.command.name) !== -1;
              this.$mergeUndoDeltas != "always" && Date.now() - this.sequenceStartTime > 2e3 && (_ = !1), _ ? this.session.mergeUndoDeltas = !0 : k.indexOf(d.command.name) !== -1 && (this.sequenceStartTime = Date.now());
            }
          }, f.prototype.setKeyboardHandler = function(d, m) {
            if (d && typeof d == "string" && d != "ace") {
              this.$keybindingId = d;
              var k = this;
              g.loadModule(["keybinding", d], function(_) {
                k.$keybindingId == d && k.keyBinding.setKeyboardHandler(_ && _.handler), m && m();
              });
            } else
              this.$keybindingId = null, this.keyBinding.setKeyboardHandler(d), m && m();
          }, f.prototype.getKeyboardHandler = function() {
            return this.keyBinding.getKeyboardHandler();
          }, f.prototype.setSession = function(d) {
            if (this.session != d) {
              this.curOp && this.endOperation(), this.curOp = {};
              var m = this.session;
              if (m) {
                this.session.off("change", this.$onDocumentChange), this.session.off("changeMode", this.$onChangeMode), this.session.off("tokenizerUpdate", this.$onTokenizerUpdate), this.session.off("changeTabSize", this.$onChangeTabSize), this.session.off("changeWrapLimit", this.$onChangeWrapLimit), this.session.off("changeWrapMode", this.$onChangeWrapMode), this.session.off("changeFold", this.$onChangeFold), this.session.off("changeFrontMarker", this.$onChangeFrontMarker), this.session.off("changeBackMarker", this.$onChangeBackMarker), this.session.off("changeBreakpoint", this.$onChangeBreakpoint), this.session.off("changeAnnotation", this.$onChangeAnnotation), this.session.off("changeOverwrite", this.$onCursorChange), this.session.off("changeScrollTop", this.$onScrollTopChange), this.session.off("changeScrollLeft", this.$onScrollLeftChange), this.session.off("startOperation", this.$onStartOperation), this.session.off("endOperation", this.$onEndOperation);
                var k = this.session.getSelection();
                k.off("changeCursor", this.$onCursorChange), k.off("changeSelection", this.$onSelectionChange);
              }
              this.session = d, d ? (this.$onDocumentChange = this.onDocumentChange.bind(this), d.on("change", this.$onDocumentChange), this.renderer.setSession(d), this.$onChangeMode = this.onChangeMode.bind(this), d.on("changeMode", this.$onChangeMode), this.$onTokenizerUpdate = this.onTokenizerUpdate.bind(this), d.on("tokenizerUpdate", this.$onTokenizerUpdate), this.$onChangeTabSize = this.renderer.onChangeTabSize.bind(this.renderer), d.on("changeTabSize", this.$onChangeTabSize), this.$onChangeWrapLimit = this.onChangeWrapLimit.bind(this), d.on("changeWrapLimit", this.$onChangeWrapLimit), this.$onChangeWrapMode = this.onChangeWrapMode.bind(this), d.on("changeWrapMode", this.$onChangeWrapMode), this.$onChangeFold = this.onChangeFold.bind(this), d.on("changeFold", this.$onChangeFold), this.$onChangeFrontMarker = this.onChangeFrontMarker.bind(this), this.session.on("changeFrontMarker", this.$onChangeFrontMarker), this.$onChangeBackMarker = this.onChangeBackMarker.bind(this), this.session.on("changeBackMarker", this.$onChangeBackMarker), this.$onChangeBreakpoint = this.onChangeBreakpoint.bind(this), this.session.on("changeBreakpoint", this.$onChangeBreakpoint), this.$onChangeAnnotation = this.onChangeAnnotation.bind(this), this.session.on("changeAnnotation", this.$onChangeAnnotation), this.$onCursorChange = this.onCursorChange.bind(this), this.session.on("changeOverwrite", this.$onCursorChange), this.$onScrollTopChange = this.onScrollTopChange.bind(this), this.session.on("changeScrollTop", this.$onScrollTopChange), this.$onScrollLeftChange = this.onScrollLeftChange.bind(this), this.session.on("changeScrollLeft", this.$onScrollLeftChange), this.selection = d.getSelection(), this.selection.on("changeCursor", this.$onCursorChange), this.$onSelectionChange = this.onSelectionChange.bind(this), this.selection.on("changeSelection", this.$onSelectionChange), this.$onStartOperation = this.onStartOperation.bind(this), this.session.on("startOperation", this.$onStartOperation), this.$onEndOperation = this.onEndOperation.bind(this), this.session.on("endOperation", this.$onEndOperation), this.onChangeMode(), this.onCursorChange(), this.onScrollTopChange(), this.onScrollLeftChange(), this.onSelectionChange(), this.onChangeFrontMarker(), this.onChangeBackMarker(), this.onChangeBreakpoint(), this.onChangeAnnotation(), this.session.getUseWrapMode() && this.renderer.adjustWrapLimit(), this.renderer.updateFull()) : (this.selection = null, this.renderer.setSession(d)), this._signal("changeSession", {
                session: d,
                oldSession: m
              }), this.curOp = null, m && m._signal("changeEditor", { oldEditor: this }), m && (m.$editor = null), d && d._signal("changeEditor", { editor: this }), d && (d.$editor = this), d && !d.destroyed && d.bgTokenizer.scheduleStart();
            }
          }, f.prototype.getSession = function() {
            return this.session;
          }, f.prototype.setValue = function(d, m) {
            return this.session.doc.setValue(d), m ? m == 1 ? this.navigateFileEnd() : m == -1 && this.navigateFileStart() : this.selectAll(), d;
          }, f.prototype.getValue = function() {
            return this.session.getValue();
          }, f.prototype.getSelection = function() {
            return this.selection;
          }, f.prototype.resize = function(d) {
            this.renderer.onResize(d);
          }, f.prototype.setTheme = function(d, m) {
            this.renderer.setTheme(d, m);
          }, f.prototype.getTheme = function() {
            return this.renderer.getTheme();
          }, f.prototype.setStyle = function(d, m) {
            this.renderer.setStyle(d, m);
          }, f.prototype.unsetStyle = function(d) {
            this.renderer.unsetStyle(d);
          }, f.prototype.getFontSize = function() {
            return this.getOption("fontSize") || w.computedStyle(this.container).fontSize;
          }, f.prototype.setFontSize = function(d) {
            this.setOption("fontSize", d);
          }, f.prototype.$highlightBrackets = function() {
            if (!this.$highlightPending) {
              var d = this;
              this.$highlightPending = !0, setTimeout(function() {
                d.$highlightPending = !1;
                var m = d.session;
                if (!(!m || m.destroyed)) {
                  m.$bracketHighlight && (m.$bracketHighlight.markerIds.forEach(function(W) {
                    m.removeMarker(W);
                  }), m.$bracketHighlight = null);
                  var k = d.getCursorPosition(), _ = d.getKeyboardHandler(), T = _ && _.$getDirectionForHighlight && _.$getDirectionForHighlight(d), I = m.getMatchingBracketRanges(k, T);
                  if (!I) {
                    var D = new p(m, k.row, k.column), F = D.getCurrentToken();
                    if (F && /\b(?:tag-open|tag-name)/.test(F.type)) {
                      var B = m.getMatchingTags(k);
                      B && (I = [
                        B.openTagName.isEmpty() ? B.openTag : B.openTagName,
                        B.closeTagName.isEmpty() ? B.closeTag : B.closeTagName
                      ]);
                    }
                  }
                  if (!I && m.$mode.getMatching && (I = m.$mode.getMatching(d.session)), !I) {
                    d.getHighlightIndentGuides() && d.renderer.$textLayer.$highlightIndentGuide();
                    return;
                  }
                  var z = "ace_bracket";
                  Array.isArray(I) ? I.length == 1 && (z = "ace_error_bracket") : I = [I], I.length == 2 && (s.comparePoints(I[0].end, I[1].start) == 0 ? I = [s.fromPoints(I[0].start, I[1].end)] : s.comparePoints(I[0].start, I[1].end) == 0 && (I = [s.fromPoints(I[1].start, I[0].end)])), m.$bracketHighlight = {
                    ranges: I,
                    markerIds: I.map(function(W) {
                      return m.addMarker(W, z, "text");
                    })
                  }, d.getHighlightIndentGuides() && d.renderer.$textLayer.$highlightIndentGuide();
                }
              }, 50);
            }
          }, f.prototype.focus = function() {
            this.textInput.focus();
          }, f.prototype.isFocused = function() {
            return this.textInput.isFocused();
          }, f.prototype.blur = function() {
            this.textInput.blur();
          }, f.prototype.onFocus = function(d) {
            this.$isFocused || (this.$isFocused = !0, this.renderer.showCursor(), this.renderer.visualizeFocus(), this._emit("focus", d));
          }, f.prototype.onBlur = function(d) {
            this.$isFocused && (this.$isFocused = !1, this.renderer.hideCursor(), this.renderer.visualizeBlur(), this._emit("blur", d));
          }, f.prototype.$cursorChange = function() {
            this.renderer.updateCursor(), this.$highlightBrackets(), this.$updateHighlightActiveLine();
          }, f.prototype.onDocumentChange = function(d) {
            var m = this.session.$useWrapMode, k = d.start.row == d.end.row ? d.end.row : 1 / 0;
            this.renderer.updateLines(d.start.row, k, m), this._signal("change", d), this.$cursorChange();
          }, f.prototype.onTokenizerUpdate = function(d) {
            var m = d.data;
            this.renderer.updateLines(m.first, m.last);
          }, f.prototype.onScrollTopChange = function() {
            this.renderer.scrollToY(this.session.getScrollTop());
          }, f.prototype.onScrollLeftChange = function() {
            this.renderer.scrollToX(this.session.getScrollLeft());
          }, f.prototype.onCursorChange = function() {
            this.$cursorChange(), this._signal("changeSelection");
          }, f.prototype.$updateHighlightActiveLine = function() {
            var d = this.getSession(), m;
            if (this.$highlightActiveLine && ((this.$selectionStyle != "line" || !this.selection.isMultiLine()) && (m = this.getCursorPosition()), this.renderer.theme && this.renderer.theme.$selectionColorConflict && !this.selection.isEmpty() && (m = !1), this.renderer.$maxLines && this.session.getLength() === 1 && !(this.renderer.$minLines > 1) && (m = !1)), d.$highlightLineMarker && !m)
              d.removeMarker(d.$highlightLineMarker.id), d.$highlightLineMarker = null;
            else if (!d.$highlightLineMarker && m) {
              var k = new s(m.row, m.column, m.row, 1 / 0);
              k.id = d.addMarker(k, "ace_active-line", "screenLine"), d.$highlightLineMarker = k;
            } else m && (d.$highlightLineMarker.start.row = m.row, d.$highlightLineMarker.end.row = m.row, d.$highlightLineMarker.start.column = m.column, d._signal("changeBackMarker"));
          }, f.prototype.onSelectionChange = function(d) {
            var m = this.session;
            if (m.$selectionMarker && m.removeMarker(m.$selectionMarker), m.$selectionMarker = null, this.selection.isEmpty())
              this.$updateHighlightActiveLine();
            else {
              var k = this.selection.getRange(), _ = this.getSelectionStyle();
              m.$selectionMarker = m.addMarker(k, "ace_selection", _);
            }
            var T = this.$highlightSelectedWord && this.$getSelectionHighLightRegexp();
            this.session.highlight(T), this._signal("changeSelection");
          }, f.prototype.$getSelectionHighLightRegexp = function() {
            var d = this.session, m = this.getSelectionRange();
            if (!(m.isEmpty() || m.isMultiLine())) {
              var k = m.start.column, _ = m.end.column, T = d.getLine(m.start.row), I = T.substring(k, _);
              if (!(I.length > 5e3 || !/[\w\d]/.test(I))) {
                var D = this.$search.$assembleRegExp({
                  wholeWord: !0,
                  caseSensitive: !0,
                  needle: I
                }), F = T.substring(k - 1, _ + 1);
                if (D.test(F))
                  return D;
              }
            }
          }, f.prototype.onChangeFrontMarker = function() {
            this.renderer.updateFrontMarkers();
          }, f.prototype.onChangeBackMarker = function() {
            this.renderer.updateBackMarkers();
          }, f.prototype.onChangeBreakpoint = function() {
            this.renderer.updateBreakpoints();
          }, f.prototype.onChangeAnnotation = function() {
            this.renderer.setAnnotations(this.session.getAnnotations());
          }, f.prototype.onChangeMode = function(d) {
            this.renderer.updateText(), this._emit("changeMode", d);
          }, f.prototype.onChangeWrapLimit = function() {
            this.renderer.updateFull();
          }, f.prototype.onChangeWrapMode = function() {
            this.renderer.onResize(!0);
          }, f.prototype.onChangeFold = function() {
            this.$updateHighlightActiveLine(), this.renderer.updateFull();
          }, f.prototype.getSelectedText = function() {
            return this.session.getTextRange(this.getSelectionRange());
          }, f.prototype.getCopyText = function() {
            var d = this.getSelectedText(), m = this.session.doc.getNewLineCharacter(), k = !1;
            if (!d && this.$copyWithEmptySelection) {
              k = !0;
              for (var _ = this.selection.getAllRanges(), T = 0; T < _.length; T++) {
                var I = _[T];
                T && _[T - 1].start.row == I.start.row || (d += this.session.getLine(I.start.row) + m);
              }
            }
            var D = { text: d };
            return this._signal("copy", D), E.lineMode = k ? D.text : !1, D.text;
          }, f.prototype.onCopy = function() {
            this.commands.exec("copy", this);
          }, f.prototype.onCut = function() {
            this.commands.exec("cut", this);
          }, f.prototype.onPaste = function(d, m) {
            var k = { text: d, event: m };
            this.commands.exec("paste", this, k);
          }, f.prototype.$handlePaste = function(d) {
            typeof d == "string" && (d = { text: d }), this._signal("paste", d);
            var m = d.text, k = m === E.lineMode, _ = this.session;
            if (!this.inMultiSelectMode || this.inVirtualSelectionMode)
              k ? _.insert({ row: this.selection.lead.row, column: 0 }, m) : this.insert(m);
            else if (k)
              this.selection.rangeList.ranges.forEach(function(z) {
                _.insert({ row: z.start.row, column: 0 }, m);
              });
            else {
              var T = m.split(/\r\n|\r|\n/), I = this.selection.rangeList.ranges, D = T.length == 2 && (!T[0] || !T[1]);
              if (T.length != I.length || D)
                return this.commands.exec("insertstring", this, m);
              for (var F = I.length; F--; ) {
                var B = I[F];
                B.isEmpty() || _.remove(B), _.insert(B.start, T[F]);
              }
            }
          }, f.prototype.execCommand = function(d, m) {
            return this.commands.exec(d, this, m);
          }, f.prototype.insert = function(d, m) {
            var k = this.session, _ = k.getMode(), T = this.getCursorPosition();
            if (this.getBehavioursEnabled() && !m) {
              var I = _.transformAction(k.getState(T.row), "insertion", this, k, d);
              I && (d !== I.text && (this.inVirtualSelectionMode || (this.session.mergeUndoDeltas = !1, this.mergeNextCommand = !1)), d = I.text);
            }
            if (d == "	" && (d = this.session.getTabString()), this.selection.isEmpty()) {
              if (this.session.getOverwrite() && d.indexOf(`
`) == -1) {
                var D = s.fromPoints(T, T);
                D.end.column += d.length, this.session.remove(D);
              }
            } else {
              var D = this.getSelectionRange();
              T = this.session.remove(D), this.clearSelection();
            }
            if (d == `
` || d == `\r
`) {
              var W = k.getLine(T.row);
              if (T.column > W.search(/\S|$/)) {
                var F = W.substr(T.column).search(/\S|$/);
                k.doc.removeInLine(T.row, T.column, T.column + F);
              }
            }
            this.clearSelection();
            var B = T.column, z = k.getState(T.row), W = k.getLine(T.row), P = _.checkOutdent(z, W, d);
            if (k.insert(T, d), I && I.selection && (I.selection.length == 2 ? this.selection.setSelectionRange(new s(T.row, B + I.selection[0], T.row, B + I.selection[1])) : this.selection.setSelectionRange(new s(T.row + I.selection[0], I.selection[1], T.row + I.selection[2], I.selection[3]))), this.$enableAutoIndent) {
              if (k.getDocument().isNewLine(d)) {
                var V = _.getNextLineIndent(z, W.slice(0, T.column), k.getTabString());
                k.insert({ row: T.row + 1, column: 0 }, V);
              }
              P && _.autoOutdent(z, k, T.row);
            }
          }, f.prototype.autoIndent = function() {
            for (var d = this.session, m = d.getMode(), k = this.selection.isEmpty() ? [new s(0, 0, d.doc.getLength() - 1, 0)] : this.selection.getAllRanges(), _ = "", T = "", I = "", D = d.getTabString(), F = 0; F < k.length; F++)
              for (var B = k[F].start.row, z = k[F].end.row, W = B; W <= z; W++) {
                W > 0 && (_ = d.getState(W - 1), T = d.getLine(W - 1), I = m.getNextLineIndent(_, T, D));
                var P = d.getLine(W), V = m.$getIndent(P);
                if (I !== V) {
                  if (V.length > 0) {
                    var j = new s(W, 0, W, V.length);
                    d.remove(j);
                  }
                  I.length > 0 && d.insert({ row: W, column: 0 }, I);
                }
                m.autoOutdent(_, d, W);
              }
          }, f.prototype.onTextInput = function(d, m) {
            if (!m)
              return this.keyBinding.onTextInput(d);
            this.startOperation({ command: { name: "insertstring" } });
            var k = this.applyComposition.bind(this, d, m);
            this.selection.rangeCount ? this.forEachSelection(k) : k(), this.endOperation();
          }, f.prototype.applyComposition = function(d, m) {
            if (m.extendLeft || m.extendRight) {
              var k = this.selection.getRange();
              k.start.column -= m.extendLeft, k.end.column += m.extendRight, k.start.column < 0 && (k.start.row--, k.start.column += this.session.getLine(k.start.row).length + 1), this.selection.setRange(k), !d && !k.isEmpty() && this.remove();
            }
            if ((d || !this.selection.isEmpty()) && this.insert(d, !0), m.restoreStart || m.restoreEnd) {
              var k = this.selection.getRange();
              k.start.column -= m.restoreStart, k.end.column -= m.restoreEnd, this.selection.setRange(k);
            }
          }, f.prototype.onCommandKey = function(d, m, k) {
            return this.keyBinding.onCommandKey(d, m, k);
          }, f.prototype.setOverwrite = function(d) {
            this.session.setOverwrite(d);
          }, f.prototype.getOverwrite = function() {
            return this.session.getOverwrite();
          }, f.prototype.toggleOverwrite = function() {
            this.session.toggleOverwrite();
          }, f.prototype.setScrollSpeed = function(d) {
            this.setOption("scrollSpeed", d);
          }, f.prototype.getScrollSpeed = function() {
            return this.getOption("scrollSpeed");
          }, f.prototype.setDragDelay = function(d) {
            this.setOption("dragDelay", d);
          }, f.prototype.getDragDelay = function() {
            return this.getOption("dragDelay");
          }, f.prototype.setSelectionStyle = function(d) {
            this.setOption("selectionStyle", d);
          }, f.prototype.getSelectionStyle = function() {
            return this.getOption("selectionStyle");
          }, f.prototype.setHighlightActiveLine = function(d) {
            this.setOption("highlightActiveLine", d);
          }, f.prototype.getHighlightActiveLine = function() {
            return this.getOption("highlightActiveLine");
          }, f.prototype.setHighlightGutterLine = function(d) {
            this.setOption("highlightGutterLine", d);
          }, f.prototype.getHighlightGutterLine = function() {
            return this.getOption("highlightGutterLine");
          }, f.prototype.setHighlightSelectedWord = function(d) {
            this.setOption("highlightSelectedWord", d);
          }, f.prototype.getHighlightSelectedWord = function() {
            return this.$highlightSelectedWord;
          }, f.prototype.setAnimatedScroll = function(d) {
            this.renderer.setAnimatedScroll(d);
          }, f.prototype.getAnimatedScroll = function() {
            return this.renderer.getAnimatedScroll();
          }, f.prototype.setShowInvisibles = function(d) {
            this.renderer.setShowInvisibles(d);
          }, f.prototype.getShowInvisibles = function() {
            return this.renderer.getShowInvisibles();
          }, f.prototype.setDisplayIndentGuides = function(d) {
            this.renderer.setDisplayIndentGuides(d);
          }, f.prototype.getDisplayIndentGuides = function() {
            return this.renderer.getDisplayIndentGuides();
          }, f.prototype.setHighlightIndentGuides = function(d) {
            this.renderer.setHighlightIndentGuides(d);
          }, f.prototype.getHighlightIndentGuides = function() {
            return this.renderer.getHighlightIndentGuides();
          }, f.prototype.setShowPrintMargin = function(d) {
            this.renderer.setShowPrintMargin(d);
          }, f.prototype.getShowPrintMargin = function() {
            return this.renderer.getShowPrintMargin();
          }, f.prototype.setPrintMarginColumn = function(d) {
            this.renderer.setPrintMarginColumn(d);
          }, f.prototype.getPrintMarginColumn = function() {
            return this.renderer.getPrintMarginColumn();
          }, f.prototype.setReadOnly = function(d) {
            this.setOption("readOnly", d);
          }, f.prototype.getReadOnly = function() {
            return this.getOption("readOnly");
          }, f.prototype.setBehavioursEnabled = function(d) {
            this.setOption("behavioursEnabled", d);
          }, f.prototype.getBehavioursEnabled = function() {
            return this.getOption("behavioursEnabled");
          }, f.prototype.setWrapBehavioursEnabled = function(d) {
            this.setOption("wrapBehavioursEnabled", d);
          }, f.prototype.getWrapBehavioursEnabled = function() {
            return this.getOption("wrapBehavioursEnabled");
          }, f.prototype.setShowFoldWidgets = function(d) {
            this.setOption("showFoldWidgets", d);
          }, f.prototype.getShowFoldWidgets = function() {
            return this.getOption("showFoldWidgets");
          }, f.prototype.setFadeFoldWidgets = function(d) {
            this.setOption("fadeFoldWidgets", d);
          }, f.prototype.getFadeFoldWidgets = function() {
            return this.getOption("fadeFoldWidgets");
          }, f.prototype.remove = function(d) {
            this.selection.isEmpty() && (d == "left" ? this.selection.selectLeft() : this.selection.selectRight());
            var m = this.getSelectionRange();
            if (this.getBehavioursEnabled()) {
              var k = this.session, _ = k.getState(m.start.row), T = k.getMode().transformAction(_, "deletion", this, k, m);
              if (m.end.column === 0) {
                var I = k.getTextRange(m);
                if (I[I.length - 1] == `
`) {
                  var D = k.getLine(m.end.row);
                  /^\s+$/.test(D) && (m.end.column = D.length);
                }
              }
              T && (m = T);
            }
            this.session.remove(m), this.clearSelection();
          }, f.prototype.removeWordRight = function() {
            this.selection.isEmpty() && this.selection.selectWordRight(), this.session.remove(this.getSelectionRange()), this.clearSelection();
          }, f.prototype.removeWordLeft = function() {
            this.selection.isEmpty() && this.selection.selectWordLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection();
          }, f.prototype.removeToLineStart = function() {
            this.selection.isEmpty() && this.selection.selectLineStart(), this.selection.isEmpty() && this.selection.selectLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection();
          }, f.prototype.removeToLineEnd = function() {
            this.selection.isEmpty() && this.selection.selectLineEnd();
            var d = this.getSelectionRange();
            d.start.column == d.end.column && d.start.row == d.end.row && (d.end.column = 0, d.end.row++), this.session.remove(d), this.clearSelection();
          }, f.prototype.splitLine = function() {
            this.selection.isEmpty() || (this.session.remove(this.getSelectionRange()), this.clearSelection());
            var d = this.getCursorPosition();
            this.insert(`
`), this.moveCursorToPosition(d);
          }, f.prototype.setGhostText = function(d, m) {
            this.renderer.setGhostText(d, m);
          }, f.prototype.removeGhostText = function() {
            this.renderer.removeGhostText();
          }, f.prototype.transposeLetters = function() {
            if (this.selection.isEmpty()) {
              var d = this.getCursorPosition(), m = d.column;
              if (m !== 0) {
                var k = this.session.getLine(d.row), _, T;
                m < k.length ? (_ = k.charAt(m) + k.charAt(m - 1), T = new s(d.row, m - 1, d.row, m + 1)) : (_ = k.charAt(m - 1) + k.charAt(m - 2), T = new s(d.row, m - 2, d.row, m)), this.session.replace(T, _), this.session.selection.moveToPosition(T.end);
              }
            }
          }, f.prototype.toLowerCase = function() {
            var d = this.getSelectionRange();
            this.selection.isEmpty() && this.selection.selectWord();
            var m = this.getSelectionRange(), k = this.session.getTextRange(m);
            this.session.replace(m, k.toLowerCase()), this.selection.setSelectionRange(d);
          }, f.prototype.toUpperCase = function() {
            var d = this.getSelectionRange();
            this.selection.isEmpty() && this.selection.selectWord();
            var m = this.getSelectionRange(), k = this.session.getTextRange(m);
            this.session.replace(m, k.toUpperCase()), this.selection.setSelectionRange(d);
          }, f.prototype.indent = function() {
            var d = this.session, m = this.getSelectionRange();
            if (m.start.row < m.end.row) {
              var k = this.$getSelectedRows();
              d.indentRows(k.first, k.last, "	");
              return;
            } else if (m.start.column < m.end.column) {
              var _ = d.getTextRange(m);
              if (!/^\s+$/.test(_)) {
                var k = this.$getSelectedRows();
                d.indentRows(k.first, k.last, "	");
                return;
              }
            }
            var T = d.getLine(m.start.row), I = m.start, D = d.getTabSize(), F = d.documentToScreenColumn(I.row, I.column);
            if (this.session.getUseSoftTabs())
              var B = D - F % D, z = a.stringRepeat(" ", B);
            else {
              for (var B = F % D; T[m.start.column - 1] == " " && B; )
                m.start.column--, B--;
              this.selection.setSelectionRange(m), z = "	";
            }
            return this.insert(z);
          }, f.prototype.blockIndent = function() {
            var d = this.$getSelectedRows();
            this.session.indentRows(d.first, d.last, "	");
          }, f.prototype.blockOutdent = function() {
            var d = this.session.getSelection();
            this.session.outdentRows(d.getRange());
          }, f.prototype.sortLines = function() {
            for (var d = this.$getSelectedRows(), m = this.session, k = [], _ = d.first; _ <= d.last; _++)
              k.push(m.getLine(_));
            k.sort(function(D, F) {
              return D.toLowerCase() < F.toLowerCase() ? -1 : D.toLowerCase() > F.toLowerCase() ? 1 : 0;
            });
            for (var T = new s(0, 0, 0, 0), _ = d.first; _ <= d.last; _++) {
              var I = m.getLine(_);
              T.start.row = _, T.end.row = _, T.end.column = I.length, m.replace(T, k[_ - d.first]);
            }
          }, f.prototype.toggleCommentLines = function() {
            var d = this.session.getState(this.getCursorPosition().row), m = this.$getSelectedRows();
            this.session.getMode().toggleCommentLines(d, this.session, m.first, m.last);
          }, f.prototype.toggleBlockComment = function() {
            var d = this.getCursorPosition(), m = this.session.getState(d.row), k = this.getSelectionRange();
            this.session.getMode().toggleBlockComment(m, this.session, k, d);
          }, f.prototype.getNumberAt = function(d, m) {
            var k = /[\-]?[0-9]+(?:\.[0-9]+)?/g;
            k.lastIndex = 0;
            for (var _ = this.session.getLine(d); k.lastIndex < m; ) {
              var T = k.exec(_);
              if (T.index <= m && T.index + T[0].length >= m) {
                var I = {
                  value: T[0],
                  start: T.index,
                  end: T.index + T[0].length
                };
                return I;
              }
            }
            return null;
          }, f.prototype.modifyNumber = function(d) {
            var m = this.selection.getCursor().row, k = this.selection.getCursor().column, _ = new s(m, k - 1, m, k), T = this.session.getTextRange(_);
            if (!isNaN(parseFloat(T)) && isFinite(T)) {
              var I = this.getNumberAt(m, k);
              if (I) {
                var D = I.value.indexOf(".") >= 0 ? I.start + I.value.indexOf(".") + 1 : I.end, F = I.start + I.value.length - D, B = parseFloat(I.value);
                B *= Math.pow(10, F), D !== I.end && k < D ? d *= Math.pow(10, I.end - k - 1) : d *= Math.pow(10, I.end - k), B += d, B /= Math.pow(10, F);
                var z = B.toFixed(F), W = new s(m, I.start, m, I.end);
                this.session.replace(W, z), this.moveCursorTo(m, Math.max(I.start + 1, k + z.length - I.value.length));
              }
            } else
              this.toggleWord();
          }, f.prototype.toggleWord = function() {
            var d = this.selection.getCursor().row, m = this.selection.getCursor().column;
            this.selection.selectWord();
            var k = this.getSelectedText(), _ = this.selection.getWordRange().start.column, T = k.replace(/([a-z]+|[A-Z]+)(?=[A-Z_]|$)/g, "$1 ").split(/\s/), I = m - _ - 1;
            I < 0 && (I = 0);
            var D = 0, F = 0, B = this;
            k.match(/[A-Za-z0-9_]+/) && T.forEach(function(ie, he) {
              F = D + ie.length, I >= D && I <= F && (k = ie, B.selection.clearSelection(), B.moveCursorTo(d, D + _), B.selection.selectTo(d, F + _)), D = F;
            });
            for (var z = this.$toggleWordPairs, W, P = 0; P < z.length; P++)
              for (var V = z[P], j = 0; j <= 1; j++) {
                var Y = +!j, G = k.match(new RegExp("^\\s?_?(" + a.escapeRegExp(V[j]) + ")\\s?$", "i"));
                if (G) {
                  var J = k.match(new RegExp("([_]|^|\\s)(" + a.escapeRegExp(G[1]) + ")($|\\s)", "g"));
                  J && (W = k.replace(new RegExp(a.escapeRegExp(V[j]), "i"), function(ie) {
                    var he = V[Y];
                    return ie.toUpperCase() == ie ? he = he.toUpperCase() : ie.charAt(0).toUpperCase() == ie.charAt(0) && (he = he.substr(0, 0) + V[Y].charAt(0).toUpperCase() + he.substr(1)), he;
                  }), this.insert(W), W = "");
                }
              }
          }, f.prototype.findLinkAt = function(d, m) {
            var k, _, T = this.session.getLine(d), I = T.split(/((?:https?|ftp):\/\/[\S]+)/), D = m;
            D < 0 && (D = 0);
            var F = 0, B = 0, z;
            try {
              for (var W = C(I), P = W.next(); !P.done; P = W.next()) {
                var V = P.value;
                if (B = F + V.length, D >= F && D <= B && V.match(/((?:https?|ftp):\/\/[\S]+)/)) {
                  z = V.replace(/[\s:.,'";}\]]+$/, "");
                  break;
                }
                F = B;
              }
            } catch (j) {
              k = { error: j };
            } finally {
              try {
                P && !P.done && (_ = W.return) && _.call(W);
              } finally {
                if (k) throw k.error;
              }
            }
            return z;
          }, f.prototype.openLink = function() {
            var d = this.selection.getCursor(), m = this.findLinkAt(d.row, d.column);
            return m && window.open(m, "_blank"), m != null;
          }, f.prototype.removeLines = function() {
            var d = this.$getSelectedRows();
            this.session.removeFullLines(d.first, d.last), this.clearSelection();
          }, f.prototype.duplicateSelection = function() {
            var d = this.selection, m = this.session, k = d.getRange(), _ = d.isBackwards();
            if (k.isEmpty()) {
              var T = k.start.row;
              m.duplicateLines(T, T);
            } else {
              var I = _ ? k.start : k.end, D = m.insert(I, m.getTextRange(k));
              k.start = I, k.end = D, d.setSelectionRange(k, _);
            }
          }, f.prototype.moveLinesDown = function() {
            this.$moveLines(1, !1);
          }, f.prototype.moveLinesUp = function() {
            this.$moveLines(-1, !1);
          }, f.prototype.moveText = function(d, m, k) {
            return this.session.moveText(d, m, k);
          }, f.prototype.copyLinesUp = function() {
            this.$moveLines(-1, !0);
          }, f.prototype.copyLinesDown = function() {
            this.$moveLines(1, !0);
          }, f.prototype.$moveLines = function(d, m) {
            var k, _, T = this.selection;
            if (!T.inMultiSelectMode || this.inVirtualSelectionMode) {
              var I = T.toOrientedRange();
              k = this.$getSelectedRows(I), _ = this.session.$moveLines(k.first, k.last, m ? 0 : d), m && d == -1 && (_ = 0), I.moveBy(_, 0), T.fromOrientedRange(I);
            } else {
              var D = T.rangeList.ranges;
              T.rangeList.detach(this.session), this.inVirtualSelectionMode = !0;
              for (var F = 0, B = 0, z = D.length, W = 0; W < z; W++) {
                var P = W;
                D[W].moveBy(F, 0), k = this.$getSelectedRows(D[W]);
                for (var V = k.first, j = k.last; ++W < z; ) {
                  B && D[W].moveBy(B, 0);
                  var Y = this.$getSelectedRows(D[W]);
                  if (m && Y.first != j)
                    break;
                  if (!m && Y.first > j + 1)
                    break;
                  j = Y.last;
                }
                for (W--, F = this.session.$moveLines(V, j, m ? 0 : d), m && d == -1 && (P = W + 1); P <= W; )
                  D[P].moveBy(F, 0), P++;
                m || (F = 0), B += F;
              }
              T.fromOrientedRange(T.ranges[0]), T.rangeList.attach(this.session), this.inVirtualSelectionMode = !1;
            }
          }, f.prototype.$getSelectedRows = function(d) {
            return d = (d || this.getSelectionRange()).collapseRows(), {
              first: this.session.getRowFoldStart(d.start.row),
              last: this.session.getRowFoldEnd(d.end.row)
            };
          }, f.prototype.onCompositionStart = function(d) {
            this.renderer.showComposition(d);
          }, f.prototype.onCompositionUpdate = function(d) {
            this.renderer.setCompositionText(d);
          }, f.prototype.onCompositionEnd = function() {
            this.renderer.hideComposition();
          }, f.prototype.getFirstVisibleRow = function() {
            return this.renderer.getFirstVisibleRow();
          }, f.prototype.getLastVisibleRow = function() {
            return this.renderer.getLastVisibleRow();
          }, f.prototype.isRowVisible = function(d) {
            return d >= this.getFirstVisibleRow() && d <= this.getLastVisibleRow();
          }, f.prototype.isRowFullyVisible = function(d) {
            return d >= this.renderer.getFirstFullyVisibleRow() && d <= this.renderer.getLastFullyVisibleRow();
          }, f.prototype.$getVisibleRowCount = function() {
            return this.renderer.getScrollBottomRow() - this.renderer.getScrollTopRow() + 1;
          }, f.prototype.$moveByPage = function(d, m) {
            var k = this.renderer, _ = this.renderer.layerConfig, T = d * Math.floor(_.height / _.lineHeight);
            m === !0 ? this.selection.$moveSelection(function() {
              this.moveCursorBy(T, 0);
            }) : m === !1 && (this.selection.moveCursorBy(T, 0), this.selection.clearSelection());
            var I = k.scrollTop;
            k.scrollBy(0, T * _.lineHeight), m != null && k.scrollCursorIntoView(null, 0.5), k.animateScrolling(I);
          }, f.prototype.selectPageDown = function() {
            this.$moveByPage(1, !0);
          }, f.prototype.selectPageUp = function() {
            this.$moveByPage(-1, !0);
          }, f.prototype.gotoPageDown = function() {
            this.$moveByPage(1, !1);
          }, f.prototype.gotoPageUp = function() {
            this.$moveByPage(-1, !1);
          }, f.prototype.scrollPageDown = function() {
            this.$moveByPage(1);
          }, f.prototype.scrollPageUp = function() {
            this.$moveByPage(-1);
          }, f.prototype.scrollToRow = function(d) {
            this.renderer.scrollToRow(d);
          }, f.prototype.scrollToLine = function(d, m, k, _) {
            this.renderer.scrollToLine(d, m, k, _);
          }, f.prototype.centerSelection = function() {
            var d = this.getSelectionRange(), m = {
              row: Math.floor(d.start.row + (d.end.row - d.start.row) / 2),
              column: Math.floor(d.start.column + (d.end.column - d.start.column) / 2)
            };
            this.renderer.alignCursor(m, 0.5);
          }, f.prototype.getCursorPosition = function() {
            return this.selection.getCursor();
          }, f.prototype.getCursorPositionScreen = function() {
            return this.session.documentToScreenPosition(this.getCursorPosition());
          }, f.prototype.getSelectionRange = function() {
            return this.selection.getRange();
          }, f.prototype.selectAll = function() {
            this.selection.selectAll();
          }, f.prototype.clearSelection = function() {
            this.selection.clearSelection();
          }, f.prototype.moveCursorTo = function(d, m) {
            this.selection.moveCursorTo(d, m);
          }, f.prototype.moveCursorToPosition = function(d) {
            this.selection.moveCursorToPosition(d);
          }, f.prototype.jumpToMatching = function(d, m) {
            var k = this.getCursorPosition(), _ = new p(this.session, k.row, k.column), T = _.getCurrentToken(), I = 0;
            T && T.type.indexOf("tag-name") !== -1 && (T = _.stepBackward());
            var D = T || _.stepForward();
            if (D) {
              var F, B = !1, z = {}, W = k.column - D.start, P, V = {
                ")": "(",
                "(": "(",
                "]": "[",
                "[": "[",
                "{": "{",
                "}": "{"
              };
              do {
                if (D.value.match(/[{}()\[\]]/g)) {
                  for (; W < D.value.length && !B; W++)
                    if (V[D.value[W]])
                      switch (P = V[D.value[W]] + "." + D.type.replace("rparen", "lparen"), isNaN(z[P]) && (z[P] = 0), D.value[W]) {
                        case "(":
                        case "[":
                        case "{":
                          z[P]++;
                          break;
                        case ")":
                        case "]":
                        case "}":
                          z[P]--, z[P] === -1 && (F = "bracket", B = !0);
                          break;
                      }
                } else D.type.indexOf("tag-name") !== -1 && (isNaN(z[D.value]) && (z[D.value] = 0), T.value === "<" && I > 1 ? z[D.value]++ : T.value === "</" && z[D.value]--, z[D.value] === -1 && (F = "tag", B = !0));
                B || (T = D, I++, D = _.stepForward(), W = 0);
              } while (D && !B);
              if (F) {
                var j, Y;
                if (F === "bracket")
                  j = this.session.getBracketRange(k), j || (j = new s(_.getCurrentTokenRow(), _.getCurrentTokenColumn() + W - 1, _.getCurrentTokenRow(), _.getCurrentTokenColumn() + W - 1), Y = j.start, (m || Y.row === k.row && Math.abs(Y.column - k.column) < 2) && (j = this.session.getBracketRange(Y)));
                else if (F === "tag") {
                  if (!D || D.type.indexOf("tag-name") === -1)
                    return;
                  if (j = new s(_.getCurrentTokenRow(), _.getCurrentTokenColumn() - 2, _.getCurrentTokenRow(), _.getCurrentTokenColumn() - 2), j.compare(k.row, k.column) === 0) {
                    var G = this.session.getMatchingTags(k);
                    G && (G.openTag.contains(k.row, k.column) ? (j = G.closeTag, Y = j.start) : (j = G.openTag, G.closeTag.start.row === k.row && G.closeTag.start.column === k.column ? Y = j.end : Y = j.start));
                  }
                  Y = Y || j.start;
                }
                Y = j && j.cursor || Y, Y && (d ? j && m ? this.selection.setRange(j) : j && j.isEqual(this.getSelectionRange()) ? this.clearSelection() : this.selection.selectTo(Y.row, Y.column) : this.selection.moveTo(Y.row, Y.column));
              }
            }
          }, f.prototype.gotoLine = function(d, m, k) {
            this.selection.clearSelection(), this.session.unfold({ row: d - 1, column: m || 0 }), this.exitMultiSelectMode && this.exitMultiSelectMode(), this.moveCursorTo(d - 1, m || 0), this.isRowFullyVisible(d - 1) || this.scrollToLine(d - 1, !0, k);
          }, f.prototype.navigateTo = function(d, m) {
            this.selection.moveTo(d, m);
          }, f.prototype.navigateUp = function(d) {
            if (this.selection.isMultiLine() && !this.selection.isBackwards()) {
              var m = this.selection.anchor.getPosition();
              return this.moveCursorToPosition(m);
            }
            this.selection.clearSelection(), this.selection.moveCursorBy(-d || -1, 0);
          }, f.prototype.navigateDown = function(d) {
            if (this.selection.isMultiLine() && this.selection.isBackwards()) {
              var m = this.selection.anchor.getPosition();
              return this.moveCursorToPosition(m);
            }
            this.selection.clearSelection(), this.selection.moveCursorBy(d || 1, 0);
          }, f.prototype.navigateLeft = function(d) {
            if (this.selection.isEmpty())
              for (d = d || 1; d--; )
                this.selection.moveCursorLeft();
            else {
              var m = this.getSelectionRange().start;
              this.moveCursorToPosition(m);
            }
            this.clearSelection();
          }, f.prototype.navigateRight = function(d) {
            if (this.selection.isEmpty())
              for (d = d || 1; d--; )
                this.selection.moveCursorRight();
            else {
              var m = this.getSelectionRange().end;
              this.moveCursorToPosition(m);
            }
            this.clearSelection();
          }, f.prototype.navigateLineStart = function() {
            this.selection.moveCursorLineStart(), this.clearSelection();
          }, f.prototype.navigateLineEnd = function() {
            this.selection.moveCursorLineEnd(), this.clearSelection();
          }, f.prototype.navigateFileEnd = function() {
            this.selection.moveCursorFileEnd(), this.clearSelection();
          }, f.prototype.navigateFileStart = function() {
            this.selection.moveCursorFileStart(), this.clearSelection();
          }, f.prototype.navigateWordRight = function() {
            this.selection.moveCursorWordRight(), this.clearSelection();
          }, f.prototype.navigateWordLeft = function() {
            this.selection.moveCursorWordLeft(), this.clearSelection();
          }, f.prototype.replace = function(d, m) {
            m && this.$search.set(m);
            var k = this.$search.find(this.session), _ = 0;
            return k && (this.$tryReplace(k, d) && (_ = 1), this.selection.setSelectionRange(k), this.renderer.scrollSelectionIntoView(k.start, k.end)), _;
          }, f.prototype.replaceAll = function(d, m) {
            m && this.$search.set(m);
            var k = this.$search.findAll(this.session), _ = 0;
            if (!k.length)
              return _;
            var T = this.getSelectionRange();
            this.selection.moveTo(0, 0);
            for (var I = k.length - 1; I >= 0; --I)
              this.$tryReplace(k[I], d) && _++;
            return this.selection.setSelectionRange(T), _;
          }, f.prototype.$tryReplace = function(d, m) {
            var k = this.session.getTextRange(d);
            return m = this.$search.replace(k, m), m !== null ? (d.end = this.session.replace(d, m), d) : null;
          }, f.prototype.getLastSearchOptions = function() {
            return this.$search.getOptions();
          }, f.prototype.find = function(d, m, k) {
            m || (m = {}), typeof d == "string" || d instanceof RegExp ? m.needle = d : typeof d == "object" && A.mixin(m, d);
            var _ = this.selection.getRange();
            m.needle == null && (d = this.session.getTextRange(_) || this.$search.$options.needle, d || (_ = this.session.getWordRange(_.start.row, _.start.column), d = this.session.getTextRange(_)), this.$search.set({ needle: d })), this.$search.set(m), m.start || this.$search.set({ start: _ });
            var T = this.$search.find(this.session);
            if (m.preventScroll)
              return T;
            if (T)
              return this.revealRange(T, k), T;
            m.backwards ? _.start = _.end : _.end = _.start, this.selection.setRange(_);
          }, f.prototype.findNext = function(d, m) {
            this.find({ skipCurrent: !0, backwards: !1 }, d, m);
          }, f.prototype.findPrevious = function(d, m) {
            this.find(d, { skipCurrent: !0, backwards: !0 }, m);
          }, f.prototype.revealRange = function(d, m) {
            this.session.unfold(d), this.selection.setSelectionRange(d);
            var k = this.renderer.scrollTop;
            this.renderer.scrollSelectionIntoView(d.start, d.end, 0.5), m !== !1 && this.renderer.animateScrolling(k);
          }, f.prototype.undo = function() {
            this.session.getUndoManager().undo(this.session), this.renderer.scrollCursorIntoView(null, 0.5);
          }, f.prototype.redo = function() {
            this.session.getUndoManager().redo(this.session), this.renderer.scrollCursorIntoView(null, 0.5);
          }, f.prototype.destroy = function() {
            this.$toDestroy && (this.$toDestroy.forEach(function(d) {
              d.destroy();
            }), this.$toDestroy = null), this.$mouseHandler && this.$mouseHandler.destroy(), this.renderer.destroy(), this._signal("destroy", this), this.session && this.session.destroy(), this._$emitInputEvent && this._$emitInputEvent.cancel(), this.removeAllListeners();
          }, f.prototype.setAutoScrollEditorIntoView = function(d) {
            if (d) {
              var m, k = this, _ = !1;
              this.$scrollAnchor || (this.$scrollAnchor = document.createElement("div"));
              var T = this.$scrollAnchor;
              T.style.cssText = "position:absolute", this.container.insertBefore(T, this.container.firstChild);
              var I = this.on("changeSelection", function() {
                _ = !0;
              }), D = this.renderer.on("beforeRender", function() {
                _ && (m = k.renderer.container.getBoundingClientRect());
              }), F = this.renderer.on("afterRender", function() {
                if (_ && m && (k.isFocused() || k.searchBox && k.searchBox.isFocused())) {
                  var B = k.renderer, z = B.$cursorLayer.$pixelPos, W = B.layerConfig, P = z.top - W.offset;
                  z.top >= 0 && P + m.top < 0 ? _ = !0 : z.top < W.height && z.top + m.top + W.lineHeight > window.innerHeight ? _ = !1 : _ = null, _ != null && (T.style.top = P + "px", T.style.left = z.left + "px", T.style.height = W.lineHeight + "px", T.scrollIntoView(_)), _ = m = null;
                }
              });
              this.setAutoScrollEditorIntoView = function(B) {
                B || (delete this.setAutoScrollEditorIntoView, this.off("changeSelection", I), this.renderer.off("afterRender", F), this.renderer.off("beforeRender", D));
              };
            }
          }, f.prototype.$resetCursorStyle = function() {
            var d = this.$cursorStyle || "ace", m = this.renderer.$cursorLayer;
            m && (m.setSmoothBlinking(/smooth/.test(d)), m.isBlinking = !this.$readOnly && d != "wide", w.setCssClass(m.element, "ace_slim-cursors", /slim/.test(d)));
          }, f.prototype.prompt = function(d, m, k) {
            var _ = this;
            g.loadModule("ace/ext/prompt", function(T) {
              T.prompt(_, d, m, k);
            });
          }, f;
        }()
      );
      $.$uid = 0, $.prototype.curOp = null, $.prototype.prevOp = {}, $.prototype.$mergeableCommands = ["backspace", "del", "insertstring"], $.prototype.$toggleWordPairs = [
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
      ], A.implement($.prototype, l), g.defineOptions($.prototype, "editor", {
        selectionStyle: {
          set: function(f) {
            this.onSelectionChange(), this._signal("changeSelectionStyle", { data: f });
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
          set: function(f) {
            this.$onSelectionChange();
          },
          initialValue: !0
        },
        readOnly: {
          set: function(f) {
            var d = this;
            this.textInput.setReadOnly(f), this.$resetCursorStyle(), this.$readOnlyCallback || (this.$readOnlyCallback = function(k) {
              var _ = !1;
              if (k && k.type == "keydown") {
                if (_ = k && k.key && k.key.length == 1 && !k.ctrlKey && !k.metaKey, !_)
                  return;
              } else k && k.type !== "exec" && (_ = !0);
              if (_) {
                d.hoverTooltip || (d.hoverTooltip = new O());
                var T = w.createElement("div");
                T.textContent = b("editor.tooltip.disable-editing", "Editing is disabled"), d.hoverTooltip.isOpen || d.hoverTooltip.showForRange(d, d.getSelectionRange(), T);
              } else d.hoverTooltip && d.hoverTooltip.isOpen && d.hoverTooltip.hide();
            });
            var m = this.textInput.getElement();
            f ? (x.addListener(m, "keydown", this.$readOnlyCallback, this), this.commands.on("exec", this.$readOnlyCallback), this.commands.on("commandUnavailable", this.$readOnlyCallback)) : (x.removeListener(m, "keydown", this.$readOnlyCallback), this.commands.off("exec", this.$readOnlyCallback), this.commands.off("commandUnavailable", this.$readOnlyCallback), this.hoverTooltip && (this.hoverTooltip.destroy(), this.hoverTooltip = null));
          },
          initialValue: !1
        },
        copyWithEmptySelection: {
          set: function(f) {
            this.textInput.setCopyWithEmptySelection(f);
          },
          initialValue: !1
        },
        cursorStyle: {
          set: function(f) {
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
          set: function(f) {
            this.setAutoScrollEditorIntoView(f);
          }
        },
        keyboardHandler: {
          set: function(f) {
            this.setKeyboardHandler(f);
          },
          get: function() {
            return this.$keybindingId;
          },
          handlesSet: !0
        },
        value: {
          set: function(f) {
            this.session.setValue(f);
          },
          get: function() {
            return this.getValue();
          },
          handlesSet: !0,
          hidden: !0
        },
        session: {
          set: function(f) {
            this.setSession(f);
          },
          get: function() {
            return this.session;
          },
          handlesSet: !0,
          hidden: !0
        },
        showLineNumbers: {
          set: function(f) {
            this.renderer.$gutterLayer.setShowLineNumbers(f), this.renderer.$loop.schedule(this.renderer.CHANGE_GUTTER), f && this.$relativeLineNumbers ? y.attach(this) : y.detach(this);
          },
          initialValue: !0
        },
        relativeLineNumbers: {
          set: function(f) {
            this.$showLineNumbers && f ? y.attach(this) : y.detach(this);
          }
        },
        placeholder: {
          set: function(f) {
            this.$updatePlaceholder || (this.$updatePlaceholder = (function() {
              var d = this.session && (this.renderer.$composition || this.session.getLength() > 1 || this.session.getLine(0).length > 0);
              if (d && this.renderer.placeholderNode)
                this.renderer.off("afterRender", this.$updatePlaceholder), w.removeCssClass(this.container, "ace_hasPlaceholder"), this.renderer.placeholderNode.remove(), this.renderer.placeholderNode = null;
              else if (!d && !this.renderer.placeholderNode) {
                this.renderer.on("afterRender", this.$updatePlaceholder), w.addCssClass(this.container, "ace_hasPlaceholder");
                var m = w.createElement("div");
                m.className = "ace_placeholder", m.textContent = this.$placeholder || "", this.renderer.placeholderNode = m, this.renderer.content.appendChild(this.renderer.placeholderNode);
              } else !d && this.renderer.placeholderNode && (this.renderer.placeholderNode.textContent = this.$placeholder || "");
            }).bind(this), this.on("input", this.$updatePlaceholder)), this.$updatePlaceholder();
          }
        },
        enableKeyboardAccessibility: {
          set: function(f) {
            var d = {
              name: "blurTextInput",
              description: "Set focus to the editor content div to allow tabbing through the page",
              bindKey: "Esc",
              exec: function(_) {
                _.blur(), _.renderer.scroller.focus();
              },
              readOnly: !0
            }, m = function(_) {
              if (_.target == this.renderer.scroller && _.keyCode === L.enter) {
                _.preventDefault();
                var T = this.getCursorPosition().row;
                this.isRowVisible(T) || this.scrollToLine(T, !0, !0), this.focus();
              }
            }, k;
            f ? (this.renderer.enableKeyboardAccessibility = !0, this.renderer.keyboardFocusClassName = "ace_keyboard-focus", this.textInput.getElement().setAttribute("tabindex", -1), this.textInput.setNumberOfExtraLines(u.isWin ? 3 : 0), this.renderer.scroller.setAttribute("tabindex", 0), this.renderer.scroller.setAttribute("role", "group"), this.renderer.scroller.setAttribute("aria-roledescription", b("editor.scroller.aria-roledescription", "editor")), this.renderer.scroller.classList.add(this.renderer.keyboardFocusClassName), this.renderer.scroller.setAttribute("aria-label", b("editor.scroller.aria-label", "Editor content, press Enter to start editing, press Escape to exit")), this.renderer.scroller.addEventListener("keyup", m.bind(this)), this.commands.addCommand(d), this.renderer.$gutter.setAttribute("tabindex", 0), this.renderer.$gutter.setAttribute("aria-hidden", !1), this.renderer.$gutter.setAttribute("role", "group"), this.renderer.$gutter.setAttribute("aria-roledescription", b("editor.gutter.aria-roledescription", "editor gutter")), this.renderer.$gutter.setAttribute("aria-label", b("editor.gutter.aria-label", "Editor gutter, press Enter to interact with controls using arrow keys, press Escape to exit")), this.renderer.$gutter.classList.add(this.renderer.keyboardFocusClassName), this.renderer.content.setAttribute("aria-hidden", !0), k || (k = new h(this)), k.addListener(), this.textInput.setAriaOptions({
              setLabel: !0
            })) : (this.renderer.enableKeyboardAccessibility = !1, this.textInput.getElement().setAttribute("tabindex", 0), this.textInput.setNumberOfExtraLines(0), this.renderer.scroller.setAttribute("tabindex", -1), this.renderer.scroller.removeAttribute("role"), this.renderer.scroller.removeAttribute("aria-roledescription"), this.renderer.scroller.classList.remove(this.renderer.keyboardFocusClassName), this.renderer.scroller.removeAttribute("aria-label"), this.renderer.scroller.removeEventListener("keyup", m.bind(this)), this.commands.removeCommand(d), this.renderer.content.removeAttribute("aria-hidden"), this.renderer.$gutter.setAttribute("tabindex", -1), this.renderer.$gutter.setAttribute("aria-hidden", !0), this.renderer.$gutter.removeAttribute("role"), this.renderer.$gutter.removeAttribute("aria-roledescription"), this.renderer.$gutter.removeAttribute("aria-label"), this.renderer.$gutter.classList.remove(this.renderer.keyboardFocusClassName), k && k.removeListener());
          },
          initialValue: !1
        },
        textInputAriaLabel: {
          set: function(f) {
            this.$textInputAriaLabel = f;
          },
          initialValue: ""
        },
        enableMobileMenu: {
          set: function(f) {
            this.$enableMobileMenu = f;
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
      var y = {
        getText: function(f, d) {
          return (Math.abs(f.selection.lead.row - d) || d + 1 + (d < 9 ? "·" : "")) + "";
        },
        getWidth: function(f, d, m) {
          return Math.max(d.toString().length, (m.lastRow + 1).toString().length, 2) * m.characterWidth;
        },
        update: function(f, d) {
          d.renderer.$loop.schedule(d.renderer.CHANGE_GUTTER);
        },
        attach: function(f) {
          f.renderer.$gutterLayer.$renderer = this, f.on("changeSelection", this.update), this.update(null, f);
        },
        detach: function(f) {
          f.renderer.$gutterLayer.$renderer == this && (f.renderer.$gutterLayer.$renderer = null), f.off("changeSelection", this.update), this.update(null, f);
        }
      };
      M.Editor = $;
    }), ace.define("ace/layer/lines", ["require", "exports", "module", "ace/lib/dom"], function(S, M, H) {
      var C = S("../lib/dom"), A = (
        /** @class */
        function() {
          function w(a, u) {
            this.element = a, this.canvasHeight = u || 5e5, this.element.style.height = this.canvasHeight * 2 + "px", this.cells = [], this.cellCache = [], this.$offsetCoefficient = 0;
          }
          return w.prototype.moveContainer = function(a) {
            C.translate(this.element, 0, -(a.firstRowScreen * a.lineHeight % this.canvasHeight) - a.offset * this.$offsetCoefficient);
          }, w.prototype.pageChanged = function(a, u) {
            return Math.floor(a.firstRowScreen * a.lineHeight / this.canvasHeight) !== Math.floor(u.firstRowScreen * u.lineHeight / this.canvasHeight);
          }, w.prototype.computeLineTop = function(a, u, i) {
            var o = u.firstRowScreen * u.lineHeight, n = Math.floor(o / this.canvasHeight), t = i.documentToScreenRow(a, 0) * u.lineHeight;
            return t - n * this.canvasHeight;
          }, w.prototype.computeLineHeight = function(a, u, i) {
            return u.lineHeight * i.getRowLineCount(a);
          }, w.prototype.getLength = function() {
            return this.cells.length;
          }, w.prototype.get = function(a) {
            return this.cells[a];
          }, w.prototype.shift = function() {
            this.$cacheCell(this.cells.shift());
          }, w.prototype.pop = function() {
            this.$cacheCell(this.cells.pop());
          }, w.prototype.push = function(a) {
            if (Array.isArray(a)) {
              this.cells.push.apply(this.cells, a);
              for (var u = C.createFragment(this.element), i = 0; i < a.length; i++)
                u.appendChild(a[i].element);
              this.element.appendChild(u);
            } else
              this.cells.push(a), this.element.appendChild(a.element);
          }, w.prototype.unshift = function(a) {
            if (Array.isArray(a)) {
              this.cells.unshift.apply(this.cells, a);
              for (var u = C.createFragment(this.element), i = 0; i < a.length; i++)
                u.appendChild(a[i].element);
              this.element.firstChild ? this.element.insertBefore(u, this.element.firstChild) : this.element.appendChild(u);
            } else
              this.cells.unshift(a), this.element.insertAdjacentElement("afterbegin", a.element);
          }, w.prototype.last = function() {
            return this.cells.length ? this.cells[this.cells.length - 1] : null;
          }, w.prototype.$cacheCell = function(a) {
            a && (a.element.remove(), this.cellCache.push(a));
          }, w.prototype.createCell = function(a, u, i, o) {
            var n = this.cellCache.pop();
            if (!n) {
              var t = C.createElement("div");
              o && o(t), this.element.appendChild(t), n = {
                element: t,
                text: "",
                row: a
              };
            }
            return n.row = a, n;
          }, w;
        }()
      );
      M.Lines = A;
    }), ace.define("ace/layer/gutter", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/layer/lines", "ace/config"], function(S, M, H) {
      var C = S("../lib/dom"), A = S("../lib/oop"), w = S("../lib/lang"), a = S("../lib/event_emitter").EventEmitter, u = S("./lines").Lines, i = S("../config").nls, o = (
        /** @class */
        function() {
          function t(e) {
            this.element = C.createElement("div"), this.element.className = "ace_layer ace_gutter-layer", e.appendChild(this.element), this.setShowFoldWidgets(this.$showFoldWidgets), this.gutterWidth = 0, this.$annotations = [], this.$updateAnnotations = this.$updateAnnotations.bind(this), this.$lines = new u(this.element), this.$lines.$offsetCoefficient = 1;
          }
          return t.prototype.setSession = function(e) {
            this.session && this.session.off("change", this.$updateAnnotations), this.session = e, e && e.on("change", this.$updateAnnotations);
          }, t.prototype.addGutterDecoration = function(e, r) {
            window.console && console.warn && console.warn("deprecated use session.addGutterDecoration"), this.session.addGutterDecoration(e, r);
          }, t.prototype.removeGutterDecoration = function(e, r) {
            window.console && console.warn && console.warn("deprecated use session.removeGutterDecoration"), this.session.removeGutterDecoration(e, r);
          }, t.prototype.setAnnotations = function(e) {
            this.$annotations = [];
            for (var r = 0; r < e.length; r++) {
              var s = e[r], l = s.row, c = this.$annotations[l];
              c || (c = this.$annotations[l] = { text: [], type: [], displayText: [] });
              var v = s.text, g = s.text, p = s.type;
              v = v ? w.escapeHTML(v) : s.html || "", g = g || s.html || "", c.text.indexOf(v) === -1 && (c.text.push(v), c.type.push(p), c.displayText.push(g));
              var h = s.className;
              h ? c.className = h : p === "error" ? c.className = " ace_error" : p === "security" && !/\bace_error\b/.test(c.className) ? c.className = " ace_security" : p === "warning" && !/\bace_(error|security)\b/.test(c.className) ? c.className = " ace_warning" : p === "info" && !c.className ? c.className = " ace_info" : p === "hint" && !c.className && (c.className = " ace_hint");
            }
          }, t.prototype.$updateAnnotations = function(e) {
            if (this.$annotations.length) {
              var r = e.start.row, s = e.end.row - r;
              if (s !== 0) if (e.action == "remove")
                this.$annotations.splice(r, s + 1, null);
              else {
                var l = new Array(s + 1);
                l.unshift(r, 1), this.$annotations.splice.apply(this.$annotations, l);
              }
            }
          }, t.prototype.update = function(e) {
            this.config = e;
            var r = this.session, s = e.firstRow, l = Math.min(
              e.lastRow + e.gutterOffset,
              // needed to compensate for hor scollbar
              r.getLength() - 1
            );
            this.oldLastRow = l, this.config = e, this.$lines.moveContainer(e), this.$updateCursorRow();
            for (var c = r.getNextFoldLine(s), v = c ? c.start.row : 1 / 0, g = null, p = -1, h = s; ; ) {
              if (h > v && (h = c.end.row + 1, c = r.getNextFoldLine(h, c), v = c ? c.start.row : 1 / 0), h > l) {
                for (; this.$lines.getLength() > p + 1; )
                  this.$lines.pop();
                break;
              }
              g = this.$lines.get(++p), g ? g.row = h : (g = this.$lines.createCell(h, e, this.session, n), this.$lines.push(g)), this.$renderCell(g, e, c, h), h++;
            }
            this._signal("afterRender"), this.$updateGutterWidth(e);
          }, t.prototype.$updateGutterWidth = function(e) {
            var r = this.session, s = r.gutterRenderer || this.$renderer, l = r.$firstLineNumber, c = this.$lines.last() ? this.$lines.last().text : "";
            (this.$fixedWidth || r.$useWrapMode) && (c = r.getLength() + l - 1);
            var v = s ? s.getWidth(r, c, e) : c.toString().length * e.characterWidth, g = this.$padding || this.$computePadding();
            v += g.left + g.right, v !== this.gutterWidth && !isNaN(v) && (this.gutterWidth = v, this.element.parentNode.style.width = this.element.style.width = Math.ceil(this.gutterWidth) + "px", this._signal("changeGutterWidth", v));
          }, t.prototype.$updateCursorRow = function() {
            if (this.$highlightGutterLine) {
              var e = this.session.selection.getCursor();
              this.$cursorRow !== e.row && (this.$cursorRow = e.row);
            }
          }, t.prototype.updateLineHighlight = function() {
            if (this.$highlightGutterLine) {
              var e = this.session.selection.cursor.row;
              if (this.$cursorRow = e, !(this.$cursorCell && this.$cursorCell.row == e)) {
                this.$cursorCell && (this.$cursorCell.element.className = this.$cursorCell.element.className.replace("ace_gutter-active-line ", ""));
                var r = this.$lines.cells;
                this.$cursorCell = null;
                for (var s = 0; s < r.length; s++) {
                  var l = r[s];
                  if (l.row >= this.$cursorRow) {
                    if (l.row > this.$cursorRow) {
                      var c = this.session.getFoldLine(this.$cursorRow);
                      if (s > 0 && c && c.start.row == r[s - 1].row)
                        l = r[s - 1];
                      else
                        break;
                    }
                    l.element.className = "ace_gutter-active-line " + l.element.className, this.$cursorCell = l;
                    break;
                  }
                }
              }
            }
          }, t.prototype.scrollLines = function(e) {
            var r = this.config;
            if (this.config = e, this.$updateCursorRow(), this.$lines.pageChanged(r, e))
              return this.update(e);
            this.$lines.moveContainer(e);
            var s = Math.min(
              e.lastRow + e.gutterOffset,
              // needed to compensate for hor scollbar
              this.session.getLength() - 1
            ), l = this.oldLastRow;
            if (this.oldLastRow = s, !r || l < e.firstRow)
              return this.update(e);
            if (s < r.firstRow)
              return this.update(e);
            if (r.firstRow < e.firstRow)
              for (var c = this.session.getFoldedRowCount(r.firstRow, e.firstRow - 1); c > 0; c--)
                this.$lines.shift();
            if (l > s)
              for (var c = this.session.getFoldedRowCount(s + 1, l); c > 0; c--)
                this.$lines.pop();
            e.firstRow < r.firstRow && this.$lines.unshift(this.$renderLines(e, e.firstRow, r.firstRow - 1)), s > l && this.$lines.push(this.$renderLines(e, l + 1, s)), this.updateLineHighlight(), this._signal("afterRender"), this.$updateGutterWidth(e);
          }, t.prototype.$renderLines = function(e, r, s) {
            for (var l = [], c = r, v = this.session.getNextFoldLine(c), g = v ? v.start.row : 1 / 0; c > g && (c = v.end.row + 1, v = this.session.getNextFoldLine(c, v), g = v ? v.start.row : 1 / 0), !(c > s); ) {
              var p = this.$lines.createCell(c, e, this.session, n);
              this.$renderCell(p, e, v, c), l.push(p), c++;
            }
            return l;
          }, t.prototype.$renderCell = function(e, r, s, l) {
            var c = e.element, v = this.session, g = c.childNodes[0], p = c.childNodes[1], h = c.childNodes[2], b = c.childNodes[3], E = h.firstChild, L = v.$firstLineNumber, x = v.$breakpoints, O = v.$decorations, $ = v.gutterRenderer || this.$renderer, y = this.$showFoldWidgets && v.foldWidgets, f = s ? s.start.row : Number.MAX_VALUE, d = r.lineHeight + "px", m = this.$useSvgGutterIcons ? "ace_gutter-cell_svg-icons " : "ace_gutter-cell ", k = this.$useSvgGutterIcons ? "ace_icon_svg" : "ace_icon", _ = ($ ? $.getText(v, l) : l + L).toString();
            if (this.$highlightGutterLine && (l == this.$cursorRow || s && l < this.$cursorRow && l >= f && this.$cursorRow <= s.end.row) && (m += "ace_gutter-active-line ", this.$cursorCell != e && (this.$cursorCell && (this.$cursorCell.element.className = this.$cursorCell.element.className.replace("ace_gutter-active-line ", "")), this.$cursorCell = e)), x[l] && (m += x[l]), O[l] && (m += O[l]), this.$annotations[l] && l !== f && (m += this.$annotations[l].className), y) {
              var T = y[l];
              T == null && (T = y[l] = v.getFoldWidget(l));
            }
            if (T) {
              var I = "ace_fold-widget ace_" + T, D = T == "start" && l == f && l < s.end.row;
              if (D) {
                I += " ace_closed";
                for (var F = "", B = !1, z = l + 1; z <= s.end.row; z++)
                  if (this.$annotations[z]) {
                    if (this.$annotations[z].className === " ace_error") {
                      B = !0, F = " ace_error_fold";
                      break;
                    }
                    this.$annotations[z].className === " ace_security" ? (B = !0, F = " ace_security_fold") : this.$annotations[z].className === " ace_warning" && F !== " ace_security_fold" && (B = !0, F = " ace_warning_fold");
                  }
                m += F;
              } else
                I += " ace_open";
              p.className != I && (p.className = I), C.setStyle(p.style, "height", d), C.setStyle(p.style, "display", "inline-block"), p.setAttribute("role", "button"), p.setAttribute("tabindex", "-1");
              var W = v.getFoldWidgetRange(l);
              W ? p.setAttribute("aria-label", i("gutter.code-folding.range.aria-label", "Toggle code folding, rows $0 through $1", [
                W.start.row + 1,
                W.end.row + 1
              ])) : s ? p.setAttribute("aria-label", i("gutter.code-folding.closed.aria-label", "Toggle code folding, rows $0 through $1", [
                s.start.row + 1,
                s.end.row + 1
              ])) : p.setAttribute("aria-label", i("gutter.code-folding.open.aria-label", "Toggle code folding, row $0", [l + 1])), D ? (p.setAttribute("aria-expanded", "false"), p.setAttribute("title", i("gutter.code-folding.closed.title", "Unfold code"))) : (p.setAttribute("aria-expanded", "true"), p.setAttribute("title", i("gutter.code-folding.open.title", "Fold code")));
            } else
              p && (C.setStyle(p.style, "display", "none"), p.setAttribute("tabindex", "0"), p.removeAttribute("role"), p.removeAttribute("aria-label"));
            var P = this.session.$gutterCustomWidgets[l];
            if (P ? this.$addCustomWidget(l, P, e) : b && this.$removeCustomWidget(l, e), B && this.$showFoldedAnnotations) {
              h.className = "ace_gutter_annotation", E.className = k, E.className += F, C.setStyle(E.style, "height", d), C.setStyle(h.style, "display", "block"), C.setStyle(h.style, "height", d);
              var V;
              switch (F) {
                case " ace_error_fold":
                  V = i("gutter.annotation.aria-label.error", "Error, read annotations row $0", [_]);
                  break;
                case " ace_security_fold":
                  V = i("gutter.annotation.aria-label.security", "Security finding, read annotations row $0", [_]);
                  break;
                case " ace_warning_fold":
                  V = i("gutter.annotation.aria-label.warning", "Warning, read annotations row $0", [_]);
                  break;
              }
              h.setAttribute("aria-label", V), h.setAttribute("tabindex", "-1"), h.setAttribute("role", "button");
            } else if (this.$annotations[l]) {
              h.className = "ace_gutter_annotation", E.className = k, this.$useSvgGutterIcons ? E.className += this.$annotations[l].className : c.classList.add(this.$annotations[l].className.replace(" ", "")), C.setStyle(E.style, "height", d), C.setStyle(h.style, "display", "block"), C.setStyle(h.style, "height", d);
              var V;
              switch (this.$annotations[l].className) {
                case " ace_error":
                  V = i("gutter.annotation.aria-label.error", "Error, read annotations row $0", [_]);
                  break;
                case " ace_security":
                  V = i("gutter.annotation.aria-label.security", "Security finding, read annotations row $0", [_]);
                  break;
                case " ace_warning":
                  V = i("gutter.annotation.aria-label.warning", "Warning, read annotations row $0", [_]);
                  break;
                case " ace_info":
                  V = i("gutter.annotation.aria-label.info", "Info, read annotations row $0", [_]);
                  break;
                case " ace_hint":
                  V = i("gutter.annotation.aria-label.hint", "Suggestion, read annotations row $0", [_]);
                  break;
              }
              h.setAttribute("aria-label", V), h.setAttribute("tabindex", "-1"), h.setAttribute("role", "button");
            } else
              C.setStyle(h.style, "display", "none"), h.removeAttribute("aria-label"), h.removeAttribute("role"), h.setAttribute("tabindex", "0");
            return _ !== g.data && (g.data = _), c.className != m && (c.className = m), C.setStyle(e.element.style, "height", this.$lines.computeLineHeight(l, r, v) + "px"), C.setStyle(e.element.style, "top", this.$lines.computeLineTop(l, r, v) + "px"), e.text = _, h.style.display === "none" && p.style.display === "none" && !P ? e.element.setAttribute("aria-hidden", !0) : e.element.setAttribute("aria-hidden", !1), e;
          }, t.prototype.setHighlightGutterLine = function(e) {
            this.$highlightGutterLine = e;
          }, t.prototype.setShowLineNumbers = function(e) {
            this.$renderer = !e && {
              getWidth: function() {
                return 0;
              },
              getText: function() {
                return "";
              }
            };
          }, t.prototype.getShowLineNumbers = function() {
            return this.$showLineNumbers;
          }, t.prototype.setShowFoldWidgets = function(e) {
            e ? C.addCssClass(this.element, "ace_folding-enabled") : C.removeCssClass(this.element, "ace_folding-enabled"), this.$showFoldWidgets = e, this.$padding = null;
          }, t.prototype.getShowFoldWidgets = function() {
            return this.$showFoldWidgets;
          }, t.prototype.$hideFoldWidget = function(e, r) {
            var s = r || this.$getGutterCell(e);
            if (s && s.element) {
              var l = s.element.childNodes[1];
              l && C.setStyle(l.style, "display", "none");
            }
          }, t.prototype.$showFoldWidget = function(e, r) {
            var s = r || this.$getGutterCell(e);
            if (s && s.element) {
              var l = s.element.childNodes[1];
              l && this.session.foldWidgets && this.session.foldWidgets[s.row] && C.setStyle(l.style, "display", "inline-block");
            }
          }, t.prototype.$getGutterCell = function(e) {
            var r = this.$lines.cells, s = this.session.documentToScreenRow(e, 0);
            return r[e - this.config.firstRowScreen - (e - s)];
          }, t.prototype.$addCustomWidget = function(e, r, s) {
            var l = r.className, c = r.label, v = r.title, g = r.callbacks;
            this.session.$gutterCustomWidgets[e] = { className: l, label: c, title: v, callbacks: g }, this.$hideFoldWidget(e, s);
            var p = s || this.$getGutterCell(e);
            if (p && p.element) {
              var h = p.element.querySelector(".ace_custom-widget");
              h && h.remove(), h = C.createElement("span"), h.className = "ace_custom-widget ".concat(l), h.setAttribute("tabindex", "-1"), h.setAttribute("role", "button"), h.setAttribute("aria-label", c), h.setAttribute("title", v), C.setStyle(h.style, "display", "inline-block"), C.setStyle(h.style, "height", "inherit"), g && g.onClick && h.addEventListener("click", function(b) {
                g.onClick(b, e), b.stopPropagation();
              }), p.element.appendChild(h);
            }
          }, t.prototype.$removeCustomWidget = function(e, r) {
            delete this.session.$gutterCustomWidgets[e], this.$showFoldWidget(e, r);
            var s = r || this.$getGutterCell(e);
            if (s && s.element) {
              var l = s.element.querySelector(".ace_custom-widget");
              l && s.element.removeChild(l);
            }
          }, t.prototype.$computePadding = function() {
            if (!this.element.firstChild)
              return { left: 0, right: 0 };
            var e = C.computedStyle(
              /**@type{Element}*/
              this.element.firstChild
            );
            return this.$padding = {}, this.$padding.left = (parseInt(e.borderLeftWidth) || 0) + (parseInt(e.paddingLeft) || 0) + 1, this.$padding.right = (parseInt(e.borderRightWidth) || 0) + (parseInt(e.paddingRight) || 0), this.$padding;
          }, t.prototype.getRegion = function(e) {
            var r = this.$padding || this.$computePadding(), s = this.element.getBoundingClientRect();
            if (e.x < r.left + s.left)
              return "markers";
            if (this.$showFoldWidgets && e.x > s.right - r.right)
              return "foldWidgets";
          }, t;
        }()
      );
      o.prototype.$fixedWidth = !1, o.prototype.$highlightGutterLine = !0, o.prototype.$renderer = "", o.prototype.$showLineNumbers = !0, o.prototype.$showFoldWidgets = !0, A.implement(o.prototype, a);
      function n(t) {
        var e = document.createTextNode("");
        t.appendChild(e);
        var r = C.createElement("span");
        t.appendChild(r);
        var s = C.createElement("span");
        t.appendChild(s);
        var l = C.createElement("span");
        return s.appendChild(l), t;
      }
      M.Gutter = o;
    }), ace.define("ace/layer/marker", ["require", "exports", "module", "ace/range", "ace/lib/dom"], function(S, M, H) {
      var C = S("../range").Range, A = S("../lib/dom"), w = (
        /** @class */
        function() {
          function u(i) {
            this.element = A.createElement("div"), this.element.className = "ace_layer ace_marker-layer", i.appendChild(this.element);
          }
          return u.prototype.setPadding = function(i) {
            this.$padding = i;
          }, u.prototype.setSession = function(i) {
            this.session = i;
          }, u.prototype.setMarkers = function(i) {
            this.markers = i;
          }, u.prototype.elt = function(i, o) {
            var n = this.i != -1 && this.element.childNodes[this.i];
            n ? this.i++ : (n = document.createElement("div"), this.element.appendChild(n), this.i = -1), n.style.cssText = o, n.className = i;
          }, u.prototype.update = function(i) {
            if (i) {
              this.config = i, this.i = 0;
              var o;
              for (var n in this.markers) {
                var t = this.markers[n];
                if (!t.range) {
                  t.update(o, this, this.session, i);
                  continue;
                }
                var e = t.range.clipRows(i.firstRow, i.lastRow);
                if (!e.isEmpty())
                  if (e = e.toScreenRange(this.session), t.renderer) {
                    var r = this.$getTop(e.start.row, i), s = this.$padding + e.start.column * i.characterWidth;
                    t.renderer(o, e, s, r, i);
                  } else t.type == "fullLine" ? this.drawFullLineMarker(o, e, t.clazz, i) : t.type == "screenLine" ? this.drawScreenLineMarker(o, e, t.clazz, i) : e.isMultiLine() ? t.type == "text" ? this.drawTextMarker(o, e, t.clazz, i) : this.drawMultiLineMarker(o, e, t.clazz, i) : this.drawSingleLineMarker(o, e, t.clazz + " ace_start ace_br15", i);
              }
              if (this.i != -1)
                for (; this.i < this.element.childElementCount; )
                  this.element.removeChild(this.element.lastChild);
            }
          }, u.prototype.$getTop = function(i, o) {
            return (i - o.firstRowScreen) * o.lineHeight;
          }, u.prototype.drawTextMarker = function(i, o, n, t, e) {
            for (var r = this.session, s = o.start.row, l = o.end.row, c = s, v = 0, g = 0, p = r.getScreenLastRowColumn(c), h = new C(c, o.start.column, c, g); c <= l; c++)
              h.start.row = h.end.row = c, h.start.column = c == s ? o.start.column : r.getRowWrapIndent(c), h.end.column = p, v = g, g = p, p = c + 1 < l ? r.getScreenLastRowColumn(c + 1) : c == l ? 0 : o.end.column, this.drawSingleLineMarker(i, h, n + (c == s ? " ace_start" : "") + " ace_br" + a(c == s || c == s + 1 && o.start.column, v < g, g > p, c == l), t, c == l ? 0 : 1, e);
          }, u.prototype.drawMultiLineMarker = function(i, o, n, t, e) {
            var r = this.$padding, s = t.lineHeight, l = this.$getTop(o.start.row, t), c = r + o.start.column * t.characterWidth;
            if (e = e || "", this.session.$bidiHandler.isBidiRow(o.start.row)) {
              var v = o.clone();
              v.end.row = v.start.row, v.end.column = this.session.getLine(v.start.row).length, this.drawBidiSingleLineMarker(i, v, n + " ace_br1 ace_start", t, null, e);
            } else
              this.elt(n + " ace_br1 ace_start", "height:" + s + "px;right:" + r + "px;top:" + l + "px;left:" + c + "px;" + (e || ""));
            if (this.session.$bidiHandler.isBidiRow(o.end.row)) {
              var v = o.clone();
              v.start.row = v.end.row, v.start.column = 0, this.drawBidiSingleLineMarker(i, v, n + " ace_br12", t, null, e);
            } else {
              l = this.$getTop(o.end.row, t);
              var g = o.end.column * t.characterWidth;
              this.elt(n + " ace_br12", "height:" + s + "px;width:" + g + "px;top:" + l + "px;left:" + r + "px;" + (e || ""));
            }
            if (s = (o.end.row - o.start.row - 1) * t.lineHeight, !(s <= 0)) {
              l = this.$getTop(o.start.row + 1, t);
              var p = (o.start.column ? 1 : 0) | (o.end.column ? 0 : 8);
              this.elt(n + (p ? " ace_br" + p : ""), "height:" + s + "px;right:" + r + "px;top:" + l + "px;left:" + r + "px;" + (e || ""));
            }
          }, u.prototype.drawSingleLineMarker = function(i, o, n, t, e, r) {
            if (this.session.$bidiHandler.isBidiRow(o.start.row))
              return this.drawBidiSingleLineMarker(i, o, n, t, e, r);
            var s = t.lineHeight, l = (o.end.column + (e || 0) - o.start.column) * t.characterWidth, c = this.$getTop(o.start.row, t), v = this.$padding + o.start.column * t.characterWidth;
            this.elt(n, "height:" + s + "px;width:" + l + "px;top:" + c + "px;left:" + v + "px;" + (r || ""));
          }, u.prototype.drawBidiSingleLineMarker = function(i, o, n, t, e, r) {
            var s = t.lineHeight, l = this.$getTop(o.start.row, t), c = this.$padding, v = this.session.$bidiHandler.getSelections(o.start.column, o.end.column);
            v.forEach(function(g) {
              this.elt(n, "height:" + s + "px;width:" + (g.width + (e || 0)) + "px;top:" + l + "px;left:" + (c + g.left) + "px;" + (r || ""));
            }, this);
          }, u.prototype.drawFullLineMarker = function(i, o, n, t, e) {
            var r = this.$getTop(o.start.row, t), s = t.lineHeight;
            o.start.row != o.end.row && (s += this.$getTop(o.end.row, t) - r), this.elt(n, "height:" + s + "px;top:" + r + "px;left:0;right:0;" + (e || ""));
          }, u.prototype.drawScreenLineMarker = function(i, o, n, t, e) {
            var r = this.$getTop(o.start.row, t), s = t.lineHeight;
            this.elt(n, "height:" + s + "px;top:" + r + "px;left:0;right:0;" + (e || ""));
          }, u;
        }()
      );
      w.prototype.$padding = 0;
      function a(u, i, o, n) {
        return (u ? 1 : 0) | (i ? 2 : 0) | (o ? 4 : 0) | (n ? 8 : 0);
      }
      M.Marker = w;
    }), ace.define("ace/layer/text_util", ["require", "exports", "module"], function(S, M, H) {
      var C = /* @__PURE__ */ new Set(["text", "rparen", "lparen"]);
      M.isTextToken = function(A) {
        return C.has(A);
      };
    }), ace.define("ace/layer/text", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/layer/lines", "ace/lib/event_emitter", "ace/config", "ace/layer/text_util"], function(S, M, H) {
      var C = S("../lib/oop"), A = S("../lib/dom"), w = S("../lib/lang"), a = S("./lines").Lines, u = S("../lib/event_emitter").EventEmitter, i = S("../config").nls, o = S("./text_util").isTextToken, n = (
        /** @class */
        function() {
          function t(e) {
            this.dom = A, this.element = this.dom.createElement("div"), this.element.className = "ace_layer ace_text-layer", e.appendChild(this.element), this.$updateEolChar = this.$updateEolChar.bind(this), this.$lines = new a(this.element);
          }
          return t.prototype.$updateEolChar = function() {
            var e = this.session.doc, r = e.getNewLineCharacter() == `
` && e.getNewLineMode() != "windows", s = r ? this.EOL_CHAR_LF : this.EOL_CHAR_CRLF;
            if (this.EOL_CHAR != s)
              return this.EOL_CHAR = s, !0;
          }, t.prototype.setPadding = function(e) {
            this.$padding = e, this.element.style.margin = "0 " + e + "px";
          }, t.prototype.getLineHeight = function() {
            return this.$fontMetrics.$characterSize.height || 0;
          }, t.prototype.getCharacterWidth = function() {
            return this.$fontMetrics.$characterSize.width || 0;
          }, t.prototype.$setFontMetrics = function(e) {
            this.$fontMetrics = e, this.$fontMetrics.on(
              "changeCharacterSize",
              (function(r) {
                this._signal("changeCharacterSize", r);
              }).bind(this)
            ), this.$pollSizeChanges();
          }, t.prototype.checkForSizeChanges = function() {
            this.$fontMetrics.checkForSizeChanges();
          }, t.prototype.$pollSizeChanges = function() {
            return this.$pollSizeChangesTimer = this.$fontMetrics.$pollSizeChanges();
          }, t.prototype.setSession = function(e) {
            this.session = e, e && this.$computeTabString();
          }, t.prototype.setShowInvisibles = function(e) {
            return this.showInvisibles == e ? !1 : (this.showInvisibles = e, typeof e == "string" ? (this.showSpaces = /tab/i.test(e), this.showTabs = /space/i.test(e), this.showEOL = /eol/i.test(e)) : this.showSpaces = this.showTabs = this.showEOL = e, this.$computeTabString(), !0);
          }, t.prototype.setDisplayIndentGuides = function(e) {
            return this.displayIndentGuides == e ? !1 : (this.displayIndentGuides = e, this.$computeTabString(), !0);
          }, t.prototype.setHighlightIndentGuides = function(e) {
            return this.$highlightIndentGuides === e ? !1 : (this.$highlightIndentGuides = e, e);
          }, t.prototype.$computeTabString = function() {
            var e = this.session.getTabSize();
            this.tabSize = e;
            for (var r = this.$tabStrings = [0], s = 1; s < e + 1; s++)
              if (this.showTabs) {
                var l = this.dom.createElement("span");
                l.className = "ace_invisible ace_invisible_tab", l.textContent = w.stringRepeat(this.TAB_CHAR, s), r.push(l);
              } else
                r.push(this.dom.createTextNode(w.stringRepeat(" ", s), this.element));
            if (this.displayIndentGuides) {
              this.$indentGuideRe = /\s\S| \t|\t |\s$/;
              var c = "ace_indent-guide", v = this.showSpaces ? " ace_invisible ace_invisible_space" : "", g = this.showSpaces ? w.stringRepeat(this.SPACE_CHAR, this.tabSize) : w.stringRepeat(" ", this.tabSize), p = this.showTabs ? " ace_invisible ace_invisible_tab" : "", h = this.showTabs ? w.stringRepeat(this.TAB_CHAR, this.tabSize) : g, l = this.dom.createElement("span");
              l.className = c + v, l.textContent = g, this.$tabStrings[" "] = l;
              var l = this.dom.createElement("span");
              l.className = c + p, l.textContent = h, this.$tabStrings["	"] = l;
            }
          }, t.prototype.updateLines = function(e, r, s) {
            if (this.config.lastRow != e.lastRow || this.config.firstRow != e.firstRow)
              return this.update(e);
            this.config = e;
            for (var l = Math.max(r, e.firstRow), c = Math.min(s, e.lastRow), v = this.element.childNodes, g = 0, h = e.firstRow; h < l; h++) {
              var b = this.session.getFoldLine(h);
              if (b)
                if (b.containsRow(l)) {
                  l = b.start.row;
                  break;
                } else
                  h = b.end.row;
              g++;
            }
            for (var p = !1, h = l, b = this.session.getNextFoldLine(h), E = b ? b.start.row : 1 / 0; h > E && (h = b.end.row + 1, b = this.session.getNextFoldLine(h, b), E = b ? b.start.row : 1 / 0), !(h > c); ) {
              var L = v[g++];
              if (L) {
                this.dom.removeChildren(L), this.$renderLine(L, h, h == E ? b : !1), p && (L.style.top = this.$lines.computeLineTop(h, e, this.session) + "px");
                var x = e.lineHeight * this.session.getRowLength(h) + "px";
                L.style.height != x && (p = !0, L.style.height = x);
              }
              h++;
            }
            if (p)
              for (; g < this.$lines.cells.length; ) {
                var O = this.$lines.cells[g++];
                O.element.style.top = this.$lines.computeLineTop(O.row, e, this.session) + "px";
              }
          }, t.prototype.scrollLines = function(e) {
            var r = this.config;
            if (this.config = e, this.$lines.pageChanged(r, e))
              return this.update(e);
            this.$lines.moveContainer(e);
            var s = e.lastRow, l = r ? r.lastRow : -1;
            if (!r || l < e.firstRow)
              return this.update(e);
            if (s < r.firstRow)
              return this.update(e);
            if (!r || r.lastRow < e.firstRow)
              return this.update(e);
            if (e.lastRow < r.firstRow)
              return this.update(e);
            if (r.firstRow < e.firstRow)
              for (var c = this.session.getFoldedRowCount(r.firstRow, e.firstRow - 1); c > 0; c--)
                this.$lines.shift();
            if (r.lastRow > e.lastRow)
              for (var c = this.session.getFoldedRowCount(e.lastRow + 1, r.lastRow); c > 0; c--)
                this.$lines.pop();
            e.firstRow < r.firstRow && this.$lines.unshift(this.$renderLinesFragment(e, e.firstRow, r.firstRow - 1)), e.lastRow > r.lastRow && this.$lines.push(this.$renderLinesFragment(e, r.lastRow + 1, e.lastRow)), this.$highlightIndentGuide();
          }, t.prototype.$renderLinesFragment = function(e, r, s) {
            for (var l = [], c = r, v = this.session.getNextFoldLine(c), g = v ? v.start.row : 1 / 0; c > g && (c = v.end.row + 1, v = this.session.getNextFoldLine(c, v), g = v ? v.start.row : 1 / 0), !(c > s); ) {
              var p = this.$lines.createCell(c, e, this.session), h = p.element;
              this.dom.removeChildren(h), A.setStyle(h.style, "height", this.$lines.computeLineHeight(c, e, this.session) + "px"), A.setStyle(h.style, "top", this.$lines.computeLineTop(c, e, this.session) + "px"), this.$renderLine(h, c, c == g ? v : !1), this.$useLineGroups() ? h.className = "ace_line_group" : h.className = "ace_line", l.push(p), c++;
            }
            return l;
          }, t.prototype.update = function(e) {
            this.$lines.moveContainer(e), this.config = e;
            for (var r = e.firstRow, s = e.lastRow, l = this.$lines; l.getLength(); )
              l.pop();
            l.push(this.$renderLinesFragment(e, r, s));
          }, t.prototype.$renderToken = function(e, r, s, l) {
            for (var c = this, v = /(\t)|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\uFEFF\uFFF9-\uFFFC\u2066\u2067\u2068\u202A\u202B\u202D\u202E\u202C\u2069\u2060\u2061\u2062\u2063\u2064\u206A\u206B\u206B\u206C\u206D\u206E\u206F]+)|(\u3000)|([\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g, g = this.dom.createFragment(this.element), p, h = 0; p = v.exec(l); ) {
              var b = p[1], E = p[2], L = p[3], x = p[4], O = p[5];
              if (!(!c.showSpaces && E)) {
                var $ = h != p.index ? l.slice(h, p.index) : "";
                if (h = p.index + p[0].length, $ && g.appendChild(this.dom.createTextNode($, this.element)), b) {
                  var y = c.session.getScreenTabSize(r + p.index);
                  g.appendChild(c.$tabStrings[y].cloneNode(!0)), r += y - 1;
                } else if (E)
                  if (c.showSpaces) {
                    var f = this.dom.createElement("span");
                    f.className = "ace_invisible ace_invisible_space", f.textContent = w.stringRepeat(c.SPACE_CHAR, E.length), g.appendChild(f);
                  } else
                    g.appendChild(this.dom.createTextNode(E, this.element));
                else if (L) {
                  var f = this.dom.createElement("span");
                  f.className = "ace_invisible ace_invisible_space ace_invalid", f.textContent = w.stringRepeat(c.SPACE_CHAR, L.length), g.appendChild(f);
                } else if (x) {
                  r += 1;
                  var f = this.dom.createElement("span");
                  f.style.width = c.config.characterWidth * 2 + "px", f.className = c.showSpaces ? "ace_cjk ace_invisible ace_invisible_space" : "ace_cjk", f.textContent = c.showSpaces ? c.SPACE_CHAR : x, g.appendChild(f);
                } else if (O) {
                  r += 1;
                  var f = this.dom.createElement("span");
                  f.style.width = c.config.characterWidth * 2 + "px", f.className = "ace_cjk", f.textContent = O, g.appendChild(f);
                }
              }
            }
            if (g.appendChild(this.dom.createTextNode(h ? l.slice(h) : l, this.element)), o(s.type))
              e.appendChild(g);
            else {
              var d = "ace_" + s.type.replace(/\./g, " ace_"), f = this.dom.createElement("span");
              s.type == "fold" && (f.style.width = s.value.length * this.config.characterWidth + "px", f.setAttribute("title", i("inline-fold.closed.title", "Unfold code"))), f.className = d, f.appendChild(g), e.appendChild(f);
            }
            return r + l.length;
          }, t.prototype.renderIndentGuide = function(e, r, s) {
            var l = r.search(this.$indentGuideRe);
            if (l <= 0 || l >= s)
              return r;
            if (r[0] == " ") {
              l -= l % this.tabSize;
              for (var c = l / this.tabSize, v = 0; v < c; v++)
                e.appendChild(this.$tabStrings[" "].cloneNode(!0));
              return this.$highlightIndentGuide(), r.substr(l);
            } else if (r[0] == "	") {
              for (var v = 0; v < l; v++)
                e.appendChild(this.$tabStrings["	"].cloneNode(!0));
              return this.$highlightIndentGuide(), r.substr(l);
            }
            return this.$highlightIndentGuide(), r;
          }, t.prototype.$highlightIndentGuide = function() {
            if (!(!this.$highlightIndentGuides || !this.displayIndentGuides)) {
              this.$highlightIndentGuideMarker = {
                indentLevel: void 0,
                start: void 0,
                end: void 0,
                dir: void 0
              };
              var e = this.session.doc.$lines;
              if (e) {
                var r = this.session.selection.getCursor(), s = /^\s*/.exec(this.session.doc.getLine(r.row))[0].length, l = Math.floor(s / this.tabSize);
                this.$highlightIndentGuideMarker = {
                  indentLevel: l,
                  start: r.row
                };
                var c = this.session.$bracketHighlight;
                if (c) {
                  for (var v = this.session.$bracketHighlight.ranges, g = 0; g < v.length; g++)
                    if (r.row !== v[g].start.row) {
                      this.$highlightIndentGuideMarker.end = v[g].start.row + 1, r.row > v[g].start.row ? this.$highlightIndentGuideMarker.dir = -1 : this.$highlightIndentGuideMarker.dir = 1;
                      break;
                    }
                }
                if (!this.$highlightIndentGuideMarker.end && e[r.row] !== "" && r.column === e[r.row].length) {
                  this.$highlightIndentGuideMarker.dir = 1;
                  for (var g = r.row + 1; g < e.length; g++) {
                    var p = e[g], h = /^\s*/.exec(p)[0].length;
                    if (p !== "" && (this.$highlightIndentGuideMarker.end = g, h <= s))
                      break;
                  }
                }
                this.$renderHighlightIndentGuide();
              }
            }
          }, t.prototype.$clearActiveIndentGuide = function() {
            for (var e = this.element.querySelectorAll(".ace_indent-guide-active"), r = 0; r < e.length; r++)
              e[r].classList.remove("ace_indent-guide-active");
          }, t.prototype.$setIndentGuideActive = function(e, r) {
            var s = this.session.doc.getLine(e.row);
            if (s !== "") {
              var l = e.element;
              if (e.element.classList && e.element.classList.contains("ace_line_group"))
                if (e.element.childNodes.length > 0)
                  l = e.element.childNodes[0];
                else
                  return;
              var c = l.childNodes;
              if (c) {
                var v = c[r - 1];
                v && v.classList && v.classList.contains("ace_indent-guide") && v.classList.add("ace_indent-guide-active");
              }
            }
          }, t.prototype.$renderHighlightIndentGuide = function() {
            if (this.$lines) {
              var e = this.$lines.cells;
              this.$clearActiveIndentGuide();
              var r = this.$highlightIndentGuideMarker.indentLevel;
              if (r !== 0)
                if (this.$highlightIndentGuideMarker.dir === 1)
                  for (var s = 0; s < e.length; s++) {
                    var l = e[s];
                    if (this.$highlightIndentGuideMarker.end && l.row >= this.$highlightIndentGuideMarker.start + 1) {
                      if (l.row >= this.$highlightIndentGuideMarker.end)
                        break;
                      this.$setIndentGuideActive(l, r);
                    }
                  }
                else
                  for (var s = e.length - 1; s >= 0; s--) {
                    var l = e[s];
                    if (this.$highlightIndentGuideMarker.end && l.row < this.$highlightIndentGuideMarker.start) {
                      if (l.row < this.$highlightIndentGuideMarker.end)
                        break;
                      this.$setIndentGuideActive(l, r);
                    }
                  }
            }
          }, t.prototype.$createLineElement = function(e) {
            var r = this.dom.createElement("div");
            return r.className = "ace_line", r.style.height = this.config.lineHeight + "px", r;
          }, t.prototype.$renderWrappedLine = function(e, r, s) {
            var l = 0, c = 0, v = s[0], g = 0, p = this.$createLineElement();
            e.appendChild(p);
            for (var h = 0; h < r.length; h++) {
              var b = r[h], E = b.value;
              if (h == 0 && this.displayIndentGuides) {
                if (l = E.length, E = this.renderIndentGuide(p, E, v), !E)
                  continue;
                l -= E.length;
              }
              if (l + E.length < v)
                g = this.$renderToken(p, g, b, E), l += E.length;
              else {
                for (; l + E.length >= v; )
                  g = this.$renderToken(p, g, b, E.substring(0, v - l)), E = E.substring(v - l), l = v, p = this.$createLineElement(), e.appendChild(p), p.appendChild(this.dom.createTextNode(w.stringRepeat(" ", s.indent), this.element)), c++, g = 0, v = s[c] || Number.MAX_VALUE;
                E.length != 0 && (l += E.length, g = this.$renderToken(p, g, b, E));
              }
            }
            s[s.length - 1] > this.MAX_LINE_LENGTH && this.$renderOverflowMessage(p, g, null, "", !0);
          }, t.prototype.$renderSimpleLine = function(e, r) {
            for (var s = 0, l = 0; l < r.length; l++) {
              var c = r[l], v = c.value;
              if (!(l == 0 && this.displayIndentGuides && (v = this.renderIndentGuide(e, v), !v))) {
                if (s + v.length > this.MAX_LINE_LENGTH)
                  return this.$renderOverflowMessage(e, s, c, v);
                s = this.$renderToken(e, s, c, v);
              }
            }
          }, t.prototype.$renderOverflowMessage = function(e, r, s, l, c) {
            s && this.$renderToken(e, r, s, l.slice(0, this.MAX_LINE_LENGTH - r));
            var v = this.dom.createElement("span");
            v.className = "ace_inline_button ace_keyword ace_toggle_wrap", v.textContent = c ? "<hide>" : "<click to see more...>", e.appendChild(v);
          }, t.prototype.$renderLine = function(e, r, s) {
            if (!s && s != !1 && (s = this.session.getFoldLine(r)), s)
              var l = this.$getFoldLineTokens(r, s);
            else
              var l = this.session.getTokens(r);
            var c = e;
            if (l.length) {
              var v = this.session.getRowSplitData(r);
              if (v && v.length) {
                this.$renderWrappedLine(e, l, v);
                var c = e.lastChild;
              } else {
                var c = e;
                this.$useLineGroups() && (c = this.$createLineElement(), e.appendChild(c)), this.$renderSimpleLine(c, l);
              }
            } else this.$useLineGroups() && (c = this.$createLineElement(), e.appendChild(c));
            if (this.showEOL && c) {
              s && (r = s.end.row);
              var g = this.dom.createElement("span");
              g.className = "ace_invisible ace_invisible_eol", g.textContent = r == this.session.getLength() - 1 ? this.EOF_CHAR : this.EOL_CHAR, c.appendChild(g);
            }
          }, t.prototype.$getFoldLineTokens = function(e, r) {
            var s = this.session, l = [];
            function c(g, p, h) {
              for (var b = 0, E = 0; E + g[b].value.length < p; )
                if (E += g[b].value.length, b++, b == g.length)
                  return;
              if (E != p) {
                var L = g[b].value.substring(p - E);
                L.length > h - p && (L = L.substring(0, h - p)), l.push({
                  type: g[b].type,
                  value: L
                }), E = p + L.length, b += 1;
              }
              for (; E < h && b < g.length; ) {
                var L = g[b].value;
                L.length + E > h ? l.push({
                  type: g[b].type,
                  value: L.substring(0, h - E)
                }) : l.push(g[b]), E += L.length, b += 1;
              }
            }
            var v = s.getTokens(e);
            return r.walk(function(g, p, h, b, E) {
              g != null ? l.push({
                type: "fold",
                value: g
              }) : (E && (v = s.getTokens(p)), v.length && c(v, b, h));
            }, r.end.row, this.session.getLine(r.end.row).length), l;
          }, t.prototype.$useLineGroups = function() {
            return this.session.getUseWrapMode();
          }, t;
        }()
      );
      n.prototype.EOF_CHAR = "¶", n.prototype.EOL_CHAR_LF = "¬", n.prototype.EOL_CHAR_CRLF = "¤", n.prototype.EOL_CHAR = n.prototype.EOL_CHAR_LF, n.prototype.TAB_CHAR = "—", n.prototype.SPACE_CHAR = "·", n.prototype.$padding = 0, n.prototype.MAX_LINE_LENGTH = 1e4, n.prototype.showInvisibles = !1, n.prototype.showSpaces = !1, n.prototype.showTabs = !1, n.prototype.showEOL = !1, n.prototype.displayIndentGuides = !0, n.prototype.$highlightIndentGuides = !0, n.prototype.$tabStrings = [], n.prototype.destroy = {}, n.prototype.onChangeTabSize = n.prototype.$computeTabString, C.implement(n.prototype, u), M.Text = n;
    }), ace.define("ace/layer/cursor", ["require", "exports", "module", "ace/lib/dom"], function(S, M, H) {
      var C = S("../lib/dom"), A = (
        /** @class */
        function() {
          function w(a) {
            this.element = C.createElement("div"), this.element.className = "ace_layer ace_cursor-layer", a.appendChild(this.element), this.isVisible = !1, this.isBlinking = !0, this.blinkInterval = 1e3, this.smoothBlinking = !1, this.cursors = [], this.cursor = this.addCursor(), C.addCssClass(this.element, "ace_hidden-cursors"), this.$updateCursors = this.$updateOpacity.bind(this);
          }
          return w.prototype.$updateOpacity = function(a) {
            for (var u = this.cursors, i = u.length; i--; )
              C.setStyle(u[i].style, "opacity", a ? "" : "0");
          }, w.prototype.$startCssAnimation = function() {
            for (var a = this.cursors, u = a.length; u--; )
              a[u].style.animationDuration = this.blinkInterval + "ms";
            this.$isAnimating = !0, setTimeout((function() {
              this.$isAnimating && C.addCssClass(this.element, "ace_animate-blinking");
            }).bind(this));
          }, w.prototype.$stopCssAnimation = function() {
            this.$isAnimating = !1, C.removeCssClass(this.element, "ace_animate-blinking");
          }, w.prototype.setPadding = function(a) {
            this.$padding = a;
          }, w.prototype.setSession = function(a) {
            this.session = a;
          }, w.prototype.setBlinking = function(a) {
            a != this.isBlinking && (this.isBlinking = a, this.restartTimer());
          }, w.prototype.setBlinkInterval = function(a) {
            a != this.blinkInterval && (this.blinkInterval = a, this.restartTimer());
          }, w.prototype.setSmoothBlinking = function(a) {
            a != this.smoothBlinking && (this.smoothBlinking = a, C.setCssClass(this.element, "ace_smooth-blinking", a), this.$updateCursors(!0), this.restartTimer());
          }, w.prototype.addCursor = function() {
            var a = C.createElement("div");
            return a.className = "ace_cursor", this.element.appendChild(a), this.cursors.push(a), a;
          }, w.prototype.removeCursor = function() {
            if (this.cursors.length > 1) {
              var a = this.cursors.pop();
              return a.parentNode.removeChild(a), a;
            }
          }, w.prototype.hideCursor = function() {
            this.isVisible = !1, C.addCssClass(this.element, "ace_hidden-cursors"), this.restartTimer();
          }, w.prototype.showCursor = function() {
            this.isVisible = !0, C.removeCssClass(this.element, "ace_hidden-cursors"), this.restartTimer();
          }, w.prototype.restartTimer = function() {
            var a = this.$updateCursors;
            if (clearInterval(this.intervalId), clearTimeout(this.timeoutId), this.$stopCssAnimation(), this.smoothBlinking && (this.$isSmoothBlinking = !1, C.removeCssClass(this.element, "ace_smooth-blinking")), a(!0), !this.isBlinking || !this.blinkInterval || !this.isVisible) {
              this.$stopCssAnimation();
              return;
            }
            if (this.smoothBlinking && (this.$isSmoothBlinking = !0, setTimeout((function() {
              this.$isSmoothBlinking && C.addCssClass(this.element, "ace_smooth-blinking");
            }).bind(this))), C.HAS_CSS_ANIMATION)
              this.$startCssAnimation();
            else {
              var u = (
                /**@this{Cursor}*/
                (function() {
                  this.timeoutId = setTimeout(function() {
                    a(!1);
                  }, 0.6 * this.blinkInterval);
                }).bind(this)
              );
              this.intervalId = setInterval(function() {
                a(!0), u();
              }, this.blinkInterval), u();
            }
          }, w.prototype.getPixelPosition = function(a, u) {
            if (!this.config || !this.session)
              return { left: 0, top: 0 };
            a || (a = this.session.selection.getCursor());
            var i = this.session.documentToScreenPosition(a), o = this.$padding + (this.session.$bidiHandler.isBidiRow(i.row, a.row) ? this.session.$bidiHandler.getPosLeft(i.column) : i.column * this.config.characterWidth), n = (i.row - (u ? this.config.firstRowScreen : 0)) * this.config.lineHeight;
            return { left: o, top: n };
          }, w.prototype.isCursorInView = function(a, u) {
            return a.top >= 0 && a.top < u.maxHeight;
          }, w.prototype.update = function(a) {
            this.config = a;
            var u = this.session.$selectionMarkers, i = 0, o = 0;
            (u === void 0 || u.length === 0) && (u = [{ cursor: null }]);
            for (var i = 0, n = u.length; i < n; i++) {
              var t = this.getPixelPosition(u[i].cursor, !0);
              if (!((t.top > a.height + a.offset || t.top < 0) && i > 1)) {
                var e = this.cursors[o++] || this.addCursor(), r = e.style;
                this.drawCursor ? this.drawCursor(e, t, a, u[i], this.session) : this.isCursorInView(t, a) ? (C.setStyle(r, "display", "block"), C.translate(e, t.left, t.top), C.setStyle(r, "width", Math.round(a.characterWidth) + "px"), C.setStyle(r, "height", a.lineHeight + "px")) : C.setStyle(r, "display", "none");
              }
            }
            for (; this.cursors.length > o; )
              this.removeCursor();
            var s = this.session.getOverwrite();
            this.$setOverwrite(s), this.$pixelPos = t, this.restartTimer();
          }, w.prototype.$setOverwrite = function(a) {
            a != this.overwrite && (this.overwrite = a, a ? C.addCssClass(this.element, "ace_overwrite-cursors") : C.removeCssClass(this.element, "ace_overwrite-cursors"));
          }, w.prototype.destroy = function() {
            clearInterval(this.intervalId), clearTimeout(this.timeoutId);
          }, w;
        }()
      );
      A.prototype.$padding = 0, A.prototype.drawCursor = null, M.Cursor = A;
    }), ace.define("ace/scrollbar", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/event", "ace/lib/event_emitter"], function(S, M, H) {
      var C = this && this.__extends || /* @__PURE__ */ function() {
        var e = function(r, s) {
          return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, c) {
            l.__proto__ = c;
          } || function(l, c) {
            for (var v in c) Object.prototype.hasOwnProperty.call(c, v) && (l[v] = c[v]);
          }, e(r, s);
        };
        return function(r, s) {
          if (typeof s != "function" && s !== null)
            throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
          e(r, s);
          function l() {
            this.constructor = r;
          }
          r.prototype = s === null ? Object.create(s) : (l.prototype = s.prototype, new l());
        };
      }(), A = S("./lib/oop"), w = S("./lib/dom"), a = S("./lib/event"), u = S("./lib/event_emitter").EventEmitter, i = 32768, o = (
        /** @class */
        function() {
          function e(r, s) {
            this.element = w.createElement("div"), this.element.className = "ace_scrollbar ace_scrollbar" + s, this.inner = w.createElement("div"), this.inner.className = "ace_scrollbar-inner", this.inner.textContent = " ", this.element.appendChild(this.inner), r.appendChild(this.element), this.setVisible(!1), this.skipEvent = !1, a.addListener(this.element, "scroll", this.onScroll.bind(this)), a.addListener(this.element, "mousedown", a.preventDefault);
          }
          return e.prototype.setVisible = function(r) {
            this.element.style.display = r ? "" : "none", this.isVisible = r, this.coeff = 1;
          }, e;
        }()
      );
      A.implement(o.prototype, u);
      var n = (
        /** @class */
        function(e) {
          C(r, e);
          function r(s, l) {
            var c = e.call(this, s, "-v") || this;
            return c.scrollTop = 0, c.scrollHeight = 0, l.$scrollbarWidth = c.width = w.scrollbarWidth(s.ownerDocument), c.inner.style.width = c.element.style.width = (c.width || 15) + 5 + "px", c.$minWidth = 0, c;
          }
          return r.prototype.onScroll = function() {
            if (!this.skipEvent) {
              if (this.scrollTop = this.element.scrollTop, this.coeff != 1) {
                var s = this.element.clientHeight / this.scrollHeight;
                this.scrollTop = this.scrollTop * (1 - s) / (this.coeff - s);
              }
              this._emit("scroll", { data: this.scrollTop });
            }
            this.skipEvent = !1;
          }, r.prototype.getWidth = function() {
            return Math.max(this.isVisible ? this.width : 0, this.$minWidth || 0);
          }, r.prototype.setHeight = function(s) {
            this.element.style.height = s + "px";
          }, r.prototype.setScrollHeight = function(s) {
            this.scrollHeight = s, s > i ? (this.coeff = i / s, s = i) : this.coeff != 1 && (this.coeff = 1), this.inner.style.height = s + "px";
          }, r.prototype.setScrollTop = function(s) {
            this.scrollTop != s && (this.skipEvent = !0, this.scrollTop = s, this.element.scrollTop = s * this.coeff);
          }, r;
        }(o)
      );
      n.prototype.setInnerHeight = n.prototype.setScrollHeight;
      var t = (
        /** @class */
        function(e) {
          C(r, e);
          function r(s, l) {
            var c = e.call(this, s, "-h") || this;
            return c.scrollLeft = 0, c.height = l.$scrollbarWidth, c.inner.style.height = c.element.style.height = (c.height || 15) + 5 + "px", c;
          }
          return r.prototype.onScroll = function() {
            this.skipEvent || (this.scrollLeft = this.element.scrollLeft, this._emit("scroll", { data: this.scrollLeft })), this.skipEvent = !1;
          }, r.prototype.getHeight = function() {
            return this.isVisible ? this.height : 0;
          }, r.prototype.setWidth = function(s) {
            this.element.style.width = s + "px";
          }, r.prototype.setInnerWidth = function(s) {
            this.inner.style.width = s + "px";
          }, r.prototype.setScrollWidth = function(s) {
            this.inner.style.width = s + "px";
          }, r.prototype.setScrollLeft = function(s) {
            this.scrollLeft != s && (this.skipEvent = !0, this.scrollLeft = this.element.scrollLeft = s);
          }, r;
        }(o)
      );
      M.ScrollBar = n, M.ScrollBarV = n, M.ScrollBarH = t, M.VScrollBar = n, M.HScrollBar = t;
    }), ace.define("ace/scrollbar_custom", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/event", "ace/lib/event_emitter"], function(S, M, H) {
      var C = this && this.__extends || /* @__PURE__ */ function() {
        var t = function(e, r) {
          return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
            s.__proto__ = l;
          } || function(s, l) {
            for (var c in l) Object.prototype.hasOwnProperty.call(l, c) && (s[c] = l[c]);
          }, t(e, r);
        };
        return function(e, r) {
          if (typeof r != "function" && r !== null)
            throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
          t(e, r);
          function s() {
            this.constructor = e;
          }
          e.prototype = r === null ? Object.create(r) : (s.prototype = r.prototype, new s());
        };
      }(), A = S("./lib/oop"), w = S("./lib/dom"), a = S("./lib/event"), u = S("./lib/event_emitter").EventEmitter;
      w.importCssString(`.ace_editor>.ace_sb-v div, .ace_editor>.ace_sb-h div{
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
      var i = (
        /** @class */
        function() {
          function t(e, r) {
            this.element = w.createElement("div"), this.element.className = "ace_sb" + r, this.inner = w.createElement("div"), this.inner.className = "", this.element.appendChild(this.inner), this.VScrollWidth = 12, this.HScrollHeight = 12, e.appendChild(this.element), this.setVisible(!1), this.skipEvent = !1, a.addMultiMouseDownListener(this.element, [500, 300, 300], this, "onMouseDown");
          }
          return t.prototype.setVisible = function(e) {
            this.element.style.display = e ? "" : "none", this.isVisible = e, this.coeff = 1;
          }, t;
        }()
      );
      A.implement(i.prototype, u);
      var o = (
        /** @class */
        function(t) {
          C(e, t);
          function e(r, s) {
            var l = t.call(this, r, "-v") || this;
            return l.scrollTop = 0, l.scrollHeight = 0, l.parent = r, l.width = l.VScrollWidth, l.renderer = s, l.inner.style.width = l.element.style.width = (l.width || 15) + "px", l.$minWidth = 0, l;
          }
          return e.prototype.onMouseDown = function(r, s) {
            if (r === "mousedown" && !(a.getButton(s) !== 0 || s.detail === 2)) {
              if (s.target === this.inner) {
                var l = this, c = s.clientY, v = function(x) {
                  c = x.clientY;
                }, g = function() {
                  clearInterval(E);
                }, p = s.clientY, h = this.thumbTop, b = function() {
                  if (c !== void 0) {
                    var x = l.scrollTopFromThumbTop(h + c - p);
                    x !== l.scrollTop && l._emit("scroll", { data: x });
                  }
                };
                a.capture(this.inner, v, g);
                var E = setInterval(b, 20);
                return a.preventDefault(s);
              }
              var L = s.clientY - this.element.getBoundingClientRect().top - this.thumbHeight / 2;
              return this._emit("scroll", { data: this.scrollTopFromThumbTop(L) }), a.preventDefault(s);
            }
          }, e.prototype.getHeight = function() {
            return this.height;
          }, e.prototype.scrollTopFromThumbTop = function(r) {
            var s = r * (this.pageHeight - this.viewHeight) / (this.slideHeight - this.thumbHeight);
            return s = s >> 0, s < 0 ? s = 0 : s > this.pageHeight - this.viewHeight && (s = this.pageHeight - this.viewHeight), s;
          }, e.prototype.getWidth = function() {
            return Math.max(this.isVisible ? this.width : 0, this.$minWidth || 0);
          }, e.prototype.setHeight = function(r) {
            this.height = Math.max(0, r), this.slideHeight = this.height, this.viewHeight = this.height, this.setScrollHeight(this.pageHeight, !0);
          }, e.prototype.setScrollHeight = function(r, s) {
            this.pageHeight === r && !s || (this.pageHeight = r, this.thumbHeight = this.slideHeight * this.viewHeight / this.pageHeight, this.thumbHeight > this.slideHeight && (this.thumbHeight = this.slideHeight), this.thumbHeight < 15 && (this.thumbHeight = 15), this.inner.style.height = this.thumbHeight + "px", this.scrollTop > this.pageHeight - this.viewHeight && (this.scrollTop = this.pageHeight - this.viewHeight, this.scrollTop < 0 && (this.scrollTop = 0), this._emit("scroll", { data: this.scrollTop })));
          }, e.prototype.setScrollTop = function(r) {
            this.scrollTop = r, r < 0 && (r = 0), this.thumbTop = r * (this.slideHeight - this.thumbHeight) / (this.pageHeight - this.viewHeight), this.inner.style.top = this.thumbTop + "px";
          }, e;
        }(i)
      );
      o.prototype.setInnerHeight = o.prototype.setScrollHeight;
      var n = (
        /** @class */
        function(t) {
          C(e, t);
          function e(r, s) {
            var l = t.call(this, r, "-h") || this;
            return l.scrollLeft = 0, l.scrollWidth = 0, l.height = l.HScrollHeight, l.inner.style.height = l.element.style.height = (l.height || 12) + "px", l.renderer = s, l;
          }
          return e.prototype.onMouseDown = function(r, s) {
            if (r === "mousedown" && !(a.getButton(s) !== 0 || s.detail === 2)) {
              if (s.target === this.inner) {
                var l = this, c = s.clientX, v = function(x) {
                  c = x.clientX;
                }, g = function() {
                  clearInterval(E);
                }, p = s.clientX, h = this.thumbLeft, b = function() {
                  if (c !== void 0) {
                    var x = l.scrollLeftFromThumbLeft(h + c - p);
                    x !== l.scrollLeft && l._emit("scroll", { data: x });
                  }
                };
                a.capture(this.inner, v, g);
                var E = setInterval(b, 20);
                return a.preventDefault(s);
              }
              var L = s.clientX - this.element.getBoundingClientRect().left - this.thumbWidth / 2;
              return this._emit("scroll", { data: this.scrollLeftFromThumbLeft(L) }), a.preventDefault(s);
            }
          }, e.prototype.getHeight = function() {
            return this.isVisible ? this.height : 0;
          }, e.prototype.scrollLeftFromThumbLeft = function(r) {
            var s = r * (this.pageWidth - this.viewWidth) / (this.slideWidth - this.thumbWidth);
            return s = s >> 0, s < 0 ? s = 0 : s > this.pageWidth - this.viewWidth && (s = this.pageWidth - this.viewWidth), s;
          }, e.prototype.setWidth = function(r) {
            this.width = Math.max(0, r), this.element.style.width = this.width + "px", this.slideWidth = this.width, this.viewWidth = this.width, this.setScrollWidth(this.pageWidth, !0);
          }, e.prototype.setScrollWidth = function(r, s) {
            this.pageWidth === r && !s || (this.pageWidth = r, this.thumbWidth = this.slideWidth * this.viewWidth / this.pageWidth, this.thumbWidth > this.slideWidth && (this.thumbWidth = this.slideWidth), this.thumbWidth < 15 && (this.thumbWidth = 15), this.inner.style.width = this.thumbWidth + "px", this.scrollLeft > this.pageWidth - this.viewWidth && (this.scrollLeft = this.pageWidth - this.viewWidth, this.scrollLeft < 0 && (this.scrollLeft = 0), this._emit("scroll", { data: this.scrollLeft })));
          }, e.prototype.setScrollLeft = function(r) {
            this.scrollLeft = r, r < 0 && (r = 0), this.thumbLeft = r * (this.slideWidth - this.thumbWidth) / (this.pageWidth - this.viewWidth), this.inner.style.left = this.thumbLeft + "px";
          }, e;
        }(i)
      );
      n.prototype.setInnerWidth = n.prototype.setScrollWidth, M.ScrollBar = o, M.ScrollBarV = o, M.ScrollBarH = n, M.VScrollBar = o, M.HScrollBar = n;
    }), ace.define("ace/renderloop", ["require", "exports", "module", "ace/lib/event"], function(S, M, H) {
      var C = S("./lib/event"), A = (
        /** @class */
        function() {
          function w(a, u) {
            this.onRender = a, this.pending = !1, this.changes = 0, this.$recursionLimit = 2, this.window = u || window;
            var i = this;
            this._flush = function(o) {
              i.pending = !1;
              var n = i.changes;
              if (n && (C.blockIdle(100), i.changes = 0, i.onRender(n)), i.changes) {
                if (i.$recursionLimit-- < 0)
                  return;
                i.schedule();
              } else
                i.$recursionLimit = 2;
            };
          }
          return w.prototype.schedule = function(a) {
            this.changes = this.changes | a, this.changes && !this.pending && (C.nextFrame(this._flush), this.pending = !0);
          }, w.prototype.clear = function(a) {
            var u = this.changes;
            return this.changes = 0, u;
          }, w;
        }()
      );
      M.RenderLoop = A;
    }), ace.define("ace/layer/font_metrics", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/event", "ace/lib/useragent", "ace/lib/event_emitter"], function(S, M, H) {
      var C = S("../lib/oop"), A = S("../lib/dom"), w = S("../lib/lang"), a = S("../lib/event"), u = S("../lib/useragent"), i = S("../lib/event_emitter").EventEmitter, o = 512, n = typeof ResizeObserver == "function", t = 200, e = (
        /** @class */
        function() {
          function r(s) {
            this.el = A.createElement("div"), this.$setMeasureNodeStyles(this.el.style, !0), this.$main = A.createElement("div"), this.$setMeasureNodeStyles(this.$main.style), this.$measureNode = A.createElement("div"), this.$setMeasureNodeStyles(this.$measureNode.style), this.el.appendChild(this.$main), this.el.appendChild(this.$measureNode), s.appendChild(this.el), this.$measureNode.textContent = w.stringRepeat("X", o), this.$characterSize = { width: 0, height: 0 }, n ? this.$addObserver() : this.checkForSizeChanges();
          }
          return r.prototype.$setMeasureNodeStyles = function(s, l) {
            s.width = s.height = "auto", s.left = s.top = "0px", s.visibility = "hidden", s.position = "absolute", s.whiteSpace = "pre", u.isIE < 8 ? s["font-family"] = "inherit" : s.font = "inherit", s.overflow = l ? "hidden" : "visible";
          }, r.prototype.checkForSizeChanges = function(s) {
            if (s === void 0 && (s = this.$measureSizes()), s && (this.$characterSize.width !== s.width || this.$characterSize.height !== s.height)) {
              this.$measureNode.style.fontWeight = "bold";
              var l = this.$measureSizes();
              this.$measureNode.style.fontWeight = "", this.$characterSize = s, this.charSizes = /* @__PURE__ */ Object.create(null), this.allowBoldFonts = l && l.width === s.width && l.height === s.height, this._emit("changeCharacterSize", { data: s });
            }
          }, r.prototype.$addObserver = function() {
            var s = this;
            this.$observer = new window.ResizeObserver(function(l) {
              s.checkForSizeChanges();
            }), this.$observer.observe(this.$measureNode);
          }, r.prototype.$pollSizeChanges = function() {
            if (this.$pollSizeChangesTimer || this.$observer)
              return this.$pollSizeChangesTimer;
            var s = this;
            return this.$pollSizeChangesTimer = a.onIdle(function l() {
              s.checkForSizeChanges(), a.onIdle(l, 500);
            }, 500);
          }, r.prototype.setPolling = function(s) {
            s ? this.$pollSizeChanges() : this.$pollSizeChangesTimer && (clearInterval(this.$pollSizeChangesTimer), this.$pollSizeChangesTimer = 0);
          }, r.prototype.$measureSizes = function(s) {
            var l = {
              height: (s || this.$measureNode).clientHeight,
              width: (s || this.$measureNode).clientWidth / o
            };
            return l.width === 0 || l.height === 0 ? null : l;
          }, r.prototype.$measureCharWidth = function(s) {
            this.$main.textContent = w.stringRepeat(s, o);
            var l = this.$main.getBoundingClientRect();
            return l.width / o;
          }, r.prototype.getCharacterWidth = function(s) {
            var l = this.charSizes[s];
            return l === void 0 && (l = this.charSizes[s] = this.$measureCharWidth(s) / this.$characterSize.width), l;
          }, r.prototype.destroy = function() {
            clearInterval(this.$pollSizeChangesTimer), this.$observer && this.$observer.disconnect(), this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el);
          }, r.prototype.$getZoom = function(s) {
            return !s || !s.parentElement ? 1 : (Number(window.getComputedStyle(s).zoom) || 1) * this.$getZoom(s.parentElement);
          }, r.prototype.$initTransformMeasureNodes = function() {
            var s = function(l, c) {
              return ["div", {
                style: "position: absolute;top:" + l + "px;left:" + c + "px;"
              }];
            };
            this.els = A.buildDom([s(0, 0), s(t, 0), s(0, t), s(t, t)], this.el);
          }, r.prototype.transformCoordinates = function(s, l) {
            if (s) {
              var c = this.$getZoom(this.el);
              s = h(1 / c, s);
            }
            function v(I, D, F) {
              var B = I[1] * D[0] - I[0] * D[1];
              return [
                (-D[1] * F[0] + D[0] * F[1]) / B,
                (+I[1] * F[0] - I[0] * F[1]) / B
              ];
            }
            function g(I, D) {
              return [I[0] - D[0], I[1] - D[1]];
            }
            function p(I, D) {
              return [I[0] + D[0], I[1] + D[1]];
            }
            function h(I, D) {
              return [I * D[0], I * D[1]];
            }
            this.els || this.$initTransformMeasureNodes();
            function b(I) {
              var D = I.getBoundingClientRect();
              return [D.left, D.top];
            }
            var E = b(this.els[0]), L = b(this.els[1]), x = b(this.els[2]), O = b(this.els[3]), $ = v(g(O, L), g(O, x), g(p(L, x), p(O, E))), y = h(1 + $[0], g(L, E)), f = h(1 + $[1], g(x, E));
            if (l) {
              var d = l, m = $[0] * d[0] / t + $[1] * d[1] / t + 1, k = p(h(d[0], y), h(d[1], f));
              return p(h(1 / m / t, k), E);
            }
            var _ = g(s, E), T = v(g(y, h($[0], _)), g(f, h($[1], _)), _);
            return h(t, T);
          }, r;
        }()
      );
      e.prototype.$characterSize = { width: 0, height: 0 }, C.implement(e.prototype, i), M.FontMetrics = e;
    }), ace.define("ace/css/editor-css", ["require", "exports", "module"], function(S, M, H) {
      H.exports = `
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
    }), ace.define("ace/layer/decorators", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/event_emitter"], function(S, M, H) {
      var C = S("../lib/dom"), A = S("../lib/oop"), w = S("../lib/event_emitter").EventEmitter, a = (
        /** @class */
        function() {
          function u(i, o) {
            this.parentEl = i, this.canvas = C.createElement("canvas"), this.renderer = o, this.pixelRatio = 1, this.maxHeight = o.layerConfig.maxHeight, this.lineHeight = o.layerConfig.lineHeight, this.minDecorationHeight = 2 * this.pixelRatio | 0, this.halfMinDecorationHeight = this.minDecorationHeight / 2 | 0, this.canvas.style.top = "0px", this.canvas.style.right = "0px", this.canvas.style.zIndex = "7px", this.canvas.style.position = "absolute", this.colors = {}, this.colors.dark = {
              error: "rgba(255, 18, 18, 1)",
              warning: "rgba(18, 136, 18, 1)",
              info: "rgba(18, 18, 136, 1)"
            }, this.colors.light = {
              error: "rgb(255,51,51)",
              warning: "rgb(32,133,72)",
              info: "rgb(35,68,138)"
            }, this.setDimensions(), i.element.appendChild(this.canvas);
          }
          return u.prototype.$updateDecorators = function(i) {
            var o = this.renderer.theme.isDark === !0 ? this.colors.dark : this.colors.light;
            this.setDimensions(i);
            var n = this.canvas.getContext("2d");
            function t(L, x) {
              return L.priority < x.priority ? -1 : L.priority > x.priority ? 1 : 0;
            }
            var e = this.renderer.session.$annotations;
            if (n.clearRect(0, 0, this.canvas.width, this.canvas.height), e) {
              var r = {
                info: 1,
                warning: 2,
                error: 3
              };
              e.forEach(function(L) {
                L.priority = r[L.type] || null;
              }), e = e.sort(t);
              for (var s = 0; s < e.length; s++) {
                var l = e[s].row, c = this.compensateFoldRows(l), v = Math.round((l - c) * this.lineHeight * this.heightRatio), g = Math.round((l - c) * this.lineHeight * this.heightRatio), p = Math.round(((l - c) * this.lineHeight + this.lineHeight) * this.heightRatio), h = p - g;
                if (h < this.minDecorationHeight) {
                  var b = (g + p) / 2 | 0;
                  b < this.halfMinDecorationHeight ? b = this.halfMinDecorationHeight : b + this.halfMinDecorationHeight > this.canvasHeight && (b = this.canvasHeight - this.halfMinDecorationHeight), g = Math.round(b - this.halfMinDecorationHeight), p = Math.round(b + this.halfMinDecorationHeight);
                }
                n.fillStyle = o[e[s].type] || null, n.fillRect(0, v, this.canvasWidth, p - g);
              }
            }
            var E = this.renderer.session.selection.getCursor();
            if (E) {
              var c = this.compensateFoldRows(E.row), v = Math.round((E.row - c) * this.lineHeight * this.heightRatio);
              n.fillStyle = "rgba(0, 0, 0, 0.5)", n.fillRect(0, v, this.canvasWidth, 2);
            }
          }, u.prototype.compensateFoldRows = function(i) {
            var o = this.renderer.session.$foldData, n = 0;
            if (o && o.length > 0)
              for (var t = 0; t < o.length; t++)
                i > o[t].start.row && i < o[t].end.row ? n += i - o[t].start.row : i >= o[t].end.row && (n += o[t].end.row - o[t].start.row);
            return n;
          }, u.prototype.compensateLineWidgets = function(i) {
            var o = this.renderer.session.widgetManager;
            if (o) {
              var n = 0;
              return o.lineWidgets.forEach(function(t, e) {
                i > e && (n += t.rowCount || 0);
              }), n - 1;
            }
            return 0;
          }, u.prototype.setDimensions = function(i) {
            i ? (this.maxHeight = i.maxHeight, this.lineHeight = i.lineHeight, this.canvasHeight = i.height, this.maxHeight < this.canvasHeight ? this.heightRatio = 1 : this.heightRatio = this.canvasHeight / this.maxHeight) : (this.canvasHeight = this.parentEl.parent.scrollHeight || this.canvasHeight, this.canvasWidth = this.parentEl.width || this.canvasWidth, this.heightRatio = this.canvasHeight / this.maxHeight, this.canvas.width = this.canvasWidth, this.canvas.height = this.canvasHeight);
          }, u;
        }()
      );
      A.implement(a.prototype, w), M.Decorator = a;
    }), ace.define("ace/virtual_renderer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/config", "ace/layer/gutter", "ace/layer/marker", "ace/layer/text", "ace/layer/cursor", "ace/scrollbar", "ace/scrollbar", "ace/scrollbar_custom", "ace/scrollbar_custom", "ace/renderloop", "ace/layer/font_metrics", "ace/lib/event_emitter", "ace/css/editor-css", "ace/layer/decorators", "ace/lib/useragent", "ace/layer/text_util"], function(S, M, H) {
      var C = S("./lib/oop"), A = S("./lib/dom"), w = S("./lib/lang"), a = S("./config"), u = S("./layer/gutter").Gutter, i = S("./layer/marker").Marker, o = S("./layer/text").Text, n = S("./layer/cursor").Cursor, t = S("./scrollbar").HScrollBar, e = S("./scrollbar").VScrollBar, r = S("./scrollbar_custom").HScrollBar, s = S("./scrollbar_custom").VScrollBar, l = S("./renderloop").RenderLoop, c = S("./layer/font_metrics").FontMetrics, v = S("./lib/event_emitter").EventEmitter, g = S("./css/editor-css"), p = S("./layer/decorators").Decorator, h = S("./lib/useragent"), b = S("./layer/text_util").isTextToken;
      A.importCssString(g, "ace_editor.css", !1);
      var E = (
        /** @class */
        function() {
          function L(x, O) {
            var $ = this;
            this.container = x || A.createElement("div"), A.addCssClass(this.container, "ace_editor"), A.HI_DPI && A.addCssClass(this.container, "ace_hidpi"), this.setTheme(O), a.get("useStrictCSP") == null && a.set("useStrictCSP", !1), this.$gutter = A.createElement("div"), this.$gutter.className = "ace_gutter", this.container.appendChild(this.$gutter), this.$gutter.setAttribute("aria-hidden", "true"), this.scroller = A.createElement("div"), this.scroller.className = "ace_scroller", this.container.appendChild(this.scroller), this.content = A.createElement("div"), this.content.className = "ace_content", this.scroller.appendChild(this.content), this.$gutterLayer = new u(this.$gutter), this.$gutterLayer.on("changeGutterWidth", this.onGutterResize.bind(this)), this.$markerBack = new i(this.content);
            var y = this.$textLayer = new o(this.content);
            this.canvas = y.element, this.$markerFront = new i(this.content), this.$cursorLayer = new n(this.content), this.$horizScroll = !1, this.$vScroll = !1, this.scrollBar = this.scrollBarV = new e(this.container, this), this.scrollBarH = new t(this.container, this), this.scrollBarV.on("scroll", function(f) {
              $.$scrollAnimation || $.session.setScrollTop(f.data - $.scrollMargin.top);
            }), this.scrollBarH.on("scroll", function(f) {
              $.$scrollAnimation || $.session.setScrollLeft(f.data - $.scrollMargin.left);
            }), this.scrollTop = 0, this.scrollLeft = 0, this.cursorPos = {
              row: 0,
              column: 0
            }, this.$fontMetrics = new c(this.container), this.$textLayer.$setFontMetrics(this.$fontMetrics), this.$textLayer.on("changeCharacterSize", function(f) {
              $.updateCharacterSize(), $.onResize(!0, $.gutterWidth, $.$size.width, $.$size.height), $._signal("changeCharacterSize", f);
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
            }, this.$keepTextAreaAtCursor = !h.isIOS, this.$loop = new l(this.$renderChanges.bind(this), this.container.ownerDocument.defaultView), this.$loop.schedule(this.CHANGE_FULL), this.updateCharacterSize(), this.setPadding(4), this.$addResizeObserver(), a.resetOptions(this), a._signal("renderer", this);
          }
          return L.prototype.updateCharacterSize = function() {
            this.$textLayer.allowBoldFonts != this.$allowBoldFonts && (this.$allowBoldFonts = this.$textLayer.allowBoldFonts, this.setStyle("ace_nobold", !this.$allowBoldFonts)), this.layerConfig.characterWidth = this.characterWidth = this.$textLayer.getCharacterWidth(), this.layerConfig.lineHeight = this.lineHeight = this.$textLayer.getLineHeight(), this.$updatePrintMargin(), A.setStyle(this.scroller.style, "line-height", this.lineHeight + "px");
          }, L.prototype.setSession = function(x) {
            this.session && this.session.doc.off("changeNewLineMode", this.onChangeNewLineMode), this.session = x, x && this.scrollMargin.top && x.getScrollTop() <= 0 && x.setScrollTop(-this.scrollMargin.top), this.$cursorLayer.setSession(x), this.$markerBack.setSession(x), this.$markerFront.setSession(x), this.$gutterLayer.setSession(x), this.$textLayer.setSession(x), x && (this.$loop.schedule(this.CHANGE_FULL), this.session.$setFontMetrics(this.$fontMetrics), this.scrollBarH.scrollLeft = this.scrollBarV.scrollTop = null, this.onChangeNewLineMode = this.onChangeNewLineMode.bind(this), this.onChangeNewLineMode(), this.session.doc.on("changeNewLineMode", this.onChangeNewLineMode));
          }, L.prototype.updateLines = function(x, O, $) {
            if (O === void 0 && (O = 1 / 0), this.$changedLines ? (this.$changedLines.firstRow > x && (this.$changedLines.firstRow = x), this.$changedLines.lastRow < O && (this.$changedLines.lastRow = O)) : this.$changedLines = {
              firstRow: x,
              lastRow: O
            }, this.$changedLines.lastRow < this.layerConfig.firstRow)
              if ($)
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
          }, L.prototype.onResize = function(x, O, $, y) {
            if (!(this.resizing > 2)) {
              this.resizing > 0 ? this.resizing++ : this.resizing = x ? 1 : 0;
              var f = this.container;
              y || (y = f.clientHeight || f.scrollHeight), !y && this.$maxLines && this.lineHeight > 1 && (!f.style.height || f.style.height == "0px") && (f.style.height = "1px", y = f.clientHeight || f.scrollHeight), $ || ($ = f.clientWidth || f.scrollWidth);
              var d = this.$updateCachedSize(x, O, $, y);
              if (this.$resizeTimer && this.$resizeTimer.cancel(), !this.$size.scrollerHeight || !$ && !y)
                return this.resizing = 0;
              x && (this.$gutterLayer.$padding = null), x ? this.$renderChanges(d | this.$changes, !0) : this.$loop.schedule(d | this.$changes), this.resizing && (this.resizing = 0), this.scrollBarH.scrollLeft = this.scrollBarV.scrollTop = null, this.$customScrollbar && this.$updateCustomScrollbar(!0);
            }
          }, L.prototype.$updateCachedSize = function(x, O, $, y) {
            y -= this.$extraHeight || 0;
            var f = 0, d = this.$size, m = {
              width: d.width,
              height: d.height,
              scrollerHeight: d.scrollerHeight,
              scrollerWidth: d.scrollerWidth
            };
            if (y && (x || d.height != y) && (d.height = y, f |= this.CHANGE_SIZE, d.scrollerHeight = d.height, this.$horizScroll && (d.scrollerHeight -= this.scrollBarH.getHeight()), this.scrollBarV.setHeight(d.scrollerHeight), this.scrollBarV.element.style.bottom = this.scrollBarH.getHeight() + "px", f = f | this.CHANGE_SCROLL), $ && (x || d.width != $)) {
              f |= this.CHANGE_SIZE, d.width = $, O == null && (O = this.$showGutter ? this.$gutter.offsetWidth : 0), this.gutterWidth = O, A.setStyle(this.scrollBarH.element.style, "left", O + "px"), A.setStyle(this.scroller.style, "left", O + this.margin.left + "px"), d.scrollerWidth = Math.max(0, $ - O - this.scrollBarV.getWidth() - this.margin.h), A.setStyle(this.$gutter.style, "left", this.margin.left + "px");
              var k = this.scrollBarV.getWidth() + "px";
              A.setStyle(this.scrollBarH.element.style, "right", k), A.setStyle(this.scroller.style, "right", k), A.setStyle(this.scroller.style, "bottom", this.scrollBarH.getHeight()), this.scrollBarH.setWidth(d.scrollerWidth), (this.session && this.session.getUseWrapMode() && this.adjustWrapLimit() || x) && (f |= this.CHANGE_FULL);
            }
            return d.$dirty = !$ || !y, f && this._signal("resize", m), f;
          }, L.prototype.onGutterResize = function(x) {
            var O = this.$showGutter ? x : 0;
            O != this.gutterWidth && (this.$changes |= this.$updateCachedSize(!0, O, this.$size.width, this.$size.height)), this.session.getUseWrapMode() && this.adjustWrapLimit() ? this.$loop.schedule(this.CHANGE_FULL) : this.$size.$dirty ? this.$loop.schedule(this.CHANGE_FULL) : this.$computeLayerConfig();
          }, L.prototype.adjustWrapLimit = function() {
            var x = this.$size.scrollerWidth - this.$padding * 2, O = Math.floor(x / this.characterWidth);
            return this.session.adjustWrapLimit(O, this.$showPrintMargin && this.$printMarginColumn);
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
                var x = A.createElement("div");
                x.className = "ace_layer ace_print-margin-layer", this.$printMarginEl = A.createElement("div"), this.$printMarginEl.className = "ace_print-margin", x.appendChild(this.$printMarginEl), this.content.insertBefore(x, this.content.firstChild);
              }
              var O = this.$printMarginEl.style;
              O.left = Math.round(this.characterWidth * this.$printMarginColumn + this.$padding) + "px", O.visibility = this.$showPrintMargin ? "visible" : "hidden", this.session && this.session.$wrap == -1 && this.adjustWrapLimit();
            }
          }, L.prototype.getContainerElement = function() {
            return this.container;
          }, L.prototype.getMouseEventTarget = function() {
            return this.scroller;
          }, L.prototype.getTextAreaContainer = function() {
            return this.container;
          }, L.prototype.$moveTextAreaToCursor = function() {
            if (!this.$isMousePressed) {
              var x = this.textarea.style, O = this.$composition;
              if (!this.$keepTextAreaAtCursor && !O) {
                A.translate(this.textarea, -100, 0);
                return;
              }
              var $ = this.$cursorLayer.$pixelPos;
              if ($) {
                O && O.markerRange && ($ = this.$cursorLayer.getPixelPosition(O.markerRange.start, !0));
                var y = this.layerConfig, f = $.top, d = $.left;
                f -= y.offset;
                var m = O && O.useTextareaForIME || h.isMobile ? this.lineHeight : 1;
                if (f < 0 || f > y.height - m) {
                  A.translate(this.textarea, 0, 0);
                  return;
                }
                var k = 1, _ = this.$size.height - m;
                if (!O)
                  f += this.lineHeight;
                else if (O.useTextareaForIME) {
                  var T = this.textarea.value;
                  k = this.characterWidth * this.session.$getStringScreenWidth(T)[0];
                } else
                  f += this.lineHeight + 2;
                d -= this.scrollLeft, d > this.$size.scrollerWidth - k && (d = this.$size.scrollerWidth - k), d += this.gutterWidth + this.margin.left, A.setStyle(x, "height", m + "px"), A.setStyle(x, "width", k + "px"), A.translate(this.textarea, Math.min(d, this.$size.scrollerWidth - k), Math.min(f, _));
              }
            }
          }, L.prototype.getFirstVisibleRow = function() {
            return this.layerConfig.firstRow;
          }, L.prototype.getFirstFullyVisibleRow = function() {
            return this.layerConfig.firstRow + (this.layerConfig.offset === 0 ? 0 : 1);
          }, L.prototype.getLastFullyVisibleRow = function() {
            var x = this.layerConfig, O = x.lastRow, $ = this.session.documentToScreenRow(O, 0) * x.lineHeight;
            return $ - this.session.getScrollTop() > x.height - x.lineHeight ? O - 1 : O;
          }, L.prototype.getLastVisibleRow = function() {
            return this.layerConfig.lastRow;
          }, L.prototype.setPadding = function(x) {
            this.$padding = x, this.$textLayer.setPadding(x), this.$cursorLayer.setPadding(x), this.$markerFront.setPadding(x), this.$markerBack.setPadding(x), this.$loop.schedule(this.CHANGE_FULL), this.$updatePrintMargin();
          }, L.prototype.setScrollMargin = function(x, O, $, y) {
            var f = this.scrollMargin;
            f.top = x | 0, f.bottom = O | 0, f.right = y | 0, f.left = $ | 0, f.v = f.top + f.bottom, f.h = f.left + f.right, f.top && this.scrollTop <= 0 && this.session && this.session.setScrollTop(-f.top), this.updateFull();
          }, L.prototype.setMargin = function(x, O, $, y) {
            var f = this.margin;
            f.top = x | 0, f.bottom = O | 0, f.right = y | 0, f.left = $ | 0, f.v = f.top + f.bottom, f.h = f.left + f.right, this.$updateCachedSize(!0, this.gutterWidth, this.$size.width, this.$size.height), this.updateFull();
          }, L.prototype.getHScrollBarAlwaysVisible = function() {
            return this.$hScrollBarAlwaysVisible;
          }, L.prototype.setHScrollBarAlwaysVisible = function(x) {
            this.setOption("hScrollBarAlwaysVisible", x);
          }, L.prototype.getVScrollBarAlwaysVisible = function() {
            return this.$vScrollBarAlwaysVisible;
          }, L.prototype.setVScrollBarAlwaysVisible = function(x) {
            this.setOption("vScrollBarAlwaysVisible", x);
          }, L.prototype.$updateScrollBarV = function() {
            var x = this.layerConfig.maxHeight, O = this.$size.scrollerHeight;
            !this.$maxLines && this.$scrollPastEnd && (x -= (O - this.lineHeight) * this.$scrollPastEnd, this.scrollTop > x - O && (x = this.scrollTop + O, this.scrollBarV.scrollTop = null)), this.scrollBarV.setScrollHeight(x + this.scrollMargin.v), this.scrollBarV.setScrollTop(this.scrollTop + this.scrollMargin.top);
          }, L.prototype.$updateScrollBarH = function() {
            this.scrollBarH.setScrollWidth(this.layerConfig.width + 2 * this.$padding + this.scrollMargin.h), this.scrollBarH.setScrollLeft(this.scrollLeft + this.scrollMargin.left);
          }, L.prototype.freeze = function() {
            this.$frozen = !0;
          }, L.prototype.unfreeze = function() {
            this.$frozen = !1;
          }, L.prototype.$renderChanges = function(x, O) {
            if (this.$changes && (x |= this.$changes, this.$changes = 0), !this.session || !this.container.offsetWidth || this.$frozen || !x && !O) {
              this.$changes |= x;
              return;
            }
            if (this.$size.$dirty)
              return this.$changes |= x, this.onResize(!0);
            this.lineHeight || this.$textLayer.checkForSizeChanges(), this._signal("beforeRender", x), this.session && this.session.$bidiHandler && this.session.$bidiHandler.updateCharacterWidths(this.$fontMetrics);
            var $ = this.layerConfig;
            if (x & this.CHANGE_FULL || x & this.CHANGE_SIZE || x & this.CHANGE_TEXT || x & this.CHANGE_LINES || x & this.CHANGE_SCROLL || x & this.CHANGE_H_SCROLL) {
              if (x |= this.$computeLayerConfig() | this.$loop.clear(), $.firstRow != this.layerConfig.firstRow && $.firstRowScreen == this.layerConfig.firstRowScreen) {
                var y = this.scrollTop + ($.firstRow - Math.max(this.layerConfig.firstRow, 0)) * this.lineHeight;
                y > 0 && (this.scrollTop = y, x = x | this.CHANGE_SCROLL, x |= this.$computeLayerConfig() | this.$loop.clear());
              }
              $ = this.layerConfig, this.$updateScrollBarV(), x & this.CHANGE_H_SCROLL && this.$updateScrollBarH(), A.translate(this.content, -this.scrollLeft, -$.offset);
              var f = $.width + 2 * this.$padding + "px", d = $.minHeight + "px";
              A.setStyle(this.content.style, "width", f), A.setStyle(this.content.style, "height", d);
            }
            if (x & this.CHANGE_H_SCROLL && (A.translate(this.content, -this.scrollLeft, -$.offset), this.scroller.className = this.scrollLeft <= 0 ? "ace_scroller " : "ace_scroller ace_scroll-left ", this.enableKeyboardAccessibility && (this.scroller.className += this.keyboardFocusClassName)), x & this.CHANGE_FULL) {
              this.$changedLines = null, this.$textLayer.update($), this.$showGutter && this.$gutterLayer.update($), this.$customScrollbar && this.$scrollDecorator.$updateDecorators($), this.$markerBack.update($), this.$markerFront.update($), this.$cursorLayer.update($), this.$moveTextAreaToCursor(), this._signal("afterRender", x);
              return;
            }
            if (x & this.CHANGE_SCROLL) {
              this.$changedLines = null, x & this.CHANGE_TEXT || x & this.CHANGE_LINES ? this.$textLayer.update($) : this.$textLayer.scrollLines($), this.$showGutter && (x & this.CHANGE_GUTTER || x & this.CHANGE_LINES ? this.$gutterLayer.update($) : this.$gutterLayer.scrollLines($)), this.$customScrollbar && this.$scrollDecorator.$updateDecorators($), this.$markerBack.update($), this.$markerFront.update($), this.$cursorLayer.update($), this.$moveTextAreaToCursor(), this._signal("afterRender", x);
              return;
            }
            x & this.CHANGE_TEXT ? (this.$changedLines = null, this.$textLayer.update($), this.$showGutter && this.$gutterLayer.update($), this.$customScrollbar && this.$scrollDecorator.$updateDecorators($)) : x & this.CHANGE_LINES ? ((this.$updateLines() || x & this.CHANGE_GUTTER && this.$showGutter) && this.$gutterLayer.update($), this.$customScrollbar && this.$scrollDecorator.$updateDecorators($)) : x & this.CHANGE_TEXT || x & this.CHANGE_GUTTER ? (this.$showGutter && this.$gutterLayer.update($), this.$customScrollbar && this.$scrollDecorator.$updateDecorators($)) : x & this.CHANGE_CURSOR && (this.$highlightGutterLine && this.$gutterLayer.updateLineHighlight($), this.$customScrollbar && this.$scrollDecorator.$updateDecorators($)), x & this.CHANGE_CURSOR && (this.$cursorLayer.update($), this.$moveTextAreaToCursor()), x & (this.CHANGE_MARKER | this.CHANGE_MARKER_FRONT) && this.$markerFront.update($), x & (this.CHANGE_MARKER | this.CHANGE_MARKER_BACK) && this.$markerBack.update($), this._signal("afterRender", x);
          }, L.prototype.$autosize = function() {
            var x = this.session.getScreenLength() * this.lineHeight, O = this.$maxLines * this.lineHeight, $ = Math.min(O, Math.max((this.$minLines || 1) * this.lineHeight, x)) + this.scrollMargin.v + (this.$extraHeight || 0);
            this.$horizScroll && ($ += this.scrollBarH.getHeight()), this.$maxPixelHeight && $ > this.$maxPixelHeight && ($ = this.$maxPixelHeight);
            var y = $ <= 2 * this.lineHeight, f = !y && x > O;
            if ($ != this.desiredHeight || this.$size.height != this.desiredHeight || f != this.$vScroll) {
              f != this.$vScroll && (this.$vScroll = f, this.scrollBarV.setVisible(f));
              var d = this.container.clientWidth;
              this.container.style.height = $ + "px", this.$updateCachedSize(!0, this.$gutterWidth, d, $), this.desiredHeight = $, this._signal("autosize");
            }
          }, L.prototype.$computeLayerConfig = function() {
            var x = this.session, O = this.$size, $ = O.height <= 2 * this.lineHeight, y = this.session.getScreenLength(), f = y * this.lineHeight, d = this.$getLongestLine(), m = !$ && (this.$hScrollBarAlwaysVisible || O.scrollerWidth - d - 2 * this.$padding < 0), k = this.$horizScroll !== m;
            k && (this.$horizScroll = m, this.scrollBarH.setVisible(m));
            var _ = this.$vScroll;
            this.$maxLines && this.lineHeight > 1 && (this.$autosize(), $ = O.height <= 2 * this.lineHeight);
            var T = O.scrollerHeight + this.lineHeight, I = !this.$maxLines && this.$scrollPastEnd ? (O.scrollerHeight - this.lineHeight) * this.$scrollPastEnd : 0;
            f += I;
            var D = this.scrollMargin;
            this.session.setScrollTop(Math.max(-D.top, Math.min(this.scrollTop, f - O.scrollerHeight + D.bottom))), this.session.setScrollLeft(Math.max(-D.left, Math.min(this.scrollLeft, d + 2 * this.$padding - O.scrollerWidth + D.right)));
            var F = !$ && (this.$vScrollBarAlwaysVisible || O.scrollerHeight - f + I < 0 || this.scrollTop > D.top), B = _ !== F;
            B && (this.$vScroll = F, this.scrollBarV.setVisible(F));
            var z = this.scrollTop % this.lineHeight, W = Math.ceil(T / this.lineHeight) - 1, P = Math.max(0, Math.round((this.scrollTop - z) / this.lineHeight)), V = P + W, j, Y, G = this.lineHeight;
            P = x.screenToDocumentRow(P, 0);
            var J = x.getFoldLine(P);
            J && (P = J.start.row), j = x.documentToScreenRow(P, 0), Y = x.getRowLength(P) * G, V = Math.min(x.screenToDocumentRow(V, 0), x.getLength() - 1), T = O.scrollerHeight + x.getRowLength(V) * G + Y, z = this.scrollTop - j * G;
            var ie = 0;
            return (this.layerConfig.width != d || k) && (ie = this.CHANGE_H_SCROLL), (k || B) && (ie |= this.$updateCachedSize(!0, this.gutterWidth, O.width, O.height), this._signal("scrollbarVisibilityChanged"), B && (d = this.$getLongestLine())), this.layerConfig = {
              width: d,
              padding: this.$padding,
              firstRow: P,
              firstRowScreen: j,
              lastRow: V,
              lineHeight: G,
              characterWidth: this.characterWidth,
              minHeight: T,
              maxHeight: f,
              offset: z,
              gutterOffset: G ? Math.max(0, Math.ceil((z + O.height - O.scrollerHeight) / G)) : 0,
              height: this.$size.scrollerHeight
            }, this.session.$bidiHandler && this.session.$bidiHandler.setContentWidth(d - this.$padding), ie;
          }, L.prototype.$updateLines = function() {
            if (this.$changedLines) {
              var x = this.$changedLines.firstRow, O = this.$changedLines.lastRow;
              this.$changedLines = null;
              var $ = this.layerConfig;
              if (!(x > $.lastRow + 1) && !(O < $.firstRow)) {
                if (O === 1 / 0) {
                  this.$showGutter && this.$gutterLayer.update($), this.$textLayer.update($);
                  return;
                }
                return this.$textLayer.updateLines($, x, O), !0;
              }
            }
          }, L.prototype.$getLongestLine = function() {
            var x = this.session.getScreenWidth();
            return this.showInvisibles && !this.session.$useWrapMode && (x += 1), this.$textLayer && x > this.$textLayer.MAX_LINE_LENGTH && (x = this.$textLayer.MAX_LINE_LENGTH + 30), Math.max(this.$size.scrollerWidth - 2 * this.$padding, Math.round(x * this.characterWidth));
          }, L.prototype.updateFrontMarkers = function() {
            this.$markerFront.setMarkers(this.session.getMarkers(!0)), this.$loop.schedule(this.CHANGE_MARKER_FRONT);
          }, L.prototype.updateBackMarkers = function() {
            this.$markerBack.setMarkers(this.session.getMarkers()), this.$loop.schedule(this.CHANGE_MARKER_BACK);
          }, L.prototype.addGutterDecoration = function(x, O) {
            this.$gutterLayer.addGutterDecoration(x, O);
          }, L.prototype.removeGutterDecoration = function(x, O) {
            this.$gutterLayer.removeGutterDecoration(x, O);
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
          }, L.prototype.scrollSelectionIntoView = function(x, O, $) {
            this.scrollCursorIntoView(x, $), this.scrollCursorIntoView(O, $);
          }, L.prototype.scrollCursorIntoView = function(x, O, $) {
            if (this.$size.scrollerHeight !== 0) {
              var y = this.$cursorLayer.getPixelPosition(x), f = y.left, d = y.top, m = $ && $.top || 0, k = $ && $.bottom || 0;
              this.$scrollAnimation && (this.$stopAnimation = !0);
              var _ = this.$scrollAnimation ? this.session.getScrollTop() : this.scrollTop;
              _ + m > d ? (O && _ + m > d + this.lineHeight && (d -= O * this.$size.scrollerHeight), d === 0 && (d = -this.scrollMargin.top), this.session.setScrollTop(d)) : _ + this.$size.scrollerHeight - k < d + this.lineHeight && (O && _ + this.$size.scrollerHeight - k < d - this.lineHeight && (d += O * this.$size.scrollerHeight), this.session.setScrollTop(d + this.lineHeight + k - this.$size.scrollerHeight));
              var T = this.scrollLeft, I = 2 * this.layerConfig.characterWidth;
              f - I < T ? (f -= I, f < this.$padding + I && (f = -this.scrollMargin.left), this.session.setScrollLeft(f)) : (f += I, T + this.$size.scrollerWidth < f + this.characterWidth ? this.session.setScrollLeft(Math.round(f + this.characterWidth - this.$size.scrollerWidth)) : T <= this.$padding && f - T < this.characterWidth && this.session.setScrollLeft(0));
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
          }, L.prototype.alignCursor = function(x, O) {
            typeof x == "number" && (x = { row: x, column: 0 });
            var $ = this.$cursorLayer.getPixelPosition(x), y = this.$size.scrollerHeight - this.lineHeight, f = $.top - y * (O || 0);
            return this.session.setScrollTop(f), f;
          }, L.prototype.$calcSteps = function(x, O) {
            var $ = 0, y = this.STEPS, f = [], d = function(m, k, _) {
              return _ * (Math.pow(m - 1, 3) + 1) + k;
            };
            for ($ = 0; $ < y; ++$)
              f.push(d($ / this.STEPS, x, O - x));
            return f;
          }, L.prototype.scrollToLine = function(x, O, $, y) {
            var f = this.$cursorLayer.getPixelPosition({ row: x, column: 0 }), d = f.top;
            O && (d -= this.$size.scrollerHeight / 2);
            var m = this.scrollTop;
            this.session.setScrollTop(d), $ !== !1 && this.animateScrolling(m, y);
          }, L.prototype.animateScrolling = function(x, O) {
            var $ = this.scrollTop;
            if (!this.$animatedScroll)
              return;
            var y = this;
            if (x == $)
              return;
            if (this.$scrollAnimation) {
              var f = this.$scrollAnimation.steps;
              if (f.length && (x = f[0], x == $))
                return;
            }
            var d = y.$calcSteps(x, $);
            this.$scrollAnimation = { from: x, to: $, steps: d }, clearInterval(this.$timer), y.session.setScrollTop(d.shift()), y.session.$scrollTop = $;
            function m() {
              y.$timer = clearInterval(y.$timer), y.$scrollAnimation = null, y.$stopAnimation = !1, O && O();
            }
            this.$timer = setInterval(function() {
              if (y.$stopAnimation) {
                m();
                return;
              }
              if (!y.session)
                return clearInterval(y.$timer);
              d.length ? (y.session.setScrollTop(d.shift()), y.session.$scrollTop = $) : $ != null ? (y.session.$scrollTop = -1, y.session.setScrollTop($), $ = null) : m();
            }, 10);
          }, L.prototype.scrollToY = function(x) {
            this.scrollTop !== x && (this.$loop.schedule(this.CHANGE_SCROLL), this.scrollTop = x);
          }, L.prototype.scrollToX = function(x) {
            this.scrollLeft !== x && (this.scrollLeft = x), this.$loop.schedule(this.CHANGE_H_SCROLL);
          }, L.prototype.scrollTo = function(x, O) {
            this.session.setScrollTop(O), this.session.setScrollLeft(x);
          }, L.prototype.scrollBy = function(x, O) {
            O && this.session.setScrollTop(this.session.getScrollTop() + O), x && this.session.setScrollLeft(this.session.getScrollLeft() + x);
          }, L.prototype.isScrollableBy = function(x, O) {
            if (O < 0 && this.session.getScrollTop() >= 1 - this.scrollMargin.top || O > 0 && this.session.getScrollTop() + this.$size.scrollerHeight - this.layerConfig.maxHeight < -1 + this.scrollMargin.bottom || x < 0 && this.session.getScrollLeft() >= 1 - this.scrollMargin.left || x > 0 && this.session.getScrollLeft() + this.$size.scrollerWidth - this.layerConfig.width < -1 + this.scrollMargin.right)
              return !0;
          }, L.prototype.pixelToScreenCoordinates = function(x, O) {
            var $;
            if (this.$hasCssTransforms) {
              $ = { top: 0, left: 0 };
              var y = this.$fontMetrics.transformCoordinates([x, O]);
              x = y[1] - this.gutterWidth - this.margin.left, O = y[0];
            } else
              $ = this.scroller.getBoundingClientRect();
            var f = x + this.scrollLeft - $.left - this.$padding, d = f / this.characterWidth, m = Math.floor((O + this.scrollTop - $.top) / this.lineHeight), k = this.$blockCursor ? Math.floor(d) : Math.round(d);
            return { row: m, column: k, side: d - k > 0 ? 1 : -1, offsetX: f };
          }, L.prototype.screenToTextCoordinates = function(x, O) {
            var $;
            if (this.$hasCssTransforms) {
              $ = { top: 0, left: 0 };
              var y = this.$fontMetrics.transformCoordinates([x, O]);
              x = y[1] - this.gutterWidth - this.margin.left, O = y[0];
            } else
              $ = this.scroller.getBoundingClientRect();
            var f = x + this.scrollLeft - $.left - this.$padding, d = f / this.characterWidth, m = this.$blockCursor ? Math.floor(d) : Math.round(d), k = Math.floor((O + this.scrollTop - $.top) / this.lineHeight);
            return this.session.screenToDocumentPosition(k, Math.max(m, 0), f);
          }, L.prototype.textToScreenCoordinates = function(x, O) {
            var $ = this.scroller.getBoundingClientRect(), y = this.session.documentToScreenPosition(x, O), f = this.$padding + (this.session.$bidiHandler.isBidiRow(y.row, x) ? this.session.$bidiHandler.getPosLeft(y.column) : Math.round(y.column * this.characterWidth)), d = y.row * this.lineHeight;
            return {
              pageX: $.left + f - this.scrollLeft,
              pageY: $.top + d - this.scrollTop
            };
          }, L.prototype.visualizeFocus = function() {
            A.addCssClass(this.container, "ace_focus");
          }, L.prototype.visualizeBlur = function() {
            A.removeCssClass(this.container, "ace_focus");
          }, L.prototype.showComposition = function(x) {
            this.$composition = x, x.cssText || (x.cssText = this.textarea.style.cssText), x.useTextareaForIME == null && (x.useTextareaForIME = this.$useTextareaForIME), this.$useTextareaForIME ? (A.addCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = "", this.$moveTextAreaToCursor(), this.$cursorLayer.element.style.display = "none") : x.markerId = this.session.addMarker(x.markerRange, "ace_composition_marker", "text");
          }, L.prototype.setCompositionText = function(x) {
            var O = this.session.selection.cursor;
            this.addToken(x, "composition_placeholder", O.row, O.column), this.$moveTextAreaToCursor();
          }, L.prototype.hideComposition = function() {
            if (this.$composition) {
              this.$composition.markerId && this.session.removeMarker(this.$composition.markerId), A.removeCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = this.$composition.cssText;
              var x = this.session.selection.cursor;
              this.removeExtraToken(x.row, x.column), this.$composition = null, this.$cursorLayer.element.style.display = "";
            }
          }, L.prototype.setGhostText = function(x, O) {
            var $ = this.session.selection.cursor, y = O || { row: $.row, column: $.column };
            this.removeGhostText();
            var f = this.$calculateWrappedTextChunks(x, y);
            this.addToken(f[0].text, "ghost_text", y.row, y.column), this.$ghostText = {
              text: x,
              position: {
                row: y.row,
                column: y.column
              }
            };
            var d = A.createElement("div");
            if (f.length > 1) {
              var m = this.hideTokensAfterPosition(y.row, y.column), k;
              f.slice(1).forEach(function(B) {
                var z = A.createElement("div"), W = A.createElement("span");
                W.className = "ace_ghost_text", B.wrapped && (z.className = "ghost_text_line_wrapped"), B.text.length === 0 && (B.text = " "), W.appendChild(A.createTextNode(B.text)), z.appendChild(W), d.appendChild(z), k = z;
              }), m.forEach(function(B) {
                var z = A.createElement("span");
                b(B.type) || (z.className = "ace_" + B.type.replace(/\./g, " ace_")), z.appendChild(A.createTextNode(B.value)), k.appendChild(z);
              }), this.$ghostTextWidget = {
                el: d,
                row: y.row,
                column: y.column,
                className: "ace_ghost_text_container"
              }, this.session.widgetManager.addLineWidget(this.$ghostTextWidget);
              var _ = this.$cursorLayer.getPixelPosition(y, !0), T = this.container, I = T.getBoundingClientRect().height, D = f.length * this.lineHeight, F = D < I - _.top;
              if (F)
                return;
              D < I ? this.scrollBy(0, (f.length - 1) * this.lineHeight) : this.scrollToRow(y.row);
            }
          }, L.prototype.$calculateWrappedTextChunks = function(x, O) {
            var $ = this.$size.scrollerWidth - this.$padding * 2, y = Math.floor($ / this.characterWidth) - 2;
            y = y <= 0 ? 60 : y;
            for (var f = x.split(/\r?\n/), d = [], m = 0; m < f.length; m++) {
              var k = this.session.$getDisplayTokens(f[m], O.column), _ = this.session.$computeWrapSplits(k, y, this.session.$tabSize);
              if (_.length > 0) {
                var T = 0;
                _.push(f[m].length);
                for (var I = 0; I < _.length; I++) {
                  var D = f[m].slice(T, _[I]);
                  d.push({ text: D, wrapped: !0 }), T = _[I];
                }
              } else
                d.push({ text: f[m], wrapped: !1 });
            }
            return d;
          }, L.prototype.removeGhostText = function() {
            if (this.$ghostText) {
              var x = this.$ghostText.position;
              this.removeExtraToken(x.row, x.column), this.$ghostTextWidget && (this.session.widgetManager.removeLineWidget(this.$ghostTextWidget), this.$ghostTextWidget = null), this.$ghostText = null;
            }
          }, L.prototype.addToken = function(x, O, $, y) {
            var f = this.session;
            f.bgTokenizer.lines[$] = null;
            var d = { type: O, value: x }, m = f.getTokens($);
            if (y == null || !m.length)
              m.push(d);
            else
              for (var k = 0, _ = 0; _ < m.length; _++) {
                var T = m[_];
                if (k += T.value.length, y <= k) {
                  var I = T.value.length - (k - y), D = T.value.slice(0, I), F = T.value.slice(I);
                  m.splice(_, 1, { type: T.type, value: D }, d, { type: T.type, value: F });
                  break;
                }
              }
            this.updateLines($, $);
          }, L.prototype.hideTokensAfterPosition = function(x, O) {
            for (var $ = this.session.getTokens(x), y = 0, f = !1, d = [], m = 0; m < $.length; m++) {
              var k = $[m];
              if (y += k.value.length, k.type !== "ghost_text") {
                if (f) {
                  d.push({ type: k.type, value: k.value }), k.type = "hidden_token";
                  continue;
                }
                y === O && (f = !0);
              }
            }
            return this.updateLines(x, x), d;
          }, L.prototype.removeExtraToken = function(x, O) {
            this.session.bgTokenizer.lines[x] = null, this.updateLines(x, x);
          }, L.prototype.setTheme = function(x, O) {
            var $ = this;
            if (this.$themeId = x, $._dispatchEvent("themeChange", { theme: x }), !x || typeof x == "string") {
              var y = x || this.$options.theme.initialValue;
              a.loadModule(["theme", y], f);
            } else
              f(x);
            function f(d) {
              if ($.$themeId != x)
                return O && O();
              if (!d || !d.cssClass)
                throw new Error("couldn't load module " + x + " or it didn't call define");
              d.$id && ($.$themeId = d.$id), A.importCssString(d.cssText, d.cssClass, $.container), $.theme && A.removeCssClass($.container, $.theme.cssClass);
              var m = "padding" in d ? d.padding : "padding" in ($.theme || {}) ? 4 : $.$padding;
              $.$padding && m != $.$padding && $.setPadding(m), $.$theme = d.cssClass, $.theme = d, A.addCssClass($.container, d.cssClass), A.setCssClass($.container, "ace_dark", d.isDark), $.$size && ($.$size.width = 0, $.$updateSizeAsync()), $._dispatchEvent("themeLoaded", { theme: d }), O && O(), h.isSafari && $.scroller && ($.scroller.style.background = "red", $.scroller.style.background = "");
            }
          }, L.prototype.getTheme = function() {
            return this.$themeId;
          }, L.prototype.setStyle = function(x, O) {
            A.setCssClass(this.container, x, O !== !1);
          }, L.prototype.unsetStyle = function(x) {
            A.removeCssClass(this.container, x);
          }, L.prototype.setCursorStyle = function(x) {
            A.setStyle(this.scroller.style, "cursor", x);
          }, L.prototype.setMouseCursor = function(x) {
            A.setStyle(this.scroller.style, "cursor", x);
          }, L.prototype.attachToShadowRoot = function() {
            A.importCssString(g, "ace_editor.css", this.container);
          }, L.prototype.destroy = function() {
            this.freeze(), this.$fontMetrics.destroy(), this.$cursorLayer.destroy(), this.removeAllListeners(), this.container.textContent = "", this.setOption("useResizeObserver", !1);
          }, L.prototype.$updateCustomScrollbar = function(x) {
            var O = this;
            this.$horizScroll = this.$vScroll = null, this.scrollBarV.element.remove(), this.scrollBarH.element.remove(), this.$scrollDecorator && delete this.$scrollDecorator, x === !0 ? (this.scrollBarV = new s(this.container, this), this.scrollBarH = new r(this.container, this), this.scrollBarV.setHeight(this.$size.scrollerHeight), this.scrollBarH.setWidth(this.$size.scrollerWidth), this.scrollBarV.addEventListener("scroll", function($) {
              O.$scrollAnimation || O.session.setScrollTop($.data - O.scrollMargin.top);
            }), this.scrollBarH.addEventListener("scroll", function($) {
              O.$scrollAnimation || O.session.setScrollLeft($.data - O.scrollMargin.left);
            }), this.$scrollDecorator = new p(this.scrollBarV, this), this.$scrollDecorator.$updateDecorators()) : (this.scrollBarV = new e(this.container, this), this.scrollBarH = new t(this.container, this), this.scrollBarV.addEventListener("scroll", function($) {
              O.$scrollAnimation || O.session.setScrollTop($.data - O.scrollMargin.top);
            }), this.scrollBarH.addEventListener("scroll", function($) {
              O.$scrollAnimation || O.session.setScrollLeft($.data - O.scrollMargin.left);
            }));
          }, L.prototype.$addResizeObserver = function() {
            if (!(!window.ResizeObserver || this.$resizeObserver)) {
              var x = this;
              this.$resizeTimer = w.delayedCall(function() {
                x.destroyed || x.onResize();
              }, 50), this.$resizeObserver = new window.ResizeObserver(function(O) {
                var $ = O[0].contentRect.width, y = O[0].contentRect.height;
                Math.abs(x.$size.width - $) > 1 || Math.abs(x.$size.height - y) > 1 ? x.$resizeTimer.delay() : x.$resizeTimer.cancel();
              }), this.$resizeObserver.observe(this.container);
            }
          }, L;
        }()
      );
      E.prototype.CHANGE_CURSOR = 1, E.prototype.CHANGE_MARKER = 2, E.prototype.CHANGE_GUTTER = 4, E.prototype.CHANGE_SCROLL = 8, E.prototype.CHANGE_LINES = 16, E.prototype.CHANGE_TEXT = 32, E.prototype.CHANGE_SIZE = 64, E.prototype.CHANGE_MARKER_BACK = 128, E.prototype.CHANGE_MARKER_FRONT = 256, E.prototype.CHANGE_FULL = 512, E.prototype.CHANGE_H_SCROLL = 1024, E.prototype.$changes = 0, E.prototype.$padding = null, E.prototype.$frozen = !1, E.prototype.STEPS = 8, C.implement(E.prototype, v), a.defineOptions(E.prototype, "renderer", {
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
            A.setCssClass(this.$gutter, "ace_fade-fold-widgets", L);
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
      }), M.VirtualRenderer = E;
    }), ace.define("ace/worker/worker_client", ["require", "exports", "module", "ace/lib/oop", "ace/lib/net", "ace/lib/event_emitter", "ace/config"], function(S, M, H) {
      var C = S("../lib/oop"), A = S("../lib/net"), w = S("../lib/event_emitter").EventEmitter, a = S("../config");
      function u(t) {
        var e = "importScripts('" + A.qualifyURL(t) + "');";
        try {
          return new Blob([e], { type: "application/javascript" });
        } catch {
          var r = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder, s = new r();
          return s.append(e), s.getBlob("application/javascript");
        }
      }
      function i(t) {
        if (typeof Worker > "u")
          return { postMessage: function() {
          }, terminate: function() {
          } };
        if (a.get("loadWorkerFromBlob")) {
          var e = u(t), r = window.URL || window.webkitURL, s = r.createObjectURL(e);
          return new Worker(s);
        }
        return new Worker(t);
      }
      var o = function(t) {
        t.postMessage || (t = this.$createWorkerFromOldConfig.apply(this, arguments)), this.$worker = t, this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this), this.changeListener = this.changeListener.bind(this), this.onMessage = this.onMessage.bind(this), this.callbackId = 1, this.callbacks = {}, this.$worker.onmessage = this.onMessage;
      };
      (function() {
        C.implement(this, w), this.$createWorkerFromOldConfig = function(t, e, r, s, l) {
          if (S.nameToUrl && !S.toUrl && (S.toUrl = S.nameToUrl), a.get("packaged") || !S.toUrl)
            s = s || a.moduleUrl(e, "worker");
          else {
            var c = this.$normalizePath;
            s = s || c(S.toUrl("ace/worker/worker.js", null, "_"));
            var v = {};
            t.forEach(function(g) {
              v[g] = c(S.toUrl(g, null, "_").replace(/(\.js)?(\?.*)?$/, ""));
            });
          }
          return this.$worker = i(s), l && this.send("importScripts", l), this.$worker.postMessage({
            init: !0,
            tlns: v,
            module: e,
            classname: r
          }), this.$worker;
        }, this.onMessage = function(t) {
          var e = t.data;
          switch (e.type) {
            case "event":
              this._signal(e.name, { data: e.data });
              break;
            case "call":
              var r = this.callbacks[e.id];
              r && (r(e.data), delete this.callbacks[e.id]);
              break;
            case "error":
              this.reportError(e.data);
              break;
            case "log":
              window.console && console.log && console.log.apply(console, e.data);
              break;
          }
        }, this.reportError = function(t) {
          window.console && console.error && console.error(t);
        }, this.$normalizePath = function(t) {
          return A.qualifyURL(t);
        }, this.terminate = function() {
          this._signal("terminate", {}), this.deltaQueue = null, this.$worker.terminate(), this.$worker.onerror = function(t) {
            t.preventDefault();
          }, this.$worker = null, this.$doc && this.$doc.off("change", this.changeListener), this.$doc = null;
        }, this.send = function(t, e) {
          this.$worker.postMessage({ command: t, args: e });
        }, this.call = function(t, e, r) {
          if (r) {
            var s = this.callbackId++;
            this.callbacks[s] = r, e.push(s);
          }
          this.send(t, e);
        }, this.emit = function(t, e) {
          try {
            e.data && e.data.err && (e.data.err = { message: e.data.err.message, stack: e.data.err.stack, code: e.data.err.code }), this.$worker && this.$worker.postMessage({ event: t, data: { data: e.data } });
          } catch (r) {
            console.error(r.stack);
          }
        }, this.attachToDocument = function(t) {
          this.$doc && this.terminate(), this.$doc = t, this.call("setValue", [t.getValue()]), t.on("change", this.changeListener, !0);
        }, this.changeListener = function(t) {
          this.deltaQueue || (this.deltaQueue = [], setTimeout(this.$sendDeltaQueue, 0)), t.action == "insert" ? this.deltaQueue.push(t.start, t.lines) : this.deltaQueue.push(t.start, t.end);
        }, this.$sendDeltaQueue = function() {
          var t = this.deltaQueue;
          t && (this.deltaQueue = null, t.length > 50 && t.length > this.$doc.getLength() >> 1 ? this.call("setValue", [this.$doc.getValue()]) : this.emit("change", { data: t }));
        };
      }).call(o.prototype);
      var n = function(t, e, r) {
        var s = null, l = !1, c = Object.create(w), v = [], g = new o({
          messageBuffer: v,
          terminate: function() {
          },
          postMessage: function(h) {
            v.push(h), s && (l ? setTimeout(p) : p());
          }
        });
        g.setEmitSync = function(h) {
          l = h;
        };
        var p = function() {
          var h = v.shift();
          h.command ? s[h.command].apply(s, h.args) : h.event && c._signal(h.event, h.data);
        };
        return c.postMessage = function(h) {
          g.onMessage({ data: h });
        }, c.callback = function(h, b) {
          this.postMessage({ type: "call", id: b, data: h });
        }, c.emit = function(h, b) {
          this.postMessage({ type: "event", name: h, data: b });
        }, a.loadModule(["worker", e], function(h) {
          for (s = new h[r](c); v.length; )
            p();
        }), g;
      };
      M.UIWorkerClient = n, M.WorkerClient = o, M.createWorker = i;
    }), ace.define("ace/placeholder", ["require", "exports", "module", "ace/range", "ace/lib/event_emitter", "ace/lib/oop"], function(S, M, H) {
      var C = S("./range").Range, A = S("./lib/event_emitter").EventEmitter, w = S("./lib/oop"), a = (
        /** @class */
        function() {
          function u(i, o, n, t, e, r) {
            var s = this;
            this.length = o, this.session = i, this.doc = i.getDocument(), this.mainClass = e, this.othersClass = r, this.$onUpdate = this.onUpdate.bind(this), this.doc.on("change", this.$onUpdate, !0), this.$others = t, this.$onCursorChange = function() {
              setTimeout(function() {
                s.onCursorChange();
              });
            }, this.$pos = n;
            var l = i.getUndoManager().$undoStack || i.getUndoManager().$undostack || { length: -1 };
            this.$undoStackDepth = l.length, this.setup(), i.selection.on("changeCursor", this.$onCursorChange);
          }
          return u.prototype.setup = function() {
            var i = this, o = this.doc, n = this.session;
            this.selectionBefore = n.selection.toJSON(), n.selection.inMultiSelectMode && n.selection.toSingleRange(), this.pos = o.createAnchor(this.$pos.row, this.$pos.column);
            var t = this.pos;
            t.$insertRight = !0, t.detach(), t.markerId = n.addMarker(new C(t.row, t.column, t.row, t.column + this.length), this.mainClass, null, !1), this.others = [], this.$others.forEach(function(e) {
              var r = o.createAnchor(e.row, e.column);
              r.$insertRight = !0, r.detach(), i.others.push(r);
            }), n.setUndoSelect(!1);
          }, u.prototype.showOtherMarkers = function() {
            if (!this.othersActive) {
              var i = this.session, o = this;
              this.othersActive = !0, this.others.forEach(function(n) {
                n.markerId = i.addMarker(new C(n.row, n.column, n.row, n.column + o.length), o.othersClass, null, !1);
              });
            }
          }, u.prototype.hideOtherMarkers = function() {
            if (this.othersActive) {
              this.othersActive = !1;
              for (var i = 0; i < this.others.length; i++)
                this.session.removeMarker(this.others[i].markerId);
            }
          }, u.prototype.onUpdate = function(i) {
            if (this.$updating)
              return this.updateAnchors(i);
            var o = i;
            if (o.start.row === o.end.row && o.start.row === this.pos.row) {
              this.$updating = !0;
              var n = i.action === "insert" ? o.end.column - o.start.column : o.start.column - o.end.column, t = o.start.column >= this.pos.column && o.start.column <= this.pos.column + this.length + 1, e = o.start.column - this.pos.column;
              if (this.updateAnchors(i), t && (this.length += n), t && !this.session.$fromUndo) {
                if (i.action === "insert")
                  for (var r = this.others.length - 1; r >= 0; r--) {
                    var s = this.others[r], l = { row: s.row, column: s.column + e };
                    this.doc.insertMergedLines(l, i.lines);
                  }
                else if (i.action === "remove")
                  for (var r = this.others.length - 1; r >= 0; r--) {
                    var s = this.others[r], l = { row: s.row, column: s.column + e };
                    this.doc.remove(new C(l.row, l.column, l.row, l.column - n));
                  }
              }
              this.$updating = !1, this.updateMarkers();
            }
          }, u.prototype.updateAnchors = function(i) {
            this.pos.onChange(i);
            for (var o = this.others.length; o--; )
              this.others[o].onChange(i);
            this.updateMarkers();
          }, u.prototype.updateMarkers = function() {
            if (!this.$updating) {
              var i = this, o = this.session, n = function(e, r) {
                o.removeMarker(e.markerId), e.markerId = o.addMarker(new C(e.row, e.column, e.row, e.column + i.length), r, null, !1);
              };
              n(this.pos, this.mainClass);
              for (var t = this.others.length; t--; )
                n(this.others[t], this.othersClass);
            }
          }, u.prototype.onCursorChange = function(i) {
            if (!(this.$updating || !this.session)) {
              var o = this.session.selection.getCursor();
              o.row === this.pos.row && o.column >= this.pos.column && o.column <= this.pos.column + this.length ? (this.showOtherMarkers(), this._emit("cursorEnter", i)) : (this.hideOtherMarkers(), this._emit("cursorLeave", i));
            }
          }, u.prototype.detach = function() {
            this.session.removeMarker(this.pos && this.pos.markerId), this.hideOtherMarkers(), this.doc.off("change", this.$onUpdate), this.session.selection.off("changeCursor", this.$onCursorChange), this.session.setUndoSelect(!0), this.session = null;
          }, u.prototype.cancel = function() {
            if (this.$undoStackDepth !== -1) {
              for (var i = this.session.getUndoManager(), o = (i.$undoStack || i.$undostack).length - this.$undoStackDepth, n = 0; n < o; n++)
                i.undo(this.session, !0);
              this.selectionBefore && this.session.selection.fromJSON(this.selectionBefore);
            }
          }, u;
        }()
      );
      w.implement(a.prototype, A), M.PlaceHolder = a;
    }), ace.define("ace/mouse/multi_select_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function(S, M, H) {
      var C = S("../lib/event"), A = S("../lib/useragent");
      function w(u, i) {
        return u.row == i.row && u.column == i.column;
      }
      function a(u) {
        var i = u.domEvent, o = i.altKey, n = i.shiftKey, t = i.ctrlKey, e = u.getAccelKey(), r = u.getButton();
        if (t && A.isMac && (r = i.button), u.editor.inMultiSelectMode && r == 2) {
          u.editor.textInput.onContextMenu(u.domEvent);
          return;
        }
        if (!t && !o && !e) {
          r === 0 && u.editor.inMultiSelectMode && u.editor.exitMultiSelectMode();
          return;
        }
        if (r === 0) {
          var s = u.editor, l = s.selection, c = s.inMultiSelectMode, v = u.getDocumentPosition(), g = l.getCursor(), p = u.inSelection() || l.isEmpty() && w(v, g), h = u.x, b = u.y, E = function(D) {
            h = D.clientX, b = D.clientY;
          }, L = s.session, x = s.renderer.pixelToScreenCoordinates(h, b), O = x, $;
          if (s.$mouseHandler.$enableJumpToDef)
            t && o || e && o ? $ = n ? "block" : "add" : o && s.$blockSelectEnabled && ($ = "block");
          else if (e && !o) {
            if ($ = "add", !c && n)
              return;
          } else o && s.$blockSelectEnabled && ($ = "block");
          if ($ && A.isMac && i.ctrlKey && s.$mouseHandler.cancelContextMenu(), $ == "add") {
            if (!c && p)
              return;
            if (!c) {
              var y = l.toOrientedRange();
              s.addSelectionMarker(y);
            }
            var f = l.rangeList.rangeAtPoint(v);
            s.inVirtualSelectionMode = !0, n && (f = null, y = l.ranges[0] || y, s.removeSelectionMarker(y)), s.once("mouseup", function() {
              var D = l.toOrientedRange();
              f && D.isEmpty() && w(f.cursor, D.cursor) ? l.substractPoint(D.cursor) : (n ? l.substractPoint(y.cursor) : y && (s.removeSelectionMarker(y), l.addRange(y)), l.addRange(D)), s.inVirtualSelectionMode = !1;
            });
          } else if ($ == "block") {
            u.stop(), s.inVirtualSelectionMode = !0;
            var d, m = [], k = function() {
              var D = s.renderer.pixelToScreenCoordinates(h, b), F = L.screenToDocumentPosition(D.row, D.column, D.offsetX);
              w(O, D) && w(F, l.lead) || (O = D, s.selection.moveToPosition(F), s.renderer.scrollCursorIntoView(), s.removeSelectionMarkers(m), m = l.rectangularRangeBlock(O, x), s.$mouseHandler.$clickSelection && m.length == 1 && m[0].isEmpty() && (m[0] = s.$mouseHandler.$clickSelection.clone()), m.forEach(s.addSelectionMarker, s), s.updateSelectionMarkers());
            };
            c && !e ? l.toSingleRange() : !c && e && (d = l.toOrientedRange(), s.addSelectionMarker(d)), n ? x = L.documentToScreenPosition(l.lead) : l.moveToPosition(v), O = { row: -1, column: -1 };
            var _ = function(D) {
              k(), clearInterval(I), s.removeSelectionMarkers(m), m.length || (m = [l.toOrientedRange()]), d && (s.removeSelectionMarker(d), l.toSingleRange(d));
              for (var F = 0; F < m.length; F++)
                l.addRange(m[F]);
              s.inVirtualSelectionMode = !1, s.$mouseHandler.$clickSelection = null;
            }, T = k;
            C.capture(s.container, E, _);
            var I = setInterval(function() {
              T();
            }, 20);
            return u.preventDefault();
          }
        }
      }
      M.onMouseDown = a;
    }), ace.define("ace/commands/multi_select_commands", ["require", "exports", "module", "ace/keyboard/hash_handler"], function(S, M, H) {
      M.defaultCommands = [{
        name: "addCursorAbove",
        description: "Add cursor above",
        exec: function(A) {
          A.selectMoreLines(-1);
        },
        bindKey: { win: "Ctrl-Alt-Up", mac: "Ctrl-Alt-Up" },
        scrollIntoView: "cursor",
        readOnly: !0
      }, {
        name: "addCursorBelow",
        description: "Add cursor below",
        exec: function(A) {
          A.selectMoreLines(1);
        },
        bindKey: { win: "Ctrl-Alt-Down", mac: "Ctrl-Alt-Down" },
        scrollIntoView: "cursor",
        readOnly: !0
      }, {
        name: "addCursorAboveSkipCurrent",
        description: "Add cursor above (skip current)",
        exec: function(A) {
          A.selectMoreLines(-1, !0);
        },
        bindKey: { win: "Ctrl-Alt-Shift-Up", mac: "Ctrl-Alt-Shift-Up" },
        scrollIntoView: "cursor",
        readOnly: !0
      }, {
        name: "addCursorBelowSkipCurrent",
        description: "Add cursor below (skip current)",
        exec: function(A) {
          A.selectMoreLines(1, !0);
        },
        bindKey: { win: "Ctrl-Alt-Shift-Down", mac: "Ctrl-Alt-Shift-Down" },
        scrollIntoView: "cursor",
        readOnly: !0
      }, {
        name: "selectMoreBefore",
        description: "Select more before",
        exec: function(A) {
          A.selectMore(-1);
        },
        bindKey: { win: "Ctrl-Alt-Left", mac: "Ctrl-Alt-Left" },
        scrollIntoView: "cursor",
        readOnly: !0
      }, {
        name: "selectMoreAfter",
        description: "Select more after",
        exec: function(A) {
          A.selectMore(1);
        },
        bindKey: { win: "Ctrl-Alt-Right", mac: "Ctrl-Alt-Right" },
        scrollIntoView: "cursor",
        readOnly: !0
      }, {
        name: "selectNextBefore",
        description: "Select next before",
        exec: function(A) {
          A.selectMore(-1, !0);
        },
        bindKey: { win: "Ctrl-Alt-Shift-Left", mac: "Ctrl-Alt-Shift-Left" },
        scrollIntoView: "cursor",
        readOnly: !0
      }, {
        name: "selectNextAfter",
        description: "Select next after",
        exec: function(A) {
          A.selectMore(1, !0);
        },
        bindKey: { win: "Ctrl-Alt-Shift-Right", mac: "Ctrl-Alt-Shift-Right" },
        scrollIntoView: "cursor",
        readOnly: !0
      }, {
        name: "toggleSplitSelectionIntoLines",
        description: "Split selection into lines",
        exec: function(A) {
          A.multiSelect.rangeCount > 1 ? A.multiSelect.joinSelections() : A.multiSelect.splitIntoLines();
        },
        bindKey: { win: "Ctrl-Alt-L", mac: "Ctrl-Alt-L" },
        readOnly: !0
      }, {
        name: "splitSelectionIntoLines",
        description: "Split into lines",
        exec: function(A) {
          A.multiSelect.splitIntoLines();
        },
        readOnly: !0
      }, {
        name: "alignCursors",
        description: "Align cursors",
        exec: function(A) {
          A.alignCursors();
        },
        bindKey: { win: "Ctrl-Alt-A", mac: "Ctrl-Alt-A" },
        scrollIntoView: "cursor"
      }, {
        name: "findAll",
        description: "Find all",
        exec: function(A) {
          A.findAll();
        },
        bindKey: { win: "Ctrl-Alt-K", mac: "Ctrl-Alt-G" },
        scrollIntoView: "cursor",
        readOnly: !0
      }], M.multiSelectCommands = [{
        name: "singleSelection",
        description: "Single selection",
        bindKey: "esc",
        exec: function(A) {
          A.exitMultiSelectMode();
        },
        scrollIntoView: "cursor",
        readOnly: !0,
        isAvailable: function(A) {
          return A && A.inMultiSelectMode;
        }
      }];
      var C = S("../keyboard/hash_handler").HashHandler;
      M.keyboardHandler = new C(M.multiSelectCommands);
    }), ace.define("ace/multi_select", ["require", "exports", "module", "ace/range_list", "ace/range", "ace/selection", "ace/mouse/multi_select_handler", "ace/lib/event", "ace/lib/lang", "ace/commands/multi_select_commands", "ace/search", "ace/edit_session", "ace/editor", "ace/config"], function(S, M, H) {
      var C = S("./range_list").RangeList, A = S("./range").Range, w = S("./selection").Selection, a = S("./mouse/multi_select_handler").onMouseDown, u = S("./lib/event"), i = S("./lib/lang"), o = S("./commands/multi_select_commands");
      M.commands = o.defaultCommands.concat(o.multiSelectCommands);
      var n = S("./search").Search, t = new n();
      function e(g, p, h) {
        return t.$options.wrap = !0, t.$options.needle = p, t.$options.backwards = h == -1, t.find(g);
      }
      var r = S("./edit_session").EditSession;
      (function() {
        this.getSelectionMarkers = function() {
          return this.$selectionMarkers;
        };
      }).call(r.prototype), (function() {
        this.ranges = null, this.rangeList = null, this.addRange = function(g, p) {
          if (g) {
            if (!this.inMultiSelectMode && this.rangeCount === 0) {
              var h = this.toOrientedRange();
              if (this.rangeList.add(h), this.rangeList.add(g), this.rangeList.ranges.length != 2)
                return this.rangeList.removeAll(), p || this.fromOrientedRange(g);
              this.rangeList.removeAll(), this.rangeList.add(h), this.$onAddRange(h);
            }
            g.cursor || (g.cursor = g.end);
            var b = this.rangeList.add(g);
            return this.$onAddRange(g), b.length && this.$onRemoveRange(b), this.rangeCount > 1 && !this.inMultiSelectMode && (this._signal("multiSelect"), this.inMultiSelectMode = !0, this.session.$undoSelect = !1, this.rangeList.attach(this.session)), p || this.fromOrientedRange(g);
          }
        }, this.toSingleRange = function(g) {
          g = g || this.ranges[0];
          var p = this.rangeList.removeAll();
          p.length && this.$onRemoveRange(p), g && this.fromOrientedRange(g);
        }, this.substractPoint = function(g) {
          var p = this.rangeList.substractPoint(g);
          if (p)
            return this.$onRemoveRange(p), p[0];
        }, this.mergeOverlappingRanges = function() {
          var g = this.rangeList.merge();
          g.length && this.$onRemoveRange(g);
        }, this.$onAddRange = function(g) {
          this.rangeCount = this.rangeList.ranges.length, this.ranges.unshift(g), this._signal("addRange", { range: g });
        }, this.$onRemoveRange = function(g) {
          if (this.rangeCount = this.rangeList.ranges.length, this.rangeCount == 1 && this.inMultiSelectMode) {
            var p = this.rangeList.ranges.pop();
            g.push(p), this.rangeCount = 0;
          }
          for (var h = g.length; h--; ) {
            var b = this.ranges.indexOf(g[h]);
            this.ranges.splice(b, 1);
          }
          this._signal("removeRange", { ranges: g }), this.rangeCount === 0 && this.inMultiSelectMode && (this.inMultiSelectMode = !1, this._signal("singleSelect"), this.session.$undoSelect = !0, this.rangeList.detach(this.session)), p = p || this.ranges[0], p && !p.isEqual(this.getRange()) && this.fromOrientedRange(p);
        }, this.$initRangeList = function() {
          this.rangeList || (this.rangeList = new C(), this.ranges = [], this.rangeCount = 0);
        }, this.getAllRanges = function() {
          return this.rangeCount ? this.rangeList.ranges.concat() : [this.getRange()];
        }, this.splitIntoLines = function() {
          for (var g = this.ranges.length ? this.ranges : [this.getRange()], p = [], h = 0; h < g.length; h++) {
            var b = g[h], E = b.start.row, L = b.end.row;
            if (E === L)
              p.push(b.clone());
            else {
              for (p.push(new A(E, b.start.column, E, this.session.getLine(E).length)); ++E < L; )
                p.push(this.getLineRange(E, !0));
              p.push(new A(L, 0, L, b.end.column));
            }
            h == 0 && !this.isBackwards() && (p = p.reverse());
          }
          this.toSingleRange();
          for (var h = p.length; h--; )
            this.addRange(p[h]);
        }, this.joinSelections = function() {
          var g = this.rangeList.ranges, p = g[g.length - 1], h = A.fromPoints(g[0].start, p.end);
          this.toSingleRange(), this.setSelectionRange(h, p.cursor == p.start);
        }, this.toggleBlockSelection = function() {
          if (this.rangeCount > 1) {
            var g = this.rangeList.ranges, p = g[g.length - 1], h = A.fromPoints(g[0].start, p.end);
            this.toSingleRange(), this.setSelectionRange(h, p.cursor == p.start);
          } else {
            var b = this.session.documentToScreenPosition(this.cursor), E = this.session.documentToScreenPosition(this.anchor), L = this.rectangularRangeBlock(b, E);
            L.forEach(this.addRange, this);
          }
        }, this.rectangularRangeBlock = function(g, p, h) {
          var b = [], E = g.column < p.column;
          if (E)
            var L = g.column, x = p.column, O = g.offsetX, $ = p.offsetX;
          else
            var L = p.column, x = g.column, O = p.offsetX, $ = g.offsetX;
          var y = g.row < p.row;
          if (y)
            var f = g.row, d = p.row;
          else
            var f = p.row, d = g.row;
          L < 0 && (L = 0), f < 0 && (f = 0), f == d && (h = !0);
          for (var m, k = f; k <= d; k++) {
            var _ = A.fromPoints(this.session.screenToDocumentPosition(k, L, O), this.session.screenToDocumentPosition(k, x, $));
            if (_.isEmpty()) {
              if (m && l(_.end, m))
                break;
              m = _.end;
            }
            _.cursor = E ? _.start : _.end, b.push(_);
          }
          if (y && b.reverse(), !h) {
            for (var T = b.length - 1; b[T].isEmpty() && T > 0; )
              T--;
            if (T > 0)
              for (var I = 0; b[I].isEmpty(); )
                I++;
            for (var D = T; D >= I; D--)
              b[D].isEmpty() && b.splice(D, 1);
          }
          return b;
        };
      }).call(w.prototype);
      var s = S("./editor").Editor;
      (function() {
        this.updateSelectionMarkers = function() {
          this.renderer.updateCursor(), this.renderer.updateBackMarkers();
        }, this.addSelectionMarker = function(g) {
          g.cursor || (g.cursor = g.end);
          var p = this.getSelectionStyle();
          return g.marker = this.session.addMarker(g, "ace_selection", p), this.session.$selectionMarkers.push(g), this.session.selectionMarkerCount = this.session.$selectionMarkers.length, g;
        }, this.removeSelectionMarker = function(g) {
          if (g.marker) {
            this.session.removeMarker(g.marker);
            var p = this.session.$selectionMarkers.indexOf(g);
            p != -1 && this.session.$selectionMarkers.splice(p, 1), this.session.selectionMarkerCount = this.session.$selectionMarkers.length;
          }
        }, this.removeSelectionMarkers = function(g) {
          for (var p = this.session.$selectionMarkers, h = g.length; h--; ) {
            var b = g[h];
            if (b.marker) {
              this.session.removeMarker(b.marker);
              var E = p.indexOf(b);
              E != -1 && p.splice(E, 1);
            }
          }
          this.session.selectionMarkerCount = p.length;
        }, this.$onAddRange = function(g) {
          this.addSelectionMarker(g.range), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
        }, this.$onRemoveRange = function(g) {
          this.removeSelectionMarkers(g.ranges), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
        }, this.$onMultiSelect = function(g) {
          this.inMultiSelectMode || (this.inMultiSelectMode = !0, this.setStyle("ace_multiselect"), this.keyBinding.addKeyboardHandler(o.keyboardHandler), this.commands.setDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers());
        }, this.$onSingleSelect = function(g) {
          this.session.multiSelect.inVirtualMode || (this.inMultiSelectMode = !1, this.unsetStyle("ace_multiselect"), this.keyBinding.removeKeyboardHandler(o.keyboardHandler), this.commands.removeDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers(), this._emit("changeSelection"));
        }, this.$onMultiSelectExec = function(g) {
          var p = g.command, h = g.editor;
          if (h.multiSelect) {
            if (p.multiSelectAction)
              p.multiSelectAction == "forEach" ? b = h.forEachSelection(p, g.args) : p.multiSelectAction == "forEachLine" ? b = h.forEachSelection(p, g.args, !0) : p.multiSelectAction == "single" ? (h.exitMultiSelectMode(), b = p.exec(h, g.args || {})) : b = p.multiSelectAction(h, g.args || {});
            else {
              var b = p.exec(h, g.args || {});
              h.multiSelect.addRange(h.multiSelect.toOrientedRange()), h.multiSelect.mergeOverlappingRanges();
            }
            return b;
          }
        }, this.forEachSelection = function(g, p, h) {
          if (!this.inVirtualSelectionMode) {
            var b = h && h.keepOrder, E = h == !0 || h && h.$byLines, L = this.session, x = this.selection, O = x.rangeList, $ = (b ? x : O).ranges, y;
            if (!$.length)
              return g.exec ? g.exec(this, p || {}) : g(this, p || {});
            var f = x._eventRegistry;
            x._eventRegistry = {};
            var d = new w(L);
            this.inVirtualSelectionMode = !0;
            for (var m = $.length; m--; ) {
              if (E)
                for (; m > 0 && $[m].start.row == $[m - 1].end.row; )
                  m--;
              d.fromOrientedRange($[m]), d.index = m, this.selection = L.selection = d;
              var k = g.exec ? g.exec(this, p || {}) : g(this, p || {});
              !y && k !== void 0 && (y = k), d.toOrientedRange($[m]);
            }
            d.detach(), this.selection = L.selection = x, this.inVirtualSelectionMode = !1, x._eventRegistry = f, x.mergeOverlappingRanges(), x.ranges[0] && x.fromOrientedRange(x.ranges[0]);
            var _ = this.renderer.$scrollAnimation;
            return this.onCursorChange(), this.onSelectionChange(), _ && _.from == _.to && this.renderer.animateScrolling(_.from), y;
          }
        }, this.exitMultiSelectMode = function() {
          !this.inMultiSelectMode || this.inVirtualSelectionMode || this.multiSelect.toSingleRange();
        }, this.getSelectedText = function() {
          var g = "";
          if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
            for (var p = this.multiSelect.rangeList.ranges, h = [], b = 0; b < p.length; b++)
              h.push(this.session.getTextRange(p[b]));
            var E = this.session.getDocument().getNewLineCharacter();
            g = h.join(E), g.length == (h.length - 1) * E.length && (g = "");
          } else this.selection.isEmpty() || (g = this.session.getTextRange(this.getSelectionRange()));
          return g;
        }, this.$checkMultiselectChange = function(g, p) {
          if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
            var h = this.multiSelect.ranges[0];
            if (this.multiSelect.isEmpty() && p == this.multiSelect.anchor)
              return;
            var b = p == this.multiSelect.anchor ? h.cursor == h.start ? h.end : h.start : h.cursor;
            b.row != p.row || this.session.$clipPositionToDocument(b.row, b.column).column != p.column ? this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange()) : this.multiSelect.mergeOverlappingRanges();
          }
        }, this.findAll = function(g, p, h) {
          if (p = p || {}, p.needle = g || p.needle, p.needle == null) {
            var b = this.selection.isEmpty() ? this.selection.getWordRange() : this.selection.getRange();
            p.needle = this.session.getTextRange(b);
          }
          this.$search.set(p);
          var E = this.$search.findAll(this.session);
          if (!E.length)
            return 0;
          var L = this.multiSelect;
          h || L.toSingleRange(E[0]);
          for (var x = E.length; x--; )
            L.addRange(E[x], !0);
          return b && L.rangeList.rangeAtPoint(b.start) && L.addRange(b, !0), E.length;
        }, this.selectMoreLines = function(g, p) {
          var h = this.selection.toOrientedRange(), b = h.cursor == h.end, E = this.session.documentToScreenPosition(h.cursor);
          this.selection.$desiredColumn && (E.column = this.selection.$desiredColumn);
          var L = this.session.screenToDocumentPosition(E.row + g, E.column);
          if (h.isEmpty())
            var O = L;
          else
            var x = this.session.documentToScreenPosition(b ? h.end : h.start), O = this.session.screenToDocumentPosition(x.row + g, x.column);
          if (b) {
            var $ = A.fromPoints(L, O);
            $.cursor = $.start;
          } else {
            var $ = A.fromPoints(O, L);
            $.cursor = $.end;
          }
          if ($.desiredColumn = E.column, !this.selection.inMultiSelectMode)
            this.selection.addRange(h);
          else if (p)
            var y = h.cursor;
          this.selection.addRange($), y && this.selection.substractPoint(y);
        }, this.transposeSelections = function(g) {
          for (var p = this.session, h = p.multiSelect, b = h.ranges, E = b.length; E--; ) {
            var L = b[E];
            if (L.isEmpty()) {
              var x = p.getWordRange(L.start.row, L.start.column);
              L.start.row = x.start.row, L.start.column = x.start.column, L.end.row = x.end.row, L.end.column = x.end.column;
            }
          }
          h.mergeOverlappingRanges();
          for (var O = [], E = b.length; E--; ) {
            var L = b[E];
            O.unshift(p.getTextRange(L));
          }
          g < 0 ? O.unshift(O.pop()) : O.push(O.shift());
          for (var E = b.length; E--; ) {
            var L = b[E], $ = L.clone();
            p.replace(L, O[E]), L.start.row = $.start.row, L.start.column = $.start.column;
          }
          h.fromOrientedRange(h.ranges[0]);
        }, this.selectMore = function(g, p, h) {
          var b = this.session, E = b.multiSelect, L = E.toOrientedRange();
          if (!(L.isEmpty() && (L = b.getWordRange(L.start.row, L.start.column), L.cursor = g == -1 ? L.start : L.end, this.multiSelect.addRange(L), h))) {
            var x = b.getTextRange(L), O = e(b, x, g);
            O && (O.cursor = g == -1 ? O.start : O.end, this.session.unfold(O), this.multiSelect.addRange(O), this.renderer.scrollCursorIntoView(null, 0.5)), p && this.multiSelect.substractPoint(L.cursor);
          }
        }, this.alignCursors = function() {
          var g = this.session, p = g.multiSelect, h = p.ranges, b = -1, E = h.filter(function(T) {
            if (T.cursor.row == b)
              return !0;
            b = T.cursor.row;
          });
          if (!h.length || E.length == h.length - 1) {
            var L = this.selection.getRange(), x = L.start.row, O = L.end.row, $ = x == O;
            if ($) {
              var y = this.session.getLength(), f;
              do
                f = this.session.getLine(O);
              while (/[=:]/.test(f) && ++O < y);
              do
                f = this.session.getLine(x);
              while (/[=:]/.test(f) && --x > 0);
              x < 0 && (x = 0), O >= y && (O = y - 1);
            }
            var d = this.session.removeFullLines(x, O);
            d = this.$reAlignText(d, $), this.session.insert({ row: x, column: 0 }, d.join(`
`) + `
`), $ || (L.start.column = 0, L.end.column = d[d.length - 1].length), this.selection.setRange(L);
          } else {
            E.forEach(function(T) {
              p.substractPoint(T.cursor);
            });
            var m = 0, k = 1 / 0, _ = h.map(function(T) {
              var I = T.cursor, D = g.getLine(I.row), F = D.substr(I.column).search(/\S/g);
              return F == -1 && (F = 0), I.column > m && (m = I.column), F < k && (k = F), F;
            });
            h.forEach(function(T, I) {
              var D = T.cursor, F = m - D.column, B = _[I] - k;
              F > B ? g.insert(D, i.stringRepeat(" ", F - B)) : g.remove(new A(D.row, D.column, D.row, D.column - F + B)), T.start.column = T.end.column = m, T.start.row = T.end.row = D.row, T.cursor = T.end;
            }), p.fromOrientedRange(h[0]), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
          }
        }, this.$reAlignText = function(g, p) {
          var h = !0, b = !0, E, L, x;
          return g.map(function(d) {
            var m = d.match(/(\s*)(.*?)(\s*)([=:].*)/);
            return m ? E == null ? (E = m[1].length, L = m[2].length, x = m[3].length, m) : (E + L + x != m[1].length + m[2].length + m[3].length && (b = !1), E != m[1].length && (h = !1), E > m[1].length && (E = m[1].length), L < m[2].length && (L = m[2].length), x > m[3].length && (x = m[3].length), m) : [d];
          }).map(p ? $ : h ? b ? y : $ : f);
          function O(d) {
            return i.stringRepeat(" ", d);
          }
          function $(d) {
            return d[2] ? O(E) + d[2] + O(L - d[2].length + x) + d[4].replace(/^([=:])\s+/, "$1 ") : d[0];
          }
          function y(d) {
            return d[2] ? O(E + L - d[2].length) + d[2] + O(x) + d[4].replace(/^([=:])\s+/, "$1 ") : d[0];
          }
          function f(d) {
            return d[2] ? O(E) + d[2] + O(x) + d[4].replace(/^([=:])\s+/, "$1 ") : d[0];
          }
        };
      }).call(s.prototype);
      function l(g, p) {
        return g.row == p.row && g.column == p.column;
      }
      M.onSessionChange = function(g) {
        var p = g.session;
        p && !p.multiSelect && (p.$selectionMarkers = [], p.selection.$initRangeList(), p.multiSelect = p.selection), this.multiSelect = p && p.multiSelect;
        var h = g.oldSession;
        h && (h.multiSelect.off("addRange", this.$onAddRange), h.multiSelect.off("removeRange", this.$onRemoveRange), h.multiSelect.off("multiSelect", this.$onMultiSelect), h.multiSelect.off("singleSelect", this.$onSingleSelect), h.multiSelect.lead.off("change", this.$checkMultiselectChange), h.multiSelect.anchor.off("change", this.$checkMultiselectChange)), p && (p.multiSelect.on("addRange", this.$onAddRange), p.multiSelect.on("removeRange", this.$onRemoveRange), p.multiSelect.on("multiSelect", this.$onMultiSelect), p.multiSelect.on("singleSelect", this.$onSingleSelect), p.multiSelect.lead.on("change", this.$checkMultiselectChange), p.multiSelect.anchor.on("change", this.$checkMultiselectChange)), p && this.inMultiSelectMode != p.selection.inMultiSelectMode && (p.selection.inMultiSelectMode ? this.$onMultiSelect() : this.$onSingleSelect());
      };
      function c(g) {
        g.$multiselectOnSessionChange || (g.$onAddRange = g.$onAddRange.bind(g), g.$onRemoveRange = g.$onRemoveRange.bind(g), g.$onMultiSelect = g.$onMultiSelect.bind(g), g.$onSingleSelect = g.$onSingleSelect.bind(g), g.$multiselectOnSessionChange = M.onSessionChange.bind(g), g.$checkMultiselectChange = g.$checkMultiselectChange.bind(g), g.$multiselectOnSessionChange(g), g.on("changeSession", g.$multiselectOnSessionChange), g.on("mousedown", a), g.commands.addCommands(o.defaultCommands), v(g));
      }
      function v(g) {
        if (!g.textInput)
          return;
        var p = g.textInput.getElement(), h = !1;
        u.addListener(p, "keydown", function(E) {
          var L = E.keyCode == 18 && !(E.ctrlKey || E.shiftKey || E.metaKey);
          g.$blockSelectEnabled && L ? h || (g.renderer.setMouseCursor("crosshair"), h = !0) : h && b();
        }, g), u.addListener(p, "keyup", b, g), u.addListener(p, "blur", b, g);
        function b(E) {
          h && (g.renderer.setMouseCursor(""), h = !1);
        }
      }
      M.MultiSelect = c, S("./config").defineOptions(s.prototype, "editor", {
        enableMultiselect: {
          set: function(g) {
            c(this), g ? this.on("mousedown", a) : this.off("mousedown", a);
          },
          value: !0
        },
        enableBlockSelect: {
          set: function(g) {
            this.$blockSelectEnabled = g;
          },
          value: !0
        }
      });
    }), ace.define("ace/mode/folding/fold_mode", ["require", "exports", "module", "ace/range"], function(S, M, H) {
      var C = S("../../range").Range, A = M.FoldMode = function() {
      };
      (function() {
        this.foldingStartMarker = null, this.foldingStopMarker = null, this.getFoldWidget = function(w, a, u) {
          var i = w.getLine(u);
          return this.foldingStartMarker.test(i) ? "start" : a == "markbeginend" && this.foldingStopMarker && this.foldingStopMarker.test(i) ? "end" : "";
        }, this.getFoldWidgetRange = function(w, a, u) {
          return null;
        }, this.indentationBlock = function(w, a, u) {
          var i = /\S/, o = w.getLine(a), n = o.search(i);
          if (n != -1) {
            for (var t = u || o.length, e = w.getLength(), r = a, s = a; ++a < e; ) {
              var l = w.getLine(a).search(i);
              if (l != -1) {
                if (l <= n) {
                  var c = w.getTokenAt(a, 0);
                  if (!c || c.type !== "string")
                    break;
                }
                s = a;
              }
            }
            if (s > r) {
              var v = w.getLine(s).length;
              return new C(r, t, s, v);
            }
          }
        }, this.openingBracketBlock = function(w, a, u, i, o) {
          var n = { row: u, column: i + 1 }, t = w.$findClosingBracket(a, n, o);
          if (t) {
            var e = w.foldWidgets[t.row];
            return e == null && (e = w.getFoldWidget(t.row)), e == "start" && t.row > n.row && (t.row--, t.column = w.getLine(t.row).length), C.fromPoints(n, t);
          }
        }, this.closingBracketBlock = function(w, a, u, i, o) {
          var n = { row: u, column: i }, t = w.$findOpeningBracket(a, n);
          if (t)
            return t.column++, n.column--, C.fromPoints(t, n);
        };
      }).call(A.prototype);
    }), ace.define("ace/ext/error_marker", ["require", "exports", "module", "ace/lib/dom", "ace/range", "ace/config"], function(S, M, H) {
      var C = S("../lib/dom"), A = S("../range").Range, w = S("../config").nls;
      function a(i, o, n) {
        for (var t = 0, e = i.length - 1; t <= e; ) {
          var r = t + e >> 1, s = n(o, i[r]);
          if (s > 0)
            t = r + 1;
          else if (s < 0)
            e = r - 1;
          else
            return r;
        }
        return -(t + 1);
      }
      function u(i, o, n) {
        var t = i.getAnnotations().sort(A.comparePoints);
        if (t.length) {
          var e = a(t, { row: o, column: -1 }, A.comparePoints);
          e < 0 && (e = -e - 1), e >= t.length ? e = n > 0 ? 0 : t.length - 1 : e === 0 && n < 0 && (e = t.length - 1);
          var r = t[e];
          if (!(!r || !n)) {
            if (r.row === o) {
              do
                r = t[e += n];
              while (r && r.row === o);
              if (!r)
                return t.slice();
            }
            var s = [];
            o = r.row;
            do
              s[n < 0 ? "unshift" : "push"](r), r = t[e += n];
            while (r && r.row == o);
            return s.length && s;
          }
        }
      }
      M.showErrorMarker = function(i, o) {
        var n = i.session, t = i.getCursorPosition(), e = t.row, r = n.widgetManager.getWidgetsAtRow(e).filter(function(E) {
          return E.type == "errorMarker";
        })[0];
        r ? r.destroy() : e -= o;
        var s = u(n, e, o), l;
        if (s) {
          var c = s[0];
          t.column = (c.pos && typeof c.column != "number" ? c.pos.sc : c.column) || 0, t.row = c.row, l = i.renderer.$gutterLayer.$annotations[t.row];
        } else {
          if (r)
            return;
          l = {
            displayText: [w("error-marker.good-state", "Looks good!")],
            className: "ace_ok"
          };
        }
        i.session.unfold(t.row), i.selection.moveToPosition(t);
        var v = {
          row: t.row,
          fixedWidth: !0,
          coverGutter: !0,
          el: C.createElement("div"),
          type: "errorMarker"
        }, g = v.el.appendChild(C.createElement("div")), p = v.el.appendChild(C.createElement("div"));
        p.className = "error_widget_arrow " + l.className;
        var h = i.renderer.$cursorLayer.getPixelPosition(t).left;
        p.style.left = h + i.renderer.gutterWidth - 5 + "px", v.el.className = "error_widget_wrapper", g.className = "error_widget " + l.className, l.displayText.forEach(function(E, L) {
          g.appendChild(C.createTextNode(E)), L < l.displayText.length - 1 && g.appendChild(C.createElement("br"));
        }), g.appendChild(C.createElement("div"));
        var b = function(E, L, x) {
          if (L === 0 && (x === "esc" || x === "return"))
            return v.destroy(), { command: "null" };
        };
        v.destroy = function() {
          i.$mouseHandler.isMousePressed || (i.keyBinding.removeKeyboardHandler(b), n.widgetManager.removeLineWidget(v), i.off("changeSelection", v.destroy), i.off("changeSession", v.destroy), i.off("mouseup", v.destroy), i.off("change", v.destroy));
        }, i.keyBinding.addKeyboardHandler(b), i.on("changeSelection", v.destroy), i.on("changeSession", v.destroy), i.on("mouseup", v.destroy), i.on("change", v.destroy), i.session.widgetManager.addLineWidget(v), v.el.onmousedown = i.focus.bind(i), i.renderer.scrollCursorIntoView(null, 0.5, { bottom: v.el.offsetHeight });
      }, C.importCssString(`
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
    }), ace.define("ace/ace", ["require", "exports", "module", "ace/lib/dom", "ace/range", "ace/editor", "ace/edit_session", "ace/undomanager", "ace/virtual_renderer", "ace/worker/worker_client", "ace/keyboard/hash_handler", "ace/placeholder", "ace/multi_select", "ace/mode/folding/fold_mode", "ace/theme/textmate", "ace/ext/error_marker", "ace/config", "ace/loader_build"], function(S, M, H) {
      S("./loader_build")(M);
      var C = S("./lib/dom"), A = S("./range").Range, w = S("./editor").Editor, a = S("./edit_session").EditSession, u = S("./undomanager").UndoManager, i = S("./virtual_renderer").VirtualRenderer;
      S("./worker/worker_client"), S("./keyboard/hash_handler"), S("./placeholder"), S("./multi_select"), S("./mode/folding/fold_mode"), S("./theme/textmate"), S("./ext/error_marker"), M.config = S("./config"), M.edit = function(n, t) {
        if (typeof n == "string") {
          var e = n;
          if (n = document.getElementById(e), !n)
            throw new Error("ace.edit can't find div #" + e);
        }
        if (n && n.env && n.env.editor instanceof w)
          return n.env.editor;
        var r = "";
        if (n && /input|textarea/i.test(n.tagName)) {
          var s = n;
          r = s.value, n = C.createElement("pre"), s.parentNode.replaceChild(n, s);
        } else n && (r = n.textContent, n.innerHTML = "");
        var l = M.createEditSession(r), c = new w(new i(n), l, t), v = {
          document: l,
          editor: c,
          onResize: c.resize.bind(c, null)
        };
        return s && (v.textarea = s), c.on("destroy", function() {
          v.editor.container.env = null;
        }), c.container.env = c.env = v, c;
      }, M.createEditSession = function(n, t) {
        var e = new a(n, t);
        return e.setUndoManager(new u()), e;
      }, M.Range = A, M.Editor = w, M.EditSession = a, M.UndoManager = u, M.VirtualRenderer = i;
      var o = M.config.version;
      M.version = o;
    }), function() {
      ace.require(["ace/ace"], function(S) {
        S && (S.config.init(!0), S.define = ace.define);
        var M = /* @__PURE__ */ function() {
          return this;
        }();
        !M && typeof window < "u" && (M = window), !M && typeof self < "u" && (M = self), M.ace || (M.ace = S);
        for (var H in S) S.hasOwnProperty(H) && (M.ace[H] = S[H]);
        M.ace.default = M.ace, R && (R.exports = M.ace);
      });
    }();
  }(ht)), ht.exports;
}
var Qt = Ti();
const Zt = /* @__PURE__ */ Ei(Qt), _i = /* @__PURE__ */ hn({
  __proto__: null,
  default: Zt
}, [Qt]);
var Xt = function() {
  if (typeof Map < "u")
    return Map;
  function R(N, S) {
    var M = -1;
    return N.some(function(H, C) {
      return H[0] === S ? (M = C, !0) : !1;
    }), M;
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
      }), N.prototype.get = function(S) {
        var M = R(this.__entries__, S), H = this.__entries__[M];
        return H && H[1];
      }, N.prototype.set = function(S, M) {
        var H = R(this.__entries__, S);
        ~H ? this.__entries__[H][1] = M : this.__entries__.push([S, M]);
      }, N.prototype.delete = function(S) {
        var M = this.__entries__, H = R(M, S);
        ~H && M.splice(H, 1);
      }, N.prototype.has = function(S) {
        return !!~R(this.__entries__, S);
      }, N.prototype.clear = function() {
        this.__entries__.splice(0);
      }, N.prototype.forEach = function(S, M) {
        M === void 0 && (M = null);
        for (var H = 0, C = this.__entries__; H < C.length; H++) {
          var A = C[H];
          S.call(M, A[1], A[0]);
        }
      }, N;
    }()
  );
}(), ft = typeof window < "u" && typeof document < "u" && window.document === document, rt = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Ri = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(rt) : function(R) {
    return setTimeout(function() {
      return R(Date.now());
    }, 1e3 / 60);
  };
}(), Ii = 2;
function Oi(R, N) {
  var S = !1, M = !1, H = 0;
  function C() {
    S && (S = !1, R()), M && w();
  }
  function A() {
    Ri(C);
  }
  function w() {
    var a = Date.now();
    if (S) {
      if (a - H < Ii)
        return;
      M = !0;
    } else
      S = !0, M = !1, setTimeout(A, N);
    H = a;
  }
  return w;
}
var Di = 20, Ni = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Wi = typeof MutationObserver < "u", Fi = (
  /** @class */
  function() {
    function R() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Oi(this.refresh.bind(this), Di);
    }
    return R.prototype.addObserver = function(N) {
      ~this.observers_.indexOf(N) || this.observers_.push(N), this.connected_ || this.connect_();
    }, R.prototype.removeObserver = function(N) {
      var S = this.observers_, M = S.indexOf(N);
      ~M && S.splice(M, 1), !S.length && this.connected_ && this.disconnect_();
    }, R.prototype.refresh = function() {
      var N = this.updateObservers_();
      N && this.refresh();
    }, R.prototype.updateObservers_ = function() {
      var N = this.observers_.filter(function(S) {
        return S.gatherActive(), S.hasActive();
      });
      return N.forEach(function(S) {
        return S.broadcastActive();
      }), N.length > 0;
    }, R.prototype.connect_ = function() {
      !ft || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Wi ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, R.prototype.disconnect_ = function() {
      !ft || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, R.prototype.onTransitionEnd_ = function(N) {
      var S = N.propertyName, M = S === void 0 ? "" : S, H = Ni.some(function(C) {
        return !!~M.indexOf(C);
      });
      H && this.refresh();
    }, R.getInstance = function() {
      return this.instance_ || (this.instance_ = new R()), this.instance_;
    }, R.instance_ = null, R;
  }()
), Jt = function(R, N) {
  for (var S = 0, M = Object.keys(N); S < M.length; S++) {
    var H = M[S];
    Object.defineProperty(R, H, {
      value: N[H],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return R;
}, Ue = function(R) {
  var N = R && R.ownerDocument && R.ownerDocument.defaultView;
  return N || rt;
}, qt = st(0, 0, 0, 0);
function ot(R) {
  return parseFloat(R) || 0;
}
function It(R) {
  for (var N = [], S = 1; S < arguments.length; S++)
    N[S - 1] = arguments[S];
  return N.reduce(function(M, H) {
    var C = R["border-" + H + "-width"];
    return M + ot(C);
  }, 0);
}
function Hi(R) {
  for (var N = ["top", "right", "bottom", "left"], S = {}, M = 0, H = N; M < H.length; M++) {
    var C = H[M], A = R["padding-" + C];
    S[C] = ot(A);
  }
  return S;
}
function Bi(R) {
  var N = R.getBBox();
  return st(0, 0, N.width, N.height);
}
function zi(R) {
  var N = R.clientWidth, S = R.clientHeight;
  if (!N && !S)
    return qt;
  var M = Ue(R).getComputedStyle(R), H = Hi(M), C = H.left + H.right, A = H.top + H.bottom, w = ot(M.width), a = ot(M.height);
  if (M.boxSizing === "border-box" && (Math.round(w + C) !== N && (w -= It(M, "left", "right") + C), Math.round(a + A) !== S && (a -= It(M, "top", "bottom") + A)), !Vi(R)) {
    var u = Math.round(w + C) - N, i = Math.round(a + A) - S;
    Math.abs(u) !== 1 && (w -= u), Math.abs(i) !== 1 && (a -= i);
  }
  return st(H.left, H.top, w, a);
}
var Pi = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(R) {
    return R instanceof Ue(R).SVGGraphicsElement;
  } : function(R) {
    return R instanceof Ue(R).SVGElement && typeof R.getBBox == "function";
  };
}();
function Vi(R) {
  return R === Ue(R).document.documentElement;
}
function Ui(R) {
  return ft ? Pi(R) ? Bi(R) : zi(R) : qt;
}
function ji(R) {
  var N = R.x, S = R.y, M = R.width, H = R.height, C = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, A = Object.create(C.prototype);
  return Jt(A, {
    x: N,
    y: S,
    width: M,
    height: H,
    top: S,
    right: N + M,
    bottom: H + S,
    left: N
  }), A;
}
function st(R, N, S, M) {
  return { x: R, y: N, width: S, height: M };
}
var Gi = (
  /** @class */
  function() {
    function R(N) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = st(0, 0, 0, 0), this.target = N;
    }
    return R.prototype.isActive = function() {
      var N = Ui(this.target);
      return this.contentRect_ = N, N.width !== this.broadcastWidth || N.height !== this.broadcastHeight;
    }, R.prototype.broadcastRect = function() {
      var N = this.contentRect_;
      return this.broadcastWidth = N.width, this.broadcastHeight = N.height, N;
    }, R;
  }()
), Ki = (
  /** @class */
  /* @__PURE__ */ function() {
    function R(N, S) {
      var M = ji(S);
      Jt(this, { target: N, contentRect: M });
    }
    return R;
  }()
), Yi = (
  /** @class */
  function() {
    function R(N, S, M) {
      if (this.activeObservations_ = [], this.observations_ = new Xt(), typeof N != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = N, this.controller_ = S, this.callbackCtx_ = M;
    }
    return R.prototype.observe = function(N) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(N instanceof Ue(N).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var S = this.observations_;
        S.has(N) || (S.set(N, new Gi(N)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, R.prototype.unobserve = function(N) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(N instanceof Ue(N).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var S = this.observations_;
        S.has(N) && (S.delete(N), S.size || this.controller_.removeObserver(this));
      }
    }, R.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, R.prototype.gatherActive = function() {
      var N = this;
      this.clearActive(), this.observations_.forEach(function(S) {
        S.isActive() && N.activeObservations_.push(S);
      });
    }, R.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var N = this.callbackCtx_, S = this.activeObservations_.map(function(M) {
          return new Ki(M.target, M.broadcastRect());
        });
        this.callback_.call(N, S, N), this.clearActive();
      }
    }, R.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, R.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, R;
  }()
), en = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Xt(), tn = (
  /** @class */
  /* @__PURE__ */ function() {
    function R(N) {
      if (!(this instanceof R))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var S = Fi.getInstance(), M = new Yi(N, S, this);
      en.set(this, M);
    }
    return R;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(R) {
  tn.prototype[R] = function() {
    var N;
    return (N = en.get(this))[R].apply(N, arguments);
  };
});
var Qi = function() {
  return typeof rt.ResizeObserver < "u" ? rt.ResizeObserver : tn;
}();
const Ot = [
  "blur",
  "input",
  "change",
  "changeSelectionStyle",
  "changeSession",
  "copy",
  "focus",
  "paste"
], Zi = Te({
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
  emits: ["update:value", "init", ...Ot],
  render() {
    return He("div");
  },
  mounted() {
    const R = this._editor = ln(Zt.edit(this.$el, {
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
    this._contentBackup = this.value, this._isSettingContent = !1, R.on("change", () => {
      if (this._isSettingContent)
        return;
      const N = R.getValue();
      this._contentBackup = N, this.$emit("update:value", N);
    }), Ot.forEach((N) => {
      const S = "on" + cn(N);
      typeof this.$.vnode.props[S] == "function" && R.on(N, this.$emit.bind(this, N));
    }), this._ro = new Qi(() => R.resize()), this._ro.observe(this.$el), this.$emit("init", R);
  },
  beforeUnmount() {
    var R, N;
    (R = this._ro) === null || R === void 0 || R.disconnect(), (N = this._editor) === null || N === void 0 || N.destroy();
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
    value(R) {
      if (this._contentBackup !== R) {
        try {
          this._isSettingContent = !0, this._editor.setValue(R, 1);
        } finally {
          this._isSettingContent = !1;
        }
        this._contentBackup = R;
      }
    },
    theme(R) {
      this._editor.setTheme("ace/theme/" + R);
    },
    options(R) {
      this._editor.setOptions(R);
    },
    readonly(R) {
      this._editor.setReadOnly(R);
    },
    placeholder(R) {
      this._editor.setOption("placeholder", R);
    },
    wrap(R) {
      this._editor.setWrapBehavioursEnabled(R);
    },
    printMargin(R) {
      this._editor.setOption("printMargin", R);
    },
    lang(R) {
      this._editor.setOption("mode", "ace/mode/" + R);
    },
    minLines(R) {
      this._editor.setOption("minLines", R);
    },
    maxLines(R) {
      this._editor.setOption("maxLines", R);
    }
  }
}), Xi = {
  __name: "AceEditorWrap",
  props: {
    modelValue: {
      type: Object,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(R, { emit: N }) {
    const S = R, M = N, H = ne(""), C = un(null);
    je(async () => {
      try {
        await Promise.all([
          Promise.resolve().then(() => _i),
          import("./mode-json-DOz8FWZi.js").then((w) => w.m),
          import("./theme-chrome-ES2PTAUM.js").then((w) => w.t),
          import("./worker-json-ri4GqwH4.js").then((w) => w.w)
        ]), H.value = JSON.stringify(S.modelValue, null, 2);
      } catch (w) {
        console.error("Failed to initialize Ace editor:", w);
      }
    }), Ve(H, (w) => {
      try {
        M("update:modelValue", JSON.parse(w));
      } catch (a) {
        console.log(a);
      }
    });
    const A = {
      useWorker: !0,
      showPrintMargin: !1,
      fontSize: 14,
      tabSize: 2,
      showGutter: !0,
      highlightActiveLine: !0
    };
    return (w, a) => (Q(), te(K(Zi), {
      value: H.value,
      "onUpdate:value": a[0] || (a[0] = (u) => H.value = u),
      lang: "json",
      theme: "chrome",
      style: { height: "600px" },
      options: A,
      onInit: a[1] || (a[1] = (u) => C.value = u)
    }, null, 8, ["value"]));
  }
}, Ji = { id: "content-editor" }, qi = { class: "preview-container fill-height" }, er = {
  __name: "ComponentEditor",
  props: {
    modelValue: { default: [] },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(R) {
    const N = we("componentClipboard"), S = ne(!1), M = ne({
      component: "",
      props: {}
    }), H = ne(!1), C = ne(!1), A = ne(!1), w = ne(!1), a = ne(!1), u = ne([]), i = ne(""), o = qe(R, "modelValue"), { removeElement: n, pasteElement: t, insertElement: e } = Pt(o);
    function r(p) {
      N.copy(p, null);
    }
    function s(p) {
      const h = [...o.value], b = u.value.pop(), E = u.value.reduce((L, x) => L[x], h);
      E && (E[b] = p), o.value = h, H.value = !1, M.value = {}, u.value = [];
    }
    function l({ element: p, path: h }) {
      u.value = h, H.value = !0, M.value = p;
    }
    const c = (p) => {
      o.value = p;
    };
    function v() {
      if (i.value === "") {
        alert("Please select a component");
        return;
      }
      o.value.push({
        component: i.value,
        props: {}
      }), S.value = !1, i.value = "";
    }
    function g(p, h, b) {
      if (!p) return;
      p.preventDefault();
      const E = [
        {
          label: "Edit",
          onClick: () => {
            l({ element: h, path: b });
          }
        },
        {
          label: "Cut",
          onClick: () => {
            N.cut(h, b), N.isCut && n(b);
          }
        },
        {
          label: "Copy",
          onClick: () => {
            N.copy(h, b);
          }
        }
      ];
      N.hasContent() && E.push({
        label: "Paste",
        children: [
          {
            label: "Paste as Prepend",
            onClick: () => t(b, "prepend")
          },
          {
            label: "Paste as Append",
            onClick: () => t(b, "append")
          },
          {
            label: "Paste as Child",
            onClick: () => t(b, "child")
          }
        ]
      }), E.push(Vt(e, b)), E.push({
        label: "Delete",
        onClick: () => {
          n(b);
        }
      }), Yt.showContextMenu({
        x: p.x,
        y: p.y,
        items: E
      });
    }
    return (p, h) => {
      const b = ae("v-btn"), E = ae("v-spacer"), L = ae("v-list-item-title"), x = ae("v-list-item"), O = ae("v-list"), $ = ae("v-menu"), y = ae("v-toolbar"), f = ae("v-col"), d = ae("v-row"), m = ae("v-card-title"), k = ae("v-combobox"), _ = ae("v-card-text"), T = ae("v-card-actions"), I = ae("v-card"), D = ae("v-dialog");
      return Q(), se("div", Ji, [
        ee(y, { class: "mb-2" }, {
          default: X(() => [
            ee(b, {
              active: w.value,
              onClick: h[0] || (h[0] = (F) => w.value = !w.value),
              icon: "fa-solid fa-code"
            }, null, 8, ["active"]),
            ee(b, {
              active: a.value,
              onClick: h[1] || (h[1] = (F) => a.value = !a.value)
            }, {
              default: X(() => h[14] || (h[14] = [
                ye("Draggable")
              ])),
              _: 1,
              __: [14]
            }, 8, ["active"]),
            ee(b, {
              onClick: h[2] || (h[2] = (F) => S.value = !0),
              icon: "fa-solid fa-plus"
            }),
            ee(b, {
              onClick: h[3] || (h[3] = (F) => C.value = !C.value),
              icon: "fa-solid fa-tree"
            }),
            ee(E),
            ee($, null, {
              activator: X(({ props: F }) => [
                ee(b, Pe(F, { icon: "fa-solid fa-clipboard" }), null, 16)
              ]),
              default: X(() => [
                ee(O, null, {
                  default: X(() => [
                    (Q(!0), se(Ae, null, Oe(K(zt), (F) => (Q(), te(x, {
                      key: F.title,
                      onClick: (B) => r(F)
                    }, {
                      default: X(() => [
                        ee(L, null, {
                          default: X(() => [
                            ye(Re(F.title), 1)
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
            w.value ? (Q(), te(f, {
              key: 0,
              cols: 12
            }, {
              default: X(() => [
                ee(Xi, {
                  modelValue: o.value,
                  "onUpdate:modelValue": h[4] || (h[4] = (F) => o.value = F)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })) : (Q(), te(f, {
              key: 1,
              cols: 12,
              class: "bordered fill-height"
            }, {
              default: X(() => [
                ge("div", qi, [
                  ge("div", {
                    class: Ie(["preview-content", { "has-docked-tree": C.value && A.value }])
                  }, [
                    ee(dt, {
                      modelValue: o.value,
                      "onUpdate:modelValue": h[5] || (h[5] = (F) => o.value = F),
                      onUpdateSections: c,
                      draggable_pro: a.value,
                      onOpenEdit: h[6] || (h[6] = ({ event: F, element: B, path: z }) => g(F, B, z))
                    }, null, 8, ["modelValue", "draggable_pro"])
                  ], 2),
                  C.value ? (Q(), te(Li, {
                    key: 0,
                    data: o.value,
                    "onUpdate:data": h[7] || (h[7] = (F) => o.value = F),
                    onClose: h[8] || (h[8] = (F) => C.value = !1),
                    onOpenEdit: l,
                    "onUpdate:docked": h[9] || (h[9] = (F) => A.value = F)
                  }, null, 8, ["data"])) : oe("", !0)
                ])
              ]),
              _: 1
            }))
          ]),
          _: 1
        }),
        ee(D, {
          modelValue: S.value,
          "onUpdate:modelValue": h[12] || (h[12] = (F) => S.value = F),
          "max-width": "500px"
        }, {
          default: X(() => [
            ee(I, null, {
              default: X(() => [
                ee(m, null, {
                  default: X(() => h[15] || (h[15] = [
                    ge("span", { class: "text-h5" }, "Add Component", -1)
                  ])),
                  _: 1,
                  __: [15]
                }),
                ee(_, null, {
                  default: X(() => [
                    ee(k, {
                      items: K(vn),
                      modelValue: i.value,
                      "onUpdate:modelValue": h[10] || (h[10] = (F) => i.value = F),
                      label: "Component Name"
                    }, null, 8, ["items", "modelValue"])
                  ]),
                  _: 1
                }),
                ee(T, null, {
                  default: X(() => [
                    ee(b, {
                      color: "red",
                      onClick: h[11] || (h[11] = (F) => S.value = !1)
                    }, {
                      default: X(() => h[16] || (h[16] = [
                        ye("Cancel")
                      ])),
                      _: 1,
                      __: [16]
                    }),
                    ee(b, {
                      onClick: v,
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
        ee(Nn, {
          data: M.value,
          dialog: H.value,
          "onUpdate:dialog": h[13] || (h[13] = (F) => H.value = F),
          onDataSaved: s
        }, null, 8, ["data", "dialog"])
      ]);
    };
  }
}, nr = {
  install(R, N = {}) {
    R.component("ComponentEditor", er), N.componentClipboard && R.provide("componentClipboard", N.componentClipboard);
  }
};
export {
  Ei as g,
  nr as i
};
