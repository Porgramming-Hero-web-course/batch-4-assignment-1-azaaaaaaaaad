{
  // poblem 3
  const countWordOccurrences = (sentence: string, word: string): number => {
    const senteceLower = sentence.toLowerCase();
    const wordLower = word.toLowerCase();

    const words = senteceLower.split(/\s+/);
    return words.filter((word) => word === wordLower).length;
  };
//   console.log(countWordOccurrences("I love typescript", "typescript"));
//   console.log(countWordOccurrences("typescript is great, I love typescript", "typescript"));
}
