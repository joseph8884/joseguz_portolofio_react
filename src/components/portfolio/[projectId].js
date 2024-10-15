import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
// projects
import { ShowProject } from "../../Projects";

const ProjectDetails = () => {
  const router = useRouter();
  const projectId = router.query.projectId;

  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/logo-icon.png" />
        <meta name="description" content="Meraj Mazidi Portfolio Page" />
        <meta name="keywords" content="Meraj Mazidi Portfolio" />
        <meta name="author" content="Meraj Mazidi" />
      </Head>

      <NextSeo
        title={projectId}
        description={`Meraj Mazidi Portfolio Page | ${projectId} | Projects`}
        canonical={`https://meraj.vercel.app/${projectId}`}
        openGraph={{
          url: `https://meraj.vercel.app/${projectId}`,
          title: "Meraj Mazidi",
          description: "Meraj Mazidi Portfolio Page | Projects",
          siteName: "Meraj Mazidi",
          type: "website",
          locale: "en_US",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <section className="w-screen lg:pl-32 relative mb-10 xl:container xl:mx-auto">
        <div className="w-full">
          <img
            src={"/images/vectors/ellipse.svg"}
            className="absolute right-0 top-1 blur-sm"
            alt="dsad"
          />
          <img
            src={"/images/vectors/triangle.svg"}
            className="absolute right-2 md:right-1/2 top-[5%] md:top-0 animate-spin"
            width={100}
            alt="dasd"
          />

          <ShowProject id={projectId} />
        </div>
      </section>
    </Fragment>
  );
};

export default ProjectDetails;
