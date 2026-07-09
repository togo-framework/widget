<!-- togo-header -->
<div align="center">
  <img src=".github/assets/togo-mark.svg" alt="togo" height="64" />
  <h1>togo-framework/widget</h1>
  <p>
    <a href="https://to-go.dev/marketplace"><img src="https://img.shields.io/badge/marketplace-to--go.dev-1FC7DC" alt="marketplace" /></a>
    <a href="https://pkg.go.dev/github.com/togo-framework/widget"><img src="https://pkg.go.dev/badge/github.com/togo-framework/widget.svg" alt="pkg.go.dev" /></a>
    <img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT" />
  </p>
  <p><strong>A <a href="https://to-go.dev">togo</a> plugin — extracted from <a href="https://fadymondy.com">fadymondy.com</a>.</strong></p>
</div>

## Install

```bash
togo install togo-framework/widget
```

<!-- /togo-header -->

# widget

The widget contract + registry. Concrete widgets ship as widget-* driver plugins that self-register; an app installs only the ones it wants.



## Frontend

This package's UI lives in [`web/`](web): the widget **registry + `WidgetCard` contract** (`@togo-framework/widget`). Concrete widgets (the `widget-*` drivers) register into it and render inside its card shell. The Go module embeds `web/` via `go:embed` (`WebAssets`).

MIT

<!-- togo-sponsors -->
---

<div align="center">
  <h3>Premium sponsors</h3>
  <p>
    <a href="https://id8media.com"><strong>ID8 Media</strong></a> &nbsp;·&nbsp;
    <a href="https://one-studio.co"><strong>One Studio</strong></a>
  </p>
  <p><sub>Support this work — <a href="https://github.com/sponsors/fadymondy">become a sponsor</a>.</sub></p>
</div>
<!-- /togo-sponsors -->
