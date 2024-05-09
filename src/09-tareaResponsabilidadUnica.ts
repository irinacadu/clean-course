(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';

    interface HtmlElement{
        id: string,
        type: HtmlType,
    }

    interface InputAttributes{
        value: string,
        placeholder: string,
        id: string,
    }


    class InputEvents {
        public inputAttribute : InputAttributes;
        public htmlElement : HtmlElement;
        constructor( 
            htmlElement : HtmlElement,
            inputAttribute : InputAttributes) {
                this.htmlElement = htmlElement,
                this.inputAttribute=inputAttribute;
           
        }

      

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    //? Idea para la nueva clase InputElement

    const nameField = new InputEvents(
        {type:'input',id:'A'},
        {value:'value',placeholder:'placeholder',id:'B'}
        
        );

    console.log({ nameField });

})()