export const ConvertingLinks = string => {
  return string.trim().toLowerCase().split(' ').join('-');
};
