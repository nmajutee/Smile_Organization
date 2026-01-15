import Link from 'next/link';

export default function BlogNotFound() {
  return (
    <div className="container-xxl py-5 text-center">
      <div className="container">
        <i className="fa fa-exclamation-triangle fa-5x text-warning mb-4"></i>
        <h1>Article Not Found</h1>
        <p className="text-muted mb-4">
          The article you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/blog" className="btn btn-primary">
          Back to Blog <i className="fa fa-arrow-right ms-2"></i>
        </Link>
      </div>
    </div>
  );
}
