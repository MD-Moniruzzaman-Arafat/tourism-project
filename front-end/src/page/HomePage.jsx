import { useLoaderData } from 'react-router';
import Banner from '../components/Banner/Banner';
import Countries from '../components/Countries/Countries';
import TouristsSpot from '../components/TouristsSpot/TouristsSpot';

export default function HomePage() {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <Banner data={data} />
      <Countries />
      <TouristsSpot data={data} />
    </>
  );
}
