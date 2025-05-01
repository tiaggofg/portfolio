export const projects = [
  {
    name: "Serviço de Prevenção de Fraude",
    site: "https://sentynela.com.br",
    description:
      "Fui responsável pela reestruturação da arquitetura para garantir escalabilidade e resiliência, utilizando Docker, mensageria com RabbitMQ e integração com serviços antifraude de terceiros. Também atuei em melhorias de segurança e organização do código.",
    role: "Desenvolvedor Full stack líder",
    stacks: [
      "Java 11",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "RabbitMQ",
      "AWS (S3, ECS, ECR, EC2)",
      "Jenkins",
      "Grafana",
      "PHP (Yii2)",
    ],
  },
  {
    name: "Serviço de Impressão Remota",
    site: "https://printrouter.magazord.com.br",
    description:
      "Sistema de impressão remota criado para substituir uma solução de terceiros. Desenvolvi uma aplicação desktop em Java que se comunica com o backend via RabbitMQ e WebSocket, permitindo o envio de documentos para impressoras com suporte a múltiplos formatos e instalação automatizada.",
    role: "Desenvolvedor Full stack",
    stacks: [
      "Java 17",
      "RabbitMQ",
      "WebSocket",
      "Docker",
      "AWS CodeBuild",
      "Java Swing",
      "NSIS",
      "Multithread",
    ],
  },
  {
    name: "Otimização de Empacotamento de Pedidos",
    description:
      "Projeto para cálculo de frete e otimização de empacotamento de pedidos. Desenvolvi um algoritmo baseado no método LAFF (Largest Area Fit First) e criei uma aplicação com visualização 3D para estimar o tamanho ideal das caixas.",
    role: "Desenvolvedor Full stack",
    stacks: [
      "Java 11",
      "Vue.js",
      "Javalin",
      "Guice",
      "ThreeJS",
      "Buefy",
      "JUnit5",
      "Hamcrest",
      "Makefile",
    ],
  },
];
