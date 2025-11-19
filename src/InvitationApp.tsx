import React from 'react'
import { AppRouter } from './router/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store'

export const InvitationApp: React.FC = () => {  
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
