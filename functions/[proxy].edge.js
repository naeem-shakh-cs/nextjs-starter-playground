export default function handler(request, context) {
    const parsedUrl = new URL(request.url);
    const route = parsedUrl.pathname;
    const rscQueryParamExists = !!parsedUrl.searchParams.get('rsc')
    const rscHeaderExists = request.headers.get('rsc')  === '1'

    console.log(request.url, rscQueryParamExists, rscHeaderExists)
    if (route === '/hi' && !rscQueryParamExists && rscHeaderExists) {
        const modifiedRequest = new Request(request);
        modifiedRequest.headers.delete('rsc');
        return fetch(modifiedRequest);
    }
    return fetch(request)
}
   