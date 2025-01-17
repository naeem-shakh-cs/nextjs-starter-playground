const RSC_REDIRECT_PATHS = [
    '/hi'
];
const RSC_HEADER = 'rsc';
const RSC_HEADER_VALUE = '1';
const RSC_QUERY_PARAM = 'rsc';

export default function handler(request, context) {
    const parsedUrl = new URL(request.url);
    const route = parsedUrl.pathname;
    const rscQueryParamExists = !!parsedUrl.searchParams.get(RSC_QUERY_PARAM);
    const rscHeaderExists = request.headers.get(RSC_HEADER) === RSC_HEADER_VALUE;
    const isRscRedirectPath = RSC_REDIRECT_PATHS.indexOf(route) > -1;

    if (isRscRedirectPath && !rscQueryParamExists && rscHeaderExists) {
        const modifiedRequest = new Request(request);
        modifiedRequest.headers.delete(RSC_HEADER);
        return fetch(modifiedRequest);
    }
    return fetch(request);
}
