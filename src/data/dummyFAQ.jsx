const dummyFAQ = [
  {
    type: "technical",
    title: "Where does the issue with standard security findings come from?",
    description:
      "The issue stems from the OWASP Top 10 and CVE (Common Vulnerabilities and Exposures) findings; the infrastructure module will then refer to the CIS benchmark.",
  },
  {
    type: "technical",
    title: "What programming languages are supported?",
    description:
      "Java (Maven and Gradle), .NET, Golang, Python, PHP, Javascript, Typescript, etc.",
  },
  {
    type: "technical",
    title: "Does i3gis support multi-roles and tenants?",
    description:
      "Yes, i3GIS offers a custom role that can be applied to each user in organization.",
  },
  {
    type: "technical",
    title: "What license management tools does i3GIS offer? ",
    description:
      "SAST GNU Lesser GPL License v3, MAST GNU GPL License v3, and Apache License 2.0.",
  },
  {
    type: "technical",
    title: "What about the update mechanism? ",
    description:
      "Each month, the vulnerability database will be automatically updated. If the i3GIS service is in production, it will be manually updated by the i3 team.",
  },
  {
    type: "technical",
    title: "Is there a specific safety standard for SAST? ",
    description:
      "By default, we offer five Quality Code Filter levels with various security standards.",
  },
  {
    type: "technical",
    title: "Are changelogs and documentation available? ",
    description: "The changelogs is kept in the GitBook.",
  },
  {
    type: "technical",
    title: "How does the i3GIS deployment mechanism work? ",
    description:
      "Currently, i3GIS is using docker-compose, going forward we will use Kubernetes.",
  },
  {
    type: "technical",
    title: "What factors are influencing the current critical high scoring?  ",
    description:
      "It is based on its own calculations depending on the numbers of findings.",
  },
  {
    type: "technical",
    title:
      "Is there a method to clearing our unnecessary files (housekeeping mechanism)? ",
    description:
      "Yes, it is also possible to customize when it will be cleaned.",
  },
  {
    type: "non",
    title: "How does the after-sales mechanism work? ",
    description:
      "There are two types of services: managed services and self-services. Managed services are which we install and maintain, so users simply get the report, while self-service is which we install and provide training, so users operate themselves.",
  },
  {
    type: "non",
    title: "What is the i3GIS model license? ",
    description: "It is an annual subscription system.",
  },
  {
    type: "non",
    title: "Is historical data available for each project? ",
    description: "It is potentially implemented in the near future.",
  },
];

export default dummyFAQ;
