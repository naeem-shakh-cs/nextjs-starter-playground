export default function handler(request, context) {
    const parsedUrl = new URL(request.url);
    const route = parsedUrl.pathname;
    if (route === '/hi' && request.headers.get('rsc')==='1') {
        const modifiedRequest = new Request(request);
        modifiedRequest.headers.delete('rsc');
    }
    return fetch(request)
}
   