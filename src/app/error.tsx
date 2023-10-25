"use client";

import { useEffect } from "react";
import SectionVoid from "@/components/section-void";

type Props = {
  error: Error;
};

function ErrorState({ error }: Props) {
  useEffect(() => {
    console.log("🚀 ~ file: error.tsx:12 ~ ErrorState ~ error:", error);
  }, [error]);

  return <SectionVoid title="Uh Oh" subtitle="Something went wrong!" />;
}
export default ErrorState;
