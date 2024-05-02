// app/providers.tsx
'use client'

import { store } from '@/lib/store'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ChakraProvider>{children}</ChakraProvider>
    </Provider>
  )
  
}