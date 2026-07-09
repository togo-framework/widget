# widget — docs

The widget contract + registry. Concrete widgets ship as widget-* driver plugins that self-register; an app installs only the ones it wants.

- **Source:** https://github.com/togo-framework/widget
- **Reference app:** https://fadymondy.com

## Install

```bash
togo install togo-framework/widget
```

The plugin self-registers on blank-import (no manual wiring). See the top-level
README for usage. This plugin was extracted from the fadymondy.com togo app as
part of turning that site into a reusable plugin suite.
