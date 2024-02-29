export const loader = async () => {
	throw new Response('Something not found', { status: 404 })
}

export default function Page() {
  return <div>...</div>;
}
