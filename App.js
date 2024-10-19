import React from "react";
import './App.css';

function Section({ id, image, title, description, children }) {
  return (
    <section id={id} className="content">
      <img src={image} alt={title} />
      <div>
        <p><strong>{title}</strong><br />{description}</p>
        {children}
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <Section
        id="cloudServices"
        image="cloud-computing.jpg"
        title="Cloud Services"
        description="Cloud services are internet-based computing solutions that provide businesses with on-demand access to IT resources such as storage, processing power, and applications. These services eliminate the need for physical infrastructure, offering flexibility, scalability, and cost efficiency."
      />
      <Section
        id="itManagement"
        image="IT-Management.jpg"
        title="IT Management"
        description="IT management refers to the process of overseeing all technology resources and systems within an organization. It includes managing hardware, software, networks, data storage, and IT staff to ensure that technology is aligned with the business's goals and operates efficiently."
      />
      <Section
        id="softwareRenew"
        image="software-renew.png"
        title="Software Renew"
        description="Software renewal refers to the process of extending the license or subscription for a software product once its initial period expires. This ensures continued access to updates, support, and any new features offered by the software provider."
      />
      <Section
        id="machineLearning"
        image="machine-learning.jpeg"
        title="Machine Learning"
        description="Machine learning (ML) is a branch of artificial intelligence (AI) that enables computers to learn from data and make predictions or decisions without being explicitly programmed. It is used in various applications like recommendation systems, fraud detection, and natural language processing."
      />
      <Section
        id="digitalMarketing"
        image="digital-marketing.jpg"
        title="Digital Marketing"
        description="Digital marketing is the practice of promoting products, services, or brands using online channels and digital technologies. It includes strategies like SEO, social media marketing, email marketing, and content creation."
      />
      <Section
        id="webDevelopment"
        image="web-development.jpeg"
        title="Web Development"
        description="Web development is the process of building, creating, and maintaining websites or web applications. It involves coding, designing, and configuring servers and databases to ensure a website is functional, fast, and user-friendly."
      />
      <Section
        id="cyberSecurity"
        image="cyber-security.jpeg"
        title="Cyber Security"
        description="Cybersecurity is the practice of protecting computers, networks, data, and systems from cyber threats like hacking, data breaches, and malware. It involves using technologies, processes, and best practices to safeguard sensitive information and ensure system integrity."
      />
      <Section
        id="dataAnalytic"
        image="data-analysis.jpg"
        title="Data Analytics"
        description="Data analytics is the process of examining, cleaning, and interpreting raw data to uncover useful insights and trends that can inform decision-making."
      />
    </div>
  );
}

export default App;
