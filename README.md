### Reapex modal plugin

```typescript
import { App } from 'reapex'
import registryPlugin from 'reapex-plugin-component-registry'

const app = new App()

// 1. register the plugin
const registry = app.plugin(registryPlugin, '@@registry')

// 2. register a component
const ComponentA: React.FC<{}> = () =>
  <div>
    This is ComponentA A
  </div>

registry.register('ComponentA', ComponentA)

// use the registered component
<registry.Component name="ComponentA" />
```
