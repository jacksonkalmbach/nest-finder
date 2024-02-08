export function capitalizeEachWord(str: string) {
  return str.replace(/\b[a-z]/g, function (letter) {
    return letter.toUpperCase();
  });
}
