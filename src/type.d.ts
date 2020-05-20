declare interface httpArgument {
    params?: object,
    data?: object,
    headers?: object
}

declare interface httpException {
    httpInfo: string,
    status: number,
    type?: string,
    info: string | object
}
