const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
  };
  
  // código omitido

const layout = {
  plot_bgcolor: getCSS("--bg-color"),
  paper_bgcolor: getCSS("--bg-color"),
  title: {
    text: "Redes sociais com mais usuários no mundo",
     x: 0,
     font: {
         color: getCSS("--primary-color"),
         family: getCSS("--font"),
         size: 30
     }
  },
    
  xaxis: {
      title: {
          text: "nome das redes sociais",
          font: {
              color: getCSS("--secondary-color")
          }
      }
  },
  yaxis: {
      title: {
          text: "bilhões de usuários ativos",
          font: {
              color: getCSS("--secondary-color")
          }
      }
  }
}



  export {getCSS}
  