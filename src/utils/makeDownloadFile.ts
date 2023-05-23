export const makeDownloadFile = (blob: Blob, fileName: string) => {
    const a = document.createElement('a');
    const url = window.URL || window.webkitURL;
    a.href = url.createObjectURL(blob);
    a.download = fileName;
    a.click();
    url.revokeObjectURL(a.href);
};
