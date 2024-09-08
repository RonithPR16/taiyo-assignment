
# Contact Management & Dashboard App

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contact Management](#contact-management)
- [Charts and Maps Dashboard](#charts-and-maps-dashboard)

## Introduction

This application is a simple contact management system and a dashboard for visualizing case data using charts and maps. The app allows users to add, view, edit, and delete contacts while using Redux for state management. The dashboard includes a line graph for case fluctuations and a React Leaflet map displaying country-specific data.

## Features

### Contact Management
- **Add New Contacts:** A form to add new contacts.
- **View Contacts List:** Displays a list of all added contacts.
- **Edit Contacts:** Allows editing of existing contacts.
- **Delete Contacts:** Allows deletion of contacts.

### Charts and Maps Dashboard
- **Line Graph:** Displays the fluctuation in covid cases over time.
- **Interactive Map:** A React Leaflet map with markers showing country-specific information such as the total number of active, recovered cases, and deaths.

## Technologies Used

- **React.js:** For building the user interface.
- **Redux:** For state management of contact data.
- **React Router:** For navigation between different pages.
- **React Leaflet:** For map rendering and interaction.
- **Chart.js:** For displaying the line graph.
- **Tailwind:** For styling the application.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RonithPR16/taiyo-assignment.git
   ```

2. Navigate to the project directory:
   ```bash
   cd taiyo-assignment
   ```

3. Install the dependencies:
   ```bash
   yarn
   ```

4. Start the development server:
   ```bash
   yarn start
   ```

5. Open your browser and visit `http://localhost:3000` to see the app in action.

## Usage

### Contact Management

1. **Add Contacts:**
   - Navigate to the "Contacts" page.
   - Fill in the form to add a new contact.
   - Click "Create contact" to add the contact to the list.

2. **Edit or Delete Contacts:**
   - Use the "Edit" button to update contact information.
   - Use the "Delete" button to remove a contact.

### Charts and Maps Dashboard

1. **View Dashboard:**
   - Navigate to the "Analytics" page to see the line graph showing case fluctuations and the interactive map with markers.

2. **Interact with the Map:**
   - Hover over or click on the map markers to see country-specific case data.

