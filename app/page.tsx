import { Suspense } from "react";
import { User } from "./_components/User";
import { StaticComponent } from "./_components/StaticComponent";

export default function Home() {
  console.log("page running");

  return (
    <>
      <div>Hello World</div>
      <StaticComponent />
      <Suspense fallback={<div>loading...</div>}>
        <User wait={1000} />
      </Suspense>
      <Suspense fallback={<div>loading...</div>}>
        <User wait={2000} />
      </Suspense>
      <Suspense fallback={<div>loading...</div>}>
        <User wait={3000} />
      </Suspense>
      <Suspense fallback={<div>loading...</div>}>
        <User wait={4000} />
      </Suspense>
      <Suspense fallback={<div>loading...</div>}>
        <User wait={5000} />
      </Suspense>
      <Suspense fallback={<div>loading...</div>}>
        <User wait={6000} />
      </Suspense>
      <Suspense fallback={<div>loading...</div>}>
        <User wait={7000} />
      </Suspense>
    </>
  );
}
