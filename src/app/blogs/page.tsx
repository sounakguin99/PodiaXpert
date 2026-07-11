import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/sanity/client";
import { defineQuery, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const POSTS_QUERY = defineQuery(
  `*[_type == "blog" && defined(slug.current)] | order(date desc)`,
);

const options = { next: { revalidate: 30 } };

export const metadata: Metadata = {
  title: "Foot Care Blog – Tips, Insights & Podiatry News",
  description:
    "Read the latest foot care tips, podiatry insights, and expert articles from PodiaXpert. Learn about heel pain, plantar fasciitis, diabetic foot care, custom orthotics and more.",
  keywords: [
    "foot care blog",
    "podiatry tips",
    "heel pain articles",
    "plantar fasciitis guide",
    "diabetic foot care tips",
    "foot health Kolkata",
    "orthotics guide",
  ],
  alternates: {
    canonical: "https://www.podiaxpert.com/blogs",
  },
};

export default async function BlogsPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="min-h-screen flex flex-col font-sans">
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            PodiaXpert Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Insights, tips, and news about foot care and podiatry from our
            experts.
          </p>
        </div>
      </section>

      <div className="flex-grow bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const imageUrl = post.image
                ? urlFor(post.image).url()
                : "/Foot Assessment/foot scan.jpg";

              return (
                <Link
                  key={post.slug.current}
                  href={`/blogs/${post.slug.current}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition duration-300 border border-gray-100 group flex flex-col"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <img
                      src={imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {post.category || "Blog"}
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-sm text-gray-500 mb-2 font-medium">
                      {post.date} &bull; {post.author}
                    </p>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="text-red-600 font-bold text-sm flex items-center mt-auto">
                      Read Article{" "}
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">
                        &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
