
var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;

$("#indepth_boton_empezar").on("click",function(){
	$("#indepth_boton_empezar").click(false);
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	$("#indepth_resultados").show();
	 
	 var data = {
				  "preguntas": [
				    {
				      "pregunta": "<img src='../images/preguntas/1.png'>",
				      "respuestas": [
				        {
				          "respuesta": "<img src='images/opciones/1-a.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img src='images/opciones/1-b.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img src='images/opciones/1-c.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img src='images/opciones/1-d.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='../images/preguntas/2.png'>",
				      "respuestas": [
				        {
				          "respuesta": "<img src='images/opciones/2-a.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img src='images/opciones/2-b.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img src='images/opciones/2-c.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img src='images/opciones/2-d.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='../images/preguntas/3.png'>",
				      "respuestas": [
				        {
				          "respuesta": "<img src='images/opciones/3-a.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img src='images/opciones/3-b.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img src='images/opciones/3-c.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img src='images/opciones/3-d.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='../images/preguntas/4.png'>",
				      "respuestas": [
				        {
				          "respuesta": "<img src='images/opciones/4-a.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img src='images/opciones/4-b.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img src='images/opciones/4-c.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img src='images/opciones/4-d.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='../images/preguntas/5.png'>",
				      "respuestas": [
				        {
				          "respuesta": "<img src='images/opciones/5-a.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img src='images/opciones/5-b.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img src='images/opciones/5-c.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img src='images/opciones/5-d.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='../images/preguntas/6.png'>",
				      "respuestas": [
				        {
				          "respuesta": "<img src='images/opciones/6-a.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img src='images/opciones/6-b.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img src='images/opciones/6-c.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img src='images/opciones/6-d.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='../images/preguntas/7.png'>",
				      "respuestas": [
				        {
				          "respuesta": "<img src='images/opciones/7-a.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img src='images/opciones/7-b.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img src='images/opciones/7-c.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img src='images/opciones/7-d.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='../images/preguntas/8.png'>",
				      "respuestas": [
				        {
				          "respuesta": "<img src='images/opciones/8-a.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img src='images/opciones/8-b.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img src='images/opciones/8-c.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img src='images/opciones/8-d.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='../images/preguntas/9.png'>",
				      "respuestas": [
				        {
				          "respuesta": "<img src='images/opciones/9-a.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img src='images/opciones/9-b.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img src='images/opciones/9-c.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img src='images/opciones/9-d.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='../images/preguntas/10.png'>",
				      "respuestas": [
				        {
				          "respuesta": "<img src='images/opciones/10-a.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img src='images/opciones/10-b.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img src='images/opciones/10-c.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img src='images/opciones/10-d.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='../images/preguntas/11.png'>",
				      "respuestas": [
				        {
				          "respuesta": "<img src='images/opciones/11-a.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img src='images/opciones/11-b.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img src='images/opciones/11-c.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img src='images/opciones/11-d.png'>",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img src='../images/preguntas/12.png'>",
				      "respuestas": [
				        {
				          "respuesta": "<img src='images/opciones/12-a.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img src='images/opciones/12-b.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img src='images/opciones/12-c.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img src='images/opciones/12-d.png'>",
				          "tipo": "false"
				        }
				      ]
				    }
				  ]
				};
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_pregunta">'+(i+1)+'- '+item.pregunta+'</div><div class="indepth_pregunta_main"><div class="indepth_pregunta_img"><img src="'+urlIndepth+'images/preguntas/'+(i+1)+'.png" /></div><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				div_items+='<div class="indepth_respuesta_item active" num="'+j+'">'+items.respuesta+'</div>';
			});						
										
			var div_fin='</div></div></div>';
			 
			 $("#indepth_pregunta_cont").append(div+div_items+div_fin);			 
		 });
		 
		 $("#indepth_page1").css({
			"top":ventana_alto-100,
			"visibility":"visible",
			"height": "auto"
		});
		
		$("#nav-bar-stats,#top-bar-wrapper,#body-wrapper").hide();
		
		$("#indepth_page1").show();
		
		$("#indepth_page1").animate({
			top: 0
		},2000 );
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			var respuesta_cont = $(this).parent();
			var pregunta_num = respuesta_cont.attr("num");
			var respuesta_num = $(this).attr("num");
			var pregunta_obj = preguntas[pregunta_num];
			var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
			
			tipo= (respuesta_obj.tipo === "true");
			
			if(tipo){
				$(this).addClass("bien");
				respuestas_array[pregunta_num]=true;
			}else{
				$(this).addClass("mal");
				respuestas_array[pregunta_num]=false;
			}
			
			respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
			respuesta_cont.find('.indepth_respuesta_item').click(false);
						
						
						
			if(preguntas.length == respuestas_array.length){
				respuestas_num=0;
				
					$.each(respuestas_array, function( i, item ) {
					  	if(item!=undefined)
					  		respuestas_num++;
				  	});
				
				if(respuestas_num == preguntas.length){
					finish_test();
				}
				
			}
			
		});
		
		
});

function finish_test(){
	
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
	var ventana_ancho = $(window).width();
	
	
	
	$("#indepth_resultados").css({
		"visibility": "visible",
		"position":"fixed",
		"top": 0,
		"left": -ventana_ancho
	});
  	
  	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$.each(respuestas_array, function( i, item ) {
	  	if(item){
		  	aciertos++;
	  	}
  	});
  	
  	aficionado="";
  	msg="";

  	if (aciertos <= 3) {
		$("#indepth_resultados").css({
			"visibility": "visible",
			"position":"fixed",
			"top": 0,
			"left": -ventana_ancho
		});
		$(".inner").append("<img src='"+urlIndepth+"images/respuestas/0.png'>");
		totalfb = "mal"
	} else if (aciertos > 3 && aciertos <= 6) {
		$("#indepth_resultados").css({
			"visibility": "visible",
			"position":"fixed",
			"top": 0,
			"left": -ventana_ancho
		});
		$(".inner").append("<img src='"+urlIndepth+"images/respuestas/1.png'>");
		totalfb = "chavo";
	} else if (aciertos > 6 && aciertos <= 9) {
		$("#indepth_resultados").css({
			"visibility": "visible",
			"position":"fixed",
			"top": 0,
			"left": -ventana_ancho
		});
		$(".inner").append("<img src='"+urlIndepth+"images/respuestas/2.png'>");
		totalfb = "defiendes";
	} else if (aciertos > 9) {
		$("#indepth_resultados").css({
			"visibility": "visible",
			"position":"fixed",
			"top": 0,
			"left": -ventana_ancho
		});
		$(".inner").append("<img src='"+urlIndepth+"images/respuestas/3.png'>");
		totalfb = "mrchip";
	}

	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$("#indepth_twittear").click(function(){
  		var text = "";
		if (totalfb == "mal") {
			text = encodeURIComponent("¡¿De qué te vas a disfraza?!");
		} else if (totalfb == "chavo") {
			text = encodeURIComponent("Estas chavo, chavo");
		} else if (totalfb == "defiendes") {
			text = encodeURIComponent("Te defiendes");
		} else if (totalfb == "mrchip") {
			text = encodeURIComponent("Eres un experto, el Mr. Chip mexicano");
		}
		
		var url = encodeURIComponent("http://juanfutbol.com/indepth/solo-para-verdaderos-conocedores-del-fut-mexa");
		window.open("https://twitter.com/share?text="+text+"&hashtags=JFQuizz&url="+url+"?m="+totalfb,"","width=500, height=300");
	});

	$("#indepth_facebook").click(function(){
		var url = encodeURIComponent("http://juanfutbol.com/indepth/solo-para-verdaderos-conocedores-del-fut-mexa?m="+totalfb);
		window.open("https://www.facebook.com/sharer/sharer.php?u="+url,"","width=500, height=300");
	});

	$("#indepth_whatsapp").click(function(){
		var text = "";
		if (totalfb == "mal") {
			text = encodeURIComponent("¡¿De qué te vas a disfraza?!");
		} else if (totalfb == "chavo") {
			text = encodeURIComponent("Estas chavo, chavo");
		} else if (totalfb == "defiendes") {
			text = encodeURIComponent("Te defiendes");
		} else if (totalfb == "mrchip") {
			text = encodeURIComponent("Eres un experto, el Mr. Chip mexicano");
		}

		var url = encodeURIComponent("http://juanfutbol.com/indepth/solo-para-verdaderos-conocedores-del-fut-mexa?m="+totalfb);
		window.open("whatsapp://send?text="+url+" "+text);
	});
  	
}

var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});
});

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    $("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});
});


