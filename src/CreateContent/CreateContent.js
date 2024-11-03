import React, { useState } from "react";
import Swal from "sweetalert2";
import './CreateContent.scss';

const CreateContent = () => {
  const [content, setContent] = useState({
    username: "",
    title: "",
    category: "Notícias Gerais",
    description: "",
    image: "",
  });

  const categories = ['Notícias Gerais', 'Política', 'Economia', 'Esportes', 'Entretenimento', 'Tecnologia', 'Saúde', 'Educação', 'Internacional', 'Cultura', 'Ciência'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setContent((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      Swal.fire('Erro', 'Por favor, selecione uma imagem.', 'error');
    }
  };

  const handleSave = (e) => {
    e.preventDefault();  // Previne o comportamento padrão do formulário
    Swal.fire({
      title: "Deseja enviar este conteúdo?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, enviar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const savedContent = JSON.parse(localStorage.getItem("contentList")) || [];
        localStorage.setItem("contentList", JSON.stringify([...savedContent, content]));
        Swal.fire('Enviado!', 'Seu conteúdo foi enviado com sucesso.', 'success');
        setContent({ username: "", title: "", category: "Notícias Gerais", description: "", image: "" });
      }
    });
  };

  return (
    <div className="create-content-container">
      <h2>Criar Conteúdo</h2>
      <form onSubmit={handleSave}>
        <input 
          name="username" 
          type="text"
          value={content.username} 
          onChange={handleChange} 
          placeholder="Nome do Usuário" 
          required 
        />
        <input 
          name="title" 
          type="text"
          value={content.title} 
          onChange={handleChange} 
          placeholder="Título da Reportagem" 
          required 
        />
        <select name="category" value={content.category} onChange={handleChange}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <textarea 
          name="description" 
          value={content.description} 
          onChange={handleChange} 
          placeholder="Descrição" 
          required 
        />
        <input type="file" onChange={handleImageUpload} required accept="image/*" />
        <button type="submit">Salvar Conteúdo</button>
      </form>
    </div>
  );
};

export default CreateContent;
