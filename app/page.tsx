import "server-only";

import GenerateForm from "@/components/generate-form";

export default function Home() {
  return (
    <section
      className="flex flex-col p-5 items-center h-screen bg-zinc-100 "
      style={{ gap: "10px" }}
    >
      <h1 className="text-lg text-black">Meowem Hissum</h1>
      {/* <p className="text-lg">Form Here</p> */}
      <GenerateForm />
      {/* <p className="text-lg">Generated Text Here</p> */}
    </section>
  );
}
