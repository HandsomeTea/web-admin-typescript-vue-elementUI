import HTTP from './http';

class _Base {
    public errorHandle(error: httpException): Promise<apiResult> {
        return Promise.resolve({ error });
    }

    public successHandle(data: unknown): Promise<apiResult> {
        return Promise.resolve({ data });
    }
}

class Users extends _Base {
    constructor() {
        super();
    }

    public async test(body?: Record<string, unknown>): Promise<apiResult> {
        return HTTP.get('/tests/test/api', { data: body })
            .then(r => this.successHandle(r))
            .catch(e => this.errorHandle(e));
    }
}

export default {
    User: new Users()
};
