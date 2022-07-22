import { ThemeProvider } from 'styled-components';
import { Button } from './components/Button';
import { defaultTheme } from './styles/themes';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button colorVariant='default' />
      <Button colorVariant='primary' />
      <Button colorVariant='secondary' />
      <Button />
    </ThemeProvider>
  );
}
