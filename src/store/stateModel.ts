export interface RootState {
    loginStatus: boolean;
    language: string;
    menuHidden: boolean;
}

export interface UserState {
    username: string;
}

export interface StoreAction {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...args: any[]): void;
}
