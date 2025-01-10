/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
        return [
            {
                source: "/*",
                headers: [
                    {
                        key: "cache-control",
                        value: "max-age=0, s-maxage=86400, stale-while-revalidate"
                    }
                ]
            }
        ];
    }
}

module.exports = nextConfig
