import { ThemeProvider } from '@mui/material/styles';
import theme from '@app/config/theme';
import AppRoutes from '@app/app-routes/AppRoutes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
