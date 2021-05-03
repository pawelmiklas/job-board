const unCamelCase = (str: string) => {
  const removedCamelCase = str
    .replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2")
    .toLowerCase();

  return removedCamelCase.charAt(0).toUpperCase() + removedCamelCase.slice(1);
};

export default unCamelCase;
