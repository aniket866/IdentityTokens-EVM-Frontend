import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h2 className="text-3xl font-bold tracking-tight">404 - Not Found</h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Could not find the requested resource.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:outline-none"
      >
        Return Home
      </Link>
    </div>
  );
}
