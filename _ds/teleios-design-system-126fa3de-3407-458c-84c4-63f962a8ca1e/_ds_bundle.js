/* @ds-bundle: {"format":4,"namespace":"TeleiosDesignSystem_126fa3","components":[{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"FaqItem","sourcePath":"components/content/FaqItem.jsx"},{"name":"Headline","sourcePath":"components/content/Headline.jsx"},{"name":"HeroBlock","sourcePath":"components/content/HeroBlock.jsx"},{"name":"LayerCard","sourcePath":"components/content/LayerCard.jsx"},{"name":"Marquee","sourcePath":"components/content/Marquee.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavLink","sourcePath":"components/navigation/NavLink.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"}],"sourceHashes":{"components/content/Card.jsx":"e590997561c4","components/content/FaqItem.jsx":"77f531b80ab2","components/content/Headline.jsx":"fff8a2b8c13e","components/content/HeroBlock.jsx":"5d1be3cd47d3","components/content/LayerCard.jsx":"752f1bf8448b","components/content/Marquee.jsx":"27f8916fae7e","components/content/Quote.jsx":"ed3aaad3605b","components/content/Stat.jsx":"95a1defb1de1","components/core/Badge.jsx":"791f028031c7","components/core/Button.jsx":"2ebb6f594c19","components/core/SectionLabel.jsx":"b78be23173a8","components/core/Wordmark.jsx":"9c31813ede1e","components/forms/Input.jsx":"1b869c11b0b9","components/forms/Select.jsx":"75999a4dba78","components/forms/Textarea.jsx":"a8a8fb6956a8","components/navigation/NavLink.jsx":"7d788efce73d","components/navigation/Navbar.jsx":"8fc7db149cec","ui_kits/site/CamadasScreen.jsx":"c39a997fed84","ui_kits/site/CaseScreen.jsx":"2e52076c4081","ui_kits/site/DiagnosticoScreen.jsx":"15c735986c94","ui_kits/site/Footer.jsx":"da5a0a02760a","ui_kits/site/HomeScreen.jsx":"69b8bd2f83b8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TeleiosDesignSystem_126fa3 = window.TeleiosDesignSystem_126fa3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  number,
  title,
  children,
  padding = "var(--pad-card)",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      border: "var(--border-width) solid var(--border-hairline)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-none)",
      padding,
      ...style
    }
  }, rest), number && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-label)",
      letterSpacing: "var(--track-label)",
      color: "var(--text-accent)",
      marginBottom: "var(--space-5)"
    }
  }, number), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 var(--space-3)",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "19px",
      letterSpacing: "-0.01em",
      color: "var(--text-strong)"
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-card-support)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)"
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/FaqItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FaqItem({
  question,
  children,
  defaultOpen = false,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderBottom: "var(--border-width) solid var(--border-hairline)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-6)",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "var(--space-6) 0",
      textAlign: "left",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-body-strong)",
      fontSize: "16px",
      color: "var(--text-strong)"
    }
  }, question, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "18px",
      color: "var(--accent)",
      transform: open ? "rotate(45deg)" : "rotate(0deg)",
      transition: "transform var(--duration-base) var(--ease-expo-out)"
    }
  }, "+")), open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 0 var(--space-6)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-faq)",
      lineHeight: "var(--leading-body-long)",
      color: "var(--text-body)",
      maxWidth: "var(--measure-body)"
    }
  }, children));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/content/Headline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LEVELS = {
  h1: {
    fontSize: "var(--size-h1)",
    letterSpacing: "var(--track-h1)"
  },
  h2: {
    fontSize: "var(--size-h2)",
    letterSpacing: "var(--track-h2)"
  },
  lead: {
    fontSize: "var(--size-lead)",
    letterSpacing: "0"
  }
};
function Headline({
  lines = [],
  level = "h1",
  as,
  align = "left",
  style,
  ...rest
}) {
  const l = LEVELS[level] || LEVELS.h1;
  const Tag = as || (level === "lead" ? "p" : level);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-display-light)",
      lineHeight: level === "lead" ? "var(--leading-lead)" : "var(--leading-display)",
      color: "var(--text-strong)",
      textAlign: align,
      textWrap: "pretty",
      maxWidth: "var(--measure-body)",
      ...l,
      ...style
    }
  }, rest), lines.map((line, i) => {
    const text = typeof line === "string" ? line : line.text;
    const bold = typeof line === "string" ? false : !!line.bold;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: "block",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontWeight: bold ? "var(--weight-display-bold)" : "var(--weight-display-light)"
      }
    }, text));
  }));
}
Object.assign(__ds_scope, { Headline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Headline.jsx", error: String((e && e.message) || e) }); }

// components/content/HeroBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function HeroBlock({
  children,
  tone = "dark",
  style,
  ...rest
}) {
  const dark = tone === "dark";
  return /*#__PURE__*/React.createElement("div", _extends({
    className: dark ? "teleios-dark" : undefined,
    style: {
      background: dark ? "var(--dark-bg)" : "var(--light-card)",
      border: dark ? "none" : "var(--border-width) solid var(--light-rule)",
      borderRadius: "var(--radius-hero)",
      padding: "var(--pad-block-hero)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { HeroBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/HeroBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/LayerCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LayerCard({
  label,
  index = 0,
  title,
  children,
  sticky = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: sticky ? "sticky" : "relative",
      top: sticky ? "calc(var(--space-16) + " + index + " * var(--sticky-step))" : undefined,
      background: "var(--surface-card)",
      border: "var(--border-width) solid var(--border-decorative)",
      borderRadius: "var(--radius-layer)",
      padding: "var(--pad-card-lg)",
      display: "grid",
      gap: "var(--space-5)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-accent)"
    }
  }, label || "Camada " + String(index + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-display-light)",
      fontSize: "clamp(22px,2.4vw,30px)",
      letterSpacing: "var(--track-h2)",
      color: "var(--text-strong)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)",
      maxWidth: "var(--measure-body)"
    }
  }, children));
}
Object.assign(__ds_scope, { LayerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/LayerCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Marquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Marquee({
  items = [],
  speed = 40,
  style,
  ...rest
}) {
  const run = items.length ? items : [];
  const loop = [...run, ...run];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      overflow: "hidden",
      borderTop: "var(--border-width) solid var(--border-hairline)",
      borderBottom: "var(--border-width) solid var(--border-hairline)",
      padding: "var(--space-5) 0",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, "@keyframes teleios-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-8)",
      width: "max-content",
      animation: "teleios-marquee " + speed + "s linear infinite"
    }
  }, loop.map((item, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-8)",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-display-light)",
      fontSize: "20px",
      letterSpacing: "-0.01em",
      color: "var(--text-strong)",
      whiteSpace: "nowrap"
    }
  }, item, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "\xB7")))));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Quote({
  children,
  cite,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("blockquote", _extends({
    style: {
      margin: 0,
      paddingLeft: "var(--accent-bar-inset)",
      borderLeft: "var(--accent-bar-width) solid var(--accent)",
      maxWidth: "var(--measure-quote)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-display-light)",
      fontSize: "var(--size-quote)",
      letterSpacing: "var(--track-h2)",
      lineHeight: 1.15,
      color: "var(--text-strong)",
      textWrap: "pretty"
    }
  }, children), cite && /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: "var(--space-6)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, cite));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stat({
  value,
  label,
  accent = true,
  prefix,
  suffix,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gap: "var(--space-3)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-stat)",
      fontSize: "var(--size-stat)",
      letterSpacing: "var(--track-stat)",
      lineHeight: 1,
      color: accent ? "var(--text-accent)" : "var(--text-strong)"
    }
  }, prefix, value, suffix), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-card-support)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)",
      maxWidth: "260px"
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  dot = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      background: "var(--badge-bg)",
      border: "1px solid var(--badge-border)",
      color: "var(--badge-text)",
      borderRadius: "var(--radius-pill)",
      padding: "7px 14px",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      lineHeight: 1,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: "var(--dot-size)",
      height: "var(--dot-size)",
      borderRadius: "var(--radius-pill)",
      background: "var(--accent)"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: "10px 16px",
    fontSize: "14px",
    radius: "var(--radius-sm)"
  },
  md: {
    padding: "14px 22px",
    fontSize: "15px",
    radius: "var(--radius-button)"
  },
  lg: {
    padding: "17px 28px",
    fontSize: "16px",
    radius: "var(--radius-button)"
  }
};
const VARIANTS = {
  primary: {
    background: "var(--accent)",
    color: "var(--accent-ink)",
    border: "1px solid transparent"
  },
  light: {
    background: "var(--light-card)",
    color: "var(--teleios-graphite)",
    border: "1px solid var(--light-rule)"
  },
  outline: {
    background: "transparent",
    color: "var(--text-strong)",
    border: "1px solid var(--dark-button-rule)"
  }
};
const HOVER = {
  primary: {
    background: "var(--accent-hover)",
    color: "var(--accent-ink)",
    borderColor: "transparent"
  },
  light: {
    background: "var(--accent)",
    color: "var(--accent-ink)",
    borderColor: "transparent"
  },
  outline: {
    background: "transparent",
    color: "var(--accent)",
    borderColor: "var(--accent)"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  pill = false,
  floating = false,
  disabled = false,
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const h = !disabled && hover ? HOVER[variant] || {} : {};
  const css = {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-2)",
    fontFamily: "var(--font-body)",
    fontWeight: "var(--weight-body-strong)",
    fontSize: s.fontSize,
    lineHeight: 1,
    padding: s.padding,
    borderRadius: pill ? "var(--radius-pill)" : s.radius,
    textDecoration: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    boxShadow: floating ? "var(--shadow-accent-float)" : "var(--shadow-none)",
    transition: "background var(--duration-fast) var(--ease-expo-out), color var(--duration-fast) var(--ease-expo-out), border-color var(--duration-fast) var(--ease-expo-out)",
    ...v,
    ...h,
    ...style
  };
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === "button" ? disabled : undefined,
    style: css,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionLabel({
  children,
  number,
  accent = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-3)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: accent ? "var(--text-accent)" : "var(--text-muted)",
      ...style
    }
  }, rest), number && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, number), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Wordmark({
  size = 20,
  color = "var(--text-strong)",
  as = "span",
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-display-bold)",
      textTransform: "uppercase",
      letterSpacing: "var(--track-signature)",
      fontSize: typeof size === "number" ? size + "px" : size,
      lineHeight: 1,
      color,
      ...style
    }
  }, rest), "Teleios");
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: "var(--weight-body) var(--size-table)/1.4 var(--font-body)",
      color: "var(--text-strong)",
      background: "var(--surface-card)",
      border: "var(--border-width) solid " + (focus ? "var(--accent)" : "var(--border-hairline)"),
      borderRadius: "var(--radius-button)",
      padding: "13px 16px",
      outline: "none",
      transition: "border-color var(--duration-fast) var(--ease-expo-out)"
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: "var(--text-body)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: "var(--weight-body) var(--size-table)/1.4 var(--font-body)",
      color: "var(--text-strong)",
      background: "var(--surface-card)",
      border: "var(--border-width) solid " + (focus ? "var(--accent)" : "var(--border-hairline)"),
      borderRadius: "var(--radius-button)",
      padding: "13px 16px",
      outline: "none",
      appearance: "none",
      transition: "border-color var(--duration-fast) var(--ease-expo-out)"
    }
  }, rest), options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const text = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  id,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: uid,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: "var(--weight-body) var(--size-table)/var(--leading-body) var(--font-body)",
      color: "var(--text-strong)",
      background: "var(--surface-card)",
      border: "var(--border-width) solid " + (focus ? "var(--accent)" : "var(--border-hairline)"),
      borderRadius: "var(--radius-button)",
      padding: "13px 16px",
      outline: "none",
      resize: "vertical",
      transition: "border-color var(--duration-fast) var(--ease-expo-out)"
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: "var(--text-body)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavLink({
  children,
  href,
  arrow = true,
  tone = "strong",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-body-strong)",
      fontSize: "15px",
      textDecoration: "none",
      color: hover ? "var(--text-accent)" : tone === "muted" ? "var(--text-body)" : "var(--text-strong)",
      transition: "color var(--duration-fast) var(--ease-expo-out)",
      ...style
    }
  }, rest), children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"));
}
Object.assign(__ds_scope, { NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Navbar({
  items = [],
  cta,
  activeHref,
  onNavigate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: "teleios-dark",
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "var(--nav-scrim)",
      backdropFilter: "blur(var(--nav-blur))",
      WebkitBackdropFilter: "blur(var(--nav-blur))",
      borderBottom: "var(--border-width) solid var(--dark-rule)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "14px var(--gutter)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 17,
    color: "var(--teleios-offwhite)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)"
    }
  }, items.map(item => {
    const active = item.href === activeHref;
    return /*#__PURE__*/React.createElement("a", {
      key: item.href,
      href: item.href,
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(item.href);
        }
      },
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "15px",
        textDecoration: "none",
        color: active ? "var(--accent)" : "var(--neutral-body-dark)"
      }
    }, item.label);
  }), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: cta.variant || "primary",
    size: "sm",
    pill: true,
    onClick: cta.onClick,
    href: cta.href
  }, cta.label))));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/CamadasScreen.jsx
try { (() => {
(function () {
  const LAYERS = [{
    title: "Camada de captação",
    body: "Onde o lead entra, por qual canal, com qual custo. Nada sai daqui sem registro."
  }, {
    title: "Camada de resposta",
    body: "O primeiro contato deixa de depender de plantão. O processo responde em minutos, sempre igual."
  }, {
    title: "Camada de acompanhamento",
    body: "O lead que não fechou não some. Ele volta para a fila com data e motivo."
  }, {
    title: "Camada de medição",
    body: "Número real por etapa: quanto entrou, quanto respondeu, quanto fechou, quanto custou."
  }];
  function CamadasScreen({
    onNavigate
  }) {
    const {
      LayerCard,
      SectionLabel,
      Headline,
      Button,
      Quote
    } = window.TeleiosDesignSystem_126fa3;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--light-bg)",
        padding: "var(--space-section) 0 var(--space-16)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "0 var(--gutter)",
        display: "grid",
        gap: "var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      number: "03"
    }, "Camadas"), /*#__PURE__*/React.createElement(Headline, {
      level: "h2",
      lines: ["A máquina entra por etapa.", {
        text: "Uma camada por vez.",
        bold: true
      }]
    }))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--light-bg)",
        paddingBottom: "var(--space-section)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "0 var(--gutter)",
        display: "grid",
        gap: "var(--space-5)"
      }
    }, LAYERS.map((l, i) => /*#__PURE__*/React.createElement(LayerCard, {
      key: l.title,
      index: i,
      sticky: true,
      title: l.title
    }, l.body)))), /*#__PURE__*/React.createElement("section", {
      className: "teleios-dark",
      style: {
        background: "var(--dark-bg)",
        padding: "var(--space-section) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "0 var(--gutter)",
        display: "grid",
        gap: "var(--space-12)",
        justifyItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Quote, {
      cite: "Teleios"
    }, "O que a gente instala n\xE3o depende de ningu\xE9m estar inspirado."), /*#__PURE__*/React.createElement(Button, {
      variant: "light",
      size: "lg",
      onClick: () => onNavigate("#diagnostico")
    }, "Quero o diagn\xF3stico"))));
  }
  Object.assign(window, {
    CamadasScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/CamadasScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/CaseScreen.jsx
try { (() => {
(function () {
  function CaseScreen({
    onNavigate
  }) {
    const {
      SectionLabel,
      Headline,
      Badge,
      Stat,
      Card,
      Quote,
      NavLink
    } = window.TeleiosDesignSystem_126fa3;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--light-bg)",
        padding: "var(--space-section) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "0 var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-8)",
        justifyItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      dot: true
    }, "Case real"), /*#__PURE__*/React.createElement(Headline, {
      level: "h2",
      lines: ["Quatro horas de espera", {
        text: "viraram nove minutos.",
        bold: true
      }]
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--font-body)",
        fontSize: "var(--size-body)",
        lineHeight: "var(--leading-body-long)",
        color: "var(--text-body)",
        maxWidth: "var(--measure-body)"
      }
    }, "Opera\xE7\xE3o de servi\xE7o com quatorze unidades. O lead entrava por an\xFAncio, ca\xEDa num n\xFAmero de WhatsApp e esperava algu\xE9m ter tempo. A primeira camada entrou em duas semanas.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "var(--space-12)",
        marginTop: "var(--space-20)"
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      value: "9 min",
      label: "Tempo de primeira resposta depois da camada de resposta."
    }), /*#__PURE__*/React.createElement(Stat, {
      value: "14",
      label: "Unidades rodando o mesmo processo.",
      accent: false
    }), /*#__PURE__*/React.createElement(Stat, {
      value: "2",
      suffix: " semanas",
      label: "Para a primeira camada estar de p\xE9.",
      accent: false
    })))), /*#__PURE__*/React.createElement("section", {
      className: "teleios-dark",
      style: {
        background: "var(--dark-bg)",
        padding: "var(--space-section) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "0 var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      number: "04"
    }, "O que foi instalado"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "var(--space-5)",
        marginTop: "var(--space-10)"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      number: "01",
      title: "Fila \xFAnica de leads"
    }, "Um lugar s\xF3 para tudo que entra, com dono e prazo por lead."), /*#__PURE__*/React.createElement(Card, {
      number: "02",
      title: "Resposta em minutos"
    }, "Primeiro contato padronizado, disparado sem depender de plant\xE3o."), /*#__PURE__*/React.createElement(Card, {
      number: "03",
      title: "Retorno agendado"
    }, "O lead que n\xE3o fechou volta para a fila com data e motivo."), /*#__PURE__*/React.createElement(Card, {
      number: "04",
      title: "Painel semanal"
    }, "Quatro n\xFAmeros na mesa toda segunda, sempre os mesmos.")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "var(--space-16)",
        display: "grid",
        gap: "var(--space-10)",
        justifyItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Quote, {
      cite: "Dono da opera\xE7\xE3o"
    }, "Eu parei de ser o gargalo da minha pr\xF3pria empresa."), /*#__PURE__*/React.createElement(NavLink, {
      href: "#diagnostico",
      onClick: e => {
        e.preventDefault();
        onNavigate("#diagnostico");
      }
    }, "Quero o mesmo diagn\xF3stico")))));
  }
  Object.assign(window, {
    CaseScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/CaseScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/DiagnosticoScreen.jsx
try { (() => {
(function () {
  function DiagnosticoScreen() {
    const {
      SectionLabel,
      Headline,
      Button,
      Input,
      Select,
      Textarea,
      FaqItem,
      HeroBlock,
      Badge
    } = window.TeleiosDesignSystem_126fa3;
    const [sent, setSent] = React.useState(false);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--light-bg)",
        padding: "var(--space-section) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "0 var(--gutter)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--space-20)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-8)",
        justifyItems: "start"
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      number: "05"
    }, "Diagn\xF3stico"), /*#__PURE__*/React.createElement(Headline, {
      level: "h2",
      lines: ["Eu vou te fazer perguntas", {
        text: "que ninguém te fez.",
        bold: true
      }]
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--font-body)",
        fontSize: "var(--size-body)",
        lineHeight: "var(--leading-body-long)",
        color: "var(--text-body)",
        maxWidth: "var(--measure-body)"
      }
    }, "Uma hora, eu e voc\xEA, sem apresenta\xE7\xE3o. Sa\xEDmos com o mapa de onde o dinheiro est\xE1 vazando e qual camada entra primeiro.")), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--light-card)",
        border: "1px solid var(--light-rule)",
        borderRadius: "var(--radius-card)",
        padding: "var(--pad-card-lg)"
      }
    }, sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-5)",
        justifyItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      dot: true
    }, "Recebido"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--font-body)",
        fontSize: "var(--size-body)",
        lineHeight: "var(--leading-body)",
        color: "var(--text-body)"
      }
    }, "Eu te chamo no WhatsApp hoje. Se a sua opera\xE7\xE3o responde em quatro horas, a minha n\xE3o vai.")) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Nome",
      placeholder: "Como te chamam"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "WhatsApp",
      placeholder: "(41) 90000-0000"
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Segmento",
      options: ["Clínica", "Oficina", "Imobiliária", "Academia", "Outro"]
    }), /*#__PURE__*/React.createElement(Textarea, {
      label: "O que sua opera\xE7\xE3o faz hoje",
      rows: 3,
      placeholder: "Entra lead, e depois?"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => setSent(true),
      style: {
        justifyContent: "center"
      }
    }, "Marcar o diagn\xF3stico"))))), /*#__PURE__*/React.createElement("section", {
      className: "teleios-dark",
      style: {
        background: "var(--dark-bg)",
        padding: "var(--space-section) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "0 var(--gutter)",
        display: "grid",
        gap: "var(--space-10)"
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      number: "06"
    }, "D\xFAvidas"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FaqItem, {
      question: "Quanto tempo leva para instalar?",
      defaultOpen: true
    }, "Duas semanas para a primeira camada. O resto entra por etapa, uma por vez."), /*#__PURE__*/React.createElement(FaqItem, {
      question: "Funciona na minha opera\xE7\xE3o?"
    }, "Se entra lead e sai atendimento, funciona. O diagn\xF3stico existe para dizer qual camada entra primeiro."), /*#__PURE__*/React.createElement(FaqItem, {
      question: "Preciso trocar de sistema?"
    }, "Na maioria dos casos, n\xE3o. A camada entra em cima do que voc\xEA j\xE1 usa."), /*#__PURE__*/React.createElement(FaqItem, {
      question: "Quem opera depois?"
    }, "Sua equipe. O processo \xE9 escrito, medido e treinado com ela.")))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--light-bg)",
        padding: "var(--space-section) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "0 var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement(HeroBlock, {
      style: {
        display: "grid",
        gap: "var(--space-8)",
        justifyItems: "start",
        padding: "56px 48px"
      }
    }, /*#__PURE__*/React.createElement(Headline, {
      level: "h2",
      lines: ["Você já sabe onde dói.", {
        text: "Falta o número.",
        bold: true
      }]
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "light",
      size: "lg"
    }, "Descobrir onde estou perdendo dinheiro")))));
  }
  Object.assign(window, {
    DiagnosticoScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/DiagnosticoScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Footer.jsx
try { (() => {
(function () {
  function Footer({
    onNavigate
  }) {
    const {
      Wordmark,
      NavLink
    } = window.TeleiosDesignSystem_126fa3;
    return /*#__PURE__*/React.createElement("footer", {
      className: "teleios-dark",
      style: {
        background: "var(--dark-bg)",
        borderTop: "1px solid var(--dark-rule)",
        padding: "var(--space-16) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "0 var(--gutter)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "var(--space-8)",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Wordmark, {
      size: 17,
      color: "var(--teleios-offwhite)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement(NavLink, {
      href: "#camadas",
      arrow: false,
      tone: "muted",
      onClick: e => {
        e.preventDefault();
        onNavigate("#camadas");
      }
    }, "Camadas"), /*#__PURE__*/React.createElement(NavLink, {
      href: "#case",
      arrow: false,
      tone: "muted",
      onClick: e => {
        e.preventDefault();
        onNavigate("#case");
      }
    }, "Case"), /*#__PURE__*/React.createElement(NavLink, {
      href: "#diagnostico",
      arrow: false,
      tone: "muted",
      onClick: e => {
        e.preventDefault();
        onNavigate("#diagnostico");
      }
    }, "Diagn\xF3stico")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--neutral-muted)"
      }
    }, "Curitiba \xB7 PR")));
  }
  Object.assign(window, {
    Footer
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/HomeScreen.jsx
try { (() => {
(function () {
  const NS = () => window.TeleiosDesignSystem_126fa3;
  function PhotoSlot({
    height = 320,
    note = "Foto real — retrato, luz dura e direcional, fundo escuro"
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height,
        borderRadius: "var(--radius-photo)",
        background: "var(--dark-card)",
        border: "1px solid var(--dark-card-rule)",
        display: "grid",
        placeItems: "center",
        padding: 24,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--neutral-muted)"
      }
    }, note));
  }
  function Section({
    children,
    dark = false,
    id,
    style
  }) {
    return /*#__PURE__*/React.createElement("section", {
      id: id,
      className: dark ? "teleios-dark" : undefined,
      style: {
        background: dark ? "var(--dark-bg)" : "var(--light-bg)",
        padding: "var(--space-section) 0",
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "0 var(--gutter)"
      }
    }, children));
  }
  function HomeScreen({
    onNavigate
  }) {
    const {
      Headline,
      Button,
      Badge,
      SectionLabel,
      Stat,
      Marquee,
      Quote,
      HeroBlock,
      Card,
      NavLink
    } = NS();
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--light-bg)",
        padding: "40px 0 var(--space-section)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "0 var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement(HeroBlock, {
      style: {
        display: "grid",
        gridTemplateColumns: "1.15fr 0.85fr",
        gap: "var(--space-12)",
        alignItems: "center",
        padding: "56px 48px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-8)",
        justifyItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      dot: true
    }, "Diagn\xF3stico aberto"), /*#__PURE__*/React.createElement(Headline, {
      level: "h1",
      lines: ["Você paga para trazer cliente", "e deixa ele esperando.", {
        text: "Sua concorrência não.",
        bold: true
      }]
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--font-body)",
        fontSize: "var(--size-body)",
        lineHeight: "var(--leading-body)",
        color: "var(--text-body)",
        maxWidth: "var(--measure-body)"
      }
    }, "Eu instalo o processo que responde no lugar do her\xF3i. Entra lead, sai atendimento, sem depender de quem estava de plant\xE3o."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-3)",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "light",
      size: "lg",
      onClick: () => onNavigate("#diagnostico")
    }, "Descobrir onde estou perdendo dinheiro"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "lg",
      onClick: () => onNavigate("#camadas")
    }, "Ver as camadas"))), /*#__PURE__*/React.createElement(PhotoSlot, {
      height: 380
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--light-bg)",
        paddingBottom: "var(--space-section)"
      }
    }, /*#__PURE__*/React.createElement(Marquee, {
      items: ["Clínica", "Oficina", "Imobiliária", "Academia", "Pet shop", "Escritório"],
      speed: 38
    })), /*#__PURE__*/React.createElement(Section, {
      id: "prova"
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      number: "01"
    }, "Prova"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "var(--space-12)",
        marginTop: "var(--space-10)"
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      value: "4h",
      label: "Tempo m\xE9dio de resposta antes do sistema."
    }), /*#__PURE__*/React.createElement(Stat, {
      value: "R$ 15",
      label: "Custo do click que ficou esperando.",
      accent: false
    }), /*#__PURE__*/React.createElement(Stat, {
      value: "1",
      suffix: " her\xF3i",
      label: "A opera\xE7\xE3o inteira dependia de uma pessoa.",
      accent: false
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "var(--space-20)"
      }
    }, /*#__PURE__*/React.createElement(Quote, {
      cite: "Dono de opera\xE7\xE3o, 14 lojas"
    }, "Her\xF3i cansa. Her\xF3i sai. E voc\xEA fica no preju\xEDzo."))), /*#__PURE__*/React.createElement(Section, {
      id: "problema",
      dark: true
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      number: "02"
    }, "O que est\xE1 acontecendo"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "var(--space-10)",
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      number: "01",
      title: "O lead morre na espera"
    }, "Voc\xEA pagou no click e ele esperou quatro horas por uma resposta."), /*#__PURE__*/React.createElement(Card, {
      number: "02",
      title: "O processo mora na cabe\xE7a de algu\xE9m"
    }, "Se essa pessoa falta, a opera\xE7\xE3o para junto com ela."), /*#__PURE__*/React.createElement(Card, {
      number: "03",
      title: "Ningu\xE9m mede nada"
    }, "Sem n\xFAmero real, cada decis\xE3o \xE9 palpite sobre o pr\xF3prio dinheiro.")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "var(--space-12)"
      }
    }, /*#__PURE__*/React.createElement(NavLink, {
      href: "#camadas",
      onClick: e => {
        e.preventDefault();
        onNavigate("#camadas");
      }
    }, "Ver como a m\xE1quina \xE9 montada"))));
  }
  Object.assign(window, {
    HomeScreen,
    Section,
    PhotoSlot
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.Headline = __ds_scope.Headline;

__ds_ns.HeroBlock = __ds_scope.HeroBlock;

__ds_ns.LayerCard = __ds_scope.LayerCard;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavLink = __ds_scope.NavLink;

__ds_ns.Navbar = __ds_scope.Navbar;

})();
