import { Route, Routes } from 'react-router-dom';

import { Box } from '@/components/layout';

import { routes } from '..';

export function Pages() {
  return (
    <Box className="flex-grow bg-background py-4 text-foreground">
      <Routes>
        {Object.values(routes).map(({ path, component: Component }) => {
          return <Route element={<Component />} key={path} path={path} />;
        })}
      </Routes>
    </Box>
  );
}
