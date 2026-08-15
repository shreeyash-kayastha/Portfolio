// Project data structure for easy editing
export const projectsData = [
  {
    id: 1,
    number: '01',
    title: 'NEPSE Index Forecasting',
    description: 'Time-series forecasting project predicting NEPSE index log returns using machine learning with proper temporal validation.',
    shortDescription: 'ML-based time-series forecasting for stock market prediction',
    technologies: ['Python', 'XGBoost', 'Optuna', 'Pandas', 'NumPy'],
    featured: true,
    caseStudy: {
      problem: 'Developing a quantitative model to forecast NEPSE (Nepal Stock Exchange) index returns while avoiding common pitfalls like data leakage in temporal data.',
      data: {
        source: 'Historical NEPSE market data',
        target: 'NEPSE index log returns',
        features: ['Lagged log returns', 'Rolling volatility', 'RSI', 'Rolling mean']
      },
      method: {
        approach: 'XGBoost Regressor with Optuna hyperparameter optimization',
        validation: 'Walk-Forward / Expanding Window Validation (proper temporal validation)',
        bestConfig: '20 lag features with expanding-window validation'
      },
      results: {
        rmse: '0.01345',
        r2: '0.2063',
        insight: 'Demonstrates understanding of feature engineering, temporal validation, and quantitative modeling. The model captures moderate time-series patterns while avoiding overfitting through proper validation methodology.'
      },
      learned: [
        'Importance of proper temporal validation for time-series models',
        'Feature engineering strategies for financial time-series data',
        'Hyperparameter optimization with Optuna',
        'Balancing model complexity with interpretability'
      ],
      github: 'https://github.com',
      live: null
    },
    image: '/assets/project-nepse.svg',
    color: '#1e40af'
  },
  {
    id: 2,
    number: '02',
    title: 'Customer Shopping Behavior Analysis',
    description: 'Exploratory data analysis and segmentation of customer shopping patterns.',
    shortDescription: 'Customer segmentation through behavioral analysis',
    technologies: ['Python', 'Pandas', 'SQL', 'Matplotlib', 'Power BI'],
    featured: false,
    caseStudy: {
      problem: 'Analyze customer purchasing patterns to identify distinct customer segments.',
      data: {
        source: 'Transaction data',
        features: ['Purchase frequency', 'Average order value', 'Product preferences']
      },
      method: {
        approach: 'EDA followed by clustering'
      },
      results: {
        key: 'Placeholder - Add your results'
      },
      learned: ['Customer insights', 'Data visualization'],
      github: 'https://github.com',
      live: null
    },
    image: '/assets/project-placeholder.svg',
    color: '#059669'
  },
  {
    id: 3,
    number: '03',
    title: 'Transport Management System',
    description: 'Optimization of route planning and resource allocation.',
    shortDescription: 'System design with algorithms and data structures',
    technologies: ['C++', 'Data Structures', 'Algorithms', 'Optimization'],
    featured: false,
    caseStudy: {
      problem: 'Placeholder',
      data: { source: 'Placeholder' },
      method: { approach: 'Placeholder' },
      results: { key: 'Placeholder' },
      learned: ['Placeholder'],
      github: 'https://github.com',
      live: null
    },
    image: '/assets/project-placeholder.svg',
    color: '#d97706'
  },
  {
    id: 4,
    number: '04',
    title: 'Dynamic TOTP QR Authentication System',
    description: 'Secure authentication system using time-based OTP and QR codes.',
    shortDescription: 'Security implementation with authentication protocols',
    technologies: ['Python', 'TOTP', 'QR Codes', 'Authentication'],
    featured: false,
    caseStudy: {
      problem: 'Placeholder',
      data: { source: 'Placeholder' },
      method: { approach: 'Placeholder' },
      results: { key: 'Placeholder' },
      learned: ['Placeholder'],
      github: 'https://github.com',
      live: null
    },
    image: '/assets/project-placeholder.svg',
    color: '#dc2626'
  }
]

export const skillsData = {
  programming: ['Python', 'SQL', 'R', 'C++'],
  data: ['Pandas', 'NumPy', 'Scikit-learn', 'XGBoost'],
  visualization: ['Matplotlib', 'Power BI'],
  machinelearning: ['Regression', 'Classification', 'Time Series', 'Feature Engineering', 'Model Evaluation'],
  mathematics: ['Optimization', 'Linear Algebra', 'Probability', 'Statistics', 'Numerical Methods'],
  tools: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'Google Colab']
}

export const educationData = {
  degree: 'B.Sc. Computational Mathematics',
  institution: 'Kathmandu University',
  location: 'Kathmandu, Nepal',
  highlights: [
    'Computational Mathematics',
    'Statistics',
    'Optimization',
    'Linear Algebra',
    'Numerical Methods',
    'Algorithms',
    'Programming'
  ]
}

export const personalInfo = {
  name: 'Shreeyash Kayastha',
  title: 'Computational Mathematics Student',
  position: 'Aspiring Data Analyst',
  location: 'Kathmandu, Nepal',
  bio: 'I turn mathematical thinking and messy data into clear, actionable insights that make decisions easier to trust and act on.',
  email: 'shreeyash.kayastha@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  resume: '/assets/Shreeyash_Kayastha_CV.pdf'
}

export const recommendations = [
  {
    name: 'Rita Shrestha',
    role: 'Data Mentor',
    quote: 'Shreeyash brings structured thinking to complex analytical problems and turns ambiguity into clear decision-ready insight.'
  },
  {
    name: 'Aashish Poudel',
    role: 'Research Partner',
    quote: 'He connects mathematical rigor with practical analysis and always approaches data with curiosity, discipline, and clarity.'
  },
  {
    name: 'Manish K.C.',
    role: 'Project Collaborator',
    quote: 'A thoughtful analyst who balances technical depth with strong communication and visual storytelling in every project.'
  }
]

export const certifications = [
  { name: 'Data Analytics', source: 'Coursera', accent: '#1f7a5a' },
  { name: 'Machine Learning', source: 'Python', accent: '#1d4ed8' },
  { name: 'Statistics', source: 'Kaggle', accent: '#0f766e' },
  { name: 'SQL', source: 'DataCamp', accent: '#f59e0b' },
  { name: 'Power BI', source: 'Microsoft', accent: '#dc2626' },
  { name: 'Forecasting', source: 'Applied', accent: '#7c3aed' }
]
