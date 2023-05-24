export const getFileErrorName = (error?: string) => {
    switch (error) {
        case 'Request failed with status code 302':
            return 'Файл с таким именем уже есть';
        case 'Request failed with status code 303':
            return 'Такой файл уже есть';
        case 'Request failed with status code 403':
            return 'Вы не авторизованы';
        default:
            return 'Произошла непредвиденная ошибка :(';
    }
};
