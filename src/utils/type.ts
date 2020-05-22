export default (data: any) => toString.call(data).replace(/object|\[|]|\s/g, '').toLowerCase();
