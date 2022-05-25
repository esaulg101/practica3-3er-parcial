class Form{
    constructor(){
        this.title=createElement("h2");
        this.nombredelproducto=createElement("h3");
        this.departamento=createElement("h3");
        this.preciodelproducto=createElement("h3");
        this.descripcion=createElement("h3");
        this.stock=createElement("h3");
        this.inputN = createInput();
        this.inputP = createInput();
        this.inputF = createInput();
        this.inputR = createInput()
        this.inputK = createInput()
        this.button = createButton("registrar producto");
    } 
    display(){
        this.title.html("registro de prodructo");
        this.title.position(500,0);
        this.nombredelproducto.html("ingresa el nombre del producto");
        this.nombredelproducto.position(500,100);
        this.inputN.position(530,160);
        this.departamento.html("ingresa el nombre del departamento");
        this.departamento.position(500,200);
        this.inputP.position(560,260);
        this.preciodelproducto.html("ingresa el precio del producto");
        this.preciodelproducto.position(550,300);
        this.inputF.position(570,360);
        this.descripcion.html("descripcion del producto");
        this.descripcion.position(560,400);
        this.inputR.position(580,460);
        this.stock.html("introduce el stock");
        this.stock.position(570,500);
        this.inputK.position(590,560);
        this.button.position(700,660);

        this.button.mousePressed(()=>{
            producto.nombredelproducto=this.inputN.value();
            producto.departamento=this.inputP.value();
            producto.preciodelproducto=this.inputF.value();
            producto.descripcion=this.inputR.value();
            producto.stock=this.inputK.value();
            producto.update();
        })
    }
}