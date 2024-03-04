import React from 'react';
import { useMutation, gql } from '@apollo/client';
import './Clientcard.css';

const SAVE_CLIENT_INFO = gql`
  mutation SaveClientInfo($name: String!, $email: String!, $projectDetails: String!) {
    saveClientInfo(name: $name, email: $email, projectDetails: $projectDetails) {
      id
      name
      email
      projectDetails
    }
  }
`;

const Clientcard = () => {
  const [clientName, setClientName] = React.useState('');
  const [clientEmail, setClientEmail] = React.useState('');
  const [projectDetails, setProjectDetails] = React.useState('');

  const handleClientNameChange = (event) => {
    setClientName(event.target.value);
  };

  const handleClientEmailChange = (event) => {
    setClientEmail(event.target.value);
  };

  const handleProjectDetailsChange = (event) => {
    setProjectDetails(event.target.value);
  };

  const [saveClientInfo] = useMutation(SAVE_CLIENT_INFO);

  const saveClientInformation = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    try {
      const result = await saveClientInfo({
        variables: {
          name: clientName,
          email: clientEmail,
          projectDetails: projectDetails
        }
      });

      console.log('Client information saved successfully');
    } catch (error) {
      console.error('Error saving client information:', error);
    }
  };

  return (
    <form onSubmit={saveClientInformation}>
      <div>
        <h1>Client Management</h1>
        <label htmlFor="clientName">Client Name:</label>
        <input type="text" id="clientName" value={clientName} onChange={handleClientNameChange} />

        <label htmlFor="clientEmail">Client Email:</label>
        <input type="email" id="clientEmail" value={clientEmail} onChange={handleClientEmailChange} />

        <label htmlFor="projectDetails">Project Details:</label>
        <textarea id="projectDetails" value={projectDetails} onChange={handleProjectDetailsChange} />

        {/* Add a button to save the client information */}
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default Clientcard;