import { deleteFile } from 'api/file/deleteFile';

import type { FileApi } from './file.routes';
import type { UploadFileProps } from './uploadFile';
import { uploadFile } from './uploadFile';
import type { DownloadFileProps } from './downloadFile';
import { downloadFile } from './downloadFile';
import { loadFilesList } from './loadFilesList';

class FileService implements FileApi {
    uploadFile = (data: UploadFileProps) => uploadFile(data);

    downloadFile = (data: DownloadFileProps) => downloadFile(data);

    loadFilesList = () => loadFilesList();

    deleteFile = (data: DownloadFileProps) => deleteFile(data);
}

export const fileService = new FileService();
