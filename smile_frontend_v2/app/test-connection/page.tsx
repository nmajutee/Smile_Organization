'use client';

import { useEffect, useState } from 'react';

export default function TestConnection() {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/donations/')
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => setData(data))
            .catch((err) => setError(err.message));
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Backend Connection Test</h1>

            {error && (
                <div className="p-4 bg-red-100 text-red-700 rounded mb-4">
                    Error: {error}
                </div>
            )}

            {data ? (
                <div className="p-4 bg-green-100 text-green-700 rounded">
                    <h2 className="font-bold">Success! Data received:</h2>
                    <pre className="mt-2 p-2 bg-white rounded overflow-auto max-h-60">
                        {JSON.stringify(data, null, 2)}
                    </pre>
                </div>
            ) : (
                !error && <div className="text-gray-500">Loading...</div>
            )}
        </div>
    );
}
