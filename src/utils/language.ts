export const getCountryTranslate = (country: string): string => {
  switch (country.toLowerCase()) {
  case 'spain':
    return 'Испания';
  case 'england':
    return 'Англия';
  case 'france':
    return 'Франция';
  case 'germany':
    return 'Германия';
  case 'italy':
      return 'Италия';
  default:
    return '';
  }
};
