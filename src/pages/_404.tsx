import Footer from "../components/footer";

export function NotFound() {
  return (
    <div className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-5xl border-orange-700 border-b-[6px] sm:p-8 flex flex-col items-center gap-6 rounded-lg border bg-orange-950/20 p-6 text-center md:rounded-xl md:p-12">
        <h2 className="!my-0 text-orange-500 font-semibold">404 NOT FOUND</h2>
        <Footer />
      </div>
    </div>
  );
}
