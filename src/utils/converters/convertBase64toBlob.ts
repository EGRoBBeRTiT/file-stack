export const convertBase64toBlob = (content: string) => {
    const contentType = 'application/octet-stream';
    const sliceSize = 512;
    const byteCharacters = window.atob(content); // method which converts base64 to binary
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, {
        type: contentType,
    });

    return blob;
};
