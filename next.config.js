// next.config.js
const nextConfig = {
    async headers() {
      return [
        {
          source: "/",
          headers: [
            {
                key: "cache-control",
                value: "max-age=0, s-maxage=86400, stale-while-revalidate",
          // The browser should validate the response with CDN, but the CDN can serve cached responses for 86400 seconds(24 hours), after which stale response will be returned while also triggering a revalidation in the background.
            },
          ],
        },{
            source: "/hi",
            headers: [
              {
                  key: "cache-control",
                  value: "max-age=0, s-maxage=600, stale-while-revalidate",
            // The browser should validate the response with CDN, but the CDN can serve cached responses for 86400 seconds(24 hours), after which stale response will be returned while also triggering a revalidation in the background.
              },
            ],
          },
      ];
    },
  };
  module.exports = nextConfig;