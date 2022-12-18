import Header from "../components/Header";
import styles from "../styles/pages/inicio.module.css";

export function Inicio() {
  return (
    <>
      <Header
        className={styles.outonoTitle}
        title="Bem Vindo!"
        image={"https://cdn-icons-png.flaticon.com/512/4251/4251938.png"}
      />
      <div className={styles.textIntro}>
        <h2 className={styles.sub}>Cozinhando com as Estações</h2>

        <p><p className={styles.textOne}>Clique em cima do nome da receita desejada para abri-la:</p>Problema com não saber o que fazer com aquele vegetal, fruta ou verdura que comprou em grande quantidade que, por causa da estação estava por um preço muito bom na feira?</p>
        <p>Não se preocupe! Aqui você vai encontrar uma seleção de receitas que vão te ajudar a fazer daquele vegetal, um prato delicioso, fácil e totalmente caseiro, o que faz ele ser um prato muito mais saudável.</p>
        <p>
          Uma boa alimentação é composta por uma variedade de frutas, legumes e
          verduras. Cada alimento se desenvolve melhor em uma determinada época
          do ano e consumi-lo na sua safra é vantajoso e traz muitos benefícios
          como:
        </p>
        <p>
          :: Disponibilidade de nutrientes: quando colhido na época certa, o
          alimento tem maior qualidade nutricional, e isso se dá devido ao
          aproveitamento do clima e absorção dos nutrientes presentes no solo;
        </p>
        <p>
          :: Mais sabor: cultivado na sua época natural, o alimento aproveita o
          clima e o solo e, consequentemente, desenvolve melhor seu aroma e
          sabor;
        </p>
        <img
          className={styles.textImg}
          src="https://cdn-icons-png.flaticon.com/512/5190/5190232.png"
        ></img>
        <p>
          :: Menor preço: os custos da produção serão menores, com menos
          interferência do produtor e de aditivos que encarecem o produto;
        </p>
        
        <p>
          :: Menos agrotóxicos: o alimento cultivado em sua época correta reduz
          a utilização de pesticidas e agrotóxicos, ajudando a preservar o meio
          ambiente.
        </p>
        <p>
          Uma alimentação saudável, equilibrada e rica em fibras auxilia na
          saúde intestinal, na prevenção do aumento do colesterol e da glicemia
          e na regulação do metabolismo.{" "}
        </p>
        {" "}
        <h3 className={styles.sub}>
          Como higienizar as frutas, hortaliças e vegetais
        </h3>
        <p>
          A higienização de frutas, verduras e legumes é importante para
          diminuir os riscos de contaminações por bactérias que estão presentes
          nos alimentos quando eles são colhidos ou comercializados. Também
          chamada de sanitização, a higienização desses alimentos deve ser feita
          sempre antes de consumi-los ou de armazená-los em geladeiras ou na
          cozinha. Veja dicas para higienizar alimentos e evitar contaminações:
        </p>
        <img
          className={styles.textImg}
          src="https://cdn-icons-png.flaticon.com/512/3983/3983735.png"
        ></img>
        <ul className={styles.list}>
          <li>
            Lave as mãos com sabonete líquido, esfregando inclusive o dorso, as
            unhas e entre os dedos.
          </li>
          <li>
            Lave as frutas, verduras ou legumes em água corrente removendo toda
            a sujeira.
          </li>
          <li>
            Em uma tigela, faça uma solução com 1 colher de sopa rasa de água
            sanitária (10ml) ou 2 colheres de sopa rasa de hipoclorito de sódio
            (20ml) em 1 litro de água.
          </li>
          <li>
            Coloque as frutas, legumes ou verduras na solução por 15 minutos.
          </li>
          <li>
            Retire os alimentos, lave-os em água corrente e os deixe secar
            naturalmente.
          </li>
          <li>
            Os alimentos que não forem consumidos na hora devem ser armazenados
            na geladeira para aumentar sua durabilidade.
          </li>
        </ul>
        <img
          className={styles.textImg}
          src="https://cdn-icons-png.flaticon.com/512/5648/5648223.png"
        ></img>
        <h3 className={styles.sub}>Como Conservar os Alimentos</h3>
        <p>
          O armazenamento na geladeira é o ideal, mas os alimentos também podem
          ser conservados no congelador. O consumidor precisa avaliar o estado
          físico e o tipo da fruta, verdura ou legume para escolher a melhor
          opção de conservação. Antes de guardar os alimentos, é importante
          tomar algumas precauções:
        </p>
        <ul className={styles.list}>
          <li>
            Não use caixas de madeira ou papelão para conservar a mercadoria.
            Coloque tudo em caixas de plástico ou vidro com tampa;
          </li>
          <li>Sempre mantenha a geladeira limpa e higienizada;</li>
          <li>
            Não deixe nada no chão ou próximo de fontes de sujeira ou de acesso
            de insetos.
          </li>
          <li>
            As frutas podem ser conservadas em temperatura ambiente caso ainda
            estejam verdes. Após o amadurecimento, é importante armazenar na
            geladeira e consumir em torno de 1 semana;
          </li>
          <li>
            Mantenha as verduras e legumes em locais frescos ou na geladeira,
            especialmente se não estiverem maduros demais. É possível usar potes
            para separar as verduras após secá-las, para consumo entre 2 e 3
            semanas;
          </li>
        </ul>
      </div>
    </>
  );
}
