export const getFileErrorName = (error?: string) => {
    switch (error) {
        case 'Request failed with status code 302':
            return 'Такая версия файла уже загружена';
        case 'Request failed with status code 303':
            return 'Такой файл уже есть';
        case 'Request failed with status code 403':
            return 'Вы не авторизованы';
        case 'Request failed with status code 409':
            return 'Файл устаревший: скачайте заново, отредактируйте и загрузите снова';
        default:
            return 'Произошла непредвиденная ошибка :(';
    }
};
