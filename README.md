### Reapex component registry module

```typescript
import { App } from 'reapex'
import registryModule from 'reapex-module-component-registry'

const app = new App()

// 1. register the module
const registry = app.use(registryModule, '@@registry')

// 2. register a component
const ComponentA: React.FC<{}> = () =>
  <div>
    This is ComponentA A
  </div>

registry.register('ComponentA', ComponentA)

// use the registered component
<registry.Component name="ComponentA" />
```
