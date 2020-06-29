export interface RootState {
    loginStatus: boolean;
    language: string;
    menuHidden: boolean;
}

export interface UserState {
    username: string;
}

export interface toogleSideAction {
    (): never;
}

export interface setLanguageAction {
    (language: 'zh' | 'en'): never;
}
