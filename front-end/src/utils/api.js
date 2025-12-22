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

export const updateTours = async ({ params, updatedData }) => {
  try {
    const res = await fetch(`http://localhost:5000/tours/${params}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    if (!res.ok) {
      throw new Error('Failed to update data');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('GET Error:', error.message);
    return { status: 'fail', message: error.message };
  }
};

export const myListTours = async () => {
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

export const deleteTour = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/tours/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error('Failed to delete tour');
    }

    return true;
  } catch (error) {
    console.error('GET Error:', error.message);
    return { status: 'fail', message: error.message };
  }
};
