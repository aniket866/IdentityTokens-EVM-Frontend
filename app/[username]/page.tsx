export default function UsernamePage({
  params,
}: {
  params: { username: string };
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-app-bg">
      <h1 className="font-utsaha text-2xl font-semibold text-white">
        @{params.username}
      </h1>
    </main>
  );
}
