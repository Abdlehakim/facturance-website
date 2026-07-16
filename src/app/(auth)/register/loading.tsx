export default function RegisterLoading() {
  return (
    <section className="flex min-h-[calc(100vh-72px)] items-center bg-white px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto w-full max-w-xl">
        <div className="rounded-2xl border border-zinc-200/80 bg-surface-page p-5 shadow-xl shadow-zinc-950/5 sm:p-6">
          <p className="sr-only" role="status">
            Chargement du formulaire d’inscription…
          </p>

          <div className="animate-pulse" aria-hidden="true">
            <div className="h-3 w-24 rounded-sm bg-zinc-200" />

            <div className="mt-3 h-9 w-full max-w-md rounded-sm bg-zinc-200" />

            <div className="mt-3 h-4 w-72 max-w-full rounded-sm bg-zinc-200" />

            <div className="mt-6">
              <div className="mb-2 h-4 w-32 rounded-sm bg-zinc-200" />
              <div className="h-11 w-full rounded-sm border border-zinc-200 bg-white" />
            </div>

            <div className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <div className="h-4 w-24 rounded-sm bg-zinc-200" />
                  <div className="h-11 w-full rounded-sm border border-zinc-200 bg-white" />
                </div>

                <div className="grid gap-2">
                  <div className="h-4 w-28 rounded-sm bg-zinc-200" />
                  <div className="h-11 w-full rounded-sm border border-zinc-200 bg-white" />
                </div>
              </div>

              <div className="grid gap-2">
                <div className="h-4 w-24 rounded-sm bg-zinc-200" />
                <div className="h-11 w-full rounded-sm border border-zinc-200 bg-white" />
              </div>

              <div className="grid gap-4 sm:grid-cols-[minmax(150px,180px)_minmax(0,1fr)]">
                <div className="grid gap-2">
                  <div className="h-4 w-24 rounded-sm bg-zinc-200" />
                  <div className="h-11 w-full rounded-sm border border-zinc-200 bg-white" />
                </div>

                <div className="grid gap-2">
                  <div className="h-4 w-28 rounded-sm bg-zinc-200" />
                  <div className="h-11 w-full rounded-sm border border-zinc-200 bg-white" />
                </div>
              </div>

              <div className="grid gap-2">
                <div className="h-4 w-24 rounded-sm bg-zinc-200" />
                <div className="h-11 w-full rounded-sm border border-zinc-200 bg-white" />
              </div>

              <div className="grid gap-2">
                <div className="h-4 w-32 rounded-sm bg-zinc-200" />
                <div className="h-11 w-full rounded-sm border border-zinc-200 bg-white" />
              </div>

              <div className="h-11 w-full rounded-sm bg-zinc-200" />
            </div>

            <div className="mx-auto mt-5 h-4 w-48 max-w-full rounded-sm bg-zinc-200" />
          </div>
        </div>
      </div>
    </section>
  );
}
