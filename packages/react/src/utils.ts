export function loadStylesheet() {
  const styleSheetId = "__APUSICUI_ICON_STYLE__";
  const iconStyles = `
.apusic-icon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.apusic-icon > * {
  line-height: 1;
}

.apusic-icon svg {
  display: inline-block;
}

.apusic-icon::before {
  display: none;
}

.apusic-icon .apusic-icon-icon {
  display: block;
}

.apusic-icon[tabindex] {
  cursor: pointer;
}

.apusic-icon-spin::before,
.apusic-icon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;

  if (!document || document.getElementById(styleSheetId)) return;

  const styleSheet = document.createElement("style");
  styleSheet.setAttribute("id", styleSheetId);

  styleSheet.innerHTML = iconStyles;

  document.head.appendChild(styleSheet);
}
