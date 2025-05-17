import { mergeModels as Oe, useModel as qe, createElementBlock as se, openBlock as J, Fragment as Re, renderList as Ze, createBlock as te, resolveDynamicComponent as Vt, mergeProps as Fe, withModifiers as it, createSlots as Ct, withCtx as U, createCommentVNode as re, createTextVNode as Ie, toDisplayString as Ge, watch as De, defineComponent as Le, toRefs as _e, ref as ne, nextTick as Ve, onMounted as Ye, onBeforeUnmount as Xe, onActivated as an, onDeactivated as ln, h as Ne, resolveComponent as ae, createVNode as ee, unref as z, inject as Ae, computed as Te, createElementVNode as pe, normalizeClass as Be, provide as We, renderSlot as ve, Transition as Nt, normalizeProps as _t, Teleport as Ot, reactive as bt, normalizeStyle as Pe, useSlots as Ft, guardReactiveProps as cn, render as yt, markRaw as un, capitalize as gn } from "vue";
const et = (G, H) => {
  const w = G.__vccOpts || G;
  for (const [R, N] of H)
    w[R] = N;
  return w;
}, hn = ["innerHTML"], dn = ["innerHTML", "onContextmenu"], fn = {
  __name: "JsonComponents",
  props: /* @__PURE__ */ Oe({
    draggable_pro: {
      type: Boolean,
      default: !0
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Oe(["updateSections", "openEdit"], ["update:modelValue"]),
  setup(G, { emit: H }) {
    const w = qe(G, "modelValue"), R = H;
    function N(a) {
      const c = {};
      return c[a] ? c[a] : a;
    }
    function b(a, c, n) {
      R("openEdit", { event: a, element: c, path: [n] });
    }
    function S(a, c, n, r) {
      let i = [];
      n !== null && i.push(n), c !== null && i.push(c), r === "children" ? (i.push("children"), a.path && (i = [...i, ...a.path])) : r === "slot" && (a.path ? (i.push("slots", c, "children"), i = [...i, ...a.path]) : i.push("slots", c)), R("openEdit", {
        event: a.event,
        element: a.element,
        path: i
      });
    }
    function A(a, c, n, r) {
      R("openEdit", { event: a, element: c.slots[r], path: [n, "slots", r] });
    }
    return (a, c) => (J(!0), se(Re, null, Ze(w.value, (n, r) => (J(), te(Vt(N(n.component)), Fe({ ref_for: !0 }, n.props, {
      onContextmenu: it((i) => b(i, n, r), ["stop"])
    }), Ct({
      default: U(() => [
        n.children ? (J(), te(ft, {
          key: 0,
          modelValue: n.children,
          "onUpdate:modelValue": (i) => n.children = i,
          draggable_pro: G.draggable_pro,
          onOpenEdit: (i) => S(i, null, r, "children")
        }, null, 8, ["modelValue", "onUpdate:modelValue", "draggable_pro", "onOpenEdit"])) : re("", !0),
        n.htmlContent ? (J(), se("div", {
          key: 1,
          innerHTML: n.htmlContent
        }, null, 8, hn)) : re("", !0),
        n.textContent ? (J(), se(Re, { key: 2 }, [
          Ie(Ge(n.textContent), 1)
        ], 64)) : re("", !0)
      ]),
      _: 2
    }, [
      Ze(n.slots, (i, t) => ({
        name: i.name,
        fn: U(() => [
          i.children ? (J(), te(ft, {
            key: 0,
            modelValue: i.children,
            "onUpdate:modelValue": (e) => i.children = e,
            draggable_pro: G.draggable_pro,
            onOpenEdit: (e) => S(e, t, r, "slot")
          }, null, 8, ["modelValue", "onUpdate:modelValue", "draggable_pro", "onOpenEdit"])) : re("", !0),
          i.htmlContent ? (J(), se("div", {
            key: 1,
            innerHTML: i.htmlContent,
            onContextmenu: it((e) => A(e, n, r, t), ["stop"])
          }, null, 40, dn)) : re("", !0),
          i.textContent ? (J(), se(Re, { key: 2 }, [
            Ie(Ge(i.textContent), 1)
          ], 64)) : re("", !0)
        ])
      }))
    ]), 1040, ["onContextmenu"]))), 256));
  }
}, ft = /* @__PURE__ */ et(fn, [["__scopeId", "data-v-e879fa16"]]), pn = {
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
}, Cn = [
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
], In = function(G) {
  return mn.map(function(H) {
    return H.toLowerCase();
  }).indexOf(G.toLowerCase()) !== -1;
}, An = function(G, H, w) {
  Object.keys(H).filter(In).forEach(function(R) {
    var N = H[R];
    typeof N == "function" && (R === "onInit" ? N(G, w) : w.on(R.substring(2), function(b) {
      return N(b, w);
    }));
  });
}, vn = function(G, H, w, R) {
  var N = G.modelEvents ? G.modelEvents : null, b = Array.isArray(N) ? N.join(" ") : N;
  De(R, function(S, A) {
    w && typeof S == "string" && S !== A && S !== w.getContent({ format: G.outputFormat }) && w.setContent(S);
  }), w.on(b || "change input undo redo", function() {
    H.emit("update:modelValue", w.getContent({ format: G.outputFormat }));
  });
}, bn = function(G, H, w, R, N, b) {
  R.setContent(b()), w.attrs["onUpdate:modelValue"] && vn(H, w, R, N), An(G, w.attrs, R);
}, wt = 0, Dt = function(G) {
  var H = Date.now(), w = Math.floor(Math.random() * 1e9);
  return wt++, G + "_" + w + wt + String(H);
}, yn = function(G) {
  return G !== null && G.tagName.toLowerCase() === "textarea";
}, St = function(G) {
  return typeof G > "u" || G === "" ? [] : Array.isArray(G) ? G : G.split(" ");
}, wn = function(G, H) {
  return St(G).concat(St(H));
}, Sn = function(G) {
  return G == null;
}, Rt = function() {
  return {
    listeners: [],
    scriptId: Dt("tiny-script"),
    scriptLoaded: !1
  };
}, Rn = function() {
  var G = Rt(), H = function(N, b, S, A) {
    var a = b.createElement("script");
    a.referrerPolicy = "origin", a.type = "application/javascript", a.id = N, a.src = S;
    var c = function() {
      a.removeEventListener("load", c), A();
    };
    a.addEventListener("load", c), b.head && b.head.appendChild(a);
  }, w = function(N, b, S) {
    G.scriptLoaded ? S() : (G.listeners.push(S), N.getElementById(G.scriptId) || H(G.scriptId, N, b, function() {
      G.listeners.forEach(function(A) {
        return A();
      }), G.scriptLoaded = !0;
    }));
  }, R = function() {
    G = Rt();
  };
  return {
    load: w,
    reinitialize: R
  };
}, kn = Rn(), xn = function() {
  return typeof window < "u" ? window : global;
}, Ee = function() {
  var G = xn();
  return G && G.tinymce ? G.tinymce : null;
}, Wn = {
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
    validator: function(G) {
      return G === "html" || G === "text";
    }
  }
}, Me = function() {
  return Me = Object.assign || function(G) {
    for (var H, w = 1, R = arguments.length; w < R; w++) {
      H = arguments[w];
      for (var N in H) Object.prototype.hasOwnProperty.call(H, N) && (G[N] = H[N]);
    }
    return G;
  }, Me.apply(this, arguments);
}, Mn = function(G, H, w, R) {
  return G(R || "div", {
    id: H,
    ref: w
  });
}, Ln = function(G, H, w) {
  return G("textarea", {
    id: H,
    visibility: "hidden",
    ref: w
  });
}, ut = { selector: void 0, target: void 0 }, $n = Le({
  props: Wn,
  setup: function(G, H) {
    var w = G.init ? Me(Me({}, G.init), ut) : Me({}, ut), R = _e(G), N = R.disabled, b = R.modelValue, S = R.tagName, A = ne(null), a = null, c = G.id || Dt("tiny-vue"), n = G.init && G.init.inline || G.inline, r = !!H.attrs["onUpdate:modelValue"], i = !0, t = G.initialValue ? G.initialValue : "", e = "", o = function(u) {
      return r ? function() {
        return b != null && b.value ? b.value : "";
      } : function() {
        return u ? t : e;
      };
    }, s = function() {
      var u = o(i), C = Me(Me({}, w), { readonly: G.disabled, target: A.value, plugins: wn(w.plugins, G.plugins), toolbar: G.toolbar || w.toolbar, inline: n, license_key: G.licenseKey, setup: function(p) {
        a = p, p.on("init", function(f) {
          return bn(f, G, H, p, b, u);
        }), typeof w.setup == "function" && w.setup(p);
      } });
      yn(A.value) && (A.value.style.visibility = ""), Ee().init(C), i = !1;
    };
    De(N, function(u) {
      var C;
      a !== null && (typeof ((C = a.mode) === null || C === void 0 ? void 0 : C.set) == "function" ? a.mode.set(u ? "readonly" : "design") : a.setMode(u ? "readonly" : "design"));
    }), De(S, function(u) {
      var C;
      r || (e = a.getContent()), (C = Ee()) === null || C === void 0 || C.remove(a), Ve(function() {
        return s();
      });
    }), Ye(function() {
      if (Ee() !== null)
        s();
      else if (A.value && A.value.ownerDocument) {
        var u = G.cloudChannel ? G.cloudChannel : "7", C = G.apiKey ? G.apiKey : "no-api-key", p = Sn(G.tinymceScriptSrc) ? "https://cdn.tiny.cloud/1/".concat(C, "/tinymce/").concat(u, "/tinymce.min.js") : G.tinymceScriptSrc;
        kn.load(A.value.ownerDocument, p, s);
      }
    }), Xe(function() {
      Ee() !== null && Ee().remove(a);
    }), n || (an(function() {
      i || s();
    }), ln(function() {
      var u;
      r || (e = a.getContent()), (u = Ee()) === null || u === void 0 || u.remove(a);
    }));
    var l = function(u) {
      var C;
      e = a.getContent(), (C = Ee()) === null || C === void 0 || C.remove(a), w = Me(Me(Me({}, w), u), ut), Ve(function() {
        return s();
      });
    };
    return H.expose({
      rerender: l,
      getEditor: function() {
        return a;
      }
    }), function() {
      return n ? Mn(Ne, c, A, G.tagName) : Ln(Ne, c, A);
    };
  }
});
const Gn = "74ca372jx03ojgry4czoi2g59d4pruuozmudnvfqwzs742yz", Bn = {
  __name: "GeneralComponentEditing",
  props: /* @__PURE__ */ Oe({
    is_component: {
      type: Boolean,
      default: !0
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(G) {
    const H = qe(G, "modelValue"), w = {
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
    function R() {
      const N = prompt("Enter new prop name:");
      H.value.props === void 0 && (H.value.props = {}), N && (H.value.props[N] = "");
    }
    return (N, b) => {
      const S = ae("v-text-field"), A = ae("v-btn"), a = ae("v-select"), c = ae("v-icon"), n = ae("v-textarea"), r = ae("v-btn-group");
      return J(), se(Re, null, [
        G.is_component ? (J(), te(S, {
          key: 0,
          modelValue: H.value.component,
          "onUpdate:modelValue": b[0] || (b[0] = (i) => H.value.component = i),
          label: "Component",
          type: "text"
        }, null, 8, ["modelValue"])) : (J(), te(S, {
          key: 1,
          modelValue: H.value.name,
          "onUpdate:modelValue": b[1] || (b[1] = (i) => H.value.name = i),
          label: "Name",
          type: "text"
        }, null, 8, ["modelValue"])),
        (J(!0), se(Re, null, Ze(H.value.props, (i, t) => {
          var e;
          return J(), se(Re, { key: t }, [
            typeof w[t] == "string" && w[t] !== "htmlContent" ? (J(), te(Vt("v-" + w[t]), {
              key: 0,
              modelValue: H.value.props[t],
              "onUpdate:modelValue": (o) => H.value.props[t] = o,
              label: t
            }, {
              append: U(() => [
                ee(A, {
                  variant: "text",
                  color: "red",
                  onClick: () => {
                    delete H.value.props[t];
                  },
                  icon: "fa-solid fa-xmark"
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "label"])) : ((e = w[t]) == null ? void 0 : e.type) === "select" ? (J(), te(a, {
              key: 1,
              modelValue: H.value.props[t],
              "onUpdate:modelValue": (o) => H.value.props[t] = o,
              label: t,
              items: w[t].enum
            }, {
              append: U(() => [
                ee(A, {
                  variant: "text",
                  color: "red",
                  onClick: () => {
                    delete H.value.props[t];
                  },
                  icon: "fa-solid fa-xmark"
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "label", "items"])) : (J(), te(S, {
              key: 2,
              modelValue: H.value.props[t],
              "onUpdate:modelValue": (o) => H.value.props[t] = o,
              label: t,
              type: "text"
            }, {
              append: U(() => [
                ee(A, {
                  variant: "text",
                  color: "red",
                  onClick: () => {
                    delete H.value.props[t];
                  },
                  icon: "fa-solid fa-xmark"
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "label"]))
          ], 64);
        }), 128)),
        H.value.hasOwnProperty("htmlContent") ? (J(), te(z($n), {
          key: 2,
          modelValue: H.value.htmlContent,
          "onUpdate:modelValue": b[2] || (b[2] = (i) => H.value.htmlContent = i),
          init: z(pn),
          "api-key": Gn
        }, null, 8, ["modelValue", "init"])) : re("", !0),
        H.value.hasOwnProperty("textContent") ? (J(), te(n, {
          key: 3,
          modelValue: H.value.textContent,
          "onUpdate:modelValue": b[3] || (b[3] = (i) => H.value.textContent = i),
          label: "Text Content",
          type: "text"
        }, {
          prepend: U(() => [
            ee(c, null, {
              default: U(() => b[8] || (b[8] = [
                Ie("fa-solid fa-text-width")
              ])),
              _: 1,
              __: [8]
            })
          ]),
          _: 1
        }, 8, ["modelValue"])) : re("", !0),
        ee(r, { variant: "text" }, {
          default: U(() => [
            H.value.hasOwnProperty("htmlContent") ? (J(), te(A, {
              key: 0,
              color: "red",
              onClick: b[4] || (b[4] = () => {
                delete H.value.htmlContent;
              })
            }, {
              default: U(() => b[9] || (b[9] = [
                Ie("Delete htmlContent")
              ])),
              _: 1,
              __: [9]
            })) : (J(), te(A, {
              key: 1,
              color: "green",
              onClick: b[5] || (b[5] = () => {
                H.value.htmlContent = "";
              })
            }, {
              default: U(() => b[10] || (b[10] = [
                Ie("Add htmlContent")
              ])),
              _: 1,
              __: [10]
            })),
            H.value.hasOwnProperty("textContent") ? (J(), te(A, {
              key: 2,
              color: "red",
              onClick: b[6] || (b[6] = () => {
                delete H.value.textContent;
              })
            }, {
              default: U(() => b[11] || (b[11] = [
                Ie("Delete textContent")
              ])),
              _: 1,
              __: [11]
            })) : (J(), te(A, {
              key: 3,
              color: "green",
              onClick: b[7] || (b[7] = () => {
                H.value.textContent = "";
              })
            }, {
              default: U(() => b[12] || (b[12] = [
                Ie("Add textContent")
              ])),
              _: 1,
              __: [12]
            })),
            ee(A, {
              color: "green",
              onClick: R
            }, {
              default: U(() => b[13] || (b[13] = [
                Ie("Add New Prop")
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
}, Zn = /* @__PURE__ */ et(Bn, [["__scopeId", "data-v-aa3cbf01"]]), Tn = {
  __name: "ComponentElementEdit",
  props: /* @__PURE__ */ Oe({
    data: {
      type: Object,
      required: !0
    }
  }, {
    dialog: {},
    dialogModifiers: {}
  }),
  emits: /* @__PURE__ */ Oe(["dataSaved"], ["update:dialog"]),
  setup(G, { emit: H }) {
    const w = G, R = ne(w.data), N = qe(G, "dialog"), b = ne("");
    De(N, (A) => {
      var a;
      A && w.data.hasOwnProperty("component") ? (b.value = (a = w.data) == null ? void 0 : a.component, R.value = JSON.parse(JSON.stringify(w.data))) : A && w.data.hasOwnProperty("name") && (b.value = "slot", R.value = JSON.parse(JSON.stringify(w.data)));
    });
    const S = () => {
      N.value = !1, b.value = "", R.value = {};
    };
    return (A, a) => {
      const c = ae("v-card-text"), n = ae("v-spacer"), r = ae("v-btn"), i = ae("v-card-actions"), t = ae("v-icon"), e = ae("v-card"), o = ae("v-dialog");
      return J(), te(o, {
        modelValue: N.value,
        "onUpdate:modelValue": a[2] || (a[2] = (s) => N.value = s),
        "max-width": "800px",
        "retain-focus": !1
      }, {
        default: U(() => [
          ee(e, {
            title: "Editing: " + b.value
          }, {
            append: U(() => [
              ee(r, {
                class: "close-btn",
                variant: "text",
                onClick: S
              }, {
                default: U(() => [
                  ee(t, null, {
                    default: U(() => a[5] || (a[5] = [
                      Ie("fa-solid fa-xmark")
                    ])),
                    _: 1,
                    __: [5]
                  })
                ]),
                _: 1
              })
            ]),
            default: U(() => [
              b.value != "" ? (J(), te(c, { key: 0 }, {
                default: U(() => [
                  ee(Zn, {
                    modelValue: R.value,
                    "onUpdate:modelValue": a[0] || (a[0] = (s) => R.value = s),
                    is_component: b.value != "slot"
                  }, null, 8, ["modelValue", "is_component"])
                ]),
                _: 1
              })) : re("", !0),
              ee(i, null, {
                default: U(() => [
                  ee(n),
                  ee(r, {
                    color: "red",
                    onClick: S
                  }, {
                    default: U(() => a[3] || (a[3] = [
                      Ie("Cancel")
                    ])),
                    _: 1,
                    __: [3]
                  }),
                  ee(r, {
                    color: "green",
                    onClick: a[1] || (a[1] = (s) => A.$emit("dataSaved", R.value))
                  }, {
                    default: U(() => a[4] || (a[4] = [
                      Ie("Save")
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
}, Hn = /* @__PURE__ */ et(Tn, [["__scopeId", "data-v-18173f8b"]]), Kt = [
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
function Yt(G) {
  const H = Ae("componentClipboard");
  return {
    removeElement: (b) => {
      const S = [...G.value], A = b.slice(0, -1).reduce((a, c) => a[c], S);
      if (A) {
        const a = b[b.length - 1];
        A.splice(a, 1);
      }
      G.value = S;
    },
    pasteElement: (b, S) => {
      if (!H.hasContent()) return;
      const A = [...G.value], a = JSON.parse(JSON.stringify(H.element));
      switch (S) {
        case "prepend":
          A.splice(b[b.length - 1], 0, a);
          break;
        case "append":
          A.splice(b[b.length - 1] + 1, 0, a);
          break;
        case "child":
          const c = b.reduce((n, r) => n[r], A);
          c.children || (c.children = []), c.children.push(a);
          break;
      }
      G.value = A, H.isCut && H.clear();
    },
    insertElement: (b, S) => {
      const A = [...G.value], a = b.reduce((c, n) => c[n], A);
      a.children || (a.children = []), a.children.push(S), G.value = A;
    }
  };
}
function Xt(G, H) {
  return {
    label: "Insert",
    children: Kt.map((w) => ({
      label: w.title,
      onClick: () => G(H, { ...w })
    }))
  };
}
const En = { class: "tree-node" }, Vn = {
  key: 1,
  class: "node-content"
}, Nn = {
  key: 0,
  class: "children"
}, _n = { key: 0 }, On = {
  key: 1,
  class: "slots"
}, Fn = ["onContextmenu"], Dn = {
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
  setup(G, { expose: H, emit: w }) {
    const R = G, N = w, b = ne(!0);
    function S() {
      b.value = !b.value;
    }
    H({
      isExpanded: b,
      treeNodes: ne([])
    });
    function A(s, l) {
      s.preventDefault(), N("openEdit", { event: s, element: l, path: [] });
    }
    function a(s, l) {
      const u = ["children", l, ...s.path];
      N("openEdit", {
        event: s.event,
        element: s.element,
        path: u
      });
    }
    function c(s, l, u) {
      s.preventDefault(), N("openEdit", { event: s, element: l, path: ["slots", u] });
    }
    const n = Te(() => Object.prototype.toString.call(R.node) === "[object Object]"), r = Te(() => n.value && R.node.component ? R.node.component : R.label), i = Te(() => {
      if (n.value) {
        if (R.node.textContent) return R.node.textContent;
        if (R.node.htmlContent) return "[HTML content]";
      }
      return "";
    }), t = Te(
      () => n.value && Array.isArray(R.node.children) && R.node.children.length > 0
    ), e = Te(
      () => n.value && Array.isArray(R.node.slots) && R.node.slots.length > 0
    ), o = Te(() => t.value || e.value);
    return (s, l) => (J(), se("div", En, [
      pe("div", {
        class: "node-label",
        onContextmenu: l[0] || (l[0] = it((u) => A(u, R.node), ["stop"]))
      }, [
        o.value ? (J(), se("span", {
          key: 0,
          class: "expand-icon",
          onClick: S
        }, [
          pe("i", {
            class: Be(b.value ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-right")
          }, null, 2)
        ])) : re("", !0),
        Ie(" " + Ge(r.value) + " ", 1),
        i.value ? (J(), se("span", Vn, " - " + Ge(i.value), 1)) : re("", !0)
      ], 32),
      o.value && b.value ? (J(), se("div", Nn, [
        t.value ? (J(), se("div", _n, [
          (J(!0), se(Re, null, Ze(R.node.children, (u, C) => (J(), te(zt, {
            key: "child-" + C,
            node: u,
            label: u.component || "[" + C + "]",
            onOpenEdit: (p) => a(p, C),
            ref_for: !0,
            ref: "treeNodes"
          }, null, 8, ["node", "label", "onOpenEdit"]))), 128))
        ])) : re("", !0),
        e.value ? (J(), se("div", On, [
          (J(!0), se(Re, null, Ze(R.node.slots, (u, C) => (J(), se("div", {
            key: "slot-" + C,
            class: "slot-label",
            onContextmenu: it((p) => c(p, u, C), ["stop"])
          }, " Slot: " + Ge(u.name), 41, Fn))), 128))
        ])) : re("", !0)
      ])) : re("", !0)
    ]));
  }
}, zt = /* @__PURE__ */ et(Dn, [["__scopeId", "data-v-aaf0fd33"]]);
let He = null;
function Kn() {
  return He !== null;
}
function Yn(G) {
  He && Pt(), He = G;
}
function kt(G) {
  G === He && (He = null);
}
function Pt() {
  He && (He.closeMenu(), He = null);
}
const Se = {
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
function je(G, H) {
  let w = G.offsetTop;
  return G.offsetParent != null && G.offsetParent != H && (w -= G.offsetParent.scrollTop, w += je(G.offsetParent, H)), w;
}
function Ue(G, H) {
  let w = G.offsetLeft;
  return G.offsetParent != null && G.offsetParent != H && (w -= G.offsetParent.scrollLeft, w += Ue(G.offsetParent, H)), w;
}
function Xn(G, H, w, R) {
  return {
    x: Ue(G, R) + H,
    y: je(G, R) + w
  };
}
const gt = "mx-menu-default-container", zn = "mx-menu-container-";
let Pn = 0;
function Jt(G) {
  const { getContainer: H, zIndex: w } = G;
  if (H) {
    const N = typeof H == "function" ? H() : H;
    if (N) {
      let b = N.getAttribute("id");
      return b || (b = zn + Pn++, N.setAttribute("id", b)), {
        eleId: b,
        container: N,
        isNew: !1
      };
    }
  }
  let R = document.getElementById(gt);
  return R || (R = document.createElement("div"), R.setAttribute("id", gt), R.setAttribute("class", "mx-menu-ghost-host fullscreen"), document.body.appendChild(R)), R.style.zIndex = (w == null ? void 0 : w.toString()) || Se.defaultZindex.toString(), {
    eleId: gt,
    container: R,
    isNew: !0
  };
}
function xt(G) {
  return typeof G == "number" ? `${G}px` : G;
}
const xe = Le({
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
  setup(G) {
    const { vnode: H, data: w } = _e(G);
    return () => typeof H.value == "function" ? H.value(w.value) : H.value;
  }
});
function Jn(G, H) {
  const w = { ...G };
  return delete w[H], w;
}
var jn = Object.defineProperty, Un = (G, H, w) => H in G ? jn(G, H, { enumerable: !0, configurable: !0, writable: !0, value: w }) : G[H] = w, Wt = (G, H, w) => Un(G, typeof H != "symbol" ? H + "" : H, w);
class Mt {
  constructor(H, w) {
    Wt(this, "x", 0), Wt(this, "y", 0), this.x = H || 0, this.y = w || 0;
  }
  set(H, w) {
    this.x = H, this.y = w;
  }
  substract(H) {
    this.x -= H.x, this.y -= H.y;
  }
}
function Lt(G) {
  const { onDown: H, onMove: w, onUp: R } = G, N = new Mt(), b = new Mt();
  let S;
  function A(c) {
    c.stopPropagation(), b.set(c.x, c.y), b.substract(N), w(N, b, c, S);
  }
  function a(c) {
    R(c, S), N.set(0, 0), document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", a);
  }
  return (c, n) => H(c, n) ? (S = n, N.set(c.x, c.y), document.addEventListener("mousemove", A), document.addEventListener("mouseup", a), c.stopPropagation(), !0) : !1;
}
function Qn(G, H) {
  let w = 0;
  return {
    start() {
      w > 0 && clearInterval(w), w = setInterval(() => {
        w = 0, H();
      }, G);
    },
    stop() {
      w > 0 && (clearInterval(w), w = 0);
    }
  };
}
const Je = [], $t = Qn(100, () => {
  for (const G of Je)
    G();
});
function qn(G, H, w, R) {
  let N = 0, b = 0;
  function S() {
    G.value && (H && N !== G.value.offsetWidth && H(G.value.offsetWidth), w && b !== G.value.offsetHeight && w(G.value.offsetHeight), N = G.value.offsetWidth, b = G.value.offsetHeight);
  }
  return {
    startResizeChecker() {
      $t.start(), Je.push(S);
    },
    stopResizeChecker() {
      const A = Je.indexOf(S);
      A >= 0 && Je.splice(A, 1), Je.length === 0 && $t.stop();
    }
  };
}
const Gt = 140, ei = 70, ti = /* @__PURE__ */ Le({
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
  setup(G, { expose: H, emit: w }) {
    const R = G, N = w, b = ne(), S = ne(), A = ne(), a = ne(), c = ne(), n = ne(), r = ne(!1), i = Te(() => R.scroll === "horizontal" || R.scroll === "both"), t = Te(() => R.scroll === "vertical" || R.scroll === "both"), e = bt({
      show: !1,
      size: 0,
      sizeRaw: 0,
      pos: 0
    }), o = bt({
      show: !1,
      size: 0,
      sizeRaw: 0,
      pos: 0
    });
    let s = 0, l = 0, u = 0, C = 0, p = null;
    const f = { attributes: !0, childList: !0 };
    function g() {
      if (b.value) {
        if (e.show) {
          const E = b.value.offsetWidth / b.value.scrollWidth;
          e.sizeRaw = E * b.value.offsetWidth, e.size = E * 100, e.pos = b.value.scrollLeft / (b.value.scrollWidth - b.value.offsetWidth) * (100 - e.size), E >= 1 && (e.show = !1);
        }
        if (o.show) {
          const E = b.value.offsetHeight / b.value.scrollHeight;
          o.sizeRaw = E * b.value.offsetHeight, o.size = E * 100, o.pos = b.value.scrollTop / (b.value.scrollHeight - b.value.offsetHeight) * (100 - o.size), E >= 1 && (o.show = !1);
        }
        N("scroll", b.value.scrollLeft, b.value.scrollTop);
      }
    }
    function v(E = !1) {
      if (!b.value)
        return;
      let F = i.value, D = t.value;
      const Y = F && (s !== b.value.scrollWidth || u !== b.value.offsetWidth), P = t && (l !== b.value.scrollHeight || C !== b.value.offsetHeight);
      if (!E && !Y && !P)
        return;
      const X = window.getComputedStyle(b.value);
      (X.overflow === "hidden" || X.overflowX === "hidden") && (F = !1), (X.overflow === "hidden" || X.overflowY === "hidden") && (D = !1), e.show = F, o.show = D, g(), u = b.value.offsetWidth, C = b.value.offsetHeight, s = b.value.scrollWidth, l = b.value.scrollHeight, N("resized", s, l);
    }
    function M(E) {
      var F;
      R.scroll == "horizontal" && (E.deltaMode == 0 && ((F = b.value) == null || F.scrollTo({
        left: b.value.scrollLeft + (E.deltaY > 0 ? Gt : -140),
        behavior: "smooth"
      })), E.preventDefault(), E.stopPropagation());
    }
    function W(E) {
      var F;
      E.deltaMode == 0 && ((F = b.value) == null || F.scrollTo({
        left: b.value.scrollLeft + (E.deltaY > 0 ? Gt : -140),
        behavior: "smooth"
      }), E.preventDefault(), E.stopPropagation());
    }
    function k(E) {
      var F;
      E.deltaMode == 0 && ((F = b.value) == null || F.scrollTo({
        top: b.value.scrollTop + (E.deltaY > 0 ? ei : -70),
        behavior: "smooth"
      }), E.preventDefault(), E.stopPropagation());
    }
    let Z = 0, y = 0, I = 0, d = 0;
    const h = Lt({
      onDown(E) {
        return !A.value || !c.value ? !1 : (Z = E.offsetX, y = E.x - E.offsetX - c.value.offsetLeft, E.preventDefault(), r.value = !0, !0);
      },
      onMove(E, F, D) {
        b.value && A.value && (L(D.x - Z - y), D.preventDefault(), D.stopPropagation());
      },
      onUp() {
        r.value = !1;
      }
    }), m = Lt({
      onDown(E) {
        return !a.value || !n.value ? !1 : (I = E.offsetY, d = E.y - E.offsetY - n.value.offsetTop, E.preventDefault(), r.value = !0, !0);
      },
      onMove(E, F, D) {
        b.value && a.value && (B(D.y - I - d), D.preventDefault(), D.stopPropagation());
      },
      onUp() {
        r.value = !1;
      }
    });
    function x(E) {
      b.value && (b.value.scrollLeft = E / 100 * (b.value.scrollWidth - b.value.offsetWidth));
    }
    function $(E) {
      b.value && (b.value.scrollLeft = E / 100 * (b.value.scrollHeight - b.value.offsetHeight));
    }
    function L(E) {
      b.value && (b.value.scrollLeft = E / (b.value.offsetWidth - e.sizeRaw) * (b.value.scrollWidth - b.value.offsetWidth));
    }
    function B(E) {
      b.value && (b.value.scrollTop = E / (b.value.offsetHeight - o.sizeRaw) * (b.value.scrollHeight - b.value.offsetHeight));
    }
    function T(E) {
      R.scrollBarBackgroundClickable && L(E.offsetX - e.sizeRaw / 2);
    }
    function V(E) {
      R.scrollBarBackgroundClickable && B(E.offsetY - o.sizeRaw / 2);
    }
    const {
      startResizeChecker: _,
      stopResizeChecker: O
    } = qn(
      b,
      () => v(),
      () => v()
    );
    return Ye(() => {
      Ve(() => {
        setTimeout(() => v(!0), 200), v(!0), _(), p = new MutationObserver(() => v()), p.observe(b.value, f);
      });
    }), Xe(() => {
      O(), p && (p.disconnect(), p = null);
    }), H({
      refreshScrollState() {
        v(!0);
      },
      getScrollContainer() {
        return b.value;
      },
      scrollTo(E, F) {
        var D;
        (D = b.value) == null || D.scrollTo(E, F);
      },
      scrollToTop() {
        var E;
        (E = b.value) == null || E.scrollTo(0, 0);
      },
      scrollToBottom() {
        var E;
        (E = b.value) == null || E.scrollTo(b.value.scrollWidth, b.value.scrollHeight);
      }
    }), (E, F) => (J(), se("div", {
      ref_key: "scrollrect",
      ref: S,
      class: Be([
        "vue-scroll-rect",
        G.scrollBarAlwaysShow ? "always-show-scrollbar" : "",
        G.scrollBarBackgroundClickable ? "background-clickable" : "",
        r.value ? "dragging" : ""
      ]),
      style: Pe({
        width: G.width ? `${G.width}px` : void 0,
        height: G.height ? `${G.height}px` : void 0
      }),
      onWheel: M
    }, [
      pe("div", {
        ref_key: "container",
        ref: b,
        class: Be(["scroll-content", G.scroll, G.containerClass]),
        style: Pe({
          maxWidth: G.maxWidth ? `${G.maxWidth}px` : void 0,
          maxHeight: G.maxHeight ? `${G.maxHeight}px` : void 0,
          ...G.containerStyle
        }),
        onScroll: g
      }, [
        ve(E.$slots, "default")
      ], 38),
      e.show ? ve(E.$slots, "scrollBarX", {
        key: 0,
        scrollBarValue: e,
        onScroll: x
      }, () => [
        pe("div", {
          ref_key: "scrollBarRefX",
          ref: A,
          class: "scrollbar horizontal",
          onClick: T,
          onWheel: W
        }, [
          pe("div", {
            class: "thumb",
            ref_key: "scrollBarThumbRefX",
            ref: c,
            style: Pe({ left: `${e.pos}%`, width: `${e.size}%` }),
            onMousedown: F[0] || (F[0] = //@ts-ignore
            (...D) => z(h) && z(h)(...D)),
            onWheel: W
          }, null, 36)
        ], 544)
      ]) : re("", !0),
      o.show ? ve(E.$slots, "scrollBarY", {
        key: 1,
        scrollBarValue: o,
        onScroll: $
      }, () => [
        o.show ? (J(), se("div", {
          key: 0,
          ref_key: "scrollBarRefY",
          ref: a,
          class: "scrollbar vertical",
          onClick: V,
          onWheel: k
        }, [
          pe("div", {
            class: "thumb",
            ref_key: "scrollBarThumbRefY",
            ref: n,
            style: Pe({ top: `${o.pos}%`, height: `${o.size}%` }),
            onMousedown: F[1] || (F[1] = //@ts-ignore
            (...D) => z(m) && z(m)(...D)),
            onWheel: k
          }, null, 36)
        ], 544)) : re("", !0)
      ]) : re("", !0)
    ], 38));
  }
}), mt = (G, H) => {
  const w = G.__vccOpts || G;
  for (const [R, N] of H)
    w[R] = N;
  return w;
}, ni = {}, ii = {
  class: "mx-checked-mark",
  "aria-hidden": "true",
  viewBox: "0 0 1024 1024"
}, oi = /* @__PURE__ */ pe("path", { d: "M129.3,428.6L52,512l345,372.5l575-620.8l-69.5-75L400.4,718.2L129.3,428.6z" }, null, -1), ri = [
  oi
];
function si(G, H) {
  return J(), se("svg", ii, ri);
}
const ai = /* @__PURE__ */ mt(ni, [["render", si]]), li = {}, ci = {
  class: "mx-right-arrow",
  "aria-hidden": "true",
  viewBox: "0 0 1024 1024"
}, ui = /* @__PURE__ */ pe("path", { d: "M307.018 49.445c11.517 0 23.032 4.394 31.819 13.18L756.404 480.18c8.439 8.438 13.181 19.885 13.181 31.82s-4.741 23.38-13.181 31.82L338.838 961.376c-17.574 17.573-46.065 17.573-63.64-0.001-17.573-17.573-17.573-46.065 0.001-63.64L660.944 512 275.198 126.265c-17.574-17.573-17.574-46.066-0.001-63.64C283.985 53.839 295.501 49.445 307.018 49.445z" }, null, -1), gi = [
  ui
];
function hi(G, H) {
  return J(), se("svg", ci, gi);
}
const di = /* @__PURE__ */ mt(li, [["render", hi]]), fi = { class: "mx-item-row" }, pi = ["xlink:href"], Ci = {
  key: 1,
  class: "label"
}, mi = { class: "mx-item-row" }, Ii = { class: "mx-shortcut" }, It = /* @__PURE__ */ Le({
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
  setup(G, { expose: H, emit: w }) {
    const R = G, N = w, {
      clickHandler: b,
      clickClose: S,
      clickableWhenHasChildren: A,
      disabled: a,
      hidden: c,
      label: n,
      icon: r,
      iconFontClass: i,
      showRightArrow: t,
      shortcut: e,
      hasChildren: o
    } = _e(R), s = ne(!1), l = ne(!1), u = ne(), C = Ae("globalOptions"), p = Ae("globalHasSlot"), f = Ae("globalRenderSlot"), g = Ae("globalCloseMenu"), v = Ae("menuContext"), M = {
      getSubMenuInstance: () => {
      },
      showSubMenu: () => s.value ? (v.markActiveMenuItem(M, !0), !0) : o.value ? (k(), !0) : !1,
      hideSubMenu: () => {
        v.closeOtherSubMenu();
      },
      isDisabledOrHidden: () => a.value || c.value,
      getElement: () => u.value,
      focus: () => l.value = !0,
      blur: () => l.value = !1,
      click: W
    };
    We("menuItemInstance", M), Ye(() => {
      v.isMenuItemDataCollectedFlag() ? Ve(() => {
        let I = 0;
        const d = v.getElement();
        if (d) {
          let h = 0;
          for (let m = 0; m < d.children.length; m++) {
            const x = d.children[m];
            if (x.getAttribute("data-type") === "ContextMenuItem") {
              if (x === u.value) {
                I = h;
                break;
              }
              h++;
            }
          }
        }
        v.addChildMenuItem(M, I);
      }) : v.addChildMenuItem(M);
    }), Xe(() => {
      v.removeChildMenuItem(M);
    });
    function W(I) {
      if (!a.value) {
        if (I) {
          const d = I.target;
          if (d.classList.contains("mx-context-no-clickable") || C.value.ignoreClickClassName && d.classList.contains(C.value.ignoreClickClassName))
            return;
          if (C.value.clickCloseClassName && d.classList.contains(C.value.clickCloseClassName)) {
            I.stopPropagation(), g(R.rawMenuItem);
            return;
          }
        }
        o.value ? A.value ? (typeof b.value == "function" && b.value(I), N("click", I)) : s.value || k() : (typeof b.value == "function" && b.value(I), N("click", I), S.value && g(R.rawMenuItem));
      }
    }
    function k(I) {
      l.value = !1, v.checkCloseOtherSubMenuTimeOut() || v.closeOtherSubMenu(), a.value || (v.markActiveMenuItem(M), o.value && (I || v.markThisOpenedByKeyBoard(), v.addOpenedSubMenu(Z), s.value = !0, Ve(() => N("subMenuOpen", M))));
    }
    function Z() {
      l.value = !1, s.value = !1, N("subMenuClose", M);
    }
    function y() {
      return {
        disabled: a.value,
        label: n.value,
        icon: r.value,
        iconFontClass: i.value,
        showRightArrow: t.value,
        clickClose: S.value,
        clickableWhenHasChildren: A.value,
        shortcut: e.value,
        theme: C.value.theme,
        isOpen: s,
        hasChildren: o,
        onClick: W,
        onMouseEnter: k,
        closeMenu: g
      };
    }
    return H(M), (I, d) => z(c) ? re("", !0) : (J(), se("div", {
      key: 0,
      class: "mx-context-menu-item-wrapper",
      ref_key: "menuItemRef",
      ref: u,
      "data-type": "ContextMenuItem"
    }, [
      z(p)("itemRender") ? (J(), te(z(xe), {
        key: 0,
        vnode: () => z(f)("itemRender", y())
      }, null, 8, ["vnode"])) : G.customRender ? (J(), te(z(xe), {
        key: 1,
        vnode: G.customRender,
        data: y()
      }, null, 8, ["vnode", "data"])) : (J(), se("div", {
        key: 2,
        class: Be([
          "mx-context-menu-item",
          z(a) ? "disabled" : "",
          l.value ? "keyboard-focus" : "",
          G.customClass ? " " + G.customClass : "",
          s.value ? "open" : ""
        ]),
        onClick: W,
        onMouseenter: k
      }, [
        ve(I.$slots, "default", {}, () => [
          pe("div", fi, [
            pe("div", {
              class: Be([
                "mx-icon-placeholder",
                G.preserveIconWidth ? "preserve-width" : ""
              ])
            }, [
              ve(I.$slots, "icon", {}, () => [
                z(p)("itemIconRender") ? (J(), te(z(xe), {
                  key: 0,
                  vnode: () => z(f)("itemIconRender", y())
                }, null, 8, ["vnode"])) : typeof G.svgIcon == "string" && G.svgIcon ? (J(), se("svg", Fe({
                  key: 1,
                  class: "icon svg"
                }, G.svgProps), [
                  pe("use", { "xlink:href": G.svgIcon }, null, 8, pi)
                ], 16)) : typeof z(r) != "string" ? (J(), te(z(xe), {
                  key: 2,
                  vnode: z(r),
                  data: z(r)
                }, null, 8, ["vnode", "data"])) : typeof z(r) == "string" && z(r) !== "" ? (J(), se("i", {
                  key: 3,
                  class: Be(z(r) + " icon " + z(i) + " " + z(C).iconFontClass)
                }, null, 2)) : re("", !0)
              ]),
              G.checked ? ve(I.$slots, "check", { key: 0 }, () => [
                z(p)("itemCheckRender") ? (J(), te(z(xe), {
                  key: 0,
                  vnode: () => z(f)("itemCheckRender", y())
                }, null, 8, ["vnode"])) : re("", !0),
                ee(ai)
              ]) : re("", !0)
            ], 2),
            ve(I.$slots, "label", {}, () => [
              z(p)("itemLabelRender") ? (J(), te(z(xe), {
                key: 0,
                vnode: () => z(f)("itemLabelRender", y())
              }, null, 8, ["vnode"])) : typeof z(n) == "string" ? (J(), se("span", Ci, Ge(z(n)), 1)) : (J(), te(z(xe), {
                key: 2,
                vnode: z(n),
                data: z(n)
              }, null, 8, ["vnode", "data"]))
            ])
          ]),
          pe("div", mi, [
            z(e) || I.$slots.shortcut ? ve(I.$slots, "shortcut", { key: 0 }, () => [
              z(p)("itemShortcutRender") ? (J(), te(z(xe), {
                key: 0,
                vnode: () => z(f)("itemShortcutRender", y())
              }, null, 8, ["vnode"])) : re("", !0),
              pe("span", Ii, Ge(z(e)), 1)
            ]) : re("", !0),
            z(t) ? ve(I.$slots, "rightArrow", { key: 1 }, () => [
              z(p)("itemRightArrowRender") ? (J(), te(z(xe), {
                key: 0,
                vnode: () => z(f)("itemRightArrowRender", y())
              }, null, 8, ["vnode"])) : re("", !0),
              ee(di)
            ]) : re("", !0)
          ])
        ])
      ], 34)),
      z(C).menuTransitionProps ? (J(), te(Nt, _t(Fe({ key: 3 }, z(C).menuTransitionProps)), {
        default: U(() => [
          s.value ? ve(I.$slots, "submenu", {
            key: 0,
            context: M
          }) : re("", !0)
        ]),
        _: 3
      }, 16)) : s.value ? ve(I.$slots, "submenu", {
        key: 4,
        context: M
      }) : re("", !0)
    ], 512));
  }
}), Ai = Le({
  name: "ContextMenuSperator",
  components: {
    VNodeRender: xe
  },
  setup() {
    const G = Ae("globalHasSlot"), H = Ae("globalRenderSlot");
    return {
      globalHasSlot: G,
      globalRenderSlot: H
    };
  }
}), vi = {
  key: 1,
  class: "mx-context-menu-item-sperator mx-context-no-clickable"
};
function bi(G, H, w, R, N, b) {
  const S = ae("VNodeRender");
  return G.globalHasSlot("separatorRender") ? (J(), te(S, {
    key: 0,
    vnode: () => G.globalRenderSlot("separatorRender", {})
  }, null, 8, ["vnode"])) : (J(), se("div", vi));
}
const Qe = /* @__PURE__ */ mt(Ai, [["render", bi]]), ot = /* @__PURE__ */ Le({
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
  setup(G, { expose: H }) {
    const w = G, R = ne(!1), N = Ae("globalGetMenuHostId", ""), b = Ae("menuContext"), S = Ae("globalOptions");
    Ae("globalHasSlot"), Ae("globalRenderSlot");
    const { zIndex: A, getParentWidth: a, getParentHeight: c, getZoom: n } = b, { adjustPosition: r } = _e(w), i = ne(), t = ne(), e = ne(), o = [], s = Ae("globalSetCurrentSubMenu"), l = [];
    let u = null, C = 0;
    function p() {
      u && u.blur();
    }
    function f(L, B) {
      if (L) {
        for (let T = B !== void 0 ? B : 0; T < l.length; T++)
          if (!l[T].isDisabledOrHidden()) {
            g(T);
            break;
          }
      } else
        for (let T = B !== void 0 ? B : l.length - 1; T >= 0; T--)
          if (!l[T].isDisabledOrHidden()) {
            g(T);
            break;
          }
    }
    function g(L) {
      var B;
      if (u && p(), L !== void 0 && (u = l[Math.max(0, Math.min(L, l.length - 1))]), !u)
        return;
      u.focus();
      const T = u.getElement();
      T && ((B = i.value) == null || B.scrollTo(0, Math.min(Math.max(-d.value, -T.offsetTop - T.offsetHeight + h.value), 0)));
    }
    function v() {
      s(M);
    }
    const M = {
      isTopLevel: () => b.getParentContext() === null,
      closeSelfAndActiveParent: () => {
        const L = Z.getParentContext();
        if (L) {
          L.closeOtherSubMenu();
          const B = L.getSubMenuInstanceContext();
          if (B)
            return B.focusCurrentItem(), !0;
        }
        return !1;
      },
      closeCurrentSubMenu: () => {
        var L;
        return (L = Z.getParentContext()) == null ? void 0 : L.closeOtherSubMenu();
      },
      moveCurrentItemFirst: () => f(!0),
      moveCurrentItemLast: () => f(!1),
      moveCurrentItemDown: () => f(!0, u ? l.indexOf(u) + 1 : 0),
      moveCurrentItemUp: () => f(!1, u ? l.indexOf(u) - 1 : 0),
      focusCurrentItem: () => g(),
      openCurrentItemSubMenu: () => u ? u == null ? void 0 : u.showSubMenu() : !1,
      triggerCurrentItemClick: (L) => u == null ? void 0 : u.click(L)
    };
    let W = !1, k = !1;
    const Z = {
      zIndex: A + 1,
      container: b.container,
      adjustPadding: S.value.adjustPadding || Se.defaultAdjustPadding,
      getParentWidth: () => {
        var L;
        return ((L = e.value) == null ? void 0 : L.offsetWidth) || 0;
      },
      getParentHeight: () => {
        var L;
        return ((L = e.value) == null ? void 0 : L.offsetHeight) || 0;
      },
      getPositon: () => [x.value.x, x.value.y],
      getZoom: () => S.value.zoom || Se.defaultZoom,
      addOpenedSubMenu(L) {
        o.push(L);
      },
      closeOtherSubMenu() {
        o.forEach((L) => L()), o.splice(0, o.length), s(M);
      },
      checkCloseOtherSubMenuTimeOut() {
        return C ? (clearTimeout(C), C = 0, !0) : !1;
      },
      closeOtherSubMenuWithTimeOut() {
        C = setTimeout(() => {
          C = 0, this.closeOtherSubMenu();
        }, 200);
      },
      addChildMenuItem: (L, B) => {
        B === void 0 ? l.push(L) : l.splice(B, 0, L);
      },
      removeChildMenuItem: (L) => {
        l.splice(l.indexOf(L), 1), L.getSubMenuInstance = () => {
        };
      },
      markActiveMenuItem: (L, B = !1) => {
        p(), u = L, B && g();
      },
      markThisOpenedByKeyBoard: () => {
        W = !0;
      },
      isOpenedByKeyBoardFlag: () => W ? (W = !1, !0) : !1,
      isMenuItemDataCollectedFlag: () => k,
      getElement: () => e.value || null,
      getParentContext: () => b,
      getSubMenuInstanceContext: () => M
    };
    We("menuContext", Z);
    const y = {
      getChildItem: (L) => l[L],
      getMenuDimensions: () => t.value ? {
        width: t.value.offsetWidth,
        height: t.value.offsetHeight
      } : { width: 0, height: 0 },
      getSubmenuRoot: () => t.value,
      getMenu: () => e.value,
      getScrollValue: () => {
        var L, B;
        return ((B = (L = i.value) == null ? void 0 : L.getScrollContainer()) == null ? void 0 : B.scrollTop) || 0;
      },
      setScrollValue: (L) => {
        var B;
        return (B = i.value) == null ? void 0 : B.scrollTo(0, L);
      },
      getScrollHeight: () => d.value,
      adjustPosition: () => {
        $();
      },
      getMaxHeight: () => h.value,
      getPosition: () => x.value,
      setPosition: (L, B) => {
        x.value.x = L, x.value.y = B;
      }
    }, I = Ae("menuItemInstance", void 0);
    I && (I.getSubMenuInstance = () => y);
    const d = ne(0), h = ne(0), m = ne(!1), x = ne({ x: 0, y: 0 });
    function $() {
      Ve(() => {
        const L = e.value, B = t.value;
        if (L && B && i.value) {
          const { container: T } = b, V = (a == null ? void 0 : a()) ?? 0, _ = (c == null ? void 0 : c()) ?? 0, O = getComputedStyle(B), E = parseFloat(O.paddingLeft), F = parseFloat(O.paddingTop), D = _ > 0 ? F : 0, Y = document.documentElement.scrollHeight / n(), P = document.documentElement.scrollWidth / n(), X = Math.min(P, T.offsetWidth), Q = Math.min(Y, T.offsetHeight);
          let ie = Ue(L, T), ge = je(L, T);
          w.direction.includes("l") ? x.value.x -= L.offsetWidth + E : w.direction.includes("r") ? x.value.x += V + E : (x.value.x += V / 2, x.value.x -= (L.offsetWidth + E) / 2), w.direction.includes("t") ? x.value.y -= (L.offsetHeight + F * 2) / n() : w.direction.includes("b") ? x.value.y -= F / n() : x.value.y -= (L.offsetHeight + F) / 2 / n(), Ve(() => {
            var Ce, ue;
            ie = Ue(L, T), ge = je(L, T), d.value = Math.min(
              w.maxHeight || 1e5,
              ((ue = (Ce = i.value) == null ? void 0 : Ce.getScrollContainer()) == null ? void 0 : ue.scrollHeight) || 0
            );
            const be = ie + L.offsetWidth - X, ke = ge + d.value + D * 2 - Q;
            if (m.value = ke > 0, r.value && be > 0) {
              const we = V + L.offsetWidth - E, $e = ie;
              we > $e ? x.value.x -= $e : x.value.x -= we;
            }
            if (m.value) {
              if (r.value) {
                const we = ke, $e = ge;
                we > $e ? x.value.y -= $e - D : x.value.y -= we - D;
              }
              h.value = Q - (x.value.y + F);
            } else
              h.value = 0;
          });
        }
        L == null || L.focus({
          preventScroll: !0
        }), b.isOpenedByKeyBoardFlag() && f(!0), k = !0;
      });
    }
    return Ye(() => {
      var L;
      R.value = !0;
      const B = (L = w.parentMenuItemContext) == null ? void 0 : L.getElement();
      if (B) {
        const T = Ue(B, b.container), V = je(B, b.container);
        x.value.x = T, x.value.y = V;
      } else {
        const [T, V] = b.getPositon();
        x.value.x = T, x.value.y = V;
      }
      s(M), $();
    }), Xe(() => {
      R.value = !1, I && (I.getSubMenuInstance = () => {
      });
    }), H(y), (L, B) => {
      const T = ae("ContextSubMenu", !0);
      return R.value ? (J(), te(Ot, {
        key: 0,
        to: `#${z(N)}`
      }, [
        pe("div", Fe({
          ref_key: "submenuRoot",
          ref: t
        }, L.$attrs, {
          class: [
            "mx-context-menu",
            z(S).customClass ? z(S).customClass : "",
            z(S).theme ?? ""
          ],
          style: {
            maxWidth: G.maxWidth ? z(xt)(G.maxWidth) : `${z(Se).defaultMaxWidth}px`,
            minWidth: G.minWidth ? z(xt)(G.minWidth) : `${z(Se).defaultMinWidth}px`,
            zIndex: z(A),
            left: `${x.value.x}px`,
            top: `${x.value.y}px`
          },
          "data-type": "ContextSubMenu",
          onClick: v
        }), [
          ee(z(ti), {
            ref_key: "scrollRectRef",
            ref: i,
            scroll: "vertical",
            maxHeight: h.value,
            containerClass: "mx-context-menu-scroll"
          }, {
            default: U(() => [
              pe("div", {
                class: Be(["mx-context-menu-items"]),
                ref_key: "menu",
                ref: e
              }, [
                ve(L.$slots, "default", {}, () => [
                  (J(!0), se(Re, null, Ze(G.items, (V, _) => (J(), se(Re, { key: _ }, [
                    V.hidden !== !0 && V.divided === "up" ? (J(), te(Qe, { key: 0 })) : re("", !0),
                    V.hidden !== !0 && V.divided === "self" ? (J(), te(Qe, { key: 1 })) : (J(), te(It, {
                      key: 2,
                      clickHandler: V.onClick ? (O) => V.onClick(O) : void 0,
                      disabled: typeof V.disabled == "object" ? V.disabled.value : V.disabled,
                      hidden: typeof V.hidden == "object" ? V.hidden.value : V.hidden,
                      icon: V.icon,
                      iconFontClass: V.iconFontClass,
                      svgIcon: V.svgIcon,
                      svgProps: V.svgProps,
                      label: V.label,
                      customRender: V.customRender,
                      customClass: V.customClass,
                      checked: typeof V.checked == "object" ? V.checked.value : V.checked,
                      shortcut: V.shortcut,
                      clickClose: V.clickClose,
                      clickableWhenHasChildren: V.clickableWhenHasChildren,
                      preserveIconWidth: V.preserveIconWidth !== void 0 ? V.preserveIconWidth : z(S).preserveIconWidth,
                      showRightArrow: V.children && V.children.length > 0,
                      hasChildren: V.children && V.children.length > 0,
                      rawMenuItem: V,
                      onSubMenuOpen: (O) => {
                        var E;
                        return (E = V.onSubMenuOpen) == null ? void 0 : E.call(V, O);
                      },
                      onSubMenuClose: (O) => {
                        var E;
                        return (E = V.onSubMenuClose) == null ? void 0 : E.call(V, O);
                      }
                    }, Ct({ _: 2 }, [
                      V.children && V.children.length > 0 ? {
                        name: "submenu",
                        fn: U(({ context: O }) => [
                          ee(T, {
                            parentMenuItemContext: O,
                            items: V.children,
                            maxWidth: V.maxWidth,
                            minWidth: V.minWidth,
                            maxHeight: V.maxHeight,
                            adjustPosition: V.adjustSubMenuPosition !== void 0 ? V.adjustSubMenuPosition : z(S).adjustPosition,
                            direction: V.direction !== void 0 ? V.direction : z(S).direction
                          }, null, 8, ["parentMenuItemContext", "items", "maxWidth", "minWidth", "maxHeight", "adjustPosition", "direction"])
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1032, ["clickHandler", "disabled", "hidden", "icon", "iconFontClass", "svgIcon", "svgProps", "label", "customRender", "customClass", "checked", "shortcut", "clickClose", "clickableWhenHasChildren", "preserveIconWidth", "showRightArrow", "hasChildren", "rawMenuItem", "onSubMenuOpen", "onSubMenuClose"])),
                    V.hidden !== !0 && (V.divided === "down" || V.divided === !0) ? (J(), te(Qe, { key: 3 })) : re("", !0)
                  ], 64))), 128))
                ])
              ], 512)
            ]),
            _: 3
          }, 8, ["maxHeight"])
        ], 16)
      ], 8, ["to"])) : re("", !0);
    };
  }
}), jt = /* @__PURE__ */ Le({
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
  setup(G, { expose: H, emit: w }) {
    const R = G, N = w, b = Ft(), S = ne(), {
      options: A,
      show: a,
      container: c
    } = _e(R);
    Ye(() => {
      a.value && i();
    }), Xe(() => {
      s();
    }), De(a, (g) => {
      g ? i() : (kt(n), s());
    });
    const n = {
      closeMenu: t,
      isClosed: e,
      getMenuRef: () => S.value,
      getMenuDimensions: () => {
        var g;
        return ((g = S.value) == null ? void 0 : g.getMenuDimensions()) ?? { width: 0, height: 0 };
      }
    };
    let r = !1;
    function i() {
      o(), Yn(n);
    }
    function t(g) {
      r = !0, N("close", g), A.value.menuTransitionProps || N("closeAnimFinished"), kt(n);
    }
    function e() {
      return r;
    }
    function o() {
      setTimeout(() => {
        document.addEventListener("click", p, !0), document.addEventListener("contextmenu", p, !0), document.addEventListener("scroll", C, !0), !R.isFullScreenContainer && c.value && c.value.addEventListener("scroll", C, !0), A.value.keyboardControl !== !1 && document.addEventListener("keydown", u, !0);
      }, 50);
    }
    function s() {
      document.removeEventListener("contextmenu", p, !0), document.removeEventListener("click", p, !0), document.removeEventListener("scroll", C, !0), !R.isFullScreenContainer && c.value && c.value.removeEventListener("scroll", C, !0), A.value.keyboardControl !== !1 && document.removeEventListener("keydown", u, !0);
    }
    const l = ne();
    We("globalSetCurrentSubMenu", (g) => l.value = g), We("globalGetMenuHostId", c.value.id);
    function u(g) {
      var v, M, W, k, Z, y, I, d, h, m, x, $, L;
      let B = !0;
      switch (g.key) {
        case "Escape": {
          ((v = l.value) == null ? void 0 : v.isTopLevel()) === !1 ? (M = l.value) == null || M.closeCurrentSubMenu() : t();
          break;
        }
        case "ArrowDown":
          (W = l.value) == null || W.moveCurrentItemDown();
          break;
        case "ArrowUp":
          (k = l.value) == null || k.moveCurrentItemUp();
          break;
        case "Home":
          (Z = l.value) == null || Z.moveCurrentItemFirst();
          break;
        case "End":
          (y = l.value) == null || y.moveCurrentItemLast();
          break;
        case "ArrowLeft": {
          (I = l.value) != null && I.closeSelfAndActiveParent() || (h = (d = A.value).onKeyFocusMoveLeft) == null || h.call(d);
          break;
        }
        case "ArrowRight":
          (m = l.value) != null && m.openCurrentItemSubMenu() || ($ = (x = A.value).onKeyFocusMoveRight) == null || $.call(x);
          break;
        case "Enter":
          (L = l.value) == null || L.triggerCurrentItemClick(g);
          break;
        default:
          B = !1;
          break;
      }
      B && l.value && (g.stopPropagation(), g.preventDefault());
    }
    function C(g) {
      A.value.closeWhenScroll !== !1 && f(g.target, null);
    }
    function p(g) {
      f(g.target, g);
    }
    function f(g, v) {
      for (var M, W; g; ) {
        if (g.classList && g.classList.contains("mx-context-menu"))
          return;
        g = g.parentNode;
      }
      v ? A.value.clickCloseOnOutside !== !1 ? (s(), t()) : (W = (M = A.value).onClickOnOutside) == null || W.call(M, v) : (s(), t());
    }
    return We("globalOptions", A), We("globalCloseMenu", t), We("globalIsFullScreenContainer", R.isFullScreenContainer), We("globalHasSlot", (g) => b[g] !== void 0), We("globalRenderSlot", (g, v) => ve(b, g, { ...v }, () => [Ne("span", "Render slot failed")], !1)), We("menuContext", {
      zIndex: A.value.zIndex || Se.defaultZindex,
      container: c.value,
      adjustPadding: { x: 0, y: 0 },
      getZoom: () => A.value.zoom || Se.defaultZoom,
      getParentWidth: () => 0,
      getParentHeight: () => 0,
      getPositon: () => [A.value.x, A.value.y],
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
    }), H(n), (g, v) => z(A).menuTransitionProps ? (J(), te(Nt, Fe({
      key: 0,
      appear: ""
    }, z(A).menuTransitionProps, {
      onAfterLeave: v[0] || (v[0] = (M) => N("closeAnimFinished"))
    }), {
      default: U(() => [
        z(a) ? (J(), te(ot, {
          key: 0,
          ref_key: "submenuInstance",
          ref: S,
          items: z(A).items,
          adjustPosition: z(A).adjustPosition,
          maxWidth: z(A).maxWidth || z(Se).defaultMaxWidth,
          minWidth: z(A).minWidth || z(Se).defaultMinWidth,
          maxHeight: z(A).maxHeight,
          direction: z(A).direction || z(Se).defaultDirection
        }, {
          default: U(() => [
            ve(g.$slots, "default")
          ]),
          _: 3
        }, 8, ["items", "adjustPosition", "maxWidth", "minWidth", "maxHeight", "direction"])) : re("", !0)
      ]),
      _: 3
    }, 16)) : z(a) ? (J(), te(ot, {
      key: 1,
      ref_key: "submenuInstance",
      ref: S,
      items: z(A).items,
      adjustPosition: z(A).adjustPosition,
      maxWidth: z(A).maxWidth || z(Se).defaultMaxWidth,
      minWidth: z(A).minWidth || z(Se).defaultMinWidth,
      maxHeight: z(A).maxHeight,
      direction: z(A).direction || z(Se).defaultDirection
    }, {
      default: U(() => [
        ve(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["items", "adjustPosition", "maxWidth", "minWidth", "maxHeight", "direction"])) : re("", !0);
  }
}), yi = /* @__PURE__ */ Le({
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
  setup(G, { expose: H, emit: w }) {
    const R = w, N = G, { options: b, show: S } = _e(N), { isNew: A, container: a, eleId: c } = Jt(b.value), n = ne(null), r = Ft();
    function i(t) {
      var e, o;
      R("update:show", !1), R("close"), (o = (e = b.value).onClose) == null || o.call(e, t);
    }
    return H({
      closeMenu: () => R("update:show", !1),
      isClosed: () => !S.value,
      getMenuRef: () => {
        var t;
        return (t = n.value) == null ? void 0 : t.getMenuRef();
      },
      getMenuDimensions: () => {
        var t;
        return ((t = n.value) == null ? void 0 : t.getMenuDimensions()) ?? { width: 0, height: 0 };
      }
    }), (t, e) => (J(), te(Ot, {
      to: `#${z(c)}`
    }, [
      ee(jt, {
        ref_key: "menuRef",
        ref: n,
        options: z(b),
        show: z(S),
        container: z(a),
        isFullScreenContainer: !z(A),
        onClose: i
      }, Ct({ _: 2 }, [
        Ze(z(r), (o, s) => ({
          name: s,
          fn: U((l) => [
            ve(t.$slots, s, _t(cn(l)))
          ])
        }))
      ]), 1032, ["options", "show", "container", "isFullScreenContainer"])
    ], 8, ["to"]));
  }
}), wi = Le({
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
  setup(G, H) {
    const w = Ae("globalOptions"), { adjustSubMenuPosition: R, maxWidth: N, minWidth: b, maxHeight: S } = _e(G), A = typeof R.value < "u" ? R.value : w.value.adjustPosition, a = ne(), c = ne();
    return H.expose({
      getSubMenuRef: () => a.value,
      getMenuItemRef: () => c.value
    }), () => Ne(It, {
      ...G,
      ref: c,
      showRightArrow: !0,
      maxWidth: void 0,
      minWidth: void 0,
      maxHeight: void 0,
      adjustSubMenuPosition: void 0,
      hasChildren: typeof H.slots.default !== void 0
    }, H.slots.default ? {
      //Create SubMenu
      submenu: (n) => Ne(ot, {
        ref: a,
        maxWidth: N.value,
        minWidth: b.value,
        maxHeight: S.value,
        adjustPosition: A,
        parentMenuItemContext: n.context
      }, {
        default: H.slots.default
      }),
      //Add other slots
      ...Jn(H.slots, "default")
    } : H.slots);
  }
});
function Si(G, H, w, R) {
  const N = ne(!0), b = Ne(jt, {
    options: G,
    show: N.value,
    container: H,
    isFullScreenContainer: !w,
    onCloseAnimFinished: () => {
      yt(null, H);
    },
    onClose: (S) => {
      var A;
      (A = G.onClose) == null || A.call(G, S), N.value = !1;
    }
  }, R);
  return yt(b, H), b.component;
}
function Bt(G, H) {
  const w = Jt(G);
  return Si(G, w.container, w.isNew, H).exposed;
}
const Ut = {
  /**
   * For Vue install
   * @param app 
   */
  install(G) {
    G.config.globalProperties.$contextmenu = Bt, G.component("ContextMenu", yi), G.component("ContextMenuItem", It), G.component("ContextMenuGroup", wi), G.component("ContextMenuSperator", Qe), G.component("ContextMenuSeparator", Qe), G.component("ContextSubMenu", ot);
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
  showContextMenu(G, H) {
    return Bt(G, H);
  },
  /**
   * Get if there is a menu open now.
   */
  isAnyContextMenuOpen() {
    return Kn();
  },
  /**
   * Close the currently open menu
   */
  closeContextMenu: Pt,
  //Tools
  transformMenuPosition: Xn
}, Ri = { class: "header-buttons" }, ki = { class: "content" }, xi = {
  __name: "FloatingTreeViewer",
  props: {
    data: {},
    dataModifiers: {}
  },
  emits: /* @__PURE__ */ Oe(["openEdit", "close", "update:docked"], ["update:data"]),
  setup(G, { emit: H }) {
    const w = qe(G, "data"), { removeElement: R, pasteElement: N, insertElement: b } = Yt(w), S = H, A = Ae("componentClipboard"), a = ne([]);
    function c() {
      a.value.forEach((g) => {
        g && (g.isExpanded = !0, r(g));
      });
    }
    function n() {
      a.value.forEach((g) => {
        g && (g.isExpanded = !1, i(g));
      });
    }
    function r(g) {
      g.$refs.treeNodes && g.$refs.treeNodes.forEach((v) => {
        v && (v.isExpanded = !0, r(v));
      });
    }
    function i(g) {
      g.$refs.treeNodes && g.$refs.treeNodes.forEach((v) => {
        v && (v.isExpanded = !1, i(v));
      });
    }
    function t(g, v) {
      let M = g.path ? [v, ...g.path] : [v];
      const W = [
        {
          label: "Edit",
          onClick: () => {
            S("openEdit", { element: g.element, path: M });
          }
        }
      ];
      W.push(
        {
          label: "Cut",
          onClick: () => {
            A.cut(g.element, M), A.isCut && R(M);
          }
        },
        {
          label: "Copy",
          onClick: () => {
            A.copy(g.element, M);
          }
        }
      ), A.hasContent() && W.push({
        label: "Paste",
        children: [
          {
            label: "Paste as Prepend",
            onClick: () => N(M, "prepend")
          },
          {
            label: "Paste as Append",
            onClick: () => N(M, "append")
          },
          {
            label: "Paste as Child",
            onClick: () => N(M, "child")
          }
        ]
      }), W.push(Xt(b, M)), Ut.showContextMenu({
        x: g.event.x,
        y: g.event.y,
        zIndex: 1001,
        items: W
      });
    }
    const e = ne({ top: 20, left: 20 }), o = ne(!1);
    let s = !1, l = { x: 0, y: 0 };
    function u() {
      o.value = !o.value, S("update:docked", o.value), o.value ? e.value = { top: 0, right: 0, bottom: 0 } : e.value = { top: 20, left: 20 };
    }
    function C(g) {
      o.value || (s = !0, l.x = g.clientX - e.value.left, l.y = g.clientY - e.value.top, document.addEventListener("mousemove", p), document.addEventListener("mouseup", f));
    }
    function p(g) {
      s && (e.value.left = g.clientX - l.x, e.value.top = g.clientY - l.y);
    }
    function f() {
      s = !1, document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", f);
    }
    return Xe(() => {
      document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", f);
    }), (g, v) => {
      const M = ae("v-icon"), W = ae("v-btn");
      return J(), se("div", {
        class: Be(["floating-tree-viewer", { docked: o.value }]),
        style: Pe(o.value ? e.value : { top: e.value.top + "px", left: e.value.left + "px" })
      }, [
        pe("div", {
          class: "header",
          onMousedown: C
        }, [
          v[4] || (v[4] = pe("span", null, "JSON Tree Viewer", -1)),
          pe("div", Ri, [
            ee(W, {
              icon: "",
              density: "compact",
              onClick: c,
              title: "Expand All"
            }, {
              default: U(() => [
                ee(M, null, {
                  default: U(() => v[1] || (v[1] = [
                    Ie("fa-solid fa-angle-double-down")
                  ])),
                  _: 1,
                  __: [1]
                })
              ]),
              _: 1
            }),
            ee(W, {
              icon: "",
              density: "compact",
              onClick: n,
              title: "Collapse All"
            }, {
              default: U(() => [
                ee(M, null, {
                  default: U(() => v[2] || (v[2] = [
                    Ie("fa-solid fa-angle-double-up")
                  ])),
                  _: 1,
                  __: [2]
                })
              ]),
              _: 1
            }),
            ee(W, {
              icon: "",
              density: "compact",
              onClick: u
            }, {
              default: U(() => [
                ee(M, null, {
                  default: U(() => [
                    Ie(Ge(o.value ? "fa-solid fa-arrow-left" : "fa-solid fa-arrow-right"), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            ee(W, {
              icon: "",
              density: "compact",
              onClick: v[0] || (v[0] = (k) => g.$emit("close"))
            }, {
              default: U(() => v[3] || (v[3] = [
                Ie("x")
              ])),
              _: 1,
              __: [3]
            })
          ])
        ], 32),
        pe("div", ki, [
          (J(!0), se(Re, null, Ze(w.value, (k, Z) => (J(), te(zt, {
            node: k,
            label: "root",
            onOpenEdit: (y) => t(y, Z),
            ref_for: !0,
            ref_key: "treeNodes",
            ref: a
          }, null, 8, ["node", "onOpenEdit"]))), 256))
        ])
      ], 6);
    };
  }
}, Wi = /* @__PURE__ */ et(xi, [["__scopeId", "data-v-5898d76b"]]);
function Qt(G) {
  return G && G.__esModule && Object.prototype.hasOwnProperty.call(G, "default") ? G.default : G;
}
var ht = { exports: {} }, Zt;
function Mi() {
  return Zt || (Zt = 1, function(G, H) {
    (function() {
      var w = "ace", R = /* @__PURE__ */ function() {
        return this;
      }();
      !R && typeof window < "u" && (R = window);
      var N = function(n, r, i) {
        if (typeof n != "string") {
          N.original ? N.original.apply(this, arguments) : (console.error("dropping module because define wasn't a string."), console.trace());
          return;
        }
        arguments.length == 2 && (i = r), N.modules[n] || (N.payloads[n] = i, N.modules[n] = null);
      };
      N.modules = {}, N.payloads = {};
      var b = function(n, r, i) {
        if (typeof r == "string") {
          var t = a(n, r);
          if (t != null)
            return i && i(), t;
        } else if (Object.prototype.toString.call(r) === "[object Array]") {
          for (var e = [], o = 0, s = r.length; o < s; ++o) {
            var l = a(n, r[o]);
            if (l == null && S.original)
              return;
            e.push(l);
          }
          return i && i.apply(null, e) || !0;
        }
      }, S = function(n, r) {
        var i = b("", n, r);
        return i == null && S.original ? S.original.apply(this, arguments) : i;
      }, A = function(n, r) {
        if (r.indexOf("!") !== -1) {
          var i = r.split("!");
          return A(n, i[0]) + "!" + A(n, i[1]);
        }
        if (r.charAt(0) == ".") {
          var t = n.split("/").slice(0, -1).join("/");
          for (r = t + "/" + r; r.indexOf(".") !== -1 && e != r; ) {
            var e = r;
            r = r.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "");
          }
        }
        return r;
      }, a = function(n, r) {
        r = A(n, r);
        var i = N.modules[r];
        if (!i) {
          if (i = N.payloads[r], typeof i == "function") {
            var t = {}, e = {
              id: r,
              uri: "",
              exports: t,
              packaged: !0
            }, o = function(l, u) {
              return b(r, l, u);
            }, s = i(o, t, e);
            t = s || e.exports, N.modules[r] = t, delete N.payloads[r];
          }
          i = N.modules[r] = t || i;
        }
        return i;
      };
      function c(n) {
        var r = R;
        R[n] || (R[n] = {}), r = R[n], (!r.define || !r.define.packaged) && (N.original = r.define, r.define = N, r.define.packaged = !0), (!r.require || !r.require.packaged) && (S.original = r.require, r.require = S, r.require.packaged = !0);
      }
      c(w);
    })(), ace.define("ace/lib/es6-shim", ["require", "exports", "module"], function(w, R, N) {
      function b(S, A, a) {
        Object.defineProperty(S, A, {
          value: a,
          enumerable: !1,
          writable: !0,
          configurable: !0
        });
      }
      String.prototype.startsWith || b(String.prototype, "startsWith", function(S, A) {
        return A = A || 0, this.lastIndexOf(S, A) === A;
      }), String.prototype.endsWith || b(String.prototype, "endsWith", function(S, A) {
        var a = this;
        (A === void 0 || A > a.length) && (A = a.length), A -= S.length;
        var c = a.indexOf(S, A);
        return c !== -1 && c === A;
      }), String.prototype.repeat || b(String.prototype, "repeat", function(S) {
        for (var A = "", a = this; S > 0; )
          S & 1 && (A += a), (S >>= 1) && (a += a);
        return A;
      }), String.prototype.includes || b(String.prototype, "includes", function(S, A) {
        return this.indexOf(S, A) != -1;
      }), Object.assign || (Object.assign = function(S) {
        if (S == null)
          throw new TypeError("Cannot convert undefined or null to object");
        for (var A = Object(S), a = 1; a < arguments.length; a++) {
          var c = arguments[a];
          c != null && Object.keys(c).forEach(function(n) {
            A[n] = c[n];
          });
        }
        return A;
      }), Object.values || (Object.values = function(S) {
        return Object.keys(S).map(function(A) {
          return S[A];
        });
      }), Array.prototype.find || b(Array.prototype, "find", function(S) {
        for (var A = this.length, a = arguments[1], c = 0; c < A; c++) {
          var n = this[c];
          if (S.call(a, n, c, this))
            return n;
        }
      }), Array.prototype.findIndex || b(Array.prototype, "findIndex", function(S) {
        for (var A = this.length, a = arguments[1], c = 0; c < A; c++) {
          var n = this[c];
          if (S.call(a, n, c, this))
            return c;
        }
      }), Array.prototype.includes || b(Array.prototype, "includes", function(S, A) {
        return this.indexOf(S, A) != -1;
      }), Array.prototype.fill || b(Array.prototype, "fill", function(S) {
        for (var A = this, a = A.length >>> 0, c = arguments[1], n = c >> 0, r = n < 0 ? Math.max(a + n, 0) : Math.min(n, a), i = arguments[2], t = i === void 0 ? a : i >> 0, e = t < 0 ? Math.max(a + t, 0) : Math.min(t, a); r < e; )
          A[r] = S, r++;
        return A;
      }), Array.of || b(Array, "of", function() {
        return Array.prototype.slice.call(arguments);
      });
    }), ace.define("ace/lib/fixoldbrowsers", ["require", "exports", "module", "ace/lib/es6-shim"], function(w, R, N) {
      w("./es6-shim");
    }), ace.define("ace/lib/deep_copy", ["require", "exports", "module"], function(w, R, N) {
      R.deepCopy = function b(S) {
        if (typeof S != "object" || !S)
          return S;
        var A;
        if (Array.isArray(S)) {
          A = [];
          for (var a = 0; a < S.length; a++)
            A[a] = b(S[a]);
          return A;
        }
        if (Object.prototype.toString.call(S) !== "[object Object]")
          return S;
        A = {};
        for (var a in S)
          A[a] = b(S[a]);
        return A;
      };
    }), ace.define("ace/lib/lang", ["require", "exports", "module", "ace/lib/deep_copy"], function(w, R, N) {
      R.last = function(A) {
        return A[A.length - 1];
      }, R.stringReverse = function(A) {
        return A.split("").reverse().join("");
      }, R.stringRepeat = function(A, a) {
        for (var c = ""; a > 0; )
          a & 1 && (c += A), (a >>= 1) && (A += A);
        return c;
      };
      var b = /^\s\s*/, S = /\s\s*$/;
      R.stringTrimLeft = function(A) {
        return A.replace(b, "");
      }, R.stringTrimRight = function(A) {
        return A.replace(S, "");
      }, R.copyObject = function(A) {
        var a = {};
        for (var c in A)
          a[c] = A[c];
        return a;
      }, R.copyArray = function(A) {
        for (var a = [], c = 0, n = A.length; c < n; c++)
          A[c] && typeof A[c] == "object" ? a[c] = this.copyObject(A[c]) : a[c] = A[c];
        return a;
      }, R.deepCopy = w("./deep_copy").deepCopy, R.arrayToMap = function(A) {
        for (var a = {}, c = 0; c < A.length; c++)
          a[A[c]] = 1;
        return a;
      }, R.createMap = function(A) {
        var a = /* @__PURE__ */ Object.create(null);
        for (var c in A)
          a[c] = A[c];
        return a;
      }, R.arrayRemove = function(A, a) {
        for (var c = 0; c <= A.length; c++)
          a === A[c] && A.splice(c, 1);
      }, R.escapeRegExp = function(A) {
        return A.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1");
      }, R.escapeHTML = function(A) {
        return ("" + A).replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;");
      }, R.getMatchOffsets = function(A, a) {
        var c = [];
        return A.replace(a, function(n) {
          c.push({
            offset: arguments[arguments.length - 2],
            length: n.length
          });
        }), c;
      }, R.deferredCall = function(A) {
        var a = null, c = function() {
          a = null, A();
        }, n = function(r) {
          return n.cancel(), a = setTimeout(c, r || 0), n;
        };
        return n.schedule = n, n.call = function() {
          return this.cancel(), A(), n;
        }, n.cancel = function() {
          return clearTimeout(a), a = null, n;
        }, n.isPending = function() {
          return a;
        }, n;
      }, R.delayedCall = function(A, a) {
        var c = null, n = function() {
          c = null, A();
        }, r = function(i) {
          c == null && (c = setTimeout(n, i || a));
        };
        return r.delay = function(i) {
          c && clearTimeout(c), c = setTimeout(n, i || a);
        }, r.schedule = r, r.call = function() {
          this.cancel(), A();
        }, r.cancel = function() {
          c && clearTimeout(c), c = null;
        }, r.isPending = function() {
          return c;
        }, r;
      }, R.supportsLookbehind = function() {
        try {
          new RegExp("(?<=.)");
        } catch {
          return !1;
        }
        return !0;
      }, R.skipEmptyMatch = function(A, a, c) {
        return c && A.codePointAt(a) > 65535 ? 2 : 1;
      };
    }), ace.define("ace/lib/useragent", ["require", "exports", "module"], function(w, R, N) {
      R.OS = {
        LINUX: "LINUX",
        MAC: "MAC",
        WINDOWS: "WINDOWS"
      }, R.getOS = function() {
        return R.isMac ? R.OS.MAC : R.isLinux ? R.OS.LINUX : R.OS.WINDOWS;
      };
      var b = typeof navigator == "object" ? navigator : {}, S = (/mac|win|linux/i.exec(b.platform) || ["other"])[0].toLowerCase(), A = b.userAgent || "", a = b.appName || "";
      R.isWin = S == "win", R.isMac = S == "mac", R.isLinux = S == "linux", R.isIE = a == "Microsoft Internet Explorer" || a.indexOf("MSAppHost") >= 0 ? parseFloat((A.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]) : parseFloat((A.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]), R.isOldIE = R.isIE && R.isIE < 9, R.isGecko = R.isMozilla = A.match(/ Gecko\/\d+/), R.isOpera = typeof opera == "object" && Object.prototype.toString.call(window.opera) == "[object Opera]", R.isWebKit = parseFloat(A.split("WebKit/")[1]) || void 0, R.isChrome = parseFloat(A.split(" Chrome/")[1]) || void 0, R.isSafari = parseFloat(A.split(" Safari/")[1]) && !R.isChrome || void 0, R.isEdge = parseFloat(A.split(" Edge/")[1]) || void 0, R.isAIR = A.indexOf("AdobeAIR") >= 0, R.isAndroid = A.indexOf("Android") >= 0, R.isChromeOS = A.indexOf(" CrOS ") >= 0, R.isIOS = /iPad|iPhone|iPod/.test(A) && !window.MSStream, R.isIOS && (R.isMac = !0), R.isMobile = R.isIOS || R.isAndroid;
    }), ace.define("ace/lib/dom", ["require", "exports", "module", "ace/lib/useragent"], function(w, R, N) {
      var b = w("./useragent"), S = "http://www.w3.org/1999/xhtml";
      R.buildDom = function i(t, e, o) {
        if (typeof t == "string" && t) {
          var s = document.createTextNode(t);
          return e && e.appendChild(s), s;
        }
        if (!Array.isArray(t))
          return t && t.appendChild && e && e.appendChild(t), t;
        if (typeof t[0] != "string" || !t[0]) {
          for (var l = [], u = 0; u < t.length; u++) {
            var C = i(t[u], e, o);
            C && l.push(C);
          }
          return l;
        }
        var p = document.createElement(t[0]), f = t[1], g = 1;
        f && typeof f == "object" && !Array.isArray(f) && (g = 2);
        for (var u = g; u < t.length; u++)
          i(t[u], p, o);
        return g == 2 && Object.keys(f).forEach(function(v) {
          var M = f[v];
          v === "class" ? p.className = Array.isArray(M) ? M.join(" ") : M : typeof M == "function" || v == "value" || v[0] == "$" ? p[v] = M : v === "ref" ? o && (o[M] = p) : v === "style" ? typeof M == "string" && (p.style.cssText = M) : M != null && p.setAttribute(v, M);
        }), e && e.appendChild(p), p;
      }, R.getDocumentHead = function(i) {
        return i || (i = document), i.head || i.getElementsByTagName("head")[0] || i.documentElement;
      }, R.createElement = function(i, t) {
        return document.createElementNS ? document.createElementNS(t || S, i) : document.createElement(i);
      }, R.removeChildren = function(i) {
        i.innerHTML = "";
      }, R.createTextNode = function(i, t) {
        var e = t ? t.ownerDocument : document;
        return e.createTextNode(i);
      }, R.createFragment = function(i) {
        var t = i ? i.ownerDocument : document;
        return t.createDocumentFragment();
      }, R.hasCssClass = function(i, t) {
        var e = (i.className + "").split(/\s+/g);
        return e.indexOf(t) !== -1;
      }, R.addCssClass = function(i, t) {
        R.hasCssClass(i, t) || (i.className += " " + t);
      }, R.removeCssClass = function(i, t) {
        for (var e = i.className.split(/\s+/g); ; ) {
          var o = e.indexOf(t);
          if (o == -1)
            break;
          e.splice(o, 1);
        }
        i.className = e.join(" ");
      }, R.toggleCssClass = function(i, t) {
        for (var e = i.className.split(/\s+/g), o = !0; ; ) {
          var s = e.indexOf(t);
          if (s == -1)
            break;
          o = !1, e.splice(s, 1);
        }
        return o && e.push(t), i.className = e.join(" "), o;
      }, R.setCssClass = function(i, t, e) {
        e ? R.addCssClass(i, t) : R.removeCssClass(i, t);
      }, R.hasCssString = function(i, t) {
        var e = 0, o;
        if (t = t || document, o = t.querySelectorAll("style")) {
          for (; e < o.length; )
            if (o[e++].id === i)
              return !0;
        }
      }, R.removeElementById = function(i, t) {
        t = t || document, t.getElementById(i) && t.getElementById(i).remove();
      };
      var A, a = [];
      R.useStrictCSP = function(i) {
        A = i, i == !1 ? c() : a || (a = []);
      };
      function c() {
        var i = a;
        a = null, i && i.forEach(function(t) {
          n(t[0], t[1]);
        });
      }
      function n(i, t, e) {
        if (!(typeof document > "u")) {
          if (a) {
            if (e)
              c();
            else if (e === !1)
              return a.push([i, t]);
          }
          if (!A) {
            var o = e;
            !e || !e.getRootNode ? o = document : (o = e.getRootNode(), (!o || o == e) && (o = document));
            var s = o.ownerDocument || o;
            if (t && R.hasCssString(t, o))
              return null;
            t && (i += `
/*# sourceURL=ace/css/` + t + " */");
            var l = R.createElement("style");
            l.appendChild(s.createTextNode(i)), t && (l.id = t), o == s && (o = R.getDocumentHead(s)), o.insertBefore(l, o.firstChild);
          }
        }
      }
      if (R.importCssString = n, R.importCssStylsheet = function(i, t) {
        R.buildDom(["link", { rel: "stylesheet", href: i }], R.getDocumentHead(t));
      }, R.scrollbarWidth = function(i) {
        var t = R.createElement("ace_inner");
        t.style.width = "100%", t.style.minWidth = "0px", t.style.height = "200px", t.style.display = "block";
        var e = R.createElement("ace_outer"), o = e.style;
        o.position = "absolute", o.left = "-10000px", o.overflow = "hidden", o.width = "200px", o.minWidth = "0px", o.height = "150px", o.display = "block", e.appendChild(t);
        var s = i && i.documentElement || document && document.documentElement;
        if (!s)
          return 0;
        s.appendChild(e);
        var l = t.offsetWidth;
        o.overflow = "scroll";
        var u = t.offsetWidth;
        return l === u && (u = e.clientWidth), s.removeChild(e), l - u;
      }, R.computedStyle = function(i, t) {
        return window.getComputedStyle(i, "") || {};
      }, R.setStyle = function(i, t, e) {
        i[t] !== e && (i[t] = e);
      }, R.HAS_CSS_ANIMATION = !1, R.HAS_CSS_TRANSFORMS = !1, R.HI_DPI = b.isWin ? typeof window < "u" && window.devicePixelRatio >= 1.5 : !0, b.isChromeOS && (R.HI_DPI = !1), typeof document < "u") {
        var r = document.createElement("div");
        R.HI_DPI && r.style.transform !== void 0 && (R.HAS_CSS_TRANSFORMS = !0), !b.isEdge && typeof r.style.animationName < "u" && (R.HAS_CSS_ANIMATION = !0), r = null;
      }
      R.HAS_CSS_TRANSFORMS ? R.translate = function(i, t, e) {
        i.style.transform = "translate(" + Math.round(t) + "px, " + Math.round(e) + "px)";
      } : R.translate = function(i, t, e) {
        i.style.top = Math.round(e) + "px", i.style.left = Math.round(t) + "px";
      };
    }), ace.define("ace/lib/net", ["require", "exports", "module", "ace/lib/dom"], function(w, R, N) {
      /*
      * based on code from:
      *
      * @license RequireJS text 0.25.0 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
      * Available via the MIT or new BSD license.
      * see: http://github.com/jrburke/requirejs for details
      */
      var b = w("./dom");
      R.get = function(S, A) {
        var a = new XMLHttpRequest();
        a.open("GET", S, !0), a.onreadystatechange = function() {
          a.readyState === 4 && A(a.responseText);
        }, a.send(null);
      }, R.loadScript = function(S, A) {
        var a = b.getDocumentHead(), c = document.createElement("script");
        c.src = S, a.appendChild(c), c.onload = c.onreadystatechange = function(n, r) {
          (r || !c.readyState || c.readyState == "loaded" || c.readyState == "complete") && (c = c.onload = c.onreadystatechange = null, r || A());
        };
      }, R.qualifyURL = function(S) {
        var A = document.createElement("a");
        return A.href = S, A.href;
      };
    }), ace.define("ace/lib/oop", ["require", "exports", "module"], function(w, R, N) {
      R.inherits = function(b, S) {
        b.super_ = S, b.prototype = Object.create(S.prototype, {
          constructor: {
            value: b,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
      }, R.mixin = function(b, S) {
        for (var A in S)
          b[A] = S[A];
        return b;
      }, R.implement = function(b, S) {
        R.mixin(b, S);
      };
    }), ace.define("ace/lib/event_emitter", ["require", "exports", "module"], function(w, R, N) {
      var b = {}, S = function() {
        this.propagationStopped = !0;
      }, A = function() {
        this.defaultPrevented = !0;
      };
      b._emit = b._dispatchEvent = function(a, c) {
        this._eventRegistry || (this._eventRegistry = {}), this._defaultHandlers || (this._defaultHandlers = {});
        var n = this._eventRegistry[a] || [], r = this._defaultHandlers[a];
        if (!(!n.length && !r)) {
          (typeof c != "object" || !c) && (c = {}), c.type || (c.type = a), c.stopPropagation || (c.stopPropagation = S), c.preventDefault || (c.preventDefault = A), n = n.slice();
          for (var i = 0; i < n.length && (n[i](c, this), !c.propagationStopped); i++)
            ;
          if (r && !c.defaultPrevented)
            return r(c, this);
        }
      }, b._signal = function(a, c) {
        var n = (this._eventRegistry || {})[a];
        if (n) {
          n = n.slice();
          for (var r = 0; r < n.length; r++)
            n[r](c, this);
        }
      }, b.once = function(a, c) {
        var n = this;
        if (this.on(a, function r() {
          n.off(a, r), c.apply(null, arguments);
        }), !c)
          return new Promise(function(r) {
            c = r;
          });
      }, b.setDefaultHandler = function(a, c) {
        var n = this._defaultHandlers;
        if (n || (n = this._defaultHandlers = { _disabled_: {} }), n[a]) {
          var r = n[a], i = n._disabled_[a];
          i || (n._disabled_[a] = i = []), i.push(r);
          var t = i.indexOf(c);
          t != -1 && i.splice(t, 1);
        }
        n[a] = c;
      }, b.removeDefaultHandler = function(a, c) {
        var n = this._defaultHandlers;
        if (n) {
          var r = n._disabled_[a];
          if (n[a] == c)
            r && this.setDefaultHandler(a, r.pop());
          else if (r) {
            var i = r.indexOf(c);
            i != -1 && r.splice(i, 1);
          }
        }
      }, b.on = b.addEventListener = function(a, c, n) {
        this._eventRegistry = this._eventRegistry || {};
        var r = this._eventRegistry[a];
        return r || (r = this._eventRegistry[a] = []), r.indexOf(c) == -1 && r[n ? "unshift" : "push"](c), c;
      }, b.off = b.removeListener = b.removeEventListener = function(a, c) {
        this._eventRegistry = this._eventRegistry || {};
        var n = this._eventRegistry[a];
        if (n) {
          var r = n.indexOf(c);
          r !== -1 && n.splice(r, 1);
        }
      }, b.removeAllListeners = function(a) {
        a || (this._eventRegistry = this._defaultHandlers = void 0), this._eventRegistry && (this._eventRegistry[a] = void 0), this._defaultHandlers && (this._defaultHandlers[a] = void 0);
      }, R.EventEmitter = b;
    }), ace.define("ace/lib/report_error", ["require", "exports", "module"], function(w, R, N) {
      R.reportError = function(S, A) {
        var a = new Error(S);
        a.data = A, typeof console == "object" && console.error && console.error(a), setTimeout(function() {
          throw a;
        });
      };
    }), ace.define("ace/lib/default_english_messages", ["require", "exports", "module"], function(w, R, N) {
      var b = {
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
      R.defaultEnglishMessages = b;
    }), ace.define("ace/lib/app_config", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter", "ace/lib/report_error", "ace/lib/default_english_messages"], function(w, R, N) {
      "no use strict";
      var b = w("./oop"), S = w("./event_emitter").EventEmitter, A = w("./report_error").reportError, a = w("./default_english_messages").defaultEnglishMessages, c = {
        setOptions: function(e) {
          Object.keys(e).forEach(function(o) {
            this.setOption(o, e[o]);
          }, this);
        },
        getOptions: function(e) {
          var o = {};
          if (e)
            Array.isArray(e) || (e = Object.keys(e));
          else {
            var s = this.$options;
            e = Object.keys(s).filter(function(l) {
              return !s[l].hidden;
            });
          }
          return e.forEach(function(l) {
            o[l] = this.getOption(l);
          }, this), o;
        },
        setOption: function(e, o) {
          if (this["$" + e] !== o) {
            var s = this.$options[e];
            if (!s)
              return n('misspelled option "' + e + '"');
            if (s.forwardTo)
              return this[s.forwardTo] && this[s.forwardTo].setOption(e, o);
            s.handlesSet || (this["$" + e] = o), s && s.set && s.set.call(this, o);
          }
        },
        getOption: function(e) {
          var o = this.$options[e];
          return o ? o.forwardTo ? this[o.forwardTo] && this[o.forwardTo].getOption(e) : o && o.get ? o.get.call(this) : this["$" + e] : n('misspelled option "' + e + '"');
        }
      };
      function n(e) {
        typeof console < "u" && console.warn && console.warn.apply(console, arguments);
      }
      var r, i, t = (
        /** @class */
        function() {
          function e() {
            this.$defaultOptions = {}, r = a, i = "dollarSigns";
          }
          return e.prototype.defineOptions = function(o, s, l) {
            return o.$options || (this.$defaultOptions[s] = o.$options = {}), Object.keys(l).forEach(function(u) {
              var C = l[u];
              typeof C == "string" && (C = { forwardTo: C }), C.name || (C.name = u), o.$options[C.name] = C, "initialValue" in C && (o["$" + C.name] = C.initialValue);
            }), b.implement(o, c), this;
          }, e.prototype.resetOptions = function(o) {
            Object.keys(o.$options).forEach(function(s) {
              var l = o.$options[s];
              "value" in l && o.setOption(s, l.value);
            });
          }, e.prototype.setDefaultValue = function(o, s, l) {
            if (!o) {
              for (o in this.$defaultOptions)
                if (this.$defaultOptions[o][s])
                  break;
              if (!this.$defaultOptions[o][s])
                return !1;
            }
            var u = this.$defaultOptions[o] || (this.$defaultOptions[o] = {});
            u[s] && (u.forwardTo ? this.setDefaultValue(u.forwardTo, s, l) : u[s].value = l);
          }, e.prototype.setDefaultValues = function(o, s) {
            Object.keys(s).forEach(function(l) {
              this.setDefaultValue(o, l, s[l]);
            }, this);
          }, e.prototype.setMessages = function(o, s) {
            r = o, s && s.placeholders && (i = s.placeholders);
          }, e.prototype.nls = function(o, s, l) {
            r[o] || (n("No message found for the key '" + o + "' in messages with id " + r.$id + ", trying to find a translation for the default string '" + s + "'."), r[s] || n("No message found for the default string '" + s + "' in the provided messages. Falling back to the default English message."));
            var u = r[o] || r[s] || s;
            return l && (i === "dollarSigns" && (u = u.replace(/\$(\$|[\d]+)/g, function(C, p) {
              return p == "$" ? "$" : l[p];
            })), i === "curlyBrackets" && (u = u.replace(/\{([^\}]+)\}/g, function(C, p) {
              return l[p];
            }))), u;
          }, e;
        }()
      );
      t.prototype.warn = n, t.prototype.reportError = A, b.implement(t.prototype, S), R.AppConfig = t;
    }), ace.define("ace/theme/textmate-css", ["require", "exports", "module"], function(w, R, N) {
      N.exports = `.ace-tm .ace_gutter {
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
    }), ace.define("ace/theme/textmate", ["require", "exports", "module", "ace/theme/textmate-css", "ace/lib/dom"], function(w, R, N) {
      R.isDark = !1, R.cssClass = "ace-tm", R.cssText = w("./textmate-css"), R.$id = "ace/theme/textmate";
      var b = w("../lib/dom");
      b.importCssString(R.cssText, R.cssClass, !1);
    }), ace.define("ace/config", ["require", "exports", "module", "ace/lib/lang", "ace/lib/net", "ace/lib/dom", "ace/lib/app_config", "ace/theme/textmate"], function(w, R, N) {
      "no use strict";
      var b = w("./lib/lang"), S = w("./lib/net"), A = w("./lib/dom"), a = w("./lib/app_config").AppConfig;
      N.exports = R = new a();
      var c = {
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
      R.get = function(t) {
        if (!c.hasOwnProperty(t))
          throw new Error("Unknown config key: " + t);
        return c[t];
      }, R.set = function(t, e) {
        if (c.hasOwnProperty(t))
          c[t] = e;
        else if (this.setDefaultValue("", t, e) == !1)
          throw new Error("Unknown config key: " + t);
        t == "useStrictCSP" && A.useStrictCSP(e);
      }, R.all = function() {
        return b.copyObject(c);
      }, R.$modes = {}, R.moduleUrl = function(t, e) {
        if (c.$moduleUrls[t])
          return c.$moduleUrls[t];
        var o = t.split("/");
        e = e || o[o.length - 2] || "";
        var s = e == "snippets" ? "/" : "-", l = o[o.length - 1];
        if (e == "worker" && s == "-") {
          var u = new RegExp("^" + e + "[\\-_]|[\\-_]" + e + "$", "g");
          l = l.replace(u, "");
        }
        (!l || l == e) && o.length > 1 && (l = o[o.length - 2]);
        var C = c[e + "Path"];
        return C == null ? C = c.basePath : s == "/" && (e = s = ""), C && C.slice(-1) != "/" && (C += "/"), C + e + s + l + this.get("suffix");
      }, R.setModuleUrl = function(t, e) {
        return c.$moduleUrls[t] = e;
      };
      var n = function(t, e) {
        if (t === "ace/theme/textmate" || t === "./theme/textmate")
          return e(null, w("./theme/textmate"));
        if (r)
          return r(t, e);
        console.error("loader is not configured");
      }, r;
      R.setLoader = function(t) {
        r = t;
      }, R.dynamicModules = /* @__PURE__ */ Object.create(null), R.$loading = {}, R.$loaded = {}, R.loadModule = function(t, e) {
        var o;
        if (Array.isArray(t))
          var s = t[0], l = t[1];
        else if (typeof t == "string")
          var l = t;
        var u = function(C) {
          if (C && !R.$loading[l])
            return e && e(C);
          if (R.$loading[l] || (R.$loading[l] = []), R.$loading[l].push(e), !(R.$loading[l].length > 1)) {
            var p = function() {
              n(l, function(f, g) {
                g && (R.$loaded[l] = g), R._emit("load.module", { name: l, module: g });
                var v = R.$loading[l];
                R.$loading[l] = null, v.forEach(function(M) {
                  M && M(g);
                });
              });
            };
            if (!R.get("packaged"))
              return p();
            S.loadScript(R.moduleUrl(l, s), p), i();
          }
        };
        if (R.dynamicModules[l])
          R.dynamicModules[l]().then(function(C) {
            C.default ? u(C.default) : u(C);
          });
        else {
          try {
            o = this.$require(l);
          } catch {
          }
          u(o || R.$loaded[l]);
        }
      }, R.$require = function(t) {
        if (typeof N.require == "function") {
          var e = "require";
          return N[e](t);
        }
      }, R.setModuleLoader = function(t, e) {
        R.dynamicModules[t] = e;
      };
      var i = function() {
        !c.basePath && !c.workerPath && !c.modePath && !c.themePath && !Object.keys(c.$moduleUrls).length && (console.error("Unable to infer path to ace from script src,", "use ace.config.set('basePath', 'path') to enable dynamic loading of modes and themes", "or with webpack use ace/webpack-resolver"), i = function() {
        });
      };
      R.version = "1.41.0";
    }), ace.define("ace/loader_build", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/config"], function(w, R, N) {
      w("./lib/fixoldbrowsers");
      var b = w("./config");
      b.setLoader(function(c, n) {
        w([c], function(r) {
          n(null, r);
        });
      });
      var S = /* @__PURE__ */ function() {
        return this || typeof window < "u" && window;
      }();
      N.exports = function(c) {
        b.init = A, b.$require = w, c.require = w;
      }, A(!0);
      function A(c) {
        if (!(!S || !S.document)) {
          b.set("packaged", c || w.packaged || N.packaged || S.define && (void 0).packaged);
          var n = {}, r = "", i = document.currentScript || document._currentScript, t = i && i.ownerDocument || document;
          i && i.src && (r = i.src.split(/[?#]/)[0].split("/").slice(0, -1).join("/") || "");
          for (var e = t.getElementsByTagName("script"), o = 0; o < e.length; o++) {
            var s = e[o], l = s.src || s.getAttribute("src");
            if (l) {
              for (var u = s.attributes, C = 0, p = u.length; C < p; C++) {
                var f = u[C];
                f.name.indexOf("data-ace-") === 0 && (n[a(f.name.replace(/^data-ace-/, ""))] = f.value);
              }
              var g = l.match(/^(.*)\/ace([\-.]\w+)?\.js(\?|$)/);
              g && (r = g[1]);
            }
          }
          r && (n.base = n.base || r, n.packaged = !0), n.basePath = n.base, n.workerPath = n.workerPath || n.base, n.modePath = n.modePath || n.base, n.themePath = n.themePath || n.base, delete n.base;
          for (var v in n)
            typeof n[v] < "u" && b.set(v, n[v]);
        }
      }
      function a(c) {
        return c.replace(/-(.)/g, function(n, r) {
          return r.toUpperCase();
        });
      }
    }), ace.define("ace/range", ["require", "exports", "module"], function(w, R, N) {
      var b = (
        /** @class */
        function() {
          function S(A, a, c, n) {
            this.start = {
              row: A,
              column: a
            }, this.end = {
              row: c,
              column: n
            };
          }
          return S.prototype.isEqual = function(A) {
            return this.start.row === A.start.row && this.end.row === A.end.row && this.start.column === A.start.column && this.end.column === A.end.column;
          }, S.prototype.toString = function() {
            return "Range: [" + this.start.row + "/" + this.start.column + "] -> [" + this.end.row + "/" + this.end.column + "]";
          }, S.prototype.contains = function(A, a) {
            return this.compare(A, a) == 0;
          }, S.prototype.compareRange = function(A) {
            var a, c = A.end, n = A.start;
            return a = this.compare(c.row, c.column), a == 1 ? (a = this.compare(n.row, n.column), a == 1 ? 2 : a == 0 ? 1 : 0) : a == -1 ? -2 : (a = this.compare(n.row, n.column), a == -1 ? -1 : a == 1 ? 42 : 0);
          }, S.prototype.comparePoint = function(A) {
            return this.compare(A.row, A.column);
          }, S.prototype.containsRange = function(A) {
            return this.comparePoint(A.start) == 0 && this.comparePoint(A.end) == 0;
          }, S.prototype.intersects = function(A) {
            var a = this.compareRange(A);
            return a == -1 || a == 0 || a == 1;
          }, S.prototype.isEnd = function(A, a) {
            return this.end.row == A && this.end.column == a;
          }, S.prototype.isStart = function(A, a) {
            return this.start.row == A && this.start.column == a;
          }, S.prototype.setStart = function(A, a) {
            typeof A == "object" ? (this.start.column = A.column, this.start.row = A.row) : (this.start.row = A, this.start.column = a);
          }, S.prototype.setEnd = function(A, a) {
            typeof A == "object" ? (this.end.column = A.column, this.end.row = A.row) : (this.end.row = A, this.end.column = a);
          }, S.prototype.inside = function(A, a) {
            return this.compare(A, a) == 0 ? !(this.isEnd(A, a) || this.isStart(A, a)) : !1;
          }, S.prototype.insideStart = function(A, a) {
            return this.compare(A, a) == 0 ? !this.isEnd(A, a) : !1;
          }, S.prototype.insideEnd = function(A, a) {
            return this.compare(A, a) == 0 ? !this.isStart(A, a) : !1;
          }, S.prototype.compare = function(A, a) {
            return !this.isMultiLine() && A === this.start.row ? a < this.start.column ? -1 : a > this.end.column ? 1 : 0 : A < this.start.row ? -1 : A > this.end.row ? 1 : this.start.row === A ? a >= this.start.column ? 0 : -1 : this.end.row === A ? a <= this.end.column ? 0 : 1 : 0;
          }, S.prototype.compareStart = function(A, a) {
            return this.start.row == A && this.start.column == a ? -1 : this.compare(A, a);
          }, S.prototype.compareEnd = function(A, a) {
            return this.end.row == A && this.end.column == a ? 1 : this.compare(A, a);
          }, S.prototype.compareInside = function(A, a) {
            return this.end.row == A && this.end.column == a ? 1 : this.start.row == A && this.start.column == a ? -1 : this.compare(A, a);
          }, S.prototype.clipRows = function(A, a) {
            if (this.end.row > a)
              var c = { row: a + 1, column: 0 };
            else if (this.end.row < A)
              var c = { row: A, column: 0 };
            if (this.start.row > a)
              var n = { row: a + 1, column: 0 };
            else if (this.start.row < A)
              var n = { row: A, column: 0 };
            return S.fromPoints(n || this.start, c || this.end);
          }, S.prototype.extend = function(A, a) {
            var c = this.compare(A, a);
            if (c == 0)
              return this;
            if (c == -1)
              var n = { row: A, column: a };
            else
              var r = { row: A, column: a };
            return S.fromPoints(n || this.start, r || this.end);
          }, S.prototype.isEmpty = function() {
            return this.start.row === this.end.row && this.start.column === this.end.column;
          }, S.prototype.isMultiLine = function() {
            return this.start.row !== this.end.row;
          }, S.prototype.clone = function() {
            return S.fromPoints(this.start, this.end);
          }, S.prototype.collapseRows = function() {
            return this.end.column == 0 ? new S(this.start.row, 0, Math.max(this.start.row, this.end.row - 1), 0) : new S(this.start.row, 0, this.end.row, 0);
          }, S.prototype.toScreenRange = function(A) {
            var a = A.documentToScreenPosition(this.start), c = A.documentToScreenPosition(this.end);
            return new S(a.row, a.column, c.row, c.column);
          }, S.prototype.moveBy = function(A, a) {
            this.start.row += A, this.start.column += a, this.end.row += A, this.end.column += a;
          }, S;
        }()
      );
      b.fromPoints = function(S, A) {
        return new b(S.row, S.column, A.row, A.column);
      }, b.comparePoints = function(S, A) {
        return S.row - A.row || S.column - A.column;
      }, R.Range = b;
    }), ace.define("ace/lib/keys", ["require", "exports", "module", "ace/lib/oop"], function(w, R, N) {
      for (var b = w("./oop"), S = {
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
      }, A = {
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
        A["Digit" + a] = 48 + a, A["Numpad" + a] = 96 + a, S.PRINTABLE_KEYS[48 + a] = "" + a, S.FUNCTION_KEYS[96 + a] = "Numpad" + a;
      for (var a = 65; a < 91; a++) {
        var c = String.fromCharCode(a + 32);
        A["Key" + c.toUpperCase()] = a, S.PRINTABLE_KEYS[a] = c;
      }
      for (var a = 1; a < 13; a++)
        A["F" + a] = 111 + a, S.FUNCTION_KEYS[111 + a] = "F" + a;
      var n = {
        Shift: 16,
        Control: 17,
        Alt: 18,
        Meta: 224
      };
      for (var r in n)
        A[r] = A[r + "Left"] = A[r + "Right"] = n[r];
      R.$codeToKeyCode = A, S.PRINTABLE_KEYS[173] = "-";
      for (var i in S.FUNCTION_KEYS) {
        var t = S.FUNCTION_KEYS[i].toLowerCase();
        S[t] = parseInt(i, 10);
      }
      for (var i in S.PRINTABLE_KEYS) {
        var t = S.PRINTABLE_KEYS[i].toLowerCase();
        S[t] = parseInt(i, 10);
      }
      b.mixin(S, S.MODIFIER_KEYS), b.mixin(S, S.PRINTABLE_KEYS), b.mixin(S, S.FUNCTION_KEYS), S.enter = S.return, S.escape = S.esc, S.del = S.delete, function() {
        for (var e = ["cmd", "ctrl", "alt", "shift"], o = Math.pow(2, e.length); o--; )
          S.KEY_MODS[o] = e.filter(function(s) {
            return o & S.KEY_MODS[s];
          }).join("-") + "-";
      }(), S.KEY_MODS[0] = "", S.KEY_MODS[-1] = "input-", b.mixin(R, S), R.default = R, R.keyCodeToString = function(e) {
        var o = S[e];
        return typeof o != "string" && (o = String.fromCharCode(e)), o.toLowerCase();
      };
    }), ace.define("ace/lib/event", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function(w, R, N) {
      var b = w("./keys"), S = w("./useragent"), A = null, a = 0, c;
      function n() {
        c = !1;
        try {
          document.createComment("").addEventListener("test", function() {
          }, {
            get passive() {
              return c = { passive: !1 }, !0;
            }
          });
        } catch {
        }
      }
      function r() {
        return c == null && n(), c;
      }
      function i(C, p, f) {
        this.elem = C, this.type = p, this.callback = f;
      }
      i.prototype.destroy = function() {
        e(this.elem, this.type, this.callback), this.elem = this.type = this.callback = void 0;
      };
      var t = R.addListener = function(C, p, f, g) {
        C.addEventListener(p, f, r()), g && g.$toDestroy.push(new i(C, p, f));
      }, e = R.removeListener = function(C, p, f) {
        C.removeEventListener(p, f, r());
      };
      R.stopEvent = function(C) {
        return R.stopPropagation(C), R.preventDefault(C), !1;
      }, R.stopPropagation = function(C) {
        C.stopPropagation && C.stopPropagation();
      }, R.preventDefault = function(C) {
        C.preventDefault && C.preventDefault();
      }, R.getButton = function(C) {
        return C.type == "dblclick" ? 0 : C.type == "contextmenu" || S.isMac && C.ctrlKey && !C.altKey && !C.shiftKey ? 2 : C.button;
      }, R.capture = function(C, p, f) {
        var g = C && C.ownerDocument || document;
        function v(M) {
          p && p(M), f && f(M), e(g, "mousemove", p), e(g, "mouseup", v), e(g, "dragstart", v);
        }
        return t(g, "mousemove", p), t(g, "mouseup", v), t(g, "dragstart", v), v;
      }, R.addMouseWheelListener = function(C, p, f) {
        t(C, "wheel", function(g) {
          var v = 0.15, M = g.deltaX || 0, W = g.deltaY || 0;
          switch (g.deltaMode) {
            case g.DOM_DELTA_PIXEL:
              g.wheelX = M * v, g.wheelY = W * v;
              break;
            case g.DOM_DELTA_LINE:
              var k = 15;
              g.wheelX = M * k, g.wheelY = W * k;
              break;
            case g.DOM_DELTA_PAGE:
              var Z = 150;
              g.wheelX = M * Z, g.wheelY = W * Z;
              break;
          }
          p(g);
        }, f);
      }, R.addMultiMouseDownListener = function(C, p, f, g, v) {
        var M = 0, W, k, Z, y = {
          2: "dblclick",
          3: "tripleclick",
          4: "quadclick"
        };
        function I(d) {
          if (R.getButton(d) !== 0 ? M = 0 : d.detail > 1 ? (M++, M > 4 && (M = 1)) : M = 1, S.isIE) {
            var h = Math.abs(d.clientX - W) > 5 || Math.abs(d.clientY - k) > 5;
            (!Z || h) && (M = 1), Z && clearTimeout(Z), Z = setTimeout(function() {
              Z = null;
            }, p[M - 1] || 600), M == 1 && (W = d.clientX, k = d.clientY);
          }
          if (d._clicks = M, f[g]("mousedown", d), M > 4)
            M = 0;
          else if (M > 1)
            return f[g](y[M], d);
        }
        Array.isArray(C) || (C = [C]), C.forEach(function(d) {
          t(d, "mousedown", I, v);
        });
      };
      function o(C) {
        return 0 | (C.ctrlKey ? 1 : 0) | (C.altKey ? 2 : 0) | (C.shiftKey ? 4 : 0) | (C.metaKey ? 8 : 0);
      }
      R.getModifierString = function(C) {
        return b.KEY_MODS[o(C)];
      };
      function s(C, p, f) {
        var g = o(p);
        if (!f && p.code && (f = b.$codeToKeyCode[p.code] || f), !S.isMac && A) {
          if (p.getModifierState && (p.getModifierState("OS") || p.getModifierState("Win")) && (g |= 8), A.altGr)
            if ((3 & g) != 3)
              A.altGr = 0;
            else
              return;
          if (f === 18 || f === 17) {
            var v = p.location;
            if (f === 17 && v === 1)
              A[f] == 1 && (a = p.timeStamp);
            else if (f === 18 && g === 3 && v === 2) {
              var M = p.timeStamp - a;
              M < 50 && (A.altGr = !0);
            }
          }
        }
        if (f in b.MODIFIER_KEYS && (f = -1), !(!g && f === 13 && p.location === 3 && (C(p, g, -f), p.defaultPrevented))) {
          if (S.isChromeOS && g & 8) {
            if (C(p, g, f), p.defaultPrevented)
              return;
            g &= -9;
          }
          return !g && !(f in b.FUNCTION_KEYS) && !(f in b.PRINTABLE_KEYS) ? !1 : C(p, g, f);
        }
      }
      R.addCommandKeyListener = function(C, p, f) {
        var g = null;
        t(C, "keydown", function(v) {
          A[v.keyCode] = (A[v.keyCode] || 0) + 1;
          var M = s(p, v, v.keyCode);
          return g = v.defaultPrevented, M;
        }, f), t(C, "keypress", function(v) {
          g && (v.ctrlKey || v.altKey || v.shiftKey || v.metaKey) && (R.stopEvent(v), g = null);
        }, f), t(C, "keyup", function(v) {
          A[v.keyCode] = null;
        }, f), A || (l(), t(window, "focus", l));
      };
      function l() {
        A = /* @__PURE__ */ Object.create(null);
      }
      if (typeof window == "object" && window.postMessage && !S.isOldIE) {
        var u = 1;
        R.nextTick = function(C, p) {
          p = p || window;
          var f = "zero-timeout-message-" + u++, g = function(v) {
            v.data == f && (R.stopPropagation(v), e(p, "message", g), C());
          };
          t(p, "message", g), p.postMessage(f, "*");
        };
      }
      R.$idleBlocked = !1, R.onIdle = function(C, p) {
        return setTimeout(function f() {
          R.$idleBlocked ? setTimeout(f, 100) : C();
        }, p);
      }, R.$idleBlockId = null, R.blockIdle = function(C) {
        R.$idleBlockId && clearTimeout(R.$idleBlockId), R.$idleBlocked = !0, R.$idleBlockId = setTimeout(function() {
          R.$idleBlocked = !1;
        }, C || 100);
      }, R.nextFrame = typeof window == "object" && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame), R.nextFrame ? R.nextFrame = R.nextFrame.bind(window) : R.nextFrame = function(C) {
        setTimeout(C, 17);
      };
    }), ace.define("ace/clipboard", ["require", "exports", "module"], function(w, R, N) {
      var b;
      N.exports = {
        lineMode: !1,
        pasteCancelled: function() {
          return b && b > Date.now() - 50 ? !0 : b = !1;
        },
        cancel: function() {
          b = Date.now();
        }
      };
    }), ace.define("ace/keyboard/textinput", ["require", "exports", "module", "ace/lib/event", "ace/config", "ace/lib/useragent", "ace/lib/dom", "ace/lib/lang", "ace/clipboard", "ace/lib/keys"], function(w, R, N) {
      var b = w("../lib/event"), S = w("../config").nls, A = w("../lib/useragent"), a = w("../lib/dom"), c = w("../lib/lang"), n = w("../clipboard"), r = A.isChrome < 18, i = A.isIE, t = A.isChrome > 63, e = 400, o = w("../lib/keys"), s = o.KEY_MODS, l = A.isIOS, u = l ? /\s/ : /\n/, C = A.isMobile, p;
      p = function(f, g) {
        var v = a.createElement("textarea");
        v.className = "ace_text-input", v.setAttribute("wrap", "off"), v.setAttribute("autocorrect", "off"), v.setAttribute("autocapitalize", "off"), v.setAttribute("spellcheck", "false"), v.style.opacity = "0", f.insertBefore(v, f.firstChild), this.setHost = function(K) {
          g = K;
        };
        var M = !1, W = !1, k = !1, Z = !1, y = "";
        C || (v.style.fontSize = "1px");
        var I = !1, d = !1, h = "", m = 0, x = 0, $ = 0, L = Number.MAX_SAFE_INTEGER, B = Number.MIN_SAFE_INTEGER, T = 0;
        try {
          var V = document.activeElement === v;
        } catch {
        }
        this.setNumberOfExtraLines = function(K) {
          if (L = Number.MAX_SAFE_INTEGER, B = Number.MIN_SAFE_INTEGER, K < 0) {
            T = 0;
            return;
          }
          T = K;
        }, this.setAriaLabel = function() {
          var K = "";
          if (g.$textInputAriaLabel && (K += "".concat(g.$textInputAriaLabel, ", ")), g.session) {
            var j = g.session.selection.cursor.row;
            K += S("text-input.aria-label", "Cursor at row $0", [j + 1]);
          }
          v.setAttribute("aria-label", K);
        }, this.setAriaOptions = function(K) {
          K.activeDescendant ? (v.setAttribute("aria-haspopup", "true"), v.setAttribute("aria-autocomplete", K.inline ? "both" : "list"), v.setAttribute("aria-activedescendant", K.activeDescendant)) : (v.setAttribute("aria-haspopup", "false"), v.setAttribute("aria-autocomplete", "both"), v.removeAttribute("aria-activedescendant")), K.role && v.setAttribute("role", K.role), K.setLabel && (v.setAttribute("aria-roledescription", S("text-input.aria-roledescription", "editor")), this.setAriaLabel());
        }, this.setAriaOptions({ role: "textbox" }), b.addListener(v, "blur", function(K) {
          d || (g.onBlur(K), V = !1);
        }, g), b.addListener(v, "focus", function(K) {
          if (!d) {
            if (V = !0, A.isEdge)
              try {
                if (!document.hasFocus())
                  return;
              } catch {
              }
            g.onFocus(K), A.isEdge ? setTimeout(O) : O();
          }
        }, g), this.$focusScroll = !1, this.focus = function() {
          if (this.setAriaOptions({
            setLabel: g.renderer.enableKeyboardAccessibility
          }), y || t || this.$focusScroll == "browser")
            return v.focus({ preventScroll: !0 });
          var K = v.style.top;
          v.style.position = "fixed", v.style.top = "0px";
          try {
            var j = v.getBoundingClientRect().top != 0;
          } catch {
            return;
          }
          var q = [];
          if (j)
            for (var oe = v.parentElement; oe && oe.nodeType == 1; )
              q.push(oe), oe.setAttribute("ace_nocontext", "true"), !oe.parentElement && oe.getRootNode ? oe = oe.getRootNode().host : oe = oe.parentElement;
          v.focus({ preventScroll: !0 }), j && q.forEach(function(le) {
            le.removeAttribute("ace_nocontext");
          }), setTimeout(function() {
            v.style.position = "", v.style.top == "0px" && (v.style.top = K);
          }, 0);
        }, this.blur = function() {
          v.blur();
        }, this.isFocused = function() {
          return V;
        }, g.on("beforeEndOperation", function() {
          var K = g.curOp, j = K && K.command && K.command.name;
          if (j != "insertstring") {
            var q = j && (K.docChanged || K.selectionChanged);
            k && q && (h = v.value = "", we()), O();
          }
        }), g.on("changeSelection", this.setAriaLabel);
        var _ = function(K, j) {
          for (var q = j, oe = 1; oe <= K - L && oe < 2 * T + 1; oe++)
            q += g.session.getLine(K - oe).length + 1;
          return q;
        }, O = l ? function(K) {
          if (!(!V || M && !K || Z)) {
            K || (K = "");
            var j = `
 ab` + K + `cde fg
`;
            j != v.value && (v.value = h = j);
            var q = 4, oe = 4 + (K.length || (g.selection.isEmpty() ? 0 : 1));
            (m != q || x != oe) && v.setSelectionRange(q, oe), m = q, x = oe;
          }
        } : function() {
          if (!(k || Z) && !(!V && !Y)) {
            k = !0;
            var K = 0, j = 0, q = "";
            if (g.session) {
              var oe = g.selection, le = oe.getRange(), de = oe.cursor.row;
              de === B + 1 ? (L = B + 1, B = L + 2 * T) : de === L - 1 ? (B = L - 1, L = B - 2 * T) : (de < L - 1 || de > B + 1) && (L = de > T ? de - T : 0, B = de > T ? de + T : 2 * T);
              for (var me = [], fe = L; fe <= B; fe++)
                me.push(g.session.getLine(fe));
              if (q = me.join(`
`), K = _(le.start.row, le.start.column), j = _(le.end.row, le.end.column), le.start.row < L) {
                var he = g.session.getLine(L - 1);
                K = le.start.row < L - 1 ? 0 : K, j += he.length + 1, q = he + `
` + q;
              } else if (le.end.row > B) {
                var ce = g.session.getLine(B + 1);
                j = le.end.row > B + 1 ? ce.length : le.end.column, j += q.length + 1, q = q + `
` + ce;
              } else C && de > 0 && (q = `
` + q, j += 1, K += 1);
              q.length > e && (K < e && j < e ? q = q.slice(0, e) : (q = `
`, K == j ? K = j = 0 : (K = 0, j = 1)));
              var ye = q + `

`;
              ye != h && (v.value = h = ye, m = x = ye.length);
            }
            if (Y && (m = v.selectionStart, x = v.selectionEnd), x != j || m != K || v.selectionEnd != x)
              try {
                v.setSelectionRange(K, j), m = K, x = j;
              } catch {
              }
            k = !1;
          }
        };
        this.resetSelection = O, V && g.onFocus();
        var E = function(K) {
          return K.selectionStart === 0 && K.selectionEnd >= h.length && K.value === h && h && K.selectionEnd !== x;
        }, F = function(K) {
          k || (M ? M = !1 : E(v) ? (g.selectAll(), O()) : C && v.selectionStart != m && O());
        }, D = null;
        this.setInputHandler = function(K) {
          D = K;
        }, this.getInputHandler = function() {
          return D;
        };
        var Y = !1, P = function(K, j) {
          if (Y && (Y = !1), W)
            return O(), K && g.onPaste(K), W = !1, "";
          for (var q = v.selectionStart, oe = v.selectionEnd, le = m, de = h.length - x, me = K, fe = K.length - q, he = K.length - oe, ce = 0; le > 0 && h[ce] == K[ce]; )
            ce++, le--;
          for (me = me.slice(ce), ce = 1; de > 0 && h.length - ce > m - 1 && h[h.length - ce] == K[K.length - ce]; )
            ce++, de--;
          fe -= ce - 1, he -= ce - 1;
          var ye = me.length - ce + 1;
          if (ye < 0 && (le = -ye, ye = 0), me = me.slice(0, ye), !j && !me && !fe && !le && !de && !he)
            return "";
          Z = !0;
          var ze = !1;
          return A.isAndroid && me == ". " && (me = "  ", ze = !0), me && !le && !de && !fe && !he || I ? g.onTextInput(me) : g.onTextInput(me, {
            extendLeft: le,
            extendRight: de,
            restoreStart: fe,
            restoreEnd: he
          }), Z = !1, h = K, m = q, x = oe, $ = he, ze ? `
` : me;
        }, X = function(K) {
          if (k)
            return ke();
          if (K && K.inputType) {
            if (K.inputType == "historyUndo")
              return g.execCommand("undo");
            if (K.inputType == "historyRedo")
              return g.execCommand("redo");
          }
          var j = v.value, q = P(j, !0);
          (j.length > e + 100 || u.test(q) || C && m < 1 && m == x) && O();
        }, Q = function(K, j, q) {
          var oe = K.clipboardData || window.clipboardData;
          if (!(!oe || r)) {
            var le = i || q ? "Text" : "text/plain";
            try {
              return j ? oe.setData(le, j) !== !1 : oe.getData(le);
            } catch (de) {
              if (!q)
                return Q(de, j, !0);
            }
          }
        }, ie = function(K, j) {
          var q = g.getCopyText();
          if (!q)
            return b.preventDefault(K);
          Q(K, q) ? (l && (O(q), M = q, setTimeout(function() {
            M = !1;
          }, 10)), j ? g.onCut() : g.onCopy(), b.preventDefault(K)) : (M = !0, v.value = q, v.select(), setTimeout(function() {
            M = !1, O(), j ? g.onCut() : g.onCopy();
          }));
        }, ge = function(K) {
          ie(K, !0);
        }, Ce = function(K) {
          ie(K, !1);
        }, ue = function(K) {
          var j = Q(K);
          n.pasteCancelled() || (typeof j == "string" ? (j && g.onPaste(j, K), A.isIE && setTimeout(O), b.preventDefault(K)) : (v.value = "", W = !0));
        };
        b.addCommandKeyListener(v, function(K, j, q) {
          if (!k)
            return g.onCommandKey(K, j, q);
        }, g), b.addListener(v, "select", F, g), b.addListener(v, "input", X, g), b.addListener(v, "cut", ge, g), b.addListener(v, "copy", Ce, g), b.addListener(v, "paste", ue, g), (!("oncut" in v) || !("oncopy" in v) || !("onpaste" in v)) && b.addListener(f, "keydown", function(K) {
          if (!(A.isMac && !K.metaKey || !K.ctrlKey))
            switch (K.keyCode) {
              case 67:
                Ce(K);
                break;
              case 86:
                ue(K);
                break;
              case 88:
                ge(K);
                break;
            }
        }, g);
        var be = function(K) {
          if (!(k || !g.onCompositionStart || g.$readOnly) && (k = {}, !I)) {
            K.data && (k.useTextareaForIME = !1), setTimeout(ke, 0), g._signal("compositionStart"), g.on("mousedown", $e);
            var j = g.getSelectionRange();
            j.end.row = j.start.row, j.end.column = j.start.column, k.markerRange = j, k.selectionStart = m, g.onCompositionStart(k), k.useTextareaForIME ? (h = v.value = "", m = 0, x = 0) : (v.msGetInputContext && (k.context = v.msGetInputContext()), v.getInputContext && (k.context = v.getInputContext()));
          }
        }, ke = function() {
          if (!(!k || !g.onCompositionUpdate || g.$readOnly)) {
            if (I)
              return $e();
            if (k.useTextareaForIME)
              g.onCompositionUpdate(v.value);
            else {
              var K = v.value;
              P(K), k.markerRange && (k.context && (k.markerRange.start.column = k.selectionStart = k.context.compositionStartOffset), k.markerRange.end.column = k.markerRange.start.column + x - k.selectionStart + $);
            }
          }
        }, we = function(K) {
          !g.onCompositionEnd || g.$readOnly || (k = !1, g.onCompositionEnd(), g.off("mousedown", $e), K && X());
        };
        function $e() {
          d = !0, v.blur(), v.focus(), d = !1;
        }
        var At = c.delayedCall(ke, 50).schedule.bind(null, null);
        function rn(K) {
          K.keyCode == 27 && v.value.length < v.selectionStart && (k || (h = v.value), m = x = -1, O()), At();
        }
        b.addListener(v, "compositionstart", be, g), b.addListener(v, "compositionupdate", ke, g), b.addListener(v, "keyup", rn, g), b.addListener(v, "keydown", At, g), b.addListener(v, "compositionend", we, g), this.getElement = function() {
          return v;
        }, this.setCommandMode = function(K) {
          I = K, v.readOnly = !1;
        }, this.setReadOnly = function(K) {
          I || (v.readOnly = K);
        }, this.setCopyWithEmptySelection = function(K) {
        }, this.onContextMenu = function(K) {
          Y = !0, O(), g._emit("nativecontextmenu", { target: g, domEvent: K }), this.moveToMouse(K, !0);
        }, this.moveToMouse = function(K, j) {
          y || (y = v.style.cssText), v.style.cssText = (j ? "z-index:100000;" : "") + (A.isIE ? "opacity:0.1;" : "") + "text-indent: -" + (m + x) * g.renderer.characterWidth * 0.5 + "px;";
          var q = g.container.getBoundingClientRect(), oe = a.computedStyle(g.container), le = q.top + (parseInt(oe.borderTopWidth) || 0), de = q.left + (parseInt(oe.borderLeftWidth) || 0), me = q.bottom - le - v.clientHeight - 2, fe = function(he) {
            a.translate(v, he.clientX - de - 2, Math.min(he.clientY - le - 2, me));
          };
          fe(K), K.type == "mousedown" && (g.renderer.$isMousePressed = !0, clearTimeout(lt), A.isWin && b.capture(g.container, fe, tt));
        }, this.onContextMenuClose = tt;
        var lt;
        function tt() {
          clearTimeout(lt), lt = setTimeout(function() {
            y && (v.style.cssText = y, y = ""), g.renderer.$isMousePressed = !1, g.renderer.$keepTextAreaAtCursor && g.renderer.$moveTextAreaToCursor();
          }, 0);
        }
        var ct = function(K) {
          g.textInput.onContextMenu(K), tt();
        };
        b.addListener(v, "mouseup", ct, g), b.addListener(v, "mousedown", function(K) {
          K.preventDefault(), tt();
        }, g), b.addListener(g.renderer.scroller, "contextmenu", ct, g), b.addListener(v, "contextmenu", ct, g), l && sn(f, g, v);
        function sn(K, j, q) {
          var oe = null, le = !1;
          q.addEventListener("keydown", function(me) {
            oe && clearTimeout(oe), le = !0;
          }, !0), q.addEventListener("keyup", function(me) {
            oe = setTimeout(function() {
              le = !1;
            }, 100);
          }, !0);
          var de = function(me) {
            if (document.activeElement === q && !(le || k || j.$mouseHandler.isMousePressed) && !M) {
              var fe = q.selectionStart, he = q.selectionEnd, ce = null, ye = 0;
              if (fe == 0 ? ce = o.up : fe == 1 ? ce = o.home : he > x && h[he] == `
` ? ce = o.end : fe < m && h[fe - 1] == " " ? (ce = o.left, ye = s.option) : fe < m || fe == m && x != m && fe == he ? ce = o.left : he > x && h.slice(0, he).split(`
`).length > 2 ? ce = o.down : he > x && h[he - 1] == " " ? (ce = o.right, ye = s.option) : (he > x || he == x && x != m && fe == he) && (ce = o.right), fe !== he && (ye |= s.shift), ce) {
                var ze = j.onCommandKey({}, ye, ce);
                if (!ze && j.commands) {
                  ce = o.keyCodeToString(ce);
                  var vt = j.commands.findKeyCommand(ye, ce);
                  vt && j.execCommand(vt);
                }
                m = fe, x = he, O("");
              }
            }
          };
          document.addEventListener("selectionchange", de), j.on("destroy", function() {
            document.removeEventListener("selectionchange", de);
          });
        }
        this.destroy = function() {
          v.parentElement && v.parentElement.removeChild(v);
        };
      }, R.TextInput = p, R.$setUserAgentForTests = function(f, g) {
        C = f, l = g;
      };
    }), ace.define("ace/mouse/default_handlers", ["require", "exports", "module", "ace/lib/useragent"], function(w, R, N) {
      var b = w("../lib/useragent"), S = 0, A = 550, a = (
        /** @class */
        function() {
          function r(i) {
            i.$clickSelection = null;
            var t = i.editor;
            t.setDefaultHandler("mousedown", this.onMouseDown.bind(i)), t.setDefaultHandler("dblclick", this.onDoubleClick.bind(i)), t.setDefaultHandler("tripleclick", this.onTripleClick.bind(i)), t.setDefaultHandler("quadclick", this.onQuadClick.bind(i)), t.setDefaultHandler("mousewheel", this.onMouseWheel.bind(i));
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
            e.forEach(function(o) {
              i[o] = this[o];
            }, this), i.selectByLines = this.extendSelectionBy.bind(i, "getLineRange"), i.selectByWords = this.extendSelectionBy.bind(i, "getWordRange");
          }
          return r.prototype.onMouseDown = function(i) {
            var t = i.inSelection(), e = i.getDocumentPosition();
            this.mousedownEvent = i;
            var o = this.editor, s = i.getButton();
            if (s !== 0) {
              var l = o.getSelectionRange(), u = l.isEmpty();
              (u || s == 1) && o.selection.moveToPosition(e), s == 2 && (o.textInput.onContextMenu(i.domEvent), b.isMozilla || i.preventDefault());
              return;
            }
            if (this.mousedownEvent.time = Date.now(), t && !o.isFocused() && (o.focus(), this.$focusTimeout && !this.$clickSelection && !o.inMultiSelectMode)) {
              this.setState("focusWait"), this.captureMouse(i);
              return;
            }
            return this.captureMouse(i), this.startSelect(e, i.domEvent._clicks > 1), i.preventDefault();
          }, r.prototype.startSelect = function(i, t) {
            i = i || this.editor.renderer.screenToTextCoordinates(this.x, this.y);
            var e = this.editor;
            this.mousedownEvent && (this.mousedownEvent.getShiftKey() ? e.selection.selectToPosition(i) : t || e.selection.moveToPosition(i), t || this.select(), e.setStyle("ace_selecting"), this.setState("select"));
          }, r.prototype.select = function() {
            var i, t = this.editor, e = t.renderer.screenToTextCoordinates(this.x, this.y);
            if (this.$clickSelection) {
              var o = this.$clickSelection.comparePoint(e);
              if (o == -1)
                i = this.$clickSelection.end;
              else if (o == 1)
                i = this.$clickSelection.start;
              else {
                var s = n(this.$clickSelection, e);
                e = s.cursor, i = s.anchor;
              }
              t.selection.setSelectionAnchor(i.row, i.column);
            }
            t.selection.selectToPosition(e), t.renderer.scrollCursorIntoView();
          }, r.prototype.extendSelectionBy = function(i) {
            var t, e = this.editor, o = e.renderer.screenToTextCoordinates(this.x, this.y), s = e.selection[i](o.row, o.column);
            if (this.$clickSelection) {
              var l = this.$clickSelection.comparePoint(s.start), u = this.$clickSelection.comparePoint(s.end);
              if (l == -1 && u <= 0)
                t = this.$clickSelection.end, (s.end.row != o.row || s.end.column != o.column) && (o = s.start);
              else if (u == 1 && l >= 0)
                t = this.$clickSelection.start, (s.start.row != o.row || s.start.column != o.column) && (o = s.end);
              else if (l == -1 && u == 1)
                o = s.end, t = s.start;
              else {
                var C = n(this.$clickSelection, o);
                o = C.cursor, t = C.anchor;
              }
              e.selection.setSelectionAnchor(t.row, t.column);
            }
            e.selection.selectToPosition(o), e.renderer.scrollCursorIntoView();
          }, r.prototype.selectByLinesEnd = function() {
            this.$clickSelection = null, this.editor.unsetStyle("ace_selecting");
          }, r.prototype.focusWait = function() {
            var i = c(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y), t = Date.now();
            (i > S || t - this.mousedownEvent.time > this.$focusTimeout) && this.startSelect(this.mousedownEvent.getDocumentPosition());
          }, r.prototype.onDoubleClick = function(i) {
            var t = i.getDocumentPosition(), e = this.editor, o = e.session, s = o.getBracketRange(t);
            s ? (s.isEmpty() && (s.start.column--, s.end.column++), this.setState("select")) : (s = e.selection.getWordRange(t.row, t.column), this.setState("selectByWords")), this.$clickSelection = s, this.select();
          }, r.prototype.onTripleClick = function(i) {
            var t = i.getDocumentPosition(), e = this.editor;
            this.setState("selectByLines");
            var o = e.getSelectionRange();
            o.isMultiLine() && o.contains(t.row, t.column) ? (this.$clickSelection = e.selection.getLineRange(o.start.row), this.$clickSelection.end = e.selection.getLineRange(o.end.row).end) : this.$clickSelection = e.selection.getLineRange(t.row), this.select();
          }, r.prototype.onQuadClick = function(i) {
            var t = this.editor;
            t.selectAll(), this.$clickSelection = t.getSelectionRange(), this.setState("selectAll");
          }, r.prototype.onMouseWheel = function(i) {
            if (!i.getAccelKey()) {
              i.getShiftKey() && i.wheelY && !i.wheelX && (i.wheelX = i.wheelY, i.wheelY = 0);
              var t = this.editor;
              this.$lastScroll || (this.$lastScroll = { t: 0, vx: 0, vy: 0, allowed: 0 });
              var e = this.$lastScroll, o = i.domEvent.timeStamp, s = o - e.t, l = s ? i.wheelX / s : e.vx, u = s ? i.wheelY / s : e.vy;
              s < A && (l = (l + e.vx) / 2, u = (u + e.vy) / 2);
              var C = Math.abs(l / u), p = !1;
              if (C >= 1 && t.renderer.isScrollableBy(i.wheelX * i.speed, 0) && (p = !0), C <= 1 && t.renderer.isScrollableBy(0, i.wheelY * i.speed) && (p = !0), p)
                e.allowed = o;
              else if (o - e.allowed < A) {
                var f = Math.abs(l) <= 1.5 * Math.abs(e.vx) && Math.abs(u) <= 1.5 * Math.abs(e.vy);
                f ? (p = !0, e.allowed = o) : e.allowed = 0;
              }
              if (e.t = o, e.vx = l, e.vy = u, p)
                return t.renderer.scrollBy(i.wheelX * i.speed, i.wheelY * i.speed), i.stop();
            }
          }, r;
        }()
      );
      a.prototype.selectEnd = a.prototype.selectByLinesEnd, a.prototype.selectAllEnd = a.prototype.selectByLinesEnd, a.prototype.selectByWordsEnd = a.prototype.selectByLinesEnd, R.DefaultHandlers = a;
      function c(r, i, t, e) {
        return Math.sqrt(Math.pow(t - r, 2) + Math.pow(e - i, 2));
      }
      function n(r, i) {
        if (r.start.row == r.end.row)
          var t = 2 * i.column - r.start.column - r.end.column;
        else if (r.start.row == r.end.row - 1 && !r.start.column && !r.end.column)
          var t = i.column - 4;
        else
          var t = 2 * i.row - r.start.row - r.end.row;
        return t < 0 ? { cursor: r.start, anchor: r.end } : { cursor: r.end, anchor: r.start };
      }
    }), ace.define("ace/lib/scroll", ["require", "exports", "module"], function(w, R, N) {
      R.preventParentScroll = function(S) {
        S.stopPropagation();
        var A = S.currentTarget, a = A.scrollHeight > A.clientHeight;
        a || S.preventDefault();
      };
    }), ace.define("ace/tooltip", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/range", "ace/lib/scroll"], function(w, R, N) {
      var b = this && this.__extends || /* @__PURE__ */ function() {
        var o = function(s, l) {
          return o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, C) {
            u.__proto__ = C;
          } || function(u, C) {
            for (var p in C) Object.prototype.hasOwnProperty.call(C, p) && (u[p] = C[p]);
          }, o(s, l);
        };
        return function(s, l) {
          if (typeof l != "function" && l !== null)
            throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
          o(s, l);
          function u() {
            this.constructor = s;
          }
          s.prototype = l === null ? Object.create(l) : (u.prototype = l.prototype, new u());
        };
      }(), S = this && this.__values || function(o) {
        var s = typeof Symbol == "function" && Symbol.iterator, l = s && o[s], u = 0;
        if (l) return l.call(o);
        if (o && typeof o.length == "number") return {
          next: function() {
            return o && u >= o.length && (o = void 0), { value: o && o[u++], done: !o };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }, A = w("./lib/dom");
      w("./lib/event");
      var a = w("./range").Range, c = w("./lib/scroll").preventParentScroll, n = "ace_tooltip", r = (
        /** @class */
        function() {
          function o(s) {
            this.isOpen = !1, this.$element = null, this.$parentNode = s;
          }
          return o.prototype.$init = function() {
            return this.$element = A.createElement("div"), this.$element.className = n, this.$element.style.display = "none", this.$parentNode.appendChild(this.$element), this.$element;
          }, o.prototype.getElement = function() {
            return this.$element || this.$init();
          }, o.prototype.setText = function(s) {
            this.getElement().textContent = s;
          }, o.prototype.setHtml = function(s) {
            this.getElement().innerHTML = s;
          }, o.prototype.setPosition = function(s, l) {
            this.getElement().style.left = s + "px", this.getElement().style.top = l + "px";
          }, o.prototype.setClassName = function(s) {
            A.addCssClass(this.getElement(), s);
          }, o.prototype.setTheme = function(s) {
            this.$element.className = n + " " + (s.isDark ? "ace_dark " : "") + (s.cssClass || "");
          }, o.prototype.show = function(s, l, u) {
            s != null && this.setText(s), l != null && u != null && this.setPosition(l, u), this.isOpen || (this.getElement().style.display = "block", this.isOpen = !0);
          }, o.prototype.hide = function(s) {
            this.isOpen && (this.getElement().style.display = "none", this.getElement().className = n, this.isOpen = !1);
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
          return o.prototype.addPopup = function(s) {
            this.popups.push(s), this.updatePopups();
          }, o.prototype.removePopup = function(s) {
            var l = this.popups.indexOf(s);
            l !== -1 && (this.popups.splice(l, 1), this.updatePopups());
          }, o.prototype.updatePopups = function() {
            var s, l, u, C;
            this.popups.sort(function(y, I) {
              return I.priority - y.priority;
            });
            var p = [];
            try {
              for (var f = S(this.popups), g = f.next(); !g.done; g = f.next()) {
                var v = g.value, M = !0;
                try {
                  for (var W = (u = void 0, S(p)), k = W.next(); !k.done; k = W.next()) {
                    var Z = k.value;
                    if (this.doPopupsOverlap(Z, v)) {
                      M = !1;
                      break;
                    }
                  }
                } catch (y) {
                  u = { error: y };
                } finally {
                  try {
                    k && !k.done && (C = W.return) && C.call(W);
                  } finally {
                    if (u) throw u.error;
                  }
                }
                M ? p.push(v) : v.hide();
              }
            } catch (y) {
              s = { error: y };
            } finally {
              try {
                g && !g.done && (l = f.return) && l.call(f);
              } finally {
                if (s) throw s.error;
              }
            }
          }, o.prototype.doPopupsOverlap = function(s, l) {
            var u = s.getElement().getBoundingClientRect(), C = l.getElement().getBoundingClientRect();
            return u.left < C.right && u.right > C.left && u.top < C.bottom && u.bottom > C.top;
          }, o;
        }()
      ), t = new i();
      R.popupManager = t, R.Tooltip = r;
      var e = (
        /** @class */
        function(o) {
          b(s, o);
          function s(l) {
            l === void 0 && (l = document.body);
            var u = o.call(this, l) || this;
            u.timeout = void 0, u.lastT = 0, u.idleTime = 350, u.lastEvent = void 0, u.onMouseOut = u.onMouseOut.bind(u), u.onMouseMove = u.onMouseMove.bind(u), u.waitForHover = u.waitForHover.bind(u), u.hide = u.hide.bind(u);
            var C = u.getElement();
            return C.style.whiteSpace = "pre-wrap", C.style.pointerEvents = "auto", C.addEventListener("mouseout", u.onMouseOut), C.tabIndex = -1, C.addEventListener("blur", (function() {
              C.contains(document.activeElement) || this.hide();
            }).bind(u)), C.addEventListener("wheel", c), u;
          }
          return s.prototype.addToEditor = function(l) {
            l.on("mousemove", this.onMouseMove), l.on("mousedown", this.hide), l.renderer.getMouseEventTarget().addEventListener("mouseout", this.onMouseOut, !0);
          }, s.prototype.removeFromEditor = function(l) {
            l.off("mousemove", this.onMouseMove), l.off("mousedown", this.hide), l.renderer.getMouseEventTarget().removeEventListener("mouseout", this.onMouseOut, !0), this.timeout && (clearTimeout(this.timeout), this.timeout = null);
          }, s.prototype.onMouseMove = function(l, u) {
            this.lastEvent = l, this.lastT = Date.now();
            var C = u.$mouseHandler.isMousePressed;
            if (this.isOpen) {
              var p = this.lastEvent && this.lastEvent.getDocumentPosition();
              (!this.range || !this.range.contains(p.row, p.column) || C || this.isOutsideOfText(this.lastEvent)) && this.hide();
            }
            this.timeout || C || (this.lastEvent = l, this.timeout = setTimeout(this.waitForHover, this.idleTime));
          }, s.prototype.waitForHover = function() {
            this.timeout && clearTimeout(this.timeout);
            var l = Date.now() - this.lastT;
            if (this.idleTime - l > 10) {
              this.timeout = setTimeout(this.waitForHover, this.idleTime - l);
              return;
            }
            this.timeout = null, this.lastEvent && !this.isOutsideOfText(this.lastEvent) && this.$gatherData(this.lastEvent, this.lastEvent.editor);
          }, s.prototype.isOutsideOfText = function(l) {
            var u = l.editor, C = l.getDocumentPosition(), p = u.session.getLine(C.row);
            if (C.column == p.length) {
              var f = u.renderer.pixelToScreenCoordinates(l.clientX, l.clientY), g = u.session.documentToScreenPosition(C.row, C.column);
              if (g.column != f.column || g.row != f.row)
                return !0;
            }
            return !1;
          }, s.prototype.setDataProvider = function(l) {
            this.$gatherData = l;
          }, s.prototype.showForRange = function(l, u, C, p) {
            var f = 10;
            if (!(p && p != this.lastEvent) && !(this.isOpen && document.activeElement == this.getElement())) {
              var g = l.renderer;
              this.isOpen || (t.addPopup(this), this.$registerCloseEvents(), this.setTheme(g.theme)), this.isOpen = !0, this.addMarker(u, l.session), this.range = a.fromPoints(u.start, u.end);
              var v = g.textToScreenCoordinates(u.start.row, u.start.column), M = g.scroller.getBoundingClientRect();
              v.pageX < M.left && (v.pageX = M.left);
              var W = this.getElement();
              W.innerHTML = "", W.appendChild(C), W.style.maxHeight = "", W.style.display = "block";
              var k = W.clientHeight, Z = W.clientWidth, y = window.innerHeight - v.pageY - g.lineHeight, I = !0;
              v.pageY - k < 0 && v.pageY < y && (I = !1), W.style.maxHeight = (I ? v.pageY : y) - f + "px", W.style.top = I ? "" : v.pageY + g.lineHeight + "px", W.style.bottom = I ? window.innerHeight - v.pageY + "px" : "", W.style.left = Math.min(v.pageX, window.innerWidth - Z - f) + "px";
            }
          }, s.prototype.addMarker = function(l, u) {
            this.marker && this.$markerSession.removeMarker(this.marker), this.$markerSession = u, this.marker = u && u.addMarker(l, "ace_highlight-marker", "text");
          }, s.prototype.hide = function(l) {
            !l && document.activeElement == this.getElement() || l && l.target && (l.type != "keydown" || l.ctrlKey || l.metaKey) && this.$element.contains(l.target) || (this.lastEvent = null, this.timeout && clearTimeout(this.timeout), this.timeout = null, this.addMarker(null), this.isOpen && (this.$removeCloseEvents(), this.getElement().style.display = "none", this.isOpen = !1, t.removePopup(this)));
          }, s.prototype.$registerCloseEvents = function() {
            window.addEventListener("keydown", this.hide, !0), window.addEventListener("wheel", this.hide, !0), window.addEventListener("mousedown", this.hide, !0);
          }, s.prototype.$removeCloseEvents = function() {
            window.removeEventListener("keydown", this.hide, !0), window.removeEventListener("wheel", this.hide, !0), window.removeEventListener("mousedown", this.hide, !0);
          }, s.prototype.onMouseOut = function(l) {
            this.timeout && (clearTimeout(this.timeout), this.timeout = null), this.lastEvent = null, this.isOpen && (!l.relatedTarget || this.getElement().contains(l.relatedTarget) || l && l.currentTarget.contains(l.relatedTarget) || l.relatedTarget.classList.contains("ace_content") || this.hide());
          }, s;
        }(r)
      );
      R.HoverTooltip = e;
    }), ace.define("ace/mouse/default_gutter_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/tooltip", "ace/config"], function(w, R, N) {
      var b = this && this.__extends || /* @__PURE__ */ function() {
        var o = function(s, l) {
          return o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, C) {
            u.__proto__ = C;
          } || function(u, C) {
            for (var p in C) Object.prototype.hasOwnProperty.call(C, p) && (u[p] = C[p]);
          }, o(s, l);
        };
        return function(s, l) {
          if (typeof l != "function" && l !== null)
            throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
          o(s, l);
          function u() {
            this.constructor = s;
          }
          s.prototype = l === null ? Object.create(l) : (u.prototype = l.prototype, new u());
        };
      }(), S = this && this.__values || function(o) {
        var s = typeof Symbol == "function" && Symbol.iterator, l = s && o[s], u = 0;
        if (l) return l.call(o);
        if (o && typeof o.length == "number") return {
          next: function() {
            return o && u >= o.length && (o = void 0), { value: o && o[u++], done: !o };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }, A = w("../lib/dom"), a = w("../lib/event"), c = w("../tooltip").Tooltip, n = w("../config").nls, r = 5, i = 3;
      R.GUTTER_TOOLTIP_LEFT_OFFSET = r, R.GUTTER_TOOLTIP_TOP_OFFSET = i;
      function t(o) {
        var s = o.editor, l = s.renderer.$gutterLayer, u = new e(s, !0);
        o.editor.setDefaultHandler("guttermousedown", function(M) {
          if (!(!s.isFocused() || M.getButton() != 0)) {
            var W = l.getRegion(M);
            if (W != "foldWidgets") {
              var k = M.getDocumentPosition().row, Z = s.session.selection;
              if (M.getShiftKey())
                Z.selectTo(k, 0);
              else {
                if (M.domEvent.detail == 2)
                  return s.selectAll(), M.preventDefault();
                o.$clickSelection = s.selection.getLineRange(k);
              }
              return o.setState("selectByLines"), o.captureMouse(M), M.preventDefault();
            }
          }
        });
        var C, p;
        function f() {
          var M = p.getDocumentPosition().row, W = s.session.getLength();
          if (M == W) {
            var k = s.renderer.pixelToScreenCoordinates(0, p.y).row, Z = p.$pos;
            if (k > s.session.documentToScreenRow(Z.row, Z.column))
              return g();
          }
          if (u.showTooltip(M), !!u.isOpen)
            if (s.on("mousewheel", g), s.on("changeSession", g), window.addEventListener("keydown", g, !0), o.$tooltipFollowsMouse)
              v(p);
            else {
              var y = p.getGutterRow(), I = l.$lines.get(y);
              if (I) {
                var d = I.element.querySelector(".ace_gutter_annotation"), h = d.getBoundingClientRect(), m = u.getElement().style;
                m.left = h.right - r + "px", m.top = h.bottom - i + "px";
              } else
                v(p);
            }
        }
        function g(M) {
          M && M.type === "keydown" && (M.ctrlKey || M.metaKey) || M && M.type === "mouseout" && (!M.relatedTarget || u.getElement().contains(M.relatedTarget)) || (C && (C = clearTimeout(C)), u.isOpen && (u.hideTooltip(), s.off("mousewheel", g), s.off("changeSession", g), window.removeEventListener("keydown", g, !0)));
        }
        function v(M) {
          u.setPosition(M.x, M.y);
        }
        o.editor.setDefaultHandler("guttermousemove", function(M) {
          var W = M.domEvent.target || M.domEvent.srcElement;
          if (A.hasCssClass(W, "ace_fold-widget") || A.hasCssClass(W, "ace_custom-widget"))
            return g();
          u.isOpen && o.$tooltipFollowsMouse && v(M), p = M, !C && (C = setTimeout(function() {
            C = null, p && !o.isMousePressed && f();
          }, 50));
        }), a.addListener(s.renderer.$gutter, "mouseout", function(M) {
          p = null, u.isOpen && (C = setTimeout(function() {
            C = null, g(M);
          }, 50));
        }, s);
      }
      R.GutterHandler = t;
      var e = (
        /** @class */
        function(o) {
          b(s, o);
          function s(l, u) {
            u === void 0 && (u = !1);
            var C = o.call(this, l.container) || this;
            C.editor = l, C.visibleTooltipRow;
            var p = C.getElement();
            return p.setAttribute("role", "tooltip"), p.style.pointerEvents = "auto", u && (C.onMouseOut = C.onMouseOut.bind(C), p.addEventListener("mouseout", C.onMouseOut)), C;
          }
          return s.prototype.onMouseOut = function(l) {
            this.isOpen && (!l.relatedTarget || this.getElement().contains(l.relatedTarget) || l && l.currentTarget.contains(l.relatedTarget) || this.hideTooltip());
          }, s.prototype.setPosition = function(l, u) {
            var C = window.innerWidth || document.documentElement.clientWidth, p = window.innerHeight || document.documentElement.clientHeight, f = this.getWidth(), g = this.getHeight();
            l += 15, u += 15, l + f > C && (l -= l + f - C), u + g > p && (u -= 20 + g), c.prototype.setPosition.call(this, l, u);
          }, Object.defineProperty(s, "annotationLabels", {
            get: function() {
              return {
                error: {
                  singular: n("gutter-tooltip.aria-label.error.singular", "error"),
                  plural: n("gutter-tooltip.aria-label.error.plural", "errors")
                },
                security: {
                  singular: n("gutter-tooltip.aria-label.security.singular", "security finding"),
                  plural: n("gutter-tooltip.aria-label.security.plural", "security findings")
                },
                warning: {
                  singular: n("gutter-tooltip.aria-label.warning.singular", "warning"),
                  plural: n("gutter-tooltip.aria-label.warning.plural", "warnings")
                },
                info: {
                  singular: n("gutter-tooltip.aria-label.info.singular", "information message"),
                  plural: n("gutter-tooltip.aria-label.info.plural", "information messages")
                },
                hint: {
                  singular: n("gutter-tooltip.aria-label.hint.singular", "suggestion"),
                  plural: n("gutter-tooltip.aria-label.hint.plural", "suggestions")
                }
              };
            },
            enumerable: !1,
            configurable: !0
          }), s.prototype.showTooltip = function(l) {
            var u, C = this.editor.renderer.$gutterLayer, p = C.$annotations[l], f;
            p ? f = {
              displayText: Array.from(p.displayText),
              type: Array.from(p.type)
            } : f = { displayText: [], type: [] };
            var g = C.session.getFoldLine(l);
            if (g && C.$showFoldedAnnotations) {
              for (var v = { error: [], security: [], warning: [], info: [], hint: [] }, M = { error: 1, security: 2, warning: 3, info: 4, hint: 5 }, W, k = l + 1; k <= g.end.row; k++)
                if (C.$annotations[k])
                  for (var Z = 0; Z < C.$annotations[k].text.length; Z++) {
                    var y = C.$annotations[k].type[Z];
                    v[y].push(C.$annotations[k].text[Z]), (!W || M[y] < M[W]) && (W = y);
                  }
              if (["error", "security", "warning"].includes(W)) {
                var I = "".concat(s.annotationsToSummaryString(v), " in folded code.");
                f.displayText.push(I), f.type.push(W + "_fold");
              }
            }
            if (f.displayText.length === 0)
              return this.hideTooltip();
            for (var d = { error: [], security: [], warning: [], info: [], hint: [] }, h = C.$useSvgGutterIcons ? "ace_icon_svg" : "ace_icon", k = 0; k < f.displayText.length; k++) {
              var m = A.createElement("span"), x = A.createElement("span");
              (u = x.classList).add.apply(u, ["ace_".concat(f.type[k]), h]), x.setAttribute("aria-label", "".concat(s.annotationLabels[f.type[k].replace("_fold", "")].singular)), x.setAttribute("role", "img"), x.appendChild(A.createTextNode(" ")), m.appendChild(x), m.appendChild(A.createTextNode(f.displayText[k])), m.appendChild(A.createElement("br")), d[f.type[k].replace("_fold", "")].push(m);
            }
            var $ = this.getElement();
            A.removeChildren($), d.error.forEach(function(L) {
              return $.appendChild(L);
            }), d.security.forEach(function(L) {
              return $.appendChild(L);
            }), d.warning.forEach(function(L) {
              return $.appendChild(L);
            }), d.info.forEach(function(L) {
              return $.appendChild(L);
            }), d.hint.forEach(function(L) {
              return $.appendChild(L);
            }), $.setAttribute("aria-live", "polite"), this.isOpen || (this.setTheme(this.editor.renderer.theme), this.setClassName("ace_gutter-tooltip")), this.show(), this.visibleTooltipRow = l, this.editor._signal("showGutterTooltip", this);
          }, s.prototype.hideTooltip = function() {
            this.isOpen && (this.$element.removeAttribute("aria-live"), this.hide(), this.visibleTooltipRow = void 0, this.editor._signal("hideGutterTooltip", this));
          }, s.annotationsToSummaryString = function(l) {
            var u, C, p = [], f = ["error", "security", "warning", "info", "hint"];
            try {
              for (var g = S(f), v = g.next(); !v.done; v = g.next()) {
                var M = v.value;
                if (l[M].length) {
                  var W = l[M].length === 1 ? s.annotationLabels[M].singular : s.annotationLabels[M].plural;
                  p.push("".concat(l[M].length, " ").concat(W));
                }
              }
            } catch (k) {
              u = { error: k };
            } finally {
              try {
                v && !v.done && (C = g.return) && C.call(g);
              } finally {
                if (u) throw u.error;
              }
            }
            return p.join(", ");
          }, s;
        }(c)
      );
      R.GutterTooltip = e;
    }), ace.define("ace/mouse/mouse_event", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function(w, R, N) {
      var b = w("../lib/event"), S = w("../lib/useragent"), A = (
        /** @class */
        function() {
          function a(c, n) {
            this.speed, this.wheelX, this.wheelY, this.domEvent = c, this.editor = n, this.x = this.clientX = c.clientX, this.y = this.clientY = c.clientY, this.$pos = null, this.$inSelection = null, this.propagationStopped = !1, this.defaultPrevented = !1;
          }
          return a.prototype.stopPropagation = function() {
            b.stopPropagation(this.domEvent), this.propagationStopped = !0;
          }, a.prototype.preventDefault = function() {
            b.preventDefault(this.domEvent), this.defaultPrevented = !0;
          }, a.prototype.stop = function() {
            this.stopPropagation(), this.preventDefault();
          }, a.prototype.getDocumentPosition = function() {
            return this.$pos ? this.$pos : (this.$pos = this.editor.renderer.screenToTextCoordinates(this.clientX, this.clientY), this.$pos);
          }, a.prototype.getGutterRow = function() {
            var c = this.getDocumentPosition().row, n = this.editor.session.documentToScreenRow(c, 0), r = this.editor.session.documentToScreenRow(this.editor.renderer.$gutterLayer.$lines.get(0).row, 0);
            return n - r;
          }, a.prototype.inSelection = function() {
            if (this.$inSelection !== null)
              return this.$inSelection;
            var c = this.editor, n = c.getSelectionRange();
            if (n.isEmpty())
              this.$inSelection = !1;
            else {
              var r = this.getDocumentPosition();
              this.$inSelection = n.contains(r.row, r.column);
            }
            return this.$inSelection;
          }, a.prototype.getButton = function() {
            return b.getButton(this.domEvent);
          }, a.prototype.getShiftKey = function() {
            return this.domEvent.shiftKey;
          }, a.prototype.getAccelKey = function() {
            return S.isMac ? this.domEvent.metaKey : this.domEvent.ctrlKey;
          }, a;
        }()
      );
      R.MouseEvent = A;
    }), ace.define("ace/mouse/dragdrop_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/lib/useragent"], function(w, R, N) {
      var b = w("../lib/dom"), S = w("../lib/event"), A = w("../lib/useragent"), a = 200, c = 200, n = 5;
      function r(t) {
        var e = t.editor, o = b.createElement("div");
        o.style.cssText = "top:-100px;position:absolute;z-index:2147483647;opacity:0.5", o.textContent = " ";
        var s = ["dragWait", "dragWaitEnd", "startDrag", "dragReadyEnd", "onMouseDrag"];
        s.forEach(function(_) {
          t[_] = this[_];
        }, this), e.on("mousedown", this.onMouseDown.bind(t));
        var l = e.container, u, C, p, f, g, v, M = 0, W, k, Z, y, I;
        this.onDragStart = function(_) {
          if (this.cancelDrag || !l.draggable) {
            var O = this;
            return setTimeout(function() {
              O.startSelect(), O.captureMouse(_);
            }, 0), _.preventDefault();
          }
          g = e.getSelectionRange();
          var E = _.dataTransfer;
          E.effectAllowed = e.getReadOnly() ? "copy" : "copyMove", e.container.appendChild(o), E.setDragImage && E.setDragImage(o, 0, 0), setTimeout(function() {
            e.container.removeChild(o);
          }), E.clearData(), E.setData("Text", e.session.getTextRange()), k = !0, this.setState("drag");
        }, this.onDragEnd = function(_) {
          if (l.draggable = !1, k = !1, this.setState(null), !e.getReadOnly()) {
            var O = _.dataTransfer.dropEffect;
            !W && O == "move" && e.session.remove(e.getSelectionRange()), e.$resetCursorStyle();
          }
          this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle("");
        }, this.onDragEnter = function(_) {
          if (!(e.getReadOnly() || !T(_.dataTransfer)))
            return C = _.clientX, p = _.clientY, u || x(), M++, _.dataTransfer.dropEffect = W = V(_), S.preventDefault(_);
        }, this.onDragOver = function(_) {
          if (!(e.getReadOnly() || !T(_.dataTransfer)))
            return C = _.clientX, p = _.clientY, u || (x(), M++), L !== null && (L = null), _.dataTransfer.dropEffect = W = V(_), S.preventDefault(_);
        }, this.onDragLeave = function(_) {
          if (M--, M <= 0 && u)
            return $(), W = null, S.preventDefault(_);
        }, this.onDrop = function(_) {
          if (v) {
            var O = _.dataTransfer;
            if (k)
              switch (W) {
                case "move":
                  g.contains(v.row, v.column) ? g = {
                    start: v,
                    end: v
                  } : g = e.moveText(g, v);
                  break;
                case "copy":
                  g = e.moveText(g, v, !0);
                  break;
              }
            else {
              var E = O.getData("Text");
              g = {
                start: v,
                end: e.session.insert(v, E)
              }, e.focus(), W = null;
            }
            return $(), S.preventDefault(_);
          }
        }, S.addListener(l, "dragstart", this.onDragStart.bind(t), e), S.addListener(l, "dragend", this.onDragEnd.bind(t), e), S.addListener(l, "dragenter", this.onDragEnter.bind(t), e), S.addListener(l, "dragover", this.onDragOver.bind(t), e), S.addListener(l, "dragleave", this.onDragLeave.bind(t), e), S.addListener(l, "drop", this.onDrop.bind(t), e);
        function d(_, O) {
          var E = Date.now(), F = !O || _.row != O.row, D = !O || _.column != O.column;
          if (!y || F || D)
            e.moveCursorToPosition(_), y = E, I = { x: C, y: p };
          else {
            var Y = i(I.x, I.y, C, p);
            Y > n ? y = null : E - y >= c && (e.renderer.scrollCursorIntoView(), y = null);
          }
        }
        function h(_, O) {
          var E = Date.now(), F = e.renderer.layerConfig.lineHeight, D = e.renderer.layerConfig.characterWidth, Y = e.renderer.scroller.getBoundingClientRect(), P = {
            x: {
              left: C - Y.left,
              right: Y.right - C
            },
            y: {
              top: p - Y.top,
              bottom: Y.bottom - p
            }
          }, X = Math.min(P.x.left, P.x.right), Q = Math.min(P.y.top, P.y.bottom), ie = { row: _.row, column: _.column };
          X / D <= 2 && (ie.column += P.x.left < P.x.right ? -3 : 2), Q / F <= 1 && (ie.row += P.y.top < P.y.bottom ? -1 : 1);
          var ge = _.row != ie.row, Ce = _.column != ie.column, ue = !O || _.row != O.row;
          ge || Ce && !ue ? Z ? E - Z >= a && e.renderer.scrollCursorIntoView(ie) : Z = E : Z = null;
        }
        function m() {
          var _ = v;
          v = e.renderer.screenToTextCoordinates(C, p), d(v, _), h(v, _);
        }
        function x() {
          g = e.selection.toOrientedRange(), u = e.session.addMarker(g, "ace_selection", e.getSelectionStyle()), e.clearSelection(), e.isFocused() && e.renderer.$cursorLayer.setBlinking(!1), clearInterval(f), m(), f = setInterval(m, 20), M = 0, S.addListener(document, "mousemove", B);
        }
        function $() {
          clearInterval(f), e.session.removeMarker(u), u = null, e.selection.fromOrientedRange(g), e.isFocused() && !k && e.$resetCursorStyle(), g = null, v = null, M = 0, Z = null, y = null, S.removeListener(document, "mousemove", B);
        }
        var L = null;
        function B() {
          L == null && (L = setTimeout(function() {
            L != null && u && $();
          }, 20));
        }
        function T(_) {
          var O = _.types;
          return !O || Array.prototype.some.call(O, function(E) {
            return E == "text/plain" || E == "Text";
          });
        }
        function V(_) {
          var O = ["copy", "copymove", "all", "uninitialized"], E = ["move", "copymove", "linkmove", "all", "uninitialized"], F = A.isMac ? _.altKey : _.ctrlKey, D = "uninitialized";
          try {
            D = _.dataTransfer.effectAllowed.toLowerCase();
          } catch {
          }
          var Y = "none";
          return F && O.indexOf(D) >= 0 ? Y = "copy" : E.indexOf(D) >= 0 ? Y = "move" : O.indexOf(D) >= 0 && (Y = "copy"), Y;
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
          var o = A.isWin ? "default" : "move";
          t.renderer.setCursorStyle(o), this.setState("dragReady");
        }, this.onMouseDrag = function(t) {
          var e = this.editor.container;
          if (A.isIE && this.state == "dragReady") {
            var o = i(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
            o > 3 && e.dragDrop();
          }
          if (this.state === "dragWait") {
            var o = i(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
            o > 0 && (e.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()));
          }
        }, this.onMouseDown = function(t) {
          if (this.$dragEnabled) {
            this.mousedownEvent = t;
            var e = this.editor, o = t.inSelection(), s = t.getButton(), l = t.domEvent.detail || 1;
            if (l === 1 && s === 0 && o) {
              if (t.editor.inMultiSelectMode && (t.getAccelKey() || t.getShiftKey()))
                return;
              this.mousedownEvent.time = Date.now();
              var u = t.domEvent.target || t.domEvent.srcElement;
              if ("unselectable" in u && (u.unselectable = "on"), e.getDragDelay()) {
                if (A.isWebKit) {
                  this.cancelDrag = !0;
                  var C = e.container;
                  C.draggable = !0;
                }
                this.setState("dragWait");
              } else
                this.startDrag();
              this.captureMouse(t, this.onMouseDrag.bind(this)), t.defaultPrevented = !0;
            }
          }
        };
      }).call(r.prototype);
      function i(t, e, o, s) {
        return Math.sqrt(Math.pow(o - t, 2) + Math.pow(s - e, 2));
      }
      R.DragdropHandler = r;
    }), ace.define("ace/mouse/touch_handler", ["require", "exports", "module", "ace/mouse/mouse_event", "ace/lib/event", "ace/lib/dom"], function(w, R, N) {
      var b = w("./mouse_event").MouseEvent, S = w("../lib/event"), A = w("../lib/dom");
      R.addTouchListeners = function(a, c) {
        var n = "scroll", r, i, t, e, o, s, l = 0, u, C = 0, p = 0, f = 0, g, v;
        function M() {
          var d = window.navigator && window.navigator.clipboard, h = !1, m = function() {
            var L = c.getCopyText(), B = c.session.getUndoManager().hasUndo();
            v.replaceChild(A.buildDom(h ? [
              "span",
              !L && x("selectall") && ["span", { class: "ace_mobile-button", action: "selectall" }, "Select All"],
              L && x("copy") && ["span", { class: "ace_mobile-button", action: "copy" }, "Copy"],
              L && x("cut") && ["span", { class: "ace_mobile-button", action: "cut" }, "Cut"],
              d && x("paste") && ["span", { class: "ace_mobile-button", action: "paste" }, "Paste"],
              B && x("undo") && ["span", { class: "ace_mobile-button", action: "undo" }, "Undo"],
              x("find") && ["span", { class: "ace_mobile-button", action: "find" }, "Find"],
              x("openCommandPalette") && ["span", { class: "ace_mobile-button", action: "openCommandPalette" }, "Palette"]
            ] : ["span"]), v.firstChild);
          }, x = function(L) {
            return c.commands.canExecute(L, c);
          }, $ = function(L) {
            var B = L.target.getAttribute("action");
            if (B == "more" || !h)
              return h = !h, m();
            B == "paste" ? d.readText().then(function(T) {
              c.execCommand(B, T);
            }) : B && ((B == "cut" || B == "copy") && (d ? d.writeText(c.getCopyText()) : document.execCommand("copy")), c.execCommand(B)), v.firstChild.style.display = "none", h = !1, B != "openCommandPalette" && c.focus();
          };
          v = A.buildDom([
            "div",
            {
              class: "ace_mobile-menu",
              ontouchstart: function(L) {
                n = "menu", L.stopPropagation(), L.preventDefault(), c.textInput.focus();
              },
              ontouchend: function(L) {
                L.stopPropagation(), L.preventDefault(), $(L);
              },
              onclick: $
            },
            ["span"],
            ["span", { class: "ace_mobile-button", action: "more" }, "..."]
          ], c.container);
        }
        function W() {
          if (!c.getOption("enableMobileMenu")) {
            v && k();
            return;
          }
          v || M();
          var d = c.selection.cursor, h = c.renderer.textToScreenCoordinates(d.row, d.column), m = c.renderer.textToScreenCoordinates(0, 0).pageX, x = c.renderer.scrollLeft, $ = c.container.getBoundingClientRect();
          v.style.top = h.pageY - $.top - 3 + "px", h.pageX - $.left < $.width - 70 ? (v.style.left = "", v.style.right = "10px") : (v.style.right = "", v.style.left = m + x - $.left + "px"), v.style.display = "", v.firstChild.style.display = "none", c.on("input", k);
        }
        function k(d) {
          v && (v.style.display = "none"), c.off("input", k);
        }
        function Z() {
          o = null, clearTimeout(o);
          var d = c.selection.getRange(), h = d.contains(u.row, u.column);
          (d.isEmpty() || !h) && (c.selection.moveToPosition(u), c.selection.selectWord()), n = "wait", W();
        }
        function y() {
          o = null, clearTimeout(o), c.selection.moveToPosition(u);
          var d = C >= 2 ? c.selection.getLineRange(u.row) : c.session.getBracketRange(u);
          d && !d.isEmpty() ? c.selection.setRange(d) : c.selection.selectWord(), n = "wait";
        }
        S.addListener(a, "contextmenu", function(d) {
          if (g) {
            var h = c.textInput.getElement();
            h.focus();
          }
        }, c), S.addListener(a, "touchstart", function(d) {
          var h = d.touches;
          if (o || h.length > 1) {
            clearTimeout(o), o = null, t = -1, n = "zoom";
            return;
          }
          g = c.$mouseHandler.isMousePressed = !0;
          var m = c.renderer.layerConfig.lineHeight, x = c.renderer.layerConfig.lineHeight, $ = d.timeStamp;
          e = $;
          var L = h[0], B = L.clientX, T = L.clientY;
          Math.abs(r - B) + Math.abs(i - T) > m && (t = -1), r = d.clientX = B, i = d.clientY = T, p = f = 0;
          var V = new b(d, c);
          if (u = V.getDocumentPosition(), $ - t < 500 && h.length == 1 && !l)
            C++, d.preventDefault(), d.button = 0, y();
          else {
            C = 0;
            var _ = c.selection.cursor, O = c.selection.isEmpty() ? _ : c.selection.anchor, E = c.renderer.$cursorLayer.getPixelPosition(_, !0), F = c.renderer.$cursorLayer.getPixelPosition(O, !0), D = c.renderer.scroller.getBoundingClientRect(), Y = c.renderer.layerConfig.offset, P = c.renderer.scrollLeft, X = function(ge, Ce) {
              return ge = ge / x, Ce = Ce / m - 0.75, ge * ge + Ce * Ce;
            };
            if (d.clientX < D.left) {
              n = "zoom";
              return;
            }
            var Q = X(d.clientX - D.left - E.left + P, d.clientY - D.top - E.top + Y), ie = X(d.clientX - D.left - F.left + P, d.clientY - D.top - F.top + Y);
            Q < 3.5 && ie < 3.5 && (n = Q > ie ? "cursor" : "anchor"), ie < 3.5 ? n = "anchor" : Q < 3.5 ? n = "cursor" : n = "scroll", o = setTimeout(Z, 450);
          }
          t = $;
        }, c), S.addListener(a, "touchend", function(d) {
          g = c.$mouseHandler.isMousePressed = !1, s && clearInterval(s), n == "zoom" ? (n = "", l = 0) : o ? (c.selection.moveToPosition(u), l = 0, W()) : n == "scroll" ? (I(), k()) : W(), clearTimeout(o), o = null;
        }, c), S.addListener(a, "touchmove", function(d) {
          o && (clearTimeout(o), o = null);
          var h = d.touches;
          if (!(h.length > 1 || n == "zoom")) {
            var m = h[0], x = r - m.clientX, $ = i - m.clientY;
            if (n == "wait")
              if (x * x + $ * $ > 4)
                n = "cursor";
              else
                return d.preventDefault();
            r = m.clientX, i = m.clientY, d.clientX = m.clientX, d.clientY = m.clientY;
            var L = d.timeStamp, B = L - e;
            if (e = L, n == "scroll") {
              var T = new b(d, c);
              T.speed = 1, T.wheelX = x, T.wheelY = $, 10 * Math.abs(x) < Math.abs($) && (x = 0), 10 * Math.abs($) < Math.abs(x) && ($ = 0), B != 0 && (p = x / B, f = $ / B), c._emit("mousewheel", T), T.propagationStopped || (p = f = 0);
            } else {
              var V = new b(d, c), _ = V.getDocumentPosition();
              n == "cursor" ? c.selection.moveCursorToPosition(_) : n == "anchor" && c.selection.setSelectionAnchor(_.row, _.column), c.renderer.scrollCursorIntoView(_), d.preventDefault();
            }
          }
        }, c);
        function I() {
          l += 60, s = setInterval(function() {
            l-- <= 0 && (clearInterval(s), s = null), Math.abs(p) < 0.01 && (p = 0), Math.abs(f) < 0.01 && (f = 0), l < 20 && (p = 0.9 * p), l < 20 && (f = 0.9 * f);
            var d = c.session.getScrollTop();
            c.renderer.scrollBy(10 * p, 10 * f), d == c.session.getScrollTop() && (l = 0);
          }, 10);
        }
      };
    }), ace.define("ace/mouse/mouse_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/mouse/default_handlers", "ace/mouse/default_gutter_handler", "ace/mouse/mouse_event", "ace/mouse/dragdrop_handler", "ace/mouse/touch_handler", "ace/config"], function(w, R, N) {
      var b = w("../lib/event"), S = w("../lib/useragent"), A = w("./default_handlers").DefaultHandlers, a = w("./default_gutter_handler").GutterHandler, c = w("./mouse_event").MouseEvent, n = w("./dragdrop_handler").DragdropHandler, r = w("./touch_handler").addTouchListeners, i = w("../config"), t = (
        /** @class */
        function() {
          function e(o) {
            this.$dragDelay, this.$dragEnabled, this.$mouseMoved, this.mouseEvent, this.$focusTimeout;
            var s = this;
            this.editor = o, new A(this), new a(this), new n(this);
            var l = function(p) {
              var f = !document.hasFocus || !document.hasFocus() || !o.isFocused() && document.activeElement == (o.textInput && o.textInput.getElement());
              f && window.focus(), o.focus(), setTimeout(function() {
                o.isFocused() || o.focus();
              });
            }, u = o.renderer.getMouseEventTarget();
            b.addListener(u, "click", this.onMouseEvent.bind(this, "click"), o), b.addListener(u, "mousemove", this.onMouseMove.bind(this, "mousemove"), o), b.addMultiMouseDownListener([
              u,
              o.renderer.scrollBarV && o.renderer.scrollBarV.inner,
              o.renderer.scrollBarH && o.renderer.scrollBarH.inner,
              o.textInput && o.textInput.getElement()
            ].filter(Boolean), [400, 300, 250], this, "onMouseEvent", o), b.addMouseWheelListener(o.container, this.onMouseWheel.bind(this, "mousewheel"), o), r(o.container, o);
            var C = o.renderer.$gutter;
            b.addListener(C, "mousedown", this.onMouseEvent.bind(this, "guttermousedown"), o), b.addListener(C, "click", this.onMouseEvent.bind(this, "gutterclick"), o), b.addListener(C, "dblclick", this.onMouseEvent.bind(this, "gutterdblclick"), o), b.addListener(C, "mousemove", this.onMouseEvent.bind(this, "guttermousemove"), o), b.addListener(u, "mousedown", l, o), b.addListener(C, "mousedown", l, o), S.isIE && o.renderer.scrollBarV && (b.addListener(o.renderer.scrollBarV.element, "mousedown", l, o), b.addListener(o.renderer.scrollBarH.element, "mousedown", l, o)), o.on(
              "mousemove",
              function(p) {
                if (!(s.state || s.$dragDelay || !s.$dragEnabled)) {
                  var f = o.renderer.screenToTextCoordinates(p.x, p.y), g = o.session.selection.getRange(), v = o.renderer;
                  !g.isEmpty() && g.insideStart(f.row, f.column) ? v.setCursorStyle("default") : v.setCursorStyle("");
                }
              },
              //@ts-expect-error TODO: seems mistyping - should be boolean
              o
            );
          }
          return e.prototype.onMouseEvent = function(o, s) {
            this.editor.session && this.editor._emit(o, new c(s, this.editor));
          }, e.prototype.onMouseMove = function(o, s) {
            var l = this.editor._eventRegistry && this.editor._eventRegistry.mousemove;
            !l || !l.length || this.editor._emit(o, new c(s, this.editor));
          }, e.prototype.onMouseWheel = function(o, s) {
            var l = new c(s, this.editor);
            l.speed = this.$scrollSpeed * 2, l.wheelX = s.wheelX, l.wheelY = s.wheelY, this.editor._emit(o, l);
          }, e.prototype.setState = function(o) {
            this.state = o;
          }, e.prototype.captureMouse = function(o, s) {
            this.x = o.x, this.y = o.y, this.isMousePressed = !0;
            var l = this.editor, u = this.editor.renderer;
            u.$isMousePressed = !0;
            var C = this, p = function(W) {
              if (W) {
                if (S.isWebKit && !W.which && C.releaseMouse)
                  return C.releaseMouse();
                C.x = W.clientX, C.y = W.clientY, s && s(W), C.mouseEvent = new c(W, C.editor), C.$mouseMoved = !0;
              }
            }, f = function(W) {
              l.off("beforeEndOperation", v), clearInterval(M), l.session && g(), C[C.state + "End"] && C[C.state + "End"](W), C.state = "", C.isMousePressed = u.$isMousePressed = !1, u.$keepTextAreaAtCursor && u.$moveTextAreaToCursor(), C.$onCaptureMouseMove = C.releaseMouse = null, W && C.onMouseEvent("mouseup", W), l.endOperation();
            }, g = function() {
              C[C.state] && C[C.state](), C.$mouseMoved = !1;
            };
            if (S.isOldIE && o.domEvent.type == "dblclick")
              return setTimeout(function() {
                f(o);
              });
            var v = function(W) {
              C.releaseMouse && l.curOp.command.name && l.curOp.selectionChanged && (C[C.state + "End"] && C[C.state + "End"](), C.state = "", C.releaseMouse());
            };
            l.on("beforeEndOperation", v), l.startOperation({ command: { name: "mouse" } }), C.$onCaptureMouseMove = p, C.releaseMouse = b.capture(this.editor.container, p, f);
            var M = setInterval(g, 20);
          }, e.prototype.cancelContextMenu = function() {
            var o = (function(s) {
              s && s.domEvent && s.domEvent.type != "contextmenu" || (this.editor.off("nativecontextmenu", o), s && s.domEvent && b.stopEvent(s.domEvent));
            }).bind(this);
            setTimeout(o, 10), this.editor.on("nativecontextmenu", o);
          }, e.prototype.destroy = function() {
            this.releaseMouse && this.releaseMouse();
          }, e;
        }()
      );
      t.prototype.releaseMouse = null, i.defineOptions(t.prototype, "mouseHandler", {
        scrollSpeed: { initialValue: 2 },
        dragDelay: { initialValue: S.isMac ? 150 : 0 },
        dragEnabled: { initialValue: !0 },
        focusTimeout: { initialValue: 0 },
        tooltipFollowsMouse: { initialValue: !0 }
      }), R.MouseHandler = t;
    }), ace.define("ace/mouse/fold_handler", ["require", "exports", "module", "ace/lib/dom"], function(w, R, N) {
      var b = w("../lib/dom"), S = (
        /** @class */
        /* @__PURE__ */ function() {
          function A(a) {
            a.on("click", function(c) {
              var n = c.getDocumentPosition(), r = a.session, i = r.getFoldAt(n.row, n.column, 1);
              i && (c.getAccelKey() ? r.removeFold(i) : r.expandFold(i), c.stop());
              var t = c.domEvent && c.domEvent.target;
              t && b.hasCssClass(t, "ace_inline_button") && b.hasCssClass(t, "ace_toggle_wrap") && (r.setOption("wrap", !r.getUseWrapMode()), a.renderer.scrollCursorIntoView());
            }), a.on("gutterclick", function(c) {
              var n = a.renderer.$gutterLayer.getRegion(c);
              if (n == "foldWidgets") {
                var r = c.getDocumentPosition().row, i = a.session;
                i.foldWidgets && i.foldWidgets[r] && a.session.onFoldWidgetClick(r, c), a.isFocused() || a.focus(), c.stop();
              }
            }), a.on("gutterdblclick", function(c) {
              var n = a.renderer.$gutterLayer.getRegion(c);
              if (n == "foldWidgets") {
                var r = c.getDocumentPosition().row, i = a.session, t = i.getParentFoldRangeData(r, !0), e = t.range || t.firstRange;
                if (e) {
                  r = e.start.row;
                  var o = i.getFoldAt(r, i.getLine(r).length, 1);
                  o ? i.removeFold(o) : (i.addFold("...", e), a.renderer.scrollCursorIntoView({ row: e.start.row, column: 0 }));
                }
                c.stop();
              }
            });
          }
          return A;
        }()
      );
      R.FoldHandler = S;
    }), ace.define("ace/keyboard/keybinding", ["require", "exports", "module", "ace/lib/keys", "ace/lib/event"], function(w, R, N) {
      var b = w("../lib/keys"), S = w("../lib/event"), A = (
        /** @class */
        function() {
          function a(c) {
            this.$editor = c, this.$data = { editor: c }, this.$handlers = [], this.setDefaultHandler(c.commands);
          }
          return a.prototype.setDefaultHandler = function(c) {
            this.removeKeyboardHandler(this.$defaultHandler), this.$defaultHandler = c, this.addKeyboardHandler(c, 0);
          }, a.prototype.setKeyboardHandler = function(c) {
            var n = this.$handlers;
            if (n[n.length - 1] != c) {
              for (; n[n.length - 1] && n[n.length - 1] != this.$defaultHandler; )
                this.removeKeyboardHandler(n[n.length - 1]);
              this.addKeyboardHandler(c, 1);
            }
          }, a.prototype.addKeyboardHandler = function(c, n) {
            if (c) {
              typeof c == "function" && !c.handleKeyboard && (c.handleKeyboard = c);
              var r = this.$handlers.indexOf(c);
              r != -1 && this.$handlers.splice(r, 1), n == null ? this.$handlers.push(c) : this.$handlers.splice(n, 0, c), r == -1 && c.attach && c.attach(this.$editor);
            }
          }, a.prototype.removeKeyboardHandler = function(c) {
            var n = this.$handlers.indexOf(c);
            return n == -1 ? !1 : (this.$handlers.splice(n, 1), c.detach && c.detach(this.$editor), !0);
          }, a.prototype.getKeyboardHandler = function() {
            return this.$handlers[this.$handlers.length - 1];
          }, a.prototype.getStatusText = function() {
            var c = this.$data, n = c.editor;
            return this.$handlers.map(function(r) {
              return r.getStatusText && r.getStatusText(n, c) || "";
            }).filter(Boolean).join(" ");
          }, a.prototype.$callKeyboardHandlers = function(c, n, r, i) {
            for (var t, e = !1, o = this.$editor.commands, s = this.$handlers.length; s-- && (t = this.$handlers[s].handleKeyboard(
              this.$data,
              c,
              n,
              r,
              i
            ), !(!(!t || !t.command) && (t.command == "null" ? e = !0 : e = o.exec(t.command, this.$editor, t.args, i), e && i && c != -1 && t.passEvent != !0 && t.command.passEvent != !0 && S.stopEvent(i), e))); )
              ;
            return !e && c == -1 && (t = { command: "insertstring" }, e = o.exec("insertstring", this.$editor, n)), e && this.$editor._signal && this.$editor._signal("keyboardActivity", t), e;
          }, a.prototype.onCommandKey = function(c, n, r) {
            var i = b.keyCodeToString(r);
            return this.$callKeyboardHandlers(n, i, r, c);
          }, a.prototype.onTextInput = function(c) {
            return this.$callKeyboardHandlers(-1, c);
          }, a;
        }()
      );
      R.KeyBinding = A;
    }), ace.define("ace/lib/bidiutil", ["require", "exports", "module"], function(w, R, N) {
      var b = 0, S = 0, A = !1, a = !1, c = !1, n = [
        [0, 3, 0, 1, 0, 0, 0],
        [0, 3, 0, 1, 2, 2, 0],
        [0, 3, 0, 17, 2, 0, 1],
        [0, 3, 5, 5, 4, 1, 0],
        [0, 3, 21, 21, 4, 0, 1],
        [0, 3, 5, 5, 4, 2, 0]
      ], r = [
        [2, 0, 1, 1, 0, 1, 0],
        [2, 0, 1, 1, 0, 2, 0],
        [2, 0, 2, 1, 3, 2, 0],
        [2, 0, 2, 33, 3, 1, 1]
      ], i = 0, t = 1, e = 0, o = 1, s = 2, l = 3, u = 4, C = 5, p = 6, f = 7, g = 8, v = 9, M = 10, W = 11, k = 12, Z = 13, y = 14, I = 15, d = 16, h = 17, m = 18, x = [
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        m,
        p,
        C,
        p,
        g,
        C,
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
        C,
        C,
        C,
        p,
        g,
        u,
        u,
        W,
        W,
        W,
        u,
        u,
        u,
        u,
        u,
        M,
        v,
        M,
        v,
        v,
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
        v,
        u,
        u,
        u,
        u,
        u,
        u,
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
        u,
        u,
        u,
        u,
        u,
        u,
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
        u,
        u,
        u,
        u,
        m,
        m,
        m,
        m,
        m,
        m,
        C,
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
        v,
        u,
        W,
        W,
        W,
        W,
        u,
        u,
        u,
        u,
        e,
        u,
        u,
        m,
        u,
        u,
        W,
        W,
        s,
        s,
        u,
        e,
        u,
        u,
        u,
        s,
        e,
        u,
        u,
        u,
        u,
        u
      ], $ = [
        g,
        g,
        g,
        g,
        g,
        g,
        g,
        g,
        g,
        g,
        g,
        m,
        m,
        m,
        e,
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
        g,
        C,
        Z,
        y,
        I,
        d,
        h,
        v,
        W,
        W,
        W,
        W,
        W,
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
        v,
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
        g
      ];
      function L(_, O, E, F) {
        var D = b ? r : n, Y = null, P = null, X = null, Q = 0, ie = null, ge = null, Ce = -1, ue = null, be = null, ke = [];
        if (!F)
          for (ue = 0, F = []; ue < E; ue++)
            F[ue] = V(_[ue]);
        for (S = b, A = !1, a = !1, c = !1, be = 0; be < E; be++) {
          if (Y = Q, ke[be] = P = T(_, F, ke, be), Q = D[Y][P], ie = Q & 240, Q &= 15, O[be] = X = D[Q][5], ie > 0)
            if (ie == 16) {
              for (ue = Ce; ue < be; ue++)
                O[ue] = 1;
              Ce = -1;
            } else
              Ce = -1;
          if (ge = D[Q][6], ge)
            Ce == -1 && (Ce = be);
          else if (Ce > -1) {
            for (ue = Ce; ue < be; ue++)
              O[ue] = X;
            Ce = -1;
          }
          F[be] == C && (O[be] = 0), S |= X;
        }
        if (c) {
          for (ue = 0; ue < E; ue++)
            if (F[ue] == p) {
              O[ue] = b;
              for (var we = ue - 1; we >= 0 && F[we] == g; we--)
                O[we] = b;
            }
        }
      }
      function B(_, O, E) {
        if (!(S < _)) {
          if (_ == 1 && b == t && !a) {
            E.reverse();
            return;
          }
          for (var F = E.length, D = 0, Y, P, X, Q; D < F; ) {
            if (O[D] >= _) {
              for (Y = D + 1; Y < F && O[Y] >= _; )
                Y++;
              for (P = D, X = Y - 1; P < X; P++, X--)
                Q = E[P], E[P] = E[X], E[X] = Q;
              D = Y;
            }
            D++;
          }
        }
      }
      function T(_, O, E, F) {
        var D = O[F], Y, P, X, Q;
        switch (D) {
          case e:
          case o:
            A = !1;
          case u:
          case l:
            return D;
          case s:
            return A ? l : s;
          case f:
            return A = !0, o;
          case g:
            return u;
          case v:
            return F < 1 || F + 1 >= O.length || (Y = E[F - 1]) != s && Y != l || (P = O[F + 1]) != s && P != l ? u : (A && (P = l), P == Y ? P : u);
          case M:
            return Y = F > 0 ? E[F - 1] : C, Y == s && F + 1 < O.length && O[F + 1] == s ? s : u;
          case W:
            if (F > 0 && E[F - 1] == s)
              return s;
            if (A)
              return u;
            for (Q = F + 1, X = O.length; Q < X && O[Q] == W; )
              Q++;
            return Q < X && O[Q] == s ? s : u;
          case k:
            for (X = O.length, Q = F + 1; Q < X && O[Q] == k; )
              Q++;
            if (Q < X) {
              var ie = _[F], ge = ie >= 1425 && ie <= 2303 || ie == 64286;
              if (Y = O[Q], ge && (Y == o || Y == f))
                return o;
            }
            return F < 1 || (Y = O[F - 1]) == C ? u : E[F - 1];
          case C:
            return A = !1, a = !0, b;
          case p:
            return c = !0, u;
          case Z:
          case y:
          case d:
          case h:
          case I:
            A = !1;
          case m:
            return u;
        }
      }
      function V(_) {
        var O = _.charCodeAt(0), E = O >> 8;
        return E == 0 ? O > 191 ? e : x[O] : E == 5 ? /[\u0591-\u05f4]/.test(_) ? o : e : E == 6 ? /[\u0610-\u061a\u064b-\u065f\u06d6-\u06e4\u06e7-\u06ed]/.test(_) ? k : /[\u0660-\u0669\u066b-\u066c]/.test(_) ? l : O == 1642 ? W : /[\u06f0-\u06f9]/.test(_) ? s : f : E == 32 && O <= 8287 ? $[O & 255] : E == 254 && O >= 65136 ? f : u;
      }
      R.L = e, R.R = o, R.EN = s, R.ON_R = 3, R.AN = 4, R.R_H = 5, R.B = 6, R.RLE = 7, R.DOT = "·", R.doBidiReorder = function(_, O, E) {
        if (_.length < 2)
          return {};
        var F = _.split(""), D = new Array(F.length), Y = new Array(F.length), P = [];
        b = E ? t : i, L(F, P, F.length, O);
        for (var X = 0; X < D.length; D[X] = X, X++)
          ;
        B(2, P, D), B(1, P, D);
        for (var X = 0; X < D.length - 1; X++)
          O[X] === l ? P[X] = R.AN : P[X] === o && (O[X] > f && O[X] < Z || O[X] === u || O[X] === m) ? P[X] = R.ON_R : X > 0 && F[X - 1] === "ل" && /\u0622|\u0623|\u0625|\u0627/.test(F[X]) && (P[X - 1] = P[X] = R.R_H, X++);
        F[F.length - 1] === R.DOT && (P[F.length - 1] = R.B), F[0] === "‫" && (P[0] = R.RLE);
        for (var X = 0; X < D.length; X++)
          Y[X] = P[D[X]];
        return { logicalFromVisual: D, bidiLevels: Y };
      }, R.hasBidiCharacters = function(_, O) {
        for (var E = !1, F = 0; F < _.length; F++)
          O[F] = V(_.charAt(F)), !E && (O[F] == o || O[F] == f || O[F] == l) && (E = !0);
        return E;
      }, R.getVisualFromLogicalIdx = function(_, O) {
        for (var E = 0; E < O.logicalFromVisual.length; E++)
          if (O.logicalFromVisual[E] == _)
            return E;
        return 0;
      };
    }), ace.define("ace/bidihandler", ["require", "exports", "module", "ace/lib/bidiutil", "ace/lib/lang"], function(w, R, N) {
      var b = w("./lib/bidiutil"), S = w("./lib/lang"), A = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\u202B]/, a = (
        /** @class */
        function() {
          function c(n) {
            this.session = n, this.bidiMap = {}, this.currentRow = null, this.bidiUtil = b, this.charWidths = [], this.EOL = "¬", this.showInvisibles = !0, this.isRtlDir = !1, this.$isRtl = !1, this.line = "", this.wrapIndent = 0, this.EOF = "¶", this.RLE = "‫", this.contentWidth = 0, this.fontMetrics = null, this.rtlLineOffset = 0, this.wrapOffset = 0, this.isMoveLeftOperation = !1, this.seenBidi = A.test(n.getValue());
          }
          return c.prototype.isBidiRow = function(n, r, i) {
            return this.seenBidi ? (n !== this.currentRow && (this.currentRow = n, this.updateRowLine(r, i), this.updateBidiMap()), this.bidiMap.bidiLevels) : !1;
          }, c.prototype.onChange = function(n) {
            this.seenBidi ? this.currentRow = null : n.action == "insert" && A.test(n.lines.join(`
`)) && (this.seenBidi = !0, this.currentRow = null);
          }, c.prototype.getDocumentRow = function() {
            var n = 0, r = this.session.$screenRowCache;
            if (r.length) {
              var i = this.session.$getRowCacheIndex(r, this.currentRow);
              i >= 0 && (n = this.session.$docRowCache[i]);
            }
            return n;
          }, c.prototype.getSplitIndex = function() {
            var n = 0, r = this.session.$screenRowCache;
            if (r.length)
              for (var i, t = this.session.$getRowCacheIndex(r, this.currentRow); this.currentRow - n > 0 && (i = this.session.$getRowCacheIndex(r, this.currentRow - n - 1), i === t); )
                t = i, n++;
            else
              n = this.currentRow;
            return n;
          }, c.prototype.updateRowLine = function(n, r) {
            n === void 0 && (n = this.getDocumentRow());
            var i = n === this.session.getLength() - 1, t = i ? this.EOF : this.EOL;
            if (this.wrapIndent = 0, this.line = this.session.getLine(n), this.isRtlDir = this.$isRtl || this.line.charAt(0) === this.RLE, this.session.$useWrapMode) {
              var e = this.session.$wrapData[n];
              e && (r === void 0 && (r = this.getSplitIndex()), r > 0 && e.length ? (this.wrapIndent = e.indent, this.wrapOffset = this.wrapIndent * this.charWidths[b.L], this.line = r < e.length ? this.line.substring(e[r - 1], e[r]) : this.line.substring(e[e.length - 1])) : this.line = this.line.substring(0, e[r]), r == e.length && (this.line += this.showInvisibles ? t : b.DOT));
            } else
              this.line += this.showInvisibles ? t : b.DOT;
            var o = this.session, s = 0, l;
            this.line = this.line.replace(/\t|[\u1100-\u2029, \u202F-\uFFE6]/g, function(u, C) {
              return u === "	" || o.isFullWidth(u.charCodeAt(0)) ? (l = u === "	" ? o.getScreenTabSize(C + s) : 2, s += l - 1, S.stringRepeat(b.DOT, l)) : u;
            }), this.isRtlDir && (this.fontMetrics.$main.textContent = this.line.charAt(this.line.length - 1) == b.DOT ? this.line.substr(0, this.line.length - 1) : this.line, this.rtlLineOffset = this.contentWidth - this.fontMetrics.$main.getBoundingClientRect().width);
          }, c.prototype.updateBidiMap = function() {
            var n = [];
            b.hasBidiCharacters(this.line, n) || this.isRtlDir ? this.bidiMap = b.doBidiReorder(this.line, n, this.isRtlDir) : this.bidiMap = {};
          }, c.prototype.markAsDirty = function() {
            this.currentRow = null;
          }, c.prototype.updateCharacterWidths = function(n) {
            if (this.characterWidth !== n.$characterSize.width) {
              this.fontMetrics = n;
              var r = this.characterWidth = n.$characterSize.width, i = n.$measureCharWidth("ה");
              this.charWidths[b.L] = this.charWidths[b.EN] = this.charWidths[b.ON_R] = r, this.charWidths[b.R] = this.charWidths[b.AN] = i, this.charWidths[b.R_H] = i * 0.45, this.charWidths[b.B] = this.charWidths[b.RLE] = 0, this.currentRow = null;
            }
          }, c.prototype.setShowInvisibles = function(n) {
            this.showInvisibles = n, this.currentRow = null;
          }, c.prototype.setEolChar = function(n) {
            this.EOL = n;
          }, c.prototype.setContentWidth = function(n) {
            this.contentWidth = n;
          }, c.prototype.isRtlLine = function(n) {
            return this.$isRtl ? !0 : n != null ? this.session.getLine(n).charAt(0) == this.RLE : this.isRtlDir;
          }, c.prototype.setRtlDirection = function(n, r) {
            for (var i = n.getCursorPosition(), t = n.selection.getSelectionAnchor().row; t <= i.row; t++)
              !r && n.session.getLine(t).charAt(0) === n.session.$bidiHandler.RLE ? n.session.doc.removeInLine(t, 0, 1) : r && n.session.getLine(t).charAt(0) !== n.session.$bidiHandler.RLE && n.session.doc.insert({ column: 0, row: t }, n.session.$bidiHandler.RLE);
          }, c.prototype.getPosLeft = function(n) {
            n -= this.wrapIndent;
            var r = this.line.charAt(0) === this.RLE ? 1 : 0, i = n > r ? this.session.getOverwrite() ? n : n - 1 : r, t = b.getVisualFromLogicalIdx(i, this.bidiMap), e = this.bidiMap.bidiLevels, o = 0;
            !this.session.getOverwrite() && n <= r && e[t] % 2 !== 0 && t++;
            for (var s = 0; s < t; s++)
              o += this.charWidths[e[s]];
            return !this.session.getOverwrite() && n > r && e[t] % 2 === 0 && (o += this.charWidths[e[t]]), this.wrapIndent && (o += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset), this.isRtlDir && (o += this.rtlLineOffset), o;
          }, c.prototype.getSelections = function(n, r) {
            var i = this.bidiMap, t = i.bidiLevels, e, o = [], s = 0, l = Math.min(n, r) - this.wrapIndent, u = Math.max(n, r) - this.wrapIndent, C = !1, p = !1, f = 0;
            this.wrapIndent && (s += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset);
            for (var g, v = 0; v < t.length; v++)
              g = i.logicalFromVisual[v], e = t[v], C = g >= l && g < u, C && !p ? f = s : !C && p && o.push({ left: f, width: s - f }), s += this.charWidths[e], p = C;
            if (C && v === t.length && o.push({ left: f, width: s - f }), this.isRtlDir)
              for (var M = 0; M < o.length; M++)
                o[M].left += this.rtlLineOffset;
            return o;
          }, c.prototype.offsetToCol = function(i) {
            this.isRtlDir && (i -= this.rtlLineOffset);
            var r = 0, i = Math.max(i, 0), t = 0, e = 0, o = this.bidiMap.bidiLevels, s = this.charWidths[o[e]];
            for (this.wrapIndent && (i -= this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset); i > t + s / 2; ) {
              if (t += s, e === o.length - 1) {
                s = 0;
                break;
              }
              s = this.charWidths[o[++e]];
            }
            return e > 0 && o[e - 1] % 2 !== 0 && o[e] % 2 === 0 ? (i < t && e--, r = this.bidiMap.logicalFromVisual[e]) : e > 0 && o[e - 1] % 2 === 0 && o[e] % 2 !== 0 ? r = 1 + (i > t ? this.bidiMap.logicalFromVisual[e] : this.bidiMap.logicalFromVisual[e - 1]) : this.isRtlDir && e === o.length - 1 && s === 0 && o[e - 1] % 2 === 0 || !this.isRtlDir && e === 0 && o[e] % 2 !== 0 ? r = 1 + this.bidiMap.logicalFromVisual[e] : (e > 0 && o[e - 1] % 2 !== 0 && s !== 0 && e--, r = this.bidiMap.logicalFromVisual[e]), r === 0 && this.isRtlDir && r++, r + this.wrapIndent;
          }, c;
        }()
      );
      R.BidiHandler = a;
    }), ace.define("ace/selection", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/range"], function(w, R, N) {
      var b = w("./lib/oop"), S = w("./lib/lang"), A = w("./lib/event_emitter").EventEmitter, a = w("./range").Range, c = (
        /** @class */
        function() {
          function n(r) {
            this.session = r, this.doc = r.getDocument(), this.clearSelection(), this.cursor = this.lead = this.doc.createAnchor(0, 0), this.anchor = this.doc.createAnchor(0, 0), this.$silent = !1;
            var i = this;
            this.cursor.on("change", function(t) {
              i.$cursorChanged = !0, i.$silent || i._emit("changeCursor"), !i.$isEmpty && !i.$silent && i._emit("changeSelection"), !i.$keepDesiredColumnOnChange && t.old.column != t.value.column && (i.$desiredColumn = null);
            }), this.anchor.on("change", function() {
              i.$anchorChanged = !0, !i.$isEmpty && !i.$silent && i._emit("changeSelection");
            });
          }
          return n.prototype.isEmpty = function() {
            return this.$isEmpty || this.anchor.row == this.lead.row && this.anchor.column == this.lead.column;
          }, n.prototype.isMultiLine = function() {
            return !this.$isEmpty && this.anchor.row != this.cursor.row;
          }, n.prototype.getCursor = function() {
            return this.lead.getPosition();
          }, n.prototype.setAnchor = function(r, i) {
            this.$isEmpty = !1, this.anchor.setPosition(r, i);
          }, n.prototype.getAnchor = function() {
            return this.$isEmpty ? this.getSelectionLead() : this.anchor.getPosition();
          }, n.prototype.getSelectionLead = function() {
            return this.lead.getPosition();
          }, n.prototype.isBackwards = function() {
            var r = this.anchor, i = this.lead;
            return r.row > i.row || r.row == i.row && r.column > i.column;
          }, n.prototype.getRange = function() {
            var r = this.anchor, i = this.lead;
            return this.$isEmpty ? a.fromPoints(i, i) : this.isBackwards() ? a.fromPoints(i, r) : a.fromPoints(r, i);
          }, n.prototype.clearSelection = function() {
            this.$isEmpty || (this.$isEmpty = !0, this._emit("changeSelection"));
          }, n.prototype.selectAll = function() {
            this.$setSelection(0, 0, Number.MAX_VALUE, Number.MAX_VALUE);
          }, n.prototype.setRange = function(r, i) {
            var t = i ? r.end : r.start, e = i ? r.start : r.end;
            this.$setSelection(t.row, t.column, e.row, e.column);
          }, n.prototype.$setSelection = function(r, i, t, e) {
            if (!this.$silent) {
              var o = this.$isEmpty, s = this.inMultiSelectMode;
              this.$silent = !0, this.$cursorChanged = this.$anchorChanged = !1, this.anchor.setPosition(r, i), this.cursor.setPosition(t, e), this.$isEmpty = !a.comparePoints(this.anchor, this.cursor), this.$silent = !1, this.$cursorChanged && this._emit("changeCursor"), (this.$cursorChanged || this.$anchorChanged || o != this.$isEmpty || s) && this._emit("changeSelection");
            }
          }, n.prototype.$moveSelection = function(r) {
            var i = this.lead;
            this.$isEmpty && this.setSelectionAnchor(i.row, i.column), r.call(this);
          }, n.prototype.selectTo = function(r, i) {
            this.$moveSelection(function() {
              this.moveCursorTo(r, i);
            });
          }, n.prototype.selectToPosition = function(r) {
            this.$moveSelection(function() {
              this.moveCursorToPosition(r);
            });
          }, n.prototype.moveTo = function(r, i) {
            this.clearSelection(), this.moveCursorTo(r, i);
          }, n.prototype.moveToPosition = function(r) {
            this.clearSelection(), this.moveCursorToPosition(r);
          }, n.prototype.selectUp = function() {
            this.$moveSelection(this.moveCursorUp);
          }, n.prototype.selectDown = function() {
            this.$moveSelection(this.moveCursorDown);
          }, n.prototype.selectRight = function() {
            this.$moveSelection(this.moveCursorRight);
          }, n.prototype.selectLeft = function() {
            this.$moveSelection(this.moveCursorLeft);
          }, n.prototype.selectLineStart = function() {
            this.$moveSelection(this.moveCursorLineStart);
          }, n.prototype.selectLineEnd = function() {
            this.$moveSelection(this.moveCursorLineEnd);
          }, n.prototype.selectFileEnd = function() {
            this.$moveSelection(this.moveCursorFileEnd);
          }, n.prototype.selectFileStart = function() {
            this.$moveSelection(this.moveCursorFileStart);
          }, n.prototype.selectWordRight = function() {
            this.$moveSelection(this.moveCursorWordRight);
          }, n.prototype.selectWordLeft = function() {
            this.$moveSelection(this.moveCursorWordLeft);
          }, n.prototype.getWordRange = function(r, i) {
            if (typeof i > "u") {
              var t = r || this.lead;
              r = t.row, i = t.column;
            }
            return this.session.getWordRange(r, i);
          }, n.prototype.selectWord = function() {
            this.setSelectionRange(this.getWordRange());
          }, n.prototype.selectAWord = function() {
            var r = this.getCursor(), i = this.session.getAWordRange(r.row, r.column);
            this.setSelectionRange(i);
          }, n.prototype.getLineRange = function(r, i) {
            var t = typeof r == "number" ? r : this.lead.row, e, o = this.session.getFoldLine(t);
            return o ? (t = o.start.row, e = o.end.row) : e = t, i === !0 ? new a(t, 0, e, this.session.getLine(e).length) : new a(t, 0, e + 1, 0);
          }, n.prototype.selectLine = function() {
            this.setSelectionRange(this.getLineRange());
          }, n.prototype.moveCursorUp = function() {
            this.moveCursorBy(-1, 0);
          }, n.prototype.moveCursorDown = function() {
            this.moveCursorBy(1, 0);
          }, n.prototype.wouldMoveIntoSoftTab = function(r, i, t) {
            var e = r.column, o = r.column + i;
            return t < 0 && (e = r.column - i, o = r.column), this.session.isTabStop(r) && this.doc.getLine(r.row).slice(e, o).split(" ").length - 1 == i;
          }, n.prototype.moveCursorLeft = function() {
            var r = this.lead.getPosition(), i;
            if (i = this.session.getFoldAt(r.row, r.column, -1))
              this.moveCursorTo(i.start.row, i.start.column);
            else if (r.column === 0)
              r.row > 0 && this.moveCursorTo(r.row - 1, this.doc.getLine(r.row - 1).length);
            else {
              var t = this.session.getTabSize();
              this.wouldMoveIntoSoftTab(r, t, -1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, -t) : this.moveCursorBy(0, -1);
            }
          }, n.prototype.moveCursorRight = function() {
            var r = this.lead.getPosition(), i;
            if (i = this.session.getFoldAt(r.row, r.column, 1))
              this.moveCursorTo(i.end.row, i.end.column);
            else if (this.lead.column == this.doc.getLine(this.lead.row).length)
              this.lead.row < this.doc.getLength() - 1 && this.moveCursorTo(this.lead.row + 1, 0);
            else {
              var t = this.session.getTabSize(), r = this.lead;
              this.wouldMoveIntoSoftTab(r, t, 1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, t) : this.moveCursorBy(0, 1);
            }
          }, n.prototype.moveCursorLineStart = function() {
            var r = this.lead.row, i = this.lead.column, t = this.session.documentToScreenRow(r, i), e = this.session.screenToDocumentPosition(t, 0), o = this.session.getDisplayLine(r, null, e.row, e.column), s = o.match(/^\s*/);
            s[0].length != i && !this.session.$useEmacsStyleLineStart && (e.column += s[0].length), this.moveCursorToPosition(e);
          }, n.prototype.moveCursorLineEnd = function() {
            var r = this.lead, i = this.session.getDocumentLastRowColumnPosition(r.row, r.column);
            if (this.lead.column == i.column) {
              var t = this.session.getLine(i.row);
              if (i.column == t.length) {
                var e = t.search(/\s+$/);
                e > 0 && (i.column = e);
              }
            }
            this.moveCursorTo(i.row, i.column);
          }, n.prototype.moveCursorFileEnd = function() {
            var r = this.doc.getLength() - 1, i = this.doc.getLine(r).length;
            this.moveCursorTo(r, i);
          }, n.prototype.moveCursorFileStart = function() {
            this.moveCursorTo(0, 0);
          }, n.prototype.moveCursorLongWordRight = function() {
            var r = this.lead.row, i = this.lead.column, t = this.doc.getLine(r), e = t.substring(i);
            this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0;
            var o = this.session.getFoldAt(r, i, 1);
            if (o) {
              this.moveCursorTo(o.end.row, o.end.column);
              return;
            }
            if (this.session.nonTokenRe.exec(e) && (i += this.session.nonTokenRe.lastIndex, this.session.nonTokenRe.lastIndex = 0, e = t.substring(i)), i >= t.length) {
              this.moveCursorTo(r, t.length), this.moveCursorRight(), r < this.doc.getLength() - 1 && this.moveCursorWordRight();
              return;
            }
            this.session.tokenRe.exec(e) && (i += this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(r, i);
          }, n.prototype.moveCursorLongWordLeft = function() {
            var r = this.lead.row, i = this.lead.column, t;
            if (t = this.session.getFoldAt(r, i, -1)) {
              this.moveCursorTo(t.start.row, t.start.column);
              return;
            }
            var e = this.session.getFoldStringAt(r, i, -1);
            e == null && (e = this.doc.getLine(r).substring(0, i));
            var o = S.stringReverse(e);
            if (this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0, this.session.nonTokenRe.exec(o) && (i -= this.session.nonTokenRe.lastIndex, o = o.slice(this.session.nonTokenRe.lastIndex), this.session.nonTokenRe.lastIndex = 0), i <= 0) {
              this.moveCursorTo(r, 0), this.moveCursorLeft(), r > 0 && this.moveCursorWordLeft();
              return;
            }
            this.session.tokenRe.exec(o) && (i -= this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(r, i);
          }, n.prototype.$shortWordEndIndex = function(r) {
            var i = 0, t, e = /\s/, o = this.session.tokenRe;
            if (o.lastIndex = 0, this.session.tokenRe.exec(r))
              i = this.session.tokenRe.lastIndex;
            else {
              for (; (t = r[i]) && e.test(t); )
                i++;
              if (i < 1) {
                for (o.lastIndex = 0; (t = r[i]) && !o.test(t); )
                  if (o.lastIndex = 0, i++, e.test(t))
                    if (i > 2) {
                      i--;
                      break;
                    } else {
                      for (; (t = r[i]) && e.test(t); )
                        i++;
                      if (i > 2)
                        break;
                    }
              }
            }
            return o.lastIndex = 0, i;
          }, n.prototype.moveCursorShortWordRight = function() {
            var r = this.lead.row, i = this.lead.column, t = this.doc.getLine(r), e = t.substring(i), o = this.session.getFoldAt(r, i, 1);
            if (o)
              return this.moveCursorTo(o.end.row, o.end.column);
            if (i == t.length) {
              var s = this.doc.getLength();
              do
                r++, e = this.doc.getLine(r);
              while (r < s && /^\s*$/.test(e));
              /^\s+/.test(e) || (e = ""), i = 0;
            }
            var l = this.$shortWordEndIndex(e);
            this.moveCursorTo(r, i + l);
          }, n.prototype.moveCursorShortWordLeft = function() {
            var r = this.lead.row, i = this.lead.column, t;
            if (t = this.session.getFoldAt(r, i, -1))
              return this.moveCursorTo(t.start.row, t.start.column);
            var e = this.session.getLine(r).substring(0, i);
            if (i === 0) {
              do
                r--, e = this.doc.getLine(r);
              while (r > 0 && /^\s*$/.test(e));
              i = e.length, /\s+$/.test(e) || (e = "");
            }
            var o = S.stringReverse(e), s = this.$shortWordEndIndex(o);
            return this.moveCursorTo(r, i - s);
          }, n.prototype.moveCursorWordRight = function() {
            this.session.$selectLongWords ? this.moveCursorLongWordRight() : this.moveCursorShortWordRight();
          }, n.prototype.moveCursorWordLeft = function() {
            this.session.$selectLongWords ? this.moveCursorLongWordLeft() : this.moveCursorShortWordLeft();
          }, n.prototype.moveCursorBy = function(r, i) {
            var t = this.session.documentToScreenPosition(this.lead.row, this.lead.column), e;
            if (i === 0 && (r !== 0 && (this.session.$bidiHandler.isBidiRow(t.row, this.lead.row) ? (e = this.session.$bidiHandler.getPosLeft(t.column), t.column = Math.round(e / this.session.$bidiHandler.charWidths[0])) : e = t.column * this.session.$bidiHandler.charWidths[0]), this.$desiredColumn ? t.column = this.$desiredColumn : this.$desiredColumn = t.column), r != 0 && this.session.lineWidgets && this.session.lineWidgets[this.lead.row]) {
              var o = this.session.lineWidgets[this.lead.row];
              r < 0 ? r -= o.rowsAbove || 0 : r > 0 && (r += o.rowCount - (o.rowsAbove || 0));
            }
            var s = this.session.screenToDocumentPosition(t.row + r, t.column, e);
            r !== 0 && i === 0 && s.row === this.lead.row && (s.column, this.lead.column), this.moveCursorTo(s.row, s.column + i, i === 0);
          }, n.prototype.moveCursorToPosition = function(r) {
            this.moveCursorTo(r.row, r.column);
          }, n.prototype.moveCursorTo = function(r, i, t) {
            var e = this.session.getFoldAt(r, i, 1);
            e && (r = e.start.row, i = e.start.column), this.$keepDesiredColumnOnChange = !0;
            var o = this.session.getLine(r);
            /[\uDC00-\uDFFF]/.test(o.charAt(i)) && o.charAt(i - 1) && (this.lead.row == r && this.lead.column == i + 1 ? i = i - 1 : i = i + 1), this.lead.setPosition(r, i), this.$keepDesiredColumnOnChange = !1, t || (this.$desiredColumn = null);
          }, n.prototype.moveCursorToScreen = function(r, i, t) {
            var e = this.session.screenToDocumentPosition(r, i);
            this.moveCursorTo(e.row, e.column, t);
          }, n.prototype.detach = function() {
            this.lead.detach(), this.anchor.detach();
          }, n.prototype.fromOrientedRange = function(r) {
            this.setSelectionRange(r, r.cursor == r.start), this.$desiredColumn = r.desiredColumn || this.$desiredColumn;
          }, n.prototype.toOrientedRange = function(r) {
            var i = this.getRange();
            return r ? (r.start.column = i.start.column, r.start.row = i.start.row, r.end.column = i.end.column, r.end.row = i.end.row) : r = i, r.cursor = this.isBackwards() ? r.start : r.end, r.desiredColumn = this.$desiredColumn, r;
          }, n.prototype.getRangeOfMovements = function(r) {
            var i = this.getCursor();
            try {
              r(this);
              var t = this.getCursor();
              return a.fromPoints(i, t);
            } catch {
              return a.fromPoints(i, i);
            } finally {
              this.moveCursorToPosition(i);
            }
          }, n.prototype.toJSON = function() {
            if (this.rangeCount)
              var r = this.ranges.map(function(i) {
                var t = i.clone();
                return t.isBackwards = i.cursor == i.start, t;
              });
            else {
              var r = this.getRange();
              r.isBackwards = this.isBackwards();
            }
            return r;
          }, n.prototype.fromJSON = function(r) {
            if (r.start == null)
              if (this.rangeList && r.length > 1) {
                this.toSingleRange(r[0]);
                for (var i = r.length; i--; ) {
                  var t = a.fromPoints(r[i].start, r[i].end);
                  r[i].isBackwards && (t.cursor = t.start), this.addRange(t, !0);
                }
                return;
              } else
                r = r[0];
            this.rangeList && this.toSingleRange(r), this.setSelectionRange(r, r.isBackwards);
          }, n.prototype.isEqual = function(r) {
            if ((r.length || this.rangeCount) && r.length != this.rangeCount)
              return !1;
            if (!r.length || !this.ranges)
              return this.getRange().isEqual(r);
            for (var i = this.ranges.length; i--; )
              if (!this.ranges[i].isEqual(r[i]))
                return !1;
            return !0;
          }, n;
        }()
      );
      c.prototype.setSelectionAnchor = c.prototype.setAnchor, c.prototype.getSelectionAnchor = c.prototype.getAnchor, c.prototype.setSelectionRange = c.prototype.setRange, b.implement(c.prototype, A), R.Selection = c;
    }), ace.define("ace/tokenizer", ["require", "exports", "module", "ace/lib/report_error"], function(w, R, N) {
      var b = w("./lib/report_error").reportError, S = 2e3, A = (
        /** @class */
        function() {
          function a(c) {
            this.splitRegex, this.states = c, this.regExps = {}, this.matchMappings = {};
            for (var n in this.states) {
              for (var r = this.states[n], i = [], t = 0, e = this.matchMappings[n] = { defaultToken: "text" }, o = "g", s = [], l = 0; l < r.length; l++) {
                var u = r[l];
                if (u.defaultToken && (e.defaultToken = u.defaultToken), u.caseInsensitive && o.indexOf("i") === -1 && (o += "i"), u.unicode && o.indexOf("u") === -1 && (o += "u"), u.regex != null) {
                  u.regex instanceof RegExp && (u.regex = u.regex.toString().slice(1, -1));
                  var C = u.regex, p = new RegExp("(?:(" + C + ")|(.))").exec("a").length - 2;
                  Array.isArray(u.token) ? u.token.length == 1 || p == 1 ? u.token = u.token[0] : p - 1 != u.token.length ? (this.reportError("number of classes and regexp groups doesn't match", {
                    rule: u,
                    groupCount: p - 1
                  }), u.token = u.token[0]) : (u.tokenArray = u.token, u.token = null, u.onMatch = this.$arrayTokens) : typeof u.token == "function" && !u.onMatch && (p > 1 ? u.onMatch = this.$applyToken : u.onMatch = u.token), p > 1 && (/\\\d/.test(u.regex) ? C = u.regex.replace(/\\([0-9]+)/g, function(f, g) {
                    return "\\" + (parseInt(g, 10) + t + 1);
                  }) : (p = 1, C = this.removeCapturingGroups(u.regex)), !u.splitRegex && typeof u.token != "string" && s.push(u)), e[t] = l, t += p, i.push(C), u.onMatch || (u.onMatch = null);
                }
              }
              i.length || (e[0] = 0, i.push("$")), s.forEach(function(f) {
                f.splitRegex = this.createSplitterRegexp(f.regex, o);
              }, this), this.regExps[n] = new RegExp("(" + i.join(")|(") + ")|($)", o);
            }
          }
          return a.prototype.$setMaxTokenCount = function(c) {
            S = c | 0;
          }, a.prototype.$applyToken = function(c) {
            var n = this.splitRegex.exec(c).slice(1), r = this.token.apply(this, n);
            if (typeof r == "string")
              return [{ type: r, value: c }];
            for (var i = [], t = 0, e = r.length; t < e; t++)
              n[t] && (i[i.length] = {
                type: r[t],
                value: n[t]
              });
            return i;
          }, a.prototype.$arrayTokens = function(c) {
            if (!c)
              return [];
            var n = this.splitRegex.exec(c);
            if (!n)
              return "text";
            for (var r = [], i = this.tokenArray, t = 0, e = i.length; t < e; t++)
              n[t + 1] && (r[r.length] = {
                type: i[t],
                value: n[t + 1]
              });
            return r;
          }, a.prototype.removeCapturingGroups = function(c) {
            var n = c.replace(/\\.|\[(?:\\.|[^\\\]])*|\(\?[:=!<]|(\()/g, function(r, i) {
              return i ? "(?:" : r;
            });
            return n;
          }, a.prototype.createSplitterRegexp = function(c, n) {
            if (c.indexOf("(?=") != -1) {
              var r = 0, i = !1, t = {};
              c.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, function(e, o, s, l, u, C) {
                return i ? i = u != "]" : u ? i = !0 : l ? (r == t.stack && (t.end = C + 1, t.stack = -1), r--) : s && (r++, s.length != 1 && (t.stack = r, t.start = C)), e;
              }), t.end != null && /^\)*$/.test(c.substr(t.end)) && (c = c.substring(0, t.start) + c.substr(t.end));
            }
            return c.charAt(0) != "^" && (c = "^" + c), c.charAt(c.length - 1) != "$" && (c += "$"), new RegExp(c, (n || "").replace("g", ""));
          }, a.prototype.getLineTokens = function(c, n) {
            if (n && typeof n != "string") {
              var r = n.slice(0);
              n = r[0], n === "#tmp" && (r.shift(), n = r.shift());
            } else
              var r = [];
            var i = (
              /**@type{string}*/
              n || "start"
            ), t = this.states[i];
            t || (i = "start", t = this.states[i]);
            var e = this.matchMappings[i], o = this.regExps[i];
            o.lastIndex = 0;
            for (var s, l = [], u = 0, C = 0, p = { type: null, value: "" }; s = o.exec(c); ) {
              var f = e.defaultToken, g = null, v = s[0], M = o.lastIndex;
              if (M - v.length > u) {
                var W = c.substring(u, M - v.length);
                p.type == f ? p.value += W : (p.type && l.push(p), p = { type: f, value: W });
              }
              for (var k = 0; k < s.length - 2; k++)
                if (s[k + 1] !== void 0) {
                  g = t[e[k]], g.onMatch ? f = g.onMatch(v, i, r, c) : f = g.token, g.next && (typeof g.next == "string" ? i = g.next : i = g.next(i, r), t = this.states[i], t || (this.reportError("state doesn't exist", i), i = "start", t = this.states[i]), e = this.matchMappings[i], u = M, o = this.regExps[i], o.lastIndex = M), g.consumeLineEnd && (u = M);
                  break;
                }
              if (v) {
                if (typeof f == "string")
                  (!g || g.merge !== !1) && p.type === f ? p.value += v : (p.type && l.push(p), p = { type: f, value: v });
                else if (f) {
                  p.type && l.push(p), p = { type: null, value: "" };
                  for (var k = 0; k < f.length; k++)
                    l.push(f[k]);
                }
              }
              if (u == c.length)
                break;
              if (u = M, C++ > S) {
                for (C > 2 * c.length && this.reportError("infinite loop with in ace tokenizer", {
                  startState: n,
                  line: c
                }); u < c.length; )
                  p.type && l.push(p), p = {
                    value: c.substring(u, u += 500),
                    type: "overflow"
                  };
                i = "start", r = [];
                break;
              }
            }
            return p.type && l.push(p), r.length > 1 && r[0] !== i && r.unshift("#tmp", i), {
              tokens: l,
              state: r.length ? r : i
            };
          }, a;
        }()
      );
      A.prototype.reportError = b, R.Tokenizer = A;
    }), ace.define("ace/mode/text_highlight_rules", ["require", "exports", "module", "ace/lib/deep_copy"], function(w, R, N) {
      var b = w("../lib/deep_copy").deepCopy, S;
      S = function() {
        this.$rules = {
          start: [{
            token: "empty_line",
            regex: "^$"
          }, {
            defaultToken: "text"
          }]
        };
      }, (function() {
        this.addRules = function(c, n) {
          if (!n) {
            for (var r in c)
              this.$rules[r] = c[r];
            return;
          }
          for (var r in c) {
            for (var i = c[r], t = 0; t < i.length; t++) {
              var e = i[t];
              (e.next || e.onMatch) && (typeof e.next == "string" && e.next.indexOf(n) !== 0 && (e.next = n + e.next), e.nextState && e.nextState.indexOf(n) !== 0 && (e.nextState = n + e.nextState));
            }
            this.$rules[n + r] = i;
          }
        }, this.getRules = function() {
          return this.$rules;
        }, this.embedRules = function(c, n, r, i, t) {
          var e = typeof c == "function" ? new c().getRules() : c;
          if (i)
            for (var o = 0; o < i.length; o++)
              i[o] = n + i[o];
          else {
            i = [];
            for (var s in e)
              i.push(n + s);
          }
          if (this.addRules(e, n), r)
            for (var l = Array.prototype[t ? "push" : "unshift"], o = 0; o < i.length; o++)
              l.apply(this.$rules[i[o]], b(r));
          this.$embeds || (this.$embeds = []), this.$embeds.push(n);
        }, this.getEmbeds = function() {
          return this.$embeds;
        };
        var A = function(c, n) {
          return (c != "start" || n.length) && n.unshift(this.nextState, c), this.nextState;
        }, a = function(c, n) {
          return n.shift(), n.shift() || "start";
        };
        this.normalizeRules = function() {
          var c = 0, n = this.$rules;
          function r(i) {
            var t = n[i];
            t.processed = !0;
            for (var e = 0; e < t.length; e++) {
              var o = t[e], s = null;
              Array.isArray(o) && (s = o, o = {}), !o.regex && o.start && (o.regex = o.start, o.next || (o.next = []), o.next.push({
                defaultToken: o.token
              }, {
                token: o.token + ".end",
                regex: o.end || o.start,
                next: "pop"
              }), o.token = o.token + ".start", o.push = !0);
              var l = o.next || o.push;
              if (l && Array.isArray(l)) {
                var u = o.stateName;
                u || (u = o.token, typeof u != "string" && (u = u[0] || ""), n[u] && (u += c++)), n[u] = l, o.next = u, r(u);
              } else l == "pop" && (o.next = a);
              if (o.push && (o.nextState = o.next || o.push, o.next = A, delete o.push), o.rules)
                for (var C in o.rules)
                  n[C] ? n[C].push && n[C].push.apply(n[C], o.rules[C]) : n[C] = o.rules[C];
              var p = typeof o == "string" ? o : o.include;
              if (p && (p === "$self" && (p = "start"), Array.isArray(p) ? s = p.map(function(g) {
                return n[g];
              }) : s = n[p]), s) {
                var f = [e, 1].concat(s);
                o.noEscape && (f = f.filter(function(g) {
                  return !g.next;
                })), t.splice.apply(t, f), e--;
              }
              o.keywordMap && (o.token = this.createKeywordMapper(o.keywordMap, o.defaultToken || "text", o.caseInsensitive), delete o.defaultToken);
            }
          }
          Object.keys(n).forEach(r, this);
        }, this.createKeywordMapper = function(c, n, r, i) {
          var t = /* @__PURE__ */ Object.create(null);
          return this.$keywordList = [], Object.keys(c).forEach(function(e) {
            for (var o = c[e], s = o.split(i || "|"), l = s.length; l--; ) {
              var u = s[l];
              this.$keywordList.push(u), r && (u = u.toLowerCase()), t[u] = e;
            }
          }, this), c = null, r ? function(e) {
            return t[e.toLowerCase()] || n;
          } : function(e) {
            return t[e] || n;
          };
        }, this.getKeywords = function() {
          return this.$keywords;
        };
      }).call(S.prototype), R.TextHighlightRules = S;
    }), ace.define("ace/mode/behaviour", ["require", "exports", "module"], function(w, R, N) {
      var b;
      b = function() {
        this.$behaviours = {};
      }, (function() {
        this.add = function(S, A, a) {
          switch (void 0) {
            case this.$behaviours:
              this.$behaviours = {};
            case this.$behaviours[S]:
              this.$behaviours[S] = {};
          }
          this.$behaviours[S][A] = a;
        }, this.addBehaviours = function(S) {
          for (var A in S)
            for (var a in S[A])
              this.add(A, a, S[A][a]);
        }, this.remove = function(S) {
          this.$behaviours && this.$behaviours[S] && delete this.$behaviours[S];
        }, this.inherit = function(S, A) {
          if (typeof S == "function")
            var a = new S().getBehaviours(A);
          else
            var a = S.getBehaviours(A);
          this.addBehaviours(a);
        }, this.getBehaviours = function(S) {
          if (S) {
            for (var A = {}, a = 0; a < S.length; a++)
              this.$behaviours[S[a]] && (A[S[a]] = this.$behaviours[S[a]]);
            return A;
          } else
            return this.$behaviours;
        };
      }).call(b.prototype), R.Behaviour = b;
    }), ace.define("ace/token_iterator", ["require", "exports", "module", "ace/range"], function(w, R, N) {
      var b = w("./range").Range, S = (
        /** @class */
        function() {
          function A(a, c, n) {
            this.$session = a, this.$row = c, this.$rowTokens = a.getTokens(c);
            var r = a.getTokenAt(c, n);
            this.$tokenIndex = r ? r.index : -1;
          }
          return A.prototype.stepBackward = function() {
            for (this.$tokenIndex -= 1; this.$tokenIndex < 0; ) {
              if (this.$row -= 1, this.$row < 0)
                return this.$row = 0, null;
              this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = this.$rowTokens.length - 1;
            }
            return this.$rowTokens[this.$tokenIndex];
          }, A.prototype.stepForward = function() {
            this.$tokenIndex += 1;
            for (var a; this.$tokenIndex >= this.$rowTokens.length; ) {
              if (this.$row += 1, a || (a = this.$session.getLength()), this.$row >= a)
                return this.$row = a - 1, null;
              this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = 0;
            }
            return this.$rowTokens[this.$tokenIndex];
          }, A.prototype.getCurrentToken = function() {
            return this.$rowTokens[this.$tokenIndex];
          }, A.prototype.getCurrentTokenRow = function() {
            return this.$row;
          }, A.prototype.getCurrentTokenColumn = function() {
            var a = this.$rowTokens, c = this.$tokenIndex, n = a[c].start;
            if (n !== void 0)
              return n;
            for (n = 0; c > 0; )
              c -= 1, n += a[c].value.length;
            return n;
          }, A.prototype.getCurrentTokenPosition = function() {
            return { row: this.$row, column: this.getCurrentTokenColumn() };
          }, A.prototype.getCurrentTokenRange = function() {
            var a = this.$rowTokens[this.$tokenIndex], c = this.getCurrentTokenColumn();
            return new b(this.$row, c, this.$row, c + a.value.length);
          }, A;
        }()
      );
      R.TokenIterator = S;
    }), ace.define("ace/mode/behaviour/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/token_iterator", "ace/lib/lang"], function(w, R, N) {
      var b = w("../../lib/oop"), S = w("../behaviour").Behaviour, A = w("../../token_iterator").TokenIterator, a = w("../../lib/lang"), c = ["text", "paren.rparen", "rparen", "paren", "punctuation.operator"], n = ["text", "paren.rparen", "rparen", "paren", "punctuation.operator", "comment"], r, i = {}, t = { '"': '"', "'": "'" }, e = function(l) {
        var u = -1;
        if (l.multiSelect && (u = l.selection.index, i.rangeCount != l.multiSelect.rangeCount && (i = { rangeCount: l.multiSelect.rangeCount })), i[u])
          return r = i[u];
        r = i[u] = {
          autoInsertedBrackets: 0,
          autoInsertedRow: -1,
          autoInsertedLineEnd: "",
          maybeInsertedBrackets: 0,
          maybeInsertedRow: -1,
          maybeInsertedLineStart: "",
          maybeInsertedLineEnd: ""
        };
      }, o = function(l, u, C, p) {
        var f = l.end.row - l.start.row;
        return {
          text: C + u + p,
          selection: [
            0,
            l.start.column + 1,
            f,
            l.end.column + (f ? 0 : 1)
          ]
        };
      }, s;
      s = function(l) {
        l = l || {}, this.add("braces", "insertion", function(u, C, p, f, g) {
          var v = p.getCursorPosition(), M = f.doc.getLine(v.row);
          if (g == "{") {
            e(p);
            var W = p.getSelectionRange(), k = f.doc.getTextRange(W), Z = f.getTokenAt(v.row, v.column);
            if (k !== "" && k !== "{" && p.getWrapBehavioursEnabled())
              return o(W, k, "{", "}");
            if (Z && /(?:string)\.quasi|\.xml/.test(Z.type)) {
              var y = [
                /tag\-(?:open|name)/,
                /attribute\-name/
              ];
              return y.some(function(L) {
                return L.test(Z.type);
              }) || /(string)\.quasi/.test(Z.type) && Z.value[v.column - Z.start - 1] !== "$" ? void 0 : (s.recordAutoInsert(p, f, "}"), {
                text: "{}",
                selection: [1, 1]
              });
            } else if (s.isSaneInsertion(p, f))
              return /[\]\}\)]/.test(M[v.column]) || p.inMultiSelectMode || l.braces ? (s.recordAutoInsert(p, f, "}"), {
                text: "{}",
                selection: [1, 1]
              }) : (s.recordMaybeInsert(p, f, "{"), {
                text: "{",
                selection: [1, 1]
              });
          } else if (g == "}") {
            e(p);
            var I = M.substring(v.column, v.column + 1);
            if (I == "}") {
              var d = f.$findOpeningBracket("}", { column: v.column + 1, row: v.row });
              if (d !== null && s.isAutoInsertedClosing(v, M, g))
                return s.popAutoInsertedClosing(), {
                  text: "",
                  selection: [1, 1]
                };
            }
          } else if (g == `
` || g == `\r
`) {
            e(p);
            var h = "";
            s.isMaybeInsertedClosing(v, M) && (h = a.stringRepeat("}", r.maybeInsertedBrackets), s.clearMaybeInsertedClosing());
            var I = M.substring(v.column, v.column + 1);
            if (I === "}") {
              var m = f.findMatchingBracket({ row: v.row, column: v.column + 1 }, "}");
              if (!m)
                return null;
              var x = this.$getIndent(f.getLine(m.row));
            } else if (h)
              var x = this.$getIndent(M);
            else {
              s.clearMaybeInsertedClosing();
              return;
            }
            var $ = x + f.getTabString();
            return {
              text: `
` + $ + `
` + x + h,
              selection: [1, $.length, 1, $.length]
            };
          } else
            s.clearMaybeInsertedClosing();
        }), this.add("braces", "deletion", function(u, C, p, f, g) {
          var v = f.doc.getTextRange(g);
          if (!g.isMultiLine() && v == "{") {
            e(p);
            var M = f.doc.getLine(g.start.row), W = M.substring(g.end.column, g.end.column + 1);
            if (W == "}")
              return g.end.column++, g;
            r.maybeInsertedBrackets--;
          }
        }), this.add("parens", "insertion", function(u, C, p, f, g) {
          if (g == "(") {
            e(p);
            var v = p.getSelectionRange(), M = f.doc.getTextRange(v);
            if (M !== "" && p.getWrapBehavioursEnabled())
              return o(v, M, "(", ")");
            if (s.isSaneInsertion(p, f))
              return s.recordAutoInsert(p, f, ")"), {
                text: "()",
                selection: [1, 1]
              };
          } else if (g == ")") {
            e(p);
            var W = p.getCursorPosition(), k = f.doc.getLine(W.row), Z = k.substring(W.column, W.column + 1);
            if (Z == ")") {
              var y = f.$findOpeningBracket(")", { column: W.column + 1, row: W.row });
              if (y !== null && s.isAutoInsertedClosing(W, k, g))
                return s.popAutoInsertedClosing(), {
                  text: "",
                  selection: [1, 1]
                };
            }
          }
        }), this.add("parens", "deletion", function(u, C, p, f, g) {
          var v = f.doc.getTextRange(g);
          if (!g.isMultiLine() && v == "(") {
            e(p);
            var M = f.doc.getLine(g.start.row), W = M.substring(g.start.column + 1, g.start.column + 2);
            if (W == ")")
              return g.end.column++, g;
          }
        }), this.add("brackets", "insertion", function(u, C, p, f, g) {
          if (g == "[") {
            e(p);
            var v = p.getSelectionRange(), M = f.doc.getTextRange(v);
            if (M !== "" && p.getWrapBehavioursEnabled())
              return o(v, M, "[", "]");
            if (s.isSaneInsertion(p, f))
              return s.recordAutoInsert(p, f, "]"), {
                text: "[]",
                selection: [1, 1]
              };
          } else if (g == "]") {
            e(p);
            var W = p.getCursorPosition(), k = f.doc.getLine(W.row), Z = k.substring(W.column, W.column + 1);
            if (Z == "]") {
              var y = f.$findOpeningBracket("]", { column: W.column + 1, row: W.row });
              if (y !== null && s.isAutoInsertedClosing(W, k, g))
                return s.popAutoInsertedClosing(), {
                  text: "",
                  selection: [1, 1]
                };
            }
          }
        }), this.add("brackets", "deletion", function(u, C, p, f, g) {
          var v = f.doc.getTextRange(g);
          if (!g.isMultiLine() && v == "[") {
            e(p);
            var M = f.doc.getLine(g.start.row), W = M.substring(g.start.column + 1, g.start.column + 2);
            if (W == "]")
              return g.end.column++, g;
          }
        }), this.add("string_dquotes", "insertion", function(u, C, p, f, g) {
          var v = f.$mode.$quotes || t;
          if (g.length == 1 && v[g]) {
            if (this.lineCommentStart && this.lineCommentStart.indexOf(g) != -1)
              return;
            e(p);
            var M = g, W = p.getSelectionRange(), k = f.doc.getTextRange(W);
            if (k !== "" && (k.length != 1 || !v[k]) && p.getWrapBehavioursEnabled())
              return o(W, k, M, M);
            if (!k) {
              var Z = p.getCursorPosition(), y = f.doc.getLine(Z.row), I = y.substring(Z.column - 1, Z.column), d = y.substring(Z.column, Z.column + 1), h = f.getTokenAt(Z.row, Z.column), m = f.getTokenAt(Z.row, Z.column + 1);
              if (I == "\\" && h && /escape/.test(h.type))
                return null;
              var x = h && /string|escape/.test(h.type), $ = !m || /string|escape/.test(m.type), L;
              if (d == M)
                L = x !== $, L && /string\.end/.test(m.type) && (L = !1);
              else {
                if (x && !$ || x && $)
                  return null;
                var B = f.$mode.tokenRe;
                B.lastIndex = 0;
                var T = B.test(I);
                B.lastIndex = 0;
                var V = B.test(d), _ = f.$mode.$pairQuotesAfter, O = _ && _[M] && _[M].test(I);
                if (!O && T || V || d && !/[\s;,.})\]\\]/.test(d))
                  return null;
                var E = y[Z.column - 2];
                if (I == M && (E == M || B.test(E)))
                  return null;
                L = !0;
              }
              return {
                text: L ? M + M : "",
                selection: [1, 1]
              };
            }
          }
        }), this.add("string_dquotes", "deletion", function(u, C, p, f, g) {
          var v = f.$mode.$quotes || t, M = f.doc.getTextRange(g);
          if (!g.isMultiLine() && v.hasOwnProperty(M)) {
            e(p);
            var W = f.doc.getLine(g.start.row), k = W.substring(g.start.column + 1, g.start.column + 2);
            if (k == M)
              return g.end.column++, g;
          }
        }), l.closeDocComment !== !1 && this.add("doc comment end", "insertion", function(u, C, p, f, g) {
          if (u === "doc-start" && (g === `
` || g === `\r
`) && p.selection.isEmpty()) {
            var v = p.getCursorPosition();
            if (v.column === 0)
              return;
            for (var M = f.doc.getLine(v.row), W = f.doc.getLine(v.row + 1), k = f.getTokens(v.row), Z = 0, y = 0; y < k.length; y++) {
              Z += k[y].value.length;
              var I = k[y];
              if (Z >= v.column) {
                if (Z === v.column) {
                  if (!/\.doc/.test(I.type))
                    return;
                  if (/\*\//.test(I.value)) {
                    var d = k[y + 1];
                    if (!d || !/\.doc/.test(d.type))
                      return;
                  }
                }
                var h = v.column - (Z - I.value.length), m = I.value.indexOf("*/"), x = I.value.indexOf("/**", m > -1 ? m + 2 : 0);
                if (x !== -1 && h > x && h < x + 3 || m !== -1 && x !== -1 && h >= m && h <= x || !/\.doc/.test(I.type))
                  return;
                break;
              }
            }
            var $ = this.$getIndent(M);
            if (/\s*\*/.test(W))
              return /^\s*\*/.test(M) ? {
                text: g + $ + "* ",
                selection: [1, 2 + $.length, 1, 2 + $.length]
              } : {
                text: g + $ + " * ",
                selection: [1, 3 + $.length, 1, 3 + $.length]
              };
            if (/\/\*\*/.test(M.substring(0, v.column)))
              return {
                text: g + $ + " * " + g + " " + $ + "*/",
                selection: [1, 4 + $.length, 1, 4 + $.length]
              };
          }
        });
      }, s.isSaneInsertion = function(l, u) {
        var C = l.getCursorPosition(), p = new A(u, C.row, C.column);
        if (!this.$matchTokenType(p.getCurrentToken() || "text", c)) {
          if (/[)}\]]/.test(l.session.getLine(C.row)[C.column]))
            return !0;
          var f = new A(u, C.row, C.column + 1);
          if (!this.$matchTokenType(f.getCurrentToken() || "text", c))
            return !1;
        }
        return p.stepForward(), p.getCurrentTokenRow() !== C.row || this.$matchTokenType(p.getCurrentToken() || "text", n);
      }, s.$matchTokenType = function(l, u) {
        return u.indexOf(l.type || l) > -1;
      }, s.recordAutoInsert = function(l, u, C) {
        var p = l.getCursorPosition(), f = u.doc.getLine(p.row);
        this.isAutoInsertedClosing(p, f, r.autoInsertedLineEnd[0]) || (r.autoInsertedBrackets = 0), r.autoInsertedRow = p.row, r.autoInsertedLineEnd = C + f.substr(p.column), r.autoInsertedBrackets++;
      }, s.recordMaybeInsert = function(l, u, C) {
        var p = l.getCursorPosition(), f = u.doc.getLine(p.row);
        this.isMaybeInsertedClosing(p, f) || (r.maybeInsertedBrackets = 0), r.maybeInsertedRow = p.row, r.maybeInsertedLineStart = f.substr(0, p.column) + C, r.maybeInsertedLineEnd = f.substr(p.column), r.maybeInsertedBrackets++;
      }, s.isAutoInsertedClosing = function(l, u, C) {
        return r.autoInsertedBrackets > 0 && l.row === r.autoInsertedRow && C === r.autoInsertedLineEnd[0] && u.substr(l.column) === r.autoInsertedLineEnd;
      }, s.isMaybeInsertedClosing = function(l, u) {
        return r.maybeInsertedBrackets > 0 && l.row === r.maybeInsertedRow && u.substr(l.column) === r.maybeInsertedLineEnd && u.substr(0, l.column) == r.maybeInsertedLineStart;
      }, s.popAutoInsertedClosing = function() {
        r.autoInsertedLineEnd = r.autoInsertedLineEnd.substr(1), r.autoInsertedBrackets--;
      }, s.clearMaybeInsertedClosing = function() {
        r && (r.maybeInsertedBrackets = 0, r.maybeInsertedRow = -1);
      }, b.inherits(s, S), R.CstyleBehaviour = s;
    }), ace.define("ace/unicode", ["require", "exports", "module"], function(w, R, N) {
      for (var b = [48, 9, 8, 25, 5, 0, 2, 25, 48, 0, 11, 0, 5, 0, 6, 22, 2, 30, 2, 457, 5, 11, 15, 4, 8, 0, 2, 0, 18, 116, 2, 1, 3, 3, 9, 0, 2, 2, 2, 0, 2, 19, 2, 82, 2, 138, 2, 4, 3, 155, 12, 37, 3, 0, 8, 38, 10, 44, 2, 0, 2, 1, 2, 1, 2, 0, 9, 26, 6, 2, 30, 10, 7, 61, 2, 9, 5, 101, 2, 7, 3, 9, 2, 18, 3, 0, 17, 58, 3, 100, 15, 53, 5, 0, 6, 45, 211, 57, 3, 18, 2, 5, 3, 11, 3, 9, 2, 1, 7, 6, 2, 2, 2, 7, 3, 1, 3, 21, 2, 6, 2, 0, 4, 3, 3, 8, 3, 1, 3, 3, 9, 0, 5, 1, 2, 4, 3, 11, 16, 2, 2, 5, 5, 1, 3, 21, 2, 6, 2, 1, 2, 1, 2, 1, 3, 0, 2, 4, 5, 1, 3, 2, 4, 0, 8, 3, 2, 0, 8, 15, 12, 2, 2, 8, 2, 2, 2, 21, 2, 6, 2, 1, 2, 4, 3, 9, 2, 2, 2, 2, 3, 0, 16, 3, 3, 9, 18, 2, 2, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 3, 8, 3, 1, 3, 2, 9, 1, 5, 1, 2, 4, 3, 9, 2, 0, 17, 1, 2, 5, 4, 2, 2, 3, 4, 1, 2, 0, 2, 1, 4, 1, 4, 2, 4, 11, 5, 4, 4, 2, 2, 3, 3, 0, 7, 0, 15, 9, 18, 2, 2, 7, 2, 2, 2, 22, 2, 9, 2, 4, 4, 7, 2, 2, 2, 3, 8, 1, 2, 1, 7, 3, 3, 9, 19, 1, 2, 7, 2, 2, 2, 22, 2, 9, 2, 4, 3, 8, 2, 2, 2, 3, 8, 1, 8, 0, 2, 3, 3, 9, 19, 1, 2, 7, 2, 2, 2, 22, 2, 15, 4, 7, 2, 2, 2, 3, 10, 0, 9, 3, 3, 9, 11, 5, 3, 1, 2, 17, 4, 23, 2, 8, 2, 0, 3, 6, 4, 0, 5, 5, 2, 0, 2, 7, 19, 1, 14, 57, 6, 14, 2, 9, 40, 1, 2, 0, 3, 1, 2, 0, 3, 0, 7, 3, 2, 6, 2, 2, 2, 0, 2, 0, 3, 1, 2, 12, 2, 2, 3, 4, 2, 0, 2, 5, 3, 9, 3, 1, 35, 0, 24, 1, 7, 9, 12, 0, 2, 0, 2, 0, 5, 9, 2, 35, 5, 19, 2, 5, 5, 7, 2, 35, 10, 0, 58, 73, 7, 77, 3, 37, 11, 42, 2, 0, 4, 328, 2, 3, 3, 6, 2, 0, 2, 3, 3, 40, 2, 3, 3, 32, 2, 3, 3, 6, 2, 0, 2, 3, 3, 14, 2, 56, 2, 3, 3, 66, 5, 0, 33, 15, 17, 84, 13, 619, 3, 16, 2, 25, 6, 74, 22, 12, 2, 6, 12, 20, 12, 19, 13, 12, 2, 2, 2, 1, 13, 51, 3, 29, 4, 0, 5, 1, 3, 9, 34, 2, 3, 9, 7, 87, 9, 42, 6, 69, 11, 28, 4, 11, 5, 11, 11, 39, 3, 4, 12, 43, 5, 25, 7, 10, 38, 27, 5, 62, 2, 28, 3, 10, 7, 9, 14, 0, 89, 75, 5, 9, 18, 8, 13, 42, 4, 11, 71, 55, 9, 9, 4, 48, 83, 2, 2, 30, 14, 230, 23, 280, 3, 5, 3, 37, 3, 5, 3, 7, 2, 0, 2, 0, 2, 0, 2, 30, 3, 52, 2, 6, 2, 0, 4, 2, 2, 6, 4, 3, 3, 5, 5, 12, 6, 2, 2, 6, 67, 1, 20, 0, 29, 0, 14, 0, 17, 4, 60, 12, 5, 0, 4, 11, 18, 0, 5, 0, 3, 9, 2, 0, 4, 4, 7, 0, 2, 0, 2, 0, 2, 3, 2, 10, 3, 3, 6, 4, 5, 0, 53, 1, 2684, 46, 2, 46, 2, 132, 7, 6, 15, 37, 11, 53, 10, 0, 17, 22, 10, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 31, 48, 0, 470, 1, 36, 5, 2, 4, 6, 1, 5, 85, 3, 1, 3, 2, 2, 89, 2, 3, 6, 40, 4, 93, 18, 23, 57, 15, 513, 6581, 75, 20939, 53, 1164, 68, 45, 3, 268, 4, 27, 21, 31, 3, 13, 13, 1, 2, 24, 9, 69, 11, 1, 38, 8, 3, 102, 3, 1, 111, 44, 25, 51, 13, 68, 12, 9, 7, 23, 4, 0, 5, 45, 3, 35, 13, 28, 4, 64, 15, 10, 39, 54, 10, 13, 3, 9, 7, 22, 4, 1, 5, 66, 25, 2, 227, 42, 2, 1, 3, 9, 7, 11171, 13, 22, 5, 48, 8453, 301, 3, 61, 3, 105, 39, 6, 13, 4, 6, 11, 2, 12, 2, 4, 2, 0, 2, 1, 2, 1, 2, 107, 34, 362, 19, 63, 3, 53, 41, 11, 5, 15, 17, 6, 13, 1, 25, 2, 33, 4, 2, 134, 20, 9, 8, 25, 5, 0, 2, 25, 12, 88, 4, 5, 3, 5, 3, 5, 3, 2], S = 0, A = [], a = 0; a < b.length; a += 2)
        A.push(S += b[a]), b[a + 1] && A.push(45, S += b[a + 1]);
      R.wordChars = String.fromCharCode.apply(null, A);
    }), ace.define("ace/mode/text", ["require", "exports", "module", "ace/config", "ace/tokenizer", "ace/mode/text_highlight_rules", "ace/mode/behaviour/cstyle", "ace/unicode", "ace/lib/lang", "ace/token_iterator", "ace/range"], function(w, R, N) {
      var b = w("../config"), S = w("../tokenizer").Tokenizer, A = w("./text_highlight_rules").TextHighlightRules, a = w("./behaviour/cstyle").CstyleBehaviour, c = w("../unicode"), n = w("../lib/lang"), r = w("../token_iterator").TokenIterator, i = w("../range").Range, t;
      t = function() {
        this.HighlightRules = A;
      }, (function() {
        this.$defaultBehaviour = new a(), this.tokenRe = new RegExp("^[" + c.wordChars + "\\$_]+", "g"), this.nonTokenRe = new RegExp("^(?:[^" + c.wordChars + "\\$_]|\\s])+", "g"), this.getTokenizer = function() {
          return this.$tokenizer || (this.$highlightRules = this.$highlightRules || new this.HighlightRules(this.$highlightRuleConfig), this.$tokenizer = new S(this.$highlightRules.getRules())), this.$tokenizer;
        }, this.lineCommentStart = "", this.blockComment = "", this.toggleCommentLines = function(e, o, s, l) {
          var u = o.doc, C = !0, p = !0, f = 1 / 0, g = o.getTabSize(), v = !1;
          if (this.lineCommentStart) {
            if (Array.isArray(this.lineCommentStart))
              var k = this.lineCommentStart.map(n.escapeRegExp).join("|"), M = this.lineCommentStart[0];
            else
              var k = n.escapeRegExp(this.lineCommentStart), M = this.lineCommentStart;
            k = new RegExp("^(\\s*)(?:" + k + ") ?"), v = o.getUseSoftTabs();
            var I = function(V, _) {
              var O = V.match(k);
              if (O) {
                var E = O[1].length, F = O[0].length;
                !m(V, E, F) && O[0][F - 1] == " " && F--, u.removeInLine(_, E, F);
              }
            }, h = M + " ", y = function(V, _) {
              (!C || /\S/.test(V)) && (m(V, f, f) ? u.insertInLine({ row: _, column: f }, h) : u.insertInLine({ row: _, column: f }, M));
            }, d = function(V, _) {
              return k.test(V);
            }, m = function(V, _, O) {
              for (var E = 0; _-- && V.charAt(_) == " "; )
                E++;
              if (E % g != 0)
                return !1;
              for (var E = 0; V.charAt(O++) == " "; )
                E++;
              return g > 2 ? E % g != g - 1 : E % g == 0;
            };
          } else {
            if (!this.blockComment)
              return !1;
            var M = this.blockComment.start, W = this.blockComment.end, k = new RegExp("^(\\s*)(?:" + n.escapeRegExp(M) + ")"), Z = new RegExp("(?:" + n.escapeRegExp(W) + ")\\s*$"), y = function(L, B) {
              d(L, B) || (!C || /\S/.test(L)) && (u.insertInLine({ row: B, column: L.length }, W), u.insertInLine({ row: B, column: f }, M));
            }, I = function(L, B) {
              var T;
              (T = L.match(Z)) && u.removeInLine(B, L.length - T[0].length, L.length), (T = L.match(k)) && u.removeInLine(B, T[1].length, T[0].length);
            }, d = function(L, B) {
              if (k.test(L))
                return !0;
              for (var T = o.getTokens(B), V = 0; V < T.length; V++)
                if (T[V].type === "comment")
                  return !0;
            };
          }
          function x(L) {
            for (var B = s; B <= l; B++)
              L(u.getLine(B), B);
          }
          var $ = 1 / 0;
          x(function(L, B) {
            var T = L.search(/\S/);
            T !== -1 ? (T < f && (f = T), p && !d(L, B) && (p = !1)) : $ > L.length && ($ = L.length);
          }), f == 1 / 0 && (f = $, C = !1, p = !1), v && f % g != 0 && (f = Math.floor(f / g) * g), x(p ? I : y);
        }, this.toggleBlockComment = function(e, o, s, l) {
          var u = this.blockComment;
          if (u) {
            !u.start && u[0] && (u = u[0]);
            var C = new r(o, l.row, l.column), p = C.getCurrentToken();
            o.selection;
            var f = o.selection.toOrientedRange(), g, v;
            if (p && /comment/.test(p.type)) {
              for (var M, W; p && /comment/.test(p.type); ) {
                var k = p.value.indexOf(u.start);
                if (k != -1) {
                  var Z = C.getCurrentTokenRow(), y = C.getCurrentTokenColumn() + k;
                  M = new i(Z, y, Z, y + u.start.length);
                  break;
                }
                p = C.stepBackward();
              }
              for (var C = new r(o, l.row, l.column), p = C.getCurrentToken(); p && /comment/.test(p.type); ) {
                var k = p.value.indexOf(u.end);
                if (k != -1) {
                  var Z = C.getCurrentTokenRow(), y = C.getCurrentTokenColumn() + k;
                  W = new i(Z, y, Z, y + u.end.length);
                  break;
                }
                p = C.stepForward();
              }
              W && o.remove(W), M && (o.remove(M), g = M.start.row, v = -u.start.length);
            } else
              v = u.start.length, g = s.start.row, o.insert(s.end, u.end), o.insert(s.start, u.start);
            f.start.row == g && (f.start.column += v), f.end.row == g && (f.end.column += v), o.selection.fromOrientedRange(f);
          }
        }, this.getNextLineIndent = function(e, o, s) {
          return this.$getIndent(o);
        }, this.checkOutdent = function(e, o, s) {
          return !1;
        }, this.autoOutdent = function(e, o, s) {
        }, this.$getIndent = function(e) {
          return e.match(/^\s*/)[0];
        }, this.createWorker = function(e) {
          return null;
        }, this.createModeDelegates = function(e) {
          this.$embeds = [], this.$modes = {};
          for (var o in e)
            if (e[o]) {
              var s = e[o], l = s.prototype.$id, u = b.$modes[l];
              u || (b.$modes[l] = u = new s()), b.$modes[o] || (b.$modes[o] = u), this.$embeds.push(o), this.$modes[o] = u;
            }
          for (var C = [
            "toggleBlockComment",
            "toggleCommentLines",
            "getNextLineIndent",
            "checkOutdent",
            "autoOutdent",
            "transformAction",
            "getCompletions"
          ], p = function(g) {
            (function(v) {
              var M = C[g], W = v[M];
              v[C[g]] = function() {
                return this.$delegator(M, arguments, W);
              };
            })(f);
          }, f = this, o = 0; o < C.length; o++)
            p(o);
        }, this.$delegator = function(e, o, s) {
          var l = o[0] || "start";
          if (typeof l != "string") {
            if (Array.isArray(l[2])) {
              var u = l[2][l[2].length - 1], C = this.$modes[u];
              if (C)
                return C[e].apply(C, [l[1]].concat([].slice.call(o, 1)));
            }
            l = l[0] || "start";
          }
          for (var p = 0; p < this.$embeds.length; p++)
            if (this.$modes[this.$embeds[p]]) {
              var f = l.split(this.$embeds[p]);
              if (!f[0] && f[1]) {
                o[0] = f[1];
                var C = this.$modes[this.$embeds[p]];
                return C[e].apply(C, o);
              }
            }
          var g = s.apply(this, o);
          return s ? g : void 0;
        }, this.transformAction = function(e, o, s, l, u) {
          if (this.$behaviour) {
            var C = this.$behaviour.getBehaviours();
            for (var p in C)
              if (C[p][o]) {
                var f = C[p][o].apply(this, arguments);
                if (f)
                  return f;
              }
          }
        }, this.getKeywords = function(e) {
          if (!this.completionKeywords) {
            var o = this.$tokenizer.rules, s = [];
            for (var l in o)
              for (var u = o[l], C = 0, p = u.length; C < p; C++)
                if (typeof u[C].token == "string")
                  /keyword|support|storage/.test(u[C].token) && s.push(u[C].regex);
                else if (typeof u[C].token == "object") {
                  for (var f = 0, g = u[C].token.length; f < g; f++)
                    if (/keyword|support|storage/.test(u[C].token[f])) {
                      var l = u[C].regex.match(/\(.+?\)/g)[f];
                      s.push(l.substr(1, l.length - 2));
                    }
                }
            this.completionKeywords = s;
          }
          return e ? s.concat(this.$keywordList || []) : this.$keywordList;
        }, this.$createKeywordList = function() {
          return this.$highlightRules || this.getTokenizer(), this.$keywordList = this.$highlightRules.$keywordList || [];
        }, this.getCompletions = function(e, o, s, l) {
          var u = this.$keywordList || this.$createKeywordList();
          return u.map(function(C) {
            return {
              name: C,
              value: C,
              score: 0,
              meta: "keyword"
            };
          });
        }, this.$id = "ace/mode/text";
      }).call(t.prototype), R.Mode = t;
    }), ace.define("ace/line_widgets", ["require", "exports", "module", "ace/lib/dom"], function(w, R, N) {
      var b = w("./lib/dom"), S = (
        /** @class */
        function() {
          function A(a) {
            this.session = a, this.session.widgetManager = this, this.session.getRowLength = this.getRowLength, this.session.$getWidgetScreenLength = this.$getWidgetScreenLength, this.updateOnChange = this.updateOnChange.bind(this), this.renderWidgets = this.renderWidgets.bind(this), this.measureWidgets = this.measureWidgets.bind(this), this.session._changedWidgets = [], this.$onChangeEditor = this.$onChangeEditor.bind(this), this.session.on("change", this.updateOnChange), this.session.on("changeFold", this.updateOnFold), this.session.on("changeEditor", this.$onChangeEditor);
          }
          return A.prototype.getRowLength = function(a) {
            var c;
            return this.lineWidgets ? c = this.lineWidgets[a] && this.lineWidgets[a].rowCount || 0 : c = 0, !this.$useWrapMode || !this.$wrapData[a] ? 1 + c : this.$wrapData[a].length + 1 + c;
          }, A.prototype.$getWidgetScreenLength = function() {
            var a = 0;
            return this.lineWidgets.forEach(function(c) {
              c && c.rowCount && !c.hidden && (a += c.rowCount);
            }), a;
          }, A.prototype.$onChangeEditor = function(a) {
            this.attach(a.editor);
          }, A.prototype.attach = function(a) {
            a && a.widgetManager && a.widgetManager != this && a.widgetManager.detach(), this.editor != a && (this.detach(), this.editor = a, a && (a.widgetManager = this, a.renderer.on("beforeRender", this.measureWidgets), a.renderer.on("afterRender", this.renderWidgets)));
          }, A.prototype.detach = function(a) {
            var c = this.editor;
            if (c) {
              this.editor = null, c.widgetManager = null, c.renderer.off("beforeRender", this.measureWidgets), c.renderer.off("afterRender", this.renderWidgets);
              var n = this.session.lineWidgets;
              n && n.forEach(function(r) {
                r && r.el && r.el.parentNode && (r._inDocument = !1, r.el.parentNode.removeChild(r.el));
              });
            }
          }, A.prototype.updateOnFold = function(a, c) {
            var n = c.lineWidgets;
            if (!(!n || !a.action)) {
              for (var r = a.data, i = r.start.row, t = r.end.row, e = a.action == "add", o = i + 1; o < t; o++)
                n[o] && (n[o].hidden = e);
              n[t] && (e ? n[i] ? n[t].hidden = e : n[i] = n[t] : (n[i] == n[t] && (n[i] = void 0), n[t].hidden = e));
            }
          }, A.prototype.updateOnChange = function(a) {
            var c = this.session.lineWidgets;
            if (c) {
              var n = a.start.row, r = a.end.row - n;
              if (r !== 0) if (a.action == "remove") {
                var i = c.splice(n + 1, r);
                !c[n] && i[i.length - 1] && (c[n] = i.pop()), i.forEach(function(e) {
                  e && this.removeLineWidget(e);
                }, this), this.$updateRows();
              } else {
                var t = new Array(r);
                c[n] && c[n].column != null && a.start.column > c[n].column && n++, t.unshift(n, 0), c.splice.apply(c, t), this.$updateRows();
              }
            }
          }, A.prototype.$updateRows = function() {
            var a = this.session.lineWidgets;
            if (a) {
              var c = !0;
              a.forEach(function(n, r) {
                if (n)
                  for (c = !1, n.row = r; n.$oldWidget; )
                    n.$oldWidget.row = r, n = n.$oldWidget;
              }), c && (this.session.lineWidgets = null);
            }
          }, A.prototype.$registerLineWidget = function(a) {
            this.session.lineWidgets || (this.session.lineWidgets = new Array(this.session.getLength()));
            var c = this.session.lineWidgets[a.row];
            return c && (a.$oldWidget = c, c.el && c.el.parentNode && (c.el.parentNode.removeChild(c.el), c._inDocument = !1)), this.session.lineWidgets[a.row] = a, a;
          }, A.prototype.addLineWidget = function(a) {
            if (this.$registerLineWidget(a), a.session = this.session, !this.editor)
              return a;
            var c = this.editor.renderer;
            a.html && !a.el && (a.el = b.createElement("div"), a.el.innerHTML = a.html), a.text && !a.el && (a.el = b.createElement("div"), a.el.textContent = a.text), a.el && (b.addCssClass(a.el, "ace_lineWidgetContainer"), a.className && b.addCssClass(a.el, a.className), a.el.style.position = "absolute", a.el.style.zIndex = "5", c.container.appendChild(a.el), a._inDocument = !0, a.coverGutter || (a.el.style.zIndex = "3"), a.pixelHeight == null && (a.pixelHeight = a.el.offsetHeight)), a.rowCount == null && (a.rowCount = a.pixelHeight / c.layerConfig.lineHeight);
            var n = this.session.getFoldAt(a.row, 0);
            if (a.$fold = n, n) {
              var r = this.session.lineWidgets;
              a.row == n.end.row && !r[n.start.row] ? r[n.start.row] = a : a.hidden = !0;
            }
            return this.session._emit("changeFold", { data: { start: { row: a.row } } }), this.$updateRows(), this.renderWidgets(null, c), this.onWidgetChanged(a), a;
          }, A.prototype.removeLineWidget = function(a) {
            if (a._inDocument = !1, a.session = null, a.el && a.el.parentNode && a.el.parentNode.removeChild(a.el), a.editor && a.editor.destroy)
              try {
                a.editor.destroy();
              } catch {
              }
            if (this.session.lineWidgets) {
              var c = this.session.lineWidgets[a.row];
              if (c == a)
                this.session.lineWidgets[a.row] = a.$oldWidget, a.$oldWidget && this.onWidgetChanged(a.$oldWidget);
              else
                for (; c; ) {
                  if (c.$oldWidget == a) {
                    c.$oldWidget = a.$oldWidget;
                    break;
                  }
                  c = c.$oldWidget;
                }
            }
            this.session._emit("changeFold", { data: { start: { row: a.row } } }), this.$updateRows();
          }, A.prototype.getWidgetsAtRow = function(a) {
            for (var c = this.session.lineWidgets, n = c && c[a], r = []; n; )
              r.push(n), n = n.$oldWidget;
            return r;
          }, A.prototype.onWidgetChanged = function(a) {
            this.session._changedWidgets.push(a), this.editor && this.editor.renderer.updateFull();
          }, A.prototype.measureWidgets = function(a, c) {
            var n = this.session._changedWidgets, r = c.layerConfig;
            if (!(!n || !n.length)) {
              for (var i = 1 / 0, t = 0; t < n.length; t++) {
                var e = n[t];
                if (!(!e || !e.el) && e.session == this.session) {
                  if (!e._inDocument) {
                    if (this.session.lineWidgets[e.row] != e)
                      continue;
                    e._inDocument = !0, c.container.appendChild(e.el);
                  }
                  e.h = e.el.offsetHeight, e.fixedWidth || (e.w = e.el.offsetWidth, e.screenWidth = Math.ceil(e.w / r.characterWidth));
                  var o = e.h / r.lineHeight;
                  e.coverLine && (o -= this.session.getRowLineCount(e.row), o < 0 && (o = 0)), e.rowCount != o && (e.rowCount = o, e.row < i && (i = e.row));
                }
              }
              i != 1 / 0 && (this.session._emit("changeFold", { data: { start: { row: i } } }), this.session.lineWidgetWidth = null), this.session._changedWidgets = [];
            }
          }, A.prototype.renderWidgets = function(a, c) {
            var n = c.layerConfig, r = this.session.lineWidgets;
            if (r) {
              for (var i = Math.min(this.firstRow, n.firstRow), t = Math.max(this.lastRow, n.lastRow, r.length); i > 0 && !r[i]; )
                i--;
              this.firstRow = n.firstRow, this.lastRow = n.lastRow, c.$cursorLayer.config = n;
              for (var e = i; e <= t; e++) {
                var o = r[e];
                if (!(!o || !o.el)) {
                  if (o.hidden) {
                    o.el.style.top = -100 - (o.pixelHeight || 0) + "px";
                    continue;
                  }
                  o._inDocument || (o._inDocument = !0, c.container.appendChild(o.el));
                  var s = c.$cursorLayer.getPixelPosition({ row: e, column: 0 }, !0).top;
                  o.coverLine || (s += n.lineHeight * this.session.getRowLineCount(o.row)), o.el.style.top = s - n.offset + "px";
                  var l = o.coverGutter ? 0 : c.gutterWidth;
                  o.fixedWidth || (l -= c.scrollLeft), o.el.style.left = l + "px", o.fullWidth && o.screenWidth && (o.el.style.minWidth = n.width + 2 * n.padding + "px"), o.fixedWidth ? o.el.style.right = c.scrollBar.getWidth() + "px" : o.el.style.right = "";
                }
              }
            }
          }, A;
        }()
      );
      R.LineWidgets = S;
    }), ace.define("ace/apply_delta", ["require", "exports", "module"], function(w, R, N) {
      R.applyDelta = function(b, S, A) {
        var a = S.start.row, c = S.start.column, n = b[a] || "";
        switch (S.action) {
          case "insert":
            var r = S.lines;
            if (r.length === 1)
              b[a] = n.substring(0, c) + S.lines[0] + n.substring(c);
            else {
              var i = [a, 1].concat(S.lines);
              b.splice.apply(b, i), b[a] = n.substring(0, c) + b[a], b[a + S.lines.length - 1] += n.substring(c);
            }
            break;
          case "remove":
            var t = S.end.column, e = S.end.row;
            a === e ? b[a] = n.substring(0, c) + n.substring(t) : b.splice(a, e - a + 1, n.substring(0, c) + b[e].substring(t));
            break;
        }
      };
    }), ace.define("ace/anchor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(w, R, N) {
      var b = w("./lib/oop"), S = w("./lib/event_emitter").EventEmitter, A = (
        /** @class */
        function() {
          function n(r, i, t) {
            this.$onChange = this.onChange.bind(this), this.attach(r), typeof i != "number" ? this.setPosition(i.row, i.column) : this.setPosition(i, t);
          }
          return n.prototype.getPosition = function() {
            return this.$clipPositionToDocument(this.row, this.column);
          }, n.prototype.getDocument = function() {
            return this.document;
          }, n.prototype.onChange = function(r) {
            if (!(r.start.row == r.end.row && r.start.row != this.row) && !(r.start.row > this.row)) {
              var i = c(r, { row: this.row, column: this.column }, this.$insertRight);
              this.setPosition(i.row, i.column, !0);
            }
          }, n.prototype.setPosition = function(r, i, t) {
            var e;
            if (t ? e = {
              row: r,
              column: i
            } : e = this.$clipPositionToDocument(r, i), !(this.row == e.row && this.column == e.column)) {
              var o = {
                row: this.row,
                column: this.column
              };
              this.row = e.row, this.column = e.column, this._signal("change", {
                old: o,
                value: e
              });
            }
          }, n.prototype.detach = function() {
            this.document.off("change", this.$onChange);
          }, n.prototype.attach = function(r) {
            this.document = r || this.document, this.document.on("change", this.$onChange);
          }, n.prototype.$clipPositionToDocument = function(r, i) {
            var t = {};
            return r >= this.document.getLength() ? (t.row = Math.max(0, this.document.getLength() - 1), t.column = this.document.getLine(t.row).length) : r < 0 ? (t.row = 0, t.column = 0) : (t.row = r, t.column = Math.min(this.document.getLine(t.row).length, Math.max(0, i))), i < 0 && (t.column = 0), t;
          }, n;
        }()
      );
      A.prototype.$insertRight = !1, b.implement(A.prototype, S);
      function a(n, r, i) {
        var t = i ? n.column <= r.column : n.column < r.column;
        return n.row < r.row || n.row == r.row && t;
      }
      function c(n, r, i) {
        var t = n.action == "insert", e = (t ? 1 : -1) * (n.end.row - n.start.row), o = (t ? 1 : -1) * (n.end.column - n.start.column), s = n.start, l = t ? s : n.end;
        return a(r, s, i) ? {
          row: r.row,
          column: r.column
        } : a(l, r, !i) ? {
          row: r.row + e,
          column: r.column + (r.row == l.row ? o : 0)
        } : {
          row: s.row,
          column: s.column
        };
      }
      R.Anchor = A;
    }), ace.define("ace/document", ["require", "exports", "module", "ace/lib/oop", "ace/apply_delta", "ace/lib/event_emitter", "ace/range", "ace/anchor"], function(w, R, N) {
      var b = w("./lib/oop"), S = w("./apply_delta").applyDelta, A = w("./lib/event_emitter").EventEmitter, a = w("./range").Range, c = w("./anchor").Anchor, n = (
        /** @class */
        function() {
          function r(i) {
            this.$lines = [""], i.length === 0 ? this.$lines = [""] : Array.isArray(i) ? this.insertMergedLines({ row: 0, column: 0 }, i) : this.insert({ row: 0, column: 0 }, i);
          }
          return r.prototype.setValue = function(i) {
            var t = this.getLength() - 1;
            this.remove(new a(0, 0, t, this.getLine(t).length)), this.insert({ row: 0, column: 0 }, i || "");
          }, r.prototype.getValue = function() {
            return this.getAllLines().join(this.getNewLineCharacter());
          }, r.prototype.createAnchor = function(i, t) {
            return new c(this, i, t);
          }, r.prototype.$detectNewLine = function(i) {
            var t = i.match(/^.*?(\r\n|\r|\n)/m);
            this.$autoNewLine = t ? t[1] : `
`, this._signal("changeNewLineMode");
          }, r.prototype.getNewLineCharacter = function() {
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
          }, r.prototype.setNewLineMode = function(i) {
            this.$newLineMode !== i && (this.$newLineMode = i, this._signal("changeNewLineMode"));
          }, r.prototype.getNewLineMode = function() {
            return this.$newLineMode;
          }, r.prototype.isNewLine = function(i) {
            return i == `\r
` || i == "\r" || i == `
`;
          }, r.prototype.getLine = function(i) {
            return this.$lines[i] || "";
          }, r.prototype.getLines = function(i, t) {
            return this.$lines.slice(i, t + 1);
          }, r.prototype.getAllLines = function() {
            return this.getLines(0, this.getLength());
          }, r.prototype.getLength = function() {
            return this.$lines.length;
          }, r.prototype.getTextRange = function(i) {
            return this.getLinesForRange(i).join(this.getNewLineCharacter());
          }, r.prototype.getLinesForRange = function(i) {
            var t;
            if (i.start.row === i.end.row)
              t = [this.getLine(i.start.row).substring(i.start.column, i.end.column)];
            else {
              t = this.getLines(i.start.row, i.end.row), t[0] = (t[0] || "").substring(i.start.column);
              var e = t.length - 1;
              i.end.row - i.start.row == e && (t[e] = t[e].substring(0, i.end.column));
            }
            return t;
          }, r.prototype.insertLines = function(i, t) {
            return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."), this.insertFullLines(i, t);
          }, r.prototype.removeLines = function(i, t) {
            return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."), this.removeFullLines(i, t);
          }, r.prototype.insertNewLine = function(i) {
            return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."), this.insertMergedLines(i, ["", ""]);
          }, r.prototype.insert = function(i, t) {
            return this.getLength() <= 1 && this.$detectNewLine(t), this.insertMergedLines(i, this.$split(t));
          }, r.prototype.insertInLine = function(i, t) {
            var e = this.clippedPos(i.row, i.column), o = this.pos(i.row, i.column + t.length);
            return this.applyDelta({
              start: e,
              end: o,
              action: "insert",
              lines: [t]
            }, !0), this.clonePos(o);
          }, r.prototype.clippedPos = function(i, t) {
            var e = this.getLength();
            i === void 0 ? i = e : i < 0 ? i = 0 : i >= e && (i = e - 1, t = void 0);
            var o = this.getLine(i);
            return t == null && (t = o.length), t = Math.min(Math.max(t, 0), o.length), { row: i, column: t };
          }, r.prototype.clonePos = function(i) {
            return { row: i.row, column: i.column };
          }, r.prototype.pos = function(i, t) {
            return { row: i, column: t };
          }, r.prototype.$clipPosition = function(i) {
            var t = this.getLength();
            return i.row >= t ? (i.row = Math.max(0, t - 1), i.column = this.getLine(t - 1).length) : (i.row = Math.max(0, i.row), i.column = Math.min(Math.max(i.column, 0), this.getLine(i.row).length)), i;
          }, r.prototype.insertFullLines = function(i, t) {
            i = Math.min(Math.max(i, 0), this.getLength());
            var e = 0;
            i < this.getLength() ? (t = t.concat([""]), e = 0) : (t = [""].concat(t), i--, e = this.$lines[i].length), this.insertMergedLines({ row: i, column: e }, t);
          }, r.prototype.insertMergedLines = function(i, t) {
            var e = this.clippedPos(i.row, i.column), o = {
              row: e.row + t.length - 1,
              column: (t.length == 1 ? e.column : 0) + t[t.length - 1].length
            };
            return this.applyDelta({
              start: e,
              end: o,
              action: "insert",
              lines: t
            }), this.clonePos(o);
          }, r.prototype.remove = function(i) {
            var t = this.clippedPos(i.start.row, i.start.column), e = this.clippedPos(i.end.row, i.end.column);
            return this.applyDelta({
              start: t,
              end: e,
              action: "remove",
              lines: this.getLinesForRange({ start: t, end: e })
            }), this.clonePos(t);
          }, r.prototype.removeInLine = function(i, t, e) {
            var o = this.clippedPos(i, t), s = this.clippedPos(i, e);
            return this.applyDelta({
              start: o,
              end: s,
              action: "remove",
              lines: this.getLinesForRange({ start: o, end: s })
            }, !0), this.clonePos(o);
          }, r.prototype.removeFullLines = function(i, t) {
            i = Math.min(Math.max(0, i), this.getLength() - 1), t = Math.min(Math.max(0, t), this.getLength() - 1);
            var e = t == this.getLength() - 1 && i > 0, o = t < this.getLength() - 1, s = e ? i - 1 : i, l = e ? this.getLine(s).length : 0, u = o ? t + 1 : t, C = o ? 0 : this.getLine(u).length, p = new a(s, l, u, C), f = this.$lines.slice(i, t + 1);
            return this.applyDelta({
              start: p.start,
              end: p.end,
              action: "remove",
              lines: this.getLinesForRange(p)
            }), f;
          }, r.prototype.removeNewLine = function(i) {
            i < this.getLength() - 1 && i >= 0 && this.applyDelta({
              start: this.pos(i, this.getLine(i).length),
              end: this.pos(i + 1, 0),
              action: "remove",
              lines: ["", ""]
            });
          }, r.prototype.replace = function(i, t) {
            if (i instanceof a || (i = a.fromPoints(i.start, i.end)), t.length === 0 && i.isEmpty())
              return i.start;
            if (t == this.getTextRange(i))
              return i.end;
            this.remove(i);
            var e;
            return t ? e = this.insert(i.start, t) : e = i.start, e;
          }, r.prototype.applyDeltas = function(i) {
            for (var t = 0; t < i.length; t++)
              this.applyDelta(i[t]);
          }, r.prototype.revertDeltas = function(i) {
            for (var t = i.length - 1; t >= 0; t--)
              this.revertDelta(i[t]);
          }, r.prototype.applyDelta = function(i, t) {
            var e = i.action == "insert";
            (e ? i.lines.length <= 1 && !i.lines[0] : !a.comparePoints(i.start, i.end)) || (e && i.lines.length > 2e4 ? this.$splitAndapplyLargeDelta(i, 2e4) : (S(this.$lines, i, t), this._signal("change", i)));
          }, r.prototype.$safeApplyDelta = function(i) {
            var t = this.$lines.length;
            (i.action == "remove" && i.start.row < t && i.end.row < t || i.action == "insert" && i.start.row <= t) && this.applyDelta(i);
          }, r.prototype.$splitAndapplyLargeDelta = function(i, t) {
            for (var e = i.lines, o = e.length - t + 1, s = i.start.row, l = i.start.column, u = 0, C = 0; u < o; u = C) {
              C += t - 1;
              var p = e.slice(u, C);
              p.push(""), this.applyDelta({
                start: this.pos(s + u, l),
                end: this.pos(s + C, l = 0),
                action: i.action,
                lines: p
              }, !0);
            }
            i.lines = e.slice(u), i.start.row = s + u, i.start.column = l, this.applyDelta(i, !0);
          }, r.prototype.revertDelta = function(i) {
            this.$safeApplyDelta({
              start: this.clonePos(i.start),
              end: this.clonePos(i.end),
              action: i.action == "insert" ? "remove" : "insert",
              lines: i.lines.slice()
            });
          }, r.prototype.indexToPosition = function(i, t) {
            for (var e = this.$lines || this.getAllLines(), o = this.getNewLineCharacter().length, s = t || 0, l = e.length; s < l; s++)
              if (i -= e[s].length + o, i < 0)
                return { row: s, column: i + e[s].length + o };
            return { row: l - 1, column: i + e[l - 1].length + o };
          }, r.prototype.positionToIndex = function(i, t) {
            for (var e = this.$lines || this.getAllLines(), o = this.getNewLineCharacter().length, s = 0, l = Math.min(i.row, e.length), u = t || 0; u < l; ++u)
              s += e[u].length + o;
            return s + i.column;
          }, r.prototype.$split = function(i) {
            return i.split(/\r\n|\r|\n/);
          }, r;
        }()
      );
      n.prototype.$autoNewLine = "", n.prototype.$newLineMode = "auto", b.implement(n.prototype, A), R.Document = n;
    }), ace.define("ace/background_tokenizer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(w, R, N) {
      var b = w("./lib/oop"), S = w("./lib/event_emitter").EventEmitter, A = (
        /** @class */
        function() {
          function a(c, n) {
            this.running = !1, this.lines = [], this.states = [], this.currentLine = 0, this.tokenizer = c;
            var r = this;
            this.$worker = function() {
              if (r.running) {
                for (var i = /* @__PURE__ */ new Date(), t = r.currentLine, e = -1, o = r.doc, s = t; r.lines[t]; )
                  t++;
                var l = o.getLength(), u = 0;
                for (r.running = !1; t < l; ) {
                  r.$tokenizeRow(t), e = t;
                  do
                    t++;
                  while (r.lines[t]);
                  if (u++, u % 5 === 0 && /* @__PURE__ */ new Date() - i > 20) {
                    r.running = setTimeout(r.$worker, 20);
                    break;
                  }
                }
                r.currentLine = t, e == -1 && (e = t), s <= e && r.fireUpdateEvent(s, e);
              }
            };
          }
          return a.prototype.setTokenizer = function(c) {
            this.tokenizer = c, this.lines = [], this.states = [], this.start(0);
          }, a.prototype.setDocument = function(c) {
            this.doc = c, this.lines = [], this.states = [], this.stop();
          }, a.prototype.fireUpdateEvent = function(c, n) {
            var r = {
              first: c,
              last: n
            };
            this._signal("update", { data: r });
          }, a.prototype.start = function(c) {
            this.currentLine = Math.min(c || 0, this.currentLine, this.doc.getLength()), this.lines.splice(this.currentLine, this.lines.length), this.states.splice(this.currentLine, this.states.length), this.stop(), this.running = setTimeout(this.$worker, 700);
          }, a.prototype.scheduleStart = function() {
            this.running || (this.running = setTimeout(this.$worker, 700));
          }, a.prototype.$updateOnChange = function(c) {
            var n = c.start.row, r = c.end.row - n;
            if (r === 0)
              this.lines[n] = null;
            else if (c.action == "remove")
              this.lines.splice(n, r + 1, null), this.states.splice(n, r + 1, null);
            else {
              var i = Array(r + 1);
              i.unshift(n, 1), this.lines.splice.apply(this.lines, i), this.states.splice.apply(this.states, i);
            }
            this.currentLine = Math.min(n, this.currentLine, this.doc.getLength()), this.stop();
          }, a.prototype.stop = function() {
            this.running && clearTimeout(this.running), this.running = !1;
          }, a.prototype.getTokens = function(c) {
            return this.lines[c] || this.$tokenizeRow(c);
          }, a.prototype.getState = function(c) {
            return this.currentLine == c && this.$tokenizeRow(c), this.states[c] || "start";
          }, a.prototype.$tokenizeRow = function(c) {
            var n = this.doc.getLine(c), r = this.states[c - 1], i = this.tokenizer.getLineTokens(n, r, c);
            return this.states[c] + "" != i.state + "" ? (this.states[c] = i.state, this.lines[c + 1] = null, this.currentLine > c + 1 && (this.currentLine = c + 1)) : this.currentLine == c && (this.currentLine = c + 1), this.lines[c] = i.tokens;
          }, a.prototype.cleanup = function() {
            this.running = !1, this.lines = [], this.states = [], this.currentLine = 0, this.removeAllListeners();
          }, a;
        }()
      );
      b.implement(A.prototype, S), R.BackgroundTokenizer = A;
    }), ace.define("ace/search_highlight", ["require", "exports", "module", "ace/lib/lang", "ace/range"], function(w, R, N) {
      var b = w("./lib/lang"), S = w("./range").Range, A = (
        /** @class */
        function() {
          function a(c, n, r) {
            r === void 0 && (r = "text"), this.setRegexp(c), this.clazz = n, this.type = r, this.docLen = 0;
          }
          return a.prototype.setRegexp = function(c) {
            this.regExp + "" != c + "" && (this.regExp = c, this.cache = []);
          }, a.prototype.update = function(c, n, r, i) {
            if (this.regExp) {
              for (var t = i.firstRow, e = i.lastRow, o = {}, s = r.$editor && r.$editor.$search, l = s && s.$isMultilineSearch(r.$editor.getLastSearchOptions()), u = t; u <= e; u++) {
                var C = this.cache[u];
                if (C == null || r.getValue().length != this.docLen) {
                  if (l) {
                    C = [];
                    var p = s.$multiLineForward(r, this.regExp, u, e);
                    if (p) {
                      var f = p.endRow <= e ? p.endRow - 1 : e;
                      f > u && (u = f), C.push(new S(p.startRow, p.startCol, p.endRow, p.endCol));
                    }
                    C.length > this.MAX_RANGES && (C = C.slice(0, this.MAX_RANGES));
                  } else
                    C = b.getMatchOffsets(r.getLine(u), this.regExp), C.length > this.MAX_RANGES && (C = C.slice(0, this.MAX_RANGES)), C = C.map(function(W) {
                      return new S(u, W.offset, u, W.offset + W.length);
                    });
                  this.cache[u] = C.length ? C : "";
                }
                if (C.length !== 0)
                  for (var g = C.length; g--; ) {
                    var v = C[g].toScreenRange(r), M = v.toString();
                    o[M] || (o[M] = !0, n.drawSingleLineMarker(c, v, this.clazz, i));
                  }
              }
              this.docLen = r.getValue().length;
            }
          }, a;
        }()
      );
      A.prototype.MAX_RANGES = 500, R.SearchHighlight = A;
    }), ace.define("ace/undomanager", ["require", "exports", "module", "ace/range"], function(w, R, N) {
      var b = (
        /** @class */
        function() {
          function f() {
            this.$keepRedoStack, this.$maxRev = 0, this.$fromUndo = !1, this.$undoDepth = 1 / 0, this.reset();
          }
          return f.prototype.addSession = function(g) {
            this.$session = g;
          }, f.prototype.add = function(g, v, M) {
            if (!this.$fromUndo && g != this.$lastDelta) {
              if (this.$keepRedoStack || (this.$redoStack.length = 0), v === !1 || !this.lastDeltas) {
                this.lastDeltas = [];
                var W = this.$undoStack.length;
                W > this.$undoDepth - 1 && this.$undoStack.splice(0, W - this.$undoDepth + 1), this.$undoStack.push(this.lastDeltas), g.id = this.$rev = ++this.$maxRev;
              }
              (g.action == "remove" || g.action == "insert") && (this.$lastDelta = g), this.lastDeltas.push(g);
            }
          }, f.prototype.addSelection = function(g, v) {
            this.selections.push({
              value: g,
              rev: v || this.$rev
            });
          }, f.prototype.startNewGroup = function() {
            return this.lastDeltas = null, this.$rev;
          }, f.prototype.markIgnored = function(g, v) {
            v == null && (v = this.$rev + 1);
            for (var M = this.$undoStack, W = M.length; W--; ) {
              var k = M[W][0];
              if (k.id <= g)
                break;
              k.id < v && (k.ignore = !0);
            }
            this.lastDeltas = null;
          }, f.prototype.getSelection = function(g, v) {
            for (var M = this.selections, W = M.length; W--; ) {
              var k = M[W];
              if (k.rev < g)
                return v && (k = M[W + 1]), k;
            }
          }, f.prototype.getRevision = function() {
            return this.$rev;
          }, f.prototype.getDeltas = function(g, v) {
            v == null && (v = this.$rev + 1);
            for (var M = this.$undoStack, W = null, k = 0, Z = M.length; Z--; ) {
              var y = M[Z][0];
              if (y.id < v && !W && (W = Z + 1), y.id <= g) {
                k = Z + 1;
                break;
              }
            }
            return M.slice(k, W);
          }, f.prototype.getChangedRanges = function(g, v) {
            v == null && (v = this.$rev + 1);
          }, f.prototype.getChangedLines = function(g, v) {
            v == null && (v = this.$rev + 1);
          }, f.prototype.undo = function(g, v) {
            this.lastDeltas = null;
            var M = this.$undoStack;
            if (S(M, M.length)) {
              g || (g = this.$session), this.$redoStackBaseRev !== this.$rev && this.$redoStack.length && (this.$redoStack = []), this.$fromUndo = !0;
              var W = M.pop(), k = null;
              return W && (k = g.undoChanges(W, v), this.$redoStack.push(W), this.$syncRev()), this.$fromUndo = !1, k;
            }
          }, f.prototype.redo = function(g, v) {
            if (this.lastDeltas = null, g || (g = this.$session), this.$fromUndo = !0, this.$redoStackBaseRev != this.$rev) {
              var M = this.getDeltas(this.$redoStackBaseRev, this.$rev + 1);
              p(this.$redoStack, M), this.$redoStackBaseRev = this.$rev, this.$redoStack.forEach(function(Z) {
                Z[0].id = ++this.$maxRev;
              }, this);
            }
            var W = this.$redoStack.pop(), k = null;
            return W && (k = g.redoChanges(W, v), this.$undoStack.push(W), this.$syncRev()), this.$fromUndo = !1, k;
          }, f.prototype.$syncRev = function() {
            var g = this.$undoStack, v = g[g.length - 1], M = v && v[0].id || 0;
            this.$redoStackBaseRev = M, this.$rev = M;
          }, f.prototype.reset = function() {
            this.lastDeltas = null, this.$lastDelta = null, this.$undoStack = [], this.$redoStack = [], this.$rev = 0, this.mark = 0, this.$redoStackBaseRev = this.$rev, this.selections = [];
          }, f.prototype.canUndo = function() {
            return this.$undoStack.length > 0;
          }, f.prototype.canRedo = function() {
            return this.$redoStack.length > 0;
          }, f.prototype.bookmark = function(g) {
            g == null && (g = this.$rev), this.mark = g;
          }, f.prototype.isAtBookmark = function() {
            return this.$rev === this.mark;
          }, f.prototype.toJSON = function() {
            return {
              $redoStack: this.$redoStack,
              $undoStack: this.$undoStack
            };
          }, f.prototype.fromJSON = function(g) {
            this.reset(), this.$undoStack = g.$undoStack, this.$redoStack = g.$redoStack;
          }, f.prototype.$prettyPrint = function(g) {
            return g ? r(g) : r(this.$undoStack) + `
---
` + r(this.$redoStack);
          }, f;
        }()
      );
      b.prototype.hasUndo = b.prototype.canUndo, b.prototype.hasRedo = b.prototype.canRedo, b.prototype.isClean = b.prototype.isAtBookmark, b.prototype.markClean = b.prototype.bookmark;
      function S(f, g) {
        for (var v = g; v--; ) {
          var M = f[v];
          if (M && !M[0].ignore) {
            for (; v < g - 1; ) {
              var W = e(f[v], f[v + 1]);
              f[v] = W[0], f[v + 1] = W[1], v++;
            }
            return !0;
          }
        }
      }
      var A = w("./range").Range, a = A.comparePoints;
      A.comparePoints;
      function c(f) {
        return { row: f.row, column: f.column };
      }
      function n(f) {
        return {
          start: c(f.start),
          end: c(f.end),
          action: f.action,
          lines: f.lines.slice()
        };
      }
      function r(f) {
        if (f = f || this, Array.isArray(f))
          return f.map(r).join(`
`);
        var g = "";
        return f.action ? (g = f.action == "insert" ? "+" : "-", g += "[" + f.lines + "]") : f.value && (Array.isArray(f.value) ? g = f.value.map(i).join(`
`) : g = i(f.value)), f.start && (g += i(f)), (f.id || f.rev) && (g += "	(" + (f.id || f.rev) + ")"), g;
      }
      function i(f) {
        return f.start.row + ":" + f.start.column + "=>" + f.end.row + ":" + f.end.column;
      }
      function t(f, g) {
        var v = f.action == "insert", M = g.action == "insert";
        if (v && M)
          if (a(g.start, f.end) >= 0)
            s(g, f, -1);
          else if (a(g.start, f.start) <= 0)
            s(f, g, 1);
          else
            return null;
        else if (v && !M)
          if (a(g.start, f.end) >= 0)
            s(g, f, -1);
          else if (a(g.end, f.start) <= 0)
            s(f, g, -1);
          else
            return null;
        else if (!v && M)
          if (a(g.start, f.start) >= 0)
            s(g, f, 1);
          else if (a(g.start, f.start) <= 0)
            s(f, g, 1);
          else
            return null;
        else if (!v && !M)
          if (a(g.start, f.start) >= 0)
            s(g, f, 1);
          else if (a(g.end, f.start) <= 0)
            s(f, g, -1);
          else
            return null;
        return [g, f];
      }
      function e(f, g) {
        for (var v = f.length; v--; )
          for (var M = 0; M < g.length; M++)
            if (!t(f[v], g[M])) {
              for (; v < f.length; ) {
                for (; M--; )
                  t(g[M], f[v]);
                M = g.length, v++;
              }
              return [f, g];
            }
        return f.selectionBefore = g.selectionBefore = f.selectionAfter = g.selectionAfter = null, [g, f];
      }
      function o(f, g) {
        var v = f.action == "insert", M = g.action == "insert";
        if (v && M)
          a(f.start, g.start) < 0 ? s(g, f, 1) : s(f, g, 1);
        else if (v && !M)
          a(f.start, g.end) >= 0 ? s(f, g, -1) : (a(f.start, g.start) <= 0 || s(f, A.fromPoints(g.start, f.start), -1), s(g, f, 1));
        else if (!v && M)
          a(g.start, f.end) >= 0 ? s(g, f, -1) : (a(g.start, f.start) <= 0 || s(g, A.fromPoints(f.start, g.start), -1), s(f, g, 1));
        else if (!v && !M)
          if (a(g.start, f.end) >= 0)
            s(g, f, -1);
          else if (a(g.end, f.start) <= 0)
            s(f, g, -1);
          else {
            var W, k;
            return a(f.start, g.start) < 0 && (W = f, f = u(f, g.start)), a(f.end, g.end) > 0 && (k = u(f, g.end)), l(g.end, f.start, f.end, -1), k && !W && (f.lines = k.lines, f.start = k.start, f.end = k.end, k = f), [g, W, k].filter(Boolean);
          }
        return [g, f];
      }
      function s(f, g, v) {
        l(f.start, g.start, g.end, v), l(f.end, g.start, g.end, v);
      }
      function l(f, g, v, M) {
        f.row == (M == 1 ? g : v).row && (f.column += M * (v.column - g.column)), f.row += M * (v.row - g.row);
      }
      function u(f, g) {
        var v = f.lines, M = f.end;
        f.end = c(g);
        var W = f.end.row - f.start.row, k = v.splice(W, v.length), Z = W ? g.column : g.column - f.start.column;
        v.push(k[0].substring(0, Z)), k[0] = k[0].substr(Z);
        var y = {
          start: c(g),
          end: M,
          lines: k,
          action: f.action
        };
        return y;
      }
      function C(f, g) {
        g = n(g);
        for (var v = f.length; v--; ) {
          for (var M = f[v], W = 0; W < M.length; W++) {
            var k = M[W], Z = o(k, g);
            g = Z[0], Z.length != 2 && (Z[2] ? (M.splice(W + 1, 1, Z[1], Z[2]), W++) : Z[1] || (M.splice(W, 1), W--));
          }
          M.length || f.splice(v, 1);
        }
        return f;
      }
      function p(f, g) {
        for (var v = 0; v < g.length; v++)
          for (var M = g[v], W = 0; W < M.length; W++)
            C(f, M[W]);
      }
      R.UndoManager = b;
    }), ace.define("ace/edit_session/fold_line", ["require", "exports", "module", "ace/range"], function(w, R, N) {
      var b = w("../range").Range, S = (
        /** @class */
        function() {
          function A(a, c) {
            this.foldData = a, Array.isArray(c) ? this.folds = c : c = this.folds = [c];
            var n = c[c.length - 1];
            this.range = new b(c[0].start.row, c[0].start.column, n.end.row, n.end.column), this.start = this.range.start, this.end = this.range.end, this.folds.forEach(function(r) {
              r.setFoldLine(this);
            }, this);
          }
          return A.prototype.shiftRow = function(a) {
            this.start.row += a, this.end.row += a, this.folds.forEach(function(c) {
              c.start.row += a, c.end.row += a;
            });
          }, A.prototype.addFold = function(a) {
            if (a.sameRow) {
              if (a.start.row < this.startRow || a.endRow > this.endRow)
                throw new Error("Can't add a fold to this FoldLine as it has no connection");
              this.folds.push(a), this.folds.sort(function(c, n) {
                return -c.range.compareEnd(n.start.row, n.start.column);
              }), this.range.compareEnd(a.start.row, a.start.column) > 0 ? (this.end.row = a.end.row, this.end.column = a.end.column) : this.range.compareStart(a.end.row, a.end.column) < 0 && (this.start.row = a.start.row, this.start.column = a.start.column);
            } else if (a.start.row == this.end.row)
              this.folds.push(a), this.end.row = a.end.row, this.end.column = a.end.column;
            else if (a.end.row == this.start.row)
              this.folds.unshift(a), this.start.row = a.start.row, this.start.column = a.start.column;
            else
              throw new Error("Trying to add fold to FoldRow that doesn't have a matching row");
            a.foldLine = this;
          }, A.prototype.containsRow = function(a) {
            return a >= this.start.row && a <= this.end.row;
          }, A.prototype.walk = function(a, c, n) {
            var r = 0, i = this.folds, t, e, o, s = !0;
            c == null && (c = this.end.row, n = this.end.column);
            for (var l = 0; l < i.length; l++) {
              if (t = i[l], e = t.range.compareStart(c, n), e == -1) {
                a(null, c, n, r, s);
                return;
              }
              if (o = a(null, t.start.row, t.start.column, r, s), o = !o && a(t.placeholder, t.start.row, t.start.column, r), o || e === 0)
                return;
              s = !t.sameRow, r = t.end.column;
            }
            a(null, c, n, r, s);
          }, A.prototype.getNextFoldTo = function(a, c) {
            for (var n, r, i = 0; i < this.folds.length; i++) {
              if (n = this.folds[i], r = n.range.compareEnd(a, c), r == -1)
                return {
                  fold: n,
                  kind: "after"
                };
              if (r === 0)
                return {
                  fold: n,
                  kind: "inside"
                };
            }
            return null;
          }, A.prototype.addRemoveChars = function(a, c, n) {
            var r = this.getNextFoldTo(a, c), i, t;
            if (r) {
              if (i = r.fold, r.kind == "inside" && i.start.column != c && i.start.row != a)
                window.console && window.console.log(a, c, i);
              else if (i.start.row == a) {
                t = this.folds;
                var e = t.indexOf(i);
                for (e === 0 && (this.start.column += n), e; e < t.length; e++) {
                  if (i = t[e], i.start.column += n, !i.sameRow)
                    return;
                  i.end.column += n;
                }
                this.end.column += n;
              }
            }
          }, A.prototype.split = function(a, c) {
            var n = this.getNextFoldTo(a, c);
            if (!n || n.kind == "inside")
              return null;
            var r = n.fold, i = this.folds, t = this.foldData, e = i.indexOf(r), o = i[e - 1];
            this.end.row = o.end.row, this.end.column = o.end.column, i = i.splice(e, i.length - e);
            var s = new A(t, i);
            return t.splice(t.indexOf(this) + 1, 0, s), s;
          }, A.prototype.merge = function(a) {
            for (var c = a.folds, n = 0; n < c.length; n++)
              this.addFold(c[n]);
            var r = this.foldData;
            r.splice(r.indexOf(a), 1);
          }, A.prototype.toString = function() {
            var a = [this.range.toString() + ": ["];
            return this.folds.forEach(function(c) {
              a.push("  " + c.toString());
            }), a.push("]"), a.join(`
`);
          }, A.prototype.idxToPosition = function(a) {
            for (var c = 0, n = 0; n < this.folds.length; n++) {
              var r = this.folds[n];
              if (a -= r.start.column - c, a < 0)
                return {
                  row: r.start.row,
                  column: r.start.column + a
                };
              if (a -= r.placeholder.length, a < 0)
                return r.start;
              c = r.end.column;
            }
            return {
              row: this.end.row,
              column: this.end.column + a
            };
          }, A;
        }()
      );
      R.FoldLine = S;
    }), ace.define("ace/range_list", ["require", "exports", "module", "ace/range"], function(w, R, N) {
      var b = w("./range").Range, S = b.comparePoints, A = (
        /** @class */
        function() {
          function a() {
            this.ranges = [], this.$bias = 1;
          }
          return a.prototype.pointIndex = function(c, n, r) {
            for (var i = this.ranges, t = r || 0; t < i.length; t++) {
              var e = i[t], o = S(c, e.end);
              if (!(o > 0)) {
                var s = S(c, e.start);
                return o === 0 ? n && s !== 0 ? -t - 2 : t : s > 0 || s === 0 && !n ? t : -t - 1;
              }
            }
            return -t - 1;
          }, a.prototype.add = function(c) {
            var n = !c.isEmpty(), r = this.pointIndex(c.start, n);
            r < 0 && (r = -r - 1);
            var i = this.pointIndex(c.end, n, r);
            return i < 0 ? i = -i - 1 : i++, this.ranges.splice(r, i - r, c);
          }, a.prototype.addList = function(c) {
            for (var n = [], r = c.length; r--; )
              n.push.apply(n, this.add(c[r]));
            return n;
          }, a.prototype.substractPoint = function(c) {
            var n = this.pointIndex(c);
            if (n >= 0)
              return this.ranges.splice(n, 1);
          }, a.prototype.merge = function() {
            var c = [], n = this.ranges;
            n = n.sort(function(o, s) {
              return S(o.start, s.start);
            });
            for (var r = n[0], i, t = 1; t < n.length; t++) {
              i = r, r = n[t];
              var e = S(i.end, r.start);
              e < 0 || e == 0 && !i.isEmpty() && !r.isEmpty() || (S(i.end, r.end) < 0 && (i.end.row = r.end.row, i.end.column = r.end.column), n.splice(t, 1), c.push(r), r = i, t--);
            }
            return this.ranges = n, c;
          }, a.prototype.contains = function(c, n) {
            return this.pointIndex({ row: c, column: n }) >= 0;
          }, a.prototype.containsPoint = function(c) {
            return this.pointIndex(c) >= 0;
          }, a.prototype.rangeAtPoint = function(c) {
            var n = this.pointIndex(c);
            if (n >= 0)
              return this.ranges[n];
          }, a.prototype.clipRows = function(c, n) {
            var r = this.ranges;
            if (r[0].start.row > n || r[r.length - 1].start.row < c)
              return [];
            var i = this.pointIndex({ row: c, column: 0 });
            i < 0 && (i = -i - 1);
            var t = this.pointIndex({ row: n, column: 0 }, i);
            t < 0 && (t = -t - 1);
            for (var e = [], o = i; o < t; o++)
              e.push(r[o]);
            return e;
          }, a.prototype.removeAll = function() {
            return this.ranges.splice(0, this.ranges.length);
          }, a.prototype.attach = function(c) {
            this.session && this.detach(), this.session = c, this.onChange = this.$onChange.bind(this), this.session.on("change", this.onChange);
          }, a.prototype.detach = function() {
            this.session && (this.session.removeListener("change", this.onChange), this.session = null);
          }, a.prototype.$onChange = function(c) {
            for (var n = c.start, r = c.end, i = n.row, t = r.row, e = this.ranges, o = 0, s = e.length; o < s; o++) {
              var l = e[o];
              if (l.end.row >= i)
                break;
            }
            if (c.action == "insert")
              for (var u = t - i, C = -n.column + r.column; o < s; o++) {
                var l = e[o];
                if (l.start.row > i)
                  break;
                if (l.start.row == i && l.start.column >= n.column && (l.start.column == n.column && this.$bias <= 0 || (l.start.column += C, l.start.row += u)), l.end.row == i && l.end.column >= n.column) {
                  if (l.end.column == n.column && this.$bias < 0)
                    continue;
                  l.end.column == n.column && C > 0 && o < s - 1 && l.end.column > l.start.column && l.end.column == e[o + 1].start.column && (l.end.column -= C), l.end.column += C, l.end.row += u;
                }
              }
            else
              for (var u = i - t, C = n.column - r.column; o < s; o++) {
                var l = e[o];
                if (l.start.row > t)
                  break;
                l.end.row < t && (i < l.end.row || i == l.end.row && n.column < l.end.column) ? (l.end.row = i, l.end.column = n.column) : l.end.row == t ? l.end.column <= r.column ? (u || l.end.column > n.column) && (l.end.column = n.column, l.end.row = n.row) : (l.end.column += C, l.end.row += u) : l.end.row > t && (l.end.row += u), l.start.row < t && (i < l.start.row || i == l.start.row && n.column < l.start.column) ? (l.start.row = i, l.start.column = n.column) : l.start.row == t ? l.start.column <= r.column ? (u || l.start.column > n.column) && (l.start.column = n.column, l.start.row = n.row) : (l.start.column += C, l.start.row += u) : l.start.row > t && (l.start.row += u);
              }
            if (u != 0 && o < s)
              for (; o < s; o++) {
                var l = e[o];
                l.start.row += u, l.end.row += u;
              }
          }, a;
        }()
      );
      A.prototype.comparePoints = S, R.RangeList = A;
    }), ace.define("ace/edit_session/fold", ["require", "exports", "module", "ace/range_list"], function(w, R, N) {
      var b = this && this.__extends || /* @__PURE__ */ function() {
        var i = function(t, e) {
          return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, s) {
            o.__proto__ = s;
          } || function(o, s) {
            for (var l in s) Object.prototype.hasOwnProperty.call(s, l) && (o[l] = s[l]);
          }, i(t, e);
        };
        return function(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
          i(t, e);
          function o() {
            this.constructor = t;
          }
          t.prototype = e === null ? Object.create(e) : (o.prototype = e.prototype, new o());
        };
      }(), S = w("../range_list").RangeList, A = (
        /** @class */
        function(i) {
          b(t, i);
          function t(e, o) {
            var s = i.call(this) || this;
            return s.foldLine = null, s.placeholder = o, s.range = e, s.start = e.start, s.end = e.end, s.sameRow = e.start.row == e.end.row, s.subFolds = s.ranges = [], s;
          }
          return t.prototype.toString = function() {
            return '"' + this.placeholder + '" ' + this.range.toString();
          }, t.prototype.setFoldLine = function(e) {
            this.foldLine = e, this.subFolds.forEach(function(o) {
              o.setFoldLine(e);
            });
          }, t.prototype.clone = function() {
            var e = this.range.clone(), o = new t(e, this.placeholder);
            return this.subFolds.forEach(function(s) {
              o.subFolds.push(s.clone());
            }), o.collapseChildren = this.collapseChildren, o;
          }, t.prototype.addSubFold = function(e) {
            if (!this.range.isEqual(e)) {
              c(e, this.start);
              for (var C = e.start.row, p = e.start.column, o = 0, s = -1; o < this.subFolds.length && (s = this.subFolds[o].range.compare(C, p), s == 1); o++)
                ;
              var l = this.subFolds[o], u = 0;
              if (s == 0) {
                if (l.range.containsRange(e))
                  return l.addSubFold(e);
                u = 1;
              }
              for (var C = e.range.end.row, p = e.range.end.column, f = o, s = -1; f < this.subFolds.length && (s = this.subFolds[f].range.compare(C, p), s == 1); f++)
                ;
              s == 0 && f++;
              for (var g = this.subFolds.splice(o, f - o, e), v = s == 0 ? g.length - 1 : g.length, M = u; M < v; M++)
                e.addSubFold(g[M]);
              return e.setFoldLine(this.foldLine), e;
            }
          }, t.prototype.restoreRange = function(e) {
            return r(e, this.start);
          }, t;
        }(S)
      );
      function a(i, t) {
        i.row -= t.row, i.row == 0 && (i.column -= t.column);
      }
      function c(i, t) {
        a(i.start, t), a(i.end, t);
      }
      function n(i, t) {
        i.row == 0 && (i.column += t.column), i.row += t.row;
      }
      function r(i, t) {
        n(i.start, t), n(i.end, t);
      }
      R.Fold = A;
    }), ace.define("ace/edit_session/folding", ["require", "exports", "module", "ace/range", "ace/edit_session/fold_line", "ace/edit_session/fold", "ace/token_iterator", "ace/mouse/mouse_event"], function(w, R, N) {
      var b = w("../range").Range, S = w("./fold_line").FoldLine, A = w("./fold").Fold, a = w("../token_iterator").TokenIterator, c = w("../mouse/mouse_event").MouseEvent;
      function n() {
        this.getFoldAt = function(r, i, t) {
          var e = this.getFoldLine(r);
          if (!e)
            return null;
          for (var o = e.folds, s = 0; s < o.length; s++) {
            var l = o[s].range;
            if (l.contains(r, i)) {
              if (t == 1 && l.isEnd(r, i) && !l.isEmpty())
                continue;
              if (t == -1 && l.isStart(r, i) && !l.isEmpty())
                continue;
              return o[s];
            }
          }
        }, this.getFoldsInRange = function(r) {
          var i = r.start, t = r.end, e = this.$foldData, o = [];
          i.column += 1, t.column -= 1;
          for (var s = 0; s < e.length; s++) {
            var l = e[s].range.compareRange(r);
            if (l != 2) {
              if (l == -2)
                break;
              for (var u = e[s].folds, C = 0; C < u.length; C++) {
                var p = u[C];
                if (l = p.range.compareRange(r), l == -2)
                  break;
                if (l == 2)
                  continue;
                if (l == 42)
                  break;
                o.push(p);
              }
            }
          }
          return i.column -= 1, t.column += 1, o;
        }, this.getFoldsInRangeList = function(r) {
          if (Array.isArray(r)) {
            var i = [];
            r.forEach(function(t) {
              i = i.concat(this.getFoldsInRange(t));
            }, this);
          } else
            var i = this.getFoldsInRange(r);
          return i;
        }, this.getAllFolds = function() {
          for (var r = [], i = this.$foldData, t = 0; t < i.length; t++)
            for (var e = 0; e < i[t].folds.length; e++)
              r.push(i[t].folds[e]);
          return r;
        }, this.getFoldStringAt = function(r, i, t, e) {
          if (e = e || this.getFoldLine(r), !e)
            return null;
          for (var o = {
            end: { column: 0 }
          }, s, l, u = 0; u < e.folds.length; u++) {
            l = e.folds[u];
            var C = l.range.compareEnd(r, i);
            if (C == -1) {
              s = this.getLine(l.start.row).substring(o.end.column, l.start.column);
              break;
            } else if (C === 0)
              return null;
            o = l;
          }
          return s || (s = this.getLine(l.start.row).substring(o.end.column)), t == -1 ? s.substring(0, i - o.end.column) : t == 1 ? s.substring(i - o.end.column) : s;
        }, this.getFoldLine = function(r, i) {
          var t = this.$foldData, e = 0;
          for (i && (e = t.indexOf(i)), e == -1 && (e = 0), e; e < t.length; e++) {
            var o = t[e];
            if (o.start.row <= r && o.end.row >= r)
              return o;
            if (o.end.row > r)
              return null;
          }
          return null;
        }, this.getNextFoldLine = function(r, i) {
          var t = this.$foldData, e = 0;
          for (i && (e = t.indexOf(i)), e == -1 && (e = 0), e; e < t.length; e++) {
            var o = t[e];
            if (o.end.row >= r)
              return o;
          }
          return null;
        }, this.getFoldedRowCount = function(r, i) {
          for (var t = this.$foldData, e = i - r + 1, o = 0; o < t.length; o++) {
            var s = t[o], l = s.end.row, u = s.start.row;
            if (l >= i) {
              u < i && (u >= r ? e -= i - u : e = 0);
              break;
            } else l >= r && (u >= r ? e -= l - u : e -= l - r + 1);
          }
          return e;
        }, this.$addFoldLine = function(r) {
          return this.$foldData.push(r), this.$foldData.sort(function(i, t) {
            return i.start.row - t.start.row;
          }), r;
        }, this.addFold = function(r, i) {
          var t = this.$foldData, e = !1, o;
          r instanceof A ? o = r : (o = new A(i, r), o.collapseChildren = i.collapseChildren), this.$clipRangeToDocument(o.range);
          var s = o.start.row, l = o.start.column, u = o.end.row, C = o.end.column, p = this.getFoldAt(s, l, 1), f = this.getFoldAt(u, C, -1);
          if (p && f == p)
            return p.addSubFold(o);
          p && !p.range.isStart(s, l) && this.removeFold(p), f && !f.range.isEnd(u, C) && this.removeFold(f);
          var g = this.getFoldsInRange(o.range);
          g.length > 0 && (this.removeFolds(g), o.collapseChildren || g.forEach(function(k) {
            o.addSubFold(k);
          }));
          for (var v = 0; v < t.length; v++) {
            var M = t[v];
            if (u == M.start.row) {
              M.addFold(o), e = !0;
              break;
            } else if (s == M.end.row) {
              if (M.addFold(o), e = !0, !o.sameRow) {
                var W = t[v + 1];
                if (W && W.start.row == u) {
                  M.merge(W);
                  break;
                }
              }
              break;
            } else if (u <= M.start.row)
              break;
          }
          return e || (M = this.$addFoldLine(new S(this.$foldData, o))), this.$useWrapMode ? this.$updateWrapData(M.start.row, M.start.row) : this.$updateRowLengthCache(M.start.row, M.start.row), this.$modified = !0, this._signal("changeFold", { data: o, action: "add" }), o;
        }, this.addFolds = function(r) {
          r.forEach(function(i) {
            this.addFold(i);
          }, this);
        }, this.removeFold = function(r) {
          var i = r.foldLine, t = i.start.row, e = i.end.row, o = this.$foldData, s = i.folds;
          if (s.length == 1)
            o.splice(o.indexOf(i), 1);
          else if (i.range.isEnd(r.end.row, r.end.column))
            s.pop(), i.end.row = s[s.length - 1].end.row, i.end.column = s[s.length - 1].end.column;
          else if (i.range.isStart(r.start.row, r.start.column))
            s.shift(), i.start.row = s[0].start.row, i.start.column = s[0].start.column;
          else if (r.sameRow)
            s.splice(s.indexOf(r), 1);
          else {
            var l = i.split(r.start.row, r.start.column);
            s = l.folds, s.shift(), l.start.row = s[0].start.row, l.start.column = s[0].start.column;
          }
          this.$updating || (this.$useWrapMode ? this.$updateWrapData(t, e) : this.$updateRowLengthCache(t, e)), this.$modified = !0, this._signal("changeFold", { data: r, action: "remove" });
        }, this.removeFolds = function(r) {
          for (var i = [], t = 0; t < r.length; t++)
            i.push(r[t]);
          i.forEach(function(e) {
            this.removeFold(e);
          }, this), this.$modified = !0;
        }, this.expandFold = function(r) {
          this.removeFold(r), r.subFolds.forEach(function(i) {
            r.restoreRange(i), this.addFold(i);
          }, this), r.collapseChildren > 0 && this.foldAll(r.start.row + 1, r.end.row, r.collapseChildren - 1), r.subFolds = [];
        }, this.expandFolds = function(r) {
          r.forEach(function(i) {
            this.expandFold(i);
          }, this);
        }, this.unfold = function(r, i) {
          var t, e;
          if (r == null)
            t = new b(0, 0, this.getLength(), 0), i == null && (i = !0);
          else if (typeof r == "number")
            t = new b(r, 0, r, this.getLine(r).length);
          else if ("row" in r)
            t = b.fromPoints(r, r);
          else {
            if (Array.isArray(r))
              return e = [], r.forEach(function(s) {
                e = e.concat(this.unfold(s));
              }, this), e;
            t = r;
          }
          e = this.getFoldsInRangeList(t);
          for (var o = e; e.length == 1 && b.comparePoints(e[0].start, t.start) < 0 && b.comparePoints(e[0].end, t.end) > 0; )
            this.expandFolds(e), e = this.getFoldsInRangeList(t);
          if (i != !1 ? this.removeFolds(e) : this.expandFolds(e), o.length)
            return o;
        }, this.isRowFolded = function(r, i) {
          return !!this.getFoldLine(r, i);
        }, this.getRowFoldEnd = function(r, i) {
          var t = this.getFoldLine(r, i);
          return t ? t.end.row : r;
        }, this.getRowFoldStart = function(r, i) {
          var t = this.getFoldLine(r, i);
          return t ? t.start.row : r;
        }, this.getFoldDisplayLine = function(r, i, t, e, o) {
          e == null && (e = r.start.row), o == null && (o = 0), i == null && (i = r.end.row), t == null && (t = this.getLine(i).length);
          var s = this.doc, l = "";
          return r.walk(function(u, C, p, f) {
            if (!(C < e)) {
              if (C == e) {
                if (p < o)
                  return;
                f = Math.max(o, f);
              }
              u != null ? l += u : l += s.getLine(C).substring(f, p);
            }
          }, i, t), l;
        }, this.getDisplayLine = function(r, i, t, e) {
          var o = this.getFoldLine(r);
          if (o)
            return this.getFoldDisplayLine(o, r, i, t, e);
          var s;
          return s = this.doc.getLine(r), s.substring(e || 0, i || s.length);
        }, this.$cloneFoldData = function() {
          var r = [];
          return r = this.$foldData.map(function(i) {
            var t = i.folds.map(function(e) {
              return e.clone();
            });
            return new S(r, t);
          }), r;
        }, this.toggleFold = function(r) {
          var i = this.selection, t = i.getRange(), e, o;
          if (t.isEmpty()) {
            var s = t.start;
            if (e = this.getFoldAt(s.row, s.column), e) {
              this.expandFold(e);
              return;
            } else if (r) {
              var l = this.getFoldLine(s.row);
              l && this.expandFolds(l.folds);
              return;
            } else (o = this.findMatchingBracket(s)) ? t.comparePoint(o) == 1 ? t.end = o : (t.start = o, t.start.column++, t.end.column--) : (o = this.findMatchingBracket({ row: s.row, column: s.column + 1 })) ? (t.comparePoint(o) == 1 ? t.end = o : t.start = o, t.start.column++) : t = this.getCommentFoldRange(s.row, s.column) || t;
          } else {
            var u = this.getFoldsInRange(t);
            if (r && u.length) {
              this.expandFolds(u);
              return;
            } else u.length == 1 && (e = u[0]);
          }
          if (e || (e = this.getFoldAt(t.start.row, t.start.column)), e && e.range.toString() == t.toString()) {
            this.expandFold(e);
            return;
          }
          var C = "...";
          if (!t.isMultiLine()) {
            if (C = this.getTextRange(t), C.length < 4)
              return;
            C = C.trim().substring(0, 2) + "..";
          }
          this.addFold(C, t);
        }, this.getCommentFoldRange = function(r, i, t) {
          var e = new a(this, r, i), o = e.getCurrentToken(), s = o && o.type;
          if (o && /^comment|string/.test(s)) {
            s = s.match(/comment|string/)[0], s == "comment" && (s += "|doc-start|\\.doc");
            var l = new RegExp(s), u = new b();
            if (t != 1) {
              do
                o = e.stepBackward();
              while (o && l.test(o.type));
              o = e.stepForward();
            }
            u.start.row = e.getCurrentTokenRow(), u.start.column = e.getCurrentTokenColumn() + o.value.length, e = new a(this, r, i);
            var C = this.getState(e.$row);
            if (t != -1) {
              var p = -1;
              do
                if (o = e.stepForward(), p == -1) {
                  var f = this.getState(e.$row);
                  C.toString() !== f.toString() && (p = e.$row);
                } else if (e.$row > p)
                  break;
              while (o && l.test(o.type));
              o = e.stepBackward();
            } else
              o = e.getCurrentToken();
            return u.end.row = e.getCurrentTokenRow(), u.end.column = e.getCurrentTokenColumn(), u.start.row == u.end.row && u.start.column > u.end.column ? void 0 : u;
          }
        }, this.foldAll = function(r, i, t, e) {
          t == null && (t = 1e5);
          var o = this.foldWidgets;
          if (o) {
            i = i || this.getLength(), r = r || 0;
            for (var s = r; s < i; s++)
              if (o[s] == null && (o[s] = this.getFoldWidget(s)), o[s] == "start" && !(e && !e(s))) {
                var l = this.getFoldWidgetRange(s);
                l && l.isMultiLine() && l.end.row <= i && l.start.row >= r && (s = l.end.row, l.collapseChildren = t, this.addFold("...", l));
              }
          }
        }, this.foldToLevel = function(r) {
          for (this.foldAll(); r-- > 0; )
            this.unfold(null, !1);
        }, this.foldAllComments = function() {
          var r = this;
          this.foldAll(null, null, null, function(i) {
            for (var t = r.getTokens(i), e = 0; e < t.length; e++) {
              var o = t[e];
              if (!(o.type == "text" && /^\s+$/.test(o.value)))
                return !!/comment/.test(o.type);
            }
          });
        }, this.$foldStyles = {
          manual: 1,
          markbegin: 1,
          markbeginend: 1
        }, this.$foldStyle = "markbegin", this.setFoldStyle = function(r) {
          if (!this.$foldStyles[r])
            throw new Error("invalid fold style: " + r + "[" + Object.keys(this.$foldStyles).join(", ") + "]");
          if (this.$foldStyle != r) {
            this.$foldStyle = r, r == "manual" && this.unfold();
            var i = this.$foldMode;
            this.$setFolding(null), this.$setFolding(i);
          }
        }, this.$setFolding = function(r) {
          if (this.$foldMode != r) {
            if (this.$foldMode = r, this.off("change", this.$updateFoldWidgets), this.off("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets), this._signal("changeAnnotation"), !r || this.$foldStyle == "manual") {
              this.foldWidgets = null;
              return;
            }
            this.foldWidgets = [], this.getFoldWidget = r.getFoldWidget.bind(r, this, this.$foldStyle), this.getFoldWidgetRange = r.getFoldWidgetRange.bind(r, this, this.$foldStyle), this.$updateFoldWidgets = this.updateFoldWidgets.bind(this), this.$tokenizerUpdateFoldWidgets = this.tokenizerUpdateFoldWidgets.bind(this), this.on("change", this.$updateFoldWidgets), this.on("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets);
          }
        }, this.getParentFoldRangeData = function(r, i) {
          var t = this.foldWidgets;
          if (!t || i && t[r])
            return {};
          for (var e = r - 1, o; e >= 0; ) {
            var s = t[e];
            if (s == null && (s = t[e] = this.getFoldWidget(e)), s == "start") {
              var l = this.getFoldWidgetRange(e);
              if (o || (o = l), l && l.end.row >= r)
                break;
            }
            e--;
          }
          return {
            range: e !== -1 && l,
            firstRange: o
          };
        }, this.onFoldWidgetClick = function(r, i) {
          i instanceof c && (i = i.domEvent);
          var t = {
            children: i.shiftKey,
            all: i.ctrlKey || i.metaKey,
            siblings: i.altKey
          }, e = this.$toggleFoldWidget(r, t);
          if (!e) {
            var o = i.target || i.srcElement;
            o && /ace_fold-widget/.test(o.className) && (o.className += " ace_invalid");
          }
        }, this.$toggleFoldWidget = function(r, i) {
          if (this.getFoldWidget) {
            var t = this.getFoldWidget(r), e = this.getLine(r), o = t === "end" ? -1 : 1, s = this.getFoldAt(r, o === -1 ? 0 : e.length, o);
            if (s)
              return i.children || i.all ? this.removeFold(s) : this.expandFold(s), s;
            var l = this.getFoldWidgetRange(r, !0);
            if (l && !l.isMultiLine() && (s = this.getFoldAt(l.start.row, l.start.column, 1), s && l.isEqual(s.range)))
              return this.removeFold(s), s;
            if (i.siblings) {
              var u = this.getParentFoldRangeData(r);
              if (u.range)
                var C = u.range.start.row + 1, p = u.range.end.row;
              this.foldAll(C, p, i.all ? 1e4 : 0);
            } else i.children ? (p = l ? l.end.row : this.getLength(), this.foldAll(r + 1, p, i.all ? 1e4 : 0)) : l && (i.all && (l.collapseChildren = 1e4), this.addFold("...", l));
            return l;
          }
        }, this.toggleFoldWidget = function(r) {
          var i = this.selection.getCursor().row;
          i = this.getRowFoldStart(i);
          var t = this.$toggleFoldWidget(i, {});
          if (!t) {
            var e = this.getParentFoldRangeData(i, !0);
            if (t = e.range || e.firstRange, t) {
              i = t.start.row;
              var o = this.getFoldAt(i, this.getLine(i).length, 1);
              o ? this.removeFold(o) : this.addFold("...", t);
            }
          }
        }, this.updateFoldWidgets = function(r) {
          var i = r.start.row, t = r.end.row - i;
          if (t === 0)
            this.foldWidgets[i] = null;
          else if (r.action == "remove")
            this.foldWidgets.splice(i, t + 1, null);
          else {
            var e = Array(t + 1);
            e.unshift(i, 1), this.foldWidgets.splice.apply(this.foldWidgets, e);
          }
        }, this.tokenizerUpdateFoldWidgets = function(r) {
          var i = r.data;
          i.first != i.last && this.foldWidgets.length > i.first && this.foldWidgets.splice(i.first, this.foldWidgets.length);
        };
      }
      R.Folding = n;
    }), ace.define("ace/edit_session/bracket_match", ["require", "exports", "module", "ace/token_iterator", "ace/range"], function(w, R, N) {
      var b = w("../token_iterator").TokenIterator, S = w("../range").Range;
      function A() {
        this.findMatchingBracket = function(a, c) {
          if (a.column == 0)
            return null;
          var n = c || this.getLine(a.row).charAt(a.column - 1);
          if (n == "")
            return null;
          var r = n.match(/([\(\[\{])|([\)\]\}])/);
          return r ? r[1] ? this.$findClosingBracket(r[1], a) : this.$findOpeningBracket(r[2], a) : null;
        }, this.getBracketRange = function(a) {
          var c = this.getLine(a.row), n = !0, r, i = c.charAt(a.column - 1), t = i && i.match(/([\(\[\{])|([\)\]\}])/);
          if (t || (i = c.charAt(a.column), a = { row: a.row, column: a.column + 1 }, t = i && i.match(/([\(\[\{])|([\)\]\}])/), n = !1), !t)
            return null;
          if (t[1]) {
            var e = this.$findClosingBracket(t[1], a);
            if (!e)
              return null;
            r = S.fromPoints(a, e), n || (r.end.column++, r.start.column--), r.cursor = r.end;
          } else {
            var e = this.$findOpeningBracket(t[2], a);
            if (!e)
              return null;
            r = S.fromPoints(e, a), n || (r.start.column++, r.end.column--), r.cursor = r.start;
          }
          return r;
        }, this.getMatchingBracketRanges = function(a, c) {
          var n = this.getLine(a.row), r = /([\(\[\{])|([\)\]\}])/, i = !c && n.charAt(a.column - 1), t = i && i.match(r);
          if (t || (i = (c === void 0 || c) && n.charAt(a.column), a = {
            row: a.row,
            column: a.column + 1
          }, t = i && i.match(r)), !t)
            return null;
          var e = new S(a.row, a.column - 1, a.row, a.column), o = t[1] ? this.$findClosingBracket(t[1], a) : this.$findOpeningBracket(t[2], a);
          if (!o)
            return [e];
          var s = new S(o.row, o.column, o.row, o.column + 1);
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
        }, this.$findOpeningBracket = function(a, c, n) {
          var r = this.$brackets[a], i = 1, t = new b(this, c.row, c.column), e = t.getCurrentToken();
          if (e || (e = t.stepForward()), !!e) {
            n || (n = new RegExp("(\\.?" + e.type.replace(".", "\\.").replace("rparen", ".paren").replace(/\b(?:end)\b/, "(?:start|begin|end)").replace(/-close\b/, "-(close|open)") + ")+"));
            for (var o = c.column - t.getCurrentTokenColumn() - 2, s = e.value; ; ) {
              for (; o >= 0; ) {
                var l = s.charAt(o);
                if (l == r) {
                  if (i -= 1, i == 0)
                    return {
                      row: t.getCurrentTokenRow(),
                      column: o + t.getCurrentTokenColumn()
                    };
                } else l == a && (i += 1);
                o -= 1;
              }
              do
                e = t.stepBackward();
              while (e && !n.test(e.type));
              if (e == null)
                break;
              s = e.value, o = s.length - 1;
            }
            return null;
          }
        }, this.$findClosingBracket = function(a, c, n) {
          var r = this.$brackets[a], i = 1, t = new b(this, c.row, c.column), e = t.getCurrentToken();
          if (e || (e = t.stepForward()), !!e) {
            n || (n = new RegExp("(\\.?" + e.type.replace(".", "\\.").replace("lparen", ".paren").replace(/\b(?:start|begin)\b/, "(?:start|begin|end)").replace(/-open\b/, "-(close|open)") + ")+"));
            for (var o = c.column - t.getCurrentTokenColumn(); ; ) {
              for (var s = e.value, l = s.length; o < l; ) {
                var u = s.charAt(o);
                if (u == r) {
                  if (i -= 1, i == 0)
                    return {
                      row: t.getCurrentTokenRow(),
                      column: o + t.getCurrentTokenColumn()
                    };
                } else u == a && (i += 1);
                o += 1;
              }
              do
                e = t.stepForward();
              while (e && !n.test(e.type));
              if (e == null)
                break;
              o = 0;
            }
            return null;
          }
        }, this.getMatchingTags = function(a) {
          var c = new b(this, a.row, a.column), n = this.$findTagName(c);
          if (n) {
            var r = c.stepBackward();
            return r.value === "<" ? this.$findClosingTag(c, n) : this.$findOpeningTag(c, n);
          }
        }, this.$findTagName = function(a) {
          var c = a.getCurrentToken(), n = !1, r = !1;
          if (c && c.type.indexOf("tag-name") === -1)
            do
              r ? c = a.stepBackward() : c = a.stepForward(), c && (c.value === "/>" ? r = !0 : c.type.indexOf("tag-name") !== -1 && (n = !0));
            while (c && !n);
          return c;
        }, this.$findClosingTag = function(a, c) {
          var n, r = c.value, i = c.value, t = 0, e = new S(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 1);
          c = a.stepForward();
          var o = new S(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + c.value.length), s = !1;
          do {
            if (n = c, n.type.indexOf("tag-close") !== -1 && !s) {
              var l = new S(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 1);
              s = !0;
            }
            if (c = a.stepForward(), c) {
              if (c.value === ">" && !s) {
                var l = new S(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 1);
                s = !0;
              }
              if (c.type.indexOf("tag-name") !== -1) {
                if (r = c.value, i === r) {
                  if (n.value === "<")
                    t++;
                  else if (n.value === "</" && (t--, t < 0)) {
                    a.stepBackward();
                    var u = new S(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 2);
                    c = a.stepForward();
                    var C = new S(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + c.value.length);
                    if (c.type.indexOf("tag-close") === -1 && (c = a.stepForward()), c && c.value === ">")
                      var p = new S(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 1);
                    else
                      return;
                  }
                }
              } else if (i === r && c.value === "/>" && (t--, t < 0))
                var u = new S(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 2), C = u, p = C, l = new S(o.end.row, o.end.column, o.end.row, o.end.column + 1);
            }
          } while (c && t >= 0);
          if (e && l && u && p && o && C)
            return {
              openTag: new S(e.start.row, e.start.column, l.end.row, l.end.column),
              closeTag: new S(u.start.row, u.start.column, p.end.row, p.end.column),
              openTagName: o,
              closeTagName: C
            };
        }, this.$findOpeningTag = function(a, c) {
          var n = a.getCurrentToken(), r = c.value, i = 0, t = a.getCurrentTokenRow(), e = a.getCurrentTokenColumn(), o = e + 2, s = new S(t, e, t, o);
          a.stepForward();
          var l = new S(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + c.value.length);
          if (c.type.indexOf("tag-close") === -1 && (c = a.stepForward()), !(!c || c.value !== ">")) {
            var u = new S(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 1);
            a.stepBackward(), a.stepBackward();
            do
              if (c = n, t = a.getCurrentTokenRow(), e = a.getCurrentTokenColumn(), o = e + c.value.length, n = a.stepBackward(), c) {
                if (c.type.indexOf("tag-name") !== -1) {
                  if (r === c.value)
                    if (n.value === "<") {
                      if (i++, i > 0) {
                        var C = new S(t, e, t, o), p = new S(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 1);
                        do
                          c = a.stepForward();
                        while (c && c.value !== ">");
                        var f = new S(a.getCurrentTokenRow(), a.getCurrentTokenColumn(), a.getCurrentTokenRow(), a.getCurrentTokenColumn() + 1);
                      }
                    } else n.value === "</" && i--;
                } else if (c.value === "/>") {
                  for (var g = 0, v = n; v; ) {
                    if (v.type.indexOf("tag-name") !== -1 && v.value === r) {
                      i--;
                      break;
                    } else if (v.value === "<")
                      break;
                    v = a.stepBackward(), g++;
                  }
                  for (var M = 0; M < g; M++)
                    a.stepForward();
                }
              }
            while (n && i <= 0);
            if (p && f && s && u && C && l)
              return {
                openTag: new S(p.start.row, p.start.column, f.end.row, f.end.column),
                closeTag: new S(s.start.row, s.start.column, u.end.row, u.end.column),
                openTagName: C,
                closeTagName: l
              };
          }
        };
      }
      R.BracketMatch = A;
    }), ace.define("ace/edit_session", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/bidihandler", "ace/config", "ace/lib/event_emitter", "ace/selection", "ace/mode/text", "ace/range", "ace/line_widgets", "ace/document", "ace/background_tokenizer", "ace/search_highlight", "ace/undomanager", "ace/edit_session/folding", "ace/edit_session/bracket_match"], function(w, R, N) {
      var b = w("./lib/oop"), S = w("./lib/lang"), A = w("./bidihandler").BidiHandler, a = w("./config"), c = w("./lib/event_emitter").EventEmitter, n = w("./selection").Selection, r = w("./mode/text").Mode, i = w("./range").Range, t = w("./line_widgets").LineWidgets, e = w("./document").Document, o = w("./background_tokenizer").BackgroundTokenizer, s = w("./search_highlight").SearchHighlight, l = w("./undomanager").UndoManager, u = (
        /** @class */
        function() {
          function y(I, d) {
            this.doc, this.$breakpoints = [], this.$decorations = [], this.$frontMarkers = {}, this.$backMarkers = {}, this.$markerId = 1, this.$undoSelect = !0, this.$editor = null, this.prevOp = {}, this.$foldData = [], this.id = "session" + ++y.$uid, this.$foldData.toString = function() {
              return this.join(`
`);
            }, this.$gutterCustomWidgets = {}, this.bgTokenizer = new o(new r().getTokenizer(), this);
            var h = this;
            this.bgTokenizer.on("update", function(m) {
              h._signal("tokenizerUpdate", m);
            }), this.on("changeFold", this.onChangeFold.bind(this)), this.$onChange = this.onChange.bind(this), (typeof I != "object" || !I.getLine) && (I = new e(
              /**@type{string}*/
              I
            )), this.setDocument(I), this.selection = new n(this), this.$onSelectionChange = this.onSelectionChange.bind(this), this.selection.on("changeSelection", this.$onSelectionChange), this.selection.on("changeCursor", this.$onSelectionChange), this.$bidiHandler = new A(this), a.resetOptions(this), this.setMode(d), a._signal("session", this), this.destroyed = !1, this.$initOperationListeners();
          }
          return y.prototype.$initOperationListeners = function() {
            var I = this;
            this.curOp = null, this.on("change", function() {
              I.curOp || (I.startOperation(), I.curOp.selectionBefore = I.$lastSel), I.curOp.docChanged = !0;
            }, !0), this.on("changeSelection", function() {
              I.curOp || (I.startOperation(), I.curOp.selectionBefore = I.$lastSel), I.curOp.selectionChanged = !0;
            }, !0), this.$operationResetTimer = S.delayedCall(this.endOperation.bind(this, !0));
          }, y.prototype.startOperation = function(I) {
            if (this.curOp) {
              if (!I || this.curOp.command)
                return;
              this.prevOp = this.curOp;
            }
            I || (I = {}), this.$operationResetTimer.schedule(), this.curOp = {
              command: I.command || {},
              args: I.args
            }, this.curOp.selectionBefore = this.selection.toJSON(), this._signal("startOperation", I);
          }, y.prototype.endOperation = function(I) {
            if (this.curOp) {
              if (I && I.returnValue === !1) {
                this.curOp = null, this._signal("endOperation", I);
                return;
              }
              if (I == !0 && this.curOp.command && this.curOp.command.name == "mouse")
                return;
              var d = this.selection.toJSON();
              this.curOp.selectionAfter = d, this.$lastSel = this.selection.toJSON(), this.getUndoManager().addSelection(d), this._signal("beforeEndOperation"), this.prevOp = this.curOp, this.curOp = null, this._signal("endOperation", I);
            }
          }, y.prototype.setDocument = function(I) {
            this.doc && this.doc.off("change", this.$onChange), this.doc = I, I.on("change", this.$onChange, !0), this.bgTokenizer.setDocument(this.getDocument()), this.resetCaches();
          }, y.prototype.getDocument = function() {
            return this.doc;
          }, Object.defineProperty(y.prototype, "widgetManager", {
            get: function() {
              var I = new t(this);
              return this.widgetManager = I, this.$editor && I.attach(this.$editor), I;
            },
            set: function(I) {
              Object.defineProperty(this, "widgetManager", {
                writable: !0,
                enumerable: !0,
                configurable: !0,
                value: I
              });
            },
            enumerable: !1,
            configurable: !0
          }), y.prototype.$resetRowCache = function(I) {
            if (!I) {
              this.$docRowCache = [], this.$screenRowCache = [];
              return;
            }
            var d = this.$docRowCache.length, h = this.$getRowCacheIndex(this.$docRowCache, I) + 1;
            d > h && (this.$docRowCache.splice(h, d), this.$screenRowCache.splice(h, d));
          }, y.prototype.$getRowCacheIndex = function(I, d) {
            for (var h = 0, m = I.length - 1; h <= m; ) {
              var x = h + m >> 1, $ = I[x];
              if (d > $)
                h = x + 1;
              else if (d < $)
                m = x - 1;
              else
                return x;
            }
            return h - 1;
          }, y.prototype.resetCaches = function() {
            this.$modified = !0, this.$wrapData = [], this.$rowLengthCache = [], this.$resetRowCache(0), this.destroyed || this.bgTokenizer.start(0);
          }, y.prototype.onChangeFold = function(I) {
            var d = I.data;
            this.$resetRowCache(d.start.row);
          }, y.prototype.onChange = function(I) {
            this.$modified = !0, this.$bidiHandler.onChange(I), this.$resetRowCache(I.start.row);
            var d = this.$updateInternalDataOnChange(I);
            !this.$fromUndo && this.$undoManager && (d && d.length && (this.$undoManager.add({
              action: "removeFolds",
              folds: d
            }, this.mergeUndoDeltas), this.mergeUndoDeltas = !0), this.$undoManager.add(I, this.mergeUndoDeltas), this.mergeUndoDeltas = !0, this.$informUndoManager.schedule()), this.bgTokenizer.$updateOnChange(I), this._signal("change", I);
          }, y.prototype.onSelectionChange = function() {
            this._signal("changeSelection");
          }, y.prototype.setValue = function(I) {
            this.doc.setValue(I), this.selection.moveTo(0, 0), this.$resetRowCache(0), this.setUndoManager(this.$undoManager), this.getUndoManager().reset();
          }, y.fromJSON = function(I) {
            typeof I == "string" && (I = JSON.parse(I));
            var d = new l();
            d.$undoStack = I.history.undo, d.$redoStack = I.history.redo, d.mark = I.history.mark, d.$rev = I.history.rev;
            var h = new y(I.value);
            return I.folds.forEach(function(m) {
              h.addFold("...", i.fromPoints(m.start, m.end));
            }), h.setAnnotations(I.annotations), h.setBreakpoints(I.breakpoints), h.setMode(I.mode), h.setScrollLeft(I.scrollLeft), h.setScrollTop(I.scrollTop), h.setUndoManager(d), h.selection.fromJSON(I.selection), h;
          }, y.prototype.toJSON = function() {
            return {
              annotations: this.$annotations,
              breakpoints: this.$breakpoints,
              folds: this.getAllFolds().map(function(I) {
                return I.range;
              }),
              history: this.getUndoManager(),
              mode: this.$mode.$id,
              scrollLeft: this.$scrollLeft,
              scrollTop: this.$scrollTop,
              selection: this.selection.toJSON(),
              value: this.doc.getValue()
            };
          }, y.prototype.toString = function() {
            return this.doc.getValue();
          }, y.prototype.getSelection = function() {
            return this.selection;
          }, y.prototype.getState = function(I) {
            return this.bgTokenizer.getState(I);
          }, y.prototype.getTokens = function(I) {
            return this.bgTokenizer.getTokens(I);
          }, y.prototype.getTokenAt = function(I, d) {
            var h = this.bgTokenizer.getTokens(I), m, x = 0;
            if (d == null) {
              var $ = h.length - 1;
              x = this.getLine(I).length;
            } else
              for (var $ = 0; $ < h.length && (x += h[$].value.length, !(x >= d)); $++)
                ;
            return m = h[$], m ? (m.index = $, m.start = x - m.value.length, m) : null;
          }, y.prototype.setUndoManager = function(I) {
            if (this.$undoManager = I, this.$informUndoManager && this.$informUndoManager.cancel(), I) {
              var d = this;
              I.addSession(this), this.$syncInformUndoManager = function() {
                d.$informUndoManager.cancel(), d.mergeUndoDeltas = !1;
              }, this.$informUndoManager = S.delayedCall(this.$syncInformUndoManager);
            } else
              this.$syncInformUndoManager = function() {
              };
          }, y.prototype.markUndoGroup = function() {
            this.$syncInformUndoManager && this.$syncInformUndoManager();
          }, y.prototype.getUndoManager = function() {
            return this.$undoManager || this.$defaultUndoManager;
          }, y.prototype.getTabString = function() {
            return this.getUseSoftTabs() ? S.stringRepeat(" ", this.getTabSize()) : "	";
          }, y.prototype.setUseSoftTabs = function(I) {
            this.setOption("useSoftTabs", I);
          }, y.prototype.getUseSoftTabs = function() {
            return this.$useSoftTabs && !this.$mode.$indentWithTabs;
          }, y.prototype.setTabSize = function(I) {
            this.setOption("tabSize", I);
          }, y.prototype.getTabSize = function() {
            return this.$tabSize;
          }, y.prototype.isTabStop = function(I) {
            return this.$useSoftTabs && I.column % this.$tabSize === 0;
          }, y.prototype.setNavigateWithinSoftTabs = function(I) {
            this.setOption("navigateWithinSoftTabs", I);
          }, y.prototype.getNavigateWithinSoftTabs = function() {
            return this.$navigateWithinSoftTabs;
          }, y.prototype.setOverwrite = function(I) {
            this.setOption("overwrite", I);
          }, y.prototype.getOverwrite = function() {
            return this.$overwrite;
          }, y.prototype.toggleOverwrite = function() {
            this.setOverwrite(!this.$overwrite);
          }, y.prototype.addGutterDecoration = function(I, d) {
            this.$decorations[I] || (this.$decorations[I] = ""), this.$decorations[I] += " " + d, this._signal("changeBreakpoint", {});
          }, y.prototype.removeGutterCustomWidget = function(I) {
            this.$editor && this.$editor.renderer.$gutterLayer.$removeCustomWidget(I);
          }, y.prototype.addGutterCustomWidget = function(I, d) {
            this.$editor && this.$editor.renderer.$gutterLayer.$addCustomWidget(I, d);
          }, y.prototype.removeGutterDecoration = function(I, d) {
            this.$decorations[I] = (this.$decorations[I] || "").replace(" " + d, ""), this._signal("changeBreakpoint", {});
          }, y.prototype.getBreakpoints = function() {
            return this.$breakpoints;
          }, y.prototype.setBreakpoints = function(I) {
            this.$breakpoints = [];
            for (var d = 0; d < I.length; d++)
              this.$breakpoints[I[d]] = "ace_breakpoint";
            this._signal("changeBreakpoint", {});
          }, y.prototype.clearBreakpoints = function() {
            this.$breakpoints = [], this._signal("changeBreakpoint", {});
          }, y.prototype.setBreakpoint = function(I, d) {
            d === void 0 && (d = "ace_breakpoint"), d ? this.$breakpoints[I] = d : delete this.$breakpoints[I], this._signal("changeBreakpoint", {});
          }, y.prototype.clearBreakpoint = function(I) {
            delete this.$breakpoints[I], this._signal("changeBreakpoint", {});
          }, y.prototype.addMarker = function(I, d, h, m) {
            var x = this.$markerId++, $ = {
              range: I,
              type: h || "line",
              renderer: typeof h == "function" ? h : null,
              clazz: d,
              inFront: !!m,
              id: x
            };
            return m ? (this.$frontMarkers[x] = $, this._signal("changeFrontMarker")) : (this.$backMarkers[x] = $, this._signal("changeBackMarker")), x;
          }, y.prototype.addDynamicMarker = function(I, d) {
            if (I.update) {
              var h = this.$markerId++;
              return I.id = h, I.inFront = !!d, d ? (this.$frontMarkers[h] = I, this._signal("changeFrontMarker")) : (this.$backMarkers[h] = I, this._signal("changeBackMarker")), I;
            }
          }, y.prototype.removeMarker = function(I) {
            var d = this.$frontMarkers[I] || this.$backMarkers[I];
            if (d) {
              var h = d.inFront ? this.$frontMarkers : this.$backMarkers;
              delete h[I], this._signal(d.inFront ? "changeFrontMarker" : "changeBackMarker");
            }
          }, y.prototype.getMarkers = function(I) {
            return I ? this.$frontMarkers : this.$backMarkers;
          }, y.prototype.highlight = function(I) {
            if (!this.$searchHighlight) {
              var d = new s(null, "ace_selected-word", "text");
              this.$searchHighlight = this.addDynamicMarker(d);
            }
            this.$searchHighlight.setRegexp(I);
          }, y.prototype.highlightLines = function(I, d, h, m) {
            typeof d != "number" && (h = d, d = I), h || (h = "ace_step");
            var x = new i(I, 0, d, 1 / 0);
            return x.id = this.addMarker(x, h, "fullLine", m), x;
          }, y.prototype.setAnnotations = function(I) {
            this.$annotations = I, this._signal("changeAnnotation", {});
          }, y.prototype.getAnnotations = function() {
            return this.$annotations || [];
          }, y.prototype.clearAnnotations = function() {
            this.setAnnotations([]);
          }, y.prototype.$detectNewLine = function(I) {
            var d = I.match(/^.*?(\r?\n)/m);
            d ? this.$autoNewLine = d[1] : this.$autoNewLine = `
`;
          }, y.prototype.getWordRange = function(I, d) {
            var h = this.getLine(I), m = !1;
            if (d > 0 && (m = !!h.charAt(d - 1).match(this.tokenRe)), m || (m = !!h.charAt(d).match(this.tokenRe)), m)
              var x = this.tokenRe;
            else if (/^\s+$/.test(h.slice(d - 1, d + 1)))
              var x = /\s/;
            else
              var x = this.nonTokenRe;
            var $ = d;
            if ($ > 0) {
              do
                $--;
              while ($ >= 0 && h.charAt($).match(x));
              $++;
            }
            for (var L = d; L < h.length && h.charAt(L).match(x); )
              L++;
            return new i(I, $, I, L);
          }, y.prototype.getAWordRange = function(I, d) {
            for (var h = this.getWordRange(I, d), m = this.getLine(h.end.row); m.charAt(h.end.column).match(/[ \t]/); )
              h.end.column += 1;
            return h;
          }, y.prototype.setNewLineMode = function(I) {
            this.doc.setNewLineMode(I);
          }, y.prototype.getNewLineMode = function() {
            return this.doc.getNewLineMode();
          }, y.prototype.setUseWorker = function(I) {
            this.setOption("useWorker", I);
          }, y.prototype.getUseWorker = function() {
            return this.$useWorker;
          }, y.prototype.onReloadTokenizer = function(I) {
            var d = I.data;
            this.bgTokenizer.start(d.first), this._signal("tokenizerUpdate", I);
          }, y.prototype.setMode = function(I, d) {
            if (I && typeof I == "object") {
              if (I.getTokenizer)
                return this.$onChangeMode(I);
              var h = I, m = h.path;
            } else
              m = /**@type{string}*/
              I || "ace/mode/text";
            if (this.$modes["ace/mode/text"] || (this.$modes["ace/mode/text"] = new r()), this.$modes[m] && !h) {
              this.$onChangeMode(this.$modes[m]), d && d();
              return;
            }
            this.$modeId = m, a.loadModule(["mode", m], (function(x) {
              if (!this.destroyed) {
                if (this.$modeId !== m)
                  return d && d();
                this.$modes[m] && !h ? this.$onChangeMode(this.$modes[m]) : x && x.Mode && (x = new x.Mode(h), h || (this.$modes[m] = x, x.$id = m), this.$onChangeMode(x)), d && d();
              }
            }).bind(this)), this.$mode || this.$onChangeMode(this.$modes["ace/mode/text"], !0);
          }, y.prototype.$onChangeMode = function(I, d) {
            if (d || (this.$modeId = I.$id), this.$mode !== I) {
              var h = this.$mode;
              this.$mode = I, this.$stopWorker(), this.$useWorker && this.$startWorker();
              var m = I.getTokenizer();
              if (m.on !== void 0) {
                var x = this.onReloadTokenizer.bind(this);
                m.on("update", x);
              }
              this.bgTokenizer.setTokenizer(m), this.bgTokenizer.setDocument(this.getDocument()), this.tokenRe = I.tokenRe, this.nonTokenRe = I.nonTokenRe, d || (I.attachToSession && I.attachToSession(this), this.$options.wrapMethod.set.call(this, this.$wrapMethod), this.$setFolding(I.foldingRules), this.bgTokenizer.start(0), this._emit("changeMode", { oldMode: h, mode: I }));
            }
          }, y.prototype.$stopWorker = function() {
            this.$worker && (this.$worker.terminate(), this.$worker = null);
          }, y.prototype.$startWorker = function() {
            try {
              this.$worker = this.$mode.createWorker(this);
            } catch (I) {
              a.warn("Could not load worker", I), this.$worker = null;
            }
          }, y.prototype.getMode = function() {
            return this.$mode;
          }, y.prototype.setScrollTop = function(I) {
            this.$scrollTop === I || isNaN(I) || (this.$scrollTop = I, this._signal("changeScrollTop", I));
          }, y.prototype.getScrollTop = function() {
            return this.$scrollTop;
          }, y.prototype.setScrollLeft = function(I) {
            this.$scrollLeft === I || isNaN(I) || (this.$scrollLeft = I, this._signal("changeScrollLeft", I));
          }, y.prototype.getScrollLeft = function() {
            return this.$scrollLeft;
          }, y.prototype.getScreenWidth = function() {
            return this.$computeWidth(), this.lineWidgets ? Math.max(this.getLineWidgetMaxWidth(), this.screenWidth) : this.screenWidth;
          }, y.prototype.getLineWidgetMaxWidth = function() {
            if (this.lineWidgetsWidth != null)
              return this.lineWidgetsWidth;
            var I = 0;
            return this.lineWidgets.forEach(function(d) {
              d && d.screenWidth > I && (I = d.screenWidth);
            }), this.lineWidgetWidth = I;
          }, y.prototype.$computeWidth = function(I) {
            if (this.$modified || I) {
              if (this.$modified = !1, this.$useWrapMode)
                return this.screenWidth = this.$wrapLimit;
              for (var d = this.doc.getAllLines(), h = this.$rowLengthCache, m = 0, x = 0, $ = this.$foldData[x], L = $ ? $.start.row : 1 / 0, B = d.length, T = 0; T < B; T++) {
                if (T > L) {
                  if (T = $.end.row + 1, T >= B)
                    break;
                  $ = this.$foldData[x++], L = $ ? $.start.row : 1 / 0;
                }
                h[T] == null && (h[T] = this.$getStringScreenWidth(d[T])[0]), h[T] > m && (m = h[T]);
              }
              this.screenWidth = m;
            }
          }, y.prototype.getLine = function(I) {
            return this.doc.getLine(I);
          }, y.prototype.getLines = function(I, d) {
            return this.doc.getLines(I, d);
          }, y.prototype.getLength = function() {
            return this.doc.getLength();
          }, y.prototype.getTextRange = function(I) {
            return this.doc.getTextRange(I || this.selection.getRange());
          }, y.prototype.insert = function(I, d) {
            return this.doc.insert(I, d);
          }, y.prototype.remove = function(I) {
            return this.doc.remove(I);
          }, y.prototype.removeFullLines = function(I, d) {
            return this.doc.removeFullLines(I, d);
          }, y.prototype.undoChanges = function(I, d) {
            if (I.length) {
              this.$fromUndo = !0;
              for (var h = I.length - 1; h != -1; h--) {
                var m = I[h];
                m.action == "insert" || m.action == "remove" ? this.doc.revertDelta(m) : m.folds && this.addFolds(m.folds);
              }
              !d && this.$undoSelect && (I.selectionBefore ? this.selection.fromJSON(I.selectionBefore) : this.selection.setRange(this.$getUndoSelection(I, !0))), this.$fromUndo = !1;
            }
          }, y.prototype.redoChanges = function(I, d) {
            if (I.length) {
              this.$fromUndo = !0;
              for (var h = 0; h < I.length; h++) {
                var m = I[h];
                (m.action == "insert" || m.action == "remove") && this.doc.$safeApplyDelta(m);
              }
              !d && this.$undoSelect && (I.selectionAfter ? this.selection.fromJSON(I.selectionAfter) : this.selection.setRange(this.$getUndoSelection(I, !1))), this.$fromUndo = !1;
            }
          }, y.prototype.setUndoSelect = function(I) {
            this.$undoSelect = I;
          }, y.prototype.$getUndoSelection = function(I, d) {
            function h(B) {
              return d ? B.action !== "insert" : B.action === "insert";
            }
            for (var m, x, $ = 0; $ < I.length; $++) {
              var L = I[$];
              if (L.start) {
                if (!m) {
                  h(L) ? m = i.fromPoints(L.start, L.end) : m = i.fromPoints(L.start, L.start);
                  continue;
                }
                h(L) ? (x = L.start, m.compare(x.row, x.column) == -1 && m.setStart(x), x = L.end, m.compare(x.row, x.column) == 1 && m.setEnd(x)) : (x = L.start, m.compare(x.row, x.column) == -1 && (m = i.fromPoints(L.start, L.start)));
              }
            }
            return m;
          }, y.prototype.replace = function(I, d) {
            return this.doc.replace(I, d);
          }, y.prototype.moveText = function(I, d, h) {
            var m = this.getTextRange(I), x = this.getFoldsInRange(I), $ = i.fromPoints(d, d);
            if (!h) {
              this.remove(I);
              var L = I.start.row - I.end.row, B = L ? -I.end.column : I.start.column - I.end.column;
              B && ($.start.row == I.end.row && $.start.column > I.end.column && ($.start.column += B), $.end.row == I.end.row && $.end.column > I.end.column && ($.end.column += B)), L && $.start.row >= I.end.row && ($.start.row += L, $.end.row += L);
            }
            if ($.end = this.insert($.start, m), x.length) {
              var T = I.start, V = $.start, L = V.row - T.row, B = V.column - T.column;
              this.addFolds(x.map(function(E) {
                return E = E.clone(), E.start.row == T.row && (E.start.column += B), E.end.row == T.row && (E.end.column += B), E.start.row += L, E.end.row += L, E;
              }));
            }
            return $;
          }, y.prototype.indentRows = function(I, d, h) {
            h = h.replace(/\t/g, this.getTabString());
            for (var m = I; m <= d; m++)
              this.doc.insertInLine({ row: m, column: 0 }, h);
          }, y.prototype.outdentRows = function(I) {
            for (var d = I.collapseRows(), h = new i(0, 0, 0, 0), m = this.getTabSize(), x = d.start.row; x <= d.end.row; ++x) {
              var $ = this.getLine(x);
              h.start.row = x, h.end.row = x;
              for (var L = 0; L < m && $.charAt(L) == " "; ++L)
                ;
              L < m && $.charAt(L) == "	" ? (h.start.column = L, h.end.column = L + 1) : (h.start.column = 0, h.end.column = L), this.remove(h);
            }
          }, y.prototype.$moveLines = function(I, d, h) {
            if (I = this.getRowFoldStart(I), d = this.getRowFoldEnd(d), h < 0) {
              var m = this.getRowFoldStart(I + h);
              if (m < 0)
                return 0;
              var x = m - I;
            } else if (h > 0) {
              var m = this.getRowFoldEnd(d + h);
              if (m > this.doc.getLength() - 1)
                return 0;
              var x = m - d;
            } else {
              I = this.$clipRowToDocument(I), d = this.$clipRowToDocument(d);
              var x = d - I + 1;
            }
            var $ = new i(I, 0, d, Number.MAX_VALUE), L = this.getFoldsInRange($).map(function(T) {
              return T = T.clone(), T.start.row += x, T.end.row += x, T;
            }), B = h == 0 ? this.doc.getLines(I, d) : this.doc.removeFullLines(I, d);
            return this.doc.insertFullLines(I + x, B), L.length && this.addFolds(L), x;
          }, y.prototype.moveLinesUp = function(I, d) {
            return this.$moveLines(I, d, -1);
          }, y.prototype.moveLinesDown = function(I, d) {
            return this.$moveLines(I, d, 1);
          }, y.prototype.duplicateLines = function(I, d) {
            return this.$moveLines(I, d, 0);
          }, y.prototype.$clipRowToDocument = function(I) {
            return Math.max(0, Math.min(I, this.doc.getLength() - 1));
          }, y.prototype.$clipColumnToRow = function(I, d) {
            return d < 0 ? 0 : Math.min(this.doc.getLine(I).length, d);
          }, y.prototype.$clipPositionToDocument = function(I, d) {
            if (d = Math.max(0, d), I < 0)
              I = 0, d = 0;
            else {
              var h = this.doc.getLength();
              I >= h ? (I = h - 1, d = this.doc.getLine(h - 1).length) : d = Math.min(this.doc.getLine(I).length, d);
            }
            return {
              row: I,
              column: d
            };
          }, y.prototype.$clipRangeToDocument = function(I) {
            I.start.row < 0 ? (I.start.row = 0, I.start.column = 0) : I.start.column = this.$clipColumnToRow(I.start.row, I.start.column);
            var d = this.doc.getLength() - 1;
            return I.end.row > d ? (I.end.row = d, I.end.column = this.doc.getLine(d).length) : I.end.column = this.$clipColumnToRow(I.end.row, I.end.column), I;
          }, y.prototype.setUseWrapMode = function(I) {
            if (I != this.$useWrapMode) {
              if (this.$useWrapMode = I, this.$modified = !0, this.$resetRowCache(0), I) {
                var d = this.getLength();
                this.$wrapData = Array(d), this.$updateWrapData(0, d - 1);
              }
              this._signal("changeWrapMode");
            }
          }, y.prototype.getUseWrapMode = function() {
            return this.$useWrapMode;
          }, y.prototype.setWrapLimitRange = function(I, d) {
            (this.$wrapLimitRange.min !== I || this.$wrapLimitRange.max !== d) && (this.$wrapLimitRange = { min: I, max: d }, this.$modified = !0, this.$bidiHandler.markAsDirty(), this.$useWrapMode && this._signal("changeWrapMode"));
          }, y.prototype.adjustWrapLimit = function(I, d) {
            var h = this.$wrapLimitRange;
            h.max < 0 && (h = { min: d, max: d });
            var m = this.$constrainWrapLimit(I, h.min, h.max);
            return m != this.$wrapLimit && m > 1 ? (this.$wrapLimit = m, this.$modified = !0, this.$useWrapMode && (this.$updateWrapData(0, this.getLength() - 1), this.$resetRowCache(0), this._signal("changeWrapLimit")), !0) : !1;
          }, y.prototype.$constrainWrapLimit = function(I, d, h) {
            return d && (I = Math.max(d, I)), h && (I = Math.min(h, I)), I;
          }, y.prototype.getWrapLimit = function() {
            return this.$wrapLimit;
          }, y.prototype.setWrapLimit = function(I) {
            this.setWrapLimitRange(I, I);
          }, y.prototype.getWrapLimitRange = function() {
            return {
              min: this.$wrapLimitRange.min,
              max: this.$wrapLimitRange.max
            };
          }, y.prototype.$updateInternalDataOnChange = function(I) {
            var d = this.$useWrapMode, h = I.action, m = I.start, x = I.end, $ = m.row, L = x.row, B = L - $, T = null;
            if (this.$updating = !0, B != 0)
              if (h === "remove") {
                this[d ? "$wrapData" : "$rowLengthCache"].splice($, B);
                var V = this.$foldData;
                T = this.getFoldsInRange(I), this.removeFolds(T);
                var _ = this.getFoldLine(x.row), O = 0;
                if (_) {
                  _.addRemoveChars(x.row, x.column, m.column - x.column), _.shiftRow(-B);
                  var E = this.getFoldLine($);
                  E && E !== _ && (E.merge(_), _ = E), O = V.indexOf(_) + 1;
                }
                for (O; O < V.length; O++) {
                  var _ = V[O];
                  _.start.row >= x.row && _.shiftRow(-B);
                }
                L = $;
              } else {
                var F = Array(B);
                F.unshift($, 0);
                var D = d ? this.$wrapData : this.$rowLengthCache;
                D.splice.apply(D, F);
                var V = this.$foldData, _ = this.getFoldLine($), O = 0;
                if (_) {
                  var Y = _.range.compareInside(m.row, m.column);
                  Y == 0 ? (_ = _.split(m.row, m.column), _ && (_.shiftRow(B), _.addRemoveChars(L, 0, x.column - m.column))) : Y == -1 && (_.addRemoveChars($, 0, x.column - m.column), _.shiftRow(B)), O = V.indexOf(_) + 1;
                }
                for (O; O < V.length; O++) {
                  var _ = V[O];
                  _.start.row >= $ && _.shiftRow(B);
                }
              }
            else {
              B = Math.abs(I.start.column - I.end.column), h === "remove" && (T = this.getFoldsInRange(I), this.removeFolds(T), B = -B);
              var _ = this.getFoldLine($);
              _ && _.addRemoveChars($, m.column, B);
            }
            return d && this.$wrapData.length != this.doc.getLength() && console.error("doc.getLength() and $wrapData.length have to be the same!"), this.$updating = !1, d ? this.$updateWrapData($, L) : this.$updateRowLengthCache($, L), T;
          }, y.prototype.$updateRowLengthCache = function(I, d) {
            this.$rowLengthCache[I] = null, this.$rowLengthCache[d] = null;
          }, y.prototype.$updateWrapData = function(I, d) {
            var h = this.doc.getAllLines(), m = this.getTabSize(), x = this.$wrapData, $ = this.$wrapLimit, L, B, T = I;
            for (d = Math.min(d, h.length - 1); T <= d; )
              B = this.getFoldLine(T, B), B ? (L = [], B.walk((function(V, _, O, E) {
                var F;
                if (V != null) {
                  F = this.$getDisplayTokens(V, L.length), F[0] = f;
                  for (var D = 1; D < F.length; D++)
                    F[D] = g;
                } else
                  F = this.$getDisplayTokens(h[_].substring(E, O), L.length);
                L = L.concat(F);
              }).bind(this), B.end.row, h[B.end.row].length + 1), x[B.start.row] = this.$computeWrapSplits(L, $, m), T = B.end.row + 1) : (L = this.$getDisplayTokens(h[T]), x[T] = this.$computeWrapSplits(L, $, m), T++);
          }, y.prototype.$computeWrapSplits = function(I, d, h) {
            if (I.length == 0)
              return [];
            var m = [], x = I.length, $ = 0, L = 0, B = this.$wrapAsCode, T = this.$indentedSoftWrap, V = d <= Math.max(2 * h, 8) || T === !1 ? 0 : Math.floor(d / 2);
            function _() {
              var Y = 0;
              if (V === 0)
                return Y;
              if (T)
                for (var P = 0; P < I.length; P++) {
                  var X = I[P];
                  if (X == M)
                    Y += 1;
                  else if (X == W)
                    Y += h;
                  else {
                    if (X == k)
                      continue;
                    break;
                  }
                }
              return B && T !== !1 && (Y += h), Math.min(Y, V);
            }
            function O(Y) {
              for (var P = Y - $, X = $; X < Y; X++) {
                var Q = I[X];
                (Q === 12 || Q === 2) && (P -= 1);
              }
              m.length || (E = _(), m.indent = E), L += P, m.push(L), $ = Y;
            }
            for (var E = 0; x - $ > d - E; ) {
              var F = $ + d - E;
              if (I[F - 1] >= M && I[F] >= M) {
                O(F);
                continue;
              }
              if (I[F] == f || I[F] == g) {
                for (F; F != $ - 1 && I[F] != f; F--)
                  ;
                if (F > $) {
                  O(F);
                  continue;
                }
                for (F = $ + d, F; F < I.length && I[F] == g; F++)
                  ;
                if (F == I.length)
                  break;
                O(F);
                continue;
              }
              for (var D = Math.max(F - (d - (d >> 2)), $ - 1); F > D && I[F] < f; )
                F--;
              if (B) {
                for (; F > D && I[F] < f; )
                  F--;
                for (; F > D && I[F] == v; )
                  F--;
              } else
                for (; F > D && I[F] < M; )
                  F--;
              if (F > D) {
                O(++F);
                continue;
              }
              F = $ + d, I[F] == p && F--, O(F - E);
            }
            return m;
          }, y.prototype.$getDisplayTokens = function(I, d) {
            var h = [], m;
            d = d || 0;
            for (var x = 0; x < I.length; x++) {
              var $ = I.charCodeAt(x);
              if ($ == 9) {
                m = this.getScreenTabSize(h.length + d), h.push(W);
                for (var L = 1; L < m; L++)
                  h.push(k);
              } else $ == 32 ? h.push(M) : $ > 39 && $ < 48 || $ > 57 && $ < 64 ? h.push(v) : $ >= 4352 && Z($) ? h.push(C, p) : h.push(C);
            }
            return h;
          }, y.prototype.$getStringScreenWidth = function(I, d, h) {
            if (d == 0)
              return [0, 0];
            d == null && (d = 1 / 0), h = h || 0;
            var m, x;
            for (x = 0; x < I.length && (m = I.charCodeAt(x), m == 9 ? h += this.getScreenTabSize(h) : m >= 4352 && Z(m) ? h += 2 : h += 1, !(h > d)); x++)
              ;
            return [h, x];
          }, y.prototype.getRowLength = function(I) {
            var d = 1;
            return this.lineWidgets && (d += this.lineWidgets[I] && this.lineWidgets[I].rowCount || 0), !this.$useWrapMode || !this.$wrapData[I] ? d : this.$wrapData[I].length + d;
          }, y.prototype.getRowLineCount = function(I) {
            return !this.$useWrapMode || !this.$wrapData[I] ? 1 : this.$wrapData[I].length + 1;
          }, y.prototype.getRowWrapIndent = function(I) {
            if (this.$useWrapMode) {
              var d = this.screenToDocumentPosition(I, Number.MAX_VALUE), h = this.$wrapData[d.row];
              return h.length && h[0] < d.column ? h.indent : 0;
            } else
              return 0;
          }, y.prototype.getScreenLastRowColumn = function(I) {
            var d = this.screenToDocumentPosition(I, Number.MAX_VALUE);
            return this.documentToScreenColumn(d.row, d.column);
          }, y.prototype.getDocumentLastRowColumn = function(I, d) {
            var h = this.documentToScreenRow(I, d);
            return this.getScreenLastRowColumn(h);
          }, y.prototype.getDocumentLastRowColumnPosition = function(I, d) {
            var h = this.documentToScreenRow(I, d);
            return this.screenToDocumentPosition(h, Number.MAX_VALUE / 10);
          }, y.prototype.getRowSplitData = function(I) {
            if (this.$useWrapMode)
              return this.$wrapData[I];
          }, y.prototype.getScreenTabSize = function(I) {
            return this.$tabSize - (I % this.$tabSize | 0);
          }, y.prototype.screenToDocumentRow = function(I, d) {
            return this.screenToDocumentPosition(I, d).row;
          }, y.prototype.screenToDocumentColumn = function(I, d) {
            return this.screenToDocumentPosition(I, d).column;
          }, y.prototype.screenToDocumentPosition = function(I, d, h) {
            if (I < 0)
              return { row: 0, column: 0 };
            var m, x = 0, $ = 0, L, B = 0, T = 0, V = this.$screenRowCache, _ = this.$getRowCacheIndex(V, I), O = V.length;
            if (O && _ >= 0)
              var B = V[_], x = this.$docRowCache[_], E = I > V[O - 1];
            else
              var E = !O;
            for (var F = this.getLength() - 1, D = this.getNextFoldLine(x), Y = D ? D.start.row : 1 / 0; B <= I && (T = this.getRowLength(x), !(B + T > I || x >= F)); )
              B += T, x++, x > Y && (x = D.end.row + 1, D = this.getNextFoldLine(x, D), Y = D ? D.start.row : 1 / 0), E && (this.$docRowCache.push(x), this.$screenRowCache.push(B));
            if (D && D.start.row <= x)
              m = this.getFoldDisplayLine(D), x = D.start.row;
            else {
              if (B + T <= I || x > F)
                return {
                  row: F,
                  column: this.getLine(F).length
                };
              m = this.getLine(x), D = null;
            }
            var P = 0, X = Math.floor(I - B);
            if (this.$useWrapMode) {
              var Q = this.$wrapData[x];
              Q && (L = Q[X], X > 0 && Q.length && (P = Q.indent, $ = Q[X - 1] || Q[Q.length - 1], m = m.substring($)));
            }
            return h !== void 0 && this.$bidiHandler.isBidiRow(B + X, x, X) && (d = this.$bidiHandler.offsetToCol(h)), $ += this.$getStringScreenWidth(m, d - P)[1], this.$useWrapMode && $ >= L && ($ = L - 1), D ? D.idxToPosition($) : { row: x, column: $ };
          }, y.prototype.documentToScreenPosition = function(I, d) {
            if (typeof d > "u")
              var h = this.$clipPositionToDocument(
                /**@type{Point}*/
                I.row,
                /**@type{Point}*/
                I.column
              );
            else
              h = this.$clipPositionToDocument(
                /**@type{number}*/
                I,
                d
              );
            I = h.row, d = h.column;
            var m = 0, x = null, $ = null;
            $ = this.getFoldAt(I, d, 1), $ && (I = $.start.row, d = $.start.column);
            var L, B = 0, T = this.$docRowCache, V = this.$getRowCacheIndex(T, I), _ = T.length;
            if (_ && V >= 0)
              var B = T[V], m = this.$screenRowCache[V], O = I > T[_ - 1];
            else
              var O = !_;
            for (var E = this.getNextFoldLine(B), F = E ? E.start.row : 1 / 0; B < I; ) {
              if (B >= F) {
                if (L = E.end.row + 1, L > I)
                  break;
                E = this.getNextFoldLine(L, E), F = E ? E.start.row : 1 / 0;
              } else
                L = B + 1;
              m += this.getRowLength(B), B = L, O && (this.$docRowCache.push(B), this.$screenRowCache.push(m));
            }
            var D = "";
            E && B >= F ? (D = this.getFoldDisplayLine(E, I, d), x = E.start.row) : (D = this.getLine(I).substring(0, d), x = I);
            var Y = 0;
            if (this.$useWrapMode) {
              var P = this.$wrapData[x];
              if (P) {
                for (var X = 0; D.length >= P[X]; )
                  m++, X++;
                D = D.substring(P[X - 1] || 0, D.length), Y = X > 0 ? P.indent : 0;
              }
            }
            return this.lineWidgets && this.lineWidgets[B] && this.lineWidgets[B].rowsAbove && (m += this.lineWidgets[B].rowsAbove), {
              row: m,
              column: Y + this.$getStringScreenWidth(D)[0]
            };
          }, y.prototype.documentToScreenColumn = function(I, d) {
            return this.documentToScreenPosition(I, d).column;
          }, y.prototype.documentToScreenRow = function(I, d) {
            return this.documentToScreenPosition(I, d).row;
          }, y.prototype.getScreenLength = function() {
            var I = 0, d = null;
            if (this.$useWrapMode)
              for (var x = this.$wrapData.length, $ = 0, m = 0, d = this.$foldData[m++], L = d ? d.start.row : 1 / 0; $ < x; ) {
                var B = this.$wrapData[$];
                I += B ? B.length + 1 : 1, $++, $ > L && ($ = d.end.row + 1, d = this.$foldData[m++], L = d ? d.start.row : 1 / 0);
              }
            else {
              I = this.getLength();
              for (var h = this.$foldData, m = 0; m < h.length; m++)
                d = h[m], I -= d.end.row - d.start.row;
            }
            return this.lineWidgets && (I += this.$getWidgetScreenLength()), I;
          }, y.prototype.$setFontMetrics = function(I) {
            this.$enableVarChar && (this.$getStringScreenWidth = function(d, h, m) {
              if (h === 0)
                return [0, 0];
              h || (h = 1 / 0), m = m || 0;
              var x, $;
              for ($ = 0; $ < d.length && (x = d.charAt($), x === "	" ? m += this.getScreenTabSize(m) : m += I.getCharacterWidth(x), !(m > h)); $++)
                ;
              return [m, $];
            });
          }, y.prototype.getPrecedingCharacter = function() {
            var I = this.selection.getCursor();
            if (I.column === 0)
              return I.row === 0 ? "" : this.doc.getNewLineCharacter();
            var d = this.getLine(I.row);
            return d[I.column - 1];
          }, y.prototype.destroy = function() {
            this.destroyed || (this.bgTokenizer.setDocument(null), this.bgTokenizer.cleanup(), this.destroyed = !0), this.endOperation(), this.$stopWorker(), this.removeAllListeners(), this.doc && this.doc.off("change", this.$onChange), this.selection && (this.selection.off("changeCursor", this.$onSelectionChange), this.selection.off("changeSelection", this.$onSelectionChange)), this.selection.detach();
          }, y;
        }()
      );
      u.$uid = 0, u.prototype.$modes = a.$modes, u.prototype.getValue = u.prototype.toString, u.prototype.$defaultUndoManager = {
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
      }, u.prototype.lineWidgets = null, u.prototype.isFullWidth = Z, b.implement(u.prototype, c);
      var C = 1, p = 2, f = 3, g = 4, v = 9, M = 10, W = 11, k = 12;
      function Z(y) {
        return y < 4352 ? !1 : y >= 4352 && y <= 4447 || y >= 4515 && y <= 4519 || y >= 4602 && y <= 4607 || y >= 9001 && y <= 9002 || y >= 11904 && y <= 11929 || y >= 11931 && y <= 12019 || y >= 12032 && y <= 12245 || y >= 12272 && y <= 12283 || y >= 12288 && y <= 12350 || y >= 12353 && y <= 12438 || y >= 12441 && y <= 12543 || y >= 12549 && y <= 12589 || y >= 12593 && y <= 12686 || y >= 12688 && y <= 12730 || y >= 12736 && y <= 12771 || y >= 12784 && y <= 12830 || y >= 12832 && y <= 12871 || y >= 12880 && y <= 13054 || y >= 13056 && y <= 19903 || y >= 19968 && y <= 42124 || y >= 42128 && y <= 42182 || y >= 43360 && y <= 43388 || y >= 44032 && y <= 55203 || y >= 55216 && y <= 55238 || y >= 55243 && y <= 55291 || y >= 63744 && y <= 64255 || y >= 65040 && y <= 65049 || y >= 65072 && y <= 65106 || y >= 65108 && y <= 65126 || y >= 65128 && y <= 65131 || y >= 65281 && y <= 65376 || y >= 65504 && y <= 65510;
      }
      w("./edit_session/folding").Folding.call(u.prototype), w("./edit_session/bracket_match").BracketMatch.call(u.prototype), a.defineOptions(u.prototype, "session", {
        wrap: {
          set: function(y) {
            if (!y || y == "off" ? y = !1 : y == "free" ? y = !0 : y == "printMargin" ? y = -1 : typeof y == "string" && (y = parseInt(y, 10) || !1), this.$wrap != y)
              if (this.$wrap = y, !y)
                this.setUseWrapMode(!1);
              else {
                var I = typeof y == "number" ? y : null;
                this.setWrapLimitRange(I, I), this.setUseWrapMode(!0);
              }
          },
          get: function() {
            return this.getUseWrapMode() ? this.$wrap == -1 ? "printMargin" : this.getWrapLimitRange().min ? this.$wrap : "free" : "off";
          },
          handlesSet: !0
        },
        wrapMethod: {
          set: function(y) {
            y = y == "auto" ? this.$mode.type != "text" : y != "text", y != this.$wrapAsCode && (this.$wrapAsCode = y, this.$useWrapMode && (this.$useWrapMode = !1, this.setUseWrapMode(!0)));
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
          set: function(y) {
            this.$useWorker = y, this.$stopWorker(), y && this.$startWorker();
          },
          initialValue: !0
        },
        useSoftTabs: { initialValue: !0 },
        tabSize: {
          set: function(y) {
            y = parseInt(y), y > 0 && this.$tabSize !== y && (this.$modified = !0, this.$rowLengthCache = [], this.$tabSize = y, this._signal("changeTabSize"));
          },
          initialValue: 4,
          handlesSet: !0
        },
        navigateWithinSoftTabs: { initialValue: !1 },
        foldStyle: {
          set: function(y) {
            this.setFoldStyle(y);
          },
          handlesSet: !0
        },
        overwrite: {
          set: function(y) {
            this._signal("changeOverwrite");
          },
          initialValue: !1
        },
        newLineMode: {
          set: function(y) {
            this.doc.setNewLineMode(y);
          },
          get: function() {
            return this.doc.getNewLineMode();
          },
          handlesSet: !0
        },
        mode: {
          set: function(y) {
            this.setMode(y);
          },
          get: function() {
            return this.$modeId;
          },
          handlesSet: !0
        }
      }), R.EditSession = u;
    }), ace.define("ace/search", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function(w, R, N) {
      var b = w("./lib/lang"), S = w("./lib/oop"), A = w("./range").Range, a = (
        /** @class */
        function() {
          function i() {
            this.$options = {};
          }
          return i.prototype.set = function(t) {
            return S.mixin(this.$options, t), this;
          }, i.prototype.getOptions = function() {
            return b.copyObject(this.$options);
          }, i.prototype.setOptions = function(t) {
            this.$options = t;
          }, i.prototype.find = function(t) {
            var e = this.$options, o = this.$matchIterator(t, e);
            if (!o)
              return !1;
            var s = null;
            return o.forEach(function(l, u, C, p) {
              return s = new A(l, u, C, p), u == p && e.start && /**@type{Range}*/
              e.start.start && e.skipCurrent != !1 && s.isEqual(
                /**@type{Range}*/
                e.start
              ) ? (s = null, !1) : !0;
            }), s;
          }, i.prototype.findAll = function(t) {
            var e = this.$options;
            if (!e.needle)
              return [];
            this.$assembleRegExp(e);
            var o = e.range, s = o ? t.getLines(o.start.row, o.end.row) : t.doc.getAllLines(), l = [], u = e.re;
            if (e.$isMultiLine) {
              var C = u.length, p = s.length - C, f;
              e: for (var g = u.offset || 0; g <= p; g++) {
                for (var v = 0; v < C; v++)
                  if (s[g + v].search(u[v]) == -1)
                    continue e;
                var M = s[g], W = s[g + C - 1], k = M.length - M.match(u[0])[0].length, Z = W.match(u[C - 1])[0].length;
                f && f.end.row === g && f.end.column > k || (l.push(f = new A(g, k, g + C - 1, Z)), C > 2 && (g = g + C - 2));
              }
            } else
              for (var y, I = 0; I < s.length; I++)
                if (this.$isMultilineSearch(e)) {
                  var d = s.length - 1;
                  if (y = this.$multiLineForward(t, u, I, d), y) {
                    var h = y.endRow <= d ? y.endRow - 1 : d;
                    h > I && (I = h), l.push(new A(y.startRow, y.startCol, y.endRow, y.endCol));
                  }
                } else {
                  y = b.getMatchOffsets(s[I], u);
                  for (var v = 0; v < y.length; v++) {
                    var m = y[v];
                    l.push(new A(I, m.offset, I, m.offset + m.length));
                  }
                }
            if (o) {
              for (var x = o.start.column, $ = o.end.column, I = 0, v = l.length - 1; I < v && l[I].start.column < x && l[I].start.row == 0; )
                I++;
              for (var L = o.end.row - o.start.row; I < v && l[v].end.column > $ && l[v].end.row == L; )
                v--;
              for (l = l.slice(I, v + 1), I = 0, v = l.length; I < v; I++)
                l[I].start.row += o.start.row, l[I].end.row += o.start.row;
            }
            return l;
          }, i.prototype.parseReplaceString = function(t) {
            for (var e = {
              DollarSign: 36,
              Ampersand: 38,
              Digit0: 48,
              Digit1: 49,
              Digit9: 57,
              Backslash: 92,
              n: 110,
              t: 116
            }, o = "", s = 0, l = t.length; s < l; s++) {
              var u = t.charCodeAt(s);
              if (u === e.Backslash) {
                if (s++, s >= l) {
                  o += "\\";
                  break;
                }
                var C = t.charCodeAt(s);
                switch (C) {
                  case e.Backslash:
                    o += "\\";
                    break;
                  case e.n:
                    o += `
`;
                    break;
                  case e.t:
                    o += "	";
                    break;
                }
                continue;
              }
              if (u === e.DollarSign) {
                if (s++, s >= l) {
                  o += "$";
                  break;
                }
                var p = t.charCodeAt(s);
                if (p === e.DollarSign) {
                  o += "$$";
                  continue;
                }
                if (p === e.Digit0 || p === e.Ampersand) {
                  o += "$&";
                  continue;
                }
                if (e.Digit1 <= p && p <= e.Digit9) {
                  o += "$" + t[s];
                  continue;
                }
              }
              o += t[s];
            }
            return o || t;
          }, i.prototype.replace = function(t, e) {
            var o = this.$options, s = this.$assembleRegExp(o);
            if (o.$isMultiLine)
              return e;
            if (s) {
              var l = this.$isMultilineSearch(o);
              l && (t = t.replace(/\r\n|\r|\n/g, `
`));
              var u = s.exec(t);
              if (!u || !l && u[0].length != t.length)
                return null;
              if (e = o.regExp ? this.parseReplaceString(e) : e.replace(/\$/g, "$$$$"), e = t.replace(s, e), o.preserveCase) {
                e = e.split("");
                for (var C = Math.min(t.length, t.length); C--; ) {
                  var p = t[C];
                  p && p.toLowerCase() != p ? e[C] = e[C].toUpperCase() : e[C] = e[C].toLowerCase();
                }
                e = e.join("");
              }
              return e;
            }
          }, i.prototype.$assembleRegExp = function(t, e) {
            if (t.needle instanceof RegExp)
              return t.re = t.needle;
            var o = t.needle;
            if (!t.needle)
              return t.re = !1;
            t.regExp || (o = b.escapeRegExp(o));
            var s = t.caseSensitive ? "gm" : "gmi";
            try {
              new RegExp(o, "u"), t.$supportsUnicodeFlag = !0, s += "u";
            } catch {
              t.$supportsUnicodeFlag = !1;
            }
            if (t.wholeWord && (o = c(o, t)), t.$isMultiLine = !e && /[\n\r]/.test(o), t.$isMultiLine)
              return t.re = this.$assembleMultilineRegExp(o, s);
            try {
              var l = new RegExp(o, s);
            } catch {
              l = !1;
            }
            return t.re = l;
          }, i.prototype.$assembleMultilineRegExp = function(t, e) {
            for (var o = t.replace(/\r\n|\r|\n/g, `$
^`).split(`
`), s = [], l = 0; l < o.length; l++)
              try {
                s.push(new RegExp(o[l], e));
              } catch {
                return !1;
              }
            return s;
          }, i.prototype.$isMultilineSearch = function(t) {
            return t.re && /\\r\\n|\\r|\\n/.test(t.re.source) && t.regExp && !t.$isMultiLine;
          }, i.prototype.$multiLineForward = function(t, e, o, s) {
            for (var l, u = r(t, o), C = o; C <= s; ) {
              for (var p = 0; p < u && !(C > s); p++) {
                var f = t.getLine(C++);
                l = l == null ? f : l + `
` + f;
              }
              var g = e.exec(l);
              if (e.lastIndex = 0, g) {
                var v = l.slice(0, g.index).split(`
`), M = g[0].split(`
`), W = o + v.length - 1, k = v[v.length - 1].length, Z = W + M.length - 1, y = M.length == 1 ? k + M[0].length : M[M.length - 1].length;
                return {
                  startRow: W,
                  startCol: k,
                  endRow: Z,
                  endCol: y
                };
              }
            }
            return null;
          }, i.prototype.$multiLineBackward = function(t, e, o, s, l) {
            for (var u, C = r(t, s), p = t.getLine(s).length - o, f = s; f >= l; ) {
              for (var g = 0; g < C && f >= l; g++) {
                var v = t.getLine(f--);
                u = u == null ? v : v + `
` + u;
              }
              var M = n(u, e, p);
              if (M) {
                var W = u.slice(0, M.index).split(`
`), k = M[0].split(`
`), Z = f + W.length, y = W[W.length - 1].length, I = Z + k.length - 1, d = k.length == 1 ? y + k[0].length : k[k.length - 1].length;
                return {
                  startRow: Z,
                  startCol: y,
                  endRow: I,
                  endCol: d
                };
              }
            }
            return null;
          }, i.prototype.$matchIterator = function(t, e) {
            var o = this.$assembleRegExp(e);
            if (!o)
              return !1;
            var s = this.$isMultilineSearch(e), l = this.$multiLineForward, u = this.$multiLineBackward, C = e.backwards == !0, p = e.skipCurrent != !1, f = o.unicode, g = e.range, v = e.start;
            v || (v = g ? g[C ? "end" : "start"] : t.selection.getRange()), v.start && (v = v[p != C ? "end" : "start"]);
            var M = g ? g.start.row : 0, W = g ? g.end.row : t.getLength() - 1;
            if (C)
              var k = function(I) {
                var d = v.row;
                if (!y(d, v.column, I)) {
                  for (d--; d >= M; d--)
                    if (y(d, Number.MAX_VALUE, I))
                      return;
                  if (e.wrap != !1) {
                    for (d = W, M = v.row; d >= M; d--)
                      if (y(d, Number.MAX_VALUE, I))
                        return;
                  }
                }
              };
            else
              var k = function(d) {
                var h = v.row;
                if (!y(h, v.column, d)) {
                  for (h = h + 1; h <= W; h++)
                    if (y(h, 0, d))
                      return;
                  if (e.wrap != !1) {
                    for (h = M, W = v.row; h <= W; h++)
                      if (y(h, 0, d))
                        return;
                  }
                }
              };
            if (e.$isMultiLine)
              var Z = o.length, y = function(I, d, h) {
                var m = C ? I - Z + 1 : I;
                if (!(m < 0 || m + Z > t.getLength())) {
                  var x = t.getLine(m), $ = x.search(o[0]);
                  if (!(!C && $ < d || $ === -1)) {
                    for (var L = 1; L < Z; L++)
                      if (x = t.getLine(m + L), x.search(o[L]) == -1)
                        return;
                    var B = x.match(o[Z - 1])[0].length;
                    if (!(C && B > d) && h(m, $, m + Z - 1, B))
                      return !0;
                  }
                }
              };
            else if (C)
              var y = function(d, h, m) {
                if (s) {
                  var x = u(t, o, h, d, M);
                  if (!x)
                    return !1;
                  if (m(x.startRow, x.startCol, x.endRow, x.endCol))
                    return !0;
                } else {
                  var $ = t.getLine(d), L = [], B, T = 0;
                  for (o.lastIndex = 0; B = o.exec($); ) {
                    var V = B[0].length;
                    if (T = B.index, !V) {
                      if (T >= $.length)
                        break;
                      o.lastIndex = T += b.skipEmptyMatch($, T, f);
                    }
                    if (B.index + V > h)
                      break;
                    L.push(B.index, V);
                  }
                  for (var _ = L.length - 1; _ >= 0; _ -= 2) {
                    var O = L[_ - 1], V = L[_];
                    if (m(d, O, d, O + V))
                      return !0;
                  }
                }
              };
            else
              var y = function(d, h, m) {
                if (o.lastIndex = h, s) {
                  var x = l(t, o, d, W);
                  if (x) {
                    var $ = x.endRow <= W ? x.endRow - 1 : W;
                    $ > d && (d = $);
                  }
                  if (!x)
                    return !1;
                  if (m(x.startRow, x.startCol, x.endRow, x.endCol))
                    return !0;
                } else
                  for (var L = t.getLine(d), B, T; T = o.exec(L); ) {
                    var V = T[0].length;
                    if (B = T.index, m(d, B, d, B + V))
                      return !0;
                    if (!V && (o.lastIndex = B += b.skipEmptyMatch(L, B, f), B >= L.length))
                      return !1;
                  }
              };
            return { forEach: k };
          }, i;
        }()
      );
      function c(i, t) {
        var e = b.supportsLookbehind();
        function o(C, p) {
          p === void 0 && (p = !0);
          var f = e && t.$supportsUnicodeFlag ? new RegExp("[\\p{L}\\p{N}_]", "u") : new RegExp("\\w");
          return f.test(C) || t.regExp ? e && t.$supportsUnicodeFlag ? p ? "(?<=^|[^\\p{L}\\p{N}_])" : "(?=[^\\p{L}\\p{N}_]|$)" : "\\b" : "";
        }
        var s = Array.from(i), l = s[0], u = s[s.length - 1];
        return o(l) + i + o(u, !1);
      }
      function n(i, t, e) {
        for (var o = null, s = 0; s <= i.length; ) {
          t.lastIndex = s;
          var l = t.exec(i);
          if (!l)
            break;
          var u = l.index + l[0].length;
          if (u > i.length - e)
            break;
          (!o || u > o.index + o[0].length) && (o = l), s = l.index + 1;
        }
        return o;
      }
      function r(i, t) {
        var e = 5e3, o = { row: t, column: 0 }, s = i.doc.positionToIndex(o), l = s + e, u = i.doc.indexToPosition(l), C = u.row;
        return C + 1;
      }
      R.Search = a;
    }), ace.define("ace/keyboard/hash_handler", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function(w, R, N) {
      var b = this && this.__extends || /* @__PURE__ */ function() {
        var i = function(t, e) {
          return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, s) {
            o.__proto__ = s;
          } || function(o, s) {
            for (var l in s) Object.prototype.hasOwnProperty.call(s, l) && (o[l] = s[l]);
          }, i(t, e);
        };
        return function(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
          i(t, e);
          function o() {
            this.constructor = t;
          }
          t.prototype = e === null ? Object.create(e) : (o.prototype = e.prototype, new o());
        };
      }(), S = w("../lib/keys"), A = w("../lib/useragent"), a = S.KEY_MODS, c = (
        /** @class */
        function() {
          function i(t, e) {
            this.$init(t, e, !1);
          }
          return i.prototype.$init = function(t, e, o) {
            this.platform = e || (A.isMac ? "mac" : "win"), this.commands = {}, this.commandKeyBinding = {}, this.addCommands(t), this.$singleCommand = o;
          }, i.prototype.addCommand = function(t) {
            this.commands[t.name] && this.removeCommand(t), this.commands[t.name] = t, t.bindKey && this._buildKeyHash(t);
          }, i.prototype.removeCommand = function(t, e) {
            var o = t && (typeof t == "string" ? t : t.name);
            t = this.commands[o], e || delete this.commands[o];
            var s = this.commandKeyBinding;
            for (var l in s) {
              var u = s[l];
              if (u == t)
                delete s[l];
              else if (Array.isArray(u)) {
                var C = u.indexOf(t);
                C != -1 && (u.splice(C, 1), u.length == 1 && (s[l] = u[0]));
              }
            }
          }, i.prototype.bindKey = function(t, e, o) {
            if (typeof t == "object" && t && (o == null && (o = t.position), t = t[this.platform]), !!t) {
              if (typeof e == "function")
                return this.addCommand({ exec: e, bindKey: t, name: e.name || /**@type{string}*/
                t });
              t.split("|").forEach(function(s) {
                var l = "";
                if (s.indexOf(" ") != -1) {
                  var u = s.split(/\s+/);
                  s = u.pop(), u.forEach(function(f) {
                    var g = this.parseKeys(f), v = a[g.hashId] + g.key;
                    l += (l ? " " : "") + v, this._addCommandToBinding(l, "chainKeys");
                  }, this), l += " ";
                }
                var C = this.parseKeys(s), p = a[C.hashId] + C.key;
                this._addCommandToBinding(l + p, e, o);
              }, this);
            }
          }, i.prototype._addCommandToBinding = function(t, e, o) {
            var s = this.commandKeyBinding, l;
            if (!e)
              delete s[t];
            else if (!s[t] || this.$singleCommand)
              s[t] = e;
            else {
              Array.isArray(s[t]) ? (l = s[t].indexOf(e)) != -1 && s[t].splice(l, 1) : s[t] = [s[t]], typeof o != "number" && (o = n(e));
              var u = s[t];
              for (l = 0; l < u.length; l++) {
                var C = u[l], p = n(C);
                if (p > o)
                  break;
              }
              u.splice(l, 0, e);
            }
          }, i.prototype.addCommands = function(t) {
            t && Object.keys(t).forEach(function(e) {
              var o = t[e];
              if (o) {
                if (typeof o == "string")
                  return this.bindKey(o, e);
                typeof o == "function" && (o = { exec: o }), typeof o == "object" && (o.name || (o.name = e), this.addCommand(o));
              }
            }, this);
          }, i.prototype.removeCommands = function(t) {
            Object.keys(t).forEach(function(e) {
              this.removeCommand(t[e]);
            }, this);
          }, i.prototype.bindKeys = function(t) {
            Object.keys(t).forEach(function(e) {
              this.bindKey(e, t[e]);
            }, this);
          }, i.prototype._buildKeyHash = function(t) {
            this.bindKey(t.bindKey, t);
          }, i.prototype.parseKeys = function(t) {
            var e = t.toLowerCase().split(/[\-\+]([\-\+])?/).filter(function(p) {
              return p;
            }), o = e.pop(), s = S[o];
            if (S.FUNCTION_KEYS[s])
              o = S.FUNCTION_KEYS[s].toLowerCase();
            else if (e.length) {
              if (e.length == 1 && e[0] == "shift")
                return { key: o.toUpperCase(), hashId: -1 };
            } else return { key: o, hashId: -1 };
            for (var l = 0, u = e.length; u--; ) {
              var C = S.KEY_MODS[e[u]];
              if (C == null)
                return typeof console < "u" && console.error("invalid modifier " + e[u] + " in " + t), !1;
              l |= C;
            }
            return { key: o, hashId: l };
          }, i.prototype.findKeyCommand = function(t, e) {
            var o = a[t] + e;
            return this.commandKeyBinding[o];
          }, i.prototype.handleKeyboard = function(t, e, o, s) {
            if (!(s < 0)) {
              var l = a[e] + o, u = this.commandKeyBinding[l];
              return t.$keyChain && (t.$keyChain += " " + l, u = this.commandKeyBinding[t.$keyChain] || u), u && (u == "chainKeys" || u[u.length - 1] == "chainKeys") ? (t.$keyChain = t.$keyChain || l, { command: "null" }) : (t.$keyChain && ((!e || e == 4) && o.length == 1 ? t.$keyChain = t.$keyChain.slice(0, -l.length - 1) : (e == -1 || s > 0) && (t.$keyChain = "")), { command: u });
            }
          }, i.prototype.getStatusText = function(t, e) {
            return e.$keyChain || "";
          }, i;
        }()
      );
      function n(i) {
        return typeof i == "object" && i.bindKey && i.bindKey.position || (i.isDefault ? -100 : 0);
      }
      var r = (
        /** @class */
        function(i) {
          b(t, i);
          function t(e, o) {
            var s = i.call(this, e, o) || this;
            return s.$singleCommand = !0, s;
          }
          return t;
        }(c)
      );
      r.call = function(i, t, e) {
        c.prototype.$init.call(i, t, e, !0);
      }, c.call = function(i, t, e) {
        c.prototype.$init.call(i, t, e, !1);
      }, R.HashHandler = r, R.MultiHashHandler = c;
    }), ace.define("ace/commands/command_manager", ["require", "exports", "module", "ace/lib/oop", "ace/keyboard/hash_handler", "ace/lib/event_emitter"], function(w, R, N) {
      var b = this && this.__extends || /* @__PURE__ */ function() {
        var n = function(r, i) {
          return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, e) {
            t.__proto__ = e;
          } || function(t, e) {
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
          }, n(r, i);
        };
        return function(r, i) {
          if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
          n(r, i);
          function t() {
            this.constructor = r;
          }
          r.prototype = i === null ? Object.create(i) : (t.prototype = i.prototype, new t());
        };
      }(), S = w("../lib/oop"), A = w("../keyboard/hash_handler").MultiHashHandler, a = w("../lib/event_emitter").EventEmitter, c = (
        /** @class */
        function(n) {
          b(r, n);
          function r(i, t) {
            var e = n.call(this, t, i) || this;
            return e.byName = e.commands, e.setDefaultHandler("exec", function(o) {
              return o.args ? o.command.exec(o.editor, o.args, o.event, !1) : o.command.exec(o.editor, {}, o.event, !0);
            }), e;
          }
          return r.prototype.exec = function(i, t, e) {
            if (Array.isArray(i)) {
              for (var o = i.length; o--; )
                if (this.exec(i[o], t, e))
                  return !0;
              return !1;
            }
            typeof i == "string" && (i = this.commands[i]);
            var s = { editor: t, command: i, args: e };
            return this.canExecute(i, t) ? (s.returnValue = this._emit("exec", s), this._signal("afterExec", s), s.returnValue !== !1) : (this._signal("commandUnavailable", s), !1);
          }, r.prototype.canExecute = function(i, t) {
            return typeof i == "string" && (i = this.commands[i]), !(!i || t && t.$readOnly && !i.readOnly || this.$checkCommandState != !1 && i.isAvailable && !i.isAvailable(t));
          }, r.prototype.toggleRecording = function(i) {
            if (!this.$inReplay)
              return i && i._emit("changeStatus"), this.recording ? (this.macro.pop(), this.off("exec", this.$addCommandToMacro), this.macro.length || (this.macro = this.oldMacro), this.recording = !1) : (this.$addCommandToMacro || (this.$addCommandToMacro = (function(t) {
                this.macro.push([t.command, t.args]);
              }).bind(this)), this.oldMacro = this.macro, this.macro = [], this.on("exec", this.$addCommandToMacro), this.recording = !0);
          }, r.prototype.replay = function(i) {
            if (!(this.$inReplay || !this.macro)) {
              if (this.recording)
                return this.toggleRecording(i);
              try {
                this.$inReplay = !0, this.macro.forEach(function(t) {
                  typeof t == "string" ? this.exec(t, i) : this.exec(t[0], i, t[1]);
                }, this);
              } finally {
                this.$inReplay = !1;
              }
            }
          }, r.prototype.trimMacro = function(i) {
            return i.map(function(t) {
              return typeof t[0] != "string" && (t[0] = t[0].name), t[1] || (t = t[0]), t;
            });
          }, r;
        }(A)
      );
      S.implement(c.prototype, a), R.CommandManager = c;
    }), ace.define("ace/commands/default_commands", ["require", "exports", "module", "ace/lib/lang", "ace/config", "ace/range"], function(w, R, N) {
      var b = w("../lib/lang"), S = w("../config"), A = w("../range").Range;
      function a(n, r) {
        return { win: n, mac: r };
      }
      R.commands = [
        {
          name: "showSettingsMenu",
          description: "Show settings menu",
          bindKey: a("Ctrl-,", "Command-,"),
          exec: function(n) {
            S.loadModule("ace/ext/settings_menu", function(r) {
              r.init(n), n.showSettingsMenu();
            });
          },
          readOnly: !0
        },
        {
          name: "goToNextError",
          description: "Go to next error",
          bindKey: a("Alt-E", "F4"),
          exec: function(n) {
            S.loadModule("ace/ext/error_marker", function(r) {
              r.showErrorMarker(n, 1);
            });
          },
          scrollIntoView: "animate",
          readOnly: !0
        },
        {
          name: "goToPreviousError",
          description: "Go to previous error",
          bindKey: a("Alt-Shift-E", "Shift-F4"),
          exec: function(n) {
            S.loadModule("ace/ext/error_marker", function(r) {
              r.showErrorMarker(n, -1);
            });
          },
          scrollIntoView: "animate",
          readOnly: !0
        },
        {
          name: "selectall",
          description: "Select all",
          bindKey: a("Ctrl-A", "Command-A"),
          exec: function(n) {
            n.selectAll();
          },
          readOnly: !0
        },
        {
          name: "centerselection",
          description: "Center selection",
          bindKey: a(null, "Ctrl-L"),
          exec: function(n) {
            n.centerSelection();
          },
          readOnly: !0
        },
        {
          name: "gotoline",
          description: "Go to line...",
          bindKey: a("Ctrl-L", "Command-L"),
          exec: function(n, r) {
            typeof r == "number" && !isNaN(r) && n.gotoLine(r), n.prompt({ $type: "gotoLine" });
          },
          readOnly: !0
        },
        {
          name: "fold",
          bindKey: a("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"),
          exec: function(n) {
            n.session.toggleFold(!1);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "unfold",
          bindKey: a("Alt-Shift-L|Ctrl-Shift-F1", "Command-Alt-Shift-L|Command-Shift-F1"),
          exec: function(n) {
            n.session.toggleFold(!0);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "toggleFoldWidget",
          description: "Toggle fold widget",
          bindKey: a("F2", "F2"),
          exec: function(n) {
            n.session.toggleFoldWidget();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "toggleParentFoldWidget",
          description: "Toggle parent fold widget",
          bindKey: a("Alt-F2", "Alt-F2"),
          exec: function(n) {
            n.session.toggleFoldWidget(!0);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "foldall",
          description: "Fold all",
          bindKey: a(null, "Ctrl-Command-Option-0"),
          exec: function(n) {
            n.session.foldAll();
          },
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "foldAllComments",
          description: "Fold all comments",
          bindKey: a(null, "Ctrl-Command-Option-0"),
          exec: function(n) {
            n.session.foldAllComments();
          },
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "foldOther",
          description: "Fold other",
          bindKey: a("Alt-0", "Command-Option-0"),
          exec: function(n) {
            n.session.foldAll(), n.session.unfold(n.selection.getAllRanges());
          },
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "unfoldall",
          description: "Unfold all",
          bindKey: a("Alt-Shift-0", "Command-Option-Shift-0"),
          exec: function(n) {
            n.session.unfold();
          },
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "findnext",
          description: "Find next",
          bindKey: a("Ctrl-K", "Command-G"),
          exec: function(n) {
            n.findNext();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "findprevious",
          description: "Find previous",
          bindKey: a("Ctrl-Shift-K", "Command-Shift-G"),
          exec: function(n) {
            n.findPrevious();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "center",
          readOnly: !0
        },
        {
          name: "selectOrFindNext",
          description: "Select or find next",
          bindKey: a("Alt-K", "Ctrl-G"),
          exec: function(n) {
            n.selection.isEmpty() ? n.selection.selectWord() : n.findNext();
          },
          readOnly: !0
        },
        {
          name: "selectOrFindPrevious",
          description: "Select or find previous",
          bindKey: a("Alt-Shift-K", "Ctrl-Shift-G"),
          exec: function(n) {
            n.selection.isEmpty() ? n.selection.selectWord() : n.findPrevious();
          },
          readOnly: !0
        },
        {
          name: "find",
          description: "Find",
          bindKey: a("Ctrl-F", "Command-F"),
          exec: function(n) {
            S.loadModule("ace/ext/searchbox", function(r) {
              r.Search(n);
            });
          },
          readOnly: !0
        },
        {
          name: "overwrite",
          description: "Overwrite",
          bindKey: "Insert",
          exec: function(n) {
            n.toggleOverwrite();
          },
          readOnly: !0
        },
        {
          name: "selecttostart",
          description: "Select to start",
          bindKey: a("Ctrl-Shift-Home", "Command-Shift-Home|Command-Shift-Up"),
          exec: function(n) {
            n.getSelection().selectFileStart();
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
          exec: function(n) {
            n.navigateFileStart();
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
          exec: function(n) {
            n.getSelection().selectUp();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "golineup",
          description: "Go line up",
          bindKey: a("Up", "Up|Ctrl-P"),
          exec: function(n, r) {
            n.navigateUp(r.times);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selecttoend",
          description: "Select to end",
          bindKey: a("Ctrl-Shift-End", "Command-Shift-End|Command-Shift-Down"),
          exec: function(n) {
            n.getSelection().selectFileEnd();
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
          exec: function(n) {
            n.navigateFileEnd();
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
          exec: function(n) {
            n.getSelection().selectDown();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "golinedown",
          description: "Go line down",
          bindKey: a("Down", "Down|Ctrl-N"),
          exec: function(n, r) {
            n.navigateDown(r.times);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selectwordleft",
          description: "Select word left",
          bindKey: a("Ctrl-Shift-Left", "Option-Shift-Left"),
          exec: function(n) {
            n.getSelection().selectWordLeft();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "gotowordleft",
          description: "Go to word left",
          bindKey: a("Ctrl-Left", "Option-Left"),
          exec: function(n) {
            n.navigateWordLeft();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selecttolinestart",
          description: "Select to line start",
          bindKey: a("Alt-Shift-Left", "Command-Shift-Left|Ctrl-Shift-A"),
          exec: function(n) {
            n.getSelection().selectLineStart();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "gotolinestart",
          description: "Go to line start",
          bindKey: a("Alt-Left|Home", "Command-Left|Home|Ctrl-A"),
          exec: function(n) {
            n.navigateLineStart();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selectleft",
          description: "Select left",
          bindKey: a("Shift-Left", "Shift-Left|Ctrl-Shift-B"),
          exec: function(n) {
            n.getSelection().selectLeft();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "gotoleft",
          description: "Go to left",
          bindKey: a("Left", "Left|Ctrl-B"),
          exec: function(n, r) {
            n.navigateLeft(r.times);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selectwordright",
          description: "Select word right",
          bindKey: a("Ctrl-Shift-Right", "Option-Shift-Right"),
          exec: function(n) {
            n.getSelection().selectWordRight();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "gotowordright",
          description: "Go to word right",
          bindKey: a("Ctrl-Right", "Option-Right"),
          exec: function(n) {
            n.navigateWordRight();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selecttolineend",
          description: "Select to line end",
          bindKey: a("Alt-Shift-Right", "Command-Shift-Right|Shift-End|Ctrl-Shift-E"),
          exec: function(n) {
            n.getSelection().selectLineEnd();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "gotolineend",
          description: "Go to line end",
          bindKey: a("Alt-Right|End", "Command-Right|End|Ctrl-E"),
          exec: function(n) {
            n.navigateLineEnd();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selectright",
          description: "Select right",
          bindKey: a("Shift-Right", "Shift-Right"),
          exec: function(n) {
            n.getSelection().selectRight();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "gotoright",
          description: "Go to right",
          bindKey: a("Right", "Right|Ctrl-F"),
          exec: function(n, r) {
            n.navigateRight(r.times);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selectpagedown",
          description: "Select page down",
          bindKey: "Shift-PageDown",
          exec: function(n) {
            n.selectPageDown();
          },
          readOnly: !0
        },
        {
          name: "pagedown",
          description: "Page down",
          bindKey: a(null, "Option-PageDown"),
          exec: function(n) {
            n.scrollPageDown();
          },
          readOnly: !0
        },
        {
          name: "gotopagedown",
          description: "Go to page down",
          bindKey: a("PageDown", "PageDown|Ctrl-V"),
          exec: function(n) {
            n.gotoPageDown();
          },
          readOnly: !0
        },
        {
          name: "selectpageup",
          description: "Select page up",
          bindKey: "Shift-PageUp",
          exec: function(n) {
            n.selectPageUp();
          },
          readOnly: !0
        },
        {
          name: "pageup",
          description: "Page up",
          bindKey: a(null, "Option-PageUp"),
          exec: function(n) {
            n.scrollPageUp();
          },
          readOnly: !0
        },
        {
          name: "gotopageup",
          description: "Go to page up",
          bindKey: "PageUp",
          exec: function(n) {
            n.gotoPageUp();
          },
          readOnly: !0
        },
        {
          name: "scrollup",
          description: "Scroll up",
          bindKey: a("Ctrl-Up", null),
          exec: function(n) {
            n.renderer.scrollBy(0, -2 * n.renderer.layerConfig.lineHeight);
          },
          readOnly: !0
        },
        {
          name: "scrolldown",
          description: "Scroll down",
          bindKey: a("Ctrl-Down", null),
          exec: function(n) {
            n.renderer.scrollBy(0, 2 * n.renderer.layerConfig.lineHeight);
          },
          readOnly: !0
        },
        {
          name: "selectlinestart",
          description: "Select line start",
          bindKey: "Shift-Home",
          exec: function(n) {
            n.getSelection().selectLineStart();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "selectlineend",
          description: "Select line end",
          bindKey: "Shift-End",
          exec: function(n) {
            n.getSelection().selectLineEnd();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "togglerecording",
          description: "Toggle recording",
          bindKey: a("Ctrl-Alt-E", "Command-Option-E"),
          exec: function(n) {
            n.commands.toggleRecording(n);
          },
          readOnly: !0
        },
        {
          name: "replaymacro",
          description: "Replay macro",
          bindKey: a("Ctrl-Shift-E", "Command-Shift-E"),
          exec: function(n) {
            n.commands.replay(n);
          },
          readOnly: !0
        },
        {
          name: "jumptomatching",
          description: "Jump to matching",
          bindKey: a("Ctrl-\\|Ctrl-P", "Command-\\"),
          exec: function(n) {
            n.jumpToMatching();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "animate",
          readOnly: !0
        },
        {
          name: "selecttomatching",
          description: "Select to matching",
          bindKey: a("Ctrl-Shift-\\|Ctrl-Shift-P", "Command-Shift-\\"),
          exec: function(n) {
            n.jumpToMatching(!0);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "animate",
          readOnly: !0
        },
        {
          name: "expandToMatching",
          description: "Expand to matching",
          bindKey: a("Ctrl-Shift-M", "Ctrl-Shift-M"),
          exec: function(n) {
            n.jumpToMatching(!0, !0);
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
          exec: function(n) {
          },
          readOnly: !0
        },
        {
          name: "cut",
          description: "Cut",
          exec: function(n) {
            var r = n.$copyWithEmptySelection && n.selection.isEmpty(), i = r ? n.selection.getLineRange() : n.selection.getRange();
            n._emit("cut", i), i.isEmpty() || n.session.remove(i), n.clearSelection();
          },
          scrollIntoView: "cursor",
          multiSelectAction: "forEach"
        },
        {
          name: "paste",
          description: "Paste",
          exec: function(n, r) {
            n.$handlePaste(r);
          },
          scrollIntoView: "cursor"
        },
        {
          name: "removeline",
          description: "Remove line",
          bindKey: a("Ctrl-D", "Command-D"),
          exec: function(n) {
            n.removeLines();
          },
          scrollIntoView: "cursor",
          multiSelectAction: "forEachLine"
        },
        {
          name: "duplicateSelection",
          description: "Duplicate selection",
          bindKey: a("Ctrl-Shift-D", "Command-Shift-D"),
          exec: function(n) {
            n.duplicateSelection();
          },
          scrollIntoView: "cursor",
          multiSelectAction: "forEach"
        },
        {
          name: "sortlines",
          description: "Sort lines",
          bindKey: a("Ctrl-Alt-S", "Command-Alt-S"),
          exec: function(n) {
            n.sortLines();
          },
          scrollIntoView: "selection",
          multiSelectAction: "forEachLine"
        },
        {
          name: "togglecomment",
          description: "Toggle comment",
          bindKey: a("Ctrl-/", "Command-/"),
          exec: function(n) {
            n.toggleCommentLines();
          },
          multiSelectAction: "forEachLine",
          scrollIntoView: "selectionPart"
        },
        {
          name: "toggleBlockComment",
          description: "Toggle block comment",
          bindKey: a("Ctrl-Shift-/", "Command-Shift-/"),
          exec: function(n) {
            n.toggleBlockComment();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "selectionPart"
        },
        {
          name: "modifyNumberUp",
          description: "Modify number up",
          bindKey: a("Ctrl-Shift-Up", "Alt-Shift-Up"),
          exec: function(n) {
            n.modifyNumber(1);
          },
          scrollIntoView: "cursor",
          multiSelectAction: "forEach"
        },
        {
          name: "modifyNumberDown",
          description: "Modify number down",
          bindKey: a("Ctrl-Shift-Down", "Alt-Shift-Down"),
          exec: function(n) {
            n.modifyNumber(-1);
          },
          scrollIntoView: "cursor",
          multiSelectAction: "forEach"
        },
        {
          name: "replace",
          description: "Replace",
          bindKey: a("Ctrl-H", "Command-Option-F"),
          exec: function(n) {
            S.loadModule("ace/ext/searchbox", function(r) {
              r.Search(n, !0);
            });
          }
        },
        {
          name: "undo",
          description: "Undo",
          bindKey: a("Ctrl-Z", "Command-Z"),
          exec: function(n) {
            n.undo();
          }
        },
        {
          name: "redo",
          description: "Redo",
          bindKey: a("Ctrl-Shift-Z|Ctrl-Y", "Command-Shift-Z|Command-Y"),
          exec: function(n) {
            n.redo();
          }
        },
        {
          name: "copylinesup",
          description: "Copy lines up",
          bindKey: a("Alt-Shift-Up", "Command-Option-Up"),
          exec: function(n) {
            n.copyLinesUp();
          },
          scrollIntoView: "cursor"
        },
        {
          name: "movelinesup",
          description: "Move lines up",
          bindKey: a("Alt-Up", "Option-Up"),
          exec: function(n) {
            n.moveLinesUp();
          },
          scrollIntoView: "cursor"
        },
        {
          name: "copylinesdown",
          description: "Copy lines down",
          bindKey: a("Alt-Shift-Down", "Command-Option-Down"),
          exec: function(n) {
            n.copyLinesDown();
          },
          scrollIntoView: "cursor"
        },
        {
          name: "movelinesdown",
          description: "Move lines down",
          bindKey: a("Alt-Down", "Option-Down"),
          exec: function(n) {
            n.moveLinesDown();
          },
          scrollIntoView: "cursor"
        },
        {
          name: "del",
          description: "Delete",
          bindKey: a("Delete", "Delete|Ctrl-D|Shift-Delete"),
          exec: function(n) {
            n.remove("right");
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "backspace",
          description: "Backspace",
          bindKey: a("Shift-Backspace|Backspace", "Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"),
          exec: function(n) {
            n.remove("left");
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "cut_or_delete",
          description: "Cut or delete",
          bindKey: a("Shift-Delete", null),
          exec: function(n) {
            if (n.selection.isEmpty())
              n.remove("left");
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
          exec: function(n) {
            n.removeToLineStart();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "removetolineend",
          description: "Remove to line end",
          bindKey: a("Alt-Delete", "Ctrl-K|Command-Delete"),
          exec: function(n) {
            n.removeToLineEnd();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "removetolinestarthard",
          description: "Remove to line start hard",
          bindKey: a("Ctrl-Shift-Backspace", null),
          exec: function(n) {
            var r = n.selection.getRange();
            r.start.column = 0, n.session.remove(r);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "removetolineendhard",
          description: "Remove to line end hard",
          bindKey: a("Ctrl-Shift-Delete", null),
          exec: function(n) {
            var r = n.selection.getRange();
            r.end.column = Number.MAX_VALUE, n.session.remove(r);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "removewordleft",
          description: "Remove word left",
          bindKey: a("Ctrl-Backspace", "Alt-Backspace|Ctrl-Alt-Backspace"),
          exec: function(n) {
            n.removeWordLeft();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "removewordright",
          description: "Remove word right",
          bindKey: a("Ctrl-Delete", "Alt-Delete"),
          exec: function(n) {
            n.removeWordRight();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "outdent",
          description: "Outdent",
          bindKey: a("Shift-Tab", "Shift-Tab"),
          exec: function(n) {
            n.blockOutdent();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "selectionPart"
        },
        {
          name: "indent",
          description: "Indent",
          bindKey: a("Tab", "Tab"),
          exec: function(n) {
            n.indent();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "selectionPart"
        },
        {
          name: "blockoutdent",
          description: "Block outdent",
          bindKey: a("Ctrl-[", "Ctrl-["),
          exec: function(n) {
            n.blockOutdent();
          },
          multiSelectAction: "forEachLine",
          scrollIntoView: "selectionPart"
        },
        {
          name: "blockindent",
          description: "Block indent",
          bindKey: a("Ctrl-]", "Ctrl-]"),
          exec: function(n) {
            n.blockIndent();
          },
          multiSelectAction: "forEachLine",
          scrollIntoView: "selectionPart"
        },
        {
          name: "insertstring",
          description: "Insert string",
          exec: function(n, r) {
            n.insert(r);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "inserttext",
          description: "Insert text",
          exec: function(n, r) {
            n.insert(b.stringRepeat(r.text || "", r.times || 1));
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "splitline",
          description: "Split line",
          bindKey: a(null, "Ctrl-O"),
          exec: function(n) {
            n.splitLine();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "transposeletters",
          description: "Transpose letters",
          bindKey: a("Alt-Shift-X", "Ctrl-T"),
          exec: function(n) {
            n.transposeLetters();
          },
          multiSelectAction: function(n) {
            n.transposeSelections(1);
          },
          scrollIntoView: "cursor"
        },
        {
          name: "touppercase",
          description: "To uppercase",
          bindKey: a("Ctrl-U", "Ctrl-U"),
          exec: function(n) {
            n.toUpperCase();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "tolowercase",
          description: "To lowercase",
          bindKey: a("Ctrl-Shift-U", "Ctrl-Shift-U"),
          exec: function(n) {
            n.toLowerCase();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "autoindent",
          description: "Auto Indent",
          bindKey: a(null, null),
          exec: function(n) {
            n.autoIndent();
          },
          scrollIntoView: "animate"
        },
        {
          name: "expandtoline",
          description: "Expand to line",
          bindKey: a("Ctrl-Shift-L", "Command-Shift-L"),
          exec: function(n) {
            var r = n.selection.getRange();
            r.start.column = r.end.column = 0, r.end.row++, n.selection.setRange(r, !1);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor",
          readOnly: !0
        },
        {
          name: "openlink",
          bindKey: a("Ctrl+F3", "F3"),
          exec: function(n) {
            n.openLink();
          }
        },
        {
          name: "joinlines",
          description: "Join lines",
          bindKey: a(null, null),
          exec: function(n) {
            for (var r = n.selection.isBackwards(), i = r ? n.selection.getSelectionLead() : n.selection.getSelectionAnchor(), t = r ? n.selection.getSelectionAnchor() : n.selection.getSelectionLead(), e = n.session.doc.getLine(i.row).length, o = n.session.doc.getTextRange(n.selection.getRange()), s = o.replace(/\n\s*/, " ").length, l = n.session.doc.getLine(i.row), u = i.row + 1; u <= t.row + 1; u++) {
              var C = b.stringTrimLeft(b.stringTrimRight(n.session.doc.getLine(u)));
              C.length !== 0 && (C = " " + C), l += C;
            }
            t.row + 1 < n.session.doc.getLength() - 1 && (l += n.session.doc.getNewLineCharacter()), n.clearSelection(), n.session.doc.replace(new A(i.row, 0, t.row + 2, 0), l), s > 0 ? (n.selection.moveCursorTo(i.row, i.column), n.selection.selectTo(i.row, i.column + s)) : (e = n.session.doc.getLine(i.row).length > e ? e + 1 : e, n.selection.moveCursorTo(i.row, e));
          },
          multiSelectAction: "forEach",
          readOnly: !0
        },
        {
          name: "invertSelection",
          description: "Invert selection",
          bindKey: a(null, null),
          exec: function(n) {
            var r = n.session.doc.getLength() - 1, i = n.session.doc.getLine(r).length, t = n.selection.rangeList.ranges, e = [];
            t.length < 1 && (t = [n.selection.getRange()]);
            for (var o = 0; o < t.length; o++)
              o == t.length - 1 && (t[o].end.row === r && t[o].end.column === i || e.push(new A(t[o].end.row, t[o].end.column, r, i))), o === 0 ? t[o].start.row === 0 && t[o].start.column === 0 || e.push(new A(0, 0, t[o].start.row, t[o].start.column)) : e.push(new A(t[o - 1].end.row, t[o - 1].end.column, t[o].start.row, t[o].start.column));
            n.exitMultiSelectMode(), n.clearSelection();
            for (var o = 0; o < e.length; o++)
              n.selection.addRange(e[o], !1);
          },
          readOnly: !0,
          scrollIntoView: "none"
        },
        {
          name: "addLineAfter",
          description: "Add new line after the current line",
          exec: function(n) {
            n.selection.clearSelection(), n.navigateLineEnd(), n.insert(`
`);
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "addLineBefore",
          description: "Add new line before the current line",
          exec: function(n) {
            n.selection.clearSelection();
            var r = n.getCursorPosition();
            n.selection.moveTo(r.row - 1, Number.MAX_VALUE), n.insert(`
`), r.row === 0 && n.navigateUp();
          },
          multiSelectAction: "forEach",
          scrollIntoView: "cursor"
        },
        {
          name: "openCommandPallete",
          exec: function(n) {
            console.warn("This is an obsolete command. Please use `openCommandPalette` instead."), n.prompt({ $type: "commands" });
          },
          readOnly: !0
        },
        {
          name: "openCommandPalette",
          description: "Open command palette",
          bindKey: a("F1", "F1"),
          exec: function(n) {
            n.prompt({ $type: "commands" });
          },
          readOnly: !0
        },
        {
          name: "modeSelect",
          description: "Change language mode...",
          bindKey: a(null, null),
          exec: function(n) {
            n.prompt({ $type: "modes" });
          },
          readOnly: !0
        }
      ];
      for (var c = 1; c < 9; c++)
        R.commands.push({
          name: "foldToLevel" + c,
          description: "Fold To Level " + c,
          level: c,
          exec: function(n) {
            n.session.foldToLevel(this.level);
          },
          scrollIntoView: "center",
          readOnly: !0
        });
    }), ace.define("ace/keyboard/gutter_handler", ["require", "exports", "module", "ace/lib/keys", "ace/mouse/default_gutter_handler"], function(w, R, N) {
      var b = w("../lib/keys"), S = w("../mouse/default_gutter_handler").GutterTooltip, A = (
        /** @class */
        function() {
          function c(n) {
            this.editor = n, this.gutterLayer = n.renderer.$gutterLayer, this.element = n.renderer.$gutter, this.lines = n.renderer.$gutterLayer.$lines, this.activeRowIndex = null, this.activeLane = null, this.annotationTooltip = new S(this.editor);
          }
          return c.prototype.addListener = function() {
            this.element.addEventListener("keydown", this.$onGutterKeyDown.bind(this)), this.element.addEventListener("focusout", this.$blurGutter.bind(this)), this.editor.on("mousewheel", this.$blurGutter.bind(this));
          }, c.prototype.removeListener = function() {
            this.element.removeEventListener("keydown", this.$onGutterKeyDown.bind(this)), this.element.removeEventListener("focusout", this.$blurGutter.bind(this)), this.editor.off("mousewheel", this.$blurGutter.bind(this));
          }, c.prototype.$onGutterKeyDown = function(n) {
            if (this.annotationTooltip.isOpen) {
              n.preventDefault(), n.keyCode === b.escape && this.annotationTooltip.hideTooltip();
              return;
            }
            if (n.target === this.element) {
              if (n.keyCode != b.enter)
                return;
              n.preventDefault();
              var r = this.editor.getCursorPosition().row;
              this.editor.isRowVisible(r) || this.editor.scrollToLine(r, !0, !0), setTimeout(
                (function() {
                  var i = this.$rowToRowIndex(this.gutterLayer.$cursorCell.row), t = this.$findNearestFoldLaneWidget(i), e = this.$findNearestAnnotation(i);
                  if (!(t === null && e === null)) {
                    var o = this.$findClosestNumber(t, e, i);
                    if (o === t)
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
            this.$handleGutterKeyboardInteraction(n), setTimeout((function() {
              this.editor._signal("gutterkeydown", new a(n, this));
            }).bind(this), 10);
          }, c.prototype.$handleGutterKeyboardInteraction = function(n) {
            if (n.keyCode === b.tab) {
              n.preventDefault();
              return;
            }
            if (n.keyCode === b.escape) {
              n.preventDefault(), this.$blurGutter(), this.element.focus(), this.lane = null;
              return;
            }
            if (n.keyCode === b.up) {
              switch (n.preventDefault(), this.activeLane) {
                case "fold":
                  this.$moveFoldWidgetUp();
                  break;
                case "annotation":
                  this.$moveAnnotationUp();
                  break;
              }
              return;
            }
            if (n.keyCode === b.down) {
              switch (n.preventDefault(), this.activeLane) {
                case "fold":
                  this.$moveFoldWidgetDown();
                  break;
                case "annotation":
                  this.$moveAnnotationDown();
                  break;
              }
              return;
            }
            if (n.keyCode === b.left) {
              n.preventDefault(), this.$switchLane("annotation");
              return;
            }
            if (n.keyCode === b.right) {
              n.preventDefault(), this.$switchLane("fold");
              return;
            }
            if (n.keyCode === b.enter || n.keyCode === b.space) {
              switch (n.preventDefault(), this.activeLane) {
                case "fold":
                  var r = this.$rowIndexToRow(this.activeRowIndex), i = this.editor.session.$gutterCustomWidgets[r];
                  if (i)
                    i.callbacks && i.callbacks.onClick && i.callbacks.onClick(n, r);
                  else if (this.gutterLayer.session.foldWidgets[r] === "start") {
                    this.editor.session.onFoldWidgetClick(this.$rowIndexToRow(this.activeRowIndex), n), setTimeout(
                      (function() {
                        this.$rowIndexToRow(this.activeRowIndex) !== r && (this.$blurFoldWidget(this.activeRowIndex), this.activeRowIndex = this.$rowToRowIndex(r), this.$focusFoldWidget(this.activeRowIndex));
                      }).bind(this),
                      10
                    );
                    break;
                  } else if (this.gutterLayer.session.foldWidgets[this.$rowIndexToRow(this.activeRowIndex)] === "end")
                    break;
                  return;
                case "annotation":
                  var t = this.lines.cells[this.activeRowIndex].element.childNodes[2], e = t.getBoundingClientRect(), o = this.annotationTooltip.getElement().style;
                  o.left = e.right + "px", o.top = e.bottom + "px", this.annotationTooltip.showTooltip(this.$rowIndexToRow(this.activeRowIndex));
                  break;
              }
              return;
            }
          }, c.prototype.$blurGutter = function() {
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
          }, c.prototype.$isFoldWidgetVisible = function(n) {
            var r = this.editor.isRowFullyVisible(this.$rowIndexToRow(n)), i = this.$getFoldWidget(n).style.display !== "none";
            return r && i;
          }, c.prototype.$isCustomWidgetVisible = function(n) {
            var r = this.editor.isRowFullyVisible(this.$rowIndexToRow(n)), i = !!this.$getCustomWidget(n);
            return r && i;
          }, c.prototype.$isAnnotationVisible = function(n) {
            var r = this.editor.isRowFullyVisible(this.$rowIndexToRow(n)), i = this.$getAnnotation(n).style.display !== "none";
            return r && i;
          }, c.prototype.$getFoldWidget = function(n) {
            var r = this.lines.get(n), i = r.element;
            return i.childNodes[1];
          }, c.prototype.$getCustomWidget = function(n) {
            var r = this.lines.get(n), i = r.element;
            return i.childNodes[3];
          }, c.prototype.$getAnnotation = function(n) {
            var r = this.lines.get(n), i = r.element;
            return i.childNodes[2];
          }, c.prototype.$findNearestFoldLaneWidget = function(n) {
            if (this.$isCustomWidgetVisible(n) || this.$isFoldWidgetVisible(n))
              return n;
            for (var r = 0; n - r > 0 || n + r < this.lines.getLength() - 1; ) {
              if (r++, n - r >= 0 && this.$isCustomWidgetVisible(n - r))
                return n - r;
              if (n + r <= this.lines.getLength() - 1 && this.$isCustomWidgetVisible(n + r))
                return n + r;
              if (n - r >= 0 && this.$isFoldWidgetVisible(n - r))
                return n - r;
              if (n + r <= this.lines.getLength() - 1 && this.$isFoldWidgetVisible(n + r))
                return n + r;
            }
            return null;
          }, c.prototype.$findNearestAnnotation = function(n) {
            if (this.$isAnnotationVisible(n))
              return n;
            for (var r = 0; n - r > 0 || n + r < this.lines.getLength() - 1; ) {
              if (r++, n - r >= 0 && this.$isAnnotationVisible(n - r))
                return n - r;
              if (n + r <= this.lines.getLength() - 1 && this.$isAnnotationVisible(n + r))
                return n + r;
            }
            return null;
          }, c.prototype.$focusFoldWidget = function(n) {
            if (n != null) {
              var r = this.$getFoldWidget(n);
              r.classList.add(this.editor.renderer.keyboardFocusClassName), r.focus();
            }
          }, c.prototype.$focusCustomWidget = function(n) {
            if (n != null) {
              var r = this.$getCustomWidget(n);
              r && (r.classList.add(this.editor.renderer.keyboardFocusClassName), r.focus());
            }
          }, c.prototype.$focusAnnotation = function(n) {
            if (n != null) {
              var r = this.$getAnnotation(n);
              r.classList.add(this.editor.renderer.keyboardFocusClassName), r.focus();
            }
          }, c.prototype.$blurFoldWidget = function(n) {
            var r = this.$getFoldWidget(n);
            r.classList.remove(this.editor.renderer.keyboardFocusClassName), r.blur();
          }, c.prototype.$blurCustomWidget = function(n) {
            var r = this.$getCustomWidget(n);
            r && (r.classList.remove(this.editor.renderer.keyboardFocusClassName), r.blur());
          }, c.prototype.$blurAnnotation = function(n) {
            var r = this.$getAnnotation(n);
            r.classList.remove(this.editor.renderer.keyboardFocusClassName), r.blur();
          }, c.prototype.$moveFoldWidgetUp = function() {
            for (var n = this.activeRowIndex; n > 0; )
              if (n--, this.$isFoldWidgetVisible(n) || this.$isCustomWidgetVisible(n)) {
                this.$blurFoldWidget(this.activeRowIndex), this.$blurCustomWidget(this.activeRowIndex), this.activeRowIndex = n, this.$isFoldWidgetVisible(n) ? this.$focusFoldWidget(this.activeRowIndex) : this.$focusCustomWidget(this.activeRowIndex);
                return;
              }
          }, c.prototype.$moveFoldWidgetDown = function() {
            for (var n = this.activeRowIndex; n < this.lines.getLength() - 1; )
              if (n++, this.$isFoldWidgetVisible(n) || this.$isCustomWidgetVisible(n)) {
                this.$blurFoldWidget(this.activeRowIndex), this.$blurCustomWidget(this.activeRowIndex), this.activeRowIndex = n, this.$isFoldWidgetVisible(n) ? this.$focusFoldWidget(this.activeRowIndex) : this.$focusCustomWidget(this.activeRowIndex);
                return;
              }
          }, c.prototype.$moveAnnotationUp = function() {
            for (var n = this.activeRowIndex; n > 0; )
              if (n--, this.$isAnnotationVisible(n)) {
                this.$blurAnnotation(this.activeRowIndex), this.activeRowIndex = n, this.$focusAnnotation(this.activeRowIndex);
                return;
              }
          }, c.prototype.$moveAnnotationDown = function() {
            for (var n = this.activeRowIndex; n < this.lines.getLength() - 1; )
              if (n++, this.$isAnnotationVisible(n)) {
                this.$blurAnnotation(this.activeRowIndex), this.activeRowIndex = n, this.$focusAnnotation(this.activeRowIndex);
                return;
              }
          }, c.prototype.$findClosestNumber = function(n, r, i) {
            return n === null ? r : r === null || Math.abs(i - n) <= Math.abs(i - r) ? n : r;
          }, c.prototype.$switchLane = function(n) {
            switch (n) {
              case "annotation":
                if (this.activeLane === "annotation")
                  break;
                var r = this.$findNearestAnnotation(this.activeRowIndex);
                if (r == null)
                  break;
                this.activeLane = "annotation", this.$blurFoldWidget(this.activeRowIndex), this.$blurCustomWidget(this.activeRowIndex), this.activeRowIndex = r, this.$focusAnnotation(this.activeRowIndex);
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
          }, c.prototype.$rowIndexToRow = function(n) {
            var r = this.lines.get(n);
            return r ? r.row : null;
          }, c.prototype.$rowToRowIndex = function(n) {
            for (var r = 0; r < this.lines.getLength(); r++) {
              var i = this.lines.get(r);
              if (i.row == n)
                return r;
            }
            return null;
          }, c;
        }()
      );
      R.GutterKeyboardHandler = A;
      var a = (
        /** @class */
        function() {
          function c(n, r) {
            this.gutterKeyboardHandler = r, this.domEvent = n;
          }
          return c.prototype.getKey = function() {
            return b.keyCodeToString(this.domEvent.keyCode);
          }, c.prototype.getRow = function() {
            return this.gutterKeyboardHandler.$rowIndexToRow(this.gutterKeyboardHandler.activeRowIndex);
          }, c.prototype.isInAnnotationLane = function() {
            return this.gutterKeyboardHandler.activeLane === "annotation";
          }, c.prototype.isInFoldLane = function() {
            return this.gutterKeyboardHandler.activeLane === "fold";
          }, c;
        }()
      );
      R.GutterKeyboardEvent = a;
    }), ace.define("ace/editor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/keyboard/textinput", "ace/mouse/mouse_handler", "ace/mouse/fold_handler", "ace/keyboard/keybinding", "ace/edit_session", "ace/search", "ace/range", "ace/lib/event_emitter", "ace/commands/command_manager", "ace/commands/default_commands", "ace/config", "ace/token_iterator", "ace/keyboard/gutter_handler", "ace/config", "ace/clipboard", "ace/lib/keys", "ace/lib/event", "ace/tooltip"], function(w, R, N) {
      var b = this && this.__values || function(d) {
        var h = typeof Symbol == "function" && Symbol.iterator, m = h && d[h], x = 0;
        if (m) return m.call(d);
        if (d && typeof d.length == "number") return {
          next: function() {
            return d && x >= d.length && (d = void 0), { value: d && d[x++], done: !d };
          }
        };
        throw new TypeError(h ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }, S = w("./lib/oop"), A = w("./lib/dom"), a = w("./lib/lang"), c = w("./lib/useragent"), n = w("./keyboard/textinput").TextInput, r = w("./mouse/mouse_handler").MouseHandler, i = w("./mouse/fold_handler").FoldHandler, t = w("./keyboard/keybinding").KeyBinding, e = w("./edit_session").EditSession, o = w("./search").Search, s = w("./range").Range, l = w("./lib/event_emitter").EventEmitter, u = w("./commands/command_manager").CommandManager, C = w("./commands/default_commands").commands, p = w("./config"), f = w("./token_iterator").TokenIterator, g = w("./keyboard/gutter_handler").GutterKeyboardHandler, v = w("./config").nls, M = w("./clipboard"), W = w("./lib/keys"), k = w("./lib/event"), Z = w("./tooltip").HoverTooltip, y = (
        /** @class */
        function() {
          function d(h, m, x) {
            this.id = "editor" + ++d.$uid, this.session, this.$toDestroy = [];
            var $ = h.getContainerElement();
            this.container = $, this.renderer = h, this.commands = new u(c.isMac ? "mac" : "win", C), typeof document == "object" && (this.textInput = new n(h.getTextAreaContainer(), this), this.renderer.textarea = this.textInput.getElement(), this.$mouseHandler = new r(this), new i(this)), this.keyBinding = new t(this), this.$search = new o().set({
              wrap: !0
            }), this.$historyTracker = this.$historyTracker.bind(this), this.commands.on("exec", this.$historyTracker), this.$initOperationListeners(), this._$emitInputEvent = a.delayedCall((function() {
              this._signal("input", {}), this.session && !this.session.destroyed && this.session.bgTokenizer.scheduleStart();
            }).bind(this)), this.on("change", function(L, B) {
              B._$emitInputEvent.schedule(31);
            }), this.setSession(m || x && x.session || new e("")), p.resetOptions(this), x && this.setOptions(x), p._signal("editor", this);
          }
          return d.prototype.$initOperationListeners = function() {
            this.commands.on("exec", this.startOperation.bind(this), !0), this.commands.on("afterExec", this.endOperation.bind(this), !0);
          }, d.prototype.startOperation = function(h) {
            this.session.startOperation(h);
          }, d.prototype.endOperation = function(h) {
            this.session.endOperation(h);
          }, d.prototype.onStartOperation = function(h) {
            this.curOp = this.session.curOp, this.curOp.scrollTop = this.renderer.scrollTop, this.prevOp = this.session.prevOp, h || (this.previousCommand = null);
          }, d.prototype.onEndOperation = function(h) {
            if (this.curOp && this.session) {
              if (h && h.returnValue === !1) {
                this.curOp = null;
                return;
              }
              if (this._signal("beforeEndOperation"), !this.curOp)
                return;
              var m = this.curOp.command, x = m && m.scrollIntoView;
              if (x) {
                switch (x) {
                  case "center-animate":
                    x = "animate";
                  case "center":
                    this.renderer.scrollCursorIntoView(null, 0.5);
                    break;
                  case "animate":
                  case "cursor":
                    this.renderer.scrollCursorIntoView();
                    break;
                  case "selectionPart":
                    var $ = this.selection.getRange(), L = this.renderer.layerConfig;
                    ($.start.row >= L.lastRow || $.end.row <= L.firstRow) && this.renderer.scrollSelectionIntoView(this.selection.anchor, this.selection.lead);
                    break;
                }
                x == "animate" && this.renderer.animateScrolling(this.curOp.scrollTop);
              }
              this.$lastSel = this.session.selection.toJSON(), this.prevOp = this.curOp, this.curOp = null;
            }
          }, d.prototype.$historyTracker = function(h) {
            if (this.$mergeUndoDeltas) {
              var m = this.prevOp, x = this.$mergeableCommands, $ = m.command && h.command.name == m.command.name;
              if (h.command.name == "insertstring") {
                var L = h.args;
                this.mergeNextCommand === void 0 && (this.mergeNextCommand = !0), $ = $ && this.mergeNextCommand && (!/\s/.test(L) || /\s/.test(m.args)), this.mergeNextCommand = !0;
              } else
                $ = $ && x.indexOf(h.command.name) !== -1;
              this.$mergeUndoDeltas != "always" && Date.now() - this.sequenceStartTime > 2e3 && ($ = !1), $ ? this.session.mergeUndoDeltas = !0 : x.indexOf(h.command.name) !== -1 && (this.sequenceStartTime = Date.now());
            }
          }, d.prototype.setKeyboardHandler = function(h, m) {
            if (h && typeof h == "string" && h != "ace") {
              this.$keybindingId = h;
              var x = this;
              p.loadModule(["keybinding", h], function($) {
                x.$keybindingId == h && x.keyBinding.setKeyboardHandler($ && $.handler), m && m();
              });
            } else
              this.$keybindingId = null, this.keyBinding.setKeyboardHandler(h), m && m();
          }, d.prototype.getKeyboardHandler = function() {
            return this.keyBinding.getKeyboardHandler();
          }, d.prototype.setSession = function(h) {
            if (this.session != h) {
              this.curOp && this.endOperation(), this.curOp = {};
              var m = this.session;
              if (m) {
                this.session.off("change", this.$onDocumentChange), this.session.off("changeMode", this.$onChangeMode), this.session.off("tokenizerUpdate", this.$onTokenizerUpdate), this.session.off("changeTabSize", this.$onChangeTabSize), this.session.off("changeWrapLimit", this.$onChangeWrapLimit), this.session.off("changeWrapMode", this.$onChangeWrapMode), this.session.off("changeFold", this.$onChangeFold), this.session.off("changeFrontMarker", this.$onChangeFrontMarker), this.session.off("changeBackMarker", this.$onChangeBackMarker), this.session.off("changeBreakpoint", this.$onChangeBreakpoint), this.session.off("changeAnnotation", this.$onChangeAnnotation), this.session.off("changeOverwrite", this.$onCursorChange), this.session.off("changeScrollTop", this.$onScrollTopChange), this.session.off("changeScrollLeft", this.$onScrollLeftChange), this.session.off("startOperation", this.$onStartOperation), this.session.off("endOperation", this.$onEndOperation);
                var x = this.session.getSelection();
                x.off("changeCursor", this.$onCursorChange), x.off("changeSelection", this.$onSelectionChange);
              }
              this.session = h, h ? (this.$onDocumentChange = this.onDocumentChange.bind(this), h.on("change", this.$onDocumentChange), this.renderer.setSession(h), this.$onChangeMode = this.onChangeMode.bind(this), h.on("changeMode", this.$onChangeMode), this.$onTokenizerUpdate = this.onTokenizerUpdate.bind(this), h.on("tokenizerUpdate", this.$onTokenizerUpdate), this.$onChangeTabSize = this.renderer.onChangeTabSize.bind(this.renderer), h.on("changeTabSize", this.$onChangeTabSize), this.$onChangeWrapLimit = this.onChangeWrapLimit.bind(this), h.on("changeWrapLimit", this.$onChangeWrapLimit), this.$onChangeWrapMode = this.onChangeWrapMode.bind(this), h.on("changeWrapMode", this.$onChangeWrapMode), this.$onChangeFold = this.onChangeFold.bind(this), h.on("changeFold", this.$onChangeFold), this.$onChangeFrontMarker = this.onChangeFrontMarker.bind(this), this.session.on("changeFrontMarker", this.$onChangeFrontMarker), this.$onChangeBackMarker = this.onChangeBackMarker.bind(this), this.session.on("changeBackMarker", this.$onChangeBackMarker), this.$onChangeBreakpoint = this.onChangeBreakpoint.bind(this), this.session.on("changeBreakpoint", this.$onChangeBreakpoint), this.$onChangeAnnotation = this.onChangeAnnotation.bind(this), this.session.on("changeAnnotation", this.$onChangeAnnotation), this.$onCursorChange = this.onCursorChange.bind(this), this.session.on("changeOverwrite", this.$onCursorChange), this.$onScrollTopChange = this.onScrollTopChange.bind(this), this.session.on("changeScrollTop", this.$onScrollTopChange), this.$onScrollLeftChange = this.onScrollLeftChange.bind(this), this.session.on("changeScrollLeft", this.$onScrollLeftChange), this.selection = h.getSelection(), this.selection.on("changeCursor", this.$onCursorChange), this.$onSelectionChange = this.onSelectionChange.bind(this), this.selection.on("changeSelection", this.$onSelectionChange), this.$onStartOperation = this.onStartOperation.bind(this), this.session.on("startOperation", this.$onStartOperation), this.$onEndOperation = this.onEndOperation.bind(this), this.session.on("endOperation", this.$onEndOperation), this.onChangeMode(), this.onCursorChange(), this.onScrollTopChange(), this.onScrollLeftChange(), this.onSelectionChange(), this.onChangeFrontMarker(), this.onChangeBackMarker(), this.onChangeBreakpoint(), this.onChangeAnnotation(), this.session.getUseWrapMode() && this.renderer.adjustWrapLimit(), this.renderer.updateFull()) : (this.selection = null, this.renderer.setSession(h)), this._signal("changeSession", {
                session: h,
                oldSession: m
              }), this.curOp = null, m && m._signal("changeEditor", { oldEditor: this }), m && (m.$editor = null), h && h._signal("changeEditor", { editor: this }), h && (h.$editor = this), h && !h.destroyed && h.bgTokenizer.scheduleStart();
            }
          }, d.prototype.getSession = function() {
            return this.session;
          }, d.prototype.setValue = function(h, m) {
            return this.session.doc.setValue(h), m ? m == 1 ? this.navigateFileEnd() : m == -1 && this.navigateFileStart() : this.selectAll(), h;
          }, d.prototype.getValue = function() {
            return this.session.getValue();
          }, d.prototype.getSelection = function() {
            return this.selection;
          }, d.prototype.resize = function(h) {
            this.renderer.onResize(h);
          }, d.prototype.setTheme = function(h, m) {
            this.renderer.setTheme(h, m);
          }, d.prototype.getTheme = function() {
            return this.renderer.getTheme();
          }, d.prototype.setStyle = function(h, m) {
            this.renderer.setStyle(h, m);
          }, d.prototype.unsetStyle = function(h) {
            this.renderer.unsetStyle(h);
          }, d.prototype.getFontSize = function() {
            return this.getOption("fontSize") || A.computedStyle(this.container).fontSize;
          }, d.prototype.setFontSize = function(h) {
            this.setOption("fontSize", h);
          }, d.prototype.$highlightBrackets = function() {
            if (!this.$highlightPending) {
              var h = this;
              this.$highlightPending = !0, setTimeout(function() {
                h.$highlightPending = !1;
                var m = h.session;
                if (!(!m || m.destroyed)) {
                  m.$bracketHighlight && (m.$bracketHighlight.markerIds.forEach(function(E) {
                    m.removeMarker(E);
                  }), m.$bracketHighlight = null);
                  var x = h.getCursorPosition(), $ = h.getKeyboardHandler(), L = $ && $.$getDirectionForHighlight && $.$getDirectionForHighlight(h), B = m.getMatchingBracketRanges(x, L);
                  if (!B) {
                    var T = new f(m, x.row, x.column), V = T.getCurrentToken();
                    if (V && /\b(?:tag-open|tag-name)/.test(V.type)) {
                      var _ = m.getMatchingTags(x);
                      _ && (B = [
                        _.openTagName.isEmpty() ? _.openTag : _.openTagName,
                        _.closeTagName.isEmpty() ? _.closeTag : _.closeTagName
                      ]);
                    }
                  }
                  if (!B && m.$mode.getMatching && (B = m.$mode.getMatching(h.session)), !B) {
                    h.getHighlightIndentGuides() && h.renderer.$textLayer.$highlightIndentGuide();
                    return;
                  }
                  var O = "ace_bracket";
                  Array.isArray(B) ? B.length == 1 && (O = "ace_error_bracket") : B = [B], B.length == 2 && (s.comparePoints(B[0].end, B[1].start) == 0 ? B = [s.fromPoints(B[0].start, B[1].end)] : s.comparePoints(B[0].start, B[1].end) == 0 && (B = [s.fromPoints(B[1].start, B[0].end)])), m.$bracketHighlight = {
                    ranges: B,
                    markerIds: B.map(function(E) {
                      return m.addMarker(E, O, "text");
                    })
                  }, h.getHighlightIndentGuides() && h.renderer.$textLayer.$highlightIndentGuide();
                }
              }, 50);
            }
          }, d.prototype.focus = function() {
            this.textInput.focus();
          }, d.prototype.isFocused = function() {
            return this.textInput.isFocused();
          }, d.prototype.blur = function() {
            this.textInput.blur();
          }, d.prototype.onFocus = function(h) {
            this.$isFocused || (this.$isFocused = !0, this.renderer.showCursor(), this.renderer.visualizeFocus(), this._emit("focus", h));
          }, d.prototype.onBlur = function(h) {
            this.$isFocused && (this.$isFocused = !1, this.renderer.hideCursor(), this.renderer.visualizeBlur(), this._emit("blur", h));
          }, d.prototype.$cursorChange = function() {
            this.renderer.updateCursor(), this.$highlightBrackets(), this.$updateHighlightActiveLine();
          }, d.prototype.onDocumentChange = function(h) {
            var m = this.session.$useWrapMode, x = h.start.row == h.end.row ? h.end.row : 1 / 0;
            this.renderer.updateLines(h.start.row, x, m), this._signal("change", h), this.$cursorChange();
          }, d.prototype.onTokenizerUpdate = function(h) {
            var m = h.data;
            this.renderer.updateLines(m.first, m.last);
          }, d.prototype.onScrollTopChange = function() {
            this.renderer.scrollToY(this.session.getScrollTop());
          }, d.prototype.onScrollLeftChange = function() {
            this.renderer.scrollToX(this.session.getScrollLeft());
          }, d.prototype.onCursorChange = function() {
            this.$cursorChange(), this._signal("changeSelection");
          }, d.prototype.$updateHighlightActiveLine = function() {
            var h = this.getSession(), m;
            if (this.$highlightActiveLine && ((this.$selectionStyle != "line" || !this.selection.isMultiLine()) && (m = this.getCursorPosition()), this.renderer.theme && this.renderer.theme.$selectionColorConflict && !this.selection.isEmpty() && (m = !1), this.renderer.$maxLines && this.session.getLength() === 1 && !(this.renderer.$minLines > 1) && (m = !1)), h.$highlightLineMarker && !m)
              h.removeMarker(h.$highlightLineMarker.id), h.$highlightLineMarker = null;
            else if (!h.$highlightLineMarker && m) {
              var x = new s(m.row, m.column, m.row, 1 / 0);
              x.id = h.addMarker(x, "ace_active-line", "screenLine"), h.$highlightLineMarker = x;
            } else m && (h.$highlightLineMarker.start.row = m.row, h.$highlightLineMarker.end.row = m.row, h.$highlightLineMarker.start.column = m.column, h._signal("changeBackMarker"));
          }, d.prototype.onSelectionChange = function(h) {
            var m = this.session;
            if (m.$selectionMarker && m.removeMarker(m.$selectionMarker), m.$selectionMarker = null, this.selection.isEmpty())
              this.$updateHighlightActiveLine();
            else {
              var x = this.selection.getRange(), $ = this.getSelectionStyle();
              m.$selectionMarker = m.addMarker(x, "ace_selection", $);
            }
            var L = this.$highlightSelectedWord && this.$getSelectionHighLightRegexp();
            this.session.highlight(L), this._signal("changeSelection");
          }, d.prototype.$getSelectionHighLightRegexp = function() {
            var h = this.session, m = this.getSelectionRange();
            if (!(m.isEmpty() || m.isMultiLine())) {
              var x = m.start.column, $ = m.end.column, L = h.getLine(m.start.row), B = L.substring(x, $);
              if (!(B.length > 5e3 || !/[\w\d]/.test(B))) {
                var T = this.$search.$assembleRegExp({
                  wholeWord: !0,
                  caseSensitive: !0,
                  needle: B
                }), V = L.substring(x - 1, $ + 1);
                if (T.test(V))
                  return T;
              }
            }
          }, d.prototype.onChangeFrontMarker = function() {
            this.renderer.updateFrontMarkers();
          }, d.prototype.onChangeBackMarker = function() {
            this.renderer.updateBackMarkers();
          }, d.prototype.onChangeBreakpoint = function() {
            this.renderer.updateBreakpoints();
          }, d.prototype.onChangeAnnotation = function() {
            this.renderer.setAnnotations(this.session.getAnnotations());
          }, d.prototype.onChangeMode = function(h) {
            this.renderer.updateText(), this._emit("changeMode", h);
          }, d.prototype.onChangeWrapLimit = function() {
            this.renderer.updateFull();
          }, d.prototype.onChangeWrapMode = function() {
            this.renderer.onResize(!0);
          }, d.prototype.onChangeFold = function() {
            this.$updateHighlightActiveLine(), this.renderer.updateFull();
          }, d.prototype.getSelectedText = function() {
            return this.session.getTextRange(this.getSelectionRange());
          }, d.prototype.getCopyText = function() {
            var h = this.getSelectedText(), m = this.session.doc.getNewLineCharacter(), x = !1;
            if (!h && this.$copyWithEmptySelection) {
              x = !0;
              for (var $ = this.selection.getAllRanges(), L = 0; L < $.length; L++) {
                var B = $[L];
                L && $[L - 1].start.row == B.start.row || (h += this.session.getLine(B.start.row) + m);
              }
            }
            var T = { text: h };
            return this._signal("copy", T), M.lineMode = x ? T.text : !1, T.text;
          }, d.prototype.onCopy = function() {
            this.commands.exec("copy", this);
          }, d.prototype.onCut = function() {
            this.commands.exec("cut", this);
          }, d.prototype.onPaste = function(h, m) {
            var x = { text: h, event: m };
            this.commands.exec("paste", this, x);
          }, d.prototype.$handlePaste = function(h) {
            typeof h == "string" && (h = { text: h }), this._signal("paste", h);
            var m = h.text, x = m === M.lineMode, $ = this.session;
            if (!this.inMultiSelectMode || this.inVirtualSelectionMode)
              x ? $.insert({ row: this.selection.lead.row, column: 0 }, m) : this.insert(m);
            else if (x)
              this.selection.rangeList.ranges.forEach(function(O) {
                $.insert({ row: O.start.row, column: 0 }, m);
              });
            else {
              var L = m.split(/\r\n|\r|\n/), B = this.selection.rangeList.ranges, T = L.length == 2 && (!L[0] || !L[1]);
              if (L.length != B.length || T)
                return this.commands.exec("insertstring", this, m);
              for (var V = B.length; V--; ) {
                var _ = B[V];
                _.isEmpty() || $.remove(_), $.insert(_.start, L[V]);
              }
            }
          }, d.prototype.execCommand = function(h, m) {
            return this.commands.exec(h, this, m);
          }, d.prototype.insert = function(h, m) {
            var x = this.session, $ = x.getMode(), L = this.getCursorPosition();
            if (this.getBehavioursEnabled() && !m) {
              var B = $.transformAction(x.getState(L.row), "insertion", this, x, h);
              B && (h !== B.text && (this.inVirtualSelectionMode || (this.session.mergeUndoDeltas = !1, this.mergeNextCommand = !1)), h = B.text);
            }
            if (h == "	" && (h = this.session.getTabString()), this.selection.isEmpty()) {
              if (this.session.getOverwrite() && h.indexOf(`
`) == -1) {
                var T = s.fromPoints(L, L);
                T.end.column += h.length, this.session.remove(T);
              }
            } else {
              var T = this.getSelectionRange();
              L = this.session.remove(T), this.clearSelection();
            }
            if (h == `
` || h == `\r
`) {
              var E = x.getLine(L.row);
              if (L.column > E.search(/\S|$/)) {
                var V = E.substr(L.column).search(/\S|$/);
                x.doc.removeInLine(L.row, L.column, L.column + V);
              }
            }
            this.clearSelection();
            var _ = L.column, O = x.getState(L.row), E = x.getLine(L.row), F = $.checkOutdent(O, E, h);
            if (x.insert(L, h), B && B.selection && (B.selection.length == 2 ? this.selection.setSelectionRange(new s(L.row, _ + B.selection[0], L.row, _ + B.selection[1])) : this.selection.setSelectionRange(new s(L.row + B.selection[0], B.selection[1], L.row + B.selection[2], B.selection[3]))), this.$enableAutoIndent) {
              if (x.getDocument().isNewLine(h)) {
                var D = $.getNextLineIndent(O, E.slice(0, L.column), x.getTabString());
                x.insert({ row: L.row + 1, column: 0 }, D);
              }
              F && $.autoOutdent(O, x, L.row);
            }
          }, d.prototype.autoIndent = function() {
            for (var h = this.session, m = h.getMode(), x = this.selection.isEmpty() ? [new s(0, 0, h.doc.getLength() - 1, 0)] : this.selection.getAllRanges(), $ = "", L = "", B = "", T = h.getTabString(), V = 0; V < x.length; V++)
              for (var _ = x[V].start.row, O = x[V].end.row, E = _; E <= O; E++) {
                E > 0 && ($ = h.getState(E - 1), L = h.getLine(E - 1), B = m.getNextLineIndent($, L, T));
                var F = h.getLine(E), D = m.$getIndent(F);
                if (B !== D) {
                  if (D.length > 0) {
                    var Y = new s(E, 0, E, D.length);
                    h.remove(Y);
                  }
                  B.length > 0 && h.insert({ row: E, column: 0 }, B);
                }
                m.autoOutdent($, h, E);
              }
          }, d.prototype.onTextInput = function(h, m) {
            if (!m)
              return this.keyBinding.onTextInput(h);
            this.startOperation({ command: { name: "insertstring" } });
            var x = this.applyComposition.bind(this, h, m);
            this.selection.rangeCount ? this.forEachSelection(x) : x(), this.endOperation();
          }, d.prototype.applyComposition = function(h, m) {
            if (m.extendLeft || m.extendRight) {
              var x = this.selection.getRange();
              x.start.column -= m.extendLeft, x.end.column += m.extendRight, x.start.column < 0 && (x.start.row--, x.start.column += this.session.getLine(x.start.row).length + 1), this.selection.setRange(x), !h && !x.isEmpty() && this.remove();
            }
            if ((h || !this.selection.isEmpty()) && this.insert(h, !0), m.restoreStart || m.restoreEnd) {
              var x = this.selection.getRange();
              x.start.column -= m.restoreStart, x.end.column -= m.restoreEnd, this.selection.setRange(x);
            }
          }, d.prototype.onCommandKey = function(h, m, x) {
            return this.keyBinding.onCommandKey(h, m, x);
          }, d.prototype.setOverwrite = function(h) {
            this.session.setOverwrite(h);
          }, d.prototype.getOverwrite = function() {
            return this.session.getOverwrite();
          }, d.prototype.toggleOverwrite = function() {
            this.session.toggleOverwrite();
          }, d.prototype.setScrollSpeed = function(h) {
            this.setOption("scrollSpeed", h);
          }, d.prototype.getScrollSpeed = function() {
            return this.getOption("scrollSpeed");
          }, d.prototype.setDragDelay = function(h) {
            this.setOption("dragDelay", h);
          }, d.prototype.getDragDelay = function() {
            return this.getOption("dragDelay");
          }, d.prototype.setSelectionStyle = function(h) {
            this.setOption("selectionStyle", h);
          }, d.prototype.getSelectionStyle = function() {
            return this.getOption("selectionStyle");
          }, d.prototype.setHighlightActiveLine = function(h) {
            this.setOption("highlightActiveLine", h);
          }, d.prototype.getHighlightActiveLine = function() {
            return this.getOption("highlightActiveLine");
          }, d.prototype.setHighlightGutterLine = function(h) {
            this.setOption("highlightGutterLine", h);
          }, d.prototype.getHighlightGutterLine = function() {
            return this.getOption("highlightGutterLine");
          }, d.prototype.setHighlightSelectedWord = function(h) {
            this.setOption("highlightSelectedWord", h);
          }, d.prototype.getHighlightSelectedWord = function() {
            return this.$highlightSelectedWord;
          }, d.prototype.setAnimatedScroll = function(h) {
            this.renderer.setAnimatedScroll(h);
          }, d.prototype.getAnimatedScroll = function() {
            return this.renderer.getAnimatedScroll();
          }, d.prototype.setShowInvisibles = function(h) {
            this.renderer.setShowInvisibles(h);
          }, d.prototype.getShowInvisibles = function() {
            return this.renderer.getShowInvisibles();
          }, d.prototype.setDisplayIndentGuides = function(h) {
            this.renderer.setDisplayIndentGuides(h);
          }, d.prototype.getDisplayIndentGuides = function() {
            return this.renderer.getDisplayIndentGuides();
          }, d.prototype.setHighlightIndentGuides = function(h) {
            this.renderer.setHighlightIndentGuides(h);
          }, d.prototype.getHighlightIndentGuides = function() {
            return this.renderer.getHighlightIndentGuides();
          }, d.prototype.setShowPrintMargin = function(h) {
            this.renderer.setShowPrintMargin(h);
          }, d.prototype.getShowPrintMargin = function() {
            return this.renderer.getShowPrintMargin();
          }, d.prototype.setPrintMarginColumn = function(h) {
            this.renderer.setPrintMarginColumn(h);
          }, d.prototype.getPrintMarginColumn = function() {
            return this.renderer.getPrintMarginColumn();
          }, d.prototype.setReadOnly = function(h) {
            this.setOption("readOnly", h);
          }, d.prototype.getReadOnly = function() {
            return this.getOption("readOnly");
          }, d.prototype.setBehavioursEnabled = function(h) {
            this.setOption("behavioursEnabled", h);
          }, d.prototype.getBehavioursEnabled = function() {
            return this.getOption("behavioursEnabled");
          }, d.prototype.setWrapBehavioursEnabled = function(h) {
            this.setOption("wrapBehavioursEnabled", h);
          }, d.prototype.getWrapBehavioursEnabled = function() {
            return this.getOption("wrapBehavioursEnabled");
          }, d.prototype.setShowFoldWidgets = function(h) {
            this.setOption("showFoldWidgets", h);
          }, d.prototype.getShowFoldWidgets = function() {
            return this.getOption("showFoldWidgets");
          }, d.prototype.setFadeFoldWidgets = function(h) {
            this.setOption("fadeFoldWidgets", h);
          }, d.prototype.getFadeFoldWidgets = function() {
            return this.getOption("fadeFoldWidgets");
          }, d.prototype.remove = function(h) {
            this.selection.isEmpty() && (h == "left" ? this.selection.selectLeft() : this.selection.selectRight());
            var m = this.getSelectionRange();
            if (this.getBehavioursEnabled()) {
              var x = this.session, $ = x.getState(m.start.row), L = x.getMode().transformAction($, "deletion", this, x, m);
              if (m.end.column === 0) {
                var B = x.getTextRange(m);
                if (B[B.length - 1] == `
`) {
                  var T = x.getLine(m.end.row);
                  /^\s+$/.test(T) && (m.end.column = T.length);
                }
              }
              L && (m = L);
            }
            this.session.remove(m), this.clearSelection();
          }, d.prototype.removeWordRight = function() {
            this.selection.isEmpty() && this.selection.selectWordRight(), this.session.remove(this.getSelectionRange()), this.clearSelection();
          }, d.prototype.removeWordLeft = function() {
            this.selection.isEmpty() && this.selection.selectWordLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection();
          }, d.prototype.removeToLineStart = function() {
            this.selection.isEmpty() && this.selection.selectLineStart(), this.selection.isEmpty() && this.selection.selectLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection();
          }, d.prototype.removeToLineEnd = function() {
            this.selection.isEmpty() && this.selection.selectLineEnd();
            var h = this.getSelectionRange();
            h.start.column == h.end.column && h.start.row == h.end.row && (h.end.column = 0, h.end.row++), this.session.remove(h), this.clearSelection();
          }, d.prototype.splitLine = function() {
            this.selection.isEmpty() || (this.session.remove(this.getSelectionRange()), this.clearSelection());
            var h = this.getCursorPosition();
            this.insert(`
`), this.moveCursorToPosition(h);
          }, d.prototype.setGhostText = function(h, m) {
            this.renderer.setGhostText(h, m);
          }, d.prototype.removeGhostText = function() {
            this.renderer.removeGhostText();
          }, d.prototype.transposeLetters = function() {
            if (this.selection.isEmpty()) {
              var h = this.getCursorPosition(), m = h.column;
              if (m !== 0) {
                var x = this.session.getLine(h.row), $, L;
                m < x.length ? ($ = x.charAt(m) + x.charAt(m - 1), L = new s(h.row, m - 1, h.row, m + 1)) : ($ = x.charAt(m - 1) + x.charAt(m - 2), L = new s(h.row, m - 2, h.row, m)), this.session.replace(L, $), this.session.selection.moveToPosition(L.end);
              }
            }
          }, d.prototype.toLowerCase = function() {
            var h = this.getSelectionRange();
            this.selection.isEmpty() && this.selection.selectWord();
            var m = this.getSelectionRange(), x = this.session.getTextRange(m);
            this.session.replace(m, x.toLowerCase()), this.selection.setSelectionRange(h);
          }, d.prototype.toUpperCase = function() {
            var h = this.getSelectionRange();
            this.selection.isEmpty() && this.selection.selectWord();
            var m = this.getSelectionRange(), x = this.session.getTextRange(m);
            this.session.replace(m, x.toUpperCase()), this.selection.setSelectionRange(h);
          }, d.prototype.indent = function() {
            var h = this.session, m = this.getSelectionRange();
            if (m.start.row < m.end.row) {
              var x = this.$getSelectedRows();
              h.indentRows(x.first, x.last, "	");
              return;
            } else if (m.start.column < m.end.column) {
              var $ = h.getTextRange(m);
              if (!/^\s+$/.test($)) {
                var x = this.$getSelectedRows();
                h.indentRows(x.first, x.last, "	");
                return;
              }
            }
            var L = h.getLine(m.start.row), B = m.start, T = h.getTabSize(), V = h.documentToScreenColumn(B.row, B.column);
            if (this.session.getUseSoftTabs())
              var _ = T - V % T, O = a.stringRepeat(" ", _);
            else {
              for (var _ = V % T; L[m.start.column - 1] == " " && _; )
                m.start.column--, _--;
              this.selection.setSelectionRange(m), O = "	";
            }
            return this.insert(O);
          }, d.prototype.blockIndent = function() {
            var h = this.$getSelectedRows();
            this.session.indentRows(h.first, h.last, "	");
          }, d.prototype.blockOutdent = function() {
            var h = this.session.getSelection();
            this.session.outdentRows(h.getRange());
          }, d.prototype.sortLines = function() {
            for (var h = this.$getSelectedRows(), m = this.session, x = [], $ = h.first; $ <= h.last; $++)
              x.push(m.getLine($));
            x.sort(function(T, V) {
              return T.toLowerCase() < V.toLowerCase() ? -1 : T.toLowerCase() > V.toLowerCase() ? 1 : 0;
            });
            for (var L = new s(0, 0, 0, 0), $ = h.first; $ <= h.last; $++) {
              var B = m.getLine($);
              L.start.row = $, L.end.row = $, L.end.column = B.length, m.replace(L, x[$ - h.first]);
            }
          }, d.prototype.toggleCommentLines = function() {
            var h = this.session.getState(this.getCursorPosition().row), m = this.$getSelectedRows();
            this.session.getMode().toggleCommentLines(h, this.session, m.first, m.last);
          }, d.prototype.toggleBlockComment = function() {
            var h = this.getCursorPosition(), m = this.session.getState(h.row), x = this.getSelectionRange();
            this.session.getMode().toggleBlockComment(m, this.session, x, h);
          }, d.prototype.getNumberAt = function(h, m) {
            var x = /[\-]?[0-9]+(?:\.[0-9]+)?/g;
            x.lastIndex = 0;
            for (var $ = this.session.getLine(h); x.lastIndex < m; ) {
              var L = x.exec($);
              if (L.index <= m && L.index + L[0].length >= m) {
                var B = {
                  value: L[0],
                  start: L.index,
                  end: L.index + L[0].length
                };
                return B;
              }
            }
            return null;
          }, d.prototype.modifyNumber = function(h) {
            var m = this.selection.getCursor().row, x = this.selection.getCursor().column, $ = new s(m, x - 1, m, x), L = this.session.getTextRange($);
            if (!isNaN(parseFloat(L)) && isFinite(L)) {
              var B = this.getNumberAt(m, x);
              if (B) {
                var T = B.value.indexOf(".") >= 0 ? B.start + B.value.indexOf(".") + 1 : B.end, V = B.start + B.value.length - T, _ = parseFloat(B.value);
                _ *= Math.pow(10, V), T !== B.end && x < T ? h *= Math.pow(10, B.end - x - 1) : h *= Math.pow(10, B.end - x), _ += h, _ /= Math.pow(10, V);
                var O = _.toFixed(V), E = new s(m, B.start, m, B.end);
                this.session.replace(E, O), this.moveCursorTo(m, Math.max(B.start + 1, x + O.length - B.value.length));
              }
            } else
              this.toggleWord();
          }, d.prototype.toggleWord = function() {
            var h = this.selection.getCursor().row, m = this.selection.getCursor().column;
            this.selection.selectWord();
            var x = this.getSelectedText(), $ = this.selection.getWordRange().start.column, L = x.replace(/([a-z]+|[A-Z]+)(?=[A-Z_]|$)/g, "$1 ").split(/\s/), B = m - $ - 1;
            B < 0 && (B = 0);
            var T = 0, V = 0, _ = this;
            x.match(/[A-Za-z0-9_]+/) && L.forEach(function(ie, ge) {
              V = T + ie.length, B >= T && B <= V && (x = ie, _.selection.clearSelection(), _.moveCursorTo(h, T + $), _.selection.selectTo(h, V + $)), T = V;
            });
            for (var O = this.$toggleWordPairs, E, F = 0; F < O.length; F++)
              for (var D = O[F], Y = 0; Y <= 1; Y++) {
                var P = +!Y, X = x.match(new RegExp("^\\s?_?(" + a.escapeRegExp(D[Y]) + ")\\s?$", "i"));
                if (X) {
                  var Q = x.match(new RegExp("([_]|^|\\s)(" + a.escapeRegExp(X[1]) + ")($|\\s)", "g"));
                  Q && (E = x.replace(new RegExp(a.escapeRegExp(D[Y]), "i"), function(ie) {
                    var ge = D[P];
                    return ie.toUpperCase() == ie ? ge = ge.toUpperCase() : ie.charAt(0).toUpperCase() == ie.charAt(0) && (ge = ge.substr(0, 0) + D[P].charAt(0).toUpperCase() + ge.substr(1)), ge;
                  }), this.insert(E), E = "");
                }
              }
          }, d.prototype.findLinkAt = function(h, m) {
            var x, $, L = this.session.getLine(h), B = L.split(/((?:https?|ftp):\/\/[\S]+)/), T = m;
            T < 0 && (T = 0);
            var V = 0, _ = 0, O;
            try {
              for (var E = b(B), F = E.next(); !F.done; F = E.next()) {
                var D = F.value;
                if (_ = V + D.length, T >= V && T <= _ && D.match(/((?:https?|ftp):\/\/[\S]+)/)) {
                  O = D.replace(/[\s:.,'";}\]]+$/, "");
                  break;
                }
                V = _;
              }
            } catch (Y) {
              x = { error: Y };
            } finally {
              try {
                F && !F.done && ($ = E.return) && $.call(E);
              } finally {
                if (x) throw x.error;
              }
            }
            return O;
          }, d.prototype.openLink = function() {
            var h = this.selection.getCursor(), m = this.findLinkAt(h.row, h.column);
            return m && window.open(m, "_blank"), m != null;
          }, d.prototype.removeLines = function() {
            var h = this.$getSelectedRows();
            this.session.removeFullLines(h.first, h.last), this.clearSelection();
          }, d.prototype.duplicateSelection = function() {
            var h = this.selection, m = this.session, x = h.getRange(), $ = h.isBackwards();
            if (x.isEmpty()) {
              var L = x.start.row;
              m.duplicateLines(L, L);
            } else {
              var B = $ ? x.start : x.end, T = m.insert(B, m.getTextRange(x));
              x.start = B, x.end = T, h.setSelectionRange(x, $);
            }
          }, d.prototype.moveLinesDown = function() {
            this.$moveLines(1, !1);
          }, d.prototype.moveLinesUp = function() {
            this.$moveLines(-1, !1);
          }, d.prototype.moveText = function(h, m, x) {
            return this.session.moveText(h, m, x);
          }, d.prototype.copyLinesUp = function() {
            this.$moveLines(-1, !0);
          }, d.prototype.copyLinesDown = function() {
            this.$moveLines(1, !0);
          }, d.prototype.$moveLines = function(h, m) {
            var x, $, L = this.selection;
            if (!L.inMultiSelectMode || this.inVirtualSelectionMode) {
              var B = L.toOrientedRange();
              x = this.$getSelectedRows(B), $ = this.session.$moveLines(x.first, x.last, m ? 0 : h), m && h == -1 && ($ = 0), B.moveBy($, 0), L.fromOrientedRange(B);
            } else {
              var T = L.rangeList.ranges;
              L.rangeList.detach(this.session), this.inVirtualSelectionMode = !0;
              for (var V = 0, _ = 0, O = T.length, E = 0; E < O; E++) {
                var F = E;
                T[E].moveBy(V, 0), x = this.$getSelectedRows(T[E]);
                for (var D = x.first, Y = x.last; ++E < O; ) {
                  _ && T[E].moveBy(_, 0);
                  var P = this.$getSelectedRows(T[E]);
                  if (m && P.first != Y)
                    break;
                  if (!m && P.first > Y + 1)
                    break;
                  Y = P.last;
                }
                for (E--, V = this.session.$moveLines(D, Y, m ? 0 : h), m && h == -1 && (F = E + 1); F <= E; )
                  T[F].moveBy(V, 0), F++;
                m || (V = 0), _ += V;
              }
              L.fromOrientedRange(L.ranges[0]), L.rangeList.attach(this.session), this.inVirtualSelectionMode = !1;
            }
          }, d.prototype.$getSelectedRows = function(h) {
            return h = (h || this.getSelectionRange()).collapseRows(), {
              first: this.session.getRowFoldStart(h.start.row),
              last: this.session.getRowFoldEnd(h.end.row)
            };
          }, d.prototype.onCompositionStart = function(h) {
            this.renderer.showComposition(h);
          }, d.prototype.onCompositionUpdate = function(h) {
            this.renderer.setCompositionText(h);
          }, d.prototype.onCompositionEnd = function() {
            this.renderer.hideComposition();
          }, d.prototype.getFirstVisibleRow = function() {
            return this.renderer.getFirstVisibleRow();
          }, d.prototype.getLastVisibleRow = function() {
            return this.renderer.getLastVisibleRow();
          }, d.prototype.isRowVisible = function(h) {
            return h >= this.getFirstVisibleRow() && h <= this.getLastVisibleRow();
          }, d.prototype.isRowFullyVisible = function(h) {
            return h >= this.renderer.getFirstFullyVisibleRow() && h <= this.renderer.getLastFullyVisibleRow();
          }, d.prototype.$getVisibleRowCount = function() {
            return this.renderer.getScrollBottomRow() - this.renderer.getScrollTopRow() + 1;
          }, d.prototype.$moveByPage = function(h, m) {
            var x = this.renderer, $ = this.renderer.layerConfig, L = h * Math.floor($.height / $.lineHeight);
            m === !0 ? this.selection.$moveSelection(function() {
              this.moveCursorBy(L, 0);
            }) : m === !1 && (this.selection.moveCursorBy(L, 0), this.selection.clearSelection());
            var B = x.scrollTop;
            x.scrollBy(0, L * $.lineHeight), m != null && x.scrollCursorIntoView(null, 0.5), x.animateScrolling(B);
          }, d.prototype.selectPageDown = function() {
            this.$moveByPage(1, !0);
          }, d.prototype.selectPageUp = function() {
            this.$moveByPage(-1, !0);
          }, d.prototype.gotoPageDown = function() {
            this.$moveByPage(1, !1);
          }, d.prototype.gotoPageUp = function() {
            this.$moveByPage(-1, !1);
          }, d.prototype.scrollPageDown = function() {
            this.$moveByPage(1);
          }, d.prototype.scrollPageUp = function() {
            this.$moveByPage(-1);
          }, d.prototype.scrollToRow = function(h) {
            this.renderer.scrollToRow(h);
          }, d.prototype.scrollToLine = function(h, m, x, $) {
            this.renderer.scrollToLine(h, m, x, $);
          }, d.prototype.centerSelection = function() {
            var h = this.getSelectionRange(), m = {
              row: Math.floor(h.start.row + (h.end.row - h.start.row) / 2),
              column: Math.floor(h.start.column + (h.end.column - h.start.column) / 2)
            };
            this.renderer.alignCursor(m, 0.5);
          }, d.prototype.getCursorPosition = function() {
            return this.selection.getCursor();
          }, d.prototype.getCursorPositionScreen = function() {
            return this.session.documentToScreenPosition(this.getCursorPosition());
          }, d.prototype.getSelectionRange = function() {
            return this.selection.getRange();
          }, d.prototype.selectAll = function() {
            this.selection.selectAll();
          }, d.prototype.clearSelection = function() {
            this.selection.clearSelection();
          }, d.prototype.moveCursorTo = function(h, m) {
            this.selection.moveCursorTo(h, m);
          }, d.prototype.moveCursorToPosition = function(h) {
            this.selection.moveCursorToPosition(h);
          }, d.prototype.jumpToMatching = function(h, m) {
            var x = this.getCursorPosition(), $ = new f(this.session, x.row, x.column), L = $.getCurrentToken(), B = 0;
            L && L.type.indexOf("tag-name") !== -1 && (L = $.stepBackward());
            var T = L || $.stepForward();
            if (T) {
              var V, _ = !1, O = {}, E = x.column - T.start, F, D = {
                ")": "(",
                "(": "(",
                "]": "[",
                "[": "[",
                "{": "{",
                "}": "{"
              };
              do {
                if (T.value.match(/[{}()\[\]]/g)) {
                  for (; E < T.value.length && !_; E++)
                    if (D[T.value[E]])
                      switch (F = D[T.value[E]] + "." + T.type.replace("rparen", "lparen"), isNaN(O[F]) && (O[F] = 0), T.value[E]) {
                        case "(":
                        case "[":
                        case "{":
                          O[F]++;
                          break;
                        case ")":
                        case "]":
                        case "}":
                          O[F]--, O[F] === -1 && (V = "bracket", _ = !0);
                          break;
                      }
                } else T.type.indexOf("tag-name") !== -1 && (isNaN(O[T.value]) && (O[T.value] = 0), L.value === "<" && B > 1 ? O[T.value]++ : L.value === "</" && O[T.value]--, O[T.value] === -1 && (V = "tag", _ = !0));
                _ || (L = T, B++, T = $.stepForward(), E = 0);
              } while (T && !_);
              if (V) {
                var Y, P;
                if (V === "bracket")
                  Y = this.session.getBracketRange(x), Y || (Y = new s($.getCurrentTokenRow(), $.getCurrentTokenColumn() + E - 1, $.getCurrentTokenRow(), $.getCurrentTokenColumn() + E - 1), P = Y.start, (m || P.row === x.row && Math.abs(P.column - x.column) < 2) && (Y = this.session.getBracketRange(P)));
                else if (V === "tag") {
                  if (!T || T.type.indexOf("tag-name") === -1)
                    return;
                  if (Y = new s($.getCurrentTokenRow(), $.getCurrentTokenColumn() - 2, $.getCurrentTokenRow(), $.getCurrentTokenColumn() - 2), Y.compare(x.row, x.column) === 0) {
                    var X = this.session.getMatchingTags(x);
                    X && (X.openTag.contains(x.row, x.column) ? (Y = X.closeTag, P = Y.start) : (Y = X.openTag, X.closeTag.start.row === x.row && X.closeTag.start.column === x.column ? P = Y.end : P = Y.start));
                  }
                  P = P || Y.start;
                }
                P = Y && Y.cursor || P, P && (h ? Y && m ? this.selection.setRange(Y) : Y && Y.isEqual(this.getSelectionRange()) ? this.clearSelection() : this.selection.selectTo(P.row, P.column) : this.selection.moveTo(P.row, P.column));
              }
            }
          }, d.prototype.gotoLine = function(h, m, x) {
            this.selection.clearSelection(), this.session.unfold({ row: h - 1, column: m || 0 }), this.exitMultiSelectMode && this.exitMultiSelectMode(), this.moveCursorTo(h - 1, m || 0), this.isRowFullyVisible(h - 1) || this.scrollToLine(h - 1, !0, x);
          }, d.prototype.navigateTo = function(h, m) {
            this.selection.moveTo(h, m);
          }, d.prototype.navigateUp = function(h) {
            if (this.selection.isMultiLine() && !this.selection.isBackwards()) {
              var m = this.selection.anchor.getPosition();
              return this.moveCursorToPosition(m);
            }
            this.selection.clearSelection(), this.selection.moveCursorBy(-h || -1, 0);
          }, d.prototype.navigateDown = function(h) {
            if (this.selection.isMultiLine() && this.selection.isBackwards()) {
              var m = this.selection.anchor.getPosition();
              return this.moveCursorToPosition(m);
            }
            this.selection.clearSelection(), this.selection.moveCursorBy(h || 1, 0);
          }, d.prototype.navigateLeft = function(h) {
            if (this.selection.isEmpty())
              for (h = h || 1; h--; )
                this.selection.moveCursorLeft();
            else {
              var m = this.getSelectionRange().start;
              this.moveCursorToPosition(m);
            }
            this.clearSelection();
          }, d.prototype.navigateRight = function(h) {
            if (this.selection.isEmpty())
              for (h = h || 1; h--; )
                this.selection.moveCursorRight();
            else {
              var m = this.getSelectionRange().end;
              this.moveCursorToPosition(m);
            }
            this.clearSelection();
          }, d.prototype.navigateLineStart = function() {
            this.selection.moveCursorLineStart(), this.clearSelection();
          }, d.prototype.navigateLineEnd = function() {
            this.selection.moveCursorLineEnd(), this.clearSelection();
          }, d.prototype.navigateFileEnd = function() {
            this.selection.moveCursorFileEnd(), this.clearSelection();
          }, d.prototype.navigateFileStart = function() {
            this.selection.moveCursorFileStart(), this.clearSelection();
          }, d.prototype.navigateWordRight = function() {
            this.selection.moveCursorWordRight(), this.clearSelection();
          }, d.prototype.navigateWordLeft = function() {
            this.selection.moveCursorWordLeft(), this.clearSelection();
          }, d.prototype.replace = function(h, m) {
            m && this.$search.set(m);
            var x = this.$search.find(this.session), $ = 0;
            return x && (this.$tryReplace(x, h) && ($ = 1), this.selection.setSelectionRange(x), this.renderer.scrollSelectionIntoView(x.start, x.end)), $;
          }, d.prototype.replaceAll = function(h, m) {
            m && this.$search.set(m);
            var x = this.$search.findAll(this.session), $ = 0;
            if (!x.length)
              return $;
            var L = this.getSelectionRange();
            this.selection.moveTo(0, 0);
            for (var B = x.length - 1; B >= 0; --B)
              this.$tryReplace(x[B], h) && $++;
            return this.selection.setSelectionRange(L), $;
          }, d.prototype.$tryReplace = function(h, m) {
            var x = this.session.getTextRange(h);
            return m = this.$search.replace(x, m), m !== null ? (h.end = this.session.replace(h, m), h) : null;
          }, d.prototype.getLastSearchOptions = function() {
            return this.$search.getOptions();
          }, d.prototype.find = function(h, m, x) {
            m || (m = {}), typeof h == "string" || h instanceof RegExp ? m.needle = h : typeof h == "object" && S.mixin(m, h);
            var $ = this.selection.getRange();
            m.needle == null && (h = this.session.getTextRange($) || this.$search.$options.needle, h || ($ = this.session.getWordRange($.start.row, $.start.column), h = this.session.getTextRange($)), this.$search.set({ needle: h })), this.$search.set(m), m.start || this.$search.set({ start: $ });
            var L = this.$search.find(this.session);
            if (m.preventScroll)
              return L;
            if (L)
              return this.revealRange(L, x), L;
            m.backwards ? $.start = $.end : $.end = $.start, this.selection.setRange($);
          }, d.prototype.findNext = function(h, m) {
            this.find({ skipCurrent: !0, backwards: !1 }, h, m);
          }, d.prototype.findPrevious = function(h, m) {
            this.find(h, { skipCurrent: !0, backwards: !0 }, m);
          }, d.prototype.revealRange = function(h, m) {
            this.session.unfold(h), this.selection.setSelectionRange(h);
            var x = this.renderer.scrollTop;
            this.renderer.scrollSelectionIntoView(h.start, h.end, 0.5), m !== !1 && this.renderer.animateScrolling(x);
          }, d.prototype.undo = function() {
            this.session.getUndoManager().undo(this.session), this.renderer.scrollCursorIntoView(null, 0.5);
          }, d.prototype.redo = function() {
            this.session.getUndoManager().redo(this.session), this.renderer.scrollCursorIntoView(null, 0.5);
          }, d.prototype.destroy = function() {
            this.$toDestroy && (this.$toDestroy.forEach(function(h) {
              h.destroy();
            }), this.$toDestroy = null), this.$mouseHandler && this.$mouseHandler.destroy(), this.renderer.destroy(), this._signal("destroy", this), this.session && this.session.destroy(), this._$emitInputEvent && this._$emitInputEvent.cancel(), this.removeAllListeners();
          }, d.prototype.setAutoScrollEditorIntoView = function(h) {
            if (h) {
              var m, x = this, $ = !1;
              this.$scrollAnchor || (this.$scrollAnchor = document.createElement("div"));
              var L = this.$scrollAnchor;
              L.style.cssText = "position:absolute", this.container.insertBefore(L, this.container.firstChild);
              var B = this.on("changeSelection", function() {
                $ = !0;
              }), T = this.renderer.on("beforeRender", function() {
                $ && (m = x.renderer.container.getBoundingClientRect());
              }), V = this.renderer.on("afterRender", function() {
                if ($ && m && (x.isFocused() || x.searchBox && x.searchBox.isFocused())) {
                  var _ = x.renderer, O = _.$cursorLayer.$pixelPos, E = _.layerConfig, F = O.top - E.offset;
                  O.top >= 0 && F + m.top < 0 ? $ = !0 : O.top < E.height && O.top + m.top + E.lineHeight > window.innerHeight ? $ = !1 : $ = null, $ != null && (L.style.top = F + "px", L.style.left = O.left + "px", L.style.height = E.lineHeight + "px", L.scrollIntoView($)), $ = m = null;
                }
              });
              this.setAutoScrollEditorIntoView = function(_) {
                _ || (delete this.setAutoScrollEditorIntoView, this.off("changeSelection", B), this.renderer.off("afterRender", V), this.renderer.off("beforeRender", T));
              };
            }
          }, d.prototype.$resetCursorStyle = function() {
            var h = this.$cursorStyle || "ace", m = this.renderer.$cursorLayer;
            m && (m.setSmoothBlinking(/smooth/.test(h)), m.isBlinking = !this.$readOnly && h != "wide", A.setCssClass(m.element, "ace_slim-cursors", /slim/.test(h)));
          }, d.prototype.prompt = function(h, m, x) {
            var $ = this;
            p.loadModule("ace/ext/prompt", function(L) {
              L.prompt($, h, m, x);
            });
          }, d;
        }()
      );
      y.$uid = 0, y.prototype.curOp = null, y.prototype.prevOp = {}, y.prototype.$mergeableCommands = ["backspace", "del", "insertstring"], y.prototype.$toggleWordPairs = [
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
      ], S.implement(y.prototype, l), p.defineOptions(y.prototype, "editor", {
        selectionStyle: {
          set: function(d) {
            this.onSelectionChange(), this._signal("changeSelectionStyle", { data: d });
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
          set: function(d) {
            this.$onSelectionChange();
          },
          initialValue: !0
        },
        readOnly: {
          set: function(d) {
            var h = this;
            this.textInput.setReadOnly(d), this.$resetCursorStyle(), this.$readOnlyCallback || (this.$readOnlyCallback = function(x) {
              var $ = !1;
              if (x && x.type == "keydown") {
                if ($ = x && x.key && x.key.length == 1 && !x.ctrlKey && !x.metaKey, !$)
                  return;
              } else x && x.type !== "exec" && ($ = !0);
              if ($) {
                h.hoverTooltip || (h.hoverTooltip = new Z());
                var L = A.createElement("div");
                L.textContent = v("editor.tooltip.disable-editing", "Editing is disabled"), h.hoverTooltip.isOpen || h.hoverTooltip.showForRange(h, h.getSelectionRange(), L);
              } else h.hoverTooltip && h.hoverTooltip.isOpen && h.hoverTooltip.hide();
            });
            var m = this.textInput.getElement();
            d ? (k.addListener(m, "keydown", this.$readOnlyCallback, this), this.commands.on("exec", this.$readOnlyCallback), this.commands.on("commandUnavailable", this.$readOnlyCallback)) : (k.removeListener(m, "keydown", this.$readOnlyCallback), this.commands.off("exec", this.$readOnlyCallback), this.commands.off("commandUnavailable", this.$readOnlyCallback), this.hoverTooltip && (this.hoverTooltip.destroy(), this.hoverTooltip = null));
          },
          initialValue: !1
        },
        copyWithEmptySelection: {
          set: function(d) {
            this.textInput.setCopyWithEmptySelection(d);
          },
          initialValue: !1
        },
        cursorStyle: {
          set: function(d) {
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
          set: function(d) {
            this.setAutoScrollEditorIntoView(d);
          }
        },
        keyboardHandler: {
          set: function(d) {
            this.setKeyboardHandler(d);
          },
          get: function() {
            return this.$keybindingId;
          },
          handlesSet: !0
        },
        value: {
          set: function(d) {
            this.session.setValue(d);
          },
          get: function() {
            return this.getValue();
          },
          handlesSet: !0,
          hidden: !0
        },
        session: {
          set: function(d) {
            this.setSession(d);
          },
          get: function() {
            return this.session;
          },
          handlesSet: !0,
          hidden: !0
        },
        showLineNumbers: {
          set: function(d) {
            this.renderer.$gutterLayer.setShowLineNumbers(d), this.renderer.$loop.schedule(this.renderer.CHANGE_GUTTER), d && this.$relativeLineNumbers ? I.attach(this) : I.detach(this);
          },
          initialValue: !0
        },
        relativeLineNumbers: {
          set: function(d) {
            this.$showLineNumbers && d ? I.attach(this) : I.detach(this);
          }
        },
        placeholder: {
          set: function(d) {
            this.$updatePlaceholder || (this.$updatePlaceholder = (function() {
              var h = this.session && (this.renderer.$composition || this.session.getLength() > 1 || this.session.getLine(0).length > 0);
              if (h && this.renderer.placeholderNode)
                this.renderer.off("afterRender", this.$updatePlaceholder), A.removeCssClass(this.container, "ace_hasPlaceholder"), this.renderer.placeholderNode.remove(), this.renderer.placeholderNode = null;
              else if (!h && !this.renderer.placeholderNode) {
                this.renderer.on("afterRender", this.$updatePlaceholder), A.addCssClass(this.container, "ace_hasPlaceholder");
                var m = A.createElement("div");
                m.className = "ace_placeholder", m.textContent = this.$placeholder || "", this.renderer.placeholderNode = m, this.renderer.content.appendChild(this.renderer.placeholderNode);
              } else !h && this.renderer.placeholderNode && (this.renderer.placeholderNode.textContent = this.$placeholder || "");
            }).bind(this), this.on("input", this.$updatePlaceholder)), this.$updatePlaceholder();
          }
        },
        enableKeyboardAccessibility: {
          set: function(d) {
            var h = {
              name: "blurTextInput",
              description: "Set focus to the editor content div to allow tabbing through the page",
              bindKey: "Esc",
              exec: function($) {
                $.blur(), $.renderer.scroller.focus();
              },
              readOnly: !0
            }, m = function($) {
              if ($.target == this.renderer.scroller && $.keyCode === W.enter) {
                $.preventDefault();
                var L = this.getCursorPosition().row;
                this.isRowVisible(L) || this.scrollToLine(L, !0, !0), this.focus();
              }
            }, x;
            d ? (this.renderer.enableKeyboardAccessibility = !0, this.renderer.keyboardFocusClassName = "ace_keyboard-focus", this.textInput.getElement().setAttribute("tabindex", -1), this.textInput.setNumberOfExtraLines(c.isWin ? 3 : 0), this.renderer.scroller.setAttribute("tabindex", 0), this.renderer.scroller.setAttribute("role", "group"), this.renderer.scroller.setAttribute("aria-roledescription", v("editor.scroller.aria-roledescription", "editor")), this.renderer.scroller.classList.add(this.renderer.keyboardFocusClassName), this.renderer.scroller.setAttribute("aria-label", v("editor.scroller.aria-label", "Editor content, press Enter to start editing, press Escape to exit")), this.renderer.scroller.addEventListener("keyup", m.bind(this)), this.commands.addCommand(h), this.renderer.$gutter.setAttribute("tabindex", 0), this.renderer.$gutter.setAttribute("aria-hidden", !1), this.renderer.$gutter.setAttribute("role", "group"), this.renderer.$gutter.setAttribute("aria-roledescription", v("editor.gutter.aria-roledescription", "editor gutter")), this.renderer.$gutter.setAttribute("aria-label", v("editor.gutter.aria-label", "Editor gutter, press Enter to interact with controls using arrow keys, press Escape to exit")), this.renderer.$gutter.classList.add(this.renderer.keyboardFocusClassName), this.renderer.content.setAttribute("aria-hidden", !0), x || (x = new g(this)), x.addListener(), this.textInput.setAriaOptions({
              setLabel: !0
            })) : (this.renderer.enableKeyboardAccessibility = !1, this.textInput.getElement().setAttribute("tabindex", 0), this.textInput.setNumberOfExtraLines(0), this.renderer.scroller.setAttribute("tabindex", -1), this.renderer.scroller.removeAttribute("role"), this.renderer.scroller.removeAttribute("aria-roledescription"), this.renderer.scroller.classList.remove(this.renderer.keyboardFocusClassName), this.renderer.scroller.removeAttribute("aria-label"), this.renderer.scroller.removeEventListener("keyup", m.bind(this)), this.commands.removeCommand(h), this.renderer.content.removeAttribute("aria-hidden"), this.renderer.$gutter.setAttribute("tabindex", -1), this.renderer.$gutter.setAttribute("aria-hidden", !0), this.renderer.$gutter.removeAttribute("role"), this.renderer.$gutter.removeAttribute("aria-roledescription"), this.renderer.$gutter.removeAttribute("aria-label"), this.renderer.$gutter.classList.remove(this.renderer.keyboardFocusClassName), x && x.removeListener());
          },
          initialValue: !1
        },
        textInputAriaLabel: {
          set: function(d) {
            this.$textInputAriaLabel = d;
          },
          initialValue: ""
        },
        enableMobileMenu: {
          set: function(d) {
            this.$enableMobileMenu = d;
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
      var I = {
        getText: function(d, h) {
          return (Math.abs(d.selection.lead.row - h) || h + 1 + (h < 9 ? "·" : "")) + "";
        },
        getWidth: function(d, h, m) {
          return Math.max(h.toString().length, (m.lastRow + 1).toString().length, 2) * m.characterWidth;
        },
        update: function(d, h) {
          h.renderer.$loop.schedule(h.renderer.CHANGE_GUTTER);
        },
        attach: function(d) {
          d.renderer.$gutterLayer.$renderer = this, d.on("changeSelection", this.update), this.update(null, d);
        },
        detach: function(d) {
          d.renderer.$gutterLayer.$renderer == this && (d.renderer.$gutterLayer.$renderer = null), d.off("changeSelection", this.update), this.update(null, d);
        }
      };
      R.Editor = y;
    }), ace.define("ace/layer/lines", ["require", "exports", "module", "ace/lib/dom"], function(w, R, N) {
      var b = w("../lib/dom"), S = (
        /** @class */
        function() {
          function A(a, c) {
            this.element = a, this.canvasHeight = c || 5e5, this.element.style.height = this.canvasHeight * 2 + "px", this.cells = [], this.cellCache = [], this.$offsetCoefficient = 0;
          }
          return A.prototype.moveContainer = function(a) {
            b.translate(this.element, 0, -(a.firstRowScreen * a.lineHeight % this.canvasHeight) - a.offset * this.$offsetCoefficient);
          }, A.prototype.pageChanged = function(a, c) {
            return Math.floor(a.firstRowScreen * a.lineHeight / this.canvasHeight) !== Math.floor(c.firstRowScreen * c.lineHeight / this.canvasHeight);
          }, A.prototype.computeLineTop = function(a, c, n) {
            var r = c.firstRowScreen * c.lineHeight, i = Math.floor(r / this.canvasHeight), t = n.documentToScreenRow(a, 0) * c.lineHeight;
            return t - i * this.canvasHeight;
          }, A.prototype.computeLineHeight = function(a, c, n) {
            return c.lineHeight * n.getRowLineCount(a);
          }, A.prototype.getLength = function() {
            return this.cells.length;
          }, A.prototype.get = function(a) {
            return this.cells[a];
          }, A.prototype.shift = function() {
            this.$cacheCell(this.cells.shift());
          }, A.prototype.pop = function() {
            this.$cacheCell(this.cells.pop());
          }, A.prototype.push = function(a) {
            if (Array.isArray(a)) {
              this.cells.push.apply(this.cells, a);
              for (var c = b.createFragment(this.element), n = 0; n < a.length; n++)
                c.appendChild(a[n].element);
              this.element.appendChild(c);
            } else
              this.cells.push(a), this.element.appendChild(a.element);
          }, A.prototype.unshift = function(a) {
            if (Array.isArray(a)) {
              this.cells.unshift.apply(this.cells, a);
              for (var c = b.createFragment(this.element), n = 0; n < a.length; n++)
                c.appendChild(a[n].element);
              this.element.firstChild ? this.element.insertBefore(c, this.element.firstChild) : this.element.appendChild(c);
            } else
              this.cells.unshift(a), this.element.insertAdjacentElement("afterbegin", a.element);
          }, A.prototype.last = function() {
            return this.cells.length ? this.cells[this.cells.length - 1] : null;
          }, A.prototype.$cacheCell = function(a) {
            a && (a.element.remove(), this.cellCache.push(a));
          }, A.prototype.createCell = function(a, c, n, r) {
            var i = this.cellCache.pop();
            if (!i) {
              var t = b.createElement("div");
              r && r(t), this.element.appendChild(t), i = {
                element: t,
                text: "",
                row: a
              };
            }
            return i.row = a, i;
          }, A;
        }()
      );
      R.Lines = S;
    }), ace.define("ace/layer/gutter", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/layer/lines", "ace/config"], function(w, R, N) {
      var b = w("../lib/dom"), S = w("../lib/oop"), A = w("../lib/lang"), a = w("../lib/event_emitter").EventEmitter, c = w("./lines").Lines, n = w("../config").nls, r = (
        /** @class */
        function() {
          function t(e) {
            this.element = b.createElement("div"), this.element.className = "ace_layer ace_gutter-layer", e.appendChild(this.element), this.setShowFoldWidgets(this.$showFoldWidgets), this.gutterWidth = 0, this.$annotations = [], this.$updateAnnotations = this.$updateAnnotations.bind(this), this.$lines = new c(this.element), this.$lines.$offsetCoefficient = 1;
          }
          return t.prototype.setSession = function(e) {
            this.session && this.session.off("change", this.$updateAnnotations), this.session = e, e && e.on("change", this.$updateAnnotations);
          }, t.prototype.addGutterDecoration = function(e, o) {
            window.console && console.warn && console.warn("deprecated use session.addGutterDecoration"), this.session.addGutterDecoration(e, o);
          }, t.prototype.removeGutterDecoration = function(e, o) {
            window.console && console.warn && console.warn("deprecated use session.removeGutterDecoration"), this.session.removeGutterDecoration(e, o);
          }, t.prototype.setAnnotations = function(e) {
            this.$annotations = [];
            for (var o = 0; o < e.length; o++) {
              var s = e[o], l = s.row, u = this.$annotations[l];
              u || (u = this.$annotations[l] = { text: [], type: [], displayText: [] });
              var C = s.text, p = s.text, f = s.type;
              C = C ? A.escapeHTML(C) : s.html || "", p = p || s.html || "", u.text.indexOf(C) === -1 && (u.text.push(C), u.type.push(f), u.displayText.push(p));
              var g = s.className;
              g ? u.className = g : f === "error" ? u.className = " ace_error" : f === "security" && !/\bace_error\b/.test(u.className) ? u.className = " ace_security" : f === "warning" && !/\bace_(error|security)\b/.test(u.className) ? u.className = " ace_warning" : f === "info" && !u.className ? u.className = " ace_info" : f === "hint" && !u.className && (u.className = " ace_hint");
            }
          }, t.prototype.$updateAnnotations = function(e) {
            if (this.$annotations.length) {
              var o = e.start.row, s = e.end.row - o;
              if (s !== 0) if (e.action == "remove")
                this.$annotations.splice(o, s + 1, null);
              else {
                var l = new Array(s + 1);
                l.unshift(o, 1), this.$annotations.splice.apply(this.$annotations, l);
              }
            }
          }, t.prototype.update = function(e) {
            this.config = e;
            var o = this.session, s = e.firstRow, l = Math.min(
              e.lastRow + e.gutterOffset,
              // needed to compensate for hor scollbar
              o.getLength() - 1
            );
            this.oldLastRow = l, this.config = e, this.$lines.moveContainer(e), this.$updateCursorRow();
            for (var u = o.getNextFoldLine(s), C = u ? u.start.row : 1 / 0, p = null, f = -1, g = s; ; ) {
              if (g > C && (g = u.end.row + 1, u = o.getNextFoldLine(g, u), C = u ? u.start.row : 1 / 0), g > l) {
                for (; this.$lines.getLength() > f + 1; )
                  this.$lines.pop();
                break;
              }
              p = this.$lines.get(++f), p ? p.row = g : (p = this.$lines.createCell(g, e, this.session, i), this.$lines.push(p)), this.$renderCell(p, e, u, g), g++;
            }
            this._signal("afterRender"), this.$updateGutterWidth(e);
          }, t.prototype.$updateGutterWidth = function(e) {
            var o = this.session, s = o.gutterRenderer || this.$renderer, l = o.$firstLineNumber, u = this.$lines.last() ? this.$lines.last().text : "";
            (this.$fixedWidth || o.$useWrapMode) && (u = o.getLength() + l - 1);
            var C = s ? s.getWidth(o, u, e) : u.toString().length * e.characterWidth, p = this.$padding || this.$computePadding();
            C += p.left + p.right, C !== this.gutterWidth && !isNaN(C) && (this.gutterWidth = C, this.element.parentNode.style.width = this.element.style.width = Math.ceil(this.gutterWidth) + "px", this._signal("changeGutterWidth", C));
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
                var o = this.$lines.cells;
                this.$cursorCell = null;
                for (var s = 0; s < o.length; s++) {
                  var l = o[s];
                  if (l.row >= this.$cursorRow) {
                    if (l.row > this.$cursorRow) {
                      var u = this.session.getFoldLine(this.$cursorRow);
                      if (s > 0 && u && u.start.row == o[s - 1].row)
                        l = o[s - 1];
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
            var o = this.config;
            if (this.config = e, this.$updateCursorRow(), this.$lines.pageChanged(o, e))
              return this.update(e);
            this.$lines.moveContainer(e);
            var s = Math.min(
              e.lastRow + e.gutterOffset,
              // needed to compensate for hor scollbar
              this.session.getLength() - 1
            ), l = this.oldLastRow;
            if (this.oldLastRow = s, !o || l < e.firstRow)
              return this.update(e);
            if (s < o.firstRow)
              return this.update(e);
            if (o.firstRow < e.firstRow)
              for (var u = this.session.getFoldedRowCount(o.firstRow, e.firstRow - 1); u > 0; u--)
                this.$lines.shift();
            if (l > s)
              for (var u = this.session.getFoldedRowCount(s + 1, l); u > 0; u--)
                this.$lines.pop();
            e.firstRow < o.firstRow && this.$lines.unshift(this.$renderLines(e, e.firstRow, o.firstRow - 1)), s > l && this.$lines.push(this.$renderLines(e, l + 1, s)), this.updateLineHighlight(), this._signal("afterRender"), this.$updateGutterWidth(e);
          }, t.prototype.$renderLines = function(e, o, s) {
            for (var l = [], u = o, C = this.session.getNextFoldLine(u), p = C ? C.start.row : 1 / 0; u > p && (u = C.end.row + 1, C = this.session.getNextFoldLine(u, C), p = C ? C.start.row : 1 / 0), !(u > s); ) {
              var f = this.$lines.createCell(u, e, this.session, i);
              this.$renderCell(f, e, C, u), l.push(f), u++;
            }
            return l;
          }, t.prototype.$renderCell = function(e, o, s, l) {
            var u = e.element, C = this.session, p = u.childNodes[0], f = u.childNodes[1], g = u.childNodes[2], v = u.childNodes[3], M = g.firstChild, W = C.$firstLineNumber, k = C.$breakpoints, Z = C.$decorations, y = C.gutterRenderer || this.$renderer, I = this.$showFoldWidgets && C.foldWidgets, d = s ? s.start.row : Number.MAX_VALUE, h = o.lineHeight + "px", m = this.$useSvgGutterIcons ? "ace_gutter-cell_svg-icons " : "ace_gutter-cell ", x = this.$useSvgGutterIcons ? "ace_icon_svg" : "ace_icon", $ = (y ? y.getText(C, l) : l + W).toString();
            if (this.$highlightGutterLine && (l == this.$cursorRow || s && l < this.$cursorRow && l >= d && this.$cursorRow <= s.end.row) && (m += "ace_gutter-active-line ", this.$cursorCell != e && (this.$cursorCell && (this.$cursorCell.element.className = this.$cursorCell.element.className.replace("ace_gutter-active-line ", "")), this.$cursorCell = e)), k[l] && (m += k[l]), Z[l] && (m += Z[l]), this.$annotations[l] && l !== d && (m += this.$annotations[l].className), I) {
              var L = I[l];
              L == null && (L = I[l] = C.getFoldWidget(l));
            }
            if (L) {
              var B = "ace_fold-widget ace_" + L, T = L == "start" && l == d && l < s.end.row;
              if (T) {
                B += " ace_closed";
                for (var V = "", _ = !1, O = l + 1; O <= s.end.row; O++)
                  if (this.$annotations[O]) {
                    if (this.$annotations[O].className === " ace_error") {
                      _ = !0, V = " ace_error_fold";
                      break;
                    }
                    this.$annotations[O].className === " ace_security" ? (_ = !0, V = " ace_security_fold") : this.$annotations[O].className === " ace_warning" && V !== " ace_security_fold" && (_ = !0, V = " ace_warning_fold");
                  }
                m += V;
              } else
                B += " ace_open";
              f.className != B && (f.className = B), b.setStyle(f.style, "height", h), b.setStyle(f.style, "display", "inline-block"), f.setAttribute("role", "button"), f.setAttribute("tabindex", "-1");
              var E = C.getFoldWidgetRange(l);
              E ? f.setAttribute("aria-label", n("gutter.code-folding.range.aria-label", "Toggle code folding, rows $0 through $1", [
                E.start.row + 1,
                E.end.row + 1
              ])) : s ? f.setAttribute("aria-label", n("gutter.code-folding.closed.aria-label", "Toggle code folding, rows $0 through $1", [
                s.start.row + 1,
                s.end.row + 1
              ])) : f.setAttribute("aria-label", n("gutter.code-folding.open.aria-label", "Toggle code folding, row $0", [l + 1])), T ? (f.setAttribute("aria-expanded", "false"), f.setAttribute("title", n("gutter.code-folding.closed.title", "Unfold code"))) : (f.setAttribute("aria-expanded", "true"), f.setAttribute("title", n("gutter.code-folding.open.title", "Fold code")));
            } else
              f && (b.setStyle(f.style, "display", "none"), f.setAttribute("tabindex", "0"), f.removeAttribute("role"), f.removeAttribute("aria-label"));
            var F = this.session.$gutterCustomWidgets[l];
            if (F ? this.$addCustomWidget(l, F, e) : v && this.$removeCustomWidget(l, e), _ && this.$showFoldedAnnotations) {
              g.className = "ace_gutter_annotation", M.className = x, M.className += V, b.setStyle(M.style, "height", h), b.setStyle(g.style, "display", "block"), b.setStyle(g.style, "height", h);
              var D;
              switch (V) {
                case " ace_error_fold":
                  D = n("gutter.annotation.aria-label.error", "Error, read annotations row $0", [$]);
                  break;
                case " ace_security_fold":
                  D = n("gutter.annotation.aria-label.security", "Security finding, read annotations row $0", [$]);
                  break;
                case " ace_warning_fold":
                  D = n("gutter.annotation.aria-label.warning", "Warning, read annotations row $0", [$]);
                  break;
              }
              g.setAttribute("aria-label", D), g.setAttribute("tabindex", "-1"), g.setAttribute("role", "button");
            } else if (this.$annotations[l]) {
              g.className = "ace_gutter_annotation", M.className = x, this.$useSvgGutterIcons ? M.className += this.$annotations[l].className : u.classList.add(this.$annotations[l].className.replace(" ", "")), b.setStyle(M.style, "height", h), b.setStyle(g.style, "display", "block"), b.setStyle(g.style, "height", h);
              var D;
              switch (this.$annotations[l].className) {
                case " ace_error":
                  D = n("gutter.annotation.aria-label.error", "Error, read annotations row $0", [$]);
                  break;
                case " ace_security":
                  D = n("gutter.annotation.aria-label.security", "Security finding, read annotations row $0", [$]);
                  break;
                case " ace_warning":
                  D = n("gutter.annotation.aria-label.warning", "Warning, read annotations row $0", [$]);
                  break;
                case " ace_info":
                  D = n("gutter.annotation.aria-label.info", "Info, read annotations row $0", [$]);
                  break;
                case " ace_hint":
                  D = n("gutter.annotation.aria-label.hint", "Suggestion, read annotations row $0", [$]);
                  break;
              }
              g.setAttribute("aria-label", D), g.setAttribute("tabindex", "-1"), g.setAttribute("role", "button");
            } else
              b.setStyle(g.style, "display", "none"), g.removeAttribute("aria-label"), g.removeAttribute("role"), g.setAttribute("tabindex", "0");
            return $ !== p.data && (p.data = $), u.className != m && (u.className = m), b.setStyle(e.element.style, "height", this.$lines.computeLineHeight(l, o, C) + "px"), b.setStyle(e.element.style, "top", this.$lines.computeLineTop(l, o, C) + "px"), e.text = $, g.style.display === "none" && f.style.display === "none" && !F ? e.element.setAttribute("aria-hidden", !0) : e.element.setAttribute("aria-hidden", !1), e;
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
            e ? b.addCssClass(this.element, "ace_folding-enabled") : b.removeCssClass(this.element, "ace_folding-enabled"), this.$showFoldWidgets = e, this.$padding = null;
          }, t.prototype.getShowFoldWidgets = function() {
            return this.$showFoldWidgets;
          }, t.prototype.$hideFoldWidget = function(e, o) {
            var s = o || this.$getGutterCell(e);
            if (s && s.element) {
              var l = s.element.childNodes[1];
              l && b.setStyle(l.style, "display", "none");
            }
          }, t.prototype.$showFoldWidget = function(e, o) {
            var s = o || this.$getGutterCell(e);
            if (s && s.element) {
              var l = s.element.childNodes[1];
              l && this.session.foldWidgets && this.session.foldWidgets[s.row] && b.setStyle(l.style, "display", "inline-block");
            }
          }, t.prototype.$getGutterCell = function(e) {
            var o = this.$lines.cells, s = this.session.documentToScreenRow(e, 0);
            return o[e - this.config.firstRowScreen - (e - s)];
          }, t.prototype.$addCustomWidget = function(e, o, s) {
            var l = o.className, u = o.label, C = o.title, p = o.callbacks;
            this.session.$gutterCustomWidgets[e] = { className: l, label: u, title: C, callbacks: p }, this.$hideFoldWidget(e, s);
            var f = s || this.$getGutterCell(e);
            if (f && f.element) {
              var g = f.element.querySelector(".ace_custom-widget");
              g && g.remove(), g = b.createElement("span"), g.className = "ace_custom-widget ".concat(l), g.setAttribute("tabindex", "-1"), g.setAttribute("role", "button"), g.setAttribute("aria-label", u), g.setAttribute("title", C), b.setStyle(g.style, "display", "inline-block"), b.setStyle(g.style, "height", "inherit"), p && p.onClick && g.addEventListener("click", function(v) {
                p.onClick(v, e), v.stopPropagation();
              }), f.element.appendChild(g);
            }
          }, t.prototype.$removeCustomWidget = function(e, o) {
            delete this.session.$gutterCustomWidgets[e], this.$showFoldWidget(e, o);
            var s = o || this.$getGutterCell(e);
            if (s && s.element) {
              var l = s.element.querySelector(".ace_custom-widget");
              l && s.element.removeChild(l);
            }
          }, t.prototype.$computePadding = function() {
            if (!this.element.firstChild)
              return { left: 0, right: 0 };
            var e = b.computedStyle(
              /**@type{Element}*/
              this.element.firstChild
            );
            return this.$padding = {}, this.$padding.left = (parseInt(e.borderLeftWidth) || 0) + (parseInt(e.paddingLeft) || 0) + 1, this.$padding.right = (parseInt(e.borderRightWidth) || 0) + (parseInt(e.paddingRight) || 0), this.$padding;
          }, t.prototype.getRegion = function(e) {
            var o = this.$padding || this.$computePadding(), s = this.element.getBoundingClientRect();
            if (e.x < o.left + s.left)
              return "markers";
            if (this.$showFoldWidgets && e.x > s.right - o.right)
              return "foldWidgets";
          }, t;
        }()
      );
      r.prototype.$fixedWidth = !1, r.prototype.$highlightGutterLine = !0, r.prototype.$renderer = "", r.prototype.$showLineNumbers = !0, r.prototype.$showFoldWidgets = !0, S.implement(r.prototype, a);
      function i(t) {
        var e = document.createTextNode("");
        t.appendChild(e);
        var o = b.createElement("span");
        t.appendChild(o);
        var s = b.createElement("span");
        t.appendChild(s);
        var l = b.createElement("span");
        return s.appendChild(l), t;
      }
      R.Gutter = r;
    }), ace.define("ace/layer/marker", ["require", "exports", "module", "ace/range", "ace/lib/dom"], function(w, R, N) {
      var b = w("../range").Range, S = w("../lib/dom"), A = (
        /** @class */
        function() {
          function c(n) {
            this.element = S.createElement("div"), this.element.className = "ace_layer ace_marker-layer", n.appendChild(this.element);
          }
          return c.prototype.setPadding = function(n) {
            this.$padding = n;
          }, c.prototype.setSession = function(n) {
            this.session = n;
          }, c.prototype.setMarkers = function(n) {
            this.markers = n;
          }, c.prototype.elt = function(n, r) {
            var i = this.i != -1 && this.element.childNodes[this.i];
            i ? this.i++ : (i = document.createElement("div"), this.element.appendChild(i), this.i = -1), i.style.cssText = r, i.className = n;
          }, c.prototype.update = function(n) {
            if (n) {
              this.config = n, this.i = 0;
              var r;
              for (var i in this.markers) {
                var t = this.markers[i];
                if (!t.range) {
                  t.update(r, this, this.session, n);
                  continue;
                }
                var e = t.range.clipRows(n.firstRow, n.lastRow);
                if (!e.isEmpty())
                  if (e = e.toScreenRange(this.session), t.renderer) {
                    var o = this.$getTop(e.start.row, n), s = this.$padding + e.start.column * n.characterWidth;
                    t.renderer(r, e, s, o, n);
                  } else t.type == "fullLine" ? this.drawFullLineMarker(r, e, t.clazz, n) : t.type == "screenLine" ? this.drawScreenLineMarker(r, e, t.clazz, n) : e.isMultiLine() ? t.type == "text" ? this.drawTextMarker(r, e, t.clazz, n) : this.drawMultiLineMarker(r, e, t.clazz, n) : this.drawSingleLineMarker(r, e, t.clazz + " ace_start ace_br15", n);
              }
              if (this.i != -1)
                for (; this.i < this.element.childElementCount; )
                  this.element.removeChild(this.element.lastChild);
            }
          }, c.prototype.$getTop = function(n, r) {
            return (n - r.firstRowScreen) * r.lineHeight;
          }, c.prototype.drawTextMarker = function(n, r, i, t, e) {
            for (var o = this.session, s = r.start.row, l = r.end.row, u = s, C = 0, p = 0, f = o.getScreenLastRowColumn(u), g = new b(u, r.start.column, u, p); u <= l; u++)
              g.start.row = g.end.row = u, g.start.column = u == s ? r.start.column : o.getRowWrapIndent(u), g.end.column = f, C = p, p = f, f = u + 1 < l ? o.getScreenLastRowColumn(u + 1) : u == l ? 0 : r.end.column, this.drawSingleLineMarker(n, g, i + (u == s ? " ace_start" : "") + " ace_br" + a(u == s || u == s + 1 && r.start.column, C < p, p > f, u == l), t, u == l ? 0 : 1, e);
          }, c.prototype.drawMultiLineMarker = function(n, r, i, t, e) {
            var o = this.$padding, s = t.lineHeight, l = this.$getTop(r.start.row, t), u = o + r.start.column * t.characterWidth;
            if (e = e || "", this.session.$bidiHandler.isBidiRow(r.start.row)) {
              var C = r.clone();
              C.end.row = C.start.row, C.end.column = this.session.getLine(C.start.row).length, this.drawBidiSingleLineMarker(n, C, i + " ace_br1 ace_start", t, null, e);
            } else
              this.elt(i + " ace_br1 ace_start", "height:" + s + "px;right:" + o + "px;top:" + l + "px;left:" + u + "px;" + (e || ""));
            if (this.session.$bidiHandler.isBidiRow(r.end.row)) {
              var C = r.clone();
              C.start.row = C.end.row, C.start.column = 0, this.drawBidiSingleLineMarker(n, C, i + " ace_br12", t, null, e);
            } else {
              l = this.$getTop(r.end.row, t);
              var p = r.end.column * t.characterWidth;
              this.elt(i + " ace_br12", "height:" + s + "px;width:" + p + "px;top:" + l + "px;left:" + o + "px;" + (e || ""));
            }
            if (s = (r.end.row - r.start.row - 1) * t.lineHeight, !(s <= 0)) {
              l = this.$getTop(r.start.row + 1, t);
              var f = (r.start.column ? 1 : 0) | (r.end.column ? 0 : 8);
              this.elt(i + (f ? " ace_br" + f : ""), "height:" + s + "px;right:" + o + "px;top:" + l + "px;left:" + o + "px;" + (e || ""));
            }
          }, c.prototype.drawSingleLineMarker = function(n, r, i, t, e, o) {
            if (this.session.$bidiHandler.isBidiRow(r.start.row))
              return this.drawBidiSingleLineMarker(n, r, i, t, e, o);
            var s = t.lineHeight, l = (r.end.column + (e || 0) - r.start.column) * t.characterWidth, u = this.$getTop(r.start.row, t), C = this.$padding + r.start.column * t.characterWidth;
            this.elt(i, "height:" + s + "px;width:" + l + "px;top:" + u + "px;left:" + C + "px;" + (o || ""));
          }, c.prototype.drawBidiSingleLineMarker = function(n, r, i, t, e, o) {
            var s = t.lineHeight, l = this.$getTop(r.start.row, t), u = this.$padding, C = this.session.$bidiHandler.getSelections(r.start.column, r.end.column);
            C.forEach(function(p) {
              this.elt(i, "height:" + s + "px;width:" + (p.width + (e || 0)) + "px;top:" + l + "px;left:" + (u + p.left) + "px;" + (o || ""));
            }, this);
          }, c.prototype.drawFullLineMarker = function(n, r, i, t, e) {
            var o = this.$getTop(r.start.row, t), s = t.lineHeight;
            r.start.row != r.end.row && (s += this.$getTop(r.end.row, t) - o), this.elt(i, "height:" + s + "px;top:" + o + "px;left:0;right:0;" + (e || ""));
          }, c.prototype.drawScreenLineMarker = function(n, r, i, t, e) {
            var o = this.$getTop(r.start.row, t), s = t.lineHeight;
            this.elt(i, "height:" + s + "px;top:" + o + "px;left:0;right:0;" + (e || ""));
          }, c;
        }()
      );
      A.prototype.$padding = 0;
      function a(c, n, r, i) {
        return (c ? 1 : 0) | (n ? 2 : 0) | (r ? 4 : 0) | (i ? 8 : 0);
      }
      R.Marker = A;
    }), ace.define("ace/layer/text_util", ["require", "exports", "module"], function(w, R, N) {
      var b = /* @__PURE__ */ new Set(["text", "rparen", "lparen"]);
      R.isTextToken = function(S) {
        return b.has(S);
      };
    }), ace.define("ace/layer/text", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/layer/lines", "ace/lib/event_emitter", "ace/config", "ace/layer/text_util"], function(w, R, N) {
      var b = w("../lib/oop"), S = w("../lib/dom"), A = w("../lib/lang"), a = w("./lines").Lines, c = w("../lib/event_emitter").EventEmitter, n = w("../config").nls, r = w("./text_util").isTextToken, i = (
        /** @class */
        function() {
          function t(e) {
            this.dom = S, this.element = this.dom.createElement("div"), this.element.className = "ace_layer ace_text-layer", e.appendChild(this.element), this.$updateEolChar = this.$updateEolChar.bind(this), this.$lines = new a(this.element);
          }
          return t.prototype.$updateEolChar = function() {
            var e = this.session.doc, o = e.getNewLineCharacter() == `
` && e.getNewLineMode() != "windows", s = o ? this.EOL_CHAR_LF : this.EOL_CHAR_CRLF;
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
              (function(o) {
                this._signal("changeCharacterSize", o);
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
            for (var o = this.$tabStrings = [0], s = 1; s < e + 1; s++)
              if (this.showTabs) {
                var l = this.dom.createElement("span");
                l.className = "ace_invisible ace_invisible_tab", l.textContent = A.stringRepeat(this.TAB_CHAR, s), o.push(l);
              } else
                o.push(this.dom.createTextNode(A.stringRepeat(" ", s), this.element));
            if (this.displayIndentGuides) {
              this.$indentGuideRe = /\s\S| \t|\t |\s$/;
              var u = "ace_indent-guide", C = this.showSpaces ? " ace_invisible ace_invisible_space" : "", p = this.showSpaces ? A.stringRepeat(this.SPACE_CHAR, this.tabSize) : A.stringRepeat(" ", this.tabSize), f = this.showTabs ? " ace_invisible ace_invisible_tab" : "", g = this.showTabs ? A.stringRepeat(this.TAB_CHAR, this.tabSize) : p, l = this.dom.createElement("span");
              l.className = u + C, l.textContent = p, this.$tabStrings[" "] = l;
              var l = this.dom.createElement("span");
              l.className = u + f, l.textContent = g, this.$tabStrings["	"] = l;
            }
          }, t.prototype.updateLines = function(e, o, s) {
            if (this.config.lastRow != e.lastRow || this.config.firstRow != e.firstRow)
              return this.update(e);
            this.config = e;
            for (var l = Math.max(o, e.firstRow), u = Math.min(s, e.lastRow), C = this.element.childNodes, p = 0, g = e.firstRow; g < l; g++) {
              var v = this.session.getFoldLine(g);
              if (v)
                if (v.containsRow(l)) {
                  l = v.start.row;
                  break;
                } else
                  g = v.end.row;
              p++;
            }
            for (var f = !1, g = l, v = this.session.getNextFoldLine(g), M = v ? v.start.row : 1 / 0; g > M && (g = v.end.row + 1, v = this.session.getNextFoldLine(g, v), M = v ? v.start.row : 1 / 0), !(g > u); ) {
              var W = C[p++];
              if (W) {
                this.dom.removeChildren(W), this.$renderLine(W, g, g == M ? v : !1), f && (W.style.top = this.$lines.computeLineTop(g, e, this.session) + "px");
                var k = e.lineHeight * this.session.getRowLength(g) + "px";
                W.style.height != k && (f = !0, W.style.height = k);
              }
              g++;
            }
            if (f)
              for (; p < this.$lines.cells.length; ) {
                var Z = this.$lines.cells[p++];
                Z.element.style.top = this.$lines.computeLineTop(Z.row, e, this.session) + "px";
              }
          }, t.prototype.scrollLines = function(e) {
            var o = this.config;
            if (this.config = e, this.$lines.pageChanged(o, e))
              return this.update(e);
            this.$lines.moveContainer(e);
            var s = e.lastRow, l = o ? o.lastRow : -1;
            if (!o || l < e.firstRow)
              return this.update(e);
            if (s < o.firstRow)
              return this.update(e);
            if (!o || o.lastRow < e.firstRow)
              return this.update(e);
            if (e.lastRow < o.firstRow)
              return this.update(e);
            if (o.firstRow < e.firstRow)
              for (var u = this.session.getFoldedRowCount(o.firstRow, e.firstRow - 1); u > 0; u--)
                this.$lines.shift();
            if (o.lastRow > e.lastRow)
              for (var u = this.session.getFoldedRowCount(e.lastRow + 1, o.lastRow); u > 0; u--)
                this.$lines.pop();
            e.firstRow < o.firstRow && this.$lines.unshift(this.$renderLinesFragment(e, e.firstRow, o.firstRow - 1)), e.lastRow > o.lastRow && this.$lines.push(this.$renderLinesFragment(e, o.lastRow + 1, e.lastRow)), this.$highlightIndentGuide();
          }, t.prototype.$renderLinesFragment = function(e, o, s) {
            for (var l = [], u = o, C = this.session.getNextFoldLine(u), p = C ? C.start.row : 1 / 0; u > p && (u = C.end.row + 1, C = this.session.getNextFoldLine(u, C), p = C ? C.start.row : 1 / 0), !(u > s); ) {
              var f = this.$lines.createCell(u, e, this.session), g = f.element;
              this.dom.removeChildren(g), S.setStyle(g.style, "height", this.$lines.computeLineHeight(u, e, this.session) + "px"), S.setStyle(g.style, "top", this.$lines.computeLineTop(u, e, this.session) + "px"), this.$renderLine(g, u, u == p ? C : !1), this.$useLineGroups() ? g.className = "ace_line_group" : g.className = "ace_line", l.push(f), u++;
            }
            return l;
          }, t.prototype.update = function(e) {
            this.$lines.moveContainer(e), this.config = e;
            for (var o = e.firstRow, s = e.lastRow, l = this.$lines; l.getLength(); )
              l.pop();
            l.push(this.$renderLinesFragment(e, o, s));
          }, t.prototype.$renderToken = function(e, o, s, l) {
            for (var u = this, C = /(\t)|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\uFEFF\uFFF9-\uFFFC\u2066\u2067\u2068\u202A\u202B\u202D\u202E\u202C\u2069\u2060\u2061\u2062\u2063\u2064\u206A\u206B\u206B\u206C\u206D\u206E\u206F]+)|(\u3000)|([\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g, p = this.dom.createFragment(this.element), f, g = 0; f = C.exec(l); ) {
              var v = f[1], M = f[2], W = f[3], k = f[4], Z = f[5];
              if (!(!u.showSpaces && M)) {
                var y = g != f.index ? l.slice(g, f.index) : "";
                if (g = f.index + f[0].length, y && p.appendChild(this.dom.createTextNode(y, this.element)), v) {
                  var I = u.session.getScreenTabSize(o + f.index);
                  p.appendChild(u.$tabStrings[I].cloneNode(!0)), o += I - 1;
                } else if (M)
                  if (u.showSpaces) {
                    var d = this.dom.createElement("span");
                    d.className = "ace_invisible ace_invisible_space", d.textContent = A.stringRepeat(u.SPACE_CHAR, M.length), p.appendChild(d);
                  } else
                    p.appendChild(this.dom.createTextNode(M, this.element));
                else if (W) {
                  var d = this.dom.createElement("span");
                  d.className = "ace_invisible ace_invisible_space ace_invalid", d.textContent = A.stringRepeat(u.SPACE_CHAR, W.length), p.appendChild(d);
                } else if (k) {
                  o += 1;
                  var d = this.dom.createElement("span");
                  d.style.width = u.config.characterWidth * 2 + "px", d.className = u.showSpaces ? "ace_cjk ace_invisible ace_invisible_space" : "ace_cjk", d.textContent = u.showSpaces ? u.SPACE_CHAR : k, p.appendChild(d);
                } else if (Z) {
                  o += 1;
                  var d = this.dom.createElement("span");
                  d.style.width = u.config.characterWidth * 2 + "px", d.className = "ace_cjk", d.textContent = Z, p.appendChild(d);
                }
              }
            }
            if (p.appendChild(this.dom.createTextNode(g ? l.slice(g) : l, this.element)), r(s.type))
              e.appendChild(p);
            else {
              var h = "ace_" + s.type.replace(/\./g, " ace_"), d = this.dom.createElement("span");
              s.type == "fold" && (d.style.width = s.value.length * this.config.characterWidth + "px", d.setAttribute("title", n("inline-fold.closed.title", "Unfold code"))), d.className = h, d.appendChild(p), e.appendChild(d);
            }
            return o + l.length;
          }, t.prototype.renderIndentGuide = function(e, o, s) {
            var l = o.search(this.$indentGuideRe);
            if (l <= 0 || l >= s)
              return o;
            if (o[0] == " ") {
              l -= l % this.tabSize;
              for (var u = l / this.tabSize, C = 0; C < u; C++)
                e.appendChild(this.$tabStrings[" "].cloneNode(!0));
              return this.$highlightIndentGuide(), o.substr(l);
            } else if (o[0] == "	") {
              for (var C = 0; C < l; C++)
                e.appendChild(this.$tabStrings["	"].cloneNode(!0));
              return this.$highlightIndentGuide(), o.substr(l);
            }
            return this.$highlightIndentGuide(), o;
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
                var o = this.session.selection.getCursor(), s = /^\s*/.exec(this.session.doc.getLine(o.row))[0].length, l = Math.floor(s / this.tabSize);
                this.$highlightIndentGuideMarker = {
                  indentLevel: l,
                  start: o.row
                };
                var u = this.session.$bracketHighlight;
                if (u) {
                  for (var C = this.session.$bracketHighlight.ranges, p = 0; p < C.length; p++)
                    if (o.row !== C[p].start.row) {
                      this.$highlightIndentGuideMarker.end = C[p].start.row + 1, o.row > C[p].start.row ? this.$highlightIndentGuideMarker.dir = -1 : this.$highlightIndentGuideMarker.dir = 1;
                      break;
                    }
                }
                if (!this.$highlightIndentGuideMarker.end && e[o.row] !== "" && o.column === e[o.row].length) {
                  this.$highlightIndentGuideMarker.dir = 1;
                  for (var p = o.row + 1; p < e.length; p++) {
                    var f = e[p], g = /^\s*/.exec(f)[0].length;
                    if (f !== "" && (this.$highlightIndentGuideMarker.end = p, g <= s))
                      break;
                  }
                }
                this.$renderHighlightIndentGuide();
              }
            }
          }, t.prototype.$clearActiveIndentGuide = function() {
            for (var e = this.element.querySelectorAll(".ace_indent-guide-active"), o = 0; o < e.length; o++)
              e[o].classList.remove("ace_indent-guide-active");
          }, t.prototype.$setIndentGuideActive = function(e, o) {
            var s = this.session.doc.getLine(e.row);
            if (s !== "") {
              var l = e.element;
              if (e.element.classList && e.element.classList.contains("ace_line_group"))
                if (e.element.childNodes.length > 0)
                  l = e.element.childNodes[0];
                else
                  return;
              var u = l.childNodes;
              if (u) {
                var C = u[o - 1];
                C && C.classList && C.classList.contains("ace_indent-guide") && C.classList.add("ace_indent-guide-active");
              }
            }
          }, t.prototype.$renderHighlightIndentGuide = function() {
            if (this.$lines) {
              var e = this.$lines.cells;
              this.$clearActiveIndentGuide();
              var o = this.$highlightIndentGuideMarker.indentLevel;
              if (o !== 0)
                if (this.$highlightIndentGuideMarker.dir === 1)
                  for (var s = 0; s < e.length; s++) {
                    var l = e[s];
                    if (this.$highlightIndentGuideMarker.end && l.row >= this.$highlightIndentGuideMarker.start + 1) {
                      if (l.row >= this.$highlightIndentGuideMarker.end)
                        break;
                      this.$setIndentGuideActive(l, o);
                    }
                  }
                else
                  for (var s = e.length - 1; s >= 0; s--) {
                    var l = e[s];
                    if (this.$highlightIndentGuideMarker.end && l.row < this.$highlightIndentGuideMarker.start) {
                      if (l.row < this.$highlightIndentGuideMarker.end)
                        break;
                      this.$setIndentGuideActive(l, o);
                    }
                  }
            }
          }, t.prototype.$createLineElement = function(e) {
            var o = this.dom.createElement("div");
            return o.className = "ace_line", o.style.height = this.config.lineHeight + "px", o;
          }, t.prototype.$renderWrappedLine = function(e, o, s) {
            var l = 0, u = 0, C = s[0], p = 0, f = this.$createLineElement();
            e.appendChild(f);
            for (var g = 0; g < o.length; g++) {
              var v = o[g], M = v.value;
              if (g == 0 && this.displayIndentGuides) {
                if (l = M.length, M = this.renderIndentGuide(f, M, C), !M)
                  continue;
                l -= M.length;
              }
              if (l + M.length < C)
                p = this.$renderToken(f, p, v, M), l += M.length;
              else {
                for (; l + M.length >= C; )
                  p = this.$renderToken(f, p, v, M.substring(0, C - l)), M = M.substring(C - l), l = C, f = this.$createLineElement(), e.appendChild(f), f.appendChild(this.dom.createTextNode(A.stringRepeat(" ", s.indent), this.element)), u++, p = 0, C = s[u] || Number.MAX_VALUE;
                M.length != 0 && (l += M.length, p = this.$renderToken(f, p, v, M));
              }
            }
            s[s.length - 1] > this.MAX_LINE_LENGTH && this.$renderOverflowMessage(f, p, null, "", !0);
          }, t.prototype.$renderSimpleLine = function(e, o) {
            for (var s = 0, l = 0; l < o.length; l++) {
              var u = o[l], C = u.value;
              if (!(l == 0 && this.displayIndentGuides && (C = this.renderIndentGuide(e, C), !C))) {
                if (s + C.length > this.MAX_LINE_LENGTH)
                  return this.$renderOverflowMessage(e, s, u, C);
                s = this.$renderToken(e, s, u, C);
              }
            }
          }, t.prototype.$renderOverflowMessage = function(e, o, s, l, u) {
            s && this.$renderToken(e, o, s, l.slice(0, this.MAX_LINE_LENGTH - o));
            var C = this.dom.createElement("span");
            C.className = "ace_inline_button ace_keyword ace_toggle_wrap", C.textContent = u ? "<hide>" : "<click to see more...>", e.appendChild(C);
          }, t.prototype.$renderLine = function(e, o, s) {
            if (!s && s != !1 && (s = this.session.getFoldLine(o)), s)
              var l = this.$getFoldLineTokens(o, s);
            else
              var l = this.session.getTokens(o);
            var u = e;
            if (l.length) {
              var C = this.session.getRowSplitData(o);
              if (C && C.length) {
                this.$renderWrappedLine(e, l, C);
                var u = e.lastChild;
              } else {
                var u = e;
                this.$useLineGroups() && (u = this.$createLineElement(), e.appendChild(u)), this.$renderSimpleLine(u, l);
              }
            } else this.$useLineGroups() && (u = this.$createLineElement(), e.appendChild(u));
            if (this.showEOL && u) {
              s && (o = s.end.row);
              var p = this.dom.createElement("span");
              p.className = "ace_invisible ace_invisible_eol", p.textContent = o == this.session.getLength() - 1 ? this.EOF_CHAR : this.EOL_CHAR, u.appendChild(p);
            }
          }, t.prototype.$getFoldLineTokens = function(e, o) {
            var s = this.session, l = [];
            function u(p, f, g) {
              for (var v = 0, M = 0; M + p[v].value.length < f; )
                if (M += p[v].value.length, v++, v == p.length)
                  return;
              if (M != f) {
                var W = p[v].value.substring(f - M);
                W.length > g - f && (W = W.substring(0, g - f)), l.push({
                  type: p[v].type,
                  value: W
                }), M = f + W.length, v += 1;
              }
              for (; M < g && v < p.length; ) {
                var W = p[v].value;
                W.length + M > g ? l.push({
                  type: p[v].type,
                  value: W.substring(0, g - M)
                }) : l.push(p[v]), M += W.length, v += 1;
              }
            }
            var C = s.getTokens(e);
            return o.walk(function(p, f, g, v, M) {
              p != null ? l.push({
                type: "fold",
                value: p
              }) : (M && (C = s.getTokens(f)), C.length && u(C, v, g));
            }, o.end.row, this.session.getLine(o.end.row).length), l;
          }, t.prototype.$useLineGroups = function() {
            return this.session.getUseWrapMode();
          }, t;
        }()
      );
      i.prototype.EOF_CHAR = "¶", i.prototype.EOL_CHAR_LF = "¬", i.prototype.EOL_CHAR_CRLF = "¤", i.prototype.EOL_CHAR = i.prototype.EOL_CHAR_LF, i.prototype.TAB_CHAR = "—", i.prototype.SPACE_CHAR = "·", i.prototype.$padding = 0, i.prototype.MAX_LINE_LENGTH = 1e4, i.prototype.showInvisibles = !1, i.prototype.showSpaces = !1, i.prototype.showTabs = !1, i.prototype.showEOL = !1, i.prototype.displayIndentGuides = !0, i.prototype.$highlightIndentGuides = !0, i.prototype.$tabStrings = [], i.prototype.destroy = {}, i.prototype.onChangeTabSize = i.prototype.$computeTabString, b.implement(i.prototype, c), R.Text = i;
    }), ace.define("ace/layer/cursor", ["require", "exports", "module", "ace/lib/dom"], function(w, R, N) {
      var b = w("../lib/dom"), S = (
        /** @class */
        function() {
          function A(a) {
            this.element = b.createElement("div"), this.element.className = "ace_layer ace_cursor-layer", a.appendChild(this.element), this.isVisible = !1, this.isBlinking = !0, this.blinkInterval = 1e3, this.smoothBlinking = !1, this.cursors = [], this.cursor = this.addCursor(), b.addCssClass(this.element, "ace_hidden-cursors"), this.$updateCursors = this.$updateOpacity.bind(this);
          }
          return A.prototype.$updateOpacity = function(a) {
            for (var c = this.cursors, n = c.length; n--; )
              b.setStyle(c[n].style, "opacity", a ? "" : "0");
          }, A.prototype.$startCssAnimation = function() {
            for (var a = this.cursors, c = a.length; c--; )
              a[c].style.animationDuration = this.blinkInterval + "ms";
            this.$isAnimating = !0, setTimeout((function() {
              this.$isAnimating && b.addCssClass(this.element, "ace_animate-blinking");
            }).bind(this));
          }, A.prototype.$stopCssAnimation = function() {
            this.$isAnimating = !1, b.removeCssClass(this.element, "ace_animate-blinking");
          }, A.prototype.setPadding = function(a) {
            this.$padding = a;
          }, A.prototype.setSession = function(a) {
            this.session = a;
          }, A.prototype.setBlinking = function(a) {
            a != this.isBlinking && (this.isBlinking = a, this.restartTimer());
          }, A.prototype.setBlinkInterval = function(a) {
            a != this.blinkInterval && (this.blinkInterval = a, this.restartTimer());
          }, A.prototype.setSmoothBlinking = function(a) {
            a != this.smoothBlinking && (this.smoothBlinking = a, b.setCssClass(this.element, "ace_smooth-blinking", a), this.$updateCursors(!0), this.restartTimer());
          }, A.prototype.addCursor = function() {
            var a = b.createElement("div");
            return a.className = "ace_cursor", this.element.appendChild(a), this.cursors.push(a), a;
          }, A.prototype.removeCursor = function() {
            if (this.cursors.length > 1) {
              var a = this.cursors.pop();
              return a.parentNode.removeChild(a), a;
            }
          }, A.prototype.hideCursor = function() {
            this.isVisible = !1, b.addCssClass(this.element, "ace_hidden-cursors"), this.restartTimer();
          }, A.prototype.showCursor = function() {
            this.isVisible = !0, b.removeCssClass(this.element, "ace_hidden-cursors"), this.restartTimer();
          }, A.prototype.restartTimer = function() {
            var a = this.$updateCursors;
            if (clearInterval(this.intervalId), clearTimeout(this.timeoutId), this.$stopCssAnimation(), this.smoothBlinking && (this.$isSmoothBlinking = !1, b.removeCssClass(this.element, "ace_smooth-blinking")), a(!0), !this.isBlinking || !this.blinkInterval || !this.isVisible) {
              this.$stopCssAnimation();
              return;
            }
            if (this.smoothBlinking && (this.$isSmoothBlinking = !0, setTimeout((function() {
              this.$isSmoothBlinking && b.addCssClass(this.element, "ace_smooth-blinking");
            }).bind(this))), b.HAS_CSS_ANIMATION)
              this.$startCssAnimation();
            else {
              var c = (
                /**@this{Cursor}*/
                (function() {
                  this.timeoutId = setTimeout(function() {
                    a(!1);
                  }, 0.6 * this.blinkInterval);
                }).bind(this)
              );
              this.intervalId = setInterval(function() {
                a(!0), c();
              }, this.blinkInterval), c();
            }
          }, A.prototype.getPixelPosition = function(a, c) {
            if (!this.config || !this.session)
              return { left: 0, top: 0 };
            a || (a = this.session.selection.getCursor());
            var n = this.session.documentToScreenPosition(a), r = this.$padding + (this.session.$bidiHandler.isBidiRow(n.row, a.row) ? this.session.$bidiHandler.getPosLeft(n.column) : n.column * this.config.characterWidth), i = (n.row - (c ? this.config.firstRowScreen : 0)) * this.config.lineHeight;
            return { left: r, top: i };
          }, A.prototype.isCursorInView = function(a, c) {
            return a.top >= 0 && a.top < c.maxHeight;
          }, A.prototype.update = function(a) {
            this.config = a;
            var c = this.session.$selectionMarkers, n = 0, r = 0;
            (c === void 0 || c.length === 0) && (c = [{ cursor: null }]);
            for (var n = 0, i = c.length; n < i; n++) {
              var t = this.getPixelPosition(c[n].cursor, !0);
              if (!((t.top > a.height + a.offset || t.top < 0) && n > 1)) {
                var e = this.cursors[r++] || this.addCursor(), o = e.style;
                this.drawCursor ? this.drawCursor(e, t, a, c[n], this.session) : this.isCursorInView(t, a) ? (b.setStyle(o, "display", "block"), b.translate(e, t.left, t.top), b.setStyle(o, "width", Math.round(a.characterWidth) + "px"), b.setStyle(o, "height", a.lineHeight + "px")) : b.setStyle(o, "display", "none");
              }
            }
            for (; this.cursors.length > r; )
              this.removeCursor();
            var s = this.session.getOverwrite();
            this.$setOverwrite(s), this.$pixelPos = t, this.restartTimer();
          }, A.prototype.$setOverwrite = function(a) {
            a != this.overwrite && (this.overwrite = a, a ? b.addCssClass(this.element, "ace_overwrite-cursors") : b.removeCssClass(this.element, "ace_overwrite-cursors"));
          }, A.prototype.destroy = function() {
            clearInterval(this.intervalId), clearTimeout(this.timeoutId);
          }, A;
        }()
      );
      S.prototype.$padding = 0, S.prototype.drawCursor = null, R.Cursor = S;
    }), ace.define("ace/scrollbar", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/event", "ace/lib/event_emitter"], function(w, R, N) {
      var b = this && this.__extends || /* @__PURE__ */ function() {
        var e = function(o, s) {
          return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, u) {
            l.__proto__ = u;
          } || function(l, u) {
            for (var C in u) Object.prototype.hasOwnProperty.call(u, C) && (l[C] = u[C]);
          }, e(o, s);
        };
        return function(o, s) {
          if (typeof s != "function" && s !== null)
            throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
          e(o, s);
          function l() {
            this.constructor = o;
          }
          o.prototype = s === null ? Object.create(s) : (l.prototype = s.prototype, new l());
        };
      }(), S = w("./lib/oop"), A = w("./lib/dom"), a = w("./lib/event"), c = w("./lib/event_emitter").EventEmitter, n = 32768, r = (
        /** @class */
        function() {
          function e(o, s) {
            this.element = A.createElement("div"), this.element.className = "ace_scrollbar ace_scrollbar" + s, this.inner = A.createElement("div"), this.inner.className = "ace_scrollbar-inner", this.inner.textContent = " ", this.element.appendChild(this.inner), o.appendChild(this.element), this.setVisible(!1), this.skipEvent = !1, a.addListener(this.element, "scroll", this.onScroll.bind(this)), a.addListener(this.element, "mousedown", a.preventDefault);
          }
          return e.prototype.setVisible = function(o) {
            this.element.style.display = o ? "" : "none", this.isVisible = o, this.coeff = 1;
          }, e;
        }()
      );
      S.implement(r.prototype, c);
      var i = (
        /** @class */
        function(e) {
          b(o, e);
          function o(s, l) {
            var u = e.call(this, s, "-v") || this;
            return u.scrollTop = 0, u.scrollHeight = 0, l.$scrollbarWidth = u.width = A.scrollbarWidth(s.ownerDocument), u.inner.style.width = u.element.style.width = (u.width || 15) + 5 + "px", u.$minWidth = 0, u;
          }
          return o.prototype.onScroll = function() {
            if (!this.skipEvent) {
              if (this.scrollTop = this.element.scrollTop, this.coeff != 1) {
                var s = this.element.clientHeight / this.scrollHeight;
                this.scrollTop = this.scrollTop * (1 - s) / (this.coeff - s);
              }
              this._emit("scroll", { data: this.scrollTop });
            }
            this.skipEvent = !1;
          }, o.prototype.getWidth = function() {
            return Math.max(this.isVisible ? this.width : 0, this.$minWidth || 0);
          }, o.prototype.setHeight = function(s) {
            this.element.style.height = s + "px";
          }, o.prototype.setScrollHeight = function(s) {
            this.scrollHeight = s, s > n ? (this.coeff = n / s, s = n) : this.coeff != 1 && (this.coeff = 1), this.inner.style.height = s + "px";
          }, o.prototype.setScrollTop = function(s) {
            this.scrollTop != s && (this.skipEvent = !0, this.scrollTop = s, this.element.scrollTop = s * this.coeff);
          }, o;
        }(r)
      );
      i.prototype.setInnerHeight = i.prototype.setScrollHeight;
      var t = (
        /** @class */
        function(e) {
          b(o, e);
          function o(s, l) {
            var u = e.call(this, s, "-h") || this;
            return u.scrollLeft = 0, u.height = l.$scrollbarWidth, u.inner.style.height = u.element.style.height = (u.height || 15) + 5 + "px", u;
          }
          return o.prototype.onScroll = function() {
            this.skipEvent || (this.scrollLeft = this.element.scrollLeft, this._emit("scroll", { data: this.scrollLeft })), this.skipEvent = !1;
          }, o.prototype.getHeight = function() {
            return this.isVisible ? this.height : 0;
          }, o.prototype.setWidth = function(s) {
            this.element.style.width = s + "px";
          }, o.prototype.setInnerWidth = function(s) {
            this.inner.style.width = s + "px";
          }, o.prototype.setScrollWidth = function(s) {
            this.inner.style.width = s + "px";
          }, o.prototype.setScrollLeft = function(s) {
            this.scrollLeft != s && (this.skipEvent = !0, this.scrollLeft = this.element.scrollLeft = s);
          }, o;
        }(r)
      );
      R.ScrollBar = i, R.ScrollBarV = i, R.ScrollBarH = t, R.VScrollBar = i, R.HScrollBar = t;
    }), ace.define("ace/scrollbar_custom", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/event", "ace/lib/event_emitter"], function(w, R, N) {
      var b = this && this.__extends || /* @__PURE__ */ function() {
        var t = function(e, o) {
          return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
            s.__proto__ = l;
          } || function(s, l) {
            for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
          }, t(e, o);
        };
        return function(e, o) {
          if (typeof o != "function" && o !== null)
            throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
          t(e, o);
          function s() {
            this.constructor = e;
          }
          e.prototype = o === null ? Object.create(o) : (s.prototype = o.prototype, new s());
        };
      }(), S = w("./lib/oop"), A = w("./lib/dom"), a = w("./lib/event"), c = w("./lib/event_emitter").EventEmitter;
      A.importCssString(`.ace_editor>.ace_sb-v div, .ace_editor>.ace_sb-h div{
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
      var n = (
        /** @class */
        function() {
          function t(e, o) {
            this.element = A.createElement("div"), this.element.className = "ace_sb" + o, this.inner = A.createElement("div"), this.inner.className = "", this.element.appendChild(this.inner), this.VScrollWidth = 12, this.HScrollHeight = 12, e.appendChild(this.element), this.setVisible(!1), this.skipEvent = !1, a.addMultiMouseDownListener(this.element, [500, 300, 300], this, "onMouseDown");
          }
          return t.prototype.setVisible = function(e) {
            this.element.style.display = e ? "" : "none", this.isVisible = e, this.coeff = 1;
          }, t;
        }()
      );
      S.implement(n.prototype, c);
      var r = (
        /** @class */
        function(t) {
          b(e, t);
          function e(o, s) {
            var l = t.call(this, o, "-v") || this;
            return l.scrollTop = 0, l.scrollHeight = 0, l.parent = o, l.width = l.VScrollWidth, l.renderer = s, l.inner.style.width = l.element.style.width = (l.width || 15) + "px", l.$minWidth = 0, l;
          }
          return e.prototype.onMouseDown = function(o, s) {
            if (o === "mousedown" && !(a.getButton(s) !== 0 || s.detail === 2)) {
              if (s.target === this.inner) {
                var l = this, u = s.clientY, C = function(k) {
                  u = k.clientY;
                }, p = function() {
                  clearInterval(M);
                }, f = s.clientY, g = this.thumbTop, v = function() {
                  if (u !== void 0) {
                    var k = l.scrollTopFromThumbTop(g + u - f);
                    k !== l.scrollTop && l._emit("scroll", { data: k });
                  }
                };
                a.capture(this.inner, C, p);
                var M = setInterval(v, 20);
                return a.preventDefault(s);
              }
              var W = s.clientY - this.element.getBoundingClientRect().top - this.thumbHeight / 2;
              return this._emit("scroll", { data: this.scrollTopFromThumbTop(W) }), a.preventDefault(s);
            }
          }, e.prototype.getHeight = function() {
            return this.height;
          }, e.prototype.scrollTopFromThumbTop = function(o) {
            var s = o * (this.pageHeight - this.viewHeight) / (this.slideHeight - this.thumbHeight);
            return s = s >> 0, s < 0 ? s = 0 : s > this.pageHeight - this.viewHeight && (s = this.pageHeight - this.viewHeight), s;
          }, e.prototype.getWidth = function() {
            return Math.max(this.isVisible ? this.width : 0, this.$minWidth || 0);
          }, e.prototype.setHeight = function(o) {
            this.height = Math.max(0, o), this.slideHeight = this.height, this.viewHeight = this.height, this.setScrollHeight(this.pageHeight, !0);
          }, e.prototype.setScrollHeight = function(o, s) {
            this.pageHeight === o && !s || (this.pageHeight = o, this.thumbHeight = this.slideHeight * this.viewHeight / this.pageHeight, this.thumbHeight > this.slideHeight && (this.thumbHeight = this.slideHeight), this.thumbHeight < 15 && (this.thumbHeight = 15), this.inner.style.height = this.thumbHeight + "px", this.scrollTop > this.pageHeight - this.viewHeight && (this.scrollTop = this.pageHeight - this.viewHeight, this.scrollTop < 0 && (this.scrollTop = 0), this._emit("scroll", { data: this.scrollTop })));
          }, e.prototype.setScrollTop = function(o) {
            this.scrollTop = o, o < 0 && (o = 0), this.thumbTop = o * (this.slideHeight - this.thumbHeight) / (this.pageHeight - this.viewHeight), this.inner.style.top = this.thumbTop + "px";
          }, e;
        }(n)
      );
      r.prototype.setInnerHeight = r.prototype.setScrollHeight;
      var i = (
        /** @class */
        function(t) {
          b(e, t);
          function e(o, s) {
            var l = t.call(this, o, "-h") || this;
            return l.scrollLeft = 0, l.scrollWidth = 0, l.height = l.HScrollHeight, l.inner.style.height = l.element.style.height = (l.height || 12) + "px", l.renderer = s, l;
          }
          return e.prototype.onMouseDown = function(o, s) {
            if (o === "mousedown" && !(a.getButton(s) !== 0 || s.detail === 2)) {
              if (s.target === this.inner) {
                var l = this, u = s.clientX, C = function(k) {
                  u = k.clientX;
                }, p = function() {
                  clearInterval(M);
                }, f = s.clientX, g = this.thumbLeft, v = function() {
                  if (u !== void 0) {
                    var k = l.scrollLeftFromThumbLeft(g + u - f);
                    k !== l.scrollLeft && l._emit("scroll", { data: k });
                  }
                };
                a.capture(this.inner, C, p);
                var M = setInterval(v, 20);
                return a.preventDefault(s);
              }
              var W = s.clientX - this.element.getBoundingClientRect().left - this.thumbWidth / 2;
              return this._emit("scroll", { data: this.scrollLeftFromThumbLeft(W) }), a.preventDefault(s);
            }
          }, e.prototype.getHeight = function() {
            return this.isVisible ? this.height : 0;
          }, e.prototype.scrollLeftFromThumbLeft = function(o) {
            var s = o * (this.pageWidth - this.viewWidth) / (this.slideWidth - this.thumbWidth);
            return s = s >> 0, s < 0 ? s = 0 : s > this.pageWidth - this.viewWidth && (s = this.pageWidth - this.viewWidth), s;
          }, e.prototype.setWidth = function(o) {
            this.width = Math.max(0, o), this.element.style.width = this.width + "px", this.slideWidth = this.width, this.viewWidth = this.width, this.setScrollWidth(this.pageWidth, !0);
          }, e.prototype.setScrollWidth = function(o, s) {
            this.pageWidth === o && !s || (this.pageWidth = o, this.thumbWidth = this.slideWidth * this.viewWidth / this.pageWidth, this.thumbWidth > this.slideWidth && (this.thumbWidth = this.slideWidth), this.thumbWidth < 15 && (this.thumbWidth = 15), this.inner.style.width = this.thumbWidth + "px", this.scrollLeft > this.pageWidth - this.viewWidth && (this.scrollLeft = this.pageWidth - this.viewWidth, this.scrollLeft < 0 && (this.scrollLeft = 0), this._emit("scroll", { data: this.scrollLeft })));
          }, e.prototype.setScrollLeft = function(o) {
            this.scrollLeft = o, o < 0 && (o = 0), this.thumbLeft = o * (this.slideWidth - this.thumbWidth) / (this.pageWidth - this.viewWidth), this.inner.style.left = this.thumbLeft + "px";
          }, e;
        }(n)
      );
      i.prototype.setInnerWidth = i.prototype.setScrollWidth, R.ScrollBar = r, R.ScrollBarV = r, R.ScrollBarH = i, R.VScrollBar = r, R.HScrollBar = i;
    }), ace.define("ace/renderloop", ["require", "exports", "module", "ace/lib/event"], function(w, R, N) {
      var b = w("./lib/event"), S = (
        /** @class */
        function() {
          function A(a, c) {
            this.onRender = a, this.pending = !1, this.changes = 0, this.$recursionLimit = 2, this.window = c || window;
            var n = this;
            this._flush = function(r) {
              n.pending = !1;
              var i = n.changes;
              if (i && (b.blockIdle(100), n.changes = 0, n.onRender(i)), n.changes) {
                if (n.$recursionLimit-- < 0)
                  return;
                n.schedule();
              } else
                n.$recursionLimit = 2;
            };
          }
          return A.prototype.schedule = function(a) {
            this.changes = this.changes | a, this.changes && !this.pending && (b.nextFrame(this._flush), this.pending = !0);
          }, A.prototype.clear = function(a) {
            var c = this.changes;
            return this.changes = 0, c;
          }, A;
        }()
      );
      R.RenderLoop = S;
    }), ace.define("ace/layer/font_metrics", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/event", "ace/lib/useragent", "ace/lib/event_emitter"], function(w, R, N) {
      var b = w("../lib/oop"), S = w("../lib/dom"), A = w("../lib/lang"), a = w("../lib/event"), c = w("../lib/useragent"), n = w("../lib/event_emitter").EventEmitter, r = 512, i = typeof ResizeObserver == "function", t = 200, e = (
        /** @class */
        function() {
          function o(s) {
            this.el = S.createElement("div"), this.$setMeasureNodeStyles(this.el.style, !0), this.$main = S.createElement("div"), this.$setMeasureNodeStyles(this.$main.style), this.$measureNode = S.createElement("div"), this.$setMeasureNodeStyles(this.$measureNode.style), this.el.appendChild(this.$main), this.el.appendChild(this.$measureNode), s.appendChild(this.el), this.$measureNode.textContent = A.stringRepeat("X", r), this.$characterSize = { width: 0, height: 0 }, i ? this.$addObserver() : this.checkForSizeChanges();
          }
          return o.prototype.$setMeasureNodeStyles = function(s, l) {
            s.width = s.height = "auto", s.left = s.top = "0px", s.visibility = "hidden", s.position = "absolute", s.whiteSpace = "pre", c.isIE < 8 ? s["font-family"] = "inherit" : s.font = "inherit", s.overflow = l ? "hidden" : "visible";
          }, o.prototype.checkForSizeChanges = function(s) {
            if (s === void 0 && (s = this.$measureSizes()), s && (this.$characterSize.width !== s.width || this.$characterSize.height !== s.height)) {
              this.$measureNode.style.fontWeight = "bold";
              var l = this.$measureSizes();
              this.$measureNode.style.fontWeight = "", this.$characterSize = s, this.charSizes = /* @__PURE__ */ Object.create(null), this.allowBoldFonts = l && l.width === s.width && l.height === s.height, this._emit("changeCharacterSize", { data: s });
            }
          }, o.prototype.$addObserver = function() {
            var s = this;
            this.$observer = new window.ResizeObserver(function(l) {
              s.checkForSizeChanges();
            }), this.$observer.observe(this.$measureNode);
          }, o.prototype.$pollSizeChanges = function() {
            if (this.$pollSizeChangesTimer || this.$observer)
              return this.$pollSizeChangesTimer;
            var s = this;
            return this.$pollSizeChangesTimer = a.onIdle(function l() {
              s.checkForSizeChanges(), a.onIdle(l, 500);
            }, 500);
          }, o.prototype.setPolling = function(s) {
            s ? this.$pollSizeChanges() : this.$pollSizeChangesTimer && (clearInterval(this.$pollSizeChangesTimer), this.$pollSizeChangesTimer = 0);
          }, o.prototype.$measureSizes = function(s) {
            var l = {
              height: (s || this.$measureNode).clientHeight,
              width: (s || this.$measureNode).clientWidth / r
            };
            return l.width === 0 || l.height === 0 ? null : l;
          }, o.prototype.$measureCharWidth = function(s) {
            this.$main.textContent = A.stringRepeat(s, r);
            var l = this.$main.getBoundingClientRect();
            return l.width / r;
          }, o.prototype.getCharacterWidth = function(s) {
            var l = this.charSizes[s];
            return l === void 0 && (l = this.charSizes[s] = this.$measureCharWidth(s) / this.$characterSize.width), l;
          }, o.prototype.destroy = function() {
            clearInterval(this.$pollSizeChangesTimer), this.$observer && this.$observer.disconnect(), this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el);
          }, o.prototype.$getZoom = function(s) {
            return !s || !s.parentElement ? 1 : (Number(window.getComputedStyle(s).zoom) || 1) * this.$getZoom(s.parentElement);
          }, o.prototype.$initTransformMeasureNodes = function() {
            var s = function(l, u) {
              return ["div", {
                style: "position: absolute;top:" + l + "px;left:" + u + "px;"
              }];
            };
            this.els = S.buildDom([s(0, 0), s(t, 0), s(0, t), s(t, t)], this.el);
          }, o.prototype.transformCoordinates = function(s, l) {
            if (s) {
              var u = this.$getZoom(this.el);
              s = g(1 / u, s);
            }
            function C(B, T, V) {
              var _ = B[1] * T[0] - B[0] * T[1];
              return [
                (-T[1] * V[0] + T[0] * V[1]) / _,
                (+B[1] * V[0] - B[0] * V[1]) / _
              ];
            }
            function p(B, T) {
              return [B[0] - T[0], B[1] - T[1]];
            }
            function f(B, T) {
              return [B[0] + T[0], B[1] + T[1]];
            }
            function g(B, T) {
              return [B * T[0], B * T[1]];
            }
            this.els || this.$initTransformMeasureNodes();
            function v(B) {
              var T = B.getBoundingClientRect();
              return [T.left, T.top];
            }
            var M = v(this.els[0]), W = v(this.els[1]), k = v(this.els[2]), Z = v(this.els[3]), y = C(p(Z, W), p(Z, k), p(f(W, k), f(Z, M))), I = g(1 + y[0], p(W, M)), d = g(1 + y[1], p(k, M));
            if (l) {
              var h = l, m = y[0] * h[0] / t + y[1] * h[1] / t + 1, x = f(g(h[0], I), g(h[1], d));
              return f(g(1 / m / t, x), M);
            }
            var $ = p(s, M), L = C(p(I, g(y[0], $)), p(d, g(y[1], $)), $);
            return g(t, L);
          }, o;
        }()
      );
      e.prototype.$characterSize = { width: 0, height: 0 }, b.implement(e.prototype, n), R.FontMetrics = e;
    }), ace.define("ace/css/editor-css", ["require", "exports", "module"], function(w, R, N) {
      N.exports = `
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
    }), ace.define("ace/layer/decorators", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/event_emitter"], function(w, R, N) {
      var b = w("../lib/dom"), S = w("../lib/oop"), A = w("../lib/event_emitter").EventEmitter, a = (
        /** @class */
        function() {
          function c(n, r) {
            this.parentEl = n, this.canvas = b.createElement("canvas"), this.renderer = r, this.pixelRatio = 1, this.maxHeight = r.layerConfig.maxHeight, this.lineHeight = r.layerConfig.lineHeight, this.minDecorationHeight = 2 * this.pixelRatio | 0, this.halfMinDecorationHeight = this.minDecorationHeight / 2 | 0, this.canvas.style.top = "0px", this.canvas.style.right = "0px", this.canvas.style.zIndex = "7px", this.canvas.style.position = "absolute", this.colors = {}, this.colors.dark = {
              error: "rgba(255, 18, 18, 1)",
              warning: "rgba(18, 136, 18, 1)",
              info: "rgba(18, 18, 136, 1)"
            }, this.colors.light = {
              error: "rgb(255,51,51)",
              warning: "rgb(32,133,72)",
              info: "rgb(35,68,138)"
            }, this.setDimensions(), n.element.appendChild(this.canvas);
          }
          return c.prototype.$updateDecorators = function(n) {
            var r = this.renderer.theme.isDark === !0 ? this.colors.dark : this.colors.light;
            this.setDimensions(n);
            var i = this.canvas.getContext("2d");
            function t(W, k) {
              return W.priority < k.priority ? -1 : W.priority > k.priority ? 1 : 0;
            }
            var e = this.renderer.session.$annotations;
            if (i.clearRect(0, 0, this.canvas.width, this.canvas.height), e) {
              var o = {
                info: 1,
                warning: 2,
                error: 3
              };
              e.forEach(function(W) {
                W.priority = o[W.type] || null;
              }), e = e.sort(t);
              for (var s = 0; s < e.length; s++) {
                var l = e[s].row, u = this.compensateFoldRows(l), C = Math.round((l - u) * this.lineHeight * this.heightRatio), p = Math.round((l - u) * this.lineHeight * this.heightRatio), f = Math.round(((l - u) * this.lineHeight + this.lineHeight) * this.heightRatio), g = f - p;
                if (g < this.minDecorationHeight) {
                  var v = (p + f) / 2 | 0;
                  v < this.halfMinDecorationHeight ? v = this.halfMinDecorationHeight : v + this.halfMinDecorationHeight > this.canvasHeight && (v = this.canvasHeight - this.halfMinDecorationHeight), p = Math.round(v - this.halfMinDecorationHeight), f = Math.round(v + this.halfMinDecorationHeight);
                }
                i.fillStyle = r[e[s].type] || null, i.fillRect(0, C, this.canvasWidth, f - p);
              }
            }
            var M = this.renderer.session.selection.getCursor();
            if (M) {
              var u = this.compensateFoldRows(M.row), C = Math.round((M.row - u) * this.lineHeight * this.heightRatio);
              i.fillStyle = "rgba(0, 0, 0, 0.5)", i.fillRect(0, C, this.canvasWidth, 2);
            }
          }, c.prototype.compensateFoldRows = function(n) {
            var r = this.renderer.session.$foldData, i = 0;
            if (r && r.length > 0)
              for (var t = 0; t < r.length; t++)
                n > r[t].start.row && n < r[t].end.row ? i += n - r[t].start.row : n >= r[t].end.row && (i += r[t].end.row - r[t].start.row);
            return i;
          }, c.prototype.compensateLineWidgets = function(n) {
            var r = this.renderer.session.widgetManager;
            if (r) {
              var i = 0;
              return r.lineWidgets.forEach(function(t, e) {
                n > e && (i += t.rowCount || 0);
              }), i - 1;
            }
            return 0;
          }, c.prototype.setDimensions = function(n) {
            n ? (this.maxHeight = n.maxHeight, this.lineHeight = n.lineHeight, this.canvasHeight = n.height, this.maxHeight < this.canvasHeight ? this.heightRatio = 1 : this.heightRatio = this.canvasHeight / this.maxHeight) : (this.canvasHeight = this.parentEl.parent.scrollHeight || this.canvasHeight, this.canvasWidth = this.parentEl.width || this.canvasWidth, this.heightRatio = this.canvasHeight / this.maxHeight, this.canvas.width = this.canvasWidth, this.canvas.height = this.canvasHeight);
          }, c;
        }()
      );
      S.implement(a.prototype, A), R.Decorator = a;
    }), ace.define("ace/virtual_renderer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/config", "ace/layer/gutter", "ace/layer/marker", "ace/layer/text", "ace/layer/cursor", "ace/scrollbar", "ace/scrollbar", "ace/scrollbar_custom", "ace/scrollbar_custom", "ace/renderloop", "ace/layer/font_metrics", "ace/lib/event_emitter", "ace/css/editor-css", "ace/layer/decorators", "ace/lib/useragent", "ace/layer/text_util"], function(w, R, N) {
      var b = w("./lib/oop"), S = w("./lib/dom"), A = w("./lib/lang"), a = w("./config"), c = w("./layer/gutter").Gutter, n = w("./layer/marker").Marker, r = w("./layer/text").Text, i = w("./layer/cursor").Cursor, t = w("./scrollbar").HScrollBar, e = w("./scrollbar").VScrollBar, o = w("./scrollbar_custom").HScrollBar, s = w("./scrollbar_custom").VScrollBar, l = w("./renderloop").RenderLoop, u = w("./layer/font_metrics").FontMetrics, C = w("./lib/event_emitter").EventEmitter, p = w("./css/editor-css"), f = w("./layer/decorators").Decorator, g = w("./lib/useragent"), v = w("./layer/text_util").isTextToken;
      S.importCssString(p, "ace_editor.css", !1);
      var M = (
        /** @class */
        function() {
          function W(k, Z) {
            var y = this;
            this.container = k || S.createElement("div"), S.addCssClass(this.container, "ace_editor"), S.HI_DPI && S.addCssClass(this.container, "ace_hidpi"), this.setTheme(Z), a.get("useStrictCSP") == null && a.set("useStrictCSP", !1), this.$gutter = S.createElement("div"), this.$gutter.className = "ace_gutter", this.container.appendChild(this.$gutter), this.$gutter.setAttribute("aria-hidden", "true"), this.scroller = S.createElement("div"), this.scroller.className = "ace_scroller", this.container.appendChild(this.scroller), this.content = S.createElement("div"), this.content.className = "ace_content", this.scroller.appendChild(this.content), this.$gutterLayer = new c(this.$gutter), this.$gutterLayer.on("changeGutterWidth", this.onGutterResize.bind(this)), this.$markerBack = new n(this.content);
            var I = this.$textLayer = new r(this.content);
            this.canvas = I.element, this.$markerFront = new n(this.content), this.$cursorLayer = new i(this.content), this.$horizScroll = !1, this.$vScroll = !1, this.scrollBar = this.scrollBarV = new e(this.container, this), this.scrollBarH = new t(this.container, this), this.scrollBarV.on("scroll", function(d) {
              y.$scrollAnimation || y.session.setScrollTop(d.data - y.scrollMargin.top);
            }), this.scrollBarH.on("scroll", function(d) {
              y.$scrollAnimation || y.session.setScrollLeft(d.data - y.scrollMargin.left);
            }), this.scrollTop = 0, this.scrollLeft = 0, this.cursorPos = {
              row: 0,
              column: 0
            }, this.$fontMetrics = new u(this.container), this.$textLayer.$setFontMetrics(this.$fontMetrics), this.$textLayer.on("changeCharacterSize", function(d) {
              y.updateCharacterSize(), y.onResize(!0, y.gutterWidth, y.$size.width, y.$size.height), y._signal("changeCharacterSize", d);
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
            }, this.$keepTextAreaAtCursor = !g.isIOS, this.$loop = new l(this.$renderChanges.bind(this), this.container.ownerDocument.defaultView), this.$loop.schedule(this.CHANGE_FULL), this.updateCharacterSize(), this.setPadding(4), this.$addResizeObserver(), a.resetOptions(this), a._signal("renderer", this);
          }
          return W.prototype.updateCharacterSize = function() {
            this.$textLayer.allowBoldFonts != this.$allowBoldFonts && (this.$allowBoldFonts = this.$textLayer.allowBoldFonts, this.setStyle("ace_nobold", !this.$allowBoldFonts)), this.layerConfig.characterWidth = this.characterWidth = this.$textLayer.getCharacterWidth(), this.layerConfig.lineHeight = this.lineHeight = this.$textLayer.getLineHeight(), this.$updatePrintMargin(), S.setStyle(this.scroller.style, "line-height", this.lineHeight + "px");
          }, W.prototype.setSession = function(k) {
            this.session && this.session.doc.off("changeNewLineMode", this.onChangeNewLineMode), this.session = k, k && this.scrollMargin.top && k.getScrollTop() <= 0 && k.setScrollTop(-this.scrollMargin.top), this.$cursorLayer.setSession(k), this.$markerBack.setSession(k), this.$markerFront.setSession(k), this.$gutterLayer.setSession(k), this.$textLayer.setSession(k), k && (this.$loop.schedule(this.CHANGE_FULL), this.session.$setFontMetrics(this.$fontMetrics), this.scrollBarH.scrollLeft = this.scrollBarV.scrollTop = null, this.onChangeNewLineMode = this.onChangeNewLineMode.bind(this), this.onChangeNewLineMode(), this.session.doc.on("changeNewLineMode", this.onChangeNewLineMode));
          }, W.prototype.updateLines = function(k, Z, y) {
            if (Z === void 0 && (Z = 1 / 0), this.$changedLines ? (this.$changedLines.firstRow > k && (this.$changedLines.firstRow = k), this.$changedLines.lastRow < Z && (this.$changedLines.lastRow = Z)) : this.$changedLines = {
              firstRow: k,
              lastRow: Z
            }, this.$changedLines.lastRow < this.layerConfig.firstRow)
              if (y)
                this.$changedLines.lastRow = this.layerConfig.lastRow;
              else
                return;
            this.$changedLines.firstRow > this.layerConfig.lastRow || this.$loop.schedule(this.CHANGE_LINES);
          }, W.prototype.onChangeNewLineMode = function() {
            this.$loop.schedule(this.CHANGE_TEXT), this.$textLayer.$updateEolChar(), this.session.$bidiHandler.setEolChar(this.$textLayer.EOL_CHAR);
          }, W.prototype.onChangeTabSize = function() {
            this.$loop.schedule(this.CHANGE_TEXT | this.CHANGE_MARKER), this.$textLayer.onChangeTabSize();
          }, W.prototype.updateText = function() {
            this.$loop.schedule(this.CHANGE_TEXT);
          }, W.prototype.updateFull = function(k) {
            k ? this.$renderChanges(this.CHANGE_FULL, !0) : this.$loop.schedule(this.CHANGE_FULL);
          }, W.prototype.updateFontSize = function() {
            this.$textLayer.checkForSizeChanges();
          }, W.prototype.$updateSizeAsync = function() {
            this.$loop.pending ? this.$size.$dirty = !0 : this.onResize();
          }, W.prototype.onResize = function(k, Z, y, I) {
            if (!(this.resizing > 2)) {
              this.resizing > 0 ? this.resizing++ : this.resizing = k ? 1 : 0;
              var d = this.container;
              I || (I = d.clientHeight || d.scrollHeight), !I && this.$maxLines && this.lineHeight > 1 && (!d.style.height || d.style.height == "0px") && (d.style.height = "1px", I = d.clientHeight || d.scrollHeight), y || (y = d.clientWidth || d.scrollWidth);
              var h = this.$updateCachedSize(k, Z, y, I);
              if (this.$resizeTimer && this.$resizeTimer.cancel(), !this.$size.scrollerHeight || !y && !I)
                return this.resizing = 0;
              k && (this.$gutterLayer.$padding = null), k ? this.$renderChanges(h | this.$changes, !0) : this.$loop.schedule(h | this.$changes), this.resizing && (this.resizing = 0), this.scrollBarH.scrollLeft = this.scrollBarV.scrollTop = null, this.$customScrollbar && this.$updateCustomScrollbar(!0);
            }
          }, W.prototype.$updateCachedSize = function(k, Z, y, I) {
            I -= this.$extraHeight || 0;
            var d = 0, h = this.$size, m = {
              width: h.width,
              height: h.height,
              scrollerHeight: h.scrollerHeight,
              scrollerWidth: h.scrollerWidth
            };
            if (I && (k || h.height != I) && (h.height = I, d |= this.CHANGE_SIZE, h.scrollerHeight = h.height, this.$horizScroll && (h.scrollerHeight -= this.scrollBarH.getHeight()), this.scrollBarV.setHeight(h.scrollerHeight), this.scrollBarV.element.style.bottom = this.scrollBarH.getHeight() + "px", d = d | this.CHANGE_SCROLL), y && (k || h.width != y)) {
              d |= this.CHANGE_SIZE, h.width = y, Z == null && (Z = this.$showGutter ? this.$gutter.offsetWidth : 0), this.gutterWidth = Z, S.setStyle(this.scrollBarH.element.style, "left", Z + "px"), S.setStyle(this.scroller.style, "left", Z + this.margin.left + "px"), h.scrollerWidth = Math.max(0, y - Z - this.scrollBarV.getWidth() - this.margin.h), S.setStyle(this.$gutter.style, "left", this.margin.left + "px");
              var x = this.scrollBarV.getWidth() + "px";
              S.setStyle(this.scrollBarH.element.style, "right", x), S.setStyle(this.scroller.style, "right", x), S.setStyle(this.scroller.style, "bottom", this.scrollBarH.getHeight()), this.scrollBarH.setWidth(h.scrollerWidth), (this.session && this.session.getUseWrapMode() && this.adjustWrapLimit() || k) && (d |= this.CHANGE_FULL);
            }
            return h.$dirty = !y || !I, d && this._signal("resize", m), d;
          }, W.prototype.onGutterResize = function(k) {
            var Z = this.$showGutter ? k : 0;
            Z != this.gutterWidth && (this.$changes |= this.$updateCachedSize(!0, Z, this.$size.width, this.$size.height)), this.session.getUseWrapMode() && this.adjustWrapLimit() ? this.$loop.schedule(this.CHANGE_FULL) : this.$size.$dirty ? this.$loop.schedule(this.CHANGE_FULL) : this.$computeLayerConfig();
          }, W.prototype.adjustWrapLimit = function() {
            var k = this.$size.scrollerWidth - this.$padding * 2, Z = Math.floor(k / this.characterWidth);
            return this.session.adjustWrapLimit(Z, this.$showPrintMargin && this.$printMarginColumn);
          }, W.prototype.setAnimatedScroll = function(k) {
            this.setOption("animatedScroll", k);
          }, W.prototype.getAnimatedScroll = function() {
            return this.$animatedScroll;
          }, W.prototype.setShowInvisibles = function(k) {
            this.setOption("showInvisibles", k), this.session.$bidiHandler.setShowInvisibles(k);
          }, W.prototype.getShowInvisibles = function() {
            return this.getOption("showInvisibles");
          }, W.prototype.getDisplayIndentGuides = function() {
            return this.getOption("displayIndentGuides");
          }, W.prototype.setDisplayIndentGuides = function(k) {
            this.setOption("displayIndentGuides", k);
          }, W.prototype.getHighlightIndentGuides = function() {
            return this.getOption("highlightIndentGuides");
          }, W.prototype.setHighlightIndentGuides = function(k) {
            this.setOption("highlightIndentGuides", k);
          }, W.prototype.setShowPrintMargin = function(k) {
            this.setOption("showPrintMargin", k);
          }, W.prototype.getShowPrintMargin = function() {
            return this.getOption("showPrintMargin");
          }, W.prototype.setPrintMarginColumn = function(k) {
            this.setOption("printMarginColumn", k);
          }, W.prototype.getPrintMarginColumn = function() {
            return this.getOption("printMarginColumn");
          }, W.prototype.getShowGutter = function() {
            return this.getOption("showGutter");
          }, W.prototype.setShowGutter = function(k) {
            return this.setOption("showGutter", k);
          }, W.prototype.getFadeFoldWidgets = function() {
            return this.getOption("fadeFoldWidgets");
          }, W.prototype.setFadeFoldWidgets = function(k) {
            this.setOption("fadeFoldWidgets", k);
          }, W.prototype.setHighlightGutterLine = function(k) {
            this.setOption("highlightGutterLine", k);
          }, W.prototype.getHighlightGutterLine = function() {
            return this.getOption("highlightGutterLine");
          }, W.prototype.$updatePrintMargin = function() {
            if (!(!this.$showPrintMargin && !this.$printMarginEl)) {
              if (!this.$printMarginEl) {
                var k = S.createElement("div");
                k.className = "ace_layer ace_print-margin-layer", this.$printMarginEl = S.createElement("div"), this.$printMarginEl.className = "ace_print-margin", k.appendChild(this.$printMarginEl), this.content.insertBefore(k, this.content.firstChild);
              }
              var Z = this.$printMarginEl.style;
              Z.left = Math.round(this.characterWidth * this.$printMarginColumn + this.$padding) + "px", Z.visibility = this.$showPrintMargin ? "visible" : "hidden", this.session && this.session.$wrap == -1 && this.adjustWrapLimit();
            }
          }, W.prototype.getContainerElement = function() {
            return this.container;
          }, W.prototype.getMouseEventTarget = function() {
            return this.scroller;
          }, W.prototype.getTextAreaContainer = function() {
            return this.container;
          }, W.prototype.$moveTextAreaToCursor = function() {
            if (!this.$isMousePressed) {
              var k = this.textarea.style, Z = this.$composition;
              if (!this.$keepTextAreaAtCursor && !Z) {
                S.translate(this.textarea, -100, 0);
                return;
              }
              var y = this.$cursorLayer.$pixelPos;
              if (y) {
                Z && Z.markerRange && (y = this.$cursorLayer.getPixelPosition(Z.markerRange.start, !0));
                var I = this.layerConfig, d = y.top, h = y.left;
                d -= I.offset;
                var m = Z && Z.useTextareaForIME || g.isMobile ? this.lineHeight : 1;
                if (d < 0 || d > I.height - m) {
                  S.translate(this.textarea, 0, 0);
                  return;
                }
                var x = 1, $ = this.$size.height - m;
                if (!Z)
                  d += this.lineHeight;
                else if (Z.useTextareaForIME) {
                  var L = this.textarea.value;
                  x = this.characterWidth * this.session.$getStringScreenWidth(L)[0];
                } else
                  d += this.lineHeight + 2;
                h -= this.scrollLeft, h > this.$size.scrollerWidth - x && (h = this.$size.scrollerWidth - x), h += this.gutterWidth + this.margin.left, S.setStyle(k, "height", m + "px"), S.setStyle(k, "width", x + "px"), S.translate(this.textarea, Math.min(h, this.$size.scrollerWidth - x), Math.min(d, $));
              }
            }
          }, W.prototype.getFirstVisibleRow = function() {
            return this.layerConfig.firstRow;
          }, W.prototype.getFirstFullyVisibleRow = function() {
            return this.layerConfig.firstRow + (this.layerConfig.offset === 0 ? 0 : 1);
          }, W.prototype.getLastFullyVisibleRow = function() {
            var k = this.layerConfig, Z = k.lastRow, y = this.session.documentToScreenRow(Z, 0) * k.lineHeight;
            return y - this.session.getScrollTop() > k.height - k.lineHeight ? Z - 1 : Z;
          }, W.prototype.getLastVisibleRow = function() {
            return this.layerConfig.lastRow;
          }, W.prototype.setPadding = function(k) {
            this.$padding = k, this.$textLayer.setPadding(k), this.$cursorLayer.setPadding(k), this.$markerFront.setPadding(k), this.$markerBack.setPadding(k), this.$loop.schedule(this.CHANGE_FULL), this.$updatePrintMargin();
          }, W.prototype.setScrollMargin = function(k, Z, y, I) {
            var d = this.scrollMargin;
            d.top = k | 0, d.bottom = Z | 0, d.right = I | 0, d.left = y | 0, d.v = d.top + d.bottom, d.h = d.left + d.right, d.top && this.scrollTop <= 0 && this.session && this.session.setScrollTop(-d.top), this.updateFull();
          }, W.prototype.setMargin = function(k, Z, y, I) {
            var d = this.margin;
            d.top = k | 0, d.bottom = Z | 0, d.right = I | 0, d.left = y | 0, d.v = d.top + d.bottom, d.h = d.left + d.right, this.$updateCachedSize(!0, this.gutterWidth, this.$size.width, this.$size.height), this.updateFull();
          }, W.prototype.getHScrollBarAlwaysVisible = function() {
            return this.$hScrollBarAlwaysVisible;
          }, W.prototype.setHScrollBarAlwaysVisible = function(k) {
            this.setOption("hScrollBarAlwaysVisible", k);
          }, W.prototype.getVScrollBarAlwaysVisible = function() {
            return this.$vScrollBarAlwaysVisible;
          }, W.prototype.setVScrollBarAlwaysVisible = function(k) {
            this.setOption("vScrollBarAlwaysVisible", k);
          }, W.prototype.$updateScrollBarV = function() {
            var k = this.layerConfig.maxHeight, Z = this.$size.scrollerHeight;
            !this.$maxLines && this.$scrollPastEnd && (k -= (Z - this.lineHeight) * this.$scrollPastEnd, this.scrollTop > k - Z && (k = this.scrollTop + Z, this.scrollBarV.scrollTop = null)), this.scrollBarV.setScrollHeight(k + this.scrollMargin.v), this.scrollBarV.setScrollTop(this.scrollTop + this.scrollMargin.top);
          }, W.prototype.$updateScrollBarH = function() {
            this.scrollBarH.setScrollWidth(this.layerConfig.width + 2 * this.$padding + this.scrollMargin.h), this.scrollBarH.setScrollLeft(this.scrollLeft + this.scrollMargin.left);
          }, W.prototype.freeze = function() {
            this.$frozen = !0;
          }, W.prototype.unfreeze = function() {
            this.$frozen = !1;
          }, W.prototype.$renderChanges = function(k, Z) {
            if (this.$changes && (k |= this.$changes, this.$changes = 0), !this.session || !this.container.offsetWidth || this.$frozen || !k && !Z) {
              this.$changes |= k;
              return;
            }
            if (this.$size.$dirty)
              return this.$changes |= k, this.onResize(!0);
            this.lineHeight || this.$textLayer.checkForSizeChanges(), this._signal("beforeRender", k), this.session && this.session.$bidiHandler && this.session.$bidiHandler.updateCharacterWidths(this.$fontMetrics);
            var y = this.layerConfig;
            if (k & this.CHANGE_FULL || k & this.CHANGE_SIZE || k & this.CHANGE_TEXT || k & this.CHANGE_LINES || k & this.CHANGE_SCROLL || k & this.CHANGE_H_SCROLL) {
              if (k |= this.$computeLayerConfig() | this.$loop.clear(), y.firstRow != this.layerConfig.firstRow && y.firstRowScreen == this.layerConfig.firstRowScreen) {
                var I = this.scrollTop + (y.firstRow - Math.max(this.layerConfig.firstRow, 0)) * this.lineHeight;
                I > 0 && (this.scrollTop = I, k = k | this.CHANGE_SCROLL, k |= this.$computeLayerConfig() | this.$loop.clear());
              }
              y = this.layerConfig, this.$updateScrollBarV(), k & this.CHANGE_H_SCROLL && this.$updateScrollBarH(), S.translate(this.content, -this.scrollLeft, -y.offset);
              var d = y.width + 2 * this.$padding + "px", h = y.minHeight + "px";
              S.setStyle(this.content.style, "width", d), S.setStyle(this.content.style, "height", h);
            }
            if (k & this.CHANGE_H_SCROLL && (S.translate(this.content, -this.scrollLeft, -y.offset), this.scroller.className = this.scrollLeft <= 0 ? "ace_scroller " : "ace_scroller ace_scroll-left ", this.enableKeyboardAccessibility && (this.scroller.className += this.keyboardFocusClassName)), k & this.CHANGE_FULL) {
              this.$changedLines = null, this.$textLayer.update(y), this.$showGutter && this.$gutterLayer.update(y), this.$customScrollbar && this.$scrollDecorator.$updateDecorators(y), this.$markerBack.update(y), this.$markerFront.update(y), this.$cursorLayer.update(y), this.$moveTextAreaToCursor(), this._signal("afterRender", k);
              return;
            }
            if (k & this.CHANGE_SCROLL) {
              this.$changedLines = null, k & this.CHANGE_TEXT || k & this.CHANGE_LINES ? this.$textLayer.update(y) : this.$textLayer.scrollLines(y), this.$showGutter && (k & this.CHANGE_GUTTER || k & this.CHANGE_LINES ? this.$gutterLayer.update(y) : this.$gutterLayer.scrollLines(y)), this.$customScrollbar && this.$scrollDecorator.$updateDecorators(y), this.$markerBack.update(y), this.$markerFront.update(y), this.$cursorLayer.update(y), this.$moveTextAreaToCursor(), this._signal("afterRender", k);
              return;
            }
            k & this.CHANGE_TEXT ? (this.$changedLines = null, this.$textLayer.update(y), this.$showGutter && this.$gutterLayer.update(y), this.$customScrollbar && this.$scrollDecorator.$updateDecorators(y)) : k & this.CHANGE_LINES ? ((this.$updateLines() || k & this.CHANGE_GUTTER && this.$showGutter) && this.$gutterLayer.update(y), this.$customScrollbar && this.$scrollDecorator.$updateDecorators(y)) : k & this.CHANGE_TEXT || k & this.CHANGE_GUTTER ? (this.$showGutter && this.$gutterLayer.update(y), this.$customScrollbar && this.$scrollDecorator.$updateDecorators(y)) : k & this.CHANGE_CURSOR && (this.$highlightGutterLine && this.$gutterLayer.updateLineHighlight(y), this.$customScrollbar && this.$scrollDecorator.$updateDecorators(y)), k & this.CHANGE_CURSOR && (this.$cursorLayer.update(y), this.$moveTextAreaToCursor()), k & (this.CHANGE_MARKER | this.CHANGE_MARKER_FRONT) && this.$markerFront.update(y), k & (this.CHANGE_MARKER | this.CHANGE_MARKER_BACK) && this.$markerBack.update(y), this._signal("afterRender", k);
          }, W.prototype.$autosize = function() {
            var k = this.session.getScreenLength() * this.lineHeight, Z = this.$maxLines * this.lineHeight, y = Math.min(Z, Math.max((this.$minLines || 1) * this.lineHeight, k)) + this.scrollMargin.v + (this.$extraHeight || 0);
            this.$horizScroll && (y += this.scrollBarH.getHeight()), this.$maxPixelHeight && y > this.$maxPixelHeight && (y = this.$maxPixelHeight);
            var I = y <= 2 * this.lineHeight, d = !I && k > Z;
            if (y != this.desiredHeight || this.$size.height != this.desiredHeight || d != this.$vScroll) {
              d != this.$vScroll && (this.$vScroll = d, this.scrollBarV.setVisible(d));
              var h = this.container.clientWidth;
              this.container.style.height = y + "px", this.$updateCachedSize(!0, this.$gutterWidth, h, y), this.desiredHeight = y, this._signal("autosize");
            }
          }, W.prototype.$computeLayerConfig = function() {
            var k = this.session, Z = this.$size, y = Z.height <= 2 * this.lineHeight, I = this.session.getScreenLength(), d = I * this.lineHeight, h = this.$getLongestLine(), m = !y && (this.$hScrollBarAlwaysVisible || Z.scrollerWidth - h - 2 * this.$padding < 0), x = this.$horizScroll !== m;
            x && (this.$horizScroll = m, this.scrollBarH.setVisible(m));
            var $ = this.$vScroll;
            this.$maxLines && this.lineHeight > 1 && (this.$autosize(), y = Z.height <= 2 * this.lineHeight);
            var L = Z.scrollerHeight + this.lineHeight, B = !this.$maxLines && this.$scrollPastEnd ? (Z.scrollerHeight - this.lineHeight) * this.$scrollPastEnd : 0;
            d += B;
            var T = this.scrollMargin;
            this.session.setScrollTop(Math.max(-T.top, Math.min(this.scrollTop, d - Z.scrollerHeight + T.bottom))), this.session.setScrollLeft(Math.max(-T.left, Math.min(this.scrollLeft, h + 2 * this.$padding - Z.scrollerWidth + T.right)));
            var V = !y && (this.$vScrollBarAlwaysVisible || Z.scrollerHeight - d + B < 0 || this.scrollTop > T.top), _ = $ !== V;
            _ && (this.$vScroll = V, this.scrollBarV.setVisible(V));
            var O = this.scrollTop % this.lineHeight, E = Math.ceil(L / this.lineHeight) - 1, F = Math.max(0, Math.round((this.scrollTop - O) / this.lineHeight)), D = F + E, Y, P, X = this.lineHeight;
            F = k.screenToDocumentRow(F, 0);
            var Q = k.getFoldLine(F);
            Q && (F = Q.start.row), Y = k.documentToScreenRow(F, 0), P = k.getRowLength(F) * X, D = Math.min(k.screenToDocumentRow(D, 0), k.getLength() - 1), L = Z.scrollerHeight + k.getRowLength(D) * X + P, O = this.scrollTop - Y * X;
            var ie = 0;
            return (this.layerConfig.width != h || x) && (ie = this.CHANGE_H_SCROLL), (x || _) && (ie |= this.$updateCachedSize(!0, this.gutterWidth, Z.width, Z.height), this._signal("scrollbarVisibilityChanged"), _ && (h = this.$getLongestLine())), this.layerConfig = {
              width: h,
              padding: this.$padding,
              firstRow: F,
              firstRowScreen: Y,
              lastRow: D,
              lineHeight: X,
              characterWidth: this.characterWidth,
              minHeight: L,
              maxHeight: d,
              offset: O,
              gutterOffset: X ? Math.max(0, Math.ceil((O + Z.height - Z.scrollerHeight) / X)) : 0,
              height: this.$size.scrollerHeight
            }, this.session.$bidiHandler && this.session.$bidiHandler.setContentWidth(h - this.$padding), ie;
          }, W.prototype.$updateLines = function() {
            if (this.$changedLines) {
              var k = this.$changedLines.firstRow, Z = this.$changedLines.lastRow;
              this.$changedLines = null;
              var y = this.layerConfig;
              if (!(k > y.lastRow + 1) && !(Z < y.firstRow)) {
                if (Z === 1 / 0) {
                  this.$showGutter && this.$gutterLayer.update(y), this.$textLayer.update(y);
                  return;
                }
                return this.$textLayer.updateLines(y, k, Z), !0;
              }
            }
          }, W.prototype.$getLongestLine = function() {
            var k = this.session.getScreenWidth();
            return this.showInvisibles && !this.session.$useWrapMode && (k += 1), this.$textLayer && k > this.$textLayer.MAX_LINE_LENGTH && (k = this.$textLayer.MAX_LINE_LENGTH + 30), Math.max(this.$size.scrollerWidth - 2 * this.$padding, Math.round(k * this.characterWidth));
          }, W.prototype.updateFrontMarkers = function() {
            this.$markerFront.setMarkers(this.session.getMarkers(!0)), this.$loop.schedule(this.CHANGE_MARKER_FRONT);
          }, W.prototype.updateBackMarkers = function() {
            this.$markerBack.setMarkers(this.session.getMarkers()), this.$loop.schedule(this.CHANGE_MARKER_BACK);
          }, W.prototype.addGutterDecoration = function(k, Z) {
            this.$gutterLayer.addGutterDecoration(k, Z);
          }, W.prototype.removeGutterDecoration = function(k, Z) {
            this.$gutterLayer.removeGutterDecoration(k, Z);
          }, W.prototype.updateBreakpoints = function(k) {
            this._rows = k, this.$loop.schedule(this.CHANGE_GUTTER);
          }, W.prototype.setAnnotations = function(k) {
            this.$gutterLayer.setAnnotations(k), this.$loop.schedule(this.CHANGE_GUTTER);
          }, W.prototype.updateCursor = function() {
            this.$loop.schedule(this.CHANGE_CURSOR);
          }, W.prototype.hideCursor = function() {
            this.$cursorLayer.hideCursor();
          }, W.prototype.showCursor = function() {
            this.$cursorLayer.showCursor();
          }, W.prototype.scrollSelectionIntoView = function(k, Z, y) {
            this.scrollCursorIntoView(k, y), this.scrollCursorIntoView(Z, y);
          }, W.prototype.scrollCursorIntoView = function(k, Z, y) {
            if (this.$size.scrollerHeight !== 0) {
              var I = this.$cursorLayer.getPixelPosition(k), d = I.left, h = I.top, m = y && y.top || 0, x = y && y.bottom || 0;
              this.$scrollAnimation && (this.$stopAnimation = !0);
              var $ = this.$scrollAnimation ? this.session.getScrollTop() : this.scrollTop;
              $ + m > h ? (Z && $ + m > h + this.lineHeight && (h -= Z * this.$size.scrollerHeight), h === 0 && (h = -this.scrollMargin.top), this.session.setScrollTop(h)) : $ + this.$size.scrollerHeight - x < h + this.lineHeight && (Z && $ + this.$size.scrollerHeight - x < h - this.lineHeight && (h += Z * this.$size.scrollerHeight), this.session.setScrollTop(h + this.lineHeight + x - this.$size.scrollerHeight));
              var L = this.scrollLeft, B = 2 * this.layerConfig.characterWidth;
              d - B < L ? (d -= B, d < this.$padding + B && (d = -this.scrollMargin.left), this.session.setScrollLeft(d)) : (d += B, L + this.$size.scrollerWidth < d + this.characterWidth ? this.session.setScrollLeft(Math.round(d + this.characterWidth - this.$size.scrollerWidth)) : L <= this.$padding && d - L < this.characterWidth && this.session.setScrollLeft(0));
            }
          }, W.prototype.getScrollTop = function() {
            return this.session.getScrollTop();
          }, W.prototype.getScrollLeft = function() {
            return this.session.getScrollLeft();
          }, W.prototype.getScrollTopRow = function() {
            return this.scrollTop / this.lineHeight;
          }, W.prototype.getScrollBottomRow = function() {
            return Math.max(0, Math.floor((this.scrollTop + this.$size.scrollerHeight) / this.lineHeight) - 1);
          }, W.prototype.scrollToRow = function(k) {
            this.session.setScrollTop(k * this.lineHeight);
          }, W.prototype.alignCursor = function(k, Z) {
            typeof k == "number" && (k = { row: k, column: 0 });
            var y = this.$cursorLayer.getPixelPosition(k), I = this.$size.scrollerHeight - this.lineHeight, d = y.top - I * (Z || 0);
            return this.session.setScrollTop(d), d;
          }, W.prototype.$calcSteps = function(k, Z) {
            var y = 0, I = this.STEPS, d = [], h = function(m, x, $) {
              return $ * (Math.pow(m - 1, 3) + 1) + x;
            };
            for (y = 0; y < I; ++y)
              d.push(h(y / this.STEPS, k, Z - k));
            return d;
          }, W.prototype.scrollToLine = function(k, Z, y, I) {
            var d = this.$cursorLayer.getPixelPosition({ row: k, column: 0 }), h = d.top;
            Z && (h -= this.$size.scrollerHeight / 2);
            var m = this.scrollTop;
            this.session.setScrollTop(h), y !== !1 && this.animateScrolling(m, I);
          }, W.prototype.animateScrolling = function(k, Z) {
            var y = this.scrollTop;
            if (!this.$animatedScroll)
              return;
            var I = this;
            if (k == y)
              return;
            if (this.$scrollAnimation) {
              var d = this.$scrollAnimation.steps;
              if (d.length && (k = d[0], k == y))
                return;
            }
            var h = I.$calcSteps(k, y);
            this.$scrollAnimation = { from: k, to: y, steps: h }, clearInterval(this.$timer), I.session.setScrollTop(h.shift()), I.session.$scrollTop = y;
            function m() {
              I.$timer = clearInterval(I.$timer), I.$scrollAnimation = null, I.$stopAnimation = !1, Z && Z();
            }
            this.$timer = setInterval(function() {
              if (I.$stopAnimation) {
                m();
                return;
              }
              if (!I.session)
                return clearInterval(I.$timer);
              h.length ? (I.session.setScrollTop(h.shift()), I.session.$scrollTop = y) : y != null ? (I.session.$scrollTop = -1, I.session.setScrollTop(y), y = null) : m();
            }, 10);
          }, W.prototype.scrollToY = function(k) {
            this.scrollTop !== k && (this.$loop.schedule(this.CHANGE_SCROLL), this.scrollTop = k);
          }, W.prototype.scrollToX = function(k) {
            this.scrollLeft !== k && (this.scrollLeft = k), this.$loop.schedule(this.CHANGE_H_SCROLL);
          }, W.prototype.scrollTo = function(k, Z) {
            this.session.setScrollTop(Z), this.session.setScrollLeft(k);
          }, W.prototype.scrollBy = function(k, Z) {
            Z && this.session.setScrollTop(this.session.getScrollTop() + Z), k && this.session.setScrollLeft(this.session.getScrollLeft() + k);
          }, W.prototype.isScrollableBy = function(k, Z) {
            if (Z < 0 && this.session.getScrollTop() >= 1 - this.scrollMargin.top || Z > 0 && this.session.getScrollTop() + this.$size.scrollerHeight - this.layerConfig.maxHeight < -1 + this.scrollMargin.bottom || k < 0 && this.session.getScrollLeft() >= 1 - this.scrollMargin.left || k > 0 && this.session.getScrollLeft() + this.$size.scrollerWidth - this.layerConfig.width < -1 + this.scrollMargin.right)
              return !0;
          }, W.prototype.pixelToScreenCoordinates = function(k, Z) {
            var y;
            if (this.$hasCssTransforms) {
              y = { top: 0, left: 0 };
              var I = this.$fontMetrics.transformCoordinates([k, Z]);
              k = I[1] - this.gutterWidth - this.margin.left, Z = I[0];
            } else
              y = this.scroller.getBoundingClientRect();
            var d = k + this.scrollLeft - y.left - this.$padding, h = d / this.characterWidth, m = Math.floor((Z + this.scrollTop - y.top) / this.lineHeight), x = this.$blockCursor ? Math.floor(h) : Math.round(h);
            return { row: m, column: x, side: h - x > 0 ? 1 : -1, offsetX: d };
          }, W.prototype.screenToTextCoordinates = function(k, Z) {
            var y;
            if (this.$hasCssTransforms) {
              y = { top: 0, left: 0 };
              var I = this.$fontMetrics.transformCoordinates([k, Z]);
              k = I[1] - this.gutterWidth - this.margin.left, Z = I[0];
            } else
              y = this.scroller.getBoundingClientRect();
            var d = k + this.scrollLeft - y.left - this.$padding, h = d / this.characterWidth, m = this.$blockCursor ? Math.floor(h) : Math.round(h), x = Math.floor((Z + this.scrollTop - y.top) / this.lineHeight);
            return this.session.screenToDocumentPosition(x, Math.max(m, 0), d);
          }, W.prototype.textToScreenCoordinates = function(k, Z) {
            var y = this.scroller.getBoundingClientRect(), I = this.session.documentToScreenPosition(k, Z), d = this.$padding + (this.session.$bidiHandler.isBidiRow(I.row, k) ? this.session.$bidiHandler.getPosLeft(I.column) : Math.round(I.column * this.characterWidth)), h = I.row * this.lineHeight;
            return {
              pageX: y.left + d - this.scrollLeft,
              pageY: y.top + h - this.scrollTop
            };
          }, W.prototype.visualizeFocus = function() {
            S.addCssClass(this.container, "ace_focus");
          }, W.prototype.visualizeBlur = function() {
            S.removeCssClass(this.container, "ace_focus");
          }, W.prototype.showComposition = function(k) {
            this.$composition = k, k.cssText || (k.cssText = this.textarea.style.cssText), k.useTextareaForIME == null && (k.useTextareaForIME = this.$useTextareaForIME), this.$useTextareaForIME ? (S.addCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = "", this.$moveTextAreaToCursor(), this.$cursorLayer.element.style.display = "none") : k.markerId = this.session.addMarker(k.markerRange, "ace_composition_marker", "text");
          }, W.prototype.setCompositionText = function(k) {
            var Z = this.session.selection.cursor;
            this.addToken(k, "composition_placeholder", Z.row, Z.column), this.$moveTextAreaToCursor();
          }, W.prototype.hideComposition = function() {
            if (this.$composition) {
              this.$composition.markerId && this.session.removeMarker(this.$composition.markerId), S.removeCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = this.$composition.cssText;
              var k = this.session.selection.cursor;
              this.removeExtraToken(k.row, k.column), this.$composition = null, this.$cursorLayer.element.style.display = "";
            }
          }, W.prototype.setGhostText = function(k, Z) {
            var y = this.session.selection.cursor, I = Z || { row: y.row, column: y.column };
            this.removeGhostText();
            var d = this.$calculateWrappedTextChunks(k, I);
            this.addToken(d[0].text, "ghost_text", I.row, I.column), this.$ghostText = {
              text: k,
              position: {
                row: I.row,
                column: I.column
              }
            };
            var h = S.createElement("div");
            if (d.length > 1) {
              var m = this.hideTokensAfterPosition(I.row, I.column), x;
              d.slice(1).forEach(function(_) {
                var O = S.createElement("div"), E = S.createElement("span");
                E.className = "ace_ghost_text", _.wrapped && (O.className = "ghost_text_line_wrapped"), _.text.length === 0 && (_.text = " "), E.appendChild(S.createTextNode(_.text)), O.appendChild(E), h.appendChild(O), x = O;
              }), m.forEach(function(_) {
                var O = S.createElement("span");
                v(_.type) || (O.className = "ace_" + _.type.replace(/\./g, " ace_")), O.appendChild(S.createTextNode(_.value)), x.appendChild(O);
              }), this.$ghostTextWidget = {
                el: h,
                row: I.row,
                column: I.column,
                className: "ace_ghost_text_container"
              }, this.session.widgetManager.addLineWidget(this.$ghostTextWidget);
              var $ = this.$cursorLayer.getPixelPosition(I, !0), L = this.container, B = L.getBoundingClientRect().height, T = d.length * this.lineHeight, V = T < B - $.top;
              if (V)
                return;
              T < B ? this.scrollBy(0, (d.length - 1) * this.lineHeight) : this.scrollToRow(I.row);
            }
          }, W.prototype.$calculateWrappedTextChunks = function(k, Z) {
            var y = this.$size.scrollerWidth - this.$padding * 2, I = Math.floor(y / this.characterWidth) - 2;
            I = I <= 0 ? 60 : I;
            for (var d = k.split(/\r?\n/), h = [], m = 0; m < d.length; m++) {
              var x = this.session.$getDisplayTokens(d[m], Z.column), $ = this.session.$computeWrapSplits(x, I, this.session.$tabSize);
              if ($.length > 0) {
                var L = 0;
                $.push(d[m].length);
                for (var B = 0; B < $.length; B++) {
                  var T = d[m].slice(L, $[B]);
                  h.push({ text: T, wrapped: !0 }), L = $[B];
                }
              } else
                h.push({ text: d[m], wrapped: !1 });
            }
            return h;
          }, W.prototype.removeGhostText = function() {
            if (this.$ghostText) {
              var k = this.$ghostText.position;
              this.removeExtraToken(k.row, k.column), this.$ghostTextWidget && (this.session.widgetManager.removeLineWidget(this.$ghostTextWidget), this.$ghostTextWidget = null), this.$ghostText = null;
            }
          }, W.prototype.addToken = function(k, Z, y, I) {
            var d = this.session;
            d.bgTokenizer.lines[y] = null;
            var h = { type: Z, value: k }, m = d.getTokens(y);
            if (I == null || !m.length)
              m.push(h);
            else
              for (var x = 0, $ = 0; $ < m.length; $++) {
                var L = m[$];
                if (x += L.value.length, I <= x) {
                  var B = L.value.length - (x - I), T = L.value.slice(0, B), V = L.value.slice(B);
                  m.splice($, 1, { type: L.type, value: T }, h, { type: L.type, value: V });
                  break;
                }
              }
            this.updateLines(y, y);
          }, W.prototype.hideTokensAfterPosition = function(k, Z) {
            for (var y = this.session.getTokens(k), I = 0, d = !1, h = [], m = 0; m < y.length; m++) {
              var x = y[m];
              if (I += x.value.length, x.type !== "ghost_text") {
                if (d) {
                  h.push({ type: x.type, value: x.value }), x.type = "hidden_token";
                  continue;
                }
                I === Z && (d = !0);
              }
            }
            return this.updateLines(k, k), h;
          }, W.prototype.removeExtraToken = function(k, Z) {
            this.session.bgTokenizer.lines[k] = null, this.updateLines(k, k);
          }, W.prototype.setTheme = function(k, Z) {
            var y = this;
            if (this.$themeId = k, y._dispatchEvent("themeChange", { theme: k }), !k || typeof k == "string") {
              var I = k || this.$options.theme.initialValue;
              a.loadModule(["theme", I], d);
            } else
              d(k);
            function d(h) {
              if (y.$themeId != k)
                return Z && Z();
              if (!h || !h.cssClass)
                throw new Error("couldn't load module " + k + " or it didn't call define");
              h.$id && (y.$themeId = h.$id), S.importCssString(h.cssText, h.cssClass, y.container), y.theme && S.removeCssClass(y.container, y.theme.cssClass);
              var m = "padding" in h ? h.padding : "padding" in (y.theme || {}) ? 4 : y.$padding;
              y.$padding && m != y.$padding && y.setPadding(m), y.$theme = h.cssClass, y.theme = h, S.addCssClass(y.container, h.cssClass), S.setCssClass(y.container, "ace_dark", h.isDark), y.$size && (y.$size.width = 0, y.$updateSizeAsync()), y._dispatchEvent("themeLoaded", { theme: h }), Z && Z(), g.isSafari && y.scroller && (y.scroller.style.background = "red", y.scroller.style.background = "");
            }
          }, W.prototype.getTheme = function() {
            return this.$themeId;
          }, W.prototype.setStyle = function(k, Z) {
            S.setCssClass(this.container, k, Z !== !1);
          }, W.prototype.unsetStyle = function(k) {
            S.removeCssClass(this.container, k);
          }, W.prototype.setCursorStyle = function(k) {
            S.setStyle(this.scroller.style, "cursor", k);
          }, W.prototype.setMouseCursor = function(k) {
            S.setStyle(this.scroller.style, "cursor", k);
          }, W.prototype.attachToShadowRoot = function() {
            S.importCssString(p, "ace_editor.css", this.container);
          }, W.prototype.destroy = function() {
            this.freeze(), this.$fontMetrics.destroy(), this.$cursorLayer.destroy(), this.removeAllListeners(), this.container.textContent = "", this.setOption("useResizeObserver", !1);
          }, W.prototype.$updateCustomScrollbar = function(k) {
            var Z = this;
            this.$horizScroll = this.$vScroll = null, this.scrollBarV.element.remove(), this.scrollBarH.element.remove(), this.$scrollDecorator && delete this.$scrollDecorator, k === !0 ? (this.scrollBarV = new s(this.container, this), this.scrollBarH = new o(this.container, this), this.scrollBarV.setHeight(this.$size.scrollerHeight), this.scrollBarH.setWidth(this.$size.scrollerWidth), this.scrollBarV.addEventListener("scroll", function(y) {
              Z.$scrollAnimation || Z.session.setScrollTop(y.data - Z.scrollMargin.top);
            }), this.scrollBarH.addEventListener("scroll", function(y) {
              Z.$scrollAnimation || Z.session.setScrollLeft(y.data - Z.scrollMargin.left);
            }), this.$scrollDecorator = new f(this.scrollBarV, this), this.$scrollDecorator.$updateDecorators()) : (this.scrollBarV = new e(this.container, this), this.scrollBarH = new t(this.container, this), this.scrollBarV.addEventListener("scroll", function(y) {
              Z.$scrollAnimation || Z.session.setScrollTop(y.data - Z.scrollMargin.top);
            }), this.scrollBarH.addEventListener("scroll", function(y) {
              Z.$scrollAnimation || Z.session.setScrollLeft(y.data - Z.scrollMargin.left);
            }));
          }, W.prototype.$addResizeObserver = function() {
            if (!(!window.ResizeObserver || this.$resizeObserver)) {
              var k = this;
              this.$resizeTimer = A.delayedCall(function() {
                k.destroyed || k.onResize();
              }, 50), this.$resizeObserver = new window.ResizeObserver(function(Z) {
                var y = Z[0].contentRect.width, I = Z[0].contentRect.height;
                Math.abs(k.$size.width - y) > 1 || Math.abs(k.$size.height - I) > 1 ? k.$resizeTimer.delay() : k.$resizeTimer.cancel();
              }), this.$resizeObserver.observe(this.container);
            }
          }, W;
        }()
      );
      M.prototype.CHANGE_CURSOR = 1, M.prototype.CHANGE_MARKER = 2, M.prototype.CHANGE_GUTTER = 4, M.prototype.CHANGE_SCROLL = 8, M.prototype.CHANGE_LINES = 16, M.prototype.CHANGE_TEXT = 32, M.prototype.CHANGE_SIZE = 64, M.prototype.CHANGE_MARKER_BACK = 128, M.prototype.CHANGE_MARKER_FRONT = 256, M.prototype.CHANGE_FULL = 512, M.prototype.CHANGE_H_SCROLL = 1024, M.prototype.$changes = 0, M.prototype.$padding = null, M.prototype.$frozen = !1, M.prototype.STEPS = 8, b.implement(M.prototype, C), a.defineOptions(M.prototype, "renderer", {
        useResizeObserver: {
          set: function(W) {
            !W && this.$resizeObserver ? (this.$resizeObserver.disconnect(), this.$resizeTimer.cancel(), this.$resizeTimer = this.$resizeObserver = null) : W && !this.$resizeObserver && this.$addResizeObserver();
          }
        },
        animatedScroll: { initialValue: !1 },
        showInvisibles: {
          set: function(W) {
            this.$textLayer.setShowInvisibles(W) && this.$loop.schedule(this.CHANGE_TEXT);
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
          set: function(W) {
            typeof W == "number" && (this.$printMarginColumn = W), this.$showPrintMargin = !!W, this.$updatePrintMargin();
          },
          get: function() {
            return this.$showPrintMargin && this.$printMarginColumn;
          }
        },
        showGutter: {
          set: function(W) {
            this.$gutter.style.display = W ? "block" : "none", this.$loop.schedule(this.CHANGE_FULL), this.onGutterResize();
          },
          initialValue: !0
        },
        useSvgGutterIcons: {
          set: function(W) {
            this.$gutterLayer.$useSvgGutterIcons = W;
          },
          initialValue: !1
        },
        showFoldedAnnotations: {
          set: function(W) {
            this.$gutterLayer.$showFoldedAnnotations = W;
          },
          initialValue: !1
        },
        fadeFoldWidgets: {
          set: function(W) {
            S.setCssClass(this.$gutter, "ace_fade-fold-widgets", W);
          },
          initialValue: !1
        },
        showFoldWidgets: {
          set: function(W) {
            this.$gutterLayer.setShowFoldWidgets(W), this.$loop.schedule(this.CHANGE_GUTTER);
          },
          initialValue: !0
        },
        displayIndentGuides: {
          set: function(W) {
            this.$textLayer.setDisplayIndentGuides(W) && this.$loop.schedule(this.CHANGE_TEXT);
          },
          initialValue: !0
        },
        highlightIndentGuides: {
          set: function(W) {
            this.$textLayer.setHighlightIndentGuides(W) == !0 ? this.$textLayer.$highlightIndentGuide() : this.$textLayer.$clearActiveIndentGuide(this.$textLayer.$lines.cells);
          },
          initialValue: !0
        },
        highlightGutterLine: {
          set: function(W) {
            this.$gutterLayer.setHighlightGutterLine(W), this.$loop.schedule(this.CHANGE_GUTTER);
          },
          initialValue: !0
        },
        hScrollBarAlwaysVisible: {
          set: function(W) {
            (!this.$hScrollBarAlwaysVisible || !this.$horizScroll) && this.$loop.schedule(this.CHANGE_SCROLL);
          },
          initialValue: !1
        },
        vScrollBarAlwaysVisible: {
          set: function(W) {
            (!this.$vScrollBarAlwaysVisible || !this.$vScroll) && this.$loop.schedule(this.CHANGE_SCROLL);
          },
          initialValue: !1
        },
        fontSize: {
          set: function(W) {
            typeof W == "number" && (W = W + "px"), this.container.style.fontSize = W, this.updateFontSize();
          },
          initialValue: 12
        },
        fontFamily: {
          set: function(W) {
            this.container.style.fontFamily = W, this.updateFontSize();
          }
        },
        maxLines: {
          set: function(W) {
            this.updateFull();
          }
        },
        minLines: {
          set: function(W) {
            this.$minLines < 562949953421311 || (this.$minLines = 0), this.updateFull();
          }
        },
        maxPixelHeight: {
          set: function(W) {
            this.updateFull();
          },
          initialValue: 0
        },
        scrollPastEnd: {
          set: function(W) {
            W = +W || 0, this.$scrollPastEnd != W && (this.$scrollPastEnd = W, this.$loop.schedule(this.CHANGE_SCROLL));
          },
          initialValue: 0,
          handlesSet: !0
        },
        fixedWidthGutter: {
          set: function(W) {
            this.$gutterLayer.$fixedWidth = !!W, this.$loop.schedule(this.CHANGE_GUTTER);
          }
        },
        customScrollbar: {
          set: function(W) {
            this.$updateCustomScrollbar(W);
          },
          initialValue: !1
        },
        theme: {
          set: function(W) {
            this.setTheme(W);
          },
          get: function() {
            return this.$themeId || this.theme;
          },
          initialValue: "./theme/textmate",
          handlesSet: !0
        },
        hasCssTransforms: {},
        useTextareaForIME: {
          initialValue: !g.isMobile && !g.isIE
        }
      }), R.VirtualRenderer = M;
    }), ace.define("ace/worker/worker_client", ["require", "exports", "module", "ace/lib/oop", "ace/lib/net", "ace/lib/event_emitter", "ace/config"], function(w, R, N) {
      var b = w("../lib/oop"), S = w("../lib/net"), A = w("../lib/event_emitter").EventEmitter, a = w("../config");
      function c(t) {
        var e = "importScripts('" + S.qualifyURL(t) + "');";
        try {
          return new Blob([e], { type: "application/javascript" });
        } catch {
          var o = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder, s = new o();
          return s.append(e), s.getBlob("application/javascript");
        }
      }
      function n(t) {
        if (typeof Worker > "u")
          return { postMessage: function() {
          }, terminate: function() {
          } };
        if (a.get("loadWorkerFromBlob")) {
          var e = c(t), o = window.URL || window.webkitURL, s = o.createObjectURL(e);
          return new Worker(s);
        }
        return new Worker(t);
      }
      var r = function(t) {
        t.postMessage || (t = this.$createWorkerFromOldConfig.apply(this, arguments)), this.$worker = t, this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this), this.changeListener = this.changeListener.bind(this), this.onMessage = this.onMessage.bind(this), this.callbackId = 1, this.callbacks = {}, this.$worker.onmessage = this.onMessage;
      };
      (function() {
        b.implement(this, A), this.$createWorkerFromOldConfig = function(t, e, o, s, l) {
          if (w.nameToUrl && !w.toUrl && (w.toUrl = w.nameToUrl), a.get("packaged") || !w.toUrl)
            s = s || a.moduleUrl(e, "worker");
          else {
            var u = this.$normalizePath;
            s = s || u(w.toUrl("ace/worker/worker.js", null, "_"));
            var C = {};
            t.forEach(function(p) {
              C[p] = u(w.toUrl(p, null, "_").replace(/(\.js)?(\?.*)?$/, ""));
            });
          }
          return this.$worker = n(s), l && this.send("importScripts", l), this.$worker.postMessage({
            init: !0,
            tlns: C,
            module: e,
            classname: o
          }), this.$worker;
        }, this.onMessage = function(t) {
          var e = t.data;
          switch (e.type) {
            case "event":
              this._signal(e.name, { data: e.data });
              break;
            case "call":
              var o = this.callbacks[e.id];
              o && (o(e.data), delete this.callbacks[e.id]);
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
          return S.qualifyURL(t);
        }, this.terminate = function() {
          this._signal("terminate", {}), this.deltaQueue = null, this.$worker.terminate(), this.$worker.onerror = function(t) {
            t.preventDefault();
          }, this.$worker = null, this.$doc && this.$doc.off("change", this.changeListener), this.$doc = null;
        }, this.send = function(t, e) {
          this.$worker.postMessage({ command: t, args: e });
        }, this.call = function(t, e, o) {
          if (o) {
            var s = this.callbackId++;
            this.callbacks[s] = o, e.push(s);
          }
          this.send(t, e);
        }, this.emit = function(t, e) {
          try {
            e.data && e.data.err && (e.data.err = { message: e.data.err.message, stack: e.data.err.stack, code: e.data.err.code }), this.$worker && this.$worker.postMessage({ event: t, data: { data: e.data } });
          } catch (o) {
            console.error(o.stack);
          }
        }, this.attachToDocument = function(t) {
          this.$doc && this.terminate(), this.$doc = t, this.call("setValue", [t.getValue()]), t.on("change", this.changeListener, !0);
        }, this.changeListener = function(t) {
          this.deltaQueue || (this.deltaQueue = [], setTimeout(this.$sendDeltaQueue, 0)), t.action == "insert" ? this.deltaQueue.push(t.start, t.lines) : this.deltaQueue.push(t.start, t.end);
        }, this.$sendDeltaQueue = function() {
          var t = this.deltaQueue;
          t && (this.deltaQueue = null, t.length > 50 && t.length > this.$doc.getLength() >> 1 ? this.call("setValue", [this.$doc.getValue()]) : this.emit("change", { data: t }));
        };
      }).call(r.prototype);
      var i = function(t, e, o) {
        var s = null, l = !1, u = Object.create(A), C = [], p = new r({
          messageBuffer: C,
          terminate: function() {
          },
          postMessage: function(g) {
            C.push(g), s && (l ? setTimeout(f) : f());
          }
        });
        p.setEmitSync = function(g) {
          l = g;
        };
        var f = function() {
          var g = C.shift();
          g.command ? s[g.command].apply(s, g.args) : g.event && u._signal(g.event, g.data);
        };
        return u.postMessage = function(g) {
          p.onMessage({ data: g });
        }, u.callback = function(g, v) {
          this.postMessage({ type: "call", id: v, data: g });
        }, u.emit = function(g, v) {
          this.postMessage({ type: "event", name: g, data: v });
        }, a.loadModule(["worker", e], function(g) {
          for (s = new g[o](u); C.length; )
            f();
        }), p;
      };
      R.UIWorkerClient = i, R.WorkerClient = r, R.createWorker = n;
    }), ace.define("ace/placeholder", ["require", "exports", "module", "ace/range", "ace/lib/event_emitter", "ace/lib/oop"], function(w, R, N) {
      var b = w("./range").Range, S = w("./lib/event_emitter").EventEmitter, A = w("./lib/oop"), a = (
        /** @class */
        function() {
          function c(n, r, i, t, e, o) {
            var s = this;
            this.length = r, this.session = n, this.doc = n.getDocument(), this.mainClass = e, this.othersClass = o, this.$onUpdate = this.onUpdate.bind(this), this.doc.on("change", this.$onUpdate, !0), this.$others = t, this.$onCursorChange = function() {
              setTimeout(function() {
                s.onCursorChange();
              });
            }, this.$pos = i;
            var l = n.getUndoManager().$undoStack || n.getUndoManager().$undostack || { length: -1 };
            this.$undoStackDepth = l.length, this.setup(), n.selection.on("changeCursor", this.$onCursorChange);
          }
          return c.prototype.setup = function() {
            var n = this, r = this.doc, i = this.session;
            this.selectionBefore = i.selection.toJSON(), i.selection.inMultiSelectMode && i.selection.toSingleRange(), this.pos = r.createAnchor(this.$pos.row, this.$pos.column);
            var t = this.pos;
            t.$insertRight = !0, t.detach(), t.markerId = i.addMarker(new b(t.row, t.column, t.row, t.column + this.length), this.mainClass, null, !1), this.others = [], this.$others.forEach(function(e) {
              var o = r.createAnchor(e.row, e.column);
              o.$insertRight = !0, o.detach(), n.others.push(o);
            }), i.setUndoSelect(!1);
          }, c.prototype.showOtherMarkers = function() {
            if (!this.othersActive) {
              var n = this.session, r = this;
              this.othersActive = !0, this.others.forEach(function(i) {
                i.markerId = n.addMarker(new b(i.row, i.column, i.row, i.column + r.length), r.othersClass, null, !1);
              });
            }
          }, c.prototype.hideOtherMarkers = function() {
            if (this.othersActive) {
              this.othersActive = !1;
              for (var n = 0; n < this.others.length; n++)
                this.session.removeMarker(this.others[n].markerId);
            }
          }, c.prototype.onUpdate = function(n) {
            if (this.$updating)
              return this.updateAnchors(n);
            var r = n;
            if (r.start.row === r.end.row && r.start.row === this.pos.row) {
              this.$updating = !0;
              var i = n.action === "insert" ? r.end.column - r.start.column : r.start.column - r.end.column, t = r.start.column >= this.pos.column && r.start.column <= this.pos.column + this.length + 1, e = r.start.column - this.pos.column;
              if (this.updateAnchors(n), t && (this.length += i), t && !this.session.$fromUndo) {
                if (n.action === "insert")
                  for (var o = this.others.length - 1; o >= 0; o--) {
                    var s = this.others[o], l = { row: s.row, column: s.column + e };
                    this.doc.insertMergedLines(l, n.lines);
                  }
                else if (n.action === "remove")
                  for (var o = this.others.length - 1; o >= 0; o--) {
                    var s = this.others[o], l = { row: s.row, column: s.column + e };
                    this.doc.remove(new b(l.row, l.column, l.row, l.column - i));
                  }
              }
              this.$updating = !1, this.updateMarkers();
            }
          }, c.prototype.updateAnchors = function(n) {
            this.pos.onChange(n);
            for (var r = this.others.length; r--; )
              this.others[r].onChange(n);
            this.updateMarkers();
          }, c.prototype.updateMarkers = function() {
            if (!this.$updating) {
              var n = this, r = this.session, i = function(e, o) {
                r.removeMarker(e.markerId), e.markerId = r.addMarker(new b(e.row, e.column, e.row, e.column + n.length), o, null, !1);
              };
              i(this.pos, this.mainClass);
              for (var t = this.others.length; t--; )
                i(this.others[t], this.othersClass);
            }
          }, c.prototype.onCursorChange = function(n) {
            if (!(this.$updating || !this.session)) {
              var r = this.session.selection.getCursor();
              r.row === this.pos.row && r.column >= this.pos.column && r.column <= this.pos.column + this.length ? (this.showOtherMarkers(), this._emit("cursorEnter", n)) : (this.hideOtherMarkers(), this._emit("cursorLeave", n));
            }
          }, c.prototype.detach = function() {
            this.session.removeMarker(this.pos && this.pos.markerId), this.hideOtherMarkers(), this.doc.off("change", this.$onUpdate), this.session.selection.off("changeCursor", this.$onCursorChange), this.session.setUndoSelect(!0), this.session = null;
          }, c.prototype.cancel = function() {
            if (this.$undoStackDepth !== -1) {
              for (var n = this.session.getUndoManager(), r = (n.$undoStack || n.$undostack).length - this.$undoStackDepth, i = 0; i < r; i++)
                n.undo(this.session, !0);
              this.selectionBefore && this.session.selection.fromJSON(this.selectionBefore);
            }
          }, c;
        }()
      );
      A.implement(a.prototype, S), R.PlaceHolder = a;
    }), ace.define("ace/mouse/multi_select_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function(w, R, N) {
      var b = w("../lib/event"), S = w("../lib/useragent");
      function A(c, n) {
        return c.row == n.row && c.column == n.column;
      }
      function a(c) {
        var n = c.domEvent, r = n.altKey, i = n.shiftKey, t = n.ctrlKey, e = c.getAccelKey(), o = c.getButton();
        if (t && S.isMac && (o = n.button), c.editor.inMultiSelectMode && o == 2) {
          c.editor.textInput.onContextMenu(c.domEvent);
          return;
        }
        if (!t && !r && !e) {
          o === 0 && c.editor.inMultiSelectMode && c.editor.exitMultiSelectMode();
          return;
        }
        if (o === 0) {
          var s = c.editor, l = s.selection, u = s.inMultiSelectMode, C = c.getDocumentPosition(), p = l.getCursor(), f = c.inSelection() || l.isEmpty() && A(C, p), g = c.x, v = c.y, M = function(T) {
            g = T.clientX, v = T.clientY;
          }, W = s.session, k = s.renderer.pixelToScreenCoordinates(g, v), Z = k, y;
          if (s.$mouseHandler.$enableJumpToDef)
            t && r || e && r ? y = i ? "block" : "add" : r && s.$blockSelectEnabled && (y = "block");
          else if (e && !r) {
            if (y = "add", !u && i)
              return;
          } else r && s.$blockSelectEnabled && (y = "block");
          if (y && S.isMac && n.ctrlKey && s.$mouseHandler.cancelContextMenu(), y == "add") {
            if (!u && f)
              return;
            if (!u) {
              var I = l.toOrientedRange();
              s.addSelectionMarker(I);
            }
            var d = l.rangeList.rangeAtPoint(C);
            s.inVirtualSelectionMode = !0, i && (d = null, I = l.ranges[0] || I, s.removeSelectionMarker(I)), s.once("mouseup", function() {
              var T = l.toOrientedRange();
              d && T.isEmpty() && A(d.cursor, T.cursor) ? l.substractPoint(T.cursor) : (i ? l.substractPoint(I.cursor) : I && (s.removeSelectionMarker(I), l.addRange(I)), l.addRange(T)), s.inVirtualSelectionMode = !1;
            });
          } else if (y == "block") {
            c.stop(), s.inVirtualSelectionMode = !0;
            var h, m = [], x = function() {
              var T = s.renderer.pixelToScreenCoordinates(g, v), V = W.screenToDocumentPosition(T.row, T.column, T.offsetX);
              A(Z, T) && A(V, l.lead) || (Z = T, s.selection.moveToPosition(V), s.renderer.scrollCursorIntoView(), s.removeSelectionMarkers(m), m = l.rectangularRangeBlock(Z, k), s.$mouseHandler.$clickSelection && m.length == 1 && m[0].isEmpty() && (m[0] = s.$mouseHandler.$clickSelection.clone()), m.forEach(s.addSelectionMarker, s), s.updateSelectionMarkers());
            };
            u && !e ? l.toSingleRange() : !u && e && (h = l.toOrientedRange(), s.addSelectionMarker(h)), i ? k = W.documentToScreenPosition(l.lead) : l.moveToPosition(C), Z = { row: -1, column: -1 };
            var $ = function(T) {
              x(), clearInterval(B), s.removeSelectionMarkers(m), m.length || (m = [l.toOrientedRange()]), h && (s.removeSelectionMarker(h), l.toSingleRange(h));
              for (var V = 0; V < m.length; V++)
                l.addRange(m[V]);
              s.inVirtualSelectionMode = !1, s.$mouseHandler.$clickSelection = null;
            }, L = x;
            b.capture(s.container, M, $);
            var B = setInterval(function() {
              L();
            }, 20);
            return c.preventDefault();
          }
        }
      }
      R.onMouseDown = a;
    }), ace.define("ace/commands/multi_select_commands", ["require", "exports", "module", "ace/keyboard/hash_handler"], function(w, R, N) {
      R.defaultCommands = [{
        name: "addCursorAbove",
        description: "Add cursor above",
        exec: function(S) {
          S.selectMoreLines(-1);
        },
        bindKey: { win: "Ctrl-Alt-Up", mac: "Ctrl-Alt-Up" },
        scrollIntoView: "cursor",
        readOnly: !0
      }, {
        name: "addCursorBelow",
        description: "Add cursor below",
        exec: function(S) {
          S.selectMoreLines(1);
        },
        bindKey: { win: "Ctrl-Alt-Down", mac: "Ctrl-Alt-Down" },
        scrollIntoView: "cursor",
        readOnly: !0
      }, {
        name: "addCursorAboveSkipCurrent",
        description: "Add cursor above (skip current)",
        exec: function(S) {
          S.selectMoreLines(-1, !0);
        },
        bindKey: { win: "Ctrl-Alt-Shift-Up", mac: "Ctrl-Alt-Shift-Up" },
        scrollIntoView: "cursor",
        readOnly: !0
      }, {
        name: "addCursorBelowSkipCurrent",
        description: "Add cursor below (skip current)",
        exec: function(S) {
          S.selectMoreLines(1, !0);
        },
        bindKey: { win: "Ctrl-Alt-Shift-Down", mac: "Ctrl-Alt-Shift-Down" },
        scrollIntoView: "cursor",
        readOnly: !0
      }, {
        name: "selectMoreBefore",
        description: "Select more before",
        exec: function(S) {
          S.selectMore(-1);
        },
        bindKey: { win: "Ctrl-Alt-Left", mac: "Ctrl-Alt-Left" },
        scrollIntoView: "cursor",
        readOnly: !0
      }, {
        name: "selectMoreAfter",
        description: "Select more after",
        exec: function(S) {
          S.selectMore(1);
        },
        bindKey: { win: "Ctrl-Alt-Right", mac: "Ctrl-Alt-Right" },
        scrollIntoView: "cursor",
        readOnly: !0
      }, {
        name: "selectNextBefore",
        description: "Select next before",
        exec: function(S) {
          S.selectMore(-1, !0);
        },
        bindKey: { win: "Ctrl-Alt-Shift-Left", mac: "Ctrl-Alt-Shift-Left" },
        scrollIntoView: "cursor",
        readOnly: !0
      }, {
        name: "selectNextAfter",
        description: "Select next after",
        exec: function(S) {
          S.selectMore(1, !0);
        },
        bindKey: { win: "Ctrl-Alt-Shift-Right", mac: "Ctrl-Alt-Shift-Right" },
        scrollIntoView: "cursor",
        readOnly: !0
      }, {
        name: "toggleSplitSelectionIntoLines",
        description: "Split selection into lines",
        exec: function(S) {
          S.multiSelect.rangeCount > 1 ? S.multiSelect.joinSelections() : S.multiSelect.splitIntoLines();
        },
        bindKey: { win: "Ctrl-Alt-L", mac: "Ctrl-Alt-L" },
        readOnly: !0
      }, {
        name: "splitSelectionIntoLines",
        description: "Split into lines",
        exec: function(S) {
          S.multiSelect.splitIntoLines();
        },
        readOnly: !0
      }, {
        name: "alignCursors",
        description: "Align cursors",
        exec: function(S) {
          S.alignCursors();
        },
        bindKey: { win: "Ctrl-Alt-A", mac: "Ctrl-Alt-A" },
        scrollIntoView: "cursor"
      }, {
        name: "findAll",
        description: "Find all",
        exec: function(S) {
          S.findAll();
        },
        bindKey: { win: "Ctrl-Alt-K", mac: "Ctrl-Alt-G" },
        scrollIntoView: "cursor",
        readOnly: !0
      }], R.multiSelectCommands = [{
        name: "singleSelection",
        description: "Single selection",
        bindKey: "esc",
        exec: function(S) {
          S.exitMultiSelectMode();
        },
        scrollIntoView: "cursor",
        readOnly: !0,
        isAvailable: function(S) {
          return S && S.inMultiSelectMode;
        }
      }];
      var b = w("../keyboard/hash_handler").HashHandler;
      R.keyboardHandler = new b(R.multiSelectCommands);
    }), ace.define("ace/multi_select", ["require", "exports", "module", "ace/range_list", "ace/range", "ace/selection", "ace/mouse/multi_select_handler", "ace/lib/event", "ace/lib/lang", "ace/commands/multi_select_commands", "ace/search", "ace/edit_session", "ace/editor", "ace/config"], function(w, R, N) {
      var b = w("./range_list").RangeList, S = w("./range").Range, A = w("./selection").Selection, a = w("./mouse/multi_select_handler").onMouseDown, c = w("./lib/event"), n = w("./lib/lang"), r = w("./commands/multi_select_commands");
      R.commands = r.defaultCommands.concat(r.multiSelectCommands);
      var i = w("./search").Search, t = new i();
      function e(p, f, g) {
        return t.$options.wrap = !0, t.$options.needle = f, t.$options.backwards = g == -1, t.find(p);
      }
      var o = w("./edit_session").EditSession;
      (function() {
        this.getSelectionMarkers = function() {
          return this.$selectionMarkers;
        };
      }).call(o.prototype), (function() {
        this.ranges = null, this.rangeList = null, this.addRange = function(p, f) {
          if (p) {
            if (!this.inMultiSelectMode && this.rangeCount === 0) {
              var g = this.toOrientedRange();
              if (this.rangeList.add(g), this.rangeList.add(p), this.rangeList.ranges.length != 2)
                return this.rangeList.removeAll(), f || this.fromOrientedRange(p);
              this.rangeList.removeAll(), this.rangeList.add(g), this.$onAddRange(g);
            }
            p.cursor || (p.cursor = p.end);
            var v = this.rangeList.add(p);
            return this.$onAddRange(p), v.length && this.$onRemoveRange(v), this.rangeCount > 1 && !this.inMultiSelectMode && (this._signal("multiSelect"), this.inMultiSelectMode = !0, this.session.$undoSelect = !1, this.rangeList.attach(this.session)), f || this.fromOrientedRange(p);
          }
        }, this.toSingleRange = function(p) {
          p = p || this.ranges[0];
          var f = this.rangeList.removeAll();
          f.length && this.$onRemoveRange(f), p && this.fromOrientedRange(p);
        }, this.substractPoint = function(p) {
          var f = this.rangeList.substractPoint(p);
          if (f)
            return this.$onRemoveRange(f), f[0];
        }, this.mergeOverlappingRanges = function() {
          var p = this.rangeList.merge();
          p.length && this.$onRemoveRange(p);
        }, this.$onAddRange = function(p) {
          this.rangeCount = this.rangeList.ranges.length, this.ranges.unshift(p), this._signal("addRange", { range: p });
        }, this.$onRemoveRange = function(p) {
          if (this.rangeCount = this.rangeList.ranges.length, this.rangeCount == 1 && this.inMultiSelectMode) {
            var f = this.rangeList.ranges.pop();
            p.push(f), this.rangeCount = 0;
          }
          for (var g = p.length; g--; ) {
            var v = this.ranges.indexOf(p[g]);
            this.ranges.splice(v, 1);
          }
          this._signal("removeRange", { ranges: p }), this.rangeCount === 0 && this.inMultiSelectMode && (this.inMultiSelectMode = !1, this._signal("singleSelect"), this.session.$undoSelect = !0, this.rangeList.detach(this.session)), f = f || this.ranges[0], f && !f.isEqual(this.getRange()) && this.fromOrientedRange(f);
        }, this.$initRangeList = function() {
          this.rangeList || (this.rangeList = new b(), this.ranges = [], this.rangeCount = 0);
        }, this.getAllRanges = function() {
          return this.rangeCount ? this.rangeList.ranges.concat() : [this.getRange()];
        }, this.splitIntoLines = function() {
          for (var p = this.ranges.length ? this.ranges : [this.getRange()], f = [], g = 0; g < p.length; g++) {
            var v = p[g], M = v.start.row, W = v.end.row;
            if (M === W)
              f.push(v.clone());
            else {
              for (f.push(new S(M, v.start.column, M, this.session.getLine(M).length)); ++M < W; )
                f.push(this.getLineRange(M, !0));
              f.push(new S(W, 0, W, v.end.column));
            }
            g == 0 && !this.isBackwards() && (f = f.reverse());
          }
          this.toSingleRange();
          for (var g = f.length; g--; )
            this.addRange(f[g]);
        }, this.joinSelections = function() {
          var p = this.rangeList.ranges, f = p[p.length - 1], g = S.fromPoints(p[0].start, f.end);
          this.toSingleRange(), this.setSelectionRange(g, f.cursor == f.start);
        }, this.toggleBlockSelection = function() {
          if (this.rangeCount > 1) {
            var p = this.rangeList.ranges, f = p[p.length - 1], g = S.fromPoints(p[0].start, f.end);
            this.toSingleRange(), this.setSelectionRange(g, f.cursor == f.start);
          } else {
            var v = this.session.documentToScreenPosition(this.cursor), M = this.session.documentToScreenPosition(this.anchor), W = this.rectangularRangeBlock(v, M);
            W.forEach(this.addRange, this);
          }
        }, this.rectangularRangeBlock = function(p, f, g) {
          var v = [], M = p.column < f.column;
          if (M)
            var W = p.column, k = f.column, Z = p.offsetX, y = f.offsetX;
          else
            var W = f.column, k = p.column, Z = f.offsetX, y = p.offsetX;
          var I = p.row < f.row;
          if (I)
            var d = p.row, h = f.row;
          else
            var d = f.row, h = p.row;
          W < 0 && (W = 0), d < 0 && (d = 0), d == h && (g = !0);
          for (var m, x = d; x <= h; x++) {
            var $ = S.fromPoints(this.session.screenToDocumentPosition(x, W, Z), this.session.screenToDocumentPosition(x, k, y));
            if ($.isEmpty()) {
              if (m && l($.end, m))
                break;
              m = $.end;
            }
            $.cursor = M ? $.start : $.end, v.push($);
          }
          if (I && v.reverse(), !g) {
            for (var L = v.length - 1; v[L].isEmpty() && L > 0; )
              L--;
            if (L > 0)
              for (var B = 0; v[B].isEmpty(); )
                B++;
            for (var T = L; T >= B; T--)
              v[T].isEmpty() && v.splice(T, 1);
          }
          return v;
        };
      }).call(A.prototype);
      var s = w("./editor").Editor;
      (function() {
        this.updateSelectionMarkers = function() {
          this.renderer.updateCursor(), this.renderer.updateBackMarkers();
        }, this.addSelectionMarker = function(p) {
          p.cursor || (p.cursor = p.end);
          var f = this.getSelectionStyle();
          return p.marker = this.session.addMarker(p, "ace_selection", f), this.session.$selectionMarkers.push(p), this.session.selectionMarkerCount = this.session.$selectionMarkers.length, p;
        }, this.removeSelectionMarker = function(p) {
          if (p.marker) {
            this.session.removeMarker(p.marker);
            var f = this.session.$selectionMarkers.indexOf(p);
            f != -1 && this.session.$selectionMarkers.splice(f, 1), this.session.selectionMarkerCount = this.session.$selectionMarkers.length;
          }
        }, this.removeSelectionMarkers = function(p) {
          for (var f = this.session.$selectionMarkers, g = p.length; g--; ) {
            var v = p[g];
            if (v.marker) {
              this.session.removeMarker(v.marker);
              var M = f.indexOf(v);
              M != -1 && f.splice(M, 1);
            }
          }
          this.session.selectionMarkerCount = f.length;
        }, this.$onAddRange = function(p) {
          this.addSelectionMarker(p.range), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
        }, this.$onRemoveRange = function(p) {
          this.removeSelectionMarkers(p.ranges), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
        }, this.$onMultiSelect = function(p) {
          this.inMultiSelectMode || (this.inMultiSelectMode = !0, this.setStyle("ace_multiselect"), this.keyBinding.addKeyboardHandler(r.keyboardHandler), this.commands.setDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers());
        }, this.$onSingleSelect = function(p) {
          this.session.multiSelect.inVirtualMode || (this.inMultiSelectMode = !1, this.unsetStyle("ace_multiselect"), this.keyBinding.removeKeyboardHandler(r.keyboardHandler), this.commands.removeDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers(), this._emit("changeSelection"));
        }, this.$onMultiSelectExec = function(p) {
          var f = p.command, g = p.editor;
          if (g.multiSelect) {
            if (f.multiSelectAction)
              f.multiSelectAction == "forEach" ? v = g.forEachSelection(f, p.args) : f.multiSelectAction == "forEachLine" ? v = g.forEachSelection(f, p.args, !0) : f.multiSelectAction == "single" ? (g.exitMultiSelectMode(), v = f.exec(g, p.args || {})) : v = f.multiSelectAction(g, p.args || {});
            else {
              var v = f.exec(g, p.args || {});
              g.multiSelect.addRange(g.multiSelect.toOrientedRange()), g.multiSelect.mergeOverlappingRanges();
            }
            return v;
          }
        }, this.forEachSelection = function(p, f, g) {
          if (!this.inVirtualSelectionMode) {
            var v = g && g.keepOrder, M = g == !0 || g && g.$byLines, W = this.session, k = this.selection, Z = k.rangeList, y = (v ? k : Z).ranges, I;
            if (!y.length)
              return p.exec ? p.exec(this, f || {}) : p(this, f || {});
            var d = k._eventRegistry;
            k._eventRegistry = {};
            var h = new A(W);
            this.inVirtualSelectionMode = !0;
            for (var m = y.length; m--; ) {
              if (M)
                for (; m > 0 && y[m].start.row == y[m - 1].end.row; )
                  m--;
              h.fromOrientedRange(y[m]), h.index = m, this.selection = W.selection = h;
              var x = p.exec ? p.exec(this, f || {}) : p(this, f || {});
              !I && x !== void 0 && (I = x), h.toOrientedRange(y[m]);
            }
            h.detach(), this.selection = W.selection = k, this.inVirtualSelectionMode = !1, k._eventRegistry = d, k.mergeOverlappingRanges(), k.ranges[0] && k.fromOrientedRange(k.ranges[0]);
            var $ = this.renderer.$scrollAnimation;
            return this.onCursorChange(), this.onSelectionChange(), $ && $.from == $.to && this.renderer.animateScrolling($.from), I;
          }
        }, this.exitMultiSelectMode = function() {
          !this.inMultiSelectMode || this.inVirtualSelectionMode || this.multiSelect.toSingleRange();
        }, this.getSelectedText = function() {
          var p = "";
          if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
            for (var f = this.multiSelect.rangeList.ranges, g = [], v = 0; v < f.length; v++)
              g.push(this.session.getTextRange(f[v]));
            var M = this.session.getDocument().getNewLineCharacter();
            p = g.join(M), p.length == (g.length - 1) * M.length && (p = "");
          } else this.selection.isEmpty() || (p = this.session.getTextRange(this.getSelectionRange()));
          return p;
        }, this.$checkMultiselectChange = function(p, f) {
          if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
            var g = this.multiSelect.ranges[0];
            if (this.multiSelect.isEmpty() && f == this.multiSelect.anchor)
              return;
            var v = f == this.multiSelect.anchor ? g.cursor == g.start ? g.end : g.start : g.cursor;
            v.row != f.row || this.session.$clipPositionToDocument(v.row, v.column).column != f.column ? this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange()) : this.multiSelect.mergeOverlappingRanges();
          }
        }, this.findAll = function(p, f, g) {
          if (f = f || {}, f.needle = p || f.needle, f.needle == null) {
            var v = this.selection.isEmpty() ? this.selection.getWordRange() : this.selection.getRange();
            f.needle = this.session.getTextRange(v);
          }
          this.$search.set(f);
          var M = this.$search.findAll(this.session);
          if (!M.length)
            return 0;
          var W = this.multiSelect;
          g || W.toSingleRange(M[0]);
          for (var k = M.length; k--; )
            W.addRange(M[k], !0);
          return v && W.rangeList.rangeAtPoint(v.start) && W.addRange(v, !0), M.length;
        }, this.selectMoreLines = function(p, f) {
          var g = this.selection.toOrientedRange(), v = g.cursor == g.end, M = this.session.documentToScreenPosition(g.cursor);
          this.selection.$desiredColumn && (M.column = this.selection.$desiredColumn);
          var W = this.session.screenToDocumentPosition(M.row + p, M.column);
          if (g.isEmpty())
            var Z = W;
          else
            var k = this.session.documentToScreenPosition(v ? g.end : g.start), Z = this.session.screenToDocumentPosition(k.row + p, k.column);
          if (v) {
            var y = S.fromPoints(W, Z);
            y.cursor = y.start;
          } else {
            var y = S.fromPoints(Z, W);
            y.cursor = y.end;
          }
          if (y.desiredColumn = M.column, !this.selection.inMultiSelectMode)
            this.selection.addRange(g);
          else if (f)
            var I = g.cursor;
          this.selection.addRange(y), I && this.selection.substractPoint(I);
        }, this.transposeSelections = function(p) {
          for (var f = this.session, g = f.multiSelect, v = g.ranges, M = v.length; M--; ) {
            var W = v[M];
            if (W.isEmpty()) {
              var k = f.getWordRange(W.start.row, W.start.column);
              W.start.row = k.start.row, W.start.column = k.start.column, W.end.row = k.end.row, W.end.column = k.end.column;
            }
          }
          g.mergeOverlappingRanges();
          for (var Z = [], M = v.length; M--; ) {
            var W = v[M];
            Z.unshift(f.getTextRange(W));
          }
          p < 0 ? Z.unshift(Z.pop()) : Z.push(Z.shift());
          for (var M = v.length; M--; ) {
            var W = v[M], y = W.clone();
            f.replace(W, Z[M]), W.start.row = y.start.row, W.start.column = y.start.column;
          }
          g.fromOrientedRange(g.ranges[0]);
        }, this.selectMore = function(p, f, g) {
          var v = this.session, M = v.multiSelect, W = M.toOrientedRange();
          if (!(W.isEmpty() && (W = v.getWordRange(W.start.row, W.start.column), W.cursor = p == -1 ? W.start : W.end, this.multiSelect.addRange(W), g))) {
            var k = v.getTextRange(W), Z = e(v, k, p);
            Z && (Z.cursor = p == -1 ? Z.start : Z.end, this.session.unfold(Z), this.multiSelect.addRange(Z), this.renderer.scrollCursorIntoView(null, 0.5)), f && this.multiSelect.substractPoint(W.cursor);
          }
        }, this.alignCursors = function() {
          var p = this.session, f = p.multiSelect, g = f.ranges, v = -1, M = g.filter(function(L) {
            if (L.cursor.row == v)
              return !0;
            v = L.cursor.row;
          });
          if (!g.length || M.length == g.length - 1) {
            var W = this.selection.getRange(), k = W.start.row, Z = W.end.row, y = k == Z;
            if (y) {
              var I = this.session.getLength(), d;
              do
                d = this.session.getLine(Z);
              while (/[=:]/.test(d) && ++Z < I);
              do
                d = this.session.getLine(k);
              while (/[=:]/.test(d) && --k > 0);
              k < 0 && (k = 0), Z >= I && (Z = I - 1);
            }
            var h = this.session.removeFullLines(k, Z);
            h = this.$reAlignText(h, y), this.session.insert({ row: k, column: 0 }, h.join(`
`) + `
`), y || (W.start.column = 0, W.end.column = h[h.length - 1].length), this.selection.setRange(W);
          } else {
            M.forEach(function(L) {
              f.substractPoint(L.cursor);
            });
            var m = 0, x = 1 / 0, $ = g.map(function(L) {
              var B = L.cursor, T = p.getLine(B.row), V = T.substr(B.column).search(/\S/g);
              return V == -1 && (V = 0), B.column > m && (m = B.column), V < x && (x = V), V;
            });
            g.forEach(function(L, B) {
              var T = L.cursor, V = m - T.column, _ = $[B] - x;
              V > _ ? p.insert(T, n.stringRepeat(" ", V - _)) : p.remove(new S(T.row, T.column, T.row, T.column - V + _)), L.start.column = L.end.column = m, L.start.row = L.end.row = T.row, L.cursor = L.end;
            }), f.fromOrientedRange(g[0]), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
          }
        }, this.$reAlignText = function(p, f) {
          var g = !0, v = !0, M, W, k;
          return p.map(function(h) {
            var m = h.match(/(\s*)(.*?)(\s*)([=:].*)/);
            return m ? M == null ? (M = m[1].length, W = m[2].length, k = m[3].length, m) : (M + W + k != m[1].length + m[2].length + m[3].length && (v = !1), M != m[1].length && (g = !1), M > m[1].length && (M = m[1].length), W < m[2].length && (W = m[2].length), k > m[3].length && (k = m[3].length), m) : [h];
          }).map(f ? y : g ? v ? I : y : d);
          function Z(h) {
            return n.stringRepeat(" ", h);
          }
          function y(h) {
            return h[2] ? Z(M) + h[2] + Z(W - h[2].length + k) + h[4].replace(/^([=:])\s+/, "$1 ") : h[0];
          }
          function I(h) {
            return h[2] ? Z(M + W - h[2].length) + h[2] + Z(k) + h[4].replace(/^([=:])\s+/, "$1 ") : h[0];
          }
          function d(h) {
            return h[2] ? Z(M) + h[2] + Z(k) + h[4].replace(/^([=:])\s+/, "$1 ") : h[0];
          }
        };
      }).call(s.prototype);
      function l(p, f) {
        return p.row == f.row && p.column == f.column;
      }
      R.onSessionChange = function(p) {
        var f = p.session;
        f && !f.multiSelect && (f.$selectionMarkers = [], f.selection.$initRangeList(), f.multiSelect = f.selection), this.multiSelect = f && f.multiSelect;
        var g = p.oldSession;
        g && (g.multiSelect.off("addRange", this.$onAddRange), g.multiSelect.off("removeRange", this.$onRemoveRange), g.multiSelect.off("multiSelect", this.$onMultiSelect), g.multiSelect.off("singleSelect", this.$onSingleSelect), g.multiSelect.lead.off("change", this.$checkMultiselectChange), g.multiSelect.anchor.off("change", this.$checkMultiselectChange)), f && (f.multiSelect.on("addRange", this.$onAddRange), f.multiSelect.on("removeRange", this.$onRemoveRange), f.multiSelect.on("multiSelect", this.$onMultiSelect), f.multiSelect.on("singleSelect", this.$onSingleSelect), f.multiSelect.lead.on("change", this.$checkMultiselectChange), f.multiSelect.anchor.on("change", this.$checkMultiselectChange)), f && this.inMultiSelectMode != f.selection.inMultiSelectMode && (f.selection.inMultiSelectMode ? this.$onMultiSelect() : this.$onSingleSelect());
      };
      function u(p) {
        p.$multiselectOnSessionChange || (p.$onAddRange = p.$onAddRange.bind(p), p.$onRemoveRange = p.$onRemoveRange.bind(p), p.$onMultiSelect = p.$onMultiSelect.bind(p), p.$onSingleSelect = p.$onSingleSelect.bind(p), p.$multiselectOnSessionChange = R.onSessionChange.bind(p), p.$checkMultiselectChange = p.$checkMultiselectChange.bind(p), p.$multiselectOnSessionChange(p), p.on("changeSession", p.$multiselectOnSessionChange), p.on("mousedown", a), p.commands.addCommands(r.defaultCommands), C(p));
      }
      function C(p) {
        if (!p.textInput)
          return;
        var f = p.textInput.getElement(), g = !1;
        c.addListener(f, "keydown", function(M) {
          var W = M.keyCode == 18 && !(M.ctrlKey || M.shiftKey || M.metaKey);
          p.$blockSelectEnabled && W ? g || (p.renderer.setMouseCursor("crosshair"), g = !0) : g && v();
        }, p), c.addListener(f, "keyup", v, p), c.addListener(f, "blur", v, p);
        function v(M) {
          g && (p.renderer.setMouseCursor(""), g = !1);
        }
      }
      R.MultiSelect = u, w("./config").defineOptions(s.prototype, "editor", {
        enableMultiselect: {
          set: function(p) {
            u(this), p ? this.on("mousedown", a) : this.off("mousedown", a);
          },
          value: !0
        },
        enableBlockSelect: {
          set: function(p) {
            this.$blockSelectEnabled = p;
          },
          value: !0
        }
      });
    }), ace.define("ace/mode/folding/fold_mode", ["require", "exports", "module", "ace/range"], function(w, R, N) {
      var b = w("../../range").Range, S = R.FoldMode = function() {
      };
      (function() {
        this.foldingStartMarker = null, this.foldingStopMarker = null, this.getFoldWidget = function(A, a, c) {
          var n = A.getLine(c);
          return this.foldingStartMarker.test(n) ? "start" : a == "markbeginend" && this.foldingStopMarker && this.foldingStopMarker.test(n) ? "end" : "";
        }, this.getFoldWidgetRange = function(A, a, c) {
          return null;
        }, this.indentationBlock = function(A, a, c) {
          var n = /\S/, r = A.getLine(a), i = r.search(n);
          if (i != -1) {
            for (var t = c || r.length, e = A.getLength(), o = a, s = a; ++a < e; ) {
              var l = A.getLine(a).search(n);
              if (l != -1) {
                if (l <= i) {
                  var u = A.getTokenAt(a, 0);
                  if (!u || u.type !== "string")
                    break;
                }
                s = a;
              }
            }
            if (s > o) {
              var C = A.getLine(s).length;
              return new b(o, t, s, C);
            }
          }
        }, this.openingBracketBlock = function(A, a, c, n, r) {
          var i = { row: c, column: n + 1 }, t = A.$findClosingBracket(a, i, r);
          if (t) {
            var e = A.foldWidgets[t.row];
            return e == null && (e = A.getFoldWidget(t.row)), e == "start" && t.row > i.row && (t.row--, t.column = A.getLine(t.row).length), b.fromPoints(i, t);
          }
        }, this.closingBracketBlock = function(A, a, c, n, r) {
          var i = { row: c, column: n }, t = A.$findOpeningBracket(a, i);
          if (t)
            return t.column++, i.column--, b.fromPoints(t, i);
        };
      }).call(S.prototype);
    }), ace.define("ace/ext/error_marker", ["require", "exports", "module", "ace/lib/dom", "ace/range", "ace/config"], function(w, R, N) {
      var b = w("../lib/dom"), S = w("../range").Range, A = w("../config").nls;
      function a(n, r, i) {
        for (var t = 0, e = n.length - 1; t <= e; ) {
          var o = t + e >> 1, s = i(r, n[o]);
          if (s > 0)
            t = o + 1;
          else if (s < 0)
            e = o - 1;
          else
            return o;
        }
        return -(t + 1);
      }
      function c(n, r, i) {
        var t = n.getAnnotations().sort(S.comparePoints);
        if (t.length) {
          var e = a(t, { row: r, column: -1 }, S.comparePoints);
          e < 0 && (e = -e - 1), e >= t.length ? e = i > 0 ? 0 : t.length - 1 : e === 0 && i < 0 && (e = t.length - 1);
          var o = t[e];
          if (!(!o || !i)) {
            if (o.row === r) {
              do
                o = t[e += i];
              while (o && o.row === r);
              if (!o)
                return t.slice();
            }
            var s = [];
            r = o.row;
            do
              s[i < 0 ? "unshift" : "push"](o), o = t[e += i];
            while (o && o.row == r);
            return s.length && s;
          }
        }
      }
      R.showErrorMarker = function(n, r) {
        var i = n.session, t = n.getCursorPosition(), e = t.row, o = i.widgetManager.getWidgetsAtRow(e).filter(function(M) {
          return M.type == "errorMarker";
        })[0];
        o ? o.destroy() : e -= r;
        var s = c(i, e, r), l;
        if (s) {
          var u = s[0];
          t.column = (u.pos && typeof u.column != "number" ? u.pos.sc : u.column) || 0, t.row = u.row, l = n.renderer.$gutterLayer.$annotations[t.row];
        } else {
          if (o)
            return;
          l = {
            displayText: [A("error-marker.good-state", "Looks good!")],
            className: "ace_ok"
          };
        }
        n.session.unfold(t.row), n.selection.moveToPosition(t);
        var C = {
          row: t.row,
          fixedWidth: !0,
          coverGutter: !0,
          el: b.createElement("div"),
          type: "errorMarker"
        }, p = C.el.appendChild(b.createElement("div")), f = C.el.appendChild(b.createElement("div"));
        f.className = "error_widget_arrow " + l.className;
        var g = n.renderer.$cursorLayer.getPixelPosition(t).left;
        f.style.left = g + n.renderer.gutterWidth - 5 + "px", C.el.className = "error_widget_wrapper", p.className = "error_widget " + l.className, l.displayText.forEach(function(M, W) {
          p.appendChild(b.createTextNode(M)), W < l.displayText.length - 1 && p.appendChild(b.createElement("br"));
        }), p.appendChild(b.createElement("div"));
        var v = function(M, W, k) {
          if (W === 0 && (k === "esc" || k === "return"))
            return C.destroy(), { command: "null" };
        };
        C.destroy = function() {
          n.$mouseHandler.isMousePressed || (n.keyBinding.removeKeyboardHandler(v), i.widgetManager.removeLineWidget(C), n.off("changeSelection", C.destroy), n.off("changeSession", C.destroy), n.off("mouseup", C.destroy), n.off("change", C.destroy));
        }, n.keyBinding.addKeyboardHandler(v), n.on("changeSelection", C.destroy), n.on("changeSession", C.destroy), n.on("mouseup", C.destroy), n.on("change", C.destroy), n.session.widgetManager.addLineWidget(C), C.el.onmousedown = n.focus.bind(n), n.renderer.scrollCursorIntoView(null, 0.5, { bottom: C.el.offsetHeight });
      }, b.importCssString(`
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
    }), ace.define("ace/ace", ["require", "exports", "module", "ace/lib/dom", "ace/range", "ace/editor", "ace/edit_session", "ace/undomanager", "ace/virtual_renderer", "ace/worker/worker_client", "ace/keyboard/hash_handler", "ace/placeholder", "ace/multi_select", "ace/mode/folding/fold_mode", "ace/theme/textmate", "ace/ext/error_marker", "ace/config", "ace/loader_build"], function(w, R, N) {
      w("./loader_build")(R);
      var b = w("./lib/dom"), S = w("./range").Range, A = w("./editor").Editor, a = w("./edit_session").EditSession, c = w("./undomanager").UndoManager, n = w("./virtual_renderer").VirtualRenderer;
      w("./worker/worker_client"), w("./keyboard/hash_handler"), w("./placeholder"), w("./multi_select"), w("./mode/folding/fold_mode"), w("./theme/textmate"), w("./ext/error_marker"), R.config = w("./config"), R.edit = function(i, t) {
        if (typeof i == "string") {
          var e = i;
          if (i = document.getElementById(e), !i)
            throw new Error("ace.edit can't find div #" + e);
        }
        if (i && i.env && i.env.editor instanceof A)
          return i.env.editor;
        var o = "";
        if (i && /input|textarea/i.test(i.tagName)) {
          var s = i;
          o = s.value, i = b.createElement("pre"), s.parentNode.replaceChild(i, s);
        } else i && (o = i.textContent, i.innerHTML = "");
        var l = R.createEditSession(o), u = new A(new n(i), l, t), C = {
          document: l,
          editor: u,
          onResize: u.resize.bind(u, null)
        };
        return s && (C.textarea = s), u.on("destroy", function() {
          C.editor.container.env = null;
        }), u.container.env = u.env = C, u;
      }, R.createEditSession = function(i, t) {
        var e = new a(i, t);
        return e.setUndoManager(new c()), e;
      }, R.Range = S, R.Editor = A, R.EditSession = a, R.UndoManager = c, R.VirtualRenderer = n;
      var r = R.config.version;
      R.version = r;
    }), function() {
      ace.require(["ace/ace"], function(w) {
        w && (w.config.init(!0), w.define = ace.define);
        var R = /* @__PURE__ */ function() {
          return this;
        }();
        !R && typeof window < "u" && (R = window), !R && typeof self < "u" && (R = self), R.ace || (R.ace = w);
        for (var N in w) w.hasOwnProperty(N) && (R.ace[N] = w[N]);
        R.ace.default = R.ace, G && (G.exports = R.ace);
      });
    }();
  }(ht)), ht.exports;
}
var Li = Mi();
const nt = /* @__PURE__ */ Qt(Li);
var qt = function() {
  if (typeof Map < "u")
    return Map;
  function G(H, w) {
    var R = -1;
    return H.some(function(N, b) {
      return N[0] === w ? (R = b, !0) : !1;
    }), R;
  }
  return (
    /** @class */
    function() {
      function H() {
        this.__entries__ = [];
      }
      return Object.defineProperty(H.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), H.prototype.get = function(w) {
        var R = G(this.__entries__, w), N = this.__entries__[R];
        return N && N[1];
      }, H.prototype.set = function(w, R) {
        var N = G(this.__entries__, w);
        ~N ? this.__entries__[N][1] = R : this.__entries__.push([w, R]);
      }, H.prototype.delete = function(w) {
        var R = this.__entries__, N = G(R, w);
        ~N && R.splice(N, 1);
      }, H.prototype.has = function(w) {
        return !!~G(this.__entries__, w);
      }, H.prototype.clear = function() {
        this.__entries__.splice(0);
      }, H.prototype.forEach = function(w, R) {
        R === void 0 && (R = null);
        for (var N = 0, b = this.__entries__; N < b.length; N++) {
          var S = b[N];
          w.call(R, S[1], S[0]);
        }
      }, H;
    }()
  );
}(), pt = typeof window < "u" && typeof document < "u" && window.document === document, rt = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), $i = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(rt) : function(G) {
    return setTimeout(function() {
      return G(Date.now());
    }, 1e3 / 60);
  };
}(), Gi = 2;
function Bi(G, H) {
  var w = !1, R = !1, N = 0;
  function b() {
    w && (w = !1, G()), R && A();
  }
  function S() {
    $i(b);
  }
  function A() {
    var a = Date.now();
    if (w) {
      if (a - N < Gi)
        return;
      R = !0;
    } else
      w = !0, R = !1, setTimeout(S, H);
    N = a;
  }
  return A;
}
var Zi = 20, Ti = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Hi = typeof MutationObserver < "u", Ei = (
  /** @class */
  function() {
    function G() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Bi(this.refresh.bind(this), Zi);
    }
    return G.prototype.addObserver = function(H) {
      ~this.observers_.indexOf(H) || this.observers_.push(H), this.connected_ || this.connect_();
    }, G.prototype.removeObserver = function(H) {
      var w = this.observers_, R = w.indexOf(H);
      ~R && w.splice(R, 1), !w.length && this.connected_ && this.disconnect_();
    }, G.prototype.refresh = function() {
      var H = this.updateObservers_();
      H && this.refresh();
    }, G.prototype.updateObservers_ = function() {
      var H = this.observers_.filter(function(w) {
        return w.gatherActive(), w.hasActive();
      });
      return H.forEach(function(w) {
        return w.broadcastActive();
      }), H.length > 0;
    }, G.prototype.connect_ = function() {
      !pt || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Hi ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, G.prototype.disconnect_ = function() {
      !pt || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, G.prototype.onTransitionEnd_ = function(H) {
      var w = H.propertyName, R = w === void 0 ? "" : w, N = Ti.some(function(b) {
        return !!~R.indexOf(b);
      });
      N && this.refresh();
    }, G.getInstance = function() {
      return this.instance_ || (this.instance_ = new G()), this.instance_;
    }, G.instance_ = null, G;
  }()
), en = function(G, H) {
  for (var w = 0, R = Object.keys(H); w < R.length; w++) {
    var N = R[w];
    Object.defineProperty(G, N, {
      value: H[N],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return G;
}, Ke = function(G) {
  var H = G && G.ownerDocument && G.ownerDocument.defaultView;
  return H || rt;
}, tn = at(0, 0, 0, 0);
function st(G) {
  return parseFloat(G) || 0;
}
function Tt(G) {
  for (var H = [], w = 1; w < arguments.length; w++)
    H[w - 1] = arguments[w];
  return H.reduce(function(R, N) {
    var b = G["border-" + N + "-width"];
    return R + st(b);
  }, 0);
}
function Vi(G) {
  for (var H = ["top", "right", "bottom", "left"], w = {}, R = 0, N = H; R < N.length; R++) {
    var b = N[R], S = G["padding-" + b];
    w[b] = st(S);
  }
  return w;
}
function Ni(G) {
  var H = G.getBBox();
  return at(0, 0, H.width, H.height);
}
function _i(G) {
  var H = G.clientWidth, w = G.clientHeight;
  if (!H && !w)
    return tn;
  var R = Ke(G).getComputedStyle(G), N = Vi(R), b = N.left + N.right, S = N.top + N.bottom, A = st(R.width), a = st(R.height);
  if (R.boxSizing === "border-box" && (Math.round(A + b) !== H && (A -= Tt(R, "left", "right") + b), Math.round(a + S) !== w && (a -= Tt(R, "top", "bottom") + S)), !Fi(G)) {
    var c = Math.round(A + b) - H, n = Math.round(a + S) - w;
    Math.abs(c) !== 1 && (A -= c), Math.abs(n) !== 1 && (a -= n);
  }
  return at(N.left, N.top, A, a);
}
var Oi = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(G) {
    return G instanceof Ke(G).SVGGraphicsElement;
  } : function(G) {
    return G instanceof Ke(G).SVGElement && typeof G.getBBox == "function";
  };
}();
function Fi(G) {
  return G === Ke(G).document.documentElement;
}
function Di(G) {
  return pt ? Oi(G) ? Ni(G) : _i(G) : tn;
}
function Ki(G) {
  var H = G.x, w = G.y, R = G.width, N = G.height, b = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, S = Object.create(b.prototype);
  return en(S, {
    x: H,
    y: w,
    width: R,
    height: N,
    top: w,
    right: H + R,
    bottom: N + w,
    left: H
  }), S;
}
function at(G, H, w, R) {
  return { x: G, y: H, width: w, height: R };
}
var Yi = (
  /** @class */
  function() {
    function G(H) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = at(0, 0, 0, 0), this.target = H;
    }
    return G.prototype.isActive = function() {
      var H = Di(this.target);
      return this.contentRect_ = H, H.width !== this.broadcastWidth || H.height !== this.broadcastHeight;
    }, G.prototype.broadcastRect = function() {
      var H = this.contentRect_;
      return this.broadcastWidth = H.width, this.broadcastHeight = H.height, H;
    }, G;
  }()
), Xi = (
  /** @class */
  /* @__PURE__ */ function() {
    function G(H, w) {
      var R = Ki(w);
      en(this, { target: H, contentRect: R });
    }
    return G;
  }()
), zi = (
  /** @class */
  function() {
    function G(H, w, R) {
      if (this.activeObservations_ = [], this.observations_ = new qt(), typeof H != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = H, this.controller_ = w, this.callbackCtx_ = R;
    }
    return G.prototype.observe = function(H) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(H instanceof Ke(H).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var w = this.observations_;
        w.has(H) || (w.set(H, new Yi(H)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, G.prototype.unobserve = function(H) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(H instanceof Ke(H).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var w = this.observations_;
        w.has(H) && (w.delete(H), w.size || this.controller_.removeObserver(this));
      }
    }, G.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, G.prototype.gatherActive = function() {
      var H = this;
      this.clearActive(), this.observations_.forEach(function(w) {
        w.isActive() && H.activeObservations_.push(w);
      });
    }, G.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var H = this.callbackCtx_, w = this.activeObservations_.map(function(R) {
          return new Xi(R.target, R.broadcastRect());
        });
        this.callback_.call(H, w, H), this.clearActive();
      }
    }, G.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, G.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, G;
  }()
), nn = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new qt(), on = (
  /** @class */
  /* @__PURE__ */ function() {
    function G(H) {
      if (!(this instanceof G))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var w = Ei.getInstance(), R = new zi(H, w, this);
      nn.set(this, R);
    }
    return G;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(G) {
  on.prototype[G] = function() {
    var H;
    return (H = nn.get(this))[G].apply(H, arguments);
  };
});
var Pi = function() {
  return typeof rt.ResizeObserver < "u" ? rt.ResizeObserver : on;
}();
const Ht = [
  "blur",
  "input",
  "change",
  "changeSelectionStyle",
  "changeSession",
  "copy",
  "focus",
  "paste"
], Ji = Le({
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
  emits: ["update:value", "init", ...Ht],
  render() {
    return Ne("div");
  },
  mounted() {
    const G = this._editor = un(nt.edit(this.$el, {
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
    this._contentBackup = this.value, this._isSettingContent = !1, G.on("change", () => {
      if (this._isSettingContent)
        return;
      const H = G.getValue();
      this._contentBackup = H, this.$emit("update:value", H);
    }), Ht.forEach((H) => {
      const w = "on" + gn(H);
      typeof this.$.vnode.props[w] == "function" && G.on(H, this.$emit.bind(this, H));
    }), this._ro = new Pi(() => G.resize()), this._ro.observe(this.$el), this.$emit("init", G);
  },
  beforeUnmount() {
    var G, H;
    (G = this._ro) === null || G === void 0 || G.disconnect(), (H = this._editor) === null || H === void 0 || H.destroy();
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
    value(G) {
      if (this._contentBackup !== G) {
        try {
          this._isSettingContent = !0, this._editor.setValue(G, 1);
        } finally {
          this._isSettingContent = !1;
        }
        this._contentBackup = G;
      }
    },
    theme(G) {
      this._editor.setTheme("ace/theme/" + G);
    },
    options(G) {
      this._editor.setOptions(G);
    },
    readonly(G) {
      this._editor.setReadOnly(G);
    },
    placeholder(G) {
      this._editor.setOption("placeholder", G);
    },
    wrap(G) {
      this._editor.setWrapBehavioursEnabled(G);
    },
    printMargin(G) {
      this._editor.setOption("printMargin", G);
    },
    lang(G) {
      this._editor.setOption("mode", "ace/mode/" + G);
    },
    minLines(G) {
      this._editor.setOption("minLines", G);
    },
    maxLines(G) {
      this._editor.setOption("maxLines", G);
    }
  }
}), ji = "data:text/javascript;base64,YWNlLmRlZmluZSgiYWNlL3RoZW1lL2Nocm9tZS1jc3MiLFsicmVxdWlyZSIsImV4cG9ydHMiLCJtb2R1bGUiXSwgZnVuY3Rpb24ocmVxdWlyZSwgZXhwb3J0cywgbW9kdWxlKXttb2R1bGUuZXhwb3J0cyA9ICIuYWNlLWNocm9tZSAuYWNlX2d1dHRlciB7XG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XG4gIGNvbG9yOiAjMzMzO1xuICBvdmVyZmxvdyA6IGhpZGRlbjtcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9wcmludC1tYXJnaW4ge1xuICB3aWR0aDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xufVxuXG4uYWNlLWNocm9tZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9jdXJzb3Ige1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5hY2UtY2hyb21lIC5hY2VfaW52aXNpYmxlIHtcbiAgY29sb3I6IHJnYigxOTEsIDE5MSwgMTkxKTtcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9jb25zdGFudC5hY2VfYnVpbGRpbiB7XG4gIGNvbG9yOiByZ2IoODgsIDcyLCAyNDYpO1xufVxuXG4uYWNlLWNocm9tZSAuYWNlX2NvbnN0YW50LmFjZV9sYW5ndWFnZSB7XG4gIGNvbG9yOiByZ2IoODgsIDkyLCAyNDYpO1xufVxuXG4uYWNlLWNocm9tZSAuYWNlX2NvbnN0YW50LmFjZV9saWJyYXJ5IHtcbiAgY29sb3I6IHJnYig2LCAxNTAsIDE0KTtcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9pbnZhbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MywgMCwgMCk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9mb2xkIHtcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9zdXBwb3J0LmFjZV9mdW5jdGlvbiB7XG4gIGNvbG9yOiByZ2IoNjAsIDc2LCAxMTQpO1xufVxuXG4uYWNlLWNocm9tZSAuYWNlX3N1cHBvcnQuYWNlX2NvbnN0YW50IHtcbiAgY29sb3I6IHJnYig2LCAxNTAsIDE0KTtcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9zdXBwb3J0LmFjZV90eXBlLFxuLmFjZS1jaHJvbWUgLmFjZV9zdXBwb3J0LmFjZV9jbGFzc1xuLmFjZS1jaHJvbWUgLmFjZV9zdXBwb3J0LmFjZV9vdGhlciB7XG4gIGNvbG9yOiByZ2IoMTA5LCAxMjEsIDIyMik7XG59XG5cbi5hY2UtY2hyb21lIC5hY2VfdmFyaWFibGUuYWNlX3BhcmFtZXRlciB7XG4gIGZvbnQtc3R5bGU6aXRhbGljO1xuICBjb2xvcjojRkQ5NzFGO1xufVxuLmFjZS1jaHJvbWUgLmFjZV9rZXl3b3JkLmFjZV9vcGVyYXRvciB7XG4gIGNvbG9yOiByZ2IoMTA0LCAxMTgsIDEzNSk7XG59XG5cbi5hY2UtY2hyb21lIC5hY2VfY29tbWVudCB7XG4gIGNvbG9yOiAjMjM2ZTI0O1xufVxuXG4uYWNlLWNocm9tZSAuYWNlX2NvbW1lbnQuYWNlX2RvYyB7XG4gIGNvbG9yOiAjMjM2ZTI0O1xufVxuXG4uYWNlLWNocm9tZSAuYWNlX2NvbW1lbnQuYWNlX2RvYy5hY2VfdGFnIHtcbiAgY29sb3I6ICMyMzZlMjQ7XG59XG5cbi5hY2UtY2hyb21lIC5hY2VfY29uc3RhbnQuYWNlX251bWVyaWMge1xuICBjb2xvcjogcmdiKDAsIDAsIDIwNSk7XG59XG5cbi5hY2UtY2hyb21lIC5hY2VfdmFyaWFibGUge1xuICBjb2xvcjogcmdiKDQ5LCAxMzIsIDE0OSk7XG59XG5cbi5hY2UtY2hyb21lIC5hY2VfeG1sLXBlIHtcbiAgY29sb3I6IHJnYigxMDQsIDEwNCwgOTEpO1xufVxuXG4uYWNlLWNocm9tZSAuYWNlX2VudGl0eS5hY2VfbmFtZS5hY2VfZnVuY3Rpb24ge1xuICBjb2xvcjogIzAwMDBBMjtcbn1cblxuXG4uYWNlLWNocm9tZSAuYWNlX2hlYWRpbmcge1xuICBjb2xvcjogcmdiKDEyLCA3LCAyNTUpO1xufVxuXG4uYWNlLWNocm9tZSAuYWNlX2xpc3Qge1xuICBjb2xvcjpyZ2IoMTg1LCA2LCAxNDQpO1xufVxuXG4uYWNlLWNocm9tZSAuYWNlX21hcmtlci1sYXllciAuYWNlX3NlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHJnYigxODEsIDIxMywgMjU1KTtcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9tYXJrZXItbGF5ZXIgLmFjZV9zdGVwIHtcbiAgYmFja2dyb3VuZDogcmdiKDI1MiwgMjU1LCAwKTtcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9tYXJrZXItbGF5ZXIgLmFjZV9zdGFjayB7XG4gIGJhY2tncm91bmQ6IHJnYigxNjQsIDIyOSwgMTAxKTtcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9tYXJrZXItbGF5ZXIgLmFjZV9icmFja2V0IHtcbiAgbWFyZ2luOiAtMXB4IDAgMCAtMXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkyLCAxOTIsIDE5Mik7XG59XG5cbi5hY2UtY2hyb21lIC5hY2VfbWFya2VyLWxheWVyIC5hY2VfYWN0aXZlLWxpbmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDcpO1xufVxuXG4uYWNlLWNocm9tZSAuYWNlX2d1dHRlci1hY3RpdmUtbGluZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvciA6ICNkY2RjZGM7XG59XG5cbi5hY2UtY2hyb21lIC5hY2VfbWFya2VyLWxheWVyIC5hY2Vfc2VsZWN0ZWQtd29yZCB7XG4gIGJhY2tncm91bmQ6IHJnYigyNTAsIDI1MCwgMjU1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwMCwgMjAwLCAyNTApO1xufVxuXG4uYWNlLWNocm9tZSAuYWNlX3N0b3JhZ2UsXG4uYWNlLWNocm9tZSAuYWNlX2tleXdvcmQsXG4uYWNlLWNocm9tZSAuYWNlX21ldGEuYWNlX3RhZyB7XG4gIGNvbG9yOiByZ2IoMTQ3LCAxNSwgMTI4KTtcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9zdHJpbmcuYWNlX3JlZ2V4IHtcbiAgY29sb3I6IHJnYigyNTUsIDAsIDApXG59XG5cbi5hY2UtY2hyb21lIC5hY2Vfc3RyaW5nIHtcbiAgY29sb3I6ICMxQTFBQTY7XG59XG5cbi5hY2UtY2hyb21lIC5hY2VfZW50aXR5LmFjZV9vdGhlci5hY2VfYXR0cmlidXRlLW5hbWUge1xuICBjb2xvcjogIzk5NDQwOTtcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9pbmRlbnQtZ3VpZGUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFFQUFBQUNDQVlBQUFDWmdiWW5BQUFBRTBsRVFWUUltV1A0Ly8vL2Y0YkxseS8vQndBbVZnZDEvdzExL2dBQUFBQkpSVTVFcmtKZ2dnPT1cIikgcmlnaHQgcmVwZWF0LXk7XG59XG4gIFxuLmFjZS1jaHJvbWUgLmFjZV9pbmRlbnQtZ3VpZGUtYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBRUFBQUFDQ0FZQUFBQ1pnYlluQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFJR05JVWswQUFIb2xBQUNBZ3dBQStmOEFBSURwQUFCMU1BQUE2bUFBQURxWUFBQVhiNUpmeFVZQUFBQVpTVVJCVkhqYVl2ai8vLzkvaGl2S3l2OEJBQUFBLy84REFDTHFCaGJ2aysvZUFBQUFBRWxGVGtTdVFtQ0NcIikgcmlnaHQgcmVwZWF0LXk7XG59XG4iOwoKfSk7CgphY2UuZGVmaW5lKCJhY2UvdGhlbWUvY2hyb21lIixbInJlcXVpcmUiLCJleHBvcnRzIiwibW9kdWxlIiwiYWNlL3RoZW1lL2Nocm9tZS1jc3MiLCJhY2UvbGliL2RvbSJdLCBmdW5jdGlvbihyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpe2V4cG9ydHMuaXNEYXJrID0gZmFsc2U7CmV4cG9ydHMuY3NzQ2xhc3MgPSAiYWNlLWNocm9tZSI7CmV4cG9ydHMuY3NzVGV4dCA9IHJlcXVpcmUoIi4vY2hyb21lLWNzcyIpOwp2YXIgZG9tID0gcmVxdWlyZSgiLi4vbGliL2RvbSIpOwpkb20uaW1wb3J0Q3NzU3RyaW5nKGV4cG9ydHMuY3NzVGV4dCwgZXhwb3J0cy5jc3NDbGFzcywgZmFsc2UpOwoKfSk7ICAgICAgICAgICAgICAgIChmdW5jdGlvbigpIHsKICAgICAgICAgICAgICAgICAgICBhY2UucmVxdWlyZShbImFjZS90aGVtZS9jaHJvbWUiXSwgZnVuY3Rpb24obSkgewogICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1vZHVsZSA9PSAib2JqZWN0IiAmJiB0eXBlb2YgZXhwb3J0cyA9PSAib2JqZWN0IiAmJiBtb2R1bGUpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gbTsKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICAgICAgfSkoKTsKICAgICAgICAgICAg", Ui = "data:text/javascript;base64,Im5vIHVzZSBzdHJpY3QiOwohKGZ1bmN0aW9uKHdpbmRvdykgewppZiAodHlwZW9mIHdpbmRvdy53aW5kb3cgIT0gInVuZGVmaW5lZCIgJiYgd2luZG93LmRvY3VtZW50KQogICAgcmV0dXJuOwppZiAod2luZG93LnJlcXVpcmUgJiYgd2luZG93LmRlZmluZSkKICAgIHJldHVybjsKCmlmICghd2luZG93LmNvbnNvbGUpIHsKICAgIHdpbmRvdy5jb25zb2xlID0gZnVuY3Rpb24oKSB7CiAgICAgICAgdmFyIG1zZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApOwogICAgICAgIHBvc3RNZXNzYWdlKHt0eXBlOiAibG9nIiwgZGF0YTogbXNnc30pOwogICAgfTsKICAgIHdpbmRvdy5jb25zb2xlLmVycm9yID0KICAgIHdpbmRvdy5jb25zb2xlLndhcm4gPSAKICAgIHdpbmRvdy5jb25zb2xlLmxvZyA9CiAgICB3aW5kb3cuY29uc29sZS50cmFjZSA9IHdpbmRvdy5jb25zb2xlOwp9CndpbmRvdy53aW5kb3cgPSB3aW5kb3c7CndpbmRvdy5hY2UgPSB3aW5kb3c7Cgp3aW5kb3cub25lcnJvciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIGZpbGUsIGxpbmUsIGNvbCwgZXJyKSB7CiAgICBwb3N0TWVzc2FnZSh7dHlwZTogImVycm9yIiwgZGF0YTogewogICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsCiAgICAgICAgZGF0YTogZXJyICYmIGVyci5kYXRhLAogICAgICAgIGZpbGU6IGZpbGUsCiAgICAgICAgbGluZTogbGluZSwgCiAgICAgICAgY29sOiBjb2wsCiAgICAgICAgc3RhY2s6IGVyciAmJiBlcnIuc3RhY2sKICAgIH19KTsKfTsKCndpbmRvdy5ub3JtYWxpemVNb2R1bGUgPSBmdW5jdGlvbihwYXJlbnRJZCwgbW9kdWxlTmFtZSkgewogICAgLy8gbm9ybWFsaXplIHBsdWdpbiByZXF1aXJlcwogICAgaWYgKG1vZHVsZU5hbWUuaW5kZXhPZigiISIpICE9PSAtMSkgewogICAgICAgIHZhciBjaHVua3MgPSBtb2R1bGVOYW1lLnNwbGl0KCIhIik7CiAgICAgICAgcmV0dXJuIHdpbmRvdy5ub3JtYWxpemVNb2R1bGUocGFyZW50SWQsIGNodW5rc1swXSkgKyAiISIgKyB3aW5kb3cubm9ybWFsaXplTW9kdWxlKHBhcmVudElkLCBjaHVua3NbMV0pOwogICAgfQogICAgLy8gbm9ybWFsaXplIHJlbGF0aXZlIHJlcXVpcmVzCiAgICBpZiAobW9kdWxlTmFtZS5jaGFyQXQoMCkgPT0gIi4iKSB7CiAgICAgICAgdmFyIGJhc2UgPSBwYXJlbnRJZC5zcGxpdCgiLyIpLnNsaWNlKDAsIC0xKS5qb2luKCIvIik7CiAgICAgICAgbW9kdWxlTmFtZSA9IChiYXNlID8gYmFzZSArICIvIiA6ICIiKSArIG1vZHVsZU5hbWU7CiAgICAgICAgCiAgICAgICAgd2hpbGUgKG1vZHVsZU5hbWUuaW5kZXhPZigiLiIpICE9PSAtMSAmJiBwcmV2aW91cyAhPSBtb2R1bGVOYW1lKSB7CiAgICAgICAgICAgIHZhciBwcmV2aW91cyA9IG1vZHVsZU5hbWU7CiAgICAgICAgICAgIG1vZHVsZU5hbWUgPSBtb2R1bGVOYW1lLnJlcGxhY2UoL15cLlwvLywgIiIpLnJlcGxhY2UoL1wvXC5cLy8sICIvIikucmVwbGFjZSgvW15cL10rXC9cLlwuXC8vLCAiIik7CiAgICAgICAgfQogICAgfQogICAgCiAgICByZXR1cm4gbW9kdWxlTmFtZTsKfTsKCndpbmRvdy5yZXF1aXJlID0gZnVuY3Rpb24gcmVxdWlyZShwYXJlbnRJZCwgaWQpIHsKICAgIGlmICghaWQpIHsKICAgICAgICBpZCA9IHBhcmVudElkOwogICAgICAgIHBhcmVudElkID0gbnVsbDsKICAgIH0KICAgIGlmICghaWQuY2hhckF0KQogICAgICAgIHRocm93IG5ldyBFcnJvcigid29ya2VyLmpzIHJlcXVpcmUoKSBhY2NlcHRzIG9ubHkgKHBhcmVudElkLCBpZCkgYXMgYXJndW1lbnRzIik7CgogICAgaWQgPSB3aW5kb3cubm9ybWFsaXplTW9kdWxlKHBhcmVudElkLCBpZCk7CgogICAgdmFyIG1vZHVsZSA9IHdpbmRvdy5yZXF1aXJlLm1vZHVsZXNbaWRdOwogICAgaWYgKG1vZHVsZSkgewogICAgICAgIGlmICghbW9kdWxlLmluaXRpYWxpemVkKSB7CiAgICAgICAgICAgIG1vZHVsZS5pbml0aWFsaXplZCA9IHRydWU7CiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmZhY3RvcnkoKS5leHBvcnRzOwogICAgICAgIH0KICAgICAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7CiAgICB9CiAgIAogICAgaWYgKCF3aW5kb3cucmVxdWlyZS50bG5zKQogICAgICAgIHJldHVybiBjb25zb2xlLmxvZygidW5hYmxlIHRvIGxvYWQgIiArIGlkKTsKICAgIAogICAgdmFyIHBhdGggPSByZXNvbHZlTW9kdWxlSWQoaWQsIHdpbmRvdy5yZXF1aXJlLnRsbnMpOwogICAgaWYgKHBhdGguc2xpY2UoLTMpICE9ICIuanMiKSBwYXRoICs9ICIuanMiOwogICAgCiAgICB3aW5kb3cucmVxdWlyZS5pZCA9IGlkOwogICAgd2luZG93LnJlcXVpcmUubW9kdWxlc1tpZF0gPSB7fTsgLy8gcHJldmVudCBpbmZpbml0ZSBsb29wIG9uIGJyb2tlbiBtb2R1bGVzCiAgICBpbXBvcnRTY3JpcHRzKHBhdGgpOwogICAgcmV0dXJuIHdpbmRvdy5yZXF1aXJlKHBhcmVudElkLCBpZCk7Cn07CmZ1bmN0aW9uIHJlc29sdmVNb2R1bGVJZChpZCwgcGF0aHMpIHsKICAgIHZhciB0ZXN0UGF0aCA9IGlkLCB0YWlsID0gIiI7CiAgICB3aGlsZSAodGVzdFBhdGgpIHsKICAgICAgICB2YXIgYWxpYXMgPSBwYXRoc1t0ZXN0UGF0aF07CiAgICAgICAgaWYgKHR5cGVvZiBhbGlhcyA9PSAic3RyaW5nIikgewogICAgICAgICAgICByZXR1cm4gYWxpYXMgKyB0YWlsOwogICAgICAgIH0gZWxzZSBpZiAoYWxpYXMpIHsKICAgICAgICAgICAgcmV0dXJuICBhbGlhcy5sb2NhdGlvbi5yZXBsYWNlKC9cLyokLywgIi8iKSArICh0YWlsIHx8IGFsaWFzLm1haW4gfHwgYWxpYXMubmFtZSk7CiAgICAgICAgfSBlbHNlIGlmIChhbGlhcyA9PT0gZmFsc2UpIHsKICAgICAgICAgICAgcmV0dXJuICIiOwogICAgICAgIH0KICAgICAgICB2YXIgaSA9IHRlc3RQYXRoLmxhc3RJbmRleE9mKCIvIik7CiAgICAgICAgaWYgKGkgPT09IC0xKSBicmVhazsKICAgICAgICB0YWlsID0gdGVzdFBhdGguc3Vic3RyKGkpICsgdGFpbDsKICAgICAgICB0ZXN0UGF0aCA9IHRlc3RQYXRoLnNsaWNlKDAsIGkpOwogICAgfQogICAgcmV0dXJuIGlkOwp9CndpbmRvdy5yZXF1aXJlLm1vZHVsZXMgPSB7fTsKd2luZG93LnJlcXVpcmUudGxucyA9IHt9OwoKd2luZG93LmRlZmluZSA9IGZ1bmN0aW9uKGlkLCBkZXBzLCBmYWN0b3J5KSB7CiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAyKSB7CiAgICAgICAgZmFjdG9yeSA9IGRlcHM7CiAgICAgICAgaWYgKHR5cGVvZiBpZCAhPSAic3RyaW5nIikgewogICAgICAgICAgICBkZXBzID0gaWQ7CiAgICAgICAgICAgIGlkID0gd2luZG93LnJlcXVpcmUuaWQ7CiAgICAgICAgfQogICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpIHsKICAgICAgICBmYWN0b3J5ID0gaWQ7CiAgICAgICAgZGVwcyA9IFtdOwogICAgICAgIGlkID0gd2luZG93LnJlcXVpcmUuaWQ7CiAgICB9CiAgICAKICAgIGlmICh0eXBlb2YgZmFjdG9yeSAhPSAiZnVuY3Rpb24iKSB7CiAgICAgICAgd2luZG93LnJlcXVpcmUubW9kdWxlc1tpZF0gPSB7CiAgICAgICAgICAgIGV4cG9ydHM6IGZhY3RvcnksCiAgICAgICAgICAgIGluaXRpYWxpemVkOiB0cnVlCiAgICAgICAgfTsKICAgICAgICByZXR1cm47CiAgICB9CgogICAgaWYgKCFkZXBzLmxlbmd0aCkKICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyBkZXBlbmRlbmNpZXMsIHdlIGluamVjdCAicmVxdWlyZSIsICJleHBvcnRzIiBhbmQKICAgICAgICAvLyAibW9kdWxlIiBhcyBkZXBlbmRlbmNpZXMsIHRvIHByb3ZpZGUgQ29tbW9uSlMgY29tcGF0aWJpbGl0eS4KICAgICAgICBkZXBzID0gWyJyZXF1aXJlIiwgImV4cG9ydHMiLCAibW9kdWxlIl07CgogICAgdmFyIHJlcSA9IGZ1bmN0aW9uKGNoaWxkSWQpIHsKICAgICAgICByZXR1cm4gd2luZG93LnJlcXVpcmUoaWQsIGNoaWxkSWQpOwogICAgfTsKCiAgICB3aW5kb3cucmVxdWlyZS5tb2R1bGVzW2lkXSA9IHsKICAgICAgICBleHBvcnRzOiB7fSwKICAgICAgICBmYWN0b3J5OiBmdW5jdGlvbigpIHsKICAgICAgICAgICAgdmFyIG1vZHVsZSA9IHRoaXM7CiAgICAgICAgICAgIHZhciByZXR1cm5FeHBvcnRzID0gZmFjdG9yeS5hcHBseSh0aGlzLCBkZXBzLnNsaWNlKDAsIGZhY3RvcnkubGVuZ3RoKS5tYXAoZnVuY3Rpb24oZGVwKSB7CiAgICAgICAgICAgICAgICBzd2l0Y2ggKGRlcCkgewogICAgICAgICAgICAgICAgICAgIC8vIEJlY2F1c2UgInJlcXVpcmUiLCAiZXhwb3J0cyIgYW5kICJtb2R1bGUiIGFyZW4ndCBhY3R1YWwKICAgICAgICAgICAgICAgICAgICAvLyBkZXBlbmRlbmNpZXMsIHdlIG11c3QgaGFuZGxlIHRoZW0gc2VwZXJhdGVseS4KICAgICAgICAgICAgICAgICAgICBjYXNlICJyZXF1aXJlIjogcmV0dXJuIHJlcTsKICAgICAgICAgICAgICAgICAgICBjYXNlICJleHBvcnRzIjogcmV0dXJuIG1vZHVsZS5leHBvcnRzOwogICAgICAgICAgICAgICAgICAgIGNhc2UgIm1vZHVsZSI6ICByZXR1cm4gbW9kdWxlOwogICAgICAgICAgICAgICAgICAgIC8vIEJ1dCBmb3IgYWxsIG90aGVyIGRlcGVuZGVuY2llcywgd2UgY2FuIGp1c3QgZ28gYWhlYWQgYW5kCiAgICAgICAgICAgICAgICAgICAgLy8gcmVxdWlyZSB0aGVtLgogICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICAgICAgICByZXR1cm4gcmVxKGRlcCk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0pKTsKICAgICAgICAgICAgaWYgKHJldHVybkV4cG9ydHMpCiAgICAgICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJldHVybkV4cG9ydHM7CiAgICAgICAgICAgIHJldHVybiBtb2R1bGU7CiAgICAgICAgfQogICAgfTsKfTsKd2luZG93LmRlZmluZS5hbWQgPSB7fTsKd2luZG93LnJlcXVpcmUudGxucyA9IHt9Owp3aW5kb3cuaW5pdEJhc2VVcmxzICA9IGZ1bmN0aW9uIGluaXRCYXNlVXJscyh0b3BMZXZlbE5hbWVzcGFjZXMpIHsKICAgIGZvciAodmFyIGkgaW4gdG9wTGV2ZWxOYW1lc3BhY2VzKQogICAgICAgIHRoaXMucmVxdWlyZS50bG5zW2ldID0gdG9wTGV2ZWxOYW1lc3BhY2VzW2ldOwp9OwoKd2luZG93LmluaXRTZW5kZXIgPSBmdW5jdGlvbiBpbml0U2VuZGVyKCkgewoKICAgIHZhciBFdmVudEVtaXR0ZXIgPSB3aW5kb3cucmVxdWlyZSgiYWNlL2xpYi9ldmVudF9lbWl0dGVyIikuRXZlbnRFbWl0dGVyOwogICAgdmFyIG9vcCA9IHdpbmRvdy5yZXF1aXJlKCJhY2UvbGliL29vcCIpOwogICAgCiAgICB2YXIgU2VuZGVyID0gZnVuY3Rpb24oKSB7fTsKICAgIAogICAgKGZ1bmN0aW9uKCkgewogICAgICAgIAogICAgICAgIG9vcC5pbXBsZW1lbnQodGhpcywgRXZlbnRFbWl0dGVyKTsKICAgICAgICAgICAgICAgIAogICAgICAgIHRoaXMuY2FsbGJhY2sgPSBmdW5jdGlvbihkYXRhLCBjYWxsYmFja0lkKSB7CiAgICAgICAgICAgIHBvc3RNZXNzYWdlKHsKICAgICAgICAgICAgICAgIHR5cGU6ICJjYWxsIiwKICAgICAgICAgICAgICAgIGlkOiBjYWxsYmFja0lkLAogICAgICAgICAgICAgICAgZGF0YTogZGF0YQogICAgICAgICAgICB9KTsKICAgICAgICB9OwogICAgCiAgICAgICAgdGhpcy5lbWl0ID0gZnVuY3Rpb24obmFtZSwgZGF0YSkgewogICAgICAgICAgICBwb3N0TWVzc2FnZSh7CiAgICAgICAgICAgICAgICB0eXBlOiAiZXZlbnQiLAogICAgICAgICAgICAgICAgbmFtZTogbmFtZSwKICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEKICAgICAgICAgICAgfSk7CiAgICAgICAgfTsKICAgICAgICAKICAgIH0pLmNhbGwoU2VuZGVyLnByb3RvdHlwZSk7CiAgICAKICAgIHJldHVybiBuZXcgU2VuZGVyKCk7Cn07Cgp2YXIgbWFpbiA9IHdpbmRvdy5tYWluID0gbnVsbDsKdmFyIHNlbmRlciA9IHdpbmRvdy5zZW5kZXIgPSBudWxsOwoKd2luZG93Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGUpIHsKICAgIHZhciBtc2cgPSBlLmRhdGE7CiAgICBpZiAobXNnLmV2ZW50ICYmIHNlbmRlcikgewogICAgICAgIHNlbmRlci5fc2lnbmFsKG1zZy5ldmVudCwgbXNnLmRhdGEpOwogICAgfQogICAgZWxzZSBpZiAobXNnLmNvbW1hbmQpIHsKICAgICAgICBpZiAobWFpblttc2cuY29tbWFuZF0pCiAgICAgICAgICAgIG1haW5bbXNnLmNvbW1hbmRdLmFwcGx5KG1haW4sIG1zZy5hcmdzKTsKICAgICAgICBlbHNlIGlmICh3aW5kb3dbbXNnLmNvbW1hbmRdKQogICAgICAgICAgICB3aW5kb3dbbXNnLmNvbW1hbmRdLmFwcGx5KHdpbmRvdywgbXNnLmFyZ3MpOwogICAgICAgIGVsc2UKICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJVbmtub3duIGNvbW1hbmQ6IiArIG1zZy5jb21tYW5kKTsKICAgIH0KICAgIGVsc2UgaWYgKG1zZy5pbml0KSB7CiAgICAgICAgd2luZG93LmluaXRCYXNlVXJscyhtc2cudGxucyk7CiAgICAgICAgc2VuZGVyID0gd2luZG93LnNlbmRlciA9IHdpbmRvdy5pbml0U2VuZGVyKCk7CiAgICAgICAgdmFyIGNsYXp6ID0gdGhpcy5yZXF1aXJlKG1zZy5tb2R1bGUpW21zZy5jbGFzc25hbWVdOwogICAgICAgIG1haW4gPSB3aW5kb3cubWFpbiA9IG5ldyBjbGF6eihzZW5kZXIpOwogICAgfQp9Owp9KSh0aGlzKTsKCmFjZS5kZWZpbmUoImFjZS9saWIvb29wIixbXSwgZnVuY3Rpb24ocmVxdWlyZSwgZXhwb3J0cywgbW9kdWxlKXsidXNlIHN0cmljdCI7CmV4cG9ydHMuaW5oZXJpdHMgPSBmdW5jdGlvbiAoY3Rvciwgc3VwZXJDdG9yKSB7CiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvcjsKICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7CiAgICAgICAgY29uc3RydWN0b3I6IHsKICAgICAgICAgICAgdmFsdWU6IGN0b3IsCiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLAogICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSwKICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlCiAgICAgICAgfQogICAgfSk7Cn07CmV4cG9ydHMubWl4aW4gPSBmdW5jdGlvbiAob2JqLCBtaXhpbikgewogICAgZm9yICh2YXIga2V5IGluIG1peGluKSB7CiAgICAgICAgb2JqW2tleV0gPSBtaXhpbltrZXldOwogICAgfQogICAgcmV0dXJuIG9iajsKfTsKZXhwb3J0cy5pbXBsZW1lbnQgPSBmdW5jdGlvbiAocHJvdG8sIG1peGluKSB7CiAgICBleHBvcnRzLm1peGluKHByb3RvLCBtaXhpbik7Cn07Cgp9KTsKCmFjZS5kZWZpbmUoImFjZS9hcHBseV9kZWx0YSIsW10sIGZ1bmN0aW9uKHJlcXVpcmUsIGV4cG9ydHMsIG1vZHVsZSl7InVzZSBzdHJpY3QiOwpmdW5jdGlvbiB0aHJvd0RlbHRhRXJyb3IoZGVsdGEsIGVycm9yVGV4dCkgewogICAgY29uc29sZS5sb2coIkludmFsaWQgRGVsdGE6IiwgZGVsdGEpOwogICAgdGhyb3cgIkludmFsaWQgRGVsdGE6ICIgKyBlcnJvclRleHQ7Cn0KZnVuY3Rpb24gcG9zaXRpb25JbkRvY3VtZW50KGRvY0xpbmVzLCBwb3NpdGlvbikgewogICAgcmV0dXJuIHBvc2l0aW9uLnJvdyA+PSAwICYmIHBvc2l0aW9uLnJvdyA8IGRvY0xpbmVzLmxlbmd0aCAmJgogICAgICAgIHBvc2l0aW9uLmNvbHVtbiA+PSAwICYmIHBvc2l0aW9uLmNvbHVtbiA8PSBkb2NMaW5lc1twb3NpdGlvbi5yb3ddLmxlbmd0aDsKfQpmdW5jdGlvbiB2YWxpZGF0ZURlbHRhKGRvY0xpbmVzLCBkZWx0YSkgewogICAgaWYgKGRlbHRhLmFjdGlvbiAhPSAiaW5zZXJ0IiAmJiBkZWx0YS5hY3Rpb24gIT0gInJlbW92ZSIpCiAgICAgICAgdGhyb3dEZWx0YUVycm9yKGRlbHRhLCAiZGVsdGEuYWN0aW9uIG11c3QgYmUgJ2luc2VydCcgb3IgJ3JlbW92ZSciKTsKICAgIGlmICghKGRlbHRhLmxpbmVzIGluc3RhbmNlb2YgQXJyYXkpKQogICAgICAgIHRocm93RGVsdGFFcnJvcihkZWx0YSwgImRlbHRhLmxpbmVzIG11c3QgYmUgYW4gQXJyYXkiKTsKICAgIGlmICghZGVsdGEuc3RhcnQgfHwgIWRlbHRhLmVuZCkKICAgICAgICB0aHJvd0RlbHRhRXJyb3IoZGVsdGEsICJkZWx0YS5zdGFydC9lbmQgbXVzdCBiZSBhbiBwcmVzZW50Iik7CiAgICB2YXIgc3RhcnQgPSBkZWx0YS5zdGFydDsKICAgIGlmICghcG9zaXRpb25JbkRvY3VtZW50KGRvY0xpbmVzLCBkZWx0YS5zdGFydCkpCiAgICAgICAgdGhyb3dEZWx0YUVycm9yKGRlbHRhLCAiZGVsdGEuc3RhcnQgbXVzdCBiZSBjb250YWluZWQgaW4gZG9jdW1lbnQiKTsKICAgIHZhciBlbmQgPSBkZWx0YS5lbmQ7CiAgICBpZiAoZGVsdGEuYWN0aW9uID09ICJyZW1vdmUiICYmICFwb3NpdGlvbkluRG9jdW1lbnQoZG9jTGluZXMsIGVuZCkpCiAgICAgICAgdGhyb3dEZWx0YUVycm9yKGRlbHRhLCAiZGVsdGEuZW5kIG11c3QgY29udGFpbmVkIGluIGRvY3VtZW50IGZvciAncmVtb3ZlJyBhY3Rpb25zIik7CiAgICB2YXIgbnVtUmFuZ2VSb3dzID0gZW5kLnJvdyAtIHN0YXJ0LnJvdzsKICAgIHZhciBudW1SYW5nZUxhc3RMaW5lQ2hhcnMgPSAoZW5kLmNvbHVtbiAtIChudW1SYW5nZVJvd3MgPT0gMCA/IHN0YXJ0LmNvbHVtbiA6IDApKTsKICAgIGlmIChudW1SYW5nZVJvd3MgIT0gZGVsdGEubGluZXMubGVuZ3RoIC0gMSB8fCBkZWx0YS5saW5lc1tudW1SYW5nZVJvd3NdLmxlbmd0aCAhPSBudW1SYW5nZUxhc3RMaW5lQ2hhcnMpCiAgICAgICAgdGhyb3dEZWx0YUVycm9yKGRlbHRhLCAiZGVsdGEucmFuZ2UgbXVzdCBtYXRjaCBkZWx0YSBsaW5lcyIpOwp9CmV4cG9ydHMuYXBwbHlEZWx0YSA9IGZ1bmN0aW9uIChkb2NMaW5lcywgZGVsdGEsIGRvTm90VmFsaWRhdGUpIHsKICAgIHZhciByb3cgPSBkZWx0YS5zdGFydC5yb3c7CiAgICB2YXIgc3RhcnRDb2x1bW4gPSBkZWx0YS5zdGFydC5jb2x1bW47CiAgICB2YXIgbGluZSA9IGRvY0xpbmVzW3Jvd10gfHwgIiI7CiAgICBzd2l0Y2ggKGRlbHRhLmFjdGlvbikgewogICAgICAgIGNhc2UgImluc2VydCI6CiAgICAgICAgICAgIHZhciBsaW5lcyA9IGRlbHRhLmxpbmVzOwogICAgICAgICAgICBpZiAobGluZXMubGVuZ3RoID09PSAxKSB7CiAgICAgICAgICAgICAgICBkb2NMaW5lc1tyb3ddID0gbGluZS5zdWJzdHJpbmcoMCwgc3RhcnRDb2x1bW4pICsgZGVsdGEubGluZXNbMF0gKyBsaW5lLnN1YnN0cmluZyhzdGFydENvbHVtbik7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtyb3csIDFdLmNvbmNhdChkZWx0YS5saW5lcyk7CiAgICAgICAgICAgICAgICBkb2NMaW5lcy5zcGxpY2UuYXBwbHkoZG9jTGluZXMsIGFyZ3MpOwogICAgICAgICAgICAgICAgZG9jTGluZXNbcm93XSA9IGxpbmUuc3Vic3RyaW5nKDAsIHN0YXJ0Q29sdW1uKSArIGRvY0xpbmVzW3Jvd107CiAgICAgICAgICAgICAgICBkb2NMaW5lc1tyb3cgKyBkZWx0YS5saW5lcy5sZW5ndGggLSAxXSArPSBsaW5lLnN1YnN0cmluZyhzdGFydENvbHVtbik7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAicmVtb3ZlIjoKICAgICAgICAgICAgdmFyIGVuZENvbHVtbiA9IGRlbHRhLmVuZC5jb2x1bW47CiAgICAgICAgICAgIHZhciBlbmRSb3cgPSBkZWx0YS5lbmQucm93OwogICAgICAgICAgICBpZiAocm93ID09PSBlbmRSb3cpIHsKICAgICAgICAgICAgICAgIGRvY0xpbmVzW3Jvd10gPSBsaW5lLnN1YnN0cmluZygwLCBzdGFydENvbHVtbikgKyBsaW5lLnN1YnN0cmluZyhlbmRDb2x1bW4pOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgZG9jTGluZXMuc3BsaWNlKHJvdywgZW5kUm93IC0gcm93ICsgMSwgbGluZS5zdWJzdHJpbmcoMCwgc3RhcnRDb2x1bW4pICsgZG9jTGluZXNbZW5kUm93XS5zdWJzdHJpbmcoZW5kQ29sdW1uKSk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgYnJlYWs7CiAgICB9Cn07Cgp9KTsKCmFjZS5kZWZpbmUoImFjZS9saWIvZXZlbnRfZW1pdHRlciIsW10sIGZ1bmN0aW9uKHJlcXVpcmUsIGV4cG9ydHMsIG1vZHVsZSl7InVzZSBzdHJpY3QiOwp2YXIgRXZlbnRFbWl0dGVyID0ge307CnZhciBzdG9wUHJvcGFnYXRpb24gPSBmdW5jdGlvbiAoKSB7IHRoaXMucHJvcGFnYXRpb25TdG9wcGVkID0gdHJ1ZTsgfTsKdmFyIHByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gKCkgeyB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlOyB9OwpFdmVudEVtaXR0ZXIuX2VtaXQgPQogICAgRXZlbnRFbWl0dGVyLl9kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgZSkgewogICAgICAgIHRoaXMuX2V2ZW50UmVnaXN0cnkgfHwgKHRoaXMuX2V2ZW50UmVnaXN0cnkgPSB7fSk7CiAgICAgICAgdGhpcy5fZGVmYXVsdEhhbmRsZXJzIHx8ICh0aGlzLl9kZWZhdWx0SGFuZGxlcnMgPSB7fSk7CiAgICAgICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50UmVnaXN0cnlbZXZlbnROYW1lXSB8fCBbXTsKICAgICAgICB2YXIgZGVmYXVsdEhhbmRsZXIgPSB0aGlzLl9kZWZhdWx0SGFuZGxlcnNbZXZlbnROYW1lXTsKICAgICAgICBpZiAoIWxpc3RlbmVycy5sZW5ndGggJiYgIWRlZmF1bHRIYW5kbGVyKQogICAgICAgICAgICByZXR1cm47CiAgICAgICAgaWYgKHR5cGVvZiBlICE9ICJvYmplY3QiIHx8ICFlKQogICAgICAgICAgICBlID0ge307CiAgICAgICAgaWYgKCFlLnR5cGUpCiAgICAgICAgICAgIGUudHlwZSA9IGV2ZW50TmFtZTsKICAgICAgICBpZiAoIWUuc3RvcFByb3BhZ2F0aW9uKQogICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbiA9IHN0b3BQcm9wYWdhdGlvbjsKICAgICAgICBpZiAoIWUucHJldmVudERlZmF1bHQpCiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQgPSBwcmV2ZW50RGVmYXVsdDsKICAgICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuc2xpY2UoKTsKICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykgewogICAgICAgICAgICBsaXN0ZW5lcnNbaV0oZSwgdGhpcyk7CiAgICAgICAgICAgIGlmIChlLnByb3BhZ2F0aW9uU3RvcHBlZCkKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgIH0KICAgICAgICBpZiAoZGVmYXVsdEhhbmRsZXIgJiYgIWUuZGVmYXVsdFByZXZlbnRlZCkKICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRIYW5kbGVyKGUsIHRoaXMpOwogICAgfTsKRXZlbnRFbWl0dGVyLl9zaWduYWwgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBlKSB7CiAgICB2YXIgbGlzdGVuZXJzID0gKHRoaXMuX2V2ZW50UmVnaXN0cnkgfHwge30pW2V2ZW50TmFtZV07CiAgICBpZiAoIWxpc3RlbmVycykKICAgICAgICByZXR1cm47CiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuc2xpY2UoKTsKICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKQogICAgICAgIGxpc3RlbmVyc1tpXShlLCB0aGlzKTsKfTsKRXZlbnRFbWl0dGVyLm9uY2UgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBjYWxsYmFjaykgewogICAgdmFyIF9zZWxmID0gdGhpczsKICAgIHRoaXMub24oZXZlbnROYW1lLCBmdW5jdGlvbiBuZXdDYWxsYmFjaygpIHsKICAgICAgICBfc2VsZi5vZmYoZXZlbnROYW1lLCBuZXdDYWxsYmFjayk7CiAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0pOwogICAgaWYgKCFjYWxsYmFjaykgewogICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgewogICAgICAgICAgICBjYWxsYmFjayA9IHJlc29sdmU7CiAgICAgICAgfSk7CiAgICB9Cn07CkV2ZW50RW1pdHRlci5zZXREZWZhdWx0SGFuZGxlciA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGNhbGxiYWNrKSB7CiAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLl9kZWZhdWx0SGFuZGxlcnM7CiAgICBpZiAoIWhhbmRsZXJzKQogICAgICAgIGhhbmRsZXJzID0gdGhpcy5fZGVmYXVsdEhhbmRsZXJzID0geyBfZGlzYWJsZWRfOiB7fSB9OwogICAgaWYgKGhhbmRsZXJzW2V2ZW50TmFtZV0pIHsKICAgICAgICB2YXIgb2xkID0gaGFuZGxlcnNbZXZlbnROYW1lXTsKICAgICAgICB2YXIgZGlzYWJsZWQgPSBoYW5kbGVycy5fZGlzYWJsZWRfW2V2ZW50TmFtZV07CiAgICAgICAgaWYgKCFkaXNhYmxlZCkKICAgICAgICAgICAgaGFuZGxlcnMuX2Rpc2FibGVkX1tldmVudE5hbWVdID0gZGlzYWJsZWQgPSBbXTsKICAgICAgICBkaXNhYmxlZC5wdXNoKG9sZCk7CiAgICAgICAgdmFyIGkgPSBkaXNhYmxlZC5pbmRleE9mKGNhbGxiYWNrKTsKICAgICAgICBpZiAoaSAhPSAtMSkKICAgICAgICAgICAgZGlzYWJsZWQuc3BsaWNlKGksIDEpOwogICAgfQogICAgaGFuZGxlcnNbZXZlbnROYW1lXSA9IGNhbGxiYWNrOwp9OwpFdmVudEVtaXR0ZXIucmVtb3ZlRGVmYXVsdEhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBjYWxsYmFjaykgewogICAgdmFyIGhhbmRsZXJzID0gdGhpcy5fZGVmYXVsdEhhbmRsZXJzOwogICAgaWYgKCFoYW5kbGVycykKICAgICAgICByZXR1cm47CiAgICB2YXIgZGlzYWJsZWQgPSBoYW5kbGVycy5fZGlzYWJsZWRfW2V2ZW50TmFtZV07CiAgICBpZiAoaGFuZGxlcnNbZXZlbnROYW1lXSA9PSBjYWxsYmFjaykgewogICAgICAgIGlmIChkaXNhYmxlZCkKICAgICAgICAgICAgdGhpcy5zZXREZWZhdWx0SGFuZGxlcihldmVudE5hbWUsIGRpc2FibGVkLnBvcCgpKTsKICAgIH0KICAgIGVsc2UgaWYgKGRpc2FibGVkKSB7CiAgICAgICAgdmFyIGkgPSBkaXNhYmxlZC5pbmRleE9mKGNhbGxiYWNrKTsKICAgICAgICBpZiAoaSAhPSAtMSkKICAgICAgICAgICAgZGlzYWJsZWQuc3BsaWNlKGksIDEpOwogICAgfQp9OwpFdmVudEVtaXR0ZXIub24gPQogICAgRXZlbnRFbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBjYWxsYmFjaywgY2FwdHVyaW5nKSB7CiAgICAgICAgdGhpcy5fZXZlbnRSZWdpc3RyeSA9IHRoaXMuX2V2ZW50UmVnaXN0cnkgfHwge307CiAgICAgICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50UmVnaXN0cnlbZXZlbnROYW1lXTsKICAgICAgICBpZiAoIWxpc3RlbmVycykKICAgICAgICAgICAgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRSZWdpc3RyeVtldmVudE5hbWVdID0gW107CiAgICAgICAgaWYgKGxpc3RlbmVycy5pbmRleE9mKGNhbGxiYWNrKSA9PSAtMSkKICAgICAgICAgICAgbGlzdGVuZXJzW2NhcHR1cmluZyA/ICJ1bnNoaWZ0IiA6ICJwdXNoIl0oY2FsbGJhY2spOwogICAgICAgIHJldHVybiBjYWxsYmFjazsKICAgIH07CkV2ZW50RW1pdHRlci5vZmYgPQogICAgRXZlbnRFbWl0dGVyLnJlbW92ZUxpc3RlbmVyID0KICAgICAgICBFdmVudEVtaXR0ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGNhbGxiYWNrKSB7CiAgICAgICAgICAgIHRoaXMuX2V2ZW50UmVnaXN0cnkgPSB0aGlzLl9ldmVudFJlZ2lzdHJ5IHx8IHt9OwogICAgICAgICAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRSZWdpc3RyeVtldmVudE5hbWVdOwogICAgICAgICAgICBpZiAoIWxpc3RlbmVycykKICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgdmFyIGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2YoY2FsbGJhY2spOwogICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKQogICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7CiAgICAgICAgfTsKRXZlbnRFbWl0dGVyLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uIChldmVudE5hbWUpIHsKICAgIGlmICghZXZlbnROYW1lKQogICAgICAgIHRoaXMuX2V2ZW50UmVnaXN0cnkgPSB0aGlzLl9kZWZhdWx0SGFuZGxlcnMgPSB1bmRlZmluZWQ7CiAgICBpZiAodGhpcy5fZXZlbnRSZWdpc3RyeSkKICAgICAgICB0aGlzLl9ldmVudFJlZ2lzdHJ5W2V2ZW50TmFtZV0gPSB1bmRlZmluZWQ7CiAgICBpZiAodGhpcy5fZGVmYXVsdEhhbmRsZXJzKQogICAgICAgIHRoaXMuX2RlZmF1bHRIYW5kbGVyc1tldmVudE5hbWVdID0gdW5kZWZpbmVkOwp9OwpleHBvcnRzLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjsKCn0pOwoKYWNlLmRlZmluZSgiYWNlL3JhbmdlIixbXSwgZnVuY3Rpb24ocmVxdWlyZSwgZXhwb3J0cywgbW9kdWxlKXsidXNlIHN0cmljdCI7CnZhciBSYW5nZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHsKICAgIGZ1bmN0aW9uIFJhbmdlKHN0YXJ0Um93LCBzdGFydENvbHVtbiwgZW5kUm93LCBlbmRDb2x1bW4pIHsKICAgICAgICB0aGlzLnN0YXJ0ID0gewogICAgICAgICAgICByb3c6IHN0YXJ0Um93LAogICAgICAgICAgICBjb2x1bW46IHN0YXJ0Q29sdW1uCiAgICAgICAgfTsKICAgICAgICB0aGlzLmVuZCA9IHsKICAgICAgICAgICAgcm93OiBlbmRSb3csCiAgICAgICAgICAgIGNvbHVtbjogZW5kQ29sdW1uCiAgICAgICAgfTsKICAgIH0KICAgIFJhbmdlLnByb3RvdHlwZS5pc0VxdWFsID0gZnVuY3Rpb24gKHJhbmdlKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQucm93ID09PSByYW5nZS5zdGFydC5yb3cgJiYKICAgICAgICAgICAgdGhpcy5lbmQucm93ID09PSByYW5nZS5lbmQucm93ICYmCiAgICAgICAgICAgIHRoaXMuc3RhcnQuY29sdW1uID09PSByYW5nZS5zdGFydC5jb2x1bW4gJiYKICAgICAgICAgICAgdGhpcy5lbmQuY29sdW1uID09PSByYW5nZS5lbmQuY29sdW1uOwogICAgfTsKICAgIFJhbmdlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHsKICAgICAgICByZXR1cm4gKCJSYW5nZTogWyIgKyB0aGlzLnN0YXJ0LnJvdyArICIvIiArIHRoaXMuc3RhcnQuY29sdW1uICsKICAgICAgICAgICAgIl0gLT4gWyIgKyB0aGlzLmVuZC5yb3cgKyAiLyIgKyB0aGlzLmVuZC5jb2x1bW4gKyAiXSIpOwogICAgfTsKICAgIFJhbmdlLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChyb3csIGNvbHVtbikgewogICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUocm93LCBjb2x1bW4pID09IDA7CiAgICB9OwogICAgUmFuZ2UucHJvdG90eXBlLmNvbXBhcmVSYW5nZSA9IGZ1bmN0aW9uIChyYW5nZSkgewogICAgICAgIHZhciBjbXAsIGVuZCA9IHJhbmdlLmVuZCwgc3RhcnQgPSByYW5nZS5zdGFydDsKICAgICAgICBjbXAgPSB0aGlzLmNvbXBhcmUoZW5kLnJvdywgZW5kLmNvbHVtbik7CiAgICAgICAgaWYgKGNtcCA9PSAxKSB7CiAgICAgICAgICAgIGNtcCA9IHRoaXMuY29tcGFyZShzdGFydC5yb3csIHN0YXJ0LmNvbHVtbik7CiAgICAgICAgICAgIGlmIChjbXAgPT0gMSkgewogICAgICAgICAgICAgICAgcmV0dXJuIDI7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZSBpZiAoY21wID09IDApIHsKICAgICAgICAgICAgICAgIHJldHVybiAxOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgcmV0dXJuIDA7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgZWxzZSBpZiAoY21wID09IC0xKSB7CiAgICAgICAgICAgIHJldHVybiAtMjsKICAgICAgICB9CiAgICAgICAgZWxzZSB7CiAgICAgICAgICAgIGNtcCA9IHRoaXMuY29tcGFyZShzdGFydC5yb3csIHN0YXJ0LmNvbHVtbik7CiAgICAgICAgICAgIGlmIChjbXAgPT0gLTEpIHsKICAgICAgICAgICAgICAgIHJldHVybiAtMTsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIGlmIChjbXAgPT0gMSkgewogICAgICAgICAgICAgICAgcmV0dXJuIDQyOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgcmV0dXJuIDA7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICB9OwogICAgUmFuZ2UucHJvdG90eXBlLmNvbXBhcmVQb2ludCA9IGZ1bmN0aW9uIChwKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZShwLnJvdywgcC5jb2x1bW4pOwogICAgfTsKICAgIFJhbmdlLnByb3RvdHlwZS5jb250YWluc1JhbmdlID0gZnVuY3Rpb24gKHJhbmdlKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZVBvaW50KHJhbmdlLnN0YXJ0KSA9PSAwICYmIHRoaXMuY29tcGFyZVBvaW50KHJhbmdlLmVuZCkgPT0gMDsKICAgIH07CiAgICBSYW5nZS5wcm90b3R5cGUuaW50ZXJzZWN0cyA9IGZ1bmN0aW9uIChyYW5nZSkgewogICAgICAgIHZhciBjbXAgPSB0aGlzLmNvbXBhcmVSYW5nZShyYW5nZSk7CiAgICAgICAgcmV0dXJuIChjbXAgPT0gLTEgfHwgY21wID09IDAgfHwgY21wID09IDEpOwogICAgfTsKICAgIFJhbmdlLnByb3RvdHlwZS5pc0VuZCA9IGZ1bmN0aW9uIChyb3csIGNvbHVtbikgewogICAgICAgIHJldHVybiB0aGlzLmVuZC5yb3cgPT0gcm93ICYmIHRoaXMuZW5kLmNvbHVtbiA9PSBjb2x1bW47CiAgICB9OwogICAgUmFuZ2UucHJvdG90eXBlLmlzU3RhcnQgPSBmdW5jdGlvbiAocm93LCBjb2x1bW4pIHsKICAgICAgICByZXR1cm4gdGhpcy5zdGFydC5yb3cgPT0gcm93ICYmIHRoaXMuc3RhcnQuY29sdW1uID09IGNvbHVtbjsKICAgIH07CiAgICBSYW5nZS5wcm90b3R5cGUuc2V0U3RhcnQgPSBmdW5jdGlvbiAocm93LCBjb2x1bW4pIHsKICAgICAgICBpZiAodHlwZW9mIHJvdyA9PSAib2JqZWN0IikgewogICAgICAgICAgICB0aGlzLnN0YXJ0LmNvbHVtbiA9IHJvdy5jb2x1bW47CiAgICAgICAgICAgIHRoaXMuc3RhcnQucm93ID0gcm93LnJvdzsKICAgICAgICB9CiAgICAgICAgZWxzZSB7CiAgICAgICAgICAgIHRoaXMuc3RhcnQucm93ID0gcm93OwogICAgICAgICAgICB0aGlzLnN0YXJ0LmNvbHVtbiA9IGNvbHVtbjsKICAgICAgICB9CiAgICB9OwogICAgUmFuZ2UucHJvdG90eXBlLnNldEVuZCA9IGZ1bmN0aW9uIChyb3csIGNvbHVtbikgewogICAgICAgIGlmICh0eXBlb2Ygcm93ID09ICJvYmplY3QiKSB7CiAgICAgICAgICAgIHRoaXMuZW5kLmNvbHVtbiA9IHJvdy5jb2x1bW47CiAgICAgICAgICAgIHRoaXMuZW5kLnJvdyA9IHJvdy5yb3c7CiAgICAgICAgfQogICAgICAgIGVsc2UgewogICAgICAgICAgICB0aGlzLmVuZC5yb3cgPSByb3c7CiAgICAgICAgICAgIHRoaXMuZW5kLmNvbHVtbiA9IGNvbHVtbjsKICAgICAgICB9CiAgICB9OwogICAgUmFuZ2UucHJvdG90eXBlLmluc2lkZSA9IGZ1bmN0aW9uIChyb3csIGNvbHVtbikgewogICAgICAgIGlmICh0aGlzLmNvbXBhcmUocm93LCBjb2x1bW4pID09IDApIHsKICAgICAgICAgICAgaWYgKHRoaXMuaXNFbmQocm93LCBjb2x1bW4pIHx8IHRoaXMuaXNTdGFydChyb3csIGNvbHVtbikpIHsKICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOwogICAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIHJldHVybiBmYWxzZTsKICAgIH07CiAgICBSYW5nZS5wcm90b3R5cGUuaW5zaWRlU3RhcnQgPSBmdW5jdGlvbiAocm93LCBjb2x1bW4pIHsKICAgICAgICBpZiAodGhpcy5jb21wYXJlKHJvdywgY29sdW1uKSA9PSAwKSB7CiAgICAgICAgICAgIGlmICh0aGlzLmlzRW5kKHJvdywgY29sdW1uKSkgewogICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgfTsKICAgIFJhbmdlLnByb3RvdHlwZS5pbnNpZGVFbmQgPSBmdW5jdGlvbiAocm93LCBjb2x1bW4pIHsKICAgICAgICBpZiAodGhpcy5jb21wYXJlKHJvdywgY29sdW1uKSA9PSAwKSB7CiAgICAgICAgICAgIGlmICh0aGlzLmlzU3RhcnQocm93LCBjb2x1bW4pKSB7CiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICByZXR1cm4gZmFsc2U7CiAgICB9OwogICAgUmFuZ2UucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiAocm93LCBjb2x1bW4pIHsKICAgICAgICBpZiAoIXRoaXMuaXNNdWx0aUxpbmUoKSkgewogICAgICAgICAgICBpZiAocm93ID09PSB0aGlzLnN0YXJ0LnJvdykgewogICAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbiA8IHRoaXMuc3RhcnQuY29sdW1uID8gLTEgOiAoY29sdW1uID4gdGhpcy5lbmQuY29sdW1uID8gMSA6IDApOwogICAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIGlmIChyb3cgPCB0aGlzLnN0YXJ0LnJvdykKICAgICAgICAgICAgcmV0dXJuIC0xOwogICAgICAgIGlmIChyb3cgPiB0aGlzLmVuZC5yb3cpCiAgICAgICAgICAgIHJldHVybiAxOwogICAgICAgIGlmICh0aGlzLnN0YXJ0LnJvdyA9PT0gcm93KQogICAgICAgICAgICByZXR1cm4gY29sdW1uID49IHRoaXMuc3RhcnQuY29sdW1uID8gMCA6IC0xOwogICAgICAgIGlmICh0aGlzLmVuZC5yb3cgPT09IHJvdykKICAgICAgICAgICAgcmV0dXJuIGNvbHVtbiA8PSB0aGlzLmVuZC5jb2x1bW4gPyAwIDogMTsKICAgICAgICByZXR1cm4gMDsKICAgIH07CiAgICBSYW5nZS5wcm90b3R5cGUuY29tcGFyZVN0YXJ0ID0gZnVuY3Rpb24gKHJvdywgY29sdW1uKSB7CiAgICAgICAgaWYgKHRoaXMuc3RhcnQucm93ID09IHJvdyAmJiB0aGlzLnN0YXJ0LmNvbHVtbiA9PSBjb2x1bW4pIHsKICAgICAgICAgICAgcmV0dXJuIC0xOwogICAgICAgIH0KICAgICAgICBlbHNlIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZShyb3csIGNvbHVtbik7CiAgICAgICAgfQogICAgfTsKICAgIFJhbmdlLnByb3RvdHlwZS5jb21wYXJlRW5kID0gZnVuY3Rpb24gKHJvdywgY29sdW1uKSB7CiAgICAgICAgaWYgKHRoaXMuZW5kLnJvdyA9PSByb3cgJiYgdGhpcy5lbmQuY29sdW1uID09IGNvbHVtbikgewogICAgICAgICAgICByZXR1cm4gMTsKICAgICAgICB9CiAgICAgICAgZWxzZSB7CiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUocm93LCBjb2x1bW4pOwogICAgICAgIH0KICAgIH07CiAgICBSYW5nZS5wcm90b3R5cGUuY29tcGFyZUluc2lkZSA9IGZ1bmN0aW9uIChyb3csIGNvbHVtbikgewogICAgICAgIGlmICh0aGlzLmVuZC5yb3cgPT0gcm93ICYmIHRoaXMuZW5kLmNvbHVtbiA9PSBjb2x1bW4pIHsKICAgICAgICAgICAgcmV0dXJuIDE7CiAgICAgICAgfQogICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhcnQucm93ID09IHJvdyAmJiB0aGlzLnN0YXJ0LmNvbHVtbiA9PSBjb2x1bW4pIHsKICAgICAgICAgICAgcmV0dXJuIC0xOwogICAgICAgIH0KICAgICAgICBlbHNlIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZShyb3csIGNvbHVtbik7CiAgICAgICAgfQogICAgfTsKICAgIFJhbmdlLnByb3RvdHlwZS5jbGlwUm93cyA9IGZ1bmN0aW9uIChmaXJzdFJvdywgbGFzdFJvdykgewogICAgICAgIGlmICh0aGlzLmVuZC5yb3cgPiBsYXN0Um93KQogICAgICAgICAgICB2YXIgZW5kID0geyByb3c6IGxhc3RSb3cgKyAxLCBjb2x1bW46IDAgfTsKICAgICAgICBlbHNlIGlmICh0aGlzLmVuZC5yb3cgPCBmaXJzdFJvdykKICAgICAgICAgICAgdmFyIGVuZCA9IHsgcm93OiBmaXJzdFJvdywgY29sdW1uOiAwIH07CiAgICAgICAgaWYgKHRoaXMuc3RhcnQucm93ID4gbGFzdFJvdykKICAgICAgICAgICAgdmFyIHN0YXJ0ID0geyByb3c6IGxhc3RSb3cgKyAxLCBjb2x1bW46IDAgfTsKICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXJ0LnJvdyA8IGZpcnN0Um93KQogICAgICAgICAgICB2YXIgc3RhcnQgPSB7IHJvdzogZmlyc3RSb3csIGNvbHVtbjogMCB9OwogICAgICAgIHJldHVybiBSYW5nZS5mcm9tUG9pbnRzKHN0YXJ0IHx8IHRoaXMuc3RhcnQsIGVuZCB8fCB0aGlzLmVuZCk7CiAgICB9OwogICAgUmFuZ2UucHJvdG90eXBlLmV4dGVuZCA9IGZ1bmN0aW9uIChyb3csIGNvbHVtbikgewogICAgICAgIHZhciBjbXAgPSB0aGlzLmNvbXBhcmUocm93LCBjb2x1bW4pOwogICAgICAgIGlmIChjbXAgPT0gMCkKICAgICAgICAgICAgcmV0dXJuIHRoaXM7CiAgICAgICAgZWxzZSBpZiAoY21wID09IC0xKQogICAgICAgICAgICB2YXIgc3RhcnQgPSB7IHJvdzogcm93LCBjb2x1bW46IGNvbHVtbiB9OwogICAgICAgIGVsc2UKICAgICAgICAgICAgdmFyIGVuZCA9IHsgcm93OiByb3csIGNvbHVtbjogY29sdW1uIH07CiAgICAgICAgcmV0dXJuIFJhbmdlLmZyb21Qb2ludHMoc3RhcnQgfHwgdGhpcy5zdGFydCwgZW5kIHx8IHRoaXMuZW5kKTsKICAgIH07CiAgICBSYW5nZS5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHsKICAgICAgICByZXR1cm4gKHRoaXMuc3RhcnQucm93ID09PSB0aGlzLmVuZC5yb3cgJiYgdGhpcy5zdGFydC5jb2x1bW4gPT09IHRoaXMuZW5kLmNvbHVtbik7CiAgICB9OwogICAgUmFuZ2UucHJvdG90eXBlLmlzTXVsdGlMaW5lID0gZnVuY3Rpb24gKCkgewogICAgICAgIHJldHVybiAodGhpcy5zdGFydC5yb3cgIT09IHRoaXMuZW5kLnJvdyk7CiAgICB9OwogICAgUmFuZ2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkgewogICAgICAgIHJldHVybiBSYW5nZS5mcm9tUG9pbnRzKHRoaXMuc3RhcnQsIHRoaXMuZW5kKTsKICAgIH07CiAgICBSYW5nZS5wcm90b3R5cGUuY29sbGFwc2VSb3dzID0gZnVuY3Rpb24gKCkgewogICAgICAgIGlmICh0aGlzLmVuZC5jb2x1bW4gPT0gMCkKICAgICAgICAgICAgcmV0dXJuIG5ldyBSYW5nZSh0aGlzLnN0YXJ0LnJvdywgMCwgTWF0aC5tYXgodGhpcy5zdGFydC5yb3csIHRoaXMuZW5kLnJvdyAtIDEpLCAwKTsKICAgICAgICBlbHNlCiAgICAgICAgICAgIHJldHVybiBuZXcgUmFuZ2UodGhpcy5zdGFydC5yb3csIDAsIHRoaXMuZW5kLnJvdywgMCk7CiAgICB9OwogICAgUmFuZ2UucHJvdG90eXBlLnRvU2NyZWVuUmFuZ2UgPSBmdW5jdGlvbiAoc2Vzc2lvbikgewogICAgICAgIHZhciBzY3JlZW5Qb3NTdGFydCA9IHNlc3Npb24uZG9jdW1lbnRUb1NjcmVlblBvc2l0aW9uKHRoaXMuc3RhcnQpOwogICAgICAgIHZhciBzY3JlZW5Qb3NFbmQgPSBzZXNzaW9uLmRvY3VtZW50VG9TY3JlZW5Qb3NpdGlvbih0aGlzLmVuZCk7CiAgICAgICAgcmV0dXJuIG5ldyBSYW5nZShzY3JlZW5Qb3NTdGFydC5yb3csIHNjcmVlblBvc1N0YXJ0LmNvbHVtbiwgc2NyZWVuUG9zRW5kLnJvdywgc2NyZWVuUG9zRW5kLmNvbHVtbik7CiAgICB9OwogICAgUmFuZ2UucHJvdG90eXBlLm1vdmVCeSA9IGZ1bmN0aW9uIChyb3csIGNvbHVtbikgewogICAgICAgIHRoaXMuc3RhcnQucm93ICs9IHJvdzsKICAgICAgICB0aGlzLnN0YXJ0LmNvbHVtbiArPSBjb2x1bW47CiAgICAgICAgdGhpcy5lbmQucm93ICs9IHJvdzsKICAgICAgICB0aGlzLmVuZC5jb2x1bW4gKz0gY29sdW1uOwogICAgfTsKICAgIHJldHVybiBSYW5nZTsKfSgpKTsKUmFuZ2UuZnJvbVBvaW50cyA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7CiAgICByZXR1cm4gbmV3IFJhbmdlKHN0YXJ0LnJvdywgc3RhcnQuY29sdW1uLCBlbmQucm93LCBlbmQuY29sdW1uKTsKfTsKUmFuZ2UuY29tcGFyZVBvaW50cyA9IGZ1bmN0aW9uIChwMSwgcDIpIHsKICAgIHJldHVybiBwMS5yb3cgLSBwMi5yb3cgfHwgcDEuY29sdW1uIC0gcDIuY29sdW1uOwp9OwpleHBvcnRzLlJhbmdlID0gUmFuZ2U7Cgp9KTsKCmFjZS5kZWZpbmUoImFjZS9hbmNob3IiLFtdLCBmdW5jdGlvbihyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpeyJ1c2Ugc3RyaWN0IjsKdmFyIG9vcCA9IHJlcXVpcmUoIi4vbGliL29vcCIpOwp2YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgiLi9saWIvZXZlbnRfZW1pdHRlciIpLkV2ZW50RW1pdHRlcjsKdmFyIEFuY2hvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHsKICAgIGZ1bmN0aW9uIEFuY2hvcihkb2MsIHJvdywgY29sdW1uKSB7CiAgICAgICAgdGhpcy4kb25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7CiAgICAgICAgdGhpcy5hdHRhY2goZG9jKTsKICAgICAgICBpZiAodHlwZW9mIHJvdyAhPSAibnVtYmVyIikKICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihyb3cucm93LCByb3cuY29sdW1uKTsKICAgICAgICBlbHNlCiAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24ocm93LCBjb2x1bW4pOwogICAgfQogICAgQW5jaG9yLnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHsKICAgICAgICByZXR1cm4gdGhpcy4kY2xpcFBvc2l0aW9uVG9Eb2N1bWVudCh0aGlzLnJvdywgdGhpcy5jb2x1bW4pOwogICAgfTsKICAgIEFuY2hvci5wcm90b3R5cGUuZ2V0RG9jdW1lbnQgPSBmdW5jdGlvbiAoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuZG9jdW1lbnQ7CiAgICB9OwogICAgQW5jaG9yLnByb3RvdHlwZS5vbkNoYW5nZSA9IGZ1bmN0aW9uIChkZWx0YSkgewogICAgICAgIGlmIChkZWx0YS5zdGFydC5yb3cgPT0gZGVsdGEuZW5kLnJvdyAmJiBkZWx0YS5zdGFydC5yb3cgIT0gdGhpcy5yb3cpCiAgICAgICAgICAgIHJldHVybjsKICAgICAgICBpZiAoZGVsdGEuc3RhcnQucm93ID4gdGhpcy5yb3cpCiAgICAgICAgICAgIHJldHVybjsKICAgICAgICB2YXIgcG9pbnQgPSAkZ2V0VHJhbnNmb3JtZWRQb2ludChkZWx0YSwgeyByb3c6IHRoaXMucm93LCBjb2x1bW46IHRoaXMuY29sdW1uIH0sIHRoaXMuJGluc2VydFJpZ2h0KTsKICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHBvaW50LnJvdywgcG9pbnQuY29sdW1uLCB0cnVlKTsKICAgIH07CiAgICBBbmNob3IucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24gKHJvdywgY29sdW1uLCBub0NsaXApIHsKICAgICAgICB2YXIgcG9zOwogICAgICAgIGlmIChub0NsaXApIHsKICAgICAgICAgICAgcG9zID0gewogICAgICAgICAgICAgICAgcm93OiByb3csCiAgICAgICAgICAgICAgICBjb2x1bW46IGNvbHVtbgogICAgICAgICAgICB9OwogICAgICAgIH0KICAgICAgICBlbHNlIHsKICAgICAgICAgICAgcG9zID0gdGhpcy4kY2xpcFBvc2l0aW9uVG9Eb2N1bWVudChyb3csIGNvbHVtbik7CiAgICAgICAgfQogICAgICAgIGlmICh0aGlzLnJvdyA9PSBwb3Mucm93ICYmIHRoaXMuY29sdW1uID09IHBvcy5jb2x1bW4pCiAgICAgICAgICAgIHJldHVybjsKICAgICAgICB2YXIgb2xkID0gewogICAgICAgICAgICByb3c6IHRoaXMucm93LAogICAgICAgICAgICBjb2x1bW46IHRoaXMuY29sdW1uCiAgICAgICAgfTsKICAgICAgICB0aGlzLnJvdyA9IHBvcy5yb3c7CiAgICAgICAgdGhpcy5jb2x1bW4gPSBwb3MuY29sdW1uOwogICAgICAgIHRoaXMuX3NpZ25hbCgiY2hhbmdlIiwgewogICAgICAgICAgICBvbGQ6IG9sZCwKICAgICAgICAgICAgdmFsdWU6IHBvcwogICAgICAgIH0pOwogICAgfTsKICAgIEFuY2hvci5wcm90b3R5cGUuZGV0YWNoID0gZnVuY3Rpb24gKCkgewogICAgICAgIHRoaXMuZG9jdW1lbnQub2ZmKCJjaGFuZ2UiLCB0aGlzLiRvbkNoYW5nZSk7CiAgICB9OwogICAgQW5jaG9yLnByb3RvdHlwZS5hdHRhY2ggPSBmdW5jdGlvbiAoZG9jKSB7CiAgICAgICAgdGhpcy5kb2N1bWVudCA9IGRvYyB8fCB0aGlzLmRvY3VtZW50OwogICAgICAgIHRoaXMuZG9jdW1lbnQub24oImNoYW5nZSIsIHRoaXMuJG9uQ2hhbmdlKTsKICAgIH07CiAgICBBbmNob3IucHJvdG90eXBlLiRjbGlwUG9zaXRpb25Ub0RvY3VtZW50ID0gZnVuY3Rpb24gKHJvdywgY29sdW1uKSB7CiAgICAgICAgdmFyIHBvcyA9IHt9OwogICAgICAgIGlmIChyb3cgPj0gdGhpcy5kb2N1bWVudC5nZXRMZW5ndGgoKSkgewogICAgICAgICAgICBwb3Mucm93ID0gTWF0aC5tYXgoMCwgdGhpcy5kb2N1bWVudC5nZXRMZW5ndGgoKSAtIDEpOwogICAgICAgICAgICBwb3MuY29sdW1uID0gdGhpcy5kb2N1bWVudC5nZXRMaW5lKHBvcy5yb3cpLmxlbmd0aDsKICAgICAgICB9CiAgICAgICAgZWxzZSBpZiAocm93IDwgMCkgewogICAgICAgICAgICBwb3Mucm93ID0gMDsKICAgICAgICAgICAgcG9zLmNvbHVtbiA9IDA7CiAgICAgICAgfQogICAgICAgIGVsc2UgewogICAgICAgICAgICBwb3Mucm93ID0gcm93OwogICAgICAgICAgICBwb3MuY29sdW1uID0gTWF0aC5taW4odGhpcy5kb2N1bWVudC5nZXRMaW5lKHBvcy5yb3cpLmxlbmd0aCwgTWF0aC5tYXgoMCwgY29sdW1uKSk7CiAgICAgICAgfQogICAgICAgIGlmIChjb2x1bW4gPCAwKQogICAgICAgICAgICBwb3MuY29sdW1uID0gMDsKICAgICAgICByZXR1cm4gcG9zOwogICAgfTsKICAgIHJldHVybiBBbmNob3I7Cn0oKSk7CkFuY2hvci5wcm90b3R5cGUuJGluc2VydFJpZ2h0ID0gZmFsc2U7Cm9vcC5pbXBsZW1lbnQoQW5jaG9yLnByb3RvdHlwZSwgRXZlbnRFbWl0dGVyKTsKZnVuY3Rpb24gJHBvaW50c0luT3JkZXIocG9pbnQxLCBwb2ludDIsIGVxdWFsUG9pbnRzSW5PcmRlcikgewogICAgdmFyIGJDb2xJc0FmdGVyID0gZXF1YWxQb2ludHNJbk9yZGVyID8gcG9pbnQxLmNvbHVtbiA8PSBwb2ludDIuY29sdW1uIDogcG9pbnQxLmNvbHVtbiA8IHBvaW50Mi5jb2x1bW47CiAgICByZXR1cm4gKHBvaW50MS5yb3cgPCBwb2ludDIucm93KSB8fCAocG9pbnQxLnJvdyA9PSBwb2ludDIucm93ICYmIGJDb2xJc0FmdGVyKTsKfQpmdW5jdGlvbiAkZ2V0VHJhbnNmb3JtZWRQb2ludChkZWx0YSwgcG9pbnQsIG1vdmVJZkVxdWFsKSB7CiAgICB2YXIgZGVsdGFJc0luc2VydCA9IGRlbHRhLmFjdGlvbiA9PSAiaW5zZXJ0IjsKICAgIHZhciBkZWx0YVJvd1NoaWZ0ID0gKGRlbHRhSXNJbnNlcnQgPyAxIDogLTEpICogKGRlbHRhLmVuZC5yb3cgLSBkZWx0YS5zdGFydC5yb3cpOwogICAgdmFyIGRlbHRhQ29sU2hpZnQgPSAoZGVsdGFJc0luc2VydCA/IDEgOiAtMSkgKiAoZGVsdGEuZW5kLmNvbHVtbiAtIGRlbHRhLnN0YXJ0LmNvbHVtbik7CiAgICB2YXIgZGVsdGFTdGFydCA9IGRlbHRhLnN0YXJ0OwogICAgdmFyIGRlbHRhRW5kID0gZGVsdGFJc0luc2VydCA/IGRlbHRhU3RhcnQgOiBkZWx0YS5lbmQ7IC8vIENvbGxhcHNlIGluc2VydCByYW5nZS4KICAgIGlmICgkcG9pbnRzSW5PcmRlcihwb2ludCwgZGVsdGFTdGFydCwgbW92ZUlmRXF1YWwpKSB7CiAgICAgICAgcmV0dXJuIHsKICAgICAgICAgICAgcm93OiBwb2ludC5yb3csCiAgICAgICAgICAgIGNvbHVtbjogcG9pbnQuY29sdW1uCiAgICAgICAgfTsKICAgIH0KICAgIGlmICgkcG9pbnRzSW5PcmRlcihkZWx0YUVuZCwgcG9pbnQsICFtb3ZlSWZFcXVhbCkpIHsKICAgICAgICByZXR1cm4gewogICAgICAgICAgICByb3c6IHBvaW50LnJvdyArIGRlbHRhUm93U2hpZnQsCiAgICAgICAgICAgIGNvbHVtbjogcG9pbnQuY29sdW1uICsgKHBvaW50LnJvdyA9PSBkZWx0YUVuZC5yb3cgPyBkZWx0YUNvbFNoaWZ0IDogMCkKICAgICAgICB9OwogICAgfQogICAgcmV0dXJuIHsKICAgICAgICByb3c6IGRlbHRhU3RhcnQucm93LAogICAgICAgIGNvbHVtbjogZGVsdGFTdGFydC5jb2x1bW4KICAgIH07Cn0KZXhwb3J0cy5BbmNob3IgPSBBbmNob3I7Cgp9KTsKCmFjZS5kZWZpbmUoImFjZS9kb2N1bWVudCIsW10sIGZ1bmN0aW9uKHJlcXVpcmUsIGV4cG9ydHMsIG1vZHVsZSl7InVzZSBzdHJpY3QiOwp2YXIgb29wID0gcmVxdWlyZSgiLi9saWIvb29wIik7CnZhciBhcHBseURlbHRhID0gcmVxdWlyZSgiLi9hcHBseV9kZWx0YSIpLmFwcGx5RGVsdGE7CnZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCIuL2xpYi9ldmVudF9lbWl0dGVyIikuRXZlbnRFbWl0dGVyOwp2YXIgUmFuZ2UgPSByZXF1aXJlKCIuL3JhbmdlIikuUmFuZ2U7CnZhciBBbmNob3IgPSByZXF1aXJlKCIuL2FuY2hvciIpLkFuY2hvcjsKdmFyIERvY3VtZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkgewogICAgZnVuY3Rpb24gRG9jdW1lbnQodGV4dE9yTGluZXMpIHsKICAgICAgICB0aGlzLiRsaW5lcyA9IFsiIl07CiAgICAgICAgaWYgKHRleHRPckxpbmVzLmxlbmd0aCA9PT0gMCkgewogICAgICAgICAgICB0aGlzLiRsaW5lcyA9IFsiIl07CiAgICAgICAgfQogICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGV4dE9yTGluZXMpKSB7CiAgICAgICAgICAgIHRoaXMuaW5zZXJ0TWVyZ2VkTGluZXMoeyByb3c6IDAsIGNvbHVtbjogMCB9LCB0ZXh0T3JMaW5lcyk7CiAgICAgICAgfQogICAgICAgIGVsc2UgewogICAgICAgICAgICB0aGlzLmluc2VydCh7IHJvdzogMCwgY29sdW1uOiAwIH0sIHRleHRPckxpbmVzKTsKICAgICAgICB9CiAgICB9CiAgICBEb2N1bWVudC5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAodGV4dCkgewogICAgICAgIHZhciBsZW4gPSB0aGlzLmdldExlbmd0aCgpIC0gMTsKICAgICAgICB0aGlzLnJlbW92ZShuZXcgUmFuZ2UoMCwgMCwgbGVuLCB0aGlzLmdldExpbmUobGVuKS5sZW5ndGgpKTsKICAgICAgICB0aGlzLmluc2VydCh7IHJvdzogMCwgY29sdW1uOiAwIH0sIHRleHQgfHwgIiIpOwogICAgfTsKICAgIERvY3VtZW50LnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHsKICAgICAgICByZXR1cm4gdGhpcy5nZXRBbGxMaW5lcygpLmpvaW4odGhpcy5nZXROZXdMaW5lQ2hhcmFjdGVyKCkpOwogICAgfTsKICAgIERvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVBbmNob3IgPSBmdW5jdGlvbiAocm93LCBjb2x1bW4pIHsKICAgICAgICByZXR1cm4gbmV3IEFuY2hvcih0aGlzLCByb3csIGNvbHVtbik7CiAgICB9OwogICAgRG9jdW1lbnQucHJvdG90eXBlLiRkZXRlY3ROZXdMaW5lID0gZnVuY3Rpb24gKHRleHQpIHsKICAgICAgICB2YXIgbWF0Y2ggPSB0ZXh0Lm1hdGNoKC9eLio/KFxyXG58XHJ8XG4pL20pOwogICAgICAgIHRoaXMuJGF1dG9OZXdMaW5lID0gbWF0Y2ggPyBtYXRjaFsxXSA6ICJcbiI7CiAgICAgICAgdGhpcy5fc2lnbmFsKCJjaGFuZ2VOZXdMaW5lTW9kZSIpOwogICAgfTsKICAgIERvY3VtZW50LnByb3RvdHlwZS5nZXROZXdMaW5lQ2hhcmFjdGVyID0gZnVuY3Rpb24gKCkgewogICAgICAgIHN3aXRjaCAodGhpcy4kbmV3TGluZU1vZGUpIHsKICAgICAgICAgICAgY2FzZSAid2luZG93cyI6CiAgICAgICAgICAgICAgICByZXR1cm4gIlxyXG4iOwogICAgICAgICAgICBjYXNlICJ1bml4IjoKICAgICAgICAgICAgICAgIHJldHVybiAiXG4iOwogICAgICAgICAgICBkZWZhdWx0OgogICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGF1dG9OZXdMaW5lIHx8ICJcbiI7CiAgICAgICAgfQogICAgfTsKICAgIERvY3VtZW50LnByb3RvdHlwZS5zZXROZXdMaW5lTW9kZSA9IGZ1bmN0aW9uIChuZXdMaW5lTW9kZSkgewogICAgICAgIGlmICh0aGlzLiRuZXdMaW5lTW9kZSA9PT0gbmV3TGluZU1vZGUpCiAgICAgICAgICAgIHJldHVybjsKICAgICAgICB0aGlzLiRuZXdMaW5lTW9kZSA9IG5ld0xpbmVNb2RlOwogICAgICAgIHRoaXMuX3NpZ25hbCgiY2hhbmdlTmV3TGluZU1vZGUiKTsKICAgIH07CiAgICBEb2N1bWVudC5wcm90b3R5cGUuZ2V0TmV3TGluZU1vZGUgPSBmdW5jdGlvbiAoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuJG5ld0xpbmVNb2RlOwogICAgfTsKICAgIERvY3VtZW50LnByb3RvdHlwZS5pc05ld0xpbmUgPSBmdW5jdGlvbiAodGV4dCkgewogICAgICAgIHJldHVybiAodGV4dCA9PSAiXHJcbiIgfHwgdGV4dCA9PSAiXHIiIHx8IHRleHQgPT0gIlxuIik7CiAgICB9OwogICAgRG9jdW1lbnQucHJvdG90eXBlLmdldExpbmUgPSBmdW5jdGlvbiAocm93KSB7CiAgICAgICAgcmV0dXJuIHRoaXMuJGxpbmVzW3Jvd10gfHwgIiI7CiAgICB9OwogICAgRG9jdW1lbnQucHJvdG90eXBlLmdldExpbmVzID0gZnVuY3Rpb24gKGZpcnN0Um93LCBsYXN0Um93KSB7CiAgICAgICAgcmV0dXJuIHRoaXMuJGxpbmVzLnNsaWNlKGZpcnN0Um93LCBsYXN0Um93ICsgMSk7CiAgICB9OwogICAgRG9jdW1lbnQucHJvdG90eXBlLmdldEFsbExpbmVzID0gZnVuY3Rpb24gKCkgewogICAgICAgIHJldHVybiB0aGlzLmdldExpbmVzKDAsIHRoaXMuZ2V0TGVuZ3RoKCkpOwogICAgfTsKICAgIERvY3VtZW50LnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiAoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuJGxpbmVzLmxlbmd0aDsKICAgIH07CiAgICBEb2N1bWVudC5wcm90b3R5cGUuZ2V0VGV4dFJhbmdlID0gZnVuY3Rpb24gKHJhbmdlKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGluZXNGb3JSYW5nZShyYW5nZSkuam9pbih0aGlzLmdldE5ld0xpbmVDaGFyYWN0ZXIoKSk7CiAgICB9OwogICAgRG9jdW1lbnQucHJvdG90eXBlLmdldExpbmVzRm9yUmFuZ2UgPSBmdW5jdGlvbiAocmFuZ2UpIHsKICAgICAgICB2YXIgbGluZXM7CiAgICAgICAgaWYgKHJhbmdlLnN0YXJ0LnJvdyA9PT0gcmFuZ2UuZW5kLnJvdykgewogICAgICAgICAgICBsaW5lcyA9IFt0aGlzLmdldExpbmUocmFuZ2Uuc3RhcnQucm93KS5zdWJzdHJpbmcocmFuZ2Uuc3RhcnQuY29sdW1uLCByYW5nZS5lbmQuY29sdW1uKV07CiAgICAgICAgfQogICAgICAgIGVsc2UgewogICAgICAgICAgICBsaW5lcyA9IHRoaXMuZ2V0TGluZXMocmFuZ2Uuc3RhcnQucm93LCByYW5nZS5lbmQucm93KTsKICAgICAgICAgICAgbGluZXNbMF0gPSAobGluZXNbMF0gfHwgIiIpLnN1YnN0cmluZyhyYW5nZS5zdGFydC5jb2x1bW4pOwogICAgICAgICAgICB2YXIgbCA9IGxpbmVzLmxlbmd0aCAtIDE7CiAgICAgICAgICAgIGlmIChyYW5nZS5lbmQucm93IC0gcmFuZ2Uuc3RhcnQucm93ID09IGwpCiAgICAgICAgICAgICAgICBsaW5lc1tsXSA9IGxpbmVzW2xdLnN1YnN0cmluZygwLCByYW5nZS5lbmQuY29sdW1uKTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGxpbmVzOwogICAgfTsKICAgIERvY3VtZW50LnByb3RvdHlwZS5pbnNlcnRMaW5lcyA9IGZ1bmN0aW9uIChyb3csIGxpbmVzKSB7CiAgICAgICAgY29uc29sZS53YXJuKCJVc2Ugb2YgZG9jdW1lbnQuaW5zZXJ0TGluZXMgaXMgZGVwcmVjYXRlZC4gVXNlIHRoZSBpbnNlcnRGdWxsTGluZXMgbWV0aG9kIGluc3RlYWQuIik7CiAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0RnVsbExpbmVzKHJvdywgbGluZXMpOwogICAgfTsKICAgIERvY3VtZW50LnByb3RvdHlwZS5yZW1vdmVMaW5lcyA9IGZ1bmN0aW9uIChmaXJzdFJvdywgbGFzdFJvdykgewogICAgICAgIGNvbnNvbGUud2FybigiVXNlIG9mIGRvY3VtZW50LnJlbW92ZUxpbmVzIGlzIGRlcHJlY2F0ZWQuIFVzZSB0aGUgcmVtb3ZlRnVsbExpbmVzIG1ldGhvZCBpbnN0ZWFkLiIpOwogICAgICAgIHJldHVybiB0aGlzLnJlbW92ZUZ1bGxMaW5lcyhmaXJzdFJvdywgbGFzdFJvdyk7CiAgICB9OwogICAgRG9jdW1lbnQucHJvdG90eXBlLmluc2VydE5ld0xpbmUgPSBmdW5jdGlvbiAocG9zaXRpb24pIHsKICAgICAgICBjb25zb2xlLndhcm4oIlVzZSBvZiBkb2N1bWVudC5pbnNlcnROZXdMaW5lIGlzIGRlcHJlY2F0ZWQuIFVzZSBpbnNlcnRNZXJnZWRMaW5lcyhwb3NpdGlvbiwgWycnLCAnJ10pIGluc3RlYWQuIik7CiAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0TWVyZ2VkTGluZXMocG9zaXRpb24sIFsiIiwgIiJdKTsKICAgIH07CiAgICBEb2N1bWVudC5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24gKHBvc2l0aW9uLCB0ZXh0KSB7CiAgICAgICAgaWYgKHRoaXMuZ2V0TGVuZ3RoKCkgPD0gMSkKICAgICAgICAgICAgdGhpcy4kZGV0ZWN0TmV3TGluZSh0ZXh0KTsKICAgICAgICByZXR1cm4gdGhpcy5pbnNlcnRNZXJnZWRMaW5lcyhwb3NpdGlvbiwgdGhpcy4kc3BsaXQodGV4dCkpOwogICAgfTsKICAgIERvY3VtZW50LnByb3RvdHlwZS5pbnNlcnRJbkxpbmUgPSBmdW5jdGlvbiAocG9zaXRpb24sIHRleHQpIHsKICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmNsaXBwZWRQb3MocG9zaXRpb24ucm93LCBwb3NpdGlvbi5jb2x1bW4pOwogICAgICAgIHZhciBlbmQgPSB0aGlzLnBvcyhwb3NpdGlvbi5yb3csIHBvc2l0aW9uLmNvbHVtbiArIHRleHQubGVuZ3RoKTsKICAgICAgICB0aGlzLmFwcGx5RGVsdGEoewogICAgICAgICAgICBzdGFydDogc3RhcnQsCiAgICAgICAgICAgIGVuZDogZW5kLAogICAgICAgICAgICBhY3Rpb246ICJpbnNlcnQiLAogICAgICAgICAgICBsaW5lczogW3RleHRdCiAgICAgICAgfSwgdHJ1ZSk7CiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmVQb3MoZW5kKTsKICAgIH07CiAgICBEb2N1bWVudC5wcm90b3R5cGUuY2xpcHBlZFBvcyA9IGZ1bmN0aW9uIChyb3csIGNvbHVtbikgewogICAgICAgIHZhciBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpOwogICAgICAgIGlmIChyb3cgPT09IHVuZGVmaW5lZCkgewogICAgICAgICAgICByb3cgPSBsZW5ndGg7CiAgICAgICAgfQogICAgICAgIGVsc2UgaWYgKHJvdyA8IDApIHsKICAgICAgICAgICAgcm93ID0gMDsKICAgICAgICB9CiAgICAgICAgZWxzZSBpZiAocm93ID49IGxlbmd0aCkgewogICAgICAgICAgICByb3cgPSBsZW5ndGggLSAxOwogICAgICAgICAgICBjb2x1bW4gPSB1bmRlZmluZWQ7CiAgICAgICAgfQogICAgICAgIHZhciBsaW5lID0gdGhpcy5nZXRMaW5lKHJvdyk7CiAgICAgICAgaWYgKGNvbHVtbiA9PSB1bmRlZmluZWQpCiAgICAgICAgICAgIGNvbHVtbiA9IGxpbmUubGVuZ3RoOwogICAgICAgIGNvbHVtbiA9IE1hdGgubWluKE1hdGgubWF4KGNvbHVtbiwgMCksIGxpbmUubGVuZ3RoKTsKICAgICAgICByZXR1cm4geyByb3c6IHJvdywgY29sdW1uOiBjb2x1bW4gfTsKICAgIH07CiAgICBEb2N1bWVudC5wcm90b3R5cGUuY2xvbmVQb3MgPSBmdW5jdGlvbiAocG9zKSB7CiAgICAgICAgcmV0dXJuIHsgcm93OiBwb3Mucm93LCBjb2x1bW46IHBvcy5jb2x1bW4gfTsKICAgIH07CiAgICBEb2N1bWVudC5wcm90b3R5cGUucG9zID0gZnVuY3Rpb24gKHJvdywgY29sdW1uKSB7CiAgICAgICAgcmV0dXJuIHsgcm93OiByb3csIGNvbHVtbjogY29sdW1uIH07CiAgICB9OwogICAgRG9jdW1lbnQucHJvdG90eXBlLiRjbGlwUG9zaXRpb24gPSBmdW5jdGlvbiAocG9zaXRpb24pIHsKICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTsKICAgICAgICBpZiAocG9zaXRpb24ucm93ID49IGxlbmd0aCkgewogICAgICAgICAgICBwb3NpdGlvbi5yb3cgPSBNYXRoLm1heCgwLCBsZW5ndGggLSAxKTsKICAgICAgICAgICAgcG9zaXRpb24uY29sdW1uID0gdGhpcy5nZXRMaW5lKGxlbmd0aCAtIDEpLmxlbmd0aDsKICAgICAgICB9CiAgICAgICAgZWxzZSB7CiAgICAgICAgICAgIHBvc2l0aW9uLnJvdyA9IE1hdGgubWF4KDAsIHBvc2l0aW9uLnJvdyk7CiAgICAgICAgICAgIHBvc2l0aW9uLmNvbHVtbiA9IE1hdGgubWluKE1hdGgubWF4KHBvc2l0aW9uLmNvbHVtbiwgMCksIHRoaXMuZ2V0TGluZShwb3NpdGlvbi5yb3cpLmxlbmd0aCk7CiAgICAgICAgfQogICAgICAgIHJldHVybiBwb3NpdGlvbjsKICAgIH07CiAgICBEb2N1bWVudC5wcm90b3R5cGUuaW5zZXJ0RnVsbExpbmVzID0gZnVuY3Rpb24gKHJvdywgbGluZXMpIHsKICAgICAgICByb3cgPSBNYXRoLm1pbihNYXRoLm1heChyb3csIDApLCB0aGlzLmdldExlbmd0aCgpKTsKICAgICAgICB2YXIgY29sdW1uID0gMDsKICAgICAgICBpZiAocm93IDwgdGhpcy5nZXRMZW5ndGgoKSkgewogICAgICAgICAgICBsaW5lcyA9IGxpbmVzLmNvbmNhdChbIiJdKTsKICAgICAgICAgICAgY29sdW1uID0gMDsKICAgICAgICB9CiAgICAgICAgZWxzZSB7CiAgICAgICAgICAgIGxpbmVzID0gWyIiXS5jb25jYXQobGluZXMpOwogICAgICAgICAgICByb3ctLTsKICAgICAgICAgICAgY29sdW1uID0gdGhpcy4kbGluZXNbcm93XS5sZW5ndGg7CiAgICAgICAgfQogICAgICAgIHRoaXMuaW5zZXJ0TWVyZ2VkTGluZXMoeyByb3c6IHJvdywgY29sdW1uOiBjb2x1bW4gfSwgbGluZXMpOwogICAgfTsKICAgIERvY3VtZW50LnByb3RvdHlwZS5pbnNlcnRNZXJnZWRMaW5lcyA9IGZ1bmN0aW9uIChwb3NpdGlvbiwgbGluZXMpIHsKICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmNsaXBwZWRQb3MocG9zaXRpb24ucm93LCBwb3NpdGlvbi5jb2x1bW4pOwogICAgICAgIHZhciBlbmQgPSB7CiAgICAgICAgICAgIHJvdzogc3RhcnQucm93ICsgbGluZXMubGVuZ3RoIC0gMSwKICAgICAgICAgICAgY29sdW1uOiAobGluZXMubGVuZ3RoID09IDEgPyBzdGFydC5jb2x1bW4gOiAwKSArIGxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdLmxlbmd0aAogICAgICAgIH07CiAgICAgICAgdGhpcy5hcHBseURlbHRhKHsKICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LAogICAgICAgICAgICBlbmQ6IGVuZCwKICAgICAgICAgICAgYWN0aW9uOiAiaW5zZXJ0IiwKICAgICAgICAgICAgbGluZXM6IGxpbmVzCiAgICAgICAgfSk7CiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmVQb3MoZW5kKTsKICAgIH07CiAgICBEb2N1bWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKHJhbmdlKSB7CiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5jbGlwcGVkUG9zKHJhbmdlLnN0YXJ0LnJvdywgcmFuZ2Uuc3RhcnQuY29sdW1uKTsKICAgICAgICB2YXIgZW5kID0gdGhpcy5jbGlwcGVkUG9zKHJhbmdlLmVuZC5yb3csIHJhbmdlLmVuZC5jb2x1bW4pOwogICAgICAgIHRoaXMuYXBwbHlEZWx0YSh7CiAgICAgICAgICAgIHN0YXJ0OiBzdGFydCwKICAgICAgICAgICAgZW5kOiBlbmQsCiAgICAgICAgICAgIGFjdGlvbjogInJlbW92ZSIsCiAgICAgICAgICAgIGxpbmVzOiB0aGlzLmdldExpbmVzRm9yUmFuZ2UoeyBzdGFydDogc3RhcnQsIGVuZDogZW5kIH0pCiAgICAgICAgfSk7CiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmVQb3Moc3RhcnQpOwogICAgfTsKICAgIERvY3VtZW50LnByb3RvdHlwZS5yZW1vdmVJbkxpbmUgPSBmdW5jdGlvbiAocm93LCBzdGFydENvbHVtbiwgZW5kQ29sdW1uKSB7CiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5jbGlwcGVkUG9zKHJvdywgc3RhcnRDb2x1bW4pOwogICAgICAgIHZhciBlbmQgPSB0aGlzLmNsaXBwZWRQb3Mocm93LCBlbmRDb2x1bW4pOwogICAgICAgIHRoaXMuYXBwbHlEZWx0YSh7CiAgICAgICAgICAgIHN0YXJ0OiBzdGFydCwKICAgICAgICAgICAgZW5kOiBlbmQsCiAgICAgICAgICAgIGFjdGlvbjogInJlbW92ZSIsCiAgICAgICAgICAgIGxpbmVzOiB0aGlzLmdldExpbmVzRm9yUmFuZ2UoeyBzdGFydDogc3RhcnQsIGVuZDogZW5kIH0pCiAgICAgICAgfSwgdHJ1ZSk7CiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmVQb3Moc3RhcnQpOwogICAgfTsKICAgIERvY3VtZW50LnByb3RvdHlwZS5yZW1vdmVGdWxsTGluZXMgPSBmdW5jdGlvbiAoZmlyc3RSb3csIGxhc3RSb3cpIHsKICAgICAgICBmaXJzdFJvdyA9IE1hdGgubWluKE1hdGgubWF4KDAsIGZpcnN0Um93KSwgdGhpcy5nZXRMZW5ndGgoKSAtIDEpOwogICAgICAgIGxhc3RSb3cgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBsYXN0Um93KSwgdGhpcy5nZXRMZW5ndGgoKSAtIDEpOwogICAgICAgIHZhciBkZWxldGVGaXJzdE5ld0xpbmUgPSBsYXN0Um93ID09IHRoaXMuZ2V0TGVuZ3RoKCkgLSAxICYmIGZpcnN0Um93ID4gMDsKICAgICAgICB2YXIgZGVsZXRlTGFzdE5ld0xpbmUgPSBsYXN0Um93IDwgdGhpcy5nZXRMZW5ndGgoKSAtIDE7CiAgICAgICAgdmFyIHN0YXJ0Um93ID0gKGRlbGV0ZUZpcnN0TmV3TGluZSA/IGZpcnN0Um93IC0gMSA6IGZpcnN0Um93KTsKICAgICAgICB2YXIgc3RhcnRDb2wgPSAoZGVsZXRlRmlyc3ROZXdMaW5lID8gdGhpcy5nZXRMaW5lKHN0YXJ0Um93KS5sZW5ndGggOiAwKTsKICAgICAgICB2YXIgZW5kUm93ID0gKGRlbGV0ZUxhc3ROZXdMaW5lID8gbGFzdFJvdyArIDEgOiBsYXN0Um93KTsKICAgICAgICB2YXIgZW5kQ29sID0gKGRlbGV0ZUxhc3ROZXdMaW5lID8gMCA6IHRoaXMuZ2V0TGluZShlbmRSb3cpLmxlbmd0aCk7CiAgICAgICAgdmFyIHJhbmdlID0gbmV3IFJhbmdlKHN0YXJ0Um93LCBzdGFydENvbCwgZW5kUm93LCBlbmRDb2wpOwogICAgICAgIHZhciBkZWxldGVkTGluZXMgPSB0aGlzLiRsaW5lcy5zbGljZShmaXJzdFJvdywgbGFzdFJvdyArIDEpOwogICAgICAgIHRoaXMuYXBwbHlEZWx0YSh7CiAgICAgICAgICAgIHN0YXJ0OiByYW5nZS5zdGFydCwKICAgICAgICAgICAgZW5kOiByYW5nZS5lbmQsCiAgICAgICAgICAgIGFjdGlvbjogInJlbW92ZSIsCiAgICAgICAgICAgIGxpbmVzOiB0aGlzLmdldExpbmVzRm9yUmFuZ2UocmFuZ2UpCiAgICAgICAgfSk7CiAgICAgICAgcmV0dXJuIGRlbGV0ZWRMaW5lczsKICAgIH07CiAgICBEb2N1bWVudC5wcm90b3R5cGUucmVtb3ZlTmV3TGluZSA9IGZ1bmN0aW9uIChyb3cpIHsKICAgICAgICBpZiAocm93IDwgdGhpcy5nZXRMZW5ndGgoKSAtIDEgJiYgcm93ID49IDApIHsKICAgICAgICAgICAgdGhpcy5hcHBseURlbHRhKHsKICAgICAgICAgICAgICAgIHN0YXJ0OiB0aGlzLnBvcyhyb3csIHRoaXMuZ2V0TGluZShyb3cpLmxlbmd0aCksCiAgICAgICAgICAgICAgICBlbmQ6IHRoaXMucG9zKHJvdyArIDEsIDApLAogICAgICAgICAgICAgICAgYWN0aW9uOiAicmVtb3ZlIiwKICAgICAgICAgICAgICAgIGxpbmVzOiBbIiIsICIiXQogICAgICAgICAgICB9KTsKICAgICAgICB9CiAgICB9OwogICAgRG9jdW1lbnQucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiAocmFuZ2UsIHRleHQpIHsKICAgICAgICBpZiAoIShyYW5nZSBpbnN0YW5jZW9mIFJhbmdlKSkKICAgICAgICAgICAgcmFuZ2UgPSBSYW5nZS5mcm9tUG9pbnRzKHJhbmdlLnN0YXJ0LCByYW5nZS5lbmQpOwogICAgICAgIGlmICh0ZXh0Lmxlbmd0aCA9PT0gMCAmJiByYW5nZS5pc0VtcHR5KCkpCiAgICAgICAgICAgIHJldHVybiByYW5nZS5zdGFydDsKICAgICAgICBpZiAodGV4dCA9PSB0aGlzLmdldFRleHRSYW5nZShyYW5nZSkpCiAgICAgICAgICAgIHJldHVybiByYW5nZS5lbmQ7CiAgICAgICAgdGhpcy5yZW1vdmUocmFuZ2UpOwogICAgICAgIHZhciBlbmQ7CiAgICAgICAgaWYgKHRleHQpIHsKICAgICAgICAgICAgZW5kID0gdGhpcy5pbnNlcnQocmFuZ2Uuc3RhcnQsIHRleHQpOwogICAgICAgIH0KICAgICAgICBlbHNlIHsKICAgICAgICAgICAgZW5kID0gcmFuZ2Uuc3RhcnQ7CiAgICAgICAgfQogICAgICAgIHJldHVybiBlbmQ7CiAgICB9OwogICAgRG9jdW1lbnQucHJvdG90eXBlLmFwcGx5RGVsdGFzID0gZnVuY3Rpb24gKGRlbHRhcykgewogICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGVsdGFzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgICAgIHRoaXMuYXBwbHlEZWx0YShkZWx0YXNbaV0pOwogICAgICAgIH0KICAgIH07CiAgICBEb2N1bWVudC5wcm90b3R5cGUucmV2ZXJ0RGVsdGFzID0gZnVuY3Rpb24gKGRlbHRhcykgewogICAgICAgIGZvciAodmFyIGkgPSBkZWx0YXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHsKICAgICAgICAgICAgdGhpcy5yZXZlcnREZWx0YShkZWx0YXNbaV0pOwogICAgICAgIH0KICAgIH07CiAgICBEb2N1bWVudC5wcm90b3R5cGUuYXBwbHlEZWx0YSA9IGZ1bmN0aW9uIChkZWx0YSwgZG9Ob3RWYWxpZGF0ZSkgewogICAgICAgIHZhciBpc0luc2VydCA9IGRlbHRhLmFjdGlvbiA9PSAiaW5zZXJ0IjsKICAgICAgICBpZiAoaXNJbnNlcnQgPyBkZWx0YS5saW5lcy5sZW5ndGggPD0gMSAmJiAhZGVsdGEubGluZXNbMF0KICAgICAgICAgICAgOiAhUmFuZ2UuY29tcGFyZVBvaW50cyhkZWx0YS5zdGFydCwgZGVsdGEuZW5kKSkgewogICAgICAgICAgICByZXR1cm47CiAgICAgICAgfQogICAgICAgIGlmIChpc0luc2VydCAmJiBkZWx0YS5saW5lcy5sZW5ndGggPiAyMDAwMCkgewogICAgICAgICAgICB0aGlzLiRzcGxpdEFuZGFwcGx5TGFyZ2VEZWx0YShkZWx0YSwgMjAwMDApOwogICAgICAgIH0KICAgICAgICBlbHNlIHsKICAgICAgICAgICAgYXBwbHlEZWx0YSh0aGlzLiRsaW5lcywgZGVsdGEsIGRvTm90VmFsaWRhdGUpOwogICAgICAgICAgICB0aGlzLl9zaWduYWwoImNoYW5nZSIsIGRlbHRhKTsKICAgICAgICB9CiAgICB9OwogICAgRG9jdW1lbnQucHJvdG90eXBlLiRzYWZlQXBwbHlEZWx0YSA9IGZ1bmN0aW9uIChkZWx0YSkgewogICAgICAgIHZhciBkb2NMZW5ndGggPSB0aGlzLiRsaW5lcy5sZW5ndGg7CiAgICAgICAgaWYgKGRlbHRhLmFjdGlvbiA9PSAicmVtb3ZlIiAmJiBkZWx0YS5zdGFydC5yb3cgPCBkb2NMZW5ndGggJiYgZGVsdGEuZW5kLnJvdyA8IGRvY0xlbmd0aAogICAgICAgICAgICB8fCBkZWx0YS5hY3Rpb24gPT0gImluc2VydCIgJiYgZGVsdGEuc3RhcnQucm93IDw9IGRvY0xlbmd0aCkgewogICAgICAgICAgICB0aGlzLmFwcGx5RGVsdGEoZGVsdGEpOwogICAgICAgIH0KICAgIH07CiAgICBEb2N1bWVudC5wcm90b3R5cGUuJHNwbGl0QW5kYXBwbHlMYXJnZURlbHRhID0gZnVuY3Rpb24gKGRlbHRhLCBNQVgpIHsKICAgICAgICB2YXIgbGluZXMgPSBkZWx0YS5saW5lczsKICAgICAgICB2YXIgbCA9IGxpbmVzLmxlbmd0aCAtIE1BWCArIDE7CiAgICAgICAgdmFyIHJvdyA9IGRlbHRhLnN0YXJ0LnJvdzsKICAgICAgICB2YXIgY29sdW1uID0gZGVsdGEuc3RhcnQuY29sdW1uOwogICAgICAgIGZvciAodmFyIGZyb20gPSAwLCB0byA9IDA7IGZyb20gPCBsOyBmcm9tID0gdG8pIHsKICAgICAgICAgICAgdG8gKz0gTUFYIC0gMTsKICAgICAgICAgICAgdmFyIGNodW5rID0gbGluZXMuc2xpY2UoZnJvbSwgdG8pOwogICAgICAgICAgICBjaHVuay5wdXNoKCIiKTsKICAgICAgICAgICAgdGhpcy5hcHBseURlbHRhKHsKICAgICAgICAgICAgICAgIHN0YXJ0OiB0aGlzLnBvcyhyb3cgKyBmcm9tLCBjb2x1bW4pLAogICAgICAgICAgICAgICAgZW5kOiB0aGlzLnBvcyhyb3cgKyB0bywgY29sdW1uID0gMCksCiAgICAgICAgICAgICAgICBhY3Rpb246IGRlbHRhLmFjdGlvbiwKICAgICAgICAgICAgICAgIGxpbmVzOiBjaHVuawogICAgICAgICAgICB9LCB0cnVlKTsKICAgICAgICB9CiAgICAgICAgZGVsdGEubGluZXMgPSBsaW5lcy5zbGljZShmcm9tKTsKICAgICAgICBkZWx0YS5zdGFydC5yb3cgPSByb3cgKyBmcm9tOwogICAgICAgIGRlbHRhLnN0YXJ0LmNvbHVtbiA9IGNvbHVtbjsKICAgICAgICB0aGlzLmFwcGx5RGVsdGEoZGVsdGEsIHRydWUpOwogICAgfTsKICAgIERvY3VtZW50LnByb3RvdHlwZS5yZXZlcnREZWx0YSA9IGZ1bmN0aW9uIChkZWx0YSkgewogICAgICAgIHRoaXMuJHNhZmVBcHBseURlbHRhKHsKICAgICAgICAgICAgc3RhcnQ6IHRoaXMuY2xvbmVQb3MoZGVsdGEuc3RhcnQpLAogICAgICAgICAgICBlbmQ6IHRoaXMuY2xvbmVQb3MoZGVsdGEuZW5kKSwKICAgICAgICAgICAgYWN0aW9uOiAoZGVsdGEuYWN0aW9uID09ICJpbnNlcnQiID8gInJlbW92ZSIgOiAiaW5zZXJ0IiksCiAgICAgICAgICAgIGxpbmVzOiBkZWx0YS5saW5lcy5zbGljZSgpCiAgICAgICAgfSk7CiAgICB9OwogICAgRG9jdW1lbnQucHJvdG90eXBlLmluZGV4VG9Qb3NpdGlvbiA9IGZ1bmN0aW9uIChpbmRleCwgc3RhcnRSb3cpIHsKICAgICAgICB2YXIgbGluZXMgPSB0aGlzLiRsaW5lcyB8fCB0aGlzLmdldEFsbExpbmVzKCk7CiAgICAgICAgdmFyIG5ld2xpbmVMZW5ndGggPSB0aGlzLmdldE5ld0xpbmVDaGFyYWN0ZXIoKS5sZW5ndGg7CiAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0Um93IHx8IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHsKICAgICAgICAgICAgaW5kZXggLT0gbGluZXNbaV0ubGVuZ3RoICsgbmV3bGluZUxlbmd0aDsKICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkKICAgICAgICAgICAgICAgIHJldHVybiB7IHJvdzogaSwgY29sdW1uOiBpbmRleCArIGxpbmVzW2ldLmxlbmd0aCArIG5ld2xpbmVMZW5ndGggfTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIHsgcm93OiBsIC0gMSwgY29sdW1uOiBpbmRleCArIGxpbmVzW2wgLSAxXS5sZW5ndGggKyBuZXdsaW5lTGVuZ3RoIH07CiAgICB9OwogICAgRG9jdW1lbnQucHJvdG90eXBlLnBvc2l0aW9uVG9JbmRleCA9IGZ1bmN0aW9uIChwb3MsIHN0YXJ0Um93KSB7CiAgICAgICAgdmFyIGxpbmVzID0gdGhpcy4kbGluZXMgfHwgdGhpcy5nZXRBbGxMaW5lcygpOwogICAgICAgIHZhciBuZXdsaW5lTGVuZ3RoID0gdGhpcy5nZXROZXdMaW5lQ2hhcmFjdGVyKCkubGVuZ3RoOwogICAgICAgIHZhciBpbmRleCA9IDA7CiAgICAgICAgdmFyIHJvdyA9IE1hdGgubWluKHBvcy5yb3csIGxpbmVzLmxlbmd0aCk7CiAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0Um93IHx8IDA7IGkgPCByb3c7ICsraSkKICAgICAgICAgICAgaW5kZXggKz0gbGluZXNbaV0ubGVuZ3RoICsgbmV3bGluZUxlbmd0aDsKICAgICAgICByZXR1cm4gaW5kZXggKyBwb3MuY29sdW1uOwogICAgfTsKICAgIERvY3VtZW50LnByb3RvdHlwZS4kc3BsaXQgPSBmdW5jdGlvbiAodGV4dCkgewogICAgICAgIHJldHVybiB0ZXh0LnNwbGl0KC9cclxufFxyfFxuLyk7CiAgICB9OwogICAgcmV0dXJuIERvY3VtZW50Owp9KCkpOwpEb2N1bWVudC5wcm90b3R5cGUuJGF1dG9OZXdMaW5lID0gIiI7CkRvY3VtZW50LnByb3RvdHlwZS4kbmV3TGluZU1vZGUgPSAiYXV0byI7Cm9vcC5pbXBsZW1lbnQoRG9jdW1lbnQucHJvdG90eXBlLCBFdmVudEVtaXR0ZXIpOwpleHBvcnRzLkRvY3VtZW50ID0gRG9jdW1lbnQ7Cgp9KTsKCmFjZS5kZWZpbmUoImFjZS9saWIvZGVlcF9jb3B5IixbXSwgZnVuY3Rpb24ocmVxdWlyZSwgZXhwb3J0cywgbW9kdWxlKXtleHBvcnRzLmRlZXBDb3B5ID0gZnVuY3Rpb24gZGVlcENvcHkob2JqKSB7CiAgICBpZiAodHlwZW9mIG9iaiAhPT0gIm9iamVjdCIgfHwgIW9iaikKICAgICAgICByZXR1cm4gb2JqOwogICAgdmFyIGNvcHk7CiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7CiAgICAgICAgY29weSA9IFtdOwogICAgICAgIGZvciAodmFyIGtleSA9IDA7IGtleSA8IG9iai5sZW5ndGg7IGtleSsrKSB7CiAgICAgICAgICAgIGNvcHlba2V5XSA9IGRlZXBDb3B5KG9ialtrZXldKTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGNvcHk7CiAgICB9CiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgIT09ICJbb2JqZWN0IE9iamVjdF0iKQogICAgICAgIHJldHVybiBvYmo7CiAgICBjb3B5ID0ge307CiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKQogICAgICAgIGNvcHlba2V5XSA9IGRlZXBDb3B5KG9ialtrZXldKTsKICAgIHJldHVybiBjb3B5Owp9OwoKfSk7CgphY2UuZGVmaW5lKCJhY2UvbGliL2xhbmciLFtdLCBmdW5jdGlvbihyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpeyJ1c2Ugc3RyaWN0IjsKZXhwb3J0cy5sYXN0ID0gZnVuY3Rpb24gKGEpIHsKICAgIHJldHVybiBhW2EubGVuZ3RoIC0gMV07Cn07CmV4cG9ydHMuc3RyaW5nUmV2ZXJzZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHsKICAgIHJldHVybiBzdHJpbmcuc3BsaXQoIiIpLnJldmVyc2UoKS5qb2luKCIiKTsKfTsKZXhwb3J0cy5zdHJpbmdSZXBlYXQgPSBmdW5jdGlvbiAoc3RyaW5nLCBjb3VudCkgewogICAgdmFyIHJlc3VsdCA9ICcnOwogICAgd2hpbGUgKGNvdW50ID4gMCkgewogICAgICAgIGlmIChjb3VudCAmIDEpCiAgICAgICAgICAgIHJlc3VsdCArPSBzdHJpbmc7CiAgICAgICAgaWYgKGNvdW50ID4+PSAxKQogICAgICAgICAgICBzdHJpbmcgKz0gc3RyaW5nOwogICAgfQogICAgcmV0dXJuIHJlc3VsdDsKfTsKdmFyIHRyaW1CZWdpblJlZ2V4cCA9IC9eXHNccyovOwp2YXIgdHJpbUVuZFJlZ2V4cCA9IC9cc1xzKiQvOwpleHBvcnRzLnN0cmluZ1RyaW1MZWZ0ID0gZnVuY3Rpb24gKHN0cmluZykgewogICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHRyaW1CZWdpblJlZ2V4cCwgJycpOwp9OwpleHBvcnRzLnN0cmluZ1RyaW1SaWdodCA9IGZ1bmN0aW9uIChzdHJpbmcpIHsKICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSh0cmltRW5kUmVnZXhwLCAnJyk7Cn07CmV4cG9ydHMuY29weU9iamVjdCA9IGZ1bmN0aW9uIChvYmopIHsKICAgIHZhciBjb3B5ID0ge307CiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7CiAgICAgICAgY29weVtrZXldID0gb2JqW2tleV07CiAgICB9CiAgICByZXR1cm4gY29weTsKfTsKZXhwb3J0cy5jb3B5QXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHsKICAgIHZhciBjb3B5ID0gW107CiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFycmF5Lmxlbmd0aDsgaSA8IGw7IGkrKykgewogICAgICAgIGlmIChhcnJheVtpXSAmJiB0eXBlb2YgYXJyYXlbaV0gPT0gIm9iamVjdCIpCiAgICAgICAgICAgIGNvcHlbaV0gPSB0aGlzLmNvcHlPYmplY3QoYXJyYXlbaV0pOwogICAgICAgIGVsc2UKICAgICAgICAgICAgY29weVtpXSA9IGFycmF5W2ldOwogICAgfQogICAgcmV0dXJuIGNvcHk7Cn07CmV4cG9ydHMuZGVlcENvcHkgPSByZXF1aXJlKCIuL2RlZXBfY29weSIpLmRlZXBDb3B5OwpleHBvcnRzLmFycmF5VG9NYXAgPSBmdW5jdGlvbiAoYXJyKSB7CiAgICB2YXIgbWFwID0ge307CiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykgewogICAgICAgIG1hcFthcnJbaV1dID0gMTsKICAgIH0KICAgIHJldHVybiBtYXA7Cn07CmV4cG9ydHMuY3JlYXRlTWFwID0gZnVuY3Rpb24gKHByb3BzKSB7CiAgICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTsKICAgIGZvciAodmFyIGkgaW4gcHJvcHMpIHsKICAgICAgICBtYXBbaV0gPSBwcm9wc1tpXTsKICAgIH0KICAgIHJldHVybiBtYXA7Cn07CmV4cG9ydHMuYXJyYXlSZW1vdmUgPSBmdW5jdGlvbiAoYXJyYXksIHZhbHVlKSB7CiAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBhcnJheS5sZW5ndGg7IGkrKykgewogICAgICAgIGlmICh2YWx1ZSA9PT0gYXJyYXlbaV0pIHsKICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGksIDEpOwogICAgICAgIH0KICAgIH0KfTsKZXhwb3J0cy5lc2NhcGVSZWdFeHAgPSBmdW5jdGlvbiAoc3RyKSB7CiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLiorP14ke30oKXxbXF1cL1xcXSkvZywgJ1xcJDEnKTsKfTsKZXhwb3J0cy5lc2NhcGVIVE1MID0gZnVuY3Rpb24gKHN0cikgewogICAgcmV0dXJuICgiIiArIHN0cikucmVwbGFjZSgvJi9nLCAiJiMzODsiKS5yZXBsYWNlKC8iL2csICImIzM0OyIpLnJlcGxhY2UoLycvZywgIiYjMzk7IikucmVwbGFjZSgvPC9nLCAiJiM2MDsiKTsKfTsKZXhwb3J0cy5nZXRNYXRjaE9mZnNldHMgPSBmdW5jdGlvbiAoc3RyaW5nLCByZWdFeHApIHsKICAgIHZhciBtYXRjaGVzID0gW107CiAgICBzdHJpbmcucmVwbGFjZShyZWdFeHAsIGZ1bmN0aW9uIChzdHIpIHsKICAgICAgICBtYXRjaGVzLnB1c2goewogICAgICAgICAgICBvZmZzZXQ6IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMl0sCiAgICAgICAgICAgIGxlbmd0aDogc3RyLmxlbmd0aAogICAgICAgIH0pOwogICAgfSk7CiAgICByZXR1cm4gbWF0Y2hlczsKfTsKZXhwb3J0cy5kZWZlcnJlZENhbGwgPSBmdW5jdGlvbiAoZmNuKSB7CiAgICB2YXIgdGltZXIgPSBudWxsOwogICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkgewogICAgICAgIHRpbWVyID0gbnVsbDsKICAgICAgICBmY24oKTsKICAgIH07CiAgICB2YXIgZGVmZXJyZWQgPSBmdW5jdGlvbiAodGltZW91dCkgewogICAgICAgIGRlZmVycmVkLmNhbmNlbCgpOwogICAgICAgIHRpbWVyID0gc2V0VGltZW91dChjYWxsYmFjaywgdGltZW91dCB8fCAwKTsKICAgICAgICByZXR1cm4gZGVmZXJyZWQ7CiAgICB9OwogICAgZGVmZXJyZWQuc2NoZWR1bGUgPSBkZWZlcnJlZDsKICAgIGRlZmVycmVkLmNhbGwgPSBmdW5jdGlvbiAoKSB7CiAgICAgICAgdGhpcy5jYW5jZWwoKTsKICAgICAgICBmY24oKTsKICAgICAgICByZXR1cm4gZGVmZXJyZWQ7CiAgICB9OwogICAgZGVmZXJyZWQuY2FuY2VsID0gZnVuY3Rpb24gKCkgewogICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7CiAgICAgICAgdGltZXIgPSBudWxsOwogICAgICAgIHJldHVybiBkZWZlcnJlZDsKICAgIH07CiAgICBkZWZlcnJlZC5pc1BlbmRpbmcgPSBmdW5jdGlvbiAoKSB7CiAgICAgICAgcmV0dXJuIHRpbWVyOwogICAgfTsKICAgIHJldHVybiBkZWZlcnJlZDsKfTsKZXhwb3J0cy5kZWxheWVkQ2FsbCA9IGZ1bmN0aW9uIChmY24sIGRlZmF1bHRUaW1lb3V0KSB7CiAgICB2YXIgdGltZXIgPSBudWxsOwogICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkgewogICAgICAgIHRpbWVyID0gbnVsbDsKICAgICAgICBmY24oKTsKICAgIH07CiAgICB2YXIgX3NlbGYgPSBmdW5jdGlvbiAodGltZW91dCkgewogICAgICAgIGlmICh0aW1lciA9PSBudWxsKQogICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoY2FsbGJhY2ssIHRpbWVvdXQgfHwgZGVmYXVsdFRpbWVvdXQpOwogICAgfTsKICAgIF9zZWxmLmRlbGF5ID0gZnVuY3Rpb24gKHRpbWVvdXQpIHsKICAgICAgICB0aW1lciAmJiBjbGVhclRpbWVvdXQodGltZXIpOwogICAgICAgIHRpbWVyID0gc2V0VGltZW91dChjYWxsYmFjaywgdGltZW91dCB8fCBkZWZhdWx0VGltZW91dCk7CiAgICB9OwogICAgX3NlbGYuc2NoZWR1bGUgPSBfc2VsZjsKICAgIF9zZWxmLmNhbGwgPSBmdW5jdGlvbiAoKSB7CiAgICAgICAgdGhpcy5jYW5jZWwoKTsKICAgICAgICBmY24oKTsKICAgIH07CiAgICBfc2VsZi5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7CiAgICAgICAgdGltZXIgJiYgY2xlYXJUaW1lb3V0KHRpbWVyKTsKICAgICAgICB0aW1lciA9IG51bGw7CiAgICB9OwogICAgX3NlbGYuaXNQZW5kaW5nID0gZnVuY3Rpb24gKCkgewogICAgICAgIHJldHVybiB0aW1lcjsKICAgIH07CiAgICByZXR1cm4gX3NlbGY7Cn07CmV4cG9ydHMuc3VwcG9ydHNMb29rYmVoaW5kID0gZnVuY3Rpb24gKCkgewogICAgdHJ5IHsKICAgICAgICBuZXcgUmVnRXhwKCcoPzw9LiknKTsKICAgIH0KICAgIGNhdGNoIChlKSB7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgfQogICAgcmV0dXJuIHRydWU7Cn07CmV4cG9ydHMuc2tpcEVtcHR5TWF0Y2ggPSBmdW5jdGlvbiAobGluZSwgbGFzdCwgc3VwcG9ydHNVbmljb2RlRmxhZykgewogICAgcmV0dXJuIHN1cHBvcnRzVW5pY29kZUZsYWcgJiYgbGluZS5jb2RlUG9pbnRBdChsYXN0KSA+IDB4ZmZmZiA/IDIgOiAxOwp9OwoKfSk7CgphY2UuZGVmaW5lKCJhY2Uvd29ya2VyL21pcnJvciIsW10sIGZ1bmN0aW9uKHJlcXVpcmUsIGV4cG9ydHMsIG1vZHVsZSkgewoidXNlIHN0cmljdCI7Cgp2YXIgRG9jdW1lbnQgPSByZXF1aXJlKCIuLi9kb2N1bWVudCIpLkRvY3VtZW50Owp2YXIgbGFuZyA9IHJlcXVpcmUoIi4uL2xpYi9sYW5nIik7CiAgICAKdmFyIE1pcnJvciA9IGV4cG9ydHMuTWlycm9yID0gZnVuY3Rpb24oc2VuZGVyKSB7CiAgICB0aGlzLnNlbmRlciA9IHNlbmRlcjsKICAgIHZhciBkb2MgPSB0aGlzLmRvYyA9IG5ldyBEb2N1bWVudCgiIik7CiAgICAKICAgIHZhciBkZWZlcnJlZFVwZGF0ZSA9IHRoaXMuZGVmZXJyZWRVcGRhdGUgPSBsYW5nLmRlbGF5ZWRDYWxsKHRoaXMub25VcGRhdGUuYmluZCh0aGlzKSk7CiAgICAKICAgIHZhciBfc2VsZiA9IHRoaXM7CiAgICBzZW5kZXIub24oImNoYW5nZSIsIGZ1bmN0aW9uKGUpIHsKICAgICAgICB2YXIgZGF0YSA9IGUuZGF0YTsKICAgICAgICBpZiAoZGF0YVswXS5zdGFydCkgewogICAgICAgICAgICBkb2MuYXBwbHlEZWx0YXMoZGF0YSk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSAyKSB7CiAgICAgICAgICAgICAgICB2YXIgZCwgZXJyOyAKICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGFbaSsxXSkpIHsKICAgICAgICAgICAgICAgICAgICBkID0ge2FjdGlvbjogImluc2VydCIsIHN0YXJ0OiBkYXRhW2ldLCBsaW5lczogZGF0YVtpKzFdfTsKICAgICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgZCA9IHthY3Rpb246ICJyZW1vdmUiLCBzdGFydDogZGF0YVtpXSwgZW5kOiBkYXRhW2krMV19OwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICBpZiAoKGQuYWN0aW9uID09ICJpbnNlcnQiID8gZC5zdGFydCA6IGQuZW5kKS5yb3cgPj0gZG9jLiRsaW5lcy5sZW5ndGgpIHsKICAgICAgICAgICAgICAgICAgICBlcnIgPSBuZXcgRXJyb3IoIkludmFsaWQgZGVsdGEiKTsKICAgICAgICAgICAgICAgICAgICBlcnIuZGF0YSA9IHsKICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogX3NlbGYuJHBhdGgsCiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzTGVuZ3RoOiBkb2MuJGxpbmVzLmxlbmd0aCwKICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IGQuc3RhcnQsCiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogZC5lbmQKICAgICAgICAgICAgICAgICAgICB9OwogICAgICAgICAgICAgICAgICAgIHRocm93IGVycjsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICBkb2MuYXBwbHlEZWx0YShkLCB0cnVlKTsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBpZiAoX3NlbGYuJHRpbWVvdXQpCiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZFVwZGF0ZS5zY2hlZHVsZShfc2VsZi4kdGltZW91dCk7CiAgICAgICAgX3NlbGYub25VcGRhdGUoKTsKICAgIH0pOwp9OwoKKGZ1bmN0aW9uKCkgewogICAgCiAgICB0aGlzLiR0aW1lb3V0ID0gNTAwOwogICAgCiAgICB0aGlzLnNldFRpbWVvdXQgPSBmdW5jdGlvbih0aW1lb3V0KSB7CiAgICAgICAgdGhpcy4kdGltZW91dCA9IHRpbWVvdXQ7CiAgICB9OwogICAgCiAgICB0aGlzLnNldFZhbHVlID0gZnVuY3Rpb24odmFsdWUpIHsKICAgICAgICB0aGlzLmRvYy5zZXRWYWx1ZSh2YWx1ZSk7CiAgICAgICAgdGhpcy5kZWZlcnJlZFVwZGF0ZS5zY2hlZHVsZSh0aGlzLiR0aW1lb3V0KTsKICAgIH07CiAgICAKICAgIHRoaXMuZ2V0VmFsdWUgPSBmdW5jdGlvbihjYWxsYmFja0lkKSB7CiAgICAgICAgdGhpcy5zZW5kZXIuY2FsbGJhY2sodGhpcy5kb2MuZ2V0VmFsdWUoKSwgY2FsbGJhY2tJZCk7CiAgICB9OwogICAgCiAgICB0aGlzLm9uVXBkYXRlID0gZnVuY3Rpb24oKSB7CiAgICB9OwogICAgCiAgICB0aGlzLmlzUGVuZGluZyA9IGZ1bmN0aW9uKCkgewogICAgICAgIHJldHVybiB0aGlzLmRlZmVycmVkVXBkYXRlLmlzUGVuZGluZygpOwogICAgfTsKICAgIAp9KS5jYWxsKE1pcnJvci5wcm90b3R5cGUpOwoKfSk7CgphY2UuZGVmaW5lKCJhY2UvbW9kZS9qc29uL2pzb25fcGFyc2UiLFtdLCBmdW5jdGlvbihyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpIHsKInVzZSBzdHJpY3QiOwoKICAgIHZhciBhdCwgICAgIC8vIFRoZSBpbmRleCBvZiB0aGUgY3VycmVudCBjaGFyYWN0ZXIKICAgICAgICBjaCwgICAgIC8vIFRoZSBjdXJyZW50IGNoYXJhY3RlcgogICAgICAgIGVzY2FwZWUgPSB7CiAgICAgICAgICAgICciJzogICciJywKICAgICAgICAgICAgJ1xcJzogJ1xcJywKICAgICAgICAgICAgJy8nOiAgJy8nLAogICAgICAgICAgICBiOiAgICAnXGInLAogICAgICAgICAgICBmOiAgICAnXGYnLAogICAgICAgICAgICBuOiAgICAnXG4nLAogICAgICAgICAgICByOiAgICAnXHInLAogICAgICAgICAgICB0OiAgICAnXHQnCiAgICAgICAgfSwKICAgICAgICB0ZXh0LAoKICAgICAgICBlcnJvciA9IGZ1bmN0aW9uIChtKSB7CgogICAgICAgICAgICB0aHJvdyB7CiAgICAgICAgICAgICAgICBuYW1lOiAgICAnU3ludGF4RXJyb3InLAogICAgICAgICAgICAgICAgbWVzc2FnZTogbSwKICAgICAgICAgICAgICAgIGF0OiAgICAgIGF0LAogICAgICAgICAgICAgICAgdGV4dDogICAgdGV4dAogICAgICAgICAgICB9OwogICAgICAgIH0sCgogICAgICAgIG5leHQgPSBmdW5jdGlvbiAoYykgewoKICAgICAgICAgICAgaWYgKGMgJiYgYyAhPT0gY2gpIHsKICAgICAgICAgICAgICAgIGVycm9yKCJFeHBlY3RlZCAnIiArIGMgKyAiJyBpbnN0ZWFkIG9mICciICsgY2ggKyAiJyIpOwogICAgICAgICAgICB9CgogICAgICAgICAgICBjaCA9IHRleHQuY2hhckF0KGF0KTsKICAgICAgICAgICAgYXQgKz0gMTsKICAgICAgICAgICAgcmV0dXJuIGNoOwogICAgICAgIH0sCgogICAgICAgIG51bWJlciA9IGZ1bmN0aW9uICgpIHsKCiAgICAgICAgICAgIHZhciBudW1iZXIsCiAgICAgICAgICAgICAgICBzdHJpbmcgPSAnJzsKCiAgICAgICAgICAgIGlmIChjaCA9PT0gJy0nKSB7CiAgICAgICAgICAgICAgICBzdHJpbmcgPSAnLSc7CiAgICAgICAgICAgICAgICBuZXh0KCctJyk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgd2hpbGUgKGNoID49ICcwJyAmJiBjaCA8PSAnOScpIHsKICAgICAgICAgICAgICAgIHN0cmluZyArPSBjaDsKICAgICAgICAgICAgICAgIG5leHQoKTsKICAgICAgICAgICAgfQogICAgICAgICAgICBpZiAoY2ggPT09ICcuJykgewogICAgICAgICAgICAgICAgc3RyaW5nICs9ICcuJzsKICAgICAgICAgICAgICAgIHdoaWxlIChuZXh0KCkgJiYgY2ggPj0gJzAnICYmIGNoIDw9ICc5JykgewogICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSBjaDsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICAgICBpZiAoY2ggPT09ICdlJyB8fCBjaCA9PT0gJ0UnKSB7CiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gY2g7CiAgICAgICAgICAgICAgICBuZXh0KCk7CiAgICAgICAgICAgICAgICBpZiAoY2ggPT09ICctJyB8fCBjaCA9PT0gJysnKSB7CiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IGNoOwogICAgICAgICAgICAgICAgICAgIG5leHQoKTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIHdoaWxlIChjaCA+PSAnMCcgJiYgY2ggPD0gJzknKSB7CiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IGNoOwogICAgICAgICAgICAgICAgICAgIG5leHQoKTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICAgICBudW1iZXIgPSArc3RyaW5nOwogICAgICAgICAgICBpZiAoaXNOYU4obnVtYmVyKSkgewogICAgICAgICAgICAgICAgZXJyb3IoIkJhZCBudW1iZXIiKTsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXI7CiAgICAgICAgICAgIH0KICAgICAgICB9LAoKICAgICAgICBzdHJpbmcgPSBmdW5jdGlvbiAoKSB7CgogICAgICAgICAgICB2YXIgaGV4LAogICAgICAgICAgICAgICAgaSwKICAgICAgICAgICAgICAgIHN0cmluZyA9ICcnLAogICAgICAgICAgICAgICAgdWZmZmY7CgogICAgICAgICAgICBpZiAoY2ggPT09ICciJykgewogICAgICAgICAgICAgICAgd2hpbGUgKG5leHQoKSkgewogICAgICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJyInKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQoKTsKICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZzsKICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoID09PSAnXFwnKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQoKTsKICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoID09PSAndScpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVmZmZmID0gMDsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCA0OyBpICs9IDEpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZXggPSBwYXJzZUludChuZXh0KCksIDE2KTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzRmluaXRlKGhleCkpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVmZmZmID0gdWZmZmYgKiAxNiArIGhleDsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHVmZmZmKTsKICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZXNjYXBlZVtjaF0gPT09ICdzdHJpbmcnKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gZXNjYXBlZVtjaF07CiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2ggPT0gIlxuIiB8fCBjaCA9PSAiXHIiKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSBjaDsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZXJyb3IoIkJhZCBzdHJpbmciKTsKICAgICAgICB9LAoKICAgICAgICB3aGl0ZSA9IGZ1bmN0aW9uICgpIHsKCiAgICAgICAgICAgIHdoaWxlIChjaCAmJiBjaCA8PSAnICcpIHsKICAgICAgICAgICAgICAgIG5leHQoKTsKICAgICAgICAgICAgfQogICAgICAgIH0sCgogICAgICAgIHdvcmQgPSBmdW5jdGlvbiAoKSB7CgogICAgICAgICAgICBzd2l0Y2ggKGNoKSB7CiAgICAgICAgICAgIGNhc2UgJ3QnOgogICAgICAgICAgICAgICAgbmV4dCgndCcpOwogICAgICAgICAgICAgICAgbmV4dCgncicpOwogICAgICAgICAgICAgICAgbmV4dCgndScpOwogICAgICAgICAgICAgICAgbmV4dCgnZScpOwogICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7CiAgICAgICAgICAgIGNhc2UgJ2YnOgogICAgICAgICAgICAgICAgbmV4dCgnZicpOwogICAgICAgICAgICAgICAgbmV4dCgnYScpOwogICAgICAgICAgICAgICAgbmV4dCgnbCcpOwogICAgICAgICAgICAgICAgbmV4dCgncycpOwogICAgICAgICAgICAgICAgbmV4dCgnZScpOwogICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICAgICAgICBjYXNlICduJzoKICAgICAgICAgICAgICAgIG5leHQoJ24nKTsKICAgICAgICAgICAgICAgIG5leHQoJ3UnKTsKICAgICAgICAgICAgICAgIG5leHQoJ2wnKTsKICAgICAgICAgICAgICAgIG5leHQoJ2wnKTsKICAgICAgICAgICAgICAgIHJldHVybiBudWxsOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGVycm9yKCJVbmV4cGVjdGVkICciICsgY2ggKyAiJyIpOwogICAgICAgIH0sCgogICAgICAgIHZhbHVlLCAgLy8gUGxhY2UgaG9sZGVyIGZvciB0aGUgdmFsdWUgZnVuY3Rpb24uCgogICAgICAgIGFycmF5ID0gZnVuY3Rpb24gKCkgewoKICAgICAgICAgICAgdmFyIGFycmF5ID0gW107CgogICAgICAgICAgICBpZiAoY2ggPT09ICdbJykgewogICAgICAgICAgICAgICAgbmV4dCgnWycpOwogICAgICAgICAgICAgICAgd2hpdGUoKTsKICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ10nKSB7CiAgICAgICAgICAgICAgICAgICAgbmV4dCgnXScpOwogICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJheTsgICAvLyBlbXB0eSBhcnJheQogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgd2hpbGUgKGNoKSB7CiAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaCh2YWx1ZSgpKTsKICAgICAgICAgICAgICAgICAgICB3aGl0ZSgpOwogICAgICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ10nKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQoJ10nKTsKICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5OwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICBuZXh0KCcsJyk7CiAgICAgICAgICAgICAgICAgICAgd2hpdGUoKTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICAgICBlcnJvcigiQmFkIGFycmF5Iik7CiAgICAgICAgfSwKCiAgICAgICAgb2JqZWN0ID0gZnVuY3Rpb24gKCkgewoKICAgICAgICAgICAgdmFyIGtleSwKICAgICAgICAgICAgICAgIG9iamVjdCA9IHt9OwoKICAgICAgICAgICAgaWYgKGNoID09PSAneycpIHsKICAgICAgICAgICAgICAgIG5leHQoJ3snKTsKICAgICAgICAgICAgICAgIHdoaXRlKCk7CiAgICAgICAgICAgICAgICBpZiAoY2ggPT09ICd9JykgewogICAgICAgICAgICAgICAgICAgIG5leHQoJ30nKTsKICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0OyAgIC8vIGVtcHR5IG9iamVjdAogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgd2hpbGUgKGNoKSB7CiAgICAgICAgICAgICAgICAgICAga2V5ID0gc3RyaW5nKCk7CiAgICAgICAgICAgICAgICAgICAgd2hpdGUoKTsKICAgICAgICAgICAgICAgICAgICBuZXh0KCc6Jyk7CiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkgewogICAgICAgICAgICAgICAgICAgICAgICBlcnJvcignRHVwbGljYXRlIGtleSAiJyArIGtleSArICciJyk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIG9iamVjdFtrZXldID0gdmFsdWUoKTsKICAgICAgICAgICAgICAgICAgICB3aGl0ZSgpOwogICAgICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ30nKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQoJ30nKTsKICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgbmV4dCgnLCcpOwogICAgICAgICAgICAgICAgICAgIHdoaXRlKCk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZXJyb3IoIkJhZCBvYmplY3QiKTsKICAgICAgICB9OwoKICAgIHZhbHVlID0gZnVuY3Rpb24gKCkgewoKICAgICAgICB3aGl0ZSgpOwogICAgICAgIHN3aXRjaCAoY2gpIHsKICAgICAgICBjYXNlICd7JzoKICAgICAgICAgICAgcmV0dXJuIG9iamVjdCgpOwogICAgICAgIGNhc2UgJ1snOgogICAgICAgICAgICByZXR1cm4gYXJyYXkoKTsKICAgICAgICBjYXNlICciJzoKICAgICAgICAgICAgcmV0dXJuIHN0cmluZygpOwogICAgICAgIGNhc2UgJy0nOgogICAgICAgICAgICByZXR1cm4gbnVtYmVyKCk7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgICAgcmV0dXJuIGNoID49ICcwJyAmJiBjaCA8PSAnOScgPyBudW1iZXIoKSA6IHdvcmQoKTsKICAgICAgICB9CiAgICB9OwoKICAgIHJldHVybiBmdW5jdGlvbiAoc291cmNlLCByZXZpdmVyKSB7CiAgICAgICAgdmFyIHJlc3VsdDsKCiAgICAgICAgdGV4dCA9IHNvdXJjZTsKICAgICAgICBhdCA9IDA7CiAgICAgICAgY2ggPSAnICc7CiAgICAgICAgcmVzdWx0ID0gdmFsdWUoKTsKICAgICAgICB3aGl0ZSgpOwogICAgICAgIGlmIChjaCkgewogICAgICAgICAgICBlcnJvcigiU3ludGF4IGVycm9yIik7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gdHlwZW9mIHJldml2ZXIgPT09ICdmdW5jdGlvbicgPyBmdW5jdGlvbiB3YWxrKGhvbGRlciwga2V5KSB7CiAgICAgICAgICAgIHZhciBrLCB2LCB2YWx1ZSA9IGhvbGRlcltrZXldOwogICAgICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JykgewogICAgICAgICAgICAgICAgZm9yIChrIGluIHZhbHVlKSB7CiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrKSkgewogICAgICAgICAgICAgICAgICAgICAgICB2ID0gd2Fsayh2YWx1ZSwgayk7CiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2tdID0gdjsKICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWx1ZVtrXTsKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gcmV2aXZlci5jYWxsKGhvbGRlciwga2V5LCB2YWx1ZSk7CiAgICAgICAgfSh7Jyc6IHJlc3VsdH0sICcnKSA6IHJlc3VsdDsKICAgIH07Cn0pOwoKYWNlLmRlZmluZSgiYWNlL21vZGUvanNvbl93b3JrZXIiLFtdLCBmdW5jdGlvbihyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpIHsKInVzZSBzdHJpY3QiOwoKdmFyIG9vcCA9IHJlcXVpcmUoIi4uL2xpYi9vb3AiKTsKdmFyIE1pcnJvciA9IHJlcXVpcmUoIi4uL3dvcmtlci9taXJyb3IiKS5NaXJyb3I7CnZhciBwYXJzZSA9IHJlcXVpcmUoIi4vanNvbi9qc29uX3BhcnNlIik7Cgp2YXIgSnNvbldvcmtlciA9IGV4cG9ydHMuSnNvbldvcmtlciA9IGZ1bmN0aW9uKHNlbmRlcikgewogICAgTWlycm9yLmNhbGwodGhpcywgc2VuZGVyKTsKICAgIHRoaXMuc2V0VGltZW91dCgyMDApOwp9OwoKb29wLmluaGVyaXRzKEpzb25Xb3JrZXIsIE1pcnJvcik7CgooZnVuY3Rpb24oKSB7CgogICAgdGhpcy5vblVwZGF0ZSA9IGZ1bmN0aW9uKCkgewogICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZG9jLmdldFZhbHVlKCk7CiAgICAgICAgdmFyIGVycm9ycyA9IFtdOwogICAgICAgIHRyeSB7CiAgICAgICAgICAgIGlmICh2YWx1ZSkKICAgICAgICAgICAgICAgIHBhcnNlKHZhbHVlKTsKICAgICAgICB9IGNhdGNoIChlKSB7CiAgICAgICAgICAgIHZhciBwb3MgPSB0aGlzLmRvYy5pbmRleFRvUG9zaXRpb24oZS5hdC0xKTsKICAgICAgICAgICAgZXJyb3JzLnB1c2goewogICAgICAgICAgICAgICAgcm93OiBwb3Mucm93LAogICAgICAgICAgICAgICAgY29sdW1uOiBwb3MuY29sdW1uLAogICAgICAgICAgICAgICAgdGV4dDogZS5tZXNzYWdlLAogICAgICAgICAgICAgICAgdHlwZTogImVycm9yIgogICAgICAgICAgICB9KTsKICAgICAgICB9CiAgICAgICAgdGhpcy5zZW5kZXIuZW1pdCgiYW5ub3RhdGUiLCBlcnJvcnMpOwogICAgfTsKCn0pLmNhbGwoSnNvbldvcmtlci5wcm90b3R5cGUpOwoKfSk7Cg==";
var dt = { exports: {} }, Et;
function Qi() {
  return Et || (Et = 1, function(G, H) {
    ace.define("ace/mode/json_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(w, R, N) {
      var b = w("../lib/oop"), S = w("./text_highlight_rules").TextHighlightRules, A = function() {
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
      b.inherits(A, S), R.JsonHighlightRules = A;
    }), ace.define("ace/mode/matching_brace_outdent", ["require", "exports", "module", "ace/range"], function(w, R, N) {
      var b = w("../range").Range, S = function() {
      };
      (function() {
        this.checkOutdent = function(A, a) {
          return /^\s+$/.test(A) ? /^\s*\}/.test(a) : !1;
        }, this.autoOutdent = function(A, a) {
          var c = A.getLine(a), n = c.match(/^(\s*\})/);
          if (!n)
            return 0;
          var r = n[1].length, i = A.findMatchingBracket({ row: a, column: r });
          if (!i || i.row == a)
            return 0;
          var t = this.$getIndent(A.getLine(i.row));
          A.replace(new b(a, 0, a, r - 1), t);
        }, this.$getIndent = function(A) {
          return A.match(/^\s*/)[0];
        };
      }).call(S.prototype), R.MatchingBraceOutdent = S;
    }), ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function(w, R, N) {
      var b = w("../../lib/oop"), S = w("../../range").Range, A = w("./fold_mode").FoldMode, a = R.FoldMode = function(c) {
        c && (this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + c.start)), this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + c.end)));
      };
      b.inherits(a, A), (function() {
        this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/, this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/, this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/, this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/, this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/, this._getFoldWidgetBase = this.getFoldWidget, this.getFoldWidget = function(c, n, r) {
          var i = c.getLine(r);
          if (this.singleLineBlockCommentRe.test(i) && !this.startRegionRe.test(i) && !this.tripleStarBlockCommentRe.test(i))
            return "";
          var t = this._getFoldWidgetBase(c, n, r);
          return !t && this.startRegionRe.test(i) ? "start" : t;
        }, this.getFoldWidgetRange = function(c, n, r, i) {
          var t = c.getLine(r);
          if (this.startRegionRe.test(t))
            return this.getCommentRegionBlock(c, t, r);
          var s = t.match(this.foldingStartMarker);
          if (s) {
            var e = s.index;
            if (s[1])
              return this.openingBracketBlock(c, s[1], r, e);
            var o = c.getCommentFoldRange(r, e + s[0].length, 1);
            return o && !o.isMultiLine() && (i ? o = this.getSectionRange(c, r) : n != "all" && (o = null)), o;
          }
          if (n !== "markbegin") {
            var s = t.match(this.foldingStopMarker);
            if (s) {
              var e = s.index + s[0].length;
              return s[1] ? this.closingBracketBlock(c, s[1], r, e) : c.getCommentFoldRange(r, e, -1);
            }
          }
        }, this.getSectionRange = function(c, n) {
          var r = c.getLine(n), i = r.search(/\S/), t = n, e = r.length;
          n = n + 1;
          for (var o = n, s = c.getLength(); ++n < s; ) {
            r = c.getLine(n);
            var l = r.search(/\S/);
            if (l !== -1) {
              if (i > l)
                break;
              var u = this.getFoldWidgetRange(c, "all", n);
              if (u) {
                if (u.start.row <= t)
                  break;
                if (u.isMultiLine())
                  n = u.end.row;
                else if (i == l)
                  break;
              }
              o = n;
            }
          }
          return new S(t, e, o, c.getLine(o).length);
        }, this.getCommentRegionBlock = function(c, n, r) {
          for (var i = n.search(/\s*$/), t = c.getLength(), e = r, o = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/, s = 1; ++r < t; ) {
            n = c.getLine(r);
            var l = o.exec(n);
            if (l && (l[1] ? s-- : s++, !s))
              break;
          }
          var u = r;
          if (u > e)
            return new S(e, i, u, n.length);
        };
      }).call(a.prototype);
    }), ace.define("ace/mode/json", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/json_highlight_rules", "ace/mode/matching_brace_outdent", "ace/mode/folding/cstyle", "ace/worker/worker_client"], function(w, R, N) {
      var b = w("../lib/oop"), S = w("./text").Mode, A = w("./json_highlight_rules").JsonHighlightRules, a = w("./matching_brace_outdent").MatchingBraceOutdent, c = w("./folding/cstyle").FoldMode, n = w("../worker/worker_client").WorkerClient, r = function() {
        this.HighlightRules = A, this.$outdent = new a(), this.$behaviour = this.$defaultBehaviour, this.foldingRules = new c();
      };
      b.inherits(r, S), (function() {
        this.lineCommentStart = "//", this.blockComment = { start: "/*", end: "*/" }, this.getNextLineIndent = function(i, t, e) {
          var o = this.$getIndent(t);
          if (i == "start") {
            var s = t.match(/^.*[\{\(\[]\s*$/);
            s && (o += e);
          }
          return o;
        }, this.checkOutdent = function(i, t, e) {
          return this.$outdent.checkOutdent(t, e);
        }, this.autoOutdent = function(i, t, e) {
          this.$outdent.autoOutdent(t, e);
        }, this.createWorker = function(i) {
          var t = new n(["ace"], "ace/mode/json_worker", "JsonWorker");
          return t.attachToDocument(i.getDocument()), t.on("annotate", function(e) {
            i.setAnnotations(e.data);
          }), t.on("terminate", function() {
            i.clearAnnotations();
          }), t;
        }, this.$id = "ace/mode/json";
      }).call(r.prototype), R.Mode = r;
    }), function() {
      ace.require(["ace/mode/json"], function(w) {
        G && (G.exports = w);
      });
    }();
  }(dt)), dt.exports;
}
var qi = Qi();
const eo = /* @__PURE__ */ Qt(qi), to = {
  __name: "AceEditorWrap",
  props: {
    modelValue: {
      type: Object,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(G, { emit: H }) {
    nt.config.setModuleUrl("ace/theme/chrome", ji), nt.config.setModuleUrl("ace/mode/json_worker", Ui), nt.config.setModuleUrl("ace/mode/json", eo);
    const w = G, R = H, N = ne("");
    return De(N, (b) => {
      try {
        R("update:modelValue", JSON.parse(b));
      } catch (S) {
        console.log(S);
      }
    }), Ye(() => {
      N.value = JSON.stringify(w.modelValue, null, 2);
    }), (b, S) => (J(), te(z(Ji), {
      value: N.value,
      "onUpdate:value": S[0] || (S[0] = (A) => N.value = A),
      lang: "json",
      theme: "chrome",
      style: { height: "600px" }
    }, null, 8, ["value"]));
  }
}, no = { id: "content-editor" }, io = { class: "preview-container fill-height" }, oo = {
  __name: "ComponentEditor",
  props: {
    modelValue: { default: [] },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(G) {
    const H = Ae("componentClipboard"), w = ne(!1), R = ne({
      component: "",
      props: {}
    }), N = ne(!1), b = ne(!1), S = ne(!1), A = ne(!1), a = ne(!1), c = ne([]), n = ne(""), r = qe(G, "modelValue"), { removeElement: i, pasteElement: t, insertElement: e } = Yt(r);
    function o(f) {
      H.copy(f, null);
    }
    function s(f) {
      const g = [...r.value], v = c.value.pop(), M = c.value.reduce((W, k) => W[k], g);
      M && (M[v] = f), r.value = g, N.value = !1, R.value = {}, c.value = [];
    }
    function l({ element: f, path: g }) {
      c.value = g, N.value = !0, R.value = f;
    }
    const u = (f) => {
      r.value = f;
    };
    function C() {
      if (n.value === "") {
        alert("Please select a component");
        return;
      }
      r.value.push({
        component: n.value,
        props: {}
      }), w.value = !1, n.value = "";
    }
    function p(f, g, v) {
      if (!f) return;
      f.preventDefault();
      const M = [
        {
          label: "Edit",
          onClick: () => {
            l({ element: g, path: v });
          }
        },
        {
          label: "Cut",
          onClick: () => {
            H.cut(g, v), H.isCut && i(v);
          }
        },
        {
          label: "Copy",
          onClick: () => {
            H.copy(g, v);
          }
        }
      ];
      H.hasContent() && M.push({
        label: "Paste",
        children: [
          {
            label: "Paste as Prepend",
            onClick: () => t(v, "prepend")
          },
          {
            label: "Paste as Append",
            onClick: () => t(v, "append")
          },
          {
            label: "Paste as Child",
            onClick: () => t(v, "child")
          }
        ]
      }), M.push(Xt(e, v)), M.push({
        label: "Delete",
        onClick: () => {
          i(v);
        }
      }), Ut.showContextMenu({
        x: f.x,
        y: f.y,
        items: M
      });
    }
    return (f, g) => {
      const v = ae("v-btn"), M = ae("v-spacer"), W = ae("v-list-item-title"), k = ae("v-list-item"), Z = ae("v-list"), y = ae("v-menu"), I = ae("v-toolbar"), d = ae("v-col"), h = ae("v-row"), m = ae("v-card-title"), x = ae("v-combobox"), $ = ae("v-card-text"), L = ae("v-card-actions"), B = ae("v-card"), T = ae("v-dialog");
      return J(), se("div", no, [
        ee(I, { class: "mb-2" }, {
          default: U(() => [
            ee(v, {
              active: A.value,
              onClick: g[0] || (g[0] = (V) => A.value = !A.value),
              icon: "fa-solid fa-code"
            }, null, 8, ["active"]),
            ee(v, {
              active: a.value,
              onClick: g[1] || (g[1] = (V) => a.value = !a.value)
            }, {
              default: U(() => g[14] || (g[14] = [
                Ie("Draggable")
              ])),
              _: 1,
              __: [14]
            }, 8, ["active"]),
            ee(v, {
              onClick: g[2] || (g[2] = (V) => w.value = !0),
              icon: "fa-solid fa-plus"
            }),
            ee(v, {
              onClick: g[3] || (g[3] = (V) => b.value = !b.value),
              icon: "fa-solid fa-tree"
            }),
            ee(M),
            ee(y, null, {
              activator: U(({ props: V }) => [
                ee(v, Fe(V, { icon: "fa-solid fa-clipboard" }), null, 16)
              ]),
              default: U(() => [
                ee(Z, null, {
                  default: U(() => [
                    (J(!0), se(Re, null, Ze(z(Kt), (V) => (J(), te(k, {
                      key: V.title,
                      onClick: (_) => o(V)
                    }, {
                      default: U(() => [
                        ee(W, null, {
                          default: U(() => [
                            Ie(Ge(V.title), 1)
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
        ee(h, null, {
          default: U(() => [
            A.value ? (J(), te(d, {
              key: 0,
              cols: 12
            }, {
              default: U(() => [
                ee(to, {
                  modelValue: r.value,
                  "onUpdate:modelValue": g[4] || (g[4] = (V) => r.value = V)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })) : (J(), te(d, {
              key: 1,
              cols: 12,
              class: "bordered fill-height"
            }, {
              default: U(() => [
                pe("div", io, [
                  pe("div", {
                    class: Be(["preview-content", { "has-docked-tree": b.value && S.value }])
                  }, [
                    ee(ft, {
                      modelValue: r.value,
                      "onUpdate:modelValue": g[5] || (g[5] = (V) => r.value = V),
                      onUpdateSections: u,
                      draggable_pro: a.value,
                      onOpenEdit: g[6] || (g[6] = ({ event: V, element: _, path: O }) => p(V, _, O))
                    }, null, 8, ["modelValue", "draggable_pro"])
                  ], 2),
                  b.value ? (J(), te(Wi, {
                    key: 0,
                    data: r.value,
                    "onUpdate:data": g[7] || (g[7] = (V) => r.value = V),
                    onClose: g[8] || (g[8] = (V) => b.value = !1),
                    onOpenEdit: l,
                    "onUpdate:docked": g[9] || (g[9] = (V) => S.value = V)
                  }, null, 8, ["data"])) : re("", !0)
                ])
              ]),
              _: 1
            }))
          ]),
          _: 1
        }),
        ee(T, {
          modelValue: w.value,
          "onUpdate:modelValue": g[12] || (g[12] = (V) => w.value = V),
          "max-width": "500px"
        }, {
          default: U(() => [
            ee(B, null, {
              default: U(() => [
                ee(m, null, {
                  default: U(() => g[15] || (g[15] = [
                    pe("span", { class: "text-h5" }, "Add Component", -1)
                  ])),
                  _: 1,
                  __: [15]
                }),
                ee($, null, {
                  default: U(() => [
                    ee(x, {
                      items: z(Cn),
                      modelValue: n.value,
                      "onUpdate:modelValue": g[10] || (g[10] = (V) => n.value = V),
                      label: "Component Name"
                    }, null, 8, ["items", "modelValue"])
                  ]),
                  _: 1
                }),
                ee(L, null, {
                  default: U(() => [
                    ee(v, {
                      color: "red",
                      onClick: g[11] || (g[11] = (V) => w.value = !1)
                    }, {
                      default: U(() => g[16] || (g[16] = [
                        Ie("Cancel")
                      ])),
                      _: 1,
                      __: [16]
                    }),
                    ee(v, {
                      onClick: C,
                      color: "primary"
                    }, {
                      default: U(() => g[17] || (g[17] = [
                        Ie("Add")
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
        ee(Hn, {
          data: R.value,
          dialog: N.value,
          "onUpdate:dialog": g[13] || (g[13] = (V) => N.value = V),
          onDataSaved: s
        }, null, 8, ["data", "dialog"])
      ]);
    };
  }
}, so = {
  install(G, H = {}) {
    G.component("ComponentEditor", oo), H.componentClipboard && G.provide("componentClipboard", H.componentClipboard);
  }
};
export {
  so as default
};
