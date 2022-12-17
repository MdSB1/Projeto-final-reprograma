import { useState } from "react";
import { Header } from "../components/Header";
import styles from "../styles/pages/estacao.module.css";

const list = [
  {
    receita: " Nhoque de espinafre",
    imagem:
      "https://storage.googleapis.com/imagens_videos_gou_cooking_prod/production/mesas/2020/02/2df2cfa1-nhoque-de-ricota-e-espinafre-_-tm-marmitas-sauda%CC%81veis-_-beatriz-porciuncula-_-6826-baixa-1.jpg",
    ingredientes:
      "Ingredientes: 1 maço de espinafre,2 pães amanhecidos sem casca,1 ovo 4 colheres (sopa) de queijo ralado, 1 tablete de caldo de galinha, 1/2 xícara (chá) de água , 200g de ricota, 2 1/2xícaras  de farinha de trigo, 5 batatas pequenas ,1 colher (sopa) de margarina, Sal a gosto",
    modoDePreparo:
      "Modo de Preparo: Coloque os pães de molho no leie por uma hora. Leve o espinafre ao fogo baixo ema panela fechada para fevertar. Esprma bem e pique. Numa tigela misture bem a farinha de trigo, a ricota, a margarina, o espinafre os pãesespremidos, o ovo, o caldo de galinha dissolvido na água ,2 colheres de queijo ralado e sal. Amasse bem até ficaruma massa leve e fácil de modelar. Enrole os nhoques. Cozinhe em água com sal. Sirva com o molho de sua preferência.",
    rendimento: "Rende:5 porções",
  },

  {
    receita: "Patê de Tomate",
    imagem:
      "https://s2.glbimg.com/4pEzhojfYSSy6QfIujja4Ail2HQ=/0x0:495x250/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/17/27/29/907/receita_pate_tomate.jpg",
    ingredientes:
      "Ingredientes: 3 colheres de azeite, 5 tomates sem pele ee sem sementes, 3 dentes de alho, 2 ovos cozidos, 1 cenoura grande, 1/2 xícara de azeitona verdes, sal e pimenta a gosto",
    modoDePreparo:
      "Modo de Preparo: Bata tudo no liquidificador, menos as azeitonas. Coloque em uma panela e cozinhe até apurar. Junte as azeitonas picadas e retire do fogo. Sirva friocom torradas ou pães",
    rendimento: "Rende: 21 porções",
  },
  {
    receita: "Suflê de Hortaliças",
    imagem:
      "http://sitiohiromi.com.br/blog/wp-content/uploads/2014/02/receita-sufle-de-cenoura1.jpg",
    ingredientes:
      "Ingredientes: 2 colheres de maragarina, 2 colheres de farinha de trigo, 1 cebola pequena picada, 1 xícara de leite, 3 gemas, 4 colheres de queijo ralado, 3 claras em neve, 1 cenoura média picada, 1/2 de vagem picada, sal a gosto",
    modoDePreparo:
      "Modode Preparo: Frite a cebola an margarina e adicione a farinha de trigo Misture o leite e deixe engrossar.Retire do fogo, adicione as gema, o sal o queijo ralado e as hortaliças. Deixe esfriar. Junte as claras em neve. Coloque em forma untada e polvilhe o queijo ralado.Asse em forno médio.",
    renidmento: "Rende: 5 Porções",
  },

  {
    receita: "Tomates Verdes Fritos",
    imagem:
      "https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-tomates-verdes-fritos.jpg?quality=85&strip=info&resize=680,453",
    ingredientes:
      "Ingredientes: 6 fatias de bacon, óleo, o quanto for necessário para fritar, 1/2 xíacara de fubá, 3 colheres de queijo ralado, 1 colher de sal, 5 tomates verdes médios sem sementes, cortado em rodelas médias",
    modoDePreparo:
      "Modo de Ppreparo: Numa frigideira, coloque as fatis de bacon, leve ao fogo médio e frite até ficarem bem crocantes. Retine e deixe escorrer sobre papel absorvente e reserve. Numa travessa, junte o fubá, o queijo ralado, o sal e pimenta, e misture. Passe metade das rodelas nessa mistura, pressionando para ficarem bem recobertas. Aqueça o óleo em fogo médio frite até dourarem, e coloque para escorrerem em palem toalha. Povilhe o bacon esfarelado e sirva imediatamente.",
    rendimento: "Rende: 6 porções",
  },
  {
    receita: " Bolinho de Repolho Roxo",
    imagem:
      "https://static.wixstatic.com/media/3e5a89_30c2f61695564b00be2cfd92c4d9d4ea~mv2_d_2576_2412_s_4_2.jpg/v1/fill/w_640,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3e5a89_30c2f61695564b00be2cfd92c4d9d4ea~mv2_d_2576_2412_s_4_2.jpg ",

    ingredientes:
      "Ingredientes: 1 repolho médio ,2 ovos, 5 colheres de farinha de trigo, 1 cebola média picada, sal e pimenta a gosto, óleo para fritar",
    modoDePreparo:
      "Modo de Preparo: Bata as claras em neve, junte as gemas e os demais ingredientes. Acresente o repolho picadinho e, mexa. Frite em colheradas em óleo quente.",
    rendimento: "Rende: 8 porções",
  },

  {
    receita: "Hambúrger de abobrinha",
    imagem:
      "https://www.culinariapravaler.com/image/postagens/2020/06/hamburguer-de-abobrinha-incrivelmente-delicioso-e-saudavel.htmlwebp",
    ingredientes:
      "Ingredientes: 2 abobrinhas raladas, 2 dentes de alho amassados, 8 colheres de farinha de trigo, 1 colher de sopa de maionese, salsa a gosto, sal a gosto",
    modoDePreparo:
      "Modo de Preparo: Em uma tigela misture todos os ingredientes e tempere com sal. Modele os hamburgeres e frite dos dois lados em frigideira untada.",
    rendimento: "Rende: 4 porções",
  },

  {
    receita: " Mousse de Melão",
    imagem:
      "https://i.pinimg.com/736x/f6/55/28/f65528b0e47a1f79a121dc2565531f7e--melons-mousse-dessert.jpg",
    ingredientes:
      "Ingredientes: xícaras de polpa de melão cortado em cubos, 1 envelope de gelatina em pó sem sabor, 1/4 de xícarade água, 1 1/2 de iogurte natural sem sabor, 1 1/2 de açucar, 3  claras batidas",
    modoDePreparo:
      "Mdo de Preparo: Bata a polpa do melão até obet um purê homogênio e reserve. Numa panela médiaa, mistura a gelatina com a água e deixe amolecer por 5 minutos depois coloque no fogo atéa gelatina se dissolver .Acrescente o iorgute, a istura de melão o açucar e mexa bem. Despeje em uma tigela e coloque-a numa vasilha grande com água e cubos de gelo e mexa até começar a firmar. Junte as claras delicadamente . E coloque o mousse ou em um refratário grande ou em pequenas formas e coloque na geladeira por no mínimo 4 horas. Sirva gelado.",
    rendimento: "Rende: 8 porções",
  },
  {
    receita: "Torta de pêssego",
    imagem:
      "https://www.casalmisterio.com/wp-content/uploads/2022/10/21679812_A49zH.jpg",
    ingredientes:
      "Ingredientes: 2 pessegos, 1 colher de margarina, 1/2 colher de canela em pó, 5 colheres de açucar, 5 colheres de farinha de trigo",
    modoDePreparo:
      "Modo de Preparo: Corte os pêssegos rm fatias e coloque- os em uma forma. Misture o açucar, a canela, a margarina, a farinha de trigo e mexa tudo com as mãos mas ainda deixando uns pedaços de manteiga.Despeje a mistura por cima dos pêssegos fatiados. Coloque para assar em forno médio de 15 a 20 munitos ou até dourar.",
    rendimento: "Rende: 7 porções.",
  },
  {
    receita: "Pimentão Recheado",
    imagem:
      "https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/10f32cf898f5c39bd76b73a4948b39ac.jpg.webp?itok=gTJFvJqi",
    ingredientes:
      "Ingredientes: 6 pimentões amarelos, 3 colheres (sopa) de bacon picado, 1 cebola picada, 2 dentes de alho picados, 1 quilo de carne moída, 2 tomates picados, 1 xícara (chá) de água, 4 colheres (sopa) de farinha de trigo, 4 colheres (sopa) de cheiro-verde picado, 1 fio de azeite",
    modoDePreparo:
      "Corte os pimentões ao meio e retire as sementes. Reserve. Em uma panela, doure o bacon, em sua própria gordura. Acrescente a cebola e o alho e refogue. Adicione a carne moída,  e refogue até secar toda a água. Junte os tomates e a água. Misture bem. Cozinhe por cerca de 10 minutos. Polvilhe a farinha de trigo e cozinhe por cerca de 2 minutos. Finalize com o cheiro verde. Recheie as metades dos pimentões com a carne e distribua em uma assadeira untada com azeite e regue com o azeite. Asse em forno médio (180°C), preaquecido, por cerca de 30 minutos. Sirva.",
    rendimento: "Rende: 6 porções",
  },

  {
    receita: "Couve Flor Gratinada",
    imagem:
      "https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/5e38f6b12a27508f05a04cd9124bdf08.jpg.webp?itok=jCeqwS3Q",
    ingredientes:
      "1 couve-flor grande, limpa, 2 colheres  de sal, 2 colheres de manteiga1 e meia colher (sopa) de farinha de trigo, 500 ml de leite, 1 caixa de creme de leite, 2 colheres (sopa) de queijo parmesão ralado",
    modoDePreparo:
      "Separe a couve-flor em buques, lave bem e cozinhe em água fervente, com 1 colher (chá) de sal, por cerca de 10 minutos ou até ficar macia. Escorra e passe para um recipiente refratário médio (20 cm x 30cm). Reserve. Em uma panela, derreta a manteiga, acrescente a farinha de trigo e deixe dourar, mexendo sempre. Quando adquirir a consistência de massa, coloque o Leite NINHO, aos poucos, mexendo sempre, até engrossar. Adicione o creme de leite e o restante do sal e misture bem.Espalhe sobre a couve-flor reservada e polvilhe o queijo parmesão ralado. Leve ao forno médio-alto (200°C), preaquecido, por cerca de 15 minutos ou até gratinar. Sirva a seguir.",
    rendimento: "Rende: 6 porções",
  },
];

export function Primavera() {
  const [receita, setreceita] = useState();
  return (
    <>
      <Header
        title="Primavera"
        image={"https://cdn-icons-png.flaticon.com/512/3095/3095028.png"}
      />

      <div className={styles.introText}>
        <p>Quando entrar setembro</p>
        <p>E a boa nova andar nos campos</p>
        <p>Quero ver brotar o perdão</p>
        <p>Onde a gente plantou</p>
        <p>Juntos outra vez</p>

        <p>Já sonhamos juntos</p>
        <p>Semeando as canções no vento</p>
        <p>Quero ver crescer nossa voz</p>
        <p>No que falta sonhar</p>

        <p>Já choramos muito</p>
        <p>Muitos se perderam no caminho</p>
        <p>Mesmo assim não custa inventar</p>
        <p>Uma nova canção</p>
        <p>Que venha nos trazer</p>
        <p>Sol de primavera</p>
        <p>Abre as janelas do meu peito</p>
        <p>A lição sabemos de cor</p>
        <p>Só nos resta aprender</p>

        <p className={styles.credit}>Sol de Primavera - Paulo Guedes</p>
      </div>

      <div>
        <h2 className={styles.subTitle}>
          Frutas, Hortaliças e Vegetais de Cada Estação
        </h2>

        <ul>
          <li className={styles.list}>
            <h4 className={styles.categoryList}>Frutas</h4>
            Abacaxi, ameixa, acerola, banana-nanica, banana-prata, caju, cereja,
            coco-verde, damasco, figo, framboesa, graviola, jaca, jabuticaba,
            kiwi, laranja-pêra, limão, lichia, maçã, mamão, manga, maracujá,
            melancia, melão, nectarina, pêssego, romã, tangerina e uva.
          </li>

          <li className={styles.list}  >
            <h4 className={styles.categoryList}>Hortaliças</h4>
            Alho-poró, almeirão, brócolis, catalonha, cebolinha, chicória,
            coentro, couve-flor, endívia, erva-doce, espinafre, folha de uva,
            hortelã, mostarda, orégano, rúcula, salsa e salsão.
          </li>

          <li className={styles.list}>
            <h4 className={styles.categoryList}>Vegetais</h4>
            Abóbora, abobrinha, alcachofra, aspargos, batata doce, berinjela,
            beterraba, cenoura, cogumelo, ervilha, fava, inhame, maxixe, nabo,
            pepino, pimentão, rabanete, tomate, tomate, tomate-caqui e vagem
            macarrão.
          </li>
        </ul>
      </div>

      <div className={styles.receitasContainer}>
        <div className={styles.cardContainer}>
          <h2 className={styles.subTitle}>Receitas</h2>
          {list.map((receita) => {
            return (
              <button onClick={() => setreceita(receita)}>
                {receita.receita}
              </button>
            );
          })}
        </div>
        {receita && (
          <div className={styles.card} key={receita.id}>
            <h1 className={styles.receitaNome}> {receita.e}</h1>
            <img className={styles.cardImage} src={receita.imagem} />
            <p className={styles.textTitlle}>{receita.receita}</p>
            <p className={styles.text}>{receita.ingredientes}</p>
            <p className={styles.text}>{receita.modoDePreparo}</p>
            <p className={styles.text}>{receita.rendimento}</p>
          </div>
        )}
      </div>
    </>
  );
}
