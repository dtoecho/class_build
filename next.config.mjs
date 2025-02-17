/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "codecamp-deploy-project",

  //아래 주소들만 out 폴더에 만들어줘! (getServerSideProps 있는 페이지는 제외시키면 되겠지.)
  exportPathMap: () => {
    return {
      "/": { page: "/" },
      "/boards": { page: "/boards" },
      "/404": { page: "/404" },
    };
  },
};

export default nextConfig;
