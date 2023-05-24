class AppRoutes {
    root = () => '/';

    main = () => this.filesList();

    filesList = () => '/files-list';

    profile = () => `${this.auth()}/profile`;

    auth = () => '/auth';

    register = () => `${this.auth()}/register`;

    login = () => `${this.auth()}/login`;
}

export const appRoutes = new AppRoutes();
