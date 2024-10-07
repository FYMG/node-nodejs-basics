const parseArgs = () => {
  const result = process.argv
    .slice(2)
    .reduce((acc, curr, index, array) => {
      if (index % 2 === 0) {
        acc.push(`${curr.slice(2)} is ${array[index + 1]}`);
      }

      return acc;
    }, [])
    .join(', ');

  console.log(result);
};

parseArgs();
