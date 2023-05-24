import type { AppFile } from 'types/Files.types';

export interface FileItemProps
    extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
    file: AppFile;
    className?: string;
    onDeleteClick?: (name: string) => void;
}
