import { PortableText, PortableTextComponents } from "next-sanity";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export const customComponents: PortableTextComponents = {
  block: {
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mb-6 leading-relaxed text-gray-700">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-6 mb-6 list-disc text-gray-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="ml-6 mb-6 list-decimal text-gray-700">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-8 w-full flex justify-center bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 p-2">
          <img
            src={urlFor(value).url()}
            alt={value.alt || "Content image"}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      );
    },
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel} className="text-red-600 hover:text-red-700 underline">
          {children}
        </a>
      );
    },
  },
};

export function CustomPortableText({ value }: { value: any }) {
  if (!value) return null;
  return <PortableText value={value} components={customComponents} />;
}
