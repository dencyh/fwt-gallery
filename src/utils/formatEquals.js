export function formatEquals(str) {
  if (str.length > 4) {
    return str[0] !== "-" ? "9999" : "-9999";
  } else if (str.length > 0) {
    return (
      Array(4 - str.length)
        .fill(0)
        .join("") + str
    );
  }
  return str;
}
