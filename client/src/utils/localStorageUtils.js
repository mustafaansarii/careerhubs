export const saveFormDataToLocalStorage = (formData) => {
  try {
    const serializedData = JSON.stringify(formData);
    localStorage.setItem('resumeFormData', serializedData);
  } catch (error) {
    console.error('Error saving form data to localStorage:', error);
  }
};

export const loadFormDataFromLocalStorage = () => {
  try {
    const serializedData = localStorage.getItem('resumeFormData');
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.error('Error loading form data from localStorage:', error);
    return undefined;
  }
};

export const clearFormDataFromLocalStorage = () => {
  try {
    localStorage.removeItem('resumeFormData');
  } catch (error) {
    console.error('Error clearing form data from localStorage:', error);
  }
}; 