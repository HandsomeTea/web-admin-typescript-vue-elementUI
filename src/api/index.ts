import HTTP from './http';

export default new class API {
    constructor() {
        this._init();
    }

    _init() {

    }

    async test() {
        return await HTTP.get('/tests/test/api', { data: { data: '说什么' } });
    }
}
