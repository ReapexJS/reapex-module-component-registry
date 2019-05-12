import { App } from 'reapex'
import registryPlugin from '../src'

const app = new App({ mode: 'development' })

export const registry = app.plugin(registryPlugin)

export default app
