import type { ComponentType } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';

import { TooltipProvider } from '@/components/ui/tooltip';
import { CustomThemeProvider } from '@/theme/Provider';

const container = document.getElementById('root')!;
const root = createRoot(container);

export default function render(App: ComponentType) {
  root.render(
    <StrictMode>
      <RecoilRoot>
        <HelmetProvider>
          <CustomThemeProvider>
            <TooltipProvider>
              <App />
            </TooltipProvider>
          </CustomThemeProvider>
        </HelmetProvider>
      </RecoilRoot>
    </StrictMode>,
  );
}
