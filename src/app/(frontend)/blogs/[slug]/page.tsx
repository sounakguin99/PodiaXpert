import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import { defineQuery, type SanityDocument } from "next-sanity";
import { CustomPortableText } from "@/components/sanity/CustomPortableText";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const POST_QUERY = defineQuery(
  `*[_type == "blog" && slug.current == $slug][0]`,
);

const POSTS_QUERY = defineQuery(
  `*[_type == "blog" && defined(slug.current)]{ "slug": slug.current }`,
);

const options = { next: { revalidate: 30 } };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch<SanityDocument | null>(
    POST_QUERY,
    { slug },
    options,
  );
  if (!post) return {};

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: post.seo?.metaTags || [
      post.category?.toLowerCase() || "",
      "foot care",
      "podiatry Kolkata",
      "PodiaXpert blog",
    ],
    alternates: {
      canonical: `https://www.podiaxpert.com/blogs/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.podiaxpert.com/blogs/${slug}`,
      type: "article",
      images: post.image
        ? [{ url: urlFor(post.image).url(), alt: post.title }]
        : undefined,
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export async function generateStaticParams() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch<SanityDocument | null>(
    POST_QUERY,
    { slug },
    options,
  );

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col font-sans">
      <article className="flex-grow bg-white pt-20 pb-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <Link
            href="/blogs"
            className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition mb-8"
          >
            &larr; Back to all articles
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
                {post.category || "Blog"}
              </span>
              <span className="text-gray-500 text-sm font-medium">
                {post.date}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-gray-500 border border-gray-200">
                {post.author
                  ? post.author.charAt(4) || post.author.charAt(0)
                  : "P"}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{post.author}</p>
                <p className="text-xs text-gray-500">Podiatry Expert</p>
              </div>
            </div>
          </div>
        </div>

        {post.image && (
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={urlFor(post.image).url()}
                alt={post.title || "Blog cover image"}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-red max-w-none">
            {post.content && <CustomPortableText value={post.content} />}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="bg-slate-50 rounded-2xl p-8 text-center border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Need personalized care?
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Our experts are here to help you get back on your feet. Schedule
                a consultation today.
              </p>
              <Link
                href="/book-appointment"
                className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition shadow-md"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
