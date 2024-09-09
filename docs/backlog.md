# Documento referente ao Backlog

## 1. Introdução
O Echoeasy, um aplicativo mobile, é uma biblioteca autoral de resumo de diretrizes médicas e artigos cientificos relevantes na área de ecocardiografia (manuais de condutas ou rotinas), de rápida consulta e atualizados constantemente, com fluxos de algoritmos que facilitam o diagnóstico.

Este documento detalha o backlog do projeto Echoeasy, incluindo os requisitos funcionais e não funcionais, as user stories e o backlog de desenvolvimento. O objetivo é fornecer uma visão clara e estruturada das funcionalidades e características que o aplicativo deve possuir, bem como as prioridades e a sequência de desenvolvimento.

## 2. Requisitos Funcionais (RF)
Requisitos funcionais descrevem as funcionalidades e as ações que um sistema ou produto deve ser capaz de executar. Eles detalham as tarefas específicas que este produto deve realizar para atender às necessidades do usuário.

<center>

**Tabela 01** - Requisitos Funcionais

|  N°  |                                           Descrição                                            |
|:----:|:----------------------------------------------------------------------------------------------:|
| RF01 |               O sistema deverá segmentar o conteúdo mostrado por tipo de usuário                |
| RF02 |                    O sistema deverá conter um tipo de usuário administrador                     |
| RF03 |                        O sistema deverá conter um tipo de usuário médico                        |
| RF04 |                        O sistema deverá ser capaz de enviar notificações                        |
| RF05 |                      O sistema deverá verificar o pagamento da assinatura                      |
| RF06 | O sistema deverá restringir o acesso do usuário médico condicionado ao pagamento da assinatura |
| RF07 |                         O sistema deverá ser capaz de gerar relatórios                          |
| RF08 |                 O usuário administrador deverá ser capaz de gerenciar usuários                  |
| RF09 |               O usuário administrador deverá ser capaz de gerenciar os material                |
| RF10 |                O usuário administrador deverá ser capaz de visualizar relatórios                |
| RF11 |           Os usuários (médico e administrador) deverão ser capazes de realizar login            |
| RF12 |          Os usuários (médico e administrador) deverão ser capazes de recuperar a senha          |
| RF13 | Os usuários (médico e administrador) deverão ser capazes de editar suas informações cadastradas |
| RF14 |   Os usuários (médico e administrador) deverão ser capazes de realizar busca em vários níveis   |
| RF15 |                  O usuário médico deverá ser capaz de se cadastrar no sistema                   |
| RF16 |                  O usuário médico deverá ser capaz de visualizar os conteúdos                   |
| RF17 |                    O usuário médico deverá ser capaz de favoritar conteúdos                     |
| RF18 |      O usuário médico deverá ser capaz de utilizar algoritmos para auxílio no diagnóstico       |
| RF19 |                    O usuário médico deverá ser capaz de receber notificações                    |
| RF20 |                  O usuário médico deverá ser capaz de visualizar notificações                   |

</center>

## 3. Requisitos não Funcionais (RnF)
Requisitos não funcionais descrevem características e qualidades do sistema ou produto. Eles estão relacionados a aspectos do URPS+ [5](./referencias) como usabilidade, confiabilidade, desempenho, suportabilidade, restrições de design, requisitos de implementação, requisitos de interface e requisitos físicos.

<center>


**Tabela 02** - Requisitos Não Funcionais

| N°    | Tipo            | Descrição                                                                                                                     |
|:----- |:--------------- |:----------------------------------------------------------------------------------------------------------------------------- |
| RnF01 | Design          | Deve garantir que a aplicação mantenha um estilo de design consistente em toda a interface, incluindo fontes, cores e ícones. |
| RnF02 | Suportabilidade | Deve garantir que a aplicação seja compatível com diferentes tipos de smartphones e tablets                                   |
| RnF03 | Interface       | Deve garantir que haja responsividade, permitindo adaptação da tela em diferentes tipos de smartphones e tablets              |
| RnF04 | Confiabilidade  | Deve garantir que apenas usuários registrados no sistema tenham acesso a aplicação.                                           |
| RnF05 | Implementação   | Deve garantir que haja regras para lidar com que os dados sensíveis inseridos no banco de dados estejam corretos e válidos.   |
| RnF06 | Implementação   | Deve garantir que as rotas  estejam autenticadas                                                                              |
| RnF07 | Desempenho      | Deve garantir que as requisições do servidor não demorem mais que 1 segundo para serem carregados                             |

</center>

## 4. Tema
<center>

**Tabela 03** - Tema

|  N°  |                                               Descrição                                                |
|:----:|:------------------------------------------------------------------------------------------------------:|
| TM01 | T01 Eficiência na gestão de usuários e conteúdos exclusivos, com acesso facilitado a esses conteúdos.  |

</center>

## 5. Epicos
<center>

**Tabela 04** - Epicos

|  N°  |           Descrição            |
|:----:|:------------------------------:|
| EP01 | Gestão de Conteúdos e Usuários |
| EP02 |   Assinatura e Notificações    |

</center>

## 6. Capacidades
<center>

**Tabela 05** - Capacidades

| N°  |             Descrição              |
|:---:|:----------------------------------:|
| C01 |     Gerenciamento de Usuários      |
| C02 |     Gerenciamento de conteúdos     |
| C03 | Acesso a Algoritmos de Diagnóstico |
| C04 |     Gerenciamento de Finanças      |
| C05 |            Notificação             |

</center>



## 7. Features
<center>

**Tabela 06** - Features

| N°  |                    Descrição                    |
|:---:|:-----------------------------------------------:|
| F01 |      Registro de Médicos e Administradores      |
| F02 |         Pesquisa e Listagem de Usuários         |
| F03 |          Edição e Exclusão de Usuários          |
| F04 |           Edição de Perfil de Usuário           |
| F05 |       Login de Médicos e Administradores        |
| F06 |        Criação e Listagem de Documentos         |
| F07 |         Edição e Exclusão de Documentos         |
| F08 | Pesquisa de Conteúdo e Visualização de Material |
| F09 |                   Relatórios                    |
| F10 |              Gestão de Algoritmos               |
| F11 |              Acesso ao Algoritimo               |
| F12 |           Gerenciamento de Assinatura           |
| F13 |           Gerenciamento de pagamento            |
| F14 |             Notificações Agendadas              |
| F15 |         Gerenciamento de notificação            |

</center>



## 8. User Storys (USs)
As user stories são descrições simples e concisas das funcionalidades desejadas do ponto de vista do usuário final. Elas servem como base para a compreensão dos requisitos e expectativas dos usuários em relação ao sistema e segue a estrutura " Como 'cargo', eu gostaria de 'objetivo' para que 'finalidade ". 
<center>

**Tabela 07** - User storys

|  N°  |                                                                                                                                 Descrição                                                                                                                                 |
|:----:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| US01 |                                                                                            Como médico, eu gostaria de me registrar no sistema para ter credenciais de acesso                                                                                             |
| US02 |                                                                                      Como médico, eu gostaria de realizar login no sistema para ter acesso ao conteúdo da plataforma                                                                                      |
| US03 |                                                                                 Como administrador, eu gostaria de realizar login no sistema para ter acesso às funcionalidades de gestão                                                                                 |
| US04 |                                                                          Como usuário (médico ou administrador), eu gostaria de redefinir a minha senha para recuperar as credenciais de acesso                                                                           |
| US05 |                                                                           Como usuário (médico ou administrador), eu gostaria de editar o meu perfil para atualizar as informações cadastradas                                                                            |
| US06 |                                                                                              Como médico, eu gostaria de acessar área de finanças para gerenciar assinatura                                                                                               |
| US07 |                                                                                       Como administrador, eu gostaria de criar outras contas administrador para auxiliar na gestão                                                                                        |
| US08 |                                                                                        Como administrador, eu gostaria de listar usuários para visualizar os usuários cadastrados                                                                                         |
| US09 |                                                                                      Como administrador, eu gostaria de editar um usuário para corrigir eventuais erros de cadastro                                                                                       |
| US10 |                                                                                     Como administrador, eu gostaria de excluir um usuário para retirar eventuais cadastros indevidos                                                                                      |
| US11 |                                                                                  Como administrador, eu gostaria de pesquisar um usuário específico para encontrá-lo com mais facilidade                                                                                  |
| US12 |                                                                                            Como administrador, eu gostaria de criar um documento para adicionar novo material                                                                                             |
| US13 |                                                                                        Como administrador, eu gostaria de listar documentos para visualizar materiais cadastrados                                                                                         |
| US14 |                                                                                             Como administrador, eu gostaria de editar um documento para atualizar um material                                                                                             |
| US15 |                                                                                          Como administrador, eu gostaria de excluir um documento para remover material defasado                                                                                           |
| US16 |                                                                                     Como administrador, eu gostaria de criar um assunto para complementar um documento já cadastrado                                                                                      |
| US17 |                                                                                Como administrador, eu gostaria de listar assuntos para visualizar os assuntos cadastrados em um documento                                                                                 |
| US18 |                                                                                              Como administrador, eu gostaria de editar um assunto para atualizar o material                                                                                               |
| US19 |                                                                                           Como administrador, eu gostaria de excluir um assunto para remover material defasado                                                                                            |
| US20 |                                                                                 Como administrador, eu gostaria de pesquisar um material específico para encontrá-lo com mais facilidade                                                                                  |
| US21 |                                                            Como administrador, eu gostaria de visualizar relatórios sobre os usuários médicos cadastrados para ter insights que auxiliem na tomada de decisão                                                             |
| US22 |                                                                      Como administrador, eu gostaria de visualizar relatórios sobre os conteúdos para ter insights que auxiliem na tomada de decisão                                                                      |
| US23 |                                                                                                Como médico, eu gostaria de acessar um documento para visualizar o material                                                                                                |
| US24 |                                                                               Como médico, eu gostaria de pesquisar um material para encontrar com mais facilidade um documento específico                                                                                |
| US25 |                                                                                   Como médico, eu gostaria de favoritar um material para encontrá-lo com mais facilidade posteriormente                                                                                   |
| US26 |                                                                                             Como médico, eu gostaria de acessar os algoritmos para me auxiliar no diagnóstico                                                                                             |
| US27 |                                                                            Como médico, eu gostaria de acessar notificações para que eu possa estar sempre informado sobre novas atualizações                                                                             |
| US28 |                                                                                     Como administrador, eu gostaria de cadastrar os algoritmos para disponibiliza-los para o usuario                                                                                      |
| US29 |                                                                                   Como administrador, eu gostaria de editar os algoritmos para que eles possam estar sempre atualizados                                                                                   |
| US30 |                                                                                  Como administrador, eu gostaria de excluir os algoritmos para que algoritmos defasados não sejam usados                                                                                  |
| US31 |                                                                 Como médico, eu gostaria de visualizar todos os algoritmos disponíveis para que eu possa escolher o algoritmo adequado para o diagnóstico                                                                 |
| US32 |                                                            Como médico eu gostaria de cadastrar meios de pagamento para que eu possa usar pagamentos usando cartões de credito, debito ou outras formas online                                                            |
| US33 |                                                              Como médico eu gostaria de visualizar meu histórico de pagamentos para que eu possa controlar minhas despesas e verificar pagamentos anteriores                                                              |
| US34 |                                                                           Como médico, eu gostaria de visualizar todas as assinaturas já realizadas para que eu tenha controle das assinaturas                                                                            |
| US35 |                                                                 Como medico gostaria de receber notificações quando minhas assinatura estiver prestes a acabar para poder continuar com minha assinatura                                                                  |
| US36 |                                                                                Como administrador gostaria  de cadastrar notificações importantes para que sejam enviadas para os usuários                                                                                |
| US37 |                                              Como administrador, eu gostaria de enviar uma notificação aos usuários quando um conteúdo novo fosse postado para eles se manterem atualizados                                                                               |

</center>


## 9. Backlog
O backlog do projeto é uma lista abrangente de todas as tarefas, funcionalidades e melhorias planejadas para o aplicativo. Ele serve como uma referência central para o que precisa ser desenvolvido, permitindo que a equipe de desenvolvimento tenha uma visão clara do escopo do projeto e serve como uma lista de funcionalidades que serão priorizadas e selecionadas para o escopo do [MVP](./mvp.md) .
<center>

**Tabela 08** - Backlog

| Tema | Epico                                | Capacidades                      | Features                                              | User Story | Descrição                                                                                                                                           |
|------|--------------------------------------|:---------------------------------|-------------------------------------------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| TM01 | EP01 Gestão de Conteúdos e Usuários  | C01 Gerenciamento de Usuários    | F01 Registro de Médicos e Administradores             | US01       | Como médico, eu gostaria de me registrar no sistema para ter credenciais de acesso                                                                  |
| TM01 | EP01 Gestão de Conteúdos e Usuários  | C01  Gerenciamento de Usuários   | F05 Login de Médicos e Administradores                | US02       | Como médico, eu gostaria de realizar login no sistema para ter acesso ao conteúdo da plataforma                                                     |
| TM01 | EP01 Gestão de Conteúdos e Usuários  | C01 Gerenciamento de Usuários    | F05 Login de Médicos e Administradores                | US03       | Como administrador, eu gostaria de realizar login no sistema para ter acesso às funcionalidades de gestão                                           |
| TM01 | EP01 Gestão de Conteúdos e Usuários  | C01  Gerenciamento de Usuários   | F04  Edição de Perfil de Usuário                      | US04       | Como usuário (médico ou administrador), eu gostaria de redefinir a minha senha para recuperar as credenciais de acesso                              |
| TM01 | EP01  Gestão de Conteúdos e Usuários | C01  Gerenciamento de Usuários   | F04 Edição de Perfil de Usuário                       | US05       | Como usuário (médico ou administrador), eu gostaria de editar o meu perfil para atualizar as informações cadastradas                                |
| TM01 | EP02 Assinatura e Notificações       | C04  Gerenciamento de Finanças   | F12 Gerenciamento de Assinatura                       | US06       | Como médico, eu gostaria de acessar área de finanças para gerenciar assinatura                                                                      |
| TM01 | EP01 Gestão de Conteúdos e Usuários  | C01   Gerenciamento de Usuários  | F01 Registro de Médicos e Administradores             | US07       | Como administrador, eu gostaria de criar outras contas administrador para auxiliar na gestão                                                        |
| TM01 | EP01 Gestão de Conteúdos e Usuários  | C01   Gerenciamento de Usuários  | F02   Pesquisa e Listagem de Usuários                 | US08       | Como administrador, eu gostaria de listar usuários para visualizar os usuários cadastrados                                                          |
| TM01 | EP01 Gestão de Conteúdos e Usuários  | C01   Gerenciamento de Usuários  | F03  Edição e Exclusão de Usuários                    | US09       | Como administrador, eu gostaria de editar um usuário para corrigir eventuais erros de cadastro                                                      |
| TM01 | EP01 Gestão de Conteúdos e Usuários  | C01   Gerenciamento de Usuários  | F03   Edição e Exclusão de Usuários                   | US10       | Como administrador, eu gostaria de excluir um usuário para retirar eventuais cadastros indevidos                                                    |
| TM01 | EP01 Gestão de Conteúdos e Usuários  | C01   Gerenciamento de Usuários  | F02  Pesquisa e Listagem de Usuários                  | US11       | Como administrador, eu gostaria de pesquisar um usuário específico para encontrá-lo com mais facilidade                                             |
| TM01 | EP01 Gestão de Conteúdos e Usuários  | C02  Gerenciamento de conteúdos  | F06  Criação e Listagem de Documentos                 | US12       | Como administrador, eu gostaria de criar um documento para adicionar novo material                                                                  |
| TM01 | EP01 Gestão de Conteúdos e Usuários  | C02  Gerenciamento de conteúdos  | F06  Criação e Listagem de Documentos                 | US13       | Como administrador, eu gostaria de listar documentos para visualizar materiais cadastrados                                                          |
| TM01 | EP01 Gestão de Conteúdos e Usuários  | C02  Gerenciamento de conteúdos  | F07  Edição e Exclusão de Documentos                  | US14       | Como administrador, eu gostaria de editar um documento para atualizar um material                                                                   |
| TM01 | EP01 Gestão de Conteúdos e Usuários  | C02  Gerenciamento de conteúdos  | F07  Edição e Exclusão de Documentos                  | US15       | Como administrador, eu gostaria de excluir um documento para remover material defasado                                                              |
| TM01 | EP01 Gestão de Conteúdos e Usuários  | C02  Gerenciamento de conteúdos  | F06  Criação e Listagem de Documentos                 | US16       | Como administrador, eu gostaria de criar um assunto para complementar um documento já cadastrado                                                    |
| TM01 | EP01 Gestão de Conteúdos e Usuários  | C02  Gerenciamento de conteúdos  | F06  Criação e Listagem de Documentos                 | US17       | Como administrador, eu gostaria de listar assuntos para visualizar os assuntos cadastrados em um documento                                          |
| TM01 | EP01 Gestão de Conteúdos e Usuários  | C02   Gerenciamento de conteúdos | F07 Edição e Exclusão de Documentos                   | US18       | Como administrador, eu gostaria de editar um assunto para atualizar o material                                                                      |
| TM01 | EP01 Gestão de Conteúdos e Usuários  | C02   Gerenciamento de conteúdos | F07  Edição e Exclusão de Documentos                  | US19       | Como administrador, eu gostaria de excluir um assunto para remover material defasado                                                                |
| TM01 | EP01 Gestão de Conteúdos e Usuários  | C02   Gerenciamento de conteúdos | F08   Pesquisa de Conteúdo e Visualização de Material | US20       | Como administrador, eu gostaria de pesquisar um material específico para encontrá-lo com mais facilidade                                            |
| TM01 | EP01  Gestão de Conteúdos e Usuários | C02  Gerenciamento de conteúdos  | F09 Relatórios                                        | US21       | Como administrador, eu gostaria de visualizar relatórios sobre os usuários médicos cadastrados para ter insights que auxiliem na tomada de decisão  |
| TM01 | EP01 Gestão de Conteúdos e Usuários  | C02   Gerenciamento de conteúdos | F09  Relatórios                                       | US22       | Como administrador, eu gostaria de visualizar relatórios sobre os conteúdos para ter insights que auxiliem na tomada de decisão                     |
| TM01 | EP01 Gestão de Conteúdos e Usuários  | C02  Gerenciamento de conteúdos  | F08   Pesquisa de Conteúdo e Visualização de Material | US23       | Como médico, eu gostaria de acessar um documento para visualizar o material                                                                         |
| TM01 | EP01 Gestão de Conteúdos e Usuários  | C02  Gerenciamento de conteúdos  | F08  Pesquisa de Conteúdo e Visualização de Materia   | US24       | Como médico, eu gostaria de pesquisar um material para encontrar com mais facilidade um documento específico                                        |
| TM01 | EP01  Gestão de Conteúdos e Usuários | C02  Gerenciamento de conteúdos  | F08  Pesquisa de Conteúdo e Visualização de Materia   | US25       | Como médico, eu gostaria de favoritar um material para encontrá-lo com mais facilidade posteriormente                                               |
| TM01 | EP01  Gestão de Conteúdos e Usuários | C03  a Algoritmos de Diagnóstico | F11  Acesso ao Algoritimo                             | US26       | Como médico, eu gostaria de acessar os algoritmos para me auxiliar no diagnóstico                                                                   |
| TM01 | EP02 Assinatura e Notificações       | C05  Notificação                 | F14 Notificações Agendadas                            | US27       | Como médico, eu gostaria de acessar notificações para que eu possa estar sempre informado sobre novas atualizações                                  |
| TM01 | EP01 Gestão de Conteúdos e Usuários  | C01 Gerenciamento de Usuários    | F10 Gestão de Algoritmos                              | US28       | Como administrador, eu gostaria de cadastrar os algoritmos para disponibiliza-los para o usuario                                                    |
| TM01 | EP01 Gestão de Conteúdos e Usuários  | C01  Gerenciamento de Usuários   | F10 Gestão de Algoritmos                              | US29       | Como administrador, eu gostaria de editar os algoritmos para que eles possam estar sempre atualizados                                               |
| TM01 | EP01 Gestão de Conteúdos e Usuários  | C01  Gerenciamento de Usuários   | F10 Gestão de Algoritmos                              | US30       | Como administrador, eu gostaria de excluir os algoritmos para que algoritmos defasados não sejam usados                                             |
| TM01 | EP01 Gestão de Conteúdos e Usuários  | C03  a Algoritmos de Diagnóstico | F11  Acesso ao Algoritimo                             | US31       | Como médico, eu gostaria de visualizar todos os algoritmos disponíveis para que eu possa escolher o algoritmo adequado para o diagnóstico           |
| TM01 | EP02 Assinatura e Notificações       | C04  Gerenciamento de Finanças   | F13 Gerenciamento de pagamento                        | US32       | Como médico eu gostaria de cadastrar meios de pagamento para que eu possa usar pagamentos usando cartões de credito, debito ou outras formas online |
| TM01 | EP02 Assinatura e Notificações       | C04  Gerenciamento de Finanças   | F13  Gerenciamento de pagamento                       | US33       | Como médico eu gostaria de visualizar meu histórico de pagamentos para que eu possa controlar minhas despesas e verificar pagamentos anteriores     |
| TM01 | EP02  Assinatura e Notificações      | C04  Gerenciamento de Finanças   | F12  Gerenciamento de Assinatura                      | US34       | Como médico, eu gostaria de visualizar todas as assinaturas já realizadas para que eu tenha controle das assinaturas                                |
| TM01 | EP02 Assinatura e Notificações       | C04   Gerenciamento de Finanças  | F14  Notificações Agendadas                           | US35       | Como medico gostaria de receber notificações quando minhas assinatura estiver prestes a acabar para poder continuar com minha assinatura            |
| TM01 | EP02 Assinatura e Notificações       | C05  Notificação                 | F15 Gerenciamento de notificação                      | US36       | Como administrador gostaria  de cadastrar notificações importantes para que sejam enviadas para os usuários                                         |
| TM01 | EP02 Assinatura e Notificações       | C05   Notificação                | F15  Gerenciamento de notificação                     | US37       | Como administrador, eu gostaria de enviar uma notificação aos usuários quando um conteúdo novo fosse postado para eles se manterem atualizados      |



</center>

## 10. Histórico de Versão 
| Data       | Versão | Descrição                                                                       | Autor(es)                                                                                                                                                                                     |
| :--------- |:------:|:--------------------------------------------------------------------------------| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19/07/2024 | `0.1`  | Criação e Estruturação do documento                                             | [Leandro Almeida](https://github.com/leanars)                                                                                                                                                 |
| 31/07/2024 | `0.2`  | Refatoração dos requisitos funcionais e não funcionais                          | [Alexandre Beck](https://github.com/zzzBECK), [Leandro Almeida](https://github.com/leanars), [Lucas Antunes](https://github.com/LucasGSAntunes) e [Pedro Lucas](https://github.com/lucasdray) |
| 31/07/2024 | `0.3`  | Criação das User Storys e Backlog                                               | [Alexandre Beck](https://github.com/zzzBECK), [Leandro Almeida](https://github.com/leanars), [Lucas Antunes](https://github.com/LucasGSAntunes) e [Pedro Lucas](https://github.com/lucasdray) |
| 08/09/2024 | `0.4`  | Corrigindo estrutura do SAFe e adicionando Tema, Epicos, Features, e User Story | [Tales Rodrigues](https://github.com/TalesRG)|