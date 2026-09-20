export const RESUME_URL =
  'https://drive.google.com/file/d/1vxjxSlcWXBEYkJsPaSny9TXn_AJswCe3/view?usp=sharing'

export const LINKS = {
  github: 'https://github.com/sukitha995',
  linkedin: 'https://www.linkedin.com/in/sukitha-kothuru/',
  email: 'mailto:SUKITHA.kothuru@gmail.com',
  emailDisplay: 'SUKITHA.kothuru@gmail.com'
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
]

export const SKILL_GROUPS = [
  {
    title: 'Languages',
    icon: 'code',
    skills: ['Java', 'Python', 'JavaScript', 'SQL']
  },
  {
    title: 'Frameworks / Libraries',
    icon: 'layers',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'TabNet', 'PyTorch', 'XGBoost']
  },
  {
    title: 'Cloud & DevOps',
    icon: 'cloud',
    skills: ['Azure (Data Fundamentals)', 'GitHub Actions', 'ThingSpeak', 'Google Colab']
  },
  {
    title: 'Data / AI',
    icon: 'brain',
    skills: [
      'SHAP',
      'ETL',
      'RFM Analysis',
      'Natural Language Processing (NLP)',
      'TF-IDF Vectorization',
      'K-Means Clustering'
    ]
  }
]

export const PROJECTS = [
  {
    number: '01',
    icon: 'phone',
    title: 'Telecom Customer Churn Prediction System',
    description:
      'Built a predictive machine learning system using an XGBoost & Random Forest voting ensemble to identify high-risk subscribers, achieving an 85.8% ROC-AUC. Integrated TabNet deep learning and SHAP analysis to decode critical churn drivers.',
    tech: ['Python', 'TabNet', 'XGBoost', 'SHAP', 'Pandas'],
    github: 'https://github.com/sukitha995/Customer-Churn-Prediction-in-Telecom-'
  },
  {
    number: '02',
    icon: 'pie',
    title: 'Online Customer Segmentation using RFM & K-Means',
    description:
      'Executed data mining and customer profiling via RFM metrics and standard scaling. Applied the Elbow Method with K-Means clustering to distinguish unique customer segments, translating high-ticket behavior into interactive Power BI marketing dashboards.',
    tech: ['Python', 'K-Means', 'RFM Analysis', 'Power BI', 'Scikit-learn'],
    github: 'https://github.com/sukitha995/Online-Customer-Segmentation'
  },
  {
    number: '03',
    icon: 'heart',
    title: 'IoT-Based Smart Health Monitoring Prototype',
    description:
      'Engineered an end-to-end hardware-to-cloud telemetry engine utilizing Arduino Uno, Raspberry Pi, and PySerial to calculate real-time BPM and environmental variables. Structured a REST API connector streaming values to ThingSpeak with automated bradycardia/tachycardia alerts.',
    tech: ['C++', 'Python', 'Arduino', 'Raspberry Pi', 'ThingSpeak', 'REST API'],
    github: 'https://github.com/sukitha995/IoT-Based-Smart-Health-Monitoring'
  },
  {
    number: '04',
    icon: 'utensils',
    title: 'Diet Recommendation System',
    description:
      'Structured data schemas and algorithmic processing architectures to serve dynamic health and dietary recommendations based on user macro targets. Separated structural code across a dedicated backend and frontend framework wrapper.',
    tech: ['Python', 'JavaScript', 'Web Development'],
    github: 'https://github.com/sukitha995/Diet-Recommendation-System'
  },
  {
    number: '05',
    icon: 'news',
    title: 'Fake News Detection Engine',
    description:
      'Configured natural language processing pipelines using TF-IDF text vectorization to classify informational integrity. Evaluated Logistic Regression, Naive Bayes, and Random Forest architectures alongside visual WordCloud insights.',
    tech: ['Python', 'NLP', 'TF-IDF', 'Scikit-Learn', 'Matplotlib'],
    github: 'https://github.com/sukitha995/Fake-News-Detection'
  },
  {
    number: '06',
    icon: 'chart',
    title: 'Amazon Sales Power BI Dashboard',
    description:
      'Processed transactional datasets to model revenue shifts and order metrics using Excel preprocessing. Created multidimensional reports plotting categorical distributions, geometric sales weights, and seasonal profit quarters.',
    tech: ['Power BI', 'Excel', 'Data Visualization', 'ETL'],
    github: 'https://github.com/sukitha995/Amazon-Sales-DashBoard'
  }
]

export const EDUCATION = [
  {
    period: 'Aug 2022 - May 2026',
    title: 'B.Tech in Computer Science',
    org: 'Vellore Institute of Technology, AP',
    detail: 'GPA: 8.57/10'
  },
  {
    period: 'Aug 2020 - May 2022',
    title: '12th Standard (BIEAP MPC)',
    org: 'Sarada Educational Institute, AP',
    detail: '94.8%'
  },
  {
    period: 'Jun 2019 - Mar 2020',
    title: '10th Standard',
    org: 'Good News English Medium High School, AP',
    detail: '98.83%'
  }
]

export const ACHIEVEMENTS = [
  {
    badge: 'Finalist (Top 8 out of 148 teams)',
    detail: 'VLaunch Agri-Tech Innovation Competition'
  },
  {
    badge: 'Top 10',
    detail: 'ALEAP Hackathon 2024 (IoT-based remote health monitoring recognition)'
  },
  {
    badge: 'Certified',
    detail: 'Microsoft Azure Data Fundamentals (DP-900)'
  },
  {
    badge: 'Certified',
    detail: 'Oracle Java Foundation Associate & Oracle Generative AI Professional'
  }
]

export const HIGHLIGHT_AREAS = [
  { text: 'Software Engineering', icon: 'code' },
  { text: 'AI / Machine Learning', icon: 'brain' },
  { text: 'Data Analytics', icon: 'chart' },
  { text: 'Cloud Computing', icon: 'cloud' }
]