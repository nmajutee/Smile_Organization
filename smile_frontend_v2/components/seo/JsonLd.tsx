/**
 * JSON-LD Script Component for Structured Data
 * Properly renders schema.org structured data for SEO
 */

interface JsonLdProps {
  data: object | object[];
}

export function JsonLd({ data }: JsonLdProps) {
  const jsonLdArray = Array.isArray(data) ? data : [data];

  return (
    <>
      {jsonLdArray.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

/**
 * Breadcrumb Component with Schema
 */
interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.href === '/' ? 'https://smileorganization.org' : `https://smileorganization.org${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center mb-0">
          {items.map((item, index) => (
            <li
              key={item.href}
              className={`breadcrumb-item ${index === items.length - 1 ? 'active text-white' : ''}`}
              aria-current={index === items.length - 1 ? 'page' : undefined}
            >
              {index === items.length - 1 ? (
                item.name
              ) : (
                <a href={item.href} className="text-white">{item.name}</a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

/**
 * FAQ Section with Schema
 */
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
}

export function FAQSection({ faqs, title = 'Frequently Asked Questions' }: FAQSectionProps) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="faq-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-title bg-white text-center text-primary px-3">FAQ</p>
            <h2 className="display-6">{title}</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq${index}`}
                        aria-expanded={index === 0 ? 'true' : 'false'}
                        aria-controls={`faq${index}`}
                      >
                        {faq.question}
                      </button>
                    </h3>
                    <div
                      id={`faq${index}`}
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * Author Box for EEAT
 */
interface AuthorBoxProps {
  name: string;
  role: string;
  description: string;
  image?: string;
}

export function AuthorBox({ name, role, description, image }: AuthorBoxProps) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: name,
    jobTitle: role,
    description: description,
    worksFor: {
      '@type': 'Organization',
      name: 'Smile Organization',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="author-box bg-light p-4 rounded mb-4">
        <div className="d-flex align-items-center">
          {image && (
            <img
              src={image}
              alt={name}
              className="rounded-circle me-3"
              width={80}
              height={80}
              style={{ objectFit: 'cover' }}
            />
          )}
          <div>
            <h4 className="mb-1">{name}</h4>
            <p className="text-muted mb-1">{role}</p>
            <p className="mb-0 small">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * Trust Signals Component for EEAT
 */
export function TrustSignals() {
  return (
    <div className="trust-signals py-4 bg-light">
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-6 col-md-3">
            <div className="trust-item">
              <i className="fa fa-shield-alt fa-2x text-primary mb-2"></i>
              <h6 className="mb-0">Verified Nonprofit</h6>
              <small className="text-muted">Registered in Cameroon</small>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="trust-item">
              <i className="fa fa-chart-pie fa-2x text-primary mb-2"></i>
              <h6 className="mb-0">90% to Programs</h6>
              <small className="text-muted">Efficient spending</small>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="trust-item">
              <i className="fa fa-file-alt fa-2x text-primary mb-2"></i>
              <h6 className="mb-0">Transparent Reports</h6>
              <small className="text-muted">Annual audits</small>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="trust-item">
              <i className="fa fa-users fa-2x text-primary mb-2"></i>
              <h6 className="mb-0">50,000+ Helped</h6>
              <small className="text-muted">Since 2024</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
