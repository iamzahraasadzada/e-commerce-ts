export function capitalizeFirstLetter(word: string | undefined) {
  if (word === undefined) return;
  else {
    if (word.split.length >= 2) {
      const arr: string[] = [];
      word.split(" ").map((word) => {
        const firstLetter = word.split("")[0]?.trim();

        arr.push(word.replace(firstLetter, firstLetter?.toUpperCase()));
      });

      return arr.join(" ");
    }
    const firstLetter = word.split("")[0]?.trim();
    return word.replace(firstLetter, firstLetter?.toUpperCase());
  }
}
