// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Overview do projeto",
    href: "/overview",
    noLink: true,
    items: [
      { title: "Introdução", href: "/introduction" },
      {
        title: "Inicialização",
        href: "/initialization",
      },
      {
        title: "Estrutura do projeto",
        href: "/project-structure",
        items: [
          {
            title: "controllers",
            href: "/controller",
            items: [
              { title: "HealthCheckController", href: "/health-check-controller" },
              { title: "TermoCondicaoController", href: "/termo-condicao-controller" },
              { title: "UsuarioController", href: "/usuario-controller" },
              { title: "AuthController", href: "/auth-controller" },
            ]
          },
          { title: "services", href: "/service" },
          { title: "entities", href: "/entity" },
        ],
      },
      {
        title: "Configuração",
        href: "/configuration",
        items: [
          { title: "Configuração do banco de dados", href: "/database-configuration" },
          { title: "Configuração do servidor", href: "/server-configuration" },
        ],
      },
      {
        title: "Contribuidores",
        href: "/contributors",
      }
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
