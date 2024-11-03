import React, { useEffect, useState } from 'react';
import './ShowContent.scss';

const ShowContent = () => {
  const [newsList, setNewsList] = useState([]);
  const [savedNews, setSavedNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    fetch('./Noticias.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setNewsList(data.noticias);
      })
      .catch(error => console.error('Erro ao carregar as notícias:', error));

    const storedContent = JSON.parse(localStorage.getItem("contentList")) || [];
    setSavedNews(storedContent);
  }, []);

  const combinedNewsList = [...newsList, ...savedNews];

  const filteredNewsList = combinedNewsList.filter(news => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    return (
      news.title.toLowerCase().includes(lowerCaseTerm) ||
      news.category.toLowerCase().includes(lowerCaseTerm)
    );
  });

  const toggleDescription = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="show-content-container">
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Pesquisar por título ou categoria..." 
          aria-label="Campo de pesquisa" 
          value={searchTerm} 
          onChange={handleSearchChange} 
          />
      </div>
          <h2>Conteúdos</h2>
      <div className="news-grid">
        {filteredNewsList.map((news, index) => (
          <div key={index} className="news-item">
            <h3>{news.title}</h3>
            <p><strong>Categoria:</strong> {news.category}</p>
            {news.image && <img src={news.image} alt={news.title} />}
            <p className="description">
              {expanded[index] ? news.description : `${news.description.substring(0, 100)}...`} 
              {news.description.length > 100 && (
                <span className="show-more" onClick={() => toggleDescription(index)}>
                  {expanded[index] ? 'Mostrar Menos' : 'Mostrar Mais'}
                </span>
              )}
            </p>
            <p><strong>Autor:</strong> {news.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowContent;
