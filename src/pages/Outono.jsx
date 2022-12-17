import { useState } from "react";
import { Header } from "../components/Header";
import styles from "../styles/pages/estacao.module.css";

const list = [
  {
    receita: "Frango Assado Com Suco De Laranja",
    imagem:
      "https://i0.wp.com/panelaterapia.com/wp-content/uploads/2016/01/foto1.jpg?fit=640%2C431&ssl=1",
    ingredientes:
      "Ingredientes: 1 kg de frango, 1 xícara de suco de laranja, 1 colher de sal, 1 colhre de mostarda, 1 colher de páprica, 1 colher de casca de laranja ralada, 1 cebola ralada, 1/2 xícara de azeite",
    modoDePreparo:
      "Modo de Preparo: Faça um molho com todos os ingredientes e tempere o frango. Assem em forno pré aquecido por aproximadamente 1 hora, regando sempre com o própio molho.",
    rendimento: "Rende: 7 porções",
  },

  {
    receita: "Moussaka",
    imagem:
      "https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2021/04/best-moussaka-recipe.jpg",
    ingredientes:
      "Ingredientes: 1kd de beringela cortada em fatias finaas,  2 colheres de azeire, 1/2 de carne moída, 7 tomates médios semp pele cortadoem rodelas, 2 tabletes de caldo de carne, 1 colher de chá de orégano, 2 colheres de cebolinha, margarina pra untar, sal, 2 xícaras de molho branco, 150g de mussarela ",
    modoDePreparo:
      "Modo de Preparo: Povilhe as fatis de berinjela com sal, deixe descansar em um ecorredor por 30 minutos. Enxugue com papel toalha, espremendo ligeiramente. Frite a carne moídano azeite até dourar. em outra panela, junte o tomate , o caldo de carne, o oréganoi e a cebolinha. Cozinhe em fogo brando durante 15 minutos, mexendo de vez em uando até obter um molho gosso. unte uma forma refratária com margarina e alterne as camadas de berinjela, carne moída e molho, coloque o molho por cima e depois a mussarela e leve ao forno médio (180°C) por 20 minutos ou até dourar.",
    rendimento: "Rende: 10 porções",
  },

  {
    receita: "Bolo Miscelânia de Legumes",
    imagem:
      "https://www.comidaereceitas.com.br/wp-content/uploads/2022/10/Bolo-de-legumes-ao-forno-freepik-250x167.jpg",
    ingredientes:
      "11/2 de farinha de trigo, 1/2 xícara de leite, 1/2 de óleo, 2 ovos, 2 cubinhos de caldo de galinha, 2 colheres de fermento em pó, 1 1/2 de legumes cozidos (1 cenoura, 1/2 chuchu, 1/2 xícara de vagem), 1 toamte picado, 1/2 pimentão picado",
    modoDePreparo:
      "Modo de POreparo: Bata os 6 primeiros ingredientes no liquidificador, pique os legumes em cubinhos, junte o tomate e o pimentão e misture bem. Coloquenuma forma untada e enfarinhada. Leve ao forno médio por 45 minutos. ",
    rendimento: "Rende: 13 porções",
  },

  {
    receita: "Macarrão ao Molo de Berinjela",
    imagem: "https://pubimg.band.uol.com.br/files/97468a32cbbc1facf69c.png",
    ingredientes:
      "2 berinjelas médias em cubos, 1/4de azeite, 2 cubos de caldo de galinha, 1 colher de margarina, 3 colheres de farinha de trigo, 2 xícaras de leite, 1 prato findo de macarrão cozido em água e sal, 4 colheres de sopa de queijo ralado",
    modoDePreparo:
      "Coloque a berinjela de molho em água fria e vinagre para titrar so sabor amargo, por cerca de 30 minutos . Esprema bem e frite no óleo quente. Junte o caldo de galinha dissolva em água, e cozinhe em fogo baixo por cerca de 20 minutos. À parte derreta a margarina e povilhe a farinha de trigo, deixetostar ligeiramente e acrescente o leite, aos poucos, mexendo bem após cada adição, até obter um molhop espesso e acrescente a berinjela. Coloque o macarrão num refratário, cubra com a berinjela e povilhe o queijo ralado. Leve ao forno médio por cerca de 15 minutos",
    rendimento: "Rende: 3 porções",
  },

  {
    receita: "Bombocado de Mamão",
    imagem:
      "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2020/03/31/bolo-pudim-de-mamao.jpg",
    ingredientes:
      "Ingredientes: 1 xícara de açucar, 3/4 de água, 2 colheres de amido de milho, 3 colheres de margarina, 2 gemas, 4 ovos inteiros, 2 xíacras de mamão",
    modoDePreparo:
      "Modo de Preparo: Coloqueem uma panela a água e o açucar, fazerndo uam calda em ponto de fia. Adicione a margarina e mexa bem até esfriar. Em outra tigela amasse o mamão com um garfo e adicione maisena. Acrescente a calda á massa de mamão. junte as claras e os ovo um a um. Bata bem . Despeje em form auntada. Asse em forno médio por aproximadamente 35 minutos",
    rendimento: "Rende: 10 porções",
  },

  {
    receita: "Chá especial",
    imagem:
      "https://www.receiteria.com.br/wp-content/uploads/receitas-de-cha-de-mac%CC%A7a-com-canela-0.jpg",
    ingredientes:
      "1 litro de água, pedaços de canela, 4 cravos,  1 maçã descascada, 2 saquinhos de chá mate, açucar a goso",
    modoDePreparo:
      "Leve para ferver a água com a acanela o cravo e a maçã. Por último coloque os saquinhos de chá mate, desligue o fogo e abafe",
    rendimento: "Rende: 5 porções",
  },

  {
    receita: "Croquete de madioca com frango",
    imagem:
      "https://guiadacozinha.com.br/wp-content/uploads/2020/07/croquete-de-frango-com-mandioca.jpg",
    ingredientes:
      "Ingredientes: 4 colheres (sopa) de manteiga, 1/2 cebola picada, 4 colheres (sopa) de farinha de trigo, 2 xícaras (chá) de leite, 2 xícaras (chá) de frango cozido e desfiado, 2 xícaras (chá) de mandioca cozida e amassada, 1/2 xícara (chá) de cheiro-verde picado, sal e pimenta-do-reino a gosto, farinha de trigo para empanar, óleo para fritar",
    modoDePreparo:
      "Aqueça uma panela com a manteiga e frite a cebola até murchar. Adicione a farinha e frite rapidamente. Despeje o leite, aos poucos e cozinhe até engrossar, mexendo sempre. Acrescente o frango, a mandioca cozida e amassada, o cheiro-verde, sal e pimenta e cozinhe até engrossar bem. Desligue, transfira para uma travessa e leve à geladeira por 2 horas. Pegue porções da massa, forme os croquetes e passe por farinha de trigo. Frite, aos poucos, em óleo quente até dourar. Escorra e sirva em seguida.",
    rendimento: "Rende: 35 unidades",
  },

  {
    receita: "Mousse de abacate com Chocolate",
    imagem:
      "https://i0.wp.com/xtudoreceitas.com/wp-content/uploads/receita-facil-de-mousse-chocolate-e-abacate.jpg?resize=300%2C208&ssl=1",
    ingredientes:
      "Ingredientes: 4 colheres de sopa de mel, 2 unidades de abacates pequenos, 100 gramas de chocolate meio amargo em pedaços, 4 colheres de sopa de cacau em pó, 3 colheres de chá de óleo de coco",
    modoDePreparo:
      "Modo de Preparo: Em uma panela, derreta o chocolate meio amargo junto com o óleo de coco e o mel por cerca de 5 minutos em fogo médio. Coloque no processador de alimentos os abacates e o cacau em pó e processe. Adicione o chocolate derretido e deixe processando mais um pouco até ficar homogêneo. Leve à geladeira. Sirva gelado.",
    rendimento: "Rende: 2 porções",
  },

  {
    receita: "Purê de Abóbora",
    imagem:
      "https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/a363d5a1d72c0761e3e68f96fafd6887.jpg.webp?itok=F75bhglM",
    ingredientes:
      "Ingredientes: 500 g de abóbora picada, 1 tablete de Caldo Legumes, 1 xícara (chá) de água, meia colher (sopa) de manteiga, 1 colher (sopa) de salsa picada",
    modoDePreparo:
      "Modo de Preparo: Em uma panela, coloque a abóbora e o MAGGI Caldo dissolvido na água, e deixe cozinhar até secar a água. Retire do fogo e amasse com um garfo ou passe pelo espremedor. Junte a manteiga, e leve ao fogo novamente por cerca de 10 minutos. Polvilhe a salsa e sirva a seguir.",
    rendimento: "Rende: 4 porções",
  },

  {
    receita: "Bolo de Laranja",
    imagem:
      "https://img.itdg.com.br/tdg/images/recipes/000/134/750/358649/358649_original.jpg?mode=crop&width=710&height=400",
    ingredientes:
      "Ingredientes: 4 ovos, suco de 2 laranjas, 1 xícara (chá) de óleo, 2 xícaras de farinha de trigo bem cheias, 1 xícara de açúcar bem cheia, 1 colher (sopa) de fermento bem cheia, raspas de laranja",
    modoDePreparo:
      " Modo de Preparo:     Bata no liquidificador os ovos, o suco de laranja e o óleo. Em seguida adicione o trigo e o açúcar e misture bem até obter uma mistura homogênea. Adicione por último o fermento, mexa por mais alguns minutos e disponha a massa em uma forma com furo central untada e enfarinhada. Asse em forno médio (180° C), preaquecido, por 40 minutos e está pronto.",
    rendimento: "Rende: 25 porções",
  },
];

export function Outono() {
  const [receita, setReceita] = useState();
  return (
    <>
      <Header
        className={styles.outonoTitle}
        title="Outono"
        image={"https://cdn-icons-png.flaticon.com/512/661/661289.png"}
      />

      <div className={styles.introText}>
        <p>No outono é sempre igual</p>
        <p>As folhas caem no quintal</p>
        <p>Só não cai o meu amor</p>
        <p>Pois não tem jeito, é imortal</p>
        <p className={styles.credit}>Sandy & Junior - As Quatro Estações</p>
      </div>

      <div>
        <h2 className={styles.subTitle}>
          Frutas, Hortaliças e Vegetais de Cada Estação
        </h2>

        <ul>
          <li className={styles.list}>
            <h4 className={styles.categoryList}>Frutas</h4>
            Abacate, ameixa, banana-maçã, carambola, jaca, kiwi, laranja-lima,
            maçã, mamão, pêra, tangerina e uva.
          </li>

          <li className={styles.list}>
            <h4 className={styles.categoryList}>Hortaliças</h4>
            Agrião, alface, alho poró, almeirão, brócolis, escarola, erva-doce,
            louro, nabo e repolho.
          </li>

          <li className={styles.list}>
            <h4 className={styles.categoryList}>Vegetais</h4>
            Abóbora, abobrinha, batata doce, berinjela, beterraba, cará,
            cenoura, chuchu, gengibre, inhame, mandioca, mandioquinha, milho
            verde, nabo, pepino, rabanete, palmito e tomate.
          </li>
        </ul>
      </div>

      <div className={styles.introText}></div>
      <div className={styles.receitasContainer}>
        <div className={styles.cardContainer}>
          <h2 className={styles.subTitle}>Receitas</h2>
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
            <h1 className={styles.receitaNome}> {receita.e}</h1>
            <img className={styles.cardImage} src={receita.imagem} />
            <p className={styles.text}>{receita.receita}</p>
            <p className={styles.text}>{receita.ingredientes}</p>
            <p className={styles.text}>{receita.modoDePreparo}</p>
            <p className={styles.text}>{receita.rendimento}</p>
          </div>
        )}
      </div>
    </>
  );
}
