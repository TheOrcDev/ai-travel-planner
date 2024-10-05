import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn
        appearance={{
          baseTheme: dark,
        }}
      />
    </div>
  );
}
