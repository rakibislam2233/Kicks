# 👟 Kicks - Modern E-commerce Footwear Store

**Kicks** is a high-performance, responsive e-commerce web application tailored for footwear enthusiasts. This project serves as a bridge between high-fidelity Figma designs and a functional Next.js application, focusing on pixel-perfect UI, seamless data flow, and a smooth user experience.

---

## 🚀 Live Demo

**[Insert Your Deployment Link Here]** _(e.g., https://kicks.vercel.app)_

---

## ✨ Key Features

- **Dynamic Product Listing:** Fetches real-time data from the **Platzi Fake Store API** to display the latest footwear collections.
- **Category-Specific Browsing:** Integrated category filtering to allow users to browse specific types of products easily.
- **Detailed Product Views:** Dedicated dynamic routes for individual product details, including pricing, descriptions, and high-quality imagery.
- **Pixel-Perfect UI:** Strictly followed Figma design guidelines for spacing, typography, colors, and layout consistency.
- **Robust State Management:** Managed global application states using **Redux Toolkit** / **Context API**.
- **Responsive Architecture:** Fully optimized for Mobile, Tablet, and Desktop views using **Tailwind CSS**.
- **Graceful Error Handling:** Custom UI components for **Loading**, **Empty**, and **Error** states to ensure a professional user journey.
- **Cart Functionality (Bonus):** Local state-managed shopping cart allowing users to add/remove items seamlessly.

---

## 🛠️ Technology Stack

| Category             | Tools                       |
| :------------------- | :-------------------------- |
| **Framework**        | Next.js (App Router)        |
| **Language**         | TypeScript |
| **Styling**          | Tailwind CSS                |
| **State Management** | Redux Toolkit 
| **Data Fetching**    | Fetch API          |
| **API Source**       | Platzi Fake Store API       |
| **Deployment**       | Vercel                      |
| **UI Library**       | Shadcn UI |                 |
---

## 📦 Installation & Setup

To run this project locally, follow these steps:

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/rakibislam2233/Kicks.git
    ```

2.  **Navigate to the Directory:**

    ```bash
    cd Kicks
    ```

3.  **Install Dependencies:**

    ```bash
    npm install
    ```

4.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the results.

---

## 📂 Project Architecture

```text
├── src/
│   ├── app/             # Next.js App Router (Pages & Layouts)
│   ├── components/      # Modular UI components (Navbar, ProductCard, Footer)
│   ├── hooks/           # Custom React hooks
│   ├── store/           # Redux slices and store configuration
│   ├── services/        # API integration logic (Axios/RTK Query)
│   ├── styles/          # Global CSS and Tailwind configs
│   └── utils/           # Formatters and helper functions
├── public/              # Static assets (Logos, Icons from Figma)
└── README.md
```

📝 Implementation Highlights
Shadcn UI Integration: Customized theme and components to match the exact branding of the Figma design.

RTK Query: Implemented for automated caching and simplified server state management.

Responsive Design: Used a mobile-first approach to ensure the store looks great on all screens.

Clean Code: Followed modular patterns and industry-standard naming conventions.

🤝 Contact
Developed by Md Rakib Ali

LinkedIn: https://www.linkedin.com/in/md-rakib-ali/

GitHub: https://github.com/rakibislam2233
