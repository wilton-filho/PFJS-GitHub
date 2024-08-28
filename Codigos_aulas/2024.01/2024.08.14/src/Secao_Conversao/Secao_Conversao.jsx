import { useState } from "react";
import css from "./Secao_Conversao.module.css";
import emailjs from "@emailjs/browser";

function Secao_Conversao() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
  });

  function getData(e) {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  }

  function validar() {
    if (form.nome === "" || form.email === "")
      alert("Todos os campos precisam ser preenchidos!");
    else {
      const templateParams = {
        from_name: form.nome,
        from_email: form.email,
      };

      emailjs
        .send(
          "service_9yo03xi",
          "template_svfyntr",
          templateParams,
          "AzC7jMvkdB2aKUQQQ"
        )
        .then(
          (response) => {
            // console.log("SUCCESS!", response.status, response.text);
			alert('Formulário enviado com sucesso!');
          },
          (error) => {
            // console.log("FAILED...", error);
			alert('Erro no envio!');
          }
        );
    }
  }

  return (
    <section>
		<div className="container secaoConversao">
			<h2>Preencha o formulário abaixo</h2>
			<form>
				<label htmlFor="">Nome:</label>
				<input type="text" name="nome" onChange={getData} />

				<label htmlFor="">Email:</label>
				<input type="email" name="email" onChange={getData} />

				<input type="button" value="Enviar" onClick={validar} />
			</form>
		</div>
    </section>
  );
}

export default Secao_Conversao;
