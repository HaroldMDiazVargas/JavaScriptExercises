function HtmlElement(){
    this.click = function(){
        console.log('clicked');
    };
}


HtmlElement.prototype.focus = function(){
    console.log('focused');
};

function HtmlSelectElement(items = []){
    this.items = items;
    this.addItem = function(item){
        this.items.push(item);
    };

    this.removeItem = function(item){
        this.items.splice(this.items.indexOf(item),1)[0];
    };
    
    this.render = function(){
        let option = this.items.map(n => `<option>${n}</option>`);
return `
<select>${this.items.map(n =>`
    <option>${n}</option>`).join('')}
</select>`;
       
    };
}


function HtmlImageElement(src = ''){
    this.src = src;
    this.render = function(){
        return `<img src="${this.src}" />`;

    }
}

HtmlSelectElement.prototype = new HtmlElement;
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

HtmlImageElement.prototype = new HtmlElement;
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elements = [
    new HtmlSelectElement([1,2,3]),
    new HtmlImageElement("http://"),
];

for (let element of elements)
    console.log(element.render());
