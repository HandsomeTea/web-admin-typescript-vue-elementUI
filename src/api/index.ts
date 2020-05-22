import HTTP from './http';

export default new class API {
    constructor() {
        this._init();
    }

    _init() {

    }

    async test(body?: object) {
        return await HTTP.get('/tests/test/api', { data: body });
    }
}
