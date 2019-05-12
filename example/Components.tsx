import React from 'react'

// import { Registered } from '../../src'
import { registry } from './app'

const modalStyle: React.CSSProperties = {
  width: 200,
  position: 'absolute',
  top: '50%',
  left: '50%',
  padding: 20,
  border: '1px solid #ccc',
  display: 'flex',
  flexDirection: 'column',
  lineHeight: '70px',
  background: '#fff',
  transform: 'translateX(-50%) translateY(-50%)',
  boxShadow: '1px 1px 2px #ccc',
}

const ComponentA: React.FC<{}> = () =>
  <div className="modal" style={modalStyle}>
    This is ComponentA A
  </div>

registry.register('ComponentA', ComponentA)
