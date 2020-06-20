import { App } from 'reapex'
import registryModule from '../src'

const app = new App()

export const registry = app.use(registryModule)

export default app
