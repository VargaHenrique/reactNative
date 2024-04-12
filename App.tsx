import * as React from 'react';
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config" ;
import Home from './src/screens/Home'
import { TamaguiProvider } from 'tamagui'

import { tamaguiConfig } from './tamagui.config'





export default function App() {
  return (

      <TamaguiProvider config={tamaguiConfig}>
    <Home />
    </TamaguiProvider>
   
  );
}





