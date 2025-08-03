import { useTheme } from '../context/ThemeContext';

export const useDarkMode = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return {
    isDark: darkMode,
    toggle: toggleDarkMode,

    bgClass: (lightClass, darkClass) => (darkMode ? darkClass : lightClass),
    textClass: (lightClass, darkClass) => (darkMode ? darkClass : lightClass),
    borderClass: (lightClass, darkClass) => (darkMode ? darkClass : lightClass),
  };
};
