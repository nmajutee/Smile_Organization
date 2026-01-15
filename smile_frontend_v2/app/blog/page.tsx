'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Breadcrumb, JsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/seo-config';
import { blogPosts, blogCategories, getFeaturedPosts } from '@/lib/blog-data';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const featuredPosts = getFeaturedPosts();

  // Filter posts based on category and search
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Blog page schema
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Smile Organization Blog',
    description: 'News, stories, and insights about our work helping children in Cameroon',
    url: `${SITE_CONFIG.url}/blog`,
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}${SITE_CONFIG.images.logo}`,
      },
    },
    blogPost: blogPosts.slice(0, 10).map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `${SITE_CONFIG.url}/blog/${post.slug}`,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      author: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
      },
    })),
  };

  return (
    <>
      <JsonLd data={blogSchema} />

      {/* Hero Section */}
      <div className="container-fluid page-header" style={{ marginBottom: '90px' }}>
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '400px' }}>
            <h1 className="display-4 text-white text-uppercase mb-3">Our Blog</h1>
            <p className="text-white fs-5 text-center mb-4" style={{ maxWidth: '800px' }}>
              Stories of impact, news from the field, and insights about the causes we serve.
              Learn how your support is changing lives in Cameroon.
            </p>
            <Breadcrumb
              items={[
                { name: 'Home', href: '/' },
                { name: 'Blog', href: '/blog' },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center mb-5">
              <p className="section-title bg-white text-center text-primary px-3">Featured</p>
              <h2 className="display-6">Top Stories</h2>
            </div>
            <div className="row g-4">
              {featuredPosts.slice(0, 3).map((post) => (
                <div key={post.slug} className="col-md-4">
                  <Link href={`/blog/${post.slug}`} className="text-decoration-none">
                    <div className="card h-100 border-0 shadow-sm hover-shadow">
                      <div className="position-relative" style={{ height: '200px' }}>
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="card-img-top"
                        />
                        <span className="badge bg-primary position-absolute top-0 end-0 m-3">
                          Featured
                        </span>
                      </div>
                      <div className="card-body">
                        <small className="text-muted">{post.category} • {post.readTime}</small>
                        <h5 className="card-title text-dark mt-2">{post.title}</h5>
                        <p className="card-text text-muted">{post.excerpt.substring(0, 120)}...</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Blog Posts with Sidebar */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="row g-5">
            {/* Main Content */}
            <div className="col-lg-8">
              <div className="mb-4">
                <h2 className="mb-4">All Articles</h2>

                {/* Search Bar */}
                <div className="input-group mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="btn btn-primary">
                    <i className="fa fa-search"></i>
                  </button>
                </div>

                {/* Category Pills (Mobile) */}
                <div className="d-lg-none mb-4">
                  <div className="d-flex flex-wrap gap-2">
                    <button
                      className={`btn btn-sm ${selectedCategory === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setSelectedCategory('all')}
                    >
                      All
                    </button>
                    {blogCategories.map((category) => (
                      <button
                        key={category.slug}
                        className={`btn btn-sm ${selectedCategory === category.name ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setSelectedCategory(category.name)}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="row g-4">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <div key={post.slug} className="col-md-6">
                      <Link href={`/blog/${post.slug}`} className="text-decoration-none">
                        <div className="card h-100 border-0 shadow-sm">
                          <div className="position-relative" style={{ height: '180px' }}>
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              style={{ objectFit: 'cover' }}
                              className="card-img-top"
                            />
                          </div>
                          <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <span className="badge bg-light text-primary">{post.category}</span>
                              <small className="text-muted">{post.readTime}</small>
                            </div>
                            <h6 className="card-title text-dark">{post.title}</h6>
                            <p className="card-text text-muted small">{post.excerpt.substring(0, 100)}...</p>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                              <small className="text-muted">
                                {new Date(post.datePublished).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric',
                                })}
                              </small>
                              <span className="text-primary small">Read More →</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="col-12 text-center py-5">
                    <i className="fa fa-search fa-3x text-muted mb-3"></i>
                    <h5>No articles found</h5>
                    <p className="text-muted">Try adjusting your search or filter criteria.</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                    >
                      Clear Filters
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              {/* Categories */}
              <div className="bg-white p-4 rounded shadow-sm mb-4 d-none d-lg-block">
                <h5 className="mb-4">Categories</h5>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <button
                      className={`btn btn-link text-decoration-none p-0 ${selectedCategory === 'all' ? 'text-primary fw-bold' : 'text-dark'}`}
                      onClick={() => setSelectedCategory('all')}
                    >
                      All Articles <span className="text-muted">({blogPosts.length})</span>
                    </button>
                  </li>
                  {blogCategories.map((category) => (
                    <li key={category.slug} className="mb-2">
                      <button
                        className={`btn btn-link text-decoration-none p-0 ${selectedCategory === category.name ? 'text-primary fw-bold' : 'text-dark'}`}
                        onClick={() => setSelectedCategory(category.name)}
                      >
                        {category.name} <span className="text-muted">({category.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="bg-white p-4 rounded shadow-sm mb-4">
                <h5 className="mb-4">Popular Tags</h5>
                <div className="d-flex flex-wrap gap-2">
                  {['hunger', 'education', 'water', 'children', 'cameroon', 'africa', 'charity', 'volunteer'].map((tag) => (
                    <button
                      key={tag}
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => setSearchQuery(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-primary p-4 rounded shadow-sm mb-4 text-white">
                <h5 className="mb-3">Stay Updated</h5>
                <p className="small mb-3">
                  Subscribe to receive updates on our work, stories from the field, and ways to help.
                </p>
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Your email" />
                  <button className="btn btn-light">Subscribe</button>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-white p-4 rounded shadow-sm text-center">
                <h5 className="mb-3">Make a Difference</h5>
                <p className="text-muted small mb-3">
                  Your donation helps children in Cameroon access education, food, water, and healthcare.
                </p>
                <Link href="/donation" className="btn btn-primary w-100">
                  Donate Now <i className="fa fa-heart ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="container-xxl py-5 bg-primary">
        <div className="container text-center">
          <h2 className="display-6 text-white mb-4">Want to Be Part of the Story?</h2>
          <p className="text-white fs-5 mb-4">
            Join thousands of donors who are changing lives in Cameroon.
            Your contribution becomes the next success story.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link href="/donation" className="btn btn-light py-3 px-5">
              Donate Now <i className="fa fa-heart ms-2"></i>
            </Link>
            <Link href="/volunteer-cameroon" className="btn btn-outline-light py-3 px-5">
              Volunteer With Us
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-shadow:hover {
          transform: translateY(-5px);
          transition: all 0.3s ease;
        }
      `}</style>
    </>
  );
}
