import {useState} from 'react';
import { useMutation, gql } from '@apollo/client';
import { CREATE_PROJECT } from '../../utils/mutations';
// import './Clientcard.css';



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
    } catch (error) {
      console.error('Error saving client information:', error);
    }
  };

  return (
    <form onSubmit={handleCreateProject}>
      <div>
        <h1>Client Management</h1>
        <label htmlFor="clientTitle">Client Title:</label>
        <input
          type="text"
          id="clientTitle"
          value={formData.title}
          name="title"
          onChange={handleInputChange} />

        <label htmlFor="clientDescription">Client Description:</label>
        <input
          type="text"
          id="clientDescription"
          value={formData.description}
          name="description"
          onChange={handleInputChange} />

        <label htmlFor="clientName">Client Name:</label>
        <input
          type="text"
          id="clientName"
          value={formData.client_name}
          name="client_name"
          onChange={handleInputChange} />

        <label htmlFor="clientAddress">Client Address :</label>
        <input
          type="text"
          id="clientAddress"
          value={formData.client_address}
          name="client_address"
          onChange={handleInputChange} />

        <label htmlFor="clientPhoneNumber">Client Phone Number:</label>
        <input
          type="text"
          id="clientPhoneNumber"
          value={formData.client_phone_number}
          name="client_phone_number"
          onChange={handleInputChange} />




        {/* Add a button to save the client information */}
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default ProjectForm;