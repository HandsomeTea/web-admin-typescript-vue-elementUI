export default (data: unknown): string =>
    toString
        .call(data)
        .replace(/object|\[|]|\s/g, '')
        .toLowerCase();
