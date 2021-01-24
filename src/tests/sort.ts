const setHistoricalByDate = (data) => {
  data.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    if (dateA < dateB) {
      return -1;
    } else if (dateA > dateB) {
      return 1;
    } else {
      return 0;
    }
  });

  return data;
};

const setHistoricalByDescription = (data) => {
  data.sort((a, b) => {
    const descriptionA = a.description;
    const descriptionB = b.description;

    descriptionA.localeCompare(descriptionB);
  });

  return data;
};

const setHistoricalByOrder = (data) => {
  data.sort((a, b) => {
    const descriptionA = a.description;
    const descriptionB = b.description;

    if (descriptionA < descriptionB) {
      return -1;
    } else if (descriptionA > descriptionB) {
      return 1;
    } else {
      return 0;
    }
  });

  return data;
};

export { setHistoricalByDate, setHistoricalByDescription, setHistoricalByOrder };
