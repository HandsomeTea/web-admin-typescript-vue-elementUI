declare interface httpArgument {
    params?: Record<string, unknown>;
    data?: Record<string, unknown>;
    headers?: Record<string, unknown>;
}

declare interface exceptionError {
    info: string;
    [key: string]: unknown;
}

declare interface httpException {
    httpInfo: string;
    status: number;
    type?: string;
    error: exceptionError;
}

declare interface alertOption {
    confirmButtonText?: string;
    type?: 'success' | 'info' | 'warning' | 'error';
}

declare interface confirmOption {
    confirmButtonText?: string;
    cancelButtonText?: string;
    type?: 'success' | 'info' | 'warning' | 'error';
}

declare interface promptOption {
    confirmButtonText?: string;
    cancelButtonText?: string;
    inputPlaceholder?: string;
    inputType?: 'text' | 'textArea' | 'password' | 'number';
    inputInitValue?: string;
    inputPattern?: RegExp;
    inputValidator?: (value: string) => boolean | string;
    inputErrorMessage?: string;
}

declare interface loadingOption {
    text?: string;
    target?: string;
}

declare interface noticeOption {
    type?: 'success' | 'info' | 'warning' | 'error';
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    onClose?: () => void;
    onClick?: () => void;
}

declare interface apiResult {
    data?: unknown;
    error?: httpException;
}

declare interface ElLoadingComponent {
    close(): void;
}

declare interface ElNotificationComponent {
    close(): void;
}
