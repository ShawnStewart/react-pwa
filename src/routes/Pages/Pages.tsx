import { Route, Routes } from 'react-router-dom';

import { Box } from '@/components/layout';

import { routes } from '..';

export function Pages() {
  return (
    <Box className="flex-grow my-4">
      <Routes>
        {Object.values(routes).map(({ path, component: Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
      </Routes>
    </Box>
  );
}
