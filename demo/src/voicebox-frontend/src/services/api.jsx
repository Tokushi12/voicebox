const API_BASE_URL = 'http://localhost:8080';

// User API calls
export const userAPI = {
  // Get all users
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/users`);
    return response.json();
  },

  // Get user by ID
  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/users/${id}`);
    return response.json();
  },

  // Create new user (signup)
  create: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    return response.json();
  },

  // Update user
  update: async (id, userData) => {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    return response.json();
  },

  // Delete user
  delete: async (id) => {
    await fetch(`${API_BASE_URL}/users/${id}`, {
      method: 'DELETE'
    });
  }
};

// Feedback API calls
export const feedbackAPI = {
  // Get all feedback
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/feedback`);
    return response.json();
  },

  // Get feedback by ID
  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/feedback/${id}`);
    return response.json();
  },

  // Create new feedback
  create: async (feedbackData) => {
    const response = await fetch(`${API_BASE_URL}/feedback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedbackData)
    });
    return response.json();
  },

  // Update feedback
  update: async (id, feedbackData) => {
    const response = await fetch(`${API_BASE_URL}/feedback/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedbackData)
    });
    return response.json();
  },

  // Delete feedback
  delete: async (id) => {
    await fetch(`${API_BASE_URL}/feedback/${id}`, {
      method: 'DELETE'
    });
  }
};

// Vote API calls
export const voteAPI = {
  // Get all votes
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/votes`);
    return response.json();
  },

  // Create new vote
  create: async (voteData) => {
    const response = await fetch(`${API_BASE_URL}/votes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(voteData)
    });
    return response.json();
  }
};