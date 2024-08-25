import { Suspense } from "react";
import Section1 from "./Section1";

export default function SearchPage() {
    return (
    <>
      <div>
        <Suspense>
         <Section1/> 
        </Suspense>
      </div>
    </>
    );
  }
  