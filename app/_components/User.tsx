import { cookies } from "next/headers";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const User = async ({ wait }: { wait: number }) => {
  console.log("user running");

  await sleep(wait);
  const jar = await cookies();

  const userName = jar.get("user-name")?.value || "logged out";

  return <div>{userName} ({wait})</div>;
};
