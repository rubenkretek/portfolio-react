// Base URL
export const base_url = 'http://localhost:1337';

export const allWorksURL = () => `${base_url}/works/`;

// Work item
export const workItemURL = (work_id) => `${base_url}/works/${work_id}`;