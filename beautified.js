import {
    a as Ir,
    b as Pr,
    c as Wr
} from "./chunk-PQ55UY2B.mjs";
import {
    a as Cr
} from "./chunk-FJYLDT2O.mjs";
import {
    a as je
} from "./chunk-CRSNBUU3.mjs";
import "./chunk-MLUMG4NT.mjs";
import "./chunk-42U43NKG.mjs";
import {
    $ as pr,
    A as ir,
    B as T,
    Ba as ee,
    Ca as Rr,
    D as or,
    Da as kr,
    E as lr,
    F as sr,
    Fa as Ce,
    Ga as c,
    H as fr,
    Ia as Q,
    J as Ge,
    Ja as Ie,
    Ka as A,
    L as mr,
    La as re,
    M as R,
    Ma as Pe,
    N as dr,
    Oa as Ur,
    P as J,
    Q as Re,
    R as P,
    S as ke,
    V as $,
    W as k,
    X as cr,
    Y as pe,
    _ as O,
    aa as Me,
    ba as hr,
    ca as ur,
    da as gr,
    f as S,
    g as n,
    h as Ee,
    ha as xr,
    i as B,
    ja as x,
    ka as wr,
    la as he,
    ma as M,
    s as ar,
    t as tr,
    u as Te,
    v as N,
    va as Ue,
    w as fe,
    wa as yr,
    x as nr,
    xa as vr,
    ya as br
} from "./chunk-4KANIUPR.mjs";
import {
    A as _e,
    B as e,
    C as s,
    d as l,
    h as ne,
    j as z,
    l as Ze,
    m as Je,
    n as $e,
    o as X,
    q as er,
    r as D,
    v as Z,
    x as W,
    y as rr
} from "./chunk-DD64KX62.mjs";
import "./chunk-JR5VT52U.mjs";
import {
    c as C
} from "./chunk-Y5FTINFI.mjs";
var na = "default" in Te ? ar : Te,
    We = {},
    Fr = na;
We.createRoot = Fr.createRoot;
We.hydrateRoot = Fr.hydrateRoot;
var Nr = We.createRoot,
    Vr = We.hydrateRoot;
kr.loadFonts([]);
var Lr = [{
        explicitInter: !0,
        fonts: []
    }],
    Sr = [".framer-whcTq .framer-styles-preset-1uxfi7g:not(.rich-text-wrapper), .framer-whcTq .framer-styles-preset-1uxfi7g.rich-text-wrapper a { --framer-link-current-text-decoration: none; --framer-link-hover-text-decoration: none; --framer-link-text-decoration: none; }"],
    _r = "framer-whcTq";
var la = {
        GvCMUEDfZ: {
            hover: !0
        },
        HTpr3KFMl: {
            hover: !0
        },
        txkv2ZkVI: {
            hover: !0
        },
        YV2Y_uStE: {
            hover: !0
        }
    },
    sa = ["txkv2ZkVI", "GvCMUEDfZ", "HTpr3KFMl", "YV2Y_uStE", "qfahuZfVu"],
    fa = "framer-zRLml",
    ma = {
        GvCMUEDfZ: "framer-v-1v7y71",
        HTpr3KFMl: "framer-v-8lqywv",
        qfahuZfVu: "framer-v-1na6ske",
        txkv2ZkVI: "framer-v-1kjnww7",
        YV2Y_uStE: "framer-v-ny2m4v"
    };

function qe(r, ...t) {
    let i = {};
    return t?.forEach(a => a && Object.assign(i, r[a])), i
}
var da = {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    },
    ca = ({
        value: r,
        children: t
    }) => {
        let i = X(S),
            a = r ?? i.transition,
            d = Z(() => ({
                ...i,
                transition: a
            }), [JSON.stringify(a)]);
        return e(S.Provider, {
            value: d,
            children: t
        })
    },
    pa = n.create(l),
    ha = {
        "Active M": "GvCMUEDfZ",
        "Active S": "YV2Y_uStE",
        "Inactive M": "txkv2ZkVI",
        "Inactive S": "HTpr3KFMl",
        InactiveMphone: "qfahuZfVu"
    },
    ua = ({
        height: r,
        hover: t,
        id: i,
        link: a,
        title: d,
        width: w,
        ...u
    }) => ({
        ...u,
        agUBvE03f: d ?? u.agUBvE03f ?? "Product",
        lFfKiLlpT: a ?? u.lFfKiLlpT,
        O7gNihtj7: t ?? u.O7gNihtj7,
        variant: ha[u.variant] ?? u.variant ?? "txkv2ZkVI"
    }),
    ga = (r, t) => r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
    xa = z(function(r, t) {
        let i = W(null),
            a = t ?? i,
            d = D(),
            {
                activeLocale: w,
                setLocale: u
            } = T(),
            p = $(),
            {
                style: v,
                className: b,
                layoutId: U,
                variant: V,
                agUBvE03f: _,
                O7gNihtj7: f,
                lFfKiLlpT: F,
                ...K
            } = ua(r),
            {
                baseVariant: L,
                classNames: h,
                clearLoadingGesture: te,
                gestureHandlers: Y,
                gestureVariant: E,
                isLoading: ae,
                setGestureState: g,
                setVariant: j,
                variants: H
            } = ee({
                cycleOrder: sa,
                defaultVariant: "txkv2ZkVI",
                enabledGestures: la,
                ref: a,
                variant: V,
                variantClassNames: ma
            }),
            q = ga(r, H),
            {
                activeVariantCallback: I,
                delay: de
            } = Ue(L),
            se = I(async (...ce) => {
                if (g({
                        isHovered: !0
                    }), f && await f(...ce) === !1) return !1
            }),
            Se = P(fa, ...[]),
            Ae = () => !!(["HTpr3KFMl-hover", "YV2Y_uStE-hover"].includes(E) || ["HTpr3KFMl", "YV2Y_uStE"].includes(L));
        return e(B, {
            id: U ?? d,
            children: e(pa, {
                animate: H,
                initial: !1,
                children: e(ca, {
                    value: da,
                    children: e(x, {
                        href: F,
                        motionChild: !0,
                        nodeId: "txkv2ZkVI",
                        scopeId: "gCtkVAi9n",
                        children: s(n.a, {
                            ...K,
                            ...Y,
                            className: `${P(Se,"framer-1kjnww7",b,h)} framer-1xzulkw`,
                            "data-border": !0,
                            "data-framer-name": "Inactive M",
                            "data-highlight": !0,
                            layoutDependency: q,
                            layoutId: "txkv2ZkVI",
                            onMouseEnter: se,
                            ref: a,
                            style: {
                                "--border-bottom-width": "1px",
                                "--border-color": "rgba(255, 255, 255, 0)",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                backgroundColor: "rgba(255, 255, 255, 0)",
                                borderBottomLeftRadius: 50,
                                borderBottomRightRadius: 50,
                                borderTopLeftRadius: 50,
                                borderTopRightRadius: 50,
                                ...v
                            },
                            variants: {
                                "GvCMUEDfZ-hover": {
                                    backgroundColor: "rgb(49, 87, 168)"
                                },
                                "YV2Y_uStE-hover": {
                                    backgroundColor: "rgb(49, 87, 168)"
                                },
                                GvCMUEDfZ: {
                                    "--border-color": "var(--token-d559605d-d2a3-4776-a2c1-0436ceda3b18, rgba(255, 255, 255, 0.15))",
                                    backgroundColor: "rgb(70, 127, 247)",
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10
                                },
                                YV2Y_uStE: {
                                    "--border-color": "rgba(255, 255, 255, 0.15)",
                                    backgroundColor: "rgb(70, 127, 247)",
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10
                                }
                            },
                            ...qe({
                                "GvCMUEDfZ-hover": {
                                    "data-framer-name": void 0
                                },
                                "HTpr3KFMl-hover": {
                                    "data-framer-name": void 0
                                },
                                "txkv2ZkVI-hover": {
                                    "data-framer-name": void 0
                                },
                                "YV2Y_uStE-hover": {
                                    "data-framer-name": void 0
                                },
                                GvCMUEDfZ: {
                                    "data-framer-name": "Active M"
                                },
                                HTpr3KFMl: {
                                    "data-framer-name": "Inactive S"
                                },
                                qfahuZfVu: {
                                    "data-framer-name": "InactiveMphone",
                                    "data-highlight": void 0,
                                    onMouseEnter: void 0
                                },
                                YV2Y_uStE: {
                                    "data-framer-name": "Active S"
                                }
                            }, L, E),
                            children: [e(c, {
                                __fromCanvasComponent: !0,
                                children: e(l, {
                                    children: e(n.p, {
                                        style: {
                                            "--font-selector": "RlM7UG9wcGlucy1yZWd1bGFy",
                                            "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                            "--framer-font-size": "14px",
                                            "--framer-letter-spacing": "-0.04em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--extracted-r6o4lv, rgb(46, 46, 46))"
                                        },
                                        children: "Product"
                                    })
                                }),
                                className: "framer-8t79di",
                                fonts: ["FS;Poppins-regular"],
                                layoutDependency: q,
                                layoutId: "M6y17Vzh3",
                                style: {
                                    "--extracted-r6o4lv": "rgb(46, 46, 46)",
                                    "--framer-link-text-color": "rgb(0, 153, 255)",
                                    "--framer-link-text-decoration": "underline"
                                },
                                text: _,
                                variants: {
                                    GvCMUEDfZ: {
                                        "--extracted-r6o4lv": "rgb(255, 255, 255)"
                                    },
                                    YV2Y_uStE: {
                                        "--extracted-r6o4lv": "rgb(255, 255, 255)"
                                    }
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...qe({
                                    "HTpr3KFMl-hover": {
                                        children: e(l, {
                                            children: e(n.p, {
                                                style: {
                                                    "--font-selector": "RlM7UG9wcGlucy1ib2xk",
                                                    "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "700",
                                                    "--framer-letter-spacing": "-0.05em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(46, 46, 46))"
                                                },
                                                children: "Product"
                                            })
                                        }),
                                        fonts: ["FS;Poppins-bold"]
                                    },
                                    "txkv2ZkVI-hover": {
                                        children: e(l, {
                                            children: e(n.p, {
                                                style: {
                                                    "--font-selector": "RlM7UG9wcGlucy1ib2xk",
                                                    "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "700",
                                                    "--framer-letter-spacing": "-0.04em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(46, 46, 46))"
                                                },
                                                children: "Product"
                                            })
                                        }),
                                        fonts: ["FS;Poppins-bold"]
                                    },
                                    GvCMUEDfZ: {
                                        children: e(l, {
                                            children: e(n.p, {
                                                style: {
                                                    "--font-selector": "RlM7UG9wcGlucy1yZWd1bGFy",
                                                    "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-letter-spacing": "-0.04em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                                },
                                                children: "Product"
                                            })
                                        })
                                    },
                                    HTpr3KFMl: {
                                        children: e(l, {
                                            children: e(n.p, {
                                                style: {
                                                    "--font-selector": "RlM7UG9wcGlucy1yZWd1bGFy",
                                                    "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-letter-spacing": "-0.05em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(46, 46, 46))"
                                                },
                                                children: "Product"
                                            })
                                        })
                                    },
                                    qfahuZfVu: {
                                        children: e(l, {
                                            children: e(n.p, {
                                                style: {
                                                    "--font-selector": "RlM7UG9wcGlucy1tZWRpdW0=",
                                                    "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                    "--framer-font-size": "24px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "-0.04em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(46, 46, 46))"
                                                },
                                                children: "Product"
                                            })
                                        }),
                                        fonts: ["FS;Poppins-medium"]
                                    },
                                    YV2Y_uStE: {
                                        children: e(l, {
                                            children: e(n.p, {
                                                style: {
                                                    "--font-selector": "RlM7UG9wcGlucy1yZWd1bGFy",
                                                    "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-letter-spacing": "-0.05em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                                },
                                                children: "Product"
                                            })
                                        })
                                    }
                                }, L, E)
                            }), Ae() && e(n.div, {
                                className: "framer-tqp37f",
                                "data-framer-name": "Caret",
                                layoutDependency: q,
                                layoutId: "TlS5UMDsl",
                                children: e(Q, {
                                    className: "framer-e9saow",
                                    "data-framer-name": "graphic",
                                    layout: "position",
                                    layoutDependency: q,
                                    layoutId: "bGGFeWxhU",
                                    opacity: 1,
                                    style: {
                                        backgroundColor: "rgba(31, 31, 31, 0)"
                                    },
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12"><path d="M 0 0 L 12 0 L 12 12 L 0 12 Z" fill="transparent"></path><path d="M 9.75 4.5 L 6 8.25 L 2.25 4.5" fill="transparent" stroke-width="1.2" stroke="rgba(255, 255, 255, 0.7)" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                                    svgContentId: 12744029950,
                                    withExternalLayout: !0,
                                    ...qe({
                                        HTpr3KFMl: {
                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12"><path d="M 0 0 L 12 0 L 12 12 L 0 12 Z" fill="transparent"></path><path d="M 9.75 4.5 L 6 8.25 L 2.25 4.5" fill="transparent" stroke-width="1.2" stroke="rgba(0, 0, 0, 0.7)" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                                            svgContentId: 9671616140
                                        },
                                        YV2Y_uStE: {
                                            svgContentId: 10546020129
                                        }
                                    }, L, E)
                                })
                            })]
                        })
                    })
                })
            })
        })
    }),
    wa = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-zRLml.framer-1xzulkw, .framer-zRLml .framer-1xzulkw { display: block; }", ".framer-zRLml.framer-1kjnww7 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 8px 14px 8px 14px; position: relative; text-decoration: none; width: min-content; }", ".framer-zRLml .framer-8t79di { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-zRLml .framer-tqp37f { flex: none; height: 13px; overflow: visible; position: relative; width: 8px; }", ".framer-zRLml .framer-e9saow { flex: none; height: 12px; left: calc(55.55555555555558% - 12px / 2); position: absolute; top: 0px; width: 12px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-zRLml.framer-1kjnww7 { gap: 0px; } .framer-zRLml.framer-1kjnww7 > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } .framer-zRLml.framer-1kjnww7 > :first-child { margin-left: 0px; } .framer-zRLml.framer-1kjnww7 > :last-child { margin-right: 0px; } }", '.framer-zRLml[data-border="true"]::after, .framer-zRLml [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'],
    ue = O(xa, wa, "framer-zRLml"),
    G = ue;
ue.displayName = "AI Kit/Navigation/Nav Top Item";
ue.defaultProps = {
    height: 33,
    width: 78
};
J(ue, {
    variant: {
        options: ["txkv2ZkVI", "GvCMUEDfZ", "HTpr3KFMl", "YV2Y_uStE", "qfahuZfVu"],
        optionTitles: ["Inactive M", "Active M", "Inactive S", "Active S", "InactiveMphone"],
        title: "Variant",
        type: R.Enum
    },
    agUBvE03f: {
        defaultValue: "Product",
        displayTextArea: !1,
        title: "Title",
        type: R.String
    },
    O7gNihtj7: {
        title: "Hover",
        type: R.EventHandler
    },
    lFfKiLlpT: {
        title: "Link",
        type: R.Link
    }
});
A(ue, [{
    explicitInter: !0,
    fonts: [{
        family: "Poppins",
        source: "fontshare",
        style: "normal",
        url: "https://framerusercontent.com/third-party-assets/fontshare/wf/NC2MP33RO4WQTSTEEAWBJLAEXNCNEQVF/7F4U3COKLHQH4WUH3AXPC7N4UELEWJQN/JMWNCAGBH3TLANIVQPVABVAVNV5QERTH.woff2",
        weight: "400"
    }, {
        family: "Poppins",
        source: "fontshare",
        style: "normal",
        url: "https://framerusercontent.com/third-party-assets/fontshare/wf/K4RHKGAGLQZBXEZQT2O2AGSLKJF2E4YC/JRUTXNFPWLFGIEVSSEYOW7EP7TYM3V6A/UCDYLFFGLZRGCFY5GYDYM5LDB52BAR5M.woff2",
        weight: "500"
    }, {
        family: "Poppins",
        source: "fontshare",
        style: "normal",
        url: "https://framerusercontent.com/third-party-assets/fontshare/wf/EOHGWBZYYKO6R4PWP4S2B3FFWHHBEZN6/UWQLMF4AFWLXCJQCFV3WRVYC77KZXPRB/FYG6OCH7XOLUUSZTIZE65ATBZWF623O4.woff2",
        weight: "700"
    }]
}], {
    supportsExplicitInterCodegen: !0
});
var ya = {
        Ag2ebVm1g: {
            hover: !0
        },
        bxtyn2S_z: {
            hover: !0
        },
        vEUnhRveC: {
            hover: !0
        }
    },
    va = ["Ag2ebVm1g", "bxtyn2S_z", "vEUnhRveC"],
    ba = "framer-MQtTR",
    Ra = {
        Ag2ebVm1g: "framer-v-1hwe3iu",
        bxtyn2S_z: "framer-v-16q4rsu",
        vEUnhRveC: "framer-v-2nlvm1"
    };

function Er(r, ...t) {
    let i = {};
    return t?.forEach(a => a && Object.assign(i, r[a])), i
}
var ka = {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    },
    Ua = ({
        value: r,
        children: t
    }) => {
        let i = X(S),
            a = r ?? i.transition,
            d = Z(() => ({
                ...i,
                transition: a
            }), [JSON.stringify(a)]);
        return e(S.Provider, {
            value: d,
            children: t
        })
    },
    Ca = n.create(l),
    Ia = {
        Regular: "Ag2ebVm1g",
        Small: "bxtyn2S_z",
        Tiny: "vEUnhRveC"
    },
    Pa = ({
        background: r,
        backgroundBlur: t,
        height: i,
        id: a,
        link: d,
        outline: w,
        textColor: u,
        title: p,
        width: v,
        ...b
    }) => {
        var U, V, _, f, F;
        return {
            ...b,
            B3qPKukGP: (U = u ?? b.B3qPKukGP) !== null && U !== void 0 ? U : "rgb(255, 255, 255)",
            jakO2hDPw: t ?? b.jakO2hDPw,
            jcBXvG4Jw: (V = p ?? b.jcBXvG4Jw) !== null && V !== void 0 ? V : "Join waitlist",
            UDEEY8z8V: (_ = r ?? b.UDEEY8z8V) !== null && _ !== void 0 ? _ : "rgba(152, 86, 255, 0.4)",
            variant: (F = (f = Ia[b.variant]) !== null && f !== void 0 ? f : b.variant) !== null && F !== void 0 ? F : "Ag2ebVm1g",
            WIxL9YJdV: d ?? b.WIxL9YJdV,
            XhahqhK15: w ?? b.XhahqhK15
        }
    },
    Wa = (r, t) => r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
    Fa = z(function(r, t) {
        let {
            activeLocale: i,
            setLocale: a
        } = T(), {
            style: d,
            className: w,
            layoutId: u,
            variant: p,
            UDEEY8z8V: v,
            B3qPKukGP: b,
            jcBXvG4Jw: U,
            WIxL9YJdV: V,
            jakO2hDPw: _,
            XhahqhK15: f,
            ...F
        } = Pa(r), {
            baseVariant: K,
            classNames: L,
            clearLoadingGesture: h,
            gestureHandlers: te,
            gestureVariant: Y,
            isLoading: E,
            setGestureState: ae,
            setVariant: g,
            variants: j
        } = ee({
            cycleOrder: va,
            defaultVariant: "Ag2ebVm1g",
            enabledGestures: ya,
            variant: p,
            variantClassNames: Ra
        }), H = Wa(r, j), q = W(null), I = D(), de = [], se = $();
        return e(B, {
            id: u ?? I,
            children: e(Ca, {
                animate: j,
                initial: !1,
                children: e(Ua, {
                    value: ka,
                    children: e(x, {
                        href: V,
                        nodeId: "Ag2ebVm1g",
                        smoothScroll: !0,
                        children: s(n.a, {
                            ...F,
                            ...te,
                            className: `${P(ba,...de,"framer-1hwe3iu",w,L)} framer-fz6oq8`,
                            "data-border": !0,
                            "data-framer-name": "Regular",
                            layoutDependency: H,
                            layoutId: "Ag2ebVm1g",
                            ref: t ?? q,
                            style: {
                                "--border-bottom-width": "1px",
                                "--border-color": "rgba(255, 255, 255, 0.15)",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                backdropFilter: `blur(${_}px)`,
                                backgroundColor: v,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                boxShadow: "inset 0px 0px 6px 3px rgba(255, 255, 255, 0.15)",
                                ...d
                            },
                            variants: {
                                "Ag2ebVm1g-hover": {
                                    boxShadow: "inset 0px 0px 6px 3px rgba(255, 255, 255, 0.05)"
                                },
                                "bxtyn2S_z-hover": {
                                    boxShadow: "inset 0px 0px 6px 3px rgba(255, 255, 255, 0.05)"
                                },
                                vEUnhRveC: {
                                    borderBottomLeftRadius: 8,
                                    borderBottomRightRadius: 8,
                                    borderTopLeftRadius: 8,
                                    borderTopRightRadius: 8
                                }
                            },
                            ...Er({
                                "Ag2ebVm1g-hover": {
                                    "data-framer-name": void 0
                                },
                                "bxtyn2S_z-hover": {
                                    "data-framer-name": void 0
                                },
                                "vEUnhRveC-hover": {
                                    "data-framer-name": void 0
                                },
                                bxtyn2S_z: {
                                    "data-framer-name": "Small"
                                },
                                vEUnhRveC: {
                                    "data-framer-name": "Tiny"
                                }
                            }, K, Y),
                            children: [e(c, {
                                __fromCanvasComponent: !0,
                                children: e(l, {
                                    children: e(n.p, {
                                        style: {
                                            "--font-selector": "SW50ZXItTWVkaXVt",
                                            "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-weight": "500",
                                            "--framer-letter-spacing": "-0.02em",
                                            "--framer-line-height": "1.3em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-B3qPKukGP-lsLanjCDN))"
                                        },
                                        children: "Join waitlist"
                                    })
                                }),
                                className: "framer-1w6ugp3",
                                fonts: ["Inter-Medium"],
                                layoutDependency: H,
                                layoutId: "p4WhE7oGT",
                                style: {
                                    "--extracted-r6o4lv": "var(--variable-reference-B3qPKukGP-lsLanjCDN)",
                                    "--framer-link-text-color": "rgb(0, 153, 255)",
                                    "--framer-link-text-decoration": "underline",
                                    "--variable-reference-B3qPKukGP-lsLanjCDN": b,
                                    opacity: 1
                                },
                                text: U,
                                variants: {
                                    "Ag2ebVm1g-hover": {
                                        opacity: .6
                                    },
                                    "bxtyn2S_z-hover": {
                                        opacity: .6
                                    },
                                    "vEUnhRveC-hover": {
                                        opacity: .6
                                    }
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...Er({
                                    bxtyn2S_z: {
                                        children: e(l, {
                                            children: e(n.p, {
                                                style: {
                                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                                    "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "-0.02em",
                                                    "--framer-line-height": "1.3em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-B3qPKukGP-lsLanjCDN))"
                                                },
                                                children: "Join waitlist"
                                            })
                                        })
                                    },
                                    vEUnhRveC: {
                                        children: e(l, {
                                            children: e(n.p, {
                                                style: {
                                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                                    "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                    "--framer-font-size": "13px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "1.3em",
                                                    "--framer-text-alignment": "left",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-B3qPKukGP-lsLanjCDN))"
                                                },
                                                children: "Join waitlist"
                                            })
                                        })
                                    }
                                }, K, Y)
                            }), f && e(n.div, {
                                className: "framer-1dwzca1",
                                "data-border": !0,
                                "data-framer-name": "Outline",
                                layoutDependency: H,
                                layoutId: "cKUF8TAj1",
                                style: {
                                    "--border-bottom-width": "1px",
                                    "--border-color": "var(--token-d559605d-d2a3-4776-a2c1-0436ceda3b18, rgba(255, 255, 255, 0.15))",
                                    "--border-left-width": "1px",
                                    "--border-right-width": "1px",
                                    "--border-style": "solid",
                                    "--border-top-width": "1px",
                                    borderBottomLeftRadius: 12,
                                    borderBottomRightRadius: 12,
                                    borderTopLeftRadius: 12,
                                    borderTopRightRadius: 12
                                },
                                variants: {
                                    bxtyn2S_z: {
                                        borderBottomLeftRadius: 14,
                                        borderBottomRightRadius: 14,
                                        borderTopLeftRadius: 14,
                                        borderTopRightRadius: 14
                                    }
                                }
                            })]
                        })
                    })
                })
            })
        })
    }),
    Na = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-MQtTR.framer-fz6oq8, .framer-MQtTR .framer-fz6oq8 { display: block; }", ".framer-MQtTR.framer-1hwe3iu { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 15px 20px 15px 20px; position: relative; text-decoration: none; width: min-content; }", ".framer-MQtTR .framer-1w6ugp3 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-MQtTR .framer-1dwzca1 { bottom: -8px; flex: none; left: -8px; overflow: hidden; position: absolute; right: -8px; top: -8px; will-change: var(--framer-will-change-override, transform); z-index: 1; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-MQtTR.framer-1hwe3iu { gap: 0px; } .framer-MQtTR.framer-1hwe3iu > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-MQtTR.framer-1hwe3iu > :first-child { margin-left: 0px; } .framer-MQtTR.framer-1hwe3iu > :last-child { margin-right: 0px; } }", ".framer-MQtTR.framer-v-16q4rsu.framer-1hwe3iu { padding: 10px 15px 10px 15px; }", ".framer-MQtTR.framer-v-2nlvm1.framer-1hwe3iu { padding: 8px 13px 8px 12px; }", ".framer-MQtTR.framer-v-1hwe3iu.hover .framer-1dwzca1, .framer-MQtTR.framer-v-16q4rsu.hover .framer-1dwzca1, .framer-MQtTR.framer-v-2nlvm1.hover .framer-1dwzca1 { bottom: -6px; left: -6px; right: -6px; top: -6px; }", '.framer-MQtTR[data-border="true"]::after, .framer-MQtTR [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'],
    ge = O(Fa, Na, "framer-MQtTR"),
    ze = ge;
ge.displayName = "AI Kit/Button";
ge.defaultProps = {
    height: 51,
    width: 127
};
J(ge, {
    variant: {
        options: ["Ag2ebVm1g", "bxtyn2S_z", "vEUnhRveC"],
        optionTitles: ["Regular", "Small", "Tiny"],
        title: "Variant",
        type: R.Enum
    },
    UDEEY8z8V: {
        defaultValue: "rgba(152, 86, 255, 0.4)",
        title: "Background",
        type: R.Color
    },
    B3qPKukGP: {
        defaultValue: "rgb(255, 255, 255)",
        title: "Text color",
        type: R.Color
    },
    jcBXvG4Jw: {
        defaultValue: "Join waitlist",
        displayTextArea: !1,
        title: "Title",
        type: R.String
    },
    WIxL9YJdV: {
        title: "Link",
        type: R.Link
    },
    jakO2hDPw: {
        defaultValue: 0,
        max: 5,
        title: "Background Blur",
        type: R.Number
    },
    XhahqhK15: {
        defaultValue: !1,
        title: "Outline",
        type: R.Boolean
    }
});
A(ge, [{
    explicitInter: !0,
    fonts: [{
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2",
        weight: "500"
    }]
}], {
    supportsExplicitInterCodegen: !0
});
var Va = re(je),
    Tr = Re(Cr),
    La = {
        Z4SnpK1Vi: {
            hover: !0
        }
    },
    Sa = ["Z4SnpK1Vi", "DrxbG5f0B"],
    _a = "framer-QiI5B",
    Ea = {
        DrxbG5f0B: "framer-v-n6i3ig",
        Z4SnpK1Vi: "framer-v-9wxwfk"
    };

function Ta(r, ...t) {
    let i = {};
    return t?.forEach(a => a && Object.assign(i, r[a])), i
}
var Ga = {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    },
    Ma = ({
        value: r,
        children: t
    }) => {
        let i = X(S),
            a = r ?? i.transition,
            d = Z(() => ({
                ...i,
                transition: a
            }), [JSON.stringify(a)]);
        return e(S.Provider, {
            value: d,
            children: t
        })
    },
    ja = n.create(l),
    qa = {
        Default: "Z4SnpK1Vi",
        Mobile: "DrxbG5f0B"
    },
    za = ({
        description: r,
        height: t,
        icon: i,
        id: a,
        link: d,
        title: w,
        width: u,
        ...p
    }) => ({
        ...p,
        dfjxUwxeX: i ?? p.dfjxUwxeX ?? "Gauge",
        variant: qa[p.variant] ?? p.variant ?? "Z4SnpK1Vi",
        WIHpWF4FG: r ?? p.WIHpWF4FG ?? "Perform SEO audits",
        ZFG2ubs1r: d ?? p.ZFG2ubs1r,
        zZc9wPD9w: w ?? p.zZc9wPD9w ?? "User-friendly dashboard"
    }),
    Da = (r, t) => r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
    Ba = z(function(r, t) {
        let i = W(null),
            a = t ?? i,
            d = D(),
            {
                activeLocale: w,
                setLocale: u
            } = T(),
            p = $(),
            {
                style: v,
                className: b,
                layoutId: U,
                variant: V,
                dfjxUwxeX: _,
                zZc9wPD9w: f,
                WIHpWF4FG: F,
                ZFG2ubs1r: K,
                ...L
            } = za(r),
            {
                baseVariant: h,
                classNames: te,
                clearLoadingGesture: Y,
                gestureHandlers: E,
                gestureVariant: ae,
                isLoading: g,
                setGestureState: j,
                setVariant: H,
                variants: q
            } = ee({
                cycleOrder: Sa,
                defaultVariant: "Z4SnpK1Vi",
                enabledGestures: La,
                ref: a,
                variant: V,
                variantClassNames: Ea
            }),
            I = Da(r, q),
            se = P(_a, ...[]),
            be = () => h !== "DrxbG5f0B";
        return e(B, {
            id: U ?? d,
            children: e(ja, {
                animate: q,
                initial: !1,
                children: e(Ma, {
                    value: Ga,
                    children: e(x, {
                        href: K,
                        motionChild: !0,
                        nodeId: "Z4SnpK1Vi",
                        scopeId: "NZIlFIDJ9",
                        children: s(n.a, {
                            ...L,
                            ...E,
                            className: `${P(se,"framer-9wxwfk",b,te)} framer-1yvg75t`,
                            "data-border": !0,
                            "data-framer-name": "Default",
                            layoutDependency: I,
                            layoutId: "Z4SnpK1Vi",
                            ref: a,
                            style: {
                                "--border-bottom-width": "1px",
                                "--border-color": "rgba(255, 255, 255, 0)",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                backgroundColor: "rgba(255, 255, 255, 0)",
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                ...v
                            },
                            variants: {
                                "Z4SnpK1Vi-hover": {
                                    "--border-color": "rgba(255, 255, 255, 0.15)",
                                    backgroundColor: "rgba(224, 224, 224, 0.89)"
                                }
                            },
                            ...Ta({
                                "Z4SnpK1Vi-hover": {
                                    "data-framer-name": void 0
                                },
                                DrxbG5f0B: {
                                    "data-framer-name": "Mobile"
                                }
                            }, h, ae),
                            children: [e(n.div, {
                                className: "framer-12s60gd",
                                "data-border": !0,
                                layoutDependency: I,
                                layoutId: "Y5UEOxXOQ",
                                style: {
                                    "--border-bottom-width": "1px",
                                    "--border-color": "var(--token-d559605d-d2a3-4776-a2c1-0436ceda3b18, rgba(255, 255, 255, 0.15))",
                                    "--border-left-width": "1px",
                                    "--border-right-width": "1px",
                                    "--border-style": "solid",
                                    "--border-top-width": "1px",
                                    backgroundColor: "rgba(255, 255, 255, 0.25)",
                                    borderBottomLeftRadius: 8,
                                    borderBottomRightRadius: 8,
                                    borderTopLeftRadius: 8,
                                    borderTopRightRadius: 8
                                },
                                variants: {
                                    DrxbG5f0B: {
                                        "--border-bottom-width": "0px",
                                        "--border-left-width": "0px",
                                        "--border-right-width": "0px",
                                        "--border-top-width": "0px",
                                        backgroundColor: "rgba(0, 0, 0, 0)"
                                    }
                                },
                                children: e(k, {
                                    children: e(pe, {
                                        className: "framer-ebs9fp-container",
                                        isModuleExternal: !0,
                                        layoutDependency: I,
                                        layoutId: "b6D6OcA4N-container",
                                        nodeId: "b6D6OcA4N",
                                        rendersWithMotion: !0,
                                        scopeId: "NZIlFIDJ9",
                                        children: e(je, {
                                            color: "rgb(5, 5, 5)",
                                            height: "100%",
                                            iconSearch: "House",
                                            iconSelection: _,
                                            id: "b6D6OcA4N",
                                            layoutId: "b6D6OcA4N",
                                            mirrored: !1,
                                            selectByList: !0,
                                            style: {
                                                height: "100%",
                                                width: "100%"
                                            },
                                            weight: "bold",
                                            width: "100%"
                                        })
                                    })
                                })
                            }), s(n.div, {
                                className: "framer-8lr0y7",
                                layoutDependency: I,
                                layoutId: "tifzy2eTG",
                                children: [e(c, {
                                    __fromCanvasComponent: !0,
                                    children: e(l, {
                                        children: e(n.h6, {
                                            style: {
                                                "--font-selector": "SW50ZXItTWVkaXVt",
                                                "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-font-weight": "500",
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-line-height": "1.3em",
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--extracted-1w1cjl5, rgb(5, 5, 5))"
                                            },
                                            children: "User-friendly dashboard"
                                        })
                                    }),
                                    className: "framer-1qvyg9a",
                                    fonts: ["Inter-Medium"],
                                    layoutDependency: I,
                                    layoutId: "Ulvddnszv",
                                    style: {
                                        "--extracted-1w1cjl5": "rgb(5, 5, 5)",
                                        "--framer-link-text-color": "rgb(0, 153, 255)",
                                        "--framer-link-text-decoration": "underline"
                                    },
                                    text: f,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), be() && e(c, {
                                    __fromCanvasComponent: !0,
                                    children: e(l, {
                                        children: e(n.p, {
                                            style: {
                                                "--font-selector": "RlM7UG9wcGlucy1yZWd1bGFy",
                                                "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                "--framer-font-size": "13px",
                                                "--framer-letter-spacing": "-0.05em",
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--extracted-r6o4lv, rgb(97, 97, 97))"
                                            },
                                            children: "Perform SEO audits"
                                        })
                                    }),
                                    className: "framer-1lzmswp",
                                    fonts: ["FS;Poppins-regular"],
                                    layoutDependency: I,
                                    layoutId: "rrj3zITWV",
                                    style: {
                                        "--extracted-r6o4lv": "rgb(97, 97, 97)",
                                        "--framer-link-text-color": "rgb(0, 153, 255)",
                                        "--framer-link-text-decoration": "underline"
                                    },
                                    text: F,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })]
                            })]
                        })
                    })
                })
            })
        })
    }),
    Oa = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-QiI5B.framer-1yvg75t, .framer-QiI5B .framer-1yvg75t { display: block; }", ".framer-QiI5B.framer-9wxwfk { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 8px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-QiI5B .framer-12s60gd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 40px; }", ".framer-QiI5B .framer-ebs9fp-container { flex: none; height: 18px; position: relative; width: 18px; }", ".framer-QiI5B .framer-8lr0y7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-QiI5B .framer-1qvyg9a, .framer-QiI5B .framer-1lzmswp { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-QiI5B.framer-9wxwfk, .framer-QiI5B .framer-12s60gd, .framer-QiI5B .framer-8lr0y7 { gap: 0px; } .framer-QiI5B.framer-9wxwfk > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-QiI5B.framer-9wxwfk > :first-child { margin-left: 0px; } .framer-QiI5B.framer-9wxwfk > :last-child { margin-right: 0px; } .framer-QiI5B .framer-12s60gd > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-QiI5B .framer-12s60gd > :first-child, .framer-QiI5B .framer-8lr0y7 > :first-child { margin-top: 0px; } .framer-QiI5B .framer-12s60gd > :last-child, .framer-QiI5B .framer-8lr0y7 > :last-child { margin-bottom: 0px; } .framer-QiI5B .framer-8lr0y7 > * { margin: 0px; margin-bottom: calc(2px / 2); margin-top: calc(2px / 2); } }", ".framer-QiI5B.framer-v-n6i3ig.framer-9wxwfk { gap: 4px; padding: 0px; }", ".framer-QiI5B.framer-v-n6i3ig .framer-12s60gd { height: 30px; width: 30px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-QiI5B.framer-v-n6i3ig.framer-9wxwfk { gap: 0px; } .framer-QiI5B.framer-v-n6i3ig.framer-9wxwfk > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-QiI5B.framer-v-n6i3ig.framer-9wxwfk > :first-child { margin-left: 0px; } .framer-QiI5B.framer-v-n6i3ig.framer-9wxwfk > :last-child { margin-right: 0px; } }", '.framer-QiI5B[data-border="true"]::after, .framer-QiI5B [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'],
    xe = O(Ba, Oa, "framer-QiI5B"),
    Fe = xe;
xe.displayName = "AI Kit/Navigation/Nav Item Menu";
xe.defaultProps = {
    height: 56,
    width: 215
};
J(xe, {
    variant: {
        options: ["Z4SnpK1Vi", "DrxbG5f0B"],
        optionTitles: ["Default", "Mobile"],
        title: "Variant",
        type: R.Enum
    },
    dfjxUwxeX: Tr?.iconSelection && {
        ...Tr.iconSelection,
        defaultValue: "Gauge",
        description: void 0,
        hidden: void 0,
        title: "Icon"
    },
    zZc9wPD9w: {
        defaultValue: "User-friendly dashboard",
        displayTextArea: !1,
        title: "Title",
        type: R.String
    },
    WIHpWF4FG: {
        defaultValue: "Perform SEO audits",
        displayTextArea: !0,
        title: "Description",
        type: R.String
    },
    ZFG2ubs1r: {
        title: "Link",
        type: R.Link
    }
});
A(xe, [{
    explicitInter: !0,
    fonts: [{
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2",
        weight: "500"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2",
        weight: "500"
    }, {
        family: "Poppins",
        source: "fontshare",
        style: "normal",
        url: "https://framerusercontent.com/third-party-assets/fontshare/wf/NC2MP33RO4WQTSTEEAWBJLAEXNCNEQVF/7F4U3COKLHQH4WUH3AXPC7N4UELEWJQN/JMWNCAGBH3TLANIVQPVABVAVNV5QERTH.woff2",
        weight: "400"
    }]
}, ...Va], {
    supportsExplicitInterCodegen: !0
});
var Qa = re(Fe),
    Aa = ["TOfwV_XXF", "eiR4D1Tv7"],
    Ka = "framer-mhXEg",
    Ya = {
        eiR4D1Tv7: "framer-v-tkc1g",
        TOfwV_XXF: "framer-v-p4gnem"
    };

function we(r, ...t) {
    let i = {};
    return t?.forEach(a => a && Object.assign(i, r[a])), i
}
var Ha = {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    },
    Xa = ({
        value: r,
        children: t
    }) => {
        let i = X(S),
            a = r ?? i.transition,
            d = Z(() => ({
                ...i,
                transition: a
            }), [JSON.stringify(a)]);
        return e(S.Provider, {
            value: d,
            children: t
        })
    },
    Za = n.create(l),
    Ja = {
        Desktop: "TOfwV_XXF",
        Mobile: "eiR4D1Tv7"
    },
    $a = ({
        height: r,
        id: t,
        width: i,
        ...a
    }) => ({
        ...a,
        variant: Ja[a.variant] ?? a.variant ?? "TOfwV_XXF"
    }),
    et = (r, t) => r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
    rt = z(function(r, t) {
        let i = W(null),
            a = t ?? i,
            d = D(),
            {
                activeLocale: w,
                setLocale: u
            } = T(),
            p = $(),
            {
                style: v,
                className: b,
                layoutId: U,
                variant: V,
                ..._
            } = $a(r),
            {
                baseVariant: f,
                classNames: F,
                clearLoadingGesture: K,
                gestureHandlers: L,
                gestureVariant: h,
                isLoading: te,
                setGestureState: Y,
                setVariant: E,
                variants: ae
            } = ee({
                cycleOrder: Aa,
                defaultVariant: "TOfwV_XXF",
                ref: a,
                variant: V,
                variantClassNames: Ya
            }),
            g = et(r, ae),
            H = P(Ka, ...[]),
            q = fe();
        return e(B, {
            id: U ?? d,
            children: e(Za, {
                animate: ae,
                initial: !1,
                children: e(Xa, {
                    value: Ha,
                    children: e(n.div, {
                        ..._,
                        ...L,
                        className: P(H, "framer-p4gnem", b, F),
                        "data-border": !0,
                        "data-framer-name": "Desktop",
                        layoutDependency: g,
                        layoutId: "TOfwV_XXF",
                        ref: a,
                        style: {
                            "--border-bottom-width": "1px",
                            "--border-color": "rgba(102, 102, 102, 0.46)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "rgb(255, 255, 255)",
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            boxShadow: "inset 0.2963892874511657px -0.7113342898827977px 0.4623672884238185px -0.5px rgba(0, 0, 0, 0.05), inset 0.8071467382105766px -1.9371521717053837px 1.2591489116084995px -1px rgba(0, 0, 0, 0.05), inset 1.7722021046647571px -4.253285051195417px 2.764635283277021px -1.5px rgba(0, 0, 0, 0.05), inset 3.933884033639334px -9.4413216807344px 6.136859092477361px -2px rgba(0, 0, 0, 0.05), inset 10px -24px 15.600000000000001px -2.5px rgba(0, 0, 0, 0.05)",
                            ...v
                        },
                        variants: {
                            eiR4D1Tv7: {
                                "--border-bottom-width": "0px",
                                "--border-left-width": "0px",
                                "--border-right-width": "0px",
                                "--border-top-width": "0px",
                                backgroundColor: "rgb(0, 0, 0)",
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                                boxShadow: "none"
                            }
                        },
                        ...we({
                            eiR4D1Tv7: {
                                "data-framer-name": "Mobile"
                            }
                        }, f, h),
                        children: s(n.div, {
                            className: "framer-mlss66",
                            "data-framer-name": "List",
                            layoutDependency: g,
                            layoutId: "cH8I5Gnbk",
                            children: [e(M, {
                                links: [{
                                    href: {
                                        webPageId: "hJVzXHOiy"
                                    },
                                    implicitPathVariables: void 0
                                }, {
                                    href: {
                                        webPageId: "hJVzXHOiy"
                                    },
                                    implicitPathVariables: void 0
                                }],
                                children: I => e(k, {
                                    height: 56,
                                    width: `max(${p?.width||"100vw"} - 40px, 1px)`,
                                    y: (p?.y || 0) + 20 + 0 + 0,
                                    ...we({
                                        eiR4D1Tv7: {
                                            width: `calc(${p?.width||"100vw"} - 16px)`,
                                            y: (p?.y || 0) + 8 + 0 + 0 + 0
                                        }
                                    }, f, h),
                                    children: e(pe, {
                                        className: "framer-lfnlss-container",
                                        layoutDependency: g,
                                        layoutId: "s4tELtKKB-container",
                                        nodeId: "s4tELtKKB",
                                        rendersWithMotion: !0,
                                        scopeId: "VhP9IneSn",
                                        children: e(Fe, {
                                            dfjxUwxeX: "Target",
                                            height: "100%",
                                            id: "s4tELtKKB",
                                            layoutId: "s4tELtKKB",
                                            style: {
                                                width: "100%"
                                            },
                                            variant: "Z4SnpK1Vi",
                                            width: "100%",
                                            WIHpWF4FG: "Articles, vid\xE9os, e-book...",
                                            ZFG2ubs1r: I[0],
                                            zZc9wPD9w: "Espace blog",
                                            ...we({
                                                eiR4D1Tv7: {
                                                    variant: "DrxbG5f0B",
                                                    ZFG2ubs1r: I[1]
                                                }
                                            }, f, h)
                                        })
                                    })
                                })
                            }), e(M, {
                                links: [{
                                    href: {
                                        webPageId: "c97HWIba0"
                                    },
                                    implicitPathVariables: void 0
                                }, {
                                    href: {
                                        webPageId: "c97HWIba0"
                                    },
                                    implicitPathVariables: void 0
                                }],
                                children: I => e(k, {
                                    height: 56,
                                    width: `max(${p?.width||"100vw"} - 40px, 1px)`,
                                    y: (p?.y || 0) + 20 + 0 + 61,
                                    ...we({
                                        eiR4D1Tv7: {
                                            width: `calc(${p?.width||"100vw"} - 16px)`,
                                            y: (p?.y || 0) + 8 + 0 + 0 + 64
                                        }
                                    }, f, h),
                                    children: e(pe, {
                                        className: "framer-wx4q29-container",
                                        layoutDependency: g,
                                        layoutId: "QODfAQxLm-container",
                                        nodeId: "QODfAQxLm",
                                        rendersWithMotion: !0,
                                        scopeId: "VhP9IneSn",
                                        children: e(Fe, {
                                            dfjxUwxeX: "Sticker",
                                            height: "100%",
                                            id: "QODfAQxLm",
                                            layoutId: "QODfAQxLm",
                                            style: {
                                                width: "100%"
                                            },
                                            variant: "Z4SnpK1Vi",
                                            width: "100%",
                                            WIHpWF4FG: "Articles, vid\xE9os, e-book...",
                                            ZFG2ubs1r: I[0],
                                            zZc9wPD9w: "Guide logiciel IA",
                                            ...we({
                                                eiR4D1Tv7: {
                                                    ZFG2ubs1r: I[1]
                                                }
                                            }, f, h)
                                        })
                                    })
                                })
                            })]
                        })
                    })
                })
            })
        })
    }),
    at = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-mhXEg.framer-1o1ym9j, .framer-mhXEg .framer-1o1ym9j { display: block; }", ".framer-mhXEg.framer-p4gnem { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 400px; will-change: var(--framer-will-change-override, transform); }", ".framer-mhXEg .framer-mlss66 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-mhXEg .framer-lfnlss-container, .framer-mhXEg .framer-wx4q29-container { flex: none; height: auto; position: relative; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-mhXEg.framer-p4gnem, .framer-mhXEg .framer-mlss66 { gap: 0px; } .framer-mhXEg.framer-p4gnem > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-mhXEg.framer-p4gnem > :first-child { margin-left: 0px; } .framer-mhXEg.framer-p4gnem > :last-child { margin-right: 0px; } .framer-mhXEg .framer-mlss66 > * { margin: 0px; margin-bottom: calc(5px / 2); margin-top: calc(5px / 2); } .framer-mhXEg .framer-mlss66 > :first-child { margin-top: 0px; } .framer-mhXEg .framer-mlss66 > :last-child { margin-bottom: 0px; } }", ".framer-mhXEg.framer-v-tkc1g.framer-p4gnem { flex-direction: column; gap: 0px; padding: 8px; width: 343px; }", ".framer-mhXEg.framer-v-tkc1g .framer-mlss66 { flex: none; gap: 8px; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-mhXEg.framer-v-tkc1g.framer-p4gnem, .framer-mhXEg.framer-v-tkc1g .framer-mlss66 { gap: 0px; } .framer-mhXEg.framer-v-tkc1g.framer-p4gnem > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-mhXEg.framer-v-tkc1g.framer-p4gnem > :first-child, .framer-mhXEg.framer-v-tkc1g .framer-mlss66 > :first-child { margin-top: 0px; } .framer-mhXEg.framer-v-tkc1g.framer-p4gnem > :last-child, .framer-mhXEg.framer-v-tkc1g .framer-mlss66 > :last-child { margin-bottom: 0px; } .framer-mhXEg.framer-v-tkc1g .framer-mlss66 > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } }", '.framer-mhXEg[data-border="true"]::after, .framer-mhXEg [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'],
    ye = O(rt, at, "framer-mhXEg"),
    Ne = ye;
ye.displayName = "AI Kit/Navigation/Nav Features";
ye.defaultProps = {
    height: 157,
    width: 400
};
J(ye, {
    variant: {
        options: ["TOfwV_XXF", "eiR4D1Tv7"],
        optionTitles: ["Desktop", "Mobile"],
        title: "Variant",
        type: R.Enum
    }
});
A(ye, [{
    explicitInter: !0,
    fonts: []
}, ...Qa], {
    supportsExplicitInterCodegen: !0
});
var tt = re(G),
    nt = re(Ne),
    Gr = ke(n.div),
    it = re(ze),
    le = Re(G),
    ot = ["IBvzkgl9r", "QQxKDUpo1", "CQOROuxHo", "rvFhGwNrW", "lL7RVC0J3", "pPmtWKgLj", "SNkS6_mBq"],
    lt = "framer-0pe2w",
    st = {
        CQOROuxHo: "framer-v-12kqn8g",
        IBvzkgl9r: "framer-v-xzurvy",
        lL7RVC0J3: "framer-v-1xwifkc",
        pPmtWKgLj: "framer-v-iflpo0",
        QQxKDUpo1: "framer-v-1gnnjqo",
        rvFhGwNrW: "framer-v-1kwvc2a",
        SNkS6_mBq: "framer-v-1y8bgca"
    };

function y(r, ...t) {
    let i = {};
    return t?.forEach(a => a && Object.assign(i, r[a])), i
}
var ft = {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    },
    Dr = {
        bounce: .2,
        delay: 0,
        duration: .4,
        type: "spring"
    },
    Mr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Dr,
        x: 0,
        y: 0
    },
    jr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Dr,
        x: 0,
        y: 0
    },
    qr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0
    },
    zr = ({
        children: r,
        blockDocumentScrolling: t,
        enabled: i = !0
    }) => {
        let [a, d] = br({
            blockDocumentScrolling: t
        });
        return r({
            hide: () => d(!1),
            show: () => d(!0),
            toggle: () => d(!a),
            visible: i && a
        })
    },
    mt = ({
        value: r,
        children: t
    }) => {
        let i = X(S),
            a = r ?? i.transition,
            d = Z(() => ({
                ...i,
                transition: a
            }), [JSON.stringify(a)]);
        return e(S.Provider, {
            value: d,
            children: t
        })
    },
    dt = n.create(l),
    Ve = {
        "Active M": "GvCMUEDfZ",
        "Active S": "YV2Y_uStE",
        "Inactive M": "txkv2ZkVI",
        "Inactive S": "HTpr3KFMl",
        InactiveMphone: "qfahuZfVu"
    },
    ct = {
        "Phone Closed": "QQxKDUpo1",
        "Phone Open": "CQOROuxHo",
        "Variant 5": "rvFhGwNrW",
        "Variant 6": "lL7RVC0J3",
        Desktop: "IBvzkgl9r",
        TabletClosed: "pPmtWKgLj",
        TabletOpen: "SNkS6_mBq"
    },
    pt = ({
        height: r,
        id: t,
        variant2: i,
        variant3: a,
        variant4: d,
        variant5: w,
        width: u,
        ...p
    }) => ({
        ...p,
        EqVubWUaN: Ve[a] ?? a ?? p.EqVubWUaN ?? "txkv2ZkVI",
        fb5aKcaCi: Ve[d] ?? d ?? p.fb5aKcaCi ?? "txkv2ZkVI",
        n8rcvJWMF: Ve[w] ?? w ?? p.n8rcvJWMF ?? "txkv2ZkVI",
        variant: ct[p.variant] ?? p.variant ?? "IBvzkgl9r",
        wwPDGFiN9: Ve[i] ?? i ?? p.wwPDGFiN9 ?? "txkv2ZkVI"
    }),
    ht = (r, t) => r.layoutDependency ? t.join("-") + r.layoutDependency : t.join("-"),
    ut = z(function(r, t) {
        let {
            activeLocale: i,
            setLocale: a
        } = T(), {
            style: d,
            className: w,
            layoutId: u,
            variant: p,
            wwPDGFiN9: v,
            EqVubWUaN: b,
            fb5aKcaCi: U,
            n8rcvJWMF: V,
            ..._
        } = pt(r), {
            baseVariant: f,
            classNames: F,
            clearLoadingGesture: K,
            gestureHandlers: L,
            gestureVariant: h,
            isLoading: te,
            setGestureState: Y,
            setVariant: E,
            variants: ae
        } = ee({
            cycleOrder: ot,
            defaultVariant: "IBvzkgl9r",
            variant: p,
            variantClassNames: st
        }), g = ht(r, ae), {
            activeVariantCallback: j,
            delay: H
        } = Ue(f), q = j(async (...m) => {
            Y({
                isPressed: !1
            }), E("QQxKDUpo1")
        }), I = ({
            overlay: m,
            loadMore: Et
        }) => j(async (...Tt) => {
            m.show()
        }), de = j(async (...m) => {
            E("CQOROuxHo")
        }), se = j(async (...m) => {
            E("QQxKDUpo1")
        }), be = j(async (...m) => {
            E("SNkS6_mBq")
        }), Se = j(async (...m) => {
            E("pPmtWKgLj")
        }), ce = P(lt, ...[_r]), Ke = W(null), Hr = () => !["QQxKDUpo1", "CQOROuxHo", "pPmtWKgLj", "SNkS6_mBq"].includes(f), _t = fe(), Ye = W(null), Xr = W(null), Zr = () => !!["QQxKDUpo1", "CQOROuxHo", "pPmtWKgLj", "SNkS6_mBq"].includes(f), Jr = () => !["CQOROuxHo", "SNkS6_mBq"].includes(f), $r = () => !["QQxKDUpo1", "pPmtWKgLj"].includes(f), ea = () => !!["CQOROuxHo", "SNkS6_mBq"].includes(f), He = () => f === "CQOROuxHo", ra = () => f !== "CQOROuxHo", Xe = W(null), aa = W(null), ta = D(), o = $();
        return e(B, {
            id: u ?? ta,
            children: e(dt, {
                animate: ae,
                initial: !1,
                children: e(mt, {
                    value: ft,
                    children: s(n.div, {
                        ..._,
                        ...L,
                        className: P(ce, "framer-xzurvy", w, F),
                        "data-border": !0,
                        "data-framer-name": "Desktop",
                        layoutDependency: g,
                        layoutId: "IBvzkgl9r",
                        ref: t ?? Ke,
                        style: {
                            "--border-bottom-width": "1px",
                            "--border-color": "var(--token-d559605d-d2a3-4776-a2c1-0436ceda3b18, rgba(255, 255, 255, 0.15))",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "0px",
                            backdropFilter: "blur(7px)",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                            boxShadow: "none",
                            WebkitBackdropFilter: "blur(7px)",
                            ...d
                        },
                        variants: {
                            CQOROuxHo: {
                                "--border-bottom-width": "0px",
                                backgroundColor: "rgb(255, 255, 255)",
                                borderBottomLeftRadius: 25,
                                borderBottomRightRadius: 25
                            },
                            lL7RVC0J3: {
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                                boxShadow: "none"
                            },
                            pPmtWKgLj: {
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                                boxShadow: "none"
                            },
                            rvFhGwNrW: {
                                backgroundColor: "rgb(255, 255, 255)",
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                boxShadow: "0px 5px 0px 0px rgb(70, 127, 247)"
                            },
                            SNkS6_mBq: {
                                "--border-bottom-width": "0px",
                                backgroundColor: "rgb(255, 255, 255)",
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                                boxShadow: "none"
                            }
                        },
                        ...y({
                            CQOROuxHo: {
                                "data-framer-name": "Phone Open",
                                "data-highlight": !0,
                                onTap: q
                            },
                            lL7RVC0J3: {
                                "data-framer-name": "Variant 6"
                            },
                            pPmtWKgLj: {
                                "data-framer-name": "TabletClosed"
                            },
                            QQxKDUpo1: {
                                "data-framer-name": "Phone Closed"
                            },
                            rvFhGwNrW: {
                                "data-framer-name": "Variant 5"
                            },
                            SNkS6_mBq: {
                                "data-framer-name": "TabletOpen"
                            }
                        }, f, h),
                        children: [s(n.div, {
                            className: "framer-e2je3n",
                            "data-framer-name": "Navigation",
                            layoutDependency: g,
                            layoutId: "A25zFwTbY",
                            children: [e(c, {
                                __fromCanvasComponent: !0,
                                children: e(l, {
                                    children: e(n.p, {
                                        style: {
                                            "--font-selector": "RlM7UG9wcGlucy1ib2xk",
                                            "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                            "--framer-font-size": "24px",
                                            "--framer-font-weight": "700",
                                            "--framer-letter-spacing": "-0.04em"
                                        },
                                        children: e(x, {
                                            href: {
                                                webPageId: "uOM2Gd2LQ"
                                            },
                                            motionChild: !0,
                                            nodeId: "ibk6tTKNe",
                                            openInNewTab: !1,
                                            smoothScroll: !1,
                                            children: e(n.a, {
                                                className: "framer-styles-preset-1uxfi7g",
                                                "data-styles-preset": "QusbHf5SM",
                                                children: "laizy."
                                            })
                                        })
                                    })
                                }),
                                className: "framer-1qybapw",
                                fonts: ["FS;Poppins-bold"],
                                layoutDependency: g,
                                layoutId: "ibk6tTKNe",
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            }), Hr() && s(n.div, {
                                className: "framer-18v7iwe",
                                "data-border": !0,
                                layoutDependency: g,
                                layoutId: "PEXON9BZ6",
                                style: {
                                    "--border-bottom-width": "1px",
                                    "--border-color": "rgba(255, 255, 255, 0.15)",
                                    "--border-left-width": "1px",
                                    "--border-right-width": "1px",
                                    "--border-style": "solid",
                                    "--border-top-width": "1px",
                                    borderBottomLeftRadius: 100,
                                    borderBottomRightRadius: 100,
                                    borderTopLeftRadius: 100,
                                    borderTopRightRadius: 100
                                },
                                children: [e(M, {
                                    links: [{
                                        href: {
                                            hash: ":vostO4KMT",
                                            webPageId: "uOM2Gd2LQ"
                                        },
                                        implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            hash: ":vostO4KMT",
                                            webPageId: "uOM2Gd2LQ"
                                        },
                                        implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            hash: ":vostO4KMT",
                                            webPageId: "uOM2Gd2LQ"
                                        },
                                        implicitPathVariables: void 0
                                    }],
                                    children: m => e(k, {
                                        height: 33,
                                        y: (o?.y || 0) + (0 + ((o?.height || 75) - 0 - 81) / 2) + 18 + 6,
                                        ...y({
                                            lL7RVC0J3: {
                                                y: (o?.y || 0) + (0 + ((o?.height || 200) - 0 - 81) / 2) + 18 + 6
                                            },
                                            rvFhGwNrW: {
                                                y: (o?.y || 0) + (0 + ((o?.height || 200) - 0 - 81) / 2) + 18 + 6
                                            }
                                        }, f, h),
                                        children: e(n.div, {
                                            className: "framer-1b3aqm2-container",
                                            layoutDependency: g,
                                            layoutId: "b03XBAG3B-container",
                                            children: e(G, {
                                                agUBvE03f: "Nos services",
                                                height: "100%",
                                                id: "b03XBAG3B",
                                                layoutId: "b03XBAG3B",
                                                lFfKiLlpT: m[0],
                                                variant: v,
                                                width: "100%",
                                                ...y({
                                                    lL7RVC0J3: {
                                                        lFfKiLlpT: m[2]
                                                    },
                                                    rvFhGwNrW: {
                                                        lFfKiLlpT: m[1]
                                                    }
                                                }, f, h)
                                            })
                                        })
                                    })
                                }), e(M, {
                                    links: [{
                                        href: {
                                            hash: ":CPanvp_Nq",
                                            webPageId: "uOM2Gd2LQ"
                                        },
                                        implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            hash: ":CPanvp_Nq",
                                            webPageId: "uOM2Gd2LQ"
                                        },
                                        implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            hash: ":CPanvp_Nq",
                                            webPageId: "uOM2Gd2LQ"
                                        },
                                        implicitPathVariables: void 0
                                    }],
                                    children: m => e(k, {
                                        height: 33,
                                        y: (o?.y || 0) + (0 + ((o?.height || 75) - 0 - 81) / 2) + 18 + 6,
                                        ...y({
                                            lL7RVC0J3: {
                                                y: (o?.y || 0) + (0 + ((o?.height || 200) - 0 - 81) / 2) + 18 + 6
                                            },
                                            rvFhGwNrW: {
                                                y: (o?.y || 0) + (0 + ((o?.height || 200) - 0 - 81) / 2) + 18 + 6
                                            }
                                        }, f, h),
                                        children: e(n.div, {
                                            className: "framer-gvlemn-container",
                                            layoutDependency: g,
                                            layoutId: "BMenSunD4-container",
                                            children: e(G, {
                                                agUBvE03f: "Cas d'usages",
                                                height: "100%",
                                                id: "BMenSunD4",
                                                layoutId: "BMenSunD4",
                                                lFfKiLlpT: m[0],
                                                variant: b,
                                                width: "100%",
                                                ...y({
                                                    lL7RVC0J3: {
                                                        lFfKiLlpT: m[2]
                                                    },
                                                    rvFhGwNrW: {
                                                        lFfKiLlpT: m[1]
                                                    }
                                                }, f, h)
                                            })
                                        })
                                    })
                                }), e(M, {
                                    links: [{
                                        href: {
                                            webPageId: "FrPR52PCM"
                                        },
                                        implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            webPageId: "FrPR52PCM"
                                        },
                                        implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            webPageId: "FrPR52PCM"
                                        },
                                        implicitPathVariables: void 0
                                    }],
                                    children: m => e(k, {
                                        height: 33,
                                        y: (o?.y || 0) + (0 + ((o?.height || 75) - 0 - 81) / 2) + 18 + 6,
                                        ...y({
                                            lL7RVC0J3: {
                                                y: (o?.y || 0) + (0 + ((o?.height || 200) - 0 - 81) / 2) + 18 + 6
                                            },
                                            rvFhGwNrW: {
                                                y: (o?.y || 0) + (0 + ((o?.height || 200) - 0 - 81) / 2) + 18 + 6
                                            }
                                        }, f, h),
                                        children: e(n.div, {
                                            className: "framer-14iyisu-container",
                                            layoutDependency: g,
                                            layoutId: "HO9igjgQU-container",
                                            children: e(G, {
                                                agUBvE03f: "A propos",
                                                height: "100%",
                                                id: "HO9igjgQU",
                                                layoutId: "HO9igjgQU",
                                                lFfKiLlpT: m[0],
                                                variant: U,
                                                width: "100%",
                                                ...y({
                                                    lL7RVC0J3: {
                                                        lFfKiLlpT: m[2]
                                                    },
                                                    rvFhGwNrW: {
                                                        lFfKiLlpT: m[1]
                                                    }
                                                }, f, h)
                                            })
                                        })
                                    })
                                }), e(zr, {
                                    blockDocumentScrolling: !1,
                                    children: m => e(_e, {
                                        children: e(k, {
                                            height: 33,
                                            y: (o?.y || 0) + (0 + ((o?.height || 75) - 0 - 81) / 2) + 18 + 6,
                                            ...y({
                                                lL7RVC0J3: {
                                                    y: (o?.y || 0) + (0 + ((o?.height || 200) - 0 - 81) / 2) + 18 + 6
                                                },
                                                rvFhGwNrW: {
                                                    y: (o?.y || 0) + (0 + ((o?.height || 200) - 0 - 81) / 2) + 18 + 6
                                                }
                                            }, f, h),
                                            children: s(n.div, {
                                                className: "framer-14nmznd-container",
                                                id: `${u}-14nmznd`,
                                                layoutDependency: g,
                                                layoutId: "bbCQrG_ps-container",
                                                ref: Ye,
                                                children: [e(G, {
                                                    agUBvE03f: "Ressources",
                                                    height: "100%",
                                                    id: "bbCQrG_ps",
                                                    layoutId: "bbCQrG_ps",
                                                    O7gNihtj7: I({
                                                        overlay: m
                                                    }),
                                                    variant: "HTpr3KFMl",
                                                    width: "100%"
                                                }), e(Ee, {
                                                    children: m.visible && e(Me, {
                                                        alignment: "start",
                                                        anchorRef: Ye,
                                                        className: P(ce, F),
                                                        collisionDetection: !0,
                                                        collisionDetectionPadding: 20,
                                                        "data-framer-portal-id": `${u}-14nmznd`,
                                                        offsetX: -99.84377906687587,
                                                        offsetY: 17.500020283041522,
                                                        onDismiss: m.hide,
                                                        placement: "bottom",
                                                        safeArea: !0,
                                                        zIndex: 11,
                                                        children: e(k, {
                                                            height: 96,
                                                            y: (o?.y || 0) + (0 + ((o?.height || 75) - 0 - 81) / 2) + 18 + 6 + -48,
                                                            ...y({
                                                                lL7RVC0J3: {
                                                                    y: (o?.y || 0) + (0 + ((o?.height || 200) - 0 - 81) / 2) + 18 + 6 + -48
                                                                },
                                                                rvFhGwNrW: {
                                                                    y: (o?.y || 0) + (0 + ((o?.height || 200) - 0 - 81) / 2) + 18 + 6 + -48
                                                                }
                                                            }, f, h),
                                                            children: e(Gr, {
                                                                __perspectiveFX: !1,
                                                                __smartComponentFX: !0,
                                                                __targetOpacity: 1,
                                                                animate: jr,
                                                                className: "framer-recwt-container",
                                                                exit: Mr,
                                                                initial: qr,
                                                                layoutDependency: g,
                                                                layoutId: "vp3AfEC8L-container",
                                                                ref: Xr,
                                                                role: "dialog",
                                                                children: e(Ne, {
                                                                    height: "100%",
                                                                    id: "vp3AfEC8L",
                                                                    layoutId: "vp3AfEC8L",
                                                                    variant: "TOfwV_XXF",
                                                                    width: "100%"
                                                                })
                                                            })
                                                        })
                                                    })
                                                })]
                                            })
                                        })
                                    })
                                }), e(M, {
                                    links: [{
                                        href: {
                                            webPageId: "gsyXkUq2k"
                                        },
                                        implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            webPageId: "gsyXkUq2k"
                                        },
                                        implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            webPageId: "gsyXkUq2k"
                                        },
                                        implicitPathVariables: void 0
                                    }],
                                    children: m => e(k, {
                                        height: 33,
                                        y: (o?.y || 0) + (0 + ((o?.height || 75) - 0 - 81) / 2) + 18 + 6,
                                        ...y({
                                            lL7RVC0J3: {
                                                y: (o?.y || 0) + (0 + ((o?.height || 200) - 0 - 81) / 2) + 18 + 6
                                            },
                                            rvFhGwNrW: {
                                                y: (o?.y || 0) + (0 + ((o?.height || 200) - 0 - 81) / 2) + 18 + 6
                                            }
                                        }, f, h),
                                        children: e(n.div, {
                                            className: "framer-16jya3q-container",
                                            layoutDependency: g,
                                            layoutId: "cDFGBHg7W-container",
                                            children: e(G, {
                                                agUBvE03f: "Contact",
                                                height: "100%",
                                                id: "cDFGBHg7W",
                                                layoutId: "cDFGBHg7W",
                                                lFfKiLlpT: m[0],
                                                variant: V,
                                                width: "100%",
                                                ...y({
                                                    lL7RVC0J3: {
                                                        lFfKiLlpT: m[2]
                                                    },
                                                    rvFhGwNrW: {
                                                        lFfKiLlpT: m[1]
                                                    }
                                                }, f, h)
                                            })
                                        })
                                    })
                                })]
                            }), s(n.div, {
                                className: "framer-9fs7aq",
                                layoutDependency: g,
                                layoutId: "D8qGy5GrJ",
                                children: [e(k, {
                                    height: 51,
                                    y: (o?.y || 0) + (0 + ((o?.height || 75) - 0 - 81) / 2) + 15 + 0 + 0,
                                    ...y({
                                        CQOROuxHo: {
                                            y: (o?.y || 0) + 0 + 0 + 15 + 0
                                        },
                                        lL7RVC0J3: {
                                            y: (o?.y || 0) + (0 + ((o?.height || 200) - 0 - 81) / 2) + 15 + 0 + 0
                                        },
                                        pPmtWKgLj: {
                                            y: (o?.y || 0) + (0 + ((o?.height || 63) - 0 - 81) / 2) + 15 + 0
                                        },
                                        QQxKDUpo1: {
                                            y: (o?.y || 0) + (0 + ((o?.height || 63) - 0 - 81) / 2) + 15 + 0
                                        },
                                        rvFhGwNrW: {
                                            y: (o?.y || 0) + (0 + ((o?.height || 200) - 0 - 81) / 2) + 15 + 0 + 0
                                        },
                                        SNkS6_mBq: {
                                            y: (o?.y || 0) + 0 + 0 + 15 + 0
                                        }
                                    }, f, h),
                                    children: e(n.div, {
                                        className: "framer-1f3gh5j-container",
                                        "data-framer-name": "navBtn",
                                        layoutDependency: g,
                                        layoutId: "UgJCk7J46-container",
                                        name: "navBtn",
                                        children: e(ze, {
                                            B3qPKukGP: "rgb(255, 255, 255)",
                                            height: "100%",
                                            id: "UgJCk7J46",
                                            jakO2hDPw: 0,
                                            jcBXvG4Jw: "Echanger avec un expert",
                                            layoutId: "UgJCk7J46",
                                            name: "navBtn",
                                            UDEEY8z8V: "rgb(70, 127, 247)",
                                            variant: "bxtyn2S_z",
                                            width: "100%",
                                            WIxL9YJdV: "https://outlook.office365.com/book/RendezvousIA@laizy.io/",
                                            XhahqhK15: !0,
                                            ...y({
                                                CQOROuxHo: {
                                                    variant: "vEUnhRveC"
                                                },
                                                pPmtWKgLj: {
                                                    variant: "vEUnhRveC"
                                                },
                                                QQxKDUpo1: {
                                                    variant: "vEUnhRveC"
                                                },
                                                SNkS6_mBq: {
                                                    variant: "vEUnhRveC"
                                                }
                                            }, f, h)
                                        })
                                    })
                                }), Zr() && e(x, {
                                    href: "https://outlook.office365.com/book/RendezvousIA@laizy.io/",
                                    motionChild: !0,
                                    nodeId: "UgH_fznkI",
                                    ...y({
                                        CQOROuxHo: {
                                            href: void 0
                                        },
                                        pPmtWKgLj: {
                                            href: void 0
                                        },
                                        QQxKDUpo1: {
                                            href: void 0
                                        },
                                        SNkS6_mBq: {
                                            href: void 0
                                        }
                                    }, f, h),
                                    children: s(n.a, {
                                        className: "framer-akgmz1 framer-1s17ugp",
                                        "data-framer-name": "Menu Mobile",
                                        layoutDependency: g,
                                        layoutId: "UgH_fznkI",
                                        ...y({
                                            CQOROuxHo: {
                                                "data-highlight": !0,
                                                onTap: se
                                            },
                                            pPmtWKgLj: {
                                                "data-highlight": !0,
                                                onTap: be
                                            },
                                            QQxKDUpo1: {
                                                "data-highlight": !0,
                                                onTap: de
                                            },
                                            SNkS6_mBq: {
                                                "data-highlight": !0,
                                                onTap: Se
                                            }
                                        }, f, h),
                                        children: [Jr() && e(Q, {
                                            className: "framer-6neo9l",
                                            "data-framer-name": "Menu",
                                            layout: "position",
                                            layoutDependency: g,
                                            layoutId: "aTRcq3Yne",
                                            opacity: 1,
                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28"><path d="M 0 0 L 28 0 L 28 28 L 0 28 Z" fill="transparent"></path><path d="M 4.375 14 L 23.625 14 M 4.375 7 L 23.625 7 M 4.375 21 L 23.625 21" fill="transparent" stroke-width="1.2" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                                            svgContentId: 12255356077,
                                            withExternalLayout: !0
                                        }), $r() && e(Q, {
                                            className: "framer-1wil6nm",
                                            "data-framer-name": "Close",
                                            layout: "position",
                                            layoutDependency: g,
                                            layoutId: "bEHIrj7ph",
                                            opacity: 1,
                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28"><path d="M 0 0 L 28 0 L 28 28 L 0 28 Z" fill="transparent"></path><path d="M 21.875 6.125 L 6.125 21.875 M 21.875 21.875 L 6.125 6.125" fill="rgb(0,0,0)" stroke-width="1.2" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                                            svgContentId: 9603545344,
                                            withExternalLayout: !0
                                        })]
                                    })
                                })]
                            })]
                        }), ea() && e(n.div, {
                            className: "framer-1xek93d",
                            "data-framer-name": "Menu Mobile",
                            layoutDependency: g,
                            layoutId: "DPkU8RMWN",
                            children: s(n.div, {
                                className: "framer-1bhrz2l",
                                layoutDependency: g,
                                layoutId: "fwFuk9v7B",
                                children: [e(M, {
                                    links: [{
                                        href: {
                                            hash: ":vostO4KMT",
                                            webPageId: "uOM2Gd2LQ"
                                        },
                                        implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            hash: ":vostO4KMT",
                                            webPageId: "uOM2Gd2LQ"
                                        },
                                        implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            hash: ":vostO4KMT",
                                            webPageId: "uOM2Gd2LQ"
                                        },
                                        implicitPathVariables: void 0
                                    }],
                                    children: m => e(k, {
                                        height: 33,
                                        ...y({
                                            CQOROuxHo: {
                                                width: `calc(${o?.width||"100vw"} - 12px)`,
                                                y: (o?.y || 0) + 0 + 121 + 0 + 0 + 6 + 0
                                            },
                                            SNkS6_mBq: {
                                                y: (o?.y || 0) + 0 + 121 + 0 + 0 + 6 + 0
                                            }
                                        }, f, h),
                                        children: e(n.div, {
                                            className: "framer-1e22erb-container",
                                            layoutDependency: g,
                                            layoutId: "j4e0qick4-container",
                                            children: e(G, {
                                                agUBvE03f: "Nos services",
                                                height: "100%",
                                                id: "j4e0qick4",
                                                layoutId: "j4e0qick4",
                                                lFfKiLlpT: m[0],
                                                variant: v,
                                                width: "100%",
                                                ...y({
                                                    CQOROuxHo: {
                                                        lFfKiLlpT: m[1],
                                                        style: {
                                                            width: "100%"
                                                        },
                                                        variant: "qfahuZfVu"
                                                    },
                                                    SNkS6_mBq: {
                                                        lFfKiLlpT: m[2]
                                                    }
                                                }, f, h)
                                            })
                                        })
                                    })
                                }), e(M, {
                                    links: [{
                                        href: {
                                            hash: ":CPanvp_Nq",
                                            webPageId: "uOM2Gd2LQ"
                                        },
                                        implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            hash: ":CPanvp_Nq",
                                            webPageId: "uOM2Gd2LQ"
                                        },
                                        implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            hash: ":CPanvp_Nq",
                                            webPageId: "uOM2Gd2LQ"
                                        },
                                        implicitPathVariables: void 0
                                    }],
                                    children: m => e(k, {
                                        height: 33,
                                        ...y({
                                            CQOROuxHo: {
                                                width: `calc(${o?.width||"100vw"} - 12px)`,
                                                y: (o?.y || 0) + 0 + 121 + 0 + 0 + 6 + 43
                                            },
                                            SNkS6_mBq: {
                                                y: (o?.y || 0) + 0 + 121 + 0 + 0 + 6 + 35
                                            }
                                        }, f, h),
                                        children: e(n.div, {
                                            className: "framer-1smno1k-container",
                                            layoutDependency: g,
                                            layoutId: "V_Kkl6RNP-container",
                                            children: e(G, {
                                                agUBvE03f: "Cas d'usages",
                                                height: "100%",
                                                id: "V_Kkl6RNP",
                                                layoutId: "V_Kkl6RNP",
                                                lFfKiLlpT: m[0],
                                                variant: b,
                                                width: "100%",
                                                ...y({
                                                    CQOROuxHo: {
                                                        lFfKiLlpT: m[1],
                                                        style: {
                                                            width: "100%"
                                                        },
                                                        variant: "qfahuZfVu"
                                                    },
                                                    SNkS6_mBq: {
                                                        lFfKiLlpT: m[2]
                                                    }
                                                }, f, h)
                                            })
                                        })
                                    })
                                }), He() && e(M, {
                                    links: [{
                                        href: {
                                            webPageId: "FrPR52PCM"
                                        },
                                        implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            webPageId: "FrPR52PCM"
                                        },
                                        implicitPathVariables: void 0
                                    }],
                                    children: m => e(k, {
                                        ...y({
                                            CQOROuxHo: {
                                                height: 33,
                                                width: `calc(${o?.width||"100vw"} - 12px)`,
                                                y: (o?.y || 0) + 0 + 121 + 0 + 0 + 6 + 86
                                            }
                                        }, f, h),
                                        children: e(n.div, {
                                            className: "framer-sdj840-container",
                                            layoutDependency: g,
                                            layoutId: "SCpfMM5YV-container",
                                            children: e(G, {
                                                agUBvE03f: "A propos",
                                                height: "100%",
                                                id: "SCpfMM5YV",
                                                layoutId: "SCpfMM5YV",
                                                lFfKiLlpT: m[0],
                                                style: {
                                                    width: "100%"
                                                },
                                                variant: "qfahuZfVu",
                                                width: "100%",
                                                ...y({
                                                    CQOROuxHo: {
                                                        lFfKiLlpT: m[1]
                                                    }
                                                }, f, h)
                                            })
                                        })
                                    })
                                }), e(M, {
                                    links: [{
                                        href: {
                                            webPageId: "gsyXkUq2k"
                                        },
                                        implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            webPageId: "gsyXkUq2k"
                                        },
                                        implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            webPageId: "gsyXkUq2k"
                                        },
                                        implicitPathVariables: void 0
                                    }],
                                    children: m => e(k, {
                                        height: 33,
                                        ...y({
                                            CQOROuxHo: {
                                                width: `calc(${o?.width||"100vw"} - 12px)`,
                                                y: (o?.y || 0) + 0 + 121 + 0 + 0 + 6 + 172
                                            },
                                            SNkS6_mBq: {
                                                y: (o?.y || 0) + 0 + 121 + 0 + 0 + 6 + 70
                                            }
                                        }, f, h),
                                        children: e(n.div, {
                                            className: "framer-8jmgdt-container",
                                            layoutDependency: g,
                                            layoutId: "Pkmjk22R6-container",
                                            children: e(G, {
                                                agUBvE03f: "Contact",
                                                height: "100%",
                                                id: "Pkmjk22R6",
                                                layoutId: "Pkmjk22R6",
                                                lFfKiLlpT: m[0],
                                                variant: V,
                                                width: "100%",
                                                ...y({
                                                    CQOROuxHo: {
                                                        lFfKiLlpT: m[1],
                                                        style: {
                                                            width: "100%"
                                                        },
                                                        variant: "qfahuZfVu"
                                                    },
                                                    SNkS6_mBq: {
                                                        lFfKiLlpT: m[2]
                                                    }
                                                }, f, h)
                                            })
                                        })
                                    })
                                }), He() && e(M, {
                                    links: [{
                                        href: {
                                            webPageId: "hJVzXHOiy"
                                        },
                                        implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            webPageId: "hJVzXHOiy"
                                        },
                                        implicitPathVariables: void 0
                                    }],
                                    children: m => e(k, {
                                        ...y({
                                            CQOROuxHo: {
                                                height: 33,
                                                width: `calc(${o?.width||"100vw"} - 12px)`,
                                                y: (o?.y || 0) + 0 + 121 + 0 + 0 + 6 + 129
                                            }
                                        }, f, h),
                                        children: e(n.div, {
                                            className: "framer-1yv9kr9-container",
                                            layoutDependency: g,
                                            layoutId: "KrjcFt5Y3-container",
                                            children: e(G, {
                                                agUBvE03f: "Blog",
                                                height: "100%",
                                                id: "KrjcFt5Y3",
                                                layoutId: "KrjcFt5Y3",
                                                lFfKiLlpT: m[0],
                                                style: {
                                                    width: "100%"
                                                },
                                                variant: "qfahuZfVu",
                                                width: "100%",
                                                ...y({
                                                    CQOROuxHo: {
                                                        lFfKiLlpT: m[1]
                                                    }
                                                }, f, h)
                                            })
                                        })
                                    })
                                }), ra() && e(zr, {
                                    blockDocumentScrolling: !1,
                                    children: m => e(_e, {
                                        children: e(k, {
                                            height: 33,
                                            ...y({
                                                SNkS6_mBq: {
                                                    y: (o?.y || 0) + 0 + 121 + 0 + 0 + 6 + 105
                                                }
                                            }, f, h),
                                            children: s(n.div, {
                                                className: "framer-127syno-container",
                                                id: `${u}-127syno`,
                                                layoutDependency: g,
                                                layoutId: "VdwwjYwGY-container",
                                                ref: Xe,
                                                children: [e(G, {
                                                    agUBvE03f: "Ressources",
                                                    height: "100%",
                                                    id: "VdwwjYwGY",
                                                    layoutId: "VdwwjYwGY",
                                                    O7gNihtj7: I({
                                                        overlay: m
                                                    }),
                                                    variant: "HTpr3KFMl",
                                                    width: "100%"
                                                }), e(Ee, {
                                                    children: m.visible && e(Me, {
                                                        alignment: "start",
                                                        anchorRef: Xe,
                                                        className: P(ce, F),
                                                        collisionDetection: !0,
                                                        collisionDetectionPadding: 20,
                                                        "data-framer-portal-id": `${u}-127syno`,
                                                        offsetX: -99.84377906687587,
                                                        offsetY: 17.500020283041522,
                                                        onDismiss: m.hide,
                                                        placement: "bottom",
                                                        safeArea: !0,
                                                        zIndex: 11,
                                                        children: e(k, {
                                                            height: 96,
                                                            ...y({
                                                                SNkS6_mBq: {
                                                                    y: (o?.y || 0) + 0 + 121 + 0 + 0 + 6 + 105 + -48
                                                                }
                                                            }, f, h),
                                                            children: e(Gr, {
                                                                __perspectiveFX: !1,
                                                                __smartComponentFX: !0,
                                                                __targetOpacity: 1,
                                                                animate: jr,
                                                                className: "framer-81nhak-container",
                                                                exit: Mr,
                                                                initial: qr,
                                                                layoutDependency: g,
                                                                layoutId: "sXtZYTO8z-container",
                                                                ref: aa,
                                                                role: "dialog",
                                                                children: e(Ne, {
                                                                    height: "100%",
                                                                    id: "sXtZYTO8z",
                                                                    layoutId: "sXtZYTO8z",
                                                                    variant: "TOfwV_XXF",
                                                                    width: "100%"
                                                                })
                                                            })
                                                        })
                                                    })
                                                })]
                                            })
                                        })
                                    })
                                })]
                            })
                        })]
                    })
                })
            })
        })
    }),
    gt = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-0pe2w.framer-1s17ugp, .framer-0pe2w .framer-1s17ugp { display: block; }", ".framer-0pe2w.framer-xzurvy { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1200px; }", ".framer-0pe2w .framer-e2je3n { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1400px; overflow: visible; padding: 15px 20px 15px 20px; position: relative; width: 1px; }", ".framer-0pe2w .framer-1qybapw { flex: none; height: 30px; position: relative; white-space: pre-wrap; width: 163px; word-break: break-word; word-wrap: break-word; }", ".framer-0pe2w .framer-18v7iwe { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: hidden; padding: 6px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-0pe2w .framer-1b3aqm2-container, .framer-0pe2w .framer-gvlemn-container, .framer-0pe2w .framer-14iyisu-container, .framer-0pe2w .framer-14nmznd-container, .framer-0pe2w .framer-16jya3q-container, .framer-0pe2w .framer-1f3gh5j-container, .framer-0pe2w .framer-1e22erb-container, .framer-0pe2w .framer-1smno1k-container, .framer-0pe2w .framer-8jmgdt-container, .framer-0pe2w .framer-127syno-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-0pe2w .framer-recwt-container, .framer-0pe2w .framer-81nhak-container { height: auto; position: relative; width: auto; }", ".framer-0pe2w .framer-9fs7aq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-0pe2w .framer-akgmz1 { flex: none; height: 28px; overflow: visible; position: relative; text-decoration: none; width: 29px; }", ".framer-0pe2w .framer-6neo9l { flex: none; height: 28px; left: calc(48.275862068965544% - 28px / 2); position: absolute; top: calc(50.00000000000002% - 28px / 2); width: 28px; }", ".framer-0pe2w .framer-1wil6nm { flex: none; height: 28px; left: 0px; position: absolute; top: 0px; width: 28px; }", ".framer-0pe2w .framer-1xek93d { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-0pe2w .framer-1bhrz2l { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: hidden; padding: 6px; position: relative; width: min-content; }", ".framer-0pe2w .framer-sdj840-container, .framer-0pe2w .framer-1yv9kr9-container { align-self: stretch; flex: none; height: auto; position: relative; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-0pe2w.framer-xzurvy, .framer-0pe2w .framer-18v7iwe, .framer-0pe2w .framer-9fs7aq, .framer-0pe2w .framer-1xek93d, .framer-0pe2w .framer-1bhrz2l { gap: 0px; } .framer-0pe2w.framer-xzurvy > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-0pe2w.framer-xzurvy > :first-child, .framer-0pe2w .framer-18v7iwe > :first-child { margin-left: 0px; } .framer-0pe2w.framer-xzurvy > :last-child, .framer-0pe2w .framer-18v7iwe > :last-child { margin-right: 0px; } .framer-0pe2w .framer-18v7iwe > * { margin: 0px; margin-left: calc(2px / 2); margin-right: calc(2px / 2); } .framer-0pe2w .framer-9fs7aq > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-0pe2w .framer-9fs7aq > :first-child, .framer-0pe2w .framer-1xek93d > :first-child, .framer-0pe2w .framer-1bhrz2l > :first-child { margin-top: 0px; } .framer-0pe2w .framer-9fs7aq > :last-child, .framer-0pe2w .framer-1xek93d > :last-child, .framer-0pe2w .framer-1bhrz2l > :last-child { margin-bottom: 0px; } .framer-0pe2w .framer-1xek93d > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-0pe2w .framer-1bhrz2l > * { margin: 0px; margin-bottom: calc(2px / 2); margin-top: calc(2px / 2); } }", ".framer-0pe2w.framer-v-1gnnjqo.framer-xzurvy { width: 390px; }", ".framer-0pe2w.framer-v-1gnnjqo .framer-1qybapw, .framer-0pe2w.framer-v-12kqn8g .framer-1qybapw, .framer-0pe2w.framer-v-iflpo0 .framer-1qybapw, .framer-0pe2w.framer-v-1y8bgca .framer-1qybapw { width: 100px; }", ".framer-0pe2w.framer-v-1gnnjqo .framer-9fs7aq, .framer-0pe2w.framer-v-12kqn8g .framer-9fs7aq, .framer-0pe2w.framer-v-iflpo0 .framer-9fs7aq, .framer-0pe2w.framer-v-1y8bgca .framer-9fs7aq { flex-direction: row; }", ".framer-0pe2w.framer-v-1gnnjqo .framer-akgmz1, .framer-0pe2w.framer-v-12kqn8g .framer-akgmz1, .framer-0pe2w.framer-v-iflpo0 .framer-akgmz1, .framer-0pe2w.framer-v-1y8bgca .framer-akgmz1 { cursor: pointer; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-0pe2w.framer-v-1gnnjqo .framer-9fs7aq { gap: 0px; } .framer-0pe2w.framer-v-1gnnjqo .framer-9fs7aq > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-0pe2w.framer-v-1gnnjqo .framer-9fs7aq > :first-child { margin-left: 0px; } .framer-0pe2w.framer-v-1gnnjqo .framer-9fs7aq > :last-child { margin-right: 0px; } }", ".framer-0pe2w.framer-v-12kqn8g.framer-xzurvy { cursor: pointer; flex-direction: column; gap: 40px; justify-content: flex-start; min-height: 400px; padding: 0px 0px 60px 0px; width: 390px; will-change: var(--framer-will-change-override, transform); }", ".framer-0pe2w.framer-v-12kqn8g .framer-e2je3n, .framer-0pe2w.framer-v-12kqn8g .framer-1xek93d, .framer-0pe2w.framer-v-1y8bgca .framer-1xek93d { flex: none; width: 100%; }", ".framer-0pe2w.framer-v-12kqn8g .framer-1bhrz2l { align-content: center; align-items: center; gap: 10px; order: 0; width: 100%; }", ".framer-0pe2w.framer-v-12kqn8g .framer-1e22erb-container { order: 0; width: 100%; }", ".framer-0pe2w.framer-v-12kqn8g .framer-1smno1k-container { order: 1; width: 100%; }", ".framer-0pe2w.framer-v-12kqn8g .framer-sdj840-container { align-self: unset; order: 2; width: 100%; }", ".framer-0pe2w.framer-v-12kqn8g .framer-8jmgdt-container { order: 4; width: 100%; }", ".framer-0pe2w.framer-v-12kqn8g .framer-1yv9kr9-container { align-self: unset; order: 3; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-0pe2w.framer-v-12kqn8g.framer-xzurvy, .framer-0pe2w.framer-v-12kqn8g .framer-9fs7aq, .framer-0pe2w.framer-v-12kqn8g .framer-1bhrz2l { gap: 0px; } .framer-0pe2w.framer-v-12kqn8g.framer-xzurvy > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-0pe2w.framer-v-12kqn8g.framer-xzurvy > :first-child, .framer-0pe2w.framer-v-12kqn8g .framer-1bhrz2l > :first-child { margin-top: 0px; } .framer-0pe2w.framer-v-12kqn8g.framer-xzurvy > :last-child, .framer-0pe2w.framer-v-12kqn8g .framer-1bhrz2l > :last-child { margin-bottom: 0px; } .framer-0pe2w.framer-v-12kqn8g .framer-9fs7aq > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-0pe2w.framer-v-12kqn8g .framer-9fs7aq > :first-child { margin-left: 0px; } .framer-0pe2w.framer-v-12kqn8g .framer-9fs7aq > :last-child { margin-right: 0px; } .framer-0pe2w.framer-v-12kqn8g .framer-1bhrz2l > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }", ".framer-0pe2w.framer-v-1kwvc2a.framer-xzurvy { width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-0pe2w.framer-v-1kwvc2a .framer-e2je3n { flex: none; max-width: 800px; width: 800px; }", ".framer-0pe2w.framer-v-iflpo0.framer-xzurvy { width: 810px; }", ".framer-0pe2w.framer-v-iflpo0 .framer-e2je3n, .framer-0pe2w.framer-v-1y8bgca .framer-e2je3n { flex: none; width: 810px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-0pe2w.framer-v-iflpo0 .framer-9fs7aq { gap: 0px; } .framer-0pe2w.framer-v-iflpo0 .framer-9fs7aq > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-0pe2w.framer-v-iflpo0 .framer-9fs7aq > :first-child { margin-left: 0px; } .framer-0pe2w.framer-v-iflpo0 .framer-9fs7aq > :last-child { margin-right: 0px; } }", ".framer-0pe2w.framer-v-1y8bgca.framer-xzurvy { flex-direction: column; gap: 40px; justify-content: flex-start; min-height: calc(var(--framer-viewport-height, 100vh) * 1); padding: 0px 0px 60px 0px; width: 810px; }", ".framer-0pe2w.framer-v-1y8bgca .framer-1bhrz2l { order: 0; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-0pe2w.framer-v-1y8bgca.framer-xzurvy, .framer-0pe2w.framer-v-1y8bgca .framer-9fs7aq { gap: 0px; } .framer-0pe2w.framer-v-1y8bgca.framer-xzurvy > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-0pe2w.framer-v-1y8bgca.framer-xzurvy > :first-child { margin-top: 0px; } .framer-0pe2w.framer-v-1y8bgca.framer-xzurvy > :last-child { margin-bottom: 0px; } .framer-0pe2w.framer-v-1y8bgca .framer-9fs7aq > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-0pe2w.framer-v-1y8bgca .framer-9fs7aq > :first-child { margin-left: 0px; } .framer-0pe2w.framer-v-1y8bgca .framer-9fs7aq > :last-child { margin-right: 0px; } }", ...Sr, '.framer-0pe2w[data-border="true"]::after, .framer-0pe2w [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'],
    ve = O(ut, gt, "framer-0pe2w"),
    De = ve;
ve.displayName = "AI Kit/Nav";
ve.defaultProps = {
    height: 75,
    width: 1200
};
J(ve, {
    variant: {
        options: ["IBvzkgl9r", "QQxKDUpo1", "CQOROuxHo", "rvFhGwNrW", "lL7RVC0J3", "pPmtWKgLj", "SNkS6_mBq"],
        optionTitles: ["Desktop", "Phone Closed", "Phone Open", "Variant 5", "Variant 6", "TabletClosed", "TabletOpen"],
        title: "Variant",
        type: R.Enum
    },
    wwPDGFiN9: le?.variant && {
        ...le.variant,
        defaultValue: "txkv2ZkVI",
        description: void 0,
        hidden: void 0,
        title: "Variant 2"
    },
    EqVubWUaN: le?.variant && {
        ...le.variant,
        defaultValue: "txkv2ZkVI",
        description: void 0,
        hidden: void 0,
        title: "Variant 3"
    },
    fb5aKcaCi: le?.variant && {
        ...le.variant,
        defaultValue: "txkv2ZkVI",
        description: void 0,
        hidden: void 0,
        title: "Variant 4"
    },
    n8rcvJWMF: le?.variant && {
        ...le.variant,
        defaultValue: "txkv2ZkVI",
        description: void 0,
        hidden: void 0,
        title: "Variant 5"
    }
});
A(ve, [{
    explicitInter: !0,
    fonts: [{
        family: "Poppins",
        source: "fontshare",
        style: "normal",
        url: "https://framerusercontent.com/third-party-assets/fontshare/wf/EOHGWBZYYKO6R4PWP4S2B3FFWHHBEZN6/UWQLMF4AFWLXCJQCFV3WRVYC77KZXPRB/FYG6OCH7XOLUUSZTIZE65ATBZWF623O4.woff2",
        weight: "700"
    }]
}, ...tt, ...nt, ...it, ...Pe(Lr)], {
    supportsExplicitInterCodegen: !0
});
var xt = re(De),
    wt = Rr(De),
    yt = ke(n.footer),
    vt = {
        ewS39M8Fe: "(min-width: 1200px)",
        LaxzCO8Lh: "(min-width: 810px) and (max-width: 1199px)",
        PwQAvskEq: "(max-width: 809px)"
    },
    Be = () => typeof document < "u",
    bt = "framer-WUl9R",
    Rt = {
        ewS39M8Fe: "framer-v-1hxfkvx",
        LaxzCO8Lh: "framer-v-1u5krlp",
        PwQAvskEq: "framer-v-bmr20v"
    },
    kt = (r, t) => `translateX(-50%) ${t}`,
    Oe = {
        LaxzCO8Lh: [".framer-WUl9R .framer-lwjbil-container { width: 100%; }"],
        PwQAvskEq: [".framer-WUl9R .framer-lwjbil-container { width: 100%; }"]
    },
    Br = Object.keys(Oe),
    Ut = {
        LaxzCO8Lh: ".framer-1u5krlp-override",
        PwQAvskEq: ".framer-bmr20v-override"
    },
    Or = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-WUl9R.framer-dkwmjs, .framer-WUl9R .framer-dkwmjs { display: block; }", ".framer-WUl9R.framer-1hxfkvx { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-WUl9R .framer-lwjbil-container { flex: none; height: auto; left: 50%; position: var(--framer-canvas-fixed-position, fixed); top: 0px; width: auto; z-index: 9; }", ".framer-WUl9R .framer-1w7o3po { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: calc(0 * -1px); position: relative; width: 0px; }", ".framer-WUl9R .framer-1mtzy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: center; order: 1002; overflow: hidden; padding: 86px 0px 0px 0px; position: relative; width: 100%; }", ".framer-WUl9R .framer-cpw2bu { align-content: center; align-items: center; background-color: var(--token-9709d44b-37dd-4334-9e53-bc13488c5115, #131415); border-top-left-radius: 120px; border-top-right-radius: 120px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: flex-start; overflow: hidden; padding: 100px 48px 0px 48px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-WUl9R .framer-1fjnjcn, .framer-WUl9R .framer-h978e9 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 28px; height: 1px; justify-content: flex-start; max-width: 1000px; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-WUl9R .framer-1lv42dk, .framer-WUl9R .framer-1ggm4oy { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: 362px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-WUl9R .framer-tnjpd1, .framer-WUl9R .framer-fvhiqa, .framer-WUl9R .framer-13n6tro, .framer-WUl9R .framer-qlkix3, .framer-WUl9R .framer-1df44dk, .framer-WUl9R .framer-137niqm, .framer-WUl9R .framer-f14nye, .framer-WUl9R .framer-7qd39d, .framer-WUl9R .framer-umnwri { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-WUl9R .framer-ci652z, .framer-WUl9R .framer-1qr65h3, .framer-WUl9R .framer-pt1ie4 { flex: none; height: 60px; position: relative; width: 100%; }", ".framer-WUl9R .framer-d49fml, .framer-WUl9R .framer-1xwrnw0 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1.2 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-WUl9R .framer-12nczk0, .framer-WUl9R .framer-1sugsa7, .framer-WUl9R .framer-7pk8sd, .framer-WUl9R .framer-1eclody, .framer-WUl9R .framer-v6512n, .framer-WUl9R .framer-1cgwq7g { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-WUl9R .framer-yctyob, .framer-WUl9R .framer-19twkxj, .framer-WUl9R .framer-rufzjl, .framer-WUl9R .framer-1fsbu11, .framer-WUl9R .framer-1e84fh2, .framer-WUl9R .framer-bpf20f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-WUl9R .framer-452w0v, .framer-WUl9R .framer-ptq19n, .framer-WUl9R .framer-11varv, .framer-WUl9R .framer-1ftax11, .framer-WUl9R .framer-8r2cq8, .framer-WUl9R .framer-4sgitq, .framer-WUl9R .framer-1gllsyy, .framer-WUl9R .framer-showos, .framer-WUl9R .framer-1tl18jn, .framer-WUl9R .framer-14uo37h, .framer-WUl9R .framer-1f90u4o, .framer-WUl9R .framer-jxwrcp, .framer-WUl9R .framer-1bcmzkc, .framer-WUl9R .framer-1loqrwf, .framer-WUl9R .framer-85moqs { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-WUl9R .framer-zdbq56, .framer-WUl9R .framer-1rnofr7 { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-WUl9R .framer-78370s, .framer-WUl9R .framer-1707cgx, .framer-WUl9R .framer-1kwam9j, .framer-WUl9R .framer-j1eaf7, .framer-WUl9R .framer-1vxx6p6, .framer-WUl9R .framer-hx4jgs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }", ".framer-WUl9R .framer-1633hsx, .framer-WUl9R .framer-163pd6o, .framer-WUl9R .framer-v5tkek, .framer-WUl9R .framer-nblbm1, .framer-WUl9R .framer-11wzp9, .framer-WUl9R .framer-11k9m3a { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-WUl9R .framer-1cal75s, .framer-WUl9R .framer-8nqk19, .framer-WUl9R .framer-ugl8qq { align-content: center; align-items: center; background-color: var(--token-041cdb16-cce8-4c6a-ad08-01bb829b04b8, #0080ff); border-bottom-left-radius: 1000px; border-bottom-right-radius: 1000px; border-top-left-radius: 1000px; border-top-right-radius: 1000px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 8px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-WUl9R .framer-7pkusl, .framer-WUl9R .framer-szouon, .framer-WUl9R .framer-1nytrlw, .framer-WUl9R .framer-127bs2, .framer-WUl9R .framer-16uv75c, .framer-WUl9R .framer-qh1hfo { flex: none; height: 16px; position: relative; width: 16px; }", ".framer-WUl9R .framer-1d9wt44, .framer-WUl9R .framer-q5whvq, .framer-WUl9R .framer-1qtglyn { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 1000px; border-bottom-right-radius: 1000px; border-top-left-radius: 1000px; border-top-right-radius: 1000px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 8px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-WUl9R .framer-1fxodl1, .framer-WUl9R .framer-jkudto { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 696px; justify-content: center; left: calc(50.00000000000002% - 1088px / 2); overflow: visible; padding: 0px; pointer-events: none; position: absolute; width: 1088px; }", ".framer-WUl9R .framer-ktoyaw, .framer-WUl9R .framer-1gitxpb, .framer-WUl9R .framer-oxmx1x { bottom: 0px; flex: none; height: 300px; left: 0px; overflow: hidden; position: absolute; right: 0px; z-index: 1; }", ".framer-WUl9R .framer-160t6s, .framer-WUl9R .framer-itr9kg { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; white-space: pre-wrap; word-break: break-word; word-wrap: break-word; }", ".framer-WUl9R .framer-v7l2vg, .framer-WUl9R .framer-1iet15o, .framer-WUl9R .framer-1fl4sc1 { bottom: 0px; flex: none; left: 0px; overflow: hidden; pointer-events: none; position: absolute; right: 0px; top: 450px; }", ".framer-WUl9R .framer-l3a2kd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; order: 1003; overflow: hidden; padding: 40px 0px 0px 0px; position: relative; width: 100%; }", ".framer-WUl9R .framer-1od5k66 { align-content: center; align-items: center; background-color: var(--token-9709d44b-37dd-4334-9e53-bc13488c5115, #131415); border-top-left-radius: 120px; border-top-right-radius: 120px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 600px; justify-content: flex-start; overflow: hidden; padding: 100px 48px 0px 48px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-WUl9R .framer-1rdrmlz { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 696px; justify-content: center; left: calc(50.00000000000002% - 1088px / 2); overflow: visible; padding: 0px; position: absolute; width: 1088px; }", ".framer-WUl9R .framer-wryusb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: center; order: 1004; overflow: hidden; padding: 40px 0px 0px 0px; position: relative; width: 100%; }", ".framer-WUl9R .framer-2des73 { align-content: center; align-items: center; background-color: var(--token-9709d44b-37dd-4334-9e53-bc13488c5115, #131415); border-top-left-radius: 50px; border-top-right-radius: 50px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: flex-start; overflow: hidden; padding: 100px 40px 0px 40px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-WUl9R .framer-drhyvc { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: 1px; justify-content: flex-start; max-width: 1000px; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-WUl9R .framer-dn8u8f { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-WUl9R .framer-eomfuw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 120%; }", ".framer-WUl9R .framer-2fn90x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-WUl9R .framer-8n79jv { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; bottom: -126px; flex: none; height: 300px; left: calc(50.00000000000002% - 1088px / 2); position: absolute; white-space: pre-wrap; width: 1088px; word-break: break-word; word-wrap: break-word; }", '[data-layout-template="true"] > #overlay { margin-bottom: calc(0 * -1px); }', "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-WUl9R.framer-1hxfkvx, .framer-WUl9R .framer-1mtzy, .framer-WUl9R .framer-cpw2bu, .framer-WUl9R .framer-1fjnjcn, .framer-WUl9R .framer-1lv42dk, .framer-WUl9R .framer-d49fml, .framer-WUl9R .framer-12nczk0, .framer-WUl9R .framer-yctyob, .framer-WUl9R .framer-1sugsa7, .framer-WUl9R .framer-19twkxj, .framer-WUl9R .framer-zdbq56, .framer-WUl9R .framer-78370s, .framer-WUl9R .framer-1cal75s, .framer-WUl9R .framer-1707cgx, .framer-WUl9R .framer-1d9wt44, .framer-WUl9R .framer-1fxodl1, .framer-WUl9R .framer-l3a2kd, .framer-WUl9R .framer-1od5k66, .framer-WUl9R .framer-h978e9, .framer-WUl9R .framer-1ggm4oy, .framer-WUl9R .framer-1xwrnw0, .framer-WUl9R .framer-7pk8sd, .framer-WUl9R .framer-rufzjl, .framer-WUl9R .framer-1eclody, .framer-WUl9R .framer-1fsbu11, .framer-WUl9R .framer-1rnofr7, .framer-WUl9R .framer-1kwam9j, .framer-WUl9R .framer-8nqk19, .framer-WUl9R .framer-j1eaf7, .framer-WUl9R .framer-q5whvq, .framer-WUl9R .framer-1rdrmlz, .framer-WUl9R .framer-wryusb, .framer-WUl9R .framer-2des73, .framer-WUl9R .framer-drhyvc, .framer-WUl9R .framer-dn8u8f, .framer-WUl9R .framer-eomfuw, .framer-WUl9R .framer-v6512n, .framer-WUl9R .framer-1e84fh2, .framer-WUl9R .framer-1cgwq7g, .framer-WUl9R .framer-bpf20f, .framer-WUl9R .framer-2fn90x, .framer-WUl9R .framer-1vxx6p6, .framer-WUl9R .framer-ugl8qq, .framer-WUl9R .framer-hx4jgs, .framer-WUl9R .framer-1qtglyn, .framer-WUl9R .framer-jkudto { gap: 0px; } .framer-WUl9R.framer-1hxfkvx > *, .framer-WUl9R .framer-1mtzy > *, .framer-WUl9R .framer-l3a2kd > *, .framer-WUl9R .framer-wryusb > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-WUl9R.framer-1hxfkvx > :first-child, .framer-WUl9R .framer-1mtzy > :first-child, .framer-WUl9R .framer-cpw2bu > :first-child, .framer-WUl9R .framer-1lv42dk > :first-child, .framer-WUl9R .framer-12nczk0 > :first-child, .framer-WUl9R .framer-yctyob > :first-child, .framer-WUl9R .framer-1sugsa7 > :first-child, .framer-WUl9R .framer-19twkxj > :first-child, .framer-WUl9R .framer-zdbq56 > :first-child, .framer-WUl9R .framer-1cal75s > :first-child, .framer-WUl9R .framer-1d9wt44 > :first-child, .framer-WUl9R .framer-l3a2kd > :first-child, .framer-WUl9R .framer-1od5k66 > :first-child, .framer-WUl9R .framer-1ggm4oy > :first-child, .framer-WUl9R .framer-7pk8sd > :first-child, .framer-WUl9R .framer-rufzjl > :first-child, .framer-WUl9R .framer-1eclody > :first-child, .framer-WUl9R .framer-1fsbu11 > :first-child, .framer-WUl9R .framer-1rnofr7 > :first-child, .framer-WUl9R .framer-8nqk19 > :first-child, .framer-WUl9R .framer-q5whvq > :first-child, .framer-WUl9R .framer-wryusb > :first-child, .framer-WUl9R .framer-2des73 > :first-child, .framer-WUl9R .framer-drhyvc > :first-child, .framer-WUl9R .framer-dn8u8f > :first-child, .framer-WUl9R .framer-v6512n > :first-child, .framer-WUl9R .framer-1e84fh2 > :first-child, .framer-WUl9R .framer-1cgwq7g > :first-child, .framer-WUl9R .framer-bpf20f > :first-child, .framer-WUl9R .framer-2fn90x > :first-child, .framer-WUl9R .framer-ugl8qq > :first-child, .framer-WUl9R .framer-1qtglyn > :first-child { margin-top: 0px; } .framer-WUl9R.framer-1hxfkvx > :last-child, .framer-WUl9R .framer-1mtzy > :last-child, .framer-WUl9R .framer-cpw2bu > :last-child, .framer-WUl9R .framer-1lv42dk > :last-child, .framer-WUl9R .framer-12nczk0 > :last-child, .framer-WUl9R .framer-yctyob > :last-child, .framer-WUl9R .framer-1sugsa7 > :last-child, .framer-WUl9R .framer-19twkxj > :last-child, .framer-WUl9R .framer-zdbq56 > :last-child, .framer-WUl9R .framer-1cal75s > :last-child, .framer-WUl9R .framer-1d9wt44 > :last-child, .framer-WUl9R .framer-l3a2kd > :last-child, .framer-WUl9R .framer-1od5k66 > :last-child, .framer-WUl9R .framer-1ggm4oy > :last-child, .framer-WUl9R .framer-7pk8sd > :last-child, .framer-WUl9R .framer-rufzjl > :last-child, .framer-WUl9R .framer-1eclody > :last-child, .framer-WUl9R .framer-1fsbu11 > :last-child, .framer-WUl9R .framer-1rnofr7 > :last-child, .framer-WUl9R .framer-8nqk19 > :last-child, .framer-WUl9R .framer-q5whvq > :last-child, .framer-WUl9R .framer-wryusb > :last-child, .framer-WUl9R .framer-2des73 > :last-child, .framer-WUl9R .framer-drhyvc > :last-child, .framer-WUl9R .framer-dn8u8f > :last-child, .framer-WUl9R .framer-v6512n > :last-child, .framer-WUl9R .framer-1e84fh2 > :last-child, .framer-WUl9R .framer-1cgwq7g > :last-child, .framer-WUl9R .framer-bpf20f > :last-child, .framer-WUl9R .framer-2fn90x > :last-child, .framer-WUl9R .framer-ugl8qq > :last-child, .framer-WUl9R .framer-1qtglyn > :last-child { margin-bottom: 0px; } .framer-WUl9R .framer-cpw2bu > *, .framer-WUl9R .framer-1cal75s > *, .framer-WUl9R .framer-1d9wt44 > *, .framer-WUl9R .framer-1od5k66 > *, .framer-WUl9R .framer-8nqk19 > *, .framer-WUl9R .framer-q5whvq > *, .framer-WUl9R .framer-2des73 > *, .framer-WUl9R .framer-ugl8qq > *, .framer-WUl9R .framer-1qtglyn > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-WUl9R .framer-1fjnjcn > *, .framer-WUl9R .framer-h978e9 > * { margin: 0px; margin-left: calc(28px / 2); margin-right: calc(28px / 2); } .framer-WUl9R .framer-1fjnjcn > :first-child, .framer-WUl9R .framer-d49fml > :first-child, .framer-WUl9R .framer-78370s > :first-child, .framer-WUl9R .framer-1707cgx > :first-child, .framer-WUl9R .framer-1fxodl1 > :first-child, .framer-WUl9R .framer-h978e9 > :first-child, .framer-WUl9R .framer-1xwrnw0 > :first-child, .framer-WUl9R .framer-1kwam9j > :first-child, .framer-WUl9R .framer-j1eaf7 > :first-child, .framer-WUl9R .framer-1rdrmlz > :first-child, .framer-WUl9R .framer-eomfuw > :first-child, .framer-WUl9R .framer-1vxx6p6 > :first-child, .framer-WUl9R .framer-hx4jgs > :first-child, .framer-WUl9R .framer-jkudto > :first-child { margin-left: 0px; } .framer-WUl9R .framer-1fjnjcn > :last-child, .framer-WUl9R .framer-d49fml > :last-child, .framer-WUl9R .framer-78370s > :last-child, .framer-WUl9R .framer-1707cgx > :last-child, .framer-WUl9R .framer-1fxodl1 > :last-child, .framer-WUl9R .framer-h978e9 > :last-child, .framer-WUl9R .framer-1xwrnw0 > :last-child, .framer-WUl9R .framer-1kwam9j > :last-child, .framer-WUl9R .framer-j1eaf7 > :last-child, .framer-WUl9R .framer-1rdrmlz > :last-child, .framer-WUl9R .framer-eomfuw > :last-child, .framer-WUl9R .framer-1vxx6p6 > :last-child, .framer-WUl9R .framer-hx4jgs > :last-child, .framer-WUl9R .framer-jkudto > :last-child { margin-right: 0px; } .framer-WUl9R .framer-1lv42dk > *, .framer-WUl9R .framer-1ggm4oy > *, .framer-WUl9R .framer-dn8u8f > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-WUl9R .framer-d49fml > *, .framer-WUl9R .framer-1fxodl1 > *, .framer-WUl9R .framer-1xwrnw0 > *, .framer-WUl9R .framer-1rdrmlz > *, .framer-WUl9R .framer-eomfuw > *, .framer-WUl9R .framer-jkudto > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-WUl9R .framer-12nczk0 > *, .framer-WUl9R .framer-1sugsa7 > *, .framer-WUl9R .framer-7pk8sd > *, .framer-WUl9R .framer-1eclody > *, .framer-WUl9R .framer-v6512n > *, .framer-WUl9R .framer-1cgwq7g > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-WUl9R .framer-yctyob > *, .framer-WUl9R .framer-19twkxj > *, .framer-WUl9R .framer-rufzjl > *, .framer-WUl9R .framer-1fsbu11 > *, .framer-WUl9R .framer-1e84fh2 > *, .framer-WUl9R .framer-bpf20f > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-WUl9R .framer-zdbq56 > *, .framer-WUl9R .framer-1rnofr7 > *, .framer-WUl9R .framer-2fn90x > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-WUl9R .framer-78370s > *, .framer-WUl9R .framer-1707cgx > *, .framer-WUl9R .framer-1kwam9j > *, .framer-WUl9R .framer-j1eaf7 > *, .framer-WUl9R .framer-1vxx6p6 > *, .framer-WUl9R .framer-hx4jgs > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-WUl9R .framer-drhyvc > * { margin: 0px; margin-bottom: calc(28px / 2); margin-top: calc(28px / 2); } }", ...Pr],
    Ct = {
        ewS39M8Fe: "(min-width: 1200px)",
        LaxzCO8Lh: "(min-width: 810px) and (max-width: 1199px)",
        PwQAvskEq: "(max-width: 809px)"
    },
    It = ({
        value: r
    }) => xr() ? null : e("style", {
        dangerouslySetInnerHTML: {
            __html: r
        },
        "data-framer-html-style": ""
    }),
    Pt = {
        Desktop: "ewS39M8Fe",
        Phone: "PwQAvskEq",
        Tablet: "LaxzCO8Lh"
    },
    Wt = ({
        height: r,
        id: t,
        width: i,
        ...a
    }) => ({
        ...a,
        variant: Pt[a.variant] ?? a.variant ?? "ewS39M8Fe"
    }),
    Ft = z(function(r, t) {
        let {
            activeLocale: i,
            setLocale: a
        } = T(), {
            style: d,
            className: w,
            layoutId: u,
            variant: p,
            children: v,
            ...b
        } = Wt(r), [U, V] = yr(p, vt, !1), _ = void 0, F = P(bt, ...[Wr]), K = W(null), L = () => Be() ? !["LaxzCO8Lh", "PwQAvskEq"].includes(U) : !0, h = () => !Be() || U === "LaxzCO8Lh", te = () => !Be() || U === "PwQAvskEq", Y = D();
        return pr({}), e(hr.Provider, {
            value: {
                isLayoutTemplate: !0,
                primaryVariantId: "ewS39M8Fe",
                variantClassNames: Rt
            },
            children: s(B, {
                id: u ?? Y,
                children: [e(It, {
                    value: ":root body { background: rgb(255, 255, 255); }"
                }), s(n.div, {
                    ...b,
                    className: P(F, "framer-1hxfkvx", w),
                    "data-layout-template": !0,
                    ref: t ?? K,
                    style: {
                        ...d
                    },
                    children: [e(he, {
                        breakpoint: U,
                        overrides: {
                            LaxzCO8Lh: {
                                width: "100vw"
                            },
                            PwQAvskEq: {
                                width: "100vw"
                            }
                        },
                        children: e(k, {
                            height: 75,
                            y: 0,
                            children: e(cr, {
                                className: "framer-lwjbil-container",
                                "data-framer-layout-hint-center-x": !0,
                                "data-framer-name": "nav",
                                layoutScroll: !0,
                                name: "nav",
                                transformTemplate: kt,
                                children: e(he, {
                                    breakpoint: U,
                                    overrides: {
                                        LaxzCO8Lh: {
                                            __framer__variantAppearEffectEnabled: void 0,
                                            style: {
                                                width: "100%"
                                            },
                                            variant: "pPmtWKgLj"
                                        },
                                        PwQAvskEq: {
                                            __framer__variantAppearEffectEnabled: void 0,
                                            style: {
                                                width: "100%"
                                            },
                                            variant: "QQxKDUpo1"
                                        }
                                    },
                                    children: e(wt, {
                                        __framer__animateOnce: !1,
                                        __framer__obscuredVariantId: "IBvzkgl9r",
                                        __framer__scrollDirection: {
                                            direction: "down",
                                            target: "JUtpxTi61"
                                        },
                                        __framer__threshold: 1,
                                        __framer__variantAppearEffectEnabled: !0,
                                        __framer__visibleVariantId: "Q28wANCEY",
                                        EqVubWUaN: "txkv2ZkVI",
                                        fb5aKcaCi: "txkv2ZkVI",
                                        height: "100%",
                                        id: "H6yYmh3Q1",
                                        layoutId: "H6yYmh3Q1",
                                        n8rcvJWMF: "txkv2ZkVI",
                                        name: "nav",
                                        variant: "IBvzkgl9r",
                                        width: "100%",
                                        wwPDGFiN9: "txkv2ZkVI"
                                    })
                                })
                            })
                        })
                    }), v, e("div", {
                        className: "framer-1w7o3po"
                    }), L() && s(yt, {
                        __framer__styleTransformEffectEnabled: !0,
                        __framer__transformTargets: [{
                            target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 30,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 300
                            }
                        }, {
                            target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0
                            }
                        }],
                        __framer__transformTrigger: "onInView",
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-1mtzy hidden-1u5krlp hidden-bmr20v",
                        "data-framer-name": "Footer",
                        children: [s("div", {
                            className: "framer-cpw2bu",
                            "data-framer-name": "Container",
                            children: [s("div", {
                                className: "framer-1fjnjcn",
                                "data-framer-name": "Content",
                                children: [s("div", {
                                    className: "framer-1lv42dk",
                                    "data-framer-name": "Col 1",
                                    children: [e(c, {
                                        __fromCanvasComponent: !0,
                                        children: e(l, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "RlM7UG9wcGlucy1ib2xk",
                                                    "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                    "--framer-font-size": "20px",
                                                    "--framer-font-weight": "700",
                                                    "--framer-letter-spacing": "-0.04em",
                                                    "--framer-line-height": "1.3em",
                                                    "--framer-text-color": "var(--token-5a02855e-31fa-4222-b8e2-2b695d3912df, rgb(255, 255, 255))"
                                                },
                                                children: "Lib\xE9rez le potentiel de votre entreprise avec l\u2019IA."
                                            })
                                        }),
                                        className: "framer-tnjpd1",
                                        fonts: ["FS;Poppins-bold"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(Ce, {
                                        background: {
                                            alt: "",
                                            fit: "fit",
                                            loading: Ie(1346),
                                            pixelHeight: 400,
                                            pixelWidth: 625,
                                            positionX: "left",
                                            positionY: "center",
                                            sizes: "max((min(100vw - 96px, 1000px) - 56px) / 3.2, 1px)",
                                            src: "https://framerusercontent.com/images/kTsIYHUwkYIxlb3Y4IzmDpSjsg.webp",
                                            srcSet: "https://framerusercontent.com/images/kTsIYHUwkYIxlb3Y4IzmDpSjsg.webp?scale-down-to=512 512w,https://framerusercontent.com/images/kTsIYHUwkYIxlb3Y4IzmDpSjsg.webp 625w"
                                        },
                                        className: "framer-ci652z"
                                    })]
                                }), s("div", {
                                    className: "framer-d49fml",
                                    "data-framer-name": "Col 2",
                                    children: [s("div", {
                                        className: "framer-12nczk0",
                                        "data-framer-name": "Explore",
                                        children: [e(c, {
                                            __fromCanvasComponent: !0,
                                            children: e(l, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "RlM7UG9wcGlucy1ib2xk",
                                                        "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                        "--framer-font-weight": "700",
                                                        "--framer-letter-spacing": "-0.02em",
                                                        "--framer-text-color": "var(--token-5a02855e-31fa-4222-b8e2-2b695d3912df, rgb(255, 255, 255))"
                                                    },
                                                    children: "Explorez"
                                                })
                                            }),
                                            className: "framer-fvhiqa",
                                            fonts: ["FS;Poppins-bold"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), s("div", {
                                            className: "framer-yctyob",
                                            "data-framer-name": "Links",
                                            children: [e(c, {
                                                __fromCanvasComponent: !0,
                                                children: e(l, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7UG9wcGlucy1tZWRpdW0=",
                                                            "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                            "--framer-font-weight": "500",
                                                            "--framer-letter-spacing": "-0.02em",
                                                            "--framer-text-color": "var(--token-8326e047-1e41-409a-93c0-2ed4651ca4f2, rgb(155, 161, 165))"
                                                        },
                                                        children: e(x, {
                                                            href: {
                                                                hash: ":vostO4KMT",
                                                                webPageId: "uOM2Gd2LQ"
                                                            },
                                                            motionChild: !0,
                                                            nodeId: "FLNj2RGv_",
                                                            openInNewTab: !1,
                                                            smoothScroll: !1,
                                                            children: e(n.a, {
                                                                className: "framer-styles-preset-pbndum",
                                                                "data-styles-preset": "f_JgQVGd5",
                                                                children: "Nos solutions"
                                                            })
                                                        })
                                                    })
                                                }),
                                                className: "framer-452w0v",
                                                fonts: ["FS;Poppins-medium"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            }), e(c, {
                                                __fromCanvasComponent: !0,
                                                children: e(l, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7UG9wcGlucy1tZWRpdW0=",
                                                            "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                            "--framer-font-weight": "500",
                                                            "--framer-letter-spacing": "-0.02em",
                                                            "--framer-text-color": "var(--token-8326e047-1e41-409a-93c0-2ed4651ca4f2, rgb(155, 161, 165))"
                                                        },
                                                        children: e(x, {
                                                            href: {
                                                                hash: ":CPanvp_Nq",
                                                                webPageId: "uOM2Gd2LQ"
                                                            },
                                                            motionChild: !0,
                                                            nodeId: "c9NAWcLMb",
                                                            openInNewTab: !1,
                                                            smoothScroll: !1,
                                                            children: e(n.a, {
                                                                className: "framer-styles-preset-pbndum",
                                                                "data-styles-preset": "f_JgQVGd5",
                                                                children: "Cas d'usages"
                                                            })
                                                        })
                                                    })
                                                }),
                                                className: "framer-ptq19n",
                                                fonts: ["FS;Poppins-medium"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            }), e(c, {
                                                __fromCanvasComponent: !0,
                                                children: e(l, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7UG9wcGlucy1tZWRpdW0=",
                                                            "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                            "--framer-font-weight": "500",
                                                            "--framer-letter-spacing": "-0.02em",
                                                            "--framer-text-color": "var(--token-8326e047-1e41-409a-93c0-2ed4651ca4f2, rgb(155, 161, 165))"
                                                        },
                                                        children: e(x, {
                                                            href: {
                                                                webPageId: "FrPR52PCM"
                                                            },
                                                            motionChild: !0,
                                                            nodeId: "vIt2kjyvB",
                                                            openInNewTab: !1,
                                                            smoothScroll: !1,
                                                            children: e(n.a, {
                                                                className: "framer-styles-preset-pbndum",
                                                                "data-styles-preset": "f_JgQVGd5",
                                                                children: "A propos"
                                                            })
                                                        })
                                                    })
                                                }),
                                                className: "framer-11varv",
                                                fonts: ["FS;Poppins-medium"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })]
                                        })]
                                    }), s("div", {
                                        className: "framer-1sugsa7",
                                        "data-framer-name": "Explore",
                                        children: [e(c, {
                                            __fromCanvasComponent: !0,
                                            children: e(l, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "RlM7UG9wcGlucy1ib2xk",
                                                        "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                        "--framer-font-weight": "700",
                                                        "--framer-letter-spacing": "-0.02em",
                                                        "--framer-text-color": "var(--token-5a02855e-31fa-4222-b8e2-2b695d3912df, rgb(255, 255, 255))"
                                                    },
                                                    children: "Liens"
                                                })
                                            }),
                                            className: "framer-13n6tro",
                                            fonts: ["FS;Poppins-bold"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), s("div", {
                                            className: "framer-19twkxj",
                                            "data-framer-name": "Links",
                                            children: [e(c, {
                                                __fromCanvasComponent: !0,
                                                children: e(l, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7UG9wcGlucy1tZWRpdW0=",
                                                            "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                            "--framer-font-weight": "500",
                                                            "--framer-letter-spacing": "-0.03em",
                                                            "--framer-text-color": "var(--token-8326e047-1e41-409a-93c0-2ed4651ca4f2, rgb(155, 161, 165))"
                                                        },
                                                        children: e(x, {
                                                            href: {
                                                                webPageId: "gsyXkUq2k"
                                                            },
                                                            motionChild: !0,
                                                            nodeId: "O0BmIshWh",
                                                            openInNewTab: !1,
                                                            smoothScroll: !1,
                                                            children: e(n.a, {
                                                                className: "framer-styles-preset-pbndum",
                                                                "data-styles-preset": "f_JgQVGd5",
                                                                children: "Contact"
                                                            })
                                                        })
                                                    })
                                                }),
                                                className: "framer-1ftax11",
                                                fonts: ["FS;Poppins-medium"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            }), e(c, {
                                                __fromCanvasComponent: !0,
                                                children: e(l, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7UG9wcGlucy1tZWRpdW0=",
                                                            "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                            "--framer-font-weight": "500",
                                                            "--framer-letter-spacing": "-0.03em",
                                                            "--framer-text-color": "var(--token-8326e047-1e41-409a-93c0-2ed4651ca4f2, rgb(155, 161, 165))"
                                                        },
                                                        children: e(x, {
                                                            href: {
                                                                webPageId: "pNUas30iC"
                                                            },
                                                            motionChild: !0,
                                                            nodeId: "LoDwKnmlw",
                                                            openInNewTab: !1,
                                                            smoothScroll: !1,
                                                            children: e(n.a, {
                                                                className: "framer-styles-preset-pbndum",
                                                                "data-styles-preset": "f_JgQVGd5",
                                                                children: "Mentions l\xE9gales"
                                                            })
                                                        })
                                                    })
                                                }),
                                                className: "framer-8r2cq8",
                                                fonts: ["FS;Poppins-medium"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })]
                                        })]
                                    })]
                                }), s("div", {
                                    className: "framer-zdbq56",
                                    "data-framer-name": "Col 3",
                                    children: [e(x, {
                                        href: {
                                            webPageId: "gsyXkUq2k"
                                        },
                                        motionChild: !0,
                                        nodeId: "qTfOaV2FO",
                                        children: s(n.a, {
                                            className: "framer-78370s framer-dkwmjs",
                                            "data-framer-name": "Button",
                                            children: [e(c, {
                                                __fromCanvasComponent: !0,
                                                children: e(l, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7UG9wcGlucy1ib2xk",
                                                            "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                            "--framer-font-size": "28px",
                                                            "--framer-font-weight": "700",
                                                            "--framer-letter-spacing": "-0.05em",
                                                            "--framer-text-color": "var(--token-041cdb16-cce8-4c6a-ad08-01bb829b04b8, rgb(0, 128, 255))"
                                                        },
                                                        children: "Contactez-nous"
                                                    })
                                                }),
                                                className: "framer-1633hsx",
                                                fonts: ["FS;Poppins-bold"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            }), e("div", {
                                                className: "framer-1cal75s",
                                                "data-framer-name": "Icon",
                                                children: e(Q, {
                                                    className: "framer-7pkusl",
                                                    "data-framer-name": "SVG",
                                                    layout: "position",
                                                    opacity: 1,
                                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 12 10.667 L 12 4 L 5.333 4 M 4 12 L 11.667 4.333" fill="transparent" stroke-width="1.35" stroke="var(--token-5a02855e-31fa-4222-b8e2-2b695d3912df, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;12&quot;} */" stroke-miterlimit="10"></path></svg>',
                                                    svgContentId: 9610784305,
                                                    withExternalLayout: !0
                                                })
                                            })]
                                        })
                                    }), e(x, {
                                        href: {
                                            webPageId: "hJVzXHOiy"
                                        },
                                        motionChild: !0,
                                        nodeId: "dTAKE2CEw",
                                        children: s(n.a, {
                                            className: "framer-1707cgx framer-dkwmjs",
                                            "data-framer-name": "Button",
                                            children: [e(c, {
                                                __fromCanvasComponent: !0,
                                                children: e(l, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7UG9wcGlucy1ib2xk",
                                                            "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                            "--framer-font-size": "28px",
                                                            "--framer-font-weight": "700",
                                                            "--framer-letter-spacing": "-0.04em",
                                                            "--framer-text-color": "var(--token-5a02855e-31fa-4222-b8e2-2b695d3912df, rgb(255, 255, 255))"
                                                        },
                                                        children: "Blog"
                                                    })
                                                }),
                                                className: "framer-163pd6o",
                                                fonts: ["FS;Poppins-bold"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            }), e("div", {
                                                className: "framer-1d9wt44",
                                                "data-framer-name": "Icon",
                                                children: e(Q, {
                                                    className: "framer-szouon",
                                                    "data-framer-name": "SVG",
                                                    layout: "position",
                                                    opacity: 1,
                                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 12 10.667 L 12 4 L 5.333 4 M 4 12 L 11.667 4.333" fill="transparent" stroke-width="1.35" stroke="rgb(0,0,0)" stroke-miterlimit="10"></path></svg>',
                                                    svgContentId: 10392745537,
                                                    withExternalLayout: !0
                                                })
                                            })]
                                        })
                                    })]
                                })]
                            }), e("div", {
                                className: "framer-1fxodl1",
                                "data-framer-name": "Cirlces and Text",
                                children: e("div", {
                                    className: "framer-ktoyaw",
                                    "data-framer-name": "Text",
                                    children: e(c, {
                                        __fromCanvasComponent: !0,
                                        children: e(l, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "RlM7UG9wcGlucy1leHRyYWJvbGQ=",
                                                    "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                    "--framer-font-size": "453px",
                                                    "--framer-font-weight": "800",
                                                    "--framer-letter-spacing": "-7.5px",
                                                    "--framer-line-height": "1.1em",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "laizy"
                                            })
                                        }),
                                        className: "framer-160t6s",
                                        fonts: ["FS;Poppins-extrabold"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                })
                            })]
                        }), e("div", {
                            className: "framer-v7l2vg",
                            "data-framer-name": "Trigger"
                        })]
                    }), h() && s("footer", {
                        className: "framer-l3a2kd hidden-1hxfkvx hidden-bmr20v",
                        "data-framer-name": "Footer",
                        children: [s("div", {
                            className: "framer-1od5k66",
                            "data-framer-name": "Container",
                            children: [s("div", {
                                className: "framer-h978e9",
                                "data-framer-name": "Content",
                                children: [s("div", {
                                    className: "framer-1ggm4oy",
                                    "data-framer-name": "Col 1",
                                    children: [e(c, {
                                        __fromCanvasComponent: !0,
                                        children: e(l, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "RlM7UG9wcGlucy1ib2xk",
                                                    "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                    "--framer-font-size": "20px",
                                                    "--framer-font-weight": "700",
                                                    "--framer-letter-spacing": "-0.04em",
                                                    "--framer-line-height": "1.3em",
                                                    "--framer-text-color": "var(--token-5a02855e-31fa-4222-b8e2-2b695d3912df, rgb(255, 255, 255))"
                                                },
                                                children: "Lib\xE9rez le potentiel de votre entreprise avec l\u2019IA."
                                            })
                                        }),
                                        className: "framer-qlkix3",
                                        fonts: ["FS;Poppins-bold"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(he, {
                                        breakpoint: U,
                                        overrides: {
                                            LaxzCO8Lh: {
                                                background: {
                                                    alt: "",
                                                    fit: "fit",
                                                    loading: Ie(1300),
                                                    pixelHeight: 400,
                                                    pixelWidth: 625,
                                                    positionX: "left",
                                                    positionY: "center",
                                                    sizes: "max((min(100vw - 96px, 1000px) - 56px) / 3.2, 1px)",
                                                    src: "https://framerusercontent.com/images/kTsIYHUwkYIxlb3Y4IzmDpSjsg.webp",
                                                    srcSet: "https://framerusercontent.com/images/kTsIYHUwkYIxlb3Y4IzmDpSjsg.webp?scale-down-to=512 512w,https://framerusercontent.com/images/kTsIYHUwkYIxlb3Y4IzmDpSjsg.webp 625w"
                                                }
                                            }
                                        },
                                        children: e(Ce, {
                                            background: {
                                                alt: "",
                                                fit: "fit",
                                                pixelHeight: 400,
                                                pixelWidth: 625,
                                                positionX: "left",
                                                positionY: "center",
                                                src: "https://framerusercontent.com/images/kTsIYHUwkYIxlb3Y4IzmDpSjsg.webp",
                                                srcSet: "https://framerusercontent.com/images/kTsIYHUwkYIxlb3Y4IzmDpSjsg.webp?scale-down-to=512 512w,https://framerusercontent.com/images/kTsIYHUwkYIxlb3Y4IzmDpSjsg.webp 625w"
                                            },
                                            className: "framer-1qr65h3"
                                        })
                                    })]
                                }), s("div", {
                                    className: "framer-1xwrnw0",
                                    "data-framer-name": "Col 2",
                                    children: [s("div", {
                                        className: "framer-7pk8sd",
                                        "data-framer-name": "Explore",
                                        children: [e(c, {
                                            __fromCanvasComponent: !0,
                                            children: e(l, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "RlM7UG9wcGlucy1ib2xk",
                                                        "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                        "--framer-font-weight": "700",
                                                        "--framer-letter-spacing": "-0.02em",
                                                        "--framer-text-color": "var(--token-5a02855e-31fa-4222-b8e2-2b695d3912df, rgb(255, 255, 255))"
                                                    },
                                                    children: "Explorez"
                                                })
                                            }),
                                            className: "framer-1df44dk",
                                            fonts: ["FS;Poppins-bold"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), s("div", {
                                            className: "framer-rufzjl",
                                            "data-framer-name": "Links",
                                            children: [e(c, {
                                                __fromCanvasComponent: !0,
                                                children: e(l, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7UG9wcGlucy1tZWRpdW0=",
                                                            "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                            "--framer-font-weight": "500",
                                                            "--framer-letter-spacing": "-0.02em",
                                                            "--framer-text-color": "var(--token-8326e047-1e41-409a-93c0-2ed4651ca4f2, rgb(155, 161, 165))"
                                                        },
                                                        children: e(x, {
                                                            href: {
                                                                hash: ":vostO4KMT",
                                                                webPageId: "uOM2Gd2LQ"
                                                            },
                                                            motionChild: !0,
                                                            nodeId: "Prw_ZatiD",
                                                            openInNewTab: !1,
                                                            smoothScroll: !1,
                                                            children: e(n.a, {
                                                                className: "framer-styles-preset-pbndum",
                                                                "data-styles-preset": "f_JgQVGd5",
                                                                children: "Nos solutions"
                                                            })
                                                        })
                                                    })
                                                }),
                                                className: "framer-4sgitq",
                                                fonts: ["FS;Poppins-medium"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            }), e(c, {
                                                __fromCanvasComponent: !0,
                                                children: e(l, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7UG9wcGlucy1tZWRpdW0=",
                                                            "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                            "--framer-font-weight": "500",
                                                            "--framer-letter-spacing": "-0.02em",
                                                            "--framer-text-color": "var(--token-8326e047-1e41-409a-93c0-2ed4651ca4f2, rgb(155, 161, 165))"
                                                        },
                                                        children: e(x, {
                                                            href: {
                                                                hash: ":CPanvp_Nq",
                                                                webPageId: "uOM2Gd2LQ"
                                                            },
                                                            motionChild: !0,
                                                            nodeId: "BGwpE9Yf8",
                                                            openInNewTab: !1,
                                                            smoothScroll: !1,
                                                            children: e(n.a, {
                                                                className: "framer-styles-preset-pbndum",
                                                                "data-styles-preset": "f_JgQVGd5",
                                                                children: "Cas d'usages"
                                                            })
                                                        })
                                                    })
                                                }),
                                                className: "framer-1gllsyy",
                                                fonts: ["FS;Poppins-medium"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            }), e(c, {
                                                __fromCanvasComponent: !0,
                                                children: e(l, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7UG9wcGlucy1tZWRpdW0=",
                                                            "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                            "--framer-font-weight": "500",
                                                            "--framer-letter-spacing": "-0.02em",
                                                            "--framer-text-color": "var(--token-8326e047-1e41-409a-93c0-2ed4651ca4f2, rgb(155, 161, 165))"
                                                        },
                                                        children: e(x, {
                                                            href: {
                                                                webPageId: "FrPR52PCM"
                                                            },
                                                            motionChild: !0,
                                                            nodeId: "tfKEP6F6G",
                                                            openInNewTab: !1,
                                                            smoothScroll: !1,
                                                            children: e(n.a, {
                                                                className: "framer-styles-preset-pbndum",
                                                                "data-styles-preset": "f_JgQVGd5",
                                                                children: "A propos"
                                                            })
                                                        })
                                                    })
                                                }),
                                                className: "framer-showos",
                                                fonts: ["FS;Poppins-medium"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })]
                                        })]
                                    }), s("div", {
                                        className: "framer-1eclody",
                                        "data-framer-name": "Explore",
                                        children: [e(c, {
                                            __fromCanvasComponent: !0,
                                            children: e(l, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "RlM7UG9wcGlucy1ib2xk",
                                                        "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                        "--framer-font-weight": "700",
                                                        "--framer-letter-spacing": "-0.02em",
                                                        "--framer-text-color": "var(--token-5a02855e-31fa-4222-b8e2-2b695d3912df, rgb(255, 255, 255))"
                                                    },
                                                    children: "Liens"
                                                })
                                            }),
                                            className: "framer-137niqm",
                                            fonts: ["FS;Poppins-bold"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), s("div", {
                                            className: "framer-1fsbu11",
                                            "data-framer-name": "Links",
                                            children: [e(c, {
                                                __fromCanvasComponent: !0,
                                                children: e(l, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7UG9wcGlucy1tZWRpdW0=",
                                                            "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                            "--framer-font-weight": "500",
                                                            "--framer-letter-spacing": "-0.03em",
                                                            "--framer-text-color": "var(--token-8326e047-1e41-409a-93c0-2ed4651ca4f2, rgb(155, 161, 165))"
                                                        },
                                                        children: e(x, {
                                                            href: {
                                                                webPageId: "gsyXkUq2k"
                                                            },
                                                            motionChild: !0,
                                                            nodeId: "z_SCOTR1w",
                                                            openInNewTab: !1,
                                                            smoothScroll: !1,
                                                            children: e(n.a, {
                                                                className: "framer-styles-preset-pbndum",
                                                                "data-styles-preset": "f_JgQVGd5",
                                                                children: "Contact"
                                                            })
                                                        })
                                                    })
                                                }),
                                                className: "framer-1tl18jn",
                                                fonts: ["FS;Poppins-medium"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            }), e(c, {
                                                __fromCanvasComponent: !0,
                                                children: e(l, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7UG9wcGlucy1tZWRpdW0=",
                                                            "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                            "--framer-font-weight": "500",
                                                            "--framer-letter-spacing": "-0.03em",
                                                            "--framer-text-color": "var(--token-8326e047-1e41-409a-93c0-2ed4651ca4f2, rgb(155, 161, 165))"
                                                        },
                                                        children: e(x, {
                                                            href: {
                                                                webPageId: "eQG6QlqyK"
                                                            },
                                                            motionChild: !0,
                                                            nodeId: "PFeG1cePZ",
                                                            openInNewTab: !1,
                                                            smoothScroll: !1,
                                                            children: e(n.a, {
                                                                className: "framer-styles-preset-pbndum",
                                                                "data-styles-preset": "f_JgQVGd5",
                                                                children: "Mentions l\xE9gales"
                                                            })
                                                        })
                                                    })
                                                }),
                                                className: "framer-14uo37h",
                                                fonts: ["FS;Poppins-medium"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })]
                                        })]
                                    })]
                                }), s("div", {
                                    className: "framer-1rnofr7",
                                    "data-framer-name": "Col 3",
                                    children: [e(x, {
                                        href: {
                                            webPageId: "gsyXkUq2k"
                                        },
                                        motionChild: !0,
                                        nodeId: "cHrZpsi8C",
                                        children: s(n.a, {
                                            className: "framer-1kwam9j framer-dkwmjs",
                                            "data-framer-name": "Button",
                                            children: [e(c, {
                                                __fromCanvasComponent: !0,
                                                children: e(l, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7UG9wcGlucy1ib2xk",
                                                            "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                            "--framer-font-size": "18px",
                                                            "--framer-font-weight": "700",
                                                            "--framer-letter-spacing": "-0.05em",
                                                            "--framer-text-color": "var(--token-041cdb16-cce8-4c6a-ad08-01bb829b04b8, rgb(0, 128, 255))"
                                                        },
                                                        children: "Contactez-nous"
                                                    })
                                                }),
                                                className: "framer-v5tkek",
                                                fonts: ["FS;Poppins-bold"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            }), e("div", {
                                                className: "framer-8nqk19",
                                                "data-framer-name": "Icon",
                                                children: e(Q, {
                                                    className: "framer-1nytrlw",
                                                    "data-framer-name": "SVG",
                                                    layout: "position",
                                                    opacity: 1,
                                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 12 10.667 L 12 4 L 5.333 4 M 4 12 L 11.667 4.333" fill="transparent" stroke-width="1.35" stroke="var(--token-5a02855e-31fa-4222-b8e2-2b695d3912df, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;12&quot;} */" stroke-miterlimit="10"></path></svg>',
                                                    svgContentId: 9610784305,
                                                    withExternalLayout: !0
                                                })
                                            })]
                                        })
                                    }), e(x, {
                                        href: {
                                            webPageId: "hJVzXHOiy"
                                        },
                                        motionChild: !0,
                                        nodeId: "aB8zqphA8",
                                        children: s(n.a, {
                                            className: "framer-j1eaf7 framer-dkwmjs",
                                            "data-framer-name": "Button",
                                            children: [e(c, {
                                                __fromCanvasComponent: !0,
                                                children: e(l, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7UG9wcGlucy1ib2xk",
                                                            "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                            "--framer-font-size": "18px",
                                                            "--framer-font-weight": "700",
                                                            "--framer-letter-spacing": "-0.04em",
                                                            "--framer-text-color": "var(--token-5a02855e-31fa-4222-b8e2-2b695d3912df, rgb(255, 255, 255))"
                                                        },
                                                        children: "Blog"
                                                    })
                                                }),
                                                className: "framer-nblbm1",
                                                fonts: ["FS;Poppins-bold"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            }), e("div", {
                                                className: "framer-q5whvq",
                                                "data-framer-name": "Icon",
                                                children: e(Q, {
                                                    className: "framer-127bs2",
                                                    "data-framer-name": "SVG",
                                                    layout: "position",
                                                    opacity: 1,
                                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 12 10.667 L 12 4 L 5.333 4 M 4 12 L 11.667 4.333" fill="transparent" stroke-width="1.35" stroke="rgb(0,0,0)" stroke-miterlimit="10"></path></svg>',
                                                    svgContentId: 10392745537,
                                                    withExternalLayout: !0
                                                })
                                            })]
                                        })
                                    })]
                                })]
                            }), e("div", {
                                className: "framer-1rdrmlz",
                                "data-framer-name": "Cirlces and Text",
                                children: e("div", {
                                    className: "framer-1gitxpb",
                                    "data-framer-name": "Text",
                                    children: e(c, {
                                        __fromCanvasComponent: !0,
                                        children: e(l, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "RlM7UG9wcGlucy1leHRyYWJvbGQ=",
                                                    "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                    "--framer-font-size": "342px",
                                                    "--framer-font-weight": "800",
                                                    "--framer-letter-spacing": "-7.5px",
                                                    "--framer-line-height": "1.1em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "laizy"
                                            })
                                        }),
                                        className: "framer-itr9kg",
                                        fonts: ["FS;Poppins-extrabold"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                })
                            })]
                        }), e("div", {
                            className: "framer-1iet15o",
                            "data-framer-name": "Trigger"
                        })]
                    }), te() && s("footer", {
                        className: "framer-wryusb hidden-1hxfkvx hidden-1u5krlp",
                        "data-framer-name": "Footer",
                        children: [s("div", {
                            className: "framer-2des73",
                            "data-framer-name": "Container",
                            children: [s("div", {
                                className: "framer-drhyvc",
                                "data-framer-name": "Content",
                                children: [s("div", {
                                    className: "framer-dn8u8f",
                                    "data-framer-name": "Col 1",
                                    children: [e(c, {
                                        __fromCanvasComponent: !0,
                                        children: e(l, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "RlM7UG9wcGlucy1ib2xk",
                                                    "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                    "--framer-font-size": "20px",
                                                    "--framer-font-weight": "700",
                                                    "--framer-letter-spacing": "-0.04em",
                                                    "--framer-line-height": "1.3em",
                                                    "--framer-text-color": "var(--token-5a02855e-31fa-4222-b8e2-2b695d3912df, rgb(255, 255, 255))"
                                                },
                                                children: "Lib\xE9rez le potentiel de votre entreprise avec l\u2019IA."
                                            })
                                        }),
                                        className: "framer-f14nye",
                                        fonts: ["FS;Poppins-bold"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(he, {
                                        breakpoint: U,
                                        overrides: {
                                            PwQAvskEq: {
                                                background: {
                                                    alt: "",
                                                    fit: "fit",
                                                    loading: Ie(1300),
                                                    pixelHeight: 400,
                                                    pixelWidth: 625,
                                                    positionX: "left",
                                                    positionY: "center",
                                                    sizes: "min(100vw - 80px, 1000px)",
                                                    src: "https://framerusercontent.com/images/kTsIYHUwkYIxlb3Y4IzmDpSjsg.webp",
                                                    srcSet: "https://framerusercontent.com/images/kTsIYHUwkYIxlb3Y4IzmDpSjsg.webp?scale-down-to=512 512w,https://framerusercontent.com/images/kTsIYHUwkYIxlb3Y4IzmDpSjsg.webp 625w"
                                                }
                                            }
                                        },
                                        children: e(Ce, {
                                            background: {
                                                alt: "",
                                                fit: "fit",
                                                pixelHeight: 400,
                                                pixelWidth: 625,
                                                positionX: "left",
                                                positionY: "center",
                                                src: "https://framerusercontent.com/images/kTsIYHUwkYIxlb3Y4IzmDpSjsg.webp",
                                                srcSet: "https://framerusercontent.com/images/kTsIYHUwkYIxlb3Y4IzmDpSjsg.webp?scale-down-to=512 512w,https://framerusercontent.com/images/kTsIYHUwkYIxlb3Y4IzmDpSjsg.webp 625w"
                                            },
                                            className: "framer-pt1ie4"
                                        })
                                    })]
                                }), s("div", {
                                    className: "framer-eomfuw",
                                    "data-framer-name": "Col 2",
                                    children: [s("div", {
                                        className: "framer-v6512n",
                                        "data-framer-name": "Explore",
                                        children: [e(c, {
                                            __fromCanvasComponent: !0,
                                            children: e(l, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "RlM7UG9wcGlucy1ib2xk",
                                                        "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                        "--framer-font-weight": "700",
                                                        "--framer-letter-spacing": "-0.02em",
                                                        "--framer-text-color": "var(--token-5a02855e-31fa-4222-b8e2-2b695d3912df, rgb(255, 255, 255))"
                                                    },
                                                    children: "Explorez"
                                                })
                                            }),
                                            className: "framer-7qd39d",
                                            fonts: ["FS;Poppins-bold"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), s("div", {
                                            className: "framer-1e84fh2",
                                            "data-framer-name": "Links",
                                            children: [e(c, {
                                                __fromCanvasComponent: !0,
                                                children: e(l, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7UG9wcGlucy1tZWRpdW0=",
                                                            "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                            "--framer-font-weight": "500",
                                                            "--framer-letter-spacing": "-0.02em",
                                                            "--framer-text-color": "var(--token-8326e047-1e41-409a-93c0-2ed4651ca4f2, rgb(155, 161, 165))"
                                                        },
                                                        children: e(x, {
                                                            href: {
                                                                hash: ":vostO4KMT",
                                                                webPageId: "uOM2Gd2LQ"
                                                            },
                                                            motionChild: !0,
                                                            nodeId: "Y2c2gZG1M",
                                                            openInNewTab: !1,
                                                            smoothScroll: !1,
                                                            children: e(n.a, {
                                                                className: "framer-styles-preset-pbndum",
                                                                "data-styles-preset": "f_JgQVGd5",
                                                                children: "Nos solutions"
                                                            })
                                                        })
                                                    })
                                                }),
                                                className: "framer-1f90u4o",
                                                fonts: ["FS;Poppins-medium"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            }), e(c, {
                                                __fromCanvasComponent: !0,
                                                children: e(l, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7UG9wcGlucy1tZWRpdW0=",
                                                            "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                            "--framer-font-weight": "500",
                                                            "--framer-letter-spacing": "-0.02em",
                                                            "--framer-text-color": "var(--token-8326e047-1e41-409a-93c0-2ed4651ca4f2, rgb(155, 161, 165))"
                                                        },
                                                        children: e(x, {
                                                            href: {
                                                                hash: ":CPanvp_Nq",
                                                                webPageId: "uOM2Gd2LQ"
                                                            },
                                                            motionChild: !0,
                                                            nodeId: "C9ItFwqxG",
                                                            openInNewTab: !1,
                                                            smoothScroll: !1,
                                                            children: e(n.a, {
                                                                className: "framer-styles-preset-pbndum",
                                                                "data-styles-preset": "f_JgQVGd5",
                                                                children: "Cas d'usages"
                                                            })
                                                        })
                                                    })
                                                }),
                                                className: "framer-jxwrcp",
                                                fonts: ["FS;Poppins-medium"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            }), e(c, {
                                                __fromCanvasComponent: !0,
                                                children: e(l, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7UG9wcGlucy1tZWRpdW0=",
                                                            "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                            "--framer-font-weight": "500",
                                                            "--framer-letter-spacing": "-0.02em",
                                                            "--framer-text-color": "var(--token-8326e047-1e41-409a-93c0-2ed4651ca4f2, rgb(155, 161, 165))"
                                                        },
                                                        children: e(x, {
                                                            href: {
                                                                webPageId: "FrPR52PCM"
                                                            },
                                                            motionChild: !0,
                                                            nodeId: "r93l5ztT1",
                                                            openInNewTab: !1,
                                                            smoothScroll: !1,
                                                            children: e(n.a, {
                                                                className: "framer-styles-preset-pbndum",
                                                                "data-styles-preset": "f_JgQVGd5",
                                                                children: "A propos"
                                                            })
                                                        })
                                                    })
                                                }),
                                                className: "framer-1bcmzkc",
                                                fonts: ["FS;Poppins-medium"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })]
                                        })]
                                    }), s("div", {
                                        className: "framer-1cgwq7g",
                                        "data-framer-name": "Explore",
                                        children: [e(c, {
                                            __fromCanvasComponent: !0,
                                            children: e(l, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "RlM7UG9wcGlucy1ib2xk",
                                                        "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                        "--framer-font-weight": "700",
                                                        "--framer-letter-spacing": "-0.02em",
                                                        "--framer-text-color": "var(--token-5a02855e-31fa-4222-b8e2-2b695d3912df, rgb(255, 255, 255))"
                                                    },
                                                    children: "Liens"
                                                })
                                            }),
                                            className: "framer-umnwri",
                                            fonts: ["FS;Poppins-bold"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), s("div", {
                                            className: "framer-bpf20f",
                                            "data-framer-name": "Links",
                                            children: [e(c, {
                                                __fromCanvasComponent: !0,
                                                children: e(l, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7UG9wcGlucy1tZWRpdW0=",
                                                            "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                            "--framer-font-weight": "500",
                                                            "--framer-letter-spacing": "-0.03em",
                                                            "--framer-text-color": "var(--token-8326e047-1e41-409a-93c0-2ed4651ca4f2, rgb(155, 161, 165))"
                                                        },
                                                        children: e(x, {
                                                            href: {
                                                                webPageId: "gsyXkUq2k"
                                                            },
                                                            motionChild: !0,
                                                            nodeId: "RQY9blFCe",
                                                            openInNewTab: !1,
                                                            smoothScroll: !1,
                                                            children: e(n.a, {
                                                                className: "framer-styles-preset-pbndum",
                                                                "data-styles-preset": "f_JgQVGd5",
                                                                children: "Contact"
                                                            })
                                                        })
                                                    })
                                                }),
                                                className: "framer-1loqrwf",
                                                fonts: ["FS;Poppins-medium"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            }), e(c, {
                                                __fromCanvasComponent: !0,
                                                children: e(l, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7UG9wcGlucy1tZWRpdW0=",
                                                            "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                            "--framer-font-weight": "500",
                                                            "--framer-letter-spacing": "-0.03em",
                                                            "--framer-text-color": "var(--token-8326e047-1e41-409a-93c0-2ed4651ca4f2, rgb(155, 161, 165))"
                                                        },
                                                        children: e(x, {
                                                            href: {
                                                                webPageId: "pNUas30iC"
                                                            },
                                                            motionChild: !0,
                                                            nodeId: "LRYs1S1vi",
                                                            openInNewTab: !1,
                                                            smoothScroll: !1,
                                                            children: e(n.a, {
                                                                className: "framer-styles-preset-pbndum",
                                                                "data-styles-preset": "f_JgQVGd5",
                                                                children: "Mentions l\xE9gales"
                                                            })
                                                        })
                                                    })
                                                }),
                                                className: "framer-85moqs",
                                                fonts: ["FS;Poppins-medium"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })]
                                        })]
                                    })]
                                }), s("div", {
                                    className: "framer-2fn90x",
                                    "data-framer-name": "Col 3",
                                    children: [e(x, {
                                        href: {
                                            webPageId: "gsyXkUq2k"
                                        },
                                        motionChild: !0,
                                        nodeId: "ViWWZwlbS",
                                        children: s(n.a, {
                                            className: "framer-1vxx6p6 framer-dkwmjs",
                                            "data-framer-name": "Button",
                                            children: [e(c, {
                                                __fromCanvasComponent: !0,
                                                children: e(l, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7UG9wcGlucy1ib2xk",
                                                            "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                            "--framer-font-size": "28px",
                                                            "--framer-font-weight": "700",
                                                            "--framer-letter-spacing": "-0.05em",
                                                            "--framer-text-color": "var(--token-041cdb16-cce8-4c6a-ad08-01bb829b04b8, rgb(0, 128, 255))"
                                                        },
                                                        children: "Contactez-nous"
                                                    })
                                                }),
                                                className: "framer-11wzp9",
                                                fonts: ["FS;Poppins-bold"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            }), e("div", {
                                                className: "framer-ugl8qq",
                                                "data-framer-name": "Icon",
                                                children: e(Q, {
                                                    className: "framer-16uv75c",
                                                    "data-framer-name": "SVG",
                                                    layout: "position",
                                                    opacity: 1,
                                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 12 10.667 L 12 4 L 5.333 4 M 4 12 L 11.667 4.333" fill="transparent" stroke-width="1.35" stroke="var(--token-5a02855e-31fa-4222-b8e2-2b695d3912df, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;12&quot;} */" stroke-miterlimit="10"></path></svg>',
                                                    svgContentId: 9610784305,
                                                    withExternalLayout: !0
                                                })
                                            })]
                                        })
                                    }), e(x, {
                                        href: {
                                            webPageId: "hJVzXHOiy"
                                        },
                                        motionChild: !0,
                                        nodeId: "mGDlMgMIR",
                                        children: s(n.a, {
                                            className: "framer-hx4jgs framer-dkwmjs",
                                            "data-framer-name": "Button",
                                            children: [e(c, {
                                                __fromCanvasComponent: !0,
                                                children: e(l, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7UG9wcGlucy1ib2xk",
                                                            "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                            "--framer-font-size": "28px",
                                                            "--framer-font-weight": "700",
                                                            "--framer-letter-spacing": "-0.04em",
                                                            "--framer-text-color": "var(--token-5a02855e-31fa-4222-b8e2-2b695d3912df, rgb(255, 255, 255))"
                                                        },
                                                        children: "Blog"
                                                    })
                                                }),
                                                className: "framer-11k9m3a",
                                                fonts: ["FS;Poppins-bold"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            }), e("div", {
                                                className: "framer-1qtglyn",
                                                "data-framer-name": "Icon",
                                                children: e(Q, {
                                                    className: "framer-qh1hfo",
                                                    "data-framer-name": "SVG",
                                                    layout: "position",
                                                    opacity: 1,
                                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 12 10.667 L 12 4 L 5.333 4 M 4 12 L 11.667 4.333" fill="transparent" stroke-width="1.35" stroke="rgb(0,0,0)" stroke-miterlimit="10"></path></svg>',
                                                    svgContentId: 10392745537,
                                                    withExternalLayout: !0
                                                })
                                            })]
                                        })
                                    })]
                                })]
                            }), e("div", {
                                className: "framer-jkudto",
                                "data-framer-name": "Cirlces and Text",
                                children: e("div", {
                                    className: "framer-oxmx1x",
                                    "data-framer-name": "Text",
                                    children: e(c, {
                                        __fromCanvasComponent: !0,
                                        children: e(l, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "RlM7UG9wcGlucy1leHRyYWJvbGQ=",
                                                    "--framer-font-family": '"Poppins", "Poppins Placeholder", sans-serif',
                                                    "--framer-font-size": "195px",
                                                    "--framer-font-weight": "800",
                                                    "--framer-letter-spacing": "-7.5px",
                                                    "--framer-line-height": "1.1em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "laizy"
                                            })
                                        }),
                                        className: "framer-8n79jv",
                                        fonts: ["FS;Poppins-extrabold"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                })
                            })]
                        }), e("div", {
                            className: "framer-1fl4sc1",
                            "data-framer-name": "Trigger"
                        })]
                    })]
                }), e("div", {
                    id: "template-overlay"
                })]
            })
        })
    }),
    Nt = r => r === Ge.canvas || r === Ge.export ? [...Or, ...Br.flatMap(i => {
        let a = Ut[i];
        return Oe[i].map(d => `${a} ${d}`)
    })] : [...Or, ...Br.map(i => `@media ${Ct[i]} { ${Oe[i].join(" ")} }`)],
    Le = O(Ft, Nt, "framer-WUl9R"),
    Qr = Le;
Le.displayName = "layout";
Le.defaultProps = {
    height: 1e3,
    width: 1200
};
A(Le, [{
    explicitInter: !0,
    fonts: [{
        family: "Poppins",
        source: "fontshare",
        style: "normal",
        url: "https://framerusercontent.com/third-party-assets/fontshare/wf/EOHGWBZYYKO6R4PWP4S2B3FFWHHBEZN6/UWQLMF4AFWLXCJQCFV3WRVYC77KZXPRB/FYG6OCH7XOLUUSZTIZE65ATBZWF623O4.woff2",
        weight: "700"
    }, {
        family: "Poppins",
        source: "fontshare",
        style: "normal",
        url: "https://framerusercontent.com/third-party-assets/fontshare/wf/K4RHKGAGLQZBXEZQT2O2AGSLKJF2E4YC/JRUTXNFPWLFGIEVSSEYOW7EP7TYM3V6A/UCDYLFFGLZRGCFY5GYDYM5LDB52BAR5M.woff2",
        weight: "500"
    }, {
        family: "Poppins",
        source: "fontshare",
        style: "normal",
        url: "https://framerusercontent.com/third-party-assets/fontshare/wf/GCE3CQJHNQPET5GTQTXRVLUNQRTTGRYD/PW7XXFU476CRE7KBIKF63THLLGCBMQ4S/IX2APREQD7NDYAG5A6YIV4Q2246OG5XH.woff2",
        weight: "800"
    }]
}, ...xt, ...Pe(Ir)], {
    supportsExplicitInterCodegen: !0
});
var Qe = {
        uOM2Gd2LQ: {
            elements: {
                Bnu3AIVmT: "process",
                bwBRktD5a: "faq",
                CPanvp_Nq: "cas",
                EiCgugEUu: "logosok",
                F5iKGSemm: "logos-1",
                FvCRW0PCL: "end-1",
                gaVziuQRB: "4",
                GxccAzer3: "start",
                h1h97Kysr: "chiffres",
                IRn7lDuma: "scroll-3",
                KUJhrtOnY: "2",
                lfFw8Cy8t: "footer-2",
                LP0c3lUnW: "scroll-1",
                mC5guz6C4: "logos",
                MgbtjJXZF: "pourquoi",
                o42Sp0tYA: "herook",
                papdA4GYk: "3",
                q2MStOPTC: "cas2",
                qWym8hcXD: "footer-2-1",
                r2gLiuD6E: "cta",
                TvMHIV0xZ: "1-1",
                TzC0srTIj: "end",
                U4JQ4xjNd: "hero",
                UtfFdhJAj: "1",
                vostO4KMT: "solutions",
                x9XqTfdJc: "2-1",
                yGVgfkpib: "3-1",
                YUsmXCbkH: "testi",
                znNu0BltO: "scroll-2"
            },
            page: N(() => import("./HRbZd83c1s0QBtShc-WhwTWYdfabBP3oQcPK0jk52CI.NPFUJIEE.mjs")),
            path: "/"
        },
        FrPR52PCM: {
            elements: {},
            page: N(() => import("./15ajdB1cuE6IcLW9znjzWWRRYQEXYdA110K0b1B5p7s.RB5635VE.mjs")),
            path: "/a-propos"
        },
        ETQc39FKK: {
            elements: {},
            page: N(() => import("./BCjQWmF-geoCox7v5XIESDy8YNc6gw8TKR_S9Ijxv-g.SN4CLBRC.mjs")),
            path: "/services"
        },
        gsyXkUq2k: {
            elements: {},
            page: N(() => import("./n91ASHesdFcHvMxHo3bgIS_q1PVs0PH7jASZclRk5L8.VJJ6HDYS.mjs")),
            path: "/contact"
        },
        pNUas30iC: {
            elements: {},
            page: N(() => import("./MXBS9-ki3TuCJ6QyeBN53JvWiS6BtOKPlsmtUNKjmiE.OIY2RC5J.mjs")),
            path: "/mentions-legales"
        },
        ukGi7vqWu: {
            elements: {
                bJxuVKO3n: "hero",
                fGagpricK: "logos",
                IE76hB1LQ: "team",
                mYYOvSYOm: "faq",
                njrBiK4OJ: "process",
                oyK1z9kIR: "testimonials",
                peWEAJnKL: "services",
                qK60dbv8G: "about-us",
                xbi_l2fxn: "results",
                yXeu8TkZW: "comparison",
                zr3AWkrmh: "clients"
            },
            page: N(() => import("./uz7II65ne0_7pOPH80QMqN2N4LZ21ucAmR17mBpg1Qs.CUR2TRVU.mjs")),
            path: "/404"
        },
        hJVzXHOiy: {
            elements: {},
            page: N(() => import("./0dPcWRoPYTQfSiEpiFpPsPBObmQ0BSfL98UlxJpj_9g.4UJMM3R4.mjs")),
            path: "/blog"
        },
        c97HWIba0: {
            elements: {},
            page: N(() => import("./I5TEhLLEz2jx6EGCgvaYT-4mjlQ_i3KGkAxEu6WfSKg.7UF34GXF.mjs")),
            path: "/guide-logiciel-ia"
        },
        H8O08exRp: {
            elements: {},
            page: N(() => import("./HOHCQNt6TjG-hwJNJ2xBguAPHRQyyFWtOHv_NSOcMbw.3HCV3LQO.mjs")),
            path: "/blog-all"
        },
        BW6MjIXI5: {
            elements: {},
            page: N(() => import("./3yvy0C3msmsZm2UL3yyXalvYtc_5qe3qEcQmcYwhNUk.2IMS4IAN.mjs")),
            path: "/chatbot-recrutement"
        },
        qOZ2uv34A: {
            elements: {},
            page: N(() => import("./KMLg5YdE3FL1sGaYBdGGrGnoN17Ztzj8MPSSdZLB7Wo.BUPJ6ERU.mjs")),
            path: "/guide-logiciel-ia-all"
        },
        nzfOrsMPb: {
            collectionId: "Qjft24UTf",
            elements: {},
            page: N(() => import("./algCYioY1Cy3qMMwbsbJP78jZVFeza5h-XiLUt2rvUw.RI4LO2YO.mjs")),
            path: "/blog/:ASkI42LaT"
        },
        p5CEY349I: {
            collectionId: "xDtiWCQBs",
            elements: {},
            page: N(() => import("./jlZCMskdkw8On5kSrHh1Quh62AcnWSFMkeDFv1bsagI.ASDV4ZWV.mjs")),
            path: "/guide-logiciel-ia/:hiVoHDlTs"
        }
    },
    Kr = [{
        code: "fr",
        id: "default",
        name: "French",
        slug: ""
    }];

function Vt({
    routeId: r,
    children: t,
    style: i,
    ...a
}) {
    let w = {} [r] ?? {};
    switch (r) {
        case "uOM2Gd2LQ":
        case "FrPR52PCM":
        case "ETQc39FKK":
        case "gsyXkUq2k":
        case "pNUas30iC":
        case "hJVzXHOiy":
        case "c97HWIba0":
        case "H8O08exRp":
        case "BW6MjIXI5":
        case "qOZ2uv34A":
        case "nzfOrsMPb":
        case "p5CEY349I":
            return ne(Qr, {
                ...w,
                key: "Layout",
                routeId: r,
                style: i
            }, t(!0));
        default:
            return t(!1)
    }
}

function Vn(r) {
    switch (r) {
        case "uOM2Gd2LQ":
        case "FrPR52PCM":
        case "ETQc39FKK":
        case "gsyXkUq2k":
        case "pNUas30iC":
        case "hJVzXHOiy":
        case "c97HWIba0":
        case "H8O08exRp":
        case "BW6MjIXI5":
        case "qOZ2uv34A":
        case "nzfOrsMPb":
        case "p5CEY349I":
            return [{
                hash: "1hxfkvx",
                mediaQuery: "(min-width: 1200px)"
            }, {
                hash: "1u5krlp",
                mediaQuery: "(min-width: 810px) and (max-width: 1199px)"
            }, {
                hash: "bmr20v",
                mediaQuery: "(max-width: 809px)"
            }];
        default:
            return
    }
}
async function Lt({
    routeId: r,
    pathVariables: t,
    localeId: i
}) {
    await Qe[r].page.preload();
    let a = ne(wr, {
            isWebsite: !0,
            routeId: r,
            pathVariables: t,
            routes: Qe,
            collectionUtils: {
                Qjft24UTf: async () => (await import("./QxAxCbUBrNmwtQCY1f1uTelhBn9hLLCMfwveHyLNKpw.RFSEIDOH.mjs"))?.utils,
                xDtiWCQBs: async () => (await import("./fcgyj1svugo5BE1huxhB4PjTnmiBYluTHFYb-FuMXfk.26IOUZXC.mjs"))?.utils
            },
            framerSiteId: "2d26a40d250325306c1192347de326a4231edcba1e5e636bab3a130c1a9574ed",
            notFoundPage: N(() => import("./uz7II65ne0_7pOPH80QMqN2N4LZ21ucAmR17mBpg1Qs.CUR2TRVU.mjs")),
            isReducedMotion: void 0,
            localeId: i,
            locales: Kr,
            preserveQueryParams: void 0,
            EditorBar: typeof C > "u" ? void 0 : N(async () => {
                let {
                    createEditorBar: p
                } = await import("https://edit.framer.com/init.mjs");
                return {
                    default: p({
                        dependencies: {
                            __version: 1,
                            framer: {
                                useCurrentRoute: nr,
                                useLocaleInfo: T,
                                useRouter: fe
                            },
                            react: {
                                createElement: ne,
                                memo: Ze,
                                useCallback: $e,
                                useEffect: er,
                                useRef: W,
                                useState: rr
                            },
                            "react-dom": {
                                createPortal: tr
                            }
                        }
                    })
                }
            }),
            LayoutTemplate: Vt
        }),
        d = ne(ur, {
            children: a,
            value: {
                codeBoundaries: !0,
                editorBarSubtle: !1,
                enableAsyncURLUpdates: !0,
                pauseOffscreen: !1,
                replaceNestedLinks: !0,
                showAdvancedAnalytics: !1,
                useGranularSuspense: !0,
                wrapUpdatesInTransitions: !0
            }
        }),
        w = ne(gr, {
            children: d
        });
    return ne(ir, {
        children: w,
        value: {
            global: {
                enter: {
                    mask: {
                        angle: 0,
                        type: "wipe",
                        width: "100%"
                    },
                    opacity: 1,
                    rotate: 0,
                    rotate3d: !1,
                    rotateX: 0,
                    rotateY: 0,
                    scale: 1,
                    transition: {
                        damping: 30,
                        delay: 0,
                        duration: .4,
                        ease: [.27, 0, .51, 1],
                        mass: 1,
                        stiffness: 400,
                        type: "tween"
                    },
                    x: "0px",
                    y: "0px"
                }
            },
            routes: {}
        }
    })
}
var Yr = typeof document < "u";
if (Yr) {
    C.__framer_importFromPackage = (t, i) => () => ne(mr, {
        error: 'Package component not supported: "' + i + '" in "' + t + '"'
    }), C.process = {
        ...C.process,
        env: {
            ...C.process ? C.process.env : void 0,
            NODE_ENV: "production"
        }
    }, C.__framer_events = C.__framer_events || [], dr();
    let r = document.getElementById("main");
    "framerHydrateV2" in r.dataset ? Ar(!0, r) : Ar(!1, r)
}

function St() {
    Yr && C.__framer_events.push(arguments)
}
async function Ar(r, t) {
    function i(a, d, w = !0) {
        if (a.caught || C.__framer_hadFatalError) return;
        let u = d?.componentStack;
        if (w) {
            if (console.warn(`Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches:
`, a, u), Math.random() > .01) return
        } else console.error("Fatal crash during hydration. If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/");
        St(w ? "published_site_load_recoverable_error" : "published_site_load_error", {
            message: String(a),
            componentStack: u,
            stack: u ? void 0 : a instanceof Error && typeof a.stack == "string" ? a.stack : null
        })
    }
    try {
        let a, d, w, u;
        if (r) {
            let v = JSON.parse(t.dataset.framerHydrateV2);
            a = v.routeId, d = v.localeId, w = v.pathVariables, u = v.breakpoints
        } else {
            let v = fr(Qe, decodeURIComponent(location.pathname), !0, Kr);
            a = v.routeId, d = v.localeId, w = v.pathVariables
        }
        let p = await Lt({
            routeId: a,
            localeId: d,
            pathVariables: w
        });
        r ? (Ur("framer-rewrite-breakpoints", () => {
            vr(u), C.__framer_onRewriteBreakpoints?.(u)
        }), Je(() => {
            sr(), lr(), or(), Vr(t, p, {
                onRecoverableError: i
            })
        })) : Nr(t, {
            onRecoverableError: i
        }).render(p)
    } catch (a) {
        throw i(a, void 0, !1), a
    }
}
export {
    Vn as getLayoutTemplateBreakpoints, Lt as getPageRoot
};
//# sourceMappingURL=script_main.ZLMD36PV.mjs.map