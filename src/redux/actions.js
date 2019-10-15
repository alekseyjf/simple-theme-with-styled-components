export const CHOISE_THEME = 'CHOISE_THEME';

export const choiseTheme = (theme) => {
  // console.log('theme', theme);
  return {
    type: CHOISE_THEME,
    theme
  }
}