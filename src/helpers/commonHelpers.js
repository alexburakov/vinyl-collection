export function filterObjectsByValue(objects, searchString) {
  return objects.filter((obj) =>
    Object.values(obj).some((value) => {
      if (typeof value === 'number') {
        return value === parseInt(searchString);
      } else if (typeof value === 'string') {
        return value.toLowerCase().includes(searchString.toLowerCase());
      }
      return false;
    })
  );
}
