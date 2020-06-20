import React, { ComponentType } from 'react'

import { App } from 'reapex'
import { connect } from 'react-redux'

export interface RegisteredWrapperProps {
  component?: ComponentType<any>
}

export type ChildrenFunction = (Connected: ComponentType<any>, props?: any) => any

export interface RegisteredBaseProps {
  name: string
  children?: ChildrenFunction
}

interface RegisteredProps extends RegisteredBaseProps {
  [key: string]: any
}

export const RegisteredWrapper: React.SFC<RegisteredWrapperProps> = ({ component, ...props }) => {
  if (component) {
    return React.createElement(component, props)
  }
  return null
}

const registryModule = (app: App, namespace: string = '@@registry') => {
  const registry = app.model(namespace, {
    mapping: {} as Record<string, ComponentType<any> | undefined>,
  })

  const [mutations] = registry.mutations({
    register: (name: string, comp: ComponentType<any>) => (s) => {
      const mapping = s.get('mapping')
      return s.set('mapping', { ...mapping, [name]: comp })
    },
  })

  const Registered: React.SFC<RegisteredProps> = ({ name, children, ...props }) => {
    const mapStateToProps = (state: any) => {
      const mapping = registry.state.get('mapping')(state)
      return {
        component: mapping[name],
      }
    }

    const Connected = connect(mapStateToProps)(RegisteredWrapper)

    if (typeof children === 'function') {
      return children(Connected, props)
    }
    return <Connected {...props} />
  }

  return {
    mutations: mutations,
    state: registry.state,
    Component: Registered,
    register: (name: string, comp: ComponentType<any>) => app.store.dispatch(mutations.register(name, comp)),
  }
}

export default registryModule
