import React from 'react';

const blogPosts = [
  {
    date: '27',
    month: 'APRIL',
    title: 'CLARITAS EST ETIAM PROCESSUS DYNAMICUS.',
    image: 'https://storage.googleapis.com/a1aa/image/768ca61f-428f-47fb-748d-28c8181bfc78.jpg',
    alt: 'White modern lamp with a small white table attached, keys and a phone on the table, standing against a white wall with black floor',
    excerpt: 'Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum...'
  },
  {
    date: '27',
    month: 'APRIL',
    title: 'CLARITAS EST ETIAM PROCESSUS DYNAMICUS.',
    image: 'https://storage.googleapis.com/a1aa/image/41059b7f-3ed9-4276-8286-b40bf5f11b4a.jpg',
    alt: 'Modern white lamp with a curved arm, white chair, fireplace with glass protection, black and white interior',
    excerpt: 'Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum...'
  }
];

const BlogSection = () => {
  return (
    <section className="bg-white text-black max-w-7xl mx-auto px-6 py-16">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-2xl font-extrabold uppercase mb-2 font-['Roboto_Condensed']">
          FROM OUR BLOG
        </h2>
        <p className="italic text-gray-600">
          Claritas est etiam processus dynamicus, qui sequitur
        </p>
      </div>

      <div className="mt-16 flex flex-col sm:flex-row justify-center gap-20 max-w-7xl mx-auto">
        {blogPosts.map((post, index) => (
          <article
            key={index}
            className="flex flex-col sm:flex-row max-w-4xl items-center sm:items-start gap-6 sm:gap-12"
          >
            <img
              src={post.image}
              alt={post.alt}
              className="w-80 h-[400px] object-cover flex-shrink-0"
              width="320"
              height="400"
            />
            <div className="flex flex-col max-w-md">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-4xl font-extrabold leading-none">
                  {post.date}
                </h3>
                <span className="text-sky-500 font-semibold text-lg italic">
                  / {post.month}
                </span>
              </div>
              {/* Judul dengan efek hover */}
              <h4 className="text-black font-extrabold text-base uppercase max-w-[280px] leading-tight mb-2 hover:text-sky-400 cursor-pointer transition-colors duration-200">
                {post.title}
              </h4>
              <div className="w-14 h-1 bg-sky-400 mb-4" />
              <p className="italic text-gray-600 max-w-[280px] mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              <a
                href="#"
                className="font-extrabold text-black uppercase text-sm flex items-center gap-1 hover:underline"
              >
                READ MORE <span className="text-xs">»</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
