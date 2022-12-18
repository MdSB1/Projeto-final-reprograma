import { useState } from "react";
import { Header } from "../components/Header";
import styles from "../styles/pages/estacao.module.css";

const list = [
  {
    receita: "Creme de Couve-Flor",
    imagem:
      "https://receitasdefamilia.net/wp-content/uploads/2021/11/Com-fazer-creme-de-couve-flor-com-alho-poro-e1638213582599.jpg",
    ingredientes:
      "Ingredientes: 1/2 couve-flor média, 2 xícaras de água, 1 tablete de caldo de galinha, 1 xícara de leite, 1 colher de azeite, 1 colher de chá de amido de milho, sal a gosto.",
    modoDePreparo:
      "Limpe a couve-floe, lave bem e separe os pedaços. Coloque o caldo em uma panela grande , junte a couve-flor, a água e o azeite. Leve ao fogo em uma anela tampada por 30 minutos. Reserve parte da couve-flor, bata o restante no liquidificador e vote para a panela. Misture o amido de milho com o leite e junte ao caldo fervente, cozinhe por 2 mi nutos. Tempere com sal e enfeite com a couve-for reservada.",
    rendimento: "Rende: 3 porções",
  },

  {
    receita: "Caldo Verde",
    imagem:
      "https://vovopalmirinha.com.br/wp-content/uploads/2019/06/receitas-vovo-palmirinha-caldo-verde.jpg",
    ingredientes:
      "Ingredientes: 6 batatas média descascadas e cortada em cubos, 1 cebola picada, 3 dentes de alho picados, 1 linguiça calabresa picada, 1 1/2 de água fervente, 1 maço de couve manteiga picada bem fina, 4 colheres de azeite de oliva.",
    modoDePreparo:
      "Modo de Preparo: Coloque a lingiuça para fritar com um pouco de azeite e aós isso tire da panela e reserve. Na mesma panela, coloque o alho e a cebola para refogar e em seguida coloque a água fervente e as batatas. Cozinhe por 30 minutos e depois leve para o liquidificador e bata até ficar homogêneo, volte a mistura para a panela e deixe ferver mais um pouco. Por último, acresente a couve e sirva.",
    rendimento: "Rende: 8 porções",
  },
  {
    receita: "Pão de Madioquinha",
    imagem:
      "https://territoriosgastronomicos.uai.com.br/wp-content/uploads/2021/02/20200710184146525252i.jpeg",
    ingredientes:
      "Ingredientes:     ½ kg de mandioquinha salsa cozida e fria, 3 ovos, 50 g de fermento biológico seco, 1 pitada de sal, 1 xícara de açúcar ou a gosto, 500 ml de leite, 1 copo americano quase cheio de óleo, 1 ½ kg de farinha de trigo ou até dar o ponto",
    modoDePreparo:
      "Modo de Preparo: Desmanche o fermento no leite bem morno, quase frio. Acrescente a mandioquinha espremida e os demais ingredientes, amasse bem. Tire um pedacinho da massa, faça uma bolinha e coloque em um copo. Quando essa bolinha subir volte a amassar, enrole os pães e coloque na forma untada e polvilhada com farinha de trigo. Coloque outro pedacinho de massa no copo com água na hora que subir pela segunda vez, aguarde 40 minutos. Pincele com uma gema batida com café e leve ao forno pré-aquecido a uma temperatura de 180°C.",
  },

  {
    receita: "Bolo de Casca de Banana",
    imagem:
      "https://t1.rg.ltmcdn.com/pt/posts/3/2/1/bolo_de_casca_de_banana_123_600.webp",
    ingredientes:
      "Ingredientes: 4 cascas de banana madura, 4 ovos, 2 xícaras (chá) de açúcar, 3 xícaras (chá) de farinha de trigo, 1/2 xícaras (chá) de óleo, 2 colheres (sopa) de manteiga, 1 xícaras (chá) de leite, 2 colheres de fermento em pó, Canela para polvilhar",
    modoDePreparo:
      "Modo de Preparo: Bater no liquidificador as cascas de banana com o leite, óleo, ovos e manteiga, até ficar uma massa homogênea. Em um vasilha misturar o açúcar, a farinha e o fermento em pó, depois acrescentar a massa do liquidificador e misturar até ficar uma massa homogênea. Colocar em uma forma média, polvilhar canela e colocar para assar em forno médio, se quiser pode colocar umas bananas para enfeitar. ",
    rendimento: "Rende: 10 porções",
  },
  {
    receita: "Nhoque de Abóbora",
    imagem:
      "https://img.itdg.com.br/tdg/images/recipes/000/196/584/321153/321153_original.jpg?mode=crop&width=710&height=400",
    ingredientes:
      "Ingredientes:  500 g de abóbora, noz-moscada a gosto, pimenta-do-reino a gosto, sal a gosto1 gema de ovo, 50 g de queijo parmesão ralado,3 colheres (sopa) de farinha de trigo (ou até dar o ponto da massa desgrudar) ",
    modoDePreparo:
      "Modo de Preparo: Corte a abóbora em pedaços e coloque para assar no forno por 45 minutos. Retire a casca da abóbora amolecida. Amasse a poupa da abóbora até formar um purê. Envolva o purê em um pano limpo e esprema para retirar o excesso de líquido, esprema até ficar bem sequinho. Despeje o purê seco em um recipiente e tempere com sal, pimenta e noz-moscada. Acrescente a gema de ovo e o queijo parmesão ralado, misturando para encorporar à massa. Adicione a farinha de trigo aos poucos e com delicadeza. Com auxílio de uma colher, vá retirando pedaços da massa e fazendo bolinhas com as mãos para formar os nhoques. Cozinhe em água fervente até as bolinhas subirem. Servir com molho de sua preferência.",
    rendimento: "Rende: 1 porção",
  },

  {
    receita: "Escondidinho de Mandioca com Carne",
    imagem:
      "https://receitasdetudo.blog.br/wp-content/uploads/2020/07/receita-de-escondidinho-de-carne-moida-com-mandioca-e1595983229881.jpg",
    ingredientes:
      "Ingredientes: 1 Kg de mandioca cozida e espremida, 1 caixa de creme de leite, 1 copo de leite, 1 colher de sopa de manteiga, sal a gosto, 500 gr de carne moída, requeijão cremoso, queijo ralado",
    modoDePreparo:
      "Modo de Preparo: Leve ao fogo a manteiga ,o sal e a mandioca espremida com o copo de leite, mexa bem e depois misture o creme de leite. Reserve. Cozinhe a carne moída, deixe um pouco de caldo, depois misture o milho verde. Coloque um pouco de massa no fundo de uma forma ,depois coloque a carne moída com o requeijão cremoso e o queijo ralado. Coloque o restante da massa e leve ao forno ou micro-ondas ate derreter o queijo. Pronto, agora e só saborear, fica uma delícia.",
    rendimento: "Rende: 6 porções",
  },

  {
    receita: "Sopa de Cenoura",
    imagem:
      "https://t1.rg.ltmcdn.com/pt/posts/3/9/2/sopa_creme_de_cenoura_9293_600.webp",
    ingredientes:
      "Ingredientes: 4 cenouras médias, 1 litro de caldo de galinha, 1 cebola grande, 1 fio de óleo ou azeite1 caixa de creme de leite (opcional), salsinha picada, pimenta do reino, sala gosto.",
    modoDePreparo:
      "Modo de Preparo:Comece preparando os legumes: descasque as cenouras e as cebolas e pique em pedaços. Dica: Se você quiser obter uma sopa de cenoura ainda mais cremosa, prepare também alguns pedaços de batata ou abóbora (200 a 300 g). Leve ao fogo uma panela com um fio de óleo e refogue a cebola até ficar macia. Não precisa dourar a cebola, apenas amolecer um pouco ela. Adicione o caldo de galinha e as cenouras e deixe cozinhar durante 15-20 minutos, ou até as cenouras ficarem macias. Acerte o sabor com sal, depois desligue o fogo e deixe esfriar um pouco. Assim que a sopa tiver esfriado ligeiramente, bata-a com um mixer ou no liquidificador, de forma a obter um creme. Se quiser, nesse momento coloque também o creme de leite (ele ajuda a conseguir uma sopa mais cremosa). Devolva à panela e esquente para servir. Sirva esta sopa de cenoura simples e fácil polvilhada com salsinha fresca e pimenta do reino e diga nos comentários o que você achou. Bom apetite! ",
    rendimento: "Rende: 4 porções",
  },

  {
    receita: "Pudim de Tangerina",
    imagem:
      "https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-pudim-cremoso-tangerina.jpg?quality=85&strip=info&resize=680,453",
    ingredientes:
      "Ingredientes: 1 xícara de açúcar, 1/2 xícara de Água,1 colher de manteiga4 gema de ovo batidas, 1 xícara (chá) de suco de tangerina (ou mexerica), 1 colher (sopa) de farinha de trigo, 2 clara de ovo batidas em neve",
    modoDePreparo:
      "Modo de Preparo:Em uma panela misture o açúcar e a água. Cozinhe no fogo brando, sem mexer, até obter uma calda em ponto de fio. Desligue o fogo, junte a manteiga e mexa bem. Deixe esfriar. Desligue o fogo, junte a manteiga e mexa bem. Deixe esfriar. Quando a calda estiver fria, acrescente as gemas batidas, o suco de tangerina e a farinha de trigo. Misture bem até a farinha dissolver e acrescente delicadamente, as claras em neve. Despeje em uma forma para pudim caramelizada. Asse em banho maria no forno, preaquecido, durante 50 minutos ou até que, espetando um palito saia limpo. Deixe esfriar. Desenforme e leve à geladeira até a hora de servir.",
    rendimento: "Rende: 8 porções",
  },

  {
    receita: "Banoffe",
    imagem:
      "https://cdn.panelinha.com.br/receita/1635255492124-banoffee-receita.jpg",
    ingredientes:
      "Ingredientes:    400 g de doce de leite pronto, 10 bananas cortadas em rodelas, 400 g de nata (chantilly, se preferir), 1 pacote de biscoito maisena triturado, 200 g de margarina, 1 colher de chá de canela em pó para polvilhar.",
    modoDePreparo:
      "Modo de Preparo:    Misture o biscoito triturado (tipo farinha, bem fininho) com a margarina culinária, com a ponta dos dedos, até formar uma massa lisa. Forre o fundo de uma forma de abrir (fundo falso), e asse por apenas 10 minutos, em forno preaquecido a 180°C. Retire. Deixe a massa esfriar. Coloque o doce de leite sobre a massa já fria. Alise para ficar plano. Pique as bananas em rodelas, e distribua-as sobre o doce de leite. Coloque a nata por cima (se preferir, pode batê-la para deixar em ponto de chantilly), e alise. Pegue uma peneira pequena, e espalhe a canela por cima passando-a pela peneira, para que pulverize melhor por toda a torta. Deixe na geladeira por 3 horas antes de desenformar.",
    rendimento: "Rende: 12 porções",
  },

  {
    receita: "Geléia de Morango",
    imagem:
      "https://i0.wp.com/anamariabraga.globo.com/wp-content/uploads/2016/11/geleia-de-morango.jpg?resize=1024%2C576&ssl=1",
    ingredientes:
      "Ingredientes: 450 g de morangos, 1 xícara (chá) de açúcar, Suco de 1/2 limão",
    modoDePreparo:
      "Modo de Preparo: Misture os morangos com o açúcar e o suco de limão em uma panela e leve ao fogo baixo, mexendo sempre, por cerca de 30 minutos ou até que se forme uma calda grossa e os morangos fiquem bem macios.Deixe esfriar, distribua em vidros próprios para geleia esterilizados, tampe bem e armazene na geladeira.",
  },
];

export function Inverno() {
  const [receita, setReceita] = useState();
  return (
    <>
      <Header
        title="Inverno"
        image={"https://cdn-icons-png.flaticon.com/512/1506/1506761.png"}
      />

      <div className={styles.introText}>
        <p>Um dia frio</p>
        <p>Um bom lugar pra ler um livro</p>
        <p>E o pensamento lá em você</p>
        <p>Eu, sem você, não vivo</p>

        <p>Um dia triste</p>
        <p>Toda fragilidade incide</p>
        <p>E o pensamento lá em você</p>
        <p>E tudo me divide</p>
        <p className={styles.credit}>Djavan - Um Dia Frio</p>
      </div>

      <div>
        <h2 className={styles.subTitle}>
          Frutas, Hortaliças e Vegetais de Cada Estação
        </h2>

        <ul>
          <li className={styles.list}>
            <h4 className={styles.categoryList}>Frutas</h4>
            Abacate, abacaxi, ameixa, banana-maçã, banana-nanica, carambola,
            coco verde, figo, framboesa, fruta do conde, goiaba, jaca,
            laranja-pêra, maçã, mamão, maracujá, melancia, nectarina, pêra,
            pêssego, seriguela, tangerina e uva.
          </li>
          <li className={styles.list}>
            <h4 className={styles.categoryList}>Hortaliças</h4>
            Agrião, alho-poró, brócolis, chicória, coentro, couve, couve-flor,
            erva-doce, escarola, espinafre, louro, mostarda, orégano, rúcula e
            salsão.
          </li>

          <li className={styles.list}>
            <h4 className={styles.categoryList}>Vegetais</h4>
            Abóbora, abobrinha, batata doce, cará, cenoura, ervilha, fava,
            inhame, mandioca, mandioquinha, milho verde, nabo, palmito, pepino,
            pimentão e rabanete.
          </li>
        </ul>
      </div>

      <div className={styles.receitasContainer}>
        <div className={styles.cardContainer}>
          <h2 className={styles.subTitle}>Receitas</h2><p className={styles.textOne}>Clique em cima do nome da receita desejada para abri-la:</p>
          {list.map((receita) => {
            return (
              <button onClick={() => setReceita(receita)}>
                {receita.receita}
              </button>
            );
          })}
        </div>
        {receita && (
          <div className={styles.card} key={receita.id}>
            <img className={styles.cardImage} src={receita.imagem} />
            <h1 className={styles.receitaNome}> {receita.receita}</h1>
            <p className={styles.text}>{receita.ingredientes}</p>
            <p className={styles.text}>{receita.modoDePreparo}</p>
            <p className={styles.text}>{receita.rendimento}</p>
          </div>
        )}
      </div>
    </>
  );
}
