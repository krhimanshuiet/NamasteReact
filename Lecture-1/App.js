    // building h1 tag using react 

    const heading1 = React.createElement(
        "h1" ,
         {
          id:"title",
         } ,
        "Heading - 1",
        );
  
  
        const heading2 = React.createElement(
        "h1" ,
         {
          id:"title",
         } ,
        "Heading - 2",
        );
  
  
        const container = React.createElement("div" ,
        {
          id:"container"
        },
        [heading1,heading2],
        );
  
      // {}  is nothing but object
  
      // react element heading is nothing but object.
  
  
      // console.log(heading);
  
   
     // creating root element 
  
      const root = ReactDOM.createRoot(document.getElementById('root'));
  
     // rendering heading  tag on root
  
  
     root.render(container);

     // render function always override the things not appends.
  
    //  root.innerHTML = "hello"
    //  root.render(root.innerHTML);
  
    //  root.render(heading); 
      