export const HERO_CONTENT = "DevOps Engineer & Cloud Architect passionate about building scalable, secure, and reliable infrastructure. Expertise in Kubernetes, Docker, AWS, CI/CD automation, and Infrastructure-as-Code across banking and enterprise environments.";

export const ABOUT_TEXT = "I'm a DevOps Engineer with 3+ years of experience designing and managing scalable infrastructure solutions. My journey has equipped me with deep expertise in containerization, orchestration, CI/CD pipelines, and cloud platforms. At Amnil Technologies, I architect banking-grade infrastructure, implement security best practices, and lead infrastructure optimization initiatives. I'm passionate about Infrastructure-as-Code, automation, and ensuring systems meet the highest standards of reliability, security, and performance. I work extensively with AWS, Kubernetes, Docker, Terraform, and modern DevOps tools to deliver efficient cloud solutions.";

export const SKILLS = [
  // Cloud
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    category: "cloud",
    level: 90,
  },
  {
    name: "AWS EC2",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/amazon.svg",
    category: "cloud",
    level: 88,
  },
  {
    name: "AWS S3",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/amazon.svg",
    category: "cloud",
    level: 88,
  },
  {
    name: "AWS RDS",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/amazon.svg",
    category: "cloud",
    level: 85,
  },

  // Containers
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "containers",
    level: 95,
  },
  {
    name: "Kubernetes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    category: "containers",
    level: 95,
  },
  {
    name: "Helm",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/helm.svg",
    category: "containers",
    level: 85,
  },

  // Infrastructure
  {
    name: "Terraform",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    category: "infrastructure",
    level: 92,
  },
  {
    name: "Ansible",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original-wordmark.svg",
    category: "infrastructure",
    level: 90,
  },
  {
    name: "CloudFormation",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/awscloudformation.svg",
    category: "infrastructure",
    level: 85,
  },

  // DevOps / CI-CD
  {
    name: "GitLab CI/CD",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    category: "cicd",
    level: 92,
  },
  {
    name: "Jenkins",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-plain.svg",
    category: "cicd",
    level: 85,
  },
  {
    name: "GitHub Actions",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    category: "cicd",
    level: 88,
  },

  // Monitoring & Observability
  {
    name: "Prometheus",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
    category: "monitoring",
    level: 87,
  },
  {
    name: "Grafana",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
    category: "monitoring",
    level: 87,
  },
  {
    name: "ELK Stack",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/elasticsearch.svg",
    category: "monitoring",
    level: 85,
  },
  {
    name: "Loki",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/grafana.svg",
    category: "monitoring",
    level: 82,
  },

  // System Administration
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg",
    category: "sysadmin",
    level: 94,
  },
  {
    name: "Bash Scripting",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    category: "sysadmin",
    level: 90,
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "sysadmin",
    level: 92,
  },
  {
    name: "NGINX",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    category: "sysadmin",
    level: 88,
  },

  // Security
  {
    name: "HashiCorp Vault",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vault.svg",
    category: "security",
    level: 85,
  },
  {
    name: "SSL/TLS",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/ssl.svg",
    category: "security",
    level: 88,
  },
];

export const PROJECTS = [
  {
    title: 'Kubernetes Cluster Migration',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Successfully migrated 50+ microservices from VM-based infrastructure to Kubernetes, improving resource utilization by 40% and reducing operational overhead. Implemented best practices for security, monitoring, and auto-scaling.',
    technologies: ['Kubernetes', 'Docker', 'Helm', 'Terraform', 'AWS EKS'],
    category: 'devops',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'CI/CD Pipeline Automation',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Designed and implemented comprehensive CI/CD pipelines using GitLab CI, reducing deployment time by 60% and enabling 50+ deployments per day with zero-downtime releases. Automated testing, building, and deployment workflows.',
    technologies: ['GitLab CI/CD', 'Jenkins', 'Docker', 'Ansible', 'Git'],
    category: 'devops',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'Observability Platform Implementation',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Built comprehensive monitoring and logging infrastructure using Prometheus, Grafana, and ELK Stack, providing real-time insights into application and infrastructure health across 100+ production servers.',
    technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Loki', 'Kubernetes'],
    category: 'devops',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'Infrastructure as Code Framework',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Implemented Infrastructure-as-Code using Terraform and Ansible, enabling repeatable, version-controlled infrastructure deployments and reducing manual configuration time by 70%. Created reusable modules for AWS resources.',
    technologies: ['Terraform', 'Ansible', 'AWS', 'Git', 'CloudFormation'],
    category: 'devops',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'Security Hardening & Compliance',
    image: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Implemented security best practices across infrastructure including secret management with HashiCorp Vault, SSL/TLS certificates, network policies, and compliance standards for banking-grade applications.',
    technologies: ['HashiCorp Vault', 'SSL/TLS', 'Kubernetes', 'AWS Security', 'Best Practices'],
    category: 'devops',
    githubLink: '',
    websiteLink: '',
  },
  {
    title: 'Cloud Infrastructure Automation',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Led migration of on-premises applications to AWS, designing scalable infrastructure with EC2, RDS, S3, and implemented auto-scaling policies for optimal performance and cost efficiency.',
    technologies: ['AWS', 'EC2', 'RDS', 'S3', 'Terraform', 'CloudFormation'],
    category: 'devops',
    githubLink: '',
    websiteLink: '',
  },
];

export const EXPERIENCES = [
  {
    title: 'Senior DevOps Engineer',
    company: 'Amnil Technologies',
    duration: '2022 - Present',
    description: 'Leading infrastructure automation and cloud architecture initiatives for banking-grade applications.',
    achievements: [
      'Architected and deployed microservices infrastructure using Kubernetes and Docker',
      'Implemented comprehensive CI/CD pipelines reducing deployment time by 60%',
      'Designed and maintained monitoring systems with Prometheus and Grafana',
      'Led infrastructure-as-code initiatives using Terraform and Ansible',
      'Mentored junior team members and established DevOps best practices',
      'Engineered high-availability systems supporting 100+ production servers',
    ],
  },
  {
    title: 'DevOps Engineer',
    company: 'Amnil Technologies',
    duration: '2021 - 2022',
    description: 'Focused on containerization, CI/CD pipeline development, and infrastructure automation.',
    achievements: [
      'Containerized legacy applications and deployed on Kubernetes clusters',
      'Automated infrastructure provisioning using Terraform and CloudFormation',
      'Implemented logging and monitoring solutions with ELK Stack and Prometheus',
      'Developed Ansible playbooks for configuration management',
      'Optimized cloud costs through resource management and automation',
    ],
  },
  {
    title: 'Junior DevOps Engineer',
    company: 'Amnil Technologies',
    duration: '2020 - 2021',
    description: 'Started career in DevOps, learning containerization and infrastructure basics.',
    achievements: [
      'Deployed and maintained Docker containers in production',
      'Supported CI/CD pipeline development and maintenance',
      'Collaborated with development teams on deployment strategies',
      'Documented infrastructure and procedures for team reference',
    ],
  },
];

export const CONTACT_INFO = {
  email: 'bipinnpn6@gmail.com',
  phone: '+977 9867297187',
  location: 'Kathmandu, Nepal',
  github: 'https://github.com/BipinNeupane7',
  linkedin: 'https://linkedin.com/in/bipin-neupane',
  twitter: 'https://twitter.com/bipinnpn',
};

export const STATS = [
  {
    label: 'Servers Managed',
    value: '100+',
  },
  {
    label: 'Years Experience',
    value: '3+',
  },
  {
    label: 'Technologies',
    value: '20+',
  },
  {
    label: 'Deployments',
    value: '500+',
  },
];
