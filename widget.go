// Package widget is the Widget BASE plugin for togo: The widget contract + registry. Concrete widgets ship as widget-* driver plugins that self-register; an app installs only the ones it wants.
//
// Driver plugins self-register a Descriptor via widget.Register in their init();
// an app installs a driver by blank-importing it. This base owns the registry and
// exposes it at GET /api/widgets.
package widget

import (
	"encoding/json"
	"net/http"
	"sort"
	"sync"

	"github.com/togo-framework/togo"
)

// Descriptor is one registered Widget item contributed by a driver.
type Descriptor struct {
	Key         string `json:"key"`
	Title       string `json:"title"`
	DefaultZone string `json:"defaultZone,omitempty"`
	Asset       string `json:"asset,omitempty"` // URL of the driver's built web asset
}

var (
	mu       sync.RWMutex
	registry = map[string]Descriptor{}
)

// Register installs a descriptor. Drivers call this from their init().
func Register(d Descriptor) {
	mu.Lock()
	defer mu.Unlock()
	if _, exists := registry[d.Key]; exists {
		return
	}
	registry[d.Key] = d
}

// All returns every registered descriptor, sorted by key.
func All() []Descriptor {
	mu.RLock()
	defer mu.RUnlock()
	out := make([]Descriptor, 0, len(registry))
	for _, d := range registry {
		out = append(out, d)
	}
	sort.Slice(out, func(i, j int) bool { return out[i].Key < out[j].Key })
	return out
}

func init() {
	togo.RegisterProviderFunc("widget", togo.PriorityService, func(k *togo.Kernel) error {
		k.Router.Get("/api/widgets", func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("Content-Type", "application/json")
			_ = json.NewEncoder(w).Encode(map[string]any{"widgets": All()})
		})
		return nil
	})
}
