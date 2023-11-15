import { useContext, createContext, useState, useEffect } from "react";

const ArticleContext = createContext()

const ArticleProvider = ({ children }) => {
    const [articles, setArticles] = useState([])
    const [article, setArticle] = useState(null)

    useEffect(() => {
        fetchArticles()
    },[])

    const fetchArticles = async () => {
        try {
            const response = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/`);
            const data = await response.json();
            setArticles(data);
        }catch (error){
            console.error('Couldnt fetch articles!', error)
        }
    }
    const fetchArticle = async (id) => {
        try {
            const response = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)
            const data = await response.json()
            setArticle(data)
        }catch (error){
            console.error('Couldnt fetch article!', error)
        }
    }
    const clearArticle = () =>{
        setArticle(null)
    }


return (
    <ArticleContext.Provider value={{ articles, article, fetchArticles, fetchArticle, clearArticle }}>
        {children}
    </ArticleContext.Provider>
    );
};

const useArticleContext = () => {
    const context = useContext(ArticleContext);
    if (!context) {
      throw new Error('useArticleContext must be used within an ArticleProvider');
    }
    return context;
  };

  export { ArticleProvider, useArticleContext };