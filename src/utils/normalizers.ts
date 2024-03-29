export const normalizeName = (input: string): string => {
  let normalized = input.replace(/[^a-zA-Z]/g, '');

  normalized = normalized
    .toLowerCase()
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());

  return normalized;
};
