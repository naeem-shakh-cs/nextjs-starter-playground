/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
        return [
            {
                source: "/",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=0, s-maxage=600, stale-while-revalidate=10"
                    }
                ]
            }
        ];
    }
}

module.exports = nextConfig
