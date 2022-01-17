module.exports = {
  reactStrictMode: true,
  env: {
    DATABASE_CONNECTION:
      "mongodb+srv://aryaDbUser:ldWg6zn5I1l2tQoo@cluster0.akvl4.mongodb.net/arya?retryWrites=true&w=majority",
    BASE_URL: "https://mgmchweb.vercel.app/",
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|mp4)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=9999999999, must-revalidate",
          },
        ],
      },
    ];
  },
};
