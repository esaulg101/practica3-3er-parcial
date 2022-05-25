class Form2{
    constructor(){
        this.title=createElement("h2");
        this.nombreCliente=createElement("h3");
        this.edad=createElement("h3");
        this.apellido=createElement("h3");
        this.id=createElement("h3");
        this.telefono=createElement("h3");
        this.correo=createElement("h3");
        this.tipodeCliente=createElement("h3");
        this.inputN = createInput();
        this.inputR = createInput();
        this.inputA = createInput();
        this.inputB = createInput();
        this.inputC = createInput();
        this.inputD = createInput();
        this.inputE = createInput();
        this.button = createButton("registrar cliente");
    } 
    display(){
        this.title.html("registro de cliente");
        this.title.position(130,0);
        this.nombreCliente.html("ingresa el nombre del cliente");
        this.nombreCliente.position(130,50);
        this.inputN.position(130,100);
        this.edad.html("ingresa la edad");
        this.edad.position(130,150);
        this.inputR.position(150,200);
        this.apellido.html("ingresa el apellido");
        this.apellido.position(130,250);
        this.inputA.position(130,300);
        this.id.html("ingresa el id");
        this.id.position(160,350);
        this.inputB.position(180,400);
        this.telefono.html("ingresa el número telefonico");
        this.telefono.position(130,450);
        this.inputC.position(130,500);
        this.correo.html("ingresa el correo");
        this.correo.position(180,550);
        this.inputD.position(200,600);
        this.tipodeCliente.html("ingresa el tipo de cliente ");
        this.tipodeCliente.position(130,650);
        this.inputE.position(130,700);

        this.button.position(200,760);

        this.button.mousePressed(()=>{
            cliente.nombreCliente=this.inputN.value();
            cliente.edad=this.inputR.value();
            cliente.apellido=this.inputA.value();
            cliente.id=this.inputB.value();
            cliente.telefono=this.inputC.value();
            cliente.correo=this.inputD.value();
            cliente.tipodeCliente=this.inputE.value();

            cliente.update();
        })
    }
}