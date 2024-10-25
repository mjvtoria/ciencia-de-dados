const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
  };
  
  const layout = {
    plot_bgcolor: getCSS("--bg-color"),
    paper_bgcolor: getCSS("--bg-color")
    title: {
        text: "Redes sociais com mais usuários no mundo"
      }


}


  export {getCSS}
  