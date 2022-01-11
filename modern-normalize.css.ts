import { globalStyle as gs } from "@vanilla-extract/css";

gs("*, ::before, ::after", { boxSizing: "border-box" });

gs("html", { tabSize: 4 });

gs("html", { lineHeight: 1.15, WebkitTextSizeAdjust: "100%" });

gs("body", { margin: 0 });

gs("body", {
  fontFamily:
    'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
});

gs("hr", { height: 0, color: "inherit" });

gs("abbr[title]", { textDecoration: "underline dotted" });

gs("b, strong", { fontWeight: "bolder" });

gs("code, kbd, samp, pre", {
  fontFamily:
    'ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
  fontSize: "1em",
});

gs("small", { fontSize: "80%" });

gs("sub, sup", {
  fontSize: "75%",
  lineHeight: 0,
  position: "relative",
  verticalAlign: "baseline",
});

gs("sub", { bottom: "-0.25em" });

gs("sup", { top: "-0.5em" });

gs("table", { textIndent: 0, borderColor: "inherit" });

gs("button, input, optgroup, select, textarea", {
  fontFamily: "inherit",
  fontSize: "100%",
  lineHeight: 1.15,
  margin: 0,
});

gs("button, select", { textTransform: "none" });

gs(`button, [type="button"], [type="reset"], [type="submit"]`, {
  WebkitAppearance: "button",
});

gs("::-moz-focus-inner", { borderStyle: "none", padding: 0 });

gs(":-moz-focusring", { outline: "1px dotted ButtonText" });

gs(":-moz-ui-invalid", { boxShadow: "none" });

gs("legend", { padding: 0 });

gs("progress", { verticalAlign: "baseline" });

gs("::-webkit-inner-spin-button, ::-webkit-outer-spin-button", {
  height: "auto",
});

gs('[type="search"]', { WebkitAppearance: "textfield", outlineOffset: "-2px" });

gs("::-webkit-search-decoration", { WebkitAppearance: "none" });

gs("::-webkit-file-upload-button", {
  WebkitAppearance: "button",
  font: "inherit",
});

gs("summary", { display: "list-item" });
