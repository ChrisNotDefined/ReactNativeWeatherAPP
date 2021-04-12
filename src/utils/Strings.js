export const capitalize = value => {
  if (typeof value === 'string')
    return value.charAt(0).toUpperCase() + value.slice(1);
  return '';
};

export const graduate = (value, unit) => {
  if (
    typeof value === 'string' ||
    (typeof value === 'number' && !isNaN(+value))
  )
    return `${value} ${unit}`;
  return value;
};
