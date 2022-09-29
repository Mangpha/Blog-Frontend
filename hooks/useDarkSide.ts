import React from 'react';

export const useDarkSide = (): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [theme, setTheme] = React.useState<string>(localStorage.theme);
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};
