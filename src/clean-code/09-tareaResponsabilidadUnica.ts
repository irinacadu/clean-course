(() => {
  type HtmlType = "input" | "select" | "textarea" | "radio";

  interface HtmlElement {
    id: string;
    type: HtmlType;
  }

  interface InputAttributes {
    value: string;
    placeholder: string;
    id: string;
  }


  class InputElement {
    public inputAttribute: InputAttributes;
    public htmlElement: HtmlElement;
   
    constructor(htmlElement: HtmlElement, inputAttribute: InputAttributes) {
      (this.htmlElement = htmlElement), 
      (this.inputAttribute = inputAttribute)
    
    }

   
  }



  const nameField = new InputElement(
    { type: "input", id: "A" },
    { value: "value", placeholder: "placeholder", id: "B" },
    
  );

  console.log({ nameField });
})();
