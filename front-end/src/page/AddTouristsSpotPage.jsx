import { useState } from 'react';
import { createTour } from '../utils/api';

export default function AddTouristsSpotPage() {
  const [formData, setFormData] = useState({
    image: '',
    touristsSpotName: '',
    countryName: '',
    location: '',
    description: '',
    averageCost: '',
    seasonality: '',
    travelTime: '',
    totalVisitorsPerYear: '',
    userEmail: '',
    UserName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createTour(formData);
    console.log(res);
    console.log(formData);
  };
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold py-6">Add Tourists Spot!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Image</label>
                <input
                  name="image"
                  onChange={handleChange}
                  value={formData.image}
                  type="text"
                  className="input"
                  placeholder="Image"
                />
                <label className="label">Tourists Spot Name</label>
                <input
                  name="touristsSpotName"
                  onChange={handleChange}
                  value={formData.touristsSpotName}
                  type="text"
                  className="input"
                  placeholder="Tourists Spot Name"
                />
                <label className="label">Country Name</label>
                <input
                  name="countryName"
                  onChange={handleChange}
                  value={formData.countryName}
                  type="text"
                  className="input"
                  placeholder="Country Name"
                />
                <label className="label">Location</label>
                <input
                  name="location"
                  onChange={handleChange}
                  value={formData.location}
                  type="text"
                  className="input"
                  placeholder="Location"
                />
                <label className="label">Description</label>
                <textarea
                  name="description"
                  onChange={handleChange}
                  value={formData.description}
                  className="input"
                  cols="30"
                  rows="10"
                  placeholder="Description"
                ></textarea>
                <label className="label">Average Cost</label>
                <input
                  name="averageCost"
                  onChange={handleChange}
                  value={formData.averageCost}
                  type="text"
                  className="input"
                  placeholder="Average Cost"
                />
                <label className="label">Seasonality</label>
                <select
                  name="seasonality"
                  onChange={handleChange}
                  value={formData.seasonality}
                  className="input"
                >
                  <option>select</option>
                  <option value="summer">summer</option>
                  <option value="winter">winter</option>
                </select>
                <label className="label">Travel Time</label>
                <input
                  name="travelTime"
                  onChange={handleChange}
                  value={formData.travelTime}
                  type="text"
                  className="input"
                  placeholder="Travel Time"
                />
                <label className="label">TotalVisitorsPerYear</label>
                <input
                  name="totalVisitorsPerYear"
                  onChange={handleChange}
                  value={formData.totalVisitorsPerYear}
                  type="text"
                  className="input"
                  placeholder="TotalVisitorsPerYear"
                />
                <label className="label">User Email</label>
                <input
                  name="userEmail"
                  onChange={handleChange}
                  value={formData.userEmail}
                  type="email"
                  className="input"
                  placeholder="User Email"
                />
                <label className="label">User Name</label>
                <input
                  name="UserName"
                  onChange={handleChange}
                  value={formData.UserName}
                  type="text"
                  className="input"
                  placeholder="User Name"
                />
                <button className="btn btn-neutral mt-4">Add</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
