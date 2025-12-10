export const getAllTours = async () => {
  try {
    const res = await fetch(`http://localhost:5000/tours`);

    if (!res.ok) {
      throw new Error(`Failed to fetch tours: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('GET Error:', error.message);
    return { status: 'fail', message: error.message };
  }
};

export const createTour = async (formData) => {
  try {
    const res = await fetch(`http://localhost:5000/tours`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error(`POST failed: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('POST Error:', error.message);
    return { status: 'fail', message: error.message };
  }
};

export const getTours = async ({ params }) => {
  try {
    const res = await fetch(`http://localhost:5000/tours/${params.id}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch tours: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('GET Error:', error.message);
    return { status: 'fail', message: error.message };
  }
};
