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
          { title: "services", 
            href: "/service", 
            items: [
              { title: "AuthService", href: "/auth-service" },
              { title: "BucketService", href: "/bucket-service" },
              { title: "CodigoVerificacaoService ", href: "/codigo-verificacao-service" },
              { title: "EmailService", href: "/email-service" },
              { title: "FirebaseService", href: "/firebase-service" },
              { title: "MensagemService", href: "/mensagem-service" },
              { title: "TermoCondicaoService", href: "/termo-condicao-service" },
              { title: "UsuarioService", href: "/usuario-service" },
            ]
          },
          { title: "entities", 
            href: "/entity", 
            items: [
              { title: "Anexo", href: "/anexo" },
              { title: "CodigoVerificacao", href: "/codigo-verificacao" },
              { title: "Mensagem", href: "/mensagem" },
              { title: "TermoCondicao", href: "/termo-condicao" },
              { title: "Usuario", href: "/usuario" },
              { title: "Contato", href: "/contato" },
              { title: "Endereco", href: "/endereco" },
              { title: "DadosPessoaFisica", href: "/dados-pessoa-fisica" },
              { title: "DadosPessoaJuridica", href: "/dados-pessoa-juridica" },
              { title: "Modulo", href: "/modulo" },
              { title: "Permissao", href: "/permissao" },
              { title: "PessoaPerfil", href: "/pessoa-perfil" },
              { title: "PessoaPerfilAnexo", href: "/pessoa-perfil-anexo" },
              { title: "Presidente", href: "/presidente" },
              { title: "Vinculo", href: "/vinculo" },
            ]
          },
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
