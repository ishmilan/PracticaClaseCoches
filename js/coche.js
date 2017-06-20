function Coche(){
	/*propiedades*/
	this.posX=0;
	this.posY=0;
	this.nivelCombustible=70;
	this.kilometrosRecorridos=0;
	this.capacidadDeposito=100;
	this.avatar="";
	this.mensaje="";
	/*metodos*/
	this.repostar=function(litros=100){
		this.nivelCombustible+=litros;
		if (this.nivelCombustible>this.capacidadDeposito) {
			this.nivelCombustible=this.capacidadDeposito;
		}
		this.mensaje="";
		return true;
	}
	this.verConsola=function() {
		var tabla="<table style='width:40%;margin:0 auto;text-align:center;'>\n<tr><th>Combustible</th><th>Cuenta KMs</th><th>Autonomia</th></tr>\n";
		tabla+="<tr><td>"+parseFloat(this.nivelCombustible).toFixed(2)+"L</td><td>"+this.kilometrosRecorridos+"KMs</td><td>";
		tabla+=parseFloat(this.nivelCombustible*(100/8)).toFixed(2)+"km</td></tr>\n</table>";
		return tabla;
	}
	this.mover=function(direction){
		if (this.nivelCombustible<0.25) {
			this.mensaje="Sin combustible.";
			return false;
		}else{
			var incre=10;
			var cardinales="ONES";
			var valor=cardinales.indexOf(direction);
			switch(valor){
				case 0:
					this.posX=parseInt(this.avatar.style.left)-incre;
					this.avatar.style.left=this.posX+"px";
					break;
				case 1:
					this.posY=parseInt(this.avatar.style.top)-incre;
					this.avatar.style.top=this.posY+"px";
					break;
				case 2:
					this.posX=parseInt(this.avatar.style.left)+incre;
					this.avatar.style.left=this.posX+"px";
					break;
				case 3:
					this.posY=parseInt(this.avatar.style.top)+incre;
					this.avatar.style.top=this.posY+"px";
					break;
			}
			this.kilometrosRecorridos+=3;
			this.nivelCombustible-=0.24;
			return true;
		}
	}
}