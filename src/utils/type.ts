export default (data: unknown) => toString.call(data).replace(/object|\[|]|\s/g, '').toLowerCase();
