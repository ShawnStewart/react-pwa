import Box from '@mui/material/Box';
import { Route, Routes } from 'react-router-dom';

import { routes } from '..';
import { getPageHeight } from './utils';

export function Pages() {
  return (
    <Box sx={{ height: (theme) => getPageHeight(theme) }}>
      <Routes>
        {Object.values(routes).map(({ path, component: Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
      </Routes>
    </Box>
  );
}
