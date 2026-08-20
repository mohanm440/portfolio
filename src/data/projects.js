export const projects = [
  {
    id: "network-anomaly-detection",
    title: "Real-Time Explainable Hybrid Machine Learning Framework for Network Traffic Anomaly Detection",
    description: "An advanced, real-time explainable hybrid machine learning framework engineered to safeguard networks by detecting anomalous traffic patterns with high precision. By synergizing an Autoencoder-based anomaly detector for unsupervised feature extraction with a robust XGBoost classifier, the system effectively identifies complex zero-day threats. Furthermore, the integration of SHAP (SHapley Additive exPlanations) ensures transparency by interpreting the underlying prediction factors, providing security analysts with actionable and trustworthy insights into network vulnerabilities.",
    year: "2025 - 2026",
    category: "Machine Learning",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "XGBoost", "SHAP", "Scapy", "Streamlit"],
    image: "/project_1.png",
    githubUrl: "https://github.com/mohanm440",
    liveUrl: "#TODO_ADD_URL",
    features: [
      "Network traffic analysis",
      "Data preprocessing",
      "Feature engineering",
      "Autoencoder anomaly detection",
      "XGBoost classification",
      "Hybrid decision logic",
      "SHAP explainability",
      "Real-time packet analysis",
      "Streamlit dashboard"
    ],
    dataset: "UNSW-NB15",
    architecture: "Autoencoder + XGBoost",
    explainability: "SHAP"
  },
  {
    id: "sales-analytics-forecasting",
    title: "AI-Powered Sales Analytics & Demand Forecasting Platform",
    description: "A comprehensive, AI-powered sales analytics and demand forecasting platform built to transform raw e-commerce data into strategic business intelligence. The project encompasses an end-to-end machine learning pipeline, featuring rigorous data ingestion, advanced feature engineering, and the deployment of optimized supervised regression models. By accurately predicting future sales trends and evaluating performance through metrics like MAE and RMSE, the platform empowers stakeholders to optimize inventory management and make data-driven decisions via interactive dashboards.",
    year: "2026",
    category: "Data Analysis",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    image: "/project_2.png",
    githubUrl: "https://github.com/mohanm440",
    liveUrl: "#TODO_ADD_URL",
    features: [
      "End-to-end ML pipeline",
      "Real-world e-commerce data ingestion",
      "Feature engineering",
      "Supervised forecasting models",
      "Regression techniques evaluation (MAE, RMSE)",
      "Interactive dashboards for business insights"
    ],
    dataset: "Real-world E-commerce",
    architecture: "Regression Models",
    explainability: "N/A"
  },
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    description: "A predictive analytics solution designed to combat customer attrition in the telecommunications sector by identifying at-risk users before they leave. Utilizing historical usage metrics, billing data, and demographic information, the machine learning classification model uncovers hidden patterns indicative of churn. Through comprehensive exploratory data analysis, targeted feature engineering, and predictive scoring, the model enables businesses to deploy proactive retention strategies, ultimately maximizing customer lifetime value and reducing revenue leakage.",
    year: "2025",
    category: "Machine Learning",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    image: "/project_3.jpg",
    githubUrl: "https://github.com/mohanm440/Customer-Churn-Prediction",
    liveUrl: "#TODO_ADD_URL",
    features: [
      "Exploratory Data Analysis (EDA)",
      "Feature engineering & selection",
      "Model training & evaluation",
      "Predictive churn scoring"
    ],
    dataset: "Telco Customer Churn",
    architecture: "Classification Models",
    explainability: "Feature Importance"
  },
  {
    id: "house-price-predictor",
    title: "House Price Predictor",
    description: "An intelligent real estate valuation tool that leverages advanced regression algorithms to accurately estimate property prices. By analyzing a multitude of features—including geographical location, square footage, and neighborhood amenities—the model captures the complex dynamics of the housing market. The end-to-end implementation features meticulous data preprocessing, hyperparameter tuning of models like XGBoost, and seamless deployment via a Flask API, offering a scalable solution for buyers, sellers, and real estate professionals.",
    year: "2025",
    category: "Machine Learning",
    technologies: ["Python", "Scikit-learn", "Pandas", "XGBoost", "Flask"],
    image: "/project_4.jpg",
    githubUrl: "https://github.com/mohanm440/house-price-predictor",
    liveUrl: "#TODO_ADD_URL",
    features: [
      "Data cleaning & preprocessing",
      "Regression modeling",
      "Hyperparameter tuning",
      "Flask API integration"
    ],
    dataset: "Real Estate Data",
    architecture: "Regression Models",
    explainability: "N/A"
  }
];
