import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { CREATE_PROJECT } from '../../utils/mutations';


const ProjectForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    client_name: '',
    client_address: '',
    client_phone_number: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const [createProject] = useMutation(CREATE_PROJECT, {
    variables: formData
  });

  const handleCreateProject = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    try {
      await createProject();

      console.log('Client information saved successfully');
      window.location.assign("/profile")
    } catch (error) {
      console.error('Error saving client information:', error);
    }
  };

  return (
    <form onSubmit={handleCreateProject}>
      <div className="client">
        <h1 className="clientManagement">Client Information</h1>
        <label htmlFor="clientTitle" className="clientLabel">Client Title:</label>
        <input className="clientInput"
          type="text"
          id="clientTitle"
          value={formData.title}
          name="title"
          onChange={handleInputChange} />

        <label htmlFor="clientDescription" className="clientLabel">Client Description:</label>
        <input className="clientInput"
          type="text"
          id="clientDescription"
          value={formData.description}
          name="description"
          onChange={handleInputChange} />

        <label htmlFor="clientName" className="clientLabel">Client Name:</label>
        <input className="clientInput"
          type="text"
          id="clientName"
          value={formData.client_name}
          name="client_name"
          onChange={handleInputChange} />

        <label htmlFor="clientAddress" className="clientLabel">Client Address :</label>
        <input className="clientInput"
          type="text"
          id="clientAddress"
          value={formData.client_address}
          name="client_address"
          onChange={handleInputChange} />

        <label htmlFor="clientPhoneNumber" className="clientLabel">Client Phone Number:</label>
        <input className="clientInput"
          type="text"
          id="clientPhoneNumber"
          value={formData.client_phone_number}
          name="client_phone_number"
          onChange={handleInputChange} />




        {/* Add a button to save the client information */}
        <button type="submit" className="buttonSave">Save Client Information</button>
      </div>
    </form>
  );
};

export default ProjectForm;