// app/providers.tsx
'use client'

import { store } from '@/lib/store'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { ApolloWrapper } from './apolloWrapper'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <ApolloWrapper>{children}</ApolloWrapper>  
      </ChakraProvider>
    </Provider>
  )
  
}