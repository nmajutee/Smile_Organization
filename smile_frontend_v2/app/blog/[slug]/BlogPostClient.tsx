'use client';

import Image from 'next/image';
import Link from 'next/link';
import { JsonLd, Breadcrumb, AuthorBox } from '@/components/seo/JsonLd';
import { SITE_CONFIG, generateArticleSchema } from '@/lib/seo-config';
import { BlogPost, getRelatedPosts } from '@/lib/blog-data';
import ReactMarkdown from 'react-markdown';

interface BlogPostClientProps {
  post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const relatedPosts = getRelatedPosts(post.slug);

  // Article schema for SEO
  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    url: `/blog/${post.slug}`,
    image: post.image,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: post.author,
    category: post.category,
  });

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.url },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_CONFIG.url}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_CONFIG.url}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />

      {/* Hero Section */}
      <div className="container-fluid page-header" style={{ marginBottom: '90px' }}>
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '400px' }}>
            <span className="badge bg-white text-primary mb-3">{post.category}</span>
            <h1 className="display-5 text-white text-center mb-3" style={{ maxWidth: '900px' }}>
              {post.title}
            </h1>
            <div className="d-flex align-items-center text-white mb-4">
              <span className="me-3"><i className="fa fa-user me-1"></i> {post.author}</span>
              <span className="me-3"><i className="fa fa-calendar me-1"></i> {new Date(post.datePublished).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span><i className="fa fa-clock me-1"></i> {post.readTime}</span>
            </div>
            <Breadcrumb
              items={[
                { name: 'Home', href: '/' },
                { name: 'Blog', href: '/blog' },
                { name: post.title.substring(0, 30) + '...', href: `/blog/${post.slug}` },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            {/* Main Content */}
            <div className="col-lg-8">
              {/* Featured Image */}
              <div className="position-relative mb-5" style={{ height: '400px' }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '10px' }}
                  priority
                />
              </div>

              {/* Article Body */}
              <article className="blog-content">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => <h2 className="mt-5 mb-3">{children}</h2>,
                    h3: ({ children }) => <h3 className="mt-4 mb-3">{children}</h3>,
                    h4: ({ children }) => <h4 className="mt-4 mb-2">{children}</h4>,
                    p: ({ children }) => <p className="mb-4">{children}</p>,
                    ul: ({ children }) => <ul className="mb-4">{children}</ul>,
                    ol: ({ children }) => <ol className="mb-4">{children}</ol>,
                    li: ({ children }) => <li className="mb-2">{children}</li>,
                    strong: ({ children }) => <strong className="text-primary">{children}</strong>,
                    blockquote: ({ children }) => (
                      <blockquote className="bg-light p-4 rounded border-start border-primary border-4 my-4">
                        {children}
                      </blockquote>
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </article>

              {/* Tags */}
              <div className="mt-5 pt-4 border-top">
                <h6 className="mb-3">Tags:</h6>
                <div className="d-flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag}`}
                      className="badge bg-light text-dark text-decoration-none"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Author Box */}
              <div className="mt-5">
                <AuthorBox
                  name={post.author}
                  role={post.authorRole}
                  description={
                    post.author === 'Boris Johnson'
                      ? 'Founder of Smile Organization with over 10 years of experience in humanitarian work across Africa.'
                      : 'The dedicated team behind Smile Organization, working to improve lives in Cameroon.'
                  }
                />
              </div>

              {/* Social Share */}
              <div className="mt-5 p-4 bg-light rounded">
                <h6 className="mb-3">Share this article:</h6>
                <div className="d-flex gap-2">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${SITE_CONFIG.url}/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${SITE_CONFIG.url}/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`${SITE_CONFIG.url}/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + SITE_CONFIG.url + '/blog/' + post.slug)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-success"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>

              {/* CTA Box */}
              <div className="mt-5 p-5 bg-primary rounded text-white text-center">
                <h4 className="mb-3">Ready to Make a Difference?</h4>
                <p className="mb-4">
                  Your donation helps children in Cameroon access education, food, clean water, and healthcare.
                </p>
                <Link href="/donation" className="btn btn-light">
                  Donate Now <i className="fa fa-heart ms-2"></i>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-white p-4 rounded shadow-sm mb-4">
                  <h5 className="mb-4">Related Articles</h5>
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="text-decoration-none"
                    >
                      <div className="d-flex mb-3 pb-3 border-bottom">
                        <div className="position-relative flex-shrink-0" style={{ width: '80px', height: '60px' }}>
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            style={{ objectFit: 'cover', borderRadius: '5px' }}
                          />
                        </div>
                        <div className="ms-3">
                          <h6 className="text-dark mb-1 small">{relatedPost.title.substring(0, 50)}...</h6>
                          <small className="text-muted">{relatedPost.readTime}</small>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* Newsletter */}
              <div className="bg-primary p-4 rounded shadow-sm mb-4 text-white">
                <h5 className="mb-3">Stay Updated</h5>
                <p className="small mb-3">
                  Subscribe to receive updates on our work and stories from the field.
                </p>
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Your email" />
                  <button className="btn btn-light">Subscribe</button>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white p-4 rounded shadow-sm mb-4">
                <h5 className="mb-4">Quick Links</h5>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <Link href="/donate-to-african-charity" className="text-decoration-none text-dark">
                      <i className="fa fa-heart text-primary me-2"></i> Donate to African Charity
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/help-children-cameroon" className="text-decoration-none text-dark">
                      <i className="fa fa-child text-primary me-2"></i> Help Children in Cameroon
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/volunteer-cameroon" className="text-decoration-none text-dark">
                      <i className="fa fa-hands-helping text-primary me-2"></i> Volunteer With Us
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/about" className="text-decoration-none text-dark">
                      <i className="fa fa-info-circle text-primary me-2"></i> About Our Work
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Donate CTA */}
              <div className="bg-light p-4 rounded shadow-sm text-center">
                <h5 className="mb-3">Support Our Mission</h5>
                <p className="text-muted small mb-3">
                  Every donation makes a difference in the lives of children in Cameroon.
                </p>
                <Link href="/donation" className="btn btn-primary w-100">
                  Donate Now <i className="fa fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More Articles */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-light text-center text-primary px-3">Keep Reading</p>
            <h2 className="display-6">More From Our Blog</h2>
          </div>
          <div className="row g-4">
            {relatedPosts.length > 0 ? (
              relatedPosts.map((relatedPost) => (
                <div key={relatedPost.slug} className="col-md-4">
                  <Link href={`/blog/${relatedPost.slug}`} className="text-decoration-none">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="position-relative" style={{ height: '180px' }}>
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="card-img-top"
                        />
                      </div>
                      <div className="card-body">
                        <span className="badge bg-light text-primary mb-2">{relatedPost.category}</span>
                        <h6 className="card-title text-dark">{relatedPost.title}</h6>
                        <p className="card-text text-muted small">{relatedPost.excerpt.substring(0, 80)}...</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="text-center">
                <Link href="/blog" className="btn btn-primary">
                  View All Articles <i className="fa fa-arrow-right ms-2"></i>
                </Link>
              </div>
            )}
          </div>
          <div className="text-center mt-4">
            <Link href="/blog" className="btn btn-outline-primary">
              View All Articles <i className="fa fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .blog-content h2 {
          color: var(--bs-primary);
          font-size: 1.75rem;
        }
        .blog-content h3 {
          color: #333;
          font-size: 1.5rem;
        }
        .blog-content p {
          line-height: 1.8;
          color: #555;
        }
        .blog-content ul, .blog-content ol {
          padding-left: 1.5rem;
        }
        .blog-content li {
          line-height: 1.8;
          color: #555;
        }
      `}</style>
    </>
  );
}
