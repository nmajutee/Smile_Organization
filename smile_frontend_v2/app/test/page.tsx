export default function SimplePage() {
    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ color: '#EB5310' }}>Page Loading Test</h1>
            <p>If you see this, React is working!</p>

            <div style={{ marginTop: '40px' }}>
                <section className="ul-features ul-section-spacing">
                    <div className="ul-container">
                        <h2>Features Section</h2>
                        <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-4 justify-content-center">
                            <div className="col">
                                <div className="ul-feature">
                                    <h3>Education Support</h3>
                                </div>
                            </div>
                            <div className="col">
                                <div className="ul-feature">
                                    <h3>Healthcare</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div style={{ marginTop: '40px', backgroundColor: '#f4f4f4', padding: '20px' }}>
                <h2>About Section</h2>
                <p>This is a test to see if sections render</p>
            </div>

            <div style={{ marginTop: '40px', backgroundColor: '#EB5310', color: 'white', padding: '20px' }}>
                <h2>Test Section 3</h2>
                <p>More test content</p>
            </div>

            <div style={{ marginTop: '40px' }}>
                <h2>Test Section 4</h2>
                <p>Final test section</p>
            </div>
        </div>
    );
}
