import Footer from "../../components/footer";
import Form from "../../components/form";

export function Home() {
  return (
    <div className="py-8 md:py-12 px-4">
      <div className="mx-auto max-w-5xl border-orange-700 border-b-[6px] sm:p-8 flex flex-col items-center gap-6 rounded-lg border bg-orange-950/20 p-6 text-center md:rounded-xl md:p-12">
        <h2 className="!my-0 text-orange-500 font-semibold">
          Check ETH Wallet Balance
        </h2>
        <h3 className="!mb-0 text-muted-foreground">
          <Form />
        </h3>
        <Footer />
      </div>
    </div>
  );
}
