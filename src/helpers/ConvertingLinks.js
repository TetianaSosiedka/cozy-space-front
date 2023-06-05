export const ConvertingLinks = string => {
  return String(string).trim().toLowerCase().split(' ').join('-');
};
