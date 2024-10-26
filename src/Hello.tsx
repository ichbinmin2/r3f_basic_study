export function Hello({ to }: { to: string }) {
  console.log("hello");

  return (
    <>
      <div>hello {to}</div>
    </>
  );
}
