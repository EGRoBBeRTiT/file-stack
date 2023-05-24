export const getSizeLabel = (size: number) => {
    switch (true) {
        case size < 1000:
            return `${size.toFixed(1)} B`;
        case size < 1000 * 1000:
            return `${(size / 1000).toFixed(1)} KB`;
        case size < 1000 * 1000 * 1000:
            return `${(size / (1024 * 1024)).toFixed(1)} MB`;
        default:
            return `${size.toFixed(1)} B`;
    }
};

export const getDateLabel = (dateString: string) => {
    const date = new Date(Number.isNaN(Number(dateString)) ? dateString : Number(dateString));

    const minutes = `0${date.getMinutes()}`.slice(-2);
    const hours = `0${date.getHours()}`.slice(-2);
    const day = `0${date.getDay()}`.slice(-2);
    const month = `0${date.getMonth()}`.slice(-2);
    const year = date.getFullYear();

    return `${hours}:${minutes} ${day}.${month}.${year}`;
};
