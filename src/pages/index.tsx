const { FatherDemo } = window;

const { Foo } = FatherDemo;
console.log(FatherDemo);

export default function HomePage() {
  return (
    <div>
      {/* <FatherDemo.Foo /> */}
      <Foo />
    </div>
  );
}
