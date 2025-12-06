import Card from '../Card/Card';

export default function TouristsSpot() {
  return (
    <>
      <h1 className="text-center font-extrabold text-4xl">Tourists Spot</h1>
      <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
