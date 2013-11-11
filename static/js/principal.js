
$('.img-rounded').eq(0).on('mouseover',{id:0}, mostrar);
$('.img-rounded').eq(1).on('mouseover',{id:1}, mostrar);
$('.img-rounded').eq(2).on('mouseover',{id:2}, mostrar);
$('.img-rounded').eq(3).on('mouseover',{id:3}, mostrar);


function mostrar(valor){
	var primer=$('.sobre').eq(0);
	var segundo=$('.sobre').eq(1);
	var tercer=$('.sobre').eq(2);
	var cuarto=$('.sobre').eq(3);

	if(valor.data.id==0){
		primer.slideDown(50);
		primer.html('<h5>Playa de Brasil<span class="glyphicon glyphicon-picture iconito"></span></h5>');
	}
	if(valor.data.id==1){
		segundo.slideDown(50);
		segundo.html('<h5>Playa el Amor - Mancora<span class="glyphicon glyphicon-picture iconito"></span></h5>');
	}
	if(valor.data.id==2){
		tercer.slideDown(50);
		tercer.html('<h5>Playa las Pocitas - Mancora<span class="glyphicon glyphicon-picture iconito"></span></h5>');
	}
	if(valor.data.id==3){
		cuarto.slideDown(50);
		cuarto.html('<h5>PLaya la punta - Mancora<span class="glyphicon glyphicon-picture iconito"></span></h5>');
	}

}

$('.img-rounded').eq(0).on('mouseleave',{id:0}, ocultar);
$('.img-rounded').eq(1).on('mouseleave',{id:1}, ocultar);
$('.img-rounded').eq(2).on('mouseleave',{id:2}, ocultar);
$('.img-rounded').eq(3).on('mouseleave',{id:3}, ocultar);


function ocultar(valor){
	if(valor.data.id==0){$('.sobre').eq(0).hide();}
	if(valor.data.id==1){$('.sobre').eq(1).hide();}
	if(valor.data.id==2){$('.sobre').eq(2).hide();}
	if(valor.data.id==3){$('.sobre').eq(3).hide();}

}

/*----------------------------------*/

$('.subportada').mouseover(function(){
	$(this).css({'box-shadow':'0px 0px 5px 5px #000','cursor':'pointer'});
})

$('.subportada').mouseleave(function(){
	$(this).css({'box-shadow':'none','cursor':'none'});
})

/*----------------------------------*/

$('.milist').eq(0).on('mouseover',{id:0},senalizar);
$('.milist').eq(1).on('mouseover',{id:1},senalizar);

function senalizar(valor){
	if(valor.data.id==0){
		$('.senal').eq(0).show();
	}
	else if(valor.data.id==1){
		$('.senal').eq(1).show();
	}
}

/*----------------------------------*/


