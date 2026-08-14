export const personalInfo = {
  name: "MOHAN M",
  role: "AI / MACHINE LEARNING ENGINEER",
  subtitle: "Cyber Security Graduate & ML Specialist",
  summary: "Cyber Security graduate (B.E., May 2026) with hands-on experience across Machine Learning, data analytics, and network security. Built end-to-end ML projects including a real-time explainable network anomaly detection system and a sales forecasting platform.",
  location: "Salem, Tamil Nadu, India",
  phone: "+91 6379376810",
  whatsapp: "+91 6379376810",
  whatsappUrl: "https://wa.me/916379376810",
  email: "mohansakthimp@gmail.com",
  github: "https://github.com/mohanm440",
  linkedin: "https://www.linkedin.com/in/mohansakthi/"
};

export const skillsData = {
  languages: ["Python", "SQL"],
  machineLearning: [
    "Feature Engineering",
    "Data Preprocessing",
    "Model Training & Evaluation",
    "Anomaly Detection",
    "Time-Series Forecasting",
    "Explainable AI (SHAP)",
    "Regression & Classification"
  ],
  librariesTools: [
    "TensorFlow",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Scapy",
    "Streamlit",
    "SHAP",
    "Power BI"
  ],
  cyberSecurity: [
    "Network Security",
    "Vulnerability Assessment",
    "Packet Analysis",
    "Intrusion Detection",
    "SOC Fundamentals"
  ],
  devTools: ["Git/GitHub", "VS Code", "Excel", "Jupyter Notebook"]
};

export const projectsData = [
  {
    id: "network-anomaly-detection",
    number: "PROJECT 01",
    title: "Real-Time Explainable Network Traffic Anomaly Detection",
    subtitle: "Academic Project (2025 – 2026)",
    description: "Engineered a hybrid ML framework combining an unsupervised Autoencoder with a supervised XGBoost classifier for real-time network intrusion detection with SHAP explainability.",
    image: "/project_1.png",
    stack: ["Python", "Scapy", "Scikit-learn", "TensorFlow", "SHAP", "Streamlit", "XGBoost", "Autoencoder"],
    githubUrl: "https://github.com/mohanm440",
    liveUrl: null, // Live demo coming soon
    details: {
      problem: "Traditional Intrusion Detection Systems (IDS) rely heavily on static signature rules, failing against novel zero-day threats while generating high rates of false positives that overwhelm SOC analysts.",
      solution: "Developed a two-stage hybrid ML architecture: an unsupervised Deep Autoencoder captures baseline benign network behavior to flag subtle anomalies, while a supervised XGBoost model categorizes threat types.",
      mlApproach: "Trained on 2.5M records of UNSW-NB15 dataset. Features live packet capture processing via Scapy and Npcap. Model explainability is achieved using SHAP (SHapley Additive exPlanations) values to highlight exact network packet features causing the trigger.",
      results: [
        "Reduced false positive rate significantly compared to baseline single-model CICIDS2017 architectures",
        "Sub-second packet feature extraction and inference latency",
        "Surfaced top-3 contributing packet features per prediction in real-time Streamlit dashboard"
      ],
      architecture: [
        "Packet Capture (Scapy / Npcap)",
        "Feature Extraction Engine (49 network features)",
        "Unsupervised Autoencoder (Reconstruction Error threshold)",
        "Supervised XGBoost Classifier (Multi-class Threat Tagging)",
        "SHAP Explainer Module",
        "Streamlit Interactive Monitoring Dashboard"
      ]
    }
  },
  {
    id: "sales-analytics-forecasting",
    number: "PROJECT 02",
    title: "AI-Powered Sales Analytics & Demand Forecasting Platform",
    subtitle: "Personal Project (2026)",
    description: "End-to-end ML pipeline for e-commerce order intelligence built on real Meesho platform data. Features 20+ engineered features, supervised ML forecasting (Random Forest MAE=0.354), and an interactive Streamlit inventory dashboard.",
    image: "/project_2.png",
    stack: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Streamlit", "Random Forest", "XGBoost", "Plotly"],
    githubUrl: "https://github.com/mohanm440",
    liveUrl: null,
    details: {
      problem: "E-commerce sellers face severe stockouts and overstock losses due to unorganized order/cancellation data and lack of automated SKU-level demand predictions.",
      solution: "Built a comprehensive ML data pipeline that ingests raw Meesho platform order/cancellation records, generates rolling time-series features, and evaluates regression models with strict time-series cross-validation.",
      mlApproach: "Engineered 20+ lag and rolling window features alongside festival/velocity flags. Evaluated Linear Regression, XGBoost, and Random Forest models using MAE and RMSE metrics without data leakage.",
      results: [
        "Random Forest model achieved optimal holdout performance with MAE = 0.354",
        "Integrated rule-based AI Inventory Recommender (Reorder / Monitor / Deprioritize)",
        "Built interactive dark glassmorphism dashboard in Streamlit for decision-makers"
      ],
      architecture: [
        "Raw Data Ingestion (orders.csv & cancelled_orders.xlsx)",
        "Data Pipeline & Cleaning (Master Dataset)",
        "Feature Engineering (Time lags, rolling averages, velocity)",
        "Model Training & Evaluation (LR, RF, XGBoost)",
        "Inventory Recommender Engine",
        "Streamlit Interactive Business Intelligence UI"
      ]
    }
  },
  {
    id: "hand-tracking-portfolio",
    number: "PROJECT 03",
    title: "Hand-Controlled Interactive Portfolio System",
    subtitle: "Creative Web & Vision Project (2026)",
    description: "A real-time vision-driven interaction engine where hand gestures detected via MediaPipe dynamically control canvas physics and UI element states.",
    image: "/project_3.png",
    stack: ["JavaScript", "HTML5 Canvas", "MediaPipe Vision", "Webcam API", "CSS3"],
    githubUrl: "https://github.com/mohanm440",
    liveUrl: null,
    details: {
      problem: "Traditional portfolios rely on static scroll interactions, missing opportunities to demonstrate creative fusion between Computer Vision and frontend technology.",
      solution: "Engineered a real-time browser hand-tracking system that maps 21 3D hand landmarks to interactive canvas animations, enabling gesture-controlled user experiences.",
      mlApproach: "Leveraged MediaPipe Tasks Vision API running on client GPU for 30 FPS gesture recognition (open palm vs closed fist landmark distances).",
      results: [
        "Smooth 60 FPS Canvas 2D rendering with zero server latency",
        "Seamless gesture mapping for interactive hero portrait physics"
      ],
      architecture: [
        "Webcam Video Feed",
        "MediaPipe Hand Landmarker",
        "Gesture Distance Calculation Engine",
        "HTML5 Canvas Renderer"
      ]
    }
  }
];

export const experienceData = [
  {
    role: "Data Analytics Intern",
    company: "NoviTech (The Innovation Partner)",
    location: "Tamil Nadu, India",
    period: "2025 – Present",
    highlights: [
      "Reduced data quality issues by approximately 40% across 3 real-world business datasets (10K–50K rows) by designing standardized cleaning, preprocessing, and EDA workflows in Python, Pandas, and SQL.",
      "Built 5+ interactive dashboards and automated reporting pipelines in Power BI and Excel, converting raw data into weekly, decision-ready insights for stakeholders.",
      "Applied regression and classification models to a real customer dataset, achieving 84% model accuracy and enabling the team to prioritize high-risk accounts for retention outreach.",
      "Completed a 30-day Data Analytics training program covering end-to-end analytics workflows (Certificate ID: NT_B20DA161)."
    ]
  }
];

export const educationData = [
  {
    degree: "Bachelor of Engineering, Cyber Security",
    institution: "Paavai Engineering College",
    location: "Namakkal, Tamil Nadu",
    period: "Nov 2022 – May 2026",
    details: "Relevant Coursework: Network Security, Machine Learning, Data Structures & Algorithms"
  },
  {
    degree: "Higher Secondary (Class XII)",
    institution: "The Gugai Higher Secondary School",
    location: "Salem, Tamil Nadu",
    period: "April 2022",
    details: "Class XII: 80% | SSLC (Class X): 81%"
  }
];

export const certificationsData = [
  { name: "Python", issuer: "IBM" },
  { name: "Machine Learning and Deep Learning", issuer: "Infosys Springboard" },
  { name: "Data Analytics MasterClass", issuer: "NoviTech R&D", date: "Issued June 2025" },
  { name: "Developing AI Applications with Python and Flask", issuer: "Coursera", date: "Issued July 2025" }
];

export const githubProjects = [
  {
    id: "sales-analytics-forecasting",
    name: "Sales Analytics Forecasting",
    description: "AI-Powered Sales Analytics and Demand Forecasting Platform built on Meesho e-commerce data. End-to-end ML pipeline with Streamlit dashboard.",
    language: "Python",
    url: "https://github.com/mohanm440/sales-analytics-forecasting"
  },
  {
    id: "Customer-Churn-Prediction",
    name: "Customer Churn Prediction",
    description: "Customer churn prediction system built with Python, Scikit-learn, and Streamlit using Logistic Regression and feature analysis.",
    language: "Python",
    url: "https://github.com/mohanm440/Customer-Churn-Prediction"
  },
  {
    id: "house-price-predictor",
    name: "House Price Predictor",
    description: "An interactive ML dashboard that predicts house prices in real-time using Log-Linear Regression — built with Vanilla HTML, CSS & JavaScript.",
    language: "JavaScript",
    url: "https://github.com/mohanm440/house-price-predictor"
  },
  {
    id: "network-anomaly-detection",
    name: "Network Anomaly Detection",
    description: "Live network packet analysis and anomaly detection using hybrid machine learning (Autoencoder & XGBoost).",
    language: "Python",
    url: "https://github.com/mohanm440/network-anomaly-detection"
  }
];
