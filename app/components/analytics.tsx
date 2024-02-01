"use client";

export function Analytics() {
	const token = process.env.NEXT_PUBLIC_TINYBIRD_TOKEN;
	if (!token) {
		return null;
	}
	return (
		<script
			defer
			src="https://unpkg.com/@tinybirdco/flock.js"
			data-token={token}
		/>
	);
}
