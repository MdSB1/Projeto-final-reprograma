import { useState } from "react";
import { Header } from "../components/Header";
import styles from "../styles/pages/estacao.module.css";

const list = [
  {
    receita: " Salada de Pepino com Creme",
    imagem:
      "https://stories.agazeta.com.br/gastronomia/salada-refrescante-de-pepino-e-iogurte-0122/assets/28.jpeg",
    ingredientes:
      "Ingredientes: ! caixinha de creme de leite, 2 colheresde suco de limão, 1 colher de sopa de mostarda, 2 pepinos grandes ou 3 médios, sal a gosto",
    modoDePreparo:
      "Mmodo de Preparo: Misture bem o creme de leite com o suco de limão, o sal, a mnostarda. Descasque os pepinos, corte-os em rodelas finas e tempere com sal. Arrume os pepinos em uma trevessa e cubra com o creme a seguir",
    rendimento: "Rende: 5 porções",
  },
  {
    receita: " Salada de Beterraba",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSChq6QFxUwIOVgTvHprUyNPGFoj9916tDPkg&usqp=CAU",
    ingredientes:
      "Ingredientes: 1 beterraba grande, 1 cebola pequena cortada em rodelas, 2 cravos-da-índia, 1 folha de louro, 5 coheresde azeite, 3 colheres de vinagre, a gosto e uma pitada de açucar",
    modoDePreparo:
      "Modo de Preparo: Cozinhe a beterraba emágua, com sal a gosto. Escorra, deixe esfriar e descasque e corte em cubos ou fatias e termpere com o seguinte molho: misture o azeite com o vinagre, acrescenteos cravos amassados, o louro picado e o açucar. Deixe marinar por uma hora e meia na geladei e sirva",
    rendimento: "Rende: 7 porções",
  },

  {
    receita: " Carne Louca",
    imagem:
      "https://minhasdelicias.com/wp-content/uploads/2018/11/CarneLouca.jpg",
    ingredientes:
      "1kd de acém, 2 copos de vinagre, 2 tabletes de caldo de carne, 1 folha de louro. Molho 2 colheres de óleo, 300g de azeitonas verdes picadas, 2 cebolascortadas em rodelas, 1 pimentão verde cortado em rodelas, 1/2 xícara de salsinha picada, 2 colheres de vinagre, azeite para regar",
    modoDePreparo:
      "Modo de Preparo: Cozinhe a carne em 3 copos de água, 1 copo de vinagre, o calçdo de carne e o louro em uma panela de pressão de 45 minuros a 1 hora. A seguir destampe a panela e deixe no fogo até secar. Prepare o molho, refogando as cebolas e as azeitonas, o azeite e por último, acrescente a salsa picada e 1 copo de vinagre Deixe a carne esfriar e corte em fatias finas. coloque numa travessa as fatias de carne e o molho e sirva.",
    rendimento: "Rende: 9 porções",
  },

  {
    receita: "Salada de Verão",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGhIHsk14ypx_amwTcCGbRnBCvsxrI2KdfFQ&usqp=CAU",
    ingredientes:
      "Ingredientes: 1/2 é de alface, 1 colher de vinagre, 1/2 xícara de maionese, 1 colher de molho inglês, 1 colher de sal, 1 tomate cortado em pedaços, 1 lata de sardinha, 4 fatiados",
    modoDePreparo:
      "Modode Preparo: Lave a alface, os rabanetes e os tomates. Misture o vinagre, o molho inglês a maionese e sal. Coloque o alface, rabanete e o tomate em uma travessa e cobra com o molho.",
    rendimento: "Rende: 5 porções",
  },

  {
    receita: " Suflê de Alho Poró",
    imagem:
      "https://organicsnewsbrasil.com.br/wp-content/uploads/2015/12/gratinado-de-queijo-e-alho-por%C3%B3-696x484.jpg",
    ingredientes:
      "Ingredientes: 2 xíxaras de alho poró cortado em rodelas, 3 colheres de farinha de trigo, 1 colher de sopa de margarina, 1 1/3 xícara de leit, 4 gemas, 4 claras batidam em neve sal a gosto ",
    modoDePreparo:
      "Modo de Preparo: Refogue as rodelas de alho poró na manteiga por alguns minutos e depois adicione o leite e dexe cozinhar por mais um tempo, mexendo sempre, adicione sal e farinha de trigo e mex até engrossar ligeiramente. Retire do fogo e deixe esfriar. Adicione as gemas e por último, adicione as claras em neve mexendo delicadamente. Despeje em umatravessa grande ou em vários ramekins pequenos. Caso seja em uma travessa grande, deixe assar por 40 minutos em forno médio, se for nos ramenkins, asse por 10 minutos.",
    rendimento: "Rende: 7 porções",
  },

  {
    receita: " Leite Condensado caseiro",
    imagem:
      "https://img.cybercook.com.br/imagens/receitas/38/leite-condensado-caseiro-varias.jpg",
    ingredientes:
      "Ingredientes: 1 xícara de leite em pó, 1 xícara de açucar cistal, 1/2 xícara de água fervente",
    modoDePreparo:
      "Modo de Preparo: Coloque no liquidificador a água fervente, o leite em pó e o açucar. Bata até dar a consistência de leite condensado",
    rendimento: "Rende: 340g",
  },

  {
    receita: " Docinhos de Milho Verde",
    imagem:
      "https://s2.glbimg.com/ifxTdmo9yW9ATIrj-D5wsbVHUu8=/0x0:231x199/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/05/13/21/07/24/269/docinho.jpg",
    ingredientes:
      "Ingredientes: 1 lata de leite condensado, 1 lata de milho verde escorrido, 1 colher de margarina, açucar granulado",
    modoDePreparo:
      "Modo de Preparo: Bata no liquidificador, o leite condensado com o milho verde, acrescente a margarinawe leve ao fogo mexendo sempre até soltar do fundo da panela. Deixe esfriar em um pratountado com margarina, enrole os docinhos em forma de pequenas bolinhas, e passe no açucar granulado. Coloque em forminhas de papel e sirva.",
    rendimento: "Rende: 28 porções",
  },

  {
    receita: " Mousse de Goiaba",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65epMXe5ZHrMEXBuiTHtntOCqTktSANzdd8rDOAPdzQX6yCaM1vGkQJT5NOt8-LoiYcQ&usqp=CAU",
    ingredientes:
      "5 goiabas vermelhas médias bem maduras, 1 lata de leite condensado 1 envelope de gelatina sem sabor, 2 caixinhas de creme de leite",
    modoDePreparo:
      "Modo de preparo: Descasque as goiabas e bata no liquidificador com 1/4 de xícara de água e depois coe para tirar as sementes. dissolva a gelatina em 4 colheres de água morna. Bata no liquidificador a polpa da goiaba com a gelatina, o leite condensado, o creme de leite até virar uma mistura homogênea. Coloque na geladeira por no mínimo 4 horas.",
    rendimento: "Rende: 12 porções",
  },

  {
    receita: "Raspadinha de Limão",
    imagem:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/9E38C6F5-14FA-4FE8-B44D-E3594E216B00/Derivates/6CCEF865-7641-43CD-BFE2-F8AF523CE69E.jpg",
    ingredientes:
      "Ingredientes: 1 lata de leite condensado, 1/2 xícara de suco de limão, 1 colher de sopa de raspas de limão, gelo picado",
    modoDePreparo:
      "Modo de Preparo: Coloque o leite condensado, o suco e as raspas no liquidificado. Bata até adiquie=rir uma consistência cremosa. Distribua as raspas de gelo em copos altos e despeje o creme de limãoe sirva.",
    rendimento: "Rende: 8 porções",
  },

  {
    receita: "Gelado de Abacaxi",
    imagem:
      "https://cdn.panelinha.com.br/receita/1417485600000-Abacaxi-retro-com-sorvete.jpg",
    ingredientes:
      "Ingredientes: 1 abacaxi grande (700g), maduro com a coroa de folhas, 1 banana nanica média cortada em pedaços, 1 copo de iorgute natural, 1/2 xícara de açucar.",
    modoDePreparo:
      "Modo de Preparo: Corte o abacaxi ao meio, no sentido do comprimento, e remova a polpa com a ajuda de uamfaca sem ferir a casca e reserve. Retire a oarte dura do mei, corte a polpa do abacaxi em pedaços, junte a banana picada, o iorgute, o açucar e bata no liquidificador até obter um purê bem homogêneo. passe para uma forma de gelo, leve ao congelador e deixe firmar. Na hora de servir, vemova os cubos da forma e bata novamente até a mistura ficar cremosa. passe para a casca do abacaxi, e decore",
  },
];

export function Verão() {
  const [receita, setReceita] = useState();
  return (
    <>
      <Header
        title="Verão"
        image={"https://cdn-icons-png.flaticon.com/512/2917/2917249.png"}
      />

      <div className={styles.introText}>
        <p> É como um sol de verão</p>
        <p>Queimando no peito</p>
        <p>Nasce um novo desejo</p>
        <p>Em meu coração</p>

        <p>É uma nova canção</p>
        <p>Rolando no vento</p>
        <p>Sinto a magia do amor</p>
        <p>Na palma da mão</p>

        <p>É verão</p>
        <p>Bom sinal</p>
        <p>Já é tempo</p>
        <p>De abrir o coração</p>
        <p>E sonhar</p>
        <p className={styles.credit}>Canção de verão - Roupa Nova</p>
      </div>

      <dvi>
        <h2 className={styles.subTitle}>
          Frutas, Hortaliças e Vegetais de Cada Estação
        </h2>

        <ul>
          <li className={styles.list} >
            <h4 className={styles.categoryList}>Frutas</h4>
            Abacate, abacaxi, ameixa, banana-maçã, banana-nanica, carambola,
            coco verde, figo, framboesa, fruta do conde, goiaba, jaca,
            laranja-pêra, maçã, mamão, maracujá, melancia, nectarina, pêra,
            pêssego, seriguela, tangerina, uva e tomate.
          </li>
          <li className={styles.list}>
            <h4 className={styles.categoryList}>Hortaliças</h4>
            Acelga, alface, alho poró, cebolinha, coentro, couve, endívia,
            escarola, hortelã, repolho, rúcula e salsa.
          </li>
          <li className={styles.list}>
            <h4 className={styles.categoryList}>Vegetais</h4>
            Abóbora, abobrinha, beterraba, cará, chuchu, gengibre, inhame, jiló,
            milho verde, nabo, pepino, pimentão, quiabo.
          </li>
        </ul>
      </dvi>

      
      <div className={styles.receitasContainer}>
        <div className={styles.cardContainer}>
          <h2 className={styles.subTitle}>Receitas</h2>
          <p className={styles.textOne}>Clique em cima do nome da receita desejada para abri-la:</p>
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
